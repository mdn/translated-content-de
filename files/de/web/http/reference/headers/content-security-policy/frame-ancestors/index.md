---
title: "Content-Security-Policy: frame-ancestors Direktive"
short-title: frame-ancestors
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/frame-ancestors
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{HTTPSidebar}}

Die HTTP-{{HTTPHeader("Content-Security-Policy")}} (CSP) **`frame-ancestors`**-Direktive gibt gültige übergeordnete Quellen an, die eine Seite mithilfe von {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("object")}} oder {{HTMLElement("embed")}} einbetten dürfen.

Das Setzen dieser Direktive auf `'none'` ist ähnlich wie {{HTTPHeader("X-Frame-Options", "X-Frame-Options: deny")}} (was auch in älteren Browsern unterstützt wird).

> [!NOTE] > **`frame-ancestors`** ermöglicht Ihnen, anzugeben, welche übergeordnete Quelle eine Seite einbetten darf.
> Dies unterscheidet sich von **`frame-src`**, das erlaubt, festzulegen, woher iframes in einer Seite geladen werden dürfen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP-Version</th>
      <td>2</td>
    </tr>
    <tr>
      <th scope="row">Direktivtyp</th>
      <td>{{Glossary("Navigation_directive", "Navigationsrichtlinie")}}</td>
    </tr>
    <tr>
      <th scope="row">{{CSP("default-src")}} Fallback</th>
      <td>Nein. Wenn dies nicht festgelegt ist, ist alles erlaubt.</td>
    </tr>
    <tr>
      <th colspan="2" scope="row">
        Diese Direktive wird im {{HTMLElement("meta")}}
        Element nicht unterstützt.
      </th>
    </tr>
  </tbody>
</table>

## Syntax

```http
Content-Security-Policy: frame-ancestors 'none';
Content-Security-Policy: frame-ancestors <source-expression-list>;
```

Diese Direktive kann einen der folgenden Werte haben:

- `'none'`
  - : Diese Ressource darf nicht eingebettet werden. Die einfachen Anführungszeichen sind zwingend erforderlich.
- `<source-expression-list>`
  - : Eine durch Leerzeichen getrennte Liste von _Quellversionswerten_. Diese Ressource darf eingebettet werden, wenn die einbettende Quelle mit einem der angegebenen Quellversionen übereinstimmt. Für diese Direktive sind die folgenden Quellversionswerte anwendbar:
    - [`<host-source>`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#host-source)
    - [`<scheme-source>`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#scheme-source)
    - [`'self'`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#self)

> [!NOTE]
> Die Syntax der `frame-ancestors`-Direktive ist ähnlich wie die Syntax der Quellenliste, die von anderen Direktiven akzeptiert wird (z. B. {{CSP("child-src")}}), fällt jedoch nicht auf die `default-src`-Einstellung zurück. Eine Richtlinie, die `default-src 'none'` deklariert, erlaubt es dennoch, dass die Ressource von jedem eingebettet wird.

## Beispiele

```http
Content-Security-Policy: frame-ancestors 'none';

Content-Security-Policy: frame-ancestors 'self' https://www.example.org;

Content-Security-Policy: frame-ancestors 'self' https://example.org https://example.com https://store.example.com;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Security-Policy")}}
- {{HTTPHeader("X-Frame-Options")}}
- {{CSP("frame-src")}} CSP
