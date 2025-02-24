---
title: Access-Control-Allow-Origin
slug: Web/HTTP/Headers/Access-Control-Allow-Origin
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}

Der HTTP **`Access-Control-Allow-Origin`** {{Glossary("response_header", "Antwortheader")}} gibt an, ob die Antwort mit dem anfragenden Code von dem angegebenen {{Glossary("origin", "Ursprung")}} geteilt werden kann.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwortheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungsheader")}}</th>
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
  - : Der anfragende Code von jedem Ursprung darf auf die Ressource zugreifen.
    Für Anfragen _ohne Anmeldeinformationen_ kann der wörtliche Wert `*` als Wildcard angegeben werden.
    Der Versuch, das Wildcard mit Anmeldeinformationen zu verwenden, [führt zu einem Fehler](/de/docs/Web/HTTP/CORS/Errors/CORSNotSupportingCredentials).
- `<origin>`
  - : Gibt einen einzelnen Ursprung an. Wenn der Server Clients von mehreren Ursprüngen unterstützt, muss er den Ursprung für den spezifischen Client, der die Anfrage stellt, zurückgeben.
- `null`
  - : Gibt den Ursprung "null" an.
    > [!NOTE]
    > Der Wert `null` sollte nicht verwendet werden. Es mag sicher erscheinen, `Access-Control-Allow-Origin: "null"` zurückzugeben; jedoch wird der Ursprung von Ressourcen, die ein nicht-hierarchisches Schema verwenden (wie `data:` oder `file:`) und von sandboxed Dokumenten, als `null` serialisiert.
    > Viele Browser gewähren solchen Dokumenten Zugriff auf eine Antwort mit einem `Access-Control-Allow-Origin: null` Header, und jeder Ursprung kann ein schädliches Dokument mit einem `null` Ursprung erstellen.
    > Daher sollte der `null` Wert für den `Access-Control-Allow-Origin` Header vermieden werden.

## Beispiele

Eine Antwort, die dem Browser mitteilt, dass Code von jedem Ursprung auf eine Ressource zugreifen darf, wird Folgendes beinhalten:

```http
Access-Control-Allow-Origin: *
```

Eine Antwort, die dem Browser mitteilt, dass anfragender Code vom Ursprung `https://developer.mozilla.org` auf eine Ressource zugreifen darf, wird Folgendes beinhalten:

```http
Access-Control-Allow-Origin: https://developer.mozilla.org
```

Um die möglichen `Access-Control-Allow-Origin` Werte auf eine Reihe erlaubter Ursprünge zu beschränken, ist Code auf der Serverseite erforderlich, um den Wert des {{HTTPHeader("Origin")}} Anforderungsheaders zu überprüfen, diesen mit einer Liste erlaubter Ursprünge zu vergleichen und, wenn der {{HTTPHeader("Origin")}} Wert in der Liste ist, den `Access-Control-Allow-Origin` Wert auf denselben Wert wie der {{HTTPHeader("Origin")}} Wert zu setzen.

### CORS und Caching

Angenommen, der Server sendet eine Antwort mit einem `Access-Control-Allow-Origin` Wert mit einem expliziten Ursprung (statt des `*` Wildcards). In diesem Fall sollte die Antwort auch einen {{HTTPHeader("Vary")}} Antwortheader mit dem Wert `Origin` enthalten, um den Browsern anzuzeigen, dass Serverantworten je nach Wert des `Origin` Anforderungsheaders unterschiedlich sein können.

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
