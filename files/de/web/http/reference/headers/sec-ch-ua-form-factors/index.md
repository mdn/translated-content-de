---
title: Sec-CH-UA-Form-Factors
slug: Web/HTTP/Reference/Headers/Sec-CH-UA-Form-Factors
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}{{SecureContext_Header}}{{SeeCompatTable}}

Der HTTP **`Sec-CH-UA-Form-Factors`** {{Glossary("Request_header", "Request-Header")}} ist ein [Client-Hint des User-Agents](/de/docs/Web/HTTP/Guides/Client_hints#user-agent_client_hints), der Informationen zum Geräteformfaktor des User-Agents bereitstellt.

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
      - : Ein User-Agent, der auf einem Personal Computer läuft.
    - `"Automotive"`
      - : Ein User-Agent, der in ein Fahrzeug eingebettet ist, in dem der Benutzer möglicherweise für die Fahrzeugführung verantwortlich ist und nur begrenzt interagieren kann.
    - `"Mobile"`
      - : Kleines, touch-orientiertes Gerät, das normalerweise von einer Person mitgeführt wird.
    - `"Tablet"`
      - : Ein touch-orientiertes Gerät, das größer als ein `"Mobile"` ist und normalerweise nicht von einer Person mitgeführt wird.
    - `"XR"`
      - : Immersive Geräte, die die Umgebung des Benutzers erweitern oder ersetzen.
    - `"EInk"`
      - : Ein Gerät, das durch langsame Bildschirmaktualisierungen und eingeschränkte oder keine Farbauflösung gekennzeichnet ist.
    - `"Watch"`
      - : Ein mobiles Gerät mit einem winzigen Bildschirm (in der Regel kleiner als 2 Zoll), das so getragen wird, dass der Benutzer es schnell überblicken kann.

## Beispiele

### Verwendung von Sec-CH-UA-Form-Factors

Ein Server fordert den `Sec-CH-UA-Form-Factors`-Header an, indem er {{HTTPHeader("Accept-CH")}} in eine Antwort auf eine Anfrage vom Client einfügt und den Namen des gewünschten Headers als Token verwendet:

```http
HTTP/1.1 200 OK
Accept-CH: Sec-CH-UA-Form-Factors
```

Der Client kann sich entscheiden, diesen Hinweis bereitzustellen und den `Sec-CH-UA-Form-Factors`-Header zu nachfolgenden Anfragen hinzuzufügen. Zum Beispiel könnte der Client den Header wie folgt hinzufügen:

```http
GET /my/page HTTP/1.1
Host: example.site

Sec-CH-UA-Mobile: ?0
Sec-CH-UA-Form-Factors: "EInk"
```

In diesem Fall bedeutet `"EInk"`, dass das Gerät durch langsame Bildschirmaktualisierungen und eingeschränkte Farbauflösung gekennzeichnet ist, und daher können sich Antworten je nach diesem Hinweis unterscheiden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Client-Hints](/de/docs/Web/HTTP/Guides/Client_hints)
- [User-Agent Client Hints API](/de/docs/Web/API/User-Agent_Client_Hints_API)
- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching: Vary](/de/docs/Web/HTTP/Guides/Caching#vary) und {{HTTPHeader("Vary")}} Header
- [Verbesserung der Benutzerprivatsphäre und der Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) auf developer.chrome.com
