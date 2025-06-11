---
title: Notification
slug: Web/API/Notification
l10n:
  sourceCommit: 7cd51a73ad94df604db79ccacbbe0513d0967650
---

{{APIRef("Web Notifications")}}{{securecontext_header}} {{AvailableInWorkers}}

Das **`Notification`**-Interface der [Notifications API](/de/docs/Web/API/Notifications_API) wird verwendet, um dem Nutzer Desktop-Benachrichtigungen zu konfigurieren und anzuzeigen.

Das Erscheinungsbild und die spezifische Funktionalität dieser Benachrichtigungen variiert je nach Plattform, aber im Allgemeinen bieten sie eine Möglichkeit, dem Nutzer asynchron Informationen bereitzustellen.

{{InheritanceDiagram}}

## Konstruktor

- [`Notification()`](/de/docs/Web/API/Notification/Notification)
  - : Erstellt eine neue Instanz des `Notification`-Objekts.

## Statische Eigenschaften

_Erbt auch Eigenschaften von seinem übergeordneten Interface, [`EventTarget`](/de/docs/Web/API/EventTarget)_.

- [`Notification.permission`](/de/docs/Web/API/Notification/permission_static) {{ReadOnlyInline}}

  - : Ein String, der die aktuelle Berechtigung zur Anzeige von Benachrichtigungen anzeigt. Mögliche Werte sind:

    - `denied` — Der Nutzer verweigert die Anzeige von Benachrichtigungen.
    - `granted` — Der Nutzer akzeptiert die Anzeige von Benachrichtigungen.
    - `default` — Die Entscheidung des Nutzers ist unbekannt und daher verhält sich der Browser so, als wäre der Wert verweigert.

- [`Notification.maxActions`](/de/docs/Web/API/Notification/maxActions_static) {{ReadOnlyInline}} {{experimental_inline}}
  - : Die maximale Anzahl an Aktionen, die vom Gerät und dem User Agent unterstützt werden.

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seinem übergeordneten Interface, [`EventTarget`](/de/docs/Web/API/EventTarget)_.

- [`Notification.actions`](/de/docs/Web/API/Notification/actions) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Das Aktionsarray der Benachrichtigung, wie im `options`-Parameter des Konstruktors angegeben.
- [`Notification.badge`](/de/docs/Web/API/Notification/badge) {{ReadOnlyInline}}
  - : Ein String, der die URL eines Bildes enthält, das die Benachrichtigung repräsentieren soll, wenn nicht genügend Platz vorhanden ist, um die Benachrichtigung selbst anzuzeigen, wie z.B. in der Android-Benachrichtigungsleiste. Auf Android-Geräten sollte das Abzeichen Geräte bis zu einer 4-fachen Auflösung unterstützen, etwa 96 mal 96 px, und das Bild wird automatisch maskiert.
- [`Notification.body`](/de/docs/Web/API/Notification/body) {{ReadOnlyInline}}
  - : Der Textkörper der Benachrichtigung, wie im `options`-Parameter des Konstruktors angegeben.
- [`Notification.data`](/de/docs/Web/API/Notification/data) {{ReadOnlyInline}}
  - : Gibt einen strukturierten Klon der Benachrichtigungsdaten zurück.
- [`Notification.dir`](/de/docs/Web/API/Notification/dir) {{ReadOnlyInline}}
  - : Die Textausrichtung der Benachrichtigung, wie im `options`-Parameter des Konstruktors angegeben.
- [`Notification.icon`](/de/docs/Web/API/Notification/icon) {{ReadOnlyInline}}
  - : Die URL des Bildes, das als Icon der Benachrichtigung verwendet wird, wie im `options`-Parameter des Konstruktors angegeben.
- [`Notification.image`](/de/docs/Web/API/Notification/image) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Die URL eines Bildes, das als Teil der Benachrichtigung angezeigt werden soll, wie im `options`-Parameter des Konstruktors angegeben.
- [`Notification.lang`](/de/docs/Web/API/Notification/lang) {{ReadOnlyInline}}
  - : Der Sprachcode der Benachrichtigung, wie im `options`-Parameter des Konstruktors angegeben.
