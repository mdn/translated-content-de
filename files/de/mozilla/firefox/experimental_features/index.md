---
title: Experimentelle Funktionen in Firefox
short-title: Experimentelle Funktionen
slug: Mozilla/Firefox/Experimental_features
l10n:
  sourceCommit: eb6fe94faaedf826c11def7956876403b04199d9
---

Diese Seite listet die experimentellen und teilweise implementierten Funktionen von Firefox auf, einschließlich sich entwickelnder oder vorgeschlagener Webplattform-Standards.
Jeder Eintrag unten enthält Informationen über die Versionen, in denen eine Funktion enthalten ist (Nightly, Beta, Developer Edition oder Release), ob sie standardmäßig aktiviert ist oder nicht, und den Namen der **Präferenz**, die Sie verwenden können, um die Funktion zu aktivieren oder zu konfigurieren.
Die Beschreibung jeder Funktion enthält auch Links zu relevanten [Bugzilla-Bugs](https://bugzilla.mozilla.org), die die Funktion implementieren oder aktivieren.
Diese Informationen ermöglichen es Ihnen, experimentelle Funktionen auszuprobieren und Feedback zu geben, bevor sie offiziell veröffentlicht werden.

Im Hinblick auf den Lebenszyklus erscheinen neue Funktionen in der Regel zuerst in [Nightly](https://www.firefox.com/en-US/channel/desktop/#nightly), wo sie oft standardmäßig für frühes Feedback und Tests aktiviert sind.
Wenn keine größeren Probleme gefunden werden, werden sie in die [Beta](https://www.firefox.com/en-US/channel/desktop/#beta) und [Developer Edition](https://www.firefox.com/en-US/channel/desktop/developer/) Pre-Release-Builds aufgenommen. Schließlich werden genehmigte Funktionen im [stabilen Release](https://www.firefox.com/en-US/) Kanal ausgeliefert.
Wenn eine Funktion in einem Release standardmäßig aktiviert ist, wird sie nicht mehr als experimentell betrachtet und von dieser Seite entfernt.

Um diese Funktionen zu aktivieren, geben Sie `about:config` in die Adressleiste von Firefox ein, suchen Sie die zugehörige **Präferenz** und ändern Sie deren Wert, was in der Regel ein Umschalten zwischen `true` und `false` ist.
Abhängig von der Funktion müssen Sie möglicherweise den Browser neu starten, damit die Änderung wirksam wird.
Überprüfen Sie den [Firefox Konfigurationseditor](https://support.mozilla.org/en-US/kb/about-config-editor-firefox) Hilfeartikel für weitere Informationen über das Verwalten von Präferenzen in Firefox.

## HTML

### Layout für `input type="search"`

Das Layout für `input type="search"` wurde aktualisiert. Dies bewirkt, dass ein Suchfeld ein Löschsymbol hat, sobald jemand beginnt, darin zu tippen, um andere Browserimplementierungen zu entsprechen. (Siehe [Firefox-Bug 558594](https://bugzil.la/558594) für weitere Details.)

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 81                   | Nein                     |
| Developer Edition       | 81                   | Nein                     |
| Beta                    | 81                   | Nein                     |
| Release                 | 81                   | Nein                     |

- `layout.forms.input-type-search.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Passwortanzeige umschalten

HTML-Passworteingabefelder ([`<input type="password">`](/de/docs/Web/HTML/Reference/Elements/input/password)) enthalten ein "Auge"-Symbol, das umgeschaltet werden kann, um den Passworttext anzuzeigen oder zu verbergen ([Firefox-Bug 502258](https://bugzil.la/502258)).

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 96                   | Nein                     |
| Developer Edition       | 96                   | Nein                     |
| Beta                    | 96                   | Nein                     |
| Release                 | 96                   | Nein                     |

- `layout.forms.reveal-password-button.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Zeitwähler in `datetime-local` und `time` Eingabeelementen

Die HTML-[`<input type="datetime-local">`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local) und [`<input type="time">`](/de/docs/Web/HTML/Reference/Elements/input/time) Elemente unterstützen einen Zeitwähler. ([Firefox-Bug 1726108](https://bugzil.la/1726108)).

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 144                  | Nein                     |
| Developer Edition       | 144                  | Nein                     |
| Beta                    | 144                  | Nein                     |
| Release                 | 144                  | Nein                     |

- `dom.forms.datetime.timepicker`
  - : Auf `true` setzen, um zu aktivieren.

### `alpha` und `colorspace` Attribute in `color` Eingabeelementen

Das HTML-Element [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color) unterstützt die Attribute [`alpha`](/de/docs/Web/HTML/Reference/Elements/input/color#alpha) & [`colorspace`](/de/docs/Web/HTML/Reference/Elements/input/color#colorspace). ([Firefox-Bug 1919718](https://bugzil.la/1919718)).

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 149                  | Ja                       |
| Developer Edition       | -                    | -                        |
| Beta                    | -                    | -                        |
| Release                 | -                    | -                        |

- `dom.forms.html_color_picker.enabled`
  - : Auf `true` setzen, um zu aktivieren.

## CSS

### `circle()` und `ellipse()` erlauben `farthest-corner` und `closest-corner` Schlüsselwörter

Die `farthest-corner` und `closest-corner` Schlüsselwörter können nun verwendet werden, um die Radienwerte der [`ellipse()`](/de/docs/Web/CSS/Reference/Values/basic-shape/ellipse) und [`circle()`](/de/docs/Web/CSS/Reference/Values/basic-shape/circle) CSS-Grundformen festzulegen.
(Siehe [Firefox-Bug 2037673](https://bugzil.la/2037673) für weitere Details.)

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 153                  | Ja                       |
| Developer Edition       | 153                  | Nein                     |
| Beta                    | 153                  | Nein                     |
| Release                 | 153                  | Nein                     |

- `layout.css.ellipse-corners.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Hex-Boxen zur Anzeige verirrter Steuerzeichen

Diese Funktion rendert Steuerzeichen (Unicode-Kategorie Cc) außer _Tab_ (`U+0009`), _Zeilenumbruch_ (`U+000A`), _Formularvorschub_ (`U+000C`) und _Wagenrücklauf_ (`U+000D`) als Hex-Box, wenn sie nicht erwartet werden. (Siehe [Firefox-Bug 1099557](https://bugzil.la/1099557) für weitere Details.)

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 43                   | Ja                       |
| Developer Edition       | 43                   | Nein                     |
| Beta                    | 43                   | Nein                     |
| Release                 | 43                   | Nein                     |

- `layout.css.control-characters.visible`
  - : Auf `true` setzen, um zu aktivieren.

### initial-letter Eigenschaft

Die {{cssxref("initial-letter")}} CSS-Eigenschaft ist Teil der [CSS Inline Layout](https://drafts.csswg.org/css-inline/) Spezifikation und ermöglicht es Ihnen, festzulegen, wie eingehende, hervorstehende und eingesenkte Initialbuchstaben angezeigt werden. (Siehe [Firefox-Bug 1223880](https://bugzil.la/1223880) für weitere Details.)

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 50                   | Nein                     |
| Developer Edition       | 50                   | Nein                     |
| Beta                    | 50                   | Nein                     |
| Release                 | 50                   | Nein                     |

- `layout.css.initial-letter.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### fit-content() Funktion

Die [`fit-content()`](/de/docs/Web/CSS/Reference/Values/fit-content_function) Funktion, wie sie auf {{cssxref("width")}} und andere Größenangaben angewendet wird. Diese Funktion wird bereits gut für das Größen von CSS-Grid-Layoutspuren unterstützt. (Siehe [Firefox-Bug 1312588](https://bugzil.la/1312588) für weitere Details.)

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 91                   | Nein                     |
| Developer Edition       | 91                   | Nein                     |
| Beta                    | 91                   | Nein                     |
| Release                 | 91                   | Nein                     |

- `layout.css.fit-content-function.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Scroll-getriebene Animationen

Früher als "Scroll-gebundene Animationen" bezeichnet, hängt eine [scroll-getriebene Animation](/de/docs/Web/CSS/Guides/Scroll-driven_animations) von der Scroll-Position eines Scrollbalkens ab, anstatt von der Zeit oder einer anderen Dimension.
Die {{cssxref('scroll-timeline-name')}} und {{cssxref('scroll-timeline-axis')}} Eigenschaften (und die {{cssxref('scroll-timeline')}} Kurzschreibweise) ermöglichen es Ihnen, anzugeben, dass ein bestimmter Scrollbalken in einem benannten Container als Quelle für eine scrollgetriebene Animation verwendet werden kann.
Die Scroll-Zeitachse kann dann mit einer [Animation](/de/docs/Web/CSS/Guides/Animations) verbunden werden, indem die {{cssxref('animation-timeline')}} Eigenschaft auf den Namen gesetzt wird, der mit `scroll-timeline-name` definiert wurde.

Wenn die {{cssxref('scroll-timeline')}} Kurzschreibweise verwendet wird, muss die Reihenfolge der Eigenschaftswerte {{cssxref('scroll-timeline-name')}} gefolgt von {{cssxref('scroll-timeline-axis')}} sein.
Die Lang- und Kurzform-Eigenschaften sind beide hinter der Präferenz verfügbar.
Alternativ können Sie die {{cssxref("animation-timeline/scroll")}} Funktionalnotation mit {{cssxref('animation-timeline')}} verwenden, um anzugeben, dass eine Scrollbalkenachse in einem Vorfahrelement für die Zeitachse verwendet wird.

Weitere Informationen finden Sie in [Firefox-Bug 1807685](https://bugzil.la/1807685), [Firefox-Bug 1804573](https://bugzil.la/1804573), [Firefox-Bug 1809005](https://bugzil.la/1809005), [Firefox-Bug 1676791](https://bugzil.la/1676791), [Firefox-Bug 1754897](https://bugzil.la/1754897), [Firefox-Bug 1817303](https://bugzil.la/1817303) und [Firefox-Bug 1737918](https://bugzil.la/1737918).

Die {{cssxref('timeline-scope')}}, {{cssxref('animation-range-start')}} und {{cssxref('animation-range-end')}} Eigenschaften (und die {{cssxref('animation-range')}} Kurzschreibweise) werden noch nicht unterstützt. Weitere Informationen finden Sie in [Firefox-Bug 1676779](https://bugzil.la/1676779).

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 136                  | Ja                       |
| Developer Edition       | 110                  | Nein                     |
| Beta                    | 110                  | Nein                     |
| Release                 | 110                  | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### prefers-reduced-transparency Medienfunktion

Die CSS {{cssxref("@media/prefers-reduced-transparency")}} Medienfunktion ermöglicht es, zu erkennen, ob ein Benutzer die Einstellung aktiviert hat, um die Menge an transparenten oder durchscheinenden Schichteffekten auf seinem Gerät zu minimieren.
Siehe ([Firefox-Bug 1736914](https://bugzil.la/1736914)) für weitere Details.

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 113                  | Nein                     |
| Developer Edition       | 113                  | Nein                     |
| Beta                    | 113                  | Nein                     |
| Release                 | 113                  | Nein                     |

- `layout.css.prefers-reduced-transparency.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### inverted-colors Medienfunktion

Die CSS {{cssxref("@media/inverted-colors")}} Medienfunktion lässt Sie erkennen, ob ein Benutzeragent oder das zugrunde liegende Betriebssystem die Farben invertiert.
Siehe ([Firefox-Bug 1794628](https://bugzil.la/1794628)) für weitere Details.

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 114                  | Nein                     |
| Developer Edition       | 114                  | Nein                     |
| Beta                    | 114                  | Nein                     |
| Release                 | 114                  | Nein                     |

- `layout.css.inverted-colors.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Benannter Ansicht Fortschritts-Timelines-Eigenschaft

Die CSS {{cssxref("view-timeline-name")}} Eigenschaft ermöglicht es, einem bestimmten Element einen Namen zu geben, um anzuzeigen, dass sein Vorfahren-Scroller-Element die Quelle einer Ansichtsfortschritts-Timeline ist.
Der Name kann dann dem `animation-timeline` zugewiesen werden, welches dann das zugeordnete Element animiert, während es durch den sichtbaren Bereich seines Vorfahren-Scroller bewegt wird.
Siehe ([Firefox-Bug 1737920](https://bugzil.la/1737920)) für weitere Details.

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 136                  | Ja                       |
| Developer Edition       | 114                  | Nein                     |
| Beta                    | 114                  | Nein                     |
| Release                 | 114                  | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Anonyme Ansichtsfortschritts-Timelines Funktion

Die CSS {{cssxref("animation-timeline/view")}} Funktion lässt Sie angeben, dass `animation-timeline` für ein Element eine Ansichtsfortschritts-Timeline ist, die das Element animieren wird, während es durch den sichtbaren Bereich seines Vorfahren-Scroller gezogen wird.
Die Funktion definiert die Achse des Elternelements, das die Timeline liefert, zusammen mit der Einlage im sichtbaren Bereich, an der die Animation beginnt und endet.
Siehe ([Firefox-Bug 1808410](https://bugzil.la/1808410)) für weitere Details.

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 136                  | Ja                       |
| Developer Edition       | 114                  | Nein                     |
| Beta                    | 114                  | Nein                     |
| Release                 | 114                  | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Herstellergekennzeichnete Transformations-Eigenschaften

Die `-moz-` Präfix [CSS transform](/de/docs/Web/CSS/Guides/Transforms) Eigenschaften können deaktiviert werden, indem die `layout.css.prefixes.transforms` Präferenz auf `false` gesetzt wird. Die Absicht ist, diese zu deaktivieren, sobald die standardisierten CSS-Zoom-Eigenschaften gut unterstützt werden. ([Firefox-Bug 1886134](https://bugzil.la/1886134), [Firefox-Bug 1855763](https://bugzil.la/1855763)).

Insbesondere wird diese Präferenz die folgenden Herstellergekennzeichneten Eigenschaften deaktivieren:

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

Die CSS {{cssxref("letter-spacing")}} Eigenschaft teilt nun die angegebene Buchstabenabstände gleichmäßig auf beiden Seiten jedes Zeichens. Dies unterscheidet sich vom aktuellen Verhalten, bei dem der Abstand hauptsächlich auf einer Seite hinzugefügt wird. Dieser Ansatz kann die Textabstände verbessern, insbesondere bei gemischtrichtigen Texten.
([Firefox-Bug 1891446](https://bugzil.la/1891446)).

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 128                  | Ja                       |
| Developer Edition       | 128                  | Ja                       |
| Beta                    | 127                  | Nein                     |
| Release                 | 127                  | Nein                     |

- `layout.css.letter-spacing.model`
  - : Auf `true` setzen, um zu aktivieren.

### Erlauben von Pseudo-Elementen nach elementgestützten Pseudo-Elementen

Es wird daran gearbeitet, das Anfügen von [Pseudo-Elementen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) wie {{cssxref("::first-letter")}} und {{cssxref("::before")}} an [elementgestützte Pseudo-Elemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements#element-backed_pseudo-elements) wie {{cssxref("::details-content")}} und {{cssxref("::file-selector-button")}} zuzulassen.

Dies wird es Benutzern ermöglichen, zum Beispiel den ersten Buchstaben des {{htmlElement("details")}} Elements zu stylen, indem der CSS-Selektor `::details-content::first-letter` verwendet wird oder Inhalte vor einem {{HTMLElement("input") }} von [`type="file"`](/de/docs/Web/HTML/Reference/Elements/input/file) hinzugefügt werden, indem der CSS-Selektor `::file-selector-button::before` verwendet wird.

Derzeit kann nur die Unterstützung für `::details-content::first-letter` mit `@supports(::details-content::first-letter)` geparst werden.
Das `::file-selector-button` Pseudo-Element ist noch nicht als elementgestütztes Pseudo-Element markiert, daher gibt es keine Möglichkeit, dies zu testen.
([Firefox-Bug 1953557](https://bugzil.la/1953557), [Firefox-Bug 1941406](https://bugzil.la/1941406)).

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 138                  | Nein                     |
| Developer Edition       | 138                  | Nein                     |
| Beta                    | 138                  | Nein                     |
| Release                 | 138                  | Nein                     |

### `:heading` und `:heading()` Pseudo-Klassen

Die {{cssxref(":heading")}} Pseudo-Klasse ermöglicht es, alle [Überschriftselemente](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) (`<h1>`-`<h6>`) auf einmal zu stylen, anstatt sie einzeln anzusprechen. Die {{cssxref(":heading()")}} funktionale Pseudo-Klasse ermöglicht es, Überschriftselemente zu stylen, die einer kommagetrennten Liste von Ganzzahlen entsprechen, die den Überschriftenebenen entsprechen. ([Firefox-Bug 1974386](https://bugzil.la/1974386) & [Firefox-Bug 1984310](https://bugzil.la/1984310)).

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 142                  | Nein                     |
| Developer Edition       | 142                  | Nein                     |
| Beta                    | 142                  | Nein                     |
| Release                 | 142                  | Nein                     |

- `layout.css.heading-selector.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### `@custom-media` At-Regel

Die {{cssxref("@custom-media")}} CSS At-Regel definiert Aliase für lange oder komplexe Media-Queries. Anstatt das gleiche hartkodierte `<media-query-list>` in mehreren `@media` At-Regeln zu wiederholen, kann es einmal in einer `@custom-media` At-Regel definiert und im gesamten Stylesheet bei Bedarf referenziert werden. ([Firefox-Bug 1744292](https://bugzil.la/1744292)).

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 148                  | Nein                     |
| Developer Edition       | 148                  | Nein                     |
| Beta                    | 148                  | Nein                     |
| Release                 | 148                  | Nein                     |

- `layout.css.custom-media.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### `<attr-type>` Werte in der `attr()` CSS-Funktion

Die {{cssxref("attr")}} CSS-Funktion unterstützt nun [`<attr-type>`](/de/docs/Web/CSS/Reference/Values/attr#attr-type) Werte. Dies ermöglicht es, anzugeben, wie ein Attributwert in einen CSS-Wert geparst wird und diese Werte direkt aus [`data-*`](/de/docs/Web/HTML/How_to/Use_data_attributes) zu nehmen. ([Firefox-Bug 1986631](https://bugzil.la/1986631), [Firefox-Bug 1998245](https://bugzil.la/1998245))

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 152                  | Ja                       |
| Developer Edition       | 149                  | Nein                     |
| Beta                    | 149                  | Nein                     |
| Release                 | 149                  | Nein                     |

- `layout.css.attr.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### `base-select` Wert für `appearance` CSS-Eigenschaft

Der [`base-select`](/de/docs/Web/CSS/Reference/Properties/appearance#base-select) Wert für die {{cssxref("appearance")}} CSS-Eigenschaft, die nur für das {{htmlelement("select")}} Element und {{cssxref("::picker()", "::picker(select)")}} Pseudo-Element relevant ist, ermöglicht es, diese vollständig zu stylen. Derzeit wird nur das Styling des `<select>` Elements unterstützt. Das Styling des `::picker(select)` Pseudo-Elements wird in zukünftigen Versionen hinzugefügt. Diese Funktion ist Teil der [Customizable Select elements](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) Arbeit. Zwei Präferenzen müssen aktiviert werden, um es zu nutzen. ([Firefox-Bug 1974787](https://bugzil.la/1974787)).

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

### Namespace-Attribute in der `attr()` CSS-Funktion

Die {{cssxref("attr")}} CSS-Funktion akzeptiert nun [Namenraum-Attribute](/de/docs/Web/CSS/Reference/Values/attr#namespaces). Dadurch können Sie Attribute von Elementen von [XML](/de/docs/Web/XML)-basierten Sprachen wie [SVG](/de/docs/Web/SVG) nehmen und sie entsprechend gestalten. ([Firefox-Bug 2014060](https://bugzil.la/2014060).

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 150                  | Nein                     |
| Developer Edition       | 150                  | Nein                     |
| Beta                    | 150                  | Nein                     |
| Release                 | 150                  | Nein                     |

- `layout.css.attr.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Absolut positionierte Elemente in Multi-Column-Containern und beim Drucken

Absolut positionierte Elemente innerhalb von [Multi-Column-Containern](/de/docs/Web/CSS/Guides/Multicol_layout) und beim Drucken sind jetzt korrekt positioniert und fragmentiert.
Dies verbessert die Interoperabilität mit anderen Browsern und verhindert Layoutprobleme wie überlappenden Text oder Inhaltsverlust.
([Firefox-Bug 2018797](https://bugzil.la/2018797)).

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 150                  | Ja                       |
| Developer Edition       | 150                  | Nein                     |
| Beta                    | 150                  | Nein                     |
| Release                 | 150                  | Nein                     |

- `layout.abspos.fragmentainer-aware-positioning.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### `@container style()` Bereichssyntax-Abfragen

Die [`@container`](/de/docs/Web/CSS/Reference/At-rules/@container) CSS At-Regel [`style()`](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries) Abfragen unterstützen jetzt die _Bereichssyntax_. Dies ermöglicht es Ihnen zu überprüfen, ob ein Container eine gültige CSS-Benutzereigenschaft hat und deren Wert mit Vergleichsoperatoren wie `>`, `<`, `>=` und `<=` zu vergleichen und entsprechend Stile auf seine Kinder anzuwenden. ([Firefox-Bug 2024601](https://bugzil.la/2024601)).

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 151                  | Nein                     |
| Developer Edition       | 151                  | Nein                     |
| Beta                    | 151                  | Nein                     |
| Release                 | 151                  | Nein                     |

- `layout.css.attr.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### `<timeline-range-name>` Werte

Die {{cssxref("animation-range-start")}}, {{cssxref("animation-range-end")}} CSS-Eigenschaften und {{cssxref("animation-range")}} Kurzschreibweise unterstützen jetzt [`<timeline-range-name>`](/de/docs/Web/CSS/Reference/Values/timeline-range-name) Werte. Diese [`<timeline-range-name>`](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names#timeline_range_names) Werte ermöglichen es Ihnen, genau anzugeben, über welches Segment eine scrollgetriebene Animation ablaufen wird. ([Firefox-Bug 1804775](https://bugzil.la/1804775)).

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 151                  | Ja                       |
| Developer Edition       | 151                  | Nein                     |
| Beta                    | 151                  | Nein                     |
| Release                 | 151                  | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### `<timeline-range-name>` Werte in `@keyframes` Selektoren

Die {{cssxref("@keyframes")}} At-Regel unterstützt jetzt [`<timeline-range-name>`](/de/docs/Web/CSS/Reference/Values/timeline-range-name) Werte. Diese [Werte](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names#timeline_range_names) ermöglichen es Ihnen, das Segment anzugeben, in dem eine scrollgetriebene Animation stattfindet. ([Firefox-Bug 1824875](https://bugzil.la/1824875)).

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 152                  | Ja                       |
| Developer Edition       | 152                  | Nein                     |
| Beta                    | 152                  | Nein                     |
| Release                 | 152                  | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Baumzählungs-CSS-Funktionen

Die {{cssxref("sibling-count")}} und {{cssxref("sibling-index")}} Funktion werden jetzt unterstützt. Die `sibling-count()` Funktion gibt die Anzahl der Geschwisterelemente sowie das Element selbst zurück. Die `sibling-index()` Funktion gibt die Indexnummer des Elements im Verhältnis zu seinen Geschwistern zurück, dies beginnt ab `1` und nicht bei `0`. ([Firefox-Bug 2042063](https://bugzil.la/2042063)).

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 154                  | Ja                       |
| Developer Edition       | 153                  | Nein                     |
| Beta                    | 153                  | Nein                     |
| Release                 | 153                  | Nein                     |

- `layout.css.tree-counting-functions.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Aktualisierung von Attributen externer Ressourcen

Die {{cssxref("link-parameters")}} CSS-Eigenschaft und {{cssxref("param")}} CSS-Funktion werden jetzt unterstützt. Dadurch kann der Benutzer Attribute externer Ressourcen, wie SVGs, aktualisieren, deren Attribute mit der {{cssxref("env")}} CSS-Funktion gesetzt sind. Das bedeutet, dass eine einzelne externe Ressource verwendet werden kann, anstatt mehrere Variationen zu erstellen, die sich nur in Farben oder anderen Werten unterscheiden. ([Firefox-Bug 2046153](https://bugzil.la/2046153)).

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 154                  | Ja                       |
| Developer Edition       | 153                  | Nein                     |
| Beta                    | 153                  | Nein                     |
| Release                 | 153                  | Nein                     |

- `layout.css.link-parameters.enabled`
  - : Auf `true` setzen, um zu aktivieren.

## SVG

**Keine experimentellen Funktionen in diesem Release-Zyklus.**

## MathML

### Deaktivieren von `href` auf Nicht-`<a>` MathML-Elementen

Wenn aktiviert, erstellt das [`href`](/de/docs/Web/MathML/Reference/Global_attributes/href) globale Attribut keine Hyperlinks mehr auf MathML-Elementen außer `<a>`, wodurch Firefox mit der [MathML-Core-Spezifikation](https://w3c.github.io/mathml-core/#the-a-element) in Einklang gebracht wird, die Hyperlinks nur auf dem `<a>`-Element definiert. ([Firefox-Bug 2026848](https://bugzil.la/2026848)).

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

Die Methode [`Iterator.prototype.includes()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator/includes) testet, ob eine `Iterator`-Instanz einen angegebenen Wert erzeugen wird.
Der Vergleich verwendet den [SameValueZero Algorithmus](/de/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness#same-value-zero_equality).
Dieser Algorithmus ähnelt der strikten Gleichheit `===` (bei der `-0` und `+0` als gleich betrachtet werden), unterscheidet sich jedoch darin, dass {{jsxref("NaN")}} als gleich zu sich selbst betrachtet wird.
([Firefox-Bug 2025779](https://bugzil.la/2025779)).

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 152                  | Nein                     |
| Developer Edition       | 152                  | Nein                     |
| Beta                    | 152                  | Nein                     |
| Release                 | 152                  | Nein                     |

- `javascript.options.experimental.iterator_includes`
  - : Auf `true` setzen, um zu aktivieren.

### TC39 Intl.Locale info Vorschlag

Der [TC39 Intl.Locale info proposal](https://github.com/tc39/proposal-intl-locale-info) wird jetzt unterstützt.
Dies umfasst alle Instanzmethoden in `Intl.Locale`, die mit "get" beginnen — {{jsxref("Intl/Locale/getCalendars", "Intl.Locale.prototype.getCalendars()")}}, {{jsxref("Intl/Locale/getCollations", "Intl.Locale.prototype.getCollations()")}}, {{jsxref("Intl/Locale/getHourCycles", "Intl.Locale.prototype.getHourCycles()")}}, {{jsxref("Intl/Locale/getNumberingSystems", "Intl.Locale.prototype.getNumberingSystems()")}}, {{jsxref("Intl/Locale/getTextInfo", "Intl.Locale.prototype.getTextInfo()")}}, {{jsxref("Intl/Locale/getTimeZones", "Intl.Locale.prototype.getTimeZones()")}}, {{jsxref("Intl/Locale/getWeekInfo", "Intl.Locale.prototype.getWeekInfo()")}}.
([Firefox-Bug 1693576](https://bugzil.la/1693576)).

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 152                  | Nein                     |
| Developer Edition       | —                    | —                        |
| Beta                    | —                    | —                        |
| Release                 | —                    | —                        |

- `javascript.options.experimental.intl_locale_info`
  - : Auf `true` setzen, um in Nightly zu aktivieren.

### Mehrere Importkarten

Unterstützung für [mehrere Importkarten](/de/docs/Web/HTML/Reference/Elements/script/type/importmap#merging_multiple_import_maps).
Diese geben Entwicklern mehr Flexibilität beim Strukturieren und Laden von JavaScript-Modulen, da sie nicht mehr alle ihre Modulzuordnungen im Voraus wissen und diese in einer einzigen Importkarte laden müssen.
([Firefox-Bug 1916277](https://bugzil.la/1916277)).

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 150                  | Nein                     |
| Developer Edition       | 150                  | Nein                     |
| Beta                    | 150                  | Nein                     |
| Release                 | 150                  | Nein                     |

- `dom.multiple_import_maps.enabled`
  - : Auf `true` setzen, um zu aktivieren.

## APIs

### Absturzberichterstattung

Absturzberichte können jetzt über die [Reporting API](/de/docs/Web/API/Reporting_API) an den `default` Endpunkt gesendet werden.
Beachten Sie, dass Firefox das Angeben von [`CrashReportContext`](/de/docs/Web/API/CrashReportContext) im Berichtskörper nicht unterstützt.
([Firefox-Bug 2036160](https://bugzil.la/2036160)).

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 152                  | Ja                       |
| Developer Edition       | 152                  | Nein                     |
| Beta                    | 152                  | Nein                     |
| Release                 | 152                  | Nein                     |

- `dom.reporting.crash.enabled`
  - : Auf `true` setzen, um zu aktivieren (in Nightly standardmäßig aktiviert).

### Geltungsbereichsbezogene benutzerdefinierte Elementverzeichnisse

Unterstützung für [geltenweit benutzerdefinierte Elementverzeichnisse](/de/docs/Web/API/Web_components/Using_custom_elements#scoped_custom_element_registries) wird implementiert.
Scoped-Verzeichnisse ermöglichen es einem Shadow-Baum, ein unabhängiges [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry) zu erstellen, dessen Definitionen nur auf diesen speziellen DOM-Teilbaum angewendet werden.
Dies kann verwendet werden, um Kollisionen zu vermeiden, bei denen mehrere Webkomponenten Elemente mit demselben Namen deklarieren.

Die Implementierung umfasst:

- `customElementRegistry` Eigenschaft auf [`Document`](/de/docs/Web/API/Document), [`Element`](/de/docs/Web/API/Element) und [`ShadowRoot`](/de/docs/Web/API/ShadowRoot).
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

Implementierungsarbeiten am [CSS Typed OM Level 1](https://drafts.css-houdini.org/css-typed-om/) haben begonnen.
Zum Beispiel wird die [`to()`](/de/docs/Web/API/CSSNumericValue/to) Methode der [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) Schnittstelle unterstützt, um einen CSS-numerischen Wert von einer Einheit in eine andere zu konvertieren.
([Firefox-Bug 1278697](https://bugzil.la/1278697)).

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 149                  | Nein                     |
| Developer Edition       | 149                  | Nein                     |
| Beta                    | 149                  | Nein                     |
| Release                 | 149                  | Nein                     |

- `layout.css.typed-om.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Grafik: Canvas, WebGL, und WebGPU

#### WebGL: Entwurfserweiterungen

Wenn diese Präferenz aktiviert ist, sind alle WebGL-Erweiterungen, die sich derzeit im "Entwurf"-Status befinden und getestet werden, zur Nutzung freigegeben. Derzeit gibt es keine WebGL-Erweiterungen, die von Firefox getestet werden.

#### WebGPU API

Die [WebGPU API](/de/docs/Web/API/WebGPU_API) bietet Unterstützung auf niedriger Ebene zur Durchführung von Berechnung und Grafikrendering mit der [Graphics Processing Unit](https://en.wikipedia.org/wiki/Graphics_Processing_Unit) (GPU) des Geräts oder Computers des Benutzers.
Ab Version 142 ist dies auf Windows in allen Kontexten außer Dienstarbeitern aktiviert.
Ab Version 147 ist dies auf macOS auf Apple Silicon in allen Browsing-Kontexten außer Dienstarbeitern aktiviert.
Für andere Plattformen wie Linux und macOS auf Intel-Silikon ist es in Nightly aktiviert.
Siehe [Firefox-Bug 1602129](https://bugzil.la/1602129) für unseren Fortschritt auf dieser API.

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert?                                               |
| ----------------------- | -------------------- | ---------------------------------------------------------------------- |
| Nightly                 | 141                  | Ja                                                                     |
| Developer Edition       | 141                  | Nein (Ja auf Windows und macOS auf Apple Silicon, ohne Dienstarbeiter) |
| Beta                    | 141                  | Nein (Ja auf Windows und macOS auf Apple Silicon, ohne Dienstarbeiter) |
| Release                 | 141                  | Nein (Ja auf Windows und macOS auf Apple Silicon, ohne Dienstarbeiter) |

- `dom.webgpu.enabled`
  - : Auf `true` setzen, um zu aktivieren (in Nightly und auf Windows in allen Versionen aktiviert)
- `dom.webgpu.service-workers.enabled`
  - : Auf `true` setzen, um zu aktivieren (in Nightly aktiviert)

### WebRTC und Medien

Die folgenden experimentellen Funktionen umfassen die in Medien-APIs wie der [WebRTC API](/de/docs/Web/API/WebRTC_API), der [Web Audio API](/de/docs/Web/API/Web_Audio_API), der [Media Source Extensions API](/de/docs/Web/API/Media_Source_Extensions_API), der [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API) und der [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) gefundenen.

#### HTMLMediaElement Eigenschaften: audioTracks und videoTracks

Durch Aktivierung dieser Funktion werden die [`HTMLMediaElement.audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks) und [`HTMLMediaElement.videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks) Eigenschaften zu allen HTML-Medienelementen hinzugefügt. Da Firefox jedoch derzeit keine Unterstützung für mehrere Audio- und Videotracks bietet, funktionieren die häufigsten Anwendungsfälle für diese Eigenschaften nicht, sodass sie standardmäßig deaktiviert sind. Siehe [Firefox-Bug 1057233](https://bugzil.la/1057233) für weitere Details.

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 33                   | Nein                     |
| Developer Edition       | 33                   | Nein                     |
| Beta                    | 33                   | Nein                     |
| Release                 | 33                   | Nein                     |

- `media.track.enabled`
  - : Auf `true` setzen, um zu aktivieren.

#### Asynchrone SourceBuffer hinzufügen und entfernen

Dies fügt die auf Versprechen basierenden Methoden [`appendBufferAsync()`](/de/docs/Web/API/SourceBuffer/appendBufferAsync) und [`removeAsync()`](/de/docs/Web/API/SourceBuffer/removeAsync) zum Hinzufügen und Entfernen von Mediensourcepuffern zur [`SourceBuffer`](/de/docs/Web/API/SourceBuffer) Schnittstelle hinzu. Siehe [Firefox-Bug 1280613](https://bugzil.la/1280613) und [Firefox-Bug 778617](https://bugzil.la/778617) für weitere Informationen.

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 62                   | Nein                     |
| Developer Edition       | 62                   | Nein                     |
| Beta                    | 62                   | Nein                     |
| Release                 | 62                   | Nein                     |

- `media.mediasource.experimental.enabled`
  - : Auf `true` setzen, um zu aktivieren.

#### AVIF-Konformitätsstrengheit

Die `image.avif.compliance_strictness` Präferenz kann verwendet werden, um die _Strengheit_ zu steuern, die beim Verarbeiten von [AVIF](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) Bildern angewendet wird.
Dies ermöglicht es Firefox-Benutzern, Bilder anzuzeigen, die auf einigen anderen Browsern gerendert werden, auch wenn sie nicht strikt konform sind.

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardwert |
| ----------------------- | -------------------- | ------------ |
| Nightly                 | 92                   | 1            |
| Developer Edition       | 92                   | 1            |
| Beta                    | 92                   | 1            |
| Release                 | 92                   | 1            |

- `image.avif.compliance_strictness`
  - : Numerischer Wert, der ein _Strengheits_-Level angibt. Erlaubte Werte sind:
    - `0`: Tolerant. Akzeptieren von Bildern mit Spezifikationsverstößen sowohl in Empfehlungen ("sollte" Sprache) als auch in Anforderungen ("muss" Sprache), sofern diese sicher oder eindeutig interpretiert werden können.
    - `1` **(Standard)**: Gemischt. Ablehnen von Verstößen gegen Anforderungen ("muss"), aber Zulassen von Verstößen gegen Empfehlungen ("sollte").
    - `2`: Strikt. Ablehnen von jeglichen Verstößen gegen spezifizierte Anforderungen oder Empfehlungen.

#### Unterstützung für JPEG XL

Firefox unterstützt das [JPEG XL](https://jpeg.org/jpegxl/) Bildformat, ein moderner Nachfolger von JPEG, das verbesserte Kompression und Bildqualität bietet, zusammen mit neuen Fähigkeiten wie Transparenz, Animation und HDR-Unterstützung.
Siehe [Firefox-Bug 1539075](https://bugzil.la/1539075) und [Firefox-Bug 2016688](https://bugzil.la/2016688) für weitere Details.

In Firefox 149 wurde der vorherige C++-basierte [JPEG XL](https://jpeg.org/jpegxl/) Bilddecoder durch eine neue Rust-basierte Implementierung ersetzt, die die `jxl-rs`-Bibliothek verwendet ([Firefox-Bug 1986393](https://bugzil.la/1986393)).

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 153                  | Ja                       |
| Developer Edition       | 152                  | Nein                     |
| Beta                    | 152                  | Nein                     |
| Release                 | 152                  | Nein                     |

- `image.jxl.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### WebVR API (Deaktiviert)

Die veraltete [WebVR API](/de/docs/Web/API/WebVR_API) ist auf dem Weg zur Entfernung.
Sie ist standardmäßig in allen Builds deaktiviert [Firefox-Bug 1750902](https://bugzil.la/1750902).

| Veröffentlichungs-Kanal | Entfernungs-Version | Standardmäßig aktiviert? |
| ----------------------- | ------------------- | ------------------------ |
| Nightly                 | 98                  | Nein                     |
| Developer Edition       | 98                  | Nein                     |
| Beta                    | 98                  | Nein                     |
| Release                 | 98                  | Nein                     |

- `dom.vr.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### GeometryUtils Methoden: convertPointFromNode(), convertRectFromNode(), und convertQuadFromNode()

Die `GeometryUtils` Methoden `convertPointFromNode()`, `convertRectFromNode()`, und `convertQuadFromNode()` kartieren den gegebenen Punkt, das Rechteck oder das Viereck vom [`Node`](/de/docs/Web/API/Node), auf dem sie aufgerufen werden, auf einen anderen Knoten. (Siehe [Firefox-Bug 918189](https://bugzil.la/918189) für weitere Details.)

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

Die [Payment Request API](/de/docs/Web/API/Payment_Request_API) bietet Unterstützung für die Abwicklung von webbasierten Zahlungen innerhalb von Webinhalten oder Apps. Aufgrund eines Fehlers, der bei Tests der Benutzeroberfläche auftrat, haben wir beschlossen, die Veröffentlichung dieser API zu verschieben, während Diskussionen über potenzielle Änderungen an der API geführt werden. Die Arbeit ist im Gange. (Siehe [Firefox-Bug 1318984](https://bugzil.la/1318984) für weitere Details.)

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 55                   | Nein                     |
| Developer Edition       | 55                   | Nein                     |
| Beta                    | 55                   | Nein                     |
| Release                 | 55                   | Nein                     |

- `dom.payments.request.enabled`
  - : Auf `true` setzen, um zu aktivieren.
- `dom.payments.request.supportedRegions`
  - : Ländercodes als kommagetrennte Whitelist von Regionen (z.B. `US,CA`).

### WebShare API

Die [Web Share API](/de/docs/Web/API/Web_Share_API) ermöglicht das Teilen von Dateien, URLs und anderen Daten von einer Site aus.
Diese Funktion ist auf Android in allen Builds aktiviert, aber auf dem Desktop hinter einer Präferenz (sofern unten nicht anders angegeben).

| Veröffentlichungs-Kanal | Geänderte Version | Standardmäßig aktiviert?                    |
| ----------------------- | ----------------- | ------------------------------------------- |
| Nightly                 | 71                | Nein (Standard). Ja (Windows ab Version 92) |
| Developer Edition       | 71                | Nein                                        |
| Beta                    | 71                | Nein                                        |
| Release                 | 71                | Nein (Desktop). Ja (Android).               |

- `dom.webshare.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Benachrichtigungen API

Benachrichtigungen haben die [`requireInteraction`](/de/docs/Web/API/Notification/requireInteraction) Eigenschaft standardmäßig auf true auf Windows-Systemen und in der Nightly-Version ([Firefox-Bug 1794475](https://bugzil.la/1794475)).

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

Die beiden `security.insecure_connection_text_*` Präferenzen fügen bei unsicher geladenen Seiten (das heißt, bei Nutzung von {{Glossary("HTTP", "HTTP")}} statt {{Glossary("HTTPS", "HTTPS")}}) dem Adressfeld neben dem traditionellen Schloss-Symbol ein "Nicht sicher"-Textlabel hinzu. Die `browser.urlbar.trimHttps` Präferenz kürzt das `https:` Präfix von Adressfeld-URLs. Weitere Details siehe [Firefox-Bug 1853418](https://bugzil.la/1853418).

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 121                  | Ja                       |
| Developer Edition       | 60                   | Nein                     |
| Beta                    | 60                   | Nein                     |
| Release                 | 60                   | Nein                     |

- `security.insecure_connection_text.enabled`
  - : Auf `true` setzen, um das Textlabel für den normalen Modus zu aktivieren.
- `security.insecure_connection_text.pbmode.enabled`
  - : Auf `true` setzen, um das Textlabel für den privaten Browsing-Modus zu aktivieren.
- `browser.urlbar.trimHttps`
  - : Auf `true` setzen, um das `https:` Präfix von Adressfeld-URLs zu kürzen.

### Einschränkung von Inhalten für Erwachsene mit `<meta name="rating">`

Das nicht-standardisierte [`<meta name="rating">`](/de/docs/Web/HTML/Reference/Elements/meta) Element kann auf einer Webseite eingeschlossen werden, um die Inhalte der Seite als eingeschränkt/erwachsen zu kennzeichnen. Zum Zeitpunkt des Schreibens gibt es zwei mögliche `content` Werte, `adult` ([definiert von Google](https://developers.google.com/search/docs/specialty/explicit/guidelines#add-metadata)) und `RTA-5042-1996-1400-1577-RTA` ([definiert von ASACP](https://www.rtalabel.org/?content=howto#top)), die dieselbe Wirkung haben (in Zukunft können weitere Optionen hinzugefügt werden).

Die folgenden `<meta>` Elemente sind äquivalent:

```html
<meta name="rating" content="adult" />
<meta name="rating" content="RTA-5042-1996-1400-1577-RTA" />
```

Browser, die dieses Element erkennen, können dann Schritte unternehmen, um Benutzer daran zu hindern, den Inhalt zu sehen. Die Implementierung von Firefox ersetzt die Seite durch den Inhalt, der unter `about:restricted` zu finden ist, was dem Benutzer erklärt, dass er versucht, eingeschränkte Inhalte anzuzeigen, warum er dies nicht tun kann und ihm einen Zurück-Button bietet, um dorthin zurückzukehren, wo er hergekommen ist.

Siehe [Firefox-Bug 1991135](https://bugzil.la/1991135) für weitere Details.

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 146                  | Nein                     |
| Developer Edition       | 146                  | Nein                     |
| Beta                    | 146                  | Nein                     |
| Release                 | 146                  | Nein                     |

- `security.restrict_to_adults.always`
  - : Auf `true` setzen, um den Zugang zu Webseiten zu beschränken, die sich selbst als erwachsen identifizieren, indem sie ein `<meta name="rating">` Element beinhalten.
- `security.restrict_to_adults.respect_platform`
  - : Auf `true` setzen, um den Zugang zu Webseiten zu beschränken, die sich selbst als erwachsen identifizieren, indem sie ein `<meta name="rating">` Element beinhalten, nur wenn angemessene Kindersicherungseinstellungen auf dem zugrunde liegenden Betriebssystem gesetzt sind (zum Beispiel sind die macOS _Inhalts- und Privatsphäre_-Einstellungen darauf festgelegt, explizite Webinhalte zu beschränken).

### Berechtigungspolitik / Funktionalitätspolitik

[Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) ermöglicht es Webentwicklern, bestimmte Funktionen und APIs im Browser selektiv zu aktivieren, zu deaktivieren und das Verhalten zu ändern. Es ist ähnlich wie CSP, jedoch steuert es Funktionen anstelle von Sicherheitsverhalten.
Dies ist in Firefox als **Feature Policy** implementiert, dem Namen, der in einer früheren Version der Spezifikation verwendet wurde.

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

[PPA API](https://support.mozilla.org/en-US/kb/privacy-preserving-attribution) bietet eine Alternative zum Benutzertracking für Werbeattribution unter Verwendung des neuen `navigator.privateAttribution` Objekts mit den Methoden `saveImpression()` und `measureConversion()`. Lesen Sie mehr über PPA [im ursprünglichen Erklärungsdokument](https://github.com/mozilla/explainers/tree/main/archive/ppa-experiment) und der [vorgeschlagenen Spezifikation](https://w3c.github.io/ppa/). Dieses Experiment kann für Websites über [Origin-Trial](https://wiki.mozilla.org/Origin_Trials) oder im Browser durch Setzen der Präferenz auf `1` aktiviert werden. ([Firefox-Bug 1900929](https://bugzil.la/1900929)).

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

Die {{httpheader("Integrity-Policy")}} und {{httpheader("Integrity-Policy-Report-Only")}} HTTP-Header werden nun für Stilressourcen unterstützt. Diese erlauben es Websites, entweder [Subresource-Integritätsgarantien](/de/docs/Web/Security/Defenses/Subresource_Integrity) für Stile durchzusetzen oder nur Verstöße gegen die Politik zu melden.
Beachten Sie, dass Firefox Meldeendpunkte ignoriert und Verstöße in die Entwicklerkonsole protokolliert.
Wenn `Integrity-Policy` verwendet wird, blockiert der Browser das Laden von Stilen, die in einem {{HTMLElement("link")}} Element mit [`rel="stylesheet"`](/de/docs/Web/HTML/Reference/Attributes/rel#stylesheet) referenziert werden, die entweder das [`integrity`](/de/docs/Web/HTML/Reference/Elements/script#integrity) Attribut fehlen oder einen Integritätshash haben, der nicht mit der Ressource auf dem Server übereinstimmt.
([Firefox-Bug 1976656](https://bugzil.la/1976656)).

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 142                  | Nein                     |
| Developer Edition       | 142                  | Nein                     |
| Beta                    | 142                  | Nein                     |
| Release                 | 142                  | Nein                     |

- `security.integrity_policy.stylesheet.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Idempotency-Key

Der {{httpheader("Idempotency-Key")}} HTTP-Anforderungs-Header kann von der Website-Client-Code verwendet werden, um eine {{HTTPMethod("POST")}} oder {{HTTPMethod("PATCH")}} Anforderungen idempotent](/de/docs/Glossary/idempotent) zu machen, wenn er mit einem Server verwendet wird, der es unterstützt.
Die Spezifikation gibt an, dass der Server dokumentieren und anzeigen sollte, welche Endpunkte diesen Header benötigen, das Format des Schlüssels und die zu erwartenden Fehlermeldungen.

Firefox fügt den Header _automatisch_ mit einem eindeutigen Schlüssel für jede neue `POST`-Anforderung hinzu, wenn er nicht bereits durch den Client-Seitencode der Seite hinzugefügt wurde.
Dies vereinfacht den Client-Seitencode, der erforderlich ist, um mit Servern zu arbeiten, die die Funktion unterstützen.

([Firefox-Bug 1830022](https://bugzil.la/1830022)).

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 135                  | Nein                     |
| Developer Edition       | 135                  | Nein                     |
| Beta                    | 135                  | Nein                     |
| Release                 | 135                  | Nein                     |

- `network.http.idempotencyKey.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Accept Header mit MIME-Typ image/jxl

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

[`SameSite` Cookies](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) haben standardmäßig den Wert `Lax`.
Mit dieser Einstellung werden Cookies nur gesendet, wenn ein Benutzer zur Ursprungsseite navigiert, nicht für seitenübergreifende Unteranfragen zum Laden von Bildern oder Frames in eine Website eines Drittanbieters und so weiter.
Weitere Details siehe [Firefox-Bug 1617609](https://bugzil.la/1617609).

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 69                   | Nein                     |
| Developer Edition       | 69                   | Nein                     |
| Beta                    | 69                   | Nein                     |
| Release                 | 69                   | Nein                     |

- `network.cookie.sameSite.laxByDefault`
  - : Auf `true` setzen, um zu aktivieren.

### Access-Control-Allow-Headers Platzhalterzeichen deckt nicht Authorization ab

Der [`Access-Control-Allow-Headers`](/de/docs/Web/HTTP/Reference/Headers/Access-Control-Allow-Headers) ist ein Antwortheader auf eine {{Glossary("Preflight_request", "CORS-Preflight-Anfrage")}}, die angibt, welche Anforderungsheader in der endgültigen Anforderung enthalten sein dürfen.
Die Antwortdirektive kann ein Platzhalterzeichen (`*`) enthalten, das angibt, dass die endgültige Anforderung alle Header außer dem `Authorization`-Header enthalten darf.

Standardmäßig enthält Firefox den `Authorization`-Header in der endgültigen Anforderung, nachdem er eine Antwort mit `Access-Control-Allow-Headers: *` erhalten hat.
Legen Sie die Präferenz auf `false` fest, um sicherzustellen, dass Firefox den `Authorization`-Header nicht einbezieht.
Weitere Details siehe [Firefox-Bug 1687364](https://bugzil.la/1687364).

| Veröffentlichungs-Kanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------------- | -------------------- | ------------------------ |
| Nightly                 | 115                  | Ja                       |
| Entwickler-Edition      | 115                  | Ja                       |
| Beta                    | 115                  | Ja                       |
| Release                 | 115                  | Ja                       |

- `network.cors_preflight.authorization_covered_by_wildcard`
  - : Auf `true` setzen, um zu aktivieren.

## Entwickler-Tools

Die Entwickler-Tools von Mozilla entwickeln sich ständig weiter. Wir experimentieren mit neuen Ideen, fügen neue Funktionen hinzu und testen sie auf den Nightly und Developer Edition-Kanälen, bevor wir sie in die Beta und Release-Versionen durchlassen. Die unten aufgeführten Funktionen sind die aktuellen experimentellen Funktionen der Entwickler-Tools.

**Keine experimentellen Funktionen in diesem Release-Zyklus.**

## Siehe auch

- [Firefox Entwickler-Veröffentlichungshinweise](/de/docs/Mozilla/Firefox/Releases)
- [Firefox Nightly](https://www.firefox.com/en-US/channel/desktop/)
- [Firefox Developer Edition](https://www.firefox.com/en-US/channel/desktop/developer/)
