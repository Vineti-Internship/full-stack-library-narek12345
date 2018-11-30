class Author < ApplicationRecord
    validates :fName ,presence: true
    validates :lName ,presence: true
    has_many :books, dependent: :destroy
    validates_associated :books
end
