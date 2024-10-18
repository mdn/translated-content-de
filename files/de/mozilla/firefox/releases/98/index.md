---
title: Firefox 98 für Entwickler
slug: Mozilla/Firefox/Releases/98
l10n:
  sourceCommit: 445eb77dbfd0bd41d443f81d89647a6dd5b25b75
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 98, die Entwickler betreffen. Firefox 98 wurde am 8. März 2022 veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das HTML-Element {{HTMLElement("dialog")}} ist jetzt standardmäßig verfügbar. Dieses Element und seine zugehörigen [DOM-APIs](/de/docs/Web/API/Document_Object_Model) bieten Unterstützung für HTML-basierte modale Dialogfelder ([Firefox Fehler 1733536](https://bugzil.la/1733536)).

### CSS

- Die Eigenschaft {{cssxref("hyphenate-character")}} setzt eine Zeichenfolge, die anstelle eines Bindestrichs (`-`) am Ende eines Silbentrennungs-Zeilenumbruchs verwendet wird ([Firefox Fehler 1751024](https://bugzil.la/1751024)).

### JavaScript

Keine bemerkenswerten Änderungen

### APIs

- [`navigator.registerProtocolHandler()`](/de/docs/Web/API/Navigator/registerProtocolHandler) kann jetzt Protokoll-Handler für die Schemen `ftp`, `sftp` und `ftps` registrieren ([Firefox Fehler 1705202](https://bugzil.la/1705202)).

#### DOM

- [`HTMLElement.outerText`](/de/docs/Web/API/HTMLElement/outerText) wird jetzt unterstützt ([Firefox Fehler 1709790](https://bugzil.la/1709790)).
- Die Eigenschaften `colorSpaceConversion`, `resizeWidth` und `resizeHeight` können an die Methode [`Window.createImageBitmap()`](/de/docs/Web/API/Window/createImageBitmap) und [`WorkerGlobalScope.createImageBitmap()`](/de/docs/Web/API/WorkerGlobalScope/createImageBitmap) unter Verwendung des `options`-Objekts übergeben werden ([Firefox Fehler 1748868](https://bugzil.la/1748868) und [Firefox Fehler 1733559](https://bugzil.la/1733559)).
- [`ElementInternals`](/de/docs/Web/API/ElementInternals) hat jetzt neue formularassoziierte benutzerdefinierte Elementmethoden und -eigenschaften, die es benutzerdefinierten Elementen ermöglichen, mit einem Formular zu interagieren.
  Dazu gehören die Eigenschaften [`form`](/de/docs/Web/API/ElementInternals/form), [`labels`](/de/docs/Web/API/ElementInternals/labels) und [`willValidate`](/de/docs/Web/API/ElementInternals/willValidate) sowie die Methode [`setFormValue()`](/de/docs/Web/API/ElementInternals/setFormValue).
  ([Firefox Fehler 1556362](https://bugzil.la/1556362), [Firefox Fehler 1556373](https://bugzil.la/1556373), [Firefox Fehler 1556365](https://bugzil.la/1556365), [Firefox Fehler 1556449](https://bugzil.la/1556449)).

#### Entfernung

- Die veraltete [WebVR API](/de/docs/Web/API/WebVR_API) ist jetzt in allen Builds standardmäßig deaktiviert (zuvor war sie auf Windows, macOS und allen Nightly-/Dev-Builds aktiviert).
  Sie kann in `about:config` wieder aktiviert werden, indem `dom.vr.enabled` auf `true` gesetzt wird ([Firefox Fehler 1750902](https://bugzil.la/1750902)).

### WebDriver-Konformität (Marionette)

- Verbesserte Überprüfung des anfänglichen Seitenladevorgangs für neu geöffnete Tabs ([Firefox Fehler 1747359](https://bugzil.la/1747359)).

## Änderungen für Add-on-Entwickler

- Webextensions, die {{WebExtAPIRef("webRequest")}} verwenden, wurden früh während des Firefox-Starts gestartet. Dies wurde dahingehend geändert, dass nur noch Erweiterungen mit blockierenden Aufrufen von {{WebExtAPIRef("webRequest")}} einen frühen Start auslösen. Nicht-blockierende Aufrufe verursachen nicht mehr das frühe Starten einer Erweiterung. ([Firefox Fehler 1749871](https://bugzil.la/1749871))
- `cookieStoreId` wurde zu {{WebExtAPIRef("userScripts.register")}} hinzugefügt. Dies ermöglicht es Erweiterungen, container-spezifische Benutzerskripte zu registrieren ([Firefox Fehler 1738567](https://bugzil.la/1738567)).

## Ältere Versionen

{{Firefox_for_developers}}
