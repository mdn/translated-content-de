---
title: Safe (HTTP-Methoden)
slug: Glossary/Safe/HTTP
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

Eine HTTP-Methode ist **sicher**, wenn sie den Zustand des Servers nicht verändert. Anders ausgedrückt, eine Methode ist sicher, wenn sie zu einem reinen Lesezugriff führt. Mehrere gängige HTTP-Methoden sind sicher: {{HTTPMethod("GET")}}, {{HTTPMethod("HEAD")}} oder {{HTTPMethod("OPTIONS")}}. Alle sicheren Methoden sind auch [idempotent](/de/docs/Glossary/idempotent), aber nicht alle idempotenten Methoden sind sicher. Zum Beispiel sind {{HTTPMethod("PUT")}} und {{HTTPMethod("DELETE")}} beide idempotent, aber unsicher.

Auch wenn sichere Methoden eine reine Lese-Semantik haben, können Server ihren Zustand ändern: z. B. können sie protokollieren oder Statistiken führen. Wichtig ist, dass der Client durch den Aufruf einer sicheren Methode selbst keine Änderung des Servers anfordert und daher keine unnötige Last oder Belastung für den Server erzeugt. Browser können sichere Methoden aufrufen, ohne befürchten zu müssen, dem Server Schaden zuzufügen; dies ermöglicht es ihnen, Aktivitäten wie Vorabrufen ohne Risiko durchzuführen. Auch Web-Crawler verlassen sich auf den Aufruf sicherer Methoden.

Sichere Methoden müssen nicht nur statische Dateien bereitstellen; ein Server kann eine Antwort auf eine sichere Methode dynamisch erzeugen, solange das erstellende Skript die Sicherheit garantiert: es sollte keine externen Effekte auslösen, wie z. B. eine Bestellung in einem E-Commerce-Website auszulösen.

Es liegt in der Verantwortung der Anwendung auf dem Server, die sichere Semantik korrekt zu implementieren, der Webserver selbst, sei es Apache, Nginx oder IIS, kann dies nicht selbst durchsetzen. Insbesondere sollte eine Anwendung nicht zulassen, dass {{HTTPMethod("GET")}}-Anfragen ihren Zustand verändern.

Ein Aufruf einer sicheren Methode, der den Zustand des Servers nicht verändert:

```http
GET /pageX.html HTTP/1.1
```

Ein Aufruf einer unsicheren Methode, der den Zustand des Servers möglicherweise verändert:

```http
POST /pageX.html HTTP/1.1
```

Ein Aufruf einer idempotenten, aber nicht sicheren Methode:

```http
DELETE /idX/delete HTTP/1.1
```

## Siehe auch

- Definition von [safe](https://httpwg.org/specs/rfc9110.html#safe.methods) in der HTTP-Spezifikation.
- Beschreibung von häufig verwendeten sicheren Methoden: {{HTTPMethod("GET")}}, {{HTTPMethod("HEAD")}}, {{HTTPMethod("OPTIONS")}}
- Beschreibung von häufig verwendeten unsicheren Methoden: {{HTTPMethod("PUT")}}, {{HTTPMethod("DELETE")}}, {{HTTPMethod("POST")}}
