---
title: Firefox 10 für Entwickler
slug: Mozilla/Firefox/Releases/10
l10n:
  sourceCommit: 594ae0d4ffb6326a9529fe366d30ca633309ee30
---

Firefox 10 wurde am 31. Januar 2012 veröffentlicht. Dieser Artikel enthält Informationen über die neuen Funktionen und behobene Hauptfehler in dieser Version sowie Links zu ausführlicheren Dokumentationen für Webentwickler und Add-on-Entwickler.

> [!NOTE]
> Firefox 10 ist die erste Version dieses Browsers mit zwei Ziffern. Dies kann zu Problemen mit einigen UA-Sniffing-Skripten führen. Überprüfen Sie diese daher, ebenso wie die in eingebundener Drittanbieter-Software enthaltenen, wie Bibliotheken. Für weitere Informationen dazu, schauen Sie sich den Artikel [Firefox goes 2-digit article on hack.mozilla.org](https://hacks.mozilla.org/2012/01/firefox-goes-2-digit-time-to-check-your-ua-sniffing-scripts/) an.

## Änderungen für Webentwickler

### HTML

- Das neue HTML5-Element {{ HTMLElement("bdi") }}, bidirektionale Isolation, das die Isolation von Textteilen mit unterschiedlicher Richtung ermöglicht, wurde implementiert. Dies ist besonders nützlich, wenn man Text mit unbekannter Richtung anzeigt, der beispielsweise aus einer Datenbank stammt und inmitten von Text mit bekannter und möglicherweise unterschiedlicher Richtung erscheint.
- Sie können jetzt ein Fragment "top" für das [`href`](/de/docs/Web/HTML/Reference/Elements/a#href)-Attribut angeben, um einen Link an den oberen Rand der Seite zu erstellen. Dies funktionierte früher, wurde dann für eine Weile entfernt und ist jetzt zurück, um mit der HTML5-Spezifikation kompatibel zu sein. Zum Beispiel: `<a href="#top">Zurück zum Seitenanfang</a>`.

### JavaScript

- Die Methode `WeakMap.set()` gibt jetzt `undefined` zurück, anstatt sich selbst.
- Ein Fehler wurde in der Handhabung regulärer Ausdrücke in Firefox 7 eingeführt; dieser wurde behoben. Siehe [Firefox bug 683838](https://bugzil.la/683838) für die technischen Details.
- Sie können die veraltete ECMAScript for XML (E4X)-Syntax nicht mehr verwenden, während Sie sich im [ECMAScript 5-Strikmodus](/de/docs/Web/JavaScript/Reference/Strict_mode) befinden (also nach `"use strict;"`).

### DOM

#### DOM3 Events

- Die DOM-Event-Methode [`event.stopImmediatePropagation`](/de/docs/Web/API/Event/stopImmediatePropagation) wurde implementiert.
- Die Mausereignisse `mouseenter` und `mouseleave` wurden implementiert.

#### DOM4

- Das Attribut [`document.xmlVersion`](/de/docs/Web/API/Document/xmlVersion) (das nur abfragbar, aber nicht setzbar war) wurde entfernt, da es in der DOM4-Spezifikation als veraltet gilt. Der Artikel für [`document.xmlVersion`](/de/docs/Web/API/Document/xmlVersion) schlägt jetzt eine Methode vor, um zu erkennen, ob das Dokument HTML oder XML ist, ohne diese Eigenschaft zu verwenden.
- Das Attribut `document.xmlStandalone` wurde entfernt, da es in der DOM4-Spezifikation als veraltet gilt.
- Das Attribut [`document.xmlEncoding`](/de/docs/Web/API/Document/xmlEncoding) wurde entfernt, da es in der DOM4-Spezifikation als veraltet gilt.
- Das Attribut `text.isElementContentWhiteSpace` wurde entfernt, da es in der DOM4-Spezifikation als veraltet gilt.
- Die Methode `text.replaceWholeText` wurde entfernt, da es in der DOM4-Spezifikation als veraltet gilt.
- Die Methode [`node.isSameNode`](/de/docs/Web/API/Node/isSameNode) wurde entfernt, da es in der DOM4-Spezifikation als veraltet gilt. Statt `node1.isSameNode(node2)` können Sie den `===` Operator verwenden, so: `node1 === node2`.

#### Page Visibility API

- Die [Page Visibility API](/de/docs/Web/API/Page_Visibility_API) wurde implementiert (mit Präfix): `document.mozHidden`, `document.mozVisibilityState` sind verfügbar und das Ereignis `mozvisibilitychanged` wird gesendet, wenn sich der Status ändert.

#### Full Screen API

- Unterstützung für [`document.fullscreenEnabled`](/de/docs/Web/API/Document/fullscreenEnabled) wurde hinzugefügt.
- Die neue Eigenschaft `:-moz-full-screen-ancestor` wurde hinzugefügt. Diese ermöglicht es, Elemente anzusprechen, die Vorfahren eines Elements im Vollbildmodus sind.

#### Battery API

- Experimentelle Unterstützung für `navigator.mozBattery` wurde hinzugefügt (kann durch Setzen der Option `dom.battery.enabled` auf `true` aktiviert werden und wird standardmäßig ab Firefox 11 aktiviert).

#### Canvas

- Die Methode [`createPattern()`](/de/docs/Web/API/CanvasRenderingContext2D/createPattern) wirft jetzt eine Ausnahme, wenn eine Quelle mit der Größe Null angegeben wird.
- Wenn Sie einen nicht-endlichen Wert für einen der numerischen Parameter von [`putImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/putImageData) verwenden, wird der Aufruf nun stillschweigend ignoriert, anstatt eine Ausnahme zu werfen, um mit der Spezifikation übereinzustimmen.

#### WebGL

- Firefox 10 unterstützt jetzt die [`OES_standard_derivatives`](https://registry.khronos.org/webgl/extensions/OES_standard_derivatives/) Erweiterung.
- [Neue Voreinstellungen wurden hinzugefügt](/de/docs/Web/API/WebGL_API#webgl_debugging_and_testing), um die WebGL-Kompatibilität mit minimal leistungsfähigen Geräten auf Ihrer vollständigen Entwicklungsplattform zu testen.

#### Web Workers

- Das Attribut `XMLHttpRequest.responseType` und `XMLHttpRequest.response` sind nun innerhalb von [Arbeitern](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers) verfügbar.
- Der Konstruktor [`Worker()`](/de/docs/Web/API/Worker/Worker) akzeptiert jetzt [Daten-URLs](/de/docs/Web/URI/Reference/Schemes/data).

#### IndexedDB

Große Fortschritte wurden gemacht, um IndexedDB an die neueste Entwurfsspezifikation anzupassen. Diese Bemühungen werden in Firefox 11 fortgesetzt.

- Die Methoden [`IDBIndex.count()`](/de/docs/Web/API/IDBIndex/count) und [`IDBObjectStore.count()`](/de/docs/Web/API/IDBObjectStore/count) wurden hinzugefügt.
- Die Methode [`IDBCursor.advance()`](/de/docs/Web/API/IDBCursor/advance) wurde hinzugefügt.
- Beim Auftreten eines unbekannten optionalen Parameters in [`IDBObjectStore.createIndex()`](/de/docs/Web/API/IDBObjectStore/createIndex) oder [`IDBDatabase.createObjectStore()`](/de/docs/Web/API/IDBDatabase/createObjectStore) wird Gecko nicht mehr eine Ausnahme auslösen, sondern ihn ignorieren.
- Wenn [`IDBTransaction.abort()`](/de/docs/Web/API/IDBTransaction/abort) aufgerufen wird, haben alle ausstehenden [`IDBRequest`](/de/docs/Web/API/IDBRequest) den `errorCode` auf `ABORT_ERROR` gesetzt.
- Die Methoden [`IDBObjectStore.delete()`](/de/docs/Web/API/IDBObjectStore/delete) und [`IDBCursor.delete()`](/de/docs/Web/API/IDBCursor/delete) setzen jetzt das `result`-Attribut des zurückgegebenen [`IDBRequest`](/de/docs/Web/API/IDBRequest) auf `undefined`.
- Die Methode `IDBDatabase.setVersion()` wurde entfernt, da sie aus der neuesten Spezifikation entfernt wurde. Die Version der Datenbank wird über die Methode [`IDBFactory.open()`](/de/docs/Web/API/IDBFactory/open) angegeben, die aktualisiert wurde, und der `onupgradeneeded`-Callback ermöglicht es, das Schema der Datenbank zu aktualisieren. Die Version selbst wurde von einem `DOMString` in ein `unsigned long long` geändert. Die `IDBVersionChangeRequest`-Schnittstelle wurde entfernt und durch die neue [`IDBOpenDBRequest`](/de/docs/Web/API/IDBOpenDBRequest) Schnittstelle ersetzt.
- Beim Öffnen einer Datenbank mit [`IDBFactory.open()`](/de/docs/Web/API/IDBFactory/open), wenn der Parameter `version` nicht angegeben ist und die Datenbank nicht existiert, wird sie mit Version `1` erstellt.
- Die Methode [`IDBFactory.deleteDatabase()`](/de/docs/Web/API/IDBFactory/deleteDatabase) wurde hinzugefügt.
- Methoden, die mittels eines [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange) suchen (wie z.B. [`IDBObjectStore.openCursor`](/de/docs/Web/API/IDBObjectStore/openCursor) und [`IDBIndex.getKey`](/de/docs/Web/API/IDBIndex/getKey)), können entweder einen einzelnen Schlüssel oder einen Schlüsselbereich akzeptieren.

#### Andere

- Wenn der richtige MIME-Typ, `image/svg+xml`, übergeben wird, erstellt der `DOMParser` jetzt ein `SVGDocument`, wenn ihm eine Zeichenkette mit SVG übergeben wird.
- In der Vergangenheit meldete [`element.setAttribute()`](/de/docs/Web/API/Element/setAttribute) einen Fehler, wenn die geparsten Ganzzahlen nicht-numerische Zeichen enthielten (z.B. "42foo"). Jetzt beschneidet es dies korrekt als die Zahl 42, in Übereinstimmung mit der Spezifikation.
- Die ESC-Taste führt nicht mehr fälschlicherweise dazu, dass der [`onkeydown`](/de/docs/Web/API/Element/keydown_event) Handler fälschlicherweise aufgerufen wird.
- Die `NameList`-Schnittstelle wird nicht mehr implementiert; zuvor gab es eine Implementierung, auf die kein Zugriff möglich war.
- Die Methode [`document.createProcessingInstruction()`](/de/docs/Web/API/Document/createProcessingInstruction) funktioniert jetzt sowohl bei HTML-Dokumenten als auch bei XML-Dokumenten. [`ProcessingInstruction`](/de/docs/Web/API/ProcessingInstruction) Knoten werden weiterhin nur auf XML-Dokumenten unterstützt, aber da Knoten zwischen Dokumenten verschoben werden können, ist es hilfreich, sie auch auf HTML-Dokumenten erstellen zu können.
- Der `responseType` `"moz-json"` von [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest), [eingeführt in Firefox 9](/de/docs/Mozilla/Firefox/Releases/9#dom), wurde auf den neuesten Entwurf der Spezifikation aktualisiert und das Präfix wurde entfernt. Siehe Hinweis in [Firefox bug 707142](https://bugzil.la/707142#c13).

### CSS

- CSS 3D-Transformationen werden jetzt unterstützt. Dies beinhaltet Unterstützung für die Eigenschaften {{ cssxref("transform-style") }}, {{ cssxref("perspective") }}, {{ cssxref("perspective-origin") }} und {{ cssxref("backface-visibility") }}, sowie für 3D-Transformationsfunktionen in den Eigenschaften {{ cssxref("transform") }} und {{ cssxref("transform-function") }}. Siehe [Using CSS transforms](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms#3d_specific_css_properties) für Details.
- Zwei neue Werte für die CSS-Eigenschaft {{ cssxref("unicode-bidi") }} wurden hinzugefügt: `-moz-isolation` und `-moz-plaintext`. Der Wert `-moz-isolation` isoliert, aus Sicht der Richtung, das Element von seiner Umgebung und lässt es eine andere Richtung haben. Ein Element mit `unicode-bidi:-moz-isolation` verhält sich wie ein {{ HTMLElement("bdi") }} Element. Das `-moz-plaintext` weist den Browser an, die Unicode-Browser-Heuristik zur Bestimmung der Richtung zu verwenden und nicht die CSS-Eigenschaft {{ cssxref("direction") }}.
- Die CSS-Eigenschaften {{ cssxref("gradient/linear-gradient") }} und {{ cssxref("gradient/repeating-linear-gradient") }} wurden aktualisiert, um das neue `to`-Syntax und den _magic corner_ Algorithmus zu unterstützen. Dies erlaubt es, eine präzise Farbe an der Ecke eines gradientengefüllten Feldes anzugeben.
- Die Handhabung der Eigenschaft {{ cssxref("text-overflow") }} in Fällen, in denen das Feld auf beiden Seiten überläuft, während die Eigenschaft `text-overflow` nur auf einer Seite gesetzt ist, wurde korrigiert.
- Die Handhabung der Eigenschaft {{ cssxref("position") }} auf Elementen innerhalb positionierter {{ HTMLElement("table") }} Elemente wurde behoben. **Diese Änderung wird das Layout von Seiten beeinflussen; jedoch entsprechen wir jetzt der CSS-Spezifikation und anderen Browsern, sodass dies leicht zu beheben sein sollte.**
- Die Margenvereinigung um {{ HTMLElement("table") }} Elemente wurde behoben, um der CSS-Spezifikation zu entsprechen. Zuvor wurden die Margen von Tabellenelementen nicht zusammen mit anderen angrenzenden Elementen vereinigt, was zu fehlerhaftem Layout führte. **Diese Änderung wird das Layout von Seiten beeinflussen; jedoch entsprechen wir jetzt der CSS-Spezifikation und anderen Browsern, sodass dies leicht zu beheben sein sollte.**

### SVG

- Das {{ SVGElement("mask") }} Element wurde aktualisiert, um sowohl sRGB als auch linearRGB zu unterstützen und verwendet jetzt standardmäßig sRGB, in Übereinstimmung mit der neuesten Revision der SVG 1.1 Spezifikation.

### Netzwerk

- Der HTTP `Accept-Charset` Header wird in HTTP-Anfragen nicht mehr gesendet. In seiner Abwesenheit sollten Server mit UTF-8 antworten.

### Entwicklerwerkzeuge

- Das [`console`](/de/docs/Web/API/console) Objekt hat zwei neue Methoden, [`console.time()`](/de/docs/Web/API/console/time_static) und [`console.timeEnd()`](/de/docs/Web/API/console/timeEnd_static), die verwendet werden können, um Timer auf einer Seite einzurichten.
- Der neue [Page Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) wurde hinzugefügt und bietet eine hervorragende Möglichkeit, den HTML- und CSS-Code hinter Ihren Inhalten zu untersuchen und zu manipulieren.

## Änderungen für Mozilla- und Add-on-Entwickler

Für einen Überblick über mögliche Probleme, die beim Aktualisieren Ihrer Add-ons zur Unterstützung von Firefox 10 auftreten können, siehe [Updating add-ons for Firefox 10](/de/docs/Mozilla/Firefox/Releases/10/Updating_add-ons).

> [!NOTE]
> Der alte [`PRBool`](/de/docs/PRBool) Datentyp wurde eingestellt! Überall in der Dokumentation, wo er erwähnt wird, wird jetzt der standardmäßige C++ `bool` Typ verwendet. Die Dokumentation wird in Zukunft aktualisiert, aber denken Sie vorerst daran.

### Manifeste

- Unterstützung für [`<em:strictCompatibility>`](/de/docs/Install_Manifests#strictcompatibility) wurde zum Installationsmanifest hinzugefügt. Damit können Add-on-Autoren sich dafür entscheiden, die maximale Version ihrer Erweiterung zu überprüfen. Wenn auf `true` gesetzt, wird das Add-on deaktiviert, wenn die Anwendungsversion größer als `<em:maxVersion>` ist. Firefox 10 geht standardmäßig davon aus, dass Add-ons unabhängig von ihrer angegebenen maximalen Version kompatibel sind. Dieses Flag überschreibt diese Präferenz. Sie sollten dies setzen, wenn Ihr Add-on Dinge tut, die wahrscheinlich durch Firefox-Updates gebrochen werden, **aber nicht**, wenn Ihr Add-on eine binäre Komponente hat, da solche Add-ons immer streng überprüft werden (denken Sie daran, dass binäre Komponenten immer für jede große Firefox-Veröffentlichung neu kompiliert werden müssen).
- Wenn Sie zum alten Verhalten zurückkehren möchten — das heißt, zur strikten Kompatibilitätsprüfung für alle Add-ons, unabhängig vom Wert des `strictCompatibility`-Flags in ihren Manifesten, können Sie die Voreinstellung `extensions.strictCompatibility` auf `true` setzen.

### XUL

- Bootstrap-Add-ons, die eine `chrome.manifest` Datei verwenden, haben jetzt die Manifestdatei automatisch registriert. Details finden Sie im Abschnitt [Adding user interface with a chrome.manifest](/de/docs/Extensions/Bootstrapped_extensions#Adding_user_interface_with_a_chrome.manifest).

### XPConnect

- Mehrere neue Eigenschaften und Methoden wurden zu `Components.utils` hinzugefügt, um Zugang zu verschiedenen debugging-bezogenen Informationen zu gewähren.

### Schnittstellenänderungen

- Die Schnittstellen `mozISpellCheckingEngine` und `nsIEditorSpellCheck` wurden aktualisiert, um es Add-ons ohne Neustart zu ermöglichen, Wörterbücher zum Rechtschreibprüfer hinzuzufügen.
- Das Attribut `nsIBrowserHistory.lastPageVisited` wurde entfernt.
- Die Schnittstelle `nsIDocumentViewer` wurde in `nsIContentViewer` integriert.
- Die Schnittstelle `nsIURIFixup` hat ein neues Flag, `FIXUP_FLAG_USE_UTF8`, mit dem Sie ihm mitteilen können, UTF-8 anstelle des Plattformzeichensatzes zu verwenden, wenn Konvertierungen durchgeführt werden.

### Plug-in-Änderungen

- Die neue Variable `NPNVdocumentOrigin` wurde hinzugefügt; diese gibt den Ursprung des Dokuments zurück und ist sicherer als [`window.location`](/de/docs/Web/API/Window/location).

### Änderungen am Build-System

- Die `--disable-rdf` Build-Option, die tatsächlich den erfolgreichen Build unmöglich machte, wurde entfernt. Es wird daran gearbeitet, die RDF-Unterstützung vollständig zu entfernen, aber derzeit benötigt XUL diese noch, um zu funktionieren. Siehe [Firefox bug 559505](https://bugzil.la/559505) für Fortschritte beim Entfernen der letzten Reste, die RDF erforderlich machen.
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
