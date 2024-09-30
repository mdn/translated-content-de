---
title: Firefox 10 für Entwickler
slug: Mozilla/Firefox/Releases/10
l10n:
  sourceCommit: 33cada2d06f8d0cd009d9d5348de6e3165bba67f
---

{{FirefoxSidebar}}

Firefox 10 wurde am 31. Januar 2012 veröffentlicht. Dieser Artikel bietet Informationen über die neuen Funktionen und die wichtigsten behobenen Fehler in dieser Version sowie Links zu detaillierterer Dokumentation für Webentwickler und Add-on-Entwickler.

> [!NOTE]
> Firefox 10 ist die erste Version dieses Browsers mit zweistelliger Nummerierung. Dies kann Probleme mit einigen UA-Sniffing-Skripten verursachen. Überprüfen Sie diese und auch solche in eingebetteter Drittanbieter-Software, wie z.B. Bibliotheken. Weitere Informationen hierzu finden Sie im [Artikel "Firefox goes 2-digit" auf hack.mozilla.org](https://hacks.mozilla.org/2012/01/firefox-goes-2-digit-time-to-check-your-ua-sniffing-scripts/).

## Änderungen für Webentwickler

### HTML

- Das neue HTML5-Element {{ HTMLElement("bdi") }}, bidirektionale Isolation, das eine Isolation von Textteilen mit unterschiedlicher Richtung ermöglicht, wurde implementiert. Dies ist besonders nützlich, wenn ein Text mit unbekannter Richtungsgabe zum Beispiel aus einer Datenbank in der Mitte eines Textes mit bekannter, möglicherweise unterschiedlicher Richtung dargestellt wird.
- Sie können jetzt das Fragment "top" für das [`href`](/de/docs/Web/HTML/Element/a#href)-Attribut angeben, um einen Link zum oberen Teil der Seite zu erstellen. Dies funktionierte früher, verschwand eine Weile und ist jetzt zurück, für Kompatibilität mit der HTML5-Spezifikation. Zum Beispiel: `<a href="#top">Zurück zum Seitenanfang</a>`.

### JavaScript

- Die Methode `WeakMap.set()` gibt jetzt `undefined` zurück, anstatt sich selbst.
- Ein Fehler in der RegEx-Behandlung in Firefox 7 wurde behoben. Siehe [Firefox-Bug 683838](https://bugzil.la/683838) für die Einzelheiten.
- Sie können die veraltete EcmaScript für XML (E4X) Syntax im [ECMAScript 5 Strikter Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) nicht mehr verwenden (also nach `"use strict;"`).

### DOM

#### DOM3 Events

- Die DOM-Event-Methode [`event.stopImmediatePropagation`](/de/docs/Web/API/Event/stopImmediatePropagation) wurde implementiert.
- Die Mausereignisse `mouseenter` und `mouseleave` wurden implementiert.

#### DOM4

- Das Attribut [`document.xmlVersion`](/de/docs/Web/API/Document/xmlVersion) (das nur lesbar und nicht setzbar war) wurde entfernt, da es in der DOM4-Spezifikation veraltet ist. Der Artikel zu [`document.xmlVersion`](/de/docs/Web/API/Document/xmlVersion) schlägt nun eine Methode vor, um zu erkennen, ob das Dokument HTML oder XML ist, ohne diese Eigenschaft zu verwenden.
- Das Attribut `document.xmlStandalone` wurde entfernt, da es in der DOM4-Spezifikation veraltet ist.
- Das Attribut [`document.xmlEncoding`](/de/docs/Web/API/Document/xmlEncoding) wurde entfernt, da es in der DOM4-Spezifikation veraltet ist.
- Das Attribut `text.isElementContentWhiteSpace` wurde entfernt, da es in der DOM4-Spezifikation veraltet ist.
- Die Methode `text.replaceWholeText` wurde entfernt, da sie in der DOM4-Spezifikation veraltet ist.
- Die Methode [`node.isSameNode`](/de/docs/Web/API/Node/isSameNode) wurde entfernt, da sie in der DOM4-Spezifikation veraltet ist. Anstelle von `node1.isSameNode(node2)` können Sie den `===`-Operator verwenden, so: `node1 === node2`.

#### Sichtbarkeits-API der Seite

- Die [Page Visibility API](/de/docs/Web/API/Page_Visibility_API) wurde implementiert (mit Präfix): `document.mozHidden`, `document.mozVisibilityState` sind verfügbar und das Ereignis `mozvisibilitychanged` wird gesendet, wenn der Zustand geändert wird.

#### Vollbild-API

- Unterstützung für [`Document/fullscreenEnabled`](/de/docs/Web/API/Document/fullscreenEnabled) wurde hinzugefügt.
- Die neue Eigenschaft {{ cssxref(":-moz-full-screen-ancestor") }} wurde hinzugefügt. Diese ermöglicht ein Abgleichen mit Elementen, die Vorfahren eines Elements im Vollbildmodus sind.

#### Batterie-API

- Experimentelle Unterstützung für [`window.navigator.mozBattery`](/de/docs/Web/API/Window/navigator/mozBattery) wurde hinzugefügt (kann aktiviert werden, indem die Einstellung `dom.battery.enabled` auf `true` gesetzt wird und wird standardmäßig ab Firefox 11 aktiviert).

#### Canvas

- Die Methode [`createPattern()`](/de/docs/Web/API/CanvasRenderingContext2D#createpattern%28%29) wirft jetzt eine Ausnahme, wenn eine Null-Quell-Canvas angegeben ist.
- Wenn Sie einen nicht-finiten Wert für einen der numerischen Parameter an [`putImageData()`](/de/docs/Web/API/CanvasRenderingContext2D#putimagedata%28%29) übergeben, wird der Aufruf jetzt still ignoriert, anstatt eine Ausnahme zu werfen, im Einklang mit der Spezifikation.

#### WebGL

- Firefox 10 unterstützt jetzt die [`OES_standard_derivatives`](https://registry.khronos.org/webgl/extensions/OES_standard_derivatives/) Erweiterung.
- [Neue Einstellungen wurden hinzugefügt](/de/docs/Web/API/WebGL_API#webgl_debugging_and_testing), um WebGL-Code für die Kompatibilität mit minimalfähigen Geräten auf Ihrer vollständigen Entwicklungsplattform zu testen.

#### Web Workers

- Die Attribute `XMLHttpRequest.responseType` und `XMLHttpRequest.response` sind jetzt innerhalb von [Workers](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers#section_2) verfügbar.
- Der [`Worker()`](/de/docs/Web/API/Worker#worker)-Konstruktor akzeptiert jetzt [Daten-URLs](/de/docs/Web/URI/Schemes/data).

#### IndexedDB

Es wurden bedeutende Fortschritte gemacht, um IndexedDB auf die neueste Entwurfsspezifikation zu aktualisieren. Diese Bemühungen werden in Firefox 11 fortgesetzt.

- Die Methoden [`IDBIndex.count()`](/de/docs/Web/API/IDBIndex#count) und [`IDBObjectStore.count()`](/de/docs/Web/API/IDBObjectStore#count) wurden hinzugefügt.
- Die Methode [`IDBCursor.advance()`](/de/docs/Web/API/IDBCursor#advance) wurde hinzugefügt.
- Beim Auftreten eines unbekannten optionalen Parameters in [`IDBObjectStore.createIndex()`](/de/docs/Web/API/IDBObjectStore#createindex) oder [`IDBDatabase.createObjectStore()`](/de/docs/Web/API/IDBDatabase#createobjectstore) wird von Gecko keine Ausnahme mehr ausgelöst, sondern es wird ignoriert.
- Wenn [`IDBTransaction.abort()`](/de/docs/Web/API/IDBTransaction#abort%28%29) aufgerufen wird, werden bei allen ausstehenden [`IDBRequest`](/de/docs/Web/API/IDBRequest) das `errorCode` auf `ABORT_ERROR` gesetzt.
- Die Methoden [`IDBObjectStore.delete()`](/de/docs/Web/API/IDBObjectStore/delete) und [`IDBCursor.delete()`](/de/docs/Web/API/IDBCursor/delete) setzen jetzt das `result` Attribut der zurückgegebenen [`IDBRequest`](/de/docs/Web/API/IDBRequest) auf `undefined`.
- Die Methode `IDBDatabase.setVersion()` wurde entfernt, da sie aus der neuesten Spezifikation entfernt wurde. Die Version der Datenbank wird über die Methode [`IDBFactory.open()`](/de/docs/Web/API/IDBFactory#open) angegeben, die aktualisiert wurde, und der `onupgradeneeded`-Callback ermöglicht es, das Schema der Datenbank zu aktualisieren. Die Version selbst wurde von einem `DOMString` zu einem `unsigned long long` geändert. Die `IDBVersionChangeRequest`-Schnittstelle wurde entfernt und durch die neue [`IDBOpenDBRequest`](/de/docs/Web/API/IDBOpenDBRequest)-Schnittstelle ersetzt.
- Wenn eine Datenbank mit [`IDBFactory.open()`](/de/docs/Web/API/IDBFactory/open) geöffnet wird und der `version` Parameter nicht angegeben ist und die Datenbank nicht existiert, wird sie mit einer Version von `1` erstellt.
- Die Methode [`IDBFactory.deleteDatabase()`](/de/docs/Web/API/IDBFactory#deletedatabase%28%29) wurde hinzugefügt.
- Methoden, die über einen [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange) suchen (wie [`IDBObjectStore.openCursor`](/de/docs/Web/API/IDBObjectStore/openCursor) und [`IDBIndex.getKey`](/de/docs/Web/API/IDBIndex/getKey)) können entweder einen einzelnen Schlüssel oder einen Schlüsselbereich akzeptieren.

#### Sonstiges

- Wenn der richtige MIME-Typ, `image/svg+xml`, übergeben wird, [erstellt der `DOMParser` jetzt ein `SVGDocument`](/de/docs/Web/API/DOMParser#parsing_a_svg_document), wenn ihm eine Zeichenkette mit SVG übergeben wird.
- In der Vergangenheit würde [`element.setAttribute()`](/de/docs/Web/API/Element/setAttribute) beim Analysieren von Ganzzahlen einen Fehler melden, wenn die Ganzzahl nicht-numerische Zeichen enthielt (zum Beispiel "42foo"). Jetzt schneidet es dies korrekt als Zahl 42 ab, in Übereinstimmung mit der Spezifikation.
- Die ESC-Taste führt nicht mehr fälschlicherweise dazu, dass der [`onkeydown`](/de/docs/Web/API/Element/keydown_event)-Handler fälschlicherweise aufgerufen wird.
- Die `NameList`-Schnittstelle wird nicht mehr implementiert; sie hatte zuvor eine Implementierung ohne Möglichkeit des Zugriffs.
- Die Methode [`document.createProcessingInstruction()`](/de/docs/Web/API/Document/createProcessingInstruction) funktioniert jetzt sowohl bei HTML- als auch bei XML-Dokumenten. [`ProcessingInstruction`](/de/docs/Web/API/ProcessingInstruction)-Knoten werden immer noch nur bei XML-Dokumenten unterstützt, aber da Knoten zwischen Dokumenten verschoben werden können, ist es hilfreich, sie auch bei HTML-Dokumenten erstellen zu können.
- Der `XMLHttpRequest` `responseType` "`moz-json`" [eingeführt in Firefox 9](/de/docs/Mozilla/Firefox/Releases/9#dom) wurde auf den neuesten Entwurf der Spezifikation aktualisiert und das Präfix wurde entfernt. Siehe Anmerkung in [Firefox-Bug 707142](https://bugzil.la/707142#c13).

### CSS

- CSS 3D-Transformationen werden jetzt unterstützt. Dies umfasst die Unterstützung für die Eigenschaften {{ cssxref("transform-style") }}, {{ cssxref("perspective") }}, {{ cssxref("perspective-origin") }} und {{ cssxref("backface-visibility") }}, sowie für 3D-Transformationsfunktionen in den Eigenschaften {{ cssxref("transform") }} und {{ cssxref("transform-function") }}. Siehe [Verwendung von CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms#3d_specific_css_properties) für Einzelheiten.
- Zwei neue Werte für die CSS-Eigenschaft {{ cssxref("unicode-bidi") }} wurden hinzugefügt: `-moz-isolation` und `-moz-plaintext`. Der Wert `-moz-isolation` isoliert das Element aus Sicht der Richtung von seiner Umgebung und ermöglicht ihm eine andere Richtung. Ein Element mit `unicode-bidi:-moz-isolation` verhält sich wie ein {{ HTMLElement("bdi") }}-Element. Der Wert `-moz-plaintext` weist den Browser an, die Unicode-Browser-Heuristik zur Bestimmung der Richtung zu verwenden und nicht die CSS-{{ cssxref("direction") }}-Eigenschaft.
- Die CSS-Eigenschaften {{ cssxref("gradient/linear-gradient") }} und {{ cssxref("gradient/repeating-linear-gradient") }} wurden aktualisiert, um die neue `to`-Syntax und den _magischen Ecke_-Algorithmus zu unterstützen. Dies ermöglicht die präzise Angabe einer Farbe an der Ecke eines mit Farbverlauf gefüllten Feldes.
- Die Behandlung der Eigenschaft {{ cssxref("text-overflow") }} in Fällen, in denen das Feld auf beiden Seiten überläuft, während die `text-overflow`-Eigenschaft so eingestellt ist, dass sie nur auf einer Seite überläuft [wurde korrigiert](/de/docs/Web/CSS/text-overflow#gecko_notes).
- Die Behandlung der Eigenschaft {{ cssxref("position") }} bei Elementen innerhalb positionierter {{ HTMLElement("table") }}-Elemente [wurde korrigiert](/de/docs/Web/CSS/position#gecko_notes). **Diese Änderung wird die Anordnung von Seiten beeinflussen; allerdings entsprechen wir jetzt der CSS-Spezifikation und anderen Browsern, was diese Korrekturen einfach machen sollte.**
- Das Kollabieren von Außenabständen um {{ HTMLElement("table") }}-Elemente wurde korrigiert, um der CSS-Spezifikation zu entsprechen. Zuvor wurden die Außenabstände von Tabellenelementen nicht mit denen angrenzender Elemente zusammengelegt, was zu einer falschen Anordnung führte. **Diese Änderung wird die Anordnung von Seiten beeinflussen; jedoch entsprechen wir nun der CSS-Spezifikation und anderen Browsern, was diese Korrekturen einfach machen sollte.**

### SVG

- Das {{ SVGElement("mask") }}-Element wurde aktualisiert, um sowohl sRGB als auch linearRGB zu unterstützen und setzt nun standardmäßig sRGB ein, in Übereinstimmung mit der neuesten Revision der SVG 1.1-Spezifikation.

### Netzwerktechnik

- Der HTTP-Header `Accept-Charset` wird nicht mehr in HTTP-Anfragen gesendet. In seiner Abwesenheit sollten Server durch Senden von UTF-8 antworten.

### Entwicklerwerkzeuge

- Das [`console`](/de/docs/Web/API/Console)-Objekt hat zwei neue Methoden, [`console.time()`](/de/docs/Web/API/Console/time_static) und [`console.timeEnd()`](/de/docs/Web/API/Console/timeEnd_static), mit denen Timer auf einer Seite gesetzt werden können.
- Der neue [Page Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) wurde hinzugefügt, welcher eine hervorragende Möglichkeit bietet, um das HTML und CSS hinter Ihrem Inhalt zu untersuchen und zu manipulieren.

## Änderungen für Mozilla- und Add-on-Entwickler

Für einen Überblick über mögliche Probleme, die beim Aktualisieren Ihrer Add-ons für die Unterstützung von Firefox 10 auftreten können, siehe [Add-ons für Firefox 10 aktualisieren](/de/docs/Mozilla/Firefox/Updating_add-ons_for_Firefox_10).

> [!NOTE]
> Der alte [`PRBool`](/de/docs/PRBool) Datentyp wurde eingestellt! Überall, wo in der Dokumentation darauf verwiesen wird, wird stattdessen der standardmäßige C++-Typ `bool` verwendet. Die Dokumentation wird in Zukunft aktualisiert werden, aber denken Sie vorerst einfach daran.

### Manifeste

- Unterstützung für [`<em:strictCompatibility>`](/de/docs/Install_Manifests#strictcompatibility) wurde zum Installationsmanifest hinzugefügt. Es erlaubt Add-ons-Autoren, sich für die Überprüfung der maximalen Version ihrer Erweiterung zu entscheiden. Wenn auf `true` gesetzt, wird das Add-on deaktiviert, wenn die Anwendungsversion größer ist als `<em:maxVersion>`. Firefox 10 ist standardmäßig kompatibel mit Add-ons, unabhängig von ihrer angegebenen maximalen Version. Diese Flagge hebt diese Präferenz auf. Sie sollten dies setzen, wenn Ihr Add-on Dinge tut, die wahrscheinlich durch Firefox-Updates zerstört werden, **aber nicht**, wenn Ihr Add-on eine binäre Komponente hat, da solche Add-ons immer streng überprüft werden (denken Sie daran, dass binäre Komponenten immer für jede größere Firefox-Version neu kompiliert werden müssen).
- Wenn Sie zum alten Verhalten zurückkehren möchten - das heißt, zu einer strikten Kompatibilitätsprüfung für alle Add-ons, unabhängig vom Wert des `strictCompatibility`-Flags in ihren Manifesten, können Sie die `extensions.strictCompatibility`-Einstellung auf `true` setzen.

### XUL

- Bootstrap-Add-ons, die eine `chrome.manifest`-Datei verwenden, haben nun die Manifestdatei automatisch registriert. Siehe den Abschnitt [Benutzeroberfläche mit einer chrome.manifest hinzufügen](/de/docs/Extensions/Bootstrapped_extensions#Adding_user_interface_with_a_chrome.manifest) für Einzelheiten.

### XPConnect

- Mehrere neue Eigenschaften und Methoden wurden zu `Components.utils` hinzugefügt, die Zugriff auf verschiedene Debugging-bezogene Informationen gewähren.

### Schnittstellenänderungen

- Die Schnittstellen `mozISpellCheckingEngine` und `nsIEditorSpellCheck` wurden aktualisiert, um es Add-ons ohne Neustart zu ermöglichen, Wörterbücher dem Rechtschreibprüfer hinzuzufügen.
- Das Attribut `nsIBrowserHistory.lastPageVisited` wurde entfernt.
- Die Schnittstelle `nsIDocumentViewer` wurde in `nsIContentViewer` integriert.
- Die Schnittstelle `nsIURIFixup` hat eine neue Flagge, `FIXUP_FLAG_USE_UTF8`, die es ermöglicht, UTF-8 statt der Plattform-Zeichenkodierung zu verwenden, wenn Konvertierungen durchgeführt werden.

### Plug-in-Änderungen

- Die neue Variable `NPNVdocumentOrigin` wurde hinzugefügt; diese gibt den Dokumentenursprung zurück und ist sicherer als [`window.location`](/de/docs/Web/API/Window/location).

### Änderungen im Build-System

- Die Build-Option `--disable-rdf`, die es tatsächlich unmöglich machte, erfolgreich zu kompilieren, wurde entfernt. Es wird daran gearbeitet, die RDF-Unterstützung vollständig entfernen zu können, aber derzeit erfordert XUL diese noch, um zu funktionieren. Siehe [Firefox-Bug 559505](https://bugzil.la/559505) für Fortschritte beim Entfernen der letzten Überreste der benötigten RDF-Unterstützung.
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
