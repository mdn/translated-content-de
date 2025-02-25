---
title: Supports-Loading-Mode
slug: Web/HTTP/Headers/Supports-Loading-Mode
l10n:
  sourceCommit: 31ff21cf5f083a3258fc04267d54b1fb72224ff6
---

{{HTTPSidebar}}{{securecontext_header}}{{SeeCompatTable}}

Der HTTP-**`Supports-Loading-Mode`**-{{Glossary("response_header", "Antwort-Header")}} ermöglicht es einer Antwort, in einem neuartigen, risikoreicheren Kontext geladen zu werden, in dem sie ansonsten nicht geladen werden könnte.

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
        {{Glossary("CORS-safelisted_response_header", "CORS-erlaubter Antwort-Header")}}
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

Der Wert des `Supports-Loading-Mode`-Headers ist eine Liste von einem oder mehreren Token, die folgende Werte enthalten können:

- `credentialed-prerender` {{experimental_inline}}
  - : Gibt an, dass ein Ziel-Ursprung das Laden von Dokumenten über das Cross-Origin, same-site [Prerendering](/de/docs/Web/API/Speculation_Rules_API#using_prerendering) ermöglicht.
- `fenced-frame`
  - : Die Antwort kann innerhalb eines [Fenced Frame](/de/docs/Web/API/Fenced_frame_API) geladen werden. Ohne diese ausdrückliche Zustimmung schlagen alle Navigationen innerhalb eines Fenced Frame fehl.

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
- [Prerender-Seiten in Chrome für sofortige Seitennavigation](https://developer.chrome.com/docs/web-platform/prerender-pages) auf developer.chrome.com
