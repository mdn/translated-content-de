---
title: "CSP: frame-src"
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/frame-src
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Die HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP)
**`frame-src`** Direktive legt gültige Quellen für verschachtelte
Browsing-Kontexte fest, die mit Elementen wie {{HTMLElement("frame")}} und
{{HTMLElement("iframe")}} geladen werden.

> **Note:** **`frame-src`** erlaubt es Ihnen, anzugeben, von wo iframes in einer Seite geladen werden dürfen.
> Dies unterscheidet sich von **`frame-ancestors`**, das es ermöglicht, festzulegen, welche übergeordnete Quelle eine Seite einbetten darf.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP-Version</th>
      <td>1</td>
    </tr>
    <tr>
      <th scope="row">Direktivtyp</th>
      <td>{{Glossary("Fetch_directive", "Fetch-Direktive")}}</td>
    </tr>
    <tr>
      <th scope="row">Fallback</th>
      <td>
        Falls diese Direktive fehlt, wird der User Agent nach der
        {{CSP("child-src")}} Direktive suchen (die auf die
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

  - : Eine durch Leerzeichen getrennte Liste von _Quellenausdruckswerten_. Ressourcen dieses Typs dürfen geladen werden, wenn sie mit einem der angegebenen Quellenausdrücke übereinstimmen. Für diese Direktive sind die folgenden Quellenausdruckswerte anwendbar:

    - [`<host-source>`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#host-source)
    - [`<scheme-source>`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#scheme-source)
    - [`'self'`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#self)

## Beispiele

### Verletzungsfälle

Angenommen, dieser CSP-Header ist gegeben:

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
