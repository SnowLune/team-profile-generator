class Employee
{
   constructor(name = "", id = "", email = "")
   {
      this.name = name;
      this.id = id;
      this.email = email;
   }
   
   getName()
   {

   }

   getId()
   {

   }

   getEmail()
   {

   }

   getRole()
   {
      return "Employee";
   }
}

class Manager {
   constructor(name = "", id = "", email = "", officeNumber = "")
   {
      this = new Employee(name, id, email);
      this.officeNumber = officeNumber;

      this.getRole = () => "Manager"
   }

}

class Engineer {
   constructor(name = "", id = "", email = "", github = "")
   {
      this = new Employee(name, id, email);
      this.github = github;
      this.getGithub = () => this.github;
      this.getRole = () => "Engineer"
   }
}

class Intern {
   constructor(name = "", id = "", email = "", school = "")
   {
      this = new Employee(name, id, email);
      this.school = school;
      this.getSchool = () => this.school;
      this.getRole = () => "Intern"
   }
}

