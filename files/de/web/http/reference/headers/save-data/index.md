---
title: Save-Data header
short-title: Save-Data
slug: Web/HTTP/Reference/Headers/Save-Data
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der HTTP **`Save-Data`** {{Glossary("request_header", "Anforderungsheader")}} ist ein [Netzwerk-Client-Hinweis](/de/docs/Web/HTTP/Guides/Client_hints#network_client_hints), der die Präferenz des Clients für eine reduzierte Datennutzung anzeigt. Dies könnte aus Gründen wie hohen Übertragungskosten, langsamen Verbindungsgeschwindigkeiten usw. sein.

`Save-Data` ist ein [Hinweis mit niedriger Entropie](/de/docs/Web/HTTP/Guides/Client_hints#low_entropy_hints) und kann daher vom Client gesendet werden, auch wenn er nicht explizit vom Server über einen {{HTTPHeader("Accept-CH")}} Antwort-Header angefordert wird. Darüber hinaus sollte er verwendet werden, um die zum Client gesendeten Daten zu reduzieren, unabhängig von den Werten anderer Client-Hinweise, die die Netzwerkkapazität anzeigen, wie {{HTTPHeader("Downlink")}} und {{HTTPHeader("RTT")}}.

Ein Wert von `On` zeigt eine ausdrückliche Zustimmung des Benutzers zu einem Modus mit reduzierter Datennutzung auf dem Client an. Wenn dies an Ursprünge übermittelt wird, können diese alternative Inhalte liefern, um die heruntergeladenen Daten zu reduzieren, wie kleinere Bild- und Videoressourcen, unterschiedliche Markup- und Styling-Optionen, deaktivierte Abfragen und automatische Updates usw.

> [!NOTE]
> Das Deaktivieren von HTTP/2 Server Push ({{RFC("7540", "Server Push", "8.2")}}) kann die Datenmengen reduzieren. Beachten Sie, dass diese Funktion von den meisten großen Browser-Engines standardmäßig nicht mehr unterstützt wird.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Anforderungsheader")}},
        <a href="/de/docs/Web/HTTP/Guides/Client_hints">Client-Hinweis</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungsheader")}}</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_response_header", "CORS-safelisted Antwort-Header")}}
      </th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Save-Data: <sd-token>
```

## Direktiven

- `<sd-token>`
  - : Ein Wert, der angibt, ob der Client sich für den Modus mit reduzierter Datennutzung entscheidet. `on` bedeutet ja, während `off` (der Standardwert) nein bedeutet.

## Beispiele

### Verwendung von `Save-Data: on`

Die folgende Nachricht fordert eine Ressource mit einem `Save-Data`-Header an, der angibt, dass der Client in den Modus mit reduzierter Datennutzung wechselt:

```http
GET /image.jpg HTTP/1.1
Host: example.com
Save-Data: on
```

Der Server antwortet mit einer `200`-Antwort, und der {{HTTPHeader("Vary")}}-Header gibt an, dass `Save-Data` möglicherweise verwendet wurde, um die Antwort zu erstellen, und Caches sollten sich dieses Headers bewusst sein, um Antworten zu differenzieren:

```http
HTTP/1.1 200 OK
Content-Length: 102832
Vary: Accept-Encoding, Save-Data
Cache-Control: public, max-age=31536000
Content-Type: image/jpeg

[…]
```

### Weglassen von `Save-Data`

In diesem Fall fordert der Client dieselbe Ressource ohne den `Save-Data`-Header an:

```http
GET /image.jpg HTTP/1.1
Host: example.com
```

Die Antwort des Servers bietet die vollständige Version des Inhalts. Der {{HTTPHeader("Vary")}}-Header stellt sicher, dass Antworten je nach Wert des `Save-Data`-Headers separat zwischengespeichert werden. Dies kann sicherstellen, dass dem Benutzer kein Bild niedrigerer Qualität aus dem Cache served wird, wenn der `Save-Data`-Header nicht mehr vorhanden ist (z.B. nach einem Wechsel von Mobilfunk zu Wi-Fi).

```http
HTTP/1.1 200 OK
Content-Length: 481770
Vary: Accept-Encoding, Save-Data
Cache-Control: public, max-age=31536000
Content-Type: image/jpeg

[…]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS `@media` Feature [`prefers-reduced-data`](/de/docs/Web/CSS/@media/prefers-reduced-data) {{experimental_inline}}
- Der {{HTTPHeader("Vary")}}-Header, der angibt, dass der bereitgestellte Inhalt je nach Wert von `Save-Data` variiert (siehe [HTTP Caching: Vary](/de/docs/Web/HTTP/Guides/Caching#vary))
- [`NetworkInformation.saveData`](/de/docs/Web/API/NetworkInformation/saveData)
- [Helfen Sie Ihren Benutzern, `Save-Data` zu sparen](https://css-tricks.com/help-users-save-data/) auf css-tricks.com
- [Schnelle und leichte Anwendungen mit Save-Data bereitstellen - web.dev](https://web.dev/articles/optimizing-content-efficiency-save-data) auf web.dev
- [Verbesserung der Privatsphäre der Benutzer und der Entwicklererfahrung mit User-Agent-Client-Hinweisen](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
