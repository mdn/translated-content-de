---
title: "CSP: object-src"
slug: Web/HTTP/Headers/Content-Security-Policy/object-src
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}

Die HTTP-Direktive {{HTTPHeader("Content-Security-Policy")}}
**`object-src`** gibt gültige Quellen für die
{{HTMLElement("object")}} und {{HTMLElement("embed")}} Elemente an.

> [!NOTE]
> Die von `object-src` kontrollierten Elemente werden vielleicht zufällig
> als veraltete HTML-Elemente betrachtet und erhalten keine neuen standardisierten Merkmale (wie
> die Sicherheitsattribute `sandbox` oder `allow` für
> `<iframe>`). Daher wird [empfohlen](https://csp.withgoogle.com/docs/strict-csp.html), diese Fetch-Direktive einzuschränken (z.B. `object-src 'none'` explizit zu setzen, wenn möglich).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP-Version</th>
      <td>1</td>
    </tr>
    <tr>
      <th scope="row">Direktiventyp</th>
      <td>{{Glossary("Fetch_directive", "Fetch-Direktive")}}</td>
    </tr>
    <tr>
      <th scope="row">{{CSP("default-src")}} Rückfall</th>
      <td>
        Ja. Wenn diese Direktive fehlt, sucht der Benutzeragent nach der
        <code>default-src</code> Direktive.
      </td>
    </tr>
  </tbody>
</table>

## Syntax

Für die `object-src`-Richtlinie können eine oder mehrere Quellen erlaubt werden:

```http
Content-Security-Policy: object-src <source>;
Content-Security-Policy: object-src <source> <source>;
```

### Quellen

`<source>` kann einer der in [CSP Quellenwerte](/de/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#sources) aufgeführten Werte sein.

Beachten Sie, dass diese gleiche Menge an Werten in allen {{Glossary("fetch_directive", "Fetch-Direktiven")}} (und einer [Reihe anderer Direktiven](/de/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#relevant_directives)) verwendet werden kann.

## Beispiele

### Verstöße

Angenommen, dieser CSP-Header:

```http
Content-Security-Policy: object-src https://example.com/
```

Die folgenden {{HTMLElement("object")}} und {{HTMLElement("embed")}} Elemente werden blockiert und nicht geladen:

```html
<embed src="https://not-example.com/flash"></embed>
<object data="https://not-example.com/plugin"></object>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Security-Policy")}}
- {{HTMLElement("object")}} und {{HTMLElement("embed")}}
