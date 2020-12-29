# bitwise-permission
A secure, simple, reliable permission system based on bitwise.

## How it's working?
Your role system records an Integer for this user or group from the permissions it has. For simplicity, let's assume you are creating a Blog. And the permissions are as follows:

    Permission.use({
      VIEW_BLOG: 1,
      VIEW_POST: 2,
      VIEW_PROFILE: 4,

      EDIT_POST: 8,
      UPDATE_POST: 16,
      DELETE_POST: 32,
      MANAGE_POSTS: 64,

      MANAGE_BLOG: 128,
      MANAGE_USERS: 256
    });

**Attention!** Permissions must be a multiple of two (1, 2, 4, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096 ...)

Sample roles: Subscriber, Writer, and Admin
Using the example of the roles above, we give flags.
Subscriber: `VIEW_BLOG`, `VIEW_POST`, `VIEW_PROFILE`
Writer: `EDIT_POST`, `UPDATE_POST`, `DELETE_POST`
Admin: `MANAGE_BLOG`, `MANAGE_USERS`

**Attention!** The given record will create limited roles. The writer will not have `VIEW_POST` permissions although he has `EDIT_POST`. So a better example would look like this:

Subscriber: `VIEW_BLOG`, `VIEW_POST`, `VIEW_PROFILE`
Writers: `VIEW_BLOG`, `VIEW_POST`, `VIEW_PROFILE`, `EDIT_POST`, `UPDATE_POST`, `DELETE_POST`
Admin: `VIEW_BLOG`, `VIEW_POST`, `VIEW_PROFILE`, `EDIT_POST`, `UPDATE_POST`, `DELETE_POST`, `MANAGE_BLOG`, `MANAGE_USERS`

## Example
You can add permissions manually, but we recommend doing it using the following functions.

      // 1 + 2 + 4 => 7
      Permission.generatePermission([
        "VIEW_BLOG", "VIEW_POST", "VIEW_PROFILE"
      ]);

     // This function return Boolean if user have permission true or false
      Permission.check(7, "VIEW_PROFILE") // => True
      Permission.check(7, "EDIT_POST") // => False

      Permission.check(256, "EDIT_POST") // => False
      Permission.check(256, "VIEW_BLOG") // => False
      Permission.check(256, "MANAGE_USERS") // => True
