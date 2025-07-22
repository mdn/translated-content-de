---
title: Firefox 10 für Entwickler
short-title: Firefox 10
slug: Mozilla/Firefox/Releases/10
l10n:
  sourceCommit: 2591a9b59de88401a2ef0fb7d0b8d0281e3f5376
---

Firefox 10 wurde am 31. Januar 2012 veröffentlicht. Dieser Artikel bietet Informationen über die neuen Funktionen und wesentlichen Fehlerkorrekturen in dieser Version sowie Links zu detaillierter Dokumentation für sowohl Webentwickler als auch Add-on-Entwickler.

> [!NOTE]
> Firefox 10 ist die erste Version dieses Browsers mit zwei Ziffern. Dies kann zu Problemen mit einigen User-Agent-Erkennungsskripten führen. Stellen Sie sicher, dass Sie diese und die Skripte in eingebetteter Drittanbieter-Software, wie Bibliotheken, überprüfen. Weitere Informationen hierzu finden Sie im [Artikel auf hack.mozilla.org über zweistellige Firefox-Versionen](https://hacks.mozilla.org/2012/01/firefox-goes-2-digit-time-to-check-your-ua-sniffing-scripts/).

## Änderungen für Webentwickler

### HTML

- Das neue HTML5-Element {{ HTMLElement("bdi") }} zur bidirektionalen Isolierung, das die Isolierung von Textteilen mit unterschiedlicher Richtung ermöglicht, wurde implementiert. Dies ist besonders nützlich, wenn Texte mit unbekannter Richtung angezeigt werden sollen, die beispielsweise aus einer Datenbank stammen, inmitten von Text mit bekannter, möglicherweise unterschiedlicher Richtung.
- Sie können jetzt ein Fragment "top" für das [`href`](/de/docs/Web/HTML/Reference/Elements/a#href)-Attribut angeben, um einen Link zum Seitenanfang zu erstellen. Dies funktionierte früher, verschwand dann eine Zeitlang und ist jetzt zurück, um mit der HTML5-Spezifikation kompatibel zu sein. Zum Beispiel: `<a href="#top">Zurück zum Seitenanfang</a>`.

### JavaScript

- Die Methode `WeakMap.set()` gibt jetzt `undefined` zurück, anstatt sich selbst.
- Ein Fehler, der in Firefox 7 bei regulären Ausdrücken eingeführt wurde, wurde behoben. Siehe [Firefox Bug 683838](https://bugzil.la/683838), wenn Sie die Details wissen möchten.
- Sie können die veraltete ECMAScript für XML (E4X) Syntax nicht mehr im [ECMAScript 5 Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode) verwenden (also nach `"use strict;"`).

### DOM

#### DOM3 Events

- Die DOM-Event-Methode [`event.stopImmediatePropagation`](/de/docs/Web/API/Event/stopImmediatePropagation) wurde implementiert.
- Die Mausereignisse `mouseenter` und `mouseleave` wurden implementiert.

#### DOM4

- Das Attribut [`document.xmlVersion`](/de/docs/Web/API/Document/xmlVersion) (das nur lesbar und nicht setzbar war) wurde entfernt, da es in der DOM4-Spezifikation als veraltet markiert wurde. Der Artikel für [`document.xmlVersion`](/de/docs/Web/API/Document/xmlVersion) schlägt jetzt eine Möglichkeit vor, festzustellen, ob das Dokument HTML oder XML ist, ohne diese Eigenschaft zu verwenden.
- Das Attribut `document.xmlStandalone` wurde entfernt, da es in der DOM4-Spezifikation als veraltet markiert wurde.
- Das Attribut [`document.xmlEncoding`](/de/docs/Web/API/Document/xmlEncoding) wurde entfernt, da es in der DOM4-Spezifikation als veraltet markiert wurde.
- Das Attribut `text.isElementContentWhiteSpace` wurde entfernt, da es in der DOM4-Spezifikation als veraltet markiert wurde.
- Die Methode `text.replaceWholeText` wurde entfernt, da sie in der DOM4-Spezifikation als veraltet markiert wurde.
- Die Methode [`node.isSameNode`](/de/docs/Web/API/Node/isSameNode) wurde entfernt, da sie in der DOM4-Spezifikation als veraltet markiert wurde. Anstelle von `node1.isSameNode(node2)` können Sie den `===` Operator verwenden, so: `node1 === node2`.

#### Page Visibility API

- Die [Page Visibility API](/de/docs/Web/API/Page_Visibility_API) wurde implementiert (mit Präfix): `document.mozHidden`, `document.mozVisibilityState` sind verfügbar und das Ereignis `mozvisibilitychanged` wird gesendet, wenn der Status geändert wird.

#### Vollbild-API

- Unterstützung für [`document.fullscreenEnabled`](/de/docs/Web/API/Document/fullscreenEnabled) wurde hinzugefügt.
- Die neue Eigenschaft `:-moz-full-screen-ancestor` wurde hinzugefügt. Dies ermöglicht das Matchen von Elementen, die Vorfahren eines Elements im Vollbildmodus sind.

#### Batterie-API

- Experimentelle Unterstützung für `navigator.mozBattery` wurde hinzugefügt (kann durch Setzen der Präferenz `dom.battery.enabled` auf `true` aktiviert werden und wird ab Firefox 11 standardmäßig aktiviert sein).

#### Canvas

- Die Methode [`createPattern()`](/de/docs/Web/API/CanvasRenderingContext2D/createPattern) wirft jetzt eine Ausnahme, wenn eine Null-Große-Quelle-Canvas angegeben wird.
- Wenn Sie einen nicht-endlichen Wert für einen der numerischen Parameter von [`putImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/putImageData) verwenden, wird der Aufruf jetzt still ignoriert, anstatt eine Ausnahme zu werfen, im Einklang mit der Spezifikation.

#### WebGL

- Firefox 10 unterstützt jetzt die [`OES_standard_derivatives`](https://registry.khronos.org/webgl/extensions/OES_standard_derivatives/)-Erweiterung.
- [Neue Präferenzen wurden hinzugefügt](/de/docs/Web/API/WebGL_API#webgl_debugging_and_testing), um die Kompatibilität von WebGL-Code mit minimal ausgestatteten Geräten auf Ihrer vollständigen Entwicklungsplattform zu testen.

#### Web Worker

- Die Attribute `XMLHttpRequest.responseType` und `XMLHttpRequest.response` sind jetzt innerhalb von [Workern](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers) verfügbar.
- Der [`Worker()`](/de/docs/Web/API/Worker/Worker)-Konstruktor akzeptiert jetzt [data URLs](/de/docs/Web/URI/Reference/Schemes/data).

#### IndexedDB

Es wurden große Anstrengungen unternommen, um IndexedDB auf den neuesten Entwurf der Spezifikation zu aktualisieren. Diese Arbeit wird in Firefox 11 fortgesetzt.

- Die Methoden [`IDBIndex.count()`](/de/docs/Web/API/IDBIndex/count) und [`IDBObjectStore.count()`](/de/docs/Web/API/IDBObjectStore/count) wurden hinzugefügt.
- Die Methode [`IDBCursor.advance()`](/de/docs/Web/API/IDBCursor/advance) wurde hinzugefügt.
- Bei unbekannten optionalen Parametern in [`IDBObjectStore.createIndex()`](/de/docs/Web/API/IDBObjectStore/createIndex) oder [`IDBDatabase.createObjectStore()`](/de/docs/Web/API/IDBDatabase/createObjectStore) wirft Gecko keine Ausnahme mehr, sondern ignoriert sie.
- Wenn [`IDBTransaction.abort()`](/de/docs/Web/API/IDBTransaction/abort) aufgerufen wird, erhalten alle ausstehenden [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Anfragen ihren `errorCode` auf `ABORT_ERROR` gesetzt.
- Die Methoden [`IDBObjectStore.delete()`](/de/docs/Web/API/IDBObjectStore/delete) und [`IDBCursor.delete()`](/de/docs/Web/API/IDBCursor/delete) setzen jetzt das `result`-Attribut des zurückgegebenen [`IDBRequest`](/de/docs/Web/API/IDBRequest) auf `undefined`.
- Die Methode `IDBDatabase.setVersion()` wurde entfernt, da sie aus der neuesten Spezifikation entfernt wurde. Die Version der Datenbank wird durch die [`IDBFactory.open()`](/de/docs/Web/API/IDBFactory/open)-Methode angegeben, die aktualisiert wurde, und der `onupgradeneeded`-Callback ermöglicht es, das Schema der Datenbank zu aktualisieren. Die Version selbst wurde von einem `DOMString` in ein `unsigned long long` geändert. Die `IDBVersionChangeRequest`-Schnittstelle wurde entfernt und durch die neue [`IDBOpenDBRequest`](/de/docs/Web/API/IDBOpenDBRequest)-Schnittstelle ersetzt.
- Beim Öffnen einer Datenbank mit [`IDBFactory.open()`](/de/docs/Web/API/IDBFactory/open), wenn der `version`-Parameter nicht angegeben wird und die Datenbank nicht existiert, wird sie mit einer Version von `1` erstellt.
- Die Methode [`IDBFactory.deleteDatabase()`](/de/docs/Web/API/IDBFactory/deleteDatabase) wurde hinzugefügt.
- Methoden, die über einen [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange) suchen (wie [`IDBObjectStore.openCursor`](/de/docs/Web/API/IDBObjectStore/openCursor) und [`IDBIndex.getKey`](/de/docs/Web/API/IDBIndex/getKey)), können entweder einen einzelnen Schlüssel oder einen Schlüsselbereich akzeptieren.

#### Sonstiges

- Wenn der richtige MIME-Typ `image/svg+xml` übergeben wird, erstellt der `DOMParser` jetzt ein `SVGDocument`, wenn ihm ein String mit SVG übergeben wird.
- Früher, wenn [`element.setAttribute()`](/de/docs/Web/API/Element/setAttribute) Ganzzahlen analysierte, wurde ein Fehler gemeldet, wenn die Ganzzahl irgendwelche nicht-numerischen Zeichen enthielt (zum Beispiel "42foo"). Jetzt wird dies korrekt als die Zahl 42 abgeschnitten, entsprechend der Spezifikation.
- Die ESC-Taste führt nicht mehr fälschlicherweise dazu, dass der [`onkeydown`](/de/docs/Web/API/Element/keydown_event)-Handler fälschlicherweise aufgerufen wird.
- Die `NameList`-Schnittstelle wird nicht mehr implementiert; zuvor gab es eine Implementierung ohne eine Möglichkeit, tatsächlich darauf zuzugreifen.
- Die Methode [`document.createProcessingInstruction()`](/de/docs/Web/API/Document/createProcessingInstruction) funktioniert jetzt sowohl auf HTML- als auch auf XML-Dokumenten. [`ProcessingInstruction`](/de/docs/Web/API/ProcessingInstruction)-Knoten werden nach wie vor nur auf XML-Dokumenten unterstützt, aber da Knoten zwischen Dokumenten verschoben werden können, ist es hilfreich, sie auch auf HTML-Dokumenten erstellen zu können.
- Die [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) `responseType` `"moz-json"` [eingeführt in Firefox 9](/de/docs/Mozilla/Firefox/Releases/9#dom) wurde auf den neuesten Entwurf der Spezifikation aktualisiert und das Präfix wurde entfernt. Siehe Hinweis in [Firefox Bug 707142](https://bugzil.la/707142#c13).

### CSS

- CSS 3D-Transformationen werden jetzt unterstützt. Dies umfasst Unterstützung für die Eigenschaften {{ cssxref("transform-style") }}, {{ cssxref("perspective") }}, {{ cssxref("perspective-origin") }} und {{ cssxref("backface-visibility") }}, sowie für 3D-Transformationsfunktionen in den Eigenschaften {{ cssxref("transform") }} und {{ cssxref("transform-function") }}. Weitere Informationen finden Sie unter [CSS-Transformationen verwenden](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms#3d_specific_css_properties).
- Zwei neue Werte für die CSS-Eigenschaft {{ cssxref("unicode-bidi") }} wurden hinzugefügt: `-moz-isolation` und `-moz-plaintext`. Der Wert `-moz-isolation` isoliert das Element aus Richtungssicht von seiner Umgebung, sodass es eine andere Richtung haben kann. Ein Element mit `unicode-bidi:-moz-isolation` verhält sich wie ein {{ HTMLElement("bdi") }}-Element. Der Wert `-moz-plaintext` weist den Browser an, die Unicode-Browserheuristik zur Bestimmung der Richtung zu verwenden und nicht die CSS-Eigenschaft {{ cssxref("direction") }}.
- Die CSS-Eigenschaften {{ cssxref("gradient/linear-gradient") }} und {{ cssxref("gradient/repeating-linear-gradient") }} wurden aktualisiert, um die neue `to`-Syntax und den _magic-corner_-Algorithmus zu unterstützen. Dies ermöglicht es, eine präzise Farbe an der Ecke eines verlaufsgefüllten Kastens anzugeben.
- Das Verhalten der CSS-Eigenschaft {{ cssxref("text-overflow") }} in Fällen, in denen der Kasten auf beiden Seiten überläuft, während die `text-overflow`-Eigenschaft nur für eine Seite eingestellt ist, wurde korrigiert.
- Die Handhabung der CSS-Eigenschaft {{ cssxref("position") }} bei Elementen innerhalb von positionierten {{ HTMLElement("table") }}-Elementen wurde behoben. **Diese Änderung wird das Layout von Seiten beeinflussen; jedoch sind wir jetzt konform mit der CSS-Spezifikation und mit anderen Browsern, daher sollte dies einfach zu beheben sein.**
- Das Zusammenfallen von Rändern um {{ HTMLElement("table") }}-Elemente wurde korrigiert, um der CSS-Spezifikation zu entsprechen. Zuvor würden die Ränder von Tabellenelementen nicht mit anderen angrenzenden Elementen kollabieren, was zu einem fehlerhaften Layout führte. **Diese Änderung wird das Layout von Seiten beeinflussen; jedoch sind wir jetzt konform mit der CSS-Spezifikation und mit anderen Browsern, daher sollte dies einfach zu beheben sein.**

### SVG

- Das {{ SVGElement("mask") }}-Element wurde aktualisiert, um sowohl sRGB als auch linearRGB zu unterstützen und standardmäßig auf sRGB eingestellt zu sein, gemäß der neuesten Überarbeitung der SVG 1.1-Spezifikation.

### Netzwerk

- Der HTTP-Header `Accept-Charset` wird nicht mehr in HTTP-Anfragen gesendet. In seiner Abwesenheit sollten Server mit der Bereitstellung von UTF-8 antworten.

### Entwicklerwerkzeuge

- Das [`console`](/de/docs/Web/API/console)-Objekt hat zwei neue Methoden, [`console.time()`](/de/docs/Web/API/console/time_static) und [`console.timeEnd()`](/de/docs/Web/API/console/timeEnd_static), die verwendet werden können, um Timer auf einer Seite zu setzen.
- Der neue [Page Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) wurde hinzugefügt, der eine hervorragende Möglichkeit bietet, das HTML und CSS hinter Ihren Inhalten zu untersuchen und zu manipulieren.

## Änderungen für Mozilla- und Add-on-Entwickler

Für einen Überblick über mögliche Probleme, die bei der Aktualisierung Ihrer Add-ons zur Unterstützung von Firefox 10 auftreten können, lesen Sie [Aktualisierung von Add-ons für Firefox 10](/de/docs/Mozilla/Firefox/Releases/10/Updating_add-ons).

> [!NOTE]
> Der alte [`PRBool`](https://web.archive.org/web/20210224213411/https://developer.mozilla.org/de/docs/Mozilla/Projects/NSPR/Reference/PRBool) Datentyp wurde abgeschafft! Überall in der Dokumentation, wo darauf Bezug genommen wird, wird jetzt der Standard-C++-`bool`-Typ verwendet. Die Dokumentation wird in Zukunft aktualisiert, aber behalten Sie dies vorerst im Hinterkopf.

### Manifeste

- Unterstützung für [`<em:strictCompatibility>`](https://web.archive.org/web/20210421140209/https://developer.mozilla.org/de/docs/Archive/Add-ons/Install_Manifests#strictcompatibility) wurde dem Installationsmanifest hinzugefügt. Es erlaubt Add-on-Autoren, sich für die Überprüfung der maximalen Version ihrer Erweiterung zu entscheiden. Wenn auf `true` gesetzt, wird das Add-on deaktiviert, wenn die Anwenderversion größer ist als `<em:maxVersion>`. Firefox 10 geht standardmäßig davon aus, dass Add-ons kompatibel sind, unabhängig von ihrer angegebenen maximalen Version. Dieses Flag überschreibt diese Präferenz. Sie sollten dies einstellen, wenn Ihr Add-on Dinge tut, die wahrscheinlich durch Firefox-Updates gebrochen werden, **aber nicht**, wenn Ihr Add-on eine binäre Komponente hat, da solche Add-ons immer streng überprüft werden (denken Sie daran, dass binäre Komponenten immer für jedes große Firefox-Release neu kompiliert werden müssen).
- Wenn Sie zum alten Verhalten zurückkehren möchten – das heißt zur strikten Kompatibilitätsprüfung für alle Add-ons, unabhängig vom Wert des `strictCompatibility`-Flags in ihren Manifesten –, können Sie die `extensions.strictCompatibility`-Präferenz auf `true` setzen.

### XUL

- Bootstrapped-Add-ons, die eine `chrome.manifest`-Datei verwenden, haben jetzt die Manifestdatei automatisch registriert. Details finden Sie im Abschnitt [Hinzufügen einer Benutzeroberfläche mit einer chrome.manifest](https://web.archive.org/web/20210519000929/https://developer.mozilla.org/de/docs/Archive/Add-ons/Bootstrapped_extensions#Adding_user_interface_with_a_chrome.manifest).

### XPConnect

- Mehrere neue Eigenschaften und Methoden wurden zu `Components.utils` hinzugefügt, die den Zugriff auf verschiedene Debugging-bezogene Informationen gewähren.

### Schnittstellenänderungen

- Die Schnittstellen `mozISpellCheckingEngine` und `nsIEditorSpellCheck` wurden aktualisiert, um es Add-ons ohne Neustart zu ermöglichen, dem Rechtschreibprüfer Wörterbücher hinzuzufügen.
- Das Attribut `nsIBrowserHistory.lastPageVisited` wurde entfernt.
- Die Schnittstelle `nsIDocumentViewer` wurde in `nsIContentViewer` integriert.
- Die Schnittstelle `nsIURIFixup` hat eine neue Flagge, `FIXUP_FLAG_USE_UTF8`, die es Ihnen ermöglicht, ihr mitzuteilen, UTF-8 anstelle des Plattformzeichensatzes zu verwenden, wenn sie Umwandlungen durchführt.

### Plug-in-Änderungen

- Die neue Variable `NPNVdocumentOrigin` wurde hinzugefügt; sie gibt den Ursprung des Dokuments zurück und ist sicherer als [`window.location`](/de/docs/Web/API/Window/location).

### Build-System-Änderungen

- Die Build-Option `--disable-rdf`, die es tatsächlich unmöglich machte, erfolgreich zu bauen, wurde entfernt. Es wird daran gearbeitet, die RDF-Unterstützung komplett zu entfernen, aber derzeit benötigt XUL es noch, um zu funktionieren. Fortschritte beim Entfernen der letzten RDF-Reste finden Sie im [Firefox Bug 559505](https://bugzil.la/559505).
- Die Build-Option `--disable-smil` wurde entfernt.
