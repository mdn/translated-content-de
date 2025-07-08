---
title: Firefox 14 für Entwickler
slug: Mozilla/Firefox/Releases/14
l10n:
  sourceCommit: 2d5b20a5eabb48bc5472ebe94b11afe2aa84f585
---

Firefox 14 wurde am 17. Juli 2012 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler nützlich sind, sondern auch für Firefox- und Gecko-Entwickler sowie für Entwickler von Add-ons.

## Änderungen für Webentwickler

### HTML

- Das {{HTMLElement("progress")}}-Element wird nicht mehr fälschlicherweise als Formularelement klassifiziert und hat daher kein `form`-Attribut mehr.
- Die Standardmodifikator-Tasten für den [`accesskey`](/de/docs/Web/HTML/Reference/Global_attributes) von HTML-Inhalten auf dem Mac wurden auf Control+Option geändert. Dies entspricht den WebKit-basierten Browsern auf dem Mac.

### DOM

- [input](/de/docs/Web/API/Element/input_event)-Ereignisse werden nun auch auf das Editier-Host-Element des [contenteditable](/de/docs/Web/API/HTMLElement/contentEditable)-Editors und das Root-Element des [designMode](/de/docs/Web/API/Document/designMode)-Editors ausgelöst.
- [`DOMException.code`](/de/docs/Web/API/DOMException) ist jetzt gemäß der neuesten DOM Level 4-Spezifikation veraltet.
- Die Methode [`Range.insertNode()`](/de/docs/Web/API/Range/insertNode) funktioniert jetzt korrekt, wenn sie auf kollabierten Bereichen angewendet wird.
- Das `MozBlobBuilder`-Interface ist zugunsten des Konstruktors für [`Blob`](/de/docs/Web/API/Blob) veraltet. Wenn Sie `MozBlobBuilder` verwenden, erscheint eine Warnmeldung in der Webkonsole.
- Der [`Blob()`](/de/docs/Web/API/Blob/Blob)-Konstruktor ist nun für Worker verfügbar ([Firefox-Bug 736686](https://bugzil.la/736686)).
- Unterstützung für die [Mutation Observers](/de/docs/Web/API/MutationObserver) wurde hinzugefügt. Sie sind als Ersatz für die Mutation Events in DOM3 konzipiert, die einige Leistungsprobleme aufweisen.
- Die `x`- und `y`-Eigenschaften des [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Interface wurden in Firefox 7.0 entfernt, aber in dieser Version aus Kompatibilitätsgründen wiederhergestellt.
- Die [`Document`](/de/docs/Web/API/Document)-Methoden `execCommandShowHelp()` und `queryCommandText()`, die nie etwas bewirkt haben, wurden entfernt.
- Das `GeoPositionAddress`-Interface, ein veralteter Teil der [Geolocation](/de/docs/Web/API/Geolocation_API)-API, wurde entfernt.
- [`localStorage/sessionStorage`](/de/docs/Web/API/Storage) gibt jetzt korrekt `undefined` statt `null` für nicht deklarierte Schlüssel durch Attributzugriff zurück.
- Das [`ImageData`](/de/docs/Web/API/ImageData)-Objekt wurde implementiert ([Firefox-Bug 550309](https://bugzil.la/550309)).
- Attribute und Methoden, die mit untergeordneten Knoten auf dem [`Attr`](/de/docs/Web/API/Attr)-Interface zusammenhängen, wurden veraltet ([Firefox-Bug 737122](https://bugzil.la/737122)).

### CSS

- Die CSS-Eigenschaften {{cssxref("text-transform")}} und {{cssxref("font-variant")}} wurden korrigiert, um die Turkische [i] → `İ` und [ı] → `I` Fallpaare korrekt zu behandeln.
- Das niederländische IJ-Digraph wird nun korrekt von `text-transform: capitalization` behandelt. Ähnlich wird der griechische Buchstabe `Σ`, der zwei Kleinbuchstabenformen hat, `σ` und `ς`, nun korrekt von `text-transform: lowercase` behandelt.
- Unterstützung für die `skew()`-Funktion wurde aus der {{cssxref("transform")}}-Eigenschaft entfernt, da sie aus dem Entwurf der Spezifikation entfernt wurde.
- Die Syntax für {{cssxref("border-image")}} wurde aktualisiert, um der neuesten Überarbeitung der Spezifikation zu entsprechen; ein abschließender Schrägstrich ("/") wird nicht mehr akzeptiert.

### JavaScript

_Keine Änderung._

### MathML

- Die Syntax des `statusline`-Aktionstyps auf {{MathMLElement("maction")}}-Elementen wurde angepasst, um der MathML-Spezifikation zu entsprechen.

### HTTP

- Gecko unterstützt jetzt den neuen [HTTP](/de/docs/Web/HTTP) [`308 Permanent Redirect`](/de/docs/Web/HTTP/Reference/Status/308)-Statuscode. Da Gecko keinen Unterschied zwischen dauerhaften und temporären Weiterleitungen macht, verhält er sich wie der [`307 Temporary Redirect`](/de/docs/Web/HTTP/Reference/Status/307)-Statuscode, da er dem Benutzeragenten verbietet, die HTTP-Methode zwischen den beiden Anfragen zu ändern (`POST` bleibt `POST`, `GET` bleibt `GET`).

## Änderungen für Mozilla- und Add-on-Entwickler

### JavaScript-Code-Module

#### source-editor.jsm

- Eine Tastenkombination wurde hinzugefügt, um das Kommentieren der aktuellen Auswahl umzuschalten (Strg-/ oder Cmd-/ auf Mac OS X).
- Die Tastenkombinationen Strg-\[ und Strg-] wurden hinzugefügt, um die Texteingabeposition zum Anfang und Ende des aktuellen Blocks zu verschieben.
- Die neuen Methoden [`getLineStart()`](/de/docs/JavaScript_code_modules/source-editor.jsm#getLineStart%28%29) und [`getLineEnd()`](/de/docs/JavaScript_code_modules/source-editor.jsm#getLineEnd%28%29) wurden hinzugefügt.

### XUL

- Das neue `fullscreenbutton`-Attribut wurde dem `<window>`-Element hinzugefügt; wenn es auf `true` gesetzt ist, wird ein Button im Fenster-Chrome hinzugefügt, um den Vollbildmodus zu aktivieren.

### Schnittstellen

- Das `nsILocalFile`-Interface wurde in `nsIFile` integriert ([Bug 682360](https://bugzil.la/682360)).
- Alle Methoden im `nsIPlacesImportExportService` zum Importieren von Lesezeichen wurden zugunsten des JavaScript-Code-Moduls [`BookmarkHTMLUtils.jsm`](/de/docs/JavaScript_code_modules/BookmarkHTMLUtils.jsm) entfernt.
- Das `nsIDOMGeoPositionAddress`-Interface wurde entfernt.
- Die Methoden `getItemGUID`, `setItemGUID` und `getItemIdForGUID` wurden aus dem `nsINavBookmarksService` entfernt ([Firefox-Bug 715355](https://bugzil.la/715355)).

### Rechtschreibprüfung

- Wörterbuchnamen werden jetzt als vollständige [BCP 47](https://www.rfc-editor.org/info/bcp47)-Sprach-Tags geparst ([Bug 730209](https://bugzil.la/730209), [Bug 741842](https://bugzil.la/741842)). Entwicklern wird empfohlen, die Namen ihrer Sprache nicht fest in ihren Wörterbuchnamen zu kodieren.

## Siehe auch

{{Firefox_for_developers}}
