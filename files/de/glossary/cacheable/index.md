---
title: Cacheable
slug: Glossary/Cacheable
l10n:
  sourceCommit: 35d631c3a3f4050344ffb8c1bf033137943c10b6
---

{{GlossarySidebar}}

Eine **cacheable** Antwort ist eine HTTP-Antwort, die zwischengespeichert werden kann. Das bedeutet, dass sie gespeichert wird, um später abgerufen und verwendet zu werden, was eine neue Anfrage an den Server spart. Nicht alle HTTP-Antworten können zwischengespeichert werden; dies sind die Voraussetzungen, damit eine HTTP-Antwort cacheable ist:

- Die in der Anfrage verwendete Methode ist _cacheable_, das heißt entweder eine {{HTTPMethod("GET")}}- oder eine {{HTTPMethod("HEAD")}}-Methode. Eine Antwort auf eine {{HTTPMethod("POST")}}- oder {{HTTPMethod("PATCH")}}-Anfrage kann ebenfalls zwischengespeichert werden, wenn die Frische angezeigt wird und der {{HTTPHeader("Content-Location")}}-Header gesetzt ist, dies wird jedoch selten implementiert. Zum Beispiel unterstützt Firefox dies nicht ([Firefox Fehler 109553](https://bugzil.la/109553)). Andere Methoden wie {{HTTPMethod("PUT")}} oder {{HTTPMethod("DELETE")}} sind nicht cacheable und deren Ergebnisse können nicht zwischengespeichert werden.
- Der Statuscode der Antwort ist der Anwendungszwischenspeicherung _bekannt_ und _cacheable_. Die folgenden Statuscodes sind cacheable: {{HTTPStatus("200")}}, {{HTTPStatus("203")}}, {{HTTPStatus("204")}}, {{HTTPStatus("206")}}, {{HTTPStatus("300")}}, {{HTTPStatus("301")}}, {{HTTPStatus("404")}}, {{HTTPStatus("405")}}, {{HTTPStatus("410")}}, {{HTTPStatus("414")}}, und {{HTTPStatus("501")}}.
- Es gibt keine spezifischen Header in der Antwort, wie {{HTTPHeader("Cache-Control")}}, mit Werten, die das Zwischenspeichern verhindern würden.

Beachten Sie, dass einige Anfragen mit nicht cacheable Antworten an eine bestimmte URI zuvor zwischengespeicherte Antworten von derselben URI ungültig machen können. Zum Beispiel wird eine {{HTTPMethod("PUT")}}-Anfrage an `/pageX.html` alle zwischengespeicherten Antworten auf {{HTTPMethod("GET")}}- oder {{HTTPMethod("HEAD")}}-Anfragen an `/pageX.html` ungültig machen.

Wenn sowohl die Methode der Anfrage als auch der Status der Antwort cacheable sind, kann die Antwort auf die Anfrage zwischengespeichert werden:

```http
GET /pageX.html HTTP/1.1
(…)

200 OK
(…)
```

Die Antwort auf eine {{HTTPMethod("PUT")}}-Anfrage kann nicht zwischengespeichert werden. Darüber hinaus macht es zwischengespeicherte Daten für Anfragen an dieselbe URI mit {{HTTPMethod("HEAD")}}- oder {{HTTPMethod("GET")}}-Methoden ungültig:

```http
PUT /pageX.html HTTP/1.1
(…)

200 OK
(…)
```

Das Vorhandensein des {{HTTPHeader("Cache-Control")}}-Headers mit einem bestimmten Wert in der Antwort kann das Zwischenspeichern verhindern:

```http
GET /pageX.html HTTP/1.1
(…)

200 OK
Cache-Control: no-cache
(…)
```

## Siehe auch

- Details zu [Methoden und Zwischenspeicherung](https://httpwg.org/specs/rfc9110.html#rfc.section.9.2.3) sind in der HTTP-Spezifikation enthalten.
- Beschreibung gängiger cacheable Methoden: {{HTTPMethod("GET")}}, {{HTTPMethod("HEAD")}}
- Beschreibung gängiger nicht cacheable Methoden: {{HTTPMethod("PUT")}}, {{HTTPMethod("DELETE")}}, oft {{HTTPMethod("POST")}}
