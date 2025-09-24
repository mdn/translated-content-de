---
title: Firefox 14 für Entwickler
short-title: Firefox 14
slug: Mozilla/Firefox/Releases/14
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

Firefox 14 wurde am 17. Juli 2012 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler nützlich sind, sondern auch für Firefox- und Gecko-Entwickler sowie Add-on-Entwickler.

## Änderungen für Webentwickler

### HTML

- Das {{HTMLElement("progress")}}-Element wird nicht mehr fälschlicherweise als Formularelement klassifiziert und hat daher kein `form`-Attribut mehr.
- Die Standardmodifikator-Tasten für das [`accesskey`](/de/docs/Web/HTML/Reference/Global_attributes) von HTML-Inhalten auf Mac wurden auf Control+Option geändert. Dies entspricht den WebKit-basierten Browsern auf Mac.

### DOM

- [input](/de/docs/Web/API/Element/input_event)-Ereignisse werden auch beim Bearbeiten des Host-Elements des [contenteditable](/de/docs/Web/API/HTMLElement/contentEditable)-Editors und des Wurzelelements des [designMode](/de/docs/Web/API/Document/designMode)-Editors ausgelöst.
- [`DOMException.code`](/de/docs/Web/API/DOMException) ist jetzt gemäß der neuesten DOM Level 4-Spezifikation veraltet.
- Die Methode [`Range.insertNode()`](/de/docs/Web/API/Range/insertNode) funktioniert jetzt korrekt, wenn sie auf kollabierte Bereiche angewendet wird.
- Das `MozBlobBuilder`-Interface ist zugunsten des Konstruktors auf [`Blob`](/de/docs/Web/API/Blob) veraltet. Wenn Sie `MozBlobBuilder` verwenden, wird eine Warnmeldung in der Web-Konsole angezeigt.
- Der [`Blob()`](/de/docs/Web/API/Blob/Blob)-Konstruktor ist jetzt für Worker verfügbar ([Firefox-Bug 736686](https://bugzil.la/736686)).
- Unterstützung für die [Mutation Observers](/de/docs/Web/API/MutationObserver) wurde eingeführt. Diese sind als Ersatz für die Mutation Events in DOM3 konzipiert, die eine Reihe von Performance-Problemen aufweisen.
- Die `x`- und `y`-Eigenschaften der [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Schnittstelle, die in Firefox 7.0 entfernt, aber in dieser Version aus Kompatibilitätsgründen wiederhergestellt wurden.
- Die [`Document`](/de/docs/Web/API/Document)-Methoden `execCommandShowHelp()` und `queryCommandText()`, die nie etwas bewirkten, wurden entfernt.
- Das `GeoPositionAddress`-Interface, ein veralteter Teil der [Geolocation](/de/docs/Web/API/Geolocation_API)-API, wurde entfernt.
- [`localStorage/sessionStorage`](/de/docs/Web/API/Storage) geben jetzt korrekt `undefined` anstelle von `null` für nicht deklarierte Schlüssel über den Zugriff auf Eigenschaften zurück.
- Das [`ImageData`](/de/docs/Web/API/ImageData)-Objekt wurde implementiert ([Firefox-Bug 550309](https://bugzil.la/550309)).
- Attribute und Methoden im Zusammenhang mit Kindknoten auf der [`Attr`](/de/docs/Web/API/Attr)-Schnittstelle wurden obsolet ([Firefox-Bug 737122](https://bugzil.la/737122)).

### CSS

- Die {{cssxref("text-transform")}}- und {{cssxref("font-variant")}}-CSS-Eigenschaften wurden korrigiert, um die türkispezifischen Fallpaare `i` → `İ` und `ı` → `I` korrekt zu behandeln.
- Das niederländische IJ-Digraph wird jetzt korrekt von `text-transform: capitalize` behandelt. Ebenso wird der griechische Buchstabe `Σ`, der zwei Kleinbuchstabenformen `σ` und `ς` hat, jetzt korrekt von `text-transform: lowercase` behandelt.
- Die Unterstützung für die `skew()`-Funktion wurde aus der {{cssxref("transform")}}-Eigenschaft entfernt, da sie aus dem Entwurfsstandard entfernt wurde.
- Die Syntax für {{cssxref("border-image")}} wurde aktualisiert, um der neuesten Revision der Spezifikation zu entsprechen; sie akzeptiert jetzt keinen abschließenden Schrägstrich ("/") mehr.

### JavaScript

_Keine Änderungen._

### MathML

- Die Syntax des `statusline`-Aktionstyps auf {{MathMLElement("maction")}}-Elementen wurde angepasst, um der MathML-Spezifikation zu folgen.

### HTTP

- Gecko unterstützt jetzt den neuen [HTTP](/de/docs/Web/HTTP) [`308 Permanent Redirect`](/de/docs/Web/HTTP/Reference/Status/308)-Statuscode. Da Gecko keinen Unterschied zwischen permanenten und temporären Umleitungen macht, verhält er sich wie der [`307 Temporary Redirect`](/de/docs/Web/HTTP/Reference/Status/307)-Statuscode und verhindert, dass der User-Agent die HTTP-Methode zwischen den beiden Anfragen ändert (`POST` bleibt `POST`, `GET` bleibt `GET`).

## Änderungen für Mozilla- und Add-on-Entwickler

### JavaScript-Code-Module

#### source-editor.jsm

- Eine Tastenkombination zum Umschalten von Kommentaren für die aktuelle Auswahl hinzugefügt (Ctrl-/ oder Cmd-/ auf Mac OS X).
- Die Tastenkombinationen Ctrl-\[ und Ctrl-] wurden hinzugefügt, um die Textinput-Position an den Anfang und das Ende des aktuellen Blocks zu bewegen.
- Die neuen Methoden [`getLineStart()`](https://web.archive.org/web/20210620193439/https://developer.mozilla.org/de/docs/Mozilla/JavaScript_code_modules/source-editor.jsm#getLineStart%28%29) und [`getLineEnd()`](https://web.archive.org/web/20210620193439/https://developer.mozilla.org/de/docs/Mozilla/JavaScript_code_modules/source-editor.jsm#getLineEnd%28%29) hinzugefügt.

### XUL

- Das neue `fullscreenbutton`-Attribut wurde dem `<window>`-Element hinzugefügt; das Setzen auf `true` fügt der Fenster-Chrome eine Schaltfläche hinzu, um den Vollbildmodus zu aktivieren.

### Schnittstellen

- Das `nsILocalFile`-Interface wurde in `nsIFile` integriert ([Bug 682360](https://bugzil.la/682360)).
- Die Methoden im `nsIPlacesImportExportService` zum Importieren von Lesezeichen wurden zugunsten des `BookmarkHTMLUtils.jsm`-JavaScript-Code-Moduls entfernt.
- Das `nsIDOMGeoPositionAddress`-Interface wurde entfernt.
- Die Methoden `getItemGUID`, `setItemGUID` und `getItemIdForGUID` wurden aus `nsINavBookmarksService` entfernt ([Firefox-Bug 715355](https://bugzil.la/715355)).

### Rechtschreibprüfung

- Wörterbuchnamen werden jetzt als vollständige {{Glossary("BCP_47_language_tag", "BCP 47 Sprach-Tags")}} geparst ([Bug 730209](https://bugzil.la/730209), [Bug 741842](https://bugzil.la/741842)). Entwickler werden ermutigt, den Namen ihrer Sprache nicht hartkodiert in ihren Wörterbuchnamen zu verwenden.
