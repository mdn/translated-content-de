---
title: Cacheable
slug: Glossary/Cacheable
l10n:
  sourceCommit: 35d631c3a3f4050344ffb8c1bf033137943c10b6
---

{{GlossarySidebar}}

Eine **cacheable** Antwort ist eine HTTP-Antwort, die zwischengespeichert werden kann, das heißt, sie wird gespeichert, um später abgerufen und verwendet zu werden, sodass eine neue Anfrage an den Server vermieden wird. Nicht alle HTTP-Antworten können zwischengespeichert werden; dies sind die Bedingungen, damit eine HTTP-Antwort cacheable ist:

- Die im Request verwendete Methode ist _cacheable_, das heißt, entweder eine {{HTTPMethod("GET")}}- oder eine {{HTTPMethod("HEAD")}}-Methode. Eine Antwort auf eine {{HTTPMethod("POST")}}- oder {{HTTPMethod("PATCH")}}-Anfrage kann ebenfalls zwischengespeichert werden, wenn Frische angegeben ist und der {{HTTPHeader("Content-Location")}}-Header gesetzt ist. Dies wird jedoch selten implementiert. Zum Beispiel unterstützt Firefox dies nicht ([Firefox-Bug 109553](https://bugzil.la/109553)). Andere Methoden wie {{HTTPMethod("PUT")}} oder {{HTTPMethod("DELETE")}} sind nicht cacheable und ihr Ergebnis kann nicht zwischengespeichert werden.
- Der Statuscode der Antwort ist der Anwendung, die cached, _bekannt_ und _cacheable_. Die folgenden Statuscodes sind cacheable: {{HTTPStatus("200")}}, {{HTTPStatus("203")}}, {{HTTPStatus("204")}}, {{HTTPStatus("206")}}, {{HTTPStatus("300")}}, {{HTTPStatus("301")}}, {{HTTPStatus("404")}}, {{HTTPStatus("405")}}, {{HTTPStatus("410")}}, {{HTTPStatus("414")}}, und {{HTTPStatus("501")}}.
- Es gibt keine spezifischen Header in der Antwort, wie {{HTTPHeader("Cache-Control")}}, mit Werten, die das Caching verbieten würden.

Beachten Sie, dass einige Anfragen mit nicht-cachebaren Antworten an eine bestimmte URI zuvor zwischengespeicherte Antworten von derselben URI ungültig machen können. Zum Beispiel macht ein {{HTTPMethod("PUT")}} zu `/pageX.html` alle zwischengespeicherten Antworten auf {{HTTPMethod("GET")}}- oder {{HTTPMethod("HEAD")}}-Anfragen zu `/pageX.html` ungültig.

Wenn sowohl die Methode der Anfrage als auch der Status der Antwort cacheable sind, kann die Antwort auf die Anfrage zwischengespeichert werden:

```http
GET /pageX.html HTTP/1.1
(…)

200 OK
(…)
```

Die Antwort auf eine {{HTTPMethod("PUT")}}-Anfrage kann nicht zwischengespeichert werden. Darüber hinaus macht sie zwischengespeicherte Daten für Anfragen zu derselben URI mit den Methoden {{HTTPMethod("HEAD")}} oder {{HTTPMethod("GET")}} ungültig:

```http
PUT /pageX.html HTTP/1.1
(…)

200 OK
(…)
```

Das Vorhandensein des {{HTTPHeader("Cache-Control")}}-Headers mit einem bestimmten Wert in der Antwort kann das Caching verhindern:

```http
GET /pageX.html HTTP/1.1
(…)

200 OK
Cache-Control: no-cache
(…)
```

## Siehe auch

- Details über [Methoden und Caching](https://httpwg.org/specs/rfc9110.html#rfc.section.9.2.3) finden Sie in der HTTP-Spezifikation.
- Beschreibung der gängigen cacheable Methoden: {{HTTPMethod("GET")}}, {{HTTPMethod("HEAD")}}
- Beschreibung der gängigen nicht-cacheable Methoden: {{HTTPMethod("PUT")}}, {{HTTPMethod("DELETE")}}, oft {{HTTPMethod("POST")}}