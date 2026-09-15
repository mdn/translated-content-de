---
title: Experimentelle Funktionen in Firefox
short-title: Experimentelle Funktionen
slug: Mozilla/Firefox/Experimental_features
l10n:
  sourceCommit: 89e9d2f0101cff4fcb158fc3a62e053aa6ce9f61
---

Auf dieser Seite werden die experimentellen und teilweise implementierten Funktionen von Firefox aufgeführt, einschließlich sich weiterentwickelnder oder vorgeschlagener Webplattformstandards.
Jeder Eintrag unten enthält Informationen über die Builds, in denen eine Funktion enthalten ist (Nightly, Beta, Developer Edition oder Release), darüber, ob sie standardmäßig aktiviert ist oder nicht, sowie den Namen der **Einstellung**, mit der Sie die Funktion aktivieren oder konfigurieren können.
Die Beschreibung jeder Funktion enthält außerdem Links zu relevanten [Bugzilla-Bugs](https://bugzilla.mozilla.org), die die Funktion implementieren oder aktivieren.
Diese Informationen ermöglichen es Ihnen, experimentelle Funktionen auszuprobieren und Feedback zu geben, bevor sie offiziell veröffentlicht werden.

Im Hinblick auf den Lebenszyklus erscheinen neue Funktionen normalerweise zuerst in [Nightly](https://www.firefox.com/en-US/channel/desktop/#nightly), wo sie für frühes Feedback und Tests häufig standardmäßig aktiviert sind.
Wenn keine größeren Probleme gefunden werden, werden sie in Vorab-Builds von [Beta](https://www.firefox.com/en-US/channel/desktop/#beta) und [Developer Edition](https://www.firefox.com/en-US/channel/desktop/developer/) aufgenommen. Schließlich werden genehmigte Funktionen im [stabilen Release](https://www.firefox.com/en-US/)-Kanal ausgeliefert.
Wenn eine Funktion in einem Release standardmäßig aktiviert ist, wird sie nicht mehr als experimentell betrachtet und von dieser Seite entfernt.

Um diese Funktionen zu aktivieren, geben Sie `about:config` in die Firefox-Adressleiste ein, suchen Sie nach der zugehörigen **Einstellung** und ändern Sie ihren Wert, der normalerweise zwischen `true` und `false` umgeschaltet wird.
Abhängig von der Funktion müssen Sie möglicherweise den Browser neu starten, damit die Änderung wirksam wird.
Weitere Informationen zur Verwaltung von Einstellungen in Firefox finden Sie im Support-Artikel [Firefox-Konfigurationseditor](https://support.mozilla.org/en-US/kb/about-config-editor-firefox).

## HTML

### Layout für input type="search"

Das Layout für `input type="search"` wurde aktualisiert. Dadurch erhält ein Suchfeld ein Löschen-Symbol, sobald jemand darin zu tippen beginnt, um den Implementierungen anderer Browser zu entsprechen. Weitere Details finden Sie in [Firefox-Bug 558594](https://bugzil.la/558594).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 81                  | Nein                     |
| Developer Edition | 81                  | Nein                     |
| Beta              | 81                  | Nein                     |
| Release           | 81                  | Nein                     |

- `layout.forms.input-type-search.enabled`
  - : Auf `true` setzen, um die Funktion zu aktivieren.

### Anzeige von Passwörtern umschalten

HTML-Passworteingabeelemente ([`<input type="password">`](/de/docs/Web/HTML/Reference/Elements/input/password)) enthalten ein „Auge“-Symbol, das umgeschaltet werden kann, um den Passworttext anzuzeigen oder auszublenden ([Firefox-Bug 502258](https://bugzil.la/502258)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 96                  | Nein                     |
| Developer Edition | 96                  | Nein                     |
| Beta              | 96                  | Nein                     |
| Release           | 96                  | Nein                     |

- `layout.forms.reveal-password-button.enabled`
  - : Auf `true` setzen, um die Funktion zu aktivieren.

### Zeitauswahl in `datetime-local`- und `time`-Eingabeelementen

Die HTML-Elemente [`<input type="datetime-local">`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local) und [`<input type="time">`](/de/docs/Web/HTML/Reference/Elements/input/time) unterstützen eine Zeitauswahl. ([Firefox-Bug 1726108](https://bugzil.la/1726108)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 144                 | Nein                     |
| Developer Edition | 144                 | Nein                     |
| Beta              | 144                 | Nein                     |
| Release           | 144                 | Nein                     |

- `dom.forms.datetime.timepicker`
  - : Auf `true` setzen, um die Funktion zu aktivieren.

### Attribute `alpha` und `colorspace` in `color`-Eingabeelementen

Das HTML-Element [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color) unterstützt die Attribute [`alpha`](/de/docs/Web/HTML/Reference/Elements/input/color#alpha) und [`colorspace`](/de/docs/Web/HTML/Reference/Elements/input/color#colorspace). ([Firefox-Bug 1919718](https://bugzil.la/1919718)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 149                 | Ja                       |
| Developer Edition | -                   | -                        |
| Beta              | -                   | -                        |
| Release           | -                   | -                        |

- `dom.forms.html_color_picker.enabled`
  - : Auf `true` setzen, um die Funktion zu aktivieren.

### Attribute `headingoffset` und `headingreset`

Das globale Attribut [`headingoffset`](/de/docs/Web/HTML/Reference/Global_attributes/headingoffset) erhöht die berechnete Überschriftenebene der [Überschriftenelemente](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) innerhalb des Elements, für das es gesetzt ist, sodass eine Komponente überall auf einer Seite dasselbe Überschriften-Markup verwenden kann. Das Attribut [`headingreset`](/de/docs/Web/HTML/Reference/Global_attributes/headingreset) verhindert, dass die Offsets von Vorgängerelementen auf die Überschriften innerhalb des Elements angewendet werden, für das es gesetzt ist. ([Firefox-Bug 1974383](https://bugzil.la/1974383)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 153                 | Nein                     |
| Developer Edition | 153                 | Nein                     |
| Beta              | 153                 | Nein                     |
| Release           | 153                 | Nein                     |

- `dom.headingoffset.enabled`
  - : Auf `true` setzen, um die Funktion zu aktivieren.

## CSS

### `circle()` und `ellipse()` erlauben die Schlüsselwörter `farthest-corner` und `closest-corner`

Die Schlüsselwörter `farthest-corner` und `closest-corner` können jetzt verwendet werden, um die Radiuswerte der CSS-Grundformen [`ellipse()`](/de/docs/Web/CSS/Reference/Values/basic-shape/ellipse) und [`circle()`](/de/docs/Web/CSS/Reference/Values/basic-shape/circle) anzugeben.
Weitere Details finden Sie in [Firefox-Bug 2037673](https://bugzil.la/2037673).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 153                 | Ja                       |
| Developer Edition | 153                 | Nein                     |
| Beta              | 153                 | Nein                     |
| Release           | 153                 | Nein                     |

- `layout.css.ellipse-corners.enabled`
  - : Auf `true` setzen, um die Funktion zu aktivieren.

### Hex-Felder zur Anzeige unerwarteter Steuerzeichen

Diese Funktion rendert Steuerzeichen (Unicode-Kategorie Cc) mit Ausnahme von _Tabulator_ (`U+0009`), _Zeilenvorschub_ (`U+000A`), _Seitenvorschub_ (`U+000C`) und _Wagenrücklauf_ (`U+000D`) als Hex-Feld, wenn sie nicht erwartet werden. Weitere Details finden Sie in [Firefox-Bug 1099557](https://bugzil.la/1099557).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 43                  | Ja                       |
| Developer Edition | 43                  | Nein                     |
| Beta              | 43                  | Nein                     |
| Release           | 43                  | Nein                     |

- `layout.css.control-characters.visible`
  - : Auf `true` setzen, um die Funktion zu aktivieren.

### Eigenschaft initial-letter

Die CSS-Eigenschaft {{cssxref("initial-letter")}} ist Teil der Spezifikation [CSS Inline Layout](https://drafts.csswg.org/css-inline/) und ermöglicht es Ihnen, anzugeben, wie herausragende, angehobene und abgesenkte Initialbuchstaben dargestellt werden. Weitere Details finden Sie in [Firefox-Bug 1223880](https://bugzil.la/1223880).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 50                  | Nein                     |
| Developer Edition | 50                  | Nein                     |
| Beta              | 50                  | Nein                     |
| Release           | 50                  | Nein                     |

- `layout.css.initial-letter.enabled`
  - : Auf `true` setzen, um die Funktion zu aktivieren.

### Funktion fit-content()

Die Funktion [`fit-content()`](/de/docs/Web/CSS/Reference/Values/fit-content_function) bei ihrer Anwendung auf {{cssxref("width")}} und andere Größenbestimmungseigenschaften. Diese Funktion wird bereits gut für die Größenbestimmung von CSS-Grid-Layout-Spuren unterstützt. Weitere Details finden Sie in [Firefox-Bug 1312588](https://bugzil.la/1312588).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 91                  | Nein                     |
| Developer Edition | 91                  | Nein                     |
| Beta              | 91                  | Nein                     |
| Release           | 91                  | Nein                     |

- `layout.css.fit-content-function.enabled`
  - : Auf `true` setzen, um die Funktion zu aktivieren.

### Scrollgesteuerte Animationen

Früher „scroll-linked animations“ genannt, hängt eine [scrollgesteuerte Animation](/de/docs/Web/CSS/Guides/Scroll-driven_animations) von der Scrollposition einer Bildlaufleiste ab statt von Zeit oder einer anderen Dimension.
Die Eigenschaften {{cssxref('scroll-timeline-name')}} und {{cssxref('scroll-timeline-axis')}} (sowie die Kurzschreibweise {{cssxref('scroll-timeline')}}) ermöglichen es Ihnen anzugeben, dass eine bestimmte Bildlaufleiste in einem bestimmten benannten Container als Quelle für eine scrollgesteuerte Animation verwendet werden kann.
Die Scroll-Timeline kann dann mit einer [Animation](/de/docs/Web/CSS/Guides/Animations) verknüpft werden, indem die Eigenschaft {{cssxref('animation-timeline')}} auf den Namenswert gesetzt wird, der mit `scroll-timeline-name` definiert wurde.

Bei Verwendung der Kurzschreibweise {{cssxref('scroll-timeline')}} muss die Reihenfolge der Eigenschaftswerte {{cssxref('scroll-timeline-name')}} gefolgt von {{cssxref('scroll-timeline-axis')}} sein.
Sowohl die Lang- als auch die Kurzschreibeigenschaften sind hinter der Einstellung verfügbar.
Alternativ können Sie die funktionale Notation {{cssxref("animation-timeline/scroll")}} mit {{cssxref('animation-timeline')}} verwenden, um anzugeben, dass eine Bildlaufleistenachse in einem Vorgängerelement für die Timeline verwendet wird.

Weitere Informationen finden Sie in [Firefox-Bug 1807685](https://bugzil.la/1807685), [Firefox-Bug 1804573](https://bugzil.la/1804573), [Firefox-Bug 1809005](https://bugzil.la/1809005), [Firefox-Bug 1676791](https://bugzil.la/1676791), [Firefox-Bug 1754897](https://bugzil.la/1754897), [Firefox-Bug 1817303](https://bugzil.la/1817303) und [Firefox-Bug 1737918](https://bugzil.la/1737918).

Die Eigenschaften {{cssxref('animation-range-start')}} und {{cssxref('animation-range-end')}} (sowie die Kurzschreibweise {{cssxref('animation-range')}}) werden noch nicht unterstützt. Weitere Informationen finden Sie in [Firefox-Bug 1676779](https://bugzil.la/1676779).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 136                 | Ja                       |
| Developer Edition | 110                 | Nein                     |
| Beta              | 110                 | Nein                     |
| Release           | 110                 | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Auf `true` setzen, um die Funktion zu aktivieren.

### Medienmerkmal prefers-reduced-transparency

Mit dem CSS-Medienmerkmal {{cssxref("@media/prefers-reduced-transparency")}} können Sie erkennen, ob ein Benutzer die Einstellung aktiviert hat, die Menge transparenter oder durchscheinender Ebeneneffekte auf seinem Gerät zu minimieren.
Weitere Details finden Sie in [Firefox-Bug 1736914](https://bugzil.la/1736914).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 113                 | Nein                     |
| Developer Edition | 113                 | Nein                     |
| Beta              | 113                 | Nein                     |
| Release           | 113                 | Nein                     |

- `layout.css.prefers-reduced-transparency.enabled`
  - : Auf `true` setzen, um die Funktion zu aktivieren.

### Medienmerkmal inverted-colors

Mit dem CSS-Medienmerkmal {{cssxref("@media/inverted-colors")}} können Sie erkennen, ob ein User-Agent oder das zugrunde liegende Betriebssystem Farben invertiert.
Weitere Details finden Sie in [Firefox-Bug 1794628](https://bugzil.la/1794628).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 114                 | Nein                     |
| Developer Edition | 114                 | Nein                     |
| Beta              | 114                 | Nein                     |
| Release           | 114                 | Nein                     |

- `layout.css.inverted-colors.enabled`
  - : Auf `true` setzen, um die Funktion zu aktivieren.

### Eigenschaft für benannte View-Progress-Timelines

Die CSS-Eigenschaft {{cssxref("view-timeline-name")}} ermöglicht es Ihnen, einem bestimmten Element einen Namen zu geben und damit zu kennzeichnen, dass sein Vorgänger-Scroller-Element die Quelle einer View-Progress-Timeline ist.
Der Name kann dann `animation-timeline` zugewiesen werden, wodurch das zugehörige Element animiert wird, wenn es sich durch den sichtbaren Bereich seines Vorgänger-Scrollers bewegt.
Weitere Details finden Sie in [Firefox-Bug 1737920](https://bugzil.la/1737920).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 136                 | Ja                       |
| Developer Edition | 114                 | Nein                     |
| Beta              | 114                 | Nein                     |
| Release           | 114                 | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Auf `true` setzen, um die Funktion zu aktivieren.

### Funktion für anonyme View-Progress-Timelines

Die CSS-Funktion {{cssxref("animation-timeline/view")}} ermöglicht es Ihnen anzugeben, dass die `animation-timeline` für ein Element eine View-Progress-Timeline ist, die das Element animiert, wenn es sich durch den sichtbaren Bereich seines Vorgänger-Scrollers bewegt.
Die Funktion definiert die Achse des Elternelements, das die Timeline bereitstellt, zusammen mit dem Inset innerhalb des sichtbaren Bereichs, an dem die Animation startet und beginnt.
Weitere Details finden Sie in [Firefox-Bug 1808410](https://bugzil.la/1808410).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 136                 | Ja                       |
| Developer Edition | 114                 | Nein                     |
| Beta              | 114                 | Nein                     |
| Release           | 114                 | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Auf `true` setzen, um die Funktion zu aktivieren.

### Mit Herstellerpräfix versehene transform-Eigenschaften

Die mit `-moz-` präfixierten [CSS-transform](/de/docs/Web/CSS/Guides/Transforms)-Eigenschaften können deaktiviert werden, indem die Einstellung `layout.css.prefixes.transforms` auf `false` gesetzt wird. Ziel ist es, diese zu deaktivieren, sobald die Standard-CSS-zoom-Eigenschaften gut unterstützt werden. ([Firefox-Bug 1886134](https://bugzil.la/1886134), [Firefox-Bug 1855763](https://bugzil.la/1855763)).

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
  - : Auf `true` setzen, um die Funktion zu aktivieren.

### Symmetrisches `letter-spacing`

Die CSS-Eigenschaft {{cssxref("letter-spacing")}} teilt den angegebenen Buchstabenabstand jetzt gleichmäßig auf beide Seiten jedes Zeichens auf. Dies unterscheidet sich vom aktuellen Verhalten, bei dem der Abstand hauptsächlich auf einer Seite hinzugefügt wird. Dieser Ansatz kann den Textabstand insbesondere in Texten mit gemischter Schreibrichtung verbessern.
([Firefox-Bug 1891446](https://bugzil.la/1891446)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 128                 | Ja                       |
| Developer Edition | 128                 | Ja                       |
| Beta              | 127                 | Nein                     |
| Release           | 127                 | Nein                     |

- `layout.css.letter-spacing.model`
  - : Auf `true` setzen, um die Funktion zu aktivieren.

### Pseudo-Elemente nach elementgestützten Pseudo-Elementen zulassen

Die Arbeit daran hat begonnen, [Pseudo-Elemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) wie {{cssxref("::first-letter")}} und {{cssxref("::before")}} an [elementgestützte Pseudo-Elemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements#element-backed_pseudo-elements) wie {{cssxref("::details-content")}} und {{cssxref("::file-selector-button")}} anzuhängen.

Dadurch können Benutzer beispielsweise den ersten Buchstaben des Elements {{htmlElement("details")}} mit dem CSS-Selektor `::details-content::first-letter` gestalten oder mit dem CSS-Selektor `::file-selector-button::before` Inhalt vor einem {{HTMLElement("input") }} mit [`type="file"`](/de/docs/Web/HTML/Reference/Elements/input/file) hinzufügen.

Derzeit kann nur die Unterstützung für `::details-content::first-letter` mit `@supports(::details-content::first-letter)` geparst werden.
Das Pseudo-Element `::file-selector-button` ist noch nicht als elementbasiertes Pseudo-Element gekennzeichnet, daher gibt es keine Möglichkeit, dies zu testen.
([Firefox-Bug 1953557](https://bugzil.la/1953557), [Firefox-Bug 1941406](https://bugzil.la/1941406)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 138                 | Nein                     |
| Developer Edition | 138                 | Nein                     |
| Beta              | 138                 | Nein                     |
| Release           | 138                 | Nein                     |

### Pseudo-Klassen `:heading` und `:heading()`

Die Pseudo-Klasse {{cssxref(":heading")}} ermöglicht es Ihnen, alle [Überschriftenelemente](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) (`<h1>`-`<h6>`) auf einmal zu gestalten, anstatt sie einzeln anzusprechen. Die funktionale Pseudo-Klasse {{cssxref(":heading()")}} ermöglicht es Ihnen, Überschriftenelemente zu gestalten, die einer kommagetrennten Liste von Ganzzahlen entsprechen, welche die Überschriftenebenen darstellen. ([Firefox-Bug 1974386](https://bugzil.la/1974383) & [Firefox-Bug 1984310](https://bugzil.la/1984310)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 142                 | Nein                     |
| Developer Edition | 142                 | Nein                     |
| Beta              | 142                 | Nein                     |
| Release           | 142                 | Nein                     |

- `layout.css.heading-selector.enabled`
  - : Auf `true` setzen, um die Funktion zu aktivieren.

### At-Regel `@custom-media`

Die CSS-At-Regel {{cssxref("@custom-media")}} definiert Aliase für lange oder komplexe Media Queries. Anstatt dieselbe hartcodierte `<media-query-list>` in mehreren `@media`-At-Regeln zu wiederholen, kann sie einmal in einer `@custom-media`-At-Regel definiert und überall im Stylesheet referenziert werden, wenn sie benötigt wird. ([Firefox-Bug 1744292](https://bugzil.la/1744292)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 148                 | Nein                     |
| Developer Edition | 148                 | Nein                     |
| Beta              | 148                 | Nein                     |
| Release           | 148                 | Nein                     |

- `layout.css.custom-media.enabled`
  - : Auf `true` setzen, um die Funktion zu aktivieren.

### Wert `base-select` für die CSS-Eigenschaft `appearance`

Der Wert [`base-select`](/de/docs/Web/CSS/Reference/Properties/appearance#base-select) für die CSS-Eigenschaft {{cssxref("appearance")}}, der nur für das Element {{htmlelement("select")}} und das Pseudo-Element {{cssxref("::picker()", "::picker(select)")}} relevant ist, ermöglicht es Ihnen, diese vollständig zu gestalten. Derzeit wird nur die Gestaltung des `<select>`-Elements unterstützt. Die Gestaltung des Pseudo-Elements `::picker(select)` wird in zukünftigen Versionen hinzugefügt. Diese Funktion ist Teil der Arbeit an [anpassbaren Select-Elementen](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select). Zu ihrer Verwendung müssen zwei Einstellungen aktiviert werden. ([Firefox-Bug 1974787](https://bugzil.la/1974787)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 149                 | Nein                     |
| Developer Edition | 149                 | Nein                     |
| Beta              | 149                 | Nein                     |
| Release           | 149                 | Nein                     |

- `dom.select.customizable_select.enabled`
  - : Auf `true` setzen, um die Funktion zu aktivieren.
- `layout.css.appearance-base.enabled`
  - : Auf `true` setzen, um die Funktion zu aktivieren.

### Absolut positionierte Elemente in mehrspaltigen Containern und beim Drucken

Absolut positionierte Elemente innerhalb von [mehrspaltigen Containern](/de/docs/Web/CSS/Guides/Multicol_layout) und beim Drucken werden jetzt korrekt positioniert und fragmentiert.
Dies verbessert die Interoperabilität mit anderen Browsern und verhindert Layoutprobleme wie überlappenden Text oder Inhaltsverlust.
([Firefox-Bug 2018797](https://bugzil.la/2018797)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 150                 | Ja                       |
| Developer Edition | 150                 | Nein                     |
| Beta              | 150                 | Nein                     |
| Release           | 150                 | Nein                     |

- `layout.abspos.fragmentainer-aware-positioning.enabled`
  - : Auf `true` setzen, um die Funktion zu aktivieren.

### `@container style()`-Abfragen mit Bereichssyntax

Die [`style()`](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries)-Abfragen der CSS-At-Regel [`@container`](/de/docs/Web/CSS/Reference/At-rules/@container) unterstützen jetzt die _Bereichssyntax_. Dadurch können Sie prüfen, ob ein Container eine gültige benutzerdefinierte CSS-Eigenschaft besitzt, ihren Wert mit Vergleichsoperatoren wie `>`, `<`, `>=` und `<=` vergleichen und entsprechend Stile auf seine Kindelemente anwenden. ([Firefox-Bug 2024601](https://bugzil.la/2024601)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 151                 | Nein                     |
| Developer Edition | 151                 | Nein                     |
| Beta              | 151                 | Nein                     |
| Release           | 151                 | Nein                     |

- `layout.css.attr.enabled`
  - : Auf `true` setzen, um die Funktion zu aktivieren.

### Werte `<timeline-range-name>`

Die CSS-Eigenschaften {{cssxref("animation-range-start")}}, {{cssxref("animation-range-end")}} und die Kurzschreibeigenschaft {{cssxref("animation-range")}} unterstützen jetzt Werte [`<timeline-range-name>`](/de/docs/Web/CSS/Reference/Values/timeline-range-name). Diese Werte [`<timeline-range-name>`](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names#timeline_range_names) ermöglichen es Ihnen, genau anzugeben, innerhalb welchen Segments eine scrollgesteuerte Animation stattfindet. ([Firefox-Bug 1804775](https://bugzil.la/1804775)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 151                 | Ja                       |
| Developer Edition | 151                 | Nein                     |
| Beta              | 151                 | Nein                     |
| Release           | 151                 | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Auf `true` setzen, um die Funktion zu aktivieren.

### Werte `<timeline-range-name>` in `@keyframes`-Selektoren

Die At-Regel {{cssxref("@keyframes")}} unterstützt jetzt Werte [`<timeline-range-name>`](/de/docs/Web/CSS/Reference/Values/timeline-range-name). Diese [Werte](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names#timeline_range_names) ermöglichen es Ihnen, das Segment anzugeben, innerhalb dessen eine scrollgesteuerte Animation stattfindet. ([Firefox-Bug 1824875](https://bugzil.la/1824875)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 152                 | Ja                       |
| Developer Edition | 152                 | Nein                     |
| Beta              | 152                 | Nein                     |
| Release           | 152                 | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Auf `true` setzen, um die Funktion zu aktivieren.

### Attribute externer Ressourcen aktualisieren

Die CSS-Eigenschaft {{cssxref("link-parameters")}} und die CSS-Funktion {{cssxref("param")}} werden jetzt unterstützt. Dadurch kann der Benutzer Attribute externer Ressourcen wie SVGs aktualisieren, deren Attribute mit der CSS-Funktion {{cssxref("env")}} gesetzt sind. Das bedeutet, dass eine einzelne externe Ressource verwendet werden kann, statt mehrere Varianten zu erstellen, die sich nur durch Farben oder andere Werte unterscheiden. ([Firefox-Bug 2046153](https://bugzil.la/2046153)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 154                 | Ja                       |
| Developer Edition | 153                 | Nein                     |
| Beta              | 153                 | Nein                     |
| Release           | 153                 | Nein                     |

- `layout.css.link-parameters.enabled`
  - : Auf `true` setzen, um die Funktion zu aktivieren.

### Inhalte mit `line-clamp` kürzen

Die CSS-Eigenschaft {{cssxref("line-clamp")}} funktioniert jetzt ohne das Herstellerpräfix `-webkit-`, unterstützt in diesem Stadium jedoch nicht die Werte `no-ellipsis` und `<string>`. ([Firefox-Bug 2042986](https://bugzil.la/2042986)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 154                 | Nein                     |
| Developer Edition | 154                 | Nein                     |
| Beta              | 154                 | Nein                     |
| Release           | 154                 | Nein                     |

- `layout.css.line-clamp.enabled`
  - : Auf `true` setzen, um die Funktion zu aktivieren.

### Prozentwerte für `text-decoration-inset`

Die CSS-Eigenschaft {{cssxref("text-decoration-inset")}} unterstützt jetzt Prozentwerte. Der Prozentwert gibt die Größe des Insets als Prozentsatz der Inline-Größe der dekorierenden Box oder jedes einzelnen Boxfragments an, abhängig vom Wert von {{cssxref("box-decoration-break")}}. ([Firefox-Bug 2044602](https://bugzil.la/2044602)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 154                 | Nein                     |
| Developer Edition | 154                 | Nein                     |
| Beta              | 154                 | Nein                     |
| Release           | 154                 | Nein                     |

- `layout.css.text-decoration-inset-percentage.enabled`
  - : Auf `true` setzen, um die Funktion zu aktivieren.

### `view-timeline` enthält `view-timeline-inset`

Die Kurzschreibeigenschaft {{cssxref("view-timeline")}} unterstützt jetzt die Eigenschaft {{cssxref("view-timeline-inset")}}. Mit der Kurzschreibweise können Sie Start- und/oder End-Inset-Werte (oder Outset-Werte) angeben, um die Position der View-Progress-Timeline anzupassen. ([Firefox-Bug 2046602](https://bugzil.la/2046602)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 155                 | Ja                       |
| Developer Edition | 155                 | Nein                     |
| Beta              | 155                 | Nein                     |
| Release           | 155                 | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Auf `true` setzen, um die Funktion zu aktivieren.

### `timeline-scope`-Namen sind jetzt standardmäßig global

Das Standardverhalten für die Gültigkeitsbereiche benannter Timelines wurde auf global aktualisiert. Dies kann mit der CSS-Eigenschaft {{cssxref("timeline-scope")}} und dem Wert von entweder {{cssxref("scroll-timeline-name")}} oder {{cssxref("view-timeline-name")}} auf Elemente und ihre Teilbäume beschränkt werden ([Firefox-Bug 2024012](https://bugzil.la/2024012)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 155                 | Ja                       |
| Developer Edition | 155                 | Nein                     |
| Beta              | 155                 | Nein                     |
| Release           | 155                 | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Auf `true` setzen, um die Funktion zu aktivieren.

### `named-feature()`-Unterstützungsabfragen

Die Funktion `named-feature()` in der At-Regel {{cssxref("@supports")}} ermöglicht es Ihnen zu testen, ob der Browser eine Funktion unterstützt, die keine andere erkennbare Syntax besitzt, zum Beispiel `@supports named-feature(anchor-position-follows-transforms)`.
([Firefox-Bug 2042977](https://bugzil.la/2042977) und [Firefox-Bug 2055354](https://bugzil.la/2055354)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 156                 | Nein                     |
| Developer Edition | 156                 | Nein                     |
| Beta              | 156                 | Nein                     |
| Release           | 156                 | Nein                     |

- `layout.css.supports.at-rule.enabled`
  - : Auf `true` setzen, um die Funktion zu aktivieren.

### `at-rule()`-Unterstützungsabfragen

Die Funktion [`at-rule()`](/de/docs/Web/CSS/Reference/At-rules/@supports#at-rule) in der At-Regel {{cssxref("@supports")}} ermöglicht es Ihnen zu testen, ob der Browser eine bestimmte CSS-At-Regel unterstützt, zum Beispiel `@supports at-rule(@scope)`. Sie funktioniert auch in der Funktion `supports()` von {{cssxref("@import")}}. ([Firefox-Bug 2060754](https://bugzil.la/2060754)).

## SVG

**Keine experimentellen Funktionen in diesem Release-Zyklus.**

## MathML

### `href` für nicht-`<a>`-MathML-Elemente deaktivieren

Wenn diese Funktion aktiviert ist, erstellt das globale Attribut [`href`](/de/docs/Web/MathML/Reference/Global_attributes/href) keine Hyperlinks mehr auf MathML-Elementen außer `<a>`. Damit wird Firefox an die [MathML-Core-Spezifikation](https://w3c.github.io/mathml-core/#the-a-element) angeglichen, die Hyperlinks nur auf dem Element `<a>` definiert. ([Firefox-Bug 2026848](https://bugzil.la/2026848)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 151                 | Ja                       |
| Developer Edition | 151                 | Nein                     |
| Beta              | 151                 | Nein                     |
| Release           | 151                 | Nein                     |

- `mathml.href_link_on_non_anchor_element.disabled`
  - : Auf `true` setzen, um die Funktion zu aktivieren.

### Schnittstelle `MathMLAnchorElement` implementieren

Wenn diese Funktion aktiviert ist, wird das MathML-Element [`<a>`](/de/docs/Web/MathML/Reference/Element/a) im DOM korrekt durch die Schnittstelle [`MathMLAnchorElement`](/de/docs/Web/API/MathMLAnchorElement) statt durch die generische Schnittstelle [`MathMLElement`](/de/docs/Web/API/MathMLElement) dargestellt. ([Firefox-Bug 2059312](https://bugzil.la/2059312)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 155                 | Ja                       |
| Developer Edition | 155                 | Nein                     |
| Beta              | 155                 | Nein                     |
| Release           | 155                 | Nein                     |

- `mathml.a.element.enabled`
  - : Auf `true` setzen, um die Funktion zu aktivieren.

### MathML-`<a>`-Elemente

Das MathML-Element `<a>` erstellt aus MathML-Inhalten einen Hyperlink und stellt die Schnittstelle `MathMLAnchorElement` mit denselben URL-Komponenteneigenschaften wie HTML-Elemente {{HTMLElement("a")}} bereit.

Dieses Release fügt Unterstützung für die IDL-Attribute `rel` und `relList` hinzu. ([Firefox-Bug 2063819](https://bugzil.la/2063819)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 156                 | Ja                       |
| Developer Edition | 156                 | Nein                     |
| Beta              | 156                 | Nein                     |
| Release           | 156                 | Nein                     |

- `mathml.a.element.enabled`
  - : Auf `true` setzen, um die Funktion zu aktivieren.

## JavaScript

### TC39-Vorschlag Intl.Locale info

Der [TC39-Vorschlag Intl.Locale info](https://github.com/tc39/proposal-intl-locale-info) wird jetzt unterstützt.
Dies umfasst alle Instanzmethoden von `Intl.Locale`, die mit „get“ beginnen — {{jsxref("Intl/Locale/getCalendars", "Intl.Locale.prototype.getCalendars()")}}, {{jsxref("Intl/Locale/getCollations", "Intl.Locale.prototype.getCollations()")}}, {{jsxref("Intl/Locale/getHourCycles", "Intl.Locale.prototype.getHourCycles()")}}, {{jsxref("Intl/Locale/getNumberingSystems", "Intl.Locale.prototype.getNumberingSystems()")}}, {{jsxref("Intl/Locale/getTextInfo", "Intl.Locale.prototype.getTextInfo()")}}, {{jsxref("Intl/Locale/getTimeZones", "Intl.Locale.prototype.getTimeZones()")}}, {{jsxref("Intl/Locale/getWeekInfo", "Intl.Locale.prototype.getWeekInfo()")}}.
([Firefox-Bug 1693576](https://bugzil.la/1693576)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 152                 | Nein                     |
| Developer Edition | —                   | —                        |
| Beta              | —                   | —                        |
| Release           | —                   | —                        |

- `javascript.options.experimental.intl_locale_info`
  - : Auf Nightly auf `true` setzen, um die Funktion zu aktivieren.

### Mehrere Import Maps

Unterstützung für [mehrere Import Maps](/de/docs/Web/HTML/Reference/Elements/script/type/importmap#merging_multiple_import_maps).
Diese geben Entwicklern mehr Flexibilität bei der Strukturierung und beim Laden von JavaScript-Modulen, da sie nicht mehr alle ihre Modulzuordnungen im Voraus kennen und in einer einzelnen Import Map deklarieren müssen, bevor sie Module laden.
([Firefox-Bug 1916277](https://bugzil.la/1916277)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 150                 | Nein                     |
| Developer Edition | 150                 | Nein                     |
| Beta              | 150                 | Nein                     |
| Release           | 150                 | Nein                     |

- `dom.multiple_import_maps.enabled`
  - : Auf `true` setzen, um die Funktion zu aktivieren.

### Puffergrenzenassertionen in regulären Ausdrücken

Die [`\A`-, `\z`- und `\Z`-Puffergrenzenassertionen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Buffer_boundary_assertion) werden jetzt unterstützt.
`\A` und `\z` ermöglichen es Ihnen, den Anfang oder das Ende der gesamten Eingabe abzugleichen, während `\Z` das Ende der Eingabe abgleicht und dabei einen Zeilenabschluss ignoriert.
Die Assertionen werden nicht durch das Flag [`m`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline) beeinflusst (anders als `^` und `$`) und können nur im [Unicode-bewussten Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) verwendet werden (wenn das Flag `u` oder `v` gesetzt ist).
([Firefox-Bug 2047706](https://bugzil.la/2047706)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 155                 | Nein                     |
| Developer Edition | —                   | —                        |
| Beta              | —                   | —                        |
| Release           | —                   | —                        |

- `javascript.options.experimental.regexp_buffer_boundaries`
  - : Auf Nightly auf `true` setzen, um die Funktion zu aktivieren.

## APIs

### Absturzberichte

Absturzberichte können jetzt über die [Reporting API](/de/docs/Web/API/Reporting_API) an den Endpunkt `default` gesendet werden.
Beachten Sie, dass Firefox die Bereitstellung von [`CrashReportContext`](/de/docs/Web/API/CrashReportContext) im Berichtstext nicht unterstützt.
([Firefox-Bug 2036160](https://bugzil.la/2036160)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 152                 | Ja                       |
| Developer Edition | 152                 | Nein                     |
| Beta              | 152                 | Nein                     |
| Release           | 152                 | Nein                     |

- `dom.reporting.crash.enabled`
  - : Auf `true` setzen, um die Funktion zu aktivieren (in Nightly standardmäßig aktiviert).

### Bereichsbezogene Custom-Element-Registrys

Die Unterstützung für [bereichsbezogene Custom-Element-Registrys](/de/docs/Web/API/Web_components/Using_custom_elements#scoped_custom_element_registries) wird implementiert.
Bereichsbezogene Registrys ermöglichen es einem Shadow Tree, eine unabhängige [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry) zu erstellen, deren Definitionen nur auf diesen spezifischen DOM-Teilbaum angewendet werden.
Dies kann genutzt werden, um Kollisionen zu vermeiden, bei denen mehrere Web Components Elemente mit demselben Namen deklarieren.

Die Implementierung umfasst:

- Die Eigenschaft `customElementRegistry` auf [`Document`](/de/docs/Web/API/Document), [`Element`](/de/docs/Web/API/Element) und [`ShadowRoot`](/de/docs/Web/API/ShadowRoot).
  Der [Konstruktor `CustomElementRegistry()`](/de/docs/Web/API/CustomElementRegistry/CustomElementRegistry) erstellt ein neues `CustomElementRegistry`-Objekt zur bereichsbezogenen Verwendung. ([Firefox-Bug 2018900](https://bugzil.la/2018900))

Ab Version 156:

- [Bereichsbezogene Custom-Element-Registrys](/de/docs/Web/API/Web_components/Using_custom_elements#scoped_custom_element_registries) werden jetzt unterstützt, sodass eine Shadow Root Custom Elements definieren kann, die nicht mit denjenigen in der globalen Registry kollidieren. ([Firefox-Bug 2064333](https://bugzil.la/2064333)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 156                 | Ja                       |
| Developer Edition | 150                 | Nein                     |
| Beta              | 150                 | Nein                     |
| Release           | 150                 | Nein                     |

- `dom.scoped-custom-element-registries.enabled`
  - : Auf `true` setzen, um die Funktion zu aktivieren.

### CSS Typed Object Model Level 1

Die [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) ist in Nightly implementiert.
Sie vereinfacht die Manipulation von CSS-Eigenschaften, indem CSS-Werte als typisierte JavaScript-Objekte statt als Strings bereitgestellt werden.
([Firefox-Bug 1278697](https://bugzil.la/1278697)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 154                 | Ja                       |
| Developer Edition | 149                 | Nein                     |
| Beta              | 149                 | Nein                     |
| Release           | 149                 | Nein                     |

- `layout.css.typed-om.enabled`
  - : Auf `true` setzen, um die Funktion zu aktivieren.

### Grafik: Canvas, WebGL und WebGPU

#### WebGL: Entwurfserweiterungen

Wenn diese Einstellung aktiviert ist, werden alle aktuell getesteten WebGL-Erweiterungen mit dem Status „draft“ zur Verwendung aktiviert. Derzeit werden von Firefox keine WebGL-Erweiterungen getestet.

#### WebGPU API

Die [WebGPU API](/de/docs/Web/API/WebGPU_API) bietet Low-Level-Unterstützung für Berechnungen und Grafik-Rendering mit der [Graphics Processing Unit](https://en.wikipedia.org/wiki/Graphics_Processing_Unit) (GPU) des Geräts oder Computers des Benutzers.
Ab Version 142 ist sie unter Windows in allen Kontexten außer Service Workern aktiviert.
Ab Version 147 ist sie unter macOS auf Apple Silicon in allen Browsing-Kontexten außer Service Workern aktiviert.
Für andere Plattformen wie Linux und macOS auf Intel Silicon ist sie in Nightly aktiviert.
Informationen zu unserem Fortschritt bei dieser API finden Sie in [Firefox-Bug 1602129](https://bugzil.la/1602129).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert?                                                       |
| ----------------- | ------------------- | ------------------------------------------------------------------------------ |
| Nightly           | 141                 | Ja                                                                             |
| Developer Edition | 141                 | Nein (Ja unter Windows und macOS auf Apple Silicon, außer bei Service Workern) |
| Beta              | 141                 | Nein (Ja unter Windows und macOS auf Apple Silicon, außer bei Service Workern) |
| Release           | 141                 | Nein (Ja unter Windows und macOS auf Apple Silicon, außer bei Service Workern) |

- `dom.webgpu.enabled`
  - : Auf `true` setzen, um die Funktion zu aktivieren (in Nightly und unter Windows in allen Releases aktiviert)
- `dom.webgpu.service-workers.enabled`
  - : Auf `true` setzen, um die Funktion zu aktivieren (in Nightly aktiviert)

### WebRTC und Medien

Die folgenden experimentellen Funktionen umfassen solche aus Medien-APIs wie der [WebRTC API](/de/docs/Web/API/WebRTC_API), der [Web Audio API](/de/docs/Web/API/Web_Audio_API), der [Media Source Extensions API](/de/docs/Web/API/Media_Source_Extensions_API), der [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API) und der [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API).

#### Audio Session API

Die [Audio Session API](/de/docs/Web/API/Audio_Session_API) stellt einen Mechanismus bereit, mit dem Webanwendungen steuern können, wie ihr Audio mit anderen auf einem Gerät abgespielten Audios interagiert. ([Firefox-Bug 2055710](https://bugzil.la/2055710)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 155                 | Ja                       |
| Developer Edition | 153                 | Nein                     |
| Beta              | 153                 | Nein                     |
| Release           | 153                 | Nein                     |

- `dom.audio_session.enabled`
  - : Auf `true` setzen, um die Funktion zu aktivieren.

#### HTMLMediaElement-Eigenschaften: audioTracks und videoTracks

Durch Aktivieren dieser Funktion werden die Eigenschaften [`HTMLMediaElement.audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks) und [`HTMLMediaElement.videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks) zu allen HTML-Medienelementen hinzugefügt. Da Firefox jedoch derzeit keine mehreren Audio- und Videospuren unterstützt, funktionieren die häufigsten Anwendungsfälle für diese Eigenschaften nicht, weshalb beide standardmäßig deaktiviert sind. Weitere Details finden Sie in [Firefox-Bug 1057233](https://bugzil.la/1057233).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 33                  | Nein                     |
| Developer Edition | 33                  | Nein                     |
| Beta              | 33                  | Nein                     |
| Release           | 33                  | Nein                     |

- `media.track.enabled`
  - : Auf `true` setzen, um die Funktion zu aktivieren.

#### Asynchrones Hinzufügen und Entfernen von SourceBuffer

Dadurch werden die Promise-basierten Methoden [`appendBufferAsync()`](/de/docs/Web/API/SourceBuffer/appendBufferAsync) und [`removeAsync()`](/de/docs/Web/API/SourceBuffer/removeAsync) zum Hinzufügen und Entfernen von Medienquellenpuffern zur Schnittstelle [`SourceBuffer`](/de/docs/Web/API/SourceBuffer) hinzugefügt. Weitere Informationen finden Sie in [Firefox-Bug 1280613](https://bugzil.la/1280613) und [Firefox-Bug 778617](https://bugzil.la/778617).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 62                  | Nein                     |
| Developer Edition | 62                  | Nein                     |
| Beta              | 62                  | Nein                     |
| Release           | 62                  | Nein                     |

- `media.mediasource.experimental.enabled`
  - : Auf `true` setzen, um die Funktion zu aktivieren.

#### AVIF-Konformitätsstrenge

Die Einstellung `image.avif.compliance_strictness` kann verwendet werden, um die bei der Verarbeitung von [AVIF](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image)-Bildern angewendete _Strenge_ zu steuern.
Dadurch können Firefox-Benutzer Bilder anzeigen, die in anderen Browsern gerendert werden, auch wenn sie nicht strikt konform sind.

| Release-Kanal     | Version hinzugefügt | Standardwert |
| ----------------- | ------------------- | ------------ |
| Nightly           | 92                  | 1            |
| Developer Edition | 92                  | 1            |
| Beta              | 92                  | 1            |
| Release           | 92                  | 1            |

- `image.avif.compliance_strictness`
  - : Numerischer Wert, der eine _Strenge_-Stufe angibt. Zulässige Werte sind:
    - `0`: Tolerant. Akzeptiert Bilder mit Spezifikationsverletzungen sowohl in Empfehlungen („should“-Formulierungen) als auch in Anforderungen („shall“-Formulierungen), sofern sie sicher oder eindeutig interpretiert werden können.
    - `1` **(Standard)**: Gemischt. Lehnt Verstöße gegen Anforderungen („shall“) ab, erlaubt jedoch Verstöße gegen Empfehlungen („should“).
    - `2`: Strikt. Lehnt alle Verstöße gegen angegebene Anforderungen oder Empfehlungen ab.

#### JPEG-XL-Unterstützung

Firefox unterstützt das Bildformat [JPEG XL](https://jpeg.org/jpegxl/), einen modernen Nachfolger von JPEG, der verbesserte Komprimierung und Bildqualität sowie neue Fähigkeiten wie Transparenz-, Animations- und HDR-Unterstützung bietet.
Weitere Details finden Sie in [Firefox-Bug 1539075](https://bugzil.la/1539075) und [Firefox-Bug 2016688](https://bugzil.la/2016688).

In Firefox 149 wurde der vorherige C++-[JPEG-XL](https://jpeg.org/jpegxl/)-Bilddecoder durch eine neue Rust-basierte Implementierung ersetzt, die die Bibliothek `jxl-rs` verwendet ([Firefox-Bug 1986393](https://bugzil.la/1986393)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 153                 | Ja                       |
| Developer Edition | 152                 | Nein                     |
| Beta              | 152                 | Nein                     |
| Release           | 152                 | Nein                     |

- `image.jxl.enabled`
  - : Auf `true` setzen, um die Funktion zu aktivieren.

### WebVR API (deaktiviert)

Die veraltete [WebVR API](/de/docs/Web/API/WebVR_API) soll entfernt werden.
Sie ist standardmäßig in allen Builds deaktiviert ([Firefox-Bug 1750902](https://bugzil.la/1750902)).

| Release-Kanal     | Version entfernt | Standardmäßig aktiviert? |
| ----------------- | ---------------- | ------------------------ |
| Nightly           | 98               | Nein                     |
| Developer Edition | 98               | Nein                     |
| Beta              | 98               | Nein                     |
| Release           | 98               | Nein                     |

- `dom.vr.enabled`
  - : Auf `true` setzen, um die Funktion zu aktivieren.

### GeometryUtils-Methoden: convertPointFromNode(), convertRectFromNode() und convertQuadFromNode()

Die `GeometryUtils`-Methoden `convertPointFromNode()`, `convertRectFromNode()` und `convertQuadFromNode()` ordnen den angegebenen Punkt, das Rechteck oder das Viereck vom [`Node`](/de/docs/Web/API/Node), für den sie aufgerufen werden, einem anderen Knoten zu. Weitere Details finden Sie in [Firefox-Bug 918189](https://bugzil.la/918189).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 31                  | Nein                     |
| Developer Edition | 31                  | Nein                     |
| Beta              | 31                  | Nein                     |
| Release           | 31                  | Nein                     |

- `layout.css.convertFromNode.enabled`
  - : Auf `true` setzen, um die Funktion zu aktivieren.

### GeometryUtils-Methode: getBoxQuads()

Die `GeometryUtils`-Methode `getBoxQuads()` gibt die CSS-Boxen für einen [`Node`](/de/docs/Web/API/Node) relativ zu einem beliebigen anderen Knoten oder Viewport zurück. Weitere Details finden Sie in [Firefox-Bug 917755](https://bugzil.la/917755).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 31                  | Nein                     |
| Developer Edition | 31                  | Nein                     |
| Beta              | 31                  | Nein                     |
| Release           | 31                  | Nein                     |

- `layout.css.getBoxQuads.enabled`
  - : Auf `true` setzen, um die Funktion zu aktivieren.

### Payment Request API

#### Primäre Zahlungsabwicklung

Die [Payment Request API](/de/docs/Web/API/Payment_Request_API) unterstützt die Abwicklung webbasierter Zahlungen innerhalb von Webinhalten oder Apps. Aufgrund eines Fehlers, der während der Tests der Benutzeroberfläche auftrat, haben wir entschieden, die Auslieferung dieser API zu verschieben, während Diskussionen über mögliche Änderungen an der API geführt werden. Die Arbeit wird fortgesetzt. Weitere Details finden Sie in [Firefox-Bug 1318984](https://bugzil.la/1318984).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 55                  | Nein                     |
| Developer Edition | 55                  | Nein                     |
| Beta              | 55                  | Nein                     |
| Release           | 55                  | Nein                     |

- `dom.payments.request.enabled`
  - : Auf `true` setzen, um die Funktion zu aktivieren.
- `dom.payments.request.supportedRegions`
  - : Ländercodes als kommagetrennte Allowlist von Regionen, beispielsweise `US,CA`.

### WebShare API

Die [Web Share API](/de/docs/Web/API/Web_Share_API) ermöglicht die Freigabe von Dateien, URLs und anderen Daten von einer Website.
Diese Funktion ist in allen Builds auf Android aktiviert, auf Desktop jedoch hinter einer Einstellung verborgen (sofern unten nicht anders angegeben).

| Release-Kanal     | Version geändert | Standardmäßig aktiviert?                    |
| ----------------- | ---------------- | ------------------------------------------- |
| Nightly           | 71               | Nein (Standard). Ja (Windows ab Version 92) |
| Developer Edition | 71               | Nein                                        |
| Beta              | 71               | Nein                                        |
| Release           | 71               | Nein (Desktop). Ja (Android).               |

- `dom.webshare.enabled`
  - : Auf `true` setzen, um die Funktion zu aktivieren.

### Notifications API

Bei Benachrichtigungen ist die Eigenschaft [`requireInteraction`](/de/docs/Web/API/Notification/requireInteraction) auf Windows-Systemen und im Nightly-Release standardmäßig auf true gesetzt ([Firefox-Bug 1794475](https://bugzil.la/1794475)).

| Release-Kanal     | Version geändert | Standardmäßig aktiviert? |
| ----------------- | ---------------- | ------------------------ |
| Nightly           | 117              | Ja                       |
| Developer Edition | 117              | Nein                     |
| Beta              | 117              | Nein                     |
| Release           | 117              | Nur Windows              |

- `dom.webnotifications.requireinteraction.enabled`
  - : Auf `true` setzen, um die Funktion zu aktivieren.

### Container Timing API

Die Container Timing API meldet, wann die Inhalte eines Container-Elements gezeichnet werden, sodass Sie die Renderzeit eines Bereichs der Seite statt des gesamten Viewports messen können.
([Firefox-Bug 1940240](https://bugzil.la/1940240)).

| Release-Kanal     | Version geändert | Standardmäßig aktiviert? |
| ----------------- | ---------------- | ------------------------ |
| Nightly           | 156              | Nein                     |
| Developer Edition | 156              | Nein                     |
| Beta              | 156              | Nein                     |
| Release           | 156              | Nein                     |

- `dom.enable_container_timing`
  - : Auf `true` setzen, um die Funktion zu aktivieren.

## Sicherheit und Datenschutz

### Kennzeichnung unsicherer Seiten

Die beiden Einstellungen `security.insecure_connection_text_*` fügen neben dem herkömmlichen Schloss-Symbol ein Textlabel „Nicht sicher“ in der Adressleiste hinzu, wenn eine Seite unsicher geladen wird, das heißt mit {{Glossary("HTTP", "HTTP")}} statt mit {{Glossary("HTTPS", "HTTPS")}}. Die Einstellung `browser.urlbar.trimHttps` entfernt das Präfix `https:` aus URLs in der Adressleiste. Weitere Details finden Sie in [Firefox-Bug 1853418](https://bugzil.la/1853418).

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
  - : Auf `true` setzen, um das Präfix `https:` aus URLs in der Adressleiste zu entfernen.

### Inhalte für Erwachsene mit `<meta name="rating">` einschränken

Das nicht standardisierte Element [`<meta name="rating">`](/de/docs/Web/HTML/Reference/Elements/meta) kann auf einer Webseite eingefügt werden, um den Inhalt der Seite als eingeschränkt bzw. für Erwachsene zu kennzeichnen. Zum Zeitpunkt der Erstellung gibt es zwei mögliche `content`-Werte, `adult` ([von Google definiert](https://developers.google.com/search/docs/specialty/explicit/guidelines#add-metadata)) und `RTA-5042-1996-1400-1577-RTA` ([von ASACP definiert](https://www.rtalabel.org/?content=howto#top)), die dieselbe Wirkung haben (in Zukunft können weitere Optionen hinzukommen).

Die folgenden `<meta>`-Elemente sind gleichwertig:

```html
<meta name="rating" content="adult" />
<meta name="rating" content="RTA-5042-1996-1400-1577-RTA" />
```

Browser, die dieses Element erkennen, können dann Maßnahmen ergreifen, um Benutzer daran zu hindern, die Inhalte anzuzeigen. Die Firefox-Implementierung ersetzt die Seite durch den unter `about:restricted` gefundenen Inhalt. Dieser erklärt dem Benutzer, dass er versucht, eingeschränkte Inhalte anzuzeigen, warum er diese nicht ansehen kann, und stellt eine Zurück-Schaltfläche bereit, um dorthin zurückzukehren, woher er kam.

Weitere Details finden Sie in [Firefox-Bug 1991135](https://bugzil.la/1991135).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 146                 | Nein                     |
| Developer Edition | 146                 | Nein                     |
| Beta              | 146                 | Nein                     |
| Release           | 146                 | Nein                     |

- `security.restrict_to_adults.always`
  - : Auf `true` setzen, um den Zugriff auf Webseiten einzuschränken, die sich durch ein Element `<meta name="rating">` selbst als Inhalte für Erwachsene kennzeichnen.
- `security.restrict_to_adults.respect_platform`
  - : Auf `true` setzen, um den Zugriff auf Webseiten einzuschränken, die sich durch ein Element `<meta name="rating">` selbst als Inhalte für Erwachsene kennzeichnen, jedoch nur, wenn auf dem zugrunde liegenden Betriebssystem entsprechende Kindersicherungen festgelegt sind (wenn beispielsweise die macOS-Einstellungen _Content & Privacy_ so festgelegt sind, dass explizite Webinhalte eingeschränkt werden).

### Permissions Policy / Feature Policy

[Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) ermöglicht Webentwicklern, bestimmte Funktionen und APIs im Browser selektiv zu aktivieren, zu deaktivieren und ihr Verhalten zu ändern. Sie ähnelt CSP, steuert jedoch Funktionen statt Sicherheitsverhalten.
Dies ist in Firefox als **Feature Policy** implementiert, dem Namen, der in einer früheren Version der Spezifikation verwendet wurde.

Beachten Sie, dass unterstützte Richtlinien über das Attribut [`allow`](/de/docs/Web/HTML/Reference/Elements/iframe#allow) für `<iframe>`-Elemente festgelegt werden können, auch wenn die Benutzereinstellung nicht gesetzt ist.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 65                  | Nein                     |
| Developer Edition | 65                  | Nein                     |
| Beta              | 65                  | Nein                     |
| Release           | 65                  | Nein                     |

- `dom.security.featurePolicy.header.enabled`
  - : Auf `true` setzen, um die Funktion zu aktivieren.

### Privacy Preserving Attribution API (PPA)

Die [PPA API](https://support.mozilla.org/en-US/kb/privacy-preserving-attribution) bietet eine Alternative zum Benutzer-Tracking für die Anzeigenattribution mithilfe des neuen Objekts `navigator.privateAttribution` mit den Methoden `saveImpression()` und `measureConversion()`. Weitere Informationen über PPA finden Sie in der [ursprünglichen Erläuterung](https://github.com/mozilla/explainers/tree/main/archive/ppa-experiment) und der [vorgeschlagenen Spezifikation](https://w3c.github.io/ppa/). Dieses Experiment kann für Websites über einen [Origin Trial](https://wiki.mozilla.org/Origin_Trials) oder im Browser durch Setzen der Einstellung auf `1` aktiviert werden. ([Firefox-Bug 1900929](https://bugzil.la/1900929)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 128                 | Nein                     |
| Developer Edition | 128                 | Nein                     |
| Beta              | 128                 | Nein                     |
| Release           | 128                 | Nein                     |

- `dom.origin-trials.private-attribution.state`
  - : Auf `true` setzen, um die Funktion zu aktivieren.

## HTTP

### Integritätsrichtlinie für Stylesheet-Ressourcen

Die HTTP-Header {{httpheader("Integrity-Policy")}} und {{httpheader("Integrity-Policy-Report-Only")}} werden jetzt für Style-Ressourcen unterstützt. Sie ermöglichen es Websites, entweder [Subresource-Integrity-Garantien](/de/docs/Web/Security/Defenses/Subresource_Integrity) für Styles durchzusetzen oder Verstöße gegen die Richtlinie nur zu melden.
Beachten Sie, dass Firefox Reporting-Endpunkte ignoriert und Verstöße in der Entwicklerkonsole protokolliert.
Wenn `Integrity-Policy` verwendet wird, blockiert der Browser das Laden von Styles, auf die in einem {{HTMLElement("link")}}-Element mit [`rel="stylesheet"`](/de/docs/Web/HTML/Reference/Attributes/rel#stylesheet) verwiesen wird und denen entweder das Attribut [`integrity`](/de/docs/Web/HTML/Reference/Elements/script#integrity) fehlt oder deren Integritäts-Hash nicht mit der Ressource auf dem Server übereinstimmt.
([Firefox-Bug 1976656](https://bugzil.la/1976656)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 142                 | Nein                     |
| Developer Edition | 142                 | Nein                     |
| Beta              | 142                 | Nein                     |
| Release           | 142                 | Nein                     |

- `security.integrity_policy.stylesheet.enabled`
  - : Auf `true` setzen, um die Funktion zu aktivieren.

### Idempotency-Key

Der HTTP-Anforderungsheader {{httpheader("Idempotency-Key")}} kann von Client-Code einer Website verwendet werden, um Anfragen vom Typ {{HTTPMethod("POST")}} oder {{HTTPMethod("PATCH")}} bei Verwendung mit einem Server, der dies unterstützt, {{Glossary("idempotent", "idempotent")}} zu machen.
Die Spezifikation gibt an, dass der Server dokumentieren und bekannt machen sollte, welche Endpunkte diesen Header benötigen, welches Format der Schlüssel hat und welche Fehlerantworten erwartet werden.

Firefox fügt den Header _automatisch_ mit einem eindeutigen Schlüssel für jede neue `POST`-Anfrage hinzu, wenn er nicht bereits durch den clientseitigen Code der Seite hinzugefügt wurde.
Dies vereinfacht den clientseitigen Code, der für die Arbeit mit Servern erforderlich ist, die diese Funktion unterstützen.

([Firefox-Bug 1830022](https://bugzil.la/1830022)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 135                 | Nein                     |
| Developer Edition | 135                 | Nein                     |
| Beta              | 135                 | Nein                     |
| Release           | 135                 | Nein                     |

- `network.http.idempotencyKey.enabled`
  - : Auf `true` setzen, um die Funktion zu aktivieren.

### Accept-Header mit dem MIME-Typ image/jxl

Der HTTP-Header [`Accept`](/de/docs/Web/HTTP/Reference/Headers/Accept) in [Standardanfragen und Bildanfragen](/de/docs/Web/HTTP/Guides/Content_negotiation/List_of_default_Accept_values) kann über eine Einstellung konfiguriert werden, um Unterstützung für den MIME-Typ `image/jxl` anzugeben.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 128                 | Nein                     |
| Developer Edition | 128                 | Nein                     |
| Beta              | 128                 | Nein                     |
| Release           | 128                 | Nein                     |

- `image.jxl.enabled`
  - : Auf `true` setzen, um die Funktion zu aktivieren.

### SameSite=Lax als Standard

[`SameSite`-Cookies](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) haben den Standardwert `Lax`.
Mit dieser Einstellung werden Cookies nur gesendet, wenn ein Benutzer zur Origin-Website navigiert, nicht jedoch bei Cross-Site-Unteranfragen zum Laden von Bildern oder Frames auf einer Drittanbieter-Website usw.
Weitere Details finden Sie in [Firefox-Bug 1617609](https://bugzil.la/1617609).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 69                  | Nein                     |
| Developer Edition | 69                  | Nein                     |
| Beta              | 69                  | Nein                     |
| Release           | 69                  | Nein                     |

- `network.cookie.sameSite.laxByDefault`
  - : Auf `true` setzen, um die Funktion zu aktivieren.

### Platzhalter von Access-Control-Allow-Headers umfasst Authorization nicht

Der Header [`Access-Control-Allow-Headers`](/de/docs/Web/HTTP/Reference/Headers/Access-Control-Allow-Headers) ist ein Antwortheader auf eine {{Glossary("Preflight_request", "CORS-Preflight-Anfrage")}}, der angibt, welche Anforderungsheader in der endgültigen Anfrage enthalten sein dürfen.
Die Antwortdirektive kann einen Platzhalter (`*`) enthalten, der angibt, dass die endgültige Anfrage alle Header außer dem Header `Authorization` enthalten darf.

Standardmäßig schließt Firefox den Header `Authorization` in die endgültige Anfrage ein, nachdem eine Antwort mit `Access-Control-Allow-Headers: *` empfangen wurde.
Setzen Sie die Einstellung auf `false`, damit Firefox den Header `Authorization` nicht einschließt.
Weitere Details finden Sie in [Firefox-Bug 1687364](https://bugzil.la/1687364).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 115                 | Ja                       |
| Developer Edition | 115                 | Ja                       |
| Beta              | 115                 | Ja                       |
| Release           | 115                 | Ja                       |

- `network.cors_preflight.authorization_covered_by_wildcard`
  - : Auf `true` setzen, um die Funktion zu aktivieren.

## Entwicklerwerkzeuge

Die Entwicklerwerkzeuge von Mozilla entwickeln sich ständig weiter. Wir experimentieren mit neuen Ideen, fügen neue Funktionen hinzu und testen sie in den Kanälen Nightly und Developer Edition, bevor sie Beta und Release durchlaufen. Die folgenden Funktionen sind die derzeitigen experimentellen Funktionen der Entwicklerwerkzeuge.

**Keine experimentellen Funktionen in diesem Release-Zyklus.**

## Siehe auch

- [Firefox-Entwickler-Release-Notes](/de/docs/Mozilla/Firefox/Releases)
- [Firefox Nightly](https://www.firefox.com/en-US/channel/desktop/)
- [Firefox Developer Edition](https://www.firefox.com/en-US/channel/desktop/developer/)
