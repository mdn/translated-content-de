---
title: HTTP-Anfragemethoden
short-title: Request methods
slug: Web/HTTP/Reference/Methods
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

HTTP definiert eine Reihe von **Anfragemethoden**, um den Zweck der Anfrage anzuzeigen und was erwartet wird, wenn die Anfrage erfolgreich ist.
Obwohl sie auch Substantive sein können, werden diese Anfragemethoden manchmal als _HTTP-Verben_ bezeichnet.
Jede Anfragemethode hat ihre eigene Semantik, aber einige Eigenschaften werden über mehrere Methoden geteilt, insbesondere können Anfragemethoden {{Glossary("Safe/HTTP", "sicher")}}, {{Glossary("idempotent", "idempotent")}} oder {{Glossary("cacheable", "cacheable")}} sein.

- {{HTTPMethod("GET")}}
  - : Die `GET`-Methode fordert eine Darstellung der angegebenen Ressource an.
    Anfragen mit `GET` sollten nur Daten abrufen und keinen Anforderungs-{{Glossary("HTTP_Content", "Inhalt")}} enthalten.
- {{HTTPMethod("HEAD")}}
  - : Die `HEAD`-Methode fordert eine Antwort an, die identisch mit einer `GET`-Anfrage ist, aber ohne einen Antwortkörper.
- {{HTTPMethod("POST")}}
  - : Die `POST`-Methode übermittelt eine Entität an die angegebene Ressource, was oft eine Zustandsänderung oder Seiteneffekte auf dem Server verursacht.
- {{HTTPMethod("PUT")}}
  - : Die `PUT`-Methode ersetzt alle aktuellen Darstellungen der Zielressource mit dem Anforderungs-{{Glossary("HTTP_Content", "Inhalt")}}.
- {{HTTPMethod("DELETE")}}
  - : Die `DELETE`-Methode löscht die angegebene Ressource.
- {{HTTPMethod("CONNECT")}}
  - : Die `CONNECT`-Methode stellt einen Tunnel zum Server her, der durch die Zielressource identifiziert wird.
- {{HTTPMethod("OPTIONS")}}
  - : Die `OPTIONS`-Methode beschreibt die Kommunikationsoptionen für die Zielressource.
- {{HTTPMethod("TRACE")}}
  - : Die `TRACE`-Methode führt einen Nachrichtenrücklauf-Test entlang des Pfads zur Zielressource durch.
- {{HTTPMethod("PATCH")}}
  - : Die `PATCH`-Methode wendet partielle Änderungen auf eine Ressource an.

## Sichere, idempotente und cachefähige Anfragemethoden

Die folgende Tabelle listet HTTP-Anfragemethoden und deren Kategorisierung hinsichtlich Sicherheit, Cachefähigkeit und Idempotenz auf.

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

\* `POST` und `PATCH` sind cachefähig, wenn die Antworten explizit [Frische](/de/docs/Web/HTTP/Guides/Caching)-Informationen und einen passenden {{HTTPHeader("Content-Location")}}-Header enthalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTTP-Antwortstatus-Codes](/de/docs/Web/HTTP/Reference/Status)
- [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers)
