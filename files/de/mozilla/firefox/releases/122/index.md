---
title: Firefox 122 Versionshinweise für Entwickler
short-title: Firefox 122
slug: Mozilla/Firefox/Releases/122
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 122, die Entwickler betreffen. Firefox 122 wurde am [23. Januar 2024](https://whattrainisitnow.com/release/?version=122) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- {{HTMLElement("hr")}}-Elemente sind nun als Kinder von {{HTMLElement("select")}}-Elementen erlaubt. Dies ist eine neue Funktion, die die Lesbarkeit von Auswahllisten mit vielen Optionen verbessert. ([Firefox Bug 1830909](https://bugzil.la/1830909)).
- Das HTML-Attribut `type` hat keine Wirkung mehr, wenn es in {{HTMLElement("ol")}} auf `none`, `disc`, `circle` oder `square` oder in {{HTMLElement("ul")}} auf `1`, `a`, `A`, `i` oder `I` gesetzt ist. Da `type` ein veraltetes Attribut für `<ul>` und `<ol>`-Listen ist, sollten diese stattdessen mit der CSS-Eigenschaft {{CSSxref("list-style-type")}} gestaltet werden. ([Firefox Bug 1868087](https://bugzil.la/1868087)).

### CSS

- Die CSS-Eigenschaft {{cssxref("offset-position")}} ist jetzt standardmäßig verfügbar. Sie definiert die Anfangsposition eines Elements auf einem Pfad. ([Firefox Bug 1598152](https://bugzil.la/1598152))

- Die verschiedenen Methoden zum Definieren eines CSS-{{cssxref("offset-path")}} — einschließlich [`<basic-shape>`](/de/docs/Web/CSS/Reference/Properties/offset-path#basic-shape), [`<coord-box>`](/de/docs/Web/CSS/Reference/Properties/offset-path#coord-box) und [`url()`](/de/docs/Web/CSS/Reference/Properties/offset-path#url) — sind jetzt standardmäßig aktiviert. ([Firefox Bug 1598159](https://bugzil.la/1598159))

- Die CSS-Funktion {{cssxref("ray")}} ist jetzt standardmäßig verfügbar. Mit dieser Funktion können Sie einen {{cssxref("offset-path")}} als Liniensegment definieren, das von einer {{cssxref("offset-position")}} ausgeht und in die Richtung des angegebenen Winkels verläuft. ([Firefox Bug 1598151](https://bugzil.la/1598151))

- Die Eigenschaften {{CSSxref("clip-path")}} und {{CSSxref("offset-path")}} akzeptieren nun die Formfunktionen [`rect()`](/de/docs/Web/CSS/basic-shape/rect) und [`xywh()`](/de/docs/Web/CSS/basic-shape/xywh). Diese {{CSSXref("basic-shape")}}-Werte ermöglichen das Zuschneiden und Verschieben von Elementen mit einem Rechteck, das durch den Abstand vom Rand des Elements (`rect()`) oder durch Koordinaten und Größe (`xywh()`) definiert ist. ([Firefox Bug 1868722](https://bugzil.la/1868722)).

### JavaScript

- Die Methoden {{jsxref("ArrayBuffer.prototype.transfer()")}} und {{jsxref("ArrayBuffer.prototype.transferToFixedLength()")}} können nun verwendet werden, um [Eigenverantwortung zu übertragen](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer#transferring_arraybuffers) von Speicher von einem {{jsxref("ArrayBuffer")}} zu einem anderen. Nach der Übertragung ist der ursprüngliche Puffer von seinem ursprünglichen Speicher abgetrennt und daher unbrauchbar; der Zustand kann mithilfe von {{jsxref("ArrayBuffer.prototype.detached")}} überprüft werden. (Siehe [Firefox Bug 1865103](https://bugzil.la/1865103) für weitere Details.)

- In Übereinstimmung mit anderen Browsern berücksichtigen [`Date.parse()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/parse) und der [`Date()`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/Date) nur die ersten drei Buchstaben des angegebenen Monats, wenn [nicht standardmäßige Datumszeichenketten](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/parse#non-standard_date_strings) geparst werden. Zuvor wurden nur abgeschnittene Werte des vollständigen Monatsnamens mit drei oder mehr Zeichen akzeptiert (siehe [Firefox Bug 1862910](https://bugzil.la/1862910) für weitere Details).

### SVG

#### Entfernungen

- Unterstützung für `data:`-URLs in SVG-`<use>`-Elementen und über das [`SVGUseElement`](/de/docs/Web/API/SVGUseElement)-Interface wurde entfernt, um {{Glossary("Cross-site_scripting", "XSS")}}-Angriffe zu verhindern.
  Die alte Funktionalität kann durch Setzen der Präferenz `svg.use-element.data-url-href.allowed` auf `true` erneut aktiviert werden, dies wird aus Sicherheitsgründen jedoch nicht empfohlen ([Firefox Bug 1806964](https://bugzil.la/1806964)).

### APIs

- Die [LargestContentfulPaint API](/de/docs/Web/API/LargestContentfulPaint) wird jetzt unterstützt.
  Diese API ist Teil der [Performance APIs](/de/docs/Web/API/Performance_API) und bietet Zeitinformationen über die größte Bild- oder Textdarstellung, bevor Benutzer mit einer Webseite interagieren ([Firefox Bug 1866266](https://bugzil.la/1866266)).

#### DOM

- Die Methode [`HTMLSelectElement.showPicker()`](/de/docs/Web/API/HTMLSelectElement/showPicker) wird jetzt unterstützt, sodass das Browser-Auswahlwerkzeug für ein {{HTMLElement("select")}}-Element programmatisch gestartet werden kann, wenn es durch Benutzerinteraktion ausgelöst wird ([Firefox Bug 1865207](https://bugzil.la/1865207)).

#### Entfernungen

- Unterstützung für die CSS-Eigenschaft [`-moz-user-focus`](/de/docs/Web/CSS/Reference/Properties/-moz-user-focus) wurde entfernt ([Firefox Bug 1871745](https://bugzil.la/1871745) und [Firefox Bug 1868552](https://bugzil.la/1868552)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Ein Fehler wurde behoben, der verhinderte, dass [Aktionen ausführen](https://w3c.github.io/webdriver/#perform-actions) doppelte und andere Mehrfachklickevents für die `mouse`-Eingabequelle korrekt synthetisiert werden konnten ([Firefox Bug 1864614](https://bugzil.la/1864614)). Zusätzlich werden diese Ereignisse nur dann ausgelöst, wenn sich die tatsächliche Mausposition seit der letzten Klickaktion nicht geändert hat ([Firefox Bug 1681076](https://bugzil.la/1681076)).
- Die Definitionen für die `Pause`- und `Equal`-Tasten (NumPad-Block) wurden aktualisiert, um mit der WebDriver-Spezifikation in Einklang zu stehen ([Firefox Bug 1863687](https://bugzil.la/1863687)).

#### WebDriver BiDi

- Die Serialisierung von `WindowProxy`-Remote-Objekten funktioniert jetzt auch korrekt für Out-of-Process-Iframes ([Firefox Bug 1867667](https://bugzil.la/1867667)).
- Der [browsingContext.setViewport](https://w3c.github.io/webdriver-bidi/#command-browsingContext-setViewport)-Befehl unterscheidet jetzt zwischen `undefined` und `null` als Werte für das `viewport`-Argument. Wenn auf `undefined` gesetzt, bedeutet das, dass das Viewport unverändert bleiben soll, während `null` es auf seine ursprünglichen Dimensionen zurücksetzt ([Firefox Bug 1865618](https://bugzil.la/1865618)).
- Unterstützung für den [browsingContext.traverseHistory](https://w3c.github.io/webdriver-bidi/#command-browsingContext-traverseHistory)-Befehl wurde eingeführt, der die Navigation rückwärts und vorwärts im Browserverlauf ermöglicht ([Firefox Bug 1841018](https://bugzil.la/1841018)).
- Ein Fehler wurde in allen unterstützten Netzwerkereignissen behoben, bei dem die `context`-ID konsequent den Browsing-Kontext auf oberster Ebene meldete, selbst wenn die Navigation innerhalb eines Iframe stattfand ([Firefox Bug 1869735](https://bugzil.la/1869735)).

#### Marionette

- Ein Fehler mit [Holelementtext](https://w3c.github.io/webdriver/#dfn-get-element-text) wurde behoben, bei dem der Befehl fälschlicherweise einen leeren Text zurückgab, wenn sich das Element in einem Slot eines `ShadowRoot` befand ([Firefox Bug 1824664](https://bugzil.la/1824664)).

## Experimentelle Webfunktionen

Diese Funktionen sind neu in Firefox 122 enthalten, aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie nach der entsprechenden Präferenz auf der `about:config`-Seite und setzen Sie sie auf `true`. Weitere solcher Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Deklaratives Shadow DOM:** `dom.webcomponents.shadowdom.declarative.enabled`.

  Das {{htmlelement("template")}}-Element unterstützt jetzt ein `shadowrootmode`-Attribut, das entweder auf `open` oder `closed` gesetzt werden kann, dieselben Werte wie die `mode`-Option der Methode [`attachShadow()`](/de/docs/Web/API/Element/attachShadow). Es ermöglicht die Erstellung eines Shadow DOM-Teilbaums deklarativ. ([Firefox Bug 1712140](https://bugzil.la/1712140))

- **Kloneoption und -Eigenschaft für Shadow DOM.**
  - Die Methode [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) unterstützt jetzt die `clonable`-Boolean-Option, die angibt, ob der erstellte Shadow Root klonbar ist: Der Standardwert ist `false`, aber wenn er auf `true` gesetzt wird, wird der Shadow Host, der mit [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode) oder [`Document.importNode()`](/de/docs/Web/API/Document/importNode) geklont wird, den Shadow Root in der Kopie enthalten.
  - Das Interface [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) unterstützt jetzt die schreibgeschützte Eigenschaft [`clonable`](/de/docs/Web/API/ShadowRoot/clonable). Sie gibt `true` zurück, wenn der Shadow Root klonbar ist, und `false` andernfalls. Für Shadow Roots, die über deklaratives Shadow DOM erstellt wurden, wird immer `true` zurückgegeben.

  Wenn der Shadow Root über deklaratives Shadow DOM erstellt wird, ist die `clonable`-Option standardmäßig auf `true` gesetzt, und die `clonable`-Eigenschaft gibt `true` zurück. ([Firefox Bug 1868428](https://bugzil.la/1868428))

- **Popover-API:** `dom.element.popover.enabled`.

  Das Anzeigen von Popovers über dem Seiteninhalt wird jetzt über HTML-Attribute oder die JavaScript-API unterstützt, einschließlich der Gestaltung mit der CSS-[[`:popover-open`]](/de/docs/Web/CSS/Reference/Selectors/:popover-open) Pseudo-Klasse und erweiterter Unterstützung für das [[`::backdrop`]](/de/docs/Web/CSS/Reference/Selectors/::backdrop) Pseudo-Element. Weitere Details finden Sie im [Popover-API](/de/docs/Web/API/Popover_API)-Referenz. ([Firefox Bug 1823757](https://bugzil.la/1823757))

- **Lesen und Schreiben der Zwischenablage:** `dom.events.asyncClipboard.clipboardItem`, `dom.events.asyncClipboard.readText` und `dom.events.asyncClipboard.writeText`.

  Die asynchrone [Zwischenablage-API](/de/docs/Web/API/Clipboard_API) wird jetzt vollständig unterstützt, einschließlich der Methoden [`read()`](/de/docs/Web/API/Clipboard/read), [`readText()`](/de/docs/Web/API/Clipboard/readText) und [`write()`](/de/docs/Web/API/Clipboard/write) sowie dem Interface [`ClipboardItem`](/de/docs/Web/API/ClipboardItem). Ein Kontextmenü zum Einfügen erscheint für den Benutzer zur Bestätigung, wenn Zwischenablagedaten gelesen werden, die nicht von derselben Ursprungsseite bereitgestellt wurden. ([Firefox Bug 1809106](https://bugzil.la/1809106))

- **`Intl.Segmenter`:** standardmäßig nur in Firefox Nightly aktiviert.

  Das {{jsxref("Intl.Segmenter")}}-Objekt ermöglicht die genaue lokalsensitive Textsegmentierung eines Strings. Zum Beispiel, um einen Text in Wörter in einer Sprache aufzuteilen, die keine Leerzeichen verwendet, um sie zu trennen: `Intl.Segmenter("ja-JP", { granularity: "word" })`. ([Firefox Bug 1423593](https://bugzil.la/1423593))
