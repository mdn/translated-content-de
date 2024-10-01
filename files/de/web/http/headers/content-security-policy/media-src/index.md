---
title: "CSP: media-src"
slug: Web/HTTP/Headers/Content-Security-Policy/media-src
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

Der HTTP-{{HTTPHeader("Content-Security-Policy")}} (CSP)
**`media-src`**-Richtlinie gibt gültige Quellen zum Laden von
Medien mit den {{HTMLElement("audio")}}- und {{HTMLElement("video")}}-Elementen an.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP-Version</th>
      <td>1</td>
    </tr>
    <tr>
      <th scope="row">Richtlinientyp</th>
      <td>{{Glossary("Fetch_directive", "Abrufrichtlinie")}}</td>
    </tr>
    <tr>
      <th scope="row">{{CSP("default-src")}}-Fallback</th>
      <td>
        Ja. Wenn diese Richtlinie fehlt, sucht der Benutzeragent nach der
        <code>default-src</code>-Richtlinie.
      </td>
    </tr>
  </tbody>
</table>

## Syntax

Eine oder mehrere Quellen können für die `media-src`-Richtlinie erlaubt werden:

```http
Content-Security-Policy: media-src <source>;
Content-Security-Policy: media-src <source> <source>;
```

### Quellen

`<source>` kann einer der Werte sein, die in [CSP-Quellenwerte](/de/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#sources) aufgeführt sind.

Beachten Sie, dass dieses gleiche Set von Werten in allen {{Glossary("fetch_directive", "Abrufrichtlinien")}} (und einer [Reihe anderer Richtlinien](/de/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#relevant_directives)) verwendet werden kann.

## Beispiele

### Verletzungsfälle

Angenommen, dieser CSP-Header:

```http
Content-Security-Policy: media-src https://example.com/
```

Die folgenden {{HTMLElement("audio")}}, {{HTMLElement("video")}} und
{{HTMLElement("track")}}-Elemente werden blockiert und nicht geladen:

```html
<audio src="https://not-example.com/audio"></audio>

<video src="https://not-example.com/video">
  <track kind="subtitles" src="https://not-example.com/subtitles" />
</video>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Security-Policy")}}
- {{HTMLElement("audio")}}, {{HTMLElement("video")}} und {{HTMLElement("track")}}
