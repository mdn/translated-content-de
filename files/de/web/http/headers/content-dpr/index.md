---
title: Content-DPR
slug: Web/HTTP/Headers/Content-DPR
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}{{deprecated_header}}{{securecontext_header}}{{Non-standard_header}}

Der **`Content-DPR`** Antwortheader wird verwendet, um das _Bild_-Geräte-zu-Pixel-Verhältnis in Anfragen zu bestätigen, bei denen der Bildschirm {{HTTPHeader("DPR")}} [Client-Hint](/de/docs/Web/HTTP/Client_hints) genutzt wurde, um eine Bildressource auszuwählen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Response header")}},
        <a href="/de/docs/Web/HTTP/Client_hints">Client-Hint</a>
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

Wenn der {{HTTPHeader("DPR")}} Client-Hint verwendet wird, um ein Bild auszuwählen, muss der Server `Content-DPR` in der Antwort angeben. Wenn der Wert in `Content-DPR` sich von dem {{HTTPHeader("DPR")}} Wert in der Anfrage unterscheidet (d.h. Bild-DPR ist nicht dasselbe wie Bildschirm-DPR), muss der Client `Content-DPR` zur Bestimmung der intrinsischen Bildgröße und zur Skalierung des Bildes verwenden.

Wenn der `Content-DPR` Header mehr als einmal in einer Nachricht erscheint, wird das letzte Vorkommen verwendet.

> **Note:** `Content-DPR` wurde aus der Client-Hints-Spezifikation in [draft-ietf-httpbis-client-hints-07](https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-client-hints-07) entfernt. Die [Responsive Image Client Hints](https://wicg.github.io/responsive-image-client-hints/) Spezifikation schlägt vor, diesen Header zu ersetzen, indem intrinsische Auflösung/Dimensionen in EXIF-Metadaten angegeben werden.

## Syntax

```http
Content-DPR: <number>
```

## Direktiven

- `<number>`
  - : Das Geräte-zu-Bild-Pixel-Verhältnis, berechnet nach der folgenden Formel:
    Content-DPR = _Ausgewählte Bildressourcengröße_ / (_Breite_ / _DPR_)

## Beispiele

Siehe das Beispiel des [`DPR`](/de/docs/Web/HTTP/Headers/DPR#examples) Headers.

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Verbesserung von Benutzerdatenschutz und Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- Geräte-Client-Hints

  - {{HTTPHeader("Device-Memory")}}
  - {{HTTPHeader("DPR")}}
  - {{HTTPHeader("Viewport-Width")}}
  - {{HTTPHeader("Width")}}

- {{HTTPHeader("Accept-CH")}}
- [HTTP Caching > Vary](/de/docs/Web/HTTP/Caching#vary) und {{HTTPHeader("Vary")}}
