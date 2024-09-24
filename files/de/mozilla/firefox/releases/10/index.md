---
title: Firefox 10 für Entwickler
slug: Mozilla/Firefox/Releases/10
l10n:
  sourceCommit: 33cada2d06f8d0cd009d9d5348de6e3165bba67f
---

{{FirefoxSidebar}}

Firefox 10 wurde am 31. Januar 2012 veröffentlicht. Dieser Artikel bietet Informationen über die neuen Funktionen und behobenen Hauptfehler in dieser Version sowie Links zu detaillierteren Dokumentationen für Webentwickler und Add-on-Entwickler.

> [!NOTE]
> Firefox 10 ist die erste Version dieses Browsers mit zwei Ziffern. Dies kann zu Problemen mit einigen UA-Sniffing-Skripten führen. Überprüfen Sie diese sowie solche, die in eingebetteter Drittanbietersoftware enthalten sind, die Sie auf Ihren Seiten verwenden, wie Bibliotheken. Für mehr Informationen darüber, sehen Sie sich den [Artikel über Firefox mit zwei Ziffern auf hack.mozilla.org](https://hacks.mozilla.org/2012/01/firefox-goes-2-digit-time-to-check-your-ua-sniffing-scripts/) an.

## Änderungen für Webentwickler

### HTML

- Das neue HTML5-Element {{ HTMLElement("bdi") }} zur bidirektionalen Isolierung, welches die Isolierung von Textteilen mit unterschiedlicher Richtung ermöglicht, wurde implementiert. Dies ist besonders nützlich, wenn Texte mit unbekannter Richtung präsentiert werden müssen, beispielsweise aus einer Datenbank, inmitten von Texten mit bekannter und potenziell unterschiedlicher Richtung.
- Sie können jetzt ein Fragment von "oben" für das [`href`](/de/docs/Web/HTML/Element/a#href)-Attribut angeben, um einen Link zum Anfang der Seite zu erstellen. Dies funktionierte früher, verschwand dann für eine Weile und ist jetzt wieder da, um mit der HTML5-Spezifikation kompatibel zu sein. Beispiel: `<a href="#top">Zurück zum Anfang der Seite</a>`.

### JavaScript

- Die Methode `WeakMap.set()` gibt jetzt `undefined` zurück, anstatt sich selbst.
- Ein Fehler in der Behandlung regulärer Ausdrücke in Firefox 7 wurde behoben. Siehe [Firefox-Bug 683838](https://bugzil.la/683838) für Details.
- Sie können die veraltete EcmaScript für XML (E4X)-Syntax im [ECMAScript 5 strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) (d. h. nach `"use strict;"`) nicht mehr verwenden.

### DOM

#### DOM3 Events

- Die DOM-Ereignismethode [`event.stopImmediatePropagation`](/de/docs/Web/API/Event/stopImmediatePropagation) wurde implementiert.
- Die Mausereignisse `mouseenter` und `mouseleave` wurden implementiert.

#### DOM4

- Das Attribut {{ domxref("document.xmlVersion") }} (welches nur lesbar, aber nicht änderbar war) wurde entfernt, da es in der DOM4-Spezifikation veraltet ist. Der Artikel zu {{ domxref("document.xmlVersion") }} schlägt jetzt eine Möglichkeit vor, zu erkennen, ob das Dokument HTML oder XML ist, ohne diese Eigenschaft zu verwenden.
- Das Attribut `document.xmlStandalone` wurde entfernt, da es in der DOM4-Spezifikation veraltet ist.
- Das Attribut {{ domxref("document.xmlEncoding") }} wurde entfernt, da es in der DOM4-Spezifikation veraltet ist.
- Das Attribut `text.isElementContentWhiteSpace` wurde entfernt, da es in der DOM4-Spezifikation veraltet ist.
- Die Methode `text.replaceWholeText` wurde entfernt, da sie in der DOM4-Spezifikation veraltet ist.
- Die Methode {{ domxref("node.isSameNode") }} wurde entfernt, da sie in der DOM4-Spezifikation veraltet ist. Statt `node1.isSameNode(node2)` können Sie den `===` Operator verwenden, wie folgt: `node1 === node2`.

#### Page Visibility API

- Die [Page Visibility API](/de/docs/Web/API/Page_Visibility_API) wurde implementiert (mit Präfix): `document.mozHidden`, `document.mozVisibilityState` sind verfügbar und das Ereignis `mozvisibilitychanged` wird gesendet, wenn der Zustand geändert wird.

#### Vollbild-API

- Unterstützung für {{ domxref("Document/fullscreenEnabled") }} wurde hinzugefügt.
- Die neue {{ cssxref(":-moz-full-screen-ancestor") }} Eigenschaft wurde hinzugefügt. Damit können Sie Elemente abgleichen, die Vorfahren eines Elements im Vollbildmodus sind.

#### Batterie-API

- Experimentelle Unterstützung für {{ domxref("window.navigator.mozBattery") }} wurde hinzugefügt (kann aktiviert werden, indem die Präferenz `dom.battery.enabled` auf `true` gesetzt wird und wird ab Firefox 11 standardmäßig aktiviert).

#### Canvas

- Die Methode [`createPattern()`](/de/docs/Web/API/CanvasRenderingContext2D#createpattern%28%29) wirft jetzt eine Ausnahme, wenn eine Quelle mit Nullgröße angegeben wird.
- Wenn Sie einen nicht-endlichen Wert für einen der numerischen Parameter von [`putImageData()`](/de/docs/Web/API/CanvasRenderingContext2D#putimagedata%28%29) verwenden, wird der Aufruf jetzt still ignoriert, anstatt eine Ausnahme zu werfen, gemäß der Spezifikation.

#### WebGL

- Firefox 10 unterstützt jetzt die [`OES_standard_derivatives`](https://registry.khronos.org/webgl/extensions/OES_standard_derivatives/) Erweiterung.
- [Neue Präferenzen wurden hinzugefügt](/de/docs/Web/API/WebGL_API#webgl_debugging_and_testing), um zu helfen, WebGL-Code für die Kompatibilität mit minimal fähigen Geräten auf Ihrer vollen Entwicklungsplattform zu testen.

#### Web Workers

- Das Attribut `XMLHttpRequest.responseType` und `XMLHttpRequest.response` stehen jetzt innerhalb von [Workers](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers#section_2) zur Verfügung.
- Der [`Worker()`](/de/docs/Web/API/Worker#worker)-Konstruktor akzeptiert jetzt [Data-URLs](/de/docs/Web/URI/Schemes/data).

#### IndexedDB

Große Fortschritte wurden gemacht, um IndexedDB auf den neuesten Entwurf der Spezifikation zu aktualisieren. Diese Bemühungen werden in Firefox 11 fortgesetzt.

- Die Methoden [`IDBIndex.count()`](/de/docs/Web/API/IDBIndex#count) und [`IDBObjectStore.count()`](/de/docs/Web/API/IDBObjectStore#count) wurden hinzugefügt.
- Die Methode [`IDBCursor.advance()`](/de/docs/Web/API/IDBCursor#advance) wurde hinzugefügt.
- Wenn ein unbekannter optionaler Parameter in [`IDBObjectStore.createIndex()`](/de/docs/Web/API/IDBObjectStore#createindex) oder [`IDBDatabase.createObjectStore()`](/de/docs/Web/API/IDBDatabase#createobjectstore) auftritt, wird von Gecko keine Ausnahme mehr ausgelöst, sondern er ignoriert ihn.
- Bei Aufruf von [`IDBTransaction.abort()`](/de/docs/Web/API/IDBTransaction#abort%28%29) haben alle ausstehenden [`IDBRequest`](/de/docs/Web/API/IDBRequest) ihren `errorCode` auf `ABORT_ERROR` gesetzt.
- Die Methoden [`IDBObjectStore.delete()`](/de/docs/Web/API/IDBObjectStore/delete) und [`IDBCursor.delete()`](/de/docs/Web/API/IDBCursor/delete) setzen jetzt das `result`-Attribut des zurückgegebenen [`IDBRequest`](/de/docs/Web/API/IDBRequest) auf `undefined`.
- Die Methode `IDBDatabase.setVersion()` wurde entfernt, da sie aus der neuesten Spezifikation entfernt wurde. Die Version der Datenbank wird durch die Methode [`IDBFactory.open()`](/de/docs/Web/API/IDBFactory#open) angegeben, die aktualisiert wurde, und der `onupgradeneeded`-Callback ermöglicht das Upgrade des Datenbankschemas. Die Version selbst wurde von einem `DOMString` in ein `unsigned long long` geändert. Das `IDBVersionChangeRequest`-Interface wurde entfernt und durch das neue [`IDBOpenDBRequest`](/de/docs/Web/API/IDBOpenDBRequest)-Interface ersetzt.
- Beim Öffnen einer Datenbank mit {{domxref("IDBFactory.open()")}}: Wenn der `version`-Parameter nicht angegeben ist und die Datenbank nicht existiert, wird sie mit einer Version von `1` erstellt.
- Die Methode [`IDBFactory.deleteDatabase()`](/de/docs/Web/API/IDBFactory#deletedatabase%28%29) wurde hinzugefügt.
- Methoden, die über einen {{domxref("IDBKeyRange")}} suchen (wie {{domxref("IDBObjectStore.openCursor")}} und {{domxref("IDBIndex.getKey")}}), können entweder einen einzelnen Schlüssel oder einen Schlüsselbereich akzeptieren.

#### Sonstiges

- Wenn der richtige MIME-Typ übergeben wird, `image/svg+xml`, [erstellt der `DOMParser` jetzt ein `SVGDocument`](/de/docs/Web/API/DOMParser#parsing_a_svg_document), wenn er einen String mit SVG erhält.
- In der Vergangenheit, wenn {{ domxref("element.setAttribute()") }} Ganzzahlen parste, meldete es einen Fehler, wenn die Ganzzahl nicht-numerische Zeichen enthielt (zum Beispiel "42foo"). Jetzt wird dies korrekt als die Zahl 42 abgeschnitten, in Übereinstimmung mit der Spezifikation.
- Die ESC-Taste führt nicht mehr fälschlicherweise dazu, dass der {{ domxref("Element.keydown_event", "onkeydown") }} Handler fälschlicherweise aufgerufen wird.
- Das `NameList`-Interface wird nicht mehr implementiert; es hatte zuvor eine Implementierung ohne Möglichkeit, tatsächlich darauf zuzugreifen.
- Die Methode {{ domxref("document.createProcessingInstruction()") }} funktioniert jetzt sowohl bei HTML-Dokumenten als auch bei XML-Dokumenten. {{ domxref("ProcessingInstruction") }}-Knoten werden weiterhin nur in XML-Dokumenten unterstützt, aber da Knoten zwischen Dokumenten bewegt werden können, ist es hilfreich, sie auch in HTML-Dokumenten erstellen zu können.
- Der `XMLHttpRequest` `responseType` "`moz-json`" [eingeführt in Firefox 9](/de/docs/Mozilla/Firefox/Releases/9#dom) wurde auf den neuesten Entwurf der Spezifikation aktualisiert und ist nicht mehr mit Präfix versehen. Siehe Hinweis in [Firefox-Bug 707142](https://bugzil.la/707142#c13).

### CSS

- CSS 3D-Transformationen werden jetzt unterstützt. Dies umfasst Unterstützung für die {{ cssxref("transform-style") }}, {{ cssxref("perspective") }}, {{ cssxref("perspective-origin") }} und {{ cssxref("backface-visibility") }} Eigenschaften sowie für 3D-Transformationsfunktionen in den {{ cssxref("transform") }} und {{ cssxref("transform-function") }} Eigenschaften. Siehe [Verwendung von CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms#3d_specific_css_properties) für Details.
- Zwei neue Werte für die CSS-Eigenschaft {{ cssxref("unicode-bidi") }} wurden hinzugefügt: `-moz-isolation` und `-moz-plaintext`. Der Wert `-moz-isolation` isoliert, aus einer Perspektive der Richtung, das Element von seiner Umgebung, sodass es eine andere Richtung haben kann. Ein Element mit `unicode-bidi:-moz-isolation` verhält sich wie ein {{ HTMLElement("bdi") }} Element. Der `-moz-plaintext` weist den Browser darauf hin, die Unicode-Browser-Heuristik zu verwenden, um die Richtung zu bestimmen und nicht die CSS-{{ cssxref("direction") }}-Eigenschaft.
- Die CSS {{ cssxref("gradient/linear-gradient") }} und {{ cssxref("gradient/repeating-linear-gradient") }} Eigenschaften wurden aktualisiert, um die neue `to`-Syntax und den _magic corner_ Algorithmus zu unterstützen. Dadurch kann eine präzise Farbe auf der Ecke eines gradientengefüllten Kästchens gegeben werden.
- Die Behandlung der Eigenschaft {{ cssxref("text-overflow") }}, wenn das Kästchen auf beiden Seiten überläuft, während die Eigenschaft `text-overflow` nur auf ein Überlaufverhalten eingestellt ist, [wurde korrigiert](/de/docs/Web/CSS/text-overflow#gecko_notes).
- Die Behandlung der Eigenschaft {{ cssxref("position") }} bei Elementen innerhalb positionierter {{ HTMLElement("table") }} Elemente [wurde behoben](/de/docs/Web/CSS/position#gecko_notes). **Diese Änderung wird das Layout von Seiten beeinflussen; jedoch entsprechen wir nun der CSS-Spezifikation und anderen Browsern, sodass dies leicht zu beheben sein sollte.**
- Die Rand-Kollapsierung rund um {{ HTMLElement("table") }} Elemente wurde korrigiert, um der CSS-Spezifikation zu entsprechen. Zuvor wurden die Ränder der Tabellenelemente nicht mit anderen angrenzenden Elementen kollabiert, was zu einem falschen Layout führte. **Diese Änderung wird das Layout von Seiten beeinflussen; jedoch entsprechen wir nun der CSS-Spezifikation und anderen Browsern, sodass dies leicht zu beheben sein sollte.**

### SVG

- Das {{ SVGElement("mask") }} Element wurde aktualisiert, um sowohl sRGB als auch linearRGB zu unterstützen, und es ist nun standardmäßig auf sRGB gemäß der neuesten Überarbeitung der SVG 1.1-Spezifikation eingestellt.

### Netzwerk

- Der HTTP-`Accept-Charset`-Header wird in HTTP-Anfragen nicht mehr gesendet. In seiner Abwesenheit sollten Server mit der Sendung von UTF-8 antworten.

### Entwicklertools

- Das {{ domxref("console") }} Objekt hat zwei neue Methoden, {{ domxref("console/time_static", "console.time()") }} und {{ domxref("console/timeEnd_static", "console.timeEnd()") }}, die verwendet werden können, um Timer auf einer Seite zu setzen.
- Der neue [Page Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) wurde hinzugefügt, der eine exzellente Möglichkeit bietet, das HTML und CSS hinter Ihrem Inhalt zu untersuchen und zu manipulieren.

## Änderungen für Mozilla- und Add-on-Entwickler

Für einen Überblick über wahrscheinliche Probleme, die beim Aktualisieren Ihrer Add-ons zur Unterstützung von Firefox 10 auftreten können, siehe [Aktualisierung von Add-ons für Firefox 10](/de/docs/Mozilla/Firefox/Updating_add-ons_for_Firefox_10).

> [!NOTE]
> Der alte [`PRBool`](/de/docs/PRBool) Datentyp ist zurückgezogen worden! Überall in der Dokumentation, wo darauf verwiesen wird, wird jetzt der Standard-C++-Datentyp `bool` verwendet. Die Dokumentation wird in Zukunft aktualisiert, aber denken Sie vorerst daran.

### Manifeste

- Unterstützung für [`<em:strictCompatibility>`](/de/docs/Install_Manifests#strictcompatibility) wurde dem Installationsmanifest hinzugefügt. Es ermöglicht Add-on-Autoren, zu wählen, ob die maximale Version ihrer Erweiterung überprüft wird. Wenn auf `true` gesetzt, wird das Add-on deaktiviert, wenn die Anwendungs-Version größer als `<em:maxVersion>` ist. Firefox 10 geht davon aus, dass Add-ons kompatibel sind, unabhängig von ihrer angegebenen maximalen Version. Diese Flagge überschreibt diese Präferenz. Sie sollten dies einstellen, wenn Ihr Add-on Dinge tut, die durch Firefox-Updates wahrscheinlich gebrochen werden, **aber nicht**, wenn Ihr Add-on eine Binärkomponente hat, da solche Add-ons immer streng überprüft werden (denken Sie daran, dass Binärkomponenten immer für jede Hauptversion von Firefox neu kompiliert werden müssen).
- Wenn Sie zum alten Verhalten zurückkehren möchten - das heißt, zur strikten Kompatibilitätsüberprüfung für alle Add-ons, unabhängig vom Wert des `strictCompatibility`-Flags in ihren Manifesten, können Sie die Präferenz `extensions.strictCompatibility` auf `true` setzen.

### XUL

- Bootstrap-Add-ons, die eine `chrome.manifest`-Datei verwenden, haben jetzt die Manifestdatei automatisch registriert. Details finden Sie im Abschnitt [Hinzufügen einer Benutzeroberfläche mit einer chrome.manifest](/de/docs/Extensions/Bootstrapped_extensions#Adding_user_interface_with_a_chrome.manifest).

### XPConnect

- Mehrere neue Eigenschaften und Methoden wurden zu `Components.utils` hinzugefügt, die Zugriff auf verschiedene Debugging-bezogene Informationen gewähren.

### Schnittstellenänderungen

- Die Schnittstellen `mozISpellCheckingEngine` und `nsIEditorSpellCheck` wurden aktualisiert, um es neustartlosen Add-ons zu ermöglichen, Wörterbücher zum Rechtschreibprüfer hinzuzufügen.
- Das Attribut `nsIBrowserHistory.lastPageVisited` wurde entfernt.
- Die Schnittstelle `nsIDocumentViewer` wurde in `nsIContentViewer` zusammengeführt.
- Die Schnittstelle `nsIURIFixup` hat ein neues Flag, `FIXUP_FLAG_USE_UTF8`, welches es Ihnen ermöglicht, zu sagen, dass UTF-8 anstelle des Plattform-Zeichensatzes bei Konvertierungen verwendet werden soll.

### Plug-in-Änderungen

- Die neue Variable `NPNVdocumentOrigin` wurde hinzugefügt; diese gibt den Dokumentursprung zurück und ist sicherer als {{ domxref("window.location") }}.

### Änderungen am Build-System

- Die Build-Option `--disable-rdf`, die es tatsächlich unmöglich machte, erfolgreich zu bauen, wurde entfernt. Es wird weiterhin daran gearbeitet, RDF-Unterstützung vollständig entfernen zu können, aber derzeit benötigt XUL es noch für die Funktion. Siehe [Firefox-Bug 559505](https://bugzil.la/559505) für Fortschritte beim Entfernen der letzten Überreste von RDF-Anforderungen.
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
