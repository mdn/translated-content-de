---
title: Content-DPR header
short-title: Content-DPR
slug: Web/HTTP/Reference/Headers/Content-DPR
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}{{deprecated_header}}{{securecontext_header}}{{Non-standard_header}}

Der HTTP-**`Content-DPR`**-{{Glossary("response_header", "Antwortheader")}} wird verwendet, um das _Bild_-Geräte-zu-Pixel-Verhältnis (DPR) in Anfragen zu bestätigen, bei denen der Bildschirm-{{HTTPHeader("DPR")}}-Client-Hinweis verwendet wurde, um eine Bildressource auszuwählen.

> [!NOTE]
> Der `Content-DPR`-Header wurde aus der Client-Hints-Spezifikation in [draft-ietf-httpbis-client-hints-07](https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-client-hints-07) entfernt.
> Die [Responsive Image Client Hints](https://wicg.github.io/responsive-image-client-hints/)-Spezifikation schlägt vor, diesen Header durch die Angabe von intrinsischer Auflösung/Dimensionen in EXIF-Metadaten zu ersetzen.

Wenn der `DPR`-Client-Hinweis verwendet wird, um ein Bild auszuwählen, muss der Server `Content-DPR` in der Antwort angeben.
Wenn der Wert in `Content-DPR` sich vom {{HTTPHeader("DPR")}}-Wert in der Anfrage unterscheidet (d.h. Bild-DPR entspricht nicht Bildschirm-DPR), muss der Client `Content-DPR` verwenden, um die intrinsische Bildgröße zu bestimmen und das Bild zu skalieren.

Erscheint der `Content-DPR`-Header mehrmals in einer Nachricht, wird das letzte Vorkommen verwendet.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Response_header", "Antwortheader")}},
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
Content-DPR: <number>
```

## Direktiven

- `<number>`
  - : Das Bild-Geräte-Pixel-Verhältnis, berechnet nach der folgenden Formel:
    Content-DPR = _Gewählte Bildressourcengröße_ / (_Breite_ / _DPR_)

## Beispiele

Siehe das [`DPR`](/de/docs/Web/HTTP/Reference/Headers/DPR#examples)-Header-Beispiel.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Geräte-Client-Hinweise
  - {{HTTPHeader("Device-Memory")}}
  - {{HTTPHeader("DPR")}}
  - {{HTTPHeader("Viewport-Width")}}
  - {{HTTPHeader("Width")}}
- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching: Vary](/de/docs/Web/HTTP/Guides/Caching#vary) und {{HTTPHeader("Vary")}}
- [Verbesserung der Privatsphäre der Nutzer und der Entwicklererfahrung mit User-Agent-Client-Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) auf developer.chrome.com (2020)
