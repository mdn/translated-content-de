---
title: Versionshinweise für Entwickler zu Firefox 14
short-title: Firefox 14
slug: Mozilla/Firefox/Releases/14
l10n:
  sourceCommit: 61912f53d01e935aea926a2226130fb4587414a9
---

Firefox 14 wurde am 17. Juli 2012 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler nützlich sind, sondern auch für Firefox- und Gecko-Entwickler sowie für Entwickler von Add-ons.

## Änderungen für Webentwickler

### HTML

- Das {{HTMLElement("progress")}}-Element wird nicht mehr fälschlicherweise als Formularelement klassifiziert und hat daher kein `form`-Attribut mehr.
- Die standardmäßigen Modifikatortasten für das [`accesskey`](/de/docs/Web/HTML/Reference/Global_attributes) von HTML-Inhalten auf dem Mac wurden auf Control+Option geändert. Dies entspricht den WebKit-basierten Browsern auf dem Mac.

### DOM

- [input](/de/docs/Web/API/Element/input_event)-Ereignisse werden jetzt auch auf dem Bearbeitungshostelement von [contenteditable](/de/docs/Web/API/HTMLElement/contentEditable)-Editoren und dem Wurzelelement von [designMode](/de/docs/Web/API/Document/designMode)-Editoren ausgelöst.
- [`DOMException.code`](/de/docs/Web/API/DOMException) ist nun gemäß der neuesten DOM Level 4-Spezifikation veraltet.
- Die Methode [`Range.insertNode()`](/de/docs/Web/API/Range/insertNode) funktioniert jetzt korrekt, wenn sie auf kollabierten Bereichen verwendet wird.
- Das `MozBlobBuilder`-Interface wurde zugunsten des Konstruktors für [`Blob`](/de/docs/Web/API/Blob) veraltet. Wenn Sie `MozBlobBuilder` verwenden, wird im Webkonsole eine Warnmeldung angezeigt.
- Der [`Blob()`](/de/docs/Web/API/Blob/Blob)-Konstruktor ist jetzt für Worker verfügbar ([Firefox-Bug 736686](https://bugzil.la/736686)).
- Unterstützung für die [Mutation Observers](/de/docs/Web/API/MutationObserver) wurde integriert. Diese sind als Ersatz für die Mutation Events in DOM3 konzipiert, die eine Reihe von Problemen hinsichtlich der Leistung aufweisen.
- Die `x`- und `y`-Eigenschaften des [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Interfaces wurden in Firefox 7.0 entfernt, aber für Kompatibilitätsgründe in dieser Version wiederhergestellt.
- Die [`Document`](/de/docs/Web/API/Document)-Methoden `execCommandShowHelp()` und `queryCommandText()`, die nie funktionierten, wurden entfernt.
- Das `GeoPositionAddress`-Interface, ein veralteter Teil der [Geolocation](/de/docs/Web/API/Geolocation_API)-API, wurde entfernt.
- [`localStorage/sessionStorage`](/de/docs/Web/API/Storage) geben jetzt korrekt `undefined` statt `null` für nicht deklarierte Schlüssel durch Zugriff auf Eigenschaften zurück.
- Das [`ImageData`](/de/docs/Web/API/ImageData)-Objekt wurde implementiert ([Firefox-Bug 550309](https://bugzil.la/550309)).
- Attribute und Methoden im Zusammenhang mit Kindknoten auf dem [`Attr`](/de/docs/Web/API/Attr)-Interface wurden veraltet ([Firefox-Bug 737122](https://bugzil.la/737122)).

### CSS

- Die CSS-Eigenschaften {{cssxref("text-transform")}} und {{cssxref("font-variant")}} wurden korrigiert, um die Turkisch spezifischen Fallpaare `i` → `İ` und `ı` → `I` korrekt zu behandeln.
- Das niederländische IJ-Digraph wird nun korrekt von `text-transform: capitalization` behandelt. Ebenso wird der griechische Buchstabe `Σ`, der zwei Kleinbuchstabenformen `σ` und `ς` hat, jetzt korrekt von `text-transform: lowercase` behandelt.
- Die Unterstützung für die `skew()`-Funktion wurde aus der {{cssxref("transform")}}-Eigenschaft entfernt, da sie aus dem Entwurfsstandard entfernt wurde.
- Die Syntax für {{cssxref("border-image")}} wurde aktualisiert, um der neuesten Überarbeitung der Spezifikation zu entsprechen; sie akzeptiert keinen abschließenden Schrägstrich ("/") mehr.

### JavaScript

_Keine Änderung._

### MathML

- Die Syntax des `statusline`-Aktionstyps auf {{MathMLElement("maction")}}-Elementen wurde angepasst, um der MathML-Spezifikation zu folgen.

### HTTP

- Gecko unterstützt jetzt den neuen [HTTP](/de/docs/Web/HTTP) [`308 Permanent Redirect`](/de/docs/Web/HTTP/Reference/Status/308)-Statuscode. Da Gecko keine Unterscheidung zwischen permanenten und temporären Weiterleitungen macht, verhält es sich wie der [`307 Temporary Redirect`](/de/docs/Web/HTTP/Reference/Status/307)-Statuscode, da es dem Benutzeragenten verbietet, die zwischen den Anfragen verwendete HTTP-Methode zu ändern (`POST` bleibt `POST`, `GET` bleibt `GET`).

## Änderungen für Mozilla- und Add-on-Entwickler

### JavaScript-Code-Module

#### source-editor.jsm

- Eine Tastenkombination zum Umschalten der Kommentierung für die aktuelle Auswahl wurde hinzugefügt (Strg-/ oder Cmd-/ auf Mac OS X).
- Die Tastenkombinationen Strg-\[ und Strg-] wurden hinzugefügt, um die Text-Eingabeposition zum Anfang und Ende des aktuellen Blocks zu verschieben.
- Die neuen Methoden [`getLineStart()`](https://web.archive.org/web/20210620193439/https://developer.mozilla.org/de/docs/Mozilla/JavaScript_code_modules/source-editor.jsm#getLineStart%28%29) und [`getLineEnd()`](https://web.archive.org/web/20210620193439/https://developer.mozilla.org/de/docs/Mozilla/JavaScript_code_modules/source-editor.jsm#getLineEnd%28%29) wurden hinzugefügt.

### XUL

- Das neue `fullscreenbutton`-Attribut wurde zum `<window>`-Element hinzugefügt; durch Setzen auf `true` wird der Fensterschirm um eine Schaltfläche erweitert, um den Vollbildmodus zu aktivieren.

### Schnittstellen

- Das `nsILocalFile`-Interface wurde in `nsIFile` zusammengeführt ([Bug 682360](https://bugzil.la/682360)).
- Die Methoden in `nsIPlacesImportExportService` zum Importieren von Lesezeichen wurden alle zugunsten des `BookmarkHTMLUtils.jsm`-JavaScript-Code-Moduls entfernt.
- Das `nsIDOMGeoPositionAddress`-Interface wurde entfernt.
- Die Methoden `getItemGUID`, `setItemGUID` und `getItemIdForGUID` wurden aus `nsINavBookmarksService` entfernt ([Firefox-Bug 715355](https://bugzil.la/715355)).

### Rechtschreibprüfung

- Wörterbuchnamen werden jetzt als vollständige {{Glossary("BCP_47_language_tag", "BCP 47-Sprach-Tags")}} analysiert ([Bug 730209](https://bugzil.la/730209), [Bug 741842](https://bugzil.la/741842)). Entwickler werden ermutigt, den Namen ihrer Sprache nicht fest in ihren Wörterbuchnamen zu codieren.
