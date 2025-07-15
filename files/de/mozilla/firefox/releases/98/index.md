---
title: Firefox 98 für Entwickler
short-title: Firefox 98
slug: Mozilla/Firefox/Releases/98
l10n:
  sourceCommit: 64df508685abcbc047f6c1a973505921fad1484e
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 98, die Entwickler betreffen. Firefox 98 wurde am 8. März 2022 veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das HTML-{{HTMLElement("dialog")}}-Element ist jetzt standardmäßig verfügbar. Dieses Element und die damit verbundenen [DOM-APIs](/de/docs/Web/API/Document_Object_Model) bieten Unterstützung für HTML-basierte modale Dialogfelder ([Firefox Bug 1733536](https://bugzil.la/1733536)).

### CSS

- Die {{cssxref("hyphenate-character")}}-Eigenschaft legt einen String fest, der anstelle eines Bindestrich-Zeichens (`-`) am Ende eines Silbentrennungslinienumbruchs verwendet wird ([Firefox Bug 1751024](https://bugzil.la/1751024)).

### JavaScript

Keine bemerkenswerten Änderungen

### APIs

- [`navigator.registerProtocolHandler()`](/de/docs/Web/API/Navigator/registerProtocolHandler) kann jetzt Protokoll-Handler für die Schemata `ftp`, `sftp` und `ftps` registrieren ([Firefox Bug 1705202](https://bugzil.la/1705202)).

#### DOM

- [`HTMLElement.outerText`](/de/docs/Web/API/HTMLElement/outerText) wird jetzt unterstützt ([Firefox Bug 1709790](https://bugzil.la/1709790)).
- Die Eigenschaften `colorSpaceConversion`, `resizeWidth` und `resizeHeight` können an die Methoden [`Window.createImageBitmap()`](/de/docs/Web/API/Window/createImageBitmap) und [`WorkerGlobalScope.createImageBitmap()`](/de/docs/Web/API/WorkerGlobalScope/createImageBitmap) unter Verwendung des `options`-Objekts übergeben werden ([Firefox Bug 1748868](https://bugzil.la/1748868) und [Firefox Bug 1733559](https://bugzil.la/1733559)).
- [`ElementInternals`](/de/docs/Web/API/ElementInternals) verfügt nun über neue formularassoziierte benutzerdefinierte Elementmethoden und -eigenschaften, die es benutzerdefinierten Elementen ermöglichen, mit einem Formular zu interagieren.
  Diese umfassen die Eigenschaften [`form`](/de/docs/Web/API/ElementInternals/form), [`labels`](/de/docs/Web/API/ElementInternals/labels) und [`willValidate`](/de/docs/Web/API/ElementInternals/willValidate) sowie die Methode [`setFormValue()`](/de/docs/Web/API/ElementInternals/setFormValue).
  ([Firefox Bug 1556362](https://bugzil.la/1556362), [Firefox Bug 1556373](https://bugzil.la/1556373), [Firefox Bug 1556365](https://bugzil.la/1556365), [Firefox Bug 1556449](https://bugzil.la/1556449)).

#### Entfernungen

- Die veraltete [WebVR API](/de/docs/Web/API/WebVR_API) ist nun standardmäßig in allen Builds deaktiviert (zuvor war sie auf Windows, macOS und allen Nightly/Dev-Builds aktiviert).
  Sie kann in `about:config` wieder aktiviert werden, indem `dom.vr.enabled` auf `true` gesetzt wird ([Firefox Bug 1750902](https://bugzil.la/1750902)).

### WebDriver-Konformität (Marionette)

- Verbesserte Initialseitenladeprüfungen für neu geöffnete Tabs ([Firefox Bug 1747359](https://bugzil.la/1747359)).

## Änderungen für Add-on-Entwickler

- Web-Erweiterungen, die {{WebExtAPIRef("webRequest")}} verwenden, wurden früh während des Firefox-Starts gestartet. Dies wurde dahingehend geändert, dass der frühe Start nun nur für Erweiterungen mit blockierten {{WebExtAPIRef("webRequest")}}-Aufrufen ausgelöst wird. Nicht blockierende Aufrufe verursachen nicht mehr den frühen Start einer Erweiterung. ([Firefox Bug 1749871](https://bugzil.la/1749871))
- `cookieStoreId` wurde zu {{WebExtAPIRef("userScripts.register")}} hinzugefügt. Dies ermöglicht es Erweiterungen, container-spezifische Benutzerskripte zu registrieren ([Firefox Bug 1738567](https://bugzil.la/1738567)).
