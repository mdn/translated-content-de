---
title: Experimentelle Funktionen in Firefox
short-title: Experimentelle Funktionen
slug: Mozilla/Firefox/Experimental_features
l10n:
  sourceCommit: 6b423df1d10f1a3b2b2a9a0b0d7baf47228adc21
---

Diese Seite listet experimentelle und teilweise implementierte Funktionen von Firefox auf, einschließlich sich entwickelnder oder vorgeschlagener Webplattform-Standards.
Jeder Eintrag unten enthält Informationen über die Builds, in denen eine Funktion enthalten ist (Nightly, Beta, Developer Edition oder Release), ob sie standardmäßig aktiviert ist oder nicht, und den Namen der **Präferenz**, die Sie verwenden können, um die Funktion zu aktivieren oder zu konfigurieren.
Die Beschreibung jeder Funktion enthält auch Links zu relevanten [Bugzilla-Bugs](https://bugzilla.mozilla.org), die die Funktion implementieren oder aktivieren.
Diese Informationen ermöglichen es Ihnen, experimentelle Funktionen auszuprobieren und Feedback zu geben, bevor sie offiziell veröffentlicht werden.

In Bezug auf den Lebenszyklus erscheinen neue Funktionen in der Regel zuerst in [Nightly](https://www.firefox.com/en-US/channel/desktop/#nightly), wo sie oft standardmäßig aktiviert sind, um frühes Feedback und Tests zu erhalten.
Wenn keine größeren Probleme gefunden werden, werden sie in die Pre-Release-Builds [Beta](https://www.firefox.com/en-US/channel/desktop/#beta) und [Developer Edition](https://www.firefox.com/en-US/channel/desktop/developer/) aufgenommen. Schließlich werden genehmigte Funktionen im stabilen [Release](https://www.firefox.com/en-US/) Kanal ausgeliefert.
Wenn eine Funktion in einem Release standardmäßig aktiviert ist, wird sie nicht mehr als experimentell betrachtet und wird von dieser Seite entfernt.

Um diese Funktionen zu aktivieren, geben Sie `about:config` in die Firefox-Adressleiste ein, suchen Sie die zugehörige **Präferenz** und ändern Sie ihren Wert, der normalerweise ein Umschalten zwischen `true` und `false` ist.
Je nach Funktion müssen Sie möglicherweise den Browser neu starten, damit die Änderung wirksam wird.
Lesen Sie den [Firefox Konfiguration Editor](https://support.mozilla.org/en-US/kb/about-config-editor-firefox) Support-Artikel für weitere Informationen zur Verwaltung von Präferenzen in Firefox.

## HTML

### Layout für input type="search"

Das Layout für `input type="search"` wurde aktualisiert. Dadurch hat ein Suchfeld ein Löschsymbol, sobald jemand beginnt, darin zu tippen, um andere Browser-Implementierungen anzupassen. (Siehe [Firefox Bug 558594](https://bugzil.la/558594) für weitere Details.)

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 81                  | Nein                     |
| Developer Edition | 81                  | Nein                     |
| Beta              | 81                  | Nein                     |
| Release           | 81                  | Nein                     |

- `layout.forms.input-type-search.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Umschalten der Passwortanzeige

HTML-Passworteingabeelemente ([`<input type="password">`](/de/docs/Web/HTML/Reference/Elements/input/password)) enthalten ein "Auge"-Symbol, das zum Anzeigen oder Verbergen des Passworttextes umgeschaltet werden kann ([Firefox Bug 502258](https://bugzil.la/502258)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 96                  | Nein                     |
| Developer Edition | 96                  | Nein                     |
| Beta              | 96                  | Nein                     |
| Release           | 96                  | Nein                     |

- `layout.forms.reveal-password-button.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Zeitwähler in `datetime-local` und `time` Eingabeelementen

Die HTML-Elemente [`<input type="datetime-local">`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local) und [`<input type="time">`](/de/docs/Web/HTML/Reference/Elements/input/time) unterstützen einen Zeitwähler. ([Firefox Bug 1726108](https://bugzil.la/1726108)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 144                 | Nein                     |
| Developer Edition | 144                 | Nein                     |
| Beta              | 144                 | Nein                     |
| Release           | 144                 | Nein                     |

- `dom.forms.datetime.timepicker`
  - : Auf `true` setzen, um zu aktivieren.

### `alpha` und `colorspace` Attribute in `color` Eingabeelementen

Das HTML-Element [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color) unterstützt die Attribute [`alpha`](/de/docs/Web/HTML/Reference/Elements/input/color#alpha) & [`colorspace`](/de/docs/Web/HTML/Reference/Elements/input/color#colorspace). ([Firefox Bug 1919718](https://bugzil.la/1919718)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 149                 | Ja                       |
| Developer Edition | -                   | -                        |
| Beta              | -                   | -                        |
| Release           | -                   | -                        |

- `dom.forms.html_color_picker.enabled`
  - : Auf `true` setzen, um zu aktivieren.

## CSS

### Hex-Felder zur Darstellung verirrter Steuerzeichen

Diese Funktion rendert Steuerzeichen (Unicode-Kategorie Cc), außer _Tab_ (`U+0009`), _Zeilenumbruch_ (`U+000A`), _Form-Feed_ (`U+000C`) und _Wagenrücklauf_ (`U+000D`), wenn sie nicht erwartet werden, als Hex-Feld. (Siehe [Firefox Bug 1099557](https://bugzil.la/1099557) für weitere Details.)

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 43                  | Ja                       |
| Developer Edition | 43                  | Nein                     |
| Beta              | 43                  | Nein                     |
| Release           | 43                  | Nein                     |

- `layout.css.control-characters.visible`
  - : Auf `true` setzen, um zu aktivieren.

### initial-letter Eigenschaft

Die {{cssxref("initial-letter")}} CSS-Eigenschaft ist Teil der [CSS Inline Layout](https://drafts.csswg.org/css-inline/) Spezifikation und ermöglicht es, festzulegen, wie abgesenkte, angehobene und eingelassene Anfangsbuchstaben angezeigt werden. (Siehe [Firefox Bug 1223880](https://bugzil.la/1223880) für weitere Details.)

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 50                  | Nein                     |
| Developer Edition | 50                  | Nein                     |
| Beta              | 50                  | Nein                     |
| Release           | 50                  | Nein                     |

- `layout.css.initial-letter.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### fit-content() Funktion

Die [`fit-content()`](/de/docs/Web/CSS/Reference/Values/fit-content_function) Funktion, wie sie auf {{cssxref("width")}} und andere Größen-Eigenschaften angewendet wird. Diese Funktion wird bereits gut für CSS Grid Layout Spurgrößen unterstützt. (Siehe [Firefox Bug 1312588](https://bugzil.la/1312588) für weitere Details.)

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 91                  | Nein                     |
| Developer Edition | 91                  | Nein                     |
| Beta              | 91                  | Nein                     |
| Release           | 91                  | Nein                     |

- `layout.css.fit-content-function.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Scroll-gesteuerte Animationen

Früher "scroll-verlinkte Animationen" genannt, hängt eine [scroll-gesteuerte Animation](/de/docs/Web/CSS/Guides/Scroll-driven_animations) von der Scrollposition einer Bildlaufleiste ab, statt von Zeit oder einer anderen Dimension.
Die {{cssxref('scroll-timeline-name')}} und {{cssxref('scroll-timeline-axis')}} Eigenschaften (und die {{cssxref('scroll-timeline')}} Kurzschreibweise) ermöglichen Ihnen die Angabe, dass eine bestimmte Bildlaufleiste in einem bestimmten benannten Container als Quelle für eine scroll-gesteuerte Animation verwendet werden kann.
Die Scroll-Zeitachse kann dann mit einer [Animation](/de/docs/Web/CSS/Guides/Animations) verknüpft werden, indem die {{cssxref('animation-timeline')}} Eigenschaft auf den mit `scroll-timeline-name` definierten Namenswert gesetzt wird.

Beim Verwenden der {{cssxref('scroll-timeline')}} Kurzschreibweise muss die Reihenfolge der Eigenschaftswerte {{cssxref('scroll-timeline-name')}} gefolgt von {{cssxref('scroll-timeline-axis')}} sein.
Die Langform- und Kurzform-Eigenschaften sind beide hinter der Präferenz verfügbar.
Alternativ können Sie die {{cssxref("animation-timeline/scroll")}} funktionale Notation mit {{cssxref('animation-timeline')}} verwenden, um anzugeben, dass eine Bildlaufachsen in einem übergeordneten Element für die Zeitachse verwendet wird.

Für weitere Informationen siehe [Firefox Bug 1807685](https://bugzil.la/1807685), [Firefox Bug 1804573](https://bugzil.la/1804573), [Firefox Bug 1809005](https://bugzil.la/1809005), [Firefox Bug 1676791](https://bugzil.la/1676791), [Firefox Bug 1754897](https://bugzil.la/1754897), [Firefox Bug 1817303](https://bugzil.la/1817303) und [Firefox Bug 1737918](https://bugzil.la/1737918).

Die {{cssxref('timeline-scope')}}, {{cssxref('animation-range-start')}}und {{cssxref('animation-range-end')}} Eigenschaften (und die {{cssxref('animation-range')}} Kurzschreibweise) werden noch nicht unterstützt. Für weitere Informationen siehe [Firefox Bug 1676779](https://bugzil.la/1676779).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 136                 | Ja                       |
| Developer Edition | 110                 | Nein                     |
| Beta              | 110                 | Nein                     |
| Release           | 110                 | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Media Feature `prefers-reduced-transparency`

Die CSS {{cssxref("@media/prefers-reduced-transparency")}} Media Feature ermöglicht es Ihnen zu erkennen, ob ein Benutzer die Einstellung aktiviert hat, um die Menge an transparenten oder durchscheinenden Layereffekten auf seinem Gerät zu minimieren.
Siehe ([Firefox Bug 1736914](https://bugzil.la/1736914)) für weitere Details.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 113                 | Nein                     |
| Developer Edition | 113                 | Nein                     |
| Beta              | 113                 | Nein                     |
| Release           | 113                 | Nein                     |

- `layout.css.prefers-reduced-transparency.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### inverted-colors Media Feature

Die CSS {{cssxref("@media/inverted-colors")}} Media Feature ermöglicht es Ihnen zu erkennen, ob ein User-Agent oder das zugrunde liegende Betriebssystem Farben invertiert.
Siehe ([Firefox Bug 1794628](https://bugzil.la/1794628)) für weitere Details.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 114                 | Nein                     |
| Developer Edition | 114                 | Nein                     |
| Beta              | 114                 | Nein                     |
| Release           | 114                 | Nein                     |

- `layout.css.inverted-colors.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### `Named view progress timelines` Eigenschaft

Die CSS {{cssxref("view-timeline-name")}} Eigenschaft ermöglicht es Ihnen, einem bestimmten Element einen Namen zu geben, der angibt, dass sein übergeordnetes Scrolling-Element die Quelle einer Ansichts-Fortschritts-Zeitachse ist.
Der Name kann dann der `animation-timeline` zugewiesen werden, die das zugehörige Element animiert, wenn es sich durch den sichtbaren Bereich seines übergeordneten Scrolling-Elements bewegt.
Siehe ([Firefox Bug 1737920](https://bugzil.la/1737920)) für weitere Details.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 136                 | Ja                       |
| Developer Edition | 114                 | Nein                     |
| Beta              | 114                 | Nein                     |
| Release           | 114                 | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### `Anonymous view progress timelines` Funktion

Die CSS {{cssxref("animation-timeline/view")}} Funktion ermöglicht es Ihnen zu spezifizieren, dass die `animation-timeline` für ein Element eine Ansichts-Fortschritts-Zeitachse ist, die das Element animiert, wenn es sich durch den sichtbaren Bereich seines übergeordneten Scrolling-Elements bewegt.
Die Funktion definiert die Achse des übergeordneten Elements, die die Zeitachse liefert, sowie die Einrahmung innerhalb des sichtbaren Bereichs, bei der die Animation beginnt und endet.
Siehe ([Firefox Bug 1808410](https://bugzil.la/1808410)) für weitere Details.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 136                 | Ja                       |
| Developer Edition | 114                 | Nein                     |
| Beta              | 114                 | Nein                     |
| Release           | 114                 | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Anbieter-präfixierte Transformations-Eigenschaften

Die `-moz-` -präfixierten [CSS Transform](/de/docs/Web/CSS/Guides/Transforms) Eigenschaften können deaktiviert werden, indem die Präferenz `layout.css.prefixes.transforms` auf `false` gesetzt wird. Die Absicht ist, diese zu deaktivieren, sobald die standardmäßigen CSS-Zoom-Eigenschaften gut unterstützt werden. ([Firefox Bug 1886134](https://bugzil.la/1886134), [Firefox Bug 1855763](https://bugzil.la/1855763)).

Konkret wird diese Präferenz die folgenden präfixierten Eigenschaften deaktivieren:

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
  - : Auf `true` setzen, um zu aktivieren.

### Symmetrisches `letter-spacing`

Die CSS {{cssxref("letter-spacing")}} Eigenschaft teilt jetzt den angegebenen Buchstabenabstand gleichmäßig auf beiden Seiten jedes Zeichens. Dies unterscheidet sich vom aktuellen Verhalten, bei dem der Abstand hauptsächlich auf einer Seite hinzugefügt wird. Dieser Ansatz kann das Textabstand insbesondere in Richtungswechselndem Text verbessern.
([Firefox Bug 1891446](https://bugzil.la/1891446)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 128                 | Ja                       |
| Developer Edition | 128                 | Ja                       |
| Beta              | 127                 | Nein                     |
| Release           | 127                 | Nein                     |

- `layout.css.letter-spacing.model`
  - : Auf `true` setzen, um zu aktivieren.

### Erlauben von Pseudo-Elementen nach element-gestützten Pseudo-Elementen

Es wurde damit begonnen, [Pseudo-Elemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) wie {{cssxref("::first-letter")}} und {{cssxref("::before")}} an [element-backed Pseudo-Elemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements#element-backed_pseudo-elements) wie {{cssxref("::details-content")}} und {{cssxref("::file-selector-button")}} anzuhängen.

Dies wird es Benutzern ermöglichen, zum Beispiel, den ersten Buchstaben des {{htmlElement("details")}} Elements mit dem CSS-Selektor `::details-content::first-letter` zu gestalten oder vor einem {{HTMLElement("input") }} vom [`type="file"`](/de/docs/Web/HTML/Reference/Elements/input/file) mit dem CSS-Selektor `::file-selector-button::before` Inhalte hinzuzufügen.

Derzeit kann nur die Unterstützung für `::details-content::first-letter` mit `@supports(::details-content::first-letter)` geparst werden.
Das `::file-selector-button` Pseudo-Element ist noch nicht als element-gestütztes Pseudo-Element gekennzeichnet, so dass es keine Möglichkeit gibt, dies zu testen.
([Firefox Bug 1953557](https://bugzil.la/1953557), [Firefox Bug 1941406](https://bugzil.la/1941406)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 138                 | Nein                     |
| Developer Edition | 138                 | Nein                     |
| Beta              | 138                 | Nein                     |
| Release           | 138                 | Nein                     |

### `:heading` und `:heading()` Pseudo-Klassen

Die {{cssxref(":heading")}} Pseudo-Klasse ermöglicht es Ihnen, alle [Überschriften-Elemente](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) (`<h1>`-`<h6>`) gleichzeitig zu gestalten, anstatt sie einzeln zu adressieren. Die {{cssxref(":heading()")}} funktionale Pseudo-Klasse ermöglicht es Ihnen, Überschriften-Elemente zu gestalten, die einer durch Kommas getrennten Liste von Ganzzahlen entsprechen, die die Überschriftenebenen abbilden. ([Firefox Bug 1974386](https://bugzil.la/1974386) & [Firefox Bug 1984310](https://bugzil.la/1984310)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 142                 | Nein                     |
| Developer Edition | 142                 | Nein                     |
| Beta              | 142                 | Nein                     |
| Release           | 142                 | Nein                     |

- `layout.css.heading-selector.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### `@custom-media` At-Regel

Die {{cssxref("@custom-media")}} CSS At-Regel definiert Aliase für lange oder komplexe Media-Anfragen. Anstatt dieselbe hartcodierte `<media-query-list>` in mehreren `@media` At-Regeln zu wiederholen, kann diese einmal in einer `@custom-media` At-Regel definiert und im gesamten Stylesheet bei Bedarf referenziert werden. ([Firefox Bug 1744292](https://bugzil.la/1744292)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 148                 | Nein                     |
| Developer Edition | 148                 | Nein                     |
| Beta              | 148                 | Nein                     |
| Release           | 148                 | Nein                     |

- `layout.css.custom-media.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### `<attr-type>` Werte in `attr()` CSS Funktion

Die {{cssxref("attr")}} CSS Funktion unterstützt jetzt [`<attr-type>`](/de/docs/Web/CSS/Reference/Values/attr#attr-type) Werte. Dies ermöglicht es Ihnen, anzugeben, wie ein Attributwert in einen CSS-Wert geparst werden soll und diese Werte direkt aus [`data-*`](/de/docs/Web/HTML/How_to/Use_data_attributes) zu übernehmen. ([Firefox Bug 1986631](https://bugzil.la/1986631), [Firefox Bug 1998245](https://bugzil.la/1998245))

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 149                 | Nein                     |
| Developer Edition | 149                 | Nein                     |
| Beta              | 149                 | Nein                     |
| Release           | 149                 | Nein                     |

- `layout.css.attr.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Mit Namensräumen versehene Attribute in `attr()` CSS Funktion

Die {{cssxref("attr")}} CSS Funktion akzeptiert jetzt [Namensräume in Attributen](/de/docs/Web/CSS/Reference/Values/attr#namespaces). Dies ermöglicht es Ihnen, Attribute von Elementen XML-basierter Sprachen wie [SVG](/de/docs/Web/SVG) zu übernehmen und entsprechend zu gestalten. ([Firefox Bug 2014060](https://bugzil.la/2014060).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 150                 | Nein                     |
| Developer Edition | 150                 | Nein                     |
| Beta              | 150                 | Nein                     |
| Release           | 150                 | Nein                     |

- `layout.css.attr.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Absolut positionierte Elemente in Multi-Column-Containern und beim Drucken

Absolut positionierte Elemente innerhalb von [Multi-Column-Containern](/de/docs/Web/CSS/Guides/Multicol_layout) und beim Drucken werden jetzt korrekt positioniert und fragmentiert.
Dies verbessert die Interoperabilität mit anderen Browsern und verhindert Layoutprobleme wie überlappenden Text oder Inhaltsverlust.
([Firefox Bug 2018797](https://bugzil.la/2018797)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 150                 | Ja                       |
| Developer Edition | 150                 | Nein                     |
| Beta              | 150                 | Nein                     |
| Release           | 150                 | Nein                     |

- `layout.abspos.fragmentainer-aware-positioning.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### `@container style()` Bereichssyntax-Abfragen

Die [`@container`](/de/docs/Web/CSS/Reference/At-rules/@container) CSS At-Regel [`style()`](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries) Abfragen unterstützen jetzt die _Bereichssyntax_. Dies ermöglicht Ihnen, zu überprüfen, ob ein Container eine gültige benutzerdefinierte CSS-Eigenschaft besitzt und ihren Wert mit Vergleichsoperatoren wie `>`, `<`, `>=` und `<=` zu vergleichen, und entsprechend die Stile seiner Kinder anzuwenden. ([Firefox Bug 2024601](https://bugzil.la/2024601)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 151                 | Nein                     |
| Developer Edition | 151                 | Nein                     |
| Beta              | 151                 | Nein                     |
| Release           | 151                 | Nein                     |

- `layout.css.attr.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### `field-sizing` Eigenschaft

Die {{cssxref("field-sizing")}} CSS-Eigenschaft ermöglicht es Ihnen, das Größenverhalten von Formularelementen zu steuern. Diese Eigenschaft hat zwei Werte: `content`, ermöglicht es Elementen, sich in der Größe ihrem Inhalt anzupassen, und `fixed`, setzt eine feste Größe auf Elemente. ([Firefox Bug 1977176](https://bugzil.la/1977176)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 151                 | Ja                       |
| Developer Edition | 151                 | Nein                     |
| Beta              | 151                 | Nein                     |
| Release           | 151                 | Nein                     |

- `layout.css.field-sizing.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Fix für verschachtelte scrollbare Bereiche

Diese Implementierung wurde hinzugefügt, um ein Problem zu beheben, bei dem skrollierbare Inhalte unzugänglich waren. Wenn eine Bildlaufleiste auf `display: none;` oder `width: 0;` gesetzt wird, würden die Bildlaufleisten der verschachtelten skrollbaren Bereiche übereinander gestapelt, was bedeuten könnte, dass einige Inhalte möglicherweise unzugänglich sind. Dies bedeutet jedoch, dass der `@supports selector(::-webkit-scrollbar)` Test `true` zurückgibt, obwohl das [`::-webkit-scrollbar`](/de/docs/Web/CSS/Reference/Selectors/::-webkit-scrollbar) Pseudo-Element nicht wirklich unterstützt wird. ([Firefox Bug 1977511](https://bugzil.la/1977511)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 151                 | Ja                       |
| Developer Edition | 151                 | Nein                     |
| Beta              | 151                 | Nein                     |
| Release           | 151                 | Nein                     |

- `layout.css.fake-webkit-scrollbar.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### `<timeline-range-name>` Werte

Die {{cssxref("animation-range-start")}}, {{cssxref("animation-range-end")}} CSS-Eigenschaften und die {{cssxref("animation-range")}} Kurzschreibweise unterstützen jetzt [`<timeline-range-name>`](/de/docs/Web/CSS/Reference/Values/timeline-range-name) Werte. Diese [`<timeline-range-name>`](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names#timeline_range_names) Werte ermöglichen es Ihnen, genau anzugeben, innerhalb welches Segments eine scroll-gesteuerte Animation stattfinden wird. ([Firefox Bug 1804775](https://bugzil.la/1804775)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 151                 | Ja                       |
| Developer Edition | 151                 | Nein                     |
| Beta              | 151                 | Nein                     |
| Release           | 151                 | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Auf `true` setzen, um zu aktivieren.

## SVG

**Keine experimentellen Funktionen in diesem Release-Zyklus.**

## JavaScript

### Mehrere Import-Maps

Unterstützung für [mehrere Import-Maps](/de/docs/Web/HTML/Reference/Elements/script/type/importmap#merging_multiple_import_maps).
Diese geben Entwicklern mehr Flexibilität, wenn es darum geht, JavaScript-Module zu strukturiert zu laden, weil sie nicht mehr alle ihre Modulmappings im Voraus kennen müssen und sie in eine einzige Importmap laden können.
([Firefox Bug 1916277](https://bugzil.la/1916277)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 150                 | Nein                     |
| Developer Edition | 150                 | Nein                     |
| Beta              | 150                 | Nein                     |
| Release           | 150                 | Nein                     |

- `dom.multiple_import_maps.enabled`
  - : Auf `true` setzen, um zu aktivieren.

## APIs

### Scoped Custom Element Registries

Die Unterstützung für [scoped Custom Element Registries](/de/docs/Web/API/Web_components/Using_custom_elements#scoped_custom_element_registries) wird implementiert.
Scoped Registries ermöglichen es einem Shadow-Tree, ein unabhängiges [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry) zu erstellen, dessen Definitionen nur für dieses spezifische DOM-Teilbäume gelten.
Dies kann verwendet werden, um Kollisionen zu vermeiden, wo mehrere Webkomponenten Elemente mit demselben Namen deklarieren.

Die Implementierung umfasst:

- `customElementRegistry` Eigenschaft auf [`Document`](/de/docs/Web/API/Document), [`Element`](/de/docs/Web/API/Element) und [`ShadowRoot`](/de/docs/Web/API/ShadowRoot).
  ([Firefox Bug 2018900](https://bugzil.la/2018900)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 150                 | Nein                     |
| Developer Edition | 150                 | Nein                     |
| Beta              | 150                 | Nein                     |
| Release           | 150                 | Nein                     |

- `dom.scoped-custom-element-registries.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### CSS Typed Object Model Level 1

Die Implementierung von [CSS Typed OM Level 1](https://drafts.css-houdini.org/css-typed-om/) hat begonnen.
Zum Beispiel wird die Methode [`to()`](/de/docs/Web/API/CSSNumericValue/to) der Schnittstelle [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) unterstützt, um einen CSS-Numericalwert von einer Einheit in eine andere zu konvertieren.
([Firefox Bug 1278697](https://bugzil.la/1278697)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 149                 | Nein                     |
| Developer Edition | 149                 | Nein                     |
| Beta              | 149                 | Nein                     |
| Release           | 149                 | Nein                     |

- `layout.css.typed-om.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Notification actions und maxActions Eigenschaften

Die [`actions`](/de/docs/Web/API/Notification/actions) schreibgeschützte Eigenschaft und die [`maxActions`](/de/docs/Web/API/Notification/maxActions_static) statische schreibgeschützte Eigenschaft der Schnittstellen [`Notification`](/de/docs/Web/API/Notification) werden in Nightly auf dem Desktop unterstützt.
Diese enthalten die Benachrichtigungsaktionen, die mit [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification) gesetzt wurden, und die maximale Anzahl von Aktionen, die festgelegt werden können.
([Firefox Bug 1225110](https://bugzil.la/1225110), [Firefox Bug 1963263](https://bugzil.la/1963263)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 138                 | Ja (nur Desktop)         |
| Developer Edition | 138                 | Nein                     |
| Beta              | 138                 | Nein                     |
| Release           | 138                 | Nein                     |

- `dom.webnotifications.actions.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Grafik: Canvas, WebGL und WebGPU

#### WebGL: Entwurfserweiterungen

Wenn diese Präferenz aktiviert ist, werden alle aktuell im "Entwurfs"-Status befindlichen WebGL-Erweiterungen, die getestet werden, zur Verwendung aktiviert. Derzeit gibt es keine von Firefox getesteten WebGL-Erweiterungen.

#### WebGPU API

Die [WebGPU API](/de/docs/Web/API/WebGPU_API) bietet niedrigstufige Unterstützung für das Durchführen von Berechnungen und Grafikwiedergaben mithilfe der [Graphics Processing Unit](https://en.wikipedia.org/wiki/Graphics_Processing_Unit) (GPU) des Benutzers Computers oder Geräts.
Ab Version 142 ist dies auf Windows auf allen Kontexte außer Service-Workern aktiviert.
Ab Version 147 ist es auf macOS auf Apple Silicon auf allen Browserkontexten außer Service-Workern aktiviert.
Für andere Plattformen wie Linux und macOS auf Intel-Silicon ist es in Nightly aktiviert.
Siehe [Firefox Bug 1602129](https://bugzil.la/1602129) für unseren Fortschritt bei dieser API.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert?                                                      |
| ----------------- | ------------------- | ----------------------------------------------------------------------------- |
| Nightly           | 141                 | Ja                                                                            |
| Developer Edition | 141                 | Nein (Ja auf Windows und macOS auf Apple Silicon, nicht inkl. Service-Worker) |
| Beta              | 141                 | Nein (Ja auf Windows und macOS auf Apple Silicon, nicht inkl. Service-Worker) |
| Release           | 141                 | Nein (Ja auf Windows und macOS auf Apple Silicon, nicht inkl. Service-Worker) |

- `dom.webgpu.enabled`
  - : Auf `true` setzen, um zu aktivieren (in Nightly und auf Windows in allen Releases aktiviert)
- `dom.webgpu.service-workers.enabled`
  - : Auf `true` setzen, um zu aktivieren (in Nightly aktiviert)

### WebRTC und Medien

Die folgenden experimentellen Funktionen umfassen jene, die in Medien-APIs wie der [WebRTC API](/de/docs/Web/API/WebRTC_API), der [Web Audio API](/de/docs/Web/API/Web_Audio_API), der [Media Source Extensions API](/de/docs/Web/API/Media_Source_Extensions_API), der [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API), und der [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) gefunden werden.

#### HTMLMediaElement-Eigenschaften: audioTracks und videoTracks

Diese Funktion fügt alle HTML-Medienelementen die Eigenschaften [`HTMLMediaElement.audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks) und [`HTMLMediaElement.videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks) hinzu. Doch da Firefox derzeit keine mehreren Audio- und Videospuren unterstützt, funktionieren die häufigsten Anwendungsfälle für diese Eigenschaften nicht, sodass sie standardmäßig deaktiviert sind. Siehe [Firefox Bug 1057233](https://bugzil.la/1057233) für weitere Details.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 33                  | Nein                     |
| Developer Edition | 33                  | Nein                     |
| Beta              | 33                  | Nein                     |
| Release           | 33                  | Nein                     |

- `media.track.enabled`
  - : Auf `true` setzen, um zu aktivieren.

#### Asynchrones Hinzufügen und Entfernen von SourceBuffer

Dies fügt die auf Versprechungen basierenden Methoden [`appendBufferAsync()`](/de/docs/Web/API/SourceBuffer/appendBufferAsync) und [`removeAsync()`](/de/docs/Web/API/SourceBuffer/removeAsync) zum Hinzufügen und Entfernen von Mediendatenpuffern zur Schnittstelle [`SourceBuffer`](/de/docs/Web/API/SourceBuffer) hinzu. Siehe [Firefox Bug 1280613](https://bugzil.la/1280613) und [Firefox Bug 778617](https://bugzil.la/778617) für weitere Informationen.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 62                  | Nein                     |
| Developer Edition | 62                  | Nein                     |
| Beta              | 62                  | Nein                     |
| Release           | 62                  | Nein                     |

- `media.mediasource.experimental.enabled`
  - : Auf `true` setzen, um zu aktivieren.

#### AVIF-Konformität-Strictness

Die Präferenz `image.avif.compliance_strictness` kann verwendet werden, um die _Strictness_ zu steuern, die angewendet wird, wenn [AVIF](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) Bilder verarbeitet werden.
Dies ermöglicht Benutzern von Firefox das Anzeigen von Bildern, die in einigen anderen Browser angezeigt werden, auch wenn sie nicht streng konform sind.

| Release-Kanal     | Version hinzugefügt | Standardwert |
| ----------------- | ------------------- | ------------ |
| Nightly           | 92                  | 1            |
| Developer Edition | 92                  | 1            |
| Beta              | 92                  | 1            |
| Release           | 92                  | 1            |

- `image.avif.compliance_strictness`
  - : Numerischer Wert, der ein _Strictness_ Level angibt. Erlaubte Werte sind:
    - `0`: Erlaubend. Akzeptiere Bilder mit Spezifikationsverletzungen sowohl in Empfehlungen ("sollte"-Sprache) als auch Anforderungen ("soll"-Sprache), sofern sie sicher oder eindeutig interpretiert werden können.
    - `1` **(Standard)**: Gemischt. Lehnt Anforderungen-Verletzungen ("soll") ab, erlaubt jedoch Empfehlungen-Verletzungen ("sollte").
    - `2`: Strikt. Lehnt jegliche Verletzungen der spezifizierten Anforderungen oder Empfehlungen ab.

#### JPEG XL Unterstützung

Firefox unterstützt [JPEG XL](https://jpeg.org/jpegxl/) Bilder, wenn diese Funktion aktiviert ist.
Siehe [Firefox Bug 1539075](https://bugzil.la/1539075) für weitere Details.

Beachten Sie, dass, wie unten gezeigt, die Funktion nur auf Nightly-Builds verfügbar ist (unabhängig davon, ob die Präferenz gesetzt ist).
In Firefox 149 wurde der vorherige C++ [JPEG XL](https://jpeg.org/jpegxl/) Bilddecoder durch eine neue Rust-basierte Implementierung ersetzt, die die `jxl-rs` Bibliothek verwendet ([Firefox Bug 1986393](https://bugzil.la/1986393)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 90                  | Nein                     |
| Developer Edition | —                   | —                        |
| Beta              | —                   | —                        |
| Release           | —                   | —                        |

- `image.jxl.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### WebVR API (Deaktiviert)

Die veraltete [WebVR API](/de/docs/Web/API/WebVR_API) ist auf dem Weg zur Entfernung.
Sie ist standardmäßig in allen Builds deaktiviert [Firefox Bug 1750902](https://bugzil.la/1750902).

| Release-Kanal     | Version entfernt | Standardmäßig aktiviert? |
| ----------------- | ---------------- | ------------------------ |
| Nightly           | 98               | Nein                     |
| Developer Edition | 98               | Nein                     |
| Beta              | 98               | Nein                     |
| Release           | 98               | Nein                     |

- `dom.vr.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### GeometryUtils Methoden: convertPointFromNode(), convertRectFromNode(), und convertQuadFromNode()

Die `GeometryUtils`-Methoden `convertPointFromNode()`, `convertRectFromNode()`, und `convertQuadFromNode()` geben den gegebenen Punkt, das Rechteck oder das Viereck von dem [[Node](/de/docs/Web/API/Node), auf dem sie aufgerufen werden, zu einem anderen Knoten weiter. (Siehe [Firefox Bug 918189](https://bugzil.la/918189) für weitere Details.)

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 31                  | Ja                       |
| Developer Edition | 31                  | Nein                     |
| Beta              | 31                  | Nein                     |
| Release           | 31                  | Nein                     |

- `layout.css.convertFromNode.enable`
  - : Auf `true` setzen, um zu aktivieren.

### GeometryUtils Methode: getBoxQuads()

Die `GeometryUtils` Methode `getBoxQuads()` gibt die CSS-Boxen für einen [`Node`](/de/docs/Web/API/Node) relativ zu einem anderen Knoten oder Viewport zurück. (Siehe [Firefox Bug 917755](https://bugzil.la/917755) für weitere Details.)

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 31                  | Ja                       |
| Developer Edition | 31                  | Nein                     |
| Beta              | 31                  | Nein                     |
| Release           | 31                  | Nein                     |

- `layout.css.getBoxQuads.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Zahlungsanfrage-API

#### Primäre Zahlungsabwicklung

Die [Zahlungsanfrage-API](/de/docs/Web/API/Payment_Request_API) bietet Unterstützung für die Verwaltung webbasierter Zahlungen innerhalb von Webinhalten oder Apps. Aufgrund eines Bugs, der beim Testen der Benutzeroberfläche auftrat, haben wir beschlossen, das Versenden dieser API zu verschieben, während Diskussionen über potenzielle Änderungen an der API geführt werden. Die Arbeit läuft weiter. (Siehe [Firefox Bug 1318984](https://bugzil.la/1318984) für weitere Details.)

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 55                  | Nein                     |
| Developer Edition | 55                  | Nein                     |
| Beta              | 55                  | Nein                     |
| Release           | 55                  | Nein                     |

- `dom.payments.request.enabled`
  - : Auf `true` setzen, um zu aktivieren.
- `dom.payments.request.supportedRegions`
  - : Ländercodes als kommagetrennte Zulassungsliste von Regionen (z.B. `US,CA`).

### WebShare-API

Die [Web Share API](/de/docs/Web/API/Web_Share_API) ermöglicht das Teilen von Dateien, URLs und anderen Daten von einer Website aus.
Diese Funktion ist auf Android in allen Builds aktiviert, aber auf Desktop hinter einer Präferenz (es sei denn, unten angegeben).

| Release-Kanal     | Version geändert | Standardmäßig aktiviert?                    |
| ----------------- | ---------------- | ------------------------------------------- |
| Nightly           | 71               | Nein (Standard). Ja (Windows ab Version 92) |
| Developer Edition | 71               | Nein                                        |
| Beta              | 71               | Nein                                        |
| Release           | 71               | Nein (Desktop). Ja (Android).               |

- `dom.webshare.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Notifications API

Benachrichtigungen haben die [`requireInteraction`](/de/docs/Web/API/Notification/requireInteraction)-Eigenschaft standardmäßig auf true unter Windows-Systemen und in der Nightly-Veröffentlichung ([Firefox Bug 1794475](https://bugzil.la/1794475)).

| Release-Kanal     | Version geändert | Standardmäßig aktiviert? |
| ----------------- | ---------------- | ------------------------ |
| Nightly           | 117              | Ja                       |
| Developer Edition | 117              | Nein                     |
| Beta              | 117              | Nein                     |
| Release           | 117              | Nur Windows              |

- `dom.webnotifications.requireinteraction.enabled`
  - : Auf `true` setzen, um zu aktivieren.

## Sicherheit und Datenschutz

### Unsicheres Seiten-Labeling

Die zwei Präferenzen `security.insecure_connection_text_*` fügen ein "Nicht sicher" Textlabel in der Adressleiste neben dem traditionellen Schlosssymbol hinzu, wenn eine Seite unsicher geladen wird (also mit {{Glossary("HTTP", "HTTP")}} anstelle von {{Glossary("HTTPS", "HTTPS")}}). Die Präferenz `browser.urlbar.trimHttps` kürzt das `https:` Präfix aus den Adressleisten-URLs. Siehe [Firefox Bug 1853418](https://bugzil.la/1853418) für weitere Details.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 121                 | Ja                       |
| Developer Edition | 60                  | Nein                     |
| Beta              | 60                  | Nein                     |
| Release           | 60                  | Nein                     |

- `security.insecure_connection_text.enabled`
  - : Auf `true` setzen, um das Textlabel für den normalen Browsing-Modus zu aktivieren.
- `security.insecure_connection_text.pbmode.enabled`
  - : Auf `true` setzen, um das Textlabel für den privaten Browsing-Modus zu aktivieren.
- `browser.urlbar.trimHttps`
  - : Auf `true` setzen, um das `https:` Präfix aus Adressleisten-URLs zu kürzen.

### Einschränkung von Erwachseneninhalten mit `<meta name="rating">`

Das nicht-standardisierte [`<meta name="rating">`](/de/docs/Web/HTML/Reference/Elements/meta) Element kann in eine Webseite eingeschlossen werden, um den Inhalt der Seite als eingeschränkt/erwachsen zu kennzeichnen. Zum Zeitpunkt des Schreibens gibt es zwei mögliche `content`-Werte, `adult` ([definiert durch Google](https://developers.google.com/search/docs/specialty/explicit/guidelines#add-metadata)) und `RTA-5042-1996-1400-1577-RTA` ([definiert durch ASACP](https://www.rtalabel.org/?content=howto#top)), die dieselbe Auswirkung haben (möglicherweise werden in Zukunft weitere Optionen hinzugefügt).

Die folgenden `<meta>` Elemente sind gleichwertig:

```html
<meta name="rating" content="adult" />
<meta name="rating" content="RTA-5042-1996-1400-1577-RTA" />
```

Browser, die dieses Element erkennen, können dann Schritte unternehmen, um den Zugriff der Nutzer auf den Inhalt zu beschränken. Firefox' Implementierung ersetzt die Seite durch den Inhalt, der unter `about:restricted` zu finden ist, welcher dem Nutzer erklärt, dass er versucht, auf eingeschränkten Inhalt zuzugreifen, erklärt, warum er ihn nicht anzeigen kann, und ihm eine Schaltfläche zum Zurückkehren bietet.

Siehe [Firefox Bug 1991135](https://bugzil.la/1991135) für weitere Details.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 146                 | Nein                     |
| Developer Edition | 146                 | Nein                     |
| Beta              | 146                 | Nein                     |
| Release           | 146                 | Nein                     |

- `security.restrict_to_adults.always`
  - : Auf `true` setzen, um den Zugriff auf Webseiten einzuschränken, die sich selbst als Erwachsene identifizieren, indem sie ein `<meta name="rating">` Element einschließen.
- `security.restrict_to_adults.respect_platform`
  - : Auf `true` setzen, um den Zugriff auf Webseiten einzuschränken, die sich selbst als Erwachseneninhalte identifizieren, indem sie ein `<meta name="rating">` Element einschließen, nur wenn geeignete Kindersicherungseinstellungen auf dem zugrunde liegenden Betriebssystem gesetzt sind (zum Beispiel, wenn die macOS _Inhalte & Datenschutz_ Einstellungen so eingestellt sind, dass sie explizite Webinhalte einschränken).

### Präferenzrichtlinie / Feature-Policy

[Feature Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) erlaubt Webentwicklern, selektiv bestimmte Funktionen und APIs im Browser zu aktivieren, zu deaktivieren oder zu modifizieren. Es ist ähnlich wie CSP, kontrolliert jedoch Features anstelle von Sicherheitsverhalten.
Dies wird in Firefox als **Feature Policy** implementiert, der Name, der in einer früheren Version der Spezifikation verwendet wurde.

Beachten Sie, dass unterstützte Richtlinien über das Attribut [`allow`](/de/docs/Web/HTML/Reference/Elements/iframe#allow) in `<iframe>` Elementen gesetzt werden können, auch wenn die Benutzer-Präferenz nicht gesetzt ist.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 65                  | Nein                     |
| Developer Edition | 65                  | Nein                     |
| Beta              | 65                  | Nein                     |
| Release           | 65                  | Nein                     |

- `dom.security.featurePolicy.header.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Privacy Preserving Attribution API (PPA)

Die Privacy Preserving Attribution API (PPA API) bietet eine Alternative zum Nutzertracking für Anzeigezuordnungen unter Verwendung des neuen `navigator.privateAttribution` Objekts mit den Methoden `saveImpression()` und `measureConversion()`. Lesen Sie mehr über PPA [im Original-Explainer](https://github.com/mozilla/explainers/tree/main/archive/ppa-experiment) und der [vorgeschlagenen Spezifikation](https://w3c.github.io/ppa/). Dieses Experiment kann für Websites über [origin trial](https://wiki.mozilla.org/Origin_Trials) oder im Browser aktiviert werden, indem die Präferenz auf `1` gesetzt wird. ([Firefox Bug 1900929](https://bugzil.la/1900929)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 128                 | Nein                     |
| Developer Edition | 128                 | Nein                     |
| Beta              | 128                 | Nein                     |
| Release           | 128                 | Nein                     |

- `dom.origin-trials.private-attribution.state`
  - : Auf `true` setzen, um zu aktivieren.

## HTTP

### Integritätspolitik für Stylesheet-Ressourcen

Die {{httpheader("Integrity-Policy")}} und {{httpheader("Integrity-Policy-Report-Only")}} HTTP-Header werden jetzt für Stilressourcen unterstützt. Dadurch können Websites entweder [Integritätsgarantien für Unterressourcen](/de/docs/Web/Security/Defenses/Subresource_Integrity) für Stile durchsetzen oder lediglich Verstöße gegen die Richtlinie melden.
Beachten Sie, dass Firefox Meldendpunkte ignoriert und Verstöße in der Entwicklerkonsole protokolliert.
Wenn `Integrity-Policy` verwendet wird, blockiert der Browser das Laden von Stilen, die in einem {{HTMLElement("link")}} Element mit [`rel="stylesheet"`](/de/docs/Web/HTML/Reference/Attributes/rel#stylesheet) referenziert werden und entweder das [`integrity`](/de/docs/Web/HTML/Reference/Elements/script#integrity) Attribut fehlen oder einen Integritätshash aufweisen, der nicht mit der Ressource auf dem Server übereinstimmt.
([Firefox Bug 1976656](https://bugzil.la/1976656)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 142                 | Nein                     |
| Developer Edition | 142                 | Nein                     |
| Beta              | 142                 | Nein                     |
| Release           | 142                 | Nein                     |

- `security.integrity_policy.stylesheet.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Idempotency-Key

Der {{httpheader("Idempotency-Key")}} HTTP-Anforderungs-Header kann von Client-Code verwendet werden, um {{Glossary("idempotent", "idempotente")}} {{HTTPMethod("POST")}} oder {{HTTPMethod("PATCH")}} Anfragen zu ermöglichen, wenn er mit einem Server verwendet wird, der dies unterstützt.
Die Spezifikation gibt an, dass der Server dokumentieren und angeben sollte, welche Endpunkte diesen Header erfordern, das Format des Schlüssels und erwartete Fehlermeldungsantworten.

Firefox fügt den Header mit einem eindeutigen Schlüssel für jede neue `POST` Anforderung _automatisch_ hinzu, wenn er nicht bereits clientseitig hinzugefügt wurde.
Dies vereinfacht den clientseitigen Code, der benötigt wird, um mit Servern zu arbeiten, die das Feature unterstützen.

([Firefox Bug 1830022](https://bugzil.la/1830022)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 135                 | Nein                     |
| Developer Edition | 135                 | Nein                     |
| Beta              | 135                 | Nein                     |
| Release           | 135                 | Nein                     |

- `network.http.idempotencyKey.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Accept-Header mit MIME-Typ image/jxl

Der HTTP-Header [`Accept`](/de/docs/Web/HTTP/Reference/Headers/Accept) in [Standardanfragen und Bildanfragen](/de/docs/Web/HTTP/Guides/Content_negotiation/List_of_default_Accept_values) kann über eine Präferenz konfiguriert werden, um die Unterstützung des MIME-Typs `image/jxl` anzugeben.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 128                 | Nein                     |
| Developer Edition | 128                 | Nein                     |
| Beta              | 128                 | Nein                     |
| Release           | 128                 | Nein                     |

- `image.jxl.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### SameSite=Lax standardmäßig

[`SameSite`-Cookies](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) haben standardmäßig den Wert `Lax`.
Mit dieser Einstellung werden Cookies nur gesendet, wenn ein Benutzer zum Ursprungsort navigiert, nicht für untergeordnete Anfragen zu Bildern oder Frames auf einer Drittanbieterseite usw.
Für weitere Details siehe [Firefox Bug 1617609](https://bugzil.la/1617609).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 69                  | Nein                     |
| Developer Edition | 69                  | Nein                     |
| Beta              | 69                  | Nein                     |
| Release           | 69                  | Nein                     |

- `network.cookie.sameSite.laxByDefault`
  - : Auf `true` setzen, um zu aktivieren.

### Access-Control-Allow-Headers-Wildcard umfasst nicht Authorization

Der [`Access-Control-Allow-Headers`](/de/docs/Web/HTTP/Reference/Headers/Access-Control-Allow-Headers) ist ein Antwort-Header zu einer {{Glossary("Preflight_request", "CORS-Voranfrage")}}, der angibt, welche Anforderungs-Header in der endgültigen Anfrage enthalten sein dürfen.
Die Antwortanweisung kann ein Wildcard (`*`) enthalten, das angibt, dass die endgültige Anfrage alle Header außer dem `Authorization`-Header enthalten darf.

Standardmäßig schließt Firefox den `Authorization`-Header in die endgültige Anfrage ein, nachdem eine Antwort mit `Access-Control-Allow-Headers: *` eingegangen ist.
Setzen Sie die Präferenz auf `false`, um sicherzustellen, dass Firefox den `Authorization`-Header nicht einfügt.
Für weitere Details siehe [Firefox Bug 1687364](https://bugzil.la/1687364).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 115                 | Ja                       |
| Developer Edition | 115                 | Ja                       |
| Beta              | 115                 | Ja                       |
| Release           | 115                 | Ja                       |

- `network.cors_preflight.authorization_covered_by_wildcard`
  - : Auf `true` setzen, um zu aktivieren.

## Entwickler-Tools

Die Entwickler-Tools von Mozilla entwickeln sich ständig weiter. Wir experimentieren mit neuen Ideen, fügen neue Funktionen hinzu und testen sie in den Nightly- und Developer Edition-Kanälen, bevor sie in die Beta- und Release-Versionen gelangen. Die folgenden Funktionen sind der aktuelle Stand der Experimentellen Entwickler-Tool-Funktionen.

**Keine experimentellen Funktionen in diesem Release-Zyklus.**

## Siehe auch

- [Firefox Entwicklerveröffentlichungen](/de/docs/Mozilla/Firefox/Releases)
- [Firefox Nightly](https://www.firefox.com/en-US/channel/desktop/)
- [Firefox Developer Edition](https://www.firefox.com/en-US/channel/desktop/developer/)
