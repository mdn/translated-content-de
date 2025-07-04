---
title: "Content-Security-Policy: fenced-frame-src directive"
short-title: fenced-frame-src
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/fenced-frame-src
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{SeeCompatTable}}

Der HTTP-Header {{HTTPHeader("Content-Security-Policy")}} (CSP) **`fenced-frame-src`**-Direktive spezifiziert gültige Quellen für verschachtelte Browsing-Kontexte, die in {{HTMLElement("fencedframe")}}-Elemente geladen werden.

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
        Wenn diese Direktive fehlt, wird der User-Agent nach der {{CSP("frame-src")}}-Direktive suchen (die als Fallback die {{CSP("child-src")}}-Direktive hat).
      </td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Content-Security-Policy: fenced-frame-src <source-expression-list>;
```

- `<source-expression-list>`
  - : Eine durch Leerzeichen getrennte Liste von _source expression_-Werten. Ressourcen dieses Typs dürfen geladen werden, wenn sie mit einem der angegebenen source expressions übereinstimmen. Für diese Direktive sind die folgenden source expression Werte anwendbar:
    - Der [`<host-source>`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#host-source)-Wert `"https:"`
    - Der [`<scheme-source>`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#scheme-source)-Wert `"https:"`
    - Die Zeichenkette `"*"`

## Beispiele

### Verletzungsfälle

Gegeben dieser CSP-Header:

```http
Content-Security-Policy: fenced-frame-src https://example.com/
```

Die folgenden Quellen werden in einem fenced frame nicht geladen:

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
