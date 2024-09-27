---
title: Firefox 122 für Entwickler
slug: Mozilla/Firefox/Releases/122
l10n:
  sourceCommit: d681d0262045649aefa02efb937ff5f22b6e3b2a
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 122, die Entwickler betreffen. Firefox 122 wurde am [23. Januar 2024](https://whattrainisitnow.com/release/?version=122) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- {{HTMLElement("hr")}}-Elemente sind nun als Kinder von {{HTMLElement("select")}}-Elementen erlaubt. Dies ist eine neue Funktion, die die Lesbarkeit von Auswahllisten mit vielen Optionen verbessert. ([Firefox Bug 1830909](https://bugzil.la/1830909)).
- Das HTML-Attribut `type` hat keine Wirkung mehr, wenn es in {{HTMLElement("ol")}} auf `none`, `disc`, `circle` oder `square` und in {{HTMLElement("ul")}} auf `1`, `a`, `A`, `i` oder `I` gesetzt wird. Da `type` ein veraltetes Attribut für `<ul>`- und `<ol>`-Listen ist, sollten diese stattdessen mit der CSS-Eigenschaft {{CSSxref("list-style-type")}} gestylt werden. ([Firefox Bug 1868087](https://bugzil.la/1868087)).

### CSS

- Die CSS-Eigenschaft {{cssxref("offset-position")}} ist jetzt standardmäßig verfügbar. Sie definiert die Anfangsposition eines Elements auf einem Pfad. ([Firefox Bug 1598152](https://bugzil.la/1598152))

- Die verschiedenen Methoden zur Definition eines CSS-{{cssxref("offset-path")}} — einschließlich [`<basic-shape>`](/de/docs/Web/CSS/offset-path#basic-shape), [`<coord-box>`](/de/docs/Web/CSS/offset-path#coord-box) und [`url()`](/de/docs/Web/CSS/offset-path#url) — sind nun standardmäßig aktiviert. ([Firefox Bug 1598159](https://bugzil.la/1598159))

- Die CSS-Funktion {{cssxref("ray")}} ist jetzt standardmäßig verfügbar. Sie können diese Funktion verwenden, um einen {{cssxref("offset-path")}} als Liniensegment zu definieren, das von einer {{cssxref("offset-position")}} ausgeht und sich in die Richtung des angegebenen Winkels erstreckt. ([Firefox Bug 1598151](https://bugzil.la/1598151))

- Die {{CSSxref("clip-path")}}- und {{CSSxref("offset-path")}}-Eigenschaften akzeptieren nun die Formfunktionen [`rect()`](/de/docs/Web/CSS/basic-shape/rect) und [`xywh()`](/de/docs/Web/CSS/basic-shape/xywh). Diese {{CSSXref("basic-shape")}}-Werte ermöglichen das Clipping und Offsetting von Elementen mit einem Rechteck, das durch den Abstand vom Rand des Elements (`rect()`) oder durch Koordinaten und Größe (`xywh()`) definiert ist. ([Firefox Bug 1868722](https://bugzil.la/1868722)).

### JavaScript

- Die Methoden {{jsxref("ArrayBuffer.prototype.transfer()")}} und {{jsxref("ArrayBuffer.prototype.transferToFixedLength()")}} können jetzt verwendet werden, um das [Eigentum zu übertragen](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer#transferring_arraybuffers) von einem {{jsxref("ArrayBuffer")}} zu einem anderen. Nach der Übertragung wird der ursprüngliche Puffer von seinem ursprünglichen Speicher getrennt und ist daher nicht mehr verwendbar; der Status kann mit {{jsxref("ArrayBuffer.prototype.detached")}} überprüft werden. (Siehe [Firefox Bug 1865103](https://bugzil.la/1865103) für weitere Details.)

- Zur Angleichung an andere Browser akzeptieren [`Date.parse()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/parse) und der [`Date()`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/Date) nur die ersten drei Buchstaben des angegebenen Monats, wenn [nicht-standardmäßige Datumsstrings](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/parse#non-standard_date_strings) geparst werden. Bisher wurden nur abgeschnittene Werte des vollständigen Monatsnamens mit drei oder mehr Zeichen akzeptiert (siehe [Firefox Bug 1862910](https://bugzil.la/1862910) für mehr Details).

### SVG

#### Entfernungen

- Unterstützung für `data:`-URLs in SVG `<use>`-Elementen und über die [`SVGUseElement`](/de/docs/Web/API/SVGUseElement)-Schnittstelle wurde entfernt, um [XSS](/de/docs/Glossary/Cross-site_scripting)-Angriffe zu verhindern. Die alte Funktionalität kann durch Setzen der `svg.use-element.data-url-href.allowed`-Präferenz auf `true` wieder aktiviert werden, obwohl dies aus Sicherheitsgründen nicht empfohlen wird ([Firefox Bug 1806964](https://bugzil.la/1806964)).

### APIs

- Die [LargestContentfulPaint API](/de/docs/Web/API/LargestContentfulPaint) wird nun unterstützt. Diese API ist Teil der [Performance APIs](/de/docs/Web/API/Performance_API) und liefert Zeitinformationen über das größte Bild oder Text, das vor der Benutzerinteraktion mit einer Webseite gerendert wird ([Firefox Bug 1866266](https://bugzil.la/1866266)).

#### DOM

- Die Methode [`HTMLSelectElement.showPicker()`](/de/docs/Web/API/HTMLSelectElement/showPicker) wird nun unterstützt und ermöglicht es, den Browser-Auswahldialog für ein {{HTMLElement("select")}}-Element programmgesteuert zu starten, wenn er durch Benutzerinteraktion ausgelöst wird ([Firefox Bug 1865207](https://bugzil.la/1865207)).

#### Entfernungen

- Unterstützung für die CSS-Eigenschaft [`-moz-user-focus`](/de/docs/Web/CSS/-moz-user-focus) wurde entfernt ([Firefox Bug 1871745](https://bugzil.la/1871745) und [Firefox Bug 1868552](https://bugzil.la/1868552)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Ein Fehler wurde behoben, der verhinderte, dass [Perform Actions](https://w3c.github.io/webdriver/#perform-actions) korrekt doppelte und andere Mehrklick-Events für die `mouse`-Eingabequelle synthetisiert ([Firefox Bug 1864614](https://bugzil.la/1864614)). Zusätzlich werden diese Events nur dann ausgelöst, wenn sich die tatsächliche Mausposition seit der letzten Klickaktion nicht geändert hat ([Firefox Bug 1681076](https://bugzil.la/1681076)).
- Die Definitionen für die Tasten `Pause` und `Equal` (Nummernblock) wurden aktualisiert, um mit der WebDriver-Spezifikation übereinzustimmen ([Firefox Bug 1863687](https://bugzil.la/1863687)).

#### WebDriver BiDi

- Die Serialisierung von `WindowProxy`-Remoteobjekten funktioniert nun auch korrekt für out-of-process-Iframes ([Firefox Bug 1867667](https://bugzil.la/1867667)).
- Der Befehl [browsingContext.setViewport](https://w3c.github.io/webdriver-bidi/#command-browsingContext-setViewport) unterscheidet nun zwischen `undefined` und `null` als Werte für das `viewport`-Argument. Wenn auf `undefined` gesetzt, bedeutet dies, dass das Viewport unverändert bleiben soll, während die Verwendung von `null` es auf seine ursprünglichen Dimensionen zurücksetzt ([Firefox Bug 1865618](https://bugzil.la/1865618)).
- Unterstützung für den Befehl [browsingContext.traverseHistory](https://w3c.github.io/webdriver-bidi/#command-browsingContext-traverseHistory) wurde eingeführt, der Navigationen zurück und vorwärts in der Browser-Historie ermöglicht ([Firefox Bug 1841018](https://bugzil.la/1841018)).
- Ein Fehler in allen unterstützten Netzwerkereignissen wurde behoben, bei dem die `context`-ID immer den obersten Browsing-Kontext meldete, auch wenn die Navigation innerhalb eines Iframes erfolgte ([Firefox Bug 1869735](https://bugzil.la/1869735)).

#### Marionette

- Ein Fehler mit [Get Element Text](https://w3c.github.io/webdriver/#dfn-get-element-text) wurde behoben, bei dem der Befehl fälschlicherweise einen leeren Text zurückgab, wenn sich das Element in einem Slot von ShadowRoot befand ([Firefox Bug 1824664](https://bugzil.la/1824664)).

## Experimentelle Web-Funktionen

Diese Funktionen sind neu in Firefox 122 implementiert, aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie auf der `about:config`-Seite nach der entsprechenden Präferenz und setzen Sie sie auf `true`. Weitere solche Funktionen finden Sie auf der Seite [Experimentale Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Deklarativer Shadow DOM:** `dom.webcomponents.shadowdom.declarative.enabled`.

  Das {{htmlelement("template")}}-Element unterstützt nun ein `shadowrootmode`-Attribut, das entweder auf `open` oder `closed` gesetzt werden kann, dieselben Werte wie die `mode`-Option der [`attachShadow()`](/de/docs/Web/API/Element/attachShadow)-Methode. Es ermöglicht die Erstellung eines Shadow DOM-Unterbaums deklarativ. ([Firefox Bug 1712140](https://bugzil.la/1712140))

- **Klonbare Option und Eigenschaft für Shadow DOM.**

  - Die Methode [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) unterstützt jetzt die `clonable`-Option, die angibt, ob die erstellte Shadow-Root klonbar ist: Der Standardwert ist `false`, aber wenn auf `true` gesetzt, wird der Shadow-Host, der mit [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode) oder [`Document.importNode()`](/de/docs/Web/API/Document/importNode) geklont wurde, die Shadow-Root in der Kopie enthalten.
  - Die Schnittstelle [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) unterstützt jetzt die [`clonable`](/de/docs/Web/API/ShadowRoot/clonable) schreibgeschützte Eigenschaft. Sie gibt `true` zurück, wenn die Shadow-Root klonbar ist, und `false` andernfalls. Sie gibt immer `true` für Shadow-Roots zurück, die über deklarativen Shadow DOM erstellt wurden.

  Wenn die Shadow-Root über deklarativen Shadow DOM erstellt wird, ist die `clonable`-Option standardmäßig auf `true` gesetzt, und die `clonable`-Eigenschaft gibt `true` zurück. ([Firefox Bug 1712140](https://bugzil.la/1868428))

- **Popover API:** `dom.element.popover.enabled`.

  Die Anzeige von Popovers über Seitenelemente wird nun über HTML-Attribute oder ein JavaScript-API unterstützt, einschließlich der Stilgestaltung mit der CSS-Pseudoklasse [`:popover-open`](/de/docs/Web/CSS/:popover-open) und der erweiterten Unterstützung des Pseudo-Elements [`::backdrop`](/de/docs/Web/CSS/::backdrop). Siehe die [Popover API](/de/docs/Web/API/Popover_API)-Referenz für weitere Einzelheiten. ([Firefox Bug 1823757](https://bugzil.la/1823757))

- **Zwischenablage lesen und schreiben:** `dom.events.asyncClipboard.clipboardItem`, `dom.events.asyncClipboard.readText` und `dom.events.asyncClipboard.writeText`.

  Die asynchrone [Clipboard API](/de/docs/Web/API/Clipboard_API) wird nun vollständig unterstützt, einschließlich der Methoden [`read()`](/de/docs/Web/API/Clipboard/read), [`readText()`](/de/docs/Web/API/Clipboard/readText) und [`write()`](/de/docs/Web/API/Clipboard/write) sowie der Schnittstelle [`ClipboardItem`](/de/docs/Web/API/ClipboardItem). Ein Einfüge-Kontextmenü wird angezeigt, um dem Benutzer die Bestätigung zu ermöglichen, wenn Daten von der gleichen Herkunft nicht zur Verfügung gestellt werden. ([Firefox Bug 1809106](https://bugzil.la/1809106))

- **`Intl.Segmenter`:** standardmäßig nur in Firefox Nightly aktiviert.

  Das {{jsxref("Intl.Segmenter")}}-Objekt ermöglicht die genaue lokalsensitive Textsegmentierung eines Strings. Zum Beispiel, um einen Text in Sprachen zu unterteilen, die keine Leerzeichen zur Trennung verwenden: `Intl.Segmenter("ja-JP", { granularity: "word" })`. ([Firefox Bug 1423593](https://bugzil.la/1423593))

## Ältere Versionen

{{Firefox_for_developers}}
