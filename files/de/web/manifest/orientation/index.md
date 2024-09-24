---
title: Orientierung
slug: Web/Manifest/orientation
l10n:
  sourceCommit: b3d5659a6f16dc6cb8be5c48d19820a67434ecb9
---

{{QuickLinksWithSubpages("/de/docs/Web/Manifest")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type</th>
      <td><code>String</code></td>
    </tr>
  </tbody>
</table>

Das `orientation`-Mitglied definiert die Standardausrichtung für alle obersten {{Glossary("Browsing context", "Browsing-Kontexte")}} der Website.

> **Hinweis:** `orientation` und/oder seine spezifischen Werte werden möglicherweise von einem User-Agent in verschiedenen Anzeigemodi nicht unterstützt, da deren Unterstützung für den jeweiligen Kontext keinen Sinn ergibt.

> [!NOTE]
> Die Ausrichtung kann zur Laufzeit über die [Screen Orientation API](/de/docs/Web/API/Screen_Orientation_API) geändert werden.

## Werte

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
