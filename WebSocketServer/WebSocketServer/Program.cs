using System;

namespace WebSocketServer
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine();
            Console.WriteLine("Welcome to the socket server.");
            Console.WriteLine();
            Console.WriteLine("Which server type would you like to create?");
            Console.WriteLine("    1) Hello World Server");
            Console.WriteLine();

            string input = Console.ReadLine();

            if (input == "1")
            {
                HelloServer server = new HelloServer();
                server.Start();
            }
            else
            {
                Console.WriteLine(string.Format("Sorry, {0} is not a valid option.", input));
            }
        }
    }
}
