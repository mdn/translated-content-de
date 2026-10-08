---
title: Experimentelle Funktionen in Firefox
short-title: Experimentelle Funktionen
slug: Mozilla/Firefox/Experimental_features
l10n:
  sourceCommit: d385d44658236ce148462b7ad6b681f0918427d4
---

Diese Seite listet experimentelle und teilweise implementierte Funktionen von Firefox auf, darunter sich weiterentwickelnde oder vorgeschlagene Standards der Webplattform.
Jeder Eintrag enthält Informationen darüber, in welchen Versionen eine Funktion enthalten ist (Nightly, Beta, Developer Edition oder Release), ob sie standardmäßig aktiviert ist und wie die **Einstellung** heißt, mit der Sie die Funktion aktivieren oder konfigurieren können.
Die Beschreibung jeder Funktion enthält außerdem Links zu den entsprechenden [Bugzilla-Fehlermeldungen](https://bugzilla.mozilla.org), die die Funktion implementieren oder aktivieren.
Mit diesen Informationen können Sie experimentelle Funktionen ausprobieren und Feedback geben, bevor sie offiziell veröffentlicht werden.

Neue Funktionen erscheinen üblicherweise zuerst in [Nightly](https://www.firefox.com/en-US/channel/desktop/#nightly), wo sie für frühzeitiges Feedback und Tests oft standardmäßig aktiviert sind.
Wenn keine größeren Probleme festgestellt werden, werden sie in die Vorabversionen [Beta](https://www.firefox.com/en-US/channel/desktop/#beta) und [Developer Edition](https://www.firefox.com/en-US/channel/desktop/developer/) aufgenommen. Schließlich werden freigegebene Funktionen über den Kanal [Stable Release](https://www.firefox.com/en-US/) veröffentlicht.
Sobald eine Funktion in einer Release-Version standardmäßig aktiviert ist, gilt sie nicht mehr als experimentell und wird von dieser Seite entfernt.

Um diese Funktionen zu aktivieren, geben Sie `about:config` in die Firefox-Adressleiste ein, suchen Sie nach der zugehörigen **Einstellung** und ändern Sie deren Wert. Meistens wird dabei zwischen `true` und `false` umgeschaltet.
Je nach Funktion müssen Sie den Browser möglicherweise neu starten, damit die Änderung wirksam wird.
Weitere Informationen zum Verwalten von Einstellungen in Firefox finden Sie im Supportartikel zum [Firefox-Konfigurationseditor](https://support.mozilla.org/en-US/kb/about-config-editor-firefox).

## HTML

### Layout für input type="search"

Das Layout für `input type="search"` wurde aktualisiert. Dadurch erscheint in einem Suchfeld ein Symbol zum Löschen, sobald jemand mit der Eingabe beginnt. Das entspricht dem Verhalten anderer Browser. (Weitere Einzelheiten finden Sie unter [Firefox-Bug 558594](https://bugzil.la/558594).)

| Release-Kanal     | Eingeführt in Version | Standardmäßig aktiviert? |
| ----------------- | --------------------- | ------------------------ |
| Nightly           | 81                    | Nein                     |
| Developer Edition | 81                    | Nein                     |
| Beta              | 81                    | Nein                     |
| Release           | 81                    | Nein                     |

- `layout.forms.input-type-search.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Passwortanzeige umschalten

HTML-Elemente zur Passworteingabe ([`<input type="password">`](/de/docs/Web/HTML/Reference/Elements/input/password)) enthalten ein Augensymbol, mit dem sich der Passworttext anzeigen oder verbergen lässt ([Firefox-Bug 502258](https://bugzil.la/502258)).

| Release-Kanal     | Eingeführt in Version | Standardmäßig aktiviert? |
| ----------------- | --------------------- | ------------------------ |
| Nightly           | 96                    | Nein                     |
| Developer Edition | 96                    | Nein                     |
| Beta              | 96                    | Nein                     |
| Release           | 96                    | Nein                     |

- `layout.forms.reveal-password-button.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Zeitauswahl in `datetime-local`- und `time`-Eingabeelementen

Die HTML-Elemente [`<input type="datetime-local">`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local) und [`<input type="time">`](/de/docs/Web/HTML/Reference/Elements/input/time) unterstützen eine Zeitauswahl ([Firefox-Bug 1726108](https://bugzil.la/1726108)).

| Release-Kanal     | Eingeführt in Version | Standardmäßig aktiviert? |
| ----------------- | --------------------- | ------------------------ |
| Nightly           | 144                   | Nein                     |
| Developer Edition | 144                   | Nein                     |
| Beta              | 144                   | Nein                     |
| Release           | 144                   | Nein                     |

- `dom.forms.datetime.timepicker`
  - : Zum Aktivieren auf `true` setzen.

### Attribute `alpha` und `colorspace` in `color`-Eingabeelementen

Das HTML-Element [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color) unterstützt die Attribute [`alpha`](/de/docs/Web/HTML/Reference/Elements/input/color#alpha) und [`colorspace`](/de/docs/Web/HTML/Reference/Elements/input/color#colorspace) ([Firefox-Bug 1919718](https://bugzil.la/1919718)).

| Release-Kanal     | Eingeführt in Version | Standardmäßig aktiviert? |
| ----------------- | --------------------- | ------------------------ |
| Nightly           | 149                   | Ja                       |
| Developer Edition | -                     | -                        |
| Beta              | -                     | -                        |
| Release           | -                     | -                        |

- `dom.forms.html_color_picker.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Attribute `headingoffset` und `headingreset`

Das globale Attribut [`headingoffset`](/de/docs/Web/HTML/Reference/Global_attributes/headingoffset) erhöht die berechnete Überschriftenebene der [Überschriftenelemente](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) innerhalb des Elements, für das es gesetzt ist. Dadurch kann eine Komponente unabhängig von ihrer Position auf einer Seite dieselbe Auszeichnung für Überschriften verwenden. Das Attribut [`headingreset`](/de/docs/Web/HTML/Reference/Global_attributes/headingreset) verhindert, dass Offsets übergeordneter Elemente auf die Überschriften innerhalb des Elements angewendet werden, für das es gesetzt ist ([Firefox-Bug 1974383](https://bugzil.la/1974383)).

| Release-Kanal     | Eingeführt in Version | Standardmäßig aktiviert? |
| ----------------- | --------------------- | ------------------------ |
| Nightly           | 153                   | Nein                     |
| Developer Edition | 153                   | Nein                     |
| Beta              | 153                   | Nein                     |
| Release           | 153                   | Nein                     |

- `dom.headingoffset.enabled`
  - : Zum Aktivieren auf `true` setzen.

## CSS

### `circle()` und `ellipse()` erlauben die Schlüsselwörter `farthest-corner` und `closest-corner`

Die Schlüsselwörter `farthest-corner` und `closest-corner` können jetzt verwendet werden, um die Radien der CSS-Grundformen [`ellipse()`](/de/docs/Web/CSS/Reference/Values/basic-shape/ellipse) und [`circle()`](/de/docs/Web/CSS/Reference/Values/basic-shape/circle) anzugeben.
(Weitere Einzelheiten finden Sie unter [Firefox-Bug 2037673](https://bugzil.la/2037673).)

| Release-Kanal     | Eingeführt in Version | Standardmäßig aktiviert? |
| ----------------- | --------------------- | ------------------------ |
| Nightly           | 153                   | Ja                       |
| Developer Edition | 153                   | Nein                     |
| Beta              | 153                   | Nein                     |
| Release           | 153                   | Nein                     |

- `layout.css.ellipse-corners.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Hexadezimalfelder zur Anzeige unerwarteter Steuerzeichen

Diese Funktion stellt Steuerzeichen (Unicode-Kategorie Cc) mit Ausnahme von _Tabulator_ (`U+0009`), _Zeilenvorschub_ (`U+000A`), _Seitenvorschub_ (`U+000C`) und _Wagenrücklauf_ (`U+000D`) als Hexadezimalfeld dar, wenn sie unerwartet auftreten. (Weitere Einzelheiten finden Sie unter [Firefox-Bug 1099557](https://bugzil.la/1099557).)

| Release-Kanal     | Eingeführt in Version | Standardmäßig aktiviert? |
| ----------------- | --------------------- | ------------------------ |
| Nightly           | 43                    | Ja                       |
| Developer Edition | 43                    | Nein                     |
| Beta              | 43                    | Nein                     |
| Release           | 43                    | Nein                     |

- `layout.css.control-characters.visible`
  - : Zum Aktivieren auf `true` setzen.

### Eigenschaft initial-letter

Die CSS-Eigenschaft {{cssxref("initial-letter")}} ist Teil der Spezifikation [CSS Inline Layout](https://drafts.csswg.org/css-inline/) und ermöglicht es Ihnen, die Darstellung von abgesetzten, hochgestellten und abgesenkten Initialen festzulegen. (Weitere Einzelheiten finden Sie unter [Firefox-Bug 1223880](https://bugzil.la/1223880).)

| Release-Kanal     | Eingeführt in Version | Standardmäßig aktiviert? |
| ----------------- | --------------------- | ------------------------ |
| Nightly           | 50                    | Nein                     |
| Developer Edition | 50                    | Nein                     |
| Beta              | 50                    | Nein                     |
| Release           | 50                    | Nein                     |

- `layout.css.initial-letter.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Funktion fit-content()

Die Funktion [`fit-content()`](/de/docs/Web/CSS/Reference/Values/fit-content_function) kann für {{cssxref("width")}} und andere Größenangaben verwendet werden. Für die Bemessung von Tracks im CSS-Grid-Layout wird diese Funktion bereits umfassend unterstützt. (Weitere Einzelheiten finden Sie unter [Firefox-Bug 1312588](https://bugzil.la/1312588).)

| Release-Kanal     | Eingeführt in Version | Standardmäßig aktiviert? |
| ----------------- | --------------------- | ------------------------ |
| Nightly           | 91                    | Nein                     |
| Developer Edition | 91                    | Nein                     |
| Beta              | 91                    | Nein                     |
| Release           | 91                    | Nein                     |

- `layout.css.fit-content-function.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Scrollgesteuerte Animationen

Eine [scrollgesteuerte Animation](/de/docs/Web/CSS/Guides/Scroll-driven_animations), früher „scroll-linked animation“ genannt, hängt von der Scrollposition einer Bildlaufleiste ab statt von der Zeit oder einer anderen Größe.
Mit den Eigenschaften {{cssxref('scroll-timeline-name')}} und {{cssxref('scroll-timeline-axis')}} sowie der Kurzschreibweise {{cssxref('scroll-timeline')}} können Sie festlegen, dass eine bestimmte Bildlaufleiste in einem bestimmten benannten Container als Quelle für eine scrollgesteuerte Animation verwendet wird.
Die Scroll-Timeline kann dann mit einer [Animation](/de/docs/Web/CSS/Guides/Animations) verknüpft werden, indem die Eigenschaft {{cssxref('animation-timeline')}} auf den mit `scroll-timeline-name` definierten Namen gesetzt wird.

Bei Verwendung der Kurzschreibweise {{cssxref('scroll-timeline')}} muss zuerst der Wert für {{cssxref('scroll-timeline-name')}} und danach der Wert für {{cssxref('scroll-timeline-axis')}} angegeben werden.
Sowohl die Einzel- als auch die Kurzschreibweise sind über die Einstellung verfügbar.
Alternativ können Sie die funktionale Schreibweise {{cssxref("animation-timeline/scroll")}} mit {{cssxref('animation-timeline')}} verwenden, um anzugeben, dass eine Bildlaufleistenachse eines übergeordneten Elements für die Timeline verwendet wird.

Weitere Informationen finden Sie unter [Firefox-Bug 1807685](https://bugzil.la/1807685), [Firefox-Bug 1804573](https://bugzil.la/1804573), [Firefox-Bug 1809005](https://bugzil.la/1809005), [Firefox-Bug 1676791](https://bugzil.la/1676791), [Firefox-Bug 1754897](https://bugzil.la/1754897), [Firefox-Bug 1817303](https://bugzil.la/1817303) und [Firefox-Bug 1737918](https://bugzil.la/1737918).

Die Eigenschaften {{cssxref('animation-range-start')}} und {{cssxref('animation-range-end')}} sowie die Kurzschreibweise {{cssxref('animation-range')}} werden noch nicht unterstützt. Weitere Informationen finden Sie unter [Firefox-Bug 1676779](https://bugzil.la/1676779).

| Release-Kanal     | Eingeführt in Version | Standardmäßig aktiviert? |
| ----------------- | --------------------- | ------------------------ |
| Nightly           | 136                   | Ja                       |
| Developer Edition | 110                   | Nein                     |
| Beta              | 110                   | Nein                     |
| Release           | 110                   | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Medienmerkmal prefers-reduced-transparency

Mit dem CSS-Medienmerkmal {{cssxref("@media/prefers-reduced-transparency")}} können Sie erkennen, ob ein Benutzer auf seinem Gerät eine Einstellung aktiviert hat, die transparente oder durchscheinende Ebeneneffekte reduziert.
Weitere Einzelheiten finden Sie unter [Firefox-Bug 1736914](https://bugzil.la/1736914).

| Release-Kanal     | Eingeführt in Version | Standardmäßig aktiviert? |
| ----------------- | --------------------- | ------------------------ |
| Nightly           | 113                   | Nein                     |
| Developer Edition | 113                   | Nein                     |
| Beta              | 113                   | Nein                     |
| Release           | 113                   | Nein                     |

- `layout.css.prefers-reduced-transparency.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Medienmerkmal inverted-colors

Mit dem CSS-Medienmerkmal {{cssxref("@media/inverted-colors")}} können Sie erkennen, ob ein User Agent oder das zugrunde liegende Betriebssystem Farben invertiert.
Weitere Einzelheiten finden Sie unter [Firefox-Bug 1794628](https://bugzil.la/1794628).

| Release-Kanal     | Eingeführt in Version | Standardmäßig aktiviert? |
| ----------------- | --------------------- | ------------------------ |
| Nightly           | 114                   | Nein                     |
| Developer Edition | 114                   | Nein                     |
| Beta              | 114                   | Nein                     |
| Release           | 114                   | Nein                     |

- `layout.css.inverted-colors.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Eigenschaft für benannte View-Progress-Timelines

Mit der CSS-Eigenschaft {{cssxref("view-timeline-name")}} können Sie einem bestimmten Element einen Namen geben und damit festlegen, dass sein übergeordnetes Scroll-Element die Quelle einer View-Progress-Timeline ist.
Der Name kann anschließend `animation-timeline` zugewiesen werden. Dadurch wird das zugehörige Element animiert, während es sich durch den sichtbaren Bereich seines übergeordneten Scroll-Elements bewegt.
Weitere Einzelheiten finden Sie unter [Firefox-Bug 1737920](https://bugzil.la/1737920).

| Release-Kanal     | Eingeführt in Version | Standardmäßig aktiviert? |
| ----------------- | --------------------- | ------------------------ |
| Nightly           | 136                   | Ja                       |
| Developer Edition | 114                   | Nein                     |
| Beta              | 114                   | Nein                     |
| Release           | 114                   | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Funktion für anonyme View-Progress-Timelines

Mit der CSS-Funktion {{cssxref("animation-timeline/view")}} können Sie festlegen, dass `animation-timeline` für ein Element eine View-Progress-Timeline ist. Das Element wird dadurch animiert, während es sich durch den sichtbaren Bereich seines übergeordneten Scroll-Elements bewegt.
Die Funktion definiert die Achse des übergeordneten Elements, die die Timeline bereitstellt, sowie den Abstand innerhalb des sichtbaren Bereichs, bei dem die Animation beginnt.
Weitere Einzelheiten finden Sie unter [Firefox-Bug 1808410](https://bugzil.la/1808410).

| Release-Kanal     | Eingeführt in Version | Standardmäßig aktiviert? |
| ----------------- | --------------------- | ------------------------ |
| Nightly           | 136                   | Ja                       |
| Developer Edition | 114                   | Nein                     |
| Beta              | 114                   | Nein                     |
| Release           | 114                   | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Transform-Eigenschaften mit Herstellerpräfix

Die mit `-moz-` präfigierten Eigenschaften für [CSS-Transformationen](/de/docs/Web/CSS/Guides/Transforms) können deaktiviert werden, indem die Einstellung `layout.css.prefixes.transforms` auf `false` gesetzt wird. Sie sollen deaktiviert werden, sobald die standardisierten CSS-Zoom-Eigenschaften umfassend unterstützt werden. ([Firefox-Bug 1886134](https://bugzil.la/1886134), [Firefox-Bug 1855763](https://bugzil.la/1855763)).

Konkret deaktiviert diese Einstellung die folgenden präfigierten Eigenschaften:

- `-moz-backface-visibility`
- `-moz-perspective`
- `-moz-perspective-origin`
- `-moz-transform`
- `-moz-transform-origin`
- `-moz-transform-style`

| Release-Kanal     | Eingeführt in Version | Standardmäßig aktiviert? |
| ----------------- | --------------------- | ------------------------ |
| Nightly           | 120                   | Ja                       |
| Developer Edition | 120                   | Ja                       |
| Beta              | 120                   | Ja                       |
| Release           | 120                   | Ja                       |

- `layout.css.prefixes.transforms`
  - : Zum Aktivieren auf `true` setzen.

### Symmetrisches `letter-spacing`

Die CSS-Eigenschaft {{cssxref("letter-spacing")}} verteilt den angegebenen Buchstabenabstand jetzt gleichmäßig auf beide Seiten jedes Zeichens. Das unterscheidet sich vom bisherigen Verhalten, bei dem der Abstand überwiegend auf einer Seite hinzugefügt wird. Dieser Ansatz kann die Abstände im Text verbessern, insbesondere bei Text mit gemischten Schreibrichtungen.
([Firefox-Bug 1891446](https://bugzil.la/1891446)).

| Release-Kanal     | Eingeführt in Version | Standardmäßig aktiviert? |
| ----------------- | --------------------- | ------------------------ |
| Nightly           | 128                   | Ja                       |
| Developer Edition | 128                   | Ja                       |
| Beta              | 127                   | Nein                     |
| Release           | 127                   | Nein                     |

- `layout.css.letter-spacing.model`
  - : Zum Aktivieren auf `true` setzen.

### Pseudoelemente nach elementbasierten Pseudoelementen zulassen

Es wurde mit der Implementierung begonnen, [Pseudoelemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) wie {{cssxref("::first-letter")}} und {{cssxref("::before")}} an [elementbasierte Pseudoelemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements#element-backed_pseudo-elements) wie {{cssxref("::details-content")}} und {{cssxref("::file-selector-button")}} anzuhängen.

Dadurch können Benutzer beispielsweise mit dem CSS-Selektor `::details-content::first-letter` den ersten Buchstaben eines {{htmlElement("details")}}-Elements gestalten oder mit dem CSS-Selektor `::file-selector-button::before` Inhalt vor einem {{HTMLElement("input") }}-Element mit [`type="file"`](/de/docs/Web/HTML/Reference/Elements/input/file) hinzufügen.

Derzeit lässt sich nur die Unterstützung für `::details-content::first-letter` mit `@supports(::details-content::first-letter)` prüfen.
Das Pseudoelement `::file-selector-button` ist noch nicht als elementbasiertes Pseudoelement gekennzeichnet, weshalb es dafür keine Testmöglichkeit gibt.
([Firefox-Bug 1953557](https://bugzil.la/1953557), [Firefox-Bug 1941406](https://bugzil.la/1941406)).

| Release-Kanal     | Eingeführt in Version | Standardmäßig aktiviert? |
| ----------------- | --------------------- | ------------------------ |
| Nightly           | 138                   | Nein                     |
| Developer Edition | 138                   | Nein                     |
| Beta              | 138                   | Nein                     |
| Release           | 138                   | Nein                     |

### Pseudoklassen `:heading` und `:heading()`

Mit der Pseudoklasse {{cssxref(":heading")}} können Sie alle [Überschriftenelemente](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) (`<h1>`–`<h6>`) gleichzeitig gestalten, statt sie einzeln anzusprechen. Mit der funktionalen Pseudoklasse {{cssxref(":heading()")}} können Sie Überschriftenelemente gestalten, deren Überschriftenebenen einer durch Kommas getrennten Liste von Ganzzahlen entsprechen. ([Firefox-Bug 1974386](https://bugzil.la/1974386) und [Firefox-Bug 1984310](https://bugzil.la/1984310))

| Release-Kanal     | Eingeführt in Version | Standardmäßig aktiviert? |
| ----------------- | --------------------- | ------------------------ |
| Nightly           | 142                   | Nein                     |
| Developer Edition | 142                   | Nein                     |
| Beta              | 142                   | Nein                     |
| Release           | 142                   | Nein                     |

- `layout.css.heading-selector.enabled`
  - : Zum Aktivieren auf `true` setzen.

### At-Regel `@custom-media`

Die CSS-At-Regel {{cssxref("@custom-media")}} definiert Aliase für lange oder komplexe Medienabfragen. Statt dieselbe fest codierte `<media-query-list>` in mehreren `@media`-At-Regeln zu wiederholen, kann sie einmal in einer `@custom-media`-At-Regel definiert und bei Bedarf im gesamten Stylesheet referenziert werden. ([Firefox-Bug 1744292](https://bugzil.la/1744292))

| Release-Kanal     | Eingeführt in Version | Standardmäßig aktiviert? |
| ----------------- | --------------------- | ------------------------ |
| Nightly           | 148                   | Nein                     |
| Developer Edition | 148                   | Nein                     |
| Beta              | 148                   | Nein                     |
| Release           | 148                   | Nein                     |

- `layout.css.custom-media.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Wert `base-select` für die CSS-Eigenschaft `appearance`

Mit dem Wert [`base-select`](/de/docs/Web/CSS/Reference/Properties/appearance#base-select) für die CSS-Eigenschaft {{cssxref("appearance")}} können Sie das {{htmlelement("select")}}-Element und das Pseudoelement {{cssxref("::picker()", "::picker(select)")}} vollständig gestalten. Der Wert ist nur für diese beiden relevant. Derzeit wird lediglich die Gestaltung des `<select>`-Elements unterstützt. Die Gestaltung des Pseudoelements `::picker(select)` wird in zukünftigen Versionen hinzugefügt. Diese Funktion ist Teil der Arbeit an [anpassbaren Select-Elementen](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select). Für ihre Verwendung müssen zwei Einstellungen aktiviert werden. ([Firefox-Bug 1974787](https://bugzil.la/1974787))

| Release-Kanal     | Eingeführt in Version | Standardmäßig aktiviert? |
| ----------------- | --------------------- | ------------------------ |
| Nightly           | 149                   | Nein                     |
| Developer Edition | 149                   | Nein                     |
| Beta              | 149                   | Nein                     |
| Release           | 149                   | Nein                     |

- `dom.select.customizable_select.enabled`
  - : Zum Aktivieren auf `true` setzen.
- `layout.css.appearance-base.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Absolut positionierte Elemente in mehrspaltigen Containern und beim Drucken

Absolut positionierte Elemente innerhalb [mehrspaltiger Container](/de/docs/Web/CSS/Guides/Multicol_layout) und beim Drucken werden jetzt korrekt positioniert und fragmentiert.
Das verbessert die Interoperabilität mit anderen Browsern und verhindert Layoutprobleme wie überlappenden Text oder fehlende Inhalte.
([Firefox-Bug 2018797](https://bugzil.la/2018797))

| Release-Kanal     | Eingeführt in Version | Standardmäßig aktiviert? |
| ----------------- | --------------------- | ------------------------ |
| Nightly           | 150                   | Ja                       |
| Developer Edition | 150                   | Nein                     |
| Beta              | 150                   | Nein                     |
| Release           | 150                   | Nein                     |

- `layout.abspos.fragmentainer-aware-positioning.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Bereichssyntax für `@container style()`-Abfragen

Die [`style()`](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries)-Abfragen der CSS-At-Regel [`@container`](/de/docs/Web/CSS/Reference/At-rules/@container) unterstützen jetzt die _Bereichssyntax_. Damit können Sie prüfen, ob ein Container eine gültige benutzerdefinierte CSS-Eigenschaft hat, deren Wert mit Vergleichsoperatoren wie `>`, `<`, `>=` und `<=` vergleichen und entsprechend Stile auf seine Kindelemente anwenden. ([Firefox-Bug 2024601](https://bugzil.la/2024601))

| Release-Kanal     | Eingeführt in Version | Standardmäßig aktiviert? |
| ----------------- | --------------------- | ------------------------ |
| Nightly           | 151                   | Nein                     |
| Developer Edition | 151                   | Nein                     |
| Beta              | 151                   | Nein                     |
| Release           | 151                   | Nein                     |

- `layout.css.attr.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Werte vom Typ `<timeline-range-name>`

Die CSS-Eigenschaften {{cssxref("animation-range-start")}} und {{cssxref("animation-range-end")}} sowie die Kurzschreibweise {{cssxref("animation-range")}} unterstützen jetzt Werte vom Typ [`<timeline-range-name>`](/de/docs/Web/CSS/Reference/Values/timeline-range-name). Mit diesen [Werten vom Typ `<timeline-range-name>`](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names#timeline_range_names) können Sie genau angeben, in welchem Abschnitt eine scrollgesteuerte Animation stattfindet. ([Firefox-Bug 1804775](https://bugzil.la/1804775))

| Release-Kanal     | Eingeführt in Version | Standardmäßig aktiviert? |
| ----------------- | --------------------- | ------------------------ |
| Nightly           | 151                   | Ja                       |
| Developer Edition | 151                   | Nein                     |
| Beta              | 151                   | Nein                     |
| Release           | 151                   | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Werte vom Typ `<timeline-range-name>` in `@keyframes`-Selektoren

Die At-Regel {{cssxref("@keyframes")}} unterstützt jetzt Werte vom Typ [`<timeline-range-name>`](/de/docs/Web/CSS/Reference/Values/timeline-range-name). Mit diesen [Werten](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names#timeline_range_names) können Sie den Abschnitt festlegen, in dem eine scrollgesteuerte Animation stattfindet. ([Firefox-Bug 1824875](https://bugzil.la/1824875))

| Release-Kanal     | Eingeführt in Version | Standardmäßig aktiviert? |
| ----------------- | --------------------- | ------------------------ |
| Nightly           | 152                   | Ja                       |
| Developer Edition | 152                   | Nein                     |
| Beta              | 152                   | Nein                     |
| Release           | 152                   | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Attribute externer Ressourcen aktualisieren

Die CSS-Eigenschaft {{cssxref("link-parameters")}} und die CSS-Funktion {{cssxref("param")}} werden jetzt unterstützt. Damit lassen sich Attribute externer Ressourcen wie SVGs aktualisieren, deren Attribute mit der CSS-Funktion {{cssxref("env")}} festgelegt wurden. So kann eine einzige externe Ressource verwendet werden, statt mehrere Varianten zu erstellen, die sich nur in Farben oder anderen Werten unterscheiden. ([Firefox-Bug 2046153](https://bugzil.la/2046153))

| Release-Kanal     | Eingeführt in Version | Standardmäßig aktiviert? |
| ----------------- | --------------------- | ------------------------ |
| Nightly           | 154                   | Ja                       |
| Developer Edition | 153                   | Nein                     |
| Beta              | 153                   | Nein                     |
| Release           | 153                   | Nein                     |

- `layout.css.link-parameters.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Inhalte mit `line-clamp` abschneiden

Die CSS-Eigenschaft {{cssxref("line-clamp")}} funktioniert jetzt ohne das Herstellerpräfix `-webkit-`. Derzeit unterstützt sie allerdings die Werte `no-ellipsis` und `<string>` noch nicht. ([Firefox-Bug 2042986](https://bugzil.la/2042986))

| Release-Kanal     | Eingeführt in Version | Standardmäßig aktiviert? |
| ----------------- | --------------------- | ------------------------ |
| Nightly           | 154                   | Nein                     |
| Developer Edition | 154                   | Nein                     |
| Beta              | 154                   | Nein                     |
| Release           | 154                   | Nein                     |

- `layout.css.line-clamp.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Prozentwerte für `text-decoration-inset`

Die CSS-Eigenschaft {{cssxref("text-decoration-inset")}} unterstützt jetzt Prozentwerte. Der Prozentwert gibt die Größe des Abstands als Prozentsatz der Inline-Größe der dekorierten Box oder, abhängig vom Wert von {{cssxref("box-decoration-break")}}, jedes einzelnen Boxfragments an. ([Firefox-Bug 2044602](https://bugzil.la/2044602))

| Release-Kanal     | Eingeführt in Version | Standardmäßig aktiviert? |
| ----------------- | --------------------- | ------------------------ |
| Nightly           | 154                   | Nein                     |
| Developer Edition | 154                   | Nein                     |
| Beta              | 154                   | Nein                     |
| Release           | 154                   | Nein                     |

- `layout.css.text-decoration-inset-percentage.enabled`
  - : Zum Aktivieren auf `true` setzen.

### `view-timeline` umfasst `view-timeline-inset`

Die Kurzschreibweise {{cssxref("view-timeline")}} unterstützt jetzt die Eigenschaft {{cssxref("view-timeline-inset")}}. Damit können Sie Abstände am Anfang und/oder Ende nach innen oder außen angeben, um die Position der View-Progress-Timeline anzupassen. ([Firefox-Bug 2046602](https://bugzil.la/2046602))

| Release-Kanal     | Eingeführt in Version | Standardmäßig aktiviert? |
| ----------------- | --------------------- | ------------------------ |
| Nightly           | 155                   | Ja                       |
| Developer Edition | 155                   | Nein                     |
| Beta              | 155                   | Nein                     |
| Release           | 155                   | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Namen für `timeline-scope` sind jetzt standardmäßig global

Das Standardverhalten für den Gültigkeitsbereich benannter Timelines wurde auf global geändert. Mit der CSS-Eigenschaft {{cssxref("timeline-scope")}} und dem Wert von {{cssxref("scroll-timeline-name")}} oder {{cssxref("view-timeline-name")}} kann der Gültigkeitsbereich auf Elemente und deren Unterbäume begrenzt werden ([Firefox-Bug 2024012](https://bugzil.la/2024012)).

| Release-Kanal     | Eingeführt in Version | Standardmäßig aktiviert? |
| ----------------- | --------------------- | ------------------------ |
| Nightly           | 155                   | Ja                       |
| Developer Edition | 155                   | Nein                     |
| Beta              | 155                   | Nein                     |
| Release           | 155                   | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Unterstützungsabfragen mit `named-feature()`

Mit der Funktion `named-feature()` in der At-Regel {{cssxref("@supports")}} können Sie testen, ob der Browser eine Funktion unterstützt, für die es keine andere erkennbare Syntax gibt, beispielsweise mit `@supports named-feature(anchor-position-follows-transforms)`.
([Firefox-Bug 2042977](https://bugzil.la/2042977) und [Firefox-Bug 2055354](https://bugzil.la/2055354))

| Release-Kanal     | Eingeführt in Version | Standardmäßig aktiviert? |
| ----------------- | --------------------- | ------------------------ |
| Nightly           | 156                   | Nein                     |
| Developer Edition | 156                   | Nein                     |
| Beta              | 156                   | Nein                     |
| Release           | 156                   | Nein                     |

- `layout.css.anchor-positioning.follows-transforms.enabled`
  - : Zum Aktivieren auf `true` setzen.

### `corner-shape`-Eigenschaften

Die Kurzschreibweise {{cssxref("corner-shape")}} und die zugehörigen Einzeleigenschaften werden jetzt in Nightly unterstützt. Mit diesen Eigenschaften können Sie Eckformen mithilfe eines der Schlüsselwortwerte von {{cssxref("corner-shape-value")}} oder der Funktion {{cssxref("superellipse")}} anpassen.
([Firefox-Bug 2070927](https://bugzil.la/2070927))

| Release-Kanal     | Eingeführt in Version | Standardmäßig aktiviert? |
| ----------------- | --------------------- | ------------------------ |
| Nightly           | 158                   | Ja                       |
| Developer Edition | 157                   | Nein                     |
| Beta              | 157                   | Nein                     |
| Release           | 157                   | Nein                     |

- `layout.css.corner-shape.enabled`
  - : Zum Aktivieren auf `true` setzen.

## SVG

**In diesem Veröffentlichungszyklus gibt es keine experimentellen Funktionen.**

## MathML

### `href` für andere MathML-Elemente als `<a>` deaktivieren

Wenn diese Funktion aktiviert ist, erzeugt das globale Attribut [`href`](/de/docs/Web/MathML/Reference/Global_attributes/href) bei anderen MathML-Elementen als `<a>` keinen Hyperlink mehr. Damit entspricht Firefox der [MathML-Core-Spezifikation](https://w3c.github.io/mathml-core/#the-a-element), die Hyperlinks nur für das `<a>`-Element definiert. ([Firefox-Bug 2026848](https://bugzil.la/2026848))

| Release-Kanal     | Eingeführt in Version | Standardmäßig aktiviert? |
| ----------------- | --------------------- | ------------------------ |
| Nightly           | 151                   | Ja                       |
| Developer Edition | 151                   | Nein                     |
| Beta              | 151                   | Nein                     |
| Release           | 151                   | Nein                     |

- `mathml.href_link_on_non_anchor_element.disabled`
  - : Zum Aktivieren auf `true` setzen.

### Schnittstelle `MathMLAnchorElement` implementieren

Wenn diese Funktion aktiviert ist, wird das MathML-Element [`<a>`](/de/docs/Web/MathML/Reference/Element/a) im DOM korrekt durch die Schnittstelle [`MathMLAnchorElement`](/de/docs/Web/API/MathMLAnchorElement) statt durch die allgemeine Schnittstelle [`MathMLElement`](/de/docs/Web/API/MathMLElement) repräsentiert. ([Firefox-Bug 2059312](https://bugzil.la/2059312))

| Release-Kanal     | Eingeführt in Version | Standardmäßig aktiviert? |
| ----------------- | --------------------- | ------------------------ |
| Nightly           | 155                   | Ja                       |
| Developer Edition | 155                   | Nein                     |
| Beta              | 155                   | Nein                     |
| Release           | 155                   | Nein                     |

- `mathml.a.element.enabled`
  - : Zum Aktivieren auf `true` setzen.

### MathML-Elemente `<a>`

Das MathML-Element `<a>` erstellt einen Hyperlink aus MathML-Inhalten und stellt die Schnittstelle `MathMLAnchorElement` mit denselben URL-Komponenteneigenschaften wie HTML-Elemente {{HTMLElement("a")}} bereit.

Diese Version ergänzt die Unterstützung für die IDL-Attribute `rel` und `relList`. ([Firefox-Bug 2063819](https://bugzil.la/2063819))

| Release-Kanal     | Eingeführt in Version | Standardmäßig aktiviert? |
| ----------------- | --------------------- | ------------------------ |
| Nightly           | 156                   | Ja                       |
| Developer Edition | 156                   | Nein                     |
| Beta              | 156                   | Nein                     |
| Release           | 156                   | Nein                     |

- `mathml.a.element.enabled`
  - : Zum Aktivieren auf `true` setzen.

## JavaScript

### TC39-Vorschlag zu Intl.Locale-Informationen

Der [TC39-Vorschlag zu Intl.Locale-Informationen](https://github.com/tc39/proposal-intl-locale-info) wird jetzt unterstützt.
Dazu gehören alle Instanzmethoden von `Intl.Locale`, deren Namen mit „get“ beginnen: {{jsxref("Intl/Locale/getCalendars", "Intl.Locale.prototype.getCalendars()")}}, {{jsxref("Intl/Locale/getCollations", "Intl.Locale.prototype.getCollations()")}}, {{jsxref("Intl/Locale/getHourCycles", "Intl.Locale.prototype.getHourCycles()")}}, {{jsxref("Intl/Locale/getNumberingSystems", "Intl.Locale.prototype.getNumberingSystems()")}}, {{jsxref("Intl/Locale/getTextInfo", "Intl.Locale.prototype.getTextInfo()")}}, {{jsxref("Intl/Locale/getTimeZones", "Intl.Locale.prototype.getTimeZones()")}} und {{jsxref("Intl/Locale/getWeekInfo", "Intl.Locale.prototype.getWeekInfo()")}}.
([Firefox-Bug 1693576](https://bugzil.la/1693576))

| Release-Kanal     | Eingeführt in Version | Standardmäßig aktiviert? |
| ----------------- | --------------------- | ------------------------ |
| Nightly           | 152                   | Nein                     |
| Developer Edition | —                     | —                        |
| Beta              | —                     | —                        |
| Release           | —                     | —                        |

- `javascript.options.experimental.intl_locale_info`
  - : Zum Aktivieren in Nightly auf `true` setzen.

### Mehrere Import Maps

Unterstützung für [mehrere Import Maps](/de/docs/Web/HTML/Reference/Elements/script/type/importmap#merging_multiple_import_maps).
Sie geben Entwicklern mehr Flexibilität beim Strukturieren und Laden von JavaScript-Modulen: Es ist nicht mehr nötig, alle Modulzuordnungen im Voraus zu kennen und sie in einer einzigen Import Map zu deklarieren, bevor Module geladen werden.
([Firefox-Bug 1916277](https://bugzil.la/1916277))

| Release-Kanal     | Eingeführt in Version | Standardmäßig aktiviert? |
| ----------------- | --------------------- | ------------------------ |
| Nightly           | 150                   | Nein                     |
| Developer Edition | 150                   | Nein                     |
| Beta              | 150                   | Nein                     |
| Release           | 150                   | Nein                     |

- `dom.multiple_import_maps.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Zusicherungen für Puffergrenzen in regulären Ausdrücken

Die [Puffergrenzen-Zusicherungen `\A`, `\z` und `\Z`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Buffer_boundary_assertion) werden jetzt unterstützt.
Mit `\A` und `\z` können Sie den Anfang beziehungsweise das Ende der gesamten Eingabe abgleichen. `\Z` gleicht das Ende der Eingabe ab und ignoriert dabei ein Zeilenabschlusszeichen.
Anders als `^` und `$` werden die Zusicherungen nicht vom Flag [`m`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline) beeinflusst. Sie können nur im [Unicode-bewussten Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) verwendet werden, wenn das Flag `u` oder `v` gesetzt ist.
([Firefox-Bug 2047706](https://bugzil.la/2047706))

| Release-Kanal     | Eingeführt in Version | Standardmäßig aktiviert? |
| ----------------- | --------------------- | ------------------------ |
| Nightly           | 155                   | Nein                     |
| Developer Edition | —                     | —                        |
| Beta              | —                     | —                        |
| Release           | —                     | —                        |

- `javascript.options.experimental.regexp_buffer_boundaries`
  - : Zum Aktivieren in Nightly auf `true` setzen.

### TC39-Vorschlag zu `export *` und Standardexporten

Der [TC39-Vorschlag zu `export *` und Standardexporten](https://github.com/tc39/proposal-export-star-default) ermöglicht es, mit [`export * from`](/de/docs/Web/JavaScript/Reference/Statements/export#re-exporting_aggregating) neben den benannten Exporten eines Moduls auch dessen Standardexport erneut zu exportieren. Ohne diese Änderung lässt `export * from` den Standardexport eines Moduls aus.
([Firefox-Bug 2065611](https://bugzil.la/2065611))

Beachten Sie, dass sich dieser Vorschlag noch in einem sehr frühen Stadium befindet und Änderungen unterliegen kann.

| Release-Kanal     | Eingeführt in Version | Standardmäßig aktiviert? |
| ----------------- | --------------------- | ------------------------ |
| Nightly           | 157                   | Nein                     |
| Developer Edition | 157                   | Nein                     |
| Beta              | 157                   | Nein                     |
| Release           | —                     | —                        |

- `javascript.options.experimental.export_star_default`
  - : Zum Aktivieren auf `true` setzen.

## APIs

### Absturzberichte

Absturzberichte können jetzt über die [Reporting API](/de/docs/Web/API/Reporting_API) an den Endpunkt `default` gesendet werden.
Beachten Sie, dass Firefox [`CrashReportContext`](/de/docs/Web/API/CrashReportContext) im Berichtstext nicht unterstützt.
([Firefox-Bug 2036160](https://bugzil.la/2036160))

| Release-Kanal     | Eingeführt in Version | Standardmäßig aktiviert? |
| ----------------- | --------------------- | ------------------------ |
| Nightly           | 152                   | Ja                       |
| Developer Edition | 152                   | Nein                     |
| Beta              | 152                   | Nein                     |
| Release           | 152                   | Nein                     |

- `dom.reporting.crash.enabled`
  - : Zum Aktivieren auf `true` setzen (in Nightly standardmäßig aktiviert).

### Gültigkeitsbereichsgebundene Custom-Element-Registries

Die Unterstützung für [gültigkeitsbereichsgebundene Custom-Element-Registries](/de/docs/Web/API/Web_components/Using_custom_elements#scoped_custom_element_registries) wird implementiert.
Damit kann ein Shadow Tree eine unabhängige [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry) erstellen, deren Definitionen nur für diesen bestimmten DOM-Unterbaum gelten.
So lassen sich Namenskonflikte vermeiden, wenn mehrere Web Components Elemente mit demselben Namen deklarieren.

Die Implementierung umfasst:

- Die Eigenschaft `customElementRegistry` für [`Document`](/de/docs/Web/API/Document), [`Element`](/de/docs/Web/API/Element) und [`ShadowRoot`](/de/docs/Web/API/ShadowRoot).
  Der [Konstruktor `CustomElementRegistry()`](/de/docs/Web/API/CustomElementRegistry/CustomElementRegistry) erstellt ein neues `CustomElementRegistry`-Objekt für die Verwendung in einem begrenzten Gültigkeitsbereich. ([Firefox-Bug 2018900](https://bugzil.la/2018900))

Ab Version 156:

- [Gültigkeitsbereichsgebundene Custom-Element-Registries](/de/docs/Web/API/Web_components/Using_custom_elements#scoped_custom_element_registries) werden jetzt unterstützt. Damit kann ein Shadow Root benutzerdefinierte Elemente definieren, die nicht mit den Definitionen in der globalen Registry kollidieren. ([Firefox-Bug 2064333](https://bugzil.la/2064333))

| Release-Kanal     | Eingeführt in Version | Standardmäßig aktiviert? |
| ----------------- | --------------------- | ------------------------ |
| Nightly           | 156                   | Ja                       |
| Developer Edition | 150                   | Nein                     |
| Beta              | 150                   | Nein                     |
| Release           | 150                   | Nein                     |

- `dom.scoped-custom-element-registries.enabled`
  - : Zum Aktivieren auf `true` setzen.

### CSS Typed Object Model Level 1

Die [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) ist in Nightly implementiert.
Sie vereinfacht die Bearbeitung von CSS-Eigenschaften, indem sie CSS-Werte als typisierte JavaScript-Objekte statt als Zeichenfolgen bereitstellt.
([Firefox-Bug 1278697](https://bugzil.la/1278697))

| Release-Kanal     | Eingeführt in Version | Standardmäßig aktiviert? |
| ----------------- | --------------------- | ------------------------ |
| Nightly           | 154                   | Ja                       |
| Developer Edition | 149                   | Nein                     |
| Beta              | 149                   | Nein                     |
| Release           | 149                   | Nein                     |

- `layout.css.typed-om.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Spracherkennung auf dem Gerät

[Spracherkennung auf dem Gerät](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#on-device_speech_recognition) wird jetzt in Nightly unterstützt, allerdings nur auf Desktop-Systemen. Damit können Sie Spracherkennung über die [Web Speech API](/de/docs/Web/API/Web_Speech_API) direkt im Browser durchführen, ohne auf einen Cloud-Dienst angewiesen zu sein.
([Firefox-Bug 2069803](https://bugzil.la/2069803))

| Release-Kanal     | Eingeführt in Version | Standardmäßig aktiviert? |
| ----------------- | --------------------- | ------------------------ |
| Nightly           | 158                   | Ja                       |
| Developer Edition | 158                   | Nein                     |
| Beta              | 158                   | Nein                     |
| Release           | 158                   | Nein                     |

- `media.webspeech.recognition.enable`
  - : Zum Aktivieren auf `true` setzen.

### Grafik: Canvas, WebGL und WebGPU

#### WebGL: Erweiterungsentwürfe

Wenn diese Einstellung aktiviert ist, können alle derzeit im Entwurfsstadium befindlichen WebGL-Erweiterungen verwendet werden, die gerade getestet werden. Derzeit testet Firefox keine WebGL-Erweiterungen.

#### WebGPU API

Die [WebGPU API](/de/docs/Web/API/WebGPU_API) bietet Low-Level-Unterstützung für Berechnungen und Grafik-Rendering mit der [Grafikprozessoreinheit](https://en.wikipedia.org/wiki/Graphics_Processing_Unit) (GPU) des Geräts oder Computers des Benutzers.
Ab Version 142 ist sie unter Windows in allen Kontexten außer Service Workern aktiviert.
Ab Version 147 ist sie unter macOS auf Apple Silicon in allen Browsing-Kontexten außer Service Workern aktiviert.
Auf anderen Plattformen wie Linux und macOS auf Intel-Hardware ist sie in Nightly aktiviert.
Den Fortschritt bei dieser API können Sie unter [Firefox-Bug 1602129](https://bugzil.la/1602129) verfolgen.

| Release-Kanal     | Eingeführt in Version | Standardmäßig aktiviert?                                                      |
| ----------------- | --------------------- | ----------------------------------------------------------------------------- |
| Nightly           | 141                   | Ja                                                                            |
| Developer Edition | 141                   | Nein (ja unter Windows und macOS auf Apple Silicon, außer in Service Workern) |
| Beta              | 141                   | Nein (ja unter Windows und macOS auf Apple Silicon, außer in Service Workern) |
| Release           | 141                   | Nein (ja unter Windows und macOS auf Apple Silicon, außer in Service Workern) |

- `dom.webgpu.enabled`
  - : Zum Aktivieren auf `true` setzen (in Nightly und unter Windows in allen Release-Kanälen aktiviert).
- `dom.webgpu.service-workers.enabled`
  - : Zum Aktivieren auf `true` setzen (in Nightly aktiviert).

### WebRTC und Medien

Zu den folgenden experimentellen Funktionen gehören Funktionen von Medien-APIs wie der [WebRTC API](/de/docs/Web/API/WebRTC_API), der [Web Audio API](/de/docs/Web/API/Web_Audio_API), der [Media Source Extensions API](/de/docs/Web/API/Media_Source_Extensions_API), der [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API) und der [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API).

#### Audio Session API

Die [Audio Session API](/de/docs/Web/API/Audio_Session_API) bietet Webanwendungen die Möglichkeit zu steuern, wie ihre Audioausgabe mit anderer Audiowiedergabe auf einem Gerät zusammenwirkt. ([Firefox-Bug 2055710](https://bugzil.la/2055710))

| Release-Kanal     | Eingeführt in Version | Standardmäßig aktiviert? |
| ----------------- | --------------------- | ------------------------ |
| Nightly           | 155                   | Ja                       |
| Developer Edition | 153                   | Nein                     |
| Beta              | 153                   | Nein                     |
| Release           | 153                   | Nein                     |

- `dom.audio_session.enabled`
  - : Zum Aktivieren auf `true` setzen.

#### HTMLMediaElement-Eigenschaften: audioTracks und videoTracks

Wenn diese Funktion aktiviert wird, stehen die Eigenschaften [`HTMLMediaElement.audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks) und [`HTMLMediaElement.videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks) für alle HTML-Medienelemente zur Verfügung. Da Firefox derzeit jedoch nicht mehrere Audio- und Videospuren unterstützt, funktionieren die häufigsten Anwendungsfälle für diese Eigenschaften nicht. Deshalb sind beide standardmäßig deaktiviert. Weitere Einzelheiten finden Sie unter [Firefox-Bug 1057233](https://bugzil.la/1057233).

| Release-Kanal     | Eingeführt in Version | Standardmäßig aktiviert? |
| ----------------- | --------------------- | ------------------------ |
| Nightly           | 33                    | Nein                     |
| Developer Edition | 33                    | Nein                     |
| Beta              | 33                    | Nein                     |
| Release           | 33                    | Nein                     |

- `media.track.enabled`
  - : Zum Aktivieren auf `true` setzen.

#### Asynchrones Hinzufügen zu und Entfernen aus SourceBuffer

Dadurch werden der Schnittstelle [`SourceBuffer`](/de/docs/Web/API/SourceBuffer) die Promise-basierten Methoden [`appendBufferAsync()`](/de/docs/Web/API/SourceBuffer/appendBufferAsync) und [`removeAsync()`](/de/docs/Web/API/SourceBuffer/removeAsync) zum Hinzufügen und Entfernen von Mediendaten hinzugefügt. Weitere Informationen finden Sie unter [Firefox-Bug 1280613](https://bugzil.la/1280613) und [Firefox-Bug 778617](https://bugzil.la/778617).

| Release-Kanal     | Eingeführt in Version | Standardmäßig aktiviert? |
| ----------------- | --------------------- | ------------------------ |
| Nightly           | 62                    | Nein                     |
| Developer Edition | 62                    | Nein                     |
| Beta              | 62                    | Nein                     |
| Release           | 62                    | Nein                     |

- `media.mediasource.experimental.enabled`
  - : Zum Aktivieren auf `true` setzen.

#### Strenge der AVIF-Konformitätsprüfung

Mit der Einstellung `image.avif.compliance_strictness` lässt sich steuern, wie _streng_ [AVIF](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image)-Bilder bei der Verarbeitung auf Konformität geprüft werden.
So können Firefox-Benutzer Bilder anzeigen, die in manchen anderen Browsern gerendert werden, auch wenn sie nicht vollständig spezifikationskonform sind.

| Release-Kanal     | Eingeführt in Version | Standardwert |
| ----------------- | --------------------- | ------------ |
| Nightly           | 92                    | 1            |
| Developer Edition | 92                    | 1            |
| Beta              | 92                    | 1            |
| Release           | 92                    | 1            |

- `image.avif.compliance_strictness`
  - : Numerischer Wert, der den _Strengegrad_ angibt. Zulässige Werte sind:
    - `0`: Tolerant. Bilder mit Verstößen gegen Empfehlungen („should“) oder Anforderungen („shall“) der Spezifikation werden akzeptiert, sofern sie sicher oder eindeutig interpretiert werden können.
    - `1` **(Standardwert)**: Gemischt. Verstöße gegen Anforderungen („shall“) werden abgelehnt, Verstöße gegen Empfehlungen („should“) jedoch zugelassen.
    - `2`: Streng. Sämtliche Verstöße gegen festgelegte Anforderungen oder Empfehlungen werden abgelehnt.

#### JPEG-XL-Unterstützung

Firefox unterstützt das Bildformat [JPEG XL](https://jpeg.org/jpegxl/), einen modernen Nachfolger von JPEG, der eine bessere Komprimierung und Bildqualität sowie neue Möglichkeiten wie Transparenz, Animationen und HDR-Unterstützung bietet.
Weitere Einzelheiten finden Sie unter [Firefox-Bug 1539075](https://bugzil.la/1539075) und [Firefox-Bug 2016688](https://bugzil.la/2016688).

In Firefox 149 wurde der bisherige C++-Bilddecoder für [JPEG XL](https://jpeg.org/jpegxl/) durch eine neue, auf Rust basierende Implementierung mit der Bibliothek `jxl-rs` ersetzt ([Firefox-Bug 1986393](https://bugzil.la/1986393)).

| Release-Kanal     | Eingeführt in Version | Standardmäßig aktiviert? |
| ----------------- | --------------------- | ------------------------ |
| Nightly           | 153                   | Ja                       |
| Developer Edition | 152                   | Nein                     |
| Beta              | 152                   | Nein                     |
| Release           | 152                   | Nein                     |

- `image.jxl.enabled`
  - : Zum Aktivieren auf `true` setzen.

### WebVR API (deaktiviert)

Die veraltete [WebVR API](/de/docs/Web/API/WebVR_API) soll entfernt werden.
Sie ist in allen Versionen standardmäßig deaktiviert ([Firefox-Bug 1750902](https://bugzil.la/1750902)).

| Release-Kanal     | Entfernt in Version | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 98                  | Nein                     |
| Developer Edition | 98                  | Nein                     |
| Beta              | 98                  | Nein                     |
| Release           | 98                  | Nein                     |

- `dom.vr.enabled`
  - : Zum Aktivieren auf `true` setzen.

### GeometryUtils-Methoden: convertPointFromNode(), convertRectFromNode() und convertQuadFromNode()

Die `GeometryUtils`-Methoden `convertPointFromNode()`, `convertRectFromNode()` und `convertQuadFromNode()` rechnen den angegebenen Punkt, das Rechteck beziehungsweise das Viereck vom Koordinatensystem des [`Node`](/de/docs/Web/API/Node), auf dem sie aufgerufen werden, in das eines anderen Knotens um. (Weitere Einzelheiten finden Sie unter [Firefox-Bug 918189](https://bugzil.la/918189).)

| Release-Kanal     | Eingeführt in Version | Standardmäßig aktiviert? |
| ----------------- | --------------------- | ------------------------ |
| Nightly           | 31                    | Nein                     |
| Developer Edition | 31                    | Nein                     |
| Beta              | 31                    | Nein                     |
| Release           | 31                    | Nein                     |

- `layout.css.convertFromNode.enabled`
  - : Zum Aktivieren auf `true` setzen.

### GeometryUtils-Methode: getBoxQuads()

Die `GeometryUtils`-Methode `getBoxQuads()` gibt die CSS-Boxen eines [`Node`](/de/docs/Web/API/Node) relativ zu einem anderen Knoten oder Viewport zurück. (Weitere Einzelheiten finden Sie unter [Firefox-Bug 917755](https://bugzil.la/917755).)

| Release-Kanal     | Eingeführt in Version | Standardmäßig aktiviert? |
| ----------------- | --------------------- | ------------------------ |
| Nightly           | 31                    | Nein                     |
| Developer Edition | 31                    | Nein                     |
| Beta              | 31                    | Nein                     |
| Release           | 31                    | Nein                     |

- `layout.css.getBoxQuads.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Payment Request API

#### Grundlegende Zahlungsabwicklung

Die [Payment Request API](/de/docs/Web/API/Payment_Request_API) unterstützt die Abwicklung webbasierter Zahlungen innerhalb von Webinhalten oder Apps. Aufgrund eines Fehlers, der beim Testen der Benutzeroberfläche aufgetreten ist, haben wir beschlossen, die Veröffentlichung dieser API zu verschieben, während mögliche Änderungen an der API diskutiert werden. Die Arbeit daran läuft weiter. (Weitere Einzelheiten finden Sie unter [Firefox-Bug 1318984](https://bugzil.la/1318984).)

| Release-Kanal     | Eingeführt in Version | Standardmäßig aktiviert? |
| ----------------- | --------------------- | ------------------------ |
| Nightly           | 55                    | Nein                     |
| Developer Edition | 55                    | Nein                     |
| Beta              | 55                    | Nein                     |
| Release           | 55                    | Nein                     |

- `dom.payments.request.enabled`
  - : Zum Aktivieren auf `true` setzen.
- `dom.payments.request.supportedRegions`
  - : Ländercodes als kommagetrennte Zulassungsliste von Regionen (z. B. `US,CA`).

### Web Share API

Mit der [Web Share API](/de/docs/Web/API/Web_Share_API) lassen sich Dateien, URLs und andere Daten von einer Website aus teilen.
Diese Funktion ist unter Android in allen Versionen aktiviert, auf Desktop-Systemen jedoch nur über eine Einstellung verfügbar (sofern nachfolgend nichts anderes angegeben ist).

| Release-Kanal     | Geändert in Version | Standardmäßig aktiviert?                    |
| ----------------- | ------------------- | ------------------------------------------- |
| Nightly           | 71                  | Nein (Standard). Ja (Windows ab Version 92) |
| Developer Edition | 71                  | Nein                                        |
| Beta              | 71                  | Nein                                        |
| Release           | 71                  | Nein (Desktop). Ja (Android).               |

- `dom.webshare.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Notifications API

Die Eigenschaft [`requireInteraction`](/de/docs/Web/API/Notification/requireInteraction) ist für Benachrichtigungen auf Windows-Systemen und in Nightly standardmäßig auf true gesetzt ([Firefox-Bug 1794475](https://bugzil.la/1794475)).

| Release-Kanal     | Geändert in Version | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 117                 | Ja                       |
| Developer Edition | 117                 | Nein                     |
| Beta              | 117                 | Nein                     |
| Release           | 117                 | Nur unter Windows        |

- `dom.webnotifications.requireinteraction.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Option `navigate` für Benachrichtigungen

Die Option `navigate` des Konstruktors [`Notification()`](/de/docs/Web/API/Notification/Notification) und von [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification) nimmt eine URL entgegen, die geöffnet wird, wenn der Benutzer auf die Benachrichtigung klickt. Damit benötigen Sie keinen Click-Handler mehr, nur um eine Seite zu öffnen. Die neue schreibgeschützte Eigenschaft [`Notification.navigate`](/de/docs/Web/API/Notification/navigate) gibt diese URL zurück. Wenn die Option gesetzt ist, werden die Ereignisse [`click`](/de/docs/Web/API/Notification/click_event) und [`notificationclick`](/de/docs/Web/API/ServiceWorkerGlobalScope/notificationclick_event) für diese Benachrichtigung nicht mehr ausgelöst. Jeder Eintrag in der Option [`actions`](/de/docs/Web/API/Notification/actions) kann eine eigene `navigate`-URL festlegen. Eine Aktionsschaltfläche ohne eigene URL löst weiterhin `notificationclick` aus, statt die URL der Benachrichtigung zu verwenden.
([Firefox-Bug 2066184](https://bugzil.la/2066184))

| Release-Kanal     | Eingeführt in Version | Standardmäßig aktiviert? |
| ----------------- | --------------------- | ------------------------ |
| Nightly           | 157                   | Nein                     |
| Developer Edition | 157                   | Nein                     |
| Beta              | 157                   | Nein                     |
| Release           | 157                   | Nein                     |

- `dom.webnotifications.navigate.enabled`
  - : Zum Aktivieren auf `true` setzen.

### HTML beim Parsen bereinigen

Methoden, die HTML mit der [HTML Sanitizer API](/de/docs/Web/API/HTML_Sanitizer_API) bereinigen, beispielsweise [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML), verwerfen unerwünschte Elemente und Attribute jetzt bereits beim Parsen des Markups, statt zunächst alles zu parsen und erst anschließend zu bereinigen. Das Ergebnis ist gleich, abgesehen davon, dass benachbarter Text jetzt in einem einzigen Textknoten landet, statt auf mehrere verteilt zu werden. ([Firefox-Bug 2062652](https://bugzil.la/2062652))

| Release-Kanal     | Eingeführt in Version | Standardmäßig aktiviert? |
| ----------------- | --------------------- | ------------------------ |
| Nightly           | 157                   | Nein                     |
| Developer Edition | 157                   | Nein                     |
| Beta              | 157                   | Nein                     |
| Release           | 157                   | Nein                     |

- `dom.security.sanitizer.while-parsing`
  - : Zum Aktivieren auf `true` setzen.

### Container Timing API

Die Container Timing API meldet, wann der Inhalt eines Container-Elements gerendert wurde. So können Sie die Renderzeit eines Bereichs der Seite messen, statt die des gesamten Viewports.
([Firefox-Bug 1940240](https://bugzil.la/1940240))

| Release-Kanal     | Geändert in Version | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 156                 | Nein                     |
| Developer Edition | 156                 | Nein                     |
| Beta              | 156                 | Nein                     |
| Release           | 156                 | Nein                     |

- `dom.enable_container_timing`
  - : Zum Aktivieren auf `true` setzen.

### Schlüsselkapselung in Web Crypto

Die [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) unterstützt ML-KEM, einen Algorithmus, mit dem sich zwei Parteien auf einen gemeinsamen geheimen Schlüssel einigen können und der auch gegen Angriffe durch Quantencomputer sicher bleiben soll. Eine Partei übergibt den öffentlichen Schlüssel der anderen Partei an die [`SubtleCrypto`](/de/docs/Web/API/SubtleCrypto)-Methoden `encapsulateKey()` oder `encapsulateBits()`. Diese geben den gemeinsamen Schlüssel sowie einen Chiffretext zurück, der an die andere Partei gesendet wird. Die andere Partei übergibt diesen Chiffretext und ihren eigenen privaten Schlüssel an `decapsulateKey()` oder `decapsulateBits()`, um denselben gemeinsamen Schlüssel zu erhalten.

Unterstützt werden die Algorithmusnamen `ML-KEM-512`, `ML-KEM-768` und `ML-KEM-1024`, die passenden [`usages`](/de/docs/Web/API/CryptoKey/usages) sowie die neuen Schlüsselformate `raw-public` und `raw-seed` für [`SubtleCrypto.importKey()`](/de/docs/Web/API/SubtleCrypto/importKey) und [`SubtleCrypto.exportKey()`](/de/docs/Web/API/SubtleCrypto/exportKey). ([Firefox-Bug 1943614](https://bugzil.la/1943614))

| Release-Kanal     | Eingeführt in Version | Standardmäßig aktiviert? |
| ----------------- | --------------------- | ------------------------ |
| Nightly           | 157                   | Ja                       |
| Developer Edition | 157                   | Nein                     |
| Beta              | 157                   | Nein                     |
| Release           | 157                   | Nein                     |

- `dom.webcrypto.encapsulation.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Web Custom Formats in der Async Clipboard API

Die [Clipboard API](/de/docs/Web/API/Clipboard_API) unterstützt benutzerdefinierte Zwischenablageformate. Web-Apps können dadurch mit den Methoden [`Clipboard.write()`](/de/docs/Web/API/Clipboard/write) beziehungsweise [`Clipboard.read()`](/de/docs/Web/API/Clipboard/read) benutzerdefinierte MIME-Typen mit dem Präfix `"web "` schreiben und lesen.
Dies wird auf Desktop-Systemen ab Firefox 154 und unter Android ab Firefox 156 unterstützt ([Firefox-Bug 1956304](https://bugzil.la/1956304) und [Firefox-Bug 2048545](https://bugzil.la/2048545)).

| Release-Kanal     | Geändert in Version | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 154                 | Ja (nur Desktop)         |
| Developer Edition | 154                 | Nein                     |
| Beta              | 154                 | Nein                     |
| Release           | 154                 | Nein                     |

- `dom.clipboard.customFormatSupport.enabled`
  - : Zum Aktivieren auf `true` setzen.

## Sicherheit und Datenschutz

### Kennzeichnung unsicherer Seiten

Die beiden Einstellungen `security.insecure_connection_text_*` fügen in der Adressleiste neben dem herkömmlichen Schlosssymbol den Texthinweis „Nicht sicher“ hinzu, wenn eine Seite unsicher geladen wird, also über {{Glossary("HTTP", "HTTP")}} statt über {{Glossary("HTTPS", "HTTPS")}}. Die Einstellung `browser.urlbar.trimHttps` entfernt das Präfix `https:` aus URLs in der Adressleiste. Weitere Einzelheiten finden Sie unter [Firefox-Bug 1853418](https://bugzil.la/1853418).

| Release-Kanal     | Eingeführt in Version | Standardmäßig aktiviert? |
| ----------------- | --------------------- | ------------------------ |
| Nightly           | 121                   | Ja                       |
| Developer Edition | 60                    | Nein                     |
| Beta              | 60                    | Nein                     |
| Release           | 60                    | Nein                     |

- `security.insecure_connection_text.enabled`
  - : Auf `true` setzen, um den Texthinweis beim normalen Surfen zu aktivieren.
- `security.insecure_connection_text.pbmode.enabled`
  - : Auf `true` setzen, um den Texthinweis im privaten Modus zu aktivieren.
- `browser.urlbar.trimHttps`
  - : Auf `true` setzen, um das Präfix `https:` aus URLs in der Adressleiste zu entfernen.

### Inhalte für Erwachsene mit `<meta name="rating">` einschränken

Das nicht standardisierte Element [`<meta name="rating">`](/de/docs/Web/HTML/Reference/Elements/meta) kann in eine Webseite aufgenommen werden, um ihren Inhalt als eingeschränkt beziehungsweise nur für Erwachsene geeignet zu kennzeichnen. Zum Zeitpunkt der Erstellung dieses Textes gibt es zwei mögliche Werte für `content`: `adult` ([von Google definiert](https://developers.google.com/search/docs/specialty/explicit/guidelines#add-metadata)) und `RTA-5042-1996-1400-1577-RTA` ([von ASACP definiert](https://www.rtalabel.org/?content=howto#top)). Beide haben dieselbe Wirkung. Weitere Optionen könnten künftig hinzukommen.

Die folgenden `<meta>`-Elemente sind gleichwertig:

```html
<meta name="rating" content="adult" />
<meta name="rating" content="RTA-5042-1996-1400-1577-RTA" />
```

Browser, die dieses Element erkennen, können Maßnahmen ergreifen, um den Zugriff auf den Inhalt einzuschränken. Die Firefox-Implementierung ersetzt die Seite durch den Inhalt von `about:restricted`. Dieser erklärt dem Benutzer, dass er versucht, eingeschränkte Inhalte aufzurufen, warum er sie nicht ansehen kann, und bietet eine Zurück-Schaltfläche, um zur vorherigen Seite zurückzukehren.

Weitere Einzelheiten finden Sie unter [Firefox-Bug 1991135](https://bugzil.la/1991135).

| Release-Kanal     | Eingeführt in Version | Standardmäßig aktiviert? |
| ----------------- | --------------------- | ------------------------ |
| Nightly           | 146                   | Nein                     |
| Developer Edition | 146                   | Nein                     |
| Beta              | 146                   | Nein                     |
| Release           | 146                   | Nein                     |

- `security.restrict_to_adults.always`
  - : Auf `true` setzen, um den Zugriff auf Webseiten einzuschränken, die sich durch ein `<meta name="rating">`-Element selbst als nur für Erwachsene geeignet kennzeichnen.
- `security.restrict_to_adults.respect_platform`
  - : Auf `true` setzen, um den Zugriff auf Webseiten, die sich durch ein `<meta name="rating">`-Element selbst als nur für Erwachsene geeignet kennzeichnen, nur dann einzuschränken, wenn auf dem zugrunde liegenden Betriebssystem entsprechende Jugendschutzeinstellungen aktiviert sind (beispielsweise wenn die macOS-Einstellungen unter _Inhalt & Datenschutz_ explizite Webinhalte einschränken).

### Permissions Policy / Feature Policy

Mit [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) können Webentwickler bestimmte Browserfunktionen und APIs gezielt aktivieren, deaktivieren und ihr Verhalten ändern. Sie ähnelt CSP, steuert jedoch Funktionen statt des Sicherheitsverhaltens.
In Firefox ist sie unter dem Namen **Feature Policy** implementiert, der in einer früheren Version der Spezifikation verwendet wurde.

Beachten Sie, dass unterstützte Richtlinien über das Attribut [`allow`](/de/docs/Web/HTML/Reference/Elements/iframe#allow) von `<iframe>`-Elementen festgelegt werden können, auch wenn die Benutzereinstellung nicht gesetzt ist.

| Release-Kanal     | Eingeführt in Version | Standardmäßig aktiviert? |
| ----------------- | --------------------- | ------------------------ |
| Nightly           | 65                    | Nein                     |
| Developer Edition | 65                    | Nein                     |
| Beta              | 65                    | Nein                     |
| Release           | 65                    | Nein                     |

- `dom.security.featurePolicy.header.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Privacy Preserving Attribution API (PPA)

Die [PPA API](https://support.mozilla.org/en-US/kb/privacy-preserving-attribution) bietet mithilfe des neuen Objekts `navigator.privateAttribution` mit den Methoden `saveImpression()` und `measureConversion()` eine Alternative zur Nachverfolgung von Benutzern für die Zuordnung von Werbewirkung. Weitere Informationen zu PPA finden Sie in der [ursprünglichen Erläuterung](https://github.com/mozilla/explainers/tree/main/archive/ppa-experiment) und im [Spezifikationsvorschlag](https://w3c.github.io/ppa/). Dieses Experiment kann für Websites über einen [Origin Trial](https://wiki.mozilla.org/Origin_Trials) oder im Browser durch Setzen der Einstellung auf `1` aktiviert werden. ([Firefox-Bug 1900929](https://bugzil.la/1900929))

| Release-Kanal     | Eingeführt in Version | Standardmäßig aktiviert? |
| ----------------- | --------------------- | ------------------------ |
| Nightly           | 128                   | Nein                     |
| Developer Edition | 128                   | Nein                     |
| Beta              | 128                   | Nein                     |
| Release           | 128                   | Nein                     |

- `dom.origin-trials.private-attribution.state`
  - : Zum Aktivieren auf `true` setzen.

## HTTP

### Integritätsrichtlinie für Stylesheet-Ressourcen

Die HTTP-Header {{httpheader("Integrity-Policy")}} und {{httpheader("Integrity-Policy-Report-Only")}} werden jetzt für Style-Ressourcen unterstützt. Damit können Websites [Subresource-Integrity-Garantien](/de/docs/Web/Security/Defenses/Subresource_Integrity) für Styles entweder erzwingen oder Verstöße gegen die Richtlinie lediglich melden.
Beachten Sie, dass Firefox Meldeendpunkte ignoriert und Verstöße in der Entwicklerkonsole protokolliert.
Wenn `Integrity-Policy` verwendet wird, blockiert der Browser das Laden von Styles, die über ein {{HTMLElement("link")}}-Element mit [`rel="stylesheet"`](/de/docs/Web/HTML/Reference/Attributes/rel#stylesheet) referenziert werden, sofern entweder das Attribut [`integrity`](/de/docs/Web/HTML/Reference/Elements/script#integrity) fehlt oder der Integritäts-Hash nicht mit der Ressource auf dem Server übereinstimmt.
([Firefox-Bug 1976656](https://bugzil.la/1976656))

| Release-Kanal     | Eingeführt in Version | Standardmäßig aktiviert? |
| ----------------- | --------------------- | ------------------------ |
| Nightly           | 142                   | Nein                     |
| Developer Edition | 142                   | Nein                     |
| Beta              | 142                   | Nein                     |
| Release           | 142                   | Nein                     |

- `security.integrity_policy.stylesheet.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Idempotency-Key

Der HTTP-Request-Header {{httpheader("Idempotency-Key")}} kann vom Client-Code einer Website verwendet werden, um {{HTTPMethod("POST")}}- oder {{HTTPMethod("PATCH")}}-Anfragen {{Glossary("idempotent", "idempotent")}} zu machen, sofern der Server dies unterstützt.
Laut Spezifikation sollte der Server dokumentieren und bekannt geben, welche Endpunkte diesen Header erfordern, welches Format der Schlüssel hat und welche Fehlerantworten zu erwarten sind.

Firefox fügt den Header _automatisch_ mit einem eindeutigen Schlüssel für jede neue `POST`-Anfrage hinzu, wenn der clientseitige Code der Seite ihn nicht bereits hinzugefügt hat.
Das vereinfacht den Client-Code für die Zusammenarbeit mit Servern, die diese Funktion unterstützen.

([Firefox-Bug 1830022](https://bugzil.la/1830022))

| Release-Kanal     | Eingeführt in Version | Standardmäßig aktiviert? |
| ----------------- | --------------------- | ------------------------ |
| Nightly           | 135                   | Nein                     |
| Developer Edition | 135                   | Nein                     |
| Beta              | 135                   | Nein                     |
| Release           | 135                   | Nein                     |

- `network.http.idempotencyKey.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Accept-Header mit dem MIME-Typ image/jxl

Der HTTP-Header [`Accept`](/de/docs/Web/HTTP/Reference/Headers/Accept) kann für [Standardanfragen und Bildanfragen](/de/docs/Web/HTTP/Guides/Content_negotiation/List_of_default_Accept_values) über eine Einstellung so konfiguriert werden, dass er die Unterstützung für den MIME-Typ `image/jxl` angibt.

| Release-Kanal     | Eingeführt in Version | Standardmäßig aktiviert? |
| ----------------- | --------------------- | ------------------------ |
| Nightly           | 128                   | Nein                     |
| Developer Edition | 128                   | Nein                     |
| Beta              | 128                   | Nein                     |
| Release           | 128                   | Nein                     |

- `image.jxl.enabled`
  - : Zum Aktivieren auf `true` setzen.

### SameSite=Lax als Standardwert

[`SameSite`-Cookies](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) haben standardmäßig den Wert `Lax`.
Mit dieser Einstellung werden Cookies nur gesendet, wenn ein Benutzer zur ursprünglichen Website navigiert, nicht jedoch bei websiteübergreifenden Unteranfragen, mit denen beispielsweise Bilder oder Frames in eine Drittanbieter-Website geladen werden.
Weitere Einzelheiten finden Sie unter [Firefox-Bug 1617609](https://bugzil.la/1617609).

| Release-Kanal     | Eingeführt in Version | Standardmäßig aktiviert? |
| ----------------- | --------------------- | ------------------------ |
| Nightly           | 69                    | Nein                     |
| Developer Edition | 69                    | Nein                     |
| Beta              | 69                    | Nein                     |
| Release           | 69                    | Nein                     |

- `network.cookie.sameSite.laxByDefault`
  - : Zum Aktivieren auf `true` setzen.

### Platzhalter in Access-Control-Allow-Headers umfasst Authorization nicht

[`Access-Control-Allow-Headers`](/de/docs/Web/HTTP/Reference/Headers/Access-Control-Allow-Headers) ist ein Antwort-Header für eine {{Glossary("Preflight_request", "CORS-Preflight-Anfrage")}}. Er gibt an, welche Anfrage-Header in der eigentlichen Anfrage enthalten sein dürfen.
Der Antwort-Header kann einen Platzhalter (`*`) enthalten. Dieser besagt, dass die eigentliche Anfrage alle Header außer `Authorization` enthalten darf.

Standardmäßig fügt Firefox den Header `Authorization` dennoch in die eigentliche Anfrage ein, nachdem es eine Antwort mit `Access-Control-Allow-Headers: *` erhalten hat.
Setzen Sie die Einstellung auf `false`, damit Firefox den Header `Authorization` nicht einfügt.
Weitere Einzelheiten finden Sie unter [Firefox-Bug 1687364](https://bugzil.la/1687364).

| Release-Kanal     | Eingeführt in Version | Standardmäßig aktiviert? |
| ----------------- | --------------------- | ------------------------ |
| Nightly           | 115                   | Ja                       |
| Developer Edition | 115                   | Ja                       |
| Beta              | 115                   | Ja                       |
| Release           | 115                   | Ja                       |

- `network.cors_preflight.authorization_covered_by_wildcard`
  - : Zum Aktivieren auf `true` setzen.

## Entwicklerwerkzeuge

Die Entwicklerwerkzeuge von Mozilla werden ständig weiterentwickelt. Wir experimentieren mit neuen Ideen, fügen Funktionen hinzu und testen sie in Nightly und Developer Edition, bevor sie in Beta und Release übernommen werden. Die folgenden Funktionen sind die derzeitigen experimentellen Funktionen der Entwicklerwerkzeuge.

**In diesem Veröffentlichungszyklus gibt es keine experimentellen Funktionen.**

## Siehe auch

- [Versionshinweise für Firefox-Entwickler](/de/docs/Mozilla/Firefox/Releases)
- [Firefox Nightly](https://www.firefox.com/en-US/channel/desktop/)
- [Firefox Developer Edition](https://www.firefox.com/en-US/channel/desktop/developer/)
