---
title: 204 Kein Inhalt
slug: Web/HTTP/Status/204
l10n:
  sourceCommit: 3f68a9604259dfa862dd741dc88ebc8fb5fa10fe
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`204 Kein Inhalt`** [erfolgreiche Antwort](/de/docs/Web/HTTP/Status#successful_responses) zeigt an, dass eine Anfrage erfolgreich war, der Client jedoch nicht von seiner aktuellen Seite weg navigieren muss. Eine `204`-Antwort ist standardmäßig zwischenspeicherbar, und ein {{HTTPHeader("ETag")}}-Header wird in solchen Fällen hinzugefügt.

Eine `204 Kein Inhalt`-Antwort auf diese Anfragemethoden hat folgende Bedeutung und Ergebnisse:

- {{HTTPMethod("DELETE")}}: Die Aktion war erfolgreich, und es müssen keine weiteren Informationen bereitgestellt werden.
- {{HTTPMethod("PUT")}}: Die Aktion war erfolgreich, und der Wert im {{HTTPHeader("ETag")}} enthält das Entitäts-Tag für die neue Darstellung dieser Zielressource.

Eine `204`-Antwort kann verwendet werden, um "speichern und weiter bearbeiten"-Funktionalität für Anwendungen wie Wiki-Websites zu implementieren. In diesem Fall könnte eine {{HTTPMethod("PUT")}}-Anfrage verwendet werden, um den Seiteninhalt zu speichern, und eine `204 Kein Inhalt`-Antwort weist den Browser an, dass der Editor nicht durch anderen Inhalt ersetzt werden soll.

## Status

```http
204 Kein Inhalt
```

## Beispiele

### Erhalten einer Antwort nach dem Löschen eines Bildes

In diesem Beispiel sendet der Client eine Anfrage zum Löschen eines Bildes mit der `DELETE`-Methode. Die Anfrage enthält einen {{HTTPHeader("Authorization")}}-Header mit einem Token zur Authentifizierung der Anfrage:

```http
DELETE /image/123 HTTP/1.1
Host: example.com
Authorization: Bearer 1234abcd
```

Nach dem erfolgreichen Löschen des Bildes antwortet der Server mit einer `204`-Antwort ohne Inhalt (und einem expliziten {{HTTPHeader("Content-Length", "Content-Length: 0")}}-Header), was anzeigt, dass keine weiteren Informationen an den Client gesendet werden müssen.

```http
HTTP/1.1 204 Kein Inhalt
Date: Wed, 26 Jun 2024 12:00:00 GMT
Server: Apache/2.4.1 (Unix)
Content-Length: 0
```

## Spezifikationen

{{Specifications}}

## Kompatibilitätshinweise

Obwohl dieser Statuscode für Antworten ohne Inhalt gedacht ist, können Server fälschlicherweise Daten nach den Headern hinzufügen. Dieses Problem ist bei persistenten Verbindungen beobachtbar, bei denen der ungültige Körper eine separate Antwort auf eine nachfolgende Anfrage enthalten kann. Das HTTP-Protokoll erlaubt es Browsern, solche Antworten unterschiedlich zu behandeln (es gibt eine laufende Diskussion über den Spezifikationstext im [HTTPWG `http-core` GitHub-Repository](https://github.com/httpwg/http-core/issues/26)).

Apple Safari lehnt solche Daten ab. Google Chrome und Microsoft Edge verwerfen bis zu vier ungültige Bytes, die einer gültigen Antwort vorausgehen. Firefox toleriert über ein Kilobyte ungültiger Daten, die einer gültigen Antwort vorausgehen.

## Siehe auch

- [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Methods)
- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Status)
