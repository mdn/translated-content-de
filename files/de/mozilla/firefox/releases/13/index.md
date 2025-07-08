---
title: Firefox 13 für Entwickler
slug: Mozilla/Firefox/Releases/13
l10n:
  sourceCommit: 2d5b20a5eabb48bc5472ebe94b11afe2aa84f585
---

Firefox 13 wurde am 5. Juni 2012 veröffentlicht. Diese Seite fasst die Änderungen in Firefox 13 zusammen, die Entwickler betreffen.

## Änderungen für Webentwickler

### HTML

- Die [`cellspacing`](/de/docs/Web/HTML/Reference/Elements/table#cellspacing)-Attribute von Tabellen werden jetzt außerhalb des Quirks-Modus genauso geparst wie im Quirks-Modus. Das bedeutet, wenn ein Wert als Prozentsatz angegeben wird, wird er stattdessen als Pixelanzahl behandelt, da Prozentwerte laut Spezifikation tatsächlich nicht erlaubt sind.
- Das {{htmlelement("wbr")}}-Element hat sein bidirektionales Verhalten korrigiert. Es verhält sich jetzt wie der Unicode `U+200B ZERO-WIDTH SPACE` und beeinflusst daher nicht mehr die Bidirektionalität seines Elternelements.
- Die {{Cssxref(":invalid")}}-Pseudoklasse kann jetzt auf das {{htmlelement("form")}}-Element angewendet werden.

### CSS

- Die `turn` {{cssxref("&lt;angle&gt;")}}-Einheit wird jetzt unterstützt (um mit CSS-Funktionen wie `rotate()` verwendet zu werden).
- Unterstützung für die 3-zu-4-Werte-Syntax von {{cssxref("background-position")}} wurde hinzugefügt. Sie können ein Hintergrundbild von jeder Ecke aus versetzen, indem Sie beispielsweise `right 10px bottom 20px` schreiben. Siehe [Firefox Bug 522607](https://bugzil.la/522607).
- Unterstützung für die 2-Werte-Syntax von CSS {{cssxref("background-repeat")}} wurde hinzugefügt.
- Unterstützung für {{cssxref("border-radius","-moz-border-radius*")}} und {{cssxref("box-shadow","-moz-box-shadow")}} wurde entfernt. Autoren sollten stattdessen den nicht vorangestellten `border-radius` oder `box-shadow` verwenden. Siehe [Firefox Bug 693510](https://bugzil.la/693510).
- Die Eigenschaft {{cssxref("column-fill")}} wurde implementiert (mit Präfix).

### JavaScript

- Unterstützung für die ECMAScript 2015 [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of) Konstruktion wurde hinzugefügt.
- Experimentelle Unterstützung für ECMAScript 2015 [Map](/de/docs/Web/JavaScript/Reference/Global_Objects/Map) und [Set](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) Objekte wurde implementiert.

### DOM

- Das `deep`-Argument der Methode [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode) ist jetzt optional, wie in DOM4 spezifiziert.
- Die Methoden [`setTimeout()`](/de/docs/Web/API/Window/setTimeout), [`setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout), [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval) und [`WorkerGlobalScope.setInterval()`](/de/docs/Web/API/WorkerGlobalScope/setInterval) geben dem Callback-Routine kein zusätzliches "Lateness"-Argument mehr.
- Die Methode [`Blob.mozSlice()`](/de/docs/Web/API/Blob) wurde ohne Präfix versehen.
- Unterstützung für den [`Blob`](/de/docs/Web/API/Blob)-Konstruktor wurde hinzugefügt.
- Unterstützung für `globalStorage` wurde entfernt.
- Das neue `DOMRequest`-Interface, das zum Melden des Status und Ergebnisses von Hintergrundoperationen verwendet wird, wurde hinzugefügt.
- Die Methode [`HTMLOptionElement.index()`](/de/docs/Web/API/HTMLOptionElement) gibt jetzt `0` anstelle des falschen `-1` zurück, wenn das {{HTMLElement("option")}}-Element innerhalb eines {{HTMLElement("datalist")}}-HTML-Elements ist.
- [`DOMException`](/de/docs/Web/API/DOMException) wie in DOM Level 4 definiert, wurde implementiert.
- Das [`FileError`](/de/docs/Web/API/FileError)-Interface wurde zugunsten des [`DOMError`](/de/docs/Web/API/DOMError)-Interfaces entfernt, wie es in der neuesten FileAPI-Spezifikation definiert ist.
- Das [`Range`](/de/docs/Web/API/Range)-Objekt wirft keine `RangeException` mehr. Stattdessen wird eine [`DOMException`](/de/docs/Web/API/DOMException) verwendet, wie in DOM 4 definiert.
- [`element.getAttributeNS()`](/de/docs/Web/API/Element/getAttributeNS) gibt jetzt immer `null` zurück, anstelle des leeren Strings für nicht vorhandene Attribute. Zuvor gab es Fälle, in denen der leere String zurückgegeben werden konnte. Dies entspricht der DOM4-Spezifikation, die nun besagt, dass `null` für nicht vorhandene Attribute zurückgegeben werden sollte, anstelle eines leeren Strings.
- Die Schnittstelle [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) hat jetzt eine nicht-standardisierte `mozFetchAsStream()`-Methode, die einen Eingabestrom mit den Bilddaten des Elements im angegebenen Format bereitstellt.

### Benutzeragenten-String

- Firefox für Android hat jetzt ein [Tablet- oder Mobile-Token im UA-String](/de/docs/Gecko_user_agent_string_reference#mobile_and_tablet_indicators), das die Formfaktor anzeigt und nicht länger das Fennec-Token enthält. Auch enthält die Nummer nach "Gecko/" jetzt die Gecko-Versionsnummer anstelle eines eingefrorenen Datums.
- Der UA-String zeigt nicht mehr die Gecko-Patchnummer oder den Releasestatus in der Versionsnummer an; das heißt, die Versionsnummer hat jetzt immer die Form "X.Y", wobei X die Hauptversionsnummer und Y die Nebenversionsnummer ist. Zum Beispiel "13.0" oder "14.1". Es wird nicht mehr etwas wie "14.0.1b1" sein.

### SVG

- Die [`SVGStringList`](/de/docs/Web/API/SVGStringList)-DOM-Schnittstelle ist jetzt indexierbar wie [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) (siehe [Firefox Bug 722071](https://bugzil.la/722071)).

### WebGL

- Unterstützung für die [`EXT_texture_filter_anisotropic`](/de/docs/Web/API/EXT_texture_filter_anisotropic)-Erweiterung wurde hinzugefügt. Anisotropes Texturfiltering verbessert die Qualität des mipmap-basierten Texturzugriffs, wenn man eine texturierte Primitive aus einem schrägen Winkel betrachtet.

### MathML

- Unterstützung für das `width`-Attribut auf {{MathMLElement("mtable")}}-Elementen wurde hinzugefügt ([Firefox Bug 722880](https://bugzil.la/722880)).
- [MathJax-Schriften](https://docs.mathjax.org/en/latest/output/fonts.html) werden jetzt als Standardschriftarten für mathematischen Text verwendet. Siehe [Schriften für Mozillas MathML-Engine](/de/docs/Mozilla_MathML_Project/Fonts) für weitere Informationen.

### Netzwerk

- Das SPDY-Protokoll ist jetzt standardmäßig aktiviert.

### Entwicklertools

#### Verbesserungen der 3D-Ansicht

- Sie können jetzt die "f"-Taste drücken, um sicherzustellen, dass der aktuell ausgewählte Knoten sichtbar ist.

#### Verbesserungen im Stil-Panel

- Ein Klick auf die Überschrift für eine beliebige Regel im [Stil-Panel](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html#css-pane) öffnet jetzt den [Stil-Editor](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html) an der entsprechenden CSS-Stelle.
- Ein Rechtsklick auf eine Regel im [Stil-Panel](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html#css-pane) bietet nun die Möglichkeit, die Regel in die Zwischenablage zu kopieren.
- Das Eingeben eines unbekannten Eigenschaftsnamens oder eines ungültigen Eigenschaftswerts zeigt ein Warnsymbol neben dieser Eigenschaft an.

#### Verbesserungen im Scratchpad

- Das _Scratchpad_ hat jetzt eine Option im Hilfemenü, um Sie zur MDN-Dokumentation über Scratchpad zu führen.

## Änderungen für Mozilla- und Add-on-Entwickler

### Kompatibilitätshinweis

Ab Firefox 13 erfordert Firefox für Windows mindestens Windows XP Service Pack 2; es wird nicht mehr auf Windows 2000 oder früheren Versionen von Windows XP ausgeführt.

### JavaScript-Code-Module

#### source-editor.jsm

- Unterstützung für ein "dirty flag" wurde zur Source Editor API hinzugefügt.
- Der Source Editor unterstützt nicht mehr das Zurückgreifen auf ein {{HTMLElement("textarea")}} anstelle der Verwendung von Orion.
- Der Editor bietet jetzt Fokus- und Unschärfeereignisse.
- Die Methode [`getIndentationString()`](/de/docs/JavaScript_code_modules/source-editor.jsm#getIndentationString%28%29) wurde hinzugefügt; sie gibt den String zurück, der zum Einrücken von Text im Editor verwendet werden soll.
- Der Source Editor unterstützt jetzt die Verwaltung einer Liste von Breakpoints und das Anzeigen der Benutzeroberfläche zum Toggeln dieser. Allerdings implementiert er keine Breakpoints, das müssen Sie selbst in Ihrem Debugger-Code umsetzen.
- Unterstützung für die Hervorhebung der aktuellen Zeile wurde mit der `highlightCurrentLine`-Konfigurationsoption hinzugefügt.

### ARIA

- Die CSS-Eigenschaften {{cssxref("margin-left")}}, {{cssxref("margin-right")}}, {{cssxref("margin-top")}}, {{cssxref("margin-bottom")}} werden jetzt alle in ARIA-Objektattribute mit demselben Namen reflektiert. Siehe [Gecko-Objektattribute](/de/docs/Accessibility/AT-APIs/Gecko/Attrs) für weitere Informationen.

### Schnittstellen

- Die `nsIScreen`-Schnittstelle unterstützt jetzt die Steuerung der Rotation durch das neue `rotation`-Attribut.
- Die `nsIPrefBranch2`-Schnittstelle wurde in `nsIPrefBranch` zusammengeführt ([Firefox Bug 718255](https://bugzil.la/718255)).
- Der neue Nachrichtenmanager-Weckdienst, implementiert durch `nsIMessageWakeupService`, wurde implementiert. Siehe [Firefox Bug 591052](https://bugzil.la/591052).
- Die Aliase `MozOpacity`, `MozOutline`, `MozOutlineStyle`, `MozOutlineWidth`, `MozOutlineOffset` und `MozOutlineColor`, die alle in früheren Versionen von Gecko entfernt wurden, wurden aus `nsIDOMCSS2Properties` entfernt, was hätte geschehen sollen, als die Aliase ursprünglich entfernt wurden.
- Das `nsINavHistoryQueryOptions`-Attribut `excludeItemIfParentHasAnnotation` wurde entfernt, zusammen mit der entsprechenden Abfrageoperation. Es existierte, um Livemarks zu unterstützen, die nicht mehr existieren.

## Siehe auch

{{Firefox_for_developers}}
