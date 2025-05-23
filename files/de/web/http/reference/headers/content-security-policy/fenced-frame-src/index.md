---
title: "Content-Security-Policy: `fenced-frame-src`-Direktive"
short-title: fenced-frame-src
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/fenced-frame-src
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}{{SeeCompatTable}}

Die HTTP-{{HTTPHeader("Content-Security-Policy")}} (CSP) **`fenced-frame-src`**-Direktive legt gültige Quellen für eingebettete Browsing-Kontexte fest, die in {{HTMLElement("fencedframe")}}-Elemente geladen werden.

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
        Ist diese Direktive nicht vorhanden, sucht der Benutzeragent nach der
        {{CSP("frame-src")}}-Direktive (die auf die {{CSP("child-src")}}-Direktive zurückfällt).
      </td>
    </tr>
  </tbody>
</table>

## Syntax

Für die `fenced-frame-src`-Richtlinie können eine oder mehrere Quellen erlaubt sein:

```http
Content-Security-Policy: fenced-frame-src <source>;
Content-Security-Policy: fenced-frame-src <source> <source>;
```

Eine durch Leerzeichen getrennte Liste von _Quell-Ausdrucks_ Werten. Ressourcen dieses Typs können geladen werden, wenn sie mit einem der gegebenen Quell-Ausdrücke übereinstimmen. Für diese Direktive sind folgende Quell-Ausdruckswerte anwendbar:

- Der [`<host-source>`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#host-source) Wert `"https:"`
- Der [`<scheme-source>`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#scheme-source) Wert `"https:"`
- Der String `"*"`

## Beispiele

### Verletzungsfälle

Angenommen, dieser CSP-Header:

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
