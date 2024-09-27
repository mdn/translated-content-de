---
title: 417 Expectation Failed
slug: Web/HTTP/Status/417
l10n:
  sourceCommit: ae86913908651e6008079242691e06b5e01d1c78
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`417 Expectation Failed`** (Client-Fehlerantwort) zeigt an, dass die im `Expect`-Header der Anfrage angegebene Erwartung nicht erfüllt werden konnte. Nach Erhalt einer 417-Antwort sollte der Client die Anfrage ohne `Expect`-Header wiederholen und die Datei direkt im Anfragetext einfügen, ohne auf eine {{HTTPStatus("100")}}-Antwort zu warten. Weitere Details finden Sie in der Dokumentation des {{HTTPHeader("Expect")}}-Headers.

## Status

```http
417 Expectation Failed
```

## Beispiele

### Erwartungen nicht unterstützt

Die folgende PUT-Anfrage sendet Informationen über einen beabsichtigten Datei-Upload an einen Server. Der Client verwendet einen `Expect: 100-continue`-Header und keinen Anfragetext, um zu vermeiden, Daten über das Netzwerk zu senden, die zu einem Fehler wie einer {{HTTPStatus("405")}}, {{HTTPStatus("401")}} oder {{HTTPStatus("403")}}-Antwort führen könnten:

```http
PUT /videos HTTP/1.1
Host: uploads.example.com
Content-Type: video/h264
Content-Length: 1234567890987
Expect: 100-continue
```

In dieser beispielhaften Serverimplementierung werden Erwartungen nicht unterstützt, und das Vorhandensein eines `Expect`-Headers mit beliebigem Wert führt zu einer 417-Antwort:

```http
HTTP/1.1 417 Expectation Failed
Date: Fri, 28 Jun 2024 11:40:58 GMT
```

Der Client reagiert, indem er eine Anfrage ohne Erwartungen und mit dem [Inhalt](/de/docs/Glossary/HTTP_Content) im Anfragetext sendet:

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
