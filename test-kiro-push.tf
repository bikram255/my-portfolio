# Test file created by Kiro CLI
# This confirms I can push code to your repository

resource "aws_instance" "GDG" {
  ami           = "ami-12345678"
  instance_type = "t2.micro"
  
  tags = {
    Name = "GDG-Test-Instance"
    CreatedBy = "Kiro-CLI"
  }
}

# This is just a test - will be replaced with full infrastructure code
