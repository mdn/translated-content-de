---
title: "Window: popstate Ereignis"
short-title: popstate
slug: Web/API/Window/popstate_event
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef("History API")}}

Das **`popstate`** Ereignis der [`Window`](/de/docs/Web/API/Window) Schnittstelle wird ausgelöst, wenn der aktive Verlaufseintrag bei der Navigation durch die Sitzungsverlauf des Benutzers ändert. Es ändert den aktuellen Verlaufseintrag zu dem der letzten besuchten Seite des Benutzers oder, wenn [`history.pushState()`](/de/docs/Web/API/History/pushState) verwendet wurde, um einen Verlaufseintrag zum Verlausstapel hinzuzufügen, wird dieser Verlaufseintrag stattdessen verwendet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandler-Eigenschaft.

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

Zusätzlich zur `Window` Schnittstelle ist die Ereignishandler-Eigenschaft `onpopstate` auch auf den folgenden Elementen verfügbar:

- [`HTMLBodyElement`](/de/docs/Web/API/HTMLBodyElement)
- [`HTMLFrameSetElement`](/de/docs/Web/API/HTMLFrameSetElement)
- [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement)

## Der Verlaufstapel

Wenn der zu aktivierende Verlaufseintrag durch einen Aufruf von [`history.pushState()`](/de/docs/Web/API/History/pushState) erstellt wurde oder von einem Aufruf von [`history.replaceState()`](/de/docs/Web/API/History/replaceState) betroffen war, enthält die `state` Eigenschaft des `popstate` Ereignisses eine Kopie des Zustand-Objekts des Verlaufseintrags.

Diese Methoden und ihre entsprechenden Ereignisse können verwendet werden, um Daten zum Verlaufsstapel hinzuzufügen, die zum Rekonstruieren einer dynamisch generierten Seite verwendet werden können, oder um den Zustand der präsentierten Inhalte zu ändern, während Sie sich auf derselben [`Document`](/de/docs/Web/API/Document) befinden.

Beachten Sie, dass allein das Aufrufen von `history.pushState()` oder `history.replaceState()` kein `popstate` Ereignis auslöst. Das `popstate` Ereignis wird durch eine Aktion im Browser wie das Klicken auf die Zurück- oder Vorwärts-Schaltfläche (oder das Aufrufen von `history.back()` oder `history.forward()` in JavaScript) ausgelöst.

Browser neigen dazu, das `popstate` Ereignis beim Laden der Seite unterschiedlich zu behandeln. Chrome (vor Version 34) und Safari senden immer ein `popstate` Ereignis beim Laden der Seite, aber Firefox tut dies nicht.

> [!NOTE]
> Beim Schreiben von Funktionen, die das `popstate` Ereignis verarbeiten, ist es wichtig zu berücksichtigen, dass Eigenschaften wie `window.location` bereits die Zustandsänderung widerspiegeln (falls sie die aktuelle URL betroffen hat), `document` jedoch möglicherweise noch nicht. Wenn das Ziel darin besteht, den Moment zu erfassen, in dem der neue Dokumentenzustand vollständig implementiert ist, sollte eine Methode mit `setTimeout()` ohne Verzögerung verwendet werden, um die _callback_ Funktion, die die Verarbeitung durchführt, am Ende des Browsereigniszyklus zu platzieren: `window.onpopstate = () => setTimeout(doSomeThing, 0);`

## Wann popstate gesendet wird

Es ist wichtig zu verstehen, dass –um unerwünschte Pop-ups zu bekämpfen– Browser das `popstate` Ereignis möglicherweise überhaupt nicht auslösen, es sei denn, die Seite wurde interagiert.

Dieser Abschnitt beschreibt die Schritte, die Browser in den Fällen befolgen, in denen sie potenziell das `popstate` Ereignis auslösen (also in den Fällen, in denen mit der Seite interagiert wurde).

Wenn eine Navigation stattfindet – entweder durch das Klicken auf die <kbd>Zurück</kbd>-Schaltfläche des Browsers oder anderweitig – befindet sich das `popstate` Ereignis nahezu am Ende des Prozesses, um zur neuen Position zu navigieren. Es tritt auf, nachdem der neue Ort geladen (falls notwendig), angezeigt, sichtbar gemacht und so weiter wurde – nachdem das [`pageshow`](/de/docs/Web/API/Window/pageshow_event) Ereignis gesendet, aber bevor die "persisted user state" Informationen wiederhergestellt und das [`hashchange`](/de/docs/Web/API/Window/hashchange_event) Ereignis gesendet werden.

Um besser zu verstehen, wann das `popstate` Ereignis ausgelöst wird, betrachten Sie diese vereinfachte Abfolge von Ereignissen, die auftreten, wenn der aktuelle Verlaufseintrag entweder durch die Navigation des Benutzers auf der Website oder das programmgesteuerte Durchlaufen des Verlaufs geändert wird. Hierbei ändert sich der aktuelle Verlaufseintrag zu einem, den wir als **new-entry** referenzieren. Der aktuelle Sitzungsverlaufseintrag der Seite wird als **current-entry** bezeichnet.

