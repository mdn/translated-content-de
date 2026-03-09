---
title: "Window: popstate Ereignis"
short-title: popstate
slug: Web/API/Window/popstate_event
l10n:
  sourceCommit: cf3515a7aa9db738bfbd02c16f94fbab180fd1fb
---

{{APIRef("History API")}}

Das **`popstate`**-Ereignis der [`Window`](/de/docs/Web/API/Window)-Schnittstelle wird ausgelöst, wenn der aktive Verlaufseintrag wechselt, während der Benutzer durch den Sitzungsverlauf navigiert. Es ändert den aktuellen Verlaufseintrag zu dem der letzten besuchten Seite des Benutzers oder, wenn [`history.pushState()`](/de/docs/Web/API/History/pushState) verwendet wurde, um einen Verlaufseintrag zum Verlaufsstapel hinzuzufügen, wird stattdessen dieser Eintrag verwendet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("popstate", (event) => { })

onpopstate = (event) => { }
```

## Ereignistyp

Ein [`PopStateEvent`](/de/docs/Web/API/PopStateEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("PopStateEvent")}}

## Ereigniseigenschaften

- [`PopStateEvent.state`](/de/docs/Web/API/PopStateEvent/state) {{ReadOnlyInline}}
  - : Gibt eine Kopie der Informationen zurück, die `pushState()` oder `replaceState()` bereitgestellt wurden.

## Alias der Ereignis-Handler

Zusätzlich zur `Window`-Schnittstelle ist die Ereignis-Handler-Eigenschaft `onpopstate` auch auf den folgenden Elementen verfügbar:

- [`HTMLBodyElement`](/de/docs/Web/API/HTMLBodyElement)
- [`HTMLFrameSetElement`](/de/docs/Web/API/HTMLFrameSetElement)
- [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement)

## Der Verlaufstapel

Wenn der zu aktivierende Verlaufseintrag durch einen Aufruf von [`history.pushState()`](/de/docs/Web/API/History/pushState) erstellt wurde oder durch einen Aufruf von [`history.replaceState()`](/de/docs/Web/API/History/replaceState) beeinflusst wurde, enthält die `state`-Eigenschaft des `popstate`-Ereignisses eine Kopie des Statusobjekts des Verlaufseintrags.

Diese Methoden und ihre entsprechenden Ereignisse können verwendet werden, um Daten zum Verlaufstapel hinzuzufügen, die zur Rekonstruktion einer dynamisch generierten Seite oder zur Änderung des Zustands der präsentierten Inhalte verwendet werden können, während im selben [`Document`](/de/docs/Web/API/Document) verbleibt.

Beachten Sie, dass durch den bloßen Aufruf von `history.pushState()` oder `history.replaceState()` kein `popstate`-Ereignis ausgelöst wird. Das `popstate`-Ereignis wird durch eine Browseraktion wie einen Klick auf die Vorwärts- oder Rückwärts-Schaltfläche (oder durch den Aufruf von `history.back()` oder `history.forward()` in JavaScript) ausgelöst.

> [!NOTE]
> Beim Schreiben von Funktionen, die das `popstate`-Ereignis verarbeiten, ist es wichtig zu berücksichtigen, dass Eigenschaften wie `window.location` bereits die Zustandsänderung widerspiegeln (wenn sie die aktuelle URL betroffen hat), aber `document` möglicherweise noch nicht. Wenn es das Ziel ist, den Moment zu erfassen, in dem der neue Dokumentzustand bereits vollständig implementiert ist, sollte eine `setTimeout()`-Methode mit null Verzögerung verwendet werden, um ihre innere _Callback_-Funktion, die die Verarbeitung durchführt, effektiv ans Ende der Browser-Ereignisschleife zu setzen: `window.onpopstate = () => setTimeout(doSomeThing, 0);`

## Wann popstate gesendet wird

Es ist wichtig, zunächst zu verstehen, dass — um unerwünschte Pop-ups zu bekämpfen — Browser das `popstate`-Ereignis möglicherweise überhaupt nicht auslösen, es sei denn, die Seite wurde interagiert.

Dieser Abschnitt beschreibt die Schritte, die Browser in den Fällen befolgen, in denen sie das `popstate`-Ereignis _potenziell_ auslösen (d.h. in den Fällen, in denen die Seite interagiert wurde).

Wenn eine Navigation erfolgt — entweder durch die Auslösung der <kbd>Zurück</kbd>-Schaltfläche des Browsers durch den Benutzer oder auf andere Weise —, befindet sich das `popstate`-Ereignis gegen Ende des Prozesses zum Navigieren zur neuen Position. Es passiert nachdem die neue Position geladen (falls nötig), angezeigt und sichtbar gemacht wurde und so weiter — nachdem das [`pageshow`](/de/docs/Web/API/Window/pageshow_event)-Ereignis gesendet wurde, aber bevor die gespeicherten Benutzerdaten wiederhergestellt werden und das [`hashchange`](/de/docs/Web/API/Window/hashchange_event)-Ereignis gesendet wird.

Um besser zu verstehen, wann das `popstate`-Ereignis ausgelöst wird, betrachten Sie diese vereinfachte Abfolge von Ereignissen, die auftritt, wenn sich der aktuelle Verlaufseintrag aufgrund entweder der Navigation des Benutzers auf der Website oder der programmgesteuerten Durchquerung des Verlaufs ändert. Hier ändert der Übergang den aktuellen Verlaufseintrag zu einem, den wir als **new-entry** bezeichnen werden. Der Verlaufssitzungsstapel der aktuellen Seite wird als **current-entry** bezeichnet.

1. Wenn **new-entry** derzeit kein vorhandenes [`Document`](/de/docs/Web/API/Document) enthält, rufen Sie den Inhalt ab und erstellen Sie sein `Document`, bevor Sie fortfahren. Dies wird schließlich Ereignisse wie [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event) und [`load`](/de/docs/Web/API/Window/load_event) an das [`Window`](/de/docs/Web/API/Window) senden, das das Dokument enthält, aber die untenstehenden Schritte werden weiterhin ausgeführt.
2. Wenn der Titel von **current-entry** nicht mit einer der Methoden der History API ([`pushState()`](/de/docs/Web/API/History/pushState) oder [`replaceState()`](/de/docs/Web/API/History/replaceState)) gesetzt wurde, setzen Sie den Eintrags-Titel auf die Zeichenfolge zurück, die von seinem [`document.title`](/de/docs/Web/API/Document/title)-Attribut zurückgegeben wird.
3. Wenn der Browser die Statusinformationen speichern möchte, die er mit **current-entry** vor der Navigation von ihm weg speichert, tut er dies. Der Eintrag soll jetzt „persistierten Benutzerstatus“ haben. Zu den Informationen, die der Browser möglicherweise zum Verlaufs Sitzungseintrag hinzufügt, gehören z. B. die Scrollposition des Dokuments, die Werte der Formulareingaben und andere solche Daten.
4. Wenn **new-entry** ein anderes `Document`-Objekt als **current-entry** aufweist, wird der Browsing-Kontext so aktualisiert, dass seine [`document`](/de/docs/Web/API/Window/document)-Eigenschaft auf das Dokument verweist, auf das sich **new-entry** bezieht, und der Kontextname wird aktualisiert, um dem Kontextnamen des jetzt aktuellen Dokuments zu entsprechen.
5. Jedes Formularelement innerhalb des [`Document`](/de/docs/Web/API/Document) von **new-entry**, das [`autocomplete`](/de/docs/Web/HTML/Reference/Elements/input#autocomplete) konfiguriert hat, wobei der Name seines Autofill-Felds auf `off` gesetzt ist, wird zurückgesetzt. Siehe [Das HTML-Autocomplete-Attribut](/de/docs/Web/HTML/Reference/Attributes/autocomplete), um mehr über die Namen von Autocomplete-Feldern und die Funktionsweise von Autocomplete zu erfahren.
6. Wenn das Dokument von **new-entry** bereits vollständig geladen und bereit ist — d.h. sein [`readyState`](/de/docs/Web/API/Document/readyState) ist `complete` — und das Dokument noch nicht sichtbar ist, wird es sichtbar gemacht und das [`pageshow`](/de/docs/Web/API/Window/pageshow_event)-Ereignis wird mit dem [`PageTransitionEvent`](/de/docs/Web/API/PageTransitionEvent) an das Dokument gesendet, wobei das Attribut [`persisted`](/de/docs/Web/API/PageTransitionEvent/persisted) auf `true` gesetzt ist.
7. Die [`URL`](/de/docs/Web/API/Document/URL) des Dokuments wird auf die von **new-entry** gesetzt.
8. Wenn die Verlaufstraversierung mit aktivierter Ersetzung durchgeführt wird, wird der Eintrag unmittelbar vor dem Ziel-Eintrag (unter Berücksichtigung des `delta`-Parameters in Methoden wie [`go()`](/de/docs/Web/API/History/go)) aus dem Verlaufstapel entfernt.
9. Wenn **new-entry** keinen gespeicherten Benutzerstatus hat und das Fragment seiner URL nicht `null` ist, wird das Dokument zu diesem Fragment gescrollt.
10. Als nächstes wird **current-entry** auf **new-entry** gesetzt. Der Ziel-Eintrag wird nun als aktuell angesehen.
11. Wenn **new-entry** serialisierte Statusinformationen gespeichert hat, die mit ihm gespeichert sind, werden diese Informationen in [`History.state`](/de/docs/Web/API/History/state) deserialisiert; andernfalls ist `state` `null`.
12. Wenn sich der Wert von `state` geändert hat, wird das `popstate`-Ereignis an das Dokument gesendet.
13. Jede persistente Benutzerstatus wird wiederhergestellt, wenn der Browser dies wählt.
14. Wenn die originalen und neuen Einträge das gleiche Dokument teilten, aber verschiedene Fragmente in ihren URLs hatten, senden Sie das [`hashchange`](/de/docs/Web/API/Window/hashchange_event)-Ereignis an das Fenster.

Wie Sie sehen können, ist das `popstate`-Ereignis fast das letzte, was im Prozess des Navigierens zwischen Seiten auf diese Weise getan wird.

## Beispiele

Eine Seite unter `http://example.com/example.html`, die den folgenden Code ausführt, wird Protokolle wie angegeben erzeugen:

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

Das gleiche Beispiel unter Verwendung der `onpopstate`-Ereignis-Handler-Eigenschaft:

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

Beachten Sie, dass selbst wenn der ursprüngliche Verlaufseintrag (für `http://example.com/example.html`) kein Zustandsobjekt zugeordnet hat, ein `popstate`-Ereignis trotzdem gesendet wird, wenn wir diesen Eintrag nach dem zweiten Aufruf von `history.back()` aktivieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Manipulation des Browserverlaufs (die History API)](/de/docs/Web/API/History_API)
- [Window: `hashchange`-Ereignis](/de/docs/Web/API/Window/hashchange_event)
