---
title: Save-Data
slug: Web/HTTP/Headers/Save-Data
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}{{SeeCompatTable}}

Das **`Save-Data`** [Netzwerk-Client-Hinweis](/de/docs/Web/HTTP/Client_hints#network_client_hints) Request-Header-Feld ist ein boolescher Wert, der die Präferenz des Clients für eine reduzierte Datennutzung angibt. Dies könnte aus Gründen wie hohen Übertragungskosten, langsamen Verbindungszeiten usw. sein.

**`Save-Data`** ist ein [niedrig-Entropie-Hinweis](/de/docs/Web/HTTP/Client_hints#low_entropy_hints), und kann daher vom Client gesendet werden, auch wenn dies nicht vom Server mit einem {{HTTPHeader("Accept-CH")}} Response-Header angefordert wurde. Darüber hinaus sollte es verwendet werden, um die an den Client gesendeten Daten zu reduzieren, unabhängig von den Werten anderer Client-Hinweise, die die Netzwerkfähigkeit anzeigen, wie {{HTTPHeader("Downlink")}} und {{HTTPHeader("RTT")}}.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request header")}},
        <a href="/de/docs/Web/HTTP/Client_hints">Client-Hinweis</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>nein</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted response header")}}
      </th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

Ein Wert von `On` zeigt an, dass der Benutzer explizit zustimmt, den Modus zur reduzierten Datennutzung auf dem Client zu aktivieren. Wenn dies an Ursprünge kommuniziert wird, ermöglicht es ihnen, alternative Inhalte zu liefern, um die heruntergeladenen Daten zu reduzieren, wie kleinere Bild- und Videoressourcen, unterschiedliche Markup- und Stildesigns, deaktiviertes Polling und automatische Updates usw.

> [!NOTE]
> Das Deaktivieren von HTTP/2 Server Push ({{RFC("7540", "Server Push", "8.2")}}) könnte ebenfalls wünschenswert sein, um Daten-Downloads zu reduzieren.

## Syntax

```http
Save-Data: <sd-token>
```

## Direktiven

- `<sd-token>`
  - : Ein Wert, der angibt, ob der Client in den Modus der reduzierten Datennutzung einwilligen möchte. `on` bedeutet ja, während `off` (die Standardeinstellung) nein bedeutet.

## Beispiele

Der {{HTTPHeader("Vary")}} Header stellt sicher, dass der Inhalt ordnungsgemäß zwischengespeichert wird (um beispielsweise sicherzustellen, dass dem Benutzer nicht ein Bild niedrigerer Qualität aus dem Cache serviert wird, wenn der `Save-Data` Header nicht mehr vorhanden ist [_z.B._ nach einem Wechsel von Mobilfunknetz auf WLAN]).

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
- {{HTTPHeader("Vary")}} Header, der darauf hinweist, dass der ausgelieferte Inhalt je nach Wert von `Save-Data` variiert (siehe [HTTP Caching > Vary](/de/docs/Web/HTTP/Caching#vary))
- CSS @media Feature [`prefers-reduced-data`](/de/docs/Web/CSS/@media/prefers-reduced-data) {{experimental_inline}}
- [Improving user privacy and developer experience with User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- {{domxref("NetworkInformation.saveData")}}
