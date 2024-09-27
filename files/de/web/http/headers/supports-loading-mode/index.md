---
title: Supports-Loading-Mode
slug: Web/HTTP/Headers/Supports-Loading-Mode
l10n:
  sourceCommit: cb132bc83b660e51be8959de5336c00b08030104
---

{{HTTPSidebar}}{{securecontext_header}}{{SeeCompatTable}}

Der **`Supports-Loading-Mode`** Header ermöglicht es einer Antwort, sich für das Laden in einem neuartigen, risikoreicheren Kontext zu entscheiden, in dem sie sonst nicht geladen würde.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>[Response header](/de/docs/Glossary/Response_header)</td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Header-Name](/de/docs/Glossary/Forbidden_header_name)</th>
      <td>nein</td>
    </tr>
    <tr>
      <th scope="row">
        [CORS-ausgelisteter Response-Header](/de/docs/Glossary/CORS-safelisted_response_header)
      </th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Supports-Loading-Mode: <comma-separated list of client hint headers>
```

## Direktiven

Der Wert des `Supports-Loading-Mode` Headers ist eine Liste von einem oder mehreren Tokens, die die folgenden Werte enthalten können:

- `credentialed-prerender` {{experimental_inline}}
  - : Gibt an, dass ein Ziel-Ursprung sich dafür entscheidet, Dokumente über sitespezifisches, cross-origin [prerendering](/de/docs/Web/API/Speculation_Rules_API#using_prerendering) zu laden.
- `fenced-frame`
  - : Die Antwort kann innerhalb eines [fenced frame](/de/docs/Web/API/Fenced_frame_API) geladen werden. Ohne diese explizite Zustimmung werden alle Navigationen innerhalb eines fenced frames fehlschlagen.

## Beispiele

```http
Supports-Loading-Mode: fenced-frame
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Fenced Frame API](/de/docs/Web/API/Fenced_frame_API)
- [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API)
- [Speculative loading](/de/docs/Web/Performance/Speculative_loading)
- [Prerender-Seiten in Chrome für sofortige Seitennavigationen](https://developer.chrome.com/docs/web-platform/prerender-pages) auf developer.chrome.com
