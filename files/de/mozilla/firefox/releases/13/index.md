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

- Die Attribute [`cellspacing`](/de/docs/Web/HTML/Element/table#cellspacing) von Tabellen werden jetzt außerhalb des Quirks-Modus genauso geparst wie im Quirks-Modus. Das heißt, wenn ein Wert als Prozentsatz angegeben ist, wird er stattdessen als Anzahl von Pixeln behandelt, da Prozentwerte laut Spezifikation tatsächlich nicht erlaubt sind.
- Das Element {{htmlelement("wbr")}} hat ein verbessertes bidirektionales Verhalten. Es verhält sich jetzt wie das Unicode `U+200B ZERO-WIDTH SPACE` und beeinflusst daher nicht mehr die Bidirektionalität seines Elternelements.
- Die Pseudo-Klasse {{Cssxref(":invalid")}} kann jetzt auf das {{htmlelement("form")}}-Element angewendet werden.

### CSS

- Die `turn`-Einheit ({{cssxref("&lt;angle&gt;")}}) wird jetzt unterstützt (zur Verwendung mit CSS-Funktionen wie `rotate()`).
- Unterstützung für die 3-zu-4-Werte-Syntax von {{cssxref("background-position")}} wurde hinzugefügt. Sie können ein Hintergrundbild von jeder Ecke aus versetzen, indem Sie z. B. "`right 10px bottom 20px`" schreiben. Siehe [Firefox Bug 522607](https://bugzil.la/522607)
- Unterstützung für die 2-Werte-Syntax von CSS {{cssxref("background-repeat")}} wurde hinzugefügt.
- Unterstützung für {{cssxref("border-radius","-moz-border-radius*")}} und {{cssxref("box-shadow","-moz-box-shadow")}} wurde entfernt. Autoren sollten stattdessen die unveränderten `border-radius`- oder `box-shadow` verwenden. Siehe [Firefox Bug 693510](https://bugzil.la/693510)
- Die Eigenschaft {{cssxref("column-fill")}} wurde implementiert (mit Präfix).

### JavaScript

- Unterstützung für den ECMAScript 2015 [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of) Konstrukt wurde hinzugefügt.
- Experimentelle Unterstützung für ECMAScript 2015 [Map](/de/docs/Web/JavaScript/Reference/Global_Objects/Map) und [Set](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) Objekte wurde implementiert.

### DOM

- Das `deep`-Argument der Methode {{domxref("Node.cloneNode()")}} ist nun optional, wie in DOM4 spezifiziert.
- Die Methoden {{domxref("setTimeout()")}} und {{domxref("setInterval()")}} übergeben dem Callback keine zusätzlichen "lateness"-Argumente mehr.
- Die Methode {{domxref("Blob","Blob.mozSlice()")}} wurde ohne Präfix implementiert.
- Unterstützung für den {{domxref("Blob")}}-Konstruktor wurde hinzugefügt.
- Die Unterstützung für `globalStorage` wurde entfernt.
- Die neue `DOMRequest`-Schnittstelle, die zur Berichterstattung über den Status und das Ergebnis von Hintergrundoperationen verwendet wird, wurde hinzugefügt.
- Die Methode {{domxref("HTMLOptionElement", "HTMLOptionElement.index()")}} gibt jetzt `0` statt des falschen `-1` zurück, wenn das {{HTMLElement("option")}} in einem {{HTMLElement("datalist")}} HTML-Element enthalten ist.
- {{domxref("DOMException")}} wie in DOM Ebene 4 definiert, wurde implementiert.
- Die {{domxref("FileError")}} Schnittstelle wurde zugunsten der {{domxref("DOMError")}} Schnittstelle entfernt, wie in der neuesten FileAPI-Spezifikation definiert.
- Das {{domxref("Range")}}-Objekt löst keine `RangeException` mehr aus. Stattdessen wird eine {{domxref("DOMException")}} verwendet, wie in DOM 4 definiert.
- {{domxref("element.getAttributeNS()")}} gibt jetzt immer `null` anstelle des leeren Strings für nicht vorhandene Attribute zurück. Zuvor gab es Fälle, in denen der leere String zurückgegeben werden konnte. Dies entspricht der DOM4-Spezifikation, die jetzt besagt, dass `null` für nicht vorhandene Attribute zurückgegeben werden sollte, anstelle eines leeren Strings.
- Die Schnittstelle {{domxref("HTMLCanvasElement")}} verfügt nun über eine nicht standardmäßige `mozFetchAsStream()`-Methode, die einen Eingabestrom enthält, der die Bilddaten des Elements im angegebenen Format bereitstellt.

### UA-String

- Firefox für Android hat jetzt ein [Tablet- oder Mobiltoken im UA-String](/de/docs/Gecko_user_agent_string_reference#mobile_and_tablet_indicators), um den Formfaktor anzuzeigen und enthält nicht mehr das Fennec-Token. Außerdem ist die Zahl nach "Gecko/" jetzt die Gecko-Versionsnummer anstelle eines eingefrorenen Datums.
- Der UA-String gibt keine Gecko-Patchnummer oder den Veröffentlichungsstatus mehr in der Versionsnummer an; das heißt, die Versionsnummer hat jetzt immer die Form "X.Y", wobei X die Hauptversionsnummer und Y die Nebenversion ist. Zum Beispiel "13.0" oder "14.1". Es wird nicht mehr etwas wie "14.0.1b1" sein.

### SVG

- Die {{domxref("SVGStringList")}} DOM-Schnittstelle ist jetzt indexierbar wie [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) (siehe [Firefox Bug 722071](https://bugzil.la/722071)).

### WebGL

- Unterstützung für die [`EXT_texture_filter_anisotropic`](/de/docs/Web/API/WebGL_API/Using_Extensions#ext_texture_filter_anisotropic) Erweiterung wurde hinzugefügt. Anisotropes Texturfiltering verbessert die Qualität des Zugriffs auf mipmap-Texturen, wenn eine texturierte Primitive in einem schrägen Winkel betrachtet wird.

### MathML

- Unterstützung für das `width`-Attribut auf {{MathMLElement("mtable")}}-Elementen wurde hinzugefügt ([Firefox Bug 722880](https://bugzil.la/722880)).
- [MathJax-Schriftarten](https://docs.mathjax.org/en/latest/output/fonts.html) werden jetzt als Standardschriftarten für mathematischen Text verwendet. Siehe [Fonts für Mozillas MathML-Engine](/de/docs/Mozilla_MathML_Project/Fonts) für weitere Informationen.

### Netzwerk

- Das SPDY-Protokoll ist jetzt standardmäßig aktiviert.

### Entwicklerwerkzeuge

#### Verbesserungen der 3D-Ansicht

- Sie können jetzt die "f"-Taste drücken, um sicherzustellen, dass der aktuell ausgewählte Knoten sichtbar ist.

#### Verbesserungen des Stilpanels

- Ein Klick auf die Überschrift einer beliebigen Regel im [Stilpanel](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html#css-pane) öffnet jetzt den [Style Editor](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html) an der entsprechenden CSS-Stelle.
- Ein Rechtsklick auf eine Regel im [Stilpanel](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html#css-pane) bietet jetzt eine Option, um die Regel in die Zwischenablage zu kopieren.
- Wenn Sie einen unbekannten Eigenschaftsnamen oder einen ungültigen Eigenschaftswert eingeben, wird ein Warnsymbol neben dieser Eigenschaft angezeigt.

#### Verbesserungen des Scratchpads

- Das _Scratchpad_ hat jetzt eine Option im Hilfemenü, die Sie zur MDN-Dokumentation über Scratchpad führt.

## Änderungen für Mozilla- und Add-on-Entwickler

### Kompatibilitätshinweis

Ab Firefox 13 erfordert Firefox für Windows mindestens Windows XP Service Pack 2; es läuft nicht mehr auf Windows 2000 oder früheren Versionen von Windows XP.

### JavaScript-Code-Module

#### source-editor.jsm

- Unterstützung für ein Dirty-Flag wurde zur Source Editor API hinzugefügt.
- Der Source Editor unterstützt nicht mehr das Rückgreifen auf ein {{HTMLElement("textarea")}} anstelle der Verwendung von Orion.
- Der Editor bietet jetzt Fokus- und Blur-Ereignisse.
- Die Methode [`getIndentationString()`](/de/docs/JavaScript_code_modules/source-editor.jsm#getIndentationString%28%29) wurde hinzugefügt; diese gibt die Zeichenfolge zurück, die zum Einrücken von Text im Editor verwendet werden soll.
- Der Source Editor unterstützt jetzt die Verwaltung einer Liste von Haltepunkten und bietet eine Benutzeroberfläche zum Umschalten dieser; es implementiert jedoch keine Haltepunkte. Das müssen Sie selbst im Debugger-Code implementieren.
- Unterstützung für das Hervorheben der aktuellen Zeile wurde mit der `highlightCurrentLine` Konfigurationsoption hinzugefügt.

### ARIA

- Die CSS-Eigenschaften {{cssxref("margin-left")}}, {{cssxref("margin-right")}}, {{cssxref("margin-top")}}, {{cssxref("margin-bottom")}} werden jetzt alle in ARIA-Objektattribute mit demselben Namen reflektiert. Siehe [Gecko-Objektattribute](/de/docs/Accessibility/AT-APIs/Gecko/Attrs) für weitere Informationen.

### Schnittstellen

- Die Schnittstelle `nsIScreen` unterstützt jetzt die Steuerung der Rotation über das neue `rotation`-Attribut.
- Die Schnittstelle `nsIPrefBranch2` wurde in `nsIPrefBranch` zusammengeführt ([Firefox Bug 718255](https://bugzil.la/718255)).
- Der neue Nachrichtendienst zum Aufwecken von Nachrichtenzustellungen wurde von `nsIMessageWakeupService` implementiert. Siehe [Firefox Bug 591052](https://bugzil.la/591052).
- Die Aliase `MozOpacity`, `MozOutline`, `MozOutlineStyle`, `MozOutlineWidth`, `MozOutlineOffset`, und `MozOutlineColor`, die in vorherigen Versionen von Gecko entfernt wurden, wurden aus `nsIDOMCSS2Properties` entfernt, was bereits bei der erstmaligen Entfernung der Aliasse hätte geschehen sollen.
- Das `nsINavHistoryQueryOptions` Attribut `excludeItemIfParentHasAnnotation` wurde entfernt, zusammen mit der entsprechenden Abfrageoperation. Es existierte zur Unterstützung von Livemarks, die es nicht mehr gibt.

## Siehe auch

{{Firefox_for_developers}}
