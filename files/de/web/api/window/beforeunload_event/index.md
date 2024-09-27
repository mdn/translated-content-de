---
title: "Window: beforeunload-Ereignis"
short-title: beforeunload
slug: Web/API/Window/beforeunload_event
l10n:
  sourceCommit: b065c09b79d18abf0f04778c9307e1c312b8c6f9
---

{{APIRef}}

Das **`beforeunload`**-Ereignis wird ausgelöst, wenn das aktuelle Fenster, das enthaltene Dokument und die dazugehörigen Ressourcen entladen werden sollen. Das Dokument ist zu diesem Zeitpunkt noch sichtbar und das Ereignis kann noch abgebrochen werden.

Der Hauptverwendungszweck dieses Ereignisses besteht darin, einen vom Browser generierten Bestätigungsdialog auszulösen, der Benutzer fragt, ob sie _wirklich_ die Seite verlassen möchten, wenn sie versuchen, diese zu schließen oder neu zu laden oder woandershin zu navigieren. Dies soll helfen, den Verlust von nicht gespeicherten Daten zu verhindern.

Der Dialog kann auf folgende Weise ausgelöst werden:

- Aufrufen der Methode [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) des Ereignisobjekts.
- Setzen der Eigenschaft [`returnValue`](/de/docs/Web/API/BeforeUnloadEvent/returnValue) des Ereignisobjekts auf einen nicht leeren Stringwert oder einen anderen [truthy](/de/docs/Glossary/Truthy)-Wert.
- Zurückgeben eines beliebigen truthy Werts von der Ereignis-Handler-Funktion, z.B. `return "string"`. Beachten Sie, dass dies nur funktioniert, wenn die Funktion über die `onbeforeunload`-Eigenschaft, nicht über die Methode [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) angehängt wird. Dieses Verhalten ist in modernen Versionen von Firefox, Safari und Chrome konsistent.

Die letzten beiden Mechanismen sind veraltete Funktionen; es ist am besten, den Dialog durch Aufrufen von `preventDefault()` am Ereignisobjekt auszulösen und gleichzeitig `returnValue` zu setzen, um veraltete Fälle zu unterstützen.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("beforeunload", (event) => {});
onbeforeunload = (event) => {};
```

## Ereignistyp

Ein [`BeforeUnloadEvent`](/de/docs/Web/API/BeforeUnloadEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

## Verwendungshinweise

Um den Dialog anzuzeigen, wenn der Benutzer den Tab schließt oder navigiert, sollte eine `beforeunload`-Ereignis-Handler-Funktion [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) am Ereignisobjekt aufrufen. Sie sollten beachten, dass moderne Implementierungen:

- [Sticky Activation](/de/docs/Glossary/Sticky_activation) erfordern, damit der Dialog angezeigt wird. Mit anderen Worten, der Browser zeigt das Dialogfeld nur an, wenn der Rahmen oder ein eingebetteter Rahmen eine Benutzeraktion oder Benutzerinteraktion erhält. Wenn der Benutzer nie mit der Seite interagiert hat, gibt es keine Benutzerdaten zu speichern, daher keinen legitimen Anwendungsfall für den Dialog.
- Nur einen vom Browser festgelegten generischen String im angezeigten Dialog anzeigen. Dies kann nicht durch den Code der Webseite kontrolliert werden.

Das `beforeunload`-Ereignis hat einige Probleme:

- Es wird nicht zuverlässig ausgelöst, insbesondere auf mobilen Plattformen. Zum Beispiel wird das `beforeunload`-Ereignis in folgendem Szenario überhaupt nicht ausgelöst:

  1. Ein mobiler Benutzer besucht Ihre Seite.
  2. Der Benutzer wechselt dann zu einer anderen App.
  3. Später schließt der Benutzer den Browser im App-Manager.

  > [!NOTE]
  > Es wird empfohlen, das [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event)-Ereignis als ein zuverlässigeres Signal für das automatische Speichern des Anwendungsstatus zu verwenden, das Probleme wie das oben genannte umgeht. Siehe [Don't lose user and app state, use Page Visibility](https://www.igvita.com/2015/11/20/dont-lose-user-and-app-state-use-page-visibility/) für weitere Details.

- In Firefox ist `beforeunload` nicht mit dem [Back/Forward Cache](https://web.dev/articles/bfcache) (bfcache) kompatibel: Das heißt, Firefox platziert keine Seiten im bfcache, wenn sie `beforeunload`-Listener haben, was schlecht für die Leistung ist.

Es wird daher empfohlen, dass Entwickler nur dann auf `beforeunload` lauschen, wenn Benutzer ungespeicherte Änderungen haben, damit der oben erwähnte Dialog verwendet werden kann, um sie vor drohendem Datenverlust zu warnen, und den Listener wieder zu entfernen, wenn er nicht benötigt wird. Das sparsame Lauschen auf `beforeunload` kann die Auswirkungen auf die Leistung minimieren.

## Ereignis-Handler-Aliasse

Zusätzlich zur `Window`-Schnittstelle ist die Ereignis-Handler-Eigenschaft `onbeforeunload` auch auf den folgenden Zielen verfügbar:

- [`HTMLBodyElement`](/de/docs/Web/API/HTMLBodyElement)
- [`HTMLFrameSetElement`](/de/docs/Web/API/HTMLFrameSetElement)
- [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement)

## Beispiele

Im folgenden Beispiel haben wir ein HTML-Textfeld {{htmlelement("input")}}, das einige Daten repräsentiert, die geändert und gespeichert werden könnten:

```html
<form>
  <input type="text" name="name" id="name" />
</form>
```

Unser JavaScript fügt dem `<input>`-Element einen [`input`](/de/docs/Web/API/Element/input_event)-Ereignis-Listener hinzu, der auf Änderungen des eingegebenen Werts lauscht. Wenn der Wert auf einen nicht leeren Wert aktualisiert wird, wird ein `beforeunload`-Ereignis-Listener am [`Window`](/de/docs/Web/API/Window)-Objekt angebracht.

Wird der Wert wieder zu einem leeren String (d.h. der Wert wird gelöscht), wird der `beforeunload`-Ereignis-Listener wieder entfernt — wie oben in den [Verwendungshinweisen](#verwendungshinweise) erwähnt, sollte der Listener entfernt werden, wenn es keine ungespeicherten Daten gibt, vor denen gewarnt werden muss.

Die `beforeunload`-Ereignis-Handler-Funktion ruft `event.preventDefault()` auf, um das Warnungsdialogfeld auszulösen, wenn der Benutzer den Tab schließt oder navigiert. Wir haben auch `event.returnValue = true` in die Handler-Funktion aufgenommen, damit alle Browser, die das `event.preventDefault()`-System nicht unterstützen, die Demo trotzdem korrekt ausführen.

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

Wenn der `<input>`-Wert nicht leer ist, zeigt der Browser das Warnungsdialogfeld an, wenn Sie versuchen, die Seite zu schließen, zu navigieren oder neu zu laden. Probieren Sie es aus:

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
- Die [Page Lifecycle API](https://developer.chrome.com/docs/web-platform/page-lifecycle-api#developer-recommendations-for-each-state) bietet nützlichere Anleitungen zur Handhabung des Seitenlebenszyklusverhaltens in Ihren Web-Apps.
