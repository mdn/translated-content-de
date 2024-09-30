---
title: "Window: popstate-Ereignis"
short-title: popstate
slug: Web/API/Window/popstate_event
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef("History API")}}

Das **`popstate`**-Ereignis der [`Window`](/de/docs/Web/API/Window)-Schnittstelle wird ausgelöst, wenn sich der aktive Verlaufs-Eintrag ändert, während der Benutzer in der Sitzungsverlauf navigiert. Es ändert den aktuellen Verlaufs-Eintrag zu dem der letzten Seite, die der Benutzer besucht hat, oder, wenn [`history.pushState()`](/de/docs/Web/API/History/pushState) verwendet wurde, um einen Verlaufs-Eintrag zum Verlaufs-Stapel hinzuzufügen, wird dieser Verlaufs-Eintrag stattdessen verwendet.

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
  - : Gibt eine Kopie der Informationen zurück, die `pushState()` oder `replaceState()` bereitgestellt wurden.

## Ereignishandler-Aliase

Zusätzlich zur `Window`-Schnittstelle ist die Ereignishandler-Eigenschaft `onpopstate` auch auf den folgenden Elementen verfügbar:

- [`HTMLBodyElement`](/de/docs/Web/API/HTMLBodyElement)
- [`HTMLFrameSetElement`](/de/docs/Web/API/HTMLFrameSetElement)
- [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement)

## Der Verlaufs-Stapel

Wenn der aktivierte Verlaufs-Eintrag durch einen Aufruf von [`history.pushState()`](/de/docs/Web/API/History/pushState) erstellt oder durch einen Aufruf von [`history.replaceState()`](/de/docs/Web/API/History/replaceState) beeinflusst wurde, enthält die `state`-Eigenschaft des `popstate`-Ereignisses eine Kopie des Verlaufs-Eintragszustandsobjekts.

Diese Methoden und die entsprechenden Ereignisse können verwendet werden, um Daten zum Verlaufs-Stapel hinzuzufügen, die verwendet werden können, um eine dynamisch generierte Seite zu rekonstruieren oder um den Zustand des präsentierten Inhalts zu ändern, während Sie sich auf demselben [`Document`](/de/docs/Web/API/Document) befinden.

Beachten Sie, dass nur der Aufruf von `history.pushState()` oder `history.replaceState()` kein `popstate`-Ereignis auslöst. Das `popstate`-Ereignis wird durch eine Browseraktion wie einen Klick auf die Schaltfläche Zurück oder Vorwärts (oder durch Aufrufen von `history.back()` oder `history.forward()` in JavaScript) ausgelöst.

Browser behandeln das `popstate`-Ereignis beim Laden der Seite unterschiedlich. Chrome (vor Version 34) und Safari senden immer ein `popstate`-Ereignis beim Seitenladen, Firefox tut dies jedoch nicht.

> [!NOTE]
> Beim Schreiben von Funktionen, die das `popstate`-Ereignis verarbeiten, ist es wichtig zu berücksichtigen, dass Eigenschaften wie `window.location` bereits die Zustandsänderung widerspiegeln (wenn sie die aktuelle URL betrifft), aber `document` möglicherweise noch nicht. Wenn das Ziel darin besteht, den Moment zu erfassen, in dem der neue Dokumentzustand bereits vollständig vorhanden ist, sollte eine `setTimeout()`-Methode mit null Verzögerung verwendet werden, um die innere _Callback_-Funktion, die die Verarbeitung vornimmt, effektiv am Ende der Ereignisschleife des Browsers zu platzieren: `window.onpopstate = () => setTimeout(doSomeThing, 0);`

## Wann das popstate gesendet wird

Es ist wichtig, zuerst zu verstehen, dass - um unerwünschte Pop-ups zu bekämpfen - Browser das `popstate`-Ereignis möglicherweise überhaupt nicht auslösen, es sei denn, die Seite wurde interagiert.

Dieser Abschnitt beschreibt die Schritte, die Browser befolgen, in den Fällen, in denen sie das `popstate`-Ereignis _potenziell_ auslösen (also in den Fällen, in denen mit der Seite interagiert wurde).

Wenn eine Navigation erfolgt - entweder durch das Auslösen der Schaltfläche <kbd>Zurück</kbd> des Browsers oder auf andere Weise - ist das `popstate`-Ereignis gegen Ende des Prozesses zur Navigation zur neuen Position. Es tritt auf, nachdem die neue Position geladen wurde (falls erforderlich), angezeigt, sichtbar gemacht und so weiter - nachdem das [`pageshow`](/de/docs/Web/API/Window/pageshow_event)-Ereignis gesendet wurde, aber bevor die gespeicherten Benutzerdaten wiederhergestellt und das [`hashchange`](/de/docs/Web/API/Window/hashchange_event)-Ereignis gesendet werden.

Um besser zu verstehen, wann das `popstate`-Ereignis ausgelöst wird, beachten Sie diese vereinfachte Abfolge von Ereignissen, die auftritt, wenn sich der aktuelle Verlaufs-Eintrag aufgrund der Navigation des Benutzers auf der Website oder der programmgesteuerten Navigation des Verlaufs ändert. Hier ändert die Transition den aktuellen Verlaufs-Eintrag zu einem Eintrag, den wir als **neuen Eintrag** bezeichnen werden. Der aktuelle Verlaufs-Stapel-Eintrag der Seite wird als **aktueller Eintrag** bezeichnet.

