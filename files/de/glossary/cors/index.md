---
title: CORS
slug: Glossary/CORS
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

**CORS** (Cross-Origin Resource Sharing) ist ein System, das aus der Übertragung von {{Glossary("HTTP_header", "HTTP-Headern")}} besteht und bestimmt, ob Browser verhindern, dass Frontend-JavaScript-Code auf Antworten für Cross-Origin-Anfragen zugreift.

Die [Same-Origin-Sicherheitsrichtlinie](/de/docs/Web/Security/Defenses/Same-origin_policy) verbietet den Cross-Origin-Zugriff auf Ressourcen. Aber CORS gibt Webservern die Möglichkeit anzugeben, dass sie Cross-Origin-Zugriff auf ihre Ressourcen zulassen möchten.

## CORS-Header

- {{HTTPHeader("Access-Control-Allow-Origin")}}
  - : Gibt an, ob die Antwort geteilt werden kann.
- {{HTTPHeader("Access-Control-Allow-Credentials")}}
  - : Gibt an, ob die Antwort auf die Anfrage offengelegt werden kann, wenn das Anmeldeinformationen-Flag wahr ist.
- {{HTTPHeader("Access-Control-Allow-Headers")}}
  - : Wird als Antwort auf eine Preflight-Anfrage verwendet, um anzugeben, welche HTTP-Header bei der tatsächlichen Anfrage verwendet werden können.
- {{HTTPHeader("Access-Control-Allow-Methods")}}
  - : Gibt die Methoden oder Methoden an, die beim Zugriff auf die Ressource als Antwort auf eine Preflight-Anfrage erlaubt sind.
- {{HTTPHeader("Access-Control-Expose-Headers")}}
  - : Gibt an, welche Header als Teil der Antwort offengelegt werden können, indem ihre Namen aufgelistet werden.
- {{HTTPHeader("Access-Control-Max-Age")}}
  - : Gibt an, wie lange die Ergebnisse einer Preflight-Anfrage zwischengespeichert werden können.
- {{HTTPHeader("Access-Control-Request-Headers")}}
  - : Wird beim Auslösen einer Preflight-Anfrage verwendet, um dem Server mitzuteilen, welche HTTP-Header bei der tatsächlichen Anfrage verwendet werden.
- {{HTTPHeader("Access-Control-Request-Method")}}
  - : Wird beim Auslösen einer Preflight-Anfrage verwendet, um dem Server mitzuteilen, welche [HTTP-Methode](/de/docs/Web/HTTP/Reference/Methods) bei der tatsächlichen Anfrage verwendet wird.
- {{HTTPHeader("Origin")}}
  - : Gibt an, woher ein Abruf stammt.
- {{HTTPHeader("Timing-Allow-Origin")}}
  - : Gibt Ursprünge an, die die Werte der Attribute sehen dürfen, die über Funktionen der [Resource Timing API](/de/docs/Web/API/Performance_API/Resource_timing) abgerufen werden, die sonst aufgrund von Cross-Origin-Beschränkungen als null gemeldet würden.

## Siehe auch

- [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS)
- [Cross-Origin-Resource-Sharing](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing) auf Wikipedia
- [Fetch-Spezifikation](https://fetch.spec.whatwg.org/)
