---
title: "CSP: connect-src"
slug: Web/HTTP/Headers/Content-Security-Policy/connect-src
l10n:
  sourceCommit: 58ad1df59f2ffb9ecab4e27fe1bdf1eb5a55f89b
---

{{HTTPSidebar}}

Das HTTP-{{HTTPHeader("Content-Security-Policy")}} (CSP) **`connect-src`**-Direktive beschränkt die URLs, die über Skriptschnittstellen geladen werden können. Die eingeschränkten APIs sind:

- {{HTMLElement("a")}} [`ping`](/de/docs/Web/HTML/Element/a#ping),
- [`fetch()`](/de/docs/Web/API/Window/fetch),
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest),
- [`WebSocket`](/de/docs/Web/API/WebSocket),
- [`EventSource`](/de/docs/Web/API/EventSource), und
- [`Navigator.sendBeacon()`](/de/docs/Web/API/Navigator/sendBeacon).

> **Note:** `connect-src 'self'` wird nicht in allen Browsern auf Websocket-Schemata aufgelöst, weitere Informationen in diesem [Issue](https://github.com/w3c/webappsec-csp/issues/7).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP-Version</th>
      <td>1</td>
    </tr>
    <tr>
      <th scope="row">Direktivtyp</th>
      <td>[Fetch-Direktive](/de/docs/Glossary/Fetch_directive)</td>
    </tr>
    <tr>
      <th scope="row">{{CSP("default-src")}} Fallback</th>
      <td>
        Ja. Wenn diese Direktive fehlt, sucht der User Agent nach der
        <code>default-src</code>-Direktive.
      </td>
    </tr>
  </tbody>
</table>

## Syntax

Eine oder mehrere Quellen können für die connect-src-Richtlinie zugelassen werden:

```http
Content-Security-Policy: connect-src <source>;
Content-Security-Policy: connect-src <source> <source>;
```

### Quellen

`<source>` kann einer der Werte sein, die in [CSP-Quellenwerte](/de/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#sources) aufgeführt sind.

Beachten Sie, dass dieser gleiche Satz von Werten in allen [Fetch-Direktiven](/de/docs/Glossary/fetch_directive) (und einer [Anzahl anderer Direktiven](/de/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#relevant_directives)) verwendet werden kann.

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