1. Wenn **neuer Eintrag** derzeit kein vorhandenes [`Document`](/de/docs/Web/API/Document) enthält, holen Sie die Inhalte ab und erstellen Sie deren `Document`, bevor Sie fortfahren. Dies wird schließlich Ereignisse wie [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event) und [`load`](/de/docs/Web/API/Window/load_event) an das [`Window`](/de/docs/Web/API/Window) senden, das das Dokument enthält, aber die folgenden Schritte werden dennoch fortgesetzt.
2. Wenn der Titel von **aktuellem Eintrag** nicht mit einer der Methoden der History API ([`pushState()`](/de/docs/Web/API/History/pushState) oder [`replaceState()`](/de/docs/Web/API/History/replaceState)) gesetzt wurde, setzen Sie den Titel des Eintrags auf den String, der vom Attribut [`document.title`](/de/docs/Web/API/Document/title) seines Dokuments zurückgegeben wird.
3. Falls der Browser den Zustand speichern möchte, bevor er von **aktuellem Eintrag** weg navigiert, erfolgt dies. Jetzt heißt es, dass der Eintrag "persistierten Benutzerzustand" hat. Diese Informationen, die der Browser zum Verlaufs-Sitzungseintrag hinzufügen könnte, können zum Beispiel die Scrollposition des Dokuments, die Werte der Formulareingaben und andere solche Daten umfassen.
4. Wenn **neuer Eintrag** ein anderes `Document`-Objekt als **aktueller Eintrag** hat, wird der Browsing-Kontext aktualisiert, sodass seine [`document`](/de/docs/Web/API/Window/document)-Eigenschaft auf das Dokument verweist, das von **neuer Eintrag** referenziert wird, und der Kontextname des nun aktuellen Dokuments aktualisiert wird.
5. Jedes Formularfeld innerhalb des `Document` von **neuer Eintrag**, das mit [`autocomplete`](/de/docs/Web/HTML/Element/input#autocomplete) konfiguriert ist mit seinem Autofill-Feldnamen auf `off`, wird zurückgesetzt. Siehe [Das HTML-Autocomplete-Attribut](/de/docs/Web/HTML/Attributes/autocomplete) für mehr Informationen über die Autocomplete-Feldnamen und wie Autocomplete funktioniert.
6. Wenn das Dokument von **neuer Eintrag** bereits vollständig geladen und bereit ist - das heißt, sein [`readyState`](/de/docs/Web/API/Document/readyState) `complete` ist - und das Dokument nicht bereits sichtbar ist, wird es sichtbar gemacht und das [`pageshow`](/de/docs/Web/API/Window/pageshow_event)-Ereignis wird an das Dokument mit dem [`PageTransitionEvent`](/de/docs/Web/API/PageTransitionEvent)'s [`persisted`](/de/docs/Web/API/PageTransitionEvent/persisted)-Attribut auf `true` gesendet.
7. Die [`URL`](/de/docs/Web/API/Document/URL) des Dokuments wird auf die von **neuer Eintrag** gesetzt.
8. Falls die Verlaufsgeschichte mit Aktivierung des Ersetzens durchgeführt wird, wird der Eintrag direkt vor dem Ziel-Eintrag (unter Berücksichtigung des `delta`-Parameters bei Methoden wie [`go()`](/de/docs/Web/API/History/go)) aus dem Verlaufs-Stapel entfernt.
9. Wenn **neuer Eintrag** keinen persistierten Benutzerzustand hat und das Fragment seiner URL nicht `null` ist, wird das Dokument zu diesem Fragment gescrollt.
10. Als nächstes wird **aktueller Eintrag** auf **neuer Eintrag** gesetzt. Der Zieleintrag wird nun als aktuell angesehen.
11. Wenn **neuer Eintrag** serialisierte Zustandsinformationen gespeichert hat, werden diese Informationen in [`History.state`](/de/docs/Web/API/History/state) deserialisiert; sonst ist `state` `null`.
12. Wenn sich der Wert von `state` geändert hat, wird das `popstate`-Ereignis an das Dokument gesendet.
13. Jeglicher persistierter Benutzerzustand wird wiederhergestellt, falls der Browser dies wählt.
14. Falls die Original- und die neuen Einträge dasselbe Dokument teilen, aber unterschiedliche Fragmente in ihren URLs haben, wird das [`hashchange`](/de/docs/Web/API/Window/hashchange_event)-Ereignis an das Fenster gesendet.

Wie Sie sehen können, ist das `popstate`-Ereignis fast das letzte, das im Prozess des Navigierens durch die Seiten auf diese Weise ausgeführt wird.

## Beispiele

Eine Seite unter `http://example.com/example.html`, die den folgenden Code ausführt, generiert die angegebenen Protokolle:

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

Dasselbe Beispiel unter Verwendung der `onpopstate`-Ereignishandler-Eigenschaft:

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

Beachten Sie, dass auch wenn der Original-Verlaufs-Eintrag (für `http://example.com/example.html`) kein Zustandsobjekt damit verbunden hat, immer noch ein `popstate`-Ereignis ausgelöst wird, wenn wir diesen Eintrag nach dem zweiten Aufruf von `history.back()` aktivieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Manipulation des Browserverlaufs (die History API)](/de/docs/Web/API/History_API)
- [Window: `hashchange`-Ereignis](/de/docs/Web/API/Window/hashchange_event)
