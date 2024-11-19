---
title: "CSP: frame-src"
slug: Web/HTTP/Headers/Content-Security-Policy/frame-src
l10n:
  sourceCommit: 6368e2b112a343fa00ae1a8cf51ceb0b0b845834
---

{{HTTPSidebar}}

Die HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP)
**`frame-src`** Direktive spezifiziert gültige Quellen für verschachtelte
Browsing-Kontexte, die mit Elementen wie {{HTMLElement("frame")}} und
{{HTMLElement("iframe")}} geladen werden.

> **Note:** **`frame-src`** ermöglicht Ihnen, festzulegen, von wo `iframes` auf einer Seite geladen werden dürfen.
> Dies unterscheidet sich von **`frame-ancestors`**, das festlegt, welche übergeordnete Quelle eine Seite einbetten darf.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP-Version</th>
      <td>1</td>
    </tr>
    <tr>
      <th scope="row">Direktivtyp</th>
      <td>{{Glossary("Fetch_directive", "Fetch directive")}}</td>
    </tr>
    <tr>
      <th scope="row">Fallback</th>
      <td>
        Falls diese Direktive fehlt, sucht der Benutzeragent nach der
        {{CSP("child-src")}} Direktive (die auf die
        {{CSP("default-src")}} Direktive zurückfällt).
      </td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Content-Security-Policy: frame-src 'none';
Content-Security-Policy: frame-src <source-expression-list>;
```

Diese Direktive kann einen der folgenden Werte haben:

- `'none'`
  - : Keine Ressourcen dieses Typs dürfen geladen werden. Die einfachen Anführungszeichen sind obligatorisch.
- `<source-expression-list>`

  - : Eine durch Leerzeichen getrennte Liste von _source expression_ Werten. Ressourcen dieses Typs dürfen geladen werden, wenn sie mit einem der angegebenen Quellen-Ausdrücke übereinstimmen. Für diese Direktive sind die folgenden Quellen-Ausdrücke anwendbar:

    - [`<host-source>`](/de/docs/Web/HTTP/Headers/Content-Security-Policy#host-source)
    - [`<scheme-source>`](/de/docs/Web/HTTP/Headers/Content-Security-Policy#scheme-source)
    - [`'self'`](/de/docs/Web/HTTP/Headers/Content-Security-Policy#self)

## Beispiele

### Verletzungsfälle

Angenommen, dieser CSP-Header:

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
