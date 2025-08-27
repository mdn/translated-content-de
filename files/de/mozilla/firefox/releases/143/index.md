---
title: Firefox 143 für Entwickler
short-title: Firefox 143 (Beta)
slug: Mozilla/Firefox/Releases/143
l10n:
  sourceCommit: 07cc896aee614b6af47546d95ac82c7e8471b448
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 143, die Entwickler betreffen.
Firefox 143 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [16. September 2025](https://whattrainisitnow.com/release/?version=143) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Arbeit.

<!-- Autoren: Bitte heben Sie die Auskommentierung von Überschriften auf, zu denen Sie Notizen schreiben -->

## Änderungen für Webentwickler

<!-- ### Entwicklerwerkzeuge -->

<!-- ### HTML -->

<!-- Keine bemerkenswerten Änderungen. -->

<!-- #### Entfernungen -->

<!-- ### CSS -->

<!-- Keine bemerkenswerten Änderungen. -->

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

- Die veraltete Eigenschaft [`CompositionEvent.locale`](/de/docs/Web/API/CompositionEvent/locale) wird nicht mehr unterstützt.
  ([Firefox-Bug 1700969](https://bugzil.la/1700969)).

<!-- ### WebAssembly -->

<!-- #### Entfernungen -->

<!-- ### WebDriver-Konformität (WebDriver BiDi, Marionette) -->

<!-- #### Allgemein -->

<!-- #### WebDriver BiDi -->

<!-- #### Marionette -->

## Änderungen für Add-on-Entwickler

- Hinzufügung von {{WebExtAPIRef("storage.StorageArea.getKeys()")}}. Diese Methode gibt ein Array zurück, das alle Schlüssel in einem Speicherbereich enthält. Es ist für alle Speicherbereiche verfügbar, also {{WebExtAPIRef("storage.sync", "sync")}}, {{WebExtAPIRef("storage.local", "local")}}, {{WebExtAPIRef("storage.session", "session")}} und {{WebExtAPIRef("storage.managed", "managed")}}. ([Firefox-Bug 1910669](https://bugzil.la/1910669))

<!-- ### Entfernungen -->

<!-- ### Sonstiges -->

## Experimentelle Web-Features

Diese Features sind in Firefox 143 enthalten, aber standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie nach der entsprechenden Einstellung auf der `about:config`-Seite und setzen Sie sie auf `true`.
Weitere solche Features finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).
