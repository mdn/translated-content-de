---
title: HTTP-Header
slug: Glossary/HTTP_header
l10n:
  sourceCommit: 9231a7046973685f4600e1891fa644ecce41ef3b
---

{{GlossarySidebar}}

Ein **HTTP-Header** ist ein Feld einer HTTP-Anfrage oder -Antwort, das zusätzlichen Kontext und Metadaten über die Anfrage oder Antwort liefert. Beispielsweise kann eine Anfragenachricht Header verwenden, um bevorzugte Medienformate anzugeben, während eine Antwort Header verwenden kann, um das Medienformat des zurückgegebenen Inhalts anzugeben. Header sind nicht case-sensitiv, beginnen am Anfang einer Zeile und werden unmittelbar von einem `':'` und einem header-abhängigen Wert gefolgt. Der Wert endet beim nächsten CRLF oder am Ende der Nachricht.

Die HTTP- und Fetch-Spezifikationen beziehen sich auf eine Reihe von Header-Kategorien, einschließlich:

- [Anfrage-Header](/de/docs/Glossary/Request_header): Header, die mehr Informationen über die abzurufende Ressource oder über den Client selbst enthalten.
- [Antwort-Header](/de/docs/Glossary/Response_header): Header mit zusätzlichen Informationen zur Antwort, wie deren Standort oder Informationen über den Server selbst (Name, Version, …).
- [Darstellungs-Header](/de/docs/Glossary/Representation_header): Metadaten über die Ressource im Nachrichtenkörper (z. B. Kodierung, Medientyp, etc.).
- [Fetch-Metadaten-Anfrage-Header](/de/docs/Glossary/Fetch_metadata_request_header): Header mit Metadaten über die Ressource im Nachrichtenkörper (z. B. Kodierung, Medientyp, etc.).

Eine einfache Anfrage mit einem Header:

```http
GET /example.html HTTP/1.1
Host: example.com
```

Umleitungen haben verpflichtende Header ({{HTTPHeader("Location")}}):

```http
302 Found
Location: /NewPage.html
```

Ein typischer Satz von Headern:

```http
304 Not Modified
Access-Control-Allow-Origin: *
Age: 2318192
Cache-Control: public, max-age=315360000
Connection: keep-alive
Date: Mon, 18 Jul 2016 16:06:00 GMT
Server: Apache
Vary: Accept-Encoding
Via: 1.1 3dc30c7222755f86e824b93feb8b5b8c.cloudfront.net (CloudFront)
X-Amz-Cf-Id: TOl0FEm6uI4fgLdrKJx0Vao5hpkKGZULYN2TWD2gAWLtr7vlNjTvZw==
X-Backend-Server: developer6.webapp.scl3.mozilla.com
X-Cache: Hit from cloudfront
X-Cache-Info: cached
```

> [!NOTE]
> Ältere Versionen der Spezifikation bezogen sich auf:
>
> - [Allgemeiner Header](/de/docs/Glossary/General_header): Header, die sowohl für Anfragen als auch für Antworten gelten, jedoch ohne Bezug zu den letztlich im Körper übertragenen Daten.
> - [Entitäts-Header](/de/docs/Glossary/Entity_header): Header, die mehr Informationen über den Körper der Entität enthalten, wie z.B. deren Inhaltlänge oder MIME-Typ (dies ist eine Obermenge dessen, was jetzt als Darstellungs-Metadaten-Header bezeichnet wird).

## Siehe auch

- [Liste aller HTTP-Header](/de/docs/Web/HTTP/Headers)
- Syntax von [Headern](https://datatracker.ietf.org/doc/html/rfc7230#section-3.2) in der HTTP-Spezifikation
- Verwandte Glossarbegriffe:
  - [Anfrage-Header](/de/docs/Glossary/Request_header)
  - [Antwort-Header](/de/docs/Glossary/Response_header)
  - [Darstellungs-Header](/de/docs/Glossary/Representation_header)
  - [Fetch-Metadaten-Anfrage-Header](/de/docs/Glossary/Fetch_metadata_request_header)
  - [Verbotener Header-Name](/de/docs/Glossary/Forbidden_header_name)
  - [Verbotener Antwort-Header-Name](/de/docs/Glossary/Forbidden_response_header_name)
  - [CORS-zugelassener Anfrage-Header](/de/docs/Glossary/CORS-safelisted_request_header)
  - [CORS-zugelassener Antwort-Header](/de/docs/Glossary/CORS-safelisted_response_header)
