namespace taskmanager.contracts.taskmanager;

public record Deletetask (Guid Id,string task ,DateTime time, bool completed);
