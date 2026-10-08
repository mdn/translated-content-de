---
title: Experimentelle Funktionen in Firefox
short-title: Experimentelle Funktionen
slug: Mozilla/Firefox/Experimental_features
l10n:
  sourceCommit: 7b642841e72ef94e8723f26892000383513b550d
---

Diese Seite listet experimentelle und teilweise implementierte Funktionen von Firefox auf, darunter sich entwickelnde oder vorgeschlagene Standards der Webplattform.
Jeder Eintrag enthält Informationen darüber, in welchen Versionen eine Funktion enthalten ist (Nightly, Beta, Developer Edition oder Release), ob sie standardmäßig aktiviert ist und wie die **Einstellung** heißt, mit der Sie die Funktion aktivieren oder konfigurieren können.
Die Beschreibung jeder Funktion enthält außerdem Links zu den relevanten [Bugzilla-Fehlermeldungen](https://bugzilla.mozilla.org), die sich mit der Implementierung oder Aktivierung der Funktion befassen.
Diese Informationen ermöglichen es Ihnen, experimentelle Funktionen auszuprobieren und Feedback zu geben, bevor sie offiziell veröffentlicht werden.

Im Entwicklungszyklus erscheinen neue Funktionen normalerweise zuerst in [Nightly](https://www.firefox.com/en-US/channel/desktop/#nightly), wo sie für frühes Feedback und Tests häufig standardmäßig aktiviert sind.
Wenn keine größeren Probleme auftreten, werden sie in die Vorabversionen [Beta](https://www.firefox.com/en-US/channel/desktop/#beta) und [Developer Edition](https://www.firefox.com/en-US/channel/desktop/developer/) aufgenommen. Schließlich werden freigegebene Funktionen über den Kanal der [stabilen Release-Version](https://www.firefox.com/en-US/) bereitgestellt.
Sobald eine Funktion in einer Release-Version standardmäßig aktiviert ist, gilt sie nicht mehr als experimentell und wird von dieser Seite entfernt.

Um diese Funktionen zu aktivieren, geben Sie `about:config` in die Firefox-Adressleiste ein, suchen Sie nach der zugehörigen **Einstellung** und ändern Sie ihren Wert. Meist handelt es sich dabei um einen Wechsel zwischen `true` und `false`.
Je nach Funktion müssen Sie den Browser möglicherweise neu starten, damit die Änderung wirksam wird.
Weitere Informationen zum Verwalten von Einstellungen in Firefox finden Sie im Hilfeartikel zum [Firefox-Konfigurationseditor](https://support.mozilla.org/en-US/kb/about-config-editor-firefox).

## HTML

### Layout für input type="search"

Das Layout für `input type="search"` wurde aktualisiert. Dadurch erscheint in einem Suchfeld ein Symbol zum Leeren, sobald jemand mit der Eingabe beginnt. Das entspricht dem Verhalten anderer Browser. (Weitere Einzelheiten finden Sie unter [Firefox-Bug 558594](https://bugzil.la/558594).)

| Veröffentlichungskanal | Ab Version | Standardmäßig aktiviert? |
| ---------------------- | ---------- | ------------------------ |
| Nightly                | 81         | Nein                     |
| Developer Edition      | 81         | Nein                     |
| Beta                   | 81         | Nein                     |
| Release                | 81         | Nein                     |

- `layout.forms.input-type-search.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Passwortanzeige umschalten

HTML-Eingabeelemente für Passwörter ([`<input type="password">`](/de/docs/Web/HTML/Reference/Elements/input/password)) enthalten ein Augensymbol, mit dem sich der Passworttext anzeigen oder verbergen lässt ([Firefox-Bug 502258](https://bugzil.la/502258)).

| Veröffentlichungskanal | Ab Version | Standardmäßig aktiviert? |
| ---------------------- | ---------- | ------------------------ |
| Nightly                | 96         | Nein                     |
| Developer Edition      | 96         | Nein                     |
| Beta                   | 96         | Nein                     |
| Release                | 96         | Nein                     |

- `layout.forms.reveal-password-button.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Zeitauswahl in `datetime-local`- und `time`-Eingabeelementen

Die HTML-Elemente [`<input type="datetime-local">`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local) und [`<input type="time">`](/de/docs/Web/HTML/Reference/Elements/input/time) unterstützen eine Zeitauswahl ([Firefox-Bug 1726108](https://bugzil.la/1726108)).

| Veröffentlichungskanal | Ab Version | Standardmäßig aktiviert? |
| ---------------------- | ---------- | ------------------------ |
| Nightly                | 144        | Nein                     |
| Developer Edition      | 144        | Nein                     |
| Beta                   | 144        | Nein                     |
| Release                | 144        | Nein                     |

- `dom.forms.datetime.timepicker`
  - : Zum Aktivieren auf `true` setzen.

### `alpha`- und `colorspace`-Attribute in `color`-Eingabeelementen

Das HTML-Element [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color) unterstützt die Attribute [`alpha`](/de/docs/Web/HTML/Reference/Elements/input/color#alpha) und [`colorspace`](/de/docs/Web/HTML/Reference/Elements/input/color#colorspace) ([Firefox-Bug 1919718](https://bugzil.la/1919718)).

| Veröffentlichungskanal | Ab Version | Standardmäßig aktiviert? |
| ---------------------- | ---------- | ------------------------ |
| Nightly                | 149        | Ja                       |
| Developer Edition      | -          | -                        |
| Beta                   | -          | -                        |
| Release                | -          | -                        |

- `dom.forms.html_color_picker.enabled`
  - : Zum Aktivieren auf `true` setzen.

### `headingoffset`- und `headingreset`-Attribute

Das globale Attribut [`headingoffset`](/de/docs/Web/HTML/Reference/Global_attributes/headingoffset) erhöht die berechnete Überschriftenebene der [Überschriftenelemente](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) innerhalb des Elements, für das es gesetzt ist. So kann eine Komponente unabhängig von ihrer Position auf einer Seite dieselbe Überschriften-Auszeichnung verwenden. Das Attribut [`headingreset`](/de/docs/Web/HTML/Reference/Global_attributes/headingreset) verhindert, dass sich die Offsets übergeordneter Elemente auf die Überschriften innerhalb des Elements auswirken, für das es gesetzt ist ([Firefox-Bug 1974383](https://bugzil.la/1974383)).

| Veröffentlichungskanal | Ab Version | Standardmäßig aktiviert? |
| ---------------------- | ---------- | ------------------------ |
| Nightly                | 153        | Nein                     |
| Developer Edition      | 153        | Nein                     |
| Beta                   | 153        | Nein                     |
| Release                | 153        | Nein                     |

- `dom.headingoffset.enabled`
  - : Zum Aktivieren auf `true` setzen.

## CSS

### `circle()` und `ellipse()` erlauben die Schlüsselwörter `farthest-corner` und `closest-corner`

Die Schlüsselwörter `farthest-corner` und `closest-corner` können jetzt verwendet werden, um die Radien der einfachen CSS-Formen [`ellipse()`](/de/docs/Web/CSS/Reference/Values/basic-shape/ellipse) und [`circle()`](/de/docs/Web/CSS/Reference/Values/basic-shape/circle) festzulegen.
(Weitere Einzelheiten finden Sie unter [Firefox-Bug 2037673](https://bugzil.la/2037673).)

| Veröffentlichungskanal | Ab Version | Standardmäßig aktiviert? |
| ---------------------- | ---------- | ------------------------ |
| Nightly                | 153        | Ja                       |
| Developer Edition      | 153        | Nein                     |
| Beta                   | 153        | Nein                     |
| Release                | 153        | Nein                     |

- `layout.css.ellipse-corners.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Hexadezimalfelder zur Darstellung unerwarteter Steuerzeichen

Diese Funktion stellt Steuerzeichen (Unicode-Kategorie Cc) außer _Tabulator_ (`U+0009`), _Zeilenvorschub_ (`U+000A`), _Seitenvorschub_ (`U+000C`) und _Wagenrücklauf_ (`U+000D`) als Hexadezimalfeld dar, wenn sie an einer Stelle auftreten, an der sie nicht erwartet werden. (Weitere Einzelheiten finden Sie unter [Firefox-Bug 1099557](https://bugzil.la/1099557).)

| Veröffentlichungskanal | Ab Version | Standardmäßig aktiviert? |
| ---------------------- | ---------- | ------------------------ |
| Nightly                | 43         | Ja                       |
| Developer Edition      | 43         | Nein                     |
| Beta                   | 43         | Nein                     |
| Release                | 43         | Nein                     |

- `layout.css.control-characters.visible`
  - : Zum Aktivieren auf `true` setzen.

### Eigenschaft initial-letter

Die CSS-Eigenschaft {{cssxref("initial-letter")}} ist Teil der Spezifikation [CSS Inline Layout](https://drafts.csswg.org/css-inline/) und ermöglicht es Ihnen festzulegen, wie hängende, hochgestellte und abgesenkte Initialen dargestellt werden. (Weitere Einzelheiten finden Sie unter [Firefox-Bug 1223880](https://bugzil.la/1223880).)

| Veröffentlichungskanal | Ab Version | Standardmäßig aktiviert? |
| ---------------------- | ---------- | ------------------------ |
| Nightly                | 50         | Nein                     |
| Developer Edition      | 50         | Nein                     |
| Beta                   | 50         | Nein                     |
| Release                | 50         | Nein                     |

- `layout.css.initial-letter.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Funktion fit-content()

Die Funktion [`fit-content()`](/de/docs/Web/CSS/Reference/Values/fit-content_function) kann für {{cssxref("width")}} und andere Größeneigenschaften verwendet werden. Für die Größenbestimmung von Tracks im CSS Grid Layout wird diese Funktion bereits umfassend unterstützt. (Weitere Einzelheiten finden Sie unter [Firefox-Bug 1312588](https://bugzil.la/1312588).)

| Veröffentlichungskanal | Ab Version | Standardmäßig aktiviert? |
| ---------------------- | ---------- | ------------------------ |
| Nightly                | 91         | Nein                     |
| Developer Edition      | 91         | Nein                     |
| Beta                   | 91         | Nein                     |
| Release                | 91         | Nein                     |

- `layout.css.fit-content-function.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Scrollgesteuerte Animationen

Eine [scrollgesteuerte Animation](/de/docs/Web/CSS/Guides/Scroll-driven_animations), früher als „scrollverknüpfte Animation“ bezeichnet, hängt von der Scrollposition einer Bildlaufleiste statt von der Zeit oder einer anderen Größe ab.
Mit den Eigenschaften {{cssxref('scroll-timeline-name')}} und {{cssxref('scroll-timeline-axis')}} sowie der Kurzschreibweise {{cssxref('scroll-timeline')}} können Sie festlegen, dass eine bestimmte Bildlaufleiste in einem bestimmten benannten Container als Quelle für eine scrollgesteuerte Animation dient.
Anschließend lässt sich die Scroll-Timeline einer [Animation](/de/docs/Web/CSS/Guides/Animations) zuordnen, indem Sie die Eigenschaft {{cssxref('animation-timeline')}} auf den mit `scroll-timeline-name` definierten Namen setzen.

Bei Verwendung der Kurzschreibweise {{cssxref('scroll-timeline')}} muss zuerst der Wert für {{cssxref('scroll-timeline-name')}} und danach der Wert für {{cssxref('scroll-timeline-axis')}} stehen.
Sowohl die einzelnen Eigenschaften als auch die Kurzschreibweise sind über die Einstellung verfügbar.
Alternativ können Sie mit {{cssxref('animation-timeline')}} die funktionale Notation {{cssxref("animation-timeline/scroll")}} verwenden, um festzulegen, dass die Scrollachse eines übergeordneten Elements für die Timeline verwendet wird.

Weitere Informationen finden Sie unter [Firefox-Bug 1807685](https://bugzil.la/1807685), [Firefox-Bug 1804573](https://bugzil.la/1804573), [Firefox-Bug 1809005](https://bugzil.la/1809005), [Firefox-Bug 1676791](https://bugzil.la/1676791), [Firefox-Bug 1754897](https://bugzil.la/1754897), [Firefox-Bug 1817303](https://bugzil.la/1817303) und [Firefox-Bug 1737918](https://bugzil.la/1737918).

Die Eigenschaften {{cssxref('animation-range-start')}} und {{cssxref('animation-range-end')}} sowie die Kurzschreibweise {{cssxref('animation-range')}} werden noch nicht unterstützt. Weitere Informationen finden Sie unter [Firefox-Bug 1676779](https://bugzil.la/1676779).

| Veröffentlichungskanal | Ab Version | Standardmäßig aktiviert? |
| ---------------------- | ---------- | ------------------------ |
| Nightly                | 136        | Ja                       |
| Developer Edition      | 110        | Nein                     |
| Beta                   | 110        | Nein                     |
| Release                | 110        | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Medienmerkmal prefers-reduced-transparency

Mit dem CSS-Medienmerkmal {{cssxref("@media/prefers-reduced-transparency")}} können Sie erkennen, ob ein Benutzer auf seinem Gerät eine Einstellung aktiviert hat, die transparente oder durchscheinende Ebeneneffekte minimiert.
Weitere Einzelheiten finden Sie unter [Firefox-Bug 1736914](https://bugzil.la/1736914).

| Veröffentlichungskanal | Ab Version | Standardmäßig aktiviert? |
| ---------------------- | ---------- | ------------------------ |
| Nightly                | 113        | Nein                     |
| Developer Edition      | 113        | Nein                     |
| Beta                   | 113        | Nein                     |
| Release                | 113        | Nein                     |

- `layout.css.prefers-reduced-transparency.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Medienmerkmal inverted-colors

Mit dem CSS-Medienmerkmal {{cssxref("@media/inverted-colors")}} können Sie erkennen, ob ein User Agent oder das zugrunde liegende Betriebssystem Farben invertiert.
Weitere Einzelheiten finden Sie unter [Firefox-Bug 1794628](https://bugzil.la/1794628).

| Veröffentlichungskanal | Ab Version | Standardmäßig aktiviert? |
| ---------------------- | ---------- | ------------------------ |
| Nightly                | 114        | Nein                     |
| Developer Edition      | 114        | Nein                     |
| Beta                   | 114        | Nein                     |
| Release                | 114        | Nein                     |

- `layout.css.inverted-colors.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Eigenschaft für benannte View-Progress-Timelines

Mit der CSS-Eigenschaft {{cssxref("view-timeline-name")}} können Sie einem bestimmten Element einen Namen geben und damit festlegen, dass sein übergeordnetes Scrollelement die Quelle einer View-Progress-Timeline ist.
Der Name kann anschließend `animation-timeline` zugewiesen werden. Dadurch wird das zugehörige Element animiert, während es sich durch den sichtbaren Bereich seines übergeordneten Scrollelements bewegt.
Weitere Einzelheiten finden Sie unter [Firefox-Bug 1737920](https://bugzil.la/1737920).

| Veröffentlichungskanal | Ab Version | Standardmäßig aktiviert? |
| ---------------------- | ---------- | ------------------------ |
| Nightly                | 136        | Ja                       |
| Developer Edition      | 114        | Nein                     |
| Beta                   | 114        | Nein                     |
| Release                | 114        | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Funktion für anonyme View-Progress-Timelines

Mit der CSS-Funktion {{cssxref("animation-timeline/view")}} können Sie festlegen, dass `animation-timeline` für ein Element eine View-Progress-Timeline ist. Dadurch wird das Element animiert, während es sich durch den sichtbaren Bereich seines übergeordneten Scrollelements bewegt.
Die Funktion definiert die Achse des übergeordneten Elements, das die Timeline bereitstellt, sowie den Abstand innerhalb des sichtbaren Bereichs, bei dem die Animation beginnt.
Weitere Einzelheiten finden Sie unter [Firefox-Bug 1808410](https://bugzil.la/1808410).

| Veröffentlichungskanal | Ab Version | Standardmäßig aktiviert? |
| ---------------------- | ---------- | ------------------------ |
| Nightly                | 136        | Ja                       |
| Developer Edition      | 114        | Nein                     |
| Beta                   | 114        | Nein                     |
| Release                | 114        | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Transform-Eigenschaften mit Herstellerpräfix

Die mit `-moz-` präfigierten Eigenschaften für [CSS-Transformationen](/de/docs/Web/CSS/Guides/Transforms) können deaktiviert werden, indem die Einstellung `layout.css.prefixes.transforms` auf `false` gesetzt wird. Diese Eigenschaften sollen deaktiviert werden, sobald die standardisierten CSS-Zoom-Eigenschaften umfassend unterstützt werden ([Firefox-Bug 1886134](https://bugzil.la/1886134), [Firefox-Bug 1855763](https://bugzil.la/1855763)).

Die Einstellung deaktiviert konkret die folgenden präfigierten Eigenschaften:

- `-moz-backface-visibility`
- `-moz-perspective`
- `-moz-perspective-origin`
- `-moz-transform`
- `-moz-transform-origin`
- `-moz-transform-style`

| Veröffentlichungskanal | Ab Version | Standardmäßig aktiviert? |
| ---------------------- | ---------- | ------------------------ |
| Nightly                | 120        | Ja                       |
| Developer Edition      | 120        | Ja                       |
| Beta                   | 120        | Ja                       |
| Release                | 120        | Ja                       |

- `layout.css.prefixes.transforms`
  - : Zum Aktivieren auf `true` setzen.

### Symmetrisches `letter-spacing`

Die CSS-Eigenschaft {{cssxref("letter-spacing")}} verteilt den angegebenen Zeichenabstand jetzt gleichmäßig auf beide Seiten jedes Zeichens. Dies unterscheidet sich vom bisherigen Verhalten, bei dem der Abstand hauptsächlich auf einer Seite hinzugefügt wird. Dieser Ansatz kann die Abstände im Text verbessern, insbesondere bei Text mit gemischten Schreibrichtungen.
([Firefox-Bug 1891446](https://bugzil.la/1891446)).

| Veröffentlichungskanal | Ab Version | Standardmäßig aktiviert? |
| ---------------------- | ---------- | ------------------------ |
| Nightly                | 128        | Ja                       |
| Developer Edition      | 128        | Ja                       |
| Beta                   | 127        | Nein                     |
| Release                | 127        | Nein                     |

- `layout.css.letter-spacing.model`
  - : Zum Aktivieren auf `true` setzen.

### Pseudoelemente nach elementbasierten Pseudoelementen erlauben

Die Arbeit daran, [Pseudoelemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) wie {{cssxref("::first-letter")}} und {{cssxref("::before")}} an [elementbasierte Pseudoelemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements#element-backed_pseudo-elements) wie {{cssxref("::details-content")}} und {{cssxref("::file-selector-button")}} anzuhängen, hat begonnen.

Damit können Sie beispielsweise den ersten Buchstaben des Elements {{htmlElement("details")}} mit dem CSS-Selektor `::details-content::first-letter` gestalten oder mit dem CSS-Selektor `::file-selector-button::before` Inhalt vor einem {{HTMLElement("input") }} mit [`type="file"`](/de/docs/Web/HTML/Reference/Elements/input/file) hinzufügen.

Derzeit lässt sich nur die Unterstützung für `::details-content::first-letter` mit `@supports(::details-content::first-letter)` prüfen.
Das Pseudoelement `::file-selector-button` ist noch nicht als elementbasiertes Pseudoelement gekennzeichnet, sodass es hierfür noch keine Prüfmöglichkeit gibt.
([Firefox-Bug 1953557](https://bugzil.la/1953557), [Firefox-Bug 1941406](https://bugzil.la/1941406)).

| Veröffentlichungskanal | Ab Version | Standardmäßig aktiviert? |
| ---------------------- | ---------- | ------------------------ |
| Nightly                | 138        | Nein                     |
| Developer Edition      | 138        | Nein                     |
| Beta                   | 138        | Nein                     |
| Release                | 138        | Nein                     |

### Pseudoklassen `:heading` und `:heading()`

Mit der Pseudoklasse {{cssxref(":heading")}} können Sie alle [Überschriftenelemente](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) (`<h1>`–`<h6>`) gleichzeitig gestalten, statt sie einzeln anzusprechen. Mit der funktionalen Pseudoklasse {{cssxref(":heading()")}} können Sie Überschriftenelemente gestalten, deren Überschriftenebenen einer durch Kommas getrennten Liste von Ganzzahlen entsprechen ([Firefox-Bug 1974386](https://bugzil.la/1974386) und [Firefox-Bug 1984310](https://bugzil.la/1984310)).

| Veröffentlichungskanal | Ab Version | Standardmäßig aktiviert? |
| ---------------------- | ---------- | ------------------------ |
| Nightly                | 142        | Nein                     |
| Developer Edition      | 142        | Nein                     |
| Beta                   | 142        | Nein                     |
| Release                | 142        | Nein                     |

- `layout.css.heading-selector.enabled`
  - : Zum Aktivieren auf `true` setzen.

### At-Regel `@custom-media`

Die CSS-At-Regel {{cssxref("@custom-media")}} definiert Aliasse für lange oder komplexe Media Queries. Statt dieselbe fest codierte `<media-query-list>` in mehreren `@media`-At-Regeln zu wiederholen, können Sie sie einmal in einer `@custom-media`-At-Regel definieren und bei Bedarf im gesamten Stylesheet darauf verweisen ([Firefox-Bug 1744292](https://bugzil.la/1744292)).

| Veröffentlichungskanal | Ab Version | Standardmäßig aktiviert? |
| ---------------------- | ---------- | ------------------------ |
| Nightly                | 148        | Nein                     |
| Developer Edition      | 148        | Nein                     |
| Beta                   | 148        | Nein                     |
| Release                | 148        | Nein                     |

- `layout.css.custom-media.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Wert `base-select` für die CSS-Eigenschaft `appearance`

Mit dem Wert [`base-select`](/de/docs/Web/CSS/Reference/Properties/appearance#base-select) für die CSS-Eigenschaft {{cssxref("appearance")}} können Sie das Element {{htmlelement("select")}} und das Pseudoelement {{cssxref("::picker()", "::picker(select)")}} vollständig gestalten. Der Wert ist nur für diese beiden relevant. Derzeit wird nur die Gestaltung des Elements `<select>` unterstützt. Die Gestaltung des Pseudoelements `::picker(select)` wird in zukünftigen Versionen hinzugefügt. Diese Funktion ist Teil der Arbeit an [anpassbaren Select-Elementen](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select). Für ihre Verwendung müssen zwei Einstellungen aktiviert werden ([Firefox-Bug 1974787](https://bugzil.la/1974787)).

| Veröffentlichungskanal | Ab Version | Standardmäßig aktiviert? |
| ---------------------- | ---------- | ------------------------ |
| Nightly                | 149        | Nein                     |
| Developer Edition      | 149        | Nein                     |
| Beta                   | 149        | Nein                     |
| Release                | 149        | Nein                     |

- `dom.select.customizable_select.enabled`
  - : Zum Aktivieren auf `true` setzen.
- `layout.css.appearance-base.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Absolut positionierte Elemente in mehrspaltigen Containern und beim Drucken

Absolut positionierte Elemente innerhalb [mehrspaltiger Container](/de/docs/Web/CSS/Guides/Multicol_layout) und beim Drucken werden jetzt korrekt positioniert und aufgeteilt.
Dies verbessert die Interoperabilität mit anderen Browsern und verhindert Layoutprobleme wie überlappenden Text oder den Verlust von Inhalten.
([Firefox-Bug 2018797](https://bugzil.la/2018797)).

| Veröffentlichungskanal | Ab Version | Standardmäßig aktiviert? |
| ---------------------- | ---------- | ------------------------ |
| Nightly                | 150        | Ja                       |
| Developer Edition      | 150        | Nein                     |
| Beta                   | 150        | Nein                     |
| Release                | 150        | Nein                     |

- `layout.abspos.fragmentainer-aware-positioning.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Bereichssyntax für `@container style()`-Abfragen

Abfragen mit [`style()`](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries) in der CSS-At-Regel [`@container`](/de/docs/Web/CSS/Reference/At-rules/@container) unterstützen jetzt die _Bereichssyntax_. Damit können Sie prüfen, ob ein Container über eine gültige benutzerdefinierte CSS-Eigenschaft verfügt, deren Wert mit Vergleichsoperatoren wie `>`, `<`, `>=` und `<=` vergleichen und entsprechend Stile auf seine Kindelemente anwenden ([Firefox-Bug 2024601](https://bugzil.la/2024601)).

| Veröffentlichungskanal | Ab Version | Standardmäßig aktiviert? |
| ---------------------- | ---------- | ------------------------ |
| Nightly                | 151        | Nein                     |
| Developer Edition      | 151        | Nein                     |
| Beta                   | 151        | Nein                     |
| Release                | 151        | Nein                     |

- `layout.css.attr.enabled`
  - : Zum Aktivieren auf `true` setzen.

### `<timeline-range-name>`-Werte

Die CSS-Eigenschaften {{cssxref("animation-range-start")}} und {{cssxref("animation-range-end")}} sowie die Kurzschreibweise {{cssxref("animation-range")}} unterstützen jetzt Werte vom Typ [`<timeline-range-name>`](/de/docs/Web/CSS/Reference/Values/timeline-range-name). Mit diesen [`<timeline-range-name>`-Werten](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names#timeline_range_names) können Sie genau festlegen, in welchem Abschnitt eine scrollgesteuerte Animation stattfindet ([Firefox-Bug 1804775](https://bugzil.la/1804775)).

| Veröffentlichungskanal | Ab Version | Standardmäßig aktiviert? |
| ---------------------- | ---------- | ------------------------ |
| Nightly                | 151        | Ja                       |
| Developer Edition      | 151        | Nein                     |
| Beta                   | 151        | Nein                     |
| Release                | 151        | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Zum Aktivieren auf `true` setzen.

### `<timeline-range-name>`-Werte in `@keyframes`-Selektoren

Die At-Regel {{cssxref("@keyframes")}} unterstützt jetzt Werte vom Typ [`<timeline-range-name>`](/de/docs/Web/CSS/Reference/Values/timeline-range-name). Mit diesen [Werten](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names#timeline_range_names) können Sie den Abschnitt festlegen, in dem eine scrollgesteuerte Animation stattfindet ([Firefox-Bug 1824875](https://bugzil.la/1824875)).

| Veröffentlichungskanal | Ab Version | Standardmäßig aktiviert? |
| ---------------------- | ---------- | ------------------------ |
| Nightly                | 152        | Ja                       |
| Developer Edition      | 152        | Nein                     |
| Beta                   | 152        | Nein                     |
| Release                | 152        | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Attribute externer Ressourcen aktualisieren

Die CSS-Eigenschaft {{cssxref("link-parameters")}} und die CSS-Funktion {{cssxref("param")}} werden jetzt unterstützt. Damit können Benutzer Attribute externer Ressourcen, beispielsweise von SVGs, aktualisieren, deren Attribute mit der CSS-Funktion {{cssxref("env")}} festgelegt wurden. So kann eine einzige externe Ressource verwendet werden, statt mehrere Varianten zu erstellen, die sich nur in Farben oder anderen Werten unterscheiden ([Firefox-Bug 2046153](https://bugzil.la/2046153)).

| Veröffentlichungskanal | Ab Version | Standardmäßig aktiviert? |
| ---------------------- | ---------- | ------------------------ |
| Nightly                | 154        | Ja                       |
| Developer Edition      | 153        | Nein                     |
| Beta                   | 153        | Nein                     |
| Release                | 153        | Nein                     |

- `layout.css.link-parameters.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Inhalt mit `line-clamp` abschneiden

Die CSS-Eigenschaft {{cssxref("line-clamp")}} funktioniert jetzt ohne das Herstellerpräfix `-webkit-`, unterstützt derzeit allerdings die Werte `no-ellipsis` und `<string>` noch nicht ([Firefox-Bug 2042986](https://bugzil.la/2042986)).

| Veröffentlichungskanal | Ab Version | Standardmäßig aktiviert? |
| ---------------------- | ---------- | ------------------------ |
| Nightly                | 154        | Nein                     |
| Developer Edition      | 154        | Nein                     |
| Beta                   | 154        | Nein                     |
| Release                | 154        | Nein                     |

- `layout.css.line-clamp.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Prozentwerte für `text-decoration-inset`

Die CSS-Eigenschaft {{cssxref("text-decoration-inset")}} unterstützt jetzt Prozentwerte. Der Prozentwert gibt die Größe des Innenabstands als Prozentsatz der Inline-Größe der dekorierten Box oder jedes einzelnen Boxfragments an, abhängig vom Wert von {{cssxref("box-decoration-break")}} ([Firefox-Bug 2044602](https://bugzil.la/2044602)).

| Veröffentlichungskanal | Ab Version | Standardmäßig aktiviert? |
| ---------------------- | ---------- | ------------------------ |
| Nightly                | 154        | Nein                     |
| Developer Edition      | 154        | Nein                     |
| Beta                   | 154        | Nein                     |
| Release                | 154        | Nein                     |

- `layout.css.text-decoration-inset-percentage.enabled`
  - : Zum Aktivieren auf `true` setzen.

### `view-timeline` umfasst `view-timeline-inset`

Die Kurzschreibweise {{cssxref("view-timeline")}} unterstützt jetzt die Eigenschaft {{cssxref("view-timeline-inset")}}. Damit können Sie Werte für den Abstand am Anfang und/oder Ende angeben, um die Position der View-Progress-Timeline anzupassen ([Firefox-Bug 2046602](https://bugzil.la/2046602)).

| Veröffentlichungskanal | Ab Version | Standardmäßig aktiviert? |
| ---------------------- | ---------- | ------------------------ |
| Nightly                | 155        | Ja                       |
| Developer Edition      | 155        | Nein                     |
| Beta                   | 155        | Nein                     |
| Release                | 155        | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Namen für `timeline-scope` sind jetzt standardmäßig global

Der Geltungsbereich benannter Timelines ist jetzt standardmäßig global. Mit der CSS-Eigenschaft {{cssxref("timeline-scope")}} und dem jeweiligen Wert von {{cssxref("scroll-timeline-name")}} oder {{cssxref("view-timeline-name")}} lässt sich der Geltungsbereich auf Elemente und deren Teilbaum begrenzen ([Firefox-Bug 2024012](https://bugzil.la/2024012)).

| Veröffentlichungskanal | Ab Version | Standardmäßig aktiviert? |
| ---------------------- | ---------- | ------------------------ |
| Nightly                | 155        | Ja                       |
| Developer Edition      | 155        | Nein                     |
| Beta                   | 155        | Nein                     |
| Release                | 155        | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Unterstützungsabfragen mit `named-feature()`

Mit der Funktion `named-feature()` in der At-Regel {{cssxref("@supports")}} können Sie prüfen, ob der Browser eine Funktion unterstützt, für die es keine andere erkennbare Syntax gibt, beispielsweise `@supports named-feature(anchor-position-follows-transforms)`.
([Firefox-Bug 2042977](https://bugzil.la/2042977) und [Firefox-Bug 2055354](https://bugzil.la/2055354)).

| Veröffentlichungskanal | Ab Version | Standardmäßig aktiviert? |
| ---------------------- | ---------- | ------------------------ |
| Nightly                | 156        | Nein                     |
| Developer Edition      | 156        | Nein                     |
| Beta                   | 156        | Nein                     |
| Release                | 156        | Nein                     |

- `layout.css.anchor-positioning.follows-transforms.enabled`
  - : Zum Aktivieren auf `true` setzen.

### `corner-shape`-Eigenschaften

Die Kurzschreibweise {{cssxref("corner-shape")}} und die zugehörigen einzelnen Eigenschaften werden jetzt in Nightly unterstützt. Mit diesen Eigenschaften können Sie die Form von Ecken mithilfe eines Schlüsselworts vom Typ {{cssxref("corner-shape-value")}} oder der Funktion {{cssxref("superellipse")}} anpassen.
([Firefox-Bug 2070927](https://bugzil.la/2070927)).

| Veröffentlichungskanal | Ab Version | Standardmäßig aktiviert? |
| ---------------------- | ---------- | ------------------------ |
| Nightly                | 158        | Ja                       |
| Developer Edition      | 157        | Nein                     |
| Beta                   | 157        | Nein                     |
| Release                | 157        | Nein                     |

- `layout.css.corner-shape.enabled`
  - : Zum Aktivieren auf `true` setzen.

## SVG

**In diesem Veröffentlichungszyklus gibt es keine experimentellen Funktionen.**

## MathML

### `href` für andere MathML-Elemente als `<a>` deaktivieren

Wenn diese Funktion aktiviert ist, erzeugt das globale Attribut [`href`](/de/docs/Web/MathML/Reference/Global_attributes/href) auf anderen MathML-Elementen als `<a>` keinen Hyperlink mehr. Damit entspricht Firefox der [MathML-Core-Spezifikation](https://w3c.github.io/mathml-core/#the-a-element), die Hyperlinks nur für das Element `<a>` definiert ([Firefox-Bug 2026848](https://bugzil.la/2026848)).

| Veröffentlichungskanal | Ab Version | Standardmäßig aktiviert? |
| ---------------------- | ---------- | ------------------------ |
| Nightly                | 151        | Ja                       |
| Developer Edition      | 151        | Nein                     |
| Beta                   | 151        | Nein                     |
| Release                | 151        | Nein                     |

- `mathml.href_link_on_non_anchor_element.disabled`
  - : Zum Aktivieren auf `true` setzen.

### Schnittstelle `MathMLAnchorElement` implementieren

Wenn diese Funktion aktiviert ist, wird das MathML-Element [`<a>`](/de/docs/Web/MathML/Reference/Element/a) im DOM korrekt durch die Schnittstelle [`MathMLAnchorElement`](/de/docs/Web/API/MathMLAnchorElement) statt durch die generische Schnittstelle [`MathMLElement`](/de/docs/Web/API/MathMLElement) repräsentiert ([Firefox-Bug 2059312](https://bugzil.la/2059312)).

| Veröffentlichungskanal | Ab Version | Standardmäßig aktiviert? |
| ---------------------- | ---------- | ------------------------ |
| Nightly                | 155        | Ja                       |
| Developer Edition      | 155        | Nein                     |
| Beta                   | 155        | Nein                     |
| Release                | 155        | Nein                     |

- `mathml.a.element.enabled`
  - : Zum Aktivieren auf `true` setzen.

### MathML-Elemente `<a>`

Das MathML-Element `<a>` erstellt einen Hyperlink aus MathML-Inhalten und stellt die Schnittstelle `MathMLAnchorElement` mit denselben URL-Komponenteneigenschaften wie HTML-Elemente vom Typ {{HTMLElement("a")}} bereit.

Diese Version ergänzt die Unterstützung für die IDL-Attribute `rel` und `relList` ([Firefox-Bug 2063819](https://bugzil.la/2063819)).

| Veröffentlichungskanal | Ab Version | Standardmäßig aktiviert? |
| ---------------------- | ---------- | ------------------------ |
| Nightly                | 156        | Ja                       |
| Developer Edition      | 156        | Nein                     |
| Beta                   | 156        | Nein                     |
| Release                | 156        | Nein                     |

- `mathml.a.element.enabled`
  - : Zum Aktivieren auf `true` setzen.

## JavaScript

### TC39-Vorschlag zu Intl.Locale-Informationen

Der [TC39-Vorschlag zu Intl.Locale-Informationen](https://github.com/tc39/proposal-intl-locale-info) wird jetzt unterstützt.
Dies umfasst alle mit „get“ beginnenden Instanzmethoden von `Intl.Locale`: {{jsxref("Intl/Locale/getCalendars", "Intl.Locale.prototype.getCalendars()")}}, {{jsxref("Intl/Locale/getCollations", "Intl.Locale.prototype.getCollations()")}}, {{jsxref("Intl/Locale/getHourCycles", "Intl.Locale.prototype.getHourCycles()")}}, {{jsxref("Intl/Locale/getNumberingSystems", "Intl.Locale.prototype.getNumberingSystems()")}}, {{jsxref("Intl/Locale/getTextInfo", "Intl.Locale.prototype.getTextInfo()")}}, {{jsxref("Intl/Locale/getTimeZones", "Intl.Locale.prototype.getTimeZones()")}} und {{jsxref("Intl/Locale/getWeekInfo", "Intl.Locale.prototype.getWeekInfo()")}}.
([Firefox-Bug 1693576](https://bugzil.la/1693576)).

| Veröffentlichungskanal | Ab Version | Standardmäßig aktiviert? |
| ---------------------- | ---------- | ------------------------ |
| Nightly                | 152        | Nein                     |
| Developer Edition      | —          | —                        |
| Beta                   | —          | —                        |
| Release                | —          | —                        |

- `javascript.options.experimental.intl_locale_info`
  - : Zum Aktivieren in Nightly auf `true` setzen.

### Mehrere Import Maps

Unterstützung für [mehrere Import Maps](/de/docs/Web/HTML/Reference/Elements/script/type/importmap#merging_multiple_import_maps).
Dadurch erhalten Entwickler mehr Flexibilität bei der Strukturierung und beim Laden von JavaScript-Modulen: Sie müssen nicht mehr sämtliche Modulzuordnungen im Voraus kennen und in einer einzigen Import Map deklarieren, bevor Module geladen werden.
([Firefox-Bug 1916277](https://bugzil.la/1916277)).

| Veröffentlichungskanal | Ab Version | Standardmäßig aktiviert? |
| ---------------------- | ---------- | ------------------------ |
| Nightly                | 150        | Nein                     |
| Developer Edition      | 150        | Nein                     |
| Beta                   | 150        | Nein                     |
| Release                | 150        | Nein                     |

- `dom.multiple_import_maps.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Zusicherungen für Puffergrenzen in regulären Ausdrücken

Die [Zusicherungen `\A`, `\z` und `\Z` für Puffergrenzen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Buffer_boundary_assertion) werden jetzt unterstützt.
Mit `\A` und `\z` können Sie den Anfang beziehungsweise das Ende der gesamten Eingabe abgleichen. `\Z` gleicht das Ende der Eingabe ab und ignoriert dabei ein Zeilenabschlusszeichen.
Anders als `^` und `$` werden die Zusicherungen nicht vom Flag [`m`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline) beeinflusst. Sie können nur im [Unicode-fähigen Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) verwendet werden, wenn das Flag `u` oder `v` gesetzt ist.
([Firefox-Bug 2047706](https://bugzil.la/2047706)).

| Veröffentlichungskanal | Ab Version | Standardmäßig aktiviert? |
| ---------------------- | ---------- | ------------------------ |
| Nightly                | 155        | Nein                     |
| Developer Edition      | —          | —                        |
| Beta                   | —          | —                        |
| Release                | —          | —                        |

- `javascript.options.experimental.regexp_buffer_boundaries`
  - : Zum Aktivieren in Nightly auf `true` setzen.

### TC39-Vorschlag für `export *` mit Standardexport

Der [TC39-Vorschlag für `export *` mit Standardexport](https://github.com/tc39/proposal-export-star-default) ermöglicht es, mit [`export * from`](/de/docs/Web/JavaScript/Reference/Statements/export#re-exporting_aggregating) den Standardexport eines Moduls zusammen mit seinen benannten Exporten erneut zu exportieren. Ohne diese Änderung überspringt `export * from` den Standardexport eines Moduls.
([Firefox-Bug 2065611](https://bugzil.la/2065611)).

Beachten Sie, dass sich dieser Vorschlag noch in einem sehr frühen Stadium befindet und Änderungen unterliegt.

| Veröffentlichungskanal | Ab Version | Standardmäßig aktiviert? |
| ---------------------- | ---------- | ------------------------ |
| Nightly                | 157        | Nein                     |
| Developer Edition      | 157        | Nein                     |
| Beta                   | 157        | Nein                     |
| Release                | —          | —                        |

- `javascript.options.experimental.export_star_default`
  - : Zum Aktivieren auf `true` setzen.

## APIs

### Absturzberichte

Absturzberichte können jetzt über die [Reporting API](/de/docs/Web/API/Reporting_API) an den Endpunkt `default` gesendet werden.
Beachten Sie, dass Firefox [`CrashReportContext`](/de/docs/Web/API/CrashReportContext) im Berichtstext nicht unterstützt.
([Firefox-Bug 2036160](https://bugzil.la/2036160)).

| Veröffentlichungskanal | Ab Version | Standardmäßig aktiviert? |
| ---------------------- | ---------- | ------------------------ |
| Nightly                | 152        | Ja                       |
| Developer Edition      | 152        | Nein                     |
| Beta                   | 152        | Nein                     |
| Release                | 152        | Nein                     |

- `dom.reporting.crash.enabled`
  - : Zum Aktivieren auf `true` setzen (in Nightly standardmäßig aktiviert).

### Geltungsbereichsgebundene Registries für benutzerdefinierte Elemente

Die Unterstützung für [geltungsbereichsgebundene Registries für benutzerdefinierte Elemente](/de/docs/Web/API/Web_components/Using_custom_elements#scoped_custom_element_registries) wird implementiert.
Mit solchen Registries kann ein Shadow Tree eine unabhängige [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry) erstellen, deren Definitionen nur für den jeweiligen DOM-Teilbaum gelten.
So lassen sich Namenskonflikte vermeiden, wenn mehrere Web Components Elemente mit demselben Namen deklarieren.

Die Implementierung umfasst:

- Die Eigenschaft `customElementRegistry` für [`Document`](/de/docs/Web/API/Document), [`Element`](/de/docs/Web/API/Element) und [`ShadowRoot`](/de/docs/Web/API/ShadowRoot).
  Der [Konstruktor `CustomElementRegistry()`](/de/docs/Web/API/CustomElementRegistry/CustomElementRegistry) erstellt ein neues `CustomElementRegistry`-Objekt für die Verwendung in einem begrenzten Geltungsbereich ([Firefox-Bug 2018900](https://bugzil.la/2018900)).

Ab Version 156:

- [Geltungsbereichsgebundene Registries für benutzerdefinierte Elemente](/de/docs/Web/API/Web_components/Using_custom_elements#scoped_custom_element_registries) werden jetzt unterstützt. Damit kann eine Shadow Root benutzerdefinierte Elemente definieren, ohne dass Konflikte mit Elementen entstehen, die in der globalen Registry definiert sind ([Firefox-Bug 2064333](https://bugzil.la/2064333)).

| Veröffentlichungskanal | Ab Version | Standardmäßig aktiviert? |
| ---------------------- | ---------- | ------------------------ |
| Nightly                | 156        | Ja                       |
| Developer Edition      | 150        | Nein                     |
| Beta                   | 150        | Nein                     |
| Release                | 150        | Nein                     |

- `dom.scoped-custom-element-registries.enabled`
  - : Zum Aktivieren auf `true` setzen.

### CSS Typed Object Model Level 1

Die [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) ist in Nightly implementiert.
Sie vereinfacht die Bearbeitung von CSS-Eigenschaften, indem sie CSS-Werte als typisierte JavaScript-Objekte statt als Zeichenfolgen bereitstellt.
([Firefox-Bug 1278697](https://bugzil.la/1278697)).

| Veröffentlichungskanal | Ab Version | Standardmäßig aktiviert? |
| ---------------------- | ---------- | ------------------------ |
| Nightly                | 154        | Ja                       |
| Developer Edition      | 149        | Nein                     |
| Beta                   | 149        | Nein                     |
| Release                | 149        | Nein                     |

- `layout.css.typed-om.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Spracherkennung auf dem Gerät

Die [Spracherkennung auf dem Gerät](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#on-device_speech_recognition) wird jetzt in Nightly unterstützt, allerdings nur auf Desktop-Geräten. Damit können Sie die Spracherkennung über die [Web Speech API](/de/docs/Web/API/Web_Speech_API) direkt im Browser ausführen, statt einen Cloud-Dienst zu verwenden.
([Firefox-Bug 2069803](https://bugzil.la/2069803)).

| Veröffentlichungskanal | Ab Version | Standardmäßig aktiviert? |
| ---------------------- | ---------- | ------------------------ |
| Nightly                | 158        | Ja                       |
| Developer Edition      | 158        | Nein                     |
| Beta                   | 158        | Nein                     |
| Release                | 158        | Nein                     |

- `media.webspeech.recognition.enable`
  - : Zum Aktivieren auf `true` setzen.

### Streaming von Anfragetexten

Sie können jetzt einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) als Anfragetext festlegen, beispielsweise über den [Konstruktor `Request()`](/de/docs/Web/API/Request/Request) oder die Methode [`Window.fetch()`](/de/docs/Web/API/Window/fetch). Dadurch können Sie Uploads schrittweise streamen, statt warten zu müssen, bis der gesamte Anfragetext verfügbar ist.
([Firefox-Bug 1594633](https://bugzil.la/1594633)).

| Veröffentlichungskanal | Ab Version | Standardmäßig aktiviert? |
| ---------------------- | ---------- | ------------------------ |
| Nightly                | 158        | Ja                       |
| Developer Edition      | 158        | Nein                     |
| Beta                   | 158        | Nein                     |
| Release                | 158        | Nein                     |

- `dom.fetch.streaming_upload`
  - : Zum Aktivieren auf `true` setzen.

### Grafik: Canvas, WebGL und WebGPU

#### WebGL: Erweiterungen im Entwurfsstadium

Wenn diese Einstellung aktiviert ist, können alle derzeit getesteten WebGL-Erweiterungen mit dem Status „Entwurf“ verwendet werden. Derzeit testet Firefox keine WebGL-Erweiterungen.

#### WebGPU API

Die [WebGPU API](/de/docs/Web/API/WebGPU_API) bietet hardwarenahe Unterstützung für Berechnungen und Grafik-Rendering mithilfe des [Grafikprozessors](https://en.wikipedia.org/wiki/Graphics_Processing_Unit) (GPU) des Geräts oder Computers eines Benutzers.
Ab Version 142 ist sie unter Windows in allen Kontexten außer Service Workern aktiviert.
Ab Version 147 ist sie unter macOS auf Apple Silicon in allen Browserkontexten außer Service Workern aktiviert.
Auf anderen Plattformen, beispielsweise Linux und macOS auf Intel-Prozessoren, ist sie in Nightly aktiviert.
Den Fortschritt bei dieser API können Sie unter [Firefox-Bug 1602129](https://bugzil.la/1602129) verfolgen.

| Veröffentlichungskanal | Ab Version | Standardmäßig aktiviert?                                                      |
| ---------------------- | ---------- | ----------------------------------------------------------------------------- |
| Nightly                | 141        | Ja                                                                            |
| Developer Edition      | 141        | Nein (Ja unter Windows und macOS auf Apple Silicon, außer in Service Workern) |
| Beta                   | 141        | Nein (Ja unter Windows und macOS auf Apple Silicon, außer in Service Workern) |
| Release                | 141        | Nein (Ja unter Windows und macOS auf Apple Silicon, außer in Service Workern) |

- `dom.webgpu.enabled`
  - : Zum Aktivieren auf `true` setzen (in Nightly und unter Windows in allen Release-Versionen aktiviert).
- `dom.webgpu.service-workers.enabled`
  - : Zum Aktivieren auf `true` setzen (in Nightly aktiviert).

### WebRTC und Medien

Zu den folgenden experimentellen Funktionen gehören solche aus Medien-APIs wie der [WebRTC API](/de/docs/Web/API/WebRTC_API), der [Web Audio API](/de/docs/Web/API/Web_Audio_API), der [Media Source Extensions API](/de/docs/Web/API/Media_Source_Extensions_API), der [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API) und der [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API).

#### Audio Session API

Die [Audio Session API](/de/docs/Web/API/Audio_Session_API) bietet Webanwendungen eine Möglichkeit zu steuern, wie ihre Audiowiedergabe mit anderen auf einem Gerät wiedergegebenen Audiosignalen zusammenwirkt ([Firefox-Bug 2055710](https://bugzil.la/2055710)).

| Veröffentlichungskanal | Ab Version | Standardmäßig aktiviert? |
| ---------------------- | ---------- | ------------------------ |
| Nightly                | 155        | Ja                       |
| Developer Edition      | 153        | Nein                     |
| Beta                   | 153        | Nein                     |
| Release                | 153        | Nein                     |

- `dom.audio_session.enabled`
  - : Zum Aktivieren auf `true` setzen.

#### HTMLMediaElement-Eigenschaften: audioTracks und videoTracks

Durch Aktivieren dieser Funktion werden die Eigenschaften [`HTMLMediaElement.audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks) und [`HTMLMediaElement.videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks) allen HTML-Medienelementen hinzugefügt. Da Firefox derzeit jedoch keine mehreren Audio- und Videospuren unterstützt, funktionieren die häufigsten Anwendungsfälle dieser Eigenschaften nicht. Deshalb sind beide standardmäßig deaktiviert. Weitere Einzelheiten finden Sie unter [Firefox-Bug 1057233](https://bugzil.la/1057233).

| Veröffentlichungskanal | Ab Version | Standardmäßig aktiviert? |
| ---------------------- | ---------- | ------------------------ |
| Nightly                | 33         | Nein                     |
| Developer Edition      | 33         | Nein                     |
| Beta                   | 33         | Nein                     |
| Release                | 33         | Nein                     |

- `media.track.enabled`
  - : Zum Aktivieren auf `true` setzen.

#### Asynchrones Hinzufügen und Entfernen bei SourceBuffer

Damit werden der Schnittstelle [`SourceBuffer`](/de/docs/Web/API/SourceBuffer) die Promise-basierten Methoden [`appendBufferAsync()`](/de/docs/Web/API/SourceBuffer/appendBufferAsync) und [`removeAsync()`](/de/docs/Web/API/SourceBuffer/removeAsync) zum Hinzufügen und Entfernen von Mediendaten aus Quellpuffern hinzugefügt. Weitere Informationen finden Sie unter [Firefox-Bug 1280613](https://bugzil.la/1280613) und [Firefox-Bug 778617](https://bugzil.la/778617).

| Veröffentlichungskanal | Ab Version | Standardmäßig aktiviert? |
| ---------------------- | ---------- | ------------------------ |
| Nightly                | 62         | Nein                     |
| Developer Edition      | 62         | Nein                     |
| Beta                   | 62         | Nein                     |
| Release                | 62         | Nein                     |

- `media.mediasource.experimental.enabled`
  - : Zum Aktivieren auf `true` setzen.

#### Strenge der AVIF-Konformitätsprüfung

Mit der Einstellung `image.avif.compliance_strictness` können Sie steuern, wie _streng_ [AVIF](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image)-Bilder bei der Verarbeitung auf Konformität geprüft werden.
So können Benutzer von Firefox Bilder anzeigen, die in manchen anderen Browsern gerendert werden, auch wenn sie die Spezifikation nicht vollständig einhalten.

| Veröffentlichungskanal | Ab Version | Standardwert |
| ---------------------- | ---------- | ------------ |
| Nightly                | 92         | 1            |
| Developer Edition      | 92         | 1            |
| Beta                   | 92         | 1            |
| Release                | 92         | 1            |

- `image.avif.compliance_strictness`
  - : Numerischer Wert für den _Strengegrad_. Zulässige Werte sind:
    - `0`: Großzügig. Bilder mit Verstößen sowohl gegen Empfehlungen („should“) als auch gegen Anforderungen („shall“) der Spezifikation werden akzeptiert, sofern sie sicher oder eindeutig interpretiert werden können.
    - `1` **(Standard)**: Gemischt. Verstöße gegen Anforderungen („shall“) werden abgelehnt, Verstöße gegen Empfehlungen („should“) dagegen zugelassen.
    - `2`: Streng. Sämtliche Verstöße gegen festgelegte Anforderungen oder Empfehlungen werden abgelehnt.

### WebVR API (deaktiviert)

Die veraltete [WebVR API](/de/docs/Web/API/WebVR_API) soll entfernt werden.
Sie ist in allen Versionen standardmäßig deaktiviert ([Firefox-Bug 1750902](https://bugzil.la/1750902)).

| Veröffentlichungskanal | Entfernt ab Version | Standardmäßig aktiviert? |
| ---------------------- | ------------------- | ------------------------ |
| Nightly                | 98                  | Nein                     |
| Developer Edition      | 98                  | Nein                     |
| Beta                   | 98                  | Nein                     |
| Release                | 98                  | Nein                     |

- `dom.vr.enabled`
  - : Zum Aktivieren auf `true` setzen.

### GeometryUtils-Methoden: convertPointFromNode(), convertRectFromNode() und convertQuadFromNode()

Die `GeometryUtils`-Methoden `convertPointFromNode()`, `convertRectFromNode()` und `convertQuadFromNode()` bilden den angegebenen Punkt, das Rechteck beziehungsweise das Viereck aus dem Koordinatensystem des [`Node`](/de/docs/Web/API/Node), auf dem sie aufgerufen werden, auf das Koordinatensystem eines anderen Knotens ab. (Weitere Einzelheiten finden Sie unter [Firefox-Bug 918189](https://bugzil.la/918189).)

| Veröffentlichungskanal | Ab Version | Standardmäßig aktiviert? |
| ---------------------- | ---------- | ------------------------ |
| Nightly                | 31         | Nein                     |
| Developer Edition      | 31         | Nein                     |
| Beta                   | 31         | Nein                     |
| Release                | 31         | Nein                     |

- `layout.css.convertFromNode.enabled`
  - : Zum Aktivieren auf `true` setzen.

### GeometryUtils-Methode: getBoxQuads()

Die `GeometryUtils`-Methode `getBoxQuads()` gibt die CSS-Boxen eines [`Node`](/de/docs/Web/API/Node) relativ zu einem beliebigen anderen Knoten oder Viewport zurück. (Weitere Einzelheiten finden Sie unter [Firefox-Bug 917755](https://bugzil.la/917755).)

| Veröffentlichungskanal | Ab Version | Standardmäßig aktiviert? |
| ---------------------- | ---------- | ------------------------ |
| Nightly                | 31         | Nein                     |
| Developer Edition      | 31         | Nein                     |
| Beta                   | 31         | Nein                     |
| Release                | 31         | Nein                     |

- `layout.css.getBoxQuads.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Payment Request API

#### Grundlegende Zahlungsabwicklung

Die [Payment Request API](/de/docs/Web/API/Payment_Request_API) unterstützt die Abwicklung webbasierter Zahlungen innerhalb von Webinhalten oder Anwendungen. Aufgrund eines Fehlers, der beim Testen der Benutzeroberfläche auftrat, haben wir beschlossen, die Veröffentlichung dieser API zu verschieben, während mögliche Änderungen an der API diskutiert werden. Die Arbeit daran läuft weiter. (Weitere Einzelheiten finden Sie unter [Firefox-Bug 1318984](https://bugzil.la/1318984).)

| Veröffentlichungskanal | Ab Version | Standardmäßig aktiviert? |
| ---------------------- | ---------- | ------------------------ |
| Nightly                | 55         | Nein                     |
| Developer Edition      | 55         | Nein                     |
| Beta                   | 55         | Nein                     |
| Release                | 55         | Nein                     |

- `dom.payments.request.enabled`
  - : Zum Aktivieren auf `true` setzen.
- `dom.payments.request.supportedRegions`
  - : Ländercodes als durch Kommas getrennte Positivliste von Regionen (z. B. `US,CA`).

### Web Share API

Die [Web Share API](/de/docs/Web/API/Web_Share_API) ermöglicht es, Dateien, URLs und andere Daten von einer Website aus zu teilen.
Diese Funktion ist unter Android in allen Versionen aktiviert, auf Desktop-Geräten jedoch nur über eine Einstellung verfügbar, sofern nachfolgend nichts anderes angegeben ist.

| Veröffentlichungskanal | Geändert ab Version | Standardmäßig aktiviert?                          |
| ---------------------- | ------------------- | ------------------------------------------------- |
| Nightly                | 71                  | Nein (Standard). Ja (unter Windows ab Version 92) |
| Developer Edition      | 71                  | Nein                                              |
| Beta                   | 71                  | Nein                                              |
| Release                | 71                  | Nein (Desktop). Ja (Android).                     |

- `dom.webshare.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Notifications API

Bei Benachrichtigungen ist die Eigenschaft [`requireInteraction`](/de/docs/Web/API/Notification/requireInteraction) auf Windows-Systemen und in Nightly standardmäßig auf `true` gesetzt ([Firefox-Bug 1794475](https://bugzil.la/1794475)).

| Veröffentlichungskanal | Geändert ab Version | Standardmäßig aktiviert? |
| ---------------------- | ------------------- | ------------------------ |
| Nightly                | 117                 | Ja                       |
| Developer Edition      | 117                 | Nein                     |
| Beta                   | 117                 | Nein                     |
| Release                | 117                 | Nur unter Windows        |

- `dom.webnotifications.requireinteraction.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Option `navigate` für Benachrichtigungen

Die Option `navigate` des Konstruktors [`Notification()`](/de/docs/Web/API/Notification/Notification) und von [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification) nimmt eine URL entgegen, die geöffnet wird, wenn ein Benutzer auf die Benachrichtigung klickt. Sie benötigen daher nicht mehr allein zum Öffnen einer Seite einen Click-Handler. Die neue schreibgeschützte Eigenschaft [`Notification.navigate`](/de/docs/Web/API/Notification/navigate) gibt diese URL zurück. Ist die Option gesetzt, werden die Ereignisse [`click`](/de/docs/Web/API/Notification/click_event) und [`notificationclick`](/de/docs/Web/API/ServiceWorkerGlobalScope/notificationclick_event) für diese Benachrichtigung nicht mehr ausgelöst. Jeder Eintrag in der Option [`actions`](/de/docs/Web/API/Notification/actions) kann eine eigene `navigate`-URL festlegen. Eine Aktionsschaltfläche ohne eigene URL löst weiterhin `notificationclick` aus, statt die URL der Benachrichtigung zu verwenden.
([Firefox-Bug 2066184](https://bugzil.la/2066184)).

| Veröffentlichungskanal | Ab Version | Standardmäßig aktiviert? |
| ---------------------- | ---------- | ------------------------ |
| Nightly                | 157        | Nein                     |
| Developer Edition      | 157        | Nein                     |
| Beta                   | 157        | Nein                     |
| Release                | 157        | Nein                     |

- `dom.webnotifications.navigate.enabled`
  - : Zum Aktivieren auf `true` setzen.

### HTML während des Parsens bereinigen

Methoden, die HTML mit der [HTML Sanitizer API](/de/docs/Web/API/HTML_Sanitizer_API) bereinigen, etwa [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML), entfernen unerwünschte Elemente und Attribute jetzt bereits während des Parsens der Auszeichnung, statt zunächst alles zu parsen und anschließend zu bereinigen. Das Ergebnis ist bis auf einen Unterschied gleich: Benachbarter Text befindet sich nun in einem einzigen Textknoten, statt auf mehrere verteilt zu sein ([Firefox-Bug 2062652](https://bugzil.la/2062652)).

| Veröffentlichungskanal | Ab Version | Standardmäßig aktiviert? |
| ---------------------- | ---------- | ------------------------ |
| Nightly                | 157        | Nein                     |
| Developer Edition      | 157        | Nein                     |
| Beta                   | 157        | Nein                     |
| Release                | 157        | Nein                     |

- `dom.security.sanitizer.while-parsing`
  - : Zum Aktivieren auf `true` setzen.

### Container Timing API

Die Container Timing API meldet, wann der Inhalt eines Containerelements gezeichnet wird. So können Sie die Rendering-Zeit eines Seitenbereichs statt des gesamten Viewports messen.
([Firefox-Bug 1940240](https://bugzil.la/1940240)).

| Veröffentlichungskanal | Geändert ab Version | Standardmäßig aktiviert? |
| ---------------------- | ------------------- | ------------------------ |
| Nightly                | 156                 | Nein                     |
| Developer Edition      | 156                 | Nein                     |
| Beta                   | 156                 | Nein                     |
| Release                | 156                 | Nein                     |

- `dom.enable_container_timing`
  - : Zum Aktivieren auf `true` setzen.

### Schlüsselkapselung in Web Crypto

Die [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) unterstützt ML-KEM, einen Algorithmus, mit dem sich zwei Parteien auf einen gemeinsamen geheimen Schlüssel einigen können und der auch gegen Angriffe durch Quantencomputer sicher bleiben soll. Eine Partei übergibt den öffentlichen Schlüssel der anderen Partei an die Methoden `encapsulateKey()` oder `encapsulateBits()` von [`SubtleCrypto`](/de/docs/Web/API/SubtleCrypto). Diese geben den gemeinsamen Schlüssel und einen Chiffretext zurück, der an die andere Partei gesendet wird. Die andere Partei übergibt diesen Chiffretext und ihren eigenen privaten Schlüssel an `decapsulateKey()` oder `decapsulateBits()`, um denselben gemeinsamen Schlüssel zu erhalten.

Die Algorithmusnamen `ML-KEM-512`, `ML-KEM-768` und `ML-KEM-1024` werden unterstützt, ebenso die zugehörigen [`usages`](/de/docs/Web/API/CryptoKey/usages) und die neuen Schlüsselformate `raw-public` und `raw-seed` für [`SubtleCrypto.importKey()`](/de/docs/Web/API/SubtleCrypto/importKey) und [`SubtleCrypto.exportKey()`](/de/docs/Web/API/SubtleCrypto/exportKey) ([Firefox-Bug 1943614](https://bugzil.la/1943614)).

| Veröffentlichungskanal | Ab Version | Standardmäßig aktiviert? |
| ---------------------- | ---------- | ------------------------ |
| Nightly                | 157        | Ja                       |
| Developer Edition      | 157        | Nein                     |
| Beta                   | 157        | Nein                     |
| Release                | 157        | Nein                     |

- `dom.webcrypto.encapsulation.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Benutzerdefinierte Webformate in der Async Clipboard API

Die [Clipboard API](/de/docs/Web/API/Clipboard_API) unterstützt benutzerdefinierte Zwischenablageformate. Dadurch können Webanwendungen mit den Methoden [`Clipboard.write()`](/de/docs/Web/API/Clipboard/write) und [`Clipboard.read()`](/de/docs/Web/API/Clipboard/read) benutzerdefinierte MIME-Typen mit dem Präfix `"web "` schreiben beziehungsweise lesen.
Dies wird auf Desktop-Geräten ab Firefox 154 und unter Android ab Firefox 156 unterstützt ([Firefox-Bug 1956304](https://bugzil.la/1956304) und [Firefox-Bug 2048545](https://bugzil.la/2048545)).

| Veröffentlichungskanal | Geändert ab Version | Standardmäßig aktiviert? |
| ---------------------- | ------------------- | ------------------------ |
| Nightly                | 154                 | Ja (nur Desktop)         |
| Developer Edition      | 154                 | Nein                     |
| Beta                   | 154                 | Nein                     |
| Release                | 154                 | Nein                     |

- `dom.clipboard.customFormatSupport.enabled`
  - : Zum Aktivieren auf `true` setzen.

## Sicherheit und Datenschutz

### Kennzeichnung unsicherer Seiten

Die beiden Einstellungen `security.insecure_connection_text_*` fügen in der Adressleiste neben dem herkömmlichen Schlosssymbol den Text „Nicht sicher“ hinzu, wenn eine Seite über eine unsichere Verbindung geladen wird, also über {{Glossary("HTTP", "HTTP")}} statt {{Glossary("HTTPS", "HTTPS")}}. Die Einstellung `browser.urlbar.trimHttps` entfernt das Präfix `https:` aus URLs in der Adressleiste. Weitere Einzelheiten finden Sie unter [Firefox-Bug 1853418](https://bugzil.la/1853418).

| Veröffentlichungskanal | Ab Version | Standardmäßig aktiviert? |
| ---------------------- | ---------- | ------------------------ |
| Nightly                | 121        | Ja                       |
| Developer Edition      | 60         | Nein                     |
| Beta                   | 60         | Nein                     |
| Release                | 60         | Nein                     |

- `security.insecure_connection_text.enabled`
  - : Auf `true` setzen, um die Textkennzeichnung im normalen Browsermodus zu aktivieren.
- `security.insecure_connection_text.pbmode.enabled`
  - : Auf `true` setzen, um die Textkennzeichnung im privaten Browsermodus zu aktivieren.
- `browser.urlbar.trimHttps`
  - : Auf `true` setzen, um das Präfix `https:` aus URLs in der Adressleiste zu entfernen.

### Inhalte für Erwachsene mit `<meta name="rating">` einschränken

Das nicht standardisierte Element [`<meta name="rating">`](/de/docs/Web/HTML/Reference/Elements/meta) kann in eine Webseite aufgenommen werden, um ihren Inhalt als eingeschränkt beziehungsweise für Erwachsene zu kennzeichnen. Zum Zeitpunkt der Erstellung dieses Artikels gibt es zwei mögliche Werte für `content`: `adult` ([von Google definiert](https://developers.google.com/search/docs/specialty/explicit/guidelines#add-metadata)) und `RTA-5042-1996-1400-1577-RTA` ([von ASACP definiert](https://www.rtalabel.org/?content=howto#top)). Beide haben dieselbe Wirkung; künftig könnten weitere Optionen hinzukommen.

Die folgenden `<meta>`-Elemente sind gleichwertig:

```html
<meta name="rating" content="adult" />
<meta name="rating" content="RTA-5042-1996-1400-1577-RTA" />
```

Browser, die dieses Element erkennen, können Maßnahmen ergreifen, um den Zugriff auf den Inhalt einzuschränken. Die Firefox-Implementierung ersetzt die Seite durch den Inhalt von `about:restricted`. Dieser erklärt Benutzern, dass sie versuchen, eingeschränkte Inhalte aufzurufen und warum sie diese nicht sehen können. Außerdem stellt er eine Zurück-Schaltfläche bereit, mit der sie zur vorherigen Seite zurückkehren können.

Weitere Einzelheiten finden Sie unter [Firefox-Bug 1991135](https://bugzil.la/1991135).

| Veröffentlichungskanal | Ab Version | Standardmäßig aktiviert? |
| ---------------------- | ---------- | ------------------------ |
| Nightly                | 146        | Nein                     |
| Developer Edition      | 146        | Nein                     |
| Beta                   | 146        | Nein                     |
| Release                | 146        | Nein                     |

- `security.restrict_to_adults.always`
  - : Auf `true` setzen, um den Zugriff auf Webseiten einzuschränken, die sich durch ein `<meta name="rating">`-Element selbst als Inhalte für Erwachsene kennzeichnen.
- `security.restrict_to_adults.respect_platform`
  - : Auf `true` setzen, um den Zugriff auf Webseiten mit einem `<meta name="rating">`-Element nur dann einzuschränken, wenn im zugrunde liegenden Betriebssystem entsprechende Jugendschutzeinstellungen festgelegt sind (beispielsweise wenn die macOS-Einstellungen für _Inhalte & Datenschutz_ explizite Webinhalte einschränken).

### Permissions Policy / Feature Policy

Mit [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) können Webentwickler bestimmte Funktionen und APIs im Browser gezielt aktivieren, deaktivieren und in ihrem Verhalten verändern. Sie ähnelt CSP, steuert jedoch Funktionen statt des Sicherheitsverhaltens.
In Firefox ist sie als **Feature Policy** implementiert, dem Namen einer früheren Version der Spezifikation.

Beachten Sie, dass unterstützte Richtlinien über das Attribut [`allow`](/de/docs/Web/HTML/Reference/Elements/iframe#allow) von `<iframe>`-Elementen festgelegt werden können, auch wenn die Benutzereinstellung nicht aktiviert ist.

| Veröffentlichungskanal | Ab Version | Standardmäßig aktiviert? |
| ---------------------- | ---------- | ------------------------ |
| Nightly                | 65         | Nein                     |
| Developer Edition      | 65         | Nein                     |
| Beta                   | 65         | Nein                     |
| Release                | 65         | Nein                     |

- `dom.security.featurePolicy.header.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Privacy Preserving Attribution API (PPA)

Die [PPA API](https://support.mozilla.org/en-US/kb/privacy-preserving-attribution) bietet eine Alternative zur Nutzerverfolgung bei der Zuordnung von Werbewirkung. Dazu dient das neue Objekt `navigator.privateAttribution` mit den Methoden `saveImpression()` und `measureConversion()`. Weitere Informationen zu PPA finden Sie in der [ursprünglichen Erläuterung](https://github.com/mozilla/explainers/tree/main/archive/ppa-experiment) und im [Spezifikationsvorschlag](https://w3c.github.io/ppa/). Dieses Experiment kann für Websites über einen [Origin Trial](https://wiki.mozilla.org/Origin_Trials) oder im Browser durch Setzen der Einstellung auf `1` aktiviert werden ([Firefox-Bug 1900929](https://bugzil.la/1900929)).

| Veröffentlichungskanal | Ab Version | Standardmäßig aktiviert? |
| ---------------------- | ---------- | ------------------------ |
| Nightly                | 128        | Nein                     |
| Developer Edition      | 128        | Nein                     |
| Beta                   | 128        | Nein                     |
| Release                | 128        | Nein                     |

- `dom.origin-trials.private-attribution.state`
  - : Zum Aktivieren auf `true` setzen.

## HTTP

### Integritätsrichtlinie für Stylesheet-Ressourcen

Die HTTP-Header {{httpheader("Integrity-Policy")}} und {{httpheader("Integrity-Policy-Report-Only")}} werden jetzt für Stylesheet-Ressourcen unterstützt. Damit können Websites die [Integrität von Unterressourcen](/de/docs/Web/Security/Defenses/Subresource_Integrity) für Styles entweder erzwingen oder Verstöße gegen die Richtlinie lediglich melden.
Beachten Sie, dass Firefox Meldeendpunkte ignoriert und Verstöße in der Entwicklerkonsole protokolliert.
Bei Verwendung von `Integrity-Policy` blockiert der Browser das Laden von Stylesheets, auf die ein {{HTMLElement("link")}}-Element mit [`rel="stylesheet"`](/de/docs/Web/HTML/Reference/Attributes/rel#stylesheet) verweist, wenn entweder das Attribut [`integrity`](/de/docs/Web/HTML/Reference/Elements/script#integrity) fehlt oder der Integritäts-Hash nicht mit der Ressource auf dem Server übereinstimmt.
([Firefox-Bug 1976656](https://bugzil.la/1976656)).

| Veröffentlichungskanal | Ab Version | Standardmäßig aktiviert? |
| ---------------------- | ---------- | ------------------------ |
| Nightly                | 142        | Nein                     |
| Developer Edition      | 142        | Nein                     |
| Beta                   | 142        | Nein                     |
| Release                | 142        | Nein                     |

- `security.integrity_policy.stylesheet.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Idempotency-Key

Mit dem HTTP-Anfrageheader {{httpheader("Idempotency-Key")}} kann clientseitiger Website-Code {{HTTPMethod("POST")}}- oder {{HTTPMethod("PATCH")}}-Anfragen {{Glossary("idempotent", "idempotent")}} machen, wenn der Server dies unterstützt.
Laut Spezifikation soll der Server dokumentieren und bekannt geben, welche Endpunkte diesen Header benötigen, welches Format der Schlüssel hat und welche Fehlerantworten zu erwarten sind.

Firefox fügt den Header _automatisch_ mit einem eindeutigen Schlüssel für jede neue `POST`-Anfrage hinzu, sofern der clientseitige Seitencode ihn nicht bereits hinzugefügt hat.
Dadurch vereinfacht sich der clientseitige Code für die Zusammenarbeit mit Servern, die diese Funktion unterstützen.

([Firefox-Bug 1830022](https://bugzil.la/1830022)).

| Veröffentlichungskanal | Ab Version | Standardmäßig aktiviert? |
| ---------------------- | ---------- | ------------------------ |
| Nightly                | 135        | Nein                     |
| Developer Edition      | 135        | Nein                     |
| Beta                   | 135        | Nein                     |
| Release                | 135        | Nein                     |

- `network.http.idempotencyKey.enabled`
  - : Zum Aktivieren auf `true` setzen.

### SameSite=Lax als Standard

[`SameSite`-Cookies](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) haben standardmäßig den Wert `Lax`.
Mit dieser Einstellung werden Cookies nur gesendet, wenn ein Benutzer zur Website ihres Ursprungs navigiert, nicht aber bei ursprungsübergreifenden Unteranfragen, etwa zum Laden von Bildern oder Frames auf einer Website eines Drittanbieters.
Weitere Einzelheiten finden Sie unter [Firefox-Bug 1617609](https://bugzil.la/1617609).

| Veröffentlichungskanal | Ab Version | Standardmäßig aktiviert? |
| ---------------------- | ---------- | ------------------------ |
| Nightly                | 69         | Nein                     |
| Developer Edition      | 69         | Nein                     |
| Beta                   | 69         | Nein                     |
| Release                | 69         | Nein                     |

- `network.cookie.sameSite.laxByDefault`
  - : Zum Aktivieren auf `true` setzen.

### Platzhalter in Access-Control-Allow-Headers umfasst Authorization nicht

[`Access-Control-Allow-Headers`](/de/docs/Web/HTTP/Reference/Headers/Access-Control-Allow-Headers) ist ein Antwortheader auf eine {{Glossary("Preflight_request", "CORS-Preflight-Anfrage")}}. Er gibt an, welche Anfrageheader in der endgültigen Anfrage enthalten sein dürfen.
Die Antwortdirektive kann einen Platzhalter (`*`) enthalten. Dieser gibt an, dass die endgültige Anfrage alle Header außer dem Header `Authorization` enthalten darf.

Standardmäßig nimmt Firefox den Header `Authorization` in die endgültige Anfrage auf, nachdem eine Antwort mit `Access-Control-Allow-Headers: *` empfangen wurde.
Setzen Sie die Einstellung auf `false`, damit Firefox den Header `Authorization` nicht aufnimmt.
Weitere Einzelheiten finden Sie unter [Firefox-Bug 1687364](https://bugzil.la/1687364).

| Veröffentlichungskanal | Ab Version | Standardmäßig aktiviert? |
| ---------------------- | ---------- | ------------------------ |
| Nightly                | 115        | Ja                       |
| Developer Edition      | 115        | Ja                       |
| Beta                   | 115        | Ja                       |
| Release                | 115        | Ja                       |

- `network.cors_preflight.authorization_covered_by_wildcard`
  - : Zum Aktivieren auf `true` setzen.

## Entwicklerwerkzeuge

Die Entwicklerwerkzeuge von Mozilla werden ständig weiterentwickelt. Wir erproben neue Ideen, fügen Funktionen hinzu und testen sie in Nightly und Developer Edition, bevor sie in Beta und Release übernommen werden. Die folgenden Funktionen sind die derzeitigen experimentellen Funktionen der Entwicklerwerkzeuge.

**In diesem Veröffentlichungszyklus gibt es keine experimentellen Funktionen.**

## Siehe auch

- [Versionshinweise für Firefox-Entwickler](/de/docs/Mozilla/Firefox/Releases)
- [Firefox Nightly](https://www.firefox.com/en-US/channel/desktop/)
- [Firefox Developer Edition](https://www.firefox.com/en-US/channel/desktop/developer/)
