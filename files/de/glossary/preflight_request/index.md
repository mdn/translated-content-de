---
title: Preflight-Anfrage
slug: Glossary/Preflight_request
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Eine CORS-Preflight-Anfrage ist eine {{Glossary("CORS", "CORS")}}-Anfrage, die prüft, ob das CORS-Protokoll verstanden wird und ob ein Server unter Verwendung spezifischer Methoden und Header darüber informiert ist.

Es handelt sich um eine {{HTTPMethod("OPTIONS")}}-Anfrage, die zwei oder drei HTTP-Anforderungs-Header verwendet: {{HTTPHeader("Access-Control-Request-Method")}}, {{HTTPHeader("Origin")}} und optional {{HTTPHeader("Access-Control-Request-Headers")}}.

Eine Preflight-Anfrage wird automatisch von einem Browser gesendet, und in normalen Fällen müssen Front-End-Entwickler solche Anfragen nicht selbst erstellen. Sie tritt auf, wenn die Anfrage als ["to be preflighted"](/de/docs/Web/HTTP/Guides/CORS#preflighted_requests) qualifiziert ist und bei [einfachen Anfragen](/de/docs/Web/HTTP/Guides/CORS#simple_requests) weggelassen wird.

Zum Beispiel könnte ein Client einen Server fragen, ob er eine {{HTTPMethod("DELETE")}}-Anfrage zulassen würde, bevor er eine `DELETE`-Anfrage sendet, indem er eine Preflight-Anfrage verwendet:

```http
OPTIONS /resource/foo
Access-Control-Request-Method: DELETE
Access-Control-Request-Headers: x-requested-with
Origin: https://foo.bar.org
```

Wenn der Server dies zulässt, antwortet er auf die Preflight-Anfrage mit einem {{HTTPHeader("Access-Control-Allow-Methods")}}-Antwort-Header, der `DELETE` aufführt:

```http
HTTP/1.1 204 No Content
Connection: keep-alive
Access-Control-Allow-Origin: https://foo.bar.org
Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE
Access-Control-Allow-Headers: X-Requested-With
Access-Control-Max-Age: 86400
```

Die Preflight-Antwort kann optional für die Anfragen, die in der gleichen {{Glossary("URL", "URL")}} erstellt werden, zwischengespeichert werden, indem der {{HTTPHeader("Access-Control-Max-Age")}}-Header wie im obigen Beispiel verwendet wird. Um Preflight-Antworten zu zwischenspeichern, verwendet der Browser einen speziellen Cache, der vom allgemeinen HTTP-Cache, den der Browser verwaltet, getrennt ist. Preflight-Antworten werden niemals im allgemeinen HTTP-Cache des Browsers zwischengespeichert.

## Siehe auch

- Verwandte Glossarbegriffe:
  - {{Glossary("CORS", "CORS")}}
- {{HTTPMethod("OPTIONS")}}
