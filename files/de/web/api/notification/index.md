---
title: Notification
slug: Web/API/Notification
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{APIRef("Web Notifications")}}{{securecontext_header}} {{AvailableInWorkers}}

Die **`Notification`** Schnittstelle der [Notifications API](/de/docs/Web/API/Notifications_API) wird verwendet, um Desktop-Benachrichtigungen für den Benutzer zu konfigurieren und anzuzeigen.

Das Erscheinungsbild und die spezifische Funktionalität dieser Benachrichtigungen variieren je nach Plattform, aber generell bieten sie eine Möglichkeit, dem Benutzer asynchron Informationen bereitzustellen.

{{InheritanceDiagram}}

## Konstruktor

- [`Notification()`](/de/docs/Web/API/Notification/Notification)
  - : Erstellt eine neue Instanz des `Notification` Objekts.

## Statische Eigenschaften

_Erbt auch Eigenschaften von der übergeordneten Schnittstelle, [`EventTarget`](/de/docs/Web/API/EventTarget)_.

- [`Notification.permission`](/de/docs/Web/API/Notification/permission_static) {{ReadOnlyInline}}

  - : Ein String, der die aktuelle Berechtigung zur Anzeige von Benachrichtigungen darstellt. Mögliche Werte sind:

    - `denied` — Der Benutzer lehnt die Anzeige von Benachrichtigungen ab.
    - `granted` — Der Benutzer akzeptiert die Anzeige von Benachrichtigungen.
    - `default` — Die Benutzerwahl ist unbekannt und daher wird der Browser so handeln, als wäre der Wert abgelehnt.

- [`Notification.maxActions`](/de/docs/Web/API/Notification/maxActions_static) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Die maximale Anzahl von Aktionen, die vom Gerät und dem User Agent unterstützt werden.

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von der übergeordneten Schnittstelle, [`EventTarget`](/de/docs/Web/API/EventTarget)_.

- [`Notification.actions`](/de/docs/Web/API/Notification/actions) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Das Aktions-Array der Benachrichtigung, wie im `options` Parameter des Konstruktors angegeben.
- [`Notification.badge`](/de/docs/Web/API/Notification/badge) {{ReadOnlyInline}}
  - : Ein String, der die URL eines Bildes enthält, um die Benachrichtigung zu repräsentieren, wenn nicht genügend Platz zur Anzeige der Benachrichtigung selbst vorhanden ist, wie zum Beispiel in der Android-Benachrichtigungsleiste. Auf Android-Geräten sollte das Badge Geräte bis zu einer 4x-Auflösung unterstützen, etwa 96 x 96 px, und das Bild wird automatisch maskiert.
- [`Notification.body`](/de/docs/Web/API/Notification/body) {{ReadOnlyInline}}
  - : Der Inhalts-String der Benachrichtigung, wie im `options` Parameter des Konstruktors angegeben.
- [`Notification.data`](/de/docs/Web/API/Notification/data) {{ReadOnlyInline}}
  - : Gibt einen strukturierten Klon der Benachrichtigungsdaten zurück.
- [`Notification.dir`](/de/docs/Web/API/Notification/dir) {{ReadOnlyInline}}
  - : Die Textrichtung der Benachrichtigung, wie im `options` Parameter des Konstruktors angegeben.
- [`Notification.icon`](/de/docs/Web/API/Notification/icon) {{ReadOnlyInline}}
  - : Die URL des Bildes, das als Icon der Benachrichtigung verwendet wird, wie im `options` Parameter des Konstruktors angegeben.
- [`Notification.image`](/de/docs/Web/API/Notification/image) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Die URL eines Bildes, das als Teil der Benachrichtigung angezeigt wird, wie im `options` Parameter des Konstruktors angegeben.
- [`Notification.lang`](/de/docs/Web/API/Notification/lang) {{ReadOnlyInline}}
  - : Der Sprachcode der Benachrichtigung, wie im `options` Parameter des Konstruktors angegeben.
