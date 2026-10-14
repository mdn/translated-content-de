---
title: "Window: beforeunload-Ereignis"
short-title: beforeunload
slug: Web/API/Window/beforeunload_event
l10n:
  sourceCommit: bf3b0f3217d5d5a6957e9e17f863ece19d939d20
---

{{APIRef("HTML DOM")}}

Das **`beforeunload`**-Ereignis wird ausgelöst, wenn das aktuelle Fenster, das darin enthaltene Dokument und die zugehörigen Ressourcen entladen werden sollen. Zu diesem Zeitpunkt ist das Dokument noch sichtbar und das Ereignis kann noch abgebrochen werden.

Der wichtigste Anwendungsfall für dieses Ereignis ist das Auslösen eines vom Browser erzeugten Bestätigungsdialogs. Er fragt Benutzer, ob sie die Seite _wirklich_ verlassen möchten, wenn sie versuchen, sie zu schließen, neu zu laden oder zu einer anderen Seite zu navigieren. So soll der Verlust nicht gespeicherter Daten verhindert werden.

Der Dialog kann auf folgende Weise ausgelöst werden:

- Durch Aufrufen der Methode [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) des Ereignisobjekts.
- Durch Setzen der Eigenschaft [`returnValue`](/de/docs/Web/API/BeforeUnloadEvent/returnValue) des Ereignisobjekts auf eine nicht leere Zeichenfolge oder einen anderen {{Glossary("Truthy", "truthy")}}-Wert.
- Durch Zurückgeben eines beliebigen truthy-Werts aus der Ereignisbehandlungsfunktion, zum Beispiel `return "string"`. Beachten Sie, dass dies nur funktioniert, wenn die Funktion über die Eigenschaft `onbeforeunload` und nicht über die Methode [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) zugewiesen wurde. Dieses Verhalten ist in aktuellen Versionen von Firefox, Safari und Chrome einheitlich.

Die letzten beiden Mechanismen sind veraltete Funktionen. Es empfiehlt sich, den Dialog durch Aufrufen von `preventDefault()` auf dem Ereignisobjekt auszulösen und zusätzlich `returnValue` zu setzen, um ältere Implementierungen zu unterstützen.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignisbehandlungseigenschaft.

```js-nolint
addEventListener("beforeunload", (event) => { })

onbeforeunload = (event) => { }
```

## Ereignistyp

Ein [`BeforeUnloadEvent`](/de/docs/Web/API/BeforeUnloadEvent). Es erbt von [`Event`](/de/docs/Web/API/Event).

## Hinweise zur Verwendung

