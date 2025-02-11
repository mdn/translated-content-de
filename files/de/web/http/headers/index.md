---
title: HTTP-Header
short-title: Headers
slug: Web/HTTP/Headers
l10n:
  sourceCommit: a7444882eb1b18918f3c924d83eb3c78f245643a
---

{{HTTPSidebar}}

**HTTP-Header** ermöglichen es dem Client und dem Server, zusätzliche Informationen mit einer Nachricht in einer Anfrage oder Antwort zu übermitteln.
In HTTP/1.X ist ein Header ein nicht fallunterscheidender Name, gefolgt von einem Doppelpunkt, dann optionalem Leerraum, der ignoriert wird, und schließlich dessen Wert (zum Beispiel: `Allow: POST`).
In HTTP/2 und darüber hinaus werden Header in Kleinbuchstaben dargestellt, wenn sie in den Entwicklertools angezeigt werden (`accept: */*`), und eine spezielle Gruppe von [Pseudo-Headern](/de/docs/Web/HTTP/Messages#pseudo-headers) wird mit einem Doppelpunkt präfixiert (`:status: 200`).
Sie finden weitere Informationen zur Syntax in jeder Protokollversion auf der Seite [HTTP-Nachrichten](/de/docs/Web/HTTP/Messages).

Historisch wurden proprietäre benutzerdefinierte Header mit einem `X-`-Präfix versehen, aber diese Konvention wurde 2012 aufgrund der Unpraktikabilität bei der Standardisierung nicht standardmäßiger Felder gemäß [RFC 6648](https://datatracker.ietf.org/doc/html/rfc6648) veraltet; andere sind im [IANA HTTP-Feldnamens-Register](https://www.iana.org/assignments/http-fields/http-fields.xhtml) aufgeführt, deren ursprünglicher Inhalt in [RFC 4229](https://datatracker.ietf.org/doc/html/rfc4229) definiert wurde.
Das IANA-Register listet Header auf, einschließlich [Informationen über deren Status](https://github.com/protocol-registries/http-fields?tab=readme-ov-file#choosing-the-right-status).

Header können entsprechend ihrem Kontext gruppiert werden:

- {{Glossary("Request_header", "Anfrage-Header")}}
  - : Enthalten zusätzliche Informationen über die Ressource, die abgerufen werden soll, oder über den Client, der die Ressource anfordert.
- {{Glossary("Response_header", "Antwort-Header")}}
  - : Enthalten zusätzliche Informationen über die Antwort, wie etwa ihren Standort oder den Server, der sie bereitstellt.
- {{Glossary("Representation_header", "Repräsentations-Header")}}
  - : Enthalten Informationen über den Body der Ressource, wie dessen [MIME-Typ](/de/docs/Web/HTTP/MIME_types) oder angewandte Kodierung/Kompression.
- {{Glossary("Payload_header", "Nutzdaten-Header")}}
  - : Enthalten repräsentationsunabhängige Informationen über Nutzdaten, einschließlich der Inhaltslänge und der für die Übertragung verwendeten Kodierung.

Header können auch basierend darauf gruppiert werden, wie {{Glossary("Proxy_server", "Proxies")}} sie verarbeiten:

- End-to-End-Header
  - : Diese Header _müssen_ an den endgültigen Empfänger der Nachricht übermittelt werden: den Server für eine Anfrage oder den Client für eine Antwort. Zwischengeschaltete Proxies müssen diese Header unverändert weiterleiten, und Caches müssen sie speichern.
- Hop-by-Hop-Header
  - : Diese Header sind nur für eine einzelne Transportebene-Verbindung von Bedeutung und _dürfen nicht_ von Proxies weitergeleitet oder zwischengespeichert werden. Beachten Sie, dass nur Hop-by-Hop-Header durch den {{httpheader("Connection")}}-Header gesetzt werden dürfen.

## Authentifizierung

- {{HTTPHeader("WWW-Authenticate")}}
  - : Definiert die Authentifizierungsmethode, die benötigt wird, um auf eine Ressource zuzugreifen.
- {{HTTPHeader("Authorization")}}
  - : Enthält die Anmeldeinformationen, um einen Benutzer-Agent beim Server zu authentifizieren.
- {{HTTPHeader("Proxy-Authenticate")}}
  - : Definiert die Authentifizierungsmethode, die benötigt wird, um auf eine Ressource hinter einem Proxy-Server zuzugreifen.
- {{HTTPHeader("Proxy-Authorization")}}
  - : Enthält die Anmeldeinformationen, um einen Benutzer-Agent bei einem Proxy-Server zu authentifizieren.

## Caching

- {{HTTPHeader("Age")}}
  - : Die Zeit in Sekunden, die das Objekt bereits in einem Proxy-Cache ist.
- {{HTTPHeader("Cache-Control")}}
  - : Direktiven für Caching-Mechanismen in sowohl Anfragen als auch Antworten.
- {{HTTPHeader("Clear-Site-Data")}}
  - : Löscht Browser-Daten (z. B. Cookies, Speicher, Cache), die der anfragenden Website zugeordnet sind.
- {{HTTPHeader("Expires")}}
  - : Das Datum/die Uhrzeit, nach der die Antwort als veraltet betrachtet wird.
- {{HTTPHeader("No-Vary-Search")}} {{experimental_inline}}
  - : Gibt eine Reihe von Regeln an, die definieren, wie die Abfrageparameter einer URL die Cache-Übereinstimmung beeinflussen. Diese Regeln bestimmen, ob dieselbe URL mit unterschiedlichen URL-Parametern als separate Einträge im Browser-Cache gespeichert werden sollte.

## Bedingte Header

- {{HTTPHeader("Last-Modified")}}
  - : Das letzte Änderungsdatum der Ressource, das verwendet wird, um mehrere Versionen derselben Ressource zu vergleichen. Es ist weniger genau als {{HTTPHeader("ETag")}}, aber in manchen Umgebungen leichter zu berechnen. Bedingte Anfragen, die {{HTTPHeader("If-Modified-Since")}} und {{HTTPHeader("If-Unmodified-Since")}} verwenden, nutzen diesen Wert, um das Verhalten der Anfrage zu ändern.
- {{HTTPHeader("ETag")}}
  - : Ein eindeutiger String, der die Version der Ressource identifiziert. Bedingte Anfragen, die {{HTTPHeader("If-Match")}} und {{HTTPHeader("If-None-Match")}} verwenden, nutzen diesen Wert, um das Verhalten der Anfrage zu ändern.

...

Sollen die anderen Einträge auch übersetzt werden, oder soll hier ein bestimmter Fokus gesetzt werden?
