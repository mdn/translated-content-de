---
title: "console: group()-Statische Methode"
short-title: group()
slug: Web/API/console/group_static
l10n:
  sourceCommit: d2b78565fb33a7ebfa7314be61f6a887d2d90ace
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

Die **`console.group()`**-statische Methode erstellt eine neue Inline-Gruppe im [Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html)-Protokoll, wodurch alle nachfolgenden Konsolennachrichten um eine zusätzliche Ebene eingerückt werden, bis {{domxref("console/groupEnd_static", "console.groupEnd()")}} aufgerufen wird.

## Syntax

```js-nolint
group()
group(label)
```

### Parameter

- `label` {{optional_inline}}
  - : Bezeichnung für die Gruppe.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Sie können verschachtelte Gruppen verwenden, um Ihre Ausgabe zu organisieren, indem Sie optisch zusammengehörige Nachrichten assoziieren. Um einen neuen verschachtelten Block zu erstellen, rufen Sie `console.group()` auf. Die Methode `console.groupCollapsed()` ist ähnlich, aber der neue Block ist zusammengeklappt und erfordert das Klicken auf eine Schaltfläche zur Offenlegung, um ihn zu lesen.

Um die aktuelle Gruppe zu verlassen, rufen Sie `console.groupEnd()` auf. Zum Beispiel, wenn der folgende Code gegeben ist:

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

Das Ausgabe sieht so aus:

![Ein Screenshot von Nachrichten, die im Konsolenausgang verschachtelt sind.](nesting.png)

Siehe [Verwendung von Gruppen in der Konsole](/de/docs/Web/API/console#using_groups_in_the_console) in der Dokumentation von {{domxref("console")}} für mehr Details.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{domxref("console/groupEnd_static", "console.groupEnd()")}}
- {{domxref("console/groupCollapsed_static", "console.groupCollapsed()")}}
- [Microsoft Edge-Dokumentation für `console.group()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/console/api#group)
- [Node.JS-Dokumentation für `console.group()`](https://nodejs.org/docs/latest/api/console.html#consolegrouplabel)
- [Google Chrome-Dokumentation für `console.group()`](https://developer.chrome.com/docs/devtools/console/api/#group)
