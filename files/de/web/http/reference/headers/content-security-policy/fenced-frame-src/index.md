---
title: "Content-Security-Policy: fenced-frame-src Directive"
short-title: fenced-frame-src
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/fenced-frame-src
l10n:
  sourceCommit: 466ca1db767535c1aa9984b4e6c0db41b3a53475
---

{{HTTPSidebar}}{{SeeCompatTable}}

Die HTTP-Direktive {{HTTPHeader("Content-Security-Policy")}} (CSP) **`fenced-frame-src`** legt gültige Quellen für verschachtelte Browsing-Kontexte fest, die in {{HTMLElement("fencedframe")}}-Elementen geladen werden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP-Version</th>
      <td>1</td>
    </tr>
    <tr>
      <th scope="row">Direktivtyp</th>
      <td>{{Glossary("Fetch_directive", "Fetch-Direktive")}}</td>
    </tr>
    <tr>
      <th scope="row">Fallback</th>
      <td>
        Wenn diese Direktive fehlt, sucht der User Agent nach der
        {{CSP("frame-src")}}-Direktive (die auf die
        {{CSP("child-src")}}-Direktive zurückfällt).
      </td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Content-Security-Policy: fenced-frame-src <source-expression-list>;
```

- `<source-expression-list>`
  - : Eine durch Leerzeichen getrennte Liste von _source expression_-Werten. Ressourcen dieses Typs können geladen werden, wenn sie mit einem der angegebenen Quellen-Ausdrücke übereinstimmen. Für diese Direktive sind die folgenden Quellen-Ausdrücke anwendbar:
    - Der [`<host-source>`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#host-source)-Wert `"https:"`
    - Der [`<scheme-source>`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#scheme-source)-Wert `"https:"`
    - Der String `"*"`

## Beispiele

### Verletzungsfälle

Bei folgendem CSP-Header:

```http
Content-Security-Policy: fenced-frame-src https://example.com/
```

Werden die folgenden Quellen nicht in einem fenced frame geladen:

- `https://not-example.com/` (Domain stimmt nicht überein)
- `https://example.org/` (TLD stimmt nicht überein)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Fenced Frame API](/de/docs/Web/API/Fenced_frame_API)
- {{HTMLElement("fencedframe")}}
- {{HTTPHeader("Content-Security-Policy")}}
