---
title: 417 Expectation Failed
slug: Web/HTTP/Status/417
l10n:
  sourceCommit: ae86913908651e6008079242691e06b5e01d1c78
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`417 Expectation Failed`** [Client-Fehlerantwort](/de/docs/Web/HTTP/Status#client_error_responses) gibt an, dass die im {{HTTPHeader("Expect")}}-Header der Anfrage gegebene Erwartung nicht erfüllt werden konnte.
Nachdem eine 417-Antwort empfangen wurde, sollte ein Client die Anfrage ohne einen `Expect`-Header wiederholen und die Datei im Anfragekörper einfügen, ohne auf eine {{HTTPStatus("100")}}-Antwort zu warten.
Weitere Einzelheiten finden Sie in der Dokumentation zum {{HTTPHeader("Expect")}}-Header.

## Status

```http
417 Expectation Failed
```

## Beispiele

### Erwartung nicht unterstützt

Die folgende PUT-Anfrage sendet Informationen über ein geplantes Datei-Upload an einen Server.
Der Client verwendet einen `Expect: 100-continue`-Header und keinen Anfragekörper, um zu vermeiden, dass Daten über das Netzwerk gesendet werden, wodurch eine Fehlerantwort wie {{HTTPStatus("405")}}, {{HTTPStatus("401")}} oder {{HTTPStatus("403")}} ausgelöst werden könnte:

```http
PUT /videos HTTP/1.1
Host: uploads.example.com
Content-Type: video/h264
Content-Length: 1234567890987
Expect: 100-continue
```

In dieser Beispielserverimplementierung werden Erwartungen nicht unterstützt, und das Vorhandensein eines `Expect`-Headers mit einem beliebigen Wert führt zu 417-Antworten:

```http
HTTP/1.1 417 Expectation Failed
Date: Fri, 28 Jun 2024 11:40:58 GMT
```

Der Client antwortet, indem er eine Anfrage ohne Erwartungen und mit dem {{Glossary("HTTP_Content", "Inhalt")}} im Anfragekörper stellt:

```http
PUT /videos HTTP/1.1
Host: uploads.example.com
Content-Type: video/h264
Content-Length: 1234567890987

[…]
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Status)
- {{HTTPStatus("100", "100 Continue")}}
- {{HTTPHeader("Expect")}}
