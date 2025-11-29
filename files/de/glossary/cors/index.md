---
title: CORS
slug: Glossary/CORS
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**CORS** (Cross-Origin Resource Sharing) ist ein System, das aus der Übertragung von {{Glossary("HTTP_header", "HTTP-Headern")}} besteht. Es bestimmt, ob Browser das Ausführen von JavaScript-Code im Frontend blockieren, der versucht, auf Antworten von Cross-Origin-Anfragen zuzugreifen.

Die [Same-Origin-Sicherheitsrichtlinie](/de/docs/Web/Security/Defenses/Same-origin_policy) verbietet den Cross-Origin-Zugriff auf Ressourcen. Aber CORS gibt Webservern die Möglichkeit, anzugeben, dass sie Cross-Origin-Zugriff auf ihre Ressourcen zulassen möchten.

## CORS-Header

- {{HTTPHeader("Access-Control-Allow-Origin")}}
  - : Gibt an, ob die Antwort gemeinsam genutzt werden kann.
- {{HTTPHeader("Access-Control-Allow-Credentials")}}
  - : Gibt an, ob die Antwort auf die Anfrage offengelegt werden kann, wenn das Credential-Flag auf true gesetzt ist.
- {{HTTPHeader("Access-Control-Allow-Headers")}}
  - : Wird als Antwort auf eine Preflight-Anfrage verwendet, um anzugeben, welche HTTP-Header verwendet werden können, wenn die eigentliche Anfrage gestellt wird.
- {{HTTPHeader("Access-Control-Allow-Methods")}}
  - : Spezifiziert die Methode oder Methoden, die beim Zugriff auf die Ressource als Antwort auf eine Preflight-Anfrage erlaubt sind.
- {{HTTPHeader("Access-Control-Expose-Headers")}}
  - : Gibt an, welche Header als Teil der Antwort offengelegt werden können, indem deren Namen aufgelistet werden.
- {{HTTPHeader("Access-Control-Max-Age")}}
  - : Gibt an, wie lange die Ergebnisse einer Preflight-Anfrage zwischengespeichert werden können.
- {{HTTPHeader("Access-Control-Request-Headers")}}
  - : Wird bei einer Preflight-Anfrage verwendet, um dem Server mitzuteilen, welche HTTP-Header verwendet werden, wenn die eigentliche Anfrage gestellt wird.
- {{HTTPHeader("Access-Control-Request-Method")}}
  - : Wird bei einer Preflight-Anfrage verwendet, um dem Server mitzuteilen, welche [HTTP-Methode](/de/docs/Web/HTTP/Reference/Methods) verwendet wird, wenn die eigentliche Anfrage gestellt wird.
- {{HTTPHeader("Origin")}}
  - : Gibt an, woher ein Abruf stammt.
- {{HTTPHeader("Timing-Allow-Origin")}}
  - : Gibt Ursprünge an, die berechtigt sind, Werte von Attributen zu sehen, die über Funktionen der [Resource Timing API](/de/docs/Web/API/Performance_API/Resource_timing) abgerufen werden, die andernfalls aufgrund von Cross-Origin-Beschränkungen als Null gemeldet würden.

## Siehe auch

- [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS)
- [Cross-origin resource sharing](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing) auf Wikipedia
- [Fetch specification](https://fetch.spec.whatwg.org/)
