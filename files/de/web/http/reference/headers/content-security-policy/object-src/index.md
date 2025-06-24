---
title: "Content-Security-Policy: object-src Direktive"
short-title: object-src
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/object-src
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{HTTPSidebar}}

Die HTTP {{HTTPHeader("Content-Security-Policy")}} **`object-src`** Direktive legt gültige Quellen für die {{HTMLElement("object")}} und {{HTMLElement("embed")}} Elemente fest.

> [!NOTE]
> Elemente, die durch `object-src` gesteuert werden, gelten möglicherweise zufällig als veraltete HTML-Elemente und erhalten keine neuen standardisierten Funktionen (wie z.B. die Sicherheitsattribute `sandbox` oder `allow` für `<iframe>`). Daher wird [empfohlen](https://csp.withgoogle.com/docs/strict-csp.html), diese Fetch-Direktive einzuschränken (z.B. `object-src 'none'` explizit festzulegen, falls möglich).

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
      <th scope="row">{{CSP("default-src")}} Fallback</th>
      <td>
        Ja. Wenn diese Direktive nicht vorhanden ist, sucht der User-Agent nach der
        <code>default-src</code> Direktive.
      </td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Content-Security-Policy: object-src 'none';
Content-Security-Policy: object-src <source-expression-list>;
```

Diese Direktive kann einen der folgenden Werte haben:

- `'none'`
  - : Keine Ressourcen dieses Typs dürfen geladen werden. Die einfachen Anführungszeichen sind obligatorisch.
- `<source-expression-list>`
  - : Eine durch Leerzeichen getrennte Liste von _source expression_ Werten. Ressourcen dieses Typs dürfen geladen werden, wenn sie mit einem der angegebenen Quellenausdrücke übereinstimmen. Für diese Direktive sind die folgenden Quellenausdrücke anwendbar:
    - [`<host-source>`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#host-source)
    - [`<scheme-source>`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#scheme-source)
    - [`'self'`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#self)

## Beispiele

### Verstöße

Gegeben sei dieser CSP-Header:

```http
Content-Security-Policy: object-src https://example.com/
```

Die folgenden {{HTMLElement("object")}} und {{HTMLElement("embed")}} Elemente werden blockiert und nicht geladen:

```html
<embed src="https://not-example.com/flash" />
<object data="https://not-example.com/plugin"></object>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Security-Policy")}}
- {{HTMLElement("object")}} und {{HTMLElement("embed")}}
