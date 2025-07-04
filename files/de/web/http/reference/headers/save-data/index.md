---
title: Save-Data header
short-title: Save-Data
slug: Web/HTTP/Reference/Headers/Save-Data
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{SeeCompatTable}}

Der HTTP **`Save-Data`** {{Glossary("request_header", "Request-Header")}} ist ein [Netzwerk-Client-Hinweis](/de/docs/Web/HTTP/Guides/Client_hints#network_client_hints), der die Präferenz des Clients für eine reduzierte Datennutzung angibt.
Dies kann aus Gründen wie hohen Übertragungskosten oder langsamen Verbindungsgeschwindigkeiten geschehen.

`Save-Data` ist ein [Low-Entropy-Hinweis](/de/docs/Web/HTTP/Guides/Client_hints#low_entropy_hints) und kann daher vom Client gesendet werden, auch wenn er nicht vom Server mit einem {{HTTPHeader("Accept-CH")}} Response-Header angefordert wird.
Darüber hinaus sollte er verwendet werden, um die zum Client gesendeten Daten zusätzlich zu den Werten anderer Client-Hinweise, die die Netzwerkfähigkeit anzeigen, wie {{HTTPHeader("Downlink")}} und {{HTTPHeader("RTT")}} zu reduzieren.

Ein Wert von `On` zeigt an, dass der Benutzer ausdrücklich in den reduzierten Datennutzungsmodus auf dem Client eingewilligt hat.
Wenn dies an die Ursprünge kommuniziert wird, ermöglicht es ihnen, Alternativinhalte zu liefern, um die heruntergeladenen Daten zu reduzieren, z. B. kleinere Bild- und Videodateien, anderes Markup und Styling, deaktiviertes Polling und automatische Updates usw.

> [!NOTE]
> Das Deaktivieren von HTTP/2 Server Push ({{RFC("7540", "Server Push", "8.2")}}) kann den Daten-Download reduzieren.
> Beachten Sie, dass dieses Feature in den meisten großen Browser-Engines standardmäßig nicht mehr unterstützt wird.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Request-Header")}},
        <a href="/de/docs/Web/HTTP/Guides/Client_hints">Client-Hinweis</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrage-Header")}}</th>
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
  - : Ein Wert, der angibt, ob der Client in den reduzierten Datennutzungsmodus einwilligen möchte.
    `on` bedeutet ja, während `off` (der Standard) nein bedeutet.

## Beispiele

### Verwendung von `Save-Data: on`

Die folgende Nachricht fordert eine Ressource mit dem `Save-Data` Header an, was anzeigt, dass der Client in den reduzierten Datenmodus einwilligt:

```http
GET /image.jpg HTTP/1.1
Host: example.com
Save-Data: on
```

Der Server antwortet mit einer `200`-Antwort und der {{HTTPHeader("Vary")}} Header zeigt an, dass `Save-Data` verwendet worden sein könnte, um die Antwort zu erstellen, und Caches sollten sich dieses Headers bewusst sein, um Antworten zu differenzieren:

```http
HTTP/1.1 200 OK
Content-Length: 102832
Vary: Accept-Encoding, Save-Data
Cache-Control: public, max-age=31536000
Content-Type: image/jpeg

[…]
```

### Weglassen von `Save-Data`

In diesem Fall fordert der Client die gleiche Ressource ohne den `Save-Data` Header an:

```http
GET /image.jpg HTTP/1.1
Host: example.com
```

Die Antwort des Servers liefert die vollständige Version des Inhalts.
Der {{HTTPHeader("Vary")}} Header stellt sicher, dass Antworten basierend auf dem Wert des `Save-Data` Headers separat gecacht werden sollten.
Dies kann sicherstellen, dass dem Benutzer kein Bild geringerer Qualität aus dem Cache serviert wird, wenn der `Save-Data` Header nicht mehr vorhanden ist (z.B. nach einem Wechsel von Mobilfunk zu WLAN).

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
- {{HTTPHeader("Vary")}} Header, der anzeigt, dass der Inhalt abhängig vom Wert des `Save-Data` variieren kann (siehe [HTTP-Caching: Vary](/de/docs/Web/HTTP/Guides/Caching#vary))
- [`NetworkInformation.saveData`](/de/docs/Web/API/NetworkInformation/saveData)
- [Helfen Sie Ihren Nutzern, `Save-Data`](https://css-tricks.com/help-users-save-data/) auf css-tricks.com
- [Effiziente und schnelle Anwendungen mit Save-Data bereitstellen - web.dev](https://web.dev/articles/optimizing-content-efficiency-save-data) auf web.dev
- [Verbesserung der Benutzer-Privatsphäre und der Entwicklererfahrung mit User-Agent-Client-Hinweisen](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
