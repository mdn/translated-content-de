---
title: "Notification: statische Eigenschaft permission"
short-title: Berechtigung
slug: Web/API/Notification/permission_static
l10n:
  sourceCommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{APIRef("Web Notifications")}}{{securecontext_header}} {{AvailableInWorkers}}

Die **`permission`** schreibgeschützte statische Eigenschaft des {{domxref("Notification")}}-Interfaces zeigt die aktuelle Berechtigung an, die vom Benutzer für den aktuellen Ursprung erteilt wurde, um Webbenachrichtigungen anzuzeigen.

## Wert

Ein String, der die aktuelle Berechtigung darstellt. Der Wert kann sein:

- `granted`
  - : Der Benutzer hat ausdrücklich die Berechtigung für den aktuellen Ursprung erteilt, Systembenachrichtigungen anzuzeigen.
- `denied`
  - : Der Benutzer hat ausdrücklich die Berechtigung für den aktuellen Ursprung verweigert, Systembenachrichtigungen anzuzeigen.
- `default`
  - : Die Entscheidung des Benutzers ist unbekannt; in diesem Fall verhält sich die Anwendung so, als ob die Berechtigung `denied` wäre.

## Beispiele

Das folgende Beispiel könnte verwendet werden, wenn Sie zuerst prüfen möchten, ob Benachrichtigungen unterstützt werden, dann prüfen, ob die Berechtigung für den aktuellen Ursprung erteilt wurde, um Benachrichtigungen zu senden, und dann die Berechtigung anfordern, falls erforderlich, bevor eine Benachrichtigung gesendet wird.

```js
function notifyMe() {
  if (!("Notification" in window)) {
    // Prüfen, ob der Browser Benachrichtigungen unterstützt
    alert("Dieser Browser unterstützt keine Desktop-Benachrichtigungen");
  } else if (Notification.permission === "granted") {
    // Prüfen, ob die Benachrichtigungsberechtigung bereits erteilt wurde;
    // wenn ja, erstellen Sie eine Benachrichtigung
    const notification = new Notification("Hi there!");
    // …
  } else if (Notification.permission !== "denied") {
    // Wir müssen den Benutzer um Erlaubnis bitten
    Notification.requestPermission().then((permission) => {
      // Wenn der Benutzer zustimmt, erstellen wir eine Benachrichtigung
      if (permission === "granted") {
        const notification = new Notification("Hi there!");
        // …
      }
    });
  }

  // Schließlich, wenn der Benutzer Benachrichtigungen abgelehnt hat, 
  // und Sie respektvoll sein möchten, gibt es keinen Grund, ihn weiter zu belästigen.
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Benachrichtigungen API](/de/docs/Web/API/Notifications_API)
- [Verwendung der Benachrichtigungen API](/de/docs/Web/API/Notifications_API/Using_the_Notifications_API)
- [Berechtigungen API](/de/docs/Web/API/Permissions_API)
- [Verwendung der Berechtigungen API](/de/docs/Web/API/Permissions_API/Using_the_Permissions_API)
