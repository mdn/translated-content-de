---
title: "CSP: base-uri"
slug: Web/HTTP/Headers/Content-Security-Policy/base-uri
l10n:
  sourceCommit: 64098cec26d88701588cce4380c31991bfbb81f5
---

{{HTTPSidebar}}

Die HTTP-{{HTTPHeader("Content-Security-Policy")}}-Direktive **`base-uri`** beschränkt die URLs, die im {{HTMLElement("base")}}-Element eines Dokuments verwendet werden können. Wenn dieser Wert fehlt, ist jede URI erlaubt. Wenn diese Direktive fehlt, verwendet der Benutzeragent den Wert im {{HTMLElement("base")}}-Element.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP-Version</th>
      <td>2</td>
    </tr>
    <tr>
      <th scope="row">Direktivtyp</th>
      <td>{{Glossary("Document directive")}}</td>
    </tr>
    <tr>
      <th scope="row">{{CSP("default-src")}} Rückfall</th>
      <td>Nein. Wenn dies nicht festgelegt ist, ist jede URL erlaubt.</td>
    </tr>
  </tbody>
</table>

## Syntax

Für die base-uri-Richtlinie können eine oder mehrere _Quellen_ erlaubt werden:

```http
Content-Security-Policy: base-uri <source>;
Content-Security-Policy: base-uri <source> <source>;
```

### Quellen

Diese Direktive verwendet dieselbe Syntax für [CSP-Quellenwerte](/de/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#sources) für Argumente wie andere CSP-Direktiven. Allerdings machen nur Werte, die URLs entsprechen, für `base-uri` Sinn, einschließlich `<host-source>`, `<scheme-source>`, `'self'` und `'none'`.

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

Da Ihre Domain nicht `example.com` ist, wird ein {{HTMLElement("base")}}-Element mit `href` auf `https://example.com` gesetzt zu einem CSP-Verstoß führen.

```html example-bad
<meta http-equiv="Content-Security-Policy" content="base-uri 'self'" />
<base href="https://example.com/" />

<!--
// Fehler: Die Basis-URI des Dokuments konnte nicht auf 'https://example.com/' gesetzt werden,
// weil es gegen die folgende Content Security Policy-Direktive verstößt: "base-uri 'self'"
-->
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPheader("Content-Security-Policy")}}
- {{HTMLElement("base")}}
- {{domxref("Node.baseURI")}}
