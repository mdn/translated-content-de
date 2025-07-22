---
title: Firefox 14 für Entwickler
short-title: Firefox 14
slug: Mozilla/Firefox/Releases/14
l10n:
  sourceCommit: 2591a9b59de88401a2ef0fb7d0b8d0281e3f5376
---

Firefox 14 wurde am 17. Juli 2012 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler nützlich sind, sondern auch für Firefox- und Gecko-Entwickler sowie Add-on-Entwickler.

## Änderungen für Webentwickler

### HTML

- Das {{HTMLElement("progress")}}-Element wird nicht länger fälschlicherweise als Formularelement klassifiziert und hat daher kein `form`-Attribut mehr.
- Die Standardmodifikatortasten für das [`accesskey`](/de/docs/Web/HTML/Reference/Global_attributes) von HTML-Inhalten auf Mac wurden auf Control+Option geändert. Dies entspricht den WebKit-basierten Browsern auf Mac.

### DOM

- [input](/de/docs/Web/API/Element/input_event)-Ereignisse werden nun auch bei Änderungen des Host-Elements des [contenteditable](/de/docs/Web/API/HTMLElement/contentEditable)-Editors und des Root-Elements des [designMode](/de/docs/Web/API/Document/designMode)-Editors ausgelöst.
- [`DOMException.code`](/de/docs/Web/API/DOMException) ist nun gemäß der neuesten DOM Level 4-Spezifikation veraltet.
- Die Methode [`Range.insertNode()`](/de/docs/Web/API/Range/insertNode) funktioniert jetzt korrekt, wenn sie auf kollabierten Bereichen verwendet wird.
- Das `MozBlobBuilder`-Interface wurde zugunsten des Konstruktors auf [`Blob`](/de/docs/Web/API/Blob) abgelöst. Wenn Sie `MozBlobBuilder` verwenden, wird eine Warnmeldung in der Webkonsole angezeigt.
- Der [`Blob()`](/de/docs/Web/API/Blob/Blob)-Konstruktor ist nun für Worker verfügbar ([Firefox-Bug 736686](https://bugzil.la/736686)).
- Unterstützung für die [Mutation Observers](/de/docs/Web/API/MutationObserver) wurde implementiert. Diese sind als Ersatz für die Mutation Events in DOM3 konzipiert, die verschiedene Leistungsprobleme aufweisen.
- Die `x`- und `y`-Eigenschaften des [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Interfaces, die in Firefox 7.0 entfernt wurden, wurden aus Kompatibilitätsgründen in diesem Release wiederhergestellt.
- Die [`Document`](/de/docs/Web/API/Document)-Methoden `execCommandShowHelp()` und `queryCommandText()`, die nie etwas bewirkten, wurden entfernt.
- Das `GeoPositionAddress`-Interface, ein veralteter Teil der [Geolocation](/de/docs/Web/API/Geolocation_API)-API, wurde entfernt.
- [`localStorage/sessionStorage`](/de/docs/Web/API/Storage) gibt nun korrekt `undefined` statt `null` für nicht deklarierte Schlüssel bei Zugriff über Eigenschaften zurück.
- Das [`ImageData`](/de/docs/Web/API/ImageData)-Objekt wurde implementiert ([Firefox-Bug 550309](https://bugzil.la/550309)).
- Attribute und Methoden, die mit Kindknoten auf dem [`Attr`](/de/docs/Web/API/Attr)-Interface in Verbindung stehen, wurden veraltet ([Firefox-Bug 737122](https://bugzil.la/737122)).

### CSS

- Die {{cssxref("text-transform")}}- und {{cssxref("font-variant")}}-CSS-Eigenschaften wurden korrigiert, um die `i` → `İ` und `ı` → `I` [Turkische](https://de.wikipedia.org/wiki/Turksprachen)-spezifischen Groß-/Kleinschreibungs-Paare korrekt zu behandeln.
- Das niederländische IJ-Digraph wird nun korrekt durch `text-transform: capitalization` behandelt. Ebenso wird der griechische Buchstabe `Σ`, der zwei Kleinbuchstabenformen `σ` und `ς` hat, nun korrekt durch `text-transform: lowercase` behandelt.
- Die Unterstützung für die `skew()`-Funktion wurde aus der {{cssxref("transform")}}-Eigenschaft entfernt, da sie aus dem Entwurfsstandard entfernt wurde.
- Die Syntax für {{cssxref("border-image")}} wurde aktualisiert, um der neuesten Überarbeitung der Spezifikation zu entsprechen; sie akzeptiert keinen abschließenden Schrägstrich ("/") mehr.

### JavaScript

_Keine Änderung._

### MathML

- Die Syntax des `statusline`-Aktionstyps auf {{MathMLElement("maction")}}-Elementen wurde angepasst, um der MathML-Spezifikation zu folgen.

### HTTP

- Gecko unterstützt nun den neuen [HTTP](/de/docs/Web/HTTP) [`308 Permanent Redirect`](/de/docs/Web/HTTP/Reference/Status/308)-Statuscode. Da Gecko keinen Unterschied zwischen permanenten und temporären Weiterleitungen macht, verhält er sich wie der [`307 Temporary Redirect`](/de/docs/Web/HTTP/Reference/Status/307)-Statuscode, da er dem Benutzeragenten verbietet, die HTTP-Methode zwischen den beiden Anfragen zu ändern (`POST` bleibt `POST`, `GET` bleibt `GET`).

## Änderungen für Mozilla- und Add-on-Entwickler

### JavaScript-Code-Module

#### source-editor.jsm

- Ein Tastaturkürzel zum Umschalten des Kommentierens für die aktuelle Auswahl wurde hinzugefügt (Ctrl-/ oder Cmd-/ auf Mac OS X).
- Die Tastaturkürzel Ctrl-\[ und Ctrl-] zum Verschieben der Texteingabeposition an den Anfang und das Ende des aktuellen Blocks wurden hinzugefügt.
- Die neuen Methoden [`getLineStart()`](https://web.archive.org/web/20210620193439/https://developer.mozilla.org/de/docs/Mozilla/JavaScript_code_modules/source-editor.jsm#getLineStart%28%29) und [`getLineEnd()`](https://web.archive.org/web/20210620193439/https://developer.mozilla.org/de/docs/Mozilla/JavaScript_code_modules/source-editor.jsm#getLineEnd%28%29) wurden hinzugefügt.

### XUL

- Das neue `fullscreenbutton`-Attribut wurde dem `<window>`-Element hinzugefügt; durch Setzen auf `true` wird dem Chrome des Fensters eine Schaltfläche hinzugefügt, um den Vollbildmodus zu aktivieren.

### Schnittstellen

- Die `nsILocalFile`-Schnittstelle wurde in `nsIFile` integriert ([Bug 682360](https://bugzil.la/682360)).
- Die Methoden in `nsIPlacesImportExportService` zum Importieren von Lesezeichen wurden zugunsten des `BookmarkHTMLUtils.jsm` JavaScript-Code-Moduls entfernt.
- Die `nsIDOMGeoPositionAddress`-Schnittstelle wurde entfernt.
- Die `getItemGUID`, `setItemGUID` und `getItemIdForGUID`-Methoden wurden aus `nsINavBookmarksService` entfernt ([Firefox-Bug 715355](https://bugzil.la/715355)).

### Rechtschreibprüfung

- Wörterbuchnamen werden jetzt als vollständige [BCP 47](https://www.rfc-editor.org/info/bcp47)-Sprachcodes analysiert ([Bug 730209](https://bugzil.la/730209), [Bug 741842](https://bugzil.la/741842)). Entwickler werden ermutigt, den Namen ihrer Sprache nicht fest in ihren Wörterbuchnamen zu codieren.
