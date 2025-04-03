---
title: "Window: beforeunload Event"
short-title: beforeunload
slug: Web/API/Window/beforeunload_event
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef}}

Das **`beforeunload`**-Ereignis wird ausgelöst, wenn das aktuelle Fenster, das enthaltene Dokument und die zugehörigen Ressourcen kurz vor dem Entladen stehen. Das Dokument ist zu diesem Zeitpunkt noch sichtbar und das Ereignis kann noch abgebrochen werden.

Der Hauptanwendungsfall für dieses Ereignis ist das Auslösen eines vom Browser generierten Bestätigungsdialogs, der die Benutzer fragt, ob sie _wirklich_ die Seite verlassen möchten, wenn sie versuchen, diese zu schließen oder neu zu laden oder woandershin zu navigieren. Dies soll helfen, den Verlust von nicht gespeicherten Daten zu verhindern.

Der Dialog kann auf folgende Weise ausgelöst werden:

- Indem die Methode [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) des Ereignisobjekts aufgerufen wird.
- Indem die Eigenschaft [`returnValue`](/de/docs/Web/API/BeforeUnloadEvent/returnValue) des Ereignisobjekts auf einen nicht-leeren Stringwert oder einen anderen {{Glossary("Truthy", "truthy")}} Wert gesetzt wird.
- Indem ein beliebiger truthy Wert von der Ereignishandlerfunktion zurückgegeben wird, z. B. `return "string"`. Beachten Sie, dass dies nur funktioniert, wenn die Funktion über die `onbeforeunload`-Eigenschaft und nicht über die [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Methode angehängt wurde. Dieses Verhalten ist konsistent in modernen Versionen von Firefox, Safari und Chrome.

Die letzten beiden Mechanismen sind veraltete Funktionen; best practice ist es, den Dialog durch Aufruf von `preventDefault()` am Ereignisobjekt auszulösen, während gleichzeitig `returnValue` gesetzt wird, um veraltete Fälle zu unterstützen.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("beforeunload", (event) => {});
onbeforeunload = (event) => {};
```

## Ereignistyp

Ein [`BeforeUnloadEvent`](/de/docs/Web/API/BeforeUnloadEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

## Verwendungshinweise

Um den Dialog anzuzeigen, wenn der Benutzer den Tab schließt oder navigiert, sollte eine `beforeunload`-Ereignishandlerfunktion [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) am Ereignisobjekt aufrufen. Sie sollten beachten, dass moderne Implementierungen:

- {{Glossary("Sticky_activation", "Sticky Activation")}} erfordern, damit der Dialog angezeigt wird. Mit anderen Worten, der Browser zeigt das Dialogfeld nur an, wenn das Frame oder ein eingebettetes Frame eine Benutzerinteraktion erhält. Wenn der Benutzer nie mit der Seite interagiert hat, gibt es keine Benutzerdaten zu speichern, also keinen legitimen Anwendungsfall für den Dialog.
- Nur einen generischen, vom Browser festgelegten String im angezeigten Dialog zeigen. Dies kann nicht durch den Code der Webseite gesteuert werden.

Das `beforeunload`-Ereignis hat einige Probleme:

- Es wird nicht immer zuverlässig ausgelöst, besonders auf mobilen Plattformen. Zum Beispiel wird das `beforeunload`-Ereignis in folgendem Szenario überhaupt nicht ausgelöst:

  1. Ein mobiler Benutzer besucht Ihre Seite.
  2. Der Benutzer wechselt dann zu einer anderen App.
  3. Später schließt der Benutzer den Browser über den App-Manager.

  > [!NOTE]
  > Es wird empfohlen, das [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event)-Ereignis als zuverlässigeren Indikator für das automatische Speichern des Anwendungszustands zu verwenden, um Probleme wie das obige zu umgehen. Weitere Details finden Sie unter [Don't lose user and app state, use Page Visibility](https://www.igvita.com/2015/11/20/dont-lose-user-and-app-state-use-page-visibility/).

- In Firefox ist `beforeunload` nicht mit dem [Back/Forward Cache](https://web.dev/articles/bfcache) (bfcache) kompatibel: das heißt, Firefox wird keine Seiten im bfcache einfügen, wenn sie `beforeunload`-Listener haben, was schlecht für die Leistung ist.

Es wird daher empfohlen, dass Entwickler nur dann auf `beforeunload` lauschen, wenn Benutzer ungespeicherte Änderungen haben, damit der oben erwähnte Dialog verwendet werden kann, um sie vor drohendem Datenverlust zu warnen, und den Listener wieder entfernen, wenn er nicht benötigt wird. Auf `beforeunload` sparsam zu lauschen, kann die Auswirkungen auf die Leistung minimieren.

## Ereignishandler-Aliase

Zusätzlich zur `Window`-Schnittstelle ist die Ereignishandler-Eigenschaft `onbeforeunload` auch auf folgenden Zielen verfügbar:

- [`HTMLBodyElement`](/de/docs/Web/API/HTMLBodyElement)
- [`HTMLFrameSetElement`](/de/docs/Web/API/HTMLFrameSetElement)
- [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement)

## Beispiele

Im folgenden Beispiel haben wir ein HTML-Text-{{htmlelement("input")}}, das einige Daten darstellen könnte, die geändert und gespeichert werden müssen:

```html
<form>
  <input type="text" name="name" id="name" />
</form>
```

Unser JavaScript fügt einen [`input`](/de/docs/Web/API/Element/input_event)-Ereignislistener zum `<input>`-Element hinzu, der auf Änderungen des eingegebenen Wertes lauscht. Wenn der Wert auf einen nicht-leeren Wert geändert wird, wird ein `beforeunload`-Ereignislistener am [`Window`](/de/docs/Web/API/Window)-Objekt angefügt.

Wenn der Wert wieder zu einem leeren String wird (d.h. der Wert gelöscht wird), wird der `beforeunload`-Ereignislistener wieder entfernt — wie oben in den [Verwendungshinweisen](#verwendungshinweise) erwähnt, sollte der Listener entfernt werden, wenn keine ungespeicherten Daten vorhanden sind, vor denen gewarnt werden muss.

Die `beforeunload`-Ereignishandlerfunktion ruft `event.preventDefault()` auf, um den Warnungsdialog auszulösen, wenn der Benutzer den Tab schließt oder navigiert. Wir haben auch `event.returnValue = true` in die Handlerfunktion aufgenommen, damit alle Browser, die den `event.preventDefault()`-Mechanismus nicht unterstützen, die Demo dennoch korrekt ausführen.

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

Wenn der `<input>`-Wert nicht leer ist, zeigt der Browser den Warnungsdialog an, wenn Sie versuchen, die Seite zu schließen, zu navigieren oder neu zu laden. Probieren Sie es aus:

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
- Die [Page Lifecycle API](https://developer.chrome.com/docs/web-platform/page-lifecycle-api#developer-recommendations-for-each-state) bietet nützlichere Anleitungen zum Umgang mit dem Seitenlebenszyklus in Ihren Webanwendungen.
