---
title: Service-Worker-Navigation-Preload
slug: Web/HTTP/Headers/Service-Worker-Navigation-Preload
l10n:
  sourceCommit: 58ad1df59f2ffb9ecab4e27fe1bdf1eb5a55f89b
---

{{HTTPSidebar}}

Der **`Service-Worker-Navigation-Preload`**-Anforderungsheader zeigt an, dass die Anfrage das Ergebnis einer {{domxref("Window/fetch", "fetch()")}}-Operation ist, die während des Vorladens der Navigation vom Service Worker ausgeführt wurde. Dies ermöglicht es einem Server, mit einer anderen Ressource zu antworten als bei einem normalen `fetch()`.

Wenn das Setzen dieses Headers zu einer anderen Antwort führen kann, muss der Server `Vary: Service-Worker-Navigation-Preload` setzen, um sicherzustellen, dass die unterschiedlichen Antworten zwischengespeichert werden.

Für weitere Informationen siehe {{domxref("NavigationPreloadManager.setHeaderValue()")}} (und {{domxref("NavigationPreloadManager")}}).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
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
  - : Ein beliebiger Wert, der angibt, welche Daten in der Antwort auf die Vorladeanforderung gesendet werden sollen.
    Dieser Wert ist standardmäßig `true`.
    Er kann in einem Service Worker auf jeden anderen Stringwert gesetzt werden, unter Verwendung von {{domxref("NavigationPreloadManager.setHeaderValue()")}}.

## Beispiele

Der unten stehende Header wird standardmäßig gesendet.

```http
Service-Worker-Navigation-Preload: true
```

Der Service Worker kann einen anderen Header-Wert setzen, indem er {{domxref("NavigationPreloadManager.setHeaderValue()")}} verwendet. Zum Beispiel, um zu verlangen, dass ein Fragment der angeforderten Ressource im JSON-Format zurückgegeben wird, könnte der Wert mit dem String `json_fragment1` gesetzt werden.

```http
Service-Worker-Navigation-Preload: json_fragment1
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
