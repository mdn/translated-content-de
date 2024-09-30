---
title: Safe (HTTP-Methoden)
slug: Glossary/Safe/HTTP
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

Eine HTTP-Methode ist **sicher**, wenn sie den Zustand des Servers nicht verändert. Anders ausgedrückt ist eine Methode sicher, wenn sie zu einer Leseoperation führt. Mehrere gebräuchliche HTTP-Methoden sind sicher: {{HTTPMethod("GET")}}, {{HTTPMethod("HEAD")}} oder {{HTTPMethod("OPTIONS")}}. Alle sicheren Methoden sind auch [idempotent](/de/docs/Glossary/idempotent), aber nicht alle idempotenten Methoden sind sicher. Beispielsweise sind {{HTTPMethod("PUT")}} und {{HTTPMethod("DELETE")}} beide idempotent, aber unsicher.

Auch wenn sichere Methoden eine schreibgeschützte Semantik haben, können Server ihren Zustand verändern: z.B. können sie Protokolle führen oder Statistiken erfassen. Wichtig ist hier, dass der Client durch Aufrufen einer sicheren Methode selbst keine Serveränderung anfordert und daher keine unnötige Belastung für den Server erzeugt. Browser können sichere Methoden aufrufen, ohne befürchten zu müssen, dem Server Schaden zuzufügen; dies ermöglicht ihnen, Aktivitäten wie Vorabruf ohne Risiko auszuführen. Webcrawler verlassen sich auch auf das Aufrufen sicherer Methoden.

Sichere Methoden müssen nicht nur statische Dateien bereitstellen; ein Server kann eine Antwort auf eine sichere Methode dynamisch generieren, solange das generierende Skript die Sicherheit garantiert: es sollte keine externen Effekte auslösen, wie z.B. eine Bestellung in einem E-Commerce-Website auszulösen.

Es liegt in der Verantwortung der Anwendung auf dem Server, die sichere Semantik korrekt zu implementieren, der Webserver selbst, sei es Apache, Nginx oder IIS, kann dies nicht von selbst durchsetzen. Insbesondere sollte eine Anwendung keine {{HTTPMethod("GET")}}-Anfragen zulassen, die ihren Zustand verändern.

Ein Aufruf einer sicheren Methode, der den Zustand des Servers nicht verändert:

```http
GET /pageX.html HTTP/1.1
```

Ein Aufruf einer unsicheren Methode, der den Zustand des Servers ändern kann:

```http
POST /pageX.html HTTP/1.1
```

Ein Aufruf einer idempotenten, aber unsicheren Methode:

```http
DELETE /idX/delete HTTP/1.1
```

## Siehe auch

- Definition von [safe](https://httpwg.org/specs/rfc9110.html#safe.methods) in der HTTP-Spezifikation.
- Beschreibung der allgemeinen sicheren Methoden: {{HTTPMethod("GET")}}, {{HTTPMethod("HEAD")}}, {{HTTPMethod("OPTIONS")}}
- Beschreibung der allgemeinen unsicheren Methoden: {{HTTPMethod("PUT")}}, {{HTTPMethod("DELETE")}}, {{HTTPMethod("POST")}}
