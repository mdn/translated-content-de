---
title: Firefox 14 für Entwickler
slug: Mozilla/Firefox/Releases/14
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{FirefoxSidebar}}

Firefox 14 wurde am 17. Juli 2012 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler, sondern auch für Firefox- und Gecko-Entwickler sowie Add-on-Entwickler von Nutzen sind.

## Änderungen für Webentwickler

### HTML

- Das {{HTMLElement("progress")}}-Element wird nicht mehr fälschlicherweise als Formularelement klassifiziert und hat daher kein `form`-Attribut mehr.
- Die Standard-Modifier-Tasten für die [`accesskey`](/de/docs/Web/HTML/Reference/Global_attributes) von HTML-Inhalten auf Mac wurden zu Control+Option geändert. Dies entspricht den WebKit-basierten Browsern auf dem Mac.

### DOM

- [input](/de/docs/Web/API/Element/input_event)-Ereignisse werden jetzt auch bei der Bearbeitung des Host-Elements eines [contenteditable](/de/docs/Web/API/HTMLElement/contentEditable)-Editors und des Stamm-Elements eines [designMode](/de/docs/Web/API/Document/designMode)-Editors ausgelöst.
- [`DOMException.code`](/de/docs/Web/API/DOMException) ist jetzt gemäß der neuesten DOM Level 4 Spezifikation veraltet.
- Die Methode [`Range.insertNode()`](/de/docs/Web/API/Range/insertNode) funktioniert jetzt korrekt, wenn sie auf kollabierten Bereichen verwendet wird.
- Das `MozBlobBuilder`-Interface ist zugunsten des Konstruktors auf [`Blob`](/de/docs/Web/API/Blob) veraltet. Wenn Sie `MozBlobBuilder` verwenden, wird eine Warnmeldung in der Webkonsole angezeigt.
- Der [`Blob()`](/de/docs/Web/API/Blob/Blob)-Konstruktor ist nun für Worker verfügbar ([Firefox-Bug 736686](https://bugzil.la/736686)).
- Unterstützung für die [Mutation Observers](/de/docs/Web/API/MutationObserver) wurde integriert. Sie sind als Ersatz für die Mutation Events in DOM3 gedacht, die hinsichtlich der Leistung eine Reihe von Problemen haben.
- Die `x`- und `y`-Eigenschaften des [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) Interfaces wurden in Firefox 7.0 entfernt, in dieser Version jedoch aus Kompatibilitätsgründen wiederhergestellt.
- Die [`Document`](/de/docs/Web/API/Document)-Methoden `execCommandShowHelp()` und `queryCommandText()`, die nie etwas bewirkt haben, wurden entfernt.
- Das `GeoPositionAddress`-Interface, ein veralteter Teil der [Geolocation](/de/docs/Web/API/Geolocation_API) API, wurde entfernt.
- [`localStorage/sessionStorage`](/de/docs/Web/API/Storage) geben nun korrekt `undefined` statt `null` für nicht deklarierte Schlüssel über den Eigenschaftszugriff zurück.
- Das [`ImageData`](/de/docs/Web/API/ImageData)-Objekt wurde implementiert ([Firefox-Bug 550309](https://bugzil.la/550309)).
- Attribute und Methoden, die sich auf Kindknoten beziehen, im [`Attr`](/de/docs/Web/API/Attr)-Interface wurden veraltet ([Firefox-Bug 737122](https://bugzil.la/737122)).

### CSS

- Die CSS-Eigenschaften {{cssxref("text-transform")}} und {{cssxref("font-variant")}} wurden so korrigiert, dass sie die Turksprachen-spezifischen Paarungen `i` → `İ` und `ı` → `I` korrekt behandeln.
- Das niederländische IJ-Digraph wird jetzt korrekt von `text-transform: capitalization` behandelt. Ebenso wird der griechische Buchstabe `Σ`, der zwei Kleinbuchstabenformen `σ` und `ς` hat, nun korrekt von `text-transform: lowercase` behandelt.
- Die Unterstützung für die `skew()`-Funktion wurde von der {{cssxref("transform")}}-Eigenschaft entfernt, da sie aus dem Entwurfsstandard entfernt wurde.
- Die Syntax für {{cssxref("border-image")}} wurde aktualisiert, um der neuesten Revision der Spezifikation zu entsprechen; sie akzeptiert keinen abschließenden Schrägstrich ("/") mehr.

### JavaScript

_Keine Änderung._

### MathML

- Die Syntax des `statusline`-Aktions-Typs auf {{MathMLElement("maction")}}-Elementen wurde angepasst, um der MathML-Spezifikation zu folgen.

### HTTP

- Gecko unterstützt jetzt den neuen [HTTP](/de/docs/Web/HTTP) [`308 Permanent Redirect`](/de/docs/Web/HTTP/Reference/Status#308)-Statuscode. Da Gecko keinen Unterschied zwischen permanenten und temporären Weiterleitungen macht, verhält es sich wie der [`307 Temporary Redirect`](/de/docs/Web/HTTP/Reference/Status#307)-Statuscode, da er das Benutzeragenten verbietet, die HTTP-Methode zwischen den beiden Anfragen zu ändern (`POST` bleibt `POST`, `GET` bleibt `GET`).

## Änderungen für Mozilla- und Add-on-Entwickler

### JavaScript-Code-Module

#### source-editor.jsm

- Eine Tastenkombination zum Umschalten des Kommentierens für die aktuelle Auswahl wurde hinzugefügt (Strg-/ oder Cmd-/ auf Mac OS X).
- Die Tastenkombinationen Strg-\[ und Strg-] wurden hinzugefügt, um die Texteinfügeposition zum Anfang und Ende des aktuellen Blocks zu verschieben.
- Die neuen Methoden [`getLineStart()`](/de/docs/JavaScript_code_modules/source-editor.jsm#getLineStart%28%29) und [`getLineEnd()`](/de/docs/JavaScript_code_modules/source-editor.jsm#getLineEnd%28%29) wurden hinzugefügt.

### XUL

- Das neue `fullscreenbutton`-Attribut wurde dem `<window>`-Element hinzugefügt; wenn es auf `true` gesetzt ist, wird ein Button zur Aktivierung des Vollbildmodus im Fensterrahmen hinzugefügt.

### Schnittstellen

- Das `nsILocalFile`-Interface wurde in `nsIFile` zusammengeführt ([Bug 682360](https://bugzil.la/682360)).
- Die Methoden im `nsIPlacesImportExportService` zum Importieren von Lesezeichen wurden zugunsten des JavaScript-Code-Moduls [`BookmarkHTMLUtils.jsm`](/de/docs/JavaScript_code_modules/BookmarkHTMLUtils.jsm) entfernt.
- Das `nsIDOMGeoPositionAddress`-Interface wurde entfernt.
- Die Methoden `getItemGUID`, `setItemGUID` und `getItemIdForGUID` wurden aus dem `nsINavBookmarksService` entfernt ([Firefox-Bug 715355](https://bugzil.la/715355)).

### Rechtschreibprüfung

- Wörterbuchnamen werden jetzt als vollständige [BCP 47](https://www.rfc-editor.org/info/bcp47)-Sprach-Tags geparst ([Bug 730209](https://bugzil.la/730209), [Bug 741842](https://bugzil.la/741842)). Entwicklern wird empfohlen, den Namen ihrer Sprache in ihren Wörterbuchnamen nicht fest zu codieren.

## Siehe auch

{{Firefox_for_developers}}
