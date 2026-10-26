---
title: "Window: beforeunload-Ereignis"
short-title: beforeunload
slug: Web/API/Window/beforeunload_event
l10n:
  sourceCommit: d4f95d5a32920324e2502a556d8bdd9d7f446718
---

{{APIRef("HTML DOM")}}

Das **`beforeunload`**-Ereignis wird ausgelöst, wenn das aktuelle Fenster, das darin enthaltene Dokument und die zugehörigen Ressourcen unmittelbar entladen werden sollen. Zu diesem Zeitpunkt ist das Dokument noch sichtbar und das Ereignis kann noch abgebrochen werden.

Der wichtigste Anwendungsfall für dieses Ereignis ist das Auslösen eines vom Browser erzeugten Bestätigungsdialogs. Er fragt Benutzer, ob sie die Seite _wirklich_ verlassen möchten, wenn sie versuchen, sie zu schließen, neu zu laden oder zu einer anderen Seite zu navigieren. Dadurch soll der Verlust nicht gespeicherter Daten verhindert werden.

Der Dialog kann auf folgende Weise ausgelöst werden:

- Durch Aufrufen der Methode [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) des Ereignisobjekts.
- Durch Setzen der Eigenschaft [`returnValue`](/de/docs/Web/API/BeforeUnloadEvent/returnValue) des Ereignisobjekts auf eine nicht leere Zeichenfolge oder einen anderen {{Glossary("Truthy", "truthy-Wert")}}.
- Durch Zurückgeben eines truthy-Werts aus der Event-Handler-Funktion, beispielsweise `return "string"`. Beachten Sie, dass dies nur funktioniert, wenn die Funktion über die Eigenschaft `onbeforeunload` und nicht über die Methode [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) eingebunden wurde. Dieses Verhalten ist in aktuellen Versionen von Firefox, Safari und Chrome einheitlich.

Die letzten beiden Mechanismen sind veraltete Funktionen. Es empfiehlt sich, den Dialog durch Aufrufen von `preventDefault()` auf dem Ereignisobjekt auszulösen und zusätzlich `returnValue` zu setzen, um ältere Implementierungen zu unterstützen.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("beforeunload", (event) => { })
```

Alternativ können Sie die [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onbeforeunload = (event) => { }
```

## Ereignistyp

Ein [`BeforeUnloadEvent`](/de/docs/Web/API/BeforeUnloadEvent). Es erbt von [`Event`](/de/docs/Web/API/Event).

## Hinweise zur Verwendung

Damit der Dialog angezeigt wird, wenn Benutzer den Tab schließen oder von ihm weg navigieren, sollte eine `beforeunload`-Event-Handler-Funktion [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf dem Ereignisobjekt aufrufen. Beachten Sie, dass aktuelle Implementierungen:

- eine {{Glossary("Sticky_activation", "sticky activation")}} voraussetzen, damit der Dialog angezeigt wird. Anders gesagt: Der Browser zeigt den Dialog nur an, wenn im Frame oder in einem eingebetteten Frame eine Benutzergeste oder -interaktion stattgefunden hat. Wenn Benutzer noch nie mit der Seite interagiert haben, gibt es keine Benutzerdaten zu speichern und damit keinen berechtigten Anwendungsfall für den Dialog.
- im angezeigten Dialog nur einen allgemeinen, vom Browser vorgegebenen Text anzeigen. Dieser kann nicht durch den Code der Webseite beeinflusst werden.

Das `beforeunload`-Ereignis wird nicht zuverlässig ausgelöst, insbesondere auf mobilen Plattformen. Im folgenden Szenario wird das Ereignis beispielsweise nicht ausgelöst:

1. Ein mobiler Benutzer besucht Ihre Seite.
2. Der Benutzer wechselt anschließend zu einer anderen App.
3. Später schließt der Benutzer den Browser über den App-Manager.

> [!NOTE]
> Das Ereignis [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event) ist ein zuverlässigeres Signal dafür, wann der Anwendungszustand gespeichert werden sollte. Weitere Informationen finden Sie unter [Benutzer- und App-Zustand nicht verlieren: Page Visibility verwenden](https://www.igvita.com/2015/11/20/dont-lose-user-and-app-state-use-page-visibility/).

Wir empfehlen, nur dann auf `beforeunload` zu lauschen, wenn Benutzer nicht gespeicherte Änderungen haben. So kann der Bestätigungsdialog vor einem drohenden Datenverlust warnen. Entfernen Sie den Listener, sobald er nicht mehr benötigt wird.

## Event-Handler-Aliasse

Neben der Schnittstelle `Window` ist die Event-Handler-Eigenschaft `onbeforeunload` auch für die folgenden Ziele verfügbar:

- [`HTMLBodyElement`](/de/docs/Web/API/HTMLBodyElement)
- [`HTMLFrameSetElement`](/de/docs/Web/API/HTMLFrameSetElement)
- [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement)

## Beispiele

Im folgenden Beispiel verwenden wir ein HTML-Textfeld vom Typ {{htmlelement("input")}}, um Daten darzustellen, die geändert werden können und dann gespeichert werden müssen:

```html
<input type="text" name="name" id="name" />
```

Unser JavaScript fügt dem `<input>`-Element einen Event-Listener für [`input`](/de/docs/Web/API/Element/input_event) hinzu, der auf Änderungen des eingegebenen Werts reagiert. Wenn der Wert auf einen nicht leeren Wert geändert wird, wird dem [`Window`](/de/docs/Web/API/Window)-Objekt ein Event-Listener für `beforeunload` hinzugefügt.

Wird der Wert wieder zu einer leeren Zeichenfolge (d.h. der Inhalt wird gelöscht), wird der Event-Listener für `beforeunload` wieder entfernt. Wie oben unter [Hinweise zur Verwendung](#hinweise_zur_verwendung) erwähnt, sollte der Listener entfernt werden, wenn keine nicht gespeicherten Daten vorhanden sind, vor deren Verlust gewarnt werden muss.

Die Event-Handler-Funktion für `beforeunload` ruft `event.preventDefault()` auf, um den Warndialog auszulösen, wenn Benutzer den Tab schließen oder von ihm weg navigieren. Wir haben außerdem `event.returnValue = true` in die Handler-Funktion aufgenommen, damit die Demo auch in Browsern korrekt funktioniert, die den Mechanismus mit `event.preventDefault()` nicht unterstützen.

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

Wenn der Wert des `<input>`-Elements nicht leer ist, zeigt der Browser einen Warndialog an, sobald Sie versuchen, die Seite zu schließen, zu einer anderen Seite zu navigieren oder die Seite neu zu laden. Probieren Sie es aus:

{{EmbedLiveSample("Examples", "100%", 50)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Schnittstelle [`BeforeUnloadEvent`](/de/docs/Web/API/BeforeUnloadEvent)
- Verwandte Ereignisse:
  - [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event)
  - [`readystatechange`](/de/docs/Web/API/Document/readystatechange_event)
  - [`load`](/de/docs/Web/API/Window/load_event)
  - [`unload`](/de/docs/Web/API/Window/unload_event)
- Die [Page Lifecycle API](https://developer.chrome.com/docs/web-platform/page-lifecycle-api#developer-recommendations-for-each-state) bietet weitere hilfreiche Hinweise zum Umgang mit dem Lebenszyklus von Seiten in Ihren Web-Apps.
