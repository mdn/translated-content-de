---
title: "CSP: connect-src"
slug: Web/HTTP/Headers/Content-Security-Policy/connect-src
l10n:
  sourceCommit: 6368e2b112a343fa00ae1a8cf51ceb0b0b845834
---

{{HTTPSidebar}}

Der HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP)
**`connect-src`**-Direktive beschränkt die URLs, die über Skriptschnittstellen geladen werden können. Die folgenden APIs werden von dieser Direktive gesteuert:

- Das [`ping`](/de/docs/Web/HTML/Element/a#ping)-Attribut in {{htmlelement("a")}}-Elementen
- [`fetch()`](/de/docs/Web/API/Window/fetch)
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)
- [`WebSocket`](/de/docs/Web/API/WebSocket)
- [`EventSource`](/de/docs/Web/API/EventSource)
- [`Navigator.sendBeacon()`](/de/docs/Web/API/Navigator/sendBeacon)

> **Note:** `connect-src 'self'` wird in allen Browsern nicht für Websocket-Schemata aufgelöst, weitere Informationen finden Sie in diesem [Issue](https://github.com/w3c/webappsec-csp/issues/7).

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
      <th scope="row">{{CSP("default-src")}}-Fallback</th>
      <td>
        Ja. Wenn diese Direktive fehlt, wird der Benutzeragent nach der
        <code>default-src</code>-Direktive suchen.
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
  - : Keine Ressourcen dieses Typs dürfen geladen werden. Die einfachen Anführungszeichen sind obligatorisch.
- `<source-expression-list>`

  - : Eine durch Leerzeichen getrennte Liste von _source expression_-Werten. Ressourcen dieses Typs dürfen geladen werden, wenn sie mit einem der angegebenen Quellausdrücke übereinstimmen. Für diese Direktive sind die folgenden Quellausdrücke anwendbar:

    - [`<host-source>`](/de/docs/Web/HTTP/Headers/Content-Security-Policy#host-source)
    - [`<scheme-source>`](/de/docs/Web/HTTP/Headers/Content-Security-Policy#scheme-source)
    - [`'self'`](/de/docs/Web/HTTP/Headers/Content-Security-Policy#self)

## Beispiele

### Verletzungsfälle

Angenommen, dieser CSP-Header:

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
