class Iss < ApplicationRecord
  geocoded_by :longitude, :latitude
  after_validation :geocode
end
