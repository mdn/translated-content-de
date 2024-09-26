---
title: "CSP: frame-src"
slug: Web/HTTP/Headers/Content-Security-Policy/frame-src
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

Die HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP)
**`frame-src`** Direktive legt gültige Quellen für geschachtelte
Browsing-Kontexte fest, die mit Elementen wie {{HTMLElement("frame")}} und
{{HTMLElement("iframe")}} geladen werden.

> **Note:** **`frame-src`** erlaubt es Ihnen, festzulegen, von welchen Quellen iframes in einer Seite geladen werden dürfen.
> Dies unterscheidet sich von **`frame-ancestors`**, das festlegt, welche übergeordnete Quelle eine Seite einbetten darf.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP Version</th>
      <td>1</td>
    </tr>
    <tr>
      <th scope="row">Direktivtyp</th>
      <td>{{Glossary("Fetch directive")}}</td>
    </tr>
    <tr>
      <th scope="row">Fallback</th>
      <td>
        Wenn diese Direktive fehlt, sucht der User-Agent nach der
        {{CSP("child-src")}} Direktive (welche auf die
        {{CSP("default-src")}} Direktive zurückgreift).
      </td>
    </tr>
  </tbody>
</table>

## Syntax

Eine oder mehrere Quellen können für die `frame-src` Richtlinie erlaubt werden:

```http
Content-Security-Policy: frame-src <source>;
Content-Security-Policy: frame-src <source> <source>;
```

### Quellen

`<source>` kann einen der in [CSP Source Values](/de/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#sources) aufgeführten Werte annehmen.

Beachten Sie, dass derselbe Satz von Werten in allen {{Glossary("fetch directive", "fetch directives")}} (und einer [Anzahl anderer Direktiven](/de/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#relevant_directives)) verwendet werden kann.

## Beispiele

### Verstöße

Gegebenenfalls diesen CSP-Header:

```http
Content-Security-Policy: frame-src https://example.com/
```

Das folgende {{HTMLElement("iframe")}} wird blockiert und nicht geladen:

```html
<iframe src="https://not-example.com/"></iframe>
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Security-Policy")}}
- {{HTMLElement("frame")}} und {{HTMLElement("iframe")}}
- {{CSP("frame-ancestors")}}
