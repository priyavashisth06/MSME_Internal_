# Name :- Priya
# Roll No :- 25MEITJWD017
# Subject:- Gaining Proficiency in Web Technologies
class BookManager:
    def __init__(self):
        self.books = []

    def add_book(self):
        title = input("Enter book title: ").strip()
        author = input("Enter book author: ").strip()
        if not title or not author:
            print("Error: Title and Author cannot be empty!")
            return
        
        for book in self.books:
            if book["title"].lower() == title.lower():
                print("Error: This book already exists in the system.")
                return

        self.books.append({"title": title, "author": author})
        print(f"Success: '{title}' added successfully!")

    def search_books(self):
        if not self.books:
            print("The library is currently empty.")
            return

        query = input("Enter book title or author to search: ").strip().lower()
        if not query:
            print("Error: Search query cannot be empty!")
            return

        results = [b for b in self.books if query in b["title"].lower() or query in b["author"].lower()]

        if results:
            print("\n--- Search Results ---")
            for index, book in enumerate(results, 1):
                print(f"{index}. Title: {book['title']} | Author: {book['author']}")
        else:
            print("No matching books found.")

    def remove_book(self):
        if not self.books:
            print("The library is empty. Nothing to remove.")
            return

        title = input("Enter the exact title of the book to remove: ").strip().lower()
        for book in self.books:
            if book["title"].lower() == title:
                self.books.remove(book)
                print(f"Success: '{book['title']}' has been removed.")
                return
        print("Error: Book not found.")

    def display_books(self):
        if not self.books:
            print("No books available in the library.")
            return

        print("\n--- Available Books ---")
        for index, book in enumerate(self.books, 1):
            print(f"{index}. Title: {book['title']} | Author: {book['author']}")


def main():
    manager = BookManager()
    
    while True:
        print("\n=========================")
        print(" BOOK MANAGEMENT SYSTEM ")
        print("=========================")
        print("1. Add Book")
        print("2. Search Books")
        print("3. Remove Book")
        print("4. Display Available Books")
        print("5. Exit")
        print("=========================")
        
        choice = input("Enter your choice (1-5): ").strip()
        
        if choice == "1":
            manager.add_book()
        elif choice == "2":
            manager.search_books()
        elif choice == "3":
            manager.remove_book()
        elif choice == "4":
            manager.display_books()
        elif choice == "5":
            print("Exiting application. Goodbye!")
            break
        else:
            print("Invalid choice! Please enter a number between 1 and 5.")


if __name__ == "__main__":
    main()