---
title: "Content-Security-Policy: frame-ancestors Direktive"
short-title: frame-ancestors
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/frame-ancestors
l10n:
  sourceCommit: a2b29d9159294f1437e0adf49cdf3019e9c1c24b
---

Die HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`frame-ancestors`** Direktive gibt gültige Eltern an, die eine Seite mithilfe von {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("object")}} oder {{HTMLElement("embed")}} einbetten dürfen.

Wenn diese Direktive auf `'none'` gesetzt wird, ist dies ähnlich wie {{HTTPHeader("X-Frame-Options", "X-Frame-Options: deny")}} (das auch in älteren Browsern unterstützt wird).

> [!NOTE]
> **`frame-ancestors`** erlaubt es Ihnen, anzugeben, welche übergeordnete Quelle eine Seite einbetten darf.
> Dies unterscheidet sich von **`frame-src`**, das erlaubt anzugeben, von wo iframes auf einer Seite geladen werden dürfen.

> [!NOTE]
> Die **`frame-ancestors`**-Direktive [überprüft jedes Vorfahren-Element](https://w3c.github.io/webappsec-csp/#frame-ancestors-and-frame-options). Wenn ein Vorfahr nicht übereinstimmt, wird das Laden abgebrochen. Daher sollten alle Vorfahren von den **`frame-ancestors`**-Direktiven der End-Frames erlaubt sein, wenn verschachtelte Frames verwendet werden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP-Version</th>
      <td>2</td>
    </tr>
    <tr>
      <th scope="row">Direktivtyp</th>
      <td>{{Glossary("Navigation_directive", "Navigationsdirektive")}}</td>
    </tr>
    <tr>
      <th scope="row">{{CSP("default-src")}} Fallback</th>
      <td>Nein. Wird dies nicht eingestellt, erlaubt es alles.</td>
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
  - : Eine durch Leerzeichen getrennte Liste von _Quelle-Ausdrucks_-Werten. Diese Ressource darf eingebettet werden, wenn der Einbettende mit einem der angegebenen Quellen-Ausdrücke übereinstimmt. Für diese Direktive sind die folgenden Quellen-Ausdrucks-Werte anwendbar:
    - [`<host-source>`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#host-source)
    - [`<scheme-source>`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#scheme-source)
    - [`'self'`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#self)

> [!NOTE]
> Die Syntax der `frame-ancestors` Direktive ist ähnlich der Quellenlisten-Syntax, die von anderen Direktiven akzeptiert wird (z.B. {{CSP("child-src")}}), aber sie fällt nicht auf die `default-src` Einstellung zurück. Eine Richtlinie, die `default-src 'none'` erklärt, erlaubt es immer noch, dass die Ressource von jedem eingebettet wird.

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
