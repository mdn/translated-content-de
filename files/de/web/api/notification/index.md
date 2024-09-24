---
title: Benachrichtigung
slug: Web/API/Notification
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{APIRef("Web Notifications")}}{{securecontext_header}} {{AvailableInWorkers}}

Das **`Notification`** Interface der {{domxref("Notifications API", "", "", "nocode")}} wird verwendet, um Desktop-Benachrichtigungen für den Benutzer zu konfigurieren und anzuzeigen.

Das Erscheinungsbild und die spezifische Funktionalität dieser Benachrichtigungen variieren je nach Plattform, bieten jedoch im Allgemeinen eine Möglichkeit, dem Benutzer asynchron Informationen bereitzustellen.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("Notification.Notification", "Notification()")}}
  - : Erstellt eine neue Instanz des `Notification` Objekts.

## Statische Eigenschaften

_Erbt auch Eigenschaften von seiner Elternschnittstelle, {{domxref("EventTarget")}}_.

- {{domxref("Notification.permission_static", "Notification.permission")}} {{ReadOnlyInline}}

  - : Ein String, der die aktuelle Berechtigung zur Anzeige von Benachrichtigungen darstellt. Mögliche Werte sind:

    - `denied` — Der Benutzer lehnt es ab, Benachrichtigungen anzeigen zu lassen.
    - `granted` — Der Benutzer akzeptiert das Anzeigen von Benachrichtigungen.
    - `default` — Die Auswahl des Benutzers ist unbekannt und der Browser wird daher so handeln, als wäre der Wert abgelehnt.

