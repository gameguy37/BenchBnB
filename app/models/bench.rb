# == Schema Information
#
# Table name: benches
#
#  id          :bigint           not null, primary key
#  description :string           not null
#  lat         :float            not null
#  lng         :float            not null
#

class Bench < ApplicationRecord

    validates :description, :lat, :lng, presence: true
    
end
