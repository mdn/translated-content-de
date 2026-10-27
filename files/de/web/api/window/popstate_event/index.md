---
title: "Window: popstate-Ereignis"
short-title: popstate
slug: Web/API/Window/popstate_event
l10n:
  sourceCommit: 023b9075df473020b3279afa031bb4a32e3b743b
---

{{APIRef("History API")}}

Das **`popstate`**-Ereignis der [`Window`](/de/docs/Web/API/Window)-Schnittstelle wird ausgelöst, wenn sich der aktive Verlaufseintrag ändert, während der Benutzer durch den Sitzungsverlauf navigiert. Dabei wird der aktuelle Verlaufseintrag auf den Eintrag der zuletzt besuchten Seite gesetzt. Wenn jedoch mit [`history.pushState()`](/de/docs/Web/API/History/pushState) ein Verlaufseintrag zum Verlaufsstapel hinzugefügt wurde, wird stattdessen dieser Eintrag verwendet.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("popstate", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onpopstate = (event) => { }
```

## Ereignistyp

Ein [`PopStateEvent`](/de/docs/Web/API/PopStateEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("PopStateEvent")}}

## Event-Handler-Aliasse

Neben der `Window`-Schnittstelle ist die Event-Handler-Eigenschaft `onpopstate` auch auf den folgenden Elementen verfügbar:

- [`HTMLBodyElement`](/de/docs/Web/API/HTMLBodyElement)
- [`HTMLFrameSetElement`](/de/docs/Web/API/HTMLFrameSetElement)
- [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement)

## Der Verlaufsstapel

Wenn der aktivierte Verlaufseintrag durch einen Aufruf von [`history.pushState()`](/de/docs/Web/API/History/pushState) erstellt oder durch einen Aufruf von [`history.replaceState()`](/de/docs/Web/API/History/replaceState) verändert wurde, enthält die `state`-Eigenschaft des `popstate`-Ereignisses eine Kopie des Zustandsobjekts des Verlaufseintrags.

Mit diesen Methoden und den zugehörigen Ereignissen lassen sich Daten zum Verlaufsstapel hinzufügen. Diese Daten können verwendet werden, um eine dynamisch erzeugte Seite wiederherzustellen oder den Zustand des angezeigten Inhalts auf andere Weise zu ändern, ohne das aktuelle [`Document`](/de/docs/Web/API/Document) zu verlassen.

Beachten Sie, dass der bloße Aufruf von `history.pushState()` oder `history.replaceState()` kein `popstate`-Ereignis auslöst. Das `popstate`-Ereignis wird durch eine Browseraktion ausgelöst, etwa durch einen Klick auf die Zurück- oder Vorwärts-Schaltfläche (oder durch einen Aufruf von `history.back()` oder `history.forward()` in JavaScript).

> [!NOTE]
> Beim Schreiben von Funktionen, die das `popstate`-Ereignis verarbeiten, ist zu beachten, dass Eigenschaften wie `window.location` die Zustandsänderung bereits widerspiegeln (sofern sie sich auf die aktuelle URL ausgewirkt hat), `document` möglicherweise aber noch nicht. Wenn die Verarbeitung erst beginnen soll, sobald der neue Dokumentzustand vollständig hergestellt ist, verwenden Sie einen Aufruf von [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) mit einer Verzögerung von null. Dadurch wird die verarbeitende _Callback_-Funktion an das Ende der Browser-Ereignisschleife gestellt: `window.onpopstate = () => setTimeout(doSomeThing, 0);`

## Wann popstate ausgelöst wird

Zunächst ist wichtig zu wissen, dass Browser das `popstate`-Ereignis möglicherweise überhaupt nicht auslösen, solange keine Interaktion mit der Seite stattgefunden hat. Damit sollen unerwünschte Pop-ups verhindert werden.

Dieser Abschnitt beschreibt die Schritte, die Browser in den Fällen ausführen, in denen sie das `popstate`-Ereignis potenziell auslösen _können_ (also wenn eine Interaktion mit der Seite stattgefunden hat).

Bei einer Navigation – sei es durch Betätigen der <kbd>Zurück</kbd>-Schaltfläche des Browsers oder auf andere Weise – tritt das `popstate`-Ereignis gegen Ende des Navigationsvorgangs zum neuen Ziel auf. Es geschieht, nachdem das neue Ziel (falls nötig) geladen, angezeigt und sichtbar gemacht wurde und nachdem das [`pageshow`](/de/docs/Web/API/Window/pageshow_event)-Ereignis gesendet wurde, aber bevor gespeicherte Informationen zum Benutzerzustand wiederhergestellt und das [`hashchange`](/de/docs/Web/API/Window/hashchange_event)-Ereignis gesendet werden.

Um besser zu verstehen, wann das `popstate`-Ereignis ausgelöst wird, betrachten Sie die folgende vereinfachte Abfolge von Ereignissen. Sie tritt auf, wenn sich der aktuelle Verlaufseintrag ändert, weil der Benutzer auf der Website navigiert oder der Verlauf programmgesteuert durchlaufen wird. Bei diesem Übergang wird ein Verlaufseintrag aktuell, den wir **new-entry** nennen. Den bisherigen Eintrag im Sitzungsverlauf der aktuellen Seite nennen wir **current-entry**.

1. Falls **new-entry** noch kein vorhandenes [`Document`](/de/docs/Web/API/Document) enthält, wird der Inhalt abgerufen und sein `Document` erstellt, bevor der Vorgang fortgesetzt wird. Dadurch werden später Ereignisse wie [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event) und [`load`](/de/docs/Web/API/Window/load_event) an das [`Window`](/de/docs/Web/API/Window) gesendet, das das Dokument enthält. Die folgenden Schritte werden unterdessen weiter ausgeführt.
2. Falls der Titel von **current-entry** nicht mit einer der History-API-Methoden ([`pushState()`](/de/docs/Web/API/History/pushState) oder [`replaceState()`](/de/docs/Web/API/History/replaceState)) festgelegt wurde, wird der Titel des Eintrags auf die Zeichenfolge gesetzt, die sein Attribut [`document.title`](/de/docs/Web/API/Document/title) zurückgibt.
3. Falls der Browser vor dem Verlassen von **current-entry** Zustandsinformationen mit diesem Eintrag speichern möchte, tut er dies nun. Der Eintrag verfügt dann über einen „gespeicherten Benutzerzustand“. Zu den Informationen, die der Browser dem Eintrag im Sitzungsverlauf hinzufügen kann, gehören beispielsweise die Scrollposition des Dokuments, die Werte von Formulareingaben und ähnliche Daten.
4. Falls **new-entry** ein anderes `Document`-Objekt als **current-entry** hat, wird der Browserkontext so aktualisiert, dass seine [`document`](/de/docs/Web/API/Window/document)-Eigenschaft auf das Dokument verweist, auf das sich **new-entry** bezieht. Außerdem wird der Name des Kontexts an den Kontextnamen des nun aktuellen Dokuments angepasst.
5. Jedes Formularsteuerelement im [`Document`](/de/docs/Web/API/Document) von **new-entry**, bei dem für [`autocomplete`](/de/docs/Web/HTML/Reference/Elements/input#autocomplete) der Autofill-Feldname `off` festgelegt ist, wird zurückgesetzt. Weitere Informationen zu Autofill-Feldnamen und zur Funktionsweise von `autocomplete` finden Sie unter [Das HTML-Attribut autocomplete](/de/docs/Web/HTML/Reference/Attributes/autocomplete).
6. Falls das Dokument von **new-entry** bereits vollständig geladen und bereit ist – sein [`readyState`](/de/docs/Web/API/Document/readyState) also `complete` ist – und das Dokument noch nicht sichtbar ist, wird es sichtbar gemacht. Anschließend wird das [`pageshow`](/de/docs/Web/API/Window/pageshow_event)-Ereignis am Dokument ausgelöst, wobei das Attribut [`persisted`](/de/docs/Web/API/PageTransitionEvent/persisted) des [`PageTransitionEvent`](/de/docs/Web/API/PageTransitionEvent) auf `true` gesetzt ist.
7. Die [`URL`](/de/docs/Web/API/Document/URL) des Dokuments wird auf die URL von **new-entry** gesetzt.
8. Falls der Verlauf mit aktivierter Ersetzung durchlaufen wird, wird der Eintrag unmittelbar vor dem Zieleintrag aus dem Verlaufsstapel entfernt. Dabei wird der Parameter `delta` von Methoden wie [`go()`](/de/docs/Web/API/History/go) berücksichtigt.
9. Falls **new-entry** keinen gespeicherten Benutzerzustand hat und das Fragment seiner URL nicht `null` ist, wird das Dokument zu diesem Fragment gescrollt.
10. Anschließend wird **current-entry** auf **new-entry** gesetzt. Der Zieleintrag gilt nun als aktuell.
11. Falls mit **new-entry** serialisierte Zustandsinformationen gespeichert wurden, werden diese in [`History.state`](/de/docs/Web/API/History/state) deserialisiert. Andernfalls ist `state` gleich `null`.
12. Falls sich der Wert von `state` geändert hat, wird das `popstate`-Ereignis an das Dokument gesendet.
13. Gespeicherter Benutzerzustand wird wiederhergestellt, sofern der Browser dies vorsieht.
14. Falls sich der ursprüngliche und der neue Eintrag auf dasselbe Dokument beziehen, ihre URLs aber unterschiedliche Fragmente enthalten, wird das [`hashchange`](/de/docs/Web/API/Window/hashchange_event)-Ereignis an das Fenster gesendet.

Wie Sie sehen, gehört das `popstate`-Ereignis zu den letzten Schritten bei dieser Art der Navigation zwischen Seiten.

## Beispiele

Eine Seite unter `http://example.com/example.html`, die den folgenden Code ausführt, erzeugt die angegebenen Protokollausgaben:

```js
window.addEventListener("popstate", (event) => {
  console.log(
    `location: ${document.location}, state: ${JSON.stringify(event.state)}`,
  );
});
history.pushState({ page: 1 }, "title 1", "?page=1");
history.pushState({ page: 2 }, "title 2", "?page=2");
history.replaceState({ page: 3 }, "title 3", "?page=3");
history.back(); // Logs "location: http://example.com/example.html?page=1, state: {"page":1}"
history.back(); // Logs "location: http://example.com/example.html, state: null"
history.go(2); // Logs "location: http://example.com/example.html?page=3, state: {"page":3}"
```

Dasselbe Beispiel mit der Event-Handler-Eigenschaft `onpopstate` (beachten Sie jedoch, dass dadurch gegebenenfalls andere über `onpopstate` hinzugefügte Event-Listener ersetzt werden):

```js
window.onpopstate = (event) => {
  console.log(
    `location: ${document.location}, state: ${JSON.stringify(event.state)}`,
  );
};
history.pushState({ page: 1 }, "title 1", "?page=1");
history.pushState({ page: 2 }, "title 2", "?page=2");
history.replaceState({ page: 3 }, "title 3", "?page=3");
history.back(); // Logs "location: http://example.com/example.html?page=1, state: {"page":1}"
history.back(); // Logs "location: http://example.com/example.html, state: null"
history.go(2); // Logs "location: http://example.com/example.html?page=3, state: {"page":3}"
```

Beachten Sie, dass auch dann ein `popstate`-Ereignis ausgelöst wird, wenn wir nach dem zweiten Aufruf von `history.back()` den ursprünglichen Verlaufseintrag (für `http://example.com/example.html`) aktivieren, obwohl diesem kein Zustandsobjekt zugeordnet ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Den Browserverlauf bearbeiten (die History API)](/de/docs/Web/API/History_API)
- [Window: `hashchange`-Ereignis](/de/docs/Web/API/Window/hashchange_event)
