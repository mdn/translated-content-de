---
title: Safe (HTTP-Methoden)
slug: Glossary/Safe/HTTP
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

Eine HTTP-Methode ist **sicher**, wenn sie den Zustand des Servers nicht verändert. Mit anderen Worten, eine Methode ist sicher, wenn sie zu einem Lesevorgang führt. Mehrere verbreitete HTTP-Methoden sind sicher: {{HTTPMethod("GET")}}, {{HTTPMethod("HEAD")}} oder {{HTTPMethod("OPTIONS")}}. Alle sicheren Methoden sind auch {{glossary("idempotent")}}, aber nicht alle idempotenten Methoden sind sicher. Zum Beispiel sind {{HTTPMethod("PUT")}} und {{HTTPMethod("DELETE")}} beide idempotent, aber unsicher.

Auch wenn sichere Methoden eine Lese-Only-Semantik haben, können Server ihren Zustand ändern: z. B. können sie protokollieren oder Statistiken führen. Wichtig ist hier, dass der Client durch den Aufruf einer sicheren Methode keine Änderung des Servers selbst anfordert und daher keine unnötige Belastung für den Server schafft. Browser können sichere Methoden aufrufen, ohne befürchten zu müssen, dem Server Schaden zuzufügen; dies ermöglicht ihnen, Aktivitäten wie Pre-Fetching ohne Risiko auszuführen. Web-Crawler verlassen sich ebenfalls auf den Aufruf sicherer Methoden.

Sichere Methoden müssen nicht nur statische Dateien bereitstellen; ein Server kann eine Antwort auf eine sichere Methode auch dynamisch generieren, solange das generierende Skript die Sicherheit garantiert: Es sollte keine externen Effekte auslösen, wie das Auslösen einer Bestellung auf einer E-Commerce-Website.

Es liegt in der Verantwortung der Anwendung auf dem Server, die sichere Semantik korrekt zu implementieren; der Webserver selbst, sei es Apache, Nginx oder IIS, kann dies nicht eigenständig durchsetzen. Insbesondere sollte eine Anwendung keine {{HTTPMethod("GET")}}-Anfragen zulassen, die ihren Zustand verändern.

Ein Aufruf einer sicheren Methode, der den Zustand des Servers nicht ändert:

```http
GET /pageX.html HTTP/1.1
```

Ein Aufruf einer unsicheren Methode, die den Zustand des Servers ändern kann:

```http
POST /pageX.html HTTP/1.1
```

Ein Aufruf einer idempotenten, aber nicht sicheren Methode:

```http
DELETE /idX/delete HTTP/1.1
```

## Siehe auch

- Definition von [safe](https://httpwg.org/specs/rfc9110.html#safe.methods) in der HTTP-Spezifikation.
- Beschreibung gängiger sicherer Methoden: {{HTTPMethod("GET")}}, {{HTTPMethod("HEAD")}}, {{HTTPMethod("OPTIONS")}}
- Beschreibung gängiger unsicherer Methoden: {{HTTPMethod("PUT")}}, {{HTTPMethod("DELETE")}}, {{HTTPMethod("POST")}}
