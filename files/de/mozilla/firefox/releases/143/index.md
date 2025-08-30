---
title: Firefox 143 für Entwickler
short-title: Firefox 143 (Beta)
slug: Mozilla/Firefox/Releases/143
l10n:
  sourceCommit: 4da1a8a9c5464e521d95ff78341ec8ed791fc97b
---

Dieser Artikel informiert über die Änderungen in Firefox 143, die Entwickler betreffen.
Firefox 143 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [16. September 2025](https://whattrainisitnow.com/release/?version=143) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Bearbeitung.

<!-- Authors: Please uncomment any headings you are writing notes for -->

## Änderungen für Webentwickler

<!-- ### Developer Tools -->

<!-- ### HTML -->

<!-- No notable changes. -->

<!-- #### Removals -->

### CSS

- Das {{cssxref("::details-content")}} Pseudo-Element ist jetzt standardmäßig aktiviert. Es ermöglicht die Gestaltung des Inhalts des {{htmlElement("details")}} Elements.
  ([Firefox-Bug 1941406](https://bugzil.la/1941406)).

<!-- #### Removals -->

<!-- ### JavaScript -->

<!-- No notable changes. -->

<!-- #### Removals -->

<!-- ### SVG -->

<!-- #### Removals -->

<!-- ### HTTP -->

<!-- #### Removals -->

<!-- ### Security -->

<!-- #### Removals -->

### APIs

<!-- #### DOM -->

<!-- #### Media, WebRTC, and Web Audio -->

#### Removals

- Die veraltete Eigenschaft [`CompositionEvent.locale`](/de/docs/Web/API/CompositionEvent/locale) wird nicht mehr unterstützt.
  ([Firefox-Bug 1700969](https://bugzil.la/1700969)).

<!-- ### WebAssembly -->

<!-- #### Removals -->

<!-- ### WebDriver conformance (WebDriver BiDi, Marionette) -->

<!-- #### General -->

<!-- #### WebDriver BiDi -->

<!-- #### Marionette -->

## Änderungen für Add-on-Entwickler

- Hinzufügung von {{WebExtAPIRef("storage.StorageArea.getKeys()")}}. Diese Methode gibt ein Array zurück, das alle Schlüssel in einem Speicherbereich enthält. Sie ist für alle Speicherbereiche verfügbar, das heißt {{WebExtAPIRef("storage.sync", "sync")}}, {{WebExtAPIRef("storage.local", "local")}}, {{WebExtAPIRef("storage.session", "session")}}, und {{WebExtAPIRef("storage.managed", "managed")}}. ([Firefox-Bug 1910669](https://bugzil.la/1910669))
- Die Auswahl eines Erweiterungsvorschlags in der Adressleiste (omnibox) durch den Benutzer, eine Aktion, die {{WebExtAPIRef("omnibox.onInputEntered")}} auslöst, wird nun als [Benutzeraktion](/de/docs/Mozilla/Add-ons/WebExtensions/User_actions) betrachtet. Neben der Aktivierung der APIs, die eine Benutzeraktion erfordern, gewährt die Auswahl eines Erweiterungsvorschlags in der Adressleiste auch die Berechtigung `"activeTab"`.

<!-- ### Removals -->

<!-- ### Other -->

## Experimentelle Webfeatures

Diese Funktionen sind in Firefox 143 verfügbar, aber standardmäßig deaktiviert.
Um sie zu testen, suchen Sie auf der `about:config` Seite nach der entsprechenden Einstellung und setzen Sie sie auf `true`.
Weitere solcher Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).
