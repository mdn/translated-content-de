---
title: Firefox 12 für Entwickler
slug: Mozilla/Firefox/Releases/12
l10n:
  sourceCommit: 4d9320f9857fb80fef5f3fe78e3d09b06eb0ebbd
---

{{FirefoxSidebar}}

Firefox 12 wurde am 24. April 2012 veröffentlicht. Diese Seite fasst die Änderungen in Firefox 12 zusammen, die Entwickler betreffen. Dieser Artikel bietet Informationen über die neuen Funktionen und wesentlichen behobenen Fehler in dieser Version sowie Links zu detaillierterer Dokumentation für Webentwickler und Add-on-Entwickler.

## Änderungen für Webentwickler

### HTML

- Das `title`-Attribut unterstützt nun Zeilenumbrüche, um mehrzeilige Tooltips zu ermöglichen.
- Wenn JavaScript deaktiviert ist, wurde das {{HTMLElement("canvas")}}-Element anstelle der Fallback-Inhalte gemäß der [Spezifikation](https://html.spec.whatwg.org/multipage/canvas.html) gerendert. Nun werden stattdessen die Fallback-Inhalte dargestellt.
- Das `crossorigin`-Attribut wird jetzt bei {{HTMLElement("video")}} unterstützt.

### CSS

- Unterstützung für die {{cssxref("text-align-last")}}-Eigenschaft wurde hinzugefügt (mit Präfix).

### JavaScript

- Unterstützung für sogenannte sharp variables (eine nicht standardisierte Erweiterung von Netscape) wurde entfernt.
- {{jsxref("ArrayBuffer.prototype.slice()")}} wurde implementiert.

### DOM

- [`DOMParser`](/de/docs/Web/API/DOMParser) unterstützt nun das Parsen von HTML-Dokumentfragmenten.
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) unterstützt jetzt Timeouts über die `timeout`-Eigenschaft und das "timeout"-Event sowie den `ontimeout`-Event-Handler in der [`XMLHttpRequestEventTarget`](/de/docs/Web/API/XMLHttpRequestEventTarget)-Schnittstelle.
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) kann nun von [`data:` URLs](/de/docs/Web/URI/Reference/Schemes/data) laden.
- Beim Herunterladen großer Datenmengen werden [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Progress-Event-Handler nun periodisch aufgerufen, wenn der `responseType` auf "moz-blob" gesetzt ist und die Antwort ein [`Blob`](/de/docs/Web/API/Blob) enthält, der alle bisher empfangenen Daten enthält. Dies ermöglicht es Progress-Handlern, mit der Datenverarbeitung zu beginnen, ohne auf das vollständige Herunterladen zu warten.
- Gecko unterstützt jetzt [Multi-Touch](/de/docs/Web/API/Touch_events) (im Gegensatz zu nur einem einzelnen Touch gleichzeitig) auf Android.
- Während der Texteingabe über ein IME (Input Method Editor) wird das `input`-Event nun immer dann gesendet, wenn der Inhalt des zu bearbeitenden Elements geändert wurde; dies geschieht nach dem `compositionupdate`-Event, das anzeigt, dass der Text des IMEs geändert wurde. Sie können die `input`-Event-Handler verwenden, um Änderungen des tatsächlichen Inhalts des Elements zu überwachen.
- [`DOMError`](/de/docs/Web/API/DOMError) wie im DOM-4-Spezifikation definiert, wurde implementiert.
- Die Methode [`Document.createNodeIterator()`](/de/docs/Web/API/Document/createNodeIterator) wurde aktualisiert, um der DOM4-Spezifikation zu entsprechen. Dies macht die Parameter `whatToShow` und `filter` optional und entfernt den nicht standardisierten vierten Parameter, `entityReferenceExpansion`.
- Die `slice()`-Methode der [`Blob`](/de/docs/Web/API/Blob)-Schnittstelle wurde durch einen Fehler beeinträchtigt, der verhinderte, dass sie korrekt `start`- und `end`-Werte außerhalb des Bereichs einer signierten 64-Bit-Ganzzahl akzeptiert; dieser Fehler wurde behoben.
- Die Methode [`element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) berücksichtigt nun die Auswirkungen von [CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms) bei der Berechnung des Begrenzungsrechtecks des Elements.
- Die Eigenschaft `crossOrigin` wird jetzt von [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) unterstützt.

#### Neue WebAPIs

- Network Information API: Experimentelle Unterstützung für [`window.navigator.connection`](/de/docs/Web/API/Navigator/connection) wurde hinzugefügt (mit Präfix).
- WebTelephony API: `window.navigator.mozTelephony` wurde implementiert und bietet Unterstützung für das Wählen, Annehmen und Verwalten von Telefonanrufen auf einem Gerät.
- WebSMS API: `window.navigator.mozSms` ist jetzt auf Mobilgeräten verfügbar, um SMS-Textnachrichten zu senden.
- Bildschirmhelligkeits-API: `window.screen.mozEnabled` und `window.screen.mozBrightness` wurden hinzugefügt, um die Bildschirmhelligkeit des Geräts zu steuern.

### SVG

- Firefox implementiert nun die `SVGTests`-DOM-API, siehe [Firefox Bug 607854](https://bugzil.la/607854).
- Die [`SVGStringList`](/de/docs/Web/API/SVGStringList)-DOM-Schnittstelle unterstützt nun die nicht standardisierte `length`-Eigenschaft, siehe [Firefox Bug 711958](https://bugzil.la/711958).

### MathML

- Zur Steuerung der Schreibrichtung von MathML-Formeln wird das `dir`-Attribut jetzt bei den Elementen {{MathMLElement("math")}}, {{MathMLElement("mrow")}} und {{MathMLElement("mstyle")}} sowie bei den [MathML-Token-Elementen](/de/docs/Web/MathML/Element#token_elements) unterstützt. Dies ist insbesondere für einige [arabische mathematische Notationen](https://www.w3.org/TR/arabic-math/) von Bedeutung.
- Das in MathML3 definierte Ausrichtungsattribut `align` wurde für {{MathMLElement("munder")}}, {{MathMLElement("mover")}} und {{MathMLElement("munderover")}} implementiert.

### Netzwerke

- Bisher hat Gecko den Schließcode `CLOSE_NORMAL` gemeldet, wenn ein WebSocket-Kanal aufgrund eines unerwarteten Fehlers oder einer Fehlbedingung geschlossen wurde, die von der Spezifikation nicht abgedeckt wird. Jetzt wird stattdessen `CLOSE_GOING_AWAY` gemeldet.

### Entwickler-Tools

- Die [Web-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) speichert jetzt Fehlermeldungen und Log-Einträge, die mit [`console.log()`](/de/docs/Web/API/Console/log_static) hinzugefügt wurden, zwischenspeichert sie, wenn die Konsole derzeit nicht geöffnet ist, und zeigt sie an, wenn die Konsole geöffnet wird.
- Sie können jetzt die Zoomstufe, das Schwenken und die Drehung in der [3D-Ansicht](https://firefox-source-docs.mozilla.org/devtools-user/3d_view/index.html) zurücksetzen, indem Sie die Taste "r" drücken.
- Sie können jetzt Knoten in der [3D-Ansicht](https://firefox-source-docs.mozilla.org/devtools-user/3d_view/index.html) ausblenden, indem Sie die "x"-Taste drücken, nachdem Sie sie ausgewählt haben.
- Der [Source Editor](https://firefox-source-docs.mozilla.org/devtools-user/keyboard_shortcuts/index.html#source-editor) bietet mehrere neue Bearbeitungsfunktionen und Tastenkombinationen; siehe [Using the Source Editor](https://firefox-source-docs.mozilla.org/devtools-user/keyboard_shortcuts/index.html#source-editor) für Details.

Mozilla arbeitet an der Integration eigener Webentwickler-Tools, die das beliebte [Firebug](https://getfirebug.com/)-Add-on ergänzen. Weitere Informationen zu diesen Tools sowie eine Liste externer Ressourcen zu Firefox, die Sie bei Ihrer Webentwicklung unterstützen, finden Sie unter [Webentwickler-Tools](https://firefox-source-docs.mozilla.org/devtools-user/index.html).

### Sonstige Änderungen

- Die Zeichenkodierung GEOSTD8, die nie vollständig unterstützt wurde, wird jetzt überhaupt nicht mehr unterstützt.

## Änderungen für Mozilla- und Add-on-Entwickler

### JavaScript-Code-Module

#### source-editor.jsm

- Die Methode `resetUndo()` wurde hinzugefügt; damit können Sie den Undo-Stack löschen.
- Der Source Editor bietet jetzt Methoden zur Bereitstellung von Suchmöglichkeiten: `find()`, `findNext()` und `findPrevious()`.

### XUL

- Die Definition der Werte für das `chromemargin`-Attribut wurde geringfügig geändert, um es zu erleichtern, XUL-Code plattformübergreifend ansprechend aussehen zu lassen, obwohl unterschiedliche Standard-Fensterrahmenbreiten bestehen.

### XPCOM

- `nsISupports`-Proxies werden nicht mehr unterstützt. Sie sollten stattdessen Runnables verwenden.
- Firefox 11 änderte das Verhalten von `Components.utils.getWeakReference()`, sodass eine Ausnahme geworfen wird, wenn die Objektreferenz null ist; das vorherige Verhalten, still zu scheitern, wurde wiederhergestellt.

### XPConnect

- Der `PRUint64`-Datentyp war in XPConnect fälschlicherweise im Wesentlichen identisch mit `PRint64`. Dieser Fehler wurde behoben.

### Schnittstellenänderungen

- Die Schnittstelle `nsIScreen_MOZILLA_2_0_BRANCH` wurde in `nsIScreen` zusammengeführt. Die in dieser Schnittstelle definierten APIs (zur Steuerung der minimalen Bildschirmhelligkeit) waren bisher nicht dokumentiert, jetzt jedoch schon.
- Die Schnittstelle `nsIScriptError2` wurde in `nsIScriptError` zusammengeführt.
- `nsIDownloadManager.addDownload()` wird jetzt asynchron und nicht mehr synchron verarbeitet.
- Die Methode `imgIContainerObserver.frameChanged()` erhält nun als ersten Parameter ein `imgIRequest`-Objekt, das die zugehörige Anfrage identifiziert.
- Die Methode `nsIDOMWindowUtils.sendTouchEvent()` wurde hinzugefügt, um Touch-Events zu synthetisieren.
- Sie können jetzt den angegebenen Inhalt vertikal in die Mitte des Viewports scrollen, indem Sie `SCROLL_CENTER_VERTICALLY` als Scroll-Konstante angeben, wenn Sie `nsISelectionController.scrollSelectionIntoView()` aufrufen.
- Das neue Attribut `nsIMemoryMultiReporter.explicitNonHeap` wurde hinzugefügt; dies ist eine effizientere Möglichkeit, die Summe aller Messungen eines Multi-Reporters zu erhalten, deren Pfad mit "explicit" beginnt **und** vom Typ `KIND_NONHEAP` ist.
- Das Attribut `nsIDOMWindowUtils.paintingSuppressed` wurde hinzugefügt; dieser boolesche Wert gibt an, ob das Zeichnen auf dem Fenster derzeit unterdrückt wird oder nicht. Dies wird auf mobilen Geräten verwendet, um unruhiges Rendering zu vermeiden, das auftritt, wenn Versuche, die Seite zu zeichnen, beginnen, bevor genügend Inhalte verfügbar sind, um diese sanft darzustellen.
- Die Schnittstellen `nsIDocCharset` und `nsIDocumentCharsetInfo` wurden in `nsIDocShell` zusammengeführt. Im Zuge dieser Arbeit wurde das alte `forcedDetector`-Attribut entfernt; es hat nie eine Funktion erfüllt.

### SpiderMonkey

- `JSThread` wurde entfernt.
- `JSThreadData` wurde in `JSRuntime` zusammengeführt.

### Build-System

- Beim Bauen unter Windows muss das Windows 7 SDK installiert sein.

### Andere Änderungen

- Die Editor-Komponente (auch als Midas bekannt) akzeptiert jetzt nur noch Events von privilegiertem Code.

## Siehe auch

{{Firefox_for_developers}}
