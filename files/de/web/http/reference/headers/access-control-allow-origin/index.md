---
title: Access-Control-Allow-Origin header
short-title: Access-Control-Allow-Origin
slug: Web/HTTP/Reference/Headers/Access-Control-Allow-Origin
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
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
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}</th>
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
    Bei Anfragen _ohne Anmeldeinformationen_ kann der buchstäbliche Wert `*` als Wildcard angegeben werden.
    Der Versuch, die Wildcard mit Anmeldeinformationen zu verwenden, [führt zu einem Fehler](/de/docs/Web/HTTP/Guides/CORS/Errors/CORSNotSupportingCredentials).
- `<origin>`
  - : Gibt eine einzelne Herkunft an. Wenn der Server Clients von mehreren Herkünften unterstützt, muss er die spezifische Herkunft für den jeweiligen anfragenden Client zurückgeben.
- `null`
  - : Gibt die Herkunft "null" an.
    > [!NOTE]
    > Der Wert `null` sollte nicht verwendet werden. Es mag sicher erscheinen, `Access-Control-Allow-Origin: "null"` zurückzugeben; jedoch wird die Herkunft von Ressourcen, die ein nicht-hierarchisches Schema nutzen (wie `data:` oder `file:`), und von dokumentierten Sandboxen als `null` serialisiert.
    > Viele Browser gewähren solchen Dokumenten Zugriff auf eine Antwort mit einem `Access-Control-Allow-Origin: null`-Header, und jede Herkunft kann ein feindliches Dokument mit einer `null`-Herkunft erstellen.
    > Daher sollte der `null` Wert für den `Access-Control-Allow-Origin`-Header vermieden werden.

## Beispiele

Eine Antwort, die dem Browser mitteilt, dass Code von jeder Herkunft auf eine Ressource zugreifen darf, enthält Folgendes:

```http
Access-Control-Allow-Origin: *
```

Eine Antwort, die dem Browser mitteilt, dass anfragender Code von der Herkunft `https://developer.mozilla.org` auf eine Ressource zugreifen darf, enthält Folgendes:

```http
Access-Control-Allow-Origin: https://developer.mozilla.org
```

Um die möglichen `Access-Control-Allow-Origin`-Werte auf eine Reihe von erlaubten Herkünften zu beschränken, ist Server-seitiger Code erforderlich, der den Wert des {{HTTPHeader("Origin")}} Anfrage-Headers überprüft, diesen mit einer Liste erlaubter Herkünfte vergleicht und, falls der {{HTTPHeader("Origin")}}-Wert in der Liste ist, den Wert von `Access-Control-Allow-Origin` auf denselben Wert wie der {{HTTPHeader("Origin")}}-Wert setzt.

### CORS und Caching

Angenommen, der Server sendet eine Antwort mit einem `Access-Control-Allow-Origin`-Wert mit einer expliziten Herkunft (statt der `*`-Wildcard). In diesem Fall sollte die Antwort auch einen {{HTTPHeader("Vary")}} Antwort-Header mit dem Wert `Origin` enthalten – um den Browsern anzuzeigen, dass Serverantworten je nach Wert des `Origin`-Anforderungs-Headers variieren können.

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
