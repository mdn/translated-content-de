---
title: "Content-Security-Policy: form-action directive"
short-title: form-action
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/form-action
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{HTTPSidebar}}

Die HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`form-action`** Direktive beschränkt die URLs, die als Ziel von Formularübermittlungen aus einem bestimmten Kontext verwendet werden können.

> [!WARNING]
> Ob `form-action` Weiterleitungen nach einer Formularübermittlung blockieren sollte, ist [umstritten](https://github.com/w3c/webappsec-csp/issues/8), und die Implementierungen in den Browsern sind in diesem Punkt uneinheitlich (z.B. blockiert Firefox 57 die Weiterleitungen nicht, während Chrome 63 sie blockiert).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP-Version</th>
      <td>2</td>
    </tr>
    <tr>
      <th scope="row">Direktivtyp</th>
      <td>{{Glossary("Navigation_directive", "Navigationsdirektive")}}</td>
    </tr>
    <tr>
      <th scope="row">{{CSP("default-src")}} Rückfall</th>
      <td>Nein. Wenn dies nicht gesetzt ist, ist alles erlaubt.</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Content-Security-Policy: form-action 'none';
Content-Security-Policy: form-action <source-expression-list>;
```

Diese Direktive kann einen der folgenden Werte haben:

- `'none'`
  - : Es dürfen keine Formularübermittlungen gemacht werden. Die einfachen Anführungszeichen sind obligatorisch.
- `<source-expression-list>`
  - : Eine durch Leerzeichen getrennte Liste von _source expression_ Werten. Formularübermittlungen dürfen an URLs erfolgen, die mit einem der angegebenen Quellenausdrücke übereinstimmen. Für diese Direktive sind folgende Quellenausdruckswerte anwendbar:
    - [`<host-source>`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#host-source)
    - [`<scheme-source>`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#scheme-source)
    - [`'self'`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#self)

## Beispiele

### Meta-Tag-Konfiguration

```html
<meta http-equiv="Content-Security-Policy" content="form-action 'none'" />
```

### Apache-Konfiguration

```apacheconf
<IfModule mod_headers.c>
  Header set Content-Security-Policy "form-action 'none';"
</IfModule>
```

### Nginx-Konfiguration

```nginx
add_header Content-Security-Policy "form-action 'none';"
```

### Verstoß-Szenario

Die Verwendung eines {{HTMLElement("form")}} Elements mit einer Aktion, die auf ein inline JavaScript gesetzt ist, führt zu einem CSP-Verstoß.

```html example-bad
<meta http-equiv="Content-Security-Policy" content="form-action 'none'" />

<form action="javascript:alert('Foo')" id="form1" method="post">
  <input type="text" name="fieldName" value="fieldValue" />
  <input type="submit" id="submit" value="submit" />
</form>

<!--
// Error: Refused to send form data because it violates the following
// Content Security Policy directive: "form-action 'none'".
-->
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPheader("Content-Security-Policy")}}
- {{HTMLElement("form")}}
