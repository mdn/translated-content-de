---
title: Unterstützt-Lademodus
slug: Web/HTTP/Headers/Supports-Loading-Mode
l10n:
  sourceCommit: cb132bc83b660e51be8959de5336c00b08030104
---

{{HTTPSidebar}}{{securecontext_header}}{{SeeCompatTable}}

Der **`Supports-Loading-Mode`** Header ermöglicht es einer Antwort, sich für das Laden in einem neuen, risikoreicheren Kontext zu entscheiden, in dem sie ansonsten nicht geladen werden könnte.

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
Supports-Loading-Mode: <kommagetrennte Liste von Client-Hinweis-Headern>
```

## Direktiven

Der Wert des `Supports-Loading-Mode` Headers ist eine Liste von einem oder mehreren Tokens, die die folgenden Werte enthalten können:

- `credentialed-prerender` {{experimental_inline}}
  - : Gibt an, dass ein Zielursprung dem Laden von Dokumenten über Cross-Origin, gleiche Site [Prerendering](/de/docs/Web/API/Speculation_Rules_API#using_prerendering) zustimmt.
- `fenced-frame`
  - : Die Antwort kann innerhalb eines [abgeschirmten Rahmens](/de/docs/Web/API/Fenced_frame_API) geladen werden. Ohne diese explizite Zustimmung werden alle Navigationen innerhalb eines abgeschirmten Rahmens fehlschlagen.

## Beispiele

```http
Supports-Loading-Mode: fenced-frame
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [API für abgeschirmte Rahmen](/de/docs/Web/API/Fenced_frame_API)
- [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API)
- [Spekulatives Laden](/de/docs/Web/Performance/Speculative_loading)
- [Prerender-Seiten in Chrome für sofortige Seiten-Navigationen](https://developer.chrome.com/docs/web-platform/prerender-pages) auf developer.chrome.com
