---
title: Firefox 10 für Entwickler
slug: Mozilla/Firefox/Releases/10
l10n:
  sourceCommit: 848771d9efdc57ad84d643081cf91e89355c751b
---

{{FirefoxSidebar}}

Firefox 10 wurde am 31. Januar 2012 veröffentlicht. Dieser Artikel bietet Informationen über die neuen Funktionen und die behobenen wichtigen Fehler in dieser Version sowie Links zu detaillierteren Dokumentationen für Webentwickler und Add-on-Entwickler.

> [!NOTE]
> Firefox 10 ist die erste Version dieses Browsers mit zwei Ziffern. Dies kann zu Problemen mit einigen UA-Sniffing-Skripten führen. Überprüfen Sie diese, sowie solche in eingebundener Drittanbieter-Software in Ihren Seiten, wie Bibliotheken. Weitere Informationen hierzu finden Sie im Artikel [Firefox goes 2-digit auf hack.mozilla.org](https://hacks.mozilla.org/2012/01/firefox-goes-2-digit-time-to-check-your-ua-sniffing-scripts/).

## Änderungen für Webentwickler

### HTML

- Das neue HTML5-Element {{ HTMLElement("bdi") }}, bi-direktionale Isolation, das die Isolation von Textteilen mit unterschiedlicher Richtung ermöglicht, wurde implementiert. Dies ist besonders nützlich beim Anzeigen von Text mit unbekannter Richtung, der beispielsweise aus einer Datenbank stammt, inmitten von Text mit bekannter und möglicherweise unterschiedlicher Richtung.
- Sie können jetzt ein Fragment "top" für das [`href`](/de/docs/Web/HTML/Element/a#href)-Attribut angeben, um einen Link zur Spitze der Seite zu erstellen. Dies funktionierte früher, ging eine Zeit lang verloren und ist jetzt zurück, um die Kompatibilität mit der HTML5-Spezifikation zu gewährleisten. Zum Beispiel: `<a href="#top">Return to top of page</a>`.

### JavaScript

- Die Methode `WeakMap.set()` gibt jetzt `undefined` zurück, anstatt sich selbst.
- Ein Fehler in der regulären Ausdruck-Verarbeitung, der in Firefox 7 eingeführt wurde, wurde behoben. Weitere Details finden Sie im [Firefox-Bug 683838](https://bugzil.la/683838).
- Sie können die veraltete ECMAScript for XML (E4X)-Syntax nicht mehr im [ECMAScript 5 strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode) verwenden (d.h. nach `"use strict;"`).

### DOM

#### DOM3-Ereignisse

- Die DOM-Ereignismethode [`event.stopImmediatePropagation`](/de/docs/Web/API/Event/stopImmediatePropagation) wurde implementiert.
- Die Mausereignisse `mouseenter` und `mouseleave` wurden implementiert.

#### DOM4

- Das Attribut [`document.xmlVersion`](/de/docs/Web/API/Document/xmlVersion) (welches nur lesbar und nicht schreibbar war) wurde entfernt, da es in der DOM4-Spezifikation veraltet ist. Der Artikel zu [`document.xmlVersion`](/de/docs/Web/API/Document/xmlVersion) schlägt jetzt eine Möglichkeit vor, zu erkennen, ob das Dokument HTML oder XML ist, ohne diese Eigenschaft zu verwenden.
- Das Attribut `document.xmlStandalone` wurde entfernt, da es in der DOM4-Spezifikation veraltet ist.
- Das Attribut [`document.xmlEncoding`](/de/docs/Web/API/Document/xmlEncoding) wurde entfernt, da es in der DOM4-Spezifikation veraltet ist.
- Das Attribut `text.isElementContentWhiteSpace` wurde entfernt, da es in der DOM4-Spezifikation veraltet ist.
- Die Methode `text.replaceWholeText` wurde entfernt, da sie in der DOM4-Spezifikation veraltet ist.
- Die Methode [`node.isSameNode`](/de/docs/Web/API/Node/isSameNode) wurde entfernt, da sie in der DOM4-Spezifikation veraltet ist. Statt `node1.isSameNode(node2)` können Sie den `===`-Operator verwenden, so: `node1 === node2`.

#### Seiten-Sichtbarkeits-API

- Die [Seiten-Sichtbarkeits-API](/de/docs/Web/API/Page_Visibility_API) wurde implementiert (mit Präfix): `document.mozHidden`, `document.mozVisibilityState` sind verfügbar und das Ereignis `mozvisibilitychanged` wird gesendet, wenn sich der Status ändert.

#### Vollbild-API

- Unterstützung für [`document.fullscreenEnabled`](/de/docs/Web/API/Document/fullscreenEnabled) wurde hinzugefügt.
- Die neue Eigenschaft {{ cssxref(":-moz-full-screen-ancestor") }} wurde hinzugefügt. Diese ermöglicht es Ihnen, Elemente zu vergleichen, die Vorfahren eines Elements im Vollbildmodus sind.

#### Batterie-API

- Experimentelle Unterstützung für `navigator.mozBattery` wurde hinzugefügt (kann durch Setzen der Voreinstellung `dom.battery.enabled` auf `true` aktiviert werden und wird standardmäßig ab Firefox 11 aktiviert sein).

#### Canvas

- Die Methode [`createPattern()`](/de/docs/Web/API/CanvasRenderingContext2D#createpattern%28%29) löst jetzt eine Ausnahme aus, wenn eine Quelle mit Canvas der Größe Null angegeben wird.
- Wenn Sie einen nicht-endlichen Wert für einen der numerischen Parameter von [`putImageData()`](/de/docs/Web/API/CanvasRenderingContext2D#putimagedata%28%29) verwenden, wird der Aufruf nun still ignoriert, anstatt eine Ausnahme zu werfen, gemäß der Spezifikation.

#### WebGL

- Firefox 10 unterstützt nun die [`OES_standard_derivatives`](https://registry.khronos.org/webgl/extensions/OES_standard_derivatives/) Erweiterung.
- [Neue Voreinstellungen wurden hinzugefügt](/de/docs/Web/API/WebGL_API#webgl_debugging_and_testing), um beim Testen von WebGL-Code auf Kompatibilität mit minimal-fähigen Geräten auf Ihrer vollständigen Entwicklungsplattform zu helfen.

#### Web Workers

- Das Attribut `XMLHttpRequest.responseType` und `XMLHttpRequest.response` sind jetzt innerhalb von [Workers](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers#section_2) verfügbar.
- Der Konstruktor [`Worker()`](/de/docs/Web/API/Worker/Worker) akzeptiert nun [Data-URLs](/de/docs/Web/URI/Reference/Schemes/data).

#### IndexedDB

Großer Fortschritt wurde gemacht, um IndexedDB an den neuesten Entwurf der Spezifikation anzupassen. Diese Bemühungen werden in Firefox 11 fortgesetzt.

- Die Methoden [`IDBIndex.count()`](/de/docs/Web/API/IDBIndex#count) und [`IDBObjectStore.count()`](/de/docs/Web/API/IDBObjectStore#count) wurden hinzugefügt.
- Die Methode [`IDBCursor.advance()`](/de/docs/Web/API/IDBCursor#advance) wurde hinzugefügt.
- Bei unbekannten optionalen Parametern in [`IDBObjectStore.createIndex()`](/de/docs/Web/API/IDBObjectStore#createindex) oder [`IDBDatabase.createObjectStore()`](/de/docs/Web/API/IDBDatabase#createobjectstore) wird Gecko keine Ausnahme mehr werfen, sondern es ignorieren.
- Bei einem Anruf von [`IDBTransaction.abort()`](/de/docs/Web/API/IDBTransaction#abort%28%29) haben alle ausstehenden [`IDBRequest`](/de/docs/Web/API/IDBRequest) ihren `errorCode` auf `ABORT_ERROR` gesetzt.
- Die Methoden [`IDBObjectStore.delete()`](/de/docs/Web/API/IDBObjectStore/delete) und [`IDBCursor.delete()`](/de/docs/Web/API/IDBCursor/delete) setzen nun das `result`-Attribut der zurückgegebenen [`IDBRequest`](/de/docs/Web/API/IDBRequest) auf `undefined`.
- Die Methode `IDBDatabase.setVersion()` wurde entfernt, da sie aus der neuesten Spezifikation entfernt wurde. Die Version der Datenbank wird durch die Methode [`IDBFactory.open()`](/de/docs/Web/API/IDBFactory#open) angegeben, die aktualisiert wurde, und der `onupgradeneeded`-Callback erlaubt die Aktualisierung des Datenbankschemas. Die Version selbst wurde von einem `DOMString` zu einem `unsigned long long` geändert. Das `IDBVersionChangeRequest`-Interface wurde entfernt und durch das neue [`IDBOpenDBRequest`](/de/docs/Web/API/IDBOpenDBRequest)-Interface ersetzt.
- Beim Öffnen einer Datenbank mit [`IDBFactory.open()`](/de/docs/Web/API/IDBFactory/open), wenn der `version` Parameter nicht angegeben ist und die Datenbank nicht existiert, wird sie mit der Version `1` erstellt.
- Die Methode [`IDBFactory.deleteDatabase()`](/de/docs/Web/API/IDBFactory#deletedatabase%28%29) wurde hinzugefügt.
- Methoden, die über einen [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange) suchen (wie [`IDBObjectStore.openCursor`](/de/docs/Web/API/IDBObjectStore/openCursor) und [`IDBIndex.getKey`](/de/docs/Web/API/IDBIndex/getKey)), können entweder einen einzelnen Schlüssel oder einen Schlüsselbereich akzeptieren.

#### Sonstiges

- Bei Übergabe des richtigen MIME-Typs `image/svg+xml` [erstellt der `DOMParser` jetzt ein `SVGDocument`](/de/docs/Web/API/DOMParser#parsing_a_svg_document), wenn er mit einem String mit SVG arbeitet.
- In der Vergangenheit würde [`element.setAttribute()`](/de/docs/Web/API/Element/setAttribute) beim Parsen von ganzzahligen Werten einen Fehler melden, wenn die Ganzzahl nicht-numerische Zeichen enthielt (zum Beispiel "42foo"). Jetzt wird dies korrekt als die Zahl 42 abgeschnitten, in Übereinstimmung mit der Spezifikation.
- Die ESC-Taste führt nicht mehr fälschlicherweise dazu, dass der [`onkeydown`](/de/docs/Web/API/Element/keydown_event)-Handler fälschlicherweise aufgerufen wird.
- Das `NameList`-Interface wird nicht mehr implementiert; es hatte vorher eine Implementierung ohne eine Möglichkeit, tatsächlich auf eines zuzugreifen.
- Die Methode [`document.createProcessingInstruction()`](/de/docs/Web/API/Document/createProcessingInstruction) funktioniert jetzt sowohl bei HTML- als auch bei XML-Dokumenten. [`ProcessingInstruction`](/de/docs/Web/API/ProcessingInstruction)-Knoten werden immer noch nur in XML-Dokumenten unterstützt, aber da Knoten zwischen Dokumenten bewegt werden können, ist es hilfreich, sie auch in HTML-Dokumenten erstellen zu können.
- Die `XMLHttpRequest`-`responseType` `"moz-json"`, [eingeführt in Firefox 9](/de/docs/Mozilla/Firefox/Releases/9#dom), wurde auf den neuesten Entwurf der Spezifikation aktualisiert und das Präfix wurde entfernt. Siehe Hinweis im [Firefox-Bug 707142](https://bugzil.la/707142#c13).

### CSS

- CSS 3D-Transformationen werden jetzt unterstützt. Dies beinhaltet die Unterstützung der Eigenschaften {{ cssxref("transform-style") }}, {{ cssxref("perspective") }}, {{ cssxref("perspective-origin") }} und {{ cssxref("backface-visibility") }}, sowie für 3D-Transformationsfunktionen in den Eigenschaften {{ cssxref("transform") }} und {{ cssxref("transform-function") }}. Details finden Sie unter [Using CSS transforms](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms#3d_specific_css_properties).
- Zwei neue Werte für die CSS-Eigenschaft {{ cssxref("unicode-bidi") }} wurden hinzugefügt: `-moz-isolation` und `-moz-plaintext`. Der Wert `-moz-isolation` isoliert, aus einer Richtungssicht, das Element von seiner Umgebung und ermöglicht ihm eine andere Richtung zu haben. Ein Element mit `unicode-bidi:-moz-isolation` verhält sich wie ein {{ HTMLElement("bdi") }}-Element. `-moz-plaintext` gibt dem Browser an, die Unicode-Browser-Heuristik zur Bestimmung der Richtung zu verwenden und nicht die CSS-{{ cssxref("direction") }}-Eigenschaft.
- Die CSS-Eigenschaften {{ cssxref("gradient/linear-gradient") }} und {{ cssxref("gradient/repeating-linear-gradient") }} wurden aktualisiert, um die neue `to`-Syntax und den _magic corner_ Algorithmus zu unterstützen. Dies erlaubt es, eine präzise Farbe an der Ecke einer verlaufsgefüllten Box zu geben.
- Die Handhabung der {{ cssxref("text-overflow") }} Eigenschaft bei Fällen, in denen der Kasten auf beiden Seiten überläuft, während die `text-overflow` Eigenschaft eingestellt ist, auf nur eine Seite zu überlaufen, [wurde korrigiert](/de/docs/Web/CSS/text-overflow#gecko_notes).
- Die Handhabung der {{ cssxref("position") }} Eigenschaft auf Elementen innerhalb von positionierten {{ HTMLElement("table") }} Elementen wurde [korrigiert](/de/docs/Web/CSS/position#gecko_notes). **Diese Änderung wird das Layout von Seiten beeinflussen; wir entsprechen jedoch nun der CSS-Spezifikation und anderen Browsern, daher sollte dies einfach zu beheben sein.**
- Das Margin-Kollapsen um {{ HTMLElement("table") }} Elemente wurde korrigiert, um die CSS-Spezifikation zu entsprechen. Zuvor wurden Margins von Tabellenelementen nicht zusammengelegt mit anderen benachbarten Elementen, was zu einem falschen Layout führte. **Diese Änderung wird das Layout von Seiten beeinflussen; wir entsprechen jedoch nun der CSS-Spezifikation und anderen Browsern, daher sollte dies einfach zu beheben sein.**

### SVG

- Das {{ SVGElement("mask") }}-Element wurde aktualisiert, um sowohl sRGB als auch linearRGB zu unterstützen und ist nun standardmäßig auf sRGB eingestellt, in Übereinstimmung mit der neuesten Überarbeitung der SVG 1.1-Spezifikation.

### Netzwerk

- Der HTTP-Header `Accept-Charset` wird nicht mehr in HTTP-Anfragen gesendet.
  In seiner Abwesenheit sollten Server mit UTF-8 antworten.

### Entwicklerwerkzeuge

- Das [`console`](/de/docs/Web/API/Console)-Objekt hat zwei neue Methoden, [`console.time()`](/de/docs/Web/API/Console/time_static) und [`console.timeEnd()`](/de/docs/Web/API/Console/timeEnd_static), die verwendet werden können, um Timer auf einer Seite zu setzen.
- Der neue [Seiteninspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) wurde hinzugefügt und bietet eine hervorragende Möglichkeit, das HTML und CSS hinter Ihrem Inhalt zu untersuchen und zu manipulieren.

## Änderungen für Mozilla- und Add-on-Entwickler

Für einen Überblick über mögliche Probleme, die bei der Aktualisierung Ihrer Add-ons auf Unterstützung von Firefox 10 auftreten können, siehe [Aktualisieren von Add-ons für Firefox 10](/de/docs/Mozilla/Firefox/Updating_add-ons_for_Firefox_10).

> [!NOTE]
> Der alte [`PRBool`](/de/docs/PRBool) Datentyp wurde abgeschafft! Überall, wo die Dokumentation darauf verweist, wird jetzt der Standard-C++-`bool`-Typ verwendet. Die Dokumentation wird in Zukunft aktualisiert, aber für den Moment behalten Sie dies im Hinterkopf.

### Manifeste

- Unterstützung für [`<em:strictCompatibility>`](/de/docs/Install_Manifests#strictcompatibility) wurde zum Installationsmanifest hinzugefügt. Es erlaubt Add-on-Autoren, sich selbst in die Überprüfung der maximalen Version ihrer Erweiterung einzuschalten. Wenn auf `true` gesetzt, wird das Add-on deaktiviert, wenn die Anwendungsversion größer als `<em:maxVersion>` ist. Firefox 10 geht standardmäßig davon aus, dass Add-ons kompatibel sind, unabhängig von ihrer angegebenen maximalen Version. Dieses Flag überschreibt diese Voreinstellung. Sie sollten dies setzen, wenn Ihr Add-on Funktionen enthält, die wahrscheinlich durch Firefox-Updates unterbrochen werden, **aber nicht**, wenn Ihr Add-on eine binäre Komponente enthält, da solche Add-ons immer streng überprüft werden (denken Sie daran, dass binäre Komponenten immer für jede größere Firefox-Version neu kompiliert werden müssen).
- Wenn Sie zum alten Verhalten zurückkehren möchten – das heißt, zur strikten Kompatibilitätsprüfung für alle Add-ons, unabhängig von dem Wert des `strictCompatibility`-Flags in ihren Manifesten, können Sie die Voreinstellung `extensions.strictCompatibility` auf `true` setzen.

### XUL

- Bootstrapped Add-ons mit einer `chrome.manifest`-Datei haben jetzt die Manifestdatei automatisch registriert. Details finden Sie im Abschnitt [Hinzufügen einer Benutzeroberfläche mit einer chrome.manifest](/de/docs/Extensions/Bootstrapped_extensions#Adding_user_interface_with_a_chrome.manifest).

### XPConnect

- Mehrere neue Eigenschaften und Methoden wurden zu `Components.utils` hinzugefügt, die Zugriff auf verschiedene debugging-bezogene Informationen gewähren.

### Schnittstellenänderungen

- Die Interfaces `mozISpellCheckingEngine` und `nsIEditorSpellCheck` wurden aktualisiert, um es neu startbaren Add-ons zu ermöglichen, Wörterbücher zum Rechtschreibprüfer hinzuzufügen.
- Das Attribut `nsIBrowserHistory.lastPageVisited` wurde entfernt.
- Das Interface `nsIDocumentViewer` wurde in `nsIContentViewer` integriert.
- Das Interface `nsIURIFixup` hat ein neues Flag, `FIXUP_FLAG_USE_UTF8`, das es Ihnen ermöglicht, es dazu zu bringen, UTF-8 anstelle des Plattformzeichensatzes zu verwenden, wenn Konvertierungen durchgeführt werden.

### Plug-in-Änderungen

- Die neue Variable `NPNVdocumentOrigin` wurde hinzugefügt; diese gibt den Dokumentursprung zurück und ist sicherer als [`window.location`](/de/docs/Web/API/Window/location).

### Buildsystem-Änderungen

- Die Build-Option `--disable-rdf`, die es tatsächlich unmöglich machte, erfolgreich zu bauen, wurde entfernt. Es wird daran gearbeitet, die RDF-Unterstützung vollständig zu entfernen, aber derzeit erfordert XUL immer noch, dass es funktioniert. Siehe [Firefox-Bug 559505](https://bugzil.la/559505) für Fortschritte bei der Entfernung der letzten Überreste von RDF, die erforderlich sind.
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
