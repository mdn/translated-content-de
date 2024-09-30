---
title: contextualIdentities
slug: Mozilla/Add-ons/WebExtensions/API/contextualIdentities
l10n:
  sourceCommit: ec8d5627e822d866f350d9d8c06f0df58948015e
---

{{AddonSidebar}}

Arbeiten Sie mit kontextuellen Identitäten: auflisten, erstellen, entfernen und aktualisieren von kontextuellen Identitäten.

"Kontextuelle Identitäten", auch bekannt als "Container", sind eine Browserfunktion, die es Nutzern ermöglicht, mehrere Identitäten beim Surfen im Web anzunehmen und eine gewisse Trennung zwischen diesen Identitäten aufrechtzuerhalten. Beispielsweise könnte ein Nutzer seine "Arbeitsidentität" von seiner "persönlichen Identität" trennen und nicht möchten, dass Cookies zwischen diesen beiden Kontexten geteilt werden.

Mit der Funktion für kontextuelle Identitäten hat jede kontextuelle Identität einen Namen, eine Farbe und ein Symbol. Neue Tabs können einer Identität zugewiesen werden, und der Name, das Symbol und die Farbe erscheinen in der Adressleiste. Intern erhält jede Identität einen Cookie-Store, der nicht mit anderen Tabs geteilt wird. Dieser Cookie-Store wird durch den `cookieStoreId` in dieser und anderen APIs identifiziert.

![Ein Kontextmenü mit dem hervorgehobenen Untermenü "In neuem Container-Tab öffnen". Das Untermenü zeigt persönliche, Arbeits-, Bank- und Shopping-kontextuelle Identitäten.](containers.png)

Kontextuelle Identitäten sind ein experimentelles Feature in Firefox und sind standardmäßig nur in Firefox Nightly aktiviert. Um sie in anderen Firefox-Versionen zu aktivieren, setzen Sie die Einstellung `privacy.userContext.enabled` auf `true`. Beachten Sie, dass kontextuelle Identitäten zwar in Firefox für Android verfügbar sind, es in dieser Browserversion jedoch keine Benutzeroberfläche gibt, um mit ihnen zu arbeiten.

Vor Firefox 57 ist die `contextualIdentities` API nur verfügbar, wenn die Funktion für kontextuelle Identitäten selbst aktiviert ist. Wenn eine Erweiterung versucht hat, die `contextualIdentities` API ohne aktivierte Funktion zu verwenden, würden die Methodenaufrufe ihre Promises mit `false` auflösen.

Ab Firefox 57 wird die Funktion für kontextuelle Identitäten automatisch aktiviert, wenn eine Erweiterung, die die `contextualIdentities` API verwendet, installiert ist. Beachten Sie jedoch, dass es weiterhin möglich ist, dass der Nutzer die Funktion über die Einstellung "privacy.userContext.enabled" deaktiviert. Wenn dies passiert, werden `contextualIdentities`-Methodenaufrufe ihre Promises mit einer Fehlermeldung ablehnen.

Weitere Informationen finden Sie unter [Arbeiten mit kontextuellen Identitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities).

Kontextuelle Identitäten werden in keinen anderen Browsern unterstützt.

Um diese API zu verwenden, müssen Sie die Berechtigungen "contextualIdentities" und "cookies" in Ihrer [manifest.json](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) Datei einfügen. Weitere Informationen finden Sie unter [Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions).

## Typen

- {{WebExtAPIRef("contextualIdentities.ContextualIdentity")}}
  - : Beinhaltet Informationen über eine kontextuelle Identität.

## Funktionen

- {{WebExtAPIRef("contextualIdentities.create()")}}
  - : Erstellt eine neue kontextuelle Identität.
- {{WebExtAPIRef("contextualIdentities.get()")}}
  - : Ruft eine kontextuelle Identität anhand ihrer Cookie-Store-ID ab.
- {{WebExtAPIRef("contextualIdentities.move()")}}
  - : Verschiebt eine oder mehrere kontextuelle Identitäten in der Liste der kontextuellen Identitäten.
- {{WebExtAPIRef("contextualIdentities.query()")}}
  - : Ruft alle kontextuellen Identitäten oder alle kontextuellen Identitäten mit einem bestimmten Namen ab.
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

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples("h2")}}
