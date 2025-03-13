---
title: 204 No Content
slug: Web/HTTP/Reference/Status/204
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`204 No Content`** [erfolgreiche Antwort](/de/docs/Web/HTTP/Reference/Status#successful_responses) zeigt an, dass eine Anfrage erfolgreich war, doch der Client nicht von seiner aktuellen Seite weg navigieren muss.
Eine `204`-Antwort ist standardmäßig cachefähig, und ein {{HTTPHeader("ETag")}}-Header ist in solchen Fällen enthalten.

Eine `204 No Content` Antwort für diese Anfragemethoden hat folgende Bedeutung und Ergebnisse:

- {{HTTPMethod("DELETE")}}: Die Aktion war erfolgreich, und es müssen keine weiteren Informationen bereitgestellt werden.
- {{HTTPMethod("PUT")}}: Die Aktion war erfolgreich, und der {{HTTPHeader("ETag")}}-Wert enthält das Entity-Tag für die neue Repräsentation der Zielressource.

Eine `204`-Antwort kann verwendet werden, wenn man eine "speichern und weiter bearbeiten"-Funktionalität für Anwendungen wie Wiki-Seiten implementiert.
In diesem Fall könnte eine {{HTTPMethod("PUT")}}-Anfrage genutzt werden, um die Seiteninhalte zu speichern, und eine `204 No Content`-Antwort zeigt dem Browser an, dass der Editor nicht durch andere Inhalte ersetzt werden soll.

## Status

```http
204 No Content
```

## Beispiele

### Eine Antwort nach dem Löschen eines Bildes erhalten

In diesem Beispiel sendet der Client eine Anfrage, um ein Bild mittels der `DELETE`-Methode zu löschen.
Die Anfrage enthält einen {{HTTPHeader("Authorization")}}-Header mit einem Token zur Authentifizierung der Anfrage:

```http
DELETE /image/123 HTTP/1.1
Host: example.com
Authorization: Bearer 1234abcd
```

Nachdem das Bild erfolgreich gelöscht wurde, antwortet der Server mit einer `204`-Antwort ohne Inhalt (und einem expliziten {{HTTPHeader("Content-Length", "Content-Length: 0")}}-Header), was angibt, dass keine weiteren Informationen an den Client gesendet werden müssen.

```http
HTTP/1.1 204 No Content
Date: Wed, 26 Jun 2024 12:00:00 GMT
Server: Apache/2.4.1 (Unix)
Content-Length: 0
```

## Spezifikationen

{{Specifications}}

## Kompatibilitätsnotizen

Obwohl dieser Statuscode für Antworten ohne Inhalt gedacht ist, können Server fälschlicherweise Daten nach den Headern einschließen. Dieses Problem ist bei persistierenden Verbindungen beobachtbar, bei denen der ungültige Inhalt möglicherweise eine deutliche Antwort auf eine nachfolgende Anfrage enthält.
Das HTTP-Protokoll erlaubt es Browsern, solche Antworten unterschiedlich zu behandeln (es gibt eine laufende Diskussion bezüglich des Textes der Spezifikation im [HTTPWG `http-core` GitHub-Repository](https://github.com/httpwg/http-core/issues/26)).

Apple Safari lehnt solche Daten ab.
Google Chrome und Microsoft Edge verwerfen bis zu vier ungültige Bytes, die einer gültigen Antwort vorausgehen.
Firefox toleriert über ein Kilobyte ungültiger Daten, die einer gültigen Antwort vorausgehen.

## Siehe auch

- [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Reference/Methods)
- [HTTP-Antwort-Statuscodes](/de/docs/Web/HTTP/Reference/Status)
