---
title: Firefox-14-Versionshinweise für Entwickler
short-title: Firefox 14
slug: Mozilla/Firefox/Releases/14
l10n:
  sourceCommit: a23122d0e86fb376234614beb5b350b217068054
---

Firefox 14 wurde am 17. Juli 2012 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler, sondern auch für Firefox- und Gecko-Entwickler sowie Add-on-Entwickler nützlich sind.

## Änderungen für Webentwickler

### HTML

- Das {{HTMLElement("progress")}}-Element wird nicht mehr fälschlicherweise als Formularelement klassifiziert und verfügt daher nicht mehr über ein `form`-Attribut.
- Die Standard-Modifikatortasten für den [`accesskey`](/de/docs/Web/HTML/Reference/Global_attributes) von HTML-Inhalten auf Mac wurden zu Control+Option geändert. Dies entspricht WebKit-basierten Browsern auf Mac.

### DOM

- [input](/de/docs/Web/API/Element/input_event)-Ereignisse werden auch beim Editing-Host-Element eines [contenteditable](/de/docs/Web/API/HTMLElement/contentEditable)-Editors und beim Wurzelelement eines [designMode](/de/docs/Web/API/Document/designMode)-Editors ausgelöst.
- [`DOMException.code`](/de/docs/Web/API/DOMException) ist nun gemäß der neuesten DOM-Level-4-Spezifikation veraltet.
- Die Methode [`Range.insertNode()`](/de/docs/Web/API/Range/insertNode) funktioniert nun korrekt, wenn sie für kollabierte Ranges verwendet wird.
- Die Schnittstelle `MozBlobBuilder` wurde zugunsten des Konstruktors von [`Blob`](/de/docs/Web/API/Blob) als veraltet markiert. Wenn Sie `MozBlobBuilder` verwenden, wird in der Web-Konsole eine Warnmeldung angezeigt.
- Der Konstruktor [`Blob()`](/de/docs/Web/API/Blob/Blob) ist nun für Worker verfügbar ([Firefox-Bug 736686](https://bugzil.la/736686)).
- Unterstützung für [Mutation Observers](/de/docs/Web/API/MutationObserver) wurde hinzugefügt. Sie sind als Ersatz für die Mutation Events in DOM3 vorgesehen, die mehrere Probleme hinsichtlich der Performance aufweisen.
- Die Eigenschaften `x` und `y` der Schnittstelle [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) wurden in Firefox 7.0 entfernt, aber in dieser Version aus Kompatibilitätsgründen wiederhergestellt.
- Die Methoden `execCommandShowHelp()` und `queryCommandText()` von [`Document`](/de/docs/Web/API/Document), die nie etwas bewirkten, wurden entfernt.
- Die Schnittstelle `GeoPositionAddress`, ein veralteter Teil der [Geolocation](/de/docs/Web/API/Geolocation_API)-API, wurde entfernt.
- [`localStorage/sessionStorage`](/de/docs/Web/API/Storage) geben nun bei nicht deklarierten Schlüsseln über den Eigenschaftszugriff korrekt `undefined` statt `null` zurück.ff
- Das Objekt [`ImageData`](/de/docs/Web/API/ImageData) wurde implementiert ([Firefox-Bug 550309](https://bugzil.la/550309)).
- Attribute und Methoden der Schnittstelle [`Attr`](/de/docs/Web/API/Attr), die sich auf Kindknoten beziehen, wurden als veraltet markiert ([Firefox-Bug 737122](https://bugzil.la/737122)).

### CSS

- Die CSS-Eigenschaften {{cssxref("text-transform")}} und {{cssxref("font-variant")}} wurden korrigiert, um die `i` → `İ`- und `ı` → `I`-[Turkic](https://en.wikipedia.org/wiki/Turkic_languages)-spezifischen Groß-/Kleinschreibungspaare korrekt zu behandeln.
- Der niederländische IJ-Digraph wird nun von `text-transform: capitalization` korrekt behandelt. Ebenso wird der griechische Buchstabe `Σ`, der zwei Kleinbuchstabenformen, `σ` und `ς`, hat, nun von `text-transform: lowercase` korrekt behandelt.
- Die Unterstützung für die Funktion `skew()` wurde aus der Eigenschaft {{cssxref("transform")}} entfernt, da sie aus dem Standardentwurf entfernt wurde.
- Die Syntax für {{cssxref("border-image")}} wurde an die neueste Überarbeitung der Spezifikation angepasst; ein abschließender Schrägstrich ("/") wird nicht mehr akzeptiert.

### JavaScript

_Keine Änderungen._

### MathML

- Die Syntax des Aktionstyps `statusline` bei {{MathMLElement("maction")}}-Elementen wurde angepasst, um der MathML-Spezifikation zu entsprechen.

### HTTP

- Gecko unterstützt nun den neuen [HTTP](/de/docs/Web/HTTP)-Statuscode [`308 Permanent Redirect`](/de/docs/Web/HTTP/Reference/Status/308). Da Gecko nicht zwischen permanenten und temporären Weiterleitungen unterscheidet, verhält er sich wie der Statuscode [`307 Temporary Redirect`](/de/docs/Web/HTTP/Reference/Status/307), da er dem User Agent verbietet, die zwischen den beiden Anfragen verwendete HTTP-Methode zu ändern (`POST` bleibt `POST`, `GET` bleibt `GET`).

## Änderungen für Mozilla- und Add-on-Entwickler

### JavaScript-Code-Module

#### source-editor.jsm

- Eine Tastenkombination wurde hinzugefügt, um die Kommentierung für die aktuelle Auswahl umzuschalten (Ctrl-/ oder Cmd-/ unter Mac OS X).
- Die Tastenkombinationen Ctrl-\[ und Ctrl-] wurden hinzugefügt, um die Texteingabeposition an den Anfang bzw. das Ende des aktuellen Blocks zu verschieben.
- Die neuen Methoden [`getLineStart()`](https://web.archive.org/web/20210620193439/https://developer.mozilla.org/de/docs/Mozilla/JavaScript_code_modules/source-editor.jsm#getLineStart%28%29) und [`getLineEnd()`](https://web.archive.org/web/20210620193439/https://developer.mozilla.org/de/docs/Mozilla/JavaScript_code_modules/source-editor.jsm#getLineEnd%28%29) wurden hinzugefügt.

### XUL

- Das neue Attribut `fullscreenbutton` wurde dem `<window>`-Element hinzugefügt; das Setzen auf `true` fügt dem Chrome des Fensters eine Schaltfläche hinzu, um den Vollbildmodus zu aktivieren.

### Schnittstellen

- Die Schnittstelle `nsILocalFile` wurde in `nsIFile` integriert ([Bug 682360](https://bugzil.la/682360)).
- Die Methoden in `nsIPlacesImportExportService` zum Importieren von Lesezeichen wurden vollständig zugunsten des JavaScript-Code-Moduls `BookmarkHTMLUtils.jsm` entfernt.
- Die Schnittstelle `nsIDOMGeoPositionAddress` wurde entfernt.
- Die Methoden `getItemGUID`, `setItemGUID` und `getItemIdForGUID` wurden aus `nsINavBookmarksService` entfernt ([Firefox-Bug 715355](https://bugzil.la/715355)).

### Rechtschreibprüfung

- Wörterbuchnamen werden nun als vollständige {{Glossary("BCP_47_language_tag", "BCP-47-Sprach-Tags")}} analysiert ([Bug 730209](https://bugzil.la/730209), [Bug 741842](https://bugzil.la/741842)). Entwickler sollten den Namen ihrer Sprache nicht fest in ihren Wörterbuchnamen kodieren.
