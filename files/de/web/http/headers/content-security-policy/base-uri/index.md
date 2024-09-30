---
title: "CSP: base-uri"
slug: Web/HTTP/Headers/Content-Security-Policy/base-uri
l10n:
  sourceCommit: 64098cec26d88701588cce4380c31991bfbb81f5
---

{{HTTPSidebar}}

Die HTTP-{{HTTPHeader("Content-Security-Policy")}} **`base-uri`**-Direktive beschränkt die URLs, die im {{HTMLElement("base")}}-Element eines Dokuments verwendet werden können. Wenn dieser Wert fehlt, ist jede URI erlaubt. Wenn diese Direktive fehlt, verwendet der Benutzeragent den Wert im {{HTMLElement("base")}}-Element.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP-Version</th>
      <td>2</td>
    </tr>
    <tr>
      <th scope="row">Direktivtyp</th>
      <td>[Dokument-Direktive](/de/docs/Glossary/Document_directive)</td>
    </tr>
    <tr>
      <th scope="row">{{CSP("default-src")}} Fallback</th>
      <td>Nein. Wenn dies nicht gesetzt ist, ist jede URL erlaubt.</td>
    </tr>
  </tbody>
</table>

## Syntax

Eine oder mehrere _Quellen_ können für die `base-uri`-Richtlinie erlaubt werden:

```http
Content-Security-Policy: base-uri <source>;
Content-Security-Policy: base-uri <source> <source>;
```

### Quellen

Diese Direktive verwendet die gleiche Syntax für [CSP-Quellwerte](/de/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#sources) für Argumente wie andere CSP-Direktiven. Allerdings sind nur Werte sinnvoll, die mit URLs übereinstimmen, darunter `<host-source>`, `<scheme-source>`, `'self'` und `'none'`.

## Beispiele

### Konfiguration des Meta-Tags

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

Da Ihre Domain nicht `example.com` ist, führt ein {{HTMLElement("base")}}-Element mit `href` auf `https://example.com` zu einem CSP-Verstoß.

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
