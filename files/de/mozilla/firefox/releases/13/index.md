---
title: Firefox 13 Versionshinweise für Entwickler
short-title: Firefox 13
slug: Mozilla/Firefox/Releases/13
l10n:
  sourceCommit: 61912f53d01e935aea926a2226130fb4587414a9
---

Firefox 13 wurde am 5. Juni 2012 veröffentlicht. Diese Seite fasst die Änderungen in Firefox 13 zusammen, die Entwickler betreffen.

## Änderungen für Webentwickler

### HTML

- Die `cellspacing`-Attribute von Tabellen werden jetzt außerhalb des Quirks-Modus genauso geparst wie im Quirks-Modus. Das heißt, wenn ein Wert als Prozentsatz angegeben ist, wird er stattdessen als Anzahl von Pixeln behandelt, da Prozentwerte laut Spezifikation eigentlich nicht zulässig sind.
- Das {{htmlelement("wbr")}}-Element hat seine bidirektionale Funktionalität korrigiert bekommen. Es verhält sich jetzt wie das Unicode `U+200B ZERO-WIDTH SPACE` und beeinflusst daher nicht mehr die Bidirektionalität des übergeordneten Elements.
- Die {{Cssxref(":invalid")}}-Pseudoklasse kann jetzt auf das {{htmlelement("form")}}-Element angewendet werden.

### CSS

