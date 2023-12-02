using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using taskmanager.contracts.taskmanager;
using System;

namespace taskmanagerApi.controllers; 

[ApiController]
[Route("[controller]")]

public class Taskcontroller:ControllerBase {
[HttpPost("/task")]
public IActionResult Maketaskreq(Maketask request){
    return Ok(request);
}
[HttpGet("/task{id:guid}")]
public IActionResult Gettaskreq(Guid id){
    return Ok(id);
}
[HttpPut("/task{id:guid}")]
public IActionResult Updatetaskreq(Guid id, Updatetask request){
    return Ok(id);
}

[HttpDelete("/task{id:guid}")]
public IActionResult Deletetaskreq(Guid id){
    return Ok(id);
}
}