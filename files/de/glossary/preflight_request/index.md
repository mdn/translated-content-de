---
title: Preflight-Anfrage
slug: Glossary/Preflight_request
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{GlossarySidebar}}

Eine CORS-Preflight-Anfrage ist eine {{Glossary("CORS", "CORS")}}-Anfrage, die prüft, ob das CORS-Protokoll verstanden wird und ob ein Server unter Verwendung bestimmter Methoden und Header informiert ist.

Es ist eine {{HTTPMethod("OPTIONS")}}-Anfrage, die zwei oder drei HTTP-Anforderungs-Header verwendet: {{HTTPHeader("Access-Control-Request-Method")}}, {{HTTPHeader("Origin")}}, und optional {{HTTPHeader("Access-Control-Request-Headers")}}.

Eine Preflight-Anfrage wird automatisch von einem Browser gesendet und normalerweise müssen Front-End-Entwickler solche Anfragen nicht selbst erstellen. Sie tritt auf, wenn die Anfrage als ["preflighted"](/de/docs/Web/HTTP/Guides/CORS#preflighted_requests) qualifiziert wird und wird bei [einfachen Anfragen](/de/docs/Web/HTTP/Guides/CORS#simple_requests) weggelassen.

Zum Beispiel könnte ein Client einen Server fragen, ob er eine {{HTTPMethod("DELETE")}}-Anfrage erlauben würde, bevor er eine `DELETE`-Anfrage sendet, indem er eine Preflight-Anfrage verwendet:

```http
OPTIONS /resource/foo
Access-Control-Request-Method: DELETE
Access-Control-Request-Headers: x-requested-with
Origin: https://foo.bar.org
```

Wenn der Server dies erlaubt, wird er auf die Preflight-Anfrage mit einem {{HTTPHeader("Access-Control-Allow-Methods")}}-Antwort-Header antworten, der `DELETE` auflistet:

```http
HTTP/1.1 204 No Content
Connection: keep-alive
Access-Control-Allow-Origin: https://foo.bar.org
Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE
Access-Control-Allow-Headers: X-Requested-With
Access-Control-Max-Age: 86400
```

Die Preflight-Antwort kann optional für Anfragen, die unter derselben {{Glossary("URL", "URL")}} erstellt wurden, mithilfe des {{HTTPHeader("Access-Control-Max-Age")}}-Headers wie im obigen Beispiel zwischengespeichert werden. Um Preflight-Antworten zu cachen, verwendet der Browser einen speziellen Cache, der getrennt vom allgemeinen HTTP-Cache ist, den der Browser verwaltet. Preflight-Antworten werden niemals im allgemeinen HTTP-Cache des Browsers gespeichert.

## Siehe auch

- Verwandte Glossarbegriffe:
  - {{Glossary("CORS", "CORS")}}
- {{HTTPMethod("OPTIONS")}}
