class BookSerializer < ActiveModel::Serializer
  attributes :id,:name,:pages,:genre,:description,:author,:author_id
  def author
    object.author.fName + " " + object.author.lName
  end
  belongs_to :author
end
