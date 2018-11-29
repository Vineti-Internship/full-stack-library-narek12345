class Author < ApplicationRecord
    validates :fName ,presence: true
    validates :lName ,presence: true
    has_many :books
    validates_associated :books
end
