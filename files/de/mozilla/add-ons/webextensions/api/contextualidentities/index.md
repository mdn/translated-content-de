---
title: contextualIdentities
slug: Mozilla/Add-ons/WebExtensions/API/contextualIdentities
l10n:
  sourceCommit: 6203b96117ae35099df06d08f6a037bf2dff1d80
---

Arbeiten Sie mit kontextuellen Identitäten: Auflisten, Erstellen, Entfernen und Aktualisieren von kontextuellen Identitäten.

"Kontextuelle Identitäten", auch bekannt als "Container", sind eine Browser-Funktion, die es Nutzern ermöglicht, beim Surfen im Web mehrere Identitäten anzunehmen und eine gewisse Trennung zwischen diesen Identitäten beizubehalten. Ein Nutzer könnte beispielsweise seine "Arbeitsidentität" von seiner "persönlichen Identität" getrennt betrachten und keine Cookies zwischen diesen beiden Kontexten teilen wollen.

Mit der Funktion der kontextuellen Identitäten hat jede kontextuelle Identität einen Namen, eine Farbe und ein Icon. Neue Tabs können einer Identität zugewiesen werden, und der Name, das Icon und die Farbe erscheinen in der Adressleiste. Intern erhält jede Identität einen Cookie-Speicher, der nicht mit anderen Tabs geteilt wird. Dieser Cookie-Speicher wird in dieser und anderen APIs durch den `cookieStoreId` identifiziert.

![Ein Kontextmenü mit hervorgehobenem Untermenü "In neuem Container-Tab öffnen". Das Untermenü zeigt persönliche, Arbeits-, Banken- und Shopping-kontextuelle Identitäten.](containers.png)

Kontextuelle Identitäten sind eine experimentelle Funktion in Firefox und sind standardmäßig nur in Firefox Nightly aktiviert. Um sie in anderen Versionen von Firefox zu aktivieren, setzen Sie die `privacy.userContext.enabled`-Einstellung auf `true`. Beachten Sie, dass kontextuelle Identitäten zwar in Firefox für Android verfügbar sind, aber es in dieser Browserversion keine Benutzeroberfläche zur Arbeit mit ihnen gibt.

Vor Firefox 57 ist die `contextualIdentities`-API nur verfügbar, wenn die Funktion der kontextuellen Identitäten selbst aktiviert ist. Wenn eine Erweiterung versucht, die `contextualIdentities`-API ohne aktivierte Funktion zu verwenden, würden die Methodenaufrufe ihre Versprechen mit `false` auflösen.

Ab Firefox 57 wird, wenn eine Erweiterung installiert wird, die die `contextualIdentities`-API verwendet, die Funktion der kontextuellen Identitäten automatisch aktiviert. Beachten Sie jedoch, dass es dem Nutzer dennoch möglich ist, die Funktion über die "privacy.userContext.enabled"-Einstellung zu deaktivieren. Sollte dies geschehen, werden `contextualIdentities`-Methodenaufrufe ihre Versprechen mit einer Fehlermeldung ablehnen.

Siehe [Arbeiten mit kontextuellen Identitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities) für weitere Informationen.

Kontextuelle Identitäten werden in keinem anderen Browser unterstützt.

Um diese API zu verwenden, müssen Sie die Berechtigungen "contextualIdentities" und "cookies" in Ihrer [manifest.json](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json)-Datei angeben.

## Typen

- {{WebExtAPIRef("contextualIdentities.ContextualIdentity")}}
  - : Enthält Informationen über eine kontextuelle Identität.

## Funktionen

- {{WebExtAPIRef("contextualIdentities.create()")}}
  - : Erstellt eine neue kontextuelle Identität.
- {{WebExtAPIRef("contextualIdentities.get()")}}
  - : Ruft eine kontextuelle Identität ab, basierend auf ihrer Cookie-Store-ID.
- {{WebExtAPIRef("contextualIdentities.getSupportedColors()")}}
  - : Gibt die für kontextuelle Identitäten unterstützten Farben zurück.
- {{WebExtAPIRef("contextualIdentities.getSupportedIcons()")}}
  - : Gibt die für kontextuelle Identitäten unterstützten Icons zurück.
- {{WebExtAPIRef("contextualIdentities.move()")}}
  - : Verschiebt eine oder mehrere kontextuelle Identitäten innerhalb der Liste der kontextuellen Identitäten.
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

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}
