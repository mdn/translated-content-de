---
title: Content-DPR
slug: Web/HTTP/Headers/Content-DPR
l10n:
  sourceCommit: 92b03e46cef6be37de60799363e3e33e3415b491
---

{{HTTPSidebar}}{{deprecated_header}}{{securecontext_header}}{{Non-standard_header}}

Der HTTP **`Content-DPR`** {{Glossary("response_header", "Antwort-Header")}} wird verwendet, um das _Bild_ Geräte-zu-Pixel-Verhältnis (DPR) in Anfragen zu bestätigen, bei denen der Bildschirm {{HTTPHeader("DPR")}} Client-Hinweis verwendet wurde, um eine Bildressource auszuwählen.

> [!NOTE]
> Der `Content-DPR` Header wurde aus der Client-Hints-Spezifikation in [draft-ietf-httpbis-client-hints-07](https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-client-hints-07) entfernt.
> Die [Responsive Image Client Hints](https://wicg.github.io/responsive-image-client-hints/) Spezifikation schlägt vor, diesen Header zu ersetzen, indem die intrinsische Auflösung/Dimensionen in EXIF-Metadaten spezifiziert werden.

Wenn der `DPR` Client-Hinweis verwendet wird, um ein Bild auszuwählen, muss der Server `Content-DPR` in der Antwort angeben.
Wenn der Wert in `Content-DPR` von dem im {{HTTPHeader("DPR")}} Anfrage-Header abweicht (d.h. Bild-DPR ist nicht gleich Bildschirm-DPR), muss der Client `Content-DPR` verwenden, um die intrinsische Bildgröße zu bestimmen und das Bild zu skalieren.

Wenn der `Content-DPR` Header mehrmals in einer Nachricht erscheint, wird das letzte Vorkommen verwendet.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Response_header", "Antwort-Header")}},
        <a href="/de/docs/Web/HTTP/Client_hints">Client-Hinweis</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_response_header", "CORS-gesicherter Antwort-Header")}}
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
  - : Das Geräte-Pixel-Verhältnis des Bildes, berechnet nach der folgenden Formel:
    Content-DPR = _Größe der ausgewählten Bildressource_ / (_Breite_ / _DPR_)

## Beispiele

Siehe das [`DPR`](/de/docs/Web/HTTP/Headers/DPR#examples) Header-Beispiel.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Geräte-Client-Hinweise
  - {{HTTPHeader("Device-Memory")}}
  - {{HTTPHeader("DPR")}}
  - {{HTTPHeader("Viewport-Width")}}
  - {{HTTPHeader("Width")}}
- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching: Vary](/de/docs/Web/HTTP/Caching#vary) und {{HTTPHeader("Vary")}}
- [Verbesserung der Benutzerprivatsphäre und Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) auf developer.chrome.com (2020)
