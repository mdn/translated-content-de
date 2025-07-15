---
title: Firefox 10 für Entwickler
short-title: Firefox 10
slug: Mozilla/Firefox/Releases/10
l10n:
  sourceCommit: 64df508685abcbc047f6c1a973505921fad1484e
---

Firefox 10 wurde am 31. Januar 2012 veröffentlicht. Dieser Artikel bietet Informationen zu den neuen Funktionen und den wichtigsten behobenen Fehlern in dieser Version sowie Links zu ausführlicheren Dokumentationen für Webentwickler und Add-on-Entwickler.

> [!NOTE]
> Firefox 10 ist die erste Version dieses Browsers mit zweistelligem Versionsnummernsystem. Dies kann zu Problemen mit einigen UA-Erkennungsskripten führen. Überprüfen Sie diese Skripte sowie die in eingebetteter Drittanbieter-Software enthaltenen, wie Bibliotheken. Weitere Informationen finden Sie im [Artikel "Firefox goes 2-digit" auf hack.mozilla.org](https://hacks.mozilla.org/2012/01/firefox-goes-2-digit-time-to-check-your-ua-sniffing-scripts/).

## Änderungen für Webentwickler

### HTML

- Das neue HTML5-Element {{ HTMLElement("bdi") }}, bidirektionale Isolierung, das die Isolierung von Textteilen mit unterschiedlicher Richtung ermöglicht, ist implementiert. Dies ist besonders nützlich beim Anzeigen von Text mit unbekannter Richtung, der beispielsweise aus einer Datenbank stammt, inmitten von Text mit bekannter, potenziell anderer Richtung.
- Ab sofort können Sie ein Fragment von "top" für das [`href`](/de/docs/Web/HTML/Reference/Elements/a#href)-Attribut angeben, um einen Link zum oberen Rand der Seite zu erstellen. Diese Funktionalität war verfügbar, verschwand einige Zeit und ist jetzt wieder vorhanden, um mit der HTML5-Spezifikation kompatibel zu sein. Zum Beispiel: `<a href="#top">Zurück zum Seitenanfang</a>`.

### JavaScript

- Die Methode `WeakMap.set()` gibt jetzt `undefined` zurück, anstatt sich selbst.
- Ein Fehler wurde in der Regulärausdrucksbehandlung in Firefox 7 eingeführt; dieser wurde behoben. Siehe [Firefox-Fehler 683838](https://bugzil.la/683838) für detaillierte Informationen.
- Sie können die veraltete ECMAScript für XML (E4X)-Syntax nicht mehr im [ECMAScript 5 strikt-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) verwenden (das heißt nach `"use strict;"`).

### DOM

#### DOM3 Events

- Die DOM-Eventmethode [`event.stopImmediatePropagation`](/de/docs/Web/API/Event/stopImmediatePropagation) wurde implementiert.
- Die Mausereignisse `mouseenter` und `mouseleave` wurden implementiert.

#### DOM4

- Das Attribut [`document.xmlVersion`](/de/docs/Web/API/Document/xmlVersion) (welches nur lesbar und nicht schreibbar war) wurde entfernt, da es in der DOM4-Spezifikation veraltet ist. Der Artikel für [`document.xmlVersion`](/de/docs/Web/API/Document/xmlVersion) schlägt nun eine Möglichkeit vor, festzustellen, ob das Dokument HTML oder XML ist, ohne diese Eigenschaft zu verwenden.
- Das Attribut `document.xmlStandalone` wurde entfernt, da es in der DOM4-Spezifikation veraltet ist.
- Das Attribut [`document.xmlEncoding`](/de/docs/Web/API/Document/xmlEncoding) wurde entfernt, da es in der DOM4-Spezifikation veraltet ist.
- Das Attribut `text.isElementContentWhiteSpace` wurde entfernt, da es in der DOM4-Spezifikation veraltet ist.
- Die Methode `text.replaceWholeText` wurde entfernt, da sie in der DOM4-Spezifikation veraltet ist.
- Die Methode [`node.isSameNode`](/de/docs/Web/API/Node/isSameNode) wurde entfernt, da sie in der DOM4-Spezifikation veraltet ist. Statt `node1.isSameNode(node2)` können Sie den Operator `===` verwenden, wie folgt: `node1 === node2`.

#### Page Visibility API

- Die [Page Visibility API](/de/docs/Web/API/Page_Visibility_API) wurde implementiert (mit Präfix): `document.mozHidden`, `document.mozVisibilityState` sind verfügbar und das Ereignis `mozvisibilitychanged` wird gesendet, wenn sich der Status ändert.

#### Vollbild-API

- Unterstützung für [`document.fullscreenEnabled`](/de/docs/Web/API/Document/fullscreenEnabled) wurde hinzugefügt.
- Die neue Eigenschaft `:-moz-full-screen-ancestor` wurde hinzugefügt. Diese erlaubt es Ihnen, Elemente zu identifizieren, die Vorfahren eines Elements im Vollbildmodus sind.

#### Batterie-API

- Experimentelle Unterstützung für `navigator.mozBattery` wurde hinzugefügt (kann durch Setzen der Einstellung `dom.battery.enabled` auf `true` aktiviert werden und wird standardmäßig ab Firefox 11 aktiviert sein).

#### Canvas

- Die Methode [`createPattern()`](/de/docs/Web/API/CanvasRenderingContext2D/createPattern) wirft jetzt eine Ausnahme, wenn eine Quelle mit null Größe angegeben wird.
- Wenn bei einem Aufruf von [`putImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/putImageData) ein nicht-finitiver Wert für einen der numerischen Parameter verwendet wird, wird der Aufruf jetzt stillschweigend ignoriert, anstatt eine Ausnahme zu werfen, in Übereinstimmung mit der Spezifikation.

#### WebGL

- Firefox 10 unterstützt jetzt die Erweiterung [`OES_standard_derivatives`](https://registry.khronos.org/webgl/extensions/OES_standard_derivatives/).
- [Neue Einstellungen wurden hinzugefügt](/de/docs/Web/API/WebGL_API#webgl_debugging_and_testing), um WebGL-Code auf Kompatibilität mit minimal-fähigen Geräten auf Ihrer gesamten Entwicklungsplattform zu testen.

#### Web Workers

- Die Attribute `XMLHttpRequest.responseType` und `XMLHttpRequest.response` sind jetzt innerhalb von [Workers](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers) verfügbar.
- Der [`Worker()`](/de/docs/Web/API/Worker/Worker)-Konstruktor akzeptiert nun [data URLs](/de/docs/Web/URI/Reference/Schemes/data).

#### IndexedDB

Es wurden erhebliche Fortschritte erzielt, um IndexedDB an die neueste Entwurfsspezifikation anzupassen. Diese Bemühungen werden in Firefox 11 fortgesetzt.

- Die Methoden [`IDBIndex.count()`](/de/docs/Web/API/IDBIndex/count) und [`IDBObjectStore.count()`](/de/docs/Web/API/IDBObjectStore/count) wurden hinzugefügt.
- Die Methode [`IDBCursor.advance()`](/de/docs/Web/API/IDBCursor/advance) wurde hinzugefügt.
- Wenn ein unbekannter optionaler Parameter in [`IDBObjectStore.createIndex()`](/de/docs/Web/API/IDBObjectStore/createIndex) oder [`IDBDatabase.createObjectStore()`](/de/docs/Web/API/IDBDatabase/createObjectStore) auftritt, wird Gecko keine Ausnahme mehr auslösen, sondern ihn ignorieren.
- Wenn [`IDBTransaction.abort()`](/de/docs/Web/API/IDBTransaction/abort) aufgerufen wird, haben alle ausstehenden [`IDBRequest`](/de/docs/Web/API/IDBRequest) den `errorCode` auf `ABORT_ERROR` gesetzt.
- Die Methoden [`IDBObjectStore.delete()`](/de/docs/Web/API/IDBObjectStore/delete) und [`IDBCursor.delete()`](/de/docs/Web/API/IDBCursor/delete) setzen jetzt das `result`-Attribut der zurückgegebenen [`IDBRequest`](/de/docs/Web/API/IDBRequest) auf `undefined`.
- Die Methode `IDBDatabase.setVersion()` wurde entfernt, da sie aus der neuesten Spezifikation entfernt wurde. Die Version der Datenbank wird über die Methode [`IDBFactory.open()`](/de/docs/Web/API/IDBFactory/open) festgelegt, die aktualisiert wurde, und der `onupgradeneeded`-Callback ermöglicht das Upgrade des Datenbankschemas. Die Version selbst wurde von einer `DOMString` zu einer `unsigned long long` geändert. Die `IDBVersionChangeRequest`-Schnittstelle wurde entfernt und durch die neue [`IDBOpenDBRequest`](/de/docs/Web/API/IDBOpenDBRequest)-Schnittstelle ersetzt.
- Beim Öffnen einer Datenbank mit [`IDBFactory.open()`](/de/docs/Web/API/IDBFactory/open), wenn der `version`-Parameter nicht angegeben ist und die Datenbank nicht existiert, wird sie mit einer Version von `1` erstellt.
- Die Methode [`IDBFactory.deleteDatabase()`](/de/docs/Web/API/IDBFactory/deleteDatabase) wurde hinzugefügt.
- Methoden, die über eine [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange) suchen (wie [`IDBObjectStore.openCursor`](/de/docs/Web/API/IDBObjectStore/openCursor) und [`IDBIndex.getKey`](/de/docs/Web/API/IDBIndex/getKey)), können entweder einen einzelnen Schlüssel oder einen Schlüsselsbereich akzeptieren.

#### Sonstiges

- Wenn der richtige MIME-Typ, `image/svg+xml`, übergeben wird, erzeugt der `DOMParser` jetzt ein `SVGDocument`, wenn eine Zeichenkette mit SVG übergeben wird.
- In der Vergangenheit meldete [`element.setAttribute()`](/de/docs/Web/API/Element/setAttribute) einen Fehler, wenn die Ganzzahl nicht-numerische Zeichen enthielt (zum Beispiel "42foo"). Jetzt wird dies korrekt als die Zahl 42 abgeschnitten, gemäß der Spezifikation.
- Die ESC-Taste führt nicht mehr fälschlicherweise dazu, dass der [`onkeydown`](/de/docs/Web/API/Element/keydown_event)-Handler fälschlicherweise aufgerufen wird.
- Die `NameList`-Schnittstelle wird nicht mehr implementiert; sie hatte zuvor eine Implementierung ohne Möglichkeit, tatsächlich auf eine zuzugreifen.
- Die Methode [`document.createProcessingInstruction()`](/de/docs/Web/API/Document/createProcessingInstruction) funktioniert jetzt sowohl mit HTML-Dokumenten als auch mit XML-Dokumenten. [`ProcessingInstruction`](/de/docs/Web/API/ProcessingInstruction)-Knoten werden weiterhin nur auf XML-Dokumenten unterstützt, aber da Knoten zwischen Dokumenten verschoben werden können, ist es hilfreich, sie auch auf HTML-Dokumenten erstellen zu können.
- Die [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) `responseType` `"moz-json"` [eingeführt in Firefox 9](/de/docs/Mozilla/Firefox/Releases/9#dom) wurde auf den neuesten Stand der Spezifikation aktualisiert und ist nicht mehr mit Präfix versehen. Siehe Hinweis in [Firefox Fehler 707142](https://bugzil.la/707142#c13).

### CSS

- CSS-3D-Transformationen werden jetzt unterstützt. Dies beinhaltet die Unterstützung für die Eigenschaften {{ cssxref("transform-style") }}, {{ cssxref("perspective") }}, {{ cssxref("perspective-origin") }} und {{ cssxref("backface-visibility") }}, sowie für 3D-Transformationsfunktionen in den Eigenschaften {{ cssxref("transform") }} und {{ cssxref("transform-function") }}. Weitere Details finden Sie unter [Verwendung von CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms#3d_specific_css_properties).
- Zwei neue Werte für die CSS-Eigenschaft {{ cssxref("unicode-bidi") }} wurden hinzugefügt: `-moz-isolation` und `-moz-plaintext`. Der Wert `-moz-isolation` isoliert das Element aus Sicht der Richtung von seiner Umgebung, sodass es eine andere Richtung haben kann. Ein Element mit `unicode-bidi:-moz-isolation` verhält sich wie ein {{ HTMLElement("bdi") }}-Element. Das `-moz-plaintext` zeigt dem Browser an, die Unicode-Browser-Heuristik zu verwenden, um die Richtung zu bestimmen, und nicht die CSS-{{ cssxref("direction") }}-Eigenschaft.
- Die CSS-Eigenschaften {{ cssxref("gradient/linear-gradient") }} und {{ cssxref("gradient/repeating-linear-gradient") }} wurden aktualisiert, um die neue `to`-Syntax und den _magic corner_-Algorithmus zu unterstützen. Dies erlaubt es, eine genaue Farbe auf der Ecke eines gradient-gefüllten Kastens anzugeben.
- Der Umgang mit der Eigenschaft {{ cssxref("text-overflow") }} in Fällen, in denen das Kästchen auf beiden Seiten überläuft, während die `text-overflow`-Eigenschaft nur auf einer Seite überlaufen soll, wurde korrigiert.
- Die Behandlung der Eigenschaft {{ cssxref("position") }} von Elementen innerhalb von positionierten {{ HTMLElement("table") }}-Elementen wurde behoben. **Diese Änderung wird das Layout von Seiten beeinflussen; aber wir halten uns jetzt an die CSS-Spezifikation und an andere Browser, sodass dies leicht zu beheben sein sollte.**
- Das Margin-Collapsing um {{ HTMLElement("table") }}-Elemente wurde korrigiert, um der CSS-Spezifikation zu entsprechen. Zuvor wurden die Ränder von Table-Elementen nicht zusammen mit anderen benachbarten Elementen zusammengefasst, was zu falschem Layout führte. **Diese Änderung wird das Layout von Seiten beeinflussen; aber wir halten uns jetzt an die CSS-Spezifikation und an andere Browser, sodass dies leicht zu beheben sein sollte.**

### SVG

- Das {{ SVGElement("mask") }}-Element wurde aktualisiert, um sowohl sRGB als auch linearRGB zu unterstützen, und wird nun standardmäßig auf sRGB gesetzt, in Übereinstimmung mit der neuesten Revision der SVG 1.1-Spezifikation.

### Netzwerktechnik

- Der HTTP-Header `Accept-Charset` wird in HTTP-Anfragen nicht mehr gesendet. In seiner Abwesenheit sollten Server mit UTF-8 antworten.

### Entwickler-Tools

- Das [`console`](/de/docs/Web/API/console)-Objekt hat zwei neue Methoden, [`console.time()`](/de/docs/Web/API/console/time_static) und [`console.timeEnd()`](/de/docs/Web/API/console/timeEnd_static), die verwendet werden können, um Timer auf einer Seite zu setzen.
- Der neue [Page Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) wurde hinzugefügt und bietet eine hervorragende Möglichkeit, HTML und CSS hinter Ihrem Inhalt zu untersuchen und zu manipulieren.

## Änderungen für Mozilla- und Add-on-Entwickler

Für einen Überblick über mögliche Probleme, die beim Aktualisieren Ihrer Add-ons zur Unterstützung von Firefox 10 auftreten können, siehe [Aktualisierung von Add-ons für Firefox 10](/de/docs/Mozilla/Firefox/Releases/10/Updating_add-ons).

> [!NOTE]
> Der alte [`PRBool`](/de/docs/PRBool) Datentyp wurde eingestellt! Überall in der Dokumentation, wo darauf verwiesen wird, wird stattdessen der Standard-C++ `bool` Typ verwendet. Die Dokumentation wird in Zukunft aktualisiert, aber für jetzt, behalten Sie dies im Hinterkopf.

### Manifeste

- Unterstützung für [`<em:strictCompatibility>`](/de/docs/Install_Manifests#strictcompatibility) wurde dem Installationsmanifest hinzugefügt. Es erlaubt Add-on-Autoren, sich für die Überprüfung der maximalen Version ihrer Erweiterung zu entscheiden. Wenn auf `true` gesetzt, wird das Add-on deaktiviert, wenn die Anwendungsversion größer als `<em:maxVersion>` ist. Firefox 10 nimmt standardmäßig an, dass Add-ons kompatibel sind, unabhängig von ihrer angegebenen maximalen Version. Diese Kennzeichnung überschreibt diese Einstellung. Sie sollten dies setzen, wenn Ihr Add-on Dinge tut, die wahrscheinlich durch Firefox-Updates kaputt gehen, **aber nicht**, wenn Ihr Add-on eine binäre Komponente hat, da solche Add-ons immer streng geprüft werden (denken Sie daran, dass binäre Komponenten immer für jede große Firefox-Veröffentlichung neu kompiliert werden müssen).
- Wenn Sie zum alten Verhalten zurückkehren möchten — das heißt, zur strengen Kompatibilitätsprüfung für alle Add-ons, unabhängig vom Wert der `strictCompatibility`-Kennzeichnung in ihren Manifesten, können Sie die `extensions.strictCompatibility`-Einstellung auf `true` setzen.

### XUL

- Durch Bootstrapping aufgerufene Add-ons, die eine `chrome.manifest`-Datei verwenden, haben die Manifestdatei jetzt automatisch registriert. Siehe den Abschnitt [Hinzufügen einer Benutzeroberfläche mit einer chrome.manifest](/de/docs/Extensions/Bootstrapped_extensions#Adding_user_interface_with_a_chrome.manifest) für Details.

### XPConnect

- Mehrere neue Eigenschaften und Methoden wurden zu `Components.utils` hinzugefügt, und gewähren Zugriff auf verschiedene debuggingbezogene Informationen.

### Schnittstellenänderungen

- Die Schnittstellen `mozISpellCheckingEngine` und `nsIEditorSpellCheck` wurden aktualisiert, um erweiterten Add-ons zu erlauben, dem Rechtschreibprüfer Wörterbücher hinzuzufügen.
- Das Attribut `nsIBrowserHistory.lastPageVisited` wurde entfernt.
- Die `nsIDocumentViewer`-Schnittstelle wurde in `nsIContentViewer` zusammengeführt.
- Die `nsIURIFixup`-Schnittstelle hat eine neue Kennzeichnung, `FIXUP_FLAG_USE_UTF8`, die es Ihnen ermöglicht, es UTF-8 anstelle des Plattform-Zeichensatzes zu verwenden, bei Konvertierungen.

### Änderungen bei Plug-ins

- Die neue Variable `NPNVdocumentOrigin` wurde hinzugefügt; diese gibt den Ursprung des Dokuments zurück und ist sicherer als [`window.location`](/de/docs/Web/API/Window/location).

### Änderungen im Build-System

- Die `--disable-rdf` Build-Option, die tatsächlich den erfolgreichen Build unmöglich machte, wurde entfernt. Es wird daran gearbeitet, RDF-Unterstützung vollständig entfernen zu können, derzeit erfordert jedoch XUL noch dessen Funktionalität. Siehe [Firefox Fehler 559505](https://bugzil.la/559505) für den Fortschritt beim Entfernen der letzten Reste von RDF, die benötigt werden.
- Die `--disable-smil` Build-Option wurde entfernt.
