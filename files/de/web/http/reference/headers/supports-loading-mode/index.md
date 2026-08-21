---
title: Supports-Loading-Mode header
short-title: Supports-Loading-Mode
slug: Web/HTTP/Reference/Headers/Supports-Loading-Mode
l10n:
  sourceCommit: 1474534461893381d54c502e655f334b5568e597
---

{{securecontext_header}}{{SeeCompatTable}}

Der HTTP **`Supports-Loading-Mode`** {{Glossary("response_header", "Response-Header")}} ermöglicht es einer Antwort, sich in eine neue, risikoreichere Umgebung einzuwählen, in der sie sonst nicht geladen werden könnte.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Response-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_response_header", "CORS-freigegebener Response-Header")}}
      </th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Supports-Loading-Mode: <client-hint-headers>
```

## Direktiven

Der `Supports-Loading-Mode`-Header-Wert ist eine Liste von einem oder mehreren Tokens, die die folgenden Werte enthalten können:

- `credentialed-prerender` {{experimental_inline}}
  - : Gibt an, dass ein Zielursprung zustimmt, Dokumente über [Prerendering](/de/docs/Web/API/Speculation_Rules_API#using_prerendering) mit derselben Website, aber einer anderen Herkunft, zu laden.
- `fenced-frame` {{experimental_inline}}
  - : Die Antwort kann innerhalb eines [fenced frame](/de/docs/Web/API/Fenced_frame_API) geladen werden. Ohne diese explizite Zustimmung werden alle Navigationsvorgänge innerhalb eines fenced frame fehlschlagen.

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
- [Spekulatives Laden](/de/docs/Web/Performance/Guides/Speculative_loading)
- [Prerender-Seiten in Chrome für sofortige Seiten-Navigationen](https://developer.chrome.com/docs/web-platform/prerender-pages) auf developer.chrome.com
