---
title: "CSP: worker-src"
slug: Web/HTTP/Headers/Content-Security-Policy/worker-src
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

Das HTTP-{{HTTPHeader("Content-Security-Policy")}} (CSP)
**`worker-src`**-Direktive gibt gültige Quellen für
[`Worker`](/de/docs/Web/API/Worker), [`SharedWorker`](/de/docs/Web/API/SharedWorker) oder [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)
Skripte an.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP-Version</th>
      <td>3</td>
    </tr>
    <tr>
      <th scope="row">Direktivtyp</th>
      <td>[Fetch-Direktive](/de/docs/Glossary/Fetch_directive)</td>
    </tr>
    <tr>
      <th scope="row">Ausweichmöglichkeit</th>
      <td>
        <p>
          Wenn diese Direktive nicht vorhanden ist, wird der User-Agent zunächst nach der
          {{CSP("child-src")}}-Direktive suchen, dann nach der
          {{CSP("script-src")}}-Direktive und schließlich nach der
          {{CSP("default-src")}}-Direktive, um die Ausführung von Workern zu regeln.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Syntax

Für die `worker-src`-Richtlinie können eine oder mehrere Quellen erlaubt werden:

```http
Content-Security-Policy: worker-src <source>;
Content-Security-Policy: worker-src <source> <source>;
```

### Quellen

`<source>` kann einer der in [CSP-Quellenwerte](/de/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#sources) aufgeführten Werte sein.

Beachten Sie, dass derselbe Satz von Werten in allen [Fetch-Direktiven](/de/docs/Glossary/fetch_directive) (und einer [Anzahl anderer Direktiven](/de/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#relevant_directives)) verwendet werden kann.

## Beispiele

### Verstöße

Gegeben ist dieser CSP-Header:

```http
Content-Security-Policy: worker-src https://example.com/
```

[`Worker`](/de/docs/Web/API/Worker), [`SharedWorker`](/de/docs/Web/API/SharedWorker), [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) werden
blockiert und nicht geladen:

```html
<script>
  let blockedWorker = new Worker("data:application/javascript,…");
  blockedWorker = new SharedWorker("https://not-example.com/");
  navigator.serviceWorker.register("https://not-example.com/sw.js");
</script>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Security-Policy")}}
- [CSP für Web Workers](/de/docs/Web/API/Web_Workers_API/Using_web_workers#content_security_policy)
- [`Worker`](/de/docs/Web/API/Worker), [`SharedWorker`](/de/docs/Web/API/SharedWorker), [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)
