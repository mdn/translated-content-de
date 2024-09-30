---
title: Firefox 98 für Entwickler
slug: Mozilla/Firefox/Releases/98
l10n:
  sourceCommit: 58d79e9c2206e0a604cd4d7f6fba5181262af420
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 98, die Entwickler betreffen. Firefox 98 wurde am 8. März 2022 veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das HTML-Element {{HTMLElement("dialog")}} ist jetzt standardmäßig verfügbar. Dieses Element und die zugehörigen [DOM-APIs](/de/docs/Web/API/Document_Object_Model) bieten Unterstützung für HTML-basierte modale Dialogboxen ([Firefox-Bug 1733536](https://bugzil.la/1733536)).

### CSS

- Die Eigenschaft {{cssxref("hyphenate-character")}} legt einen String fest, der anstelle eines Bindestrichs (`-`) am Ende eines Trennstrichlinienumbruchs verwendet wird ([Firefox-Bug 1751024](https://bugzil.la/1751024)).

### JavaScript

Keine bemerkenswerten Änderungen

### APIs

- [`navigator.registerProtocolHandler()`](/de/docs/Web/API/Navigator/registerProtocolHandler) kann nun Protokollhandler für die Schemas `ftp`, `sftp` und `ftps` registrieren ([Firefox-Bug 1705202](https://bugzil.la/1705202)).

#### DOM

- [`HTMLElement.outerText`](/de/docs/Web/API/HTMLElement/outerText) wird jetzt unterstützt ([Firefox-Bug 1709790](https://bugzil.la/1709790)).
- Die Eigenschaften `colorSpaceConversion`, `resizeWidth` und `resizeHeight` können an die Methode [`Window.createImageBitmap()`](/de/docs/Web/API/Window/createImageBitmap) und [`WorkerGlobalScope.createImageBitmap()`](/de/docs/Web/API/WorkerGlobalScope/createImageBitmap) unter Verwendung des `options`-Objekts übergeben werden ([Firefox-Bug 1748868](https://bugzil.la/1748868) und [Firefox-Bug 1733559](https://bugzil.la/1733559)).

#### Entfernungen

- Die veraltete [WebVR API](/de/docs/Web/API/WebVR_API) ist jetzt standardmäßig in allen Builds deaktiviert (zuvor war sie auf Windows, macOS und allen Nightly/Dev-Builds aktiviert). Sie kann in `about:config` durch Setzen von `dom.vr.enabled` auf `true` wieder aktiviert werden ([Firefox-Bug 1750902](https://bugzil.la/1750902)).

### WebDriver-Konformität (Marionette)

- Verbesserte Überprüfungen beim ersten Seitenaufruf für neu geöffnete Tabs ([Firefox-Bug 1747359](https://bugzil.la/1747359)).

## Änderungen für Add-on-Entwickler

- Web-Erweiterungen, die {{WebExtAPIRef("webRequest")}} verwenden, wurden früher beim Start von Firefox gestartet. Dies wurde so geändert, dass der frühe Start nun nur noch für Erweiterungen mit blockierenden Aufrufen von {{WebExtAPIRef("webRequest")}} ausgelöst wird. Nicht blockierende Aufrufe verursachen nicht länger den frühen Start einer Erweiterung. ([Firefox-Bug 1749871](https://bugzil.la/1749871))
- `cookieStoreId` wurde zu {{WebExtAPIRef("userScripts.register")}} hinzugefügt. Dies ermöglicht es Erweiterungen, container-spezifische Benutzerskripte zu registrieren ([Firefox-Bug 1738567](https://bugzil.la/1738567)).

## Ältere Versionen

{{Firefox_for_developers}}
