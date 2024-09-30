---
title: Preflight-Anfrage
slug: Glossary/Preflight_request
l10n:
  sourceCommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{GlossarySidebar}}

Eine CORS-Preflight-Anfrage ist eine [CORS](/de/docs/Glossary/CORS)-Anfrage, die überprüft, ob das CORS-Protokoll verstanden wird und ein Server mit bestimmten Methoden und Headern vertraut ist.

Es handelt sich um eine {{HTTPMethod("OPTIONS")}}-Anfrage, die zwei oder drei HTTP-Anfrage-Header verwendet: {{HTTPHeader("Access-Control-Request-Method")}}, {{HTTPHeader("Origin")}} und optional {{HTTPHeader("Access-Control-Request-Headers")}}.

Eine Preflight-Anfrage wird automatisch von einem Browser erstellt und in normalen Fällen müssen Front-End-Entwickler solche Anfragen nicht selbst erzeugen. Sie erscheint, wenn die Anfrage als "[vorab zu prüfen](/de/docs/Web/HTTP/CORS#preflighted_requests)" klassifiziert wird und wird für [einfache Anfragen](/de/docs/Web/HTTP/CORS#simple_requests) weggelassen.

Zum Beispiel könnte ein Client einen Server fragen, ob er eine {{HTTPMethod("DELETE")}}-Anfrage zulässt, bevor er eine `DELETE`-Anfrage sendet, indem er eine Preflight-Anfrage verwendet:

```http
OPTIONS /resource/foo
Access-Control-Request-Method: DELETE
Access-Control-Request-Headers: x-requested-with
Origin: https://foo.bar.org
```

Wenn der Server dies erlaubt, antwortet er auf die Preflight-Anfrage mit einem {{HTTPHeader("Access-Control-Allow-Methods")}}-Antwortheader, der `DELETE` auflistet:

```http
HTTP/1.1 204 No Content
Connection: keep-alive
Access-Control-Allow-Origin: https://foo.bar.org
Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE
Access-Control-Allow-Headers: X-Requested-With
Access-Control-Max-Age: 86400
```

Die Preflight-Antwort kann optional für Anfragen, die an derselben [URL](/de/docs/Glossary/URL) erstellt wurden, zwischengespeichert werden, indem der Header {{HTTPHeader("Access-Control-Max-Age")}} wie im obigen Beispiel verwendet wird. Um Preflight-Antworten zu cachen, verwendet der Browser einen spezifischen Cache, der getrennt vom allgemeinen HTTP-Cache ist, den der Browser verwaltet. Preflight-Antworten werden niemals im allgemeinen HTTP-Cache des Browsers zwischengespeichert.

## Siehe auch

- Verwandte Glossarbegriffe:
  - [CORS](/de/docs/Glossary/CORS)
- {{HTTPMethod("OPTIONS")}}
