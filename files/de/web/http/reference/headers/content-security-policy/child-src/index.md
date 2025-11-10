---
title: "Content-Security-Policy: child-src-Direktive"
short-title: child-src
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/child-src
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Die HTTP-{{HTTPHeader("Content-Security-Policy")}} (CSP) **`child-src`**-Direktive definiert die gültigen Quellen für [Web Workers](/de/docs/Web/API/Web_Workers_API) und verschachtelte Browsing-Kontexte, die mithilfe von Elementen wie {{HTMLElement("frame")}} und {{HTMLElement("iframe")}} geladen werden. Für Workers werden nicht konforme Anfragen vom Benutzeragenten als fatale Netzfehler behandelt.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP-Version</th>
      <td>2</td>
    </tr>
    <tr>
      <th scope="row">Direktiventyp</th>
      <td>{{Glossary("Fetch_directive", "Fetch-Direktive")}}</td>
    </tr>
    <tr>
      <th scope="row">{{CSP("default-src")}}-Fallback</th>
      <td>
        Ja. Wenn diese Direktive fehlt, sucht der Benutzeragent nach der
        <code>default-src</code>-Direktive.
      </td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Content-Security-Policy: child-src 'none';
Content-Security-Policy: child-src <source-expression-list>;
```

Diese Direktive kann einen der folgenden Werte haben:

- `'none'`
  - : Keine Ressourcen dieses Typs dürfen geladen werden. Die einfachen Anführungszeichen sind obligatorisch.
- `<source-expression-list>`
  - : Eine durch Leerzeichen getrennte Liste von _source expression_-Werten. Ressourcen dieses Typs dürfen geladen werden, wenn sie mit einem der angegebenen Source Expressions übereinstimmen. Für diese Direktive sind die folgenden Source Expression-Werte anwendbar:
    - [`<host-source>`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#host-source)
    - [`<scheme-source>`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#scheme-source)
    - [`'self'`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#self)

## Beispiele

### Verletzungsfälle

Gegeben dieser CSP-Header:

```http
Content-Security-Policy: child-src https://example.com/
```

Dieses {{HTMLElement("iframe")}} und dieser Worker werden blockiert und nicht geladen:

```html
<iframe src="https://not-example.com"></iframe>

<script>
  const blockedWorker = new Worker("data:text/javascript,…");
</script>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Security-Policy")}}
- {{HTMLElement("frame")}} und {{HTMLElement("iframe")}}
- [`Worker`](/de/docs/Web/API/Worker), [`SharedWorker`](/de/docs/Web/API/SharedWorker), [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)
