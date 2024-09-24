---
title: HTTP-Inhalt
slug: Glossary/HTTP_Content
l10n:
  sourceCommit: ae86913908651e6008079242691e06b5e01d1c78
---

{{GlossarySidebar}}

In HTTP-Nachrichten beschreibt der **Inhalt** die im Nachrichtenkörper übermittelte 'Information' (die nach dem Kopfbereich folgt), nachdem jegliche Nachrichtenrahmung durch HTTP/1.1 Chunked Transfer Encoding entfernt wurde.
Dies wurde in HTTP/1.1 als "Payload" bezeichnet, aber "Inhalt" unterscheidet sich von Frame-Payloads in HTTP/2 und HTTP/3, bei denen die Daten in einem einzelnen Frame Header-Daten, Körper-Daten oder andere Steuerinformationen sein könnten.

Der Zweck des Nachrichteninhalts in HTTP-Anfragen und -Antworten hängt von der Anfragemethode und dem Antwortstatuscode ab.
Zum Beispiel repräsentiert der Inhalt in einer {{HTTPMethod("PUT")}}-Anfrage den gewünschten Zustand der Ressource, während er in einer {{HTTPMethod("POST")}}-Anfrage Informationen zur Verarbeitung sind.
Eine {{HTTPStatus("200", "200 OK")}}-Antwort auf eine {{HTTPMethod("GET")}}-Anfrage zeigt den aktuellen Zustand der Ressource, während eine Fehlermeldung den Fehler beschreibt.

Einige Antworten, wie die auf {{HTTPMethod("HEAD")}}-Anfragen oder die Statuscodes {{HTTPStatus("204", "204 No Content")}} und {{HTTPStatus("204", "304 Not Modified")}}, enthalten überhaupt keinen Inhalt.

In der folgenden HTTP/1.1-Antwort enthält der Nachrichtenkörper den Inhalt `Mozilla Developer Network`:

```http
HTTP/1.1 200 OK
Content-Type: text/plain

Mozilla Developer Network
```

In der nächsten HTTP/1.1-Antwort kodiert das Transfer-Encoding die Daten in Chunks.
Der Inhalt ist letztendlich immer noch `Mozilla Developer Network`, aber der Nachrichtenkörper enthält unterschiedliche Daten, um die Chunks zu trennen:

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
- {{Glossary("Content header")}}
- [RFC 9110, Abschnitt 6.4: Inhalt](https://httpwg.org/specs/rfc9110.html#rfc.section.6.4) (ersetzt [RFC 7231](https://datatracker.ietf.org/doc/html/rfc7231#section-3.3) Nutzlastsemantik)
  - [Änderungen von RFC 7231](https://httpwg.org/specs/rfc9110.html#changes.from.rfc.7231)
