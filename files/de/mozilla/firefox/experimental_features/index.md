---
title: Experimentelle Funktionen in Firefox
short-title: Experimentelle Funktionen
slug: Mozilla/Firefox/Experimental_features
l10n:
  sourceCommit: f398f522d05bb8bfe739ac2417b00712b7888494
---

Auf dieser Seite werden experimentelle und teilweise implementierte Funktionen von Firefox aufgelistet, einschließlich sich entwickelnder oder vorgeschlagener Webplattform-Standards. Jeder Eintrag unten enthält Informationen über die Builds, in denen eine Funktion enthalten ist (Nightly, Beta, Developer Edition oder Release), ob sie standardmäßig aktiviert ist oder nicht, und den Namen der **Einstellung**, die Sie verwenden können, um die Funktion zu aktivieren oder zu konfigurieren. Die Beschreibung jeder Funktion enthält auch Links zu relevanten [Bugzilla-Tickets](https://bugzilla.mozilla.org), die die Funktion implementieren oder aktivieren. Diese Informationen ermöglichen es Ihnen, experimentelle Funktionen auszuprobieren und Feedback zu geben, bevor sie offiziell veröffentlicht werden.

Im Hinblick auf den Lebenszyklus erscheinen neue Funktionen normalerweise zuerst in [Nightly](https://www.firefox.com/en-US/channel/desktop/#nightly), wo sie oft standardmäßig aktiviert sind, um frühes Feedback und Tests zu erhalten. Wenn keine größeren Probleme gefunden werden, sind sie in den Vorabversionen [Beta](https://www.firefox.com/en-US/channel/desktop/#beta) und [Developer Edition](https://www.firefox.com/en-US/channel/desktop/developer/) enthalten. Schließlich werden genehmigte Funktionen im [stabilen Release](https://www.firefox.com/en-US/) veröffentlicht. Wenn eine Funktion in einer Veröffentlichung standardmäßig aktiviert wird, gilt sie nicht mehr als experimentell und wird von dieser Seite entfernt.

Um diese Funktionen zu aktivieren, geben Sie `about:config` in die Firefox-Adressleiste ein, suchen Sie nach der zugehörigen **Einstellung** und ändern Sie deren Wert, der normalerweise zwischen `true` und `false` umgeschaltet wird. Abhängig von der Funktion müssen Sie möglicherweise den Browser neu starten, damit die Änderung wirksam wird. Weitere Informationen zur Verwaltung von Einstellungen in Firefox finden Sie im [Firefox-Konfiguration Editor](https://support.mozilla.org/en-US/kb/about-config-editor-firefox)-Support-Artikel.

## HTML

### Layout für input type="search"

Das Layout für `input type="search"` wurde aktualisiert. Dies bewirkt, dass ein Suchfeld ein Löschsymbol hat, sobald jemand anfängt zu tippen, um andere Browserimplementierungen zu entsprechen. (Siehe [Firefox bug 558594](https://bugzil.la/558594) für weitere Details.)

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 81                   | Nein                     |
| Developer Edition | 81                   | Nein                     |
| Beta              | 81                   | Nein                     |
| Release           | 81                   | Nein                     |

- `layout.forms.input-type-search.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Passwortanzeige umschalten

HTML-Passworteingabefelder ([`<input type="password">`](/de/docs/Web/HTML/Reference/Elements/input/password)) enthalten ein "Augen"-Symbol, das umgeschaltet werden kann, um den Passworttext anzuzeigen oder zu verbergen ([Firefox bug 502258](https://bugzil.la/502258)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 96                   | Nein                     |
| Developer Edition | 96                   | Nein                     |
| Beta              | 96                   | Nein                     |
| Release           | 96                   | Nein                     |

- `layout.forms.reveal-password-button.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Zeitwähler in `datetime-local` und `time` Eingabeelementen

Die HTML-Elemente [`<input type="datetime-local">`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local) und [`<input type="time">`](/de/docs/Web/HTML/Reference/Elements/input/time) unterstützen einen Zeitwähler. ([Firefox bug 1726108](https://bugzil.la/1726108)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 144                  | Nein                     |
| Developer Edition | 144                  | Nein                     |
| Beta              | 144                  | Nein                     |
| Release           | 144                  | Nein                     |

- `dom.forms.datetime.timepicker`
  - : Auf `true` setzen, um zu aktivieren.

### `alpha` und `colorspace` Attribute in `color` Eingabeelementen

Das HTML-Element [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color) unterstützt die Attribute [`alpha`](/de/docs/Web/HTML/Reference/Elements/input/color#alpha) & [`colorspace`](/de/docs/Web/HTML/Reference/Elements/input/color#colorspace). ([Firefox bug 1919718](https://bugzil.la/1919718)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 149                  | Ja                       |
| Developer Edition | -                    | -                        |
| Beta              | -                    | -                        |
| Release           | -                    | -                        |

- `dom.forms.html_color_picker.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### `headingoffset` und `headingreset` Attribute

Das [globale Attribut](/docs/Web/HTML/Reference/Global_attributes) [`headingoffset`](/de/docs/Web/HTML/Reference/Global_attributes/headingoffset) erhöht die berechnete Überschriftsebene der [Überschriftselemente](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) innerhalb des Elements, auf dem es gesetzt ist, sodass eine Komponente dieselbe Überschriftenauszeichnung verwenden kann, wo immer sie auf einer Seite erscheint. Das [`headingreset`](/de/docs/Web/HTML/Reference/Global_attributes/headingreset) Attribut verhindert, dass die Offsets der übergeordneten Elemente auf die Überschriften innerhalb des Elements angewendet werden, auf dem es gesetzt ist. ([Firefox bug 1974383](https://bugzil.la/1974383)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 153                  | Nein                     |
| Developer Edition | 153                  | Nein                     |
| Beta              | 153                  | Nein                     |
| Release           | 153                  | Nein                     |

- `dom.headingoffset.enabled`
  - : Auf `true` setzen, um zu aktivieren.

## CSS

### `circle()` und `ellipse()` erlauben `farthest-corner` und `closest-corner` Schlüsselwörter

Die Schlüsselwörter `farthest-corner` und `closest-corner` können nun zur Festlegung der Radienwerte der CSS-Grundformen [`ellipse()`](/de/docs/Web/CSS/Reference/Values/basic-shape/ellipse) und [`circle()`](/de/docs/Web/CSS/Reference/Values/basic-shape/circle) verwendet werden. (Siehe [Firefox bug 2037673](https://bugzil.la/2037673) für weitere Details.)

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 153                  | Ja                       |
| Developer Edition | 153                  | Nein                     |
| Beta              | 153                  | Nein                     |
| Release           | 153                  | Nein                     |

- `layout.css.ellipse-corners.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Hex-Boxen zur Anzeige verirrter Steuerzeichen

Diese Funktion rendert Steuerzeichen (Unicode-Kategorie Cc), die nicht _tab_ (`U+0009`), _line feed_ (`U+000A`), _form feed_ (`U+000C`) oder _carriage return_ (`U+000D`) sind, als Hex-Box, wenn sie nicht erwartet werden. (Siehe [Firefox bug 1099557](https://bugzil.la/1099557) für weitere Details.)

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 43                   | Ja                       |
| Developer Edition | 43                   | Nein                     |
| Beta              | 43                   | Nein                     |
| Release           | 43                   | Nein                     |

- `layout.css.control-characters.visible`
  - : Auf `true` setzen, um zu aktivieren.

### initial-letter Eigenschaft

Die {{cssxref("initial-letter")}} CSS-Eigenschaft gehört zur Spezifikation [CSS Inline Layout](https://drafts.csswg.org/css-inline/) und ermöglicht es Ihnen, anzugeben, wie fallengelassene, hervorgehobene und versenkte Initialbuchstaben angezeigt werden. (Siehe [Firefox bug 1223880](https://bugzil.la/1223880) für weitere Details.)

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 50                   | Nein                     |
| Developer Edition | 50                   | Nein                     |
| Beta              | 50                   | Nein                     |
| Release           | 50                   | Nein                     |

- `layout.css.initial-letter.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### fit-content() Funktion

Die [`fit-content()`](/de/docs/Web/CSS/Reference/Values/fit-content_function) Funktion, wie sie auf {{cssxref("width")}} und andere Größeneigenschaften angewendet wird. Diese Funktion wird bereits gut für die Größenanpassung von CSS Grid Layout-Spuren unterstützt. (Siehe [Firefox bug 1312588](https://bugzil.la/1312588) für weitere Details.)

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 91                   | Nein                     |
| Developer Edition | 91                   | Nein                     |
| Beta              | 91                   | Nein                     |
| Release           | 91                   | Nein                     |

- `layout.css.fit-content-function.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Scroll-gesteuerte Animationen

Früher als "scroll-verknüpfte Animationen" bezeichnet, hängt eine [scroll-gesteuerte Animation](/de/docs/Web/CSS/Guides/Scroll-driven_animations) von der Scrollposition einer Bildlaufleiste anstelle von Zeit oder einer anderen Dimension ab. Die {{cssxref('scroll-timeline-name')}} und {{cssxref('scroll-timeline-axis')}} Eigenschaften (und die {{cssxref('scroll-timeline')}} Kurzschreibweise) ermöglichen es Ihnen, anzugeben, dass eine bestimmte Bildlaufleiste in einem bestimmten benannten Container als Quelle für eine scroll-gesteuerte Animation verwendet werden kann. Die Scroll-Zeitleiste kann dann mit einer [Animation](/de/docs/Web/CSS/Guides/Animations) verknüpft werden, indem die {{cssxref('animation-timeline')}} Eigenschaft auf den Namen gesetzt wird, der mit `scroll-timeline-name` definiert wurde.

Bei der Verwendung der {{cssxref('scroll-timeline')}} Kurzschreibweise müssen die Eigenschaftenwerte in der Reihenfolge {{cssxref('scroll-timeline-name')}} gefolgt von {{cssxref('scroll-timeline-axis')}} angegeben werden. Die Lang- und Kurzschreibweise sind beide hinter der Einstellung verfügbar. Alternativ können Sie die {{cssxref("animation-timeline/scroll")}} funktionale Notation mit {{cssxref('animation-timeline')}} verwenden, um anzuzeigen, dass eine Bildlaufachsen in einem übergeordneten Element für die Zeitleiste verwendet wird.

Weitere Informationen finden Sie in [Firefox bug 1807685](https://bugzil.la/1807685), [Firefox bug 1804573](https://bugzil.la/1804573), [Firefox bug 1809005](https://bugzil.la/1809005), [Firefox bug 1676791](https://bugzil.la/1676791), [Firefox bug 1754897](https://bugzil.la/1754897), [Firefox bug 1817303](https://bugzil.la/1817303) und [Firefox bug 1737918](https://bugzil.la/1737918).

Die {{cssxref('timeline-scope')}}, {{cssxref('animation-range-start')}} und {{cssxref('animation-range-end')}} Eigenschaften (und die {{cssxref('animation-range')}} Kurzschreibweise) werden noch nicht unterstützt. Weitere Informationen finden Sie in [Firefox bug 1676779](https://bugzil.la/1676779).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 136                  | Ja                       |
| Developer Edition | 110                  | Nein                     |
| Beta              | 110                  | Nein                     |
| Release           | 110                  | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### prefers-reduced-transparency Medienfeature

Das CSS {{cssxref("@media/prefers-reduced-transparency")}} Medienfeature ermöglicht Ihnen, zu erkennen, ob ein Benutzer die Einstellung aktiviert hat, um die Menge an transparenten oder durchscheinenden Schichteffekten auf seinem Gerät zu minimieren.
Siehe ([Firefox bug 1736914](https://bugzil.la/1736914)) für weitere Details.

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 113                  | Nein                     |
| Developer Edition | 113                  | Nein                     |
| Beta              | 113                  | Nein                     |
| Release           | 113                  | Nein                     |

- `layout.css.prefers-reduced-transparency.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### inverted-colors Medienfeature

Das CSS {{cssxref("@media/inverted-colors")}} Medienfeature ermöglicht es Ihnen, festzustellen, ob ein Benutzeragent oder das zugrunde liegende Betriebssystem Farben invertiert.
Siehe ([Firefox bug 1794628](https://bugzil.la/1794628)) für weitere Details.

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 114                  | Nein                     |
| Developer Edition | 114                  | Nein                     |
| Beta              | 114                  | Nein                     |
| Release           | 114                  | Nein                     |

- `layout.css.inverted-colors.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Benannte Ansichtsfortschrittszeitleisten-Eigenschaft

Die CSS-Eigenschaft {{cssxref("view-timeline-name")}} ermöglicht es Ihnen, einem bestimmten Element einen Namen zu geben, der angibt, dass sein übergeordnetes Scrolley-Element die Quelle einer Ansichtsfortschrittszeitleiste ist. Der Name kann dann der `animation-timeline` zugewiesen werden, die das zugehörige Element animiert, wenn es durch den sichtbaren Bereich seines übergeordneten Scrolley-Elements fährt.
Siehe ([Firefox bug 1737920](https://bugzil.la/1737920)) für weitere Details.

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 136                  | Ja                       |
| Developer Edition | 114                  | Nein                     |
| Beta              | 114                  | Nein                     |
| Release           | 114                  | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Anonyme Ansichtsfortschrittszeitleistenfunktion

Die CSS-Funktion {{cssxref("animation-timeline/view")}} ermöglicht es Ihnen, anzugeben, dass die `animation-timeline` für ein Element eine Ansichtsfortschrittszeitleiste ist, die das Element animiert, wenn es durch den sichtbaren Bereich seines übergeordneten Scrolley-Elements fährt. Die Funktion definiert die Achse des Elternelements, die die Zeitleiste liefert, sowie den Einsatz im sichtbaren Bereich, an dem die Animation startet und beginnt.
Siehe ([Firefox bug 1808410](https://bugzil.la/1808410)) für weitere Details.

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 136                  | Ja                       |
| Developer Edition | 114                  | Nein                     |
| Beta              | 114                  | Nein                     |
| Release           | 114                  | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Anbieterpräfix `transform` Eigenschaften

Die mit `-moz-` vorangestellten [CSS transform](/de/docs/Web/CSS/Guides/Transforms) Eigenschaften können deaktiviert werden, indem die Einstellung `layout.css.prefixes.transforms` auf `false` gesetzt wird. Dies soll deaktiviert werden, sobald die Standard-CSS-Zoom-Eigenschaften gut unterstützt sind. ([Firefox bug 1886134](https://bugzil.la/1886134), [Firefox bug 1855763](https://bugzil.la/1855763)).

Konkret deaktiviert diese Einstellung die folgenden vorangestellten Eigenschaften:

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

### Symmetrische `letter-spacing`

Die CSS {{cssxref("letter-spacing")}} Eigenschaft teilt nun den angegebenen Buchstabenabstand gleichmäßig auf beiden Seiten jedes Zeichens. Dies unterscheidet sich von dem aktuellen Verhalten, bei dem in erster Linie auf einer Seite Abstand hinzugefügt wird. Dieser Ansatz kann den Textabstand verbessern, insbesondere in gemischt-direktionalem Text.
([Firefox bug 1891446](https://bugzil.la/1891446)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 128                  | Ja                       |
| Developer Edition | 128                  | Ja                       |
| Beta              | 127                  | Nein                     |
| Release           | 127                  | Nein                     |

- `layout.css.letter-spacing.model`
  - : Auf `true` setzen, um zu aktivieren.

### Erlaube Pseudoelemente nach Element-gestützten Pseudoelementen

Die Arbeit hat begonnen, um [Pseudoelemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) wie {{cssxref("::first-letter")}} und {{cssxref("::before")}} nach [element-gestützten Pseudoelementen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements#element-backed_pseudo-elements) wie {{cssxref("::details-content")}} und {{cssxref("::file-selector-button")}} anzuhängen.

Dies erlaubt es Benutzern, beispielsweise den ersten Buchstaben des {{htmlElement("details")}} Elements zu stylen, indem sie den CSS-Selektor `::details-content::first-letter` verwenden, oder Inhalte vor einem {{HTMLElement("input") }} von [`type="file"`](/de/docs/Web/HTML/Reference/Elements/input/file) hinzufügen, indem sie den CSS-Selektor `::file-selector-button::before` verwenden.

Derzeit kann nur die Unterstützung für `::details-content::first-letter` mit `@supports(::details-content::first-letter)` geparst werden. Das Pseudoelement `::file-selector-button` ist noch nicht als elementgestütztes Pseudoelement markiert, sodass es keine Möglichkeit gibt, dies zu testen. ([Firefox bug 1953557](https://bugzil.la/1953557), [Firefox bug 1941406](https://bugzil.la/1941406)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 138                  | Nein                     |
| Developer Edition | 138                  | Nein                     |
| Beta              | 138                  | Nein                     |
| Release           | 138                  | Nein                     |

### `:heading` und `:heading()` Pseudoklassen

Die {{cssxref(":heading")}} Pseudoklasse ermöglicht es Ihnen, alle [Überschriftselemente](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) (`<h1>`-`<h6>`) auf einmal zu stylen, anstatt sie individuell anzusprechen. Die funktionsbasierte Pseudoklasse {{cssxref(":heading()")}} ermöglicht es Ihnen, Überschriftselemente zu stylen, die einer durch Kommas getrennten Liste von Ganzzahlen entsprechen, die den Überschriftsebenen entsprechen. ([Firefox bug 1974386](https://bugzil.la/1974386) & [Firefox bug 1984310](https://bugzil.la/1984310)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 142                  | Nein                     |
| Developer Edition | 142                  | Nein                     |
| Beta              | 142                  | Nein                     |
| Release           | 142                  | Nein                     |

- `layout.css.heading-selector.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### `@custom-media` Regel

Die {{cssxref("@custom-media")}} CSS-Regel definiert Aliase für lange oder komplexe Medienanfragen. Anstatt dieselbe hartecodierte `<media-query-list>` in mehreren `@media` Regeln zu wiederholen, kann sie einmal in einer `@custom-media` Regel definiert und im gesamten Stylesheet nach Bedarf referenziert werden. ([Firefox bug 1744292](https://bugzil.la/1744292)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 148                  | Nein                     |
| Developer Edition | 148                  | Nein                     |
| Beta              | 148                  | Nein                     |
| Release           | 148                  | Nein                     |

- `layout.css.custom-media.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### `<attr-type>` Werte in der `attr()` CSS-Funktion

Die {{cssxref("attr")}} CSS-Funktion unterstützt nun [`<attr-type>`](/de/docs/Web/CSS/Reference/Values/attr#attr-type) Werte. Dies ermöglicht es Ihnen, anzugeben, wie ein Attributwert in einen CSS-Wert geparst wird, und diese Werte direkt von [`data-*`](/de/docs/Web/HTML/How_to/Use_data_attributes) zu übernehmen. ([Firefox bug 1986631](https://bugzil.la/1986631), [Firefox bug 1998245](https://bugzil.la/1998245))

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 152                  | Ja                       |
| Developer Edition | 149                  | Nein                     |
| Beta              | 149                  | Nein                     |
| Release           | 149                  | Nein                     |

- `layout.css.attr.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### `base-select` Wert für `appearance` CSS-Eigenschaft

Der [`base-select`](/de/docs/Web/CSS/Reference/Properties/appearance#base-select) Wert für die {{cssxref("appearance")}} CSS-Eigenschaft, die nur für das {{htmlelement("select")}} Element und das {{cssxref("::picker()", "::picker(select)")}} Pseudoelement relevant ist, ermöglicht es Ihnen, sie vollständig zu stylen. Derzeit wird nur das Styling des `<select>` Elements unterstützt. Das Styling des `::picker(select)` Pseudoelements wird in zukünftigen Versionen hinzugefügt. Diese Funktion ist Teil der [anpassbaren Auswahlelemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) Arbeit. Zwei Einstellungen müssen aktiviert werden, um es zu verwenden. ([Firefox bug 1974787](https://bugzil.la/1974787)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 149                  | Nein                     |
| Developer Edition | 149                  | Nein                     |
| Beta              | 149                  | Nein                     |
| Release           | 149                  | Nein                     |

- `dom.select.customizable_select.enabled`
  - : Auf `true` setzen, um zu aktivieren.
- `layout.css.appearance-base.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Namensräumliche Attribute in der `attr()` CSS-Funktion

Die {{cssxref("attr")}} CSS-Funktion akzeptiert jetzt [namensräumliche Attribute](/de/docs/Web/CSS/Reference/Values/attr#namespaces). Dies ermöglicht es Ihnen, Attribute von Elementen von [XML](/de/docs/Web/XML)-basierten Sprachen wie [SVG](/de/docs/Web/SVG) zu übernehmen und sie entsprechend zu stylen. ([Firefox bug 2014060](https://bugzil.la/2014060).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 150                  | Nein                     |
| Developer Edition | 150                  | Nein                     |
| Beta              | 150                  | Nein                     |
| Release           | 150                  | Nein                     |

- `layout.css.attr.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Absolut positionierte Elemente in mehrspaltigen Containern und beim Drucken

Absolut positionierte Elemente in [mehrspaltigen Containern](/de/docs/Web/CSS/Guides/Multicol_layout) und beim Drucken sind nun korrekt positioniert und fragmentiert. Dies verbessert die Interoperabilität mit anderen Browsern und verhindert Layout-Probleme wie sich überschneidenden Text oder Inhaltsverlust. ([Firefox bug 2018797](https://bugzil.la/2018797)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 150                  | Ja                       |
| Developer Edition | 150                  | Nein                     |
| Beta              | 150                  | Nein                     |
| Release           | 150                  | Nein                     |

- `layout.abspos.fragmentainer-aware-positioning.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### `@container style()` Bereichssyntax-Abfragen

Die [`@container`](/de/docs/Web/CSS/Reference/At-rules/@container) CSS-Regel [style()]-Abfragen unterstützen jetzt die _Bereichssyntax_. Dies ermöglicht es Ihnen, zu überprüfen, ob ein Container eine gültige CSS-Custom-Eigenschaft hat und ihren Wert mit Vergleichsoperatoren wie `>`, `<`, `>=` und `<=` zu vergleichen und entsprechend Stile auf seine Kinder anzuwenden. ([Firefox bug 2024601](https://bugzil.la/2024601)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 151                  | Nein                     |
| Developer Edition | 151                  | Nein                     |
| Beta              | 151                  | Nein                     |
| Release           | 151                  | Nein                     |

- `layout.css.attr.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### `<timeline-range-name>` Werte

Die CSS-Eigenschaften {{cssxref("animation-range-start")}}, {{cssxref("animation-range-end")}} und die {{cssxref("animation-range")}} Kurzschreibweise unterstützen nun [`<timeline-range-name>`](/de/docs/Web/CSS/Reference/Values/timeline-range-name) Werte. Diese [`<timeline-range-name>`](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names#timeline_range_names) Werte ermöglichen es Ihnen, genau anzugeben, welches Segment eine scroll-gesteuerte Animation innerhalb stattfinden wird. ([Firefox bug 1804775](https://bugzil.la/1804775)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 151                  | Ja                       |
| Developer Edition | 151                  | Nein                     |
| Beta              | 151                  | Nein                     |
| Release           | 151                  | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### `<timeline-range-name>` Werte in `@keyframes` Selektoren

Die {{cssxref("@keyframes")}} Regel unterstützt nun [`<timeline-range-name>`](/de/docs/Web/CSS/Reference/Values/timeline-range-name) Werte. Diese [Werte](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names#timeline_range_names) ermöglichen es Ihnen, das Segment anzugeben, innerhalb dessen eine scroll-gesteuerte Animation stattfindet. ([Firefox bug 1824875](https://bugzil.la/1824875)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 152                  | Ja                       |
| Developer Edition | 152                  | Nein                     |
| Beta              | 152                  | Nein                     |
| Release           | 152                  | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Aktualisierung von Attributen externer Ressourcen

Die CSS-Eigenschaft {{cssxref("link-parameters")}} und die CSS-Funktion {{cssxref("param")}} werden jetzt unterstützt. Dies ermöglicht es dem Benutzer, Attribute externer Ressourcen, wie SVGs, die ihre Attribute mit der CSS-Funktion {{cssxref("env")}} gesetzt haben, zu aktualisieren. Dies bedeutet, dass eine einzige externe Ressource verwendet werden kann, anstatt mehrere Variationen zu erstellen, die nur unterschiedliche Farben oder andere Werte aufweisen. ([Firefox bug 2046153](https://bugzil.la/2046153)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 154                  | Ja                       |
| Developer Edition | 153                  | Nein                     |
| Beta              | 153                  | Nein                     |
| Release           | 153                  | Nein                     |

- `layout.css.link-parameters.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Inhalt mit `line-clamp` abschneiden

Die {{cssxref("line-clamp")}} CSS-Eigenschaft funktioniert nun ohne das `-webkit-` Anbieterpräfix, obwohl sie in diesem Stadium die Werte `no-ellipsis` und `<string>` nicht unterstützt. ([Firefox bug 2042986](https://bugzil.la/2042986)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 154                  | Nein                     |
| Developer Edition | 154                  | Nein                     |
| Beta              | 154                  | Nein                     |
| Release           | 154                  | Nein                     |

- `layout.css.line-clamp.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Prozentwerte für `text-decoration-inset`

Die {{cssxref("text-decoration-inset")}} CSS-Eigenschaft unterstützt nun Prozentsätze als Werte. Der Prozentwert gibt die Größe des Einsatzes als Prozentanteil der {{cssxref("font-size")}} an. ([Firefox bug 2044602](https://bugzil.la/2044602)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 154                  | Nein                     |
| Developer Edition | 154                  | Nein                     |
| Beta              | 154                  | Nein                     |
| Release           | 154                  | Nein                     |

- `layout.css.text-decoration-inset-percentage.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Berechnung eines Wertes basierend auf `progress()`

Die {{cssxref("progress")}} CSS-Funktion wird nun unterstützt. Dies ermöglicht es dem Benutzer, eine {{cssxref("number")}} basierend auf einem Wert (oder Fortschritt) zwischen einem Mindest- und Höchstwert zu berechnen. ([Firefox bug 2047015](https://bugzil.la/2047015)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 155                  | Ja                       |
| Developer Edition | 154                  | Nein                     |
| Beta              | 154                  | Nein                     |
| Release           | 154                  | Nein                     |

- `layout.css.progress-function.enabled`
  - : Auf `true` setzen, um zu aktivieren.

## SVG

**Keine experimentellen Funktionen in diesem Veröffentlichungszyklus.**

## MathML

### `href` auf nicht-`<a>` MathML-Elementen deaktivieren

Bei Aktivierung erstellt das [globale Attribut](/docs/Web/HTML/Reference/Global_attributes) [`href`](/de/docs/Web/MathML/Reference/Global_attributes/href) keine Hyperlink auf MathML-Elementen außer `<a>`, was Firefox mit der [MathML Core Spezifikation](https://w3c.github.io/mathml-core/#the-a-element) ausrichtet, die nur Hyperlinks auf dem `<a>` Element definiert. ([Firefox bug 2026848](https://bugzil.la/2026848)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 151                  | Ja                       |
| Developer Edition | 151                  | Nein                     |
| Beta              | 151                  | Nein                     |
| Release           | 151                  | Nein                     |

- `mathml.href_link_on_non_anchor_element.disabled`
  - : Auf `true` setzen, um zu aktivieren.

## JavaScript

### TC39 Intl.Locale info proposal

Der [TC39 Intl.Locale info proposal](https://github.com/tc39/proposal-intl-locale-info) wird nun unterstützt. Dies umfasst alle Instanzmethoden auf `Intl.Locale`, die mit "get" – {{jsxref("Intl/Locale/getCalendars", "Intl.Locale.prototype.getCalendars()")}}, {{jsxref("Intl/Locale/getCollations", "Intl.Locale.prototype.getCollations()")}}, {{jsxref("Intl/Locale/getHourCycles", "Intl.Locale.prototype.getHourCycles()")}}, {{jsxref("Intl/Locale/getNumberingSystems", "Intl.Locale.prototype.getNumberingSystems()")}}, {{jsxref("Intl/Locale/getTextInfo", "Intl.Locale.prototype.getTextInfo()")}}, {{jsxref("Intl/Locale/getTimeZones", "Intl.Locale.prototype.getTimeZones()")}}, {{jsxref("Intl/Locale/getWeekInfo", "Intl.Locale.prototype.getWeekInfo()")}} beginnen. ([Firefox bug 1693576](https://bugzil.la/1693576)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 152                  | Nein                     |
| Developer Edition | —                    | —                        |
| Beta              | —                    | —                        |
| Release           | —                    | —                        |

- `javascript.options.experimental.intl_locale_info`
  - : Setzen Sie auf `true`, um es in Nightly zu aktivieren.

### Mehrere Importmaps

Unterstützung für [mehrere Importmaps](/de/docs/Web/HTML/Reference/Elements/script/type/importmap#merging_multiple_import_maps).
Diese geben Entwicklern mehr Flexibilität beim Strukturieren und Laden von JavaScript-Modulen, da sie ihre Modulzuordnungen nicht mehr im Voraus kennen und sie in einem einzigen Importmap laden müssen.
([Firefox bug 1916277](https://bugzil.la/1916277)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 150                  | Nein                     |
| Developer Edition | 150                  | Nein                     |
| Beta              | 150                  | Nein                     |
| Release           | 150                  | Nein                     |

- `dom.multiple_import_maps.enabled`
  - : Auf `true` setzen, um zu aktivieren.

## APIs

### Absturzberichte

Absturzberichte können jetzt über die [Reporting API](/de/docs/Web/API/Reporting_API) an den `default` Endpunkt gesendet werden. Beachten Sie, dass Firefox das Bereitstellen von [`CrashReportContext`](/de/docs/Web/API/CrashReportContext) im Berichtsinhalt nicht unterstützt. ([Firefox bug 2036160](https://bugzil.la/2036160)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 152                  | Ja                       |
| Developer Edition | 152                  | Nein                     |
| Beta              | 152                  | Nein                     |
| Release           | 152                  | Nein                     |

- `dom.reporting.crash.enabled`
  - : Auf `true` setzen, um zu aktivieren (standardmäßig in Nightly aktiviert).

### Gescopte benutzerdefinierte Elementegistrierungen

Unterstützung für [gescopte benutzerdefinierte Elementegistrierungen](/de/docs/Web/API/Web_components/Using_custom_elements#scoped_custom_element_registries) wird implementiert. Gescopte Registrierungen ermöglichen es einem Shadow-Tree, ein unabhängiges [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry) zu erstellen, dessen Definitionen nur für diesen speziellen DOM-Teilbaum gelten. Dies kann verwendet werden, um Kollisionen zu vermeiden, bei denen mehrere Webkomponenten Elemente mit dem gleichen Namen deklarieren.

Die Implementierung umfasst:

- `customElementRegistry` Eigenschaft auf [`Document`](/de/docs/Web/API/Document), [`Element`](/de/docs/Web/API/Element) und [`ShadowRoot`](/de/docs/Web/API/ShadowRoot). ([Firefox bug 2018900](https://bugzil.la/2018900)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 150                  | Nein                     |
| Developer Edition | 150                  | Nein                     |
| Beta              | 150                  | Nein                     |
| Release           | 150                  | Nein                     |

- `dom.scoped-custom-element-registries.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### CSS Type Object Model Level 1

Das [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) ist in Nightly implementiert. Dies vereinfacht die Manipulation von CSS-Eigenschaften, indem CSS-Werte als getypte JavaScript-Objekte und nicht als Zeichenfolgen bereitgestellt werden. ([Firefox bug 1278697](https://bugzil.la/1278697)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 154                  | Ja                       |
| Developer Edition | 149                  | Nein                     |
| Beta              | 149                  | Nein                     |
| Release           | 149                  | Nein                     |

- `layout.css.typed-om.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Grafik: Canvas, WebGL und WebGPU

#### WebGL: Entwurfserweiterungen

Bei aktivierter Einstellung werden alle WebGL-Erweiterungen, die sich derzeit im "Entwurf"-Status befinden und getestet werden, zur Verwendung aktiviert. Derzeit werden von Firefox keine WebGL-Erweiterungen getestet.

#### WebGPU API

Die [WebGPU API](/de/docs/Web/API/WebGPU_API) bietet Low-Level-Unterstützung für die Durchführung von Berechnungen und Grafikrendering mit der [Graphics Processing Unit](https://en.wikipedia.org/wiki/Graphics_Processing_Unit) (GPU) des Benutzergeräts oder -computers. Ab Version 142 ist dies unter Windows in allen Kontexten außer Service-Workern aktiviert. Ab Version 147 ist dies auf macOS auf Apple Silicon in allen Browserkontexten außer Service-Workern aktiviert. Für andere Plattformen wie Linux und macOS auf Intel Silicon ist es in Nightly aktiviert. Siehe [Firefox bug 1602129](https://bugzil.la/1602129) für unseren Fortschritt bei dieser API.

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert?                                                   |
| ----------------- | -------------------- | -------------------------------------------------------------------------- |
| Nightly           | 141                  | Ja                                                                         |
| Developer Edition | 141                  | Nein (Ja unter Windows und macOS auf Apple Silicon, außer Service-Workern) |
| Beta              | 141                  | Nein (Ja unter Windows und macOS auf Apple Silicon, außer Service-Workern) |
| Release           | 141                  | Nein (Ja unter Windows und macOS auf Apple Silicon, außer Service-Workern) |

- `dom.webgpu.enabled`
  - : Auf `true` setzen, um zu aktivieren (in Nightly und unter Windows in allen Releases aktiviert)
- `dom.webgpu.service-workers.enabled`
  - : Auf `true` setzen, um zu aktivieren (in Nightly aktiviert)

### WebRTC und Medien

Die folgenden experimentellen Funktionen umfassen diejenigen, die in Media-APIs wie der [WebRTC API](/de/docs/Web/API/WebRTC_API), der [Web Audio API](/de/docs/Web/API/Web_Audio_API), der [Media Source Extensions API](/de/docs/Web/API/Media_Source_Extensions_API), der [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API) und der [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) zu finden sind.

#### HTMLMediaElement Eigenschaften: audioTracks und videoTracks

Aktivierung dieser Funktion fügt die Eigenschaften [`HTMLMediaElement.audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks) und [`HTMLMediaElement.videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks) zu allen HTML-Media-Elementen hinzu. Da Firefox derzeit jedoch keine mehrere Audio- und Videospuren unterstützt, funktionieren die häufigsten Anwendungsfälle für diese Eigenschaften nicht, daher sind sie beide standardmäßig deaktiviert. Siehe [Firefox bug 1057233](https://bugzil.la/1057233) für weitere Details.

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 33                   | Nein                     |
| Developer Edition | 33                   | Nein                     |
| Beta              | 33                   | Nein                     |
| Release           | 33                   | Nein                     |

- `media.track.enabled`
  - : Auf `true` setzen, um zu aktivieren.

#### Asynchrones Hinzufügen und Entfernen von SourceBuffer

Dies fügt die auf Versprechen basierenden Methoden [`appendBufferAsync()`](/de/docs/Web/API/SourceBuffer/appendBufferAsync) und [`removeAsync()`](/de/docs/Web/API/SourceBuffer/removeAsync) zum Hinzufügen und Entfernen von Mediensource-Buffer zur [`SourceBuffer`](/de/docs/Web/API/SourceBuffer) Schnittstelle hinzu. Siehe [Firefox bug 1280613](https://bugzil.la/1280613) und [Firefox bug 778617](https://bugzil.la/778617) für weitere Informationen.

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 62                   | Nein                     |
| Developer Edition | 62                   | Nein                     |
| Beta              | 62                   | Nein                     |
| Release           | 62                   | Nein                     |

- `media.mediasource.experimental.enabled`
  - : Auf `true` setzen, um zu aktivieren.

#### AVIF-Compliance-Strenge

Die Einstellung `image.avif.compliance_strictness` kann verwendet werden, um die _Strenge_ beim Verarbeiten von [AVIF](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) Bildern zu steuern. Dies ermöglicht es Firefox-Benutzern, Bilder anzuzeigen, die auf einigen anderen Browsern gerendert werden, selbst wenn sie nicht streng konform sind.

| Release-Kanal     | Hinzugefügte Version | Standardwert |
| ----------------- | -------------------- | ------------ |
| Nightly           | 92                   | 1            |
| Developer Edition | 92                   | 1            |
| Beta              | 92                   | 1            |
| Release           | 92                   | 1            |

- `image.avif.compliance_strictness`
  - : Numerischer Wert, der einen _Strenge_-Grad angibt. Erlaubte Werte sind:
    - `0`: Nachsichtig. Akzeptiere Bilder mit Verstößen gegen Spezifikationen in Empfehlungen ("sollte"-Sprache) und Anforderungen ("muss"-Sprache), sofern sie sicher oder unmissverständlich interpretiert werden können.
    - `1` **(Standard)**: Gemischt. Lehne Verstöße gegen Anforderungen ("muss") ab, aber erlaube Verstöße gegen Empfehlungen ("sollte").
    - `2`: Streng. Lehne jegliche Verstöße gegen spezifizierte Anforderungen oder Empfehlungen ab.

#### JPEG XL Unterstützung

Firefox unterstützt das [JPEG XL](https://jpeg.org/jpegxl/) Bildformat, ein moderner Nachfolger von JPEG, das verbesserte Kompression und Bildqualität sowie neue Funktionen wie Transparenz, Animation und HDR-Unterstützung bietet. Siehe [Firefox bug 1539075](https://bugzil.la/1539075) und [Firefox bug 2016688](https://bugzil.la/2016688) für weitere Details.

In Firefox 149 wurde der vorherige C++ [JPEG XL](https://jpeg.org/jpegxl/) Bilddecoder durch eine neue in Rust-basierte Implementierung ersetzt, die die `jxl-rs` Bibliothek verwendet ([Firefox bug 1986393](https://bugzil.la/1986393)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 153                  | Ja                       |
| Developer Edition | 152                  | Nein                     |
| Beta              | 152                  | Nein                     |
| Release           | 152                  | Nein                     |

- `image.jxl.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### WebVR API (Deaktiviert)

Die veraltete [WebVR API](/de/docs/Web/API/WebVR_API) befindet sich auf dem Weg zur Entfernung. Sie ist standardmäßig in allen Builds deaktiviert [Firefox bug 1750902](https://bugzil.la/1750902).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 98                   | Nein                     |
| Developer Edition | 98                   | Nein                     |
| Beta              | 98                   | Nein                     |
| Release           | 98                   | Nein                     |

- `dom.vr.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### GeometryUtils Methoden: convertPointFromNode(), convertRectFromNode(), und convertQuadFromNode()

Die `GeometryUtils` Methoden `convertPointFromNode()`, `convertRectFromNode()`, und `convertQuadFromNode()` ordnen den angegebenen Punkt, das Rechteck oder das Viereck von dem [`Node`](/de/docs/Web/API/Node), auf dem sie aufgerufen werden, einem anderen Knoten zu. (Siehe [Firefox bug 918189](https://bugzil.la/918189) für weitere Details.)

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 31                   | Nein                     |
| Developer Edition | 31                   | Nein                     |
| Beta              | 31                   | Nein                     |
| Release           | 31                   | Nein                     |

- `layout.css.convertFromNode.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### GeometryUtils Methode: getBoxQuads()

Die `GeometryUtils` Methode `getBoxQuads()` gibt die CSS-Boxen für einen [`Node`](/de/docs/Web/API/Node) relativ zu einem anderen Knoten oder Fenster zurück. (Siehe [Firefox bug 917755](https://bugzil.la/917755) für weitere Details.)

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 31                   | Nein                     |
| Developer Edition | 31                   | Nein                     |
| Beta              | 31                   | Nein                     |
| Release           | 31                   | Nein                     |

- `layout.css.getBoxQuads.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Payment Request API

#### Primäre Zahlungsabwicklung

Die [Payment Request API](/de/docs/Web/API/Payment_Request_API) bietet Unterstützung für die Bearbeitung von webbasierten Zahlungen innerhalb von Webinhalten oder Apps. Aufgrund eines Bugs, der bei der Benutzerschnittstellentestung auftrat, haben wir beschlossen, den Start dieser API zu verschieben, während Diskussionen über mögliche Änderungen an der API geführt werden. Die Arbeit daran läuft. (Siehe [Firefox bug 1318984](https://bugzil.la/1318984) für weitere Details.)

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 55                   | Nein                     |
| Developer Edition | 55                   | Nein                     |
| Beta              | 55                   | Nein                     |
| Release           | 55                   | Nein                     |

- `dom.payments.request.enabled`
  - : Auf `true` setzen, um zu aktivieren.
- `dom.payments.request.supportedRegions`
  - : Ländercodes als durch Kommas getrennte Whitelist von Regionen (z.B. `US,CA`).

### WebShare API

Die [Web Share API](/de/docs/Web/API/Web_Share_API) ermöglicht das Teilen von Dateien, URLs und anderen Daten von einer Website. Diese Funktion ist auf Android in allen Builds aktiviert, aber auf dem Desktop hinter einer Einstellung (sofern nicht anders angegeben).

| Release-Kanal     | Änderte Version | Standardmäßig aktiviert?                    |
| ----------------- | --------------- | ------------------------------------------- |
| Nightly           | 71              | Nein (Standard). Ja (Windows ab Version 92) |
| Developer Edition | 71              | Nein                                        |
| Beta              | 71              | Nein                                        |
| Release           | 71              | Nein (Desktop). Ja (Android).               |

- `dom.webshare.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Benachrichtigungen API

Benachrichtigungen haben die [`requireInteraction`](/de/docs/Web/API/Notification/requireInteraction) Eigenschaft standardmäßig auf Windows-Systemen und in der Nightly-Version auf true gesetzt ([Firefox bug 1794475](https://bugzil.la/1794475)).

| Release-Kanal     | Änderte Version | Standardmäßig aktiviert? |
| ----------------- | --------------- | ------------------------ |
| Nightly           | 117             | Ja                       |
| Developer Edition | 117             | Nein                     |
| Beta              | 117             | Nein                     |
| Release           | 117             | Nur Windows              |

- `dom.webnotifications.requireinteraction.enabled`
  - : Auf `true` setzen, um zu aktivieren.

## Sicherheit und Datenschutz

### Unsichere Seitenmarkierung

Die beiden `security.insecure_connection_text_*` Einstellungen fügen ein "Nicht sicher" Textlabel in der Adressleiste neben dem traditionellen Schlosssymbol hinzu, wenn eine Seite unsicher geladen wird (d.h. mit {{Glossary("HTTP", "HTTP")}} anstelle von {{Glossary("HTTPS", "HTTPS")}}). Die `browser.urlbar.trimHttps` Einstellung kürzt das `https:` Präfix von Adressleisten-URLs. Siehe [Firefox Bug 1853418](https://bugzil.la/1853418) für weitere Details.

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 121                  | Ja                       |
| Developer Edition | 60                   | Nein                     |
| Beta              | 60                   | Nein                     |
| Release           | 60                   | Nein                     |

- `security.insecure_connection_text.enabled`
  - : Auf `true` setzen, um das Textlabel für den normalen Browsermodus zu aktivieren.
- `security.insecure_connection_text.pbmode.enabled`
  - : Auf `true` setzen, um das Textlabel für den privaten Browsermodus zu aktivieren.
- `browser.urlbar.trimHttps`
  - : Auf `true` setzen, um das `https:` Präfix aus den URLs der Adressleiste zu trimmen.

### Einschränkung von Inhalten für Erwachsene mit `<meta name="rating">`

Das nicht-standardisierte `<meta name="rating">` Element kann auf einer Webseite eingefügt werden, um den Inhalt der Seite als eingeschränkt/erwachsenenorientiert zu kennzeichnen. Zum Zeitpunkt des Schreibens gibt es zwei mögliche `content` Werte, `adult` ([definiert von Google](https://developers.google.com/search/docs/specialty/explicit/guidelines#add-metadata)) und `RTA-5042-1996-1400-1577-RTA` ([definiert von ASACP](https://www.rtalabel.org/?content=howto#top)), die die gleiche Wirkung haben (weitere Optionen können in Zukunft hinzugefügt werden).

Die folgenden `<meta>` Elemente sind gleichwertig:

```html
<meta name="rating" content="adult" />
<meta name="rating" content="RTA-5042-1996-1400-1577-RTA" />
```

Browser, die dieses Element erkennen, können dann Maßnahmen ergreifen, um Benutzer daran zu hindern, den Inhalt anzuzeigen. Die Implementierung von Firefox ersetzt die Seite durch den Inhalt auf `about:restricted`, welcher dem Benutzer erklärt, dass er versucht, eingeschränkten Inhalt anzuzeigen, erklärt, warum er ihn nicht anzeigen kann, und ihm eine Schaltfläche zum Zurückkehren bietet.

Siehe [Firefox Bug 1991135](https://bugzil.la/1991135) für weitere Details.

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 146                  | Nein                     |
| Developer Edition | 146                  | Nein                     |
| Beta              | 146                  | Nein                     |
| Release           | 146                  | Nein                     |

- `security.restrict_to_adults.always`
  - : Setzen Sie auf `true`, um den Zugriff auf Webseiten zu beschränken, die sich selbst als erwachsenenorientiert identifizieren, indem sie ein `<meta name="rating">` Element enthalten.
- `security.restrict_to_adults.respect_platform`
  - : Setzen Sie auf `true`, um den Zugriff auf Webseiten zu beschränken, die sich selbst als erwachsenenorientiert identifizieren, nur wenn geeignete elterliche Kontrollen auf dem zugrunde liegenden Betriebssystem gesetzt sind (zum Beispiel sind die _Inhalts- & Privatsphären-_ Einstellungen von macOS gesetzt, um explizite Webinhalte zu beschränken).

### Berechtigungspolitik / Feature-Policy

[Berechtigungspolitik](/de/docs/Web/HTTP/Guides/Permissions_Policy) erlaubt es Webentwicklern, selektiv bestimmte Funktionen und APIs im Browser zu aktivieren, zu deaktivieren und zu modifizieren. Es ist ähnlich wie CSP, aber es kontrolliert Funktionen statt Sicherheitsverhalten. In Firefox wird dies als **Feature-Policy** implementiert, der Name, der in einer früheren Version der Spezifikation verwendet wurde.

Beachten Sie, dass unterstützte Policen über das [`allow`](/de/docs/Web/HTML/Reference/Elements/iframe#allow) Attribut auf `<iframe>` Elementen gesetzt werden können, selbst wenn die Benutzereinstellung nicht gesetzt ist.

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 65                   | Nein                     |
| Developer Edition | 65                   | Nein                     |
| Beta              | 65                   | Nein                     |
| Release           | 65                   | Nein                     |

- `dom.security.featurePolicy.header.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Datenschutzwahrende Zuordnungs-API (PPA)

Die [PPA API](https://support.mozilla.org/en-US/kb/privacy-preserving-attribution) bietet eine Alternative zum Benutzertracking für die Anzeigeattribution, indem sie das neue `navigator.privateAttribution` Objekt mit den Methoden `saveImpression()` und `measureConversion()` verwendet. Lesen Sie mehr über PPA im [ursprünglichen Erläuterungsdokument](https://github.com/mozilla/explainers/tree/main/archive/ppa-experiment) und der [vorgeschlagenen Spezifikation](https://w3c.github.io/ppa/). Dieses Experiment kann für Websites über [Herkunftsproben](https://wiki.mozilla.org/Origin_Trials) oder im Browser aktiviert werden, indem die Einstellung auf `1` gesetzt wird. ([Firefox bug 1900929](https://bugzil.la/1900929)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 128                  | Nein                     |
| Developer Edition | 128                  | Nein                     |
| Beta              | 128                  | Nein                     |
| Release           | 128                  | Nein                     |

- `dom.origin-trials.private-attribution.state`
  - : Setzen Sie auf `true`, um zu aktivieren.

## HTTP

### Integritätspolitik für Stylesheet-Ressourcen

Die {{httpheader("Integrity-Policy")}} und {{httpheader("Integrity-Policy-Report-Only")}} HTTP-Header werden jetzt für Stylesheet-Ressourcen unterstützt. Diese ermöglichen es Websites, entweder [Unversehrtheitsgarantien für Teilressourcen](/de/docs/Web/Security/Defenses/Subresource_Integrity) für Styles durchzusetzen oder nur Verstöße gegen die Richtlinie zu melden. Beachten Sie, dass Firefox Berichtsendpunkte ignoriert und Verstöße in der Entwicklerkonsole protokolliert. Bei Verwendung von `Integrity-Policy` blockiert der Browser das Laden von Stilvorlagen, die in einem {{HTMLElement("link")}}-Element mit [`rel="stylesheet"`](/de/docs/Web/HTML/Reference/Attributes/rel#stylesheet) referenziert sind, wenn sie entweder das [`integrity`](/de/docs/Web/HTML/Reference/Elements/script#integrity) Attribut fehlen oder einen Integritätsschlüssel aufweisen, der nicht mit der Ressource auf dem Server übereinstimmt.
([Firefox bug 1976656](https://bugzil.la/1976656)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 142                  | Nein                     |
| Developer Edition | 142                  | Nein                     |
| Beta              | 142                  | Nein                     |
| Release           | 142                  | Nein                     |

- `security.integrity_policy.stylesheet.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Idempotency-Key

Der {{httpheader("Idempotency-Key")}} HTTP-Anforderungsheader kann von Website-Clientcode verwendet werden, um {{HTTPMethod("POST")}} oder {{HTTPMethod("PATCH")}} Anfragen {{Glossary("idempotent", "idempotent")}} zu machen, wenn er mit einem Server, der ihn unterstützt, verwendet wird. Die Spezifikation gibt an, dass der Server dokumentieren und angeben sollte, welche Endpunkte diesen Header erfordern, das Format des Schlüssels und die erwarteten Fehlerrückmeldungen.

Firefox fügt den Header _automatisch_ mit einem einzigartigen Schlüssel für jede neue `POST` Anfrage hinzu, wenn er nicht bereits clientseitig von der Seite hinzugefügt wurde. Dies vereinfacht den clientseitigen Code, der erforderlich ist, um mit Servern zu arbeiten, die die Funktion unterstützen.

([Firefox bug 1830022](https://bugzil.la/1830022)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 135                  | Nein                     |
| Developer Edition | 135                  | Nein                     |
| Beta              | 135                  | Nein                     |
| Release           | 135                  | Nein                     |

- `network.http.idempotencyKey.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Accept-Header mit MIME-Typ image/jxl

Der HTTP [`Accept`](/de/docs/Web/HTTP/Reference/Headers/Accept) Header in [Standardanforderungen und Bildanforderungen](/de/docs/Web/HTTP/Guides/Content_negotiation/List_of_default_Accept_values) kann über eine Einstellung konfiguriert werden, um Unterstützung für den `image/jxl` MIME-Typ anzuzeigen.

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 128                  | Nein                     |
| Developer Edition | 128                  | Nein                     |
| Beta              | 128                  | Nein                     |
| Release           | 128                  | Nein                     |

- `image.jxl.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### SameSite=Lax standardmäßig

[`SameSite` Cookies](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) haben standardmäßig den Wert `Lax`. Mit dieser Einstellung werden Cookies nur gesendet, wenn ein Benutzer zur Ursprungsseite navigiert, nicht jedoch für Subanfragen auf Drittseiten zum Laden von Bildern oder Frames usw. Weitere Details finden Sie in [Firefox Bug 1617609](https://bugzil.la/1617609).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 69                   | Nein                     |
| Developer Edition | 69                   | Nein                     |
| Beta              | 69                   | Nein                     |
| Release           | 69                   | Nein                     |

- `network.cookie.sameSite.laxByDefault`
  - : Auf `true` setzen, um zu aktivieren.

### Access-Control-Allow-Headers Wildcard deckt Authorization nicht ab

Der [`Access-Control-Allow-Headers`](/de/docs/Web/HTTP/Reference/Headers/Access-Control-Allow-Headers) ist ein Antwortheader auf eine {{Glossary("Preflight_request", "CORS Preflight-Anfrage")}}, die angibt, welche Anforderungsheader in der endgültigen Anfrage enthalten sein dürfen. Die Antwortanweisung kann ein Wildcard (`*`) enthalten, was angibt, dass die endgültige Anfrage alle Header mit Ausnahme des `Authorization` Headers enthalten kann.

Standardmäßig enthält Firefox den `Authorization` Header in der endgültigen Anfrage, nachdem er eine Antwort mit `Access-Control-Allow-Headers: *` erhalten hat. Setzen Sie die Einstellung auf `false`, um sicherzustellen, dass Firefox den `Authorization` Header nicht einbezieht. Weitere Details finden Sie in [Firefox Bug 1687364](https://bugzil.la/1687364).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 115                  | Ja                       |
| Developer Edition | 115                  | Ja                       |
| Beta              | 115                  | Ja                       |
| Release           | 115                  | Ja                       |

- `network.cors_preflight.authorization_covered_by_wildcard`
  - : Auf `true` setzen, um zu aktivieren.

## Entwicklertools

Die Entwicklerwerkzeuge von Mozilla entwickeln sich ständig weiter. Wir experimentieren mit neuen Ideen, fügen neue Funktionen hinzu und testen sie in den Nightly- und Developer-Edition-Kanälen, bevor sie durch Beta- und Release-Kanäle gehen. Die folgenden Funktionen sind die aktuellen experimentellen Funktionen von Entwicklertools.

**Keine experimentellen Funktionen in diesem Veröffentlichungszyklus.**

## Siehe auch

- [Firefox Entwickler-Releasenotes](/de/docs/Mozilla/Firefox/Releases)
- [Firefox Nightly](https://www.firefox.com/en-US/channel/desktop/)
- [Firefox Developer Edition](https://www.firefox.com/en-US/channel/desktop/developer/)
