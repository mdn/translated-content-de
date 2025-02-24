---
title: Content-DPR
slug: Web/HTTP/Headers/Content-DPR
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}{{deprecated_header}}{{securecontext_header}}{{Non-standard_header}}

Der HTTP **`Content-DPR`** {{Glossary("response_header", "Response-Header")}} wird verwendet, um das _Bild_-Geräte-zu-Pixel-Verhältnis (DPR) in Anfragen zu bestätigen, bei denen der Bildschirm-{{HTTPHeader("DPR")}} Client-Hinweis verwendet wurde, um eine Bildressource auszuwählen.

> [!NOTE]
> Der `Content-DPR`-Header wurde aus der Client-Hinweis-Spezifikation im [draft-ietf-httpbis-client-hints-07](https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-client-hints-07) entfernt.
> Die [Responsive Image Client Hints](https://wicg.github.io/responsive-image-client-hints/)-Spezifikation schlägt vor, diesen Header zu ersetzen, indem die intrinsische Auflösung/Dimensionen im EXIF-Metadaten spezifiziert werden.

Wenn der `DPR`-Client-Hinweis zur Auswahl eines Bildes verwendet wird, muss der Server `Content-DPR` in der Antwort angeben.
Wenn der Wert in `Content-DPR` von dem {{HTTPHeader("DPR")}} Wert in der Anfrage abweicht (d. h., die Bild-DPR ist nicht dieselbe wie die Bildschirm-DPR), muss der Client `Content-DPR` verwenden, um die intrinsische Bildgröße zu bestimmen und das Bild zu skalieren.

Wenn der `Content-DPR`-Header mehrmals in einer Nachricht erscheint, wird das letzte Vorkommen verwendet.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Response_header", "Response-Header")}},
        <a href="/de/docs/Web/HTTP/Client_hints">Client-Hinweis</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrage-Header")}}</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_response_header", "CORS-safelisted Response-Header")}}
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
  - : Das Bild-Geräte-Pixel-Verhältnis, berechnet nach der folgenden Formel:
    Content-DPR = _Ausgewählte Bildressourcengröße_ / (_Breite_ / _DPR_)

## Beispiele

Siehe das Beispiel des [`DPR`](/de/docs/Web/HTTP/Headers/DPR#examples) Headers.

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
- [Verbesserung der Benutzerfreundlichkeit und der Entwicklererfahrung mit User-Agent-Client-Hinweisen](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) auf developer.chrome.com (2020)
