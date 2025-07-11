---
title: HTTP-Inhalt
slug: Glossary/HTTP_Content
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

In HTTP-Nachrichten beschreibt der **Inhalt** die 'Informationen', die im Nachrichtenkörper übermittelt werden (der auf den Header-Abschnitt folgt), nachdem jegliche Nachrichtenrahmung aus der HTTP/1.1 Chunked Transfer-Encoding entfernt wurde. Dies wurde in HTTP/1.1 als "Payload" bezeichnet, jedoch unterscheidet sich der Nachrichten-"Inhalt" von Frame-Payloads in HTTP/2 und HTTP/3, bei denen die Daten in einem einzelnen Frame Header-Daten, Body-Daten oder andere Steuerinformationen sein können.

Der Zweck des Nachrichteninhalts in HTTP-Anfragen und -Antworten hängt von der Anfragemethode und dem Antwortstatuscode ab. Zum Beispiel repräsentiert im Fall einer {{HTTPMethod("PUT")}}-Anfrage der Inhalt den gewünschten Zustand der Ressource, während bei einer {{HTTPMethod("POST")}}-Anfrage Informationen zur Verarbeitung bereitgestellt werden. Eine {{HTTPStatus("200", "200 OK")}}-Antwort auf eine {{HTTPMethod("GET")}}-Anfrage zeigt den aktuellen Zustand der Ressource an, während eine Fehlerantwort den Fehler beschreibt.

Einige Antworten, wie die auf {{HTTPMethod("HEAD")}}-Anfragen oder {{HTTPStatus("204", "204 No Content")}}- und {{HTTPStatus("304", "304 Not Modified")}}-Statuscodes, enthalten überhaupt keinen Inhalt.

In der folgenden HTTP/1.1-Antwort enthält der Nachrichtenkörper den Inhalt `Mozilla Developer Network`:

```http
HTTP/1.1 200 OK
Content-Type: text/plain

Mozilla Developer Network
```

In der nächsten HTTP/1.1-Antwort kodiert die Transfer-Encoding die Daten in Chunks. Der Inhalt bleibt am Ende `Mozilla Developer Network`, aber der Nachrichtenkörper enthält verschiedene Nachrichtendaten, um die Chunks zu trennen:

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
- [RFC 9110, Abschnitt 6.4: Content](https://httpwg.org/specs/rfc9110.html#rfc.section.6.4) (ersetzt [RFC 7231](https://datatracker.ietf.org/doc/html/rfc7231#section-3.3) Payload Semantics)
  - [Änderungen von RFC 7231](https://httpwg.org/specs/rfc9110.html#changes.from.rfc.7231)
