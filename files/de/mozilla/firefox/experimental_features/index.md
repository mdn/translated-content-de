---
title: Experimentelle Funktionen in Firefox
short-title: Experimentelle Funktionen
slug: Mozilla/Firefox/Experimental_features
l10n:
  sourceCommit: fd64ce7645c6baa06a49662ece68a94f9667f5c0
---

Diese Seite listet Firefox's experimentelle und teilweise implementierte Funktionen auf, einschließlich sich entwickelnder oder vorgeschlagener Webplattform-Standards. Jeder Eintrag unten enthält Informationen über die Builds, in denen eine Funktion enthalten ist (Nightly, Beta, Developer Edition oder Release), ob sie standardmäßig aktiviert ist oder nicht, und den Namen der **Einstellung**, die Sie zur Aktivierung oder Konfiguration der Funktion verwenden können. Die Beschreibung jeder Funktion enthält auch Links zu relevanten [Bugzilla bugs](https://bugzilla.mozilla.org), die die Funktion implementieren oder aktivieren. Diese Informationen ermöglichen es Ihnen, experimentelle Funktionen auszuprobieren und Feedback zu geben, bevor sie offiziell veröffentlicht werden.

In Bezug auf den Lebenszyklus erscheinen neue Funktionen in der Regel zuerst in [Nightly](https://www.firefox.com/en-US/channel/desktop/#nightly), wo sie oft standardmäßig zur frühen Rückmeldung und zum Testen aktiviert sind. Wenn keine größeren Probleme auftreten, werden sie in [Beta](https://www.firefox.com/en-US/channel/desktop/#beta) und [Developer Edition](https://www.firefox.com/en-US/channel/desktop/developer/) Pre-Release-Builds aufgenommen. Schließlich werden genehmigte Funktionen im stabilen [Release](https://www.firefox.com/en-US/)-Kanal ausgeliefert. Wenn eine Funktion in einem Release standardmäßig aktiviert ist, wird sie nicht mehr als experimentell betrachtet und von dieser Seite entfernt.

Um diese Funktionen zu aktivieren, geben Sie `about:config` in die Firefox-Adressleiste ein, suchen Sie die zugehörige **Einstellung** und ändern Sie ihren Wert, der normalerweise ein Umschalten zwischen `true` und `false` ist. Abhängig von der Funktion müssen Sie möglicherweise den Browser neu starten, damit die Änderung wirksam wird. Weitere Informationen zur Verwaltung von Einstellungen in Firefox finden Sie im [Firefox Configuration Editor](https://support.mozilla.org/en-US/kb/about-config-editor-firefox) Support-Artikel.

## HTML

### Layout für input type="search"

Das Layout für `input type="search"` wurde aktualisiert. Dies bewirkt, dass ein Suchfeld ein Löschsymbol hat, sobald jemand damit zu tippen beginnt, um anderen Browserimplementierungen zu entsprechen. (Siehe [Firefox bug 558594](https://bugzil.la/558594) für weitere Details.)

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 81                   | Nein                     |
| Developer Edition | 81                   | Nein                     |
| Beta              | 81                   | Nein                     |
| Release           | 81                   | Nein                     |

- `layout.forms.input-type-search.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Passwortanzeige umschalten

HTML-Passworteingabeelemente ([`<input type="password">`](/de/docs/Web/HTML/Reference/Elements/input/password)) enthalten ein "Auge"-Symbol, das umgeschaltet werden kann, um den Passworttext anzuzeigen oder zu verbergen ([Firefox bug 502258](https://bugzil.la/502258)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 96                   | Nein                     |
| Developer Edition | 96                   | Nein                     |
| Beta              | 96                   | Nein                     |
| Release           | 96                   | Nein                     |

- `layout.forms.reveal-password-button.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Zeitwahler in `datetime-local` und `time` Eingabeelementen

Die HTML-Eingabeelemente [`<input type="datetime-local">`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local) und [`<input type="time">`](/de/docs/Web/HTML/Reference/Elements/input/time) unterstützen einen Zeitwahler. ([Firefox bug 1726108](https://bugzil.la/1726108)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 144                  | Nein                     |
| Developer Edition | 144                  | Nein                     |
| Beta              | 144                  | Nein                     |
| Release           | 144                  | Nein                     |

- `dom.forms.datetime.timepicker`
  - : Auf `true` setzen, um zu aktivieren.

### `alpha` und `colorspace` Attribute in `color` Eingabeelementen

Das HTML-Eingabeelement [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color) unterstützt die Attribute [`alpha`](/de/docs/Web/HTML/Reference/Elements/input/color#alpha) & [`colorspace`](/de/docs/Web/HTML/Reference/Elements/input/color#colorspace). ([Firefox bug 1919718](https://bugzil.la/1919718)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 149                  | Ja                       |
| Developer Edition | -                    | -                        |
| Beta              | -                    | -                        |
| Release           | -                    | -                        |

- `dom.forms.html_color_picker.enabled`
  - : Auf `true` setzen, um zu aktivieren.

## CSS

### Hex-Felder zur Anzeige von fehlgeleiteten Steuerzeichen

Diese Funktion rendert Steuerzeichen (Unicode-Kategorie Cc) außer _Tab_ (`U+0009`), _Zeilenumbruch_ (`U+000A`), _Form Feed_ (`U+000C`) und _Wagenrücklauf_ (`U+000D`) als Hex-Feld, wenn sie unerwartet auftreten. (Siehe [Firefox bug 1099557](https://bugzil.la/1099557) für weitere Details.)

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 43                   | Ja                       |
| Developer Edition | 43                   | Nein                     |
| Beta              | 43                   | Nein                     |
| Release           | 43                   | Nein                     |

- `layout.css.control-characters.visible`
  - : Auf `true` setzen, um zu aktivieren.

### initial-letter Eigenschaft

Die {{cssxref("initial-letter")}} CSS-Eigenschaft ist Teil der [CSS Inline Layout](https://drafts.csswg.org/css-inline/) Spezifikation und ermöglicht es, anzugeben, wie herabgesetzte, erhobene und gesenkte Initialbuchstaben angezeigt werden. (Siehe [Firefox bug 1223880](https://bugzil.la/1223880) für weitere Details.)

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 50                   | Nein                     |
| Developer Edition | 50                   | Nein                     |
| Beta              | 50                   | Nein                     |
| Release           | 50                   | Nein                     |

- `layout.css.initial-letter.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### fit-content() Funktion

Die [`fit-content()`](/de/docs/Web/CSS/Reference/Values/fit-content_function) Funktion, wie sie auf {{cssxref("width")}} und andere Größenangaben angewendet wird. Diese Funktion ist bereits gut unterstützt für CSS Grid Layout Spurgrößen. (Siehe [Firefox bug 1312588](https://bugzil.la/1312588) für weitere Details.)

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 91                   | Nein                     |
| Developer Edition | 91                   | Nein                     |
| Beta              | 91                   | Nein                     |
| Release           | 91                   | Nein                     |

- `layout.css.fit-content-function.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Scroll-gesteuerte Animationen

Früher "scroll-verknüpfte Animationen" genannt, hängt eine [scroll-gesteuerte Animation](/de/docs/Web/CSS/Guides/Scroll-driven_animations) vom Scroll-Position eines Rollbalkens ab, anstatt von Zeit oder einem anderen Maß. Die {{cssxref('scroll-timeline-name')}} und {{cssxref('scroll-timeline-axis')}} Eigenschaften (und die {{cssxref('scroll-timeline')}} Kurzform-Eigenschaft) ermöglichen es Ihnen anzugeben, dass ein bestimmter Rollbalken in einem benannten Container als Quelle für eine scroll-gesteuerte Animation verwendet werden kann. Die Scroll-Timeline kann dann mit einer [Animation](/de/docs/Web/CSS/Guides/Animations) assoziiert werden, indem die {{cssxref('animation-timeline')}} Eigenschaft auf den Namenwert gesetzt wird, der mit `scroll-timeline-name` definiert ist.

Beim Verwenden der {{cssxref('scroll-timeline')}} Kurzform-Eigenschaft muss die Reihenfolge der Eigenschaftswerte {{cssxref('scroll-timeline-name')}} gefolgt von {{cssxref('scroll-timeline-axis')}} sein. Die Langform- und Kurzform-Eigenschaften sind beide hinter der Einstellung verfügbar. Alternativ können Sie die {{cssxref("animation-timeline/scroll")}} Funktionsschreibweise mit {{cssxref('animation-timeline')}} verwenden, um anzugeben, dass eine Rollbalken-Achse in einem übergeordneten Element für die Timeline verwendet wird.

Für weitere Informationen siehe [Firefox bug 1807685](https://bugzil.la/1807685), [Firefox bug 1804573](https://bugzil.la/1804573), [Firefox bug 1809005](https://bugzil.la/1809005), [Firefox bug 1676791](https://bugzil.la/1676791), [Firefox bug 1754897](https://bugzil.la/1754897), [Firefox bug 1817303](https://bugzil.la/1817303), und [Firefox bug 1737918](https://bugzil.la/1737918).

Die {{cssxref('timeline-scope')}}, {{cssxref('animation-range-start')}} und {{cssxref('animation-range-end')}} Eigenschaften (und die {{cssxref('animation-range')}} Kurzform-Eigenschaft) werden noch nicht unterstützt. Für weitere Informationen siehe [Firefox bug 1676779](https://bugzil.la/1676779).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 136                  | Ja                       |
| Developer Edition | 110                  | Nein                     |
| Beta              | 110                  | Nein                     |
| Release           | 110                  | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### prefers-reduced-transparency Medienfeature

Das CSS-Medienfeature {{cssxref("@media/prefers-reduced-transparency")}} ermöglicht es, zu erkennen, ob ein Benutzer die Einstellung aktiviert hat, um die Menge an transparenten oder durchscheinenden Schichteffekten auf seinem Gerät zu minimieren. Siehe ([Firefox bug 1736914](https://bugzil.la/1736914)) für weitere Details.

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 113                  | Nein                     |
| Developer Edition | 113                  | Nein                     |
| Beta              | 113                  | Nein                     |
| Release           | 113                  | Nein                     |

- `layout.css.prefers-reduced-transparency.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### inverted-colors Medienfeature

Das CSS-Medienfeature {{cssxref("@media/inverted-colors")}} ermöglicht es zu erkennen, ob ein Benutzeragent oder das zugrunde liegende Betriebssystem Farben invertiert. Siehe ([Firefox bug 1794628](https://bugzil.la/1794628)) für weitere Details.

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 114                  | Nein                     |
| Developer Edition | 114                  | Nein                     |
| Beta              | 114                  | Nein                     |
| Release           | 114                  | Nein                     |

- `layout.css.inverted-colors.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Named view progress timelines property

Die CSS {{cssxref("view-timeline-name")}} Eigenschaft ermöglicht es, einen Namen für ein bestimmtes Element zu geben, was bedeutet, dass sein übergeordnetes Rollbalken-Element die Quelle einer Fortschrittstimeline der Ansicht ist. Der Name kann dann der `animation-timeline` zugewiesen werden, die das zugehörige Element animiert, während es sich durch den sichtbaren Bereich seines übergeordneten Rollbalkens bewegt. Siehe ([Firefox bug 1737920](https://bugzil.la/1737920)) für weitere Details.

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 136                  | Ja                       |
| Developer Edition | 114                  | Nein                     |
| Beta              | 114                  | Nein                     |
| Release           | 114                  | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Anonyme Ansicht der Fortschrittstimeline-Funktion

Die CSS {{cssxref("animation-timeline/view")}} Funktion ermöglicht es Ihnen, anzugeben, dass die `animation-timeline` für ein Element eine Fortschrittstimeline der Ansicht ist, die das Element animiert, während es sich durch den sichtbaren Bereich seines übergeordneten Rollbalkens bewegt. Die Funktion definiert die Achse des übergeordneten Elements, das die Timeline bereitstellt, sowie den Schnittpunkt innerhalb des sichtbaren Bereichs, an dem die Animation beginnt. Siehe ([Firefox bug 1808410](https://bugzil.la/1808410)) für weitere Details.

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 136                  | Ja                       |
| Developer Edition | 114                  | Nein                     |
| Beta              | 114                  | Nein                     |
| Release           | 114                  | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Anbieter-spezifische Transform-Eigenschaften

Die `-moz-`-Präfix [CSS-Transform](/de/docs/Web/CSS/Guides/Transforms) Eigenschaften können deaktiviert werden, indem die `layout.css.prefixes.transforms` Einstellung auf `false` gesetzt wird. Die Absicht ist, diese zu deaktivieren, sobald die standardmäßigen CSS-Zoom-Eigenschaften gut unterstützt werden. ([Firefox bug 1886134](https://bugzil.la/1886134), [Firefox bug 1855763](https://bugzil.la/1855763)).

Insbesondere wird durch diese Einstellung die folgenden Präfix-Eigenschaften deaktiviert:

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

### Symmetrisches `letter-spacing`

Die CSS-Eigenschaft {{cssxref("letter-spacing")}} teilt nun den angegebenen Buchstabenabstand gleichmäßig auf beiden Seiten jedes Zeichens auf. Dies unterscheidet sich vom aktuellen Verhalten, bei dem der Abstand hauptsächlich auf einer Seite hinzugefügt wird. Dieser Ansatz kann den Textabstand verbessern, insbesondere bei gemischtgerichtetem Text. ([Firefox bug 1891446](https://bugzil.la/1891446)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 128                  | Ja                       |
| Developer Edition | 128                  | Ja                       |
| Beta              | 127                  | Nein                     |
| Release           | 127                  | Nein                     |

- `layout.css.letter-spacing.model`
  - : Auf `true` setzen, um zu aktivieren.

### Zulassen von Pseudo-Elementen nach Element-gestützten Pseudo-Elementen

Es wurde mit der Unterstützung für das Anfügen von [Pseudo-Elementen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) wie {{cssxref("::first-letter")}} und {{cssxref("::before")}} an [elementbasierte Pseudo-Elemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements#element-gestützte_pseudo-elemente) wie {{cssxref("::details-content")}} und {{cssxref("::file-selector-button")}} begonnen.

Dadurch können Benutzer beispielsweise den ersten Buchstaben des {{htmlElement("details")}} Elements mit dem CSS-Selektor `::details-content::first-letter` stylen oder Inhalte vor einem {{HTMLElement("input") }} des [`type="file"`](/de/docs/Web/HTML/Reference/Elements/input/file) mit dem CSS-Selektor `::file-selector-button::before` hinzufügen.

Derzeit kann nur die Unterstützung für `::details-content::first-letter` mit `@supports(::details-content::first-letter)` geparst werden. Das `::file-selector-button` Pseudo-Element ist noch nicht als elementbasiertes Pseudo-Element markiert, daher gibt es keine Möglichkeit, dies zu testen. ([Firefox bug 1953557](https://bugzil.la/1953557), [Firefox bug 1941406](https://bugzil.la/1941406)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 138                  | Nein                     |
| Developer Edition | 138                  | Nein                     |
| Beta              | 138                  | Nein                     |
| Release           | 138                  | Nein                     |

### `:heading` und `:heading()` Pseudo-Klassen

Die {{cssxref(":heading")}} Pseudo-Klasse ermöglicht es, alle [Überschriftselemente](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) (`<h1>`-`<h6>`) auf einmal zu stylen, anstatt sie einzeln zu ansprechen. Die {{cssxref(":heading()")}} funktionale Pseudo-Klasse ermöglicht es, Überschriftselemente zu stylen, die mit einer kommagetrennten Liste von Ganzzahlen übereinstimmen, die den Überschriftsebenen entsprechen. ([Firefox bug 1974386](https://bugzil.la/1974386) & [Firefox bug 1984310](https://bugzil.la/1984310)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 142                  | Nein                     |
| Developer Edition | 142                  | Nein                     |
| Beta              | 142                  | Nein                     |
| Release           | 142                  | Nein                     |

- `layout.css.heading-selector.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### `@custom-media` At-Regel

Die {{cssxref("@custom-media")}} CSS At-Regel definiert Aliase für lange oder komplexe Medienabfragen. Anstatt die gleiche hartcodierte `<media-query-list>` in mehreren `@media` At-Regeln zu wiederholen, kann sie einmalig in einer `@custom-media` At-Regel definiert und im gesamten Stylesheet nach Bedarf referenziert werden. ([Firefox bug 1744292](https://bugzil.la/1744292)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 148                  | Nein                     |
| Developer Edition | 148                  | Nein                     |
| Beta              | 148                  | Nein                     |
| Release           | 148                  | Nein                     |

- `layout.css.custom-media.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### `<attr-type>` Werte in `attr()` CSS-Funktion

Die {{cssxref("attr")}} CSS-Funktion unterstützt nun [`<attr-type>`](/de/docs/Web/CSS/Reference/Values/attr#attr-type) Werte. Dies ermöglicht es, festzulegen, wie ein Attributwert in einen CSS-Wert analysiert wird und diese Werte direkt von [`data-*`](/de/docs/Web/HTML/How_to/Use_data_attributes) zu übernehmen. ([Firefox bug 1986631](https://bugzil.la/1986631), [Firefox bug 1998245](https://bugzil.la/1998245))

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 152                  | Ja                       |
| Developer Edition | 149                  | Nein                     |
| Beta              | 149                  | Nein                     |
| Release           | 149                  | Nein                     |

- `layout.css.attr.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Namensraumattribute in `attr()` CSS-Funktion

Die {{cssxref("attr")}} CSS-Funktion akzeptiert jetzt [namensraumbezogene Attribute](/de/docs/Web/CSS/Reference/Values/attr#namespaces). Dies ermöglicht es, Attribute von Elementen XML-basierter Sprachen, wie [SVG](/de/docs/Web/SVG), zu übernehmen und entsprechend zu gestalten. ([Firefox bug 2014060](https://bugzil.la/2014060).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 150                  | Nein                     |
| Developer Edition | 150                  | Nein                     |
| Beta              | 150                  | Nein                     |
| Release           | 150                  | Nein                     |

- `layout.css.attr.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Absolut positionierte Elemente in mehrspaltigen Containern und beim Drucken

Absolut positionierte Elemente innerhalb von [mehrspaltigen Containern](/de/docs/Web/CSS/Guides/Multicol_layout) und beim Drucken sind jetzt korrekt positioniert und fragmentiert. Dies verbessert die Interoperabilität mit anderen Browsern und verhindert Layoutprobleme wie überlappenden Text oder Inhaltsverlust. ([Firefox bug 2018797](https://bugzil.la/2018797)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 150                  | Ja                       |
| Developer Edition | 150                  | Nein                     |
| Beta              | 150                  | Nein                     |
| Release           | 150                  | Nein                     |

- `layout.abspos.fragmentainer-aware-positioning.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### `@container style()` Bereichssyntax-Abfragen

Die [`@container`](/de/docs/Web/CSS/Reference/At-rules/@container) CSS At-Regel [`style()`](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries) Abfragen unterstützen jetzt die _Rangsyntax_. Dadurch können Sie überprüfen, ob ein Container eine gültige CSS-Benutzerdefinierte Eigenschaft hat und seinen Wert mit Vergleichsoperatoren wie `>`, `<`, `>=`, und `<=` vergleichen und entsprechend Stile auf seine Kinder anwenden. ([Firefox bug 2024601](https://bugzil.la/2024601)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 151                  | Nein                     |
| Developer Edition | 151                  | Nein                     |
| Beta              | 151                  | Nein                     |
| Release           | 151                  | Nein                     |

- `layout.css.attr.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### `field-sizing` Eigenschaft

Die {{cssxref("field-sizing")}} CSS-Eigenschaft ermöglicht es, das Größenverhalten von Formularsteuerelementen zu steuern. Diese Eigenschaft hat zwei Werte: `content` ermöglicht es Elementen, ihre Größe anzupassen, um ihren Inhalt zu passen, und `fixed` setzt eine feste Größe auf Elemente. ([Firefox bug 1977176](https://bugzil.la/1977176)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 151                  | Ja                       |
| Developer Edition | 151                  | Nein                     |
| Beta              | 151                  | Nein                     |
| Release           | 151                  | Nein                     |

- `layout.css.field-sizing.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Fix für verschachtelte scrollbare Bereiche

Diese Implementierung wurde hinzugefügt, um ein Problem zu beheben, bei dem scrollbare Inhalte unzugänglich waren. Wenn eine Scrollleiste auf `display: none;` oder `width: 0;` gesetzt ist, würden die Scrollbalken verschachtelter scrollbarer Bereiche aufeinander gestapelt, was bedeutet, dass einige der Inhalte möglicherweise unzugänglich sind. Dies bedeutet jedoch, dass die `@supports selector(::-webkit-scrollbar)` Überprüfung `true` zurückgibt, obwohl das [`::-webkit-scrollbar`](/de/docs/Web/CSS/Reference/Selectors/::-webkit-scrollbar) Pseudo-Element nicht wirklich unterstützt wird. ([Firefox bug 1977511](https://bugzil.la/1977511)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 151                  | Ja                       |
| Developer Edition | 151                  | Nein                     |
| Beta              | 151                  | Nein                     |
| Release           | 151                  | Nein                     |

- `layout.css.fake-webkit-scrollbar.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### `<timeline-range-name>` Werte

Die {{cssxref("animation-range-start")}}, {{cssxref("animation-range-end")}} CSS-Eigenschaften und die {{cssxref("animation-range")}} Kurzform-Eigenschaft unterstützen jetzt [`<timeline-range-name>`](/de/docs/Web/CSS/Reference/Values/timeline-range-name) Werte. Diese [`<timeline-range-name>`](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names#timeline_range_names) Werte ermöglichen es, genau anzugeben, in welchem Segment eine scroll-gesteuerte Animation stattfinden wird. ([Firefox bug 1804775](https://bugzil.la/1804775)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 151                  | Ja                       |
| Developer Edition | 151                  | Nein                     |
| Beta              | 151                  | Nein                     |
| Release           | 151                  | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Auf `true` setzen, um zu aktivieren.

## SVG

**Keine experimentellen Funktionen in diesem Release-Zyklus.**

## MathML

### `href` bei nicht-`<a>` MathML-Elementen deaktivieren

Wenn aktiviert, erstellt das globale Attribut [`href`](/de/docs/Web/MathML/Reference/Global_attributes/href) keinen Hyperlink für MathML-Elemente außer `<a>`, was Firefox mit der [MathML Core-Spezifikation](https://w3c.github.io/mathml-core/#the-a-element) in Einklang bringt, die Hyperlinks nur für das `<a>` Element definiert. ([Firefox bug 2026848](https://bugzil.la/2026848)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 151                  | Ja                       |
| Developer Edition | 151                  | Nein                     |
| Beta              | 151                  | Nein                     |
| Release           | 151                  | Nein                     |

- `mathml.href_link_on_non_anchor_element.disabled`
  - : Auf `true` setzen, um zu aktivieren.

## JavaScript

### TC39 Iterator includes Vorschlag

Die Methode [`Iterator.prototype.includes()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator/includes) testet, ob eine `Iterator` Instanz einen bestimmten Wert erzeugen wird. Der Vergleich verwendet den [SameValueZero Algorithmus](/de/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness#same-value-zero_equality). Dieser Algorithmus ist dem strikten Gleichheitsvergleich `===` ähnlich (bei dem `-0` und `+0` als gleich betrachtet werden), unterscheidet sich jedoch dadurch, dass {{jsxref("NaN")}} als gleich zu sich selbst betrachtet wird. ([Firefox bug 2025779](https://bugzil.la/2025779)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 152                  | Nein                     |
| Developer Edition | 152                  | Nein                     |
| Beta              | 152                  | Nein                     |
| Release           | 152                  | Nein                     |

- `javascript.options.experimental.iterator_includes`
  - : Auf `true` setzen, um zu aktivieren.

### TC39 Intl.Locale info Vorschlag

Der [TC39 Intl.Locale info Vorschlag](https://github.com/tc39/proposal-intl-locale-info) wird jetzt unterstützt. Dies umfasst alle Instanzmethoden auf `Intl.Locale`, die mit "get" beginnen — {{jsxref("Intl/Locale/getCalendars", "Intl.Locale.prototype.getCalendars()")}}, {{jsxref("Intl/Locale/getCollations", "Intl.Locale.prototype.getCollations()")}}, {{jsxref("Intl/Locale/getHourCycles", "Intl.Locale.prototype.getHourCycles()")}}, {{jsxref("Intl/Locale/getNumberingSystems", "Intl.Locale.prototype.getNumberingSystems()")}}, {{jsxref("Intl/Locale/getTextInfo", "Intl.Locale.prototype.getTextInfo()")}}, {{jsxref("Intl/Locale/getTimeZones", "Intl.Locale.prototype.getTimeZones()")}}, {{jsxref("Intl/Locale/getWeekInfo", "Intl.Locale.prototype.getWeekInfo()")}}. ([Firefox bug 1693576](https://bugzil.la/1693576)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 152                  | Nein                     |
| Developer Edition | —                    | —                        |
| Beta              | —                    | —                        |
| Release           | —                    | —                        |

- `javascript.options.experimental.intl_locale_info`
  - : Auf `true` setzen, um in Nightly zu aktivieren.

### Textmodul-Import

Die `with` Klausel [`{ type: "text" }`](/de/docs/Web/JavaScript/Reference/Statements/import/with#text_modules_type_text) ermöglicht es, den Quellcode eines Moduls als Zeichenfolgewert zu importieren. Der Medientyp der Antwort wird ignoriert, und der Inhalt wird als Text geparst, selbst wenn die Quelle Skripte oder andere ausführbare Codes enthält. ([Firefox bug 2024854](https://bugzil.la/2024854)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 152                  | Nein                     |
| Developer Edition | 152                  | Nein                     |
| Beta              | 152                  | Nein                     |
| Release           | 152                  | Nein                     |

- `javascript.options.experimental.import_text`
  - : Auf `true` setzen, um zu aktivieren.

### Mehrere Import-Maps

Unterstützung für [mehrere Import-Maps](/de/docs/Web/HTML/Reference/Elements/script/type/importmap#merging_multiple_import_maps). Diese geben Entwicklern mehr Flexibilität bei der Strukturierung und dem Laden von JavaScript-Modulen, da sie nicht mehr alle ihre Modulmappings im Voraus kennen und in einer einzigen Import-Map deklarieren müssen, die alle Module lädt. ([Firefox bug 1916277](https://bugzil.la/1916277)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 150                  | Nein                     |
| Developer Edition | 150                  | Nein                     |
| Beta              | 150                  | Nein                     |
| Release           | 150                  | Nein                     |

- `dom.multiple_import_maps.enabled`
  - : Auf `true` setzen, um zu aktivieren.

## APIs

### Scoped custom element registries

Unterstützung für [abgegrenzte benutzerdefinierte Element-Register](/de/docs/Web/API/Web_components/Using_custom_elements#scoped_custom_element_registries) wird implementiert. Abgegrenzte Register erlauben es einem Schattenbaum, ein unabhängiges [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry) zu erstellen, dessen Definitionen nur für diesen spezifischen DOM-Unterbaum gelten. Dies kann verwendet werden, um Kollisionen zu vermeiden, bei denen mehrere Webkomponenten Elemente mit demselben Namen deklarieren.

Die Implementierung umfasst:

- `customElementRegistry` Eigenschaft auf [`Document`](/de/docs/Web/API/Document), [`Element`](/de/docs/Web/API/Element), und [`ShadowRoot`](/de/docs/Web/API/ShadowRoot). ([Firefox bug 2018900](https://bugzil.la/2018900)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 150                  | Nein                     |
| Developer Edition | 150                  | Nein                     |
| Beta              | 150                  | Nein                     |
| Release           | 150                  | Nein                     |

- `dom.scoped-custom-element-registries.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### CSS Typed Object Model Level 1

Die Implementierungsarbeit hat am [CSS Typed OM Level 1](https://drafts.css-houdini.org/css-typed-om/) begonnen. Zum Beispiel wird die [`to()`](/de/docs/Web/API/CSSNumericValue/to) Methode der [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) Schnittstelle unterstützt, um einen CSS-numerischen Wert von einer Einheit in eine andere umzuwandeln. ([Firefox bug 1278697](https://bugzil.la/1278697)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 149                  | Nein                     |
| Developer Edition | 149                  | Nein                     |
| Beta              | 149                  | Nein                     |
| Release           | 149                  | Nein                     |

- `layout.css.typed-om.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Grafik: Canvas, WebGL und WebGPU

#### WebGL: Entwurfserweiterungen

Wenn diese Einstellung aktiviert ist, werden alle WebGL-Erweiterungen im "Entwurf"-Status, die getestet werden, zur Verwendung aktiviert. Derzeit gibt es keine WebGL-Erweiterungen, die von Firefox getestet werden.

#### WebGPU API

Die [WebGPU API](/de/docs/Web/API/WebGPU_API) bietet Unterstützung auf niedriger Ebene für die Durchführung von Berechnungen und Grafikwiedergabe mithilfe der [Graphics Processing Unit](https://en.wikipedia.org/wiki/Graphics_Processing_Unit) (GPU) des Geräts oder Computers des Benutzers. Ab Version 142 ist dies unter Windows in allen Kontexten außer im Service-Worker aktiviert. Ab Version 147 ist dies unter macOS auf Apple Silicon in allen Browserkontexten außer im Service-Worker aktiviert. Für andere Plattformen wie Linux und macOS auf Intel Silicon ist es in Nightly aktiviert. Siehe [Firefox bug 1602129](https://bugzil.la/1602129) für unseren Fortschritt zu dieser API.

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert?                                                                 |
| ----------------- | -------------------- | ---------------------------------------------------------------------------------------- |
| Nightly           | 141                  | Ja                                                                                       |
| Developer Edition | 141                  | Nein (Ja unter Windows und macOS auf Apple Silicon, nicht einschließlich Service-Worker) |
| Beta              | 141                  | Nein (Ja unter Windows und macOS auf Apple Silicon, nicht einschließlich Service-Worker) |
| Release           | 141                  | Nein (Ja unter Windows und macOS auf Apple Silicon, nicht einschließlich Service-Worker) |

- `dom.webgpu.enabled`
  - : Auf `true` setzen, um zu aktivieren (aktiviert in Nightly und unter Windows in allen Releases)
- `dom.webgpu.service-workers.enabled`
  - : Auf `true` setzen, um zu aktivieren (aktiviert in Nightly)

### WebRTC und Medien

Die folgenden experimentellen Funktionen umfassen diejenigen, die in Media-APIs wie der [WebRTC API](/de/docs/Web/API/WebRTC_API), der [Web Audio API](/de/docs/Web/API/Web_Audio_API), der [Media Source Extensions API](/de/docs/Web/API/Media_Source_Extensions_API), der [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API) und der [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) gefunden werden.

#### Überprüfung der Browserunterstützung für Kodierung/Decodierung von WebRTC-Medien

Der `webrtc` Typ kann jetzt als Option für [`MediaCapabilities.decodingInfo()`](/de/docs/Web/API/MediaCapabilities/decodingInfo#webrtc) und [`MediaCapabilities.encodingInfo()`](/de/docs/Web/API/MediaCapabilities/encodingInfo#webrtc) übergeben werden. Dies ermöglicht Entwicklern zu überprüfen, wie gut ein Benutzeragent eine bestimmte Konfiguration für WebRTC dekodieren oder kodieren kann. Die Unterstützung für den nicht standardmäßigen [`transmission`](/de/docs/Web/API/MediaCapabilities/encodingInfo#transmission) Typ, der als Alias für `webrtc` verwendet wurde, wird entfernt. ([Firefox bug 1825286](https://bugzil.la/1825286)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 152                  | Nein                     |
| Developer Edition | 152                  | Nein                     |
| Beta              | 152                  | Nein                     |
| Release           | 152                  | Nein                     |

- `media.mediacapabilities.webrtc.enabled`
  - : Auf `true` setzen, um zu aktivieren.

#### HTMLMediaElement Eigenschaften: audioTracks und videoTracks

Wenn diese Funktion aktiviert ist, werden die Eigenschaften [`HTMLMediaElement.audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks) und [`HTMLMediaElement.videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks) zu allen HTML-Medienelementen hinzugefügt. Da Firefox jedoch derzeit keine Unterstützung für mehrere Audio- und Videospuren bietet, funktionieren die häufigsten Anwendungsfälle für diese Eigenschaften nicht, sodass sie beide standardmäßig deaktiviert sind. Siehe [Firefox bug 1057233](https://bugzil.la/1057233) für weitere Details.

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 33                   | Nein                     |
| Developer Edition | 33                   | Nein                     |
| Beta              | 33                   | Nein                     |
| Release           | 33                   | Nein                     |

- `media.track.enabled`
  - : Auf `true` setzen, um zu aktivieren.

#### Asynchrone SourceBuffer hinzufügen und entfernen

Dies fügt die Promise-basierten Methoden [`appendBufferAsync()`](/de/docs/Web/API/SourceBuffer/appendBufferAsync) und [`removeAsync()`](/de/docs/Web/API/SourceBuffer/removeAsync) zum Hinzufügen und Entfernen von Mediensourcenpuffern zur [`SourceBuffer`](/de/docs/Web/API/SourceBuffer) Schnittstelle hinzu. Siehe [Firefox bug 1280613](https://bugzil.la/1280613) und [Firefox bug 778617](https://bugzil.la/778617) für weitere Informationen.

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 62                   | Nein                     |
| Developer Edition | 62                   | Nein                     |
| Beta              | 62                   | Nein                     |
| Release           | 62                   | Nein                     |

- `media.mediasource.experimental.enabled`
  - : Auf `true` setzen, um zu aktivieren.

#### AVIF-Kompatibilitätsstrenge

Die `image.avif.compliance_strictness` Einstellung kann verwendet werden, um die _Strenge_ zu steuern, die beim Verarbeiten von [AVIF](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) Bildern angewendet wird. Dies ermöglicht Firefox-Benutzern, Bilder anzuzeigen, die in einigen anderen Browsern angezeigt werden, auch wenn sie nicht strikt konform sind.

| Release-Kanal     | Hinzugefügte Version | Standardwert |
| ----------------- | -------------------- | ------------ |
| Nightly           | 92                   | 1            |
| Developer Edition | 92                   | 1            |
| Beta              | 92                   | 1            |
| Release           | 92                   | 1            |

- `image.avif.compliance_strictness`
  - : Numerischer Wert, der ein _Strengheitsniveau_ angibt. Zulässige Werte sind:
    - `0`: Zulässig. Akzeptieren Sie Bilder mit Spezifikationsverletzungen in den Empfehlungen ("sollte" Sprache) und Anforderungen ("muss" Sprache), sofern sie sicher oder eindeutig interpretiert werden können.
    - `1` **(Standard)**: Gemischt. Verwerfen Sie Verstöße gegen Anforderungen ("muss"), aber erlauben Sie Verstöße gegen Empfehlungen ("sollte").
    - `2`: Streng. Verwerfen Sie alle Verstöße gegen festgelegte Anforderungen oder Empfehlungen.

#### Unterstützung für JPEG XL

Firefox unterstützt [JPEG XL](https://jpeg.org/jpegxl/) Bilder, wenn diese Funktion aktiviert ist. Siehe [Firefox bug 1539075](https://bugzil.la/1539075) für weitere Details.

Beachten Sie, dass, wie unten gezeigt, die Funktion nur auf Nightly-Builds verfügbar ist (unabhängig davon, ob die Einstellung gesetzt ist). In Firefox 149 wurde der bisherige C++ [JPEG XL](https://jpeg.org/jpegxl/) Bilddecoder durch eine neue, auf Rust basierende Implementierung ersetzt, die die `jxl-rs`-Bibliothek verwendet ([Firefox bug 1986393](https://bugzil.la/1986393)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 90                   | Nein                     |
| Developer Edition | —                    | —                        |
| Beta              | —                    | —                        |
| Release           | —                    | —                        |

- `image.jxl.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### WebVR API (Deaktiviert)

Die veraltete [WebVR API](/de/docs/Web/API/WebVR_API) ist auf dem Weg zur Entfernung. Sie ist standardmäßig in allen Builds deaktiviert [Firefox bug 1750902](https://bugzil.la/1750902).

| Release-Kanal     | Entfernte Version | Standardmäßig aktiviert? |
| ----------------- | ----------------- | ------------------------ |
| Nightly           | 98                | Nein                     |
| Developer Edition | 98                | Nein                     |
| Beta              | 98                | Nein                     |
| Release           | 98                | Nein                     |

- `dom.vr.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### GeometryUtils Methoden: convertPointFromNode(), convertRectFromNode(), und convertQuadFromNode()

Die `GeometryUtils` Methoden `convertPointFromNode()`, `convertRectFromNode()`, und `convertQuadFromNode()` mappen den angegebenen Punkt, das Rechteck oder das Viereck von dem [`Node`](/de/docs/Web/API/Node), auf dem sie aufgerufen werden, zu einem anderen Knoten. (Siehe [Firefox bug 918189](https://bugzil.la/918189) für weitere Details.)

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 31                   | Nein                     |
| Developer Edition | 31                   | Nein                     |
| Beta              | 31                   | Nein                     |
| Release           | 31                   | Nein                     |

- `layout.css.convertFromNode.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### GeometryUtils Methode: getBoxQuads()

Die `GeometryUtils` Methode `getBoxQuads()` gibt die CSS-Boxen für einen [`Node`](/de/docs/Web/API/Node) relativ zu jedem anderen Knoten oder dem Ansichtsfenster zurück. (Siehe [Firefox bug 917755](https://bugzil.la/917755) für weitere Details.)

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 31                   | Nein                     |
| Developer Edition | 31                   | Nein                     |
| Beta              | 31                   | Nein                     |
| Release           | 31                   | Nein                     |

- `layout.css.getBoxQuads.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Payment Request API

#### Primäres Zahlungsmanagement

Die [Payment Request API](/de/docs/Web/API/Payment_Request_API) bietet Unterstützung für das Verwalten von webbasierten Zahlungen innerhalb von Webinhalten oder Apps. Aufgrund eines Fehlers, der während des Testens der Benutzeroberfläche auftrat, haben wir beschlossen, die Veröffentlichung dieser API zu verschieben, während Diskussionen über mögliche Änderungen an der API stattfinden. Die Arbeit ist im Gange. (Siehe [Firefox bug 1318984](https://bugzil.la/1318984) für weitere Details.)

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 55                   | Nein                     |
| Developer Edition | 55                   | Nein                     |
| Beta              | 55                   | Nein                     |
| Release           | 55                   | Nein                     |

- `dom.payments.request.enabled`
  - : Auf `true` setzen, um zu aktivieren.
- `dom.payments.request.supportedRegions`
  - : Ländercodes als kommagetrennte Whitelist von Regionen (z. B. `US,CA`).

### WebShare API

Die [Web Share API](/de/docs/Web/API/Web_Share_API) ermöglicht das Teilen von Dateien, URLs und anderen Daten von einer Seite. Diese Funktion ist auf Android in allen Builds aktiviert, aber auf dem Desktop hinter einer Einstellung (sofern unten nicht anders angegeben).

| Release-Kanal     | Geänderte Version | Standardmäßig aktiviert?                    |
| ----------------- | ----------------- | ------------------------------------------- |
| Nightly           | 71                | Nein (Standard). Ja (Windows ab Version 92) |
| Developer Edition | 71                | Nein                                        |
| Beta              | 71                | Nein                                        |
| Release           | 71                | Nein (Desktop). Ja (Android).               |

- `dom.webshare.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Benachrichtigungen API

Benachrichtigungen haben die [`requireInteraction`](/de/docs/Web/API/Notification/requireInteraction) Eigenschaft standardmäßig auf true auf Windows-Systemen und in der Nightly-Version gesetzt ([Firefox bug 1794475](https://bugzil.la/1794475)).

| Release-Kanal     | Version geändert | Standardmäßig aktiviert? |
| ----------------- | ---------------- | ------------------------ |
| Nightly           | 117              | Ja                       |
| Developer Edition | 117              | Nein                     |
| Beta              | 117              | Nein                     |
| Release           | 117              | Nur Windows              |

- `dom.webnotifications.requireinteraction.enabled`
  - : Auf `true` setzen, um zu aktivieren.

## Sicherheit und Datenschutz

### Unsichere Seitenkennzeichnung

Die beiden `security.insecure_connection_text_*` Einstellungen fügen ein "Nicht sicher"-Textlabel in der Adressleiste neben dem traditionellen Schlosssymbol hinzu, wenn eine Seite unsicher geladen wird (d.h. unter Verwendung von {{Glossary("HTTP", "HTTP")}} anstelle von {{Glossary("HTTPS", "HTTPS")}}). Die Einstellung `browser.urlbar.trimHttps` kürzt das `https:`-Prefix von URLs in der Adressleiste. Siehe [Firefox bug 1853418](https://bugzil.la/1853418) für weitere Details.

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 121                  | Ja                       |
| Developer Edition | 60                   | Nein                     |
| Beta              | 60                   | Nein                     |
| Release           | 60                   | Nein                     |

- `security.insecure_connection_text.enabled`
  - : Auf `true` setzen, um das Textlabel für den normalen Browsing-Modus zu aktivieren.
- `security.insecure_connection_text.pbmode.enabled`
  - : Auf `true` setzen, um das Textlabel für den privaten Browsing-Modus zu aktivieren.
- `browser.urlbar.trimHttps`
  - : Auf `true` setzen, um das `https:`-Prefix von URLs in der Adressleiste zu kürzen.

### Einschränkung von Inhalten für Erwachsene mit `<meta name="rating">`

Das nicht standardmäßige [`<meta name="rating">`](/de/docs/Web/HTML/Reference/Elements/meta) Element kann auf einer Webseite eingebettet werden, um den Inhalt der Seite als eingeschränkt/erwachsen zu kennzeichnen. Zum Zeitpunkt des Schreibens gibt es zwei mögliche `content` Werte, `adult` ([von Google definiert](https://developers.google.com/search/docs/specialty/explicit/guidelines#add-metadata)) und `RTA-5042-1996-1400-1577-RTA` ([von ASACP definiert](https://www.rtalabel.org/?content=howto#top)), die die gleiche Wirkung haben (mehr Optionen können in Zukunft hinzugefügt werden).

Die folgenden `<meta>` Elemente sind gleichwertig:

```html
<meta name="rating" content="adult" />
<meta name="rating" content="RTA-5042-1996-1400-1577-RTA" />
```

Browser, die dieses Element erkennen, können dann Maßnahmen ergreifen, um Benutzer daran zu hindern, den Inhalt anzusehen. Die Implementierung von Firefox ersetzt die Seite durch den Inhalt, der unter `about:restricted` gefunden wird, welcher dem Benutzer erklärt, dass er versucht, eingeschränkten Inhalt anzuzeigen, warum er ihn nicht anzeigen kann und ihm eine Zurück-Schaltfläche gibt, um von wo er gekommen ist, zurückzukehren.

Siehe [Firefox bug 1991135](https://bugzil.la/1991135) für weitere Details.

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 146                  | Nein                     |
| Developer Edition | 146                  | Nein                     |
| Beta              | 146                  | Nein                     |
| Release           | 146                  | Nein                     |

- `security.restrict_to_adults.always`
  - : Auf `true` setzen, um den Zugriff auf Webseiten einzuschränken, die sich selbst als erwachsen identifizieren, indem sie ein `<meta name="rating">` Element einfügen.
- `security.restrict_to_adults.respect_platform`
  - : Auf `true` setzen, um den Zugriff auf Webseiten einzuschränken, die sich selbst als erwachsen identifizieren, indem sie ein `<meta name="rating">` Element einfügen, nur wenn geeignete Kindersicherungen auf dem zugrunde liegenden Betriebssystem eingestellt sind (zum Beispiel, wenn die macOS _Inhalte & Datenschutz_ Einstellungen auf die Einschränkung expliziter Webinhalte eingestellt sind).

### Berechtigungsrichtlinie / Funktionsrichtlinie

[Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) erlaubt es Webentwicklern, selektiv bestimmte Funktionen und APIs im Browser zu aktivieren, zu deaktivieren oder deren Verhalten zu ändern. Es ist ähnlich wie CSP, aber steuert Funktionen anstelle von Sicherheitsverhalten. Dies wird in Firefox als **Funktionsrichtlinie** implementiert, der Name, der in einer früheren Version der Spezifikation verwendet wurde.

Beachten Sie, dass unterstützte Richtlinien durch das [`allow`](/de/docs/Web/HTML/Reference/Elements/iframe#allow) Attribut auf `<iframe>` Elementen gesetzt werden können, selbst wenn die Benutzereinstellung nicht gesetzt ist.

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 65                   | Nein                     |
| Developer Edition | 65                   | Nein                     |
| Beta              | 65                   | Nein                     |
| Release           | 65                   | Nein                     |

- `dom.security.featurePolicy.header.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Datenschutzwahrende Attributierung API (PPA)

[PPA API](https://support.mozilla.org/en-US/kb/privacy-preserving-attribution) bietet eine Alternative zum Benutzer-Tracking für Anzeigenattribution, indem das neue `navigator.privateAttribution` Objekt mit den Methoden `saveImpression()` und `measureConversion()` verwendet wird. Lesen Sie mehr über PPA [im ursprünglichen Erklärer](https://github.com/mozilla/explainers/tree/main/archive/ppa-experiment) und die [vorgeschlagene Spezifikation](https://w3c.github.io/ppa/). Dieses Experiment kann für Websites über [Herkunftsversuch](https://wiki.mozilla.org/Origin_Trials) oder im Browser enabled aktiviert werden, indem die Einstellung auf `1` gesetzt wird. ([Firefox bug 1900929](https://bugzil.la/1900929)).

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

Die {{httpheader("Integrity-Policy")}} und {{httpheader("Integrity-Policy-Report-Only")}} HTTP-Header werden jetzt für Style-Ressourcen unterstützt. Diese ermöglichen es Websites, entweder [Subressourcen-Integritätsgarantien](/de/docs/Web/Security/Defenses/Subresource_Integrity) für Styles durchzusetzen oder nur Verstöße gegen die Richtlinie zu melden. Beachten Sie, dass Firefox Berichtspunkte ignoriert und Verstöße in die Entwicklerkonsole protokolliert. Wenn `Integrity-Policy` verwendet wird, blockiert der Browser das Laden von Styles, die in einem {{HTMLElement("link")}}-Element mit [`rel="stylesheet"`](/de/docs/Web/HTML/Reference/Attributes/rel#stylesheet) referenziert werden und entweder das [`integrity`](/de/docs/Web/HTML/Reference/Elements/script#integrity) Attribut nicht haben oder einen Integritätshash, der nicht mit der Ressource auf dem Server übereinstimmt. ([Firefox bug 1976656](https://bugzil.la/1976656)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 142                  | Nein                     |
| Developer Edition | 142                  | Nein                     |
| Beta              | 142                  | Nein                     |
| Release           | 142                  | Nein                     |

- `security.integrity_policy.stylesheet.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Idempotency-Key

Der {{httpheader("Idempotency-Key")}} HTTP-Anforderungsheader kann durch Website-Clientcode verwendet werden, um {{HTTPMethod("POST")}} oder {{HTTPMethod("PATCH")}} Anforderungen {{Glossary("idempotent", "idempotent")}} zu machen, wenn er mit einem Server verwendet wird, der es unterstützt. Die Spezifikation gibt an, dass der Server dokumentieren und anzeigen sollte, welche Endpunkte diesen Header erfordern, das Format des Schlüssels und die erwarteten Fehlerantworten.

Firefox fügt den Header _automatisch_ mit einem eindeutigen Schlüssel für jede neue `POST` Anforderung hinzu, wenn er nicht bereits durch den Clientcode der Seite hinzugefügt wurde. Dies vereinfacht den im Clientcode erforderlichen Code, um mit Servern zu arbeiten, die die Funktion unterstützen.

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

Der HTTP [`Accept`](/de/docs/Web/HTTP/Reference/Headers/Accept) Header in [Standardanfragen und Bildanfragen](/de/docs/Web/HTTP/Guides/Content_negotiation/List_of_default_Accept_values) kann über eine Einstellung konfiguriert werden, um die Unterstützung für den `image/jxl` MIME-Typ anzuzeigen.

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 128                  | Nein                     |
| Developer Edition | 128                  | Nein                     |
| Beta              | 128                  | Nein                     |
| Release           | 128                  | Nein                     |

- `image.jxl.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### SameSite=Lax standardmäßig

[`SameSite` Cookies](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) haben standardmäßig den Wert `Lax`. Mit dieser Einstellung werden Cookies nur gesendet, wenn ein Benutzer zur Ursprungsseite navigiert, nicht für Anfragen von Drittanbietern, um Bilder oder Frames in eine Drittanbieter-Seite zu laden und so weiter. Für weitere Details siehe [Firefox bug 1617609](https://bugzil.la/1617609).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 69                   | Nein                     |
| Developer Edition | 69                   | Nein                     |
| Beta              | 69                   | Nein                     |
| Release           | 69                   | Nein                     |

- `network.cookie.sameSite.laxByDefault`
  - : Auf `true` setzen, um zu aktivieren.

### Access-Control-Allow-Headers Wildcard umfasst nicht Authorization

Der [`Access-Control-Allow-Headers`](/de/docs/Web/HTTP/Reference/Headers/Access-Control-Allow-Headers) ist ein Antwort-Header auf eine {{Glossary("Preflight_request", "CORS-Preflight-Anforderung")}}, die angibt, welche Anfrage-Header in die endgültige Anforderung aufgenommen werden dürfen. Die Antwortdirektive kann einen Platzhalter (`*`) enthalten, der anzeigt, dass die endgültige Anforderung alle Header außer dem `Authorization` Header enthalten darf.

Standardmäßig enthält Firefox den `Authorization` Header in der endgültigen Anforderung, nachdem eine Antwort mit `Access-Control-Allow-Headers: *` empfangen wurde. Setzen Sie die Einstellung auf `false`, um sicherzustellen, dass Firefox den `Authorization` Header nicht enthält. Für weitere Details siehe [Firefox bug 1687364](https://bugzil.la/1687364).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 115                  | Ja                       |
| Developer Edition | 115                  | Ja                       |
| Beta              | 115                  | Ja                       |
| Release           | 115                  | Ja                       |

- `network.cors_preflight.authorization_covered_by_wildcard`
  - : Auf `true` setzen, um zu aktivieren.

## Entwicklerwerkzeuge

Die Entwicklerwerkzeuge von Mozilla entwickeln sich ständig weiter. Wir experimentieren mit neuen Ideen, fügen neue Funktionen hinzu und testen sie in den Nightly- und Developer Edition-Kanälen, bevor sie in die Beta- und Release-Version gelangen. Die unten stehenden Funktionen sind die aktuellen experimentellen Funktionen für Entwicklerwerkzeuge.

**Keine experimentellen Funktionen in diesem Release-Zyklus.**

## Siehe auch

- [Firefox Entwickler-Release-Hinweise](/de/docs/Mozilla/Firefox/Releases)
- [Firefox Nightly](https://www.firefox.com/en-US/channel/desktop/)
- [Firefox Developer Edition](https://www.firefox.com/en-US/channel/desktop/developer/)
