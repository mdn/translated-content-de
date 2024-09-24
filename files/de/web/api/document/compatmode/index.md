---
title: "Document: compatMode-Eigenschaft"
short-title: compatMode
slug: Web/API/Document/compatMode
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{ ApiRef("DOM") }}

Die **`Document.compatMode`** schreibgeschützte Eigenschaft gibt an, ob das Dokument im [Quirks-Modus](/de/docs/Web/HTML/Quirks_Mode_and_Standards_Mode) oder im Standardsmodus gerendert wird.

## Wert

Ein enumerierter Wert, der sein kann:

- "`BackCompat`", wenn das Dokument im Quirks-Modus ist.
- "`CSS1Compat`", wenn das Dokument im No-Quirks-Modus (auch bekannt als "Standards") oder im eingeschränkten Quirks-Modus (auch bekannt als "Fast-Standards") ist.

> [!NOTE]
> Alle diese Modi sind jetzt standardisiert, daher sind die älteren Bezeichnungen "Standards" und "Fast-Standards" unsinnig und werden in Standards nicht mehr verwendet.

## Beispiele

```js
if (document.compatMode === "BackCompat") {
  // im Quirks-Modus
}
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}
