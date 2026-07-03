---
title: "Content-Security-Policy: connect-src-Direktive"
short-title: connect-src
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/connect-src
l10n:
  sourceCommit: 8d9cda4e9080e9c324a521f40c7e0704ef94ce07
---

Die HTTP-Direktive {{HTTPHeader("Content-Security-Policy")}} (CSP) **`connect-src`** beschränkt die URLs, die über Skriptschnittstellen geladen werden können. Die folgenden APIs werden durch diese Direktive kontrolliert:

- Das [`ping`](/de/docs/Web/HTML/Reference/Elements/a#ping)-Attribut in {{htmlelement("a")}}-Elementen
- [`fetch()`](/de/docs/Web/API/Window/fetch)
- [`fetchLater()`](/de/docs/Web/API/Window/fetchLater) {{experimental_inline}}
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)
- [`WebSocket`](/de/docs/Web/API/WebSocket)
- [`EventSource`](/de/docs/Web/API/EventSource)
- [`Navigator.sendBeacon()`](/de/docs/Web/API/Navigator/sendBeacon)

> [!NOTE]
> `connect-src 'self'` löst nicht in allen Browsern zu WebSocket-Schemata auf, weitere Informationen finden Sie in diesem [Issue](https://github.com/w3c/webappsec-csp/issues/7).

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
      <th scope="row">{{CSP("default-src")}} Fallback</th>
      <td>
        Ja. Wenn diese Direktive fehlt, sucht der User-Agent nach der
        <code>default-src</code>-Direktive.
      </td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Content-Security-Policy: connect-src 'none';
Content-Security-Policy: connect-src <source-expression-list>;
```

Diese Direktive kann einen der folgenden Werte haben:

- `'none'`
  - : Es dürfen keine Ressourcen dieses Typs geladen werden. Die einfachen Anführungszeichen sind verbindlich.
- `<source-expression-list>`
  - : Eine durch Leerzeichen getrennte Liste von _source expression_-Werten. Ressourcen dieses Typs dürfen geladen werden, wenn sie mit einem der angegebenen Source-Expression-Werte übereinstimmen. Für diese Direktive sind die folgenden Source-Expression-Werte anwendbar:
    - [`<host-source>`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#host-source)
    - [`<scheme-source>`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#scheme-source)
    - [`'self'`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#self)

## Beispiele

### Verstöße

Angenommen, dieser CSP-Header:

```http
Content-Security-Policy: connect-src https://example.com/
```

Die folgenden Verbindungen werden blockiert und nicht geladen:

```html
<a ping="https://not-example.com" href="/">Link</a>
<script>
  const response = fetch("https://not-example.com/");

  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://not-example.com/");
  xhr.send();

  const ws = new WebSocket("wss://not-example.com/");

  const es = new EventSource("https://not-example.com/");

  navigator.sendBeacon("https://not-example.com/", {/* … */});
</script>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Security-Policy")}}
- {{HTMLElement("a")}} [`ping`](/de/docs/Web/HTML/Reference/Elements/a#ping)
- [`fetch()`](/de/docs/Web/API/Window/fetch)
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)
- [`WebSocket`](/de/docs/Web/API/WebSocket)
- [`EventSource`](/de/docs/Web/API/EventSource)
