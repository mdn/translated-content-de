---
title: "CSP: base-uri"
slug: Web/HTTP/Headers/Content-Security-Policy/base-uri
l10n:
  sourceCommit: 6368e2b112a343fa00ae1a8cf51ceb0b0b845834
---

{{HTTPSidebar}}

Die HTTP-Richtlinie {{HTTPHeader("Content-Security-Policy")}} **`base-uri`** beschränkt die URLs, die im {{HTMLElement("base")}}-Element eines Dokuments verwendet werden können. Wenn dieser Wert fehlt, ist jede URI erlaubt. Wenn diese Richtlinie fehlt, verwendet der Benutzeragent den Wert im {{HTMLElement("base")}}-Element.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP-Version</th>
      <td>2</td>
    </tr>
    <tr>
      <th scope="row">Richtlinientyp</th>
      <td>{{Glossary("Document_directive", "Dokumentrichtlinie")}}</td>
    </tr>
    <tr>
      <th scope="row">{{CSP("default-src")}} Ersatz</th>
      <td>Nein. Wenn dies nicht gesetzt ist, ist jede URL erlaubt.</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Content-Security-Policy: base-uri 'none';
Content-Security-Policy: base-uri <source-expression-list>;
```

Diese Richtlinie kann einen der folgenden Werte haben:

- `'none'`
  - : Keine Basis-URI darf mit einem `<base>`-Element gesetzt werden. Die einfachen Anführungszeichen sind obligatorisch.
- `<source-expression-list>`

  - : Eine durch Leerzeichen getrennte Liste von _Quellausdrücken_. Ein `<base>`-Element darf eine Basis-URI setzen, wenn sein Wert mit einem der angegebenen Quellausdrücke übereinstimmt. Für diese Richtlinie sind folgende Quellausdruckswerte anwendbar:

    - [`<host-source>`](/de/docs/Web/HTTP/Headers/Content-Security-Policy#host-source)
    - [`<scheme-source>`](/de/docs/Web/HTTP/Headers/Content-Security-Policy#scheme-source)
    - [`'self'`](/de/docs/Web/HTTP/Headers/Content-Security-Policy#self)

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

### Verletzungsfall

Da Ihre Domain nicht `example.com` ist, führt ein {{HTMLElement("base")}}-Element mit `href`, das auf `https://example.com` gesetzt ist, zu einem CSP-Verstoß.

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
