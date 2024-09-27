---
title: "CSP: form-action"
slug: Web/HTTP/Headers/Content-Security-Policy/form-action
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}

Der HTTP-{{HTTPHeader("Content-Security-Policy")}} (CSP) **`form-action`**-Direktive beschränkt die URLs, die als Ziel für Formularübermittlungen aus einem gegebenen Kontext verwendet werden können.

> [!WARNING]
> Ob `form-action` Umleitungen nach einer Formularübermittlung blockieren sollte, wird [diskutiert](https://github.com/w3c/webappsec-csp/issues/8) und die Implementierungen in Browsern sind in diesem Aspekt uneinheitlich (z.B. blockiert Firefox 57 die Umleitungen nicht, während Chrome 63 dies tut).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP-Version</th>
      <td>2</td>
    </tr>
    <tr>
      <th scope="row">Direktivtyp</th>
      <td>[Navigationsdirektive](/de/docs/Glossary/Navigation_directive)</td>
    </tr>
    <tr>
      <th scope="row">{{CSP("default-src")}} Fallback</th>
      <td>Nein. Wenn dies nicht gesetzt ist, wird alles erlaubt.</td>
    </tr>
  </tbody>
</table>

## Syntax

Für die `form-action`-Richtlinie können eine oder mehrere Quellen festgelegt werden:

```http
Content-Security-Policy: form-action <source>;
Content-Security-Policy: form-action <source> <source>;
```

### Quellen

`<source>` kann einer der in [CSP-Quellenwerte](/de/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#sources) aufgeführten Werte sein.

Beachten Sie, dass dieser gleiche Satz von Werten in allen [Fetch-Direktiven](/de/docs/Glossary/fetch_directive) (und einer [Reihe anderer Direktiven](/de/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#relevant_directives)) verwendet werden kann.

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

### Verstoßfall

Die Verwendung eines {{HTMLElement("form")}}-Elements mit einer auf inline JavaScript gesetzten Aktion wird zu einem CSP-Verstoß führen.

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
