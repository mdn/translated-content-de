---
title: contextualIdentities
slug: Mozilla/Add-ons/WebExtensions/API/contextualIdentities
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Arbeiten Sie mit kontextuellen Identitäten: auflisten, erstellen, entfernen und aktualisieren Sie kontextuelle Identitäten.

"Kontextuelle Identitäten", auch als "Container" bekannt, sind eine Browser-Funktion, die es Benutzern ermöglicht, beim Surfen im Internet mehrere Identitäten anzunehmen und eine gewisse Trennung zwischen diesen Identitäten aufrechtzuerhalten. Zum Beispiel könnte ein Benutzer seine "Arbeitsidentität" getrennt von seiner "persönlichen Identität" betrachten und keine Cookies zwischen diesen beiden Kontexten teilen wollen.

Mit der Funktion für kontextuelle Identitäten hat jede kontextuelle Identität einen Namen, eine Farbe und ein Symbol. Neue Registerkarten können einer Identität zugewiesen werden, und der Name, das Symbol und die Farbe erscheinen in der Adressleiste. Intern erhält jede Identität einen Cookie-Store, der nicht mit anderen Registerkarten geteilt wird. Dieser Cookie-Store wird durch die `cookieStoreId` in dieser und anderen APIs identifiziert.

![Ein Kontextmenü mit hervorgehobenem Untermenü "In neuem Container-Tab öffnen". Das Untermenü zeigt persönliche, Arbeits-, Bank- und Einkaufs-Identitäten an.](containers.png)

Kontextuelle Identitäten sind eine experimentelle Funktion in Firefox und sind standardmäßig nur in Firefox Nightly aktiviert. Um sie in anderen Versionen von Firefox zu aktivieren, setzen Sie die Einstellung `privacy.userContext.enabled` auf `true`. Beachten Sie, dass kontextuelle Identitäten zwar in Firefox für Android verfügbar sind, es in dieser Browserversion keine Benutzeroberfläche gibt, um mit ihnen zu arbeiten.

Vor Firefox 57 ist die `contextualIdentities`-API nur verfügbar, wenn die kontextuellen Identitäten selbst aktiviert sind. Wenn eine Erweiterung versucht hat, die `contextualIdentities`-API zu verwenden, ohne dass die Funktion aktiviert ist, würden methodenbezogene Versprechungen mit `false` aufgelöst.

Ab Firefox 57 wird die Funktion für kontextuelle Identitäten automatisch aktiviert, wenn eine Erweiterung, die die `contextualIdentities`-API verwendet, installiert ist. Beachten Sie jedoch, dass es dem Benutzer weiterhin möglich ist, die Funktion mit der Einstellung "privacy.userContext.enabled" zu deaktivieren. Falls dies geschieht, werden `contextualIdentities`-Methodenaufrufe ihre Versprechen mit einer Fehlermeldung ablehnen.

Weitere Informationen finden Sie unter [Arbeiten Sie mit kontextuellen Identitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities).

Kontextuelle Identitäten werden in keinem anderen Browser unterstützt.

Um diese API verwenden zu können, müssen Sie die Berechtigungen "contextualIdentities" und "cookies" in Ihrer [manifest.json](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) Datei einschließen.

## Typen

- {{WebExtAPIRef("contextualIdentities.ContextualIdentity")}}
  - : Enthält Informationen über eine kontextuelle Identität.

## Funktionen

- {{WebExtAPIRef("contextualIdentities.create()")}}
  - : Erstellt eine neue kontextuelle Identität.
- {{WebExtAPIRef("contextualIdentities.get()")}}
  - : Ruft eine kontextuelle Identität ab, gegeben ihrer Cookie-Store-ID.
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
