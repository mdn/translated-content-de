---
title: orientation
slug: Web/Manifest/orientation
l10n:
  sourceCommit: 54dbdfc6be6e1cb62b1c10e23356e895953fb196
---

{{QuickLinksWithSubpages("/de/docs/Web/Manifest")}}

Das `orientation`-Mitglied definiert die Standardausrichtung für alle übergeordneten [Browsing-Kontexte](/de/docs/Glossary/Browsing_context) der Website.

> **Hinweis:** `orientation` und/oder deren spezifische Werte werden möglicherweise von einem Benutzeragenten in verschiedenen Anzeigemodi nicht unterstützt, da deren Unterstützung in dem jeweiligen Kontext keinen Sinn ergibt.

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
