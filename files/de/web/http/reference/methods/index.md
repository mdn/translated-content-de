---
title: HTTP-Anfragemethoden
short-title: Request methods
slug: Web/HTTP/Reference/Methods
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

HTTP definiert eine Reihe von **Anfragemethoden**, um den Zweck der Anfrage anzugeben und was erwartet wird, wenn die Anfrage erfolgreich ist.
Obwohl sie auch Substantive sein können, werden diese Anfragemethoden manchmal als _HTTP-Verben_ bezeichnet.
Jede Anfragemethode hat ihre eigenen Semantiken, aber einige Eigenschaften werden über mehrere Methoden hinweg geteilt. Insbesondere können Anfragemethoden {{Glossary("Safe/HTTP", "sicher")}}, {{Glossary("idempotent", "idempotent")}} oder {{Glossary("cacheable", "cacheable")}} sein.

- {{HTTPMethod("GET")}}
  - : Die `GET`-Methode fordert eine Darstellung der angegebenen Ressource an.
    Anfragen, die `GET` verwenden, sollten nur Daten abrufen und keinen Anfrage-{{Glossary("HTTP_Content", "Inhalt")}} enthalten.
- {{HTTPMethod("HEAD")}}
  - : Die `HEAD`-Methode verlangt eine Antwort, die mit einer `GET`-Anfrage identisch ist, jedoch ohne Antwortkörper.
- {{HTTPMethod("POST")}}
  - : Die `POST`-Methode übermittelt eine Entität an die angegebene Ressource, was oft eine Zustandsänderung oder Nebeneffekte auf dem Server verursacht.
- {{HTTPMethod("PUT")}}
  - : Die `PUT`-Methode ersetzt alle aktuellen Darstellungen der Zielressource durch den Anfrage-{{Glossary("HTTP_Content", "Inhalt")}}.
- {{HTTPMethod("DELETE")}}
  - : Die `DELETE`-Methode löscht die angegebene Ressource.
- {{HTTPMethod("CONNECT")}}
  - : Die `CONNECT`-Methode etabliert einen Tunnel zum vom Zielressource identifizierten Server.
- {{HTTPMethod("OPTIONS")}}
  - : Die `OPTIONS`-Methode beschreibt die Kommunikationsoptionen für die Zielressource.
- {{HTTPMethod("TRACE")}}
  - : Die `TRACE`-Methode führt einen Nachrichtenschleifen-Test entlang des Pfads zur Zielressource durch.
- {{HTTPMethod("PATCH")}}
  - : Die `PATCH`-Methode wendet partielle Modifikationen auf eine Ressource an.

## Sichere, idempotente und cacheable Anfragemethoden

Die folgende Tabelle listet HTTP-Anfragemethoden und deren Kategorisierung in Bezug auf Sicherheit, Cachefähigkeit und Idempotenz auf.

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

\* `POST` und `PATCH` sind cachefähig, wenn Antworten explizit [Frische](/de/docs/Web/HTTP/Guides/Caching)-Informationen und einen passenden {{HTTPHeader("Content-Location")}}-Header enthalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status)
- [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers)
