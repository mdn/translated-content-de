---
title: Firefox 98 für Entwickler
slug: Mozilla/Firefox/Releases/98
l10n:
  sourceCommit: 1822cdf5a86574429c4c49883a402663ef16a4ef
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 98, die Entwickler betreffen. Firefox 98 wurde am 8. März 2022 veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das HTML-{{HTMLElement("dialog")}}-Element ist jetzt standardmäßig verfügbar. Dieses Element und seine zugehörigen [DOM-APIs](/de/docs/Web/API/Document_Object_Model) unterstützen HTML-basierte modale Dialogfelder ([Firefox-Bug 1733536](https://bugzil.la/1733536)).

### CSS

- Die {{cssxref("hyphenate-character")}}-Eigenschaft setzt eine Zeichenkette, die anstelle eines Bindestrichs-Zeichens (`-`) am Ende eines Silbentrennungsumbruchs verwendet wird ([Firefox-Bug 1751024](https://bugzil.la/1751024)).

### JavaScript

Keine bemerkenswerten Änderungen

### APIs

- {{domxref("navigator.registerProtocolHandler()")}} kann nun Protokoll-Handler für die Schemata `ftp`, `sftp` und `ftps` registrieren ([Firefox-Bug 1705202](https://bugzil.la/1705202)).

#### DOM

- {{domxref("HTMLElement.outerText")}} wird jetzt unterstützt ([Firefox-Bug 1709790](https://bugzil.la/1709790)).
- Die Eigenschaften `colorSpaceConversion`, `resizeWidth` und `resizeHeight` können mit dem `options`-Objekt an die Methode {{domxref("createImageBitmap()")}} übergeben werden ([Firefox-Bug 1748868](https://bugzil.la/1748868) und [Firefox-Bug 1733559](https://bugzil.la/1733559)).

#### Entfernungen

- Die veraltete [WebVR API](/de/docs/Web/API/WebVR_API) ist jetzt standardmäßig in allen Builds deaktiviert (zuvor war sie auf Windows, macOS und in allen Nightly-/Dev-Builds aktiviert). Sie kann in `about:config` durch Setzen von `dom.vr.enabled` auf `true` wieder aktiviert werden ([Firefox-Bug 1750902](https://bugzil.la/1750902)).

### WebDriver-Konformität (Marionette)

- Verbesserte anfängliche Seitenladeüberprüfungen für neu geöffnete Tabs ([Firefox-Bug 1747359](https://bugzil.la/1747359)).

## Änderungen für Add-on-Entwickler

- Web-Erweiterungen, die {{WebExtAPIRef("webRequest")}} verwenden, wurden früh während des Firefox-Starts gestartet. Dies wurde geändert, um den frühen Start nur für Erweiterungen auszulösen, die blockierende {{WebExtAPIRef("webRequest")}}-Aufrufe verwenden. Nicht blockierende Aufrufe verursachen nicht mehr den frühen Start einer Erweiterung. ([Firefox-Bug 1749871](https://bugzil.la/1749871))
- `cookieStoreId` wurde zu {{WebExtAPIRef("userScripts.register")}} hinzugefügt. Dies ermöglicht es Erweiterungen, container-spezifische Benutzerskripte zu registrieren ([Firefox-Bug 1738567](https://bugzil.la/1738567)).

## Ältere Versionen

{{Firefox_for_developers}}
