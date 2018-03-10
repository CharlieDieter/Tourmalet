class Activity < ApplicationRecord
  validates :title, :polyline, :athlete_id, presence: true

  belongs_to :user,
  foreign_key: :athlete_id

  def self.find_by_athlete_id(id)
    Activity.where(athlete_id: id)
  end

end
