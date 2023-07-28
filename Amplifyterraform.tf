provider "aws" {
  region = "us-east-1"  
}

resource "aws_amplify_app" "my_nextjs_app" {
  name = "MyNextJsApp"  
}
