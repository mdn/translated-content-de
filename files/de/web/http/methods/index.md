---
title: HTTP-Anfragemethoden
short-title: Anfragemethoden
slug: Web/HTTP/Methods
l10n:
  sourceCommit: 260f4700362dffe26227ad3b9cf15335916cef44
---

{{HTTPSidebar}}

HTTP definiert eine Reihe von **Anfragemethoden**, um den Zweck der Anfrage anzugeben und was erwartet wird, wenn die Anfrage erfolgreich ist. Obwohl sie auch Substantive sein können, werden diese Anfragemethoden manchmal als _HTTP-Verben_ bezeichnet. Jede Anfragemethode hat ihre eigene Semantik, aber einige Merkmale sind bei mehreren Methoden gemeinsam, insbesondere können Anfragemethoden {{Glossary("Safe/HTTP", "sicher")}}, {{Glossary("idempotent", "idempotent")}} oder {{Glossary("cacheable", "cachefähig")}} sein.

- {{HTTPMethod("GET")}}
  - : Die `GET`-Methode fordert eine Darstellung der angegebenen Ressource an. Anfragen mit `GET` sollten nur Daten abrufen und keinen Anforderungs-{{Glossary("HTTP_Content", "Inhalt")}} enthalten.
- {{HTTPMethod("HEAD")}}
  - : Die `HEAD`-Methode fragt eine Antwort an, die identisch mit einer `GET`-Anfrage ist, jedoch ohne Antwortkörper.
- {{HTTPMethod("POST")}}
  - : Die `POST`-Methode übermittelt eine Entität an die angegebene Ressource, was häufig eine Zustandsänderung oder Nebenwirkungen auf dem Server verursacht.
- {{HTTPMethod("PUT")}}
  - : Die `PUT`-Methode ersetzt alle aktuellen Darstellungen der Zielressource mit dem Anforderungs-{{Glossary("HTTP_Content", "Inhalt")}}.
- {{HTTPMethod("DELETE")}}
  - : Die `DELETE`-Methode löscht die angegebene Ressource.
- {{HTTPMethod("CONNECT")}}
  - : Die `CONNECT`-Methode stellt einen Tunnel zum Server her, der durch die Zielressource identifiziert wird.
- {{HTTPMethod("OPTIONS")}}
  - : Die `OPTIONS`-Methode beschreibt die Kommunikationsoptionen für die Zielressource.
- {{HTTPMethod("TRACE")}}
  - : Die `TRACE`-Methode führt einen Nachrichtenumkehrtest entlang des Pfades zur Zielressource durch.
- {{HTTPMethod("PATCH")}}
  - : Die `PATCH`-Methode wendet teilweise Änderungen an einer Ressource an.

## Sichere, idempotente und cachefähige Anfragemethoden

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

\* `POST` und `PATCH` sind cachefähig, wenn Antworten explizit [Frische](/de/docs/Web/HTTP/Caching)-Informationen und einen passenden {{HTTPHeader("Content-Location")}}-Header enthalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Status)
- [HTTP-Header](/de/docs/Web/HTTP/Headers)
