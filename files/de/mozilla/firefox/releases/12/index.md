---
title: Firefox 12 für Entwickler
slug: Mozilla/Firefox/Releases/12
l10n:
  sourceCommit: 0d66181876fd29da72c99140f5828be05a1c9011
---

{{FirefoxSidebar}}

Firefox 12 wurde am 24. April 2012 veröffentlicht. Diese Seite fasst die Änderungen in Firefox 12 zusammen, die Entwickler betreffen. Dieser Artikel bietet Informationen zu den neuen Funktionen und den wichtigsten behobenen Fehlern in dieser Version, sowie Links zu detaillierteren Dokumentationen sowohl für Webentwickler als auch für Add-on-Entwickler.

## Änderungen für Webentwickler

### HTML

- Das `title`-Attribut unterstützt jetzt Zeilenumbrüche, um mehrzeilige Tooltips zu ermöglichen.
- Wenn JavaScript deaktiviert ist, wurde das {{HTMLElement("canvas")}}-Element anstelle der Anzeige des Fallback-Inhalts gemäß der [Spezifikation](https://html.spec.whatwg.org/multipage/canvas.html) gerendert. Jetzt wird stattdessen der Fallback-Inhalt angezeigt.
- Das `crossorigin`-Attribut wird jetzt auf {{HTMLElement("video")}} unterstützt.

### CSS

- Unterstützung für die {{cssxref("text-align-last")}}-Eigenschaft wurde hinzugefügt (mit Präfix).

### JavaScript

- Unterstützung für scharfe Variablen (eine nicht standardisierte Erweiterung von Netscape) wurde eingestellt.
- {{jsxref("ArrayBuffer.prototype.slice()")}} wurde implementiert.

### DOM

- [`DOMParser`](/de/docs/Web/API/DOMParser) unterstützt jetzt das Parsen von HTML-Dokumentfragmenten.
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) unterstützt jetzt Timeouts mit der `timeout`-Eigenschaft und dem "timeout"-Ereignis, sowie dem `ontimeout`-Event-Handler auf der [`XMLHttpRequestEventTarget`](/de/docs/Web/API/XMLHttpRequestEventTarget)-Schnittstelle.
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) kann jetzt von [`data:` URLs](/de/docs/Web/URI/Schemes/data) laden.
- Beim Herunterladen großer Datenmengen werden die Fortschritts-Ereignishandler von [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) jetzt periodisch aufgerufen, wenn `responseType` auf "moz-blob" gesetzt ist und die Antwort ein [`Blob`](/de/docs/Web/API/Blob) ist, das alle bisher empfangenen Daten enthält. So können Fortschritts-Handler damit beginnen, Daten zu verarbeiten, ohne auf den gesamten Empfang warten zu müssen.
- Gecko unterstützt jetzt [Multi-Touch](/de/docs/Web/API/Touch_events) (anstelle von nur Einzelberührungen) auf Android.
- Beim Bearbeiten von Text mit einem IME wird das `input`-Ereignis jetzt immer dann gesendet, wenn der Inhalt des bearbeiteten Elements geändert wurde; dies geschieht, nachdem das `compositionupdate`-Ereignis gesendet wurde, um anzuzeigen, dass der Text des IME geändert wurde. Sie können daher den `input`-Ereignishandler verwenden, um Änderungen am tatsächlichen Inhalt des Elements zu überwachen.
- [`DOMError`](/de/docs/Web/API/DOMError) wie in der DOM-4-Spezifikation definiert wurde implementiert.
- Die Methode [`Document.createNodeIterator()`](/de/docs/Web/API/Document/createNodeIterator) wurde aktualisiert, um der DOM4-Spezifikation zu entsprechen. Dadurch werden die Parameter `whatToShow` und `filter` optional und der nicht standardisierte vierte Parameter, `entityReferenceExpansion`, wird entfernt.
- Die `slice()`-Methode der [`Blob`](/de/docs/Web/API/Blob)-Schnittstelle war von einem Fehler betroffen, der verhinderte, dass sie `start`- und `end`-Werte akzeptiert, die außerhalb des Bereichs eines vorzeichenbehafteten 64-Bit-Ganzzahlwerts liegen; dies wurde behoben.
- Die Methode [`element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) berücksichtigt jetzt den Effekt von [CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms) bei der Berechnung des Begrenzungsrechtecks des Elements.
- Die `crossOrigin`-Eigenschaft wird jetzt von [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) unterstützt.

#### Neue WebAPIs

- Network Information API: Experimentelle Unterstützung für [`window.navigator.connection`](/de/docs/Web/API/Navigator/connection) wurde hinzugefügt (mit Präfix).
- WebTelephony API: `window.navigator.mozTelephony` wurde implementiert und bietet Unterstützung zum Wählen, Annehmen und Verwalten von Telefonanrufen auf einem Gerät.
- WebSMS API: `window.navigator.mozSms` ist jetzt für mobile Geräte verfügbar, um SMS-Nachrichten zu senden.
- Bildschirmhelligkeits-API: `window.screen.mozEnabled` und `window.screen.mozBrightness` wurden hinzugefügt, um die Helligkeit des Geräts zu steuern.

### SVG

- Firefox implementiert jetzt die `SVGTests`-DOM-API, siehe [Firefox-Bug 607854](https://bugzil.la/607854).
- Die [`SVGStringList`](/de/docs/Web/API/SVGStringList)-DOM-Schnittstelle unterstützt die nicht standardisierte `length`-Eigenschaft, siehe [Firefox-Bug 711958](https://bugzil.la/711958).

### MathML

- Um die Schreibrichtung von MathML-Formeln zu steuern, wird das `dir`-Attribut jetzt auf den {{MathMLElement("math")}}, {{MathMLElement("mrow")}} und {{MathMLElement("mstyle")}}-Elementen sowie auf [MathML-Token-Elementen](/de/docs/Web/MathML/Element#token_elements) unterstützt. Dies ist besonders wichtig für einige [arabische mathematische Notationen](https://www.w3.org/TR/arabic-math/).
- Das `align`-Attribut, das in MathML3 definiert ist, wurde für {{MathMLElement("munder")}}, {{MathMLElement("mover")}} und {{MathMLElement("munderover")}} implementiert.

### Netzwerk

- Bisher meldete Gecko den Schließcode `CLOSE_NORMAL`, wenn ein WebSocket-Kanal aufgrund eines unerwarteten Fehlers geschlossen wurde oder wenn er aufgrund einer Fehlerbedingung geschlossen wurde, die von der Spezifikation nicht abgedeckt ist. Jetzt wird stattdessen `CLOSE_GOING_AWAY` gemeldet.

### Entwicklerwerkzeuge

- Die [Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) speichert jetzt Fehlermeldungen und Log-Einträge, die mit [`console.log()`](/de/docs/Web/API/Console/log_static) hinzugefügt wurden, wenn die Konsole nicht geöffnet ist, und zeigt sie an, wenn die Konsole geöffnet wird.
- Sie können jetzt die Zoomstufe, das Schwenken und die Rotation in der [3D-Ansicht](https://firefox-source-docs.mozilla.org/devtools-user/3d_view/index.html) zurücksetzen, indem Sie die "r"-Taste drücken.
- Sie können jetzt Knoten in der [3D-Ansicht](https://firefox-source-docs.mozilla.org/devtools-user/3d_view/index.html) ausblenden, indem Sie die "x"-Taste drücken, nachdem Sie sie ausgewählt haben.
- Der [Quelltext-Editor](https://firefox-source-docs.mozilla.org/devtools-user/keyboard_shortcuts/index.html#source-editor) hat mehrere neue Bearbeitungsfunktionen und Tastenkombinationen; siehe [Verwenden des Quelltext-Editors](https://firefox-source-docs.mozilla.org/devtools-user/keyboard_shortcuts/index.html#source-editor) für Einzelheiten.

Mozilla arbeitet daran, seine eigenen Webentwickler-Werkzeuge zu integrieren, die das beliebte [Firebug](https://getfirebug.com/)-Add-on ergänzen. Sie können weitere Informationen über diese Werkzeuge erhalten sowie eine Liste externer Ressourcen zu Firefox finden, die Ihnen bei Ihrer Webentwicklung helfen. Die vollständige Liste befindet sich unter [Webentwickler-Werkzeuge](https://firefox-source-docs.mozilla.org/devtools-user/index.html).

### Verschiedene Änderungen

- Der GEOSTD8-Zeichensatz, der nie vollständig unterstützt wurde, wird überhaupt nicht mehr unterstützt.

## Änderungen für Mozilla- und Add-on-Entwickler

### JavaScript-Codemodule

#### source-editor.jsm

- Die Methode `resetUndo()` wurde hinzugefügt; dies ermöglicht es, den Undo-Stack zu leeren.
- Der Quelltext-Editor bietet jetzt Methoden zur Bereitstellung von Suchfunktionen: `find()`, `findNext()` und `findPrevious()`.

### XUL

- Die Definition der Werte für das `chromemargin`-Attribut hat sich leicht geändert, um es einfacher zu machen, plattformübergreifenden XUL-Code gut aussehen zu lassen, unabhängig von den unterschiedlichen Standardfensterrahmenbreiten der Plattformen.

### XPCOM

- `nsISupports`-Proxies werden nicht mehr unterstützt. Sie sollten stattdessen runnables verwenden.
- Firefox 11 hat das Verhalten von `Components.utils.getWeakReference()` dahingehend geändert, dass eine Ausnahme ausgelöst wird, wenn die Objektreferenz null ist; das vorherige Verhalten des stillen Fehlschlagens wurde wiederhergestellt.

### XPConnect

- Der Datentyp `PRUint64` war im Wesentlichen identisch mit `PRint64`, wenn er mit XPConnect verwendet wurde. Dies wurde behoben.

### Schnittstellenänderungen

- Die Schnittstelle `nsIScreen_MOZILLA_2_0_BRANCH` wurde in `nsIScreen` zusammengeführt. Die APIs, die in dieser Schnittstelle definiert sind (zur Steuerung der minimalen Bildschirmhelligkeit), waren bisher nicht dokumentiert, sind es jetzt aber.
- Die Schnittstelle `nsIScriptError2` wurde in `nsIScriptError` integriert.
- `nsIDownloadManager.addDownload()` wird jetzt asynchron anstelle von synchron behandelt.
- Die Methode `imgIContainerObserver.frameChanged()` erhält jetzt als ersten Parameter ein `imgIRequest`-Objekt, das die entsprechende Anforderung identifiziert.
- Die Methode `nsIDOMWindowUtils.sendTouchEvent()` wurde hinzugefügt, um Touch-Ereignisse zu synthetisieren.
- Sie können jetzt den angegebenen Inhalt auf die vertikale Mitte des Sichtfensters scrollen, indem Sie `SCROLL_CENTER_VERTICALLY` als Scrollkonstante angeben, wenn Sie `nsISelectionController.scrollSelectionIntoView()` aufrufen.
- Das neue Attribut `nsIMemoryMultiReporter.explicitNonHeap` wurde hinzugefügt; dies ist eine effizientere Methode, die Summe aller Messungen des Multi-Reporters zu erhalten, die mit "explicit" beginnen **und** vom Typ `KIND_NONHEAP` sind.
- Das Attribut `nsIDOMWindowUtils.paintingSuppressed` wurde hinzugefügt; dieser boolesche Wert gibt an, ob das Zeichnen derzeit im Fenster unterdrückt wird oder nicht. Dies wird auf Mobilgeräten verwendet, um eine ruckartige Darstellung zu verhindern, die auftritt, wenn versucht wird, die Seite zu zeichnen, bevor genügend Inhalt verfügbar ist, um dies flüssig zu tun.
- Die Schnittstellen `nsIDocCharset` und `nsIDocumentCharsetInfo` wurden in `nsIDocShell` zusammengeführt. Im Rahmen dieser Arbeiten wurde das alte `forcedDetector`-Attribut entfernt; es hat nie etwas bewirkt.

### SpiderMonkey

- `JSThread` wurde eliminiert.
- `JSThreadData` wurde in `JSRuntime` zusammengeführt.

### Building

- Beim Bauen unter Windows müssen Sie das Windows 7 SDK installiert haben.

### Andere Änderungen

- Die Editor-Komponente (bekannt als Midas) akzeptiert jetzt nur noch Ereignisse von privilegiertem Code.

## Siehe auch

{{Firefox_for_developers}}
