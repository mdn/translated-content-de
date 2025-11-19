---
title: "Benachrichtigung: requestPermission() statische Methode"
short-title: requestPermission()
slug: Web/API/Notification/requestPermission_static
l10n:
  sourceCommit: 7cd51a73ad94df604db79ccacbbe0513d0967650
---

{{APIRef("Web Notifications")}}{{securecontext_header}}

Die **`requestPermission()`** statische Methode der [`Notification`](/de/docs/Web/API/Notification) Schnittstelle fordert die Erlaubnis vom Benutzer an, dass der aktuelle Ursprung Benachrichtigungen anzeigen darf.

Die Methode gibt ein {{jsxref("Promise")}} zurück, das mit einem String erfüllt wird, der anzeigt, ob die Erlaubnis erteilt oder verweigert wurde.

## Syntax

```js-nolint
Notification.requestPermission()

// Deprecated syntax using a callback
Notification.requestPermission(callback)
```

### Parameter

- `callback` {{optional_inline}} {{deprecated_inline}}
  - : Eine optionale Callback-Funktion, die mit dem Erlaubniswert aufgerufen wird.
    Veraltet zugunsten des {{jsxref("Promise")}}-Rückgabewertes.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich zu einem String mit der vom Benutzer gewählten Erlaubnis auflöst.
Mögliche Werte für diesen String sind:

- `granted`
  - : Der Benutzer hat ausdrücklich die Erlaubnis erteilt, dass der aktuelle Ursprung Systembenachrichtigungen anzeigen darf.
- `denied`
  - : Der Benutzer hat ausdrücklich die Erlaubnis verweigert, dass der aktuelle Ursprung Systembenachrichtigungen anzeigen darf.
- `default`
  - : Die Entscheidung des Benutzers ist unbekannt; in diesem Fall wird die Anwendung so handeln, als ob die Erlaubnis `denied` wäre.

Die veraltete Version der Methode gibt `undefined` zurück.

## Beispiele

Angenommen, dieses grundlegende HTML:

```html
<button>Notify me!</button>
```

Es ist möglich, eine Benachrichtigung wie folgt zu senden — hier präsentieren wir einen ziemlich ausführlichen und vollständigen Satz von Code, den Sie verwenden könnten, wenn Sie zuerst überprüfen wollten, ob Benachrichtigungen unterstützt werden, dann überprüfen, ob die Erlaubnis erteilt wurde, damit der aktuelle Ursprung Benachrichtigungen senden kann, die Erlaubnis bei Bedarf anfordern, bevor dann eine Benachrichtigung gesendet wird.

Beachten Sie, dass die Anfrage als Reaktion auf eine Benutzerinteraktion gestellt werden sollte: unten wird die Methode im Klick-Event-Handler aufgerufen.

```js
document.querySelector("button").addEventListener("click", notifyMe);

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

Wir zeigen kein Live-Beispiel mehr auf dieser Seite, da Chrome und Firefox keine Benachrichtigungsberechtigungen mehr von Cross-Origin-{{htmlelement("iframe")}}s anfordern lassen und andere Browser folgen werden. Um ein Beispiel in Aktion zu sehen, schauen Sie sich unser [To-do-Liste Beispiel](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) an (siehe auch [die App im Live-Betrieb](https://mdn.github.io/dom-examples/to-do-notifications/)).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Notifications API](/de/docs/Web/API/Notifications_API/Using_the_Notifications_API)
