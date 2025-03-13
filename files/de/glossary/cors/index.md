---
title: CORS
slug: Glossary/CORS
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{GlossarySidebar}}

**CORS** (Cross-Origin Resource Sharing) ist ein System, das aus der Übertragung von {{Glossary("HTTP_header", "HTTP-Headern")}} besteht und bestimmt, ob Browser JavaScript-Code auf der Client-Seite daran hindern, auf Antworten für Cross-Origin-Anfragen zuzugreifen.

Die [Same-Origin-Sicherheitsrichtlinie](/de/docs/Web/Security/Same-origin_policy) verbietet den Cross-Origin-Zugriff auf Ressourcen. Aber CORS gibt Webservern die Möglichkeit, anzugeben, dass sie den Cross-Origin-Zugriff auf ihre Ressourcen zulassen möchten.

## CORS-Header

- {{HTTPHeader("Access-Control-Allow-Origin")}}
  - : Gibt an, ob die Antwort geteilt werden kann.
- {{HTTPHeader("Access-Control-Allow-Credentials")}}
  - : Gibt an, ob die Antwort auf die Anfrage offengelegt werden kann, wenn das Berechtigungskennzeichen wahr ist.
- {{HTTPHeader("Access-Control-Allow-Headers")}}
  - : Wird als Antwort auf eine Preflight-Anfrage verwendet, um anzugeben, welche HTTP-Header bei der tatsächlichen Anfrage verwendet werden können.
- {{HTTPHeader("Access-Control-Allow-Methods")}}
  - : Gibt die Methode oder Methoden an, die beim Zugriff auf die Ressource als Antwort auf eine Preflight-Anfrage erlaubt sind.
- {{HTTPHeader("Access-Control-Expose-Headers")}}
  - : Gibt an, welche Header als Teil der Antwort offengelegt werden können, indem ihre Namen aufgelistet werden.
- {{HTTPHeader("Access-Control-Max-Age")}}
  - : Gibt an, wie lange die Ergebnisse einer Preflight-Anfrage zwischengespeichert werden können.
- {{HTTPHeader("Access-Control-Request-Headers")}}
  - : Wird verwendet, wenn eine Preflight-Anfrage gesendet wird, um dem Server mitzuteilen, welche HTTP-Header bei der tatsächlichen Anfrage verwendet werden.
- {{HTTPHeader("Access-Control-Request-Method")}}
  - : Wird verwendet, wenn eine Preflight-Anfrage gesendet wird, um dem Server mitzuteilen, welche [HTTP-Methode](/de/docs/Web/HTTP/Reference/Methods) bei der tatsächlichen Anfrage verwendet wird.
- {{HTTPHeader("Origin")}}
  - : Gibt an, woher ein Abruf stammt.
- {{HTTPHeader("Timing-Allow-Origin")}}
  - : Gibt die Ursprünge an, die berechtigt sind, Werte von Attributen einzusehen, die über Funktionen der [Resource Timing API](/de/docs/Web/API/Performance_API/Resource_timing) abgerufen werden können und die sonst aufgrund von Cross-Origin-Beschränkungen als Null gemeldet würden.

## Siehe auch

- [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS)
- [Cross-origin resource sharing](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing) auf Wikipedia
- [Fetch specification](https://fetch.spec.whatwg.org/)
