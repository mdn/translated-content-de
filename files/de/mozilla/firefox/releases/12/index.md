---
title: Firefox 12 Versionshinweise für Entwickler
short-title: Firefox 12
slug: Mozilla/Firefox/Releases/12
l10n:
  sourceCommit: 61912f53d01e935aea926a2226130fb4587414a9
---

Firefox 12 wurde am 24. April 2012 veröffentlicht. Diese Seite fasst die Änderungen in Firefox 12 zusammen, die Entwickler betreffen. Dieser Artikel bietet Informationen über die neuen Funktionen und die wichtigsten Fehlerbehebungen in dieser Version sowie Links zu detaillierterer Dokumentation sowohl für Webentwickler als auch für Add-on-Entwickler.

## Änderungen für Webentwickler

### HTML

- Das `title`-Attribut unterstützt jetzt Zeilenumbrüche, um mehrzeilige Tooltips zu ermöglichen.
- Wenn JavaScript deaktiviert ist, wurde das {{HTMLElement("canvas")}}-Element gerendert, anstatt den Fallback-Inhalt gemäß der [Spezifikation](https://html.spec.whatwg.org/multipage/canvas.html) anzuzeigen. Jetzt wird stattdessen der Fallback-Inhalt gerendert.
- Das `crossorigin`-Attribut wird jetzt auf {{HTMLElement("video")}} unterstützt.

### CSS

- Unterstützung für die {{cssxref("text-align-last")}}-Eigenschaft wurde hinzugefügt (mit Präfix).

### JavaScript

- Unterstützung für scharfe Variablen (eine nicht standardmäßige Netscape-Erweiterung) wurde gestrichen.
- {{jsxref("ArrayBuffer.prototype.slice()")}} wurde implementiert.

### DOM

- [`DOMParser`](/de/docs/Web/API/DOMParser) unterstützt jetzt das Parsen von HTML-Dokumentfragmenten.
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) unterstützt jetzt Zeitüberschreitungen mit der `timeout`-Eigenschaft und dem "timeout"-Ereignis sowie den `ontimeout`-Ereignishandler auf der [`XMLHttpRequestEventTarget`](/de/docs/Web/API/XMLHttpRequestEventTarget)-Schnittstelle.
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) kann jetzt von [`data:`-URLs](/de/docs/Web/URI/Reference/Schemes/data) laden.
- Beim Herunterladen großer Datenmengen werden [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Fortschrittsereignishandler jetzt regelmäßig aufgerufen, wenn der `responseType` auf "moz-blob" gesetzt ist und die Antwort ein [`Blob`](/de/docs/Web/API/Blob) ist, der alle bisher empfangenen Daten enthält. Dadurch können Fortschritts-Handler Daten verarbeiten, ohne darauf warten zu müssen, dass alle Daten eingetroffen sind.
- Gecko unterstützt jetzt [Multi-Touch](/de/docs/Web/API/Touch_events) (anstatt nur einzelner Berührungen gleichzeitig) auf Android.
- Beim Bearbeiten von Text mit einem IME wird jetzt das `input`-Ereignis gesendet, sobald sich der Inhalt des bearbeiteten Elements geändert hat; dies geschieht nachdem das `compositionupdate`-Ereignis gesendet wurde, um anzuzeigen, dass sich der Text des IME geändert hat. Sie können daher den `input`-Ereignishandler verwenden, um Änderungen am tatsächlichen Inhalt des Elements zu überwachen.
- [`DOMError`](/de/docs/Web/API/DOMError) wie im DOM-4-Spezifikation definiert wurde implementiert.
- Die Methode [`Document.createNodeIterator()`](/de/docs/Web/API/Document/createNodeIterator) wurde aktualisiert, um der DOM4-Spezifikation zu entsprechen. Dies macht die Parameter `whatToShow` und `filter` optional und entfernt den nicht standardmäßigen vierten Parameter `entityReferenceExpansion`.
- Die Methode [`Blob`](/de/docs/Web/API/Blob) `slice()` war von einem Fehler betroffen, der verhinderte, dass sie `start`- und `end`-Werte außerhalb der Reichweite eines 64-Bit-Ganzzahls ordnungsgemäß akzeptierte; dies wurde behoben.
- Die Methode [`element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) berücksichtigt jetzt den Effekt von [CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms) bei der Berechnung des Begrenzungsrechtecks des Elements.
- Die Eigenschaft `crossOrigin` wird jetzt von [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) unterstützt.

#### Neue WebAPIs

- Network Information API: Experimentelle Unterstützung für [`window.navigator.connection`](/de/docs/Web/API/Navigator/connection) wurde hinzugefügt (mit Präfix).
- WebTelephony API: `window.navigator.mozTelephony` wurde implementiert und bietet Unterstützung für das Wählen, Annehmen und Verwalten von Telefonanrufen auf einem Gerät.
- WebSMS API: `window.navigator.mozSms` ist jetzt für mobile Geräte verfügbar, um SMS-Textnachrichten zu senden.
- Bildschirmhelligkeits-API: `window.screen.mozEnabled` und `window.screen.mozBrightness` wurden hinzugefügt, um den Bildschirm eines Geräts zu steuern.

### SVG

- Firefox implementiert jetzt die `SVGTests`-DOM-API, siehe [Firefox-Bug 607854](https://bugzil.la/607854).
- Die [`SVGStringList`](/de/docs/Web/API/SVGStringList)-DOM-Schnittstelle unterstützt die nicht standardmäßige `length`-Eigenschaft, siehe [Firefox-Bug 711958](https://bugzil.la/711958).

### MathML

- Um die Ausrichtung von MathML-Formeln zu steuern, wird das `dir`-Attribut jetzt auf den {{MathMLElement("math")}}, {{MathMLElement("mrow")}} und {{MathMLElement("mstyle")}}-Elementen sowie auf [MathML-Token-Elementen](/de/docs/Web/MathML/Reference/Element#token_elements) unterstützt. Dies ist besonders wichtig für einige [arabische mathematische Notationen](https://www.w3.org/TR/arabic-math/).
- Das in MathML3 definierte Ausrichtungsattribut `align` wurde für {{MathMLElement("munder")}}, {{MathMLElement("mover")}} und {{MathMLElement("munderover")}} implementiert.

### Netzwerk

- Bisher meldete Gecko den Schließungscode `CLOSE_NORMAL`, wenn ein WebSocket-Kanal aufgrund eines unerwarteten Fehlers geschlossen wurde oder wenn er aufgrund einer Fehlerbedingung geschlossen wurde, die die Spezifikation nicht abdeckt. Jetzt wird stattdessen `CLOSE_GOING_AWAY` gemeldet.

### Entwicklerwerkzeuge

- Die [Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) speichert jetzt Fehlermeldungen und Protokolleinträge, die mit [`console.log()`](/de/docs/Web/API/console/log_static) hinzugefügt wurden, wenn die Konsole nicht geöffnet ist, und zeigt sie an, wenn die Konsole geöffnet wird.
- Sie können jetzt den Zoom-Level, das Schwenken und die Rotation in der [3D-Ansicht](https://firefox-source-docs.mozilla.org/devtools-user/3d_view/index.html) zurücksetzen, indem Sie die "r"-Taste drücken.
- Sie können jetzt Knoten in der [3D-Ansicht](https://firefox-source-docs.mozilla.org/devtools-user/3d_view/index.html) ausblenden, indem Sie die "x"-Taste drücken, nachdem Sie sie ausgewählt haben.
- Der [Quellcode-Editor](https://firefox-source-docs.mozilla.org/devtools-user/keyboard_shortcuts/index.html#source-editor) bietet mehrere neue Bearbeitungsfunktionen und Tastenkombinationen; Weitere Informationen finden Sie unter [Verwenden des Quellcode-Editors](https://firefox-source-docs.mozilla.org/devtools-user/keyboard_shortcuts/index.html#source-editor).

Mozilla arbeitet an der Integration eigener Web-Entwickler-Tools, die das beliebte [Firebug](https://getfirebug.com/)-Add-on ergänzen. Sie können mehr Informationen über diese Tools sowie eine Liste von Ressourcen außerhalb von Firefox finden, die Ihnen bei der Webentwicklung helfen. Die vollständige Liste befindet sich unter [Web developer tools](https://firefox-source-docs.mozilla.org/devtools-user/index.html).

### Verschiedene Änderungen

- Die GEOSTD8-Zeichenkodierung, die nie vollständig unterstützt wurde, wird nicht mehr unterstützt.

## Änderungen für Mozilla- und Add-on-Entwickler

### JavaScript-Code-Module

#### source-editor.jsm

- Die Methode `resetUndo()` wurde hinzugefügt; diese ermöglicht es, den Undo-Stack zu löschen.
- Der Quellcode-Editor bietet jetzt Methoden zur Bereitstellung von Suchfunktionen: `find()`, `findNext()` und `findPrevious()`.

### XUL

- Die Definition der Werte für das `chromemargin`-Attribut hat sich leicht geändert, um es einfacher zu machen, plattformübergreifenden XUL-Code gut aussehen zu lassen auf Plattformen mit unterschiedlichen standardmäßigen Fensterrahmenbreiten.

### XPCOM

- `nsISupports`-Proxys werden nicht länger unterstützt. Sie sollten stattdessen Runnables verwenden.
- Firefox 11 änderte das Verhalten von `Components.utils.getWeakReference()`, um eine Ausnahme auszulösen, wenn die Objektreferenz null ist; das vorherige Verhalten des stillen Scheiterns wurde wiederhergestellt.

### XPConnect

- Der `PRUint64`-Datentyp war bei Verwendung mit XPConnect fälschlicherweise im Wesentlichen identisch mit `PRint64`. Dies wurde behoben.

### Schnittstellenänderungen

- Die `nsIScreen_MOZILLA_2_0_BRANCH`-Schnittstelle wurde in `nsIScreen` zusammengeführt. Die in dieser Schnittstelle definierten APIs (zur Steuerung der minimalen Bildschirmhelligkeit) waren zuvor nicht dokumentiert, sind es jetzt aber.
- Die `nsIScriptError2`-Schnittstelle wurde in `nsIScriptError` integriert.
- `nsIDownloadManager.addDownload()` wird jetzt asynchron statt synchron behandelt.
- Die Methode `imgIContainerObserver.frameChanged()` erhält jetzt als ersten Parameter ein `imgIRequest`-Objekt, das die entsprechende Anfrage identifiziert.
- Die Methode `nsIDOMWindowUtils.sendTouchEvent()` wurde hinzugefügt, um Touch-Ereignisse zu synthetisieren.
- Sie können jetzt den angegebenen Inhalt vertikal in die Mitte der Ansicht scrollen, indem Sie `SCROLL_CENTER_VERTICALLY` als Scrollkonstante beim Aufrufen von `nsISelectionController.scrollSelectionIntoView()` angeben.
- Das neue Attribut `nsIMemoryMultiReporter.explicitNonHeap` wurde hinzugefügt; dies ist eine effizientere Möglichkeit, die Summe aller Messungen des Multi-Reporters zu erhalten, die mit "explicit" beginnen **und** vom Typ `KIND_NONHEAP` sind.
- Das Attribut `nsIDOMWindowUtils.paintingSuppressed` wurde hinzugefügt; dieser boolesche Wert zeigt an, ob das Zeichnen derzeit in dem Fenster unterdrückt wird oder nicht. Dies wird auf mobilen Geräten verwendet, um ein federndes Rendering zu verhindern, das auftritt, wenn versucht wird, die Seite zu zeichnen, bevor genügend Inhalt verfügbar ist, um sie reibungslos darzustellen.
- Die `nsIDocCharset`- und `nsIDocumentCharsetInfo`-Schnittstellen wurden in `nsIDocShell` zusammengeführt. Im Rahmen dieser Arbeit wurde das alte Attribut `forcedDetector` entfernt; es hat ohnehin nie etwas bewirkt.

### SpiderMonkey

- `JSThread` wurde eliminiert.
- `JSThreadData` wurde in `JSRuntime` integriert.

### Bauen

- Beim Erstellen unter Windows müssen Sie das Windows 7 SDK installiert haben.

### Andere Änderungen

- Die Editor-Komponente (bekannt als Midas) akzeptiert jetzt nur noch Ereignisse von privilegiertem Code.
