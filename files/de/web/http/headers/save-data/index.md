---
title: Save-Data
slug: Web/HTTP/Headers/Save-Data
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}{{SeeCompatTable}}

Das **`Save-Data`** [Netzwerk-Client-Hinweis](/de/docs/Web/HTTP/Client_hints#network_client_hints) Anforderungsheader-Feld ist ein boolescher Wert, der die Präferenz des Clients für eine reduzierte Datennutzung angibt. Dies könnte aus Gründen wie hohe Übertragungskosten, langsame Verbindungsgeschwindigkeit usw. sein.

**`Save-Data`** ist ein [Hinweis mit niedriger Entropie](/de/docs/Web/HTTP/Client_hints#low_entropy_hints) und kann daher vom Client gesendet werden, auch wenn dies nicht vom Server mit einem {{HTTPHeader("Accept-CH")}} Antwort-Header angefordert wurde. Außerdem sollte es verwendet werden, um die an den Client gesendeten Daten zu reduzieren, unabhängig von den Werten anderer Client-Hinweise, die die Netzwerkfähigkeit anzeigen, wie {{HTTPHeader("Downlink")}} und {{HTTPHeader("RTT")}}.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        [Anforderungsheader](/de/docs/Glossary/Request_header),
        <a href="/de/docs/Web/HTTP/Client_hints">Client-Hinweis</a>
      </td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Header-Name](/de/docs/Glossary/Forbidden_header_name)</th>
      <td>nein</td>
    </tr>
    <tr>
      <th scope="row">
        [CORS-gesafelisteter Antwort-Header](/de/docs/Glossary/CORS-safelisted_response_header)
      </th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

Ein Wert von `On` zeigt die ausdrückliche Benutzerzustimmung für einen reduzierten Datennutzungsmodus auf dem Client an und ermöglicht es Ursprüngen, alternative Inhalte bereitzustellen, um die heruntergeladenen Daten zu reduzieren, wie z.B. kleinere Bild- und Videoressourcen, unterschiedliche Markup- und Stilgestaltungen, deaktiviertes Polling und automatische Updates usw.

> [!NOTE]
> Das Deaktivieren von HTTP/2 Server Push ({{RFC("7540", "Server Push", "8.2")}}) könnte ebenfalls wünschenswert sein, um Daten-Downloads zu reduzieren.

## Syntax

```http
Save-Data: <sd-token>
```

## Direktiven

- `<sd-token>`
  - : Ein Wert, der angibt, ob der Client in einen reduzierten Datennutzungsmodus wechseln möchte.
    `on` bedeutet ja, während `off` (der Standard) nein bedeutet.

## Beispiele

Der {{HTTPHeader("Vary")}} Header stellt sicher, dass der Inhalt ordnungsgemäß zwischengespeichert wird (z.B. um sicherzustellen, dass dem Benutzer nicht ein qualitativ minderwertiges Bild aus dem Cache angeboten wird, wenn der `Save-Data` Header nicht mehr vorhanden ist \[_z.B._ nach einem Wechsel von Mobilfunk zu WLAN]).

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

- [Helfen Sie Ihren Nutzern, Daten zu sparen - CSS Tricks](https://css-tricks.com/help-users-save-data/)
- [Schnelle und leichte Anwendungen mit Save-Data bereitstellen - web.dev](https://web.dev/articles/optimizing-content-efficiency-save-data)
- Der {{HTTPHeader("Vary")}} Header, der anzeigt, dass der bereitgestellte Inhalt abhängig vom Wert von `Save-Data` variiert (siehe [HTTP-Caching > Vary](/de/docs/Web/HTTP/Caching#vary))
- CSS @media Feature [`prefers-reduced-data`](/de/docs/Web/CSS/@media/prefers-reduced-data) {{experimental_inline}}
- [Verbesserung der Benutzerprivatsphäre und Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- [`NetworkInformation.saveData`](/de/docs/Web/API/NetworkInformation/saveData)
