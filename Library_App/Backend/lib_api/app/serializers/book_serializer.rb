class BookSerializer < ActiveModel::Serializer
  attributes :id,:name,:pages,:genre,:description,:author
  def author
    object.author.fName + " " + object.author.lName
  end
end
