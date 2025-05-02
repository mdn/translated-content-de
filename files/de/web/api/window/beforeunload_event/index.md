---
title: "Fenster: beforeunload-Ereignis"
short-title: beforeunload
slug: Web/API/Window/beforeunload_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}

Das **`beforeunload`**-Ereignis wird ausgelöst, wenn das aktuelle Fenster, das darin enthaltene Dokument und die zugehörigen Ressourcen entladen werden sollen. Das Dokument ist zu diesem Zeitpunkt noch sichtbar und das Ereignis kann noch abgebrochen werden.

Der Hauptanwendungsfall für dieses Ereignis besteht darin, eine vom Browser generierte Bestätigungsdialogbox anzuzeigen, die Benutzer fragt, ob sie _wirklich_ die Seite verlassen möchten, wenn sie versuchen, sie zu schließen oder neu zu laden oder zu einer anderen Seite zu navigieren. Dies soll helfen, den Verlust von nicht gespeicherten Daten zu verhindern.

Der Dialog kann auf folgende Weise ausgelöst werden:

- Aufruf der Methode [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) des Ereignisobjekts.
- Setzen der Eigenschaft [`returnValue`](/de/docs/Web/API/BeforeUnloadEvent/returnValue) des Ereignisobjekts auf einen nicht leeren Zeichenfolgenwert oder einen anderen {{Glossary("Truthy", "truthy")}} Wert.
- Zurückgeben eines truthy-Wertes aus der Ereignishandlerfunktion, z. B. `return "string"`. Beachten Sie, dass dies nur funktioniert, wenn die Funktion über die `onbeforeunload`-Eigenschaft und nicht über die [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Methode angehängt ist. Dieses Verhalten ist in modernen Versionen von Firefox, Safari und Chrome konsistent.

Die letzten beiden Mechanismen sind veraltete Funktionen; Beste Praxis ist es, den Dialog durch Aufrufen von `preventDefault()` auf dem Ereignisobjekt auszulösen, während gleichzeitig `returnValue` gesetzt wird, um alten Fällen zu unterstützen.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("beforeunload", (event) => { })

onbeforeunload = (event) => { }
```

## Ereignistyp

Ein [`BeforeUnloadEvent`](/de/docs/Web/API/BeforeUnloadEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

## Nutzungshinweise

Um den Dialog anzuzeigen, wenn der Benutzer die Registerkarte schließt oder navigiert, sollte eine `beforeunload`-Ereignishandlerfunktion [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf dem Ereignisobjekt aufrufen. Beachten Sie, dass moderne Implementierungen:

- {{Glossary("Sticky_activation", "Sticky activation")}} für die Anzeige des Dialogs erfordern. Mit anderen Worten, der Browser zeigt das Dialogfeld nur dann an, wenn das Frame oder ein eingebettetes Frame eine Benutzeraktion oder Benutzerinteraktion empfängt. Wenn der Benutzer nie mit der Seite interagiert hat, gibt es keine Benutzerdaten zu speichern, also keinen legitimen Anwendungsfall für den Dialog.
- Nur einen generischen, vom Browser festgelegten String in dem angezeigten Dialog zeigen. Dies kann nicht von der Webseite gesteuert werden.

Das `beforeunload`-Ereignis hat einige Probleme:

- Es wird nicht zuverlässig ausgelöst, besonders auf mobilen Plattformen. Zum Beispiel wird das `beforeunload`-Ereignis in folgendem Szenario überhaupt nicht ausgelöst:

  1. Ein mobiler Benutzer besucht Ihre Seite.
  2. Der Benutzer wechselt dann zu einer anderen App.
  3. Später schließt der Benutzer den Browser aus dem App-Manager.

  > [!NOTE]
  > Es wird empfohlen, das [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event)-Ereignis als ein zuverlässigeres Signal für die automatische Speicherung des Anwendungszustands zu verwenden, um Probleme wie das oben genannte zu umgehen. Siehe [Verlieren Sie nicht den Benutzer- und Anwendungszustand, verwenden Sie die Seiten-Sichtbarkeit](https://www.igvita.com/2015/11/20/dont-lose-user-and-app-state-use-page-visibility/) für mehr Details.

- In Firefox ist `beforeunload` nicht mit dem [back/forward cache](https://web.dev/articles/bfcache) (bfcache) kompatibel: Das heißt, Firefox wird Seiten nicht in den bfcache aufnehmen, wenn sie `beforeunload`-Listener haben, und das ist schlecht für die Leistung.

Es wird daher empfohlen, dass Entwickler `beforeunload` nur dann lauschen, wenn Benutzer nicht gespeicherte Änderungen haben, sodass der oben erwähnte Dialog verwendet werden kann, um sie vor einem drohenden Datenverlust zu warnen, und den Listener wieder entfernen, wenn er nicht benötigt wird. Gelegentliches Lauschen auf `beforeunload` kann die Auswirkungen auf die Leistung minimieren.

## Ereignishandler-Aliasse

Zusätzlich zur `Window`-Schnittstelle ist die Ereignishandler-Eigenschaft `onbeforeunload` auch auf den folgenden Zielen verfügbar:

- [`HTMLBodyElement`](/de/docs/Web/API/HTMLBodyElement)
- [`HTMLFrameSetElement`](/de/docs/Web/API/HTMLFrameSetElement)
- [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement)

## Beispiele

Im folgenden Beispiel haben wir ein HTML-Text-{{htmlelement("input")}}, das einige Daten darstellt, die geändert werden könnten und gespeichert werden müssen:

```html
<form>
  <input type="text" name="name" id="name" />
</form>
```

Unser JavaScript bindet einen [`input`](/de/docs/Web/API/Element/input_event)-Ereignislistener an das `<input>`-Element, das auf Änderungen im eingegebenen Wert hört. Wenn der Wert auf einen nicht leeren Wert aktualisiert wird, wird ein `beforeunload`-Ereignislistener an das [`Window`](/de/docs/Web/API/Window)-Objekt angehängt.

Wenn der Wert wieder ein leerer String wird (d.h. der Wert gelöscht wird), wird der `beforeunload`-Ereignislistener wieder entfernt – wie oben unter [Nutzungshinweise](#nutzungshinweise) erwähnt, sollte der Listener entfernt werden, wenn keine nicht gespeicherten Daten vorhanden sind, vor denen gewarnt werden muss.

Die `beforeunload`-Ereignishandlerfunktion ruft `event.preventDefault()` auf, um den Warnhinweis-Dialog auszulösen, wenn der Benutzer die Registerkarte schließt oder navigiert. Wir haben auch `event.returnValue = true` in die Handlerfunktion aufgenommen, damit alle Browser, die den `event.preventDefault()`-Mechanismus nicht unterstützen, das Demo trotzdem korrekt ausführen.

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

Wenn der `<input>`-Wert nicht leer ist, zeigt der Browser den Warnhinweis-Dialog an, wenn Sie versuchen, die Seite zu schließen, zu navigieren oder neu zu laden. Probieren Sie es aus:

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
