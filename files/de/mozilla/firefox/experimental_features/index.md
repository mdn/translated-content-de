---
title: Experimentelle Funktionen in Firefox
short-title: Experimentelle Funktionen
slug: Mozilla/Firefox/Experimental_features
l10n:
  sourceCommit: 93ba287ac81f264592c72e13106a5dcc1a35a4e0
---

Diese Seite listet die experimentellen und teilweise implementierten Funktionen von Firefox auf, einschließlich sich entwickelnder oder vorgeschlagener Webplattform-Standards. Jede der unten stehenden Einträge enthält Informationen darüber, in welchen Builds eine Funktion enthalten ist (Nightly, Beta, Developer Edition oder Release), ob sie standardmäßig aktiviert ist oder nicht, und den Namen der **Präferenz**, mit der Sie die Funktion aktivieren oder konfigurieren können. Die Beschreibung jeder Funktion enthält auch Links zu relevanten [Bugzilla-Bugs](https://bugzilla.mozilla.org), die die Funktion implementieren oder aktivieren. Diese Informationen ermöglichen es Ihnen, experimentelle Funktionen auszuprobieren und Feedback zu geben, bevor sie offiziell veröffentlicht werden.

In Bezug auf den Lebenszyklus erscheinen neue Funktionen in der Regel zuerst in [Nightly](https://www.firefox.com/en-US/channel/desktop/#nightly), wo sie oft standardmäßig aktiviert sind, um frühzeitiges Feedback und Tests zu ermöglichen. Wenn keine größeren Probleme auftreten, werden sie in die [Beta](https://www.firefox.com/en-US/channel/desktop/#beta) und [Developer Edition](https://www.firefox.com/en-US/channel/desktop/developer/) Vorabversionen aufgenommen. Schließlich werden genehmigte Funktionen im [stabilen Release](https://www.firefox.com/en-US/) Kanal ausgeliefert. Wenn eine Funktion standardmäßig in einer Veröffentlichung aktiviert ist, gilt sie nicht mehr als experimentell und wird von dieser Seite entfernt.

Um diese Funktionen zu aktivieren, geben Sie `about:config` in die Adressleiste von Firefox ein, suchen Sie nach der zugehörigen **Präferenz** und ändern Sie deren Wert, der normalerweise ein Umschalten zwischen `true` und `false` ist. Abhängig von der Funktion müssen Sie den Browser möglicherweise neu starten, damit die Änderung wirksam wird. Schauen Sie in den Artikel über den [Konfigurationseditor von Firefox](https://support.mozilla.org/en-US/kb/about-config-editor-firefox) für weitere Informationen darüber, wie Sie Präferenzen in Firefox verwalten können.

## HTML

### Layout für input type="search"

Das Layout für `input type="search"` wurde aktualisiert. Dies bewirkt, dass ein Suchfeld nach dem Eingeben eines Textes ein Löschen-Symbol hat, um es an die Implementierungen anderer Browser anzupassen. (Siehe [Firefox-Bug 558594](https://bugzil.la/558594) für weitere Details.)

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 81                   | Nein                     |
| Developer Edition       | 81                   | Nein                     |
| Beta                    | 81                   | Nein                     |
| Release                 | 81                   | Nein                     |

- `layout.forms.input-type-search.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Umschalten der Passwortanzeige

HTML-Passworteingabeelemente ([`<input type="password">`](/de/docs/Web/HTML/Reference/Elements/input/password)) enthalten ein "Augen"-Symbol, das umgeschaltet werden kann, um den Passworttext anzuzeigen oder zu verbergen ([Firefox-Bug 502258](https://bugzil.la/502258)).

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 96                   | Nein                     |
| Developer Edition       | 96                   | Nein                     |
| Beta                    | 96                   | Nein                     |
| Release                 | 96                   | Nein                     |

- `layout.forms.reveal-password-button.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Zeitwahl in `datetime-local` und `time` Eingabeelementen

Die HTML-Elemente [`<input type="datetime-local">`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local) und [`<input type="time">`](/de/docs/Web/HTML/Reference/Elements/input/time) unterstützen eine Zeitwahl. ([Firefox-Bug 1726108](https://bugzil.la/1726108)).

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 144                  | Nein                     |
| Developer Edition       | 144                  | Nein                     |
| Beta                    | 144                  | Nein                     |
| Release                 | 144                  | Nein                     |

- `dom.forms.datetime.timepicker`
  - : Setzen Sie auf `true`, um zu aktivieren.

### `alpha` und `colorspace` Attribute in `color` Eingabeelementen

Das HTML-Element [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color) unterstützt die Attribute [`alpha`](/de/docs/Web/HTML/Reference/Elements/input/color#alpha) & [`colorspace`](/de/docs/Web/HTML/Reference/Elements/input/color#colorspace). ([Firefox-Bug 1919718](https://bugzil.la/1919718)).

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 149                  | Ja                       |
| Developer Edition       | -                    | -                        |
| Beta                    | -                    | -                        |
| Release                 | -                    | -                        |

- `dom.forms.html_color_picker.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

## CSS

### Hex-Boxen zur Anzeige von Steuerzeichen

Diese Funktion rendert Steuerzeichen (Unicode-Kategorie Cc) außer _tab_ (`U+0009`), _line feed_ (`U+000A`), _form feed_ (`U+000C`) und _carriage return_ (`U+000D`) als Hex-Box, wenn sie nicht erwartet werden. (Siehe [Firefox-Bug 1099557](https://bugzil.la/1099557) für weitere Details.)

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 43                   | Ja                       |
| Developer Edition       | 43                   | Nein                     |
| Beta                    | 43                   | Nein                     |
| Release                 | 43                   | Nein                     |

- `layout.css.control-characters.visible`
  - : Setzen Sie auf `true`, um zu aktivieren.

### initial-letter Eigenschaft

Die {{cssxref("initial-letter")}} CSS-Eigenschaft ist Teil der [CSS Inline Layout](https://drafts.csswg.org/css-inline/) Spezifikation und erlaubt es Ihnen festzulegen, wie gefallene, erhobene und versenkte Initialbuchstaben angezeigt werden. (Siehe [Firefox-Bug 1223880](https://bugzil.la/1223880) für weitere Details.)

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 50                   | Nein                     |
| Developer Edition       | 50                   | Nein                     |
| Beta                    | 50                   | Nein                     |
| Release                 | 50                   | Nein                     |

- `layout.css.initial-letter.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### fit-content() Funktion

Die [`fit-content()`](/de/docs/Web/CSS/Reference/Values/fit-content_function) Funktion wie sie auf {{cssxref("width")}} und andere Größenangaben angewendet wird. Diese Funktion wird bereits gut für CSS-Grid-Layout-Spurgrößen unterstützt. (Siehe [Firefox-Bug 1312588](https://bugzil.la/1312588) für weitere Details.)

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 91                   | Nein                     |
| Developer Edition       | 91                   | Nein                     |
| Beta                    | 91                   | Nein                     |
| Release                 | 91                   | Nein                     |

- `layout.css.fit-content-function.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Scroll-gesteuerte Animationen

Früher als "scroll-gebundene Animationen" bekannt, eine [scroll-gesteuerte Animation](/de/docs/Web/CSS/Guides/Scroll-driven_animations) hängt von der Scroll-Position eines Scrollbalkens ab anstelle von Zeit oder einer anderen Dimension. Die {{cssxref('scroll-timeline-name')}} und {{cssxref('scroll-timeline-axis')}} Eigenschaften (und die {{cssxref('scroll-timeline')}} Kurzschreibweise) ermöglichen es Ihnen festzulegen, dass ein bestimmter Scrollbalken in einem bestimmten benannten Container als Quelle für eine scroll-gesteuerte Animation verwendet werden kann. Die Scroll-Zeitleiste kann dann mit einer [Animation](/de/docs/Web/CSS/Guides/Animations) verbunden werden, indem die {{cssxref('animation-timeline')}} Eigenschaft auf den Namenwert gesetzt wird, der mit `scroll-timeline-name` definiert wurde.

Bei der Verwendung der {{cssxref('scroll-timeline')}} Kurzschreibweise muss die Reihenfolge der Eigenschaftenwerte {{cssxref('scroll-timeline-name')}} gefolgt von {{cssxref('scroll-timeline-axis')}} sein. Die ausführlichen und Kurzschreibweise-Eigenschaften sind beide hinter der Präferenz verfügbar. Alternativ können Sie die {{cssxref("animation-timeline/scroll")}} funktionale Notation mit {{cssxref('animation-timeline')}} verwenden, um anzugeben, dass eine Scrollbalkenachse in einem Übergeordneten Element für die Zeitleiste verwendet wird.

Für weitere Informationen siehe [Firefox-Bug 1807685](https://bugzil.la/1807685), [Firefox-Bug 1804573](https://bugzil.la/1804573), [Firefox-Bug 1809005](https://bugzil.la/1809005), [Firefox-Bug 1676791](https://bugzil.la/1676791), [Firefox-Bug 1754897](https://bugzil.la/1754897), [Firefox-Bug 1817303](https://bugzil.la/1817303), und [Firefox-Bug 1737918](https://bugzil.la/1737918).

Die {{cssxref('timeline-scope')}}, {{cssxref('animation-range-start')}} und {{cssxref('animation-range-end')}} Eigenschaften (und die {{cssxref('animation-range')}} Kurzschreibweise) werden noch nicht unterstützt. Für weitere Informationen siehe [Firefox-Bug 1676779](https://bugzil.la/1676779).

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 136                  | Ja                       |
| Developer Edition       | 110                  | Nein                     |
| Beta                    | 110                  | Nein                     |
| Release                 | 110                  | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### prefers-reduced-transparency Media-Feature

Das CSS {{cssxref("@media/prefers-reduced-transparency")}} Media-Feature lässt Sie erkennen, ob ein Nutzer die Einstellung aktiviert hat, um die Menge an transparenten oder durchsichtigen Schichteffekten auf ihrem Gerät zu minimieren. Siehe ([Firefox-Bug 1736914](https://bugzil.la/1736914)) für weitere Details.

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 113                  | Nein                     |
| Developer Edition       | 113                  | Nein                     |
| Beta                    | 113                  | Nein                     |
| Release                 | 113                  | Nein                     |

- `layout.css.prefers-reduced-transparency.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### inverted-colors Media-Feature

Das CSS {{cssxref("@media/inverted-colors")}} Media-Feature lässt Sie erkennen, ob ein User-Agent oder das zugrunde liegende Betriebssystem Farben umkehrt. Siehe ([Firefox-Bug 1794628](https://bugzil.la/1794628)) für weitere Details.

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 114                  | Nein                     |
| Developer Edition       | 114                  | Nein                     |
| Beta                    | 114                  | Nein                     |
| Release                 | 114                  | Nein                     |

- `layout.css.inverted-colors.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Benannte View-Progress-Timelines-Eigenschaft

Die CSS {{cssxref("view-timeline-name")}} Eigenschaft ermöglicht es Ihnen, einem bestimmten Element einen Namen zu geben, der angibt, dass sein übergeordnetes Scrollelement die Quelle einer View-Progress-Timeline ist. Der Name kann dann der `animation-timeline` zugewiesen werden, die dann das zugehörige Element animiert, während es sich durch den sichtbaren Bereich seines übergeordneten Scrollelements bewegt. Siehe ([Firefox-Bug 1737920](https://bugzil.la/1737920)) für weitere Details.

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 136                  | Ja                       |
| Developer Edition       | 114                  | Nein                     |
| Beta                    | 114                  | Nein                     |
| Release                 | 114                  | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Anonyme View-Progress-Timelines-Funktion

Die CSS {{cssxref("animation-timeline/view")}} Funktion lässt Sie angeben, dass die `animation-timeline` für ein Element eine View-Progress-Timeline ist, die das Element animiert, während es sich durch den sichtbaren Bereich seines übergeordneten Scrollelements bewegt. Die Funktion definiert die Achse des Elternelements, das die Timeline liefert, zusammen mit dem Einsatz innerhalb des sichtbaren Bereichs, bei dem die Animation beginnt und endet. Siehe ([Firefox-Bug 1808410](https://bugzil.la/1808410)) für weitere Details.

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 136                  | Ja                       |
| Developer Edition       | 114                  | Nein                     |
| Beta                    | 114                  | Nein                     |
| Release                 | 114                  | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Vendor-prefixed transform properties

Die mit `-moz-` vorangestellten [CSS transform](/de/docs/Web/CSS/Guides/Transforms) Eigenschaften können deaktiviert werden, indem die `layout.css.prefixes.transforms` Präferenz auf `false` gesetzt wird. Die Absicht ist, diese zu deaktivieren, sobald die standardmäßigen CSS-Zoom-Eigenschaften gut unterstützt werden. ([Firefox-Bug 1886134](https://bugzil.la/1886134), [Firefox-Bug 1855763](https://bugzil.la/1855763)).

Speziell deaktiviert diese Präferenz die folgenden vorangestellten Eigenschaften:

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
  - : Setzen Sie auf `true`, um zu aktivieren.

### Symmetrisches `letter-spacing`

Die CSS {{cssxref("letter-spacing")}} Eigenschaft teilt jetzt den angegebenen Zeichenabstand gleichmäßig auf beiden Seiten jedes Zeichens auf. Dies ist im Gegensatz zu dem aktuellen Verhalten, bei dem der Abstand hauptsächlich auf eine Seite hinzugefügt wird. Dieser Ansatz kann die Textabstände verbessern, insbesondere in gemischt gerichteten Texten. ([Firefox-Bug 1891446](https://bugzil.la/1891446)).

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 128                  | Ja                       |
| Developer Edition       | 128                  | Ja                       |
| Beta                    | 127                  | Nein                     |
| Release                 | 127                  | Nein                     |

- `layout.css.letter-spacing.model`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Erlauben von Pseudo-Elementen nach elementgestützten Pseudo-Elementen

Es wurde begonnen, die Erlaubnis zu implementieren, [Pseudo-Elemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) wie {{cssxref("::first-letter")}} und {{cssxref("::before")}} an [elementgestützte Pseudo-Elemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements#element-backed_pseudo-elements) anzuhängen, wie z. B. {{cssxref("::details-content")}} und {{cssxref("::file-selector-button")}}.

Dies wird es den Nutzern ermöglichen, beispielsweise den ersten Buchstaben des {{htmlElement("details")}} Elements zu stylen, indem der CSS-Selektor `::details-content::first-letter` verwendet wird, oder Inhalt vor einem {{htmlElement("input")}} von [`type="file"`](/de/docs/Web/HTML/Reference/Elements/input/file) hinzuzufügen, indem der CSS-Selektor `::file-selector-button::before` verwendet wird.

Derzeit kann nur die Unterstützung für `::details-content::first-letter` mit `@supports(::details-content::first-letter)` geparst werden. Das `::file-selector-button` Pseudo-Element ist noch nicht als elementgestütztes Pseudo-Element markiert, daher gibt es noch keine Möglichkeit, dies zu testen. ([Firefox-Bug 1953557](https://bugzil.la/1953557), [Firefox-Bug 1941406](https://bugzil.la/1941406)).

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 138                  | Nein                     |
| Developer Edition       | 138                  | Nein                     |
| Beta                    | 138                  | Nein                     |
| Release                 | 138                  | Nein                     |

### `:heading` und `:heading()` Pseudo-Klassen

Die {{cssxref(":heading")}} Pseudo-Klasse ermöglicht es Ihnen, alle [Überschriftselemente](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) (`<h1>`-`<h6>`) auf einmal zu stylen, anstatt sie einzeln anzusprechen. Die {{cssxref(":heading()")}} funktionale Pseudo-Klasse ermöglicht es Ihnen, Überschriftselemente zu stylen, die eine durch Kommas getrennte Liste von ganzen Zahlen erfüllen, die die Überschriftsebenen entsprechen. ([Firefox-Bug 1974386](https://bugzil.la/1974386) & [Firefox-Bug 1984310](https://bugzil.la/1984310)).

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 142                  | Nein                     |
| Developer Edition       | 142                  | Nein                     |
| Beta                    | 142                  | Nein                     |
| Release                 | 142                  | Nein                     |

- `layout.css.heading-selector.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### `@custom-media` Regel

Die {{cssxref("@custom-media")}} CSS-Regel definiert Aliase für lange oder komplexe Medienabfragen. Anstatt die gleiche fest codierte `<media-query-list>` in mehreren `@media` Regeln zu wiederholen, kann sie einmal in einer `@custom-media` Regel definiert und im gesamten Stylesheet bei Bedarf referenziert werden. ([Firefox-Bug 1744292](https://bugzil.la/1744292)).

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 148                  | Nein                     |
| Developer Edition       | 148                  | Nein                     |
| Beta                    | 148                  | Nein                     |
| Release                 | 148                  | Nein                     |

- `layout.css.custom-media.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### `<attr-type>` Werte in `attr()` CSS-Funktion

Die {{cssxref("attr")}} CSS-Funktion unterstützt jetzt [`<attr-type>`](/de/docs/Web/CSS/Reference/Values/attr#attr-type) Werte. Dies erlaubt es Ihnen, anzugeben, wie ein Attributwert in einen CSS-Wert geparst wird und diese Werte direkt aus [`data-*`](/de/docs/Web/HTML/How_to/Use_data_attributes) zu nehmen. ([Firefox-Bug 1986631](https://bugzil.la/1986631), [Firefox-Bug 1998245](https://bugzil.la/1998245))

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 149                  | Nein                     |
| Developer Edition       | 149                  | Nein                     |
| Beta                    | 149                  | Nein                     |
| Release                 | 149                  | Nein                     |

- `layout.css.attr.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Namespaced-Attribute in `attr()` CSS-Funktion

Die {{cssxref("attr")}} CSS-Funktion akzeptiert jetzt [namespaced Attribute](/de/docs/Web/CSS/Reference/Values/attr#namespaces). Dies ermöglicht es Ihnen, Attribute von Elementen von [XML](/de/docs/Web/XML)-basierten Sprachen zu nutzen, wie [SVG](/de/docs/Web/SVG) und diese entsprechend zu stylen. ([Firefox-Bug 2014060](https://bugzil.la/2014060).

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 150                  | Nein                     |
| Developer Edition       | 150                  | Nein                     |
| Beta                    | 150                  | Nein                     |
| Release                 | 150                  | Nein                     |

- `layout.css.attr.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Absolut positionierte Elemente in Mehrspalten-Containern und beim Drucken

Absolut positionierte Elemente innerhalb von [Mehrspalten-Containern](/de/docs/Web/CSS/Guides/Multicol_layout) und beim Drucken sind nun korrekt positioniert und fragmentiert. Dies verbessert die Interoperabilität mit anderen Browsern und verhindert Layout-Probleme wie überlappenden Text oder Datenverluste. ([Firefox-Bug 2018797](https://bugzil.la/2018797)).

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 150                  | Ja                       |
| Developer Edition       | 150                  | Nein                     |
| Beta                    | 150                  | Nein                     |
| Release                 | 150                  | Nein                     |

- `layout.abspos.fragmentainer-aware-positioning.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### `@container style()` Bereichssyntax-Abfragen

Die [`@container`](/de/docs/Web/CSS/Reference/At-rules/@container) CSS-Regel [`style()`](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries) Abfragen unterstützen jetzt die _Bereichssyntax_. Dies ermöglicht es Ihnen zu überprüfen, ob ein Container über eine gültige benutzerdefinierte CSS-Eigenschaft verfügt und seinen Wert mit Vergleichsoperatoren wie `>`, `<`, `>=` und `<=` zu vergleichen und seine Kinder entsprechend zu stylen. ([Firefox-Bug 2024601](https://bugzil.la/2024601)).

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 151                  | Nein                     |
| Developer Edition       | 151                  | Nein                     |
| Beta                    | 151                  | Nein                     |
| Release                 | 151                  | Nein                     |

- `layout.css.attr.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### `field-sizing` Eigenschaft

Die {{cssxref("field-sizing")}} CSS-Eigenschaft lässt Sie das Größenverhalten von Formularelementen steuern. Diese Eigenschaft hat zwei Werte: `content` ermöglicht es Elementen, ihre Größe anzupassen, um ihrem Inhalt zu entsprechen, und `fixed` setzt eine feste Größe auf die Elemente. ([Firefox-Bug 1977176](https://bugzil.la/1977176)).

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 151                  | Ja                       |
| Developer Edition       | 151                  | Nein                     |
| Beta                    | 151                  | Nein                     |
| Release                 | 151                  | Nein                     |

- `layout.css.field-sizing.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Fix für verschachtelte scrollbare Bereiche

Diese Implementierung wurde hinzugefügt, um ein Problem zu beheben, bei dem durchscrollbare Inhalte nicht erreichbar waren. Wenn ein Scrollbalken auf `display: none;` oder `width: 0;` gesetzt ist, würden die Scrollbalken verschachtelter scrollbarer Bereiche übereinander gestapelt sein, was bedeutet, dass einige Inhalte möglicherweise nicht erreichbar wären. Dies bedeutet jedoch, dass die `@supports selector(::-webkit-scrollbar)` Abfrage `true` zurückgibt, auch wenn das [`::-webkit-scrollbar`](/de/docs/Web/CSS/Reference/Selectors/::-webkit-scrollbar) Pseudo-Element nicht wirklich unterstützt wird. ([Firefox-Bug 1977511](https://bugzil.la/1977511)).

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 151                  | Ja                       |
| Developer Edition       | 151                  | Nein                     |
| Beta                    | 151                  | Nein                     |
| Release                 | 151                  | Nein                     |

- `layout.css.fake-webkit-scrollbar.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### `<timeline-range-name>` Werte

Die CSS-Eigenschaften {{cssxref("animation-range-start")}}, {{cssxref("animation-range-end")}} und die Kurzform-Eigenschaft {{cssxref("animation-range")}} unterstützen jetzt [`<timeline-range-name>`](/de/docs/Web/CSS/Reference/Values/timeline-range-name) Werte. Diese [`<timeline-range-name>`](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names#timeline_range_names) Werte ermöglichen es Ihnen, genau anzugeben, in welchem Segment eine scroll-gesteuerte Animation stattfinden wird. ([Firefox-Bug 1804775](https://bugzil.la/1804775)).

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 151                  | Ja                       |
| Developer Edition       | 151                  | Nein                     |
| Beta                    | 151                  | Nein                     |
| Release                 | 151                  | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

## SVG

**Keine experimentellen Funktionen in diesem Release-Zyklus.**

## MathML

### `href` auf nicht-`<a>` MathML-Elemente deaktivieren

Wenn diese Funktion aktiviert ist, erstellt das globale Attribut [`href`](/de/docs/Web/MathML/Reference/Global_attributes/href) keinen Hyperlink auf MathML-Elementen außer `<a>`, was Firefox mit der [MathML Core Spezifikation](https://w3c.github.io/mathml-core/#the-a-element) in Einklang bringt, die Hyperlinks nur auf dem `<a>` Element definiert. ([Firefox-Bug 2026848](https://bugzil.la/2026848)).

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 151                  | Ja                       |
| Developer Edition       | 151                  | Nein                     |
| Beta                    | 151                  | Nein                     |
| Release                 | 151                  | Nein                     |

- `mathml.href_link_on_non_anchor_element.disabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

## JavaScript

### Mehrere Import-Maps

Unterstützung für [mehrere Import-Maps](/de/docs/Web/HTML/Reference/Elements/script/type/importmap#merging_multiple_import_maps). Diese geben Entwicklern mehr Flexibilität bei der Strukturierung und dem Laden von JavaScript-Modulen, da sie nicht alle ihre Modulzuordnungen im Voraus kennen und in einer einzigen Import-Map keine Module deklarieren müssen. ([Firefox-Bug 1916277](https://bugzil.la/1916277)).

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 150                  | Nein                     |
| Developer Edition       | 150                  | Nein                     |
| Beta                    | 150                  | Nein                     |
| Release                 | 150                  | Nein                     |

- `dom.multiple_import_maps.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

## APIs

### Vorgefertigte benutzerdefinierte Elementregister

Die Unterstützung für [vorgefertigte benutzerdefinierte Elementregister](/de/docs/Web/API/Web_components/Using_custom_elements#scoped_custom_element_registries) wird implementiert. Vorgefertigte Register erlauben einem Schattenbaum, ein unabhängiges [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry) zu erstellen, dessen Definitionen nur für diesen speziellen DOM-Unterbaum gelten. Dies kann verwendet werden, um Kollisionen zu vermeiden, bei denen mehrere Web-Components Elemente mit demselben Namen deklarieren.

Die Implementierung umfasst:

- `customElementRegistry` Eigenschaft auf [`Document`](/de/docs/Web/API/Document), [`Element`](/de/docs/Web/API/Element) und [`ShadowRoot`](/de/docs/Web/API/ShadowRoot). ([Firefox-Bug 2018900](https://bugzil.la/2018900)).

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 150                  | Nein                     |
| Developer Edition       | 150                  | Nein                     |
| Beta                    | 150                  | Nein                     |
| Release                 | 150                  | Nein                     |

- `dom.scoped-custom-element-registries.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### CSS Typed Object Model Level 1

Implementierungsarbeit hat am [CSS Typed OM Level 1](https://drafts.css-houdini.org/css-typed-om/) begonnen. Zum Beispiel wird die [`to()`](/de/docs/Web/API/CSSNumericValue/to) Methode der [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) Schnittstelle unterstützt, um einen CSS-Numeric-Wert von einer Einheit in eine andere zu konvertieren. ([Firefox-Bug 1278697](https://bugzil.la/1278697)).

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 149                  | Nein                     |
| Developer Edition       | 149                  | Nein                     |
| Beta                    | 149                  | Nein                     |
| Release                 | 149                  | Nein                     |

- `layout.css.typed-om.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Grafik: Canvas, WebGL und WebGPU

#### WebGL: Entwurfserweiterungen

Wenn diese Präferenz aktiviert ist, werden alle WebGL-Erweiterungen, die sich derzeit im "Entwurfsstatus" befinden und getestet werden, zur Verwendung freigegeben. Derzeit werden keine WebGL-Erweiterungen von Firefox getestet.

#### WebGPU API

Die [WebGPU API](/de/docs/Web/API/WebGPU_API) bietet niedrigstufigen Support für das Durchführen von Berechnungen und Grafikwiedergaben unter Verwendung der [Graphics Processing Unit](https://en.wikipedia.org/wiki/Graphics_Processing_Unit) (GPU) des Geräts oder Computers des Benutzers. Ab Version 142 ist dies unter Windows in allen Kontexten mit Ausnahme von Service-Arbeitern aktiviert. Ab Version 147 ist dies unter macOS auf Apple Silicon in allen Browser-Kontexten mit Ausnahme von Service-Arbeitern aktiviert. Für andere Plattformen wie Linux und macOS auf Intel-Silicon ist es in Nightly aktiviert. Siehe [Firefox-Bug 1602129](https://bugzil.la/1602129) für unseren Fortschritt bei dieser API.

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert?                                                          |
| ----------------------- | -------------------- | --------------------------------------------------------------------------------- |
| Nightly                 | 141                  | Ja                                                                                |
| Developer Edition       | 141                  | Nein (Ja unter Windows und macOS auf Apple Silicon, ausgenommen Service-Arbeiter) |
| Beta                    | 141                  | Nein (Ja unter Windows und macOS auf Apple Silicon, ausgenommen Service-Arbeiter) |
| Release                 | 141                  | Nein (Ja unter Windows und macOS auf Apple Silicon, ausgenommen Service-Arbeiter) |

- `dom.webgpu.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren (aktiviert in Nightly und unter Windows in allen Veröffentlichungen)
- `dom.webgpu.service-workers.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren (aktiviert in Nightly)

### WebRTC und Medien

Die folgenden experimentellen Funktionen umfassen solche, die in Medien-APIs wie der [WebRTC API](/de/docs/Web/API/WebRTC_API), der [Web Audio API](/de/docs/Web/API/Web_Audio_API), der [Media Source Extensions API](/de/docs/Web/API/Media_Source_Extensions_API), der [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API) und der [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) gefunden werden.

#### HTMLMediaElement Eigenschaften: audioTracks und videoTracks

Das Aktivieren dieser Funktion fügt die [`HTMLMediaElement.audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks) und [`HTMLMediaElement.videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks) Eigenschaften zu allen HTML-Medienelementen hinzu. Da Firefox jedoch derzeit keine Unterstützung für mehrere Audio- und Videospuren bietet, funktionieren die häufigsten Anwendungsfälle für diese Eigenschaften nicht, weshalb sie standardmäßig deaktiviert sind. Siehe [Firefox-Bug 1057233](https://bugzil.la/1057233) für weitere Details.

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 33                   | Nein                     |
| Developer Edition       | 33                   | Nein                     |
| Beta                    | 33                   | Nein                     |
| Release                 | 33                   | Nein                     |

- `media.track.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

#### Asynchrones Hinzufügen und Entfernen von SourceBuffer

Dies fügt die von Versprechen basierten Methoden [`appendBufferAsync()`](/de/docs/Web/API/SourceBuffer/appendBufferAsync) und [`removeAsync()`](/de/docs/Web/API/SourceBuffer/removeAsync) zum Hinzufügen und Entfernen von Mediensource-Buffer zur [`SourceBuffer`](/de/docs/Web/API/SourceBuffer) Schnittstelle. Siehe [Firefox-Bug 1280613](https://bugzil.la/1280613) und [Firefox-Bug 778617](https://bugzil.la/778617) für weitere Informationen.

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 62                   | Nein                     |
| Developer Edition       | 62                   | Nein                     |
| Beta                    | 62                   | Nein                     |
| Release                 | 62                   | Nein                     |

- `media.mediasource.experimental.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

#### AVIF Compliance-Striktheit

Die Präferenz `image.avif.compliance_strictness` kann verwendet werden, um die _Striktheit_ zu kontrollieren, die beim Verarbeiten von [AVIF](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) Bildern angewendet wird. Dies ermöglicht es Firefox-Benutzern, Bilder anzuzeigen, die in anderen Browsern gerendert werden, auch wenn sie nicht streng konform sind.

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardwert |
| ----------------------- | -------------------- | ------------ |
| Nightly                 | 92                   | 1            |
| Developer Edition       | 92                   | 1            |
| Beta                    | 92                   | 1            |
| Release                 | 92                   | 1            |

- `image.avif.compliance_strictness`
  - : Numerischer Wert, der ein _Striktheits_ level angibt. Erlaubte Werte sind:
    - `0`: Permissiv. Akzeptiert Bilder mit Spezifikationsverletzungen in Empfehlungen ("sollte" Sprache) und Anforderungen ("muss" Sprache), vorausgesetzt, sie können sicher oder eindeutig interpretiert werden.
    - `1` **(Standard)**: Gemischt. Ablehnen von Verstößen gegen Anforderungen ("muss"), aber Zulassung von Verstößen gegen Empfehlungen ("sollte").
    - `2`: Strikt. Ablehnen von Verstößen gegen spezifizierte Anforderungen oder Empfehlungen.

#### JPEG XL Unterstützung

Firefox unterstützt [JPEG XL](https://jpeg.org/jpegxl/) Bilder, wenn diese Funktion aktiviert ist. Siehe [Firefox-Bug 1539075](https://bugzil.la/1539075) für weitere Details.

Beachten Sie, wie unten gezeigt wird, dass die Funktion nur in Nightly-Builds verfügbar ist (unabhängig davon, ob die Präferenz gesetzt ist). In Firefox 149 wurde der vorherige C++ [JPEG XL](https://jpeg.org/jpegxl/) Bilddecoder durch eine neue Rust-basierte Implementierung ersetzt, die die `jxl-rs` Bibliothek verwendet ([Firefox-Bug 1986393](https://bugzil.la/1986393)).

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 90                   | Nein                     |
| Developer Edition       | –                    | –                        |
| Beta                    | –                    | –                        |
| Release                 | –                    | –                        |

- `image.jxl.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### WebVR API (Deaktiviert)

Die veraltete [WebVR API](/de/docs/Web/API/WebVR_API) ist auf dem Weg zur Entfernung. Sie ist standardmäßig in allen Builds deaktiviert [Firefox-Bug 1750902](https://bugzil.la/1750902).

| Veröffentlichungs-Kanal | Entfernte Version | Standardmäßig aktiviert? |
| ----------------------- | ----------------- | ------------------------ |
| Nightly                 | 98                | Nein                     |
| Developer Edition       | 98                | Nein                     |
| Beta                    | 98                | Nein                     |
| Release                 | 98                | Nein                     |

- `dom.vr.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### GeometryUtils Methoden: convertPointFromNode(), convertRectFromNode(), und convertQuadFromNode()

Die `GeometryUtils` Methoden `convertPointFromNode()`, `convertRectFromNode()`, und `convertQuadFromNode()` übertragen den gegebenen Punkt, das Rechteck oder das Viereck von dem [`Node`](/de/docs/Web/API/Node), auf dem sie aufgerufen werden, zu einem anderen Knoten. (Siehe [Firefox-Bug 918189](https://bugzil.la/918189) für weitere Details.)

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 31                   | Nein                     |
| Developer Edition       | 31                   | Nein                     |
| Beta                    | 31                   | Nein                     |
| Release                 | 31                   | Nein                     |

- `layout.css.convertFromNode.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### GeometryUtils Methode: getBoxQuads()

Die `GeometryUtils` Methode `getBoxQuads()` gibt die CSS-Boxen für einen [`Node`](/de/docs/Web/API/Node) relativ zu jedem anderen Knoten oder Viewport zurück. (Siehe [Firefox-Bug 917755](https://bugzil.la/917755) für weitere Details.)

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 31                   | Nein                     |
| Developer Edition       | 31                   | Nein                     |
| Beta                    | 31                   | Nein                     |
| Release                 | 31                   | Nein                     |

- `layout.css.getBoxQuads.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Payment Request API

#### Primäre Zahlungsabwicklung

Die [Payment Request API](/de/docs/Web/API/Payment_Request_API) bietet Unterstützung für die Abwicklung von web-basierten Zahlungen innerhalb von Webinhalten oder Apps. Aufgrund eines Fehlers, der während der Tests der Benutzeroberfläche auftrat, haben wir beschlossen, die Einführung dieser API zu verschieben, während Diskussionen über mögliche Änderungen der API stattfinden. Die Arbeiten sind im Gange. (Siehe [Firefox-Bug 1318984](https://bugzil.la/1318984) für weitere Details.)

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 55                   | Nein                     |
| Developer Edition       | 55                   | Nein                     |
| Beta                    | 55                   | Nein                     |
| Release                 | 55                   | Nein                     |

- `dom.payments.request.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.
- `dom.payments.request.supportedRegions`
  - : Ländercodes als durch Kommas getrennte Zulassungsliste von Regionen (z.B. `US, CA`).

### WebShare API

Die [Web Share API](/de/docs/Web/API/Web_Share_API) ermöglicht das Teilen von Dateien, URLs und anderen Daten von einer Website. Diese Funktion ist auf Android in allen Builds aktiviert, aber hinter einer Präferenz auf dem Desktop (außer wie unten angegeben).

| Veröffentlichungs-Kanal | Versionsänderung | Standardmäßig aktiviert?                    |
| ----------------------- | ---------------- | ------------------------------------------- |
| Nightly                 | 71               | Nein (Standard). Ja (Windows ab Version 92) |
| Developer Edition       | 71               | Nein                                        |
| Beta                    | 71               | Nein                                        |
| Release                 | 71               | Nein (Desktop). Ja (Android).               |

- `dom.webshare.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Notifications API

Benachrichtigungen haben die [`requireInteraction`](/de/docs/Web/API/Notification/requireInteraction) Eigenschaft standardmäßig auf Windows-Systemen und in der Nightly-Version aktiviert ([Firefox-Bug 1794475](https://bugzil.la/1794475)).

| Veröffentlichungs-Kanal | Versionsänderung | Standardmäßig aktiviert? |
| ----------------------- | ---------------- | ------------------------ |
| Nightly                 | 117              | Ja                       |
| Developer Edition       | 117              | Nein                     |
| Beta                    | 117              | Nein                     |
| Release                 | 117              | Nur Windows              |

- `dom.webnotifications.requireinteraction.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

## Sicherheit und Datenschutz

### Markierung unsicherer Seiten

Die beiden `security.insecure_connection_text_*` Präferenzen fügen im Adressfeld neben dem traditionellen Schlosssymbol einen "Nicht sicher"-Text hinzu, wenn eine Seite unsicher geladen wird (d.h. über {{Glossary("HTTP", "HTTP")}} anstelle von {{Glossary("HTTPS", "HTTPS")}}). Die `browser.urlbar.trimHttps` Präferenz trimmt das `https:` Präfix von Adressleisten-URLs. Siehe [Firefox-Bug 1853418](https://bugzil.la/1853418) für weitere Details.

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 121                  | Ja                       |
| Developer Edition       | 60                   | Nein                     |
| Beta                    | 60                   | Nein                     |
| Release                 | 60                   | Nein                     |

- `security.insecure_connection_text.enabled`
  - : Setzen Sie auf `true`, um die Textmarkierung für den normalen Browsing-Modus zu aktivieren.
- `security.insecure_connection_text.pbmode.enabled`
  - : Setzen Sie auf `true`, um die Textmarkierung für den privaten Browsing-Modus zu aktivieren.
- `browser.urlbar.trimHttps`
  - : Setzen Sie auf `true`, um das `https:` Präfix von Adressleisten-URLs zu trimmen.

### Eingrenzung von Inhalten für Erwachsene mit `<meta name="rating">`

Das nicht standardmäßige [`<meta name="rating">`](/de/docs/Web/HTML/Reference/Elements/meta) Element kann auf einer Webseite enthalten sein, um den Inhalt der Seite als eingeschränkt/erwachsen zu kennzeichnen. Zum Zeitpunkt des Schreibens gibt es zwei mögliche `content` Werte, `adult` ([definiert von Google](https://developers.google.com/search/docs/specialty/explicit/guidelines#add-metadata)) und `RTA-5042-1996-1400-1577-RTA` ([definiert von ASACP](https://www.rtalabel.org/?content=howto#top)), die dieselbe Wirkung haben (weitere Optionen können in Zukunft hinzugefügt werden).

Die folgenden `<meta>` Elemente sind gleichwertig:

```html
<meta name="rating" content="adult" />
<meta name="rating" content="RTA-5042-1996-1400-1577-RTA" />
```

Browser, die dieses Element erkennen, können dann Schritte unternehmen, um Nutzern den Zugriff auf den Inhalt zu sperren. Die Implementierung von Firefox ersetzt die Seite durch den Inhalt von `about:restricted`, der dem Benutzer erklärt, dass er versucht, auf eingeschränkte Inhalte zuzugreifen, warum er diese nicht sehen kann, und ihm eine Zurück-Schaltfläche gibt, um dorthin zurückzukehren, von wo er gekommen ist.

Siehe [Firefox-Bug 1991135](https://bugzil.la/1991135) für weitere Details.

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 146                  | Nein                     |
| Developer Edition       | 146                  | Nein                     |
| Beta                    | 146                  | Nein                     |
| Release                 | 146                  | Nein                     |

- `security.restrict_to_adults.always`
  - : Setzen Sie auf `true`, um den Zugriff auf Webseiten einzuschränken, die sich selbst als erwachsen kennzeichnen, indem sie ein `<meta name="rating">` Element enthalten.
- `security.restrict_to_adults.respect_platform`
  - : Setzen Sie auf `true`, um den Zugriff auf Webseiten einzuschränken, die sich selbst als erwachsen kennzeichnen, indem sie ein `<meta name="rating">` Element nur dann enthalten, wenn angemessene Kindersicherungen auf dem zugrunde liegenden Betriebssystem festgelegt sind (z. B. wenn die macOS _Inhalt & Datenschutz_-Einstellungen so festgelegt sind, dass explizite Webinhalte eingeschränkt werden).

### Permissions Policy / Feature Policy

[Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) ermöglicht es Webentwicklern, das Verhalten bestimmter Funktionen und APIs im Browser selektiv zu aktivieren, zu deaktivieren und zu verändern. Es ist ähnlich wie CSP, aber steuert Funktionen anstatt das Sicherheitsverhalten. Dies ist in Firefox als **Feature Policy** implementiert, der Name, der in einer früheren Version der Spezifikation verwendet wurde.

Beachten Sie, dass unterstützte Richtlinien durch das [`allow`](/de/docs/Web/HTML/Reference/Elements/iframe#allow) Attribut von `<iframe>` Elementen gesetzt werden können, auch wenn die Benutzerpräferenz nicht gesetzt ist.

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 65                   | Nein                     |
| Developer Edition       | 65                   | Nein                     |
| Beta                    | 65                   | Nein                     |
| Release                 | 65                   | Nein                     |

- `dom.security.featurePolicy.header.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Privacy Preserving Attribution API (PPA)

[PPA API](https://support.mozilla.org/en-US/kb/privacy-preserving-attribution) bietet eine Alternative zur Nutzerverfolgung für die Anzeigezuordnung unter Verwendung des neuen `navigator.privateAttribution` Objekts mit den Methoden `saveImpression()` und `measureConversion()`. Lesen Sie mehr über PPA [im ursprünglichen Erklärer](https://github.com/mozilla/explainers/tree/main/archive/ppa-experiment) und der [vorgeschlagenen Spezifikation](https://w3c.github.io/ppa/). Dieses Experiment kann für Websites über [origin trial](https://wiki.mozilla.org/Origin_Trials) oder im Browser durch Setzen der Präferenz auf `1` aktiviert werden. ([Firefox-Bug 1900929](https://bugzil.la/1900929)).

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 128                  | Nein                     |
| Developer Edition       | 128                  | Nein                     |
| Beta                    | 128                  | Nein                     |
| Release                 | 128                  | Nein                     |

- `dom.origin-trials.private-attribution.state`
  - : Setzen Sie auf `true`, um zu aktivieren.

## HTTP

### Integritätsrichtlinie für Stylesheet-Ressourcen

Die {{httpheader("Integrity-Policy")}} und {{httpheader("Integrity-Policy-Report-Only")}} HTTP-Header werden jetzt für Style-Ressourcen unterstützt. Diese ermöglichen es Websites, entweder [Subresource-Integritätsgarantien](/de/docs/Web/Security/Defenses/Subresource_Integrity) für Styles durchzusetzen oder nur Verstöße gegen die Richtlinie zu melden. Beachten Sie, dass Firefox Meldeendpunkte ignoriert und Verstöße in die Entwicklerkonsole protokolliert. Wenn `Integrity-Policy` verwendet wird, blockiert der Browser das Laden von Styles, auf die in einem {{HTMLElement("link")}} Element mit [`rel="stylesheet"`](/de/docs/Web/HTML/Reference/Attributes/rel#stylesheet) verwiesen wird, das entweder das [`integrity`](/de/docs/Web/HTML/Reference/Elements/script#integrity) Attribut fehlt oder einen Integritätsschlüssel hat, der nicht mit der Ressource auf dem Server übereinstimmt. ([Firefox-Bug 1976656](https://bugzil.la/1976656)).

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 142                  | Nein                     |
| Developer Edition       | 142                  | Nein                     |
| Beta                    | 142                  | Nein                     |
| Release                 | 142                  | Nein                     |

- `security.integrity_policy.stylesheet.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Idempotency-Key

Der {{httpheader("Idempotency-Key")}} HTTP-Anforderungsheader kann von der Client-Seite einer Website verwendet werden, um {{HTTPMethod("POST")}} oder {{HTTPMethod("PATCH")}} Anfragen {{Glossary("idempotent", "idempotent")}} zu machen, wenn er mit einem Server verwendet wird, der es unterstützt. Die Spezifikation gibt an, dass der Server dokumentieren und anzeigen sollte, welche Endpunkte diesen Header erfordern, das Format des Schlüssels und erwartete Fehlermeldungen.

Firefox fügt automatisch den Header mit einem eindeutigen Schlüssel für jede neue `POST` Anfrage hinzu, wenn er nicht bereits von der Client-Seite des Seitencodes hinzugefügt wurde. Dies vereinfacht den auf der Client-Seite erforderlichen Code, um mit Servern zu arbeiten, die die Funktion unterstützen.

([Firefox-Bug 1830022](https://bugzil.la/1830022)).

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 135                  | Nein                     |
| Developer Edition       | 135                  | Nein                     |
| Beta                    | 135                  | Nein                     |
| Release                 | 135                  | Nein                     |

- `network.http.idempotencyKey.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Accept-Header mit MIME-Typ image/jxl

Der HTTP [`Accept`](/de/docs/Web/HTTP/Reference/Headers/Accept) Header in [Standardanforderungen und Bildanforderungen](/de/docs/Web/HTTP/Guides/Content_negotiation/List_of_default_Accept_values) kann über eine Präferenz konfiguriert werden, um Unterstützung für den `image/jxl` MIME-Typ anzuzeigen.

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 128                  | Nein                     |
| Developer Edition       | 128                  | Nein                     |
| Beta                    | 128                  | Nein                     |
| Release                 | 128                  | Nein                     |

- `image.jxl.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### SameSite=Lax standardmäßig

[`SameSite` Cookies](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) haben den Standardwert `Lax`. Mit dieser Einstellung werden Cookies nur gesendet, wenn ein Benutzer zur Ursprungssite navigiert, nicht für quellenübergreifende Subanfragen, um Bilder oder Frames in eine Drittanbieterseite zu laden. Für weitere Einzelheiten siehe [Firefox-Bug 1617609](https://bugzil.la/1617609).

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 69                   | Nein                     |
| Developer Edition       | 69                   | Nein                     |
| Beta                    | 69                   | Nein                     |
| Release                 | 69                   | Nein                     |

- `network.cookie.sameSite.laxByDefault`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Access-Control-Allow-Headers-Wildcard umfasst nicht Authorization

Der [`Access-Control-Allow-Headers`](/de/docs/Web/HTTP/Reference/Headers/Access-Control-Allow-Headers) ist ein Antwort-Header auf eine {{Glossary("Preflight_request", "CORS-Preflight-Anfrage")}}, die angibt, welche Anforderungsheader in die endgültige Anforderung aufgenommen werden dürfen. Die Antwortanweisung kann ein Wildcard (`*`) enthalten, welches angibt, dass die endgültige Anforderung alle Header außer dem `Authorization`-Header enthalten darf.

Standardmäßig fügt Firefox den `Authorization`-Header in die endgültige Anforderung ein, nachdem eine Antwort mit `Access-Control-Allow-Headers: *` erhalten wurde. Setzen Sie die Präferenz auf `false`, um sicherzustellen, dass Firefox den `Authorization`-Header nicht einschließt. Für weitere Einzelheiten siehe [Firefox-Bug 1687364](https://bugzil.la/1687364).

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 115                  | Ja                       |
| Developer Edition       | 115                  | Ja                       |
| Beta                    | 115                  | Ja                       |
| Release                 | 115                  | Ja                       |

- `network.cors_preflight.authorization_covered_by_wildcard`
  - : Setzen Sie auf `true`, um zu aktivieren.

## Entwicklerwerkzeuge

Die Entwicklerwerkzeuge von Mozilla entwickeln sich ständig weiter. Wir experimentieren mit neuen Ideen, fügen neue Funktionen hinzu und testen sie in den Nightly- und Developer Edition-Kanälen, bevor wir sie zu Beta und Release durchlassen. Die untenstehenden Funktionen sind die aktuellen experimentellen Entwicklerwerkzeugfunktionen.

**Keine experimentellen Funktionen in diesem Release-Zyklus.**

## Siehe auch

- [Firefox Entwickler Versionshinweise](/de/docs/Mozilla/Firefox/Releases)
- [Firefox Nightly](https://www.firefox.com/en-US/channel/desktop/)
- [Firefox Developer Edition](https://www.firefox.com/en-US/channel/desktop/developer/)
