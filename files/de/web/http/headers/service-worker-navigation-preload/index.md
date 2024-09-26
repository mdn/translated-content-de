---
title: Service-Worker-Navigation-Preload
slug: Web/HTTP/Headers/Service-Worker-Navigation-Preload
l10n:
  sourceCommit: 58ad1df59f2ffb9ecab4e27fe1bdf1eb5a55f89b
---

{{HTTPSidebar}}

Der **`Service-Worker-Navigation-Preload`** Anfrage-Header gibt an, dass die Anfrage das Ergebnis einer {{domxref("Window/fetch", "fetch()")}}-Operation ist, die während des Service-Worker-Navigationsvorladens gemacht wurde. Er ermöglicht es einem Server, mit einer anderen Ressource als bei einem normalen `fetch()` zu antworten.

Wenn das Setzen dieses Headers zu einer anderen Antwort führt, muss der Server `Vary: Service-Worker-Navigation-Preload` setzen, um sicherzustellen, dass die verschiedenen Antworten zwischengespeichert werden.

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
  - : Ein willkürlicher Wert, der angibt, welche Daten in die Antwort auf die Vorladeanforderung gesendet werden sollen.
    Standardmäßig ist dieser auf `true` gesetzt.
    Er kann im Service Worker auf jeden anderen String-Wert gesetzt werden, unter Verwendung von {{domxref("NavigationPreloadManager.setHeaderValue()")}}.

## Beispiele

Der untenstehende Header wird standardmäßig gesendet.

```http
Service-Worker-Navigation-Preload: true
```

Der Service Worker kann einen anderen Header-Wert einstellen, unter Verwendung von {{domxref("NavigationPreloadManager.setHeaderValue()")}}. Um zum Beispiel zu verlangen, dass ein Fragment der angeforderten Ressource im JSON-Format zurückgegeben wird, könnte der Wert mit dem String `json_fragment1` eingestellt werden.

```http
Service-Worker-Navigation-Preload: json_fragment1
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
