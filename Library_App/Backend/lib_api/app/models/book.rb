class Book < ApplicationRecord
  validates :name, presence: true
  validates :genre, presence: true
  belongs_to :author
end
