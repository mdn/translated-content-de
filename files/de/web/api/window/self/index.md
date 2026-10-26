---
title: "Window: self-Eigenschaft"
short-title: self
slug: Web/API/Window/self
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte Eigenschaft **`Window.self`** gibt das Fenster selbst als {{Glossary("WindowProxy", "WindowProxy")}} zurück. Sie kann mit Punktnotation auf einem `window`-Objekt (`window.self`) oder eigenständig (`self`) verwendet werden. Der Vorteil der eigenständigen Schreibweise besteht darin, dass es eine ähnliche Schreibweise auch für Kontexte ohne Fenster gibt, etwa in [Web Workern](/de/docs/Web/API/Worker). Mit `self` können Sie auf den globalen Gültigkeitsbereich verweisen – sowohl in einem Fensterkontext (wo `self` zu `window.self` aufgelöst wird) als auch in einem Worker-Kontext (wo `self` zu [`WorkerGlobalScope.self`](/de/docs/Web/API/WorkerGlobalScope/self) aufgelöst wird).

## Wert

Ein {{Glossary("WindowProxy", "WindowProxy")}}-Objekt.

## Beispiele

Verwendungen von `window.self` wie die folgende könnten ebenso durch `window` ersetzt werden.

```js
if (window.parent.frames[0] !== window.self) {
  // this window is not the first frame in the list
}
```

Wird Code im aktiven Dokument eines Browsing-Kontexts ausgeführt, ist `window` außerdem eine Referenz auf das aktuelle globale Objekt. Daher sind die folgenden Ausdrücke gleichwertig:

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

- [Polyfill für `self` in `core-js`](https://core-js.io/docs/features/web-standards/self)
- Das entsprechende Gegenstück in `Worker`: [`WorkerGlobalScope.self`](/de/docs/Web/API/WorkerGlobalScope/self).
