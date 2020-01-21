class RoomChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "room_channel"
    stream_from "room_#{params[:room]}"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
