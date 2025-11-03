---
title: "Content-Security-Policy: connect-src Richtlinie"
short-title: connect-src
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/connect-src
l10n:
  sourceCommit: aff319cd81d10cfda31b13adb3263deafb284b20
---

Der HTTP-{{HTTPHeader("Content-Security-Policy")}} (CSP) **`connect-src`**-Richtlinie beschränkt die URLs, die über Skriptschnittstellen geladen werden können. Die folgenden APIs werden durch diese Richtlinie kontrolliert:

- Das [`ping`](/de/docs/Web/HTML/Reference/Elements/a#ping)-Attribut in {{htmlelement("a")}}-Elementen
- [`fetch()`](/de/docs/Web/API/Window/fetch)
- [`fetchLater()`](/de/docs/Web/API/Window/fetchLater) {{experimental_inline}}
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)
- [`WebSocket`](/de/docs/Web/API/WebSocket)
- [`EventSource`](/de/docs/Web/API/EventSource)
- [`Navigator.sendBeacon()`](/de/docs/Web/API/Navigator/sendBeacon)

> [!NOTE]
> `connect-src 'self'` wird in allen Browsern nicht in Websocket-Schemata aufgelöst, mehr Informationen in diesem [Issue](https://github.com/w3c/webappsec-csp/issues/7).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP-Version</th>
      <td>1</td>
    </tr>
    <tr>
      <th scope="row">Richtlinientyp</th>
      <td>{{Glossary("Fetch_directive", "Fetch-Richtlinie")}}</td>
    </tr>
    <tr>
      <th scope="row">{{CSP("default-src")}} Fallback</th>
      <td>
        Ja. Wenn diese Richtlinie fehlt, wird der User-Agent die
        <code>default-src</code>-Richtlinie suchen.
      </td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Content-Security-Policy: connect-src 'none';
Content-Security-Policy: connect-src <source-expression-list>;
```

Diese Richtlinie kann einen der folgenden Werte haben:

- `'none'`
  - : Keine Ressourcen dieses Typs dürfen geladen werden. Die einfachen Anführungszeichen sind obligatorisch.
- `<source-expression-list>`
  - : Eine durch Leerzeichen getrennte Liste von _Quell-Ausdruck_-Werten. Ressourcen dieses Typs dürfen geladen werden, wenn sie mit einem der angegebenen Quellausdrücke übereinstimmen. Für diese Richtlinie sind die folgenden Quell-Ausdruck-Werte anwendbar:
    - [`<host-source>`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#host-source)
    - [`<scheme-source>`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#scheme-source)
    - [`'self'`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#self)

## Beispiele

### Verletzungsfälle

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

  navigator.sendBeacon("https://not-example.com/", {
    /* … */
  });
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
