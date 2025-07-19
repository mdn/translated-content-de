---
title: HTTP-Inhalt
slug: Glossary/HTTP_Content
l10n:
  sourceCommit: 13839b2979cc244034ffb1fe243240778b0cd23f
---

In HTTP-Nachrichten beschreibt der **Inhalt** die im Nachrichtentext übermittelten 'Informationen' (die der Kopfzeilen-Sektion folgen), nachdem jegliche Nachrichtenstrukturierung durch HTTP/1.1 Chunked Transfer Encoding entfernt wurde.
Dies wurde in HTTP/1.1 als "Payload" bezeichnet, aber der Nachrichten-"Inhalt" unterscheidet sich von den Rahmenpayloads in HTTP/2 und HTTP/3, wo die Daten in einem einzelnen Frame entweder Header-Daten, Body-Daten oder andere Steuerungsinformationen sein könnten.

Der Zweck des Nachrichteninhalts in HTTP-Anfragen und -Antworten hängt von der Anfragemethode und dem Antwortstatuscode ab.
Zum Beispiel repräsentiert im Falle einer {{HTTPMethod("PUT")}}-Anfrage der Inhalt den gewünschten Zustand der Ressource, während bei einer {{HTTPMethod("POST")}}-Anfrage Informationen zur Verarbeitung vorliegen.
Eine {{HTTPStatus("200", "200 OK")}}-Antwort auf eine {{HTTPMethod("GET")}}-Anfrage zeigt den aktuellen Zustand der Ressource, während eine Fehlermeldung den Fehler beschreibt.

Einige Antworten, wie diejenigen zu {{HTTPMethod("HEAD")}}-Anfragen oder {{HTTPStatus("204", "204 No Content")}} und {{HTTPStatus("204", "304 Not Modified")}} Statuscodes, enthalten überhaupt keinen Inhalt.

In der folgenden HTTP/1.1-Antwort enthält der Nachrichtentext den Inhalt `Mozilla Developer Network`:

```http
HTTP/1.1 200 OK
Content-Type: text/plain

Mozilla Developer Network
```

In der nächsten HTTP/1.1-Antwort wird die Datenübertragung in Chunks kodiert.
Am Ende ist der Inhalt immer noch `Mozilla Developer Network`, aber der Nachrichtentext enthält unterschiedliche Nachrichtendaten, um die Chunks voneinander zu trennen:

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
- {{Glossary("Content_header", "Content-Header")}}
- [RFC 9110, Abschnitt 6.4: Inhalt](https://httpwg.org/specs/rfc9110.html#rfc.section.6.4) (ersetzt [RFC 7231](https://datatracker.ietf.org/doc/html/rfc7231#section-3.3) Payload-Semantik)
  - [Änderungen gegenüber RFC 7231](https://httpwg.org/specs/rfc9110.html#changes.from.rfc.7231)
