---
title: Access-Control-Allow-Origin
slug: Web/HTTP/Headers/Access-Control-Allow-Origin
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{HTTPSidebar}}

Der **`Access-Control-Allow-Origin`** Antwort-Header gibt an, ob die Antwort mit dem anfragenden Code vom angegebenen {{Glossary("origin", "Origin")}} geteilt werden kann.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Access-Control-Allow-Origin: *
Access-Control-Allow-Origin: <origin>
Access-Control-Allow-Origin: null
```

## Direktiven

- `*`

  - : Für Anfragen _ohne Anmeldedaten_ kann der Wert `*` als Platzhalter angegeben werden; dieser Wert teilt den Browsern mit, dass anfragender Code aus jedem Origin auf die Ressource zugreifen darf. Der Versuch, den Platzhalter mit Anmeldedaten zu verwenden, [führt zu einem Fehler](/de/docs/Web/HTTP/CORS/Errors/CORSNotSupportingCredentials).

- `<origin>`

  - : Gibt einen Origin an. Es kann nur ein einzelner Origin angegeben werden. Wenn der Server Clients von mehreren Origins unterstützt, muss er den Origin für den spezifischen Client, der die Anfrage stellt, zurückgeben.

- `null`

  - : Gibt den Origin "null" an.

    > **Note:** `null` [sollte nicht verwendet werden](https://w3c.github.io/webappsec-cors-for-developers/#avoid-returning-access-control-allow-origin-null): "Es mag sicher erscheinen, `Access-Control-Allow-Origin: "null"` zurückzugeben, aber die Serialisierung des Origins einer Ressource, die ein nicht-hierarchisches Schema (wie `data:` oder `file:`) und sandboxed Dokumente verwendet, wird als "null" definiert. Viele Benutzeragenten gewähren solchen Dokumenten Zugriff auf eine Antwort mit einem `Access-Control-Allow-Origin: "null"` Header, und jede Origin kann ein feindliches Dokument mit einem "null" Origin erstellen. Der Wert "null" für den ACAO-Header sollte daher vermieden werden."

## Beispiele

Eine Antwort, die dem Browser mitteilt, dass Code von jedem Origin auf eine Ressource zugreifen darf, enthält Folgendes:

```http
Access-Control-Allow-Origin: *
```

Eine Antwort, die dem Browser mitteilt, dass anfragender Code vom Origin `https://developer.mozilla.org` auf eine Ressource zugreifen darf, enthält Folgendes:

```http
Access-Control-Allow-Origin: https://developer.mozilla.org
```

Das Einschränken der möglichen `Access-Control-Allow-Origin` Werte auf eine Gruppe erlaubter Origins erfordert Code auf der Serverseite, um den Wert des {{HTTPHeader("Origin")}} Anforderungs-Headers zu überprüfen, diesen mit einer Liste erlaubter Origins zu vergleichen und dann, wenn der {{HTTPHeader("Origin")}} Wert in der Liste ist, den `Access-Control-Allow-Origin` Wert auf denselben Wert wie den {{HTTPHeader("Origin")}} Wert zu setzen.

### CORS und Caching

Angenommen, der Server sendet eine Antwort mit einem `Access-Control-Allow-Origin` Wert mit einem expliziten Origin (anstatt des `*` Platzhalters), sollte die Antwort auch einen {{HTTPHeader("Vary")}} Antwort-Header mit dem Wert `Origin` enthalten — um den Browsern anzuzeigen, dass Serverantworten basierend auf dem Wert des `Origin` Anforderungs-Headers unterschiedlich sein können.

```http
Access-Control-Allow-Origin: https://developer.mozilla.org
Vary: Origin
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Origin")}}
- {{HTTPHeader("Vary")}}
- [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/CORS)
- {{httpheader("Cross-Origin-Resource-Policy")}}
