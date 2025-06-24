---
title: "Content-Security-Policy: frame-src Directive"
short-title: frame-src
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/frame-src
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{HTTPSidebar}}

Die HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`frame-src`**-Direktive gibt gültige Quellen für verschachtelte Browsing-Kontexte an, die mit Elementen wie {{HTMLElement("frame")}} und {{HTMLElement("iframe")}} geladen werden.

> [!NOTE] > **`frame-src`** erlaubt es Ihnen, zu spezifizieren, von wo iframes in einer Seite geladen werden dürfen. Dies unterscheidet sich von **`frame-ancestors`**, das angibt, welche übergeordnete Quelle eine Seite einbetten darf.

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
        Wenn diese Direktive fehlt, sucht der Benutzeragent nach der
        {{CSP("child-src")}}-Direktive (die wiederum auf die
        {{CSP("default-src")}}-Direktive zurückfällt).
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
  - : Eine durch Leerzeichen getrennte Liste von _Quell-Ausdruck_-Werten. Ressourcen dieses Typs dürfen geladen werden, wenn sie mit einem der angegebenen Quellausdrücke übereinstimmen. Für diese Direktive sind die folgenden Quellausdruckswerte anwendbar:
    - [`<host-source>`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#host-source)
    - [`<scheme-source>`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#scheme-source)
    - [`'self'`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#self)

## Beispiele

### Verletzungsfälle

Bei folgendem CSP-Header:

```http
Content-Security-Policy: frame-src https://example.com/
```

Wird das folgende {{HTMLElement("iframe")}} blockiert und nicht geladen:

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
