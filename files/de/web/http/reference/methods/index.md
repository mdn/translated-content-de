---
title: HTTP-Anfragemethoden
short-title: Request methods
slug: Web/HTTP/Reference/Methods
l10n:
  sourceCommit: 346e46c6e10334bf60df2a0a4ef58ebea4c80a4e
---

HTTP definiert eine Reihe von **Anfragemethoden**, die den Zweck einer Anfrage und das erwartete Ergebnis bei erfolgreicher Verarbeitung angeben.
Obwohl sie auch Substantive sein können, werden diese Anfragemethoden manchmal als _HTTP-Verben_ bezeichnet.
Jede Anfragemethode hat ihre eigene Semantik, einige Eigenschaften gelten jedoch für mehrere Methoden: Anfragemethoden können {{Glossary("Safe/HTTP", "sicher")}}, {{Glossary("idempotent", "idempotent")}} oder {{Glossary("cacheable", "cachebar")}} sein.

- {{HTTPMethod("GET")}}
  - : Die Methode `GET` fordert eine Repräsentation der angegebenen Ressource an.
    Anfragen mit `GET` sollten nur Daten abrufen und keinen {{Glossary("HTTP_Content", "Anfrageinhalt")}} enthalten.
- {{HTTPMethod("QUERY")}}
  - : Die Methode `QUERY` startet eine serverseitige Abfrage. Sie fordert die Zielressource auf, den Anfrageinhalt auf sichere und idempotente Weise zu verarbeiten und das Ergebnis in der Antwort zurückzugeben.
    Sie ähnelt `GET`, erlaubt aber Anfrageinhalte mit definierter Semantik.
- {{HTTPMethod("HEAD")}}
  - : Die Methode `HEAD` fordert eine Antwort an, die mit der auf eine `GET`-Anfrage identisch ist, jedoch keinen Antwortkörper enthält.
- {{HTTPMethod("POST")}}
  - : Die Methode `POST` übermittelt eine Entität an die angegebene Ressource, was häufig eine Zustandsänderung oder andere Nebeneffekte auf dem Server bewirkt.
- {{HTTPMethod("PUT")}}
  - : Die Methode `PUT` ersetzt alle aktuellen Repräsentationen der Zielressource durch den {{Glossary("HTTP_Content", "Anfrageinhalt")}}.
- {{HTTPMethod("DELETE")}}
  - : Die Methode `DELETE` löscht die angegebene Ressource.
- {{HTTPMethod("CONNECT")}}
  - : Die Methode `CONNECT` stellt einen Tunnel zum Server her, der durch die Zielressource identifiziert wird.
- {{HTTPMethod("OPTIONS")}}
  - : Die Methode `OPTIONS` beschreibt die Kommunikationsoptionen für die Zielressource.
- {{HTTPMethod("TRACE")}}
  - : Die Methode `TRACE` führt einen Nachrichten-Loopback-Test entlang des Pfads zur Zielressource durch.
- {{HTTPMethod("PATCH")}}
  - : Die Methode `PATCH` nimmt teilweise Änderungen an einer Ressource vor.

## Sichere, idempotente und cachebare Anfragemethoden

Die folgende Tabelle führt HTTP-Anfragemethoden und ihre Einordnung hinsichtlich Sicherheit, Cachebarkeit und Idempotenz auf.

| Methode                   | Sicher | Idempotent | Cachebar  |
| ------------------------- | ------ | ---------- | --------- |
| {{HTTPMethod("GET")}}     | Ja     | Ja         | Ja        |
| {{HTTPMethod("QUERY")}}   | Ja     | Ja         | Ja        |
| {{HTTPMethod("HEAD")}}    | Ja     | Ja         | Ja        |
| {{HTTPMethod("OPTIONS")}} | Ja     | Ja         | Nein      |
| {{HTTPMethod("TRACE")}}   | Ja     | Ja         | Nein      |
| {{HTTPMethod("PUT")}}     | Nein   | Ja         | Nein      |
| {{HTTPMethod("DELETE")}}  | Nein   | Ja         | Nein      |
| {{HTTPMethod("POST")}}    | Nein   | Nein       | Bedingt\* |
| {{HTTPMethod("PATCH")}}   | Nein   | Nein       | Bedingt\* |
| {{HTTPMethod("CONNECT")}} | Nein   | Nein       | Nein      |

\* `POST` und `PATCH` sind cachebar, wenn die Antworten ausdrücklich [Informationen zur Aktualität](/de/docs/Web/HTTP/Guides/Caching) und einen passenden {{HTTPHeader("Content-Location")}}-Header enthalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status)
- [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers)
