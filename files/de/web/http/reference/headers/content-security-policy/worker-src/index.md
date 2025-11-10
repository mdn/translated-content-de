---
title: "Content-Security-Policy: worker-src-Direktive"
short-title: worker-src
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/worker-src
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Die HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP)
**`worker-src`** Direktive legt gültige Quellen für
[`Worker`](/de/docs/Web/API/Worker), [`SharedWorker`](/de/docs/Web/API/SharedWorker) oder [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)
Skripte fest.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP-Version</th>
      <td>3</td>
    </tr>
    <tr>
      <th scope="row">Direktivtyp</th>
      <td>{{Glossary("Fetch_directive", "Fetch-Direktive")}}</td>
    </tr>
    <tr>
      <th scope="row">Fallback</th>
      <td>
        <p>
          Wenn diese Direktive fehlt, sucht der Benutzeragent zuerst nach der
          {{CSP("child-src")}} Direktive, dann nach der
          {{CSP("script-src")}} Direktive und schließlich nach der
          {{CSP("default-src")}} Direktive, um die Ausführung von Workern zu steuern.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Content-Security-Policy: worker-src 'none';
Content-Security-Policy: worker-src <source-expression-list>;
```

Diese Direktive kann einen der folgenden Werte haben:

- `'none'`
  - : Es dürfen keine Ressourcen dieses Typs geladen werden. Die einfachen Anführungszeichen sind zwingend.
- `<source-expression-list>`
  - : Eine durch Leerzeichen getrennte Liste von _source expression_ Werten. Ressourcen dieses Typs dürfen geladen werden, wenn sie mit einem der angegebenen Quellausdrücke übereinstimmen. Für diese Direktive sind folgende Quellausdruckswerte anwendbar:
    - [`<host-source>`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#host-source)
    - [`<scheme-source>`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#scheme-source)
    - [`'self'`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#self)

## Beispiele

### Verstöße

Gegeben ist dieser CSP-Header:

```http
Content-Security-Policy: worker-src https://example.com/
```

[`Worker`](/de/docs/Web/API/Worker), [`SharedWorker`](/de/docs/Web/API/SharedWorker), [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) werden blockiert und nicht geladen:

```html
<script>
  let blockedWorker = new Worker("data:text/javascript,…");
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
