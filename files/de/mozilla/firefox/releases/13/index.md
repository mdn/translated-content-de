---
title: Firefox 13 für Entwickler
slug: Mozilla/Firefox/Releases/13
l10n:
  sourceCommit: 5ae01a458eced9772d628f91d035ada423cd073c
---

{{FirefoxSidebar}}

Firefox 13 wurde am 5. Juni 2012 veröffentlicht. Diese Seite fasst die Änderungen in Firefox 13 zusammen, die Entwickler betreffen.

## Änderungen für Webentwickler

### HTML

- Die `cellspacing` Attribute von Tabellen werden jetzt außerhalb des Quirks-Modus genauso geparst wie im Quirks-Modus. Das bedeutet, wenn ein Wert als Prozentsatz angegeben wird, wird er stattdessen als Anzahl von Pixeln behandelt, da Prozentsätze laut Spezifikation nicht tatsächlich erlaubt sind.
- Das `{{htmlelement("wbr")}}` Element hat sein bidirektionales Verhalten korrigiert. Es verhält sich jetzt wie der Unicode `U+200B ZERO-WIDTH SPACE` und beeinflusst daher nicht mehr die Bidirektionalität des übergeordneten Elements.
- Die `{{Cssxref(":invalid")}}` Pseudoklasse kann jetzt auf das `{{htmlelement("form")}}` Element angewendet werden.

### CSS

