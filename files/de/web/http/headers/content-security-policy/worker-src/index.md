---
title: "CSP: worker-src"
slug: Web/HTTP/Headers/Content-Security-Policy/worker-src
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

Die HTTP-Direktive {{HTTPHeader("Content-Security-Policy")}} (CSP) **`worker-src`** gibt gültige Quellen für {{domxref("Worker")}}, {{domxref("SharedWorker")}} oder {{domxref("ServiceWorker")}} Skripte an.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP-Version</th>
      <td>3</td>
    </tr>
    <tr>
      <th scope="row">Direktivtyp</th>
      <td>{{Glossary("Fetch directive")}}</td>
    </tr>
    <tr>
      <th scope="row">Fallback</th>
      <td>
        <p>
          Falls diese Direktive fehlt, sucht der User-Agent zuerst nach der {{CSP("child-src")}}-Direktive, dann nach der {{CSP("script-src")}}-Direktive und schließlich nach der {{CSP("default-src")}}-Direktive, um die Ausführung des Workers zu steuern.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Syntax

Eine oder mehrere Quellen können für die `worker-src`-Richtlinie erlaubt werden:

```http
Content-Security-Policy: worker-src <source>;
Content-Security-Policy: worker-src <source> <source>;
```

### Quellen

`<source>` kann einer der in [CSP-Quellenwerte](/de/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#sources) aufgeführten Werte sein.

Beachten Sie, dass dieser gleiche Satz von Werten in allen {{Glossary("fetch directive", "fetch directives")}} (und einer [Anzahl anderer Direktiven](/de/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#relevant_directives)) verwendet werden kann.

## Beispiele

### Verletzungsfälle

Angenommen, dieser CSP-Header ist gesetzt:

```http
Content-Security-Policy: worker-src https://example.com/
```

{{domxref("Worker")}}, {{domxref("SharedWorker")}}, {{domxref("ServiceWorker")}} werden blockiert und nicht geladen:

```html
<script>
  let blockedWorker = new Worker("data:application/javascript,…");
  blockedWorker = new SharedWorker("https://not-example.com/");
  navigator.serviceWorker.register("https://not-example.com/sw.js");
</script>
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Security-Policy")}}
- [CSP für Web Workers](/de/docs/Web/API/Web_Workers_API/Using_web_workers#content_security_policy)
- {{domxref("Worker")}}, {{domxref("SharedWorker")}}, {{domxref("ServiceWorker")}}
