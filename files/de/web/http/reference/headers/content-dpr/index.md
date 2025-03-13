---
title: Content-DPR
slug: Web/HTTP/Reference/Headers/Content-DPR
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}{{deprecated_header}}{{securecontext_header}}{{Non-standard_header}}

Der HTTP **`Content-DPR`** {{Glossary("response_header", "Antwort-Header")}} wird verwendet, um das \_Bild_geräte-zu-Pixel-Verhältnis (DPR) in Anfragen zu bestätigen, bei denen der Bildschirm-{{HTTPHeader("DPR")}} Client-Hinweis verwendet wurde, um eine Bildressource auszuwählen.

> [!NOTE]
> Der `Content-DPR`-Header wurde aus der Client-Hinweis-Spezifikation in [draft-ietf-httpbis-client-hints-07](https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-client-hints-07) entfernt.
> Die [Responsive Image Client Hints](https://wicg.github.io/responsive-image-client-hints/)-Spezifikation schlägt vor, diesen Header zu ersetzen, indem die intrinsische Auflösung/Dimensionen in EXIF-Metadaten angegeben werden.

Wenn der `DPR` Client-Hinweis verwendet wird, um ein Bild auszuwählen, muss der Server `Content-DPR` in der Antwort angeben.
Wenn der Wert in `Content-DPR` von dem {{HTTPHeader("DPR")}}-Wert in der Anfrage abweicht (d. h., das Bild-DPR ist nicht das gleiche wie das Bildschirm-DPR), muss der Client das `Content-DPR` für die Bestimmung der intrinsischen Bildgröße und Skalierung des Bildes verwenden.

Wenn der `Content-DPR`-Header mehr als einmal in einer Nachricht erscheint, wird das letzte Vorkommen verwendet.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Response_header", "Antwort-Header")}},
        <a href="/de/docs/Web/HTTP/Guides/Client_hints">Client-Hinweis</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrage-Header")}}</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_response_header", "CORS-sichere Antwort-Header-Liste")}}
      </th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Content-DPR: <number>
```

## Direktiven

- `<number>`
  - : Das Geräte-Pixel-Verhältnis, berechnet gemäß der folgenden Formel:
    Content-DPR = _Gewählte Bildressourcengröße_ / (_Breite_ / _DPR_)

## Beispiele

Siehe das Beispiel des [`DPR`](/de/docs/Web/HTTP/Reference/Headers/DPR#examples) Headers.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Geräte-Client-Hinweise
  - {{HTTPHeader("Device-Memory")}}
  - {{HTTPHeader("DPR")}}
  - {{HTTPHeader("Viewport-Width")}}
  - {{HTTPHeader("Width")}}
- {{HTTPHeader("Accept-CH")}}
- [HTTP Caching: Vary](/de/docs/Web/HTTP/Guides/Caching#vary) und {{HTTPHeader("Vary")}}
- [Verbesserung des Datenschutzes der Benutzer und der Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) auf developer.chrome.com (2020)
