---
title: Supports-Loading-Mode
slug: Web/HTTP/Headers/Supports-Loading-Mode
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}{{securecontext_header}}{{SeeCompatTable}}

Der HTTP-**`Supports-Loading-Mode`**-{{Glossary("response_header", "Antwort-Header")}} ermöglicht es einer Antwort, sich für das Laden in einem neuen, risikoreicheren Kontext zu entscheiden, in dem sie ansonsten nicht geladen würde.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_response_header", "CORS-zugelassener Antwort-Header")}}
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

Der Wert des `Supports-Loading-Mode`-Headers ist eine Liste von einem oder mehreren Tokens, die folgende Werte enthalten kann:

- `credentialed-prerender` {{experimental_inline}}
  - : Zeigt an, dass ein Ziel-Ursprung sich dazu entscheidet, Dokumente über cross-origin, same-site [prerendering](/de/docs/Web/API/Speculation_Rules_API#using_prerendering) zu laden.
- `fenced-frame`
  - : Die Antwort kann innerhalb eines [fenced frame](/de/docs/Web/API/Fenced_frame_API) geladen werden. Ohne diese explizite Zustimmung werden alle Navigierungen innerhalb eines fenced frame fehlschlagen.

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
- [Prerender Seiten in Chrome für sofortige Navigierungen](https://developer.chrome.com/docs/web-platform/prerender-pages) auf developer.chrome.com
