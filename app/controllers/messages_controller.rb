class MessagesController < ApplicationController
    def new
        @message = Message.new
    end
    def create
        @message = Message.create(msg_params)
        room = params[:message][:room_name]
        if @message.save
            # ActionCable.server.broadcast "room_channel",
            #                                 content: @message.content 
                                            
            ActionCable.server.broadcast( "room_#{room}",
                                           content: @message.content
                                        )
        else
            
        end
    end
    private
    def msg_params
        params.require(:message).permit(:content)
    end
end
