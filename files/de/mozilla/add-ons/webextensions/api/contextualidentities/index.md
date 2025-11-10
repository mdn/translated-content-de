---
title: contextualIdentities
slug: Mozilla/Add-ons/WebExtensions/API/contextualIdentities
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Arbeiten Sie mit kontextuellen Identitäten: Listen, Erstellen, Entfernen und Aktualisieren von kontextuellen Identitäten.

"Kontextuelle Identitäten", auch bekannt als "Container", sind eine Browser-Funktion, die es Nutzern ermöglicht, beim Surfen im Internet mehrere Identitäten anzunehmen und eine gewisse Trennung zwischen diesen Identitäten zu wahren. Zum Beispiel könnte ein Nutzer seine "Arbeitsidentität" von seiner "persönlichen Identität" getrennt betrachten und keine Cookies zwischen diesen beiden Kontexten teilen wollen.

Mit der Funktion der kontextuellen Identitäten hat jede kontextuelle Identität einen Namen, eine Farbe und ein Symbol. Neue Tabs können einer Identität zugewiesen werden, und der Name, das Symbol und die Farbe erscheinen in der Adressleiste. Intern erhält jede Identität einen Cookie-Speicher, der nicht mit anderen Tabs geteilt wird. Dieser Cookie-Speicher wird in dieser und anderen APIs durch die `cookieStoreId` identifiziert.

![Ein Kontextmenü mit hervorgehobenem Untermenü "in neuem Containertab öffnen". Das Untermenü zeigt persönliche, Arbeits-, Bank- und Einkaufs-Kontainertilitäten.](containers.png)

Kontextuelle Identitäten sind ein experimentelles Feature in Firefox und nur standardmäßig in Firefox Nightly aktiviert. Um sie in anderen Versionen von Firefox zu aktivieren, setzen Sie die Einstellung `privacy.userContext.enabled` auf `true`. Beachten Sie, dass kontextuelle Identitäten zwar in Firefox für Android verfügbar sind, es jedoch in dieser Version des Browsers keine Benutzeroberfläche gibt, um mit ihnen zu arbeiten.

Vor Firefox 57 ist die `contextualIdentities` API nur verfügbar, wenn das Feature der kontextuellen Identitäten selbst aktiviert ist. Wenn eine Erweiterung versuchte, die `contextualIdentities` API zu verwenden, ohne dass das Feature aktiviert war, würden die Methodenaufrufe ihre Versprechen mit `false` auflösen.

Ab Firefox 57 wird das Feature der kontextuellen Identitäten automatisch aktiviert, wenn eine Erweiterung installiert wird, die die `contextualIdentities` API verwendet. Beachten Sie jedoch, dass es für den Benutzer immer noch möglich ist, das Feature über die Einstellung "privacy.userContext.enabled" zu deaktivieren. Wenn dies passiert, werden die Methodenaufrufe der `contextualIdentities` ihre Versprechen mit einer Fehlermeldung ablehnen.

Siehe [Arbeiten mit kontextuellen Identitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities) für weitere Informationen.

Kontextuelle Identitäten werden in keinem anderen Browser unterstützt.

Um diese API zu verwenden, müssen Sie die Berechtigungen "contextualIdentities" und "cookies" in Ihrer [manifest.json](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json)-Datei einschließen.

## Typen

- {{WebExtAPIRef("contextualIdentities.ContextualIdentity")}}
  - : Enthält Informationen über eine kontextuelle Identität.

## Funktionen

- {{WebExtAPIRef("contextualIdentities.create()")}}
  - : Erstellt eine neue kontextuelle Identität.
- {{WebExtAPIRef("contextualIdentities.get()")}}
  - : Ruft eine kontextuelle Identität ab, wenn die Cookie-Speicher-ID angegeben ist.
- {{WebExtAPIRef("contextualIdentities.move()")}}
  - : Verschiebt eine oder mehrere kontextuelle Identitäten innerhalb der Liste der kontextuellen Identitäten.
- {{WebExtAPIRef("contextualIdentities.query()")}}
  - : Ruft alle kontextuellen Identitäten ab oder alle kontextuellen Identitäten mit einem bestimmten Namen.
- {{WebExtAPIRef("contextualIdentities.update()")}}
  - : Aktualisiert Eigenschaften einer bestehenden kontextuellen Identität.
- {{WebExtAPIRef("contextualIdentities.remove()")}}
  - : Löscht eine kontextuelle Identität.

## Ereignisse

- {{WebExtAPIRef("contextualIdentities.onCreated")}}
  - : Wird ausgelöst, wenn eine kontextuelle Identität erstellt wird.
- {{WebExtAPIRef("contextualIdentities.onRemoved")}}
  - : Wird ausgelöst, wenn eine kontextuelle Identität entfernt wird.
- {{WebExtAPIRef("contextualIdentities.onUpdated")}}
  - : Wird ausgelöst, wenn eine oder mehrere Eigenschaften einer kontextuellen Identität aktualisiert werden.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}
