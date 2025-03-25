---
title: Sec-CH-UA-Form-Factors
slug: Web/HTTP/Reference/Headers/Sec-CH-UA-Form-Factors
l10n:
  sourceCommit: d8fbe1ea30dcc8fd707048a804f5070a729b57a7
---

{{HTTPSidebar}}{{SecureContext_Header}}{{SeeCompatTable}}

Der HTTP **`Sec-CH-UA-Form-Factors`** {{Glossary("Request_header", "Anforderungs-Header")}} ist ein [User-Agent-Client-Hinweis](/de/docs/Web/HTTP/Guides/Client_hints#user_agent_client_hints), welcher Informationen über den Gerätefaktor des User-Agents bereitstellt.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Anforderungs-Header")}},
        <a href="/de/docs/Web/HTTP/Guides/Client_hints">Client-Hinweis</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}</th>
      <td>Ja (<code>Sec-</code> Präfix)</td>
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
    Alle zutreffenden Formfaktoren können eingeschlossen werden.
    Die Bedeutungen der erlaubten Werte sind:
    - `"Desktop"`
      - : Ein User-Agent, der auf einem Personal Computer läuft.
    - `"Automotive"`
      - : Ein User-Agent, der in ein Fahrzeug eingebettet ist, bei dem der Benutzer möglicherweise für die Bedienung des Fahrzeugs verantwortlich ist und eine eingeschränkte Interaktionsfähigkeit hat.
    - `"Mobile"`
      - : Kleines, berührungsorientiertes Gerät, das typischerweise bei einer Person getragen wird.
    - `"Tablet"`
      - : Ein berührungsorientiertes Gerät, das größer ist als `"Mobile"` und normalerweise nicht bei einer Person getragen wird.
    - `"XR"`
      - : Immersive Geräte, die die Umgebung um den Benutzer erweitern oder ersetzen.
    - `"EInk"`
      - : Ein Gerät, das durch langsame Bildschirmaktualisierungen und begrenzte oder keine Farbauflösung gekennzeichnet ist.
    - `"Watch"`
      - : Ein mobiles Gerät mit einem winzigen Bildschirm (typischerweise weniger als 2 Zoll), das so getragen wird, dass der Benutzer schnell einen Blick darauf werfen kann.

## Beispiele

### Verwendung von Sec-CH-UA-Form-Factors

Ein Server fordert den `Sec-CH-UA-Form-Factors` Header an, indem er den {{HTTPHeader("Accept-CH")}} in eine _Antwort_ auf eine Anforderung des Clients einschließt und den Namen des gewünschten Headers als Token verwendet:

```http
HTTP/1.1 200 OK
Accept-CH: Sec-CH-UA-Form-Factors
```

Der Client kann sich entscheiden, den Hinweis bereitzustellen, und den `Sec-CH-UA-Form-Factors` Header zu nachfolgenden Anforderungen hinzufügen.
Zum Beispiel könnte der Client den Header wie folgt hinzufügen:

```http
GET /my/page HTTP/1.1
Host: example.site

Sec-CH-UA-Mobile: ?0
Sec-CH-UA-Form-Factors: "EInk"
```

In diesem Fall bedeutet `"EInk"`, dass das Gerät durch langsame Bildschirmaktualisierungen und begrenzte Farbauflösung gekennzeichnet ist, und deshalb können sich die Antworten je nach diesem Hinweis unterscheiden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Client-Hinweise](/de/docs/Web/HTTP/Guides/Client_hints)
- [User-Agent Client Hints API](/de/docs/Web/API/User-Agent_Client_Hints_API)
- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching: Vary](/de/docs/Web/HTTP/Guides/Caching#vary) und {{HTTPHeader("Vary")}} Header
- [Verbesserung des Datenschutzes und der Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) auf developer.chrome.com
