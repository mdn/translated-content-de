---
title: History API
slug: Web/API/History_API
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{DefaultAPISidebar("History API")}}

Die **History API** ermöglicht den Zugriff auf die Sitzungsverlauf des Browsers (nicht zu verwechseln mit dem [WebExtensions-Verlauf](/de/docs/Mozilla/Add-ons/WebExtensions/API/history)) über das globale Objekt [`history`](/de/docs/Web/API/Window/history). Sie stellt nützliche Methoden und Eigenschaften zur Verfügung, mit denen Sie im Verlauf des Benutzers vor- und zurücknavigieren und den Inhalt des Verlaufstapels manipulieren können.

> [!NOTE]
> Diese API ist nur im Haupt-Thread verfügbar ([`Window`](/de/docs/Web/API/Window)). Sie kann nicht im Kontext von [`Worker`](/de/docs/Web/API/Worker) oder [`Worklet`](/de/docs/Web/API/Worklet) verwendet werden.

## Konzepte und Verwendung

Das Vorwärts- und Rückwärtsnavigieren im Verlauf des Benutzers erfolgt mit den Methoden [`back()`](/de/docs/Web/API/History/back), [`forward()`](/de/docs/Web/API/History/forward) und [`go()`](/de/docs/Web/API/History/go).

### Vorwärts- und Rückwärtsbewegung

Um im Verlauf rückwärts zu navigieren:

```js
history.back();
```

Diese Aktion entspricht genau dem Klick des Benutzers auf den <kbd><strong>Zurück</strong></kbd>-Button in der Browser-Toolbar.

Sie können ebenso vorwärts navigieren (entspricht dem Klick des Benutzers auf den <kbd><strong>Vorwärts</strong></kbd>-Button) wie folgt:

```js
history.forward();
```

### Navigation zu einem bestimmten Punkt im Verlauf

Sie können die Methode [`go()`](/de/docs/Web/API/History/go) verwenden, um eine bestimmte Seite aus dem Sitzungsverlauf zu laden, die durch ihre relative Position zur aktuellen Seite identifiziert wird. (Die relative Position der aktuellen Seite ist `0`.)

Um eine Seite zurückzukehren (entspricht dem Aufruf von [`back()`](/de/docs/Web/API/History/back)):

```js
history.go(-1);
```

Um eine Seite nach vorne zu gehen, wie beim Aufruf von [`forward()`](/de/docs/Web/API/History/forward):

```js
history.go(1);
```

Ebenso können Sie zwei Seiten vorangehen, indem Sie `2` übergeben, und so weiter.

Eine weitere Verwendung der `go()`-Methode besteht darin, die aktuelle Seite zu aktualisieren, indem `0` übergeben wird oder indem sie ohne Argument aufgerufen wird:

```js
// The following statements
// both have the effect of
// refreshing the page
history.go(0);
history.go();
```

Sie können die Anzahl der Seiten im Verlaufstapel ermitteln, indem Sie den Wert der Eigenschaft `length` betrachten:

```js
const numberOfEntries = history.length;
```

## Schnittstellen

- [`History`](/de/docs/Web/API/History)
  - : Ermöglicht die Manipulation der Browser-Sitzungsverlauf (also der Seiten, die im Tab oder Frame besucht wurden, in dem die aktuelle Seite geladen ist).
- [`PopStateEvent`](/de/docs/Web/API/PopStateEvent)
  - : Die Schnittstelle für das [`popstate`](/de/docs/Web/API/Window/popstate_event)-Ereignis.

## Beispiele

Das folgende Beispiel weist einen Listener für das [`popstate`](/de/docs/Web/API/Window/popstate_event)-Ereignis zu. Es zeigt dann einige Methoden des Verlauf-Objekts, um den Verlauf des aktuellen Tabs hinzuzufügen, zu ersetzen und innerhalb zu verschieben.

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

- Globales Objekt [`history`](/de/docs/Web/API/Window/history)
- [`popstate`](/de/docs/Web/API/Window/popstate_event)-Ereignis
