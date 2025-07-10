---
title: Firefox 13 für Entwickler
slug: Mozilla/Firefox/Releases/13
l10n:
  sourceCommit: 594ae0d4ffb6326a9529fe366d30ca633309ee30
---

Firefox 13 wurde am 5. Juni 2012 veröffentlicht. Diese Seite fasst die Änderungen in Firefox 13 zusammen, die Entwickler betreffen.

## Änderungen für Webentwickler

### HTML

- Die [`cellspacing`](/de/docs/Web/HTML/Reference/Elements/table#cellspacing)-Attribute von Tabellen werden nun außerhalb des Quirks-Modus genauso geparst wie im Quirks-Modus. Das bedeutet, wenn ein Wert als Prozentsatz angegeben wird, wird er stattdessen als Pixelanzahl behandelt, da Prozentwerte laut Spezifikation nicht zulässig sind.
- Das {{htmlelement("wbr")}}-Element hat sein bidirektionales Verhalten angepasst. Es verhält sich nun wie das Unicode `U+200B ZERO-WIDTH SPACE` und beeinflusst daher die Bidirektionalität seines übergeordneten Elements nicht mehr.
- Die {{Cssxref(":invalid")}}-Pseudoklasse kann nun auf das {{htmlelement("form")}}-Element angewendet werden.

### CSS

- Die `turn` {{cssxref("&lt;angle&gt;")}}-Einheit wird nun unterstützt (zu verwenden mit CSS-Funktionen wie `rotate()`).
- Unterstützung für die 3-zu-4-Wert-Syntax von {{cssxref("background-position")}} wurde hinzugefügt. Sie können ein Hintergrundbild mit einer Schreibweise wie `right 10px bottom 20px` von jeder Ecke versetzen. Siehe [Firefox Bug 522607](https://bugzil.la/522607)
- Unterstützung für die 2-Wert-Syntax von CSS {{cssxref("background-repeat")}} wurde hinzugefügt.
- Unterstützung für {{cssxref("border-radius","-moz-border-radius*")}} und {{cssxref("box-shadow","-moz-box-shadow")}} wurde entfernt. Autoren sollten stattdessen unveränderte `border-radius` oder `box-shadow` verwenden. Siehe [Firefox Bug 693510](https://bugzil.la/693510)
- Die {{cssxref("column-fill")}}-Eigenschaft wurde implementiert (mit Präfix).

### JavaScript

- Unterstützung für die ECMAScript 2015 [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Konstruktion wurde hinzugefügt.
- Experimentelle Unterstützung für ECMAScript 2015 [Map](/de/docs/Web/JavaScript/Reference/Global_Objects/Map) und [Set](/de/docs/Web/JavaScript/Reference/Global_Objects/Set)-Objekte wurde implementiert.

### DOM

- Das `deep`-Argument der Methode [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode) ist nun optional, wie in DOM4 spezifiziert.
- Die Methoden [`setTimeout()`](/de/docs/Web/API/Window/setTimeout), [`setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout), [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval) und [`WorkerGlobalScope.setInterval()`](/de/docs/Web/API/WorkerGlobalScope/setInterval) übergeben kein zusätzliches "Verspätungs"-Argument mehr an die Callback-Routine.
- Die Methode [`Blob.mozSlice()`](/de/docs/Web/API/Blob) ist nun ohne Präfix verfügbar.
- Unterstützung für den [`Blob`](/de/docs/Web/API/Blob)-Konstruktor wurde hinzugefügt.
- Unterstützung für `globalStorage` wurde entfernt.
- Die neue `DOMRequest`-Schnittstelle, die zur Berichterstattung über den Status und das Ergebnis von Hintergrundoperationen verwendet wird, wurde hinzugefügt.
- Die Methode [`HTMLOptionElement.index()`](/de/docs/Web/API/HTMLOptionElement) gibt nun `0` anstelle des falschen Werts `-1` zurück, wenn das {{HTMLElement("option")}}-Element sich in einem {{HTMLElement("datalist")}}-HTML-Element befindet.
- [`DOMException`](/de/docs/Web/API/DOMException) wie in DOM Level 4 definiert, wurde implementiert.
- Die `FileError`-Schnittstelle wurde zugunsten der [`DOMError`](/de/docs/Web/API/DOMError)-Schnittstelle entfernt, wie in der neuesten FileAPI-Spezifikation definiert.
- Das [`Range`](/de/docs/Web/API/Range)-Objekt wirft keinen `RangeException` mehr. Stattdessen wird eine [`DOMException`](/de/docs/Web/API/DOMException) wie in DOM 4 verwendet.
- [`element.getAttributeNS()`](/de/docs/Web/API/Element/getAttributeNS) gibt nun immer `null` anstelle des leeren Strings für nicht vorhandene Attribute zurück. Zuvor konnte in einigen Fällen der leere String zurückgegeben werden. Dies entspricht der DOM4-Spezifikation, die nun angibt, dass `null` für nicht vorhandene Attribute zurückgegeben werden soll, anstelle eines leeren Strings.
- Die [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement)-Schnittstelle besitzt nun eine nicht standardisierte `mozFetchAsStream()`-Methode, die einen Eingabestrom bereitstellt, der die Bilddaten des Elements im angegebenen Format enthält.

### UA-String

- Firefox für Android enthält nun einen [Tablet- oder Mobile-Token im UA-String](/de/docs/Web/HTTP/Reference/Headers/User-Agent/Firefox#mobile_and_tablet_indicators), um die Gerätekategorie anzuzeigen, und hat den Fennec-Token entfernt. Auch die Zahl nach "Gecko/" ist nun die Gecko-Versionsnummer anstelle eines gefrorenen Datums.
- Der UA-String zeigt die Gecko-Patchnummer oder den Veröffentlichungsstatus nicht mehr in der Versionsnummer an; das heißt, die Versionsnummer ist nun immer von der Form "X.Y", wobei X die Hauptversionsnummer und Y die Unterversionsnummer ist. Beispielsweise "13.0" oder "14.1". Es wird nicht mehr etwas wie "14.0.1b1" sein.

### SVG

- Die [`SVGStringList`](/de/docs/Web/API/SVGStringList)-DOM-Schnittstelle ist nun indizierbar wie [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) (siehe [Firefox Bug 722071](https://bugzil.la/722071)).

### WebGL

- Unterstützung für die [`EXT_texture_filter_anisotropic`](/de/docs/Web/API/EXT_texture_filter_anisotropic)-Erweiterung wurde hinzugefügt. Anisotrope Texturfilterung verbessert die Qualität des Mipmap-Texturzugriffs beim Betrachten eines texturierten Primitivs aus einem schrägen Winkel.

### MathML

- Unterstützung für das `width`-Attribut auf {{MathMLElement("mtable")}}-Elementen wurde hinzugefügt ([Firefox Bug 722880](https://bugzil.la/722880)).
- [MathJax-Schriften](https://docs.mathjax.org/en/latest/output/fonts.html) werden nun als Standardschriftarten für mathematischen Text verwendet. Siehe [Schriften für Mozillas MathML-Engine](/de/docs/Mozilla_MathML_Project/Fonts) für weitere Informationen.

### Netzwerk

- Das SPDY-Protokoll ist nun standardmäßig aktiviert.

### Entwicklerwerkzeuge

#### Verbesserungen der 3D-Ansicht

- Sie können jetzt die "f"-Taste drücken, um sicherzustellen, dass der aktuell ausgewählte Knoten sichtbar ist.

#### Verbesserungen des Stil-Panels

- Ein Klick auf die Überschrift einer Regel im [Stil-Panel](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html#css-pane) öffnet jetzt den [Stil-Editor](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html) an der entsprechenden CSS-Position.
- Ein Rechtsklick auf eine Regel im [Stil-Panel](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html#css-pane) bietet nun die Möglichkeit, die Regel in die Zwischenablage zu kopieren.
- Das Eingeben eines unbekannten Eigenschaftsnamens oder eines ungültigen Eigenschaftswerts zeigt ein Warnsymbol neben dieser Eigenschaft an.

#### Verbesserungen von Scratchpad

- Das _Scratchpad_ hat jetzt eine Option im Hilfemenü, die Sie zur MDN-Dokumentation über Scratchpad führt.

## Änderungen für Mozilla- und Add-on-Entwickler

### Kompatibilitätshinweis

Ab Firefox 13 erfordert Firefox für Windows mindestens Windows XP Service Pack 2; es wird nicht mehr auf Windows 2000 oder früheren Versionen von Windows XP ausgeführt.

### JavaScript-Code-Module

#### source-editor.jsm

- Unterstützung für eine "dirty"-Markierung wurde zur Source Editor-API hinzugefügt.
- Der Source Editor unterstützt nicht mehr das Zurückfallen auf ein {{HTMLElement("textarea")}} anstelle von Orion.
- Der Editor stellt jetzt Fokus- und Unscharf-Events bereit.
- Die Methode [`getIndentationString()`](/de/docs/JavaScript_code_modules/source-editor.jsm#getIndentationString%28%29) wurde hinzugefügt; sie gibt den String zurück, der zum Einrücken von Text im Editor verwendet werden soll.
- Der Source Editor unterstützt jetzt die Verwaltung einer Liste von Haltepunkten und die Anzeige einer Benutzeroberfläche zum Ein- und Ausschalten; die Implementierung von Haltepunkten obliegt jedoch immer noch Ihnen. Sie müssen Debugger-Code dafür schreiben.
- Unterstützung für das Hervorheben der aktuellen Zeile wurde hinzugefügt, mithilfe der Konfigurationsoption `highlightCurrentLine`.

### ARIA

- Die CSS-Eigenschaften {{cssxref("margin-left")}}, {{cssxref("margin-right")}}, {{cssxref("margin-top")}}, {{cssxref("margin-bottom")}} werden nun alle in ARIA-Objektattribute mit demselben Namen reflektiert. Siehe [Gecko-Objektattribute](/de/docs/Accessibility/AT-APIs/Gecko/Attrs) für weitere Informationen.

### Schnittstellen

- Die `nsIScreen`-Schnittstelle unterstützt jetzt die Steuerung der Rotation durch das neue `rotation`-Attribut.
- Die `nsIPrefBranch2`-Schnittstelle wurde in `nsIPrefBranch` zusammengeführt ([Firefox Bug 718255](https://bugzil.la/718255)).
- Der neue Nachricht-Manager-Weckdienst, implementiert von `nsIMessageWakeupService`, wurde implementiert. Siehe [Firefox Bug 591052](https://bugzil.la/591052).
- Die Aliase `MozOpacity`, `MozOutline`, `MozOutlineStyle`, `MozOutlineWidth`, `MozOutlineOffset` und `MozOutlineColor`, die alle in früheren Versionen von Gecko entfernt wurden, wurden aus `nsIDOMCSS2Properties` entfernt, was hätte geschehen sollen, als die Aliase ursprünglich entfernt wurden.
- Das Attribut `excludeItemIfParentHasAnnotation` der `nsINavHistoryQueryOptions`-Schnittstelle wurde entfernt, zusammen mit der entsprechenden Abfrageoperation. Es existierte zur Unterstützung von Livemarks, die nicht mehr vorhanden sind.

## Siehe auch

{{Firefox_for_developers}}
