---
title: Firefox 122 für Entwickler
slug: Mozilla/Firefox/Releases/122
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 122, die Entwickler betreffen. Firefox 122 wurde am [23. Januar 2024](https://whattrainisitnow.com/release/?version=122) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- {{HTMLElement("hr")}}-Elemente sind jetzt als Kinder von {{HTMLElement("select")}}-Elementen erlaubt. Dies ist ein neues Feature, das die Lesbarkeit von Auswahllisten mit vielen Optionen verbessert. ([Firefox-Bug 1830909](https://bugzil.la/1830909)).
- Das `type` HTML-Attribut hat keine Wirkung mehr, wenn es in {{HTMLElement("ol")}} auf `none`, `disc`, `circle` oder `square` gesetzt wird und auch nicht mehr, wenn es in {{HTMLElement("ul")}} auf `1`, `a`, `A`, `i` oder `I` gesetzt wird. Da `type` ein veraltetes Attribut für `<ul>` und `<ol>`-Listen ist, sollten diese stattdessen mit der CSS-Eigenschaft {{CSSxref("list-style-type")}} gestylt werden. ([Firefox-Bug 1868087](https://bugzil.la/1868087)).

### CSS

- Die CSS-Eigenschaft {{cssxref("offset-position")}} ist jetzt standardmäßig verfügbar. Sie definiert die Anfangsposition eines Elements auf einem Pfad. ([Firefox-Bug 1598152](https://bugzil.la/1598152))

- Die verschiedenen Methoden zur Definition eines CSS-{{cssxref("offset-path")}}, einschließlich [`<basic-shape>`](/de/docs/Web/CSS/offset-path#basic-shape), [`<coord-box>`](/de/docs/Web/CSS/offset-path#coord-box) und [`url()`](/de/docs/Web/CSS/offset-path#url), sind nun standardmäßig aktiviert. ([Firefox-Bug 1598159](https://bugzil.la/1598159))

- Die CSS-Funktion {{cssxref("ray")}} ist jetzt standardmäßig verfügbar. Sie können diese Funktion verwenden, um einen {{cssxref("offset-path")}} als Liniensegment zu definieren, das von einer {{cssxref("offset-position")}} ausgeht und in die Richtung des angegebenen Winkels verläuft. ([Firefox-Bug 1598151](https://bugzil.la/1598151))

- Die Eigenschaften {{CSSxref("clip-path")}} und {{CSSxref("offset-path")}} akzeptieren jetzt die Formfunktionen [`rect()`](/de/docs/Web/CSS/basic-shape/rect) und [`xywh()`](/de/docs/Web/CSS/basic-shape/xywh). Diese {{CSSXref("basic-shape")}}-Werte ermöglichen das Beschneiden und Versetzen von Elementen mit einem Rechteck, das durch Abstand von der Elementkante (`rect()`) oder durch Koordinaten und Größe (`xywh()`) definiert ist. ([Firefox-Bug 1868722](https://bugzil.la/1868722)).

### JavaScript

- Die Methoden {{jsxref("ArrayBuffer.prototype.transfer()")}} und {{jsxref("ArrayBuffer.prototype.transferToFixedLength()")}} können jetzt verwendet werden, um das [Eigentum zu übertragen](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer#transferring_arraybuffers) von Speichern von einem {{jsxref("ArrayBuffer")}} zu einem anderen. Nach der Übertragung ist der ursprüngliche Buffer von seinem ursprünglichen Speicher getrennt und daher unbrauchbar; der Zustand kann mit {{jsxref("ArrayBuffer.prototype.detached")}} überprüft werden. (Siehe [Firefox-Bug 1865103](https://bugzil.la/1865103) für weitere Details.)

- Zur Angleichung an andere Browser berücksichtigen [`Date.parse()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/parse) und der [`Date()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/Date) nur die ersten drei Buchstaben des angegebenen Monats, wenn [nicht standardisierte Datumszeichenfolgen](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/parse#non-standard_date_strings) geparst werden. Früher wurden nur gekürzte Werte des vollständigen Monatsnamens mit drei oder mehr Zeichen akzeptiert (Siehe [Firefox-Bug 1862910](https://bugzil.la/1862910) für weitere Details.)

### SVG

#### Entfernungen

- Unterstützung für `data:`-URLs in SVG-`<use>`-Elementen und über die [`SVGUseElement`](/de/docs/Web/API/SVGUseElement)-Schnittstelle wurde entfernt, um {{Glossary("Cross-site_scripting", "XSS")}}-Angriffe zu verhindern. Die veraltete Funktionalität kann wieder aktiviert werden, indem die `svg.use-element.data-url-href.allowed`-Einstellung auf `true` gesetzt wird, obwohl dies aus Sicherheitsgründen nicht empfohlen wird ([Firefox-Bug 1806964](https://bugzil.la/1806964)).

### APIs

- Die [LargestContentfulPaint API](/de/docs/Web/API/LargestContentfulPaint) wird jetzt unterstützt. Diese API ist Teil der [Performance APIs](/de/docs/Web/API/Performance_API) und stellt Zeitinformationen über das größte Bild oder den größten Text zur Verfügung, bevor Benutzer mit einer Webseite interagieren ([Firefox-Bug 1866266](https://bugzil.la/1866266)).

#### DOM

- Die Methode [`HTMLSelectElement.showPicker()`](/de/docs/Web/API/HTMLSelectElement/showPicker) wird jetzt unterstützt, was das Programmieren des Auslösens des Browserauswahlmenüs für ein {{HTMLElement("select")}}-Element bei Benutzerinteraktionen ermöglicht ([Firefox-Bug 1865207](https://bugzil.la/1865207)).

#### Entfernungen

- Unterstützung für die CSS-Eigenschaft [`-moz-user-focus`](/de/docs/Web/CSS/-moz-user-focus) wurde entfernt ([Firefox-Bug 1871745](https://bugzil.la/1871745) und [Firefox-Bug 1868552](https://bugzil.la/1868552)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Es wurde ein Fehler behoben, der verhinderte, dass [Perform Actions](https://w3c.github.io/webdriver/#perform-actions) korrekt doppelte und andere Mehrfach-Klickereignisse für die `mouse`-Eingabequelle synthetisiert ([Firefox-Bug 1864614](https://bugzil.la/1864614)). Zusätzlich werden diese Ereignisse nur ausgelöst, wenn sich die tatsächliche Mausposition seit der letzten Klickeingabe nicht geändert hat ([Firefox-Bug 1681076](https://bugzil.la/1681076)).
- Die Definitionen für die Tasten `Pause` und `Equal` (Ziffernblock) wurden aktualisiert, um den WebDriver-Spezifikationen zu entsprechen ([Firefox-Bug 1863687](https://bugzil.la/1863687)).

#### WebDriver BiDi

- Die Serialisierung von `WindowProxy`-Remoteobjekten funktioniert jetzt auch korrekt für Out-of-Process-Iframes ([Firefox-Bug 1867667](https://bugzil.la/1867667)).
- Das Kommando [browsingContext.setViewport](https://w3c.github.io/webdriver-bidi/#command-browsingContext-setViewport) unterscheidet jetzt zwischen den Werten `undefined` und `null` für das `viewport`-Argument. Wenn auf `undefined` gesetzt, bedeutet dies, dass das Viewport unverändert bleiben soll, während `null` es auf seine ursprünglichen Abmessungen zurücksetzt ([Firefox-Bug 1865618](https://bugzil.la/1865618)).
- Unterstützung für das Kommando [browsingContext.traverseHistory](https://w3c.github.io/webdriver-bidi/#command-browsingContext-traverseHistory) wurde eingeführt, das es ermöglicht, vor- und rückwärts in der Browserhistorie zu navigieren ([Firefox-Bug 1841018](https://bugzil.la/1841018)).
- Ein Fehler bei allen unterstützten Netzwerkereignissen wurde behoben, bei dem die `context`-ID konsequent den obersten Browsing-Kontext berichtete, selbst wenn die Navigation in einem iframe stattfand ([Firefox-Bug 1869735](https://bugzil.la/1869735)).

#### Marionette

- Ein Fehler mit [Get Element Text](https://w3c.github.io/webdriver/#dfn-get-element-text) wurde behoben, bei dem der Befehl fälschlicherweise einen leeren Text zurückgab, wenn sich das Element in einem Slot eines `ShadowRoot` befand ([Firefox-Bug 1824664](https://bugzil.la/1824664)).

## Experimentelle Web-Features

Diese Features sind neu in Firefox 122 eingeführt, aber standardmäßig deaktiviert. Um damit zu experimentieren, suchen Sie die entsprechende Einstellung auf der `about:config`-Seite und setzen Sie sie auf `true`. Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).

- **Deklaratives Shadow DOM:** `dom.webcomponents.shadowdom.declarative.enabled`.

  Das {{htmlelement("template")}}-Element unterstützt jetzt ein `shadowrootmode`-Attribut, das entweder auf `open` oder `closed` gesetzt werden kann, dieselben Werte wie die `mode`-Option der [`attachShadow()`](/de/docs/Web/API/Element/attachShadow)-Methode. Es ermöglicht die deklarative Erstellung eines Shadow-DOM-Teilbaums. ([Firefox-Bug 1712140](https://bugzil.la/1712140))

- **Klone-Option und -Eigenschaft für Shadow DOM.**
  - Die Methode [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) unterstützt jetzt die boolesche Option `clonable`, die angibt, ob das erstellte Shadow-Root klonbar ist: Der Standardwert ist `false`, aber wenn er auf `true` gesetzt ist, wird der Shadow-Host, der mit [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode) oder [`Document.importNode()`](/de/docs/Web/API/Document/importNode) geklont wird, das Shadow-Root in der Kopie einschließen.
  - Das Interface [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) unterstützt jetzt die schreibgeschützte Eigenschaft [`clonable`](/de/docs/Web/API/ShadowRoot/clonable). Es gibt `true` zurück, wenn das Shadow-Root klonbar ist, und `false` andernfalls. Es gibt immer `true` für Shadow-Roots zurück, die über deklaratives Shadow-DOM erstellt wurden.

  Wenn Shadow-Root über deklaratives Shadow-DOM erstellt wird, wird die `clonable`-Option standardmäßig auf `true` gesetzt, und die `clonable`-Eigenschaft gibt `true` zurück. ([Firefox-Bug 1712140](https://bugzil.la/1868428))

- **Popover API:** `dom.element.popover.enabled`.

  Das Anzeigen von Popovern über Seiteninhalten wird jetzt über HTML-Attribute oder JavaScript-API unterstützt, einschließlich Styling mit der CSS-Pseudoklasse [`:popover-open`](/de/docs/Web/CSS/:popover-open) und erweiterter Unterstützung für das Pseudoelement [`::backdrop`](/de/docs/Web/CSS/::backdrop). Siehe die [Popover API](/de/docs/Web/API/Popover_API)-Referenz für weitere Details. ([Firefox-Bug 1823757](https://bugzil.la/1823757))

- **Zwischenablage lesen und schreiben:** `dom.events.asyncClipboard.clipboardItem`, `dom.events.asyncClipboard.readText` und `dom.events.asyncClipboard.writeText`.

  Die asynchrone [Clipboard API](/de/docs/Web/API/Clipboard_API) wird jetzt vollständig unterstützt, einschließlich der Methoden [`read()`](/de/docs/Web/API/Clipboard/read), [`readText()`](/de/docs/Web/API/Clipboard/readText) und [`write()`](/de/docs/Web/API/Clipboard/write) sowie der Schnittstelle [`ClipboardItem`](/de/docs/Web/API/ClipboardItem). Ein Einfüge-Kontextmenü wird angezeigt, damit der Benutzer bestätigen kann, wenn Zwischenablagedaten gelesen werden, die nicht von derselben Origin-Seite bereitgestellt wurden. ([Firefox-Bug 1809106](https://bugzil.la/1809106))

- **`Intl.Segmenter`:** standardmäßig nur in Firefox Nightly aktiviert.

  Das {{jsxref("Intl.Segmenter")}}-Objekt ermöglicht eine genaue, lokalsensitive Textsegmentierung eines Strings. Zum Beispiel, um einen Text in Wörter einer Sprache zu zerlegen, die keine Leerzeichen zur Trennung verwendet: `Intl.Segmenter("ja-JP", { granularity: "word" })`. ([Firefox-Bug 1423593](https://bugzil.la/1423593))

## Ältere Versionen

{{Firefox_for_developers}}
