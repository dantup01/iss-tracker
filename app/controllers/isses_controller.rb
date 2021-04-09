class IssesController < ApplicationController
  def index
    @iss = Iss.all

    @markers = @iss.geocoded.map do |iss|
      {
        lat: iss.latitude,
        lng: iss.longitude,
        image_url: helpers.asset_url('iss-icon.png')
      }
    end
  end
end
