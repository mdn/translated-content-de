---
title: Firefox 10 Versionshinweise für Entwickler
short-title: Firefox 10
slug: Mozilla/Firefox/Releases/10
l10n:
  sourceCommit: 83f4e64da466670c3700110da364546253eae127
---

Firefox 10 wurde am 31. Januar 2012 veröffentlicht. Dieser Artikel bietet Informationen über die neuen Funktionen und die wichtigsten behobenen Fehler dieser Version, sowie Links zu detaillierteren Dokumentationen für Webentwickler und Add-on-Entwickler.

> [!NOTE]
> Firefox 10 ist die erste Version dieses Browsers mit zweistelligen Versionsnummern. Dies kann zu Problemen mit einigen User-Agent-Erkennungsskripten führen. Überprüfen Sie diese unbedingt, sowie auch diejenigen Skripte, die in von Ihnen eingebetteter Drittanbieter-Software enthalten sind, wie Bibliotheken. Weitere Informationen dazu finden Sie im [Artikel auf hack.mozilla.org über den Wechsel zu zweistelligen Versionsnummern](https://hacks.mozilla.org/2012/01/firefox-goes-2-digit-time-to-check-your-ua-sniffing-scripts/).

## Änderungen für Webentwickler

### HTML

- Das neue HTML5 {{ HTMLElement("bdi") }}-Element zur bi-direktionalen Isolation, das die Isolierung von Textteilen mit unterschiedlicher Richtung ermöglicht, wurde implementiert. Dies ist besonders nützlich beim Anzeigen von Text mit unbekannter Richtung, der beispielsweise aus einer Datenbank stammt, inmitten von Text mit bekannter und möglicherweise unterschiedlicher Richtung.
- Es kann jetzt ein Fragment "top" für das Attribut [`href`](/de/docs/Web/HTML/Reference/Elements/a#href) angegeben werden, um einen Link zum Anfang der Seite zu erstellen. Dies funktionierte früher, verschwand dann eine Zeit lang und ist nun zurück, um die Kompatibilität mit dem HTML5-Standard zu gewährleisten. Zum Beispiel: `<a href="#top">Zurück zum Seitenanfang</a>`.

### JavaScript

- Die Methode `WeakMap.set()` gibt jetzt `undefined` zurück, anstatt sich selbst.
- Ein Fehler in der Verarbeitung regulärer Ausdrücke, der in Firefox 7 eingeführt wurde, wurde behoben. Siehe [Firefox-Bug 683838](https://bugzil.la/683838) für Details.
- Sie können die veraltete ECMAScript for XML (E4X) Syntax nicht mehr verwenden, während Sie sich im [strict-Modus von ECMAScript 5](/de/docs/Web/JavaScript/Reference/Strict_mode) befinden (also nach dem Schlüsselwort `"use strict;"`).

### DOM

#### DOM3-Events

- Die DOM-Event-Methode [`event.stopImmediatePropagation`](/de/docs/Web/API/Event/stopImmediatePropagation) wurde implementiert.
- Die Mausereignisse `mouseenter` und `mouseleave` wurden implementiert.

#### DOM4

- Das Attribut [`document.xmlVersion`](/de/docs/Web/API/Document/xmlVersion) (das nur lesbar und nicht setzbar war) wurde entfernt, da es in der DOM4-Spezifikation als veraltet gilt. Der Artikel für [`document.xmlVersion`](/de/docs/Web/API/Document/xmlVersion) schlägt nun eine Möglichkeit vor, um zu erkennen, ob es sich um ein HTML- oder XML-Dokument handelt, ohne diese Eigenschaft zu verwenden.
- Das Attribut `document.xmlStandalone` wurde entfernt, da es in der DOM4-Spezifikation als veraltet gilt.
- Das Attribut [`document.xmlEncoding`](/de/docs/Web/API/Document/xmlEncoding) wurde entfernt, da es in der DOM4-Spezifikation als veraltet gilt.
- Das Attribut `text.isElementContentWhiteSpace` wurde entfernt, da es in der DOM4-Spezifikation als veraltet gilt.
- Die Methode `text.replaceWholeText` wurde entfernt, da sie in der DOM4-Spezifikation als veraltet gilt.
- Die Methode [`node.isSameNode`](/de/docs/Web/API/Node/isSameNode) wurde entfernt, da sie in der DOM4-Spezifikation als veraltet gilt. Statt `node1.isSameNode(node2)` können Sie den `===` Operator verwenden, also: `node1 === node2`.

#### Page Visibility API

- Die [Page Visibility API](/de/docs/Web/API/Page_Visibility_API) wurde implementiert (mit Präfix): `document.mozHidden`, `document.mozVisibilityState` stehen zur Verfügung und das Ereignis `mozvisibilitychanged` wird gesendet, wenn der Zustand geändert wird.

#### Full Screen API

- Unterstützung für [`document.fullscreenEnabled`](/de/docs/Web/API/Document/fullscreenEnabled) wurde hinzugefügt.
- Die neue Eigenschaft `:-moz-full-screen-ancestor` wurde hinzugefügt. Damit können Sie auf Elemente abzielen, die Vorfahren eines Elements im Vollbildmodus sind.

#### Battery API

- Experimentelle Unterstützung für `navigator.mozBattery` wurde hinzugefügt (kann aktiviert werden durch Setzen der Einstellung `dom.battery.enabled` auf `true` und wird standardmäßig ab Firefox 11 aktiviert sein).

#### Canvas

- Die Methode [`createPattern()`](/de/docs/Web/API/CanvasRenderingContext2D/createPattern) löst jetzt eine Ausnahme aus, wenn eine Quelle mit null Größe angegeben wird.
- Wenn Sie einen nicht-finiten Wert für einen der numerischen Parameter von [`putImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/putImageData) verwenden, wird der Aufruf jetzt stillschweigend ignoriert anstatt eine Ausnahme zu werfen, in Übereinstimmung mit der Spezifikation.

#### WebGL

- Firefox 10 unterstützt jetzt die [`OES_standard_derivatives`](https://registry.khronos.org/webgl/extensions/OES_standard_derivatives/) Erweiterung.
- [Neue Voreinstellungen wurden hinzugefügt](/de/docs/Web/API/WebGL_API#webgl_debugging_and_testing), um zu helfen, WebGL-Code für die Kompatibilität mit minimal leistungsfähigen Geräten auf Ihrer vollständigen Entwicklungsplattform zu testen.

#### Web Workers

- Die Attribute `XMLHttpRequest.responseType` und `XMLHttpRequest.response` sind jetzt innerhalb von [Workers](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers) verfügbar.
- Der [`Worker()`](/de/docs/Web/API/Worker/Worker) Konstruktor akzeptiert jetzt [Daten-URLs](/de/docs/Web/URI/Reference/Schemes/data).

#### IndexedDB

Es wurden große Fortschritte erzielt, IndexedDB auf die neueste Entwurfspezifikation zu aktualisieren. Diese Bemühungen werden in Firefox 11 fortgesetzt.

- Die Methoden [`IDBIndex.count()`](/de/docs/Web/API/IDBIndex/count) und [`IDBObjectStore.count()`](/de/docs/Web/API/IDBObjectStore/count) wurden hinzugefügt.
- Die Methode [`IDBCursor.advance()`](/de/docs/Web/API/IDBCursor/advance) wurde hinzugefügt.
- Beim Auftreten eines unbekannten optionalen Parameters in [`IDBObjectStore.createIndex()`](/de/docs/Web/API/IDBObjectStore/createIndex) oder [`IDBDatabase.createObjectStore()`](/de/docs/Web/API/IDBDatabase/createObjectStore) wird in Gecko keine Ausnahme mehr ausgelöst, sondern der Parameter ignoriert.
- Wenn [`IDBTransaction.abort()`](/de/docs/Web/API/IDBTransaction/abort) aufgerufen wird, haben alle anhängigen [`IDBRequest`](/de/docs/Web/API/IDBRequest) ihre `errorCode` auf `ABORT_ERROR` gesetzt.
- Die Methoden [`IDBObjectStore.delete()`](/de/docs/Web/API/IDBObjectStore/delete) und [`IDBCursor.delete()`](/de/docs/Web/API/IDBCursor/delete) setzen jetzt das `result` Attribut des zurückgegebenen [`IDBRequest`](/de/docs/Web/API/IDBRequest) auf `undefined`.
- Die Methode `IDBDatabase.setVersion()` wurde entfernt, da sie aus der neuesten Spezifikation entfernt wurde. Die Version der Datenbank wird durch die Methode [`IDBFactory.open()`](/de/docs/Web/API/IDBFactory/open) angegeben, die aktualisiert wurde, und der `onupgradeneeded` Callback ermöglicht es, das Schema der Datenbank zu aktualisieren. Die Version selbst wurde von einem `DOMString` in ein `unsigned long long` geändert. Das `IDBVersionChangeRequest` Interface wurde entfernt und durch das neue [`IDBOpenDBRequest`](/de/docs/Web/API/IDBOpenDBRequest) Interface ersetzt.
- Wenn eine Datenbank mit [`IDBFactory.open()`](/de/docs/Web/API/IDBFactory/open) geöffnet wird, wird sie, falls der `version` Parameter nicht angegeben ist und die Datenbank nicht existiert, mit einer Version von `1` erstellt.
- Die Methode [`IDBFactory.deleteDatabase()`](/de/docs/Web/API/IDBFactory/deleteDatabase) wurde hinzugefügt.
- Methoden, die nach einem [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange) suchen (wie [`IDBObjectStore.openCursor`](/de/docs/Web/API/IDBObjectStore/openCursor) und [`IDBIndex.getKey`](/de/docs/Web/API/IDBIndex/getKey)), können entweder einen einzelnen Schlüssel oder einen Schlüsselbereich akzeptieren.

#### Sonstiges

- Wenn der richtige MIME-Typ `image/svg+xml` übergeben wird, erstellt der `DOMParser` jetzt ein `SVGDocument`, wenn ihm ein String mit SVG übergeben wird.
- Früher meldete [`element.setAttribute()`](/de/docs/Web/API/Element/setAttribute) einen Fehler, wenn ganze Zahlen nicht-numerische Zeichen enthielten (zum Beispiel "42foo"). Jetzt wird dies korrekt als die Zahl 42 gekürzt, entsprechend der Spezifikation.
- Die ESC-Taste führt nicht mehr fälschlicherweise dazu, dass der [`onkeydown`](/de/docs/Web/API/Element/keydown_event) Handler fälschlicherweise aufgerufen wird.
- Das `NameList` Interface wird nicht mehr implementiert; es existierte früher eine Implementierung ohne Möglichkeit, tatsächlich darauf zuzugreifen.
- Die Methode [`document.createProcessingInstruction()`](/de/docs/Web/API/Document/createProcessingInstruction) funktioniert jetzt sowohl bei HTML- als auch bei XML-Dokumenten. [`ProcessingInstruction`](/de/docs/Web/API/ProcessingInstruction) Knoten werden weiterhin nur bei XML-Dokumenten unterstützt, aber da Knoten zwischen Dokumenten verschoben werden können, ist es hilfreich, sie auch bei HTML-Dokumenten erstellen zu können.
- Der `XMLHttpRequest`- `responseType` `"moz-json"` [eingeführt in Firefox 9](/de/docs/Mozilla/Firefox/Releases/9#dom) wurde auf den neuesten Entwurf der Spezifikation aktualisiert und ist jetzt ohne Präfix. Siehe Hinweis in [Firefox-Bug 707142](https://bugzil.la/707142#c13).

### CSS

- CSS-3D-Transformationen werden jetzt unterstützt. Dazu gehört die Unterstützung für die Eigenschaften {{ cssxref("transform-style") }}, {{ cssxref("perspective") }}, {{ cssxref("perspective-origin") }} und {{ cssxref("backface-visibility") }}, sowie für 3D-Transformationsfunktionen in den Eigenschaften {{ cssxref("transform") }} und {{ cssxref("transform-function") }}. Weitere Informationen finden Sie unter [Verwendung von CSS-Transformationen](/de/docs/Web/CSS/Guides/Transforms/Using#3d_specific_css_properties).
- Zwei neue Werte für die CSS-Eigenschaft {{ cssxref("unicode-bidi") }} wurden hinzugefügt: `-moz-isolation` und `-moz-plaintext`. Der Wert `-moz-isolation` isoliert aus sicht der Richtung das Element von seiner Umgebung und ermöglicht eine unterschiedliche Richtung. Ein Element mit `unicode-bidi:-moz-isolation` verhält sich wie ein {{ HTMLElement("bdi") }} Element. Das `-moz-plaintext` gibt dem Browser an, die Unicode-Browser-Heuristik zur Bestimmung der Richtung zu verwenden und nicht die CSS-Eigenschaft {{ cssxref("direction") }}.
- Die CSS-Eigenschaften {{ cssxref("gradient/linear-gradient") }} und {{ cssxref("gradient/repeating-linear-gradient") }} wurden aktualisiert, um die neue `to` Syntax und den _magic corner_ Algorithmus zu unterstützen. Dies ermöglicht es, eine präzise Farbe an der Ecke eines mit einem Gradienten gefüllten Feldes anzugeben.
- Die Behandlung der Eigenschaft {{ cssxref("text-overflow") }} in Fällen, in denen das Feld auf beiden Seiten überfließt, während die Eigenschaft `text-overflow` nur auf einer Seite eingestellt ist, wurde korrigiert.
- Die Behandlung der Eigenschaft {{ cssxref("position") }} bei Elementen innerhalb positionierter {{ HTMLElement("table") }} Elemente wurde behoben. **Diese Änderung wird das Layout von Seiten beeinflussen; allerdings erfüllen wir jetzt die CSS-Spezifikation und haben eine höhere Übereinstimmung mit anderen Browsern, sodass dies leicht zu beheben sein sollte.**
- Das Margin-Collapsing um {{ HTMLElement("table") }} Elemente wurde korrigiert, um der CSS-Spezifikation zu entsprechen. Zuvor wurden Margen von Tabellenelementen nicht zusammen mit anderen angrenzenden Elementen zusammengezogen, was zu einem fehlerhaften Layout führte. **Diese Änderung wird das Layout von Seiten beeinflussen; allerdings erfüllen wir jetzt die CSS-Spezifikation und haben eine höhere Übereinstimmung mit anderen Browsern, sodass dies leicht zu beheben sein sollte.**

### SVG

- Das {{ SVGElement("mask") }} Element wurde aktualisiert, um sowohl sRGB als auch linearRGB zu unterstützen und der Standardwert ist jetzt sRGB in Übereinstimmung mit der neuesten Revision der SVG 1.1-Spezifikation.

### Netzwerk

- Der HTTP-Header `Accept-Charset` wird in HTTP-Anfragen nicht mehr gesendet. In seiner Abwesenheit sollten Server mit dem Senden von UTF-8 antworten.

### Entwicklertools

- Das [`console`](/de/docs/Web/API/console) Objekt hat zwei neue Methoden, [`console.time()`](/de/docs/Web/API/console/time_static) und [`console.timeEnd()`](/de/docs/Web/API/console/timeEnd_static), die verwendet werden können, um Timer auf einer Seite zu setzen.
- Der neue [Page Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) wurde hinzugefügt, der eine hervorragende Möglichkeit bietet, das HTML und CSS hinter Ihren Inhalten zu untersuchen und zu manipulieren.

## Änderungen für Mozilla- und Add-on-Entwickler

Für einen Überblick über mögliche Probleme, die beim Aktualisieren Ihrer Add-ons zur Unterstützung von Firefox 10 auftreten können, lesen Sie [Aktualisieren von Add-ons für Firefox 10](/de/docs/Mozilla/Firefox/Releases/10/Updating_add-ons).

> [!NOTE]
> Der alte [`PRBool`](https://web.archive.org/web/20210224213411/https://developer.mozilla.org/de/docs/Mozilla/Projects/NSPR/Reference/PRBool) Datentyp wurde eingestellt! Überall in der Dokumentation, wo darauf Bezug genommen wird, wird jetzt der standardmäßige C++ `bool`-Typ verwendet. Die Dokumentation wird in Zukunft aktualisiert, aber vorerst sollten Sie dies bedenken.

### Manifeste

- Unterstützung für [`<em:strictCompatibility>`](https://web.archive.org/web/20210421140209/https://developer.mozilla.org/de/docs/Archive/Add-ons/Install_Manifests#strictcompatibility) wurde zum Installationsmanifest hinzugefügt. Es ermöglicht Add-on-Autoren, sich für das Überprüfen der maximalen Version ihrer Erweiterung zu entscheiden. Wenn auf `true` gesetzt, wird das Add-on deaktiviert, wenn die Anwendungsversion größer als `<em:maxVersion>` ist. Firefox 10 geht standardmäßig davon aus, dass Add-ons kompatibel sind, unabhängig von ihrer angegebenen maximalen Version. Dieses Flag überschreibt diese Präferenz. Sie sollten dies setzen, wenn Ihr Add-on Dinge tut, die wahrscheinlich durch Updates von Firefox beschädigt werden, **aber nicht**, wenn Ihr Add-on eine binäre Komponente hat, da solche Add-ons immer strikt überprüft werden (denken Sie daran, dass binäre Komponenten immer für jede größere Version von Firefox neu kompiliert werden müssen).
- Wenn Sie zum alten Verhalten zurückkehren möchten – also zur strikten Kompatibilitätsprüfung für alle Add-ons, unabhängig vom Wert des `strictCompatibility` Flags in deren Manifesten, können Sie die Einstellung `extensions.strictCompatibility` auf `true` setzen.

### XUL

- Bootstrapped Add-ons, die eine `chrome.manifest` Datei verwenden, haben jetzt die Manifestdatei automatisch registriert. Siehe den Abschnitt [Hinzufügen einer Benutzeroberfläche mit einer chrome.manifest](https://web.archive.org/web/20210519000929/https://developer.mozilla.org/de/docs/Archive/Add-ons/Bootstrapped_extensions#Adding_user_interface_with_a_chrome.manifest) für Details.

### XPConnect

- Mehrere neue Eigenschaften und Methoden wurden zu `Components.utils` hinzugefügt, die den Zugriff auf verschiedene debuggingbezogene Informationen gewähren.

### Schnittstellenänderungen

- Die `mozISpellCheckingEngine` und `nsIEditorSpellCheck` Schnittstellen wurden aktualisiert, um Add-ons ohne Neustart zu erlauben, Wörterbücher zum Rechtschreibprüfer hinzuzufügen.
- Das Attribut `nsIBrowserHistory.lastPageVisited` wurde entfernt.
- Die Schnittstelle `nsIDocumentViewer` wurde in `nsIContentViewer` integriert.
- Die Schnittstelle `nsIURIFixup` hat eine neue Flagge, `FIXUP_FLAG_USE_UTF8`, die es ermöglicht anzugeben, dass anstelle des Plattform-Zeichensatzes UTF-8 bei Konvertierungen verwendet wird.

### Plug-in Änderungen

- Die neue Variable `NPNVdocumentOrigin` wurde hinzugefügt; diese gibt den Dokumentursprung zurück und ist sicherer als [`window.location`](/de/docs/Web/API/Window/location).

### Änderungen am Build-System

- Die Build-Option `--disable-rdf`, die es tatsächlich unmöglich machte erfolgreich zu bauen, wurde entfernt. Es wird daran gearbeitet, die RDF-Unterstützung komplett entfernen zu können, aber derzeit benötigt XUL es noch zum Funktionieren. Siehe [Firefox-Bug 559505](https://bugzil.la/559505) für den Fortschritt beim Entfernen der letzten Überreste der benötigten RDF Unterstützung.
- Die Build-Option `--disable-smil` wurde entfernt.
