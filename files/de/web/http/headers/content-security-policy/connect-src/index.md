---
title: "CSP: connect-src"
slug: Web/HTTP/Headers/Content-Security-Policy/connect-src
l10n:
  sourceCommit: 58ad1df59f2ffb9ecab4e27fe1bdf1eb5a55f89b
---

{{HTTPSidebar}}

Die HTTP-{{HTTPHeader("Content-Security-Policy")}} (CSP)
**`connect-src`**-Direktive beschränkt die URLs, die mit Skript-Schnittstellen geladen werden können. Die eingeschränkten APIs sind:

- {{HTMLElement("a")}} [`ping`](/de/docs/Web/HTML/Element/a#ping),
- {{domxref("Window/fetch", "fetch()")}},
- {{domxref("XMLHttpRequest")}},
- {{domxref("WebSocket")}},
- {{domxref("EventSource")}}, und
- {{domxref("Navigator.sendBeacon()")}}.

> **Note:** `connect-src 'self'` wird in allen Browsern nicht in Websocket-Schemata aufgelöst, mehr Informationen in diesem [Issue](https://github.com/w3c/webappsec-csp/issues/7).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP-Version</th>
      <td>1</td>
    </tr>
    <tr>
      <th scope="row">Direktiventyp</th>
      <td>{{Glossary("Fetch directive")}}</td>
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

Eine oder mehrere Quellen können für die connect-src-Policy erlaubt werden:

```http
Content-Security-Policy: connect-src <source>;
Content-Security-Policy: connect-src <source> <source>;
```

### Quellen

`<source>` kann einer der Werte sein, die in [CSP-Quellenwerte](/de/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#sources) aufgelistet sind.

Beachten Sie, dass dieses gleiche Set von Werten in allen {{Glossary("fetch directive", "fetch directives")}} (und einer [Anzahl anderer Direktiven](/de/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#relevant_directives)) verwendet werden kann.

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
- {{domxref("Window/fetch", "fetch()")}}
- {{domxref("XMLHttpRequest")}}
- {{domxref("WebSocket")}}
- {{domxref("EventSource")}}
