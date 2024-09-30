---
title: "console: group() statische Methode"
short-title: group()
slug: Web/API/console/group_static
l10n:
  sourceCommit: d2b78565fb33a7ebfa7314be61f6a887d2d90ace
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

Die statische Methode **`console.group()`** erstellt eine neue Inline-Gruppe im [Web-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) Log, wodurch alle nachfolgenden Konsolennachrichten um eine Stufe weiter eingerückt werden, bis [`console.groupEnd()`](/de/docs/Web/API/Console/groupEnd_static) aufgerufen wird.

## Syntax

```js-nolint
group()
group(label)
```

### Parameter

- `label` {{optional_inline}}
  - : Bezeichnung für die Gruppe.

### Rückgabewert

None ({{jsxref("undefined")}}).

## Beispiele

Sie können verschachtelte Gruppen verwenden, um Ihre Ausgaben zu organisieren, indem Sie visuell verwandte Nachrichten zusammenführen. Um einen neuen verschachtelten Block zu erstellen, rufen Sie `console.group()` auf. Die Methode `console.groupCollapsed()` ist ähnlich, aber der neue Block ist zusammengeklappt und erfordert das Klicken auf eine Offenlegungsfläche, um ihn zu lesen.

Um die aktuelle Gruppe zu verlassen, rufen Sie `console.groupEnd()` auf. Zum Beispiel erzeugt der folgende Code:

```js
console.log("This is the outer level");
console.group();
console.log("Level 2");
console.group();
console.log("Level 3");
console.warn("More of level 3");
console.groupEnd();
console.log("Back to level 2");
console.groupEnd();
console.log("Back to the outer level");
```

Die Ausgabe sieht so aus:

![Ein Screenshot von verschachtelten Nachrichten in der Konsolenausgabe.](nesting.png)

Weitere Details finden Sie unter [Verwendung von Gruppen in der Konsole](/de/docs/Web/API/console#using_groups_in_the_console) in der Dokumentation von [`console`](/de/docs/Web/API/Console).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`console.groupEnd()`](/de/docs/Web/API/Console/groupEnd_static)
- [`console.groupCollapsed()`](/de/docs/Web/API/Console/groupCollapsed_static)
- [Microsoft Edge-Dokumentation für `console.group()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/console/api#group)
- [Node.JS-Dokumentation für `console.group()`](https://nodejs.org/docs/latest/api/console.html#consolegrouplabel)
- [Google Chrome-Dokumentation für `console.group()`](https://developer.chrome.com/docs/devtools/console/api/#group)
