---
title: "console: groupCollapsed() statische Methode"
short-title: groupCollapsed()
slug: Web/API/console/groupCollapsed_static
l10n:
  sourceCommit: d2b78565fb33a7ebfa7314be61f6a887d2d90ace
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

Die **`console.groupCollapsed()`** statische Methode erzeugt eine neue Inline-Gruppe in der Konsole. Im Gegensatz zu [`console.group()`](/de/docs/Web/API/Console/group_static) wird die neue Gruppe jedoch collapsed erstellt. Der Benutzer muss die Offenlegungsschaltfläche daneben verwenden, um sie zu erweitern und die in der Gruppe erstellten Einträge anzuzeigen.

Rufen Sie [`console.groupEnd()`](/de/docs/Web/API/Console/groupEnd_static) auf, um zur übergeordneten Gruppe zurückzukehren.

Siehe [Verwendung von Gruppen in der Konsole](/de/docs/Web/API/console#using_groups_in_the_console) in der [`console`](/de/docs/Web/API/Console) Dokumentation für Details und Beispiele.

## Syntax

```js-nolint
groupCollapsed()
groupCollapsed(label)
```

### Parameter

- `label` {{Optional_Inline}}
  - : Bezeichnung für die Gruppe.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`console.group()`](/de/docs/Web/API/Console/group_static)
- [`console.groupEnd()`](/de/docs/Web/API/Console/groupEnd_static)
- [Microsoft Edge-Dokumentation für `console.groupCollapsed()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/console/api#groupcollapsed)
- [Node.JS-Dokumentation für `console.groupCollapsed()`](https://nodejs.org/docs/latest/api/console.html#consolegroupcollapsed)
- [Google Chrome-Dokumentation für `console.groupCollapsed()`](https://developer.chrome.com/docs/devtools/console/api/#groupcollapsed)