- {{domxref("Notification.maxActions_static", "Notification.maxActions")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Die maximale Anzahl von Aktionen, die vom Gerät und dem User Agent unterstützt werden.

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seiner Elternschnittstelle, {{domxref("EventTarget")}}_.

- {{domxref("Notification.actions")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Das Aktionen-Array der Benachrichtigung, wie im `options` Parameter des Konstruktors angegeben.
- {{domxref("Notification.badge")}} {{ReadOnlyInline}}
  - : Ein String, der die URL eines Bildes enthält, das die Benachrichtigung darstellt, wenn nicht genügend Platz vorhanden ist, um die Benachrichtigung selbst anzuzeigen, wie zum Beispiel in der Android-Benachrichtigungsleiste. Auf Android-Geräten sollte das Abzeichen Geräte bis zu einer Auflösung von 4x aufnehmen können, etwa 96 x 96 px, und das Bild wird automatisch maskiert.
- {{domxref("Notification.body")}} {{ReadOnlyInline}}
  - : Der Body-String der Benachrichtigung, wie im `options` Parameter des Konstruktors angegeben.
- {{domxref("Notification.data")}} {{ReadOnlyInline}}
  - : Gibt einen strukturierten Klon der Daten der Benachrichtigung zurück.
- {{domxref("Notification.dir")}} {{ReadOnlyInline}}
  - : Die Textausrichtung der Benachrichtigung, wie im `options` Parameter des Konstruktors angegeben.
- {{domxref("Notification.icon")}} {{ReadOnlyInline}}
  - : Die URL des Bildes, das als Symbol der Benachrichtigung verwendet wird, wie im `options` Parameter des Konstruktors angegeben.
- {{domxref("Notification.image")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Die URL eines Bildes, das als Teil der Benachrichtigung angezeigt werden soll, wie im `options` Parameter des Konstruktors angegeben.
- {{domxref("Notification.lang")}} {{ReadOnlyInline}}
  - : Der Sprachcode der Benachrichtigung, wie im `options` Parameter des Konstruktors angegeben.
- {{domxref("Notification.renotify")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt an, ob der Benutzer benachrichtigt werden soll, nachdem eine neue Benachrichtigung eine alte ersetzt.
- {{domxref("Notification.requireInteraction")}} {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, dass eine Benachrichtigung aktiv bleiben soll, bis der Benutzer sie anklickt oder schließt, statt automatisch zu schließen.
- {{domxref("Notification.silent")}} {{ReadOnlyInline}}
  - : Gibt an, ob die Benachrichtigung stumm sein soll — d. h., es sollen unabhängig von den Geräteeinstellungen keine Töne oder Vibrationen ausgegeben werden.
- {{domxref("Notification.tag")}} {{ReadOnlyInline}}
  - : Die ID der Benachrichtigung (falls vorhanden), wie im `options` Parameter des Konstruktors angegeben.
- {{domxref("Notification.timestamp")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die Zeit an, zu der eine Benachrichtigung erstellt oder anwendbar ist (Vergangenheit, Gegenwart oder Zukunft).
- {{domxref("Notification.title")}} {{ReadOnlyInline}}
  - : Der Titel der Benachrichtigung, wie im ersten Parameter des Konstruktors angegeben.
- {{domxref("Notification.vibrate")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein Vibrationsmuster für Geräte mit Vibrationshardware an.

## Statische Methoden

_Erbt auch Methoden von seiner Elternschnittstelle, {{domxref("EventTarget")}}_.

- {{domxref("Notification.requestPermission_static", "Notification.requestPermission()")}}
  - : Fordert die Erlaubnis des Benutzers an, um Benachrichtigungen anzuzeigen.

## Instanz-Methoden

_Erbt auch Methoden von seiner Elternschnittstelle, {{domxref("EventTarget")}}_.

- {{domxref("Notification.close()")}}
  - : Schließt eine Benachrichtigungsinstanz programmgesteuert.

## Ereignisse

_Erbt auch Ereignisse von seiner Elternschnittstelle, {{domxref("EventTarget")}}_.

- {{domxref("Notification.click_event", "click")}}
  - : Tritt ein, wenn der Benutzer die Benachrichtigung anklickt.
- {{domxref("Notification.close_event", "close")}}
  - : Tritt ein, wenn der Benutzer die Benachrichtigung schließt.
- {{domxref("Notification.error_event", "error")}}
  - : Tritt ein, wenn die Benachrichtigung auf einen Fehler stößt.
- {{domxref("Notification.show_event", "show")}}
  - : Tritt ein, wenn die Benachrichtigung angezeigt wird.

## Beispiele

Angenommen, folgendes grundlegendes HTML:

```html
<button onclick="notifyMe()">Notify me!</button>
```

Es ist möglich, eine Benachrichtigung wie folgt zu senden — hier präsentieren wir eine ziemlich ausführliche und vollständige Reihe von Code, die Sie verwenden könnten, wenn Sie zuerst überprüfen wollten, ob Benachrichtigungen unterstützt werden, dann überprüfen, ob die Berechtigung für den aktuellen Ursprung zum Senden von Benachrichtigungen erteilt wurde, dann die Erlaubnis anfordern, falls erforderlich, bevor eine Benachrichtigung gesendet wird.

```js
function notifyMe() {
  if (!("Notification" in window)) {
    // Überprüfen Sie, ob der Browser Benachrichtigungen unterstützt
    alert("Dieser Browser unterstützt keine Desktop-Benachrichtigungen");
  } else if (Notification.permission === "granted") {
    // Überprüfen Sie, ob bereits Benachrichtigungsberechtigungen erteilt wurden;
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
  // respektvoll sein möchten, besteht kein Anlass, ihn weiter zu stören.
}
```

Wir zeigen kein Live-Beispiel mehr auf dieser Seite, da Chrome und Firefox nicht mehr zulassen, dass Benachrichtigungsberechtigungen von fremden {{htmlelement("iframe")}}s angefragt werden, wobei andere Browser folgen. Um ein Beispiel in Aktion zu sehen, schauen Sie sich unser [To-do List Beispiel](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) an (siehe auch [die Anwendung live](https://mdn.github.io/dom-examples/to-do-notifications/)).

> [!NOTE]
> Im obigen Beispiel erzeugen wir Benachrichtigungen als Reaktion auf eine Benutzeraktion (Klick auf einen Button). Dies ist nicht nur eine Best Practice — Sie sollten Benutzer nicht mit Benachrichtigungen spam-en, denen sie nicht zugestimmt haben — sondern in Zukunft werden Browser ausdrücklich verbieten, dass Benachrichtigungen nicht als Reaktion auf eine Benutzeraktion ausgelöst werden. Firefox macht das schon ab Version 72, zum Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Benachrichtigungs-API](/de/docs/Web/API/Notifications_API/Using_the_Notifications_API)
