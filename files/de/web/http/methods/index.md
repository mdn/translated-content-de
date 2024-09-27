---
title: HTTP-Anforderungsmethoden
short-title: Anforderungsmethoden
slug: Web/HTTP/Methods
l10n:
  sourceCommit: 260f4700362dffe26227ad3b9cf15335916cef44
---

{{HTTPSidebar}}

HTTP definiert eine Reihe von **Anforderungsmethoden**, um den Zweck der Anfrage anzugeben und was erwartet wird, wenn die Anfrage erfolgreich ist. Obwohl sie auch Substantive sein können, werden diese Anforderungsmethoden manchmal als _HTTP-Verben_ bezeichnet. Jede Anforderungsmethode hat ihre eigene Semantik, aber einige Merkmale werden über mehrere Methoden hinweg geteilt. Insbesondere können Anforderungsmethoden [sicher](/de/docs/Glossary/Safe/HTTP), [idempotent](/de/docs/Glossary/idempotent) oder [cacheable](/de/docs/Glossary/cacheable) sein.

- {{HTTPMethod("GET")}}
  - : Die `GET`-Methode fordert eine Repräsentation der angegebenen Ressource an. Anfragen mit `GET` sollten nur Daten abrufen und keine Anfrage-[Inhalte](/de/docs/Glossary/HTTP_Content) enthalten.
- {{HTTPMethod("HEAD")}}
  - : Die `HEAD`-Methode fordert eine Antwort an, die mit einer `GET`-Anfrage identisch ist, jedoch ohne Antwortkörper.
- {{HTTPMethod("POST")}}
  - : Die `POST`-Methode übermittelt eine Entität an die angegebene Ressource, was oft eine Zustandsänderung oder Nebeneffekte auf dem Server verursacht.
- {{HTTPMethod("PUT")}}
  - : Die `PUT`-Methode ersetzt alle aktuellen Darstellungen der Zielressource durch die Anfrage-[Inhalte](/de/docs/Glossary/HTTP_Content).
- {{HTTPMethod("DELETE")}}
  - : Die `DELETE`-Methode löscht die angegebene Ressource.
- {{HTTPMethod("CONNECT")}}
  - : Die `CONNECT`-Methode baut einen Tunnel zum Server auf, der durch die Zielressource identifiziert wird.
- {{HTTPMethod("OPTIONS")}}
  - : Die `OPTIONS`-Methode beschreibt die Kommunikationsoptionen für die Zielressource.
- {{HTTPMethod("TRACE")}}
  - : Die `TRACE`-Methode führt einen Nachrichten-Schleifentest entlang des Pfads zur Zielressource durch.
- {{HTTPMethod("PATCH")}}
  - : Die `PATCH`-Methode wendet teilweise Änderungen an einer Ressource an.

## Sichere, idempotente und cachefähige Anforderungsmethoden

Die folgende Tabelle listet HTTP-Anforderungsmethoden und deren Kategorisierung in Bezug auf Sicherheit, Cachefähigkeit und Idempotenz auf.

| Methode                   | Sicher | Idempotent | Cachefähig |
| ------------------------- | ------ | ---------- | ---------- |
| {{HTTPMethod("GET")}}     | Ja     | Ja         | Ja         |
| {{HTTPMethod("HEAD")}}    | Ja     | Ja         | Ja         |
| {{HTTPMethod("OPTIONS")}} | Ja     | Ja         | Nein       |
| {{HTTPMethod("TRACE")}}   | Ja     | Ja         | Nein       |
| {{HTTPMethod("PUT")}}     | Nein   | Ja         | Nein       |
| {{HTTPMethod("DELETE")}}  | Nein   | Ja         | Nein       |
| {{HTTPMethod("POST")}}    | Nein   | Nein       | Bedingt\*  |
| {{HTTPMethod("PATCH")}}   | Nein   | Nein       | Bedingt\*  |
| {{HTTPMethod("CONNECT")}} | Nein   | Nein       | Nein       |

\* `POST` und `PATCH` sind cachefähig, wenn Antworten explizit [Frische](/de/docs/Web/HTTP/Caching) Informationen und einen passenden {{HTTPHeader("Content-Location")}} Header enthalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Status)
- [HTTP-Header](/de/docs/Web/HTTP/Headers)
