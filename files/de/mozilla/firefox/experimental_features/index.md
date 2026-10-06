---
title: Experimentelle Funktionen in Firefox
short-title: Experimentelle Funktionen
slug: Mozilla/Firefox/Experimental_features
l10n:
  sourceCommit: 892eb917bee599a9d6cae7d33ed783129dbb39b3
---

Diese Seite listet experimentelle und teilweise implementierte Funktionen von Firefox auf, darunter sich weiterentwickelnde oder vorgeschlagene Standards der Webplattform.
Jeder Eintrag enthält Informationen darüber, in welchen Versionen eine Funktion enthalten ist (Nightly, Beta, Developer Edition oder Release), ob sie standardmäßig aktiviert ist und wie die **Einstellung** heißt, mit der Sie die Funktion aktivieren oder konfigurieren können.
Die Beschreibung jeder Funktion enthält außerdem Links zu den entsprechenden [Bugzilla-Fehlerberichten](https://bugzilla.mozilla.org), in denen die Funktion implementiert oder aktiviert wird.
Mithilfe dieser Informationen können Sie experimentelle Funktionen ausprobieren und Feedback geben, bevor sie offiziell veröffentlicht werden.

Im Lebenszyklus erscheinen neue Funktionen normalerweise zuerst in [Nightly](https://www.firefox.com/en-US/channel/desktop/#nightly), wo sie für frühzeitiges Feedback und Tests häufig standardmäßig aktiviert sind.
Wenn keine größeren Probleme auftreten, werden sie in die Vorabversionen [Beta](https://www.firefox.com/en-US/channel/desktop/#beta) und [Developer Edition](https://www.firefox.com/en-US/channel/desktop/developer/) aufgenommen. Schließlich werden freigegebene Funktionen über den Kanal [stable Release](https://www.firefox.com/en-US/) veröffentlicht.
Sobald eine Funktion in einer Release-Version standardmäßig aktiviert ist, gilt sie nicht mehr als experimentell und wird von dieser Seite entfernt.

Um diese Funktionen zu aktivieren, geben Sie `about:config` in die Firefox-Adressleiste ein, suchen Sie nach der zugehörigen **Einstellung** und ändern Sie deren Wert. Meist handelt es sich dabei um einen Schalter zwischen `true` und `false`.
Je nach Funktion müssen Sie den Browser möglicherweise neu starten, damit die Änderung wirksam wird.
Weitere Informationen zum Verwalten von Einstellungen in Firefox finden Sie im Support-Artikel zum [Firefox-Konfigurationseditor](https://support.mozilla.org/en-US/kb/about-config-editor-firefox).

## HTML

### Layout für input type="search"

Das Layout für `input type="search"` wurde aktualisiert. Dadurch wird in einem Suchfeld ein Symbol zum Löschen angezeigt, sobald jemand mit der Eingabe beginnt, wie es auch bei anderen Browsern der Fall ist. (Weitere Informationen finden Sie unter [Firefox-Fehlerbericht 558594](https://bugzil.la/558594).)

| Veröffentlichungskanal | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ---------------------- | ---------------------- | ------------------------ |
| Nightly                | 81                     | Nein                     |
| Developer Edition      | 81                     | Nein                     |
| Beta                   | 81                     | Nein                     |
| Release                | 81                     | Nein                     |

- `layout.forms.input-type-search.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Passwortanzeige umschalten

HTML-Elemente zur Passworteingabe ([`<input type="password">`](/de/docs/Web/HTML/Reference/Elements/input/password)) enthalten ein „Augen“-Symbol, mit dem sich der Passworttext ein- oder ausblenden lässt ([Firefox-Fehlerbericht 502258](https://bugzil.la/502258)).

| Veröffentlichungskanal | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ---------------------- | ---------------------- | ------------------------ |
| Nightly                | 96                     | Nein                     |
| Developer Edition      | 96                     | Nein                     |
| Beta                   | 96                     | Nein                     |
| Release                | 96                     | Nein                     |

- `layout.forms.reveal-password-button.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Zeitauswahl in `datetime-local`- und `time`-Eingabeelementen

Die HTML-Elemente [`<input type="datetime-local">`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local) und [`<input type="time">`](/de/docs/Web/HTML/Reference/Elements/input/time) unterstützen eine Zeitauswahl ([Firefox-Fehlerbericht 1726108](https://bugzil.la/1726108)).

| Veröffentlichungskanal | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ---------------------- | ---------------------- | ------------------------ |
| Nightly                | 144                    | Nein                     |
| Developer Edition      | 144                    | Nein                     |
| Beta                   | 144                    | Nein                     |
| Release                | 144                    | Nein                     |

- `dom.forms.datetime.timepicker`
  - : Zum Aktivieren auf `true` setzen.

### Attribute `alpha` und `colorspace` in `color`-Eingabeelementen

Das HTML-Element [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color) unterstützt die Attribute [`alpha`](/de/docs/Web/HTML/Reference/Elements/input/color#alpha) und [`colorspace`](/de/docs/Web/HTML/Reference/Elements/input/color#colorspace) ([Firefox-Fehlerbericht 1919718](https://bugzil.la/1919718)).

| Veröffentlichungskanal | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ---------------------- | ---------------------- | ------------------------ |
| Nightly                | 149                    | Ja                       |
| Developer Edition      | -                      | -                        |
| Beta                   | -                      | -                        |
| Release                | -                      | -                        |

- `dom.forms.html_color_picker.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Attribute `headingoffset` und `headingreset`

Das globale Attribut [`headingoffset`](/de/docs/Web/HTML/Reference/Global_attributes/headingoffset) erhöht die berechnete Überschriftenebene der [Überschriftenelemente](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) innerhalb des Elements, für das es festgelegt ist. So kann eine Komponente unabhängig von ihrer Position auf einer Seite dieselbe Überschriftenauszeichnung verwenden. Das Attribut [`headingreset`](/de/docs/Web/HTML/Reference/Global_attributes/headingreset) verhindert, dass die Versätze übergeordneter Elemente auf die Überschriften innerhalb des Elements angewendet werden, für das es festgelegt ist ([Firefox-Fehlerbericht 1974383](https://bugzil.la/1974383)).

| Veröffentlichungskanal | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ---------------------- | ---------------------- | ------------------------ |
| Nightly                | 153                    | Nein                     |
| Developer Edition      | 153                    | Nein                     |
| Beta                   | 153                    | Nein                     |
| Release                | 153                    | Nein                     |

- `dom.headingoffset.enabled`
  - : Zum Aktivieren auf `true` setzen.

## CSS

### `circle()` und `ellipse()` erlauben die Schlüsselwörter `farthest-corner` und `closest-corner`

Die Schlüsselwörter `farthest-corner` und `closest-corner` können jetzt verwendet werden, um die Radiuswerte der CSS-Grundformen [`ellipse()`](/de/docs/Web/CSS/Reference/Values/basic-shape/ellipse) und [`circle()`](/de/docs/Web/CSS/Reference/Values/basic-shape/circle) anzugeben.
(Weitere Informationen finden Sie unter [Firefox-Fehlerbericht 2037673](https://bugzil.la/2037673).)

| Veröffentlichungskanal | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ---------------------- | ---------------------- | ------------------------ |
| Nightly                | 153                    | Ja                       |
| Developer Edition      | 153                    | Nein                     |
| Beta                   | 153                    | Nein                     |
| Release                | 153                    | Nein                     |

- `layout.css.ellipse-corners.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Hexadezimalfelder zur Darstellung unerwarteter Steuerzeichen

Diese Funktion stellt unerwartete Steuerzeichen (Unicode-Kategorie Cc) als Hexadezimalfeld dar. Ausgenommen sind _Tabulator_ (`U+0009`), _Zeilenvorschub_ (`U+000A`), _Seitenvorschub_ (`U+000C`) und _Wagenrücklauf_ (`U+000D`). (Weitere Informationen finden Sie unter [Firefox-Fehlerbericht 1099557](https://bugzil.la/1099557).)

| Veröffentlichungskanal | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ---------------------- | ---------------------- | ------------------------ |
| Nightly                | 43                     | Ja                       |
| Developer Edition      | 43                     | Nein                     |
| Beta                   | 43                     | Nein                     |
| Release                | 43                     | Nein                     |

- `layout.css.control-characters.visible`
  - : Zum Aktivieren auf `true` setzen.

### Eigenschaft initial-letter

Die CSS-Eigenschaft {{cssxref("initial-letter")}} ist Teil der Spezifikation [CSS Inline Layout](https://drafts.csswg.org/css-inline/) und ermöglicht es Ihnen festzulegen, wie abgesetzte, hochgestellte und vertiefte Initialbuchstaben dargestellt werden. (Weitere Informationen finden Sie unter [Firefox-Fehlerbericht 1223880](https://bugzil.la/1223880).)

| Veröffentlichungskanal | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ---------------------- | ---------------------- | ------------------------ |
| Nightly                | 50                     | Nein                     |
| Developer Edition      | 50                     | Nein                     |
| Beta                   | 50                     | Nein                     |
| Release                | 50                     | Nein                     |

- `layout.css.initial-letter.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Funktion fit-content()

Die Funktion [`fit-content()`](/de/docs/Web/CSS/Reference/Values/fit-content_function) kann auf {{cssxref("width")}} und andere Größeneigenschaften angewendet werden. Für die Größenfestlegung von Spuren im CSS Grid Layout wird diese Funktion bereits umfassend unterstützt. (Weitere Informationen finden Sie unter [Firefox-Fehlerbericht 1312588](https://bugzil.la/1312588).)

| Veröffentlichungskanal | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ---------------------- | ---------------------- | ------------------------ |
| Nightly                | 91                     | Nein                     |
| Developer Edition      | 91                     | Nein                     |
| Beta                   | 91                     | Nein                     |
| Release                | 91                     | Nein                     |

- `layout.css.fit-content-function.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Scrollgesteuerte Animationen

Eine [scrollgesteuerte Animation](/de/docs/Web/CSS/Guides/Scroll-driven_animations), früher „scroll-linked animation“ genannt, hängt von der Scrollposition einer Bildlaufleiste ab statt von der Zeit oder einer anderen Größe.
Mit den Eigenschaften {{cssxref('scroll-timeline-name')}} und {{cssxref('scroll-timeline-axis')}} sowie der Kurzschreibweise {{cssxref('scroll-timeline')}} können Sie festlegen, dass eine bestimmte Bildlaufleiste in einem bestimmten benannten Container als Quelle für eine scrollgesteuerte Animation verwendet werden kann.
Die Scroll-Timeline lässt sich dann mit einer [Animation](/de/docs/Web/CSS/Guides/Animations) verknüpfen, indem die Eigenschaft {{cssxref('animation-timeline')}} auf den durch `scroll-timeline-name` definierten Namen gesetzt wird.

Bei Verwendung der Kurzschreibweise {{cssxref('scroll-timeline')}} muss auf {{cssxref('scroll-timeline-name')}} der Wert für {{cssxref('scroll-timeline-axis')}} folgen.
Sowohl die einzelnen Eigenschaften als auch die Kurzschreibweise sind über die Einstellung verfügbar.
Alternativ können Sie mit {{cssxref('animation-timeline')}} die funktionale Schreibweise {{cssxref("animation-timeline/scroll")}} verwenden, um anzugeben, dass eine Bildlaufleistenachse eines übergeordneten Elements für die Timeline verwendet wird.

Weitere Informationen finden Sie unter [Firefox-Fehlerbericht 1807685](https://bugzil.la/1807685), [Firefox-Fehlerbericht 1804573](https://bugzil.la/1804573), [Firefox-Fehlerbericht 1809005](https://bugzil.la/1809005), [Firefox-Fehlerbericht 1676791](https://bugzil.la/1676791), [Firefox-Fehlerbericht 1754897](https://bugzil.la/1754897), [Firefox-Fehlerbericht 1817303](https://bugzil.la/1817303) und [Firefox-Fehlerbericht 1737918](https://bugzil.la/1737918).

Die Eigenschaften {{cssxref('animation-range-start')}} und {{cssxref('animation-range-end')}} sowie die Kurzschreibweise {{cssxref('animation-range')}} werden noch nicht unterstützt. Weitere Informationen finden Sie unter [Firefox-Fehlerbericht 1676779](https://bugzil.la/1676779).

| Veröffentlichungskanal | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ---------------------- | ---------------------- | ------------------------ |
| Nightly                | 136                    | Ja                       |
| Developer Edition      | 110                    | Nein                     |
| Beta                   | 110                    | Nein                     |
| Release                | 110                    | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Medienmerkmal prefers-reduced-transparency

Mit dem CSS-Medienmerkmal {{cssxref("@media/prefers-reduced-transparency")}} können Sie erkennen, ob Benutzer die Einstellung aktiviert haben, die transparente oder durchscheinende Ebeneneffekte auf ihrem Gerät minimiert.
Weitere Informationen finden Sie unter [Firefox-Fehlerbericht 1736914](https://bugzil.la/1736914).

| Veröffentlichungskanal | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ---------------------- | ---------------------- | ------------------------ |
| Nightly                | 113                    | Nein                     |
| Developer Edition      | 113                    | Nein                     |
| Beta                   | 113                    | Nein                     |
| Release                | 113                    | Nein                     |

- `layout.css.prefers-reduced-transparency.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Medienmerkmal inverted-colors

Mit dem CSS-Medienmerkmal {{cssxref("@media/inverted-colors")}} können Sie erkennen, ob ein User Agent oder das zugrunde liegende Betriebssystem Farben invertiert.
Weitere Informationen finden Sie unter [Firefox-Fehlerbericht 1794628](https://bugzil.la/1794628).

| Veröffentlichungskanal | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ---------------------- | ---------------------- | ------------------------ |
| Nightly                | 114                    | Nein                     |
| Developer Edition      | 114                    | Nein                     |
| Beta                   | 114                    | Nein                     |
| Release                | 114                    | Nein                     |

- `layout.css.inverted-colors.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Eigenschaft für benannte View-Progress-Timelines

Mit der CSS-Eigenschaft {{cssxref("view-timeline-name")}} können Sie einem bestimmten Element einen Namen geben und damit festlegen, dass das scrollbare übergeordnete Element die Quelle einer View-Progress-Timeline ist.
Der Name kann dann `animation-timeline` zugewiesen werden. Dadurch wird das zugehörige Element animiert, während es sich durch den sichtbaren Bereich des scrollbaren übergeordneten Elements bewegt.
Weitere Informationen finden Sie unter [Firefox-Fehlerbericht 1737920](https://bugzil.la/1737920).

| Veröffentlichungskanal | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ---------------------- | ---------------------- | ------------------------ |
| Nightly                | 136                    | Ja                       |
| Developer Edition      | 114                    | Nein                     |
| Beta                   | 114                    | Nein                     |
| Release                | 114                    | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Funktion für anonyme View-Progress-Timelines

Mit der CSS-Funktion {{cssxref("animation-timeline/view")}} können Sie festlegen, dass die `animation-timeline` eines Elements eine View-Progress-Timeline ist. Das Element wird dadurch animiert, während es sich durch den sichtbaren Bereich seines scrollbaren übergeordneten Elements bewegt.
Die Funktion definiert die Achse des übergeordneten Elements, das die Timeline bereitstellt, sowie den Innenabstand innerhalb des sichtbaren Bereichs, an dem die Animation beginnt und einsetzt.
Weitere Informationen finden Sie unter [Firefox-Fehlerbericht 1808410](https://bugzil.la/1808410).

| Veröffentlichungskanal | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ---------------------- | ---------------------- | ------------------------ |
| Nightly                | 136                    | Ja                       |
| Developer Edition      | 114                    | Nein                     |
| Beta                   | 114                    | Nein                     |
| Release                | 114                    | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Transform-Eigenschaften mit Herstellerpräfix

Die mit `-moz-` präfigierten Eigenschaften für [CSS-Transformationen](/de/docs/Web/CSS/Guides/Transforms) können deaktiviert werden, indem die Einstellung `layout.css.prefixes.transforms` auf `false` gesetzt wird. Sie sollen deaktiviert werden, sobald die standardisierten CSS-Eigenschaften für Zoom ausreichend unterstützt werden ([Firefox-Fehlerbericht 1886134](https://bugzil.la/1886134), [Firefox-Fehlerbericht 1855763](https://bugzil.la/1855763)).

Diese Einstellung deaktiviert konkret die folgenden präfigierten Eigenschaften:

- `-moz-backface-visibility`
- `-moz-perspective`
- `-moz-perspective-origin`
- `-moz-transform`
- `-moz-transform-origin`
- `-moz-transform-style`

| Veröffentlichungskanal | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ---------------------- | ---------------------- | ------------------------ |
| Nightly                | 120                    | Ja                       |
| Developer Edition      | 120                    | Ja                       |
| Beta                   | 120                    | Ja                       |
| Release                | 120                    | Ja                       |

- `layout.css.prefixes.transforms`
  - : Zum Aktivieren auf `true` setzen.

### Symmetrisches `letter-spacing`

Die CSS-Eigenschaft {{cssxref("letter-spacing")}} verteilt den angegebenen Buchstabenabstand jetzt gleichmäßig auf beide Seiten jedes Zeichens. Dies unterscheidet sich vom bisherigen Verhalten, bei dem der Abstand überwiegend auf einer Seite hinzugefügt wird. Dieser Ansatz kann die Textabstände verbessern, insbesondere bei Text mit unterschiedlichen Schreibrichtungen.
([Firefox-Fehlerbericht 1891446](https://bugzil.la/1891446)).

| Veröffentlichungskanal | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ---------------------- | ---------------------- | ------------------------ |
| Nightly                | 128                    | Ja                       |
| Developer Edition      | 128                    | Ja                       |
| Beta                   | 127                    | Nein                     |
| Release                | 127                    | Nein                     |

- `layout.css.letter-spacing.model`
  - : Zum Aktivieren auf `true` setzen.

### Pseudoelemente nach elementbasierten Pseudoelementen zulassen

Es wurde mit der Arbeit begonnen, [Pseudoelemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) wie {{cssxref("::first-letter")}} und {{cssxref("::before")}} an [elementbasierte Pseudoelemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements#element-backed_pseudo-elements) wie {{cssxref("::details-content")}} und {{cssxref("::file-selector-button")}} anzuhängen.

Dadurch können Sie beispielsweise den ersten Buchstaben des Elements {{htmlElement("details")}} mit dem CSS-Selektor `::details-content::first-letter` gestalten oder mit dem CSS-Selektor `::file-selector-button::before` Inhalt vor einem {{HTMLElement("input") }}-Element mit [`type="file"`](/de/docs/Web/HTML/Reference/Elements/input/file) hinzufügen.

Derzeit kann nur die Unterstützung für `::details-content::first-letter` mithilfe von `@supports(::details-content::first-letter)` geprüft werden.
Das Pseudoelement `::file-selector-button` ist noch nicht als elementbasiertes Pseudoelement gekennzeichnet. Daher gibt es keine Möglichkeit, dies zu testen.
([Firefox-Fehlerbericht 1953557](https://bugzil.la/1953557), [Firefox-Fehlerbericht 1941406](https://bugzil.la/1941406)).

| Veröffentlichungskanal | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ---------------------- | ---------------------- | ------------------------ |
| Nightly                | 138                    | Nein                     |
| Developer Edition      | 138                    | Nein                     |
| Beta                   | 138                    | Nein                     |
| Release                | 138                    | Nein                     |

### Pseudoklassen `:heading` und `:heading()`

Mit der Pseudoklasse {{cssxref(":heading")}} können Sie alle [Überschriftenelemente](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) (`<h1>`–`<h6>`) zugleich gestalten, statt sie einzeln anzusprechen. Mit der funktionalen Pseudoklasse {{cssxref(":heading()")}} können Sie Überschriftenelemente gestalten, deren Überschriftenebene einer Ganzzahl aus einer kommagetrennten Liste entspricht ([Firefox-Fehlerbericht 1974386](https://bugzil.la/1974386) und [Firefox-Fehlerbericht 1984310](https://bugzil.la/1984310)).

| Veröffentlichungskanal | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ---------------------- | ---------------------- | ------------------------ |
| Nightly                | 142                    | Nein                     |
| Developer Edition      | 142                    | Nein                     |
| Beta                   | 142                    | Nein                     |
| Release                | 142                    | Nein                     |

- `layout.css.heading-selector.enabled`
  - : Zum Aktivieren auf `true` setzen.

### At-Regel `@custom-media`

Die CSS-At-Regel {{cssxref("@custom-media")}} definiert Aliasse für lange oder komplexe Medienabfragen. Statt dieselbe fest codierte `<media-query-list>` in mehreren `@media`-At-Regeln zu wiederholen, können Sie sie einmal in einer `@custom-media`-At-Regel definieren und bei Bedarf im gesamten Stylesheet darauf verweisen ([Firefox-Fehlerbericht 1744292](https://bugzil.la/1744292)).

| Veröffentlichungskanal | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ---------------------- | ---------------------- | ------------------------ |
| Nightly                | 148                    | Nein                     |
| Developer Edition      | 148                    | Nein                     |
| Beta                   | 148                    | Nein                     |
| Release                | 148                    | Nein                     |

- `layout.css.custom-media.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Wert `base-select` für die CSS-Eigenschaft `appearance`

Mit dem Wert [`base-select`](/de/docs/Web/CSS/Reference/Properties/appearance#base-select) für die CSS-Eigenschaft {{cssxref("appearance")}} können Sie das Element {{htmlelement("select")}} und das Pseudoelement {{cssxref("::picker()", "::picker(select)")}}, für die allein der Wert relevant ist, vollständig gestalten. Derzeit wird nur die Gestaltung des Elements `<select>` unterstützt. Die Gestaltung des Pseudoelements `::picker(select)` wird in zukünftigen Versionen ergänzt. Diese Funktion ist Teil der Arbeit an [anpassbaren Select-Elementen](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select). Für ihre Verwendung müssen zwei Einstellungen aktiviert werden ([Firefox-Fehlerbericht 1974787](https://bugzil.la/1974787)).

| Veröffentlichungskanal | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ---------------------- | ---------------------- | ------------------------ |
| Nightly                | 149                    | Nein                     |
| Developer Edition      | 149                    | Nein                     |
| Beta                   | 149                    | Nein                     |
| Release                | 149                    | Nein                     |

- `dom.select.customizable_select.enabled`
  - : Zum Aktivieren auf `true` setzen.
- `layout.css.appearance-base.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Absolut positionierte Elemente in mehrspaltigen Containern und beim Drucken

Absolut positionierte Elemente innerhalb von [mehrspaltigen Containern](/de/docs/Web/CSS/Guides/Multicol_layout) und beim Drucken werden jetzt korrekt positioniert und aufgeteilt.
Dies verbessert die Interoperabilität mit anderen Browsern und verhindert Layoutprobleme wie überlappenden Text oder den Verlust von Inhalten.
([Firefox-Fehlerbericht 2018797](https://bugzil.la/2018797)).

| Veröffentlichungskanal | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ---------------------- | ---------------------- | ------------------------ |
| Nightly                | 150                    | Ja                       |
| Developer Edition      | 150                    | Nein                     |
| Beta                   | 150                    | Nein                     |
| Release                | 150                    | Nein                     |

- `layout.abspos.fragmentainer-aware-positioning.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Bereichssyntax für `@container style()`-Abfragen

Die [`style()`](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries)-Abfragen der CSS-At-Regel [`@container`](/de/docs/Web/CSS/Reference/At-rules/@container) unterstützen jetzt die _Bereichssyntax_. Damit können Sie prüfen, ob ein Container eine gültige benutzerdefinierte CSS-Eigenschaft hat, deren Wert mit Vergleichsoperatoren wie `>`, `<`, `>=` und `<=` vergleichen und seine Kindelemente entsprechend gestalten ([Firefox-Fehlerbericht 2024601](https://bugzil.la/2024601)).

| Veröffentlichungskanal | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ---------------------- | ---------------------- | ------------------------ |
| Nightly                | 151                    | Nein                     |
| Developer Edition      | 151                    | Nein                     |
| Beta                   | 151                    | Nein                     |
| Release                | 151                    | Nein                     |

- `layout.css.attr.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Werte vom Typ `<timeline-range-name>`

Die CSS-Eigenschaften {{cssxref("animation-range-start")}} und {{cssxref("animation-range-end")}} sowie die Kurzschreibweise {{cssxref("animation-range")}} unterstützen jetzt Werte vom Typ [`<timeline-range-name>`](/de/docs/Web/CSS/Reference/Values/timeline-range-name). Mit diesen [`<timeline-range-name>`-Werten](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names#timeline_range_names) können Sie genau angeben, in welchem Abschnitt eine scrollgesteuerte Animation stattfindet ([Firefox-Fehlerbericht 1804775](https://bugzil.la/1804775)).

| Veröffentlichungskanal | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ---------------------- | ---------------------- | ------------------------ |
| Nightly                | 151                    | Ja                       |
| Developer Edition      | 151                    | Nein                     |
| Beta                   | 151                    | Nein                     |
| Release                | 151                    | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Werte vom Typ `<timeline-range-name>` in `@keyframes`-Selektoren

Die At-Regel {{cssxref("@keyframes")}} unterstützt jetzt Werte vom Typ [`<timeline-range-name>`](/de/docs/Web/CSS/Reference/Values/timeline-range-name). Mit diesen [Werten](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names#timeline_range_names) können Sie den Abschnitt angeben, in dem eine scrollgesteuerte Animation stattfindet ([Firefox-Fehlerbericht 1824875](https://bugzil.la/1824875)).

| Veröffentlichungskanal | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ---------------------- | ---------------------- | ------------------------ |
| Nightly                | 152                    | Ja                       |
| Developer Edition      | 152                    | Nein                     |
| Beta                   | 152                    | Nein                     |
| Release                | 152                    | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Attribute externer Ressourcen aktualisieren

Die CSS-Eigenschaft {{cssxref("link-parameters")}} und die CSS-Funktion {{cssxref("param")}} werden jetzt unterstützt. Damit können Attribute externer Ressourcen wie SVGs aktualisiert werden, deren Attribute mithilfe der CSS-Funktion {{cssxref("env")}} festgelegt wurden. So kann eine einzige externe Ressource verwendet werden, statt mehrere Varianten zu erstellen, die sich nur in Farben oder anderen Werten unterscheiden ([Firefox-Fehlerbericht 2046153](https://bugzil.la/2046153)).

| Veröffentlichungskanal | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ---------------------- | ---------------------- | ------------------------ |
| Nightly                | 154                    | Ja                       |
| Developer Edition      | 153                    | Nein                     |
| Beta                   | 153                    | Nein                     |
| Release                | 153                    | Nein                     |

- `layout.css.link-parameters.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Inhalte mit `line-clamp` kürzen

Die CSS-Eigenschaft {{cssxref("line-clamp")}} funktioniert jetzt ohne das Herstellerpräfix `-webkit-`, unterstützt derzeit jedoch weder den Wert `no-ellipsis` noch Werte vom Typ `<string>` ([Firefox-Fehlerbericht 2042986](https://bugzil.la/2042986)).

| Veröffentlichungskanal | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ---------------------- | ---------------------- | ------------------------ |
| Nightly                | 154                    | Nein                     |
| Developer Edition      | 154                    | Nein                     |
| Beta                   | 154                    | Nein                     |
| Release                | 154                    | Nein                     |

- `layout.css.line-clamp.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Prozentwerte für `text-decoration-inset`

Die CSS-Eigenschaft {{cssxref("text-decoration-inset")}} unterstützt jetzt Prozentwerte. Der Prozentwert gibt die Größe des Innenabstands als Prozentsatz der Inline-Größe der dekorierten Box oder jedes einzelnen Boxfragments an, abhängig vom Wert von {{cssxref("box-decoration-break")}} ([Firefox-Fehlerbericht 2044602](https://bugzil.la/2044602)).

| Veröffentlichungskanal | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ---------------------- | ---------------------- | ------------------------ |
| Nightly                | 154                    | Nein                     |
| Developer Edition      | 154                    | Nein                     |
| Beta                   | 154                    | Nein                     |
| Release                | 154                    | Nein                     |

- `layout.css.text-decoration-inset-percentage.enabled`
  - : Zum Aktivieren auf `true` setzen.

### `view-timeline` umfasst `view-timeline-inset`

Die Kurzschreibweise {{cssxref("view-timeline")}} unterstützt jetzt die Eigenschaft {{cssxref("view-timeline-inset")}}. Damit können Sie Werte für den Einzug oder Überstand am Anfang und/oder Ende festlegen, um die Position der View-Progress-Timeline anzupassen ([Firefox-Fehlerbericht 2046602](https://bugzil.la/2046602)).

| Veröffentlichungskanal | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ---------------------- | ---------------------- | ------------------------ |
| Nightly                | 155                    | Ja                       |
| Developer Edition      | 155                    | Nein                     |
| Beta                   | 155                    | Nein                     |
| Release                | 155                    | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Namen für `timeline-scope` sind jetzt standardmäßig global

Das Standardverhalten für den Geltungsbereich benannter Timelines wurde geändert: Die Namen gelten jetzt global. Mit der CSS-Eigenschaft {{cssxref("timeline-scope")}} und einem Wert von {{cssxref("scroll-timeline-name")}} oder {{cssxref("view-timeline-name")}} lässt sich ihr Geltungsbereich auf Elemente und deren Teilbaum begrenzen ([Firefox-Fehlerbericht 2024012](https://bugzil.la/2024012)).

| Veröffentlichungskanal | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ---------------------- | ---------------------- | ------------------------ |
| Nightly                | 155                    | Ja                       |
| Developer Edition      | 155                    | Nein                     |
| Beta                   | 155                    | Nein                     |
| Release                | 155                    | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Unterstützungsabfragen mit `named-feature()`

Mit der Funktion `named-feature()` in der At-Regel {{cssxref("@supports")}} können Sie prüfen, ob der Browser eine Funktion unterstützt, für die es keine andere erkennbare Syntax gibt, beispielsweise mit `@supports named-feature(anchor-position-follows-transforms)`.
([Firefox-Fehlerbericht 2042977](https://bugzil.la/2042977) und [Firefox-Fehlerbericht 2055354](https://bugzil.la/2055354)).

| Veröffentlichungskanal | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ---------------------- | ---------------------- | ------------------------ |
| Nightly                | 156                    | Nein                     |
| Developer Edition      | 156                    | Nein                     |
| Beta                   | 156                    | Nein                     |
| Release                | 156                    | Nein                     |

- `layout.css.anchor-positioning.follows-transforms.enabled`
  - : Zum Aktivieren auf `true` setzen.

## SVG

**In diesem Veröffentlichungszyklus gibt es keine experimentellen Funktionen.**

## MathML

### `href` für MathML-Elemente außer `<a>` deaktivieren

Wenn diese Funktion aktiviert ist, erstellt das globale Attribut [`href`](/de/docs/Web/MathML/Reference/Global_attributes/href) auf anderen MathML-Elementen als `<a>` keinen Hyperlink mehr. Dadurch entspricht Firefox der [MathML-Core-Spezifikation](https://w3c.github.io/mathml-core/#the-a-element), die Hyperlinks nur für das Element `<a>` definiert ([Firefox-Fehlerbericht 2026848](https://bugzil.la/2026848)).

| Veröffentlichungskanal | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ---------------------- | ---------------------- | ------------------------ |
| Nightly                | 151                    | Ja                       |
| Developer Edition      | 151                    | Nein                     |
| Beta                   | 151                    | Nein                     |
| Release                | 151                    | Nein                     |

- `mathml.href_link_on_non_anchor_element.disabled`
  - : Zum Aktivieren auf `true` setzen.

### Schnittstelle `MathMLAnchorElement` implementieren

Wenn diese Funktion aktiviert ist, wird das MathML-Element [`<a>`](/de/docs/Web/MathML/Reference/Element/a) im DOM korrekt durch die Schnittstelle [`MathMLAnchorElement`](/de/docs/Web/API/MathMLAnchorElement) statt durch die allgemeine Schnittstelle [`MathMLElement`](/de/docs/Web/API/MathMLElement) repräsentiert ([Firefox-Fehlerbericht 2059312](https://bugzil.la/2059312)).

| Veröffentlichungskanal | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ---------------------- | ---------------------- | ------------------------ |
| Nightly                | 155                    | Ja                       |
| Developer Edition      | 155                    | Nein                     |
| Beta                   | 155                    | Nein                     |
| Release                | 155                    | Nein                     |

- `mathml.a.element.enabled`
  - : Zum Aktivieren auf `true` setzen.

### MathML-`<a>`-Elemente

Das MathML-Element `<a>` erstellt einen Hyperlink aus MathML-Inhalten und stellt die Schnittstelle `MathMLAnchorElement` mit denselben URL-Komponenteneigenschaften wie HTML-Elemente {{HTMLElement("a")}} bereit.

In dieser Version wird die Unterstützung für die IDL-Attribute `rel` und `relList` hinzugefügt ([Firefox-Fehlerbericht 2063819](https://bugzil.la/2063819)).

| Veröffentlichungskanal | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ---------------------- | ---------------------- | ------------------------ |
| Nightly                | 156                    | Ja                       |
| Developer Edition      | 156                    | Nein                     |
| Beta                   | 156                    | Nein                     |
| Release                | 156                    | Nein                     |

- `mathml.a.element.enabled`
  - : Zum Aktivieren auf `true` setzen.

## JavaScript

### TC39-Vorschlag zu Intl.Locale-Informationen

Der [TC39-Vorschlag zu Intl.Locale-Informationen](https://github.com/tc39/proposal-intl-locale-info) wird jetzt unterstützt.
Dazu gehören alle Instanzmethoden von `Intl.Locale`, deren Name mit „get“ beginnt: {{jsxref("Intl/Locale/getCalendars", "Intl.Locale.prototype.getCalendars()")}}, {{jsxref("Intl/Locale/getCollations", "Intl.Locale.prototype.getCollations()")}}, {{jsxref("Intl/Locale/getHourCycles", "Intl.Locale.prototype.getHourCycles()")}}, {{jsxref("Intl/Locale/getNumberingSystems", "Intl.Locale.prototype.getNumberingSystems()")}}, {{jsxref("Intl/Locale/getTextInfo", "Intl.Locale.prototype.getTextInfo()")}}, {{jsxref("Intl/Locale/getTimeZones", "Intl.Locale.prototype.getTimeZones()")}} und {{jsxref("Intl/Locale/getWeekInfo", "Intl.Locale.prototype.getWeekInfo()")}}.
([Firefox-Fehlerbericht 1693576](https://bugzil.la/1693576)).

| Veröffentlichungskanal | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ---------------------- | ---------------------- | ------------------------ |
| Nightly                | 152                    | Nein                     |
| Developer Edition      | —                      | —                        |
| Beta                   | —                      | —                        |
| Release                | —                      | —                        |

- `javascript.options.experimental.intl_locale_info`
  - : Zum Aktivieren in Nightly auf `true` setzen.

### Mehrere Import Maps

Unterstützung für [mehrere Import Maps](/de/docs/Web/HTML/Reference/Elements/script/type/importmap#merging_multiple_import_maps).
Dies gibt Entwicklern mehr Flexibilität beim Strukturieren und Laden von JavaScript-Modulen, da sie nicht mehr sämtliche Modulzuordnungen im Voraus kennen und in einer einzigen Import Map deklarieren müssen, bevor Module geladen werden.
([Firefox-Fehlerbericht 1916277](https://bugzil.la/1916277)).

| Veröffentlichungskanal | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ---------------------- | ---------------------- | ------------------------ |
| Nightly                | 150                    | Nein                     |
| Developer Edition      | 150                    | Nein                     |
| Beta                   | 150                    | Nein                     |
| Release                | 150                    | Nein                     |

- `dom.multiple_import_maps.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Zusicherungen für Puffergrenzen in regulären Ausdrücken

Die [Zusicherungen für Puffergrenzen `\A`, `\z` und `\Z`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Buffer_boundary_assertion) werden jetzt unterstützt.
Mit `\A` und `\z` können Sie den Anfang beziehungsweise das Ende der gesamten Eingabe abgleichen. `\Z` gleicht das Ende der Eingabe ab und ignoriert dabei ein Zeilenendezeichen.
Die Zusicherungen werden vom Flag [`m`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline) nicht beeinflusst (anders als `^` und `$`) und können nur im [Unicode-fähigen Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) verwendet werden (wenn das Flag `u` oder `v` gesetzt ist).
([Firefox-Fehlerbericht 2047706](https://bugzil.la/2047706)).

| Veröffentlichungskanal | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ---------------------- | ---------------------- | ------------------------ |
| Nightly                | 155                    | Nein                     |
| Developer Edition      | —                      | —                        |
| Beta                   | —                      | —                        |
| Release                | —                      | —                        |

- `javascript.options.experimental.regexp_buffer_boundaries`
  - : Zum Aktivieren in Nightly auf `true` setzen.

### TC39-Vorschlag zum Standardexport mit `export *`

Der [TC39-Vorschlag zum Standardexport mit `export *`](https://github.com/tc39/proposal-export-star-default) ermöglicht es, mit [`export * from`](/de/docs/Web/JavaScript/Reference/Statements/export#re-exporting_aggregating) den Standardexport eines Moduls zusammen mit seinen benannten Exporten erneut zu exportieren. Ohne diese Änderung wird der Standardexport eines Moduls von `export * from` ausgelassen.
([Firefox-Fehlerbericht 2065611](https://bugzil.la/2065611)).

Beachten Sie, dass sich dieser Vorschlag noch in einem sehr frühen Stadium befindet und ändern kann.

| Veröffentlichungskanal | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ---------------------- | ---------------------- | ------------------------ |
| Nightly                | 157                    | Nein                     |
| Developer Edition      | 157                    | Nein                     |
| Beta                   | 157                    | Nein                     |
| Release                | —                      | —                        |

- `javascript.options.experimental.export_star_default`
  - : Zum Aktivieren auf `true` setzen.

## APIs

### Absturzberichte

Absturzberichte können jetzt über die [Reporting API](/de/docs/Web/API/Reporting_API) an den Endpunkt `default` gesendet werden.
Beachten Sie, dass Firefox die Angabe von [`CrashReportContext`](/de/docs/Web/API/CrashReportContext) im Berichtstext nicht unterstützt.
([Firefox-Fehlerbericht 2036160](https://bugzil.la/2036160)).

| Veröffentlichungskanal | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ---------------------- | ---------------------- | ------------------------ |
| Nightly                | 152                    | Ja                       |
| Developer Edition      | 152                    | Nein                     |
| Beta                   | 152                    | Nein                     |
| Release                | 152                    | Nein                     |

- `dom.reporting.crash.enabled`
  - : Zum Aktivieren auf `true` setzen (in Nightly standardmäßig aktiviert).

### Geltungsbereichsgebundene Registries für benutzerdefinierte Elemente

Die Unterstützung für [geltungsbereichsgebundene Registries für benutzerdefinierte Elemente](/de/docs/Web/API/Web_components/Using_custom_elements#scoped_custom_element_registries) wird implementiert.
Mit solchen Registries kann ein Shadow Tree eine unabhängige [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry) erstellen, deren Definitionen nur für diesen DOM-Teilbaum gelten.
So lassen sich Namenskonflikte vermeiden, wenn mehrere Web Components Elemente mit demselben Namen deklarieren.

Die Implementierung umfasst:

- Die Eigenschaft `customElementRegistry` für [`Document`](/de/docs/Web/API/Document), [`Element`](/de/docs/Web/API/Element) und [`ShadowRoot`](/de/docs/Web/API/ShadowRoot).
  Der [Konstruktor `CustomElementRegistry()`](/de/docs/Web/API/CustomElementRegistry/CustomElementRegistry) erstellt ein neues `CustomElementRegistry`-Objekt für die Verwendung mit begrenztem Geltungsbereich ([Firefox-Fehlerbericht 2018900](https://bugzil.la/2018900)).

Ab Version 156:

- [Geltungsbereichsgebundene Registries für benutzerdefinierte Elemente](/de/docs/Web/API/Web_components/Using_custom_elements#scoped_custom_element_registries) werden jetzt unterstützt. Dadurch kann ein Shadow Root benutzerdefinierte Elemente definieren, ohne dass diese mit Definitionen in der globalen Registry kollidieren ([Firefox-Fehlerbericht 2064333](https://bugzil.la/2064333)).

| Veröffentlichungskanal | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ---------------------- | ---------------------- | ------------------------ |
| Nightly                | 156                    | Ja                       |
| Developer Edition      | 150                    | Nein                     |
| Beta                   | 150                    | Nein                     |
| Release                | 150                    | Nein                     |

- `dom.scoped-custom-element-registries.enabled`
  - : Zum Aktivieren auf `true` setzen.

### CSS Typed Object Model Level 1

Die [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) ist in Nightly implementiert.
Sie vereinfacht die Bearbeitung von CSS-Eigenschaften, indem sie CSS-Werte als typisierte JavaScript-Objekte statt als Zeichenfolgen bereitstellt.
([Firefox-Fehlerbericht 1278697](https://bugzil.la/1278697)).

| Veröffentlichungskanal | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ---------------------- | ---------------------- | ------------------------ |
| Nightly                | 154                    | Ja                       |
| Developer Edition      | 149                    | Nein                     |
| Beta                   | 149                    | Nein                     |
| Release                | 149                    | Nein                     |

- `layout.css.typed-om.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Grafik: Canvas, WebGL und WebGPU

#### WebGL: Erweiterungen im Entwurfsstadium

Wenn diese Einstellung aktiviert ist, können alle derzeit getesteten WebGL-Erweiterungen mit dem Status „Entwurf“ verwendet werden. Derzeit testet Firefox keine WebGL-Erweiterungen.

#### WebGPU API

Die [WebGPU API](/de/docs/Web/API/WebGPU_API) bietet Low-Level-Unterstützung für Berechnungen und das Rendern von Grafiken mithilfe der [Grafikprozessoreinheit](https://en.wikipedia.org/wiki/Graphics_Processing_Unit) (GPU) des Geräts oder Computers der Benutzer.
Ab Version 142 ist sie unter Windows in allen Kontexten außer Service Workern aktiviert.
Ab Version 147 ist sie unter macOS auf Apple Silicon in allen Browsing-Kontexten außer Service Workern aktiviert.
Auf anderen Plattformen wie Linux und macOS auf Intel Silicon ist sie in Nightly aktiviert.
Den Fortschritt bei dieser API können Sie unter [Firefox-Fehlerbericht 1602129](https://bugzil.la/1602129) verfolgen.

| Veröffentlichungskanal | Hinzugefügt in Version | Standardmäßig aktiviert?                                                      |
| ---------------------- | ---------------------- | ----------------------------------------------------------------------------- |
| Nightly                | 141                    | Ja                                                                            |
| Developer Edition      | 141                    | Nein (Ja unter Windows und macOS auf Apple Silicon, außer in Service Workern) |
| Beta                   | 141                    | Nein (Ja unter Windows und macOS auf Apple Silicon, außer in Service Workern) |
| Release                | 141                    | Nein (Ja unter Windows und macOS auf Apple Silicon, außer in Service Workern) |

- `dom.webgpu.enabled`
  - : Zum Aktivieren auf `true` setzen (in Nightly und unter Windows in allen Veröffentlichungskanälen aktiviert).
- `dom.webgpu.service-workers.enabled`
  - : Zum Aktivieren auf `true` setzen (in Nightly aktiviert).

### WebRTC und Medien

Die folgenden experimentellen Funktionen umfassen Funktionen aus Medien-APIs wie der [WebRTC API](/de/docs/Web/API/WebRTC_API), der [Web Audio API](/de/docs/Web/API/Web_Audio_API), der [Media Source Extensions API](/de/docs/Web/API/Media_Source_Extensions_API), der [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API) und der [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API).

#### Audio Session API

Die [Audio Session API](/de/docs/Web/API/Audio_Session_API) bietet Webanwendungen einen Mechanismus, um zu steuern, wie ihre Audiowiedergabe mit anderer Audiowiedergabe auf einem Gerät zusammenspielt ([Firefox-Fehlerbericht 2055710](https://bugzil.la/2055710)).

| Veröffentlichungskanal | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ---------------------- | ---------------------- | ------------------------ |
| Nightly                | 155                    | Ja                       |
| Developer Edition      | 153                    | Nein                     |
| Beta                   | 153                    | Nein                     |
| Release                | 153                    | Nein                     |

- `dom.audio_session.enabled`
  - : Zum Aktivieren auf `true` setzen.

#### HTMLMediaElement-Eigenschaften: audioTracks und videoTracks

Wenn diese Funktion aktiviert ist, erhalten alle HTML-Medienelemente die Eigenschaften [`HTMLMediaElement.audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks) und [`HTMLMediaElement.videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks). Da Firefox derzeit jedoch nicht mehrere Audio- und Videospuren unterstützt, funktionieren die häufigsten Anwendungsfälle für diese Eigenschaften nicht. Deshalb sind beide standardmäßig deaktiviert. Weitere Informationen finden Sie unter [Firefox-Fehlerbericht 1057233](https://bugzil.la/1057233).

| Veröffentlichungskanal | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ---------------------- | ---------------------- | ------------------------ |
| Nightly                | 33                     | Nein                     |
| Developer Edition      | 33                     | Nein                     |
| Beta                   | 33                     | Nein                     |
| Release                | 33                     | Nein                     |

- `media.track.enabled`
  - : Zum Aktivieren auf `true` setzen.

#### Asynchrones Hinzufügen und Entfernen für SourceBuffer

Damit werden der Schnittstelle [`SourceBuffer`](/de/docs/Web/API/SourceBuffer) die Promise-basierten Methoden [`appendBufferAsync()`](/de/docs/Web/API/SourceBuffer/appendBufferAsync) und [`removeAsync()`](/de/docs/Web/API/SourceBuffer/removeAsync) zum Hinzufügen und Entfernen von Medienquellpuffern hinzugefügt. Weitere Informationen finden Sie unter [Firefox-Fehlerbericht 1280613](https://bugzil.la/1280613) und [Firefox-Fehlerbericht 778617](https://bugzil.la/778617).

| Veröffentlichungskanal | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ---------------------- | ---------------------- | ------------------------ |
| Nightly                | 62                     | Nein                     |
| Developer Edition      | 62                     | Nein                     |
| Beta                   | 62                     | Nein                     |
| Release                | 62                     | Nein                     |

- `media.mediasource.experimental.enabled`
  - : Zum Aktivieren auf `true` setzen.

#### Strenge der AVIF-Konformitätsprüfung

Mit der Einstellung `image.avif.compliance_strictness` können Sie steuern, wie _streng_ [AVIF](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image)-Bilder verarbeitet werden.
Dadurch können Firefox-Benutzer Bilder anzeigen, die in einigen anderen Browsern dargestellt werden, auch wenn sie die Spezifikation nicht vollständig einhalten.

| Veröffentlichungskanal | Hinzugefügt in Version | Standardwert |
| ---------------------- | ---------------------- | ------------ |
| Nightly                | 92                     | 1            |
| Developer Edition      | 92                     | 1            |
| Beta                   | 92                     | 1            |
| Release                | 92                     | 1            |

- `image.avif.compliance_strictness`
  - : Numerischer Wert für den _Strengegrad_. Zulässige Werte sind:
    - `0`: Tolerant. Bilder mit Verstößen sowohl gegen Empfehlungen (Formulierungen mit „should“) als auch gegen Anforderungen (Formulierungen mit „shall“) werden akzeptiert, sofern sie sicher oder eindeutig interpretiert werden können.
    - `1` **(Standardwert)**: Gemischt. Verstöße gegen Anforderungen („shall“) werden abgelehnt, Verstöße gegen Empfehlungen („should“) jedoch zugelassen.
    - `2`: Streng. Jegliche Verstöße gegen festgelegte Anforderungen oder Empfehlungen werden abgelehnt.

#### JPEG-XL-Unterstützung

Firefox unterstützt das Bildformat [JPEG XL](https://jpeg.org/jpegxl/), einen modernen Nachfolger von JPEG, der eine bessere Komprimierung und Bildqualität sowie neue Möglichkeiten wie Transparenz, Animationen und HDR-Unterstützung bietet.
Weitere Informationen finden Sie unter [Firefox-Fehlerbericht 1539075](https://bugzil.la/1539075) und [Firefox-Fehlerbericht 2016688](https://bugzil.la/2016688).

In Firefox 149 wurde der bisherige, in C++ geschriebene Bilddecoder für [JPEG XL](https://jpeg.org/jpegxl/) durch eine neue, auf Rust basierende Implementierung ersetzt, die die Bibliothek `jxl-rs` verwendet ([Firefox-Fehlerbericht 1986393](https://bugzil.la/1986393)).

| Veröffentlichungskanal | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ---------------------- | ---------------------- | ------------------------ |
| Nightly                | 153                    | Ja                       |
| Developer Edition      | 152                    | Nein                     |
| Beta                   | 152                    | Nein                     |
| Release                | 152                    | Nein                     |

- `image.jxl.enabled`
  - : Zum Aktivieren auf `true` setzen.

### WebVR API (deaktiviert)

Die veraltete [WebVR API](/de/docs/Web/API/WebVR_API) soll entfernt werden.
Sie ist in allen Versionen standardmäßig deaktiviert ([Firefox-Fehlerbericht 1750902](https://bugzil.la/1750902)).

| Veröffentlichungskanal | Entfernt in Version | Standardmäßig aktiviert? |
| ---------------------- | ------------------- | ------------------------ |
| Nightly                | 98                  | Nein                     |
| Developer Edition      | 98                  | Nein                     |
| Beta                   | 98                  | Nein                     |
| Release                | 98                  | Nein                     |

- `dom.vr.enabled`
  - : Zum Aktivieren auf `true` setzen.

### GeometryUtils-Methoden: convertPointFromNode(), convertRectFromNode() und convertQuadFromNode()

Die `GeometryUtils`-Methoden `convertPointFromNode()`, `convertRectFromNode()` und `convertQuadFromNode()` bilden den angegebenen Punkt, das Rechteck beziehungsweise das Viereck vom [`Node`](/de/docs/Web/API/Node), für den sie aufgerufen werden, auf einen anderen Knoten ab. (Weitere Informationen finden Sie unter [Firefox-Fehlerbericht 918189](https://bugzil.la/918189).)

| Veröffentlichungskanal | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ---------------------- | ---------------------- | ------------------------ |
| Nightly                | 31                     | Nein                     |
| Developer Edition      | 31                     | Nein                     |
| Beta                   | 31                     | Nein                     |
| Release                | 31                     | Nein                     |

- `layout.css.convertFromNode.enabled`
  - : Zum Aktivieren auf `true` setzen.

### GeometryUtils-Methode: getBoxQuads()

Die `GeometryUtils`-Methode `getBoxQuads()` gibt die CSS-Boxen für einen [`Node`](/de/docs/Web/API/Node) relativ zu einem beliebigen anderen Knoten oder Viewport zurück. (Weitere Informationen finden Sie unter [Firefox-Fehlerbericht 917755](https://bugzil.la/917755).)

| Veröffentlichungskanal | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ---------------------- | ---------------------- | ------------------------ |
| Nightly                | 31                     | Nein                     |
| Developer Edition      | 31                     | Nein                     |
| Beta                   | 31                     | Nein                     |
| Release                | 31                     | Nein                     |

- `layout.css.getBoxQuads.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Payment Request API

#### Grundlegende Zahlungsabwicklung

Die [Payment Request API](/de/docs/Web/API/Payment_Request_API) unterstützt die Abwicklung webbasierter Zahlungen innerhalb von Webinhalten oder Apps. Aufgrund eines Fehlers, der beim Testen der Benutzeroberfläche aufgetreten ist, haben wir beschlossen, die Veröffentlichung dieser API zu verschieben, während mögliche Änderungen an der API besprochen werden. Die Arbeit daran wird fortgesetzt. (Weitere Informationen finden Sie unter [Firefox-Fehlerbericht 1318984](https://bugzil.la/1318984).)

| Veröffentlichungskanal | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ---------------------- | ---------------------- | ------------------------ |
| Nightly                | 55                     | Nein                     |
| Developer Edition      | 55                     | Nein                     |
| Beta                   | 55                     | Nein                     |
| Release                | 55                     | Nein                     |

- `dom.payments.request.enabled`
  - : Zum Aktivieren auf `true` setzen.
- `dom.payments.request.supportedRegions`
  - : Ländercodes als kommagetrennte Liste zulässiger Regionen (z. B. `US,CA`).

### Web Share API

Mit der [Web Share API](/de/docs/Web/API/Web_Share_API) können Dateien, URLs und andere Daten von einer Website aus geteilt werden.
Diese Funktion ist unter Android in allen Versionen aktiviert, auf Desktop-Systemen jedoch nur über eine Einstellung verfügbar (sofern unten nicht anders angegeben).

| Veröffentlichungskanal | Geändert in Version | Standardmäßig aktiviert?                          |
| ---------------------- | ------------------- | ------------------------------------------------- |
| Nightly                | 71                  | Nein (Standard). Ja (unter Windows ab Version 92) |
| Developer Edition      | 71                  | Nein                                              |
| Beta                   | 71                  | Nein                                              |
| Release                | 71                  | Nein (Desktop). Ja (Android).                     |

- `dom.webshare.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Notifications API

Bei Benachrichtigungen ist die Eigenschaft [`requireInteraction`](/de/docs/Web/API/Notification/requireInteraction) unter Windows und in Nightly standardmäßig auf true gesetzt ([Firefox-Fehlerbericht 1794475](https://bugzil.la/1794475)).

| Veröffentlichungskanal | Geändert in Version | Standardmäßig aktiviert? |
| ---------------------- | ------------------- | ------------------------ |
| Nightly                | 117                 | Ja                       |
| Developer Edition      | 117                 | Nein                     |
| Beta                   | 117                 | Nein                     |
| Release                | 117                 | Nur unter Windows        |

- `dom.webnotifications.requireinteraction.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Option `navigate` für Benachrichtigungen

Die Option `navigate` des Konstruktors [`Notification()`](/de/docs/Web/API/Notification/Notification) und der Methode [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification) nimmt eine URL entgegen, die geöffnet wird, wenn Benutzer auf die Benachrichtigung klicken. Damit benötigen Sie keinen Click-Handler mehr, nur um eine Seite zu öffnen. Die neue schreibgeschützte Eigenschaft [`Notification.navigate`](/de/docs/Web/API/Notification/navigate) gibt diese URL zurück. Wenn die Option gesetzt ist, werden die Ereignisse [`click`](/de/docs/Web/API/Notification/click_event) und [`notificationclick`](/de/docs/Web/API/ServiceWorkerGlobalScope/notificationclick_event) für diese Benachrichtigung nicht mehr ausgelöst. Jeder Eintrag der Option [`actions`](/de/docs/Web/API/Notification/actions) kann eine eigene `navigate`-URL festlegen. Eine Aktionsschaltfläche ohne eigene URL löst weiterhin `notificationclick` aus, statt die URL der Benachrichtigung zu verwenden.
([Firefox-Fehlerbericht 2066184](https://bugzil.la/2066184)).

| Veröffentlichungskanal | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ---------------------- | ---------------------- | ------------------------ |
| Nightly                | 157                    | Nein                     |
| Developer Edition      | 157                    | Nein                     |
| Beta                   | 157                    | Nein                     |
| Release                | 157                    | Nein                     |

- `dom.webnotifications.navigate.enabled`
  - : Zum Aktivieren auf `true` setzen.

### HTML beim Parsen bereinigen

Methoden, die HTML mithilfe der [HTML Sanitizer API](/de/docs/Web/API/HTML_Sanitizer_API) bereinigen, etwa [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML), verwerfen unerwünschte Elemente und Attribute jetzt bereits beim Parsen des Markups, statt zunächst alles zu parsen und anschließend zu bereinigen. Das Ergebnis ist dasselbe, abgesehen davon, dass benachbarter Text nun in einem einzigen Textknoten landet, statt auf mehrere verteilt zu werden ([Firefox-Fehlerbericht 2062652](https://bugzil.la/2062652)).

| Veröffentlichungskanal | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ---------------------- | ---------------------- | ------------------------ |
| Nightly                | 157                    | Nein                     |
| Developer Edition      | 157                    | Nein                     |
| Beta                   | 157                    | Nein                     |
| Release                | 157                    | Nein                     |

- `dom.security.sanitizer.while-parsing`
  - : Zum Aktivieren auf `true` setzen.

### Container Timing API

Die Container Timing API meldet, wann die Inhalte eines Container-Elements gezeichnet werden. So können Sie die Renderzeit eines Seitenbereichs statt des gesamten Viewports messen.
([Firefox-Fehlerbericht 1940240](https://bugzil.la/1940240)).

| Veröffentlichungskanal | Geändert in Version | Standardmäßig aktiviert? |
| ---------------------- | ------------------- | ------------------------ |
| Nightly                | 156                 | Nein                     |
| Developer Edition      | 156                 | Nein                     |
| Beta                   | 156                 | Nein                     |
| Release                | 156                 | Nein                     |

- `dom.enable_container_timing`
  - : Zum Aktivieren auf `true` setzen.

### Schlüsselkapselung in Web Crypto

Die [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) unterstützt ML-KEM, einen Algorithmus, mit dem zwei Parteien einen gemeinsamen geheimen Schlüssel vereinbaren können und der auch gegen Angriffe durch Quantencomputer sicher bleiben soll. Eine Partei übergibt den öffentlichen Schlüssel der anderen Partei an die [`SubtleCrypto`](/de/docs/Web/API/SubtleCrypto)-Methoden `encapsulateKey()` oder `encapsulateBits()`. Diese geben den gemeinsamen Schlüssel zusammen mit einem Chiffretext zurück, der an die andere Partei gesendet wird. Die andere Partei übergibt diesen Chiffretext und ihren eigenen privaten Schlüssel an `decapsulateKey()` oder `decapsulateBits()`, um denselben gemeinsamen Schlüssel zu erhalten.

Die Algorithmusnamen `ML-KEM-512`, `ML-KEM-768` und `ML-KEM-1024` werden unterstützt, ebenso die passenden [`usages`](/de/docs/Web/API/CryptoKey/usages) und die neuen Schlüsselformate `raw-public` und `raw-seed` für [`SubtleCrypto.importKey()`](/de/docs/Web/API/SubtleCrypto/importKey) und [`SubtleCrypto.exportKey()`](/de/docs/Web/API/SubtleCrypto/exportKey) ([Firefox-Fehlerbericht 1943614](https://bugzil.la/1943614)).

| Veröffentlichungskanal | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ---------------------- | ---------------------- | ------------------------ |
| Nightly                | 157                    | Ja                       |
| Developer Edition      | 157                    | Nein                     |
| Beta                   | 157                    | Nein                     |
| Release                | 157                    | Nein                     |

- `dom.webcrypto.encapsulation.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Benutzerdefinierte Webformate in der Async Clipboard API

Die [Clipboard API](/de/docs/Web/API/Clipboard_API) unterstützt benutzerdefinierte Zwischenablageformate. Damit können Web-Apps mithilfe der Methoden [`Clipboard.write()`](/de/docs/Web/API/Clipboard/write) beziehungsweise [`Clipboard.read()`](/de/docs/Web/API/Clipboard/read) benutzerdefinierte MIME-Typen mit dem Präfix `"web "` schreiben und lesen.
Dies wird auf Desktop-Systemen ab Firefox 154 und unter Android ab Firefox 156 unterstützt ([Firefox-Fehlerbericht 1956304](https://bugzil.la/1956304) und [Firefox-Fehlerbericht 2048545](https://bugzil.la/2048545)).

| Veröffentlichungskanal | Geändert in Version | Standardmäßig aktiviert? |
| ---------------------- | ------------------- | ------------------------ |
| Nightly                | 154                 | Ja (nur Desktop)         |
| Developer Edition      | 154                 | Nein                     |
| Beta                   | 154                 | Nein                     |
| Release                | 154                 | Nein                     |

- `dom.clipboard.customFormatSupport.enabled`
  - : Zum Aktivieren auf `true` setzen.

## Sicherheit und Datenschutz

### Kennzeichnung unsicherer Seiten

Die beiden Einstellungen `security.insecure_connection_text_*` fügen in der Adressleiste neben dem herkömmlichen Schlosssymbol den Texthinweis „Nicht sicher“ hinzu, wenn eine Seite unsicher geladen wird, also über {{Glossary("HTTP", "HTTP")}} statt über {{Glossary("HTTPS", "HTTPS")}}. Die Einstellung `browser.urlbar.trimHttps` entfernt das Präfix `https:` aus URLs in der Adressleiste. Weitere Informationen finden Sie unter [Firefox-Fehlerbericht 1853418](https://bugzil.la/1853418).

| Veröffentlichungskanal | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ---------------------- | ---------------------- | ------------------------ |
| Nightly                | 121                    | Ja                       |
| Developer Edition      | 60                     | Nein                     |
| Beta                   | 60                     | Nein                     |
| Release                | 60                     | Nein                     |

- `security.insecure_connection_text.enabled`
  - : Auf `true` setzen, um den Texthinweis im normalen Browsermodus zu aktivieren.
- `security.insecure_connection_text.pbmode.enabled`
  - : Auf `true` setzen, um den Texthinweis im privaten Browsermodus zu aktivieren.
- `browser.urlbar.trimHttps`
  - : Auf `true` setzen, um das Präfix `https:` aus URLs in der Adressleiste zu entfernen.

### Inhalte für Erwachsene mit `<meta name="rating">` einschränken

Das nicht standardisierte Element [`<meta name="rating">`](/de/docs/Web/HTML/Reference/Elements/meta) kann in eine Webseite aufgenommen werden, um deren Inhalte als eingeschränkt beziehungsweise für Erwachsene zu kennzeichnen. Zum Zeitpunkt der Erstellung dieses Textes gibt es zwei mögliche Werte für `content`: `adult` ([von Google definiert](https://developers.google.com/search/docs/specialty/explicit/guidelines#add-metadata)) und `RTA-5042-1996-1400-1577-RTA` ([von ASACP definiert](https://www.rtalabel.org/?content=howto#top)). Beide haben dieselbe Wirkung; künftig könnten weitere Optionen hinzukommen.

Die folgenden `<meta>`-Elemente sind gleichwertig:

```html
<meta name="rating" content="adult" />
<meta name="rating" content="RTA-5042-1996-1400-1577-RTA" />
```

Browser, die dieses Element erkennen, können daraufhin Maßnahmen ergreifen, um den Zugriff auf die Inhalte einzuschränken. Die Firefox-Implementierung ersetzt die Seite durch den Inhalt von `about:restricted`. Dort wird den Benutzern erklärt, dass sie versuchen, eingeschränkte Inhalte aufzurufen, warum diese nicht angezeigt werden können, und eine Schaltfläche angeboten, mit der sie zur vorherigen Seite zurückkehren können.

Weitere Informationen finden Sie unter [Firefox-Fehlerbericht 1991135](https://bugzil.la/1991135).

| Veröffentlichungskanal | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ---------------------- | ---------------------- | ------------------------ |
| Nightly                | 146                    | Nein                     |
| Developer Edition      | 146                    | Nein                     |
| Beta                   | 146                    | Nein                     |
| Release                | 146                    | Nein                     |

- `security.restrict_to_adults.always`
  - : Auf `true` setzen, um den Zugriff auf Webseiten einzuschränken, die sich durch ein `<meta name="rating">`-Element selbst als Inhalte für Erwachsene kennzeichnen.
- `security.restrict_to_adults.respect_platform`
  - : Auf `true` setzen, um den Zugriff auf Webseiten, die sich durch ein `<meta name="rating">`-Element selbst als Inhalte für Erwachsene kennzeichnen, nur dann einzuschränken, wenn auf dem zugrunde liegenden Betriebssystem entsprechende Jugendschutzeinstellungen festgelegt sind (beispielsweise wenn die macOS-Einstellungen _Inhalte & Datenschutz_ explizite Webinhalte einschränken).

### Permissions Policy / Feature Policy

Mit der [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) können Webentwickler das Verhalten bestimmter Funktionen und APIs im Browser gezielt aktivieren, deaktivieren und ändern. Sie ähnelt CSP, steuert jedoch Funktionen statt des Sicherheitsverhaltens.
In Firefox ist sie als **Feature Policy** implementiert, dem Namen aus einer früheren Version der Spezifikation.

Beachten Sie, dass unterstützte Richtlinien über das Attribut [`allow`](/de/docs/Web/HTML/Reference/Elements/iframe#allow) von `<iframe>`-Elementen festgelegt werden können, auch wenn die Benutzereinstellung nicht gesetzt ist.

| Veröffentlichungskanal | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ---------------------- | ---------------------- | ------------------------ |
| Nightly                | 65                     | Nein                     |
| Developer Edition      | 65                     | Nein                     |
| Beta                   | 65                     | Nein                     |
| Release                | 65                     | Nein                     |

- `dom.security.featurePolicy.header.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Privacy Preserving Attribution API (PPA)

Die [PPA API](https://support.mozilla.org/en-US/kb/privacy-preserving-attribution) bietet eine Alternative zum Tracking von Benutzern bei der Zuordnung von Werbewirkung. Dazu dient das neue Objekt `navigator.privateAttribution` mit den Methoden `saveImpression()` und `measureConversion()`. Weitere Informationen zu PPA finden Sie in der [ursprünglichen Erläuterung](https://github.com/mozilla/explainers/tree/main/archive/ppa-experiment) und dem [Spezifikationsvorschlag](https://w3c.github.io/ppa/). Dieses Experiment kann für Websites über einen [Origin Trial](https://wiki.mozilla.org/Origin_Trials) oder im Browser durch Setzen der Einstellung auf `1` aktiviert werden ([Firefox-Fehlerbericht 1900929](https://bugzil.la/1900929)).

| Veröffentlichungskanal | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ---------------------- | ---------------------- | ------------------------ |
| Nightly                | 128                    | Nein                     |
| Developer Edition      | 128                    | Nein                     |
| Beta                   | 128                    | Nein                     |
| Release                | 128                    | Nein                     |

- `dom.origin-trials.private-attribution.state`
  - : Zum Aktivieren auf `true` setzen.

## HTTP

### Integritätsrichtlinie für Stylesheet-Ressourcen

Die HTTP-Header {{httpheader("Integrity-Policy")}} und {{httpheader("Integrity-Policy-Report-Only")}} werden jetzt für Style-Ressourcen unterstützt. Damit können Websites [Subresource-Integrity-Garantien](/de/docs/Web/Security/Defenses/Subresource_Integrity) für Styles entweder erzwingen oder lediglich Verstöße gegen die Richtlinie melden.
Beachten Sie, dass Firefox Reporting-Endpunkte ignoriert und Verstöße in der Entwicklerkonsole protokolliert.
Wenn `Integrity-Policy` verwendet wird, blockiert der Browser das Laden von Styles, die in einem {{HTMLElement("link")}}-Element mit [`rel="stylesheet"`](/de/docs/Web/HTML/Reference/Attributes/rel#stylesheet) referenziert werden, sofern das Attribut [`integrity`](/de/docs/Web/HTML/Reference/Elements/script#integrity) fehlt oder dessen Integritäts-Hash nicht mit der Ressource auf dem Server übereinstimmt.
([Firefox-Fehlerbericht 1976656](https://bugzil.la/1976656)).

| Veröffentlichungskanal | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ---------------------- | ---------------------- | ------------------------ |
| Nightly                | 142                    | Nein                     |
| Developer Edition      | 142                    | Nein                     |
| Beta                   | 142                    | Nein                     |
| Release                | 142                    | Nein                     |

- `security.integrity_policy.stylesheet.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Idempotency-Key

Mit dem HTTP-Request-Header {{httpheader("Idempotency-Key")}} kann clientseitiger Website-Code {{HTTPMethod("POST")}}- oder {{HTTPMethod("PATCH")}}-Anfragen {{Glossary("idempotent", "idempotent")}} machen, wenn der Server dies unterstützt.
Laut Spezifikation sollte der Server dokumentieren und bekannt geben, welche Endpunkte diesen Header benötigen, welches Format der Schlüssel hat und welche Fehlerantworten zu erwarten sind.

Firefox fügt den Header _automatisch_ mit einem eindeutigen Schlüssel für jede neue `POST`-Anfrage hinzu, sofern ihn der clientseitige Code der Seite nicht bereits hinzugefügt hat.
Dadurch wird der clientseitige Code für die Zusammenarbeit mit Servern vereinfacht, die diese Funktion unterstützen.

([Firefox-Fehlerbericht 1830022](https://bugzil.la/1830022)).

| Veröffentlichungskanal | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ---------------------- | ---------------------- | ------------------------ |
| Nightly                | 135                    | Nein                     |
| Developer Edition      | 135                    | Nein                     |
| Beta                   | 135                    | Nein                     |
| Release                | 135                    | Nein                     |

- `network.http.idempotencyKey.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Accept-Header mit dem MIME-Typ image/jxl

Der HTTP-Header [`Accept`](/de/docs/Web/HTTP/Reference/Headers/Accept) kann für [Standardanfragen und Bildanfragen](/de/docs/Web/HTTP/Guides/Content_negotiation/List_of_default_Accept_values) über eine Einstellung so konfiguriert werden, dass er die Unterstützung für den MIME-Typ `image/jxl` angibt.

| Veröffentlichungskanal | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ---------------------- | ---------------------- | ------------------------ |
| Nightly                | 128                    | Nein                     |
| Developer Edition      | 128                    | Nein                     |
| Beta                   | 128                    | Nein                     |
| Release                | 128                    | Nein                     |

- `image.jxl.enabled`
  - : Zum Aktivieren auf `true` setzen.

### SameSite=Lax als Standardwert

[`SameSite`-Cookies](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) haben standardmäßig den Wert `Lax`.
Mit dieser Einstellung werden Cookies nur gesendet, wenn Benutzer zur Ursprungswebsite navigieren, nicht jedoch bei websiteübergreifenden Unteranfragen, mit denen beispielsweise Bilder oder Frames in eine Drittanbieterwebsite geladen werden.
Weitere Informationen finden Sie unter [Firefox-Fehlerbericht 1617609](https://bugzil.la/1617609).

| Veröffentlichungskanal | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ---------------------- | ---------------------- | ------------------------ |
| Nightly                | 69                     | Nein                     |
| Developer Edition      | 69                     | Nein                     |
| Beta                   | 69                     | Nein                     |
| Release                | 69                     | Nein                     |

- `network.cookie.sameSite.laxByDefault`
  - : Zum Aktivieren auf `true` setzen.

### Platzhalter in Access-Control-Allow-Headers schließt Authorization nicht ein

[`Access-Control-Allow-Headers`](/de/docs/Web/HTTP/Reference/Headers/Access-Control-Allow-Headers) ist ein Antwort-Header auf eine {{Glossary("Preflight_request", "CORS-Preflight-Anfrage")}}, der angibt, welche Request-Header in der endgültigen Anfrage enthalten sein dürfen.
Die Antwortdirektive kann einen Platzhalter (`*`) enthalten. Dieser bedeutet, dass die endgültige Anfrage alle Header außer dem Header `Authorization` enthalten darf.

Standardmäßig nimmt Firefox den Header `Authorization` nach einer Antwort mit `Access-Control-Allow-Headers: *` in die endgültige Anfrage auf.
Setzen Sie die Einstellung auf `false`, damit Firefox den Header `Authorization` nicht aufnimmt.
Weitere Informationen finden Sie unter [Firefox-Fehlerbericht 1687364](https://bugzil.la/1687364).

| Veröffentlichungskanal | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ---------------------- | ---------------------- | ------------------------ |
| Nightly                | 115                    | Ja                       |
| Developer Edition      | 115                    | Ja                       |
| Beta                   | 115                    | Ja                       |
| Release                | 115                    | Ja                       |

- `network.cors_preflight.authorization_covered_by_wildcard`
  - : Zum Aktivieren auf `true` setzen.

## Entwicklertools

Die Entwicklertools von Mozilla werden ständig weiterentwickelt. Wir erproben neue Ideen, fügen Funktionen hinzu und testen sie in den Kanälen Nightly und Developer Edition, bevor sie in Beta und Release übernommen werden. Im Folgenden sind die derzeitigen experimentellen Funktionen der Entwicklertools aufgeführt.

**In diesem Veröffentlichungszyklus gibt es keine experimentellen Funktionen.**

## Siehe auch

- [Versionshinweise für Firefox-Entwickler](/de/docs/Mozilla/Firefox/Releases)
- [Firefox Nightly](https://www.firefox.com/en-US/channel/desktop/)
- [Firefox Developer Edition](https://www.firefox.com/en-US/channel/desktop/developer/)
