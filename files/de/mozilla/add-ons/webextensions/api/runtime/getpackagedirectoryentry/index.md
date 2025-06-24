---
title: runtime.getPackageDirectoryEntry()
slug: Mozilla/Add-ons/WebExtensions/API/runtime/getPackageDirectoryEntry
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Erhält ein `DirectoryEntry`-Objekt, das das Paketverzeichnis darstellt.

Dies ist eine asynchrone Funktion, die entweder einen Rückruf annimmt oder ein Versprechen zurückgibt.

> [!NOTE]
> Die API, die auf Versprechen basiert, wird in Manifest V3 und höher unterstützt.

## Syntax

```js-nolint
browser.runtime.getPackageDirectoryEntry(
  callback              // optional callback function
)
```

### Parameter

- `callback` {{optional_inline}}
  - : `function`. Wenn angegeben, wird der Funktion ein `DirectoryEntry`-Objekt übergeben. Wenn nicht vorhanden, gibt die Funktion stattdessen ein Versprechen zurück.

### Rückgabewert

Kein Rückgabewert (`undefined`), wenn ein `callback` angegeben ist. Andernfalls wird ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgegeben, das mit einem `DirectoryEntry`-Objekt erfüllt wird, das das Paketverzeichnis darstellt.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

```js
browser.runtime.getPackageDirectoryEntry((directoryEntry) => {
  console.log(directoryEntry);
});
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.runtime`](https://developer.chrome.com/docs/extensions/reference/api/runtime#method-getPackageDirectoryEntry)-API von Chromium. Diese Dokumentation stammt aus [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) im Chromium-Code.
