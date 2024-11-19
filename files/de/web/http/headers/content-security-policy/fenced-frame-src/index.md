---
title: "CSP: fenced-frame-src"
slug: Web/HTTP/Headers/Content-Security-Policy/fenced-frame-src
l10n:
  sourceCommit: 6368e2b112a343fa00ae1a8cf51ceb0b0b845834
---

{{HTTPSidebar}}{{SeeCompatTable}}

Die HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP)
**`fenced-frame-src`** Direktive gibt gültige Quellen für verschachtelte Browsing-Kontexte an, die in {{HTMLElement("fencedframe")}}-Elemente geladen werden.

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
        Wenn diese Direktive fehlt, sucht der Benutzeragent nach der
        {{CSP("frame-src")}} Direktive (die auf die
        {{CSP("child-src")}} Direktive zurückfällt).
      </td>
    </tr>
  </tbody>
</table>

## Syntax

Eine oder mehrere Quellen können für die `fenced-frame-src`-Richtlinie erlaubt werden:

```http
Content-Security-Policy: fenced-frame-src <source>;
Content-Security-Policy: fenced-frame-src <source> <source>;
```

Eine durch Leerzeichen getrennte Liste von _Quellenausdruck_-Werten. Ressourcen dieses Typs dürfen geladen werden, wenn sie mit einem der angegebenen Quellenausdrücke übereinstimmen. Für diese Direktive sind die folgenden Quellenausdruck-Werte anwendbar:

- Der [`<host-source>`](/de/docs/Web/HTTP/Headers/Content-Security-Policy#host-source) Wert `"https:"`
- Der [`<scheme-source>`](/de/docs/Web/HTTP/Headers/Content-Security-Policy#scheme-source) Wert `"https:"`
- Der String `"*"`

## Beispiele

### Verletzungsfälle

Angenommen, dieser CSP-Header:

```http
Content-Security-Policy: fenced-frame-src https://example.com/
```

Die folgenden Quellen werden in einem abgeschotteten Rahmen nicht geladen:

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
