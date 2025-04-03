---
title: Notification
slug: Web/API/Notification
l10n:
  sourceCommit: 43f272adb6ac15537cff3728c78ddf234485fff8
---

{{APIRef("Web Notifications")}}{{securecontext_header}} {{AvailableInWorkers}}

Das **`Notification`** Interface der [Notifications API](/de/docs/Web/API/Notifications_API) wird verwendet, um Desktop-Benachrichtigungen für den Benutzer zu konfigurieren und anzuzeigen.

Das Aussehen und die spezifische Funktionalität dieser Benachrichtigungen variieren je nach Plattform, aber im Allgemeinen bieten sie eine Möglichkeit, dem Benutzer asynchron Informationen bereitzustellen.

{{InheritanceDiagram}}

## Konstruktor

- [`Notification()`](/de/docs/Web/API/Notification/Notification)
  - : Erstellt eine neue Instanz des `Notification` Objekts.

## Statische Eigenschaften

_Erbt auch Eigenschaften von seinem Eltern-Interface, [`EventTarget`](/de/docs/Web/API/EventTarget)_.

- [`Notification.permission`](/de/docs/Web/API/Notification/permission_static) {{ReadOnlyInline}}

  - : Ein Zeichenkette, die die aktuelle Berechtigung zur Anzeige von Benachrichtigungen darstellt. Mögliche Werte sind:

    - `denied` — Der Benutzer lehnt es ab, Benachrichtigungen angezeigt zu bekommen.
    - `granted` — Der Benutzer stimmt zu, Benachrichtigungen angezeigt zu bekommen.
    - `default` — Die Entscheidung des Benutzers ist unbekannt und daher wird der Browser so agieren, als wäre der Wert abgelehnt.

- [`Notification.maxActions`](/de/docs/Web/API/Notification/maxActions_static) {{ReadOnlyInline}}
  - : Die maximale Anzahl von Aktionen, die vom Gerät und dem User-Agent unterstützt werden.

## Instanz Eigenschaften

_Erbt auch Eigenschaften von seinem Eltern-Interface, [`EventTarget`](/de/docs/Web/API/EventTarget)_.

- [`Notification.actions`](/de/docs/Web/API/Notification/actions) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Das Aktions-Array der Benachrichtigung, wie im `options` Parameter des Konstruktors angegeben.
- [`Notification.badge`](/de/docs/Web/API/Notification/badge) {{ReadOnlyInline}}
  - : Eine Zeichenkette, die die URL eines Bildes enthält, das die Benachrichtigung repräsentiert, wenn nicht genug Platz ist, die Benachrichtigung selbst anzuzeigen, wie zum Beispiel in der Android-Benachrichtigungsleiste. Auf Android-Geräten sollte das Abzeichen Geräte mit bis zu 4x Auflösung unterstützen, etwa 96 x 96 px, und das Bild wird automatisch maskiert.
- [`Notification.body`](/de/docs/Web/API/Notification/body) {{ReadOnlyInline}}
  - : Die Zeichenkette des Hauptteils der Benachrichtigung, wie im `options` Parameter des Konstruktors angegeben.
- [`Notification.data`](/de/docs/Web/API/Notification/data) {{ReadOnlyInline}}
  - : Gibt einen strukturierten Klon der Daten der Benachrichtigung zurück.
- [`Notification.dir`](/de/docs/Web/API/Notification/dir) {{ReadOnlyInline}}
  - : Die Textausrichtung der Benachrichtigung, wie im `options` Parameter des Konstruktors angegeben.
- [`Notification.icon`](/de/docs/Web/API/Notification/icon) {{ReadOnlyInline}}
  - : Die URL des Bildes, das als Symbol der Benachrichtigung verwendet wird, wie im `options` Parameter des Konstruktors angegeben.
- [`Notification.image`](/de/docs/Web/API/Notification/image) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Die URL eines Bildes, das als Teil der Benachrichtigung angezeigt wird, wie im `options` Parameter des Konstruktors angegeben.
- [`Notification.lang`](/de/docs/Web/API/Notification/lang) {{ReadOnlyInline}}
  - : Der Sprachcode der Benachrichtigung, wie im `options` Parameter des Konstruktors angegeben.
