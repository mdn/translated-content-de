---
title: Experimentelle Funktionen in Firefox
short-title: Experimentelle Funktionen
slug: Mozilla/Firefox/Experimental_features
l10n:
  sourceCommit: d9e71f8b15265a041b550a54a1d0970f049053e4
---

Diese Seite listet die experimentellen und teilweise implementierten Funktionen von Firefox auf, einschließlich sich entwickelnder oder vorgeschlagener Web-Plattform-Standards. Jeder Eintrag unten enthält Informationen über die Builds, in denen eine Funktion enthalten ist (Nightly, Beta, Developer Edition oder Release), ob sie standardmäßig aktiviert ist oder nicht, und den Namen der **Voreinstellung**, die Sie verwenden können, um die Funktion zu aktivieren oder zu konfigurieren. Die Beschreibung jeder Funktion enthält auch Links zu relevanten [Bugzilla-Bugs](https://bugzilla.mozilla.org), die die Funktion implementieren oder aktivieren. Diese Informationen ermöglichen es Ihnen, experimentelle Funktionen auszuprobieren und Feedback zu geben, bevor sie offiziell veröffentlicht werden.

Im Hinblick auf den Lebenszyklus erscheinen neue Funktionen normalerweise zuerst im [Nightly](https://www.firefox.com/en-US/channel/desktop/#nightly), wo sie oft standardmäßig für frühes Feedback und Tests aktiviert sind. Wenn keine größeren Probleme gefunden werden, werden sie in [Beta](https://www.firefox.com/en-US/channel/desktop/#beta) und [Developer Edition](https://www.firefox.com/en-US/channel/desktop/developer/) Pre-Release-Builds aufgenommen. Schließlich werden genehmigte Funktionen im [stabilen Release](https://www.firefox.com/en-US/) Kanal ausgeliefert. Wenn eine Funktion in einer Veröffentlichung standardmäßig aktiviert ist, wird sie nicht mehr als experimentell betrachtet und von dieser Seite entfernt.

Um diese Funktionen zu aktivieren, geben Sie `about:config` in die Adressleiste von Firefox ein, suchen Sie die zugehörige **Voreinstellung** und ändern Sie den Wert, der normalerweise zwischen `true` und `false` umgeschaltet wird. Abhängig von der Funktion müssen Sie möglicherweise den Browser neu starten, damit die Änderung wirksam wird. Weitere Informationen zum Verwalten von Voreinstellungen in Firefox finden Sie im Hilfsartikel [Firefox Configuration Editor](https://support.mozilla.org/en-US/kb/about-config-editor-firefox).

## HTML

### Layout für input type="search"

Das Layout für `input type="search"` wurde aktualisiert. Dies führt dazu, dass ein Suchfeld ein Löschsymbol hat, sobald jemand darin zu tippen beginnt, um den Implementierungen anderer Browser gerecht zu werden. (Siehe [Firefox-Bug 558594](https://bugzil.la/558594) für weitere Details.)

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 81                   | Nein                     |
| Developer Edition      | 81                   | Nein                     |
| Beta                   | 81                   | Nein                     |
| Release                | 81                   | Nein                     |

- `layout.forms.input-type-search.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Umschalten der Passwortanzeige

HTML-Passworteingabeelemente ([`<input type="password">`](/de/docs/Web/HTML/Reference/Elements/input/password)) enthalten ein "Auge"-Symbol, das umgeschaltet werden kann, um den Passworttext anzuzeigen oder zu verbergen ([Firefox-Bug 502258](https://bugzil.la/502258)).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 96                   | Nein                     |
| Developer Edition      | 96                   | Nein                     |
| Beta                   | 96                   | Nein                     |
| Release                | 96                   | Nein                     |

- `layout.forms.reveal-password-button.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Zeitauswahl in `datetime-local` und `time` Eingabeelementen

Die HTML-Eingabeelemente [`<input type="datetime-local">`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local) und [`<input type="time">`](/de/docs/Web/HTML/Reference/Elements/input/time) unterstützen eine Zeitauswahl. ([Firefox-Bug 1726108](https://bugzil.la/1726108)).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 144                  | Nein                     |
| Developer Edition      | 144                  | Nein                     |
| Beta                   | 144                  | Nein                     |
| Release                | 144                  | Nein                     |

- `dom.forms.datetime.timepicker`
  - : Setzen Sie auf `true`, um zu aktivieren.

### `alpha` und `colorspace` Attribute in `color` Eingabeelementen

Das HTML-Eingabeelement [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color) unterstützt die Attribute [`alpha`](/de/docs/Web/HTML/Reference/Elements/input/color#alpha) und [`colorspace`](/de/docs/Web/HTML/Reference/Elements/input/color#colorspace). ([Firefox-Bug 1919718](https://bugzil.la/1919718)).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 149                  | Ja                       |
| Developer Edition      | -                    | -                        |
| Beta                   | -                    | -                        |
| Release                | -                    | -                        |

- `dom.forms.html_color_picker.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

## CSS

### Hex-Boxen zur Anzeige streunender Steuerzeichen

Diese Funktion rendert Steuerzeichen (Unicode-Kategorie Cc) außer _Tabulator_ (`U+0009`), _Zeilenumbruch_ (`U+000A`), _Formfeed_ (`U+000C`) und _Wagenrücklauf_ (`U+000D`) als Hex-Box, wenn sie unerwartet sind. (Siehe [Firefox-Bug 1099557](https://bugzil.la/1099557) für weitere Details.)

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 43                   | Ja                       |
| Developer Edition      | 43                   | Nein                     |
| Beta                   | 43                   | Nein                     |
| Release                | 43                   | Nein                     |

- `layout.css.control-characters.visible`
  - : Setzen Sie auf `true`, um zu aktivieren.

### `initial-letter` Eigenschaft

Die {{cssxref("initial-letter")}} CSS-Eigenschaft ist Teil der [CSS Inline Layout](https://drafts.csswg.org/css-inline/) Spezifikation und ermöglicht es, anzugeben, wie fallende, erhöhte und abgesenkte Initialen angezeigt werden. (Siehe [Firefox-Bug 1223880](https://bugzil.la/1223880) für weitere Details.)

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 50                   | Nein                     |
| Developer Edition      | 50                   | Nein                     |
| Beta                   | 50                   | Nein                     |
| Release                | 50                   | Nein                     |

- `layout.css.initial-letter.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### `fit-content()` Funktion

Die {{cssxref("fit-content()")}} Funktion wie sie auf {{cssxref("width")}} und andere Größeneigenschaften angewendet wird. Diese Funktion wird bereits gut für die CSS-Grid-Layout-Track-Größenunterstützung unterstützt. (Siehe [Firefox-Bug 1312588](https://bugzil.la/1312588) für weitere Details.)

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 91                   | Nein                     |
| Developer Edition      | 91                   | Nein                     |
| Beta                   | 91                   | Nein                     |
| Release                | 91                   | Nein                     |

- `layout.css.fit-content-function.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Scroll-gesteuerte Animationen

Früher "scroll-linked animations" genannt, hängt eine [scroll-gesteuerte Animation](/de/docs/Web/CSS/Guides/Scroll-driven_animations) von der Scrollposition eines Scrollbalkens statt von der Zeit oder einer anderen Dimension ab. Die {{cssxref('scroll-timeline-name')}} und {{cssxref('scroll-timeline-axis')}} Eigenschaften (und die {{cssxref('scroll-timeline')}} Kurzschreibweise) ermöglichen es, anzugeben, dass ein bestimmter Scrollbalken in einem bestimmten benannten Container als Quelle für eine scroll-gesteuerte Animation verwendet werden kann. Die Scrollzeitachse kann dann mit einer [Animation](/de/docs/Web/CSS/Guides/Animations) verbunden werden, indem die {{cssxref('animation-timeline')}} Eigenschaft auf den Namen gesetzt wird, der mit `scroll-timeline-name` definiert wurde.

Beim Verwenden der {{cssxref('scroll-timeline')}} Kurzschreibweise muss die Reihenfolge der Eigenschaftswerte {{cssxref('scroll-timeline-name')}} gefolgt von {{cssxref('scroll-timeline-axis')}} sein. Die Lang- und Kurzschreibweisen sind beide hinter der Voreinstellung verfügbar. Alternativ können Sie die {{cssxref("animation-timeline/scroll")}} Funktionalnotation mit {{cssxref('animation-timeline')}} verwenden, um anzugeben, dass eine Scrollbalkenachse in einem übergeordneten Element für die Zeitachse verwendet wird.

Weitere Informationen finden Sie in [Firefox-Bug 1807685](https://bugzil.la/1807685), [Firefox-Bug 1804573](https://bugzil.la/1804573), [Firefox-Bug 1809005](https://bugzil.la/1809005), [Firefox-Bug 1676791](https://bugzil.la/1676791), [Firefox-Bug 1754897](https://bugzil.la/1754897), [Firefox-Bug 1817303](https://bugzil.la/1817303) und [Firefox-Bug 1737918](https://bugzil.la/1737918).

Die {{cssxref('timeline-scope')}}, {{cssxref('animation-range-start')}} und {{cssxref('animation-range-end')}} Eigenschaften (und die {{cssxref('animation-range')}} Kurzschreibweise) werden noch nicht unterstützt. Weitere Informationen finden Sie in [Firefox-Bug 1676779](https://bugzil.la/1676779).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 136                  | Ja                       |
| Developer Edition      | 110                  | Nein                     |
| Beta                   | 110                  | Nein                     |
| Release                | 110                  | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### `prefers-reduced-transparency` Medienfeature

Die CSS {{cssxref("@media/prefers-reduced-transparency")}} Medienfunktion erlaubt es, zu erkennen, ob ein Benutzer die Einstellung aktiviert hat, um die Menge an transparenten oder transluzenten Schichteffekten auf seinem Gerät zu minimieren. Siehe ([Firefox-Bug 1736914](https://bugzil.la/1736914)) für weitere Details.

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 113                  | Nein                     |
| Developer Edition      | 113                  | Nein                     |
| Beta                   | 113                  | Nein                     |
| Release                | 113                  | Nein                     |

- `layout.css.prefers-reduced-transparency.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### `inverted-colors` Medienfeature

Die CSS {{cssxref("@media/inverted-colors")}} Medienfunktion erlaubt es, zu erkennen, ob ein Benutzeragent oder das zugrundeliegende Betriebssystem Farben invertiert. Siehe ([Firefox-Bug 1794628](https://bugzil.la/1794628)) für weitere Details.

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 114                  | Nein                     |
| Developer Edition      | 114                  | Nein                     |
| Beta                   | 114                  | Nein                     |
| Release                | 114                  | Nein                     |

- `layout.css.inverted-colors.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### `named view progress timelines` Eigenschaft

Die CSS {{cssxref("view-timeline-name")}} Eigenschaft ermöglicht es, einem bestimmten Element einen Namen zu geben, der identifiziert, dass sein übergeordnetes Scroller-Element die Quelle einer Ansicht-Fortschritts-Zeitachse ist. Der Name kann dann der `animation-timeline` zugewiesen werden, die das zugehörige Element animiert, während es durch den sichtbaren Bereich seines übergeordneten Scrollers bewegt wird. Siehe ([Firefox-Bug 1737920](https://bugzil.la/1737920)) für weitere Details.

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 114                  | Nein                     |
| Developer Edition      | 114                  | Nein                     |
| Beta                   | 114                  | Nein                     |
| Release                | 114                  | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Anonyme Fortschrittszeitleisten-Funktion

Die CSS {{cssxref("animation-timeline/view")}} Funktion erlaubt es, anzugeben, dass die `animation-timeline` für ein Element eine Fortschrittszeitleiste ist, die das Element animiert, während es durch den sichtbaren Bereich seines übergeordneten Scrollers bewegt wird. Die Funktion definiert die Achse des übergeordneten Elements, das die Zeitachse bereitstellt, zusammen mit dem Rand im sichtbaren Bereich, an dem die Animation beginnt und endet. Siehe ([Firefox-Bug 1808410](https://bugzil.la/1808410)) für weitere Details.

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 114                  | Nein                     |
| Developer Edition      | 114                  | Nein                     |
| Beta                   | 114                  | Nein                     |
| Release                | 114                  | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Anbieter-spezifische Transformations-Eigenschaften

Die `-moz-` vorangestellten [CSS Transformationseigenschaften](/de/docs/Web/CSS/Guides/Transforms) können deaktiviert werden, indem die Voreinstellung `layout.css.prefixes.transforms` auf `false` gesetzt wird. Das Ziel ist es, diese zu deaktivieren, sobald die Standard-CSS-Zoom-Eigenschaften gut unterstützt werden. ([Firefox-Bug 1886134](https://bugzil.la/1886134), [Firefox-Bug 1855763](https://bugzil.la/1855763)).

Speziell wird diese Voreinstellung die folgenden vorangestellten Eigenschaften deaktivieren:

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
  - : Setzen Sie auf `true`, um zu aktivieren.

#### Relative Steuerpunkte in CSS `shape()` Kurvenbefehlen

Sie können [`<relative-control-point>`](/de/docs/Web/CSS/Reference/Values/basic-shape/shape#relative-control-point) Werte verwenden, wenn Sie einen [`<curve-command>`](/de/docs/Web/CSS/Reference/Values/basic-shape/shape#curve-command) oder [`<smooth-command>`](/de/docs/Web/CSS/Reference/Values/basic-shape/shape#smooth-command) in einer CSS `shape()` Funktion angeben. Diese Werte ermöglichen es, Steuerpunkte anzugeben, die relativ zum Start- oder Endpunkt des aktuellen Befehls oder relativ zum Ursprung (oben links) des Containers, in dem die Form gezeichnet wird, positioniert sind. ([Firefox-Bug 1921501](https://bugzil.la/1921501)).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 146                  | Ja                       |
| Developer Edition      | 146                  | Nein                     |
| Beta                   | 146                  | Nein                     |
| Release                | 146                  | Nein                     |

- `layout.css.basic-shape-shape.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Symmetrisches `letter-spacing`

Die CSS {{cssxref("letter-spacing")}} Eigenschaft teilt jetzt den angegebenen Zeichenabstand gleichmäßig auf beide Seiten jedes Zeichens auf. Dies unterscheidet sich vom aktuellen Verhalten, bei dem der Abstand hauptsächlich auf eine Seite hinzugefügt wird. Dieser Ansatz kann den Zeichenabstand verbessern, insbesondere bei Text in gemischter Richtung. ([Firefox-Bug 1891446](https://bugzil.la/1891446)).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 128                  | Ja                       |
| Developer Edition      | 128                  | Ja                       |
| Beta                   | 127                  | Nein                     |
| Release                | 127                  | Nein                     |

- `layout.css.letter-spacing.model`
  - : Setzen Sie auf `true`, um zu aktivieren.

### `calc()` Farbkanalunterstützung in relativen Farben

Die CSS {{cssxref("calc()")}} Funktion kann jetzt Farbkanäle in [relativen Farben](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors#using_math_functions) analysieren, was es ermöglicht, Änderungen an Farben in verschiedenen Farbräumen oder bei Verwendung unterschiedlicher funktionaler Notationen korrekt zu berechnen. [Firefox-Bug 1889561](https://bugzil.la/1889561).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 127                  | Ja                       |
| Developer Edition      | 127                  | Nein                     |
| Beta                   | 127                  | Nein                     |
| Release                | 127                  | Nein                     |

- `layout.css.relative-color-syntax.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Erlauben von Pseudo-Elementen nach element-basierten Pseudo-Elementen

Es wurde begonnen, Pseudo-Elemente wie {{cssxref("::first-letter")}} und {{cssxref("::before")}} an [element-basierte Pseudo-Elemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements#element-backed_pseudo-elements) anzuhängen, wie zum Beispiel {{cssxref("::details-content")}} und {{cssxref("::file-selector-button")}}.

Dies ermöglicht es Benutzern beispielsweise, den ersten Buchstaben des {{htmlElement("details")}}-Elements mit dem CSS-Selektor `::details-content::first-letter` zu gestalten oder Inhalte vor einem {{HTMLElement("input")}} des [`type="file"`](/de/docs/Web/HTML/Reference/Elements/input/file) mit dem CSS-Selektor `::file-selector-button::before` hinzuzufügen.

Derzeit kann nur die Unterstützung für `::details-content::first-letter` mit `@supports(::details-content::first-letter)` analysiert werden. Das `::file-selector-button` Pseudo-Element ist noch nicht als elementbasiertes Pseudo-Element markiert, sodass es keine Möglichkeit gibt, dies zu testen. ([Firefox-Bug 1953557](https://bugzil.la/1953557), [Firefox-Bug 1941406](https://bugzil.la/1941406)).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 138                  | Nein                     |
| Developer Edition      | 138                  | Nein                     |
| Beta                   | 138                  | Nein                     |
| Release                | 138                  | Nein                     |

### `:heading` und `:heading()` Pseudo-Klassen

Die {{cssxref(":heading")}} Pseudo-Klasse ermöglicht es, alle [Überschriftselemente](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) (`<h1>`-`<h6>`) auf einmal zu gestalten, anstatt sie einzeln anzusprechen. Die {{cssxref(":heading()")}} funktionale Pseudo-Klasse ermöglicht es, Überschriftselemente zu gestalten, die mit einer durch Kommas getrennten Liste von ganzzahligen Werten übereinstimmen, die den Überschriftsebenen entsprechen. ([Firefox-Bug 1974386](https://bugzil.la/1974386) & [Firefox-Bug 1984310](https://bugzil.la/1984310)).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 142                  | Nein                     |
| Developer Edition      | 142                  | Nein                     |
| Beta                   | 142                  | Nein                     |
| Release                | 142                  | Nein                     |

- `layout.css.heading-selector.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### `text-decoration-trim`

Die CSS `text-decoration-trim` Eigenschaft ermöglicht es, {{cssxref("text-decoration")}} Start- und Endoffsets anzugeben, um die Position von Textdekorationen zu kürzen, zu verlängern oder zu verschieben ([Firefox-Bug 1979915](https://bugzil.la/1979915)).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 145                  | Nein                     |
| Developer Edition      | 145                  | Nein                     |
| Beta                   | 145                  | Nein                     |
| Release                | 145                  | Nein                     |

- `layout.css.text-decoration-trim.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### `@custom-media` At-Regel

Die {{cssxref("@custom-media")}} CSS At-Regel definiert Aliase für lange oder komplexe Medienabfragen. Anstatt dieselbe hartkodierte `<media-query-list>` in mehreren `@media` At-Regeln zu wiederholen, kann sie einmal in einer `@custom-media` At-Regel definiert und im Stylesheet immer dann referenziert werden, wenn sie benötigt wird. ([Firefox-Bug 1744292](https://bugzil.la/1744292)).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 148                  | Nein                     |
| Developer Edition      | 148                  | Nein                     |
| Beta                   | 148                  | Nein                     |
| Release                | 148                  | Nein                     |

- `layout.css.custom-media.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### `<attr-type>` Werte in `attr()` CSS Funktion

Die {{cssxref("attr")}} CSS Funktion unterstützt jetzt [`<attr-type>`](/de/docs/Web/CSS/Reference/Values/attr#attr-type) Werte. Dies ermöglicht es, anzugeben, wie ein Attributwert in einen CSS-Wert analysiert wird und diese Werte direkt aus [`data-*`](/de/docs/Web/HTML/How_to/Use_data_attributes) zu übernehmen. ([Firefox-Bug 1986631](https://bugzil.la/1986631), [Firefox-Bug 1998245](https://bugzil.la/1998245))

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 149                  | Nein                     |
| Developer Edition      | 149                  | Nein                     |
| Beta                   | 149                  | Nein                     |
| Release                | 149                  | Nein                     |

- `layout.css.attr.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### `color-mix()` unterstützt mehrere Farbargumente

Die [`color-mix()`](/de/docs/Web/CSS/Reference/Values/color_value/color-mix) CSS Funktion unterstützt jetzt mehrere [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value) Werte und nicht nur zwei. Dies erlaubt es, viele Farben zu mischen und die Prozentsätze jeder Farbe festzulegen. ([Firefox-Bug 2007772](https://bugzil.la/2007772)).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 150                  | Ja                       |
| Developer Edition      | 149                  | Nein                     |
| Beta                   | 149                  | Nein                     |
| Release                | 149                  | Nein                     |

- `layout.css.color-mix-multi-color.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Medien-basierte Pseudo-Klassen

Die medienbasierten Pseudo-Klassen {{cssxref(":buffering")}}, {{cssxref(":muted")}}, {{cssxref(":paused")}}, {{cssxref(":playing")}}, {{cssxref(":seeking")}}, {{cssxref(":stalled")}}, und {{cssxref(":volume-locked")}} erlauben es, {{htmlelement("audio")}} und {{htmlelement("video")}} Elemente basierend auf ihrem aktuellen Zustand, wie z. B. Abspielen oder Pause, zu gestalten. ([Firefox-Bug 1707584](https://bugzil.la/1707584), [Firefox-Bug 2014512](https://bugzil.la/2014512)).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 150                  | Ja                       |
| Developer Edition      | 149                  | Nein                     |
| Beta                   | 149                  | Nein                     |
| Release                | 149                  | Nein                     |

- `dom.media.pseudo-classes.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### `@container style()` Abfragen

Die [`@container`](/de/docs/Web/CSS/Reference/At-rules/@container) CSS At-Regel unterstützt [`style()`](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries) Abfragen. Dies ermöglicht es, zu prüfen, ob ein Container eine gültige CSS-Deklaration, eine CSS-Eigenschaft oder eine benutzerdefinierte Eigenschaft hat, und die Stile seiner Kinder entsprechend anzuwenden. ([Firefox-Bug 2014404](https://bugzil.la/2014404)).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 149                  | Ja                       |
| Developer Edition      | 149                  | Nein                     |
| Beta                   | 149                  | Nein                     |
| Release                | 149                  | Nein                     |

- `layout.css.style-queries.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

## SVG

**Keine experimentellen Funktionen in diesem Veröffentlichungszyklus.**

## JavaScript

**Keine experimentellen Funktionen in diesem Veröffentlichungszyklus.**

## APIs

### Scoped Custom Element Registries

Die Unterstützung für [scoped custom element registries](/de/docs/Web/API/Web_components/Using_custom_elements#scoped_custom_element_registries) wird implementiert. Gescopte Registries ermöglichen einem Shadow-Baum, ein unabhängiges [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry) zu erstellen, dessen Definitionen nur für diesen spezifischen DOM-Unterbaum gelten. Dies kann verwendet werden, um Konflikte zu vermeiden, bei denen mehrere Webkomponenten Elemente mit demselben Namen deklarieren.

Die Implementierung umfasst:

- `customElementRegistry` Eigenschaft auf [`Document`](/de/docs/Web/API/Document), [`Element`](/de/docs/Web/API/Element), und [`ShadowRoot`](/de/docs/Web/API/ShadowRoot). ([Firefox-Bug 2018900](https://bugzil.la/2018900)).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 150                  | Nein                     |
| Developer Edition      | 150                  | Nein                     |
| Beta                   | 150                  | Nein                     |
| Release                | 150                  | Nein                     |

- `dom.scoped-custom-element-registries.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### CSS Typed Object Model Level 1

Die Implementierungsarbeiten am [CSS Typed OM Level 1](https://drafts.css-houdini.org/css-typed-om/) haben begonnen. Zum Beispiel wird die [`to()`](/de/docs/Web/API/CSSNumericValue/to) Methode der [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) Schnittstelle unterstützt, um einen CSS-numerischen Wert von einer Einheit in eine andere umzuwandeln. ([Firefox-Bug 1278697](https://bugzil.la/1278697)).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 149                  | Nein                     |
| Developer Edition      | 149                  | Nein                     |
| Beta                   | 149                  | Nein                     |
| Release                | 149                  | Nein                     |

- `layout.css.typed-om.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Benachrichtigungsaktionen und maxActions-Eigenschaften

Die [`actions`](/de/docs/Web/API/Notification/actions) Lesezeichen-Eigenschaft und die [`maxActions`](/de/docs/Web/API/Notification/maxActions_static) statische Lesezeichen-Eigenschaft der [`Notification`](/de/docs/Web/API/Notification) Schnittstelle werden in Nightly auf dem Desktop unterstützt. Diese enthalten die Benachrichtigungsaktionen, die mit [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification) gesetzt wurden, und die maximale Anzahl von Aktionen, die gesetzt werden können. ([Firefox-Bug 1225110](https://bugzil.la/1225110), [Firefox-Bug 1963263](https://bugzil.la/1963263)).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 138                  | Ja (nur Desktop)         |
| Developer Edition      | 138                  | Nein                     |
| Beta                   | 138                  | Nein                     |
| Release                | 138                  | Nein                     |

- `dom.webnotifications.actions.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Grafik: Canvas, WebGL und WebGPU

#### WebGL: Entwurfserweiterungen

Wenn diese Voreinstellung aktiviert ist, werden alle WebGL-Erweiterungen aktuell im "Entwurf"-Status, die getestet werden, für die Verwendung aktiviert. Derzeit gibt es keine von Firefox getesteten WebGL-Erweiterungen.

#### WebGPU API

Die [WebGPU API](/de/docs/Web/API/WebGPU_API) bietet Unterstützung auf niedriger Ebene für die Durchführung von Berechnungen und Grafik-Rendering unter Verwendung der [Graphics Processing Unit](https://de.wikipedia.org/wiki/Grafikprozessor) (GPU) des Geräts oder Computers des Benutzers. Ab Version 142 ist dies auf Windows in allen Kontexten außer Servicearbeitern aktiviert. Ab Version 147 ist dies auf macOS auf Apple Silicon in allen Browserkontexten außer Servicearbeitern aktiviert. Für andere Plattformen wie Linux und macOS auf Intel Silicon ist es in Nightly aktiviert. Siehe [Firefox-Bug 1602129](https://bugzil.la/1602129) für unseren Fortschritt bei dieser API.

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert?                                                                |
| ---------------------- | -------------------- | --------------------------------------------------------------------------------------- |
| Nightly                | 141                  | Ja                                                                                      |
| Developer Edition      | 141                  | Nein (Ja auf Windows und macOS auf Apple Silicon, nicht einschließlich Servicearbeiter) |
| Beta                   | 141                  | Nein (Ja auf Windows und macOS auf Apple Silicon, nicht einschließlich Servicearbeiter) |
| Release                | 141                  | Nein (Ja auf Windows und macOS auf Apple Silicon, nicht einschließlich Servicearbeiter) |

- `dom.webgpu.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren (in Nightly und auf Windows in allen Veröffentlichungen aktiviert)
- `dom.webgpu.service-workers.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren (in Nightly aktiviert)

### WebRTC und Medien

Die folgenden experimentellen Funktionen umfassen diejenigen in Medien-APIs wie der [WebRTC API](/de/docs/Web/API/WebRTC_API), der [Web Audio API](/de/docs/Web/API/Web_Audio_API), der [Media Source Extensions API](/de/docs/Web/API/Media_Source_Extensions_API), der [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API) und der [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API).

#### HTMLMediaElement Eigenschaften: audioTracks und videoTracks

Durch Aktivierung dieser Funktion werden die Eigenschaften [`HTMLMediaElement.audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks) und [`HTMLMediaElement.videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks) zu allen HTML-Medienelementen hinzugefügt. Da Firefox jedoch derzeit keine Unterstützung für mehrere Audio- und Videospuren bietet, funktionieren die häufigsten Anwendungsfälle für diese Eigenschaften nicht und sie sind beide standardmäßig deaktiviert. Weitere Informationen finden Sie unter [Firefox-Bug 1057233](https://bugzil.la/1057233).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 33                   | Nein                     |
| Developer Edition      | 33                   | Nein                     |
| Beta                   | 33                   | Nein                     |
| Release                | 33                   | Nein                     |

- `media.track.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

#### Asynchrones Hinzufügen und Entfernen von SourceBuffer

Dies fügt die auf Versprechen basierenden Methoden [`appendBufferAsync()`](/de/docs/Web/API/SourceBuffer/appendBufferAsync) und [`removeAsync()`](/de/docs/Web/API/SourceBuffer/removeAsync) zum Hinzufügen und Entfernen von Medienquellenpuffern zur [`SourceBuffer`](/de/docs/Web/API/SourceBuffer) Schnittstelle hinzu. Weitere Informationen finden Sie unter [Firefox-Bug 1280613](https://bugzil.la/1280613) und [Firefox-Bug 778617](https://bugzil.la/778617).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 62                   | Nein                     |
| Developer Edition      | 62                   | Nein                     |
| Beta                   | 62                   | Nein                     |
| Release                | 62                   | Nein                     |

- `media.mediasource.experimental.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

#### AVIF Compliance-Strictness

Die Voreinstellung `image.avif.compliance_strictness` kann verwendet werden, um die _Striktheit_ zu steuern, die beim Verarbeiten von [AVIF](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) Bildern angewendet wird. Dies ermöglicht Firefox-Benutzern, Bilder anzuzeigen, die in einigen anderen Browsern angezeigt werden, auch wenn sie nicht strikt konform sind.

| Veröffentlichungskanal | Hinzugefügte Version | Standardwert |
| ---------------------- | -------------------- | ------------ |
| Nightly                | 92                   | 1            |
| Developer Edition      | 92                   | 1            |
| Beta                   | 92                   | 1            |
| Release                | 92                   | 1            |

- `image.avif.compliance_strictness`
  - : Numerischer Wert, der ein _Striktheitsniveau_ angibt. Zulässige Werte sind:
    - `0`: Permissiv. Akzeptieren Sie Bilder mit Spezifikationsverletzungen sowohl in Empfehlungen ("sollten" Sprache) als auch in Anforderungen ("müssen" Sprache), sofern sie sicher oder eindeutig interpretiert werden können.
    - `1` **(Standard)**: Gemischt. Ablehnung von Verletzungen von Anforderungen ("müssen"), aber Erlaubnis von Verletzungen von Empfehlungen ("sollten").
    - `2`: Strikt. Ablehnung von Verletzungen der angegebenen Anforderungen oder Empfehlungen.

#### JPEG XL Unterstützung

Firefox unterstützt [JPEG XL](https://jpeg.org/jpegxl/) Bilder, wenn diese Funktion aktiviert ist. Weitere Informationen finden Sie in [Firefox-Bug 1539075](https://bugzil.la/1539075).

Beachten Sie, dass die Funktion, wie unten gezeigt, nur in Nightly-Builds verfügbar ist (unabhängig davon, ob die Voreinstellung gesetzt ist oder nicht). In Firefox 149 wurde der bisherige C++ [JPEG XL](https://jpeg.org/jpegxl/) Bilddecoder durch eine neue Rust-basierte Implementierung ersetzt, die die `jxl-rs` Bibliothek verwendet ([Firefox-Bug 1986393](https://bugzil.la/1986393)).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 90                   | Nein                     |
| Developer Edition      | —                    | —                        |
| Beta                   | —                    | —                        |
| Release                | —                    | —                        |

- `image.jxl.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

#### Dokument-Bild-in-Bild-API

Die [Document Picture-in-Picture API](/de/docs/Web/API/Document_Picture-in-Picture_API) macht es möglich, ein Fenster, das immer im Vordergrund ist, zu öffnen, das mit beliebigen HTML-Inhalten wie einem Video mit benutzerdefinierten Steuerelementen oder einem Satz von Streams, die die Teilnehmer eines Videokonferenzanrufs zeigen, befüllt werden kann. Weitere Informationen finden Sie unter [Firefox-Bug 1858562](https://bugzil.la/1858562).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 148                  | Ja                       |
| Developer Edition      | 148                  | Nein                     |
| Beta                   | 148                  | Nein                     |
| Release                | 148                  | Nein                     |

- `dom.documentpip.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### WebVR API (Deaktiviert)

Die veraltete [WebVR API](/de/docs/Web/API/WebVR_API) steht auf dem Weg zur Entfernung. Sie ist standardmäßig in allen Builds deaktiviert [Firefox-Bug 1750902](https://bugzil.la/1750902).

| Veröffentlichungskanal | Entfernte Version | Standardmäßig aktiviert? |
| ---------------------- | ----------------- | ------------------------ |
| Nightly                | 98                | Nein                     |
| Developer Edition      | 98                | Nein                     |
| Beta                   | 98                | Nein                     |
| Release                | 98                | Nein                     |

- `dom.vr.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### GeometryUtils Methoden: convertPointFromNode(), convertRectFromNode(), und convertQuadFromNode()

Die `GeometryUtils` Methoden `convertPointFromNode()`, `convertRectFromNode()`, und `convertQuadFromNode()` ordnen den gegebenen Punkt, das Rechteck oder das Viereck von dem [`Node`](/de/docs/Web/API/Node), auf dem sie aufgerufen werden, einem anderen Knoten zu. (Siehe [Firefox-Bug 918189](https://bugzil.la/918189) für weitere Details.)

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 31                   | Ja                       |
| Developer Edition      | 31                   | Nein                     |
| Beta                   | 31                   | Nein                     |
| Release                | 31                   | Nein                     |

- `layout.css.convertFromNode.enable`
  - : Setzen Sie auf `true`, um zu aktivieren.

### GeometryUtils Methode: getBoxQuads()

Die `GeometryUtils` Methode `getBoxQuads()` gibt die CSS-Boxen für einen [`Node`](/de/docs/Web/API/Node) relativ zu einem anderen Knoten oder Ansichtsfenster zurück. (Siehe [Firefox-Bug 917755](https://bugzil.la/917755) für weitere Details.)

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 31                   | Ja                       |
| Developer Edition      | 31                   | Nein                     |
| Beta                   | 31                   | Nein                     |
| Release                | 31                   | Nein                     |

- `layout.css.getBoxQuads.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Payment Request API

#### Primäre Zahlungsabwicklung

Die [Payment Request API](/de/docs/Web/API/Payment_Request_API) bietet Unterstützung für die Abwicklung webbasierter Zahlungen innerhalb von Webinhalten oder Apps. Aufgrund eines Fehlers, der während des Tests der Benutzeroberfläche aufgetaucht ist, haben wir beschlossen, die Auslieferung dieser API zu verschieben, während Diskussionen über mögliche Änderungen an der API stattfinden. Die Arbeit ist im Gange. (Siehe [Firefox-Bug 1318984](https://bugzil.la/1318984) für weitere Details.)

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 55                   | Nein                     |
| Developer Edition      | 55                   | Nein                     |
| Beta                   | 55                   | Nein                     |
| Release                | 55                   | Nein                     |

- `dom.payments.request.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.
- `dom.payments.request.supportedRegions`
  - : Ländercodes als durch Kommas getrennte Zulassungsliste von Regionen (z. B. `US,CA`).

### WebShare API

Die [Web Share API](/de/docs/Web/API/Web_Share_API) ermöglicht das Teilen von Dateien, URLs und anderen Daten von einer Website. Diese Funktion ist auf Android in allen Builds aktiviert, aber hinter einer Voreinstellung auf dem Desktop (sofern unten nicht anders angegeben).

| Veröffentlichungskanal | Versionsänderung | Standardmäßig aktiviert?                    |
| ---------------------- | ---------------- | ------------------------------------------- |
| Nightly                | 71               | Nein (Standard). Ja (Windows ab Version 92) |
| Developer Edition      | 71               | Nein                                        |
| Beta                   | 71               | Nein                                        |
| Release                | 71               | Nein (Desktop). Ja (Android).               |

- `dom.webshare.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Notifications API

Benachrichtigungen haben die [`requireInteraction`](/de/docs/Web/API/Notification/requireInteraction) Eigenschaft, die standardmäßig auf Windows-Systemen und in der Nightly-Version auf `true` gesetzt ist ([Firefox-Bug 1794475](https://bugzil.la/1794475)).

| Veröffentlichungskanal | Versionsänderung | Standardmäßig aktiviert? |
| ---------------------- | ---------------- | ------------------------ |
| Nightly                | 117              | Ja                       |
| Developer Edition      | 117              | Nein                     |
| Beta                   | 117              | Nein                     |
| Release                | 117              | Nur Windows              |

- `dom.webnotifications.requireinteraction.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

## Sicherheit und Privatsphäre

### Unsichere Seitenauszeichnung

Die beiden Voreinstellungen `security.insecure_connection_text_*` fügen ein "Nicht sicher" Textlabel in der Adressleiste neben dem traditionellen Schloss-Symbol hinzu, wenn eine Seite unsicher geladen wird (d.h. unter Verwendung von {{Glossary("HTTP", "HTTP")}} anstelle von {{Glossary("HTTPS", "HTTPS")}}). Die Voreinstellung `browser.urlbar.trimHttps` kürzt das `https:` Präfix von URLs in der Adressleiste. Siehe [Firefox-Bug 1853418](https://bugzil.la/1853418) für weitere Details.

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 121                  | Ja                       |
| Developer Edition      | 60                   | Nein                     |
| Beta                   | 60                   | Nein                     |
| Release                | 60                   | Nein                     |

- `security.insecure_connection_text.enabled`
  - : Setzen Sie auf `true`, um das Textlabel im normalen Browsing-Mode zu aktivieren.
- `security.insecure_connection_text.pbmode.enabled`
  - : Setzen Sie auf `true`, um das Textlabel im privaten Browsing-Mode zu aktivieren.
- `browser.urlbar.trimHttps`
  - : Setzen Sie auf `true`, um das `https:` Präfix von URLs in der Adressleiste abzuschneiden.

### Einschränkung von Inhalten für Erwachsene mit `<meta name="rating">`

Das nicht standardisierte [`<meta name="rating">`](/de/docs/Web/HTML/Reference/Elements/meta) Element kann auf einer Webseite enthalten sein, um den Inhalt der Seite als eingeschränkt/erwachsen zu kennzeichnen. Zum Zeitpunkt des Schreibens gibt es zwei mögliche `content` Werte, `adult` ([definiert von Google](https://developers.google.com/search/docs/specialty/explicit/guidelines#add-metadata)) und `RTA-5042-1996-1400-1577-RTA` ([definiert von ASACP](https://www.rtalabel.org/?content=howto#top)), die beide die gleiche Wirkung haben (es können in Zukunft weitere Optionen hinzugefügt werden).

Die folgenden `<meta>` Elemente sind gleichwertig:

```html
<meta name="rating" content="adult" />
<meta name="rating" content="RTA-5042-1996-1400-1577-RTA" />
```

Browser, die dieses Element erkennen, können dann Schritte unternehmen, um Benutzer daran zu hindern, den Inhalt anzusehen. Die Implementierung von Firefox ersetzt die Seite durch den Inhalt, der unter `about:restricted` gefunden wird, was dem Benutzer erklärt, dass er versucht, eingeschränkten Inhalt anzusehen, erklärt, warum er ihn nicht ansehen kann, und gibt ihm einen Rückwärtsknopf, um zurückzukehren.

Weitere Informationen finden Sie in [Firefox-Bug 1991135](https://bugzil.la/1991135).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 146                  | Nein                     |
| Developer Edition      | 146                  | Nein                     |
| Beta                   | 146                  | Nein                     |
| Release                | 146                  | Nein                     |

- `security.restrict_to_adults.always`
  - : Setzen Sie auf `true`, um den Zugriff auf Webseiten einzuschränken, die sich selbst als erwachsen identifizieren, indem sie ein `<meta name="rating">` Element einfügen.
- `security.restrict_to_adults.respect_platform`
  - : Setzen Sie auf `true`, um den Zugriff auf Webseiten nur dann einzuschränken, wenn entsprechende Kindersicherungen auf dem zugrunde liegenden Betriebssystem aktiviert sind (zum Beispiel, wenn die macOS _Inhalt & Datenschutz_ Einstellungen festgelegt sind, um expliziten Webinhalt einzuschränken).

### Berechtigungspolitik / Funktionspolitik

[Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) erlaubt es Webentwicklern, bestimmte Funktionen und APIs im Browser selektiv zu aktivieren, zu deaktivieren und deren Verhalten zu ändern. Es ist ähnlich wie CSP, kontrolliert jedoch Funktionen anstelle von Sicherheitsverhalten. Dies wird in Firefox als **Funktionspolitik** implementiert, dem Namen, der in einer früheren Version der Spezifikation verwendet wurde.

Beachten Sie, dass unterstützte Richtlinien durch das [`allow`](/de/docs/Web/HTML/Reference/Elements/iframe#allow) Merkmal auf `<iframe>` Elementen gesetzt werden können, selbst wenn die Benutzervoreinstellung nicht gesetzt ist.

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 65                   | Nein                     |
| Developer Edition      | 65                   | Nein                     |
| Beta                   | 65                   | Nein                     |
| Release                | 65                   | Nein                     |

- `dom.security.featurePolicy.header.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Privacy Preserving Attribution API (PPA)

Die [PPA API](https://support.mozilla.org/en-US/kb/privacy-preserving-attribution) bietet eine Alternative zur Benutzerverfolgung für die Attribution von Anzeigen mit dem neuen `navigator.privateAttribution` Objekt mit den Methoden `saveImpression()` und `measureConversion()`. Lesen Sie mehr über die PPA [im ursprünglichen Erklärer](https://github.com/mozilla/explainers/tree/main/archive/ppa-experiment) und die [vorgeschlagene Spezifikation](https://w3c.github.io/ppa/). Dieses Experiment kann für Websites über [Herkunftsexperiment](https://wiki.mozilla.org/Origin_Trials) oder im Browser durch das Setzen der Voreinstellung auf `1` aktiviert werden. ([Firefox-Bug 1900929](https://bugzil.la/1900929)).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 128                  | Nein                     |
| Developer Edition      | 128                  | Nein                     |
| Beta                   | 128                  | Nein                     |
| Release                | 128                  | Nein                     |

- `dom.origin-trials.private-attribution.state`
  - : Setzen Sie auf `true`, um zu aktivieren.

## HTTP

### Integritätspolitik für Stylesheet-Ressourcen

Die {{httpheader("Integrity-Policy")}} und {{httpheader("Integrity-Policy-Report-Only")}} HTTP-Header werden jetzt für Stilressourcen unterstützt. Diese erlauben es Websites, entweder [Subressourcenintegritätsgarantien](/de/docs/Web/Security/Defenses/Subresource_Integrity) für Stile durchzusetzen oder nur Verstöße gegen die Richtlinie zu melden. Beachten Sie, dass Firefox Meldungsendpunkte ignoriert und Verstöße in die Entwicklerkonsole protokolliert. Wenn `Integrity-Policy` verwendet wird, blockiert der Browser das Laden von Stilen, die in einem {{HTMLElement("link")}}-Element referenziert sind, mit [`rel="stylesheet"`](/de/docs/Web/HTML/Reference/Attributes/rel#stylesheet), die entweder das [`integrity`](/de/docs/Web/HTML/Reference/Elements/script#integrity) Merkmal nicht aufweisen oder einen Integritätshash haben, der nicht mit der Ressource auf dem Server übereinstimmt. ([Firefox-Bug 1976656](https://bugzil.la/1976656)).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 142                  | Nein                     |
| Developer Edition      | 142                  | Nein                     |
| Beta                   | 142                  | Nein                     |
| Release                | 142                  | Nein                     |

- `security.integrity_policy.stylesheet.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Storage Access Header

Die {{httpheader("Sec-Fetch-Storage-Access")}} und {{httpheader("Activate-Storage-Access")}} HTTP-Header werden jetzt unterstützt, um einen effizienteren [Storage Access API](/de/docs/Web/API/Storage_Access_API) Workflow zu ermöglichen. ([Firefox-Bug 1991688](https://bugzil.la/1991688)).

Im JavaScript-Only-Workflow muss eine Drittanbieterressource angefordert und geladen werden, um eine Speicherzugangsberechtigung für einen bestimmten Kontext zu aktivieren (z.B. ein neuer Browser-Tab). Dies ist erforderlich, selbst wenn die Berechtigung bereits erteilt wurde. Die Speicherzugangs-Header ermöglichen es dem Browser, den Berechtigungsstatus für den bestimmten Kontext anzuzeigen, sodass der Server die Aktivierung einer bereits erteilten Berechtigung anfordern kann. Dies vermeidet den Overhead, die Ressource unnötig abzurufen und zu laden.

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 145                  | Ja                       |
| Developer Edition      | 145                  | Nein                     |
| Beta                   | 145                  | Nein                     |
| Release                | 145                  | Nein                     |

- `dom.storage_access.headers.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Idempotency-Key

Der {{httpheader("Idempotency-Key")}} HTTP-Anforderungsheader kann von der Website-Clientseite verwendet werden, um {{HTTPMethod("POST")}} oder {{HTTPMethod("PATCH")}} Anfragen {{Glossary("idempotent", "idempotent")}} zu machen, wenn sie mit einem Server verwendet werden, der dies unterstützt. Die Spezifikation gibt an, dass der Server dokumentieren und bekannt machen sollte, welche Endpunkte diesen Header erfordern, das Format des Schlüssels und erwartete Fehlermeldungen.

Firefox fügt den Header automatisch mit einem eindeutigen Schlüssel für jede neue `POST` Anfrage hinzu, wenn er nicht bereits clientseitig von der Seite hinzugefügt wurde. Dies vereinfacht den clientseitigen Code, der erforderlich ist, um mit Servern zu arbeiten, die die Funktion unterstützen.

([Firefox-Bug 1830022](https://bugzil.la/1830022)).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 135                  | Nein                     |
| Developer Edition      | 135                  | Nein                     |
| Beta                   | 135                  | Nein                     |
| Release                | 135                  | Nein                     |

- `network.http.idempotencyKey.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### `Accept` Header mit MIME-Typ `image/jxl`

Der HTTP [`Accept`](/de/docs/Web/HTTP/Reference/Headers/Accept) Header in [Standardanfragen und Bildanfragen](/de/docs/Web/HTTP/Guides/Content_negotiation/List_of_default_Accept_values) kann über eine Voreinstellung konfiguriert werden, um die Unterstützung für den MIME-Typ `image/jxl` anzuzeigen.

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 128                  | Nein                     |
| Developer Edition      | 128                  | Nein                     |
| Beta                   | 128                  | Nein                     |
| Release                | 128                  | Nein                     |

- `image.jxl.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### `SameSite=Lax` standardmäßig

[`SameSite` Cookies](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) haben einen Standardwert von `Lax`. Mit dieser Einstellung werden Cookies nur gesendet, wenn ein Benutzer zur Ursprungsseite navigiert, nicht jedoch bei abteilungsübergreifenden Unteranfragen zum Laden von Bildern oder Frames auf eine Drittanbieterseite usw. Weitere Details finden Sie unter [Firefox-Bug 1617609](https://bugzil.la/1617609).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 69                   | Nein                     |
| Developer Edition      | 69                   | Nein                     |
| Beta                   | 69                   | Nein                     |
| Release                | 69                   | Nein                     |

- `network.cookie.sameSite.laxByDefault`
  - : Setzen Sie auf `true`, um zu aktivieren.

### `Access-Control-Allow-Headers` Wildcard umfasst nicht `Authorization`

Der [`Access-Control-Allow-Headers`](/de/docs/Web/HTTP/Reference/Headers/Access-Control-Allow-Headers) ist ein Antwortheader auf eine {{Glossary("Preflight_request", "CORS-Preflight-Anfrage")}}, die anzeigt, welche Anforderungsheader in die endgültige Anfrage aufgenommen werden dürfen. Die Antwortdirektive kann ein Wildcard (`*`) enthalten, das angibt, dass die endgültige Anfrage alle Header außer dem `Authorization` Header enthalten kann.

Standardmäßig enthält Firefox den `Authorization` Header in der endgültigen Anfrage, nachdem eine Antwort mit `Access-Control-Allow-Headers: *` empfangen wurde. Setzen Sie die Voreinstellung auf `false`, um sicherzustellen, dass Firefox den `Authorization` Header nicht einfügt. Für weitere Details siehe [Firefox-Bug 1687364](https://bugzil.la/1687364).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 115                  | Ja                       |
| Developer Edition      | 115                  | Ja                       |
| Beta                   | 115                  | Ja                       |
| Release                | 115                  | Ja                       |

- `network.cors_preflight.authorization_covered_by_wildcard`
  - : Setzen Sie auf `true`, um zu aktivieren.

## Entwicklertools

Die Entwicklertools von Mozilla entwickeln sich ständig weiter. Wir experimentieren mit neuen Ideen, fügen neue Funktionen hinzu und testen sie auf den Kanälen Nightly und Developer Edition, bevor sie in die Beta und Veröffentlichung gelangen. Die folgenden Funktionen sind die aktuellen experimentellen Entwicklertools.

**Keine experimentellen Funktionen in diesem Veröffentlichungszyklus.**

## Siehe auch

- [Firefox Entwickler-Veröffentlichungshinweise](/de/docs/Mozilla/Firefox/Releases)
- [Firefox Nightly](https://www.firefox.com/en-US/channel/desktop/)
- [Firefox Developer Edition](https://www.firefox.com/en-US/channel/desktop/developer/)
