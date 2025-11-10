---
title: Firefox 10 Versionshinweise für Entwickler
short-title: Firefox 10
slug: Mozilla/Firefox/Releases/10
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Firefox 10 wurde am 31. Januar 2012 veröffentlicht. Dieser Artikel bietet Informationen über die neuen Funktionen und behobenen Hauptfehler in dieser Version sowie Links zu detaillierterer Dokumentation für Webentwickler und Add-on-Entwickler.

> [!NOTE]
> Firefox 10 ist die erste Version dieses Browsers mit zweistelliger Versionsnummer. Dies kann zu Problemen mit einigen UA-Sniffing-Skripten führen. Überprüfen Sie diese und auch diejenigen, die in von Ihnen eingebetteter Drittanbieter-Software, wie Bibliotheken, enthalten sind. Für weitere Informationen hierzu, lesen Sie den [Artikel über zweistellige Versionsnummern von Firefox auf hack.mozilla.org](https://hacks.mozilla.org/2012/01/firefox-goes-2-digit-time-to-check-your-ua-sniffing-scripts/).

## Änderungen für Webentwickler

### HTML

- Das neue HTML5-Element {{ HTMLElement("bdi") }}, bi-direktionale Isolation, das die Isolation von Textteilen mit unterschiedlicher Richtung ermöglicht, wurde implementiert. Dies ist besonders nützlich, wenn Text mit unbekannter Richtung angezeigt wird, der z.B. aus einer Datenbank stammt, inmitten von Text mit bekannter, und möglicherweise anderer, Richtung.
- Sie können jetzt einen Fragment "top" für das [`href`](/de/docs/Web/HTML/Reference/Elements/a#href)-Attribut angeben, um einen Link zum oberen Rand der Seite zu erstellen. Dies funktionierte früher, verschwand dann eine Weile und ist nun zurück, um mit der HTML5-Spezifikation kompatibel zu sein. Beispiel: `<a href="#top">Return to top of page</a>`.

### JavaScript

- Die Methode `WeakMap.set()` gibt jetzt `undefined` zurück, anstatt sich selbst.
- Ein Fehler in der regulären Ausdrucksverarbeitung, der in Firefox 7 eingeführt wurde, wurde behoben. Siehe [Firefox Bug 683838](https://bugzil.la/683838) für weitere Details.
- Sie können die veraltete ECMAScript für XML (E4X)-Syntax nicht mehr im [ECMAScript 5 Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode) verwenden (das heißt, nach `"use strict;"`).

### DOM

#### DOM3 Events

- Die DOM-Ereignismethode [`event.stopImmediatePropagation`](/de/docs/Web/API/Event/stopImmediatePropagation) wurde implementiert.
- Die Mausereignisse `mouseenter` und `mouseleave` wurden implementiert.

#### DOM4

- Das Attribut [`document.xmlVersion`](/de/docs/Web/API/Document/xmlVersion) (das nur abfragbar und nicht setzbar war) wurde entfernt, da es in der DOM4-Spezifikation als veraltet gilt. Der Artikel zu [`document.xmlVersion`](/de/docs/Web/API/Document/xmlVersion) schlägt nun eine Methode vor, um zu erkennen, ob das Dokument HTML oder XML ist, ohne diese Eigenschaft zu verwenden.
- Das Attribut `document.xmlStandalone` wurde entfernt, da es in der DOM4-Spezifikation als veraltet gilt.
- Das Attribut [`document.xmlEncoding`](/de/docs/Web/API/Document/xmlEncoding) wurde entfernt, da es in der DOM4-Spezifikation als veraltet gilt.
- Das Attribut `text.isElementContentWhiteSpace` wurde entfernt, da es in der DOM4-Spezifikation als veraltet gilt.
- Die Methode `text.replaceWholeText` wurde entfernt, da sie in der DOM4-Spezifikation als veraltet gilt.
- Die Methode [`node.isSameNode`](/de/docs/Web/API/Node/isSameNode) wurde entfernt, da sie in der DOM4-Spezifikation als veraltet gilt. Statt `node1.isSameNode(node2)` können Sie den `===` Operator verwenden, wie folgt: `node1 === node2`.

#### Page Visibility API

- Die [Page Visibility API](/de/docs/Web/API/Page_Visibility_API) wurde implementiert (mit Präfix): `document.mozHidden`, `document.mozVisibilityState` sind verfügbar und das Ereignis `mozvisibilitychanged` wird ausgelöst, wenn der Zustand geändert wird.

#### Vollbild-API

- Unterstützung für [`document.fullscreenEnabled`](/de/docs/Web/API/Document/fullscreenEnabled) wurde hinzugefügt.
- Die neue Eigenschaft `:-moz-full-screen-ancestor` wurde hinzugefügt. Damit können Sie gegen Elemente übereinstimmen, die Vorfahren eines Elements im Vollbildmodus sind.

#### Batterie-API

- Experimentelle Unterstützung für `navigator.mozBattery` wurde hinzugefügt (kann aktiviert werden durch Setzen der Einstellung `dom.battery.enabled` auf `true` und wird standardmäßig ab Firefox 11 aktiviert sein).

#### Canvas

- Die Methode [`createPattern()`](/de/docs/Web/API/CanvasRenderingContext2D/createPattern) wirft jetzt eine Ausnahme, wenn eine Quelle mit der Größe Null angegeben wird.
- Wenn Sie einen unendlichen Wert für einen der numerischen Parameter von [`putImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/putImageData) verwenden, wird der Aufruf jetzt stillschweigend ignoriert, anstatt eine Ausnahme zu werfen, entsprechend der Spezifikation.

#### WebGL

- Firefox 10 unterstützt jetzt die Erweiterung [`OES_standard_derivatives`](https://registry.khronos.org/webgl/extensions/OES_standard_derivatives/).
- [Neue Einstellungen wurden hinzugefügt](/de/docs/Web/API/WebGL_API#webgl_debugging_and_testing), um den Test von WebGL-Code auf Kompatibilität mit minimal-fähigen Geräten auf Ihrer vollständigen Entwicklungsplattform zu unterstützen.

#### Web Workers

- Die Attribute `XMLHttpRequest.responseType` und `XMLHttpRequest.response` sind jetzt innerhalb von [Workers](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers) verfügbar.
- Der [`Worker()`](/de/docs/Web/API/Worker/Worker)-Konstruktor akzeptiert nun [Daten-URLs](/de/docs/Web/URI/Reference/Schemes/data).

#### IndexedDB

Es wurden erhebliche Fortschritte gemacht, um IndexedDB an die neueste Entwurfsspezifikation anzupassen. Diese Bemühungen werden in Firefox 11 fortgesetzt.

- Die Methoden [`IDBIndex.count()`](/de/docs/Web/API/IDBIndex/count) und [`IDBObjectStore.count()`](/de/docs/Web/API/IDBObjectStore/count) wurden hinzugefügt.
- Die Methode [`IDBCursor.advance()`](/de/docs/Web/API/IDBCursor/advance) wurde hinzugefügt.
- Bei unbekannten optionalen Parametern in [`IDBObjectStore.createIndex()`](/de/docs/Web/API/IDBObjectStore/createIndex) oder [`IDBDatabase.createObjectStore()`](/de/docs/Web/API/IDBDatabase/createObjectStore) löst Gecko keine Ausnahme mehr aus, sondern ignoriert sie.
- Wenn [`IDBTransaction.abort()`](/de/docs/Web/API/IDBTransaction/abort) aufgerufen wird, haben alle ausstehenden [`IDBRequest`](/de/docs/Web/API/IDBRequest) ihre `errorCode` auf `ABORT_ERROR` gesetzt.
- Die Methoden [`IDBObjectStore.delete()`](/de/docs/Web/API/IDBObjectStore/delete) und [`IDBCursor.delete()`](/de/docs/Web/API/IDBCursor/delete) setzen jetzt das `result`-Attribut des zurückgegebenen [`IDBRequest`](/de/docs/Web/API/IDBRequest) auf `undefined`.
- Die Methode `IDBDatabase.setVersion()` wurde entfernt, da sie aus der neuesten Spezifikation entfernt wurde. Die Version der Datenbank wird über die Methode [`IDBFactory.open()`](/de/docs/Web/API/IDBFactory/open) angegeben, die aktualisiert wurde, und der `onupgradeneeded` Rückruf ermöglicht die Aktualisierung des Datenbankschemas. Die Version selbst wurde von einem `DOMString` zu einem `unsigned long long` geändert. Die Schnittstelle `IDBVersionChangeRequest` wurde entfernt und durch die neue Schnittstelle [`IDBOpenDBRequest`](/de/docs/Web/API/IDBOpenDBRequest) ersetzt.
- Beim Öffnen einer Datenbank mit [`IDBFactory.open()`](/de/docs/Web/API/IDBFactory/open), wenn der `version`-Parameter nicht angegeben und die Datenbank nicht existiert, wird sie mit der Version `1` erstellt.
- Die Methode [`IDBFactory.deleteDatabase()`](/de/docs/Web/API/IDBFactory/deleteDatabase) wurde hinzugefügt.
- Methoden, die über einen [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange) suchen (wie [`IDBObjectStore.openCursor`](/de/docs/Web/API/IDBObjectStore/openCursor) und [`IDBIndex.getKey`](/de/docs/Web/API/IDBIndex/getKey)), können entweder einen einzelnen Schlüssel oder einen Schlüsselbereich akzeptieren.

#### Sonstiges

- Wenn der richtige MIME-Typ, `image/svg+xml`, übergeben wird, erstellt der `DOMParser` jetzt ein `SVGDocument`, wenn eine Zeichenkette mit SVG angegeben wird.
- In der Vergangenheit, wenn [`element.setAttribute()`](/de/docs/Web/API/Element/setAttribute) Ganzzahlen analysierte, berichtete es über einen Fehler, wenn die Ganzzahl nicht-numerische Zeichen enthielt (z. B. "42foo"). Jetzt wird dies gemäß der Spezifikation korrekt als Nummer 42 gekürzt.
- Die ESC-Taste führt nicht mehr fälschlicherweise dazu, dass der [`onkeydown`](/de/docs/Web/API/Element/keydown_event) Handler fälschlicherweise aufgerufen wird.
- Die `NameList`-Schnittstelle wird nicht mehr implementiert; sie hatte zuvor eine Implementierung ohne Möglichkeit, tatsächlich auf eine zuzugreifen.
- Die Methode [`document.createProcessingInstruction()`](/de/docs/Web/API/Document/createProcessingInstruction) funktioniert jetzt sowohl bei HTML-Dokumenten als auch bei XML-Dokumenten. [`ProcessingInstruction`](/de/docs/Web/API/ProcessingInstruction)-Knoten werden weiterhin nur bei XML-Dokumenten unterstützt, aber da Knoten zwischen Dokumenten verschoben werden können, ist es hilfreich, sie auch bei HTML-Dokumenten erstellen zu können.
- Der [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) `responseType` `"moz-json"` [eingeführt in Firefox 9](/de/docs/Mozilla/Firefox/Releases/9#dom) wurde auf den neuesten Entwurf der Spezifikation aktualisiert und wurde das Präfix entfernt. Siehe Hinweis im [Firefox Bug 707142](https://bugzil.la/707142#c13).

### CSS

- CSS 3D-Transformationen werden jetzt unterstützt. Dazu gehört die Unterstützung der Eigenschaften {{ cssxref("transform-style") }}, {{ cssxref("perspective") }}, {{ cssxref("perspective-origin") }} und {{ cssxref("backface-visibility") }}, sowie für 3D-Transformationsfunktionen in den Eigenschaften {{ cssxref("transform") }} und {{ cssxref("transform-function") }}. Siehe [Verwendung von CSS-Transformationen](/de/docs/Web/CSS/Guides/Transforms/Using#3d_specific_css_properties) für Details.
- Zwei neue Werte für die CSS-Eigenschaft {{ cssxref("unicode-bidi") }} wurden hinzugefügt: `-moz-isolation` und `-moz-plaintext`. Der Wert `-moz-isolation` isoliert das Element aus Richtungsaspekten von seiner Umgebung, sodass es eine andere Richtung haben kann. Ein Element mit `unicode-bidi:-moz-isolation` verhält sich wie ein {{ HTMLElement("bdi") }}-Element. Der Wert `-moz-plaintext` gibt dem Browser vor, die Unicode-Browser-Heuristik zur Bestimmung der Richtung zu verwenden und nicht die CSS-Eigenschaft {{ cssxref("direction") }}.
- Die CSS-Eigenschaften {{ cssxref("gradient/linear-gradient") }} und {{ cssxref("gradient/repeating-linear-gradient") }} wurden aktualisiert, um die neue `to`-Syntax und den _magic corner_-Algorithmus zu unterstützen. Dies ermöglicht es, eine präzise Farbe auf die Ecke eines gradienten-gefüllten Kastens zu geben.
- Die Behandlung der Eigenschaft {{ cssxref("text-overflow") }} in Fällen, in denen der Kasten auf beiden Seiten überläuft, während die Eigenschaft `text-overflow` nur auf einem festgelegt ist, wurde korrigiert.
- Die Behandlung der Eigenschaft {{ cssxref("position") }} auf Elementen innerhalb positionierter {{ HTMLElement("table") }}-Elemente wurde behoben. **Diese Änderung wird das Layout von Seiten beeinflussen. Allerdings entsprechen wir jetzt der CSS-Spezifikation und anderen Browsern, daher sollte dies leicht zu beheben sein.**
- Das Zusammenbrechen von Rändern um {{ HTMLElement("table") }}-Elemente wurde korrigiert, um der CSS-Spezifikation zu entsprechen. Zuvor wurden die Ränder von Tabellenelementen nicht zusammen mit anderen angrenzenden Elementen zusammengebrochen, was zu einem falschen Layout führte. **Diese Änderung wird das Layout von Seiten beeinflussen. Allerdings entsprechen wir jetzt der CSS-Spezifikation und anderen Browsern, daher sollte dies leicht zu beheben sein.**

### SVG

- Das {{ SVGElement("mask") }}-Element wurde aktualisiert, um sowohl sRGB als auch linearRGB zu unterstützen und verwendet jetzt standardmäßig sRGB, entsprechend der neuesten Überarbeitung der SVG 1.1-Spezifikation.

### Netzwerk

- Der HTTP-Header `Accept-Charset` wird in HTTP-Anfragen nicht mehr gesendet. In seiner Abwesenheit sollten Server antworten, indem sie UTF-8 senden.

### Entwicklerwerkzeuge

- Das [`console`](/de/docs/Web/API/console)-Objekt hat zwei neue Methoden, [`console.time()`](/de/docs/Web/API/console/time_static) und [`console.timeEnd()`](/de/docs/Web/API/console/timeEnd_static), die verwendet werden können, um Timer auf einer Seite zu setzen.
- Der neue [Page Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) wurde hinzugefügt und bietet eine ausgezeichnete Möglichkeit, das HTML und CSS hinter Ihren Inhalten zu untersuchen und zu manipulieren.

## Änderungen für Mozilla- und Add-on-Entwickler

Für einen Überblick über potenzielle Probleme, die beim Aktualisieren Ihrer Add-ons zur Unterstützung von Firefox 10 auftreten können, lesen Sie [Aktualisieren von Add-ons für Firefox 10](/de/docs/Mozilla/Firefox/Releases/10/Updating_add-ons).

> [!NOTE]
> Der alte [`PRBool`](https://web.archive.org/web/20210224213411/https://developer.mozilla.org/de/docs/Mozilla/Projects/NSPR/Reference/PRBool)-Datentyp wurde eingestellt! Überall in der Dokumentation, die darauf verweist, wird jetzt der standardmäßige C++ `bool`-Typ verwendet. Die Dokumentation wird in Zukunft aktualisiert, aber behalten Sie dies vorerst im Hinterkopf.

### Manifeste

- Unterstützung für [`<em:strictCompatibility>`](https://web.archive.org/web/20210421140209/https://developer.mozilla.org/de/docs/Archive/Add-ons/Install_Manifests#strictcompatibility) wurde dem Installationsmanifest hinzugefügt. Es ermöglicht Add-on-Autoren, sich dafür zu entscheiden, die maximale Version ihrer Erweiterung zu überprüfen. Wenn auf `true` gesetzt, wird das Add-on deaktiviert, wenn die Anwendungsversion größer als `<em:maxVersion>` ist. Firefox 10 geht standardmäßig davon aus, dass Add-ons unabhängig von ihrer angegebenen maximalen Version kompatibel sind. Dieses Flag überschreibt diese Einstellung. Sie sollten dies setzen, wenn Ihr Add-on Dinge tut, die wahrscheinlich durch Firefox-Updates unterbrochen werden, **aber nicht**, wenn Ihr Add-on eine binäre Komponente enthält, da solche Add-ons immer strikt geprüft werden (denken Sie daran, dass binäre Komponenten immer für jede größere Firefox-Version neu kompiliert werden müssen).
- Wenn Sie zum alten Verhalten zurückkehren möchten — das heißt, zur strikten Kompatibilitätsprüfung für alle Add-ons, unabhängig vom Wert des `strictCompatibility`-Flags in ihren Manifesten, können Sie die Einstellung `extensions.strictCompatibility` auf `true` setzen.

### XUL

- Bootstrap-Add-ons, die eine `chrome.manifest`-Datei verwenden, haben jetzt die Manifestdatei automatisch registriert. Siehe den Abschnitt [Hinzufügen einer Benutzeroberfläche mit einem chrome.manifest](https://web.archive.org/web/20210519000929/https://developer.mozilla.org/de/docs/Archive/Add-ons/Bootstrapped_extensions#Adding_user_interface_with_a_chrome.manifest) für Details.

### XPConnect

- Mehrere neue Eigenschaften und Methoden wurden zu `Components.utils` hinzugefügt, die Zugriff auf verschiedene debuggingbezogene Informationen gewähren.

### Schnittstellenänderungen

- Die Schnittstellen `mozISpellCheckingEngine` und `nsIEditorSpellCheck` wurden aktualisiert, um restartrtlose Add-ons zu ermöglichen, Wörterbücher zum Rechtschreibprüfer hinzuzufügen.
- Das Attribut `nsIBrowserHistory.lastPageVisited` wurde entfernt.
- Die Schnittstelle `nsIDocumentViewer` wurde in `nsIContentViewer` zusammengeführt.
- Die Schnittstelle `nsIURIFixup` hat ein neues Flag, `FIXUP_FLAG_USE_UTF8`, welches es Ihnen ermöglicht, es zu verwenden, um UTF-8 anstelle des Plattform-Zeichensatzes für Konvertierungen zu verwenden.

### Plug-in-Änderungen

- Die neue Variable `NPNVdocumentOrigin` wurde hinzugefügt; diese gibt den Dokumentursprung zurück und ist sicherer als [`window.location`](/de/docs/Web/API/Window/location).

### Änderungen am Build-System

- Die Build-Option `--disable-rdf`, die es tatsächlich unmöglich machte, erfolgreich zu bauen, wurde entfernt. Es wird daran gearbeitet, die RDF-Unterstützung vollständig zu entfernen, aber derzeit erfordert XUL noch ihre Funktion. Siehe [Firefox Bug 559505](https://bugzil.la/559505) für Fortschritte beim Entfernen der letzten Überreste von RDF, die benötigt werden.
- Die Build-Option `--disable-smil` wurde entfernt.
