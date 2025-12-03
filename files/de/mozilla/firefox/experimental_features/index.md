---
title: Experimentelle Funktionen in Firefox
short-title: Experimentelle Funktionen
slug: Mozilla/Firefox/Experimental_features
l10n:
  sourceCommit: bb650d18e1c1411a0fca94564e30dbc24a7ef030
---

Diese Seite listet die experimentellen und teilweise implementierten Funktionen von Firefox auf, einschließlich sich entwickelnder oder vorgeschlagener Web-Plattform-Standards. Jeder Eintrag unten enthält Informationen über die Builds, in denen eine Funktion enthalten ist (Nightly, Beta, Developer Edition oder Release), ob sie standardmäßig aktiviert ist oder nicht, und den Namen der **Präferenz**, mit der Sie die Funktion aktivieren oder konfigurieren können. Die Beschreibung jeder Funktion enthält auch Links zu relevanten [Bugzilla Fehlern](https://bugzilla.mozilla.org), die die Funktion implementieren oder aktivieren. Diese Informationen ermöglichen es Ihnen, experimentelle Funktionen auszuprobieren und Feedback zu geben, bevor sie offiziell veröffentlicht werden.

Im Hinblick auf den Lebenszyklus erscheinen neue Funktionen zunächst in [Nightly](https://www.firefox.com/en-US/channel/desktop/#nightly), wo sie oft standardmäßig aktiviert sind, um frühes Feedback und Tests zu erhalten. Wenn keine größeren Probleme auftreten, werden sie in [Beta](https://www.firefox.com/en-US/channel/desktop/#beta) und [Developer Edition](https://www.firefox.com/en-US/channel/desktop/developer/) Vorab-Builds aufgenommen. Schließlich werden genehmigte Funktionen im stabilen [Release](https://www.firefox.com/en-US/) Kanal ausgeliefert. Wenn eine Funktion standardmäßig in einem Release aktiviert ist, wird sie nicht mehr als experimentell betrachtet und von dieser Seite entfernt.

Um diese Funktionen zu aktivieren, geben Sie `about:config` in die Firefox-Adressleiste ein, suchen Sie die zugehörige **Präferenz** und ändern Sie ihren Wert, der normalerweise zwischen `true` und `false` umgeschaltet wird. Abhängig von der Funktion müssen Sie möglicherweise den Browser neu starten, damit die Änderung wirksam wird. Weitere Informationen zum Verwalten von Präferenzen in Firefox finden Sie im Supportartikel zum [Firefox-Konfigurations-Editor](https://support.mozilla.org/en-US/kb/about-config-editor-firefox).

## HTML

### Layout für input type="search"

Das Layout für `input type="search"` wurde aktualisiert. Dies führt dazu, dass ein Suchfeld ein Löschsymbol hat, sobald jemand darin zu tippen beginnt, um andere Browser-Implementierungen zu entsprechen. (Siehe [Firefox Fehler 558594](https://bugzil.la/558594) für weitere Details.)

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 81                  | Nein                     |
| Developer Edition | 81                  | Nein                     |
| Beta              | 81                  | Nein                     |
| Release           | 81                  | Nein                     |

- `layout.forms.input-type-search.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Passwortanzeige ein-/ausschalten

HTML-Passworteingaben ([`<input type="password">`](/de/docs/Web/HTML/Reference/Elements/input/password)) enthalten ein "Auge"-Symbol, das ein- und ausgeschaltet werden kann, um den Passworttext anzuzeigen oder zu verbergen ([Firefox Fehler 502258](https://bugzil.la/502258)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 96                  | Nein                     |
| Developer Edition | 96                  | Nein                     |
| Beta              | 96                  | Nein                     |
| Release           | 96                  | Nein                     |

- `layout.forms.reveal-password-button.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Zeitwähler für datetime-local Eingabefeld

HTML-Datetime-local Eingabeelemente ([`<input type="datetime-local">`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local)) enthalten jetzt einen Zeitwähler ([Firefox Fehler 1726108](https://bugzil.la/1726108)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 144                 | Nein                     |
| Developer Edition | 144                 | Nein                     |
| Beta              | 144                 | Nein                     |
| Release           | 144                 | Nein                     |

- `dom.forms.datetime.timepicker`
  - : Setzen Sie auf `true`, um zu aktivieren.

## CSS

### Hex-Boxen zur Darstellung von Kontrollzeichen

Dieses Feature rendert Kontrollzeichen (Unicode-Kategorie Cc) außer Tab (`U+0009`), Zeilenumbruch (`U+000A`), Formularvorschub (`U+000C`), und Wagenrücklauf (`U+000D`) als Hex-Box, wenn sie nicht erwartet werden. (Siehe [Firefox Fehler 1099557](https://bugzil.la/1099557) für weitere Details.)

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 43                  | Ja                       |
| Developer Edition | 43                  | Nein                     |
| Beta              | 43                  | Nein                     |
| Release           | 43                  | Nein                     |

- `layout.css.control-characters.visible`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Eigenschaft `initial-letter`

Die {{cssxref("initial-letter")}} CSS-Eigenschaft ist Teil der [CSS Inline Layout](https://drafts.csswg.org/css-inline/) Spezifikation und erlaubt es Ihnen zu spezifizieren, wie herabgefallene, angehobene und versunkene Anfangsbuchstaben angezeigt werden. (Siehe [Firefox Fehler 1223880](https://bugzil.la/1223880) für weitere Details.)

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 50                  | Nein                     |
| Developer Edition | 50                  | Nein                     |
| Beta              | 50                  | Nein                     |
| Release           | 50                  | Nein                     |

- `layout.css.initial-letter.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Funktion `fit-content()`

Die {{cssxref("fit-content_function", "fit-content()")}} Funktion, wie sie für {{cssxref("width")}} und andere Größenangaben gilt. Diese Funktion wird bereits gut für CSS Grid Layout-Spurgrößen unterstützt. (Siehe [Firefox Fehler 1312588](https://bugzil.la/1312588) für weitere Details.)

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 91                  | Nein                     |
| Developer Edition | 91                  | Nein                     |
| Beta              | 91                  | Nein                     |
| Release           | 91                  | Nein                     |

- `layout.css.fit-content-function.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Scrollgetriebene Animationen

Früher "Scroll-verknüpfte Animationen" genannt, hängt eine [scrollgetriebene Animation](/de/docs/Web/CSS/Guides/Scroll-driven_animations) von der Scroll-Position einer Bildlaufleiste anstelle der Zeit oder einer anderen Dimension ab. Die {{cssxref('scroll-timeline-name')}} und {{cssxref('scroll-timeline-axis')}} Eigenschaften (und die {{cssxref('scroll-timeline')}} Shorthand-Eigenschaft) ermöglichen es Ihnen, zu definieren, dass eine bestimmte Bildlaufleiste in einem bestimmten benannten Container als Quelle für eine scrollgetriebene Animation verwendet werden kann. Die Scroll-Timeline kann dann mit einer [Animation](/de/docs/Web/CSS/Guides/Animations) verbunden werden, indem die Eigenschaft {{cssxref('animation-timeline')}} auf den Namenwert gesetzt wird, der mit `scroll-timeline-name` definiert wurde.

Wenn Sie die {{cssxref('scroll-timeline')}} Shorthand-Eigenschaft verwenden, muss die Reihenfolge der Eigenschaftswerte {{cssxref('scroll-timeline-name')}} gefolgt von {{cssxref('scroll-timeline-axis')}} sein. Die Langhand- und Shorthand-Eigenschaften sind beide hinter der Präferenz verfügbar. Alternativ können Sie die `scroll()`](/de/docs/Web/CSS/Reference/Properties/animation-timeline/scroll) funktionale Notation mit {{cssxref('animation-timeline')}} verwenden, um anzugeben, dass eine Bildlaufleiste in einem Vorfahrenelement für die Timeline verwendet wird.

Für weitere Informationen siehe [Firefox Fehler 1807685](https://bugzil.la/1807685), [Firefox Fehler 1804573](https://bugzil.la/1804573), [Firefox Fehler 1809005](https://bugzil.la/1809005), [Firefox Fehler 1676791](https://bugzil.la/1676791), [Firefox Fehler 1754897](https://bugzil.la/1754897), [Firefox Fehler 1817303](https://bugzil.la/1817303), und [Firefox Fehler 1737918](https://bugzil.la/1737918).

Die {{cssxref('timeline-scope')}}, {{cssxref('animation-range-start')}} und {{cssxref('animation-range-end')}} Eigenschaften (und die {{cssxref('animation-range')}} Shorthand-Eigenschaft) werden noch nicht unterstützt. Für weitere Informationen siehe [Firefox Fehler 1676779](https://bugzil.la/1676779).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 136                 | Ja                       |
| Developer Edition | 110                 | Nein                     |
| Beta              | 110                 | Nein                     |
| Release           | 110                 | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Medien-Feature `prefers-reduced-transparency`

Das CSS-Medien-Feature [`prefers-reduced-transparency`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-transparency) ermöglicht es Ihnen zu erkennen, ob ein Nutzer die Einstellung aktiviert hat, um die Menge der transparenten oder durchscheinenden Schichteffekte auf ihrem Gerät zu minimieren. Siehe ([Firefox Fehler 1736914](https://bugzil.la/1736914)) für weitere Details.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 113                 | Nein                     |
| Developer Edition | 113                 | Nein                     |
| Beta              | 113                 | Nein                     |
| Release           | 113                 | Nein                     |

- `layout.css.prefers-reduced-transparency.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Medien-Feature `inverted-colors`

Das CSS-Medien-Feature [`inverted-colors`](/de/docs/Web/CSS/Reference/At-rules/@media/inverted-colors) ermöglicht es Ihnen zu erkennen, ob ein User-Agent oder das zugrunde liegende Betriebssystem die Farben umkehrt. Siehe ([Firefox Fehler 1794628](https://bugzil.la/1794628)) für weitere Details.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 114                 | Nein                     |
| Developer Edition | 114                 | Nein                     |
| Beta              | 114                 | Nein                     |
| Release           | 114                 | Nein                     |

- `layout.css.inverted-colors.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Benannte Ansicht-Fortschritt-Timelines-Eigenschaft

Die CSS-Eigenschaft [`view-timeline-name`](/de/docs/Web/CSS/Reference/Properties/view-timeline-name) ermöglicht es Ihnen, einem bestimmten Element einen Namen zu geben, der angibt, dass sein Vorfahre-Scroller-Element die Quelle einer Ansichtsfortschritt-Timeline ist. Der Name kann dann der `animation-timeline` zugewiesen werden, die dann das zugehörige Element animiert, während es sich durch den sichtbaren Bereich seines Vorfahre-Scrollers bewegt. Siehe ([Firefox Fehler 1737920](https://bugzil.la/1737920)) für weitere Details.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 114                 | Nein                     |
| Developer Edition | 114                 | Nein                     |
| Beta              | 114                 | Nein                     |
| Release           | 114                 | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Anonyme Ansicht-Fortschritt-Timelines-Funktion

Die CSS-Funktion [`view()`](/de/docs/Web/CSS/Reference/Properties/animation-timeline/view) ermöglicht es Ihnen, anzugeben, dass die `animation-timeline` für ein Element eine Ansichtsfortschritt-Timeline ist, die das Element animiert, während es sich durch den sichtbaren Bereich seines Vorfahren-Scrollers bewegt. Die Funktion definiert die Achse des Elternelements, das die Timeline liefert, zusammen mit dem Inset innerhalb des sichtbaren Bereichs, bei dem die Animation beginnt und endet. Siehe ([Firefox Fehler 1808410](https://bugzil.la/1808410)) für weitere Details.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 114                 | Nein                     |
| Developer Edition | 114                 | Nein                     |
| Beta              | 114                 | Nein                     |
| Release           | 114                 | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Herstellerpräfixierte Transform-Eigenschaften

Die `-moz-`-präfixierten [CSS Transform](/de/docs/Web/CSS/Guides/Transforms)-Eigenschaften können deaktiviert werden, indem die `layout.css.prefixes.transforms`-Präferenz auf `false` gesetzt wird. Die Absicht ist es, diese zu deaktivieren, sobald die Standard-CSS-Zoom-Eigenschaften gut unterstützt werden. ([Firefox Fehler 1886134](https://bugzil.la/1886134), [Firefox Fehler 1855763](https://bugzil.la/1855763)).

Speziell wird diese Präferenz die folgenden präfixierten Eigenschaften deaktivieren:

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

### Funktion `shape()`

Die CSS-Funktion [`shape()`](/de/docs/Web/CSS/Reference/Values/basic-shape/shape) ist ein [`<basic-shape>`](/de/docs/Web/CSS/Reference/Values/basic-shape) Datentyp, der es Ihnen ermöglicht, eine Form in den {{cssxref("clip-path")}} und {{cssxref("offset-path")}} Eigenschaften mit Hilfe eines oder mehrerer "Formenbefehle" zu definieren. Diese Befehle sind den [SVG Pfadbefehlen](/de/docs/Web/SVG/Reference/Attribute/d#path_commands) sehr ähnlich. Die `shape()` Funktion ist in einigen Aspekten der {{cssxref("basic-shape/path","path()")}} Funktion ähnlich, aber im Gegensatz zu `path()`, das die [SVG Pfad](/de/docs/Web/SVG/Reference/Element/path) Syntax verwendet, verwendet `shape()` die Standard-CSS-Syntax. Dies ermöglicht es Ihnen, Formen einfach zu erstellen und zu bearbeiten und auch die Verwendung von CSS-Mathematikfunktionen zu ermöglichen. Für weitere Details siehe [Firefox Fehler 1823463](https://bugzil.la/1823463) für die `shape()` Unterstützung in `clip-path`, [Firefox Fehler 1884424](https://bugzil.la/1884424) für die Unterstützung in `offset-path`, und [Firefox Fehler 1884425](https://bugzil.la/1884425) für die Interpolationsunterstützung.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 126                 | Ja                       |
| Developer Edition | 126                 | Nein                     |
| Beta              | 126                 | Nein                     |
| Release           | 126                 | Nein                     |

- `layout.css.basic-shape-shape.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

#### Relative Kontrollpunkte in CSS `shape()` Kurvenbefehlen

Sie können [`<relative-control-point>`](/de/docs/Web/CSS/Reference/Values/basic-shape/shape#relative-control-point) Werte angeben, wenn Sie einen [`<curve-command>`](/de/docs/Web/CSS/Reference/Values/basic-shape/shape#curve-command) oder [`<smooth-command>`](/de/docs/Web/CSS/Reference/Values/basic-shape/shape#smooth-command) in einer CSS `shape()` Funktion spezifizieren. Diese Werte ermöglichen es Ihnen, Kontrollpunkte anzugeben, die relativ zum Start- oder Endpunkt des aktuellen Befehls oder relativ zum Ursprung (oben links) des Containers positioniert sind, in dem die Form gezeichnet wird. ([Firefox Fehler 1921501](https://bugzil.la/1921501)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 146                 | Ja                       |
| Developer Edition | 146                 | Nein                     |
| Beta              | 146                 | Nein                     |
| Release           | 146                 | Nein                     |

- `layout.css.basic-shape-shape.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Symmetric `letter-spacing`

Die CSS-Eigenschaft {{cssxref("letter-spacing")}} teilt den angegebenen Zeichenabstand nun gleichmäßig auf beiden Seiten jedes Zeichens auf. Dies unterscheidet sich vom aktuellen Verhalten, bei dem der Abstand hauptsächlich zu einer Seite hinzugefügt wird. Dieser Ansatz kann die Textabstände verbessern, insbesondere bei gemischt-gerichtetem Text. ([Firefox Fehler 1891446](https://bugzil.la/1891446)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 128                 | Ja                       |
| Developer Edition | 128                 | Ja                       |
| Beta              | 127                 | Nein                     |
| Release           | 127                 | Nein                     |

- `layout.css.letter-spacing.model`
  - : Setzen Sie auf `true`, um zu aktivieren.

### `calc()` Farbkanalunterstützung in relativen Farben

Die CSS-Funktion [`calc()`](/de/docs/Web/CSS/Reference/Values/calc) kann nun Farbkanäle in [relativen Farben](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors#using_math_functions) analysieren, sodass Sie Farbänderungen in verschiedenen Farbräumen oder bei Verwendung unterschiedlicher Funktionsnotationen korrekt berechnen können. [Firefox Fehler 1889561](https://bugzil.la/1889561).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 127                 | Ja                       |
| Developer Edition | 127                 | Nein                     |
| Beta              | 127                 | Nein                     |
| Release           | 127                 | Nein                     |

- `layout.css.relative-color-syntax.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### CSS Anker-Positionierung

Das [CSS Anchor Positioning](/de/docs/Web/CSS/Guides/Anchor_positioning) Modul definiert eine Reihe von Funktionen, die es erlauben, Elemente als Anker-Elemente zu definieren, und andere Elemente relativ zu Anker-Elementen zu positionieren. Dies ermöglicht es zum Beispiel, Tooltips neben dem zugehörigen Inhalt anzuzeigen, während es durch den Ansichtsbereich scrollt, sich bei Bedarf bewegt, wenn es den Ansichtsbereich überlaufen würde, und verschwindet, wenn der Anker vom Bildschirm verschwindet. Die Funktionensammlung wird schrittweise hinter einer Präferenz eingeführt (allgemein: [Firefox Fehler 1988224](https://bugzil.la/1988224), {{cssxref("position-area")}}: [Firefox Fehler 1924086](https://bugzil.la/1924086), benutzerdefinierte {{cssxref("@position-try")}} Rückfälle: [Firefox Fehler 1962598](https://bugzil.la/1962598)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 145                 | Ja                       |
| Developer Edition | 131                 | Nein                     |
| Beta              | 131                 | Nein                     |
| Release           | 131                 | Nein                     |

- `layout.css.anchor-positioning.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

#### Funktion `anchor-size()`

Die CSS-Funktion {{CSSXRef("anchor-size")}} ermöglicht es Ihnen, die Größe, Position und Ränder eines anker-positionierten Elements relativ zu den Dimensionen seines Anker-Elements zu setzen. ([Firefox Fehler 1972610](https://bugzil.la/1972610)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 145                 | Ja                       |
| Developer Edition | 142                 | Nein                     |
| Beta              | 142                 | Nein                     |
| Release           | 142                 | Nein                     |

- `layout.css.anchor-positioning.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

#### Eigenschaft `position-area`

Die CSS-Eigenschaft {{CSSXRef("position-area")}} ermöglicht es Ihnen, ein anker-positioniertes Element relativ zu den Rändern seines zugehörigen Anker-Elements zu positionieren, indem das positionierte Element auf einer oder mehreren Kacheln eines impliziten 3x3 Rasters platziert wird, wobei das Ankerelement die mittlere Zelle ist. ([Firefox Fehler 1924086](https://bugzil.la/1924086)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 145                 | Ja                       |
| Developer Edition | 145                 | Nein                     |
| Beta              | 145                 | Nein                     |
| Release           | 145                 | Nein                     |

- `layout.css.anchor-positioning.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Erlauben von Pseudoelementen nach elementgestützten Pseudoelementen

Es wurde begonnen, [Pseudoelemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) wie {{cssxref("::first-letter")}} und {{cssxref("::before")}} zu ermöglichen, an [elementgestützte Pseudoelemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements#element-backed_pseudo-elements) wie {{cssxref("::details-content")}} und {{cssxref("::file-selector-button")}} angefügt zu werden.

Dies ermöglicht es Benutzern beispielsweise, den ersten Buchstaben des {{htmlElement("details")}} Elements zu stylen, indem sie den CSS-Selektor `::details-content::first-letter` verwenden, oder Inhalte vor einem {{HTMLElement("input") }} von [`type="file"`](/de/docs/Web/HTML/Reference/Elements/input/file) mithilfe des CSS-Selektors `::file-selector-button::before` hinzuzufügen.

Derzeit kann nur die Unterstützung für `::details-content::first-letter` mit `@supports(::details-content::first-letter)` geparst werden. Das Pseudoelement `::file-selector-button` ist noch nicht als elementgestütztes Pseudoelement markiert, sodass es keine Möglichkeit gibt, dies zu testen. ([Firefox Fehler 1953557](https://bugzil.la/1953557), [Firefox Fehler 1941406](https://bugzil.la/1941406)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 138                 | Nein                     |
| Developer Edition | 138                 | Nein                     |
| Beta              | 138                 | Nein                     |
| Release           | 138                 | Nein                     |

### Pseudo-Klassen `:heading` und `:heading()`

Die Pseudo-Klasse [`:heading`](/de/docs/Web/CSS/Reference/Selectors/:heading) ermöglicht es Ihnen, alle [Überschriftselemente](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) (`<h1>`-`<h6>`) auf einmal zu stylen, anstatt sie einzeln ansprechen zu müssen. Die funktionale Pseudo-Klasse [`:heading()`](/de/docs/Web/CSS/Reference/Selectors/:heading_function) erlaubt es Ihnen, Überschriftselemente zu stylen, die zu einer kommagetrennten Liste von Ganzzahlen passen, die die Überschriftsstufen entsprechen. ([Firefox Fehler 1974386](https://bugzil.la/1974386) & [Firefox Fehler 1984310](https://bugzil.la/1984310)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 142                 | Nein                     |
| Developer Edition | 142                 | Nein                     |
| Beta              | 142                 | Nein                     |
| Release           | 142                 | Nein                     |

- `layout.css.heading-selector.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### `text-decoration-trim`

Die CSS-Eigenschaft `text-decoration-trim` ermöglicht es Ihnen, die {{cssxref("text-decoration")}} Start- und Endversätze zu spezifizieren, um die Länge von Textdekorationen zu verkürzen, zu verlängern oder ihre Position im Verhältnis zum Text zu verschieben ([Firefox Fehler 1979915](https://bugzil.la/1979915)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 145                 | Nein                     |
| Developer Edition | 145                 | Nein                     |
| Beta              | 145                 | Nein                     |
| Release           | 145                 | Nein                     |

- `layout.css.text-decoration-trim.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### `@custom-media` At-Regel

Die [`@custom-media`](/de/docs/Web/CSS/Reference/At-rules/@custom-media) CSS-At-Regel definiert Aliase für lange oder komplexe Medienabfragen. Anstatt dieselbe festcodierte `<media-query-list>` in mehreren `@media` At-Regeln zu wiederholen, kann sie einmal in einer `@custom-media` At-Regel definiert und überall im Stylesheet bei Bedarf referenziert werden. ([Firefox Fehler 1991105](https://bugzil.la/1744292)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 146                 | Nein                     |
| Developer Edition | 146                 | Nein                     |
| Beta              | 146                 | Nein                     |
| Release           | 146                 | Nein                     |

- `layout.css.custom-media.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

## SVG

**Keine experimentellen Funktionen in diesem Release-Zyklus.**

## JavaScript

### CSS Modulscripte

CSS Modulscripte werden nun unterstützt, sodass ein Stylesheet als Instanz von [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet) in ein Script geladen werden kann, indem die [`import`](/de/docs/Web/JavaScript/Reference/Statements/import) Anweisung verwendet wird. Die `import`-Anweisung muss auch das `type` [import-Attribut](/de/docs/Web/JavaScript/Reference/Statements/import/with) angeben und auf `"css"` setzen, und das Stylesheet muss mit dem [Medientyp](/de/docs/Web/HTTP/Guides/MIME_types) `text/css` bereitgestellt werden. ([Firefox Fehler 1720570](https://bugzil.la/1720570)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 145                 | Nein                     |
| Developer Edition | Nein                | Nein                     |
| Beta              | Nein                | Nein                     |
| Release           | Nein                | Nein                     |

- `layout.css.module-scripts.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

## APIs

### CloseWatcher Schnittstelle

Eingebaute Webkomponenten mit "offenen" und "geschlossenen" Semantiken, wie modale Dialoge und Popovers, können mit gerätenativen Mechanismen geschlossen werden. Zum Beispiel kann man auf Android einen Dialog mit der Rücktaste schließen. Die [`CloseWatcher`](/de/docs/Web/API/CloseWatcher) Schnittstelle ermöglicht es Entwicklern, UI-Komponenten wie benutzerdefinierte Seitenleisten zu implementieren, die ähnlich mit nativen Mechanismen geschlossen werden können. ([Firefox Fehler 1888729](https://bugzil.la/1888729)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert?      |
| ----------------- | ------------------- | ----------------------------- |
| Nightly           | 140                 | Ja (Desktop). Nein (Android). |
| Developer Edition | 132                 | Nein                          |
| Beta              | 132                 | Nein                          |
| Release           | 132                 | Nein                          |

- `dom.closewatcher.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Navigations-API

Die Navigations-API bietet die Möglichkeit, Browser-Navigationen zu initiieren, zu unterbrechen und zu verwalten. Sie kann auch die Historieneinträge einer Anwendung untersuchen. Dies ist ein Nachfolger früherer Web-Plattform-Funktionen wie der [History API](/de/docs/Web/API/History_API) und [`window.location`](/de/docs/Web/API/Window/location), die deren Schwächen behebt und speziell auf die Bedürfnisse von {{Glossary("SPA", "Single-Page-Anwendungen (SPAs)")}} ausgerichtet ist. ([Firefox Fehler 1979288](https://bugzil.la/1979288)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 146                 | Ja                       |
| Developer Edition | 146                 | Nein                     |
| Beta              | 146                 | Nein                     |
| Release           | 146                 | Nein                     |

- `dom.navigation.webidl.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Trusted Types API

Die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) bietet Mechanismen, um sicherzustellen, dass Funktionen, die potenziell als Vektoren für XSS-Angriffe verwendet werden könnten, nur mit Daten aufgerufen werden können, die validiert oder bereinigt wurden. Die API ist in frühen Beta-Versionen aktiviert ([Firefox Fehler 1992941](https://bugzil.la/1992941)).

Dies umfasst (nicht erschöpfend):

- Hinzufügen der [`TrustedTypePolicyFactory`](/de/docs/Web/API/TrustedTypePolicyFactory), [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy), [`TrustedHTML`](/de/docs/Web/API/TrustedHTML), [`TrustedScript`](/de/docs/Web/API/TrustedScript), [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL) Schnittstellen und der `trustedTypes` Eigenschaft auf [`Window`](/de/docs/Web/API/Window/trustedTypes) und [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope/trustedTypes).
- Aktualisierungen der [Injektionseinschnittstellen](/de/docs/Web/API/Trusted_Types_API#injection_sink_interfaces), wie [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) und [`document.write()`](/de/docs/Web/API/Document/write), um das `TrustedHTML`, `TrustedScript`, `TrustedScriptURL` neben Strings zuzulassen.
- Unterstützung der [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) und [`trusted-types`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/trusted-types) Direktiven, und des [`'trusted-types-eval'`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#trusted-types-eval) Schlüsselworts, des {{HTTPHeader("Content-Security-Policy")}} HTTP-Headers. Diese können verwendet werden, um vertrauenswürdige Typen anstelle von Strings zu erzwingen, die spezifisch erlaubten Richtlinien zu benennen und zu ermöglichen, dass [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) und ähnliche Funktionen verwendet werden können, wenn [Trusted Types](/de/docs/Web/API/Trusted_Types_API) unterstützt und durchgesetzt werden.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 145                 | Ja                       |
| Developer Edition | 145                 | Ja                       |
| Beta              | 145                 | Ja                       |
| Release           | 133                 | Nein                     |

- `dom.security.trusted_types.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### HTML Sanitizer API

Die [HTML Sanitizer API](/de/docs/Web/API/HTML_Sanitizer_API) ermöglicht es Entwicklern, unzuverlässige HTML-Zeichenfolgen zu bereinigen, sodass sie sicher in das DOM eines Dokuments eingefügt werden können.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 146                 | Ja                       |
| Developer Edition | 138                 | Nein                     |
| Beta              | 138                 | Nein                     |
| Release           | 138                 | Nein                     |

- `dom.security.sanitizer.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Entfernung der Ereignisse `beforescriptexecute` und `afterscriptexecute`

Die nicht standardisierten Ereignisse [`beforescriptexecute`](/de/docs/Web/API/Document/beforescriptexecute_event) und [`afterscriptexecute`](/de/docs/Web/API/Document/afterscriptexecute_event) auf der [`Document`](/de/docs/Web/API/Document) Schnittstelle und [`afterscriptexecute`](/de/docs/Web/API/Element/afterscriptexecute_event) und [`beforescriptexecute`](/de/docs/Web/API/Element/beforescriptexecute_event) auf der [`Element`](/de/docs/Web/API/Element) Schnittstelle sind auf dem Weg zur Entfernung. Sie sind in Nightly deaktiviert. ([Firefox Fehler 1954685](https://bugzil.la/1954685)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 139                 | Nein                     |
| Developer Edition | 139                 | Ja                       |
| Beta              | 139                 | Ja                       |
| Release           | 139                 | Ja                       |

- `dom.events.script_execute.enable`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Eigenschaften `actions` und `maxActions` von Benachrichtigungen

Die schreibgeschützte Eigenschaft [`actions`](/de/docs/Web/API/Notification/actions) und die statische schreibgeschützte Eigenschaft [`maxActions`](/de/docs/Web/API/Notification/maxActions_static) der [`Notification`](/de/docs/Web/API/Notification) Schnittstelle werden in Nightly auf Desktop unterstützt. Diese enthalten die mit [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification) gesetzten Benachrichtigungsaktionen und die maximale Anzahl von Aktionen, die gesetzt werden können. ([Firefox Fehler 1225110](https://bugzil.la/1225110), [Firefox Fehler 1963263](https://bugzil.la/1963263)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 138                 | Ja (nur Desktop)         |
| Developer Edition | 138                 | Nein                     |
| Beta              | 138                 | Nein                     |
| Release           | 138                 | Nein                     |

- `dom.webnotifications.actions.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Grafik: Canvas, WebGL und WebGPU

#### WebGL: Entwurfserweiterungen

Wenn diese Präferenz aktiviert ist, sind alle WebGL-Erweiterungen, die sich derzeit im Entwurfsstatus befinden und getestet werden, zur Verwendung aktiviert. Derzeit werden von Firefox keine WebGL-Erweiterungen getestet.

#### WebGPU API

Die [WebGPU API](/de/docs/Web/API/WebGPU_API) bietet Low-Level-Unterstützung für die Durchführung von Berechnungen und Grafikdarstellung unter Verwendung der [Grafikverarbeitungseinheit](https://en.wikipedia.org/wiki/Graphics_Processing_Unit) (GPU) des Geräts oder Computers des Benutzers. Ab Version 142 ist es auf Windows in allen Kontexten außer Dienstarbeitern aktiviert. Für andere Plattformen ist es in Nightly aktiviert. Siehe [Firefox Fehler 1602129](https://bugzil.la/1602129) für unseren Fortschritt zu dieser API.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert?                          |
| ----------------- | ------------------- | ------------------------------------------------- |
| Nightly           | 141                 | Ja                                                |
| Developer Edition | 141                 | Nein (Ja auf Windows, nicht inkl. Dienstarbeiter) |
| Beta              | 141                 | Nein (Ja auf Windows, nicht inkl. Dienstarbeiter) |
| Release           | 141                 | Nein (Ja auf Windows, nicht inkl. Dienstarbeiter) |

- `dom.webgpu.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren (aktiviert in Nightly und auf Windows in allen Versionen)
- `dom.webgpu.service-workers.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren (aktiviert in Nightly)

### Reporting API Unterstützung für CSP-Verletzungen

Die [Reporting API](/de/docs/Web/API/Reporting_API) hat jetzt Unterstützung für das Reporting von [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP)-Verletzungen.

[`Report`](/de/docs/Web/API/Report)-Instanzen, die von der [`ReportingObserver`](/de/docs/Web/API/ReportingObserver)-Schnittstelle zurückgegeben werden, können jetzt einen `type`-Wert von `"csp-violation"` und eine `body`-Eigenschaft haben, die eine Instanz der [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody)-Schnittstelle enthält. Dies ermöglicht es, CSP-Verletzungen innerhalb einer Webseite zu melden.

CSP-Verletzungsberichte können auch an entfernte Endpunkte gesendet werden, die im CSP durch die Direktive {{CSP("report-to")}} namentlich angegeben sind — die Endpunktnamen und zugehörigen URLs müssen zuerst in den HTTP-Antwort-Headern {{httpheader('Reporting-Endpoints')}} oder {{httpheader('Report-To')}} definiert werden. Der Bericht ist eine Serialisierung des oben beschriebenen [`Report`](/de/docs/Web/API/Report)-Objekts, mit einer `body`-Eigenschaft, die eine Serialisierung einer [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody)-Instanz ist.

Dieser Verletzungsbericht ersetzt einen ähnlichen CSP-spezifischen Mechanismus zum Senden von Verletzungsberichten, der die CSP-Direktive {{CSP("report-uri")}} verwendet, um die URL des Meldungsendpunkts festzulegen, und ein [CSP-spezifisches JSON-Verletzungsbericht-Format](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/report-uri#violation_report_syntax) hat. ([Firefox Fehler 1391243](https://bugzil.la/1391243)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 130                 | Nein                     |
| Developer Edition | 130                 | Nein                     |
| Beta              | 130                 | Nein                     |
| Release           | 130                 | Nein                     |

- `dom.reporting.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### WebRTC und Medien

Die folgenden experimentellen Funktionen beinhalten solche, die in der [WebRTC API](/de/docs/Web/API/WebRTC_API), der [Web Audio API](/de/docs/Web/API/Web_Audio_API), der [Media Source Extensions API](/de/docs/Web/API/Media_Source_Extensions_API), der [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API) und der [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) gefunden werden.

#### Asynchrones Hinzufügen und Entfernen von SourceBuffer

Dies fügt die versprechensbasierten Methoden [`appendBufferAsync()`](/de/docs/Web/API/SourceBuffer/appendBufferAsync) und [`removeAsync()`](/de/docs/Web/API/SourceBuffer/removeAsync) zum Hinzufügen und Entfernen von Medienquellenpuffern zur [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)-Schnittstelle hinzu. Siehe [Firefox Fehler 1280613](https://bugzil.la/1280613) und [Firefox Fehler 778617](https://bugzil.la/778617) für weitere Informationen.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 62                  | Nein                     |
| Developer Edition | 62                  | Nein                     |
| Beta              | 62                  | Nein                     |
| Release           | 62                  | Nein                     |

- `media.mediasource.experimental.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

#### AVIF Konformitätsstrenge

Die Präferenz `image.avif.compliance_strictness` kann verwendet werden, um die _Strenge_ zu steuern, die beim Verarbeiten von [AVIF](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) Bildern angewendet wird. Dies ermöglicht es Firefox-Benutzern, Bilder anzuzeigen, die in einigen anderen Browsern gerendert werden, auch wenn sie nicht strikt konform sind.

| Release-Kanal     | Version hinzugefügt | Standardwert |
| ----------------- | ------------------- | ------------ |
| Nightly           | 92                  | 1            |
| Developer Edition | 92                  | 1            |
| Beta              | 92                  | 1            |
| Release           | 92                  | 1            |

- `image.avif.compliance_strictness`
  - : Numerischer Wert, der ein _Strengegrad_ angibt. Erlaubte Werte sind:
    - `0`: Lax. Akzeptiert Bilder mit Spezifikationsverletzungen in sowohl Empfehlungen (Sprache "sollte") als auch Anforderungen (Sprache "muss"), vorausgesetzt, sie können sicher oder eindeutig interpretiert werden.
    - `1` **(Standardwert)**: Gemischt. Lehnt Verletzungen von Anforderungen ("muss") ab, erlaubt jedoch Verletzungen von Empfehlungen ("sollte").
    - `2`: Strikt. Lehnt jegliche Verletzungen von festgelegten Anforderungen oder Empfehlungen ab.

#### JPEG XL Unterstützung

Firefox unterstützt [JPEG XL](https://jpeg.org/jpegxl/) Bilder, wenn diese Funktion aktiviert ist. Siehe [Firefox Fehler 1539075](https://bugzil.la/1539075) für weitere Details.

Beachten Sie, dass die Funktion wie unten gezeigt nur in Nightly-Builds verfügbar ist (unabhängig davon, ob die Präferenz gesetzt ist).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 90                  | Nein                     |
| Developer Edition | —                   | —                        |
| Beta              | —                   | —                        |
| Release           | —                   | —                        |

- `image.jxl.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### WebVR API

#### WebVR API (Deaktiviert)

Die veraltete [WebVR API](/de/docs/Web/API/WebVR_API) ist auf dem Weg zur Entfernung. Sie ist standardmäßig in allen Builds deaktiviert [Firefox Fehler 1750902](https://bugzil.la/1750902).

| Release-Kanal     | Version entfernt | Standardmäßig aktiviert? |
| ----------------- | ---------------- | ------------------------ |
| Nightly           | 98               | Nein                     |
| Developer Edition | 98               | Nein                     |
| Beta              | 98               | Nein                     |
| Release           | 98               | Nein                     |

- `dom.vr.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

#### Eigenschaften `audioTracks` und `videoTracks` von HTMLMediaElement

Wenn diese Funktion aktiviert ist, werden die Eigenschaften [`HTMLMediaElement.audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks) und [`HTMLMediaElement.videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks) zu allen HTML-Medienelementen hinzugefügt. Da Firefox jedoch derzeit keine mehreren Audio- und Videospuren unterstützt, funktionieren die häufigsten Anwendungsfälle für diese Eigenschaften nicht, sodass sie beide standardmäßig deaktiviert sind. Siehe [Firefox Fehler 1057233](https://bugzil.la/1057233) für weitere Details.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 33                  | Nein                     |
| Developer Edition | 33                  | Nein                     |
| Beta              | 33                  | Nein                     |
| Release           | 33                  | Nein                     |

- `media.track.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

#### GeometryUtils Methoden: convertPointFromNode(), convertRectFromNode(), und convertQuadFromNode()

Die `GeometryUtils` Methoden `convertPointFromNode()`, `convertRectFromNode()`, und `convertQuadFromNode()` mappen den gegebenen Punkt, das Rechteck oder das Quadruple vom [`Node`](/de/docs/Web/API/Node), auf dem sie aufgerufen werden, zu einem anderen Knoten. (Siehe [Firefox Fehler 918189](https://bugzil.la/918189) für weitere Details.)

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 31                  | Ja                       |
| Developer Edition | 31                  | Nein                     |
| Beta              | 31                  | Nein                     |
| Release           | 31                  | Nein                     |

- `layout.css.convertFromNode.enable`
  - : Setzen Sie auf `true`, um zu aktivieren.

#### GeometryUtils Methode: getBoxQuads()

Die `GeometryUtils` Methode `getBoxQuads()` gibt die CSS-Boxen für einen [`Node`](/de/docs/Web/API/Node) relativ zu einem anderen Knoten oder Ansichtsbereich zurück. (Siehe [Firefox Fehler 917755](https://bugzil.la/917755) für weitere Details.)

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

Die [Zahlungsanforderungs-API](/de/docs/Web/API/Payment_Request_API) bietet Unterstützung für die Abwicklung webbasierter Zahlungen innerhalb von Webinhalten oder Apps. Wegen eines Bugs, der beim Testen der Benutzeroberfläche auftrat, haben wir beschlossen, die Veröffentlichung dieser API zu verschieben, während Diskussionen über mögliche Änderungen an der API stattfinden. Die Arbeit ist im Gange. (Siehe [Firefox Fehler 1318984](https://bugzil.la/1318984) für weitere Details.)

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 55                  | Nein                     |
| Developer Edition | 55                  | Nein                     |
| Beta              | 55                  | Nein                     |
| Release           | 55                  | Nein                     |

- `dom.payments.request.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.
- `dom.payments.request.supportedRegions`
  - : Ländercodes als kommagetrennte Zulassungsliste von Regionen (z. B. `US,CA`).

### WebShare API

Die [Web Share API](/de/docs/Web/API/Web_Share_API) ermöglicht das Teilen von Dateien, URLs und anderen Daten von einer Website aus. Diese Funktion ist auf Android in allen Builds aktiviert, aber hinter einer Präferenz auf dem Desktop (sofern unten nicht anders angegeben).

| Release-Kanal     | Version geändert | Standardmäßig aktiviert?                    |
| ----------------- | ---------------- | ------------------------------------------- |
| Nightly           | 71               | Nein (Standard). Ja (Windows ab Version 92) |
| Developer Edition | 71               | Nein                                        |
| Beta              | 71               | Nein                                        |
| Release           | 71               | Nein (Desktop). Ja (Android).               |

- `dom.webshare.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Screen Orientation API

#### ScreenOrientation.lock()

Die Methode [`ScreenOrientation.lock()`](/de/docs/Web/API/ScreenOrientation/lock) ermöglicht es, ein Gerät auf eine bestimmte Ausrichtung zu sperren, falls das Gerät dies unterstützt und die Browseranforderungen zum Sperren erfüllt sind. Normalerweise ist das Sperren der Ausrichtung nur auf mobilen Geräten erlaubt, wenn das Dokument im Vollbild angezeigt wird. Siehe [Firefox Fehler 1697647](https://bugzil.la/1697647) für weitere Details.

| Release-Kanal     | Version geändert | Standardmäßig aktiviert? |
| ----------------- | ---------------- | ------------------------ |
| Nightly           | 111              | Ja                       |
| Developer Edition | 97               | Nein                     |
| Beta              | 97               | Nein                     |
| Release           | 97               | Nein                     |

- `dom.screenorientation.allow-lock`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Notifications API

Benachrichtigungen haben die [`requireInteraction`](/de/docs/Web/API/Notification/requireInteraction) Eigenschaft standardmäßig auf Windows-Systemen und in der Nightly-Version auf `true` gesetzt ([Firefox Fehler 1794475](https://bugzil.la/1794475)).

| Release-Kanal     | Version geändert | Standardmäßig aktiviert? |
| ----------------- | ---------------- | ------------------------ |
| Nightly           | 117              | Ja                       |
| Developer Edition | 117              | Nein                     |
| Beta              | 117              | Nein                     |
| Release           | 117              | Nur Windows              |

- `dom.webnotifications.requireinteraction.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

## Sicherheit und Datenschutz

### Unsichere Seitenkennzeichnung

Die beiden `security.insecure_connection_text_*` Präferenzen fügen im Adressfeld neben dem traditionellen Schlosssymbol ein "Nicht sicher"-Textlabel hinzu, wenn eine Seite unsicher geladen wird (das heißt, mit {{Glossary("HTTP", "HTTP")}} statt {{Glossary("HTTPS", "HTTPS")}}). Die Präferenz `browser.urlbar.trimHttps` kürzt das `https:` Präfix von Adressfeld-URLs. Siehe [Firefox Fehler 1853418](https://bugzil.la/1853418) für weitere Details.

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
  - : Setzen Sie auf `true`, um das `https:` Präfix von Adressfeld-URLs zu kürzen.

### Berechtigungspolitik / Feature-Policy

[Berechtigungspolitik](/de/docs/Web/HTTP/Guides/Permissions_Policy) erlaubt es Webentwicklern, bestimmte Features und APIs im Browser selektiv zu aktivieren, zu deaktivieren oder deren Verhalten zu modifizieren. Es ist ähnlich wie CSP, steuert aber Features anstelle von Sicherheitsverhalten. In Firefox wird dies als **Feature Policy** implementiert, der Name, der in einer früheren Version der Spezifikation verwendet wurde.

Beachten Sie, dass unterstützte Richtlinien über das [`allow`](/de/docs/Web/HTML/Reference/Elements/iframe#allow) Attribut auf `<iframe>` Elementen auch dann gesetzt werden können, wenn die Benutzerpräferenz nicht gesetzt ist.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 65                  | Nein                     |
| Developer Edition | 65                  | Nein                     |
| Beta              | 65                  | Nein                     |
| Release           | 65                  | Nein                     |

- `dom.security.featurePolicy.header.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Datenschutzfreundliche Attributions-API (PPA)

Die [PPA API](https://support.mozilla.org/en-US/kb/privacy-preserving-attribution) bietet eine Alternative zum Benutzer-Tracking für die Werbeattribution, indem das neue `navigator.privateAttribution` Objekt mit `saveImpression()` und `measureConversion()` Methoden verwendet wird. Lesen Sie mehr über PPA [im ursprünglichen Erklärungsdokument](https://github.com/mozilla/explainers/tree/main/archive/ppa-experiment) und der [vorgeschlagenen Spezifikation](https://w3c.github.io/ppa/). Dieses Experiment kann für Websites über [Origin Trial](https://wiki.mozilla.org/Origin_Trials) oder im Browser durch Setzen der Präferenz auf `1` aktiviert werden. ([Firefox Fehler 1900929](https://bugzil.la/1900929)).

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

Die {{httpheader("Integrity-Policy")}} und {{httpheader("Integrity-Policy-Report-Only")}} HTTP-Header werden nun für Stilressourcen unterstützt. Sie ermöglichen es Websites, entweder [Subresource-Integritätsgarantien](/de/docs/Web/Security/Defenses/Subresource_Integrity) für Styles durchzusetzen oder nur Verstöße gegen die Richtlinie zu melden. Beachten Sie, dass Firefox Meldeendpunkte ignoriert und Verstöße in der Entwicklerkonsole protokolliert. Wenn `Integrity-Policy` verwendet wird, blockiert der Browser das Laden von Styles, die in einem {{HTMLElement("link")}} Element mit [`rel="stylesheet"`](/de/docs/Web/HTML/Reference/Attributes/rel#stylesheet) referenziert werden, die entweder das [`integrity`](/de/docs/Web/HTML/Reference/Elements/script#integrity) Attribut fehlen oder einen Integritätshash haben, der nicht mit der Ressource auf dem Server übereinstimmt. ([Firefox Fehler 1976656](https://bugzil.la/1976656)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 142                 | Nein                     |
| Developer Edition | 142                 | Nein                     |
| Beta              | 142                 | Nein                     |
| Release           | 142                 | Nein                     |

- `security.integrity_policy.stylesheet.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Speicherkontroll-Header

Die {{httpheader("Sec-Fetch-Storage-Access")}} und {{httpheader("Activate-Storage-Access")}} HTTP-Header werden nun unterstützt, wodurch ein effizienterer Arbeitsablauf der [Storage Access API](/de/docs/Web/API/Storage_Access_API) ermöglicht wird. ([Firefox Fehler 1991688](https://bugzil.la/1991688)).

Im ausschließlich JavaScript-basierten Workflow muss eine Drittanbieter-Ressource angefordert und geladen werden, um eine Speicherzugriffserlaubnis für einen bestimmten Kontext (wie eine neue Browser-Registerkarte) zu aktivieren. Dies ist erforderlich, selbst wenn die Erlaubnis bereits erteilt wurde. Die Speicherzugriffsheader ermöglichen es dem Browser, den Berechtigungsstatus für den bestimmten Kontext anzukündigen, sodass der Server die Aktivierung einer bereits erteilten Erlaubnis anfordern kann. Dies vermeidet den Overhead des unnötigen Abrufs und Ladens der Ressource.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 145                 | Ja                       |
| Developer Edition | 145                 | Nein                     |
| Beta              | 145                 | Nein                     |
| Release           | 145                 | Nein                     |

- `dom.storage_access.headers.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Idempotency-Key

Der {{httpheader("Idempotency-Key")}} HTTP-Anforderungsheader kann von Website-Client-Code verwendet werden, um {{HTTPMethod("POST")}} oder {{HTTPMethod("PATCH")}}-Anforderungen {{Glossary("idempotent", "idempotent")}} zu machen, wenn er mit einem Server verwendet wird, der dies unterstützt. Die Spezifikation gibt an, dass der Server dokumentieren und ankündigen sollte, welche Endpunkte diesen Header erfordern, das Format des Schlüssels und die erwarteten Fehlerantworten.

Firefox fügt den Header automatisch mit einem eindeutigen Schlüssel für jede neue `POST`-Anforderung hinzu, wenn er nicht bereits vom Seiten-Client-Seiten-Code hinzugefügt wurde. Dies vereinfacht den erforderlichen Client-Seiten-Code, um mit Servern zu arbeiten, die die Funktion unterstützen.

([Firefox Fehler 1830022](https://bugzil.la/1830022)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 135                 | Nein                     |
| Developer Edition | 135                 | Nein                     |
| Beta              | 135                 | Nein                     |
| Release           | 135                 | Nein                     |

- `network.http.idempotencyKey.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Accept-Header mit MIME-Typ `image/jxl`

Der HTTP-Header [`Accept`](/de/docs/Web/HTTP/Reference/Headers/Accept) in [Standardanforderungen und Bildanforderungen](/de/docs/Web/HTTP/Guides/Content_negotiation/List_of_default_Accept_values) kann über eine Präferenz konfiguriert werden, um die Unterstützung für den MIME-Typ `image/jxl` anzuzeigen.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 128                 | Nein                     |
| Developer Edition | 128                 | Nein                     |
| Beta              | 128                 | Nein                     |
| Release           | 128                 | Nein                     |

- `image.jxl.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### SameSite=Lax standardmäßig

[`SameSite`-Cookies](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) haben einen Standardwert von `Lax`. Bei dieser Einstellung werden Cookies nur gesendet, wenn ein Benutzer zur Ursprungsseite navigiert, nicht für subdomänenübergreifende Anfragen, um Bilder oder Frames auf einer Drittanbieter-Website zu laden und so weiter. Für weitere Details siehe [Firefox Fehler 1617609](https://bugzil.la/1617609).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 69                  | Nein                     |
| Developer Edition | 69                  | Nein                     |
| Beta              | 69                  | Nein                     |
| Release           | 69                  | Nein                     |

- `network.cookie.sameSite.laxByDefault`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Access-Control-Allow-Headers-Wildcard umfasst nicht Authorization

Der [`Access-Control-Allow-Headers`](/de/docs/Web/HTTP/Reference/Headers/Access-Control-Allow-Headers) ist ein Antwortheader auf eine {{Glossary("Preflight_request", "CORS-Vorab-Anfrage")}}, der anzeigt, welche Anforderungsheader in die endgültige Anforderung aufgenommen werden dürfen. Die Antwortdirektive kann ein Wildcard (`*`) enthalten, das anzeigt, dass die endgültige Anforderung alle Header außer dem `Authorization`-Header enthalten darf.

Standardmäßig fügt Firefox den `Authorization`-Header in die endgültige Anforderung ein, nachdem er eine Antwort mit `Access-Control-Allow-Headers: *` erhalten hat. Setzen Sie die Präferenz auf `false`, um sicherzustellen, dass Firefox den `Authorization`-Header nicht einfügt. Für weitere Details siehe [Firefox Fehler 1687364](https://bugzil.la/1687364).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 115                 | Ja                       |
| Developer Edition | 115                 | Ja                       |
| Beta              | 115                 | Ja                       |
| Release           | 115                 | Ja                       |

- `network.cors_preflight.authorization_covered_by_wildcard`
  - : Setzen Sie auf `true`, um zu aktivieren.

## Entwicklertools

Die Entwickler-Tools von Mozilla entwickeln sich ständig weiter. Wir experimentieren mit neuen Ideen, fügen neue Funktionen hinzu und testen sie auf den Kanälen Nightly und Developer Edition, bevor sie zur Beta und Veröffentlichung gehen. Die unten stehenden Funktionen sind die aktuelle Ausgabe experimenteller Entwickler-Tool-Funktionen.

**Keine experimentellen Funktionen in diesem Release-Zyklus.**

## Siehe auch

- [Firefox Entwickler-Veröffentlichungshinweise](/de/docs/Mozilla/Firefox/Releases)
- [Firefox Nightly](https://www.firefox.com/en-US/channel/desktop/)
- [Firefox Developer Edition](https://www.firefox.com/en-US/channel/desktop/developer/)
