---
title: "Fenster: vor dem Entladen Ereignis"
short-title: vor dem Entladen
slug: Web/API/Window/beforeunload_event
l10n:
  sourceCommit: b065c09b79d18abf0f04778c9307e1c312b8c6f9
---

{{APIRef}}

Das **`beforeunload`** Ereignis wird ausgelöst, wenn das aktuelle Fenster, das enthaltene Dokument und die zugehörigen Ressourcen entladen werden sollen. Das Dokument ist zu diesem Zeitpunkt noch sichtbar und das Ereignis kann abgebrochen werden.

Der Hauptanwendungsfall für dieses Ereignis ist das Auslösen eines vom Browser generierten Bestätigungsdialogs, der Benutzer fragt, ob sie _wirklich_ die Seite verlassen möchten, wenn sie versuchen, sie zu schließen oder neu zu laden oder woanders hin zu navigieren. Dies soll helfen, den Verlust ungespeicherter Daten zu verhindern.

Der Dialog kann auf folgende Weise ausgelöst werden:

- Durch Aufrufen der Methode {{domxref("Event.preventDefault()", "preventDefault()")}} des Ereignisobjekts.
- Durch Setzen der Eigenschaft {{domxref("BeforeUnloadEvent.returnValue", "returnValue")}} des Ereignisobjekts auf einen nicht-leeren Zeichenkettenwert oder einen anderen [truthy](/de/docs/Glossary/Truthy) Wert.
- Durch Rückgabe eines truthy Wertes aus der Ereignis-Handlerfunktion, z.B. `return "string"`. Beachten Sie, dass dies nur funktioniert, wenn die Funktion über die `onbeforeunload` Eigenschaft angehängt ist, nicht über die Methode {{domxref("EventTarget.addEventListener", "addEventListener()")}}. Dieses Verhalten ist in modernen Versionen von Firefox, Safari und Chrome einheitlich.

Die letzten beiden Mechanismen sind veraltete Funktionen; die beste Praxis besteht darin, den Dialog durch Aufruf von `preventDefault()` am Ereignisobjekt auszulösen, während `returnValue` für ältere Fälle festgelegt wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("beforeunload", (event) => {});
onbeforeunload = (event) => {};
```

## Ereignistyp

Ein {{domxref("BeforeUnloadEvent")}}. Erbt von {{domxref("Event")}}.

## Nutzungshinweise

Um den angezeigten Dialog zu aktivieren, wenn der Benutzer den Tab schließt oder navigiert, sollte eine `beforeunload` Ereignis-Handlerfunktion {{domxref("Event.preventDefault()", "preventDefault()")}} am Ereignisobjekt aufrufen. Sie sollten beachten, dass moderne Implementierungen:

- [Sticky Activation](/de/docs/Glossary/Sticky_activation) benötigen, damit der Dialog angezeigt wird. Mit anderen Worten, der Browser zeigt das Dialogfeld nur an, wenn der Rahmen oder ein eingebetteter Rahmen eine Benutzeraktion oder Benutzerinteraktion erhält. Wenn der Benutzer nie mit der Seite interagiert hat, gibt es keine Benutzerdaten zu speichern, sodass kein legitimer Anwendungsfall für den Dialog besteht.
- Zeigen nur einen generischen, vom Browser angegebenen Text im angezeigten Dialog an. Dies kann nicht vom Webseiten-Code kontrolliert werden.

Das `beforeunload` Ereignis weist einige Probleme auf:

- Es wird nicht zuverlässig ausgelöst, insbesondere auf mobilen Plattformen. Zum Beispiel wird das `beforeunload` Ereignis in folgendem Szenario überhaupt nicht ausgelöst:

  1. Ein mobiler Benutzer besucht Ihre Seite.
  2. Der Benutzer wechselt dann zu einer anderen App.
  3. Später schließt der Benutzer den Browser aus dem App-Manager.

  > [!NOTE]
  > Es wird empfohlen, das {{domxref("Document.visibilitychange_event", "visibilitychange")}} Ereignis als zuverlässigeres Signal für das automatische Speichern des Anwendungszustands zu verwenden, das Probleme wie das oben genannte umgeht. Weitere Details finden Sie unter [Don't lose user and app state, use Page Visibility](https://www.igvita.com/2015/11/20/dont-lose-user-and-app-state-use-page-visibility/).

- In Firefox ist `beforeunload` nicht mit dem [Back/Forward Cache](https://web.dev/articles/bfcache) (bfcache) kompatibel: Das bedeutet, Firefox wird Seiten nicht im bfcache platzieren, wenn sie `beforeunload` Listener haben, was schlecht für die Leistung ist.

Es wird daher empfohlen, dass Entwickler `beforeunload` nur überwachen, wenn Benutzer ungespeicherte Änderungen haben, sodass der oben erwähnte Dialog verwendet werden kann, um sie vor dem drohenden Datenverlust zu warnen, und den Listener wieder entfernen, wenn er nicht benötigt wird. Das sparsame Überwachen von `beforeunload` kann die Auswirkungen auf die Leistung minimieren.

## Ereignis-Handler-Aliasse

Zusätzlich zur `Window` Schnittstelle ist die Ereignis-Handler-Eigenschaft `onbeforeunload` auch auf den folgenden Zielen verfügbar:

- {{domxref("HTMLBodyElement")}}
- {{domxref("HTMLFrameSetElement")}}
- {{domxref("SVGSVGElement")}}

## Beispiele

Im folgenden Beispiel haben wir ein HTML Text {{htmlelement("input")}}, um einige Daten darzustellen, die geändert werden und gespeichert werden müssen:

```html
<form>
  <input type="text" name="name" id="name" />
