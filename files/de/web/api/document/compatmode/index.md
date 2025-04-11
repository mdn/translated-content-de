---
title: "Dokument: compatMode-Eigenschaft"
short-title: compatMode
slug: Web/API/Document/compatMode
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ ApiRef("DOM") }}

Die **`Document.compatMode`**-Eigenschaft, die nur gelesen werden kann, zeigt an, ob das Dokument im [Quirks-Modus](/de/docs/Web/HTML/Guides/Quirks_mode_and_standards_mode) oder im Standards-Modus gerendert wird.

## Wert

Ein String, der einer der folgenden ist:

- `"BackCompat"`, wenn sich das Dokument im Quirks-Modus befindet.
- `"CSS1Compat"`, wenn sich das Dokument im No-Quirks-Modus (auch bekannt als "Standards-Modus") oder im eingeschränkten Quirks-Modus (auch als "Almost-Standards-Modus" bekannt) befindet.

> [!NOTE]
> All diese Modi sind jetzt standardisiert, daher sind die älteren Begriffe "Standards" und "Almost Standards" unsinnig und werden in Standards nicht mehr verwendet.

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