- Die `turn` `{{cssxref("&lt;angle&gt;")}}` Einheit wird jetzt unterstützt (zum Einsatz mit CSS-Funktionen wie `rotate()`).
- Unterstützung für die 3-zu-4-Wert-Syntax der `{{cssxref("background-position")}}` wurde hinzugefügt. Sie können ein Hintergrundbild von jeder Ecke versetzen, indem Sie etwa `right 10px bottom 20px` schreiben. Siehe [Firefox Bug 522607](https://bugzil.la/522607).
- Unterstützung für die 2-Wert-Syntax von CSS `{{cssxref("background-repeat")}}` wurde hinzugefügt.
- Unterstützung für `{{cssxref("border-radius","-moz-border-radius*")}}` und `{{cssxref("box-shadow","-moz-box-shadow")}}` wurde entfernt. Autoren sollten stattdessen die unpräfixierten `border-radius` oder `box-shadow` verwenden. Siehe [Firefox Bug 693510](https://bugzil.la/693510).
- Die `{{cssxref("column-fill")}}` Eigenschaft wurde implementiert (mit Präfix).

### JavaScript

- Unterstützung für den ECMAScript 2015 `[`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)` Konstrukt wurde hinzugefügt.
- Experimentelle Unterstützung für ECMAScript 2015 [Map](/de/docs/Web/JavaScript/Reference/Global_Objects/Map) und [Set](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) Objekte wurde implementiert.

### DOM

- Das `[`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode)` Methode `deep` Argument ist jetzt optional, wie in DOM4 spezifiziert.
- Die `[`setTimeout()`](/de/docs/Web/API/Window/setTimeout)`, `[`setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout)`, [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval)`und`[`WorkerGlobalScope.setInterval()`](/de/docs/Web/API/WorkerGlobalScope/setInterval)` Methoden übergeben kein zusätzliches "Verspätungs"-Argument mehr an die Rückrufroutine.
- Die `[`Blob.mozSlice()`](/de/docs/Web/API/Blob)` Methode wurde unpräfixiert.
- Unterstützung für den `[`Blob`](/de/docs/Web/API/Blob)` Konstruktor wurde hinzugefügt.
- Unterstützung für `globalStorage` wurde entfernt.
- Die neue `DOMRequest` Schnittstelle, die zum Melden des Status und Ergebnisses von Hintergrundoperationen verwendet wird, wurde hinzugefügt.
- Die `[`HTMLOptionElement.index()`](/de/docs/Web/API/HTMLOptionElement)` Methode gibt jetzt `0` zurück anstelle des falschen `-1`, wenn die `{{HTMLElement("option")}}` in einem `{{HTMLElement("datalist")}}` HTML-Element ist.
- `[`DOMException`](/de/docs/Web/API/DOMException)` wie in DOM Level 4 definiert, wurde implementiert.
- Die `[`FileError`](/de/docs/Web/API/FileError)` Schnittstelle wurde zugunsten der `[`DOMError`](/de/docs/Web/API/DOMError)` Schnittstelle entfernt, wie in der neuesten FileAPI-Spezifikation definiert.
- Das `[`Range`](/de/docs/Web/API/Range)` Objekt wirft keinen `RangeException` mehr. Stattdessen wird ein `[`DOMException`](/de/docs/Web/API/DOMException)`, wie in DOM 4 definiert, verwendet.
- `[`element.getAttributeNS()`](/de/docs/Web/API/Element/getAttributeNS)` gibt jetzt immer `null` zurück anstelle des leeren Strings für nicht existierende Attribute. Bisher gab es Fälle, in denen der leere String zurückgegeben werden konnte. Dies entspricht der DOM4-Spezifikation, die jetzt besagt, dass dies für nicht existierende Attribute null statt eines leeren Strings zurückgeben soll.
- Die `[`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement)` Schnittstelle hat jetzt eine nicht-standardisierte `mozFetchAsStream()` Methode, die einen Eingabestream mit den Bilddaten des Elements im angegebenen Format bereitstellt.

### UA-String

- Firefox für Android hat jetzt ein [Tablet oder Mobile Token im UA-String](/de/docs/Gecko_user_agent_string_reference#mobile_and_tablet_indicators), um die Formfaktor anzuzeigen, und hat das Fennec-Token nicht mehr. Außerdem ist die Nummer nach "Gecko/" jetzt die Gecko-Versionsnummer anstelle eines eingefrorenen Datums.
- Der UA-String zeigt nicht mehr die Gecko-Patchnummer oder den Veröffentlichungsstatus in der Versionsnummer an; das heißt, die Versionsnummer hat jetzt immer die Form "X.Y", wobei X die Hauptversionsnummer und Y die Nebenversionsnummer ist. Zum Beispiel "13.0" oder "14.1". Es wird nicht mehr etwas wie "14.0.1b1" sein.

### SVG

- Die `[`SVGStringList`](/de/docs/Web/API/SVGStringList)` DOM-Schnittstelle ist jetzt indexierbar wie `[`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array)` (siehe [Firefox Bug 722071](https://bugzil.la/722071)).

### WebGL

- Unterstützung wurde für die `[`EXT_texture_filter_anisotropic`](/de/docs/Web/API/WebGL_API/Using_Extensions#ext_texture_filter_anisotropic)` Erweiterung hinzugefügt. Anisotropes Texture-Filtering verbessert die Qualität des mipmap-basierten Texturzugriffs, wenn ein texturiertes Primitiv in einem schrägen Winkel betrachtet wird.

### MathML

- Unterstützung für das `width` Attribut auf `{{MathMLElement("mtable")}}` Elementen wurde hinzugefügt ([Firefox Bug 722880](https://bugzil.la/722880)).
- [MathJax fonts](https://docs.mathjax.org/en/latest/output/fonts.html) werden jetzt als Standard-Schriftarten für mathematischen Text verwendet. Siehe [Schriftarten für Mozillas MathML-Engine](/de/docs/Mozilla_MathML_Project/Fonts) für mehr Informationen.

### Netzwerk

- Das SPDY-Protokoll ist jetzt standardmäßig aktiviert.

### Entwickler-Tools

#### 3D-Ansicht Verbesserungen

- Sie können jetzt die "f"-Taste drücken, um sicherzustellen, dass der aktuell ausgewählte Knoten sichtbar ist.

#### Style Panel Verbesserungen

- Ein Klick auf die Überschrift einer beliebigen Regel im [Style-Panel](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html#css-pane) öffnet nun den [Style Editor](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html) bei dem entsprechenden CSS.
- Ein Rechtsklick auf eine Regel im [Style-Panel](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html#css-pane) bietet jetzt eine Option zum Kopieren der Regel in die Zwischenablage.
- Wenn Sie einen unbekannten Eigenschaftsnamen eingeben oder einen ungültigen Eigenschaftswert, wird ein Warnsymbol neben dieser Eigenschaft angezeigt.

#### Scratchpad Verbesserungen

- Das _Scratchpad_ hat jetzt eine Option im Hilfe-Menü, die Sie zur MDN-Dokumentation über Scratchpad führt.

## Änderungen für Mozilla- und Add-on-Entwickler

### Kompatibilitäts-Hinweis

Ab Firefox 13 erfordert Firefox für Windows mindestens Windows XP Service Pack 2; es wird nicht mehr auf Windows 2000 oder früheren Versionen von Windows XP ausgeführt.

### JavaScript Code-Module

#### source-editor.jsm

- Unterstützung für ein Dirty-Flag wurde zur Source Editor API hinzugefügt.
- Der Source Editor unterstützt nicht mehr das Zurückgreifen auf ein `{{HTMLElement("textarea")}}` anstelle von Orion.
- Der Editor zeigt jetzt Fokus- und Blurrevents an.
- Die `[`getIndentationString()`](/de/docs/JavaScript_code_modules/source-editor.jsm#getIndentationString%28%29)` Methode wurde hinzugefügt; diese gibt den String zurück, der zum Einrücken von Text im Editor verwendet werden soll.
- Der Source Editor unterstützt jetzt das Verwalten einer Liste von Haltepunkten und die Anzeige einer Benutzeroberfläche zum Umschalten dieser Haltepunkte ein und aus; es implementiert jedoch keine Haltepunkte. Dafür müssen Sie den Debugger-Code selbst schreiben.
- Unterstützung wurde hinzugefügt, um die aktuelle Zeile hervorzuheben, unter Verwendung der `highlightCurrentLine` Konfigurationsoption.

### ARIA

- Die CSS-Eigenschaften `{{cssxref("margin-left")}}`, `{{cssxref("margin-right")}}`, `{{cssxref("margin-top")}}`, `{{cssxref("margin-bottom")}}` werden nun alle in ARIA-Objektattribute mit demselben Namen reflektiert. Siehe [Gecko Objektattribute](/de/docs/Accessibility/AT-APIs/Gecko/Attrs) für mehr Informationen.

### Schnittstellen

- Die `nsIScreen` Schnittstelle unterstützt jetzt die Steuerung der Rotation über das neue `rotation` Attribut.
- Die `nsIPrefBranch2` Schnittstelle wurde in `nsIPrefBranch` integriert ([Firefox Bug 718255](https://bugzil.la/718255)).
- Der neue Nachrichten-Manager-Weckservice, implementiert durch `nsIMessageWakeupService`, wurde implementiert. Siehe [Firefox Bug 591052](https://bugzil.la/591052).
- Die Aliase `MozOpacity`, `MozOutline`, `MozOutlineStyle`, `MozOutlineWidth`, `MozOutlineOffset`, und `MozOutlineColor`, die alle in früheren Versionen von Gecko entfernt wurden, wurden aus `nsIDOMCSS2Properties` entfernt, was hätte geschehen sollen, als die Aliase ursprünglich entfernt wurden.
- Das `nsINavHistoryQueryOptions` Attribut `excludeItemIfParentHasAnnotation` wurde entfernt, zusammen mit der entsprechenden Abfrageoperation. Es existierte, um Livemarks zu unterstützen, die nicht mehr existieren.

## Siehe auch

{{Firefox_for_developers}}
