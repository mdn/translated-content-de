---
title: 417 Expectation Failed
slug: Web/HTTP/Reference/Status/417
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP-Statuscode **`417 Expectation Failed`** [Client-Fehlerantwort](/de/docs/Web/HTTP/Reference/Status#client_error_responses) zeigt an, dass die im {{HTTPHeader("Expect")}}-Header der Anfrage angegebene Erwartung nicht erfüllt werden konnte. Nach Erhalt einer 417-Antwort sollte der Client die Anfrage ohne einen `Expect`-Anforderungsheader wiederholen und die Datei ohne Warten auf eine {{HTTPStatus("100")}}-Antwort im Anforderungstext einfügen. Weitere Details finden Sie in der Dokumentation zum {{HTTPHeader("Expect")}}-Header.

## Status

```http
417 Expectation Failed
```

## Beispiele

### Erwartungen nicht unterstützt

Die folgende PUT-Anfrage sendet Informationen über einen beabsichtigten Datei-Upload an einen Server. Der Client verwendet einen `Expect: 100-continue`-Header und keinen Anforderungstext, um zu vermeiden, dass Daten über das Netzwerk gesendet werden, die zu einem Fehler wie einer {{HTTPStatus("405")}}, {{HTTPStatus("401")}} oder {{HTTPStatus("403")}}-Antwort führen könnten:

```http
PUT /videos HTTP/1.1
Host: uploads.example.com
Content-Type: video/h264
Content-Length: 1234567890987
Expect: 100-continue
```

In dieser Beispiel-Serverimplementierung werden Erwartungen nicht unterstützt, und das Vorhandensein eines `Expect`-Headers mit beliebigem Wert führt zu 417-Antworten:

```http
HTTP/1.1 417 Expectation Failed
Date: Fri, 28 Jun 2024 11:40:58 GMT
```

Der Client reagiert, indem er eine Anfrage ohne Erwartungen, aber mit dem {{Glossary("HTTP_Content", "Inhalt")}} im Anforderungstext sendet:

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

- [HTTP Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status)
- {{HTTPStatus("100", "100 Continue")}}
- {{HTTPHeader("Expect")}}
