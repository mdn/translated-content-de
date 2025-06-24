---
title: "Content-Security-Policy: base-uri Direktive"
short-title: base-uri
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/base-uri
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{HTTPSidebar}}

Die HTTP {{HTTPHeader("Content-Security-Policy")}} **`base-uri`** Direktive beschränkt die URLs, die im {{HTMLElement("base")}} Element eines Dokuments verwendet werden können. Fehlt dieser Wert, ist jede URI erlaubt. Fehlt diese Direktive, verwendet der Benutzeragent den Wert im {{HTMLElement("base")}} Element.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP Version</th>
      <td>2</td>
    </tr>
    <tr>
      <th scope="row">Direktivtyp</th>
      <td>{{Glossary("Document_directive", "Dokument-Direktive")}}</td>
    </tr>
    <tr>
      <th scope="row">{{CSP("default-src")}} Fallback</th>
      <td>Nein. Wenn dies nicht gesetzt ist, sind alle URLs erlaubt.</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Content-Security-Policy: base-uri 'none';
Content-Security-Policy: base-uri <source-expression-list>;
```

Diese Direktive kann einen der folgenden Werte haben:

- `'none'`
  - : Es darf keine Basis-URI mit einem `<base>` Element gesetzt werden. Die einfachen Anführungszeichen sind obligatorisch.
- `<source-expression-list>`
  - : Eine durch Leerzeichen getrennte Liste von _Quell-Ausdruck_ Werten. Ein `<base>` Element kann eine Basis-URI setzen, wenn dessen Wert mit einem der angegebenen Quellausdrücke übereinstimmt. Für diese Direktive sind die folgenden Quellausdruck-Werte anwendbar:
    - [`<host-source>`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#host-source)
    - [`<scheme-source>`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#scheme-source)
    - [`'self'`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#self)

## Beispiele

### Meta-Tag-Konfiguration

```html
<meta http-equiv="Content-Security-Policy" content="base-uri 'self'" />
```

### Apache-Konfiguration

```apacheconf
<IfModule mod_headers.c>
Header set Content-Security-Policy "base-uri 'self'";
</IfModule>
```

### Nginx-Konfiguration

```nginx
add_header Content-Security-Policy "base-uri 'self';"
```

### Verstoßfall

Da Ihre Domain nicht `example.com` ist, wird ein {{HTMLElement("base")}} Element mit `href` auf `https://example.com` zu einem CSP-Verstoß führen.

```html example-bad
<meta http-equiv="Content-Security-Policy" content="base-uri 'self'" />
<base href="https://example.com/" />

<!--
// Error: Refused to set the document's base URI to 'https://example.com/'
// because it violates the following Content Security Policy
// directive: "base-uri 'self'"
-->
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPheader("Content-Security-Policy")}}
- {{HTMLElement("base")}}
- [`Node.baseURI`](/de/docs/Web/API/Node/baseURI)
