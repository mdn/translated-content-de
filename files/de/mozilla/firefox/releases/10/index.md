---
title: Firefox 10 für Entwickler
slug: Mozilla/Firefox/Releases/10
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{FirefoxSidebar}}

Firefox 10 wurde am 31. Januar 2012 veröffentlicht. Dieser Artikel bietet Informationen über die neuen Funktionen und wesentlichen behobenen Fehler in dieser Version sowie Links zu detaillierterer Dokumentation sowohl für Webentwickler als auch für Add-on-Entwickler.

> [!NOTE]
> Firefox 10 ist die erste Veröffentlichung dieses Browsers mit zweistelligen Nummern. Dies kann zu Problemen mit einigen UA-Sniffing-Skripten führen. Stellen Sie sicher, dass Sie diese sowie die in Ihrer Seite eingebetteten Drittanbieter-Software-Bibliotheken überprüfen. Weitere Informationen hierzu finden Sie im [Artikel "Firefox goes 2-digit" auf hack.mozilla.org](https://hacks.mozilla.org/2012/01/firefox-goes-2-digit-time-to-check-your-ua-sniffing-scripts/).

## Änderungen für Webentwickler

### HTML

- Das neue HTML5-Element {{ HTMLElement("bdi") }}, bi-directionale Isolation, das die Isolation von Textteilen mit unterschiedlicher Richtungsabhängigkeit ermöglicht, wurde implementiert. Dies ist besonders nützlich, wenn Text mit unbekannter Richtungsabhängigkeit, beispielsweise aus einer Datenbank, in einem Text mit bekannter, und möglicherweise anderer, Richtungsabhängigkeit angezeigt wird.
- Sie können jetzt ein Fragment von "top" für das [`href`](/de/docs/Web/HTML/Reference/Elements/a#href)-Attribut angeben, um einen Link an den Anfang der Seite zu erstellen. Dies funktionierte früher, war eine Zeit lang nicht verfügbar, und ist jetzt zurückgekehrt, um mit der HTML5-Spezifikation kompatibel zu sein. Beispiel: `<a href="#top">Zurück zum Seitenanfang</a>`.

### JavaScript

- Die Methode `WeakMap.set()` gibt jetzt `undefined` zurück, anstatt sich selbst.
- Ein Fehler in der Verarbeitung regulärer Ausdrücke, der in Firefox 7 eingeführt wurde, wurde behoben. Wenn Sie die detaillierten Informationen wünschen, siehe [Firefox-Fehler 683838](https://bugzil.la/683838).
- Sie können die veraltete ECMAScript-for-XML (E4X) Syntax im [ECMAScript 5 Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode) (d.h. nach `"use strict;"`) nicht mehr verwenden.

### DOM

#### DOM3-Ereignisse

- Die DOM-Ereignismethode [`event.stopImmediatePropagation`](/de/docs/Web/API/Event/stopImmediatePropagation) wurde implementiert.
- Die Mausereignisse `mouseenter` und `mouseleave` wurden implementiert.

#### DOM4

- Das Attribut [`document.xmlVersion`](/de/docs/Web/API/Document/xmlVersion) (das nur lesbar, aber nicht setzbar war) wurde entfernt, da es in der DOM4-Spezifikation als veraltet gilt. Der Artikel für [`document.xmlVersion`](/de/docs/Web/API/Document/xmlVersion) schlägt nun eine Möglichkeit vor, zu erkennen, ob das Dokument HTML oder XML ist, ohne diese Eigenschaft zu verwenden.
- Das Attribut `document.xmlStandalone` wurde entfernt, da es in der DOM4-Spezifikation als veraltet gilt.
- Das Attribut [`document.xmlEncoding`](/de/docs/Web/API/Document/xmlEncoding) wurde entfernt, da es in der DOM4-Spezifikation als veraltet gilt.
- Das Attribut `text.isElementContentWhiteSpace` wurde entfernt, da es in der DOM4-Spezifikation als veraltet gilt.
- Die Methode `text.replaceWholeText` wurde entfernt, da es in der DOM4-Spezifikation als veraltet gilt.
- Die Methode [`node.isSameNode`](/de/docs/Web/API/Node/isSameNode) wurde entfernt, da es in der DOM4-Spezifikation als veraltet gilt. Statt `node1.isSameNode(node2)` können Sie den `===` Operator verwenden, so: `node1 === node2`.

#### Page Visibility API

- Die [Page Visibility API](/de/docs/Web/API/Page_Visibility_API) wurde implementiert (mit Präfix): `document.mozHidden`, `document.mozVisibilityState` sind verfügbar und das Ereignis `mozvisibilitychanged` wird versendet, wenn sich der Zustand ändert.

#### Full Screen API

- Unterstützung für [`document.fullscreenEnabled`](/de/docs/Web/API/Document/fullscreenEnabled) wurde hinzugefügt.
- Die neue Eigenschaft {{ cssxref(":-moz-full-screen-ancestor") }} wurde hinzugefügt. Diese ermöglicht es, gegen Elemente zu übereinstimmen, die Vorfahren eines Vollbildmoduselements sind.

#### Battery API

- Experimentelle Unterstützung für `navigator.mozBattery` wurde hinzugefügt (kann aktiviert werden, indem die Voreinstellung `dom.battery.enabled` auf `true` gesetzt wird und wird ab Firefox 11 standardmäßig aktiviert sein).

#### Canvas

- Die Methode [`createPattern()`](/de/docs/Web/API/CanvasRenderingContext2D#createpattern%28%29) löst jetzt eine Ausnahme aus, wenn eine leeren Quell-Canvas angegeben wird.
- Wenn Sie einen nicht-endlichen Wert für einen der numerischen Parameter von [`putImageData()`](/de/docs/Web/API/CanvasRenderingContext2D#putimagedata%28%29) verwenden, wird der Aufruf jetzt stillschweigend ignoriert, anstatt eine Ausnahme zu werfen, wie es der Spezifikation entspricht.

#### WebGL

- Firefox 10 unterstützt jetzt die [`OES_standard_derivatives`](https://registry.khronos.org/webgl/extensions/OES_standard_derivatives/) Erweiterung.
- [Neue Einstellungen wurden hinzugefügt](/de/docs/Web/API/WebGL_API#webgl_debugging_and_testing), um WebGL-Code auf Kompatibilität mit minimal ausgestatteten Geräten auf Ihrer vollwertigen Entwicklungsplattform zu testen.

#### Web Workers

- Die Attribute `XMLHttpRequest.responseType` und `XMLHttpRequest.response` sind nun von innerhalb der [Workers](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers#section_2) verfügbar.
- Der [`Worker()`](/de/docs/Web/API/Worker/Worker) Konstruktor akzeptiert nun [data URLs](/de/docs/Web/URI/Reference/Schemes/data).

#### IndexedDB

Große Fortschritte wurden gemacht, um IndexedDB an die letzte Entwurfspezifikation anzupassen. Diese Bemühungen werden in Firefox 11 fortgesetzt.

- Die Methoden [`IDBIndex.count()`](/de/docs/Web/API/IDBIndex#count) und [`IDBObjectStore.count()`](/de/docs/Web/API/IDBObjectStore#count) wurden hinzugefügt.
- Die Methode [`IDBCursor.advance()`](/de/docs/Web/API/IDBCursor#advance) wurde hinzugefügt.
- Bei unbekannten optionalen Parametern in [`IDBObjectStore.createIndex()`](/de/docs/Web/API/IDBObjectStore#createindex) oder [`IDBDatabase.createObjectStore()`](/de/docs/Web/API/IDBDatabase#createobjectstore) wird Gecko keine Ausnahme mehr auslösen, sondern es ignorieren.
- Wenn [`IDBTransaction.abort()`](/de/docs/Web/API/IDBTransaction#abort%28%29) aufgerufen wird, haben alle ausstehenden [`IDBRequest`](/de/docs/Web/API/IDBRequest) ihre `errorCode` auf `ABORT_ERROR` gesetzt.
- Die Methoden [`IDBObjectStore.delete()`](/de/docs/Web/API/IDBObjectStore/delete) und [`IDBCursor.delete()`](/de/docs/Web/API/IDBCursor/delete) setzen jetzt das `result` Attribut des zurückgegebenen [`IDBRequest`](/de/docs/Web/API/IDBRequest) auf `undefined`.
- Die Methode `IDBDatabase.setVersion()` wurde entfernt, da sie aus der neuesten Spezifikation entfernt wurde. Die Version der Datenbank wird über die Methode [`IDBFactory.open()`](/de/docs/Web/API/IDBFactory#open) angegeben, die aktualisiert wurde, und der `onupgradeneeded` Callback ermöglicht die Aktualisierung des Datenbankschemas. Die Version selbst wurde von einem `DOMString` zu einem `unsigned long long` geändert. Die `IDBVersionChangeRequest` Schnittstelle wurde entfernt und durch die neue [`IDBOpenDBRequest`](/de/docs/Web/API/IDBOpenDBRequest) Schnittstelle ersetzt.
- Wenn eine Datenbank mit [`IDBFactory.open()`](/de/docs/Web/API/IDBFactory/open) geöffnet wird und der `version` Parameter nicht angegeben ist und die Datenbank nicht existiert, wird sie mit einer Version von `1` erstellt.
- Die Methode [`IDBFactory.deleteDatabase()`](/de/docs/Web/API/IDBFactory#deletedatabase%28%29) wurde hinzugefügt.
- Methoden, die über ein [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange) suchen (wie [`IDBObjectStore.openCursor`](/de/docs/Web/API/IDBObjectStore/openCursor) und [`IDBIndex.getKey`](/de/docs/Web/API/IDBIndex/getKey)), können entweder einen einzelnen Schlüssel oder Schlüsselbereich akzeptieren.

#### Weitere

- Wenn der richtige MIME-Typ `image/svg+xml` übergeben wird, [erzeugt der `DOMParser` nun ein `SVGDocument`](/de/docs/Web/API/DOMParser#parsing_a_svg_document), wenn ihm eine Zeichenkette mit SVG übergeben wird.
- Früher, wenn [`element.setAttribute()`](/de/docs/Web/API/Element/setAttribute) Ganzzahlen analysierte, meldete es einen Fehler, wenn die Ganzzahl nicht-numerische Zeichen enthielt (zum Beispiel "42foo"). Jetzt wird dies korrekt gemäß der Spezifikation als die Zahl 42 abgeschnitten.
- Die ESC-Taste führte nicht mehr fälschlicherweise dazu, dass der [`onkeydown`](/de/docs/Web/API/Element/keydown_event) Handler fälschlicherweise aufgerufen wird.
- Die `NameList` Schnittstelle wird nicht mehr implementiert; zuvor hatte sie eine Implementierung ohne Möglichkeit, tatsächlich darauf zuzugreifen.
- Die Methode [`document.createProcessingInstruction()`](/de/docs/Web/API/Document/createProcessingInstruction) funktioniert jetzt in HTML-Dokumenten sowie in XML-Dokumenten. [`ProcessingInstruction`](/de/docs/Web/API/ProcessingInstruction) Knoten werden noch immer nur in XML-Dokumenten unterstützt, aber da Knoten zwischen Dokumenten verschoben werden können, ist es hilfreich, sie auch in HTML-Dokumenten erstellen zu können.
- Der [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) `responseType` `"moz-json"` [eingeführt in Firefox 9](/de/docs/Mozilla/Firefox/Releases/9#dom) wurde an den neuesten Entwurf der Spezifikation angepasst und ist jetzt ohne Präfix. Siehe Anmerkung im [Firefox-Fehler 707142](https://bugzil.la/707142#c13).

### CSS

- CSS 3D-Transformationen werden jetzt unterstützt. Dies beinhaltet die Unterstützung der Eigenschaften {{ cssxref("transform-style") }}, {{ cssxref("perspective") }}, {{ cssxref("perspective-origin") }} und {{ cssxref("backface-visibility") }} sowie von 3D-Transformationsfunktionen in den Eigenschaften {{ cssxref("transform") }} und {{ cssxref("transform-function") }}. Weitere Details finden Sie unter [Verwendung von CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms#3d_specific_css_properties).
- Zwei neue Werte für die CSS-Eigenschaft {{ cssxref("unicode-bidi") }} wurden hinzugefügt: `-moz-isolation` und `-moz-plaintext`. Der Wert `-moz-isolation` isoliert das Element aus der Richtungsperspektive aus seiner Umgebung, sodass es eine andere Richtungsabhängigkeit haben kann. Ein Element mit `unicode-bidi:-moz-isolation` verhält sich wie ein {{ HTMLElement("bdi") }}-Element. Das `-moz-plaintext` gibt dem Browser an, die Unicode-Browserheuristik zur Bestimmung der Richtung zu verwenden und nicht die CSS {{ cssxref("direction") }} Eigenschaft.
- Die CSS {{ cssxref("gradient/linear-gradient") }} und {{ cssxref("gradient/repeating-linear-gradient") }} Eigenschaften wurden aktualisiert, um die neue `to`-Syntax und das _magic corner_ Algorithmus zu unterstützen. Dies ermöglicht es, eine präzise Farbe auf der Ecke einer gradientengefüllten Box zu geben.
- Das Verhalten der {{ cssxref("text-overflow") }} Eigenschaft bei Fällen, in denen die Box auf beiden Seiten überläuft, während die Eigenschaft `text-overflow` nur auf einer Seite eingestellt ist, [wurde korrigiert](/de/docs/Web/CSS/text-overflow#gecko_notes).
- Das Handling der {{ cssxref("position") }}-Eigenschaft auf Elementen innerhalb positionierter {{ HTMLElement("table") }}-Elemente [wurde repariert](/de/docs/Web/CSS/position#gecko_notes). **Diese Änderung wird das Layout von Seiten beeinflussen; wir stehen jedoch nun im Einklang mit der CSS-Spezifikation und anderen Browsern, sodass dies einfach zu beheben sein sollte.**
- Die Randkollapsierung um {{ HTMLElement("table") }}-Elemente wurde korrigiert, um der CSS-Spezifikation zu entsprechen. Früher wurden die Ränder von Tabellenelementen nicht zusammen mit anderen angrenzenden Elementen kollabiert, was zu einem falschen Layout führte. **Diese Änderung wird das Layout von Seiten beeinflussen; wir stehen jedoch nun im Einklang mit der CSS-Spezifikation und anderen Browsern, sodass dies einfach zu beheben sein sollte.**

### SVG

- Das {{ SVGElement("mask") }} Element wurde aktualisiert, um sowohl sRGB als auch linearRGB zu unterstützen, und wird nun standardmäßig auf sRGB gesetzt, in Übereinstimmung mit der neuesten Überarbeitung der SVG 1.1 Spezifikation.

### Netzwerk

- Der HTTP-Header `Accept-Charset` wird nicht mehr in HTTP-Anfragen gesendet.
  Bei seiner Abwesenheit sollten die Server mit dem Senden von UTF-8 antworten.

### Entwicklerwerkzeuge

- Das [`console`](/de/docs/Web/API/console)-Objekt hat zwei neue Methoden, [`console.time()`](/de/docs/Web/API/console/time_static) und [`console.timeEnd()`](/de/docs/Web/API/console/timeEnd_static), die verwendet werden können, um Timer auf einer Seite einzustellen.
- Der neue [Page Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) wurde hinzugefügt, der eine ausgezeichnete Möglichkeit bietet, das HTML und CSS hinter Ihrem Inhalt zu untersuchen und zu manipulieren.

## Änderungen für Mozilla- und Add-on-Entwickler

Für einen Überblick über mögliche Probleme, die bei der Aktualisierung Ihrer Add-ons zur Unterstützung von Firefox 10 auftreten können, siehe [Add-ons für Firefox 10 aktualisieren](/de/docs/Mozilla/Firefox/Updating_add-ons_for_Firefox_10).

> [!NOTE]
> Der alte [`PRBool`](/de/docs/PRBool) Datentyp wurde abgeschafft! Überall in der Dokumentation, wo darauf verwiesen wird, wird jetzt der Standard-C++ `bool` Typ verwendet. Die Dokumentation wird in Zukunft aktualisiert, aber für den Moment sollten Sie dies beachten.

### Manifeste

- Unterstützung für [`<em:strictCompatibility>`](/de/docs/Install_Manifests#strictcompatibility) wurde dem Installationsmanifest hinzugefügt. Es erlaubt Add-on-Autoren, sich für die Überprüfung der maximalen Version ihrer Erweiterung einzusetzen. Wenn auf `true` gesetzt, wird das Add-on deaktiviert, wenn die Anwendungsversion größer als `<em:maxVersion>` ist. Firefox 10 setzt standardmäßig voraus, dass Add-ons kompatibel sind, unabhängig von ihrer angegebenen maximalen Version. Diese Flagge überschreibt diese Voreinstellung. Sie sollten dies setzen, wenn Ihr Add-on Dinge tut, die wahrscheinlich durch Firefox-Updates beeinträchtigt werden **aber nicht**, wenn Ihr Add-on eine Binärkomponente hat, da solche Add-ons immer streng überprüft werden (denken Sie daran, dass Binärkomponenten immer für jede große Firefox-Veröffentlichung re-kompiliert werden müssen).
- Wenn Sie zum alten Verhalten zurückkehren möchten – also zur strikten Kompatibilitätsprüfung für alle Add-ons, unabhängig vom Wert des `strictCompatibility`-Flags in ihren Manifesten, können Sie die Voreinstellung `extensions.strictCompatibility` auf `true` setzen.

### XUL

- Für Add-ons mit Bootstrapping, die eine `chrome.manifest` Datei verwenden, wird die Manifestdatei jetzt automatisch registriert. Siehe den Abschnitt [Benutzeroberfläche mit einer chrome.manifest hinzufügen](/de/docs/Extensions/Bootstrapped_extensions#Adding_user_interface_with_a_chrome.manifest) für Details.

### XPConnect

- Mehrere neue Eigenschaften und Methoden wurden zu `Components.utils` hinzugefügt, die Zugriff auf verschiedene debugging-relevante Informationen gewähren.

### Schnittstellenänderungen

- Die Schnittstellen `mozISpellCheckingEngine` und `nsIEditorSpellCheck` wurden aktualisiert, um Add-ons zu erlauben, ohne Neustart Wörterbücher zur Rechtschreibprüfung hinzuzufügen.
- Das Attribut `nsIBrowserHistory.lastPageVisited` wurde entfernt.
- Die Schnittstelle `nsIDocumentViewer` wurde in `nsIContentViewer` integriert.
- Die Schnittstelle `nsIURIFixup` hat ein neues Flag, `FIXUP_FLAG_USE_UTF8`, das es Ihnen ermöglicht, anzugeben, dass UTF-8 anstelle des Plattformzeichensatzes bei Konvertierungen verwendet werden soll.

### Plug-in-Änderungen

- Die neue Variable `NPNVdocumentOrigin` wurde hinzugefügt; sie gibt den Dokumentenursprung zurück und ist sicherer als [`window.location`](/de/docs/Web/API/Window/location).

### Build-Systemänderungen

- Die Build-Option `--disable-rdf`, die es tatsächlich unmöglich machte, erfolgreich zu bauen, wurde entfernt. Es wird daran gearbeitet, die RDF-Unterstützung vollständig zu entfernen, aber derzeit benötigt XUL sie immer noch, um zu funktionieren. Siehe [Firefox-Fehler 559505](https://bugzil.la/559505) für Fortschritte beim Entfernen der letzten Spuren der RDF-Anforderung.
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
