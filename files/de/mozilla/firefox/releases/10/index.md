---
title: Firefox 10 für Entwickler
slug: Mozilla/Firefox/Releases/10
l10n:
  sourceCommit: 56cbe48e4426172461d9297523b68716922690e5
---

{{FirefoxSidebar}}

Firefox 10 wurde am 31. Januar 2012 veröffentlicht. Dieser Artikel bietet Informationen über die neuen Funktionen und die wichtigsten behobenen Fehler in dieser Version sowie Links zu detaillierteren Dokumentationen für sowohl Webentwickler als auch Erweiterungsentwickler.

> [!NOTE]
> Firefox 10 ist die erste Version dieses Browsers mit zwei Ziffern. Dies kann zu Problemen mit einigen User-Agent-Erkennungsskripten führen. Überprüfen Sie diese sowie solche, die in Drittanbieter-Software enthalten sind, die Sie auf Ihren Seiten einbetten, wie Bibliotheken. Weitere Informationen dazu finden Sie im [Artikel "Firefox goes 2-digit" auf hack.mozilla.org](https://hacks.mozilla.org/2012/01/firefox-goes-2-digit-time-to-check-your-ua-sniffing-scripts/).

## Änderungen für Webentwickler

### HTML

- Das neue HTML5-Element {{ HTMLElement("bdi") }} für bidirektionale Isolation, das die Isolation von Textteilen mit unterschiedlicher Richtung ermöglicht, wurde implementiert. Dies ist besonders nützlich, wenn Text mit unbekannter Richtung, beispielsweise aus einer Datenbank, inmitten von Text mit bekannter und möglicherweise unterschiedlicher Richtung angezeigt wird.
- Sie können jetzt ein Fragment von "top" für das [`href`](/de/docs/Web/HTML/Element/a#href)-Attribut angeben, um einen Link an den Anfang der Seite zu erstellen. Dies funktionierte zuvor, war eine Weile nicht verfügbar und ist jetzt zurück, um mit der HTML5-Spezifikation kompatibel zu sein. Zum Beispiel: `<a href="#top">Zurück nach oben</a>`.

### JavaScript

- Die Methode `WeakMap.set()` gibt nun `undefined` zurück, anstatt sich selbst.
- Ein Fehler in der Regulären Ausdrucksverarbeitung, der in Firefox 7 eingeführt wurde, wurde behoben. Siehe [Firefox-Bug 683838](https://bugzil.la/683838), wenn Sie die genauen Details wissen möchten.
- Sie können die veraltete EcmaScript für XML (E4X)-Syntax nicht mehr im [ECMAScript 5 Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) verwenden (also nach `"use strict;"`).

### DOM

#### DOM3 Ereignisse

- Die DOM-Ereignismethode [`event.stopImmediatePropagation`](/de/docs/Web/API/Event/stopImmediatePropagation) wurde implementiert.
- Die Mausereignisse `mouseenter` und `mouseleave` wurden implementiert.

#### DOM4

- Das Attribut [`document.xmlVersion`](/de/docs/Web/API/Document/xmlVersion) (das nur abrufbar und nicht setzbar war) wurde entfernt, da es in der DOM4-Spezifikation veraltet ist. Der Artikel zu [`document.xmlVersion`](/de/docs/Web/API/Document/xmlVersion) schlägt jetzt eine Möglichkeit vor, zu erkennen, ob das Dokument HTML oder XML ist, ohne diese Eigenschaft zu verwenden.
- Das Attribut `document.xmlStandalone` wurde entfernt, da es in der DOM4-Spezifikation veraltet ist.
- Das Attribut [`document.xmlEncoding`](/de/docs/Web/API/Document/xmlEncoding) wurde entfernt, da es in der DOM4-Spezifikation veraltet ist.
- Das Attribut `text.isElementContentWhiteSpace` wurde entfernt, da es in der DOM4-Spezifikation veraltet ist.
- Die Methode `text.replaceWholeText` wurde entfernt, da sie in der DOM4-Spezifikation veraltet ist.
- Die Methode [`node.isSameNode`](/de/docs/Web/API/Node/isSameNode) wurde entfernt, da sie in der DOM4-Spezifikation veraltet ist. Statt `node1.isSameNode(node2)` können Sie den `===` Operator verwenden, wie folgt: `node1 === node2`.

#### Page Visibility API

- Die [Page Visibility API](/de/docs/Web/API/Page_Visibility_API) wurde implementiert (mit Präfix): `document.mozHidden`, `document.mozVisibilityState` sind verfügbar und das Ereignis `mozvisibilitychanged` wird gesendet, wenn der Status geändert wird.

#### Vollbild-API

- Unterstützung für [`document.fullscreenEnabled`](/de/docs/Web/API/Document/fullscreenEnabled) wurde hinzugefügt.
- Die neue Eigenschaft {{ cssxref(":-moz-full-screen-ancestor") }} wurde hinzugefügt. Dies ermöglicht Ihnen, Übereinstimmungen mit Elementen zu finden, die Vorfahren eines Elements im Vollbildmodus sind.

#### Batterie-API

- Experimentelle Unterstützung für `navigator.mozBattery` wurde hinzugefügt (kann aktiviert werden, indem die Einstellung `dom.battery.enabled` auf `true` gesetzt wird und wird standardmäßig ab Firefox 11 aktiviert sein).

#### Canvas

- Die Methode [`createPattern()`](/de/docs/Web/API/CanvasRenderingContext2D#createpattern%28%29) wirft jetzt eine Ausnahme, wenn eine Quelle mit null Größe angegeben wird.
- Wenn Sie einen nicht-finiten Wert für eines der numerischen Parameter für [`putImageData()`](/de/docs/Web/API/CanvasRenderingContext2D#putimagedata%28%29) verwenden, wird der Aufruf nun stillschweigend ignoriert, anstatt eine Ausnahme zu werfen, gemäß der Spezifikation.

#### WebGL

- Firefox 10 unterstützt jetzt die [`OES_standard_derivatives`](https://registry.khronos.org/webgl/extensions/OES_standard_derivatives/) Erweiterung.
- [Neue Voreinstellungen wurden hinzugefügt](/de/docs/Web/API/WebGL_API#webgl_debugging_and_testing), um beim Testen von WebGL-Code auf Kompatibilität mit minimal-fähigen Geräten auf Ihrer vollständigen Entwicklungsplattform zu helfen.

#### Web Workers

- Das Attribut `XMLHttpRequest.responseType` und `XMLHttpRequest.response` sind jetzt innerhalb von [Workers](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers#section_2) verfügbar.
- Der [`Worker()`](/de/docs/Web/API/Worker#worker) Konstruktor akzeptiert jetzt [Daten-URLs](/de/docs/Web/URI/Schemes/data).

#### IndexedDB

Große Fortschritte wurden gemacht, um IndexedDB auf die neueste Entwurfsspezifikation zu aktualisieren. Diese Bemühungen werden in Firefox 11 fortgesetzt.

- Die Methoden [`IDBIndex.count()`](/de/docs/Web/API/IDBIndex#count) und [`IDBObjectStore.count()`](/de/docs/Web/API/IDBObjectStore#count) wurden hinzugefügt.
- Die Methode [`IDBCursor.advance()`](/de/docs/Web/API/IDBCursor#advance) wurde hinzugefügt.
- Wenn ein unbekannter optionaler Parameter in [`IDBObjectStore.createIndex()`](/de/docs/Web/API/IDBObjectStore#createindex) oder [`IDBDatabase.createObjectStore()`](/de/docs/Web/API/IDBDatabase#createobjectstore) auftritt, wird Gecko keine Ausnahme mehr herbeiführen, sondern es ignorieren.
- Wenn [`IDBTransaction.abort()`](/de/docs/Web/API/IDBTransaction#abort%28%29) aufgerufen wird, haben alle ausstehenden [`IDBRequest`](/de/docs/Web/API/IDBRequest) ihren `errorCode` auf `ABORT_ERROR` gesetzt.
- Die Methoden [`IDBObjectStore.delete()`](/de/docs/Web/API/IDBObjectStore/delete) und [`IDBCursor.delete()`](/de/docs/Web/API/IDBCursor/delete) setzen jetzt das `result` Attribut des zurückgegebenen [`IDBRequest`](/de/docs/Web/API/IDBRequest) auf `undefined`.
- Die Methode `IDBDatabase.setVersion()` wurde entfernt, da sie aus der neuesten Spezifikation entfernt wurde. Die Version der Datenbank wird durch die Methode [`IDBFactory.open()`](/de/docs/Web/API/IDBFactory#open) bereitgestellt, die aktualisiert wurde, und der `onupgradeneeded` Rückruf ermöglicht das Aktualisieren des Datenbankschemas. Die Version selbst wurde von einem `DOMString` zu einem `unsigned long long` geändert. Die `IDBVersionChangeRequest` Schnittstelle wurde entfernt und durch die neue [`IDBOpenDBRequest`](/de/docs/Web/API/IDBOpenDBRequest) Schnittstelle ersetzt.
- Beim Öffnen einer Datenbank mit [`IDBFactory.open()`](/de/docs/Web/API/IDBFactory/open), wenn der `version` Parameter nicht angegeben ist und die Datenbank nicht existiert, wird sie mit einer Version von `1` erstellt.
- Die Methode [`IDBFactory.deleteDatabase()`](/de/docs/Web/API/IDBFactory#deletedatabase%28%29) wurde hinzugefügt.
- Methoden, die über einen [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange) suchen (wie [`IDBObjectStore.openCursor`](/de/docs/Web/API/IDBObjectStore/openCursor) und [`IDBIndex.getKey`](/de/docs/Web/API/IDBIndex/getKey)) können entweder einen einzelnen Schlüssel oder einen Schlüsselbereich akzeptieren.

#### Sonstiges

- Beim Übergeben des richtigen MIME-Typs `image/svg+xml`, [erzeugt der `DOMParser` jetzt ein `SVGDocument`](/de/docs/Web/API/DOMParser#parsing_a_svg_document) bei einer Zeichenkette mit SVG.
- Früher, wenn [`element.setAttribute()`](/de/docs/Web/API/Element/setAttribute) Ganzzahlen analysierte, wurde ein Fehler gemeldet, wenn die Ganzzahl nicht-numerische Zeichen enthielt (z.B. "42foo"). Jetzt wird dies korrekt als die Zahl 42 gekürzt, gemäß der Spezifikation.
- Die ESC-Taste führt nicht mehr fälschlicherweise dazu, dass der [`onkeydown`](/de/docs/Web/API/Element/keydown_event) Handler fälschlicherweise aufgerufen wird.
- Die `NameList` Schnittstelle wird nicht mehr implementiert; sie hatte zuvor eine Implementierung ohne Möglichkeit, tatsächlich darauf zuzugreifen.
- Die Methode [`document.createProcessingInstruction()`](/de/docs/Web/API/Document/createProcessingInstruction) funktioniert jetzt sowohl in HTML- als auch in XML-Dokumenten. [`ProcessingInstruction`](/de/docs/Web/API/ProcessingInstruction) Knoten werden weiterhin nur in XML-Dokumenten unterstützt, aber da Knoten zwischen Dokumenten verschoben werden können, ist es hilfreich, sie auch in HTML-Dokumenten erstellen zu können.
- Die `XMLHttpRequest` `responseType` "`moz-json`" [eingeführt in Firefox 9](/de/docs/Mozilla/Firefox/Releases/9#dom) wurde auf den neuesten Entwurf der Spezifikation aktualisiert und das Präfix wurde entfernt. Siehe Anmerkung in [Firefox-Bug 707142](https://bugzil.la/707142#c13).

### CSS

- CSS 3D-Transformationen werden jetzt unterstützt. Dies umfasst Unterstützung für die Eigenschaften {{ cssxref("transform-style") }}, {{ cssxref("perspective") }}, {{ cssxref("perspective-origin") }} und {{ cssxref("backface-visibility") }} sowie für 3D-Transformationsfunktionen in den Eigenschaften {{ cssxref("transform") }} und {{ cssxref("transform-function") }}. Details siehe [Verwendung von CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms#3d_specific_css_properties).
- Zwei neue Werte für die CSS-Eigenschaft {{ cssxref("unicode-bidi") }} wurden hinzugefügt: `-moz-isolation` und `-moz-plaintext`. Der Wert `-moz-isolation` isoliert, aus Sicht der Richtung, das Element von seiner Umgebung und ermöglicht ihm, eine andere Richtung zu haben. Ein Element mit `unicode-bidi:-moz-isolation` verhält sich wie ein {{ HTMLElement("bdi") }} Element. Der Wert `-moz-plaintext` gibt dem Browser an, die Unicode-Browserheuristik zur Bestimmung der Richtung zu verwenden und nicht die CSS-Eigenschaft {{ cssxref("direction") }}.
- Die CSS-Eigenschaften {{ cssxref("gradient/linear-gradient") }} und {{ cssxref("gradient/repeating-linear-gradient") }} wurden aktualisiert, um die neue `to` Syntax und den _magic corner_ Algorithmus zu unterstützen. Dies ermöglicht es, eine präzise Farbe an der Ecke eines mit Farbverlauf gefüllten Kastens anzugeben.
- Die Handhabung der {{ cssxref("text-overflow") }} Eigenschaft in Fällen, in denen der Kasten auf beiden Seiten überläuft, während die `text-overflow` Eigenschaft nur auf einer Seite eingestellt ist, [wurde korrigiert](/de/docs/Web/CSS/text-overflow#gecko_notes).
- Das Verhalten der {{ cssxref("position") }} Eigenschaft bei Elementen innerhalb positionierter {{ HTMLElement("table") }} Elemente [wurde behoben](/de/docs/Web/CSS/position#gecko_notes). **Diese Änderung wird das Layout von Seiten beeinflussen; jedoch entsprechen wir jetzt der CSS-Spezifikation und mit anderen Browsern, sodass dies leicht zu beheben sein sollte.**
- Die Zusammenlegung von Randbereichen um {{ HTMLElement("table") }} Elemente wurde zur Anpassung an die CSS-Spezifikation behoben. Zuvor wurden die Ränder von Tabellenelementen nicht zusammengelegt mit anderen angrenzenden Elementen, was zu einem fehlerhaften Layout führte. **Diese Änderung wird das Layout von Seiten beeinflussen; jedoch entsprechen wir jetzt der CSS-Spezifikation und mit anderen Browsern, sodass dies leicht zu beheben sein sollte.**

### SVG

- Das {{ SVGElement("mask") }} Element wurde aktualisiert, um sowohl sRGB als auch linearRGB zu unterstützen, und standardmäßig auf sRGB gesetzt, gemäß der neuesten Revision der SVG 1.1 Spezifikation.

### Netzwerk

- Der HTTP-Header `Accept-Charset` wird in HTTP-Anfragen nicht mehr gesendet.
  In dessen Abwesenheit sollten Server mit dem Senden von UTF-8 antworten.

### Entwicklerwerkzeuge

- Das [`console`](/de/docs/Web/API/Console)-Objekt hat zwei neue Methoden, [`console.time()`](/de/docs/Web/API/Console/time_static) und [`console.timeEnd()`](/de/docs/Web/API/Console/timeEnd_static), die verwendet werden können, um Timer auf einer Seite zu setzen.
- Der neue [Page Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) wurde hinzugefügt, der eine hervorragende Möglichkeit bietet, das HTML und CSS hinter Ihrem Inhalt zu untersuchen und zu manipulieren.

## Änderungen für Mozilla- und Add-on-Entwickler

Für einen Überblick über wahrscheinliche Probleme, die beim Aktualisieren Ihrer Add-ons zur Unterstützung von Firefox 10 auftreten können, siehe [Aktualisieren von Add-ons für Firefox 10](/de/docs/Mozilla/Firefox/Updating_add-ons_for_Firefox_10).

> [!NOTE]
> Der alte [`PRBool`](/de/docs/PRBool) Datentyp wurde entfernt! Überall in der Dokumentation, wo darauf verwiesen wird, wird jetzt der Standard-C++ `bool` Typ verwendet. Die Dokumentation wird in Zukunft aktualisiert, aber für den Moment behalten Sie dies im Hinterkopf.

### Manifeste

- Unterstützung für [`<em:strictCompatibility>`](/de/docs/Install_Manifests#strictcompatibility) wurde zum Installationsmanifest hinzugefügt. Dadurch können Add-on-Autoren die maximale Version ihrer Erweiterung überprüfen. Wenn auf `true` gesetzt, wird das Add-on deaktiviert, wenn die Anwendungsversion größer als `<em:maxVersion>` ist. Firefox 10 hat standardmäßig kompatible Add-ons, unabhängig von ihrer angegebenen maximalen Version. Dieses Flag überschreibt diese Voreinstellung. Sie sollten dies setzen, wenn Ihr Add-on Dinge tut, die durch Firefox-Updates wahrscheinlich unterbrochen werden, **aber nicht**, wenn Ihr Add-on eine binäre Komponente hat, da solche Add-ons immer streng überprüft werden (denken Sie daran, dass binäre Komponenten immer für jede wichtige Firefox-Version neu kompiliert werden müssen).
- Wenn Sie zum alten Verhalten zurückkehren möchten – das heißt, zur strikten Kompatibilitätsprüfung für alle Add-ons, unabhängig vom Wert des `strictCompatibility` Flags in ihren Manifesten, können Sie die Einstellung `extensions.strictCompatibility` auf `true` setzen.

### XUL

- Bootstrap-Add-ons, die eine `chrome.manifest` Datei verwenden, haben nun die Manifestdatei automatisch registriert. Siehe den Abschnitt [Hinzufügen einer Benutzeroberfläche mit einer chrome.manifest](/de/docs/Extensions/Bootstrapped_extensions#Adding_user_interface_with_a_chrome.manifest) für Details.

### XPConnect

- Mehrere neue Eigenschaften und Methoden wurden `Components.utils` hinzugefügt, um den Zugriff auf verschiedene debugbezogene Informationen zu gewähren.

### Interface-Änderungen

- Die `mozISpellCheckingEngine` und `nsIEditorSpellCheck` Schnittstellen wurden aktualisiert, um Add-ons ohne Neustart zu ermöglichen, Wörterbücher zum Rechtschreibprüfer hinzuzufügen.
- Das Attribut `nsIBrowserHistory.lastPageVisited` wurde entfernt.
- Die `nsIDocumentViewer` Schnittstelle wurde in `nsIContentViewer` zusammengeführt.
- Die `nsIURIFixup` Schnittstelle hat eine neue Flagge, `FIXUP_FLAG_USE_UTF8`, die Ihnen erlaubt, ihr mitzuteilen, UTF-8 statt des Plattform-Zeichensatzes zu verwenden, wenn Konvertierungen durchgeführt werden.

### Plug-in Änderungen

- Die neue Variable `NPNVdocumentOrigin` wurde hinzugefügt; diese gibt den Dokumentenursprung zurück und ist sicherer als [`window.location`](/de/docs/Web/API/Window/location).

### Änderungen am Build-System

- Die `--disable-rdf` Build-Option, die es tatsächlich unmöglich machte, erfolgreich zu bauen, wurde entfernt. Es wird daran gearbeitet, RDF-Unterstützung vollständig zu entfernen, aber derzeit benötigt XUL es noch, um zu funktionieren. Siehe [Firefox-Bug 559505](https://bugzil.la/559505) für den Fortschritt bei der Entfernung der letzten RDF-Reste, die erforderlich sind.
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
