---
title: Firefox 13 für Entwickler
short-title: Firefox 13
slug: Mozilla/Firefox/Releases/13
l10n:
  sourceCommit: 2591a9b59de88401a2ef0fb7d0b8d0281e3f5376
---

Firefox 13 wurde am 5. Juni 2012 veröffentlicht. Diese Seite fasst die Änderungen in Firefox 13 zusammen, die Entwickler betreffen.

## Änderungen für Webentwickler

### HTML

- Die Attribute [`cellspacing`](/de/docs/Web/HTML/Reference/Elements/table#cellspacing) von Tabellen werden nun außerhalb des Quirks-Modus genauso analysiert wie im Quirks-Modus. Das heißt, wenn ein Wert als Prozentsatz angegeben ist, wird er stattdessen als Anzahl von Pixeln behandelt, da Prozentwerte laut Spezifikation nicht tatsächlich zulässig sind.
- Das {{htmlelement("wbr")}}-Element hat sein bidirektionales Verhalten korrigiert. Es verhält sich jetzt wie der Unicode `U+200B ZERO-WIDTH SPACE` und beeinflusst daher nicht mehr die Bidirektionalität seines Elternelements.
- Die {{Cssxref(":invalid")}} Pseudo-Klasse kann nun auf das {{htmlelement("form")}}-Element angewendet werden.

### CSS

- Die Einheit `turn` {{cssxref("&lt;angle&gt;")}} wird jetzt unterstützt (zur Verwendung mit CSS-Funktionen wie `rotate()`).
- Unterstützung für die 3-zu-4-Wert-Syntax von {{cssxref("background-position")}} wurde hinzugefügt. Sie können ein Hintergrundbild von jeder Ecke aus versetzen, indem Sie z.B. `right 10px bottom 20px` schreiben. Siehe [Firefox Bug 522607](https://bugzil.la/522607).
- Unterstützung für die 2-Wert-Syntax des CSS-Attributs {{cssxref("background-repeat")}} wurde hinzugefügt.
- Unterstützung für {{cssxref("border-radius","-moz-border-radius*")}} und {{cssxref("box-shadow","-moz-box-shadow")}} wurde entfernt. Autoren sollten stattdessen die unpräfixte `border-radius` oder `box-shadow` verwenden. Siehe [Firefox Bug 693510](https://bugzil.la/693510).
- Die {{cssxref("column-fill")}} Eigenschaft wurde implementiert (mit Präfix).

### JavaScript

- Unterstützung für das ECMAScript 2015 [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of) Konstrukt wurde hinzugefügt.
- Experimentelle Unterstützung für ECMAScript 2015 [Map](/de/docs/Web/JavaScript/Reference/Global_Objects/Map) und [Set](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) Objekte wurde implementiert.

### DOM

- Das `deep`-Argument der Methode [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode) ist jetzt optional, wie in DOM4 angegeben.
- Die Methoden [`setTimeout()`](/de/docs/Web/API/Window/setTimeout), [`setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout), [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval) und [`WorkerGlobalScope.setInterval()`](/de/docs/Web/API/WorkerGlobalScope/setInterval) übergeben dem Callback keine zusätzliche "Verspätungs"-Argument mehr.
- Die Methode [`Blob.mozSlice()`](/de/docs/Web/API/Blob) wurde unpräfixiert.
- Unterstützung für den [`Blob`](/de/docs/Web/API/Blob) Konstruktor wurde hinzugefügt.
- Unterstützung für `globalStorage` wurde entfernt.
- Die neue `DOMRequest` Schnittstelle, die für die Meldung des Status und der Ergebnisse von Hintergrundoperationen verwendet wird, wurde hinzugefügt.
- Die Methode [`HTMLOptionElement.index()`](/de/docs/Web/API/HTMLOptionElement) gibt jetzt `0` statt des falschen `-1` zurück, wenn sich das {{HTMLElement("option")}} in einem {{HTMLElement("datalist")}} HTML-Element befindet.
- [`DOMException`](/de/docs/Web/API/DOMException) wie in DOM Level 4 definiert, wurde implementiert.
- Das `FileError` Interface wurde zugunsten des [`DOMError`](/de/docs/Web/API/DOMError) Interfaces entfernt, wie in der neuesten FileAPI-Spezifikation definiert.
- Das [`Range`](/de/docs/Web/API/Range) Objekt löst keinen `RangeException` mehr aus. Stattdessen wird ein [`DOMException`](/de/docs/Web/API/DOMException) wie in DOM 4 definiert verwendet.
- [`element.getAttributeNS()`](/de/docs/Web/API/Element/getAttributeNS) gibt jetzt immer `null` statt des leeren Strings für nicht existente Attribute zurück. Zuvor gab es Fälle, in denen der leere String zurückgegeben werden konnte. Das entspricht der DOM4-Spezifikation, die jetzt besagt, dass für nicht existente Attribute `null` zurückgegeben werden sollte, statt eines leeren Strings.
- Das [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) Interface hat jetzt eine nicht standardmäßige `mozFetchAsStream()` Methode, die einen Eingabestream mit den Bilddaten des Elements im angegebenen Format bereitstellt.

### UA-String

- Firefox für Android hat jetzt ein [Tablet oder Mobilgerät-Token im UA-String](/de/docs/Web/HTTP/Reference/Headers/User-Agent/Firefox#mobile_and_tablet_indicators), um den Formfaktor anzuzeigen, und es gibt kein Fennec-Token mehr. Außerdem ist die Nummer nach "Gecko/" jetzt die Gecko-Versionsnummer statt eines festen Datums.
- Der UA-String gibt nicht mehr die Gecko-Patch-Nummer oder den Release-Status in der Versionsnummer an; das heißt, die Versionsnummer hat jetzt immer die Form "X.Y", wobei X die Hauptversionsnummer und Y die Nebenversionsnummer ist. Zum Beispiel "13.0" oder "14.1". Es wird nicht mehr etwas wie "14.0.1b1" sein.

### SVG

- Die [`SVGStringList`](/de/docs/Web/API/SVGStringList) DOM-Schnittstelle ist jetzt wie ein [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) indizierbar (siehe [Firefox Bug 722071](https://bugzil.la/722071)).

### WebGL

- Unterstützung für die [`EXT_texture_filter_anisotropic`](/de/docs/Web/API/EXT_texture_filter_anisotropic) Erweiterung wurde hinzugefügt. Anisotrope Texturfilterung verbessert die Qualität des Zugriffs auf mipmap-Texturen beim Anzeigen eines texturierten Primitivs aus einem schrägen Winkel.

### MathML

- Unterstützung für das `width`-Attribut an {{MathMLElement("mtable")}}-Elementen wurde hinzugefügt ([Firefox Bug 722880](https://bugzil.la/722880)).
- [MathJax-Schriften](https://docs.mathjax.org/en/latest/output/fonts.html) werden jetzt als Standardschriften für mathematischen Text verwendet. Weitere Informationen finden Sie unter [Fonts für Mozillas MathML-Engine](/de/docs/Web/MathML/Guides/Fonts).

### Netzwerk

- Das SPDY-Protokoll ist jetzt standardmäßig aktiviert.

### Entwicklerwerkzeuge

#### Verbesserungen der 3D-Ansicht

- Sie können jetzt die Taste "f" drücken, um sicherzustellen, dass der aktuell ausgewählte Knoten sichtbar ist.

#### Verbesserungen des Style-Panels

- Wenn Sie die Überschrift für eine Regel im [Style-Panel](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html#css-pane) anklicken, öffnet sich jetzt der [Style-Editor](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html) bei dem entsprechenden CSS.
- Ein Rechtsklick auf eine Regel im [Style-Panel](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html#css-pane) bietet jetzt die Möglichkeit, die Regel in die Zwischenablage zu kopieren.
- Wenn Sie einen unbekannten Eigenschaftsnamen oder einen illegalen Eigenschaftswert eingeben, wird ein Warnsymbol neben dieser Eigenschaft angezeigt.

#### Verbesserungen des Scratchpad

- Das _Scratchpad_ hat jetzt eine Option im Hilfe-Menü, die Sie zur MDN-Dokumentation über Scratchpad führt.

## Änderungen für Mozilla- und Add-on-Entwickler

### Kompatibilitätsnotiz

Ab Firefox 13 erfordert Firefox für Windows mindestens Windows XP Service Pack 2; es läuft nicht mehr unter Windows 2000 oder früheren Versionen von Windows XP.

### JavaScript-Code-Module

#### source-editor.jsm

- Unterstützung für ein Schmutz-Flag wurde der Source Editor API hinzugefügt.
- Der Source Editor unterstützt nicht mehr das Zurückgreifen auf ein {{HTMLElement("textarea")}} anstelle der Verwendung von Orion.
- Der Editor legt jetzt Fokus- und Blur-Ereignisse offen.
- Die Methode [`getIndentationString()`](https://web.archive.org/web/20210620193439/https://developer.mozilla.org/de/docs/Mozilla/JavaScript_code_modules/source-editor.jsm#getIndentationString%28%29) wurde hinzugefügt; diese gibt den String zurück, der für die Einrückung von Text im Editor verwendet werden soll.
- Der Source Editor unterstützt nun die Verwaltung einer Liste von Haltepunkten und die Anzeige einer Benutzeroberfläche zum Ein- und Ausschalten dieser; allerdings implementiert er selbst keine Haltepunkte. Dafür müssen Sie Debugger-Code schreiben.
- Unterstützung für das Hervorheben der aktuellen Zeile wurde mit der Konfigurationsoption `highlightCurrentLine` hinzugefügt.

### ARIA

- Die CSS-Eigenschaften {{cssxref("margin-left")}}, {{cssxref("margin-right")}}, {{cssxref("margin-top")}}, {{cssxref("margin-bottom")}} werden jetzt alle in ARIA-Objektattribute mit demselben Namen reflektiert. Weitere Informationen finden Sie unter [Gecko-Objektattribute](https://web.archive.org/web/20210120101715/https://developer.mozilla.org/de/docs/Mozilla/Tech/Accessibility/AT-APIs/Gecko/Attrs).

### Schnittstellen

- Die `nsIScreen`-Schnittstelle unterstützt jetzt die Steuerung der Drehung über das neue `rotation`-Attribut.
- Die `nsIPrefBranch2`-Schnittstelle wurde in `nsIPrefBranch` integriert ([Firefox Bug 718255](https://bugzil.la/718255)).
- Der neue Nachricht-Manager-Weckdienst, implementiert durch `nsIMessageWakeupService`, wurde implementiert. Siehe [Firefox Bug 591052](https://bugzil.la/591052).
- Die Aliase `MozOpacity`, `MozOutline`, `MozOutlineStyle`, `MozOutlineWidth`, `MozOutlineOffset` und `MozOutlineColor`, die alle in früheren Versionen von Gecko entfernt wurden, wurden aus `nsIDOMCSS2Properties` entfernt, was schon beim ursprünglichen Entfernen der Aliase hätte geschehen sollen.
- Das `nsINavHistoryQueryOptions`-Attribut `excludeItemIfParentHasAnnotation` wurde entfernt, zusammen mit der entsprechenden Abfrageoperation. Es existierte, um Livemarks zu unterstützen, die nicht mehr existieren.
