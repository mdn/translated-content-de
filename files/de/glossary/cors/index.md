---
title: CORS
slug: Glossary/CORS
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{GlossarySidebar}}

**CORS** (Cross-Origin Resource Sharing) ist ein System, bestehend aus der Übertragung von {{Glossary("HTTP_header", "HTTP-Headern")}}, das bestimmt, ob Browser verhindern, dass Frontend-JavaScript-Code auf Antworten für Cross-Origin-Anfragen zugreift.

Die [Same-Origin-Sicherheitsrichtlinie](/de/docs/Web/Security/Same-origin_policy) verbietet den Cross-Origin-Zugriff auf Ressourcen. Aber CORS gibt Webservern die Möglichkeit, zu signalisieren, dass sie den Cross-Origin-Zugriff auf ihre Ressourcen zulassen möchten.

## CORS-Header

- {{HTTPHeader("Access-Control-Allow-Origin")}}
  - : Gibt an, ob die Antwort geteilt werden kann.
- {{HTTPHeader("Access-Control-Allow-Credentials")}}
  - : Gibt an, ob die Antwort auf die Anfrage exponiert werden kann, wenn das Berechtigungsflag wahr ist.
- {{HTTPHeader("Access-Control-Allow-Headers")}}
  - : Wird als Antwort auf eine Preflight-Anfrage verwendet, um anzugeben, welche HTTP-Header bei der tatsächlichen Anfrage verwendet werden können.
- {{HTTPHeader("Access-Control-Allow-Methods")}}
  - : Gibt die Methode oder Methoden an, die beim Zugriff auf die Ressource als Antwort auf eine Preflight-Anfrage erlaubt sind.
- {{HTTPHeader("Access-Control-Expose-Headers")}}
  - : Gibt an, welche Header als Teil der Antwort durch Auflisten ihrer Namen exponiert werden können.
- {{HTTPHeader("Access-Control-Max-Age")}}
  - : Gibt an, wie lange die Ergebnisse einer Preflight-Anfrage zwischengespeichert werden können.
- {{HTTPHeader("Access-Control-Request-Headers")}}
  - : Wird verwendet, um bei der Ausgabe einer Preflight-Anfrage dem Server mitzuteilen, welche HTTP-Header verwendet werden, wenn die eigentliche Anfrage gestellt wird.
- {{HTTPHeader("Access-Control-Request-Method")}}
  - : Wird verwendet, um bei der Ausgabe einer Preflight-Anfrage dem Server mitzuteilen, welche [HTTP-Methode](/de/docs/Web/HTTP/Methods) verwendet wird, wenn die eigentliche Anfrage gestellt wird.
- {{HTTPHeader("Origin")}}
  - : Gibt an, woher ein Abruf stammt.
- {{HTTPHeader("Timing-Allow-Origin")}}
  - : Gibt Ursprünge an, denen es erlaubt ist, Werte von Attributen zu sehen, die über Funktionen der [Resource Timing API](/de/docs/Web/API/Performance_API/Resource_timing) abgerufen werden, die andernfalls aufgrund von Cross-Origin-Beschränkungen als Null gemeldet würden.

## Siehe auch

- [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/CORS)
- [Cross-origin resource sharing](https://de.wikipedia.org/wiki/Cross-Origin_Resource_Sharing) auf Wikipedia
- [Fetch specification](https://fetch.spec.whatwg.org/)
