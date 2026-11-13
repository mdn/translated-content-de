---
title: "Navigator: buildID-Eigenschaft"
short-title: buildID
slug: Web/API/Navigator/buildID
l10n:
  sourceCommit: ae380dd2b211ab497e064d4074ff81e71cb91a00
---

{{ApiRef("HTML DOM")}}{{Non-standard_Header}}

Die schreibgeschützte Eigenschaft **`buildID`** der [`Navigator`](/de/docs/Web/API/Navigator)-Schnittstelle gibt die Build-Kennung des Browsers zurück. In modernen Browsern gibt diese Eigenschaft aus Datenschutzgründen einen festen Zeitstempel zurück, beispielsweise `20181001000000` ab Firefox 64.

## Wert

Ein String, der die Build-Kennung der Anwendung darstellt. Die Build-Kennung hat das Format `YYYYMMDDHHMMSS`.

## Beispiele

```js
console.log(navigator.buildID);
```

## Spezifikationen

Nicht Bestandteil eines öffentlichen Standards.

## Browser-Kompatibilität

{{Compat}}
