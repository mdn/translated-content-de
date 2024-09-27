---
title: contextualIdentities
slug: Mozilla/Add-ons/WebExtensions/API/contextualIdentities
l10n:
  sourceCommit: ec8d5627e822d866f350d9d8c06f0df58948015e
---

{{AddonSidebar}}

Arbeiten Sie mit kontextuellen Identitäten: Listen, Erstellen, Entfernen und Aktualisieren von kontextuellen Identitäten.

"Kontextuelle Identitäten", auch bekannt als "Container", sind eine Browserfunktion, die es Nutzern ermöglicht, beim Surfen im Internet mehrere Identitäten anzunehmen und eine gewisse Trennung zwischen diesen Identitäten beizubehalten. Beispielsweise könnte ein Nutzer seine "Arbeitsidentität" von seiner "persönlichen Identität" getrennt halten und keine Cookies zwischen diesen beiden Kontexten teilen wollen.

Mit der Funktion für kontextuelle Identitäten hat jede Identität einen Namen, eine Farbe und ein Symbol. Neue Tabs können einer Identität zugewiesen werden, und der Name, das Symbol und die Farbe erscheinen in der Adressleiste. Intern erhält jede Identität einen Cookie-Speicher, der nicht mit anderen Tabs geteilt wird. Dieser Cookie-Speicher wird durch die `cookieStoreId` in diesen und anderen APIs identifiziert.

![Ein Kontextmenü mit hervorgehobenem Untermenü "In neuem Container-Tab öffnen". Das Untermenü zeigt persönliche, Arbeits-, Bank- und Einkaufs-Kontext-Identitäten.](containers.png)

Kontextuelle Identitäten sind ein experimentelles Feature in Firefox und nur standardmäßig in Firefox Nightly aktiviert. Um sie in anderen Versionen von Firefox zu aktivieren, setzen Sie die Einstellung `privacy.userContext.enabled` auf `true`. Beachten Sie, dass kontextuelle Identitäten zwar in Firefox für Android verfügbar sind, es in dieser Version des Browsers jedoch keine Benutzeroberfläche gibt, um mit ihnen zu arbeiten.

Vor Firefox 57 ist die `contextualIdentities` API nur verfügbar, wenn die Funktion der kontextuellen Identitäten selbst aktiviert ist. Wenn eine Erweiterung versucht, die `contextualIdentities` API ohne aktivierte Funktion zu verwenden, würden die Methodenaufrufe ihre Versprechungen mit `false` auflösen.

Ab Firefox 57 wird, wenn eine Erweiterung, die die `contextualIdentities` API verwendet, installiert ist, die Funktion der kontextuellen Identitäten automatisch aktiviert. Beachten Sie jedoch, dass es für den Nutzer weiterhin möglich ist, die Funktion über die Einstellung "privacy.userContext.enabled" zu deaktivieren. In diesem Fall werden die Methodenaufrufe von `contextualIdentities` ihre Versprechungen mit einer Fehlermeldung ablehnen.

Weitere Informationen finden Sie unter [Arbeiten mit kontextuellen Identitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities).

Kontextuelle Identitäten werden in keinem anderen Browser unterstützt.

Um diese API zu verwenden, müssen Sie die Berechtigungen "contextualIdentities" und "cookies" in Ihrer [manifest.json](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) Datei einschließen.

## Typen

- {{WebExtAPIRef("contextualIdentities.ContextualIdentity")}}
  - : Enthält Informationen über eine kontextuelle Identität.

## Funktionen

- {{WebExtAPIRef("contextualIdentities.create()")}}
  - : Erstellt eine neue kontextuelle Identität.
- {{WebExtAPIRef("contextualIdentities.get()")}}
  - : Ruft eine kontextuelle Identität ab, wenn deren Cookie-Store-ID angegeben ist.
- {{WebExtAPIRef("contextualIdentities.move()")}}
  - : Verschiebt eine oder mehrere kontextuelle Identitäten innerhalb der Liste der kontextuellen Identitäten.
- {{WebExtAPIRef("contextualIdentities.query()")}}
  - : Ruft alle kontextuellen Identitäten ab oder alle kontextuellen Identitäten mit einem bestimmten Namen.
- {{WebExtAPIRef("contextualIdentities.update()")}}
  - : Aktualisiert die Eigenschaften einer bestehenden kontextuellen Identität.
- {{WebExtAPIRef("contextualIdentities.remove()")}}
  - : Löscht eine kontextuelle Identität.

## Ereignisse

- {{WebExtAPIRef("contextualIdentities.onCreated")}}
  - : Wird ausgelöst, wenn eine kontextuelle Identität erstellt wird.
- {{WebExtAPIRef("contextualIdentities.onRemoved")}}
  - : Wird ausgelöst, wenn eine kontextuelle Identität entfernt wird.
- {{WebExtAPIRef("contextualIdentities.onUpdated")}}
  - : Wird ausgelöst, wenn eine oder mehrere Eigenschaften einer kontextuellen Identität aktualisiert werden.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples("h2")}}
