---
title: HTTP-Header
slug: Glossary/HTTP_header
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{GlossarySidebar}}

Ein **HTTP-Header** ist ein Feld einer HTTP-Anfrage oder -Antwort, das zusätzlichen Kontext und Metadaten über die Anfrage oder Antwort übermittelt. Beispielsweise kann eine Anfragenachricht Header verwenden, um ihre bevorzugten Medienformate anzugeben, während eine Antwort Header verwenden kann, um das Medienformat des zurückgegebenen Inhalts anzugeben. Header sind nicht case-sensitiv, beginnen am Anfang einer Zeile und werden sofort von einem `':'` und einem vom Header abhängigen Wert gefolgt. Der Wert endet beim nächsten CRLF oder am Ende der Nachricht.

Die HTTP- und Fetch-Spezifikationen beziehen sich auf eine Reihe von Header-Kategorien, einschließlich:

- {{Glossary("Request_header", "Anfrage-Header")}}: Header, die mehr Informationen über die zu holende Ressource oder über den Client selbst enthalten.
- {{Glossary("Response_header", "Antwort-Header")}}: Header mit zusätzlichen Informationen über die Antwort, wie ihren Standort oder über den Server selbst (Name, Version, …).
- {{Glossary("Representation_header", "Repräsentations-Header")}}: Metadaten über die Ressource im Nachrichtenkörper (z.B. Kodierung, Medientyp, etc.).
- {{Glossary("Fetch_metadata_request_header", "Fetch-Metadaten-Anfrage-Header")}}: Header mit Metadaten über die Ressource im Nachrichtenkörper (z.B. Kodierung, Medientyp, etc.).

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
> - {{Glossary("General_header", "Allgemeiner Header")}}: Header, die auf sowohl Anfragen als auch Antworten zutreffen, jedoch keinen Bezug zu den letztlich im Körper übertragenen Daten haben.
> - {{Glossary("Entity_header", "Entitäts-Header")}}: Header, die mehr Informationen über den Körper der Entität enthalten, wie zum Beispiel ihre Inhaltslänge oder ihren MIME-Typ (dies ist eine Obermenge dessen, was jetzt als Repräsentations-Metadaten-Header bezeichnet wird)

## Siehe auch

- [Liste aller HTTP-Header](/de/docs/Web/HTTP/Reference/Headers)
- Syntax von [Headern](https://datatracker.ietf.org/doc/html/rfc7230#section-3.2) in der HTTP-Spezifikation
- Verwandte Glossarbegriffe:
  - {{Glossary("Request_header", "Anfrage-Header")}}
  - {{Glossary("Response_header", "Antwort-Header")}}
  - {{Glossary("Representation_header", "Repräsentations-Header")}}
  - {{Glossary("Fetch_metadata_request_header", "Fetch-Metadaten-Anfrage-Header")}}
  - {{Glossary("Forbidden_request_header", "Verbotener Anfrage-Header")}}
  - {{Glossary("Forbidden_response_header_name", "Verbotener Antwort-Header-Name")}}
  - {{Glossary("CORS-safelisted_request_header", "CORS-zuverlässiger Anfrage-Header")}}
  - {{Glossary("CORS-safelisted_response_header", "CORS-zuverlässiger Antwort-Header")}}
