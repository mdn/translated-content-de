---
title: 417 Expectation Failed
slug: Web/HTTP/Reference/Status/417
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`417 Expectation Failed`** [Client-Fehlerantwort](/de/docs/Web/HTTP/Reference/Status#client_error_responses) zeigt an, dass die im {{HTTPHeader("Expect")}}-Header der Anfrage gegebene Erwartung nicht erfüllt werden konnte. Nach Erhalt einer 417-Antwort sollte ein Client die Anfrage ohne eine `Expect` Anforderungs-Header wiederholen, indem die Datei im Anforderungskörper gesendet wird, ohne auf eine {{HTTPStatus("100")}}-Antwort zu warten. Weitere Details finden Sie in der Dokumentation des {{HTTPHeader("Expect")}}-Headers.

## Status

```http
417 Expectation Failed
```

## Beispiele

### Erwartungen nicht unterstützt

Die folgende PUT-Anfrage sendet Informationen über einen beabsichtigten Datei-Upload an einen Server. Der Client verwendet einen `Expect: 100-continue`-Header und keinen Anforderungskörper, um das Senden von Daten über das Netzwerk zu vermeiden, was zu Fehlern wie einer {{HTTPStatus("405")}}, {{HTTPStatus("401")}} oder {{HTTPStatus("403")}}-Antwort führen könnte:

```http
PUT /videos HTTP/1.1
Host: uploads.example.com
Content-Type: video/h264
Content-Length: 1234567890987
Expect: 100-continue
```

In diesem Serverimplementierungsbeispiel werden Erwartungen nicht unterstützt, und das Vorhandensein eines `Expect`-Headers mit einem beliebigen Wert führt zu 417-Antworten:

```http
HTTP/1.1 417 Expectation Failed
Date: Fri, 28 Jun 2024 11:40:58 GMT
```

Der Client antwortet, indem er eine Anfrage ohne Erwartungen und mit dem {{Glossary("HTTP_Content", "Inhalt")}} im Anforderungskörper stellt:

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

- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status)
- {{HTTPStatus("100", "100 Continue")}}
- {{HTTPHeader("Expect")}}
