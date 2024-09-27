---
title: "Window: self-Eigenschaft"
short-title: self
slug: Web/API/Window/self
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{APIRef}}

Die schreibgeschützte **`Window.self`**-Eigenschaft gibt das Fenster selbst zurück, als ein [WindowProxy](/de/docs/Glossary/WindowProxy). Sie kann mit der Punktnotation auf einem `window`-Objekt verwendet werden (also `window.self`) oder eigenständig (`self`). Der Vorteil der eigenständigen Notation ist, dass eine ähnliche Notation für nicht-Fenster-Kontexte existiert, wie zum Beispiel in {{domxref("Worker", "Web Workers", "", 1)}}. Durch die Verwendung von `self` können Sie auf den globalen Umfang so verweisen, dass es nicht nur im Fensterkontext funktioniert (dann wird `self` zu `window.self`), sondern auch im Worker-Kontext (dann wird `self` zu [`WorkerGlobalScope.self`](/de/docs/Web/API/WorkerGlobalScope/self)).

## Wert

Ein [WindowProxy](/de/docs/Glossary/WindowProxy)-Objekt.

## Beispiele

Verwendungen von `window.self` wie die folgenden könnten genauso gut durch `window` ersetzt werden.

```js
if (window.parent.frames[0] !== window.self) {
  // this window is not the first frame in the list
}
```

Darüber hinaus, wenn die Ausführung im aktiven Dokument eines Browsing-Kontextes erfolgt, ist `window` eine Referenz auf das aktuelle globale Objekt und somit sind alle folgenden Angaben gleichwertig:

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

- Das Äquivalent im `Worker`-Kontext, [`WorkerGlobalScope.self`](/de/docs/Web/API/WorkerGlobalScope/self).
