---
title: "Window: beforeunload event"
short-title: beforeunload
slug: Web/API/Window/beforeunload_event
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef}}

Das **`beforeunload`**-Ereignis wird ausgelöst, wenn das aktuelle Fenster, das enthaltene Dokument und die zugehörigen Ressourcen entladen werden sollen. Das Dokument ist zu diesem Zeitpunkt noch sichtbar und das Ereignis kann noch abgebrochen werden.

Der Hauptanwendungsfall dieses Ereignisses ist das Auslösen eines browsergenerierten Bestätigungsdialogs, der Benutzer fragt, ob sie _wirklich_ die Seite verlassen möchten, wenn sie versuchen, sie zu schließen, neu zu laden oder woanders hin zu navigieren. Dies soll helfen, den Verlust ungespeicherter Daten zu verhindern.

Der Dialog kann auf folgende Weise ausgelöst werden:

- Aufrufen der Methode [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) des Ereignisobjekts.
- Setzen der Eigenschaft [`returnValue`](/de/docs/Web/API/BeforeUnloadEvent/returnValue) des Ereignisobjekts auf einen nicht-leeren Zeichenfolgenwert oder einen anderen {{Glossary("Truthy", "wahrheitsgetreuen")}} Wert.
- Zurückgeben eines wahrheitsgetreuen Werts aus der Ereignishandlerfunktion, z.B. `return "string"`. Beachten Sie, dass dies nur funktioniert, wenn die Funktion über die `onbeforeunload`-Eigenschaft und nicht über die Methode [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) angehängt wird. Dieses Verhalten ist in modernen Versionen von Firefox, Safari und Chrome konsistent.

Die letzten beiden Mechanismen sind veraltete Funktionen; die beste Praxis ist, den Dialog durch Aufruf von `preventDefault()` auf dem Ereignisobjekt auszulösen, während `returnValue` gesetzt wird, um veraltete Fälle zu unterstützen.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("beforeunload", (event) => { })

onbeforeunload = (event) => { }
```

## Ereignistyp

Ein [`BeforeUnloadEvent`](/de/docs/Web/API/BeforeUnloadEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

## Nutzungshinweise

Um den Dialog anzuzeigen, wenn der Benutzer den Tab schließt oder navigiert, sollte eine `beforeunload`-Ereignishandlerfunktion [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf dem Ereignisobjekt aufrufen. Sie sollten beachten, dass moderne Implementierungen:

- Eine {{Glossary("Sticky_activation", "sticky activation")}} erfordern, damit der Dialog angezeigt wird. Das bedeutet, der Browser zeigt das Dialogfeld nur an, wenn das Fenster oder ein eingebettetes Fenster eine Benutzergeste oder Benutzerinteraktion erhält. Wenn der Benutzer nie mit der Seite interagiert hat, gibt es keine Benutzerdaten zu speichern, also keinen legitimen Anwendungsfall für den Dialog.
- Nur eine vom Browser vorgegebene Zeichenfolge im angezeigten Dialog zeigen. Dies kann nicht durch den Code der Webseite gesteuert werden.

Das `beforeunload`-Ereignis weist einige Probleme auf:

- Es wird nicht zuverlässig ausgelöst, insbesondere auf mobilen Plattformen. Beispielsweise wird das `beforeunload`-Ereignis in folgendem Szenario überhaupt nicht ausgelöst:
  1. Ein mobiler Benutzer besucht Ihre Seite.
  2. Der Benutzer wechselt dann zu einer anderen App.
  3. Später schließt der Benutzer den Browser aus dem App-Manager.

  > [!NOTE]
  > Es wird empfohlen, das [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event)-Ereignis als ein zuverlässigeres Signal für das automatische Speichern des Anwendungszustands zu verwenden, das Probleme wie das oben genannte umgeht. Weitere Details finden Sie unter [Don't lose user and app state, use Page Visibility](https://www.igvita.com/2015/11/20/dont-lose-user-and-app-state-use-page-visibility/).

- In Firefox ist `beforeunload` nicht mit dem [back/forward cache](https://web.dev/articles/bfcache) (bfcache) kompatibel: Das heißt, Firefox speichert Seiten nicht im bfcache, wenn sie `beforeunload`-Listener haben, was schlecht für die Leistung ist.

Es wird daher empfohlen, dass Entwickler nur dann auf `beforeunload` hören, wenn Benutzer ungespeicherte Änderungen haben, damit der oben genannte Dialog verwendet werden kann, um sie vor drohendem Datenverlust zu warnen. Der Listener sollte wieder entfernt werden, wenn er nicht benötigt wird. Ein sparsames Abhören von `beforeunload` kann die Auswirkungen auf die Leistung minimieren.

## Ereignis-Handler-Aliase

Zusätzlich zur `Window`-Schnittstelle ist die Ereignis-Handler-Eigenschaft `onbeforeunload` auch bei den folgenden Zielen verfügbar:

- [`HTMLBodyElement`](/de/docs/Web/API/HTMLBodyElement)
- [`HTMLFrameSetElement`](/de/docs/Web/API/HTMLFrameSetElement)
- [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement)

## Beispiele

Im folgenden Beispiel haben wir ein HTML-Text-{{htmlelement("input")}}-Element, um einige Daten darzustellen, die geändert werden könnten und das Speichern erfordern:

```html
<form>
  <input type="text" name="name" id="name" />
</form>
```

Unser JavaScript bindet einen [`input`](/de/docs/Web/API/Element/input_event)-Ereignislistener an das `<input>`-Element, der auf Änderungen des eingegebenen Wertes lauscht. Wenn der Wert auf einen nicht-leeren Wert aktualisiert wird, wird ein `beforeunload`-Ereignislistener am [`Window`](/de/docs/Web/API/Window)-Objekt angehängt.

Wenn der Wert wieder ein leerer String wird (d.h. der Wert wird gelöscht), wird der `beforeunload`-Ereignislistener wieder entfernt – wie oben in den [Nutzungshinweisen](#nutzungshinweise) erwähnt, sollte der Listener entfernt werden, wenn keine ungespeicherten Daten vorhanden sind, vor denen gewarnt werden muss.

Die `beforeunload`-Ereignishandlerfunktion ruft `event.preventDefault()` auf, um den Warnhinweis-Dialog auszulösen, wenn der Benutzer den Tab schließt oder navigiert. Wir haben auch `event.returnValue = true` in die Handlerfunktion aufgenommen, sodass alle Browser, die den `event.preventDefault()`-Mechanismus nicht unterstützen, die Demo dennoch korrekt ausführen.

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

Wenn der `<input>`-Wert nicht leer ist und Sie versuchen, die Seite zu schließen, zu navigieren oder neu zu laden, zeigt der Browser den Warnhinweis-Dialog an. Probieren Sie es aus:

{{EmbedLiveSample("Examples", "100%", 50)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`BeforeUnloadEvent`](/de/docs/Web/API/BeforeUnloadEvent)-Schnittstelle
- Verwandte Ereignisse:
  - [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event)
  - [`readystatechange`](/de/docs/Web/API/Document/readystatechange_event)
  - [`load`](/de/docs/Web/API/Window/load_event)
  - [`unload`](/de/docs/Web/API/Window/unload_event)
- [Page Lifecycle API](https://developer.chrome.com/docs/web-platform/page-lifecycle-api#developer-recommendations-for-each-state) bietet nützlichere Hinweise zum Umgang mit dem Seitenlebenszyklusverhalten in Ihren Webanwendungen.
