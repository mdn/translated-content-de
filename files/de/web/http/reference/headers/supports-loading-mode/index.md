---
title: Supports-Loading-Mode header
short-title: Supports-Loading-Mode
slug: Web/HTTP/Reference/Headers/Supports-Loading-Mode
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{securecontext_header}}{{SeeCompatTable}}

Der HTTP **`Supports-Loading-Mode`** {{Glossary("response_header", "Antwort-Header")}} ermöglicht es einer Antwort, sich dafür zu entscheiden, in einem neuen, riskanteren Kontext geladen zu werden, in dem sie ansonsten nicht geladen werden könnte.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrage-Header")}}</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_response_header", "CORS-sicher gelisteter Antwort-Header")}}
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

Der Wert des `Supports-Loading-Mode` Headers ist eine Liste von einem oder mehreren Tokens, die folgende Werte enthalten kann:

- `credentialed-prerender` {{experimental_inline}}
  - : Gibt an, dass ein Zielursprung zustimmt, Dokumente über [Prerendering](/de/docs/Web/API/Speculation_Rules_API#using_prerendering) mit gleicher Site von fremden Ursprüngen zu laden.
- `fenced-frame`
  - : Die Antwort kann in einem [fenced frame](/de/docs/Web/API/Fenced_frame_API) geladen werden. Ohne diese explizite Zustimmung werden alle Navigationen innerhalb eines fenced frame fehlschlagen.

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
- [Seiten in Chrome für sofortige Seitennavigationen vorab laden](https://developer.chrome.com/docs/web-platform/prerender-pages) auf developer.chrome.com
