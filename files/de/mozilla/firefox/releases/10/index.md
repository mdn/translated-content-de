---
title: Firefox 10 für Entwickler
slug: Mozilla/Firefox/Releases/10
l10n:
  sourceCommit: 4d9320f9857fb80fef5f3fe78e3d09b06eb0ebbd
---

{{FirefoxSidebar}}

Firefox 10 wurde am 31. Januar 2012 veröffentlicht. Dieser Artikel bietet Informationen zu den neuen Funktionen und den wichtigen behobenen Fehlern in dieser Version sowie Links zu ausführlicher Dokumentation für Webentwickler und Add-On-Entwickler.

> [!NOTE]
> Firefox 10 ist die erste Version dieses Browsers mit zweistelligen Versionsnummern. Dies kann bei einigen UA-Sniffing-Skripten Probleme verursachen. Überprüfen Sie diese Skripte sowie jene, die in Drittanbieter-Software eingebettet sind, wie z. B. Bibliotheken. Weitere Informationen finden Sie im Artikel [Firefox goes 2-digit article on hack.mozilla.org](https://hacks.mozilla.org/2012/01/firefox-goes-2-digit-time-to-check-your-ua-sniffing-scripts/).

## Änderungen für Webentwickler

### HTML

- Das neue HTML5-Element {{ HTMLElement("bdi") }}, bidirektionale Isolation, das die Isolation von Textteilen mit unterschiedlicher Richtung ermöglicht, wurde implementiert. Dies ist insbesondere nützlich, wenn Text mit unbekannter Richtung angezeigt wird, z. B. aus einer Datenbank, mitten in Text mit bekannter, möglicherweise unterschiedlicher Richtung.
- Sie können jetzt ein Fragment `top` für das [`href`](/de/docs/Web/HTML/Element/a#href)-Attribut angeben, um einen Link an den Anfang der Seite zu erstellen. Dies funktionierte früher, verschwand dann eine Weile und ist jetzt wieder zurück, um die Kompatibilität mit der HTML5-Spezifikation zu gewährleisten. Zum Beispiel: `<a href="#top">Zurück zum Anfang der Seite</a>`.

### JavaScript

- Die Methode `WeakMap.set()` gibt jetzt `undefined` zurück, statt sich selbst.
- Ein Fehler in der Behandlung von regulären Ausdrücken, der in Firefox 7 eingeführt wurde, wurde behoben. Details finden Sie unter [Firefox bug 683838](https://bugzil.la/683838).
- Es ist nicht länger möglich, die veraltete ECMAScript for XML (E4X)-Syntax im [ECMAScript 5 strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode) zu verwenden (also nach `"use strict;"`).

### DOM

#### DOM3 Events

- Die DOM-Event-Methode [`event.stopImmediatePropagation`](/de/docs/Web/API/Event/stopImmediatePropagation) wurde implementiert.
- Die Maus-Ereignisse `mouseenter` und `mouseleave` wurden implementiert.

#### DOM4

- Das Attribut [`document.xmlVersion`](/de/docs/Web/API/Document/xmlVersion) (das nur lesbar und nicht setzbar war) wurde entfernt, da es in der DOM4-Spezifikation als veraltet markiert wurde. Der Artikel zu [`document.xmlVersion`](/de/docs/Web/API/Document/xmlVersion) schlägt nun eine Methode vor, um festzustellen, ob das Dokument HTML oder XML ist, ohne diese Eigenschaft zu verwenden.
- Das Attribut `document.xmlStandalone` wurde entfernt, da es in der DOM4-Spezifikation als veraltet markiert wurde.
- Das Attribut [`document.xmlEncoding`](/de/docs/Web/API/Document/xmlEncoding) wurde entfernt, da es in der DOM4-Spezifikation als veraltet markiert wurde.
- Das Attribut `text.isElementContentWhiteSpace` wurde entfernt, da es in der DOM4-Spezifikation als veraltet markiert wurde.
- Die Methode `text.replaceWholeText` wurde entfernt, da sie in der DOM4-Spezifikation als veraltet markiert wurde.
- Die Methode [`node.isSameNode`](/de/docs/Web/API/Node/isSameNode) wurde entfernt, da sie in der DOM4-Spezifikation als veraltet markiert wurde. Statt `node1.isSameNode(node2)` können Sie den `===`-Operator verwenden, z. B.: `node1 === node2`.

#### Page Visibility API

- Die [Page Visibility API](/de/docs/Web/API/Page_Visibility_API) wurde mit Präfixen implementiert: `document.mozHidden`, `document.mozVisibilityState` sind verfügbar und das Ereignis `mozvisibilitychanged` wird gesendet, wenn der Status geändert wird.

#### Full Screen API

- Unterstützung für [`document.fullscreenEnabled`](/de/docs/Web/API/Document/fullscreenEnabled) wurde hinzugefügt.
- Die neue Eigenschaft {{ cssxref(":-moz-full-screen-ancestor") }} wurde hinzugefügt. Damit können Sie gegen Elemente prüfen, die Vorfahren eines Elements im Vollbildmodus sind.

#### Battery API

- Experimentelle Unterstützung für `navigator.mozBattery` wurde hinzugefügt (kann durch Setzen der Einstellung `dom.battery.enabled` auf `true` aktiviert werden und wird standardmäßig ab Firefox 11 aktiviert).

#### Canvas

- Die Methode [`createPattern()`](/de/docs/Web/API/CanvasRenderingContext2D#createpattern%28%29) löst jetzt eine Ausnahme aus, wenn ein Canvas mit der Größe Null angegeben wird.
- Wenn Sie einen Wert verwenden, der nicht endlich ist, für einen der numerischen Parameter von [`putImageData()`](/de/docs/Web/API/CanvasRenderingContext2D#putimagedata%28%29), wird der Aufruf jetzt still ignoriert, anstatt eine Ausnahme auszulösen, in Übereinstimmung mit der Spezifikation.

#### WebGL

- Firefox 10 unterstützt jetzt die Extension [`OES_standard_derivatives`](https://registry.khronos.org/webgl/extensions/OES_standard_derivatives/).
- [Neue Voreinstellungen wurden hinzugefügt](/de/docs/Web/API/WebGL_API#webgl_debugging_and_testing), um WebGL-Code auf Kompatibilität mit minimal ausgestatteten Geräten auf Ihrer vollen Entwicklungsplattform zu testen.

#### Web Workers

- Das Attribut `XMLHttpRequest.responseType` und `XMLHttpRequest.response` sind jetzt innerhalb von [Workers](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers#section_2) verfügbar.
- Der Konstruktor [`Worker()`](/de/docs/Web/API/Worker#worker) akzeptiert jetzt [data URLs](/de/docs/Web/URI/Reference/Schemes/data).

#### IndexedDB

Große Fortschritte wurden gemacht, um IndexedDB auf den neuesten Entwurf der Spezifikation zu aktualisieren. Diese Bemühungen werden in Firefox 11 fortgesetzt.

- Die Methoden [`IDBIndex.count()`](/de/docs/Web/API/IDBIndex#count) und [`IDBObjectStore.count()`](/de/docs/Web/API/IDBObjectStore#count) wurden hinzugefügt.
- Die Methode [`IDBCursor.advance()`](/de/docs/Web/API/IDBCursor#advance) wurde hinzugefügt.
- Wenn in [`IDBObjectStore.createIndex()`](/de/docs/Web/API/IDBObjectStore#createindex) oder [`IDBDatabase.createObjectStore()`](/de/docs/Web/API/IDBDatabase#createobjectstore) ein unbekannter optionaler Parameter übergeben wird, löst Gecko keine Ausnahme mehr aus, sondern ignoriert ihn.
- Wenn [`IDBTransaction.abort()`](/de/docs/Web/API/IDBTransaction#abort%28%29) aufgerufen wird, werden alle ausstehenden [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Elemente mit dem `errorCode` `ABORT_ERROR` versehen.
- Die Methoden [`IDBObjectStore.delete()`](/de/docs/Web/API/IDBObjectStore/delete) und [`IDBCursor.delete()`](/de/docs/Web/API/IDBCursor/delete) setzen jetzt das Attribut `result` des zurückgegebenen [`IDBRequest`](/de/docs/Web/API/IDBRequest) auf `undefined`.
- Die Methode `IDBDatabase.setVersion()` wurde entfernt, da sie aus der neuesten Spezifikation entfernt wurde. Die Version der Datenbank wird durch die Methode [`IDBFactory.open()`](/de/docs/Web/API/IDBFactory#open) angegeben, die aktualisiert wurde, und der Rückruf `onupgradeneeded` ermöglicht das Aktualisieren des Schemas der Datenbank. Die Version selbst wurde von einem `DOMString` auf ein `unsigned long long` geändert. Die Schnittstelle `IDBVersionChangeRequest` wurde entfernt und durch die neue Schnittstelle [`IDBOpenDBRequest`](/de/docs/Web/API/IDBOpenDBRequest) ersetzt.
- Wenn Sie eine Datenbank mit [`IDBFactory.open()`](/de/docs/Web/API/IDBFactory/open) öffnen und der `version`-Parameter nicht angegeben ist und die Datenbank nicht existiert, wird sie mit einer Version `1` erstellt.
- Die Methode [`IDBFactory.deleteDatabase()`](/de/docs/Web/API/IDBFactory#deletedatabase%28%29) wurde hinzugefügt.
- Methoden, die über ein [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange) suchen (wie [`IDBObjectStore.openCursor`](/de/docs/Web/API/IDBObjectStore/openCursor) und [`IDBIndex.getKey`](/de/docs/Web/API/IDBIndex/getKey)), können entweder einen einzigen Schlüssel oder einen Schlüsselbereich akzeptieren.

#### Sonstiges

- Wenn der richtige MIME-Typ `image/svg+xml` übergeben wird, erstellt [der `DOMParser` jetzt ein `SVGDocument`](/de/docs/Web/API/DOMParser#parsing_a_svg_document), wenn er eine Zeichenkette mit SVG erhält.
- Früher gab es bei [`element.setAttribute()`](/de/docs/Web/API/Element/setAttribute) einen Fehler bei der Analyse von Ganzzahlen, wenn die Ganzzahl nicht-numerische Zeichen beinhaltete (zum Beispiel "42foo"). Jetzt wird dies korrekt als die Zahl 42 abgeschnitten, gemäß der Spezifikation.
- Die ESC-Taste führt nicht länger dazu, dass der `onkeydown`-Handler fälschlicherweise aufgerufen wird.
- Die `NameList`-Schnittstelle wird nicht mehr implementiert; sie hatte vorher eine Implementierung, ohne dass ein Zugriff darauf möglich war.
- Die Methode [`document.createProcessingInstruction()`](/de/docs/Web/API/Document/createProcessingInstruction) funktioniert nun sowohl bei HTML- als auch bei XML-Dokumenten. [`ProcessingInstruction`](/de/docs/Web/API/ProcessingInstruction)-Knoten sind weiterhin nur auf XML-Dokumenten verfügbar, aber da Knoten zwischen Dokumenten verschoben werden können, ist es nützlich, diese auch auf HTML-Dokumenten erstellen zu können.
- Die `responseType` "`moz-json`" von [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) [eingeführt in Firefox 9](/de/docs/Mozilla/Firefox/Releases/9#dom), wurde auf den neuesten Entwurf der Spezifikation aktualisiert und das Präfix entfernt. Siehe Hinweis in [Firefox bug 707142](https://bugzil.la/707142#c13).

### CSS

- CSS-3D-Transformationen werden jetzt unterstützt. Dies umfasst Unterstützung für die Eigenschaften {{ cssxref("transform-style") }}, {{ cssxref("perspective") }}, {{ cssxref("perspective-origin") }} und {{ cssxref("backface-visibility") }}, sowie für 3D-Transformationsfunktionen in den Eigenschaften {{ cssxref("transform") }} und {{ cssxref("transform-function") }}. Weitere Informationen finden Sie unter [Using CSS transforms](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms#3d_specific_css_properties).
- Zwei neue Werte für die CSS-Eigenschaft {{ cssxref("unicode-bidi") }} wurden hinzugefügt: `-moz-isolation` und `-moz-plaintext`. Der Wert `-moz-isolation` isoliert, aus einer Richtungs-Perspektive, das Element von seiner Umgebung, sodass es eine andere Richtung haben kann. Ein Element mit `unicode-bidi:-moz-isolation` verhält sich wie ein {{ HTMLElement("bdi") }}-Element. Der Wert `-moz-plaintext` weist den Browser an, die Unicode-Browser-Heuristik zu verwenden, um die Richtung zu bestimmen, und nicht die CSS-Eigenschaft {{ cssxref("direction") }}.
- Die Eigenschaften {{ cssxref("gradient/linear-gradient") }} und {{ cssxref("gradient/repeating-linear-gradient") }} wurden aktualisiert, um die neue `to`-Syntax und den _magic corner_-Algorithmus zu unterstützen. Dies erlaubt es, einen präzisen Farbwert an einer Ecke eines verlaufsgefüllten Kastens anzugeben.
- Die Behandlung der {{ cssxref("text-overflow") }}-Eigenschaft in Fällen, in denen der Kasten auf beiden Seiten überläuft und die Eigenschaft `text-overflow` auf nur eine Seite gesetzt ist, [wurde korrigiert](/de/docs/Web/CSS/text-overflow#gecko_notes).
- Die Behandlung der {{ cssxref("position") }}-Eigenschaft bei Elementen innerhalb positionierter {{ HTMLElement("table") }}-Elemente [wurde repariert](/de/docs/Web/CSS/position#gecko_notes). **Diese Änderung betrifft das Layout von Seiten; wir entsprechen nun jedoch der CSS-Spezifikation und anderen Browsern, sodass dies leicht zu korrigieren sein sollte.**
- Das Kollabieren von Rändern um {{ HTMLElement("table") }}-Elemente wurde repariert, um der CSS-Spezifikation zu entsprechen. Zuvor wurden die Ränder von Tabellenelementen nicht mit angrenzenden Elementen kollabiert, was zu einem falschen Layout führte. **Diese Änderung betrifft das Layout von Seiten; wir entsprechen nun jedoch der CSS-Spezifikation und anderen Browsern, sodass dies leicht zu korrigieren sein sollte.**

### SVG

- Das {{ SVGElement("mask") }}-Element wurde aktualisiert, um sowohl sRGB als auch linearRGB zu unterstützen, und verwendet nun standardmäßig sRGB, gemäß der neuesten SVG-1.1-Spezifikation.

### Netzwerk

- Der HTTP-Header `Accept-Charset` wird bei HTTP-Anfragen nicht länger gesendet.
  In seiner Abwesenheit sollten Server mit UTF-8 antworten.

### Entwicklertools

- Das [`console`](/de/docs/Web/API/Console)-Objekt hat zwei neue Methoden: [`console.time()`](/de/docs/Web/API/Console/time_static) und [`console.timeEnd()`](/de/docs/Web/API/Console/timeEnd_static), mit denen Timer auf einer Seite gesetzt werden können.
- Der neue [Page Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) wurde hinzugefügt. Er bietet eine hervorragende Möglichkeit, das HTML und CSS hinter Ihrem Inhalt zu untersuchen und zu manipulieren.

## Änderungen für Mozilla- und Add-On-Entwickler

Eine Übersicht über mögliche Probleme, die auftreten können, wenn Sie Ihr Add-On aktualisieren, um Firefox 10 zu unterstützen, finden Sie unter [Updating add-ons for Firefox 10](/de/docs/Mozilla/Firefox/Updating_add-ons_for_Firefox_10).

> [!NOTE]
> Der veraltete Datentyp [`PRBool`](/de/docs/PRBool) wurde entfernt! Überall, wo er in der Dokumentation erwähnt wird, wird jetzt der Standard-C++-Typ `bool` verwendet. Die Dokumentation wird in Zukunft aktualisiert, aber behalten Sie dies vorerst im Hinterkopf.

### Manifeste

- Unterstützung für [`<em:strictCompatibility>`](/de/docs/Install_Manifests#strictcompatibility) wurde dem Installationsmanifest hinzugefügt. Diese erlaubt es Add-On-Autoren, das Maximum der Version ihrer Erweiterung zu überprüfen. Wenn auf `true` gesetzt, wird das Add-On deaktiviert, wenn die Anwendungs-Version größer ist als `<em:maxVersion>`. Firefox 10 setzt standardmäßig voraus, dass Add-Ons kompatibel sind, unabhängig von der angegebenen maximalen Version. Diese Einstellung überschreibt diese Präferenz. Sie sollten dies setzen, wenn Ihr Add-On Dinge tut, die wahrscheinlich durch Firefox-Updates beeinträchtigt werden, **aber nicht**, wenn Ihr Add-On eine binäre Komponente enthält, da solche Add-Ons immer strikter überprüft werden (denken Sie daran, dass binäre Komponenten immer für jede größere Firefox-Version neu kompiliert werden müssen).
- Wenn Sie zum alten Verhalten zurückkehren möchten – d.h. zum strikten Kompatibilitäts-Check für alle Add-Ons, unabhängig vom Wert der `strictCompatibility`-Einstellung in ihren Manifesten, können Sie die Einstellung `extensions.strictCompatibility` auf `true` setzen.

### XUL

- Für bootstrapped Add-Ons, die eine `chrome.manifest`-Datei verwenden, wird die Manifestdatei jetzt automatisch registriert. Details finden Sie im Abschnitt [Adding user interface with a chrome.manifest](/de/docs/Extensions/Bootstrapped_extensions#Adding_user_interface_with_a_chrome.manifest).

### XPConnect

- Mehrere neue Eigenschaften und Methoden wurden zu `Components.utils` hinzugefügt, die Zugriff auf verschiedene Debugging-bezogene Informationen gewähren.

### Schnittstellenänderungen

- Die Schnittstellen `mozISpellCheckingEngine` und `nsIEditorSpellCheck` wurden aktualisiert, um es möglich zu machen, dass restartless Add-Ons Wörterbücher zum Rechtschreibprüfer hinzufügen können.
- Das Attribut `nsIBrowserHistory.lastPageVisited` wurde entfernt.
- Die Schnittstelle `nsIDocumentViewer` wurde in `nsIContentViewer` integriert.
- Die Schnittstelle `nsIURIFixup` hat eine neue Flagge, `FIXUP_FLAG_USE_UTF8`, die es ermöglicht, UTF-8 anstelle des Plattform-Zeichensatzes zu verwenden, wenn Konvertierungen durchgeführt werden.

### Plug-in-Änderungen

- Die neue Variable `NPNVdocumentOrigin` wurde hinzugefügt; diese gibt den Dokument-Ursprung zurück und ist sicherer als [`window.location`](/de/docs/Web/API/Window/location).

### Änderungen im Build-System

- Die `--disable-rdf` Build-Option, die tatsächlich das erfolgreiche Bauen unmöglich machte, wurde entfernt. Es wird weiterhin daran gearbeitet, die RDF-Unterstützung vollständig zu entfernen, aber derzeit benötigt XUL sie immer noch, um zu funktionieren. Fortschritte zur Entfernung der letzten Überreste von RDF finden Sie unter [Firefox bug 559505](https://bugzil.la/559505).
- Die `--disable-smil` Build-Option wurde entfernt.

### Siehe auch

- [Firefox 9 für Entwickler](/de/docs/Mozilla/Firefox/Releases/9)
- [Firefox 8 für Entwickler](/de/docs/Mozilla/Firefox/Releases/8)
- [Firefox 7 für Entwickler](/de/docs/Mozilla/Firefox/Releases/7)
- [Firefox 6 für Entwickler](/de/docs/Mozilla/Firefox/Releases/6)
- [Firefox 5 für Entwickler](/de/docs/Mozilla/Firefox/Releases/5)
- [Firefox 4 für Entwickler](/de/docs/Mozilla/Firefox/Releases/4)
- [Firefox 3.6 für Entwickler](/de/docs/Mozilla/Firefox/Releases/3.6)
- [Firefox 3.5 für Entwickler](/de/docs/Mozilla/Firefox/Releases/3.5)
- [Firefox 3 für Entwickler](/de/docs/Mozilla/Firefox/Releases/3)
- [Firefox 2 für Entwickler](/de/docs/Mozilla/Firefox/Releases/2)
- [Firefox 1.5 für Entwickler](/de/docs/Mozilla/Firefox/Releases/1.5)
