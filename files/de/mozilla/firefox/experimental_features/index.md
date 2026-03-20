---
title: Experimentelle Funktionen in Firefox
short-title: Experimentelle Funktionen
slug: Mozilla/Firefox/Experimental_features
l10n:
  sourceCommit: f80120af6f346a8628ab220ce20f0eeb55535d48
---

Diese Seite listet experimentelle und teilweise implementierte Funktionen von Firefox auf, einschließlich sich entwickelnder oder vorgeschlagener Webplattformstandards.
Jeder Eintrag unten enthält Informationen über die Builds, in denen eine Funktion enthalten ist (Nightly, Beta, Developer Edition oder Release), ob sie standardmäßig aktiviert ist oder nicht, und den Namen der **Einstellung**, die Sie verwenden können, um die Funktion zu aktivieren oder zu konfigurieren.
Die Beschreibung jeder Funktion enthält auch Links zu relevanten [Bugzilla-Bugs](https://bugzilla.mozilla.org), die die Funktion implementieren oder aktivieren.
Diese Informationen ermöglichen es Ihnen, experimentelle Funktionen auszuprobieren und Feedback zu geben, bevor sie offiziell veröffentlicht werden.

In Bezug auf den Lebenszyklus erscheinen neue Funktionen zunächst in [Nightly](https://www.firefox.com/en-US/channel/desktop/#nightly), wo sie häufig standardmäßig für frühes Feedback und Tests aktiviert sind.
Wenn keine größeren Probleme gefunden werden, sind sie in [Beta](https://www.firefox.com/en-US/channel/desktop/#beta) und [Developer Edition](https://www.firefox.com/en-US/channel/desktop/developer/) Vorab-Builds enthalten. Schließlich werden genehmigte Funktionen im stabilen [Release](https://www.firefox.com/en-US/) Kanal ausgeliefert.
Wenn eine Funktion in einer Veröffentlichung standardmäßig aktiviert ist, wird sie nicht mehr als experimentell betrachtet und von dieser Seite entfernt.

Um diese Funktionen zu aktivieren, geben Sie `about:config` in die Firefox-Adressleiste ein, suchen Sie die zugehörige **Einstellung** und ändern Sie deren Wert, der normalerweise zwischen `true` und `false` umschaltet.
Je nach Funktion müssen Sie möglicherweise den Browser neu starten, damit die Änderung wirksam wird.
Weitere Informationen zum Verwalten von Einstellungen in Firefox finden Sie im [Firefox-Konfigurationseditor](https://support.mozilla.org/en-US/kb/about-config-editor-firefox) Support-Artikel.

## HTML

### Layout für input type="search"

Das Layout für `input type="search"` wurde aktualisiert. Dies führt dazu, dass ein Suchfeld ein Löschsymbol hat, sobald jemand mit der Eingabe beginnt, um andere Browser-Implementierungen zu entsprechen. (Weitere Details finden Sie im [Firefox-Bug 558594](https://bugzil.la/558594)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 81                  | Nein                     |
| Developer Edition | 81                  | Nein                     |
| Beta              | 81                  | Nein                     |
| Release           | 81                  | Nein                     |

- `layout.forms.input-type-search.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Passwortanzeige umschalten

HTML-Passworteingabeelemente ([`<input type="password">`](/de/docs/Web/HTML/Reference/Elements/input/password)) enthalten ein "Augen"-Symbol, das umgeschaltet werden kann, um den Passworttext anzuzeigen oder zu verbergen ([Firefox-Bug 502258](https://bugzil.la/502258)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 96                  | Nein                     |
| Developer Edition | 96                  | Nein                     |
| Beta              | 96                  | Nein                     |
| Release           | 96                  | Nein                     |

- `layout.forms.reveal-password-button.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Zeitwähler in `datetime-local` und `time` Eingabefeldern

Die HTML-Elemente [`<input type="datetime-local">`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local) und [`<input type="time">`](/de/docs/Web/HTML/Reference/Elements/input/time) unterstützen einen Zeitwähler. ([Firefox-Bug 1726108](https://bugzil.la/1726108)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 144                 | Nein                     |
| Developer Edition | 144                 | Nein                     |
| Beta              | 144                 | Nein                     |
| Release           | 144                 | Nein                     |

- `dom.forms.datetime.timepicker`
  - : Setzen Sie auf `true`, um zu aktivieren.

### `alpha` und `colorspace` Attribute in `color` Eingabefeldern

Das HTML-Element [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color) unterstützt die Attribute [`alpha`](/de/docs/Web/HTML/Reference/Elements/input/color#alpha) und [`colorspace`](/de/docs/Web/HTML/Reference/Elements/input/color#colorspace). ([Firefox-Bug 1919718](https://bugzil.la/1919718)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 149                 | Ja                       |
| Developer Edition | -                   | -                        |
| Beta              | -                   | -                        |
| Release           | -                   | -                        |

- `dom.forms.html_color_picker.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

## CSS

### Hex-Boxen zur Anzeige streunender Steuerzeichen

Diese Funktion stellt Steuerzeichen (Unicode-Kategorie Cc), außer _Tabulator_ (`U+0009`), _Zeilenumbruch_ (`U+000A`), _Form Feed_ (`U+000C`) und _Wagenrücklauf_ (`U+000D`) als Hex-Box dar, wenn sie nicht erwartet werden. (Weitere Details finden Sie im [Firefox-Bug 1099557](https://bugzil.la/1099557)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 43                  | Ja                       |
| Developer Edition | 43                  | Nein                     |
| Beta              | 43                  | Nein                     |
| Release           | 43                  | Nein                     |

- `layout.css.control-characters.visible`
  - : Setzen Sie auf `true`, um zu aktivieren.

### `initial-letter` Eigenschaft

Die {{cssxref("initial-letter")}} CSS-Eigenschaft ist Teil der [CSS Inline Layout](https://drafts.csswg.org/css-inline/) Spezifikation und erlaubt es Ihnen, zu spezifizieren, wie fallende, hochgehobene und versenkte Initialbuchstaben angezeigt werden. (Weitere Details finden Sie im [Firefox-Bug 1223880](https://bugzil.la/1223880)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 50                  | Nein                     |
| Developer Edition | 50                  | Nein                     |
| Beta              | 50                  | Nein                     |
| Release           | 50                  | Nein                     |

- `layout.css.initial-letter.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### `fit-content()` Funktion

Die {{cssxref("fit-content()")}} Funktion, wie sie auf {{cssxref("width")}} und andere Größeigenschaften angewendet wird. Diese Funktion ist bereits gut unterstützt für CSS Grid Layout Spurgrößen. (Weitere Details finden Sie im [Firefox-Bug 1312588](https://bugzil.la/1312588)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 91                  | Nein                     |
| Developer Edition | 91                  | Nein                     |
| Beta              | 91                  | Nein                     |
| Release           | 91                  | Nein                     |

- `layout.css.fit-content-function.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Scrollgetriebene Animationen

Früher als "scroll-geknüpfte Animationen" bezeichnet, hängt eine [scrollgetriebene Animation](/de/docs/Web/CSS/Guides/Scroll-driven_animations) vom Scrollposition eines Rollbalkens anstelle von Zeit oder einer anderen Dimension ab.
Die {{cssxref('scroll-timeline-name')}} und {{cssxref('scroll-timeline-axis')}} Eigenschaften (und die {{cssxref('scroll-timeline')}} Kurzform) erlauben es Ihnen, festzulegen, dass ein bestimmter Rollbalken in einem bestimmten benannten Container als Quelle für eine scrollgetriebene Animation verwendet werden kann.
Die Scrolltimeline kann dann mit einer [Animation](/de/docs/Web/CSS/Guides/Animations) verbunden werden, indem die {{cssxref('animation-timeline')}} Eigenschaft auf den Namen gesetzt wird, der mit `scroll-timeline-name` definiert wurde.

Bei der Verwendung der {{cssxref('scroll-timeline')}} Kurzform müssen die Eigenschaftswerte in der Reihenfolge {{cssxref('scroll-timeline-name')}} gefolgt von {{cssxref('scroll-timeline-axis')}} sein.
Die Lang- und Kurzform-Eigenschaften sind beide hinter der Einstellung verfügbar.
Alternativ können Sie die {{cssxref("animation-timeline/scroll")}} funktionale Notation mit {{cssxref('animation-timeline')}} verwenden, um anzugeben, dass eine Rollbalkenachse in einem Vorfahrenelement für die Timeline verwendet wird.

Weitere Informationen finden Sie in [Firefox-Bug 1807685](https://bugzil.la/1807685), [Firefox-Bug 1804573](https://bugzil.la/1804573), [Firefox-Bug 1809005](https://bugzil.la/1809005), [Firefox-Bug 1676791](https://bugzil.la/1676791), [Firefox-Bug 1754897](https://bugzil.la/1754897), [Firefox-Bug 1817303](https://bugzil.la/1817303), und [Firefox-Bug 1737918](https://bugzil.la/1737918).

Die {{cssxref('timeline-scope')}}, {{cssxref('animation-range-start')}} und {{cssxref('animation-range-end')}} Eigenschaften (und die {{cssxref('animation-range')}} Kurzform) werden noch nicht unterstützt. Für weitere Informationen siehe [Firefox-Bug 1676779](https://bugzil.la/1676779).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 136                 | Ja                       |
| Developer Edition | 110                 | Nein                     |
| Beta              | 110                 | Nein                     |
| Release           | 110                 | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### `prefers-reduced-transparency` Media-Feature

Das CSS {{cssxref("@media/prefers-reduced-transparency")}} Media-Feature ermöglicht es Ihnen zu erkennen, ob ein Benutzer die Einstellung aktiviert hat, um die Menge an transparenten oder durchscheinenden Schichteffekten auf ihrem Gerät zu minimieren.
Weitere Details finden Sie im [Firefox-Bug 1736914](https://bugzil.la/1736914).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 113                 | Nein                     |
| Developer Edition | 113                 | Nein                     |
| Beta              | 113                 | Nein                     |
| Release           | 113                 | Nein                     |

- `layout.css.prefers-reduced-transparency.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### `inverted-colors` Media-Feature

Das CSS {{cssxref("@media/inverted-colors")}} Media-Feature ermöglicht es Ihnen zu erkennen, ob ein Benutzeragent oder das zugrunde liegende Betriebssystem Farben invertiert.
Weitere Details finden Sie im [Firefox-Bug 1794628](https://bugzil.la/1794628).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 114                 | Nein                     |
| Developer Edition | 114                 | Nein                     |
| Beta              | 114                 | Nein                     |
| Release           | 114                 | Nein                     |

- `layout.css.inverted-colors.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Benannte Ansicht Fortschritt Timelines Eigenschaft

Die CSS {{cssxref("view-timeline-name")}} Eigenschaft erlaubt es Ihnen, einem bestimmten Element einen Namen zu geben, der angibt, dass das Vorfahren-Scroller-Element die Quelle einer Ansicht Fortschritt Timeline ist.
Der Name kann dann dem `animation-timeline` zugewiesen werden, das das zugeordnete Element animiert, während es durch den sichtbaren Bereich seines Vorfahren-Scrollers bewegt wird.
Weitere Details finden Sie im [Firefox-Bug 1737920](https://bugzil.la/1737920).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 114                 | Nein                     |
| Developer Edition | 114                 | Nein                     |
| Beta              | 114                 | Nein                     |
| Release           | 114                 | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Anonyme Ansicht Fortschritt Timelines Funktion

Die CSS {{cssxref("animation-timeline/view")}} Funktion erlaubt es Ihnen zu spezifizieren, dass die `animation-timeline` für ein Element eine Ansicht Fortschritt Timeline ist, die das Element animiert, während es durch den sichtbaren Bereich seines Vorfahren-Scrollers bewegt wird.
Die Funktion definiert die Achse des Elternelements, das die Timeline liefert, sowie den Versatz innerhalb des sichtbaren Bereichs, an dem die Animation startet und beginnt.
Weitere Details finden Sie im [Firefox-Bug 1808410](https://bugzil.la/1808410).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 114                 | Nein                     |
| Developer Edition | 114                 | Nein                     |
| Beta              | 114                 | Nein                     |
| Release           | 114                 | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Vendor-präfixierte Transformations-Eigenschaften

Die `-moz-` präfixierten [CSS transformation](/de/docs/Web/CSS/Guides/Transforms) Eigenschaften können deaktiviert werden, indem die `layout.css.prefixes.transforms` Einstellung auf `false` gesetzt wird. Ziel ist es, diese zu deaktivieren, sobald die standardmäßigen CSS Zoom-Eigenschaften gut unterstützt werden. ([Firefox-Bug 1886134](https://bugzil.la/1886134), [Firefox-Bug 1855763](https://bugzil.la/1855763)).

Insbesondere deaktiviert diese Einstellung die folgenden präfixierten Eigenschaften:

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

#### Relative Kontrollpunkte in CSS `shape()` Kurvenbefehlen

Sie können [`<relative-control-point>`](/de/docs/Web/CSS/Reference/Values/basic-shape/shape#relative-control-point) Werte verwenden, wenn Sie einen [`<curve-command>`](/de/docs/Web/CSS/Reference/Values/basic-shape/shape#curve-command) oder [`<smooth-command>`](/de/docs/Web/CSS/Reference/Values/basic-shape/shape#smooth-command) in einer CSS `shape()` Funktion angeben. Diese Werte ermöglichen es Ihnen, Kontrollpunkte zu spezifizieren, die relativ zum Start- oder Endpunkt des aktuellen Befehls oder relativ zum Ursprung (oben links) des Containers, in dem die Form gezeichnet wird, positioniert sind.
([Firefox-Bug 1921501](https://bugzil.la/1921501)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 146                 | Ja                       |
| Developer Edition | 146                 | Nein                     |
| Beta              | 146                 | Nein                     |
| Release           | 146                 | Nein                     |

- `layout.css.basic-shape-shape.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Symmetrisches `letter-spacing`

Die CSS {{cssxref("letter-spacing")}} Eigenschaft teilt den angegebenen Buchstabenabstand nun gleichmäßig auf beide Seiten jedes Zeichens auf. Dies unterscheidet sich vom derzeitigen Verhalten, bei dem der Abstand hauptsächlich auf einer Seite hinzugefügt wird. Dieser Ansatz kann den Textabstand verbessern, insbesondere bei gemischter Richtungstext.
([Firefox-Bug 1891446](https://bugzil.la/1891446)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 128                 | Ja                       |
| Developer Edition | 128                 | Ja                       |
| Beta              | 127                 | Nein                     |
| Release           | 127                 | Nein                     |

- `layout.css.letter-spacing.model`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Unterstützung von `calc()` Farbkanälen in relativen Farben

Die CSS {{cssxref("calc()")}} Funktion kann jetzt Farbkanäle in [relativen Farben](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors#using_math_functions) analysieren, sodass Sie Änderungen an Farben in verschiedenen Farbräumen oder bei der Verwendung unterschiedlicher funktionaler Notationen korrekt berechnen können [Firefox-Bug 1889561](https://bugzil.la/1889561).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 127                 | Ja                       |
| Developer Edition | 127                 | Nein                     |
| Beta              | 127                 | Nein                     |
| Release           | 127                 | Nein                     |

- `layout.css.relative-color-syntax.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Nach Element-gestützten Pseudo-Elementen Pseudo-Elemente zulassen

Die Arbeit hat begonnen, um [Pseudo-Elemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) wie {{cssxref("::first-letter")}} und {{cssxref("::before")}} so zuzulassen, dass sie an [Element-gestützte Pseudo-Elemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements#element-backed_pseudo-elements) wie {{cssxref("::details-content")}} und {{cssxref("::file-selector-button")}} angehängt werden können.

Dies ermöglicht es Benutzern beispielsweise, den ersten Buchstaben des {{htmlelement("details")}} Elements zu gestalten, indem der CSS-Selektor `::details-content::first-letter` verwendet wird, oder Inhalte vor einem {{HTMLElement("input")}} von [`type="file"`](/de/docs/Web/HTML/Reference/Elements/input/file) mit dem CSS-Selektor `::file-selector-button::before` hinzuzufügen.

Derzeit kann nur die Unterstützung für `::details-content::first-letter` mit `@supports(::details-content::first-letter)` analysiert werden.
Das `::file-selector-button` Pseudo-Element ist noch nicht als Element-gestütztes Pseudo-Element gekennzeichnet, sodass es keine Möglichkeit gibt, dies zu testen.
([Firefox-Bug 1953557](https://bugzil.la/1953557), [Firefox-Bug 1941406](https://bugzil.la/1941406)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 138                 | Nein                     |
| Developer Edition | 138                 | Nein                     |
| Beta              | 138                 | Nein                     |
| Release           | 138                 | Nein                     |

### `:heading` und `:heading()` Pseudo-Klassen

Die {{cssxref(":heading")}} Pseudo-Klasse erlaubt es Ihnen, alle [Überschriftselemente](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) (`<h1>`-`<h6>`) auf einmal zu gestalten, anstatt sie einzeln zu adressieren. Die {{cssxref(":heading()")}} funktionale Pseudo-Klasse erlaubt es Ihnen, Überschriftselemente zu gestalten, die mit einer durch Kommas getrennten Liste von Ganzzahlen übereinstimmen, die die Überschriftsebenen angeben. ([Firefox-Bug 1974386](https://bugzil.la/1974386) & [Firefox-Bug 1984310](https://bugzil.la/1984310)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 142                 | Nein                     |
| Developer Edition | 142                 | Nein                     |
| Beta              | 142                 | Nein                     |
| Release           | 142                 | Nein                     |

- `layout.css.heading-selector.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### `text-decoration-trim`

Die CSS-Eigenschaft `text-decoration-trim` erlaubt es Ihnen, {{cssxref("text-decoration")}} Start- und Endversätze zu spezifizieren, um Textdekorationen entsprechend zu verkürzen, zu verlängern oder zu verschieben ([Firefox-Bug 1979915](https://bugzil.la/1979915)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 145                 | Nein                     |
| Developer Edition | 145                 | Nein                     |
| Beta              | 145                 | Nein                     |
| Release           | 145                 | Nein                     |

- `layout.css.text-decoration-trim.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### `@custom-media` At-Regel

Die {{cssxref("@custom-media")}} CSS-At-Regel definiert Aliase für lange oder komplexe Media-Abfragen. Anstatt die gleiche hartcodierte `<media-query-list>` in mehreren `@media` At-Regeln zu wiederholen, kann sie einmal in einer `@custom-media` At-Regel definiert und im Stylesheet überall bei Bedarf referenziert werden. ([Firefox-Bug 1744292](https://bugzil.la/1744292)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 146                 | Nein                     |
| Developer Edition | 146                 | Nein                     |
| Beta              | 146                 | Nein                     |
| Release           | 146                 | Nein                     |

- `layout.css.custom-media.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### `<attr-type>` Werte in `attr()` CSS-Funktion

Die {{cssxref("attr")}} CSS-Funktion unterstützt jetzt [`<attr-type>`](/de/docs/Web/CSS/Reference/Values/attr#attr-type) Werte. Dies ermöglicht es Ihnen, wie ein Attributwert in ein CSS-Wert geparst wird, anzugeben, und diese Werte direkt aus [`data-*`](/de/docs/Web/HTML/How_to/Use_data_attributes) zu übernehmen. ([Firefox-Bug 1986631](https://bugzil.la/1986631), [Firefox-Bug 1998245](https://bugzil.la/1998245))

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 149                 | Nein                     |
| Developer Edition | 149                 | Nein                     |
| Beta              | 149                 | Nein                     |
| Release           | 149                 | Nein                     |

- `layout.css.attr.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### `color-mix()` akzeptiert mehrere Farbargumente

Die [`color-mix()`](/de/docs/Web/CSS/Reference/Values/color_value/color-mix) CSS-Funktion unterstützt nun mehrere [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value) Werte, anstatt nur zwei. Dies ermöglicht es Ihnen, viele Farben zu mischen und die Prozentsätze jeder einzelnen festzulegen. ([Firefox-Bug 2007772](https://bugzil.la/2007772)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 150                 | Ja                       |
| Developer Edition | 149                 | Nein                     |
| Beta              | 149                 | Nein                     |
| Release           | 149                 | Nein                     |

- `layout.css.color-mix-multi-color.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Medienbasierte Pseudo-Klassen

Die medienbasierten Pseudo-Klassen {{cssxref(":buffering")}}, {{cssxref(":muted")}}, {{cssxref(":paused")}}, {{cssxref(":playing")}}, {{cssxref(":seeking")}}, {{cssxref(":stalled")}}, und {{cssxref(":volume-locked")}} erlauben es Ihnen, {{htmlelement("audio")}} und {{htmlelement("video")}} Elemente basierend auf ihrem aktuellen Status zu gestalten, wie z.B. beim Abspielen oder angehalten. ([Firefox-Bug 1707584](https://bugzil.la/1707584), [Firefox-Bug 2014512](https://bugzil.la/2014512)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 150                 | Ja                       |
| Developer Edition | 149                 | Nein                     |
| Beta              | 149                 | Nein                     |
| Release           | 149                 | Nein                     |

- `dom.media.pseudo-classes.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### `@container style()` Abfragen

Die [@container](/de/docs/Web/CSS/Reference/At-rules/@container) CSS-At-Regel unterstützt [`style()`](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries) Abfragen. Dies ermöglicht Ihnen zu überprüfen, ob ein Container eine gültige CSS-Deklaration, eine CSS-Eigenschaft oder eine benutzerdefinierte Eigenschaft hat, und entsprechend Stile auf seine Kinder anzuwenden. ([Firefox-Bug 2014404](https://bugzil.la/2014404)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 149                 | Ja                       |
| Developer Edition | 149                 | Nein                     |
| Beta              | 149                 | Nein                     |
| Release           | 149                 | Nein                     |

- `layout.css.style-queries.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

## SVG

**Keine experimentellen Funktionen in diesem Veröffentlichungszyklus.**

## JavaScript

**Keine experimentellen Funktionen in diesem Veröffentlichungszyklus.**

## APIs

### CSS Typed Object Model Level 1

Die Implementierungsarbeiten beim [CSS Typed OM Level 1](https://drafts.css-houdini.org/css-typed-om/) haben begonnen.
Zum Beispiel wird die [`to()`](/de/docs/Web/API/CSSNumericValue/to) Methode der [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) Schnittstelle für das Umwandeln eines CSS-numerischen Wertes von einer Einheit in eine andere unterstützt.
([Firefox-Bug 1278697](https://bugzil.la/1278697)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 149                 | Nein                     |
| Developer Edition | 149                 | Nein                     |
| Beta              | 149                 | Nein                     |
| Release           | 149                 | Nein                     |

- `layout.css.typed-om.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Notification-Aktionen und maxActions Eigenschaften

Die [`actions`](/de/docs/Web/API/Notification/actions) schreibgeschützte Eigenschaft und die [`maxActions`](/de/docs/Web/API/Notification/maxActions_static) statische schreibgeschützte Eigenschaft der [`Notification`](/de/docs/Web/API/Notification) Schnittstelle werden im Desktop Nightly unterstützt.
Diese enthalten die Benachrichtigungsaktionen, die mit [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification) gesetzt wurden, und die maximale Anzahl von Aktionen, die gesetzt werden können.
([Firefox-Bug 1225110](https://bugzil.la/1225110), [Firefox-Bug 1963263](https://bugzil.la/1963263)).

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

Wenn diese Einstellung aktiviert ist, werden alle WebGL-Erweiterungen, die sich derzeit im "Entwurfs"-Status befinden und getestet werden, für die Verwendung aktiviert. Derzeit gibt es keine WebGL-Erweiterungen, die von Firefox getestet werden.

#### WebGPU API

Die [WebGPU API](/de/docs/Web/API/WebGPU_API) bietet Low-Level-Unterstützung für die Durchführung von Berechnungen und Grafikwiedergabe mit der [Graphics Processing Unit](https://en.wikipedia.org/wiki/Graphics_Processing_Unit) (GPU) des Geräts oder Computers des Benutzers.
Ab Version 142 ist dies unter Windows in allen Kontexten außer Service-Arbeitern aktiviert.
Ab Version 147 ist dies unter macOS auf Apple Silicon in allen Browserkontexten außer Service-Arbeitern aktiviert.
Für andere Plattformen wie Linux und macOS auf Intel Silicon ist es in Nightly aktiviert.
Siehe [Firefox-Bug 1602129](https://bugzil.la/1602129) für unseren Fortschritt bei dieser API.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert?                                                          |
| ----------------- | ------------------- | --------------------------------------------------------------------------------- |
| Nightly           | 141                 | Ja                                                                                |
| Developer Edition | 141                 | Nein (Ja unter Windows und macOS auf Apple-Silicon, ausgenommen Service-Arbeiter) |
| Beta              | 141                 | Nein (Ja unter Windows und macOS auf Apple-Silicon, ausgenommen Service-Arbeiter) |
| Release           | 141                 | Nein (Ja unter Windows und macOS auf Apple-Silicon, ausgenommen Service-Arbeiter) |

- `dom.webgpu.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren (aktiviert in Nightly und auf Windows in allen Releases).
- `dom.webgpu.service-workers.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren (aktiviert in Nightly).

### Reporting API Unterstützung für CSP-Verletzungen

Die [Reporting API](/de/docs/Web/API/Reporting_API) unterstützt jetzt das Melden von [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) Verletzungen.

[`Report`](/de/docs/Web/API/Report) Instanzen, die von der [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) Schnittstelle zurückgegeben werden, können jetzt einen `type` Wert von `"csp-violation"` haben und eine `body` Eigenschaft, die eine Instanz der [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody) Schnittstelle enthält.
Dies ermöglicht es, CSP-Verletzungen innerhalb einer Webseite zu melden.

CSP-Verletzungsberichte können auch an entfernte Endpunkte gesendet werden, die im CSP {{CSP("report-to")}} Direktive namentlich angegeben sind — Endpunktnamen und entsprechende URLs müssen zuerst in den {{httpheader('Reporting-Endpoints')}} oder {{httpheader('Report-To')}} HTTP-Antwortheadern definiert werden.
Der Bericht ist eine Serialisierung des oben beschriebenen [`Report`](/de/docs/Web/API/Report) Objekts, mit einer `body` Eigenschaft, die eine Serialisierung einer [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody) Instanz ist.

Dieser Verstoßbericht ersetzt einen ähnlichen CSP-spezifischen Mechanismus zum Senden von Verletzungsberichten, der das CSP {{CSP("report-uri")}} Direktive verwendet, um die URL des Berichtsendpunkts festzulegen, und ein [CSP-spezifisches JSON-Verletzungsbericht-Format](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/report-uri#violation_report_syntax).
([Firefox-Bug 1391243](https://bugzil.la/1391243)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 130                 | Nein                     |
| Developer Edition | 130                 | Nein                     |
| Beta              | 130                 | Nein                     |
| Release           | 130                 | Nein                     |

- `dom.reporting.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### WebRTC und Medien

Die folgenden experimentellen Funktionen umfassen diejenigen, die in Medien-APIs wie der [WebRTC API](/de/docs/Web/API/WebRTC_API), der [Web Audio API](/de/docs/Web/API/Web_Audio_API), der [Media Source Extensions API](/de/docs/Web/API/Media_Source_Extensions_API), der [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API) und der [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) zu finden sind.

#### HTMLMediaElement Eigenschaften: audioTracks und videoTracks

Wenn diese Funktion aktiviert ist, werden die Eigenschaften [`HTMLMediaElement.audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks) und [`HTMLMediaElement.videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks) zu allen HTML-Medienelementen hinzugefügt. Da Firefox jedoch derzeit keine Unterstützung für mehrere Audio- und Videospuren bietet, funktionieren die häufigsten Anwendungsfälle für diese Eigenschaften nicht, sodass sie beide standardmäßig deaktiviert sind. Weitere Details finden Sie im [Firefox-Bug 1057233](https://bugzil.la/1057233).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 33                  | Nein                     |
| Developer Edition | 33                  | Nein                     |
| Beta              | 33                  | Nein                     |
| Release           | 33                  | Nein                     |

- `media.track.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

#### Asynchrone SourceBuffer Add und Remove

Dies fügt den promise-basierten Methoden [`appendBufferAsync()`](/de/docs/Web/API/SourceBuffer/appendBufferAsync) und [`removeAsync()`](/de/docs/Web/API/SourceBuffer/removeAsync) zum Hinzufügen und Entfernen von Medienquellenpuffern zur [`SourceBuffer`](/de/docs/Web/API/SourceBuffer) Schnittstelle hinzu. Weitere Informationen finden Sie im [Firefox-Bug 1280613](https://bugzil.la/1280613) und [Firefox-Bug 778617](https://bugzil.la/778617).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 62                  | Nein                     |
| Developer Edition | 62                  | Nein                     |
| Beta              | 62                  | Nein                     |
| Release           | 62                  | Nein                     |

- `media.mediasource.experimental.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

#### AVIF Konformitätsstrenge

Die `image.avif.compliance_strictness` Einstellung kann verwendet werden, um die _Strenge_ zu steuern, die beim Verarbeiten von [AVIF](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) Bildern angewendet wird.
Dies ermöglicht Firefox-Benutzern, Bilder anzuzeigen, die in einigen anderen Browsern gerendert werden, auch wenn sie nicht vollständig konform sind.

| Release-Kanal     | Version hinzugefügt | Standardwert |
| ----------------- | ------------------- | ------------ |
| Nightly           | 92                  | 1            |
| Developer Edition | 92                  | 1            |
| Beta              | 92                  | 1            |
| Release           | 92                  | 1            |

- `image.avif.compliance_strictness`
  - : Numerischer Wert, der einen _Strengegrad_ angibt. Zulässige Werte sind:
    - `0`: Nachsichtig. Akzeptieren Sie Bilder mit Spezifikationsverletzungen in beiden Empfehlungen ("sollte"-Sprache) und Anforderungen ("muss"-Sprache), vorausgesetzt, sie können sicher oder unmissverständlich interpretiert werden.
    - `1` **(Standard)**: Gemischt. Verletzungen von Anforderungen ("muss") ablehnen, aber Verletzungen von Empfehlungen ("sollte") zulassen.
    - `2`: Streng. Jegliche Verletzungen von festgelegten Anforderungen oder Empfehlungen ablehnen.

#### Unterstützung von JPEG XL

Firefox unterstützt [JPEG XL](https://jpeg.org/jpegxl/) Bilder, wenn diese Funktion aktiviert ist.
Weitere Details finden Sie im [Firefox-Bug 1539075](https://bugzil.la/1539075).

Beachten Sie, dass, wie unten gezeigt, die Funktion nur in Nightly-Builds verfügbar ist (unabhängig davon, ob die Einstellung gesetzt ist).
In Firefox 149 wurde der frühere C++ [JPEG XL](https://jpeg.org/jpegxl/) Bilddecoder durch eine neue Rust-basierte Implementierung ersetzt, die die `jxl-rs` Bibliothek verwendet ([Firefox-Bug 1986393](https://bugzil.la/1986393)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 90                  | Nein                     |
| Developer Edition | —                   | —                        |
| Beta              | —                   | —                        |
| Release           | —                   | —                        |

- `image.jxl.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

#### Dokument Bild-in-Bild API

Die [Document Picture-in-Picture API](/de/docs/Web/API/Document_Picture-in-Picture_API) macht es möglich, ein immer im Vordergrund befindliches Fenster zu öffnen, das mit beliebigem HTML-Inhalt wie einem Video mit benutzerdefinierten Steuerelementen oder einem Set von Streams mit den Teilnehmern eines Videokonferenzanrufs gefüllt werden kann.
Weitere Details finden Sie im [Firefox-Bug 1858562](https://bugzil.la/1858562).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 148                 | Ja                       |
| Developer Edition | 148                 | Nein                     |
| Beta              | 148                 | Nein                     |
| Release           | 148                 | Nein                     |

- `dom.documentpip.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### WebVR API (Deaktiviert)

Die veraltete [WebVR API](/de/docs/Web/API/WebVR_API) steht kurz vor der Entfernung.
Sie ist in allen Builds standardmäßig deaktiviert [Firefox-Bug 1750902](https://bugzil.la/1750902).

| Release-Kanal     | Version entfernt | Standardmäßig aktiviert? |
| ----------------- | ---------------- | ------------------------ |
| Nightly           | 98               | Nein                     |
| Developer Edition | 98               | Nein                     |
| Beta              | 98               | Nein                     |
| Release           | 98               | Nein                     |

- `dom.vr.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### GeometryUtils Methoden: convertPointFromNode(), convertRectFromNode() und convertQuadFromNode()

Die `GeometryUtils` Methoden `convertPointFromNode()`, `convertRectFromNode()` und `convertQuadFromNode()` übertragen den angegebenen Punkt, das Rechteck oder das Viereck von dem [`Node`](/de/docs/Web/API/Node), auf dem sie aufgerufen werden, zu einem anderen Knoten. (Weitere Details finden Sie im [Firefox-Bug 918189](https://bugzil.la/918189)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 31                  | Ja                       |
| Developer Edition | 31                  | Nein                     |
| Beta              | 31                  | Nein                     |
| Release           | 31                  | Nein                     |

- `layout.css.convertFromNode.enable`
  - : Setzen Sie auf `true`, um zu aktivieren.

### GeometryUtils Methode: getBoxQuads()

Die `GeometryUtils` Methode `getBoxQuads()` gibt die CSS-Boxen für einen [`Node`](/de/docs/Web/API/Node) relativ zu einem anderen Knoten oder Ansichtsfenster zurück. (Weitere Details finden Sie im [Firefox-Bug 917755](https://bugzil.la/917755)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 31                  | Ja                       |
| Developer Edition | 31                  | Nein                     |
| Beta              | 31                  | Nein                     |
| Release           | 31                  | Nein                     |

- `layout.css.getBoxQuads.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Payment Request API

#### Primäre Zahlungsabwicklung

Die [Payment Request API](/de/docs/Web/API/Payment_Request_API) bietet Unterstützung für die Bearbeitung von webbasierten Zahlungen innerhalb von Webinhalten oder Apps. Aufgrund eines Fehlers, der beim Testen der Benutzeroberfläche aufgetreten ist, haben wir entschieden, die Auslieferung dieser API zu verschieben, während Diskussionen über mögliche Änderungen an der API stattfinden. Die Arbeiten laufen. (Weitere Details finden Sie im [Firefox-Bug 1318984](https://bugzil.la/1318984)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 55                  | Nein                     |
| Developer Edition | 55                  | Nein                     |
| Beta              | 55                  | Nein                     |
| Release           | 55                  | Nein                     |

- `dom.payments.request.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.
- `dom.payments.request.supportedRegions`
  - : Ländercodes als durch Kommas getrennte Positivliste von Regionen (z. B. `US,CA`).

### WebShare API

Die [Web Share API](/de/docs/Web/API/Web_Share_API) ermöglicht das Teilen von Dateien, URLs und anderen Daten von einer Website.
Diese Funktion ist auf Android in allen Builds aktiviert, aber hinter einer Einstellung auf dem Desktop (es sei denn, unten angegeben).

| Release-Kanal     | Version geändert | Standardmäßig aktiviert?                    |
| ----------------- | ---------------- | ------------------------------------------- |
| Nightly           | 71               | Nein (Standard). Ja (Windows ab Version 92) |
| Developer Edition | 71               | Nein                                        |
| Beta              | 71               | Nein                                        |
| Release           | 71               | Nein (Desktop). Ja (Android).               |

- `dom.webshare.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Notifications API

Benachrichtigungen haben die [`requireInteraction`](/de/docs/Web/API/Notification/requireInteraction) Eigenschaft standardmäßig auf Windows-Systemen und in der Nightly-Version auf `true` gesetzt ([Firefox-Bug 1794475](https://bugzil.la/1794475)).

| Release-Kanal     | Version geändert | Standardmäßig aktiviert? |
| ----------------- | ---------------- | ------------------------ |
| Nightly           | 117              | Ja                       |
| Developer Edition | 117              | Nein                     |
| Beta              | 117              | Nein                     |
| Release           | 117              | Nur Windows              |

- `dom.webnotifications.requireinteraction.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

## Sicherheit und Datenschutz

### Kennzeichnung unsicherer Seiten

Die beiden `security.insecure_connection_text_*` Einstellungen fügen einen "Nicht sicher" Text in der Adressleiste neben dem traditionellen Schloss-Symbol hinzu, wenn eine Seite unsicher geladen wird (d.h. unter Verwendung von {{Glossary("HTTP", "HTTP")}} statt {{Glossary("HTTPS", "HTTPS")}}). Die Einstellung `browser.urlbar.trimHttps` kürzt das `https:` Präfix von Adressleisten-URLs. Weitere Details finden Sie im [Firefox-Bug 1853418](https://bugzil.la/1853418).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 121                 | Ja                       |
| Developer Edition | 60                  | Nein                     |
| Beta              | 60                  | Nein                     |
| Release           | 60                  | Nein                     |

- `security.insecure_connection_text.enabled`
  - : Setzen Sie auf `true`, um das Text-Label für den normalen Browsing-Modus zu aktivieren.
- `security.insecure_connection_text.pbmode.enabled`
  - : Setzen Sie auf `true`, um das Text-Label für den privaten Browsing-Modus zu aktivieren.
- `browser.urlbar.trimHttps`
  - : Setzen Sie auf `true`, um das `https:` Präfix von Adressleisten-URLs zu kürzen.

### Einschränkung von Inhalten für Erwachsene mit `<meta name="rating">`

Das nicht standardmäßige [`<meta name="rating">`](/de/docs/Web/HTML/Reference/Elements/meta) Element kann auf einer Webseite eingebunden werden, um anzugeben, dass die Inhalte der Seite als eingeschränkt/erwachsen gekennzeichnet sind. Zum Zeitpunkt des Schreibens gibt es zwei mögliche `content` Werte, `adult` ([von Google definiert](https://developers.google.com/search/docs/specialty/explicit/guidelines#add-metadata)) und `RTA-5042-1996-1400-1577-RTA` ([von ASACP definiert](https://www.rtalabel.org/?content=howto#top)), die denselben Effekt haben (weitere Optionen können in Zukunft hinzugefügt werden).

Die folgenden `<meta>` Elemente sind gleichwertig:

```html
<meta name="rating" content="adult" />
<meta name="rating" content="RTA-5042-1996-1400-1577-RTA" />
```

Browser, die dieses Element erkennen, können dann Maßnahmen ergreifen, um Benutzer daran zu hindern, die Inhalte anzusehen. Die Implementierung von Firefox ersetzt die Seite durch den Inhalt von `about:restricted`, das dem Benutzer erklärt, dass sie versuchen, auf eingeschränkte Inhalte zuzugreifen, erklärt, warum sie diese nicht ansehen können, und gibt ihnen eine Zurücktaste, um dorthin zurückzukehren, von wo sie gekommen sind.

Weitere Details finden Sie im [Firefox-Bug 1991135](https://bugzil.la/1991135).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 146                 | Nein                     |
| Developer Edition | 146                 | Nein                     |
| Beta              | 146                 | Nein                     |
| Release           | 146                 | Nein                     |

- `security.restrict_to_adults.always`
  - : Setzen Sie auf `true`, um den Zugriff auf Webseiten zu beschränken, die sich selbst als Erwachsenenzugang identifizieren, indem sie ein `<meta name="rating">` Element einfügen.
- `security.restrict_to_adults.respect_platform`
  - : Setzen Sie auf `true`, um den Zugriff auf Webseiten nur dann einzuschränken, wenn geeignete Kindersicherungseinstellungen auf dem zugrunde liegenden Betriebssystem festgelegt sind (zum Beispiel sind die Einstellungen für _Inhalte & Datenschutz_ auf macOS so eingestellt, dass explizite Webinhalte eingeschränkt werden).

### Berechtigungsrichtlinie / Funktionsrichtlinie

Die [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) erlaubt Webentwicklern, die Aktivierung, Deaktivierung und das Verhalten bestimmter Funktionen und APIs im Browser selektiv zu steuern. Sie ähnelt der CSP, steuert jedoch Merkmale anstelle des Sicherheitsverhaltens.
Dies wird in Firefox als **Funktionsrichtlinie** implementiert, dem Namen, der in einer früheren Version der Spezifikation verwendet wurde.

Beachten Sie, dass unterstützte Richtlinien durch das [`allow`](/de/docs/Web/HTML/Reference/Elements/iframe#allow) Attribut auf `<iframe>` Elementen gesetzt werden können, auch wenn der Benutzervorzug nicht gesetzt ist.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 65                  | Nein                     |
| Developer Edition | 65                  | Nein                     |
| Beta              | 65                  | Nein                     |
| Release           | 65                  | Nein                     |

- `dom.security.featurePolicy.header.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Datensparsame Attributions-API (PPA)

Die [PPA API](https://support.mozilla.org/en-US/kb/privacy-preserving-attribution) bietet eine Alternative zur Benutzerverfolgung für Anzeigenattribution unter Verwendung des neuen `navigator.privateAttribution`-Objekts mit den Methoden `saveImpression()` und `measureConversion()`. Lesen Sie mehr über PPA [im Original-Erklärer](https://github.com/mozilla/explainers/tree/main/archive/ppa-experiment) und der [vorgeschlagenen Spezifikation](https://w3c.github.io/ppa/). Dieses Experiment kann verfügbar gemacht werden dla Websites via [Ursprungsversuch](https://wiki.mozilla.org/Origin_Trials) oder im Browser durch Setzen der Einstellung auf `1`. ([Firefox-Bug 1900929](https://bugzil.la/1900929)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 128                 | Nein                     |
| Developer Edition | 128                 | Nein                     |
| Beta              | 128                 | Nein                     |
| Release           | 128                 | Nein                     |

- `dom.origin-trials.private-attribution.state`
  - : Setzen Sie auf `true`, um zu aktivieren.

## HTTP

### Integritätsrichtlinie für Stylesheet-Ressourcen

Die {{httpheader("Integrity-Policy")}} und {{httpheader("Integrity-Policy-Report-Only")}} HTTP-Header werden jetzt für Stilressourcen unterstützt. Diese ermöglichen es Websites, entweder [Integritätsgarantien für Subressourcen](/de/docs/Web/Security/Defenses/Subresource_Integrity) für Stile durchzusetzen oder Verstöße gegen die Richtlinie nur zu melden.
Beachten Sie, dass Firefox Berichts-Endpunkte ignoriert und Verstöße in der Entwicklerkonsole protokolliert.
Wenn `Integrity-Policy` verwendet wird, blockiert der Browser das Laden von Stilen, die in einem {{HTMLElement("link")}} Element mit [`rel="stylesheet"`](/de/docs/Web/HTML/Reference/Attributes/rel#stylesheet) referenziert werden, die entweder das [`integrity`](/de/docs/Web/HTML/Reference/Elements/script#integrity) Attribut fehlen oder einen Integritäts-Hash haben, der nicht mit der Ressource auf dem Server übereinstimmt.
([Firefox-Bug 1976656](https://bugzil.la/1976656)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 142                 | Nein                     |
| Developer Edition | 142                 | Nein                     |
| Beta              | 142                 | Nein                     |
| Release           | 142                 | Nein                     |

- `security.integrity_policy.stylesheet.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Storage Access Header

Die {{httpheader("Sec-Fetch-Storage-Access")}} und {{httpheader("Activate-Storage-Access")}} HTTP-Header werden jetzt unterstützt, wodurch ein effizienterer [Storage Access API](/de/docs/Web/API/Storage_Access_API) Workflow ermöglicht wird. ([Firefox-Bug 1991688](https://bugzil.la/1991688)).

Im JavaScript-only Workflow muss eine Drittanbieter-Ressource angefordert und geladen werden, um eine Speicherzugriffsberechtigung für einen bestimmten Kontext zu aktivieren (wie einen neuen Browser-Tab). Dies ist erforderlich, selbst wenn die Erlaubnis bereits erteilt wurde.
Die Speicherzugriffsköpfe ermöglichen es dem Browser, den Berechtigungszustand für den bestimmten Kontext bekannt zu geben, sodass der Server die Aktivierung einer bereits erteilten Berechtigung anfordern kann.
Dies vermeidet den Overhead des unnötigen Abrufs und Ladens der Ressource.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 145                 | Ja                       |
| Developer Edition | 145                 | Nein                     |
| Beta              | 145                 | Nein                     |
| Release           | 145                 | Nein                     |

- `dom.storage_access.headers.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Idempotency-Key

Der {{httpheader("Idempotency-Key")}} HTTP-Anforderungsheader kann von Websites verwendet werden, um einen {{HTTPMethod("POST")}} oder {{HTTPMethod("PATCH")}} Anfragen {{Glossary("idempotent", "idempotent")}} zu machen, wenn er mit einem Server verwendet wird, der es unterstützt.
Die Spezifikation gibt an, dass der Server dokumentieren und anzeigen sollte, welche Endpunkte diesen Header benötigen, das Format des Schlüssels und erwartete Fehlermeldungen.

Firefox fügt den Header _automatisch_ mit einem eindeutigen Schlüssel für jede neue `POST` Anfrage hinzu, wenn er nicht bereits vom Seiten-Client-Code hinzugefügt wurde.
Dies vereinfacht den erforderlichen Client-seitigen Code, um mit Servern zu arbeiten, die das Feature unterstützen.

([Firefox-Bug 1830022](https://bugzil.la/1830022)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 135                 | Nein                     |
| Developer Edition | 135                 | Nein                     |
| Beta              | 135                 | Nein                     |
| Release           | 135                 | Nein                     |

- `network.http.idempotencyKey.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Accept-Header mit MIME-Type image/jxl

Der HTTP [`Accept`](/de/docs/Web/HTTP/Reference/Headers/Accept) Header in [Standardanfragen und Bildanfragen](/de/docs/Web/HTTP/Guides/Content_negotiation/List_of_default_Accept_values) kann über eine Einstellung konfiguriert werden, um Unterstützung für den `image/jxl` MIME-Type anzuzeigen.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 128                 | Nein                     |
| Developer Edition | 128                 | Nein                     |
| Beta              | 128                 | Nein                     |
| Release           | 128                 | Nein                     |

- `image.jxl.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### SameSite=Lax standardmäßig

[`SameSite` Cookies](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) haben einen Standardwert von `Lax`.
Mit dieser Einstellung werden Cookies nur gesendet, wenn ein Benutzer zur Ursprungsseite navigiert, nicht für plattformübergreifende Subanfragen, um Bilder oder Frames auf einer Drittanbieter-Seite zu laden usw.
Weitere Details finden Sie im [Firefox-Bug 1617609](https://bugzil.la/1617609).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 69                  | Nein                     |
| Developer Edition | 69                  | Nein                     |
| Beta              | 69                  | Nein                     |
| Release           | 69                  | Nein                     |

- `network.cookie.sameSite.laxByDefault`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Access-Control-Allow-Headers Wildcard deckt Authorization nicht ab

Der [`Access-Control-Allow-Headers`](/de/docs/Web/HTTP/Reference/Headers/Access-Control-Allow-Headers) ist ein Antwort-Header zu einer {{Glossary("Preflight_request", "CORS Preflight-Anfrage")}}, der angibt, welche Anforderungs-Header in die endgültige Anfrage aufgenommen werden dürfen.
Die Antwort-Direktive kann einen Wildcard (`*`) enthalten, der angibt, dass die endgültige Anfrage alle Header außer dem `Authorization` Header enthalten darf.

Standardmäßig enthält Firefox den `Authorization` Header in der endgültigen Anfrage nach Erhalt einer Antwort mit `Access-Control-Allow-Headers: *`.
Setzen Sie die Einstellung auf `false`, um sicherzustellen, dass Firefox den `Authorization` Header nicht einschließt.
Weitere Details finden Sie im [Firefox-Bug 1687364](https://bugzil.la/1687364).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 115                 | Ja                       |
| Developer Edition | 115                 | Ja                       |
| Beta              | 115                 | Ja                       |
| Release           | 115                 | Ja                       |

- `network.cors_preflight.authorization_covered_by_wildcard`
  - : Setzen Sie auf `true`, um zu aktivieren.

## Entwicklerwerkzeuge

Die Entwicklerwerkzeuge von Mozilla entwickeln sich ständig weiter. Wir experimentieren mit neuen Ideen, fügen neue Funktionen hinzu und testen sie in den Nightly- und Developer Edition-Kanälen, bevor wir sie in die Beta- und Release-Versionen einfließen lassen. Die unten aufgeführten Funktionen sind die aktuellen experimentellen Entwicklerwerkzeugfunktionen.

**Keine experimentellen Funktionen in diesem Veröffentlichungszyklus.**

## Siehe auch

- [Firefox Entwickler-Veröffentlichungshinweise](/de/docs/Mozilla/Firefox/Releases)
- [Firefox Nightly](https://www.firefox.com/en-US/channel/desktop/)
- [Firefox Developer Edition](https://www.firefox.com/en-US/channel/desktop/developer/)
