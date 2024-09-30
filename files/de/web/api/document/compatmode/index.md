---
title: "Document: compatMode-Eigenschaft"
short-title: compatMode
slug: Web/API/Document/compatMode
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{ ApiRef("DOM") }}

Die **`Document.compatMode`** schreibgeschützte Eigenschaft zeigt an, ob das Dokument im [Quirks-Modus](/de/docs/Web/HTML/Quirks_Mode_and_Standards_Mode) oder im Standards-Modus gerendert wird.

## Wert

Ein String, der einer der folgenden ist:

- `"BackCompat"`, wenn sich das Dokument im Quirks-Modus befindet.
- `"CSS1Compat"`, wenn sich das Dokument im No-Quirks-Modus (auch als "Standards" bekannt) oder im Limited-Quirks-Modus (auch als "Almost Standards" bekannt) befindet.

> [!NOTE]
> All diese Modi sind jetzt standardisiert, daher sind die älteren Bezeichnungen "Standards" und "Almost Standards" unsinnig und werden in Standards nicht mehr verwendet.

## Beispiele

```js
if (document.compatMode === "BackCompat") {
  // in Quirks mode
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
