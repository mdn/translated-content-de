---
title: HTTP header
slug: Glossary/HTTP_header
l10n:
  sourceCommit: 9231a7046973685f4600e1891fa644ecce41ef3b
---

{{GlossarySidebar}}

Ein **HTTP-Header** ist ein Feld einer HTTP-Anfrage oder -Antwort, das zusätzlichen Kontext und Metadaten über die Anfrage oder Antwort übermittelt. Zum Beispiel kann eine Anfragenachricht Header verwenden, um die bevorzugten Medienformate anzugeben, während eine Antwort Header verwenden kann, um das Medienformat des zurückgegebenen Inhalts anzugeben. Header sind nicht case-sensitiv, beginnen am Anfang einer Zeile und werden sofort durch einen `':'` und einen header-abhängigen Wert gefolgt. Der Wert endet beim nächsten CRLF oder am Ende der Nachricht.

Die HTTP- und Fetch-Spezifikationen beziehen sich auf eine Reihe von Header-Kategorien, einschließlich:

- {{Glossary("Request_header", "Request header")}}: Header, die mehr Informationen über die abzurufende Ressource oder über den Client selbst enthalten.
- {{Glossary("Response_header", "Response header")}}: Header mit zusätzlichen Informationen über die Antwort, wie deren Standort oder über den Server selbst (Name, Version, …).
- {{Glossary("Representation_header", "Representation header")}}: Metadaten über die Ressource im Nachrichteninhalt (z.B. Kodierung, Medientyp, etc.).
- {{Glossary("Fetch_metadata_request_header", "Fetch metadata request header")}}: Header mit Metadaten über die Ressource im Nachrichteninhalt (z.B. Kodierung, Medientyp, etc.).

Eine grundlegende Anfrage mit einem Header:

```http
GET /example.html HTTP/1.1
Host: example.com
```

Umleitungen haben obligatorische Header ({{HTTPHeader("Location")}}):

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
> - {{Glossary("General_header", "General header")}}: Header, die sowohl für Anfragen als auch für Antworten gelten, aber ohne Bezug zu den schließlich im Inhalt übermittelten Daten.
> - {{Glossary("Entity_header", "Entity header")}}: Header, die mehr Informationen über den Inhalt der Entität enthalten, wie deren Inhaltslänge oder deren MIME-Typ (dies ist eine Obermenge dessen, was jetzt als Repräsentationsmetadaten-Header bezeichnet wird)

## Siehe auch

- [Liste aller HTTP-Header](/de/docs/Web/HTTP/Headers)
- Syntax von [Headern](https://datatracker.ietf.org/doc/html/rfc7230#section-3.2) in der HTTP-Spezifikation
- Verwandte Glossarbegriffe:
  - {{Glossary("Request_header", "Request header")}}
  - {{Glossary("Response_header", "Response header")}}
  - {{Glossary("Representation_header", "Representation header")}}
  - {{Glossary("Fetch_metadata_request_header", "Fetch metadata request header")}}
  - {{Glossary("Forbidden_header_name", "Forbidden header name")}}
  - {{Glossary("Forbidden_response_header_name", "Forbidden response header name")}}
  - {{Glossary("CORS-safelisted_request_header", "CORS-safelisted request header")}}
  - {{Glossary("CORS-safelisted_response_header", "CORS-safelisted response header")}}
