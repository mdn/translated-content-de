---
title: "Window: self-Eigenschaft"
short-title: self
slug: Web/API/Window/self
l10n:
  sourceCommit: 285941521a9a7c2c1b3c443d5f785e5f663a8fc9
---

{{APIRef("HTML DOM")}}

Die **`Window.self`** Leseeigenschaft gibt das Fenster selbst zurück, als ein {{Glossary("WindowProxy", "WindowProxy")}}. Sie kann mit Punktnotation auf einem `window` Objekt verwendet werden (also `window.self`) oder eigenständig (`self`). Der Vorteil der eigenständigen Notation besteht darin, dass eine ähnliche Notation für Nicht-Fenster-Kontexte existiert, wie beispielsweise in [Web Workers](/de/docs/Web/API/Worker). Indem Sie `self` verwenden, können Sie auf den globalen Geltungsbereich in einer Weise verweisen, die nicht nur in einem Fensterkontext funktioniert (`self` wird zu `window.self` aufgelöst), sondern auch in einem Worker-Kontext (`self` wird dann zu [`WorkerGlobalScope.self`](/de/docs/Web/API/WorkerGlobalScope/self)) aufgelöst.

## Wert

Ein {{Glossary("WindowProxy", "WindowProxy")}} Objekt.

## Beispiele

Verwendungen von `window.self` wie das folgende können genauso gut durch `window` ersetzt werden.

```js
if (window.parent.frames[0] !== window.self) {
  // this window is not the first frame in the list
}
```

Darüber hinaus ist `window` während der Ausführung im aktiven Dokument eines Browsing-Kontextes eine Referenz auf das aktuelle globale Objekt, und somit sind alle folgenden gleichwertig:

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
