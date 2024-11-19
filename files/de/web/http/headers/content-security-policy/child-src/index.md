---
title: "CSP: child-src"
slug: Web/HTTP/Headers/Content-Security-Policy/child-src
l10n:
  sourceCommit: 6368e2b112a343fa00ae1a8cf51ceb0b0b845834
---

{{HTTPSidebar}}

Die HTTP-Direktive {{HTTPHeader("Content-Security-Policy")}} (CSP) **`child-src`** definiert die zulässigen Quellen für [Web-Worker](/de/docs/Web/API/Web_Workers_API) und geschachtelte Browsing-Kontexte, die mit Elementen wie {{HTMLElement("frame")}} und {{HTMLElement("iframe")}} geladen werden. Für Worker werden nicht konforme Anfragen vom Benutzeragenten als schwerwiegende Netzwerkfehler behandelt.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP-Version</th>
      <td>2</td>
    </tr>
    <tr>
      <th scope="row">Direktiv-Typ</th>
      <td>{{Glossary("Fetch_directive", "Fetch directive")}}</td>
    </tr>
    <tr>
      <th scope="row">{{CSP("default-src")}} Fallback</th>
      <td>
        Ja. Wenn diese Direktive fehlt, wird der Benutzeragent nach der
        <code>default-src</code>-Direktive suchen.
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
  - : Keine Ressourcen dieses Typs dürfen geladen werden. Die einfachen Anführungszeichen sind zwingend erforderlich.
- `<source-expression-list>`

  - : Eine durch Leerzeichen getrennte Liste von _source expression_-Werten. Ressourcen dieses Typs dürfen geladen werden, wenn sie mit einem der angegebenen Quellenausdrücke übereinstimmen. Für diese Direktive sind die folgenden Quellenausdruckswerte anwendbar:

    - [`<host-source>`](/de/docs/Web/HTTP/Headers/Content-Security-Policy#host-source)
    - [`<scheme-source>`](/de/docs/Web/HTTP/Headers/Content-Security-Policy#scheme-source)
    - [`'self'`](/de/docs/Web/HTTP/Headers/Content-Security-Policy#self)

## Beispiele

### Verstöße

Gegeben dieses CSP-Header:

```http
Content-Security-Policy: child-src https://example.com/
```

Dieses {{HTMLElement("iframe")}} und dieser Worker werden blockiert und nicht geladen:

```html
<iframe src="https://not-example.com"></iframe>

<script>
  const blockedWorker = new Worker("data:application/javascript,…");
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
