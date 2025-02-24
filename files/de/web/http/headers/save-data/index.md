---
title: Save-Data
slug: Web/HTTP/Headers/Save-Data
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der HTTP-**`Save-Data`**-{{Glossary("request_header", "Request-Header")}} ist ein [Client-Hinweis für Netzwerke](/de/docs/Web/HTTP/Client_hints#network_client_hints), der die Präferenz des Clients für eine reduzierte Datennutzung anzeigt.
Dies könnte aus Gründen wie hohen Übertragungskosten, langsamen Verbindungsgeschwindigkeiten usw. sein.

`Save-Data` ist ein [Hinweis mit geringer Entropie](/de/docs/Web/HTTP/Client_hints#low_entropy_hints) und kann daher vom Client gesendet werden, auch wenn er nicht vom Server über einen {{HTTPHeader("Accept-CH")}}-Antwort-Header angefordert wird.
Darüber hinaus sollte er verwendet werden, um die an den Client gesendeten Daten zu reduzieren, unabhängig von den Werten anderer Client-Hinweise, die die Netzwerkfähigkeit anzeigen, wie {{HTTPHeader("Downlink")}} und {{HTTPHeader("RTT")}}.

Ein Wert von `On` zeigt an, dass der Benutzer explizit in einen Modus mit reduzierter Datennutzung auf dem Client eingewilligt hat.
Wenn dies an Ursprünge kommuniziert wird, ermöglicht es diesen, alternative Inhalte bereitzustellen, um die heruntergeladenen Daten zu reduzieren, wie z.B. kleinere Bild- und Videoressourcen, unterschiedliches Markup und Styling, deaktivierte Abfragen und automatische Updates usw.

> [!NOTE]
> Das Deaktivieren von HTTP/2 Server Push ({{RFC("7540", "Server Push", "8.2")}}) kann die Datendownloads reduzieren.
> Beachten Sie, dass dieses Feature in den meisten großen Browser-Engines standardmäßig nicht mehr unterstützt wird.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Request-Header")}},
        <a href="/de/docs/Web/HTTP/Client_hints">Client-Hinweis</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Request-Header")}}</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_response_header", "CORS-safelisted-response-Header")}}
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
  - : Ein Wert, der angibt, ob der Client in den Modus für reduzierte Datennutzung einwilligen möchte.
    `on` zeigt Ja an, während `off` (der Standard) Nein anzeigt.

## Beispiele

### Nutzung von `Save-Data: on`

Die folgende Nachricht fordert eine Ressource mit dem `Save-Data`-Header an, der anzeigt, dass der Client sich für den reduzierten Datenmodus entscheidet:

```http
GET /image.jpg HTTP/1.1
Host: example.com
Save-Data: on
```

Der Server antwortet mit einer `200`-Antwort, und der {{HTTPHeader("Vary")}}-Header zeigt an, dass `Save-Data` möglicherweise verwendet wurde, um die Antwort zu erstellen. Caches sollten sich dieses Headers bewusst sein, um zwischen Antworten zu unterscheiden:

```http
HTTP/1.1 200 OK
Content-Length: 102832
Vary: Accept-Encoding, Save-Data
Cache-Control: public, max-age=31536000
Content-Type: image/jpeg

[…]
```

### Auslassen von `Save-Data`

In diesem Fall fordert der Client die gleiche Ressource ohne den `Save-Data`-Header an:

```http
GET /image.jpg HTTP/1.1
Host: example.com
```

Die Antwort des Servers liefert die vollständige Version des Inhalts.
Der {{HTTPHeader("Vary")}}-Header stellt sicher, dass Antworten basierend auf dem Wert des `Save-Data`-Headers separat zwischengespeichert werden sollten.
Dies kann sicherstellen, dass dem Benutzer kein Bild niedrigerer Qualität aus dem Cache bereitgestellt wird, wenn der `Save-Data`-Header nicht mehr vorhanden ist (z.B. nach dem Wechsel von Mobilfunk zu WLAN).

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

- CSS `@media`-Feature [`prefers-reduced-data`](/de/docs/Web/CSS/@media/prefers-reduced-data) {{experimental_inline}}
- {{HTTPHeader("Vary")}}-Header, der anzeigt, dass der bereitgestellte Inhalt je nach Wert von `Save-Data` variiert (siehe [HTTP Caching: Vary](/de/docs/Web/HTTP/Caching#vary))
- [`NetworkInformation.saveData`](/de/docs/Web/API/NetworkInformation/saveData)
- [Helfen Sie Ihren Benutzern, Daten zu sparen](https://css-tricks.com/help-users-save-data/) auf css-tricks.com
- [Bereitstellung schneller und leichter Anwendungen mit Save-Data - web.dev](https://web.dev/articles/optimizing-content-efficiency-save-data) auf web.dev
- [Verbesserung des Benutzerdatenschutzes und der Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
