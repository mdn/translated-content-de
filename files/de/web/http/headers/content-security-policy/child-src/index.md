---
title: "CSP: child-src"
slug: Web/HTTP/Headers/Content-Security-Policy/child-src
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

Der HTTP-Header {{HTTPHeader("Content-Security-Policy")}} (CSP) definiert mit der **`child-src`**-Direktive gültige Quellen für [Web Worker](/de/docs/Web/API/Web_Workers_API) und eingebettete Browsing-Kontexte, die mithilfe von Elementen wie {{HTMLElement("frame")}} und {{HTMLElement("iframe")}} geladen werden. Für Worker werden nicht konforme Anfragen vom Benutzeragenten als schwerwiegende Netzwerkfehler behandelt.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP-Version</th>
      <td>2</td>
    </tr>
    <tr>
      <th scope="row">Art der Direktive</th>
      <td>[Fetch-Direktive](/de/docs/Glossary/Fetch_directive)</td>
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

Für die `child-src`-Richtlinie können eine oder mehrere Quellen zugelassen werden:

```http
Content-Security-Policy: child-src <source>;
Content-Security-Policy: child-src <source> <source>;
```

### Quellen

`<source>` kann einer der in den [CSP-Quellenwerten](/de/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#sources) aufgeführten Werte sein.

Beachten Sie, dass dieser gleiche Satz von Werten in allen [Fetch-Direktiven](/de/docs/Glossary/fetch_directive) (sowie in einer [Anzahl anderer Direktiven](/de/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#relevant_directives)) verwendet werden kann.

## Beispiele

### Verletzungsfälle

Angenommen, dieser CSP-Header:

```http
Content-Security-Policy: child-src https://example.com/
```

Dieses {{HTMLElement("iframe")}} und der Worker werden blockiert und nicht geladen:

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
