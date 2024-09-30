---
title: 204 No Content
slug: Web/HTTP/Status/204
l10n:
  sourceCommit: 3f68a9604259dfa862dd741dc88ebc8fb5fa10fe
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`204 No Content`** [erfolgreiche Antwort](/de/docs/Web/HTTP/Status#successful_responses) zeigt an, dass eine Anfrage erfolgreich war, aber der Client nicht von seiner aktuellen Seite weg navigieren muss. Eine `204`-Antwort ist standardmäßig zwischenspeicherbar, und ein {{HTTPHeader("ETag")}}-Header ist in solchen Fällen enthalten.

Eine `204 No Content`-Antwort hinsichtlich dieser Anfragemethoden hat folgende Bedeutung und Ergebnisse:

- {{HTTPMethod("DELETE")}}: Die Aktion war erfolgreich, und es müssen keine weiteren Informationen bereitgestellt werden.
- {{HTTPMethod("PUT")}}: Die Aktion war erfolgreich, und der {{HTTPHeader("ETag")}}-Wert enthält das Entitätsetikett für die neue Darstellung dieser Zielressource.

Eine `204`-Antwort kann verwendet werden, wenn Sie die Funktionalität "Speichern und weiter bearbeiten" für Anwendungen wie Wikiseiten implementieren. In diesem Fall könnte eine {{HTTPMethod("PUT")}}-Anfrage verwendet werden, um den Seiteninhalt zu speichern, und eine `204 No Content`-Antwort zeigt dem Browser an, dass der Editor nicht durch andere Inhalte ersetzt werden sollte.

## Status

```http
204 No Content
```

## Beispiele

### Empfang einer Antwort nach dem Löschen eines Bildes

In diesem Beispiel sendet der Client eine Anfrage, um ein Bild mit der `DELETE`-Methode zu löschen. Die Anfrage enthält einen {{HTTPHeader("Authorization")}}-Header mit einem Token zur Authentifizierung der Anfrage:

```http
DELETE /image/123 HTTP/1.1
Host: example.com
Authorization: Bearer 1234abcd
```

Nach dem erfolgreichen Löschen des Bildes antwortet der Server mit einer `204`-Antwort ohne Body (und einem expliziten {{HTTPHeader("Content-Length", "Content-Length: 0")}}-Header), um anzuzeigen, dass keine weiteren Informationen an den Client gesendet werden müssen.

```http
HTTP/1.1 204 No Content
Date: Wed, 26 Jun 2024 12:00:00 GMT
Server: Apache/2.4.1 (Unix)
Content-Length: 0
```

## Spezifikationen

{{Specifications}}

## Kompatibilitätshinweise

Obwohl dieser Statuscode für Antworten ohne Body gedacht ist, können Server fälschlicherweise Daten nach den Headern einfügen. Dieses Problem ist bei persistenten Verbindungen beobachtbar, bei denen der ungültige Body eine deutlich unterschiedliche Antwort auf eine nachfolgende Anfrage enthalten kann. Das HTTP-Protokoll ermöglicht es Browsern, solche Antworten unterschiedlich zu behandeln (es gibt eine laufende Diskussion bezüglich des Spezifikationstextes im [HTTPWG `http-core` GitHub repository](https://github.com/httpwg/http-core/issues/26)).

Apple Safari lehnt solche Daten ab. Google Chrome und Microsoft Edge verwerfen bis zu vier ungültige Bytes vor einer gültigen Antwort. Firefox toleriert über ein Kilobyte ungültiger Daten vor einer gültigen Antwort.

## Siehe auch

- [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Methods)
- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Status)
