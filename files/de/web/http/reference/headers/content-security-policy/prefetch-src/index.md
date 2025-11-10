---
title: "Content-Security-Policy: prefetch-src Direktive"
short-title: prefetch-src
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/prefetch-src
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{Deprecated_Header}}{{Non-standard_header}}

Die HTTP-{{HTTPHeader("Content-Security-Policy")}} (CSP)
**`prefetch-src`** Direktive spezifiziert gültige Ressourcen, die
vorgeholt oder vorgerendert werden dürfen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP Version</th>
      <td>3</td>
    </tr>
    <tr>
      <th scope="row">Direktivtyp</th>
      <td>{{Glossary("Fetch_directive", "Fetch-Direktive")}}</td>
    </tr>
    <tr>
      <th scope="row">{{CSP("default-src")}} Fallback</th>
      <td>
        Ja. Wenn diese Direktive fehlt, wird der User-Agent nach der
        <code>default-src</code> Direktive suchen.
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
  - : Es dürfen keine Ressourcen dieses Typs geladen werden. Die einfachen Anführungszeichen sind obligatorisch.
- `<source-expression-list>`
  - : Eine durch Leerzeichen getrennte Liste von _Source-Expression_-Werten. Ressourcen dieses Typs dürfen geladen werden, wenn sie mit einem der angegebenen Source-Expressions übereinstimmen. Für diese Direktive sind die folgenden Source-Expression-Werte anwendbar:
    - [`<host-source>`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#host-source)
    - [`<scheme-source>`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#scheme-source)
    - [`'self'`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#self)

## Beispiel

### Vorgeholte Ressourcen stimmen nicht mit dem Header überein

Gegeben ist eine Seite mit der folgenden Content Security Policy:

```http
Content-Security-Policy: prefetch-src https://example.com/
```

Abrufe für den folgenden Code werden Netzfehler zurückgeben, da die angegebenen URLs nicht
mit der Quellenliste von `prefetch-src` übereinstimmen:

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
