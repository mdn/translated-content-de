---
title: Firefox 10 für Entwickler
slug: Mozilla/Firefox/Releases/10
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{FirefoxSidebar}}

Firefox 10 wurde am 31. Januar 2012 veröffentlicht. Dieser Artikel bietet Informationen über die neuen Funktionen und die wichtigsten behobenen Fehler in dieser Version sowie Links zu detaillierteren Dokumentationen sowohl für Webentwickler als auch für Erweiterungsentwickler.

> [!NOTE]
> Firefox 10 ist die erste Version dieses Browsers mit zweistelliger Versionsnummer. Dies kann bei einigen UA-Erkennungsskripten zu Problemen führen. Stellen Sie sicher, dass Sie diese sowie die in eingebetteter Drittanbietersoftware enthaltenen Skripte überprüfen, wie z.B. Bibliotheken. Für weitere Informationen darüber siehe den Artikel [Firefox goes 2-digit auf hack.mozilla.org](https://hacks.mozilla.org/2012/01/firefox-goes-2-digit-time-to-check-your-ua-sniffing-scripts/).

## Änderungen für Webentwickler

### HTML

- Das neue HTML5 {{ HTMLElement("bdi") }} Element für bidirektionale Isolation, das die Isolierung von Teilen eines Textes mit unterschiedlicher Richtung ermöglicht, wurde implementiert. Dies ist besonders nützlich, wenn Texte mit unbekannter Richtung, zum Beispiel aus einer Datenbank, inmitten eines Textes mit bekannter und möglicherweise unterschiedlicher Richtung angezeigt werden sollen.
- Sie können jetzt ein Fragment "top" für das [`href`](/de/docs/Web/HTML/Element/a#href) Attribut angeben, um einen Link zum Anfang der Seite zu erstellen. Das funktionierte früher, verschwand dann eine Weile und ist jetzt zurück, um Kompatibilität mit der HTML5-Spezifikation herzustellen. Zum Beispiel: `<a href="#top">Return to top of page</a>`.

### JavaScript

- Die Methode `WeakMap.set()` gibt jetzt `undefined` zurück, anstatt sich selbst.
- Ein Fehler im Umgang mit regulären Ausdrücken, der in Firefox 7 eingeführt wurde, wurde behoben. Siehe [Firefox Bug 683838](https://bugzil.la/683838) für die Details.
- Sie können die veraltete ECMAScript for XML (E4X) Syntax nicht mehr im [ECMAScript 5-Strikmodus](/de/docs/Web/JavaScript/Reference/Strict_mode) (also nach `"use strict;"`) verwenden.

### DOM

#### DOM3 Events

- Die DOM-Ereignismethode [`event.stopImmediatePropagation`](/de/docs/Web/API/Event/stopImmediatePropagation) wurde implementiert.
- Die Mausereignisse `mouseenter` und `mouseleave` wurden implementiert.

#### DOM4

- Das Attribut [`document.xmlVersion`](/de/docs/Web/API/Document/xmlVersion) (das nur lesbar und nicht setzbar war) wurde entfernt, da es in der DOM4-Spezifikation als veraltet markiert wurde. Der Artikel für [`document.xmlVersion`](/de/docs/Web/API/Document/xmlVersion) schlägt nun eine Methode vor, um zu erkennen, ob das Dokument HTML oder XML ist, ohne diese Eigenschaft zu verwenden.
- Das Attribut `document.xmlStandalone` wurde entfernt, da es in der DOM4-Spezifikation als veraltet markiert wurde.
- Das Attribut [`document.xmlEncoding`](/de/docs/Web/API/Document/xmlEncoding) wurde entfernt, da es in der DOM4-Spezifikation als veraltet markiert wurde.
- Das Attribut `text.isElementContentWhiteSpace` wurde entfernt, da es in der DOM4-Spezifikation als veraltet markiert wurde.
- Die Methode `text.replaceWholeText` wurde entfernt, da sie in der DOM4-Spezifikation als veraltet markiert wurde.
- Die Methode [`node.isSameNode`](/de/docs/Web/API/Node/isSameNode) wurde entfernt, da sie in der DOM4-Spezifikation als veraltet markiert wurde. Statt `node1.isSameNode(node2)` können Sie den `===` Operator verwenden, so: `node1 === node2`.

#### Page Visibility API

- Die [Page Visibility API](/de/docs/Web/API/Page_Visibility_API) wurde implementiert (mit Präfix): `document.mozHidden`, `document.mozVisibilityState` sind verfügbar und das Ereignis `mozvisibilitychanged` wird gesendet, wenn sich der Zustand ändert.

#### Full Screen API

- Unterstützung für [`document.fullscreenEnabled`](/de/docs/Web/API/Document/fullscreenEnabled) wurde hinzugefügt.
- Die neue {{ cssxref(":-moz-full-screen-ancestor") }} Eigenschaft wurde hinzugefügt. Diese ermöglicht das Abgleichen von Elementen, die Vorfahren eines Elements im Vollbildmodus sind.

#### Battery API

- Experimentelle Unterstützung für `navigator.mozBattery` wurde hinzugefügt (kann aktiviert werden, indem die Voreinstellung `dom.battery.enabled` auf `true` gesetzt wird und wird standardmäßig ab Firefox 11 aktiviert sein).

#### Canvas

- Die [`createPattern()`](/de/docs/Web/API/CanvasRenderingContext2D#createpattern%28%29) Methode löst jetzt eine Ausnahme aus, wenn eine Quelle mit der Größe Null angegeben wird.
- Wenn Sie einen unendlichen Wert für einen der numerischen Parameter von [`putImageData()`](/de/docs/Web/API/CanvasRenderingContext2D#putimagedata%28%29) verwenden, wird der Aufruf jetzt stillschweigend ignoriert, anstatt eine Ausnahme auszulösen, in Übereinstimmung mit der Spezifikation.

#### WebGL

- Firefox 10 unterstützt jetzt die [`OES_standard_derivatives`](https://registry.khronos.org/webgl/extensions/OES_standard_derivatives/) Erweiterung.
- [Neue Voreinstellungen wurden hinzugefügt](/de/docs/Web/API/WebGL_API#webgl_debugging_and_testing), um bei der Kompatibilitätsprüfung von WebGL-Code mit minimalfähigen Geräten auf Ihrer vollständigen Entwicklungsplattform zu helfen.

#### Web Workers

- Die Attribute `XMLHttpRequest.responseType` und `XMLHttpRequest.response` sind jetzt innerhalb von [Workers](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers#section_2) verfügbar.
- Der [`Worker()`](/de/docs/Web/API/Worker#worker) Konstruktor akzeptiert jetzt [Daten-URLs](/de/docs/Web/URI/Schemes/data).

#### IndexedDB

Große Fortschritte wurden erzielt, um IndexedDB auf die neueste Entwurfspezifikation zu aktualisieren. Diese Bemühungen werden in Firefox 11 fortgesetzt.

- Die Methoden [`IDBIndex.count()`](/de/docs/Web/API/IDBIndex#count) und [`IDBObjectStore.count()`](/de/docs/Web/API/IDBObjectStore#count) wurden hinzugefügt.
- Die Methode [`IDBCursor.advance()`](/de/docs/Web/API/IDBCursor#advance) wurde hinzugefügt.
- Beim Auftreten eines unbekannten optionalen Parameters in [`IDBObjectStore.createIndex()`](/de/docs/Web/API/IDBObjectStore#createindex) oder [`IDBDatabase.createObjectStore()`](/de/docs/Web/API/IDBDatabase#createobjectstore) löst Gecko keine Ausnahme mehr aus, sondern ignoriert ihn.
- Wenn [`IDBTransaction.abort()`](/de/docs/Web/API/IDBTransaction#abort%28%29) aufgerufen wird, erhalten alle ausstehenden [`IDBRequest`](/de/docs/Web/API/IDBRequest) ihren `errorCode` auf `ABORT_ERROR` gesetzt.
- Die Methoden [`IDBObjectStore.delete()`](/de/docs/Web/API/IDBObjectStore/delete) und [`IDBCursor.delete()`](/de/docs/Web/API/IDBCursor/delete) setzen jetzt das `result` Attribut der zurückgegebenen [`IDBRequest`](/de/docs/Web/API/IDBRequest) auf `undefined`.
- Die Methode `IDBDatabase.setVersion()` wurde entfernt, da sie aus der neuesten Spezifikation entfernt wurde. Die Version der Datenbank wird durch die Methode [`IDBFactory.open()`](/de/docs/Web/API/IDBFactory#open) angegeben, die aktualisiert wurde, und der `onupgradeneeded` Rückruf ermöglicht die Aktualisierung des Datenbankschemas. Die Version selbst wurde von einem `DOMString` in ein `unsigned long long` geändert. Die `IDBVersionChangeRequest` Schnittstelle wurde entfernt und durch die neue [`IDBOpenDBRequest`](/de/docs/Web/API/IDBOpenDBRequest) Schnittstelle ersetzt.
- Beim Öffnen einer Datenbank mit [`IDBFactory.open()`](/de/docs/Web/API/IDBFactory/open), wenn der `version` Parameter nicht bereitgestellt wird und die Datenbank nicht existiert, wird sie mit einer Version von `1` erstellt.
- Die Methode [`IDBFactory.deleteDatabase()`](/de/docs/Web/API/IDBFactory#deletedatabase%28%29) wurde hinzugefügt.
- Methoden, die über ein [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange) suchen (wie [`IDBObjectStore.openCursor`](/de/docs/Web/API/IDBObjectStore/openCursor) und [`IDBIndex.getKey`](/de/docs/Web/API/IDBIndex/getKey)) können entweder einen einzelnen Schlüssel oder einen Schlüsselbereich akzeptieren.

#### Weitere Änderungen

- Wenn der richtige MIME-Typ `image/svg+xml` angegeben wird, [erstellt der `DOMParser` jetzt ein `SVGDocument`](/de/docs/Web/API/DOMParser#parsing_a_svg_document), wenn eine Zeichenkette mit SVG gegeben wird.
- Früher berichtete [`element.setAttribute()`](/de/docs/Web/API/Element/setAttribute) beim Parsen von Ganzzahlen einen Fehler, wenn die Ganzzahl nicht-numerische Zeichen enthielt (z.B. "42foo"). Jetzt wird dies korrekt als die Zahl 42 abgekürzt, in Übereinstimmung mit der Spezifikation.
- Die ESC-Taste löst nicht mehr fälschlicherweise den [`onkeydown`](/de/docs/Web/API/Element/keydown_event) Handler aus.
- Die `NameList` Schnittstelle wird nicht mehr implementiert; sie hatte zuvor eine Implementierung ohne Möglichkeit, tatsächlich auf eine zuzugreifen.
- Die Methode [`document.createProcessingInstruction()`](/de/docs/Web/API/Document/createProcessingInstruction) funktioniert jetzt sowohl in HTML- als auch in XML-Dokumenten. [`ProcessingInstruction`](/de/docs/Web/API/ProcessingInstruction) Knoten werden immer noch nur in XML-Dokumenten unterstützt, aber da Knoten zwischen Dokumenten verschoben werden können, ist es hilfreich, sie auch in HTML-Dokumenten erstellen zu können.
- Die `XMLHttpRequest` `responseType` "`moz-json`" [eingeführt in Firefox 9](/de/docs/Mozilla/Firefox/Releases/9#dom) wurde auf den neuesten Entwurf der Spezifikation aktualisiert und das Präfix entfernt. Siehe Hinweis in [Firefox Bug 707142](https://bugzil.la/707142#c13).

### CSS

- CSS 3D-Transformationen werden jetzt unterstützt. Dies schließt die Unterstützung für die Eigenschaften {{ cssxref("transform-style") }}, {{ cssxref("perspective") }}, {{ cssxref("perspective-origin") }} und {{ cssxref("backface-visibility") }} sowie für 3D-Transformationsfunktionen in den Eigenschaften {{ cssxref("transform") }} und {{ cssxref("transform-function") }} ein. Siehe [Verwendung von CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms#3d_specific_css_properties) für Details.
- Zwei neue Werte für die CSS-Eigenschaft {{ cssxref("unicode-bidi") }} wurden hinzugefügt: `-moz-isolation` und `-moz-plaintext`. Der `-moz-isolation` Wert isoliert aus einer Richtungsperspektive das Element von seiner Umgebung und ermöglicht ihm eine andere Richtung. Ein Element mit `unicode-bidi:-moz-isolation` verhält sich wie ein {{ HTMLElement("bdi") }} Element. Der `-moz-plaintext` weist den Browser an, die Unicode-Browser-Heuristik zur Bestimmung der Richtung zu verwenden und nicht die CSS-Eigenschaft {{ cssxref("direction") }}.
- Die CSS-Eigenschaften {{ cssxref("gradient/linear-gradient") }} und {{ cssxref("gradient/repeating-linear-gradient") }} wurden aktualisiert, um die neue `to` Syntax und den _magic corner_ Algorithmus zu unterstützen. Dies ermöglicht es, eine präzise Farbe in der Ecke eines von einem Verlauf gefüllten Kastens zu geben.
- Die Handhabung der {{ cssxref("text-overflow") }} Eigenschaft in Fällen, in denen das Feld auf beiden Seiten überläuft, während die `text-overflow` Eigenschaft auf Überlauf nur auf einer Seite eingestellt ist, [wurde korrigiert](/de/docs/Web/CSS/text-overflow#gecko_notes).
- Die Handhabung der {{ cssxref("position") }} Eigenschaft bei Elementen innerhalb von positionierten {{ HTMLElement("table") }} Elementen [wurde behoben](/de/docs/Web/CSS/position#gecko_notes). **Diese Änderung wirkt sich auf das Layout von Seiten aus; wir entsprechen jetzt jedoch der CSS-Spezifikation und anderen Browsern, sodass dies leicht zu beheben sein sollte.**
- Die Randzusammenführung rund um {{ HTMLElement("table") }} Elemente wurde behoben, um der CSS-Spezifikation zu entsprechen. Zuvor wurden die Ränder von Tabellenelementen nicht mit anderen angrenzenden Elementen zusammengeführt, was zu einem falschen Layout führte. **Diese Änderung wirkt sich auf das Layout von Seiten aus; wir entsprechen jetzt jedoch der CSS-Spezifikation und anderen Browsern, sodass dies leicht zu beheben sein sollte.**

### SVG

- Das {{ SVGElement("mask") }} Element wurde aktualisiert, um sowohl sRGB als auch linearRGB zu unterstützen, und standardmäßig auf sRGB gesetzt, in Übereinstimmung mit der neuesten Revision der SVG 1.1 Spezifikation.

### Netzwerke

- Der HTTP `Accept-Charset` Header wird nicht mehr in HTTP-Anfragen gesendet. In dessen Abwesenheit sollten Server antworten, indem sie UTF-8 senden.

### Entwicklerwerkzeuge

- Das [`console`](/de/docs/Web/API/Console) Objekt hat zwei neue Methoden, [`console.time()`](/de/docs/Web/API/Console/time_static) und [`console.timeEnd()`](/de/docs/Web/API/Console/timeEnd_static), die verwendet werden können, um Timer auf einer Seite einzustellen.
- Der neue [Seiteninspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) wurde hinzugefügt, um eine hervorragende Möglichkeit zur Untersuchung und Manipulation des HTML und CSS hinter Ihrem Inhalt bereitzustellen.

## Änderungen für Mozilla- und Add-on-Entwickler

Für einen Überblick über mögliche Probleme, die beim Aktualisieren Ihrer Add-ons auf die Unterstützung von Firefox 10 auftreten können, siehe [Aktualisieren von Add-ons für Firefox 10](/de/docs/Mozilla/Firefox/Updating_add-ons_for_Firefox_10).

> [!NOTE]
> Der alte [`PRBool`](/de/docs/PRBool) Datentyp wurde eingestellt! Überall in der Dokumentation, wo darauf verwiesen wird, wird stattdessen der Standard-C++ `bool` Typ verwendet. Die Dokumentation wird in Zukunft aktualisiert, aber für den Moment sollten Sie dies im Auge behalten.

### Manifeste

- Unterstützung für [`<em:strictCompatibility>`](/de/docs/Install_Manifests#strictcompatibility) wurde dem Installationsmanifest hinzugefügt. Sie ermöglicht es Erweiterungsautoren, sich für die Überprüfung der maximalen Version ihrer Erweiterung zu entscheiden. Wenn auf `true` gesetzt, wird das Add-on deaktiviert, wenn die Anwendungs-Version größer als `<em:maxVersion>` ist. Firefox 10 geht standardmäßig davon aus, dass Add-ons kompatibel sind, unabhängig von der angegebenen maximalen Version. Diese Flag setzt diese Voreinstellung außer Kraft. Sie sollten dies setzen, wenn Ihr Add-on Dinge tut, die wahrscheinlich durch Firefox-Updates beschädigt werden, **aber nicht**, wenn Ihr Add-on eine binäre Komponente enthält, da solche Add-ons immer strikt überprüft werden (denken Sie daran, dass binäre Komponenten immer für jede große Firefox-Veröffentlichung neu kompiliert werden müssen).
- Wenn Sie zum alten Verhalten zurückkehren möchten - d.h. zur strikten Kompatibilitätsprüfung für alle Add-ons, unabhängig vom Wert des `strictCompatibility` Flags in ihren Manifesten, können Sie die Voreinstellung `extensions.strictCompatibility` auf `true` setzen.

### XUL

- Bootstrap-Add-ons, die eine `chrome.manifest` Datei verwenden, haben jetzt die Manifestdatei automatisch registriert. Siehe den Abschnitt [Hinzufügen der Benutzeroberfläche mit einem chrome.manifest](/de/docs/Extensions/Bootstrapped_extensions#Adding_user_interface_with_a_chrome.manifest) für Details.

### XPConnect

- Mehrere neue Eigenschaften und Methoden wurden zu `Components.utils` hinzugefügt, die den Zugriff auf verschiedene debuggingbezogene Informationen gewähren.

### Schnittstellenänderungen

- Die Schnittstellen `mozISpellCheckingEngine` und `nsIEditorSpellCheck` wurden aktualisiert, um das Hinzufügen von Wörterbüchern zum Rechtschreibprüfer durch Add-ons ohne Neustart zu ermöglichen.
- Das `nsIBrowserHistory.lastPageVisited` Attribut wurde entfernt.
- Die Schnittstelle `nsIDocumentViewer` wurde in `nsIContentViewer` integriert.
- Die Schnittstelle `nsIURIFixup` hat eine neue Flagge, `FIXUP_FLAG_USE_UTF8`, die es Ihnen ermöglicht, ihr anzugeben, UTF-8 anstelle des Plattform-Zeichensatzes zu verwenden, wenn Konvertierungen durchgeführt werden.

### Plugin-Änderungen

- Die neue Variable `NPNVdocumentOrigin` wurde hinzugefügt; diese gibt den Dokumentorigin zurück und ist sicherer als [`window.location`](/de/docs/Web/API/Window/location).

### Änderungen im Build-System

- Die `--disable-rdf` Build-Option, die es tatsächlich unmöglich machte, erfolgreich zu bauen, wurde entfernt. Es wird daran gearbeitet, die RDF-Unterstützung vollständig zu entfernen, aber derzeit benötigt XUL sie noch, um zu funktionieren. Siehe [Firefox Bug 559505](https://bugzil.la/559505) für Fortschritte beim Entfernen der letzten Überbleibsel der erforderlichen RDF-Unterstützung.
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
