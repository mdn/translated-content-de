---
title: Supports-Loading-Mode
slug: Web/HTTP/Headers/Supports-Loading-Mode
l10n:
  sourceCommit: cb132bc83b660e51be8959de5336c00b08030104
---

{{HTTPSidebar}}{{securecontext_header}}{{SeeCompatTable}}

Der **`Supports-Loading-Mode`** Header ermöglicht es einer Antwort, das Laden in einem neuen, risikoreicheren Kontext zu erlauben, in dem sie sonst nicht geladen werden könnte.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>nein</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted response header")}}
      </th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Supports-Loading-Mode: <comma-separated list of client hint headers>
```

## Anweisungen

Der Wert des `Supports-Loading-Mode` Headers ist eine Liste von einem oder mehreren Tokens, die folgende Werte beinhalten können:

- `credentialed-prerender` {{experimental_inline}}
  - : Gibt an, dass der Zielursprung das Laden von Dokumenten über Cross-Origin, Same-Site [prerendering](/de/docs/Web/API/Speculation_Rules_API#using_prerendering) erlaubt.
- `fenced-frame`
  - : Die Antwort kann innerhalb eines [fenced frame](/de/docs/Web/API/Fenced_frame_API) geladen werden. Ohne diese explizite Zustimmung schlagen alle Navigationen innerhalb eines fenced frames fehl.

## Beispiele

```http
Supports-Loading-Mode: fenced-frame
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- [Fenced Frame API](/de/docs/Web/API/Fenced_frame_API)
- [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API)
- [Speculative loading](/de/docs/Web/Performance/Speculative_loading)
- [Seiten in Chrome vorab rendern für sofortige Seitennavigationen](https://developer.chrome.com/docs/web-platform/prerender-pages) auf developer.chrome.com
