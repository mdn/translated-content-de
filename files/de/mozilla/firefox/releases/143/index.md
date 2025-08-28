---
title: Firefox 143 für Entwickler
short-title: Firefox 143 (Beta)
slug: Mozilla/Firefox/Releases/143
l10n:
  sourceCommit: e3dce8e14b101688a794d2a59e15fe67b4cf0de5
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 143, die Entwickler betreffen. Firefox 143 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [16. September 2025](https://whattrainisitnow.com/release/?version=143) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Arbeit.

<!-- Autoren: Bitte kommentieren Sie alle Überschriften aus, für die Sie Anmerkungen schreiben -->

## Änderungen für Webentwickler

<!-- ### Entwicklerwerkzeuge -->

<!-- ### HTML -->

<!-- Keine bemerkenswerten Änderungen. -->

<!-- #### Entfernungen -->

### CSS

- Das {{cssxref("::details-content")}} Pseudo-Element ist jetzt standardmäßig aktiviert. Es ermöglicht Ihnen, den Inhalt des {{htmlElement("details")}} Elements zu gestalten. ([Firefox Bug 1941406](https://bugzil.la/1941406)).

<!-- #### Entfernungen -->

<!-- ### JavaScript -->

<!-- Keine bemerkenswerten Änderungen. -->

<!-- #### Entfernungen -->

<!-- ### SVG -->

<!-- #### Entfernungen -->

<!-- ### HTTP -->

<!-- #### Entfernungen -->

<!-- ### Sicherheit -->

<!-- #### Entfernungen -->

### APIs

<!-- #### DOM -->

<!-- #### Medien, WebRTC und Web Audio -->

#### Entfernungen

- Die veraltete [`CompositionEvent.locale`](/de/docs/Web/API/CompositionEvent/locale) Eigenschaft wird nicht mehr unterstützt. ([Firefox Bug 1700969](https://bugzil.la/1700969)).

<!-- ### WebAssembly -->

<!-- #### Entfernungen -->

<!-- ### WebDriver-Konformität (WebDriver BiDi, Marionette) -->

<!-- #### Allgemein -->

<!-- #### WebDriver BiDi -->

<!-- #### Marionette -->

## Änderungen für Add-on-Entwickler

- Hinzufügung von {{WebExtAPIRef("storage.StorageArea.getKeys()")}}. Diese Methode gibt ein Array zurück, das alle Schlüssel in einem Speicherbereich enthält. Sie ist für alle Speicherbereiche verfügbar, nämlich {{WebExtAPIRef("storage.sync", "sync")}}, {{WebExtAPIRef("storage.local", "local")}}, {{WebExtAPIRef("storage.session", "session")}}, und {{WebExtAPIRef("storage.managed", "managed")}}. ([Firefox Bug 1910669](https://bugzil.la/1910669))

<!-- ### Entfernungen -->

<!-- ### Sonstiges -->

## Experimentelle Webfunktionen

Diese Funktionen sind in Firefox 143 enthalten, aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie auf der `about:config` Seite nach der entsprechenden Einstellung und setzen Sie sie auf `true`. Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).
