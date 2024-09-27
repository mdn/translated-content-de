---
title: CORS
slug: Glossary/CORS
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{GlossarySidebar}}

**CORS** (Cross-Origin Resource Sharing) ist ein System, das aus der Übertragung von [HTTP-Headern](/de/docs/Glossary/HTTP_header) besteht und festlegt, ob Browser JavaScript-Code auf der Clientseite den Zugriff auf Antworten von Cross-Origin-Anfragen blockieren.

Die [Same-Origin-Sicherheitsrichtlinie](/de/docs/Web/Security/Same-origin_policy) verbietet den Cross-Origin-Zugriff auf Ressourcen. Doch CORS gibt Webservern die Möglichkeit, sich dafür zu entscheiden, Cross-Origin-Zugriff auf ihre Ressourcen zu erlauben.

## CORS-Header

- {{HTTPHeader("Access-Control-Allow-Origin")}}
  - : Gibt an, ob die Antwort geteilt werden kann.
- {{HTTPHeader("Access-Control-Allow-Credentials")}}
  - : Gibt an, ob die Antwort auf die Anfrage offengelegt werden kann, wenn das Anmeldeinformationsflag wahr ist.
- {{HTTPHeader("Access-Control-Allow-Headers")}}
  - : Wird als Antwort auf eine Vorab-Anfrage verwendet, um anzugeben, welche HTTP-Header bei der tatsächlichen Anforderung verwendet werden können.
- {{HTTPHeader("Access-Control-Allow-Methods")}}
  - : Gibt die Methode oder Methoden an, die beim Zugriff auf die Ressource als Antwort auf eine Vorab-Anfrage erlaubt sind.
- {{HTTPHeader("Access-Control-Expose-Headers")}}
  - : Gibt an, welche Header als Teil der Antwort offengelegt werden können, indem ihre Namen aufgelistet werden.
- {{HTTPHeader("Access-Control-Max-Age")}}
  - : Gibt an, wie lange die Ergebnisse einer Vorab-Anfrage zwischengespeichert werden können.
- {{HTTPHeader("Access-Control-Request-Headers")}}
  - : Wird bei der Ausgabe einer Vorab-Anfrage verwendet, um den Server wissen zu lassen, welche HTTP-Header bei der tatsächlichen Anfrage verwendet werden.
- {{HTTPHeader("Access-Control-Request-Method")}}
  - : Wird bei der Ausgabe einer Vorab-Anfrage verwendet, um den Server wissen zu lassen, welche [HTTP-Methode](/de/docs/Web/HTTP/Methods) bei der tatsächlichen Anfrage verwendet wird.
- {{HTTPHeader("Origin")}}
  - : Gibt an, von wo ein Abruf stammt.
- {{HTTPHeader("Timing-Allow-Origin")}}
  - : Gibt Ursprünge an, die berechtigt sind, die Werte von Attributen einzusehen, die über Funktionen der [Resource Timing API](/de/docs/Web/API/Performance_API/Resource_timing) abgerufen werden, die andernfalls aufgrund von Cross-Origin-Beschränkungen als Null gemeldet würden.

## Siehe auch

- [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/CORS)
- [Cross-origin resource sharing](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing) auf Wikipedia
- [Fetch-Spezifikation](https://fetch.spec.whatwg.org/)
