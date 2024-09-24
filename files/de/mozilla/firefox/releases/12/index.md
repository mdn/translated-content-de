---
title: Firefox 12 für Entwickler
slug: Mozilla/Firefox/Releases/12
l10n:
  sourceCommit: 0d66181876fd29da72c99140f5828be05a1c9011
---

{{FirefoxSidebar}}

Firefox 12 wurde am 24. April 2012 veröffentlicht. Diese Seite fasst die Änderungen in Firefox 12 zusammen, die Entwickler betreffen. Dieser Artikel bietet Informationen über die neuen Funktionen und wichtige behobene Fehler in dieser Version sowie Links zu detaillierterer Dokumentation sowohl für Webentwickler als auch für Add-on-Entwickler.

## Änderungen für Webentwickler

### HTML

- Das `title`-Attribut unterstützt jetzt Zeilenumbruchzeichen, um mehrzeilige Tooltips zu ermöglichen.
- Wenn JavaScript deaktiviert ist, wurde das {{HTMLElement("canvas")}}-Element anstelle der Anzeige des Fallback-Inhalts gemäß der [Spezifikation](https://html.spec.whatwg.org/multipage/canvas.html) gerendert. Jetzt wird stattdessen der Fallback-Inhalt gerendert.
- Das `crossorigin`-Attribut wird jetzt auf {{HTMLElement("video")}} unterstützt.

### CSS

- Unterstützung für die {{cssxref("text-align-last")}}-Eigenschaft wurde hinzugefügt (mit Präfix).

### JavaScript

- Unterstützung für scharfe Variablen (eine nicht standardisierte Erweiterung von Netscape) wurde eingestellt.
- {{jsxref("ArrayBuffer.prototype.slice()")}} wurde implementiert.

### DOM

- {{domxref("DOMParser")}} unterstützt jetzt das Parsen von HTML-Dokumentfragmenten.
- {{domxref("XMLHttpRequest")}} unterstützt jetzt Zeitüberschreitungen mithilfe der `timeout`-Eigenschaft und des "timeout"-Ereignisses sowie des `ontimeout`-Ereignis-Handlers auf der {{domxref("XMLHttpRequestEventTarget")}}-Schnittstelle.
- {{domxref("XMLHttpRequest")}} kann jetzt Daten von [`data:` URLs](/de/docs/Web/URI/Schemes/data) laden.
- Beim Herunterladen großer Datenmengen werden jetzt {{domxref("XMLHttpRequest")}}-Fortschrittsereignis-Handler periodisch aufgerufen, wenn der `responseType` auf "moz-blob" gesetzt und die Antwort ein {{domxref("Blob")}} ist, das alle bisher empfangenen Daten enthält. Dies ermöglicht es Fortschrittshandlern, mit der Datenverarbeitung zu beginnen, ohne auf das Eintreffen aller Daten warten zu müssen.
- Gecko unterstützt jetzt [Multi-Touch](/de/docs/Web/API/Touch_events) (anstatt nur einzelne Berührungen) auf Android.
- Während der Texterstellung mit einem IME wird das `input`-Ereignis jetzt immer dann gesendet, wenn der Inhalt des bearbeiteten Elements geändert wurde; dies geschieht nach dem `compositionupdate`-Ereignis, um anzuzeigen, dass der Text des IME geändert wurde. Sie können daher den `input`-Ereignis-Handler verwenden, um Änderungen am tatsächlichen Inhalt des Elements zu überwachen.
- {{domxref("DOMError")}} gemäß der DOM 4-Spezifikation wurde implementiert.
- Die {{domxref("Document.createNodeIterator()")}}-Methode wurde aktualisiert, um der DOM4-Spezifikation zu entsprechen. Dies macht die Parameter `whatToShow` und `filter` optional und entfernt den nicht standardisierten vierten Parameter, `entityReferenceExpansion`.
- Die `slice()`-Methode der {{domxref("Blob")}}-Schnittstelle war von einem Fehler betroffen, der verhinderte, dass sie `start`- und `end`-Werte außerhalb des Bereichs eines signierten 64-Bit-Ganzzahl richtig akzeptierte; dies wurde behoben.
- Die {{domxref("element.getBoundingClientRect()")}}-Methode berücksichtigt jetzt die Wirkung von [CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms) bei der Berechnung des Begrenzungsrechtecks des Elements.
- Die `crossOrigin`-Eigenschaft wird jetzt von {{domxref("HTMLMediaElement")}} unterstützt.

#### Neue WebAPIs

- Network Information API: Experimentelle Unterstützung für {{domxref("Navigator.connection", "window.navigator.connection")}} wurde hinzugefügt (mit Präfix).
- WebTelephony API: `window.navigator.mozTelephony` wurde implementiert und bietet Unterstützung beim Wählen, Annehmen und Verwalten von Anrufen auf einem Gerät.
- WebSMS API: `window.navigator.mozSms` ist jetzt auf mobilen Geräten verfügbar, um SMS-Nachrichten zu senden.
- Screen brightness API: `window.screen.mozEnabled` und `window.screen.mozBrightness` wurden hinzugefügt, um den Bildschirm des Geräts zu steuern.

### SVG

- Firefox implementiert jetzt die `SVGTests`-DOM-API, siehe [Firefox-Bug 607854](https://bugzil.la/607854).
- Die {{domxref("SVGStringList")}}-DOM-Schnittstelle unterstützt die nicht standardisierte `length`-Eigenschaft, siehe [Firefox-Bug 711958](https://bugzil.la/711958).

### MathML

- Um die Ausrichtung von MathML-Formeln zu steuern, wird das `dir`-Attribut jetzt auf den {{MathMLElement("math")}}, {{MathMLElement("mrow")}}, und {{MathMLElement("mstyle")}}-Elementen sowie auf [MathML-Tokenelementen](/de/docs/Web/MathML/Element#token_elements) unterstützt. Dies ist insbesondere für einige [arabische mathematische Notationen](https://www.w3.org/TR/arabic-math/) wichtig.
- Das `align`-Ausrichtungsattribut, das in MathML3 definiert ist, wurde für {{MathMLElement("munder")}}, {{MathMLElement("mover")}}, und {{MathMLElement("munderover")}} implementiert.

### Netzwerk

- Zuvor meldete Gecko den Schließcode `CLOSE_NORMAL`, wenn ein WebSocket-Kanal aufgrund eines unerwarteten Fehlers geschlossen wurde oder wenn er aufgrund einer Fehlerbedingung geschlossen wurde, die die Spezifikation nicht abdeckt. Jetzt wird `CLOSE_GOING_AWAY` gemeldet.

### Entwicklertools

- Die [Web-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) speichert jetzt Fehlermeldungen und Protokolleinträge, die mit {{domxref("console/log_static", "console.log()")}} hinzugefügt werden, wenn die Konsole nicht geöffnet ist, und zeigt sie an, wenn die Konsole geöffnet wird.
- Sie können jetzt den Zoomlevel, das Schwenken und die Drehung in der [3D-Ansicht](https://firefox-source-docs.mozilla.org/devtools-user/3d_view/index.html) durch Drücken der "r"-Taste zurücksetzen.
- Sie können jetzt Knoten in der [3D-Ansicht](https://firefox-source-docs.mozilla.org/devtools-user/3d_view/index.html) ausblenden, indem Sie nach der Auswahl die "x"-Taste drücken.
- Der [Source-Editor](https://firefox-source-docs.mozilla.org/devtools-user/keyboard_shortcuts/index.html#source-editor) verfügt über mehrere neue Bearbeitungsfunktionen und Tastenkombinationen; Einzelheiten finden Sie unter [Verwendung des Source-Editors](https://firefox-source-docs.mozilla.org/devtools-user/keyboard_shortcuts/index.html#source-editor).

Mozilla arbeitet an der Integration eigener Web-Entwicklertools, die das beliebte [Firebug](https://getfirebug.com/)-Add-on ergänzen. Sie können weitere Informationen zu diesen Tools sowie eine Liste von externen Ressourcen erhalten, die Ihnen bei Ihrer Webentwicklung helfen. Die gesamte Liste finden Sie unter [Webentwickler-Tools](https://firefox-source-docs.mozilla.org/devtools-user/index.html).

### Verschiedene Änderungen

- Der GEOSTD8-Zeichensatz, der nie vollständig unterstützt wurde, wird nicht mehr unterstützt.

## Änderungen für Mozilla- und Add-on-Entwickler

### JavaScript-Code-Module

#### source-editor.jsm

- Die Methode `resetUndo()` wurde hinzugefügt; dies ermöglicht es, den Undo-Stack zu leeren.
- Der Quellcode-Editor bietet jetzt Methoden zur Bereitstellung von Suchfunktionen: `find()`, `findNext()`, und `findPrevious()`.

### XUL

- Die Definition der Werte für das `chromemargin`-Attribut hat sich leicht geändert, um es einfacher zu machen, plattformübergreifende XUL-Codes auf Plattformen mit unterschiedlichen Standardfensterrahmenbreiten gut aussehen zu lassen.

### XPCOM

- `nsISupports`-Proxies werden nicht mehr unterstützt. Sie sollten stattdessen Runnable verwenden.
- Firefox 11 änderte das Verhalten von `Components.utils.getWeakReference()`, um eine Ausnahme auszulösen, wenn die Objektverweisung null ist; das vorherige Verhalten des stillen Fehlschlags wurde wiederhergestellt.

### XPConnect

- Der `PRUint64`-Datentyp war fälschlicherweise im Wesentlichen identisch mit `PRint64`, wenn er mit XPConnect verwendet wurde. Dies wurde behoben.

### Schnittstellenänderungen

- Die `nsIScreen_MOZILLA_2_0_BRANCH`-Schnittstelle wurde in `nsIScreen` integriert. Die in dieser Schnittstelle definierten APIs (zum Steuern der minimalen Bildschirmhelligkeit) waren bisher nicht dokumentiert, sind es jetzt aber.
- Die `nsIScriptError2`-Schnittstelle wurde in `nsIScriptError` integriert.
- `nsIDownloadManager.addDownload()` wird jetzt asynchron statt synchron gehandhabt.
- Die `imgIContainerObserver.frameChanged()`-Methode erhält jetzt als ersten Parameter ein `imgIRequest`-Objekt, das die entsprechende Anforderung identifiziert.
- Die Methode `nsIDOMWindowUtils.sendTouchEvent()` wurde hinzugefügt, um das Erzeugen von Berührungsereignissen zu ermöglichen.
- Sie können jetzt den angegebenen Inhalt in die vertikale Mitte der Ansicht scrollen, indem Sie `SCROLL_CENTER_VERTICALLY` als Scrollkonstante angeben, wenn Sie `nsISelectionController.scrollSelectionIntoView()` aufrufen.
- Das neue `nsIMemoryMultiReporter.explicitNonHeap`-Attribut wurde hinzugefügt; dies ist eine effizientere Möglichkeit, die Summe aller Messungen des Multi-Reporters zu erhalten, die mit "explicit" beginnen und vom Typ `KIND_NONHEAP` sind.
- Das `nsIDOMWindowUtils.paintingSuppressed`-Attribut wurde hinzugefügt; dieser boolesche Wert zeigt an, ob das Zeichnen auf dem Fenster derzeit unterdrückt wird. Dies wird auf Mobilgeräten verwendet, um ein ruckeliges Rendern zu verhindern, das auftritt, wenn versucht wird, die Seite zu zeichnen, bevor genügend Inhalt verfügbar ist, um dies reibungslos zu tun.
- Die `nsIDocCharset`- und `nsIDocumentCharsetInfo`-Schnittstellen wurden in `nsIDocShell` integriert. Im Rahmen dieser Arbeit wurde das alte `forcedDetector`-Attribut entfernt; es hat nie etwas bewirkt.

### SpiderMonkey

- `JSThread` wurde eliminiert.
- `JSThreadData` wurde in `JSRuntime` integriert.

### Erstellung

- Beim Erstellen unter Windows muss das Windows 7 SDK installiert sein.

### Weitere Änderungen

- Die Editor-Komponente (bekannt als Midas) akzeptiert jetzt nur noch Ereignisse von privilegiertem Code.

## Siehe auch

{{Firefox_for_developers}}
