---
title: "Window: popstate-Ereignis"
short-title: popstate
slug: Web/API/Window/popstate_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("History API")}}

Das **`popstate`**-Ereignis der [`Window`](/de/docs/Web/API/Window)-Schnittstelle wird ausgelöst, wenn der aktive Verlaufseintrag geändert wird, während der Benutzer durch den Sitzungsverlauf navigiert. Es ändert den aktuellen Verlaufseintrag auf die letzte Seite, die der Benutzer besucht hat, oder, wenn [`history.pushState()`](/de/docs/Web/API/History/pushState) verwendet wurde, um einen Verlaufseintrag zum Verlausstapel hinzuzufügen, wird dieser Eintrag stattdessen verwendet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignisbehandlungs-Eigenschaft.

```js-nolint
addEventListener("popstate", (event) => { })

onpopstate = (event) => { }
```

## Ereignistyp

Ein [`PopStateEvent`](/de/docs/Web/API/PopStateEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("PopStateEvent")}}

## Ereigniseigenschaften

- [`PopStateEvent.state`](/de/docs/Web/API/PopStateEvent/state) {{ReadOnlyInline}}
  - : Gibt eine Kopie der Informationen zurück, die `pushState()` oder `replaceState()` übergeben wurden.

## Ereignisbehandlungs-Aliase

Zusätzlich zur `Window`-Schnittstelle ist die Ereignisbehandlungs-Eigenschaft `onpopstate` auch auf folgenden Elementen verfügbar:

- [`HTMLBodyElement`](/de/docs/Web/API/HTMLBodyElement)
- [`HTMLFrameSetElement`](/de/docs/Web/API/HTMLFrameSetElement)
- [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement)

## Der Verlaufstapel

Wenn der aktivierte Verlaufseintrag durch einen Aufruf von [`history.pushState()`](/de/docs/Web/API/History/pushState) erstellt wurde oder durch einen Aufruf von [`history.replaceState()`](/de/docs/Web/API/History/replaceState) beeinflusst wurde, enthält die `state`-Eigenschaft des `popstate`-Ereignisses eine Kopie des Zustandsobjekts des Verlaufseintrags.

Diese Methoden und ihre entsprechenden Ereignisse können verwendet werden, um Daten zum Verlaufstapel hinzuzufügen, die zum Wiederherstellen einer dynamisch generierten Seite oder zur Veränderung des präsentierten Inhaltszustands verwendet werden können, während dasselbe [`Document`](/de/docs/Web/API/Document) beibehalten wird.

Beachten Sie, dass das bloße Aufrufen von `history.pushState()` oder `history.replaceState()` kein `popstate`-Ereignis auslöst. Das `popstate`-Ereignis wird durch eine Browseraktion wie einen Klick auf die Zurück- oder Vorwärtstaste ausgelöst (oder durch einen JavaScript-Aufruf von `history.back()` oder `history.forward()`).

Browser handhaben das `popstate`-Ereignis bei Seitenladevorgängen unterschiedlich. Chrome (vor Version 34) und Safari lösen immer ein `popstate`-Ereignis beim Laden der Seite aus, Firefox jedoch nicht.

> [!NOTE]
> Beim Schreiben von Funktionen, die das `popstate`-Ereignis verarbeiten, ist es wichtig zu beachten, dass Eigenschaften wie `window.location` bereits die Zustandsänderung widerspiegeln (wenn sie die aktuelle URL beeinflusst hat), das `document` jedoch möglicherweise noch nicht. Wenn das Ziel darin besteht, den Moment einzufangen, wenn der neue Dokumentenzustand vollständig vorhanden ist, sollte eine `setTimeout()`-Methode mit Null-Verzögerung verwendet werden, um die innere _Callback_-Funktion, die die Verarbeitung durchführt, effektiv an das Ende der Browsereventschleife zu setzen: `window.onpopstate = () => setTimeout(doSomeThing, 0);`

## Wann popstate gesendet wird

Es ist wichtig, zunächst zu verstehen, dass Browser – um unerwünschte Pop-ups zu bekämpfen – das `popstate`-Ereignis möglicherweise überhaupt nicht auslösen, es sei denn, die Seite wurde interaktiviert.

Dieser Abschnitt beschreibt die Schritte, die Browser in den Fällen befolgen, in denen sie das `popstate`-Ereignis _potenziell_ auslösen (das heißt, in den Fällen, in denen die Seite interaktiviert wurde).

Wenn eine Navigation erfolgt – entweder durch den Benutzer, der den <kbd>Zurück</kbd>-Button des Browsers auslöst oder auf andere Weise – befindet sich das `popstate`-Ereignis fast am Ende des Prozesses, um zur neuen Position zu navigieren. Es tritt auf, nachdem der neue Standort geladen (falls erforderlich), angezeigt, sichtbar gemacht und so weiter wurde – nach dem [`pageshow`](/de/docs/Web/API/Window/pageshow_event)-Ereignis, aber bevor die gespeicherten Benutzerdaten wiederhergestellt und das [`hashchange`](/de/docs/Web/API/Window/hashchange_event)-Ereignis gesendet werden.

Um den Zeitpunkt des `popstate`-Ereignisses besser zu verstehen, überlegen Sie sich diese vereinfachte Abfolge von Ereignissen, die auftritt, wenn der aktuelle Verlaufseintrag aufgrund der Navigation des Benutzers auf der Website oder der programmatischen Navigation verändert wird. Hier ändert sich der Verlaufseintrag zu einem, den wir als **new-entry** bezeichnen werden. Der Verlaufseintrag des aktuellen Seitenverlaufs wird als **current-entry** bezeichnet.

