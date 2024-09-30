---
title: Service-Worker-Navigation-Preload
slug: Web/HTTP/Headers/Service-Worker-Navigation-Preload
l10n:
  sourceCommit: 58ad1df59f2ffb9ecab4e27fe1bdf1eb5a55f89b
---

{{HTTPSidebar}}

Der **`Service-Worker-Navigation-Preload`** Anforderungsheader zeigt an, dass die Anfrage das Ergebnis einer [`fetch()`](/de/docs/Web/API/Window/fetch)-Operation ist, die während des Preloadings der Navigation durch einen Service Worker durchgeführt wurde.
Er ermöglicht es einem Server, mit einer anderen Ressource als bei einem normalen `fetch()` zu antworten.

Sollte das Setzen dieses Headers zu einer anderen Antwort führen, muss der Server `Vary: Service-Worker-Navigation-Preload` setzen, um sicherzustellen, dass die verschiedenen Antworten zwischengespeichert werden.

Weitere Informationen finden Sie unter [`NavigationPreloadManager.setHeaderValue()`](/de/docs/Web/API/NavigationPreloadManager/setHeaderValue) (und [`NavigationPreloadManager`](/de/docs/Web/API/NavigationPreloadManager)).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>[Anforderungsheader](/de/docs/Glossary/Request_header)</td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Header-Name](/de/docs/Glossary/Forbidden_header_name)</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Service-Worker-Navigation-Preload: <value>
```

## Direktiven

- `<value>`
  - : Ein beliebiger Wert, der angibt, welche Daten in der Antwort auf die Preload-Anfrage gesendet werden sollen.
    Dieser Wert ist standardmäßig `true`.
    Es kann im Service Worker auf einen anderen Zeichenfolgenwert gesetzt werden, indem [`NavigationPreloadManager.setHeaderValue()`](/de/docs/Web/API/NavigationPreloadManager/setHeaderValue) verwendet wird.

## Beispiele

Der untenstehende Header wird standardmäßig gesendet.

```http
Service-Worker-Navigation-Preload: true
```

Der Service Worker kann einen anderen Header-Wert mit [`NavigationPreloadManager.setHeaderValue()`](/de/docs/Web/API/NavigationPreloadManager/setHeaderValue) festlegen.
Um zum Beispiel zu verlangen, dass ein Fragment der angeforderten Ressource im JSON-Format zurückgegeben wird, könnte der Wert mit der Zeichenfolge `json_fragment1` gesetzt werden.

```http
Service-Worker-Navigation-Preload: json_fragment1
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
