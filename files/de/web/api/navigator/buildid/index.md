---
title: "Navigator: buildID-Eigenschaft"
short-title: buildID
slug: Web/API/Navigator/buildID
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{ApiRef("HTML DOM")}}{{Non-standard_Header}}

Gibt die Build-Kennung des Browsers zurück. In modernen Browsern gibt diese Eigenschaft nun einen festen Zeitstempel als Datenschutzmaßnahme zurück, z.B. `20181001000000` ab Firefox 64.

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
