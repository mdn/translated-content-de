---
title: Versionshinweise für Entwickler zu Firefox 13
short-title: Firefox 13
slug: Mozilla/Firefox/Releases/13
l10n:
  sourceCommit: 83f4e64da466670c3700110da364546253eae127
---

Firefox 13 wurde am 5. Juni 2012 veröffentlicht. Diese Seite fasst die Änderungen in Firefox 13 zusammen, die Entwickler betreffen.

## Änderungen für Webentwickler

### HTML

- Die [`cellspacing`](/de/docs/Web/HTML/Reference/Elements/table#cellspacing)-Attribute von Tabellen werden jetzt außerhalb des "Quirks"-Modus genauso analysiert wie im "Quirks"-Modus. Das bedeutet, wenn ein Wert als Prozentsatz angegeben wird, wird er stattdessen als Pixelanzahl behandelt, da Prozentsatzwerte gemäß der Spezifikation tatsächlich nicht zulässig sind.
- Das {{htmlelement("wbr")}}-Element hat ein behobenes bidirektionales Verhalten. Es verhält sich nun wie das Unicode `U+200B ZERO-WIDTH SPACE` und beeinflusst daher nicht mehr die Bi-Direktionalität seines Elternelements.
- Die {{Cssxref(":invalid")}}-Pseudoklasse kann nun auf das {{htmlelement("form")}}-Element angewendet werden.

### CSS

- Die `turn`-Einheit {{cssxref("&lt;angle&gt;")}} wird jetzt unterstützt (zur Verwendung mit CSS-Funktionen wie `rotate()`).
- Unterstützung für die 3-zu-4-Wert-Syntax der {{cssxref("background-position")}} wurde hinzugefügt. Sie können ein Hintergrundbild von jeder Ecke aus versetzen, indem Sie etwas wie `right 10px bottom 20px` schreiben. Siehe [Firefox Bug 522607](https://bugzil.la/522607).
- Unterstützung für die 2-Wert-Syntax der CSS {{cssxref("background-repeat")}} wurde hinzugefügt.
- Unterstützung für {{cssxref("border-radius","-moz-border-radius*")}} und {{cssxref("box-shadow","-moz-box-shadow")}} wurde entfernt. Autoren sollten stattdessen die nicht-präfixierten `border-radius` oder `box-shadow` verwenden. Siehe [Firefox Bug 693510](https://bugzil.la/693510).
- Die {{cssxref("column-fill")}}-Eigenschaft wurde implementiert (mit Präfix).

### JavaScript

- Unterstützung für die ECMAScript 2015 [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Konstruktion wurde hinzugefügt.
- Experimentelle Unterstützung für die ECMAScript 2015 [Map](/de/docs/Web/JavaScript/Reference/Global_Objects/Map) und [Set](/de/docs/Web/JavaScript/Reference/Global_Objects/Set)-Objekte wurde implementiert.

### DOM

- Das `deep`-Argument der Methode [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode) ist jetzt optional, wie es in DOM4 spezifiziert ist.
- Die Methoden [`setTimeout()`](/de/docs/Web/API/Window/setTimeout), [`setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout), [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval) und [`WorkerGlobalScope.setInterval()`](/de/docs/Web/API/WorkerGlobalScope/setInterval) übergeben nicht mehr ein zusätzliches "lateness"-Argument an die Callback-Routine.
- Die Methode [`Blob.mozSlice()`](/de/docs/Web/API/Blob) wurde ohne Präfix eingeführt.
- Unterstützung für den [`Blob`](/de/docs/Web/API/Blob)-Konstruktor wurde hinzugefügt.
- Unterstützung für `globalStorage` wurde entfernt.
- Die neue `DOMRequest`-Schnittstelle wurde hinzugefügt, um den Status und das Ergebnis von Hintergrundprozessen zu melden.
- Die Methode [`HTMLOptionElement.index()`](/de/docs/Web/API/HTMLOptionElement) gibt jetzt `0` zurück, anstatt des falschen `-1`, wenn die {{HTMLElement("option")}} in einem {{HTMLElement("datalist")}}-HTML-Element enthalten ist.
- [`DOMException`](/de/docs/Web/API/DOMException) wie in DOM Level 4 definiert, wurde implementiert.
- Die `FileError`-Schnittstelle wurde zugunsten der [`DOMError`](/de/docs/Web/API/DOMError)-Schnittstelle, wie in der neuesten FileAPI-Spezifikation definiert, entfernt.
- Das [`Range`](/de/docs/Web/API/Range)-Objekt wirft keinen `RangeException` mehr. Stattdessen wird eine [`DOMException`](/de/docs/Web/API/DOMException) wie in DOM 4 definiert verwendet.
- [`element.getAttributeNS()`](/de/docs/Web/API/Element/getAttributeNS) gibt jetzt immer `null` anstelle des leeren Strings für nicht existierende Attribute zurück. Zuvor gab es Fälle, in denen der leere String zurückgegeben werden konnte. Dies steht im Einklang mit der DOM4-Spezifikation, die sagt, dass `null` zurückgegeben werden sollte für nicht existierende Attribute, anstatt eines leeren Strings.
- Die Schnittstelle [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) hat jetzt eine nicht standardisierte `mozFetchAsStream()`-Methode, die einen Eingabestream bereitstellt, der die Bilddaten des Elements im angegebenen Format enthält.

### User-Agent-String

- Firefox für Android hat jetzt ein [Tablet- oder Mobile-Token im User-Agent-String](/de/docs/Web/HTTP/Reference/Headers/User-Agent/Firefox#mobile_and_tablet_indicators), um den Formfaktor anzuzeigen, und hat das Fennec-Token nicht mehr. Außerdem ist die Zahl nach "Gecko/" jetzt die Gecko-Version und nicht mehr ein festes Datum.
- Der User-Agent-String zeigt nicht mehr die Gecko-Patch-Nummer oder den Release-Status in der Versionsnummer an; das heißt, die Versionsnummer hat jetzt immer die Form "X.Y", wobei X die Hauptversionsnummer und Y die Unterversionsnummer ist. Zum Beispiel "13.0" oder "14.1". Es wird nicht mehr etwas wie "14.0.1b1" sein.

### SVG

- Die [`SVGStringList`](/de/docs/Web/API/SVGStringList)-DOM-Schnittstelle ist jetzt wie [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) indizierbar (siehe [Firefox Bug 722071](https://bugzil.la/722071)).

### WebGL

- Unterstützung für die [`EXT_texture_filter_anisotropic`](/de/docs/Web/API/EXT_texture_filter_anisotropic)-Erweiterung wurde hinzugefügt. Anisotrope Texturfilterung verbessert die Qualität des Mipmapped-Texturzugriffs, wenn ein texturiertes Objekt in einem schrägen Winkel betrachtet wird.

### MathML

- Unterstützung für das `width`-Attribut auf {{MathMLElement("mtable")}}-Elementen wurde hinzugefügt ([Firefox Bug 722880](https://bugzil.la/722880)).
- [MathJax-Schriften](https://docs.mathjax.org/en/latest/output/fonts.html) werden nun standardmäßig als Schriften für mathematischen Text verwendet. Weitere Informationen finden Sie unter [Fonts for Mozilla's MathML engine](/de/docs/Web/MathML/Guides/Fonts).

### Netzwerk

- Das SPDY-Protokoll ist jetzt standardmäßig aktiviert.

### Entwicklertools

#### Verbesserungen der 3D-Ansicht

- Sie können jetzt die Taste "f" drücken, um sicherzustellen, dass der derzeit ausgewählte Knoten sichtbar ist.

#### Verbesserungen des Stil-Panels

- Durch Klicken auf die Überschrift einer Regel im [Stil-Panel](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html#css-pane) wird nun der [Stil-Editor](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html) bei der entsprechenden CSS geöffnet.
- Ein Rechtsklick auf eine Regel im [Stil-Panel](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html#css-pane) bietet jetzt die Möglichkeit, die Regel in die Zwischenablage zu kopieren.
- Das Eingeben eines unbekannten Eigenschaftehnhamens oder eines unerlaubten Eigenschaftswerts zeigt ein Warnsymbol neben dieser Eigenschaft an.

#### Verbesserungen des Scratchpad

- Das _Scratchpad_ hat jetzt eine Option im Hilfe-Menü, um zur MDN-Dokumentation über das Scratchpad zu gelangen.

## Änderungen für Mozilla- und Add-on-Entwickler

### Kompatibilitäts-Hinweis

Ab Firefox 13 erfordert Firefox für Windows mindestens Windows XP Service Pack 2; es wird nicht mehr auf Windows 2000 oder früheren Versionen von Windows XP ausgeführt.

### JavaScript-Code-Module

#### source-editor.jsm

- Unterstützung für eine "dirty"-Flag wurde zur Source Editor-API hinzugefügt.
- Der Source Editor unterstützt kein Zurückgreifen auf ein {{HTMLElement("textarea")}} anstelle der Verwendung von Orion mehr.
- Der Editor bietet jetzt Fokus- und Unschärfeereignisse an.
- Die Methode [`getIndentationString()`](https://web.archive.org/web/20210620193439/https://developer.mozilla.org/de/docs/Mozilla/JavaScript_code_modules/source-editor.jsm#getIndentationString%28%29) wurde hinzugefügt; diese gibt den String zurück, der zum Einrücken von Text im Editor verwendet werden soll.
- Der Source Editor unterstützt jetzt das Verwalten einer Liste von Haltepunkten und das Anzeigen der Benutzeroberfläche zum Ein- und Ausschalten dieser Punkte; er implementiert jedoch keine Haltepunkte tatsächlich. Es liegt an Ihnen, Debugger-Code dafür zu schreiben.
- Unterstützung wurde hinzugefügt für das Hervorheben der aktuellen Zeile unter Verwendung der Konfigurationsoption `highlightCurrentLine`.

### ARIA

- Die CSS-Eigenschaften {{cssxref("margin-left")}}, {{cssxref("margin-right")}}, {{cssxref("margin-top")}}, {{cssxref("margin-bottom")}} werden jetzt alle in die ARIA-Objektattribute mit dem gleichen Namen reflektiert. Siehe [Gecko-Objektattribute](https://web.archive.org/web/20210120101715/https://developer.mozilla.org/de/docs/Mozilla/Tech/Accessibility/AT-APIs/Gecko/Attrs) für weitere Informationen.

### Schnittstellen

- Die `nsIScreen`-Schnittstelle unterstützt jetzt die Steuerung der Rotation über das neue `rotation`-Attribut.
- Die `nsIPrefBranch2`-Schnittstelle wurde in `nsIPrefBranch` zusammengeführt ([Firefox Bug 718255](https://bugzil.la/718255)).
- Der neue Nachrichtenmanager-Wake-up-Service, implementiert durch `nsIMessageWakeupService`, wurde implementiert. Siehe [Firefox Bug 591052](https://bugzil.la/591052).
- Die Aliase `MozOpacity`, `MozOutline`, `MozOutlineStyle`, `MozOutlineWidth`, `MozOutlineOffset` und `MozOutlineColor`, die alle in früheren Versionen von Gecko entfernt wurden, wurden aus den `nsIDOMCSS2Properties` entfernt, was hätte geschehen sollen, als die Aliase ursprünglich entfernt wurden.
- Das `nsINavHistoryQueryOptions`-Attribut `excludeItemIfParentHasAnnotation` wurde entfernt, zusammen mit der entsprechenden Abfrageoperation. Es existierte zur Unterstützung von Livemarks, die nicht mehr existieren.
