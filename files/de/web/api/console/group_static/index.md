---
title: "console: group() statische Methode"
short-title: group()
slug: Web/API/console/group_static
l10n:
  sourceCommit: bcc977bc3e79a87edd64cd9ef977b515f63daa2c
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

Die **`console.group()`** statische Methode erstellt eine neue Inline-Gruppe im [Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) Log, wodurch alle nachfolgenden Konsolennachrichten um eine zusätzliche Ebene eingerückt werden, bis [`console.groupEnd()`](/de/docs/Web/API/console/groupEnd_static) aufgerufen wird.

## Syntax

```js-nolint
console.group()
console.group(label)
```

### Parameter

- `label` {{optional_inline}}
  - : Bezeichnung für die Gruppe.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Sie können verschachtelte Gruppen verwenden, um Ihre Ausgabe zu organisieren, indem Sie verwandte Nachrichten visuell miteinander in Verbindung bringen. Um einen neuen verschachtelten Block zu erstellen, rufen Sie `console.group()` auf. Die Methode `console.groupCollapsed()` ist ähnlich, jedoch ist der neue Block zusammengeklappt und erfordert das Klicken auf einen Aufdeckungspfeil, um ihn zu lesen.

Um die aktuelle Gruppe zu verlassen, rufen Sie `console.groupEnd()` auf. Zum Beispiel, bei folgendem Code:

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

Sieht die Ausgabe so aus:

![Ein Screenshot von verschachtelten Nachrichten in der Konsolenausgabe.](nesting.png)

Weitere Details finden Sie unter [Verwendung von Gruppen in der Konsole](/de/docs/Web/API/console#using_groups_in_the_console) in der Dokumentation von [`console`](/de/docs/Web/API/console).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`console.groupEnd()`](/de/docs/Web/API/console/groupEnd_static)
- [`console.groupCollapsed()`](/de/docs/Web/API/console/groupCollapsed_static)
- [Microsoft Edges Dokumentation für `console.group()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools/console/api#group)
- [Node.js-Dokumentation für `console.group()`](https://nodejs.org/docs/latest/api/console.html#consolegrouplabel)
- [Google Chromes Dokumentation für `console.group()`](https://developer.chrome.com/docs/devtools/console/api/#group)
