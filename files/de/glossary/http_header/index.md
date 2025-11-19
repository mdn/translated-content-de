---
title: HTTP-Header
slug: Glossary/HTTP_header
l10n:
  sourceCommit: bd348e521463e3d0d0bdc4c91d35c1de82a0f5c3
---

Ein **HTTP-Header** ist ein Feld in einer HTTP-Anfrage oder -Antwort, das zusätzlichen Kontext und Metadaten zur Anfrage oder Antwort übermittelt. Beispielsweise kann eine Anfragenachricht Header verwenden, um ihre bevorzugten Medienformate anzugeben, während eine Antwort einen Header verwenden kann, um das Medienformat des zurückgegebenen Inhalts anzugeben. Header sind nicht groß-/kleinschreibungssensitiv, beginnen am Anfang einer Zeile und werden sofort von einem `':'` und einem wertabhängigen Header-Wert gefolgt. Der Wert endet beim nächsten CRLF oder am Ende der Nachricht.

Die HTTP- und Fetch-Spezifikationen beziehen sich auf eine Anzahl von Header-Kategorien, einschließlich:

- {{Glossary("Request_header", "Anfrage-Header")}}: Header, die mehr Informationen über die abzurufende Ressource oder über den Client selbst enthalten.
- {{Glossary("Response_header", "Antwort-Header")}}: Header mit zusätzlichen Informationen über die Antwort, wie deren Standort oder über den Server selbst (Name, Version, …).
- {{Glossary("Representation_header", "Repräsentations-Header")}}: Metadaten über die Ressource im Nachrichtenkörper (z. B. Kodierung, Medientyp, etc.).
- {{Glossary("Fetch_metadata_request_header", "Fetch-Metadaten-Anfrage-Header")}}: Header mit Metadaten über die Ressource im Nachrichtenkörper (z. B. Kodierung, Medientyp, etc.).

Eine einfache Anfrage mit einem Header:

```http
GET /example.html HTTP/1.1
Host: example.com
```

Umleitungen haben zwingende Header ({{HTTPHeader("Location")}}):

```http
HTTP/1.1 302 Found
Location: /NewPage.html
```

Ein typisches Set von Headern:

```http
HTTP/1.1 304 Not Modified
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
> - {{Glossary("General_header", "Allgemeiner Header")}}: Header, die sowohl auf Anfragen als auch auf Antworten angewendet werden, aber keinen Bezug zu den letztendlich im Körper übermittelten Daten haben.
> - {{Glossary("Entity_header", "Entitäts-Header")}}: Header, die mehr Informationen über den Körper der Entität enthalten, wie dessen Inhaltlänge oder dessen MIME-Typ (dies ist eine Übermenge dessen, was jetzt als Repräsentations-Metadaten-Header bezeichnet wird).

## Siehe auch

- [Liste aller HTTP-Header](/de/docs/Web/HTTP/Reference/Headers)
- Syntax der [Header](https://datatracker.ietf.org/doc/html/rfc7230#section-3.2) in der HTTP-Spezifikation
- Verwandte Glossarbegriffe:
  - {{Glossary("Request_header", "Anfrage-Header")}}
  - {{Glossary("Response_header", "Antwort-Header")}}
  - {{Glossary("Representation_header", "Repräsentations-Header")}}
  - {{Glossary("Fetch_metadata_request_header", "Fetch-Metadaten-Anfrage-Header")}}
  - {{Glossary("Forbidden_request_header", "Verbotener Anfrage-Header")}}
  - {{Glossary("Forbidden_response_header_name", "Verbotener Antwort-Header-Name")}}
  - {{Glossary("CORS-safelisted_request_header", "CORS-safe-list-Anfrage-Header")}}
  - {{Glossary("CORS-safelisted_response_header", "CORS-safe-list-Antwort-Header")}}
