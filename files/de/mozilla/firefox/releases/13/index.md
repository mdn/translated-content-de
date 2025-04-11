---
title: Firefox 13 für Entwickler
slug: Mozilla/Firefox/Releases/13
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{FirefoxSidebar}}

Firefox 13 wurde am 5. Juni 2012 veröffentlicht. Diese Seite fasst die Änderungen in Firefox 13 zusammen, die Entwickler betreffen.

## Änderungen für Webentwickler

### HTML

- Die [`cellspacing`](/de/docs/Web/HTML/Reference/Elements/table#cellspacing)-Attribute von Tabellen werden jetzt außerhalb des Quirks-Modus genauso geparst wie im Quirks-Modus. Das bedeutet, dass wenn ein Wert als Prozentsatz angegeben ist, er stattdessen als Anzahl von Pixeln behandelt wird, da Prozentwerte gemäß der Spezifikation eigentlich nicht zulässig sind.
- Das {{htmlelement("wbr")}}-Element hat sein bidirektionales Verhalten korrigiert. Es verhält sich nun wie das Unicode `U+200B ZERO-WIDTH SPACE` und beeinflusst daher nicht mehr die Bidirektionalität seines Elternelements.
- Die {{Cssxref(":invalid")}} Pseudo-Klasse kann jetzt auf das {{htmlelement("form")}}-Element angewendet werden.

### CSS

- Die `turn` {{cssxref("&lt;angle&gt;")}} Einheit wird nun unterstützt (zur Verwendung mit CSS-Funktionen wie `rotate()`).
- Unterstützung für die 3-zu-4-Wert-Syntax der {{cssxref("background-position")}} wurde hinzugefügt. Sie können ein Hintergrundbild von jeder Ecke versetzen, indem Sie beispielsweise `right 10px bottom 20px` schreiben. Siehe [Firefox-Bug 522607](https://bugzil.la/522607)
- Unterstützung für die 2-Wert-Syntax von CSS {{cssxref("background-repeat")}} wurde hinzugefügt.
- Unterstützung für {{cssxref("border-radius","-moz-border-radius*")}} und {{cssxref("box-shadow","-moz-box-shadow")}} wurde entfernt. Autoren sollten stattdessen den nicht-prefixed `border-radius` oder `box-shadow` verwenden. Siehe [Firefox-Bug 693510](https://bugzil.la/693510)
- Die {{cssxref("column-fill")}} Eigenschaft wurde implementiert (mit Präfix).

### JavaScript

- Unterstützung für die ECMAScript 2015 [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of) Konstruktion wurde hinzugefügt.
- Experimentelle Unterstützung für ECMAScript 2015 [Map](/de/docs/Web/JavaScript/Reference/Global_Objects/Map) und [Set](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) Objekte wurde implementiert.

### DOM

- Das `deep` Argument der [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode) Methode ist jetzt optional, wie in DOM4 spezifiziert.
- Die Methoden [`setTimeout()`](/de/docs/Web/API/Window/setTimeout), [`setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout), [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval) und [`WorkerGlobalScope.setInterval()`](/de/docs/Web/API/WorkerGlobalScope/setInterval) übergeben nicht mehr ein zusätzliches "lateness" Argument an die Rückrufroutine.
- Die [`Blob.mozSlice()`](/de/docs/Web/API/Blob) Methode wurde ohne Präfix implementiert.
- Unterstützung für den [`Blob`](/de/docs/Web/API/Blob) Konstruktor wurde hinzugefügt.
- Unterstützung für `globalStorage` wurde entfernt.
- Das neue `DOMRequest`-Interface, das zum Melden des Status und Ergebnisses von Hintergrundoperationen verwendet wird, wurde hinzugefügt.
- Die [`HTMLOptionElement.index()`](/de/docs/Web/API/HTMLOptionElement) Methode gibt jetzt `0` zurück anstelle des falschen `-1`, wenn das {{HTMLElement("option")}}-Element in einem {{HTMLElement("datalist")}} HTML-Element ist.
- [`DOMException`](/de/docs/Web/API/DOMException) wie in DOM Level 4 definiert, wurde implementiert.
- Das [`FileError`](/de/docs/Web/API/FileError) Interface wurde zugunsten der [`DOMError`](/de/docs/Web/API/DOMError) Schnittstelle entfernt, wie in der neuesten FileAPI-Spezifikation definiert.
- Das [`Range`](/de/docs/Web/API/Range) Objekt wirft nicht mehr eine `RangeException`. Stattdessen wird eine [`DOMException`](/de/docs/Web/API/DOMException) verwendet, wie in DOM 4 definiert.
- [`element.getAttributeNS()`](/de/docs/Web/API/Element/getAttributeNS) gibt jetzt immer `null` statt eines leeren Strings für nicht vorhandene Attribute zurück. Zuvor konnten in einigen Fällen leere Zeichenfolgen zurückgegeben werden. Dies entspricht der DOM4-Spezifikation, die jetzt sagt, dass für nicht vorhandene Attribute null zurückgegeben werden sollte, anstatt eines leeren Strings.
- Das [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) Interface hat jetzt eine nicht-standardisierte `mozFetchAsStream()` Methode, die einen Eingabestrom mit den Bilddaten des Elements im angegebenen Format bereitstellt.

### UA-Zeichenfolge

- Firefox für Android hat jetzt ein [Tablet oder Mobile-Token in der UA-Zeichenfolge](/de/docs/Gecko_user_agent_string_reference#mobile_and_tablet_indicators), um den Formfaktor anzuzeigen, und hat das Fennec-Token nicht mehr. Auch die Zahl nach "Gecko/" ist jetzt die Gecko-Versionsnummer anstelle eines eingefrorenen Datums.
- Die UA-Zeichenfolge zeigt nicht mehr die Gecko-Patchnummer oder den Veröffentlichungsstatus in der Versionsnummer an; das heißt, die Versionsnummer hat jetzt immer die Form "X.Y", wobei X die Hauptversionsnummer und Y die Unterversionsnummer ist. Zum Beispiel "13.0" oder "14.1". Es wird nicht mehr etwas wie "14.0.1b1" sein.

### SVG

- Die [`SVGStringList`](/de/docs/Web/API/SVGStringList) DOM-Schnittstelle ist jetzt wie [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) indizierbar (siehe [Firefox-Bug 722071](https://bugzil.la/722071)).

### WebGL

- Unterstützung für die [`EXT_texture_filter_anisotropic`](/de/docs/Web/API/WebGL_API/Using_Extensions#ext_texture_filter_anisotropic) Erweiterung wurde hinzugefügt. Anisotropes Texturfiltering verbessert die Qualität des Mipmapping-Texturzugriffs bei Betrachtung eines texturierten Primitives aus einem schrägen Winkel.

### MathML

- Unterstützung für das `width`-Attribut auf {{MathMLElement("mtable")}} Elementen wurde hinzugefügt ([Firefox-Bug 722880](https://bugzil.la/722880)).
- [MathJax-Fonts](https://docs.mathjax.org/en/latest/output/fonts.html) werden jetzt als Standard-Schriftarten für mathematische Texte verwendet. Siehe [Schriftarten für Mozillas MathML-Engine](/de/docs/Mozilla_MathML_Project/Fonts) für weitere Informationen.

### Netzwerk

- Das SPDY-Protokoll ist jetzt standardmäßig aktiviert.

### Entwicklerwerkzeuge

#### Verbesserungen der 3D-Ansicht

- Sie können jetzt die "f"-Taste drücken, um sicherzustellen, dass der aktuell ausgewählte Knoten sichtbar ist.

#### Verbesserungen des Stil-Panels

- Ein Klick auf die Überschrift einer Regel im [Stil-Panel](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html#css-pane) öffnet nun den [Stil-Editor](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html) an der entsprechenden CSS-Stelle.
- Ein Rechtsklick auf eine Regel im [Stil-Panel](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html#css-pane) bietet jetzt die Option, die Regel in die Zwischenablage zu kopieren.
- Das Eingeben eines unbekannten Eigenschaftsnamen oder eines ungültigen Eigenschaftswertes zeigt ein Warnsymbol neben dieser Eigenschaft an.

#### Verbesserungen im Scratchpad

- Das _Scratchpad_ hat jetzt eine Option im Hilfemenü, die Sie zur MDN-Dokumentation über Scratchpad führt.

## Änderungen für Mozilla- und Add-on-Entwickler

### Kompatibilitäts Hinweis

Ab Firefox 13 erfordert Firefox für Windows mindestens Windows XP Service Pack 2; es läuft nicht mehr auf Windows 2000 oder früheren Versionen von Windows XP.

### JavaScript-Code-Module

#### source-editor.jsm

- Unterstützung für eine Dirty-Flag wurde zur Source Editor API hinzugefügt.
- Der Source Editor unterstützt nicht mehr das Zurückfallen auf ein {{HTMLElement("textarea")}} anstelle der Verwendung von Orion.
- Der Editor stellt jetzt Fokus- und Blur-Ereignisse bereit.
- Die [`getIndentationString()`](/de/docs/JavaScript_code_modules/source-editor.jsm#getIndentationString%28%29) Methode wurde hinzugefügt; diese gibt die Zeichenfolge zurück, die zum Einrücken von Text im Editor verwendet werden soll.
- Der Source Editor unterstützt jetzt die Verwaltung einer Liste von Haltepunkten und die Anzeige einer Benutzeroberfläche zur Umschaltung, implementiert jedoch selbst keine Haltepunkte. Dafür müssen Sie Debugger-Code schreiben.
- Unterstützung für das Hervorheben der aktuellen Zeile wurde mit der Konfigurationsoption `highlightCurrentLine` hinzugefügt.

### ARIA

- Die CSS-Eigenschaften {{cssxref("margin-left")}}, {{cssxref("margin-right")}}, {{cssxref("margin-top")}}, {{cssxref("margin-bottom")}} werden jetzt alle in ARIA-Objektattribute mit demselben Namen reflektiert. Siehe [Gecko-Objektattribute](/de/docs/Accessibility/AT-APIs/Gecko/Attrs) für weitere Informationen.

### Schnittstellen

- Die `nsIScreen`-Schnittstelle unterstützt jetzt die Kontrolle der Rotation über das neue `rotation`-Attribut.
- Die `nsIPrefBranch2`-Schnittstelle wurde in `nsIPrefBranch` zusammengeführt ([Firefox-Bug 718255](https://bugzil.la/718255)).
- Der neue Nachrichten-Manager-Weckdienst, implementiert von `nsIMessageWakeupService`, wurde implementiert. Siehe [Firefox-Bug 591052](https://bugzil.la/591052).
- Die Aliase `MozOpacity`, `MozOutline`, `MozOutlineStyle`, `MozOutlineWidth`, `MozOutlineOffset` und `MozOutlineColor`, die alle in früheren Versionen von Gecko entfernt wurden, wurden jetzt aus `nsIDOMCSS2Properties` entfernt, was hätte gemacht werden sollen, als die Aliase anfänglich entfernt wurden.
- Das `nsINavHistoryQueryOptions`-Attribut `excludeItemIfParentHasAnnotation` wurde entfernt, zusammen mit der entsprechenden Abfrageoperation. Es existierte, um Livemarks zu unterstützen, die nicht mehr existieren.

## Siehe auch

{{Firefox_for_developers}}
