---
title: "CSP: object-src"
slug: Web/HTTP/Headers/Content-Security-Policy/object-src
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}

Die HTTP-Direktive {{HTTPHeader("Content-Security-Policy")}}
**`object-src`** legt gültige Quellen für die
{{HTMLElement("object")}}- und {{HTMLElement("embed")}}-Elemente fest.

> [!NOTE]
> Elemente, die durch `object-src` gesteuert werden, werden möglicherweise zufällig als veraltete HTML-Elemente betrachtet und erhalten keine neuen standardisierten Funktionen (wie z. B. die Sicherheitsattribute `sandbox` oder `allow` für `<iframe>`). Daher wird [empfohlen](https://csp.withgoogle.com/docs/strict-csp.html), diese Fetch-Direktive einzuschränken (z.B. explizit `object-src 'none'` festzulegen, wenn möglich).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP-Version</th>
      <td>1</td>
    </tr>
    <tr>
      <th scope="row">Direktiventyp</th>
      <td>[Fetch-Direktive](/de/docs/Glossary/Fetch_directive)</td>
    </tr>
    <tr>
      <th scope="row">{{CSP("default-src")}}-Fallback</th>
      <td>
        Ja. Wenn diese Direktive fehlt, sucht der User-Agent nach der
        <code>default-src</code>-Direktive.
      </td>
    </tr>
  </tbody>
</table>

## Syntax

Für die `object-src`-Richtlinie können eine oder mehrere Quellen zugelassen werden:

```http
Content-Security-Policy: object-src <source>;
Content-Security-Policy: object-src <source> <source>;
```

### Quellen

`<source>` kann jeder der in [CSP-Quellenwerte](/de/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#sources) aufgelisteten Werte sein.

Beachten Sie, dass dieses gleiche Set von Werten in allen [Fetch-Direktiven](/de/docs/Glossary/fetch_directive) (und einer [Anzahl anderer Direktiven](/de/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#relevant_directives)) verwendet werden kann.

## Beispiele

### Verstöße

Angenommen, dieser CSP-Header:

```http
Content-Security-Policy: object-src https://example.com/
```

Die folgenden {{HTMLElement("object")}}- und {{HTMLElement("embed")}}-Elemente werden blockiert und nicht geladen:

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
