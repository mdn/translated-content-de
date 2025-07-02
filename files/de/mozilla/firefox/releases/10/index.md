---
title: Firefox 10 für Entwickler
slug: Mozilla/Firefox/Releases/10
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Firefox 10 wurde am 31. Januar 2012 veröffentlicht. Dieser Artikel bietet Informationen über die neuen Funktionen und wesentlichen behobenen Fehler in dieser Version, sowie Links zu detaillierteren Dokumentationen für sowohl Webentwickler als auch Add-on-Entwickler.

> [!NOTE]
> Firefox 10 ist die erste Version dieses Browsers mit zwei Ziffern. Dies kann bei einigen UA-Erkennungsskripten zu Problemen führen. Stellen Sie sicher, dass Sie diese überprüfen, sowie die, die in eingebetteter Drittanbietersoftware enthalten sind, wie Bibliotheken. Weitere Informationen dazu finden Sie im [Artikel über die Umstellung auf zweistellige Versionsnummern auf hack.mozilla.org](https://hacks.mozilla.org/2012/01/firefox-goes-2-digit-time-to-check-your-ua-sniffing-scripts/).

## Änderungen für Webentwickler

### HTML

- Das neue HTML5-{{ HTMLElement("bdi") }}-Element, bi-direktionale Isolation, das die Isolation von Textteilen mit unterschiedlicher Richtung ermöglicht, wurde implementiert. Dies ist besonders nützlich, wenn Text mit unbekannter Richtung, z.B. aus einer Datenbank, inmitten von Text mit bekannter, möglicherweise anderer Richtung angezeigt wird.
- Sie können jetzt ein Fragment "top" für das [`href`](/de/docs/Web/HTML/Reference/Elements/a#href)-Attribut angeben, um einen Link zum Anfang der Seite zu erstellen. Dies funktionierte früher, war eine Weile verschwunden und ist jetzt zurück, zur Kompatibilität mit der HTML5-Spezifikation. Zum Beispiel: `<a href="#top">Zurück zum Seitenanfang</a>`.

### JavaScript

- Die Methode `WeakMap.set()` gibt jetzt `undefined` zurück, statt sich selbst.
- Ein Fehler bei der Handhabung von regulären Ausdrücken, der in Firefox 7 eingeführt wurde, wurde behoben. Einzelheiten finden Sie in [Firefox-Bug 683838](https://bugzil.la/683838).
- Sie können die veraltete ECMAScript for XML (E4X) Syntax nicht mehr verwenden, während Sie sich im [ECMAScript 5 Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) befinden (d.h. nach `"use strict;"`).

### DOM

#### DOM3 Ereignisse

- Die DOM-Ereignismethode [`event.stopImmediatePropagation`](/de/docs/Web/API/Event/stopImmediatePropagation) wurde implementiert.
- Die Mausereignisse `mouseenter` und `mouseleave` wurden implementiert.

#### DOM4

- Das Attribut [`document.xmlVersion`](/de/docs/Web/API/Document/xmlVersion) (das nur lesbar und nicht schreibbar war) wurde entfernt, da es in der DOM4-Spezifikation als veraltet gilt. Der Artikel für [`document.xmlVersion`](/de/docs/Web/API/Document/xmlVersion) schlägt nun einen Weg vor, um festzustellen, ob das Dokument HTML oder XML ist, ohne dieses Attribut zu verwenden.
- Das Attribut `document.xmlStandalone` wurde entfernt, da es in der DOM4-Spezifikation als veraltet gilt.
- Das Attribut [`document.xmlEncoding`](/de/docs/Web/API/Document/xmlEncoding) wurde entfernt, da es in der DOM4-Spezifikation als veraltet gilt.
- Das Attribut `text.isElementContentWhiteSpace` wurde entfernt, da es in der DOM4-Spezifikation als veraltet gilt.
- Die Methode `text.replaceWholeText` wurde entfernt, da sie in der DOM4-Spezifikation als veraltet gilt.
- Die Methode [`node.isSameNode`](/de/docs/Web/API/Node/isSameNode) wurde entfernt, da sie in der DOM4-Spezifikation als veraltet gilt. Statt `node1.isSameNode(node2)` können Sie den `===` Operator verwenden, wie folgt: `node1 === node2`.

#### Sichtbarkeits-API für Seiten

- Die [Sichtbarkeits-API für Seiten](/de/docs/Web/API/Page_Visibility_API) wurde implementiert (mit Präfix): `document.mozHidden`, `document.mozVisibilityState` sind verfügbar und das Ereignis `mozvisibilitychanged` wird gesendet, wenn sich der Zustand ändert.

#### Vollbild-API

- Unterstützung für [`document.fullscreenEnabled`](/de/docs/Web/API/Document/fullscreenEnabled) wurde hinzugefügt.
- Die neue {{ cssxref(":-moz-full-screen-ancestor") }} Eigenschaft wurde hinzugefügt. Damit können Sie Elemente matchen, die Vorfahren eines Elements im Vollbildmodus sind.

#### Batterie-API

- Experimentelle Unterstützung für `navigator.mozBattery` wurde hinzugefügt (kann aktiviert werden, indem die Präferenz `dom.battery.enabled` auf `true` gesetzt wird und wird standardmäßig ab Firefox 11 aktiviert sein).

#### Canvas

- Die [`createPattern()`](/de/docs/Web/API/CanvasRenderingContext2D#createpattern%28%29) Methode löst jetzt eine Ausnahme aus, wenn eine Quelle mit null-Größe angegeben wird.
- Wenn Sie einen unendlichen Wert für einen der numerischen Parameter von [`putImageData()`](/de/docs/Web/API/CanvasRenderingContext2D#putimagedata%28%29) verwenden, wird der Aufruf jetzt still ignoriert, anstatt eine Ausnahme auszulösen, entsprechend der Spezifikation.

#### WebGL

- Firefox 10 unterstützt jetzt die [`OES_standard_derivatives`](https://registry.khronos.org/webgl/extensions/OES_standard_derivatives/) Erweiterung.
- [Neue Präferenzen wurden hinzugefügt](/de/docs/Web/API/WebGL_API#webgl_debugging_and_testing), um WebGL-Code auf Kompatibilität mit minimal ausgestattet Geräten auf Ihrer gesamten Entwicklungsplattform zu testen.

#### Web Workers

- Die Attribute `XMLHttpRequest.responseType` und `XMLHttpRequest.response` sind jetzt innerhalb von [Workers](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers#section_2) verfügbar.
- Der Konstruktor [`Worker()`](/de/docs/Web/API/Worker/Worker) akzeptiert jetzt [Data-URLs](/de/docs/Web/URI/Reference/Schemes/data).

#### IndexedDB

Große Fortschritte wurden gemacht, um IndexedDB auf die neueste Entwurfsspezifikation zu aktualisieren. Diese Bemühungen werden in Firefox 11 fortgeführt.

- Die Methoden [`IDBIndex.count()`](/de/docs/Web/API/IDBIndex#count) und [`IDBObjectStore.count()`](/de/docs/Web/API/IDBObjectStore#count) wurden hinzugefügt.
- Die Methode [`IDBCursor.advance()`](/de/docs/Web/API/IDBCursor#advance) wurde hinzugefügt.
- Wenn ein unbekannter optionaler Parameter bei [`IDBObjectStore.createIndex()`](/de/docs/Web/API/IDBObjectStore#createindex) oder [`IDBDatabase.createObjectStore()`](/de/docs/Web/API/IDBDatabase#createobjectstore) auftritt, wird Gecko keine Ausnahme mehr auslösen, sondern diesen ignorieren.
- Wenn [`IDBTransaction.abort()`](/de/docs/Web/API/IDBTransaction#abort%28%29) aufgerufen wird, haben alle ausstehenden [`IDBRequest`](/de/docs/Web/API/IDBRequest) ihre `errorCode` auf `ABORT_ERROR` gesetzt.
- Die Methoden [`IDBObjectStore.delete()`](/de/docs/Web/API/IDBObjectStore/delete) und [`IDBCursor.delete()`](/de/docs/Web/API/IDBCursor/delete) setzen nun das `result` Attribut der zurückgegebenen [`IDBRequest`](/de/docs/Web/API/IDBRequest) auf `undefined`.
- Die Methode `IDBDatabase.setVersion()` wurde entfernt, da sie aus der neuesten Spezifikation entfernt wurde. Die Version der Datenbank wird durch die [`IDBFactory.open()`](/de/docs/Web/API/IDBFactory#open) Methode angegeben, die aktualisiert wurde, und der `onupgradeneeded` Rückruf ermöglicht die Aktualisierung des Schemas der Datenbank. Die Version selbst wurde von einem `DOMString` in ein `unsigned long long` geändert. Die `IDBVersionChangeRequest` Schnittstelle wurde entfernt und durch die neue [`IDBOpenDBRequest`](/de/docs/Web/API/IDBOpenDBRequest) Schnittstelle ersetzt.
- Wenn eine Datenbank mit [`IDBFactory.open()`](/de/docs/Web/API/IDBFactory/open) geöffnet wird und der `version` Parameter nicht angegeben ist und die Datenbank nicht existiert, dann wird sie mit der Version `1` erstellt.
- Die Methode [`IDBFactory.deleteDatabase()`](/de/docs/Web/API/IDBFactory#deletedatabase%28%29) wurde hinzugefügt.
- Methoden, die über einen [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange) suchen (wie [`IDBObjectStore.openCursor`](/de/docs/Web/API/IDBObjectStore/openCursor) und [`IDBIndex.getKey`](/de/docs/Web/API/IDBIndex/getKey)), können entweder einen einzelnen Schlüssel oder einen Schlüsselbereich akzeptieren.

#### Andere

- Wenn der richtige MIME-Typ `image/svg+xml` übergeben wird, [erstellt der `DOMParser` nun ein `SVGDocument`](/de/docs/Web/API/DOMParser#parsing_a_svg_document), wenn ihm ein String mit SVG gegeben wird.
- In der Vergangenheit würde [`element.setAttribute()`](/de/docs/Web/API/Element/setAttribute) beim Parsen von Ganzzahlen einen Fehler melden, wenn die Ganzzahl irgendwelche nicht-numerischen Zeichen enthielt (zum Beispiel "42foo"). Jetzt wird das korrekt als die Zahl 42 abgerundet, gemäß der Spezifikation.
- Die ESC-Taste sorgt nicht mehr fälschlicherweise dafür, dass der [`onkeydown`](/de/docs/Web/API/Element/keydown_event) Handler fälschlicherweise aufgerufen wird.
- Die `NameList` Schnittstelle wird nicht mehr implementiert; sie hatte zuvor eine Implementierung ohne Möglichkeit, tatsächlich auf eine zuzugreifen.
- Die Methode [`document.createProcessingInstruction()`](/de/docs/Web/API/Document/createProcessingInstruction) funktioniert jetzt sowohl bei HTML- als auch bei XML-Dokumenten. [`ProcessingInstruction`](/de/docs/Web/API/ProcessingInstruction) Knoten werden nach wie vor nur bei XML-Dokumenten unterstützt, aber da Knoten zwischen Dokumenten verschoben werden können, ist es hilfreich, sie auch bei HTML-Dokumenten erstellen zu können.
- Der `XMLHttpRequest` `responseType` `"moz-json"` [einführt in Firefox 9](/de/docs/Mozilla/Firefox/Releases/9#dom) wurde auf den neuesten Entwurf der Spezifikation aktualisiert und wurde nicht mehr mit Präfix versehen. In [Firefox-Bug 707142](https://bugzil.la/707142#c13) finden Sie eine Notiz dazu.

### CSS

- CSS 3D-Transformationen werden jetzt unterstützt. Dies beinhaltet die Unterstützung für die {{ cssxref("transform-style") }}, {{ cssxref("perspective") }}, {{ cssxref("perspective-origin") }} und {{ cssxref("backface-visibility") }} Eigenschaften, sowie für 3D-Transformationsfunktionen in den {{ cssxref("transform") }} und {{ cssxref("transform-function") }} Eigenschaften. Weitere Informationen finden Sie unter [Using CSS transforms](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms#3d_specific_css_properties).
- Zwei neue Werte für die CSS-Eigenschaft {{ cssxref("unicode-bidi") }} wurden hinzugefügt: `-moz-isolation` und `-moz-plaintext`. Der Wert `-moz-isolation` isoliert, aus einer Richtungssicht, das Element von seiner Umgebung und lässt es eine andere Richtung haben. Ein Element mit `unicode-bidi:-moz-isolation` verhält sich wie ein {{ HTMLElement("bdi") }} Element. Der Wert `-moz-plaintext` weist den Browser an, die Unicode-Browser-Heuristik zur Bestimmung der Richtung zu verwenden und nicht die CSS-Eigenschaft {{ cssxref("direction") }}.
- Die CSS-Eigenschaften {{ cssxref("gradient/linear-gradient") }} und {{ cssxref("gradient/repeating-linear-gradient") }} wurden aktualisiert, um die neue `to` Syntax und den _magic corner_ Algorithmus zu unterstützen. Dies ermöglicht es, eine präzise Farbe an der Ecke eines mit Verlauf gefüllten Kastens zu geben.
- Der Umgang der {{ cssxref("text-overflow") }} Eigenschaft mit Fällen, in denen der Kasten auf beiden Seiten überläuft, während die `text-overflow` Eigenschaft nur auf einer Seite gesetzt ist, [wurde korrigiert](/de/docs/Web/CSS/text-overflow#gecko_notes).
- Die Handhabung der {{ cssxref("position") }} Eigenschaft auf Elementen innerhalb von positionierten {{ HTMLElement("table") }} Elementen [wurde behoben](/de/docs/Web/CSS/position#gecko_notes). **Diese Änderung wird das Layout von Seiten betreffen; jedoch entsprechen wir nun der CSS-Spezifikation und anderen Browsern, sodass dies leicht zu beheben sein sollte.**
- Das Zusammenfallen von Rändern um {{ HTMLElement("table") }} Elemente wurde so behoben, dass sie der CSS-Spezifikation entsprechen. Zuvor wurden die Ränder von Tabellenelementen nicht zusammen mit anderen angrenzenden Elementen zusammengefallend, was zu falschem Layout führte. **Diese Änderung wird das Layout von Seiten beeinflussen; jedoch entsprechen wir nun der CSS-Spezifikation und anderen Browsern, sodass dies leicht zu beheben sein sollte.**

### SVG

- Das {{ SVGElement("mask") }} Element wurde aktualisiert, um sowohl sRGB als auch linearRGB zu unterstützen, und jetzt standardmäßig sRGB, in Übereinstimmung mit der neuesten Revision der SVG 1.1 Spezifikation.

### Netzwerk

- Der HTTP `Accept-Charset` Header wird in HTTP-Anfragen nicht mehr gesendet.
  In seiner Abwesenheit sollten Server antworten, indem sie UTF-8 senden.

### Entwickler-Tools

- Das [`console`](/de/docs/Web/API/console) Objekt hat zwei neue Methoden, [`console.time()`](/de/docs/Web/API/console/time_static) und [`console.timeEnd()`](/de/docs/Web/API/console/timeEnd_static), die zum Setzen von Timern auf einer Seite verwendet werden können.
- Der neue [Seiteninspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) wurde hinzugefügt, der eine hervorragende Möglichkeit bietet, das HTML und CSS hinter Ihrem Inhalt zu untersuchen und zu manipulieren.

## Änderungen für Mozilla- und Add-on-Entwickler

Für eine Übersicht über mögliche Probleme, die beim Aktualisieren Ihrer Add-ons zur Unterstützung von Firefox 10 auftreten können, siehe [Aktualisieren von Add-ons für Firefox 10](/de/docs/Mozilla/Firefox/Updating_add-ons_for_Firefox_10).

> [!NOTE]
> Der alte [`PRBool`](/de/docs/PRBool) Datentyp wurde eingestellt! Überall in der Dokumentation, wo darauf Bezug genommen wird, wird jetzt der Standard C++ `bool` Typ verwendet. Die Dokumentation wird in Zukunft aktualisiert, aber denken Sie vorerst daran.

### Manifeste

- Unterstützung für [`<em:strictCompatibility>`](/de/docs/Install_Manifests#strictcompatibility) wurde dem Installationsmanifest hinzugefügt. Es erlaubt Add-on-Autoren, sich für die Überprüfung der maximalen Version ihrer Erweiterung zu entscheiden. Wenn auf `true` gesetzt, wird das Add-on deaktiviert, wenn die Anwendungsversion größer als `<em:maxVersion>` ist. Firefox 10 ist so voreingestellt, dass Add-ons unabhängig von der angegebenen maximalen Version kompatibel sind. Diese Flagge überschreibt diese Präferenz. Sie sollten dies festlegen, wenn Ihr Add-on Dinge tut, die wahrscheinlich durch Firefox-Updates beschädigt werden, **aber nicht**, wenn Ihr Add-on eine binäre Komponente enthält, da solche Add-ons immer streng überprüft werden (denken Sie daran, dass binäre Komponenten immer für jede größere Firefox-Version neu kompiliert werden müssen).
- Wenn Sie zum alten Verhalten zurückkehren möchten - das heißt, zur strengen Kompatibilitätsprüfung für alle Add-ons, unabhängig vom Wert der `strictCompatibility` Flagge in ihren Manifesten, können Sie die Präferenz `extensions.strictCompatibility` auf `true` setzen.

### XUL

- Bootstrapped Add-ons, die eine `chrome.manifest` Datei verwenden, haben nun die Manifestdatei automatisch registriert. Sehen Sie den Abschnitt [Benutzeroberfläche hinzufügen mit einer chrome.manifest](/de/docs/Extensions/Bootstrapped_extensions#Adding_user_interface_with_a_chrome.manifest) für Details.

### XPConnect

- Mehrere neue Eigenschaften und Methoden wurden zu `Components.utils` hinzugefügt, die den Zugriff auf verschiedene debugging-bezogene Informationen gewähren.

### Schnittstellenänderungen

- Die `mozISpellCheckingEngine` und `nsIEditorSpellCheck` Schnittstellen wurden aktualisiert, um es neustartlosen Add-ons zu erlauben, Wörterbücher zum Rechtschreibprüfer hinzuzufügen.
- Das Attribut `nsIBrowserHistory.lastPageVisited` wurde entfernt.
- Die `nsIDocumentViewer` Schnittstelle wurde in `nsIContentViewer` integriert.
- Die `nsIURIFixup` Schnittstelle hat eine neue Flagge, `FIXUP_FLAG_USE_UTF8`, die es ermöglicht, UTF-8 anstelle des Plattform-Zeichensatzes zu verwenden, bei Konvertierungen.

### Plug-in-Änderungen

- Die neue Variable `NPNVdocumentOrigin` wurde hinzugefügt; diese gibt den Dokumentursprung zurück und ist sicherer als [`window.location`](/de/docs/Web/API/Window/location).

### Änderungen am Buildsyst

- Die Build-Option `--disable-rdf`, die es tatsächlich unmöglich machte, erfolgreich zu bauen, wurde entfernt. Es wird daran gearbeitet, die RDF-Unterstützung vollständig zu entfernen, aber zur Zeit erfordert XUL diese noch für die Funktionalität. Einzelheiten zum Fortschritt beim Entfernen der letzten Überreste von RDF finden Sie in [Firefox-Bug 559505](https://bugzil.la/559505).
- Die Build-Option `--disable-smil` wurde entfernt.

### Siehe auch

- [Firefox 9 für Entwickler](/de/docs/Mozilla/Firefox/Releases/9)
- [Firefox 8 für Entwickler](/de/docs/Mozilla/Firefox/Releases/8)
- [Firefox 7 für Entwickler](/de/docs/Mozilla/Firefox/Releases/7)
- [Firefox 6 für Entwickler](/de/docs/Mozilla/Firefox/Releases/6)
- [Firefox 5 für Entwickler](/de/docs/Mozilla/Firefox/Releases/5)
- [Firefox 4 für Developer](/de/docs/Mozilla/Firefox/Releases/4)
- [Firefox 3.6 für Entwickler](/de/docs/Mozilla/Firefox/Releases/3.6)
- [Firefox 3.5 für Entwickler](/de/docs/Mozilla/Firefox/Releases/3.5)
- [Firefox 3 für Entwickler](/de/docs/Mozilla/Firefox/Releases/3)
- [Firefox 2 für Entwickler](/de/docs/Mozilla/Firefox/Releases/2)
- [Firefox 1.5 für Entwickler](/de/docs/Mozilla/Firefox/Releases/1.5)
