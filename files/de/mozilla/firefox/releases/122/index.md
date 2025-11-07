---
title: Firefox 122 Versionshinweise für Entwickler
short-title: Firefox 122
slug: Mozilla/Firefox/Releases/122
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 122, die Entwickler betreffen. Firefox 122 wurde am [23. Januar 2024](https://whattrainisitnow.com/release/?version=122) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- {{HTMLElement("hr")}}-Elemente sind jetzt als Kinder von {{HTMLElement("select")}}-Elementen erlaubt. Dies ist eine neue Funktion, die die Lesbarkeit von Auswahllisten mit vielen Optionen verbessert. ([Firefox-Bug 1830909](https://bugzil.la/1830909)).
- Das `type` HTML-Attribut hat keine Wirkung mehr, wenn es auf `none`, `disc`, `circle` oder `square` in {{HTMLElement("ol")}} gesetzt ist, und auch nicht, wenn es auf `1`, `a`, `A`, `i` oder `I` in {{HTMLElement("ul")}} gesetzt ist. Da `type` ein veraltetes Attribut für `<ul>` und `<ol>` Listen ist, sollten diese stattdessen mit der CSS-Eigenschaft {{CSSxref("list-style-type")}} gestylt werden. ([Firefox-Bug 1868087](https://bugzil.la/1868087)).

### CSS

- Die CSS-Eigenschaft {{cssxref("offset-position")}} ist jetzt standardmäßig verfügbar. Sie definiert die Anfangsposition eines Elements auf einem Pfad. ([Firefox-Bug 1598152](https://bugzil.la/1598152))

- Die verschiedenen Methoden zur Definition eines CSS-{{cssxref("offset-path")}} — einschließlich [`<basic-shape>`](/de/docs/Web/CSS/Reference/Properties/offset-path#basic-shape), [`<coord-box>`](/de/docs/Web/CSS/Reference/Properties/offset-path#coord-box) und [`url()`](/de/docs/Web/CSS/Reference/Properties/offset-path#url) — sind jetzt standardmäßig aktiviert. ([Firefox-Bug 1598159](https://bugzil.la/1598159))

- Die CSS-Funktion {{cssxref("ray")}} ist jetzt standardmäßig verfügbar. Sie können diese Funktion verwenden, um einen {{cssxref("offset-path")}} als Liniensegment zu definieren, das von einer {{cssxref("offset-position")}} aus beginnt und in Richtung des angegebenen Winkels verläuft. ([Firefox-Bug 1598151](https://bugzil.la/1598151))

- Die Eigenschaften {{CSSxref("clip-path")}} und {{CSSxref("offset-path")}} akzeptieren jetzt die Formfunktionen [`rect()`](/de/docs/Web/CSS/Reference/Values/basic-shape/rect) und [`xywh()`](/de/docs/Web/CSS/Reference/Values/basic-shape/xywh). Diese {{CSSXref("basic-shape")}}-Werte ermöglichen das Zuschneiden und Versetzen von Elementen mit einem Rechteck, das durch einen Abstand vom Rand des Elements (`rect()`) oder durch Koordinaten und Größe (`xywh()`) definiert wird. ([Firefox-Bug 1868722](https://bugzil.la/1868722)).

### JavaScript

- Die Methoden {{jsxref("ArrayBuffer.prototype.transfer()")}} und {{jsxref("ArrayBuffer.prototype.transferToFixedLength()")}} können jetzt verwendet werden, um den [Besitz von Speicher](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer#transferring_arraybuffers) von einem {{jsxref("ArrayBuffer")}} auf einen anderen zu übertragen. Nach der Übertragung wird der ursprüngliche Puffer von seinem ursprünglichen Speicher abgetrennt und ist daher nicht mehr verwendbar; der Zustand kann mit {{jsxref("ArrayBuffer.prototype.detached")}} überprüft werden. (Siehe [Firefox-Bug 1865103](https://bugzil.la/1865103) für weitere Details.)

- Für die Gleichheit mit anderen Browsern berücksichtigen [`Date.parse()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/parse) und der [`Date()`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/Date) nur die ersten drei Buchstaben des angegebenen Monats, wenn [nicht standardisierte Datumszeichenfolgen](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/parse#non-standard_date_strings) analysiert werden. Bisher wurden nur gekürzte Werte des vollständigen Monatsnamens mit drei oder mehr Zeichen akzeptiert (Siehe [Firefox-Bug 1862910](https://bugzil.la/1862910) für weitere Details).

### SVG

#### Entfernungen

- Unterstützung für `data:` URLs in SVG-`<use>`-Elementen und über die [`SVGUseElement`](/de/docs/Web/API/SVGUseElement) Schnittstelle wurde entfernt, um {{Glossary("Cross-site_scripting", "XSS")}}-Angriffe zu verhindern. Die veraltete Funktionalität kann wieder aktiviert werden, indem die Einstellung `svg.use-element.data-url-href.allowed` auf `true` gesetzt wird, obwohl dies aus Sicherheitsgründen nicht empfohlen wird ([Firefox-Bug 1806964](https://bugzil.la/1806964)).

### APIs

- Die [LargestContentfulPaint API](/de/docs/Web/API/LargestContentfulPaint) wird jetzt unterstützt. Diese API ist Teil der [Performance APIs](/de/docs/Web/API/Performance_API) und bietet Timing-Informationen über die größte Bild- oder Textdarstellung, bevor Benutzer mit einer Webseite interagieren ([Firefox-Bug 1866266](https://bugzil.la/1866266)).

#### DOM

- Die Methode [`HTMLSelectElement.showPicker()`](/de/docs/Web/API/HTMLSelectElement/showPicker) wird jetzt unterstützt, sodass der Browser-Picker für ein {{HTMLElement("select")}}-Element programmatisch gestartet werden kann, wenn eine Benutzerinteraktion ausgelöst wird ([Firefox-Bug 1865207](https://bugzil.la/1865207)).

#### Entfernungen

- Die Unterstützung für die CSS-Eigenschaft [`-moz-user-focus`](/de/docs/Web/CSS/Reference/Properties/-moz-user-focus) wurde entfernt ([Firefox-Bug 1871745](https://bugzil.la/1871745) und [Firefox-Bug 1868552](https://bugzil.la/1868552)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Ein Fehler, der [Perform Actions](https://w3c.github.io/webdriver/#perform-actions) daran hinderte, doppelte und andere Mehrfachklickereignisse für die `mouse`-Eingangsquelle korrekt zu synthetisieren, wurde behoben ([Firefox-Bug 1864614](https://bugzil.la/1864614)). Zusätzlich werden diese Ereignisse nur ausgegeben, wenn sich die tatsächliche Mausposition seit der letzten Klickaktion nicht geändert hat ([Firefox-Bug 1681076](https://bugzil.la/1681076)).
- Die Definitionen für die Tasten `Pause` und `Equal` (Nummernblock) wurden aktualisiert, um mit der WebDriver-Spezifikation übereinzustimmen ([Firefox-Bug 1863687](https://bugzil.la/1863687)).

#### WebDriver BiDi

- Die Serialisierung von `WindowProxy` Remote-Objekten funktioniert jetzt auch korrekt für Prozessen mit iframes ([Firefox-Bug 1867667](https://bugzil.la/1867667)).
- Der Befehl [browsingContext.setViewport](https://w3c.github.io/webdriver-bidi/#command-browsingContext-setViewport) unterscheidet jetzt zwischen `undefined` und `null` als Wert für das `viewport`-Argument. Wenn auf `undefined` gesetzt, bedeutet dies, dass der Viewport unverändert bleiben soll, während `null` ihn auf seine ursprünglichen Abmessungen zurücksetzt ([Firefox-Bug 1865618](https://bugzil.la/1865618)).
- Unterstützung für den Befehl [browsingContext.traverseHistory](https://w3c.github.io/webdriver-bidi/#command-browsingContext-traverseHistory) wurde eingeführt, wodurch Rückwärts- und Vorwärtsnavigation in der Browserverlaufshistorie ermöglicht wird ([Firefox-Bug 1841018](https://bugzil.la/1841018)).
- Ein Fehler in allen unterstützten Netzwerkereignissen wurde behoben, bei dem die `context`-ID stets den obersten Browsing-Kontext meldete, selbst wenn die Navigation innerhalb eines iframes stattfand ([Firefox-Bug 1869735](https://bugzil.la/1869735)).

#### Marionette

- Ein Fehler mit [Get Element Text](https://w3c.github.io/webdriver/#dfn-get-element-text) wurde behoben, bei dem der Befehl fälschlicherweise einen leeren Text zurückgab, wenn sich das Element in einem `ShadowRoot`'s Slot befand ([Firefox-Bug 1824664](https://bugzil.la/1824664)).

## Experimentelle Web-Funktionen

Diese Funktionen sind neu in Firefox 122 ausgeliefert worden, jedoch standardmäßig deaktiviert. Um sie auszuprobieren, suchen Sie die entsprechende Einstellung auf der `about:config`-Seite und setzen Sie sie auf `true`. Weitere solcher Funktionen finden Sie auf der Seite [Experimental features](/de/docs/Mozilla/Firefox/Experimental_features).

- **Deklaratives Shadow DOM:** `dom.webcomponents.shadowdom.declarative.enabled`.

  Das {{htmlelement("template")}}-Element unterstützt jetzt ein `shadowrootmode`-Attribut, das entweder auf `open` oder `closed` gesetzt werden kann, dieselben Werte wie die `mode`-Option der Methode [`attachShadow()`](/de/docs/Web/API/Element/attachShadow). Es ermöglicht die Erstellung eines Shadow-DOM-Unterbaums deklarativ. ([Firefox-Bug 1712140](https://bugzil.la/1712140))

- **Clonable-Option und -Eigenschaft für Shadow DOM.**
  - Die Methode [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) unterstützt jetzt die `clonable`-boolesche Option, die angibt, ob die erstellte Shadow-Root klonbar ist: Der Standardwert ist `false`, aber wenn auf `true` gesetzt, wird das Shadow-Host, das mit [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode) oder [`Document.importNode()`](/de/docs/Web/API/Document/importNode) geklont wird, einschließlich Shadow-Root in die Kopie aufgenommen.
  - Die Schnittstelle [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) unterstützt jetzt die schreibgeschützte Eigenschaft [`clonable`](/de/docs/Web/API/ShadowRoot/clonable). Sie gibt `true` zurück, wenn die Shadow-Root klonbar ist, und `false` andernfalls. Sie gibt immer `true` für via deklaratives Shadow DOM erstellte Shadow Roots zurück.

  Wenn die Shadow-Root via deklaratives Shadow DOM erstellt wird, ist die `clonable`-Option standardmäßig auf `true` gesetzt, und die `clonable`-Eigenschaft gibt `true` zurück. ([Firefox-Bug 1868428](https://bugzil.la/1868428))

- **Popover API:** `dom.element.popover.enabled`.

  Das Anzeigen von Popovers über Seiteninhalte wird jetzt über HTML-Attribute oder JavaScript-API unterstützt, einschließlich Styling mit der CSS-Pseudoklasse [`:popover-open`](/de/docs/Web/CSS/Reference/Selectors/:popover-open) und erweiterter Unterstützung für das Pseudo-Element [`::backdrop`](/de/docs/Web/CSS/Reference/Selectors/::backdrop). Siehe die [Popover API](/de/docs/Web/API/Popover_API)-Referenz für weitere Details. ([Firefox-Bug 1823757](https://bugzil.la/1823757))

- **Zwischenablage lesen und schreiben:** `dom.events.asyncClipboard.clipboardItem`, `dom.events.asyncClipboard.readText` und `dom.events.asyncClipboard.writeText`.

  Die asynchrone [Clipboard API](/de/docs/Web/API/Clipboard_API) wird jetzt vollständig unterstützt, einschließlich der Methoden [`read()`](/de/docs/Web/API/Clipboard/read), [`readText()`](/de/docs/Web/API/Clipboard/readText) und [`write()`](/de/docs/Web/API/Clipboard/write) sowie der Schnittstelle [`ClipboardItem`](/de/docs/Web/API/ClipboardItem). Ein Einfügekontextmenü wird erscheinen, damit der Benutzer bestätigen kann, wenn Clipboard-Daten gelesen werden, die nicht von derselben Ursprungseite bereitgestellt wurden. ([Firefox-Bug 1809106](https://bugzil.la/1809106))

- **`Intl.Segmenter`:** standardmäßig nur in Firefox Nightly aktiviert.

  Das Objekt {{jsxref("Intl.Segmenter")}} ermöglicht die genaue, lokalsensitive Textsegmentierung eines Strings. Zum Beispiel zum Aufteilen eines Textes in Wörter in einer Sprache, die keine Leerzeichen zur Trennung verwendet: `Intl.Segmenter("ja-JP", { granularity: "word" })`. ([Firefox-Bug 1423593](https://bugzil.la/1423593))
