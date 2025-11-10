---
title: Notification
slug: Web/API/Notification
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Web Notifications")}}{{securecontext_header}} {{AvailableInWorkers}}

Das **`Notification`**-Interface der [Benachrichtigungen-API](/de/docs/Web/API/Notifications_API) wird verwendet, um Desktop-Benachrichtigungen für den Benutzer zu konfigurieren und anzuzeigen.

Das Erscheinungsbild und die spezifischen Funktionen dieser Benachrichtigungen variieren je nach Plattform, bieten jedoch im Allgemeinen eine Möglichkeit, dem Benutzer asynchron Informationen bereitzustellen.

{{InheritanceDiagram}}

## Konstruktor

- [`Notification()`](/de/docs/Web/API/Notification/Notification)
  - : Erstellt eine neue Instanz des `Notification`-Objekts.

## Statische Eigenschaften

_Erbt auch Eigenschaften von seinem übergeordneten Interface, [`EventTarget`](/de/docs/Web/API/EventTarget)_.

- [`Notification.permission`](/de/docs/Web/API/Notification/permission_static) {{ReadOnlyInline}}

  - : Ein String, der die aktuelle Berechtigung zur Anzeige von Benachrichtigungen darstellt. Mögliche Werte sind:
    - `denied` — Der Benutzer lehnt es ab, Benachrichtigungen anzuzeigen.
    - `granted` — Der Benutzer stimmt zu, Benachrichtigungen anzuzeigen.
    - `default` — Die Wahl des Benutzers ist unbekannt und der Browser verhält sich daher so, als wäre der Wert `denied`.

- [`Notification.maxActions`](/de/docs/Web/API/Notification/maxActions_static) {{ReadOnlyInline}} {{experimental_inline}}
  - : Die maximale Anzahl von Aktionen, die vom Gerät und dem User-Agent unterstützt werden.

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seinem übergeordneten Interface, [`EventTarget`](/de/docs/Web/API/EventTarget)_.

- [`Notification.actions`](/de/docs/Web/API/Notification/actions) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Das Aktionsarray der Benachrichtigung, wie im `options`-Parameter des Konstruktors angegeben.
- [`Notification.badge`](/de/docs/Web/API/Notification/badge) {{ReadOnlyInline}}
  - : Ein String, der die URL eines Bildes enthält, um die Benachrichtigung zu repräsentieren, wenn nicht genügend Platz vorhanden ist, um die Benachrichtigung selbst anzuzeigen, wie beispielsweise in der Android-Benachrichtigungsleiste. Auf Android-Geräten sollte das Badge Geräte bis zu 4x Auflösung unterstützen, etwa 96 x 96 px, und das Bild wird automatisch maskiert.
- [`Notification.body`](/de/docs/Web/API/Notification/body) {{ReadOnlyInline}}
  - : Der Body-String der Benachrichtigung, wie im `options`-Parameter des Konstruktors angegeben.
- [`Notification.data`](/de/docs/Web/API/Notification/data) {{ReadOnlyInline}}
  - : Gibt einen strukturierten Klon der Daten der Benachrichtigung zurück.
- [`Notification.dir`](/de/docs/Web/API/Notification/dir) {{ReadOnlyInline}}
  - : Die Textausrichtung der Benachrichtigung, wie im `options`-Parameter des Konstruktors angegeben.
- [`Notification.icon`](/de/docs/Web/API/Notification/icon) {{ReadOnlyInline}}
  - : Die URL des Bildes, das als Symbol der Benachrichtigung verwendet wird, wie im `options`-Parameter des Konstruktors angegeben.
- [`Notification.image`](/de/docs/Web/API/Notification/image) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Die URL eines Bildes, das als Teil der Benachrichtigung angezeigt wird, wie im `options`-Parameter des Konstruktors angegeben.
- [`Notification.lang`](/de/docs/Web/API/Notification/lang) {{ReadOnlyInline}}
  - : Der Sprachcode der Benachrichtigung, wie im `options`-Parameter des Konstruktors angegeben.
- [`Notification.renotify`](/de/docs/Web/API/Notification/renotify) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt an, ob der Benutzer benachrichtigt werden soll, wenn eine neue Benachrichtigung eine alte ersetzt.
- [`Notification.requireInteraction`](/de/docs/Web/API/Notification/requireInteraction) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, dass eine Benachrichtigung aktiv bleiben sollte, bis der Benutzer sie anklickt oder schließt, anstatt automatisch zu schließen.
- [`Notification.silent`](/de/docs/Web/API/Notification/silent) {{ReadOnlyInline}}
  - : Gibt an, ob die Benachrichtigung stumm sein sollte – d.h. es sollten unabhängig von den Geräteeinstellungen keine Geräusche oder Vibrationen ausgegeben werden.
