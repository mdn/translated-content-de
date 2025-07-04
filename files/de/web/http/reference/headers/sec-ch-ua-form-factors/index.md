---
title: Sec-CH-UA-Form-Factors header
short-title: Sec-CH-UA-Form-Factors
slug: Web/HTTP/Reference/Headers/Sec-CH-UA-Form-Factors
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{SecureContext_Header}}{{SeeCompatTable}}

Der HTTP **`Sec-CH-UA-Form-Factors`** {{Glossary("Request_header", "Request-Header")}} ist ein [Client-Hint](/de/docs/Web/HTTP/Guides/Client_hints#user_agent_client_hints) des Benutzeragenten, der Informationen über die Geräteformfaktoren des Benutzeragenten bereitstellt.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Request-Header")}},
        <a href="/de/docs/Web/HTTP/Guides/Client_hints">Client-Hint</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Request-Header")}}</th>
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
  - : Ein String, der einen gängigen Geräteformfaktor angibt.
    Alle anwendbaren Formfaktoren können enthalten sein.
    Die Bedeutungen der erlaubten Werte sind:
    - `"Desktop"`
      - : Ein Benutzeragent, der auf einem Personal Computer läuft.
    - `"Automotive"`
      - : Ein Benutzeragent, der in einem Fahrzeug eingebettet ist, wo der Benutzer möglicherweise für das Fahren verantwortlich ist und begrenzte Interaktionsmöglichkeiten hat.
    - `"Mobile"`
      - : Kleines, touch-orientiertes Gerät, das typischerweise bei einer Person mitgeführt wird.
    - `"Tablet"`
      - : Ein touch-orientiertes Gerät, das größer als ein `"Mobile"` ist und nicht typischerweise bei einer Person mitgeführt wird.
    - `"XR"`
      - : Immersive Geräte, die die Umgebung um den Benutzer herum erweitern oder ersetzen.
    - `"EInk"`
      - : Ein Gerät, das durch langsame Bildschirmaktualisierungen und begrenzte oder keine Farbauflösung gekennzeichnet ist.
    - `"Watch"`
      - : Ein mobiles Gerät mit einem winzigen Bildschirm (typischerweise weniger als 2 Zoll), das so getragen wird, dass der Benutzer es schnell überblicken kann.

## Beispiele

### Verwendung von Sec-CH-UA-Form-Factors

Ein Server fordert den `Sec-CH-UA-Form-Factors`-Header an, indem er das {{HTTPHeader("Accept-CH")}} in einer _Antwort_ auf eine Anfrage des Clients einschließt und den Namen des gewünschten Headers als Token verwendet:

```http
HTTP/1.1 200 OK
Accept-CH: Sec-CH-UA-Form-Factors
```

Der Client kann sich entscheiden, den Hint bereitzustellen, und den `Sec-CH-UA-Form-Factors`-Header zu nachfolgenden Anfragen hinzufügen.
Zum Beispiel könnte der Client den Header wie folgt hinzufügen:

```http
GET /my/page HTTP/1.1
Host: example.site

Sec-CH-UA-Mobile: ?0
Sec-CH-UA-Form-Factors: "EInk"
```

In diesem Fall bedeutet `"EInk"`, dass das Gerät durch langsame Bildschirmaktualisierungen und eine begrenzte Farbauflösung gekennzeichnet ist, und daher können Antworten je nach diesem Hint variieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Client-Hints](/de/docs/Web/HTTP/Guides/Client_hints)
- [User-Agent Client Hints API](/de/docs/Web/API/User-Agent_Client_Hints_API)
- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching: Vary](/de/docs/Web/HTTP/Guides/Caching#vary) und {{HTTPHeader("Vary")}}-Header
- [Verbesserung des Datenschutzes und der Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) auf developer.chrome.com
