---
title: Supports-Loading-Mode
slug: Web/HTTP/Headers/Supports-Loading-Mode
l10n:
  sourceCommit: cb132bc83b660e51be8959de5336c00b08030104
---

{{HTTPSidebar}}{{securecontext_header}}{{SeeCompatTable}}

Der **`Supports-Loading-Mode`**-Header erlaubt es einer Antwort, sich dafür zu entscheiden, in einem neuartigen, riskanteren Kontext geladen zu werden, in dem sie ansonsten nicht geladen würde.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Unzulässiger Header-Name")}}</th>
      <td>nein</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_response_header", "CORS-sichere Antwort-Header")}}
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

Der `Supports-Loading-Mode`-Headerwert ist eine Liste von einem oder mehreren Tokens, die folgende Werte enthalten kann:

- `credentialed-prerender` {{experimental_inline}}
  - : Gibt an, dass ein Ziel-Ursprung sich dafür entscheidet, Dokumente über ursprungsübergreifendes, gleichseitiges [Prerendering](/de/docs/Web/API/Speculation_Rules_API#using_prerendering) zu laden.
- `fenced-frame`
  - : Die Antwort kann in einem [fenced frame](/de/docs/Web/API/Fenced_frame_API) geladen werden. Ohne diese explizite Zustimmung schlagen alle Navigationen innerhalb eines fenced frame fehl.

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
- [Spekulatives Laden](/de/docs/Web/Performance/Speculative_loading)
- [Prerender-Seiten in Chrome für sofortige Seitennavigationen](https://developer.chrome.com/docs/web-platform/prerender-pages) auf developer.chrome.com
