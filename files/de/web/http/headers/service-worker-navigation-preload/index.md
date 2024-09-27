---
title: Service-Worker-Navigation-Preload
slug: Web/HTTP/Headers/Service-Worker-Navigation-Preload
l10n:
  sourceCommit: 58ad1df59f2ffb9ecab4e27fe1bdf1eb5a55f89b
---

{{HTTPSidebar}}

Der **`Service-Worker-Navigation-Preload`** Anforderungs-Header zeigt an, dass die Anforderung das Ergebnis einer [`fetch()`](/de/docs/Web/API/Window/fetch)-Operation ist, die während des Preloadings der Navigation im Service Worker durchgeführt wurde.
Er erlaubt es einem Server, mit einer anderen Ressource zu antworten als bei einem normalen `fetch()`.

Wenn das Setzen dieses Headers zu einer anderen Antwort führen könnte, muss der Server `Vary: Service-Worker-Navigation-Preload` setzen, um sicherzustellen, dass die verschiedenen Antworten zwischengespeichert werden.

Weitere Informationen finden Sie unter [`NavigationPreloadManager.setHeaderValue()`](/de/docs/Web/API/NavigationPreloadManager/setHeaderValue) (und [`NavigationPreloadManager`](/de/docs/Web/API/NavigationPreloadManager)).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>[Anforderungs-Header](/de/docs/Glossary/Request_header)</td>
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
  - : Ein beliebiger Wert, der angibt, welche Daten in der Antwort auf die Preload-Anforderung gesendet werden sollen.
    Standardmäßig ist dies `true`.
    Im Service Worker kann er mit jedem anderen Zeichenfolgenwert gesetzt werden, indem [`NavigationPreloadManager.setHeaderValue()`](/de/docs/Web/API/NavigationPreloadManager/setHeaderValue) verwendet wird.

## Beispiele

Der untenstehende Header wird standardmäßig gesendet.

```http
Service-Worker-Navigation-Preload: true
```

Der Service Worker kann einen anderen Header-Wert setzen, indem [`NavigationPreloadManager.setHeaderValue()`](/de/docs/Web/API/NavigationPreloadManager/setHeaderValue) verwendet wird.
Zum Beispiel könnte, um anzufordern, dass ein Fragment der angeforderten Ressource im JSON-Format zurückgegeben wird, der Wert mit dem String `json_fragment1` gesetzt werden.

```http
Service-Worker-Navigation-Preload: json_fragment1
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
