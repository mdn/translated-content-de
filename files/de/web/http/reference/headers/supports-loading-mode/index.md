---
title: Supports-Loading-Mode header
short-title: Supports-Loading-Mode
slug: Web/HTTP/Reference/Headers/Supports-Loading-Mode
l10n:
  sourceCommit: 11e09e7c584658fbfbecd2f00ae66e546cd54cc0
---

{{securecontext_header}}{{SeeCompatTable}}

Der HTTP-**`Supports-Loading-Mode`**-{{Glossary("response_header", "Antwort-Header")}} ermöglicht es einer Antwort, sich dafür zu entscheiden, in einem neuartigen, risikoreicheren Kontext geladen zu werden, in dem sie sonst nicht geladen werden könnte.

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
        {{Glossary("CORS-safelisted_response_header", "CORS-gelisteter Antwort-Header")}}
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

Der Wert des `Supports-Loading-Mode`-Headers ist eine Liste von einem oder mehreren Tokens, die die folgenden Werte enthalten können:

- `credentialed-prerender` {{experimental_inline}}
  - : Gibt an, dass ein Zielursprung zustimmt, Dokumente über Cross-Origin, gleiche Site-[Prerendering](/de/docs/Web/API/Speculation_Rules_API#using_prerendering) zu laden.
- `fenced-frame` {{experimental_inline}}
  - : Die Antwort kann innerhalb eines [fenced frame](/de/docs/Web/API/Fenced_frame_API) geladen werden. Ohne diese explizite Zustimmung wird jede Navigation innerhalb eines fenced frames fehlschlagen.

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
