---
title: Sec-CH-UA-Form-Factors
slug: Web/HTTP/Headers/Sec-CH-UA-Form-Factors
l10n:
  sourceCommit: 217e25f9d2c39d2031ecf50f891c27e7f5b96e06
---

{{HTTPSidebar}}{{SecureContext_Header}}

Der HTTP-Header **`Sec-CH-UA-Form-Factors`** ist ein {{Glossary("request_header", "Request-Header")}} und ein [User-Agent-Client-Hint](/de/docs/Web/HTTP/Client_hints#user-agent_client_hints), der Informationen über den Formfaktor des Geräts des User-Agents bereitstellt.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Request-Header")}},
        <a href="/de/docs/Web/HTTP/Client_hints">Client-Hint</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
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
  - : Ein String, der einen allgemeinen Geräteeigenschaft angibt.
    Alle zutreffenden Formfaktoren können enthalten sein.
    Die Bedeutung der erlaubten Werte sind:
    - `"Desktop"`
      - : Ein User-Agent, der auf einem Personal Computer läuft.
    - `"Automotive"`
      - : Ein User-Agent, eingebettet in einem Fahrzeug, wo der Nutzer für die Bedienung des Fahrzeugs verantwortlich sein könnte und begrenzte Interaktionsmöglichkeiten hat.
    - `"Mobile"`
      - : Kleines, auf Berührung ausgelegtes Gerät, das typischerweise von einer Person getragen wird.
    - `"Tablet"`
      - : Ein auf Berührung ausgelegtes Gerät, größer als `"Mobile"` und wird nicht typischerweise von einer Person getragen.
    - `"XR"`
      - : Immersive Geräte, die die Umgebung des Nutzers erweitern oder ersetzen.
    - `"EInk"`
      - : Ein Gerät, das durch langsame Bildschirmaktualisierungen und begrenzte oder keine Farbauflösung gekennzeichnet ist.
    - `"Watch"`
      - : Ein mobiles Gerät mit einem sehr kleinen Bildschirm (typischerweise weniger als 2 Zoll), so getragen, dass der Nutzer schnell darauf blicken kann.

## Beispiele

### Verwendung von Sec-CH-UA-Form-Factors

Ein Server fordert den `Sec-CH-UA-Form-Factors`-Header an, indem er {{HTTPHeader("Accept-CH")}} in einer _Antwort_ auf jede Anfrage des Clients einfügt und den Namen des gewünschten Headers als Token verwendet:

```http
HTTP/1.1 200 OK
Accept-CH: Sec-CH-UA-Form-Factors
```

Der Client kann sich entscheiden, den Hinweis zu geben und den `Sec-CH-UA-Form-Factors`-Header zu nachfolgenden Anfragen hinzufügen.
Zum Beispiel könnte der Client den Header wie gezeigt hinzufügen:

```http
GET /my/page HTTP/1.1
Host: example.site

Sec-CH-UA-Mobile: ?0
Sec-CH-UA-Form-Factors: "EInk"
```

In diesem Fall bedeutet `"EInk"`, dass das Gerät durch langsame Bildschirmaktualisierungen und begrenzte Farbauflösung gekennzeichnet ist, und daher könnten sich die Antworten je nach diesem Hinweis unterscheiden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Client-Hints](/de/docs/Web/HTTP/Client_hints)
- [User-Agent-Client-Hints-API](/de/docs/Web/API/User-Agent_Client_Hints_API)
- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching: Vary](/de/docs/Web/HTTP/Caching#vary) und {{HTTPHeader("Vary")}}-Header
- [Verbesserung des Datenschutzes der Nutzer und der Entwicklererfahrung mit User-Agent-Client-Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) auf developer.chrome.com
