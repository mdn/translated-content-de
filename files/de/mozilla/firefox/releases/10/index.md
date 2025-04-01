---
title: Firefox 10 für Entwickler
slug: Mozilla/Firefox/Releases/10
l10n:
  sourceCommit: 5ae01a458eced9772d628f91d035ada423cd073c
---

{{FirefoxSidebar}}

Firefox 10 wurde am 31. Januar 2012 veröffentlicht. Dieser Artikel bietet Informationen über die neuen Funktionen und die wichtigsten behobenen Fehler in dieser Version sowie Links zu detaillierteren Dokumentationen sowohl für Webentwickler als auch für Add-on-Entwickler.

> [!NOTE]
> Firefox 10 ist die erste Version dieses Browsers mit zweistelliger Versionsnummer. Dies kann zu Problemen mit einigen UA-Erkennungsskripten führen. Bitte überprüfen Sie diese und die in Drittanbieter-Software enthaltenen, die Sie in Ihre Seiten einbetten, wie z. B. Bibliotheken. Weitere Informationen dazu finden Sie im [Artikel "Firefox goes 2-digit" auf hack.mozilla.org](https://hacks.mozilla.org/2012/01/firefox-goes-2-digit-time-to-check-your-ua-sniffing-scripts/).

## Änderungen für Webentwickler

### HTML

- Das neue HTML5-{{ HTMLElement("bdi") }}-Element, die bidirektionale Isolation, die eine Isolierung von Textteilen mit unterschiedlicher Richtung ermöglicht, wurde implementiert. Dies ist besonders nützlich, wenn Text mit unbekannter Richtung, beispielsweise aus einer Datenbank, mitten in einem Text mit bekannter und möglicherweise anderer Richtung angezeigt wird.
- Sie können jetzt ein Fragment "top" für das [`href`](/de/docs/Web/HTML/Element/a#href)-Attribut angeben, um einen Link zum Anfang der Seite zu erstellen. Dies funktionierte früher, verschwand dann eine Weile und ist jetzt zurück, um der HTML5-Spezifikation zu entsprechen. Zum Beispiel: `<a href="#top">Return to top of page</a>`.

### JavaScript

- Die Methode `WeakMap.set()` gibt jetzt `undefined` zurück, anstatt sich selbst.
- Ein Fehler wurde in der Regulärausdrucksverarbeitung in Firefox 7 eingeführt; dieser wurde behoben. Details finden Sie im [Firefox-Bug 683838](https://bugzil.la/683838).
- Es ist nicht mehr möglich, die veraltete ECMAScript for XML (E4X)-Syntax im [ECMAScript 5 Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) zu verwenden (also nach `"use strict;"`).

### DOM

#### DOM3 Events

- Die DOM-Event-Methode [`event.stopImmediatePropagation`](/de/docs/Web/API/Event/stopImmediatePropagation) wurde implementiert.
- Die Mausereignisse `mouseenter` und `mouseleave` wurden implementiert.

#### DOM4

- Das Attribut [`document.xmlVersion`](/de/docs/Web/API/Document/xmlVersion) (das nur lesbar und nicht setzbar war) wurde entfernt, da es in der DOM4-Spezifikation als veraltet gilt. Der Artikel zu [`document.xmlVersion`](/de/docs/Web/API/Document/xmlVersion) schlägt nun vor, wie man erkennt, ob das Dokument HTML oder XML ist, ohne diese Eigenschaft zu verwenden.
- Das Attribut `document.xmlStandalone` wurde entfernt, da es in der DOM4-Spezifikation als veraltet gilt.
- Das Attribut [`document.xmlEncoding`](/de/docs/Web/API/Document/xmlEncoding) wurde entfernt, da es in der DOM4-Spezifikation als veraltet gilt.
- Das Attribut `text.isElementContentWhiteSpace` wurde entfernt, da es in der DOM4-Spezifikation als veraltet gilt.
- Die Methode `text.replaceWholeText` wurde entfernt, da sie in der DOM4-Spezifikation als veraltet gilt.
- Die Methode [`node.isSameNode`](/de/docs/Web/API/Node/isSameNode) wurde entfernt, da sie in der DOM4-Spezifikation als veraltet gilt. Anstatt `node1.isSameNode(node2)` können Sie jetzt den `===`-Operator verwenden, wie: `node1 === node2`.

#### Page Visibility API

- Die [Page Visibility API](/de/docs/Web/API/Page_Visibility_API) wurde implementiert (mit Präfix): `document.mozHidden`, `document.mozVisibilityState` sind verfügbar und das Ereignis `mozvisibilitychanged` wird gesendet, wenn sich der Status ändert.

#### Full Screen API

- Unterstützung für [`document.fullscreenEnabled`](/de/docs/Web/API/Document/fullscreenEnabled) wurde hinzugefügt.
- Die neue Eigenschaft {{ cssxref(":-moz-full-screen-ancestor") }} wurde hinzugefügt. Diese lässt Sie gegen Elemente abgleichen, die Vorfahren eines Elements im Vollbildmodus sind.

#### Battery API

- Experimentelle Unterstützung für `navigator.mozBattery` wurde hinzugefügt (kann aktiviert werden, indem die Präferenz `dom.battery.enabled` auf `true` gesetzt wird und wird standardmäßig ab Firefox 11 aktiviert).

#### Canvas

- Die Methode [`createPattern()`](/de/docs/Web/API/CanvasRenderingContext2D#createpattern%28%29) wirft nun eine Ausnahme, wenn eine Zero-Size-Quelle gecanvaswird.
- Wenn Sie einen nicht-endlichen Wert für einen der numerischen Parameter von [`putImageData()`](/de/docs/Web/API/CanvasRenderingContext2D#putimagedata%28%29) verwenden, wird der Aufruf nun still ignoriert, anstatt eine Ausnahme auszulösen, in Übereinstimmung mit der Spezifikation.

#### WebGL

- Firefox 10 unterstützt jetzt die [`OES_standard_derivatives`](https://registry.khronos.org/webgl/extensions/OES_standard_derivatives/)-Erweiterung.
- [Neue Präferenzen wurden hinzugefügt](/de/docs/Web/API/WebGL_API#webgl_debugging_and_testing), um WebGL-Code für die Kompatibilität mit minimal leistungsfähigen Geräten auf Ihrer vollständigen Entwicklungsplattform zu testen.

#### Web Workers

- Die Attribute `XMLHttpRequest.responseType` und `XMLHttpRequest.response` sind nun innerhalb von [Workers](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers#section_2) verfügbar.
- Der [`Worker()`](/de/docs/Web/API/Worker#worker)-Konstruktor akzeptiert jetzt [Data-URLs](/de/docs/Web/URI/Reference/Schemes/data).

#### IndexedDB

Große Fortschritte wurden gemacht, um IndexedDB auf die neueste Entwurfspezifikation zu aktualisieren. Diese Bemühungen werden in Firefox 11 fortgesetzt.

- Die Methoden [`IDBIndex.count()`](/de/docs/Web/API/IDBIndex#count) und [`IDBObjectStore.count()`](/de/docs/Web/API/IDBObjectStore#count) wurden hinzugefügt.
- Die Methode [`IDBCursor.advance()`](/de/docs/Web/API/IDBCursor#advance) wurde hinzugefügt.
- Beim Auftreten eines unbekannten optionalen Parameters in [`IDBObjectStore.createIndex()`](/de/docs/Web/API/IDBObjectStore#createindex) oder [`IDBDatabase.createObjectStore()`](/de/docs/Web/API/IDBDatabase#createobjectstore) wird Gecko nun keine Ausnahme mehr auslösen, sondern ihn ignorieren.
- Wenn [`IDBTransaction.abort()`](/de/docs/Web/API/IDBTransaction#abort%28%29) aufgerufen wird, haben alle ausstehenden [`IDBRequest`](/de/docs/Web/API/IDBRequest) ihren `errorCode` auf `ABORT_ERROR` gesetzt.
- Die Methoden [`IDBObjectStore.delete()`](/de/docs/Web/API/IDBObjectStore/delete) und [`IDBCursor.delete()`](/de/docs/Web/API/IDBCursor/delete) setzen nun das `result`-Attribut der zurückgegebenen [`IDBRequest`](/de/docs/Web/API/IDBRequest) auf `undefined`.
- Die Methode `IDBDatabase.setVersion()` wurde entfernt, da sie aus der neuesten Spezifikation gestrichen wurde. Die Version der Datenbank wird über die aktualisierte Methode [`IDBFactory.open()`](/de/docs/Web/API/IDBFactory#open) festgelegt, und der `onupgradeneeded`-Callback ermöglicht das Upgrade des Datenbankschemas. Die Version selbst wurde von einem `DOMString` in ein `unsigned long long` geändert. Das `IDBVersionChangeRequest`-Interface wurde entfernt und durch das neue [`IDBOpenDBRequest`](/de/docs/Web/API/IDBOpenDBRequest)-Interface ersetzt.
- Wenn eine Datenbank mit [`IDBFactory.open()`](/de/docs/Web/API/IDBFactory/open) geöffnet wird und der `version`-Parameter nicht bereitgestellt wird und die Datenbank nicht existiert, wird sie mit einer Version von `1` erstellt.
- Die Methode [`IDBFactory.deleteDatabase()`](/de/docs/Web/API/IDBFactory#deletedatabase%28%29) wurde hinzugefügt.
- Methoden, die über einen [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange) suchen (wie [`IDBObjectStore.openCursor`](/de/docs/Web/API/IDBObjectStore/openCursor) und [`IDBIndex.getKey`](/de/docs/Web/API/IDBIndex/getKey)), können entweder einen einzelnen Schlüssel oder einen Schlüsselbereich akzeptieren.

#### Andere

- Wenn der richtige MIME-Typ übergeben wird, `image/svg+xml`, [erstellt der `DOMParser` nun ein `SVGDocument`](/de/docs/Web/API/DOMParser#parsing_a_svg_document), wenn ihm ein SVG-String gegeben wird.
- Früher meldete [`element.setAttribute()`](/de/docs/Web/API/Element/setAttribute) beim Parsen von Ganzzahlen einen Fehler, wenn die Ganzzahl nicht-numerische Zeichen enthielt (z. B. "42foo"). Jetzt kürzt es dies korrekt als die Zahl 42, gemäß der Spezifikation.
- Die ESC-Taste führt nicht mehr fälschlicherweise dazu, dass der [`onkeydown`](/de/docs/Web/API/Element/keydown_event)-Handler fälschlicherweise aufgerufen wird.
- Das `NameList`-Interface wird nicht mehr implementiert; es hatte zuvor eine Implementierung, aber keinen Zugriff darauf.
- Die Methode [`document.createProcessingInstruction()`](/de/docs/Web/API/Document/createProcessingInstruction) funktioniert nun sowohl für HTML-Dokumente als auch für XML-Dokumente. [`ProcessingInstruction`](/de/docs/Web/API/ProcessingInstruction)-Knoten werden weiterhin nur auf XML-Dokumenten unterstützt, aber da Knoten zwischen Dokumenten bewegt werden können, ist es hilfreich, sie auch auf HTML-Dokumenten erstellen zu können.
- Der `XMLHttpRequest`-`responseType` `"moz-json"`, [eingeführt in Firefox 9](/de/docs/Mozilla/Firefox/Releases/9#dom), wurde auf den neuesten Entwurf der Spezifikation aktualisiert und wurde unpräfixiert. Siehe Anmerkung im [Firefox-Bug 707142](https://bugzil.la/707142#c13).

### CSS

- CSS 3D-Transformen werden jetzt unterstützt. Dies umfasst die Unterstützung der Eigenschaften {{ cssxref("transform-style") }}, {{ cssxref("perspective") }}, {{ cssxref("perspective-origin") }} und {{ cssxref("backface-visibility") }} sowie der 3D-Transformationsfunktionen in den Eigenschaften {{ cssxref("transform") }} und {{ cssxref("transform-function") }}. Siehe [Verwendung von CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms#3d_specific_css_properties) für Details.
- Zwei neue Werte für die CSS-Eigenschaft {{ cssxref("unicode-bidi") }} wurden hinzugefügt: `-moz-isolation` und `-moz-plaintext`. Der Wert `-moz-isolation` isoliert, aus Richtungssicht, das Element von seiner Umgebung, sodass es eine andere Richtung haben kann. Ein Element mit `unicode-bidi:-moz-isolation` verhält sich wie ein {{ HTMLElement("bdi") }}-Element. Der Wert `-moz-plaintext` weist den Browser an, die Unicode-Browserheuristik zur Bestimmung der Richtung zu verwenden und nicht die CSS-{{ cssxref("direction") }}-Eigenschaft.
- Die CSS-Eigenschaften {{ cssxref("gradient/linear-gradient") }} und {{ cssxref("gradient/repeating-linear-gradient") }} wurden aktualisiert, um die neue `to`-Syntax und den _magischen Ecke_-Algorithmus zu unterstützen. Dadurch kann eine präzise Farbe an den Ecken einer mit einem Verlauf gefüllten Box festgelegt werden.
- Die Behandlung der {{ cssxref("text-overflow") }}-Eigenschaft in Fällen, in denen die Box auf beiden Seiten überläuft und die `text-overflow`-Eigenschaft so eingestellt ist, dass sie nur auf einer Seite überläuft, [wurde korrigiert](/de/docs/Web/CSS/text-overflow#gecko_notes).
- Die Behandlung der CSS-Eigenschaft {{ cssxref("position") }} auf Elementen innerhalb von positionierten {{ HTMLElement("table") }}-Elementen [wurde behoben](/de/docs/Web/CSS/position#gecko_notes). **Diese Änderung wirkt sich auf das Layout von Seiten aus; wir entsprechen jedoch jetzt der CSS-Spezifikation und anderen Browsern, sodass dies einfach zu beheben sein sollte.**
- Die Margenzusammenführung um {{ HTMLElement("table") }}-Elemente wurde korrigiert, um der CSS-Spezifikation zu entsprechen. Zuvor wurden die Ränder von Tabellelementen nicht mit anderen angrenzenden Elementen zusammengeführt, was zu einer fehlerhaften Darstellung führte. **Diese Änderung wirkt sich auf das Layout von Seiten aus; wir entsprechen jedoch jetzt der CSS-Spezifikation und anderen Browsern, sodass dies einfach zu beheben sein sollte.**

### SVG

- Das {{ SVGElement("mask") }}-Element wurde aktualisiert, um sowohl sRGB als auch linearRGB zu unterstützen und verwendet nun standardmäßig sRGB, um der neuesten Überarbeitung der SVG 1.1-Spezifikation zu entsprechen.

### Netzwerk

- Der HTTP-Header `Accept-Charset` wird in HTTP-Anfragen nicht mehr gesendet.
  Ohne ihn sollten Server antworten, indem sie UTF-8 senden.

### Entwicklertools

- Das [`console`](/de/docs/Web/API/console)-Objekt hat zwei neue Methoden, [`console.time()`](/de/docs/Web/API/console/time_static) und [`console.timeEnd()`](/de/docs/Web/API/console/timeEnd_static), die verwendet werden können, um Timer auf einer Seite zu setzen.
- Der neue [Page Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) wurde hinzugefügt und bietet eine hervorragende Möglichkeit, das HTML und CSS hinter Ihren Inhalten zu untersuchen und zu manipulieren.

## Änderungen für Mozilla- und Add-on-Entwickler

Für einen Überblick über mögliche Probleme, die beim Aktualisieren Ihrer Add-ons zur Unterstützung von Firefox 10 auftreten können, siehe [Aktualisieren von Add-ons für Firefox 10](/de/docs/Mozilla/Firefox/Updating_add-ons_for_Firefox_10).

> [!NOTE]
> Der alte Daten typ [`PRBool`](/de/docs/PRBool) wurde eingestellt! Überall in der Dokumentation, wo darauf verwiesen wird, wird jetzt der Standard-C++-`bool`-Typ verwendet. Die Dokumentation wird in Zukunft aktualisiert, aber vorerst sollten Sie dies im Hinterkopf behalten.

### Manifeste

- Unterstützung für [`<em:strictCompatibility>`](/de/docs/Install_Manifests#strictcompatibility) wurde dem Installationsmanifest hinzugefügt. Es ermöglicht Add-on-Autoren, sich für die Prüfung der maximalen Version ihrer Erweiterung zu entscheiden. Wenn auf `true` gesetzt, wird das Add-on deaktiviert, wenn die Anwendungsversion größer als `<em:maxVersion>` ist. Standardmäßig sind Add-ons in Firefox 10 unabhängig von ihrer angegebenen maximalen Version kompatibel. Dieses Flag überschreibt diese Präferenz. Sie sollten dies setzen, wenn Ihr Add-on Dinge tut, die wahrscheinlich durch Firefox-Updates beschädigt werden, **aber nicht**, wenn Ihr Add-on eine Binärkomponente hat, da solche Add-ons immer streng überprüft werden (denken Sie daran, dass Binärkomponenten immer für jede Hauptversion von Firefox neu kompiliert werden müssen).
- Wenn Sie zum alten Verhalten zurückkehren möchten — das heißt, zur strikten Kompatibilitätsüberprüfung für alle Add-ons, unabhängig vom Wert des `strictCompatibility`-Flags in ihren Manifesten, können Sie die Präferenz `extensions.strictCompatibility` auf `true` setzen.

### XUL

- Bootstrap-Add-ons mit einer `chrome.manifest`-Datei haben jetzt die Manifestdatei automatisch registriert. Siehe den Abschnitt [Hinzufügen einer Benutzeroberfläche mit einer chrome.manifest](/de/docs/Extensions/Bootstrapped_extensions#Adding_user_interface_with_a_chrome.manifest) für Details.

### XPConnect

- Mehrere neue Eigenschaften und Methoden wurden zu `Components.utils` hinzugefügt, die Zugriff auf verschiedene debuggingbezogene Informationen gewähren.

### Schnittstellenänderungen

- Die Schnittstellen `mozISpellCheckingEngine` und `nsIEditorSpellCheck` wurden aktualisiert, um neustartlose Add-ons zu ermöglichen, dem Rechtschreibprüfer Wörterbücher hinzuzufügen.
- Das Attribut `nsIBrowserHistory.lastPageVisited` wurde entfernt.
- Die Schnittstelle `nsIDocumentViewer` wurde in `nsIContentViewer` zusammengeführt.
- Die Schnittstelle `nsIURIFixup` hat ein neues Feld, `FIXUP_FLAG_USE_UTF8`, wodurch Sie ihm mitteilen können, UTF-8 anstelle des Plattformzeichensatzes zu verwenden, wenn Konvertierungen durchgeführt werden.

### Plug-in-Änderungen

- Die neue Variable `NPNVdocumentOrigin` wurde hinzugefügt; diese gibt den Ursprung des Dokuments zurück und ist sicherer als [`window.location`](/de/docs/Web/API/Window/location).

### Änderungen im Build-System

- Die Build-Option `--disable-rdf`, die es tatsächlich unmöglich machte, erfolgreich zu builden, wurde entfernt. Die Arbeiten, die RDF-Unterstützung vollständig zu entfernen, laufen weiter, aber derzeit benötigt XUL es noch, um zu funktionieren. Siehe [Firefox-Bug 559505](https://bugzil.la/559505) für den Fortschritt beim Entfernen der letzten RDF-Überbleibsel.
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
