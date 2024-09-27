---
title: 204 No Content
slug: Web/HTTP/Status/204
l10n:
  sourceCommit: 3f68a9604259dfa862dd741dc88ebc8fb5fa10fe
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`204 No Content`** für [erfolgreiche Antworten](/de/docs/Web/HTTP/Status#successful_responses) zeigt an, dass ein Antrag erfolgreich war, aber der Client nicht von seiner aktuellen Seite weg navigieren muss.
Eine `204`-Antwort ist standardmäßig cachefähig, und in solchen Fällen ist ein {{HTTPHeader("ETag")}}-Header enthalten.

Eine `204 No Content`-Antwort auf diese Anfragemethoden hat folgende Bedeutung und Ergebnisse:

- {{HTTPMethod("DELETE")}}: Die Aktion war erfolgreich und es müssen keine weiteren Informationen bereitgestellt werden.
- {{HTTPMethod("PUT")}}: Die Aktion war erfolgreich, und der {{HTTPHeader("ETag")}}-Wert enthält den Entity-Tag für die neue Darstellung dieser Zielressource.

Eine `204`-Antwort kann verwendet werden, wenn die Funktionalität "speichern und weiter bearbeiten" für Anwendungen wie Wiki-Seiten implementiert wird.
In diesem Fall könnte eine {{HTTPMethod("PUT")}}-Anfrage verwendet werden, um den Seiteninhalt zu speichern, und eine `204 No Content`-Antwort zeigt dem Browser an, dass der Editor nicht durch andere Inhalte ersetzt werden soll.

## Status

```http
204 No Content
```

## Beispiele

### Empfang einer Antwort nach dem Löschen eines Bildes

In diesem Beispiel sendet der Client eine Anfrage zum Löschen eines Bildes mit der `DELETE`-Methode.
Die Anfrage enthält einen {{HTTPHeader("Authorization")}}-Header mit einem Token zur Authentifizierung der Anfrage:

```http
DELETE /image/123 HTTP/1.1
Host: example.com
Authorization: Bearer 1234abcd
```

Nach dem erfolgreichen Löschen des Bildes antwortet der Server mit einer `204`-Antwort ohne Body (und einem expliziten {{HTTPHeader("Content-Length", "Content-Length: 0")}}-Header), was bedeutet, dass keine weiteren Informationen an den Client gesendet werden müssen.

```http
HTTP/1.1 204 No Content
Date: Wed, 26 Jun 2024 12:00:00 GMT
Server: Apache/2.4.1 (Unix)
Content-Length: 0
```

## Spezifikationen

{{Specifications}}

## Kompatibilitätsnotizen

Obwohl dieser Statuscode für Antworten ohne Body vorgesehen ist, können Server fälschlicherweise Daten nach den Headern einfügen. Dieses Problem ist bei dauerhaften Verbindungen beobachtbar, bei denen der ungültige Body möglicherweise eine separate Antwort auf eine nachfolgende Anfrage enthält.
Das HTTP-Protokoll erlaubt es den Browsern, solche Antworten unterschiedlich zu behandeln (es gibt eine laufende Diskussion über den Spezifikationstext im [HTTPWG `http-core` GitHub Repository](https://github.com/httpwg/http-core/issues/26)).

Apple Safari lehnt solche Daten ab.
Google Chrome und Microsoft Edge verwerfen bis zu vier ungültige Bytes vor einer gültigen Antwort.
Firefox toleriert über ein Kilobyte ungültiger Daten vor einer gültigen Antwort.

## Siehe auch

- [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Methods)
- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Status)
