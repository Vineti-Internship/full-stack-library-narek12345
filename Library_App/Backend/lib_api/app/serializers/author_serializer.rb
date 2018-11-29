class AuthorSerializer < ActiveModel::Serializer
  attributes :id,:fName,:lName,:email,:booksCount,:books,
  def booksCount
    object.books.length
  end
  has_many :books
end
