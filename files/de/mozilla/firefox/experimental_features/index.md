---
title: Experimentelle Funktionen in Firefox
short-title: Experimentelle Funktionen
slug: Mozilla/Firefox/Experimental_features
l10n:
  sourceCommit: 3a90ff6c1920bb8613b75d00514c1030e8856c11
---

Diese Seite listet experimentelle und teilweise implementierte Funktionen von Firefox auf, einschließlich sich entwickelnder oder vorgeschlagener Web-Plattform-Standards. Jeder Eintrag beinhaltet Informationen zu den Builds, in denen eine Funktion enthalten ist (Nightly, Beta, Developer Edition oder Release), ob sie standardmäßig aktiviert ist oder nicht, und den Namen der **Präferenz**, die Sie verwenden können, um die Funktion zu aktivieren oder zu konfigurieren. Die Beschreibung jeder Funktion enthält auch Links zu relevanten [Bugzilla Bugs](https://bugzilla.mozilla.org), die die Funktion implementieren oder aktivieren. Diese Informationen ermöglichen es Ihnen, experimentelle Funktionen auszuprobieren und Feedback zu geben, bevor sie offiziell veröffentlicht werden.

In Bezug auf den Lebenszyklus erscheinen neue Funktionen in der Regel zuerst in [Nightly](https://www.firefox.com/en-US/channel/desktop/#nightly), wo sie häufig standardmäßig für frühes Feedback und Tests aktiviert sind. Wenn keine größeren Probleme gefunden werden, sind sie in den Vorabversionen [Beta](https://www.firefox.com/en-US/channel/desktop/#beta) und [Developer Edition](https://www.firefox.com/en-US/channel/desktop/developer/) enthalten. Schließlich werden genehmigte Funktionen im stabilen [Release](https://www.firefox.com/en-US/) Kanal ausgeliefert. Wenn eine Funktion in einer Veröffentlichung standardmäßig aktiviert ist, wird sie nicht mehr als experimentell betrachtet und von dieser Seite entfernt.

Um diese Funktionen zu aktivieren, geben Sie `about:config` in die Firefox-Adressleiste ein, suchen Sie nach der zugehörigen **Präferenz** und ändern Sie deren Wert, der in der Regel ein Umschalter zwischen `true` und `false` ist. Abhängig von der Funktion müssen Sie möglicherweise den Browser neu starten, damit die Änderung wirksam wird. Weitere Informationen zur Verwaltung von Präferenzen in Firefox finden Sie im [Firefox-Konfiguration Editor](https://support.mozilla.org/en-US/kb/about-config-editor-firefox) Support-Artikel.

## HTML

### Layout für input type="search"

Das Layout für `input type="search"` wurde aktualisiert. Dies führt dazu, dass ein Suchfeld ein "Löschen"-Symbol hat, sobald jemand darin zu tippen beginnt, um andere Browserimplementierungen anzupassen. (Siehe [Firefox Bug 558594](https://bugzil.la/558594) für weitere Details.)

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 81                   | Nein                     |
| Developer Edition       | 81                   | Nein                     |
| Beta                    | 81                   | Nein                     |
| Release                 | 81                   | Nein                     |

- `layout.forms.input-type-search.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Anzeigen von Passwörtern umschalten

HTML Passwort-Eingabe-Elemente ([`<input type="password">`](/de/docs/Web/HTML/Reference/Elements/input/password)) beinhalten ein "Auge"-Symbol, das umgeschaltet werden kann, um den Passworttext anzuzeigen oder zu verbergen ([Firefox Bug 502258](https://bugzil.la/502258)).

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 96                   | Nein                     |
| Developer Edition       | 96                   | Nein                     |
| Beta                    | 96                   | Nein                     |
| Release                 | 96                   | Nein                     |

- `layout.forms.reveal-password-button.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Zeitfenster bei `datetime-local` und `time` Eingabeelementen

Die HTML-Elemente [`<input type="datetime-local">`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local) und [`<input type="time">`](/de/docs/Web/HTML/Reference/Elements/input/time) unterstützen ein Zeitfenster. ([Firefox Bug 1726108](https://bugzil.la/1726108)).

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 144                  | Nein                     |
| Developer Edition       | 144                  | Nein                     |
| Beta                    | 144                  | Nein                     |
| Release                 | 144                  | Nein                     |

- `dom.forms.datetime.timepicker`
  - : Auf `true` setzen, um zu aktivieren.

### `alpha` und `colorspace` Attribute bei `color` Eingabeelementen

Das HTML-Element [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color) unterstützt die Attribute [`alpha`](/de/docs/Web/HTML/Reference/Elements/input/color#alpha) & [`colorspace`](/de/docs/Web/HTML/Reference/Elements/input/color#colorspace). ([Firefox Bug 1919718](https://bugzil.la/1919718)).

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 149                  | Ja                       |
| Developer Edition       | -                    | -                        |
| Beta                    | -                    | -                        |
| Release                 | -                    | -                        |

- `dom.forms.html_color_picker.enabled`
  - : Auf `true` setzen, um zu aktivieren.

## CSS

### Hex-Boxen zur Anzeige von Steuerzeichen

Diese Funktion rendert Steuerzeichen (Unicode-Kategorie Cc) mit Ausnahme von _Tab_ (`U+0009`), _Zeilenumbruch_ (`U+000A`), _Seitenvorschub_ (`U+000C`) und _Wagenrücklauf_ (`U+000D`) als Hex-Box, wenn sie unerwartet sind. (Siehe [Firefox Bug 1099557](https://bugzil.la/1099557) für weitere Details.)

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 43                   | Ja                       |
| Developer Edition       | 43                   | Nein                     |
| Beta                    | 43                   | Nein                     |
| Release                 | 43                   | Nein                     |

- `layout.css.control-characters.visible`
  - : Auf `true` setzen, um zu aktivieren.

### Initial-Letter-Eigenschaft

Die {{cssxref("initial-letter")}} CSS-Eigenschaft ist Teil der [CSS Inline Layout](https://drafts.csswg.org/css-inline/) Spezifikation und erlaubt es Ihnen zu spezifizieren, wie eingehängte, erhobene und versunkene Initialbuchstaben dargestellt werden. (Siehe [Firefox Bug 1223880](https://bugzil.la/1223880) für weitere Details.)

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 50                   | Nein                     |
| Developer Edition       | 50                   | Nein                     |
| Beta                    | 50                   | Nein                     |
| Release                 | 50                   | Nein                     |

- `layout.css.initial-letter.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### fit-content() Funktion

Die [`fit-content()`](/de/docs/Web/CSS/Reference/Values/fit-content_function) Funktion wie sie auf {{cssxref("width")}} und andere Größenangaben angewendet wird. Diese Funktion wird bereits gut für CSS Grid Layout-Tröge unterstützt. (Siehe [Firefox Bug 1312588](https://bugzil.la/1312588) für weitere Details.)

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 91                   | Nein                     |
| Developer Edition       | 91                   | Nein                     |
| Beta                    | 91                   | Nein                     |
| Release                 | 91                   | Nein                     |

- `layout.css.fit-content-function.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Scrollgetriebene Animationen

Früher als "scroll-gekoppelte Animationen" bezeichnet, ist eine [scrollgetriebene Animation](/de/docs/Web/CSS/Guides/Scroll-driven_animations) von der Scrollposition eines Scrollbalkens anstatt von der Zeit oder einer anderen Dimension abhängig. Die {{cssxref('scroll-timeline-name')}} und {{cssxref('scroll-timeline-axis')}} Eigenschaften (und die {{cssxref('scroll-timeline')}} Kurzform-Eigenschaft) ermöglichen es Ihnen zu spezifizieren, dass ein bestimmter Scrollbalken in einem benannten Container als Quelle für eine scrollgetriebene Animation verwendet werden kann. Die Rollzeitachse kann dann mit einer [Animation](/de/docs/Web/CSS/Guides/Animations) assoziiert werden, indem die {{cssxref('animation-timeline')}} Eigenschaft auf den in `scroll-timeline-name` definierten Namenwert gesetzt wird.

Beim Verwenden der {{cssxref('scroll-timeline')}} Kurzform-Eigenschaft muss die Reihenfolge der Eigenschaftswerte {{cssxref('scroll-timeline-name')}} gefolgt von {{cssxref('scroll-timeline-axis')}} sein. Die Langform- und Kurzformeigenschaften sind beide hinter der Präferenz verfügbar. Alternativ können Sie die {{cssxref("animation-timeline/scroll")}} Funktionalnotation mit {{cssxref('animation-timeline')}} verwenden, um anzugeben, dass eine Scrollbalkenachse in einem Verzeichniselement für die Zeitachse verwendet wird.

Für weitere Informationen siehe [Firefox Bug 1807685](https://bugzil.la/1807685), [Firefox Bug 1804573](https://bugzil.la/1804573), [Firefox Bug 1809005](https://bugzil.la/1809005), [Firefox Bug 1676791](https://bugzil.la/1676791), [Firefox Bug 1754897](https://bugzil.la/1754897), [Firefox Bug 1817303](https://bugzil.la/1817303) und [Firefox Bug 1737918](https://bugzil.la/1737918).

Die {{cssxref('timeline-scope')}}, {{cssxref('animation-range-start')}} und {{cssxref('animation-range-end')}} Eigenschaften (und die {{cssxref('animation-range')}} Kurzform-Eigenschaft) werden noch nicht unterstützt. Für weitere Informationen siehe [Firefox Bug 1676779](https://bugzil.la/1676779).

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 136                  | Ja                       |
| Developer Edition       | 110                  | Nein                     |
| Beta                    | 110                  | Nein                     |
| Release                 | 110                  | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### prefers-reduced-transparency Medienfunktion

Die CSS {{cssxref("@media/prefers-reduced-transparency")}} Medienfunktion ermöglicht es zu erkennen, ob ein Benutzer die Einstellung aktiviert hat, um die Menge an transparenten oder durchscheinenden Ebeneffekten auf seinem Gerät zu minimieren. Siehe ([Firefox Bug 1736914](https://bugzil.la/1736914)) für weitere Details.

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 113                  | Nein                     |
| Developer Edition       | 113                  | Nein                     |
| Beta                    | 113                  | Nein                     |
| Release                 | 113                  | Nein                     |

- `layout.css.prefers-reduced-transparency.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### inverted-colors Medienfunktion

Die CSS {{cssxref("@media/inverted-colors")}} Medienfunktion ermöglicht es zu erkennen, ob ein Benutzeragent oder das zugrunde liegende Betriebssystem Farben invertiert. Siehe ([Firefox Bug 1794628](https://bugzil.la/1794628)) für weitere Details.

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 114                  | Nein                     |
| Developer Edition       | 114                  | Nein                     |
| Beta                    | 114                  | Nein                     |
| Release                 | 114                  | Nein                     |

- `layout.css.inverted-colors.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Eigenschaft für benannte Ansichtsfortschritts-Zeitachsen

Die CSS {{cssxref("view-timeline-name")}} Eigenschaft ermöglicht es Ihnen, einem bestimmten Element einen Namen zu geben, der angibt, dass sein übergeordnetes Scroll-Element die Quelle einer Ansichtsfortschritts-Zeitachse ist. Der Name kann dann der `animation-timeline` zugewiesen werden, die dann das zugehörige Element animiert, während es sich durch den sichtbaren Bereich seines übergeordneten Scroll-Elements bewegt. Siehe ([Firefox Bug 1737920](https://bugzil.la/1737920)) für weitere Details.

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 136                  | Ja                       |
| Developer Edition       | 114                  | Nein                     |
| Beta                    | 114                  | Nein                     |
| Release                 | 114                  | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Funktion für anonyme Ansichtsfortschritts-Zeitachsen

Die CSS {{cssxref("animation-timeline/view")}} Funktion ermöglicht es Ihnen, anzugeben, dass die `animation-timeline` für ein Element eine Ansichtsfortschritts-Zeitachse ist, die das Element animiert, während es sich durch den sichtbaren Bereich seines übergeordneten Scroll-Elements bewegt. Die Funktion definiert die Achse des übergeordneten Elements, das die Zeitachse bereitstellt, sowie den Einsatz innerhalb des sichtbaren Bereichs, an dem die Animation beginnt und gestartet wird. Siehe ([Firefox Bug 1808410](https://bugzil.la/1808410)) für weitere Details.

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 136                  | Ja                       |
| Developer Edition       | 114                  | Nein                     |
| Beta                    | 114                  | Nein                     |
| Release                 | 114                  | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Transformations-Eigenschaften mit Anbieterpräfix

Die mit `-moz-` gekennzeichneten [CSS-Transformations](/de/docs/Web/CSS/Guides/Transforms)-Eigenschaften können durch Setzen der Präferenz `layout.css.prefixes.transforms` auf `false` deaktiviert werden. Die Absicht ist, diese zu deaktivieren, sobald die Standard-CSS-Zoom-Eigenschaften gut unterstützt sind. ([Firefox Bug 1886134](https://bugzil.la/1886134), [Firefox Bug 1855763](https://bugzil.la/1855763)).

Konkret wird durch diese Präferenz folgende mit Präfix gekennzeichnete Eigenschaften deaktiviert:

- `-moz-backface-visibility`
- `-moz-perspective`
- `-moz-perspective-origin`
- `-moz-transform`
- `-moz-transform-origin`
- `-moz-transform-style`

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 120                  | Ja                       |
| Developer Edition       | 120                  | Ja                       |
| Beta                    | 120                  | Ja                       |
| Release                 | 120                  | Ja                       |

- `layout.css.prefixes.transforms`
  - : Auf `true` setzen, um zu aktivieren.

### Symmetrische `letter-spacing`

Die CSS {{cssxref("letter-spacing")}} Eigenschaft teilt den angegebenen Zeichenabstand nun gleichmäßig auf beide Seiten jedes Zeichens auf. Dies unterscheidet sich vom aktuellen Verhalten, bei dem der Abstand hauptsächlich auf eine Seite hinzugefügt wird. Dieser Ansatz kann den Textabstand verbessern, insbesondere bei gemischter Richtungstexte. ([Firefox Bug 1891446](https://bugzil.la/1891446)).

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 128                  | Ja                       |
| Developer Edition       | 128                  | Ja                       |
| Beta                    | 127                  | Nein                     |
| Release                 | 127                  | Nein                     |

- `layout.css.letter-spacing.model`
  - : Auf `true` setzen, um zu aktivieren.

### Zulassung von Pseudoelementen hinter Element-unterstützten Pseudoelementen

Die Arbeit hat begonnen, um zuzulassen, dass [Pseudoelemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) wie {{cssxref("::first-letter")}} und {{cssxref("::before")}} an Element-unterstützte Pseudoelemente wie {{cssxref("::details-content")}} und {{cssxref("::file-selector-button")}} angehängt werden.

Dies ermöglicht es Benutzern, beispielsweise den ersten Buchstaben des {{htmlElement("details")}} Elements zu stylen, indem der CSS-Selektor `::details-content::first-letter` verwendet oder Inhalt vor einem {{HTMLElement("input")}} von [`type="file"`](/de/docs/Web/HTML/Reference/Elements/input/file) hinzugefügt wird, indem der CSS-Selektor `::file-selector-button::before` verwendet wird.

Derzeit kann nur die Unterstützung für `::details-content::first-letter` mithilfe von `@supports(::details-content::first-letter)` analysiert werden. Das `::file-selector-button` Pseudoelement ist noch nicht als Element-basiertes Pseudoelement markiert, sodass es keine Möglichkeit gibt, dies zu testen. ([Firefox Bug 1953557](https://bugzil.la/1953557), [Firefox Bug 1941406](https://bugzil.la/1941406)).

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 138                  | Nein                     |
| Developer Edition       | 138                  | Nein                     |
| Beta                    | 138                  | Nein                     |
| Release                 | 138                  | Nein                     |

### `:heading` und `:heading()` Pseudo-Klassen

Die {{cssxref(":heading")}} Pseudo-Klasse ermöglicht es Ihnen, alle [Überschriftselemente](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) (`<h1>`-`<h6>`) auf einmal zu stylen, anstatt sie einzeln anzusprechen. Die {{cssxref(":heading()")}} funktionale Pseudo-Klasse ermöglicht es Ihnen, Überschriftselemente zu stylen, die mit einer durch Kommas getrennten Liste von Ganzzahlen übereinstimmen, die den Überschriftsebenen entsprechen. ([Firefox Bug 1974386](https://bugzil.la/1974386) & [Firefox Bug 1984310](https://bugzil.la/1984310)).

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 142                  | Nein                     |
| Developer Edition       | 142                  | Nein                     |
| Beta                    | 142                  | Nein                     |
| Release                 | 142                  | Nein                     |

- `layout.css.heading-selector.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### `@custom-media` At-Regel

Die {{cssxref("@custom-media")}} CSS-At-Regel definiert Aliase für lange oder komplexe Media-Queries. Anstatt die gleiche hartkodierte `<media-query-list>` in mehreren `@media` At-Regeln zu wiederholen, kann sie einmal in einer `@custom-media` At-Regel definiert und bei Bedarf im gesamten Stylesheet referenziert werden. ([Firefox Bug 1744292](https://bugzil.la/1744292)).

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 148                  | Nein                     |
| Developer Edition       | 148                  | Nein                     |
| Beta                    | 148                  | Nein                     |
| Release                 | 148                  | Nein                     |

- `layout.css.custom-media.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### `<attr-type>` Werte in `attr()` CSS-Funktion

Die {{cssxref("attr")}} CSS-Funktion unterstützt nun [`<attr-type>`](/de/docs/Web/CSS/Reference/Values/attr#attr-type) Werte. Dadurch können Sie angeben, wie ein Attributwert in einen CSS-Wert geparst wird, und diese Werte direkt aus [`data-*`](/de/docs/Web/HTML/How_to/Use_data_attributes) übernehmen. ([Firefox Bug 1986631](https://bugzil.la/1986631), [Firefox Bug 1998245](https://bugzil.la/1998245))

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 152                  | Ja                       |
| Developer Edition       | 149                  | Nein                     |
| Beta                    | 149                  | Nein                     |
| Release                 | 149                  | Nein                     |

- `layout.css.attr.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### `base-select` Wert für `appearance` CSS-Eigenschaft

Der [`base-select`](/de/docs/Web/CSS/Reference/Properties/appearance#base-select) Wert der {{cssxref("appearance")}} CSS-Eigenschaft, der nur für das {{htmlelement("select")}} Element und das {{cssxref("::picker()", "::picker(select)")}} Pseudoelement relevant ist, ermöglicht es Ihnen, diese vollständig zu stylen. Derzeit wird nur das Styling des `<select>` Elements unterstützt. Das Styling des `::picker(select)` Pseudoelements wird in zukünftigen Versionen hinzugefügt. Diese Funktion ist Teil der [Anpassbaren Auswahl-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) Arbeit. Zwei Präferenzen müssen aktiviert sein, um dies zu verwenden. ([Firefox Bug 1974787](https://bugzil.la/1974787)).

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 149                  | Nein                     |
| Developer Edition       | 149                  | Nein                     |
| Beta                    | 149                  | Nein                     |
| Release                 | 149                  | Nein                     |

- `dom.select.customizable_select.enabled`
  - : Auf `true` setzen, um zu aktivieren.
- `layout.css.appearance-base.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Namespaced-Attribute in der `attr()` CSS-Funktion

Die {{cssxref("attr")}} CSS-Funktion akzeptiert nun [namespaced Attribute](/de/docs/Web/CSS/Reference/Values/attr#namespaces). Dadurch können Sie Attribute von Elementen in [XML](/de/docs/Web/XML)-basierten Sprachen wie [SVG](/de/docs/Web/SVG) übernehmen und entsprechend stylen. ([Firefox Bug 2014060](https://bugzil.la/2014060).

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 150                  | Nein                     |
| Developer Edition       | 150                  | Nein                     |
| Beta                    | 150                  | Nein                     |
| Release                 | 150                  | Nein                     |

- `layout.css.attr.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Absolut positionierte Elemente in Multispalten-Containern und beim Drucken

Absolut positionierte Elemente innerhalb von [mehrspaltigen Containern](/de/docs/Web/CSS/Guides/Multicol_layout) und beim Drucken sind nun korrekt positioniert und fragmentiert. Dies verbessert die Interoperabilität mit anderen Browsern und verhindert Layoutprobleme wie überlappenden Text oder Inhaltsverlust. ([Firefox Bug 2018797](https://bugzil.la/2018797)).

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 150                  | Ja                       |
| Developer Edition       | 150                  | Nein                     |
| Beta                    | 150                  | Nein                     |
| Release                 | 150                  | Nein                     |

- `layout.abspos.fragmentainer-aware-positioning.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### `@container style()` Bereichssyntaxabfragen

Die [`@container`](/de/docs/Web/CSS/Reference/At-rules/@container) CSS-At-Regel [`style()`](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries) Abfragen unterstützen nun die _Bereichssyntax_. Dies ermöglicht es Ihnen, zu überprüfen, ob ein Container über eine gültige CSS-Benutzerdefinierte Eigenschaft verfügt und seinen Wert mit Vergleichsoperatoren wie `>`, `<`, `>=` und `<=` zu vergleichen und seinen Kindern entsprechend Stile zuzuweisen. ([Firefox Bug 2024601](https://bugzil.la/2024601)).

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 151                  | Nein                     |
| Developer Edition       | 151                  | Nein                     |
| Beta                    | 151                  | Nein                     |
| Release                 | 151                  | Nein                     |

- `layout.css.attr.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Fix für verschachtelte scrollbare Bereiche

Diese Implementierung wurde hinzugefügt, um ein Problem zu beheben, bei dem scrollbarer Inhalt unerreichbar war. Wenn ein Scrollbalken auf `display: none;` oder `width: 0;` gesetzt ist, würden die Scrollbalken von verschachtelten scrollbaren Bereichen aufeinander gestapelt sein, was bedeutet, dass einige der Inhalte möglicherweise nicht erreichbar sind. Dies bedeutet jedoch, dass der `@supports selector(::-webkit-scrollbar)` Check `true` zurückgeben wird, obwohl das [`::-webkit-scrollbar`](/de/docs/Web/CSS/Reference/Selectors/::-webkit-scrollbar) Pseudoelement nicht wirklich unterstützt wird. ([Firefox Bug 1977511](https://bugzil.la/1977511)).

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 151                  | Ja                       |
| Developer Edition       | 151                  | Nein                     |
| Beta                    | 151                  | Nein                     |
| Release                 | 151                  | Nein                     |

- `layout.css.fake-webkit-scrollbar.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### `<timeline-range-name>` Werte

Die {{cssxref("animation-range-start")}}, {{cssxref("animation-range-end")}} CSS-Eigenschaften und die {{cssxref("animation-range")}} Kurzform-Eigenschaft unterstützen nun [`<timeline-range-name>`](/de/docs/Web/CSS/Reference/Values/timeline-range-name) Werte. Diese [`<timeline-range-name>`](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names#timeline_range_names) Werte ermöglichen es Ihnen, genau anzugeben, in welchem Segment eine scrollgetriebene Animation stattfinden wird. ([Firefox Bug 1804775](https://bugzil.la/1804775)).

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 151                  | Ja                       |
| Developer Edition       | 151                  | Nein                     |
| Beta                    | 151                  | Nein                     |
| Release                 | 151                  | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### `<timeline-range-name>` Werte in `@keyframes` Selektoren

Die {{cssxref("@keyframes")}} At-Regel unterstützt nun [`<timeline-range-name>`](/de/docs/Web/CSS/Reference/Values/timeline-range-name) Werte. Diese [Werte](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names#timeline_range_names) ermöglichen es Ihnen, das Segment anzugeben, innerhalb dessen eine scrollgetriebene Animation stattfindet. ([Firefox Bug 1824875](https://bugzil.la/1824875)).

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 152                  | Ja                       |
| Developer Edition       | 152                  | Nein                     |
| Beta                    | 152                  | Nein                     |
| Release                 | 152                  | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Baumzählende CSS-Funktionen

Die {{cssxref("sibling-count")}} und {{cssxref("sibling-index")}} Funktion werden nun unterstützt. Die `sibling-count()` Funktion gibt die Anzahl der Geschwisterelemente sowie das Element selbst zurück. Die `sibling-index()` Funktion gibt die Indexnummer des Elements in Bezug auf seine Geschwister zurück, beginnend bei `1` und nicht `0`. ([Firefox Bug 2042063](https://bugzil.la/2042063)).

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 154                  | Ja                       |
| Developer Edition       | 153                  | Nein                     |
| Beta                    | 153                  | Nein                     |
| Release                 | 153                  | Nein                     |

- `layout.css.tree-counting-functions.enabled`
  - : Auf `true` setzen, um zu aktivieren.

## SVG

**Keine experimentellen Funktionen in diesem Veröffentlichungszyklus.**

## MathML

### `href` bei nicht-`<a>` MathML-Elementen deaktivieren

Wenn diese Einstellung aktiviert ist, erstellt das [`href`](/de/docs/Web/MathML/Reference/Global_attributes/href) globale Attribut keinen Hyperlink auf MathML-Elementen außer `<a>`, wodurch Firefox mit der [MathML Core-Spezifikation](https://w3c.github.io/mathml-core/#the-a-element) übereinstimmt, die nur Hyperlinks auf dem `<a>` Element definiert. ([Firefox Bug 2026848](https://bugzil.la/2026848)).

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 151                  | Ja                       |
| Developer Edition       | 151                  | Nein                     |
| Beta                    | 151                  | Nein                     |
| Release                 | 151                  | Nein                     |

- `mathml.href_link_on_non_anchor_element.disabled`
  - : Auf `true` setzen, um zu aktivieren.

## JavaScript

### TC39 Iterator includes Vorschlag

Die Methode [`Iterator.prototype.includes()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator/includes) testet, ob eine `Iterator` Instanz einen angegebenen Wert erzeugt. Der Vergleich verwendet den [SameValueZero Algorithmus](/de/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness#same-value-zero_equality). Dieser Algorithmus ähnelt der strengen Gleichheit `===` (wobei `-0` und `+0` als gleich angesehen werden), unterscheidet sich jedoch darin, dass {{jsxref("NaN")}} als gleich zu sich selbst angesehen wird. ([Firefox Bug 2025779](https://bugzil.la/2025779)).

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 152                  | Nein                     |
| Developer Edition       | 152                  | Nein                     |
| Beta                    | 152                  | Nein                     |
| Release                 | 152                  | Nein                     |

- `javascript.options.experimental.iterator_includes`
  - : Auf `true` setzen, um zu aktivieren.

### TC39 Intl.Locale info Vorschlag

Der [TC39 Intl.Locale info Vorschlag](https://github.com/tc39/proposal-intl-locale-info) wird jetzt unterstützt. Dazu gehören alle Instanzmethoden auf `Intl.Locale`, die mit "get" beginnen — {{jsxref("Intl/Locale/getCalendars", "Intl.Locale.prototype.getCalendars()")}}, {{jsxref("Intl/Locale/getCollations", "Intl.Locale.prototype.getCollations()")}}, {{jsxref("Intl/Locale/getHourCycles", "Intl.Locale.prototype.getHourCycles()")}}, {{jsxref("Intl/Locale/getNumberingSystems", "Intl.Locale.prototype.getNumberingSystems()")}}, {{jsxref("Intl/Locale/getTextInfo", "Intl.Locale.prototype.getTextInfo()")}}, {{jsxref("Intl/Locale/getTimeZones", "Intl.Locale.prototype.getTimeZones()")}}, {{jsxref("Intl/Locale/getWeekInfo", "Intl.Locale.prototype.getWeekInfo()")}}. ([Firefox Bug 1693576](https://bugzil.la/1693576)).

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 152                  | Nein                     |
| Developer Edition       | —                    | —                        |
| Beta                    | —                    | —                        |
| Release                 | —                    | —                        |

- `javascript.options.experimental.intl_locale_info`
  - : Auf `true` setzen, um es in Nightly zu aktivieren.

### Mehrere Import-Maps

Unterstützung für [mehrere Import-Maps](/de/docs/Web/HTML/Reference/Elements/script/type/importmap#merging_multiple_import_maps). Diese geben Entwicklern mehr Flexibilität bei der Strukturierung und dem Laden von JavaScript-Modulen, da sie ihre Modulzuordnungen nicht mehr im Voraus kennen und sie in einer einzelnen Import-Map deklarieren müssen, die alle Module lädt. ([Firefox Bug 1916277](https://bugzil.la/1916277)).

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 150                  | Nein                     |
| Developer Edition       | 150                  | Nein                     |
| Beta                    | 150                  | Nein                     |
| Release                 | 150                  | Nein                     |

- `dom.multiple_import_maps.enabled`
  - : Auf `true` setzen, um zu aktivieren.

## APIs

### Crash-Berichterstellung

Crash-Berichte können jetzt über die [Reporting API](/de/docs/Web/API/Reporting_API) an den `default` Endpunkt gesendet werden. Beachten Sie, dass Firefox das Bereitstellen von [`CrashReportContext`](/de/docs/Web/API/CrashReportContext) im Berichtsinhalt nicht unterstützt. ([Firefox Bug 2036160](https://bugzil.la/2036160)).

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 152                  | Ja                       |
| Developer Edition       | 152                  | Nein                     |
| Beta                    | 152                  | Nein                     |
| Release                 | 152                  | Nein                     |

- `dom.reporting.crash.enabled`
  - : Auf `true` setzen, um zu aktivieren (standardmäßig in Nightly aktiviert).

### Scoped Custom Element Registries

Die Unterstützung für [bereichsspezifische registrierte benutzerdefinierte Elemente](/de/docs/Web/API/Web_components/Using_custom_elements#scoped_custom_element_registries) wird implementiert. Bereichsspezifische Registries ermöglichen einem Schatten-Baum die Erstellung einer unabhängigen [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry), deren Definitionen nur für diesen speziellen DOM-Unterbaum gelten. Dies kann verwendet werden, um Kollisionen zu vermeiden, bei denen mehrere Web-Komponenten Elemente mit demselben Namen deklarieren.

Die Implementierung umfasst:

- `customElementRegistry` Eigenschaft auf [`Document`](/de/docs/Web/API/Document), [`Element`](/de/docs/Web/API/Element) und [`ShadowRoot`](/de/docs/Web/API/ShadowRoot). ([Firefox Bug 2018900](https://bugzil.la/2018900)).

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 150                  | Nein                     |
| Developer Edition       | 150                  | Nein                     |
| Beta                    | 150                  | Nein                     |
| Release                 | 150                  | Nein                     |

- `dom.scoped-custom-element-registries.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### CSS Typed Object Model Level 1

Die Implementierungsarbeit hat am [CSS Typed OM Level 1](https://drafts.css-houdini.org/css-typed-om/) begonnen. Beispielsweise wird die Methode [`to()`](/de/docs/Web/API/CSSNumericValue/to) der [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) Schnittstelle zur Umwandlung eines CSS-numerischen Wertes von einer Einheit in eine andere unterstützt. ([Firefox Bug 1278697](https://bugzil.la/1278697)).

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 149                  | Nein                     |
| Developer Edition       | 149                  | Nein                     |
| Beta                    | 149                  | Nein                     |
| Release                 | 149                  | Nein                     |

- `layout.css.typed-om.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Grafik: Canvas, WebGL und WebGPU

#### WebGL: Entwurfs-Erweiterungen

Wenn diese Präferenz aktiviert ist, werden alle WebGL-Erweiterungen, die sich derzeit im "Entwurf"-Status befinden und getestet werden, zur Nutzung freigegeben. Derzeit werden keine WebGL-Erweiterungen von Firefox getestet.

#### WebGPU API

Die [WebGPU API](/de/docs/Web/API/WebGPU_API) bietet Low-Level-Unterstützung für die Durchführung von Berechnungen und Grafiken-Rendering unter Verwendung der [Graphics Processing Unit](https://en.wikipedia.org/wiki/Graphics_Processing_Unit) (GPU) des Geräts oder Computers des Benutzers. Ab Version 142 ist dies unter Windows in allen Kontexten außer Service Workers aktiviert. Ab Version 147 ist dies unter macOS auf Apple Silicon in allen Browserkontexten außer Service Workers aktiviert. Für andere Plattformen wie Linux und macOS auf Intel Silicon ist es in Nightly aktiviert. Siehe [Firefox Bug 1602129](https://bugzil.la/1602129) für unseren Fortschritt bei dieser API.

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert?                                                  |
| ----------------------- | -------------------- | ------------------------------------------------------------------------- |
| Nightly                 | 141                  | Ja                                                                        |
| Developer Edition       | 141                  | Nein (Ja unter Windows und macOS auf Apple Silicon, ohne Service Workers) |
| Beta                    | 141                  | Nein (Ja unter Windows und macOS auf Apple Silicon, ohne Service Workers) |
| Release                 | 141                  | Nein (Ja unter Windows und macOS auf Apple Silicon, ohne Service Workers) |

- `dom.webgpu.enabled`
  - : Auf `true` setzen, um zu aktivieren (aktiviert in Nightly und unter Windows in allen Veröffentlichungen)
- `dom.webgpu.service-workers.enabled`
  - : Auf `true` setzen, um zu aktivieren (aktiviert in Nightly)

### WebRTC und Medien

Die folgenden experimentellen Funktionen umfassen solche, die in Medien-APIs wie der [WebRTC API](/de/docs/Web/API/WebRTC_API), der [Web Audio API](/de/docs/Web/API/Web_Audio_API), der [Media Source Extensions API](/de/docs/Web/API/Media_Source_Extensions_API), der [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API) und der [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) gefunden werden.

#### HTMLMediaElement Eigenschaften: audioTracks und videoTracks

Das Aktivieren dieser Funktion fügt die [`HTMLMediaElement.audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks) und [`HTMLMediaElement.videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks) Eigenschaften zu allen HTML-Medienelementen hinzu. Da Firefox jedoch derzeit keine Unterstützung für mehrere Audio- und Videospuren bietet, funktionieren die häufigsten Anwendungsfälle für diese Eigenschaften nicht, sodass sie beide standardmäßig deaktiviert sind. Siehe [Firefox Bug 1057233](https://bugzil.la/1057233) für weitere Details.

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 33                   | Nein                     |
| Developer Edition       | 33                   | Nein                     |
| Beta                    | 33                   | Nein                     |
| Release                 | 33                   | Nein                     |

- `media.track.enabled`
  - : Auf `true` setzen, um zu aktivieren.

#### Asynchrones Hinzufügen und Entfernen von Quellpuffern

Dies fügt die Methoden [`appendBufferAsync()`](/de/docs/Web/API/SourceBuffer/appendBufferAsync) und [`removeAsync()`](/de/docs/Web/API/SourceBuffer/removeAsync) für das Hinzufügen und Entfernen von Mediensource-Puffern zur [`SourceBuffer`](/de/docs/Web/API/SourceBuffer) Schnittstelle hinzu. Siehe [Firefox Bug 1280613](https://bugzil.la/1280613) und [Firefox Bug 778617](https://bugzil.la/778617) für weitere Informationen.

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 62                   | Nein                     |
| Developer Edition       | 62                   | Nein                     |
| Beta                    | 62                   | Nein                     |
| Release                 | 62                   | Nein                     |

- `media.mediasource.experimental.enabled`
  - : Auf `true` setzen, um zu aktivieren.

#### AVIF Konformität Strenge

Die Präferenz `image.avif.compliance_strictness` kann verwendet werden, um die _Strenge_ beim Verarbeiten von [AVIF](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) Bildern zu steuern. Dies ermöglicht es Firefox-Benutzern, Bilder anzuzeigen, die in anderen Browsern gerendert werden, selbst wenn sie nicht strikt konform sind.

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardwert |
| ----------------------- | -------------------- | ------------ |
| Nightly                 | 92                   | 1            |
| Developer Edition       | 92                   | 1            |
| Beta                    | 92                   | 1            |
| Release                 | 92                   | 1            |

- `image.avif.compliance_strictness`
  - : Numerischer Wert, der eine _Strenge_ Stufe angibt. Erlaubte Werte sind:
    - `0`: Permissiv. Akzeptiert Bilder mit Spezifikationsverstößen sowohl bei Empfehlungen ("sollte"-Sprache) als auch bei Anforderungen ("müssen"-Sprache), vorausgesetzt, dass sie sicher oder eindeutig interpretiert werden können.
    - `1` **(Standard)**: Gemischt. Lehnt Verstöße gegen Anforderungen ("müssen") ab, erlaubt jedoch Verstöße gegen Empfehlungen ("sollte").
    - `2`: Strikt. Lehnt alle Verstöße gegen festgelegte Anforderungen oder Empfehlungen ab.

#### JPEG XL Unterstützung

Firefox unterstützt das [JPEG XL](https://jpeg.org/jpegxl/) Bildformat, einen modernen Nachfolger von JPEG, der eine verbesserte Komprimierung und Bildqualität sowie neue Funktionen wie Transparenz, Animation und HDR-Unterstützung bietet. Siehe [Firefox Bug 1539075](https://bugzil.la/1539075) und [Firefox Bug 2016688](https://bugzil.la/2016688) für weitere Details.

In Firefox 149 wurde der vorherige C++ [JPEG XL](https://jpeg.org/jpegxl/) Bilddecoder durch eine neue, auf Rust basierende Implementierung ersetzt, die die `jxl-rs` Bibliothek verwendet ([Firefox Bug 1986393](https://bugzil.la/1986393)).

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 153                  | Ja                       |
| Developer Edition       | 152                  | Nein                     |
| Beta                    | 152                  | Nein                     |
| Release                 | 152                  | Nein                     |

- `image.jxl.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### WebVR API (Deaktiviert)

Die veraltete [WebVR API](/de/docs/Web/API/WebVR_API) befindet sich auf dem Weg zur Entfernung. Sie ist standardmäßig in allen Builds deaktiviert [Firefox Bug 1750902](https://bugzil.la/1750902).

| Veröffentlichungs-Kanal | Entferntere Version | Standardmäßig aktiviert? |
| ----------------------- | ------------------- | ------------------------ |
| Nightly                 | 98                  | Nein                     |
| Developer Edition       | 98                  | Nein                     |
| Beta                    | 98                  | Nein                     |
| Release                 | 98                  | Nein                     |

- `dom.vr.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### GeometryUtils Methoden: convertPointFromNode(), convertRectFromNode(), und convertQuadFromNode()

Die `GeometryUtils` Methoden `convertPointFromNode()`, `convertRectFromNode()`, und `convertQuadFromNode()` mappieren den gegebenen Punkt, das Rechteck oder das Viereck vom [`Node`](/de/docs/Web/API/Node), auf dem sie aufgerufen werden, zu einem anderen Knoten. (Siehe [Firefox Bug 918189](https://bugzil.la/918189) für weitere Details.)

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 31                   | Nein                     |
| Developer Edition       | 31                   | Nein                     |
| Beta                    | 31                   | Nein                     |
| Release                 | 31                   | Nein                     |

- `layout.css.convertFromNode.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### GeometryUtils Methode: getBoxQuads()

Die `GeometryUtils` Methode `getBoxQuads()` gibt die CSS-Boxen für einen [`Node`](/de/docs/Web/API/Node) relativ zu jedem anderen Knoten oder Anzeigeport zurück. (Siehe [Firefox Bug 917755](https://bugzil.la/917755) für weitere Details.)

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 31                   | Nein                     |
| Developer Edition       | 31                   | Nein                     |
| Beta                    | 31                   | Nein                     |
| Release                 | 31                   | Nein                     |

- `layout.css.getBoxQuads.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Payment Request API

#### Primäre Zahlungshandhabung

Die [Payment Request API](/de/docs/Web/API/Payment_Request_API) bietet Unterstützung für die Abwicklung von web-basierten Zahlungen innerhalb von Webinhalten oder Apps. Aufgrund eines Fehlers, der beim Testen der Benutzeroberfläche auftrat, haben wir beschlossen, die Veröffentlichung dieser API zu verschieben, während Diskussionen über mögliche Änderungen an der API geführt werden. Die Arbeit läuft weiter. (Siehe [Firefox Bug 1318984](https://bugzil.la/1318984) für weitere Details.)

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 55                   | Nein                     |
| Developer Edition       | 55                   | Nein                     |
| Beta                    | 55                   | Nein                     |
| Release                 | 55                   | Nein                     |

- `dom.payments.request.enabled`
  - : Auf `true` setzen, um zu aktivieren.
- `dom.payments.request.supportedRegions`
  - : Ländercodes als durch Kommas getrennte Positivliste von Regionen (z. B. `US,CA`).

### WebShare API

Die [Web Share API](/de/docs/Web/API/Web_Share_API) ermöglicht die Freigabe von Dateien, URLs und anderen Daten von einer Website. Diese Funktion ist auf Android in allen Builds aktiviert, jedoch hinter einer Präferenz auf dem Desktop (sofern nicht anders angegeben).

| Veröffentlichungs-Kanal | Geänderte Version | Standardmäßig aktiviert?                    |
| ----------------------- | ----------------- | ------------------------------------------- |
| Nightly                 | 71                | Nein (Standard). Ja (Windows ab Version 92) |
| Developer Edition       | 71                | Nein                                        |
| Beta                    | 71                | Nein                                        |
| Release                 | 71                | Nein (Desktop). Ja (Android).               |

- `dom.webshare.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Notifications API

Benachrichtigungen haben die Eigenschaft [`requireInteraction`](/de/docs/Web/API/Notification/requireInteraction), die standardmäßig auf Windows-Systemen und in der Nightly-Veröffentlichung auf `true` gesetzt ist ([Firefox Bug 1794475](https://bugzil.la/1794475)).

| Veröffentlichungs-Kanal | Geänderte Version | Standardmäßig aktiviert? |
| ----------------------- | ----------------- | ------------------------ |
| Nightly                 | 117               | Ja                       |
| Developer Edition       | 117               | Nein                     |
| Beta                    | 117               | Nein                     |
| Release                 | 117               | Nur Windows              |

- `dom.webnotifications.requireinteraction.enabled`
  - : Auf `true` setzen, um zu aktivieren.

## Sicherheit und Datenschutz

### Kennzeichnung unsicherer Seiten

Die beiden Präferenzen `security.insecure_connection_text_*` fügen im Adressfeld ein "Nicht sicher" Textlabel neben dem traditionellen Schlosssymbol hinzu, wenn eine Seite unsicher geladen wird (das heißt, mit {{Glossary("HTTP", "HTTP")}} anstatt {{Glossary("HTTPS", "HTTPS")}}). Die Präferenz `browser.urlbar.trimHttps` entfernt das `https:` Präfix aus URLs im Adressfeld. Siehe [Firefox Bug 1853418](https://bugzil.la/1853418) für weitere Details.

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 121                  | Ja                       |
| Developer Edition       | 60                   | Nein                     |
| Beta                    | 60                   | Nein                     |
| Release                 | 60                   | Nein                     |

- `security.insecure_connection_text.enabled`
  - : Auf `true` setzen, um das Textlabel für den normalen Browsing-Modus zu aktivieren.
- `security.insecure_connection_text.pbmode.enabled`
  - : Auf `true` setzen, um das Textlabel für den privaten Browsing-Modus zu aktivieren.
- `browser.urlbar.trimHttps`
  - : Auf `true` setzen, um das `https:` Präfix aus URLs im Adressfeld zu entfernen.

### Einschränkung von Erwachsenen-Inhalten mit `<meta name="rating">`

Das nicht standardkonforme [`<meta name="rating">`](/de/docs/Web/HTML/Reference/Elements/meta) Element kann auf einer Webseite enthalten sein, um den Inhalt der Seite als eingeschränkt/erwachsen zu kennzeichnen. Zum Zeitpunkt des Schreibens gibt es zwei mögliche `content` Werte, `adult` ([von Google definiert](https://developers.google.com/search/docs/specialty/explicit/guidelines#add-metadata)) und `RTA-5042-1996-1400-1577-RTA` ([von ASACP definiert](https://www.rtalabel.org/?content=howto#top)), die die gleiche Wirkung haben (weitere Optionen können in Zukunft hinzugefügt werden).

Die folgenden `<meta>` Elemente sind äquivalent:

```html
<meta name="rating" content="adult" />
<meta name="rating" content="RTA-5042-1996-1400-1577-RTA" />
```

Browser, die dieses Element erkennen, können dann Schritte unternehmen, um zu verhindern, dass Benutzer den Inhalt anzeigen. Die Implementierung von Firefox ersetzt die Seite mit dem Inhalt, der unter `about:restricted` zu finden ist, der dem Benutzer erklärt, dass er versucht, eingeschränkten Inhalt anzuzeigen, erläutert, warum er ihn nicht anzeigen kann und ihm eine Zurück-Schaltfläche gibt, um zurückzukehren.

Siehe [Firefox Bug 1991135](https://bugzil.la/1991135) für weitere Details.

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 146                  | Nein                     |
| Developer Edition       | 146                  | Nein                     |
| Beta                    | 146                  | Nein                     |
| Release                 | 146                  | Nein                     |

- `security.restrict_to_adults.always`
  - : Auf `true` setzen, um den Zugriff auf Webseiten zu beschränken, die sich selbst als Erwachsenenseite identifizieren, indem sie ein `<meta name="rating">` Element einschließen.
- `security.restrict_to_adults.respect_platform`
  - : Auf `true` setzen, um den Zugriff auf Webseiten zu beschränken, die sich selbst als Erwachsenenseite identifizieren, indem sie ein `<meta name="rating">` Element nur dann einschließen, wenn entsprechende Kindersicherungen auf dem zugrunde liegenden Betriebssystem festgelegt sind (zum Beispiel sind die macOS _Inhalt & Datenschutz_ Einstellungen auf die Einschränkung expliziter Webinhalte eingestellt).

### Berechtigungspolitik / Funktionspolitik

[Die Berechtigungspolitik](/de/docs/Web/HTTP/Guides/Permissions_Policy) ermöglicht es Webentwicklern, die Aktivierung, Deaktivierung und das Verhalten gewisser Funktionen und APIs im Browser selektiv zu steuern. Es ist ähnlich wie CSP, kontrolliert aber Funktionen statt Sicherheitsverhalten. Dies ist in Firefox als **Funktionspolitik** implementiert, der Name, der in einer früheren Version der Spezifikation verwendet wurde.

Beachten Sie, dass unterstützte Richtlinien auch durch das [`allow`](/de/docs/Web/HTML/Reference/Elements/iframe#allow) Attribut auf `<iframe>` Elementen gesetzt werden können, auch wenn die Benutzereinstellung nicht gesetzt ist.

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 65                   | Nein                     |
| Developer Edition       | 65                   | Nein                     |
| Beta                    | 65                   | Nein                     |
| Release                 | 65                   | Nein                     |

- `dom.security.featurePolicy.header.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Datenschutzfreundliche Attributions-API (PPA)

Die [PPA API](https://support.mozilla.org/en-US/kb/privacy-preserving-attribution) bietet eine Alternative zum Benutzer-Tracking für die Werbeattribution durch das neue `navigator.privateAttribution` Objekt mit den Methoden `saveImpression()` und `measureConversion()`. Lesen Sie mehr über PPA [im ursprünglichen Erklärungstext](https://github.com/mozilla/explainers/tree/main/archive/ppa-experiment) und die [vorgeschlagene Spezifikation](https://w3c.github.io/ppa/). Dieses Experiment kann für Websites über [Origin-Trial](https://wiki.mozilla.org/Origin_Trials) oder im Browser durch Setzen der Präferenz auf `1` aktiviert werden. ([Firefox Bug 1900929](https://bugzil.la/1900929)).

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 128                  | Nein                     |
| Developer Edition       | 128                  | Nein                     |
| Beta                    | 128                  | Nein                     |
| Release                 | 128                  | Nein                     |

- `dom.origin-trials.private-attribution.state`
  - : Auf `true` setzen, um zu aktivieren.

## HTTP

### Integritätspolitik für Stylesheet-Ressourcen

Die {{httpheader("Integrity-Policy")}} und {{httpheader("Integrity-Policy-Report-Only")}} HTTP-Header werden nun für Stylesheet-Ressourcen unterstützt. Diese ermöglichen es Webseiten, entweder [Subressourcen-Integritätsgarantien](/de/docs/Web/Security/Defenses/Subresource_Integrity) für Stylesheets durchzusetzen oder nur Verstöße gegen die Richtlinie zu melden. Beachten Sie, dass Firefox keine Meldeziele beachtet und Verstöße in die Entwicklerkonsole protokolliert. Wenn `Integrity-Policy` verwendet wird, blockiert der Browser das Laden von Styles, die in einem {{HTMLElement("link")}} Element mit [`rel="stylesheet"`](/de/docs/Web/HTML/Reference/Attributes/rel#stylesheet) referenziert werden und entweder das [`integrity`](/de/docs/Web/HTML/Reference/Elements/script#integrity) Attribut fehlen oder einen Integritätshash haben, der nicht mit der Ressource auf dem Server übereinstimmt. ([Firefox Bug 1976656](https://bugzil.la/1976656)).

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 142                  | Nein                     |
| Developer Edition       | 142                  | Nein                     |
| Beta                    | 142                  | Nein                     |
| Release                 | 142                  | Nein                     |

- `security.integrity_policy.stylesheet.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Idempotency-Key

Der {{httpheader("Idempotency-Key")}} HTTP-Anforderungsheader kann von der Website-Client-Code verwendet werden, um eine {{HTTPMethod("POST")}} oder {{HTTPMethod("PATCH")}} Anfragen {{Glossary("idempotent", "idempotent")}} zu machen, wenn er mit einem Server verwendet wird, der ihn unterstützt. Die Spezifikation gibt an, dass der Server dokumentieren und bewerben sollte, welche Endpunkte diesen Header benötigen, das Format des Schlüssels und erwartete Fehlermeldungen.

Firefox fügt den Header _automatisch_ mit einem eindeutigen Schlüssel für jede neue `POST` Anfrage hinzu, wenn er nicht bereits von der Client-seitigen Code hinzugefügt wurde. Dies vereinfacht den erforderlichen Client-seitigen Code, um mit Servern zu arbeiten, die die Funktion unterstützen.

([Firefox Bug 1830022](https://bugzil.la/1830022)).

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 135                  | Nein                     |
| Developer Edition       | 135                  | Nein                     |
| Beta                    | 135                  | Nein                     |
| Release                 | 135                  | Nein                     |

- `network.http.idempotencyKey.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Accept-Header mit MIME-Typ image/jxl

Der HTTP [`Accept`](/de/docs/Web/HTTP/Reference/Headers/Accept) Header in [Standardanfragen und Bildanfragen](/de/docs/Web/HTTP/Guides/Content_negotiation/List_of_default_Accept_values) kann über eine Präferenz konfiguriert werden, um die Unterstützung für den `image/jxl` MIME-Typ anzuzeigen.

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 128                  | Nein                     |
| Developer Edition       | 128                  | Nein                     |
| Beta                    | 128                  | Nein                     |
| Release                 | 128                  | Nein                     |

- `image.jxl.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### SameSite=Lax standardmäßig

[`SameSite` Cookies](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) haben standardmäßig den Wert `Lax`. Mit dieser Einstellung werden Cookies nur gesendet, wenn ein Benutzer zur Ursprungsseite navigiert, nicht jedoch für plattformübergreifende Teilanforderungen, um Bilder oder Rahmen auf einer Drittanbieter-Site zu laden und so weiter. Für weitere Details siehe [Firefox Bug 1617609](https://bugzil.la/1617609).

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 69                   | Nein                     |
| Developer Edition       | 69                   | Nein                     |
| Beta                    | 69                   | Nein                     |
| Release                 | 69                   | Nein                     |

- `network.cookie.sameSite.laxByDefault`
  - : Auf `true` setzen, um zu aktivieren.

### Access-Control-Allow-Headers Platzhalter deckt Authorization nicht ab

Der [`Access-Control-Allow-Headers`](/de/docs/Web/HTTP/Reference/Headers/Access-Control-Allow-Headers) ist ein Antwortheader auf eine {{Glossary("Preflight_request", "CORS-Vorabanforderung")}}, der angibt, welche Anforderungsheader in der endgültigen Anfrage enthalten sein dürfen. Die Antwortanweisung kann einen Platzhalter (`*`) enthalten, der angibt, dass die endgültige Anfrage alle Header außer dem `Authorization` Header enthalten darf.

Standardmäßig fügt Firefox den `Authorization` Header in der endgültigen Anfrage hinzu, nachdem er eine Antwort mit `Access-Control-Allow-Headers: *` erhalten hat. Stellen Sie die Präferenz auf `false`, um sicherzustellen, dass Firefox den `Authorization` Header nicht einfügt. Für weitere Details siehe [Firefox Bug 1687364](https://bugzil.la/1687364).

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 115                  | Ja                       |
| Developer Edition       | 115                  | Ja                       |
| Beta                    | 115                  | Ja                       |
| Release                 | 115                  | Ja                       |

- `network.cors_preflight.authorization_covered_by_wildcard`
  - : Auf `true` setzen, um zu aktivieren.

## Entwicklerwerkzeuge

Die Entwicklerwerkzeuge von Mozilla entwickeln sich ständig weiter. Wir experimentieren mit neuen Ideen, fügen neue Funktionen hinzu und testen sie in den Nightly und Developer Edition Kanälen, bevor wir sie in die Beta und die Release-Version gehen lassen. Die unten aufgeführten Funktionen sind die aktuelle Auswahl an experimentellen Entwicklerwerkzeugfunktionen.

**Keine experimentellen Funktionen in diesem Veröffentlichungszyklus.**

## Siehe auch

- [Firefox Entwickler Versionshinweise](/de/docs/Mozilla/Firefox/Releases)
- [Firefox Nightly](https://www.firefox.com/en-US/channel/desktop/)
- [Firefox Developer Edition](https://www.firefox.com/en-US/channel/desktop/developer/)
