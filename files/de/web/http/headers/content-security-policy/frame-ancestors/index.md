---
title: "CSP: frame-ancestors"
slug: Web/HTTP/Headers/Content-Security-Policy/frame-ancestors
l10n:
  sourceCommit: 20aeed7aaf5f7fe39706f0573583d991e4196669
---

{{HTTPSidebar}}

Die HTTP-{{HTTPHeader("Content-Security-Policy")}} (CSP)-Direktive **`frame-ancestors`** legt gültige Eltern fest, die eine Seite mithilfe von {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("object")}} oder {{HTMLElement("embed")}} einbetten dürfen.

Das Setzen dieser Direktive auf `'none'` ist vergleichbar mit {{HTTPHeader("X-Frame-Options")}}`: deny` (was auch in älteren Browsern unterstützt wird).

> **Hinweis:** **`frame-ancestors`** erlaubt es Ihnen, festzulegen, welche übergeordnete Quelle eine Seite einbetten darf.
> Dies unterscheidet sich von **`frame-src`**, welches festlegt, von welchen Quellen `iframes` auf einer Seite geladen werden dürfen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP-Version</th>
      <td>2</td>
    </tr>
    <tr>
      <th scope="row">Direktiventyp</th>
      <td>{{Glossary("Navigation_directive", "Navigationsdirektive")}}</td>
    </tr>
    <tr>
      <th scope="row">{{CSP("default-src")}}-Fallback</th>
      <td>Nein. Wenn diese nicht gesetzt ist, ist alles erlaubt.</td>
    </tr>
    <tr>
      <th colspan="2" scope="row">
        Diese Direktive wird im {{HTMLElement("meta")}}
        -Element nicht unterstützt.
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
  - : Diese Ressource darf nicht eingebettet werden. Die einfachen Anführungszeichen sind verpflichtend.
- `<source-expression-list>`

  - : Eine durch Leerzeichen getrennte Liste von _source expression_-Werten. Diese Ressource darf eingebettet werden, wenn der Einbettende mit einem der angegebenen Quellausdrücke übereinstimmt. Für diese Direktive sind die folgenden Quellausdruckswerte anwendbar:

    - [`<host-source>`](/de/docs/Web/HTTP/Headers/Content-Security-Policy#host-source)
    - [`<scheme-source>`](/de/docs/Web/HTTP/Headers/Content-Security-Policy#scheme-source)
    - [`'self'`](/de/docs/Web/HTTP/Headers/Content-Security-Policy#self)

> [!NOTE]
> Die Syntax der Direktive `frame-ancestors` ist ähnlich der Quelllisten-Syntax, die von anderen Direktiven akzeptiert wird (z. B. {{CSP("child-src")}}), aber sie fällt nicht auf die Einstellung von `default-src` zurück. Eine Richtlinie, die `default-src 'none'` deklariert, erlaubt trotzdem, dass die Ressource von jedem eingebettet wird.

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
