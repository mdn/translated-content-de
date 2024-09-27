---
title: Access-Control-Allow-Origin
slug: Web/HTTP/Headers/Access-Control-Allow-Origin
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{HTTPSidebar}}

Der **`Access-Control-Allow-Origin`** Antwort-Header gibt an, ob die Antwort mit angeforderter Codierung von der angegebenen [Herkunft](/de/docs/Glossary/origin) geteilt werden kann.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>[Antwort-Header](/de/docs/Glossary/Response_header)</td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Header-Name](/de/docs/Glossary/Forbidden_header_name)</th>
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
  - : Bei Anfragen _ohne Anmeldedaten_ kann der wörtliche Wert `*` als Platzhalter angegeben werden; der Wert teilt den Browsern mit, dass sie angeforderte Code von jeder Herkunft den Zugriff auf die Ressource erlauben sollen. Der Versuch, den Platzhalter mit Anmeldedaten zu verwenden, [führt zu einem Fehler](/de/docs/Web/HTTP/CORS/Errors/CORSNotSupportingCredentials).
- `<origin>`
  - : Gibt eine Herkunft an. Es kann nur eine einzelne Herkunft angegeben werden. Wenn der Server Clients aus mehreren Herkünften unterstützt, muss er die Herkunft des spezifischen Clients, der die Anfrage stellt, zurückgeben.
- `null`

  - : Gibt die Herkunft "null" an.

    > **Note:** `null` [sollte nicht verwendet werden](https://w3c.github.io/webappsec-cors-for-developers/#avoid-returning-access-control-allow-origin-null): "Es mag sicher erscheinen, `Access-Control-Allow-Origin: "null"` zurückzugeben, aber die Serialisierung der Herkunft einer Ressource, die ein nicht-hierarchisches Schema (wie `data:` oder `file:`) und sandboxed Dokumente verwendet, ist als "null" definiert. Viele Benutzeragenten gewähren solchen Dokumenten Zugriff auf eine Antwort mit einem `Access-Control-Allow-Origin: "null"` Header, und jede Herkunft kann ein feindliches Dokument mit einer "null" Herkunft erstellen. Der "null"-Wert für den ACAO-Header sollte daher vermieden werden."

## Beispiele

Eine Antwort, die dem Browser mitteilt, dass Code von jeder Herkunft auf eine Ressource zugreifen darf, wird Folgendes enthalten:

```http
Access-Control-Allow-Origin: *
```

Eine Antwort, die dem Browser mitteilt, dass angeforderter Code von der Herkunft `https://developer.mozilla.org` auf eine Ressource zugreifen darf, wird Folgendes enthalten:

```http
Access-Control-Allow-Origin: https://developer.mozilla.org
```

Das Einschränken der möglichen `Access-Control-Allow-Origin` Werte auf eine Gruppe erlaubter Herkünfte erfordert Code auf der Serverseite, um den Wert des {{HTTPHeader("Origin")}} Anforderungs-Headers zu prüfen, diesen mit einer Liste erlaubter Herkünfte zu vergleichen und dann, wenn der {{HTTPHeader("Origin")}}-Wert in der Liste steht, den `Access-Control-Allow-Origin` Wert auf denselben Wert wie den {{HTTPHeader("Origin")}}-Wert zu setzen.

### CORS und Caching

Angenommen, der Server sendet eine Antwort mit einem `Access-Control-Allow-Origin`-Wert mit einer expliziten Herkunft (anstatt des `*` Platzhalters). In diesem Fall sollte die Antwort auch einen {{HTTPHeader("Vary")}} Antwort-Header mit dem Wert `Origin` enthalten – um Browser darauf hinzuweisen, dass Serverantworten je nach Wert des `Origin` Anforderungs-Headers unterschiedlich sein können.

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
