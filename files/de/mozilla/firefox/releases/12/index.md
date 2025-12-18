---
title: Firefox 12 Versionshinweise für Entwickler
short-title: Firefox 12
slug: Mozilla/Firefox/Releases/12
l10n:
  sourceCommit: 83f4e64da466670c3700110da364546253eae127
---

Firefox 12 wurde am 24. April 2012 veröffentlicht. Diese Seite fasst die Änderungen in Firefox 12 zusammen, die Entwickler betreffen. Dieser Artikel bietet Informationen über die neuen Funktionen und wichtige behobene Fehler in dieser Version sowie Links zu detaillierteren Dokumentationen sowohl für Web-Entwickler als auch für Add-on-Entwickler.

## Änderungen für Webentwickler

### HTML

- Das `title`-Attribut unterstützt jetzt Zeilenumbrüche, um mehrzeilige Tooltips zu ermöglichen.
- Wenn JavaScript deaktiviert ist, wurde das {{HTMLElement("canvas")}}-Element gerendert, anstatt wie in der [Spezifikation](https://html.spec.whatwg.org/multipage/canvas.html) vorgesehen, den Fallback-Inhalt anzuzeigen. Jetzt wird stattdessen der Fallback-Inhalt gerendert.
- Das `crossorigin`-Attribut wird jetzt auf {{HTMLElement("video")}} unterstützt.

### CSS

- Unterstützung für die {{cssxref("text-align-last")}}-Eigenschaft wurde hinzugefügt (mit Präfix).

### JavaScript

- Die Unterstützung für scharfe Variablen (eine nicht standardmäßige Erweiterung von Netscape) wurde eingestellt.
- {{jsxref("ArrayBuffer.prototype.slice()")}} wurde implementiert.

### DOM

- [`DOMParser`](/de/docs/Web/API/DOMParser) unterstützt jetzt das Parsen von HTML-Dokumentfragmenten.
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) unterstützt jetzt Timeouts mit der `timeout`-Eigenschaft und dem "timeout"-Ereignis sowie dem `ontimeout`-Ereignishandler auf der [`XMLHttpRequestEventTarget`](/de/docs/Web/API/XMLHttpRequestEventTarget)-Schnittstelle.
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) kann jetzt von [`data:` URLs](/de/docs/Web/URI/Reference/Schemes/data) laden.
- Beim Herunterladen großer Datenmengen werden [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Fortschrittsereignishandler jetzt periodisch aufgerufen, wenn der `responseType` auf "moz-blob" gesetzt ist und die Antwort ein [`Blob`](/de/docs/Web/API/Blob) enthält, das alle bisher empfangenen Daten enthält. Dies ermöglicht es Fortschritts-Handlern, die Daten zu verarbeiten, ohne auf den vollständigen Empfang warten zu müssen.
- Gecko unterstützt jetzt [Multi-Touch](/de/docs/Web/API/Touch_events) (anstatt nur jeweils einzelne Berührungen) auf Android.
- Beim Bearbeiten von Text mit einem IME wird jetzt das `input`-Ereignis gesendet, wann immer sich der Inhalt des bearbeiteten Elements geändert hat; dies geschieht nachdem das `compositionupdate`-Ereignis gesendet wurde, um anzuzeigen, dass der Text des IME geändert wurde. Sie können den `input`-Ereignishandler verwenden, um Änderungen am tatsächlichen Inhalt des Elements zu überwachen.
- [`DOMError`](/de/docs/Web/API/DOMError) wurde gemäß der DOM 4-Spezifikation implementiert.
- Die Methode [`Document.createNodeIterator()`](/de/docs/Web/API/Document/createNodeIterator) wurde aktualisiert, um der DOM4-Spezifikation zu entsprechen. Dadurch werden die `whatToShow`- und `filter`-Parameter optional, und der nicht standardmäßige vierte Parameter `entityReferenceExpansion` entfällt.
- Die `slice()`-Methode der [`Blob`](/de/docs/Web/API/Blob)-Schnittstelle war von einem Fehler betroffen, der ihre ordnungsgemäße Annahme von `start`- und `end`-Werten außerhalb des Bereichs eines signierten 64-Bit-Ganzzahlwerts verhinderte; dies wurde behoben.
- Die Methode [`element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) berücksichtigt jetzt Effekt von [CSS-Transformationen](/de/docs/Web/CSS/Guides/Transforms/Using) bei der Berechnung des Begrenzungsrechtecks des Elements.
- Die `crossOrigin`-Eigenschaft wird jetzt von [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) unterstützt.

#### Neue APIs für das Web

- Network Information API: Experimentelle Unterstützung für [`window.navigator.connection`](/de/docs/Web/API/Navigator/connection) wurde hinzugefügt (mit Präfix).
- WebTelephony API: `window.navigator.mozTelephony` wurde implementiert und bietet Unterstützung für das Wählen, Beantworten und Verwalten von Anrufen auf einem Gerät.
- WebSMS API: `window.navigator.mozSms` ist jetzt für mobile Geräte verfügbar, um SMS-Nachrichten zu senden.
- Screen brightness API: `window.screen.mozEnabled` und `window.screen.mozBrightness` wurden hinzugefügt, um die Bildschirmhelligkeit des Geräts zu steuern.

### SVG

- Firefox implementiert jetzt die `SVGTests`-DOM-API, siehe [Firefox-Fehler 607854](https://bugzil.la/607854)
- Die [`SVGStringList`](/de/docs/Web/API/SVGStringList)-DOM-Schnittstelle unterstützt die nicht standardmäßige `length`-Eigenschaft, siehe [Firefox-Fehler 711958](https://bugzil.la/711958)

### MathML

- Um die Richtung von MathML-Formeln zu steuern, wird das `dir`-Attribut jetzt auf den {{MathMLElement("math")}}, {{MathMLElement("mrow")}} und {{MathMLElement("mstyle")}}-Elementen sowie auf den [MathML-Token-Elementen](/de/docs/Web/MathML/Reference/Element#token_elements) unterstützt. Dies ist besonders wichtig für einige [arabische mathematische Notationen](https://www.w3.org/TR/arabic-math/).
- Das im MathML3 definierte Ausrichtungsattribut `align` wurde für {{MathMLElement("munder")}}, {{MathMLElement("mover")}} und {{MathMLElement("munderover")}} implementiert.

### Netzwerke

- Bisher meldete Gecko den Schlusscode `CLOSE_NORMAL`, wenn ein WebSocket-Kanal aufgrund eines unerwarteten Fehlers geschlossen wurde oder wenn er aufgrund einer Fehlbedingung geschlossen wurde, die die Spezifikation nicht abdeckt. Jetzt wird stattdessen `CLOSE_GOING_AWAY` gemeldet.

### Entwicklerwerkzeuge

- Die [Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) speichert jetzt Fehlermeldungen und Log-Einträge, die mit [`console.log()`](/de/docs/Web/API/console/log_static) hinzugefügt wurden, wenn die Konsole derzeit nicht geöffnet ist, und zeigt diese an, wenn die Konsole geöffnet wird.
- Sie können jetzt das Zoomniveau, das Verschieben und die Rotation in der [3D-Ansicht](https://firefox-source-docs.mozilla.org/devtools-user/3d_view/index.html) durch Drücken der "r"-Taste zurücksetzen.
- Sie können jetzt Knoten in der [3D-Ansicht](https://firefox-source-docs.mozilla.org/devtools-user/3d_view/index.html) ausblenden, indem Sie die "x"-Taste drücken, nachdem Sie sie ausgewählt haben.
- Der [Quellcode-Editor](https://firefox-source-docs.mozilla.org/devtools-user/keyboard_shortcuts/index.html#source-editor) hat mehrere neue Bearbeitungsfunktionen und Tastenkürzel; siehe [Verwendung des Quellcode-Editors](https://firefox-source-docs.mozilla.org/devtools-user/keyboard_shortcuts/index.html#source-editor) für Details.

Mozilla arbeitet an der Integration eigener Web-Entwicklerwerkzeuge, die das beliebte [Firebug](https://getfirebug.com/)-Add-on ergänzen. Weitere Informationen über diese Werkzeuge sowie eine Liste von Ressourcen außerhalb von Firefox, die Ihnen bei Ihrer Webentwicklung helfen, finden Sie in den [Werkzeugen für Webentwickler](https://firefox-source-docs.mozilla.org/devtools-user/index.html).

### Verschiedene Änderungen

- Die GEOSTD8-Zeichensatz, die nie vollständig unterstützt wurde, wird nicht mehr unterstützt.

## Änderungen für Mozilla- und Add-on-Entwickler

### JavaScript-Code-Module

#### source-editor.jsm

- Die Methode `resetUndo()` wurde hinzugefügt; damit können Sie den Undo-Stack löschen.
- Der Quellcode-Editor bietet jetzt Methoden zur Bereitstellung von Suchfunktionalitäten: `find()`, `findNext()` und `findPrevious()`.

### XUL

- Die Definition der Werte für das `chromemargin`-Attribut hat sich geringfügig geändert, um es einfacher zu machen, plattformübergreifenden XUL-Code auf Plattformen mit unterschiedlichen Standardfensterrahmenbreiten gut aussehen zu lassen.

### XPCOM

- `nsISupports`-Proxies werden nicht mehr unterstützt. Stattdessen sollten Sie Runnables verwenden.
- Firefox 11 hat das Verhalten von `Components.utils.getWeakReference()` so geändert, dass eine Ausnahme ausgelöst wird, wenn die Objektreferenz null ist; das vorherige Verhalten des stillen Scheiterns wurde wiederhergestellt.

### XPConnect

- Der `PRUint64`-Datentyp war im Wesentlichen identisch mit `PRint64`, wenn er mit XPConnect verwendet wurde. Dies wurde behoben.

### Schnittstellenänderungen

- Die `nsIScreen_MOZILLA_2_0_BRANCH`-Schnittstelle wurde in `nsIScreen` zusammengeführt. Die in dieser Schnittstelle definierten APIs (zur Steuerung der minimalen Bildschirmhelligkeit) waren zuvor nicht dokumentiert, aber jetzt sind sie es.
- Die `nsIScriptError2`-Schnittstelle wurde in `nsIScriptError` zusammengeführt.
- `nsIDownloadManager.addDownload()` wird jetzt asynchron statt synchron gehandhabt.
- Die Methode `imgIContainerObserver.frameChanged()` erhält jetzt als ersten Parameter ein `imgIRequest`-Objekt, das die entsprechende Anfrage identifiziert.
- Die Methode `nsIDOMWindowUtils.sendTouchEvent()` wurde hinzugefügt, um Touch-Ereignisse zu synthetisieren.
- Sie können jetzt den angegebenen Inhalt so scrollen, dass er vertikal in der Mitte der Ansicht liegt, indem Sie `SCROLL_CENTER_VERTICALLY` als Scroll-Konstante angeben, wenn Sie `nsISelectionController.scrollSelectionIntoView()` aufrufen.
- Das neue Attribut `nsIMemoryMultiReporter.explicitNonHeap` wurde hinzugefügt; dies ist eine effizientere Möglichkeit, die Summe aller Messungen des Multi-Reporters zu erhalten, die mit "explicit" beginnen und `KIND_NONHEAP` sind.
- Das Attribut `nsIDOMWindowUtils.paintingSuppressed` wurde hinzugefügt; dieser boolesche Wert zeigt an, ob das Zeichnen derzeit im Fenster unterdrückt wird oder nicht. Auf Mobilgeräten wird dies verwendet, um ein "bouncy"-Rendering zu verhindern, das auftritt, wenn der Versuch des Seitenzeichnens beginnt, bevor genügend Inhalt verfügbar ist, um ihn reibungslos darzustellen.
- Die Schnittstellen `nsIDocCharset` und `nsIDocumentCharsetInfo` wurden in `nsIDocShell` zusammengeführt. Im Rahmen dieser Arbeit wurde das alte Attribut `forcedDetector` entfernt; es hat nie etwas bewirkt.

### SpiderMonkey

- `JSThread` wurde eliminiert.
- `JSThreadData` wurde in `JSRuntime` zusammengeführt.

### Build

- Beim Erstellen unter Windows müssen Sie das Windows 7 SDK installiert haben.

### Weitere Änderungen

- Die Editor-Komponente (bekannt als Midas) akzeptiert jetzt nur noch Ereignisse von privilegiertem Code.
