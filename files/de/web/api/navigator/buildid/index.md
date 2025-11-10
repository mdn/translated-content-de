---
title: "Navigator: buildID-Eigenschaft"
short-title: buildID
slug: Web/API/Navigator/buildID
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{ApiRef("HTML DOM")}}{{Non-standard_Header}}

Gibt die Build-Kennung des Browsers zurück. In modernen Browsern gibt diese Eigenschaft nun aus Datenschutzgründen einen festen Zeitstempel zurück, z.B. `20181001000000` in Firefox 64 und höher.

## Wert

Ein String, der die Build-Kennung der Anwendung darstellt. Die Build-ID hat das Format `YYYYMMDDHHMMSS`.

## Beispiele

```js
console.log(navigator.buildID);
```

## Spezifikationen

Nicht Teil eines öffentlichen Standards.

## Browser-Kompatibilität

{{Compat}}
