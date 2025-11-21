---
title: Access-Control-Allow-Origin header
short-title: Access-Control-Allow-Origin
slug: Web/HTTP/Reference/Headers/Access-Control-Allow-Origin
l10n:
  sourceCommit: 7f6778934020a9b5b82b4dd8ca79a99bc9950c2a
---

Der HTTP **`Access-Control-Allow-Origin`** {{Glossary("response_header", "Antwort-Header")}} gibt an, ob die Antwort mit anfragendem Code von dem angegebenen {{Glossary("origin", "Ursprung")}} geteilt werden kann.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
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

- `*` (Platzhalter)
  - : Der anfragende Code von jedem Ursprung darf auf die Ressource zugreifen.
    Für Anfragen _ohne Anmeldedaten_ kann der literale Wert `*` als Platzhalter angegeben werden.
    Der Versuch, den Platzhalter mit Anmeldedaten zu verwenden, [führt zu einem Fehler](/de/docs/Web/HTTP/Guides/CORS/Errors/CORSNotSupportingCredentials).
- `<origin>`
  - : Gibt einen einzelnen Ursprung an. Wenn der Server Clients von mehreren Ursprüngen unterstützt, muss er den Ursprung für den spezifischen Client zurückgeben, der die Anfrage stellt.
- `null`
  - : Gibt den Ursprung "null" an.
    > [!NOTE]
    > Der Wert `null` sollte nicht verwendet werden. Es mag sicher erscheinen, `Access-Control-Allow-Origin: "null"` zurückzugeben; jedoch wird der Ursprung von Ressourcen, die ein nicht-hierarchisches Schema verwenden (wie `data:` oder `file:`), sowie sandboxed Dokumente als `null` serialisiert.
    > Viele Browser gewähren solchen Dokumenten Zugriff auf eine Antwort mit einem `Access-Control-Allow-Origin: null` Header, und jeder Ursprung kann ein feindliches Dokument mit einem `null` Ursprung erstellen.
    > Daher sollte der `null` Wert für den `Access-Control-Allow-Origin` Header vermieden werden.

## Beispiele

Eine Antwort, die dem Browser mitteilt, dass Code von jedem Ursprung auf eine Ressource zugreifen darf, wird folgendes beinhalten:

```http
Access-Control-Allow-Origin: *
```

Eine Antwort, die dem Browser mitteilt, dass der anfragende Code vom Ursprung `https://developer.mozilla.org` auf eine Ressource zugreifen darf, wird folgendes beinhalten:

```http
Access-Control-Allow-Origin: https://developer.mozilla.org
```

Das Beschränken der möglichen `Access-Control-Allow-Origin` Werte auf eine Menge zulässiger Ursprünge erfordert Code auf der Serverseite, um den Wert des {{HTTPHeader("Origin")}} Anfrage-Headers zu überprüfen, mit einer Liste zulässiger Ursprünge zu vergleichen, und dann, wenn der {{HTTPHeader("Origin")}} Wert in der Liste ist, den `Access-Control-Allow-Origin` Wert auf denselben Wert wie der {{HTTPHeader("Origin")}} Wert zu setzen.

### CORS und Caching

Angenommen, der Server sendet eine Antwort mit einem `Access-Control-Allow-Origin` Wert mit einem expliziten Ursprung (anstatt des `*` Platzhalters). In diesem Fall sollte die Antwort auch einen {{HTTPHeader("Vary")}} Antwort-Header mit dem Wert `Origin` enthalten — um Browser darauf hinzuweisen, dass Serverantworten je nach Wert des `Origin` Anfrage-Headers unterschiedlich sein können.

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
