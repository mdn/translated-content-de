---
title: orientation
slug: Web/Manifest/orientation
l10n:
  sourceCommit: 54dbdfc6be6e1cb62b1c10e23356e895953fb196
---

{{QuickLinksWithSubpages("/de/docs/Web/Manifest")}}

Das `orientation`-Mitglied definiert die Standardausrichtung für alle obersten [Browsing-Kontexte](/de/docs/Glossary/Browsing_context) der Website.

> **Hinweis:** `orientation` und/oder seine spezifischen Werte könnten von einem User-Agent in verschiedenen Anzeigemodi nicht unterstützt werden, da die Unterstützung in diesem speziellen Kontext keinen Sinn macht.

> [!NOTE]
> Die Ausrichtung kann zur Laufzeit über die [Screen Orientation API](/de/docs/Web/API/Screen_Orientation_API) geändert werden.

### Werte

`orientation` kann einen der folgenden Werte annehmen:

- `any`
- `natural`
- `landscape`
- `landscape-primary`
- `landscape-secondary`
- `portrait`
- `portrait-primary`
- `portrait-secondary`

## Beispiele

```json
"orientation": "portrait-primary"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
