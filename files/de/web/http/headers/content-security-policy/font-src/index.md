---
title: "CSP: font-src"
slug: Web/HTTP/Headers/Content-Security-Policy/font-src
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

Das HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP)
**`font-src`**-Direktive spezifiziert
gültige Quellen für Schriften, die mit {{cssxref("@font-face")}} geladen werden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP-Version</th>
      <td>1</td>
    </tr>
    <tr>
      <th scope="row">Direktivtyp</th>
      <td>{{Glossary("Fetch directive")}}</td>
    </tr>
    <tr>
      <th scope="row">{{CSP("default-src")}} Rückfall</th>
      <td>
        Ja. Wenn diese Direktive nicht vorhanden ist, wird der User-Agent nach der
        <code>default-src</code>-Direktive suchen.
      </td>
    </tr>
  </tbody>
</table>

## Syntax

Eine oder mehrere Quellen können für die `font-src`-Richtlinie erlaubt werden:

```http
Content-Security-Policy: font-src <source>;
Content-Security-Policy: font-src <source> <source>;
```

### Quellen

`<source>` kann jeder der Werte sein, die in [CSP-Quellenwerte](/de/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#sources) aufgeführt sind.

Beachten Sie, dass dieser gleiche Satz von Werten in allen {{Glossary("fetch directive", "fetch directives")}} (und einer [Anzahl anderer Direktiven](/de/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#relevant_directives)) verwendet werden kann.

## Beispiele

### Verletzungsfälle

Gegeben diese CSP-Header:

```http
Content-Security-Policy: font-src https://example.com/
```

Das folgende Laden einer Schriftart wird blockiert und lädt nicht:

```html
<style>
  @font-face {
    font-family: "MyFont";
    src: url("https://not-example.com/font");
  }
  body {
    font-family: "MyFont";
  }
</style>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Security-Policy")}}
- {{cssxref("@font-face")}}
