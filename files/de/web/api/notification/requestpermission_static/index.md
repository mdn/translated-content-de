---
title: "Notification: requestPermission() statische Methode"
short-title: requestPermission()
slug: Web/API/Notification/requestPermission_static
l10n:
  sourceCommit: 09ad551d5fecae5872328ece2871fdf02b115b6e
---

{{APIRef("Web Notifications")}}{{securecontext_header}}

Die **`requestPermission()`** statische Methode des [`Notification`](/de/docs/Web/API/Notification)-Interfaces fordert die Erlaubnis des Benutzers an, um Benachrichtigungen für die aktuelle Herkunft anzeigen zu dürfen.

Die Methode gibt ein {{jsxref("Promise")}} zurück, das mit einem String erfüllt wird, der angibt, ob die Erlaubnis erteilt oder verweigert wurde.

## Syntax

```js-nolint
Notification.requestPermission()

// Deprecated syntax using a callback
Notification.requestPermission(callback)
```

### Parameter

- `callback` {{optional_inline}} {{deprecated_inline}}
  - : Eine optionale Callback-Funktion, die mit dem Erlaubniswert aufgerufen wird. 
    Veraltet zugunsten des {{jsxref("Promise")}}-Rückgabewerts.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich zu einem String mit der vom Benutzer ausgewählten Erlaubnis auflöst. Mögliche Werte für diesen String sind:

- `granted`
  - : Der Benutzer hat ausdrücklich die Erlaubnis für die aktuelle Herkunft erteilt, Systembenachrichtigungen anzuzeigen.
- `denied`
  - : Der Benutzer hat ausdrücklich die Erlaubnis für die aktuelle Herkunft verweigert, Systembenachrichtigungen anzuzeigen.
- `default`
  - : Die Entscheidung des Benutzers ist unbekannt; in diesem Fall verhält sich die Anwendung so, als wäre die Erlaubnis `denied`.

Die veraltete Version der Methode gibt `undefined` zurück.

## Beispiele

Angenommen, wir haben dieses grundlegende HTML:

```html
<button onclick="notifyMe()">Notify me!</button>
```

Es ist möglich, eine Benachrichtigung wie folgt zu senden — hier präsentieren wir einen ziemlich umfangreichen und vollständigen Satz von Code, den Sie verwenden könnten, wenn Sie zuerst überprüfen möchten, ob Benachrichtigungen unterstützt werden, dann überprüfen, ob die Erlaubnis für die aktuelle Herkunft erteilt wurde, dann, wenn erforderlich, die Erlaubnis anfordern, bevor Sie eine Benachrichtigung senden.

Beachten Sie, dass die Anfrage als Reaktion auf eine Benutzerinteraktion erfolgen sollte: unten wird die Methode im Klick-Event-Handler aufgerufen.

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

Wir zeigen kein Live-Beispiel mehr auf dieser Seite, da Chrome und Firefox nicht mehr erlauben, dass Benachrichtigungsberechtigungen von Cross-Origin-{{htmlelement("iframe")}}s angefordert werden, und andere Browser werden folgen. Um ein Beispiel in Aktion zu sehen, schauen Sie sich unser [To-do-Liste-Beispiel](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) an (siehe auch [die Anwendung live](https://mdn.github.io/dom-examples/to-do-notifications/)).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Notifications API](/de/docs/Web/API/Notifications_API/Using_the_Notifications_API)