- [`Notification.renotify`](/de/docs/Web/API/Notification/renotify) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt an, ob der Nutzer benachrichtigt werden soll, nachdem eine neue Benachrichtigung eine alte ersetzt hat.
- [`Notification.requireInteraction`](/de/docs/Web/API/Notification/requireInteraction) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der anzeigt, dass eine Benachrichtigung aktiv bleiben soll, bis der Nutzer sie anklickt oder schließt, anstatt automatisch zu schließen.
- [`Notification.silent`](/de/docs/Web/API/Notification/silent) {{ReadOnlyInline}}
  - : Gibt an, ob die Benachrichtigung stumm sein soll — d.h. keine Töne oder Vibrationen, unabhängig von den Geräteeinstellungen.
- [`Notification.tag`](/de/docs/Web/API/Notification/tag) {{ReadOnlyInline}}
  - : Die ID der Benachrichtigung (falls vorhanden), wie im `options`-Parameter des Konstruktors angegeben.
- [`Notification.timestamp`](/de/docs/Web/API/Notification/timestamp) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die Zeit an, zu der eine Benachrichtigung erstellt oder relevant ist (vergangen, gegenwärtig oder zukünftig).
- [`Notification.title`](/de/docs/Web/API/Notification/title) {{ReadOnlyInline}}
  - : Der Titel der Benachrichtigung, wie im ersten Parameter des Konstruktors angegeben.
- [`Notification.vibrate`](/de/docs/Web/API/Notification/vibrate) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein Vibrationsmuster für Geräte mit Vibrationshardware an, um es zu emittieren.

## Statische Methoden

_Erbt auch Methoden von seinem übergeordneten Interface, [`EventTarget`](/de/docs/Web/API/EventTarget)_.

- [`Notification.requestPermission()`](/de/docs/Web/API/Notification/requestPermission_static)
  - : Fordert die Erlaubnis des Nutzers an, um Benachrichtigungen anzuzeigen.

## Instanz-Methoden

_Erbt auch Methoden von seinem übergeordneten Interface, [`EventTarget`](/de/docs/Web/API/EventTarget)_.

- [`Notification.close()`](/de/docs/Web/API/Notification/close)
  - : Schließt eine Benachrichtigungsinstanz programmgesteuert.

## Ereignisse

_Erbt auch Ereignisse von seinem übergeordneten Interface, [`EventTarget`](/de/docs/Web/API/EventTarget)_.

- [`click`](/de/docs/Web/API/Notification/click_event)
  - : Wird ausgelöst, wenn der Nutzer auf die Benachrichtigung klickt.
- [`close`](/de/docs/Web/API/Notification/close_event)
  - : Wird ausgelöst, wenn der Nutzer die Benachrichtigung schließt.
- [`error`](/de/docs/Web/API/Notification/error_event)
  - : Wird ausgelöst, wenn die Benachrichtigung auf einen Fehler stößt.
- [`show`](/de/docs/Web/API/Notification/show_event)
  - : Wird ausgelöst, wenn die Benachrichtigung angezeigt wird.

## Beispiele

Angenommen, dieses einfache HTML:

```html
<button>Notify me!</button>
```

Es ist möglich, eine Benachrichtigung wie folgt zu senden — hier präsentieren wir ein ziemlich ausführliches und vollständiges Set von Code, das Sie verwenden könnten, wenn Sie zuerst prüfen möchten, ob Benachrichtigungen unterstützt werden, dann prüfen, ob die Berechtigung für den aktuellen Ursprung zur Sendung von Benachrichtigungen erteilt wurde, dann ggf. die Erlaubnis anfordern, bevor eine Benachrichtigung gesendet wird.

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

Wir zeigen kein Live-Beispiel mehr auf dieser Seite, da Chrome und Firefox nicht länger zulassen, dass Berechtigungen für Benachrichtigungen von cross-origin {{htmlelement("iframe")}}s angefordert werden, mit anderen Browsern, die folgen werden. Um ein funktionierendes Beispiel zu sehen, schauen Sie sich unser [To-do-Listen-Beispiel](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) an (siehe auch [die laufende App](https://mdn.github.io/dom-examples/to-do-notifications/)).

> [!NOTE]
> Im obigen Beispiel erzeugen wir Benachrichtigungen als Reaktion auf eine Nutzeraktion (das Klicken auf einen Button). Dies ist nicht nur eine best practice — Sie sollten keine Nutzer mit Benachrichtigungen belästigen, denen sie nicht zugestimmt haben — sondern zukünftig werden Browser explizit Benachrichtigungen verbieten, die nicht als Reaktion auf eine Nutzeraktion ausgelöst werden. Firefox tut dies bereits seit Version 72, zum Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Notifications API](/de/docs/Web/API/Notifications_API/Using_the_Notifications_API)
