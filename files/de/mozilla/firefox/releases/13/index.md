---
title: Firefox 13 für Entwickler
slug: Mozilla/Firefox/Releases/13
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Firefox 13 wurde am 5. Juni 2012 veröffentlicht. Diese Seite fasst die Änderungen in Firefox 13 zusammen, die Entwickler betreffen.

## Änderungen für Webentwickler

### HTML

- Die `cellspacing`-Attribute von [Tabellen](/de/docs/Web/HTML/Reference/Elements/table#cellspacing) werden jetzt außerhalb des Quirks-Modus genauso geparst wie im Quirks-Modus. Das bedeutet, wenn ein Wert als Prozentsatz angegeben wird, wird er stattdessen als Anzahl an Pixeln behandelt, da Prozentwerte gemäß der Spezifikation tatsächlich nicht erlaubt sind.
- Das {{htmlelement("wbr")}}-Element hat sein bidirektionales Verhalten korrigiert. Es verhält sich jetzt wie das Unicode `U+200B ZERO-WIDTH SPACE` und beeinflusst daher nicht mehr die Bidirektionalität seines Elternelements.
- Die {{Cssxref(":invalid")}}-Pseudo-Klasse kann jetzt auf das {{htmlelement("form")}}-Element angewendet werden.

### CSS

- Die `turn`-{{cssxref("&lt;angle&gt;")}}-Einheit wird jetzt unterstützt (für die Verwendung mit CSS-Funktionen wie `rotate()`).
- Unterstützung für die 3-zu-4-Wert-Syntax von {{cssxref("background-position")}} wurde hinzugefügt. Sie können ein Hintergrundbild von jeder Ecke aus versetzen, indem Sie es so schreiben: `right 10px bottom 20px`. Siehe [Firefox-Bug 522607](https://bugzil.la/522607).
- Unterstützung für die 2-Wert-Syntax von CSS-{{cssxref("background-repeat")}} wurde hinzugefügt.
- Unterstützung für {{cssxref("border-radius","-moz-border-radius*")}} und {{cssxref("box-shadow","-moz-box-shadow")}} wurde entfernt. Autoren sollten stattdessen die unpräfixte `border-radius` oder `box-shadow` verwenden. Siehe [Firefox-Bug 693510](https://bugzil.la/693510).
- Die {{cssxref("column-fill")}}-Eigenschaft wurde implementiert (mit Präfix).

### JavaScript

- Unterstützung für die ECMAScript 2015 [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Konstruktion wurde hinzugefügt.
- Experimentelle Unterstützung für die ECMAScript 2015 [Map](/de/docs/Web/JavaScript/Reference/Global_Objects/Map) und [Set](/de/docs/Web/JavaScript/Reference/Global_Objects/Set)-Objekte wurde implementiert.

### DOM

- Das `deep`-Argument der Methode [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode) ist jetzt optional, wie in DOM4 angegeben.
- Die Methoden [`setTimeout()`](/de/docs/Web/API/Window/setTimeout), [`setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout), [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval) und [`WorkerGlobalScope.setInterval()`](/de/docs/Web/API/WorkerGlobalScope/setInterval) übergeben keine zusätzliche "Latenz"-Argument mehr an die Rückrufroutine.
- Die Methode [`Blob.mozSlice()`](/de/docs/Web/API/Blob) wurde unpräfixiert.
- Unterstützung für den [`Blob`](/de/docs/Web/API/Blob)-Konstruktor wurde hinzugefügt.
- Unterstützung für `globalStorage` wurde entfernt.
- Das neue `DOMRequest`-Interface, das zum Melden des Status und Ergebnisses von Hintergrundoperationen verwendet wird, wurde hinzugefügt.
- Die Methode [`HTMLOptionElement.index()`](/de/docs/Web/API/HTMLOptionElement) gibt jetzt `0` zurück, anstatt des falschen `-1`, wenn die {{HTMLElement("option")}} innerhalb eines {{HTMLElement("datalist")}}-HTML-Elements ist.
- [`DOMException`](/de/docs/Web/API/DOMException) wie in DOM Level 4 definiert, wurde implementiert.
- Das [`FileError`](/de/docs/Web/API/FileError)-Interface wurde zugunsten des [`DOMError`](/de/docs/Web/API/DOMError) entfernt, wie in der neuesten FileAPI-Spezifikation definiert.
- Das [`Range`](/de/docs/Web/API/Range)-Objekt wirft keinen `RangeException` mehr. Stattdessen wird ein [`DOMException`](/de/docs/Web/API/DOMException) wie in DOM 4 definiert, verwendet.
- [`element.getAttributeNS()`](/de/docs/Web/API/Element/getAttributeNS) gibt jetzt immer `null` zurück, anstatt eines leeren Strings für nicht existierende Attribute. Zuvor gab es Situationen, in denen ein leerer String zurückgegeben werden konnte. Dies steht im Einklang mit der DOM4-Spezifikation, die jetzt sagt, dass dies null für nicht existierende Attribute zurückgeben sollte, anstatt eines leeren Strings.
- Das [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement)-Interface hat jetzt die nicht-standardmäßige `mozFetchAsStream()`-Methode, die einen Eingabestream mit den Bilddaten des Elements im angegebenen Format bereitstellt.

### User-Agent-String

- Firefox für Android hat jetzt ein [Tablet- oder Mobile-Token im UA-String](/de/docs/Gecko_user_agent_string_reference#mobile_and_tablet_indicators), um die Bauform anzuzeigen und hat nicht mehr das Fennec-Token. Außerdem ist die Zahl nach "Gecko/" jetzt die Gecko-Versionsnummer anstelle eines eingefrorenen Datums.
- Der UA-String zeigt die Gecko-Patch-Nummer oder den Release-Status in der Versionsnummer nicht mehr an; das heißt, die Versionsnummer hat jetzt immer die Form "X.Y", wobei X die Hauptversionsnummer und Y die Unterversionsnummer ist. Beispielsweise "13.0" oder "14.1". Es wird nicht mehr so etwas wie "14.0.1b1" sein.

### SVG

- Die [`SVGStringList`](/de/docs/Web/API/SVGStringList)-DOM-Schnittstelle ist jetzt wie ein [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) indizierbar (siehe [Firefox-Bug 722071](https://bugzil.la/722071)).

### WebGL

- Unterstützung für die [`EXT_texture_filter_anisotropic`](/de/docs/Web/API/WebGL_API/Using_Extensions#ext_texture_filter_anisotropic)-Erweiterung wurde hinzugefügt. Anisotrope Texturfilterung verbessert die Qualität des Mipmapped-Texturzugriffs, wenn eine texturierte Primitive in einem schrägen Winkel betrachtet wird.

### MathML

- Unterstützung für das `width`-Attribut auf {{MathMLElement("mtable")}}-Elementen wurde hinzugefügt ([Firefox-Bug 722880](https://bugzil.la/722880)).
- [MathJax-Schriften](https://docs.mathjax.org/en/latest/output/fonts.html) werden jetzt als Standardschriften für mathematischen Text verwendet. Siehe [Schriften für Mozillas MathML-Engine](/de/docs/Mozilla_MathML_Project/Fonts) für weitere Informationen.

### Netzwerk

- Das SPDY-Protokoll ist jetzt standardmäßig aktiviert.

### Entwickler-Tools

#### Verbesserungen der 3D-Ansicht

- Sie können jetzt die "f"-Taste drücken, um sicherzustellen, dass der aktuell ausgewählte Knoten sichtbar ist.

#### Verbesserungen im Stil-Panel

- Ein Klick auf die Überschrift einer Regel im [Stil-Panel](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html#css-pane) öffnet jetzt den [Stil-Editor](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html) beim entsprechenden CSS.
- Ein Rechtsklick auf eine Regel im [Stil-Panel](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html#css-pane) bietet nun die Möglichkeit, die Regel in die Zwischenablage zu kopieren.
- Wenn Sie einen unbekannten Eigenschaftsnamen oder einen illegalen Eigenschaftswert eingeben, wird neben dieser Eigenschaft ein Warnsymbol angezeigt.

#### Verbesserungen in Scratchpad

- Das _Scratchpad_ hat jetzt eine Option im Hilfe-Menü, das Sie zur MDN-Dokumentation über Scratchpad führt.

## Änderungen für Mozilla- und Add-on-Entwickler

### Kompatibilitätsbemerkung

Ab Firefox 13 erfordert Firefox für Windows mindestens Windows XP Service Pack 2; es wird nicht mehr auf Windows 2000 oder früheren Versionen von Windows XP laufen.

### JavaScript-Code-Module

#### source-editor.jsm

- Unterstützung für eine unsaubere Markierung wurde zur Source-Editor-API hinzugefügt.
- Der Source-Editor unterstützt nicht mehr das Rückfallen auf ein {{HTMLElement("textarea")}} anstelle der Verwendung von Orion.
- Der Editor stellt jetzt Fokus- und Unschärfe-Ereignisse bereit.
- Die Methode [`getIndentationString()`](/de/docs/JavaScript_code_modules/source-editor.jsm#getIndentationString%28%29) wurde hinzugefügt; sie gibt den String zurück, der zum Einrücken von Text im Editor verwendet werden soll.
- Der Source-Editor unterstützt jetzt die Verwaltung einer Liste von Haltepunkten und das Anzeigen einer Benutzeroberfläche zum Umschalten derselben; er implementiert jedoch keine Haltepunkte. Es liegt an Ihnen, Debugger-Code dafür zu schreiben.
- Unterstützung für das Hervorheben der aktuellen Zeile wurde hinzugefügt, unter Verwendung der `highlightCurrentLine`-Konfigurationsoption.

### ARIA

- Die CSS-Eigenschaften {{cssxref("margin-left")}}, {{cssxref("margin-right")}}, {{cssxref("margin-top")}}, {{cssxref("margin-bottom")}} werden jetzt alle in ARIA-Objektattribute mit demselben Namen widerspiegelt. Siehe [Gecko-Objektattribute](/de/docs/Accessibility/AT-APIs/Gecko/Attrs) für weitere Informationen.

### Schnittstellen

- Die `nsIScreen`-Schnittstelle unterstützt jetzt die Steuerung der Rotation über das neue `rotation`-Attribut.
- Die `nsIPrefBranch2`-Schnittstelle wurde mit `nsIPrefBranch` zusammengeführt ([Firefox-Bug 718255](https://bugzil.la/718255)).
- Der neue Nachricht-Manager-Aufweckdienst, implementiert durch `nsIMessageWakeupService`, wurde implementiert. Siehe [Firefox-Bug 591052](https://bugzil.la/591052).
- Die Aliase `MozOpacity`, `MozOutline`, `MozOutlineStyle`, `MozOutlineWidth`, `MozOutlineOffset` und `MozOutlineColor`, die alle in früheren Versionen von Gecko entfernt wurden, wurden von `nsIDOMCSS2Properties` entfernt, was hätte geschehen sollen, als die Aliase ursprünglich entfernt wurden.
- Das `excludeItemIfParentHasAnnotation`-Attribut von `nsINavHistoryQueryOptions` wurde zusammen mit der entsprechenden Abfrageoperation entfernt. Es existierte zur Unterstützung von Livemarks, die nicht mehr vorhanden sind.

## Siehe auch

{{Firefox_for_developers}}
