---
title: Save-Data header
short-title: Save-Data
slug: Web/HTTP/Reference/Headers/Save-Data
l10n:
  sourceCommit: 6c43d5c2607cbc84c8ec488400ebb66448992958
---

{{SeeCompatTable}}

Der HTTP-**`Save-Data`**-{{Glossary("request_header", "Anforderungsheader")}} ist ein [Netzwerk-Client-Hinweis](/de/docs/Web/HTTP/Guides/Client_hints#network_client_hints), der die Präferenz des Clients für eine reduzierte Datennutzung angibt. Dies könnte aus Gründen wie hohen Übertragungskosten, langsamen Verbindungsgeschwindigkeiten usw. erfolgen.

`Save-Data` ist ein [low entropy hint](/de/docs/Web/HTTP/Guides/Client_hints#low_entropy_hints), und kann vom Client gesendet werden, auch wenn der Server dies nicht über einen {{HTTPHeader("Accept-CH")}}-Antwortheader angefordert hat. Weiterhin sollte er verwendet werden, um die an den Client gesendeten Daten zu reduzieren, unabhängig von den Werten anderer Client-Hinweise, die die Netzwerkfähigkeit angeben, wie {{HTTPHeader("Downlink")}} und {{HTTPHeader("RTT")}}.

Ein Wert von `On` zeigt an, dass der Benutzer ausdrücklich in einem datenreduzierten Modus auf dem Client eingewilligt hat. Wenn dies an Ursprünge kommuniziert wird, ermöglicht es ihnen, alternative Inhalte zu liefern, um die heruntergeladenen Daten zu reduzieren, wie kleinere Bild- und Videoressourcen, andere Markups und Styling, deaktivierte Polling- und automatische Updates usw.

> [!NOTE]
> Das Deaktivieren von HTTP/2 Server Push ({{RFC("7540", "Server Push", "8.2")}}) kann die Datendownloads reduzieren. Beachten Sie, dass dieses Feature in den meisten großen Browser-Engines standardmäßig nicht mehr unterstützt wird.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
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
        {{Glossary("CORS-safelisted_response_header", "CORS-safelisted response header")}}
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
  - : Ein Wert, der angibt, ob der Client in den Modus der reduzierten Datennutzung einwilligen möchte. `on` bedeutet ja, während `off` (der Standardwert) nein bedeutet.

## Beispiele

### Verwendung von `Save-Data: on`

Die folgende Nachricht fordert eine Ressource mit dem `Save-Data`-Header an, der anzeigt, dass der Client sich für den datensparsamen Modus entscheidet:

```http
GET /image.jpg HTTP/1.1
Host: example.com
Save-Data: on
```

Der Server antwortet mit einer `200`-Antwort, und der {{HTTPHeader("Vary")}}-Header gibt an, dass `Save-Data` zur Erstellung der Antwort verwendet worden sein könnte und Caches dieses Header berücksichtigen sollten, um Antworten zu unterscheiden:

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

Die Antwort des Servers liefert die vollständige Version des Inhalts. Der {{HTTPHeader("Vary")}}-Header stellt sicher, dass Antworten separat basierend auf dem Wert des `Save-Data`-Headers zwischengespeichert werden sollten. Dies kann sicherstellen, dass dem Benutzer kein Bild niedrigerer Qualität aus dem Cache bereitgestellt wird, wenn der `Save-Data`-Header nicht mehr vorhanden ist (z. B. nach dem Wechsel von Mobilfunk zu WLAN).

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

- CSS `@media`-Funktion {{cssxref("@media/prefers-reduced-data")}} {{experimental_inline}}
- {{HTTPHeader("Vary")}}-Header, der angibt, dass der bereitgestellte Inhalt abhängig vom Wert von `Save-Data` variiert (siehe [HTTP Caching: Vary](/de/docs/Web/HTTP/Guides/Caching#vary))
- [`NetworkInformation.saveData`](/de/docs/Web/API/NetworkInformation/saveData)
- [Helfen Sie Ihren Nutzern, `Save-Data` einzusparen](https://css-tricks.com/help-users-save-data/) auf css-tricks.com
- [Schnelle und leichte Anwendungen mit Save-Data bereitstellen - web.dev](https://web.dev/articles/optimizing-content-efficiency-save-data) auf web.dev
- [Verbesserung des Datenschutzes und der Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
