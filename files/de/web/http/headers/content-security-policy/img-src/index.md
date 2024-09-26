---
title: "CSP: img-src"
slug: Web/HTTP/Headers/Content-Security-Policy/img-src
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

Das HTTP `Content-Security-Policy` **`img-src`**-Direktiv gibt gültige Quellen für Bilder und Favicons an.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP-Version</th>
      <td>1</td>
    </tr>
    <tr>
      <th scope="row">Direktivtyp</th>
      <td>{{Glossary("Fetch directive")}}</td>
    </tr>
    <tr>
      <th scope="row">{{CSP("default-src")}} Fallback</th>
      <td>
        Ja. Wenn dieses Direktive nicht vorhanden ist, wird der User-Agent das
        <code>default-src</code>-Direktiv heranziehen.
      </td>
    </tr>
  </tbody>
</table>

## Syntax

Eine oder mehrere Quellen können für die `img-src`-Richtlinie zugelassen werden:

```http
Content-Security-Policy: img-src <source>;
Content-Security-Policy: img-src <source> <source>;
```

### Quellen

`<source>` kann einer der Werte sein, die in [CSP-Quellenwerte](/de/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#sources) aufgelistet sind.

Beachten Sie, dass diese gleichen Werte in allen {{Glossary("fetch directive", "fetch directives")}} (und einer [Anzahl anderer Direktiven](/de/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#relevant_directives)) verwendet werden können.

## Beispiele

### Verletzungsfälle

Gegebenenfalls diesen CSP-Header:

```http
Content-Security-Policy: img-src https://example.com/
```

Wird das folgende {{HTMLElement("img")}} blockiert und nicht geladen:

```html
<img src="https://not-example.com/foo.jpg" alt="Beispielbild" />
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Security-Policy")}}
- {{HTMLElement("img")}}
