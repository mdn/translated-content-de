---
title: History API
slug: Web/API/History_API
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{DefaultAPISidebar("History API")}}

Die **History API** bietet Zugriff auf den Sitzungsverlauf des Browsers (nicht zu verwechseln mit [WebExtensions history](/de/docs/Mozilla/Add-ons/WebExtensions/API/history)) über das globale Objekt [`history`](/de/docs/Web/API/Window/history). Sie stellt nützliche Methoden und Eigenschaften bereit, die es Ihnen ermöglichen, durch den Verlauf des Benutzers zu navigieren und den Inhalt des Verlaufstapels zu manipulieren.

> [!NOTE]
> Diese API ist nur im Haupt-Thread verfügbar ([`Window`](/de/docs/Web/API/Window)). Sie kann nicht in den Kontexten [`Worker`](/de/docs/Web/API/Worker) oder [`Worklet`](/de/docs/Web/API/Worklet) verwendet werden.

## Konzepte und Nutzung

Durch den Verlauf des Benutzers bewegen Sie sich mit den Methoden [`back()`](/de/docs/Web/API/History/back), [`forward()`](/de/docs/Web/API/History/forward) und [`go()`](/de/docs/Web/API/History/go).

### Vor- und zurückbewegen

Um im Verlauf zurückzugehen:

```js
history.back();
```

Dies wirkt genau so, als ob der Benutzer auf die <kbd><strong>Zurück</strong></kbd>-Schaltfläche in der Browser-Symbolleiste geklickt hätte.

Ähnlich können Sie vorwärts gehen (als ob der Benutzer auf die <kbd><strong>Vorwärts</strong></kbd>-Schaltfläche geklickt hätte), so:

```js
history.forward();
```

### Zu einem bestimmten Punkt im Verlauf gehen

Sie können die Methode [`go()`](/de/docs/Web/API/History/go) verwenden, um eine bestimmte Seite aus dem Sitzungsverlauf zu laden, die durch ihre relative Position zur aktuellen Seite identifiziert wird. (Die relative Position der aktuellen Seite ist `0`.)

Um eine Seite zurückzugehen (entspricht dem Aufruf von [`back()`](/de/docs/Web/API/History/back)):

```js
history.go(-1);
```

Um eine Seite vorwärts zu gehen, genau wie bei einem Aufruf von [`forward()`](/de/docs/Web/API/History/forward):

```js
history.go(1);
```

Ähnlich können Sie zwei Seiten vorwärts gehen, indem Sie `2` übergeben, und so weiter.

Eine weitere Verwendung der Methode `go()` besteht darin, die aktuelle Seite durch das Übergeben von `0` oder durch Aufruf ohne Argumente zu aktualisieren:

```js
// The following statements
// both have the effect of
// refreshing the page
history.go(0);
history.go();
```

Sie können die Anzahl der Seiten im Verlaufstapel bestimmen, indem Sie den Wert der Eigenschaft `length` ansehen:

```js
const numberOfEntries = history.length;
```

## Schnittstellen

- [`History`](/de/docs/Web/API/History)
  - : Ermöglicht die Manipulation des Browser-_Sitzungsverlaufs_ (das heißt, der besuchten Seiten im Tab oder Rahmen, in dem die aktuelle Seite geladen ist).
- [`PopStateEvent`](/de/docs/Web/API/PopStateEvent)
  - : Die Schnittstelle des [`popstate`](/de/docs/Web/API/Window/popstate_event) Ereignisses.

## Beispiele

Das folgende Beispiel weist einen Listener für das [`popstate`](/de/docs/Web/API/Window/popstate_event)-Ereignis zu. Es illustriert dann einige der Methoden des History-Objekts, um innerhalb des Browser-Verlaufs des aktuellen Tabs hinzuzufügen, zu ersetzen und zu bewegen.

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

- [`history`](/de/docs/Web/API/Window/history) globales Objekt
- [`popstate`](/de/docs/Web/API/Window/popstate_event) Ereignis
