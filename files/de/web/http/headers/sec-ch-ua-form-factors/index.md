---
title: Sec-CH-UA-Form-Factors
slug: Web/HTTP/Headers/Sec-CH-UA-Form-Factors
l10n:
  sourceCommit: 934a85db5abc5896fad02e9280b7a5742b5b76e3
---

{{HTTPSidebar}}{{SecureContext_Header}}{{SeeCompatTable}}

Der HTTP **`Sec-CH-UA-Form-Factors`** {{Glossary("Request_header", "Anforderungsheader")}} ist ein [User-Agent-Client-Hinweis](/de/docs/Web/HTTP/Client_hints#user-agent_client_hints), der Informationen über die Geräteformfaktor des User-Agents bereitstellt.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Anforderungsheader")}},
        <a href="/de/docs/Web/HTTP/Client_hints">Client-Hinweis</a>
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
  - : Ein String, der einen gängigen Geräteformfaktor angibt.
    Alle anwendbaren Formfaktoren können enthalten sein.
    Die Bedeutungen der erlaubten Werte sind:
    - `"Desktop"`
      - : Ein User-Agent, der auf einem PC läuft.
    - `"Automotive"`
      - : Ein User-Agent, der in einem Fahrzeug eingebettet ist, wobei der Benutzer möglicherweise für das Führen des Fahrzeugs verantwortlich und in seiner Interaktion eingeschränkt ist.
    - `"Mobile"`
      - : Kleines, touch-orientiertes Gerät, das typischerweise von einer Person mitgeführt wird.
    - `"Tablet"`
      - : Ein touch-orientiertes Gerät, das größer als `"Mobile"` ist und typischerweise nicht von einer Person mitgeführt wird.
    - `"XR"`
      - : Immersive Geräte, die die Umgebung um den Benutzer herum erweitern oder ersetzen.
    - `"EInk"`
      - : Ein Gerät, das durch langsame Bildschirmaktualisierungen und begrenzte oder keine Farbauflösung gekennzeichnet ist.
    - `"Watch"`
      - : Ein mobiles Gerät mit einem winzigen Bildschirm (typischerweise weniger als 2 Zoll), das so getragen wird, dass der Benutzer schnell darauf blicken kann.

## Beispiele

### Verwendung von Sec-CH-UA-Form-Factors

Ein Server fordert den `Sec-CH-UA-Form-Factors`-Header an, indem er das {{HTTPHeader("Accept-CH")}} in einer _Antwort_ auf eine beliebige Anfrage des Clients einfügt und den Namen des gewünschten Headers als Token verwendet:

```http
HTTP/1.1 200 OK
Accept-CH: Sec-CH-UA-Form-Factors
```

Der Client kann wählen, ob er den Hinweis bereitstellt und den `Sec-CH-UA-Form-Factors`-Header zu nachfolgenden Anfragen hinzufügt.
Zum Beispiel könnte der Client den Header wie gezeigt hinzufügen:

```http
GET /my/page HTTP/1.1
Host: example.site

Sec-CH-UA-Mobile: ?0
Sec-CH-UA-Form-Factors: "EInk"
```

In diesem Fall bedeutet `"EInk"`, dass das Gerät durch langsame Bildschirmaktualisierungen und begrenzte Farbauflösung gekennzeichnet ist; somit können sich die Antworten je nach diesem Hinweis unterscheiden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Client-Hinweise](/de/docs/Web/HTTP/Client_hints)
- [User-Agent Client Hints API](/de/docs/Web/API/User-Agent_Client_Hints_API)
- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching: Vary](/de/docs/Web/HTTP/Caching#vary) und {{HTTPHeader("Vary")}}-Header
- [Verbesserung der Benutzerprivatsphäre und der Entwicklererfahrung mit User-Agent-Client-Hinweisen](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) auf developer.chrome.com
