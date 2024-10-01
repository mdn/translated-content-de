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

- {{HTMLElement("hr")}} Elemente sind jetzt als Kinder von {{HTMLElement("select")}} Elementen erlaubt. Dies ist eine neue Funktion, die die Lesbarkeit von Auswahllisten mit vielen Optionen verbessert. ([Firefox bug 1830909](https://bugzil.la/1830909)).
- Das HTML-Attribut `type` hat keinen Effekt mehr, wenn es auf `none`, `disc`, `circle` oder `square` bei {{HTMLElement("ol")}} und keinen Effekt mehr, wenn es auf `1`, `a`, `A`, `i` oder `I` bei {{HTMLElement("ul")}} gesetzt wird. Da `type` ein veraltetes Attribut für `<ul>` und `<ol>` Listen ist, sollten diese stattdessen mit der {{CSSxref("list-style-type")}} CSS-Eigenschaft gestylt werden. ([Firefox bug 1868087](https://bugzil.la/1868087)).

### CSS

- Die CSS-Eigenschaft {{cssxref("offset-position")}} ist jetzt standardmäßig verfügbar. Sie definiert die Anfangsposition eines Elements auf einem Pfad. ([Firefox bug 1598152](https://bugzil.la/1598152))

- Die verschiedenen Methoden zur Definition eines CSS {{cssxref("offset-path")}} — einschließlich [`<basic-shape>`](/de/docs/Web/CSS/offset-path#basic-shape), [`<coord-box>`](/de/docs/Web/CSS/offset-path#coord-box) und [`url()`](/de/docs/Web/CSS/offset-path#url) — sind jetzt standardmäßig aktiviert. ([Firefox bug 1598159](https://bugzil.la/1598159))

- Die CSS-Funktion {{cssxref("ray")}} ist jetzt standardmäßig verfügbar. Mit dieser Funktion können Sie einen {{cssxref("offset-path")}} als Liniensegment definieren, das von einem {{cssxref("offset-position")}} ausgeht und sich in Richtung des angegebenen Winkels erstreckt. ([Firefox bug 1598151](https://bugzil.la/1598151))

- Die {{CSSxref("clip-path")}} und {{CSSxref("offset-path")}} Eigenschaften akzeptieren jetzt die Formfunktionen [`rect()`](/de/docs/Web/CSS/basic-shape/rect) und [`xywh()`](/de/docs/Web/CSS/basic-shape/xywh). Diese {{CSSXref("basic-shape")}} Werte ermöglichen das Clippen und Verschieben von Elementen mit einem Rechteck, das durch den Abstand vom Rand des Elements (`rect()`) oder durch Koordinaten und Größe (`xywh()`) definiert wird. ([Firefox bug 1868722](https://bugzil.la/1868722)).

### JavaScript

- Die Methoden {{jsxref("ArrayBuffer.prototype.transfer()")}} und {{jsxref("ArrayBuffer.prototype.transferToFixedLength()")}} können nun genutzt werden, um [Besitz von Speicher zu übertragen](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer#transferring_arraybuffers) von einem {{jsxref("ArrayBuffer")}} zu einem anderen. Nach der Übertragung wird der ursprüngliche Puffer von seinem Speicher getrennt und ist daher nicht mehr nutzbar; der Zustand kann mit {{jsxref("ArrayBuffer.prototype.detached")}} überprüft werden. (Siehe [Firefox bug 1865103](https://bugzil.la/1865103) für weitere Details.)

- Zur Anpassung an andere Browser berücksichtigen [`Date.parse()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/parse) und der [`Date()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/Date) nur die ersten drei Buchstaben des angegebenen Monats, wenn [nicht standardisierte Datumszeichenfolgen](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/parse#non-standard_date_strings) analysiert werden. Zuvor wurden nur abgeschnittene Werte des vollständigen Monatsnamens mit drei oder mehr Zeichen akzeptiert (Siehe [Firefox bug 1862910](https://bugzil.la/1862910) für weitere Details.)

### SVG

#### Entfernungen

- Unterstützung für `data:` URLs in SVG `<use>` Elemente und über die [`SVGUseElement`](/de/docs/Web/API/SVGUseElement) Schnittstelle entfernt, um {{Glossary("Cross-site_scripting", "XSS")}} Angriffe zu verhindern.
  Die ältere Funktionalität kann durch Setzen der `svg.use-element.data-url-href.allowed` Präferenz auf `true` wieder aktiviert werden, obwohl dies aus Sicherheitsgründen nicht empfohlen wird ([Firefox bug 1806964](https://bugzil.la/1806964)).

### APIs

- Die [LargestContentfulPaint API](/de/docs/Web/API/LargestContentfulPaint) wird jetzt unterstützt.
  Diese API ist Teil der [Performance APIs](/de/docs/Web/API/Performance_API) und bietet zeitliche Informationen zum größten Bild oder Text vor der Interaktion der Benutzer mit einer Webseite ([Firefox bug 1866266](https://bugzil.la/1866266)).

#### DOM

- Die Methode [`HTMLSelectElement.showPicker()`](/de/docs/Web/API/HTMLSelectElement/showPicker) wird jetzt unterstützt und ermöglicht es, den Browser-Picker für ein {{HTMLElement("select")}} Element programmgesteuert auszulösen, wenn dies durch Benutzerinteraktion veranlasst wird ([Firefox bug 1865207](https://bugzil.la/1865207)).

#### Entfernungen

- Unterstützung für die CSS-Eigenschaft [`-moz-user-focus`](/de/docs/Web/CSS/-moz-user-focus) entfernt ([Firefox bug 1871745](https://bugzil.la/1871745) und [Firefox bug 1868552](https://bugzil.la/1868552)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Ein Fehler behoben, der verhinderte, dass [Perform Actions](https://w3c.github.io/webdriver/#perform-actions) korrekt Doppel- und andere Mehrfachklick-Ereignisse für die `mouse` Eingabequelle synthetisiert ([Firefox bug 1864614](https://bugzil.la/1864614)). Zusätzlich werden diese Ereignisse nur gesendet, wenn sich die tatsächliche Mausposition seit der letzten Klickaktion nicht geändert hat ([Firefox bug 1681076](https://bugzil.la/1681076)).
- Die Definitionen für die Tasten `Pause` und `Equal` (Nummernblock) wurden aktualisiert, um mit der WebDriver-Spezifikation übereinzustimmen ([Firefox bug 1863687](https://bugzil.la/1863687)).

#### WebDriver BiDi

- Die Serialisierung von `WindowProxy` Remote-Objekten funktioniert nun auch korrekt bei iframes außerhalb von Prozessen ([Firefox bug 1867667](https://bugzil.la/1867667)).
- Der [browsingContext.setViewport](https://w3c.github.io/webdriver-bidi/#command-browsingContext-setViewport) Befehl unterscheidet jetzt zwischen `undefined` und `null` als Werte für das `viewport` Argument. Wenn auf `undefined` gesetzt, bedeutet das, dass das Viewport unverändert bleiben soll, während die Verwendung von `null` es auf seine ursprünglichen Abmessungen zurücksetzt ([Firefox bug 1865618](https://bugzil.la/1865618)).
- Unterstützung für den [browsingContext.traverseHistory](https://w3c.github.io/webdriver-bidi/#command-browsingContext-traverseHistory) Befehl wurde eingeführt, was Navigationen rückwärts und vorwärts in der Browserhistorie ermöglicht ([Firefox bug 1841018](https://bugzil.la/1841018)).
- Ein Fehler in allen unterstützten Netzwerkereignissen behoben, bei dem die `context` ID konsequent den obersten Browsing-Kontext meldete, selbst wenn die Navigation innerhalb eines iframes stattfand ([Firefox bug 1869735](https://bugzil.la/1869735)).

#### Marionette

- Ein Fehler bei [Get Element Text](https://w3c.github.io/webdriver/#dfn-get-element-text) behoben, bei dem der Befehl fälschlicherweise einen leeren Text zurückgab, wenn sich das Element innerhalb eines ShadowRoot-Slots befand ([Firefox bug 1824664](https://bugzil.la/1824664)).

## Experimentelle Web-Funktionen

Diese Funktionen sind neu in Firefox 122 enthalten, jedoch standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie auf der `about:config` Seite nach der entsprechenden Einstellung und setzen Sie sie auf `true`. Sie können weitere solche Funktionen auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features) finden.

- **Deklarativer Shadow DOM:** `dom.webcomponents.shadowdom.declarative.enabled`.

  Das {{htmlelement("template")}} Element unterstützt jetzt ein `shadowrootmode` Attribut, das entweder auf `open` oder `closed` gesetzt werden kann, dieselben Werte wie die `mode` Option der [`attachShadow()`](/de/docs/Web/API/Element/attachShadow) Methode. Es ermöglicht die Erstellung eines Shadow DOM Unterbaums deklarativ. ([Firefox bug 1712140](https://bugzil.la/1712140))

- **Klonbare Option und Eigenschaft für Shadow DOM.**

  - Die Methode [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) unterstützt jetzt die `clonable` Option, die angibt, ob der erstellte Shadow Root klonbar ist: Der Standardwert ist `false`, aber wenn auf `true` gesetzt, wird der Shadow Host, der mit [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode) oder [`Document.importNode()`](/de/docs/Web/API/Document/importNode) kloniert wird, den Shadow Root in die Kopie einschließen.
  - Die Schnittstelle [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) unterstützt jetzt die schreibgeschützte Eigenschaft [`clonable`](/de/docs/Web/API/ShadowRoot/clonable). Sie gibt `true` zurück, wenn der Shadow Root klonbar ist und `false` andernfalls. Sie gibt immer `true` für Shadow Roots zurück, die über deklarativen Shadow DOM erstellt wurden.

  Wenn der Shadow Root über deklarativen Shadow DOM erstellt wird, ist die `clonable` Option standardmäßig auf `true` gesetzt, und die `clonable` Eigenschaft gibt `true` zurück. ([Firefox bug 1712140](https://bugzil.la/1868428))

- **Popover API:** `dom.element.popover.enabled`.

  Das Anzeigen von Popovers über Seiteninhalte wird jetzt über HTML-Attribute oder die JavaScript-API unterstützt, einschließlich Styling mit der CSS-Pseudoklasse [`:popover-open`](/de/docs/Web/CSS/:popover-open) und erweiterter Unterstützung für das Pseudo-Element [`::backdrop`](/de/docs/Web/CSS/::backdrop). Siehe die [Popover API](/de/docs/Web/API/Popover_API) Referenz für weitere Details. ([Firefox bug 1823757](https://bugzil.la/1823757))

- **Clipboard Lese- und Schreibzugriff:** `dom.events.asyncClipboard.clipboardItem`, `dom.events.asyncClipboard.readText` und `dom.events.asyncClipboard.writeText`.

  Die asynchrone [Clipboard API](/de/docs/Web/API/Clipboard_API) wird jetzt vollständig unterstützt, einschließlich der Methoden [`read()`](/de/docs/Web/API/Clipboard/read), [`readText()`](/de/docs/Web/API/Clipboard/readText) und [`write()`](/de/docs/Web/API/Clipboard/write) sowie der [`ClipboardItem`](/de/docs/Web/API/ClipboardItem) Schnittstelle. Ein Kontextmenü zum Einfügen erscheint, damit der Benutzer die Abfrage bestätigen kann, wenn auf Clipboard-Daten zugegriffen wird, die nicht von derselben Ursprungsseite bereitgestellt wurden. ([Firefox bug 1809106](https://bugzil.la/1809106))

- **`Intl.Segmenter`:** standardmäßig nur in Firefox Nightly aktiviert.

  Das {{jsxref("Intl.Segmenter")}} Objekt ermöglicht eine genaue, lokalsensitive Textsegmentierung eines Strings. Zum Beispiel, um einen Text in Wörter in einer Sprache zu zerlegen, die keine Leerzeichen zur Trennung verwendet: `Intl.Segmenter("ja-JP", { granularity: "word" })`. ([Firefox bug 1423593](https://bugzil.la/1423593))

## Ältere Versionen

{{Firefox_for_developers}}
