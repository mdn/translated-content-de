---
title: "Window: popstate-Ereignis"
short-title: popstate
slug: Web/API/Window/popstate_event
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("History API")}}

Das **`popstate`**-Ereignis der [`Window`](/de/docs/Web/API/Window)-Schnittstelle wird ausgelöst, wenn der aktive Verlaufseintrag geändert wird, während der Benutzer in der Sitzungshistorie navigiert. Es ändert den aktuellen Verlaufseintrag zu dem der letzten besuchten Seite des Benutzers, oder, falls [`history.pushState()`](/de/docs/Web/API/History/pushState) verwendet wurde, um einen Verlaufseintrag in den Verlauf zu speichern, wird dieser Eintrag stattdessen verwendet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("popstate", (event) => {});
onpopstate = (event) => {};
```

## Ereignistyp

Ein [`PopStateEvent`](/de/docs/Web/API/PopStateEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("PopStateEvent")}}

## Ereigniseigenschaften

- [`PopStateEvent.state`](/de/docs/Web/API/PopStateEvent/state) {{ReadOnlyInline}}
  - : Gibt eine Kopie der Informationen zurück, die an `pushState()` oder `replaceState()` übergeben wurden.

## Ereignishandler-Aliase

Zusätzlich zur `Window`-Schnittstelle ist die Ereignishandler-Eigenschaft `onpopstate` auch für die folgenden Elemente verfügbar:

- [`HTMLBodyElement`](/de/docs/Web/API/HTMLBodyElement)
- [`HTMLFrameSetElement`](/de/docs/Web/API/HTMLFrameSetElement)
- [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement)

## Der Historien-Stack

Wenn der aktivierte Verlaufseintrag durch einen Aufruf von [`history.pushState()`](/de/docs/Web/API/History/pushState) erstellt oder durch einen Aufruf von [`history.replaceState()`](/de/docs/Web/API/History/replaceState) beeinflusst wurde, enthält die `state`-Eigenschaft des `popstate`-Ereignisses eine Kopie des Zustandsobjekts des Verlaufseintrags.

Diese Methoden und deren entsprechende Ereignisse können verwendet werden, um Daten zum Verlauf hinzuzufügen, die verwendet werden können, um eine dynamisch generierte Seite zu rekonstruieren oder um den Zustand der präsentierten Inhalte zu ändern, während man im selben [`Document`](/de/docs/Web/API/Document) bleibt.

Beachten Sie, dass das bloße Aufrufen von `history.pushState()` oder `history.replaceState()` kein `popstate`-Ereignis auslöst. Das `popstate`-Ereignis wird durch eine Browser-Aktion wie einen Klick auf die Zurück- oder Vorwärtstaste (oder durch das Aufrufen von `history.back()` oder `history.forward()` in JavaScript) ausgelöst.

Browser behandeln das `popstate`-Ereignis beim Laden der Seite unterschiedlich. Chrome (vor Version 34) und Safari senden immer ein `popstate`-Ereignis beim Laden der Seite, aber Firefox tut dies nicht.

> [!NOTE]
> Beim Schreiben von Funktionen, die das `popstate`-Ereignis verarbeiten, ist es wichtig zu berücksichtigen, dass Eigenschaften wie `window.location` die Zustandsänderung bereits widerspiegeln (wenn sie die aktuelle URL beeinflusst hat), das `document` jedoch möglicherweise noch nicht. Wenn das Ziel darin besteht, den Moment zu erfassen, in dem der neue Dokumentzustand vollständig vorhanden ist, sollte eine `setTimeout()`-Methode mit null Verzögerung verwendet werden, um effektiv ihre innere _callback_-Funktion, die die Verarbeitung durchführt, am Ende der Browser-Ereignisschleife zu platzieren: `window.onpopstate = () => setTimeout(doSomething, 0);`

## Wann popstate gesendet wird

Es ist wichtig, zunächst zu verstehen, dass — um unerwünschte Pop-ups zu bekämpfen — Browser das `popstate`-Ereignis möglicherweise überhaupt nicht auslösen, es sei denn, die Seite wurde interagiert.

Dieser Abschnitt beschreibt die Schritte, die Browser in den Fällen befolgen, in denen sie _möglicherweise_ das `popstate`-Ereignis auslösen (das heißt, in den Fällen, in denen mit der Seite interagiert wurde).

Wenn eine Navigation erfolgt — entweder weil der Benutzer die <kbd>Zurück</kbd>-Taste des Browsers aktiviert oder auf andere Weise —, dann ist das `popstate`-Ereignis gegen Ende des Prozesses, um zur neuen Position zu navigieren. Es passiert, nachdem die neue Position geladen (falls erforderlich), angezeigt, sichtbar gemacht usw. wurde — nachdem das [`pageshow`](/de/docs/Web/API/Window/pageshow_event)-Ereignis gesendet wurde, aber bevor die gespeicherten Benutzerstatusinformationen wiederhergestellt und das [`hashchange`](/de/docs/Web/API/Window/hashchange_event)-Ereignis gesendet wird.

Um besser zu verstehen, wann das `popstate`-Ereignis ausgelöst wird, betrachten Sie diese vereinfachte Abfolge von Ereignissen, die auftritt, wenn sich der aktuelle Verlaufseintrag aufgrund der Navigation des Benutzers auf der Website oder der programmgesteuerten Durchquerung der Historie ändert. Hier ändert die Übergangsbewegung den aktuellen Verlaufseintrag zu einem, den wir als **new-entry** bezeichnen. Der Sitzungshistorien-Eintrag der aktuellen Seite wird als **current-entry** bezeichnet.

1. Wenn **new-entry** derzeit kein vorhandenes [`Document`](/de/docs/Web/API/Document) enthält, holen Sie den Inhalt und erstellen Sie dessen `Document`, bevor Sie fortfahren. Dadurch werden schließlich Ereignisse wie [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event) und [`load`](/de/docs/Web/API/Window/load_event) an das [`Window`](/de/docs/Web/API/Window) gesendet, das das Dokument enthält, aber die folgenden Schritte werden gleichzeitig weiter ausgeführt.
2. Wenn der Titel von **current-entry** nicht mit einer der Methoden der History API ([`pushState()`](/de/docs/Web/API/History/pushState) oder [`replaceState()`](/de/docs/Web/API/History/replaceState)) gesetzt wurde, setzen Sie den Eintragstitel auf die Zeichenkette, die von seinem [`document.title`](/de/docs/Web/API/Document/title)-Attribut zurückgegeben wird.
3. Wenn der Browser Statusinformationen speichern möchte, die mit **current-entry** verknüpft sind, bevor er weg navigiert, tut er dies. Der Eintrag gilt jetzt als "persistierter Benutzerstatus". Diese Informationen, die der Browser dem Sitzungsverlaufseintrag hinzufügen könnte, können zum Beispiel die Scrollposition des Dokuments, die Werte von Formulareingaben und andere solche Daten umfassen.
4. Wenn **new-entry** ein anderes `Document`-Objekt als **current-entry** hat, wird der Browsingkontext aktualisiert, sodass seine [`document`](/de/docs/Web/API/Window/document)-Eigenschaft auf das Dokument verweist, das von **new-entry** referenziert wird, und der Kontextname wird aktualisiert, um mit dem Kontextnamen des nun aktuellen Dokuments übereinzustimmen.
5. Jedes Formularelement innerhalb von **new-entry**'s [`Document`](/de/docs/Web/API/Document), das [`autocomplete`](/de/docs/Web/HTML/Reference/Elements/input#autocomplete) mit seinem Autofill-Feldnamen auf `off` konfiguriert hat, wird zurückgesetzt. Siehe [Das HTML autocomplete-Attribut](/de/docs/Web/HTML/Reference/Attributes/autocomplete), um mehr über die autocomplete-Feldnamen und die Funktionsweise von Autocomplete zu erfahren.
6. Wenn das Dokument von **new-entry** bereits vollständig geladen und bereit ist — das heißt, sein [`readyState`](/de/docs/Web/API/Document/readyState) ist `complete` — und das Dokument nicht bereits sichtbar ist, wird es sichtbar gemacht und das [`pageshow`](/de/docs/Web/API/Window/pageshow_event)-Ereignis wird an das Dokument mit dem [`PageTransitionEvent`](/de/docs/Web/API/PageTransitionEvent)'s [`persisted`](/de/docs/Web/API/PageTransitionEvent/persisted)-Attribut auf `true` ausgelöst.
7. Die [`URL`](/de/docs/Web/API/Document/URL) des Dokuments wird auf die von **new-entry** gesetzt.
8. Wenn die Historien-Durchquerung mit aktivierter Ersetzung durchgeführt wird, wird der Eintrag, der unmittelbar vor dem Zieleintrag liegt (unter Berücksichtigung des `delta`-Parameters bei Methoden wie [`go()`](/de/docs/Web/API/History/go)), aus dem Historienstapel entfernt.
9. Wenn **new-entry** keinen persistierten Benutzerstatus hat und das Fragment seiner URL nicht-`null` ist, wird das Dokument zu diesem Fragment gescrollt.
10. Als nächstes wird **current-entry** auf **new-entry** gesetzt. Der Zieleintrag wird nun als aktuell betrachtet.
11. Wenn **new-entry** serielle Statusinformationen gespeichert hat, werden diese Informationen in [`History.state`](/de/docs/Web/API/History/state) deserialisiert; andernfalls ist `state` `null`.
12. Wenn sich der Wert von `state` geändert hat, wird das `popstate`-Ereignis an das Dokument gesendet.
13. Jeglicher persistierte Benutzerstatus wird wiederhergestellt, wenn sich der Browser dafür entscheidet.
14. Wenn die ursprünglichen und neuen Einträge dasselbe Dokument geteilt haben, aber unterschiedliche Fragmente in ihren URLs hatten, senden Sie das [`hashchange`](/de/docs/Web/API/Window/hashchange_event)-Ereignis an das Fenster.

Wie Sie sehen können, ist das `popstate`-Ereignis fast das Letzte, was beim Navigieren auf diese Weise getan wird.

## Beispiele

Eine Seite unter `http://example.com/example.html`, die den folgenden Code ausführt, wird die angegebenen Protokolle erzeugen:

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

Dasselbe Beispiel mit der `onpopstate`-Ereignishandler-Eigenschaft:

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

Beachten Sie, dass auch wenn der ursprüngliche Verlaufseintrag (für `http://example.com/example.html`) kein Zustandsobjekt zugeordnet hat, ein `popstate`-Ereignis immer noch ausgelöst wird, wenn wir diesen Eintrag nach dem zweiten Aufruf von `history.back()` aktivieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Manipulation des Browser-Verlaufs (die History API)](/de/docs/Web/API/History_API)
- [Window: `hashchange`-Ereignis](/de/docs/Web/API/Window/hashchange_event)
