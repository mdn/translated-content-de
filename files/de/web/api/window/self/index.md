---
title: "Window: self-Eigenschaft"
short-title: self
slug: Web/API/Window/self
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{APIRef}}

Die schreibgeschützte **`Window.self`**-Eigenschaft gibt das Fenster selbst als ein {{glossary("WindowProxy")}} zurück. Sie kann mit der Punktnotation auf einem `window`-Objekt (also `window.self`) oder alleinstehend (`self`) verwendet werden. Der Vorteil der alleinstehenden Notation besteht darin, dass eine ähnliche Notation für Nicht-Fenster-Kontexte existiert, wie in {{domxref("Worker", "Web Workers", "", 1)}}. Durch die Verwendung von `self` können Sie auf den globalen Gültigkeitsbereich in einer Weise verweisen, die nicht nur in einem Fensterkontext funktioniert (`self` wird dann als `window.self` aufgelöst), sondern auch in einem Worker-Kontext (`self` wird dann als {{domxref("WorkerGlobalScope.self")}} aufgelöst).

## Wert

Ein {{glossary("WindowProxy")}}-Objekt.

## Beispiele

Nutzungen von `window.self` wie das folgende könnten genauso gut durch `window` ersetzt werden.

```js
if (window.parent.frames[0] !== window.self) {
  // Dieses Fenster ist nicht der erste Frame in der Liste
}
```

Darüber hinaus, wenn im aktiven Dokument eines Browsing-Kontexts ausgeführt, ist `window` ein Verweis auf das aktuelle globale Objekt, und somit sind alle folgenden Äquivalente:

```js
const w1 = window;
const w2 = self;
const w3 = window.window;
const w4 = window.self;
// w1, w2, w3, w4 sind alle strikt gleich, aber nur w2 funktioniert in Workern
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- Das `Worker`-Äquivalent, {{domxref("WorkerGlobalScope.self")}}.
