---
title: "Window: popstate-Ereignis"
short-title: popstate
slug: Web/API/Window/popstate_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("History API")}}

Das **`popstate`**-Ereignis der [`Window`](/de/docs/Web/API/Window)-Schnittstelle wird ausgelöst, wenn der aktive Verlaufseintrag geändert wird, während der Benutzer die Sitzungsverlaufshistorie durchsucht. Es ändert den aktuellen Verlaufseintrag hin zu dem der letzten Seite, die der Benutzer besucht hat, oder, wenn [`history.pushState()`](/de/docs/Web/API/History/pushState) verwendet wurde, um einen Eintrag zur Verlaufshistorie hinzuzufügen, wird stattdessen dieser Verlaufseintrag verwendet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("popstate", (event) => { })

onpopstate = (event) => { }
```

## Ereignistyp

Ein [`PopStateEvent`](/de/docs/Web/API/PopStateEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("PopStateEvent")}}

## Ereignis-Handler-Aliasse

Zusätzlich zur `Window`-Schnittstelle ist die Ereignis-Handler-Eigenschaft `onpopstate` auch auf den folgenden Elementen verfügbar:

- [`HTMLBodyElement`](/de/docs/Web/API/HTMLBodyElement)
- [`HTMLFrameSetElement`](/de/docs/Web/API/HTMLFrameSetElement)
- [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement)

## Der Verlauf-Stack

Wenn der aktivierte Verlaufseintrag durch einen Aufruf von [`history.pushState()`](/de/docs/Web/API/History/pushState) erstellt wurde oder durch einen Aufruf von [`history.replaceState()`](/de/docs/Web/API/History/replaceState) beeinflusst wurde, enthält die `state`-Eigenschaft des `popstate`-Ereignisses eine Kopie des Statusobjekts des Verlaufseintrags.

Diese Methoden und ihre entsprechenden Ereignisse können verwendet werden, um Daten zum Verlauf-Stack hinzuzufügen, die verwendet werden können, um eine dynamisch generierte Seite zu rekonstruieren oder den Zustand der präsentierten Inhalte zu ändern, während Sie im selben [`Document`](/de/docs/Web/API/Document) bleiben.

Beachten Sie, dass durch einfaches Aufrufen von `history.pushState()` oder `history.replaceState()` kein `popstate`-Ereignis ausgelöst wird. Das `popstate`-Ereignis wird durch eine Browser-Aktion wie einen Klick auf die Rückwärts- oder Vorwärts-Taste (oder durch Aufrufen von `history.back()` oder `history.forward()` in JavaScript) ausgelöst.

> [!NOTE]
> Wenn Sie Funktionen schreiben, die das `popstate`-Ereignis verarbeiten, ist es wichtig zu beachten, dass Eigenschaften wie `window.location` die Statusänderung bereits widerspiegeln (wenn sie die aktuelle URL betroffen hat), aber `document` möglicherweise noch nicht. Wenn das Ziel darin besteht, den Moment zu erfassen, in dem der neue Dokumentenstatus bereits vollständig vorhanden ist, sollte eine Aufrufmethode mit null Verzögerung wie [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) verwendet werden, um effektiv die innere _Callback_-Funktion, die die Verarbeitung durchführt, am Ende der Browser-Ereignisschleife zu platzieren: `window.onpopstate = () => setTimeout(doSomeThing, 0);`

## Wann popstate gesendet wird

Es ist wichtig, zuerst zu verstehen, dass Browser — um unerwünschte Popups zu bekämpfen — das `popstate`-Ereignis möglicherweise überhaupt nicht auslösen, es sei denn, die Seite wurde interagiert.

Dieser Abschnitt beschreibt die Schritte, die Browser in den Fällen befolgen, in denen sie das `popstate`-Ereignis _möglicherweise_ auslösen (d.h. in den Fällen, in denen die Seite interagiert wurde).

Wenn eine Navigation stattfindet — entweder aufgrund der Benutzeraktion der <kbd>Zurück</kbd>-Taste des Browsers oder auf andere Weise — ist das `popstate`-Ereignis gegen Ende des Prozesses, um zur neuen Position zu navigieren. Es tritt auf, nachdem die neue Position geladen (falls nötig), angezeigt, sichtbar gemacht wurde, und so weiter — nachdem das [`pageshow`](/de/docs/Web/API/Window/pageshow_event)-Ereignis gesendet wurde, aber bevor die gespeicherten Benutzerstatusinformationen wiederhergestellt und das [`hashchange`](/de/docs/Web/API/Window/hashchange_event)-Ereignis gesendet wird.

Um besser zu verstehen, wann das `popstate`-Ereignis ausgelöst wird, betrachten Sie diese vereinfachte Ereignissequenz, die auftritt, wenn sich der aktuelle Verlaufseintrag aufgrund der Benutzerinteraktion mit der Seite oder des programmatischen Durchlaufens des Verlaufs ändert. Hier ändert der Übergang den aktuellen Verlaufseintrag zu einem, den wir als **neuer-Eintrag** bezeichnen. Der Sitzungshistorieeintrag der aktuellen Seite wird als **aktueller-Eintrag** bezeichnet.

1. Wenn **neuer-Eintrag** derzeit kein vorhandenes [`Document`](/de/docs/Web/API/Document) enthält, holen Sie den Inhalt und erstellen Sie das `Document`, bevor Sie fortfahren. Dadurch werden schließlich Ereignisse wie [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event) und [`load`](/de/docs/Web/API/Window/load_event) an das [`Window`](/de/docs/Web/API/Window), das das Dokument enthält, gesendet, aber die nachfolgenden Schritte werden währenddessen weiterhin ausgeführt.
2. Wenn der Titel von **aktueller-Eintrag** nicht mit einer der Methoden der History-API ([`pushState()`](/de/docs/Web/API/History/pushState) oder [`replaceState()`](/de/docs/Web/API/History/replaceState)) gesetzt wurde, setzen Sie den Titel des Eintrags auf den von seinem [`document.title`](/de/docs/Web/API/Document/title)-Attribut zurückgegebenen String.
3. Wenn der Browser Zustandsinformationen speichern möchte, die mit **aktueller-Eintrag** gespeichert werden sollen, bevor er davon abweicht, tut er dies. Der Eintrag wird jetzt als "persistierter Benutzerzustand" bezeichnet. Diese Informationen, die der Browser dem Verlaufssitzungseintrag hinzufügen kann, können beispielsweise die Scrollposition des Dokuments, die Werte der Formulareingaben und dergleichen umfassen.
4. Wenn **neuer-Eintrag** ein anderes `Document`-Objekt als **aktueller-Eintrag** hat, wird der Browsing-Kontext aktualisiert, sodass seine [`document`](/de/docs/Web/API/Window/document)-Eigenschaft auf das Dokument verweist, auf das **neuer-Eintrag** verweist, und der Kontextname wird aktualisiert, um mit dem Kontextnamen des nun aktuellen Dokuments zu übereinstimmen.
5. Jeder Formulareingabe innerhalb des [`Document`](/de/docs/Web/API/Document) von **neuer-Eintrag**, der [`autocomplete`](/de/docs/Web/HTML/Reference/Elements/input#autocomplete) mit seinem autofill Feldnamen auf `off` konfiguriert hat, wird zurückgesetzt. Siehe [Das HTML autocomplete-Attribut](/de/docs/Web/HTML/Reference/Attributes/autocomplete) für mehr über die autocomplete-Feldnamen und wie autocomplete funktioniert.
6. Wenn das Dokument von **neuer-Eintrag** bereits komplett geladen und bereit ist — das heißt, sein [`readyState`](/de/docs/Web/API/Document/readyState) ist `complete` — und das Dokument noch nicht sichtbar ist, wird es sichtbar gemacht und das [`pageshow`](/de/docs/Web/API/Window/pageshow_event)-Ereignis wird an das Dokument mit dem [`PageTransitionEvent`](/de/docs/Web/API/PageTransitionEvent)'s [`persisted`](/de/docs/Web/API/PageTransitionEvent/persisted)-Attribut auf `true` gesetzt gesendet.
7. Die [`URL`](/de/docs/Web/API/Document/URL) des Dokuments wird auf die von **neuer-Eintrag** gesetzt.
8. Wenn die Verlaufstraversierung mit Ersetzung durchgeführt wird, wird der Eintrag unmittelbar vor dem Ziel-Eintrag (unter Berücksichtigung des `delta`-Parameters bei Methoden wie [`go()`](/de/docs/Web/API/History/go)) aus dem Verlauf-Stack entfernt.
9. Wenn **neuer-Eintrag** keinen persistenten Benutzerzustand hat und das Fragment seiner URL nicht `null` ist, wird das Dokument zu diesem Fragment gescrollt.
10. Als nächstes wird **aktueller-Eintrag** auf **neuer-Eintrag** gesetzt. Der Ziel-Eintrag wird nun als aktuell betrachtet.
11. Wenn **neuer-Eintrag** serialisierte Zustandsinformationen gespeichert hat, werden diese Informationen in [`History.state`](/de/docs/Web/API/History/state) deserialisiert; andernfalls ist `state` `null`.
12. Wenn sich der Wert von `state` geändert hat, wird das `popstate`-Ereignis an das Dokument gesendet.
13. Jeglicher persistentierte Benutzerzustand wird wiederhergestellt, sofern der Browser dies wünscht.
14. Wenn die ursprünglichen und neuen Einträge dasselbe Dokument geteilt haben, aber unterschiedliche Fragmente in ihren URLs hatten, senden Sie das [`hashchange`](/de/docs/Web/API/Window/hashchange_event)-Ereignis an das Fenster.

Wie Sie sehen, ist das `popstate`-Ereignis fast das Letzte, was im Prozess des Navigierens von Seiten auf diese Weise getan wird.

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

Dasselbe Beispiel mit der `onpopstate`-Ereignis-Handler-Eigenschaft:

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

Beachten Sie, dass auch wenn der ursprüngliche Verlaufseintrag (für `http://example.com/example.html`) kein Statusobjekt damit verbunden hat, ein `popstate`-Ereignis dennoch ausgelöst wird, wenn wir diesen Eintrag nach dem zweiten Aufruf von `history.back()` aktivieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Manipulation des Browser-Verlaufs (die History API)](/de/docs/Web/API/History_API)
- [Window: `hashchange`-Ereignis](/de/docs/Web/API/Window/hashchange_event)
