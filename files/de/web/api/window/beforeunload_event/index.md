---
title: "Window: beforeunload-Ereignis"
short-title: beforeunload
slug: Web/API/Window/beforeunload_event
l10n:
  sourceCommit: b065c09b79d18abf0f04778c9307e1c312b8c6f9
---

{{APIRef}}

Das **`beforeunload`**-Ereignis wird ausgelöst, wenn das aktuelle Fenster, das darin enthaltene Dokument und die zugehörigen Ressourcen entladen werden sollen. Das Dokument ist zu diesem Zeitpunkt noch sichtbar und das Ereignis kann noch abgebrochen werden.

Der Hauptanwendungsfall für dieses Ereignis ist das Auslösen eines browserspezifischen Bestätigungsdialogs, der die Benutzer fragt, ob sie _wirklich_ die Seite verlassen möchten, wenn sie versuchen, sie zu schließen, neu zu laden oder woanders hinzunavigieren. Dies soll helfen, den Verlust nicht gespeicherter Daten zu verhindern.

Der Dialog kann auf folgende Weise ausgelöst werden:

- Durch Aufrufen der Methode [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) des Ereignisobjekts.
- Durch Setzen der Eigenschaft [`returnValue`](/de/docs/Web/API/BeforeUnloadEvent/returnValue) des Ereignisobjekts auf einen nicht leeren Zeichenkettenwert oder einen anderen {{Glossary("Truthy", "truthy")}}-Wert.
- Durch Rückgabe eines truthy-Werts aus der Ereignishandlerfunktion, z. B. `return "string"`. Beachten Sie, dass dies nur funktioniert, wenn die Funktion über die `onbeforeunload`-Eigenschaft angehängt ist, nicht über die Methode [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener). Dieses Verhalten ist in modernen Versionen von Firefox, Safari und Chrome konsistent.

Die letzten beiden Mechanismen sind veraltete Funktionen; die beste Methode ist es, den Dialog durch Aufruf von `preventDefault()` am Ereignisobjekt auszulösen, während auch `returnValue` gesetzt wird, um ältere Fälle zu unterstützen.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandlereigenschaft.

```js
addEventListener("beforeunload", (event) => {});
onbeforeunload = (event) => {};
```

## Ereignistyp

Ein [`BeforeUnloadEvent`](/de/docs/Web/API/BeforeUnloadEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

## Hinweise zur Verwendung

Um den Dialog anzuzeigen, wenn der Benutzer den Tab schließt oder navigiert, sollte eine `beforeunload`-Ereignishandlerfunktion [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) am Ereignisobjekt aufrufen. Beachten Sie, dass moderne Implementierungen:

- {{Glossary("Sticky_activation", "Sticky-Aktivierung")}} erfordern, damit der Dialog angezeigt wird. Mit anderen Worten: Der Browser zeigt das Dialogfeld nur an, wenn der Frame oder ein eingebetteter Frame eine Benutzeraktion oder Benutzerinteraktion erhält. Wenn der Benutzer nie mit der Seite interagiert hat, gibt es keine zu speichernden Benutzerdaten und somit keinen legitimen Anwendungsfall für den Dialog.
- Nur eine generische, vom Browser angegebene Zeichenfolge im angezeigten Dialog zeigen. Dies kann nicht durch den Webseiten-Code gesteuert werden.

Das `beforeunload`-Ereignis weist einige Probleme auf:

- Es wird nicht zuverlässig ausgelöst, insbesondere auf mobilen Plattformen. Zum Beispiel wird das `beforeunload`-Ereignis in folgendem Szenario überhaupt nicht ausgelöst:

  1. Ein mobiler Benutzer besucht Ihre Seite.
  2. Der Benutzer wechselt dann zu einer anderen App.
  3. Später schließt der Benutzer den Browser über den App-Manager.

  > [!NOTE]
  > Es wird empfohlen, das [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event)-Ereignis als zuverlässigeren Hinweis für das automatische Speichern des App-Zustands zu verwenden, um Probleme wie das oben genannte zu umgehen. Weitere Details finden Sie unter [Don't lose user and app state, use Page Visibility](https://www.igvita.com/2015/11/20/dont-lose-user-and-app-state-use-page-visibility/).

- In Firefox ist `beforeunload` nicht mit dem [back/forward cache](https://web.dev/articles/bfcache) (bfcache) kompatibel: Das heißt, Firefox speichert keine Seiten im bfcache, wenn sie `beforeunload`-Listener haben, und dies ist schlecht für die Leistung.

Es wird daher empfohlen, dass Entwickler nur dann auf `beforeunload` hören, wenn Benutzer nicht gespeicherte Änderungen haben, sodass der oben erwähnte Dialog verwendet werden kann, um auf drohenden Datenverlust hinzuweisen, und den Listener wieder entfernen, wenn er nicht benötigt wird. Das sparsame Lauschen auf `beforeunload` kann die Auswirkungen auf die Leistung minimieren.

## Ereignishandler-Aliase

Zusätzlich zur `Window`-Schnittstelle ist die Ereignishandlereigenschaft `onbeforeunload` auch auf den folgenden Zielen verfügbar:

- [`HTMLBodyElement`](/de/docs/Web/API/HTMLBodyElement)
- [`HTMLFrameSetElement`](/de/docs/Web/API/HTMLFrameSetElement)
- [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement)

## Beispiele

Im folgenden Beispiel haben wir ein HTML-Text-{{htmlelement("input")}}, um einige Daten darzustellen, die geändert und gespeichert werden könnten:

```html
<form>
  <input type="text" name="name" id="name" />
</form>
```

Unser JavaScript hängt einen [`input`](/de/docs/Web/API/Element/input_event)-Ereignislistener an das `<input>`-Element an, der auf Änderungen des eingegebenen Wertes hört. Wenn der Wert auf einen nicht leeren Wert aktualisiert wird, wird ein `beforeunload`-Ereignislistener an das [`Window`](/de/docs/Web/API/Window)-Objekt angehängt.

Wenn der Wert wieder eine leere Zeichenkette wird (d.h. der Wert gelöscht wird), wird der `beforeunload`-Ereignislistener wieder entfernt — wie oben in den [Hinweisen zur Verwendung](#hinweise_zur_verwendung) erwähnt, sollte der Listener entfernt werden, wenn es keine nicht gespeicherten Daten gibt, um darauf hinzuweisen.

Die `beforeunload`-Ereignishandlerfunktion ruft `event.preventDefault()` auf, um den Warnungsdialog auszulösen, wenn der Benutzer den Tab schließt oder navigiert. Wir haben auch `event.returnValue = true` in der Handlerfunktion aufgenommen, damit der Demo auch auf Browsern, die den `event.preventDefault()`-Mechanismus nicht unterstützen, korrekt ausgeführt wird.

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

Wenn der `<input>`-Wert nicht leer ist und Sie versuchen, die Seite zu schließen, zu navigieren oder neu zu laden, zeigt der Browser den Warnungsdialog an. Probieren Sie es aus:

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
- Die [Page Lifecycle API](https://developer.chrome.com/docs/web-platform/page-lifecycle-api#developer-recommendations-for-each-state) bietet eine nützlichere Anleitung zur Handhabung des Seitenlebenszyklus in Ihren Webanwendungen.
