---
title: HTTP Content
slug: Glossary/HTTP_Content
l10n:
  sourceCommit: ae86913908651e6008079242691e06b5e01d1c78
---

{{GlossarySidebar}}

In HTTP-Nachrichten beschreibt der **Inhalt** die "Informationen", die im Nachrichtentext übermittelt werden (welcher auf die Kopfzeilen folgt), nachdem jegliche Nachrichtenrahmung durch die Chunked Transfer Codierung von HTTP/1.1 entfernt wurde. In HTTP/1.1 wurde dies als "Payload" bezeichnet, aber der Nachrichten-"Inhalt" unterscheidet sich von Frame-Payloads in HTTP/2 und HTTP/3, wo die Daten in einem einzelnen Frame Header-Daten, Körper-Daten oder andere Steuerinformationen sein können.

Das Ziel des Nachrichteninhalts in HTTP-Anfragen und -Antworten hängt von der Anfragemethode und dem Antwortstatuscode ab. Zum Beispiel repräsentiert in einer {{HTTPMethod("PUT")}}-Anfrage der Inhalt den gewünschten Zustand der Ressource, während es in einer {{HTTPMethod("POST")}}-Anfrage Informationen sind, die verarbeitet werden sollen. Eine {{HTTPStatus("200", "200 OK")}}-Antwort auf eine {{HTTPMethod("GET")}}-Anfrage zeigt den aktuellen Zustand der Ressource, während eine Fehlerantwort den Fehler beschreibt.

Einige Antworten, wie beispielsweise auf {{HTTPMethod("HEAD")}}-Anfragen oder bei {{HTTPStatus("204", "204 No Content")}}- und {{HTTPStatus("204", "304 Not Modified")}}-Statuscodes, enthalten überhaupt keinen Inhalt.

Im folgenden HTTP/1.1-Antwort, enthält der Nachrichtentext den Inhalt `Mozilla Developer Network`:

```http
HTTP/1.1 200 OK
Content-Type: text/plain

Mozilla Developer Network
```

In der nächsten HTTP/1.1-Antwort kodiert Transfer-Encoding die Daten in Blöcken. Der Inhalt ist schließlich immer noch `Mozilla Developer Network`, aber der Nachrichtentext enthält unterschiedliche Nachrichtendaten, um die Blöcke zu separieren:

```http
HTTP/1.1 200 OK
Content-Type: text/plain
Transfer-Encoding: chunked

7\r\n
Mozilla\r\n
9\r\n
Developer\r\n
7\r\n
Network\r\n
0\r\n
\r\n
```

## Siehe auch

- {{HTTPHeader("Content-Location")}}
- {{HTTPStatus("413", "413 Content Too Large")}}
- [Content header](/de/docs/Glossary/Content_header)
- [RFC 9110, Abschnitt 6.4: Content](https://httpwg.org/specs/rfc9110.html#rfc.section.6.4) (ersetzt [RFC 7231](https://datatracker.ietf.org/doc/html/rfc7231#section-3.3) Payload Semantics)
  - [Änderungen von RFC 7231](https://httpwg.org/specs/rfc9110.html#changes.from.rfc.7231)
