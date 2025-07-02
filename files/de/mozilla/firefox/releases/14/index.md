---
title: Firefox 14 für Entwickler
slug: Mozilla/Firefox/Releases/14
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Firefox 14 wurde am 17. Juli 2012 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler nützlich sind, sondern auch für Firefox- und Gecko-Entwickler sowie für Add-on-Entwickler.

## Änderungen für Webentwickler

### HTML

- Das {{HTMLElement("progress")}}-Element wird nicht mehr fälschlicherweise als Formularelement klassifiziert und hat daher kein `form`-Attribut mehr.
- Die Standardmodifikatortasten für das [`accesskey`](/de/docs/Web/HTML/Reference/Global_attributes) von HTML-Inhalten auf Mac wurden auf Control+Option geändert. Dies entspricht den WebKit-basierten Browsern auf Mac.

### DOM

- [input](/de/docs/Web/API/Element/input_event)-Ereignisse werden auch auf dem Bearbeitungshost-Element des [contenteditable](/de/docs/Web/API/HTMLElement/contentEditable)-Editors und dem Wurzelelement des [designMode](/de/docs/Web/API/Document/designMode)-Editors ausgelöst.
- [`DOMException.code`](/de/docs/Web/API/DOMException) ist nun gemäß der neuesten DOM Level 4-Spezifikation veraltet.
- Die Methode [`Range.insertNode()`](/de/docs/Web/API/Range/insertNode) funktioniert nun korrekt, wenn sie auf kollabierten Bereichen verwendet wird.
- Das `MozBlobBuilder`-Interface ist zugunsten des Konstruktors auf [`Blob`](/de/docs/Web/API/Blob) veraltet. Wenn Sie `MozBlobBuilder` verwenden, wird eine Warnmeldung in der Webkonsole angezeigt.
- Der [`Blob()`](/de/docs/Web/API/Blob/Blob)-Konstruktor ist jetzt für Web Worker verfügbar ([Firefox-Bug 736686](https://bugzil.la/736686)).
- Unterstützung für die [Mutation Observers](/de/docs/Web/API/MutationObserver) wurde eingeführt. Sie sind als Ersatz für die Mutationsevents in DOM3 konzipiert, welche in Bezug auf die Leistung einige Probleme haben.
- Die `x`- und `y`-Eigenschaften des [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Interfaces wurden in Firefox 7.0 entfernt, aber in dieser Version aus Kompatibilitätsgründen wiederhergestellt.
- Die [`Document`](/de/docs/Web/API/Document)-Methoden `execCommandShowHelp()` und `queryCommandText()`, die nie etwas getan haben, wurden entfernt.
- Das `GeoPositionAddress`-Interface, ein veralteter Teil der [Geolocation](/de/docs/Web/API/Geolocation_API) API, wurde entfernt.
- [`localStorage/sessionStorage`](/de/docs/Web/API/Storage) geben jetzt korrekt `undefined` statt `null` für nicht deklarierte Schlüssel über den Property-Zugriff zurück.
- Das [`ImageData`](/de/docs/Web/API/ImageData)-Objekt wurde implementiert ([Firefox-Bug 550309](https://bugzil.la/550309)).
- Attribute und Methoden, die sich auf Kindknoten auf dem [`Attr`](/de/docs/Web/API/Attr)-Interface beziehen, sind veraltet ([Firefox-Bug 737122](https://bugzil.la/737122)).

### CSS

- Die CSS-Eigenschaften {{cssxref("text-transform")}} und {{cssxref("font-variant")}} wurden korrigiert, um die Turksprachen-spezifischen Fallpaare `i` → `İ` und `ı` → `I` korrekt zu behandeln.
- Das niederländische IJ-Digraph wird jetzt korrekt durch `text-transform: capitalisierung` behandelt. Ebenso wird der griechische Buchstabe `Σ`, der zwei Kleinbuchstabenformen hat, `σ` und `ς`, jetzt korrekt durch `text-transform: lowercase` gehandhabt.
- Unterstützung für die `skew()`-Funktion wurde aus der {{cssxref("transform")}}-Eigenschaft entfernt, da sie aus dem Entwurfsstandard entfernt wurde.
- Die Syntax für {{cssxref("border-image")}} wurde aktualisiert, um der neuesten Überarbeitung der Spezifikation zu entsprechen; es wird kein abschließender Schrägstrich ("/") mehr akzeptiert.

### JavaScript

_Keine Änderung._

### MathML

- Die Syntax des `statusline`-Aktionstyps auf {{MathMLElement("maction")}}-Elementen wurde angepasst, um der MathML-Spezifikation zu entsprechen.

### HTTP

- Gecko unterstützt jetzt den neuen [HTTP](/de/docs/Web/HTTP) [`308 Permanent Redirect`](/de/docs/Web/HTTP/Reference/Status#308)-Statuscode. Da Gecko keinen Unterschied zwischen permanenten und temporären Weiterleitungen macht, verhält es sich wie der [`307 Temporary Redirect`](/de/docs/Web/HTTP/Reference/Status#307)-Statuscode, da es dem Benutzeragenten verbietet, die HTTP-Methode zwischen den beiden Anfragen zu ändern (`POST` bleibt `POST`, `GET` bleibt `GET`).

## Änderungen für Mozilla- und Add-on-Entwickler

### JavaScript Code-Module

#### source-editor.jsm

- Eine Tastenkombination zum Umschalten der Kommentarierung für die aktuelle Auswahl wurde hinzugefügt (Strg-/ oder Cmd-/ auf Mac OS X).
- Die Tastenkombinationen Strg-\[ und Strg-] zum Bewegen der Texteingabeposition an den Anfang und das Ende des aktuellen Blocks wurden hinzugefügt.
- Die neuen Methoden [`getLineStart()`](/de/docs/JavaScript_code_modules/source-editor.jsm#getLineStart%28%29) und [`getLineEnd()`](/de/docs/JavaScript_code_modules/source-editor.jsm#getLineEnd%28%29) wurden hinzugefügt.

### XUL

- Das neue Attribut `fullscreenbutton` wurde zum `<window>`-Element hinzugefügt; das Setzen auf `true` fügt einen Button zur Fensterchrome hinzu, um den Vollbildmodus zu aktivieren.

### Schnittstellen

- Das `nsILocalFile`-Interface wurde in `nsIFile` integriert ([Bug 682360](https://bugzil.la/682360)).
- Die Methoden im `nsIPlacesImportExportService` zum Importieren von Lesezeichen wurden zugunsten des [`BookmarkHTMLUtils.jsm`](/de/docs/JavaScript_code_modules/BookmarkHTMLUtils.jsm)-JavaScript-Code-Moduls entfernt.
- Das `nsIDOMGeoPositionAddress`-Interface wurde entfernt.
- Die Methoden `getItemGUID`, `setItemGUID` und `getItemIdForGUID` wurden aus dem `nsINavBookmarksService` entfernt ([Firefox-Bug 715355](https://bugzil.la/715355)).

### Rechtschreibprüfung

- Wörterbuchnamen werden jetzt als vollständige [BCP 47](https://www.rfc-editor.org/info/bcp47)-Sprachtags geparst ([Bug 730209](https://bugzil.la/730209), [Bug 741842](https://bugzil.la/741842)). Entwicklern wird geraten, den Namen ihrer Sprache nicht fest in den Wörterbuchnamen zu codieren.

## Siehe auch

{{Firefox_for_developers}}