</form>
```

Unser JavaScript fügt dem `<input>` Element einen {{domxref("Element/input_event", "input")}} Ereignis-Listener hinzu, der auf Änderungen im eingegebenen Wert hört. Wenn der Wert auf einen nicht-leeren Wert aktualisiert wird, wird ein `beforeunload` Ereignis-Listener am {{domxref("Window")}} Objekt hinzugefügt.

Wenn der Wert wieder eine leere Zeichenkette wird (d.h. der Wert wird gelöscht), wird der `beforeunload` Ereignis-Listener wieder entfernt — wie oben in den [Nutzungshinweisen](#nutzungshinweise) erwähnt sollte der Listener entfernt werden, wenn keine ungespeicherten Daten vorhanden sind, um davor zu warnen.

Die `beforeunload` Ereignis-Handlerfunktion ruft `event.preventDefault()` auf, um den Warndialog auszulösen, wenn der Benutzer den Tab schließt oder navigiert. Wir haben auch `event.returnValue = true` in der Handler-Funktion enthalten, sodass alle Browser, die das `event.preventDefault()`-Mechanismus nicht unterstützen, die Demo trotzdem korrekt ausführen.

```js
const beforeUnloadHandler = (event) => {
  // Empfohlen
  event.preventDefault();

  // Enthalten für Legacy-Unterstützung, z.B. Chrome/Edge < 119
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

Wenn der `<input>` Wert nicht leer ist, zeigt der Browser den Warndialog an, wenn Sie versuchen, die Seite zu schließen, zu navigieren oder neu zu laden. Probieren Sie es aus:

{{EmbedLiveSample("Examples", "100%", 50)}}

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{domxref("BeforeUnloadEvent")}} Schnittstelle
- Verwandte Ereignisse:
  - {{domxref("Document/DOMContentLoaded_event", "DOMContentLoaded")}}
  - {{domxref("Document/readystatechange_event", "readystatechange")}}
  - {{domxref("Window/load_event", "load")}}
  - {{domxref("Window/unload_event", "unload")}}
- [Page Lifecycle API](https://developer.chrome.com/docs/web-platform/page-lifecycle-api#developer-recommendations-for-each-state) bietet nützlichere Anleitungen zum Umgang mit dem Seitenlebenszyklus-Verhalten in Ihren Web-Apps.
