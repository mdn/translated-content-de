---
title: Notification
slug: Web/API/Notification
l10n:
  sourceCommit: 85577061e99da7082b48263fa19f9b1ef4187eda
---

{{APIRef("Web Notifications")}}{{securecontext_header}} {{AvailableInWorkers}}

Die **`Notification`**-Schnittstelle der [Notifications API](/de/docs/Web/API/Notifications_API) wird verwendet, um Desktop-Benachrichtigungen für Benutzer zu konfigurieren und anzuzeigen.

Das Erscheinungsbild und die konkreten Funktionen dieser Benachrichtigungen unterscheiden sich je nach Plattform. Im Allgemeinen ermöglichen sie es jedoch, Benutzern asynchron Informationen bereitzustellen.

{{InheritanceDiagram}}

## Konstruktor

- [`Notification()`](/de/docs/Web/API/Notification/Notification)
  - : Erstellt eine neue Instanz des `Notification`-Objekts.

## Statische Eigenschaften

_Erbt außerdem Eigenschaften von der übergeordneten Schnittstelle [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`Notification.permission`](/de/docs/Web/API/Notification/permission_static) {{ReadOnlyInline}}
  - : Ein String, der die aktuelle Berechtigung zum Anzeigen von Benachrichtigungen angibt. Mögliche Werte sind:
    - `denied` — Der Benutzer lehnt die Anzeige von Benachrichtigungen ab.
    - `granted` — Der Benutzer stimmt der Anzeige von Benachrichtigungen zu.
    - `default` — Die Entscheidung des Benutzers ist unbekannt. Daher verhält sich der Browser so, als wäre der Wert `denied`.

- [`Notification.maxActions`](/de/docs/Web/API/Notification/maxActions_static) {{ReadOnlyInline}}
  - : Die maximale Anzahl von Aktionen, die vom Gerät und vom User Agent unterstützt werden.

## Instanzeigenschaften

_Erbt außerdem Eigenschaften von der übergeordneten Schnittstelle [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`Notification.actions`](/de/docs/Web/API/Notification/actions) {{ReadOnlyInline}}
  - : Das Array mit den Aktionen der Benachrichtigung, wie im Parameter `options` des Konstruktors angegeben.
- [`Notification.badge`](/de/docs/Web/API/Notification/badge) {{ReadOnlyInline}}
  - : Ein String mit der URL eines Bildes, das die Benachrichtigung repräsentiert, wenn nicht genügend Platz vorhanden ist, um die Benachrichtigung selbst anzuzeigen, beispielsweise in der Android-Benachrichtigungsleiste. Auf Android-Geräten sollte das Badge für Geräte mit bis zu vierfacher Auflösung ausgelegt sein, also etwa 96 × 96 px. Das Bild wird automatisch maskiert.
- [`Notification.body`](/de/docs/Web/API/Notification/body) {{ReadOnlyInline}}
  - : Der Text der Benachrichtigung, wie im Parameter `options` des Konstruktors angegeben.
- [`Notification.data`](/de/docs/Web/API/Notification/data) {{ReadOnlyInline}}
  - : Gibt einen strukturierten Klon der Daten der Benachrichtigung zurück.
- [`Notification.dir`](/de/docs/Web/API/Notification/dir) {{ReadOnlyInline}}
  - : Die Textrichtung der Benachrichtigung, wie im Parameter `options` des Konstruktors angegeben.
- [`Notification.icon`](/de/docs/Web/API/Notification/icon) {{ReadOnlyInline}}
  - : Die URL des Bildes, das als Icon der Benachrichtigung verwendet wird, wie im Parameter `options` des Konstruktors angegeben.
- [`Notification.image`](/de/docs/Web/API/Notification/image) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Die URL eines Bildes, das als Teil der Benachrichtigung angezeigt wird, wie im Parameter `options` des Konstruktors angegeben.
- [`Notification.lang`](/de/docs/Web/API/Notification/lang) {{ReadOnlyInline}}
  - : Der Sprachcode der Benachrichtigung, wie im Parameter `options` des Konstruktors angegeben.
- [`Notification.navigate`](/de/docs/Web/API/Notification/navigate) {{ReadOnlyInline}}
  - : Die Navigations-URL der Benachrichtigung. Wenn sie festgelegt ist, führt das Aktivieren der Benachrichtigung zu dieser URL, statt das Ereignis [`click`](/de/docs/Web/API/Notification/click_event) oder [`notificationclick`](/de/docs/Web/API/ServiceWorkerGlobalScope/notificationclick_event) auszulösen.
