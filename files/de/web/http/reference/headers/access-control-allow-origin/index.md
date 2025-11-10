---
title: Access-Control-Allow-Origin header
short-title: Access-Control-Allow-Origin
slug: Web/HTTP/Reference/Headers/Access-Control-Allow-Origin
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP-**`Access-Control-Allow-Origin`**-{{Glossary("response_header", "Antwort-Header")}} gibt an, ob die Antwort mit angeforderter Software aus dem gegebenen {{Glossary("origin", "Ursprung")}} geteilt werden kann.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
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
  - : Die anfordernde Software aus jedem Ursprung darf auf die Ressource zugreifen.
    Für Anfragen _ohne Anmeldedaten_ kann der wörtliche Wert `*` als Wildcard angegeben werden.
    Der Versuch, die Wildcard mit Anmeldedaten zu verwenden, [führt zu einem Fehler](/de/docs/Web/HTTP/Guides/CORS/Errors/CORSNotSupportingCredentials).
- `<origin>`
  - : Gibt einen einzelnen Ursprung an. Unterstützt der Server Clients aus mehreren Ursprüngen, muss er den Ursprung für den spezifischen Client zurückgeben, der die Anfrage stellt.
- `null`
  - : Gibt den Ursprung "null" an.
    > [!NOTE]
    > Der Wert `null` sollte nicht verwendet werden. Es mag sicher erscheinen, `Access-Control-Allow-Origin: "null"` zurückzugeben; jedoch wird der Ursprung von Ressourcen, die ein nicht-hierarchisches Schema verwenden (wie `data:` oder `file:`), und von sandboxed-Dokumenten als `null` serialisiert.
    > Viele Browser gewähren solchen Dokumenten Zugriff auf eine Antwort mit einem `Access-Control-Allow-Origin: null` Header und jeder Ursprung kann ein feindliches Dokument mit einem `null` Ursprung erstellen.
    > Daher sollte der `null`-Wert für den `Access-Control-Allow-Origin`-Header vermieden werden.

## Beispiele

Eine Antwort, die dem Browser mitteilt, dass Software aus jedem Ursprung auf eine Ressource zugreifen darf, enthält Folgendes:

```http
Access-Control-Allow-Origin: *
```

Eine Antwort, die dem Browser mitteilt, dass anfordernde Software aus dem Ursprung `https://developer.mozilla.org` auf eine Ressource zugreifen darf, enthält Folgendes:

```http
Access-Control-Allow-Origin: https://developer.mozilla.org
```

Um die möglichen `Access-Control-Allow-Origin`-Werte auf eine Reihe von erlaubten Ursprüngen zu begrenzen, ist Code auf der Serverseite erforderlich, um den Wert des {{HTTPHeader("Origin")}}-Anforderungsheaders zu prüfen, diesen mit einer Liste erlaubter Ursprünge zu vergleichen, und dann, falls der {{HTTPHeader("Origin")}}-Wert in der Liste ist, den Wert von `Access-Control-Allow-Origin` auf den gleichen Wert wie den {{HTTPHeader("Origin")}}-Wert zu setzen.

### CORS und Caching

Angenommen, der Server sendet eine Antwort mit einem `Access-Control-Allow-Origin`-Wert mit einem expliziten Ursprung (anstelle des `*` Wildcards). In diesem Fall sollte die Antwort auch einen {{HTTPHeader("Vary")}}-Antwortheader mit dem Wert `Origin` enthalten — um den Browsern anzuzeigen, dass Serverantworten sich basierend auf dem Wert des `Origin`-Anforderungsheaders unterscheiden können.

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
