---
title: Firefox 10 Versionshinweise für Entwickler
short-title: Firefox 10
slug: Mozilla/Firefox/Releases/10
l10n:
  sourceCommit: 61912f53d01e935aea926a2226130fb4587414a9
---

Firefox 10 wurde am 31. Januar 2012 veröffentlicht. Dieser Artikel bietet Informationen über die neuen Funktionen und wichtige behobene Fehler in dieser Version sowie Links zu detaillierterer Dokumentation für Webentwickler und Add-on-Entwickler.

> [!NOTE]
> Firefox 10 ist die erste Veröffentlichung dieses Browsers mit zwei Ziffern. Dies kann zu Problemen mit einigen UA-Sniffing-Skripten führen. Stellen Sie sicher, dass Sie diese prüfen, ebenso wie solche, die in Drittherstellersoftware eingebettet sind, wie Bibliotheken. Für weitere Informationen dazu sehen Sie sich den [Artikel "Firefox goes 2-digit" auf hack.mozilla.org](https://hacks.mozilla.org/2012/01/firefox-goes-2-digit-time-to-check-your-ua-sniffing-scripts/) an.

## Änderungen für Webentwickler

### HTML

- Das neue HTML5-Element {{ HTMLElement("bdi") }}, bidirektionale Isolation, das die Isolierung von Textteilen mit unterschiedlicher Richtung erlaubt, wurde implementiert. Dies ist besonders nützlich beim Anzeigen von Text mit unbekannter Richtung, zum Beispiel aus einer Datenbank, in der Mitte eines Textes mit bekannter, aber möglicherweise anderer Richtung.
- Sie können nun ein Fragment „top“ für das Attribut [`href`](/de/docs/Web/HTML/Reference/Elements/a#href) angeben, um einen Link zum Anfang der Seite zu erstellen. Dies funktionierte früher, verschwand dann eine Weile, und ist jetzt aus Kompatibilitätsgründen mit der HTML5-Spezifikation wieder da. Zum Beispiel: `<a href="#top">Zum Seitenanfang</a>`.

### JavaScript

- Die Methode `WeakMap.set()` gibt jetzt `undefined` zurück, anstatt sich selbst.
- In Firefox 7 wurde ein Fehler bei der Verarbeitung von regulären Ausdrücken eingeführt; dieser wurde behoben. Weitere Details finden Sie im [Firefox-Bug 683838](https://bugzil.la/683838).
- Sie können die veraltete ECMAScript for XML (E4X) Syntax nicht mehr verwenden, während Sie sich im [ECMAScript 5 Strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) befinden (das heißt, nach `"use strict;"`).

### DOM

#### DOM3 Events

- Die DOM-Event-Methode [`event.stopImmediatePropagation`](/de/docs/Web/API/Event/stopImmediatePropagation) wurde implementiert.
- Die Mausereignisse `mouseenter` und `mouseleave` wurden implementiert.

#### DOM4

- Das Attribut [`document.xmlVersion`](/de/docs/Web/API/Document/xmlVersion) (das nur gelesen und nicht gesetzt werden konnte) wurde entfernt, da es in der DOM4-Spezifikation als veraltet gilt. Der Artikel zu [`document.xmlVersion`](/de/docs/Web/API/Document/xmlVersion) schlägt nun einen Weg vor, um zu erkennen, ob das Dokument HTML oder XML ist, ohne diese Eigenschaft zu verwenden.
- Das Attribut `document.xmlStandalone` wurde entfernt, da es in der DOM4-Spezifikation als veraltet gilt.
- Das Attribut [`document.xmlEncoding`](/de/docs/Web/API/Document/xmlEncoding) wurde entfernt, da es in der DOM4-Spezifikation als veraltet gilt.
- Das Attribut `text.isElementContentWhiteSpace` wurde entfernt, da es in der DOM4-Spezifikation als veraltet gilt.
- Die Methode `text.replaceWholeText` wurde entfernt, da sie in der DOM4-Spezifikation als veraltet gilt.
- Die Methode [`node.isSameNode`](/de/docs/Web/API/Node/isSameNode) wurde entfernt, da sie in der DOM4-Spezifikation als veraltet gilt. Anstatt `node1.isSameNode(node2)` können Sie den `===` Operator verwenden, wie folgt: `node1 === node2`.

#### Page Visibility API

- Die [Page Visibility API](/de/docs/Web/API/Page_Visibility_API) wurde implementiert (mit Präfix): `document.mozHidden`, `document.mozVisibilityState` sind verfügbar und das Ereignis `mozvisibilitychanged` wird gesendet, wenn sich der Status ändert.

#### Full Screen API

- Unterstützung für [`document.fullscreenEnabled`](/de/docs/Web/API/Document/fullscreenEnabled) wurde hinzugefügt.
- Die neue Eigenschaft `:-moz-full-screen-ancestor` wurde hinzugefügt. Diese ermöglicht es, Elemente zu bestimmen, die Vorfahren eines Elements im Vollbildmodus sind.

#### Battery API

- Experimentelle Unterstützung für `navigator.mozBattery` wurde hinzugefügt (kann durch Setzen der Einstellung `dom.battery.enabled` auf `true` aktiviert werden und wird standardmäßig ab Firefox 11 aktiviert sein).

#### Canvas

- Die Methode [`createPattern()`](/de/docs/Web/API/CanvasRenderingContext2D/createPattern) wirft nun eine Ausnahme, wenn ein Null-Pixel-Quell-Canvas angegeben wird.
- Wenn Sie einen nicht-endlichen Wert für einen der numerischen Parameter von [`putImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/putImageData) verwenden, wird der Aufruf nun stillschweigend ignoriert, anstatt eine Ausnahme auszulösen, gemäß der Spezifikation.

#### WebGL

- Firefox 10 unterstützt nun die [`OES_standard_derivatives`](https://registry.khronos.org/webgl/extensions/OES_standard_derivatives/) Erweiterung.
- [Neue Einstellungen wurden hinzugefügt](/de/docs/Web/API/WebGL_API#webgl_debugging_and_testing), um das Testen von WebGL-Code auf Kompatibilität mit minimal ausgestatteten Geräten auf Ihrer vollen Entwicklungsplattform zu erleichtern.

#### Web Workers

- Das Attribut `XMLHttpRequest.responseType` und `XMLHttpRequest.response` sind nun innerhalb von [Workers](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers) verfügbar.
- Der [`Worker()`](/de/docs/Web/API/Worker/Worker) Konstruktor akzeptiert jetzt [Daten-URLs](/de/docs/Web/URI/Reference/Schemes/data).

#### IndexedDB

Es wurden große Fortschritte gemacht, um IndexedDB auf die neueste Entwurfsspezifikation zu aktualisieren. Diese Arbeit wird in Firefox 11 fortgesetzt.

- Die Methoden [`IDBIndex.count()`](/de/docs/Web/API/IDBIndex/count) und [`IDBObjectStore.count()`](/de/docs/Web/API/IDBObjectStore/count) wurden hinzugefügt.
- Die Methode [`IDBCursor.advance()`](/de/docs/Web/API/IDBCursor/advance) wurde hinzugefügt.
- Wenn optional unbekannte Parameter in [`IDBObjectStore.createIndex()`](/de/docs/Web/API/IDBObjectStore/createIndex) oder [`IDBDatabase.createObjectStore()`](/de/docs/Web/API/IDBDatabase/createObjectStore) auftritt, wird Gecko keine Ausnahme mehr auslösen, sondern diese ignorieren.
- Wenn [`IDBTransaction.abort()`](/de/docs/Web/API/IDBTransaction/abort) aufgerufen wird, haben alle ausstehenden [`IDBRequest`](/de/docs/Web/API/IDBRequest) ihren `errorCode` auf `ABORT_ERROR` gesetzt.
- Die Methoden [`IDBObjectStore.delete()`](/de/docs/Web/API/IDBObjectStore/delete) und [`IDBCursor.delete()`](/de/docs/Web/API/IDBCursor/delete) setzen nun das `result` Attribut der zurückgegebenen [`IDBRequest`](/de/docs/Web/API/IDBRequest) auf `undefined`.
- Die Methode `IDBDatabase.setVersion()` wurde entfernt, da sie aus der neuesten Spezifikation entfernt wurde. Die Version der Datenbank wird durch die Methode [`IDBFactory.open()`](/de/docs/Web/API/IDBFactory/open) angegeben, die aktualisiert wurde, und der `onupgradeneeded` Rückruf ermöglicht es, das Schema der Datenbank zu aktualisieren. Die Version selbst wurde von einem `DOMString` in ein `unsigned long long` geändert. Die `IDBVersionChangeRequest` Schnittstelle wurde entfernt und durch die neue [`IDBOpenDBRequest`](/de/docs/Web/API/IDBOpenDBRequest) Schnittstelle ersetzt.
- Wenn eine Datenbank mit [`IDBFactory.open()`](/de/docs/Web/API/IDBFactory/open) geöffnet wird und der `version` Parameter nicht bereitgestellt wird und die Datenbank nicht existiert, wird sie mit einer Version von `1` erstellt.
- Die Methode [`IDBFactory.deleteDatabase()`](/de/docs/Web/API/IDBFactory/deleteDatabase) wurde hinzugefügt.
- Methoden, die über einen [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange) suchen (wie [`IDBObjectStore.openCursor`](/de/docs/Web/API/IDBObjectStore/openCursor) und [`IDBIndex.getKey`](/de/docs/Web/API/IDBIndex/getKey)) können entweder einen einzelnen Schlüssel oder Schlüsselbereich akzeptieren.

#### Weitere Änderungen

- Wenn der korrekte MIME-Typ übergeben wird, `image/svg+xml`, erzeugt der `DOMParser` nun ein `SVGDocument`, wenn ihm ein String mit SVG übergeben wird.
- In der Vergangenheit würde [`element.setAttribute()`](/de/docs/Web/API/Element/setAttribute), wenn es Ganzzahlen analysierte, einen Fehler melden, wenn die Ganzzahl nicht-numerische Zeichen enthielt (zum Beispiel "42foo"). Jetzt kürzt es dies korrekt als die Zahl 42 gemäß der Spezifikation.
- Die ESC-Taste führt nicht mehr fälschlicherweise dazu, dass der [`onkeydown`](/de/docs/Web/API/Element/keydown_event) Handler fälschlicherweise aufgerufen wird.
- Die `NameList` Schnittstelle wird nicht mehr implementiert; sie hatte zuvor eine Implementierung ohne Möglichkeit, tatsächlich auf eine zuzugreifen.
- Die Methode [`document.createProcessingInstruction()`](/de/docs/Web/API/Document/createProcessingInstruction) funktioniert jetzt sowohl für HTML- als auch XML-Dokumente. [`ProcessingInstruction`](/de/docs/Web/API/ProcessingInstruction) Knoten werden weiterhin nur für XML-Dokumente unterstützt, aber da Knoten zwischen Dokumenten verschoben werden können, ist es hilfreich, sie auch in HTML-Dokumenten erstellen zu können.
- Der `XMLHttpRequest` Typ `"moz-json"` [eingeführt in Firefox 9](/de/docs/Mozilla/Firefox/Releases/9#dom) wurde auf den neuesten Entwurf der Spezifikation aktualisiert und das Präfix wurde entfernt. Sehen Sie Anmerkungen im [Firefox-Bug 707142](https://bugzil.la/707142#c13).

### CSS

- CSS 3D-Transformationen werden jetzt unterstützt. Dazu gehört die Unterstützung für die Eigenschaften {{ cssxref("transform-style") }}, {{ cssxref("perspective") }}, {{ cssxref("perspective-origin") }} und {{ cssxref("backface-visibility") }}, sowie für 3D-Transformationsfunktionen in den Eigenschaften {{ cssxref("transform") }} und {{ cssxref("transform-function") }}. Weitere Informationen finden Sie im [Verwenden von CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms#3d_specific_css_properties).
- Zwei neue Werte für die CSS-Eigenschaft {{ cssxref("unicode-bidi") }} wurden hinzugefügt: `-moz-isolation` und `-moz-plaintext`. Der `-moz-isolation` Wert isoliert das Element bezüglich der Richtung von seiner Umgebung, sodass es eine andere Richtung haben kann. Ein Element mit `unicode-bidi:-moz-isolation` verhält sich wie ein {{ HTMLElement("bdi") }} Element. Der `-moz-plaintext` weist den Browser an, die Unicode-Browser-Heuristik zu verwenden, um die Richtung zu bestimmen und nicht die CSS-Eigenschaft {{ cssxref("direction") }}.
- Die CSS-Eigenschaften {{ cssxref("gradient/linear-gradient") }} und {{ cssxref("gradient/repeating-linear-gradient") }} wurden aktualisiert, um die neue `to` Syntax und den _magic corner_ Algorithmus zu unterstützen. Dies ermöglicht es, eine präzise Farbe an einer Ecke eines mit einem Farbverlauf gefüllten Kastens anzugeben.
- Das Verhalten der CSS-Eigenschaft {{ cssxref("text-overflow") }} bei Fällen, in denen das Kästchen auf beiden Seiten überläuft, während die `text-overflow` Eigenschaft nur für eine Seite eingestellt ist, wurde korrigiert.
- Das Verhalten der CSS-Eigenschaft {{ cssxref("position") }} für Elemente innerhalb von positionierten {{ HTMLElement("table") }} Elementen wurde korrigiert. **Diese Änderung wird das Layout von Seiten beeinflussen; allerdings sind wir jetzt konform mit der CSS-Spezifikation und mit anderen Browsern, daher sollte dies leicht zu beheben sein.**
- Das Zusammenfallen der Ränder um {{ HTMLElement("table") }} Elemente wurde korrigiert, um der CSS-Spezifikation zu entsprechen. Zuvor würden die Ränder von Tabellenelementen nicht zusammenfallen mit denen anderer angrenzender Elemente, was zu falschen Layouts führte. **Diese Änderung wird das Layout von Seiten beeinflussen; allerdings sind wir jetzt konform mit der CSS-Spezifikation und mit anderen Browsern, daher sollte dies leicht zu beheben sein.**

### SVG

- Das {{ SVGElement("mask") }} Element wurde aktualisiert, um sowohl sRGB als auch linearRGB zu unterstützen und entspricht jetzt sRGB, gemäß der neuesten Revision der SVG 1.1 Spezifikation.

### Netzwerke

- Der HTTP-Header `Accept-Charset` wird in HTTP-Anfragen nicht mehr gesendet.
  In seiner Abwesenheit sollten Server mit UTF-8 antworten.

### Entwicklerwerkzeuge

- Das [`console`](/de/docs/Web/API/console) Objekt hat zwei neue Methoden, [`console.time()`](/de/docs/Web/API/console/time_static) und [`console.timeEnd()`](/de/docs/Web/API/console/timeEnd_static), die zum Setzen von Timern auf einer Seite verwendet werden können.
- Der neue [Seiteninspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) wurde hinzugefügt und bietet eine hervorragende Möglichkeit, den HTML- und CSS-Code hinter Ihren Inhalten zu untersuchen und zu manipulieren.

## Änderungen für Mozilla- und Add-on-Entwickler

Für einen Überblick über potenzielle Probleme, die beim Aktualisieren Ihrer Add-ons zur Unterstützung von Firefox 10 auftreten können, siehe [Aktualisieren von Add-ons für Firefox 10](/de/docs/Mozilla/Firefox/Releases/10/Updating_add-ons).

> [!NOTE]
> Der alte [`PRBool`](https://web.archive.org/web/20210224213411/https://developer.mozilla.org/de/docs/Mozilla/Projects/NSPR/Reference/PRBool) Datentyp wurde eingestellt! Überall in der Dokumentation, wo darauf verwiesen wird, wird jetzt der Standard-C++ `bool` Typ verwendet. Die Dokumentation wird in Zukunft aktualisiert, aber behalten Sie dies vorerst im Kopf.

### Manifeste

- Unterstützung für [`<em:strictCompatibility>`](https://web.archive.org/web/20210421140209/https://developer.mozilla.org/de/docs/Archive/Add-ons/Install_Manifests#strictcompatibility) wurde zum Installationsmanifest hinzugefügt. Es ermöglicht Add-on-Autoren, die Überprüfung der maximalen Version ihrer Erweiterung zu aktivieren. Wenn auf `true` gesetzt, wird das Add-on deaktiviert, wenn die Anwendungsversion größer als `<em:maxVersion>` ist. Firefox 10 nimmt standardmäßig an, dass Add-ons kompatibel sind, unabhängig von ihrer angegebenen maximalen Version. Dieses Flag überschreibt diese Voreinstellung. Sie sollten dies setzen, wenn Ihr Add-on Dinge tut, die wahrscheinlich durch Firefox-Updates beeinträchtigt werden, **aber nicht**, wenn Ihr Add-on eine binäre Komponente hat, da solche Add-ons immer streng geprüft werden (denken Sie daran, dass binäre Komponenten immer für jede größere Firefox-Version neu kompiliert werden müssen).
- Wenn Sie zum alten Verhalten zurückkehren möchten — das heißt, zur strikten Kompatibilitätsprüfung für alle Add-ons, unabhängig vom Wert des `strictCompatibility` Flags in ihren Manifesten, können Sie die Einstellung `extensions.strictCompatibility` auf `true` setzen.

### XUL

- Bootstrap-Add-ons, die eine `chrome.manifest` Datei verwenden, haben nun die Manifestdatei automatisch registriert. Siehe den Abschnitt [Hinzufügen einer Benutzeroberfläche mit einer chrome.manifest](https://web.archive.org/web/20210519000929/https://developer.mozilla.org/de/docs/Archive/Add-ons/Bootstrapped_extensions#Adding_user_interface_with_a_chrome.manifest) für Details.

### XPConnect

- Mehrere neue Eigenschaften und Methoden wurden `Components.utils` hinzugefügt, die Zugriff auf verschiedene debugging-relevante Informationen gewähren.

### Schnittstellenänderungen

- Die Schnittstellen `mozISpellCheckingEngine` und `nsIEditorSpellCheck` wurden aktualisiert, um neustartlose Add-ons zu ermöglichen, dem Rechtschreibprüfer Wörterbücher hinzuzufügen.
- Das Attribut `nsIBrowserHistory.lastPageVisited` wurde entfernt.
- Die Schnittstelle `nsIDocumentViewer` wurde in `nsIContentViewer` integriert.
- Die `nsIURIFixup` Schnittstelle hat ein neues Flag, `FIXUP_FLAG_USE_UTF8`, mit dem Ihnen mitgeteilt werden kann, dass UTF-8 anstelle des Plattform-Zeichensatzes bei Konvertierungen verwendet werden soll.

### Plugin-Änderungen

- Die neue Variable `NPNVdocumentOrigin` wurde hinzugefügt; diese gibt den Ursprung des Dokuments zurück und ist sicherer als [`window.location`](/de/docs/Web/API/Window/location).

### Änderungen am Build-System

- Die Build-Option `--disable-rdf`, die es tatsächlich unmöglich machte, erfolgreich zu bauen, wurde entfernt. Es wird daran gearbeitet, die RDF-Unterstützung vollständig zu entfernen, derzeit erfordert XUL sie jedoch noch. Siehe [Firefox-Bug 559505](https://bugzil.la/559505) für Fortschritte beim Entfernen der letzten Reste von RDF, die erforderlich sind.
- Die Build-Option `--disable-smil` wurde entfernt.
