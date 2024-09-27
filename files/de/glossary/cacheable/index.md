---
title: Cacheable
slug: Glossary/Cacheable
l10n:
  sourceCommit: 35d631c3a3f4050344ffb8c1bf033137943c10b6
---

{{GlossarySidebar}}

Eine **cacheable** Antwort ist eine HTTP-Antwort, die zwischengespeichert werden kann, also gespeichert, um später abgerufen und verwendet zu werden, wodurch eine neue Anfrage an den Server eingespart wird. Nicht alle HTTP-Antworten können zwischengespeichert werden; dies sind die Bedingungen, die eine HTTP-Antwort erfüllen muss, um zwischengespeichert werden zu können:

- Die Methode, die in der Anfrage verwendet wird, ist _cacheable_, also entweder eine {{HTTPMethod("GET")}} oder eine {{HTTPMethod("HEAD")}} Methode. Eine Antwort auf eine {{HTTPMethod("POST")}} oder {{HTTPMethod("PATCH")}} Anfrage kann auch zwischengespeichert werden, wenn die Frische angezeigt wird und der {{HTTPHeader("Content-Location")}} Header gesetzt ist, aber dies wird selten implementiert. Zum Beispiel unterstützt Firefox dies nicht ([Firefox bug 109553](https://bugzil.la/109553)). Andere Methoden, wie {{HTTPMethod("PUT")}} oder {{HTTPMethod("DELETE")}}, sind nicht cacheable und ihr Ergebnis kann nicht zwischengespeichert werden.
- Der Statuscode der Antwort ist der caching Anwendung _bekannt_ und ist _cacheable_. Die folgenden Statuscodes sind cacheable: {{HTTPStatus("200")}}, {{HTTPStatus("203")}}, {{HTTPStatus("204")}}, {{HTTPStatus("206")}}, {{HTTPStatus("300")}}, {{HTTPStatus("301")}}, {{HTTPStatus("404")}}, {{HTTPStatus("405")}}, {{HTTPStatus("410")}}, {{HTTPStatus("414")}} und {{HTTPStatus("501")}}.
- Es gibt keine spezifischen Header in der Antwort, wie {{HTTPHeader("Cache-Control")}}, mit Werten, die Caching verbieten würden.

Beachten Sie, dass einige Anfragen mit nicht-cacheable Antworten an eine spezifische URI zuvor zwischengespeicherte Antworten von der gleichen URI ungültig machen können. Beispielsweise wird eine {{HTTPMethod("PUT")}} Anfrage an `/pageX.html` alle zwischengespeicherten Antworten auf {{HTTPMethod("GET")}} oder {{HTTPMethod("HEAD")}} Anfragen an `/pageX.html` ungültig machen.

Wenn sowohl die Methode der Anfrage als auch der Status der Antwort cacheable sind, kann die Antwort auf die Anfrage zwischengespeichert werden:

```http
GET /pageX.html HTTP/1.1
(…)

200 OK
(…)
```

Die Antwort auf eine {{HTTPMethod("PUT")}} Anfrage kann nicht zwischengespeichert werden. Darüber hinaus macht sie zwischengespeicherte Daten für Anfragen an dieselbe URI mit {{HTTPMethod("HEAD")}} oder {{HTTPMethod("GET")}} Methoden ungültig:

```http
PUT /pageX.html HTTP/1.1
(…)

200 OK
(…)
```

Das Vorhandensein des {{HTTPHeader("Cache-Control")}} Headers mit einem bestimmten Wert in der Antwort kann das Caching verhindern:

```http
GET /pageX.html HTTP/1.1
(…)

200 OK
Cache-Control: no-cache
(…)
```

## Siehe auch

- Details zu [Methoden und Caching](https://httpwg.org/specs/rfc9110.html#rfc.section.9.2.3) sind in der HTTP-Spezifikation enthalten.
- Beschreibung von häufig cacheable Methoden: {{HTTPMethod("GET")}}, {{HTTPMethod("HEAD")}}
- Beschreibung von häufig nicht-cacheable Methoden: {{HTTPMethod("PUT")}}, {{HTTPMethod("DELETE")}}, oft {{HTTPMethod("POST")}}
