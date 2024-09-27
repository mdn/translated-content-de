---
title: Firefox 14 für Entwickler
slug: Mozilla/Firefox/Releases/14
l10n:
  sourceCommit: 1822cdf5a86574429c4c49883a402663ef16a4ef
---

{{FirefoxSidebar}}

Firefox 14 wurde am 17. Juli 2012 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler, sondern auch für Firefox- und Gecko-Entwickler sowie Add-on-Entwickler nützlich sind.

## Änderungen für Webentwickler

### HTML

- Das {{HTMLElement("progress")}}-Element wird nicht mehr fälschlicherweise als Formularelement klassifiziert und hat daher kein `form`-Attribut mehr.
- Die Standardmodifikationstasten für das [`accesskey`](/de/docs/Web/HTML/Global_attributes) von HTML-Inhalten auf Mac wurden auf Control+Option geändert. Dies entspricht den WebKit-basierten Browsern auf Mac.

### DOM

- [input](/de/docs/Web/API/Element/input_event)-Ereignisse werden auch beim Bearbeiten eines Host-Elements des [contenteditable](/de/docs/Web/API/HTMLElement/contentEditable)-Editors und des Stammes des [designMode](/de/docs/Web/API/Document/designMode)-Editors ausgelöst.
- [`DOMException.code`](/de/docs/Web/API/DOMException) ist nun gemäß der neuesten DOM Level 4-Spezifikation veraltet.
- Die Methode [`Range.insertNode()`](/de/docs/Web/API/Range/insertNode) funktioniert nun korrekt, wenn sie auf kollabierten Bereichen verwendet wird.
- Die `MozBlobBuilder`-Schnittstelle wurde zugunsten des Konstruktors auf [`Blob`](/de/docs/Web/API/Blob) veraltet. Wenn Sie `MozBlobBuilder` verwenden, wird eine Warnmeldung in der Webkonsole angezeigt.
- Der [`Blob()`](/de/docs/Web/API/Blob/Blob)-Konstruktor ist nun für Web-Workers verfügbar ([Firefox Bug 736686](https://bugzil.la/736686)).
- Unterstützung für die [Mutation Observers](/de/docs/Web/API/MutationObserver) wurde eingeführt. Diese sind als Ersatz für die Mutation Events in DOM3 konzipiert, die eine Reihe von Leistungsproblemen haben.
- Die `x`- und `y`-Eigenschaften der [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Schnittstelle wurden in Firefox 7.0 entfernt, in dieser Version jedoch aus Kompatibilitätsgründen wiederhergestellt.
- Die Methoden `execCommandShowHelp()` und `queryCommandText()` des [`Document`](/de/docs/Web/API/Document), die nie etwas bewirkten, wurden entfernt.
- Die `GeoPositionAddress`-Schnittstelle, ein veralteter Teil der [Geolocation](/de/docs/Web/API/Geolocation_API)-API, wurde entfernt.
- [`localStorage/sessionStorage`](/de/docs/Web/API/Storage) geben nun korrekt `undefined` statt `null` für nicht erklärte Schlüssel durch Property-Zugriff zurück.
- Das [`ImageData`](/de/docs/Web/API/ImageData)-Objekt wurde implementiert ([Firefox Bug 550309](https://bugzil.la/550309)).
- Attribute und Methoden, die sich auf Kindknoten der [`Attr`](/de/docs/Web/API/Attr)-Schnittstelle beziehen, wurden veraltet ([Firefox Bug 737122](https://bugzil.la/737122)).

### CSS

- Die CSS-Eigenschaften {{cssxref("text-transform")}} und {{cssxref("font-variant")}} wurden korrigiert, um die türkischen Fallpaare `i` → `İ` und `ı` → `I` korrekt zu behandeln.
- Das niederländische IJ-Digraph wird jetzt von `text-transform: capitalize` korrekt behandelt. Ebenso wird der griechische Buchstabe `Σ`, der zwei Kleinbuchstabenformen `σ` und `ς` hat, jetzt korrekt von `text-transform: lowercase` behandelt.
- Die Unterstützung für die `skew()`-Funktion wurde aus der {{cssxref("transform")}}-Eigenschaft entfernt, da sie aus dem Entwurfsstandard entfernt wurde.
- Die Syntax für {{cssxref("border-image")}} wurde aktualisiert, um der neuesten Überarbeitung der Spezifikation zu entsprechen; es wird kein abschließender Schrägstrich ("/") mehr akzeptiert.

### JavaScript

_Keine Änderungen._

### MathML

- Die Syntax des `statusline`-Aktionstyps auf {{MathMLElement("maction")}}-Elementen wurde angepasst, um der MathML-Spezifikation zu entsprechen.

### HTTP

- Gecko unterstützt jetzt den neuen [HTTP](/de/docs/Web/HTTP) [`308 Permanent Redirect`](/de/docs/Web/HTTP/Status#308)-Statuscode. Da Gecko keinen Unterschied zwischen permanenten und temporären Weiterleitungen macht, verhält er sich wie der [`307 Temporary Redirect`](/de/docs/Web/HTTP/Status#307)-Statuscode, da er dem Benutzeragenten verbietet, die HTTP-Methode zwischen den beiden Anfragen zu ändern (`POST` bleibt `POST`, `GET` bleibt `GET`).

## Änderungen für Mozilla- und Add-on-Entwickler

### JavaScript Code Module

#### source-editor.jsm

- Ein Tastaturkürzel zum Umschalten der Kommentierung der aktuellen Auswahl hinzugefügt (Strg-/ oder Cmd-/ auf Mac OS X).
- Die Tastaturkürzel Strg-\[ und Strg-] wurden hinzugefügt, um die Position der Texteingabe zum Anfang und Ende des aktuellen Blocks zu bewegen.
- Die neuen Methoden [`getLineStart()`](/de/docs/JavaScript_code_modules/source-editor.jsm#getLineStart%28%29) und [`getLineEnd()`](/de/docs/JavaScript_code_modules/source-editor.jsm#getLineEnd%28%29) wurden hinzugefügt.

### XUL

- Das neue `fullscreenbutton`-Attribut zum `<window>`-Element hinzugefügt; Aktiviert ermöglicht es einen Knopf zur Aktivierung des Vollbildmodus im Fenster-Chrome.

### Schnittstellen

- Die `nsILocalFile`-Schnittstelle wurde in `nsIFile` zusammengeführt ([Bug 682360](https://bugzil.la/682360)).
- Die Methoden in `nsIPlacesImportExportService` zum Importieren von Lesezeichen wurden zugunsten des JavaScript-Code-Moduls [`BookmarkHTMLUtils.jsm`](/de/docs/JavaScript_code_modules/BookmarkHTMLUtils.jsm) entfernt.
- Die `nsIDOMGeoPositionAddress`-Schnittstelle wurde entfernt.
- Die Methoden `getItemGUID`, `setItemGUID` und `getItemIdForGUID` wurden aus `nsINavBookmarksService` entfernt ([Firefox Bug 715355](https://bugzil.la/715355)).

### Rechtschreibprüfung

- Die Namen der Wörterbücher werden nun als vollständige [BCP 47](https://www.rfc-editor.org/info/bcp47)-Sprachtags analysiert ([Bug 730209](https://bugzil.la/730209), [Bug 741842](https://bugzil.la/741842)). Entwickler werden ermutigt, den Namen ihrer Sprache nicht in ihren Wörterbuchnamen fest zu codieren.

## Siehe auch

{{Firefox_for_developers}}
