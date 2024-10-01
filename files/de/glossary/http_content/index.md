---
title: HTTP Content
slug: Glossary/HTTP_Content
l10n:
  sourceCommit: ae86913908651e6008079242691e06b5e01d1c78
---

{{GlossarySidebar}}

In HTTP-Nachrichten beschreibt der **Inhalt** die 'Informationen', die im Nachrichtenkörper übermittelt werden (die auf den Header-Abschnitt folgen), nachdem jegliche Nachrichtenrahmen aus der HTTP/1.1 Chunked-Transfer-Codierung entfernt wurden. Dies wurde in HTTP/1.1 als "Payload" bezeichnet, aber der Nachrichten-"Inhalt" unterscheidet sich von Rahmen-Payloads in HTTP/2 und HTTP/3, wo die Daten in einem einzelnen Rahmen Header-Daten, Body-Daten oder andere Steuerinformationen sein könnten.

Der Zweck des Nachrichteninhalts in HTTP-Anfragen und -Antworten hängt von der Anfragemethode und dem Antwortstatuscode ab. Beispielsweise repräsentiert der Inhalt in einer {{HTTPMethod("PUT")}}-Anfrage den gewünschten Zustand der Ressource, während er in einer {{HTTPMethod("POST")}}-Anfrage die zu verarbeitenden Informationen darstellt. Eine {{HTTPStatus("200", "200 OK")}}-Antwort auf eine {{HTTPMethod("GET")}}-Anfrage zeigt den aktuellen Zustand der Ressource, während eine Fehlerantwort den Fehler beschreibt.

Einige Antworten, wie die auf {{HTTPMethod("HEAD")}}-Anfragen oder die Statuscodes {{HTTPStatus("204", "204 No Content")}} und {{HTTPStatus("204", "304 Not Modified")}}, enthalten überhaupt keinen Inhalt.

In der folgenden HTTP/1.1-Antwort enthält der Nachrichtenkörper den Inhalt `Mozilla Developer Network`:

```http
HTTP/1.1 200 OK
Content-Type: text/plain

Mozilla Developer Network
```

In der nächsten HTTP/1.1-Antwort kodiert die Transfer-Codierung die Daten in Chunks. Der Inhalt ist letztlich immer noch `Mozilla Developer Network`, aber der Nachrichtenkörper enthält unterschiedliche Nachrichtendaten, um die Chunks zu trennen:

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
- [RFC 9110, Abschnitt 6.4: Content](https://httpwg.org/specs/rfc9110.html#rfc.section-6.4) (ersetzt [RFC 7231](https://datatracker.ietf.org/doc/html/rfc7231#section-3.3) Payload Semantics)
  - [Änderungen von RFC 7231](https://httpwg.org/specs/rfc9110.html#changes.from.rfc.7231)
