---
title: Firefox 12 für Entwickler
slug: Mozilla/Firefox/Releases/12
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Firefox 12 wurde am 24. April 2012 veröffentlicht. Diese Seite fasst die Änderungen in Firefox 12 zusammen, die Entwickler betreffen. Dieser Artikel bietet Informationen über die neuen Funktionen und die wichtigsten behobenen Fehler in dieser Version sowie Links zu detaillierterer Dokumentation sowohl für Webentwickler als auch Add-on-Entwickler.

## Änderungen für Webentwickler

### HTML

- Das `title`-Attribut unterstützt jetzt Zeilenumbrüche, um mehrzeilige Tooltips zu ermöglichen.
- Wenn JavaScript deaktiviert ist, wurde das {{HTMLElement("canvas")}}-Element anstelle der Anzeige des Fallback-Inhalts gemäß der [Spezifikation](https://html.spec.whatwg.org/multipage/canvas.html) gerendert. Jetzt wird stattdessen der Fallback-Inhalt gerendert.
- Das `crossorigin`-Attribut wird jetzt auf {{HTMLElement("video")}} unterstützt.

### CSS

- Unterstützung für die {{cssxref("text-align-last")}}-Eigenschaft wurde hinzugefügt (mit Präfix).

### JavaScript

- Unterstützung für scharfe Variablen (eine nicht standardisierte Erweiterung von Netscape) wurde entfernt.
- {{jsxref("ArrayBuffer.prototype.slice()")}} wurde implementiert.

### DOM

- [`DOMParser`](/de/docs/Web/API/DOMParser) unterstützt jetzt das Parsen von HTML-Dokumentfragmenten.
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) unterstützt jetzt Timeouts mit der `timeout`-Eigenschaft und dem "timeout"-Ereignis sowie den `ontimeout`-Ereignis-Handler auf der [`XMLHttpRequestEventTarget`](/de/docs/Web/API/XMLHttpRequestEventTarget)-Schnittstelle.
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) kann jetzt von [`data:` URLs](/de/docs/Web/URI/Reference/Schemes/data) laden.
- Beim Herunterladen großer Datenmengen werden [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) Fortschrittsereignis-Handler jetzt periodisch aufgerufen, wenn der `responseType` auf "moz-blob" gesetzt und die Antwort ein [`Blob`](/de/docs/Web/API/Blob) ist, der alle bisher empfangenen Daten enthält. Dies ermöglicht, dass Fortschritts-Handler Daten verarbeiten, ohne auf deren vollständiges Eintreffen warten zu müssen.
- Gecko unterstützt jetzt [Multi-Touch](/de/docs/Web/API/Touch_events) (anstatt nur einzelne Berührungen gleichzeitig) auf Android.
- Beim Bearbeiten von Text mit einem IME wird das `input`-Ereignis jetzt immer gesendet, wenn der Inhalt des bearbeiteten Elements geändert wurde; dies erfolgt nach dem Senden des `compositionupdate`-Ereignisses, um anzuzeigen, dass der Text des IME geändert wurde. Sie können den `input`-Ereignis-Handler verwenden, um Änderungen am tatsächlichen Inhalt des Elements zu überwachen.
- [`DOMError`](/de/docs/Web/API/DOMError), wie in der DOM 4-Spezifikation definiert, wurde implementiert.
- Die Methode [`Document.createNodeIterator()`](/de/docs/Web/API/Document/createNodeIterator) wurde aktualisiert, um der DOM4-Spezifikation zu entsprechen. Dies macht die Parameter `whatToShow` und `filter` optional und entfernt den nicht standardmäßigen vierten Parameter `entityReferenceExpansion`.
- Die `slice()`-Methode der [`Blob`](/de/docs/Web/API/Blob)-Schnittstelle war von einem Fehler betroffen, der verhinderte, dass sie `start`- und `end`-Werte außerhalb des Bereichs eines vorzeichenbehafteten 64-Bit-Integers richtig akzeptierte; dies wurde behoben.
- Die Methode [`element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) berücksichtigt nun die Wirkung von [CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms), wenn das Begrenzungsrechteck des Elements berechnet wird.
- Die `crossOrigin`-Eigenschaft wird jetzt von [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) unterstützt.

#### Neue WebAPIs

- Network Information API: Experimentelle Unterstützung für [`window.navigator.connection`](/de/docs/Web/API/Navigator/connection) wurde hinzugefügt (mit Präfix).
- WebTelephony API: `window.navigator.mozTelephony` wurde implementiert und bietet Unterstützung für das Wählen, Annehmen und Verwalten von Telefonanrufen auf einem Gerät.
- WebSMS API: `window.navigator.mozSms` ist jetzt auf mobilen Geräten verfügbar, um SMS-Textnachrichten zu senden.
- Screen Brightness API: `window.screen.mozEnabled` und `window.screen.mozBrightness` wurden hinzugefügt, um den Bildschirm des Geräts zu steuern.

### SVG

- Firefox implementiert jetzt die `SVGTests` DOM API, siehe [Firefox-Bug 607854](https://bugzil.la/607854)
- Die [`SVGStringList`](/de/docs/Web/API/SVGStringList) DOM-Schnittstelle unterstützt die nicht standardmäßige `length` Eigenschaft siehe [Firefox-Bug 711958](https://bugzil.la/711958)

### MathML

- Um die Schreibrichtung von MathML-Formeln zu steuern, wird das `dir`-Attribut jetzt auf den {{MathMLElement("math")}}, {{MathMLElement("mrow")}} und {{MathMLElement("mstyle")}}-Elementen sowie auf [MathML-Token-Elementen](/de/docs/Web/MathML/Reference/Element#token_elements) unterstützt. Dies ist besonders wichtig für einige [arabische mathematische Notationen](https://www.w3.org/TR/arabic-math/).
- Das Ausrichtungsattribut `align`, das in MathML3 definiert wurde, wurde für {{MathMLElement("munder")}}, {{MathMLElement("mover")}} und {{MathMLElement("munderover")}} implementiert.

### Netzwerk

- Zuvor meldete Gecko den Schließcode `CLOSE_NORMAL`, wenn ein WebSocket-Kanal aufgrund eines unerwarteten Fehlers geschlossen wurde oder wenn er aufgrund einer Fehlersituation geschlossen wurde, die die Spezifikation nicht abdeckt. Jetzt wird `CLOSE_GOING_AWAY` stattdessen gemeldet.

### Entwicklerwerkzeuge

- Die [Web-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) speichert jetzt Fehlermeldungen und Logeinträge, die mit [`console.log()`](/de/docs/Web/API/console/log_static) hinzugefügt wurden, wenn die Konsole nicht geöffnet ist, und zeigt sie an, wenn die Konsole geöffnet wird.
- Sie können jetzt die Zoomstufe, das Verschieben und die Drehung in der [3D-Ansicht](https://firefox-source-docs.mozilla.org/devtools-user/3d_view/index.html) zurücksetzen, indem Sie die "r"-Taste drücken.
- Sie können jetzt Knoten in der [3D-Ansicht](https://firefox-source-docs.mozilla.org/devtools-user/3d_view/index.html) ausblenden, indem Sie die "x"-Taste nach Auswahl des Knotens drücken.
- Der [Quell-Editor](https://firefox-source-docs.mozilla.org/devtools-user/keyboard_shortcuts/index.html#source-editor) hat mehrere neue Bearbeitungsfunktionen und Tastenkombinationen; Details finden Sie unter [Verwendung des Quell-Editors](https://firefox-source-docs.mozilla.org/devtools-user/keyboard_shortcuts/index.html#source-editor).

Mozilla arbeitet an der Integration eigener Webentwickler-Tools, die das beliebte [Firebug](https://getfirebug.com/)-Add-on ergänzen. Sie können weitere Informationen über diese Tools sowie eine Liste externer Ressourcen zu Firefox erhalten, die Ihnen bei Ihrer Webentwicklung helfen. Die vollständige Liste befindet sich unter [Web-Entwicklerwerkzeuge](https://firefox-source-docs.mozilla.org/devtools-user/index.html).

### Verschiedene Änderungen

- Der GEOSTD8-Zeichensatz, der nie vollständig unterstützt wurde, wird überhaupt nicht mehr unterstützt.

## Änderungen für Mozilla- und Add-on-Entwickler

### JavaScript-Code-Module

#### source-editor.jsm

- Die Methode `resetUndo()` wurde hinzugefügt; sie ermöglicht es, den Rückgängig-Stapel zu leeren.
- Der Quelleneditor bietet jetzt Methoden für Suchfunktionen: `find()`, `findNext()` und `findPrevious()`.

### XUL

- Die Definition der Werte für das `chromemargin`-Attribut hat sich leicht geändert, um es einfacher zu machen, plattformübergreifenden XUL-Code auf Plattformen mit unterschiedlichen Standardfensterrahmenbreiten gut aussehen zu lassen.

### XPCOM

- `nsISupports`-Proxies werden nicht mehr unterstützt. Sie sollten stattdessen Runnables verwenden.
- Firefox 11 änderte das Verhalten von `Components.utils.getWeakReference()`, um eine Ausnahme auszulösen, wenn die Objektreferenz null ist; das vorherige Verhalten des stillen Fehlschlags wurde wiederhergestellt.

### XPConnect

- Der `PRUint64`-Datentyp war in XPConnect fälschlicherweise im Wesentlichen identisch mit `PRint64`. Dies wurde behoben.

### Schnittstellenänderungen

- Die `nsIScreen_MOZILLA_2_0_BRANCH`-Schnittstelle wurde in `nsIScreen` zusammengeführt. Die APIs, die in dieser Schnittstelle definiert sind (zur Steuerung der minimalen Bildschirmhelligkeit), waren bisher nicht dokumentiert, sind es aber jetzt.
- Die `nsIScriptError2`-Schnittstelle wurde in `nsIScriptError` zusammengeführt.
- `nsIDownloadManager.addDownload()` wird jetzt asynchron anstatt synchron behandelt.
- Die `imgIContainerObserver.frameChanged()`-Methode erhält jetzt als ersten Parameter ein `imgIRequest`-Objekt, das die entsprechende Anfrage identifiziert.
- Die Methode `nsIDOMWindowUtils.sendTouchEvent()` wurde hinzugefügt, um die Erstellung von Berührungsereignissen zu ermöglichen.
- Sie können jetzt den angegebenen Inhalt in die vertikale Mitte der Ansicht scrollen, indem Sie `SCROLL_CENTER_VERTICALLY` als Scroll-Konstante beim Aufruf von `nsISelectionController.scrollSelectionIntoView()` angeben.
- Das neue `nsIMemoryMultiReporter.explicitNonHeap`-Attribut wurde hinzugefügt; dies ist eine effizientere Möglichkeit, die Summe aller Messungen des Multi-Reporters zu erhalten, die mit "explicit" beginnen **und** von der Art `KIND_NONHEAP` sind.
- Das `nsIDOMWindowUtils.paintingSuppressed`-Attribut wurde hinzugefügt; dieser boolesche Wert gibt an, ob das Zeichnen derzeit im Fenster unterdrückt wird oder nicht. Dies wird auf mobilen Geräten verwendet, um ein hüpfendes Rendering zu verhindern, das auftritt, wenn versucht wird, die Seite zu zeichnen, bevor genügend Inhalt verfügbar ist, um dies reibungslos zu tun.
- Die `nsIDocCharset`- und die `nsIDocumentCharsetInfo`-Schnittstellen wurden in `nsIDocShell` zusammengeführt. Im Zuge dieser Arbeit wurde das alte `forcedDetector`-Attribut entfernt; es bewirkte nie etwas.

### SpiderMonkey

- `JSThread` wurde eliminiert.
- `JSThreadData` wurde in `JSRuntime` zusammengeführt.

### Build

- Beim Erstellen auf Windows muss das Windows 7 SDK installiert sein.

### Weitere Änderungen

- Die Editor-Komponente (bekannt als Midas) akzeptiert jetzt nur noch Ereignisse von privilegiertem Code.

## Siehe auch

{{Firefox_for_developers}}
