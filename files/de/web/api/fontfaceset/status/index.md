---
title: "FontFaceSet: status-Eigenschaft"
short-title: status
slug: Web/API/FontFaceSet/status
l10n:
  sourceCommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{APIRef("CSS Font Loading API")}}

Die schreibgeschützte **`status`**-Eigenschaft der {{domxref("FontFaceSet")}}-Schnittstelle gibt den Ladezustand der Schriften im Set zurück.

## Wert

Einer der folgenden:

- `"loading"`
- `"loaded"`

## Beispiele

Im folgenden Beispiel wird der `status` des `FontFaceSet` in die Konsole ausgegeben.

```js
console.log(document.fonts.status);
```

## Spezifikationen

{{Specifications}}

## Kompatibilität mit Browsern

{{Compat}}
