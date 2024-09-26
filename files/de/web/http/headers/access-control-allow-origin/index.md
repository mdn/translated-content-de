---
title: Access-Control-Allow-Origin
slug: Web/HTTP/Headers/Access-Control-Allow-Origin
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{HTTPSidebar}}

Der **`Access-Control-Allow-Origin`** Antwort-Header zeigt an, ob die Antwort mit anfragendem Code von dem angegebenen {{glossary("origin")}} geteilt werden kann.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
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
  - : Für Anfragen _ohne Anmeldeinformationen_ kann der Wert `*` als Platzhalter angegeben werden; dieser Wert teilt den Browsern mit, dass die anfragende Codierung von jedem Ursprung auf die Ressource zugreifen darf. Der Versuch, den Platzhalter mit Anmeldeinformationen zu verwenden, [führt zu einem Fehler](/de/docs/Web/HTTP/CORS/Errors/CORSNotSupportingCredentials).
- `<origin>`
  - : Gibt einen Ursprung an. Es kann nur ein einzelner Ursprung angegeben werden. Wenn der Server Clients von mehreren Ursprüngen unterstützt, muss er den Ursprung für den spezifischen Client zurückgeben, der die Anfrage stellt.
- `null`

  - : Gibt den Ursprung "null" an.

    > **Note:** `null` [sollte nicht verwendet werden](https://w3c.github.io/webappsec-cors-for-developers/#avoid-returning-access-control-allow-origin-null): "Es mag sicher erscheinen, `Access-Control-Allow-Origin: "null"` zurückzugeben, aber die Serialisierung des Ursprungs jeder Ressource, die ein nicht-hierarchisches Schema verwendet (wie `data:` oder `file:`) und sandkastenartige Dokumente ist als "null" definiert. Viele Benutzeragenten gewähren solchen Dokumenten Zugriff auf eine Antwort mit einem `Access-Control-Allow-Origin: "null"` Header, und jeder Ursprung kann ein feindliches Dokument mit einem "null" Ursprung erstellen. Der "null"-Wert für den ACAO-Header sollte daher vermieden werden."

## Beispiele

Eine Antwort, die dem Browser mitteilt, dass Code von jedem Ursprung auf eine Ressource zugreifen darf, enthält Folgendes:

```http
Access-Control-Allow-Origin: *
```

Eine Antwort, die dem Browser mitteilt, dass anfragender Code vom Ursprung `https://developer.mozilla.org` auf eine Ressource zugreifen darf, enthält Folgendes:

```http
Access-Control-Allow-Origin: https://developer.mozilla.org
```

Um die möglichen Werte von `Access-Control-Allow-Origin` auf eine Menge zulässiger Ursprünge zu beschränken, ist auf der Serverseite ein Code erforderlich, der den Wert des {{HTTPHeader("Origin")}} Anfrage-Headers überprüft, diesen mit einer Liste zulässiger Ursprünge vergleicht und dann, wenn der {{HTTPHeader("Origin")}} Wert in der Liste ist, den `Access-Control-Allow-Origin` Wert auf denselben Wert wie der {{HTTPHeader("Origin")}} Wert setzt.

### CORS und Caching

Angenommen, der Server sendet eine Antwort mit einem `Access-Control-Allow-Origin` Wert mit einem expliziten Ursprung (anstatt des `*` Platzhalters). In diesem Fall sollte die Antwort auch einen {{HTTPHeader("Vary")}} Response-Header mit dem Wert `Origin` enthalten — um den Browsern anzuzeigen, dass sich Serverantworten basierend auf dem Wert des `Origin` Anfrage-Headers unterscheiden können.

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
