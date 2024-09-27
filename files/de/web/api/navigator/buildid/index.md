---
title: "Navigator: buildID-Eigenschaft"
short-title: buildID
slug: Web/API/Navigator/buildID
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{ApiRef("HTML DOM")}}{{Non-standard_Header}}

Gibt den Build-Bezeichner des Browsers zurück. In modernen Browsern gibt diese Eigenschaft nun als Datenschutzmaßnahme einen festen Zeitstempel zurück, z.B. `20181001000000` in Firefox ab Version 64.

## Wert

Ein String, der den Build-Bezeichner der Anwendung darstellt. Die Build-ID hat das Format `YYYYMMDDHHMMSS`.

## Beispiele

```js
console.log(navigator.buildID);
```

## Spezifikationen

Teil keiner öffentlichen Norm.

## Browser-Kompatibilität

{{Compat}}
