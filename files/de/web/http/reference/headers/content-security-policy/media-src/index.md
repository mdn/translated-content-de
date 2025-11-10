---
title: "Content-Security-Policy: media-src Anweisung"
short-title: media-src
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/media-src
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Die HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP)
**`media-src`** Anweisung gibt gültige Quellen zum Laden von
Medien mit den {{HTMLElement("audio")}} und {{HTMLElement("video")}} Elementen an.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP-Version</th>
      <td>1</td>
    </tr>
    <tr>
      <th scope="row">Anweisungstyp</th>
      <td>{{Glossary("Fetch_directive", "Fetch-Anweisung")}}</td>
    </tr>
    <tr>
      <th scope="row">{{CSP("default-src")}} Fallback</th>
      <td>
        Ja. Wenn diese Anweisung fehlt, sucht der Benutzeragent nach der
        <code>default-src</code> Anweisung.
      </td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Content-Security-Policy: media-src 'none';
Content-Security-Policy: media-src <source-expression-list>;
```

Diese Anweisung kann einen der folgenden Werte haben:

- `'none'`
  - : Es dürfen keine Ressourcen dieses Typs geladen werden. Die Anführungszeichen sind zwingend erforderlich.
- `<source-expression-list>`
  - : Eine durch Leerzeichen getrennte Liste von _Quellen-Ausdruck_ Werten. Ressourcen dieses Typs dürfen geladen werden, wenn sie mit einem der angegebenen Quellenausdrücke übereinstimmen. Für diese Anweisung sind folgende Quellenausdrücke anwendbar:
    - [`<host-source>`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#host-source)
    - [`<scheme-source>`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#scheme-source)
    - [`'self'`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#self)

## Beispiele

### Verstöße

Gegeben ist dieser CSP-Header:

```http
Content-Security-Policy: media-src https://example.com/
```

Die folgenden {{HTMLElement("audio")}}, {{HTMLElement("video")}} und
{{HTMLElement("track")}} Elemente werden blockiert und nicht geladen:

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
