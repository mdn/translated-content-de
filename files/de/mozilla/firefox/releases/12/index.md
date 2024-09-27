---
title: Firefox 12 für Entwickler
slug: Mozilla/Firefox/Releases/12
l10n:
  sourceCommit: 0d66181876fd29da72c99140f5828be05a1c9011
---

{{FirefoxSidebar}}

Firefox 12 wurde am 24. April 2012 veröffentlicht. Diese Seite fasst die Änderungen in Firefox 12 zusammen, die Entwickler betreffen. Dieser Artikel bietet Informationen über die neuen Funktionen und behobenen Hauptfehler in diesem Release sowie Links zu detaillierteren Dokumentationen sowohl für Web-Entwickler als auch für Add-on-Entwickler.

## Änderungen für Webentwickler

### HTML

- Das Attribut `title` unterstützt nun Zeilenumbrüche, um mehrzeilige Tooltips zu ermöglichen.
- Wenn JavaScript deaktiviert ist, wurde das {{HTMLElement("canvas")}}-Element gerendert, anstatt den Fallback-Inhalt gemäß der [Spezifikation](https://html.spec.whatwg.org/multipage/canvas.html) anzuzeigen. Jetzt wird der Fallback-Inhalt anstelle dessen gerendert.
- Das `crossorigin`-Attribut wird jetzt bei {{HTMLElement("video")}} unterstützt.

### CSS

- Unterstützung für die {{cssxref("text-align-last")}}-Eigenschaft wurde hinzugefügt (mit Präfix).

### JavaScript

- Unterstützung für Sharp-Variablen (eine nicht standardisierte Netscape-Erweiterung) wurde entfernt.
- {{jsxref("ArrayBuffer.prototype.slice()")}} wurde implementiert.

### DOM

- [`DOMParser`](/de/docs/Web/API/DOMParser) unterstützt jetzt das Parsen von HTML-Dokumentfragmenten.
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) unterstützt jetzt Timeouts mit der `timeout`-Eigenschaft und dem "timeout"-Ereignis sowie den `ontimeout`-Ereignishandler auf der [`XMLHttpRequestEventTarget`](/de/docs/Web/API/XMLHttpRequestEventTarget)-Schnittstelle.
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) kann jetzt von [`data:` URLs](/de/docs/Web/URI/Schemes/data) laden.
- Beim Herunterladen großer Datenmengen werden nun [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) Progress-Event-Handler periodisch aufgerufen, wenn der `responseType` auf "moz-blob" gesetzt ist und die Antwort ein [`Blob`](/de/docs/Web/API/Blob) enthält, das alle bisher empfangenen Daten enthält. Dadurch können Progress-Handler mit der Datenverarbeitung beginnen, ohne auf den vollständigen Empfang aller Daten zu warten.
- Gecko unterstützt nun [Multi-Touch](/de/docs/Web/API/Touch_events) (statt nur Einzelberührungen) auf Android.
- Während der Textbearbeitung mit einem IME wird das `input`-Ereignis jetzt immer dann gesendet, wenn sich der Inhalt des bearbeiteten Elements geändert hat; dies erfolgt nach dem `compositionupdate`-Ereignis, das angibt, dass der Text des IME geändert wurde. Sie können daher den `input`-Ereignishandler verwenden, um Änderungen am tatsächlichen Inhalt des Elements zu überwachen.
- [`DOMError`](/de/docs/Web/API/DOMError) wie in der DOM 4-Spezifikation definiert, wurde implementiert.
- Die Methode [`Document.createNodeIterator()`](/de/docs/Web/API/Document/createNodeIterator) wurde aktualisiert, um der DOM4-Spezifikation zu entsprechen. Dadurch werden die Parameter `whatToShow` und `filter` optional und der nicht standardisierte vierte Parameter `entityReferenceExpansion` wurde entfernt.
- Die Methode `slice()` der [`Blob`](/de/docs/Web/API/Blob)-Schnittstelle war von einem Fehler betroffen, der verhinderte, dass sie `start`- und `end`-Werte außerhalb des Bereichs eines signierten 64-Bit-Integer korrekt akzeptierte; dies wurde behoben.
- Die Methode [`element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) berücksichtigt jetzt den Effekt von [CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms) bei der Berechnung des Bounding-Rechtecks eines Elements.
- Die Eigenschaft `crossOrigin` wird nun von [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) unterstützt.

#### Neue WebAPIs

- Network Information API: Experimentelle Unterstützung für [`window.navigator.connection`](/de/docs/Web/API/Navigator/connection) wurde hinzugefügt (mit Präfix).
- WebTelephony API: `window.navigator.mozTelephony` wurde implementiert und bietet Unterstützung für das Wählen, Entgegennehmen und Verwalten von Telefonanrufen auf einem Gerät.
- WebSMS API: `window.navigator.mozSms` ist jetzt auf Mobilgeräten verfügbar, um SMS-Textnachrichten zu senden.
- Bildschirmhelligkeits-API: `window.screen.mozEnabled` und `window.screen.mozBrightness` wurden hinzugefügt, um den Bildschirm des Geräts zu steuern.

### SVG

- Firefox implementiert nun die `SVGTests` DOM-API, siehe [Firefox-Bug 607854](https://bugzil.la/607854)
- Die DOM-Schnittstelle [`SVGStringList`](/de/docs/Web/API/SVGStringList) unterstützt die nicht standardisierte `length`-Eigenschaft, siehe [Firefox-Bug 711958](https://bugzil.la/711958)

### MathML

- Zur Steuerung der Ausrichtung von MathML-Formeln wird das `dir`-Attribut nun bei den {{MathMLElement("math")}}, {{MathMLElement("mrow")}}, und {{MathMLElement("mstyle")}}-Elementen sowie bei [MathML-Token-Elementen](/de/docs/Web/MathML/Element#token_elements) unterstützt. Dies ist insbesondere für einige [arabische mathematische Notationen](https://www.w3.org/TR/arabic-math/) wichtig.
- Das in MathML3 definierte Ausrichtungsattribut `align` wurde für {{MathMLElement("munder")}}, {{MathMLElement("mover")}}, und {{MathMLElement("munderover")}} implementiert.

### Netzwerke

- Bisher meldete Gecko den Schließcode `CLOSE_NORMAL`, wenn ein WebSocket-Kanal aufgrund eines unerwarteten Fehlers geschlossen wurde oder wenn er aufgrund einer Fehlersituation geschlossen wurde, die von der Spezifikation nicht abgedeckt ist. Jetzt wird `CLOSE_GOING_AWAY` anstelle dessen gemeldet.

### Entwicklerwerkzeuge

- Die [Web-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) speichert jetzt Fehlermeldungen und Logeinträge, die mit [`console.log()`](/de/docs/Web/API/Console/log_static) hinzugefügt wurden, wenn die Konsole nicht geöffnet ist, und zeigt sie an, wenn die Konsole geöffnet wird.
- Sie können jetzt das Zoomniveau, das Schwenken und die Rotation in der [3D-Ansicht](https://firefox-source-docs.mozilla.org/devtools-user/3d_view/index.html) zurücksetzen, indem Sie die Taste "r" drücken.
- Sie können in der [3D-Ansicht](https://firefox-source-docs.mozilla.org/devtools-user/3d_view/index.html) jetzt Knoten ausblenden, indem Sie die Taste "x" drücken, nachdem Sie sie ausgewählt haben.
- Der [Source-Editor](https://firefox-source-docs.mozilla.org/devtools-user/keyboard_shortcuts/index.html#source-editor) verfügt über mehrere neue Bearbeitungsfunktionen und Tastenkombinationen; siehe [Using the Source Editor](https://firefox-source-docs.mozilla.org/devtools-user/keyboard_shortcuts/index.html#source-editor) für Details.

Mozilla arbeitet an der Integration eigener Webentwickler-Tools, die das beliebte [Firebug](https://getfirebug.com/) Add-on ergänzen. Sie können weitere Informationen über diese Tools sowie eine Liste von Ressourcen außerhalb von Firefox finden, die Ihnen bei Ihrer Webentwicklung helfen. Die vollständige Liste befindet sich unter [Webentwickler-Tools](https://firefox-source-docs.mozilla.org/devtools-user/index.html).

### Sonstige Änderungen

- Der GEOSTD8-Zeichensatz, der nie vollständig unterstützt wurde, wird nun überhaupt nicht mehr unterstützt.

## Änderungen für Mozilla- und Add-on-Entwickler

### JavaScript-Code-Module

#### source-editor.jsm

- Die Methode `resetUndo()` wurde hinzugefügt; damit können Sie den Undo-Stack leeren.
- Der Quelltext-Editor bietet jetzt Methoden zur Suchfunktionalität: `find()`, `findNext()`, und `findPrevious()`.

### XUL

- Die Definition der Werte für das `chromemargin`-Attribut hat sich geringfügig geändert, um es zu erleichtern, plattformübergreifenden XUL-Code mit unterschiedlichen Standard-Fensterrandbreiten gut aussehen zu lassen.

### XPCOM

- `nsISupports` Proxys werden nicht mehr unterstützt. Sie sollten stattdessen Runables verwenden.
- Firefox 11 änderte das Verhalten von `Components.utils.getWeakReference()`, sodass eine Ausnahme ausgelöst wird, wenn die Objekt-Referenz null ist; das vorherige Verhalten des stillen Fehlschlagens wurde wiederhergestellt.

### XPConnect

- Der `PRUint64`-Datentyp war fälschlicherweise im Wesentlichen identisch mit `PRint64`, wenn er mit XPConnect verwendet wurde. Dies wurde behoben.

### Schnittstellenänderungen

- Die Schnittstelle `nsIScreen_MOZILLA_2_0_BRANCH` wurde in `nsIScreen` zusammengeführt. Die APIs, die in dieser Schnittstelle definiert sind (zur Steuerung der minimalen Bildschirmhelligkeit), waren zuvor nicht dokumentiert, befinden sich aber jetzt darin.
- Die Schnittstelle `nsIScriptError2` wurde in `nsIScriptError` zusammengeführt.
- `nsIDownloadManager.addDownload()` wird jetzt asynchron anstatt synchron behandelt.
- Die Methode `imgIContainerObserver.frameChanged()` erhält jetzt als ersten Parameter ein `imgIRequest`-Objekt, das die entsprechende Anforderung identifiziert.
- Die Methode `nsIDOMWindowUtils.sendTouchEvent()` wurde hinzugefügt, um Touch-Ereignisse zu synthetisieren.
- Sie können jetzt den angegebenen Inhalt in die vertikale Mitte der Ansicht scrollen, indem Sie `SCROLL_CENTER_VERTICALLY` als Scrollkonstante angeben, wenn Sie `nsISelectionController.scrollSelectionIntoView()` aufrufen.
- Das neue Attribut `nsIMemoryMultiReporter.explicitNonHeap` wurde hinzugefügt; dies ist eine effizientere Methode, um die Summe aller Messungen des Multi-Reporters zu erhalten, die mit "explicit" beginnen **und** vom Typ `KIND_NONHEAP` sind.
- Das Attribut `nsIDOMWindowUtils.paintingSuppressed` wurde hinzugefügt; dieser boolesche Wert gibt an, ob das Rendering auf dem Fenster derzeit unterdrückt wird. Dies wird auf Mobilgeräten verwendet, um ein unruhiges Rendering zu verhindern, das auftritt, wenn der Versuch, die Seite zu zeichnen, beginnt, bevor genügend Inhalte verfügbar sind, um dies reibungslos zu tun.
- Die Schnittstellen `nsIDocCharset` und `nsIDocumentCharsetInfo` wurden in `nsIDocShell` zusammengeführt. Im Rahmen dieser Arbeit wurde das alte `forcedDetector`-Attribut entfernt; es hatte nie eine Funktion.

### SpiderMonkey

- `JSThread` wurde entfernt.
- `JSThreadData` wurde in `JSRuntime` zusammengeführt.

### Build

- Beim Bauen auf Windows müssen Sie das Windows 7 SDK installiert haben.

### Sonstige Änderungen

- Die Editor-Komponente (bekannt als Midas) akzeptiert jetzt nur noch Ereignisse von privilegiertem Code.

## Siehe auch

{{Firefox_for_developers}}
