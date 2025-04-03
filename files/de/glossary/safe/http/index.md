---
title: Sicher (HTTP-Methoden)
slug: Glossary/Safe/HTTP
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{GlossarySidebar}}

Eine HTTP-Methode ist **sicher**, wenn sie den Zustand des Servers nicht verändert. Mit anderen Worten, eine Methode ist sicher, wenn sie zu einer nur-lese-Operation führt. Mehrere gängige HTTP-Methoden sind sicher: {{HTTPMethod("GET")}}, {{HTTPMethod("HEAD")}}, oder {{HTTPMethod("OPTIONS")}}. Alle sicheren Methoden sind auch {{Glossary("idempotent", "idempotent")}}, aber nicht alle idempotenten Methoden sind sicher. Zum Beispiel sind {{HTTPMethod("PUT")}} und {{HTTPMethod("DELETE")}} beide idempotent, aber unsicher.

Selbst wenn sichere Methoden eine nur-lese-Semantik haben, können Server ihren Zustand verändern: z. B. können sie Protokolle führen oder Statistiken speichern. Wichtig ist hier, dass durch den Aufruf einer sicheren Methode der Client selbst keine Änderung des Servers anfordert und daher keine unnötige Last oder Belastung für den Server schafft. Browser können sichere Methoden aufrufen, ohne befürchten zu müssen, dem Server Schaden zuzufügen; dies ermöglicht ihnen beispielsweise das Vorabrufen ohne Risiko. Auch Webcrawler verlassen sich auf das Aufrufen sicherer Methoden.

Sichere Methoden müssen nicht nur statische Dateien liefern; ein Server kann eine Antwort auf eine sichere Methode auch dynamisch erzeugen, solange das generierende Skript die Sicherheit garantiert: es sollte keine externen Effekte auslösen, wie z.B. das Auslösen einer Bestellung auf einer E-Commerce-Webseite.

Es liegt in der Verantwortung der Anwendung auf dem Server, die sichere Semantik korrekt zu implementieren. Der Webserver selbst, sei es Apache, Nginx oder IIS, kann diese nicht von sich aus erzwingen. Insbesondere sollte eine Anwendung keine {{HTTPMethod("GET")}}-Anfragen zulassen, die ihren Zustand verändern.

Ein Aufruf einer sicheren Methode, der den Zustand des Servers nicht verändert:

```http
GET /pageX.html HTTP/1.1
```

Ein Aufruf einer nicht-sicheren Methode, der den Zustand des Servers möglicherweise verändert:

```http
POST /pageX.html HTTP/1.1
```

Ein Aufruf einer idempotenten, aber nicht-sicheren Methode:

```http
DELETE /idX/delete HTTP/1.1
```

## Siehe auch

- Definition von [sicher](https://httpwg.org/specs/rfc9110.html#safe.methods) in der HTTP-Spezifikation.
- Beschreibung der gängigen sicheren Methoden: {{HTTPMethod("GET")}}, {{HTTPMethod("HEAD")}}, {{HTTPMethod("OPTIONS")}}
- Beschreibung der gängigen unsicheren Methoden: {{HTTPMethod("PUT")}}, {{HTTPMethod("DELETE")}}, {{HTTPMethod("POST")}}
