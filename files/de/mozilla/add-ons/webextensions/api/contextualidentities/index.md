---
title: contextualIdentities
slug: Mozilla/Add-ons/WebExtensions/API/contextualIdentities
l10n:
  sourceCommit: 3116241f515352d336d2edb460cebfe99d43aea7
---

Arbeiten Sie mit kontextuellen Identitäten: Listen Sie sie auf, erstellen, entfernen und aktualisieren Sie sie.

„Kontextuelle Identitäten“, auch „Container“ genannt, sind eine Browserfunktion, mit der Benutzer beim Surfen im Web mehrere Identitäten verwenden und diese voneinander getrennt halten können. Beispielsweise möchte ein Benutzer möglicherweise seine „Arbeitsidentität“ von seiner „privaten Identität“ trennen und Cookies nicht zwischen diesen beiden Kontexten teilen.

Bei dieser Funktion hat jede kontextuelle Identität einen Namen, eine Farbe und ein Symbol. Neue Tabs können einer Identität zugewiesen werden; Name, Symbol und Farbe werden in der Adressleiste angezeigt. Intern erhält jede Identität einen eigenen Cookie-Speicher, der nicht mit anderen Tabs geteilt wird. Dieser Cookie-Speicher wird in dieser und anderen APIs durch die `cookieStoreId` identifiziert.

![Ein Link-Kontextmenü, in dem das Untermenü zum Öffnen eines Links in einem neuen Container-Tab hervorgehoben ist. Das Untermenü zeigt kontextuelle Identitäten für Privates, Arbeit, Bankgeschäfte und Einkäufe.](containers.png)

Kontextuelle Identitäten sind in Firefox eine experimentelle Funktion und standardmäßig nur in Firefox Nightly aktiviert. Um sie in anderen Firefox-Versionen zu aktivieren, setzen Sie die Einstellung `privacy.userContext.enabled` auf `true`. Beachten Sie, dass kontextuelle Identitäten zwar in Firefox für Android verfügbar sind, es in dieser Browserversion aber keine Benutzeroberfläche für ihre Verwendung gibt.

Vor Firefox 57 ist die `contextualIdentities`-API nur verfügbar, wenn die Funktion für kontextuelle Identitäten selbst aktiviert ist. Versuchte eine Erweiterung, die `contextualIdentities`-API zu verwenden, ohne dass die Funktion aktiviert war, wurden die von den Methodenaufrufen zurückgegebenen Promises mit `false` erfüllt.

Ab Firefox 57 wird die Funktion für kontextuelle Identitäten automatisch aktiviert, wenn eine Erweiterung installiert wird, die die `contextualIdentities`-API verwendet. Benutzer können die Funktion jedoch weiterhin über die Einstellung `privacy.userContext.enabled` deaktivieren. In diesem Fall werden die von `contextualIdentities`-Methodenaufrufen zurückgegebenen Promises mit einer Fehlermeldung abgelehnt.

Weitere Informationen finden Sie unter [Mit kontextuellen Identitäten arbeiten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities).

Kontextuelle Identitäten werden von keinem anderen Browser unterstützt.

Um diese API zu verwenden, müssen Sie die [Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) „contextualIdentities“ und „cookies“ in Ihre Datei [manifest.json](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) aufnehmen.

## Typen

- {{WebExtAPIRef("contextualIdentities.ContextualIdentity")}}
  - : Enthält Informationen über eine kontextuelle Identität.

## Funktionen

- {{WebExtAPIRef("contextualIdentities.create()")}}
  - : Erstellt eine neue kontextuelle Identität.
- {{WebExtAPIRef("contextualIdentities.get()")}}
  - : Ruft eine kontextuelle Identität anhand ihrer Cookie-Speicher-ID ab.
- {{WebExtAPIRef("contextualIdentities.getSupportedColors()")}}
  - : Gibt die für kontextuelle Identitäten unterstützten Farben zurück.
- {{WebExtAPIRef("contextualIdentities.getSupportedIcons()")}}
  - : Gibt die für kontextuelle Identitäten unterstützten Symbole zurück.
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
