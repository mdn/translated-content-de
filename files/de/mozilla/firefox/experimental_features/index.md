---
title: Experimentelle Funktionen in Firefox
short-title: Experimentelle Funktionen
slug: Mozilla/Firefox/Experimental_features
l10n:
  sourceCommit: 2cd2b1303d15452b977a309a9d4e6618d20fc0c0
---

Diese Seite listet experimentelle und teilweise implementierte Funktionen in Firefox auf, einschließlich sich entwickelnder oder vorgeschlagener Webplattform-Standards. Jedes der folgenden Einträge enthält Informationen über die Builds, in denen eine Funktion enthalten ist (Nightly, Beta, Developer Edition oder Release), ob sie standardmäßig aktiviert ist oder nicht, und den Namen der **Einstellung**, mit der Sie die Funktion aktivieren oder konfigurieren können. Die Beschreibung jeder Funktion enthält auch Links zu relevanten [Bugzilla-Fehlern](https://bugzilla.mozilla.org), die die Funktion implementieren oder aktivieren. Diese Informationen ermöglichen es Ihnen, experimentelle Funktionen auszuprobieren und Feedback zu geben, bevor sie offiziell veröffentlicht werden.

Hinsichtlich des Lebenszyklus erscheinen neue Funktionen in der Regel zuerst in [Nightly](https://www.firefox.com/en-US/channel/desktop/#nightly), wo sie oft standardmäßig aktiviert sind, um frühes Feedback und Tests zu erhalten. Wenn keine größeren Probleme gefunden werden, sind sie in den Vorab-Builds [Beta](https://www.firefox.com/en-US/channel/desktop/#beta) und [Developer Edition](https://www.firefox.com/en-US/channel/desktop/developer/) enthalten. Schließlich werden genehmigte Funktionen im stabilen [Release](https://www.firefox.com/en-US/) Kanal veröffentlicht. Wenn eine Funktion in einem Release standardmäßig aktiviert ist, gilt sie nicht mehr als experimentell und wird von dieser Seite entfernt.

Um diese Funktionen zu aktivieren, geben Sie `about:config` in die Firefox-Adressleiste ein, suchen Sie nach der zugehörigen **Einstellung** und ändern Sie deren Wert, der normalerweise zwischen `true` und `false` umgeschaltet werden kann. Abhängig von der Funktion müssen Sie möglicherweise den Browser neu starten, damit die Änderung wirksam wird. Lesen Sie den [Firefox-Konfiguration-Editor](https://support.mozilla.org/en-US/kb/about-config-editor-firefox) Support-Artikel für weitere Informationen zur Verwaltung von Einstellungen in Firefox.

## HTML

### Layout für input type="search"

Das Layout für `input type="search"` wurde aktualisiert. Dadurch hat ein Suchfeld ein Löschsymbol, sobald jemand anfängt, darin zu tippen, um andere Browserimplementierungen zu entsprechen. (Siehe [Firefox-Fehler 558594](https://bugzil.la/558594) für weitere Details.)

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 81                  | Nein                     |
| Developer Edition | 81                  | Nein                     |
| Beta              | 81                  | Nein                     |
| Release           | 81                  | Nein                     |

- `layout.forms.input-type-search.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Passwort-Anzeige umschalten

HTML-Passworteingabeelemente ([`<input type="password">`](/de/docs/Web/HTML/Reference/Elements/input/password)) enthalten ein Augensymbol, das umgeschaltet werden kann, um das Passwort sichtbar zu machen oder zu verbergen ([Firefox-Fehler 502258](https://bugzil.la/502258)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 96                  | Nein                     |
| Developer Edition | 96                  | Nein                     |
| Beta              | 96                  | Nein                     |
| Release           | 96                  | Nein                     |

- `layout.forms.reveal-password-button.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Zeitwahl in `datetime-local` und `time` Eingabeelementen

Die HTML [`<input type="datetime-local">`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local) und [`<input type="time">`](/de/docs/Web/HTML/Reference/Elements/input/time) Elemente unterstützen eine Zeitwahl. ([Firefox-Fehler 1726108](https://bugzil.la/1726108)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 144                 | Nein                     |
| Developer Edition | 144                 | Nein                     |
| Beta              | 144                 | Nein                     |
| Release           | 144                 | Nein                     |

- `dom.forms.datetime.timepicker`
  - : Auf `true` setzen, um zu aktivieren.

### `alpha` und `colorspace` Attribute in `color` Eingabeelementen

Das HTML [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color) Element unterstützt die [`alpha`](/de/docs/Web/HTML/Reference/Elements/input/color#alpha) & [`colorspace`](/de/docs/Web/HTML/Reference/Elements/input/color#colorspace) Attribute. ([Firefox-Fehler 1919718](https://bugzil.la/1919718)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 149                 | Ja                       |
| Developer Edition | -                   | -                        |
| Beta              | -                   | -                        |
| Release           | -                   | -                        |

- `dom.forms.html_color_picker.enabled`
  - : Auf `true` setzen, um zu aktivieren.

## CSS

### `circle()` und `ellipse()` erlauben `farthest-corner` und `closest-corner` Schlüsselwörter

Die `farthest-corner` und `closest-corner` Schlüsselwörter können nun zur Spezifizierung der Radii-Werte der [`ellipse()`](/de/docs/Web/CSS/Reference/Values/basic-shape/ellipse) und [`circle()`](/de/docs/Web/CSS/Reference/Values/basic-shape/circle) CSS-Basisformen verwendet werden. (Siehe [Firefox-Fehler 2037673](https://bugzil.la/2037673) für weitere Details.)

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 153                 | Ja                       |
| Developer Edition | 153                 | Nein                     |
| Beta              | 153                 | Nein                     |
| Release           | 153                 | Nein                     |

- `layout.css.ellipse-corners.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Hex-Boxen zur Darstellung streunender Steuerzeichen

Diese Funktion rendert Steuerzeichen (Unicode-Kategorie Cc) außer _Tab_ (`U+0009`), _Zeilenumbruch_ (`U+000A`), _Formfeed_ (`U+000C`) und _Wagenrücklauf_ (`U+000D`) als Hex-Box, wenn sie nicht erwartet werden. (Siehe [Firefox-Fehler 1099557](https://bugzil.la/1099557) für weitere Details.)

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 43                  | Ja                       |
| Developer Edition | 43                  | Nein                     |
| Beta              | 43                  | Nein                     |
| Release           | 43                  | Nein                     |

- `layout.css.control-characters.visible`
  - : Auf `true` setzen, um zu aktivieren.

### initial-letter Eigenschaft

Die {{cssxref("initial-letter")}} CSS-Eigenschaft ist Teil der [CSS Inline Layout](https://drafts.csswg.org/css-inline/) Spezifikation und ermöglicht es Ihnen zu spezifizieren, wie fallende, erhobene und versenkte Initialbuchstaben angezeigt werden. (Siehe [Firefox-Fehler 1223880](https://bugzil.la/1223880) für weitere Details.)

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 50                  | Nein                     |
| Developer Edition | 50                  | Nein                     |
| Beta              | 50                  | Nein                     |
| Release           | 50                  | Nein                     |

- `layout.css.initial-letter.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### fit-content() Funktion

Die [`fit-content()`](/de/docs/Web/CSS/Reference/Values/fit-content_function) Funktion, wie sie auf {{cssxref("width")}} und andere Größen Eigenschaften angewendet wird. Diese Funktion wird bereits gut unterstützt für CSS Grid Layout Spurgrößen. (Siehe [Firefox-Fehler 1312588](https://bugzil.la/1312588) für weitere Details.)

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 91                  | Nein                     |
| Developer Edition | 91                  | Nein                     |
| Beta              | 91                  | Nein                     |
| Release           | 91                  | Nein                     |

- `layout.css.fit-content-function.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Scroll-gesteuerte Animationen

Früher "scroll-verknüpfte Animationen" genannt, ist eine [scroll-gesteuerte Animation](/de/docs/Web/CSS/Guides/Scroll-driven_animations) von der Scroll-Position einer Bildlaufleiste statt von Zeit oder einer anderen Dimension abhängig. Die {{cssxref('scroll-timeline-name')}} und {{cssxref('scroll-timeline-axis')}} Eigenschaften (und die {{cssxref('scroll-timeline')}} Kurzschreibweise) ermöglichen es Ihnen, anzugeben, dass eine bestimmte Bildlaufleiste in einem bestimmten benannten Container als Quelle für eine scroll-gesteuerte Animation verwendet werden kann. Die Scroll-Zeitachse kann dann mit einer [Animation](/de/docs/Web/CSS/Guides/Animations) durch Einstellen der {{cssxref('animation-timeline')}} Eigenschaft auf den Namen zugeordnet werden, der unter Verwendung von `scroll-timeline-name` definiert wurde.

Wenn Sie die {{cssxref('scroll-timeline')}} Kurzschreibweise verwenden, muss die Reihenfolge der Eigenschaftswerte {{cssxref('scroll-timeline-name')}} gefolgt von {{cssxref('scroll-timeline-axis')}} sein. Die Lang- und Kurzschreibweiseigenschaften sind beide hinter der Präferenz verfügbar. Alternativ können Sie die funktionale Notation {{cssxref("animation-timeline/scroll")}} mit {{cssxref('animation-timeline')}} verwenden, um anzugeben, dass eine Bildlaufachsen in einem übergeordneten Element für die Zeitachse verwendet wird.

Für weitere Informationen siehe [Firefox-Fehler 1807685](https://bugzil.la/1807685), [Firefox-Fehler 1804573](https://bugzil.la/1804573), [Firefox-Fehler 1809005](https://bugzil.la/1809005), [Firefox-Fehler 1676791](https://bugzil.la/1676791), [Firefox-Fehler 1754897](https://bugzil.la/1754897), [Firefox-Fehler 1817303](https://bugzil.la/1817303) und [Firefox-Fehler 1737918](https://bugzil.la/1737918).

Die {{cssxref('timeline-scope')}}, {{cssxref('animation-range-start')}} und {{cssxref('animation-range-end')}} Eigenschaften (und die {{cssxref('animation-range')}} Kurzschreibweise) werden noch nicht unterstützt. Für mehr Informationen siehe [Firefox-Fehler 1676779](https://bugzil.la/1676779).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 136                 | Ja                       |
| Developer Edition | 110                 | Nein                     |
| Beta              | 110                 | Nein                     |
| Release           | 110                 | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### prefers-reduced-transparency Medien Funktion

Die CSS {{cssxref("@media/prefers-reduced-transparency")}} Medienfunktion ermöglicht es Ihnen zu erkennen, ob ein Benutzer die Einstellung aktiviert hat, um die Menge an transparenten oder durchscheinenden Schichteffekten auf seinem Gerät zu minimieren. (Siehe [Firefox-Fehler 1736914](https://bugzil.la/1736914) für weitere Details.)

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 113                 | Nein                     |
| Developer Edition | 113                 | Nein                     |
| Beta              | 113                 | Nein                     |
| Release           | 113                 | Nein                     |

- `layout.css.prefers-reduced-transparency.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### inverted-colors Medien Funktion

Die CSS {{cssxref("@media/inverted-colors")}} Medienfunktion ermöglicht es Ihnen zu erkennen, ob ein Benutzeragent oder das zugrunde liegende Betriebssystem Farben umkehrt. (Siehe [Firefox-Fehler 1794628](https://bugzil.la/1794628) für weitere Details.)

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 114                 | Nein                     |
| Developer Edition | 114                 | Nein                     |
| Beta              | 114                 | Nein                     |
| Release           | 114                 | Nein                     |

- `layout.css.inverted-colors.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Named view progress timelines Eigenschaft

Die CSS {{cssxref("view-timeline-name")}} Eigenschaft ermöglicht es Ihnen, einem bestimmten Element einen Namen zu geben, der angibt, dass dessen übergeordnetes Scrollelement die Quelle einer Fortschrittszeitachse ist. Der Name kann dann der `animation-timeline` zugewiesen werden, die das zugehörige Element animiert, während es sich durch den sichtbaren Bereich seines übergeordneten Scrollelements bewegt. (Siehe [Firefox-Fehler 1737920](https://bugzil.la/1737920) für weitere Details.)

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 136                 | Ja                       |
| Developer Edition | 114                 | Nein                     |
| Beta              | 114                 | Nein                     |
| Release           | 114                 | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Anonyme view progress timelines Funktion

Die CSS {{cssxref("animation-timeline/view")}} Funktion ermöglicht es Ihnen zu spezifizieren, dass die `animation-timeline` für ein Element eine Fortschrittszeitachse ist, die das Element animiert, während es sich durch den sichtbaren Bereich seines übergeordneten Scrollelements bewegt. Die Funktion definiert die Achse des übergeordneten Elements, die die Zeitachse liefert, zusammen mit dem Einsatz im sichtbaren Bereich, an dem die Animation beginnt und endet. (Siehe [Firefox-Fehler 1808410](https://bugzil.la/1808410) für weitere Details.)

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 136                 | Ja                       |
| Developer Edition | 114                 | Nein                     |
| Beta              | 114                 | Nein                     |
| Release           | 114                 | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Vendor-präfix transform Eigenschaften

Die `-moz-` CSS transform Eigenschaften mit Präfixen können deaktiviert werden, indem die `layout.css.prefixes.transforms` Einstellung auf `false` gesetzt wird. Die Absicht ist, diese zu deaktivieren, sobald die standardmäßigen CSS-Zoomeigenschaften gut unterstützt sind. ([Firefox-Fehler 1886134](https://bugzil.la/1886134), [Firefox-Fehler 1855763](https://bugzil.la/1855763)).

Spezifisch wird diese Einstellung die folgenden Eigenschaften mit Präfixen deaktivieren:

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
  - : Auf `true` setzen, um zu aktivieren.

### Symmetrisches `letter-spacing`

Die CSS {{cssxref("letter-spacing")}} Eigenschaft teilt den spezifizierten Buchstabenabstand jetzt gleichmäßig auf beide Seiten jedes Zeichens auf. Dies unterscheidet sich vom aktuellen Verhalten, bei dem der Abstand hauptsächlich auf eine Seite hinzugefügt wird. Dieser Ansatz kann den Textabstand verbessern, insbesondere bei gemischtgerichtetem Text. ([Firefox-Fehler 1891446](https://bugzil.la/1891446)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 128                 | Ja                       |
| Developer Edition | 128                 | Ja                       |
| Beta              | 127                 | Nein                     |
| Release           | 127                 | Nein                     |

- `layout.css.letter-spacing.model`
  - : Auf `true` setzen, um zu aktivieren.

### Erlaubt Pseudo-Elemente nach elementgestützten Pseudo-Elementen

Es wurde begonnen, Pseudo-Elemente wie {{cssxref("::first-letter")}} und {{cssxref("::before")}} zu erlauben, an elementgestützte Pseudo-Elemente wie {{cssxref("::details-content")}} und {{cssxref("::file-selector-button")}} angehängt zu werden.

Dies ermöglicht es Benutzern beispielsweise, den ersten Buchstaben des {{htmlElement("details")}} Elements zu stylen, indem sie den CSS-Selektor `::details-content::first-letter` verwenden oder hinzufügen Inhalt vor einem {{HTMLElement("input")}} von [`type="file"`](/de/docs/Web/HTML/Reference/Elements/input/file) Gebrauch des CSS-Selektors `::file-selector-button::before`.

Derzeit kann nur die Unterstützung für `::details-content::first-letter` mit `@supports(::details-content::first-letter)` geparst werden. Das `::file-selector-button` Pseudo-Element ist noch nicht als elementgestütztes Pseudo-Element markiert, sodass es keinen Weg gibt, dies zu testen. ([Firefox-Fehler 1953557](https://bugzil.la/1953557), [Firefox-Fehler 1941406](https://bugzil.la/1941406)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 138                 | Nein                     |
| Developer Edition | 138                 | Nein                     |
| Beta              | 138                 | Nein                     |
| Release           | 138                 | Nein                     |

### `:heading` und `:heading()` Pseudoklassen

Die {{cssxref(":heading")}} Pseudoklasse ermöglicht es Ihnen, alle [Überschriftselemente](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) (`<h1>`-`<h6>`) auf einmal zu stylen, anstatt sie einzeln anzusprechen. Die funktionale {{cssxref(":heading()")}} Pseudoklasse ermöglicht es Ihnen, Überschriftselemente zu stylen, die mit einer kommagetrennten Liste von ganzen Zahlen übereinstimmen, die den Überschriftsebenen entsprechen. ([Firefox-Fehler 1974386](https://bugzil.la/1974386) & [Firefox-Fehler 1984310](https://bugzil.la/1984310)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 142                 | Nein                     |
| Developer Edition | 142                 | Nein                     |
| Beta              | 142                 | Nein                     |
| Release           | 142                 | Nein                     |

- `layout.css.heading-selector.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### `@custom-media` At-Regel

Die {{cssxref("@custom-media")}} CSS At-Regel definiert Aliase für lange oder komplexe Medienanfragen. Anstatt dieselbe fest codierte `<media-query-list>` in mehreren `@media` At-Regeln zu wiederholen, kann sie einmal in einer `@custom-media` At-Regel definiert und im gesamten Stylesheet bei Bedarf referenziert werden. ([Firefox-Fehler 1744292](https://bugzil.la/1744292)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 148                 | Nein                     |
| Developer Edition | 148                 | Nein                     |
| Beta              | 148                 | Nein                     |
| Release           | 148                 | Nein                     |

- `layout.css.custom-media.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### `<attr-type>` Werte in `attr()` CSS-Funktion

Die {{cssxref("attr")}} CSS Funktion unterstützt nun [`<attr-type>`](/de/docs/Web/CSS/Reference/Values/attr#attr-type) Werte. Dies ermöglicht es Ihnen zu spezifizieren, wie ein Attributwert in einen CSS Wert geparst wird und direkt aus [`data-*`](/de/docs/Web/HTML/How_to/Use_data_attributes) diese Werte zu übernehmen. ([Firefox-Fehler 1986631](https://bugzil.la/1986631), [Firefox-Fehler 1998245](https://bugzil.la/1998245))

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 152                 | Ja                       |
| Developer Edition | 149                 | Nein                     |
| Beta              | 149                 | Nein                     |
| Release           | 149                 | Nein                     |

- `layout.css.attr.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### `base-select` Wert für Eigenschaft `appearance` CSS

Der [`base-select`](/de/docs/Web/CSS/Reference/Properties/appearance#base-select) Wert für die {{cssxref("appearance")}} CSS Eigenschaft, die nur für das {{htmlelement("select")}} Element und {{cssxref("::picker()", "::picker(select)")}} Pseudo-Element relevant ist, ermöglicht es Ihnen, sie vollständig zu stylen. Derzeit wird nur das Styling des `<select>` Elements unterstützt. Das Styling des `::picker(select)` Pseudo-Elements wird in zukünftigen Versionen hinzugefügt. Diese Funktion ist Teil der [Anpassbare Auswahlelemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) Arbeit. Zwei Einstellungen müssen aktiviert sein, um sie zu verwenden. ([Firefox-Fehler 1974787](https://bugzil.la/1974787)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 149                 | Nein                     |
| Developer Edition | 149                 | Nein                     |
| Beta              | 149                 | Nein                     |
| Release           | 149                 | Nein                     |

- `dom.select.customizable_select.enabled`
  - : Auf `true` setzen, um zu aktivieren.
- `layout.css.appearance-base.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Namensraum-Attribute in `attr()` CSS-Funktion

Die {{cssxref("attr")}} CSS Funktion akzeptiert nun [Namensraum-Attribute](/de/docs/Web/CSS/Reference/Values/attr#namespaces). Dies ermöglicht es Ihnen, Attribute von Elementen von [XML](/de/docs/Web/XML)-basierten Sprachen wie [SVG](/de/docs/Web/SVG) zu übernehmen und sie entsprechend zu stylen. ([Firefox-Fehler 2014060](https://bugzil.la/2014060).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 150                 | Nein                     |
| Developer Edition | 150                 | Nein                     |
| Beta              | 150                 | Nein                     |
| Release           | 150                 | Nein                     |

- `layout.css.attr.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Absolut positionierte Elemente in Mehrspalten-Containern und Drucken

Absolut positionierte Elemente innerhalb von [Mehrspalten-Containern](/de/docs/Web/CSS/Guides/Multicol_layout) und beim Drucken sind nun korrekt positioniert und fragmentiert. Dies verbessert die Interoperabilität mit anderen Browsern und verhindert Layoutprobleme wie überlappenden Text oder Inhaltsverlust. ([Firefox-Fehler 2018797](https://bugzil.la/2018797)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 150                 | Ja                       |
| Developer Edition | 150                 | Nein                     |
| Beta              | 150                 | Nein                     |
| Release           | 150                 | Nein                     |

- `layout.abspos.fragmentainer-aware-positioning.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### `@container style()` Bereichssyntax-Abfragen

Die [`@container`](/de/docs/Web/CSS/Reference/At-rules/@container) CSS At-Regel [`style()`](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries) Abfragen unterstützen nun die _Bereichssyntax_. Dies ermöglicht es Ihnen zu überprüfen, ob ein Container eine gültige CSS benutzerdefinierte Eigenschaft hat und seinen Wert mit Vergleichsoperatoren wie `>`, `<`, `>=` und `<=` zu vergleichen und entsprechend Stile auf seine Kinder anzuwenden. ([Firefox-Fehler 2024601](https://bugzil.la/2024601)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 151                 | Nein                     |
| Developer Edition | 151                 | Nein                     |
| Beta              | 151                 | Nein                     |
| Release           | 151                 | Nein                     |

- `layout.css.attr.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### `<timeline-range-name>` Werte

Die {{cssxref("animation-range-start")}}, {{cssxref("animation-range-end")}} CSS Eigenschaften und die {{cssxref("animation-range")}} Kurzschreibweise unterstützen nun [`<timeline-range-name>`](/de/docs/Web/CSS/Reference/Values/timeline-range-name) Werte. Diese [`<timeline-range-name>`](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names#timeline_range_names) Werte ermöglichen es Ihnen, genau anzugeben, welcher Abschnitt, in dem eine scroll-gesteuerte Animation stattfinden wird. ([Firefox-Fehler 1804775](https://bugzil.la/1804775)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 151                 | Ja                       |
| Developer Edition | 151                 | Nein                     |
| Beta              | 151                 | Nein                     |
| Release           | 151                 | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### `<timeline-range-name>` Werte in `@keyframes` Selektoren

Die {{cssxref("@keyframes")}} At-Regel unterstützt nun [`<timeline-range-name>`](/de/docs/Web/CSS/Reference/Values/timeline-range-name) Werte. Diese [Werte](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names#timeline_range_names) ermöglicht es Ihnen, das Segment anzugeben, innerhalb dessen eine scroll-gesteuerte Animation stattfindet. ([Firefox-Fehler 1824875](https://bugzil.la/1824875)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 152                 | Ja                       |
| Developer Edition | 152                 | Nein                     |
| Beta              | 152                 | Nein                     |
| Release           | 152                 | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Aktualisieren von Attributen externer Ressourcen

Die {{cssxref("link-parameters")}} CSS Eigenschaft und die {{cssxref("param")}} CSS Funktion werden nun unterstützt. Dies ermöglicht dem Benutzer, Attribute externer Ressourcen zu aktualisieren, wie z.B. SVGs, die ihre Attribute mit der {{cssxref("env")}} CSS Funktion gesetzt haben. Dies bedeutet, dass eine einzelne externe Ressource verwendet werden kann, anstatt mehrere Variationen zu erstellen, die nur unterschiedliche Farben oder andere Werte haben. ([Firefox-Fehler 2046153](https://bugzil.la/2046153)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 154                 | Ja                       |
| Developer Edition | 153                 | Nein                     |
| Beta              | 153                 | Nein                     |
| Release           | 153                 | Nein                     |

- `layout.css.link-parameters.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Abschneiden von Inhalten mit `line-clamp`

Die {{cssxref("line-clamp")}} CSS Eigenschaft funktioniert jetzt ohne das `-webkit-` Anbieterpräfix, obwohl sie in diesem Stadium nicht die `no-ellipsis` und `<string>` Werte unterstützt. ([Firefox-Fehler 2042986](https://bugzil.la/2042986)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 154                 | Nein                     |
| Developer Edition | 154                 | Nein                     |
| Beta              | 154                 | Nein                     |
| Release           | 154                 | Nein                     |

- `layout.css.line-clamp.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Prozentuale Werte für `text-decoration-inset`

Die {{cssxref("text-decoration-inset")}} CSS Eigenschaft unterstützt jetzt Prozentsätze als Werte. Der Prozentwert gibt die Größe des Einsatzes als Prozentsatz der {{cssxref("font-size")}} an. ([Firefox-Fehler 2044602](https://bugzil.la/2044602)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 154                 | Nein                     |
| Developer Edition | 154                 | Nein                     |
| Beta              | 154                 | Nein                     |
| Release           | 154                 | Nein                     |

- `layout.css.text-decoration-inset-percentage.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Berechnung eines Wertes basierend auf `progress()`

Die {{cssxref("progress")}} CSS Funktion wird jetzt unterstützt. Dies ermöglicht es dem Benutzer, eine {{cssxref("number")}} basierend auf einem Wert (oder Fortschritt) zwischen einem Minimum- und Maximumwert zu berechnen. ([Firefox-Fehler 2047015](https://bugzil.la/2047015)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 155                 | Ja                       |
| Developer Edition | 154                 | Nein                     |
| Beta              | 154                 | Nein                     |
| Release           | 154                 | Nein                     |

- `layout.css.progress-function.enabled`
  - : Auf `true` setzen, um zu aktivieren.

## SVG

**Keine experimentellen Funktionen in diesem Release-Zyklus.**

## MathML

### `href` auf nicht-`<a>` MathML Elementen deaktivieren

Wenn aktiviert, erstellt das globale Attribut [`href`](/de/docs/Web/MathML/Reference/Global_attributes/href) keinen Hyperlink auf MathML-Elementen außer `<a>`, was Firefox mit der [MathML Core Spezifikation](https://w3c.github.io/mathml-core/#the-a-element) abgleicht, die nur Hyperlinks auf dem `<a>` Element definiert. ([Firefox-Fehler 2026848](https://bugzil.la/2026848)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 151                 | Ja                       |
| Developer Edition | 151                 | Nein                     |
| Beta              | 151                 | Nein                     |
| Release           | 151                 | Nein                     |

- `mathml.href_link_on_non_anchor_element.disabled`
  - : Auf `true` setzen, um zu aktivieren.

## JavaScript

### TC39 Intl.Locale info proposal

Der [TC39 Intl.Locale info Vorschlag](https://github.com/tc39/proposal-intl-locale-info) wird jetzt unterstützt. Dies umfasst alle Instanzmethoden auf `Intl.Locale`, die mit "get" beginnen — {{jsxref("Intl/Locale/getCalendars", "Intl.Locale.prototype.getCalendars()")}}, {{jsxref("Intl/Locale/getCollations", "Intl.Locale.prototype.getCollations()")}}, {{jsxref("Intl/Locale/getHourCycles", "Intl.Locale.prototype.getHourCycles()")}}, {{jsxref("Intl/Locale/getNumberingSystems", "Intl.Locale.prototype.getNumberingSystems()")}}, {{jsxref("Intl/Locale/getTextInfo", "Intl.Locale.prototype.getTextInfo()")}}, {{jsxref("Intl/Locale/getTimeZones", "Intl.Locale.prototype.getTimeZones()")}}, {{jsxref("Intl/Locale/getWeekInfo", "Intl.Locale.prototype.getWeekInfo()")}}. ([Firefox-Fehler 1693576](https://bugzil.la/1693576)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 152                 | Nein                     |
| Developer Edition | —                   | —                        |
| Beta              | —                   | —                        |
| Release           | —                   | —                        |

- `javascript.options.experimental.intl_locale_info`
  - : Auf `true` setzen, um in Nightly zu aktivieren.

### Mehrere Importmaps

Unterstützung für [mehrere Importmaps](/de/docs/Web/HTML/Reference/Elements/script/type/importmap#merging_multiple_import_maps). Diese geben Entwicklern mehr Flexibilität beim Strukturieren und Laden von JavaScript-Modulen, da sie nicht mehr alle ihre Modulzuordnungen im Voraus wissen und sie in einer einzigen Importmap laden müssen. ([Firefox-Fehler 1916277](https://bugzil.la/1916277)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 150                 | Nein                     |
| Developer Edition | 150                 | Nein                     |
| Beta              | 150                 | Nein                     |
| Release           | 150                 | Nein                     |

- `dom.multiple_import_maps.enabled`
  - : Auf `true` setzen, um zu aktivieren.

## APIs

### Absturz-Berichterstattung

Absturzberichte können jetzt über die [Berichterstattungs-API](/de/docs/Web/API/Reporting_API) an den `default` Endpunkt gesendet werden. Beachten Sie, dass Firefox das Bereitstellen von [`CrashReportContext`](/de/docs/Web/API/CrashReportContext) im Berichtsinhalt nicht unterstützt. ([Firefox-Fehler 2036160](https://bugzil.la/2036160)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 152                 | Ja                       |
| Developer Edition | 152                 | Nein                     |
| Beta              | 152                 | Nein                     |
| Release           | 152                 | Nein                     |

- `dom.reporting.crash.enabled`
  - : Auf `true` setzen, um zu aktivieren (in Nightly standardmäßig aktiviert).

### Gescopte benutzerdefinierte Elementregister

Unterstützung für [gescoptete benutzerdefinierte Elementregister](/de/docs/Web/API/Web_components/Using_custom_elements#scoped_custom_element_registries) wird implementiert. Gescopte Register ermöglichen es einem Schattendokument, ein unabhängiges [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry) zu erstellen, dessen Definitionen nur für diesen spezifischen DOM-Unterbaum gelten. Dies kann verwendet werden, um Kollisionen zu vermeiden, bei denen mehrere Webkomponenten Elemente mit demselben Namen deklarieren.

Die Implementierung umfasst:

- `customElementRegistry` Eigenschaft auf [`Document`](/de/docs/Web/API/Document), [`Element`](/de/docs/Web/API/Element) und [`ShadowRoot`](/de/docs/Web/API/ShadowRoot). ([Firefox-Fehler 2018900](https://bugzil.la/2018900)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 150                 | Nein                     |
| Developer Edition | 150                 | Nein                     |
| Beta              | 150                 | Nein                     |
| Release           | 150                 | Nein                     |

- `dom.scoped-custom-element-registries.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### CSS Typed Object Model Level 1

Die [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) ist in Nightly implementiert. Dies vereinfacht die CSS-Eigenschaftsmanipulation durch Bereitstellung von CSS-Werten als typisierte JavaScript-Objekte anstelle von Strings. ([Firefox-Fehler 1278697](https://bugzil.la/1278697)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 154                 | Ja                       |
| Developer Edition | 149                 | Nein                     |
| Beta              | 149                 | Nein                     |
| Release           | 149                 | Nein                     |

- `layout.css.typed-om.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Grafik: Canvas, WebGL und WebGPU

#### WebGL: Entwurfserweiterungen

Wenn diese Einstellung aktiviert ist, werden alle WebGL-Erweiterungen, die sich derzeit im "Entwurf"-Status befinden und getestet werden, zur Verwendung aktiviert. Derzeit gibt es keine WebGL-Erweiterungen, die von Firefox getestet werden.

#### WebGPU API

Die [WebGPU API](/de/docs/Web/API/WebGPU_API) bietet eine niedrigstufige Unterstützung für die Durchführung von Berechnungen und Grafikwiedergaben unter Verwendung der [Grafikprozessor-Einheit](https://en.wikipedia.org/wiki/Graphics_Processing_Unit) (GPU) des Geräts oder Computers des Benutzers. Ab Version 142 ist dies auf Windows in allen Kontexten außer Servicearbeitern aktiviert. Ab Version 147 ist dies auf macOS auf Apple Silicon in allen Browsing-Kontexten außer Servicearbeitern aktiviert. Auf anderen Plattformen wie Linux und macOS auf Intel Silicon ist es in Nightly aktiviert. Weitere Informationen zu unserem Fortschritt dieser API finden Sie unter [Firefox-Fehler 1602129](https://bugzil.la/1602129).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert?                                                                |
| ----------------- | ------------------- | --------------------------------------------------------------------------------------- |
| Nightly           | 141                 | Ja                                                                                      |
| Developer Edition | 141                 | Nein (Ja auf Windows und macOS auf Apple Silicon, nicht einschließlich Servicearbeiter) |
| Beta              | 141                 | Nein (Ja auf Windows und macOS auf Apple Silicon, nicht einschließlich Servicearbeiter) |
| Release           | 141                 | Nein (Ja auf Windows und macOS auf Apple Silicon, nicht einschließlich Servicearbeiter) |

- `dom.webgpu.enabled`
  - : Auf `true` setzen, um zu aktivieren (in Nightly und auf Windows in allen Releases aktiviert)
- `dom.webgpu.service-workers.enabled`
  - : Auf `true` setzen, um zu aktivieren (in Nightly aktiviert)

### WebRTC und Medien

Die folgenden experimentellen Funktionen umfassen diejenigen, die in Medien-APIs wie der [WebRTC API](/de/docs/Web/API/WebRTC_API), der [Web Audio API](/de/docs/Web/API/Web_Audio_API), der [Media Source Extensions API](/de/docs/Web/API/Media_Source_Extensions_API), der [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API) und der [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) gefunden werden.

#### HTMLMediaElement Eigenschaften: audioTracks und videoTracks

Durch Aktivierung dieser Funktion werden die Eigenschaften [`HTMLMediaElement.audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks) und [`HTMLMediaElement.videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks) zu allen HTML-Medienelementen hinzugefügt. Da Firefox jedoch derzeit mehrere Audio- und Videospuren nicht unterstützt, funktionieren die häufigsten Anwendungsfälle für diese Eigenschaften nicht, sodass sie standardmäßig deaktiviert sind. Weitere Informationen finden Sie unter [Firefox-Fehler 1057233](https://bugzil.la/1057233).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 33                  | Nein                     |
| Developer Edition | 33                  | Nein                     |
| Beta              | 33                  | Nein                     |
| Release           | 33                  | Nein                     |

- `media.track.enabled`
  - : Auf `true` setzen, um zu aktivieren.

#### Asynchrone SourceBuffer hinzufügen und entfernen

Dies fügt die promise-basierten Methoden [`appendBufferAsync()`](/de/docs/Web/API/SourceBuffer/appendBufferAsync) und [`removeAsync()`](/de/docs/Web/API/SourceBuffer/removeAsync) zum Hinzufügen und Entfernen von Mediensource-Puffern zur [`SourceBuffer`](/de/docs/Web/API/SourceBuffer) Schnittstelle hinzu. Weitere Informationen finden Sie unter [Firefox-Fehler 1280613](https://bugzil.la/1280613) und [Firefox-Fehler 778617](https://bugzil.la/778617).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 62                  | Nein                     |
| Developer Edition | 62                  | Nein                     |
| Beta              | 62                  | Nein                     |
| Release           | 62                  | Nein                     |

- `media.mediasource.experimental.enabled`
  - : Auf `true` setzen, um zu aktivieren.

#### AVIF Compliance-Strenge

Die Präferenz `image.avif.compliance_strictness` kann verwendet werden, um die _Strenge_ zu steuern, die beim Verarbeiten von [AVIF](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) Bildern angewendet wird. Dies ermöglicht es Firefox-Benutzern, Bilder anzuzeigen, die auf einigen anderen Browsern gerendert werden, auch wenn sie nicht strikt konform sind.

| Release-Kanal     | Version hinzugefügt | Standardwert |
| ----------------- | ------------------- | ------------ |
| Nightly           | 92                  | 1            |
| Developer Edition | 92                  | 1            |
| Beta              | 92                  | 1            |
| Release           | 92                  | 1            |

- `image.avif.compliance_strictness`
  - : Numerischer Wert, der eine _Striktheits_ebene angibt. Erlaubte Werte sind:
    - `0`: Permissiv. Akzeptiert Bilder mit Verstößen gegen Spezifikationen sowohl in Empfehlungen ("should" Sprache) als auch in Anforderungen ("shall" Sprache), vorausgesetzt, sie können sicher oder eindeutig interpretiert werden.
    - `1` **(Standardwert)**: Gemischt. Verstößt gegen Anforderungen ("shall"), erlaubt jedoch Verstöße gegen Empfehlungen ("should").
    - `2`: Streng. Lehnt jegliche Verstöße gegen spezifizierte Anforderungen oder Empfehlungen ab.

#### JPEG XL Unterstützung

Firefox unterstützt das [JPEG XL](https://jpeg.org/jpegxl/) Bildformat, einen modernen Nachfolger von JPEG, der verbesserte Kompression und Bildqualität bietet, zusammen mit neuen Funktionen wie Transparenz, Animation und HDR-Unterstützung. Weitere Informationen finden Sie unter [Firefox-Fehler 1539075](https://bugzil.la/1539075) und [Firefox-Fehler 2016688](https://bugzil.la/2016688).

In Firefox 149 wurde der bisherige C++-JPEG XL Bilddecoder durch eine neue Rust-basierte Implementierung ersetzt, die die `jxl-rs` Bibliothek verwendet ([Firefox-Fehler 1986393](https://bugzil.la/1986393)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 153                 | Ja                       |
| Developer Edition | 152                 | Nein                     |
| Beta              | 152                 | Nein                     |
| Release           | 152                 | Nein                     |

- `image.jxl.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### WebVR API (Deaktiviert)

Die veraltete [WebVR API](/de/docs/Web/API/WebVR_API) ist auf dem Weg zur Entfernung. Sie ist standardmäßig in allen Builds deaktiviert ([Firefox-Fehler 1750902](https://bugzil.la/1750902)).

| Release-Kanal     | Version entfernt | Standardmäßig aktiviert? |
| ----------------- | ---------------- | ------------------------ |
| Nightly           | 98               | Nein                     |
| Developer Edition | 98               | Nein                     |
| Beta              | 98               | Nein                     |
| Release           | 98               | Nein                     |

- `dom.vr.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### GeometryUtils Methoden: convertPointFromNode(), convertRectFromNode(), und convertQuadFromNode()

Die `GeometryUtils` Methoden `convertPointFromNode()`, `convertRectFromNode()`, und `convertQuadFromNode()` mappen den gegebenen Punkt, das Rechteck oder das Viereck vom [`Node`](/de/docs/Web/API/Node), auf dem sie aufgerufen werden, zu einem anderen Knoten. (Siehe [Firefox-Fehler 918189](https://bugzil.la/918189) für weitere Details.)

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 31                  | Nein                     |
| Developer Edition | 31                  | Nein                     |
| Beta              | 31                  | Nein                     |
| Release           | 31                  | Nein                     |

- `layout.css.convertFromNode.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### GeometryUtils Methode: getBoxQuads()

Die `GeometryUtils` Methode `getBoxQuads()` gibt die CSS-Boxen für einen [`Node`](/de/docs/Web/API/Node) zurück, relativ zu jedem anderen Knoten oder Viewport. (Siehe [Firefox-Fehler 917755](https://bugzil.la/917755) für weitere Details.)

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 31                  | Nein                     |
| Developer Edition | 31                  | Nein                     |
| Beta              | 31                  | Nein                     |
| Release           | 31                  | Nein                     |

- `layout.css.getBoxQuads.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Payment Request API

#### Primäre Zahlungsabwicklung

Die [Payment Request API](/de/docs/Web/API/Payment_Request_API) bietet Unterstützung für die Durchführung webbasierter Zahlungen innerhalb von Webinhalten oder Apps. Aufgrund eines Fehlers, der während des Tests der Benutzeroberfläche auftrat, haben wir entschieden, die Veröffentlichung dieser API zu verschieben, während Diskussionen über mögliche Änderungen an der API geführt werden. Die Arbeit ist im Gange. (Siehe [Firefox-Fehler 1318984](https://bugzil.la/1318984) für weitere Details.)

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 55                  | Nein                     |
| Developer Edition | 55                  | Nein                     |
| Beta              | 55                  | Nein                     |
| Release           | 55                  | Nein                     |

- `dom.payments.request.enabled`
  - : Auf `true` setzen, um zu aktivieren.
- `dom.payments.request.supportedRegions`
  - : Ländernamen als Komma-separierte Allowlist von Regionen (z. B. `US,CA`).

### WebShare API

Die [Web Share API](/de/docs/Web/API/Web_Share_API) ermöglicht das Teilen von Dateien, URLs und anderen Daten von einer Website aus. Diese Funktion ist auf Android in allen Builds aktiviert, jedoch hinter einer Präferenz auf Desktop (sofern nicht anders angegeben).

| Release-Kanal     | Version geändert | Standardmäßig aktiviert?                    |
| ----------------- | ---------------- | ------------------------------------------- |
| Nightly           | 71               | Nein (Standard). Ja (Windows ab Version 92) |
| Developer Edition | 71               | Nein                                        |
| Beta              | 71               | Nein                                        |
| Release           | 71               | Nein (Desktop). Ja (Android).               |

- `dom.webshare.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Benachrichtigungs-API

Benachrichtigungen haben die [`requireInteraction`](/de/docs/Web/API/Notification/requireInteraction) Eigenschaft standardmäßig auf Windows-Systemen und in der Nightly-Version auf `true` gesetzt ([Firefox-Fehler 1794475](https://bugzil.la/1794475)).

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

Die zwei `security.insecure_connection_text_*` Einstellungen fügen ein "Nicht sicher" Textlabel in der Adressleiste neben dem traditionellen Sperrsymbol hinzu, wenn eine Seite unsicher geladen wird (das heißt, mit {{Glossary("HTTP", "HTTP")}} anstelle von {{Glossary("HTTPS", "HTTPS")}}). Die `browser.urlbar.trimHttps` Einstellung entfernt das `https:` Präfix aus Adressleisten-URLs. Mehr Details siehe [Firefox-Fehler 1853418](https://bugzil.la/1853418).

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
  - : Auf `true` setzen, um das `https:` Präfix aus Adressleisten-URLs zu entfernen.

### Einschränkung von Inhalten für Erwachsene mit `<meta name="rating">`

Das standardunfreie [`<meta name="rating">`](/de/docs/Web/HTML/Reference/Elements/meta) Element kann auf einer Webseite hinzugefügt werden, um den Inhalt der Seite als eingeschränkt/erwachsen zu kennzeichnen. Zum Zeitpunkt des Schreibens gibt es zwei mögliche `content` Werte, `adult` ([definiert von Google](https://developers.google.com/search/docs/specialty/explicit/guidelines#add-metadata)) und `RTA-5042-1996-1400-1577-RTA` ([definiert von ASACP](https://www.rtalabel.org/?content=howto#top)), die denselben Effekt haben (weitere Optionen können in Zukunft hinzugefügt werden).

Die folgenden `<meta>` Elemente sind gleichwertig:

```html
<meta name="rating" content="adult" />
<meta name="rating" content="RTA-5042-1996-1400-1577-RTA" />
```

Browser, die dieses Element erkennen, können dann Schritte unternehmen, um zu verhindern, dass Benutzer den Inhalt ansehen. Die Implementierung von Firefox ersetzt die Seite durch den Inhalt, der auf `about:restricted` gefunden wird, der dem Benutzer erklärt, dass er versucht, eingeschränkten Inhalt anzuzeigen, erklärt, warum er ihn nicht anzeigen kann, und gibt ihm eine Zurück-Schaltfläche, um zurückzukehren.

Siehe [Firefox-Fehler 1991135](https://bugzil.la/1991135) für weitere Details.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 146                 | Nein                     |
| Developer Edition | 146                 | Nein                     |
| Beta              | 146                 | Nein                     |
| Release           | 146                 | Nein                     |

- `security.restrict_to_adults.always`
  - : Auf `true` setzen, um den Zugriff auf Webseiten einzuschränken, die sich selbst als erwachsen kennzeichnen, indem sie ein `<meta name="rating">` Element enthalten.
- `security.restrict_to_adults.respect_platform`
  - : Auf `true` setzen, um den Zugriff auf Webseiten einzuschränken, die sich selbst als erwachsen kennzeichnen, indem sie ein `<meta name="rating">` Element nur dann enthalten, wenn entsprechende Kindersicherungen auf dem zugrundeliegenden Betriebssystem eingerichtet sind (zum Beispiel, die macOS _Inhalt & Privatsphäre_ Einstellungen sind eingerichtet, um explizite Webinhalte zu beschränken).

### Berechtigungspolitik / Feature-Politik

[Berechtigungspolitik](/de/docs/Web/HTTP/Guides/Permissions_Policy) ermöglicht es Webentwicklern, das Verhalten bestimmter Funktionen und APIs im Browser selektiv zu aktivieren, zu deaktivieren und zu ändern. Es ist ähnlich wie CSP, steuert jedoch Funktionen anstelle von Sicherheitsverhalten. Dies ist in Firefox als **Feature Policy** implementiert, dem Namen, der in einer früheren Version der Spezifikation verwendet wurde.

Beachten Sie, dass unterstützte Richtlinien durch das [`allow`](/de/docs/Web/HTML/Reference/Elements/iframe#allow) Attribut auf `<iframe>` Elementen gesetzt werden können, auch wenn die Benutzereinstellung nicht gesetzt ist.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 65                  | Nein                     |
| Developer Edition | 65                  | Nein                     |
| Beta              | 65                  | Nein                     |
| Release           | 65                  | Nein                     |

- `dom.security.featurePolicy.header.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Datenschutzschonende Zuordnungs-API (PPA)

[PPA API](https://support.mozilla.org/en-US/kb/privacy-preserving-attribution) bietet eine Alternative zur Benutzerverfolgung für Anzeigenzuordnungen, die das neue `navigator.privateAttribution` Objekt mit `saveImpression()` und `measureConversion()` Methoden verwendet. Lesen Sie mehr über PPA [im originalen Erklärer](https://github.com/mozilla/explainers/tree/main/archive/ppa-experiment) und die [vorgeschlagene Spezifikation](https://w3c.github.io/ppa/). Dieses Experiment kann für Websites über [Origin Trial](https://wiki.mozilla.org/Origin_Trials) oder im Browser durch Setzen der Präferenz auf `1` aktiviert werden. ([Firefox-Fehler 1900929](https://bugzil.la/1900929)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 128                 | Nein                     |
| Developer Edition | 128                 | Nein                     |
| Beta              | 128                 | Nein                     |
| Release           | 128                 | Nein                     |

- `dom.origin-trials.private-attribution.state`
  - : Auf `true` setzen, um zu aktivieren.

## HTTP

### Integritätspolitik für Stylesheet-Ressourcen

Die {{httpheader("Integrity-Policy")}} und {{httpheader("Integrity-Policy-Report-Only")}} HTTP-Header werden jetzt für Stilressourcen unterstützt. Diese ermöglichen es Websites, entweder [Unterressourcenintegritätsgarantien](/de/docs/Web/Security/Defenses/Subresource_Integrity) für Stile durchzusetzen oder nur Verstöße gegen die Politik zu melden. Beachten Sie, dass Firefox Meldeendpunkte ignoriert und Verstöße in der Entwicklerkonsole protokolliert. Wenn `Integrity-Policy` verwendet wird, blockiert der Browser das Laden von Stilen, auf die durch ein {{HTMLElement("link")}} Element mit [`rel="stylesheet"`](/de/docs/Web/HTML/Reference/Attributes/rel#stylesheet) verwiesen wird, die entweder das [`integrity`](/de/docs/Web/HTML/Reference/Elements/script#integrity) Attribut nicht aufweisen oder einen Integritätshash haben, der nicht mit der Ressource auf dem Server übereinstimmt. ([Firefox-Fehler 1976656](https://bugzil.la/1976656)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 142                 | Nein                     |
| Developer Edition | 142                 | Nein                     |
| Beta              | 142                 | Nein                     |
| Release           | 142                 | Nein                     |

- `security.integrity_policy.stylesheet.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Idempotency-Key

Der {{httpheader("Idempotency-Key")}} HTTP-Anforderungsheader kann von Website-Clientcode verwendet werden, um eine {{HTTPMethod("POST")}} oder {{HTTPMethod("PATCH")}} Anfragen {{Glossary("idempotent", "idempotent")}} zu machen, wenn er mit einem Server verwendet wird, der es unterstützt. Die Spezifikation weist darauf hin, dass der Server dokumentieren und darstellen soll, welche Endpunkte diesen Header erfordern, das Format des Schlüssels und die erwarteten Fehlerantworten.

Firefox fügt _automatisch_ den Header mit einem eindeutigen Schlüssel für jede neue `POST` Anfrage hinzu, wenn er nicht bereits von der Seiten-Clientcode hinzugefügt wurde. Dies vereinfacht den clientseitigen Code, der erforderlich ist, um mit Servern zu arbeiten, die die Funktion unterstützen.

([Firefox-Fehler 1830022](https://bugzil.la/1830022)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 135                 | Nein                     |
| Developer Edition | 135                 | Nein                     |
| Beta              | 135                 | Nein                     |
| Release           | 135                 | Nein                     |

- `network.http.idempotencyKey.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Accept Header mit MIME Typ image/jxl

Der HTTP [`Accept`](/de/docs/Web/HTTP/Reference/Headers/Accept) Header in [Standardanfragen und Bildanfragen](/de/docs/Web/HTTP/Guides/Content_negotiation/List_of_default_Accept_values) kann über eine Präferenz konfiguriert werden, um Unterstützung für den `image/jxl` MIME-Typ anzuzeigen.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 128                 | Nein                     |
| Developer Edition | 128                 | Nein                     |
| Beta              | 128                 | Nein                     |
| Release           | 128                 | Nein                     |

- `image.jxl.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### SameSite=Lax standardmäßig

[`SameSite` Cookies](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) haben standardmäßig den Wert `Lax`. Mit dieser Einstellung werden Cookies nur gesendet, wenn ein Benutzer zur Ursprungsseite navigiert, nicht jedoch für standortübergreifende Subanfragen, um Bilder oder Frames in eine Drittanbieter-Website zu laden und so weiter. Für mehr Details siehe [Firefox-Fehler 1617609](https://bugzil.la/1617609).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 69                  | Nein                     |
| Developer Edition | 69                  | Nein                     |
| Beta              | 69                  | Nein                     |
| Release           | 69                  | Nein                     |

- `network.cookie.sameSite.laxByDefault`
  - : Auf `true` setzen, um zu aktivieren.

### Access-Control-Allow-Headers Platzhalter deckt Autorisierung nicht ab

Der [`Access-Control-Allow-Headers`](/de/docs/Web/HTTP/Reference/Headers/Access-Control-Allow-Headers) ist ein Antwortheader auf eine {{Glossary("Preflight_request", "CORS-Preflight-Anfrage")}}, der angibt, welche Anforderungsheader in die endgültige Anfrage aufgenommen werden dürfen. Die Antwortanweisung kann einen Platzhalter (`*`) enthalten, der angibt, dass die endgültige Anfrage alle Header außer dem `Authorization` Header enthalten kann.

Standardmäßig enthält Firefox den `Authorization` Header in der endgültigen Anfrage nach Erhalt einer Antwort mit `Access-Control-Allow-Headers: *`. Setzen Sie die Einstellung auf `false`, um sicherzustellen, dass Firefox den `Authorization` Header nicht einschließt. Für mehr Details siehe [Firefox-Fehler 1687364](https://bugzil.la/1687364).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 115                 | Ja                       |
| Developer Edition | 115                 | Ja                       |
| Beta              | 115                 | Ja                       |
| Release           | 115                 | Ja                       |

- `network.cors_preflight.authorization_covered_by_wildcard`
  - : Auf `true` setzen, um zu aktivieren.

## Entwickler-Tools

Die Entwickler-Tools von Mozilla entwickeln sich ständig weiter. Wir experimentieren mit neuen Ideen, fügen neue Funktionen hinzu und testen sie in den Nightly- und Developer Edition-Kanälen, bevor sie zu Beta und Release gehen. Die unten aufgeführten Funktionen sind die aktuelle Crop von experimentellen Entwickler-Tool-Funktionen.

**Keine experimentellen Funktionen in diesem Release-Zyklus.**

## Siehe auch

- [Firefox Entwickler Versionshinweise](/de/docs/Mozilla/Firefox/Releases)
- [Firefox Nightly](https://www.firefox.com/en-US/channel/desktop/)
- [Firefox Developer Edition](https://www.firefox.com/en-US/channel/desktop/developer/)
