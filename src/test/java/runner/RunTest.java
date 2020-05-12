package runner;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features="src/test/java/features",
glue="stepdef",
tags= {"@register,@AddRecipient"},
dryRun=false,
monochrome=true,
plugin= {"pretty","html:target/cucumber-reports"}
)
public class RunTest {

}
