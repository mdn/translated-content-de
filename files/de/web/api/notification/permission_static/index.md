---
title: "Notification: permission statische Eigenschaft"
short-title: permission
slug: Web/API/Notification/permission_static
l10n:
  sourceCommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{APIRef("Web Notifications")}}{{securecontext_header}} {{AvailableInWorkers}}

Die **`permission`** schreibgeschützte statische Eigenschaft der [`Notification`](/de/docs/Web/API/Notification)-Schnittstelle zeigt die aktuelle Berechtigung an, die vom Benutzer für den aktuellen Ursprung zum Anzeigen von Webbenachrichtigungen erteilt wurde.

## Wert

Ein String, der die aktuelle Berechtigung darstellt. Der Wert kann sein:

- `granted`
  - : Der Benutzer hat die Berechtigung für den aktuellen Ursprung zum Anzeigen von Systembenachrichtigungen ausdrücklich erteilt.
- `denied`
  - : Der Benutzer hat die Berechtigung für den aktuellen Ursprung zum Anzeigen von Systembenachrichtigungen ausdrücklich verweigert.
- `default`
  - : Die Entscheidung des Benutzers ist unbekannt; in diesem Fall verhält sich die Anwendung, als ob die Berechtigung `denied` wäre.

## Beispiele

Der folgende Ausschnitt könnte verwendet werden, um zuerst zu überprüfen, ob Benachrichtigungen unterstützt werden, dann zu prüfen, ob die Berechtigung für den aktuellen Ursprung zum Senden von Benachrichtigungen erteilt wurde, dann bei Bedarf die Berechtigung anzufordern, bevor eine Benachrichtigung gesendet wird.

```js
function notifyMe() {
  if (!("Notification" in window)) {
    // Check if the browser supports notifications
    alert("This browser does not support desktop notification");
  } else if (Notification.permission === "granted") {
    // Check whether notification permissions have already been granted;
    // if so, create a notification
    const notification = new Notification("Hi there!");
    // …
  } else if (Notification.permission !== "denied") {
    // We need to ask the user for permission
    Notification.requestPermission().then((permission) => {
      // If the user accepts, let's create a notification
      if (permission === "granted") {
        const notification = new Notification("Hi there!");
        // …
      }
    });
  }

  // At last, if the user has denied notifications, and you
  // want to be respectful there is no need to bother them anymore.
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Notifications API](/de/docs/Web/API/Notifications_API)
- [Verwendung der Notifications API](/de/docs/Web/API/Notifications_API/Using_the_Notifications_API)
- [Permissions API](/de/docs/Web/API/Permissions_API)
- [Verwendung der Permissions API](/de/docs/Web/API/Permissions_API/Using_the_Permissions_API)
