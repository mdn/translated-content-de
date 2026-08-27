---
title: Firefox 10 Release Notes für Entwickler
short-title: Firefox 10
slug: Mozilla/Firefox/Releases/10
l10n:
  sourceCommit: 56f3d7018159127dbe92842413fb45d0aa7e8193
---

Firefox 10 wurde am 31. Januar 2012 veröffentlicht. Dieser Artikel bietet Informationen über die neuen Funktionen und wichtige behobene Fehler in dieser Version, sowie Links zu detaillierterer Dokumentation sowohl für Webentwickler als auch für Add-on-Entwickler.

> [!NOTE]
> Firefox 10 ist die erste Veröffentlichung dieses Browsers mit zwei Ziffern. Dies kann zu Problemen mit einigen UA-Sniffing-Skripten führen. Überprüfen Sie diese sowie die in eingebetteter Drittanbieter-Software enthaltenen Bibliotheken auf potenzielle Probleme. Für weitere Informationen lesen Sie den [Artikel über das Wechseln zu zweistelligen Versionen auf hack.mozilla.org](https://hacks.mozilla.org/2012/01/firefox-goes-2-digit-time-to-check-your-ua-sniffing-scripts/).

## Änderungen für Webentwickler

### HTML

- Das neue HTML5 {{ HTMLElement("bdi") }}-Element zur bidirektionalen Isolation, das die Isolation von Textteilen mit unterschiedlicher Richtung ermöglicht, wurde implementiert. Dies ist besonders nützlich beim Anzeigen von Texten mit unbekannter Richtung, die beispielsweise aus einer Datenbank stammen und in der Mitte eines Textes mit bekannter, möglicherweise unterschiedlicher Richtung eingefügt werden.
- Sie können nun ein Fragment von "top" für das [`href`](/de/docs/Web/HTML/Reference/Elements/a#href)-Attribut angeben, um einen Link zum oberen Rand der Seite zu erstellen. Dies funktionierte früher, war dann eine Weile verschwunden und ist nun wieder zurück, um die Kompatibilität mit der HTML5-Spezifikation zu gewährleisten. Ein Beispiel: `<a href="#top">Return to top of page</a>`.

### JavaScript

- Die Methode `WeakMap.set()` gibt jetzt `undefined` zurück, anstatt sich selbst.
- Ein Fehler bei der Verarbeitung regulärer Ausdrücke, der in Firefox 7 eingeführt wurde, wurde behoben. Weitere Details finden Sie unter [Firefox Fehler 683838](https://bugzil.la/683838).
- Sie können die veraltete ECMAScript for XML (E4X)-Syntax jetzt nicht mehr im [ECMAScript 5 strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode) verwenden (d.h. nach dem `"use strict;"`).

### DOM

#### DOM3 Ereignisse

- Die DOM-Ereignismethode [`event.stopImmediatePropagation`](/de/docs/Web/API/Event/stopImmediatePropagation) wurde implementiert.
- Die Mauserereignisse `mouseenter` und `mouseleave` wurden implementiert.

#### DOM4

- Das Attribut [`document.xmlVersion`](/de/docs/Web/API/Document/xmlVersion) (das nur auslesbar und nicht setzbar war) wurde entfernt, da es in der DOM4-Spezifikation veraltet ist. Der Artikel zu [`document.xmlVersion`](/de/docs/Web/API/Document/xmlVersion) schlägt nun eine Methode zur Erkennung vor, ob das Dokument HTML oder XML ist, ohne diese Eigenschaft zu verwenden.
- Das Attribut `document.xmlStandalone` wurde entfernt, da es in der DOM4-Spezifikation veraltet ist.
- Das Attribut [`document.xmlEncoding`](/de/docs/Web/API/Document/xmlEncoding) wurde entfernt, da es in der DOM4-Spezifikation veraltet ist.
- Das Attribut `text.isElementContentWhiteSpace` wurde entfernt, da es in der DOM4-Spezifikation veraltet ist.
- Die Methode `text.replaceWholeText` wurde entfernt, da sie in der DOM4-Spezifikation veraltet ist.
- Die Methode [`node.isSameNode`](/de/docs/Web/API/Node/isSameNode) wurde entfernt, da sie in der DOM4-Spezifikation veraltet ist. Anstelle von `node1.isSameNode(node2)` können Sie den `===` Operator verwenden, wie folgt: `node1 === node2`.

#### Seiten-Sichtbarkeits-API

- Die [Page Visibility API](/de/docs/Web/API/Page_Visibility_API) wurde implementiert (mit Präfix): `document.mozHidden`, `document.mozVisibilityState` sind verfügbar und das Ereignis `mozvisibilitychanged` wird gesendet, wenn sich der Zustand ändert.

#### Vollbild-API

- Unterstützung für [`document.fullscreenEnabled`](/de/docs/Web/API/Document/fullscreenEnabled) wurde hinzugefügt.
- Die neue Eigenschaft `:-moz-full-screen-ancestor` wurde hinzugefügt. Diese ermöglicht es Ihnen, Elemente zu erkennen, die Vorfahren eines Elements im Vollbildmodus sind.

#### Batterie-API

- Experimentelle Unterstützung für `navigator.mozBattery` wurde hinzugefügt (kann aktiviert werden, indem die Einstellung `dom.battery.enabled` auf `true` gesetzt wird und wird standardmäßig ab Firefox 11 aktiviert sein).

#### Canvas

- Die [`createPattern()`](/de/docs/Web/API/CanvasRenderingContext2D/createPattern)-Methode wirft jetzt eine Ausnahme, wenn eine Quelle mit einer Größe von null angegeben wird.
- Wenn Sie einen nicht endlichen Wert für einen der numerischen Parameter an [`putImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/putImageData) übergeben, wird der Aufruf jetzt stillschweigend ignoriert, anstatt eine Ausnahme zu werfen, im Einklang mit der Spezifikation.

#### WebGL

- Firefox 10 unterstützt jetzt die [`OES_standard_derivatives`](https://registry.khronos.org/webgl/extensions/OES_standard_derivatives/)-Erweiterung.
- [Neue Einstellungen wurden hinzugefügt](/de/docs/Web/API/WebGL_API#webgl_debugging_and_testing), um die Kompatibilität von WebGL-Code mit minimal leistungsfähigen Geräten auf Ihrer Entwicklungsplattform zu testen.

#### Web Worker

- Das Attribut `XMLHttpRequest.responseType` und `XMLHttpRequest.response` sind jetzt innerhalb von [Workers](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers) verfügbar.
- Der [`Worker()`](/de/docs/Web/API/Worker/Worker)-Konstruktor akzeptiert jetzt [Data-URLs](/de/docs/Web/URI/Reference/Schemes/data).

#### IndexedDB

Es wurden große Fortschritte gemacht, um IndexedDB auf den neuesten Spezifikationsentwurf zu aktualisieren. Diese Anstrengungen werden in Firefox 11 weitergeführt.

- Die Methoden [`IDBIndex.count()`](/de/docs/Web/API/IDBIndex/count) und [`IDBObjectStore.count()`](/de/docs/Web/API/IDBObjectStore/count) wurden hinzugefügt.
- Die Methode [`IDBCursor.advance()`](/de/docs/Web/API/IDBCursor/advance) wurde hinzugefügt.
- Beim Auftreten eines unbekannten optionalen Parameters in [`IDBObjectStore.createIndex()`](/de/docs/Web/API/IDBObjectStore/createIndex) oder [`IDBDatabase.createObjectStore()`](/de/docs/Web/API/IDBDatabase/createObjectStore) wird Gecko keine Ausnahme mehr auslösen, sondern den Parameter ignorieren.
- Wenn [`IDBTransaction.abort()`](/de/docs/Web/API/IDBTransaction/abort) aufgerufen wird, haben alle ausstehenden [`IDBRequest`](/de/docs/Web/API/IDBRequest) den `errorCode` auf `ABORT_ERROR` gesetzt.
- Die Methoden [`IDBObjectStore.delete()`](/de/docs/Web/API/IDBObjectStore/delete) und [`IDBCursor.delete()`](/de/docs/Web/API/IDBCursor/delete) setzen jetzt das `result`-Attribut der zurückgegebenen [`IDBRequest`](/de/docs/Web/API/IDBRequest) auf `undefined`.
- Die Methode `IDBDatabase.setVersion()` wurde entfernt, da sie aus dem neuesten Entwurf entfernt wurde. Die Version der Datenbank wird über die Methode [`IDBFactory.open()`](/de/docs/Web/API/IDBFactory/open) angegeben, die aktualisiert wurde, und der `onupgradeneeded`-Callback ermöglicht das Aktualisieren des Schemas der Datenbank. Die Version selbst wurde von einem `DOMString` in einen `unsigned long long` geändert. Die `IDBVersionChangeRequest`-Schnittstelle wurde entfernt und durch die neue [`IDBOpenDBRequest`](/de/docs/Web/API/IDBOpenDBRequest) Schnittstelle ersetzt.
- Beim Öffnen einer Datenbank mit [`IDBFactory.open()`](/de/docs/Web/API/IDBFactory/open), wenn der `version`-Parameter nicht bereitgestellt wird und die Datenbank nicht existiert, wird sie mit einer Version von `1` erstellt.
- Die Methode [`IDBFactory.deleteDatabase()`](/de/docs/Web/API/IDBFactory/deleteDatabase) wurde hinzugefügt.
- Methoden, die über einen [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange) suchen (wie [`IDBObjectStore.openCursor`](/de/docs/Web/API/IDBObjectStore/openCursor) und [`IDBIndex.getKey`](/de/docs/Web/API/IDBIndex/getKey)) können entweder einen einzelnen Schlüssel oder einen Schlüsselbereich akzeptieren.

#### Sonstiges

- Wenn der richtige MIME-Typ, `image/svg+xml`, übergeben wird, erstellt der `DOMParser` jetzt ein `SVGDocument`, wenn eine Zeichenfolge mit SVG übergeben wird.
- Früher berichtete [`element.setAttribute()`](/de/docs/Web/API/Element/setAttribute) einen Fehler, wenn das Integer eine nicht numerische Zeichenfolge enthielt (zum Beispiel "42foo"). Jetzt wird dies korrekt auf die Zahl 42 gekürzt, in Übereinstimmung mit der Spezifikation.
- Die ESC-Taste führt nicht mehr fälschlicherweise dazu, dass der [`onkeydown`](/de/docs/Web/API/Element/keydown_event) Handler fälschlicherweise aufgerufen wird.
- Die `NameList`-Schnittstelle wird nicht mehr implementiert; sie hatte zuvor eine Implementierung ohne die Möglichkeit, tatsächlich auf sie zuzugreifen.
- Die Methode [`document.createProcessingInstruction()`](/de/docs/Web/API/Document/createProcessingInstruction) funktioniert jetzt sowohl bei HTML- als auch bei XML-Dokumenten. [`ProcessingInstruction`](/de/docs/Web/API/ProcessingInstruction)-Knoten werden weiterhin nur bei XML-Dokumenten unterstützt, aber da Knoten zwischen Dokumenten verschoben werden können, ist es hilfreich, sie auch in HTML-Dokumenten erstellen zu können.
- Der `"moz-json"` `responseType` von [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest), [eingeführt in Firefox 9](/de/docs/Mozilla/Firefox/Releases/9#dom), wurde auf den neuesten Entwurf der Spezifikation aktualisiert und das Präfix wurde entfernt. Siehe Hinweis in [Firefox Fehler 707142](https://bugzil.la/707142#c13).

### CSS

- CSS 3D-Transformationen werden jetzt unterstützt. Dies beinhaltet Unterstützung für die Eigenschaften {{ cssxref("transform-style") }}, {{ cssxref("perspective") }}, {{ cssxref("perspective-origin") }} und {{ cssxref("backface-visibility") }}, sowie für 3D-Transformationsfunktionen in den Eigenschaften {{ cssxref("transform") }} und {{ cssxref("transform-function") }}. Sehen Sie sich [Verwenden von CSS-Transformationen](/de/docs/Web/CSS/Guides/Transforms/Using#3d_specific_css_properties) für Details an.
- Zwei neue Werte für die CSS-Eigenschaft {{ cssxref("unicode-bidi") }} wurden hinzugefügt: `-moz-isolation` und `-moz-plaintext`. Der Wert `-moz-isolation` isoliert das Element aus der Sicht der Richtungen von seiner Umgebung, sodass es eine unterschiedliche Richtung haben kann. Ein Element mit `unicode-bidi:-moz-isolation` verhält sich wie ein {{ HTMLElement("bdi") }}-Element. Der Wert `-moz-plaintext` gibt dem Browser an, die Unicode-Browserheuristik zur Bestimmung der Richtung zu verwenden und nicht die CSS {{ cssxref("direction") }}-Eigenschaft.
- Die CSS-Eigenschaften {{ cssxref("gradient/linear-gradient") }} und {{ cssxref("gradient/repeating-linear-gradient") }} wurden aktualisiert, um das neue `to`-Syntax und den _magischen Eck-Algorithmus_ zu unterstützen. Dies ermöglicht es Ihnen, eine präzise Farbe in der Ecke eines farbverlaufsgefüllten Feldes anzugeben.
- Das Verhalten der CSS-Eigenschaft {{ cssxref("text-overflow") }} in Fällen, in denen das Feld auf beiden Seiten überläuft, während die Eigenschaft `text-overflow` nur auf einer Seite eingestellt ist, wurde korrigiert.
- Die Behandlung der CSS-Eigenschaft {{ cssxref("position") }} für Elemente innerhalb von positionierten {{ HTMLElement("table") }}-Elementen wurde behoben. **Diese Änderung wirkt sich auf das Layout von Webseiten aus; jedoch entsprechen wir jetzt der CSS-Spezifikation und anderen Browsern, sodass dies einfach zu beheben sein sollte.**
- Das Kollabieren von Rändern um {{ HTMLElement("table") }}-Elemente wurde behoben, um der CSS-Spezifikation zu entsprechen. Zuvor würden die Ränder von Tabellenelementen nicht mit anderen benachbarten Elementen kollabieren, was zu einem falschen Layout führte. **Diese Änderung wirkt sich auf das Layout von Webseiten aus; jedoch entsprechen wir jetzt der CSS-Spezifikation und anderen Browsern, sodass dies einfach zu beheben sein sollte.**

### SVG

- Das {{ SVGElement("mask") }} Element wurde aktualisiert, um sowohl sRGB als auch linearRGB zu unterstützen, und standardmäßig auf sRGB voreingestellt, um mit der neuesten Revision der SVG 1.1-Spezifikation konform zu sein.

### Netzwerk

- Der HTTP-Header `Accept-Charset` wird bei HTTP-Anfragen nicht mehr gesendet. In seiner Abwesenheit sollten Server mit UTF-8 antworten.

### Entwickler-Tools

- Das [`console`](/de/docs/Web/API/console)-Objekt hat zwei neue Methoden, [`console.time()`](/de/docs/Web/API/console/time_static) und [`console.timeEnd()`](/de/docs/Web/API/console/timeEnd_static), die verwendet werden können, um Timer auf einer Seite zu setzen.
- Der neue [Page Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) wurde hinzugefügt, der eine hervorragende Möglichkeit bietet, den HTML- und CSS-Code hinter Ihren Inhalten zu untersuchen und zu manipulieren.

## Änderungen für Mozilla- und Add-on-Entwickler

Für einen Überblick über mögliche Probleme, die beim Aktualisieren Ihrer Add-ons zur Unterstützung von Firefox 10 auftreten können, siehe [Aktualisieren von Add-ons für Firefox 10](/de/docs/Mozilla/Firefox/Releases/10/Updating_add-ons).

> [!NOTE]
> Der alte [`PRBool`](https://web.archive.org/web/20210224213411/https://developer.mozilla.org/de/docs/Mozilla/Projects/NSPR/Reference/PRBool) Datentyp wurde eingestellt! Überall in der Dokumentation, wo darauf verwiesen wird, wird stattdessen der standardmäßige C++ `bool` Typ verwendet. Die Dokumentation wird in Zukunft aktualisiert, aber vorerst sollten Sie sich dessen bewusst sein.

### Manifeste

- Unterstützung für [`<em:strictCompatibility>`](https://web.archive.org/web/20210421140209/https://developer.mozilla.org/de/docs/Archive/Add-ons/Install_Manifests#strictcompatibility) wurde zum Installationsmanifest hinzugefügt. Es ermöglicht Add-on-Autoren, die maximale Version ihrer Erweiterung zu überprüfen. Wenn auf `true` gesetzt, wird das Add-on deaktiviert, wenn die Anwendungsversion größer als `<em:maxVersion>` ist. Firefox 10 geht standardmäßig davon aus, dass Add-ons kompatibel sind, unabhängig von ihrer angegebenen maximalen Version. Diese Einstellung überschreibt diese Präferenz. Sie sollten dies setzen, wenn Ihr Add-on Dinge tut, die durch Firefox-Updates wahrscheinlich beschädigt werden, **aber nicht**, wenn Ihr Add-on eine binäre Komponente hat, da solche Add-ons immer streng überprüft werden (denken Sie daran, dass binäre Komponenten immer für jede große Firefox-Version neu kompiliert werden müssen).
- Wenn Sie zum alten Verhalten zurückkehren möchten – also zur strikten Kompatibilitätsprüfung für alle Add-ons, unabhängig vom Wert der `strictCompatibility`-Einstellung in ihren Manifesten – können Sie die `extensions.strictCompatibility`-Präferenz auf `true` setzen.

### XUL

- Integrierte Add-ons, die eine `chrome.manifest`-Datei verwenden, haben jetzt ihre Manifestdatei automatisch registriert. Siehe den Abschnitt [Hinzufügen der Benutzeroberfläche mit einer chrome.manifest](https://web.archive.org/web/20210519000929/https://developer.mozilla.org/de/docs/Archive/Add-ons/Bootstrapped_extensions#Adding_user_interface_with_a_chrome.manifest) für Details.

### XPConnect

- Mehrere neue Eigenschaften und Methoden wurden zu `Components.utils` hinzugefügt, die Zugriff auf verschiedene debugging-relevante Informationen gewähren.

### Schnittstellenänderungen

- Die `mozISpellCheckingEngine`- und `nsIEditorSpellCheck`-Schnittstellen wurden aktualisiert, um es Add-ons ohne Neustart zu ermöglichen, Wörterbücher zum Rechtschreibprüfer hinzuzufügen.
- Das Attribut `nsIBrowserHistory.lastPageVisited` wurde entfernt.
- Die `nsIDocumentViewer`-Schnittstelle wurde in `nsIContentViewer` integriert.
- Die `nsIURIFixup`-Schnittstelle hat ein neues Flag, `FIXUP_FLAG_USE_UTF8`, das Ihnen ermöglicht, UTF-8 statt des Plattform-Zeichensatzes bei Umwandlungen zu verwenden.

### Plug-in-Änderungen

- Die neue Variable `NPNVdocumentOrigin` wurde hinzugefügt; sie gibt den Ursprung des Dokuments zurück und ist sicherer als [`window.location`](/de/docs/Web/API/Window/location).

### Build-System-Änderungen

- Die Build-Option `--disable-rdf`, die es praktisch unmöglich machte, erfolgreich zu bauen, wurde entfernt. Die Arbeit geht weiter, um die RDF-Unterstützung vollständig zu entfernen, aber derzeit benötigt XUL sie noch, um zu funktionieren. Fortschritte bei der Entfernung der letzten Überreste von RDF werden in [Firefox Fehler 559505](https://bugzil.la/559505) protokolliert.
- Die Build-Option `--disable-smil` wurde entfernt.
