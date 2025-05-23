---
title: Sec-CH-UA-Form-Factors header
short-title: Sec-CH-UA-Form-Factors
slug: Web/HTTP/Reference/Headers/Sec-CH-UA-Form-Factors
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}{{SecureContext_Header}}{{SeeCompatTable}}

Der HTTP **`Sec-CH-UA-Form-Factors`** {{Glossary("Request_header", "Anforderungsheader")}} ist ein [Benutzeragent-Client-Hinweis](/de/docs/Web/HTTP/Guides/Client_hints#user_agent_client_hints), der Informationen über die Geräteform des Benutzeragenten bereitstellt.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Anforderungsheader")}},
        <a href="/de/docs/Web/HTTP/Guides/Client_hints">Client-Hinweis</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungsheader")}}</th>
      <td>Ja (<code>Sec-</code>-Präfix)</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Sec-CH-UA-Form-Factors: <form-factor>
Sec-CH-UA-Form-Factors: <form-factor>, …, <form-factor>
```

### Direktiven

- `<form-factor>`
  - : Eine Zeichenkette, die einen allgemeinen Geräteformfaktor angibt. Alle zutreffenden Formfaktoren können eingeschlossen werden. Die Bedeutungen der erlaubten Werte sind:
    - `"Desktop"`
      - : Ein Benutzeragent, der auf einem Personal Computer läuft.
    - `"Automotive"`
      - : Ein Benutzeragent, eingebettet in einem Fahrzeug, bei dem der Benutzer für das Führen des Fahrzeugs verantwortlich sein kann und nur eingeschränkt interagieren kann.
    - `"Mobile"`
      - : Kleines, touch-orientiertes Gerät, das typischerweise bei einer Person getragen wird.
    - `"Tablet"`
      - : Ein touch-orientiertes Gerät, das größer als `"Mobile"` ist und typischerweise nicht bei einer Person getragen wird.
    - `"XR"`
      - : Immersive Geräte, die die Umgebung des Benutzers erweitern oder ersetzen.
    - `"EInk"`
      - : Ein Gerät, das durch langsame Bildschirmaktualisierungen und begrenzte oder keine Farbauflösung charakterisiert ist.
    - `"Watch"`
      - : Ein mobiles Gerät mit einem winzigen Bildschirm (typischerweise weniger als 2 Zoll), das so getragen wird, dass der Benutzer schnell darauf blicken kann.

## Beispiele

### Verwendung von Sec-CH-UA-Form-Factors

Ein Server fordert den `Sec-CH-UA-Form-Factors`-Header an, indem er das {{HTTPHeader("Accept-CH")}} in einer _Antwort_ auf eine beliebige Anforderung des Clients einfügt und den Namen des gewünschten Headers als Token verwendet:

```http
HTTP/1.1 200 OK
Accept-CH: Sec-CH-UA-Form-Factors
```

Der Client kann sich dazu entscheiden, den Hinweis bereitzustellen und den `Sec-CH-UA-Form-Factors`-Header zu nachfolgenden Anfragen hinzuzufügen. Zum Beispiel könnte der Client den Header wie folgt hinzufügen:

```http
GET /my/page HTTP/1.1
Host: example.site

Sec-CH-UA-Mobile: ?0
Sec-CH-UA-Form-Factors: "EInk"
```

In diesem Fall bedeutet `"EInk"`, dass das Gerät durch langsame Bildschirmaktualisierungen und begrenzte Farbauflösung charakterisiert ist, und als solches können sich die Antworten je nach diesem Hinweis unterscheiden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Client-Hinweise](/de/docs/Web/HTTP/Guides/Client_hints)
- [User-Agent Client Hints API](/de/docs/Web/API/User-Agent_Client_Hints_API)
- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching: Vary](/de/docs/Web/HTTP/Guides/Caching#vary) und {{HTTPHeader("Vary")}}-Header
- [Verbesserung der Benutzer-Privatsphäre und der Entwicklererfahrung mit User-Agent-Client-Hinweisen](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) auf developer.chrome.com
