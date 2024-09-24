---
title: "Benachrichtigung: requestPermission() statische Methode"
short-title: requestPermission()
slug: Web/API/Notification/requestPermission_static
l10n:
  sourceCommit: 09ad551d5fecae5872328ece2871fdf02b115b6e
---

{{APIRef("Web Notifications")}}{{securecontext_header}}

Die statische Methode **`requestPermission()`** des {{domxref("Notification")}}-Interfaces fordert vom Benutzer die Erlaubnis an, Benachrichtigungen für den aktuellen Ursprung anzuzeigen.

Die Methode gibt ein {{jsxref("Promise")}} zurück, das mit einem String ausgefüllt wird, der angibt, ob die Berechtigung erteilt oder abgelehnt wurde.

## Syntax

```js-nolint
Notification.requestPermission()

// Veraltete Syntax mit einem Callback
Notification.requestPermission(callback)
```

### Parameter

- `callback` {{optional_inline}} {{deprecated_inline}}
  - : Eine optionale Callback-Funktion, die mit dem Berechtigungswert aufgerufen wird.
    Veraltet zugunsten des {{jsxref("Promise")}} Rückgabewerts.

### Rückgabewert

Ein {{jsxref("Promise")}}, das zu einem String mit der vom Benutzer gewählten Berechtigung aufgelöst wird.
Mögliche Werte für diesen String sind:

- `granted`
  - : Der Benutzer hat ausdrücklich die Berechtigung erteilt, dass der aktuelle Ursprung Systembenachrichtigungen anzeigen darf.
- `denied`
  - : Der Benutzer hat ausdrücklich die Berechtigung abgelehnt, dass der aktuelle Ursprung Systembenachrichtigungen anzeigen darf.
- `default`
  - : Die Entscheidung des Benutzers ist unbekannt; in diesem Fall verhält sich die Anwendung so, als ob die Berechtigung `denied` wäre.

Die veraltete Version der Methode gibt `undefined` zurück.

## Beispiele

Angenommen, dieses einfache HTML:

```html
<button onclick="notifyMe()">Notify me!</button>
```

Es ist möglich, eine Benachrichtigung wie folgt zu senden — hier präsentieren wir einen ziemlich ausführlichen und vollständigen Satz von Code, den Sie verwenden könnten, wenn Sie zuerst überprüfen möchten, ob Benachrichtigungen unterstützt werden, dann überprüfen, ob die Berechtigung zum Senden von Benachrichtigungen für den aktuellen Ursprung erteilt wurde, dann die Berechtigung anfordern, falls erforderlich, bevor eine Benachrichtigung gesendet wird.

Beachten Sie, dass die Anfrage als Reaktion auf eine Benutzerinteraktion gestellt werden sollte: unten wird die Methode im Klick-Ereignishandler aufgerufen.

```js
function notifyMe() {
  if (!("Notification" in window)) {
    // Überprüfen, ob der Browser Benachrichtigungen unterstützt
    alert("Dieser Browser unterstützt keine Desktop-Benachrichtigungen");
  } else if (Notification.permission === "granted") {
    // Überprüfen, ob die Benachrichtigungsberechtigung bereits erteilt wurde;
    // falls ja, erstellen Sie eine Benachrichtigung
    const notification = new Notification("Hi there!");
    // …
  } else if (Notification.permission !== "denied") {
    // Wir müssen den Benutzer um Erlaubnis bitten
    Notification.requestPermission().then((permission) => {
      // Wenn der Benutzer akzeptiert, erstellen wir eine Benachrichtigung
      if (permission === "granted") {
        const notification = new Notification("Hi there!");
        // …
      }
    });
  }

  // Schließlich, wenn der Benutzer Benachrichtigungen abgelehnt hat und Sie
  // respektvoll sein möchten, besteht keine Notwendigkeit, ihn weiter zu stören.
}
```

Wir zeigen auf dieser Seite kein Live-Beispiel mehr, da Chrome und Firefox nicht mehr erlauben, dass Benachrichtigungsberechtigungen von Cross-Origin-{{htmlelement("iframe")}}s angefordert werden, und andere Browser werden folgen. Um ein Beispiel in Aktion zu sehen, schauen Sie sich unser [To-do-Liste-Beispiel](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) an (siehe auch [die App live](https://mdn.github.io/dom-examples/to-do-notifications/)).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Benachrichtigungs-API](/de/docs/Web/API/Notifications_API/Using_the_Notifications_API)
