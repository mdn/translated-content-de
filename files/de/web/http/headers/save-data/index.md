---
title: Save-Data
slug: Web/HTTP/Headers/Save-Data
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der **`Save-Data`** [Netzwerk-Client-Hinweis](/de/docs/Web/HTTP/Client_hints#network_client_hints) im Anfrage-Headerfeld ist ein boolescher Wert, der die Präferenz des Clients für eine reduzierte Datennutzung anzeigt. Dies könnte aus Gründen wie hohen Übertragungskosten, langsamen Verbindungsgeschwindigkeiten usw. der Fall sein.

**`Save-Data`** ist ein [Hinweis mit niedriger Entropie](/de/docs/Web/HTTP/Client_hints#low_entropy_hints) und kann daher vom Client gesendet werden, auch wenn er nicht von dem Server mittels eines {{HTTPHeader("Accept-CH")}} Antwort-Headers angefordert wurde. Darüber hinaus sollte er verwendet werden, um die zum Client gesendeten Daten zu reduzieren, unabhängig von den Werten anderer Client-Hinweise, die die Netzwerkfähigkeit anzeigen, wie {{HTTPHeader("Downlink")}} und {{HTTPHeader("RTT")}}.

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
      <td>nein</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_response_header", "CORS-safelisted Antwort-Header")}}
      </th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

Ein Wert von `On` zeigt an, dass der Benutzer ausdrücklich in einen Modus mit reduzierter Datennutzung auf dem Client eingewilligt hat. Wenn dies den Ursprüngen mitgeteilt wird, können sie alternative Inhalte bereitstellen, um die heruntergeladenen Daten zu reduzieren, wie z.B. kleinere Bild- und Videoressourcen, unterschiedliche Markup- und Styling-Optionen, deaktivierte Abfragen und automatische Aktualisierungen usw.

> [!NOTE]
> Die Deaktivierung von HTTP/2 Server Push ({{RFC("7540", "Server Push", "8.2")}}) kann ebenfalls wünschenswert sein, um Daten-Downloads zu reduzieren.

## Syntax

```http
Save-Data: <sd-token>
```

## Direktiven

- `<sd-token>`
  - : Ein Wert, der angibt, ob der Client in den Modus mit reduzierter Datennutzung wechseln möchte.
    `on` bedeutet ja, während `off` (der Standard) nein bedeutet.

## Beispiele

Der {{HTTPHeader("Vary")}} Header sorgt dafür, dass der Inhalt korrekt zwischengespeichert wird (zum Beispiel, um sicherzustellen, dass dem Benutzer nicht ein Bild niedrigerer Qualität aus dem Cache bereitgestellt wird, wenn der `Save-Data` Header nicht mehr vorhanden ist \[_z.B._ nach dem Wechsel von Mobilfunk zu Wi-Fi]).

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

- [Helfen Sie Ihren Benutzern Daten zu sparen - CSS Tricks](https://css-tricks.com/help-users-save-data/)
- [Bereitstellung schneller und leichter Anwendungen mit Save-Data - web.dev](https://web.dev/articles/optimizing-content-efficiency-save-data)
- {{HTTPHeader("Vary")}} Header, der darauf hinweist, dass der bereitgestellte Inhalt je nach Wert von `Save-Data` variiert (siehe [HTTP-Caching > Vary](/de/docs/Web/HTTP/Caching#vary))
- CSS @media Feature [`prefers-reduced-data`](/de/docs/Web/CSS/@media/prefers-reduced-data) {{experimental_inline}}
- [Verbesserung der Benutzer-Privatsphäre und der Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- [`NetworkInformation.saveData`](/de/docs/Web/API/NetworkInformation/saveData)
