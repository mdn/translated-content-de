---
title: Access-Control-Allow-Origin
slug: Web/HTTP/Reference/Headers/Access-Control-Allow-Origin
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP **`Access-Control-Allow-Origin`** {{Glossary("response_header", "Antwort-Header")}} gibt an, ob die Antwort mit anfragendem Code von der angegebenen {{Glossary("origin", "Herkunft")}} geteilt werden kann.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrage-Header")}}</th>
      <td>Nein</td>
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

- `*` (Wildcard)
  - : Der anfragende Code von jeder Herkunft darf auf die Ressource zugreifen.
    Für Anfragen _ohne Anmeldedaten_ kann der Literalwert `*` als Wildcard angegeben werden.
    Der Versuch, die Wildcard mit Anmeldedaten zu verwenden, [führt zu einem Fehler](/de/docs/Web/HTTP/Guides/CORS/Errors/CORSNotSupportingCredentials).
- `<origin>`
  - : Gibt eine einzelne Herkunft an. Wenn der Server Clients aus mehreren Herkünften unterstützt, muss er die Herkunft für den spezifischen Client zurückgeben, der die Anfrage stellt.
- `null`
  - : Gibt die Herkunft "null" an.
    > [!NOTE]
    > Der Wert `null` sollte nicht verwendet werden. Es mag sicher erscheinen, `Access-Control-Allow-Origin: "null"` zurückzugeben; jedoch wird die Herkunft von Ressourcen, die ein nicht-hierarchisches Schema verwenden (wie `data:` oder `file:`), und sandboxed Dokumente als `null` serialisiert.
    > Viele Browser werden solchen Dokumenten den Zugriff auf eine Antwort mit einem Header `Access-Control-Allow-Origin: null` gewähren, und jede Herkunft kann ein feindliches Dokument mit einer `null`-Herkunft erstellen.
    > Daher sollte der `null`-Wert für den `Access-Control-Allow-Origin`-Header vermieden werden.

## Beispiele

Eine Antwort, die dem Browser mitteilt, dass Code von jeder Herkunft auf eine Ressource zugreifen darf, wird Folgendes enthalten:

```http
Access-Control-Allow-Origin: *
```

Eine Antwort, die dem Browser mitteilt, dass anfragender Code von der Herkunft `https://developer.mozilla.org` auf eine Ressource zugreifen darf, wird Folgendes enthalten:

```http
Access-Control-Allow-Origin: https://developer.mozilla.org
```

Das Begrenzen der möglichen `Access-Control-Allow-Origin`-Werte auf eine Reihe erlaubter Herkünfte erfordert Code auf der Serverseite, um den Wert des {{HTTPHeader("Origin")}} Anfrage-Headers zu überprüfen, diesen mit einer Liste erlaubter Herkünfte zu vergleichen, und dann, wenn der {{HTTPHeader("Origin")}}-Wert in der Liste ist, den `Access-Control-Allow-Origin`-Wert auf denselben Wert wie der {{HTTPHeader("Origin")}}-Wert zu setzen.

### CORS und Caching

Angenommen, der Server sendet eine Antwort mit einem `Access-Control-Allow-Origin`-Wert mit einer expliziten Herkunft (anstatt des `*`-Wildcards). In diesem Fall sollte die Antwort auch einen {{HTTPHeader("Vary")}} Antwort-Header mit dem Wert `Origin` enthalten — um den Browsern anzuzeigen, dass Serverantworten basierend auf dem Wert des `Origin` Anfrage-Headers variieren können.

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
- [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS)
- {{HTTPHeader("Cross-Origin-Resource-Policy")}}
