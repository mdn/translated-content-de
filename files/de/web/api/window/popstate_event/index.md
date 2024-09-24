---
title: "Fenster: popstate-Ereignis"
short-title: popstate
slug: Web/API/Window/popstate_event
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef("History API")}}

Das **`popstate`**-Ereignis der {{domxref("Window")}}-Schnittstelle wird ausgelöst, wenn sich der aktive Eintrag im Verlauf ändert, während der Benutzer in der Sitzungsverlauf navigiert. Es wechselt zum aktuellen Verlaufseintrag der letzten vom Benutzer besuchten Seite oder, wenn {{domxref("history.pushState()")}} verwendet wurde, um einen Verlaufseintrag zum Verlaufsstapel hinzuzufügen, wird stattdessen dieser Verlaufseintrag verwendet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}} oder legen Sie eine Ereignis-Handler-Eigenschaft fest.

```js
addEventListener("popstate", (event) => {});
onpopstate = (event) => {};
```

## Ereignistyp

Ein {{domxref("PopStateEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("PopStateEvent")}}

## Ereigniseigenschaften

- {{domxref("PopStateEvent.state")}} {{ReadOnlyInline}}
  - : Gibt eine Kopie der Informationen zurück, die `pushState()` oder `replaceState()` bereitgestellt wurden.

## Ereignis-Handler-Aliase

Zusätzlich zur `Window`-Schnittstelle ist die Ereignis-Handler-Eigenschaft `onpopstate` auch auf den folgenden Elementen verfügbar:

- {{domxref("HTMLBodyElement")}}
- {{domxref("HTMLFrameSetElement")}}
- {{domxref("SVGSVGElement")}}

## Der Verlauf-Stapel

Wenn der aktivierte Verlaufseintrag durch einen Aufruf von [`history.pushState()`](/de/docs/Web/API/History/pushState) erstellt wurde oder durch einen Aufruf von [`history.replaceState()`](/de/docs/Web/API/History/replaceState) beeinflusst wurde, enthält die `state`-Eigenschaft des `popstate`-Ereignisses eine Kopie des Zustand-Objekts des Verlaufseintrags.

Diese Methoden und ihre entsprechenden Ereignisse können dazu verwendet werden, Daten zum Verlauf-Stapel hinzuzufügen, die zum Rekonstruieren einer dynamisch generierten Seite verwendet werden können, oder um den Zustand des präsentierten Inhalts zu ändern, während man im selben {{domxref("Document")}} bleibt.

Beachten Sie, dass das bloße Aufrufen von `history.pushState()` oder `history.replaceState()` kein `popstate`-Ereignis auslöst. Das `popstate`-Ereignis wird durch eine Browser-Aktion wie einen Klick auf die Schaltfläche Zurück oder Vorwärts (oder das Aufrufen von `history.back()` oder `history.forward()` in JavaScript) ausgelöst.

Browser neigen dazu, das `popstate`-Ereignis bei der Seitenladung unterschiedlich zu behandeln. Chrome (vor Version 34) und Safari senden immer ein `popstate`-Ereignis bei der Seitenladung, aber Firefox nicht.

> [!NOTE]
> Bei der Erstellung von Funktionen, die `popstate`-Ereignisse verarbeiten, ist es wichtig zu berücksichtigen, dass Eigenschaften wie `window.location` bereits den Zustandswechsel widerspiegeln (wenn sie die aktuelle URL betroffen hat), `document` jedoch möglicherweise noch nicht. Wenn es das Ziel ist, den Moment zu erfassen, wenn der neue Dokumentenzustand bereits vollständig vorliegt, sollte eine Methode mit Null-Verzögerung {{domxref("setTimeout()")}} aufgerufen werden, um ihre innere _Callback_-Funktion, die die Verarbeitung vornimmt, effektiv am Ende der Browser-Ereignisschleife zu platzieren: `window.onpopstate = () => setTimeout(doSomeThing, 0);`

## Wann popstate gesendet wird

Es ist wichtig, zunächst zu verstehen, dass – um unerwünschte Pop-ups zu vermeiden – Browser das `popstate`-Ereignis möglicherweise überhaupt nicht auslösen, es sei denn, die Seite wurde interagiert.

Dieser Abschnitt beschreibt die Schritte, die Browser in den Fällen befolgen, in denen sie das `popstate`-Ereignis möglicherweise auslösen (d.h. in den Fällen, in denen mit der Seite interagiert wurde).

Wenn eine Navigation erfolgt – entweder durch das Auslösen der <kbd>Zurück</kbd>-Schaltfläche des Browsers durch den Benutzer oder auf andere Weise – ist das `popstate`-Ereignis fast am Ende des Prozesses, um zur neuen Position zu navigieren. Es passiert, nachdem die neue Position geladen (falls erforderlich), angezeigt, sichtbar gemacht usw. wurde – nachdem das {{domxref("Window.pageshow_event", "pageshow")}}-Ereignis gesendet wurde, aber bevor die persistierten Benutzerdaten wiederhergestellt und das {{domxref("Window.hashchange_event", "hashchange")}}-Ereignis gesendet werden.

Um besser zu verstehen, wann das `popstate`-Ereignis ausgelöst wird, beachten Sie diese vereinfachte Abfolge von Ereignissen, die eintritt, wenn der aktuelle Verlaufseintrag sich entweder aufgrund der Naviagation des Benutzers auf der Site oder der programmgesteuerten Verlauf-Durchquerung ändert. Hier ändert der Übergang den aktuellen Verlaufseintrag auf einen, den wir als **neuer-Eintrag** bezeichnen werden. Der aktuelle Sitzungsverlauf-Stapel-Eintrag der Seite wird als **aktueller-Eintrag** bezeichnet.

1. Wenn **neuer-Eintrag** derzeit kein bestehendes {{domxref("Document")}} enthält, holen Sie den Inhalt und erstellen Sie sein `Document`, bevor Sie fortfahren. Dies wird schließlich Ereignisse wie {{domxref("Document.DOMContentLoaded_event", "DOMContentLoaded")}} und {{domxref("Window.load_event", "load")}} an das {{domxref("Window")}}, das das Dokument enthält, senden, aber die folgenden Schritte werden währenddessen fortgeführt.
2. Wenn der Titel des **aktuellen-Eintrags** nicht mit einer der Methoden der History-API ({{domxref("History.pushState", "pushState()")}} oder {{domxref("History.replaceState", "replaceState()")}}) gesetzt wurde, setzen Sie den Titel des Eintrags auf den durch sein {{domxref("document.title")}}-Attribut zurückgegebenen String.
3. Wenn der Browser Benutzerdaten speichern möchte, die mit dem **aktuellen-Eintrag** gespeichert werden sollen, bevor er ihn verlässt, tut er dies. Der Eintrag wird nun gesagt, "persistierte Benutzerdaten" zu haben. Diese Informationen, die der Browser möglicherweise dem Verlaufs-Session-Eintrag hinzufügt, können beispielsweise die Scrollposition des Dokuments, die Werte von Formulareingaben und andere solche Daten umfassen.
4. Wenn **neuer-Eintrag** ein anderes `Document`-Objekt als **aktueller-Eintrag** hat, wird der Browsing-Kontext so aktualisiert, dass seine {{domxref("Window.document", "document")}}-Eigenschaft auf das Dokument verweist, das von **neuer-Eintrag** referenziert wird, und der Kontextname wird aktualisiert, um mit dem Kontextnamen des nun aktuellen Dokuments übereinzustimmen.
5. Jedes Formularelement innerhalb des {{domxref("Document")}} von **neuer-Eintrag**, das [`autocomplete`](/de/docs/Web/HTML/Element/input#autocomplete) mit seinem Autofill-Feldnamen auf `off` konfiguriert hat, wird zurückgesetzt. Siehe [Das HTML-Autocomplete-Attribut](/de/docs/Web/HTML/Attributes/autocomplete) für mehr über die Autocomplete-Feldnamen und wie Autocomplete funktioniert.
6. Wenn das Dokument von **neuer-Eintrag** bereits vollständig geladen und bereit ist – das heißt, sein {{domxref("Document.readyState", "readyState")}} `complete` ist – und das Dokument noch nicht sichtbar ist, wird es sichtbar gemacht und das {{domxref("Window.pageshow_event", "pageshow")}}-Ereignis wird beim Dokument mit dem {{domxref("PageTransitionEvent")}}'s {{domxref("PageTransitionEvent.persisted", "persisted")}}-Attribut auf `true` gesetzt ausgelöst.
7. Die {{domxref("Document.URL", "URL")}} des Dokuments wird auf die von **neuer-Eintrag** gesetzt.
8. Wenn das Durchlaufen des Verlaufs mit aktivierter Ersetzung durchgeführt wird, wird der Eintrag unmittelbar vor dem Ziel-Eintrag (unter Berücksichtigung des `delta`-Parameters bei Methoden wie {{domxref("History.go", "go()")}}) aus dem Verlauf-Stapel entfernt.
9. Wenn **neuer-Eintrag** keine persistierten Benutzerdaten hat und das Fragment seiner URL nicht `null` ist, wird das Dokument zu diesem Fragment gescrollt.
10. Als nächstes wird **aktueller-Eintrag** auf **neuer-Eintrag** gesetzt. Der Ziel-Eintrag wird nun als aktuell angesehen.
11. Wenn **neuer-Eintrag** serialisierte Zustandsinformationen gespeichert hat, werden diese Informationen in {{domxref("History.state")}} deserialisiert; andernfalls ist der `state`-Wert `null`.
12. Wenn sich der Wert von `state` geändert hat, wird das `popstate`-Ereignis an das Dokument gesendet.
13. Jeglichen persistierten Benutzerdaten werden wiederhergestellt, falls der Browser dies tun möchte.
14. Wenn die ursprünglichen und neuen Einträge dasselbe Dokument teilten, aber unterschiedliche Fragmente in ihren URLs hatten, wird das {{domxref("Window.hashchange_event", "hashchange")}}-Ereignis an das Fenster gesendet.

Wie Sie sehen können, ist das `popstate`-Ereignis so ziemlich das Letzte, was im Prozess der Navigation von Seiten auf diese Weise ausgeführt wird.

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
history.back(); // Protokolliert "location: http://example.com/example.html?page=1, state: {"page":1}"
history.back(); // Protokolliert "location: http://example.com/example.html, state: null"
history.go(2); // Protokolliert "location: http://example.com/example.html?page=3, state: {"page":3}"
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
history.back(); // Protokolliert "location: http://example.com/example.html?page=1, state: {"page":1}"
history.back(); // Protokolliert "location: http://example.com/example.html, state: null"
history.go(2); // Protokolliert "location: http://example.com/example.html?page=3, state: {"page":3}"
```

Beachten Sie, dass, obwohl der ursprüngliche Verlaufseintrag (für `http://example.com/example.html`) kein mit ihm assoziiertes Zustandsobjekt hat, ein `popstate`-Ereignis dennoch ausgelöst wird, wenn wir diesen Eintrag nach dem zweiten Aufruf von `history.back()` aktivieren.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Manipulation des Browserverlaufs (die History API)](/de/docs/Web/API/History_API)
- [Fenster: `hashchange`-Ereignis](/de/docs/Web/API/Window/hashchange_event)
