---
title: Safe (HTTP-Methoden)
slug: Glossary/Safe/HTTP
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Eine HTTP-Methode ist **sicher**, wenn sie den Zustand des Servers nicht verändert. Mit anderen Worten, eine Methode ist sicher, wenn sie zu einem schreibgeschützten Vorgang führt. Mehrere gängige HTTP-Methoden sind sicher: {{HTTPMethod("GET")}}, {{HTTPMethod("HEAD")}} oder {{HTTPMethod("OPTIONS")}}. Alle sicheren Methoden sind auch {{Glossary("idempotent", "idempotent")}}, aber nicht alle idempotenten Methoden sind sicher. Zum Beispiel sind {{HTTPMethod("PUT")}} und {{HTTPMethod("DELETE")}} beide idempotent, aber unsicher.

Auch wenn sichere Methoden eine schreibgeschützte Semantik haben, können Server ihren Zustand ändern: z.B. können sie protokollieren oder Statistiken führen. Wichtig ist hier, dass der Client durch den Aufruf einer sicheren Methode keine Änderung des Servers selbst anfordert und daher keine unnötige Last oder Belastung für den Server erzeugt. Browser können sichere Methoden aufrufen, ohne befürchten zu müssen, dem Server Schaden zuzufügen; dies ermöglicht es ihnen, Aktivitäten wie Pre-Fetching ohne Risiko durchzuführen. Web-Crawler verlassen sich ebenfalls darauf, sichere Methoden aufzurufen.

Sichere Methoden müssen nicht nur statische Dateien bereitstellen; ein Server kann eine Antwort auf eine sichere Methode spontan generieren, solange das erzeugende Skript Sicherheit garantiert: Es sollte keine externen Effekte auslösen, wie z.B. eine Bestellung in einem E-Commerce-Webseite auszulösen.

Es liegt in der Verantwortung der Anwendung auf dem Server, die sichere Semantik korrekt zu implementieren, da der Webserver selbst, sei es Apache, Nginx oder IIS, sie nicht eigenständig erzwingen kann. Insbesondere sollte eine Anwendung nicht zulassen, dass {{HTTPMethod("GET")}}-Anfragen ihren Zustand ändern.

Ein Aufruf einer sicheren Methode, die den Zustand des Servers nicht ändert:

```http
GET /pageX.html HTTP/1.1
```

Ein Aufruf einer unsicheren Methode, die den Zustand des Servers ändern könnte:

```http
POST /pageX.html HTTP/1.1
```

Ein Aufruf einer idempotenten, aber unsicheren Methode:

```http
DELETE /idX/delete HTTP/1.1
```

## Siehe auch

- Definition von [sicher](https://httpwg.org/specs/rfc9110.html#safe.methods) in der HTTP-Spezifikation.
- Beschreibung häufiger sicherer Methoden: {{HTTPMethod("GET")}}, {{HTTPMethod("HEAD")}}, {{HTTPMethod("OPTIONS")}}
- Beschreibung häufiger unsicherer Methoden: {{HTTPMethod("PUT")}}, {{HTTPMethod("DELETE")}}, {{HTTPMethod("POST")}}
