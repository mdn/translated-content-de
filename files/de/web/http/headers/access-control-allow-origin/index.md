---
title: Access-Control-Allow-Origin
slug: Web/HTTP/Headers/Access-Control-Allow-Origin
l10n:
  sourceCommit: 92b03e46cef6be37de60799363e3e33e3415b491
---

{{HTTPSidebar}}

Der HTTP **`Access-Control-Allow-Origin`** {{Glossary("response_header", "Antwort-Header")}} gibt an, ob die Antwort mit dem anfordernden Code von der angegebenen {{Glossary("origin", "Herkunft")}} geteilt werden kann.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
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
  - : Der anfordernde Code von jeder Herkunft darf auf die Ressource zugreifen.
    Für Anfragen _ohne Berechtigungsnachweise_ kann der wörtliche Wert `*` als Platzhalter angegeben werden.
    Der Versuch, den Platzhalter mit Berechtigungsnachweisen zu verwenden, [führt zu einem Fehler](/de/docs/Web/HTTP/CORS/Errors/CORSNotSupportingCredentials).
- `<origin>`
  - : Gibt eine einzelne Herkunft an. Wenn der Server Clients von mehreren Herkünften unterstützt, muss er die Herkunft für den spezifischen Client zurückgeben, der die Anfrage stellt.
- `null`
  - : Gibt die Herkunft "null" an.
    > [!NOTE]
    > Der Wert `null` sollte nicht verwendet werden. Es mag sicher erscheinen, `Access-Control-Allow-Origin: "null"` zurückzugeben; jedoch wird die Herkunft von Ressourcen, die ein nicht-hierarchisches Schema verwenden (wie `data:` oder `file:`), und sandboxed Dokumente als `null` serialisiert.
    > Viele Browser gewähren solchen Dokumenten Zugriff auf eine Antwort mit einem `Access-Control-Allow-Origin: null` Header, und jede Herkunft kann ein feindliches Dokument mit einer `null`-Herkunft erstellen.
    > Daher sollte der Wert `null` für den `Access-Control-Allow-Origin` Header vermieden werden.

## Beispiele

Eine Antwort, die dem Browser mitteilt, dass Code von jeder Herkunft auf eine Ressource zugreifen darf, wird Folgendes enthalten:

```http
Access-Control-Allow-Origin: *
```

Eine Antwort, die dem Browser mitteilt, dass der anfordernde Code von der Herkunft `https://developer.mozilla.org` auf eine Ressource zugreifen darf, wird Folgendes enthalten:

```http
Access-Control-Allow-Origin: https://developer.mozilla.org
```

Das Begrenzen der möglichen `Access-Control-Allow-Origin` Werte auf eine Menge erlaubter Herkünfte erfordert Code auf der Serverseite, um den Wert des {{HTTPHeader("Origin")}} Anfrage-Headers zu überprüfen, ihn mit einer Liste erlaubter Herkünfte zu vergleichen und, wenn der {{HTTPHeader("Origin")}} Wert in der Liste ist, den `Access-Control-Allow-Origin` Wert auf den gleichen Wert wie den {{HTTPHeader("Origin")}} Wert zu setzen.

### CORS und Caching

Angenommen, der Server sendet eine Antwort mit einem `Access-Control-Allow-Origin` Wert mit einer expliziten Herkunft (anstatt des `*` Platzhalters). In diesem Fall sollte die Antwort auch einen {{HTTPHeader("Vary")}} Antwort-Header mit dem Wert `Origin` enthalten, um den Browsern anzuzeigen, dass Serverantworten basierend auf dem Wert des `Origin` Anfrage-Headers unterschiedlich sein können.

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
- {{HTTPHeader("Cross-Origin-Resource-Policy")}}
