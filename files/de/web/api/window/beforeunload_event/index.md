---
title: "Window: beforeunload-Ereignis"
short-title: beforeunload
slug: Web/API/Window/beforeunload_event
l10n:
  sourceCommit: 958799789600997855abbdabca7abc8a221b6778
---

{{APIRef("HTML DOM")}}

Das **`beforeunload`**-Ereignis wird ausgelöst, wenn das aktuelle Fenster, das darin enthaltene Dokument und die zugehörigen Ressourcen entladen werden sollen. Zu diesem Zeitpunkt ist das Dokument noch sichtbar und das Ereignis kann noch abgebrochen werden.

Der wichtigste Anwendungsfall für dieses Ereignis ist das Auslösen eines vom Browser erzeugten Bestätigungsdialogs. Er fragt Benutzer, ob sie die Seite _wirklich_ verlassen möchten, wenn sie versuchen, sie zu schließen, neu zu laden oder zu einer anderen Seite zu navigieren. So soll verhindert werden, dass nicht gespeicherte Daten verloren gehen.

Der Dialog kann auf folgende Weise ausgelöst werden:

- Durch Aufrufen der Methode [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) des Ereignisobjekts.
- Durch Setzen der Eigenschaft [`returnValue`](/de/docs/Web/API/BeforeUnloadEvent/returnValue) des Ereignisobjekts auf eine nicht leere Zeichenfolge oder einen anderen {{Glossary("Truthy", "truthy")}}-Wert.
- Durch Zurückgeben eines beliebigen truthy-Werts aus der Ereignisbehandlungsfunktion, z. B. `return "string"`. Beachten Sie, dass dies nur funktioniert, wenn die Funktion über die Eigenschaft `onbeforeunload` eingebunden wird, nicht über die Methode [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener). Dieses Verhalten ist in modernen Versionen von Firefox, Safari und Chrome einheitlich.

Die letzten beiden Mechanismen sind veraltete Funktionen. Empfohlen wird, den Dialog durch Aufrufen von `preventDefault()` auf dem Ereignisobjekt auszulösen und zusätzlich `returnValue` zu setzen, um ältere Implementierungen zu unterstützen.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignisbehandlungseigenschaft.

```js-nolint
addEventListener("beforeunload", (event) => { })

onbeforeunload = (event) => { }
```

## Ereignistyp

