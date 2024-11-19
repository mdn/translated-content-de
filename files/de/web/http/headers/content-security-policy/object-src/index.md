---
title: "CSP: object-src"
slug: Web/HTTP/Headers/Content-Security-Policy/object-src
l10n:
  sourceCommit: 6368e2b112a343fa00ae1a8cf51ceb0b0b845834
---

{{HTTPSidebar}}

Die HTTP-Richtlinie {{HTTPHeader("Content-Security-Policy")}}
**`object-src`** legt gültige Quellen für die
{{HTMLElement("object")}}- und {{HTMLElement("embed")}}-Elemente fest.

> [!NOTE]
> Elemente, die durch `object-src` kontrolliert werden, gelten vielleicht zufällig als veraltete HTML-Elemente und erhalten keine neuen standardisierten Funktionen (wie z.B. die Sicherheitsattribute `sandbox` oder `allow` für `<iframe>`). Daher wird [empfohlen](https://csp.withgoogle.com/docs/strict-csp.html), diese Fetch-Direktive einzuschränken (z.B. `object-src 'none'` explizit festzulegen, wenn möglich).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP-Version</th>
      <td>1</td>
    </tr>
    <tr>
      <th scope="row">Direktiventyp</th>
      <td>{{Glossary("Fetch_directive", "Fetch-Direktive")}}</td>
    </tr>
    <tr>
      <th scope="row">{{CSP("default-src")}} Fallback</th>
      <td>
        Ja. Wenn diese Direktive fehlt, wird der Benutzeragent nach der
        <code>default-src</code> Direktive suchen.
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
  - : Keine Ressourcen dieses Typs dürfen geladen werden. Die einfachen Anführungszeichen sind verpflichtend.
- `<source-expression-list>`

  - : Eine durch Leerzeichen getrennte Liste von _Quell-Ausdruck_-Werten. Ressourcen dieses Typs dürfen geladen werden, wenn sie mit einem der angegebenen Quellausdrücke übereinstimmen. Für diese Direktive sind die folgenden Quellausdruckswerte anwendbar:

    - [`<host-source>`](/de/docs/Web/HTTP/Headers/Content-Security-Policy#host-source)
    - [`<scheme-source>`](/de/docs/Web/HTTP/Headers/Content-Security-Policy#scheme-source)
    - [`'self'`](/de/docs/Web/HTTP/Headers/Content-Security-Policy#self)

## Beispiele

### Verletzungsfälle

Gegeben dieser CSP-Header:

```http
Content-Security-Policy: object-src https://example.com/
```

Die folgenden {{HTMLElement("object")}}- und {{HTMLElement("embed")}}-Elemente werden blockiert und nicht geladen:

```html
<embed src="https://not-example.com/flash"></embed>
<object data="https://not-example.com/plugin"></object>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Security-Policy")}}
- {{HTMLElement("object")}} und {{HTMLElement("embed")}}
