class AddPagesGenreToBooks < ActiveRecord::Migration[5.2]
  def change
    add_column :books, :pages, :integer
    add_column :books, :genre, :string
  end
end