Ein [`BeforeUnloadEvent`](/de/docs/Web/API/BeforeUnloadEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

## Hinweise zur Verwendung

Damit der Dialog angezeigt wird, wenn Benutzer den Tab schließen oder zu einer anderen Seite navigieren, sollte eine `beforeunload`-Ereignisbehandlungsfunktion [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf dem Ereignisobjekt aufrufen. Beachten Sie, dass moderne Implementierungen:

- Eine {{Glossary("Sticky_activation", "sticky activation")}} voraussetzen, damit der Dialog angezeigt wird. Anders ausgedrückt: Der Browser zeigt den Dialog nur an, wenn im Frame oder in einem eingebetteten Frame eine Benutzergeste oder -interaktion stattgefunden hat. Wenn Benutzer nie mit der Seite interagiert haben, gibt es keine Benutzerdaten zu speichern und somit keinen berechtigten Anwendungsfall für den Dialog.
- Im angezeigten Dialog nur einen allgemeinen, vom Browser vorgegebenen Text anzeigen. Dieser lässt sich nicht durch den Code der Webseite steuern.

Das `beforeunload`-Ereignis wird nicht zuverlässig ausgelöst, insbesondere auf Mobilgeräten. Beispielsweise wird es in folgendem Szenario nicht ausgelöst:

1. Ein Benutzer ruft Ihre Seite auf einem Mobilgerät auf.
2. Anschließend wechselt der Benutzer zu einer anderen App.
3. Später schließt der Benutzer den Browser über die App-Verwaltung.

> [!NOTE]
> Das Ereignis [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event) ist ein zuverlässigeres Signal dafür, wann der Anwendungszustand gespeichert werden sollte. Weitere Informationen finden Sie unter [Benutzer- und Anwendungszustand nicht verlieren: Page Visibility verwenden](https://www.igvita.com/2015/11/20/dont-lose-user-and-app-state-use-page-visibility/).

Wir empfehlen, nur dann auf `beforeunload` zu reagieren, wenn Benutzer nicht gespeicherte Änderungen haben. So kann der Bestätigungsdialog sie vor einem drohenden Datenverlust warnen. Entfernen Sie den Event-Listener, sobald er nicht mehr benötigt wird.

## Aliase für die Ereignisbehandlung

Neben dem Interface `Window` ist die Ereignisbehandlungseigenschaft `onbeforeunload` auch auf folgenden Zielen verfügbar:

- [`HTMLBodyElement`](/de/docs/Web/API/HTMLBodyElement)
- [`HTMLFrameSetElement`](/de/docs/Web/API/HTMLFrameSetElement)
- [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement)

## Beispiele

Im folgenden Beispiel verwenden wir ein HTML-Textfeld {{htmlelement("input")}} für Daten, die geändert werden können und anschließend gespeichert werden müssen:

```html
<input type="text" name="name" id="name" />
```

Unser JavaScript fügt dem `<input>`-Element einen Event-Listener für das [`input`](/de/docs/Web/API/Element/input_event)-Ereignis hinzu, der auf Änderungen des eingegebenen Werts reagiert. Wenn der Wert auf einen nicht leeren Wert geändert wird, wird dem [`Window`](/de/docs/Web/API/Window)-Objekt ein Event-Listener für `beforeunload` hinzugefügt.

Wenn der Wert wieder zu einer leeren Zeichenfolge wird (also gelöscht wird), wird der Event-Listener für `beforeunload` wieder entfernt. Wie oben in den [Hinweisen zur Verwendung](#hinweise_zur_verwendung) erwähnt, sollte der Listener entfernt werden, wenn keine nicht gespeicherten Daten vorhanden sind, vor deren Verlust gewarnt werden muss.

Die `beforeunload`-Ereignisbehandlungsfunktion ruft `event.preventDefault()` auf, um den Warndialog auszulösen, wenn Benutzer den Tab schließen oder zu einer anderen Seite navigieren. Wir haben außerdem `event.returnValue = true` in die Funktion aufgenommen, damit das Beispiel auch in Browsern korrekt funktioniert, die den Mechanismus über `event.preventDefault()` nicht unterstützen.

```js
const beforeUnloadHandler = (event) => {
  // Recommended
  event.preventDefault();

  // Included for legacy support, e.g. Chrome/Edge < 119
  event.returnValue = true;
};

const nameInput = document.querySelector("#name");

nameInput.addEventListener("input", (event) => {
  if (event.target.value !== "") {
    window.addEventListener("beforeunload", beforeUnloadHandler);
  } else {
    window.removeEventListener("beforeunload", beforeUnloadHandler);
  }
});
```

Wenn der Wert von `<input>` nicht leer ist, zeigt der Browser einen Warndialog an, sobald Sie versuchen, die Seite zu schließen, zu einer anderen Seite zu navigieren oder sie neu zu laden. Probieren Sie es aus:

{{EmbedLiveSample("Examples", "100%", 50)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Interface [`BeforeUnloadEvent`](/de/docs/Web/API/BeforeUnloadEvent)
- Verwandte Ereignisse:
  - [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event)
  - [`readystatechange`](/de/docs/Web/API/Document/readystatechange_event)
  - [`load`](/de/docs/Web/API/Window/load_event)
  - [`unload`](/de/docs/Web/API/Window/unload_event)
- Die [Page Lifecycle API](https://developer.chrome.com/docs/web-platform/page-lifecycle-api#developer-recommendations-for-each-state) bietet weitere hilfreiche Hinweise zum Umgang mit dem Lebenszyklus von Seiten in Ihren Webanwendungen.
