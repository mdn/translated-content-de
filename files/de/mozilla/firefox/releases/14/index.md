---
title: Firefox 14 für Entwickler
short-title: Firefox 14
slug: Mozilla/Firefox/Releases/14
l10n:
  sourceCommit: 64df508685abcbc047f6c1a973505921fad1484e
---

Firefox 14 wurde am 17. Juli 2012 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler nützlich sind, sondern auch für Firefox- und Gecko-Entwickler sowie Add-on-Entwickler.

## Änderungen für Webentwickler

### HTML

- Das {{HTMLElement("progress")}}-Element wird nicht mehr fälschlicherweise als Formularelement klassifiziert und hat daher keine `form`-Attribut mehr.
- Die Standard-Modifier-Tasten für den [`accesskey`](/de/docs/Web/HTML/Reference/Global_attributes) von HTML-Inhalten auf Mac wurden auf Control+Option geändert. Dies entspricht den WebKit-basierten Browsern auf Mac.

### DOM

- [input](/de/docs/Web/API/Element/input_event)-Ereignisse werden auch beim Bearbeiten des Host-Elements von [contenteditable](/de/docs/Web/API/HTMLElement/contentEditable)-Editoren und Wurzelelementen von [designMode](/de/docs/Web/API/Document/designMode)-Editoren ausgelöst.
- [`DOMException.code`](/de/docs/Web/API/DOMException) wird entsprechend der neuesten DOM Level 4-Spezifikation nun als veraltet angesehen.
- Die Methode [`Range.insertNode()`](/de/docs/Web/API/Range/insertNode) funktioniert jetzt korrekt, wenn sie auf kollabierten Bereichen verwendet wird.
- Die `MozBlobBuilder`-Schnittstelle wurde zugunsten des Konstruktors in [`Blob`](/de/docs/Web/API/Blob) veraltet. Wenn Sie `MozBlobBuilder` verwenden, wird eine Warnmeldung in der Webkonsole angezeigt.
- Der [`Blob()`](/de/docs/Web/API/Blob/Blob)-Konstruktor ist jetzt auch für Worker verfügbar ([Firefox-Bug 736686](https://bugzil.la/736686)).
- Unterstützung für die [Mutation Observers](/de/docs/Web/API/MutationObserver) wurde implementiert. Sie ist als Ersatz für die Mutationsereignisse in DOM3 gedacht, die eine Reihe von Problemen bezüglich der Leistung aufweisen.
- Die `x`- und `y`-Eigenschaften der [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Schnittstelle wurden in Firefox 7.0 entfernt, aber in dieser Version aus Kompatibilitätsgründen wiederhergestellt.
- Die [`Document`](/de/docs/Web/API/Document)-Methoden `execCommandShowHelp()` und `queryCommandText()`, die nie etwas getan haben, wurden entfernt.
- Die `GeoPositionAddress`-Schnittstelle, ein veralteter Teil der [Geolocation](/de/docs/Web/API/Geolocation_API)-API, wurde entfernt.
- [`localStorage/sessionStorage`](/de/docs/Web/API/Storage) geben jetzt korrekt `undefined` statt `null` für nicht deklarierte Schlüssel durch Eigenschaftenzugriff zurück.
- Das [`ImageData`](/de/docs/Web/API/ImageData)-Objekt wurde implementiert ([Firefox-Bug 550309](https://bugzil.la/550309)).
- Attribute und Methoden, die sich auf Kindknoten der [`Attr`](/de/docs/Web/API/Attr)-Schnittstelle beziehen, wurden obsolet ([Firefox-Bug 737122](https://bugzil.la/737122)).

### CSS

- Die CSS-Eigenschaften {{cssxref("text-transform")}} und {{cssxref("font-variant")}} wurden korrigiert, um die turkikspezifischen Fallpaare `i` → `İ` und `ı` → `I` korrekt zu behandeln.
- Der niederländische IJ-Digraph wird jetzt korrekt durch `text-transform: capitalization` behandelt. Ebenso wird der griechische Buchstabe `Σ`, der zwei Kleinbuchstabenformen hat, `σ` und `ς`, jetzt korrekt durch `text-transform: lowercase` behandelt.
- Unterstützung für die `skew()`-Funktion wurde aus der {{cssxref("transform")}}-Eigenschaft entfernt, da sie aus dem Entwurfsstandard entfernt wurde.
- Die Syntax für {{cssxref("border-image")}} wurde aktualisiert, um der neuesten Überarbeitung der Spezifikation zu entsprechen; es akzeptiert keinen abschließenden Schrägstrich ("/") mehr.

### JavaScript

_Keine Änderung._

### MathML

- Die Syntax des `statusline`-Aktionstyps auf {{MathMLElement("maction")}}-Elementen wurde angepasst, um der MathML-Spezifikation zu folgen.

### HTTP

- Gecko unterstützt jetzt den neuen [HTTP](/de/docs/Web/HTTP) [`308 Permanent Redirect`](/de/docs/Web/HTTP/Reference/Status/308)-Statuscode. Da Gecko keinen Unterschied zwischen permanenten und temporären Weiterleitungen macht, verhält es sich wie der [`307 Temporary Redirect`](/de/docs/Web/HTTP/Reference/Status/307)-Statuscode, da es dem Benutzeragenten verbietet, die HTTP-Methode zwischen den beiden Anfragen zu ändern (`POST` bleibt `POST`, `GET` bleibt `GET`).

## Änderungen für Mozilla- und Add-on-Entwickler

### JavaScript-Code-Module

#### source-editor.jsm

- Eine Tastenkombination zum Umschalten des Kommentierens für die aktuelle Auswahl wurde hinzugefügt (Strg-/ oder Cmd-/ auf Mac OS X).
- Die Tastenkombinationen Strg-\[ und Strg-] wurden hinzugefügt, um die Texteinfügeposition an den Anfang und das Ende des aktuellen Blocks zu verschieben.
- Die neuen Methoden [`getLineStart()`](/de/docs/JavaScript_code_modules/source-editor.jsm#getLineStart%28%29) und [`getLineEnd()`](/de/docs/JavaScript_code_modules/source-editor.jsm#getLineEnd%28%29) wurden hinzugefügt.

### XUL

- Das neue `fullscreenbutton`-Attribut wurde dem `<window>`-Element hinzugefügt; wenn es auf `true` gesetzt ist, wird der Fensteroberfläche ein Button hinzugefügt, um den Vollbildmodus zu aktivieren.

### Schnittstellen

- Die `nsILocalFile`-Schnittstelle wurde in `nsIFile` zusammengeführt ([Bug 682360](https://bugzil.la/682360)).
- Die Methoden im `nsIPlacesImportExportService` zum Importieren von Lesezeichen wurden alle zugunsten des JavaScript-Code-Moduls [`BookmarkHTMLUtils.jsm`](/de/docs/JavaScript_code_modules/BookmarkHTMLUtils.jsm) entfernt.
- Die `nsIDOMGeoPositionAddress`-Schnittstelle wurde entfernt.
- Die Methoden `getItemGUID`, `setItemGUID` und `getItemIdForGUID` wurden aus dem `nsINavBookmarksService` entfernt ([Firefox-Bug 715355](https://bugzil.la/715355)).

### Rechtschreibprüfung

- Wörterbuchnamen werden nun als vollständige [BCP 47](https://www.rfc-editor.org/info/bcp47)-Sprachtags geparst ([Bug 730209](https://bugzil.la/730209), [Bug 741842](https://bugzil.la/741842)). Entwicklern wird empfohlen, den Namen ihrer Sprache nicht fest im Wörterbuchnamen zu codieren.
