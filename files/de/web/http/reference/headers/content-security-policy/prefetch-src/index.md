---
title: "Content-Security-Policy: prefetch-src Direktive"
short-title: prefetch-src
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/prefetch-src
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{HTTPSidebar}}{{Deprecated_Header}}{{Non-standard_header}}

Die HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP)
**`prefetch-src`**-Direktive gibt gültige Ressourcen an, die
vorausgeladen oder vorausgerendert werden dürfen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP-Version</th>
      <td>3</td>
    </tr>
    <tr>
      <th scope="row">Direktivtyp</th>
      <td>{{Glossary("Fetch_directive", "Fetch Directive")}}</td>
    </tr>
    <tr>
      <th scope="row">{{CSP("default-src")}} Fallback</th>
      <td>
        Ja. Wenn diese Direktive fehlt, wird der User-Agent nach der
        <code>default-src</code>-Direktive suchen.
      </td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Content-Security-Policy: prefetch-src 'none';
Content-Security-Policy: prefetch-src <source-expression-list>;
```

Diese Direktive kann einen der folgenden Werte haben:

- `'none'`
  - : Keine Ressourcen dieses Typs dürfen geladen werden. Die einfachen Anführungszeichen sind obligatorisch.
- `<source-expression-list>`
  - : Eine durch Leerzeichen getrennte Liste von _source expression_-Werten. Ressourcen dieses Typs dürfen geladen werden, wenn sie mit einem der angegebenen Quellausdrücke übereinstimmen. Für diese Direktive sind die folgenden Quellausdruckswerte anwendbar:
    - [`<host-source>`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#host-source)
    - [`<scheme-source>`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#scheme-source)
    - [`'self'`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#self)

## Beispiel

### Vorausgeladene Ressourcen stimmen nicht mit dem Header überein

Angenommen, eine Seite hat die folgende Content-Security-Policy:

```http
Content-Security-Policy: prefetch-src https://example.com/
```

Bei Abrufen für den folgenden Code werden Netzwerkfehler zurückgegeben, da die angegebenen URLs nicht mit der Quellliste von `prefetch-src` übereinstimmen:

```html
<link rel="prefetch" href="https://example.org/" />
<link rel="prerender" href="https://example.org/" />
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Security-Policy")}}
