---
title: Firefox 122 Versionshinweise für Entwickler
short-title: Firefox 122
slug: Mozilla/Firefox/Releases/122
l10n:
  sourceCommit: b63437e072cf5eac5d56e54454116bcc41b5c28b
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 122, die Entwickler betreffen. Firefox 122 wurde am [23. Januar 2024](https://whattrainisitnow.com/release/?version=122) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- {{HTMLElement("hr")}}-Elemente sind jetzt als Kinder von {{HTMLElement("select")}}-Elementen erlaubt. Dies ist eine neue Funktion, die die Lesbarkeit von Auswahllisten mit vielen Optionen verbessert. ([Firefox-Bug 1830909](https://bugzil.la/1830909)).
- Das `type`-HTML-Attribut hat keine Wirkung mehr, wenn es auf `none`, `disc`, `circle` oder `square` in {{HTMLElement("ol")}} gesetzt ist, und keine Wirkung mehr, wenn es auf `1`, `a`, `A`, `i` oder `I` in {{HTMLElement("ul")}} gesetzt ist. Da `type` ein veraltetes Attribut für `<ul>`- und `<ol>`-Listen ist, sollten diese stattdessen mit der {{CSSxref("list-style-type")}}-CSS-Eigenschaft gestylt werden. ([Firefox-Bug 1868087](https://bugzil.la/1868087)).

### CSS

- Die CSS-Eigenschaft {{cssxref("offset-position")}} ist jetzt standardmäßig verfügbar. Sie definiert die Anfangsposition eines Elements auf einem Pfad. ([Firefox-Bug 1598152](https://bugzil.la/1598152))

- Die verschiedenen Methoden zur Definition eines CSS-{{cssxref("offset-path")}} — einschließlich [`<basic-shape>`](/de/docs/Web/CSS/offset-path#basic-shape), [`<coord-box>`](/de/docs/Web/CSS/offset-path#coord-box) und [`url()`](/de/docs/Web/CSS/offset-path#url) — sind jetzt standardmäßig aktiviert. ([Firefox-Bug 1598159](https://bugzil.la/1598159))

- Die CSS-Funktion {{cssxref("ray")}} ist jetzt standardmäßig verfügbar. Sie können diese Funktion verwenden, um einen {{cssxref("offset-path")}} als Liniensegment zu definieren, das von einer {{cssxref("offset-position")}} beginnt und in Richtung des angegebenen Winkels verläuft. ([Firefox-Bug 1598151](https://bugzil.la/1598151))

- Die Eigenschaften {{CSSxref("clip-path")}} und {{CSSxref("offset-path")}} akzeptieren jetzt die Formfunktionen [`rect()`](/de/docs/Web/CSS/basic-shape/rect) und [`xywh()`](/de/docs/Web/CSS/basic-shape/xywh). Diese {{CSSXref("basic-shape")}}-Werte ermöglichen das Zuschneiden und Versetzen von Elementen mit einem Rechteck, das durch den Abstand vom Rand des Elements (`rect()`) oder durch Koordinaten und Größe (`xywh()`) definiert wird. ([Firefox-Bug 1868722](https://bugzil.la/1868722)).

### JavaScript

- Die Methoden {{jsxref("ArrayBuffer.prototype.transfer()")}} und {{jsxref("ArrayBuffer.prototype.transferToFixedLength()")}} können jetzt verwendet werden, um den [Besitz von Speicher](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer#transferring_arraybuffers) von einem {{jsxref("ArrayBuffer")}} zu einem anderen zu übertragen. Nach der Übertragung ist der ursprüngliche Buffer von seinem ursprünglichen Speicher getrennt und daher unbenutzbar; der Zustand kann mit {{jsxref("ArrayBuffer.prototype.detached")}} überprüft werden. (Weitere Details finden Sie im [Firefox-Bug 1865103](https://bugzil.la/1865103)).

- Zur Parität mit anderen Browsern berücksichtigen [`Date.parse()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/parse) und der [`Date()`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/Date) nur die ersten drei Buchstaben des angegebenen Monats, wenn [nicht-standardisierte Datumszeichenfolgen](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/parse#non-standard_date_strings) geparst werden. Zuvor wurden nur abgeschnittene Werte des vollständigen Monatsnamens mit drei oder mehr Zeichen akzeptiert (siehe [Firefox-Bug 1862910](https://bugzil.la/1862910) für weitere Details).

### SVG

#### Entfernungen

- Unterstützung für `data:`-URLs in SVG-`<use>`-Elementen und über die [`SVGUseElement`](/de/docs/Web/API/SVGUseElement)-Schnittstelle wurde entfernt, um {{Glossary("Cross-site_scripting", "XSS")}}-Angriffe zu verhindern.
  Die Legacy-Funktionalität kann durch Setzen der `svg.use-element.data-url-href.allowed`-Präferenz auf `true` wieder aktiviert werden, obwohl dies aus Sicherheitsgründen nicht empfohlen wird ([Firefox-Bug 1806964](https://bugzil.la/1806964)).

### APIs

- Die [LargestContentfulPaint API](/de/docs/Web/API/LargestContentfulPaint) wird nun unterstützt.
  Diese API ist Teil der [Performance APIs](/de/docs/Web/API/Performance_API) und bietet Timing-Informationen über das größte Bild oder den größten Text, der gerendert wird, bevor Benutzer mit einer Webseite interagieren ([Firefox-Bug 1866266](https://bugzil.la/1866266)).

#### DOM

- Die Methode [`HTMLSelectElement.showPicker()`](/de/docs/Web/API/HTMLSelectElement/showPicker) wird nun unterstützt und ermöglicht es, den Browser-Picker für ein {{HTMLElement("select")}}-Element programmgesteuert zu starten, wenn er durch Benutzerinteraktion ausgelöst wird ([Firefox-Bug 1865207](https://bugzil.la/1865207)).

#### Entfernungen

- Unterstützung für die CSS-Eigenschaft [`-moz-user-focus`](/de/docs/Web/CSS/-moz-user-focus) wurde entfernt ([Firefox-Bug 1871745](https://bugzil.la/1871745) und [Firefox-Bug 1868552](https://bugzil.la/1868552)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Ein Fehler wurde behoben, der verhinderte, dass [Execute Actions](https://w3c.github.io/webdriver/#perform-actions) Doppelklick- und andere Mehrfachklick-Ereignisse für die `mouse`-Eingabequelle korrekt synthetisierte ([Firefox-Bug 1864614](https://bugzil.la/1864614)). Zusätzlich werden diese Ereignisse nur ausgegeben, wenn sich die tatsächliche Mausposition seit der letzten Klickaktion nicht geändert hat ([Firefox-Bug 1681076](https://bugzil.la/1681076)).
- Die Definitionen für die Tasten `Pause` und `Equal` (Nummernblock) wurden aktualisiert, um mit der WebDriver-Spezifikation übereinzustimmen ([Firefox-Bug 1863687](https://bugzil.la/1863687)).

#### WebDriver BiDi

- Die Serialisierung von `WindowProxy`-Remoteobjekten funktioniert jetzt auch korrekt für out-of-process iframes ([Firefox-Bug 1867667](https://bugzil.la/1867667)).
- Der Befehl [browsingContext.setViewport](https://w3c.github.io/webdriver-bidi/#command-browsingContext-setViewport) unterscheidet nun zwischen `undefined` und `null` als Werte für das `viewport`-Argument. Wird es auf `undefined` gesetzt, bedeutet dies, dass der Viewport unverändert bleiben soll, während die Verwendung von `null` den Viewport auf seine ursprünglichen Abmessungen zurücksetzt ([Firefox-Bug 1865618](https://bugzil.la/1865618)).
- Unterstützung für den Befehl [browsingContext.traverseHistory](https://w3c.github.io/webdriver-bidi/#command-browsingContext-traverseHistory) wurde eingeführt, um Navigationsbewegungen rückwärts und vorwärts in der Browser-Historie zu ermöglichen ([Firefox-Bug 1841018](https://bugzil.la/1841018)).
- Ein Fehler in allen unterstützten Netzwerkereignissen wurde behoben, bei dem die `context`-ID konsequent den Top-Level-Browsing-Kontext meldete, auch wenn die Navigation innerhalb eines iframes erfolgte ([Firefox-Bug 1869735](https://bugzil.la/1869735)).

#### Marionette

- Ein Fehler mit [Get Element Text](https://w3c.github.io/webdriver/#dfn-get-element-text) wurde behoben, bei dem der Befehl fälschlicherweise einen leeren Text zurückgab, wenn sich das Element innerhalb eines ShadowRoot-Slots befand ([Firefox-Bug 1824664](https://bugzil.la/1824664)).

## Experimentelle Web-Funktionen

Diese Funktionen sind neu in Firefox 122 enthalten, aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie nach der entsprechenden Präferenz auf der `about:config`-Seite und setzen Sie sie auf `true`. Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Deklaratives Shadow DOM:** `dom.webcomponents.shadowdom.declarative.enabled`.

  Das {{htmlelement("template")}}-Element unterstützt jetzt ein `shadowrootmode`-Attribut, das entweder auf `open` oder `closed` gesetzt werden kann, dieselben Werte wie die `mode`-Option der Methode [`attachShadow()`](/de/docs/Web/API/Element/attachShadow). Es ermöglicht die Erstellung eines Shadow-DOM-Teilbaums deklarativ. ([Firefox-Bug 1712140](https://bugzil.la/1712140))

- **Klone-Option und -Eigenschaft für Shadow DOM.**
  - Die Methode [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) unterstützt jetzt die boolesche Option `clonable`, die angibt, ob die erstellte Shadow-Root klonbar ist: Der Standardwert ist `false`, aber wenn er auf `true` gesetzt ist, wird der Shadow-Host, der mit [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode) oder [`Document.importNode()`](/de/docs/Web/API/Document/importNode) geklont wird, das Shadow-Root in die Kopie einschließen.
  - Die Schnittstelle [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) unterstützt jetzt die schreibgeschützte Eigenschaft [`clonable`](/de/docs/Web/API/ShadowRoot/clonable). Sie gibt `true` zurück, wenn das Shadow-Root klonbar ist, und `false` ansonsten. Sie gibt immer `true` für Shadow-Roots, die über deklaratives Shadow DOM erstellt wurden.

  Wenn das Shadow-Root über deklaratives Shadow DOM erstellt wird, ist die `clonable`-Option standardmäßig auf `true` gesetzt, und die `clonable`-Eigenschaft gibt `true` zurück. ([Firefox-Bug 1868428](https://bugzil.la/1868428))

- **Popover API:** `dom.element.popover.enabled`.

  Die Anzeige von Popovern über Seiteninhalt wird jetzt über HTML-Attribute oder JavaScript-API unterstützt, einschließlich der Gestaltung mit der CSS-Pseudoklasse [`:popover-open`](/de/docs/Web/CSS/:popover-open) und erweiterter Unterstützung für das Pseudoelement [`::backdrop`](/de/docs/Web/CSS/::backdrop). Weitere Details finden Sie in der [Popover API](/de/docs/Web/API/Popover_API)-Referenz. ([Firefox-Bug 1823757](https://bugzil.la/1823757))

- **Zwischenablage lesen und schreiben:** `dom.events.asyncClipboard.clipboardItem`, `dom.events.asyncClipboard.readText` und `dom.events.asyncClipboard.writeText`.

  Die asynchrone [Clipboard-API](/de/docs/Web/API/Clipboard_API) wird jetzt vollständig unterstützt, einschließlich der Methoden [`read()`](/de/docs/Web/API/Clipboard/read), [`readText()`](/de/docs/Web/API/Clipboard/readText) und [`write()`](/de/docs/Web/API/Clipboard/write) sowie der Schnittstelle [`ClipboardItem`](/de/docs/Web/API/ClipboardItem). Ein Kontextmenü zum Einfügen wird angezeigt, um die Benutzerauswahl zu bestätigen, wenn auf Zwischenablagedaten zugegriffen wird, die nicht von derselben Ursprungsseite bereitgestellt wurden. ([Firefox-Bug 1809106](https://bugzil.la/1809106))

- **`Intl.Segmenter`:** nur standardmäßig in Firefox Nightly aktiviert.

  Das {{jsxref("Intl.Segmenter")}} Objekt ermöglicht die genaue lokalsensitive Textsegmentierung eines Strings. Zum Beispiel, um einen Text in Wörter in einer Sprache aufzuteilen, die keine Leerzeichen zur Trennung verwendet: `Intl.Segmenter("ja-JP", { granularity: "word" })`. ([Firefox-Bug 1423593](https://bugzil.la/1423593))
