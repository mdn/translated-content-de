---
title: "CSP: child-src"
slug: Web/HTTP/Headers/Content-Security-Policy/child-src
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

Die HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP)
**`child-src`** Direktive definiert die gültigen Quellen für [Web Worker](/de/docs/Web/API/Web_Workers_API) und verschachtelte Browsing-Kontexte, die mit Elementen wie {{HTMLElement("frame")}} und {{HTMLElement("iframe")}} geladen werden. Bei Workern werden nicht konforme Anfragen vom Benutzeragenten als fatale Netzwerkfehler behandelt.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP-Version</th>
      <td>2</td>
    </tr>
    <tr>
      <th scope="row">Direktivtyp</th>
      <td>{{Glossary("Fetch directive")}}</td>
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

Es können eine oder mehrere Quellen für die `child-src`-Richtlinie zugelassen werden:

```http
Content-Security-Policy: child-src <source>;
Content-Security-Policy: child-src <source> <source>;
```

### Quellen

`<source>` kann einer der Werte sein, die in [CSP-Quellenwerte](/de/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#sources) aufgelistet sind.

Beachten Sie, dass dieses Set von Werten in allen {{Glossary("fetch directive", "fetch directives")}} verwendet werden kann (und in einer [Anzahl anderer Direktiven](/de/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#relevant_directives)).

## Beispiele

### Verletzungsfälle

Angenommen, folgender CSP-Header ist gegeben:

```http
Content-Security-Policy: child-src https://example.com/
```

Dieses {{HTMLElement("iframe")}} und der Worker werden blockiert und nicht geladen:

```html
<iframe src="https://not-example.com"></iframe>

<script>
  const blockedWorker = new Worker("data:application/javascript,…");
</script>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Security-Policy")}}
- {{HTMLElement("frame")}} und {{HTMLElement("iframe")}}
- {{domxref("Worker")}}, {{domxref("SharedWorker")}}, {{domxref("ServiceWorker")}}
