---
title: "CSP: prefetch-src"
slug: Web/HTTP/Headers/Content-Security-Policy/prefetch-src
l10n:
  sourceCommit: 6368e2b112a343fa00ae1a8cf51ceb0b0b845834
---

{{HTTPSidebar}}{{Deprecated_Header}}{{Non-standard_header}}

Die HTTP-Richtlinie {{HTTPHeader("Content-Security-Policy")}} (CSP)
**`prefetch-src`** gibt gültige Ressourcen an, die vorgeladen oder vorgerendert werden dürfen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP-Version</th>
      <td>3</td>
    </tr>
    <tr>
      <th scope="row">Richtlinientyp</th>
      <td>{{Glossary("Fetch_directive", "Fetch-Richtlinie")}}</td>
    </tr>
    <tr>
      <th scope="row">{{CSP("default-src")}} Rückfall</th>
      <td>
        Ja. Wenn diese Richtlinie fehlt, sucht der Benutzeragent nach der
        <code>default-src</code>-Richtlinie.
      </td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Content-Security-Policy: prefetch-src 'none';
Content-Security-Policy: prefetch-src <source-expression-list>;
```

Diese Richtlinie kann einen der folgenden Werte haben:

- `'none'`
  - : Keine Ressourcen dieses Typs dürfen geladen werden. Die einfachen Anführungszeichen sind zwingend erforderlich.
- `<source-expression-list>`

  - : Eine durch Leerzeichen getrennte Liste von _source expression_ Werten. Ressourcen dieses Typs dürfen geladen werden, wenn sie mit einem der angegebenen Source-Expressions übereinstimmen. Für diese Richtlinie sind die folgenden Source-Expression-Werte anwendbar:

    - [`<host-source>`](/de/docs/Web/HTTP/Headers/Content-Security-Policy#host-source)
    - [`<scheme-source>`](/de/docs/Web/HTTP/Headers/Content-Security-Policy#scheme-source)
    - [`'self'`](/de/docs/Web/HTTP/Headers/Content-Security-Policy#self)

## Beispiel

### Prefetch-Ressourcen stimmen nicht mit Header überein

Angenommen, eine Seite hat die folgende Content Security Policy:

```http
Content-Security-Policy: prefetch-src https://example.com/
```

Abrufe für den folgenden Code werden Netzwerkausfälle zurückgeben, da die angegebenen URLs nicht mit der Quellliste von `prefetch-src` übereinstimmen:

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
