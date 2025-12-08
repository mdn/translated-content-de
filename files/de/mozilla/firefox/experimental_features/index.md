---
title: Experimentelle Funktionen in Firefox
short-title: Experimentelle Funktionen
slug: Mozilla/Firefox/Experimental_features
l10n:
  sourceCommit: 90ef657588dd961881a459e576fb3635d6868d49
---

Diese Seite listet die experimentellen und teilweise implementierten Funktionen von Firefox auf, einschließlich sich entwickelnder oder vorgeschlagener Webplattform-Standards. Jeder Eintrag unten enthält Informationen über die Builds, in denen eine Funktion enthalten ist (Nightly, Beta, Developer Edition oder Release), ob sie standardmäßig aktiviert ist oder nicht, und den Namen der **Präferenz**, die Sie verwenden können, um die Funktion zu aktivieren oder zu konfigurieren. Die Beschreibung jeder Funktion enthält auch Links zu relevanten [Bugzilla-Fehlern](https://bugzilla.mozilla.org), die die Funktion implementieren oder aktivieren. Diese Informationen ermöglichen es Ihnen, experimentelle Funktionen auszuprobieren und Feedback zu geben, bevor sie offiziell veröffentlicht werden.

In Bezug auf den Lebenszyklus erscheinen neue Funktionen in der Regel zuerst in [Nightly](https://www.firefox.com/en-US/channel/desktop/#nightly), wo sie oft standardmäßig zur frühen Rückmeldung und zum Testen aktiviert sind. Wenn keine größeren Probleme gefunden werden, werden sie in [Beta](https://www.firefox.com/en-US/channel/desktop/#beta) und [Developer Edition](https://www.firefox.com/en-US/channel/desktop/developer/) Pre-Release Builds enthalten. Schließlich werden genehmigte Funktionen im Kanal der [stabilen Version](https://www.firefox.com/en-US/) veröffentlicht. Wenn eine Funktion standardmäßig in einer Release-Version aktiviert ist, wird sie nicht mehr als experimentell angesehen und von dieser Seite entfernt.

Um diese Funktionen zu aktivieren, geben Sie `about:config` in die Firefox-Adressleiste ein, suchen Sie die zugehörige **Präferenz** und ändern Sie ihren Wert, der in der Regel zwischen `true` und `false` umschaltet. Abhängig von der Funktion müssen Sie möglicherweise den Browser neu starten, damit die Änderung wirksam wird. Weitere Informationen zur Verwaltung von Präferenzen in Firefox finden Sie im [Firefox-Konfigurationseditor](https://support.mozilla.org/en-US/kb/about-config-editor-firefox) Support-Artikel.

## HTML

### Layout für input type="search"

Das Layout für `input type="search"` wurde aktualisiert. Dies bewirkt, dass ein Suchfeld ein Löschsymbol hat, sobald jemand darin zu tippen beginnt, um andere Browserimplementierungen anzupassen. (Siehe [Firefox-Fehler 558594](https://bugzil.la/558594) für weitere Details.)

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 81                   | Nein                     |
| Developer Edition | 81                   | Nein                     |
| Beta              | 81                   | Nein                     |
| Release           | 81                   | Nein                     |

- `layout.forms.input-type-search.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Umschaltung zur Anzeige von Passwörtern

HTML-Passworteingabeelemente ([`<input type="password">`](/de/docs/Web/HTML/Reference/Elements/input/password)) enthalten ein "Auge"-Symbol, das umgeschaltet werden kann, um den Passworttext anzuzeigen oder zu verbergen ([Firefox-Fehler 502258](https://bugzil.la/502258)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 96                   | Nein                     |
| Developer Edition | 96                   | Nein                     |
| Beta              | 96                   | Nein                     |
| Release           | 96                   | Nein                     |

- `layout.forms.reveal-password-button.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Zeitauswahl für datetime-local Eingabefeld

HTML-Eingabeelemente mit datetime-local ([`<input type="datetime-local">`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local)) beinhalten jetzt eine Zeitauswahl ([Firefox-Fehler 1726108](https://bugzil.la/1726108)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 144                  | Nein                     |
| Developer Edition | 144                  | Nein                     |
| Beta              | 144                  | Nein                     |
| Release           | 144                  | Nein                     |

- `dom.forms.datetime.timepicker`
  - : Auf `true` setzen, um zu aktivieren.

## CSS

### Hex-Felder zur Darstellung von Steuerzeichen

Diese Funktion rendert Steuerzeichen (Unicode-Kategorie Cc), abgesehen von _tab_ (`U+0009`), _line feed_ (`U+000A`), _form feed_ (`U+000C`) und _carriage return_ (`U+000D`), als Hex-Feld, wenn sie nicht erwartet werden. (Siehe [Firefox-Fehler 1099557](https://bugzil.la/1099557) für weitere Details.)

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 43                   | Ja                       |
| Developer Edition | 43                   | Nein                     |
| Beta              | 43                   | Nein                     |
| Release           | 43                   | Nein                     |

- `layout.css.control-characters.visible`
  - : Auf `true` setzen, um zu aktivieren.

### initial-letter Eigenschaft

Die {{cssxref("initial-letter")}} CSS-Eigenschaft ist Teil der [CSS Inline Layout](https://drafts.csswg.org/css-inline/)-Spezifikation und erlaubt es Ihnen anzugeben, wie initiale Buchstaben angezeigt werden, die abgesunken, hochgezogen oder fallen gelassen sind. (Siehe [Firefox-Fehler 1223880](https://bugzil.la/1223880) für weitere Details.)

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 50                   | Nein                     |
| Developer Edition | 50                   | Nein                     |
| Beta              | 50                   | Nein                     |
| Release           | 50                   | Nein                     |

- `layout.css.initial-letter.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### fit-content() Funktion

Die {{cssxref("fit-content_function", "fit-content()")}}-Funktion, wie sie auf {{cssxref("width")}} und andere Größenparameter anwendbar ist. Diese Funktion wird bereits gut für CSS-Grid-Layout-Track-Sizing unterstützt. (Siehe [Firefox-Fehler 1312588](https://bugzil.la/1312588) für weitere Details.)

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 91                   | Nein                     |
| Developer Edition | 91                   | Nein                     |
| Beta              | 91                   | Nein                     |
| Release           | 91                   | Nein                     |

- `layout.css.fit-content-function.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Scroll-gesteuerte Animationen

Früher als „scroll-verkoppelte Animationen“ bezeichnet, hängt eine [scroll-gesteuerte Animation](/de/docs/Web/CSS/Guides/Scroll-driven_animations) von der Scrollposition einer Bildlaufleiste ab, anstatt von der Zeit oder einer anderen Dimension. Die {{cssxref('scroll-timeline-name')}} und {{cssxref('scroll-timeline-axis')}}-Eigenschaften (und die {{cssxref('scroll-timeline')}}) ermöglichen es Ihnen anzugeben, dass eine bestimmte Bildlaufleiste in einem bestimmten benannten Container als Quelle für eine scroll-gesteuerte Animation verwendet werden kann. Die Scroll-Timeline kann dann mit einer [Animation](/de/docs/Web/CSS/Guides/Animations) durch Setzen der {{cssxref('animation-timeline')}}-Eigenschaft auf den definierten Namenswert verbunden werden.

Beim Verwenden der {{cssxref('scroll-timeline')}}-Kurznotation muss die Reihenfolge der Eigenschaftswerte {{cssxref('scroll-timeline-name')}} gefolgt von {{cssxref('scroll-timeline-axis')}} sein. Die Lang- und Kurznotationseigenschaften sind beide hinter der Präferenz verfügbar. Alternativ können Sie die [`scroll()`](/de/docs/Web/CSS/Reference/Properties/animation-timeline/scroll)-Funktionsnotation mit {{cssxref('animation-timeline')}} verwenden, um anzugeben, dass eine Bildlaufachsen in einem Vorfahrenelement für die Timeline verwendet wird.

Weitere Informationen finden Sie in [Firefox-Fehler 1807685](https://bugzil.la/1807685), [Firefox-Fehler 1804573](https://bugzil.la/1804573), [Firefox-Fehler 1809005](https://bugzil.la/1809005), [Firefox-Fehler 1676791](https://bugzil.la/1676791), [Firefox-Fehler 1754897](https://bugzil.la/1754897), [Firefox-Fehler 1817303](https://bugzil.la/1817303) und [Firefox-Fehler 1737918](https://bugzil.la/1737918).

Die {{cssxref('timeline-scope')}}, {{cssxref('animation-range-start')}} und {{cssxref('animation-range-end')}}-Eigenschaften (und die {{cssxref('animation-range')}}-Kurznotation) werden noch nicht unterstützt. Weitere Informationen finden Sie in [Firefox-Fehler 1676779](https://bugzil.la/1676779).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 136                  | Ja                       |
| Developer Edition | 110                  | Nein                     |
| Beta              | 110                  | Nein                     |
| Release           | 110                  | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### prefers-reduced-transparency Medienmerkmal

Das CSS [`prefers-reduced-transparency`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-transparency) Medienmerkmal lässt Sie erkennen, ob ein Benutzer die Einstellung aktiviert hat, um die Menge an transparenten oder durchscheinenden Schichteffekten auf seinem Gerät zu minimieren. Siehe ([Firefox-Fehler 1736914](https://bugzil.la/1736914)) für weitere Details.

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 113                  | Nein                     |
| Developer Edition | 113                  | Nein                     |
| Beta              | 113                  | Nein                     |
| Release           | 113                  | Nein                     |

- `layout.css.prefers-reduced-transparency.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### inverted-colors Medienmerkmal

Das CSS [`inverted-colors`](/de/docs/Web/CSS/Reference/At-rules/@media/inverted-colors) Medienmerkmal lässt Sie erkennen, ob ein Benutzeragent oder das zugrunde liegende Betriebssystem Farben invertiert. Siehe ([Firefox-Fehler 1794628](https://bugzil.la/1794628)) für weitere Details.

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 114                  | Nein                     |
| Developer Edition | 114                  | Nein                     |
| Beta              | 114                  | Nein                     |
| Release           | 114                  | Nein                     |

- `layout.css.inverted-colors.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Benannte Ansicht-Fortschrittszeitleisten-Eigenschaft

Die CSS [`view-timeline-name`](/de/docs/Web/CSS/Reference/Properties/view-timeline-name) Eigenschaft lässt Sie einem bestimmten Element einen Namen geben, indem das Vorfahren-Scroller-Element als Quelle einer Ansicht-Fortschrittszeitleiste identifiziert wird. Der Name kann dann der `animation-timeline` zugewiesen werden, die dann das zugehörige Element animiert, während es durch den sichtbaren Bereich seines Vorfahren-Scrollers bewegt. Siehe ([Firefox-Fehler 1737920](https://bugzil.la/1737920)) für weitere Details.

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 114                  | Nein                     |
| Developer Edition | 114                  | Nein                     |
| Beta              | 114                  | Nein                     |
| Release           | 114                  | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Anonyme Ansicht-Fortschrittszeitleisten-Funktion

Die CSS [`view()`](/de/docs/Web/CSS/Reference/Properties/animation-timeline/view) Funktion ermöglicht es Ihnen, anzugeben, dass die `animation-timeline` für ein Element eine Ansicht-Fortschrittszeitleiste ist, die das Element während der Bewegung durch den sichtbaren Bereich ihres Vorfahren-Scrollers animieren wird. Die Funktion definiert die Achse des übergeordneten Elements, das die Zeitleiste bereitstellt, sowie den Ausschnitt innerhalb des sichtbaren Bereichs, bei dem die Animation beginnt und endet. Siehe ([Firefox-Fehler 1808410](https://bugzil.la/1808410)) für weitere Details.

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 114                  | Nein                     |
| Developer Edition | 114                  | Nein                     |
| Beta              | 114                  | Nein                     |
| Release           | 114                  | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Anbieter-spezifische Transformations-Eigenschaften

Die mit `-moz-` vorangestellten [CSS Transformations](/de/docs/Web/CSS/Guides/Transforms)-Eigenschaften können deaktiviert werden, indem die `layout.css.prefixes.transforms` Präferenz auf `false` gesetzt wird. Die Absicht ist, diese zu deaktivieren, sobald die standardmäßigen CSS-Zoom-Eigenschaften gut unterstützt werden. ([Firefox-Fehler 1886134](https://bugzil.la/1886134), [Firefox-Fehler 1855763](https://bugzil.la/1855763)).

Speziell wird diese Präferenz die folgenden vorangestellten Eigenschaften deaktivieren:

- `-moz-backface-visibility`
- `-moz-perspective`
- `-moz-perspective-origin`
- `-moz-transform`
- `-moz-transform-origin`
- `-moz-transform-style`

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 120                  | Ja                       |
| Developer Edition | 120                  | Ja                       |
| Beta              | 120                  | Ja                       |
| Release           | 120                  | Ja                       |

- `layout.css.prefixes.transforms`
  - : Auf `true` setzen, um zu aktivieren.

### `shape()` Funktion

Die CSS [`shape()`](/de/docs/Web/CSS/Reference/Values/basic-shape/shape) Funktion ist ein [`<basic-shape>`](/de/docs/Web/CSS/Reference/Values/basic-shape) Datentyp, der es Ihnen ermöglicht, eine Form in den {{cssxref("clip-path")}} und {{cssxref("offset-path")}} Eigenschaften mithilfe von einem oder mehreren "Form-Befehlen" zu definieren. Diese Befehle ähneln sehr den [SVG-Pfadbefehlen](/de/docs/Web/SVG/Reference/Attribute/d#path_commands). Die `shape()` Funktion ist in gewisser Hinsicht der {{cssxref("basic-shape/path","path()")}} Funktion ähnlich, jedoch verwendet `shape()` im Gegensatz zu `path()`, das die [SVG-Pfad](/de/docs/Web/SVG/Reference/Element/path) Syntax verwendet, die standardmäßige CSS-Syntax. Dies ermöglicht es Ihnen, Formen leicht zu erstellen und zu bearbeiten und auch die Verwendung von CSS-Mathematikfunktionen zu erlauben. Für weitere Details siehe [Firefox-Fehler 1823463](https://bugzil.la/1823463) für die Unterstützung der `shape()` Funktion in `clip-path`, [Firefox-Fehler 1884424](https://bugzil.la/1884424) für die Unterstützung der Funktion in `offset-path` und [Firefox-Fehler 1884425](https://bugzil.la/1884425) für ihre Interpolationsunterstützung.

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 126                  | Ja                       |
| Developer Edition | 126                  | Nein                     |
| Beta              | 126                  | Nein                     |
| Release           | 126                  | Nein                     |

- `layout.css.basic-shape-shape.enabled`
  - : Auf `true` setzen, um zu aktivieren.

#### Relative Steuerpunkte in CSS `shape()` Kurven-Befehlen

Sie können [`<relative-control-point>`](/de/docs/Web/CSS/Reference/Values/basic-shape/shape#relative-control-point) Werte verwenden, wenn Sie einen [`<curve-command>`](/de/docs/Web/CSS/Reference/Values/basic-shape/shape#curve-command) oder [`<smooth-command>`](/de/docs/Web/CSS/Reference/Values/basic-shape/shape#smooth-command) in einer CSS `shape()` Funktion angeben. Diese Werte ermöglichen es Ihnen, Steuerpunkte anzugeben, die relativ zum Start- oder Endpunkt des aktuellen Befehls oder relativ zum Ursprung (oben links) des Containers, in dem die Form gezeichnet wird, positioniert sind. ([Firefox-Fehler 1921501](https://bugzil.la/1921501)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 146                  | Ja                       |
| Developer Edition | 146                  | Nein                     |
| Beta              | 146                  | Nein                     |
| Release           | 146                  | Nein                     |

- `layout.css.basic-shape-shape.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Symmetrisches `letter-spacing`

Die CSS {{cssxref("letter-spacing")}} Eigenschaft teilt jetzt den angegebenen Buchstabenabstand gleichmäßig auf beiden Seiten jedes Zeichens auf. Dies unterscheidet sich von dem aktuellen Verhalten, bei dem der Abstand hauptsächlich auf eine Seite hinzugefügt wird. Dieser Ansatz kann den Textabstand verbessern, insbesondere in gemischtrittlicheren Texten. ([Firefox-Fehler 1891446](https://bugzil.la/1891446)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 128                  | Ja                       |
| Developer Edition | 128                  | Ja                       |
| Beta              | 127                  | Nein                     |
| Release           | 127                  | Nein                     |

- `layout.css.letter-spacing.model`
  - : Auf `true` setzen, um zu aktivieren.

### `calc()` Farbkanal-Unterstützung in relativen Farben

Die CSS [`calc()`](/de/docs/Web/CSS/Reference/Values/calc) Funktion kann jetzt Farbkanäle in [relativen Farben](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors#using_math_functions) analysieren, wodurch Sie Änderungen an Farben in verschiedenen Farbräumen oder bei Verwendung unterschiedlicher Funktionsnotationen korrekt berechnen können [Firefox-Fehler 1889561](https://bugzil.la/1889561).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 127                  | Ja                       |
| Developer Edition | 127                  | Nein                     |
| Beta              | 127                  | Nein                     |
| Release           | 127                  | Nein                     |

- `layout.css.relative-color-syntax.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### CSS Ankerpositionierung

Das [CSS Anchor Positioning](/de/docs/Web/CSS/Guides/Anchor_positioning) Modul definiert eine Reihe von Funktionen, die es ermöglichen, Elemente als Ankerelemente zu definieren, und dass andere Elemente relativ zu diesen Ankerelementen positioniert werden können. Dies ermöglicht es beispielsweise, Tooltips neben zugehörigem Inhalt anzuzeigen, während es durch den Ansichtbereich scrollt, sich bei Bedarf zu bewegen, wenn es den Ansichtbereich überlaufen würde, und zu verschwinden, wenn der Anker von Bildschirm geht. Die Funktionsmenge wird schrittweise hinter einer Präferenz ausgerollt (allgemein: [Firefox-Fehler 1988224](https://bugzil.la/1988224), {{cssxref("position-area")}}: [Firefox-Fehler 1924086](https://bugzil.la/1924086), benutzerdefinierte {{cssxref("@position-try")}} Fallbacks: [Firefox-Fehler 1962598](https://bugzil.la/1962598)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 145                  | Ja                       |
| Developer Edition | 131                  | Nein                     |
| Beta              | 131                  | Nein                     |
| Release           | 131                  | Nein                     |

- `layout.css.anchor-positioning.enabled`
  - : Auf `true` setzen, um zu aktivieren.

#### `anchor-size()` Funktion

Die CSS {{CSSXRef("anchor-size")}} Funktion ermöglicht es Ihnen, die Größe, Position und Ränder eines ankerpositionierten Elements relativ zu den Dimensionen seines Ankerelements festzulegen. ([Firefox-Fehler 1972610](https://bugzil.la/1972610)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 145                  | Ja                       |
| Developer Edition | 142                  | Nein                     |
| Beta              | 142                  | Nein                     |
| Release           | 142                  | Nein                     |

- `layout.css.anchor-positioning.enabled`
  - : Auf `true` setzen, um zu aktivieren.

#### `position-area` Eigenschaft

Die CSS {{CSSXRef("position-area")}} Eigenschaft erlaubt es Ihnen, ein ankerpositioniertes Element relativ zu den Rändern seines zugehörigen Ankerelements zu positionieren, indem das positionierte Element auf eine oder mehrere Kacheln eines impliziten 3x3 Gitters gelegt wird, wobei das Ankerelement die Zelle in der Mitte ist. ([Firefox-Fehler 1924086](https://bugzil.la/1924086)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 145                  | Ja                       |
| Developer Edition | 145                  | Nein                     |
| Beta              | 145                  | Nein                     |
| Release           | 145                  | Nein                     |

- `layout.css.anchor-positioning.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Zertifizieren Sie Pseudo-Elemente nach elementgestützten Pseudo-Elementen

Es wurde mit der Arbeit begonnen, um [Pseudo-Elemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) wie {{cssxref("::first-letter")}} und {{cssxref("::before")}} nach [elementgestützten Pseudo-Elementen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements#element-backed_pseudo-elements) wie {{cssxref("::details-content")}} und {{cssxref("::file-selector-button")}} anzufügen.

Dies ermöglicht es Benutzern beispielsweise das erste Zeichen des {{htmlElement("details")}} Elements zu gestalten, indem der CSS-Selektor `::details-content::first-letter` verwendet wird oder vor ein {{HTMLElement("input") }} eines [`type="file"`](/de/docs/Web/HTML/Reference/Elements/input/file) mit dem CSS-Selektor `::file-selector-button::before` Inhalt hinzuzufügen.

Gegenwärtig kann nur die Unterstützung für `::details-content::first-letter` mit `@supports(::details-content::first-letter)` analysiert werden. Das `::file-selector-button` Pseudo-Element ist noch nicht als ein elementbasiertes Pseudo-Element markiert, sodass es keinen Weg gibt, dies zu testen. ([Firefox-Fehler 1953557](https://bugzil.la/1953557), [Firefox-Fehler 1941406](https://bugzil.la/1941406)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 138                  | Nein                     |
| Developer Edition | 138                  | Nein                     |
| Beta              | 138                  | Nein                     |
| Release           | 138                  | Nein                     |

### `:heading` und `:heading()` Pseudo-Klassen

Die [`:heading`](/de/docs/Web/CSS/Reference/Selectors/:heading) Pseudo-Klasse ermöglicht es Ihnen, alle [Überschriftselemente](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) (`<h1>`-`<h6>`) auf einmal zu gestalten, anstatt sie einzeln zu adressieren. Die [`:heading()`](/de/docs/Web/CSS/Reference/Selectors/:heading_function) funktionale Pseudo-Klasse ermöglicht es Ihnen, Überschriftselemente zu gestalten, die mit einer durch Kommas getrennten Liste von Ganzzahlen übereinstimmen, die den Überschriftsebenen entsprechen. ([Firefox-Fehler 1974386](https://bugzil.la/1974386) & [Firefox-Fehler 1984310](https://bugzil.la/1984310)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 142                  | Nein                     |
| Developer Edition | 142                  | Nein                     |
| Beta              | 142                  | Nein                     |
| Release           | 142                  | Nein                     |

- `layout.css.heading-selector.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### `text-decoration-trim`

Die CSS `text-decoration-trim` Eigenschaft ermöglicht es Ihnen, {{cssxref("text-decoration")}} Start- und Endabschneidungen anzugeben, um Textdekorationen im Verhältnis zum Text zu verkürzen, zu verlängern oder die Position zu verschieben ([Firefox-Fehler 1979915](https://bugzil.la/1979915)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 145                  | Nein                     |
| Developer Edition | 145                  | Nein                     |
| Beta              | 145                  | Nein                     |
| Release           | 145                  | Nein                     |

- `layout.css.text-decoration-trim.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### `@custom-media` At-Regel

Die [`@custom-media`](/de/docs/Web/CSS/Reference/At-rules/@custom-media) CSS At-Regel definiert Aliase für lange oder komplexe Medienabfragen. Anstatt die gleiche hartcodierte `<media-query-list>` in mehreren `@media` At-Regeln zu wiederholen, kann sie einmal in einer `@custom-media` At-Regel definiert und überall im Stylesheet bei Bedarf referenziert werden. ([Firefox-Fehler 1991105](https://bugzil.la/1744292)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 146                  | Nein                     |
| Developer Edition | 146                  | Nein                     |
| Beta              | 146                  | Nein                     |
| Release           | 146                  | Nein                     |

- `layout.css.custom-media.enabled`
  - : Auf `true` setzen, um zu aktivieren.

## SVG

**Keine experimentellen Funktionen in diesem Veröffentlichungszyklus.**

## JavaScript

### CSS-Modulscripts

CSS-Modulscripts werden jetzt unterstützt und ermöglichen es, dass ein Stylesheet als [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet) Instanz mithilfe der [`import`](/de/docs/Web/JavaScript/Reference/Statements/import) Anweisung in ein Script geladen wird. Die `import`-Anweisung muss außerdem das `type` [Import-Attribut](/de/docs/Web/JavaScript/Reference/Statements/import/with) spezifizieren und es auf `"css"` setzen, und das Stylesheet muss mit dem [media type](/de/docs/Web/HTTP/Guides/MIME_types) von `text/css` bereitgestellt werden. ([Firefox-Fehler 1720570](https://bugzil.la/1720570)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 145                  | Nein                     |
| Developer Edition | Nein                 | Nein                     |
| Beta              | Nein                 | Nein                     |
| Release           | Nein                 | Nein                     |

- `layout.css.module-scripts.enabled`
  - : Auf `true` setzen, um zu aktivieren.

## APIs

### CloseWatcher-Schnittstelle

Eingebaute Webkomponenten mit „offenen“ und „geschlossenen“ Semantiken, wie modale Dialoge und Pop-ups, können mithilfe von nativen Geräte-Mechanismen geschlossen werden. Auf Android kann beispielsweise ein Dialog durch den Zurück-Button geschlossen werden. Die [`CloseWatcher`](/de/docs/Web/API/CloseWatcher) Schnittstelle ermöglicht es Entwicklern, Benutzeroberflächenkomponenten zu implementieren wie benutzerdefinierte Seitenleisten, die ähnlich mit nativen Mechanismen geschlossen werden können. ([Firefox-Fehler 1888729](https://bugzil.la/1888729)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert?      |
| ----------------- | -------------------- | ----------------------------- |
| Nightly           | 140                  | Ja (Desktop). Nein (Android). |
| Developer Edition | 132                  | Nein                          |
| Beta              | 132                  | Nein                          |
| Release           | 132                  | Nein                          |

- `dom.closewatcher.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Navigation API

Die Navigation API bietet die Möglichkeit, Navigationsaktionen im Browser zu initiieren, abzufangen und zu verwalten. Sie kann auch die Historieneinträge einer Anwendung überprüfen. Dies ist ein Nachfolger für frühere Webplattformfeatures wie die [History API](/de/docs/Web/API/History_API) und [`window.location`](/de/docs/Web/API/Window/location), die ihre Schwächen behebt und speziell auf die Bedürfnisse von {{Glossary("SPA", "Single-Page Applications (SPAs)")}} ausgerichtet ist. ([Firefox-Fehler 1979288](https://bugzil.la/1979288)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 146                  | Ja                       |
| Developer Edition | 146                  | Nein                     |
| Beta              | 146                  | Nein                     |
| Release           | 146                  | Nein                     |

- `dom.navigation.webidl.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Trusted Types API

Die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) bietet Mechanismen, um sicherzustellen, dass Funktionen, die potenziell als Vektoren für XSS-Angriffe verwendet werden können, nur mit Daten aufgerufen werden können, die validiert oder gesäubert wurden. Die API ist in frühen Beta-Releases aktiviert ([Firefox-Fehler 1992941](https://bugzil.la/1992941)).

Dies umfasst (nicht abschließend):

- Hinzufügung von [`TrustedTypePolicyFactory`](/de/docs/Web/API/TrustedTypePolicyFactory), [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy), [`TrustedHTML`](/de/docs/Web/API/TrustedHTML), [`TrustedScript`](/de/docs/Web/API/TrustedScript), [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)-Schnittstellen sowie der `trustedTypes`-Eigenschaft in [`Window`](/de/docs/Web/API/Window/trustedTypes) und [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope/trustedTypes).
- Updates an [Injection-Sink-Schnittstellen](/de/docs/Web/API/Trusted_Types_API#injection_sink_interfaces), wie [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) und [`document.write()`](/de/docs/Web/API/Document/write), um das `TrustedHTML`, `TrustedScript`, `TrustedScriptURL` wie auch Zeichenfolgen zuzulassen.
- Unterstützung für die [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) und [`trusted-types`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/trusted-types) Direktiven sowie das [`'trusted-types-eval'`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#trusted-types-eval) Stichwort des {{HTTPHeader("Content-Security-Policy")}} HTTP-Headers. Diese können verwendet werden, um vertrauenswürdige Typen anstelle von Zeichenfolgen zu erzwingen, die spezifischen Richtlinien zu benennen, die erlaubt sind, und um Funktionen wie [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) zu erlauben, wenn [Trusted Types](/de/docs/Web/API/Trusted_Types_API) unterstützt und erzwungen werden.

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 145                  | Ja                       |
| Developer Edition | 145                  | Ja                       |
| Beta              | 145                  | Ja                       |
| Release           | 133                  | Nein                     |

- `dom.security.trusted_types.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### HTML Sanitizer API

Die [HTML Sanitizer API](/de/docs/Web/API/HTML_Sanitizer_API) ermöglicht es Entwicklern, nicht vertrauenswürdige HTML-Zeichenfolgen zu nehmen und sie zu säubern, um sicher in das DOM eines Dokuments eingefügt zu werden.

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 146                  | Ja                       |
| Developer Edition | 147                  | Ja                       |
| Beta              | 147                  | Ja                       |
| Release           | 138                  | Nein                     |

- `dom.security.sanitizer.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Entfernung der Ereignisse `beforescriptexecute` und `afterscriptexecute`

Die nicht standardmäßigen Ereignisse [`beforescriptexecute`](/de/docs/Web/API/Document/beforescriptexecute_event) und [`afterscriptexecute`](/de/docs/Web/API/Document/afterscriptexecute_event) auf der [`Document`](/de/docs/Web/API/Document) Schnittstelle sowie [`afterscriptexecute`](/de/docs/Web/API/Element/afterscriptexecute_event) und [`beforescriptexecute`](/de/docs/Web/API/Element/beforescriptexecute_event) auf der [`Element`](/de/docs/Web/API/Element) Schnittstelle stehen kurz vor der Entfernung. Sie wurden in Nightly deaktiviert. ([Firefox-Fehler 1954685](https://bugzil.la/1954685)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 139                  | Nein                     |
| Developer Edition | 139                  | Ja                       |
| Beta              | 139                  | Ja                       |
| Release           | 139                  | Ja                       |

- `dom.events.script_execute.enable`
  - : Auf `true` setzen, um zu aktivieren.

### Benachrichtigungsaktionen und maxActions Eigenschaften

Die [`actions`](/de/docs/Web/API/Notification/actions) schreibgeschützte Eigenschaft und die [`maxActions`](/de/docs/Web/API/Notification/maxActions_static) statische schreibgeschützte Eigenschaft der [`Notification`](/de/docs/Web/API/Notification) Schnittstelle werden in Nightly auf dem Desktop unterstützt. Diese enthalten die Benachrichtigungsaktionen, die mit [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification) festgelegt wurden, sowie die maximale Anzahl an Aktionen, die festgelegt werden können. ([Firefox-Fehler 1225110](https://bugzil.la/1225110), [Firefox-Fehler 1963263](https://bugzil.la/1963263)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 138                  | Ja (nur Desktop)         |
| Developer Edition | 138                  | Nein                     |
| Beta              | 138                  | Nein                     |
| Release           | 138                  | Nein                     |

- `dom.webnotifications.actions.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Grafik: Canvas, WebGL und WebGPU

#### WebGL: Entwurfserweiterungen

Wenn diese Präferenz aktiviert ist, sind alle WebGL-Erweiterungen, die sich derzeit im „Entwurfs“-Status befinden und getestet werden, für die Verwendung aktiviert. Derzeit werden von Firefox keine WebGL-Erweiterungen getestet.

#### WebGPU API

Die [WebGPU API](/de/docs/Web/API/WebGPU_API) bietet Unterstützung auf niedriger Ebene für die Durchführung von Berechnungen und Grafikrendering unter Verwendung der [Graphics Processing Unit](https://en.wikipedia.org/wiki/Graphics_Processing_Unit) (GPU) des Geräts oder Computers des Benutzers. Ab Version 142 ist dies auf Windows in allen Kontexten mit Ausnahme von Service-Workern aktiviert. Für andere Plattformen ist es in Nightly aktiviert. Siehe [Firefox-Fehler 1602129](https://bugzil.la/1602129) für unseren Fortschritt bei dieser API.

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert?                      |
| ----------------- | -------------------- | --------------------------------------------- |
| Nightly           | 141                  | Ja                                            |
| Developer Edition | 141                  | Nein (Ja unter Windows, keine Service-Worker) |
| Beta              | 141                  | Nein (Ja unter Windows, keine Service-Worker) |
| Release           | 141                  | Nein (Ja unter Windows, keine Service-Worker) |

- `dom.webgpu.enabled`
  - : Auf `true` setzen, um zu aktivieren (aktiviert in Nightly und auf Windows in allen Releases)
- `dom.webgpu.service-workers.enabled`
  - : Auf `true` setzen, um zu aktivieren (aktiviert in Nightly)

### Reporting API Unterstützung für CSP-Verstöße

Die [Reporting API](/de/docs/Web/API/Reporting_API) hat jetzt Unterstützung für die Meldung von Verstößen gegen die [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP).

[`Report`](/de/docs/Web/API/Report) Instanzen, die von der [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) Schnittstelle zurückgegeben werden, können jetzt einen `type` Wert von `"csp-violation"` und eine `body` Eigenschaft haben, die eine Instanz der [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody) Schnittstelle enthält. Dies ermöglicht es, dass CSP-Verstöße innerhalb einer Webseite gemeldet werden.

CSP-Verstoßberichte können auch an entfernte Endpunkte, die im CSP {{CSP("report-to")}}-Direktive namentlich aufgeführt sind, gesendet werden – Endpunktnamen und entsprechende URLs müssen zuerst im {{httpheader('Reporting-Endpoints')}} oder {{httpheader('Report-To')}} HTTP-Antwortheader definiert sein. Der Bericht ist eine Serialisierung des oben beschriebenen [`Report`](/de/docs/Web/API/Report)-Objekts, mit einer `body`-Eigenschaft, die eine Serialisierung einer [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody) Instanz ist.

Dieser Verstoßbericht ersetzt einen ähnlichen CSP-spezifischen Mechanismus zum Senden von Verstoßberichten, der die CSP {{CSP("report-uri")}} Direktive verwendet, um die URL des Berichts-Endpunkts festzulegen und ein [CSP-spezifisches JSON-Verstoßberichtsformat](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/report-uri#violation_report_syntax) hat. ([Firefox-Fehler 1391243](https://bugzil.la/1391243)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 130                  | Nein                     |
| Developer Edition | 130                  | Nein                     |
| Beta              | 130                  | Nein                     |
| Release           | 130                  | Nein                     |

- `dom.reporting.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### WebRTC und Medien

Die folgenden experimentellen Funktionen umfassen diejenigen, die in der [WebRTC API](/de/docs/Web/API/WebRTC_API), der [Web Audio API](/de/docs/Web/API/Web_Audio_API), der [Media Source Extensions API](/de/docs/Web/API/Media_Source_Extensions_API), der [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API) und der [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) zu finden sind.

#### Asynchrones Hinzufügen und Entfernen von SourceBuffer

Dies fügt den versprechensbasierten Methoden [`appendBufferAsync()`](/de/docs/Web/API/SourceBuffer/appendBufferAsync) und [`removeAsync()`](/de/docs/Web/API/SourceBuffer/removeAsync) zum Hinzufügen und Entfernen von MedienquellenBuffers zur [`SourceBuffer`](/de/docs/Web/API/SourceBuffer) Schnittstelle hinzu. Weitere Informationen finden Sie in [Firefox-Fehler 1280613](https://bugzil.la/1280613) und [Firefox-Fehler 778617](https://bugzil.la/778617).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 62                   | Nein                     |
| Developer Edition | 62                   | Nein                     |
| Beta              | 62                   | Nein                     |
| Release           | 62                   | Nein                     |

- `media.mediasource.experimental.enabled`
  - : Auf `true` setzen, um zu aktivieren.

#### AVIF-Konformitätsstrenge

Die `image.avif.compliance_strictness`-Präferenz kann verwendet werden, um die _Strenge_ zu steuern, die bei der Verarbeitung von [AVIF](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) Bildern angewendet wird. Dies ermöglicht es Firefox-Benutzern, Bilder anzuzeigen, die in einigen anderen Browsern gerendert werden, auch wenn sie nicht strikt konform sind.

| Release-Kanal     | Hinzugefügte Version | Standardwert |
| ----------------- | -------------------- | ------------ |
| Nightly           | 92                   | 1            |
| Developer Edition | 92                   | 1            |
| Beta              | 92                   | 1            |
| Release           | 92                   | 1            |

- `image.avif.compliance_strictness`
  - : Numerischer Wert, der eine _Strenge_ angibt. Erlaubte Werte sind:
    - `0`: Permissiv. Akzeptieren von Bildern mit Verstößen gegen die Spezifikation in Empfehlungen ("sollte"-Sprache) und Anforderungen ("muss"-Sprache), solange sie sicher oder eindeutig interpretiert werden können.
    - `1` **(Standard)**: Gemischt. Ablehnen von Verstößen gegen Anforderungen ("muss"), aber Verstöße gegen Empfehlungen ("sollte") zulassen.
    - `2`: Streng. Verweigern von Verstößen gegen spezifizierte Anforderungen oder Empfehlungen.

#### Unterstützung von JPEG XL

Firefox unterstützt [JPEG XL](https://jpeg.org/jpegxl/) Bilder, wenn diese Funktion aktiviert ist. Siehe [Firefox-Fehler 1539075](https://bugzil.la/1539075) für weitere Details.

Beachten Sie, dass, wie unten gezeigt, die Funktion nur auf Nightly-Builds verfügbar ist (unabhängig davon, ob die Präferenz gesetzt ist).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 90                   | Nein                     |
| Developer Edition | —                    | —                        |
| Beta              | —                    | —                        |
| Release           | —                    | —                        |

- `image.jxl.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### WebVR API

#### WebVR API (Deaktiviert)

Die veraltete [WebVR API](/de/docs/Web/API/WebVR_API) steht kurz vor der Entfernung. Sie ist standardmäßig auf allen Builds deaktiviert [Firefox-Fehler 1750902](https://bugzil.la/1750902).

| Release-Kanal     | Entfernungs-Version | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 98                  | Nein                     |
| Developer Edition | 98                  | Nein                     |
| Beta              | 98                  | Nein                     |
| Release           | 98                  | Nein                     |

- `dom.vr.enabled`
  - : Auf `true` setzen, um zu aktivieren.

#### HTMLMediaElement Eigenschaften: audioTracks und videoTracks

Wenn diese Funktion aktiviert ist, fügt sie allen HTML-Medienelementen die Eigenschaften [`HTMLMediaElement.audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks) und [`HTMLMediaElement.videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks) hinzu. Da Firefox jedoch derzeit keine mehreren Audio- und Videospuren unterstützt, funktionieren die häufigsten Anwendungsfälle für diese Eigenschaften nicht, daher sind sie beide standardmäßig deaktiviert. Weitere Informationen finden Sie in [Firefox-Fehler 1057233](https://bugzil.la/1057233).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 33                   | Nein                     |
| Developer Edition | 33                   | Nein                     |
| Beta              | 33                   | Nein                     |
| Release           | 33                   | Nein                     |

- `media.track.enabled`
  - : Auf `true` setzen, um zu aktivieren.

#### GeometryUtils Methoden: convertPointFromNode(), convertRectFromNode() und convertQuadFromNode()

Die `GeometryUtils` Methoden `convertPointFromNode()`, `convertRectFromNode()` und `convertQuadFromNode()` mappten den gegebenen Punkt, das Rechteck oder den Vierfachpunkt vom [`Node`](/de/docs/Web/API/Node), auf dem sie aufgerufen werden, zu einem anderen Knoten. (Siehe [Firefox-Fehler 918189](https://bugzil.la/918189) für weitere Details.)

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 31                   | Ja                       |
| Developer Edition | 31                   | Nein                     |
| Beta              | 31                   | Nein                     |
| Release           | 31                   | Nein                     |

- `layout.css.convertFromNode.enable`
  - : Auf `true` setzen, um zu aktivieren.

#### GeometryUtils Methode: getBoxQuads()

Die `GeometryUtils` Methode `getBoxQuads()` gibt die CSS-Boxen für einen [`Node`](/de/docs/Web/API/Node) relativ zu einem anderen Knoten oder Ansichtbereich zurück. (Siehe [Firefox-Fehler 917755](https://bugzil.la/917755) für weitere Details.)

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 31                   | Ja                       |
| Developer Edition | 31                   | Nein                     |
| Beta              | 31                   | Nein                     |
| Release           | 31                   | Nein                     |

- `layout.css.getBoxQuads.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Payment Request API

#### Primäre Zahlungsabwicklung

Die [Payment Request API](/de/docs/Web/API/Payment_Request_API) bietet Unterstützung für die Abwicklung von webbasierter Zahlungen innerhalb von Webinhalten oder Apps. Aufgrund eines Fehlers, der während des Testens der Benutzeroberfläche aufgetreten ist, haben wir beschlossen, die Einführung dieser API zu verschieben, während über potenzielle Änderungen an der API diskutiert wird. Die Arbeit ist im Gange. (Siehe [Firefox-Fehler 1318984](https://bugzil.la/1318984) für weitere Details.)

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 55                   | Nein                     |
| Developer Edition | 55                   | Nein                     |
| Beta              | 55                   | Nein                     |
| Release           | 55                   | Nein                     |

- `dom.payments.request.enabled`
  - : Auf `true` setzen, um zu aktivieren.
- `dom.payments.request.supportedRegions`
  - : Ländercodes als kommaseparierte Allowliste von Regionen (z. B. `US,CA`).

### WebShare API

Die [Web Share API](/de/docs/Web/API/Web_Share_API) ermöglicht das Teilen von Dateien, URLs und anderen Daten von einer Seite. Diese Funktion ist auf Android in allen Builds aktiviert, jedoch hinter einer Präferenz auf Desktop (außer wie unten angegeben).

| Release-Kanal     | Geänderte Version | Standardmäßig aktiviert?                    |
| ----------------- | ----------------- | ------------------------------------------- |
| Nightly           | 71                | Nein (Standard). Ja (Windows ab Version 92) |
| Developer Edition | 71                | Nein                                        |
| Beta              | 71                | Nein                                        |
| Release           | 71                | Nein (Desktop). Ja (Android).               |

- `dom.webshare.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Bildschirmorientierungs-API

#### ScreenOrientation.lock()

Die [`ScreenOrientation.lock()`](/de/docs/Web/API/ScreenOrientation/lock) Methode ermöglicht es, ein Gerät auf eine bestimmte Ausrichtung zu sperren, wenn dies vom Gerät unterstützt und durch die Browser-Sperrungsanforderungen erlaubt ist. In der Regel ist das Sperren der Ausrichtung nur auf mobilen Geräten erlaubt, wenn das Dokument im Vollbildmodus angezeigt wird. Weitere Informationen finden Sie in [Firefox-Fehler 1697647](https://bugzil.la/1697647).

| Release-Kanal     | Geänderte Version | Standardmäßig aktiviert? |
| ----------------- | ----------------- | ------------------------ |
| Nightly           | 111               | Ja                       |
| Developer Edition | 97                | Nein                     |
| Beta              | 97                | Nein                     |
| Release           | 97                | Nein                     |

- `dom.screenorientation.allow-lock`
  - : Auf `true` setzen, um zu aktivieren.

### Benachrichtigungen API

Benachrichtigungen haben die [`requireInteraction`](/de/docs/Web/API/Notification/requireInteraction) Eigenschaft standardmäßig auf Windows-Systemen und in der Nightly-Version auf `true` gesetzt ([Firefox-Fehler 1794475](https://bugzil.la/1794475)).

| Release-Kanal     | Geänderte Version | Standardmäßig aktiviert? |
| ----------------- | ----------------- | ------------------------ |
| Nightly           | 117               | Ja                       |
| Developer Edition | 117               | Nein                     |
| Beta              | 117               | Nein                     |
| Release           | 117               | Nur Windows              |

- `dom.webnotifications.requireinteraction.enabled`
  - : Auf `true` setzen, um zu aktivieren.

## Sicherheit und Datenschutz

### Markierung unsicherer Seiten

Die zwei `security.insecure_connection_text_*` Präferenzen fügen eine „Nicht sicher“-Textbeschriftung in der Adressleiste neben dem traditionellen Schloss-Symbol hinzu, wenn eine Seite unsicher geladen wird (d.h. unter Verwendung von {{Glossary("HTTP", "HTTP")}} statt {{Glossary("HTTPS", "HTTPS")}}). Die `browser.urlbar.trimHttps` Präferenz entfernt das `https:` Präfix von Adressleisten-URLs. Weitere Informationen finden Sie in [Firefox-Fehler 1853418](https://bugzil.la/1853418).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 121                  | Ja                       |
| Developer Edition | 60                   | Nein                     |
| Beta              | 60                   | Nein                     |
| Release           | 60                   | Nein                     |

- `security.insecure_connection_text.enabled`
  - : Auf `true` setzen, um das Textlabel für den normalen Browsing-Modus zu aktivieren.
- `security.insecure_connection_text.pbmode.enabled`
  - : Auf `true` setzen, um das Textlabel für den Privaten-Browsing-Modus zu aktivieren.
- `browser.urlbar.trimHttps`
  - : Auf `true` setzen, um das `https:` Präfix von Adressleisten-URLs zu trimmen.

### Einschränkung von Inhalten für Erwachsene mit `<meta name="rating">`

Das nicht standardmäßige [`<meta name="rating">`](/de/docs/Web/HTML/Reference/Elements/meta)-Element kann in eine Webseite eingefügt werden, um den Inhalt der Seite als eingeschränkt/für Erwachsene zu kennzeichnen. Zum Zeitpunkt der Erstellung dieses Dokuments gibt es zwei mögliche `content`-Werte, `adult` ([definiert von Google](https://developers.google.com/search/docs/specialty/explicit/guidelines#add-metadata)) und `RTA-5042-1996-1400-1577-RTA` ([definiert von ASACP](https://www.rtalabel.org/?content=howto#top)), die denselben Effekt haben (in Zukunft können mehr Optionen hinzugefügt werden).

Die folgenden `<meta>`-Elemente sind gleichwertig:

```html
<meta name="rating" content="adult" />
<meta name="rating" content="RTA-5042-1996-1400-1577-RTA" />
```

Browser, die dieses Element erkennen, können dann Maßnahmen ergreifen, um Benutzer daran zu hindern, die Inhalte anzusehen. Die Implementierung von Firefox ersetzt die Seite durch den Inhalt von `about:restricted`, das dem Benutzer erklärt, dass er versucht, eingeschränkte Inhalte anzuzeigen, erklärt warum er sie nicht sehen kann und ihm einen Rückkehrbutton zum Ausgangspunkt gibt, von dem er gekommen ist.

Weitere Informationen finden Sie in [Firefox-Fehler 1991135](https://bugzil.la/1991135).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 146                  | Nein                     |
| Developer Edition | 146                  | Nein                     |
| Beta              | 146                  | Nein                     |
| Release           | 146                  | Nein                     |

- `security.restrict_to_adults.always`
  - : Auf `true` setzen, um den Zugriff auf Webseiten einzuschränken, die sich selbst als für Erwachsene kennzeichnen, indem sie ein `<meta name="rating">`-Element enthalten.
- `security.restrict_to_adults.respect_platform`
  - : Auf `true` setzen, um den Zugriff auf Webseiten einzuschränken, die sich selbst als für Erwachsene kennzeichnen, indem sie ein `<meta name="rating">`-Element enthalten, nur wenn angemessene Kindersicherungen im zugrunde liegenden Betriebssystem eingestellt sind (z. B. die macOS _Content & Privacy_ Einstellungen auf die Einschränkung expliziter Web-Inhalte eingestellt sind).

### Berechtigungsrichtlinie / Funktionsrichtlinie

[Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) erlaubt es Webentwicklern, bestimmte Funktionen und APIs im Browser selektiv zu aktivieren, zu deaktivieren und ihr Verhalten zu modifizieren. Es ähnelt der CSP, regelt jedoch Funktionen statt Sicherheitsverhalten. Dies wird in Firefox als **Funktionsrichtlinie** implementiert, der Name, der in einer früheren Version der Spezifikation verwendet wurde.

Beachten Sie, dass unterstützte Richtlinien durch das [`allow`](/de/docs/Web/HTML/Reference/Elements/iframe#allow)-Attribut auf `<iframe>`-Elementen gesetzt werden können, auch wenn die Benutzereinstellung nicht gesetzt ist.

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 65                   | Nein                     |
| Developer Edition | 65                   | Nein                     |
| Beta              | 65                   | Nein                     |
| Release           | 65                   | Nein                     |

- `dom.security.featurePolicy.header.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Datenschutzgerechte Attributions-API (PPA)

[PPA API](https://support.mozilla.org/en-US/kb/privacy-preserving-attribution) bietet eine Alternative zum Benutzertracking für die Werbeattribution mithilfe des neuen `navigator.privateAttribution`-Objekts mit `saveImpression()` und `measureConversion()`-Methoden. Lesen Sie mehr über PPA [im originalen Erklärer](https://github.com/mozilla/explainers/tree/main/archive/ppa-experiment) und die [vorgeschlagene Spezifikation](https://w3c.github.io/ppa/). Dieses Experiment kann für Websites über [Origin Trial](https://wiki.mozilla.org/Origin_Trials) oder im Browser durch Setzen der Präferenz auf `1` aktiviert werden. ([Firefox-Fehler 1900929](https://bugzil.la/1900929)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 128                  | Nein                     |
| Developer Edition | 128                  | Nein                     |
| Beta              | 128                  | Nein                     |
| Release           | 128                  | Nein                     |

- `dom.origin-trials.private-attribution.state`
  - : Auf `true` setzen, um zu aktivieren.

## HTTP

### Integritätsrichtlinie für Stylesheet-Ressourcen

Die {{httpheader("Integrity-Policy")}} und {{httpheader("Integrity-Policy-Report-Only")}} HTTP-Header werden jetzt für Style-Ressourcen unterstützt. Diese ermöglichen es Websites, entweder [Subresource-Integritätsgarantien](/de/docs/Web/Security/Defenses/Subresource_Integrity) für Styles durchzusetzen oder Verstöße gegen die Richtlinie nur zu melden. Beachten Sie, dass Firefox Meldeendpunkte ignoriert und Verstöße in der Entwicklerkonsole protokolliert. Bei Verwendung von `Integrity-Policy` blockiert der Browser das Laden von Styles, die in einem {{HTMLElement("link")}}-Element mit [`rel="stylesheet"`](/de/docs/Web/HTML/Reference/Attributes/rel#stylesheet) referenziert werden, wenn sie entweder das [`integrity`](/de/docs/Web/HTML/Reference/Elements/script#integrity) Attribut fehlen oder ein Integritätshash haben, der nicht mit der Ressource auf dem Server übereinstimmt. ([Firefox-Fehler 1976656](https://bugzil.la/1976656)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 142                  | Nein                     |
| Developer Edition | 142                  | Nein                     |
| Beta              | 142                  | Nein                     |
| Release           | 142                  | Nein                     |

- `security.integrity_policy.stylesheet.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Storage-Access-Header

Die {{httpheader("Sec-Fetch-Storage-Access")}} und {{httpheader("Activate-Storage-Access")}} HTTP-Header werden jetzt unterstützt und ermöglichen einen effizienteren [Storage Access API](/de/docs/Web/API/Storage_Access_API) Arbeitsablauf. ([Firefox-Fehler 1991688](https://bugzil.la/1991688)).

Im rein JavaScript-basierten Arbeitsablauf muss eine Drittanbieterressource angefordert und geladen werden, um eine storage-access-Berechtigung für einen bestimmten Kontext zu aktivieren (z. B. einen neuen Browsertab). Dies ist erforderlich, selbst wenn die Berechtigung bereits erteilt wurde. Die Storage-Access-Header ermöglichen es dem Browser, den Berechtigungsstand für den bestimmten Kontext zu bewerben, sodass der Server die Aktivierung einer bereits erteilten Berechtigung anfordern kann. So wird der Overhead des unnötigen Abrufens und Ladens der Ressource vermieden.

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 145                  | Ja                       |
| Developer Edition | 145                  | Nein                     |
| Beta              | 145                  | Nein                     |
| Release           | 145                  | Nein                     |

- `dom.storage_access.headers.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Idempotenzschlüssel

Der {{httpheader("Idempotency-Key")}} HTTP-Anfrageheader kann von Website-Client-Code verwendet werden, um eine {{HTTPMethod("POST")}} oder {{HTTPMethod("PATCH")}}-Anfrage {{Glossary("idempotent", "idempotent")}} zu machen, wenn sie mit einem Server verwendet wird, der ihn unterstützt. Die Spezifikation gibt an, dass der Server dokumentieren und bewerben sollte, welche Endpunkte diesen Header erfordern, das Format des Schlüssels und erwartete Fehlermeldungen.

Firefox fügt dem Header _automatisch_ einen eindeutigen Schlüssel für jede neue `POST`-Anfrage hinzu, wenn sie nicht bereits von der Seite clientseitig hinzugefügt wurde. Dies vereinfacht den clientseitigen Code, der erforderlich ist, um mit Servern zu arbeiten, die die Funktion unterstützen.

([Firefox-Fehler 1830022](https://bugzil.la/1830022)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 135                  | Nein                     |
| Developer Edition | 135                  | Nein                     |
| Beta              | 135                  | Nein                     |
| Release           | 135                  | Nein                     |

- `network.http.idempotencyKey.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Accept-Header mit MIME-Typ image/jxl

Der HTTP [`Accept`](/de/docs/Web/HTTP/Reference/Headers/Accept) Header in [Standard- und Bildanfragen](/de/docs/Web/HTTP/Guides/Content_negotiation/List_of_default_Accept_values) kann über eine Präferenz konfiguriert werden, um Unterstützung für den `image/jxl` MIME-Typ anzuzeigen.

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 128                  | Nein                     |
| Developer Edition | 128                  | Nein                     |
| Beta              | 128                  | Nein                     |
| Release           | 128                  | Nein                     |

- `image.jxl.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### SameSite=Lax als Standard

[`SameSite`-Cookies](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) haben standardmäßig den Wert `Lax`. Mit dieser Einstellung werden Cookies nur gesendet, wenn ein Benutzer zur Ursprungswebsite navigiert, nicht jedoch für Anfragen von Dritten, um Bilder oder Frames in eine Drittanbieter-Seite und so weiter zu laden. Weitere Details finden Sie unter [Firefox-Fehler 1617609](https://bugzil.la/1617609).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 69                   | Nein                     |
| Developer Edition | 69                   | Nein                     |
| Beta              | 69                   | Nein                     |
| Release           | 69                   | Nein                     |

- `network.cookie.sameSite.laxByDefault`
  - : Auf `true` setzen, um zu aktivieren.

### Access-Control-Allow-Headers-Wildcard deckt Authorization nicht ab

Die [`Access-Control-Allow-Headers`](/de/docs/Web/HTTP/Reference/Headers/Access-Control-Allow-Headers) ist ein Antwortheader auf eine {{Glossary("Preflight_request", "CORS Preflight-Anfrage")}}, die angibt, welche Anfrageheader in der endgültigen Anfrage enthalten sein dürfen. Die Antwortdirektive kann einen Platzhalter (`*`) enthalten, der angibt, dass die endgültige Anfrage alle Header außer dem `Authorization`-Header enthalten darf.

Standardmäßig fügt Firefox den `Authorization`-Header in die endgültige Anfrage ein, nachdem er eine Antwort mit `Access-Control-Allow-Headers: *` erhalten hat. Setzen Sie die Präferenz auf `false`, um sicherzustellen, dass Firefox den `Authorization`-Header nicht einschließt. Weitere Details finden Sie unter [Firefox-Fehler 1687364](https://bugzil.la/1687364).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 115                  | Ja                       |
| Developer Edition | 115                  | Ja                       |
| Beta              | 115                  | Ja                       |
| Release           | 115                  | Ja                       |

- `network.cors_preflight.authorization_covered_by_wildcard`
  - : Auf `true` setzen, um zu aktivieren.

## Entwicklerwerkzeuge

Die Entwicklerwerkzeuge von Mozilla entwickeln sich ständig weiter. Wir experimentieren mit neuen Ideen, fügen neue Funktionen hinzu und testen sie in den Nightly- und Developer Edition-Kanälen, bevor wir sie in den Beta- und Release-Kanälen freigeben. Die folgenden Funktionen sind die aktuelle Ernte der experimentellen Entwicklerwerkzeug-Funktionen.

**Keine experimentellen Funktionen in diesem Veröffentlichungszyklus.**

## Siehe auch

- [Firefox Entwickler Versionshinweise](/de/docs/Mozilla/Firefox/Releases)
- [Firefox Nightly](https://www.firefox.com/en-US/channel/desktop/)
- [Firefox Developer Edition](https://www.firefox.com/en-US/channel/desktop/developer/)
