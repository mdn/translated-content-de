---
title: "CSP: connect-src"
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/connect-src
l10n:
  sourceCommit: 31ba9f6da2dd1175250ece8d8d467d523e79b447
---

{{HTTPSidebar}}

Die HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP)
**`connect-src`** Direktive schränkt die URLs ein, die über Skriptschnittstellen geladen werden können. Die folgenden APIs werden durch diese Direktive kontrolliert:

- Das [`ping`](/de/docs/Web/HTML/Element/a#ping)-Attribut in {{htmlelement("a")}}-Elementen
- [`fetch()`](/de/docs/Web/API/Window/fetch)
- [`fetchLater()`](/de/docs/Web/API/Window/fetchLater) {{experimental_inline}}
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)
- [`WebSocket`](/de/docs/Web/API/WebSocket)
- [`EventSource`](/de/docs/Web/API/EventSource)
- [`Navigator.sendBeacon()`](/de/docs/Web/API/Navigator/sendBeacon)

> **Note:** `connect-src 'self'` bezieht sich in allen Browsern nicht auf Websocket-Schemata, mehr Informationen in diesem [Issue](https://github.com/w3c/webappsec-csp/issues/7).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP-Version</th>
      <td>1</td>
    </tr>
    <tr>
      <th scope="row">Direktivtyp</th>
      <td>{{Glossary("Fetch_directive", "Fetch-Direktive")}}</td>
    </tr>
    <tr>
      <th scope="row">{{CSP("default-src")}} Fallback</th>
      <td>
        Ja. Wenn diese Direktive fehlt, wird der User-Agent nach der
        <code>default-src</code> Direktive suchen.
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
  - : Keine Ressourcen dieser Art dürfen geladen werden. Die einzelnen Anführungszeichen sind obligatorisch.
- `<source-expression-list>`

  - : Eine durch Leerzeichen getrennte Liste von _source expression_-Werten. Ressourcen dieser Art dürfen geladen werden, wenn sie mit einem der angegebenen Quellausdrücke übereinstimmen. Für diese Direktive sind die folgenden Quellausdruckswerte anwendbar:

    - [`<host-source>`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#host-source)
    - [`<scheme-source>`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#scheme-source)
    - [`'self'`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#self)

## Beispiele

### Verletzungsfälle

Angenommen, dieser CSP-Header ist gegeben:

```http
Content-Security-Policy: connect-src https://example.com/
```

Die folgenden Verbindungen werden blockiert und nicht geladen:

```html
<a ping="https://not-example.com">
  <script>
    const response = fetch("https://not-example.com/");

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://not-example.com/");
    xhr.send();

    const ws = new WebSocket("wss://not-example.com/");

    const es = new EventSource("https://not-example.com/");

    navigator.sendBeacon("https://not-example.com/", {
      /* … */
    });
  </script></a
>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Security-Policy")}}
- {{HTMLElement("a")}} [`ping`](/de/docs/Web/HTML/Element/a#ping)
- [`fetch()`](/de/docs/Web/API/Window/fetch)
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)
- [`WebSocket`](/de/docs/Web/API/WebSocket)
- [`EventSource`](/de/docs/Web/API/EventSource)
