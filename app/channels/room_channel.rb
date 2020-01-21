class RoomChannel < ApplicationCable::Channel
  def follow(data)
    stream_from "room_#{data['room_id']}"
  end

  def unfollow(data)
  end
end
