class AuthorSerializer < ActiveModel::Serializer
  attributes :id,:fName,:lName,:email,:booksCount,:books,
  def bookCount
    object.books.length
  end
end
