---
title: Firefox 14 für Entwickler
slug: Mozilla/Firefox/Releases/14
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{FirefoxSidebar}}

Firefox 14 wurde am 17. Juli 2012 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler nützlich sind, sondern auch für Firefox- und Gecko-Entwickler sowie für Add-on-Entwickler.

## Änderungen für Webentwickler

### HTML

- Das {{HTMLElement("progress")}}-Element wird nicht mehr fälschlicherweise als Formularelement klassifiziert und hat deshalb kein `form`-Attribut mehr.
- Die Standardmodifikatortasten für die [`accesskey`](/de/docs/Web/HTML/Global_attributes) von HTML-Inhalten auf einem Mac wurden auf Steuerung+Option geändert. Dies entspricht den WebKit-basierten Browsern auf einem Mac.

### DOM

- [input](/de/docs/Web/API/Element/input_event)-Ereignisse werden auch auf dem Bearbeitungshost-Element des [contenteditable](/de/docs/Web/API/HTMLElement/contentEditable)-Editors und dem Wurzelelement des [designMode](/de/docs/Web/API/Document/designMode)-Editors ausgelöst.
- [`DOMException.code`](/de/docs/Web/API/DOMException) ist jetzt gemäß der neuesten DOM-Level-4-Spezifikation veraltet.
- Die Methode [`Range.insertNode()`](/de/docs/Web/API/Range/insertNode) funktioniert jetzt korrekt, wenn sie auf zusammengeklappten Bereichen verwendet wird.
- Das `MozBlobBuilder`-Interface wurde zugunsten des Konstruktors auf [`Blob`](/de/docs/Web/API/Blob) als veraltet markiert. Wenn Sie `MozBlobBuilder` verwenden, sehen Sie eine Warnmeldung in der Webkonsole.
- Der [`Blob()`](/de/docs/Web/API/Blob/Blob)-Konstruktor ist jetzt für Worker verfügbar ([Firefox-Bug 736686](https://bugzil.la/736686)).
- Unterstützung für die [Mutation Observers](/de/docs/Web/API/MutationObserver) wurde hinzugefügt. Sie sind als Ersatz für die Mutation Events in DOM3 gedacht, die mehrere Leistungsprobleme aufweisen.
- Die `x`- und `y`-Eigenschaften des [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Interfaces wurden in Firefox 7.0 entfernt, aber in dieser Version aus Kompatibilitätsgründen wiederhergestellt.
- Die [`Document`](/de/docs/Web/API/Document)-Methoden `execCommandShowHelp()` und `queryCommandText()`, die nie etwas bewirkt haben, wurden entfernt.
- Das `GeoPositionAddress`-Interface, ein veralteter Teil der [Geolocation](/de/docs/Web/API/Geolocation_API)-API, wurde entfernt.
- [`localStorage/sessionStorage`](/de/docs/Web/API/Storage) geben jetzt korrekt `undefined` statt `null` für nicht deklarierte Schlüssel über den Eigenschaftszugriff zurück.
- Das [`ImageData`](/de/docs/Web/API/ImageData)-Objekt wurde implementiert ([Firefox-Bug 550309](https://bugzil.la/550309)).
- Attribute und Methoden in Bezug auf Kindknoten auf dem [`Attr`](/de/docs/Web/API/Attr)-Interface wurden veraltet ([Firefox-Bug 737122](https://bugzil.la/737122)).

### CSS

- Die CSS-Eigenschaften {{cssxref("text-transform")}} und {{cssxref("font-variant")}} wurden korrigiert, um die Türkischen Fallpaare `i` → `İ` und `ı` → `I` korrekt zu behandeln.
- Der niederländische IJ-Digraph wird nun ebenfalls korrekt von `text-transform: capitalization` behandelt. Ebenso wird der griechische Buchstabe `Σ`, der zwei Kleinbuchstabenformen hat, `σ` und `ς`, jetzt korrekt von `text-transform: lowercase` behandelt.
- Die Unterstützung für die `skew()`-Funktion wurde aus der {{cssxref("transform")}}-Eigenschaft entfernt, da diese aus dem Entwurfsstandard entfernt wurde.
- Die Syntax für {{cssxref("border-image")}} wurde aktualisiert, um der neuesten Überarbeitung der Spezifikation zu entsprechen; ein letzter Schrägstrich ("/") wird nicht mehr akzeptiert.

### JavaScript

_Keine Änderung._

### MathML

- Die Syntax des `statusline`-Aktionstyps auf {{MathMLElement("maction")}}-Elementen wurde angepasst, um die MathML-Spezifikation zu befolgen.

### HTTP

- Gecko unterstützt jetzt den neuen [HTTP](/de/docs/Web/HTTP) [`308 Permanent Redirect`](/de/docs/Web/HTTP/Reference/Status#308)-Statuscode. Da Gecko keinen Unterschied zwischen dauerhaften und temporären Umleitungen macht, verhält es sich wie der [`307 Temporary Redirect`](/de/docs/Web/HTTP/Reference/Status#307)-Statuscode, da es dem Benutzeragenten verbietet, die HTTP-Methode zwischen den beiden Anfragen zu ändern (`POST` bleibt `POST`, `GET` bleibt `GET`).

## Änderungen für Mozilla- und Add-on-Entwickler

### JavaScript-Code-Module

#### source-editor.jsm

- Eine Tastenkombination wurde hinzugefügt, um die Kommentierung für die aktuelle Auswahl ein- und auszuschalten (Strg-/ oder Cmd-/ auf Mac OS X).
- Die Tastenkombinationen Strg-\[ und Strg-] wurden hinzugefügt, um die Texteingabeposition an den Anfang und das Ende des aktuellen Blocks zu verschieben.
- Die neuen Methoden [`getLineStart()`](/de/docs/JavaScript_code_modules/source-editor.jsm#getLineStart%28%29) und [`getLineEnd()`](/de/docs/JavaScript_code_modules/source-editor.jsm#getLineEnd%28%29) wurden hinzugefügt.

### XUL

- Das neue `fullscreenbutton`-Attribut wurde dem `<window>`-Element hinzugefügt; wenn dieses auf `true` gesetzt wird, wird ein Knopf zum Aktivieren des Vollbildmodus zum Fenster-Chrome hinzugefügt.

### Schnittstellen

- Das `nsILocalFile`-Interface wurde in `nsIFile` integriert ([Bug 682360](https://bugzil.la/682360)).
- Die Methoden im `nsIPlacesImportExportService` zum Importieren von Lesezeichen wurden zugunsten des JavaScript-Code-Moduls [`BookmarkHTMLUtils.jsm`](/de/docs/JavaScript_code_modules/BookmarkHTMLUtils.jsm) alle entfernt.
- Das `nsIDOMGeoPositionAddress`-Interface wurde entfernt.
- Die Methoden `getItemGUID`, `setItemGUID` und `getItemIdForGUID` wurden aus `nsINavBookmarksService` entfernt ([Firefox-Bug 715355](https://bugzil.la/715355)).

### Rechtschreibprüfung

- Wörterbuchnamen werden jetzt als vollständige [BCP 47](https://www.rfc-editor.org/info/bcp47)-Sprachkennungen geparst ([Bug 730209](https://bugzil.la/730209), [Bug 741842](https://bugzil.la/741842)). Entwickler werden ermutigt, den Namen ihrer Sprache nicht in ihren Wörterbuchnamen zu codieren.

## Siehe auch

{{Firefox_for_developers}}
