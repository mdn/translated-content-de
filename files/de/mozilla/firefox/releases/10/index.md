---
title: Firefox-10-Release-Notes für Entwickler
short-title: Firefox 10
slug: Mozilla/Firefox/Releases/10
l10n:
  sourceCommit: a23122d0e86fb376234614beb5b350b217068054
---

Firefox 10 wurde am 31. Januar 2012 veröffentlicht. Dieser Artikel enthält Informationen über die neuen Funktionen und wichtigen Fehlerbehebungen in dieser Version sowie Links zu detaillierterer Dokumentation für Webentwickler und Add-on-Entwickler.

> [!NOTE]
> Firefox 10 ist die erste Veröffentlichung dieses Browsers mit zwei Ziffern. Dies kann bei einigen UA-Sniffing-Skripten zu Problemen führen. Prüfen Sie diese unbedingt, ebenso wie diejenigen in Drittanbieter-Software, die Sie in Ihre Seiten einbetten, etwa Bibliotheken. Weitere Informationen hierzu finden Sie im [Artikel Firefox goes 2-digit auf hack.mozilla.org](https://hacks.mozilla.org/2012/01/firefox-goes-2-digit-time-to-check-your-ua-sniffing-scripts/).

## Änderungen für Webentwickler

### HTML

- Das neue HTML5-Element {{ HTMLElement("bdi") }} für bidirektionale Isolation, das die Isolation von Textteilen mit einer anderen Schreibrichtung ermöglicht, wurde implementiert. Dies ist besonders nützlich, wenn beispielsweise Text mit unbekannter Schreibrichtung aus einer Datenbank innerhalb von Text mit einer bekannten und möglicherweise anderen Schreibrichtung angezeigt wird.
- Sie können jetzt für das Attribut [`href`](/de/docs/Web/HTML/Reference/Elements/a#href) ein Fragment von „top“ angeben, um einen Link zum Seitenanfang zu erstellen. Dies funktionierte früher, war dann eine Zeit lang nicht verfügbar und ist nun zur Kompatibilität mit der HTML5-Spezifikation wieder vorhanden. Beispiel: `<a href="#top">Return to top of page</a>`.

### JavaScript

- Die Methode `WeakMap.set()` gibt nun `undefined` statt sich selbst zurück.
- In Firefox 7 wurde ein Fehler bei der Verarbeitung regulärer Ausdrücke eingeführt; dieser wurde behoben. Die genauen Details finden Sie unter [Firefox bug 683838](https://bugzil.la/683838).
- Sie können die veraltete ECMAScript-for-XML-Syntax (E4X) nicht mehr im [ECMAScript-5-Strict-Mode](/de/docs/Web/JavaScript/Reference/Strict_mode) verwenden, also nach `"use strict;"`.

### DOM

#### DOM3 Events

- Die DOM-Event-Methode [`event.stopImmediatePropagation`](/de/docs/Web/API/Event/stopImmediatePropagation) wurde implementiert.
- Die Maus-Events `mouseenter` und `mouseleave` wurden implementiert.

#### DOM4

- Das Attribut [`document.xmlVersion`](/de/docs/Web/API/Document/xmlVersion) (das nur gelesen, aber nicht gesetzt werden konnte) wurde entfernt, da es in der DOM4-Spezifikation als veraltet eingestuft wurde. Der Artikel zu [`document.xmlVersion`](/de/docs/Web/API/Document/xmlVersion) schlägt nun eine Möglichkeit vor, festzustellen, ob das Dokument HTML oder XML ist, ohne diese Eigenschaft zu verwenden.
- Das Attribut `document.xmlStandalone` wurde entfernt, da es in der DOM4-Spezifikation als veraltet eingestuft wurde.
- Das Attribut [`document.xmlEncoding`](/de/docs/Web/API/Document/xmlEncoding) wurde entfernt, da es in der DOM4-Spezifikation als veraltet eingestuft wurde.
- Das Attribut `text.isElementContentWhiteSpace` wurde entfernt, da es in der DOM4-Spezifikation als veraltet eingestuft wurde.
- Die Methode `text.replaceWholeText` wurde entfernt, da sie in der DOM4-Spezifikation als veraltet eingestuft wurde.
- Die Methode [`node.isSameNode`](/de/docs/Web/API/Node/isSameNode) wurde entfernt, da sie in der DOM4-Spezifikation als veraltet eingestuft wurde. Statt `node1.isSameNode(node2)` können Sie den Operator `===` verwenden: `node1 === node2`.

#### Page Visibility API

- Die [Page Visibility API](/de/docs/Web/API/Page_Visibility_API) wurde implementiert (mit Präfix): `document.mozHidden`, `document.mozVisibilityState` sind verfügbar, und das Event `mozvisibilitychanged` wird ausgelöst, wenn sich der Status ändert.

#### Full Screen API

- Unterstützung für [`document.fullscreenEnabled`](/de/docs/Web/API/Document/fullscreenEnabled) wurde hinzugefügt.
- Die neue Eigenschaft `:-moz-full-screen-ancestor` wurde hinzugefügt. Damit können Sie Elemente abgleichen, die Vorgänger eines Elements im Vollbildmodus sind.

#### Battery API

- Experimentelle Unterstützung für `navigator.mozBattery` wurde hinzugefügt. Sie kann aktiviert werden, indem die Einstellung `dom.battery.enabled` auf `true` gesetzt wird, und wird ab Firefox 11 standardmäßig aktiviert sein.

#### Canvas

- Die Methode [`createPattern()`](/de/docs/Web/API/CanvasRenderingContext2D/createPattern) löst nun eine Ausnahme aus, wenn ein Quell-Canvas mit Größe null angegeben wird.
- Wenn Sie für einen der numerischen Parameter von [`putImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/putImageData) einen nicht endlichen Wert verwenden, wird der Aufruf nun stillschweigend ignoriert, statt eine Ausnahme auszulösen, entsprechend der Spezifikation.

#### WebGL

- Firefox 10 unterstützt nun die Erweiterung [`OES_standard_derivatives`](https://registry.khronos.org/webgl/extensions/OES_standard_derivatives/).
- [Neue Einstellungen wurden hinzugefügt](/de/docs/Web/API/WebGL_API#webgl_debugging_and_testing), um WebGL-Code auf Ihrer vollständigen Entwicklungsplattform hinsichtlich der Kompatibilität mit Geräten mit minimalen Fähigkeiten zu testen.

#### Web Workers

- Die Attribute `XMLHttpRequest.responseType` und `XMLHttpRequest.response` sind nun innerhalb von [Workers](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers) verfügbar.
- Der Konstruktor [`Worker()`](/de/docs/Web/API/Worker/Worker) akzeptiert nun [data URLs](/de/docs/Web/URI/Reference/Schemes/data).

#### IndexedDB

Es wurden große Fortschritte bei der Aktualisierung von IndexedDB auf die neueste Entwurfsspezifikation erzielt. Diese Arbeit wird in Firefox 11 fortgesetzt.

- Die Methoden [`IDBIndex.count()`](/de/docs/Web/API/IDBIndex/count) und [`IDBObjectStore.count()`](/de/docs/Web/API/IDBObjectStore/count) wurden hinzugefügt.
- Die Methode [`IDBCursor.advance()`](/de/docs/Web/API/IDBCursor/advance) wurde hinzugefügt.
- Wenn ein unbekannter optionaler Parameter in [`IDBObjectStore.createIndex()`](/de/docs/Web/API/IDBObjectStore/createIndex) oder [`IDBDatabase.createObjectStore()`](/de/docs/Web/API/IDBDatabase/createObjectStore) angetroffen wird, löst Gecko keine Ausnahme mehr aus, sondern ignoriert ihn.
- Wenn [`IDBTransaction.abort()`](/de/docs/Web/API/IDBTransaction/abort) aufgerufen wird, erhalten alle ausstehenden [`IDBRequest`](/de/docs/Web/API/IDBRequest) für ihren `errorCode` den Wert `ABORT_ERROR`.
- Die Methoden [`IDBObjectStore.delete()`](/de/docs/Web/API/IDBObjectStore/delete) und [`IDBCursor.delete()`](/de/docs/Web/API/IDBCursor/delete) setzen nun das Attribut `result` des zurückgegebenen [`IDBRequest`](/de/docs/Web/API/IDBRequest) auf `undefined`.
- Die Methode `IDBDatabase.setVersion()` wurde entfernt, da sie aus der neuesten Spezifikation entfernt wurde. Die Version der Datenbank wird über die aktualisierte Methode [`IDBFactory.open()`](/de/docs/Web/API/IDBFactory/open) angegeben, und der Callback `onupgradeneeded` ermöglicht die Aktualisierung des Datenbankschemas. Die Version selbst wurde von `DOMString` zu `unsigned long long` geändert. Das Interface `IDBVersionChangeRequest` wurde entfernt und durch das neue Interface [`IDBOpenDBRequest`](/de/docs/Web/API/IDBOpenDBRequest) ersetzt.
- Wenn eine Datenbank mit [`IDBFactory.open()`](/de/docs/Web/API/IDBFactory/open) geöffnet wird, der Parameter `version` nicht angegeben ist und die Datenbank nicht existiert, wird sie mit Version `1` erstellt.
- Die Methode [`IDBFactory.deleteDatabase()`](/de/docs/Web/API/IDBFactory/deleteDatabase) wurde hinzugefügt.
- Methoden, die über einen [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange) suchen, wie [`IDBObjectStore.openCursor`](/de/docs/Web/API/IDBObjectStore/openCursor) und [`IDBIndex.getKey`](/de/docs/Web/API/IDBIndex/getKey), können entweder einen einzelnen Schlüssel oder einen Schlüsselbereich akzeptieren.

#### Sonstiges

- Wenn der korrekte MIME-Typ `image/svg+xml` übergeben wird, erstellt `DOMParser` nun ein `SVGDocument`, wenn ihm ein String mit SVG übergeben wird.
- Wenn [`element.setAttribute()`](/de/docs/Web/API/Element/setAttribute) früher Ganzzahlen analysierte, wurde ein Fehler gemeldet, wenn die Ganzzahl nichtnumerische Zeichen enthielt, beispielsweise „42foo“. Nun wird dies entsprechend der Spezifikation korrekt auf die Zahl 42 gekürzt.
- Die ESC-Taste führt nicht mehr fälschlicherweise dazu, dass der Handler [`onkeydown`](/de/docs/Web/API/Element/keydown_event) aufgerufen wird.
- Das Interface `NameList` wird nicht mehr implementiert; zuvor gab es eine Implementierung ohne Möglichkeit, tatsächlich darauf zuzugreifen.
- Die Methode [`document.createProcessingInstruction()`](/de/docs/Web/API/Document/createProcessingInstruction) funktioniert nun sowohl für HTML- als auch für XML-Dokumente. Knoten vom Typ [`ProcessingInstruction`](/de/docs/Web/API/ProcessingInstruction) werden weiterhin nur in XML-Dokumenten unterstützt, aber da Knoten zwischen Dokumenten verschoben werden können, ist es hilfreich, sie auch in HTML-Dokumenten erstellen zu können.
- Der in [Firefox 9 eingeführte](/de/docs/Mozilla/Firefox/Releases/9#dom) [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-`responseType` `"moz-json"` wurde auf den neuesten Entwurf der Spezifikation aktualisiert und das Präfix wurde entfernt. Siehe den Hinweis in [Firefox bug 707142](https://bugzil.la/707142#c13).

### CSS

- CSS-3D-Transforms werden nun unterstützt. Dazu gehören die Eigenschaften {{ cssxref("transform-style") }}, {{ cssxref("perspective") }}, {{ cssxref("perspective-origin") }} und {{ cssxref("backface-visibility") }} sowie 3D-Transform-Funktionen in den Eigenschaften {{ cssxref("transform") }} und {{ cssxref("transform-function") }}. Details finden Sie unter [Using CSS transforms](/de/docs/Web/CSS/Guides/Transforms/Using#3d_specific_css_properties).
- Zwei neue Werte für die CSS-Eigenschaft {{ cssxref("unicode-bidi") }} wurden hinzugefügt: `-moz-isolation` und `-moz-plaintext`. Der Wert `-moz-isolation` isoliert das Element hinsichtlich der Schreibrichtung von seiner Umgebung, sodass es eine andere Schreibrichtung haben kann. Ein Element mit `unicode-bidi:-moz-isolation` verhält sich wie ein {{ HTMLElement("bdi") }}-Element. `-moz-plaintext` weist den Browser an, die Unicode-Browserheuristik zur Bestimmung der Schreibrichtung und nicht die CSS-Eigenschaft {{ cssxref("direction") }} zu verwenden.
- Die CSS-Eigenschaften {{ cssxref("gradient/linear-gradient") }} und {{ cssxref("gradient/repeating-linear-gradient") }} wurden aktualisiert, um die neue `to`-Syntax und den Algorithmus für _magic corner_ zu unterstützen. Damit können Sie an der Ecke eines mit einem Farbverlauf gefüllten Felds eine präzise Farbe angeben.
- Die Behandlung durch die Eigenschaft {{ cssxref("text-overflow") }} für Fälle, in denen das Feld auf beiden Seiten überläuft, während die Eigenschaft `text-overflow` auf Überlauf nur auf einer Seite gesetzt ist, wurde korrigiert.
- Die Behandlung der Eigenschaft {{ cssxref("position") }} für Elemente innerhalb positionierter {{ HTMLElement("table") }}-Elemente wurde korrigiert. **Diese Änderung wird das Layout von Seiten beeinflussen; wir entsprechen nun jedoch der CSS-Spezifikation und anderen Browsern, daher sollte dies einfach zu beheben sein.**
- Das Zusammenfallen von Außenabständen um {{ HTMLElement("table") }}-Elemente wurde an die CSS-Spezifikation angepasst. Zuvor wurden die Außenabstände von Tabellenelementen nicht zusammen mit anderen angrenzenden Elementen zusammengeführt, was zu einem falschen Layout führte. **Diese Änderung wird das Layout von Seiten beeinflussen; wir entsprechen nun jedoch der CSS-Spezifikation und anderen Browsern, daher sollte dies einfach zu beheben sein.**

### SVG

- Das Element {{ SVGElement("mask") }} wurde aktualisiert, um sowohl sRGB als auch linearRGB zu unterstützen, und verwendet nun standardmäßig sRGB, entsprechend der neuesten Überarbeitung der SVG-1.1-Spezifikation.

### Netzwerk

- Der HTTP-Header `Accept-Charset` wird nicht mehr in HTTP-Anfragen gesendet.
  In dessen Abwesenheit sollten Server UTF-8 senden.

### Entwicklerwerkzeuge

- Das Objekt [`console`](/de/docs/Web/API/console) verfügt über zwei neue Methoden, [`console.time()`](/de/docs/Web/API/console/time_static) und [`console.timeEnd()`](/de/docs/Web/API/console/timeEnd_static), mit denen auf einer Seite Timer gesetzt werden können.
- Der neue [Page Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) wurde hinzugefügt und bietet eine hervorragende Möglichkeit, das HTML und CSS hinter Ihren Inhalten zu untersuchen und zu bearbeiten.

## Änderungen für Mozilla- und Add-on-Entwickler

Eine Übersicht über mögliche Probleme bei der Aktualisierung Ihrer Add-ons für die Unterstützung von Firefox 10 finden Sie unter [Updating add-ons for Firefox 10](/de/docs/Mozilla/Firefox/Releases/10/Updating_add-ons).

> [!NOTE]
> Der alte Datentyp [`PRBool`](https://web.archive.org/web/20210224213411/https://developer.mozilla.org/de/docs/Mozilla/Projects/NSPR/Reference/PRBool) wurde eingestellt! Überall in der Dokumentation, wo darauf verwiesen wird, wird nun stattdessen der Standard-C++-Typ `bool` verwendet. Die Dokumentation wird künftig aktualisiert, aber behalten Sie dies vorerst im Hinterkopf.

### Manifeste

- Unterstützung für [`<em:strictCompatibility>`](https://web.archive.org/web/20210421140209/https://developer.mozilla.org/de/docs/Archive/Add-ons/Install_Manifests#strictcompatibility) wurde dem Installationsmanifest hinzugefügt. Damit können Add-on-Autoren die Prüfung der maximalen Version ihrer Erweiterung aktivieren. Wenn der Wert auf `true` gesetzt ist, wird das Add-on deaktiviert, wenn die Anwendungsversion größer als `<em:maxVersion>` ist. Firefox 10 geht standardmäßig davon aus, dass Add-ons kompatibel sind, unabhängig von ihrer angegebenen maximalen Version. Dieses Flag überschreibt diese Einstellung. Sie sollten dies festlegen, wenn Ihr Add-on Dinge ausführt, die wahrscheinlich durch Firefox-Updates nicht mehr funktionieren, **aber nicht**, wenn Ihr Add-on eine Binärkomponente hat, da solche Add-ons immer streng geprüft werden. Denken Sie daran, dass Binärkomponenten für jede Hauptversion von Firefox stets neu kompiliert werden müssen.
- Wenn Sie zum alten Verhalten zurückkehren möchten – also zur strengen Kompatibilitätsprüfung für alle Add-ons, unabhängig vom Wert des Flags `strictCompatibility` in ihren Manifesten –, können Sie die Einstellung `extensions.strictCompatibility` auf `true` setzen.

### XUL

- Bootstrapped Add-ons, die eine Datei `chrome.manifest` verwenden, erhalten die Manifestdatei nun automatisch registriert. Details finden Sie im Abschnitt [Adding user interface with a chrome.manifest](https://web.archive.org/web/20210519000929/https://developer.mozilla.org/de/docs/Archive/Add-ons/Bootstrapped_extensions#Adding_user_interface_with_a_chrome.manifest).

### XPConnect

- `Components.utils` wurden mehrere neue Eigenschaften und Methoden hinzugefügt, die Zugriff auf verschiedene Informationen zum Debugging ermöglichen.

### Änderungen an Interfaces

- Die Interfaces `mozISpellCheckingEngine` und `nsIEditorSpellCheck` wurden aktualisiert, damit Add-ons ohne Neustart dem Rechtschreibprüfer Wörterbücher hinzufügen können.
- Das Attribut `nsIBrowserHistory.lastPageVisited` wurde entfernt.
- Das Interface `nsIDocumentViewer` wurde in `nsIContentViewer` integriert.
- Das Interface `nsIURIFixup` verfügt über ein neues Flag, `FIXUP_FLAG_USE_UTF8`, mit dem Sie festlegen können, dass bei Konvertierungen UTF-8 statt des Zeichensatzes der Plattform verwendet wird.

### Änderungen an Plug-ins

- Die neue Variable `NPNVdocumentOrigin` wurde hinzugefügt; sie gibt den Dokumentursprung zurück und ist sicherer als [`window.location`](/de/docs/Web/API/Window/location).

### Änderungen am Build-System

- Die Build-Option `--disable-rdf`, die tatsächlich einen erfolgreichen Build unmöglich machte, wurde entfernt. Es wird weiterhin daran gearbeitet, RDF-Unterstützung vollständig entfernen zu können, aber derzeit benötigt XUL sie noch, um zu funktionieren. Den Fortschritt beim Entfernen der letzten erforderlichen RDF-Bestandteile finden Sie unter [Firefox bug 559505](https://bugzil.la/559505).
- Die Build-Option `--disable-smil` wurde entfernt.
