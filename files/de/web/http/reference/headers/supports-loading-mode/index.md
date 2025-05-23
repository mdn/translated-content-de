---
title: Supports-Loading-Mode header
short-title: Supports-Loading-Mode
slug: Web/HTTP/Reference/Headers/Supports-Loading-Mode
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}{{securecontext_header}}{{SeeCompatTable}}

Der HTTP **`Supports-Loading-Mode`** {{Glossary("response_header", "Response-Header")}} ermöglicht einer Antwort, sich für das Laden in einem neuartigen, höher-riskanten Kontext zu entscheiden, in dem sie sonst nicht geladen werden könnte.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Response-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_response_header", "CORS-gesicherter Response-Header")}}
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

Der `Supports-Loading-Mode`-Header-Wert ist eine Liste von einem oder mehreren Tokens, die folgende Werte enthalten können:

- `credentialed-prerender` {{experimental_inline}}
  - : Gibt an, dass ein Ziel-Ursprung das Laden von Dokumenten über cross-origin, gleicher Website [Prerendering](/de/docs/Web/API/Speculation_Rules_API#using_prerendering) erlaubt.
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
- [Spekulatives Laden](/de/docs/Web/Performance/Guides/Speculative_loading)
- [Seiten in Chrome für sofortige Seitennavigationen prerendern](https://developer.chrome.com/docs/web-platform/prerender-pages) auf developer.chrome.com
