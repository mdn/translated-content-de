---
title: HTTP-Header
slug: Glossary/HTTP_header
l10n:
  sourceCommit: d212f70edcac07927902d76d39eec86765ab063b
---

Ein **HTTP-Header** ist ein Feld einer HTTP-Anfrage oder -Antwort, das zusätzlichen Kontext und Metadaten über die Anfrage oder Antwort übermittelt. Zum Beispiel kann eine Anfragenachricht Header verwenden, um ihre bevorzugten Medienformate anzugeben, während eine Antwort Header verwenden kann, um das Medienformat des zurückgegebenen Inhalts anzugeben. Header sind nicht case-sensitiv, beginnen am Anfang einer Zeile und werden sofort von einem `':'` und einem headerabhängigen Wert gefolgt. Der Wert endet beim nächsten CRLF oder am Ende der Nachricht.

Die HTTP- und Fetch-Spezifikationen beziehen sich auf eine Reihe von Header-Kategorien, einschließlich:

- {{Glossary("Request_header", "Request header")}}: Header, die weitere Informationen über die abzurufende Ressource oder über den Client selbst enthalten.
- {{Glossary("Response_header", "Response header")}}: Header mit zusätzlichen Informationen über die Antwort, wie deren Ort oder über den Server selbst (Name, Version, …).
- {{Glossary("Representation_header", "Representation header")}}: Metadaten über die Ressource im Nachrichteninhalt (z. B. Kodierung, Medientyp usw.).
- {{Glossary("Fetch_metadata_request_header", "Fetch metadata request header")}}: Header mit Metadaten über die Ressource im Nachrichteninhalt (z. B. Kodierung, Medientyp usw.).

Eine grundlegende Anfrage mit einem Header:

```http
GET /example.html HTTP/1.1
Host: example.com
```

Weiterleitungen haben zwingende Header ({{HTTPHeader("Location")}}):

```http
302 Found
Location: /NewPage.html
```

Ein typisches Set von Headern:

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
> - {{Glossary("General_header", "General header")}}: Header, die sowohl für Anfragen als auch für Antworten gelten, aber keine Beziehung zu den schließlich im Inhalt übermittelten Daten haben.
> - {{Glossary("Entity_header", "Entity header")}}: Header, die weitere Informationen über den Inhalt der Entität enthalten, wie deren Inhaltlänge oder ihren MIME-Typ (dies ist eine Obermenge dessen, was jetzt als Repräsentations-Metadaten-Header bezeichnet wird)

## Siehe auch

- [Liste aller HTTP-Header](/de/docs/Web/HTTP/Reference/Headers)
- Syntax von [Headern](https://datatracker.ietf.org/doc/html/rfc7230#section-3.2) in der HTTP-Spezifikation
- Verwandte Glossarbegriffe:
  - {{Glossary("Request_header", "Request header")}}
  - {{Glossary("Response_header", "Response header")}}
  - {{Glossary("Representation_header", "Representation header")}}
  - {{Glossary("Fetch_metadata_request_header", "Fetch metadata request header")}}
  - {{Glossary("Forbidden_request_header", "Forbidden request header")}}
  - {{Glossary("Forbidden_response_header_name", "Forbidden response header name")}}
  - {{Glossary("CORS-safelisted_request_header", "CORS-safelisted request header")}}
  - {{Glossary("CORS-safelisted_response_header", "CORS-safelisted response header")}}
