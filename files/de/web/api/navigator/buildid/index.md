---
title: "Navigator: buildID Eigenschaft"
short-title: buildID
slug: Web/API/Navigator/buildID
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{ApiRef("HTML DOM")}}{{Non-standard_Header}}

Gibt den Build-Identifier des Browsers zurück. In modernen Browsern liefert diese Eigenschaft jetzt aus Datenschutzgründen einen festen Zeitstempel zurück, z. B. `20181001000000` in Firefox ab Version 64.

## Wert

Ein String, der den Build-Identifier der Anwendung darstellt. Die Build-ID hat das Format `YYYYMMDDHHMMSS`.

## Beispiele

```js
console.log(navigator.buildID);
```

## Spezifikationen

Nicht Teil eines öffentlichen Standards.

## Browser-Kompatibilität

{{Compat}}
