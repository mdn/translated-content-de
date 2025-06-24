---
title: Firefox 122 für Entwickler
slug: Mozilla/Firefox/Releases/122
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 122, die Entwickler betreffen. Firefox 122 wurde am [23. Januar 2024](https://whattrainisitnow.com/release/?version=122) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- {{HTMLElement("hr")}}-Elemente sind nun als Kinder von {{HTMLElement("select")}}-Elementen erlaubt. Dies ist eine neue Funktion, welche die Lesbarkeit von Auswahllisten mit vielen Optionen verbessert. ([Firefox Bug 1830909](https://bugzil.la/1830909)).
- Das HTML-Attribut `type` hat keine Wirkung mehr, wenn es auf `none`, `disc`, `circle` oder `square` in {{HTMLElement("ol")}} gesetzt ist und hat ebenfalls keine Wirkung mehr, wenn es auf `1`, `a`, `A`, `i` oder `I` in {{HTMLElement("ul")}} gesetzt ist. Da `type` ein veraltetes Attribut für `<ul>` und `<ol>`-Listen ist, sollten diese stattdessen mit der {{CSSxref("list-style-type")}} CSS-Eigenschaft gestylt werden. ([Firefox Bug 1868087](https://bugzil.la/1868087)).

### CSS

- Die CSS-Eigenschaft {{cssxref("offset-position")}} ist jetzt standardmäßig verfügbar. Sie definiert die Anfangsposition eines Elements auf einem Pfad. ([Firefox Bug 1598152](https://bugzil.la/1598152))

- Die verschiedenen Methoden zur Definition eines CSS-{{cssxref("offset-path")}} — einschließlich [`<basic-shape>`](/de/docs/Web/CSS/offset-path#basic-shape), [`<coord-box>`](/de/docs/Web/CSS/offset-path#coord-box) und [`url()`](/de/docs/Web/CSS/offset-path#url) — sind jetzt standardmäßig aktiviert. ([Firefox Bug 1598159](https://bugzil.la/1598159))

- Die CSS-Funktion {{cssxref("ray")}} ist jetzt standardmäßig verfügbar. Sie können diese Funktion verwenden, um einen {{cssxref("offset-path")}} als Liniensegment zu definieren, das von einer {{cssxref("offset-position")}} ausgeht und sich in Richtung des angegebenen Winkels erstreckt. ([Firefox Bug 1598151](https://bugzil.la/1598151))

- Die Eigenschaften {{CSSxref("clip-path")}} und {{CSSxref("offset-path")}} akzeptieren nun [`rect()`](/de/docs/Web/CSS/basic-shape/rect) und [`xywh()`](/de/docs/Web/CSS/basic-shape/xywh) Formfunktionen. Diese {{CSSXref("basic-shape")}} Werte erlauben das Zuschneiden und Versetzen von Elementen mit einem Rechteck, das durch den Abstand vom Rand des Elements (`rect()`) oder durch Koordinaten und Größe (`xywh()`) definiert ist. ([Firefox Bug 1868722](https://bugzil.la/1868722)).

### JavaScript

- Die Methoden {{jsxref("ArrayBuffer.prototype.transfer()")}} und {{jsxref("ArrayBuffer.prototype.transferToFixedLength()")}} können jetzt verwendet werden, um [Eigentum zu übertragen](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer#transferring_arraybuffers) von Speicher von einem {{jsxref("ArrayBuffer")}} zu einem anderen. Nach der Übertragung wird der ursprüngliche Puffer von seinem ursprünglichen Speicher getrennt und ist daher unbrauchbar; der Status kann mit {{jsxref("ArrayBuffer.prototype.detached")}} überprüft werden. (Weitere Details finden Sie in [Firefox Bug 1865103](https://bugzil.la/1865103)).

- Um die Parität mit anderen Browsern zu gewährleisten, berücksichtigen [`Date.parse()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/parse) und der [`Date()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/Date) nur die ersten drei Buchstaben des angegebenen Monats, wenn [nicht-standardisierte Datumsstrings](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/parse#non-standard_date_strings) geparst werden. Bisher wurden nur gekürzte Werte des vollständigen Monatsnamens mit drei oder mehr Zeichen akzeptiert (Weitere Details finden Sie in [Firefox Bug 1862910](https://bugzil.la/1862910)).

### SVG

#### Entfernungen

- Unterstützung für `data:`-URLs in SVG-`<use>`-Elementen und über die [`SVGUseElement`](/de/docs/Web/API/SVGUseElement)-Schnittstelle wurde entfernt, um {{Glossary("Cross-site_scripting", "XSS")}}-Angriffe zu verhindern. Die veraltete Funktionalität kann durch Setzen der Einstellung `svg.use-element.data-url-href.allowed` auf `true` wieder aktiviert werden, obwohl dies aus Sicherheitsgründen nicht empfohlen wird ([Firefox Bug 1806964](https://bugzil.la/1806964)).

### APIs

- Die [LargestContentfulPaint API](/de/docs/Web/API/LargestContentfulPaint) wird jetzt unterstützt. Diese API ist Teil der [Performance APIs](/de/docs/Web/API/Performance_API) und liefert Zeitinformationen über den größten Bild- oder Textanstrich, bevor Benutzer mit einer Webseite interagieren ([Firefox Bug 1866266](https://bugzil.la/1866266)).

#### DOM

- Die Methode [`HTMLSelectElement.showPicker()`](/de/docs/Web/API/HTMLSelectElement/showPicker) wird jetzt unterstützt und ermöglicht das programmatische Starten des Browser-Pickers für ein {{HTMLElement("select")}}-Element, wenn er durch Benutzerinteraktion ausgelöst wird ([Firefox Bug 1865207](https://bugzil.la/1865207)).

#### Entfernungen

- Unterstützung für die CSS-Eigenschaft [`-moz-user-focus`](/de/docs/Web/CSS/-moz-user-focus) wurde entfernt ([Firefox Bug 1871745](https://bugzil.la/1871745) und [Firefox Bug 1868552](https://bugzil.la/1868552)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Ein Bug wurde behoben, der verhinderte, dass [Perform Actions](https://w3c.github.io/webdriver/#perform-actions) korrekte Doppel- und andere Mehrklick-Ereignisse für die `mouse` Eingabequelle synthetisierte ([Firefox Bug 1864614](https://bugzil.la/1864614)). Zusätzlich werden diese Ereignisse nur dann ausgegeben, wenn sich die tatsächliche Mausposition seit der letzten Klickaktion nicht verändert hat ([Firefox Bug 1681076](https://bugzil.la/1681076)).
- Die Definitionen für die `Pause`- und `Equal`-Tasten (Ziffernblock) wurden aktualisiert, um mit der WebDriver-Spezifikation übereinzustimmen ([Firefox Bug 1863687](https://bugzil.la/1863687)).

#### WebDriver BiDi

- Die Serialisierung von `WindowProxy` Remote-Objekten funktioniert jetzt auch korrekt für Out-of-Process-Iframes ([Firefox Bug 1867667](https://bugzil.la/1867667)).
- Der Befehl [browsingContext.setViewport](https://w3c.github.io/webdriver-bidi/#command-browsingContext-setViewport) unterscheidet jetzt zwischen `undefined` und `null` als Werte für das `viewport` Argument. Ist es auf `undefined` gesetzt, bedeutet das, dass das Viewport unverändert bleiben soll, während die Verwendung von `null` es auf seine ursprünglichen Dimensionen zurücksetzt ([Firefox Bug 1865618](https://bugzil.la/1865618)).
- Unterstützung für den Befehl [browsingContext.traverseHistory](https://w3c.github.io/webdriver-bidi/#command-browsingContext-traverseHistory) wurde eingeführt, wodurch Navigierungen rückwärts und vorwärts in der Browserhistorie ermöglicht werden ([Firefox Bug 1841018](https://bugzil.la/1841018)).
- Ein Bug in allen unterstützten Netzwerereignissen wurde behoben, bei dem die `context`-ID konstant den obersten Browsing-Kontext meldete, selbst wenn die Navigation innerhalb eines Iframes stattfand ([Firefox Bug 1869735](https://bugzil.la/1869735)).

#### Marionette

- Ein Bug mit [Get Element Text](https://w3c.github.io/webdriver/#dfn-get-element-text) wurde behoben, bei dem der Befehl fälschlicherweise einen leeren Text zurückgab, wenn sich das Element innerhalb eines Slots des ShadowRoot befand ([Firefox Bug 1824664](https://bugzil.la/1824664)).

## Experimentelle Web-Features

Diese Features sind neu in Firefox 122 enthalten, aber standardmäßig deaktiviert. Um sie auszuprobieren, suchen Sie die entsprechende Einstellung auf der `about:config`-Seite und setzen Sie sie auf `true`. Weitere solcher Features finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).

- **Deklarativer Shadow DOM:** `dom.webcomponents.shadowdom.declarative.enabled`.

  Das {{htmlelement("template")}}-Element unterstützt nun ein `shadowrootmode`-Attribut, das auf `open` oder `closed` gesetzt werden kann, dieselben Werte wie die `mode`-Option der Methode [`attachShadow()`](/de/docs/Web/API/Element/attachShadow). Es ermöglicht die deklarative Erstellung eines Shadow DOM-Unterbaums. ([Firefox Bug 1712140](https://bugzil.la/1712140))

- **Clonable Option und Eigenschaft für Shadow DOM.**

  - Die Methode [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) unterstützt jetzt die `clonable`-Boolesche Option, die angibt, ob die erstellte Shadow-Root klonbar ist: Der Standardwert ist `false`, aber wenn er auf `true` gesetzt wird, wird der Shadow-Host, der mit [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode) oder [`Document.importNode()`](/de/docs/Web/API/Document/importNode) geklont wird, die Shadow-Root in der Kopie enthalten.
  - Die Schnittstelle [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) unterstützt jetzt die schreibgeschützte Eigenschaft [`clonable`](/de/docs/Web/API/ShadowRoot/clonable). Sie gibt `true` zurück, wenn die Shadow-Root klonbar ist, und `false` andernfalls. Sie gibt immer `true` für Shadow-Roots zurück, die über deklaratives Shadow DOM erstellt wurden.

  Wenn die Shadow-Root über deklaratives Shadow DOM erstellt wird, ist die `clonable`-Option standardmäßig auf `true` gesetzt und die `clonable`-Eigenschaft gibt `true` zurück. ([Firefox Bug 1712140](https://bugzil.la/1868428))

- **Popover API:** `dom.element.popover.enabled`.

  Die Anzeige von Popovers über Seiteninhalten wird jetzt über HTML-Attribute oder die JavaScript-API unterstützt, einschließlich des Stylings mit der CSS-Pseudoklasse [`:popover-open`](/de/docs/Web/CSS/:popover-open) und erweiterter Unterstützung für das Pseudoelement [`::backdrop`](/de/docs/Web/CSS/::backdrop). Siehe die [Popover API](/de/docs/Web/API/Popover_API) Referenz für mehr Details. ([Firefox Bug 1823757](https://bugzil.la/1823757))

- **Zwischenablage lesen und schreiben:** `dom.events.asyncClipboard.clipboardItem`, `dom.events.asyncClipboard.readText` und `dom.events.asyncClipboard.writeText`.

  Die asynchrone [Clipboard API](/de/docs/Web/API/Clipboard_API) wird jetzt vollständig unterstützt, einschließlich der Methoden [`read()`](/de/docs/Web/API/Clipboard/read), [`readText()`](/de/docs/Web/API/Clipboard/readText) und [`write()`](/de/docs/Web/API/Clipboard/write) sowie der Schnittstelle [`ClipboardItem`](/de/docs/Web/API/ClipboardItem). Ein Kontextmenü zum Einfügen wird für den Benutzer angezeigt, um zu bestätigen, wenn Zwischenspeicherdaten gelesen werden, die nicht von der Seite des gleichen Ursprungs bereitgestellt werden. ([Firefox Bug 1809106](https://bugzil.la/1809106))

- **`Intl.Segmenter`:** standardmäßig nur in Firefox Nightly aktiviert.

  Das {{jsxref("Intl.Segmenter")}}-Objekt ermöglicht die genaue, lokalitätssensitive Textsegmentierung eines Strings. Zum Beispiel, um einen Text in Worte in einer Sprache zu teilen, die keine Leerzeichen zur Worttrennung verwendet: `Intl.Segmenter("ja-JP", { granularity: "word" })`. ([Firefox Bug 1423593](https://bugzil.la/1423593))

## Ältere Versionen

{{Firefox_for_developers}}
