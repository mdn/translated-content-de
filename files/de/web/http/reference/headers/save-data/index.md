---
title: Save-Data header
short-title: Save-Data
slug: Web/HTTP/Reference/Headers/Save-Data
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

{{SeeCompatTable}}

Der HTTP-**`Save-Data`**-{{Glossary("request_header", "Anforderungsheader")}} ist ein [Netzwerk-Client-Hinweis](/de/docs/Web/HTTP/Guides/Client_hints#network_client_hints), der die Präferenz des Clients für eine reduzierte Datennutzung angibt.
Dies könnte aus Gründen wie hohen Übertragungskosten, langsamen Verbindungsgeschwindigkeiten usw. sein.

`Save-Data` ist ein [niedriges Entropie-Hinweis](/de/docs/Web/HTTP/Guides/Client_hints#low_entropy_hints) und kann daher vom Client gesendet werden, auch wenn er nicht vom Server mithilfe eines {{HTTPHeader("Accept-CH")}}-Antwort-Headers angefordert wird.
Darüber hinaus sollte er verwendet werden, um die an den Client gesendeten Daten zu reduzieren, unabhängig von den Werten anderer Client-Hinweise, die die Netzwerkfähigkeit anzeigen, wie {{HTTPHeader("Downlink")}} und {{HTTPHeader("RTT")}}.

Ein Wert von `On` zeigt eine explizite Zustimmung des Benutzers zum Modus der reduzierten Datennutzung auf dem Client an.
Wenn dies an Ursprünge kommuniziert wird, können diese alternative Inhalte liefern, um den heruntergeladenen Datenumfang zu reduzieren, wie kleinere Bild- und Videoressourcen, unterschiedliches Markup und Styling, deaktivierte Polling- und automatische Updates usw.

> [!NOTE]
> Das Deaktivieren von HTTP/2 Server Push ({{RFC("7540", "Server Push", "8.2")}}) kann den Daten-Download verringern.
> Beachten Sie, dass dieses Feature in den meisten großen Browser-Engines standardmäßig nicht mehr unterstützt wird.

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
        {{Glossary("CORS-safelisted_response_header", "CORS-gesicherter Antwortheader")}}
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
  - : Ein Wert, der angibt, ob der Client in den Modus der reduzierten Datennutzung einwilligen möchte.
    `On` gibt ja an, während `Off` (der Standard) nein angibt.

## Beispiele

### Verwendung von `Save-Data: on`

Die folgende Nachricht fordert eine Ressource mit dem `Save-Data`-Header an, was anzeigt, dass der Client in den Datenreduzierungsmodus einwilligt:

```http
GET /image.jpg HTTP/1.1
Host: example.com
Save-Data: on
```

Der Server antwortet mit einer `200`-Antwort, und der {{HTTPHeader("Vary")}}-Header zeigt an, dass `Save-Data` zur Erstellung der Antwort verwendet worden sein könnte, und Caches sollten sich dieses Headers bewusst sein, um Antworten zu differenzieren:

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
Dies kann sicherstellen, dass dem Benutzer kein Bild von minderer Qualität aus dem Cache geliefert wird, wenn der `Save-Data`-Header nicht mehr vorhanden ist (z.B. nach dem Wechsel von Mobilfunk zu Wi-Fi).

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

- CSS-`@media`-Feature [`prefers-reduced-data`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-data) {{experimental_inline}}
- {{HTTPHeader("Vary")}}-Header, der darauf hinweist, dass der servierte Inhalt je nach Wert von `Save-Data` variiert (siehe [HTTP-Caching: Vary](/de/docs/Web/HTTP/Guides/Caching#vary))
- [`NetworkInformation.saveData`](/de/docs/Web/API/NetworkInformation/saveData)
- [Helfen Sie Ihren Benutzern `Save-Data`](https://css-tricks.com/help-users-save-data/) auf css-tricks.com
- [Schnelle und leichte Anwendungen mit Save-Data bereitstellen - web.dev](https://web.dev/articles/optimizing-content-efficiency-save-data) auf web.dev
- [Verbesserung der Privatsphäre der Nutzer und der Entwicklererfahrung mit User-Agent Client-Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
