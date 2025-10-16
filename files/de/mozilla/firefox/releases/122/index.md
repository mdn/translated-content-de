---
title: Firefox 122 Versionshinweise für Entwickler
short-title: Firefox 122
slug: Mozilla/Firefox/Releases/122
l10n:
  sourceCommit: 61912f53d01e935aea926a2226130fb4587414a9
---

Dieser Artikel enthält Informationen über die Änderungen in Firefox 122, die Entwickler betreffen. Firefox 122 wurde am [23. Januar 2024](https://whattrainisitnow.com/release/?version=122) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- {{HTMLElement("hr")}}-Elemente sind jetzt als Kinder von {{HTMLElement("select")}}-Elementen erlaubt. Dies ist eine neue Funktion, die die Lesbarkeit von Auswahllisten mit vielen Optionen verbessert. ([Firefox Fehler 1830909](https://bugzil.la/1830909)).
- Das HTML-Attribut `type` hat keine Wirkung mehr, wenn es auf `none`, `disc`, `circle` oder `square` in {{HTMLElement("ol")}} gesetzt wird, und ebenso keine Wirkung, wenn es auf `1`, `a`, `A`, `i` oder `I` in {{HTMLElement("ul")}} gesetzt wird. Da `type` ein veraltetes Attribut für `<ul>`- und `<ol>`-Listen ist, sollten diese stattdessen mit der {{CSSxref("list-style-type")}} CSS-Eigenschaft gestylt werden. ([Firefox Fehler 1868087](https://bugzil.la/1868087)).

### CSS

- Die CSS-Eigenschaft {{cssxref("offset-position")}} ist jetzt standardmäßig verfügbar. Sie definiert die Anfangsposition eines Elements auf einem Pfad. ([Firefox Fehler 1598152](https://bugzil.la/1598152))

- Die verschiedenen Methoden zur Definition eines CSS-{{cssxref("offset-path")}} — einschließlich [`<basic-shape>`](/de/docs/Web/CSS/offset-path#basic-shape), [`<coord-box>`](/de/docs/Web/CSS/offset-path#coord-box) und [`url()`](/de/docs/Web/CSS/offset-path#url) — sind jetzt standardmäßig aktiviert. ([Firefox Fehler 1598159](https://bugzil.la/1598159))

- Die CSS-Funktion {{cssxref("ray")}} ist jetzt standardmäßig verfügbar. Sie können diese Funktion verwenden, um einen {{cssxref("offset-path")}} als Liniensegment zu definieren, das von einer {{cssxref("offset-position")}} aus startet und in Richtung des angegebenen Winkels verläuft. ([Firefox Fehler 1598151](https://bugzil.la/1598151))

- Die Eigenschaften {{CSSxref("clip-path")}} und {{CSSxref("offset-path")}} akzeptieren jetzt die Shape-Funktionen [`rect()`](/de/docs/Web/CSS/basic-shape/rect) und [`xywh()`](/de/docs/Web/CSS/basic-shape/xywh). Diese {{CSSXref("basic-shape")}}-Werte ermöglichen das Zuschneiden und Versetzen von Elementen mit einem Rechteck, das durch den Abstand vom Rand des Elements (`rect()`) oder durch Koordinaten und Größe (`xywh()`) definiert ist. ([Firefox Fehler 1868722](https://bugzil.la/1868722)).

### JavaScript

- Die Methoden {{jsxref("ArrayBuffer.prototype.transfer()")}} und {{jsxref("ArrayBuffer.prototype.transferToFixedLength()")}} können jetzt verwendet werden, um [Eigentum an Speicher](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer#transferring_arraybuffers) von einem {{jsxref("ArrayBuffer")}} zu einem anderen zu übertragen. Nach der Übertragung wird der ursprüngliche Puffer von seinem ursprünglichen Speicher getrennt und ist daher nicht mehr verwendbar; der Zustand kann mit {{jsxref("ArrayBuffer.prototype.detached")}} überprüft werden. (Siehe [Firefox Fehler 1865103](https://bugzil.la/1865103) für weitere Details.)

- Zur Angleichung an andere Browser berücksichtigen [`Date.parse()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/parse) und der [`Date()`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/Date) beim Parsen von [nicht standardmäßigen Datumsstrings](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/parse#non-standard_date_strings) nur die ersten drei Buchstaben des angegebenen Monats. Bisher wurden nur abgeschnittene Werte des vollständigen Monatsnamens mit drei oder mehr Zeichen akzeptiert (Siehe [Firefox Fehler 1862910](https://bugzil.la/1862910) für weitere Details.)

### SVG

#### Entfernung

- Unterstützung für `data:`-URLs in SVG-`<use>`-Elementen und über die [`SVGUseElement`](/de/docs/Web/API/SVGUseElement)-Schnittstelle wurde entfernt, um {{Glossary("Cross-site_scripting", "XSS")}}-Angriffe zu verhindern.
  Die alte Funktionalität kann durch Setzen der `svg.use-element.data-url-href.allowed`-Präferenz auf `true` wieder aktiviert werden, obwohl dies aus Sicherheitsgründen nicht empfohlen wird ([Firefox Fehler 1806964](https://bugzil.la/1806964)).

### APIs

- Die [LargestContentfulPaint API](/de/docs/Web/API/LargestContentfulPaint) wird jetzt unterstützt.
  Diese API ist Teil der [Leistungs-APIs](/de/docs/Web/API/Performance_API) und liefert Informationen über die zeitliche Darstellung des größten Bildes oder Textes, bevor Benutzer mit einer Webseite interagieren ([Firefox Fehler 1866266](https://bugzil.la/1866266)).

#### DOM

- Die Methode [`HTMLSelectElement.showPicker()`](/de/docs/Web/API/HTMLSelectElement/showPicker) wird jetzt unterstützt und ermöglicht es, den Browser-Picker für ein {{HTMLElement("select")}}-Element programmgesteuert zu starten, wenn er durch eine Benutzerinteraktion ausgelöst wird ([Firefox Fehler 1865207](https://bugzil.la/1865207)).

#### Entfernung

- Unterstützung für die CSS-Eigenschaft [`-moz-user-focus`](/de/docs/Web/CSS/-moz-user-focus) wurde entfernt ([Firefox Fehler 1871745](https://bugzil.la/1871745) und [Firefox Fehler 1868552](https://bugzil.la/1868552)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Ein Fehler wurde behoben, der verhinderte, dass [Aktionen ausführen](https://w3c.github.io/webdriver/#perform-actions) korrekt doppelte und andere Mehrfachklick-Ereignisse für die `mouse`-Eingabequelle synthetisierten ([Firefox Fehler 1864614](https://bugzil.la/1864614)). Zusätzlich werden diese Ereignisse nur dann ausgelöst, wenn sich die tatsächliche Mausposition seit der letzten Klick-Aktion nicht geändert hat ([Firefox Fehler 1681076](https://bugzil.la/1681076)).
- Die Definitionen für die Tasten `Pause` und `Gleich` (Nummernblock) wurden aktualisiert, um mit der WebDriver-Spezifikation übereinzustimmen ([Firefox Fehler 1863687](https://bugzil.la/1863687)).

#### WebDriver BiDi

- Die Serialisierung von `WindowProxy`-Remote-Objekten funktioniert jetzt auch korrekt für Out-of-Process-Iframes ([Firefox Fehler 1867667](https://bugzil.la/1867667)).
- Der Befehl [browsingContext.setViewport](https://w3c.github.io/webdriver-bidi/#command-browsingContext-setViewport) unterscheidet nun zwischen `undefined` und `null` als Werte für das `viewport`-Argument. Wenn auf `undefined` gesetzt, bedeutet dies, dass das Viewport unverändert bleiben soll, während `null` es auf seine ursprünglichen Dimensionen zurücksetzt ([Firefox Fehler 1865618](https://bugzil.la/1865618)).
- Unterstützung für den Befehl [browsingContext.traverseHistory](https://w3c.github.io/webdriver-bidi/#command-browsingContext-traverseHistory) wurde eingeführt, der es ermöglicht, im Browser-Verlauf vor- und zurückzunavigieren ([Firefox Fehler 1841018](https://bugzil.la/1841018)).
- Ein Fehler wurde behoben, bei dem in allen unterstützten Netzwerkereignissen die `context`-ID konsistent den Top-Level-Browsing-Kontext meldete, selbst wenn die Navigation innerhalb eines Iframes erfolgte ([Firefox Fehler 1869735](https://bugzil.la/1869735)).

#### Marionette

- Es wurde ein Fehler mit [Get Element Text](https://w3c.github.io/webdriver/#dfn-get-element-text) behoben, bei dem der Befehl fälschlicherweise einen leeren Text zurückgab, wenn sich das Element innerhalb eines ShadowRoot-Slots befand ([Firefox Fehler 1824664](https://bugzil.la/1824664)).

## Experimentelle Webfunktionen

Diese Funktionen sind neu in Firefox 122, aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie auf der `about:config`-Seite nach der entsprechenden Präferenz und setzen Sie sie auf `true`. Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Deklarativer Shadow DOM:** `dom.webcomponents.shadowdom.declarative.enabled`.

  Das {{htmlelement("template")}}-Element unterstützt jetzt ein `shadowrootmode`-Attribut, das auf `open` oder `closed` gesetzt werden kann, die gleichen Werte wie die `mode`-Option der Methode [`attachShadow()`](/de/docs/Web/API/Element/attachShadow). Es ermöglicht die deklarative Erstellung eines Shadow-DOM-Unterbaums. ([Firefox Fehler 1712140](https://bugzil.la/1712140))

- **Klone-Option und Eigenschaft für Shadow DOM.**
  - Die Methode [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) unterstützt jetzt die Boolean-Option `clonable`, die angibt, ob der erstellte Shadow-Root klonbar ist: Der Standardwert ist `false`, aber wenn auf `true` gesetzt, wird der Shadow-Host mit [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode) oder [`Document.importNode()`](/de/docs/Web/API/Document/importNode) einschließlich Shadow-Root in die Kopie aufgenommen.
  - Die Schnittstelle [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) unterstützt jetzt die schreibgeschützte Eigenschaft [`clonable`](/de/docs/Web/API/ShadowRoot/clonable). Sie gibt `true` zurück, wenn der Shadow-Root klonbar ist, und `false` andernfalls. Sie gibt immer `true` für Shadow-Roots zurück, die über deklarativen Shadow DOM erstellt wurden.

  Wenn der Shadow-Root über deklarativen Shadow DOM erstellt wird, ist die `clonable`-Option standardmäßig auf `true` gesetzt und die `clonable`-Eigenschaft gibt `true` zurück. ([Firefox Fehler 1712140](https://bugzil.la/1868428))

- **Popover API:** `dom.element.popover.enabled`.

  Die Anzeige von Popovers über Seiteninhalte wird jetzt über HTML-Attribute oder JavaScript-API unterstützt, einschließlich der Gestaltung mit der CSS-Pseudoklasse [`:popover-open`](/de/docs/Web/CSS/:popover-open) und erweiterter Unterstützung für das Pseudo-Element [`::backdrop`](/de/docs/Web/CSS/::backdrop). Siehe die [Popover API](/de/docs/Web/API/Popover_API)-Referenz für weitere Details. ([Firefox Fehler 1823757](https://bugzil.la/1823757))

- **Zwischenablage lesen und schreiben:** `dom.events.asyncClipboard.clipboardItem`, `dom.events.asyncClipboard.readText` und `dom.events.asyncClipboard.writeText`.

  Die asynchrone [Zwischenablage-API](/de/docs/Web/API/Clipboard_API) wird jetzt vollständig unterstützt, einschließlich der Methoden [`read()`](/de/docs/Web/API/Clipboard/read), [`readText()`](/de/docs/Web/API/Clipboard/readText) und [`write()`](/de/docs/Web/API/Clipboard/write) sowie der Schnittstelle [`ClipboardItem`](/de/docs/Web/API/ClipboardItem). Ein Einfüge-Kontextmenü erscheint, damit der Benutzer zustimmt, wenn Zwischenspeicherdaten gelesen werden, die nicht von derselben Seite stammen. ([Firefox Fehler 1809106](https://bugzil.la/1809106))

- **`Intl.Segmenter`:** standardmäßig nur in Firefox Nightly aktiviert.

  Das {{jsxref("Intl.Segmenter")}}-Objekt ermöglicht eine genaue, lokalsensible Textsegmentierung eines Strings. Zum Beispiel, um Text in Wörter in einer Sprache zu unterteilen, die keine Leerzeichen zur Trennung verwendet: `Intl.Segmenter("ja-JP", { granularity: "word" })`. ([Firefox Fehler 1423593](https://bugzil.la/1423593))
