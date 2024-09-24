---
title: Firefox 13 für Entwickler
slug: Mozilla/Firefox/Releases/13
l10n:
  sourceCommit: 1b4e6d1156e8471d38deeea1567c35ef412c5f42
---

{{FirefoxSidebar}}

Firefox 13 wurde am 5. Juni 2012 veröffentlicht. Diese Seite fasst die Änderungen in Firefox 13 zusammen, die Entwickler betreffen.

## Änderungen für Webentwickler

### HTML

- Die [`cellspacing`](/de/docs/Web/HTML/Element/table#cellspacing)-Attribute von Tabellen werden jetzt außerhalb des Quirks-Modus genauso wie im Quirks-Modus geparst. Das bedeutet, wenn ein Wert als Prozentsatz angegeben wird, wird er stattdessen als Pixelanzahl behandelt, da Prozentwerte gemäß der Spezifikation eigentlich nicht erlaubt sind.
- Das {{htmlelement("wbr")}}-Element hat sein bidirektionales Verhalten korrigiert. Es verhält sich jetzt wie das Unicode `U+200B ZERO-WIDTH SPACE` und beeinflusst daher nicht mehr die Bidirektionalität seines Elternelements.
- Die {{Cssxref(":invalid")}}-Pseudoklasse kann jetzt auf das {{htmlelement("form")}}-Element angewendet werden.

### CSS

- Die `turn` {{cssxref("&lt;angle&gt;")}}-Einheit wird jetzt unterstützt (zur Verwendung mit CSS-Funktionen wie `rotate()`).
- Unterstützung für die 3-zu-4-Wert-Syntax der {{cssxref("background-position")}} wurde hinzugefügt. Sie können ein Hintergrundbild von jeder Ecke aus versetzen, indem Sie zum Beispiel "`right 10px bottom 20px`" schreiben. Siehe [Firefox Bug 522607](https://bugzil.la/522607).
- Unterstützung für die 2-Wert-Syntax des CSS {{cssxref("background-repeat")}} wurde hinzugefügt.
- Unterstützung für {{cssxref("border-radius","-moz-border-radius*")}} und {{cssxref("box-shadow","-moz-box-shadow")}} wurde entfernt. Autoren sollten stattdessen das unpräfixierte `border-radius` oder `box-shadow` verwenden. Siehe [Firefox Bug 693510](https://bugzil.la/693510).
- Die {{cssxref("column-fill")}}-Eigenschaft wurde implementiert (mit Präfix).

### JavaScript

- Unterstützung für die ECMAScript 2015 [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Schleife wurde hinzugefügt.
- Experimentelle Unterstützung für ECMAScript 2015 [Map](/de/docs/Web/JavaScript/Reference/Global_Objects/Map) und [Set](/de/docs/Web/JavaScript/Reference/Global_Objects/Set)-Objekte wurde implementiert.

### DOM

- Das `deep`-Argument der [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode)-Methode ist jetzt optional, wie in DOM4 spezifiziert.
- Die Methoden [`setTimeout()`](/de/docs/Web/API/Window/setTimeout), [`setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout), [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval) und [`WorkerGlobalScope.setInterval()`](/de/docs/Web/API/WorkerGlobalScope/setInterval) übergeben nicht mehr ein zusätzliches "Lateness"-Argument an die Callback-Routine.
- Die Methode [`Blob.mozSlice()`](/de/docs/Web/API/Blob) wurde unpräfixiert.
- Unterstützung für den [`Blob`](/de/docs/Web/API/Blob)-Konstruktor wurde hinzugefügt.
- Unterstützung für `globalStorage` wurde entfernt.
- Das neue `DOMRequest`-Interface, das zur Berichterstattung des Status und Ergebnisses von Hintergrundoperationen verwendet wird, wurde hinzugefügt.
- Die Methode [`HTMLOptionElement.index()`](/de/docs/Web/API/HTMLOptionElement) gibt jetzt `0` zurück anstelle von fälschlicherweise `-1`, wenn die {{HTMLElement("option")}} in einem {{HTMLElement("datalist")}}-HTML-Element ist.
- [`DOMException`](/de/docs/Web/API/DOMException) wie in DOM Level 4 definiert wurde implementiert.
- Das [`FileError`](/de/docs/Web/API/FileError)-Interface wurde zugunsten des [`DOMError`](/de/docs/Web/API/DOMError)-Interface entfernt, wie in der neuesten FileAPI-Spezifikation definiert.
- Das [`Range`](/de/docs/Web/API/Range)-Objekt löst keinen `RangeException` mehr aus. Stattdessen wird eine [`DOMException`](/de/docs/Web/API/DOMException) verwendet, wie in DOM 4 definiert.
- [`element.getAttributeNS()`](/de/docs/Web/API/Element/getAttributeNS) gibt jetzt immer `null` statt des leeren Strings für nicht vorhandene Attribute zurück. Zuvor gab es Fälle, in denen der leere String zurückgegeben werden konnte. Dies entspricht der DOM4-Spezifikation, die jetzt vorschreibt, dass bei nicht vorhandenen Attributen `null` zurückgegeben werden sollte, statt eines leeren Strings.
- Das [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement)-Interface hat jetzt eine nicht standardmäßige `mozFetchAsStream()`-Methode, die einen Eingabestrom enthält, der die Bilddaten des Elements im angegebenen Format bereitstellt.

### UA-String

- Firefox für Android hat jetzt ein [Tablet- oder Mobile-Token im UA-String](/de/docs/Gecko_user_agent_string_reference#mobile_and_tablet_indicators), um die Formfaktor anzugeben und enthält nicht mehr das Fennec-Token. Außerdem ist die Zahl nach "Gecko/" jetzt die Gecko-Versionsnummer anstelle eines eingefrorenen Datums.
- Der UA-String gibt die Gecko-Patchnummer oder den Release-Status nicht mehr in der Versionsnummer an; das bedeutet, die Versionsnummer hat jetzt immer die Form "X.Y", wobei X die Hauptversionsnummer und Y die Nebenversionsnummer ist. Zum Beispiel "13.0" oder "14.1". Es wird nicht mehr etwas wie "14.0.1b1" sein.

### SVG

- Das [`SVGStringList`](/de/docs/Web/API/SVGStringList)-DOM-Interface ist jetzt wie [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) indexierbar (siehe [Firefox Bug 722071](https://bugzil.la/722071)).

### WebGL

- Unterstützung für die [`EXT_texture_filter_anisotropic`](/de/docs/Web/API/WebGL_API/Using_Extensions#ext_texture_filter_anisotropic)-Erweiterung wurde hinzugefügt. Anisotrope Texturfilterung verbessert die Qualität des Zugriffs auf mipmap-Texturen, wenn eine Texturprimitiv aus einem schrägen Winkel betrachtet wird.

### MathML

- Unterstützung für das `width`-Attribut bei {{MathMLElement("mtable")}}-Elementen wurde hinzugefügt ([Firefox Bug 722880](https://bugzil.la/722880)).
- [MathJax-Schriften](https://docs.mathjax.org/en/latest/output/fonts.html) werden jetzt als Standardschriften für mathematischen Text verwendet. Weitere Informationen finden Sie unter [Fonts für Mozillas MathML-Engine](/de/docs/Mozilla_MathML_Project/Fonts).

### Netzwerk

- Das SPDY-Protokoll ist jetzt standardmäßig aktiviert.

### Entwicklerwerkzeuge

#### Verbesserungen der 3D-Ansicht

- Sie können jetzt die "f"-Taste drücken, um sicherzustellen, dass der aktuell ausgewählte Knoten sichtbar ist.

#### Verbesserungen des Stil-Panels

- Wenn Sie die Überschrift einer Regel im [Stil-Panel](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html#css-pane) anklicken, wird jetzt der [Stil-Editor](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html) an der entsprechenden CSS-Datei geöffnet.
- Ein Rechtsklick auf eine Regel im [Stil-Panel](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html#css-pane) bietet jetzt eine Option, die Regel in die Zwischenablage zu kopieren.
- Bei Eingabe eines unbekannten Eigenschaftsnamens oder eines ungültigen Eigenschaftswertes wird ein Warnsymbol neben dieser Eigenschaft angezeigt.

#### Verbesserungen im Scratchpad

- Das _Scratchpad_ hat jetzt eine Option im Hilfemenü, um Sie zur MDN-Dokumentation über Scratchpad zu führen.

## Änderungen für Mozilla- und Add-on-Entwickler

### Kompatibilitäts-Hinweis

Ab Firefox 13 erfordert Firefox für Windows mindestens Windows XP Service Pack 2; es wird nicht mehr auf Windows 2000 oder früheren Versionen von Windows XP ausgeführt.

### JavaScript-Codemodule

#### source-editor.jsm

- Unterstützung für ein "dirty"-Flag wurde zur Source Editor API hinzugefügt.
- Der Source Editor unterstützt nicht mehr den Rückgriff auf ein {{HTMLElement("textarea")}} anstelle der Verwendung von Orion.
- Der Editor stellt jetzt Fokus- und Unschärfeereignisse bereit.
- Die Methode [`getIndentationString()`](/de/docs/JavaScript_code_modules/source-editor.jsm#getIndentationString%28%29) wurde hinzugefügt; sie gibt die Zeichenfolge zurück, die zum Einrücken von Text im Editor verwendet werden soll.
- Der Source Editor unterstützt jetzt das Verwalten einer Liste von Haltepunkten und das Anzeigen einer Benutzeroberfläche zum Aktivieren und Deaktivieren; die Implementierung der Haltepunkte ist jedoch Ihnen überlassen, um Debugger-Code zu schreiben.
- Unterstützung für das Hervorheben der aktuellen Zeile wurde hinzugefügt, indem die `highlightCurrentLine`-Konfigurationsoption verwendet wird.

### ARIA

- Die CSS-Eigenschaften {{cssxref("margin-left")}}, {{cssxref("margin-right")}}, {{cssxref("margin-top")}}, {{cssxref("margin-bottom")}} werden jetzt alle in ARIA-Objektattribute mit demselben Namen reflektiert. Weitere Informationen finden Sie unter [Gecko-Objektattribute](/de/docs/Accessibility/AT-APIs/Gecko/Attrs).

### Schnittstellen

- Das `nsIScreen`-Interface unterstützt jetzt die Steuerung der Drehung über das neue `rotation`-Attribut.
- Das `nsIPrefBranch2`-Interface wurde in `nsIPrefBranch` zusammengeführt ([Firefox Bug 718255](https://bugzil.la/718255)).
- Der neue Meldungsmanager-Weckdienst, implementiert von `nsIMessageWakeupService`, wurde implementiert. Siehe [Firefox Bug 591052](https://bugzil.la/591052).
- Die Aliase `MozOpacity`, `MozOutline`, `MozOutlineStyle`, `MozOutlineWidth`, `MozOutlineOffset` und `MozOutlineColor`, die alle in früheren Versionen von Gecko entfernt wurden, wurden aus `nsIDOMCSS2Properties` entfernt, was hätte geschehen sollen, als die Aliase ursprünglich entfernt wurden.
- Das `nsINavHistoryQueryOptions`-Attribut `excludeItemIfParentHasAnnotation` wurde zusammen mit der entsprechenden Abfrageoperation entfernt. Es existierte zur Unterstützung von Livemarks, die nicht mehr existieren.

## Siehe auch

{{Firefox_for_developers}}
