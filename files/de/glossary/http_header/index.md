---
title: HTTP-Header
slug: Glossary/HTTP_header
l10n:
  sourceCommit: 9231a7046973685f4600e1891fa644ecce41ef3b
---

{{GlossarySidebar}}

Ein **HTTP-Header** ist ein Feld einer HTTP-Anfrage oder -Antwort, das zusätzlichen Kontext und Metadaten über die Anfrage oder Antwort übermittelt. Zum Beispiel kann eine Anfragenachricht Header verwenden, um ihre bevorzugten Medienformate anzugeben, während eine Antwort Header verwenden kann, um das Medienformat des zurückgegebenen Inhalts anzugeben. Header sind nicht case-sensitiv, beginnen am Anfang einer Zeile und werden sofort von einem `':'` und einem vom Header abhängigen Wert gefolgt. Der Wert endet beim nächsten CRLF oder am Ende der Nachricht.

Die HTTP- und Fetch-Spezifikationen beziehen sich auf eine Reihe von Header-Kategorien, darunter:

- {{Glossary("Request header")}}: Header, die mehr Informationen über die abzurufende Ressource oder den Client selbst enthalten.
- {{Glossary("Response header")}}: Header mit zusätzlichen Informationen über die Antwort, wie deren Standort oder über den Server selbst (Name, Version, …).
- {{Glossary("Representation header")}}: Metadaten über die Ressource im Nachrichtentext (z.B. Kodierung, Medientyp, etc.).
- {{Glossary("Fetch metadata request header")}}: Header mit Metadaten über die Ressource im Nachrichtentext (z.B. Kodierung, Medientyp, etc.).

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
> Ältere Versionen der Spezifikation verwiesen auf:
>
> - {{Glossary("General header")}}: Header, die sowohl für Anfragen als auch Antworten gelten, aber keinen Bezug zu den letztendlich im Text übertragenen Daten haben.
> - {{Glossary("Entity header")}}: Header, die mehr Informationen über den Körper der Entität enthalten, wie ihre Inhaltslänge oder ihren MIME-Typ (dies ist eine Obermenge dessen, was jetzt als Repräsentationsmetadaten-Header bezeichnet wird)

## Siehe auch

- [Liste aller HTTP-Header](/de/docs/Web/HTTP/Headers)
- Syntax der [Header](https://datatracker.ietf.org/doc/html/rfc7230#section-3.2) in der HTTP-Spezifikation
- Verwandte Glossar-Begriffe:
  - {{Glossary("Request header")}}
  - {{Glossary("Response header")}}
  - {{Glossary("Representation header")}}
  - {{Glossary("Fetch metadata request header")}}
  - {{Glossary("Forbidden header name")}}
  - {{Glossary("Forbidden response header name")}}
  - {{Glossary("CORS-safelisted request header")}}
  - {{Glossary("CORS-safelisted response header")}}