- Die `turn` {{cssxref("&lt;angle&gt;")}}-Einheit wird jetzt unterstützt (zu verwenden mit CSS-Funktionen wie `rotate()`).
- Unterstützung für die 3-zu-4-Werte Syntax von {{cssxref("background-position")}} wurde hinzugefügt. Sie können ein Hintergrundbild von jeder Ecke aus versetzen, indem Sie z. B. `right 10px bottom 20px` schreiben. Siehe [Firefox-Bug 522607](https://bugzil.la/522607).
- Unterstützung für die 2-Werte Syntax des CSS {{cssxref("background-repeat")}} wurde hinzugefügt.
- Unterstützung für {{cssxref("border-radius","-moz-border-radius*")}} und {{cssxref("box-shadow","-moz-box-shadow")}} wurde entfernt. Autoren sollten stattdessen unpräfixte `border-radius`- oder `box-shadow`-Eigenschaften verwenden. Siehe [Firefox-Bug 693510](https://bugzil.la/693510).
- Die {{cssxref("column-fill")}}-Eigenschaft wurde implementiert (mit Präfix).

### JavaScript

- Unterstützung für das ECMAScript 2015 [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Konstrukt wurde hinzugefügt.
- Experimentelle Unterstützung für ECMAScript 2015 [Map](/de/docs/Web/JavaScript/Reference/Global_Objects/Map)- und [Set](/de/docs/Web/JavaScript/Reference/Global_Objects/Set)-Objekte wurde implementiert.

### DOM

- Das `deep`-Argument der [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode)-Methode ist jetzt optional, wie in DOM4 festgelegt.
- Die Methoden [`setTimeout()`](/de/docs/Web/API/Window/setTimeout), [`setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout), [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval) und [`WorkerGlobalScope.setInterval()`](/de/docs/Web/API/WorkerGlobalScope/setInterval) übergeben kein zusätzliches "lateness"-Argument mehr an die Callback-Routine.
- Die Methode [`Blob.mozSlice()`](/de/docs/Web/API/Blob) wurde unpräfixiert.
- Unterstützung für den [`Blob`](/de/docs/Web/API/Blob)-Konstruktor wurde hinzugefügt.
- Unterstützung für `globalStorage` wurde entfernt.
- Das neue `DOMRequest`-Interface, das zum Melden des Status und des Ergebnisses von Hintergrundoperationen verwendet wird, wurde hinzugefügt.
- Die Method `HTMLOptionElement.index()`](/de/docs/Web/API/HTMLOptionElement) gibt jetzt `0` statt dem inkorrekten `-1` zurück, wenn die {{HTMLElement("option")}} innerhalb eines {{HTMLElement("datalist")}} HTML-Elements ist.
- [`DOMException`](/de/docs/Web/API/DOMException) wie in DOM Level 4 definiert, wurde implementiert.
- Das `FileError`-Interface wurde zugunsten des [`DOMError`](/de/docs/Web/API/DOMError)-Interfaces entfernt, wie es in der neuesten FileAPI-Spezifikation definiert ist.
- Das [`Range`](/de/docs/Web/API/Range)-Objekt wirft keinen `RangeException` mehr. Stattdessen wird ein [`DOMException`](/de/docs/Web/API/DOMException) verwendet, wie in DOM 4 definiert.
- [`element.getAttributeNS()`](/de/docs/Web/API/Element/getAttributeNS) gibt jetzt immer `null` statt einer leeren Zeichenkette für nicht existierende Attribute zurück. Zuvor gab es Fälle, in denen die leere Zeichenkette zurückgegeben werden konnte. Dies entspricht der DOM4-Spezifikation, die nun sagt, dass für nicht existierende Attribute null und nicht eine leere Zeichenkette zurückgegeben werden soll.
- Das [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement)-Interface hat jetzt eine nicht-standardmäßige `mozFetchAsStream()`-Methode, die einen Eingabestream bereitstellt, der die Bilddaten des Elements im angegebenen Format enthält.

### UA-String

- Firefox für Android hat jetzt eine [Tablet- oder Mobile-Kennung im UA-String](/de/docs/Web/HTTP/Reference/Headers/User-Agent/Firefox#mobile_and_tablet_indicators), um die Form des Faktors anzugeben, und hat nicht mehr das Fennec-Token. Außerdem ist die Zahl nach "Gecko/" nun die Gecko-Version, nicht mehr ein eingefrorenes Datum.
- Der UA-String zeigt die Gecko-Patchnummer oder den Veröffentlichungsstatus der Versionsnummer nicht mehr an; die Versionsnummer hat jetzt immer die Form "X.Y", wobei X die Hauptversionsnummer ist und Y die Unterversionsnummer. Zum Beispiel "13.0" oder "14.1". Sie wird nicht mehr als etwa "14.0.1b1" angezeigt.

### SVG

- Das [`SVGStringList`](/de/docs/Web/API/SVGStringList)-DOM-Interface ist jetzt indexierbar wie [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) (siehe [Firefox-Bug 722071](https://bugzil.la/722071)).

### WebGL

- Unterstützung für die [`EXT_texture_filter_anisotropic`](/de/docs/Web/API/EXT_texture_filter_anisotropic)-Erweiterung wurde hinzugefügt. Anisotropes Texturfiltering verbessert die Qualität des zugreifens auf mipmappierte Texturen, wenn eine Textur in einem schrägen Winkel betrachtet wird.

### MathML

- Unterstützung für das `breite`-Attribut bei {{MathMLElement("mtable")}}-Elementen wurde hinzugefügt ([Firefox-Bug 722880](https://bugzil.la/722880)).
- [MathJax-Schriften](https://docs.mathjax.org/en/latest/output/fonts.html) werden jetzt als Standardschriftarten für mathematischen Text verwendet. Weitere Informationen finden Sie unter [Schriften für Mozillas MathML-Engine](/de/docs/Web/MathML/Guides/Fonts).

### Netzwerk

- Das SPDY-Protokoll ist nun standardmäßig aktiviert.

### Entwicklerwerkzeuge

#### Verbesserungen der 3D-Ansicht

- Sie können jetzt die "f"-Taste drücken, um sicherzustellen, dass der aktuell ausgewählte Knoten sichtbar ist.

#### Verbesserungen des Stilpanels

- Ein Klick auf die Überschrift eines Regelbereichs im [Stilpanel](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html#css-pane) öffnet jetzt den [Stil-Editor](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html) an der entsprechenden CSS-Position.
- Ein Rechtsklick auf eine Regel im [Stilpanel](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html#css-pane) bietet jetzt die Option, die Regel in die Zwischenablage zu kopieren.
- Die Eingabe eines unbekannten Eigenschaftsnamens oder eines unerlaubten Eigenschaftswerts zeigt ein Warnsymbol neben dieser Eigenschaft an.

#### Verbesserungen im Scratchpad

- Das _Scratchpad_ hat jetzt eine Option im Hilfe-Menü, die Sie zur MDN-Dokumentation über Scratchpad führt.

## Änderungen für Mozilla- und Add-on-Entwickler

### Kompatibilitätsnotiz

Ab Firefox 13 erfordert Firefox für Windows mindestens Windows XP Service Pack 2; es wird nicht mehr auf Windows 2000 oder früheren Versionen von Windows XP laufen.

### JavaScript-Code-Module

#### source-editor.jsm

- Unterstützung für eine "dirty"-Flag wurde zur Source-Editor-API hinzugefügt.
- Der Source-Editor unterstützt nicht mehr das Zurückfallen auf ein {{HTMLElement("textarea")}} anstelle von Orion.
- Der Editor bietet nun Focus- und Blur-Ereignisse an.
- Die Methode [`getIndentationString()`](https://web.archive.org/web/20210620193439/https://developer.mozilla.org/de/docs/Mozilla/JavaScript_code_modules/source-editor.jsm#getIndentationString%28%29) wurde hinzugefügt; sie gibt den String zurück, der zum Einrücken von Text im Editor verwendet werden soll.
- Der Source-Editor unterstützt jetzt die Verwaltung einer Liste von Haltepunkten und die Anzeige einer Benutzeroberfläche zum Umschalten dieser, implementiert aber keine Haltepunkte. Das müssen Sie selbst im Debugger-Code implementieren.
- Unterstützung für das Hervorheben der aktuellen Zeile mittels der `highlightCurrentLine`-Konfigurationsoption wurde hinzugefügt.

### ARIA

- Die CSS-Eigenschaften {{cssxref("margin-left")}}, {{cssxref("margin-right")}}, {{cssxref("margin-top")}}, {{cssxref("margin-bottom")}} werden jetzt alle in ARIA-Objektattribute mit demselben Namen widergespiegelt. Weitere Informationen finden Sie unter [Gecko-Objektattribute](https://web.archive.org/web/20210120101715/https://developer.mozilla.org/de/docs/Mozilla/Tech/Accessibility/AT-APIs/Gecko/Attrs).

### Schnittstellen

- Die `nsIScreen`-Schnittstelle unterstützt jetzt die Steuerung der Drehung durch das neue `rotation`-Attribut.
- Die `nsIPrefBranch2`-Schnittstelle wurde in `nsIPrefBranch` zusammengeführt ([Firefox-Bug 718255](https://bugzil.la/718255)).
- Der neue Nachrichtenmanager-Weckdienst, implementiert durch `nsIMessageWakeupService`, wurde implementiert. Siehe [Firefox-Bug 591052](https://bugzil.la/591052).
- Die Aliase `MozOpacity`, `MozOutline`, `MozOutlineStyle`, `MozOutlineWidth`, `MozOutlineOffset` und `MozOutlineColor`, die alle in früheren Versionen von Gecko entfernt wurden, wurden aus `nsIDOMCSS2Properties` entfernt, was hätte geschehen sollen, als die Aliase ursprünglich entfernt wurden.
- Das `nsINavHistoryQueryOptions`-Attribut `excludeItemIfParentHasAnnotation` sowie die entsprechende Abfrageoperation wurden entfernt. Es existierte, um Livemarks zu unterstützen, die nicht mehr existieren.