1. Wenn **new-entry** derzeit kein vorhandenes [`Document`](/de/docs/Web/API/Document) enthält, holen Sie den Inhalt und erstellen das `Document`, bevor Sie fortfahren. Dies wird schließlich Ereignisse wie [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event) und [`load`](/de/docs/Web/API/Window/load_event) an das [`Window`](/de/docs/Web/API/Window) senden, das das Dokument enthält, aber die folgenden Schritte werden währenddessen fortgesetzt.
2. Wenn der Titel von **current-entry** nicht mit einer der Methoden der History API ([`pushState()`](/de/docs/Web/API/History/pushState) oder [`replaceState()`](/de/docs/Web/API/History/replaceState)) gesetzt wurde, setze den Titel des Eintrags auf den durch das Attribut [`document.title`](/de/docs/Web/API/Document/title) zurückgegebenen String.
3. Wenn der Browser Statusinformationen speichern möchte, die vor dem Navigieren weg von **current-entry** bei diesem verbleiben, tut er dies. Der Eintrag wird nun als „persistierter Benutzerstatus“ beschrieben. Zu den Informationen, die der Browser zum Verlaufssitzungseintrag hinzufügen könnte, gehören beispielsweise die Scrollposition des Dokuments, die Werte von Formulareingaben und ähnliche Daten.
4. Wenn **new-entry** ein anderes `Document`-Objekt als **current-entry** hat, wird der Browsingkontext so aktualisiert, dass sich seine [`document`](/de/docs/Web/API/Window/document)-Eigenschaft auf das von **new-entry** referenzierte Dokument bezieht, und der Name des Kontexts wird aktualisiert, um mit dem Kontextnamen des nun aktuellen Dokuments übereinzustimmen.
5. Jeder Formularkontroll innerhalb von **new-entry**'s [`Document`](/de/docs/Web/API/Document), die [`autocomplete`](/de/docs/Web/HTML/Reference/Elements/input#autocomplete) konfiguriert hat, mit seinem Autofill-Feld benannt auf `off` gesetzt zu sein, wird zurückgesetzt. Für mehr über die Autocomplete-Feldnamen und wie Autocomplete funktioniert, siehe [Das HTML autocomplete Attribut](/de/docs/Web/HTML/Reference/Attributes/autocomplete).
6. Wenn das Dokument von **new-entry** bereits vollständig geladen und bereit ist – das heißt, sein [`readyState`](/de/docs/Web/API/Document/readyState) ist `complete` – und das Dokument nicht bereits sichtbar ist, wird es sichtbar gemacht und das [`pageshow`](/de/docs/Web/API/Window/pageshow_event)-Ereignis wird an dem Dokument ausgelöst, mit dem [`PageTransitionEvent`](/de/docs/Web/API/PageTransitionEvent)'s [`persisted`](/de/docs/Web/API/PageTransitionEvent/persisted)-Attribut auf `true` gesetzt.
7. Die [`URL`](/de/docs/Web/API/Document/URL) des Dokuments wird auf die von **new-entry** gesetzt.
8. Wenn die Verlaufsmethode mit aktivierter Ersetzung durchgeführt wird, wird der Eintrag unmittelbar vor dem Ziel-Eintrag (unter Berücksichtigung des `delta`-Parameters der Methoden wie [`go()`](/de/docs/Web/API/History/go)) aus dem Verlaufstapel entfernt.
9. Wenn **new-entry** keinen persistierten Benutzerstatus hat und sein URL-Fragment nicht `null` ist, wird das Dokument zu diesem Fragment gescrollt.
10. Als Nächstes wird **current-entry** auf **new-entry** gesetzt. Der Zieleintrag wird nun als aktuell angesehen.
11. Wenn **new-entry** serialisierte Statusinformationen mit sich gespeichert hat, werden diese in [`History.state`](/de/docs/Web/API/History/state) deserialisiert; andernfalls ist der `state` `null`.
12. Wenn sich der Wert des `state` geändert hat, wird das `popstate`-Ereignis an das Dokument gesendet.
13. Wenn der Browser dies wählt, wird ein persistierter Benutzerstatus wiederhergestellt.
14. Wenn die ursprünglichen und neuen Einträge dasselbe Dokument teilten, aber unterschiedliche Fragmente in ihren URLs hatten, wird das [`hashchange`](/de/docs/Web/API/Window/hashchange_event)-Ereignis an das Fenster gesendet.

Wie Sie sehen, ist das `popstate`-Ereignis fast das Letzte, was im Prozess der Seiten-Navigation auf diese Weise getan wird.

## Beispiele

Eine Seite bei `http://example.com/example.html`, die den folgenden Code ausführt, wird die angegebenen Protokolle generieren:

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

Dasselbe Beispiel unter Verwendung der `onpopstate`-Ereignishandlereigenschaft:

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

Beachten Sie, dass, obwohl der ursprüngliche Verlaufseintrag (für `http://example.com/example.html`) kein Zustandsobjekt zugeordnet hat, trotzdem ein `popstate`-Ereignis ausgelöst wird, wenn wir diesen Eintrag nach dem zweiten Aufruf von `history.back()` aktivieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Manipulieren des Browserverlaufs (die History API)](/de/docs/Web/API/History_API)
- [Window: `hashchange`-Ereignis](/de/docs/Web/API/Window/hashchange_event)
