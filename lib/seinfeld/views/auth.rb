class Seinfeld
  module Views
    class Auth < Layout
      def html_title
        'Kata Chain'
      end

      alias page_title html_title
    end
  end
end