1. Wenn **new-entry** derzeit kein vorhandenes [`Document`](/de/docs/Web/API/Document) enthält, holen Sie den Inhalt ab und erstellen Sie dessen `Document`, bevor Sie fortfahren. Dies wird schließlich Ereignisse wie [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event) und [`load`](/de/docs/Web/API/Window/load_event) an das [`Window`](/de/docs/Web/API/Window) senden, das das Dokument enthält, aber die untenstehenden Schritte werden währenddessen weiterhin ausgeführt.
2. Wenn der Titel von **current-entry** nicht mit einer der Methoden der History API ([`pushState()`](/de/docs/Web/API/History/pushState) oder [`replaceState()`](/de/docs/Web/API/History/replaceState)) festgelegt wurde, setzen Sie den Titel des Eintrags auf den durch das Attribut [`document.title`](/de/docs/Web/API/Document/title) zurückgegebenen String.
3. Wenn der Browser Zustandsinformationen speichern möchte, bevor er **current-entry** verlässt, speichert er sie. Der Eintrag hat nun "persisted user state." Diese Informationen, die der Browser dem Sitzungsverlaufseintrag hinzufügt, können zum Beispiel die Bildlaufposition des Dokuments, die Werte von Formulareingaben und andere solche Daten umfassen.
4. Wenn **new-entry** ein anderes `Document`-Objekt als **current-entry** hat, wird der Browsing-Kontext aktualisiert, sodass seine [`document`](/de/docs/Web/API/Window/document) Eigenschaft auf das von **new-entry** referenzierte Dokument verweist, und der Kontextname wird an den Kontextnamen des jetzt aktuellen Dokuments angepasst.
5. Jedes Formularelement innerhalb des [`Document`](/de/docs/Web/API/Document) von **new-entry**, welches [`autocomplete`](/de/docs/Web/HTML/Element/input#autocomplete) mit auf `off` gesetztem autofill-Feldnamen konfiguriert hat, wird zurückgesetzt. Siehe [Das HTML autocomplete Attribut](/de/docs/Web/HTML/Attributes/autocomplete) für mehr Informationen über autocomplete Feldnamen und wie autocomplete funktioniert.
6. Wenn das Dokument von **new-entry** bereits vollständig geladen und bereit ist - das heißt, dessen [`readyState`](/de/docs/Web/API/Document/readyState) `complete` ist - und das Dokument nicht schon sichtbar ist, wird es sichtbar gemacht und das [`pageshow`](/de/docs/Web/API/Window/pageshow_event) Ereignis wird mit dem [`PageTransitionEvent`](/de/docs/Web/API/PageTransitionEvent) und dessen [`persisted`](/de/docs/Web/API/PageTransitionEvent/persisted) Attribut auf `true` gesetzt, an das Dokument gesendet.
7. Der [`URL`](/de/docs/Web/API/Document/URL) des Dokuments wird auf die von **new-entry** gesetzt.
8. Wenn das Durchlaufen des Verlaufs mit aktivierter Ersetzung durchgeführt wird, wird der Eintrag unmittelbar vor dem Ziel-Eintrag (unter Berücksichtigung des `delta` Parameters bei Methoden wie [`go()`](/de/docs/Web/API/History/go)) aus dem Verlauf entfernt.
9. Wenn **new-entry** keinen "persisted user state" hat und das Fragment der URL nicht `null` ist, wird zum Fragment des Dokuments gescrollt.
10. Als nächstes wird **current-entry** auf **new-entry** gesetzt. Der Ziel-Eintrag wird jetzt als aktuell angesehen.
11. Wenn **new-entry** serialisierte Zustandsinformationen gespeichert hatte, werden diese Informationen in [`History.state`](/de/docs/Web/API/History/state) deserialisiert, andernfalls ist der `state` `null`.
12. Wenn sich der Wert von `state` geändert hat, wird das `popstate` Ereignis an das Dokument gesendet.
13. Alle ggf. "persisted user state" Informationen werden wiederhergestellt, falls der Browser dies tun möchte.
14. Wenn die ursprünglichen und neuen Einträge dasselbe Dokument teilen, aber unterschiedliche Fragmente in ihren URLs hatten, wird das [`hashchange`](/de/docs/Web/API/Window/hashchange_event) Ereignis an das Fenster gesendet.

Wie Sie sehen können, ist das `popstate` Ereignis nahezu das letzte, was im Prozess des Navigierens zwischen Seiten auf diese Weise erledigt wird.

## Beispiele

Eine Seite unter `http://example.com/example.html`, die den folgenden Code ausführt, wird Protokolle wie angegeben generieren:

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

Dasselbe Beispiel unter Verwendung der `onpopstate` Ereignishandler-Eigenschaft:

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

Beachten Sie, dass auch wenn der ursprüngliche Verlaufseintrag (für `http://example.com/example.html`) kein Zustandsobjekt damit verbunden hat, dennoch ein `popstate` Ereignis ausgelöst wird, wenn wir diesen Eintrag nach dem zweiten Aufruf von `history.back()` aktivieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Manipulieren des Browser-Verlaufs (die History API)](/de/docs/Web/API/History_API)
- [Window: `hashchange` Ereignis](/de/docs/Web/API/Window/hashchange_event)
