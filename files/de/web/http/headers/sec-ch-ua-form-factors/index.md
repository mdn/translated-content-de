---
title: Sec-CH-UA-Form-Factors
slug: Web/HTTP/Headers/Sec-CH-UA-Form-Factors
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}{{SecureContext_Header}}{{SeeCompatTable}}

Der HTTP-**`Sec-CH-UA-Form-Factors`**-{{Glossary("Request_header", "Request-Header")}} ist ein [User-Agent-Client-Hinweis](/de/docs/Web/HTTP/Client_hints#user-agent_client_hints), welcher Informationen über den Geräteformfaktor des User-Agents bereitstellt.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>
        {{Glossary("Request_header", "Request-Header")}},
        <a href="/de/docs/Web/HTTP/Client_hints">Client-Hinweis</a>
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
  - : Ein String, der einen bekannten Geräteformfaktor angibt.
    Alle anwendbaren Formfaktoren können enthalten sein.
    Die Bedeutung der erlaubten Werte sind:
    - `"Desktop"`
      - : Ein User-Agent, der auf einem PC läuft.
    - `"Automotive"`
      - : Ein User-Agent, eingebettet in einem Fahrzeug, wobei der Benutzer gegebenenfalls für die Steuerung des Fahrzeugs verantwortlich ist und nur eingeschränkt interagieren kann.
    - `"Mobile"`
      - : Kleines, berührungsorientiertes Gerät, das typischerweise bei einer Person getragen wird.
    - `"Tablet"`
      - : Ein berührungsorientiertes Gerät, größer als `"Mobile"` und wird üblicherweise nicht von einer Person getragen.
    - `"XR"`
      - : Immersive Geräte, die die Umgebung des Benutzers erweitern oder ersetzen.
    - `"EInk"`
      - : Ein Gerät, das durch langsame Bildaktualisierungen und eingeschränkte oder fehlende Farbauflösung gekennzeichnet ist.
    - `"Watch"`
      - : Ein mobiles Gerät mit einem sehr kleinen Bildschirm (typischerweise weniger als 2 Zoll), das so getragen wird, dass der Benutzer schnell darauf blicken kann.

## Beispiele

### Verwendung von Sec-CH-UA-Form-Factors

Ein Server fordert den `Sec-CH-UA-Form-Factors`-Header an, indem er den {{HTTPHeader("Accept-CH")}} in einer _Antwort_ auf jede Anfrage des Clients einschließt und den Namen des gewünschten Headers als Token verwendet:

```http
HTTP/1.1 200 OK
Accept-CH: Sec-CH-UA-Form-Factors
```

Der Client kann sich entscheiden, den Hinweis bereitzustellen, und den `Sec-CH-UA-Form-Factors`-Header zu nachfolgenden Anfragen hinzufügen.
Zum Beispiel könnte der Client den Header wie folgt hinzufügen:

```http
GET /my/page HTTP/1.1
Host: example.site

Sec-CH-UA-Mobile: ?0
Sec-CH-UA-Form-Factors: "EInk"
```

In diesem Fall bedeutet `"EInk"`, dass das Gerät durch langsame Bildaktualisierungen und eingeschränkte Farbauflösung gekennzeichnet ist, und dementsprechend können Antworten je nach diesem Hinweis variieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Client-Hinweise](/de/docs/Web/HTTP/Client_hints)
- [User-Agent Client Hints API](/de/docs/Web/API/User-Agent_Client_Hints_API)
- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching: Vary](/de/docs/Web/HTTP/Caching#vary) und {{HTTPHeader("Vary")}}-Header
- [Verbesserung des Datenschutzes und der Entwicklererfahrung mit User-Agent-Client-Hinweisen](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) auf developer.chrome.com