- [`Notification.renotify`](/de/docs/Web/API/Notification/renotify) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt an, ob der Benutzer benachrichtigt werden soll, nachdem eine neue Benachrichtigung eine alte ersetzt.
- [`Notification.requireInteraction`](/de/docs/Web/API/Notification/requireInteraction) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, dass eine Benachrichtigung aktiv bleiben soll, bis der Benutzer sie anklickt oder schließt, anstatt automatisch zu schließen.
- [`Notification.silent`](/de/docs/Web/API/Notification/silent) {{ReadOnlyInline}}
  - : Gibt an, ob die Benachrichtigung stumm sein soll — d. h., dass keine Geräusche oder Vibrationen ausgegeben werden sollen, unabhängig von den Geräteeinstellungen.
- [`Notification.tag`](/de/docs/Web/API/Notification/tag) {{ReadOnlyInline}}
  - : Die ID der Benachrichtigung (falls vorhanden), wie im `options` Parameter des Konstruktors angegeben.
- [`Notification.timestamp`](/de/docs/Web/API/Notification/timestamp) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt an, zu welchem Zeitpunkt eine Benachrichtigung erstellt oder relevant ist (Vergangenheit, Gegenwart oder Zukunft).
- [`Notification.title`](/de/docs/Web/API/Notification/title) {{ReadOnlyInline}}
  - : Der Titel der Benachrichtigung, wie im ersten Parameter des Konstruktors angegeben.
- [`Notification.vibrate`](/de/docs/Web/API/Notification/vibrate) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein Vibrationsmuster für Geräte mit Vibrationshardware an, das ausgegeben werden soll.

## Statische Methoden

_Erbt auch Methoden von der übergeordneten Schnittstelle, [`EventTarget`](/de/docs/Web/API/EventTarget)_.

- [`Notification.requestPermission()`](/de/docs/Web/API/Notification/requestPermission_static)
  - : Fordert beim Benutzer die Erlaubnis an, Benachrichtigungen anzuzeigen.

## Instanz-Methoden

_Erbt auch Methoden von der übergeordneten Schnittstelle, [`EventTarget`](/de/docs/Web/API/EventTarget)_.

- [`Notification.close()`](/de/docs/Web/API/Notification/close)
  - : Schliesst programmgesteuert eine Benachrichtigungsinstanz.

## Ereignisse

_Erbt auch Ereignisse von der übergeordneten Schnittstelle, [`EventTarget`](/de/docs/Web/API/EventTarget)_.

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

Es ist möglich, eine Benachrichtigung wie folgt zu senden — hier präsentieren wir eine recht ausführliche und vollständige Code-Sammlung, die Sie verwenden könnten, wenn Sie zunächst überprüfen möchten, ob Benachrichtigungen unterstützt werden, dann prüfen, ob die Erlaubnis erteilt wurde, um Benachrichtigungen von der aktuellen Herkunft zu senden, dann bei Bedarf um Erlaubnis bitten, bevor Sie dann eine Benachrichtigung senden.

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

Wir zeigen kein Live-Beispiel mehr auf dieser Seite, da Chrome und Firefox nicht mehr erlauben, dass Benachrichtigungsberechtigungen von Cross-Origin {{htmlelement("iframe")}}s angefordert werden, wobei andere Browser folgen werden. Um ein Beispiel in Aktion zu sehen, überprüfen Sie unser [To-do Listen-Beispiel](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) (siehe auch [die App im Live-Betrieb](https://mdn.github.io/dom-examples/to-do-notifications/)).

> [!NOTE]
> Im obigen Beispiel erzeugen wir Benachrichtigungen als Antwort auf eine Benutzeraktion (Klicken auf einen Button). Dies ist nicht nur Best Practice — Sie sollten Benutzer nicht mit Benachrichtigungen spammen, denen sie nicht zugestimmt haben — sondern in Zukunft werden Browser ausdrücklich Benachrichtigungen verbieten, die nicht als Antwort auf eine Benutzeraktion gesendet werden. Firefox macht dies bereits seit Version 72, zum Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Notifications API](/de/docs/Web/API/Notifications_API/Using_the_Notifications_API)
