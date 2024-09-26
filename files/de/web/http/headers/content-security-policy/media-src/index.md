---
title: "CSP: media-src"
slug: Web/HTTP/Headers/Content-Security-Policy/media-src
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

Das HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`media-src`**-Direktive gibt gültige Quellen zum Laden von Medien mit den {{HTMLElement("audio")}} und {{HTMLElement("video")}} Elementen an.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP-Version</th>
      <td>1</td>
    </tr>
    <tr>
      <th scope="row">Direktivtyp</th>
      <td>{{Glossary("Fetch directive")}}</td>
    </tr>
    <tr>
      <th scope="row">{{CSP("default-src")}} Rückfall</th>
      <td>
        Ja. Wenn diese Direktive fehlt, sucht der Benutzeragent nach der
        <code>default-src</code>-Direktive.
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

`<source>` kann jeder der in [CSP-Quellenwerte](/de/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#sources) aufgeführten Werte sein.

Beachten Sie, dass dieselbe Menge an Werten in allen {{Glossary("fetch directive", "fetch directives")}} (und einer [Anzahl anderer Direktiven](/de/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#relevant_directives)) verwendet werden kann.

## Beispiele

### Verstöße

Angesichts dieses CSP-Headers:

```http
Content-Security-Policy: media-src https://example.com/
```

werden die folgenden {{HTMLElement("audio")}}, {{HTMLElement("video")}} und {{HTMLElement("track")}} Elemente blockiert und nicht geladen:

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
