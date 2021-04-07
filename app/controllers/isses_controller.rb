class IssesController < ApplicationController
  def index
    @iss = Iss.all

    # the `geocoded` scope filters only flats with coordinates (latitude & longitude)
    @markers = @iss.geocoded.map do |iss|
      {
        lat: iss.latitude,
        lng: iss.longitude,
        image_url: helpers.asset_url('iss-icon.png')
      }
    end
  end
end
