---
title: Accept
slug: Web/HTTP/Headers/Accept
l10n:
  sourceCommit: f341bd4728d3448faf6b9fc3b45980c35c067f25
---

{{HTTPSidebar}}

Der HTTP **`Accept`** {{Glossary("request_header", "Anforderungs")}}- und {{Glossary("response_header", "Antwort-Header")}} gibt an, welche Inhaltstypen, ausgedrückt als [MIME-Typen](/de/docs/Web/HTTP/MIME_types), der Absender verstehen kann.
Bei Anfragen verwendet der Server die [Inhaltsaushandlung](/de/docs/Web/HTTP/Content_negotiation), um einen der Vorschläge auszuwählen und informiert den Client über die Wahl mit dem {{HTTPHeader("Content-Type")}} Antwort-Header.
Bei Antworten liefert er Informationen darüber, welche Inhaltstypen der Server in Nachrichten zur angeforderten Ressource verstehen kann, sodass der Inhaltstyp in nachfolgenden Anfragen an die Ressource verwendet werden kann.

Browser setzen erforderliche Werte für diesen Header basierend auf dem Kontext der Anfrage.
Zum Beispiel verwendet ein Browser unterschiedliche Werte in einer Anfrage beim Abrufen eines CSS-Stylesheets, Bildes, Videos oder Skripts.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>{{Glossary("Request_header", "Anforderungs-Header")}},
      {{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_request_header", "CORS-safelisted Anforderungs-Header")}}
      </th>
      <td>
        Ja*
      </td>
    </tr>
  </tbody>
</table>

\* Werte können keine [CORS-unsicheren Anforderungs-Header-Bytes](https://fetch.spec.whatwg.org/#cors-unsafe-request-header-byte) enthalten, einschließlich `"():<>?@[\]{},`, Delete `0x7F`, und Steuerzeichen `0x00` bis `0x19`, außer Tab `0x09`.

## Syntax

```http
Accept: <media-type>/<MIME_subtype>
Accept: <media-type>/*
Accept: */*

// Multiple types, weighted with the quality value syntax
Accept: text/html, application/xhtml+xml, application/xml;q=0.9, image/webp, */*;q=0.8
```

## Direktiven

- `<media-type>/<subtype>`
  - : Ein einzelner, präziser [Medientyp](/de/docs/Web/HTTP/MIME_types), wie `text/html`.
- `<media-type>/*`
  - : Ein Medientyp ohne Untertyp.
    Zum Beispiel entspricht `image/*` `image/png`, `image/svg`, `image/gif`, und anderen Bildtypen.
- `*/*`
  - : Jeder Medientyp.
- `;q=` (q-Faktor Gewichtung)
  - : Ein Wert in Reihenfolge der Präferenz, ausgedrückt durch einen relativen {{Glossary("quality_values", "Qualitätswert")}}, genannt _Gewicht_.

## Beispiele

### Verwendung von Standard-Accept-Anforderungs-Headern

HTTP-Anfragen mittels Befehlszeilenwerkzeugen wie [curl](https://curl.se/) und [wget](https://www.gnu.org/software/wget/) verwenden `*/*` als Standardwert für `Accept`:

```http
GET / HTTP/1.1
Host: example.com
User-Agent: curl/8.7.1
Accept: */*
```

Die Navigation im Browser hat typischerweise den folgenden `Accept`-Anforderungs-Header-Wert:

```http
GET /en-US/ HTTP/2
Host: developer.mozilla.org
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
…
```

Nach dem Empfang des Dokuments sehen die Standard-`Accept`-Werte in Anfragen für Bilder auf dem `developer.mozilla.org` Beispiel so aus:

```http
Accept: image/avif,image/webp,image/png,image/svg+xml,image/*;q=0.8,*/*;q=0.5
```

### Konfiguration der Accept-Anforderungs-Header für JSON-Antworten

Systeme, die API-Interaktion beinhalten, fordern häufig `application/json`-Antworten an.
Hier ist ein Beispiel einer {{HTTPMethod("GET")}}-Anfrage, bei der der Client spezifisch eine JSON-Antwort anfordert:

```http
GET /users/123 HTTP/1.1
Host: example.com
Authorization: Bearer abcd123
Accept: application/json
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTTP [Inhaltsaushandlung](/de/docs/Web/HTTP/Content_negotiation)
- [Liste der Standard-Accept-Werte](/de/docs/Web/HTTP/Content_negotiation/List_of_default_Accept_values)
- {{Glossary("CORS-safelisted_request_header#additional_restrictions", "CORS-Safelist Anforderungs-Header-Beschränkungen")}}
- Ein Header mit dem Ergebnis der Inhaltsaushandlung: {{HTTPHeader("Content-Type")}}
- Andere ähnliche Header: {{HTTPHeader("TE")}}, {{HTTPHeader("Accept-Encoding")}}, {{HTTPHeader("Accept-Language")}}
