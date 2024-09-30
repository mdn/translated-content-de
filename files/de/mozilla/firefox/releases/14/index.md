---
title: Firefox 14 für Entwickler
slug: Mozilla/Firefox/Releases/14
l10n:
  sourceCommit: 1822cdf5a86574429c4c49883a402663ef16a4ef
---

{{FirefoxSidebar}}

Firefox 14 wurde am 17. Juli 2012 veröffentlicht. Dieser Artikel listet die wichtigsten Änderungen auf, die sowohl für Webentwickler als auch für Entwickler von Firefox und Gecko sowie Add-on-Entwickler nützlich sind.

## Änderungen für Webentwickler

### HTML

- Das {{HTMLElement("progress")}}-Element wird nicht mehr fälschlicherweise als Formularelement klassifiziert und hat daher kein `form`-Attribut mehr.
- Die Standardmodifikatortasten für den [`accesskey`](/de/docs/Web/HTML/Global_attributes) von HTML-Inhalten auf Mac wurden auf Control+Option geändert. Dies entspricht den WebKit-basierten Browsern auf Mac.

### DOM

- [input](/de/docs/Web/API/Element/input_event)-Ereignisse werden nun auch auf dem Bearbeitungshost-Element des [contenteditable](/de/docs/Web/API/HTMLElement/contentEditable)-Editors und dem Wurzelelement des [designMode](/de/docs/Web/API/Document/designMode)-Editors ausgelöst.
- [`DOMException.code`](/de/docs/Web/API/DOMException) ist nun gemäß der neuesten DOM Level 4-Spezifikation veraltet.
- Die Methode [`Range.insertNode()`](/de/docs/Web/API/Range/insertNode) funktioniert nun korrekt, wenn sie auf zusammengeklappten Bereichen verwendet wird.
- Die `MozBlobBuilder`-Schnittstelle wurde zugunsten des Konstruktors auf [`Blob`](/de/docs/Web/API/Blob) abgekündigt. Wenn Sie `MozBlobBuilder` verwenden, wird eine Warnmeldung in der Webkonsole angezeigt.
- Der [`Blob()`](/de/docs/Web/API/Blob/Blob)-Konstruktor ist nun auch in Workern verfügbar ([Firefox-Bug 736686](https://bugzil.la/736686)).
- Die Unterstützung für die [Mutation Observers](/de/docs/Web/API/MutationObserver) wurde eingeführt. Sie sind als Ersatz für die veralteten Mutation Events in DOM3 gedacht, die verschiedene Leistungsprobleme aufweisen.
- Die `x`- und `y`-Eigenschaften des [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Interfaces, die in Firefox 7.0 entfernt wurden, wurden aus Kompatibilitätsgründen in dieser Version wiederhergestellt.
- Die [`Document`](/de/docs/Web/API/Document)-Methoden `execCommandShowHelp()` und `queryCommandText()`, die nie eine Funktion hatten, wurden entfernt.
- Das `GeoPositionAddress`-Interface, ein veralteter Teil der [Geolocation](/de/docs/Web/API/Geolocation_API)-API, wurde entfernt.
- [`localStorage/sessionStorage`](/de/docs/Web/API/Storage) geben nun korrekt `undefined` statt `null` für nicht deklarierte Schlüssel durch den Eigenschaftszugriff zurück.
- Das [`ImageData`](/de/docs/Web/API/ImageData)-Objekt wurde implementiert ([Firefox-Bug 550309](https://bugzil.la/550309)).
- Attribute und Methoden im Bezug auf Kindknoten auf dem [`Attr`](/de/docs/Web/API/Attr)-Interface wurden veraltet ([Firefox-Bug 737122](https://bugzil.la/737122)).

### CSS

- Die CSS-Eigenschaften {{cssxref("text-transform")}} und {{cssxref("font-variant")}} wurden korrigiert, um die `i` → `İ` und `ı` → `I` [türkisch](https://de.wikipedia.org/wiki/T%C3%BCrkische_Sprachen)-spezifischen Fallpaare korrekt zu handhaben.
- Das niederländische IJ-Digraph wird nun korrekt mit `text-transform: capitalization` behandelt. Ebenso wird der griechische Buchstabe `Σ`, der zwei Kleinbuchstabenformen `σ` und `ς` hat, nun korrekt mit `text-transform: lowercase` behandelt.
- Die Unterstützung für die `skew()`-Funktion wurde aus der {{cssxref("transform")}}-Eigenschaft entfernt, da sie aus dem Entwurfsstandard entfernt wurde.
- Die Syntax für {{cssxref("border-image")}} wurde aktualisiert, um der neuesten Revision der Spezifikation zu entsprechen; sie akzeptiert keinen abschließenden Schrägstrich ("/") mehr.

### JavaScript

_Keine Änderung._

### MathML

- Die Syntax des `statusline`-Aktionstyps auf den {{MathMLElement("maction")}}-Elementen wurde angepasst, um der MathML-Spezifikation zu folgen.

### HTTP

- Gecko unterstützt nun den neuen [HTTP](/de/docs/Web/HTTP) [`308 Permanent Redirect`](/de/docs/Web/HTTP/Status#308)-Statuscode. Da Gecko keinen Unterschied zwischen permanenten und temporären Umleitungen macht, verhält es sich wie der [`307 Temporary Redirect`](/de/docs/Web/HTTP/Status#307)-Statuscode, da er das Ändern der HTTP-Methode zwischen den beiden Anfragen verbietet (`POST` bleibt `POST`, `GET` bleibt `GET`).

## Änderungen für Mozilla- und Add-on-Entwickler

### JavaScript-Code-Module

#### source-editor.jsm

- Ein Tastaturkürzel wurde hinzugefügt, um das Kommentieren der aktuellen Auswahl umzuschalten (Ctrl-/ oder Cmd-/ auf Mac OS X).
- Die Tastaturkürzel Ctrl-\[ und Ctrl-] wurden hinzugefügt, um die Texteinfügeposition zum Anfang und Ende des aktuellen Blocks zu bewegen.
- Die neuen Methoden [`getLineStart()`](/de/docs/JavaScript_code_modules/source-editor.jsm#getLineStart%28%29) und [`getLineEnd()`](/de/docs/JavaScript_code_modules/source-editor.jsm#getLineEnd%28%29) wurden hinzugefügt.

### XUL

- Das neue `fullscreenbutton`-Attribut wurde zum `<window>`-Element hinzugefügt; durch Einstellen auf `true` wird dem Fensterchrome eine Schaltfläche hinzugefügt, um den Vollbildmodus zu aktivieren.

### Schnittstellen

- Das `nsILocalFile`-Interface wurde in `nsIFile` zusammengeführt ([bug 682360](https://bugzil.la/682360)).
- Die Methoden in `nsIPlacesImportExportService` zum Importieren von Lesezeichen wurden allesamt zugunsten des [`BookmarkHTMLUtils.jsm`](/de/docs/JavaScript_code_modules/BookmarkHTMLUtils.jsm) JavaScript-Code-Moduls entfernt.
- Das `nsIDOMGeoPositionAddress`-Interface wurde entfernt.
- Die Methoden `getItemGUID`, `setItemGUID` und `getItemIdForGUID` wurden aus `nsINavBookmarksService` entfernt ([Firefox-Bug 715355](https://bugzil.la/715355)).

### Rechtschreibprüfung

- Wörterbuchnamen werden jetzt als vollständige [BCP 47](https://www.rfc-editor.org/info/bcp47)-Sprach-Tags geparst ([bug 730209](https://bugzil.la/730209), [bug 741842](https://bugzil.la/741842)). Entwickler werden ermutigt, den Namen ihrer Sprache nicht in ihren Wörterbuchnamen einzuhärten.

## Siehe auch

{{Firefox_for_developers}}
