---
title: Save-Data
slug: Web/HTTP/Headers/Save-Data
l10n:
  sourceCommit: 6c32e8b21a39b1b8d3db7a194d2350e0f8218b64
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der HTTP **`Save-Data`** {{Glossary("request_header", "Request-Header")}} ist ein [Netzwerk-Client-Hinweis](/de/docs/Web/HTTP/Client_hints#network_client_hints), der die Vorliebe des Clients für eine reduzierte Datennutzung anzeigt.
Dies könnte aus Gründen wie hohen Übertragungskosten, langsamen Verbindungen usw. sein.

`Save-Data` ist ein [Low Entropy Hint](/de/docs/Web/HTTP/Client_hints#low_entropy_hints) und kann daher vom Client gesendet werden, auch wenn er nicht vom Server mit einem {{HTTPHeader("Accept-CH")}} Antwort-Header angefordert wird.
Weiterhin sollte es verwendet werden, um die an den Client gesendeten Daten zu reduzieren, unabhängig von den Werten anderer Client-Hinweise, die die Netzwerkfähigkeit anzeigen, wie {{HTTPHeader("Downlink")}} und {{HTTPHeader("RTT")}}.

Ein Wert von `On` zeigt eine ausdrückliche Benutzerentscheidung für einen Modus mit reduzierter Datennutzung auf dem Client an.
Wenn dies an Ursprünge kommuniziert wird, ermöglicht es ihnen, alternativen Inhalt bereitzustellen, um die heruntergeladenen Daten zu reduzieren, wie kleinere Bilder und Videoressourcen, andere Markup- und Stilgestaltungen, deaktiviertes Polling und automatische Updates usw.

> [!NOTE]
> Das Deaktivieren von HTTP/2 Server Push ({{RFC("7540", "Server Push", "8.2")}}) kann Daten-Downloads reduzieren.
> Beachten Sie, dass diese Funktion in den meisten großen Browser-Engines standardmäßig nicht mehr unterstützt wird.

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
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
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
  - : Ein Wert, der angibt, ob der Client den Modus mit reduzierter Datennutzung nutzen möchte.
    `on` bedeutet ja, während `off` (der Standard) nein bedeutet.

## Beispiele

### Verwendung von `Save-Data: on`

Die folgende Nachricht fordert eine Ressource mit dem `Save-Data`-Header an, der anzeigt, dass der Client den reduzierten Datenmodus verwenden möchte:

```http
GET /image.jpg HTTP/1.1
Host: example.com
Save-Data: on
```

Der Server antwortet mit einer `200`-Antwort, und der {{HTTPHeader("Vary")}}-Header zeigt an, dass `Save-Data` verwendet worden sein könnte, um die Antwort zu erstellen, und Caches sollten sich dieses Headers bewusst sein, um Antworten zu differenzieren:

```http
HTTP/1.1 200 OK
Content-Length: 102832
Vary: Accept-Encoding, Save-Data
Cache-Control: public, max-age=31536000
Content-Type: image/jpeg

[…]
```

### Auslassen von `Save-Data`

In diesem Fall fordert der Client dieselbe Ressource ohne den `Save-Data`-Header an:

```http
GET /image.jpg HTTP/1.1
Host: example.com
```

Die Antwort des Servers liefert die vollständige Version des Inhalts.
Der {{HTTPHeader("Vary")}}-Header stellt sicher, dass Antworten basierend auf dem Wert des `Save-Data`-Headers separat zwischengespeichert werden sollten.
Dies kann sicherstellen, dass der Benutzer nicht ein Bild niedrigerer Qualität aus dem Cache erhält, wenn der `Save-Data`-Header nicht mehr vorhanden ist (z. B. nach dem Wechsel von Mobilfunk zu WLAN).

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
- {{HTTPHeader("Vary")}}-Header, der anzeigt, dass der bereitgestellte Inhalt je nach Wert von `Save-Data` variiert (siehe [HTTP-Caching: Vary](/de/docs/Web/HTTP/Caching#vary))
- [`NetworkInformation.saveData`](/de/docs/Web/API/NetworkInformation/saveData)
- [Helfen Sie Ihren Benutzern, `Save-Data` zu sparen](https://css-tricks.com/help-users-save-data/) auf css-tricks.com
- [Bereitstellung von schnellen und leichten Anwendungen mit Save-Data - web.dev](https://web.dev/articles/optimizing-content-efficiency-save-data) auf web.dev
- [Verbesserung der Privatsphäre der Benutzer und der Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
