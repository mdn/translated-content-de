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

- Das HTML-Element {{HTMLElement("dialog")}} ist jetzt standardmäßig verfügbar. Dieses Element und die zugehörigen [DOM-APIs](/de/docs/Web/API/Document_Object_Model) bieten Unterstützung für HTML-basierte modale Dialogboxen ([Firefox Fehler 1733536](https://bugzil.la/1733536)).

### CSS

- Die Eigenschaft {{cssxref("hyphenate-character")}} setzt einen String, der anstelle eines Bindestrichs (`-`) am Ende eines Trennstrich-Zeilenumbruchs verwendet wird ([Firefox Fehler 1751024](https://bugzil.la/1751024)).

### JavaScript

Keine bemerkenswerten Änderungen

### APIs

- [`navigator.registerProtocolHandler()`](/de/docs/Web/API/Navigator/registerProtocolHandler) kann jetzt Protokoll-Handler für die Schemen `ftp`, `sftp` und `ftps` registrieren ([Firefox Fehler 1705202](https://bugzil.la/1705202)).

#### DOM

- [`HTMLElement.outerText`](/de/docs/Web/API/HTMLElement/outerText) wird jetzt unterstützt ([Firefox Fehler 1709790](https://bugzil.la/1709790)).
- Die Eigenschaften `colorSpaceConversion`, `resizeWidth` und `resizeHeight` können an die Methode [`createImageBitmap()`](/de/docs/Web/API/CreateImageBitmap) über das `options` Objekt übergeben werden ([Firefox Fehler 1748868](https://bugzil.la/1748868) und [Firefox Fehler 1733559](https://bugzil.la/1733559)).

#### Entfernungen

- Die veraltete [WebVR API](/de/docs/Web/API/WebVR_API) ist jetzt standardmäßig in allen Builds deaktiviert (zuvor war sie unter Windows, macOS und in allen Nightly/Dev-Builds aktiviert).
  Sie kann in `about:config` wieder aktiviert werden, indem `dom.vr.enabled` auf `true` gesetzt wird ([Firefox Fehler 1750902](https://bugzil.la/1750902)).

### WebDriver-Konformität (Marionette)

- Verbesserte Überprüfung des ersten Seitenladens für neu geöffnete Tabs ([Firefox Fehler 1747359](https://bugzil.la/1747359)).

## Änderungen für Add-on-Entwickler

- Web-Erweiterungen, die {{WebExtAPIRef("webRequest")}} verwenden, wurden beim Firefox-Start frühzeitig gestartet. Dies wurde dahingehend geändert, dass ein früher Start nur für Erweiterungen ausgelöst wird, die blockierende Aufrufe von {{WebExtAPIRef("webRequest")}} verwenden. Nicht blockierende Aufrufe führen nicht mehr zum frühen Start einer Erweiterung. ([Firefox Fehler 1749871](https://bugzil.la/1749871))
- `cookieStoreId` wurde zu {{WebExtAPIRef("userScripts.register")}} hinzugefügt. Dies ermöglicht es Erweiterungen, container-spezifische Benutzerskripte zu registrieren ([Firefox Fehler 1738567](https://bugzil.la/1738567)).

## Ältere Versionen

{{Firefox_for_developers}}
