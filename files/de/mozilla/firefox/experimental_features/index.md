---
title: Experimentelle Funktionen in Firefox
short-title: Experimentelle Funktionen
slug: Mozilla/Firefox/Experimental_features
l10n:
  sourceCommit: 62b6832823a839d2c47003307d4a4fd9df91fb4f
---

Diese Seite listet die experimentellen und teilweise implementierten Funktionen von Firefox auf, einschließlich sich entwickelnder oder vorgeschlagener Webplattform-Standards. Jeder Eintrag unten enthält Informationen über die Builds, in denen eine Funktion enthalten ist (Nightly, Beta, Developer Edition oder Release), ob sie standardmäßig aktiviert ist oder nicht, und den Namen der **Präferenz**, die Sie verwenden können, um die Funktion zu aktivieren oder zu konfigurieren. Die Beschreibung jeder Funktion enthält auch Links zu relevanten [Bugzilla-Fehlern](https://bugzilla.mozilla.org), die die Funktion implementieren oder aktivieren. Diese Informationen ermöglichen es Ihnen, experimentelle Funktionen auszuprobieren und Feedback zu geben, bevor sie offiziell veröffentlicht werden.

In Bezug auf den Lebenszyklus erscheinen neue Funktionen in der Regel zuerst in [Nightly](https://www.firefox.com/de-DE/channel/desktop/#nightly), wo sie oft standardmäßig für frühzeitiges Feedback und Tests aktiviert sind. Wenn keine größeren Probleme gefunden werden, sind sie in den Vorab-Releases [Beta](https://www.firefox.com/de-DE/channel/desktop/#beta) und [Developer Edition](https://www.firefox.com/de-DE/channel/desktop/developer/) enthalten. Schließlich werden freigegebene Funktionen im stabilen [Release](https://www.firefox.com/de-DE/) Kanal veröffentlicht. Sobald eine Funktion in einer Veröffentlichung standardmäßig aktiviert ist, wird sie nicht mehr als experimentell betrachtet und von dieser Seite entfernt.

Um diese Funktionen zu aktivieren, geben Sie `about:config` in die Adressleiste von Firefox ein, suchen Sie nach der zugehörigen **Präferenz** und ändern Sie den Wert, der normalerweise zwischen `true` und `false` umgeschaltet wird. Abhängig von der Funktion müssen Sie möglicherweise den Browser neu starten, damit die Änderung wirksam wird. Überprüfen Sie den [Firefox-Konfigurationseditor](https://support.mozilla.org/de-DE/kb/about-config-editor-firefox) Support-Artikel für weitere Informationen zur Verwaltung von Präferenzen in Firefox.

## HTML

### Layout für input type="search"

Das Layout für `input type="search"` wurde aktualisiert. Dies führt dazu, dass ein Suchfeld ein Lösch-Icon erhält, wenn jemand zu tippen beginnt, um andere Browserimplementierungen anzupassen. (Siehe [Firefox Bug 558594](https://bugzil.la/558594) für weitere Details.)

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 81                  | Nein                     |
| Developer Edition | 81                  | Nein                     |
| Beta              | 81                  | Nein                     |
| Release           | 81                  | Nein                     |

- `layout.forms.input-type-search.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Passwortanzeige umschalten

HTML-Passworteingabeelemente ([`<input type="password">`](/de/docs/Web/HTML/Reference/Elements/input/password)) enthalten ein "Auge"-Icon, das umgeschaltet werden kann, um den Passworttext anzuzeigen oder zu verbergen ([Firefox Bug 502258](https://bugzil.la/502258)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 96                  | Nein                     |
| Developer Edition | 96                  | Nein                     |
| Beta              | 96                  | Nein                     |
| Release           | 96                  | Nein                     |

- `layout.forms.reveal-password-button.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Zeitpicker in `datetime-local` und `time` Eingabeelementen

Die HTML [`<input type="datetime-local">`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local) und [`<input type="time">`](/de/docs/Web/HTML/Reference/Elements/input/time) Elemente unterstützen einen Zeitpicker. ([Firefox Bug 1726108](https://bugzil.la/1726108)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 144                 | Nein                     |
| Developer Edition | 144                 | Nein                     |
| Beta              | 144                 | Nein                     |
| Release           | 144                 | Nein                     |

- `dom.forms.datetime.timepicker`
  - : Setzen Sie auf `true`, um zu aktivieren.

### `alpha` und `colorspace` Attribute in `color` Eingabeelementen

Das HTML [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color) Element unterstützt [`alpha`](/de/docs/Web/HTML/Reference/Elements/input/color#alpha) & [`colorspace`](/de/docs/Web/HTML/Reference/Elements/input/color#colorspace) Attribute. ([Firefox Bug 1919718](https://bugzil.la/1919718)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 149                 | Ja                       |
| Developer Edition | -                   | -                        |
| Beta              | -                   | -                        |
| Release           | -                   | -                        |

- `dom.forms.html_color_picker.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

## CSS

### Hex-Boxen zur Anzeige von verlorenen Steuerzeichen

Diese Funktion rendert Steuerzeichen (Unicode-Kategorie Cc) außer _Tabulator_ (`U+0009`), _Zeilenvorschub_ (`U+000A`), _Seitenvorschub_ (`U+000C`) und _Wagenrücklauf_ (`U+000D`) als eine Hex-Box, wenn sie unerwartet sind. (Siehe [Firefox Bug 1099557](https://bugzil.la/1099557) für weitere Details.)

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 43                  | Ja                       |
| Developer Edition | 43                  | Nein                     |
| Beta              | 43                  | Nein                     |
| Release           | 43                  | Nein                     |

- `layout.css.control-characters.visible`
  - : Setzen Sie auf `true`, um zu aktivieren.

### initial-letter Eigenschaft

Die {{cssxref("initial-letter")}} CSS-Eigenschaft ist Teil der [CSS Inline Layout](https://drafts.csswg.org/css-inline/) Spezifikation und ermöglicht es Ihnen, festzulegen, wie initiale Buchstaben angezeigt werden, die fallen gelassen, angehoben oder abgesenkt werden. (Siehe [Firefox Bug 1223880](https://bugzil.la/1223880) für weitere Details.)

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 50                  | Nein                     |
| Developer Edition | 50                  | Nein                     |
| Beta              | 50                  | Nein                     |
| Release           | 50                  | Nein                     |

- `layout.css.initial-letter.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### fit-content() Funktion

Die [`fit-content()`](/de/docs/Web/CSS/Reference/Values/fit-content_function) Funktion wie sie auf {{cssxref("width")}} und andere Größenangaben angewendet wird. Diese Funktion wird bereits gut für die Größenbestimmung von CSS Grid Layout-Spuren unterstützt. (Siehe [Firefox Bug 1312588](https://bugzil.la/1312588) für weitere Details.)

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 91                  | Nein                     |
| Developer Edition | 91                  | Nein                     |
| Beta              | 91                  | Nein                     |
| Release           | 91                  | Nein                     |

- `layout.css.fit-content-function.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Scroll-getriebene Animationen

Früher als "scroll-verknüpfte Animationen" bezeichnet, hängt eine [scroll-getriebene Animation](/de/docs/Web/CSS/Guides/Scroll-driven_animations) vom Scroll-Position eines Scrollbalkens ab, anstatt von der Zeit oder einer anderen Dimension. Die {{cssxref('scroll-timeline-name')}} und {{cssxref('scroll-timeline-axis')}} Eigenschaften (und die {{cssxref('scroll-timeline')}} Kurzstruktur-Eigenschaft) erlauben es Ihnen festzulegen, dass ein bestimmter Scrollbalken in einem bestimmten benannten Container als Quelle für eine scroll-getriebene Animation verwendet werden kann. Die Scroll-Zeitleiste kann dann mit einer [Animation](/de/docs/Web/CSS/Guides/Animations) verbunden werden, indem die {{cssxref('animation-timeline')}} Eigenschaft auf den Namen gesetzt wird, der mit `scroll-timeline-name` definiert wurde.

Beim Verwenden der {{cssxref('scroll-timeline')}} Kurzstruktur-Eigenschaft muss die Reihenfolge der Eigenschaftswerte {{cssxref('scroll-timeline-name')}} gefolgt von {{cssxref('scroll-timeline-axis')}} sein. Die Lang- und Kurzstruktur-Eigenschaften sind beide hinter der Präferenz verfügbar. Alternativ können Sie die {{cssxref("animation-timeline/scroll")}} funktionale Notation mit {{cssxref('animation-timeline')}} verwenden, um anzuzeigen, dass eine Scrollbalkenachse in einem übergeordneten Element für die Zeitleiste verwendet wird.

Für weitere Informationen siehe [Firefox Bug 1807685](https://bugzil.la/1807685), [Firefox Bug 1804573](https://bugzil.la/1804573), [Firefox Bug 1809005](https://bugzil.la/1809005), [Firefox Bug 1676791](https://bugzil.la/1676791), [Firefox Bug 1754897](https://bugzil.la/1754897), [Firefox Bug 1817303](https://bugzil.la/1817303), und [Firefox Bug 1737918](https://bugzil.la/1737918).

Die {{cssxref('timeline-scope')}}, {{cssxref('animation-range-start')}} und {{cssxref('animation-range-end')}} Eigenschaften (und die {{cssxref('animation-range')}} Kurzstruktur-Eigenschaft) werden noch nicht unterstützt. Für weitere Informationen siehe [Firefox Bug 1676779](https://bugzil.la/1676779).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 136                 | Ja                       |
| Developer Edition | 110                 | Nein                     |
| Beta              | 110                 | Nein                     |
| Release           | 110                 | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### prefers-reduced-transparency Medienfeature

Das CSS {{cssxref("@media/prefers-reduced-transparency")}} Medienfeature ermöglicht es Ihnen zu erkennen, ob ein Benutzer die Einstellung aktiviert hat, um die Menge an transparenten oder durchsichtigen Schichteffekten auf ihrem Gerät zu minimieren. Siehe ([Firefox Bug 1736914](https://bugzil.la/1736914)) für weitere Details.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 113                 | Nein                     |
| Developer Edition | 113                 | Nein                     |
| Beta              | 113                 | Nein                     |
| Release           | 113                 | Nein                     |

- `layout.css.prefers-reduced-transparency.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### inverted-colors Medienfeature

Das CSS {{cssxref("@media/inverted-colors")}} Medienfeature ermöglicht es Ihnen zu erkennen, ob ein Benutzeragent oder das zugrunde liegende Betriebssystem Farben invertiert. Siehe ([Firefox Bug 1794628](https://bugzil.la/1794628)) für weitere Details.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 114                 | Nein                     |
| Developer Edition | 114                 | Nein                     |
| Beta              | 114                 | Nein                     |
| Release           | 114                 | Nein                     |

- `layout.css.inverted-colors.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Benannte Ansichtsfortschrittszeitleisten-Eigenschaft

Die CSS {{cssxref("view-timeline-name")}} Eigenschaft ermöglicht es Ihnen, einem bestimmten Element einen Namen zu geben, der festlegt, dass sein übergeordnetes Scroll-Element die Quelle einer Ansichtsfortschrittszeitleiste ist. Der Name kann dann der `animation-timeline` zugewiesen werden, was dazu führt, dass das zugehörige Element animiert wird, während es sich durch den sichtbaren Bereich seines übergeordneten Scrollers bewegt. Siehe ([Firefox Bug 1737920](https://bugzil.la/1737920)) für weitere Details.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 136                 | Ja                       |
| Developer Edition | 114                 | Nein                     |
| Beta              | 114                 | Nein                     |
| Release           | 114                 | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Anonyme Ansichtsfortschrittszeitleisten-Funktion

Die CSS {{cssxref("animation-timeline/view")}} Funktion ermöglicht es Ihnen anzugeben, dass die `animation-timeline` für ein Element eine Ansichtsfortschrittszeitleiste ist, die das Element animiert, während es sich durch den sichtbaren Bereich seines übergeordneten Scrollers bewegt. Die Funktion definiert die Achse des übergeordneten Elements, das die Zeitleiste liefert, sowie den Versatz innerhalb des sichtbaren Bereichs, bei dem die Animation beginnt und endet. Siehe ([Firefox Bug 1808410](https://bugzil.la/1808410)) für weitere Details.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 136                 | Ja                       |
| Developer Edition | 114                 | Nein                     |
| Beta              | 114                 | Nein                     |
| Release           | 114                 | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Vendor-prefixierte Transformations-Eigenschaften

Die `-moz-` prefixierten [CSS transform](/de/docs/Web/CSS/Guides/Transforms) Eigenschaften können durch Setzen der `layout.css.prefixes.transforms` Präferenz auf `false` deaktiviert werden. Das Ziel ist es, diese zu deaktivieren, sobald die Standard-CSS-Zoom-Eigenschaften gut unterstützt werden. ([Firefox Bug 1886134](https://bugzil.la/1886134), [Firefox Bug 1855763](https://bugzil.la/1855763)).

Speziell wird diese Präferenz die folgenden prefixierten Eigenschaften deaktivieren:

- `-moz-backface-visibility`
- `-moz-perspective`
- `-moz-perspective-origin`
- `-moz-transform`
- `-moz-transform-origin`
- `-moz-transform-style`

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 120                 | Ja                       |
| Developer Edition | 120                 | Ja                       |
| Beta              | 120                 | Ja                       |
| Release           | 120                 | Ja                       |

- `layout.css.prefixes.transforms`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Symmetrisches `letter-spacing`

Die CSS {{cssxref("letter-spacing")}} Eigenschaft verteilt den angegebenen Zeichenabstand nun gleichmäßig auf beiden Seiten jedes Zeichens. Das unterscheidet sich vom aktuellen Verhalten, bei dem der Abstand hauptsächlich auf eine Seite hinzugefügt wird. Dieser Ansatz kann den Textabstand verbessern, insbesondere bei Texten mit gemischter Richtung. ([Firefox Bug 1891446](https://bugzil.la/1891446)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 128                 | Ja                       |
| Developer Edition | 128                 | Ja                       |
| Beta              | 127                 | Nein                     |
| Release           | 127                 | Nein                     |

- `layout.css.letter-spacing.model`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Erlauben von Pseudo-Elementen nach Element-gestützten Pseudo-Elementen

Es wurde begonnen, die Arbeit daran, [Pseudo-Elemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) wie {{cssxref("::first-letter")}} und {{cssxref("::before")}}, um hinter [Element-gestützten Pseudo-Elementen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements#element-backed_pseudo-elements) wie {{cssxref("::details-content")}} und {{cssxref("::file-selector-button")}} gestellt werden zu können.

Dies wird es den Benutzern ermöglichen, zum Beispiel den ersten Buchstaben des {{htmlElement("details")}}-Elements zu stylen, indem der CSS-Selektor `::details-content::first-letter` verwendet wird oder Inhalte vor einem {{HTMLElement("input") }} von [`type="file"`](/de/docs/Web/HTML/Reference/Elements/input/file) mit dem CSS-Selektor `::file-selector-button::before` hinzuzufügen.

Derzeit kann nur die Unterstützung für `::details-content::first-letter` mit `@supports(::details-content::first-letter)` geparst werden. Das Pseudo-Element `::file-selector-button` ist noch nicht als ein Element-basiertes Pseudo-Element markiert, daher gibt es keine Möglichkeit, dies zu testen. ([Firefox Bug 1953557](https://bugzil.la/1953557), [Firefox Bug 1941406](https://bugzil.la/1941406)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 138                 | Nein                     |
| Developer Edition | 138                 | Nein                     |
| Beta              | 138                 | Nein                     |
| Release           | 138                 | Nein                     |

### `:heading` und `:heading()` Pseudo-Klassen

Die {{cssxref(":heading")}} Pseudo-Klasse ermöglicht es Ihnen, alle [Überschriftselemente](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) (`<h1>`-`<h6>`) auf einmal zu stylen, anstatt sie einzeln anzusprechen. Die {{cssxref(":heading()")}} funktionale Pseudo-Klasse ermöglicht es Ihnen, Überschriftselemente zu stylen, die einer durch Kommas getrennten Liste von ganzen Zahlen entsprechen, die den Überschriftenleveln entsprechen. ([Firefox Bug 1974386](https://bugzil.la/1974386) & [Firefox Bug 1984310](https://bugzil.la/1984310)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 142                 | Nein                     |
| Developer Edition | 142                 | Nein                     |
| Beta              | 142                 | Nein                     |
| Release           | 142                 | Nein                     |

- `layout.css.heading-selector.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### `@custom-media` at-rule

Die {{cssxref("@custom-media")}} CSS at-Regel definiert Aliasse für lange oder komplexe Medienabfragen. Anstatt die gleiche hartcodierte `<media-query-list>` in mehreren `@media` at-Regeln zu wiederholen, kann sie einmal in einer `@custom-media` at-Regel definiert und im gesamten Stylesheet bei Bedarf referenziert werden. ([Firefox Bug 1744292](https://bugzil.la/1744292)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 148                 | Nein                     |
| Developer Edition | 148                 | Nein                     |
| Beta              | 148                 | Nein                     |
| Release           | 148                 | Nein                     |

- `layout.css.custom-media.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### `<attr-type>`-Werte in der `attr()` CSS-Funktion

Die {{cssxref("attr")}} CSS-Funktion unterstützt nun [`<attr-type>`](/de/docs/Web/CSS/Reference/Values/attr#attr-type) Werte. Dies ermöglicht, anzugeben, wie ein Attributwert in einen CSS-Wert geparst wird, und diese Werte direkt von [`data-*`](/de/docs/Web/HTML/How_to/Use_data_attributes) zu nehmen. ([Firefox Bug 1986631](https://bugzil.la/1986631), [Firefox Bug 1998245](https://bugzil.la/1998245))

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 149                 | Nein                     |
| Developer Edition | 149                 | Nein                     |
| Beta              | 149                 | Nein                     |
| Release           | 149                 | Nein                     |

- `layout.css.attr.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Namensraum-Attribute in der `attr()` CSS-Funktion

Die {{cssxref("attr")}} CSS-Funktion akzeptiert nun [namensraum-Attribute](/de/docs/Web/CSS/Reference/Values/attr#namespaces). Dies ermöglicht es, Attribute von Elementen von [XML](/de/docs/Web/XML)-basierten Sprachen, wie [SVG](/de/docs/Web/SVG) zu entnehmen und diese entsprechend zu stylen. ([Firefox Bug 2014060](https://bugzil.la/2014060).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 150                 | Nein                     |
| Developer Edition | 150                 | Nein                     |
| Beta              | 150                 | Nein                     |
| Release           | 150                 | Nein                     |

- `layout.css.attr.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Absolut positionierte Elemente in Multi-Column-Containern und beim Drucken

Absolut positionierte Elemente innerhalb von [Multi-Column-Containern](/de/docs/Web/CSS/Guides/Multicol_layout) und beim Drucken sind nun korrekt positioniert und fragmentiert. Dies verbessert die Interoperabilität mit anderen Browsern und verhindert Layout-Probleme wie überlappenden Text oder Inhaltsverlust. ([Firefox Bug 2018797](https://bugzil.la/2018797)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 150                 | Ja                       |
| Developer Edition | 150                 | Nein                     |
| Beta              | 150                 | Nein                     |
| Release           | 150                 | Nein                     |

- `layout.abspos.fragmentainer-aware-positioning.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### `@container style()` Bereich-Syntax-Abfragen

Die [`@container`](/de/docs/Web/CSS/Reference/At-rules/@container) CSS at-Regel [`style()`](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries) Abfragen unterstützen jetzt die _Bereich-Syntax_. Dies erlaubt es, zu überprüfen, ob ein Container über eine gültige CSS-benutzerdefinierte Eigenschaft verfügt und ihren Wert mit Vergleichsoperatoren wie `>`, `<`, `>=` und `<=` zu vergleichen und entsprechend Stile auf seine Kinder anzuwenden. ([Firefox Bug 2024601](https://bugzil.la/2024601)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 151                 | Nein                     |
| Developer Edition | 151                 | Nein                     |
| Beta              | 151                 | Nein                     |
| Release           | 151                 | Nein                     |

- `layout.css.attr.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

## SVG

**Keine experimentellen Funktionen in diesem Veröffentlichungzyklus.**

## JavaScript

### Mehrere Import-Maps

Unterstützung für [mehrere Import-Maps](/de/docs/Web/HTML/Reference/Elements/script/type/importmap#merging_multiple_import_maps). Diese bieten Entwicklern mehr Flexibilität bei der Strukturierung und dem Laden von JavaScript-Modulen, da sie nicht mehr alle ihre Modulmappings im Voraus kennen und sie in einer einzigen Import-Map deklarieren müssen, um Module zu laden. ([Firefox Bug 1916277](https://bugzil.la/1916277)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 150                 | Nein                     |
| Developer Edition | 150                 | Nein                     |
| Beta              | 150                 | Nein                     |
| Release           | 150                 | Nein                     |

- `dom.multiple_import_maps.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

## APIs

### Geschachtelte benutzerdefinierte Element-Registrierungen

Unterstützung für [geschachtelte benutzerdefinierte Element-Registrierungen](/de/docs/Web/API/Web_components/Using_custom_elements#scoped_custom_element_registries) wird implementiert. Geschachtelte Registrierungen ermöglichen es einem Schattenbaum, ein unabhängiges [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry) zu erstellen, dessen Definitionen nur auf diesen spezifischen DOM-Teilbaum angewendet werden. Dies kann verwendet werden, um Kollisionen zu vermeiden, bei denen mehrere Web-Komponenten Elemente mit demselben Namen deklarieren.

Die Implementierung umfasst:

- `customElementRegistry` Eigenschaft auf [`Document`](/de/docs/Web/API/Document), [`Element`](/de/docs/Web/API/Element), und [`ShadowRoot`](/de/docs/Web/API/ShadowRoot).
  ([Firefox Bug 2018900](https://bugzil.la/2018900)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 150                 | Nein                     |
| Developer Edition | 150                 | Nein                     |
| Beta              | 150                 | Nein                     |
| Release           | 150                 | Nein                     |

- `dom.scoped-custom-element-registries.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### CSS Typed Object Model Level 1

Die Implementierungsarbeit am [CSS Typed OM Level 1](https://drafts.css-houdini.org/css-typed-om/) hat begonnen. Zum Beispiel wird die [`to()`](/de/docs/Web/API/CSSNumericValue/to) Methode der [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) Schnittstelle unterstützt, um einen CSS-numerischen Wert von einer Einheit in eine andere zu konvertieren. ([Firefox Bug 1278697](https://bugzil.la/1278697)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 149                 | Nein                     |
| Developer Edition | 149                 | Nein                     |
| Beta              | 149                 | Nein                     |
| Release           | 149                 | Nein                     |

- `layout.css.typed-om.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Benachrichtigungsaktionen und maxActions-Eigenschaften

Die [`actions`](/de/docs/Web/API/Notification/actions) schreibgeschützte Eigenschaft und die [`maxActions`](/de/docs/Web/API/Notification/maxActions_static) statische schreibgeschützte Eigenschaft der [`Notification`](/de/docs/Web/API/Notification) Schnittstelle werden in Nightly auf dem Desktop unterstützt. Diese enthalten die Benachrichtigungsaktionen, die mit [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification) festgelegt wurden, und die maximale Anzahl von Aktionen, die festgelegt werden können. ([Firefox Bug 1225110](https://bugzil.la/1225110), [Firefox Bug 1963263](https://bugzil.la/1963263)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 138                 | Ja (nur Desktop)         |
| Developer Edition | 138                 | Nein                     |
| Beta              | 138                 | Nein                     |
| Release           | 138                 | Nein                     |

- `dom.webnotifications.actions.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Grafik: Canvas, WebGL und WebGPU

#### WebGL: Entwurfs-Erweiterungen

Wenn diese Präferenz aktiviert ist, sind alle WebGL-Erweiterungen, die sich derzeit im "Entwurf"-Status befinden und getestet werden, für die Nutzung aktiviert. Derzeit gibt es keine WebGL-Erweiterungen, die von Firefox getestet werden.

#### WebGPU API

Die [WebGPU API](/de/docs/Web/API/WebGPU_API) bietet niedrigstufige Unterstützung für die Durchführung von Berechnungen und Grafik-Rendering mit der [Grafikverarbeitungseinheit](https://en.wikipedia.org/wiki/Graphics_Processing_Unit) (GPU) des Benutzergeräts oder Computers. Ab Version 142 ist dies auf Windows in allen Konfigurationen außer Service-Workern aktiviert. Ab Version 147 ist dies auf macOS auf Apple Silicon in allen Browser-Kontexten außer Service-Workern aktiviert. Für andere Plattformen wie Linux und macOS auf Intel Silicon ist es in Nightly aktiviert. Weitere Informationen zu unseren Fortschritten mit dieser API finden Sie in [Firefox Bug 1602129](https://bugzil.la/1602129).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert?                                                               |
| ----------------- | ------------------- | -------------------------------------------------------------------------------------- |
| Nightly           | 141                 | Ja                                                                                     |
| Developer Edition | 141                 | Nein (Ja auf Windows und macOS auf Apple Silicon, nicht einschließlich Service-Worker) |
| Beta              | 141                 | Nein (Ja auf Windows und macOS auf Apple Silicon, nicht einschließlich Service-Worker) |
| Release           | 141                 | Nein (Ja auf Windows und macOS auf Apple Silicon, nicht einschließlich Service-Worker) |

- `dom.webgpu.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren (in Nightly und auf Windows in allen Veröffentlichungen aktiviert)
- `dom.webgpu.service-workers.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren (in Nightly aktiviert)

### WebRTC und Medien

Die folgenden experimentellen Funktionen umfassen solche, die in Medien-APIs wie der [WebRTC API](/de/docs/Web/API/WebRTC_API), der [Web Audio API](/de/docs/Web/API/Web_Audio_API), der [Media Source Extensions API](/de/docs/Web/API/Media_Source_Extensions_API), der [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API), und der [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) zu finden sind.

#### HTMLMediaElement-Eigenschaften: audioTracks und videoTracks

Das Aktivieren dieser Funktion fügt die [`HTMLMediaElement.audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks) und [`HTMLMediaElement.videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks) Eigenschaften zu allen HTML-Medienelementen hinzu. Da Firefox derzeit jedoch keine Unterstützung für mehrere Audio- und Videotracks bietet, funktionieren die gängigsten Anwendungsfälle für diese Eigenschaften nicht, daher sind sie beide standardmäßig deaktiviert. Siehe [Firefox Bug 1057233](https://bugzil.la/1057233) für weitere Details.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 33                  | Nein                     |
| Developer Edition | 33                  | Nein                     |
| Beta              | 33                  | Nein                     |
| Release           | 33                  | Nein                     |

- `media.track.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

#### Asynchrones Hinzufügen und Entfernen von SourceBuffer

Dies fügt die auf Promises basierenden Methoden [`appendBufferAsync()`](/de/docs/Web/API/SourceBuffer/appendBufferAsync) und [`removeAsync()`](/de/docs/Web/API/SourceBuffer/removeAsync) zum Hinzufügen und Entfernen von Mediensource-Buffer zur [`SourceBuffer`](/de/docs/Web/API/SourceBuffer) Schnittstelle hinzu. Weitere Informationen finden Sie in [Firefox Bug 1280613](https://bugzil.la/1280613) und [Firefox Bug 778617](https://bugzil.la/778617).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 62                  | Nein                     |
| Developer Edition | 62                  | Nein                     |
| Beta              | 62                  | Nein                     |
| Release           | 62                  | Nein                     |

- `media.mediasource.experimental.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

#### AVIF Konformitäts-Striktheitsgrad

Die `image.avif.compliance_strictness` Präferenz kann verwendet werden, um die _Striktheitsgrade_ zu steuern, die bei der Verarbeitung von [AVIF](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) Bildern angewendet werden. Dies erlaubt es Firefox-Benutzern, Bilder anzuzeigen, die in einigen anderen Browsern gerendert werden, selbst wenn sie nicht strikt konform sind.

| Release-Kanal     | Version hinzugefügt | Standardwert |
| ----------------- | ------------------- | ------------ |
| Nightly           | 92                  | 1            |
| Developer Edition | 92                  | 1            |
| Beta              | 92                  | 1            |
| Release           | 92                  | 1            |

- `image.avif.compliance_strictness`
  - : Numerischer Wert, der einen _Striktheitsgrad_ angibt. Zulässige Werte sind:
    - `0`: Permissiv. Akzeptiert Bilder mit Spezifikationsverletzungen sowohl bei Empfehlungen ("should"-Sprache) als auch Anforderungen ("shall"-Sprache), vorausgesetzt, sie können sicher oder eindeutig interpretiert werden.
    - `1` **(Standard)**: Gemischt. Ablehnung von Verstößen gegen Anforderungen ("shall"), aber Erlauben von Verstößen gegen Empfehlungen ("should").
    - `2`: Strikt. Ablehnung jeglicher Verstöße gegen festgelegte Anforderungen oder Empfehlungen.

#### JPEG XL Unterstützung

Firefox unterstützt [JPEG XL](https://jpeg.org/jpegxl/) Bilder, wenn diese Funktion aktiviert ist. Siehe [Firefox Bug 1539075](https://bugzil.la/1539075) für weitere Details.

Beachten Sie, dass, wie unten gezeigt, die Funktion nur in Nightly-Builds verfügbar ist (unabhängig davon, ob die Präferenz festgelegt ist). In Firefox 149 wurde der vorherige C++ [JPEG XL](https://jpeg.org/jpegxl/) Bilddecoder durch eine neue rust-basierte Implementierung ersetzt, die die `jxl-rs` Bibliothek verwendet ([Firefox Bug 1986393](https://bugzil.la/1986393)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 90                  | Nein                     |
| Developer Edition | —                   | —                        |
| Beta              | —                   | —                        |
| Release           | —                   | —                        |

- `image.jxl.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### WebVR API (Deaktiviert)

Die veraltete [WebVR API](/de/docs/Web/API/WebVR_API) befindet sich auf dem Weg zur Entfernung. Sie ist standardmäßig in allen Builds deaktiviert [Firefox Bug 1750902](https://bugzil.la/1750902).

| Release-Kanal     | Version entfernt | Standardmäßig aktiviert? |
| ----------------- | ---------------- | ------------------------ |
| Nightly           | 98               | Nein                     |
| Developer Edition | 98               | Nein                     |
| Beta              | 98               | Nein                     |
| Release           | 98               | Nein                     |

- `dom.vr.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### GeometryUtils Methoden: convertPointFromNode(), convertRectFromNode(), und convertQuadFromNode()

Die `GeometryUtils` Methoden `convertPointFromNode()`, `convertRectFromNode()`, und `convertQuadFromNode()` mappen den angegebenen Punkt, das Rechteck oder das Viereck vom [`Node`](/de/docs/Web/API/Node), auf dem sie aufgerufen werden, zu einem anderen Knoten. (Siehe [Firefox Bug 918189](https://bugzil.la/918189) für weitere Details.)

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 31                  | Ja                       |
| Developer Edition | 31                  | Nein                     |
| Beta              | 31                  | Nein                     |
| Release           | 31                  | Nein                     |

- `layout.css.convertFromNode.enable`
  - : Setzen Sie auf `true`, um zu aktivieren.

### GeometryUtils Methode: getBoxQuads()

Die `GeometryUtils` Methode `getBoxQuads()` gibt die CSS-Boxen für einen [`Node`](/de/docs/Web/API/Node) relativ zu jedem anderen Knoten oder Ansichtsfenster zurück. (Siehe [Firefox Bug 917755](https://bugzil.la/917755) für weitere Details.)

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 31                  | Ja                       |
| Developer Edition | 31                  | Nein                     |
| Beta              | 31                  | Nein                     |
| Release           | 31                  | Nein                     |

- `layout.css.getBoxQuads.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Zahlungsanforderungs-API

#### Primäre Zahlungsabwicklung

Die [Zahlungsanforderungs-API](/de/docs/Web/API/Payment_Request_API) bietet Unterstützung für die Abwicklung von web-basierten Zahlungen innerhalb von Webinhalten oder Apps. Aufgrund eines Bugs, der bei Tests der Benutzeroberfläche auftrat, haben wir entschieden, die Veröffentlichung dieser API zu verschieben, während Diskussionen über mögliche Änderungen an der API stattfinden. Die Arbeit läuft weiter. (Siehe [Firefox Bug 1318984](https://bugzil.la/1318984) für weitere Details.)

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 55                  | Nein                     |
| Developer Edition | 55                  | Nein                     |
| Beta              | 55                  | Nein                     |
| Release           | 55                  | Nein                     |

- `dom.payments.request.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.
- `dom.payments.request.supportedRegions`
  - : Länder-Code als komma-separierte Whitelist von Regionen (z. B. `US,CA`).

### WebShare API

Die [Web Share API](/de/docs/Web/API/Web_Share_API) ermöglicht das Teilen von Dateien, URLs und anderen Daten von einer Website. Diese Funktion ist auf Android in allen Builds aktiviert, aber auf dem Desktop hinter einer Präferenz (außer wenn unten angegeben).

| Release-Kanal     | Version geändert | Standardmäßig aktiviert?                    |
| ----------------- | ---------------- | ------------------------------------------- |
| Nightly           | 71               | Nein (Standard). Ja (Windows ab Version 92) |
| Developer Edition | 71               | Nein                                        |
| Beta              | 71               | Nein                                        |
| Release           | 71               | Nein (Desktop). Ja (Android).               |

- `dom.webshare.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Notifications API

Benachrichtigungen haben die [`requireInteraction`](/de/docs/Web/API/Notification/requireInteraction) Eigenschaft standardmäßig auf Windows-Systemen und in der Nightly-Veröffentlichung auf `true` gesetzt ([Firefox Bug 1794475](https://bugzil.la/1794475)).

| Release-Kanal     | Version geändert | Standardmäßig aktiviert? |
| ----------------- | ---------------- | ------------------------ |
| Nightly           | 117              | Ja                       |
| Developer Edition | 117              | Nein                     |
| Beta              | 117              | Nein                     |
| Release           | 117              | Nur Windows              |

- `dom.webnotifications.requireinteraction.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

## Sicherheit und Privatsphäre

### Unsichere Seite kennzeichnen

Die beiden `security.insecure_connection_text_*` Präferenzen fügen ein "Nicht sicher"-Textlabel in der Adressleiste neben dem herkömmlichen Schlosssymbol hinzu, wenn eine Seite unsicher geladen wird (d.h. unter Verwendung von {{Glossary("HTTP", "HTTP")}} anstatt {{Glossary("HTTPS", "HTTPS")}}). Die `browser.urlbar.trimHttps` Präferenz schneidet das `https:`-Präfix aus Adressleisten-URLs ab. Siehe [Firefox Bug 1853418](https://bugzil.la/1853418) für weitere Details.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 121                 | Ja                       |
| Developer Edition | 60                  | Nein                     |
| Beta              | 60                  | Nein                     |
| Release           | 60                  | Nein                     |

- `security.insecure_connection_text.enabled`
  - : Setzen Sie auf `true`, um das Textlabel für den normalen Browsing-Modus zu aktivieren.
- `security.insecure_connection_text.pbmode.enabled`
  - : Setzen Sie auf `true`, um das Textlabel für den privaten Browsing-Modus zu aktivieren.
- `browser.urlbar.trimHttps`
  - : Setzen Sie auf `true`, um das `https:`-Präfix aus Adressleisten-URLs abzuschneiden.

### Einschränkung von Inhalten für Erwachsene mit `<meta name="rating">`

Das nicht standardisierte [`<meta name="rating">`](/de/docs/Web/HTML/Reference/Elements/meta) Element kann auf einer Webseite enthalten sein, um den Inhalt der Seite als eingeschränkt/erwachsen zu kennzeichnen. Zum Zeitpunkt der Erstellung gibt es zwei mögliche `content` Werte, `adult` ([definiert durch Google](https://developers.google.com/search/docs/specialty/explicit/guidelines#add-metadata)) und `RTA-5042-1996-1400-1577-RTA` ([definiert durch ASACP](https://www.rtalabel.org/?content=howto#top)), die den gleichen Effekt haben (weitere Optionen können in Zukunft hinzugefügt werden).

Die folgenden `<meta>`-Elemente sind gleichwertig:

```html
<meta name="rating" content="adult" />
<meta name="rating" content="RTA-5042-1996-1400-1577-RTA" />
```

Browser, die dieses Element erkennen, können dann Maßnahmen ergreifen, um Benutzern das Ansehen der Inhalte zu verbieten. Die Implementierung in Firefox ersetzt die Seite durch den Inhalt, der unter `about:restricted` zu finden ist, was dem Benutzer erklärt, dass er versucht, eingeschränkte Inhalte anzusehen, erklärt, warum er sie nicht ansehen kann, und ihm eine Schaltfläche gibt, um zu seiner vorherigen Seite zurückzukehren.

Siehe [Firefox Bug 1991135](https://bugzil.la/1991135) für weitere Details.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 146                 | Nein                     |
| Developer Edition | 146                 | Nein                     |
| Beta              | 146                 | Nein                     |
| Release           | 146                 | Nein                     |

- `security.restrict_to_adults.always`
  - : Setzen Sie auf `true`, um den Zugriff auf Webseiten zu beschränken, die sich als erwachsen kennzeichnen, indem sie ein `<meta name="rating">` Element enthalten.
- `security.restrict_to_adults.respect_platform`
  - : Setzen Sie auf `true`, um den Zugriff auf Webseiten zu beschränken, die sich als erwachsen kennzeichnen, indem sie ein `<meta name="rating">` Element nur dann enthalten, wenn entsprechende Kindersicherungen auf dem zugrunde liegenden Betriebssystem gesetzt sind (zum Beispiel wenn die macOS _Content & Privacy_ Einstellungen so gesetzt sind, dass sie explizite Webinhalte einschränken).

### Berechtigungspolitik / Feature-Policy

[Berechtigungspolitik](/de/docs/Web/HTTP/Guides/Permissions_Policy) ermöglicht es Webentwicklern, bestimmte Funktionen und APIs im Browser selektiv zu aktivieren, zu deaktivieren und das Verhalten zu ändern. Sie ist ähnlich wie die CSP, steuert jedoch Funktionen anstatt Sicherheitsverhalten. Dies ist in Firefox als **Feature Policy** implementiert, dem Namen, der in einer früheren Version der Spezifikation verwendet wurde.

Beachten Sie, dass unterstützte Richtlinien durch das [`allow`](/de/docs/Web/HTML/Reference/Elements/iframe#allow) Attribut auf `<iframe>`-Elementen festgelegt werden können, selbst wenn die Benutzerpräferenz nicht gesetzt ist.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 65                  | Nein                     |
| Developer Edition | 65                  | Nein                     |
| Beta              | 65                  | Nein                     |
| Release           | 65                  | Nein                     |

- `dom.security.featurePolicy.header.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Privatsphärenschonende Attribution API (PPA)

Die [PPA API](https://support.mozilla.org/en-US/kb/privacy-preserving-attribution) bietet eine Alternative zum Benutzer-Tracking für Anzeigenattribution mit dem neuen `navigator.privateAttribution` Objekt mit `saveImpression()` und `measureConversion()` Methoden. Lesen Sie mehr über PPA [im ursprünglichen Erklärstück](https://github.com/mozilla/explainers/tree/main/archive/ppa-experiment) und der [vorgeschlagenen Spezifikation](https://w3c.github.io/ppa/). Dieses Experiment kann für Websites über [Origin-Trial](https://wiki.mozilla.org/Origin_Trials) oder im Browser aktiviert werden, indem die Präferenz auf `1` gesetzt wird. ([Firefox Bug 1900929](https://bugzil.la/1900929)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 128                 | Nein                     |
| Developer Edition | 128                 | Nein                     |
| Beta              | 128                 | Nein                     |
| Release           | 128                 | Nein                     |

- `dom.origin-trials.private-attribution.state`
  - : Setzen Sie auf `true`, um zu aktivieren.

## HTTP

### Integritätspolitik für Stylesheet-Ressourcen

Die {{httpheader("Integrity-Policy")}} und {{httpheader("Integrity-Policy-Report-Only")}} HTTP-Header werden jetzt für Stilressourcen unterstützt. Diese ermöglichen es Websites, entweder [Subressourcen-Integritätsgarantien](/de/docs/Web/Security/Defenses/Subresource_Integrity) für Stile durchzusetzen oder Verstöße gegen die Richtlinie nur zu melden. Beachten Sie, dass Firefox Meldeendpunkte ignoriert und Verstöße in die Entwicklerkonsole protokolliert. Wenn `Integrity-Policy` verwendet wird, blockiert der Browser das Laden von Stilen, die in einem {{HTMLElement("link")}}-Element mit [`rel="stylesheet"`](/de/docs/Web/HTML/Reference/Attributes/rel#stylesheet) referenziert werden, die entweder das [`integrity`](/de/docs/Web/HTML/Reference/Elements/script#integrity) Attribut fehlen oder einen Integritätshaft, der nicht mit der Ressource auf dem Server übereinstimmt. ([Firefox Bug 1976656](https://bugzil.la/1976656)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 142                 | Nein                     |
| Developer Edition | 142                 | Nein                     |
| Beta              | 142                 | Nein                     |
| Release           | 142                 | Nein                     |

- `security.integrity_policy.stylesheet.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Idempotency-Key

Der {{httpheader("Idempotency-Key")}} HTTP-Anforderungsheader kann von der Website-Client-Seite verwendet werden, um {{HTTPMethod("POST")}} oder {{HTTPMethod("PATCH")}} Anfragen idempotent zu machen, wenn sie mit einem Server verwendet werden, der dies unterstützt. Die Spezifikation gibt an, dass der Server dokumentieren und ankündigen sollte, welche Endpunkte diesen Header erfordern, das Format des Schlüssels und die erwarteten Fehlermeldungen.

Firefox fügt den Header mit einem eindeutigen Schlüssel für jede neue `POST`-Anfrage automatisch hinzu, wenn er nicht bereits von der Client-Seite des Seiten-Codes hinzugefügt wurde. Dies vereinfacht den erforderlichen Client-Seiten-Code für Server, die das Feature unterstützen.

([Firefox Bug 1830022](https://bugzil.la/1830022)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 135                 | Nein                     |
| Developer Edition | 135                 | Nein                     |
| Beta              | 135                 | Nein                     |
| Release           | 135                 | Nein                     |

- `network.http.idempotencyKey.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Accept-Header mit MIME-Typ image/jxl

Der HTTP [`Accept`](/de/docs/Web/HTTP/Reference/Headers/Accept) Header in [Standardanfragen und Bildanfragen](/de/docs/Web/HTTP/Guides/Content_negotiation/List_of_default_Accept_values) kann über eine Präferenz konfiguriert werden, um Unterstützung für den `image/jxl` MIME-Typ anzuzeigen.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 128                 | Nein                     |
| Developer Edition | 128                 | Nein                     |
| Beta              | 128                 | Nein                     |
| Release           | 128                 | Nein                     |

- `image.jxl.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### SameSite=Lax als Standardwert

[`SameSite` Cookies](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) haben einen Standardwert von `Lax`. Mit dieser Einstellung werden Cookies nur gesendet, wenn ein Benutzer zur Ursprungsseite navigiert, nicht bei standortübergreifenden Unteranfragen zum Laden von Bildern oder Rahmen auf einer Drittanbieter-Website und so weiter. Weitere Details siehe [Firefox Bug 1617609](https://bugzil.la/1617609).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 69                  | Nein                     |
| Developer Edition | 69                  | Nein                     |
| Beta              | 69                  | Nein                     |
| Release           | 69                  | Nein                     |

- `network.cookie.sameSite.laxByDefault`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Access-Control-Allow-Headers wildcard deckt Authorization nicht ab

Der [`Access-Control-Allow-Headers`](/de/docs/Web/HTTP/Reference/Headers/Access-Control-Allow-Headers) ist ein Antwort-Header auf eine {{Glossary("Preflight_request", "CORS-Preflight-Anfrage")}}, die angibt, welche Anforderungs-Header in der endgültigen Anfrage enthalten sein dürfen. Die Antwortrichtlinie kann ein Wildcard (`*`) enthalten, was besagt, dass die endgültige Anfrage alle Header außer dem `Authorization`-Header enthalten darf.

Standardmäßig fügt Firefox den `Authorization`-Header in der endgültigen Anfrage hinzu, nachdem er eine Antwort mit `Access-Control-Allow-Headers: *` erhalten hat. Setzen Sie die Präferenz auf `false`, um sicherzustellen, dass Firefox den `Authorization`-Header nicht einfügt. Weitere Details siehe [Firefox Bug 1687364](https://bugzil.la/1687364).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 115                 | Ja                       |
| Developer Edition | 115                 | Ja                       |
| Beta              | 115                 | Ja                       |
| Release           | 115                 | Ja                       |

- `network.cors_preflight.authorization_covered_by_wildcard`
  - : Setzen Sie auf `true`, um zu aktivieren.

## Entwicklertools

Die Entwicklerwerkzeuge von Mozilla entwickeln sich ständig weiter. Wir experimentieren mit neuen Ideen, fügen neue Funktionen hinzu, und testen sie in den Nightly- und Developer Edition-Kanälen, bevor wir sie für Beta und Release freigeben. Die unten aufgeführten Funktionen sind die aktuellen experimentellen Entwicklerwerkzeug-Funktionen.

**Keine experimentellen Funktionen in diesem Veröffentlichungzyklus.**

## Siehe auch

- [Firefox Entwickler-Veröffentlichungsnotizen](/de/docs/Mozilla/Firefox/Releases)
- [Firefox Nightly](https://www.firefox.com/de-DE/channel/desktop/)
- [Firefox Developer Edition](https://www.firefox.com/de-DE/channel/desktop/developer/)
