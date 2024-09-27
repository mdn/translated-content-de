---
title: runtime.getPackageDirectoryEntry()
slug: Mozilla/Add-ons/WebExtensions/API/runtime/getPackageDirectoryEntry
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Ruft ein `DirectoryEntry`-Objekt ab, das das Paketverzeichnis darstellt.

Dies ist eine asynchrone Funktion, die entweder einen Rückruf benötigt oder ein `Promise` zurückgibt.

> [!NOTE]
> Die auf Versprechen basierende API wird in Manifest V3 und höher unterstützt.

## Syntax

```js-nolint
browser.runtime.getPackageDirectoryEntry(
  callback              // optional callback function
)
```

### Parameter

- `callback` {{optional_inline}}

  - : `function`. Wenn angegeben, wird der Funktion ein `DirectoryEntry`-Objekt übergeben. Falls nicht vorhanden, gibt die Funktion stattdessen ein `Promise` zurück.

### Rückgabewert

Kein (`undefined`), wenn ein `callback` bereitgestellt wird. Andernfalls wird ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgegeben, das mit einem `DirectoryEntry`-Objekt erfüllt wird, welches das Paketverzeichnis darstellt.

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
> Diese API basiert auf Chromiums [`chrome.runtime`](https://developer.chrome.com/docs/extensions/reference/api/runtime#method-getPackageDirectoryEntry) API. Diese Dokumentation wird abgeleitet von [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) im Chromium-Code.