- [`Notification.renotify`](/de/docs/Web/API/Notification/renotify) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt an, ob der Benutzer benachrichtigt werden soll, nachdem eine neue Benachrichtigung eine alte ersetzt hat.
- [`Notification.requireInteraction`](/de/docs/Web/API/Notification/requireInteraction) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der anzeigt, dass eine Benachrichtigung aktiv bleiben soll, bis der Benutzer sie anklickt oder schließt, anstatt automatisch zu schließen.
- [`Notification.silent`](/de/docs/Web/API/Notification/silent) {{ReadOnlyInline}}
  - : Gibt an, ob die Benachrichtigung stumm geschaltet werden soll — das heißt, es sollten keine Geräusche oder Vibrationen ausgegeben werden, unabhängig von den Geräteeinstellungen.
- [`Notification.tag`](/de/docs/Web/API/Notification/tag) {{ReadOnlyInline}}
  - : Die ID der Benachrichtigung (falls vorhanden), wie im `options` Parameter des Konstruktors angegeben.
- [`Notification.timestamp`](/de/docs/Web/API/Notification/timestamp) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die Zeit an, zu der eine Benachrichtigung erstellt oder anwendbar ist (Vergangenheit, Gegenwart oder Zukunft).
- [`Notification.title`](/de/docs/Web/API/Notification/title) {{ReadOnlyInline}}
  - : Der Titel der Benachrichtigung, wie im ersten Parameter des Konstruktors angegeben.
- [`Notification.vibrate`](/de/docs/Web/API/Notification/vibrate) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein Vibrationsmuster für Geräte mit Vibrationshardware an, das ausgegeben werden soll.

## Statische Methoden

_Erbt auch Methoden von seinem Eltern-Interface, [`EventTarget`](/de/docs/Web/API/EventTarget)_.

- [`Notification.requestPermission()`](/de/docs/Web/API/Notification/requestPermission_static)
  - : Fordert die Erlaubnis des Benutzers an, Benachrichtigungen anzuzeigen.

## Instanz Methoden

_Erbt auch Methoden von seinem Eltern-Interface, [`EventTarget`](/de/docs/Web/API/EventTarget)_.

- [`Notification.close()`](/de/docs/Web/API/Notification/close)
  - : Schließt eine Benachrichtigungsinstanz programmgesteuert.

## Ereignisse

_Erbt auch Ereignisse von seinem Eltern-Interface, [`EventTarget`](/de/docs/Web/API/EventTarget)_.

- [`click`](/de/docs/Web/API/Notification/click_event)
  - : Wird ausgelöst, wenn der Benutzer auf die Benachrichtigung klickt.
- [`close`](/de/docs/Web/API/Notification/close_event)
  - : Wird ausgelöst, wenn der Benutzer die Benachrichtigung schließt.
- [`error`](/de/docs/Web/API/Notification/error_event)
  - : Wird ausgelöst, wenn die Benachrichtigung auf einen Fehler stößt.
- [`show`](/de/docs/Web/API/Notification/show_event)
  - : Wird ausgelöst, wenn die Benachrichtigung angezeigt wird.

## Beispiele

Angenommen, dieses grundlegende HTML:

```html
<button onclick="notifyMe()">Notify me!</button>
```

Es ist möglich, eine Benachrichtigung wie folgt zu senden — hier präsentieren wir einen ziemlich ausführlichen und vollständigen Code, den Sie verwenden könnten, wenn Sie zuerst überprüfen möchten, ob Benachrichtigungen unterstützt werden, dann überprüfen, ob die Erlaubnis erteilt wurde, Benachrichtigungen vom aktuellen Ursprungsort zu senden, dann die Erlaubnis anfordern, falls erforderlich, bevor dann eine Benachrichtigung gesendet wird.

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

Wir zeigen kein Live-Beispiel mehr auf dieser Seite, da Chrome und Firefox nicht mehr zulassen, dass Benachrichtigungsberechtigungen von fremden {{htmlelement("iframe")}}s angefordert werden, andere Browser werden folgen. Um ein Beispiel in Aktion zu sehen, schauen Sie sich unser [To-do-Listen-Beispiel](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) an (siehe auch [die App live in Aktion](https://mdn.github.io/dom-examples/to-do-notifications/)).

> [!NOTE]
> Im obigen Beispiel generieren wir Benachrichtigungen als Reaktion auf eine Benutzeraktion (Klicken eines Buttons). Dies ist nicht nur Best Practice — Sie sollten Benutzer nicht mit Benachrichtigungen überhäufen, denen sie nicht zugestimmt haben — sondern in Zukunft werden Browser explizit Benachrichtigungen verbieten, die nicht als Reaktion auf eine Benutzeraktion ausgelöst werden. Firefox tut dies bereits ab Version 72, zum Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Notifications API](/de/docs/Web/API/Notifications_API/Using_the_Notifications_API)
