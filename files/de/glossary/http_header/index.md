---
title: HTTP-Header
slug: Glossary/HTTP_header
l10n:
  sourceCommit: e9cb9feda05ce0f1dc08aada71c0a2265baeeaff
---

Ein **HTTP-Header** ist ein Feld einer HTTP-Anfrage oder HTTP-Antwort, das zusätzlichen Kontext und Metadaten zur Anfrage oder Antwort übermittelt. Beispielsweise kann eine Anfrage mit Headern bevorzugte Medienformate angeben, während eine Antwort mit Headern das Medienformat des zurückgegebenen Bodys angeben kann. Bei Header-Namen wird nicht zwischen Groß- und Kleinschreibung unterschieden. Header beginnen am Anfang einer Zeile; auf ihren Namen folgen unmittelbar ein `':'` und ein vom jeweiligen Header abhängiger Wert. Der Wert endet beim nächsten CRLF oder am Ende der Nachricht.

Die HTTP- und Fetch-Spezifikationen unterscheiden mehrere Header-Kategorien, darunter:

- {{Glossary("Request_header", "Anfrage-Header")}}: Header mit weiteren Informationen über die abzurufende Ressource oder den Client selbst.
- {{Glossary("Response_header", "Antwort-Header")}}: Header mit zusätzlichen Informationen über die Antwort, etwa ihren Speicherort, oder über den Server selbst (Name, Version usw.).
- {{Glossary("Representation_header", "Repräsentations-Header")}}: Metadaten über die Ressource im Nachrichten-Body (z. B. Kodierung oder Medientyp).
- {{Glossary("Fetch_metadata_request_header", "Fetch-Metadaten-Anfrage-Header")}}: Header mit Informationen über den Kontext, in dem die Anfrage gestellt wird.

Eine einfache Anfrage mit einem Header:

```http
GET /example.html HTTP/1.1
Host: example.com
```

Weiterleitungen haben erforderliche Header ({{HTTPHeader("Location")}}):

```http
HTTP/1.1 302 Found
Location: /NewPage.html
```

Ein typischer Satz von Headern:

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
> Ältere Versionen der Spezifikation unterschieden:
>
> - {{Glossary("General_header", "Allgemeine Header")}}: Header, die sowohl für Anfragen als auch für Antworten gelten, aber keinen Bezug zu den Daten haben, die letztlich im Body übertragen werden.
> - {{Glossary("Entity_header", "Entity-Header")}}: Header mit weiteren Informationen über den Body der Entity, etwa seine Inhaltslänge oder seinen MIME-Typ (diese Kategorie umfasst auch die Header, die heute als Repräsentationsmetadaten-Header bezeichnet werden).

## Siehe auch

- [Liste aller HTTP-Header](/de/docs/Web/HTTP/Reference/Headers)
- Syntax von [Headern](https://datatracker.ietf.org/doc/html/rfc7230#section-3.2) in der HTTP-Spezifikation
- Verwandte Glossarbegriffe:
  - {{Glossary("Request_header", "Anfrage-Header")}}
  - {{Glossary("Response_header", "Antwort-Header")}}
  - {{Glossary("Representation_header", "Repräsentations-Header")}}
  - {{Glossary("Fetch_metadata_request_header", "Fetch-Metadaten-Anfrage-Header")}}
  - {{Glossary("Forbidden_request_header", "Verbotene Anfrage-Header")}}
  - {{Glossary("Forbidden_response_header_name", "Verbotene Antwort-Header-Namen")}}
  - {{Glossary("CORS-safelisted_request_header", "CORS-safelisted Anfrage-Header")}}
  - {{Glossary("CORS-safelisted_response_header", "CORS-safelisted Antwort-Header")}}
