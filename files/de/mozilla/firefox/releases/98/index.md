---
title: Firefox 98 Versionshinweise für Entwickler
short-title: Firefox 98
slug: Mozilla/Firefox/Releases/98
l10n:
  sourceCommit: 61912f53d01e935aea926a2226130fb4587414a9
---

Dieser Artikel bietet Informationen zu den Änderungen in Firefox 98, die Entwickler betreffen. Firefox 98 wurde am 8. März 2022 veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das HTML-{{HTMLElement("dialog")}}-Element ist jetzt standardmäßig verfügbar. Dieses Element und seine zugehörigen [DOM-APIs](/de/docs/Web/API/Document_Object_Model) bieten Unterstützung für HTML-basierte modale Dialogfelder ([Firefox-Bug 1733536](https://bugzil.la/1733536)).

### CSS

- Die {{cssxref("hyphenate-character")}}-Eigenschaft legt eine Zeichenfolge fest, die anstelle eines Bindestrichs (`-`) am Ende eines Silbenumbruchs verwendet wird ([Firefox-Bug 1751024](https://bugzil.la/1751024)).

### JavaScript

Keine bemerkenswerten Änderungen

### APIs

- [`navigator.registerProtocolHandler()`](/de/docs/Web/API/Navigator/registerProtocolHandler) kann jetzt Protokollhandler für die Schemata `ftp`, `sftp` und `ftps` registrieren ([Firefox-Bug 1705202](https://bugzil.la/1705202)).

#### DOM

- [`HTMLElement.outerText`](/de/docs/Web/API/HTMLElement/outerText) wird jetzt unterstützt ([Firefox-Bug 1709790](https://bugzil.la/1709790)).
- Die Eigenschaften `colorSpaceConversion`, `resizeWidth` und `resizeHeight` können an die Methoden [`Window.createImageBitmap()`](/de/docs/Web/API/Window/createImageBitmap) und [`WorkerGlobalScope.createImageBitmap()`](/de/docs/Web/API/WorkerGlobalScope/createImageBitmap) über das `options`-Objekt übergeben werden ([Firefox-Bug 1748868](https://bugzil.la/1748868) und [Firefox-Bug 1733559](https://bugzil.la/1733559)).
- [`ElementInternals`](/de/docs/Web/API/ElementInternals) verfügt jetzt über neue formularassoziierte benutzerdefinierte Elementmethoden und -eigenschaften, die es benutzerdefinierten Elementen ermöglichen, mit einem Formular zu interagieren.
  Dazu gehören die Eigenschaften [`form`](/de/docs/Web/API/ElementInternals/form), [`labels`](/de/docs/Web/API/ElementInternals/labels) und [`willValidate`](/de/docs/Web/API/ElementInternals/willValidate) sowie die Methode [`setFormValue()`](/de/docs/Web/API/ElementInternals/setFormValue).
  ([Firefox-Bug 1556362](https://bugzil.la/1556362), [Firefox-Bug 1556373](https://bugzil.la/1556373), [Firefox-Bug 1556365](https://bugzil.la/1556365), [Firefox-Bug 1556449](https://bugzil.la/1556449)).

#### Entfernen

- Die veraltete [WebVR-API](/de/docs/Web/API/WebVR_API) ist jetzt standardmäßig in allen Builds deaktiviert (zuvor war sie unter Windows, macOS und allen Nightly/Dev-Builds aktiviert).
  Sie kann in `about:config` wieder aktiviert werden, indem `dom.vr.enabled` auf `true` gesetzt wird ([Firefox-Bug 1750902](https://bugzil.la/1750902)).

### WebDriver-Konformität (Marionette)

- Verbesserte anfängliche Seitenladeprüfungen für neu geöffnete Tabs ([Firefox-Bug 1747359](https://bugzil.la/1747359)).

## Änderungen für Add-on-Entwickler

- Web-Erweiterungen, die {{WebExtAPIRef("webRequest")}} verwenden, wurden zu Beginn des Firefox-Startvorgangs frühzeitig gestartet. Dies wurde dahingehend geändert, dass der frühe Start nur noch für Erweiterungen ausgelöst wird, die blockierende Anrufe von {{WebExtAPIRef("webRequest")}} verwenden. Nicht blockierende Anrufe verursachen keinen frühen Start einer Erweiterung mehr. ([Firefox-Bug 1749871](https://bugzil.la/1749871))
- `cookieStoreId` wurde zu {{WebExtAPIRef("userScripts.register")}} hinzugefügt. Dies ermöglicht Erweiterungen, container-spezifische Benutzerskripte zu registrieren ([Firefox-Bug 1738567](https://bugzil.la/1738567)).
