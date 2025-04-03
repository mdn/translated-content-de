---
title: HTTP-Header
slug: Glossary/HTTP_header
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{GlossarySidebar}}

Ein **HTTP-Header** ist ein Feld eines HTTP-Anfrage- oder Antwortpakets, das zusätzlichen Kontext und Metadaten über die Anfrage oder Antwort übermittelt. Ein Anfragepaket kann beispielsweise Header verwenden, um seine bevorzugten Medienformate anzugeben, während eine Antwort einen Header verwenden kann, um das Medienformat des zurückgegebenen Inhalts anzugeben. Header sind nicht case-sensitiv, beginnen am Zeilenanfang und werden unmittelbar von einem `':'` und einem wertabhängigen Wert gefolgt. Der Wert endet am nächsten CRLF oder am Ende der Nachricht.

Die HTTP- und Fetch-Spezifikationen beziehen sich auf eine Reihe von Header-Kategorien, einschließlich:

- {{Glossary("Request_header", "Anfrage-Header")}}: Header, die mehr Informationen über die abzurufende Ressource oder über den Client selbst enthalten.
- {{Glossary("Response_header", "Antwort-Header")}}: Header mit zusätzlichen Informationen über die Antwort, wie deren Standort oder über den Server selbst (Name, Version, …).
- {{Glossary("Representation_header", "Repräsentations-Header")}}: Metadaten über die Ressource im Nachrichtenkörper (z.B. Codierung, Medientyp, etc.).
- {{Glossary("Fetch_metadata_request_header", "Fetch-Metadaten-Anfrage-Header")}}: Header mit Metadaten über die Ressource im Nachrichtenkörper (z.B. Codierung, Medientyp, etc.).

Eine einfache Anfrage mit einem Header:

```http
GET /example.html HTTP/1.1
Host: example.com
```

Weiterleitungen haben obligatorische Header ({{HTTPHeader("Location")}}):

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
> - {{Glossary("General_header", "Allgemeiner Header")}}: Header, die sowohl für Anfragen als auch Antworten gelten, jedoch keinen Bezug zu den letztlich im Körper übertragenen Daten haben.
> - {{Glossary("Entity_header", "Entitäts-Header")}}: Header, die mehr Informationen über den Körper der Entität enthalten, wie deren Inhaltslänge oder ihren MIME-Typ (dies ist eine Obermenge dessen, was jetzt als Repräsentations-Metadaten-Header bezeichnet wird)

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
  - {{Glossary("CORS-safelisted_request_header", "CORS-sichere Anfrage-Header")}}
  - {{Glossary("CORS-safelisted_response_header", "CORS-sichere Antwort-Header")}}
