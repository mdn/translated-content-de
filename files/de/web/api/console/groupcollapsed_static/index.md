---
title: "console: groupCollapsed() statische Methode"
short-title: groupCollapsed()
slug: Web/API/console/groupCollapsed_static
l10n:
  sourceCommit: f2372e442803696ba0fe1c9804096065f2b42824
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

Die **`console.groupCollapsed()`** statische Methode erstellt eine neue Inline-Gruppe in der Konsole. Im Gegensatz zu [`console.group()`](/de/docs/Web/API/Console/group_static) wird die neue Gruppe jedoch eingeklappt erstellt. Der Benutzer muss die Aufklappschaltfläche daneben verwenden, um sie zu erweitern und die in der Gruppe erstellten Einträge anzuzeigen.

Rufen Sie [`console.groupEnd()`](/de/docs/Web/API/Console/groupEnd_static) auf, um zur übergeordneten Gruppe zurückzukehren.

Weitere Informationen und Beispiele finden Sie unter [Verwendung von Gruppen in der Konsole](/de/docs/Web/API/console#using_groups_in_the_console) in der [`console`](/de/docs/Web/API/Console) Dokumentation.

## Syntax

```js-nolint
console.groupCollapsed()
console.groupCollapsed(label)
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
- [Microsoft Edges Dokumentation zu `console.groupCollapsed()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/console/api#groupcollapsed)
- [Node.JS-Dokumentation zu `console.groupCollapsed()`](https://nodejs.org/docs/latest/api/console.html#consolegroupcollapsed)
- [Google Chromes Dokumentation zu `console.groupCollapsed()`](https://developer.chrome.com/docs/devtools/console/api/#groupcollapsed)