Damit der Dialog angezeigt wird, wenn Benutzer den Tab schließen oder zu einer anderen Seite navigieren, sollte eine `beforeunload`-Ereignisbehandlungsfunktion [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf dem Ereignisobjekt aufrufen. Beachten Sie, dass aktuelle Implementierungen:

- eine {{Glossary("Sticky_activation", "sticky activation")}} voraussetzen, damit der Dialog angezeigt wird. Das bedeutet, dass der Browser den Dialog nur anzeigt, wenn im Frame oder in einem eingebetteten Frame eine Benutzergeste oder -interaktion stattgefunden hat. Wenn Benutzer nie mit der Seite interagiert haben, gibt es keine Benutzerdaten zu speichern und damit keinen berechtigten Anwendungsfall für den Dialog.
- im angezeigten Dialog nur einen generischen, vom Browser festgelegten Text ausgeben. Der Code der Webseite kann diesen Text nicht beeinflussen.

Das `beforeunload`-Ereignis bringt einige Probleme mit sich:

- Es wird nicht zuverlässig ausgelöst, insbesondere auf Mobilgeräten. Im folgenden Szenario wird das `beforeunload`-Ereignis beispielsweise überhaupt nicht ausgelöst:
  1. Ein Benutzer ruft Ihre Seite auf einem Mobilgerät auf.
  2. Anschließend wechselt der Benutzer zu einer anderen App.
  3. Später schließt der Benutzer den Browser über die App-Verwaltung.

  > [!NOTE]
  > Es wird empfohlen, das [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event)-Ereignis als zuverlässigeres Signal zum automatischen Speichern des App-Zustands zu verwenden. Damit lassen sich Probleme wie das oben beschriebene umgehen. Weitere Informationen finden Sie unter [Benutzer- und App-Zustand nicht verlieren: Page Visibility verwenden](https://www.igvita.com/2015/11/20/dont-lose-user-and-app-state-use-page-visibility/).

- In Firefox ist `beforeunload` nicht mit dem [back/forward cache](https://web.dev/articles/bfcache) (bfcache) kompatibel: Firefox nimmt Seiten mit `beforeunload`-Listenern nicht in den bfcache auf, was sich negativ auf die Leistung auswirkt.

Daher wird Entwicklern empfohlen, nur dann auf `beforeunload` zu reagieren, wenn Benutzer nicht gespeicherte Änderungen haben. In diesem Fall kann der oben beschriebene Dialog sie vor einem drohenden Datenverlust warnen. Entfernen Sie den Listener wieder, sobald er nicht mehr benötigt wird. Ein sparsamer Einsatz von `beforeunload`-Listenern kann die Auswirkungen auf die Leistung minimieren.

## Aliasse für die Ereignisbehandlung

Neben der `Window`-Schnittstelle steht die Ereignisbehandlungseigenschaft `onbeforeunload` auch für folgende Ziele zur Verfügung:

- [`HTMLBodyElement`](/de/docs/Web/API/HTMLBodyElement)
- [`HTMLFrameSetElement`](/de/docs/Web/API/HTMLFrameSetElement)
- [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement)

## Beispiele

Im folgenden Beispiel verwenden wir ein HTML-Textfeld {{htmlelement("input")}} für Daten, die geändert werden können und anschließend gespeichert werden müssen:

```html
<input type="text" name="name" id="name" />
```

Unser JavaScript fügt dem `<input>`-Element einen [`input`](/de/docs/Web/API/Element/input_event)-Event-Listener hinzu, der auf Änderungen des eingegebenen Werts reagiert. Sobald der Wert nicht mehr leer ist, wird dem [`Window`](/de/docs/Web/API/Window)-Objekt ein `beforeunload`-Event-Listener hinzugefügt.

Wird der Wert wieder zu einer leeren Zeichenfolge, etwa weil er gelöscht wird, entfernen wir den `beforeunload`-Event-Listener wieder. Wie oben in den [Hinweisen zur Verwendung](#hinweise_zur_verwendung) beschrieben, sollte der Listener entfernt werden, wenn keine nicht gespeicherten Daten vorliegen, vor deren Verlust gewarnt werden muss.

Die `beforeunload`-Ereignisbehandlungsfunktion ruft `event.preventDefault()` auf, um den Warndialog auszulösen, wenn Benutzer den Tab schließen oder zu einer anderen Seite navigieren. Wir haben außerdem `event.returnValue = true` in die Funktion aufgenommen, damit die Demo auch in Browsern funktioniert, die den `event.preventDefault()`-Mechanismus nicht unterstützen.

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

Wenn der Wert von `<input>` nicht leer ist, zeigt der Browser einen Warndialog an, sobald Sie versuchen, die Seite zu schließen, zu einer anderen Seite zu navigieren oder die Seite neu zu laden. Probieren Sie es aus:

{{EmbedLiveSample("Examples", "100%", 50)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Schnittstelle [`BeforeUnloadEvent`](/de/docs/Web/API/BeforeUnloadEvent)
- Verwandte Ereignisse:
  - [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event)
  - [`readystatechange`](/de/docs/Web/API/Document/readystatechange_event)
  - [`load`](/de/docs/Web/API/Window/load_event)
  - [`unload`](/de/docs/Web/API/Window/unload_event)
- Die [Page Lifecycle API](https://developer.chrome.com/docs/web-platform/page-lifecycle-api#developer-recommendations-for-each-state) bietet weitere hilfreiche Hinweise zum Umgang mit dem Lebenszyklus von Seiten in Ihren Web-Apps.
