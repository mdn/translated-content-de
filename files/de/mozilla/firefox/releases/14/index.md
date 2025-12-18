---
title: Firefox 14 Versionshinweise für Entwickler
short-title: Firefox 14
slug: Mozilla/Firefox/Releases/14
l10n:
  sourceCommit: 83f4e64da466670c3700110da364546253eae127
---

Firefox 14 wurde am 17. Juli 2012 veröffentlicht. Dieser Artikel listet die wichtigsten Änderungen auf, die nicht nur für Webentwickler nützlich sind, sondern auch für Firefox- und Gecko-Entwickler sowie für Add-on-Entwickler.

## Änderungen für Webentwickler

### HTML

- Das {{HTMLElement("progress")}}-Element wird nicht mehr fälschlicherweise als Formularelement klassifiziert und besitzt daher kein `form`-Attribut mehr.
- Die Standardmodifikatortasten für das [`accesskey`](/de/docs/Web/HTML/Reference/Global_attributes) von HTML-Inhalten auf Mac wurden auf Control+Option geändert. Dies entspricht den WebKit-basierten Browsern auf Mac.

### DOM

- [input](/de/docs/Web/API/Element/input_event)-Ereignisse werden auch bei der Bearbeitung des Host-Elements eines [contenteditable](/de/docs/Web/API/HTMLElement/contentEditable)-Editors und des Root-Elements eines [designMode](/de/docs/Web/API/Document/designMode)-Editors ausgelöst.
- [`DOMException.code`](/de/docs/Web/API/DOMException) ist jetzt gemäß der neuesten DOM Level 4-Spezifikation veraltet.
- Die Methode [`Range.insertNode()`](/de/docs/Web/API/Range/insertNode) funktioniert jetzt korrekt, wenn sie auf kollabierten Bereichen angewendet wird.
- Die `MozBlobBuilder`-Schnittstelle wurde zugunsten des Konstruktors auf [`Blob`](/de/docs/Web/API/Blob) abgelehnt. Wenn Sie `MozBlobBuilder` verwenden, sehen Sie eine Warnmeldung in der Web-Konsole.
- Der [`Blob()`](/de/docs/Web/API/Blob/Blob)-Konstruktor ist jetzt für Worker verfügbar ([Firefox Bug 736686](https://bugzil.la/736686)).
- Unterstützung für die [Mutation Observers](/de/docs/Web/API/MutationObserver) wurde eingeführt. Sie sind als Ersatz für die Mutation Events in DOM3 gedacht, die einige Leistungsprobleme aufweisen.
- Die `x` und `y` Eigenschaften der [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Schnittstelle, die in Firefox 7.0 entfernt, aber in dieser Version aus Kompatibilitätsgründen wiederhergestellt wurden.
- Die Methoden [`Document`](/de/docs/Web/API/Document) `execCommandShowHelp()` und `queryCommandText()`, die nie etwas bewirkt haben, wurden entfernt.
- Die `GeoPositionAddress`-Schnittstelle, ein veralteter Teil der [Geolocation](/de/docs/Web/API/Geolocation_API)-API, wurde entfernt.
- [`localStorage/sessionStorage`](/de/docs/Web/API/Storage) gibt jetzt korrekt `undefined` anstelle von `null` für nicht deklarierte Schlüssel durch Zugriff auf Eigenschaften zurück.
- Das [`ImageData`](/de/docs/Web/API/ImageData)-Objekt wurde implementiert ([Firefox Bug 550309](https://bugzil.la/550309)).
- Attribute und Methoden, die sich auf Kindknoten beziehen, sind auf der [`Attr`](/de/docs/Web/API/Attr)-Schnittstelle veraltet ([Firefox Bug 737122](https://bugzil.la/737122)).

### CSS

- Die CSS-Eigenschaften {{cssxref("text-transform")}} und {{cssxref("font-variant")}} wurden korrigiert, um die Turksprachen-spezifischen Fallpaarungen `i` → `İ` und `ı` → `I` korrekt zu handhaben.
- Das niederländische IJ-Ligatur wird jetzt korrekt mit `text-transform: kapitalisierung` behandelt. Ebenso wird der griechische Buchstabe `Σ`, der zwei Kleinbuchstabenformen, `σ` und `ς`, hat, jetzt korrekt mit `text-transform: lowercase` behandelt.
- Unterstützung für die `skew()`-Funktion wurde aus der {{cssxref("transform")}}-Eigenschaft entfernt, da sie aus dem Entwurf der Spezifikation entfernt wurde.
- Die Syntax für {{cssxref("border-image")}} wurde aktualisiert, um der neuesten Überarbeitung der Spezifikation zu entsprechen; sie akzeptiert keinen abschließenden Schrägstrich ("/") mehr.

### JavaScript

_Keine Änderung._

### MathML

- Die Syntax des `statusline`-Aktionstyps auf {{MathMLElement("maction")}}-Elementen wurde angepasst, um der MathML-Spezifikation zu entsprechen.

### HTTP

- Gecko unterstützt jetzt den neuen [HTTP](/de/docs/Web/HTTP) [`308 Permanent Redirect`](/de/docs/Web/HTTP/Reference/Status/308) Statuscode. Da Gecko nicht zwischen permanenten und temporären Umleitungen unterscheidet, verhält es sich wie der [`307 Temporary Redirect`](/de/docs/Web/HTTP/Reference/Status/307) Statuscode, da er das Benutzeragent daran hindert, die HTTP-Methode zwischen den beiden Anfragen zu ändern (`POST` bleibt `POST`, `GET` bleibt `GET`).

## Änderungen für Mozilla- und Add-on-Entwickler

### JavaScript-Code-Module

#### source-editor.jsm

- Ein Tastaturkürzel zum Umschalten der Kommentierung der aktuellen Auswahl wurde hinzugefügt (Strg-/ oder Cmd-/ auf Mac OS X).
- Die Tastaturkürzel Strg-\[ und Strg-] zum Verschieben der Texteingabeposition an den Anfang und das Ende des aktuellen Blocks wurden hinzugefügt.
- Die neuen Methoden [`getLineStart()`](https://web.archive.org/web/20210620193439/https://developer.mozilla.org/de/docs/Mozilla/JavaScript_code_modules/source-editor.jsm#getLineStart%28%29) und [`getLineEnd()`](https://web.archive.org/web/20210620193439/https://developer.mozilla.org/de/docs/Mozilla/JavaScript_code_modules/source-editor.jsm#getLineEnd%28%29) wurden hinzugefügt.

### XUL

- Das neue `fullscreenbutton`-Attribut wurde zum `<window>`-Element hinzugefügt; wenn dieses auf `true` gesetzt ist, wird ein Button zur Fensterleiste hinzugefügt, um den Vollbildmodus zu aktivieren.

### Schnittstellen

- Die `nsILocalFile`-Schnittstelle wurde in `nsIFile` integriert ([Bug 682360](https://bugzil.la/682360)).
- Die Methoden im `nsIPlacesImportExportService` zum Importieren von Lesezeichen wurden zugunsten des `BookmarkHTMLUtils.jsm` JavaScript-Code-Moduls entfernt.
- Die `nsIDOMGeoPositionAddress` Schnittstelle wurde entfernt.
- Die Methoden `getItemGUID`, `setItemGUID` und `getItemIdForGUID` wurden aus `nsINavBookmarksService` entfernt ([Firefox Bug 715355](https://bugzil.la/715355)).

### Rechtschreibprüfung

- Wörterbuchnamen werden jetzt als vollständige {{Glossary("BCP_47_language_tag", "BCP 47 Sprach-Tags")}} analysiert ([Bug 730209](https://bugzil.la/730209), [Bug 741842](https://bugzil.la/741842)). Entwickler werden ermutigt, den Namen ihrer Sprache nicht fest in ihren Wörterbuchnamen zu codieren.
