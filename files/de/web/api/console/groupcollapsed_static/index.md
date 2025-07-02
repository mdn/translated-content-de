---
title: "console: groupCollapsed() statische Methode"
short-title: groupCollapsed()
slug: Web/API/console/groupCollapsed_static
l10n:
  sourceCommit: ab279632b84d201ae9ddd3db3981bf0b01573371
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

Die statische Methode **`console.groupCollapsed()`** erstellt eine neue Inline-Gruppe in der Konsole. Im Gegensatz zu [`console.group()`](/de/docs/Web/API/console/group_static) wird die neue Gruppe jedoch kollabiert erstellt. Der Benutzer muss den Offenlegungsbutton daneben verwenden, um sie zu erweitern und die in der Gruppe erstellten Einträge anzuzeigen.

Verwenden Sie [`console.groupEnd()`](/de/docs/Web/API/console/groupEnd_static), um zur übergeordneten Gruppe zurückzukehren.

Details und Beispiele finden Sie unter [Verwenden von Gruppen in der Konsole](/de/docs/Web/API/console#using_groups_in_the_console) in der [`console`](/de/docs/Web/API/console)-Dokumentation.

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

- [`console.group()`](/de/docs/Web/API/console/group_static)
- [`console.groupEnd()`](/de/docs/Web/API/console/groupEnd_static)
- [Dokumentation von Microsoft Edge zu `console.groupCollapsed()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide/console/api#groupcollapsed)
- [Node.js-Dokumentation zu `console.groupCollapsed()`](https://nodejs.org/docs/latest/api/console.html#consolegroupcollapsed)
- [Google Chrome-Dokumentation zu `console.groupCollapsed()`](https://developer.chrome.com/docs/devtools/console/api/#groupcollapsed)
