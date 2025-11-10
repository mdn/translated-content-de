---
title: Firefox 12 Versionshinweise für Entwickler
short-title: Firefox 12
slug: Mozilla/Firefox/Releases/12
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Firefox 12 wurde am 24. April 2012 veröffentlicht. Diese Seite fasst die Änderungen in Firefox 12 zusammen, die Entwickler betreffen. Dieser Artikel bietet Informationen über die neuen Funktionen und wichtige behobene Fehler in dieser Version sowie Links zu detaillierteren Dokumentationen sowohl für Webentwickler als auch für Add-on-Entwickler.

## Änderungen für Webentwickler

### HTML

- Das `title`-Attribut unterstützt jetzt Zeilenumbrüche, um mehrzeilige Tooltips zu ermöglichen.
- Wenn JavaScript deaktiviert ist, wurde das {{HTMLElement("canvas")}}-Element statt des Fallback-Inhalts gemäß der [Spezifikation](https://html.spec.whatwg.org/multipage/canvas.html) gerendert. Jetzt wird stattdessen der Fallback-Inhalt gerendert.
- Das `crossorigin`-Attribut wird jetzt auf {{HTMLElement("video")}} unterstützt.

### CSS

- Unterstützung für die {{cssxref("text-align-last")}}-Eigenschaft wurde hinzugefügt (mit Präfix).

### JavaScript

- Unterstützung für scharfe Variablen (eine nicht standardisierte Netscape-Erweiterung) wurde entfernt.
- {{jsxref("ArrayBuffer.prototype.slice()")}} wurde implementiert.

### DOM

- [`DOMParser`](/de/docs/Web/API/DOMParser) unterstützt jetzt das Parsen von HTML-Dokumentfragmenten.
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) unterstützt jetzt Timeouts unter Verwendung der `timeout`-Eigenschaft und des "timeout"-Ereignisses sowie den `ontimeout`-Ereignishandler auf der [`XMLHttpRequestEventTarget`](/de/docs/Web/API/XMLHttpRequestEventTarget)-Schnittstelle.
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) kann nun von [`data:` URLs](/de/docs/Web/URI/Reference/Schemes/data) laden.
- Beim Herunterladen großer Datenmengen werden die Fortschritts-Event-Handler von [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) jetzt regelmäßig aufgerufen, wenn `responseType` auf "moz-blob" gesetzt ist und die Antwort ein [`Blob`](/de/docs/Web/API/Blob) enthält, das alle bisher erhaltenen Daten enthält. Dadurch können Fortschrittshandler mit der Verarbeitung von Daten beginnen, ohne darauf warten zu müssen, dass alles angekommen ist.
- Gecko unterstützt jetzt [Multi-Touch](/de/docs/Web/API/Touch_events) (anstatt nur einzelne Berührungen gleichzeitig) auf Android.
- Während der Bearbeitung von Text mit einem IME wird das `input`-Event jetzt immer gesendet, wenn der Inhalt des bearbeiteten Elements geändert wurde; dies geschieht nach dem `compositionupdate`-Event, um anzuzeigen, dass der Text des IME geändert wurde. Sie können daher den `input`-Event-Handler verwenden, um Änderungen am tatsächlichen Inhalt des Elements zu überwachen.
- [`DOMError`](/de/docs/Web/API/DOMError) wie im DOM 4-Spezifikation definiert, wurde implementiert.
- Die [`Document.createNodeIterator()`](/de/docs/Web/API/Document/createNodeIterator)-Methode wurde aktualisiert, um der DOM4-Spezifikation zu entsprechen. Dadurch werden die Parameter `whatToShow` und `filter` optional und der nicht standardisierte vierte Parameter `entityReferenceExpansion` entfernt.
- Die Methode `slice()` des [`Blob`](/de/docs/Web/API/Blob)-Interfaces war von einem Fehler betroffen, der verhinderte, dass sie `start`- und `end`-Werte außerhalb des Bereichs eines vorzeichenbehafteten 64-Bit-Integers korrekt akzeptierte; dies wurde behoben.
- Die Methode [`element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) berücksichtigt jetzt die Auswirkungen von [CSS-Transformationen](/de/docs/Web/CSS/Guides/Transforms/Using) beim Berechnen des Begrenzungsrechtecks des Elements.
- Die `crossOrigin`-Eigenschaft wird jetzt von [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) unterstützt.

#### Neue WebAPIs

- Network Information API: Experimentelle Unterstützung für [`window.navigator.connection`](/de/docs/Web/API/Navigator/connection) wurde hinzugefügt (mit Präfix).
- WebTelephony API: `window.navigator.mozTelephony` wurde implementiert und bietet Unterstützung für das Wählen, Annehmen und Verwalten von Telefonanrufen auf einem Gerät.
- WebSMS API: `window.navigator.mozSms` ist jetzt für mobile Geräte verfügbar, um SMS-Nachrichten zu senden.
- Bildschirmhelligkeit API: `window.screen.mozEnabled` und `window.screen.mozBrightness` wurden hinzugefügt, um den Bildschirm des Geräts zu steuern.

### SVG

- Firefox implementiert jetzt die `SVGTests` DOM API, siehe [Firefox Bug 607854](https://bugzil.la/607854)
- Die [`SVGStringList`](/de/docs/Web/API/SVGStringList) DOM-Schnittstelle unterstützt die nicht standardisierte `length`-Eigenschaft siehe [Firefox Bug 711958](https://bugzil.la/711958)

### MathML

- Um die Ausrichtung von MathML-Formeln zu steuern, wird das `dir`-Attribut jetzt auf den Elementen {{MathMLElement("math")}}, {{MathMLElement("mrow")}} und {{MathMLElement("mstyle")}} sowie auf [MathML Token Elements](/de/docs/Web/MathML/Reference/Element#token_elements) unterstützt. Dies ist besonders wichtig für einige [arabische mathematische Notationen](https://www.w3.org/TR/arabic-math/).
- Das in MathML3 definierte Ausrichtungsattribut `align` wurde für {{MathMLElement("munder")}}, {{MathMLElement("mover")}} und {{MathMLElement("munderover")}} implementiert.

### Netzwerk

- Zuvor meldete Gecko den Schließcode `CLOSE_NORMAL`, wenn ein WebSocket-Kanal aufgrund eines unerwarteten Fehlers geschlossen wurde oder wenn er aufgrund einer Fehlersituation, die die Spezifikation nicht abdeckt, geschlossen wurde. Jetzt wird stattdessen `CLOSE_GOING_AWAY` gemeldet.

### Entwickler-Tools

- Die [Web-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) speichert jetzt Fehlermeldungen und Log-Einträge, die mit [`console.log()`](/de/docs/Web/API/console/log_static) hinzugefügt wurden, wenn die Konsole nicht geöffnet ist, und zeigt sie an, wenn die Konsole geöffnet wird.
- Sie können nun die Zoomstufe, das Verschieben und die Drehung in der [3D-Ansicht](https://firefox-source-docs.mozilla.org/devtools-user/3d_view/index.html) zurücksetzen, indem Sie die "r"-Taste drücken.
- Sie können nun Knoten in der [3D-Ansicht](https://firefox-source-docs.mozilla.org/devtools-user/3d_view/index.html) ausblenden, indem Sie die "x"-Taste nach der Auswahl drücken.
- Der [Source Editor](https://firefox-source-docs.mozilla.org/devtools-user/keyboard_shortcuts/index.html#source-editor) hat mehrere neue Bearbeitungsfunktionen und Tastaturkürzel; siehe [Using the Source Editor](https://firefox-source-docs.mozilla.org/devtools-user/keyboard_shortcuts/index.html#source-editor) für Details.

Mozilla arbeitet daran, seine eigenen Entwickler-Tools zu integrieren, die das beliebte [Firebug](https://getfirebug.com/)-Add-on ergänzen. Sie können mehr Informationen über diese Tools erhalten sowie eine Liste von Ressourcen, die nicht von Firefox stammen, die Ihnen bei der Webentwicklung helfen werden. Die gesamte Liste befindet sich unter [Web developer tools](https://firefox-source-docs.mozilla.org/devtools-user/index.html).

### Sonstige Änderungen

- Der GEOSTD8-Zeichensatz, der nie vollständig unterstützt wurde, wird überhaupt nicht mehr unterstützt.

## Änderungen für Mozilla und Add-on-Entwickler

### JavaScript-Code-Module

#### source-editor.jsm

- Die Methode `resetUndo()` wurde hinzugefügt; dies ermöglicht es Ihnen, den Rückgängig-Stack zu löschen.
- Der Source Editor bietet nun Methoden für Suchfunktionen: `find()`, `findNext()` und `findPrevious()`.

### XUL

- Die Definition der Werte für das Attribut `chromemargin` hat sich leicht verändert, um es einfacher zu machen, XUL-Code plattformübergreifend gut aussehen zu lassen auf Plattformen mit unterschiedlichen Standard-Fensterrandbreiten.

### XPCOM

- `nsISupports`-Proxies werden nicht mehr unterstützt. Sie sollten stattdessen "runnables" verwenden.
- Firefox 11 änderte das Verhalten von `Components.utils.getWeakReference()`, um eine Ausnahme zu werfen, wenn der Objektverweis null ist; das vorherige Verhalten des stillen Scheiterns wurde wiederhergestellt.

### XPConnect

- Der Datentyp `PRUint64` war in Bezug auf XPConnect fälschlicherweise im Wesentlichen identisch mit `PRint64`. Dies wurde behoben.

### Schnittstellenänderungen

- Die Schnittstelle `nsIScreen_MOZILLA_2_0_BRANCH` wurde in `nsIScreen` zusammengeführt. Die APIs, die in dieser Schnittstelle definiert sind (zur Steuerung der minimalen Bildschirmhelligkeit), wurden bisher nicht dokumentiert, sind es jetzt aber.
- Die Schnittstelle `nsIScriptError2` wurde in `nsIScriptError` zusammengeführt.
- `nsIDownloadManager.addDownload()` wird jetzt asynchron statt synchron gehandhabt.
- Die Methode `imgIContainerObserver.frameChanged()` erhält jetzt als ersten Parameter ein `imgIRequest`-Objekt, das die entsprechende Anfrage identifiziert.
- Die Methode `nsIDOMWindowUtils.sendTouchEvent()` wurde hinzugefügt, um die Generierung von Touch-Events zu ermöglichen.
- Sie können nun den angegebenen Inhalt in die vertikale Mitte der Ansicht scrollen, indem Sie `SCROLL_CENTER_VERTICALLY` als Scrollkonstante angeben, wenn Sie `nsISelectionController.scrollSelectionIntoView()` aufrufen.
- Das neue Attribut `nsIMemoryMultiReporter.explicitNonHeap` wurde hinzugefügt; dies ist eine effizientere Möglichkeit, die Summe aller Messungen des Multi-Reporters zu erhalten, die mit "explicit" beginnen **und** vom Typ `KIND_NONHEAP` sind.
- Das Attribut `nsIDOMWindowUtils.paintingSuppressed` wurde hinzugefügt; dieser boolesche Wert gibt an, ob das Zeichnen im Fenster derzeit unterdrückt wird. Dies wird auf Mobilgeräten verwendet, um ein holpriges Rendering zu verhindern, das auftritt, wenn versucht wird, die Seite zu zeichnen, bevor genügend Inhalte vorhanden sind, um dies reibungslos zu ermöglichen.
- Die Schnittstellen `nsIDocCharset` und `nsIDocumentCharsetInfo` wurden in `nsIDocShell` zusammengeführt. Im Rahmen dieser Arbeit wurde das alte Attribut `forcedDetector` entfernt; es hat nie etwas bewirkt.

### SpiderMonkey

- `JSThread` wurde eliminiert.
- `JSThreadData` wurde in `JSRuntime` integriert.

### Build

- Beim Bauen auf Windows müssen Sie das Windows 7 SDK installiert haben.

### Weitere Änderungen

- Die Editor-Komponente (bekannt als Midas) akzeptiert jetzt nur noch Ereignisse von privilegiertem Code.
