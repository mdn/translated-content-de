---
title: Supports-Loading-Mode
slug: Web/HTTP/Reference/Headers/Supports-Loading-Mode
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}{{securecontext_header}}{{SeeCompatTable}}

Der HTTP **`Supports-Loading-Mode`** {{Glossary("response_header", "Antwort-Header")}} ermöglicht es einer Antwort, sich dafür zu entscheiden, in einem neuartigen, risikoreicheren Kontext geladen zu werden, in dem sie ansonsten nicht geladen werden könnte.

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
        {{Glossary("CORS-safelisted_response_header", "CORS-aufgelisteter Antwort-Header")}}
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

Der Wert des `Supports-Loading-Mode`-Headers ist eine Liste von einem oder mehreren Tokens, die folgende Werte enthalten können:

- `credentialed-prerender` {{experimental_inline}}
  - : Gibt an, dass ein Ziel-Ursprung das Laden von Dokumenten über cross-origin, same-site [Prerendering](/de/docs/Web/API/Speculation_Rules_API#using_prerendering) erlaubt.
- `fenced-frame`
  - : Die Antwort kann innerhalb eines [fenced frame](/de/docs/Web/API/Fenced_frame_API) geladen werden. Ohne diese explizite Zustimmung schlagen alle Navigationen innerhalb eines fenced frames fehl.

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
