---
title: Access-Control-Allow-Origin
slug: Web/HTTP/Headers/Access-Control-Allow-Origin
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

Der **`Access-Control-Allow-Origin`** Antwort-Header zeigt an, ob die Antwort mit anfragendem Code vom gegebenen {{glossary("origin")}} geteilt werden kann.

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
  - : Für Anfragen _ohne Anmeldeinformationen_ kann der wörtliche Wert "`*`" als Platzhalter angegeben werden; der Wert teilt den Browsern mit, dass sie anfragendem Code von jedem Ursprung den Zugriff auf die Ressource erlauben sollen. Der Versuch, den Platzhalter mit Anmeldeinformationen zu verwenden, [führt zu einem Fehler](/de/docs/Web/HTTP/CORS/Errors/CORSNotSupportingCredentials).
- `<origin>`
  - : Gibt einen Ursprung an. Es kann nur ein einzelner Ursprung angegeben werden. Wenn der Server Clients von mehreren Ursprüngen unterstützt, muss er den Ursprung für den spezifischen Client zurückgeben, der die Anfrage stellt.
- `null`

  - : Gibt den Ursprung "null" an.

    > **Note:** `null` [sollte nicht verwendet werden](https://w3c.github.io/webappsec-cors-for-developers/#avoid-returning-access-control-allow-origin-null): "Es mag sicher erscheinen, `Access-Control-Allow-Origin: "null"` zurückzugeben, aber die Serialisierung des Ursprungs jeder Ressource, die ein nicht-hierarchisches Schema (wie `data:` oder `file:`) und Sandbox-Dokumente verwendet, ist als "null" definiert. Viele User Agents gewähren solchen Dokumenten Zugang zu einer Antwort mit einem `Access-Control-Allow-Origin: "null"`-Header, und jeder Ursprung kann ein feindliches Dokument mit einem "null"-Ursprung erstellen. Der "null"-Wert für den ACAO-Header sollte daher vermieden werden."

## Beispiele

Eine Antwort, die dem Browser mitteilt, dass Code von jedem Ursprung auf eine Ressource zugreifen darf, wird Folgendes enthalten:

```http
Access-Control-Allow-Origin: *
```

Eine Antwort, die dem Browser mitteilt, dass anfragender Code vom Ursprung `https://developer.mozilla.org` auf eine Ressource zugreifen darf, wird Folgendes enthalten:

```http
Access-Control-Allow-Origin: https://developer.mozilla.org
```

Das Einschränken der möglichen `Access-Control-Allow-Origin`-Werte auf eine Menge erlaubter Ursprünge erfordert Code auf der Serverseite, der den Wert des {{HTTPHeader("Origin")}} Anfrage-Headers überprüft, diesen mit einer Liste erlaubter Ursprünge vergleicht und, wenn der Wert des {{HTTPHeader("Origin")}} in der Liste ist, den `Access-Control-Allow-Origin` Wert auf den gleichen Wert wie den des {{HTTPHeader("Origin")}} setzt.

### CORS und Caching

Angenommen, der Server sendet eine Antwort mit einem `Access-Control-Allow-Origin`-Wert mit einem expliziten Ursprung (anstatt des "`*`" Platzhalters). In diesem Fall sollte die Antwort auch einen {{HTTPHeader("Vary")}} Antwort-Header mit dem Wert `Origin` enthalten, um den Browsern anzuzeigen, dass Serverantworten basierend auf dem Wert des `Origin` Anfrage-Headers unterschiedlich sein können.

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
