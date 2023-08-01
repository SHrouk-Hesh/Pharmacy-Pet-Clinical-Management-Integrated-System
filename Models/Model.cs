using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
//using MySql.Data.MySqlClient;
//using System;
//using System.Collections.Generic;


namespace vetsite.Models
{

}


//public class PetOwner
//{
//    public int OwnerID { get; set; }
//    public string FirstName { get; set; }
//    public string LastName { get; set; }
//    public string Telephone { get; set; }
//    public string Email { get; set; }
//    public string Address { get; set; }
//    public string City { get; set; }
//    public string PostalCode { get; set; }
//}

//public class PetDatabase
//{
//    private MySqlConnection connection;
//    private string connectionString;

//    public PetDatabase(string server, string database, string username, string password)
//    {
//        connectionString = $"Server={server};Database={database};Uid={username};Pwd={password};";
//    }

//    public void Connect()
//    {
//        connection = new MySqlConnection(connectionString);
//        connection.Open();
//    }

//    public void Disconnect()
//    {
//        connection.Close();
//    }

//    public List<PetOwner> GetPetOwners()
//    {
//        List<PetOwner> petOwners = new List<PetOwner>();

//        string query = "SELECT * FROM PetOwners";
//        MySqlCommand command = new MySqlCommand(query, connection);

//        using (MySqlDataReader reader = command.ExecuteReader())
//        {
//            while (reader.Read())
//            {
//                PetOwner petOwner = new PetOwner();
//                petOwner.OwnerID = reader.GetInt32("OwnerID");
//                petOwner.FirstName = reader.GetString("FirstName");
//                petOwner.LastName = reader.GetString("LastName");
//                petOwner.Telephone = reader.GetString("Telephone");
//                petOwner.Email = reader.GetString("Email");
//                petOwner.Address = reader.GetString("Address");
//                petOwner.City = reader.GetString("City");
//                petOwner.PostalCode = reader.GetString("PostalCode");

//                petOwners.Add(petOwner);
//            }
//        }

//        return petOwners;
//    }

//    // Add more methods here for inserting, updating, or deleting data

//    public void Dispose()
//    {
//        Disconnect();
//    }
//}

//public class Program
//{
//    public static void Main(string[] args)
//    {
//        // Create an instance of the database
//        PetDatabase petDatabase = new PetDatabase("localhost", "your_database_name", "your_username", "your_password");

//        try
//        {
//            // Connect to the database
//            petDatabase.Connect();

//            // Retrieve pet owners from the database
//            List<PetOwner> petOwners = petDatabase.GetPetOwners();

//            // Display the retrieved pet owners
//            foreach (PetOwner petOwner in petOwners)
//            {
//                Console.WriteLine($"OwnerID: {petOwner.OwnerID}");
//                Console.WriteLine($"First Name: {petOwner.FirstName}");
//                Console.WriteLine($"Last Name: {petOwner.LastName}");
//                Console.WriteLine($"Telephone: {petOwner.Telephone}");
//                Console.WriteLine($"Email: {petOwner.Email}");
//                Console.WriteLine($"Address: {petOwner.Address}");
//                Console.WriteLine($"City: {petOwner.City}");
//                Console.WriteLine($"Postal Code: {petOwner.PostalCode}");
//                Console.WriteLine();
//            }
//        }
//        catch (Exception ex)
//        {
//            Console.WriteLine("Error: " + ex.Message);
//        }
//        finally
//        {
//            // Disconnect from the database
//            petDatabase.Dispose();
//        }
//    }
//}
