---
title: "CSP: form-action"
slug: Web/HTTP/Headers/Content-Security-Policy/form-action
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}

Die HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`form-action`** Direktive beschränkt die URLs, die als Ziel für die Übermittlung von Formularen aus einem gegebenen Kontext verwendet werden können.

> [!WARNING]
> Ob `form-action` Weiterleitungen nach einer Formularübermittlung blockieren sollte, wird [diskutiert](https://github.com/w3c/webappsec-csp/issues/8), und die Implementierungen der Browser zu diesem Aspekt sind uneinheitlich (z.B. blockiert Firefox 57 die Weiterleitungen nicht, während Chrome 63 dies tut).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP Version</th>
      <td>2</td>
    </tr>
    <tr>
      <th scope="row">Direktiventyp</th>
      <td>{{Glossary("Navigation directive")}}</td>
    </tr>
    <tr>
      <th scope="row">{{CSP("default-src")}} Rückfall</th>
      <td>Nein. Wenn dies nicht gesetzt ist, ist alles erlaubt.</td>
    </tr>
  </tbody>
</table>

## Syntax

Für die `form-action` Richtlinie können eine oder mehrere Quellen festgelegt werden:

```http
Content-Security-Policy: form-action <source>;
Content-Security-Policy: form-action <source> <source>;
```

### Quellen

`<source>` kann einer der in [CSP Source Values](/de/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#sources) aufgeführten Werte sein.

Beachten Sie, dass diese gleiche Menge von Werten in allen {{Glossary("fetch directive", "fetch directives")}} (und einer [Reihe anderer Richtlinien](/de/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#relevant_directives)) verwendet werden kann.

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

Die Verwendung eines {{HTMLElement("form")}} Elements mit einer Aktion, die auf Inline-JavaScript gesetzt ist, führt zu einem CSP-Verstoß.

```html example-bad
<meta http-equiv="Content-Security-Policy" content="form-action 'none'" />

<form action="javascript:alert('Foo')" id="form1" method="post">
  <input type="text" name="fieldName" value="fieldValue" />
  <input type="submit" id="submit" value="submit" />
</form>

<!--
// Fehler: Formularübermittlung verweigert, da sie gegen die folgende
// Content-Security-Policy Richtlinie verstößt: "form-action 'none'".
-->
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{HTTPheader("Content-Security-Policy")}}
- {{HTMLElement("form")}}
