---
title: "CSP: img-src"
slug: Web/HTTP/Headers/Content-Security-Policy/img-src
l10n:
  sourceCommit: 6368e2b112a343fa00ae1a8cf51ceb0b0b845834
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
      <td>{{Glossary("Fetch_directive", "Fetch-Direktive")}}</td>
    </tr>
    <tr>
      <th scope="row">{{CSP("default-src")}} Fallback</th>
      <td>
        Ja. Wenn diese Direktive fehlt, sucht der Benutzeragent nach der
        <code>default-src</code> Direktive.
      </td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Content-Security-Policy: img-src 'none';
Content-Security-Policy: img-src <source-expression-list>;
```

Diese Direktive kann einen der folgenden Werte haben:

- `'none'`
  - : Es dürfen keine Ressourcen dieses Typs geladen werden. Die einfachen Anführungszeichen sind verpflichtend.
- `<source-expression-list>`

  - : Eine durch Leerzeichen getrennte Liste von _source expression_ Werten. Ressourcen dieses Typs dürfen geladen werden, wenn sie mit einem der angegebenen Quellausdrücke übereinstimmen. Für diese Direktive sind die folgenden Quellausdrücke anwendbar:

    - [`<host-source>`](/de/docs/Web/HTTP/Headers/Content-Security-Policy#host-source)
    - [`<scheme-source>`](/de/docs/Web/HTTP/Headers/Content-Security-Policy#scheme-source)
    - [`'self'`](/de/docs/Web/HTTP/Headers/Content-Security-Policy#self)

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