- [`Notification.tag`](/de/docs/Web/API/Notification/tag) {{ReadOnlyInline}}
  - : Die ID der Benachrichtigung (falls vorhanden), wie im `options`-Parameter des Konstruktors angegeben.
- [`Notification.timestamp`](/de/docs/Web/API/Notification/timestamp) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die Zeit an, zu der eine Benachrichtigung erstellt oder anwendbar ist (Vergangenheit, Gegenwart oder Zukunft).
- [`Notification.title`](/de/docs/Web/API/Notification/title) {{ReadOnlyInline}}
  - : Der Titel der Benachrichtigung, wie im ersten Parameter des Konstruktors angegeben.
- [`Notification.vibrate`](/de/docs/Web/API/Notification/vibrate) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein Vibrationsmuster für Geräte mit Vibrationshardware an, das ausgegeben wird.

## Statische Methoden

_Erbt auch Methoden von seinem übergeordneten Interface, [`EventTarget`](/de/docs/Web/API/EventTarget)_.

- [`Notification.requestPermission()`](/de/docs/Web/API/Notification/requestPermission_static)
  - : Fordert die Erlaubnis vom Benutzer an, Benachrichtigungen anzuzeigen.

## Instanz-Methoden

_Erbt auch Methoden von seinem übergeordneten Interface, [`EventTarget`](/de/docs/Web/API/EventTarget)_.

- [`Notification.close()`](/de/docs/Web/API/Notification/close)
  - : Schließt eine Benachrichtigungsinstanz programmgesteuert.

## Ereignisse

_Erbt auch Ereignisse von seinem übergeordneten Interface, [`EventTarget`](/de/docs/Web/API/EventTarget)_.

- [`click`](/de/docs/Web/API/Notification/click_event)
  - : Wird ausgelöst, wenn der Benutzer auf die Benachrichtigung klickt.
- [`close`](/de/docs/Web/API/Notification/close_event)
  - : Wird ausgelöst, wenn der Benutzer die Benachrichtigung schließt.
- [`error`](/de/docs/Web/API/Notification/error_event)
  - : Wird ausgelöst, wenn die Benachrichtigung einen Fehler auftritt.
- [`show`](/de/docs/Web/API/Notification/show_event)
  - : Wird ausgelöst, wenn die Benachrichtigung angezeigt wird.

## Beispiele

Angenommen, dieser grundlegende HTML-Code:

```html
<button>Notify me!</button>
```

Es ist möglich, eine Benachrichtigung wie folgt zu senden — hier präsentieren wir eine recht ausführliche und vollständige Reihe von Code, die Sie verwenden könnten, wenn Sie zuerst überprüfen möchten, ob Benachrichtigungen unterstützt werden, dann überprüfen, ob die Berechtigung für den aktuellen Ursprung erteilt wurde, Benachrichtigungen zu senden, dann die Berechtigung anfordern, falls erforderlich, bevor Sie dann eine Benachrichtigung senden.

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

Wir zeigen kein Live-Beispiel mehr auf dieser Seite, da Chrome und Firefox keine Benachrichtigungsberechtigungen mehr von fremden Ursprüngen aus `{{htmlelement("iframe")}}s` anfordern lassen, mit anderen Browsern, die folgen werden. Um ein Beispiel in Aktion zu sehen, schauen Sie sich unser [To-do-Listenbeispiel](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) an (sehen Sie auch [die App live in Aktion](https://mdn.github.io/dom-examples/to-do-notifications/)).

> [!NOTE]
> Im obigen Beispiel erstellen wir Benachrichtigungen als Reaktion auf eine Benutzeraktion (Klick auf einen Button). Dies ist nicht nur Best Practice – Sie sollten Benutzer nicht mit Benachrichtigungen belästigen, denen sie nicht zugestimmt haben – sondern in Zukunft werden Browser ausdrücklich Benachrichtigungen verbieten, die nicht als Reaktion auf eine Benutzeraktion ausgelöst werden. Firefox tut dies bereits ab Version 72, zum Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Benachrichtigungen-API](/de/docs/Web/API/Notifications_API/Using_the_Notifications_API)
