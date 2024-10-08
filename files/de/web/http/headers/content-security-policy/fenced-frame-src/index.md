---
title: "CSP: fenced-frame-src"
slug: Web/HTTP/Headers/Content-Security-Policy/fenced-frame-src
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}{{SeeCompatTable}}

Das HTTP-{{HTTPHeader("Content-Security-Policy")}} (CSP)
**`fenced-frame-src`**-Direktive gibt gültige Quellen für verschachtelte Browsing-Kontexte an, die in {{HTMLElement("fencedframe")}}-Elementen geladen werden.

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
        Wenn diese Direktive fehlt, sucht der Benutzeragent nach der
        {{CSP("frame-src")}}-Direktive (die auf die
        {{CSP("child-src")}}-Direktive zurückfällt).
      </td>
    </tr>
  </tbody>
</table>

## Syntax

Eine oder mehrere Quellen können für die `fenced-frame-src`-Richtlinie zugelassen werden:

```http
Content-Security-Policy: fenced-frame-src <source>;
Content-Security-Policy: fenced-frame-src <source> <source>;
```

### Quellen

`<source>`s für `fenced-frame-src` sind stärker eingeschränkt als für {{CSP("frame-src")}}. Nur die folgenden Quellausdrücke können verwendet werden:

- Die Schema-Quelle `"https:"`
- Die Host-Quelle `"https://*:*"`
- Der String `"*"`

> [!NOTE]
> Siehe die vollständige Liste der [CSP-Quellwerte](/de/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#sources).

## Beispiele

### Verletzungsfälle

Angenommen, dieser CSP-Header ist gegeben:

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
