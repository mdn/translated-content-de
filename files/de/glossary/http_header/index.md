---
title: HTTP-Header
slug: Glossary/HTTP_header
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{GlossarySidebar}}

Ein **HTTP-Header** ist ein Feld einer HTTP-Anfrage oder -Antwort, das zusätzlichen Kontext und Metadaten über die Anfrage oder Antwort übermittelt. Eine Anfragenachricht kann zum Beispiel Header verwenden, um ihre bevorzugten Medienformate anzugeben, während eine Antwort einen Header verwenden kann, um das Medienformat des zurückgegebenen Inhalts anzugeben. Header sind nicht groß-/kleinschreibungssensitiv, beginnen am Anfang einer Zeile und werden direkt von einem `':'` und einem headerabhängigen Wert gefolgt. Der Wert endet beim nächsten CRLF oder am Ende der Nachricht.

Die HTTP- und Fetch-Spezifikationen beziehen sich auf eine Reihe von Header-Kategorien, einschließlich:

- {{Glossary("Request_header", "Request header")}}: Header, die mehr Informationen über die abzurufende Ressource oder über den Client selbst enthalten.
- {{Glossary("Response_header", "Response header")}}: Header mit zusätzlichen Informationen über die Antwort, wie z.B. deren Standort oder über den Server selbst (Name, Version, …).
- {{Glossary("Representation_header", "Representation header")}}: Metadaten über die Ressource im Nachrichtenkörper (z.B. Kodierung, Medientyp, etc.).
- {{Glossary("Fetch_metadata_request_header", "Fetch metadata request header")}}: Header mit Metadaten über die Ressource im Nachrichtenkörper (z.B. Kodierung, Medientyp, etc.).

Eine grundlegende Anfrage mit einem Header:

```http
GET /example.html HTTP/1.1
Host: example.com
```

Umleitungen haben Pflichtheader ({{HTTPHeader("Location")}}):

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
> - {{Glossary("General_header", "General header")}}: Header, die sowohl für Anfragen als auch für Antworten gelten, aber keinerlei Bezug zu den schließlich im Körper übertragenen Daten haben.
> - {{Glossary("Entity_header", "Entity header")}}: Header, die mehr Informationen über den Körper der Entität enthalten, wie z.B. deren Inhaltslänge oder deren MIME-Typ (dies ist eine Obermenge dessen, was jetzt als Representation-Metadaten-Header bezeichnet wird).

## Siehe auch

- [Liste aller HTTP-Header](/de/docs/Web/HTTP/Headers)
- Syntax der [Header](https://datatracker.ietf.org/doc/html/rfc7230#section-3.2) in der HTTP-Spezifikation
- Verwandte Glossareinträge:
  - {{Glossary("Request_header", "Request header")}}
  - {{Glossary("Response_header", "Response header")}}
  - {{Glossary("Representation_header", "Representation header")}}
  - {{Glossary("Fetch_metadata_request_header", "Fetch metadata request header")}}
  - {{Glossary("Forbidden_request_header", "Forbidden request header")}}
  - {{Glossary("Forbidden_response_header_name", "Forbidden response header name")}}
  - {{Glossary("CORS-safelisted_request_header", "CORS-safelisted request header")}}
  - {{Glossary("CORS-safelisted_response_header", "CORS-safelisted response header")}}
