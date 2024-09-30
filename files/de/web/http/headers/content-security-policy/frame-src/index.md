---
title: "CSP: frame-src"
slug: Web/HTTP/Headers/Content-Security-Policy/frame-src
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

Der HTTP-Header {{HTTPHeader("Content-Security-Policy")}} (CSP)
**`frame-src`** Direktive spezifiziert gültige Quellen für verschachtelte
Browsing-Kontexte, die mit Elementen wie {{HTMLElement("frame")}} und
{{HTMLElement("iframe")}} geladen werden.

> **Note:** **`frame-src`** ermöglicht Ihnen festzulegen, von wo aus iframes auf einer Seite geladen werden dürfen.
> Dies unterscheidet sich von **`frame-ancestors`**, das es Ihnen ermöglicht festzulegen, welche übergeordnete Quelle eine Seite einbetten darf.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP-Version</th>
      <td>1</td>
    </tr>
    <tr>
      <th scope="row">Direktivtyp</th>
      <td>[Fetch-Direktive](/de/docs/Glossary/Fetch_directive)</td>
    </tr>
    <tr>
      <th scope="row">Fallback</th>
      <td>
        Wenn diese Direktive fehlt, wird der User-Agent nach der
        {{CSP("child-src")}}-Direktive suchen (die auf die
        {{CSP("default-src")}}-Direktive zurückfällt).
      </td>
    </tr>
  </tbody>
</table>

## Syntax

Für die `frame-src` Richtlinie können eine oder mehrere Quellen erlaubt werden:

```http
Content-Security-Policy: frame-src <source>;
Content-Security-Policy: frame-src <source> <source>;
```

### Quellen

`<source>` kann jeder beliebige der in [CSP-Quellenwerte](/de/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#sources) aufgeführten Werte sein.

Beachten Sie, dass dieser gleiche Satz von Werten in allen [Fetch-Direktiven](/de/docs/Glossary/fetch_directive) (und einer [Anzahl anderer Direktiven](/de/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#relevant_directives)) verwendet werden kann.

## Beispiele

### Verletzungsfälle

Anhand dieses CSP-Headers:

```http
Content-Security-Policy: frame-src https://example.com/
```

Das folgende {{HTMLElement("iframe")}} wird blockiert und nicht geladen:

```html
<iframe src="https://not-example.com/"></iframe>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Security-Policy")}}
- {{HTMLElement("frame")}} und {{HTMLElement("iframe")}}
- {{CSP("frame-ancestors")}}
