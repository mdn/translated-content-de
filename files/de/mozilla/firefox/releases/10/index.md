---
title: Firefox 10 für Entwickler
slug: Mozilla/Firefox/Releases/10
l10n:
  sourceCommit: 6d311a5f07c97dbcd7bb9a6d49c2fe820a228659
---

{{FirefoxSidebar}}

Firefox 10 wurde am 31. Januar 2012 veröffentlicht. Dieser Artikel bietet Informationen über die neuen Funktionen und die wesentlichen behobenen Fehler in dieser Version sowie Links zu detaillierteren Dokumentationen für Webentwickler und Add-on-Entwickler.

> [!NOTE]
> Firefox 10 ist die erste Version dieses Browsers mit zweistelliger Versionsnummer. Dies kann zu Problemen mit einigen UA-Sniffing-Skripten führen. Stellen Sie sicher, dass Sie diese überprüfen, ebenso wie die in von Ihnen eingebetteter Drittanbieter-Software, wie Bibliotheken. Weitere Informationen dazu finden Sie im [Artikel "Firefox goes 2-digit" auf hack.mozilla.org](https://hacks.mozilla.org/2012/01/firefox-goes-2-digit-time-to-check-your-ua-sniffing-scripts/).

## Änderungen für Webentwickler

### HTML

- Das neue HTML5-`<bdi>`-Element, das bi-direktionale Isolation ermöglicht, wurde implementiert. Es isoliert Teile von Texten mit einer anderen Schreibrichtung. Dies ist besonders nützlich, wenn Texte mit unbekannter Schreibrichtung angezeigt werden sollen, beispielsweise aus einer Datenbank, inmitten von Texten mit bekannter, potenziell anderer Schreibrichtung.
- Sie können jetzt ein Fragment "top" für das [`href`](/de/docs/Web/HTML/Element/a#href)-Attribut angeben, um einen Link zum Anfang der Seite zu erstellen. Das funktionierte früher, war eine Zeitlang verschwunden und ist nun zurück, um die Kompatibilität mit der HTML5-Spezifikation zu gewährleisten. Beispiel: `<a href="#top">Zurück zum Seitenanfang</a>`.

### JavaScript

- Die Methode `WeakMap.set()` gibt jetzt `undefined` zurück, anstatt sich selbst.
- In der regulären Ausdrucksverarbeitung wurde in Firefox 7 ein Fehler eingeführt; dieser wurde behoben. Siehe [Firefox-Fehler 683838](https://bugzil.la/683838) für detaillierte Informationen.
- Sie können die veraltete EcmaScript für XML (E4X)-Syntax nicht mehr im [ECMAScript 5 Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode) verwenden (also nach `"use strict;"`).

### DOM

#### DOM3 Events

- Die DOM-Event-Methode [`event.stopImmediatePropagation`](/de/docs/Web/API/Event/stopImmediatePropagation) wurde implementiert.
- Die Mausereignisse `mouseenter` und `mouseleave` wurden implementiert.

#### DOM4

- Das Attribut [`document.xmlVersion`](/de/docs/Web/API/Document/xmlVersion) (das nur lesbar und nicht veränderbar war) wurde entfernt, da es in der DOM4-Spezifikation als veraltet markiert wurde. Der Artikel für [`document.xmlVersion`](/de/docs/Web/API/Document/xmlVersion) schlägt nun eine Möglichkeit vor, zu erkennen, ob das Dokument HTML oder XML ist, ohne diese Eigenschaft zu verwenden.
- Das Attribut `document.xmlStandalone` wurde entfernt, da es in der DOM4-Spezifikation als veraltet markiert wurde.
- Das Attribut [`document.xmlEncoding`](/de/docs/Web/API/Document/xmlEncoding) wurde entfernt, da es in der DOM4-Spezifikation als veraltet markiert wurde.
- Das Attribut `text.isElementContentWhiteSpace` wurde entfernt, da es in der DOM4-Spezifikation als veraltet markiert wurde.
- Die Methode `text.replaceWholeText` wurde entfernt, da sie in der DOM4-Spezifikation als veraltet markiert wurde.
- Die Methode [`node.isSameNode`](/de/docs/Web/API/Node/isSameNode) wurde entfernt, da sie in der DOM4-Spezifikation als veraltet markiert wurde. Anstelle von `node1.isSameNode(node2)` können Sie den `===` Operator verwenden, wie folgt: `node1 === node2`.

#### Page Visibility API

- Die [Page Visibility API](/de/docs/Web/API/Page_Visibility_API) wurde implementiert (mit Präfix): `document.mozHidden`, `document.mozVisibilityState` sind verfügbar und das Ereignis `mozvisibilitychanged` wird gesendet, wenn sich der Zustand ändert.

#### Fullscreen API

- Unterstützung für [`document.fullscreenEnabled`](/de/docs/Web/API/Document/fullscreenEnabled) wurde hinzugefügt.
- Die neue {{ cssxref(":-moz-full-screen-ancestor") }}-Eigenschaft wurde hinzugefügt. Dies ermöglicht es Ihnen, Elemente zu selektieren, die Vorfahren eines Elements im Vollbildmodus sind.

#### Battery API

- Experimentelle Unterstützung für `navigator.mozBattery` wurde hinzugefügt (kann aktiviert werden, indem die Einstellung `dom.battery.enabled` auf `true` gesetzt wird und wird ab Firefox 11 standardmäßig aktiviert).

#### Canvas

- Die Methode [`createPattern()`](/de/docs/Web/API/CanvasRenderingContext2D#createpattern%28%29) wirft jetzt eine Ausnahme, wenn eine Quelle mit null Größe angegeben wird.
- Wenn Sie einen nicht-finiteren Wert für einen der numerischen Parameter von [`putImageData()`](/de/docs/Web/API/CanvasRenderingContext2D#putimagedata%28%29) verwenden, wird der Aufruf jetzt stillschweigend ignoriert, anstatt eine Ausnahme zu werfen, in Übereinstimmung mit der Spezifikation.

#### WebGL

- Firefox 10 unterstützt jetzt die Erweiterung [`OES_standard_derivatives`](https://registry.khronos.org/webgl/extensions/OES_standard_derivatives/).
- [Neue Einstellungen wurden hinzugefügt](/de/docs/Web/API/WebGL_API#webgl_debugging_and_testing), um die Kompatibilität von WebGL-Code mit minimal fähigen Geräten auf Ihrer vollständigen Entwicklungsplattform zu testen.

#### Web Workers

- Die Attribute `XMLHttpRequest.responseType` und `XMLHttpRequest.response` sind jetzt innerhalb von [Workers](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers#section_2) verfügbar.
- Der [`Worker()`](/de/docs/Web/API/Worker#worker)-Konstruktor akzeptiert jetzt [data URLs](/de/docs/Web/URI/Schemes/data).

#### IndexedDB

Große Fortschritte wurden gemacht, um IndexedDB auf die neueste Entwurfsspezifikation zu aktualisieren. Diese Bemühungen werden in Firefox 11 fortgesetzt.

- Die Methoden [`IDBIndex.count()`](/de/docs/Web/API/IDBIndex#count) und [`IDBObjectStore.count()`](/de/docs/Web/API/IDBObjectStore#count) wurden hinzugefügt.
- Die Methode [`IDBCursor.advance()`](/de/docs/Web/API/IDBCursor#advance) wurde hinzugefügt.
- Beim Auftreten eines unbekannten optionalen Parameters in [`IDBObjectStore.createIndex()`](/de/docs/Web/API/IDBObjectStore#createindex) oder [`IDBDatabase.createObjectStore()`](/de/docs/Web/API/IDBDatabase#createobjectstore) wird Gecko keine Ausnahme mehr auslösen, sondern sie ignorieren.
- Wenn [`IDBTransaction.abort()`](/de/docs/Web/API/IDBTransaction#abort%28%29) aufgerufen wird, haben alle anstehenden [`IDBRequest`](/de/docs/Web/API/IDBRequest) ihre `errorCode` auf `ABORT_ERROR` gesetzt.
- Die Methoden [`IDBObjectStore.delete()`](/de/docs/Web/API/IDBObjectStore/delete) und [`IDBCursor.delete()`](/de/docs/Web/API/IDBCursor/delete) setzen jetzt das `result`-Attribut des zurückgegebenen [`IDBRequest`](/de/docs/Web/API/IDBRequest) auf `undefined`.
- Die Methode `IDBDatabase.setVersion()` wurde entfernt, da sie aus der neuesten Spezifikation entfernt wurde. Die Version der Datenbank wird über die Methode [`IDBFactory.open()`](/de/docs/Web/API/IDBFactory#open) angegeben, die aktualisiert wurde, und der `onupgradeneeded`-Callback ermöglicht die Aktualisierung des Schemas der Datenbank. Die Version selbst wurde von einer `DOMString` zu einer `unsigned long long` geändert. Die `IDBVersionChangeRequest`-Schnittstelle wurde entfernt und durch die neue [`IDBOpenDBRequest`](/de/docs/Web/API/IDBOpenDBRequest)-Schnittstelle ersetzt.
- Beim Öffnen einer Datenbank mit [`IDBFactory.open()`](/de/docs/Web/API/IDBFactory/open), wenn der `version`-Parameter nicht angegeben ist und die Datenbank nicht existiert, wird diese mit einer Version von `1` erstellt.
- Die Methode [`IDBFactory.deleteDatabase()`](/de/docs/Web/API/IDBFactory#deletedatabase%28%29) wurde hinzugefügt.
- Methoden, die über einen [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange) suchen (wie [`IDBObjectStore.openCursor`](/de/docs/Web/API/IDBObjectStore/openCursor) und [`IDBIndex.getKey`](/de/docs/Web/API/IDBIndex/getKey)), können entweder einen einzelnen Schlüssel oder einen Schlüsselbereich akzeptieren.

#### Sonstiges

- Wenn der korrekte MIME-Typ übergeben wird, `image/svg+xml`, [erzeugt der `DOMParser` jetzt ein `SVGDocument`](/de/docs/Web/API/DOMParser#parsing_a_svg_document) beim Übergeben eines Strings mit SVG.
- In der Vergangenheit meldete [`element.setAttribute()`](/de/docs/Web/API/Element/setAttribute) einen Fehler, wenn die Ganzzahl nicht-numerische Zeichen enthielt (zum Beispiel "42foo"). Jetzt wird dies korrekt als die Zahl 42 abgeschnitten, gemäß der Spezifikation.
- Die ESC-Taste führt nicht mehr fälschlicherweise dazu, dass der [`onkeydown`](/de/docs/Web/API/Element/keydown_event)-Handler fälschlicherweise aufgerufen wird.
- Die `NameList`-Schnittstelle wird nicht mehr implementiert; sie hatte bisher eine Implementierung ohne Möglichkeit, tatsächlich auf eine zuzugreifen.
- Die Methode [`document.createProcessingInstruction()`](/de/docs/Web/API/Document/createProcessingInstruction) funktioniert jetzt sowohl auf HTML-Dokumenten als auch auf XML-Dokumenten. [`ProcessingInstruction`](/de/docs/Web/API/ProcessingInstruction)-Knoten werden immer noch nur auf XML-Dokumenten unterstützt, aber da Knoten zwischen Dokumenten verschoben werden können, ist es hilfreich, sie auch auf HTML-Dokumenten erstellen zu können.
- Das `XMLHttpRequest`-`responseType` "`moz-json`" [eingeführt in Firefox 9](/de/docs/Mozilla/Firefox/Releases/9#dom) wurde auf den neuesten Entwurf der Spezifikation aktualisiert und hat das Präfix verloren. Siehe Hinweis in [Firefox-Fehler 707142](https://bugzil.la/707142#c13).

### CSS

- CSS 3D-Transformationen werden jetzt unterstützt. Dazu gehören die Unterstützung für die Eigenschaften {{ cssxref("transform-style") }}, {{ cssxref("perspective") }}, {{ cssxref("perspective-origin") }} und {{ cssxref("backface-visibility") }}, ebenso wie für 3D-Transformationsfunktionen in den Eigenschaften {{ cssxref("transform") }} und {{ cssxref("transform-function") }}. Siehe [Using CSS transforms](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms#3d_specific_css_properties) für Details.
- Zwei neue Werte für die CSS-Eigenschaft {{ cssxref("unicode-bidi") }} wurden hinzugefügt: `-moz-isolation` und `-moz-plaintext`. Der Wert `-moz-isolation` isoliert, aus Sicht der Schreibrichtung, das Element von seiner Umgebung und ermöglicht ihm eine andere Schreibrichtung. Ein Element mit `unicode-bidi:-moz-isolation` verhält sich wie ein {{ HTMLElement("bdi") }}-Element. Der Wert `-moz-plaintext` gibt dem Browser an, die Unicode-Browserheuristik zur Bestimmung der Schreibrichtung und nicht die CSS-{{ cssxref("direction") }}-Eigenschaft zu verwenden.
- Die CSS-Eigenschaften {{ cssxref("gradient/linear-gradient") }} und {{ cssxref("gradient/repeating-linear-gradient") }} wurden aktualisiert, um die neue `to`-Syntax und den _magic corner_-Algorithmus zu unterstützen. Dies erlaubt es, eine präzise Farbe an der Ecke eines gradientengefüllten Feldes zu geben.
- Die Behandlung der Eigenschaft {{ cssxref("text-overflow") }} in Fällen, in denen das Feld auf beiden Seiten überläuft, während die `text-overflow`-Eigenschaft nur auf einer Seite gesetzt ist, [wurde korrigiert](/de/docs/Web/CSS/text-overflow#gecko_notes).
- Die Behandlung der {{ cssxref("position") }}-Eigenschaft auf Elementen innerhalb positionierter {{ HTMLElement("table") }}-Elemente [wurde behoben](/de/docs/Web/CSS/position#gecko_notes). **Diese Änderung wird das Layout von Seiten beeinflussen; wir halten uns jedoch nun an die CSS-Spezifikation und die anderer Browser, sodass dies einfach zu beheben sein sollte.**
- Die Rand-Kollapsierung um {{ HTMLElement("table") }}-Elemente wurde korrigiert, um der CSS-Spezifikation zu entsprechen. Zuvor würden die Ränder von Tabellenelementen nicht mit anderen angrenzenden Elementen kollabiert, was zu falschem Layout führte. **Diese Änderung wird das Layout von Seiten beeinflussen; wir halten uns jedoch nun an die CSS-Spezifikation und die anderer Browser, sodass dies einfach zu beheben sein sollte.**

### SVG

- Das {{ SVGElement("mask") }}-Element wurde aktualisiert, um sowohl sRGB als auch linearRGB zu unterstützen, und es wird jetzt standardmäßig sRGB verwendet, in Übereinstimmung mit der neuesten Revision der SVG 1.1-Spezifikation.

### Netzwerk

- Der HTTP-Header `Accept-Charset` wird nicht mehr in HTTP-Anfragen gesendet. In seiner Abwesenheit sollten Server antworten, indem sie UTF-8 senden.

### Entwicklertools

- Das [`console`](/de/docs/Web/API/Console)-Objekt hat zwei neue Methoden, [`console.time()`](/de/docs/Web/API/Console/time_static) und [`console.timeEnd()`](/de/docs/Web/API/Console/timeEnd_static), die verwendet werden können, um Timer auf einer Seite zu setzen.
- Der neue [Page Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) wurde hinzugefügt, der eine ausgezeichnete Möglichkeit bietet, das HTML und CSS hinter Ihrem Inhalt zu untersuchen und zu manipulieren.

## Änderungen für Mozilla- und Add-on-Entwickler

Für einen Überblick über mögliche Probleme, die beim Aktualisieren Ihrer Add-ons auf die Unterstützung von Firefox 10 auftreten können, siehe [Aktualisieren von Add-ons für Firefox 10](/de/docs/Mozilla/Firefox/Updating_add-ons_for_Firefox_10).

> [!NOTE]
> Der alte [`PRBool`](/de/docs/PRBool)-Datentyp wurde eingestellt! Überall in der Dokumentation, wo darauf verwiesen wird, wird nun der Standard-C++-`bool`-Typ verwendet. Die Dokumentation wird in der Zukunft aktualisiert, aber beachten Sie dies vorerst.

### Manifeste

- Unterstützung für [`<em:strictCompatibility>`](/de/docs/Install_Manifests#strictcompatibility) wurde dem Installationsmanifest hinzugefügt. Es ermöglicht Add-on-Autoren, auf das Überprüfen der maximalen Version ihrer Erweiterung einzusteigen. Wenn auf `true` gesetzt, wird das Add-on deaktiviert, wenn die Anwendungsversion größer ist als `<em:maxVersion>`. Firefox 10 geht standardmäßig davon aus, dass Add-ons unabhängig von der angegebenen maximalen Version kompatibel sind. Dieser Schalter überschreibt diese Präferenz. Sie sollten dies setzen, wenn Ihr Add-on Dinge tut, die wahrscheinlich durch Firefox-Aktualisierungen gebrochen werden, **aber nicht**, wenn Ihr Add-on eine binäre Komponente hat, da solche Add-ons immer streng überprüft werden (denken Sie daran, dass binäre Komponenten immer für jede größere Firefox-Version neu kompiliert werden müssen).
- Wenn Sie zum alten Verhalten zurückkehren möchten – das heißt, zur strikten Kompatibilitätsprüfung für alle Add-ons, unabhängig vom Wert des `strictCompatibility`-Flags in ihren Manifesten, können Sie die Voreinstellung `extensions.strictCompatibility` auf `true` setzen.

### XUL

- Bootstrap-Add-ons mit einer `chrome.manifest`-Datei haben jetzt die Manifestdatei automatisch registriert. Siehe den Abschnitt [Benutzeroberfläche mit einer chrome.manifest hinzufügen](/de/docs/Extensions/Bootstrapped_extensions#Adding_user_interface_with_a_chrome.manifest) für Details.

### XPConnect

- Mehrere neue Eigenschaften und Methoden wurden zu `Components.utils` hinzugefügt, um Zugriff auf verschiedene debug-bezogene Informationen zu gewähren.

### Schnittstellenänderungen

- Die Schnittstellen `mozISpellCheckingEngine` und `nsIEditorSpellCheck` wurden aktualisiert, um es Add-ons ohne Neustart zu ermöglichen, Wörterbücher zum Rechtschreibprüfer hinzuzufügen.
- Das Attribut `nsIBrowserHistory.lastPageVisited` wurde entfernt.
- Die `nsIDocumentViewer`-Schnittstelle wurde in `nsIContentViewer` zusammengeführt.
- Die `nsIURIFixup`-Schnittstelle hat ein neues Flag, `FIXUP_FLAG_USE_UTF8`, mit dem Sie es veranlassen können, UTF-8 anstelle des Plattformzeichensatzes zu verwenden, wenn Konvertierungen durchgeführt werden.

### Plug-in-Änderungen

- Die neue Variable `NPNVdocumentOrigin` wurde hinzugefügt; diese gibt den Dokumentursprung zurück und ist sicherer als [`window.location`](/de/docs/Web/API/Window/location).

### Änderungen im Buildsystem

- Die Build-Option `--disable-rdf`, die tatsächlich den erfolgreichen Build unmöglich machte, wurde entfernt. Die Arbeit geht weiter, um die RDF-Unterstützung vollständig zu entfernen, aber derzeit erfordert XUL noch die Funktion. Siehe [Firefox-Fehler 559505](https://bugzil.la/559505) für Fortschritte beim Entfernen der letzten Überreste der erforderlichen RDF-Unterstützung.
- Die Build-Option `--disable-smil` wurde entfernt.

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
