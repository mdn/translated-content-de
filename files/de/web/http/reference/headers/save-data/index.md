---
title: Save-Data
slug: Web/HTTP/Reference/Headers/Save-Data
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der HTTP **`Save-Data`** {{Glossary("request_header", "Anforderungsheader")}} ist ein [Netzwerk-Client-Hinweis](/de/docs/Web/HTTP/Guides/Client_hints#network_client_hints), der die Präferenz des Clients für eine reduzierte Datennutzung anzeigt.
Dies könnte aus Gründen wie hohen Transferkosten, langsamen Verbindungsgeschwindigkeiten usw. geschehen.

`Save-Data` ist ein [Hinweis mit geringer Entropie](/de/docs/Web/HTTP/Guides/Client_hints#low_entropy_hints) und kann daher vom Client gesendet werden, auch wenn er nicht vom Server mit einem {{HTTPHeader("Accept-CH")}} Antwort-Header angefordert wird.
Darüber hinaus sollte er verwendet werden, um die an den Client gesendeten Daten zu reduzieren, unabhängig von den Werten anderer Client-Hinweise, die die Netzwerkfähigkeit anzeigen, wie {{HTTPHeader("Downlink")}} und {{HTTPHeader("RTT")}}.

Ein Wert von `On` zeigt an, dass der Benutzer ausdrücklich in einen Modus zur reduzierten Datennutzung auf dem Client eingewilligt hat.
Wenn dies an Ursprünge kommuniziert wird, können diese alternative Inhalte liefern, um die heruntergeladenen Daten zu reduzieren, wie z.B. kleinere Bild- und Videoressourcen, unterschiedliche Markup- und Stilgestaltungen, deaktiviertes Polling und automatische Updates usw.

> [!NOTE]
> Das Deaktivieren von HTTP/2 Server Push ({{RFC("7540", "Server Push", "8.2")}}) kann Downloads reduzieren.
> Beachten Sie, dass diese Funktion in den meisten großen Browser-Engines standardmäßig nicht mehr unterstützt wird.

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
        {{Glossary("CORS-safelisted_response_header", "CORS-Safelist-Antwortheader")}}
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
  - : Ein Wert, der angibt, ob der Client in den Modus zur reduzierten Datennutzung einwilligen möchte.
    `on` bedeutet ja, während `off` (die Standardeinstellung) nein bedeutet.

## Beispiele

### Verwendung von `Save-Data: on`

Die folgende Nachricht fordert eine Ressource mit dem `Save-Data`-Header an, der angibt, dass der Client in den Modus zur reduzierten Datennutzung wechselt:

```http
GET /image.jpg HTTP/1.1
Host: example.com
Save-Data: on
```

Der Server antwortet mit einer `200`-Antwort, und der {{HTTPHeader("Vary")}}-Header zeigt an, dass `Save-Data` möglicherweise zur Erstellung der Antwort verwendet wurde. Caches sollten sich dieses Headers bewusst sein, um Antworten zu differenzieren:

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
Der {{HTTPHeader("Vary")}}-Header stellt sicher, dass Antworten separat basierend auf dem Wert des `Save-Data`-Headers zwischengespeichert werden sollten.
Dies kann sicherstellen, dass der Benutzer nicht ein Bild mit niedrigerer Qualität aus dem Cache erhält, wenn der `Save-Data`-Header nicht mehr vorhanden ist (z.B. nach dem Wechsel von der Mobilfunkverbindung zu Wi-Fi).

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
- {{HTTPHeader("Vary")}}-Header, der angibt, dass die bereitgestellten Inhalte je nach dem Wert von `Save-Data` variieren (siehe [HTTP Caching: Vary](/de/docs/Web/HTTP/Guides/Caching#vary))
- [`NetworkInformation.saveData`](/de/docs/Web/API/NetworkInformation/saveData)
- [Helfen Sie Ihren Nutzern `Save-Data`](https://css-tricks.com/help-users-save-data/) auf css-tricks.com
- [Schnelle und leichte Anwendungen mit Save-Data bereitstellen - web.dev](https://web.dev/articles/optimizing-content-efficiency-save-data) auf web.dev
- [Verbesserung der Benutzerprivatsphäre und der Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
