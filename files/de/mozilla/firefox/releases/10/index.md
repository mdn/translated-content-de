---
title: Firefox 10 für Entwickler
slug: Mozilla/Firefox/Releases/10
l10n:
  sourceCommit: 2d5b20a5eabb48bc5472ebe94b11afe2aa84f585
---

Firefox 10 wurde am 31. Januar 2012 veröffentlicht. Dieser Artikel bietet Informationen über die neuen Funktionen und behobenen Hauptfehler in dieser Version, sowie Links zu detaillierteren Dokumentationen für Webentwickler und Add-on-Entwickler.

> [!NOTE]
> Firefox 10 ist die erste Version dieses Browsers mit zweistelliger Versionsnummer. Dies kann zu Problemen mit einigen UA-Sniffing-Skripten führen. Überprüfen Sie diese, sowie die in Drittherstellersoftware, die Sie auf Ihren Seiten einbetten, wie Bibliotheken. Weitere Informationen finden Sie im Artikel [Firefox goes 2-digit auf hack.mozilla.org](https://hacks.mozilla.org/2012/01/firefox-goes-2-digit-time-to-check-your-ua-sniffing-scripts/).

## Änderungen für Webentwickler

### HTML

- Das neue HTML5 {{ HTMLElement("bdi") }}-Element, Bi-Directional-Isolation, das die Isolierung von Textteilen mit einer abweichenden Schreibrichtung erlaubt, wurde implementiert. Dies ist besonders nützlich beim Anzeigen von Text mit unbekannter Schreibrichtung, z.B. aus einer Datenbank, mitten in einem Text mit bekannter und potenziell anderer Schreibrichtung.
- Sie können jetzt für das [`href`](/de/docs/Web/HTML/Reference/Elements/a#href) Attribut einen Fragmentwert "top" angeben, um einen Link zum Seitenanfang zu erstellen. Diese Funktion war früher verfügbar, verschwand dann eine Weile, und ist nun zurück, für die Kompatibilität mit der HTML5-Spezifikation. Zum Beispiel: `<a href="#top">Zum Seitenanfang zurückkehren</a>`.

### JavaScript

- Die Methode `WeakMap.set()` gibt jetzt `undefined` zurück, anstatt sich selbst.
- Ein Fehler in der Verarbeitung regulärer Ausdrücke, der in Firefox 7 eingeführt wurde, wurde behoben. Sehen Sie [Firefox Bug 683838](https://bugzil.la/683838) für die detaillierten Informationen.
- Sie können die veraltete ECMAScript for XML (E4X) Syntax im [ECMAScript 5 Striktmodus](/de/docs/Web/JavaScript/Reference/Strict_mode) (d.h. nach `"use strict;"`) nicht mehr verwenden.

### DOM

#### DOM3-Events

- Die DOM-Event-Methode [`event.stopImmediatePropagation`](/de/docs/Web/API/Event/stopImmediatePropagation) wurde implementiert.
- Die Mausereignisse `mouseenter` und `mouseleave` wurden implementiert.

#### DOM4

- Das Attribut [`document.xmlVersion`](/de/docs/Web/API/Document/xmlVersion) (das nur lesbar und nicht setzbar war) wurde entfernt, da es in der DOM4-Spezifikation als veraltet markiert wurde. Der Artikel für [`document.xmlVersion`](/de/docs/Web/API/Document/xmlVersion) schlägt nun eine Möglichkeit vor, zu erkennen, ob das Dokument HTML oder XML ist, ohne diese Eigenschaft zu verwenden.
- Das Attribut `document.xmlStandalone` wurde entfernt, da es in der DOM4-Spezifikation als veraltet markiert wurde.
- Das Attribut [`document.xmlEncoding`](/de/docs/Web/API/Document/xmlEncoding) wurde entfernt, da es in der DOM4-Spezifikation als veraltet markiert wurde.
- Das Attribut `text.isElementContentWhiteSpace` wurde entfernt, da es in der DOM4-Spezifikation als veraltet markiert wurde.
- Die Methode `text.replaceWholeText` wurde entfernt, da sie in der DOM4-Spezifikation als veraltet markiert wurde.
- Die Methode [`node.isSameNode`](/de/docs/Web/API/Node/isSameNode) wurde entfernt, da sie in der DOM4-Spezifikation als veraltet markiert wurde. Statt `node1.isSameNode(node2)` können Sie den `===` Operator verwenden, wie folgt: `node1 === node2`.

#### Page Visibility API

- Die [Page Visibility API](/de/docs/Web/API/Page_Visibility_API) wurde implementiert (mit Präfix): `document.mozHidden`, `document.mozVisibilityState` sind verfügbar, und das Ereignis `mozvisibilitychanged` wird gesendet, wenn sich der Status ändert.

#### Full Screen API

- Unterstützung für [`document.fullscreenEnabled`](/de/docs/Web/API/Document/fullscreenEnabled) wurde hinzugefügt.
- Die neue {{ cssxref(":-moz-full-screen-ancestor") }} Eigenschaft wurde hinzugefügt. Diese erlaubt es, Elemente zu vergleichen, die Vorfahren eines Elements im Vollbildmodus sind.

#### Battery API

- Experimentelle Unterstützung für `navigator.mozBattery` wurde hinzugefügt (kann durch Setzen der Einstellung `dom.battery.enabled` auf `true` aktiviert werden und wird standardmäßig ab Firefox 11 aktiviert).

#### Canvas

- Die [`createPattern()`](/de/docs/Web/API/CanvasRenderingContext2D/createPattern) Methode wirft nun eine Ausnahme, wenn eine Null-Größe Quell-Canvas angegeben wird.
- Wenn Sie einen nicht-finiten Wert für einen der numerischen Parameter von [`putImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/putImageData) verwenden, wird der Aufruf nun stillschweigend ignoriert, anstatt eine Ausnahme zu werfen, im Einklang mit der Spezifikation.

#### WebGL

- Firefox 10 unterstützt jetzt die [`OES_standard_derivatives`](https://registry.khronos.org/webgl/extensions/OES_standard_derivatives/) Erweiterung.
- [Neue Einstellungen wurden hinzugefügt](/de/docs/Web/API/WebGL_API#webgl_debugging_and_testing), um zu helfen, WebGL-Code für die Kompatibilität mit minimal-fähigen Geräten auf Ihrer vollständigen Entwicklungsplattform zu testen.

#### Web Workers

- Die Attribute `XMLHttpRequest.responseType` und `XMLHttpRequest.response` sind jetzt innerhalb von [Workers](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers) verfügbar.
- Der [`Worker()`](/de/docs/Web/API/Worker/Worker) Konstruktor akzeptiert jetzt [Daten-URLs](/de/docs/Web/URI/Reference/Schemes/data).

#### IndexedDB

Es wurden große Fortschritte gemacht, IndexedDB auf die neueste Entwurfsspezifikation zu aktualisieren. Diese Anstrengung wird in Firefox 11 fortgesetzt.

- Die Methoden [`IDBIndex.count()`](/de/docs/Web/API/IDBIndex/count) und [`IDBObjectStore.count()`](/de/docs/Web/API/IDBObjectStore/count) wurden hinzugefügt.
- Die Methode [`IDBCursor.advance()`](/de/docs/Web/API/IDBCursor/advance) wurde hinzugefügt.
- Wenn unbekannte optionale Parameter in [`IDBObjectStore.createIndex()`](/de/docs/Web/API/IDBObjectStore/createIndex) oder [`IDBDatabase.createObjectStore()`](/de/docs/Web/API/IDBDatabase/createObjectStore) auftreten, löst Gecko keine Ausnahme mehr aus, sondern ignoriert sie.
- Wenn [`IDBTransaction.abort()`](/de/docs/Web/API/IDBTransaction/abort) aufgerufen wird, haben alle ausstehenden [`IDBRequest`](/de/docs/Web/API/IDBRequest) ihre `errorCode` auf `ABORT_ERROR` gesetzt.
- Die Methoden [`IDBObjectStore.delete()`](/de/docs/Web/API/IDBObjectStore/delete) und [`IDBCursor.delete()`](/de/docs/Web/API/IDBCursor/delete) setzen nun das `result` Attribut des zurückgegebenen [`IDBRequest`](/de/docs/Web/API/IDBRequest) auf `undefined`.
- Die Methode `IDBDatabase.setVersion()` wurde entfernt, da sie aus der neuesten Spezifikation entfernt wurde. Die Version der Datenbank wird durch die Methode [`IDBFactory.open()`](/de/docs/Web/API/IDBFactory/open) angegeben, die aktualisiert wurde, und der `onupgradeneeded` Callback ermöglicht das Upgrade des Datenbankschemas. Die Version selbst wurde von einem `DOMString` in ein `unsigned long long` geändert. Das `IDBVersionChangeRequest` Interface wurde entfernt und durch das neue [`IDBOpenDBRequest`](/de/docs/Web/API/IDBOpenDBRequest) Interface ersetzt.
- Wenn eine Datenbank mit [`IDBFactory.open()`](/de/docs/Web/API/IDBFactory/open) geöffnet wird und der `version` Parameter nicht angegeben ist und die Datenbank nicht existiert, wird sie mit einer Version von `1` erstellt.
- Die Methode [`IDBFactory.deleteDatabase()`](/de/docs/Web/API/IDBFactory/deleteDatabase) wurde hinzugefügt.
- Methoden, die über einen [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange) suchen (wie [`IDBObjectStore.openCursor`](/de/docs/Web/API/IDBObjectStore/openCursor) und [`IDBIndex.getKey`](/de/docs/Web/API/IDBIndex/getKey)), können entweder einen einzelnen Schlüssel oder Schlüsselbereich akzeptieren.

#### Andere

- Wenn der richtige MIME-Typ `image/svg+xml` übergeben wird, erstellt `DOMParser` jetzt ein `SVGDocument`, wenn ihm eine Zeichenfolge mit SVG gegeben wird.
- In der Vergangenheit meldete [`element.setAttribute()`](/de/docs/Web/API/Element/setAttribute) einen Fehler, wenn die Ganzzahl nicht-numerische Zeichen enthielt (z.B. "42foo"). Jetzt kürzt es dies korrekt als Zahl 42, in Übereinstimmung mit der Spezifikation.
- Die ESC-Taste führt nicht mehr fälschlicherweise dazu, dass der [`onkeydown`](/de/docs/Web/API/Element/keydown_event) Handler fälschlicherweise aufgerufen wird.
- Das `NameList` Interface wird nicht mehr implementiert; es hatte zuvor eine Implementierung ohne Möglichkeit des Zugriffs.
- Die Methode [`document.createProcessingInstruction()`](/de/docs/Web/API/Document/createProcessingInstruction) funktioniert jetzt sowohl auf HTML-Dokumenten als auch auf XML-Dokumenten. [`ProcessingInstruction`](/de/docs/Web/API/ProcessingInstruction) Knoten werden weiterhin nur auf XML-Dokumenten unterstützt, aber da Knoten zwischen Dokumenten verschoben werden können, ist es hilfreich, sie auch auf HTML-Dokumenten erstellen zu können.
- Der [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) `responseType` `"moz-json"` [eingeführt in Firefox 9](/de/docs/Mozilla/Firefox/Releases/9#dom) wurde auf den neuesten Entwurf der Spezifikation aktualisiert und das Präfix entfernt. Siehe Hinweis in [Firefox Bug 707142](https://bugzil.la/707142#c13).

### CSS

- CSS 3D-Transformationen werden nun unterstützt. Dies umfasst die Unterstützung für die {{ cssxref("transform-style") }}, {{ cssxref("perspective") }}, {{ cssxref("perspective-origin") }} und {{ cssxref("backface-visibility") }} Eigenschaften, sowie für 3D-Transformationsfunktionen in den Eigenschaften {{ cssxref("transform") }} und {{ cssxref("transform-function") }}. Siehe [Verwendung von CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms#3d_specific_css_properties) für Details.
- Zwei neue Werte für die CSS-Eigenschaft {{ cssxref("unicode-bidi") }} wurden hinzugefügt: `-moz-isolation` und `-moz-plaintext`. Der `-moz-isolation`-Wert isoliert, aus der Sicht der Schreibrichtung, das Element von seiner Umgebung, sodass es eine andere Schreibrichtung haben kann. Ein Element mit `unicode-bidi:-moz-isolation` verhält sich wie ein {{ HTMLElement("bdi") }}-Element. Das `-moz-plaintext`-Wert weist den Browser an, die Unicode-Browser-Heuristik zu verwenden, um die Schreibrichtung zu bestimmen und nicht die CSS {{ cssxref("direction") }}-Eigenschaft.
- Die CSS-Eigenschaften {{ cssxref("gradient/linear-gradient") }} und {{ cssxref("gradient/repeating-linear-gradient") }} wurden aktualisiert, um die neue `to`-Syntax und den _Magic-Corner_-Algorithmus zu unterstützen. Dies ermöglicht es, eine genaue Farbe in der Ecke eines verlaufgefüllten Rahmens zu geben.
- Das Verhalten der {{ cssxref("text-overflow") }}-Eigenschaft in Fällen, in denen der Kasten auf beiden Seiten überläuft, während die `text-overflow`-Eigenschaft so eingestellt ist, dass sie nur auf einer Seite überläuft, wurde korrigiert.
- Das Verhalten der {{ cssxref("position") }}-Eigenschaft innerhalb positionierter {{ HTMLElement("table") }}-Elemente wurde behoben. **Diese Änderung wird das Layout von Seiten beeinflussen; jedoch entsprechen wir nun der CSS-Spezifikation und anderen Browsern, sodass dies einfach zu beheben sein sollte.**
- Das Zusammenfallen von Margen um {{ HTMLElement("table") }}-Elemente wurde korrigiert, um der CSS-Spezifikation zu entsprechen. Zuvor wurden die Margen von Tabellenelementen nicht zusammen mit anderen angrenzenden Elementen zusammengeführt, was zu einem falschen Layout führte. **Diese Änderung wird das Layout von Seiten beeinflussen; jedoch entsprechen wir nun der CSS-Spezifikation und anderen Browsern, sodass dies einfach zu beheben sein sollte.**

### SVG

- Das {{ SVGElement("mask") }}-Element wurde aktualisiert, um sowohl sRGB als auch linearRGB zu unterstützen, und ist jetzt standardmäßig auf sRGB eingestellt, in Übereinstimmung mit der neuesten Revision der SVG 1.1-Spezifikation.

### Netzwerk

- Der HTTP `Accept-Charset` Header wird in HTTP-Anfragen nicht mehr gesendet. In seiner Abwesenheit sollten Server mit der UTF-8-Codierung antworten.

### Entwicklerwerkzeuge

- Das [`console`](/de/docs/Web/API/console)-Objekt hat zwei neue Methoden, [`console.time()`](/de/docs/Web/API/console/time_static) und [`console.timeEnd()`](/de/docs/Web/API/console/timeEnd_static), die verwendet werden können, um Timer auf einer Seite zu setzen.
- Der neue [Page Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) wurde hinzugefügt, der eine hervorragende Möglichkeit bietet, das HTML und CSS, das hinter Ihrem Inhalt steht, zu untersuchen und zu manipulieren.

## Änderungen für Mozilla- und Add-on-Entwickler

Für eine Übersicht der möglichen Probleme, die beim Aktualisieren Ihrer Add-ons für die Unterstützung von Firefox 10 auftreten können, siehe [Aktualisierung von Add-ons für Firefox 10](/de/docs/Mozilla/Firefox/Updating_add-ons_for_Firefox_10).

> [!NOTE]
> Der alte [`PRBool`](/de/docs/PRBool) Datentyp wurde zurückgezogen! Überall in der Dokumentation, wo darauf verwiesen wird, wird nun der standardmäßige C++ `bool` Typ verwendet. Die Dokumentation wird in Zukunft aktualisiert, aber behalten Sie dies vorerst im Hinterkopf.

### Manifeste

- Unterstützung für [`<em:strictCompatibility>`](/de/docs/Install_Manifests#strictcompatibility) wurde zum Installationsmanifest hinzugefügt. Dies ermöglicht es Add-on-Autoren, sich dafür zu entscheiden, die maximale Version ihrer Erweiterung zu überprüfen. Wenn auf `true` gesetzt, wird das Add-on deaktiviert, wenn die Anwendungsversion größer als `<em:maxVersion>` ist. Firefox 10 geht standardmäßig davon aus, dass Add-ons kompatibel sind, unabhängig von ihrer angegebenen maximalen Version. Diese Kennzeichnung überschreibt diese Präferenz. Sie sollten dies setzen, wenn Ihr Add-on Dinge tut, die wahrscheinlich durch Firefox-Updates gebrochen werden, **aber nicht**, wenn Ihr Add-on eine Binärkomponente hat, da solche Add-ons immer streng überprüft werden (denken Sie daran, dass Binärkomponenten immer für jede wichtige Firefox-Veröffentlichung neu kompiliert werden müssen).
- Wenn Sie zum alten Verhalten zurückkehren möchten – also zur strengen Kompatibilitätsprüfung für alle Add-ons, unabhängig vom Wert des `strictCompatibility`-Flags in ihren Manifesten, können Sie die Präferenz `extensions.strictCompatibility` auf `true` setzen.

### XUL

- Bootstrapped-Add-ons, die eine `chrome.manifest` Datei verwenden, haben nun die Manifestdatei automatisch registriert. Siehe den Abschnitt [Benutzeroberfläche hinzufügen mit einer chrome.manifest](/de/docs/Extensions/Bootstrapped_extensions#Adding_user_interface_with_a_chrome.manifest) für Details.

### XPConnect

- Mehrere neue Eigenschaften und Methoden wurden zu `Components.utils` hinzugefügt, die Zugang zu verschiedenen Debugging-bezogenen Informationen gewähren.

### Schnittstellenänderungen

- Die Schnittstellen `mozISpellCheckingEngine` und `nsIEditorSpellCheck` wurden aktualisiert, um es neu startlosen Add-ons zu ermöglichen, Wörterbücher zum Rechtschreibprüfer hinzuzufügen.
- Das Attribut `nsIBrowserHistory.lastPageVisited` wurde entfernt.
- Die Schnittstelle `nsIDocumentViewer` wurde in `nsIContentViewer` zusammengeführt.
- Die Schnittstelle `nsIURIFixup` hat ein neues Flag, `FIXUP_FLAG_USE_UTF8`, das es erlaubt, UTF-8 anstelle des Plattform-Zeichensatzes zu verwenden, wenn Konvertierungen durchgeführt werden.

### Plug-in-Änderungen

- Die neue Variable `NPNVdocumentOrigin` wurde hinzugefügt; diese gibt den Dokumentursprung zurück und ist sicherer als [`window.location`](/de/docs/Web/API/Window/location).

### Buildsystem-Änderungen

- Die Build-Option `--disable-rdf`, die es tatsächlich unmöglich machte, erfolgreich zu bauen, wurde entfernt. An der Möglichkeit wird gearbeitet, RDF-Unterstützung vollständig zu entfernen, aber derzeit benötigt XUL sie noch, um zu funktionieren. Siehe [Firefox Bug 559505](https://bugzil.la/559505) für den Fortschritt beim Entfernen der letzten Überreste der erforderlichen RDF-Unterstützung.
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
