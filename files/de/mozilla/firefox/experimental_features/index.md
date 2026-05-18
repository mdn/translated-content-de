---
title: Experimentelle Funktionen in Firefox
short-title: Experimentelle Funktionen
slug: Mozilla/Firefox/Experimental_features
l10n:
  sourceCommit: 0ddcc606768da1561015c158dd4d6dde5af69487
---

Diese Seite listet experimentelle und teilweise implementierte Funktionen von Firefox auf, einschließlich sich entwickelnder oder vorgeschlagener Webplattform-Standards. Jeder Eintrag unten enthält Informationen über die Builds, in denen eine Funktion enthalten ist (Nightly, Beta, Developer Edition oder Release), ob sie standardmäßig aktiviert ist oder nicht, und den Namen der **Einstellung**, die Sie zur Aktivierung oder Konfiguration der Funktion verwenden können. Die Beschreibung jeder Funktion enthält außerdem Links zu den relevanten [Bugzilla-Bugs](https://bugzilla.mozilla.org), die die Funktion implementieren oder aktivieren. Diese Informationen ermöglichen es Ihnen, experimentelle Funktionen auszuprobieren und Feedback zu geben, bevor sie offiziell veröffentlicht werden.

Im Hinblick auf den Lebenszyklus tauchen neue Funktionen üblicherweise zuerst in [Nightly](https://www.firefox.com/en-US/channel/desktop/#nightly) auf, wo sie oft standardmäßig aktiviert sind, um frühes Feedback und Tests zu erhalten. Wenn keine größeren Probleme festgestellt werden, werden sie in [Beta](https://www.firefox.com/en-US/channel/desktop/#beta) und [Developer Edition](https://www.firefox.com/en-US/channel/desktop/developer/) Vorabversionen aufgenommen. Schließlich werden genehmigte Funktionen im [stabilen Release](https://www.firefox.com/en-US/) Kanal ausgeliefert. Wenn eine Funktion in einem Release standardmäßig aktiviert wird, gilt sie nicht mehr als experimentell und wird von dieser Seite entfernt.

Um diese Funktionen zu aktivieren, geben Sie `about:config` in die Adressleiste von Firefox ein, suchen Sie die zugehörige **Einstellung** und ändern Sie deren Wert, der normalerweise zwischen `true` und `false` umgeschaltet wird. Je nach Funktion müssen Sie möglicherweise den Browser neu starten, damit die Änderung wirksam wird. Lesen Sie den [Firefox-Konfigurationseditor](https://support.mozilla.org/en-US/kb/about-config-editor-firefox) Hilfeartikel für weitere Informationen zur Verwaltung von Einstellungen in Firefox.

## HTML

### Layout für input type="search"

Das Layout für `input type="search"` wurde aktualisiert. Dies führt dazu, dass ein Suchfeld ein Löschsymbol hat, sobald jemand beginnt, darin zu tippen, um die Implementierungen anderer Browser anzupassen. (Siehe [Firefox-Bug 558594](https://bugzil.la/558594) für weitere Details.)

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 81                   | Nein                     |
| Developer Edition       | 81                   | Nein                     |
| Beta                    | 81                   | Nein                     |
| Release                 | 81                   | Nein                     |

- `layout.forms.input-type-search.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Umschalten der Passwortanzeige

HTML-Passworteingabeelemente ([`<input type="password">`](/de/docs/Web/HTML/Reference/Elements/input/password)) enthalten ein "Auge"-Symbol, das umgeschaltet werden kann, um den Passworttext anzuzeigen oder zu verbergen ([Firefox-Bug 502258](https://bugzil.la/502258)).

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 96                   | Nein                     |
| Developer Edition       | 96                   | Nein                     |
| Beta                    | 96                   | Nein                     |
| Release                 | 96                   | Nein                     |

- `layout.forms.reveal-password-button.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Zeitauswahl in `datetime-local` und `time` Eingabeelementen

Die HTML-Eingabeelemente [`<input type="datetime-local">`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local) und [`<input type="time">`](/de/docs/Web/HTML/Reference/Elements/input/time) unterstützen eine Zeitauswahl. ([Firefox-Bug 1726108](https://bugzil.la/1726108)).

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 144                  | Nein                     |
| Developer Edition       | 144                  | Nein                     |
| Beta                    | 144                  | Nein                     |
| Release                 | 144                  | Nein                     |

- `dom.forms.datetime.timepicker`
  - : Auf `true` setzen, um zu aktivieren.

### `alpha` und `colorspace` Attribute in `color` Eingabeelementen

Das HTML-Eingabeelement [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color) unterstützt die Attribute [`alpha`](/de/docs/Web/HTML/Reference/Elements/input/color#alpha) & [`colorspace`](/de/docs/Web/HTML/Reference/Elements/input/color#colorspace). ([Firefox-Bug 1919718](https://bugzil.la/1919718)).

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 149                  | Ja                       |
| Developer Edition       | -                    | -                        |
| Beta                    | -                    | -                        |
| Release                 | -                    | -                        |

- `dom.forms.html_color_picker.enabled`
  - : Auf `true` setzen, um zu aktivieren.

## CSS

### Hex-Codes zur Anzeige freier Steuerzeichen

Diese Funktion rendert Steuerzeichen (Unicode-Kategorie Cc) außer _Tab_ (`U+0009`), _Zeilenumbruch_ (`U+000A`), _Formularumbruch_ (`U+000C`), und _Wagenrücklauf_ (`U+000D`) als Hex-Code, wenn sie nicht erwartet werden. (Siehe [Firefox-Bug 1099557](https://bugzil.la/1099557) für weitere Details.)

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 43                   | Ja                       |
| Developer Edition       | 43                   | Nein                     |
| Beta                    | 43                   | Nein                     |
| Release                 | 43                   | Nein                     |

- `layout.css.control-characters.visible`
  - : Auf `true` setzen, um zu aktivieren.

### initial-letter Eigenschaft

Die {{cssxref("initial-letter")}} CSS-Eigenschaft ist Teil der [CSS Inline Layout](https://drafts.csswg.org/css-inline/) Spezifikation und ermöglicht es, anzugeben, wie abgesetzte, gehobene und gesunkene Anfangsbuchstaben angezeigt werden. (Siehe [Firefox-Bug 1223880](https://bugzil.la/1223880) für weitere Details.)

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 50                   | Nein                     |
| Developer Edition       | 50                   | Nein                     |
| Beta                    | 50                   | Nein                     |
| Release                 | 50                   | Nein                     |

- `layout.css.initial-letter.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### fit-content() Funktion

Die [`fit-content()`](/de/docs/Web/CSS/Reference/Values/fit-content_function) Funktion in Bezug auf {{cssxref("width")}} und andere Größenangabe-Eigenschaften. Diese Funktion wird bereits gut unterstützt für das CSS Grid Layout Track Sizing. (Siehe [Firefox-Bug 1312588](https://bugzil.la/1312588) für weitere Details.)

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 91                   | Nein                     |
| Developer Edition       | 91                   | Nein                     |
| Beta                    | 91                   | Nein                     |
| Release                 | 91                   | Nein                     |

- `layout.css.fit-content-function.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Scrollgesteuerte Animationen

Früher als "scroll-verknüpfte Animationen" bezeichnet, hängt eine [scrollgesteuerte Animation](/de/docs/Web/CSS/Guides/Scroll-driven_animations) von der Scrollposition eines Scrollbalkens anstelle von Zeit oder einer anderen Dimension ab. Die {{cssxref('scroll-timeline-name')}} und {{cssxref('scroll-timeline-axis')}} Eigenschaften (und die {{cssxref('scroll-timeline')}} Kurzschrift-Eigenschaft) erlauben es, anzugeben, dass ein bestimmter Scrollbalken in einem bestimmten benannten Container als Quelle für eine scrollgesteuerte Animation verwendet werden kann. Der Scroll-Timeline kann dann mit einer [Animation](/de/docs/Web/CSS/Guides/Animations) verbunden werden, indem die {{cssxref('animation-timeline')}} Eigenschaft auf den mit `scroll-timeline-name` definierten Namenwert gesetzt wird.

Bei der Verwendung der {{cssxref('scroll-timeline')}} Kurzschrift-Eigenschaft muss die Reihenfolge der Eigenschaftswerte {{cssxref('scroll-timeline-name')}} gefolgt von {{cssxref('scroll-timeline-axis')}} sein. Die Langschrift- und Kurzschrift-Eigenschaften sind beide hinter der Einstellung verfügbar. Alternativ können Sie die {{cssxref("animation-timeline/scroll")}} Funktionsnotierung mit {{cssxref('animation-timeline')}} verwenden, um anzugeben, dass eine Scrollbalkenachse in einem übergeordneten Element für die Timeline verwendet wird.

Weitere Informationen finden Sie im [Firefox-Bug 1807685](https://bugzil.la/1807685), [Firefox-Bug 1804573](https://bugzil.la/1804573), [Firefox-Bug 1809005](https://bugzil.la/1809005), [Firefox-Bug 1676791](https://bugzil.la/1676791), [Firefox-Bug 1754897](https://bugzil.la/1754897), [Firefox-Bug 1817303](https://bugzil.la/1817303) und [Firefox-Bug 1737918](https://bugzil.la/1737918).

Die {{cssxref('timeline-scope')}}, {{cssxref('animation-range-start')}} und {{cssxref('animation-range-end')}} Eigenschaften (und die {{cssxref('animation-range')}} Kurzschrift-Eigenschaft) werden noch nicht unterstützt. Weitere Informationen siehe [Firefox-Bug 1676779](https://bugzil.la/1676779).

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 136                  | Ja                       |
| Developer Edition       | 110                  | Nein                     |
| Beta                    | 110                  | Nein                     |
| Release                 | 110                  | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### prefers-reduced-transparency Medienmerkmal

Das CSS {{cssxref("@media/prefers-reduced-transparency")}} Medienmerkmal ermöglicht es Ihnen zu erkennen, ob ein Benutzer die Einstellung aktiviert hat, um die Menge an transparenten oder transluzenten Schichteffekten auf seinem Gerät zu minimieren. Siehe ([Firefox-Bug 1736914](https://bugzil.la/1736914)) für weitere Details.

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 113                  | Nein                     |
| Developer Edition       | 113                  | Nein                     |
| Beta                    | 113                  | Nein                     |
| Release                 | 113                  | Nein                     |

- `layout.css.prefers-reduced-transparency.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### inverted-colors Medienmerkmal

Das CSS {{cssxref("@media/inverted-colors")}} Medienmerkmal ermöglicht es Ihnen zu erkennen, ob ein Benutzeragent oder das zugrunde liegende Betriebssystem Farben invertiert. Siehe ([Firefox-Bug 1794628](https://bugzil.la/1794628)) für weitere Details.

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 114                  | Nein                     |
| Developer Edition       | 114                  | Nein                     |
| Beta                    | 114                  | Nein                     |
| Release                 | 114                  | Nein                     |

- `layout.css.inverted-colors.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Eigenschaft für benannte Ansichtsfortschrittstimen

Die CSS {{cssxref("view-timeline-name")}} Eigenschaft ermöglicht es Ihnen, einem bestimmten Element einen Namen zu geben, der angibt, dass sein übergeordnetes Scrolling-Element die Quelle einer Ansichtsfortschrittstimeline ist. Der Name kann dann dem `animation-timeline` zugewiesen werden, welches das zugehörige Element animiert, während es sich durch den sichtbaren Bereich seines übergeordneten Scrolling-Elements bewegt. Siehe ([Firefox-Bug 1737920](https://bugzil.la/1737920)) für weitere Details.

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 136                  | Ja                       |
| Developer Edition       | 114                  | Nein                     |
| Beta                    | 114                  | Nein                     |
| Release                 | 114                  | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Anonyme Ansichtsfortschrittstimen Funktion

Die CSS {{cssxref("animation-timeline/view")}} Funktion ermöglicht es zu spezifizieren, dass die `animation-timeline` für ein Element eine Ansichtsfortschrittstimeline ist, die das Element animiert, während es sich durch den sichtbaren Bereich seines übergeordneten Scrolling-Elements bewegt. Die Funktion definiert die Achse des übergeordneten Elements, die die Timeline liefert, sowie den Abschnitt innerhalb des sichtbaren Bereichs, bei dem die Animation beginnt und endet. Siehe ([Firefox-Bug 1808410](https://bugzil.la/1808410)) für weitere Details.

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 136                  | Ja                       |
| Developer Edition       | 114                  | Nein                     |
| Beta                    | 114                  | Nein                     |
| Release                 | 114                  | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Anbieterpräfixe transform Eigenschaften

Die mit `-moz-` vorangestellten [CSS transform](/de/docs/Web/CSS/Guides/Transforms) Eigenschaften können deaktiviert werden, indem die `layout.css.prefixes.transforms` Einstellung auf `false` gesetzt wird. Ziel ist es, diese zu deaktivieren, sobald die standardmäßigen CSS-Zoomeigenschaften gut unterstützt werden. ([Firefox-Bug 1886134](https://bugzil.la/1886134), [Firefox-Bug 1855763](https://bugzil.la/1855763)).

Konkret deaktiviert diese Einstellung die folgenden vorangestellten Eigenschaften:

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

### Symmetrisches `letter-spacing`

Die CSS {{cssxref("letter-spacing")}} Eigenschaft teilt jetzt den angegebenen Buchstabenabstand gleichmäßig auf beiden Seiten jedes Zeichens auf. Dies unterscheidet sich vom aktuellen Verhalten, bei dem der Abstand hauptsächlich auf einer Seite hinzugefügt wird. Dieser Ansatz kann die Textabstände verbessern, insbesondere bei Texten mit gemischter Richtung.
([Firefox-Bug 1891446](https://bugzil.la/1891446)).

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 128                  | Ja                       |
| Developer Edition       | 128                  | Ja                       |
| Beta                    | 127                  | Nein                     |
| Release                 | 127                  | Nein                     |

- `layout.css.letter-spacing.model`
  - : Auf `true` setzen, um zu aktivieren.

### Erlaube Pseudo-Elemente nach elementgestützten Pseudo-Elementen

Es wurde begonnen, Unterstützung hinzuzufügen, um [Pseudo-Elemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) wie {{cssxref("::first-letter")}} und {{cssxref("::before")}} an [elementgestützte Pseudo-Elemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements#element-backed_pseudo-elements) wie {{cssxref("::details-content")}} und {{cssxref("::file-selector-button")}} anzuhängen.

Dies ermöglicht es Benutzer:innen zum Beispiel, den ersten Buchstaben des {{htmlElement("details")}} Elements mit dem CSS-Selektor `::details-content::first-letter` zu stylen oder Inhalte vor einem {{HTMLElement("input") }} von [`type="file"`](/de/docs/Web/HTML/Reference/Elements/input/file) mit dem CSS-Selektor `::file-selector-button::before` hinzuzufügen.

Derzeit kann nur Unterstützung für `::details-content::first-letter` mithilfe von `@supports(::details-content::first-letter)` geparst werden. Das `::file-selector-button` Pseudo-Element ist noch nicht als elementgestütztes Pseudo-Element markiert, daher gibt es keine Möglichkeit, dies zu testen. ([Firefox-Bug 1953557](https://bugzil.la/1953557), [Firefox-Bug 1941406](https://bugzil.la/1941406)).

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 138                  | Nein                     |
| Developer Edition       | 138                  | Nein                     |
| Beta                    | 138                  | Nein                     |
| Release                 | 138                  | Nein                     |

### `:heading` und `:heading()` Pseudo-Klassen

Die {{cssxref(":heading")}} Pseudo-Klasse ermöglicht es, alle [Überschriftselemente](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) (`<h1>`-`<h6>`) auf einmal zu stylen, anstatt sie einzeln zu adressieren. Die {{cssxref(":heading()")}} funktionale Pseudo-Klasse erlaubt es, Überschriftselemente zu stylen, die einer durch Kommas getrennten Liste von ganzen Zahlen entsprechen, die die Überschriftenebenen darstellen. ([Firefox-Bug 1974386](https://bugzil.la/1974386) & [Firefox-Bug 1984310](https://bugzil.la/1984310)).

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 142                  | Nein                     |
| Developer Edition       | 142                  | Nein                     |
| Beta                    | 142                  | Nein                     |
| Release                 | 142                  | Nein                     |

- `layout.css.heading-selector.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### `@custom-media` Regel

Die {{cssxref("@custom-media")}} CSS Regel definiert Aliase für lange oder komplexe Medienabfragen. Anstatt dieselbe fest kodierte `<media-query-list>` in mehreren `@media` Regeln zu wiederholen, kann sie einmal in einer `@custom-media` Regel definiert und im gesamten Stylesheet bei Bedarf referenziert werden. ([Firefox-Bug 1744292](https://bugzil.la/1744292)).

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 148                  | Nein                     |
| Developer Edition       | 148                  | Nein                     |
| Beta                    | 148                  | Nein                     |
| Release                 | 148                  | Nein                     |

- `layout.css.custom-media.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### `<attr-type>` Werte in `attr()` CSS Funktion

Die {{cssxref("attr")}} CSS Funktion unterstützt nun [`<attr-type>`](/de/docs/Web/CSS/Reference/Values/attr#attr-type) Werte. Dies ermöglicht es, anzugeben, wie ein Attributwert in einen CSS-Wert geparst wird und diese Werte direkt von [`data-*`](/de/docs/Web/HTML/How_to/Use_data_attributes) zu übernehmen. ([Firefox-Bug 1986631](https://bugzil.la/1986631), [Firefox-Bug 1998245](https://bugzil.la/1998245))

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 149                  | Nein                     |
| Developer Edition       | 149                  | Nein                     |
| Beta                    | 149                  | Nein                     |
| Release                 | 149                  | Nein                     |

- `layout.css.attr.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Namespaced Attribute in `attr()` CSS Funktion

Die {{cssxref("attr")}} CSS Funktion akzeptiert nun [namespaced Attribute](/de/docs/Web/CSS/Reference/Values/attr#namespaces). Dies ermöglicht es, Attribute von Elementen XML-basierter Sprachen wie [SVG](/de/docs/Web/SVG) zu übernehmen und sie entsprechend zu stylen. ([Firefox-Bug 2014060](https://bugzil.la/2014060).

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 150                  | Nein                     |
| Developer Edition       | 150                  | Nein                     |
| Beta                    | 150                  | Nein                     |
| Release                 | 150                  | Nein                     |

- `layout.css.attr.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Absolut positionierte Elemente in Mehrspalten-Containern und beim Drucken

Absolut positionierte Elemente innerhalb von [Mehrspalten-Containern](/de/docs/Web/CSS/Guides/Multicol_layout) und beim Drucken werden jetzt korrekt positioniert und fragmentiert. Dies verbessert die Interoperabilität mit anderen Browsern und verhindert Layoutprobleme wie überlappenden Text oder Inhaltsverlust. ([Firefox-Bug 2018797](https://bugzil.la/2018797)).

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 150                  | Ja                       |
| Developer Edition       | 150                  | Nein                     |
| Beta                    | 150                  | Nein                     |
| Release                 | 150                  | Nein                     |

- `layout.abspos.fragmentainer-aware-positioning.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### `@container style()` Bereichssyntax-Abfragen

Die [`@container`](/de/docs/Web/CSS/Reference/At-rules/@container) CSS-Regel [`style()`](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries) Abfragen unterstützen jetzt die _Bereichssyntax_. Diese ermöglicht es, zu überprüfen, ob ein Container über eine gültige CSS-Custom-Eigenschaft verfügt und deren Wert mit Vergleichsoperatoren wie `>`, `<`, `>=` und `<=` zu vergleichen und entsprechend Stile auf seine Kinder anzuwenden. ([Firefox-Bug 2024601](https://bugzil.la/2024601)).

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 151                  | Nein                     |
| Developer Edition       | 151                  | Nein                     |
| Beta                    | 151                  | Nein                     |
| Release                 | 151                  | Nein                     |

- `layout.css.attr.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### `field-sizing` Eigenschaft

Die {{cssxref("field-sizing")}} CSS-Eigenschaft ermöglicht es, das Größenverhalten von Formularelementen zu steuern. Diese Eigenschaft hat zwei Werte: `content` erlaubt es Elementen, sich in der Größe anzupassen, um ihren Inhalt zu passen, und `fixed` setzt eine feste Größe auf Elemente. ([Firefox-Bug 1977176](https://bugzil.la/1977176)).

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 151                  | Ja                       |
| Developer Edition       | 151                  | Nein                     |
| Beta                    | 151                  | Nein                     |
| Release                 | 151                  | Nein                     |

- `layout.css.field-sizing.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Korrektur für verschachtelte scrollbare Bereiche

Diese Implementierung wurde hinzugefügt, um ein Problem zu beheben, bei dem scrollbare Inhalte nicht erreichbar waren. Wenn ein Scrollbalken auf `display: none;` oder `width: 0;` gesetzt ist, würden die Scrollbalken der verschachtelten scrollbaren Bereiche übereinander gestapelt werden, was bedeutet, dass einige der Inhalte möglicherweise nicht erreichbar sind. Dies bedeutet jedoch, dass der `@supports selector(::-webkit-scrollbar)` Check `true` zurückgibt, auch wenn das [`::-webkit-scrollbar`](/de/docs/Web/CSS/Reference/Selectors/::-webkit-scrollbar) Pseudo-Element nicht wirklich unterstützt wird. ([Firefox-Bug 1977511](https://bugzil.la/1977511)).

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 151                  | Ja                       |
| Developer Edition       | 151                  | Nein                     |
| Beta                    | 151                  | Nein                     |
| Release                 | 151                  | Nein                     |

- `layout.css.fake-webkit-scrollbar.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### `<timeline-range-name>` Werte

Die {{cssxref("animation-range-start")}}, {{cssxref("animation-range-end")}} CSS-Eigenschaften und die {{cssxref("animation-range")}} Kurzschrift-Eigenschaft unterstützen jetzt [`<timeline-range-name>`](/de/docs/Web/CSS/Reference/Values/timeline-range-name) Werte. Diese [`<timeline-range-name>`](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names#timeline_range_names) Werte ermöglichen es, genau anzugeben, in welchem Segment eine scrollgesteuerte Animation stattfindet. ([Firefox-Bug 1804775](https://bugzil.la/1804775)).

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 151                  | Ja                       |
| Developer Edition       | 151                  | Nein                     |
| Beta                    | 151                  | Nein                     |
| Release                 | 151                  | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Auf `true` setzen, um zu aktivieren.

## SVG

**Keine experimentellen Funktionen in diesem Release-Zyklus.**

## MathML

### Deaktivieren von `href` auf nicht-`<a>` MathML-Elementen

Wenn aktiviert, erzeugt das globale Attribut [`href`](/de/docs/Web/MathML/Reference/Global_attributes/href) keine Hyperlinks auf MathML-Elementen außer auf `<a>`, was Firefox mit der [MathML-Kern-Spezifikation](https://w3c.github.io/mathml-core/#the-a-element) in Einklang bringt, die nur Hyperlinks auf dem `<a>` Element definiert. ([Firefox-Bug 2026848](https://bugzil.la/2026848)).

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 151                  | Ja                       |
| Developer Edition       | 151                  | Nein                     |
| Beta                    | 151                  | Nein                     |
| Release                 | 151                  | Nein                     |

- `mathml.href_link_on_non_anchor_element.disabled`
  - : Auf `true` setzen, um zu aktivieren.

## JavaScript

### Mehrere Import-Maps

Unterstützung für [mehrere Import-Maps](/de/docs/Web/HTML/Reference/Elements/script/type/importmap#merging_multiple_import_maps). Diese geben Entwicklern mehr Flexibilität beim Strukturieren und Laden von JavaScript-Modulen, da sie nicht mehr alle ihre Modulzuordnungen im Voraus kennen und sie in einer einzigen Import-Map laden müssen. ([Firefox-Bug 1916277](https://bugzil.la/1916277)).

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 150                  | Nein                     |
| Developer Edition       | 150                  | Nein                     |
| Beta                    | 150                  | Nein                     |
| Release                 | 150                  | Nein                     |

- `dom.multiple_import_maps.enabled`
  - : Auf `true` setzen, um zu aktivieren.

## APIs

### Abgegrenzte benutzerdefinierte Elementregister

Unterstützung für [abgegrenzte benutzerdefinierte Elementregister](/de/docs/Web/API/Web_components/Using_custom_elements#scoped_custom_element_registries) wird implementiert. Abgegrenzte Register ermöglichen es einem Schattenbaum, ein unabhängiges [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry) zu erstellen, dessen Definitionen nur für diesen spezifischen DOM-Teilbaum gelten. Dies kann verwendet werden, um Konflikte zu vermeiden, wenn mehrere Webkomponenten Elemente mit demselben Namen deklarieren.

Die Implementierung umfasst:

- `customElementRegistry` Eigenschaft in [`Document`](/de/docs/Web/API/Document), [`Element`](/de/docs/Web/API/Element) und [`ShadowRoot`](/de/docs/Web/API/ShadowRoot).
  ([Firefox-Bug 2018900](https://bugzil.la/2018900)).

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 150                  | Nein                     |
| Developer Edition       | 150                  | Nein                     |
| Beta                    | 150                  | Nein                     |
| Release                 | 150                  | Nein                     |

- `dom.scoped-custom-element-registries.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### CSS Typed Object Model Level 1

Implementierungsarbeiten am [CSS Typed OM Level 1](https://drafts.css-houdini.org/css-typed-om/) haben begonnen. Beispielsweise wird die [`to()`](/de/docs/Web/API/CSSNumericValue/to) Methode der [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) Schnittstelle unterstützt, um einen CSS-numerischen Wert von einer Einheit in eine andere zu konvertieren. ([Firefox-Bug 1278697](https://bugzil.la/1278697)).

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 149                  | Nein                     |
| Developer Edition       | 149                  | Nein                     |
| Beta                    | 149                  | Nein                     |
| Release                 | 149                  | Nein                     |

- `layout.css.typed-om.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Benachrichtigungsaktionen und maxActions Eigenschaften

Die [`actions`](/de/docs/Web/API/Notification/actions) schreibgeschützte Eigenschaft und die [`maxActions`](/de/docs/Web/API/Notification/maxActions_static) statische schreibgeschützte Eigenschaft der [`Notification`](/de/docs/Web/API/Notification) Schnittstelle werden in Nightly auf dem Desktop unterstützt. Diese enthalten die mit [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification) gesetzten Benachrichtigungsaktionen und die maximale Anzahl von Aktionen, die gesetzt werden können. ([Firefox-Bug 1225110](https://bugzil.la/1225110), [Firefox-Bug 1963263](https://bugzil.la/1963263)).

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 138                  | Ja (nur Desktop)         |
| Developer Edition       | 138                  | Nein                     |
| Beta                    | 138                  | Nein                     |
| Release                 | 138                  | Nein                     |

- `dom.webnotifications.actions.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Grafik: Canvas, WebGL und WebGPU

#### WebGL: Entwurfserweiterungen

Wenn diese Einstellung aktiviert ist, werden alle WebGL-Erweiterungen, die sich derzeit im "Entwurfs" Status befinden und getestet werden, zur Nutzung aktiviert. Derzeit werden keine WebGL-Erweiterungen von Firefox getestet.

#### WebGPU API

Die [WebGPU API](/de/docs/Web/API/WebGPU_API) bietet Low-Level-Unterstützung für die Durchführung von Berechnungen und Grafikrendering mittels des [Grafikprozessors](https://en.wikipedia.org/wiki/Graphics_Processing_Unit) (GPU) des Benutzers oder Computers. Ab Version 142 ist dies in Windows in allen Kontexten außer Service-Worker aktiviert. Ab Version 147 ist dies in macOS mit Apple Silicon in allen Browsing-Kontexten außer Service-Worker aktiviert. Für andere Plattformen wie Linux und macOS auf Intel Silicon ist es in Nightly aktiviert. Siehe [Firefox-Bug 1602129](https://bugzil.la/1602129) für unseren Fortschritt zu dieser API.

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert?                                                      |
| ----------------------- | -------------------- | ----------------------------------------------------------------------------- |
| Nightly                 | 141                  | Ja                                                                            |
| Developer Edition       | 141                  | Nein (Ja auf Windows und macOS mit Apple Silicon, ausgenommen Service-Worker) |
| Beta                    | 141                  | Nein (Ja auf Windows und macOS mit Apple Silicon, ausgenommen Service-Worker) |
| Release                 | 141                  | Nein (Ja auf Windows und macOS mit Apple Silicon, ausgenommen Service-Worker) |

- `dom.webgpu.enabled`
  - : Auf `true` setzen, um zu aktivieren (in Nightly und auf Windows in allen Versionen aktiviert)
- `dom.webgpu.service-workers.enabled`
  - : Auf `true` setzen, um zu aktivieren (in Nightly aktiviert)

### WebRTC und Medien

Die folgenden experimentellen Funktionen umfassen diejenigen, die in Medien-APIs wie der [WebRTC API](/de/docs/Web/API/WebRTC_API), der [Web Audio API](/de/docs/Web/API/Web_Audio_API), der [Media Source Extensions API](/de/docs/Web/API/Media_Source_Extensions_API), der [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API) und der [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) gefunden werden.

#### HTMLMediaElement Eigenschaften: audioTracks und videoTracks

Wenn diese Funktion aktiviert ist, werden die [`HTMLMediaElement.audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks) und [`HTMLMediaElement.videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks) Eigenschaften zu allen HTML-Medienelementen hinzugefügt. Da Firefox jedoch nicht derzeit mehrere Audio- und Videospuren unterstützt, funktionieren die häufigsten Anwendungsfälle für diese Eigenschaften nicht, daher sind sie beide standardmäßig deaktiviert. Siehe [Firefox-Bug 1057233](https://bugzil.la/1057233) für weitere Details.

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 33                   | Nein                     |
| Developer Edition       | 33                   | Nein                     |
| Beta                    | 33                   | Nein                     |
| Release                 | 33                   | Nein                     |

- `media.track.enabled`
  - : Auf `true` setzen, um zu aktivieren.

#### Asynchrones Hinzufügen und Entfernen von SourceBuffer

Dies fügt die auf Versprechen basierenden Methoden [`appendBufferAsync()`](/de/docs/Web/API/SourceBuffer/appendBufferAsync) und [`removeAsync()`](/de/docs/Web/API/SourceBuffer/removeAsync) für das Hinzufügen und Entfernen von Medienquellpuffern zur [`SourceBuffer`](/de/docs/Web/API/SourceBuffer) Schnittstelle hinzu. Weitere Informationen finden Sie im [Firefox-Bug 1280613](https://bugzil.la/1280613) und im [Firefox-Bug 778617](https://bugzil.la/778617).

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 62                   | Nein                     |
| Developer Edition       | 62                   | Nein                     |
| Beta                    | 62                   | Nein                     |
| Release                 | 62                   | Nein                     |

- `media.mediasource.experimental.enabled`
  - : Auf `true` setzen, um zu aktivieren.

#### AVIF-Konformitäts-Striktheit

Die `image.avif.compliance_strictness` Einstellung kann verwendet werden, um die _Striktheit_ zu steuern, die bei der Verarbeitung von [AVIF](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) Bildern angewendet wird. Dies ermöglicht es Firefox-Benutzern, Bilder anzuzeigen, die in einigen anderen Browsern gerendert werden, auch wenn diese nicht strikt konform sind.

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardwert |
| ----------------------- | -------------------- | ------------ |
| Nightly                 | 92                   | 1            |
| Developer Edition       | 92                   | 1            |
| Beta                    | 92                   | 1            |
| Release                 | 92                   | 1            |

- `image.avif.compliance_strictness`
  - : Numerischer Wert, der ein _Striktheits_-Niveau angibt. Erlaubte Werte sind:
    - `0`: Nachsicht. Akzeptieren Sie Bilder mit Spezifikationsverstößen sowohl in Empfehlungen ("sollte" Sprache) als auch in Anforderungen ("muss" Sprache), vorausgesetzt, dass sie sicher oder unmissverständlich interpretiert werden können.
    - `1` **(Standard)**: Gemischt. Verweigern Sie Verstöße gegen Anforderungen ("muss"), aber erlauben Sie Verstöße gegen Empfehlungen ("sollte").
    - `2`: Strikt. Weisen Sie alle Verstöße gegen spezifizierte Anforderungen oder Empfehlungen zurück.

#### JPEG XL Unterstützung

Firefox unterstützt [JPEG XL](https://jpeg.org/jpegxl/) Bilder, wenn diese Funktion aktiviert ist. Siehe [Firefox-Bug 1539075](https://bugzil.la/1539075) für weitere Details.

Beachten Sie, dass, wie unten gezeigt, die Funktion nur in Nightly Builds verfügbar ist (unabhängig davon, ob die Einstellung gesetzt ist). In Firefox 149 wurde der bisherige C++ [JPEG XL](https://jpeg.org/jpegxl/) Bilddecoder durch eine neue in Rust implementierte Implementierung ersetzt, die die `jxl-rs` Bibliothek verwendet ([Firefox-Bug 1986393](https://bugzil.la/1986393)).

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 90                   | Nein                     |
| Developer Edition       | —                    | —                        |
| Beta                    | —                    | —                        |
| Release                 | —                    | —                        |

- `image.jxl.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### WebVR API (Deaktiviert)

Die veraltete [WebVR API](/de/docs/Web/API/WebVR_API) ist auf dem Weg zur Entfernung. Sie ist standardmäßig in allen Builds deaktiviert [Firefox-Bug 1750902](https://bugzil.la/1750902).

| Veröffentlichungs-Kanal | Entfernte Version | Standardmäßig aktiviert? |
| ----------------------- | ----------------- | ------------------------ |
| Nightly                 | 98                | Nein                     |
| Developer Edition       | 98                | Nein                     |
| Beta                    | 98                | Nein                     |
| Release                 | 98                | Nein                     |

- `dom.vr.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### GeometryUtils Methoden: convertPointFromNode(), convertRectFromNode(), und convertQuadFromNode()

Die `GeometryUtils` Methoden `convertPointFromNode()`, `convertRectFromNode()` und `convertQuadFromNode()` konvertieren den gegebenen Punkt, das Rechteck oder das Viereck vom [`Node`](/de/docs/Web/API/Node), auf dem sie aufgerufen werden, zu einem anderen Knoten. (Siehe [Firefox-Bug 918189](https://bugzil.la/918189) für weitere Details.)

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 31                   | Nein                     |
| Developer Edition       | 31                   | Nein                     |
| Beta                    | 31                   | Nein                     |
| Release                 | 31                   | Nein                     |

- `layout.css.convertFromNode.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### GeometryUtils Methode: getBoxQuads()

Die `GeometryUtils` Methode `getBoxQuads()` gibt die CSS-Boxen für einen [`Node`](/de/docs/Web/API/Node) relativ zu einem anderen Knoten oder Viewport zurück. (Siehe [Firefox-Bug 917755](https://bugzil.la/917755) für weitere Details.)

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 31                   | Nein                     |
| Developer Edition       | 31                   | Nein                     |
| Beta                    | 31                   | Nein                     |
| Release                 | 31                   | Nein                     |

- `layout.css.getBoxQuads.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Payment Request API

#### Primäre Zahlungsabwicklung

Die [Payment Request API](/de/docs/Web/API/Payment_Request_API) unterstützt die Abwicklung von webbasierten Zahlungen innerhalb von Webinhalten oder Apps. Aufgrund eines Fehlers, der während der Testung der Benutzeroberfläche auftrat, haben wir beschlossen, die Auslieferung dieser API zu verschieben, während Diskussionen über mögliche Änderungen an der API geführt werden. Die Arbeiten sind noch im Gange. (Siehe [Firefox-Bug 1318984](https://bugzil.la/1318984) für weitere Details.)

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 55                   | Nein                     |
| Developer Edition       | 55                   | Nein                     |
| Beta                    | 55                   | Nein                     |
| Release                 | 55                   | Nein                     |

- `dom.payments.request.enabled`
  - : Auf `true` setzen, um zu aktivieren.
- `dom.payments.request.supportedRegions`
  - : Ländercodes als durch Kommas getrennte Positivliste von Regionen (z.B. `US,CA`).

### WebShare API

Die [Web Share API](/de/docs/Web/API/Web_Share_API) ermöglicht das Teilen von Dateien, URLs und anderen Daten von einer Website. Diese Funktion ist auf Android in allen Builds aktiviert, aber hinter einer Einstellung auf dem Desktop (sofern nicht unten anders angegeben).

| Veröffentlichungs-Kanal | Geänderte Version | Standardmäßig aktiviert?                    |
| ----------------------- | ----------------- | ------------------------------------------- |
| Nightly                 | 71                | Nein (Standard). Ja (Windows ab Version 92) |
| Developer Edition       | 71                | Nein                                        |
| Beta                    | 71                | Nein                                        |
| Release                 | 71                | Nein (Desktop). Ja (Android).               |

- `dom.webshare.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Benachrichtigungen API

Benachrichtigungen haben die [`requireInteraction`](/de/docs/Web/API/Notification/requireInteraction) Eigenschaft standardmäßig auf Windows-Systemen und in der Nightly-Version auf `true` gesetzt ([Firefox-Bug 1794475](https://bugzil.la/1794475)).

| Veröffentlichungs-Kanal | Geänderte Version | Standardmäßig aktiviert? |
| ----------------------- | ----------------- | ------------------------ |
| Nightly                 | 117               | Ja                       |
| Developer Edition       | 117               | Nein                     |
| Beta                    | 117               | Nein                     |
| Release                 | 117               | Nur Windows              |

- `dom.webnotifications.requireinteraction.enabled`
  - : Auf `true` setzen, um zu aktivieren.

## Sicherheit und Datenschutz

### Markierung unsicherer Seiten

Die beiden `security.insecure_connection_text_*` Einstellungen fügen ein "Nicht sicher" Textlabel in der Adressleiste neben dem traditionellen Schlosssymbol hinzu, wenn eine Seite unsicher geladen wird (also mit {{Glossary("HTTP", "HTTP")}} anstelle von {{Glossary("HTTPS", "HTTPS")}}). Die `browser.urlbar.trimHttps` Einstellung entfernt das `https:` Präfix aus den URLs der Adressleiste. Siehe [Firefox-Bug 1853418](https://bugzil.la/1853418) für weitere Details.

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 121                  | Ja                       |
| Developer Edition       | 60                   | Nein                     |
| Beta                    | 60                   | Nein                     |
| Release                 | 60                   | Nein                     |

- `security.insecure_connection_text.enabled`
  - : Auf `true` setzen, um das Textlabel für den normalen Browsermodus zu aktivieren.
- `security.insecure_connection_text.pbmode.enabled`
  - : Auf `true` setzen, um das Textlabel für den privaten Browsing-Modus zu aktivieren.
- `browser.urlbar.trimHttps`
  - : Auf `true` setzen, um das `https:` Präfix aus den URLs der Adressleiste zu entfernen.

### Einschränkung von Inhalten für Erwachsene mit `<meta name="rating">`

Das nicht standardisierte [`<meta name="rating">`](/de/docs/Web/HTML/Reference/Elements/meta) Element kann auf einer Webseite eingefügt werden, um den Inhalt der Seite als beschränkt/erwachsen zu kennzeichnen. Zum Zeitpunkt der Erstellung dieses Dokuments gibt es zwei mögliche `content` Werte, `adult` ([von Google definiert](https://developers.google.com/search/docs/specialty/explicit/guidelines#add-metadata)) und `RTA-5042-1996-1400-1577-RTA` ([von ASACP definiert](https://www.rtalabel.org/?content=howto#top)), die die gleiche Wirkung haben (in Zukunft könnten weitere Optionen hinzugefügt werden).

Die folgenden `<meta>` Elemente sind äquivalent:

```html
<meta name="rating" content="adult" />
<meta name="rating" content="RTA-5042-1996-1400-1577-RTA" />
```

Browser, die dieses Element erkennen, können dann Schritte unternehmen, um Nutzer:innen daran zu hindern, den Inhalt anzusehen. Die Umsetzung in Firefox ersetzt die Seite durch den Inhalt von `about:restricted`, welcher dem Benutzer erklärt, dass er versucht, eingeschränkte Inhalte anzusehen, warum er dies nicht kann, und einen Zurück-Button bietet, um dorthin zurückzukehren, woher er gekommen ist.

Siehe für weitere Informationen [Firefox-Bug 1991135](https://bugzil.la/1991135).

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 146                  | Nein                     |
| Developer Edition       | 146                  | Nein                     |
| Beta                    | 146                  | Nein                     |
| Release                 | 146                  | Nein                     |

- `security.restrict_to_adults.always`
  - : Auf `true` setzen, um den Zugriff auf Webseiten zu beschränken, die sich durch ein `<meta name="rating">` Element selbst als für Erwachsene identifizieren.
- `security.restrict_to_adults.respect_platform`
  - : Auf `true` setzen, um den Zugriff auf Webseiten zu beschränken, die sich durch ein `<meta name="rating">` Element selbst als für Erwachsene identifizieren, nur wenn entsprechende elterliche Kontrollen auf dem zugrunde liegenden Betriebssystem eingestellt sind (z.B. die macOS _Content & Privacy_ Einstellungen zur Einschränkung expliziter Webinhalte).

### Berechtigungspolitik / Feature-Politik

[Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) ermöglicht es Webentwicklern, bestimmte Funktionen und APIs im Browser selektiv zu aktivieren, zu deaktivieren und ihr Verhalten zu ändern. Sie ist ähnlich wie CSP, kontrolliert jedoch Funktionen anstatt Sicherheitsverhalten. Dies wird in Firefox als **Feature Policy** implementiert, der Name, der in einer früheren Version der Spezifikation verwendet wurde.

Beachten Sie, dass unterstützte Richtlinien durch das [`allow`](/de/docs/Web/HTML/Reference/Elements/iframe#allow) Attribut auf `<iframe>` Elementen gesetzt werden können, auch wenn die Benutzereinstellung nicht gesetzt ist.

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 65                   | Nein                     |
| Developer Edition       | 65                   | Nein                     |
| Beta                    | 65                   | Nein                     |
| Release                 | 65                   | Nein                     |

- `dom.security.featurePolicy.header.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Privacy Preserving Attribution API (PPA)

Die [PPA API](https://support.mozilla.org/en-US/kb/privacy-preserving-attribution) bietet eine Alternative zum Benutzer-Tracking für die Zuordnung von Anzeigen mittels des neuen `navigator.privateAttribution` Objekts mit `saveImpression()` und `measureConversion()` Methoden. Lesen Sie mehr über PPA [im ursprünglichen Erklärungsdokument](https://github.com/mozilla/explainers/tree/main/archive/ppa-experiment) und die [vorgeschlagene Spezifikation](https://w3c.github.io/ppa/). Dieses Experiment kann für Websites über [origin trial](https://wiki.mozilla.org/Origin_Trials) oder im Browser durch Setzen der Einstellung auf `1` aktiviert werden. ([Firefox-Bug 1900929](https://bugzil.la/1900929)).

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 128                  | Nein                     |
| Developer Edition       | 128                  | Nein                     |
| Beta                    | 128                  | Nein                     |
| Release                 | 128                  | Nein                     |

- `dom.origin-trials.private-attribution.state`
  - : Auf `true` setzen, um zu aktivieren.

## HTTP

### Integritätspolicy für Stylesheet-Ressourcen

Die {{httpheader("Integrity-Policy")}} und {{httpheader("Integrity-Policy-Report-Only")}} HTTP-Header werden jetzt für Style-Ressourcen unterstützt. Diese ermöglichen es Websites, entweder [Subressourcen-Integritätsgarantien](/de/docs/Web/Security/Defenses/Subresource_Integrity) für Styles durchzusetzen oder nur Verstöße gegen die Richtlinie zu melden. Beachten Sie, dass Firefox Berichts-Endpunkte ignoriert und Verstöße in der Entwicklerkonsole protokolliert. Wenn `Integrity-Policy` verwendet wird, blockiert der Browser das Laden von Styles, die in einem {{HTMLElement("link")}} Element mit [`rel="stylesheet"`](/de/docs/Web/HTML/Reference/Attributes/rel#stylesheet) referenziert werden, die entweder das [`integrity`](/de/docs/Web/HTML/Reference/Elements/script#integrity) Attribut nicht haben oder einen Integritätsschlüssel haben, der nicht mit der Ressource auf dem Server übereinstimmt. ([Firefox-Bug 1976656](https://bugzil.la/1976656)).

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 142                  | Nein                     |
| Developer Edition       | 142                  | Nein                     |
| Beta                    | 142                  | Nein                     |
| Release                 | 142                  | Nein                     |

- `security.integrity_policy.stylesheet.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Idempotency-Key

Der {{httpheader("Idempotency-Key")}} HTTP-Anforderungsheader kann von Website-Client-Code verwendet werden, um {{HTTPMethod("POST")}} oder {{HTTPMethod("PATCH")}} Anfragen {{Glossary("idempotent", "idempotent")}} zu machen, wenn er mit einem Server verwendet wird, der ihn unterstützt. Die Spezifikation gibt an, dass der Server dokumentieren und bekannt machen sollte, welche Endpunkte diesen Header erfordern, das Format des Schlüssels und erwartete Fehlermeldungen.

Firefox fügt den Header _automatisch_ mit einem eindeutigen Schlüssel für jede neue `POST` Anfrage hinzu, wenn er nicht bereits durch den Client-seitigen Code der Seite hinzugefügt wurde. Dies vereinfacht den benötigten Client-seitigen Code, um mit Servern zu arbeiten, die die Funktion unterstützen.

([Firefox-Bug 1830022](https://bugzil.la/1830022)).

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 135                  | Nein                     |
| Developer Edition       | 135                  | Nein                     |
| Beta                    | 135                  | Nein                     |
| Release                 | 135                  | Nein                     |

- `network.http.idempotencyKey.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Accept-Header mit MIME-Typ image/jxl

Der HTTP [`Accept`](/de/docs/Web/HTTP/Reference/Headers/Accept) Header in [Standardanforderungen und Bildanforderungen](/de/docs/Web/HTTP/Guides/Content_negotiation/List_of_default_Accept_values) kann über eine Einstellung konfiguriert werden, um Unterstützung für den `image/jxl` MIME-Typ anzuzeigen.

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 128                  | Nein                     |
| Developer Edition       | 128                  | Nein                     |
| Beta                    | 128                  | Nein                     |
| Release                 | 128                  | Nein                     |

- `image.jxl.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### SameSite=Lax standardmäßig

[`SameSite` Cookies](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) haben standardmäßig den Wert `Lax`. Diese Einstellung bedeutet, dass Cookies nur gesendet werden, wenn ein Benutzer zur Ursprungsseite navigiert, nicht jedoch für Cross-Site-Unteranfragen zum Laden von Bildern oder Frames in eine Drittanbieter-Site usw. Weitere Details siehe [Firefox-Bug 1617609](https://bugzil.la/1617609).

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 69                   | Nein                     |
| Developer Edition       | 69                   | Nein                     |
| Beta                    | 69                   | Nein                     |
| Release                 | 69                   | Nein                     |

- `network.cookie.sameSite.laxByDefault`
  - : Auf `true` setzen, um zu aktivieren.

### Access-Control-Allow-Headers Wildcard deckt Authorization nicht ab

Der [`Access-Control-Allow-Headers`](/de/docs/Web/HTTP/Reference/Headers/Access-Control-Allow-Headers) ist ein Antwortheader auf eine {{Glossary("Preflight_request", "CORS-Preflight-Anfrage")}}, die angibt, welche Anforderungsheader in der endgültigen Anfrage enthalten sein dürfen. Die Antwortdirektive kann einen Platzhalter (`*`) enthalten, der angibt, dass die endgültige Anfrage alle Header außer dem `Authorization` Header enthalten darf.

Standardmäßig enthält Firefox den `Authorization` Header in der endgültigen Anfrage, nachdem eine Antwort mit `Access-Control-Allow-Headers: *` empfangen wurde. Setzen Sie die Einstellung auf `false`, um sicherzustellen, dass Firefox den `Authorization` Header nicht enthält. Weitere Details siehe [Firefox-Bug 1687364](https://bugzil.la/1687364).

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 115                  | Ja                       |
| Developer Edition       | 115                  | Ja                       |
| Beta                    | 115                  | Ja                       |
| Release                 | 115                  | Ja                       |

- `network.cors_preflight.authorization_covered_by_wildcard`
  - : Auf `true` setzen, um zu aktivieren.

## Entwickler-Werkzeuge

Die Entwicklerwerkzeuge von Mozilla entwickeln sich ständig weiter. Wir experimentieren mit neuen Ideen, fügen neue Funktionen hinzu und testen sie in den Nightly- und Developer Edition Kanälen, bevor wir sie zu Beta und Release durchlassen. Die unten aufgeführten Funktionen sind die derzeitige Auswahl an experimentellen Entwicklerwerkzeugfunktionen.

**Keine experimentellen Funktionen in diesem Release-Zyklus.**

## Siehe auch

- [Firefox Entwickler-Veröffentlichungsnotizen](/de/docs/Mozilla/Firefox/Releases)
- [Firefox Nightly](https://www.firefox.com/en-US/channel/desktop/)
- [Firefox Developer Edition](https://www.firefox.com/en-US/channel/desktop/developer/)
