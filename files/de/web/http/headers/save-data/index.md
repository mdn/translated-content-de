---
title: Save-Data
slug: Web/HTTP/Headers/Save-Data
l10n:
  sourceCommit: bd48972c8a9c2acf3b8fa6e41248d0952eb0c406
---

{{HTTPSidebar}}{{SeeCompatTable}}

Das **`Save-Data`** [Netzwerk-Client-Hint](/de/docs/Web/HTTP/Client_hints#network_client_hints) Anforderungsheaderfeld ist ein boolescher Wert, der die Präferenz des Clients für eine reduzierte Datennutzung angibt. Dies könnte aus Gründen wie hohen Übertragungskosten, langsamen Verbindungsgeschwindigkeiten usw. sein.

**`Save-Data`** ist ein [Low-Entropy-Hinweis](/de/docs/Web/HTTP/Client_hints#low_entropy_hints) und kann daher vom Client gesendet werden, selbst wenn dieser nicht vom Server mit einem {{HTTPHeader("Accept-CH")}} Antwortheader angefordert wurde. Darüber hinaus sollte es verwendet werden, um die an den Client gesendeten Daten zu reduzieren, unabhängig von den Werten anderer Client-Hinweise, die die Netzwerkkapazität angeben, wie z. B. {{HTTPHeader("Downlink")}} und {{HTTPHeader("RTT")}}.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Anforderungsheader")}},
        <a href="/de/docs/Web/HTTP/Client_hints">Client-Hinweis</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
      <td>nein</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_response_header", "CORS-sichere Antwortheader")}}
      </th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

Ein Wert von `On` zeigt ein explizites Opt-in des Benutzers in einen Modus mit reduzierter Datennutzung auf dem Client an. Wenn dies den Ursprüngen mitgeteilt wird, können sie alternative Inhalte liefern, um die heruntergeladenen Daten zu reduzieren, wie z. B. kleinere Bild- und Videoressourcen, unterschiedliche Markup- und Stilgestaltungen, deaktivierte Abfragen und automatische Updates usw.

> [!NOTE]
> Das Deaktivieren von HTTP/2 Server Push ({{RFC("7540", "Server Push", "8.2")}}) kann die Daten-Downloads reduzieren. Beachten Sie, dass diese Funktion standardmäßig in den meisten großen Browser-Engines nicht mehr unterstützt wird.

## Syntax

```http
Save-Data: <sd-token>
```

## Direktiven

- `<sd-token>`
  - : Ein Wert, der angibt, ob der Client in den Modus mit reduzierter Datennutzung wechseln möchte. `on` gibt Ja an, während `off` (der Standard) Nein angibt.

## Beispiele

Der {{HTTPHeader("Vary")}} Header stellt sicher, dass der Inhalt korrekt zwischengespeichert wird (zum Beispiel um sicherzustellen, dass dem Benutzer kein qualitativ minderwertiges Bild aus dem Cache serviert wird, wenn der `Save-Data` Header nicht mehr vorhanden ist, _z. B._ nach dem Wechsel von Mobilfunk zu WLAN).

### Mit `Save-Data: on`

Anfrage:

```http
GET /image.jpg HTTP/1.1
Host: example.com
Save-Data: on
```

Antwort:

```http
HTTP/1.1 200 OK
Content-Length: 102832
Vary: Accept-Encoding, Save-Data
Cache-Control: public, max-age=31536000
Content-Type: image/jpeg

[…]
```

### Ohne `Save-Data`

Anfrage:

```http
GET /image.jpg HTTP/1.1
Host: example.com
```

Antwort:

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

- [Help Your Users `Save-Data` - CSS Tricks](https://css-tricks.com/help-users-save-data/)
- [Delivering Fast and Light Applications with Save-Data - web.dev](https://web.dev/articles/optimizing-content-efficiency-save-data)
- {{HTTPHeader("Vary")}} Header, der anzeigt, dass der servierte Inhalt je nach Wert von `Save-Data` variiert (siehe [HTTP Caching > Vary](/de/docs/Web/HTTP/Caching#vary))
- CSS @media Feature [`prefers-reduced-data`](/de/docs/Web/CSS/@media/prefers-reduced-data) {{experimental_inline}}
- [Verbesserung der Benutzer-Privatsphäre und der Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- [`NetworkInformation.saveData`](/de/docs/Web/API/NetworkInformation/saveData)
