---
title: "Window: beforeunload Ereignis"
short-title: beforeunload
slug: Web/API/Window/beforeunload_event
l10n:
  sourceCommit: 285941521a9a7c2c1b3c443d5f785e5f663a8fc9
---

{{APIRef("HTML DOM")}}

Das **`beforeunload`** Ereignis wird ausgelöst, wenn das aktuelle Fenster, das enthaltene Dokument und die damit verbundenen Ressourcen entladen werden sollen. Das Dokument ist zu diesem Zeitpunkt noch sichtbar und das Ereignis kann noch abgebrochen werden.

Der Hauptanwendungsfall für dieses Ereignis besteht darin, einen vom Browser generierten Bestätigungsdialog auszulösen, der Benutzer fragt, ob sie _wirklich_ die Seite verlassen möchten, wenn sie versuchen, sie zu schließen, neu zu laden oder anderswohin zu navigieren. Dies soll helfen, den Verlust von ungespeicherten Daten zu verhindern.

Der Dialog kann auf folgende Weise ausgelöst werden:

- Durch Aufrufen der Methode [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) des Ereignisobjekts.
- Durch Setzen der Eigenschaft [`returnValue`](/de/docs/Web/API/BeforeUnloadEvent/returnValue) des Ereignisobjekts auf einen nicht-leeren String-Wert oder einen anderen {{Glossary("Truthy", "truthy")}} Wert.
- Durch Zurückgeben eines truthy Werts aus der Ereignis-Handler-Funktion, z. B. `return "string"`. Beachten Sie, dass dies nur funktioniert, wenn die Funktion über die Eigenschaft `onbeforeunload` angehängt wird, nicht über die Methode [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener). Dieses Verhalten ist konsistent über moderne Versionen von Firefox, Safari und Chrome.

Die letzten beiden Mechanismen sind veraltete Funktionen; beste Praxis ist es, den Dialog auszulösen, indem `preventDefault()` auf das Ereignisobjekt aufgerufen wird, während `returnValue` gesetzt wird, um ältere Fälle zu unterstützen.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("beforeunload", (event) => { })

onbeforeunload = (event) => { }
```

## Ereignistyp

Ein [`BeforeUnloadEvent`](/de/docs/Web/API/BeforeUnloadEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

## Verwendungshinweise

Um den Dialog anzuzeigen, wenn der Benutzer den Tab schließt oder navigiert, sollte eine `beforeunload` Ereignis-Handler-Funktion [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf dem Ereignisobjekt aufrufen. Sie sollten beachten, dass moderne Implementierungen:

- {{Glossary("Sticky_activation", "sticky activation")}} für das Anzeigen des Dialogs erfordern. Das bedeutet, dass der Browser das Dialogfeld nur dann anzeigt, wenn der Frame oder ein eingebetteter Frame eine Benutzeraktion oder Benutzerinteraktion erhält. Wenn der Benutzer niemals mit der Seite interagiert hat, gibt es keine Benutzerdaten zu speichern, daher keinen legitimen Anwendungsfall für den Dialog.
- Nur einen generischen, vom Browser spezifizierten String im angezeigten Dialog anzeigen. Dies kann nicht durch Webseiten-Code gesteuert werden.

Das `beforeunload` Ereignis hat einige Probleme:

- Es wird nicht zuverlässig ausgelöst, insbesondere auf mobilen Plattformen. Zum Beispiel wird das `beforeunload` Ereignis in folgendem Szenario überhaupt nicht ausgelöst:
  1. Ein mobiler Benutzer besucht Ihre Seite.
  2. Der Benutzer wechselt dann zu einer anderen App.
  3. Später schließt der Benutzer den Browser über den App-Manager.

  > [!NOTE]
  > Es wird empfohlen, das [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event) Ereignis als ein zuverlässigeres Signal für das automatische Speichern des App-Zustands zu verwenden, das Probleme wie die oben genannten umgeht. Weitere Details finden Sie unter [Don't lose user and app state, use Page Visibility](https://www.igvita.com/2015/11/20/dont-lose-user-and-app-state-use-page-visibility/).

- In Firefox ist `beforeunload` nicht kompatibel mit dem [back/forward cache](https://web.dev/articles/bfcache) (bfcache): Das heißt, Firefox wird Seiten nicht im bfcache speichern, wenn sie `beforeunload` Listener haben, und dies ist schlecht für die Leistung.

Es wird daher empfohlen, dass Entwickler `beforeunload` nur dann überwachen, wenn Benutzer ungespeicherte Änderungen haben, sodass der oben erwähnte Dialog verwendet werden kann, um sie über drohenden Datenverlust zu warnen, und den Listener wieder entfernen, wenn er nicht benötigt wird. Das sparsame Überwachen von `beforeunload` kann den Einfluss auf die Leistung minimieren.

## Ereignishandler-Aliasse

Zusätzlich zum `Window` Interface ist die Ereignishandler-Eigenschaft `onbeforeunload` auch auf den folgenden Zielen verfügbar:

- [`HTMLBodyElement`](/de/docs/Web/API/HTMLBodyElement)
- [`HTMLFrameSetElement`](/de/docs/Web/API/HTMLFrameSetElement)
- [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement)

## Beispiele

Im folgenden Beispiel haben wir ein HTML-Text-{{htmlelement("input")}}, um einige Daten darzustellen, die geändert werden könnten und das Speichern erfordern:

```html
<form>
  <input type="text" name="name" id="name" />
</form>
```

Unser JavaScript fügt einen [`input`](/de/docs/Web/API/Element/input_event) Ereignis-Listener zum `<input>` Element hinzu, der auf Änderungen im eingegebenen Wert hört. Wenn der Wert auf einen nicht-leeren Wert aktualisiert wird, wird ein `beforeunload` Ereignis-Listener zum [`Window`](/de/docs/Web/API/Window) Objekt hinzugefügt.

Wenn der Wert wieder zu einem leeren String wird (d.h. der Wert gelöscht wird), wird der `beforeunload` Ereignis-Listener wieder entfernt – wie in den [Verwendungshinweisen](#verwendungshinweise) erwähnt, sollte der Listener entfernt werden, wenn keine ungespeicherten Daten vorhanden sind, vor denen gewarnt werden könnte.

Die `beforeunload` Ereignis-Handler-Funktion ruft `event.preventDefault()` auf, um den Warnungsdialog auszulösen, wenn der Benutzer den Tab schließt oder navigiert. Wir haben auch `event.returnValue = true` in die Handler-Funktion aufgenommen, damit alle Browser, die den `event.preventDefault()` Mechanismus nicht unterstützen, die Demo dennoch korrekt ausführen.

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

Wenn der `<input>` Wert nicht leer ist, zeigt der Browser beim Versuch, die Seite zu schließen, zu navigieren oder zu aktualisieren, den Warnungsdialog an. Probieren Sie es aus:

{{EmbedLiveSample("Examples", "100%", 50)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`BeforeUnloadEvent`](/de/docs/Web/API/BeforeUnloadEvent) Interface
- Verwandte Ereignisse:
  - [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event)
  - [`readystatechange`](/de/docs/Web/API/Document/readystatechange_event)
  - [`load`](/de/docs/Web/API/Window/load_event)
  - [`unload`](/de/docs/Web/API/Window/unload_event)
- [Page Lifecycle API](https://developer.chrome.com/docs/web-platform/page-lifecycle-api#developer-recommendations-for-each-state) bietet nützlichere Leitlinien zum Umgang mit dem Seitenlebenszyklusverhalten in Ihren Web-Apps.