- [`Notification.renotify`](/de/docs/Web/API/Notification/renotify) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt an, ob der Benutzer benachrichtigt werden soll, nachdem eine neue Benachrichtigung eine alte ersetzt hat.
- [`Notification.requireInteraction`](/de/docs/Web/API/Notification/requireInteraction) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob eine Benachrichtigung aktiv bleiben soll, bis der Benutzer sie anklickt oder schließt, statt automatisch geschlossen zu werden.
- [`Notification.silent`](/de/docs/Web/API/Notification/silent) {{ReadOnlyInline}}
  - : Gibt an, ob die Benachrichtigung lautlos sein soll – also unabhängig von den Geräteeinstellungen weder Töne noch Vibrationen auslösen soll.
- [`Notification.tag`](/de/docs/Web/API/Notification/tag) {{ReadOnlyInline}}
  - : Die ID der Benachrichtigung (falls vorhanden), wie im Parameter `options` des Konstruktors angegeben.
- [`Notification.timestamp`](/de/docs/Web/API/Notification/timestamp) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Zeitpunkt an, zu dem eine Benachrichtigung erstellt wird oder für den sie relevant ist (Vergangenheit, Gegenwart oder Zukunft).
- [`Notification.title`](/de/docs/Web/API/Notification/title) {{ReadOnlyInline}}
  - : Der Titel der Benachrichtigung, wie im ersten Parameter des Konstruktors angegeben.
- [`Notification.vibrate`](/de/docs/Web/API/Notification/vibrate) {{ReadOnlyInline}} {{deprecated_inline}}
  - : Gibt ein Vibrationsmuster für Geräte mit Vibrationshardware an.

## Statische Methoden

_Erbt außerdem Methoden von der übergeordneten Schnittstelle [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`Notification.requestPermission()`](/de/docs/Web/API/Notification/requestPermission_static)
  - : Fordert vom Benutzer die Berechtigung zum Anzeigen von Benachrichtigungen an.

## Instanzmethoden

_Erbt außerdem Methoden von der übergeordneten Schnittstelle [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`Notification.close()`](/de/docs/Web/API/Notification/close)
  - : Schließt eine Benachrichtigungsinstanz programmgesteuert.

## Ereignisse

_Erbt außerdem Ereignisse von der übergeordneten Schnittstelle [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`click`](/de/docs/Web/API/Notification/click_event)
  - : Wird ausgelöst, wenn der Benutzer auf die Benachrichtigung klickt.
- [`close`](/de/docs/Web/API/Notification/close_event)
  - : Wird ausgelöst, wenn der Benutzer die Benachrichtigung schließt.
- [`error`](/de/docs/Web/API/Notification/error_event)
  - : Wird ausgelöst, wenn bei der Benachrichtigung ein Fehler auftritt.
- [`show`](/de/docs/Web/API/Notification/show_event)
  - : Wird ausgelöst, wenn die Benachrichtigung angezeigt wird.

## Beispiele

Gehen Sie von diesem einfachen HTML aus:

```html
<button>Notify me!</button>
```

Eine Benachrichtigung lässt sich wie folgt senden. Das folgende, recht ausführliche und vollständige Codebeispiel zeigt, wie Sie zunächst prüfen können, ob Benachrichtigungen unterstützt werden und ob für die aktuelle Origin bereits die Berechtigung zum Senden von Benachrichtigungen erteilt wurde. Falls erforderlich, wird die Berechtigung angefordert, bevor die Benachrichtigung gesendet wird.

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

Auf dieser Seite zeigen wir kein interaktives Beispiel mehr, da Chrome und Firefox nicht mehr zulassen, dass die Berechtigung für Benachrichtigungen aus {{htmlelement("iframe")}}s mit anderer Origin angefordert wird. Andere Browser werden voraussichtlich folgen. Ein funktionierendes Beispiel finden Sie in unserem [Beispiel für eine Aufgabenliste](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) (siehe auch [die laufende Anwendung](https://mdn.github.io/dom-examples/to-do-notifications/)).

> [!NOTE]
> Im obigen Beispiel lösen wir Benachrichtigungen als Reaktion auf eine Benutzeraktion aus (einen Klick auf eine Schaltfläche). Das ist nicht nur eine bewährte Vorgehensweise – Sie sollten Benutzer nicht mit Benachrichtigungen überhäufen, denen sie nicht zugestimmt haben. Künftig werden Browser Benachrichtigungen, die nicht durch eine Benutzeraktion ausgelöst wurden, ausdrücklich unterbinden. Firefox tut dies beispielsweise bereits seit Version 72.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Notifications API](/de/docs/Web/API/Notifications_API/Using_the_Notifications_API)
