---
title: Sec-Fetch-Mode
slug: Web/HTTP/Headers/Sec-Fetch-Mode
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}

Der **`Sec-Fetch-Mode`** {{Glossary("Fetch metadata request header", "fetch metadata request header")}} gibt den [mode](/de/docs/Web/API/Request/mode) der Anfrage an.

Im Allgemeinen ermöglicht dies einem Server, zwischen Anfragen, die von einem Benutzer stammen, der zwischen HTML-Seiten navigiert, und Anfragen zum Laden von Bildern und anderen Ressourcen zu unterscheiden. Zum Beispiel würde dieser Header `navigate` für Navigationsanfragen auf oberster Ebene enthalten, während `no-cors` zum Laden eines Bildes verwendet wird.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Fetch Metadata Request Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>ja (Präfix <code>Sec-</code>)</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted request header")}}
      </th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Sec-Fetch-Mode: cors
Sec-Fetch-Mode: navigate
Sec-Fetch-Mode: no-cors
Sec-Fetch-Mode: same-origin
Sec-Fetch-Mode: websocket
```

Server sollten diesen Header ignorieren, wenn er einen anderen Wert enthält.

## Direktiven

> [!NOTE]
> Diese Direktiven entsprechen den Werten in [`Request.mode`](/de/docs/Web/API/Request/mode#value).

- `cors`
  - : Die Anfrage ist eine [CORS-Protokoll](/de/docs/Web/HTTP/CORS)-Anfrage.
- `navigate`
  - : Die Anfrage wird durch Navigation zwischen HTML-Dokumenten initiiert.
- `no-cors`
  - : Die Anfrage ist eine no-cors-Anfrage (siehe [`Request.mode`](/de/docs/Web/API/Request/mode#value)).
- `same-origin`
  - : Die Anfrage erfolgt aus demselben Ursprung wie die angeforderte Ressource.
- `websocket`
  - : Die Anfrage wird gemacht, um eine [WebSocket](/de/docs/Web/API/WebSockets_API)-Verbindung herzustellen.

## Beispiele

Wenn ein Benutzer auf einen Seitenlink zu einer anderen Seite im selben Ursprung klickt, hätte die resultierende Anfrage die folgenden Header (beachten Sie, dass der Modus `navigate` ist):

```http
Sec-Fetch-Dest: document
Sec-Fetch-Mode: navigate
Sec-Fetch-Site: same-origin
Sec-Fetch-User: ?1
```

Eine cross-site Anfrage, die von einem {{HTMLElement("img")}} Element erzeugt wird, würde eine Anfrage mit den folgenden HTTP-Anfrage-Headern resultieren (beachten Sie, dass der Modus `no-cors` ist):

```http
Sec-Fetch-Dest: image
Sec-Fetch-Mode: no-cors
Sec-Fetch-Site: cross-site
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandte Header

  - {{HTTPHeader("Sec-Fetch-Dest")}}
  - {{HTTPHeader("Sec-Fetch-Site")}}
  - {{HTTPHeader("Sec-Fetch-User")}}

- [Schützen Sie Ihre Ressourcen vor Webangriffen mit Fetch Metadata](https://web.dev/articles/fetch-metadata) (web.dev)
- [Fetch Metadata Request Headers spielerische Umgebung](https://secmetadata.appspot.com/) (secmetadata.appspot.com)
