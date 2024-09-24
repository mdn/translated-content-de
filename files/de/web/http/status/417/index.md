---
title: 417 Erwartung Fehlgeschlagen
slug: Web/HTTP/Status/417
l10n:
  sourceCommit: ae86913908651e6008079242691e06b5e01d1c78
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`417 Erwartung Fehlgeschlagen`** [Clientfehlerantwort](/de/docs/Web/HTTP/Status#client_error_responses) zeigt an, dass die im {{HTTPHeader("Expect")}}-Header der Anfrage gegebene Erwartung nicht erfüllt werden konnte.
Nach Erhalt einer 417-Antwort sollte der Client die Anfrage ohne einen `Expect`-Header wiederholen und die Datei im Anfragekörper ohne Warten auf eine {{HTTPStatus("100")}}-Antwort einschließen.
Siehe die Dokumentation des {{HTTPHeader("Expect")}}-Headers für weitere Details.

## Status

```http
417 Expectation Failed
```

## Beispiele

### Nicht unterstützte Erwartungen

Die folgende PUT-Anfrage sendet Informationen über einen vorgesehenen Datei-Upload an einen Server.
Der Client verwendet einen `Expect: 100-continue`-Header und keinen Anfragekörper, um zu vermeiden, Daten über das Netzwerk zu senden, die zu einem Fehler wie einer {{HTTPStatus("405")}}, {{HTTPStatus("401")}} oder {{HTTPStatus("403")}}-Antwort führen könnten:

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

Der Client reagiert, indem er eine Anfrage ohne Erwartungen und mit dem {{Glossary("HTTP Content", "Inhalt")}} im Anfragekörper stellt:

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
