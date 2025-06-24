---
title: "Content-Security-Policy: media-src-Direktive"
short-title: media-src
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/media-src
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{HTTPSidebar}}

Die HTTP-{{HTTPHeader("Content-Security-Policy")}} (CSP)
**`media-src`**-Direktive legt gültige Quellen für das Laden
von Medien unter Verwendung der {{HTMLElement("audio")}}- und {{HTMLElement("video")}}-Elemente fest.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP-Version</th>
      <td>1</td>
    </tr>
    <tr>
      <th scope="row">Direktivtyp</th>
      <td>{{Glossary("Fetch_directive", "Abrufdirektive")}}</td>
    </tr>
    <tr>
      <th scope="row">{{CSP("default-src")}}-Fallback</th>
      <td>
        Ja. Wenn diese Direktive fehlt, sucht der User-Agent nach der
        <code>default-src</code>-Direktive.
      </td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Content-Security-Policy: media-src 'none';
Content-Security-Policy: media-src <source-expression-list>;
```

Diese Direktive kann einen der folgenden Werte haben:

- `'none'`
  - : Es dürfen keine Ressourcen dieses Typs geladen werden. Die einfachen Anführungszeichen sind obligatorisch.
- `<source-expression-list>`
  - : Eine durch Leerzeichen getrennte Liste von _source expression_-Werten. Ressourcen dieses Typs dürfen geladen werden, wenn sie mit einem der angegebenen Quellausdrücke übereinstimmen. Für diese Direktive sind die folgenden Quellausdrücke anwendbar:
    - [`<host-source>`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#host-source)
    - [`<scheme-source>`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#scheme-source)
    - [`'self'`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#self)

## Beispiele

### Verstoßfälle

Angenommen, dieser CSP-Header:

```http
Content-Security-Policy: media-src https://example.com/
```

Die folgenden {{HTMLElement("audio")}}, {{HTMLElement("video")}} und
{{HTMLElement("track")}}-Elemente werden blockiert und laden nicht:

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
