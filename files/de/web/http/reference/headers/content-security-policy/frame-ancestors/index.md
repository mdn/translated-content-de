---
title: "Content-Security-Policy: frame-ancestors-Direktive"
short-title: frame-ancestors
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/frame-ancestors
l10n:
  sourceCommit: 39dacf36080d1947d3886a13f74bc9f2fb2ed234
---

Die HTTP-{{HTTPHeader("Content-Security-Policy")}} (CSP) **`frame-ancestors`**-Direktive legt fest, welche gültigen übergeordneten Elemente eine Seite mittels {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("object")}} oder {{HTMLElement("embed")}} einbetten dürfen.

Das Setzen dieser Direktive auf `'none'` ähnelt {{HTTPHeader("X-Frame-Options", "X-Frame-Options: deny")}} (was ebenfalls in älteren Browsern unterstützt wird).

> [!NOTE]
> **`frame-ancestors`** ermöglicht Ihnen, anzugeben, welche übergeordnete Quelle eine Seite einbetten darf.
> Dies unterscheidet sich von **`frame-src`**, welches festlegt, woher iframes in einer Seite geladen werden dürfen.

> [!NOTE]
> Die **`frame-ancestors`**-Direktive [überprüft jeden Vorfahren](https://www.w3.org/TR/CSP2/#frame-ancestors-and-frame-options). Wenn ein Vorfahre nicht übereinstimmt, wird das Laden abgebrochen. Daher sollten alle Vorfahren durch die **`frame-ancestors`**-Direktive von Endrahmen erlaubt sein, wenn verschachtelte Rahmen verwendet werden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP-Version</th>
      <td>2</td>
    </tr>
    <tr>
      <th scope="row">Direktivtyp</th>
      <td>{{Glossary("Navigation_directive", "Navigations-Direktive")}}</td>
    </tr>
    <tr>
      <th scope="row">{{CSP("default-src")}}-Ausweichlösung</th>
      <td>Nein. Wird dies nicht festgelegt, ist alles erlaubt.</td>
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
  - : Eine durch Leerzeichen getrennte Liste von _Quellausdruck_-Werten. Diese Ressource darf eingebettet werden, wenn der Einbettende mit einem der angegebenen Quellausdrücke übereinstimmt. Für diese Direktive sind die folgenden Quellausdruckswerte anwendbar:
    - [`<host-source>`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#host-source)
    - [`<scheme-source>`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#scheme-source)
    - [`'self'`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#self)

> [!NOTE]
> Die Syntax der `frame-ancestors`-Direktive ist ähnlich der Quelllisten-Syntax, die von anderen Direktiven akzeptiert wird (z.B. {{CSP("child-src")}}), aber sie greift nicht auf die `default-src`-Einstellung zurück. Eine Richtlinie, die `default-src 'none'` erklärt, erlaubt es trotzdem, die Ressource von jedermann einbetten zu lassen.

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
