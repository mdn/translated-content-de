---
title: "Window: self-Eigenschaft"
short-title: self
slug: Web/API/Window/self
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{APIRef}}

Die schreibgeschützte **`Window.self`**-Eigenschaft gibt das Fenster selbst zurück, als ein {{Glossary("WindowProxy", "WindowProxy")}}. Sie kann mit Punktnotation auf einem `window`-Objekt verwendet werden (d. h. `window.self`) oder eigenständig (`self`). Der Vorteil der eigenständigen Notation besteht darin, dass eine ähnliche Notation für Nicht-Fenster-Kontexte existiert, wie z. B. in {{domxref("Worker", "Web Workers", "", 1)}}. Durch die Verwendung von `self` kann man auf den globalen Kontext in einer Art und Weise verweisen, die nicht nur im Fenstermenü-Kontext funktioniert (`self` wird zu `window.self` aufgelöst), sondern auch im Worker-Kontext (`self` wird dann zu [`WorkerGlobalScope.self`](/de/docs/Web/API/WorkerGlobalScope/self)).

## Wert

Ein {{Glossary("WindowProxy", "WindowProxy")}}-Objekt.

## Beispiele

Verwendungen von `window.self` wie die folgenden könnten ebenso gut durch `window` ersetzt werden.

```js
if (window.parent.frames[0] !== window.self) {
  // this window is not the first frame in the list
}
```

Außerdem, wenn in dem aktiven Dokument eines Browsing-Kontextes ausgeführt, ist `window` ein Verweis auf das aktuelle globale Objekt, und somit sind alle folgenden Äquivalente:

```js
const w1 = window;
const w2 = self;
const w3 = window.window;
const w4 = window.self;
// w1, w2, w3, w4 all strictly equal, but only w2 will function in workers
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das `Worker`-Äquivalent, [`WorkerGlobalScope.self`](/de/docs/Web/API/WorkerGlobalScope/self).
