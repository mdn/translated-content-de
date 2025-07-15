---
title: Firefox 12 für Entwickler
short-title: Firefox 12
slug: Mozilla/Firefox/Releases/12
l10n:
  sourceCommit: 64df508685abcbc047f6c1a973505921fad1484e
---

Firefox 12 wurde am 24. April 2012 veröffentlicht. Diese Seite fasst die Änderungen in Firefox 12 zusammen, die Entwickler betreffen. Dieser Artikel bietet Informationen über die neuen Funktionen und die wichtigsten behobenen Fehler in dieser Version sowie Links zu detaillierterer Dokumentation für sowohl Webentwickler als auch Add-on-Entwickler.

## Änderungen für Webentwickler

### HTML

- Das `title`-Attribut unterstützt jetzt Zeilenumbrüche, um mehrzeilige Tooltips zu ermöglichen.
- Wenn JavaScript deaktiviert ist, wurde das {{HTMLElement("canvas")}}-Element statt des Fallback-Inhalts gemäß der [Spezifikation](https://html.spec.whatwg.org/multipage/canvas.html) gerendert. Jetzt wird stattdessen der Fallback-Inhalt gerendert.
- Das `crossorigin`-Attribut wird jetzt auf {{HTMLElement("video")}} unterstützt.

### CSS

- Unterstützung für die {{cssxref("text-align-last")}}-Eigenschaft wurde hinzugefügt (mit Präfix).

### JavaScript

- Unterstützung für scharfe Variablen (eine nicht-standardmäßige Netscape-Erweiterung) wurde eingestellt.
- {{jsxref("ArrayBuffer.prototype.slice()")}} wurde implementiert.

### DOM

- [`DOMParser`](/de/docs/Web/API/DOMParser) unterstützt jetzt das Parsen von HTML-Dokumentfragmenten.
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) unterstützt jetzt Zeitüberschreitungen durch die `timeout`-Eigenschaft und das "timeout"-Event sowie den `ontimeout`-Event-Handler auf der [`XMLHttpRequestEventTarget`](/de/docs/Web/API/XMLHttpRequestEventTarget)-Schnittstelle.
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) kann nun von [`data:` URLs](/de/docs/Web/URI/Reference/Schemes/data) laden.
- Beim Herunterladen großer Datenmengen werden [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Progress-Event-Handler jetzt periodisch mit dem `responseType` "moz-blob" aufgerufen und die Antwort ist ein [`Blob`](/de/docs/Web/API/Blob), der alle bisher empfangenen Daten enthält. Dies ermöglicht es den Progress-Handlern, mit der Verarbeitung der Daten zu beginnen, ohne auf deren vollständige Ankunft zu warten.
- Gecko unterstützt jetzt [Multi-Touch](/de/docs/Web/API/Touch_events) (anstatt nur Einzelberührungen gleichzeitig) auf Android.
- Beim Bearbeiten von Text mit einem IME wird das `input`-Event jetzt immer gesendet, wenn sich der Inhalt des bearbeiteten Elements geändert hat; dies geschieht, nachdem das `compositionupdate`-Event gesendet wurde, um anzuzeigen, dass der Text des IME geändert wurde. Sie können daher den `input`-Event-Handler verwenden, um Änderungen am tatsächlichen Inhalt des Elements zu überwachen.
- [`DOMError`](/de/docs/Web/API/DOMError), wie es in der DOM-4-Spezifikation definiert ist, wurde implementiert.
- Die Methode [`Document.createNodeIterator()`](/de/docs/Web/API/Document/createNodeIterator) wurde aktualisiert, um der DOM4-Spezifikation zu entsprechen. Dies macht die Parameter `whatToShow` und `filter` optional und entfernt den nicht-standardmäßigen vierten Parameter, `entityReferenceExpansion`.
- Die `slice()`-Methode der [`Blob`](/de/docs/Web/API/Blob)-Schnittstelle war von einem Fehler betroffen, der sie daran hinderte, `start`- und `end`-Werte außerhalb des Bereichs eines vorzeichenbehafteten 64-Bit-Ganzzahls richtig zu akzeptieren; dies wurde behoben.
- Die Methode [`element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) berücksichtigt jetzt die Auswirkungen von [CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms), wenn sie das Begrenzungsrechteck des Elements berechnet.
- Die `crossOrigin`-Eigenschaft wird jetzt von [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) unterstützt.

#### Neue WebAPIs

- Netzwerk-Informations-API: Experimentelle Unterstützung für [`window.navigator.connection`](/de/docs/Web/API/Navigator/connection) wurde hinzugefügt (mit Präfix).
- WebTelephony-API: `window.navigator.mozTelephony` wurde implementiert und bietet Unterstützung für das Wählen, Annehmen und Verwalten von Telefongesprächen auf einem Gerät.
- WebSMS-API: `window.navigator.mozSms` ist jetzt verfügbar, um auf mobilen Geräten SMS-Textnachrichten zu senden.
- Bildschirmhelligkeits-API: `window.screen.mozEnabled` und `window.screen.mozBrightness` wurden hinzugefügt, um den Bildschirm des Geräts zu steuern.

### SVG

- Firefox implementiert jetzt die `SVGTests`-DOM-API, siehe [Firefox-Bug 607854](https://bugzil.la/607854).
- Die [`SVGStringList`](/de/docs/Web/API/SVGStringList)-DOM-Schnittstelle unterstützt die nicht-standardmäßige `length`-Eigenschaft, siehe [Firefox-Bug 711958](https://bugzil.la/711958).

### MathML

- Um die Richtung von MathML-Formeln zu steuern, wird das `dir`-Attribut jetzt auf den {{MathMLElement("math")}}, {{MathMLElement("mrow")}} und {{MathMLElement("mstyle")}}-Elementen sowie auf [MathML-Token-Elementen](/de/docs/Web/MathML/Reference/Element#token_elements) unterstützt. Dies ist besonders wichtig für einige [arabische mathematische Notationen](https://www.w3.org/TR/arabic-math/).
- Das Ausrichtungsattribut `align`, das in MathML3 definiert ist, wurde für {{MathMLElement("munder")}}, {{MathMLElement("mover")}} und {{MathMLElement("munderover")}} implementiert.

### Netzwerk

- Zuvor meldete Gecko den Schließcode `CLOSE_NORMAL`, wenn ein WebSocket-Kanal aufgrund eines unerwarteten Fehlers geschlossen wurde oder wenn er aufgrund eines Fehlers geschlossen wurde, den die Spezifikation nicht abdeckt. Jetzt wird `CLOSE_GOING_AWAY` stattdessen gemeldet.

### Entwicklerwerkzeuge

- Die [Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) speichert jetzt Fehlermeldungen und Logeinträge, die mit [`console.log()`](/de/docs/Web/API/console/log_static) hinzugefügt wurden, wenn die Konsole nicht geöffnet ist, und zeigt sie an, wenn die Konsole geöffnet wird.
- Sie können jetzt die Zoomstufe, das Schwenken und die Drehung in der [3D-Ansicht](https://firefox-source-docs.mozilla.org/devtools-user/3d_view/index.html) durch Drücken der "r"-Taste zurücksetzen.
- Sie können jetzt Knoten in der [3D-Ansicht](https://firefox-source-docs.mozilla.org/devtools-user/3d_view/index.html) ausblenden, indem Sie die "x"-Taste drücken, nachdem Sie sie ausgewählt haben.
- Der [Quelltexteditor](https://firefox-source-docs.mozilla.org/devtools-user/keyboard_shortcuts/index.html#source-editor) bietet mehrere neue Bearbeitungsfunktionen und Tastenkombinationen; siehe [Verwendung des Quelltexteditors](https://firefox-source-docs.mozilla.org/devtools-user/keyboard_shortcuts/index.html#source-editor) für Details.

Mozilla arbeitet daran, seine eigenen Webentwickler-Tools zu integrieren, die das beliebte [Firebug](https://getfirebug.com/)-Add-on ergänzen. Sie können mehr Informationen über diese Tools finden sowie eine Liste von Ressourcen außerhalb von Firefox, die Ihnen bei der Webentwicklung helfen. Die vollständige Liste befindet sich unter [Webentwickler-Tools](https://firefox-source-docs.mozilla.org/devtools-user/index.html).

### Sonstige Änderungen

- Die GEOSTD8-Zeichenkodierung, die nie vollständig unterstützt wurde, wird jetzt überhaupt nicht mehr unterstützt.

## Änderungen für Mozilla- und Add-on-Entwickler

### JavaScript-Code-Module

#### source-editor.jsm

- Die Methode `resetUndo()` wurde hinzugefügt; dies ermöglicht es, den Rückgängig-Stapel zu löschen.
- Der Quelltexteditor bietet jetzt Methoden zur Bereitstellung von Suchfunktionen: `find()`, `findNext()` und `findPrevious()`.

### XUL

- Die Definition der Werte für das `chromemargin`-Attribut hat sich leicht geändert, um es einfacher zu machen, plattformübergreifenden XUL-Code auf Plattformen mit unterschiedlichen Standardfensterrahmenbreiten gut aussehen zu lassen.

### XPCOM

- `nsISupports`-Proxies werden nicht mehr unterstützt. Sie sollten stattdessen `runnables` verwenden.
- Firefox 11 änderte das Verhalten von `Components.utils.getWeakReference()`, um eine Ausnahme zu werfen, wenn die Objektreferenz null ist; das vorherige Verhalten des stillen Scheiterns wurde wiederhergestellt.

### XPConnect

- Der `PRUint64`-Datentyp war im Wesentlichen identisch mit `PRint64` bei Verwendung mit XPConnect. Dies wurde behoben.

### Schnittstellenänderungen

- Die `nsIScreen_MOZILLA_2_0_BRANCH`-Schnittstelle wurde in `nsIScreen` zusammengeführt. Die in dieser Schnittstelle definierten APIs (zum Steuern der minimalen Bildschirmhelligkeit) waren bisher nicht dokumentiert, sind es jetzt aber.
- Die `nsIScriptError2`-Schnittstelle wurde in `nsIScriptError` zusammengeführt.
- `nsIDownloadManager.addDownload()` wird jetzt asynchron anstatt synchron behandelt.
- Die Methode `imgIContainerObserver.frameChanged()` erhält jetzt als ersten Parameter ein `imgIRequest`-Objekt, das die entsprechende Anfrage identifiziert.
- Die Methode `nsIDOMWindowUtils.sendTouchEvent()` wurde hinzugefügt, um Touch-Events zu synthetisieren.
- Sie können jetzt den angegebenen Inhalt vertikal in die Mitte der Ansicht scrollen, indem Sie `SCROLL_CENTER_VERTICALLY` als Scroll-Konstante verwenden, wenn Sie `nsISelectionController.scrollSelectionIntoView()` aufrufen.
- Das neue `nsIMemoryMultiReporter.explicitNonHeap`-Attribut wurde hinzugefügt; dies ist eine effizientere Möglichkeit, die Summe aller Messungen des Multi-Reporters zu erhalten, die mit "explicit" beginnen und vom `KIND_NONHEAP`-Typ sind.
- Das `nsIDOMWindowUtils.paintingSuppressed`-Attribut wurde hinzugefügt; dieser boolesche Wert zeigt an, ob das Zeichnen derzeit im Fenster unterdrückt wird. Dies wird auf mobilen Geräten verwendet, um ein ruckartiges Rendern zu verhindern, das auftritt, wenn versucht wird, die Seite zu zeichnen, bevor genügend Inhalt verfügbar ist, um es reibungslos zu tun.
- Die `nsIDocCharset`- und `nsIDocumentCharsetInfo`-Schnittstellen wurden in `nsIDocShell` zusammengeführt. Als Teil dieser Arbeit wurde das alte `forcedDetector`-Attribut entfernt; es hat nie etwas bewirkt.

### SpiderMonkey

- `JSThread` wurde entfernt.
- `JSThreadData` wurde in `JSRuntime` zusammengeführt.

### Build-Prozess

- Beim Erstellen auf Windows müssen Sie das Windows 7 SDK installiert haben.

### Sonstige Änderungen

- Die Editor-Komponente (bekannt als Midas) akzeptiert jetzt nur noch Events von privilegiertem Code.
