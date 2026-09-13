---
title: Experimentelle Funktionen in Firefox
short-title: Experimentelle Funktionen
slug: Mozilla/Firefox/Experimental_features
l10n:
  sourceCommit: 9ba3ab2c48fb51423f811d329818071e4c79caca
---

Diese Seite listet die experimentellen und teilweise implementierten Funktionen von Firefox auf, einschließlich sich entwickelnder oder vorgeschlagener Webplattformstandards.
Jeder Eintrag unten enthält Informationen darüber, in welchen Builds eine Funktion enthalten ist (Nightly, Beta, Developer Edition oder Release), ob sie standardmäßig aktiviert ist oder nicht und wie die **Einstellung** heißt, mit der Sie die Funktion aktivieren oder konfigurieren können.
Die Beschreibung jeder Funktion enthält außerdem Links zu relevanten [Bugzilla-Bugs](https://bugzilla.mozilla.org), welche die Funktion implementieren oder aktivieren.
Diese Informationen ermöglichen es Ihnen, experimentelle Funktionen auszuprobieren und Feedback zu geben, bevor sie offiziell veröffentlicht werden.

Im Hinblick auf ihren Lebenszyklus erscheinen neue Funktionen normalerweise zuerst in [Nightly](https://www.firefox.com/en-US/channel/desktop/#nightly), wo sie für frühes Feedback und Tests häufig standardmäßig aktiviert sind.
Wenn keine größeren Probleme gefunden werden, werden sie in Vorab-Builds von [Beta](https://www.firefox.com/en-US/channel/desktop/#beta) und [Developer Edition](https://www.firefox.com/en-US/channel/desktop/developer/) aufgenommen. Schließlich werden genehmigte Funktionen im [stabilen Release](https://www.firefox.com/en-US/) bereitgestellt.
Wenn eine Funktion in einem Release standardmäßig aktiviert ist, gilt sie nicht mehr als experimentell und wird von dieser Seite entfernt.

Um diese Funktionen zu aktivieren, geben Sie `about:config` in die Firefox-Adressleiste ein, suchen Sie nach der zugehörigen **Einstellung** und ändern Sie ihren Wert, der normalerweise zwischen `true` und `false` umgeschaltet wird.
Abhängig von der Funktion müssen Sie möglicherweise den Browser neu starten, damit die Änderung wirksam wird.
Weitere Informationen zum Verwalten von Einstellungen in Firefox finden Sie im Support-Artikel zum [Firefox-Konfigurationseditor](https://support.mozilla.org/en-US/kb/about-config-editor-firefox).

## HTML

### Layout für input type="search"

Das Layout für `input type="search"` wurde aktualisiert. Dadurch erhält ein Suchfeld ein Symbol zum Löschen, sobald jemand Text eingibt, um mit Implementierungen anderer Browser übereinzustimmen. Weitere Details finden Sie in [Firefox-Bug 558594](https://bugzil.la/558594).

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ----------------- | ---------------------- | ------------------------ |
| Nightly           | 81                     | Nein                     |
| Developer Edition | 81                     | Nein                     |
| Beta              | 81                     | Nein                     |
| Release           | 81                     | Nein                     |

- `layout.forms.input-type-search.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Passwortanzeige umschalten

HTML-Passworteingabeelemente ([`<input type="password">`](/de/docs/Web/HTML/Reference/Elements/input/password)) enthalten ein „Augen“-Symbol, das umgeschaltet werden kann, um den Passworttext anzuzeigen oder auszublenden ([Firefox-Bug 502258](https://bugzil.la/502258)).

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ----------------- | ---------------------- | ------------------------ |
| Nightly           | 96                     | Nein                     |
| Developer Edition | 96                     | Nein                     |
| Beta              | 96                     | Nein                     |
| Release           | 96                     | Nein                     |

- `layout.forms.reveal-password-button.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Zeitauswahl in Eingabeelementen `datetime-local` und `time`

Die HTML-Elemente [`<input type="datetime-local">`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local) und [`<input type="time">`](/de/docs/Web/HTML/Reference/Elements/input/time) unterstützen eine Zeitauswahl. ([Firefox-Bug 1726108](https://bugzil.la/1726108)).

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ----------------- | ---------------------- | ------------------------ |
| Nightly           | 144                    | Nein                     |
| Developer Edition | 144                    | Nein                     |
| Beta              | 144                    | Nein                     |
| Release           | 144                    | Nein                     |

- `dom.forms.datetime.timepicker`
  - : Zum Aktivieren auf `true` setzen.

### Attribute `alpha` und `colorspace` in `color`-Eingabeelementen

Das HTML-Element [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color) unterstützt die Attribute [`alpha`](/de/docs/Web/HTML/Reference/Elements/input/color#alpha) und [`colorspace`](/de/docs/Web/HTML/Reference/Elements/input/color#colorspace). ([Firefox-Bug 1919718](https://bugzil.la/1919718)).

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ----------------- | ---------------------- | ------------------------ |
| Nightly           | 149                    | Ja                       |
| Developer Edition | -                      | -                        |
| Beta              | -                      | -                        |
| Release           | -                      | -                        |

- `dom.forms.html_color_picker.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Attribute `headingoffset` und `headingreset`

Das globale Attribut [`headingoffset`](/de/docs/Web/HTML/Reference/Global_attributes/headingoffset) erhöht die berechnete Überschriftenebene der [Überschriftenelemente](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) innerhalb des Elements, für das es gesetzt ist, sodass eine Komponente überall auf einer Seite dasselbe Überschriften-Markup verwenden kann. Das Attribut [`headingreset`](/de/docs/Web/HTML/Reference/Global_attributes/headingreset) verhindert, dass die Offsets von Vorgängerelementen auf die Überschriften innerhalb des Elements angewendet werden, für das es gesetzt ist. ([Firefox-Bug 1974383](https://bugzil.la/1974383)).

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ----------------- | ---------------------- | ------------------------ |
| Nightly           | 153                    | Nein                     |
| Developer Edition | 153                    | Nein                     |
| Beta              | 153                    | Nein                     |
| Release           | 153                    | Nein                     |

- `dom.headingoffset.enabled`
  - : Zum Aktivieren auf `true` setzen.

## CSS

### `circle()` und `ellipse()` erlauben die Schlüsselwörter `farthest-corner` und `closest-corner`

Die Schlüsselwörter `farthest-corner` und `closest-corner` können jetzt verwendet werden, um die Radiuswerte der CSS-Grundformen [`ellipse()`](/de/docs/Web/CSS/Reference/Values/basic-shape/ellipse) und [`circle()`](/de/docs/Web/CSS/Reference/Values/basic-shape/circle) anzugeben.
Weitere Details finden Sie in [Firefox-Bug 2037673](https://bugzil.la/2037673).

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ----------------- | ---------------------- | ------------------------ |
| Nightly           | 153                    | Ja                       |
| Developer Edition | 153                    | Nein                     |
| Beta              | 153                    | Nein                     |
| Release           | 153                    | Nein                     |

- `layout.css.ellipse-corners.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Hexadezimalfelder zur Anzeige unerwarteter Steuerzeichen

Diese Funktion rendert Steuerzeichen (Unicode-Kategorie Cc) außer _Tabulator_ (`U+0009`), _Zeilenvorschub_ (`U+000A`), _Seitenvorschub_ (`U+000C`) und _Wagenrücklauf_ (`U+000D`) als Hexadezimalfeld, wenn sie nicht erwartet werden. Weitere Details finden Sie in [Firefox-Bug 1099557](https://bugzil.la/1099557).

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ----------------- | ---------------------- | ------------------------ |
| Nightly           | 43                     | Ja                       |
| Developer Edition | 43                     | Nein                     |
| Beta              | 43                     | Nein                     |
| Release           | 43                     | Nein                     |

- `layout.css.control-characters.visible`
  - : Zum Aktivieren auf `true` setzen.

### Eigenschaft initial-letter

Die CSS-Eigenschaft {{cssxref("initial-letter")}} ist Teil der Spezifikation [CSS Inline Layout](https://drafts.csswg.org/css-inline/) und ermöglicht Ihnen anzugeben, wie abgesenkte, angehobene und versenkte Initialbuchstaben dargestellt werden. Weitere Details finden Sie in [Firefox-Bug 1223880](https://bugzil.la/1223880).

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ----------------- | ---------------------- | ------------------------ |
| Nightly           | 50                     | Nein                     |
| Developer Edition | 50                     | Nein                     |
| Beta              | 50                     | Nein                     |
| Release           | 50                     | Nein                     |

- `layout.css.initial-letter.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Funktion fit-content()

Die Funktion [`fit-content()`](/de/docs/Web/CSS/Reference/Values/fit-content_function), wie sie auf {{cssxref("width")}} und andere Größenanpassungseigenschaften angewendet wird. Diese Funktion wird bereits gut für die Größenbestimmung von CSS-Grid-Layout-Tracks unterstützt. Weitere Details finden Sie in [Firefox-Bug 1312588](https://bugzil.la/1312588).

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ----------------- | ---------------------- | ------------------------ |
| Nightly           | 91                     | Nein                     |
| Developer Edition | 91                     | Nein                     |
| Beta              | 91                     | Nein                     |
| Release           | 91                     | Nein                     |

- `layout.css.fit-content-function.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Scrollgesteuerte Animationen

Früher als „scroll-linked animations“ bezeichnet, hängt eine [scrollgesteuerte Animation](/de/docs/Web/CSS/Guides/Scroll-driven_animations) von der Scrollposition einer Bildlaufleiste statt von Zeit oder einer anderen Dimension ab.
Die Eigenschaften {{cssxref('scroll-timeline-name')}} und {{cssxref('scroll-timeline-axis')}} (sowie die Kurzform-Eigenschaft {{cssxref('scroll-timeline')}}) ermöglichen Ihnen anzugeben, dass eine bestimmte Bildlaufleiste in einem bestimmten benannten Container als Quelle für eine scrollgesteuerte Animation verwendet werden kann.
Die Scroll-Zeitachse kann dann mit einer [Animation](/de/docs/Web/CSS/Guides/Animations) verknüpft werden, indem die Eigenschaft {{cssxref('animation-timeline')}} auf den Namenwert gesetzt wird, der mittels `scroll-timeline-name` definiert wurde.

Bei der Verwendung der Kurzform-Eigenschaft {{cssxref('scroll-timeline')}} muss die Reihenfolge der Eigenschaftswerte {{cssxref('scroll-timeline-name')}} gefolgt von {{cssxref('scroll-timeline-axis')}} sein.
Sowohl die Langform- als auch die Kurzform-Eigenschaften sind hinter der Einstellung verfügbar.
Alternativ können Sie die funktionale Notation {{cssxref("animation-timeline/scroll")}} zusammen mit {{cssxref('animation-timeline')}} verwenden, um anzugeben, dass eine Bildlaufleistenachse in einem Vorgängerelement für die Zeitachse verwendet wird.

Weitere Informationen finden Sie in [Firefox-Bug 1807685](https://bugzil.la/1807685), [Firefox-Bug 1804573](https://bugzil.la/1804573), [Firefox-Bug 1809005](https://bugzil.la/1809005), [Firefox-Bug 1676791](https://bugzil.la/1676791), [Firefox-Bug 1754897](https://bugzil.la/1754897), [Firefox-Bug 1817303](https://bugzil.la/1817303) und [Firefox-Bug 1737918](https://bugzil.la/1737918).

Die Eigenschaften {{cssxref('timeline-scope')}}, {{cssxref('animation-range-start')}} und {{cssxref('animation-range-end')}} (sowie die Kurzform-Eigenschaft {{cssxref('animation-range')}}) werden noch nicht unterstützt. Weitere Informationen finden Sie in [Firefox-Bug 1676779](https://bugzil.la/1676779).

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ----------------- | ---------------------- | ------------------------ |
| Nightly           | 136                    | Ja                       |
| Developer Edition | 110                    | Nein                     |
| Beta              | 110                    | Nein                     |
| Release           | 110                    | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Medienfunktion prefers-reduced-transparency

Die CSS-Medienfunktion {{cssxref("@media/prefers-reduced-transparency")}} ermöglicht Ihnen zu erkennen, ob ein Benutzer die Einstellung aktiviert hat, um die Menge an transparenten oder durchscheinenden Ebeneneffekten auf seinem Gerät zu minimieren.
Weitere Details finden Sie in [Firefox-Bug 1736914](https://bugzil.la/1736914).

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ----------------- | ---------------------- | ------------------------ |
| Nightly           | 113                    | Nein                     |
| Developer Edition | 113                    | Nein                     |
| Beta              | 113                    | Nein                     |
| Release           | 113                    | Nein                     |

- `layout.css.prefers-reduced-transparency.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Medienfunktion inverted-colors

Die CSS-Medienfunktion {{cssxref("@media/inverted-colors")}} ermöglicht Ihnen zu erkennen, ob ein User-Agent oder das zugrunde liegende Betriebssystem Farben invertiert.
Weitere Details finden Sie in [Firefox-Bug 1794628](https://bugzil.la/1794628).

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ----------------- | ---------------------- | ------------------------ |
| Nightly           | 114                    | Nein                     |
| Developer Edition | 114                    | Nein                     |
| Beta              | 114                    | Nein                     |
| Release           | 114                    | Nein                     |

- `layout.css.inverted-colors.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Eigenschaft für benannte View-Progress-Zeitachsen

Die CSS-Eigenschaft {{cssxref("view-timeline-name")}} ermöglicht Ihnen, einem bestimmten Element einen Namen zu geben, der festlegt, dass dessen Vorgänger-Scroller-Element die Quelle einer View-Progress-Zeitachse ist.
Der Name kann dann `animation-timeline` zugewiesen werden, das anschließend das zugehörige Element animiert, während es sich durch den sichtbaren Bereich seines Vorgänger-Scrollers bewegt.
Weitere Details finden Sie in [Firefox-Bug 1737920](https://bugzil.la/1737920).

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ----------------- | ---------------------- | ------------------------ |
| Nightly           | 136                    | Ja                       |
| Developer Edition | 114                    | Nein                     |
| Beta              | 114                    | Nein                     |
| Release           | 114                    | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Funktion für anonyme View-Progress-Zeitachsen

Die CSS-Funktion {{cssxref("animation-timeline/view")}} ermöglicht Ihnen anzugeben, dass `animation-timeline` für ein Element eine View-Progress-Zeitachse ist, die das Element animiert, während es sich durch den sichtbaren Bereich seines Vorgänger-Scrollers bewegt.
Die Funktion definiert die Achse des übergeordneten Elements, die die Zeitachse bereitstellt, sowie den Einschub innerhalb des sichtbaren Bereichs, an dem die Animation startet und beginnt.
Weitere Details finden Sie in [Firefox-Bug 1808410](https://bugzil.la/1808410).

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ----------------- | ---------------------- | ------------------------ |
| Nightly           | 136                    | Ja                       |
| Developer Edition | 114                    | Nein                     |
| Beta              | 114                    | Nein                     |
| Release           | 114                    | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Mit Herstellerpräfix versehene Transform-Eigenschaften

Die mit `-moz-` präfixierten [CSS-Transform](/de/docs/Web/CSS/Guides/Transforms)-Eigenschaften können deaktiviert werden, indem die Einstellung `layout.css.prefixes.transforms` auf `false` gesetzt wird. Sie sollen deaktiviert werden, sobald die Standard-CSS-Zoom-Eigenschaften gut unterstützt werden. ([Firefox-Bug 1886134](https://bugzil.la/1886134), [Firefox-Bug 1855763](https://bugzil.la/1855763)).

Insbesondere deaktiviert diese Einstellung die folgenden präfixierten Eigenschaften:

- `-moz-backface-visibility`
- `-moz-perspective`
- `-moz-perspective-origin`
- `-moz-transform`
- `-moz-transform-origin`
- `-moz-transform-style`

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ----------------- | ---------------------- | ------------------------ |
| Nightly           | 120                    | Ja                       |
| Developer Edition | 120                    | Ja                       |
| Beta              | 120                    | Ja                       |
| Release           | 120                    | Ja                       |

- `layout.css.prefixes.transforms`
  - : Zum Aktivieren auf `true` setzen.

### Symmetrisches `letter-spacing`

Die CSS-Eigenschaft {{cssxref("letter-spacing")}} verteilt den angegebenen Buchstabenabstand jetzt gleichmäßig auf beide Seiten jedes Zeichens. Dies unterscheidet sich vom aktuellen Verhalten, bei dem der Abstand hauptsächlich auf einer Seite hinzugefügt wird. Dieser Ansatz kann den Textabstand verbessern, insbesondere bei Text mit gemischter Schreibrichtung.
([Firefox-Bug 1891446](https://bugzil.la/1891446)).

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ----------------- | ---------------------- | ------------------------ |
| Nightly           | 128                    | Ja                       |
| Developer Edition | 128                    | Ja                       |
| Beta              | 127                    | Nein                     |
| Release           | 127                    | Nein                     |

- `layout.css.letter-spacing.model`
  - : Zum Aktivieren auf `true` setzen.

### Pseudo-Elemente nach elementbasierten Pseudo-Elementen zulassen

Die Arbeit daran hat begonnen, [Pseudo-Elemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) wie {{cssxref("::first-letter")}} und {{cssxref("::before")}} an [elementbasierte Pseudo-Elemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements#element-backed_pseudo-elements) wie {{cssxref("::details-content")}} und {{cssxref("::file-selector-button")}} anzuhängen.

Dies ermöglicht Benutzern beispielsweise, den ersten Buchstaben des {{htmlElement("details")}}-Elements mit dem CSS-Selektor `::details-content::first-letter` zu gestalten oder vor einem {{HTMLElement("input") }} mit [`type="file"`](/de/docs/Web/HTML/Reference/Elements/input/file) über den CSS-Selektor `::file-selector-button::before` Inhalt hinzuzufügen.

Derzeit kann nur die Unterstützung für `::details-content::first-letter` mittels `@supports(::details-content::first-letter)` geparst werden.
Das Pseudo-Element `::file-selector-button` ist noch nicht als elementbasiertes Pseudo-Element markiert, daher gibt es keine Möglichkeit, dies zu testen.
([Firefox-Bug 1953557](https://bugzil.la/1953557), [Firefox-Bug 1941406](https://bugzil.la/1941406)).

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ----------------- | ---------------------- | ------------------------ |
| Nightly           | 138                    | Nein                     |
| Developer Edition | 138                    | Nein                     |
| Beta              | 138                    | Nein                     |
| Release           | 138                    | Nein                     |

### Pseudoklassen `:heading` und `:heading()`

Die Pseudoklasse {{cssxref(":heading")}} ermöglicht Ihnen, alle [Überschriftenelemente](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) (`<h1>`–`<h6>`) gleichzeitig zu gestalten, anstatt sie einzeln anzusprechen. Die funktionale Pseudoklasse {{cssxref(":heading()")}} ermöglicht Ihnen, Überschriftenelemente zu gestalten, die einer durch Kommas getrennten Liste von Ganzzahlen entsprechen, welche mit den Überschriftenebenen übereinstimmen. ([Firefox-Bug 1974386](https://bugzil.la/1974386) & [Firefox-Bug 1984310](https://bugzil.la/1984310)).

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ----------------- | ---------------------- | ------------------------ |
| Nightly           | 142                    | Nein                     |
| Developer Edition | 142                    | Nein                     |
| Beta              | 142                    | Nein                     |
| Release           | 142                    | Nein                     |

- `layout.css.heading-selector.enabled`
  - : Zum Aktivieren auf `true` setzen.

### At-Regel `@custom-media`

Die CSS-At-Regel {{cssxref("@custom-media")}} definiert Aliase für lange oder komplexe Medienabfragen. Anstatt dieselbe fest codierte `<media-query-list>` in mehreren `@media`-At-Regeln zu wiederholen, kann sie einmal in einer `@custom-media`-At-Regel definiert und bei Bedarf im gesamten Stylesheet referenziert werden. ([Firefox-Bug 1744292](https://bugzil.la/1744292)).

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ----------------- | ---------------------- | ------------------------ |
| Nightly           | 148                    | Nein                     |
| Developer Edition | 148                    | Nein                     |
| Beta              | 148                    | Nein                     |
| Release           | 148                    | Nein                     |

- `layout.css.custom-media.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Wert `base-select` für die CSS-Eigenschaft `appearance`

Der Wert [`base-select`](/de/docs/Web/CSS/Reference/Properties/appearance#base-select) für die CSS-Eigenschaft {{cssxref("appearance")}}, der nur für das Element {{htmlelement("select")}} und das Pseudo-Element {{cssxref("::picker()", "::picker(select)")}} relevant ist, ermöglicht Ihnen, diese vollständig zu gestalten. Derzeit wird nur die Gestaltung des `<select>`-Elements unterstützt. Die Gestaltung des Pseudo-Elements `::picker(select)` wird in zukünftigen Versionen hinzugefügt. Diese Funktion ist Teil der Arbeit zu [anpassbaren Select-Elementen](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select). Zur Verwendung müssen zwei Einstellungen aktiviert werden. ([Firefox-Bug 1974787](https://bugzil.la/1974787)).

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ----------------- | ---------------------- | ------------------------ |
| Nightly           | 149                    | Nein                     |
| Developer Edition | 149                    | Nein                     |
| Beta              | 149                    | Nein                     |
| Release           | 149                    | Nein                     |

- `dom.select.customizable_select.enabled`
  - : Zum Aktivieren auf `true` setzen.
- `layout.css.appearance-base.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Absolut positionierte Elemente in mehrspaltigen Containern und beim Drucken

Absolut positionierte Elemente innerhalb von [mehrspaltigen Containern](/de/docs/Web/CSS/Guides/Multicol_layout) und beim Drucken werden jetzt korrekt positioniert und fragmentiert.
Dies verbessert die Interoperabilität mit anderen Browsern und verhindert Layoutprobleme wie überlappenden Text oder Inhaltsverlust.
([Firefox-Bug 2018797](https://bugzil.la/2018797)).

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ----------------- | ---------------------- | ------------------------ |
| Nightly           | 150                    | Ja                       |
| Developer Edition | 150                    | Nein                     |
| Beta              | 150                    | Nein                     |
| Release           | 150                    | Nein                     |

- `layout.abspos.fragmentainer-aware-positioning.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Bereichssyntaxabfragen für `@container style()`

Die [`@container`](/de/docs/Web/CSS/Reference/At-rules/@container)-CSS-At-Regel unterstützt bei [`style()`](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries)-Abfragen jetzt die _Bereichssyntax_. Dadurch können Sie prüfen, ob ein Container eine gültige CSS-Custom-Property besitzt, und deren Wert mit Vergleichsoperatoren wie `>`, `<`, `>=` und `<=` vergleichen sowie entsprechend Styles auf seine Kindelemente anwenden. ([Firefox-Bug 2024601](https://bugzil.la/2024601)).

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ----------------- | ---------------------- | ------------------------ |
| Nightly           | 151                    | Nein                     |
| Developer Edition | 151                    | Nein                     |
| Beta              | 151                    | Nein                     |
| Release           | 151                    | Nein                     |

- `layout.css.attr.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Werte `<timeline-range-name>`

Die CSS-Eigenschaften {{cssxref("animation-range-start")}}, {{cssxref("animation-range-end")}} und die Kurzform-Eigenschaft {{cssxref("animation-range")}} unterstützen jetzt Werte vom Typ [`<timeline-range-name>`](/de/docs/Web/CSS/Reference/Values/timeline-range-name). Diese Werte vom Typ [`<timeline-range-name>`](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names#timeline_range_names) ermöglichen Ihnen, präzise anzugeben, innerhalb welches Segments eine scrollgesteuerte Animation stattfindet. ([Firefox-Bug 1804775](https://bugzil.la/1804775)).

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ----------------- | ---------------------- | ------------------------ |
| Nightly           | 151                    | Ja                       |
| Developer Edition | 151                    | Nein                     |
| Beta              | 151                    | Nein                     |
| Release           | 151                    | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Werte `<timeline-range-name>` in `@keyframes`-Selektoren

Die At-Regel {{cssxref("@keyframes")}} unterstützt jetzt Werte vom Typ [`<timeline-range-name>`](/de/docs/Web/CSS/Reference/Values/timeline-range-name). Diese [Werte](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names#timeline_range_names) ermöglichen Ihnen, das Segment anzugeben, innerhalb dessen eine scrollgesteuerte Animation stattfindet. ([Firefox-Bug 1824875](https://bugzil.la/1824875)).

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ----------------- | ---------------------- | ------------------------ |
| Nightly           | 152                    | Ja                       |
| Developer Edition | 152                    | Nein                     |
| Beta              | 152                    | Nein                     |
| Release           | 152                    | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Aktualisieren von Attributen externer Ressourcen

Die CSS-Eigenschaft {{cssxref("link-parameters")}} und die CSS-Funktion {{cssxref("param")}} werden jetzt unterstützt. Dadurch kann der Benutzer Attribute externer Ressourcen, wie etwa SVGs, aktualisieren, deren Attribute mit der CSS-Funktion {{cssxref("env")}} gesetzt sind. Das bedeutet, dass eine einzelne externe Ressource verwendet werden kann, anstatt mehrere Varianten zu erstellen, die sich nur durch unterschiedliche Farben oder andere Werte unterscheiden. ([Firefox-Bug 2046153](https://bugzil.la/2046153)).

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ----------------- | ---------------------- | ------------------------ |
| Nightly           | 154                    | Ja                       |
| Developer Edition | 153                    | Nein                     |
| Beta              | 153                    | Nein                     |
| Release           | 153                    | Nein                     |

- `layout.css.link-parameters.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Kürzen von Inhalt mit `line-clamp`

Die CSS-Eigenschaft {{cssxref("line-clamp")}} funktioniert jetzt ohne das Herstellerpräfix `-webkit-`, unterstützt in diesem Stadium jedoch nicht die Werte `no-ellipsis` und `<string>`. ([Firefox-Bug 2042986](https://bugzil.la/2042986)).

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ----------------- | ---------------------- | ------------------------ |
| Nightly           | 154                    | Nein                     |
| Developer Edition | 154                    | Nein                     |
| Beta              | 154                    | Nein                     |
| Release           | 154                    | Nein                     |

- `layout.css.line-clamp.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Prozentwerte für `text-decoration-inset`

Die CSS-Eigenschaft {{cssxref("text-decoration-inset")}} unterstützt jetzt Prozentwerte als Werte. Der Prozentwert gibt die Größe des Einschubs als Prozentsatz von {{cssxref("font-size")}} an. ([Firefox-Bug 2044602](https://bugzil.la/2044602)).

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ----------------- | ---------------------- | ------------------------ |
| Nightly           | 154                    | Nein                     |
| Developer Edition | 154                    | Nein                     |
| Beta              | 154                    | Nein                     |
| Release           | 154                    | Nein                     |

- `layout.css.text-decoration-inset-percentage.enabled`
  - : Zum Aktivieren auf `true` setzen.

### `view-timeline` enthält `view-timeline-inset`

Die Kurzform-Eigenschaft {{cssxref("view-timeline")}} unterstützt jetzt die Eigenschaft {{cssxref("view-timeline-inset")}}. Die Kurzform ermöglicht Ihnen, Einschubwerte (oder äußere Abstände) für den Start und/oder das Ende anzugeben, um die Position der View-Progress-Zeitachse anzupassen. ([Firefox-Bug 2046602](https://bugzil.la/2046602)).

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ----------------- | ---------------------- | ------------------------ |
| Nightly           | 155                    | Ja                       |
| Developer Edition | 155                    | Nein                     |
| Beta              | 155                    | Nein                     |
| Release           | 155                    | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Zum Aktivieren auf `true` setzen.

## SVG

**Keine experimentellen Funktionen in diesem Release-Zyklus.**

## MathML

### `href` in MathML-Elementen außer `<a>` deaktivieren

Wenn aktiviert, erstellt das globale Attribut [`href`](/de/docs/Web/MathML/Reference/Global_attributes/href) auf anderen MathML-Elementen als `<a>` keinen Hyperlink mehr. Dadurch wird Firefox an die [MathML-Core-Spezifikation](https://w3c.github.io/mathml-core/#the-a-element) angeglichen, die Hyperlinks nur für das Element `<a>` definiert. ([Firefox-Bug 2026848](https://bugzil.la/2026848)).

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ----------------- | ---------------------- | ------------------------ |
| Nightly           | 151                    | Ja                       |
| Developer Edition | 151                    | Nein                     |
| Beta              | 151                    | Nein                     |
| Release           | 151                    | Nein                     |

- `mathml.href_link_on_non_anchor_element.disabled`
  - : Zum Aktivieren auf `true` setzen.

### Implementierung der Schnittstelle `MathMLAnchorElement`

Wenn aktiviert, wird das MathML-Element [`<a>`](/de/docs/Web/MathML/Reference/Element/a) im DOM korrekt durch die Schnittstelle [`MathMLAnchorElement`](/de/docs/Web/API/MathMLAnchorElement) statt durch die generische Schnittstelle [`MathMLElement`](/de/docs/Web/API/MathMLElement) repräsentiert. ([Firefox-Bug 2059312](https://bugzil.la/2059312)).

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ----------------- | ---------------------- | ------------------------ |
| Nightly           | 155                    | Ja                       |
| Developer Edition | 155                    | Nein                     |
| Beta              | 155                    | Nein                     |
| Release           | 155                    | Nein                     |

- `mathml.a.element.enabled`
  - : Zum Aktivieren auf `true` setzen.

## JavaScript

### TC39-Vorschlag zu Intl.Locale-Informationen

Der [TC39-Vorschlag zu Intl.Locale-Informationen](https://github.com/tc39/proposal-intl-locale-info) wird jetzt unterstützt.
Dazu gehören alle Instanzmethoden von `Intl.Locale`, die mit „get“ beginnen — {{jsxref("Intl/Locale/getCalendars", "Intl.Locale.prototype.getCalendars()")}}, {{jsxref("Intl/Locale/getCollations", "Intl.Locale.prototype.getCollations()")}}, {{jsxref("Intl/Locale/getHourCycles", "Intl.Locale.prototype.getHourCycles()")}}, {{jsxref("Intl/Locale/getNumberingSystems", "Intl.Locale.prototype.getNumberingSystems()")}}, {{jsxref("Intl/Locale/getTextInfo", "Intl.Locale.prototype.getTextInfo()")}}, {{jsxref("Intl/Locale/getTimeZones", "Intl.Locale.prototype.getTimeZones()")}}, {{jsxref("Intl/Locale/getWeekInfo", "Intl.Locale.prototype.getWeekInfo()")}}.
([Firefox-Bug 1693576](https://bugzil.la/1693576)).

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ----------------- | ---------------------- | ------------------------ |
| Nightly           | 152                    | Nein                     |
| Developer Edition | —                      | —                        |
| Beta              | —                      | —                        |
| Release           | —                      | —                        |

- `javascript.options.experimental.intl_locale_info`
  - : Zum Aktivieren in Nightly auf `true` setzen.

### Mehrere Import Maps

Unterstützung für [mehrere Import Maps](/de/docs/Web/HTML/Reference/Elements/script/type/importmap#merging_multiple_import_maps).
Diese bieten Entwicklern mehr Flexibilität bei der Strukturierung und dem Laden von JavaScript-Modulen, da sie nicht mehr alle ihre Modulzuordnungen im Voraus kennen und sie in einer einzelnen Import Map deklarieren müssen, bevor Module geladen werden.
([Firefox-Bug 1916277](https://bugzil.la/1916277)).

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ----------------- | ---------------------- | ------------------------ |
| Nightly           | 150                    | Nein                     |
| Developer Edition | 150                    | Nein                     |
| Beta              | 150                    | Nein                     |
| Release           | 150                    | Nein                     |

- `dom.multiple_import_maps.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Assertions für Puffergrenzen in regulären Ausdrücken

Die [Assertions für Puffergrenzen `\A`, `\z` und `\Z`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Buffer_boundary_assertion) werden jetzt unterstützt.
`\A` und `\z` ermöglichen Ihnen, den Anfang oder das Ende der gesamten Eingabe abzugleichen, während `\Z` mit dem Ende der Eingabe übereinstimmt und dabei einen Zeilenabschluss ignoriert.
Die Assertions werden nicht durch das Flag [`m`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline) beeinflusst (anders als `^` und `$`) und können nur im [Unicode-bewussten Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) verwendet werden (wenn das Flag `u` oder `v` gesetzt ist).
([Firefox-Bug 2047706](https://bugzil.la/2047706)).

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ----------------- | ---------------------- | ------------------------ |
| Nightly           | 155                    | Nein                     |
| Developer Edition | —                      | —                        |
| Beta              | —                      | —                        |
| Release           | —                      | —                        |

- `javascript.options.experimental.regexp_buffer_boundaries`
  - : Zum Aktivieren in Nightly auf `true` setzen.

## APIs

### Absturzberichte

Absturzberichte können jetzt über die [Reporting API](/de/docs/Web/API/Reporting_API) an den Endpunkt `default` gesendet werden.
Beachten Sie, dass Firefox die Bereitstellung von [`CrashReportContext`](/de/docs/Web/API/CrashReportContext) im Berichtstext nicht unterstützt.
([Firefox-Bug 2036160](https://bugzil.la/2036160)).

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ----------------- | ---------------------- | ------------------------ |
| Nightly           | 152                    | Ja                       |
| Developer Edition | 152                    | Nein                     |
| Beta              | 152                    | Nein                     |
| Release           | 152                    | Nein                     |

- `dom.reporting.crash.enabled`
  - : Zum Aktivieren auf `true` setzen (in Nightly standardmäßig aktiviert).

### Bereichsbezogene Custom-Element-Registries

Unterstützung für [bereichsbezogene Custom-Element-Registries](/de/docs/Web/API/Web_components/Using_custom_elements#scoped_custom_element_registries) wird implementiert.
Bereichsbezogene Registries ermöglichen es einem Shadow Tree, eine unabhängige [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry) zu erstellen, deren Definitionen nur auf diesen bestimmten DOM-Teilbaum angewendet werden.
Dies kann verwendet werden, um Kollisionen zu vermeiden, wenn mehrere Webkomponenten Elemente mit demselben Namen deklarieren.

Die Implementierung umfasst:

- Die Eigenschaft `customElementRegistry` für [`Document`](/de/docs/Web/API/Document), [`Element`](/de/docs/Web/API/Element) und [`ShadowRoot`](/de/docs/Web/API/ShadowRoot).
  ([Firefox-Bug 2018900](https://bugzil.la/2018900)).

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ----------------- | ---------------------- | ------------------------ |
| Nightly           | 150                    | Nein                     |
| Developer Edition | 150                    | Nein                     |
| Beta              | 150                    | Nein                     |
| Release           | 150                    | Nein                     |

- `dom.scoped-custom-element-registries.enabled`
  - : Zum Aktivieren auf `true` setzen.

### CSS Typed Object Model Level 1

Die [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) ist in Nightly implementiert.
Sie vereinfacht die Manipulation von CSS-Eigenschaften, indem CSS-Werte als typisierte JavaScript-Objekte statt als Zeichenfolgen bereitgestellt werden.
([Firefox-Bug 1278697](https://bugzil.la/1278697)).

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ----------------- | ---------------------- | ------------------------ |
| Nightly           | 154                    | Ja                       |
| Developer Edition | 149                    | Nein                     |
| Beta              | 149                    | Nein                     |
| Release           | 149                    | Nein                     |

- `layout.css.typed-om.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Grafik: Canvas, WebGL und WebGPU

#### WebGL: Entwurfserweiterungen

Wenn diese Einstellung aktiviert ist, werden alle derzeit im Status „draft“ befindlichen WebGL-Erweiterungen, die getestet werden, zur Verwendung aktiviert. Derzeit werden von Firefox keine WebGL-Erweiterungen getestet.

#### WebGPU API

Die [WebGPU API](/de/docs/Web/API/WebGPU_API) bietet Low-Level-Unterstützung für Berechnungen und Grafik-Rendering mithilfe der [Graphics Processing Unit](https://en.wikipedia.org/wiki/Graphics_Processing_Unit) (GPU) des Geräts oder Computers des Benutzers.
Ab Version 142 ist sie unter Windows in allen Kontexten außer Service Workers aktiviert.
Ab Version 147 ist sie unter macOS auf Apple Silicon in allen Browserkontexten außer Service Workers aktiviert.
Auf anderen Plattformen wie Linux und macOS auf Intel Silicon ist sie in Nightly aktiviert.
Unseren Fortschritt bei dieser API finden Sie in [Firefox-Bug 1602129](https://bugzil.la/1602129).

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert?                                                         |
| ----------------- | ---------------------- | -------------------------------------------------------------------------------- |
| Nightly           | 141                    | Ja                                                                               |
| Developer Edition | 141                    | Nein (Ja unter Windows und macOS auf Apple Silicon, ausgenommen Service Workers) |
| Beta              | 141                    | Nein (Ja unter Windows und macOS auf Apple Silicon, ausgenommen Service Workers) |
| Release           | 141                    | Nein (Ja unter Windows und macOS auf Apple Silicon, ausgenommen Service Workers) |

- `dom.webgpu.enabled`
  - : Zum Aktivieren auf `true` setzen (in Nightly und unter Windows in allen Releases aktiviert)
- `dom.webgpu.service-workers.enabled`
  - : Zum Aktivieren auf `true` setzen (in Nightly aktiviert)

### WebRTC und Medien

Die folgenden experimentellen Funktionen umfassen solche in Medien-APIs wie der [WebRTC API](/de/docs/Web/API/WebRTC_API), der [Web Audio API](/de/docs/Web/API/Web_Audio_API), der [Media Source Extensions API](/de/docs/Web/API/Media_Source_Extensions_API), der [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API) und der [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API).

#### Audio Session API

Die [Audio Session API](/de/docs/Web/API/Audio_Session_API) stellt Webanwendungen einen Mechanismus bereit, um zu steuern, wie ihr Audio mit anderen auf einem Gerät wiedergegebenen Audiodaten interagiert. ([Firefox-Bug 2055710](https://bugzil.la/2055710)).

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ----------------- | ---------------------- | ------------------------ |
| Nightly           | 155                    | Ja                       |
| Developer Edition | 153                    | Nein                     |
| Beta              | 153                    | Nein                     |
| Release           | 153                    | Nein                     |

- `dom.audio_session.enabled`
  - : Zum Aktivieren auf `true` setzen.

#### HTMLMediaElement-Eigenschaften: audioTracks und videoTracks

Das Aktivieren dieser Funktion fügt allen HTML-Medienelementen die Eigenschaften [`HTMLMediaElement.audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks) und [`HTMLMediaElement.videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks) hinzu. Da Firefox derzeit jedoch keine mehreren Audio- und Videospuren unterstützt, funktionieren die häufigsten Anwendungsfälle für diese Eigenschaften nicht. Daher sind beide standardmäßig deaktiviert. Weitere Details finden Sie in [Firefox-Bug 1057233](https://bugzil.la/1057233).

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ----------------- | ---------------------- | ------------------------ |
| Nightly           | 33                     | Nein                     |
| Developer Edition | 33                     | Nein                     |
| Beta              | 33                     | Nein                     |
| Release           | 33                     | Nein                     |

- `media.track.enabled`
  - : Zum Aktivieren auf `true` setzen.

#### Asynchrones Hinzufügen und Entfernen von SourceBuffer

Dies fügt der Schnittstelle [`SourceBuffer`](/de/docs/Web/API/SourceBuffer) die Promise-basierten Methoden [`appendBufferAsync()`](/de/docs/Web/API/SourceBuffer/appendBufferAsync) und [`removeAsync()`](/de/docs/Web/API/SourceBuffer/removeAsync) zum Hinzufügen und Entfernen von Medienquellenpuffern hinzu. Weitere Informationen finden Sie in [Firefox-Bug 1280613](https://bugzil.la/1280613) und [Firefox-Bug 778617](https://bugzil.la/778617).

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ----------------- | ---------------------- | ------------------------ |
| Nightly           | 62                     | Nein                     |
| Developer Edition | 62                     | Nein                     |
| Beta              | 62                     | Nein                     |
| Release           | 62                     | Nein                     |

- `media.mediasource.experimental.enabled`
  - : Zum Aktivieren auf `true` setzen.

#### Strenge der AVIF-Konformität

Die Einstellung `image.avif.compliance_strictness` kann verwendet werden, um die _Strenge_ beim Verarbeiten von [AVIF](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image)-Bildern zu steuern.
Damit können Firefox-Benutzer Bilder anzeigen, die in anderen Browsern gerendert werden, selbst wenn sie nicht strikt konform sind.

| Release-Kanal     | Hinzugefügt in Version | Standardwert |
| ----------------- | ---------------------- | ------------ |
| Nightly           | 92                     | 1            |
| Developer Edition | 92                     | 1            |
| Beta              | 92                     | 1            |
| Release           | 92                     | 1            |

- `image.avif.compliance_strictness`
  - : Numerischer Wert, der einen _Strengegrad_ angibt. Zulässige Werte sind:
    - `0`: Freizügig. Akzeptiert Bilder mit Spezifikationsverstößen sowohl gegen Empfehlungen („should“-Formulierungen) als auch Anforderungen („shall“-Formulierungen), sofern sie sicher oder eindeutig interpretiert werden können.
    - `1` **(Standard)**: Gemischt. Lehnt Verstöße gegen Anforderungen („shall“) ab, erlaubt aber Verstöße gegen Empfehlungen („should“).
    - `2`: Strikt. Lehnt alle Verstöße gegen angegebene Anforderungen oder Empfehlungen ab.

#### JPEG-XL-Unterstützung

Firefox unterstützt das Bildformat [JPEG XL](https://jpeg.org/jpegxl/), einen modernen Nachfolger von JPEG, der eine verbesserte Komprimierung und Bildqualität sowie neue Fähigkeiten wie Transparenz, Animation und HDR-Unterstützung bietet.
Weitere Details finden Sie in [Firefox-Bug 1539075](https://bugzil.la/1539075) und [Firefox-Bug 2016688](https://bugzil.la/2016688).

In Firefox 149 wurde der vorherige C++-[JPEG-XL](https://jpeg.org/jpegxl/)-Bilddecoder durch eine neue Rust-basierte Implementierung ersetzt, die die Bibliothek `jxl-rs` verwendet ([Firefox-Bug 1986393](https://bugzil.la/1986393)).

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ----------------- | ---------------------- | ------------------------ |
| Nightly           | 153                    | Ja                       |
| Developer Edition | 152                    | Nein                     |
| Beta              | 152                    | Nein                     |
| Release           | 152                    | Nein                     |

- `image.jxl.enabled`
  - : Zum Aktivieren auf `true` setzen.

### WebVR API (deaktiviert)

Die veraltete [WebVR API](/de/docs/Web/API/WebVR_API) soll entfernt werden.
Sie ist standardmäßig in allen Builds deaktiviert ([Firefox-Bug 1750902](https://bugzil.la/1750902)).

| Release-Kanal     | Entfernt in Version | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 98                  | Nein                     |
| Developer Edition | 98                  | Nein                     |
| Beta              | 98                  | Nein                     |
| Release           | 98                  | Nein                     |

- `dom.vr.enabled`
  - : Zum Aktivieren auf `true` setzen.

### GeometryUtils-Methoden: convertPointFromNode(), convertRectFromNode() und convertQuadFromNode()

Die `GeometryUtils`-Methoden `convertPointFromNode()`, `convertRectFromNode()` und `convertQuadFromNode()` ordnen den angegebenen Punkt, das Rechteck oder das Viereck von dem [`Node`](/de/docs/Web/API/Node), für den sie aufgerufen werden, einem anderen Node zu. Weitere Details finden Sie in [Firefox-Bug 918189](https://bugzil.la/918189).

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ----------------- | ---------------------- | ------------------------ |
| Nightly           | 31                     | Nein                     |
| Developer Edition | 31                     | Nein                     |
| Beta              | 31                     | Nein                     |
| Release           | 31                     | Nein                     |

- `layout.css.convertFromNode.enabled`
  - : Zum Aktivieren auf `true` setzen.

### GeometryUtils-Methode: getBoxQuads()

Die `GeometryUtils`-Methode `getBoxQuads()` gibt die CSS-Boxen für einen [`Node`](/de/docs/Web/API/Node) relativ zu einem beliebigen anderen Node oder Viewport zurück. Weitere Details finden Sie in [Firefox-Bug 917755](https://bugzil.la/917755).

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ----------------- | ---------------------- | ------------------------ |
| Nightly           | 31                     | Nein                     |
| Developer Edition | 31                     | Nein                     |
| Beta              | 31                     | Nein                     |
| Release           | 31                     | Nein                     |

- `layout.css.getBoxQuads.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Payment Request API

#### Primäre Zahlungsabwicklung

Die [Payment Request API](/de/docs/Web/API/Payment_Request_API) unterstützt die Verarbeitung webbasierter Zahlungen innerhalb von Webinhalten oder Apps. Aufgrund eines Fehlers, der während des Testens der Benutzeroberfläche auftrat, haben wir beschlossen, die Veröffentlichung dieser API zu verschieben, während Diskussionen über mögliche Änderungen an der API geführt werden. Die Arbeit wird fortgesetzt. Weitere Details finden Sie in [Firefox-Bug 1318984](https://bugzil.la/1318984).

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ----------------- | ---------------------- | ------------------------ |
| Nightly           | 55                     | Nein                     |
| Developer Edition | 55                     | Nein                     |
| Beta              | 55                     | Nein                     |
| Release           | 55                     | Nein                     |

- `dom.payments.request.enabled`
  - : Zum Aktivieren auf `true` setzen.
- `dom.payments.request.supportedRegions`
  - : Ländercodes als durch Kommas getrennte Allowlist von Regionen (z. B. `US,CA`).

### WebShare API

Die [Web Share API](/de/docs/Web/API/Web_Share_API) ermöglicht das Teilen von Dateien, URLs und anderen Daten von einer Website.
Diese Funktion ist unter Android in allen Builds aktiviert, aber auf Desktop hinter einer Einstellung (sofern unten nicht anders angegeben).

| Release-Kanal     | Geändert in Version | Standardmäßig aktiviert?                    |
| ----------------- | ------------------- | ------------------------------------------- |
| Nightly           | 71                  | Nein (Standard). Ja (Windows ab Version 92) |
| Developer Edition | 71                  | Nein                                        |
| Beta              | 71                  | Nein                                        |
| Release           | 71                  | Nein (Desktop). Ja (Android).               |

- `dom.webshare.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Notifications API

Benachrichtigungen haben die Eigenschaft [`requireInteraction`](/de/docs/Web/API/Notification/requireInteraction) auf Windows-Systemen und im Nightly-Release standardmäßig auf true gesetzt ([Firefox-Bug 1794475](https://bugzil.la/1794475)).

| Release-Kanal     | Geändert in Version | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 117                 | Ja                       |
| Developer Edition | 117                 | Nein                     |
| Beta              | 117                 | Nein                     |
| Release           | 117                 | Nur Windows              |

- `dom.webnotifications.requireinteraction.enabled`
  - : Zum Aktivieren auf `true` setzen.

## Sicherheit und Datenschutz

### Kennzeichnung unsicherer Seiten

Die beiden Einstellungen `security.insecure_connection_text_*` fügen in der Adressleiste neben dem herkömmlichen Schlosssymbol eine Textkennzeichnung „Nicht sicher“ hinzu, wenn eine Seite unsicher geladen wird (d.h. mit {{Glossary("HTTP", "HTTP")}} statt mit {{Glossary("HTTPS", "HTTPS")}}). Die Einstellung `browser.urlbar.trimHttps` entfernt das Präfix `https:` aus URLs in der Adressleiste. Weitere Details finden Sie in [Firefox-Bug 1853418](https://bugzil.la/1853418).

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ----------------- | ---------------------- | ------------------------ |
| Nightly           | 121                    | Ja                       |
| Developer Edition | 60                     | Nein                     |
| Beta              | 60                     | Nein                     |
| Release           | 60                     | Nein                     |

- `security.insecure_connection_text.enabled`
  - : Zum Aktivieren der Textkennzeichnung für den normalen Browsermodus auf `true` setzen.
- `security.insecure_connection_text.pbmode.enabled`
  - : Zum Aktivieren der Textkennzeichnung für den privaten Browsermodus auf `true` setzen.
- `browser.urlbar.trimHttps`
  - : Zum Entfernen des Präfixes `https:` aus URLs in der Adressleiste auf `true` setzen.

### Beschränkung nicht jugendfreier Inhalte mit `<meta name="rating">`

Das nicht standardisierte Element [`<meta name="rating">`](/de/docs/Web/HTML/Reference/Elements/meta) kann in eine Webseite aufgenommen werden, um deren Inhalt als eingeschränkt/nicht jugendfrei zu kennzeichnen. Zum Zeitpunkt der Erstellung gibt es zwei mögliche `content`-Werte: `adult` ([von Google definiert](https://developers.google.com/search/docs/specialty/explicit/guidelines#add-metadata)) und `RTA-5042-1996-1400-1577-RTA` ([von ASACP definiert](https://www.rtalabel.org/?content=howto#top)), die denselben Effekt haben (möglicherweise werden künftig weitere Optionen hinzugefügt).

Die folgenden `<meta>`-Elemente sind gleichwertig:

```html
<meta name="rating" content="adult" />
<meta name="rating" content="RTA-5042-1996-1400-1577-RTA" />
```

Browser, die dieses Element erkennen, können dann Maßnahmen ergreifen, um Benutzer daran zu hindern, den Inhalt anzusehen. Die Firefox-Implementierung ersetzt die Seite durch den unter `about:restricted` gefundenen Inhalt. Dieser erklärt dem Benutzer, dass er versucht, eingeschränkte Inhalte anzusehen, warum er sie nicht ansehen kann, und bietet eine Zurück-Schaltfläche, um zum vorherigen Ort zurückzukehren.

Weitere Details finden Sie in [Firefox-Bug 1991135](https://bugzil.la/1991135).

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ----------------- | ---------------------- | ------------------------ |
| Nightly           | 146                    | Nein                     |
| Developer Edition | 146                    | Nein                     |
| Beta              | 146                    | Nein                     |
| Release           | 146                    | Nein                     |

- `security.restrict_to_adults.always`
  - : Auf `true` setzen, um den Zugriff auf Webseiten zu beschränken, die sich durch Einfügen eines Elements `<meta name="rating">` selbst als nicht jugendfrei identifizieren.
- `security.restrict_to_adults.respect_platform`
  - : Auf `true` setzen, um den Zugriff auf Webseiten zu beschränken, die sich durch Einfügen eines Elements `<meta name="rating">` nur dann selbst als nicht jugendfrei identifizieren, wenn im zugrunde liegenden Betriebssystem geeignete Jugendschutzeinstellungen festgelegt sind (wenn beispielsweise die macOS-Einstellungen _Content & Privacy_ so gesetzt sind, dass explizite Webinhalte eingeschränkt werden).

### Permissions Policy / Feature Policy

[Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) ermöglicht Webentwicklern, das Verhalten bestimmter Funktionen und APIs im Browser selektiv zu aktivieren, zu deaktivieren und zu verändern. Sie ähnelt CSP, steuert jedoch Funktionen statt Sicherheitsverhalten.
Dies ist in Firefox als **Feature Policy** implementiert, dem Namen, der in einer früheren Version der Spezifikation verwendet wurde.

Beachten Sie, dass unterstützte Richtlinien über das Attribut [`allow`](/de/docs/Web/HTML/Reference/Elements/iframe#allow) auf `<iframe>`-Elementen festgelegt werden können, selbst wenn die Benutzereinstellung nicht gesetzt ist.

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ----------------- | ---------------------- | ------------------------ |
| Nightly           | 65                     | Nein                     |
| Developer Edition | 65                     | Nein                     |
| Beta              | 65                     | Nein                     |
| Release           | 65                     | Nein                     |

- `dom.security.featurePolicy.header.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Privacy Preserving Attribution API (PPA)

Die [PPA API](https://support.mozilla.org/en-US/kb/privacy-preserving-attribution) bietet eine Alternative zum Benutzer-Tracking für die Anzeigenattribution mittels des neuen Objekts `navigator.privateAttribution` mit den Methoden `saveImpression()` und `measureConversion()`. Weitere Informationen zu PPA finden Sie in der [ursprünglichen Erklärung](https://github.com/mozilla/explainers/tree/main/archive/ppa-experiment) und der [vorgeschlagenen Spezifikation](https://w3c.github.io/ppa/). Dieses Experiment kann für Websites über einen [Origin Trial](https://wiki.mozilla.org/Origin_Trials) oder im Browser aktiviert werden, indem die Einstellung auf `1` gesetzt wird. ([Firefox-Bug 1900929](https://bugzil.la/1900929)).

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ----------------- | ---------------------- | ------------------------ |
| Nightly           | 128                    | Nein                     |
| Developer Edition | 128                    | Nein                     |
| Beta              | 128                    | Nein                     |
| Release           | 128                    | Nein                     |

- `dom.origin-trials.private-attribution.state`
  - : Zum Aktivieren auf `true` setzen.

## HTTP

### Integrity Policy für Stylesheet-Ressourcen

Die HTTP-Header {{httpheader("Integrity-Policy")}} und {{httpheader("Integrity-Policy-Report-Only")}} werden jetzt für Style-Ressourcen unterstützt. Damit können Websites entweder [Subresource-Integrity-Garantien](/de/docs/Web/Security/Defenses/Subresource_Integrity) für Styles erzwingen oder Verstöße gegen die Richtlinie jeweils nur melden.
Beachten Sie, dass Firefox Meldeendpunkte ignoriert und Verstöße in der Entwicklerkonsole protokolliert.
Bei Verwendung von `Integrity-Policy` blockiert der Browser das Laden von Styles, die in einem {{HTMLElement("link")}}-Element mit [`rel="stylesheet"`](/de/docs/Web/HTML/Reference/Attributes/rel#stylesheet) referenziert werden und denen entweder das Attribut [`integrity`](/de/docs/Web/HTML/Reference/Elements/script#integrity) fehlt oder deren Integrity-Hash nicht mit der Ressource auf dem Server übereinstimmt.
([Firefox-Bug 1976656](https://bugzil.la/1976656)).

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ----------------- | ---------------------- | ------------------------ |
| Nightly           | 142                    | Nein                     |
| Developer Edition | 142                    | Nein                     |
| Beta              | 142                    | Nein                     |
| Release           | 142                    | Nein                     |

- `security.integrity_policy.stylesheet.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Idempotency-Key

Der HTTP-Anfrage-Header {{httpheader("Idempotency-Key")}} kann von Client-Code einer Website verwendet werden, um eine {{HTTPMethod("POST")}}- oder {{HTTPMethod("PATCH")}}-Anfrage {{Glossary("idempotent", "idempotent")}} zu machen, wenn er mit einem Server verwendet wird, der ihn unterstützt.
Die Spezifikation gibt an, dass der Server dokumentieren und bekanntgeben sollte, welche Endpunkte diesen Header erfordern, welches Format der Schlüssel hat und welche Fehlerantworten zu erwarten sind.

Firefox fügt den Header _automatisch_ mit einem eindeutigen Schlüssel für jede neue `POST`-Anfrage hinzu, sofern er nicht bereits durch den clientseitigen Code der Seite hinzugefügt wurde.
Dies vereinfacht den clientseitigen Code, der für die Arbeit mit Servern erforderlich ist, welche die Funktion unterstützen.

([Firefox-Bug 1830022](https://bugzil.la/1830022)).

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ----------------- | ---------------------- | ------------------------ |
| Nightly           | 135                    | Nein                     |
| Developer Edition | 135                    | Nein                     |
| Beta              | 135                    | Nein                     |
| Release           | 135                    | Nein                     |

- `network.http.idempotencyKey.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Accept-Header mit dem MIME-Typ image/jxl

Der HTTP-Header [`Accept`](/de/docs/Web/HTTP/Reference/Headers/Accept) in [Standardanfragen und Bildanfragen](/de/docs/Web/HTTP/Guides/Content_negotiation/List_of_default_Accept_values) kann über eine Einstellung konfiguriert werden, um Unterstützung für den MIME-Typ `image/jxl` anzugeben.

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ----------------- | ---------------------- | ------------------------ |
| Nightly           | 128                    | Nein                     |
| Developer Edition | 128                    | Nein                     |
| Beta              | 128                    | Nein                     |
| Release           | 128                    | Nein                     |

- `image.jxl.enabled`
  - : Zum Aktivieren auf `true` setzen.

### SameSite=Lax als Standard

[`SameSite`-Cookies](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) haben den Standardwert `Lax`.
Bei dieser Einstellung werden Cookies nur gesendet, wenn ein Benutzer zur Origin-Website navigiert, nicht bei Cross-Site-Unteranfragen zum Laden von Bildern oder Frames in eine Drittanbieter-Website und so weiter.
Weitere Details finden Sie in [Firefox-Bug 1617609](https://bugzil.la/1617609).

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ----------------- | ---------------------- | ------------------------ |
| Nightly           | 69                     | Nein                     |
| Developer Edition | 69                     | Nein                     |
| Beta              | 69                     | Nein                     |
| Release           | 69                     | Nein                     |

- `network.cookie.sameSite.laxByDefault`
  - : Zum Aktivieren auf `true` setzen.

### Platzhalter für Access-Control-Allow-Headers umfasst Authorization nicht

Der Header [`Access-Control-Allow-Headers`](/de/docs/Web/HTTP/Reference/Headers/Access-Control-Allow-Headers) ist ein Antwort-Header auf eine {{Glossary("Preflight_request", "CORS-Preflight-Anfrage")}}, der angibt, welche Anfrage-Header in die endgültige Anfrage aufgenommen werden dürfen.
Die Antwortdirektive kann einen Platzhalter (`*`) enthalten, der angibt, dass die endgültige Anfrage alle Header außer dem Header `Authorization` enthalten darf.

Standardmäßig schließt Firefox den Header `Authorization` in die endgültige Anfrage ein, nachdem eine Antwort mit `Access-Control-Allow-Headers: *` empfangen wurde.
Setzen Sie die Einstellung auf `false`, um sicherzustellen, dass Firefox den Header `Authorization` nicht einschließt.
Weitere Details finden Sie in [Firefox-Bug 1687364](https://bugzil.la/1687364).

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ----------------- | ---------------------- | ------------------------ |
| Nightly           | 115                    | Ja                       |
| Developer Edition | 115                    | Ja                       |
| Beta              | 115                    | Ja                       |
| Release           | 115                    | Ja                       |

- `network.cors_preflight.authorization_covered_by_wildcard`
  - : Zum Aktivieren auf `true` setzen.

## Entwicklerwerkzeuge

Die Entwicklerwerkzeuge von Mozilla entwickeln sich ständig weiter. Wir experimentieren mit neuen Ideen, fügen neue Funktionen hinzu und testen sie auf den Kanälen Nightly und Developer Edition, bevor sie Beta und Release durchlaufen. Die folgenden Funktionen sind die derzeitigen experimentellen Funktionen der Entwicklerwerkzeuge.

**Keine experimentellen Funktionen in diesem Release-Zyklus.**

## Siehe auch

- [Firefox-Entwickler-Release-Notes](/de/docs/Mozilla/Firefox/Releases)
- [Firefox Nightly](https://www.firefox.com/en-US/channel/desktop/)
- [Firefox Developer Edition](https://www.firefox.com/en-US/channel/desktop/developer/)
