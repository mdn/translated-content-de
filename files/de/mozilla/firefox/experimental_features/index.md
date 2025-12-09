---
title: Experimentelle Funktionen in Firefox
short-title: Experimentelle Funktionen
slug: Mozilla/Firefox/Experimental_features
l10n:
  sourceCommit: ad40e26d0c73635f7803d88ec29caffd9c873697
---

Diese Seite listet experimentelle und teilweise implementierte Funktionen in Firefox auf, einschließlich sich entwickelnder oder vorgeschlagener Webplattform-Standards. Jeder Eintrag enthält Informationen zu den Builds, in die eine Funktion integriert ist (Nightly, Beta, Developer Edition oder Release), ob sie standardmäßig aktiviert ist oder nicht, und den Namen der **Einstellung**, mit der Sie die Funktion aktivieren oder konfigurieren können. Die Beschreibung jeder Funktion enthält auch Links zu den relevanten [Bugzilla-Bugs](https://bugzilla.mozilla.org), die die Funktion implementieren oder aktivieren. Diese Informationen ermöglichen es Ihnen, experimentelle Funktionen auszuprobieren und Feedback zu geben, bevor sie offiziell veröffentlicht werden.

In Bezug auf den Lebenszyklus erscheinen neue Funktionen normalerweise zuerst in [Nightly](https://www.firefox.com/en-US/channel/desktop/#nightly), wo sie häufig standardmäßig aktiviert sind, um frühzeitiges Feedback und Tests zu ermöglichen. Wenn keine größeren Probleme gefunden werden, sind sie in den Builds der [Beta](https://www.firefox.com/en-US/channel/desktop/#beta) und der [Developer Edition](https://www.firefox.com/en-US/channel/desktop/developer/) vor der Veröffentlichung enthalten. Schließlich werden genehmigte Funktionen im stabilen [Release](https://www.firefox.com/en-US/) ausgeliefert. Wenn eine Funktion standardmäßig in einer Veröffentlichung aktiviert ist, gilt sie nicht mehr als experimentell und wird von dieser Seite entfernt.

Um diese Funktionen zu aktivieren, geben Sie `about:config` in die Adressleiste von Firefox ein, suchen Sie die zugehörige **Einstellung** und ändern Sie ihren Wert, der in der Regel zwischen `true` und `false` umgeschaltet wird. Abhängig von der Funktion müssen Sie möglicherweise den Browser neu starten, damit die Änderung wirksam wird. Weitere Informationen zur Verwaltung von Einstellungen in Firefox finden Sie im [Firefox-Konfigurations-Editor](https://support.mozilla.org/en-US/kb/about-config-editor-firefox) Support-Artikel.

## HTML

### Layout für input type="search"

Das Layout für `input type="search"` wurde aktualisiert. Dadurch hat ein Suchfeld ein Löschsymbol, sobald jemand darin zu tippen beginnt, um andere Browserimplementierungen anzupassen. (Siehe [Firefox-Bug 558594](https://bugzil.la/558594) für weitere Details.)

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 81                   | Nein                     |
| Developer Edition      | 81                   | Nein                     |
| Beta                   | 81                   | Nein                     |
| Release                | 81                   | Nein                     |

- `layout.forms.input-type-search.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Umschalten der Passwortanzeige

HTML-Passworteingabeelemente ([`<input type="password">`](/de/docs/Web/HTML/Reference/Elements/input/password)) enthalten ein "Auge"-Symbol, das umgeschaltet werden kann, um den Passworttext anzuzeigen oder zu verbergen ([Firefox-Bug 502258](https://bugzil.la/502258)).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 96                   | Nein                     |
| Developer Edition      | 96                   | Nein                     |
| Beta                   | 96                   | Nein                     |
| Release                | 96                   | Nein                     |

- `layout.forms.reveal-password-button.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Zeitwähler für datetime-local Eingabefeld

HTML datetime-local Eingabeelemente ([`<input type="datetime-local">`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local)) enthalten jetzt einen Zeitwähler ([Firefox-Bug 1726108](https://bugzil.la/1726108)).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 144                  | Nein                     |
| Developer Edition      | 144                  | Nein                     |
| Beta                   | 144                  | Nein                     |
| Release                | 144                  | Nein                     |

- `dom.forms.datetime.timepicker`
  - : Auf `true` setzen, um zu aktivieren.

## CSS

### Hex-Boxen zur Anzeige von fehlgeleiteten Steuerzeichen

Diese Funktion rendert Steuerzeichen (Unicode-Kategorie Cc) außer _Tab_ (`U+0009`), _Zeilenumbruch_ (`U+000A`), _Formfeed_ (`U+000C`) und _Wagenrücklauf_ (`U+000D`) als Hex-Boxen, wenn sie nicht erwartet werden. (Siehe [Firefox-Bug 1099557](https://bugzil.la/1099557) für weitere Details.)

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 43                   | Ja                       |
| Developer Edition      | 43                   | Nein                     |
| Beta                   | 43                   | Nein                     |
| Release                | 43                   | Nein                     |

- `layout.css.control-characters.visible`
  - : Auf `true` setzen, um zu aktivieren.

### initial-letter Eigenschaft

Die {{cssxref("initial-letter")}} CSS-Eigenschaft ist Teil der [CSS Inline Layout](https://drafts.csswg.org/css-inline/) Spezifikation und erlaubt es Ihnen zu spezifizieren, wie fallende, erhöhte und versenkte Initialbuchstaben angezeigt werden. (Siehe [Firefox-Bug 1223880](https://bugzil.la/1223880) für weitere Details.)

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 50                   | Nein                     |
| Developer Edition      | 50                   | Nein                     |
| Beta                   | 50                   | Nein                     |
| Release                | 50                   | Nein                     |

- `layout.css.initial-letter.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### fit-content() Funktion

Die {{cssxref("fit-content_function", "fit-content()")}} Funktion, wie sie bei {{cssxref("width")}} und anderen Größenangaben angewendet wird. Diese Funktion wird bereits gut für CSS-Grid-Layout-Spurenunterteilungen unterstützt. (Siehe [Firefox-Bug 1312588](https://bugzil.la/1312588) für weitere Details.)

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 91                   | Nein                     |
| Developer Edition      | 91                   | Nein                     |
| Beta                   | 91                   | Nein                     |
| Release                | 91                   | Nein                     |

- `layout.css.fit-content-function.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Scrollgesteuerte Animationen

Früher als "scrollverknüpfte Animationen" bezeichnet, hängt eine [scrollgesteuerte Animation](/de/docs/Web/CSS/Guides/Scroll-driven_animations) von der Scroll-Position eines Scrollbalkens ab, anstatt von Zeit oder einer anderen Dimension.
Die {{cssxref('scroll-timeline-name')}} und {{cssxref('scroll-timeline-axis')}} Eigenschaften (und die {{cssxref('scroll-timeline')}} abgeleitete Eigenschaft) erlauben es Ihnen zu spezifizieren, dass ein bestimmter Scrollbalken in einem bestimmten benannten Container als Quelle für eine scrollgesteuerte Animation verwendet werden kann.
Die Scroll-Zeitachse kann dann mit einer [Animation](/de/docs/Web/CSS/Guides/Animations) durch Setzen der {{cssxref('animation-timeline')}} Eigenschaft auf den definierten Namenswert `scroll-timeline-name` assoziiert werden.

Bei Verwendung der abgeleiteten Eigenschaft {{cssxref('scroll-timeline')}} muss die Reihenfolge der Eigenschaftswerte {{cssxref('scroll-timeline-name')}} gefolgt von {{cssxref('scroll-timeline-axis')}} sein.
Die ausführlichen Eigenschaften und die abgeleitete Eigenschaft sind beide hinter der Einstellung verfügbar.
Alternativ können Sie die [`scroll()`](/de/docs/Web/CSS/Reference/Properties/animation-timeline/scroll) funktionale Notation mit {{cssxref('animation-timeline')}} verwenden, um anzugeben, dass eine Scrollbalkenachse in einem übergeordneten Element für die Zeitachse verwendet wird.

Für weitere Informationen siehe [Firefox-Bug 1807685](https://bugzil.la/1807685), [Firefox-Bug 1804573](https://bugzil.la/1804573), [Firefox-Bug 1809005](https://bugzil.la/1809005), [Firefox-Bug 1676791](https://bugzil.la/1676791), [Firefox-Bug 1754897](https://bugzil.la/1754897), [Firefox-Bug 1817303](https://bugzil.la/1817303) und [Firefox-Bug 1737918](https://bugzil.la/1737918).

Die {{cssxref('timeline-scope')}}, {{cssxref('animation-range-start')}} und {{cssxref('animation-range-end')}} Eigenschaften (und die {{cssxref('animation-range')}} abgeleitete Eigenschaft) werden noch nicht unterstützt. Für weitere Informationen siehe [Firefox-Bug 1676779](https://bugzil.la/1676779).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 136                  | Ja                       |
| Developer Edition      | 110                  | Nein                     |
| Beta                   | 110                  | Nein                     |
| Release                | 110                  | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### prefers-reduced-transparency Media Feature

Das CSS [`prefers-reduced-transparency`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-transparency) Media-Feature lässt Sie erkennen, ob ein Benutzer die Einstellung aktiviert hat, um die Menge an transparenten oder durchscheinenden Schichteffekten auf seinem Gerät zu minimieren.
Siehe ([Firefox-Bug 1736914](https://bugzil.la/1736914)) für weitere Details.

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 113                  | Nein                     |
| Developer Edition      | 113                  | Nein                     |
| Beta                   | 113                  | Nein                     |
| Release                | 113                  | Nein                     |

- `layout.css.prefers-reduced-transparency.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### inverted-colors Media Feature

Das CSS [`inverted-colors`](/de/docs/Web/CSS/Reference/At-rules/@media/inverted-colors) Media-Feature lässt Sie erkennen, ob ein User Agent oder das zugrunde liegende Betriebssystem Farben invertiert.
Siehe ([Firefox-Bug 1794628](https://bugzil.la/1794628)) für weitere Details.

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 114                  | Nein                     |
| Developer Edition      | 114                  | Nein                     |
| Beta                   | 114                  | Nein                     |
| Release                | 114                  | Nein                     |

- `layout.css.inverted-colors.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Named View Progress Timelines Eigenschaft

Die CSS [`view-timeline-name`](/de/docs/Web/CSS/Reference/Properties/view-timeline-name) Eigenschaft lässt Sie einem bestimmten Element einen Namen geben, der angibt, dass sein Vorfahre Scroll-Element die Quelle einer Ansichtsfortschritts-Zeitleiste ist.
Der Name kann dann der `animation-timeline` zugewiesen werden, die das zugehörige Element animiert, während es sich durch den sichtbaren Bereich seines Vorfahrenscrollers bewegt.
Siehe ([Firefox-Bug 1737920](https://bugzil.la/1737920)) für weitere Details.

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 114                  | Nein                     |
| Developer Edition      | 114                  | Nein                     |
| Beta                   | 114                  | Nein                     |
| Release                | 114                  | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Anonyme View Progress Timelines Funktion

Die CSS [`view()`](/de/docs/Web/CSS/Reference/Properties/animation-timeline/view) Funktion lässt Sie spezifizieren, dass die `animation-timeline` für ein Element eine Ansichtsfortschritts-Zeitleiste ist, die das Element animiert, während es durch den sichtbaren Bereich seines Vorfahrenscrollers bewegt wird.
Die Funktion definiert die Achse des übergeordneten Elements, das die Zeitleiste liefert, zusammen mit dem Inset innerhalb des sichtbaren Bereichs, bei dem die Animation beginnt und endet.
Siehe ([Firefox-Bug 1808410](https://bugzil.la/1808410)) für weitere Details.

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 114                  | Nein                     |
| Developer Edition      | 114                  | Nein                     |
| Beta                   | 114                  | Nein                     |
| Release                | 114                  | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Herstellerpräfixierte Transformations-Eigenschaften

Die mit `-moz-` vorangestellten [CSS-Transformations](/de/docs/Web/CSS/Guides/Transforms)-Eigenschaften können deaktiviert werden, indem die `layout.css.prefixes.transforms` Einstellung auf `false` gesetzt wird.
Die Absicht ist, diese zu deaktivieren, sobald die standardmäßigen CSS-Zoom-Eigenschaften gut unterstützt werden.
([Firefox-Bug 1886134](https://bugzil.la/1886134), [Firefox-Bug 1855763](https://bugzil.la/1855763)).

Insbesondere wird diese Einstellung die folgenden vorangestellten Eigenschaften deaktivieren:

- `-moz-backface-visibility`
- `-moz-perspective`
- `-moz-perspective-origin`
- `-moz-transform`
- `-moz-transform-origin`
- `-moz-transform-style`

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 120                  | Ja                       |
| Developer Edition      | 120                  | Ja                       |
| Beta                   | 120                  | Ja                       |
| Release                | 120                  | Ja                       |

- `layout.css.prefixes.transforms`
  - : Auf `true` setzen, um zu aktivieren.

### `shape()` Funktion

Die CSS [`shape()`](/de/docs/Web/CSS/Reference/Values/basic-shape/shape) Funktion ist ein [`<basic-shape>`](/de/docs/Web/CSS/Reference/Values/basic-shape) Datentyp, mit dem Sie eine Form in den {{cssxref("clip-path")}} und {{cssxref("offset-path")}} Eigenschaften mit einem oder mehreren "Formbefehlen" definieren können.
Diese Befehle sind sehr ähnlich den [SVG-Pfadbefehlen](/de/docs/Web/SVG/Reference/Attribute/d#path_commands).
Die `shape()` Funktion ist in gewisser Hinsicht ähnlich der {{cssxref("basic-shape/path","path()")}} Funktion, verwendet jedoch im Gegensatz zu `path()`, das die [SVG-Pfad](/de/docs/Web/SVG/Reference/Element/path)-Syntax verwendet, eine standardmäßige CSS-Syntax.
Dies ermöglicht es Ihnen, Formen leicht zu erstellen und zu bearbeiten, und erlaubt auch die Verwendung von CSS-Math-Funktionen.
Für weitere Details siehe [Firefox-Bug 1823463](https://bugzil.la/1823463) für die Unterstützung der `shape()` Funktion in `clip-path`, [Firefox-Bug 1884424](https://bugzil.la/1884424) für die Unterstützung der Funktion in `offset-path`, und [Firefox-Bug 1884425](https://bugzil.la/1884425) für ihre Interpolationsunterstützung.

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 126                  | Ja                       |
| Developer Edition      | 126                  | Nein                     |
| Beta                   | 126                  | Nein                     |
| Release                | 126                  | Nein                     |

- `layout.css.basic-shape-shape.enabled`
  - : Auf `true` setzen, um zu aktivieren.

#### Relative Kontrollpunkte in CSS `shape()` Kurvenbefehlen

Sie können [`<relative-control-point>`](/de/docs/Web/CSS/Reference/Values/basic-shape/shape#relative-control-point) Werte verwenden, wenn Sie einen [`<curve-command>`](/de/docs/Web/CSS/Reference/Values/basic-shape/shape#curve-command) oder [`<smooth-command>`](/de/docs/Web/CSS/Reference/Values/basic-shape/shape#smooth-command) in einer CSS `shape()` Funktion angeben.
Diese Werte lassen Sie Kontrollpunkte spezifizieren, die relativ zum Start- oder Endpunkt des aktuellen Befehls oder relativ zum Ursprung (oben links) des Containers, in dem die Form gezeichnet wird, positioniert sind.
([Firefox-Bug 1921501](https://bugzil.la/1921501)).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 146                  | Ja                       |
| Developer Edition      | 146                  | Nein                     |
| Beta                   | 146                  | Nein                     |
| Release                | 146                  | Nein                     |

- `layout.css.basic-shape-shape.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Symmetrisches `letter-spacing`

Die CSS {{cssxref("letter-spacing")}} Eigenschaft teilt nun den spezifischen Zeichenabstand gleichmäßig auf beiden Seiten jedes Zeichens auf.
Dies ist im Gegensatz zum aktuellen Verhalten, bei dem der Abstand in erster Linie zu einer Seite hinzugefügt wird.
Dieser Ansatz kann den Textabstand verbessern, insbesondere bei Text mit gemischter Richtung.
([Firefox-Bug 1891446](https://bugzil.la/1891446)).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 128                  | Ja                       |
| Developer Edition      | 128                  | Ja                       |
| Beta                   | 127                  | Nein                     |
| Release                | 127                  | Nein                     |

- `layout.css.letter-spacing.model`
  - : Auf `true` setzen, um zu aktivieren.

### `calc()` Unterstützung für Farbkanäle in relativen Farben

Die CSS [`calc()`](/de/docs/Web/CSS/Reference/Values/calc) Funktion kann jetzt Farbkanäle in [relativen Farben](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors#using_math_functions) analysieren, was es Ihnen ermöglicht, Änderungen an Farben in verschiedenen Farbräumen oder bei der Verwendung verschiedener funktionaler Notationen korrekt zu berechnen [Firefox-Bug 1889561](https://bugzil.la/1889561).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 127                  | Ja                       |
| Developer Edition      | 127                  | Nein                     |
| Beta                   | 127                  | Nein                     |
| Release                | 127                  | Nein                     |

- `layout.css.relative-color-syntax.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### CSS-Ankersetzung

Das [CSS Anchor Positioning](/de/docs/Web/CSS/Guides/Anchor_positioning) Modul definiert eine Reihe von Funktionen, die es erlauben, Elemente als Ankarelemente zu definieren und für andere Elemente, relativ zu den Ankarelementen positioniert zu werden.
Dies ermöglicht es beispielsweise, Tooltips neben dem zugehörigen Inhalt anzuzeigen, während dieser durch das Ansichtsfenster scrollt, sich bei Bedarf bewegt, wenn es über das Ansichtsfenster hinausragen würde, und verschwindet, wenn das Ankerelement vom Bildschirm verschwindet.
Die Menge an Funktionen wird schrittweise hinter einer Einstellung ausgerollt (allgemein: [Firefox-Bug 1988224](https://bugzil.la/1988224), {{cssxref("position-area")}}: [Firefox-Bug 1924086](https://bugzil.la/1924086), benutzerdefinierte {{cssxref("@position-try")}} Fallbacks: [Firefox-Bug 1962598](https://bugzil.la/1962598)).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 145                  | Ja                       |
| Developer Edition      | 131                  | Nein                     |
| Beta                   | 131                  | Nein                     |
| Release                | 131                  | Nein                     |

- `layout.css.anchor-positioning.enabled`
  - : Auf `true` setzen, um zu aktivieren.

#### `anchor-size()` Funktion

Die CSS {{CSSXRef("anchor-size")}} Funktion lässt Sie die Größe, Position und Ränder eines Anker-positionierten Elements relativ zu den Abmessungen seines Ankerelements einstellen.
([Firefox-Bug 1972610](https://bugzil.la/1972610)).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 145                  | Ja                       |
| Developer Edition      | 142                  | Nein                     |
| Beta                   | 142                  | Nein                     |
| Release                | 142                  | Nein                     |

- `layout.css.anchor-positioning.enabled`
  - : Auf `true` setzen, um zu aktivieren.

#### `position-area` Eigenschaft

Die CSS {{CSSXRef("position-area")}} Eigenschaft erlaubt es Ihnen, ein Anker-positioniertes Element relativ zu den Kanten seines zugehörigen Ankerelements zu positionieren, indem das positionierte Element auf einer oder mehreren Kacheln eines impliziten 3x3 Rasters platziert wird, wobei das Ankerelement die mittlere Zelle ist.
([Firefox-Bug 1924086](https://bugzil.la/1924086)).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 145                  | Ja                       |
| Developer Edition      | 145                  | Nein                     |
| Beta                   | 145                  | Nein                     |
| Release                | 145                  | Nein                     |

- `layout.css.anchor-positioning.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Erlauben von Pseudo-Elementen nach element-basierten Pseudo-Elementen

Es wurde begonnen, die Erlaubnis dafür zu schaffen, [Pseudo-Elemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) wie {{cssxref("::first-letter")}} und {{cssxref("::before")}} an [element-basierte Pseudo-Elemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements#element-backed_pseudo-elements) wie {{cssxref("::details-content")}} und {{cssxref("::file-selector-button")}} anzuhängen.

Dies erlaubt es Benutzern, beispielsweise den ersten Buchstaben des {{htmlElement("details")}}-Elements durch die Verwendung des CSS-Selektors `::details-content::first-letter` zu stylen oder Inhalte vor einem {{HTMLElement("input") }} von [`type="file"`](/de/docs/Web/HTML/Reference/Elements/input/file) mit dem CSS-Selektor `::file-selector-button::before` hinzuzufügen.

Derzeit kann nur die Unterstützung für `::details-content::first-letter` mithilfe von `@supports(::details-content::first-letter)` geparst werden. Das Pseudo-Element `::file-selector-button` ist noch nicht als element-basiertes Pseudo-Element markiert, sodass es keine Möglichkeit gibt, dies zu testen.
([Firefox-Bug 1953557](https://bugzil.la/1953557), [Firefox-Bug 1941406](https://bugzil.la/1941406)).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 138                  | Nein                     |
| Developer Edition      | 138                  | Nein                     |
| Beta                   | 138                  | Nein                     |
| Release                | 138                  | Nein                     |

### `:heading` und `:heading()` Pseudo-Klassen

Die [`:heading`](/de/docs/Web/CSS/Reference/Selectors/:heading) Pseudo-Klasse ermöglicht es Ihnen, alle [Überschriftelemente](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) (`<h1>`-`<h6>`) auf einmal zu stylen, anstatt sie einzeln zu erfassen. Die [`:heading()`](/de/docs/Web/CSS/Reference/Selectors/:heading_function) funktionale Pseudo-Klasse ermöglicht es Ihnen, Überschriftelemente zu stylen, die zu einer durch Kommas getrennten Liste von Ganzzahlen passen, die den Überschriftsebenen entsprechen.
([Firefox-Bug 1974386](https://bugzil.la/1974386) & [Firefox-Bug 1984310](https://bugzil.la/1984310)).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 142                  | Nein                     |
| Developer Edition      | 142                  | Nein                     |
| Beta                   | 142                  | Nein                     |
| Release                | 142                  | Nein                     |

- `layout.css.heading-selector.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### `text-decoration-trim`

Die CSS `text-decoration-trim` Eigenschaft ermöglicht es Ihnen, {{cssxref("text-decoration")}}-Start- und End-Offsets zu spezifizieren, um Textdekorationen mit Bezug auf den Text zu kürzen, zu verlängern oder ihre Position zu verschieben ([Firefox-Bug 1979915](https://bugzil.la/1979915)).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 145                  | Nein                     |
| Developer Edition      | 145                  | Nein                     |
| Beta                   | 145                  | Nein                     |
| Release                | 145                  | Nein                     |

- `layout.css.text-decoration-trim.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### `@custom-media` At-Regel

Die [`@custom-media`](/de/docs/Web/CSS/Reference/At-rules/@custom-media) CSS-@-Regel definiert Aliase für lange oder komplexe Media Queries. Anstatt die gleiche hartcodierte `<media-query-list>` in mehreren `@media`-@-Regeln zu wiederholen, kann sie einmal in einer `@custom-media`-@-Regel definiert und im Stylesheet überall verwendet werden, wo sie benötigt wird. ([Firefox-Bug 1744292](https://bugzil.la/1744292)).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 146                  | Nein                     |
| Developer Edition      | 146                  | Nein                     |
| Beta                   | 146                  | Nein                     |
| Release                | 146                  | Nein                     |

- `layout.css.custom-media.enabled`
  - : Auf `true` setzen, um zu aktivieren.

## SVG

**Keine experimentellen Funktionen in diesem Release-Zyklus.**

## JavaScript

### CSS-Modulscripts

CSS-Modulscripts werden jetzt unterstützt und ermöglichen, ein Stylesheet als Instanz von [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet) mittels der [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)-Anweisung in ein Script zu laden.
Die `import`-Anweisung muss auch das `type` [import-Attribut](/de/docs/Web/JavaScript/Reference/Statements/import/with) spezifizieren und auf `"css"` setzen, und das Stylesheet muss mit dem [Medientyp](/de/docs/Web/HTTP/Guides/MIME_types) `text/css` bereitgestellt werden.
([Firefox-Bug 1720570](https://bugzil.la/1720570)).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 145                  | Nein                     |
| Developer Edition      | Nein                 | Nein                     |
| Beta                   | Nein                 | Nein                     |
| Release                | Nein                 | Nein                     |

- `layout.css.module-scripts.enabled`
  - : Auf `true` setzen, um zu aktivieren.

## APIs

### CloseWatcher Schnittstelle

Eingebaute Webkomponenten mit "öffnen" und "schließen" Semantik, wie modale Dialoge und Popovers, können mit Geräte-nativen Mechanismen geschlossen werden. Beispielsweise können Sie auf Android einen Dialog mit der Zurück-Taste schließen.
Die [`CloseWatcher`](/de/docs/Web/API/CloseWatcher) Schnittstelle ermöglicht es Entwicklern, UI-Komponenten zu implementieren, wie benutzerdefinierte Sidebars, die ähnlich mit nativen Mechanismen geschlossen werden können.
([Firefox-Bug 1888729](https://bugzil.la/1888729)).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert?      |
| ---------------------- | -------------------- | ----------------------------- |
| Nightly                | 140                  | Ja (Desktop). Nein (Android). |
| Developer Edition      | 132                  | Nein                          |
| Beta                   | 132                  | Nein                          |
| Release                | 132                  | Nein                          |

- `dom.closewatcher.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Trusted Types API

Die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) stellt Mechanismen bereit, um sicherzustellen, dass Funktionen, die potenziell als Vektoren für XSS-Angriffe verwendet werden könnten, nur mit Daten aufgerufen werden können, die validiert oder bereinigt wurden.
Die API ist in frühen Betaversionen aktiviert ([Firefox-Bug 1992941](https://bugzil.la/1992941)).

Dies umfasst (nicht erschöpfend):

- Hinzufügen der [`TrustedTypePolicyFactory`](/de/docs/Web/API/TrustedTypePolicyFactory), [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy), [`TrustedHTML`](/de/docs/Web/API/TrustedHTML), [`TrustedScript`](/de/docs/Web/API/TrustedScript), [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL) Schnittstellen und der `trustedTypes` Eigenschaft auf [`Window`](/de/docs/Web/API/Window/trustedTypes) und [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope/trustedTypes).
- Aktualisierungen zu [Injektionen-Zielschnittstellen](/de/docs/Web/API/Trusted_Types_API#injection_sink_interfaces), wie [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) und [`document.write()`](/de/docs/Web/API/Document/write), um das Übergeben von `TrustedHTML`, `TrustedScript`, `TrustedScriptURL` sowie von Strings zu erlauben.
- Unterstützung für die [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) und [`trusted-types`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/trusted-types) Direktiven sowie das [`'trusted-types-eval'`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#trusted-types-eval) Schlüsselwort, des {{HTTPHeader("Content-Security-Policy")}} HTTP-Headers.
  Diese können verwendet werden, um vertrauenswürdige Typen anstelle von Strings zu erzwingen, die spezifischen Richtlinien zu benennen, die erlaubt sind, und um die Verwendung von [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) und ähnlichen Funktionen zu ermöglichen, wenn [Trusted Types](/de/docs/Web/API/Trusted_Types_API) unterstützt und erzwungen werden.

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 145                  | Ja                       |
| Developer Edition      | 145                  | Ja                       |
| Beta                   | 145                  | Ja                       |
| Release                | 133                  | Nein                     |

- `dom.security.trusted_types.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### HTML Sanitizer API

Die [HTML Sanitizer API](/de/docs/Web/API/HTML_Sanitizer_API) ermöglicht Entwicklern, unzuverlässige HTML-Strings zu entnehmen und sie zur sicheren Einfügung in das DOM eines Dokuments zu bereinigen.

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 146                  | Ja                       |
| Developer Edition      | 147                  | Ja                       |
| Beta                   | 147                  | Ja                       |
| Release                | 138                  | Nein                     |

- `dom.security.sanitizer.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Entfernung von `beforescriptexecute` und `afterscriptexecute` Ereignissen

Die nicht standardmäßigen Ereignisse [`beforescriptexecute`](/de/docs/Web/API/Document/beforescriptexecute_event) und [`afterscriptexecute`](/de/docs/Web/API/Document/afterscriptexecute_event) auf der [`Document`](/de/docs/Web/API/Document) Schnittstelle und [`afterscriptexecute`](/de/docs/Web/API/Element/afterscriptexecute_event) und [`beforescriptexecute`](/de/docs/Web/API/Element/beforescriptexecute_event) auf der [`Element`](/de/docs/Web/API/Element) Schnittstelle sind auf dem Weg zur Entfernung. Sie wurden in Nightly deaktiviert.
([Firefox-Bug 1954685](https://bugzil.la/1954685)).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 139                  | Nein                     |
| Developer Edition      | 139                  | Ja                       |
| Beta                   | 139                  | Ja                       |
| Release                | 139                  | Ja                       |

- `dom.events.script_execute.enable`
  - : Auf `true` setzen, um zu aktivieren.

### Eigenschaften `actions` und `maxActions` der Notification

Die [`actions`](/de/docs/Web/API/Notification/actions) Lesezugriffseigenschaft und die [`maxActions`](/de/docs/Web/API/Notification/maxActions_static) statische Lesezugriffseigenschaft der [`Notification`](/de/docs/Web/API/Notification) Schnittstelle werden in Nightly auf Desktop unterstützt. Diese enthalten die Benachrichtigungsaktionen, die mit [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification) gesetzt wurden, und die maximale Anzahl an Aktionen, die gesetzt werden können.
([Firefox-Bug 1225110](https://bugzil.la/1225110), [Firefox-Bug 1963263](https://bugzil.la/1963263)).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 138                  | Ja (nur Desktop)         |
| Developer Edition      | 138                  | Nein                     |
| Beta                   | 138                  | Nein                     |
| Release                | 138                  | Nein                     |

- `dom.webnotifications.actions.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Grafik: Canvas, WebGL und WebGPU

#### WebGL: Entwurfs-Erweiterungen

Wenn dieser Präferenz aktiv ist, werden alle aktuell im "Entwurf"-Status befindlichen WebGL-Erweiterungen, die von Firefox getestet werden, zur Verwendung aktiviert. Derzeit werden keine WebGL-Erweiterungen von Firefox getestet.

#### WebGPU API

Die [WebGPU API](/de/docs/Web/API/WebGPU_API) bietet Low-Level-Unterstützung für die Ausführung von Berechnungen und Grafik-Renderings mithilfe der [Graphics Processing Unit](https://en.wikipedia.org/wiki/Graphics_Processing_Unit) (GPU) des Benutzergeräts oder -computers.
Ab Version 142 ist dies auf Windows in allen Kontexten außer Service-Workern aktiviert.
Ab Version 147 ist dies auf macOS auf Apple Silicon in allen Browsing-Kontexten mit Ausnahme von Service-Workern aktiviert.
Für andere Plattformen wie Linux und macOS auf Intel-Silicon ist es in Nightly aktiviert.
Siehe [Firefox-Bug 1602129](https://bugzil.la/1602129) für unseren Fortschritt bei dieser API.

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert?                                               |
| ---------------------- | -------------------- | ---------------------------------------------------------------------- |
| Nightly                | 141                  | Ja                                                                     |
| Developer Edition      | 141                  | Nein (Ja auf Windows und macOS auf Apple Silicon, ohne Service-Worker) |
| Beta                   | 141                  | Nein (Ja auf Windows und macOS auf Apple Silicon, ohne Service-Worker) |
| Release                | 141                  | Nein (Ja auf Windows und macOS auf Apple Silicon, ohne Service-Worker) |

- `dom.webgpu.enabled`
  - : Auf `true` setzen, um zu aktivieren (in Nightly und auf Windows in allen Veröffentlichungen aktiviert)
- `dom.webgpu.service-workers.enabled`
  - : Set to `true` to enable (in Nightly aktiviert)

### Reporting API-Unterstützung für CSP-Verstöße

Die [Reporting API](/de/docs/Web/API/Reporting_API) unterstützt jetzt das Melden von [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP)-Verstößen.

[`Report`](/de/docs/Web/API/Report) Instanzen, die von der [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) Schnittstelle zurückgegeben werden, können nun einen `type`-Wert von `"csp-violation"` haben und eine `body`-Eigenschaft, die eine Instanz der [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody) Schnittstelle enthält.
Dies ermöglicht das Melden von CSP-Verstößen innerhalb einer Webseite.

CSP-Verstoßberichte können auch an entfernte Endpunkte gesendet werden, die durch Namen in der CSP {{CSP("report-to")}} Direktive angegeben sind — Endpunktnamen und entsprechende URLs müssen zuerst in den {{httpheader('Reporting-Endpoints')}} oder {{httpheader('Report-To')}} HTTP-Antwort-Headern definiert werden.
Der Bericht ist eine Serialisierung des [`Report`](/de/docs/Web/API/Report) Objekts, das oben beschrieben wurde, mit einer `body`-Eigenschaft, die eine Serialisierung einer [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody) Instanz ist.

Dieser Verstoßbericht ersetzt einen ähnlichen CSP-spezifischen Mechanismus zum Senden von Verstoßberichten, der die CSP-{{CSP("report-uri")}} Direktive verwendet, um die URL des meldepflichtigen Endpunkts festzulegen, und ein [CSP-spezifisches JSON-Verstoßberichtformat](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/report-uri#violation_report_syntax) hat.
([Firefox-Bug 1391243](https://bugzil.la/1391243)).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 130                  | Nein                     |
| Developer Edition      | 130                  | Nein                     |
| Beta                   | 130                  | Nein                     |
| Release                | 130                  | Nein                     |

- `dom.reporting.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### WebRTC und Medien

Die folgenden experimentellen Funktionen umfassen diejenigen, die in der [WebRTC-API](/de/docs/Web/API/WebRTC_API), der [Web Audio API](/de/docs/Web/API/Web_Audio_API), der [Media Source Extensions API](/de/docs/Web/API/Media_Source_Extensions_API), der [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API) und der [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) gefunden wurden.

#### Asynchrones Hinzufügen und Entfernen von SourceBuffer

Dies fügt die methodenbasierten Methoden [`appendBufferAsync()`](/de/docs/Web/API/SourceBuffer/appendBufferAsync) und [`removeAsync()`](/de/docs/Web/API/SourceBuffer/removeAsync) zur Hinzufügung und Entfernung von Medienquellenpuffern zur [`SourceBuffer`](/de/docs/Web/API/SourceBuffer) Schnittstelle hinzu. Siehe [Firefox-Bug 1280613](https://bugzil.la/1280613) und [Firefox-Bug 778617](https://bugzil.la/778617) für weitere Informationen.

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 62                   | Nein                     |
| Developer Edition      | 62                   | Nein                     |
| Beta                   | 62                   | Nein                     |
| Release                | 62                   | Nein                     |

- `media.mediasource.experimental.enabled`
  - : Auf `true` setzen, um zu aktivieren.

#### AVIF-Konformitätsstrenge

Die `image.avif.compliance_strictness` Einstellung kann verwendet werden, um die _Strenge_ zu steuern, die angewendet wird, wenn [AVIF](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) Bilder verarbeitet werden.
So können Firefox-Nutzer Bilder anzeigen, die in einigen anderen Browsern gerendert werden, selbst wenn sie nicht strikte konform sind.

| Veröffentlichungskanal | Hinzugefügte Version | Standardwert |
| ---------------------- | -------------------- | ------------ |
| Nightly                | 92                   | 1            |
| Developer Edition      | 92                   | 1            |
| Beta                   | 92                   | 1            |
| Release                | 92                   | 1            |

- `image.avif.compliance_strictness`
  - : Numerischer Wert, der ein Strengheitslevel angibt. Erlaubte Werte sind:
    - `0`: Nachsichtig. Akzeptiere Bilder mit Spezifikationsverstößen in beiden Empfehlungen ("sollte" Sprache) und Anforderungen ("soll" Sprache), vorausgesetzt, sie können sicher oder eindeutig interpretiert werden.
    - `1` **(Standardwert)**: Gemischt. Verwerfe Verstöße gegen Anforderungen ("soll"), aber erlaube Verstöße gegen Empfehlungen ("sollte").
    - `2`: Streng. Verwerfe alle Verstöße gegen festgelegte Anforderungen oder Empfehlungen.

#### JPEG XL-Unterstützung

Firefox unterstützt [JPEG XL](https://jpeg.org/jpegxl/) Bilder, wenn diese Funktion aktiviert ist.
Siehe [Firefox-Bug 1539075](https://bugzil.la/1539075) für weitere Details.

Beachten Sie, dass die Funktion nur in Nightly-Builds verfügbar ist (unabhängig davon, ob die Präferenz gesetzt ist).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 90                   | Nein                     |
| Developer Edition      | —                    | —                        |
| Beta                   | —                    | —                        |
| Release                | —                    | —                        |

- `image.jxl.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### WebVR API

#### WebVR API (Deaktiviert)

Die veraltete [WebVR API](/de/docs/Web/API/WebVR_API) ist auf dem Weg zur Entfernung.
Sie ist standardmäßig in allen Builds deaktiviert [Firefox-Bug 1750902](https://bugzil.la/1750902).

| Veröffentlichungskanal | Entfernte Version | Standardmäßig aktiviert? |
| ---------------------- | ----------------- | ------------------------ |
| Nightly                | 98                | Nein                     |
| Developer Edition      | 98                | Nein                     |
| Beta                   | 98                | Nein                     |
| Release                | 98                | Nein                     |

- `dom.vr.enabled`
  - : Auf `true` setzen, um zu aktivieren.

#### HTMLMediaElement Eigenschaften: audioTracks und videoTracks

Das Aktivieren dieser Funktion fügt den HTML-Medienelementen die [`HTMLMediaElement.audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks) und [`HTMLMediaElement.videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks) Eigenschaften hinzu. Doch da Firefox derzeit keine Unterstützung für mehrere Audio- und Videospuren bietet, funktionieren die häufigsten Anwendungsfälle für diese Eigenschaften nicht, weshalb sie beide standardmäßig deaktiviert sind. Siehe [Firefox-Bug 1057233](https://bugzil.la/1057233) für weitere Details.

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 33                   | Nein                     |
| Developer Edition      | 33                   | Nein                     |
| Beta                   | 33                   | Nein                     |
| Release                | 33                   | Nein                     |

- `media.track.enabled`
  - : Auf `true` setzen, um zu aktivieren.

#### GeometryUtils Methoden: convertPointFromNode(), convertRectFromNode(), und convertQuadFromNode()

Die `GeometryUtils` Methoden `convertPointFromNode()`, `convertRectFromNode()`, und `convertQuadFromNode()` ordnen den gegebenen Punkt, das Rechteck oder das Viereck von dem [`Node`](/de/docs/Web/API/Node), auf dem sie aufgerufen werden, zu einem anderen Knoten um. (Siehe [Firefox-Bug 918189](https://bugzil.la/918189) für weitere Details.)

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 31                   | Ja                       |
| Developer Edition      | 31                   | Nein                     |
| Beta                   | 31                   | Nein                     |
| Release                | 31                   | Nein                     |

- `layout.css.convertFromNode.enable`
  - : Auf `true` setzen, um zu aktivieren.

#### GeometryUtils Methode: getBoxQuads()

Die `GeometryUtils` Methode `getBoxQuads()` gibt die CSS-Boxen für einen [`Node`](/de/docs/Web/API/Node) relativ zu einem anderen Knoten oder Ansichtsfenster zurück. (Siehe [Firefox-Bug 917755](https://bugzil.la/917755) für weitere Details.)

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 31                   | Ja                       |
| Developer Edition      | 31                   | Nein                     |
| Beta                   | 31                   | Nein                     |
| Release                | 31                   | Nein                     |

- `layout.css.getBoxQuads.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Payment Request API

#### Primäre Zahlungsabwicklung

Die [Payment Request API](/de/docs/Web/API/Payment_Request_API) bietet Unterstützung für die Abwicklung webbasierter Zahlungen innerhalb von Webinhalten oder Apps. Aufgrund eines Bugs, der während des Testens der Benutzeroberfläche auftrat, haben wir entschieden, das Release dieser API zu verschieben, während Diskussionen über potenzielle Änderungen an der API stattfinden. Die Arbeit ist im Gange. (Weitere Details finden Sie im [Firefox-Bug 1318984](https://bugzil.la/1318984)).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 55                   | Nein                     |
| Developer Edition      | 55                   | Nein                     |
| Beta                   | 55                   | Nein                     |
| Release                | 55                   | Nein                     |

- `dom.payments.request.enabled`
  - : Auf `true` setzen, um zu aktivieren.
- `dom.payments.request.supportedRegions`
  - : Ländercodes als durch Kommas getrennte Liste zulässiger Regionen (z.B. `US,CA`).

### WebShare API

Die [Web Share API](/de/docs/Web/API/Web_Share_API) ermöglicht das Teilen von Dateien, URLs und anderen Daten von einer Website aus.
Diese Funktion ist auf Android in allen Builds aktiviert, aber hinter einer Präferenz auf Desktop (sofern unten nicht anders angegeben).

| Veröffentlichungskanal | Geänderte Version | Standardmäßig aktiviert?                    |
| ---------------------- | ----------------- | ------------------------------------------- |
| Nightly                | 71                | Nein (standard). Ja (Windows ab Version 92) |
| Developer Edition      | 71                | Nein                                        |
| Beta                   | 71                | Nein                                        |
| Release                | 71                | Nein (Desktop). Ja (Android).               |

- `dom.webshare.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Bildschirmorientierungs-API

#### ScreenOrientation.lock()

Die [`ScreenOrientation.lock()`](/de/docs/Web/API/ScreenOrientation/lock) Methode ermöglicht es, ein Gerät auf eine bestimmte Ausrichtung zu sperren, wenn dies vom Gerät unterstützt wird und Browservoraussetzungen vor dem Sperren erfüllt sind.
Typischerweise ist das Sperren der Ausrichtung nur auf mobilen Geräten erlaubt, wenn das Dokument im Vollbild angezeigt wird.
Weitere Details finden Sie im [Firefox-Bug 1697647](https://bugzil.la/1697647).

| Veröffentlichungskanal | Geänderte Version | Standardmäßig aktiviert? |
| ---------------------- | ----------------- | ------------------------ |
| Nightly                | 111               | Ja                       |
| Developer Edition      | 97                | Nein                     |
| Beta                   | 97                | Nein                     |
| Release                | 97                | Nein                     |

- `dom.screenorientation.allow-lock`
  - : Auf `true` setzen, um zu aktivieren.

### Benachrichtigungen-API

Benachrichtigungen haben die [`requireInteraction`](/de/docs/Web/API/Notification/requireInteraction) Eigenschaft standardmäßig auf Windows-Systemen und in der Nightly-Veröffentlichung auf `true` gesetzt ([Firefox-Bug 1794475](https://bugzil.la/1794475)).

| Veröffentlichungskanal | Geänderte Version | Standardmäßig aktiviert? |
| ---------------------- | ----------------- | ------------------------ |
| Nightly                | 117               | Ja                       |
| Developer Edition      | 117               | Nein                     |
| Beta                   | 117               | Nein                     |
| Release                | 117               | Nur Windows              |

- `dom.webnotifications.requireinteraction.enabled`
  - : Auf `true` setzen, um zu aktivieren.

## Sicherheit und Datenschutz

### Unsichere Seitenkennzeichnung

Die beiden `security.insecure_connection_text_*` Einstellungen fügen ein "Nicht sicher"-Textlabel in der Adressleiste neben dem traditionellen Schlosssymbol hinzu, wenn eine Seite unsicher geladen wird (d.h. Verwendung von {{Glossary("HTTP", "HTTP")}} anstelle von {{Glossary("HTTPS", "HTTPS")}}). Die `browser.urlbar.trimHttps` Einstellung entfernt das `https:` Präfix von Adresseleisten URLs. Weitere Details finden Sie im [Firefox-Bug 1853418](https://bugzil.la/1853418).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 121                  | Ja                       |
| Developer Edition      | 60                   | Nein                     |
| Beta                   | 60                   | Nein                     |
| Release                | 60                   | Nein                     |

- `security.insecure_connection_text.enabled`
  - : Auf `true` setzen, um das Textlabel für den normalen Browsing-Modus zu aktivieren.
- `security.insecure_connection_text.pbmode.enabled`
  - : Auf `true` setzen, um das Textlabel für den privaten Browsing-Modus zu aktivieren.
- `browser.urlbar.trimHttps`
  - : Auf `true` setzen, um das `https:` Präfix von Adresseleisten- URLs zu entfernen.

### Einschränkung von Inhalten für Erwachsene mit `<meta name="rating">`

Das nicht standardmäßige [`<meta name="rating">`](/de/docs/Web/HTML/Reference/Elements/meta) Element kann auf einer Webseite enthalten sein, um den Inhalt der Seite als eingeschränkt/erwachsenenorientiert zu kennzeichnen.
Zum Zeitpunkt der Erstellung dieses Dokuments gibt es zwei mögliche `content`-Werte, `adult` ([von Google definiert](https://developers.google.com/search/docs/specialty/explicit/guidelines#add-metadata)) und `RTA-5042-1996-1400-1577-RTA` ([von ASACP definiert](https://www.rtalabel.org/?content=howto#top)), die die gleiche Wirkung haben (es können in Zukunft weitere Optionen hinzugefügt werden).

Die folgenden `<meta>` Elemente sind gleichwertig:

```html
<meta name="rating" content="adult" />
<meta name="rating" content="RTA-5042-1996-1400-1577-RTA" />
```

Browser, die dieses Element erkennen, können dann Schritte unternehmen, um zu verhindern, dass Benutzer den Inhalt ansehen.
Firefox' Implementierung ersetzt die Seite durch den Inhalt, der unter `about:restricted` gefunden wird, der den Benutzer darüber informiert, dass er versucht, eingeschränkte Inhalte anzusehen, erklärt, warum er sie nicht anzeigen kann, und gibt ihm einen Zurückknopf, um dorthin zurückzukehren, wo er hergekommen ist.

Weitere Details finden Sie im [Firefox-Bug 1991135](https://bugzil.la/1991135).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 146                  | Nein                     |
| Developer Edition      | 146                  | Nein                     |
| Beta                   | 146                  | Nein                     |
| Release                | 146                  | Nein                     |

- `security.restrict_to_adults.always`
  - : Auf `true` setzen, um den Zugriff auf Webseiten einzuschränken, die sich selbst als Erwachsene durch Einfügung eines `<meta name="rating">` Elements identifizieren.
- `security.restrict_to_adults.respect_platform`
  - : Auf `true` setzen, um den Zugriff auf Webseiten einzuschränken, die sich selbst als Erwachsenen identifizieren, indem sie ein `<meta name="rating">` Element nur dann einschließen, wenn entsprechende Kindersicherungseinstellungen auf dem zugrunde liegenden Betriebssystem aktiviert sind (zum Beispiel sind die macOS _Content & Privacy_ Einstellungen zum Einschränken des Zugriffs auf explizite Webinhalte aktiviert).

### Berechtigungsrichtlinie / Feature-Policy

[Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) ermöglicht es Webentwicklern, bestimmte Funktionen und APIs im Browser selektiv zu aktivieren, deaktivieren und ihr Verhalten zu ändern. Sie ähnelt CSP, steuert jedoch Funktionen anstelle von Sicherheitsverhalten. Dies wird in Firefox als **Feature Policy** implementiert, wie sie im Namen in einer früheren Version der Spezifikation verwendet wird.

Beachten Sie, dass unterstützte Richtlinien durch das [`allow`](/de/docs/Web/HTML/Reference/Elements/iframe#allow) Attribut auf `<iframe>` Elementen gesetzt werden können, selbst wenn die Benutzereinstellung nicht gesetzt ist.

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 65                   | Nein                     |
| Developer Edition      | 65                   | Nein                     |
| Beta                   | 65                   | Nein                     |
| Release                | 65                   | Nein                     |

- `dom.security.featurePolicy.header.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Datenschutzorientierte Zuordnungs-API (PPA)

[PPA API](https://support.mozilla.org/en-US/kb/privacy-preserving-attribution) bietet eine Alternative zum Benutzer-Tracking für Werbezuschreibungen unter Verwendung des neuen `navigator.privateAttribution`-Objekts mit den Methoden `saveImpression()` und `measureConversion()`.
Lesen Sie mehr über PPA [im ursprünglichen Erklärungsdokument](https://github.com/mozilla/explainers/tree/main/archive/ppa-experiment) und der [vorgeschlagenen Spezifikation](https://w3c.github.io/ppa/).
Dieses Experiment kann für Websites über [origin trial](https://wiki.mozilla.org/Origin_Trials) oder im Browser durch Setzen der Präferenz auf `1` aktiviert werden. ([Firefox-Bug 1900929](https://bugzil.la/1900929)).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 128                  | Nein                     |
| Developer Edition      | 128                  | Nein                     |
| Beta                   | 128                  | Nein                     |
| Release                | 128                  | Nein                     |

- `dom.origin-trials.private-attribution.state`
  - : Auf `true` setzen, um zu aktivieren.

## HTTP

### Integritätsrichtlinie für Stylesheet-Ressourcen

Die HTTP-Header {{httpheader("Integrity-Policy")}} und {{httpheader("Integrity-Policy-Report-Only")}} werden jetzt für Style-Ressourcen unterstützt.
Diese ermöglichen es Websites, entweder [untergeordnete Integritätsgarantien](/de/docs/Web/Security/Defenses/Subresource_Integrity) für Stile durchzusetzen oder nur Verstöße gegen die Richtlinie zu melden.
Beachten Sie, dass Firefox Meldungsendpunkte ignoriert und Verstöße in die Entwicklerkonsole protokolliert.
Wenn `Integrity-Policy` verwendet wird, blockiert der Browser das Laden von Styles, die in einem {{HTMLElement("link")}} Element mit [`rel="stylesheet"`](/de/docs/Web/HTML/Reference/Attributes/rel#stylesheet) verlinkt sind und entweder das [`integrity`](/de/docs/Web/HTML/Reference/Elements/script#integrity) Attribut fehlen oder einen Integritätshash haben, der nicht mit der Ressource auf dem Server übereinstimmt.
([Firefox-Bug 1976656](https://bugzil.la/1976656)).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 142                  | Nein                     |
| Developer Edition      | 142                  | Nein                     |
| Beta                   | 142                  | Nein                     |
| Release                | 142                  | Nein                     |

- `security.integrity_policy.stylesheet.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Storage Access Header

Die HTTP-Header {{httpheader("Sec-Fetch-Storage-Access")}} und {{httpheader("Activate-Storage-Access")}} werden jetzt unterstützt und ermöglichen einen effizienteren Workflow der [Storage Access API](/de/docs/Web/API/Storage_Access_API). ([Firefox-Bug 1991688](https://bugzil.la/1991688)).

Im JavaScript-only Workflow muss eine Drittanbieter-Ressource angefordert und geladen werden, um eine Storage-Access-Berechtigung für einen bestimmten Kontext (wie einen neuen Browsertab) zu aktivieren. Dies ist erforderlich, auch wenn die Berechtigung bereits erteilt wurde.
Die Storage-Access-Header ermöglichen es dem Browser, den Berechtigungsstatus für den bestimmten Kontext zu bewerben, damit der Server die Aktivierung einer bereits gewährten Berechtigung anfordern kann.
Dies vermeidet den Aufwand, die Ressource unnötig abzurufen und zu laden.

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 145                  | Ja                       |
| Developer Edition      | 145                  | Nein                     |
| Beta                   | 145                  | Nein                     |
| Release                | 145                  | Nein                     |

- `dom.storage_access.headers.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Idempotency-Key

Der {{httpheader("Idempotency-Key")}} HTTP-Request-Header kann von der Website-Client-Seite verwendet werden, um einen {{HTTPMethod("POST")}} oder {{HTTPMethod("PATCH")}} Request {{Glossary("idempotent", "idempotent")}} zu machen, wenn es mit einem unterstützen Server verwendet wird.
Die Spezifikation gibt an, dass der Server dokumentieren und bewerben sollte, welche Endpunkte diesen Header erfordern, das Format des Schlüssels und die erwarteten Fehlermeldungen.

Firefox fügt diesen Header _automatisch_ mit einem eindeutigen Schlüssel für jede neue `POST` Anfrage hinzu, wenn er von der Client-Seite des Seiten-Codes nicht bereits hinzugefügt wurde.
Dies vereinfacht den auf der Client-Seite erforderlichen Code, um mit Servern zu arbeiten, die die Funktion unterstützen.

([Firefox-Bug 1830022](https://bugzil.la/1830022)).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 135                  | Nein                     |
| Developer Edition      | 135                  | Nein                     |
| Beta                   | 135                  | Nein                     |
| Release                | 135                  | Nein                     |

- `network.http.idempotencyKey.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Accept-Header mit MIME-Typ image/jxl

Der HTTP [`Accept`](/de/docs/Web/HTTP/Reference/Headers/Accept) Header in [Standardanforderungen und Bildanforderungen](/de/docs/Web/HTTP/Guides/Content_negotiation/List_of_default_Accept_values) kann über eine Einstellung konfiguriert werden, um Unterstützung für den `image/jxl` MIME-Typ anzuzeigen.

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 128                  | Nein                     |
| Developer Edition      | 128                  | Nein                     |
| Beta                   | 128                  | Nein                     |
| Release                | 128                  | Nein                     |

- `image.jxl.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### SameSite=Lax standardmäßig

[`SameSite`-Cookies](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) haben standardmäßig den Wert `Lax`.
Mit dieser Einstellung werden Cookies nur gesendet, wenn ein Nutzer zur Ursprungsseite navigiert, nicht für Cross-Site-Subanfragen zum Laden von Bildern oder Frames in eine Drittanbieter-Seite usw.
Für weitere Details siehe [Firefox-Bug 1617609](https://bugzil.la/1617609).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 69                   | Nein                     |
| Developer Edition      | 69                   | Nein                     |
| Beta                   | 69                   | Nein                     |
| Release                | 69                   | Nein                     |

- `network.cookie.sameSite.laxByDefault`
  - : Auf `true` setzen, um zu aktivieren.

### `Access-Control-Allow-Headers` Wildcard deckt `Authorization` nicht ab

Die [`Access-Control-Allow-Headers`](/de/docs/Web/HTTP/Reference/Headers/Access-Control-Allow-Headers) ist ein Antwort-Header auf eine {{Glossary("Preflight_request", "CORS Vorab-Anfrage")}}, der angibt, welche Anfrage-Header in der endgültigen Anfrage enthalten sein dürfen.
Die Antwortdirektive kann eine Wildcard (`*`) enthalten, die angibt, dass die endgültige Anfrage alle Header außer dem `Authorization` Header enthalten darf.

Standardmäßig übernimmt Firefox den `Authorization` Header in der endgültigen Anfrage, nachdem eine Antwort mit `Access-Control-Allow-Headers: *` empfangen wurde.
Setzen Sie die Einstellung auf `false`, um sicherzustellen, dass Firefox den `Authorization` Header nicht einschließt.
Für weitere Details siehe [Firefox-Bug 1687364](https://bugzil.la/1687364).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 115                  | Ja                       |
| Developer Edition      | 115                  | Ja                       |
| Beta                   | 115                  | Ja                       |
| Release                | 115                  | Ja                       |

- `network.cors_preflight.authorization_covered_by_wildcard`
  - : Auf `true` setzen, um zu aktivieren.

## Entwicklerwerkzeuge

Die Entwicklerwerkzeuge von Mozilla entwickeln sich fortlaufend. Wir experimentieren mit neuen Ideen, fügen neue Funktionen hinzu und testen sie in den Nightly- und Developer Edition-Kanälen, bevor sie in die Beta- und Release-Versionen eingehen. Die unten aufgeführten Funktionen sind die aktuelle Auswahl an experimentellen Entwickler-Tool-Funktionen.

**Keine experimentellen Funktionen in diesem Release-Zyklus.**

## Siehe auch

- [Release-Notizen für Firefox-Entwickler](/de/docs/Mozilla/Firefox/Releases)
- [Firefox Nightly](https://www.firefox.com/en-US/channel/desktop/)
- [Firefox Developer Edition](https://www.firefox.com/en-US/channel/desktop/developer/)
