---
title: Firefox 12 für Entwickler
slug: Mozilla/Firefox/Releases/12
l10n:
  sourceCommit: c263f06fa14ed56153e345006bb459c9df014b98
---

{{FirefoxSidebar}}

Firefox 12 wurde am 24. April 2012 veröffentlicht. Diese Seite fasst die Änderungen in Firefox 12 zusammen, die Entwickler betreffen. Dieser Artikel bietet Informationen über die neuen Funktionen und die wichtigsten behobenen Fehler in dieser Version sowie Links zu detaillierteren Dokumentationen für sowohl Webentwickler als auch Add-on-Entwickler.

## Änderungen für Webentwickler

### HTML

- Das `title`-Attribut unterstützt jetzt Zeilenumbrüche, um mehrzeilige Tooltips zu ermöglichen.
- Wenn JavaScript deaktiviert ist, wurde das {{HTMLElement("canvas")}}-Element anstelle des Fallback-Inhalts entsprechend der [Spezifikation](https://html.spec.whatwg.org/multipage/canvas.html) angezeigt. Jetzt wird stattdessen der Fallback-Inhalt gerendert.
- Das `crossorigin`-Attribut wird jetzt auf {{HTMLElement("video")}} unterstützt.

### CSS

- Unterstützung für die {{cssxref("text-align-last")}}-Eigenschaft wurde hinzugefügt (mit Präfix).

### JavaScript

- Unterstützung für scharfe Variablen (eine nicht standardmäßige Netscape-Erweiterung) wurde eingestellt.
- {{jsxref("ArrayBuffer.prototype.slice()")}} wurde implementiert.

### DOM

- [`DOMParser`](/de/docs/Web/API/DOMParser) unterstützt jetzt das Parsen von HTML-Dokumentfragmenten.
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) unterstützt jetzt Zeitüberschreitungen mithilfe der `timeout`-Eigenschaft und des "timeout"-Ereignisses sowie den `ontimeout`-Ereignishandler in der [`XMLHttpRequestEventTarget`](/de/docs/Web/API/XMLHttpRequestEventTarget)-Schnittstelle.
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) kann jetzt von [`data:` URLs](/de/docs/Web/URI/Reference/Schemes/data) laden.
- Beim Herunterladen großer Datenmengen werden die Fortschrittsereignis-Handler von [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) jetzt periodisch mit `responseType` auf "moz-blob" und die Antwort als [`Blob`](/de/docs/Web/API/Blob) aufgerufen, die alle bisher erhaltenen Daten enthält. Dies ermöglicht es den Fortschritts-Handlern, mit der Verarbeitung der Daten zu beginnen, ohne auf deren vollständige Ankunft warten zu müssen.
- Gecko unterstützt jetzt [Multi-Touch](/de/docs/Web/API/Touch_events) (anstatt nur Einzeltouchs) auf Android.
- Beim Bearbeiten von Text mit einer IME wird jetzt das `input`-Ereignis gesendet, wann immer sich der Inhalt des bearbeiteten Elements geändert hat; dies geschieht, nachdem das `compositionupdate`-Ereignis gesendet wurde, um anzuzeigen, dass sich der Text der IME geändert hat. Sie können daher den `input`-Ereignishandler verwenden, um Änderungen des tatsächlichen Inhalts des Elements zu überwachen.
- [`DOMError`](/de/docs/Web/API/DOMError), wie in der DOM 4-Spezifikation definiert, wurde implementiert.
- Die Methode [`Document.createNodeIterator()`](/de/docs/Web/API/Document/createNodeIterator) wurde aktualisiert, um der DOM4-Spezifikation zu entsprechen. Dies macht die Parameter `whatToShow` und `filter` optional und entfernt den nicht standardmäßigen vierten Parameter `entityReferenceExpansion`.
- Die Methode [`Blob`](/de/docs/Web/API/Blob) `slice()` war von einem Fehler betroffen, der verhinderte, dass `start`- und `end`-Werte außerhalb des Bereichs eines signierten 64-Bit-Ganzzahlenwerts ordnungsgemäß akzeptiert werden; dies wurde behoben.
- Die Methode [`element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) berücksichtigt jetzt die Wirkung von [CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms) bei der Berechnung des Begrenzungsrechtecks des Elements.
- Die `crossOrigin`-Eigenschaft wird jetzt von [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) unterstützt.

#### Neue WebAPIs

- Network Information API: Experimentelle Unterstützung für [`window.navigator.connection`](/de/docs/Web/API/Navigator/connection) wurde hinzugefügt (mit Präfix).
- WebTelephony API: `window.navigator.mozTelephony` wurde implementiert und bietet Unterstützung für das Wählen, Annehmen und Verwalten von Telefonanrufen auf einem Gerät.
- WebSMS API: `window.navigator.mozSms` ist jetzt für mobile Geräte verfügbar, um SMS-Textnachrichten zu senden.
- Screen Brightness API: `window.screen.mozEnabled` und `window.screen.mozBrightness` wurden hinzugefügt, um die Bildschirmhelligkeit des Geräts zu steuern.

### SVG

- Firefox implementiert jetzt die `SVGTests` DOM-API, siehe [Firefox Bug 607854](https://bugzil.la/607854).
- Die [`SVGStringList`](/de/docs/Web/API/SVGStringList) DOM-Schnittstelle unterstützt die nicht standardmäßige `length`-Eigenschaft, siehe [Firefox Bug 711958](https://bugzil.la/711958).

### MathML

- Um die Richtung von MathML-Formeln zu steuern, wird das `dir`-Attribut jetzt auf den {{MathMLElement("math")}}, {{MathMLElement("mrow")}} und {{MathMLElement("mstyle")}}-Elementen sowie auf [MathML-Token-Elementen](/de/docs/Web/MathML/Reference/Element#token_elements) unterstützt. Dies ist besonders wichtig für einige [arabische mathematische Notationen](https://www.w3.org/TR/arabic-math/).
- Das in MathML3 definierte Ausrichtungsattribut `align` wurde für {{MathMLElement("munder")}}, {{MathMLElement("mover")}} und {{MathMLElement("munderover")}} implementiert.

### Netzwerke

- Zuvor meldete Gecko den Schließcode `CLOSE_NORMAL`, wenn eine WebSocket-Verbindung aufgrund eines unerwarteten Fehlers geschlossen wurde oder wenn sie aufgrund eines Fehlers geschlossen wurde, der in der Spezifikation nicht abgedeckt ist. Jetzt wird `CLOSE_GOING_AWAY` stattdessen gemeldet.

### Entwickler-Tools

- Die [Web-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) speichert jetzt Fehlermeldungen und Log-Einträge, die mit [`console.log()`](/de/docs/Web/API/Console/log_static) hinzugefügt wurden, wenn die Konsole derzeit nicht geöffnet ist, und zeigt sie an, wenn die Konsole geöffnet wird.
- Sie können jetzt die Zoomstufe, das Schwenken und die Drehung in der [3D-Ansicht](https://firefox-source-docs.mozilla.org/devtools-user/3d_view/index.html) durch Drücken der Taste "r" zurücksetzen.
- Sie können jetzt Knoten in der [3D-Ansicht](https://firefox-source-docs.mozilla.org/devtools-user/3d_view/index.html) ausblenden, indem Sie nach der Auswahl die Taste "x" drücken.
- Der [Quell-Editor](https://firefox-source-docs.mozilla.org/devtools-user/keyboard_shortcuts/index.html#source-editor) hat mehrere neue Bearbeitungsfunktionen und Tastenkombinationen; siehe [Verwendung des Quell-Editors](https://firefox-source-docs.mozilla.org/devtools-user/keyboard_shortcuts/index.html#source-editor) für Details.

Mozilla arbeitet daran, seine eigenen Webentwickler-Tools zu integrieren, die das beliebte [Firebug](https://getfirebug.com/)-Add-on ergänzen. Weitere Informationen zu diesen Tools sowie eine Liste von Ressourcen, die für Ihre Web-Entwicklung hilfreich sind, finden Sie unter [Entwickler-Tools für das Web](https://firefox-source-docs.mozilla.org/devtools-user/index.html).

### Sonstige Änderungen

- Der GEOSTD8-Zeichensatz, der nie vollständig unterstützt wurde, wird gar nicht mehr unterstützt.

## Änderungen für Mozilla- und Add-on-Entwickler

### JavaScript-Code-Module

#### source-editor.jsm

- Die Methode `resetUndo()` wurde hinzugefügt; dies ermöglicht das Löschen des Rückgängig-Stacks.
- Der Quell-Editor bietet jetzt Methoden zur Bereitstellung der Suchfunktionalität: `find()`, `findNext()` und `findPrevious()`.

### XUL

- Die Definition der Werte für das `chromemargin`-Attribut hat sich leicht geändert, um es einfacher zu machen, plattformübergreifenden XUL-Code auf Plattformen mit unterschiedlichen Standard-Fensterrand-Breiten gut aussehen zu lassen.

### XPCOM

- `nsISupports`-Proxys werden nicht mehr unterstützt. Sie sollten stattdessen runnables verwenden.
- Firefox 11 änderte das Verhalten von `Components.utils.getWeakReference()`, um eine Ausnahme zu werfen, wenn die Objektreferenz null ist; das vorherige Verhalten des stillen Scheiterns wurde wiederhergestellt.

### XPConnect

- Der `PRUint64`-Datentyp war bei der Verwendung mit XPConnect im Wesentlichen fälschlicherweise identisch mit `PRint64`. Dies wurde behoben.

### Schnittstellenänderungen

- Die `nsIScreen_MOZILLA_2_0_BRANCH`-Schnittstelle wurde in `nsIScreen` integriert. Die in dieser Schnittstelle definierten APIs (zur Steuerung der minimalen Bildschirmhelligkeit) waren zuvor nicht dokumentiert, aber jetzt sind sie es.
- Die `nsIScriptError2`-Schnittstelle wurde in `nsIScriptError` integriert.
- `nsIDownloadManager.addDownload()` wird jetzt asynchron behandelt anstatt synchron.
- Die Methode `imgIContainerObserver.frameChanged()` erhält jetzt als ersten Parameter ein `imgIRequest`-Objekt, das die entsprechende Anfrage identifiziert.
- Die Methode `nsIDOMWindowUtils.sendTouchEvent()` wurde hinzugefügt, um Touch-Ereignisse zu synthetisieren.
- Sie können jetzt den angegebenen Inhalt vertikal in die Mitte des Ansichtsfensters scrollen, indem Sie `SCROLL_CENTER_VERTICALLY` als Scroll-Konstante bei der Aufruf von `nsISelectionController.scrollSelectionIntoView()` angeben.
- Das neue Attribut `nsIMemoryMultiReporter.explicitNonHeap` wurde hinzugefügt; dies ist eine effizientere Möglichkeit, die Summe aller Messungen des Multi-Reporters zu erhalten, die einen Pfad haben, der mit "explicit" beginnt **und** vom Typ `KIND_NONHEAP` sind.
- Das Attribut `nsIDOMWindowUtils.paintingSuppressed` wurde hinzugefügt; dieser boolesche Wert gibt an, ob das Zeichnen im Fenster derzeit unterdrückt ist oder nicht. Dies wird auf mobilen Geräten verwendet, um ein springendes Rendering zu verhindern, das auftritt, wenn versucht wird, die Seite zu zeichnen, bevor genügend Inhalt verfügbar ist, um dies reibungslos zu tun.
- Die Schnittstellen `nsIDocCharset` und `nsIDocumentCharsetInfo` wurden in `nsIDocShell` integriert. Im Rahmen dieser Arbeit wurde das alte Attribut `forcedDetector` entfernt; es hat nie etwas getan.

### SpiderMonkey

- `JSThread` wurde entfernt.
- `JSThreadData` wurde in `JSRuntime` integriert.

### Build

- Beim Erstellen unter Windows müssen Sie das Windows 7 SDK installiert haben.

### Weitere Änderungen

- Die Editor-Komponente (bekannt als Midas) akzeptiert jetzt nur noch Ereignisse von privilegiertem Code.

## Siehe auch

{{Firefox_for_developers}}
