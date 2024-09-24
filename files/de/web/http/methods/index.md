---
title: HTTP-Anfragemethoden
short-title: Anfragemethoden
slug: Web/HTTP/Methods
l10n:
  sourceCommit: 260f4700362dffe26227ad3b9cf15335916cef44
---

{{HTTPSidebar}}

HTTP definiert eine Reihe von **Anfragemethoden**, um den Zweck der Anfrage und das zu erwartende Ergebnis bei erfolgreicher Anfrage anzugeben. Obwohl sie auch Substantive sein können, werden diese Anfragemethoden manchmal als _HTTP-Verben_ bezeichnet. Jede Anfragemethode hat ihre eigene Semantik, aber einige Merkmale werden von mehreren Methoden geteilt, insbesondere können Anfragemethoden {{glossary("Safe/HTTP", "sicher")}}, {{glossary("idempotent")}} oder {{glossary("cacheable")}} sein.

- {{HTTPMethod("GET")}}
  - : Die `GET`-Methode fordert eine Repräsentation der angegebenen Ressource an. Anfragen, die `GET` verwenden, sollten nur Daten abrufen und keine Anforderungs-{{Glossary("HTTP Content", "Inhalte")}} enthalten.
- {{HTTPMethod("HEAD")}}
  - : Die `HEAD`-Methode fordert eine Antwort an, die mit einer `GET`-Anfrage identisch ist, jedoch ohne Antwortkörper.
- {{HTTPMethod("POST")}}
  - : Die `POST`-Methode sendet eine Entität an die angegebene Ressource, was oft eine Zustandsänderung oder Nebeneffekte auf dem Server verursacht.
- {{HTTPMethod("PUT")}}
  - : Die `PUT`-Methode ersetzt alle aktuellen Repräsentationen der Zielressource durch die Anforderungs-{{Glossary("HTTP Content", "Inhalte")}}.
- {{HTTPMethod("DELETE")}}
  - : Die `DELETE`-Methode löscht die angegebene Ressource.
- {{HTTPMethod("CONNECT")}}
  - : Die `CONNECT`-Methode etabliert einen Tunnel zum Server, der durch die Zielressource identifiziert wird.
- {{HTTPMethod("OPTIONS")}}
  - : Die `OPTIONS`-Methode beschreibt die Kommunikationsoptionen für die Zielressource.
- {{HTTPMethod("TRACE")}}
  - : Die `TRACE`-Methode führt einen Schleifentest entlang des Pfades zur Zielressource durch.
- {{HTTPMethod("PATCH")}}
  - : Die `PATCH`-Methode wendet partielle Änderungen an einer Ressource an.

## Sichere, idempotente und cachebare Anfragemethoden

Die folgende Tabelle listet HTTP-Anfragemethoden und deren Kategorisierung in Bezug auf Sicherheit, Cachebarkeit und Idempotenz auf.

| Methode                   | Sicher | Idempotent | Cacheable     |
| ------------------------- | ------ | ---------- | ------------- |
| {{HTTPMethod("GET")}}     | Ja     | Ja         | Ja            |
| {{HTTPMethod("HEAD")}}    | Ja     | Ja         | Ja            |
| {{HTTPMethod("OPTIONS")}} | Ja     | Ja         | Nein          |
| {{HTTPMethod("TRACE")}}   | Ja     | Ja         | Nein          |
| {{HTTPMethod("PUT")}}     | Nein   | Ja         | Nein          |
| {{HTTPMethod("DELETE")}}  | Nein   | Ja         | Nein          |
| {{HTTPMethod("POST")}}    | Nein   | Nein       | Bedingt\*     |
| {{HTTPMethod("PATCH")}}   | Nein   | Nein       | Bedingt\*     |
| {{HTTPMethod("CONNECT")}} | Nein   | Nein       | Nein          |

\* `POST` und `PATCH` sind cacheable, wenn die Antworten ausdrücklich [Frischeinformationen](/de/docs/Web/HTTP/Caching) und einen passenden {{HTTPHeader("Content-Location")}}-Header enthalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Status)
- [HTTP-Header](/de/docs/Web/HTTP/Headers)
