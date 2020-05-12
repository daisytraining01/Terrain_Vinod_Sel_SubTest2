package stepdef;

import java.util.Iterator;
import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class Steps {
	
	WebDriver driver;
	
	@Given("User is able to launch the application")
	public void user_is_able_to_launch_the_application() {
		  System.setProperty("webdriver.chrome.driver", "src/main/java/driver/chromedriver.exe");			
			
		    driver=new ChromeDriver();
			
			driver.manage().window().maximize();
			
			driver.get("http://elastic.rapidtestpro.com:8086/index");
			
			driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

	    }

	
	@When("User provides the neccessary details for SignUp")
	public void user_provides_the_neccessary_details_for_SignUp() {
		
	String refer="/signup";
		
		List<WebElement> anchors = driver.findElements(By.tagName("a"));	
	    Iterator<WebElement> iter = anchors.iterator();    
	    
	     while(iter.hasNext()) {	    	 
	           WebElement anchor = iter.next();	        
	        if(anchor.getAttribute("href").contains(refer)) {	        	
	            anchor.click();
	            break;
	        }
	     }		
			
		WebElement firstname=driver.findElement(By.id("firstName"));
		
		firstname.sendKeys("parkavi101");
		
		WebElement lastname=driver.findElement(By.id("lastName"));
				
		lastname.sendKeys("Ramesh101");
		
		WebElement phone=driver.findElement(By.id("phone"));
				
		phone.sendKeys("3456789325");
		
		WebElement email=driver.findElement(By.id("email"));
		
		email.sendKeys("demo@gmail.com");
				
		WebElement username=driver.findElement(By.id("username"));
		
		username.sendKeys("parkavi101");
		
		WebElement password=driver.findElement(By.id("password"));
		
		password.sendKeys("parkavi101");
	   
	}

	@Then("User clicks SignUp button")
	public void user_clicks_SignUp_button() throws InterruptedException {
		driver.findElement(By.xpath("//button[text()='Sign up!']")).click();
		Thread.sleep(2000);			
	}

	@Then("User enters username and password")
	public void user_enters_username_and_password() throws InterruptedException {
       
		Thread.sleep(2000);
		WebElement username=driver.findElement(By.id("username"));
		
		username.sendKeys("parkavi10");
		
		WebElement password=driver.findElement(By.id("password"));
		
		password.sendKeys("parkavi10");
		
	    	}

	@Then("User clicks SignIn button")
	public void user_clicks_SignIn_button() throws InterruptedException {
		
		driver.findElement(By.xpath("//button[text()='Sign in']"));
		Thread.sleep(2000);
	    }
	
	@Given("User provides username and password and click sign in button")
	public void user_provides_username_and_password_and_click_sign_in_button() throws InterruptedException {
		
		WebElement username=driver.findElement(By.id("username"));
		
		username.sendKeys("parkavi1");
		
		WebElement password=driver.findElement(By.id("password"));
		
		password.sendKeys("parkavi1");
		
		driver.findElement(By.xpath("//button[text()='Sign in']")).click();
		Thread.sleep(2000);
	   }

	@When("User clicks Add\\/Edit recipient")
	public void user_clicks_Add_Edit_recipient() {
			
		driver.findElement(By.xpath("//*[text()='Transfer ']")).click();
		
		Actions act=new Actions(driver);
		act.moveToElement(driver.findElement(By.xpath("//*[text()='Add/Edit Recipient']"))).click().build().perform();
		
	   }

	@When("User provides Recipient details {string} and {string} and {string} and {string}")
	public void user_provides_Recipient_details_and_and_and(String name, String email, String phone, String acctnum) throws InterruptedException {
	   
		Thread.sleep(2000);
		driver.findElement(By.id("recipientName")).sendKeys(name);
		driver.findElement(By.id("recipientEmail")).sendKeys(email);
		driver.findElement(By.id("recipientPhone")).sendKeys(phone);
		driver.findElement(By.id("recipientAccountNumber")).sendKeys(acctnum);
	
	}

	@Then("User clicks Add\\/Edit Recipient button")
	public void user_clicks_Add_Edit_Recipient_button() {		
		driver.findElement(By.xpath("//button[text()='Add/Edit Recipient']")).click();

	}

}
