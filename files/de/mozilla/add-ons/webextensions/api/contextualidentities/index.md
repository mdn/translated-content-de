---
title: kontextbezogeneIdentitäten
slug: Mozilla/Add-ons/WebExtensions/API/contextualIdentities
l10n:
  sourceCommit: ec8d5627e822d866f350d9d8c06f0df58948015e
---

{{AddonSidebar}}

Arbeiten Sie mit kontextbezogenen Identitäten: Listen, Erstellen, Entfernen und Aktualisieren kontextbezogener Identitäten.

"Kontextbezogene Identitäten", auch bekannt als "Container", sind eine Browserfunktion, die es Nutzern ermöglicht, mehrere Identitäten beim Surfen im Internet anzunehmen und eine gewisse Trennung zwischen diesen Identitäten aufrechtzuerhalten. Zum Beispiel könnte ein Nutzer seine "Arbeitsidentität" getrennt von seiner "persönlichen Identität" betrachten und nicht möchten, dass Cookies zwischen diesen beiden Kontexten geteilt werden.

Mit der Funktion der kontextbezogenen Identitäten hat jede kontextbezogene Identität einen Namen, eine Farbe und ein Symbol. Neue Tabs können einer Identität zugewiesen werden, und Name, Symbol und Farbe erscheinen in der Adressleiste. Intern erhält jede Identität einen Cookie-Speicher, der nicht mit anderen Tabs geteilt wird. Dieser Cookie-Speicher wird durch die `cookieStoreId` in diesem und anderen APIs identifiziert.

![Ein Kontextmenü mit hervorgehobenem Untermenü "In neuem Container-Tab öffnen". Das Untermenü zeigt persönliche, Arbeits-, Bank- und Einkaufsidentitäten.](containers.png)

Kontextbezogene Identitäten sind eine experimentelle Funktion in Firefox und sind standardmäßig nur in Firefox Nightly aktiviert. Um sie in anderen Firefox-Versionen zu aktivieren, setzen Sie die Einstellung `privacy.userContext.enabled` auf `true`. Beachten Sie, dass kontextbezogene Identitäten zwar in Firefox für Android verfügbar sind, es jedoch keine Benutzeroberfläche gibt, um mit ihnen in dieser Browserversion zu arbeiten.

Vor Firefox 57 ist die `contextualIdentities`-API nur verfügbar, wenn die Funktion der kontextbezogenen Identitäten selbst aktiviert ist. Falls eine Erweiterung versucht, die `contextualIdentities`-API zu verwenden, ohne dass die Funktion aktiviert ist, werden die Methodenaufrufe ihre Versprechen mit `false` lösen.

Ab Firefox 57 wird die Funktion der kontextbezogenen Identitäten automatisch aktiviert, wenn eine Erweiterung installiert ist, die die `contextualIdentities`-API verwendet. Beachten Sie jedoch, dass der Nutzer die Funktion immer noch mit der Einstellung "privacy.userContext.enabled" deaktivieren kann. Wenn dies geschieht, werden die `contextualIdentities`-Methodenaufrufe deren Versprechen mit einer Fehlermeldung ablehnen.

Siehe [Arbeiten mit kontextbezogenen Identitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities) für weitere Informationen.

Kontextbezogene Identitäten werden in keinen anderen Browsern unterstützt.

Um diese API zu verwenden, müssen Sie die Berechtigungen "contextualIdentities" und "cookies" in Ihre [manifest.json](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) Datei aufnehmen.

## Typen

- {{WebExtAPIRef("contextualIdentities.ContextualIdentity")}}
  - : Enthält Informationen über eine kontextbezogene Identität.

## Funktionen

- {{WebExtAPIRef("contextualIdentities.create()")}}
  - : Erstellt eine neue kontextbezogene Identität.
- {{WebExtAPIRef("contextualIdentities.get()")}}
  - : Ruft eine kontextbezogene Identität ab, gegeben ihre Cookie-Store-ID.
- {{WebExtAPIRef("contextualIdentities.move()")}}
  - : Verschiebt eine oder mehrere kontextbezogene Identitäten innerhalb der Liste der kontextbezogenen Identitäten.
- {{WebExtAPIRef("contextualIdentities.query()")}}
  - : Ruft alle kontextbezogenen Identitäten oder alle kontextbezogenen Identitäten mit einem bestimmten Namen ab.
- {{WebExtAPIRef("contextualIdentities.update()")}}
  - : Aktualisiert die Eigenschaften einer vorhandenen kontextbezogenen Identität.
- {{WebExtAPIRef("contextualIdentities.remove()")}}
  - : Löscht eine kontextbezogene Identität.

## Ereignisse

- {{WebExtAPIRef("contextualIdentities.onCreated")}}
  - : Wird ausgelöst, wenn eine kontextbezogene Identität erstellt wird.
- {{WebExtAPIRef("contextualIdentities.onRemoved")}}
  - : Wird ausgelöst, wenn eine kontextbezogene Identität entfernt wird.
- {{WebExtAPIRef("contextualIdentities.onUpdated")}}
  - : Wird ausgelöst, wenn eine oder mehrere Eigenschaften einer kontextbezogenen Identität aktualisiert werden.

## Browserkompatibilität

{{Compat}}

{{WebExtExamples("h2")}}
