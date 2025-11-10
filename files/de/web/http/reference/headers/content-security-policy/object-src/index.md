---
title: "Content-Security-Policy: object-src Richtlinie"
short-title: object-src
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/object-src
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Die HTTP-{{HTTPHeader("Content-Security-Policy")}}
**`object-src`**-Richtlinie gibt gültige Quellen für die
{{HTMLElement("object")}} und {{HTMLElement("embed")}} Elemente an.

> [!NOTE]
> Elemente, die von `object-src` gesteuert werden, gelten möglicherweise zufällig
> als veraltete HTML-Elemente und erhalten keine neuen standardisierten Funktionen (wie
> die Sicherheitsattribute `sandbox` oder `allow` für
> `<iframe>`). Daher wird [empfohlen](https://csp.withgoogle.com/docs/strict-csp.html), diese Fetch-Richtlinie einzuschränken (z.B. `object-src 'none'` ausdrücklich festzulegen, wenn möglich).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP-Version</th>
      <td>1</td>
    </tr>
    <tr>
      <th scope="row">Richtlinientyp</th>
      <td>{{Glossary("Fetch_directive", "Fetch-Richtlinie")}}</td>
    </tr>
    <tr>
      <th scope="row">{{CSP("default-src")}} Fallback</th>
      <td>
        Ja. Wenn diese Richtlinie fehlt, sucht der User-Agent nach der
        <code>default-src</code>-Richtlinie.
      </td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Content-Security-Policy: object-src 'none';
Content-Security-Policy: object-src <source-expression-list>;
```

Diese Richtlinie kann einen der folgenden Werte haben:

- `'none'`
  - : Es dürfen keine Ressourcen dieses Typs geladen werden. Die einfachen Anführungszeichen sind obligatorisch.
- `<source-expression-list>`
  - : Eine durch Leerzeichen getrennte Liste von _Quellenausdruck_-Werten. Ressourcen dieses Typs dürfen geladen werden, wenn sie mit einem der angegebenen Quellenausdrücke übereinstimmen. Für diese Richtlinie sind folgende Quellenausdruck-Werte anwendbar:
    - [`<host-source>`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#host-source)
    - [`<scheme-source>`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#scheme-source)
    - [`'self'`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#self)

## Beispiele

### Verstoßfälle

Gegeben ist dieser CSP-Header:

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
