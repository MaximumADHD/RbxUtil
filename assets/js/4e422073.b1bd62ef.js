"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9884],{47433:e=>{e.exports=JSON.parse('{"functions":[{"name":"Child","desc":"Wait for a child to exist within a given parent based on the child name.\\n\\n```lua\\nWaitFor.Child(parent, \\"SomeObject\\"):andThen(function(someObject)\\n\\tprint(someObject, \\"now exists\\")\\nend):catch(warn)\\n```","params":[{"name":"parent","desc":"","lua_type":"Instance"},{"name":"childName","desc":"","lua_type":"string"},{"name":"timeout","desc":"","lua_type":"number?"}],"returns":[{"desc":"","lua_type":"Promise<Instance>"}],"function_type":"static","source":{"line":61,"path":"modules/wait-for/init.lua"}},{"name":"Children","desc":"Wait for all children to exist within the given parent.\\n\\n```lua\\nWaitFor.Children(parent, {\\"SomeObject01\\", \\"SomeObject02\\"}):andThen(function(children)\\n\\tlocal someObject01, someObject02 = table.unpack(children)\\nend)\\n```\\n\\n:::note\\nOnce all children are found, a second check is made to ensure that all children\\nare still directly parented to the given `parent` (since one child\'s parent\\nmight have changed before another child was found). A rejected promise with the\\n`WaitFor.Error.ParentChanged` error will be thrown if any parents of the children\\nno longer match the given `parent`.\\n:::","params":[{"name":"parent","desc":"","lua_type":"Instance"},{"name":"childrenNames","desc":"","lua_type":"{ string }"},{"name":"timeout","desc":"","lua_type":"number?"}],"returns":[{"desc":"","lua_type":"Promise<{Instance}>"}],"function_type":"static","source":{"line":92,"path":"modules/wait-for/init.lua"}},{"name":"Descendant","desc":"Wait for a descendant to exist within a given parent. This is similar to\\n`WaitFor.Child`, except it looks for all descendants instead of immediate\\nchildren.\\n\\n```lua\\nWaitFor.Descendant(parent, \\"SomeDescendant\\"):andThen(function(someDescendant)\\n\\tprint(\\"SomeDescendant now exists\\")\\nend)\\n```","params":[{"name":"parent","desc":"","lua_type":"Instance"},{"name":"descendantName","desc":"","lua_type":"string"},{"name":"timeout","desc":"","lua_type":"number?"}],"returns":[{"desc":"","lua_type":"Promise<Instance>"}],"function_type":"static","source":{"line":120,"path":"modules/wait-for/init.lua"}},{"name":"Descendants","desc":"Wait for all descendants to exist within a given parent.\\n\\n```lua\\nWaitFor.Descendants(parent, {\\"SomeDescendant01\\", \\"SomeDescendant02\\"}):andThen(function(descendants)\\n\\tlocal someDescendant01, someDescendant02 = table.unpack(descendants)\\nend)\\n```\\n\\n:::note\\nOnce all descendants are found, a second check is made to ensure that none of the\\ninstances have moved outside of the parent (since one instance might change before\\nanother instance is found). A rejected promise with the `WaitFor.Error.ParentChanged`\\nerror will be thrown if any of the instances are no longer descendants of the given\\n`parent`.\\n:::","params":[{"name":"parent","desc":"","lua_type":"Instance"},{"name":"descendantNames","desc":"","lua_type":"{ string }"},{"name":"timeout","desc":"","lua_type":"number?"}],"returns":[{"desc":"","lua_type":"Promise<{Instance}>"}],"function_type":"static","source":{"line":151,"path":"modules/wait-for/init.lua"}},{"name":"PrimaryPart","desc":"Wait for the PrimaryPart of a model to exist.\\n\\n```lua\\nWaitFor.PrimaryPart(model):andThen(function(primaryPart)\\n\\tprint(primaryPart == model.PrimaryPart)\\nend)\\n```","params":[{"name":"model","desc":"","lua_type":"Model"},{"name":"timeout","desc":"","lua_type":"number?"}],"returns":[{"desc":"","lua_type":"Promise<Instance>"}],"function_type":"static","source":{"line":177,"path":"modules/wait-for/init.lua"}},{"name":"ObjectValue","desc":"Wait for the Value of an ObjectValue to exist.\\n\\n```lua\\nWaitFor.ObjectValue(someObjectValue):andThen(function(value)\\n\\tprint(\\"someObjectValue\'s value is\\", value)\\nend)\\n```","params":[{"name":"objectValue","desc":"","lua_type":"ObjectValue"},{"name":"timeout","desc":"","lua_type":"number?"}],"returns":[{"desc":"","lua_type":"Promise<Instance>"}],"function_type":"static","source":{"line":205,"path":"modules/wait-for/init.lua"}},{"name":"Custom","desc":"Wait for the given predicate function to return a non-nil value of\\nof type `T`. The predicate is fired every RunService Heartbeat step.\\n\\n```lua\\n-- Example, waiting for some property to be set:\\nWaitFor.Custom(function() return vectorForce.Attachment0 end):andThen(function(a0)\\n\\tprint(a0)\\nend)\\n```","params":[{"name":"predicate","desc":"","lua_type":"() -> T?"},{"name":"timeout","desc":"","lua_type":"number?"}],"returns":[{"desc":"","lua_type":"Promise<T>"}],"function_type":"static","source":{"line":235,"path":"modules/wait-for/init.lua"}}],"properties":[{"name":"Error","desc":"","lua_type":"{Unparented: string, ParentChanged: string}","source":{"line":35,"path":"modules/wait-for/init.lua"}}],"types":[],"name":"WaitFor","desc":"Utility class for awaiting the existence of instances.\\n\\nBy default, all promises timeout after 60 seconds, unless the `timeout`\\nargument is specified.\\n\\n:::note\\nPromises will be rejected if the parent (or any ancestor) is unparented\\nfrom the game.\\n:::\\n\\n:::caution Set name before parent\\nWhen waiting for instances based on name (e.g. `WaitFor.Child`), the `WaitFor`\\nsystem is listening to events to capture these instances being added. This\\nmeans that the name must be set _before_ being parented into the object.\\n:::","source":{"line":29,"path":"modules/wait-for/init.lua"}}')}}]);