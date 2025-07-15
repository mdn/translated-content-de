---
title: Firefox 13 für Entwickler
short-title: Firefox 13
slug: Mozilla/Firefox/Releases/13
l10n:
  sourceCommit: 64df508685abcbc047f6c1a973505921fad1484e
---

Firefox 13 wurde am 5. Juni 2012 veröffentlicht. Diese Seite fasst die Änderungen in Firefox 13 zusammen, die Entwickler betreffen.

## Änderungen für Webentwickler

### HTML

- Die [`cellspacing`](/de/docs/Web/HTML/Reference/Elements/table#cellspacing)-Attribute von Tabellen werden jetzt außerhalb des Quirks-Modus genauso analysiert wie im Quirks-Modus. Das heißt, wenn ein Wert als Prozentsatz angegeben wird, wird er stattdessen als Pixelzahl behandelt, da Prozentsatzwerte laut Spezifikation tatsächlich nicht zulässig sind.
- Das {{htmlelement("wbr")}}-Element hat sein bidirektionales Verhalten korrigiert. Es verhält sich nun wie das Unicode `U+200B ZERO-WIDTH SPACE` und beeinflusst daher nicht mehr die Bidirektionalität seines Elternelements.
- Die {{Cssxref(":invalid")}}-Pseudoklasse kann jetzt auf das {{htmlelement("form")}}-Element angewendet werden.

### CSS

- Die `turn` {{cssxref("&lt;angle&gt;")}}-Einheit wird jetzt unterstützt (zur Verwendung mit CSS-Funktionen wie `rotate()`).
- Unterstützung für die 3-zu-4-Wert-Syntax der {{cssxref("background-position")}} wurde hinzugefügt. Sie können ein Hintergrundbild von jeder Ecke aus versetzen, indem Sie beispielsweise `right 10px bottom 20px` schreiben. Siehe [Firefox-Bug 522607](https://bugzil.la/522607)
- Unterstützung für die 2-Wert-Syntax des CSS {{cssxref("background-repeat")}} wurde hinzugefügt.
- Unterstützung für {{cssxref("border-radius","-moz-border-radius*")}} und {{cssxref("box-shadow","-moz-box-shadow")}} wurde entfernt. Autoren sollten stattdessen den unveränderten `border-radius` oder `box-shadow` verwenden. Siehe [Firefox-Bug 693510](https://bugzil.la/693510)
- Die {{cssxref("column-fill")}}-Eigenschaft wurde implementiert (mit Präfix).

### JavaScript

- Unterstützung für die ECMAScript 2015 [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Konstruktion wurde hinzugefügt.
- Experimentelle Unterstützung für ECMAScript 2015 [Map](/de/docs/Web/JavaScript/Reference/Global_Objects/Map) und [Set](/de/docs/Web/JavaScript/Reference/Global_Objects/Set)-Objekte wurde implementiert.

### DOM

- Das `deep`-Argument der Methode [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode) ist jetzt optional, wie in DOM4 angegeben.
- Die Methoden [`setTimeout()`](/de/docs/Web/API/Window/setTimeout), [`setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout), [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval) und [`WorkerGlobalScope.setInterval()`](/de/docs/Web/API/WorkerGlobalScope/setInterval) übergeben kein zusätzliches "lateness"-Argument mehr an die Rückrufroutine.
- Die Methode [`Blob.mozSlice()`](/de/docs/Web/API/Blob) wurde ohne Präfix implementiert.
- Unterstützung für den [`Blob`](/de/docs/Web/API/Blob)-Konstruktor wurde hinzugefügt.
- Unterstützung für `globalStorage` wurde entfernt.
- Das neue `DOMRequest`-Interface, das zum Melden des Status und Ergebnisses von Hintergrundoperationen verwendet wird, wurde hinzugefügt.
- Die Methode [`HTMLOptionElement.index()`](/de/docs/Web/API/HTMLOptionElement) gibt jetzt `0` statt des falschen `-1` zurück, wenn die {{HTMLElement("option")}}-Option innerhalb eines {{HTMLElement("datalist")}}-HTML-Elements ist.
- [`DOMException`](/de/docs/Web/API/DOMException) wie in DOM Level 4 definiert wurde implementiert.
- Das `FileError`-Interface wurde zugunsten des [`DOMError`](/de/docs/Web/API/DOMError)-Interfaces, wie in der neuesten FileAPI-Spezifikation definiert, entfernt.
- Das [`Range`](/de/docs/Web/API/Range)-Objekt wirft keine `RangeException` mehr. Stattdessen wird eine [`DOMException`](/de/docs/Web/API/DOMException) wie in DOM 4 definiert verwendet.
- [`element.getAttributeNS()`](/de/docs/Web/API/Element/getAttributeNS) gibt jetzt immer `null` statt eines leeren Strings für nicht vorhandene Attribute zurück. Früher konnte es Fälle geben, in denen ein leerer String zurückgegeben wurde. Dies entspricht der DOM4-Spezifikation, die jetzt besagt, dass für nicht vorhandene Attribute null zurückgegeben werden sollte, anstatt eines leeren Strings.
- Das [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement)-Interface verfügt nun über eine nicht standardmäßige `mozFetchAsStream()`-Methode, die einen Eingabestream bereitstellt, der die Bilddaten des Elements im angegebenen Format enthält.

### UA-String

- Firefox für Android hat jetzt ein [Tablet- oder Mobile-Token im UA-String](/de/docs/Web/HTTP/Reference/Headers/User-Agent/Firefox#mobile_and_tablet_indicators), um die Formfaktor anzuzeigen, und hat nicht mehr das Fennec-Token. Außerdem gibt die Zahl nach "Gecko/" jetzt die Gecko-Versionsnummer statt eines eingefrorenen Datums an.
- Der UA-String gibt nicht mehr die Gecko-Patchnummer oder den Veröffentlichungsstatus in der Versionsnummer an; das heißt, die Versionsnummer hat jetzt immer die Form "X.Y", wobei X die Hauptversionsnummer und Y die Nebenversion ist. Zum Beispiel "13.0" oder "14.1". Es wird nicht mehr etwas wie "14.0.1b1" sein.

### SVG

- Die [`SVGStringList`](/de/docs/Web/API/SVGStringList)-DOM-Schnittstelle ist jetzt wie [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) indexierbar (siehe [Firefox-Bug 722071](https://bugzil.la/722071)).

### WebGL

- Unterstützung für die [`EXT_texture_filter_anisotropic`](/de/docs/Web/API/EXT_texture_filter_anisotropic)-Erweiterung wurde hinzugefügt. Anisotropes Texturfiltering verbessert die Qualität des Abgriffs auf mipmapped Texturen, wenn ein texturiertes Primitive in einem schrägen Winkel betrachtet wird.

### MathML

- Unterstützung für das `width`-Attribut auf {{MathMLElement("mtable")}}-Elementen wurde hinzugefügt ([Firefox-Bug 722880](https://bugzil.la/722880)).
- [MathJax-Schriftarten](https://docs.mathjax.org/en/latest/output/fonts.html) werden jetzt standardmäßig als Schriftarten für mathematischen Text verwendet. Siehe [Schriftarten für Mozillas MathML-Engine](/de/docs/Mozilla_MathML_Project/Fonts) für mehr Informationen.

### Netzwerk

- Das SPDY-Protokoll ist jetzt standardmäßig aktiviert.

### Entwicklertools

#### Verbesserungen der 3D-Ansicht

- Sie können nun die Taste "f" drücken, um sicherzustellen, dass der aktuell ausgewählte Knoten sichtbar ist.

#### Verbesserungen des Stil-Panels

- Durch Klicken auf die Überschrift einer beliebigen Regel im [Stil-Panel](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html#css-pane) wird jetzt der [Style Editor](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html) an der entsprechenden CSS geöffnet.
- Mit einem Rechtsklick auf eine Regel im [Stil-Panel](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html#css-pane) wird jetzt eine Option zum Kopieren der Regel in die Zwischenablage angeboten.
- Wenn Sie einen unbekannten Eigenschaftsnamen oder einen illegalen Eigenschaftswert eingeben, wird neben dieser Eigenschaft ein Warnsymbol angezeigt.

#### Verbesserungen des Scratchpad

- Das _Scratchpad_ hat jetzt eine Option im Hilfemenü, um Sie zur MDN-Dokumentation über Scratchpad zu führen.

## Änderungen für Mozilla- und Add-on-Entwickler

### Kompatibilitäts-Hinweis

Ab Firefox 13 erfordert Firefox für Windows mindestens Windows XP Service Pack 2; es läuft nicht mehr auf Windows 2000 oder früheren Versionen von Windows XP.

### JavaScript-Code-Module

#### source-editor.jsm

- Unterstützung für ein "dirty"-Flag wurde zur Source Editor API hinzugefügt.
- Der Source Editor unterstützt nicht mehr das Fallback auf ein {{HTMLElement("textarea")}} statt der Verwendung von Orion.
- Der Editor hat nun Fokus- und Blur-Ereignisse.
- Die Methode [`getIndentationString()`](/de/docs/JavaScript_code_modules/source-editor.jsm#getIndentationString%28%29) wurde hinzugefügt; diese gibt den String zurück, der zum Einrücken von Text im Editor verwendet werden soll.
- Der Source Editor unterstützt jetzt das Verwalten einer Liste von Haltepunkten und das Anzeigen einer Benutzeroberfläche zum Aktivieren und Deaktivieren; es implementiert jedoch keine Haltepunkte. Dafür müssen Sie Debugger-Code schreiben.
- Unterstützung für die Hervorhebung der aktuellen Zeile wurde mit der Konfigurationsoption `highlightCurrentLine` hinzugefügt.

### ARIA

- Die CSS-Eigenschaften {{cssxref("margin-left")}}, {{cssxref("margin-right")}}, {{cssxref("margin-top")}}, {{cssxref("margin-bottom")}} werden jetzt alle in ARIA-Objektattribute mit demselben Namen reflektiert. Siehe [Gecko-Objektattribute](/de/docs/Accessibility/AT-APIs/Gecko/Attrs) für mehr Informationen.

### Schnittstellen

- Die `nsIScreen`-Schnittstelle unterstützt jetzt die Steuerung der Rotation über das neue `rotation`-Attribut.
- Die `nsIPrefBranch2`-Schnittstelle wurde in `nsIPrefBranch` zusammengeführt ([Firefox-Bug 718255](https://bugzil.la/718255)).
- Der neue Nachrichtenmanager-Weckdienst, implementiert durch `nsIMessageWakeupService`, wurde implementiert. Siehe [Firefox-Bug 591052](https://bugzil.la/591052).
- Die Aliase `MozOpacity`, `MozOutline`, `MozOutlineStyle`, `MozOutlineWidth`, `MozOutlineOffset` und `MozOutlineColor`, die alle in früheren Versionen von Gecko entfernt wurden, wurden aus `nsIDOMCSS2Properties` entfernt und sollten beim Entfernen der Aliase ursprünglich entfernt werden.
- Das `nsINavHistoryQueryOptions`-Attribut `excludeItemIfParentHasAnnotation` wurde entfernt, zusammen mit der entsprechenden Abfrageoperation. Es existierte, um Livemarks zu unterstützen, die nicht mehr existieren.
