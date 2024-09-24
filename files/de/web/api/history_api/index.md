---
title: History-API
slug: Web/API/History_API
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{DefaultAPISidebar("History API")}}

Die **History-API** bietet Zugriff auf den Sitzungsverlauf des Browsers (nicht zu verwechseln mit [WebExtensions History](/de/docs/Mozilla/Add-ons/WebExtensions/API/history)) über das globale Objekt {{DOMxRef("Window.history","history")}}. Sie stellt nützliche Methoden und Eigenschaften zur Verfügung, mit denen Sie vorwärts und rückwärts durch den Verlauf des Benutzers navigieren und den Inhalt des Verlaufstapels manipulieren können.

> [!NOTE]
> Diese API ist nur im Hauptthread verfügbar ({{domxref("Window")}}). Sie kann in {{domxref("Worker")}}- oder {{domxref("Worklet")}}-Kontexten nicht aufgerufen werden.

## Konzepte und Nutzung

Das Navigieren durch den Verlauf des Benutzers erfolgt mithilfe der Methoden {{DOMxRef("History.back","back()")}}, {{DOMxRef("History.forward","forward()")}} und {{DOMxRef("History.go","go()")}}.

### Vorwärts- und Rückwärtsnavigation

Um rückwärts durch den Verlauf zu navigieren:

```js
history.back();
```

Dies funktioniert genau so, als ob der Benutzer auf die <kbd><strong>Zurück</strong></kbd>-Schaltfläche in der Browser-Symbolleiste klickt.

Ebenso können Sie vorwärts navigieren (als ob der Benutzer auf die <kbd><strong>Vorwärts</strong></kbd>-Schaltfläche klickt), so:

```js
history.forward();
```

### Navigation zu einem bestimmten Punkt im Verlauf

Sie können die Methode {{DOMxRef("History.go","go()")}} verwenden, um eine bestimmte Seite aus dem Sitzungsverlauf zu laden, die durch ihre relative Position zur aktuellen Seite identifiziert wird. (Die relative Position der aktuellen Seite ist `0`.)

Um eine Seite zurück zu navigieren (entspricht dem Aufruf von {{DOMxRef("History.back","back()")}}):

```js
history.go(-1);
```

Um eine Seite vorwärts zu navigieren, genau wie bei {{DOMxRef("History.forward","forward()")}}:

```js
history.go(1);
```

Ebenso können Sie zwei Seiten vorwärts navigieren, indem Sie `2` übergeben, und so weiter.

Eine weitere Verwendung der `go()`-Methode besteht darin, die aktuelle Seite zu aktualisieren, indem entweder `0` übergeben wird oder ohne Argument aufgerufen wird:

```js
// Die folgenden Anweisungen
// haben beide den Effekt,
// die Seite zu aktualisieren
history.go(0);
history.go();
```

Die Anzahl der Seiten im Verlaufstapel können Sie durch den Wert der Eigenschaft `length` ermitteln:

```js
const numberOfEntries = history.length;
```

## Schnittstellen

- {{domxref("History")}}
  - : Ermöglicht die Manipulation des _Sitzungsverlaufs_ des Browsers (das heißt, die in dem Tab oder Frame besuchten Seiten, in dem die aktuelle Seite geladen ist).
- {{domxref("PopStateEvent")}}
  - : Die Schnittstelle des Ereignisses {{domxref("Window.popstate_event", "popstate")}}.

## Beispiele

Das folgende Beispiel weist einen Listener für das Ereignis {{domxref("Window.popstate_event", "popstate")}} zu. Es illustriert dann einige der Methoden des History-Objekts, um innerhalb des Browserverlaufs des aktuellen Tabs hinzuzufügen, zu ersetzen und zu navigieren.

```js
window.addEventListener("popstate", (event) => {
  alert(
    `location: ${document.location}, state: ${JSON.stringify(event.state)}`,
  );
});

history.pushState({ page: 1 }, "title 1", "?page=1");
history.pushState({ page: 2 }, "title 2", "?page=2");
history.replaceState({ page: 3 }, "title 3", "?page=3");
history.back(); // alerts "location: http://example.com/example.html?page=1, state: {"page":1}"
history.back(); // alerts "location: http://example.com/example.html, state: null"
history.go(2); // alerts "location: http://example.com/example.html?page=3, state: {"page":3}"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("window.history", "history")}} globales Objekt
- {{domxref("Window/popstate_event", "popstate")}} Ereignis
