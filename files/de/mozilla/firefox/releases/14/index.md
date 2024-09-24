---
title: Firefox 14 für Entwickler
slug: Mozilla/Firefox/Releases/14
l10n:
  sourceCommit: 1822cdf5a86574429c4c49883a402663ef16a4ef
---

{{FirefoxSidebar}}

Firefox 14 wurde am 17. Juli 2012 veröffentlicht. Dieser Artikel listet die wichtigsten Änderungen auf, die nicht nur für Webentwickler von Interesse sind, sondern auch für Firefox- und Gecko-Entwickler sowie Add-on-Entwickler.

## Änderungen für Webentwickler

### HTML

- Das {{HTMLElement("progress")}}-Element wird nicht mehr fälschlicherweise als Formularelement eingestuft und hat daher kein `form`-Attribut mehr.
- Die Standardmodifikatortasten für das [`accesskey`](/de/docs/Web/HTML/Global_attributes) von HTML-Inhalten auf dem Mac wurden auf Strg+Option geändert. Dies ist dasselbe wie bei WebKit-basierten Browsern auf dem Mac.

### DOM

- [input](/de/docs/Web/API/Element/input_event)-Ereignisse werden nun auch auf dem Bearbeitungshostelement von [contenteditable](/de/docs/Web/API/HTMLElement/contentEditable)-Editoren und dem Root-Element von [designMode](/de/docs/Web/API/Document/designMode)-Editoren ausgelöst.
- {{domxref("DOMException", "DOMException.code")}} ist nun gemäß der neuesten DOM Level 4-Spezifikation veraltet.
- Die Methode {{domxref("Range.insertNode()")}} funktioniert jetzt korrekt, wenn sie auf kollabierten Bereichen angewendet wird.
- Das `MozBlobBuilder`-Interface wurde zugunsten des Konstruktors auf {{domxref("Blob")}} abgelehnt. Wenn Sie `MozBlobBuilder` verwenden, wird eine Warnmeldung in der Web-Konsole angezeigt.
- Der {{domxref("Blob.Blob", "Blob()")}}-Konstruktor ist jetzt auch für Worker verfügbar ([Firefox-Bug 736686](https://bugzil.la/736686)).
- Unterstützung für [Mutation Observers](/de/docs/Web/API/MutationObserver) wurde implementiert. Sie sind als Ersatz für die Mutation Events in DOM3 gedacht, die eine Reihe von Leistungsproblemen haben.
- Die `x`- und `y`-Eigenschaften der {{domxref("HTMLImageElement")}}-Schnittstelle wurden in Firefox 7.0 entfernt, in dieser Version jedoch aus Kompatibilitätsgründen wiederhergestellt.
- Die {{domxref("Document")}}-Methoden `execCommandShowHelp()` und `queryCommandText()`, die nie etwas bewirkten, wurden entfernt.
- Das `GeoPositionAddress`-Interface, ein veralteter Teil der [Geolocation](/de/docs/Web/API/Geolocation_API) API, wurde entfernt.
- {{domxref("Storage", "localStorage/sessionStorage")}} gibt jetzt korrekt `undefined` anstelle von `null` für nicht deklarierte Schlüssel über den Eigenschaftszugriff zurück.
- Das {{domxref("ImageData")}}-Objekt wurde implementiert ([Firefox-Bug 550309](https://bugzil.la/550309)).
- Attribute und Methoden im Zusammenhang mit Knoten unter dem {{domxref("Attr")}}-Interface wurden veraltet ([Firefox-Bug 737122](https://bugzil.la/737122)).

### CSS

- Die CSS-Eigenschaften {{cssxref("text-transform")}} und {{cssxref("font-variant")}} wurden korrigiert, um die `i` → `İ` und `ı` → `I` [turkische](https://en.wikipedia.org/wiki/Turkic_languages)-spezifischen Buchstabenpaare korrekt zu handhaben.
- Das niederländische IJ-Digraph wird jetzt korrekt durch `text-transform: capitalization` behandelt. Ebenso wird der griechische Buchstabe `Σ`, der zwei Kleinbuchstabenformen, `σ` und `ς`, hat, jetzt korrekt durch `text-transform: lowercase` behandelt.
- Unterstützung für die `skew()`-Funktion wurde aus der {{cssxref("transform")}}-Eigenschaft entfernt, da sie aus dem Entwurfsstandard entfernt wurde.
- Die Syntax für {{cssxref("border-image")}} wurde aktualisiert, um der neuesten Überarbeitung der Spezifikation zu entsprechen; sie akzeptiert keinen abschließenden Schrägstrich ("/") mehr.

### JavaScript

_Keine Änderung._

### MathML

- Die Syntax des `statusline`-Aktionstyps auf {{MathMLElement("maction")}}-Elementen wurde angepasst, um der MathML-Spezifikation zu entsprechen.

### HTTP

- Gecko unterstützt jetzt den neuen [HTTP](/de/docs/Web/HTTP) [`308 Permanent Redirect`](/de/docs/Web/HTTP/Status#308)-Statuscode. Da Gecko keinen Unterschied zwischen permanenten und temporären Umleitungen macht, verhält es sich wie der [`307 Temporary Redirect`](/de/docs/Web/HTTP/Status#307)-Statuscode, da es dem Benutzeragenten verbietet, die HTTP-Methode zwischen den beiden Anfragen zu ändern (`POST` bleibt `POST`, `GET` bleibt `GET`).

## Änderungen für Mozilla- und Add-on-Entwickler

### JavaScript-Code-Module

#### source-editor.jsm

- Hinzufügen einer Tastenkombination zum Umschalten des Kommentars für die aktuelle Auswahl (Strg-/ oder Cmd-/ auf Mac OS X).
- Hinzufügen der Tastenkombinationen Strg-\[ und Strg-] zum Verschieben der Texteingabeposition an den Anfang und das Ende des aktuellen Blocks.
- Hinzufügen der neuen Methoden [`getLineStart()`](/de/docs/JavaScript_code_modules/source-editor.jsm#getLineStart%28%29) und [`getLineEnd()`](/de/docs/JavaScript_code_modules/source-editor.jsm#getLineEnd%28%29).

### XUL

- Das neue `fullscreenbutton`-Attribut wurde dem `<window>`-Element hinzugefügt; durch Setzen auf `true` wird ein Button zur Chrome des Fensters hinzugefügt, um den Vollbildmodus zu aktivieren.

### Schnittstellen

- Das `nsILocalFile`-Interface wurde in `nsIFile` zusammengeführt ([bug 682360](https://bugzil.la/682360)).
- Die Methoden in `nsIPlacesImportExportService` zum Importieren von Lesezeichen wurden zugunsten des JavaScript-Code-Moduls [`BookmarkHTMLUtils.jsm`](/de/docs/JavaScript_code_modules/BookmarkHTMLUtils.jsm) entfernt.
- Das `nsIDOMGeoPositionAddress`-Interface wurde entfernt.
- Die Methoden `getItemGUID`, `setItemGUID` und `getItemIdForGUID` wurden aus `nsINavBookmarksService` entfernt ([Firefox-Bug 715355](https://bugzil.la/715355)).

### Rechtschreibprüfung

- Wörterbuchnamen werden jetzt als vollständige [BCP 47](https://www.rfc-editor.org/info/bcp47)-Sprachkennzeichen analysiert ([bug 730209](https://bugzil.la/730209), [bug 741842](https://bugzil.la/741842)). Entwickler werden ermutigt, den Namen ihrer Sprache nicht fest in ihre Wörterbuchnamen einzucodieren.

## Siehe auch

{{Firefox_for_developers}}
