---
title: "Window: popstate Ereignis"
short-title: popstate
slug: Web/API/Window/popstate_event
l10n:
  sourceCommit: 1b4e6d1156e8471d38deeea1567c35ef412c5f42
---

{{APIRef("History API")}}

Das **`popstate`**-Ereignis der [`Window`](/de/docs/Web/API/Window)-Schnittstelle wird ausgelöst, wenn der aktive Verlaufseintrag sich ändert, während der Benutzer im Sitzungsverlauf navigiert. Es ändert den aktuellen Verlaufseintrag zu dem der zuletzt besuchten Seite des Benutzers oder, wenn [`history.pushState()`](/de/docs/Web/API/History/pushState) verwendet wurde, um einen Verlaufseintrag zum Verlaufstapel hinzuzufügen, wird dieser Verlaufseintrag stattdessen verwendet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("popstate", (event) => {});
onpopstate = (event) => {};
```

## Ereignistyp

Ein [`PopStateEvent`](/de/docs/Web/API/PopStateEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("PopStateEvent")}}

## Ereigniseigenschaften

- [`PopStateEvent.state`](/de/docs/Web/API/PopStateEvent/state) {{ReadOnlyInline}}
  - : Gibt eine Kopie der Informationen zurück, die `pushState()` oder `replaceState()` bereitgestellt wurden.

## Eventhandler-Alias

Zusätzlich zur `Window`-Schnittstelle ist die Eventhandler-Eigenschaft `onpopstate` auch bei den folgenden Elementen verfügbar:

- [`HTMLBodyElement`](/de/docs/Web/API/HTMLBodyElement)
- [`HTMLFrameSetElement`](/de/docs/Web/API/HTMLFrameSetElement)
- [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement)

## Der Verlaufstapel

Wenn der aktivierte Verlaufseintrag durch einen Aufruf von [`history.pushState()`](/de/docs/Web/API/History/pushState) erstellt wurde oder durch einen Aufruf von [`history.replaceState()`](/de/docs/Web/API/History/replaceState) betroffen ist, enthält die `state`-Eigenschaft des `popstate`-Ereignisses eine Kopie des Statusobjekts des Verlaufseintrags.

Diese Methoden und deren entsprechende Ereignisse können verwendet werden, um Daten zum Verlaufstapel hinzuzufügen, die verwenden werden können, um eine dynamisch generierte Seite zu rekonstruieren oder um den Zustand des präsentierten Inhalts zu ändern, während dasselbe [`Document`](/de/docs/Web/API/Document) beibehalten wird.

Beachten Sie, dass das bloße Aufrufen von `history.pushState()` oder `history.replaceState()` kein `popstate`-Ereignis auslösen wird. Das `popstate`-Ereignis wird durch eine Browseraktion wie einen Klick auf die Vor- oder Zurück-Schaltfläche (oder durch das Aufrufen von `history.back()` oder `history.forward()` in JavaScript) ausgelöst.

Browser neigen dazu, das `popstate`-Ereignis beim Laden der Seite unterschiedlich zu behandeln. Chrome (vor Version 34) und Safari emittieren immer ein `popstate`-Ereignis beim Laden der Seite, aber Firefox nicht.

> [!NOTE]
> Beim Schreiben von Funktionen, die das `popstate`-Ereignis verarbeiten, ist es wichtig, zu beachten, dass Eigenschaften wie `window.location` die Statusänderung bereits widerspiegeln (wenn sie die aktuelle URL betroffen hat), das `document` jedoch möglicherweise noch nicht. Wenn das Ziel darin besteht, den Moment zu erfassen, in dem der neue Dokumentzustand bereits vollständig vorhanden ist, sollte eine Methode [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) mit Null-Verzögerung verwendet werden, um die innere _callback_-Funktion, die die Verarbeitung übernimmt, effektiv am Ende der Browser-Ereignisschleife zu platzieren: `window.onpopstate = () => setTimeout(doSomeThing, 0);`

## Wann popstate gesendet wird

Es ist wichtig zuerst zu verstehen, dass — um unerwünschte Pop-ups zu bekämpfen — Browser das `popstate`-Ereignis möglicherweise gar nicht auslösen, es sei denn, die Seite wurde interagiert.

Dieser Abschnitt beschreibt die Schritte, die Browser für die Fälle ausführen, in denen sie das `popstate`-Ereignis möglicherweise auslösen (also in den Fällen, in denen mit der Seite interagiert wurde).

Wenn eine Navigation stattfindet — entweder weil der Benutzer die <kbd>Zurück</kbd>-Schaltfläche des Browsers auslöst oder anderweitig — ist das `popstate`-Ereignis nahe dem Ende des Prozesses, um zur neuen Position zu navigieren. Es tritt auf, nachdem die neue Position geladen (falls erforderlich), angezeigt und sichtbar gemacht wurde und so weiter — nachdem das [`pageshow`](/de/docs/Web/API/Window/pageshow_event) gesendet wurde, aber bevor die persistierte Benutzerzustandsinformation wiederhergestellt und das [`hashchange`](/de/docs/Web/API/Window/hashchange_event) gesendet wird.

Um besser zu verstehen, wann das `popstate`-Ereignis ausgelöst wird, betrachten Sie diese vereinfachte Abfolge von Ereignissen, die auftritt, wenn der aktuelle Verlaufseintrag sich ändert, entweder durch das Navigieren der Seite durch den Benutzer oder durch das programmgesteuerte Durchlaufen des Verlaufs. Hierbei wechselt der Übergang den aktuellen Verlaufseintrag zu einem, den wir als **new-entry** bezeichnen werden. Der Verlaufseintrag der aktuellen Sitzung der Seite wird als **current-entry** bezeichnet.

1. Wenn **new-entry** derzeit kein existierendes [`Document`](/de/docs/Web/API/Document) enthält, holen Sie den Inhalt und erstellen sein `Document`, bevor Sie fortfahren. Dies wird schließlich Ereignisse wie [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event) und [`load`](/de/docs/Web/API/Window/load_event) zum [`Window`](/de/docs/Web/API/Window), das das Dokument enthält, senden, aber die untenstehenden Schritte werden fortgesetzt.
2. Wenn der Titel von **current-entry** nicht mit einer der History API-Methoden ([`pushState()`](/de/docs/Web/API/History/pushState) oder [`replaceState()`](/de/docs/Web/API/History/replaceState)) gesetzt wurde, setzen Sie den Eintragstitel auf den String, der von seinem [`document.title`](/de/docs/Web/API/Document/title) Attribut zurückgegeben wird.
3. Wenn der Browser Zustandinformationen speichern möchte, die er mit **current-entry** speichern möchte, bevor er sie verlässt, tut er dies. Der Eintrag hat nun "persistierten Benutzerzustand". Diese Informationen, die der Browser möglicherweise dem Verlaufssitzungseintrag hinzufügt, können zum Beispiel die Scrollposition des Dokuments, die Werte von Formulareingaben und andere solche Daten umfassen.
4. Wenn **new-entry** ein anderes `Document`-Objekt als **current-entry** hat, wird der Browsing-Kontext aktualisiert, sodass seine [`document`](/de/docs/Web/API/Window/document)-Eigenschaft auf das durch **new-entry** referenzierte Dokument verweist, und der Kontextname wird aktualisiert, um mit dem Kontextnamen des jetzt aktuellen Dokuments übereinzustimmen.
5. Jedes Formularsteuerungselement innerhalb des [`Document`](/de/docs/Web/API/Document) von **new-entry**, das mit [`autocomplete`](/de/docs/Web/HTML/Element/input#autocomplete) konfiguriert ist und dessen Autofill-Feldname auf `off` gesetzt ist, wird zurückgesetzt. Siehe [Das HTML autocomplete Attribut](/de/docs/Web/HTML/Attributes/autocomplete), um mehr über die Autocomplete-Feldnamen und wie Autocomplete funktioniert, zu erfahren.
6. Wenn das Dokument von **new-entry** bereits vollständig geladen und bereit ist — das heißt, sein [`readyState`](/de/docs/Web/API/Document/readyState) ist `complete` — und das Dokument nicht bereits sichtbar ist, wird es sichtbar gemacht und das [`pageshow`](/de/docs/Web/API/Window/pageshow_event) wird dem Dokument mit dem [`PageTransitionEvent`](/de/docs/Web/API/PageTransitionEvent) sein [`persisted`](/de/docs/Web/API/PageTransitionEvent/persisted) Attribut auf `true` gesetzt.
7. Die [`URL`](/de/docs/Web/API/Document/URL) des Dokuments wird auf die von **new-entry** gesetzt.
8. Wenn die Verlaufsnavigation mit aktivierter Ersetzung durchgeführt wird, wird der Eintrag unmittelbar vor dem Zieleintrag (unter Berücksichtigung des `delta`-Parameters von Methoden wie [`go()`](/de/docs/Web/API/History/go)) aus dem Verlaufstack entfernt.
9. Wenn **new-entry** keinen persistierten Benutzerzustand hat und das Fragment seiner URL nicht `null` ist, wird das Dokument auf das Fragment gescrollt.
10. Als nächstes wird **current-entry** auf **new-entry** gesetzt. Der Zieleintrag wird nun als aktuell angesehen.
11. Wenn **new-entry** serialisierte Zustandsinformationen mit sich gespeichert hat, werden diese Informationen in [`History.state`](/de/docs/Web/API/History/state) deserialisiert; andernfalls ist `state` `null`.
12. Wenn sich der Wert von `state` geändert hat, wird das `popstate`-Ereignis an das Dokument gesendet.
13. Jeder persistierte Benutzerzustand wird wiederhergestellt, wenn sich der Browser dazu entscheidet.
14. Wenn die ursprünglichen und neuen Einträge dasselbe Dokument teilten, aber unterschiedliche Fragmente in ihren URLs hatten, wird das [`hashchange`](/de/docs/Web/API/Window/hashchange_event) an das Fenster gesendet.

Wie Sie sehen, ist das `popstate`-Ereignis fast das Letzte, was im Prozess des Navigierens in Seiten auf diese Weise getan wird.

## Beispiele

Eine Seite bei `http://example.com/example.html`, die den folgenden Code ausführt, wird Protokolle wie angegeben erzeugen:

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

Dasselbe Beispiel mit der `onpopstate`-Eventhandler-Eigenschaft:

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

Beachten Sie, dass selbst wenn der ursprüngliche Verlaufseintrag (für `http://example.com/example.html`) kein Statusobjekt damit assoziiert hat, ein `popstate`-Ereignis trotzdem ausgelöst wird, wenn wir diesen Eintrag nach dem zweiten Aufruf von `history.back()` aktivieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Manipulieren des Browserverlaufs (die History API)](/de/docs/Web/API/History_API)
- [Window: `hashchange` Ereignis](/de/docs/Web/API/Window/hashchange_event)
