---
title: Firefox 10 für Entwickler
slug: Mozilla/Firefox/Releases/10
l10n:
  sourceCommit: 33cada2d06f8d0cd009d9d5348de6e3165bba67f
---

{{FirefoxSidebar}}

Firefox 10 wurde am 31. Januar 2012 veröffentlicht. Dieser Artikel bietet Informationen über die neuen Funktionen und die wichtigsten behobenen Fehler dieser Version sowie Links zu ausführlicheren Dokumentationen für Web-Entwickler und Add-on-Entwickler.

> [!NOTE]
> Firefox 10 ist die erste Version dieses Browsers mit zwei Ziffern. Dies kann zu Problemen mit einigen UA-Sniffing-Skripten führen. Überprüfen Sie diese, sowie solche in Software von Drittanbietern, die Sie in Ihre Seiten einbinden, wie Bibliotheken. Weitere Informationen dazu finden Sie im [Artikel Firefox geht 2-stellig auf hacks.mozilla.org](https://hacks.mozilla.org/2012/01/firefox-goes-2-digit-time-to-check-your-ua-sniffing-scripts/).

## Änderungen für Web-Entwickler

### HTML

- Das neue HTML5-Element {{ HTMLElement("bdi") }}, bi-direktionale Isolation, das die Isolation von Textteilen mit unterschiedlicher Richtung ermöglicht, wurde implementiert. Dies ist besonders nützlich, wenn Texte mit unbekannter Richtung, beispielsweise aus einer Datenbank, inmitten eines bekannten und möglicherweise abweichenden Textes angezeigt werden.
- Sie können jetzt ein Fragment von "top" für das [`href`](/de/docs/Web/HTML/Element/a#href)-Attribut angeben, um einen Link zum oberen Rand der Seite zu erstellen. Dies funktionierte früher, verschwand eine Zeit lang und ist nun zurück, um mit der HTML5-Spezifikation kompatibel zu sein. Beispiel: `<a href="#top">Zurück zum Seitenanfang</a>`.

### JavaScript

- Die Methode `WeakMap.set()` gibt jetzt `undefined` zurück, anstatt sich selbst.
- Ein Fehler bei der Behandlung von regulären Ausdrücken, der in Firefox 7 eingeführt wurde, wurde behoben. Siehe [Firefox Fehler 683838](https://bugzil.la/683838) für genaue Details.
- Sie können die veraltete EcmaScript for XML (E4X) Syntax nicht mehr im [ECMAScript 5 Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) verwenden (also nach `"use strict;"`).

### DOM

#### DOM3 Events

- Die DOM-Event-Methode [`event.stopImmediatePropagation`](/de/docs/Web/API/Event/stopImmediatePropagation) wurde implementiert.
- Die Mausereignisse `mouseenter` und `mouseleave` wurden implementiert.

#### DOM4

- Das Attribut [`document.xmlVersion`](/de/docs/Web/API/Document/xmlVersion) (welches nur lesbar und nicht setzbar war) wurde entfernt, da es in der DOM4-Spezifikation als veraltet gilt. Der Artikel für [`document.xmlVersion`](/de/docs/Web/API/Document/xmlVersion) schlägt nun eine Methode vor, um zu erkennen, ob das Dokument HTML oder XML ist, ohne diese Eigenschaft zu verwenden.
- Das Attribut `document.xmlStandalone` wurde entfernt, da es in der DOM4-Spezifikation als veraltet gilt.
- Das Attribut [`document.xmlEncoding`](/de/docs/Web/API/Document/xmlEncoding) wurde entfernt, da es in der DOM4-Spezifikation als veraltet gilt.
- Das Attribut `text.isElementContentWhiteSpace` wurde entfernt, da es in der DOM4-Spezifikation als veraltet gilt.
- Die Methode `text.replaceWholeText` wurde entfernt, da sie in der DOM4-Spezifikation als veraltet gilt.
- Die Methode [`node.isSameNode`](/de/docs/Web/API/Node/isSameNode) wurde entfernt, da sie in der DOM4-Spezifikation als veraltet gilt. Statt `node1.isSameNode(node2)` können Sie den `===` Operator verwenden, so: `node1 === node2`.

#### Page Visibility API

- Die [Page Visibility API](/de/docs/Web/API/Page_Visibility_API) wurde implementiert (mit Präfix): `document.mozHidden`, `document.mozVisibilityState` sind verfügbar und das Ereignis `mozvisibilitychanged` wird ausgelöst, wenn sich der Status ändert.

#### Full Screen API

- Unterstützung für [`Document/fullscreenEnabled`](/de/docs/Web/API/Document/fullscreenEnabled) wurde hinzugefügt.
- Die neue Eigenschaft {{ cssxref(":-moz-full-screen-ancestor") }} wurde hinzugefügt. Diese ermöglicht es Ihnen, Elemente zu vergleichen, die Vorfahren eines Elements im Vollbildmodus sind.

#### Battery API

- Experimentelle Unterstützung für [`window.navigator.mozBattery`](/de/docs/Web/API/Window/navigator/mozBattery) wurde hinzugefügt (kann aktiviert werden, indem die Einstellung `dom.battery.enabled` auf `true` gesetzt wird und wird ab Firefox 11 standardmäßig aktiviert).

#### Canvas

- Die Methode [`createPattern()`](/de/docs/Web/API/CanvasRenderingContext2D#createpattern%28%29) wirft jetzt eine Ausnahme, wenn eine Canvas-Quelle mit der Größe Null angegeben wird.
- Wenn Sie einen nicht-finiteren Wert für einen der numerischen Parameter zu [`putImageData()`](/de/docs/Web/API/CanvasRenderingContext2D#putimagedata%28%29) verwenden, wird der Aufruf nun stillschweigend ignoriert, anstatt eine Ausnahme zu werfen, gemäß der Spezifikation.

#### WebGL

- Firefox 10 unterstützt jetzt die [`OES_standard_derivatives`](https://registry.khronos.org/webgl/extensions/OES_standard_derivatives/) Erweiterung.
- [Neue Einstellungen wurden hinzugefügt](/de/docs/Web/API/WebGL_API#webgl_debugging_and_testing), um WebGL-Code auf Kompatibilität mit minimal ausgestatteten Geräten auf Ihrer vollständigen Entwicklungsplattform zu testen.

#### Web Workers

- Das Attribut `XMLHttpRequest.responseType` und `XMLHttpRequest.response` sind jetzt innerhalb von [Workers](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers#section_2) verfügbar.
- Der Konstruktor [`Worker()`](/de/docs/Web/API/Worker#worker) akzeptiert jetzt [Data-URLs](/de/docs/Web/URI/Schemes/data).

#### IndexedDB

Große Fortschritte wurden gemacht, um IndexedDB mit dem neuesten Entwurfsstandard zu aktualisieren. Diese Bemühungen werden in Firefox 11 fortgesetzt.

- Die Methoden [`IDBIndex.count()`](/de/docs/Web/API/IDBIndex#count) und [`IDBObjectStore.count()`](/de/docs/Web/API/IDBObjectStore#count) wurden hinzugefügt.
- Die Methode [`IDBCursor.advance()`](/de/docs/Web/API/IDBCursor#advance) wurde hinzugefügt.
- Beim Auftreten eines unbekannten optionalen Parameters in [`IDBObjectStore.createIndex()`](/de/docs/Web/API/IDBObjectStore#createindex) oder [`IDBDatabase.createObjectStore()`](/de/docs/Web/API/IDBDatabase#createobjectstore) wirft Gecko keine Ausnahme mehr, sondern ignoriert ihn.
- Wenn [`IDBTransaction.abort()`](/de/docs/Web/API/IDBTransaction#abort%28%29) aufgerufen wird, haben alle ausstehenden [`IDBRequest`](/de/docs/Web/API/IDBRequest) ihre `errorCode` auf `ABORT_ERROR` gesetzt.
- Die Methoden [`IDBObjectStore.delete()`](/de/docs/Web/API/IDBObjectStore/delete) und [`IDBCursor.delete()`](/de/docs/Web/API/IDBCursor/delete) setzen jetzt das `result` Attribut des zurückgegebenen [`IDBRequest`](/de/docs/Web/API/IDBRequest) auf `undefined`.
- Die Methode `IDBDatabase.setVersion()` wurde entfernt, da sie aus den neuesten Spezifikationen entfernt wurde. Die Version der Datenbank wird durch die Methode [`IDBFactory.open()`](/de/docs/Web/API/IDBFactory#open) festgelegt, welche aktualisiert wurde und der `onupgradeneeded` Rückruf ermöglicht die Aktualisierung des Schemas der Datenbank. Die Version selbst wurde von einem `DOMString` zu einem `unsigned long long` geändert. Das `IDBVersionChangeRequest` Interface wurde entfernt und durch das neue [`IDBOpenDBRequest`](/de/docs/Web/API/IDBOpenDBRequest) Interface ersetzt.
- Beim Öffnen einer Datenbank mit [`IDBFactory.open()`](/de/docs/Web/API/IDBFactory/open), wenn der `version` Parameter nicht angegeben ist und die Datenbank nicht existiert, wird sie mit einer Version von `1` erstellt.
- Die Methode [`IDBFactory.deleteDatabase()`](/de/docs/Web/API/IDBFactory#deletedatabase%28%29) wurde hinzugefügt.
- Methoden, die nach einem [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange) suchen (wie zum Beispiel [`IDBObjectStore.openCursor`](/de/docs/Web/API/IDBObjectStore/openCursor) und [`IDBIndex.getKey`](/de/docs/Web/API/IDBIndex/getKey)), können entweder einen einzelnen Schlüssel oder einen Schlüsselbereich akzeptieren.

#### Sonstiges

- Wenn der richtige MIME-Typ `image/svg+xml` übergeben wird, [erstellt der `DOMParser` jetzt ein `SVGDocument`](/de/docs/Web/API/DOMParser#parsing_a_svg_document) wenn ein String mit SVG angegeben wird.
- Früher meldete [`element.setAttribute()`](/de/docs/Web/API/Element/setAttribute) einen Fehler, wenn Ganzzahlen geparst wurden, die nicht-numerische Zeichen enthalten (zum Beispiel "42foo"). Jetzt wird dies korrekt als die Zahl 42 gekürzt, gemäß der Spezifikation.
- Die ESC-Taste führt nicht länger dazu, dass der [`onkeydown`](/de/docs/Web/API/Element/keydown_event) Handler fälschlicherweise aufgerufen wird.
- Das `NameList` Interface wird nicht mehr implementiert; es hatte zuvor eine Implementierung ohne die Möglichkeit, tatsächlich auf eines zuzugreifen.
- Die Methode [`document.createProcessingInstruction()`](/de/docs/Web/API/Document/createProcessingInstruction) funktioniert jetzt sowohl für HTML- als auch XML-Dokumente. [`ProcessingInstruction`](/de/docs/Web/API/ProcessingInstruction)-Knoten werden weiterhin nur auf XML-Dokumenten unterstützt, aber da Knoten zwischen Dokumenten bewegt werden können, ist es hilfreich, sie auch auf HTML-Dokumenten erstellen zu können.
- Der `XMLHttpRequest` `responseType` "`moz-json`" [eingeführt in Firefox 9](/de/docs/Mozilla/Firefox/Releases/9#dom) wurde auf den neuesten Entwurf der Spezifikation aktualisiert und das Präfix wurde entfernt. Siehe die Anmerkung in [Firefox Fehler 707142](https://bugzil.la/707142#c13).

### CSS

- CSS 3D-Transformationen werden jetzt unterstützt. Dies beinhaltet Unterstützung für die Eigenschaften {{ cssxref("transform-style") }}, {{ cssxref("perspective") }}, {{ cssxref("perspective-origin") }} und {{ cssxref("backface-visibility") }}, sowie für 3D-Transformationsfunktionen in den Eigenschaften {{ cssxref("transform") }} und {{ cssxref("transform-function") }}. Siehe [Verwendung von CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms#3d_specific_css_properties) für Details.
- Zwei neue Werte für die CSS-Eigenschaft {{ cssxref("unicode-bidi") }} wurden hinzugefügt: `-moz-isolation` und `-moz-plaintext`. Der `-moz-isolation` Wert isoliert, aus Sicht der Richtung, das Element von seiner Umgebung und ermöglicht ihm eine andere Richtung zu haben. Ein Element mit `unicode-bidi:-moz-isolation` verhält sich wie ein {{ HTMLElement("bdi") }}-Element. Das `-moz-plaintext` gibt an, dass der Browser die Unicode-Browserheuristik verwenden soll, um die Richtung zu bestimmen und nicht die CSS-Eigenschaft {{ cssxref("direction") }}.
- Die CSS-Eigenschaften {{ cssxref("gradient/linear-gradient") }} und {{ cssxref("gradient/repeating-linear-gradient") }} wurden aktualisiert, um die neue `to`-Syntax und den _magic corner_ Algorithmus zu unterstützen. Dies ermöglicht es, eine präzise Farbe auf der Ecke eines mit einem Verlaufsgefüllten Kastens zu geben.
- Die Behandlung der {{ cssxref("text-overflow") }} Eigenschaft in Fällen, in denen der Kasten auf beiden Seiten überläuft, während die `text-overflow` Eigenschaft nur auf eine Seite eingestellt ist [wurde korrigiert](/de/docs/Web/CSS/text-overflow#gecko_notes).
- Die Behandlung der {{ cssxref("position") }} Eigenschaft auf Elementen in positionierten {{ HTMLElement("table") }} Elementen [wurde behoben](/de/docs/Web/CSS/position#gecko_notes). **Diese Änderung wird das Layout von Seiten beeinflussen; wir halten uns jedoch jetzt an die CSS-Spezifikation und an andere Browser, daher sollte dies leicht zu beheben sein.**
- Die Margenkollabierung um {{ HTMLElement("table") }} Elemente wurde behoben, um der CSS-Spezifikation zu entsprechen. Zuvor wurden Tabellenränder nicht mitbenachbarten kollabierten Rändern zusammengefasst, was zu inkorrektem Layout führte. **Diese Änderung wird das Layout von Seiten beeinflussen; wir halten uns jedoch jetzt an die CSS-Spezifikation und an andere Browser, daher sollte dies leicht zu beheben sein.**

### SVG

- Das {{ SVGElement("mask") }} Element wurde aktualisiert, um sowohl sRGB als auch linearRGB zu unterstützen und standardmäßig auf sRGB eingestellt zu sein, in Übereinstimmung mit der neuesten Überarbeitung der SVG 1.1 Spezifikation.

### Netzwerke

- Der HTTP `Accept-Charset`-Header wird in HTTP-Anfragen nicht mehr gesendet. In seiner Abwesenheit sollten Server antworten, indem sie UTF-8 senden.

### Entwickler-Tools

- Das [`console`](/de/docs/Web/API/Console) Objekt hat zwei neue Methoden, [`console.time()`](/de/docs/Web/API/Console/time_static) und [`console.timeEnd()`](/de/docs/Web/API/Console/timeEnd_static), die zum Einstellen von Timern auf einer Seite verwendet werden können.
- Der neue [Page Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) wurde hinzugefügt und bietet eine hervorragende Möglichkeit, das HTML und CSS hinter Ihrem Inhalt zu untersuchen und zu manipulieren.

## Änderungen für Mozilla- und Add-on-Entwickler

Eine Übersicht über mögliche Probleme, die bei der Aktualisierung Ihrer Add-ons zur Unterstützung von Firefox 10 auftreten können, finden Sie unter [Aktualisierung von Add-ons für Firefox 10](/de/docs/Mozilla/Firefox/Updating_add-ons_for_Firefox_10).

> [!NOTE]
> Der alte [`PRBool`](/de/docs/PRBool) Datentyp wurde entfernt! In der gesamten Dokumentation wird jetzt der standardmäßige C++ `bool` Typ verwendet. Die Dokumentation wird in Zukunft aktualisiert, aber für den Moment sollten Sie dies im Hinterkopf behalten.

### Manifeste

- Unterstützung für [`<em:strictCompatibility>`](/de/docs/Install_Manifests#strictcompatibility) wurde dem Installationsmanifest hinzugefügt. Es ermöglicht Add-on-Autoren, die maximale Version ihrer Erweiterung zu überprüfen. Wenn auf `true` gesetzt, wird das Add-on deaktiviert, wenn die Anwendungsversion größer als `<em:maxVersion>` ist. Firefox 10 hat standardmäßig Add-ons als kompatibel eingestellt, unabhängig von ihrer angegebenen maximalen Version. Diese Flag überschreibt diese Voreinstellung. Sie sollten dies setzten, wenn Ihr Add-on Dinge tut, die wahrscheinlich durch Firefox-Updates gebrochen werden, **aber nicht**, wenn Ihr Add-on eine binäre Komponente hat, da solche Add-ons immer streng geprüft werden (denken Sie daran, dass binäre Komponenten immer für jede Hauptversion von Firefox neu kompiliert werden müssen).
- Wenn Sie zum alten Verhalten zurückkehren möchten — das heißt, zu einer strikten Kompatibilitätsprüfung für alle Add-ons, unabhängig vom Wert des `strictCompatibility`-Flags in ihren Manifesten — können Sie die `extensions.strictCompatibility`-Präferenz auf `true` setzen.

### XUL

- Bootstrapped-Add-ons, die eine `chrome.manifest` Datei verwenden, haben nun die Manifestdatei automatisch registriert. Siehe den Abschnitt [Hinzufügen einer Benutzeroberfläche mit einer chrome.manifest](/de/docs/Extensions/Bootstrapped_extensions#Adding_user_interface_with_a_chrome.manifest) für Details.

### XPConnect

- Mehrere neue Eigenschaften und Methoden wurden zu `Components.utils` hinzugefügt, die Zugriff auf verschiedene Debugging-bezogene Informationen gewähren.

### Schnittstellenänderungen

- Die Schnittstellen `mozISpellCheckingEngine` und `nsIEditorSpellCheck` wurden aktualisiert, sodass neustartlose Add-ons Wörterbücher zum Rechtschreibprüfer hinzufügen können.
- Das Attribut `nsIBrowserHistory.lastPageVisited` wurde entfernt.
- Die Schnittstelle `nsIDocumentViewer` wurde in `nsIContentViewer` zusammengeführt.
- Die Schnittstelle `nsIURIFixup` hat eine neue Flag, `FIXUP_FLAG_USE_UTF8`, die es Ihnen ermöglicht, UTF-8 anstelle des Plattformzeichensatzes bei der Konvertierung zu verwenden.

### Änderungen bei Plug-ins

- Die neue Variable `NPNVdocumentOrigin` wurde hinzugefügt; diese gibt den Dokumentursprung zurück und ist sicherer als [`window.location`](/de/docs/Web/API/Window/location).

### Änderungen am Build-System

- Die `--disable-rdf` Build-Option, die es tatsächlich unmöglich machte zu bauen, wurde entfernt. Die Arbeit, die RDF-Unterstützung vollständig zu entfernen, ist im Gange, aber derzeit erfordert XUL es noch, um zu funktionieren. Siehe [Firefox Fehler 559505](https://bugzil.la/559505) für Fortschritte bei der Entfernung der letzten Überbleibsel von RDF.
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
