---
title: Preflight-Anfrage
slug: Glossary/Preflight_request
l10n:
  sourceCommit: 6ef7bc04d63cf8b512bdbea149a6cb875cc063e3
---

Eine CORS-Preflight-Anfrage ist eine {{Glossary("CORS", "CORS")}}-Anfrage, die überprüft, ob das CORS-Protokoll verstanden wird und ein Server spezifische Methoden und Header unterstützt.

Es ist eine {{HTTPMethod("OPTIONS")}}-Anfrage, die zwei oder drei HTTP-Anforderungsheader verwendet: {{HTTPHeader("Access-Control-Request-Method")}}, {{HTTPHeader("Origin")}} und optional {{HTTPHeader("Access-Control-Request-Headers")}}.

Eine Preflight-Anfrage wird automatisch von einem Browser gesendet und in der Regel müssen Front-End-Entwickler solche Anfragen nicht selbst erstellen. Sie erscheint, wenn die Anfrage als ["zu preflighten"](/de/docs/Web/HTTP/Guides/CORS#preflighted_requests) qualifiziert wird und wird bei [einfachen Anfragen](/de/docs/Web/HTTP/Guides/CORS#simple_requests) weggelassen.

Zum Beispiel könnte ein Client einen Server fragen, ob er eine {{HTTPMethod("DELETE")}}-Anfrage erlauben würde, bevor er eine `DELETE`-Anfrage sendet, indem er eine Preflight-Anfrage verwendet:

```http
OPTIONS /resource/foo
Access-Control-Request-Method: DELETE
Access-Control-Request-Headers: x-requested-with
Origin: https://www.example.com
```

Wenn der Server es erlaubt, antwortet er auf die Preflight-Anfrage mit einem {{HTTPHeader("Access-Control-Allow-Methods")}}-Antwort-Header, der `DELETE` auflistet:

```http
HTTP/1.1 204 No Content
Connection: keep-alive
Access-Control-Allow-Origin: https://www.example.com
Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE
Access-Control-Allow-Headers: X-Requested-With
Access-Control-Max-Age: 86400
```

Die Preflight-Antwort kann optional für die Anfragen, die im selben {{Glossary("URL", "URL")}} erstellt werden, mithilfe des {{HTTPHeader("Access-Control-Max-Age")}}-Headers wie im obigen Beispiel zwischengespeichert werden. Um Preflight-Antworten zu zwischenspeichern, verwendet der Browser einen spezifischen Cache, der von dem allgemeinen HTTP-Cache, den der Browser verwaltet, getrennt ist. Preflight-Antworten werden niemals im allgemeinen HTTP-Cache des Browsers zwischengespeichert.

## Siehe auch

- Verwandte Glossarbegriffe:
  - {{Glossary("CORS", "CORS")}}
- {{HTTPMethod("OPTIONS")}}
