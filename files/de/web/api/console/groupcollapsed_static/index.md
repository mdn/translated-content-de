---
title: "console: groupCollapsed() statische Methode"
short-title: groupCollapsed()
slug: Web/API/console/groupCollapsed_static
l10n:
  sourceCommit: bcc977bc3e79a87edd64cd9ef977b515f63daa2c
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

Die **`console.groupCollapsed()`** statische Methode erstellt eine neue Inline-Gruppe in der Konsole. Im Gegensatz zu [`console.group()`](/de/docs/Web/API/console/group_static) wird die neue Gruppe jedoch eingeklappt erstellt. Der Benutzer muss die Schaltfläche zum Ein-/Ausklappen daneben verwenden, um sie zu erweitern und die innerhalb der Gruppe erstellten Einträge sichtbar zu machen.

Rufen Sie [`console.groupEnd()`](/de/docs/Web/API/console/groupEnd_static) auf, um zur übergeordneten Gruppe zurückzukehren.

Siehe [Verwenden von Gruppen in der Konsole](/de/docs/Web/API/console#using_groups_in_the_console) in der [`console`](/de/docs/Web/API/console) Dokumentation für Details und Beispiele.

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
- [Microsoft Edge-Dokumentation für `console.groupCollapsed()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools/console/api#groupcollapsed)
- [Node.js-Dokumentation für `console.groupCollapsed()`](https://nodejs.org/docs/latest/api/console.html#consolegroupcollapsed)
- [Google Chrome-Dokumentation für `console.groupCollapsed()`](https://developer.chrome.com/docs/devtools/console/api/#groupcollapsed)
