---
title: "CSP: frame-ancestors"
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/frame-ancestors
l10n:
  sourceCommit: c01b393fbb6939f88cc98ac2a34df1a54be1edfd
---

{{HTTPSidebar}}

Die HTTP-{{HTTPHeader("Content-Security-Policy")}} (CSP) **`frame-ancestors`** Direktive gibt gültige Eltern an, die eine Seite unter Verwendung von {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("object")}} oder {{HTMLElement("embed")}} einbetten dürfen.

Das Setzen dieser Direktive auf `'none'` ist ähnlich wie {{HTTPHeader("X-Frame-Options", "X-Frame-Options: deny")}} (was auch in älteren Browsern unterstützt wird).

> **Hinweis:** **`frame-ancestors`** ermöglicht es Ihnen anzugeben, welche übergeordnete Quelle eine Seite einbetten darf. Dies unterscheidet sich von **`frame-src`**, welches erlaubt anzugeben, von wo iframes innerhalb einer Seite geladen werden dürfen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP-Version</th>
      <td>2</td>
    </tr>
    <tr>
      <th scope="row">Directive-Typ</th>
      <td>{{Glossary("Navigation_directive", "Navigationsdirektive")}}</td>
    </tr>
    <tr>
      <th scope="row">{{CSP("default-src")}} Fallback</th>
      <td>Nein. Wenn nicht gesetzt, ist alles erlaubt.</td>
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
  - : Diese Ressource darf nicht eingebettet werden. Die einfachen Anführungszeichen sind obligatorisch.
- `<source-expression-list>`

  - : Eine durch Leerzeichen getrennte Liste von _source expression_ Werten. Diese Ressource darf eingebettet werden, wenn der Einbettende mit einem der angegebenen source expressions übereinstimmt. Für diese Direktive sind die folgenden source expression Werte anwendbar:

    - [`<host-source>`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#host-source)
    - [`<scheme-source>`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#scheme-source)
    - [`'self'`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#self)

> [!NOTE]
> Die Syntax der `frame-ancestors` Direktive ist ähnlich der Syntax der Quellliste, die von anderen Direktiven akzeptiert wird (z.B. {{CSP("child-src")}}), aber sie fällt nicht auf die `default-src` Einstellung zurück. Eine Richtlinie, die `default-src 'none'` deklariert, erlaubt es trotzdem, dass die Ressource von jedem eingebettet wird.

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
