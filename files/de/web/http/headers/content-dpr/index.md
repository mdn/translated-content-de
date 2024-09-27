---
title: Content-DPR
slug: Web/HTTP/Headers/Content-DPR
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}{{deprecated_header}}{{securecontext_header}}{{Non-standard_header}}

Der **`Content-DPR`** Antwort-Header wird verwendet, um das _Bild_ Verhältnis von Gerät zu Pixel in Anfragen zu bestätigen, bei denen der Bildschirm-{{HTTPHeader("DPR")}} [Client Hint](/de/docs/Web/HTTP/Client_hints) genutzt wurde, um eine Bildressource auszuwählen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        [Antwort-Header](/de/docs/Glossary/Response_header),
        <a href="/de/docs/Web/HTTP/Client_hints">Client Hint</a>
      </td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Header-Name](/de/docs/Glossary/Forbidden_header_name)</th>
      <td>nein</td>
    </tr>
    <tr>
      <th scope="row">
        [CORS-gesicherte Antwort-Header](/de/docs/Glossary/CORS-safelisted_response_header)
      </th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

Wenn der {{HTTPHeader("DPR")}} Client Hint verwendet wird, um ein Bild auszuwählen, muss der Server `Content-DPR` in der Antwort angeben. Wenn der Wert in `Content-DPR` anders ist als der {{HTTPHeader("DPR")}} Wert in der Anfrage (d.h. Bild-DPR ist nicht dasselbe wie Bildschirm-DPR), muss der Client `Content-DPR` verwenden, um die intrinsische Bildgröße zu bestimmen und das Bild zu skalieren.

Wenn der `Content-DPR` Header mehr als einmal in einer Nachricht erscheint, wird das letzte Vorkommen verwendet.

> **Note:** `Content-DPR` wurde aus der Client Hints Spezifikation in [draft-ietf-httpbis-client-hints-07](https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-client-hints-07) entfernt. Die [Responsive Image Client Hints](https://wicg.github.io/responsive-image-client-hints/) Spezifikation schlägt vor, diesen Header durch die Angabe der intrinsischen Auflösung/Dimensionen in EXIF-Metadaten zu ersetzen.

## Syntax

```http
Content-DPR: <number>
```

## Direktiven

- `<number>`
  - : Das Verhältnis von Gerät zu Pixel des Bildes, berechnet nach der folgenden Formel:
    Content-DPR = _Ausgewählte Bildressourcengröße_ / (_Breite_ / _DPR_)

## Beispiele

Siehe das [`DPR`](/de/docs/Web/HTTP/Headers/DPR#examples) Header-Beispiel.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verbesserung der Benutzer-Privatsphäre und der Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- Geräte Client Hints

  - {{HTTPHeader("Device-Memory")}}
  - {{HTTPHeader("DPR")}}
  - {{HTTPHeader("Viewport-Width")}}
  - {{HTTPHeader("Width")}}

- {{HTTPHeader("Accept-CH")}}
- [HTTP Caching > Vary](/de/docs/Web/HTTP/Caching#vary) und {{HTTPHeader("Vary")}}
