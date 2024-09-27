---
title: "CSP: img-src"
slug: Web/HTTP/Headers/Content-Security-Policy/img-src
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

Die HTTP-{{HTTPHeader("Content-Security-Policy")}}-Richtlinie **`img-src`** gibt gültige Quellen für Bilder und Favicons an.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP-Version</th>
      <td>1</td>
    </tr>
    <tr>
      <th scope="row">Richtlinientyp</th>
      <td>[Fetch-Richtlinie](/de/docs/Glossary/Fetch_directive)</td>
    </tr>
    <tr>
      <th scope="row">{{CSP("default-src")}} Fallback</th>
      <td>
        Ja. Wenn diese Richtlinie fehlt, sucht der Benutzeragent nach der
        <code>default-src</code>-Richtlinie.
      </td>
    </tr>
  </tbody>
</table>

## Syntax

Für die `img-src`-Richtlinie können eine oder mehrere Quellen erlaubt sein:

```http
Content-Security-Policy: img-src <source>;
Content-Security-Policy: img-src <source> <source>;
```

### Quellen

`<source>` kann einer der Werte sein, die in [CSP-Quellenwerte](/de/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#sources) aufgelistet sind.

Beachten Sie, dass dieser gleiche Satz von Werten in allen [Fetch-Richtlinien](/de/docs/Glossary/fetch_directive) (und einer [Anzahl anderer Richtlinien](/de/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#relevant_directives)) verwendet werden kann.

## Beispiele

### Verstöße

Angesichts dieses CSP-Headers:

```http
Content-Security-Policy: img-src https://example.com/
```

Wird das folgende {{HTMLElement("img")}} blockiert und nicht geladen:

```html
<img src="https://not-example.com/foo.jpg" alt="example picture" />
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Security-Policy")}}
- {{HTMLElement("img")}}
