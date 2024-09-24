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

- {{HTMLElement("hr")}} Elemente sind jetzt als Kind-Elemente von {{HTMLElement("select")}} Elementen erlaubt. Dies ist eine neue Funktion, die die Lesbarkeit von Auswahllisten mit vielen Optionen verbessert. ([Firefox Fehler 1830909](https://bugzil.la/1830909)).
- Das `type` HTML-Attribut hat keine Wirkung mehr, wenn es auf `none`, `disc`, `circle` oder `square` in {{HTMLElement("ol")}} gesetzt ist und keine Wirkung mehr, wenn es auf `1`, `a`, `A`, `i` oder `I` in {{HTMLElement("ul")}} gesetzt ist. Da `type` ein veraltetes Attribut für `<ul>` und `<ol>` Listen ist, sollten diese stattdessen mit der {{CSSxref("list-style-type")}} CSS-Eigenschaft gestylt werden. ([Firefox Fehler 1868087](https://bugzil.la/1868087)).

### CSS

- Die CSS-Eigenschaft {{cssxref("offset-position")}} ist jetzt standardmäßig verfügbar. Sie definiert die Anfangsposition eines Elements auf einem Pfad. ([Firefox Fehler 1598152](https://bugzil.la/1598152))

- Die verschiedenen Methoden zur Definition eines CSS {{cssxref("offset-path")}} — einschließlich [`<basic-shape>`](/de/docs/Web/CSS/offset-path#basic-shape), [`<coord-box>`](/de/docs/Web/CSS/offset-path#coord-box) und [`url()`](/de/docs/Web/CSS/offset-path#url) — sind jetzt standardmäßig aktiviert. ([Firefox Fehler 1598159](https://bugzil.la/1598159))

- Die CSS-Funktion {{cssxref("ray")}} ist jetzt standardmäßig verfügbar. Sie können diese Funktion verwenden, um einen {{cssxref("offset-path")}} als Liniensegment zu definieren, das von einer {{cssxref("offset-position")}} ausgeht und sich in Richtung des angegebenen Winkels erstreckt. ([Firefox Fehler 1598151](https://bugzil.la/1598151))

- Die Eigenschaften {{CSSxref("clip-path")}} und {{CSSxref("offset-path")}} akzeptieren jetzt die Formfunktionen [`rect()`](/de/docs/Web/CSS/basic-shape/rect) und [`xywh()`](/de/docs/Web/CSS/basic-shape/xywh). Diese {{CSSXref("basic-shape")}} Werte ermöglichen das Zuschneiden und Versetzen von Elementen mit einem Rechteck, definiert durch die Entfernung vom Rand des Elements (`rect()`) oder durch Koordinaten und Größe (`xywh()`). ([Firefox Fehler 1868722](https://bugzil.la/1868722)).

### JavaScript

- Die Methoden {{jsxref("ArrayBuffer.prototype.transfer()")}} und {{jsxref("ArrayBuffer.prototype.transferToFixedLength()")}} können jetzt verwendet werden, um den [Besitz von Speicher zu übertragen](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer#transferring_arraybuffers) von einem {{jsxref("ArrayBuffer")}} zu einem anderen. Nach der Übertragung ist der ursprüngliche Puffer von seinem ursprünglichen Speicher getrennt und daher unbrauchbar; der Zustand kann mit {{jsxref("ArrayBuffer.prototype.detached")}} überprüft werden. (Siehe [Firefox Fehler 1865103](https://bugzil.la/1865103) für weitere Details.)

- Zur Angleichung an andere Browser betrachten [`Date.parse()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/parse) und der [`Date()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/Date) nur die ersten drei Buchstaben des angegebenen Monats, wenn [nicht-standardisierte Datumsstrings](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/parse#non-standard_date_strings) analysiert werden. Bisher wurden nur gekürzte Werte des vollständigen Monatsnamens mit drei oder mehr Zeichen akzeptiert (siehe [Firefox Fehler 1862910](https://bugzil.la/1862910) für weitere Details).

### SVG

#### Entfernungen

- Unterstützung für `data:` URLs in SVG `<use>` Elementen und über das [`SVGUseElement`](/de/docs/Web/API/SVGUseElement) Interface wurde entfernt, um [XSS](/de/docs/Glossary/Cross-site_scripting) Angriffe zu verhindern.
  Die alte Funktionalität kann durch Setzen der `svg.use-element.data-url-href.allowed` Präferenz auf `true` wieder aktiviert werden, obwohl dies aus Sicherheitsgründen nicht empfohlen wird ([Firefox Fehler 1806964](https://bugzil.la/1806964)).

### APIs

- Die [LargestContentfulPaint API](/de/docs/Web/API/LargestContentfulPaint) wird jetzt unterstützt.
  Diese API ist Teil der [Performance APIs](/de/docs/Web/API/Performance_API) und liefert Timing-Informationen über das größte Bild oder Text, bevor Benutzer mit einer Webseite interagieren ([Firefox Fehler 1866266](https://bugzil.la/1866266)).

#### DOM

- Die Methode {{domxref("HTMLSelectElement.showPicker()")}} wird jetzt unterstützt und ermöglicht es, den Browser-Picker für ein {{HTMLElement("select")}} Element bei Benutzereingriffen programmgesteuert zu starten ([Firefox Fehler 1865207](https://bugzil.la/1865207)).

#### Entfernungen

- Unterstützung für die CSS Eigenschaft [`-moz-user-focus`](/de/docs/Web/CSS/-moz-user-focus) wurde entfernt ([Firefox Fehler 1871745](https://bugzil.la/1871745) und [Firefox Fehler 1868552](https://bugzil.la/1868552)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Ein Fehler wurde behoben, der verhinderte, dass [Perform Actions](https://w3c.github.io/webdriver/#perform-actions) korrekt Doppel- und andere Mehrfachklick-Ereignisse für die `mouse` Eingabequelle synthetisierte ([Firefox Fehler 1864614](https://bugzil.la/1864614)). Darüber hinaus werden diese Ereignisse nur dann ausgelöst, wenn die tatsächliche Mausposition seit der letzten Klickaktion unverändert geblieben ist ([Firefox Fehler 1681076](https://bugzil.la/1681076)).
- Die Definitionen für die Tasten `Pause` und `Equal` (Numerikblock) wurden aktualisiert, um sie mit der WebDriver-Spezifikation in Einklang zu bringen ([Firefox Fehler 1863687](https://bugzil.la/1863687)).

#### WebDriver BiDi

- Die Serialisierung von `WindowProxy` Remote-Objekten funktioniert jetzt auch korrekt für Out-of-Process iframes ([Firefox Fehler 1867667](https://bugzil.la/1867667)).
- Der [browsingContext.setViewport](https://w3c.github.io/webdriver-bidi/#command-browsingContext-setViewport) Befehl unterscheidet jetzt zwischen `undefined` und `null` als Werten für das `viewport` Argument. Wenn auf `undefined` gesetzt, bedeutet das, dass das Viewport unverändert bleiben soll, während `null` es auf seine ursprünglichen Abmessungen zurücksetzt ([Firefox Fehler 1865618](https://bugzil.la/1865618)).
- Unterstützung für den [browsingContext.traverseHistory](https://w3c.github.io/webdriver-bidi/#command-browsingContext-traverseHistory) Befehl wurde eingeführt, der Bewegungen rückwärts und vorwärts in der Browser-Historie ermöglicht ([Firefox Fehler 1841018](https://bugzil.la/1841018)).
- Ein Fehler in allen unterstützten Netzwerkereignissen wurde behoben, bei dem die `context` ID konsequent den Browse-Kontext der obersten Ebene meldete, selbst wenn die Navigation innerhalb eines iframes erfolgte ([Firefox Fehler 1869735](https://bugzil.la/1869735)).

#### Marionette

- Ein Fehler mit [Get Element Text](https://w3c.github.io/webdriver/#dfn-get-element-text) wurde behoben, bei dem der Befehl fälschlicherweise einen leeren Text zurückgab, wenn sich das Element innerhalb eines ShadowRoot Slots befand ([Firefox Fehler 1824664](https://bugzil.la/1824664)).

## Experimentelle Web-Funktionen

Diese Funktionen sind neu in Firefox 122 enthalten, aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie die entsprechende Präferenz auf der `about:config` Seite und setzen Sie sie auf `true`. Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Deklaratives Shadow DOM:** `dom.webcomponents.shadowdom.declarative.enabled`.

  Das {{htmlelement("template")}} Element unterstützt jetzt ein `shadowrootmode` Attribut, das entweder auf `open` oder `closed` gesetzt werden kann, dieselben Werte wie die `mode` Option der {{domxref("Element.attachShadow()", "attachShadow()")}} Methode. Es ermöglicht die deklarative Erstellung eines Shadow-DOM-Unterbaums. ([Firefox Fehler 1712140](https://bugzil.la/1712140))

- **Klonbare Option und Eigenschaft für Shadow DOM.**

  - Die Methode {{domxref("Element.attachShadow()")}} unterstützt jetzt die `clonable` boolesche Option, die angibt, ob die erstellte Shadow-Root klonbar ist: Der Standardwert ist `false`, aber wenn auf `true` gesetzt, enthält der mit {{domxref("Node.cloneNode()")}} oder {{domxref("Document.importNode()")}} geklonte Shadow-Host die Shadow-Root in der Kopie.
  - Das {{domxref("ShadowRoot")}} Interface unterstützt jetzt die schreibgeschützte Eigenschaft {{domxref("ShadowRoot.clonable", "clonable")}}. Sie gibt `true` zurück, wenn die Shadow-Root klonbar ist, und `false` andernfalls. Sie gibt immer `true` für Shadow-Roots zurück, die über deklaratives Shadow DOM erstellt wurden.

  Wenn die Shadow-Root über deklaratives Shadow DOM erstellt wird, ist die `clonable` Option standardmäßig auf `true` gesetzt, und die `clonable` Eigenschaft gibt `true` zurück. ([Firefox Fehler 1712140](https://bugzil.la/1868428))

- **Popover API:** `dom.element.popover.enabled`.

  Das Anzeigen von Popups über dem Seiteninhalt wird jetzt über HTML-Attribute oder JavaScript API unterstützt, einschließlich Styling mit der CSS [`:popover-open`](/de/docs/Web/CSS/:popover-open) Pseudo-Klasse und erweiterter Unterstützung für das [`::backdrop`](/de/docs/Web/CSS/::backdrop) Pseudo-Element. Weitere Details finden Sie in der [Popover API](/de/docs/Web/API/Popover_API) Referenz. ([Firefox Fehler 1823757](https://bugzil.la/1823757))

- **Zwischenablage lesen und schreiben:** `dom.events.asyncClipboard.clipboardItem`, `dom.events.asyncClipboard.readText` und `dom.events.asyncClipboard.writeText`.

  Die asynchrone [Zwischenablage API](/de/docs/Web/API/Clipboard_API) wird jetzt vollständig unterstützt, einschließlich der Methoden [`read()`](/de/docs/Web/API/Clipboard/read), [`readText()`](/de/docs/Web/API/Clipboard/readText) und [`write()`](/de/docs/Web/API/Clipboard/write) sowie des {{domxref('ClipboardItem')}} Interface. Ein Kontextmenü zum Einfügen erscheint, damit der Benutzer bestätigen kann, wenn Daten aus der Zwischenablage gelesen werden, die nicht von derselben Ursprungsseite bereitgestellt wurden. ([Firefox Fehler 1809106](https://bugzil.la/1809106))

- **`Intl.Segmenter`:** standardmäßig nur in Firefox Nightly aktiviert.

  Das {{jsxref("Intl.Segmenter")}} Objekt ermöglicht eine genaue lokalsensible Textsegmentierung eines Strings. Zum Beispiel, um einen Text in Wörter in einer Sprache zu zerlegen, die keine Leerzeichen zwischen Wörtern verwendet: `Intl.Segmenter("ja-JP", { granularity: "word" })`. ([Firefox Fehler 1423593](https://bugzil.la/1423593))

## Ältere Versionen

{{Firefox_for_developers}}
