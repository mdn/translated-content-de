---
title: "CSP: fenced-frame-src"
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/fenced-frame-src
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}{{SeeCompatTable}}

Das HTTP-Header {{HTTPHeader("Content-Security-Policy")}} (CSP)
**`fenced-frame-src`**-Direktive legt gültige Quellen für verschachtelte Browsing-Kontexte fest, die in {{HTMLElement("fencedframe")}}-Elementen geladen werden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP-Version</th>
      <td>1</td>
    </tr>
    <tr>
      <th scope="row">Direktivtyp</th>
      <td>{{Glossary("Fetch_directive", "Fetch directive")}}</td>
    </tr>
    <tr>
      <th scope="row">Fallback</th>
      <td>
        Wenn diese Direktive fehlt, sucht der User-Agent nach der
        {{CSP("frame-src")}}-Direktive (die auf die
        {{CSP("child-src")}}-Direktive zurückfällt).
      </td>
    </tr>
  </tbody>
</table>

## Syntax

Für die `fenced-frame-src`-Richtlinie können eine oder mehrere Quellen erlaubt werden:

```http
Content-Security-Policy: fenced-frame-src <source>;
Content-Security-Policy: fenced-frame-src <source> <source>;
```

Eine durch Leerzeichen getrennte Liste von _Source-Expression_-Werten. Ressourcen dieses Typs können geladen werden, wenn sie einem der angegebenen Source-Expressions entsprechen. Für diese Direktive sind die folgenden Source-Expression-Werte anwendbar:

- Der [`<host-source>`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#host-source)-Wert `"https:"`
- Der [`<scheme-source>`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#scheme-source)-Wert `"https:"`
- Der String `"*"`

## Beispiele

### Verstöße

Angenommen, dieser CSP-Header wird verwendet:

```http
Content-Security-Policy: fenced-frame-src https://example.com/
```

Die folgenden Quellen werden in einem Fenced Frame nicht geladen:

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
