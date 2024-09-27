---
title: Firefox 13 für Entwickler
slug: Mozilla/Firefox/Releases/13
l10n:
  sourceCommit: 1822cdf5a86574429c4c49883a402663ef16a4ef
---

{{FirefoxSidebar}}

Firefox 13 wurde am 5. Juni 2012 veröffentlicht. Diese Seite fasst die Änderungen in Firefox 13 zusammen, die Entwickler betreffen.

## Änderungen für Webentwickler

### HTML

- Die [`cellspacing`](/de/docs/Web/HTML/Element/table#cellspacing)-Attribute von Tabellen werden jetzt außerhalb des Quirks-Modus genauso geparst wie im Quirks-Modus. Wenn also ein Wert als Prozentsatz angegeben wird, wird er stattdessen als Anzahl von Pixeln behandelt, da Prozentwerte gemäß der Spezifikation nicht erlaubt sind.
- Das {{htmlelement("wbr")}}-Element zeigt jetzt ein korrigiertes bidirektionales Verhalten. Es verhält sich nun wie das Unicode `U+200B ZERO-WIDTH SPACE` und beeinflusst dadurch nicht mehr die Bidirektionalität seines Elternelements.
- Die {{Cssxref(":invalid")}} Pseudoklasse kann jetzt auf das {{htmlelement("form")}}-Element angewendet werden.

### CSS

- Die `turn` {{cssxref("&lt;angle&gt;")}}-Einheit wird jetzt unterstützt (zur Verwendung mit CSS-Funktionen wie `rotate()`).
- Unterstützung für die 3-bis-4-Wert-Syntax von {{cssxref("background-position")}} wurde hinzugefügt. Sie können ein Hintergrundbild von jeder Ecke aus versetzen, indem Sie es wie "`right 10px bottom 20px`" schreiben. Siehe [Firefox-Bug 522607](https://bugzil.la/522607)
- Unterstützung für die 2-Wert-Syntax von CSS {{cssxref("background-repeat")}} wurde hinzugefügt.
- Unterstützung für {{cssxref("border-radius","-moz-border-radius*")}} und {{cssxref("box-shadow","-moz-box-shadow")}} wurde entfernt. Autoren sollten stattdessen die nicht-präfigierte Version `border-radius` oder `box-shadow` verwenden. Siehe [Firefox-Bug 693510](https://bugzil.la/693510)
- Die {{cssxref("column-fill")}} Eigenschaft wurde implementiert (mit Präfix).

### JavaScript

- Unterstützung für das ECMAScript 2015 [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Konstrukt wurde hinzugefügt.
- Experimentelle Unterstützung für ECMAScript 2015 [Map](/de/docs/Web/JavaScript/Reference/Global_Objects/Map) und [Set](/de/docs/Web/JavaScript/Reference/Global_Objects/Set)-Objekte wurde implementiert.

### DOM

- Das `deep`-Argument der [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode)-Methode ist jetzt optional, wie in DOM4 spezifiziert.
- Die Methoden [`setTimeout()`](/de/docs/Web/API/SetTimeout) und [`setInterval()`](/de/docs/Web/API/SetInterval) übergeben kein zusätzliches "lateness"-Argument mehr an die Rückrufroutine.
- Die [`Blob.mozSlice()`](/de/docs/Web/API/Blob)-Methode wurde ohne Präfix bereitgestellt.
- Unterstützung für den [`Blob`](/de/docs/Web/API/Blob)-Konstruktor wurde hinzugefügt.
- Unterstützung für `globalStorage` wurde entfernt.
- Das neue `DOMRequest`-Interface, das zum Berichten des Status und der Ergebnisse von Hintergrundprozessen verwendet wird, wurde hinzugefügt.
- Die [`HTMLOptionElement.index()`](/de/docs/Web/API/HTMLOptionElement)-Methode gibt jetzt `0` anstelle des falschen `-1` zurück, wenn das {{HTMLElement("option")}}-Element in einem {{HTMLElement("datalist")}}-HTML-Element enthalten ist.
- [`DOMException`](/de/docs/Web/API/DOMException) wie in DOM Level 4 definiert wurde implementiert.
- Das [`FileError`](/de/docs/Web/API/FileError)-Interface wurde zugunsten des [`DOMError`](/de/docs/Web/API/DOMError)-Interfaces entfernt, wie in der neuesten FileAPI-Spezifikation definiert.
- Das [`Range`](/de/docs/Web/API/Range)-Objekt löst keinen `RangeException` mehr aus. Stattdessen wird eine [`DOMException`](/de/docs/Web/API/DOMException) wie in DOM 4 definiert verwendet.
- [`element.getAttributeNS()`](/de/docs/Web/API/Element/getAttributeNS) gibt jetzt immer `null` zurück, anstelle eines leeren Strings für nicht vorhandene Attribute. Zuvor gab es Fälle, in denen ein leerer String zurückgegeben werden konnte. Dies entspricht der DOM4-Spezifikation, die jetzt besagt, dass für nicht existente Attribute `null` und nicht ein leerer String zurückgegeben werden sollte.
- Die [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement)-Schnittstelle hat jetzt die nicht-standardisierte `mozFetchAsStream()`-Methode, die einen Eingabestream mit den Bilddaten des Elements im angegebenen Format bereitstellt.

### UA-String

- Firefox für Android hat jetzt ein [Tablet- oder Mobile-Token im UA-String](/de/docs/Gecko_user_agent_string_reference#mobile_and_tablet_indicators), um die Formfaktor anzugeben und hat nicht mehr das Fennec-Token. Auch die Zahl nach "Gecko/" ist jetzt die Gecko-Versionsnummer, anstatt eines eingefrorenen Datums.
- Der UA-String zeigt nicht mehr die Gecko-Patch-Nummer oder den Release-Status in der Versionsnummer an; das heißt, die Versionsnummer hat jetzt immer die Form "X.Y", wobei X die Hauptversionsnummer und Y die Nebenversionsnummer ist. Beispielsweise "13.0" oder "14.1". Es wird nicht mehr so etwas wie "14.0.1b1" sein.

### SVG

- Das [`SVGStringList`](/de/docs/Web/API/SVGStringList)-DOM-Interface ist jetzt wie ein [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) indizierbar (siehe [Firefox-Bug 722071](https://bugzil.la/722071)).

### WebGL

- Unterstützung für die [`EXT_texture_filter_anisotropic`](/de/docs/Web/API/WebGL_API/Using_Extensions#ext_texture_filter_anisotropic)-Erweiterung wurde hinzugefügt. Anisotropes Texturfiltern verbessert die Qualität des Zugriffs auf mipmapped Texturen, wenn eine texturierte Primitive aus einem schrägen Winkel betrachtet wird.

### MathML

- Unterstützung für das `width`-Attribut auf {{MathMLElement("mtable")}}-Elementen wurde hinzugefügt ([Firefox-Bug 722880](https://bugzil.la/722880)).
- [MathJax-Schriftarten](https://docs.mathjax.org/en/latest/output/fonts.html) werden jetzt als Standard für mathematischen Text verwendet. Weitere Informationen finden Sie unter [Schriftarten für Mozillas MathML-Engine](/de/docs/Mozilla_MathML_Project/Fonts).

### Netzwerk

- Das SPDY-Protokoll ist jetzt standardmäßig aktiviert.

### Entwicklerwerkzeuge

#### 3D-Ansicht-Verbesserungen

- Sie können jetzt die "f"-Taste drücken, um sicherzustellen, dass der aktuell ausgewählte Knoten sichtbar ist.

#### Verbesserungen des Stils-Panels

- Das Klicken auf die Überschrift einer beliebigen Regel im [Stil-Panel](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html#css-pane) öffnet jetzt den [Stil-Editor](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html) beim entsprechenden CSS.
- Ein Rechtsklick auf eine Regel im [Stil-Panel](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html#css-pane) bietet nun die Möglichkeit, die Regel in die Zwischenablage zu kopieren.
- Die Eingabe eines unbekannten Eigenschaftenamens oder eines ungültigen Eigenschaftswertes zeigt ein Warnsymbol neben dieser Eigenschaft an.

#### Verbesserungen von Scratchpad

- Das _Scratchpad_ verfügt jetzt über eine Option im Hilfemenü, die Sie zur MDN-Dokumentation über Scratchpad führt.

## Änderungen für Mozilla- und Add-on-Entwickler

### Kompatibilitäts-Hinweis

Ab Firefox 13 erfordert Firefox für Windows mindestens Windows XP Service Pack 2; es wird nicht mehr auf Windows 2000 oder früheren Versionen von Windows XP laufen.

### JavaScript-Code-Module

#### source-editor.jsm

- Unterstützung für ein Änderungskennzeichen wurde zur Source Editor API hinzugefügt.
- Der Source Editor unterstützt nicht mehr das Zurückfallen auf ein {{HTMLElement("textarea")}}, anstelle von Orion.
- Der Editor bietet jetzt Ereignisse für Fokus und Unschärfe.
- Die [`getIndentationString()`](/de/docs/JavaScript_code_modules/source-editor.jsm#getIndentationString%28%29)-Methode wurde hinzugefügt; diese gibt den String zurück, der zum Einrücken von Text im Editor verwendet werden soll.
- Der Source Editor unterstützt jetzt das Verwalten einer Liste von Haltepunkten und das Anzeigen einer Benutzeroberfläche zum Umschalten dieser; er implementiert jedoch nicht tatsächlich Haltepunkte. Es liegt an Ihnen, Debugger-Code dafür zu schreiben.
- Unterstützung für das Hervorheben der aktuellen Zeile wurde hinzugefügt, mittels der Konfigurationsoption `highlightCurrentLine`.

### ARIA

- Die CSS-Eigenschaften {{cssxref("margin-left")}}, {{cssxref("margin-right")}}, {{cssxref("margin-top")}}, {{cssxref("margin-bottom")}} werden jetzt alle in ARIA-Objektattribute mit demselben Namen widergespiegelt. Weitere Informationen finden Sie unter [Gecko-Objektattribute](/de/docs/Accessibility/AT-APIs/Gecko/Attrs).

### Schnittstellen

- Das `nsIScreen`-Interface unterstützt jetzt die Steuerung der Rotation über das neue `rotation`-Attribut.
- Das `nsIPrefBranch2`-Interface wurde mit `nsIPrefBranch` zusammengeführt ([Firefox-Bug 718255](https://bugzil.la/718255)).
- Der neue Nachrichtmanager-Weckdienst, implementiert von `nsIMessageWakeupService`, wurde implementiert. Siehe [Firefox-Bug 591052](https://bugzil.la/591052).
- Die Aliase `MozOpacity`, `MozOutline`, `MozOutlineStyle`, `MozOutlineWidth`, `MozOutlineOffset` und `MozOutlineColor`, die alle in früheren Versionen von Gecko entfernt wurden, wurden aus `nsIDOMCSS2Properties` entfernt, was hätte gemacht werden sollen, als die Aliase ursprünglich entfernt wurden.
- Das `nsINavHistoryQueryOptions`-Attribut `excludeItemIfParentHasAnnotation` wurde entfernt, zusammen mit der entsprechenden Abfrageoperation. Es existierte zur Unterstützung von Livemarken, die nicht mehr existieren.

## Siehe auch

{{Firefox_for_developers}}
