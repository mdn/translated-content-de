---
title: "CSP: img-src"
slug: Web/HTTP/Headers/Content-Security-Policy/img-src
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

Die HTTP {{HTTPHeader("Content-Security-Policy")}} **`img-src`** Direktive gibt gültige Quellen für Bilder und Favicons an.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP-Version</th>
      <td>1</td>
    </tr>
    <tr>
      <th scope="row">Direktivtyp</th>
      <td>[Fetch-Direktive](/de/docs/Glossary/Fetch_directive)</td>
    </tr>
    <tr>
      <th scope="row">{{CSP("default-src")}} Fallback</th>
      <td>
        Ja. Wenn diese Direktive nicht vorhanden ist, sucht der User-Agent nach der
        <code>default-src</code> Direktive.
      </td>
    </tr>
  </tbody>
</table>

## Syntax

Es können eine oder mehrere Quellen für die `img-src` Richtlinie zugelassen werden:

```http
Content-Security-Policy: img-src <source>;
Content-Security-Policy: img-src <source> <source>;
```

### Quellen

`<source>` kann einer der Werte aus der Liste in [CSP-Quellenwerte](/de/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#sources) sein.

Beachten Sie, dass dieses gleiche Set von Werten in allen [Fetch-Direktiven](/de/docs/Glossary/fetch_directive) (und einer [Anzahl anderer Direktiven](/de/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#relevant_directives)) verwendet werden kann.

## Beispiele

### Verstöße

Angenommen, dieser CSP-Header:

```http
Content-Security-Policy: img-src https://example.com/
```

Das folgende {{HTMLElement("img")}} wird blockiert und nicht geladen:

```html
<img src="https://not-example.com/foo.jpg" alt="example picture" />
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Security-Policy")}}
- {{HTMLElement("img")}}
