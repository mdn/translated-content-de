---
title: Experimentelle Funktionen in Firefox
short-title: Experimentelle Funktionen
slug: Mozilla/Firefox/Experimental_features
l10n:
  sourceCommit: fa3c5c29a9d186b9970860bff1f513d3fb4ca354
---

Diese Seite listet experimentelle und teilweise implementierte Funktionen von Firefox auf, einschließlich sich entwickelnder oder vorgeschlagener Webplattform-Standards. Jeder Eintrag enthält Informationen über die Builds, in denen eine Funktion enthalten ist (Nightly, Beta, Developer Edition oder Release), ob sie standardmäßig aktiviert ist und den Namen der **Einstellung**, mit der Sie die Funktion aktivieren oder konfigurieren können. Die Beschreibung jeder Funktion enthält auch Links zu relevanten [Bugzilla-Bugs](https://bugzilla.mozilla.org), die die Funktion implementieren oder aktivieren. Diese Informationen ermöglichen es Ihnen, experimentelle Funktionen auszuprobieren und Feedback zu geben, bevor sie offiziell veröffentlicht werden.

In Bezug auf den Lebenszyklus erscheinen neue Funktionen gewöhnlich zuerst in [Nightly](https://www.firefox.com/en-US/channel/desktop/#nightly), wo sie oft standardmäßig aktiviert sind, um frühes Feedback und Tests zu ermöglichen. Wenn keine größeren Probleme gefunden werden, werden sie in [Beta](https://www.firefox.com/en-US/channel/desktop/#beta) und [Developer Edition](https://www.firefox.com/en-US/channel/desktop/developer/) Vorab-Builds aufgenommen. Schließlich werden genehmigte Funktionen im stabilen [Release-Kanal](https://www.firefox.com/en-US/) veröffentlicht. Wenn eine Funktion in einer Veröffentlichung standardmäßig aktiviert ist, wird sie nicht mehr als experimentell angesehen und von dieser Seite entfernt.

Um diese Funktionen zu aktivieren, geben Sie `about:config` in die Adressleiste von Firefox ein, suchen Sie die zugehörige **Einstellung** und ändern Sie ihren Wert, der normalerweise ein Umschalten zwischen `true` und `false` ist. Abhängig von der Funktion müssen Sie möglicherweise den Browser neu starten, damit die Änderung wirksam wird. Weitere Informationen zur Verwaltung von Einstellungen in Firefox finden Sie im Support-Artikel zum [Firefox Konfigurations-Editor](https://support.mozilla.org/en-US/kb/about-config-editor-firefox).

## HTML

### Layout für `input type="search"`

Das Layout für `input type="search"` wurde aktualisiert. Dies bewirkt, dass ein Suchfeld ein Löschsymbol hat, sobald jemand zu tippen beginnt, um andere Browserimplementierungen anzupassen. (Siehe [Firefox Bug 558594](https://bugzil.la/558594) für weitere Details.)

| Veröffentlichungskanal | Version hinzugefügt | Standardmäßig aktiviert? |
| ---------------------- | ------------------- | ------------------------ |
| Nightly                | 81                  | Nein                     |
| Developer Edition      | 81                  | Nein                     |
| Beta                   | 81                  | Nein                     |
| Release                | 81                  | Nein                     |

- `layout.forms.input-type-search.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Passwortanzeige umschalten

HTML-Passworteingabeelemente ([`<input type="password">`](/de/docs/Web/HTML/Reference/Elements/input/password)) enthalten ein "Auge"-Symbol, das umgeschaltet werden kann, um das Passwort zu zeigen oder zu verbergen ([Firefox Bug 502258](https://bugzil.la/502258)).

| Veröffentlichungskanal | Version hinzugefügt | Standardmäßig aktiviert? |
| ---------------------- | ------------------- | ------------------------ |
| Nightly                | 96                  | Nein                     |
| Developer Edition      | 96                  | Nein                     |
| Beta                   | 96                  | Nein                     |
| Release                | 96                  | Nein                     |

- `layout.forms.reveal-password-button.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Zeitauswahl in `datetime-local` und `time` Eingabeelementen

Die HTML [`<input type="datetime-local">`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local) und [`<input type="time">`](/de/docs/Web/HTML/Reference/Elements/input/time) Elemente unterstützen nun eine Zeitauswahl. ([Firefox Bug 1726108](https://bugzil.la/1726108)).

| Veröffentlichungskanal | Version hinzugefügt | Standardmäßig aktiviert? |
| ---------------------- | ------------------- | ------------------------ |
| Nightly                | 144                 | Nein                     |
| Developer Edition      | 144                 | Nein                     |
| Beta                   | 144                 | Nein                     |
| Release                | 144                 | Nein                     |

- `dom.forms.datetime.timepicker`
  - : Auf `true` setzen, um zu aktivieren.

### `alpha` und `colorspace` Attribute in `color` Eingabeelementen

Das HTML [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color) Element unterstützt die [`alpha`](/de/docs/Web/HTML/Reference/Elements/input/color#alpha) & [`colorspace`](/de/docs/Web/HTML/Reference/Elements/input/color#colorspace) Attribute. ([Firefox Bug 1919718](https://bugzil.la/1919718)).

| Veröffentlichungskanal | Version hinzugefügt | Standardmäßig aktiviert? |
| ---------------------- | ------------------- | ------------------------ |
| Nightly                | 149                 | Ja                       |
| Developer Edition      | -                   | -                        |
| Beta                   | -                   | -                        |
| Release                | -                   | -                        |

- `dom.forms.html_color_picker.enabled`
  - : Auf `true` setzen, um zu aktivieren.

## CSS

### Hex-Boxen zur Anzeige von Steuerzeichen

Diese Funktion rendert Steuerzeichen (Unicode Kategorie Cc) außer _Tab_ (`U+0009`), _Zeilenumbruch_ (`U+000A`), _Formfeed_ (`U+000C`) und _Wagenrücklauf_ (`U+000D`) als ein Hex-Feld, wenn sie nicht erwartet werden. (Siehe [Firefox Bug 1099557](https://bugzil.la/1099557) für weitere Details.)

| Veröffentlichungskanal | Version hinzugefügt | Standardmäßig aktiviert? |
| ---------------------- | ------------------- | ------------------------ |
| Nightly                | 43                  | Ja                       |
| Developer Edition      | 43                  | Nein                     |
| Beta                   | 43                  | Nein                     |
| Release                | 43                  | Nein                     |

- `layout.css.control-characters.visible`
  - : Auf `true` setzen, um zu aktivieren.

### initial-letter Eigenschaft

Die {{cssxref("initial-letter")}} CSS-Eigenschaft ist Teil der [CSS Inline Layout](https://drafts.csswg.org/css-inline/) Spezifikation und ermöglicht es, anzugeben, wie gesenkte, erhöhte und versenkte initiale Buchstaben angezeigt werden sollen. (Siehe [Firefox Bug 1223880](https://bugzil.la/1223880) für weitere Details.)

| Veröffentlichungskanal | Version hinzugefügt | Standardmäßig aktiviert? |
| ---------------------- | ------------------- | ------------------------ |
| Nightly                | 50                  | Nein                     |
| Developer Edition      | 50                  | Nein                     |
| Beta                   | 50                  | Nein                     |
| Release                | 50                  | Nein                     |

- `layout.css.initial-letter.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### fit-content() Funktion

Die {{cssxref("fit-content()")}} Funktion bezieht sich auf {{cssxref("width")}} und andere Größenattribute. Diese Funktion wird bereits für CSS Grid Layout Spurgrößen gut unterstützt. (Siehe [Firefox Bug 1312588](https://bugzil.la/1312588) für weitere Details.)

| Veröffentlichungskanal | Version hinzugefügt | Standardmäßig aktiviert? |
| ---------------------- | ------------------- | ------------------------ |
| Nightly                | 91                  | Nein                     |
| Developer Edition      | 91                  | Nein                     |
| Beta                   | 91                  | Nein                     |
| Release                | 91                  | Nein                     |

- `layout.css.fit-content-function.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Scroll-getriebene Animationen

Früher "scroll-verknüpfte Animationen" genannt, hängt eine [scroll-getriebene Animation](/de/docs/Web/CSS/Guides/Scroll-driven_animations) von der Scroll-Position einer Scrollleiste statt von der Zeit oder einer anderen Dimension ab. Die {{cssxref('scroll-timeline-name')}} und {{cssxref('scroll-timeline-axis')}} Eigenschaften (und die {{cssxref('scroll-timeline')}} Kurzschreibweise) ermöglichen es, anzugeben, dass eine bestimmte Scrollleiste in einem bestimmten benannten Container als Quelle für eine scroll-getriebene Animation verwendet werden kann. Der Scroll-Timeline kann dann einer [Animation](/de/docs/Web/CSS/Guides/Animations) zugeordnet werden, indem die {{cssxref('animation-timeline')}} Eigenschaft auf den Namen gesetzt wird, der mit `scroll-timeline-name` definiert wurde.

Bei der Verwendung der {{cssxref('scroll-timeline')}} Kurzschreibweise muss die Reihenfolge der Eigenschaftswerte {{cssxref('scroll-timeline-name')}} gefolgt von {{cssxref('scroll-timeline-axis')}} sein. Sowohl die Lang- als auch die Kurzschreib-Eigenschaften sind hinter der Einstellung verfügbar. Alternativ können Sie die {{cssxref("animation-timeline/scroll")}} funktionale Notation mit {{cssxref('animation-timeline')}} verwenden, um anzugeben, dass eine Scrollleistenachse in einem übergeordneten Element für die Timeline verwendet wird.

Weitere Informationen finden Sie in [Firefox Bug 1807685](https://bugzil.la/1807685), [Firefox Bug 1804573](https://bugzil.la/1804573), [Firefox Bug 1809005](https://bugzil.la/1809005), [Firefox Bug 1676791](https://bugzil.la/1676791), [Firefox Bug 1754897](https://bugzil.la/1754897), [Firefox Bug 1817303](https://bugzil.la/1817303) und [Firefox Bug 1737918](https://bugzil.la/1737918).

Die {{cssxref('timeline-scope')}}, {{cssxref('animation-range-start')}} und {{cssxref('animation-range-end')}} Eigenschaften (und die {{cssxref('animation-range')}} Kurzschreibweise) werden noch nicht unterstützt. Weitere Informationen finden Sie in [Firefox Bug 1676779](https://bugzil.la/1676779).

| Veröffentlichungskanal | Version hinzugefügt | Standardmäßig aktiviert? |
| ---------------------- | ------------------- | ------------------------ |
| Nightly                | 136                 | Ja                       |
| Developer Edition      | 110                 | Nein                     |
| Beta                   | 110                 | Nein                     |
| Release                | 110                 | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### prefers-reduced-transparency Media-Feature

Das CSS {{cssxref("@media/prefers-reduced-transparency")}} Media-Feature lässt Sie erkennen, ob ein Benutzer die Einstellung aktiviert hat, um die Menge an transparenten oder durchscheinenden Schichteffekten auf seinem Gerät zu minimieren. Siehe ([Firefox Bug 1736914](https://bugzil.la/1736914)) für weitere Details.

| Veröffentlichungskanal | Version hinzugefügt | Standardmäßig aktiviert? |
| ---------------------- | ------------------- | ------------------------ |
| Nightly                | 113                 | Nein                     |
| Developer Edition      | 113                 | Nein                     |
| Beta                   | 113                 | Nein                     |
| Release                | 113                 | Nein                     |

- `layout.css.prefers-reduced-transparency.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### inverted-colors Media-Feature

Das CSS {{cssxref("@media/inverted-colors")}} Media-Feature lässt Sie erkennen, ob ein Benutzeragent oder das zugrunde liegende Betriebssystem die Farben umkehrt. Siehe ([Firefox Bug 1794628](https://bugzil.la/1794628)) für weitere Details.

| Veröffentlichungskanal | Version hinzugefügt | Standardmäßig aktiviert? |
| ---------------------- | ------------------- | ------------------------ |
| Nightly                | 114                 | Nein                     |
| Developer Edition      | 114                 | Nein                     |
| Beta                   | 114                 | Nein                     |
| Release                | 114                 | Nein                     |

- `layout.css.inverted-colors.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Benannte Ansicht-Fortschritt-Timelines Eigenschaft

Die CSS {{cssxref("view-timeline-name")}} Eigenschaft erlaubt es Ihnen, einem bestimmten Element einen Namen zu geben, der angibt, dass sein übergeordnetes Scrollerelement die Quelle einer Ansicht-Fortschritt-Timeline ist. Der Name kann dann `animation-timeline` zugewiesen werden, was das zugehörige Element animiert, während es sich durch den sichtbaren Bereich seines übergeordneten Scrollers bewegt. Siehe ([Firefox Bug 1737920](https://bugzil.la/1737920)) für weitere Details.

| Veröffentlichungskanal | Version hinzugefügt | Standardmäßig aktiviert? |
| ---------------------- | ------------------- | ------------------------ |
| Nightly                | 114                 | Nein                     |
| Developer Edition      | 114                 | Nein                     |
| Beta                   | 114                 | Nein                     |
| Release                | 114                 | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Anonyme Ansicht-Fortschritt-Timelines Funktion

Die CSS {{cssxref("animation-timeline/view")}} Funktion lässt Sie angeben, dass die `animation-timeline` für ein Element eine Ansicht-Fortschritt-Timeline ist, die das Element animiert, während es sich durch den sichtbaren Bereich seines übergeordneten Scrollers bewegt. Die Funktion definiert die Achse des übergeordneten Elements, das die Timeline liefert, zusammen mit dem Einsatz innerhalb des sichtbaren Bereichs, bei dem die Animation beginnt und beginnt. Siehe ([Firefox Bug 1808410](https://bugzil.la/1808410)) für weitere Details.

| Veröffentlichungskanal | Version hinzugefügt | Standardmäßig aktiviert? |
| ---------------------- | ------------------- | ------------------------ |
| Nightly                | 114                 | Nein                     |
| Developer Edition      | 114                 | Nein                     |
| Beta                   | 114                 | Nein                     |
| Release                | 114                 | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Vendor-präfixierte Transform-Eigenschaften

Die `-moz-` präfixierten [CSS Transform](/de/docs/Web/CSS/Guides/Transforms) Eigenschaften können deaktiviert werden, indem die `layout.css.prefixes.transforms` Einstellung auf `false` gesetzt wird. Die Absicht ist, diese zu deaktivieren, sobald die standardmäßigen CSS-Zoomeigenschaften gut unterstützt werden. ([Firefox Bug 1886134](https://bugzil.la/1886134), [Firefox Bug 1855763](https://bugzil.la/1855763)).

Konkreter, diese Einstellung deaktiviert die folgenden präfixierten Eigenschaften:

- `-moz-backface-visibility`
- `-moz-perspective`
- `-moz-perspective-origin`
- `-moz-transform`
- `-moz-transform-origin`
- `-moz-transform-style`

| Veröffentlichungskanal | Version hinzugefügt | Standardmäßig aktiviert? |
| ---------------------- | ------------------- | ------------------------ |
| Nightly                | 120                 | Ja                       |
| Developer Edition      | 120                 | Ja                       |
| Beta                   | 120                 | Ja                       |
| Release                | 120                 | Ja                       |

- `layout.css.prefixes.transforms`
  - : Auf `true` setzen, um zu aktivieren.

#### Relative Steuerpunkte in CSS `shape()` Kurvenkommandos

Sie können [`<relative-control-point>`](/de/docs/Web/CSS/Reference/Values/basic-shape/shape#relative-control-point) Werte verwenden, wenn Sie ein [`<curve-command>`](/de/docs/Web/CSS/Reference/Values/basic-shape/shape#curve-command) oder [`<smooth-command>`](/de/docs/Web/CSS/Reference/Values/basic-shape/shape#smooth-command) in einer CSS `shape()` Funktion angeben. Diese Werte ermöglichen es, Steuerpunkte anzugeben, die relativ zum Start- oder Endpunkt des aktuellen Kommandos oder relativ zur Ursprungsecke (oben links) des Containers, in dem die Form gezeichnet wird, positioniert sind. ([Firefox Bug 1921501](https://bugzil.la/1921501)).

| Veröffentlichungskanal | Version hinzugefügt | Standardmäßig aktiviert? |
| ---------------------- | ------------------- | ------------------------ |
| Nightly                | 146                 | Ja                       |
| Developer Edition      | 146                 | Nein                     |
| Beta                   | 146                 | Nein                     |
| Release                | 146                 | Nein                     |

- `layout.css.basic-shape-shape.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Symmetrische `letter-spacing`

Die CSS {{cssxref("letter-spacing")}} Eigenschaft teilt nun den angegebenen Buchstabenabstand gleichmäßig auf beiden Seiten jedes Zeichens auf. Dies unterscheidet sich vom bisherigen Verhalten, bei dem der Abstand hauptsächlich auf einer Seite hinzugefügt wird. Dieser Ansatz kann die Textabstände verbessern, insbesondere beim gemischtrichtungsorientierten Text. ([Firefox Bug 1891446](https://bugzil.la/1891446)).

| Veröffentlichungskanal | Version hinzugefügt | Standardmäßig aktiviert? |
| ---------------------- | ------------------- | ------------------------ |
| Nightly                | 128                 | Ja                       |
| Developer Edition      | 128                 | Ja                       |
| Beta                   | 127                 | Nein                     |
| Release                | 127                 | Nein                     |

- `layout.css.letter-spacing.model`
  - : Auf `true` setzen, um zu aktivieren.

### `calc()` Farbkanalunterstützung in relativen Farben

Die CSS {{cssxref("calc()")}} Funktion kann nun Farbkanäle in [relativen Farben](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors#using_math_functions) parsen, sodass Sie Änderungen an Farben in verschiedenen Farbräumen oder bei Verwendung unterschiedlicher funktionaler Notationen korrekt berechnen können [Firefox Bug 1889561](https://bugzil.la/1889561).

| Veröffentlichungskanal | Version hinzugefügt | Standardmäßig aktiviert? |
| ---------------------- | ------------------- | ------------------------ |
| Nightly                | 127                 | Ja                       |
| Developer Edition      | 127                 | Nein                     |
| Beta                   | 127                 | Nein                     |
| Release                | 127                 | Nein                     |

- `layout.css.relative-color-syntax.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Pseudoelemente nach Element-unterstützten-Pseudoelementen erlauben

Es wurde damit begonnen, [Pseudoelemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) wie {{cssxref("::first-letter")}} und {{cssxref("::before")}} an [Element-unterstützte-Pseudoelemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements#element-backed_pseudo-elements) wie {{cssxref("::details-content")}} und {{cssxref("::file-selector-button")}} anzuhängen.

Dies ermöglicht es Benutzern zum Beispiel, den ersten Buchstaben des {{htmlElement("details")}} Elements mit dem CSS-Selektor `::details-content::first-letter` zu stylen oder Inhalt vor einem {{HTMLElement("input") }} von [`type="file"`](/de/docs/Web/HTML/Reference/Elements/input/file) mit dem CSS-Selektor `::file-selector-button::before` hinzuzufügen.

Derzeit kann nur die Unterstützung für `::details-content::first-letter` über `@supports(::details-content::first-letter)` geparst werden. Das `::file-selector-button` Pseudoelement ist noch nicht als Element-gestütztes Pseudoelement markiert, daher gibt es keine Möglichkeit, dies zu testen. ([Firefox Bug 1953557](https://bugzil.la/1953557), [Firefox Bug 1941406](https://bugzil.la/1941406)).

| Veröffentlichungskanal | Version hinzugefügt | Standardmäßig aktiviert? |
| ---------------------- | ------------------- | ------------------------ |
| Nightly                | 138                 | Nein                     |
| Developer Edition      | 138                 | Nein                     |
| Beta                   | 138                 | Nein                     |
| Release                | 138                 | Nein                     |

### `:heading` und `:heading()` Pseudo-Klassen

Die {{cssxref(":heading")}} Pseudo-Klasse erlaubt es Ihnen, alle [Überschriftselemente](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) (`<h1>`-`<h6>`) auf einmal zu stylen, anstatt sie einzeln anzusprechen. Die {{cssxref(":heading()")}} funktionale Pseudo-Klasse erlaubt es, Überschriftselemente zu stylen, die einer kommagetrennten Liste von ganzen Zahlen entsprechen, die die Überschriftenebenen repräsentieren. ([Firefox Bug 1974386](https://bugzil.la/1974386) & [Firefox Bug 1984310](https://bugzil.la/1984310)).

| Veröffentlichungskanal | Version hinzugefügt | Standardmäßig aktiviert? |
| ---------------------- | ------------------- | ------------------------ |
| Nightly                | 142                 | Nein                     |
| Developer Edition      | 142                 | Nein                     |
| Beta                   | 142                 | Nein                     |
| Release                | 142                 | Nein                     |

- `layout.css.heading-selector.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### `text-decoration-trim`

Die CSS `text-decoration-trim` Eigenschaft ermöglicht es, {{cssxref("text-decoration")}} Start- und Endversätze anzugeben, um Textdekorationen zu verkürzen, zu verlängern oder die Position verschieben zu können ([Firefox Bug 1979915](https://bugzil.la/1979915)).

| Veröffentlichungskanal | Version hinzugefügt | Standardmäßig aktiviert? |
| ---------------------- | ------------------- | ------------------------ |
| Nightly                | 145                 | Nein                     |
| Developer Edition      | 145                 | Nein                     |
| Beta                   | 145                 | Nein                     |
| Release                | 145                 | Nein                     |

- `layout.css.text-decoration-trim.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### `@custom-media` Regel

Die {{cssxref("@custom-media")}} CSS-Regel definiert Aliase für lange oder komplexe Medientypen-Abfragen. Anstatt die gleiche hart kodierte `<media-query-list>` in mehreren `@media`-Regeln zu wiederholen, kann sie einmal in einer `@custom-media` Regel definiert und im Stylesheet bei Bedarf referenziert werden. ([Firefox Bug 1744292](https://bugzil.la/1744292)).

| Veröffentlichungskanal | Version hinzugefügt | Standardmäßig aktiviert? |
| ---------------------- | ------------------- | ------------------------ |
| Nightly                | 146                 | Nein                     |
| Developer Edition      | 146                 | Nein                     |
| Beta                   | 146                 | Nein                     |
| Release                | 146                 | Nein                     |

- `layout.css.custom-media.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### `<attr-type>` Werte in `attr()` CSS-Funktion

Die {{cssxref("attr")}} CSS-Funktion unterstützt jetzt [`<attr-type>`](/de/docs/Web/CSS/Reference/Values/attr#attr-type) Werte. Dies ermöglicht es Ihnen, anzugeben, wie ein Attributwert in einen CSS-Wert geparst wird und diese Werte direkt aus [`data-*`](/de/docs/Web/HTML/How_to/Use_data_attributes) zu ziehen. ([Firefox Bug 1986631](https://bugzil.la/1986631), [Firefox Bug 1998245](https://bugzil.la/1998245))

| Veröffentlichungskanal | Version hinzugefügt | Standardmäßig aktiviert? |
| ---------------------- | ------------------- | ------------------------ |
| Nightly                | 149                 | Nein                     |
| Developer Edition      | 149                 | Nein                     |
| Beta                   | 149                 | Nein                     |
| Release                | 149                 | Nein                     |

- `layout.css.attr.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### `color-mix()` akzeptiert mehrere Farbargrumente

Die [`color-mix()`](/de/docs/Web/CSS/Reference/Values/color_value/color-mix) CSS-Funktion unterstützt jetzt mehrere [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value) Werte anstelle von nur zwei. Dies ermöglicht es, viele Farben zu mischen und die Prozentsätze jeder einzelnen festzulegen. ([Firefox Bug 2007772](https://bugzil.la/2007772)).

| Veröffentlichungskanal | Version hinzugefügt | Standardmäßig aktiviert? |
| ---------------------- | ------------------- | ------------------------ |
| Nightly                | 150                 | Ja                       |
| Developer Edition      | 149                 | Nein                     |
| Beta                   | 149                 | Nein                     |
| Release                | 149                 | Nein                     |

- `layout.css.color-mix-multi-color.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Medienbezogene Pseudo-Klassen

Die medienbezogenen Pseudo-Klassen {{cssxref(":buffering")}}, {{cssxref(":muted")}}, {{cssxref(":paused")}}, {{cssxref(":playing")}}, {{cssxref(":seeking")}}, {{cssxref(":stalled")}}, und {{cssxref(":volume-locked")}} ermöglichen es, {{htmlelement("audio")}} und {{htmlelement("video")}} Elemente basierend auf ihrem aktuellen Zustand zu stylen, wie zum Beispiel beim Abspielen oder Pausieren. ([Firefox Bug 1707584](https://bugzil.la/1707584), [Firefox Bug 2014512](https://bugzil.la/2014512)).

| Veröffentlichungskanal | Version hinzugefügt | Standardmäßig aktiviert? |
| ---------------------- | ------------------- | ------------------------ |
| Nightly                | 150                 | Ja                       |
| Developer Edition      | 149                 | Nein                     |
| Beta                   | 149                 | Nein                     |
| Release                | 149                 | Nein                     |

- `dom.media.pseudo-classes.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### `@container style()` Anfragen

Die [`@container`](/de/docs/Web/CSS/Reference/At-rules/@container) CSS-Regel unterstützt [`style()`](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries) Anfragen. Damit können Sie prüfen, ob ein Container eine gültige CSS-Deklaration, eine CSS-Eigenschaft oder eine benutzerdefinierte Eigenschaft hat, und dementsprechend Stile auf seine Kinder anwenden. ([Firefox Bug 2014404](https://bugzil.la/2014404)).

| Veröffentlichungskanal | Version hinzugefügt | Standardmäßig aktiviert? |
| ---------------------- | ------------------- | ------------------------ |
| Nightly                | 149                 | Ja                       |
| Developer Edition      | 149                 | Nein                     |
| Beta                   | 149                 | Nein                     |
| Release                | 149                 | Nein                     |

- `layout.css.style-queries.enabled`
  - : Auf `true` setzen, um zu aktivieren.

## SVG

**Keine experimentellen Funktionen in diesem Veröffentlichungszyklus.**

## JavaScript

**Keine experimentellen Funktionen in diesem Veröffentlichungszyklus.**

## APIs

### Benachrichtigungsaktionen und maxActions Eigenschaften

Die [`actions`](/de/docs/Web/API/Notification/actions) Lese-eigenschaft und die [`maxActions`](/de/docs/Web/API/Notification/maxActions_static) statische Lese-eigenschaft des [`Notification`](/de/docs/Web/API/Notification) Interfaces werden in Nightly auf dem Desktop unterstützt. Diese enthalten die Benachrichtigungsaktionen, die mit [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification) gesetzt wurden, und die maximale Anzahl von Aktionen, die gesetzt werden können. ([Firefox Bug 1225110](https://bugzil.la/1225110), [Firefox Bug 1963263](https://bugzil.la/1963263)).

| Veröffentlichungskanal | Version hinzugefügt | Standardmäßig aktiviert? |
| ---------------------- | ------------------- | ------------------------ |
| Nightly                | 138                 | Ja (nur Desktop)         |
| Developer Edition      | 138                 | Nein                     |
| Beta                   | 138                 | Nein                     |
| Release                | 138                 | Nein                     |

- `dom.webnotifications.actions.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Grafiken: Canvas, WebGL und WebGPU

#### WebGL: Entwurfserweiterungen

Wenn diese Einstellung aktiviert ist, werden alle WebGL-Erweiterungen, die sich derzeit im "Entwurfs"-Status befinden und getestet werden, zur Verwendung freigeschaltet. Derzeit gibt es keine WebGL-Erweiterungen, die von Firefox getestet werden.

#### WebGPU API

Die [WebGPU API](/de/docs/Web/API/WebGPU_API) bietet Low-Level-Unterstützung für Berechnungen und Grafik-Rendering unter Verwendung der [Graphics Processing Unit](https://en.wikipedia.org/wiki/Graphics_Processing_Unit) (GPU) des Geräts oder Computers des Benutzers. Ab Version 142 ist dies in allen Kontexten außer Service-Workern unter Windows aktiviert. Ab Version 147 ist dies in allen Browserkontexten außer Service-Workern auf macOS auf Apple Silicon aktiviert. Für andere Plattformen wie Linux und macOS auf Intel Silicon ist es in Nightly aktiviert. Siehe [Firefox Bug 1602129](https://bugzil.la/1602129) für unseren Fortschritt bei dieser API.

| Veröffentlichungskanal | Version hinzugefügt | Standardmäßig aktiviert?                                                         |
| ---------------------- | ------------------- | -------------------------------------------------------------------------------- |
| Nightly                | 141                 | Ja                                                                               |
| Developer Edition      | 141                 | Nein (Ja auf Windows und macOS auf Apple Silicon, Service-Worker ausgeschlossen) |
| Beta                   | 141                 | Nein (Ja auf Windows und macOS auf Apple Silicon, Service-Worker ausgeschlossen) |
| Release                | 141                 | Nein (Ja auf Windows und macOS auf Apple Silicon, Service-Worker ausgeschlossen) |

- `dom.webgpu.enabled`
  - : Auf `true` setzen, um zu aktivieren (in Nightly und auf Windows in allen Veröffentlichungen aktiviert)
- `dom.webgpu.service-workers.enabled`
  - : Auf `true` setzen, um zu aktivieren (in Nightly aktiviert)

### Reporting API Unterstützung für CSP-Verstöße

Die [Reporting API](/de/docs/Web/API/Reporting_API) unterstützt nun das Melden von [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) Verstößen.

[`Report`](/de/docs/Web/API/Report)-Instanzen, die vom [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) Interface zurückgegeben werden, können jetzt einen `type`-Wert von `"csp-violation"` und eine `body`-Eigenschaft, die eine Instanz des [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody) Interfaces enthält, haben. Dies ermöglicht es, CSP-Verstöße innerhalb einer Webseite zu melden.

CSP-Verstoßberichte können auch an entfernte Endpunkte gesendet werden, die im CSP {{CSP("report-to")}}-Direktivnamen angegeben sind — Endpunktnamen und entsprechende URLs müssen zuerst in den {{httpheader('Reporting-Endpoints')}} oder {{httpheader('Report-To')}} HTTP-Response-Headern definiert sein. Der Bericht ist eine Serialisierung des oben beschriebenen [`Report`](/de/docs/Web/API/Report)-Objekts mit einer `body`-Eigenschaft, die eine Serialisierung einer [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody) Instanz ist.

Dieser Verstoßbericht ersetzt einen ähnlichen CSP-spezifischen Mechanismus zum Senden von Verstoßberichten, der das CSP {{CSP("report-uri")}}-Direktiv verwendet, um die URL des Berichts-Endpunkts zu setzen, und ein [CSP-spezifisches JSON-Verstoßberichtsformat](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/report-uri#violation_report_syntax) hat. ([Firefox Bug 1391243](https://bugzil.la/1391243)).

| Veröffentlichungskanal | Version hinzugefügt | Standardmäßig aktiviert? |
| ---------------------- | ------------------- | ------------------------ |
| Nightly                | 130                 | Nein                     |
| Developer Edition      | 130                 | Nein                     |
| Beta                   | 130                 | Nein                     |
| Release                | 130                 | Nein                     |

- `dom.reporting.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### WebRTC und Medien

Die folgenden experimentellen Funktionen umfassen diejenigen, die in Medien-APIs wie der [WebRTC API](/de/docs/Web/API/WebRTC_API), der [Web Audio API](/de/docs/Web/API/Web_Audio_API), der [Media Source Extensions API](/de/docs/Web/API/Media_Source_Extensions_API), der [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API) und der [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) zu finden sind.

#### HTMLMediaElement Eigenschaften: audioTracks und videoTracks

Wenn diese Funktion aktiviert wird, werden die Eigenschaften [`HTMLMediaElement.audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks) und [`HTMLMediaElement.videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks) zu allen HTML-Medienelementen hinzugefügt. Da Firefox jedoch derzeit keine Unterstützung für mehrere Audio- und Videospuren bietet, funktionieren die am häufigsten verwendeten Anwendungsfälle dieser Eigenschaften nicht, sodass sie standardmäßig beide deaktiviert sind. Weitere Informationen finden Sie in [Firefox Bug 1057233](https://bugzil.la/1057233).

| Veröffentlichungskanal | Version hinzugefügt | Standardmäßig aktiviert? |
| ---------------------- | ------------------- | ------------------------ |
| Nightly                | 33                  | Nein                     |
| Developer Edition      | 33                  | Nein                     |
| Beta                   | 33                  | Nein                     |
| Release                | 33                  | Nein                     |

- `media.track.enabled`
  - : Auf `true` setzen, um zu aktivieren.

#### Asynchrone SourceBuffer add und remove

Dies fügt die versprochenen Methoden [`appendBufferAsync()`](/de/docs/Web/API/SourceBuffer/appendBufferAsync) und [`removeAsync()`](/de/docs/Web/API/SourceBuffer/removeAsync) zum Hinzufügen und Entfernen von Mediensource-Puffern zur [`SourceBuffer`](/de/docs/Web/API/SourceBuffer) Schnittstelle hinzu. Siehe [Firefox Bug 1280613](https://bugzil.la/1280613) und [Firefox Bug 778617](https://bugzil.la/778617) für weitere Informationen.

| Veröffentlichungskanal | Version hinzugefügt | Standardmäßig aktiviert? |
| ---------------------- | ------------------- | ------------------------ |
| Nightly                | 62                  | Nein                     |
| Developer Edition      | 62                  | Nein                     |
| Beta                   | 62                  | Nein                     |
| Release                | 62                  | Nein                     |

- `media.mediasource.experimental.enabled`
  - : Auf `true` setzen, um zu aktivieren.

#### AVIF Konformitätsstriktheit

Die `image.avif.compliance_strictness` Einstellung kann verwendet werden, um die _Striktheit_ bei der Verarbeitung von [AVIF](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) Bildern zu steuern. Dies ermöglicht Firefox-Benutzern, Bilder anzuzeigen, die in einigen anderen Browsern dargestellt werden, auch wenn sie nicht strikt konform sind.

| Veröffentlichungskanal | Version hinzugefügt | Standardwert |
| ---------------------- | ------------------- | ------------ |
| Nightly                | 92                  | 1            |
| Developer Edition      | 92                  | 1            |
| Beta                   | 92                  | 1            |
| Release                | 92                  | 1            |

- `image.avif.compliance_strictness`
  - : Numerischer Wert, der ein Maß an Striktheit anzeigt. Erlaubte Werte sind:
    - `0`: Permissiv. Akzeptieren Sie Bilder mit Spezifikationsverletzungen sowohl in Empfehlungen ("sollte"-Sprache) als auch Anforderungen ("muss"-Sprache"), vorausgesetzt, sie können sicher oder eindeutig interpretiert werden.
    - `1` **(Standard)**: Gemischt. Verweigern Sie die Verletzung von Anforderungen ("muss"), erlauben Sie jedoch die Verletzung von Empfehlungen ("sollte").
    - `2`: Strikt. Verweigern Sie jegliche Verstöße gegen spezifizierte Anforderungen oder Empfehlungen.

#### JPEG XL Unterstützung

Firefox unterstützt [JPEG XL](https://jpeg.org/jpegxl/) Bilder, wenn diese Funktion aktiviert ist. Weitere Informationen finden Sie in [Firefox Bug 1539075](https://bugzil.la/1539075).

Beachten Sie, dass, wie unten dargestellt, die Funktion nur in Nightly-Builds verfügbar ist (unabhängig davon, ob die Einstellung gesetzt ist).

| Veröffentlichungskanal | Version hinzugefügt | Standardmäßig aktiviert? |
| ---------------------- | ------------------- | ------------------------ |
| Nightly                | 90                  | Nein                     |
| Developer Edition      | —                   | —                        |
| Beta                   | —                   | —                        |
| Release                | —                   | —                        |

- `image.jxl.enabled`
  - : Auf `true` setzen, um zu aktivieren.

#### Dokument Bild-im-Bild API

Die [Dokument Bild-im-Bild API](/de/docs/Web/API/Document_Picture-in-Picture_API) ermöglicht es, ein immer oben gehaltenes Fenster zu öffnen, das mit beliebigem HTML-Inhalt gefüllt werden kann, wie ein Video mit benutzerdefinierten Steuerungen oder eine Reihe von Streams, die die Teilnehmer eines Videokonferenzanrufs zeigen. Weitere Informationen finden Sie in [Firefox Bug 1858562](https://bugzil.la/1858562).

| Veröffentlichungskanal | Version hinzugefügt | Standardmäßig aktiviert? |
| ---------------------- | ------------------- | ------------------------ |
| Nightly                | 148                 | Ja                       |
| Developer Edition      | 148                 | Nein                     |
| Beta                   | 148                 | Nein                     |
| Release                | 148                 | Nein                     |

- `dom.documentpip.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### WebVR API (Deaktiviert)

Die veraltete [WebVR API](/de/docs/Web/API/WebVR_API) befindet sich auf dem Weg zur Entfernung. Sie ist standardmäßig in allen Builds deaktiviert. [Firefox Bug 1750902](https://bugzil.la/1750902).

| Veröffentlichungskanal | Version entfernt | Standardmäßig aktiviert? |
| ---------------------- | ---------------- | ------------------------ |
| Nightly                | 98               | Nein                     |
| Developer Edition      | 98               | Nein                     |
| Beta                   | 98               | Nein                     |
| Release                | 98               | Nein                     |

- `dom.vr.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### GeometryUtils Methoden: convertPointFromNode(), convertRectFromNode() und convertQuadFromNode()

Die `GeometryUtils` Methoden `convertPointFromNode()`, `convertRectFromNode()`, und `convertQuadFromNode()` kartieren den gegebenen Punkt, das Rechteck oder das Viereck vom [`Node`](/de/docs/Web/API/Node), auf dem sie aufgerufen werden, zu einem anderen Knoten. (Siehe [Firefox Bug 918189](https://bugzil.la/918189) für weitere Details.)

| Veröffentlichungskanal | Version hinzugefügt | Standardmäßig aktiviert? |
| ---------------------- | ------------------- | ------------------------ |
| Nightly                | 31                  | Ja                       |
| Developer Edition      | 31                  | Nein                     |
| Beta                   | 31                  | Nein                     |
| Release                | 31                  | Nein                     |

- `layout.css.convertFromNode.enable`
  - : Auf `true` setzen, um zu aktivieren.

### GeometryUtils Methode: getBoxQuads()

Die `GeometryUtils` Methode `getBoxQuads()` gibt die CSS-Boxen für einen [`Node`](/de/docs/Web/API/Node) relativ zu einem anderen Knoten oder Viewport zurück. (Siehe [Firefox Bug 917755](https://bugzil.la/917755) für weitere Details.)

| Veröffentlichungskanal | Version hinzugefügt | Standardmäßig aktiviert? |
| ---------------------- | ------------------- | ------------------------ |
| Nightly                | 31                  | Ja                       |
| Developer Edition      | 31                  | Nein                     |
| Beta                   | 31                  | Nein                     |
| Release                | 31                  | Nein                     |

- `layout.css.getBoxQuads.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Payment Request API

#### Primäre Zahlungsabwicklung

Die [Payment Request API](/de/docs/Web/API/Payment_Request_API) bietet Unterstützung für die Abwicklung von webbasierten Zahlungen innerhalb von Webinhalten oder Apps. Aufgrund eines Fehlers, der während des Testens der Benutzeroberfläche auftrat, haben wir beschlossen, den Versand dieser API zu verschieben, während Diskussionen über mögliche Änderungen an der API geführt werden. Die Arbeit daran geht weiter. (Siehe [Firefox Bug 1318984](https://bugzil.la/1318984) für weitere Details.)

| Veröffentlichungskanal | Version hinzugefügt | Standardmäßig aktiviert? |
| ---------------------- | ------------------- | ------------------------ |
| Nightly                | 55                  | Nein                     |
| Developer Edition      | 55                  | Nein                     |
| Beta                   | 55                  | Nein                     |
| Release                | 55                  | Nein                     |

- `dom.payments.request.enabled`
  - : Auf `true` setzen, um zu aktivieren.
- `dom.payments.request.supportedRegions`
  - : Ländercodes als kommagetrennte Whitelist von Regionen (z.B. `US,CA`).

### WebShare API

Die [Web Share API](/de/docs/Web/API/Web_Share_API) ermöglicht das Teilen von Dateien, URLs und anderen Daten von einer Website aus. Diese Funktion ist auf Android in allen Builds aktiviert, jedoch hinter einer Einstellung auf dem Desktop (sofern nicht anders angegeben).

| Veröffentlichungskanal | Version geändert | Standardmäßig aktiviert?                    |
| ---------------------- | ---------------- | ------------------------------------------- |
| Nightly                | 71               | Nein (Standard). Ja (Windows ab Version 92) |
| Developer Edition      | 71               | Nein                                        |
| Beta                   | 71               | Nein                                        |
| Release                | 71               | Nein (Desktop). Ja (Android).               |

- `dom.webshare.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Notifications API

Benachrichtigungen haben die [`requireInteraction`](/de/docs/Web/API/Notification/requireInteraction) Eigenschaft standardmäßig auf Windows-Systemen und in der Nightly-Version auf `true` gesetzt ([Firefox Bug 1794475](https://bugzil.la/1794475)).

| Veröffentlichungskanal | Version geändert | Standardmäßig aktiviert? |
| ---------------------- | ---------------- | ------------------------ |
| Nightly                | 117              | Ja                       |
| Developer Edition      | 117              | Nein                     |
| Beta                   | 117              | Nein                     |
| Release                | 117              | Nur Windows              |

- `dom.webnotifications.requireinteraction.enabled`
  - : Auf `true` setzen, um zu aktivieren.

## Sicherheit und Datenschutz

### Nicht sichere Seitenkennzeichnung

Die beiden `security.insecure_connection_text_*` Präferenzen fügen ein "Nicht sicher"-Textlabel in der Adressleiste neben dem traditionellen Schlosssymbol hinzu, wenn eine Seite unsicher geladen wird (das heißt, unter Verwendung von {{Glossary("HTTP", "HTTP")}} anstelle von {{Glossary("HTTPS", "HTTPS")}}). Die Präferenz `browser.urlbar.trimHttps` schneidet das `https:`-Präfix aus den Adressleisten-URLs ab. Siehe [Firefox Bug 1853418](https://bugzil.la/1853418) für weitere Details.

| Veröffentlichungskanal | Version hinzugefügt | Standardmäßig aktiviert? |
| ---------------------- | ------------------- | ------------------------ |
| Nightly                | 121                 | Ja                       |
| Developer Edition      | 60                  | Nein                     |
| Beta                   | 60                  | Nein                     |
| Release                | 60                  | Nein                     |

- `security.insecure_connection_text.enabled`
  - : Auf `true` setzen, um das Textlabel für den normalen Browsing-Modus zu aktivieren.
- `security.insecure_connection_text.pbmode.enabled`
  - : Auf `true` setzen, um das Textlabel für den Privaten-Modus zu aktivieren.
- `browser.urlbar.trimHttps`
  - : Auf `true` setzen, um das `https:`-Präfix aus den Adressleisten-URLs zu entfernen.

### Einschränkung von Inhalten für Erwachsene mit `<meta name="rating">`

Das nicht standardisierte [`<meta name="rating">`](/de/docs/Web/HTML/Reference/Elements/meta) Element kann in eine Webseite eingebunden werden, um den Inhalt der Seite als eingeschränkt/erwachsen zu kennzeichnen. Zum Zeitpunkt des Schreibens gibt es zwei mögliche `content`-Werte, `adult` ([definiert von Google](https://developers.google.com/search/docs/specialty/explicit/guidelines#add-metadata)) und `RTA-5042-1996-1400-1577-RTA` ([definiert von ASACP](https://www.rtalabel.org/?content=howto#top)), die den gleichen Effekt haben (weitere Optionen können in Zukunft hinzugefügt werden).

Die folgenden `<meta>` Elemente sind äquivalent:

```html
<meta name="rating" content="adult" />
<meta name="rating" content="RTA-5042-1996-1400-1577-RTA" />
```

Browser, die dieses Element erkennen, können dann Schritte unternehmen, um Benutzer daran zu hindern, den Inhalt anzuzeigen. Die Implementierung von Firefox ersetzt die Seite durch den Inhalt, der unter `about:restricted` gefunden wurde, welcher dem Benutzer erklärt, dass er versucht, eingeschränkten Inhalt anzuzeigen, erklärt, warum er ihn nicht anzeigen kann, und einen Zurück-Button gibt, um zur vorhergesehenen Seite zurückzukehren.

Siehe [Firefox Bug 1991135](https://bugzil.la/1991135) für weitere Details.

| Veröffentlichungskanal | Version hinzugefügt | Standardmäßig aktiviert? |
| ---------------------- | ------------------- | ------------------------ |
| Nightly                | 146                 | Nein                     |
| Developer Edition      | 146                 | Nein                     |
| Beta                   | 146                 | Nein                     |
| Release                | 146                 | Nein                     |

- `security.restrict_to_adults.always`
  - : Auf `true` setzen, um Zugriff auf Webseiten einzuschränken, die sich selbst als erwachsenen Inhalt durch Einbeziehung eines `<meta name="rating">` Elements identifizieren.
- `security.restrict_to_adults.respect_platform`
  - : Auf `true` setzen, um Zugriff auf Webseiten einzuschränken, die sich selbst als erwachsenen Inhalt durch Einbeziehung eines `<meta name="rating">` Elements identifizieren, nur wenn geeignete elterliche Kontrolle auf dem zugrunde liegenden Betriebssystem aktiviert sind (zum Beispiel sind die macOS _Inhalt & Datenschutz_ Einstellungen so eingestellt, dass explizite Webinhalte eingeschränkt werden).

### Berechtigungspolitik / Feature-Policy

[Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) ermöglicht es Webentwicklern, das Verhalten bestimmter Funktionen und APIs im Browser selektiv zu aktivieren, zu deaktivieren oder zu ändern. Es ähnelt CSP, steuert jedoch Funktionen anstelle von Sicherheitsverhalten. Dies ist in Firefox als **Feature Policy** implementiert, der Name, der in einer früheren Version der Spezifikation verwendet wurde.

Beachten Sie, dass unterstützte Richtlinien durch das [`allow`](/de/docs/Web/HTML/Reference/Elements/iframe#allow) Attribut auf `<iframe>` Elementen gesetzt werden können, selbst wenn die Benutzereinstellung nicht gesetzt ist.

| Veröffentlichungskanal | Version hinzugefügt | Standardmäßig aktiviert? |
| ---------------------- | ------------------- | ------------------------ |
| Nightly                | 65                  | Nein                     |
| Developer Edition      | 65                  | Nein                     |
| Beta                   | 65                  | Nein                     |
| Release                | 65                  | Nein                     |

- `dom.security.featurePolicy.header.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Datenschutz-fördernde Attribution API (PPA)

[PPA API](https://support.mozilla.org/en-US/kb/privacy-preserving-attribution) bietet eine Alternative zur Benutzerverfolgung für die Zuordnung von Anzeigen mithilfe des neuen `navigator.privateAttribution` Objekts mit den Methoden `saveImpression()` und `measureConversion()`. Lesen Sie mehr über PPA [in der ursprünglichen Erklärung](https://github.com/mozilla/explainers/tree/main/archive/ppa-experiment) und die [vorgeschlagene Spezifikation](https://w3c.github.io/ppa/). Dieses Experiment kann auf Websites über [Origin Trial](https://wiki.mozilla.org/Origin_Trials) oder im Browser durch Setzen der Präferenz auf `1` aktiviert werden. ([Firefox Bug 1900929](https://bugzil.la/1900929)).

| Veröffentlichungskanal | Version hinzugefügt | Standardmäßig aktiviert? |
| ---------------------- | ------------------- | ------------------------ |
| Nightly                | 128                 | Nein                     |
| Developer Edition      | 128                 | Nein                     |
| Beta                   | 128                 | Nein                     |
| Release                | 128                 | Nein                     |

- `dom.origin-trials.private-attribution.state`
  - : Auf `true` setzen, um zu aktivieren.

## HTTP

### Integritätsrichtlinie für Stylesheet-Ressourcen

Die {{httpheader("Integrity-Policy")}} und {{httpheader("Integrity-Policy-Report-Only")}} HTTP-Header werden jetzt für Stile unterstützt. Diese ermöglichen es Websites, entweder [Subresource-Integritätsgarantien](/de/docs/Web/Security/Defenses/Subresource_Integrity) für Stile durchzusetzen oder Verstöße gegen die Richtlinie nur zu berichten.
Beachten Sie, dass Firefox Berichts-Endpunkte ignoriert und Verstöße in die Entwickler-Konsole protokolliert.
Wenn `Integrity-Policy` verwendet wird, blockiert der Browser das Laden von Stilen, die in einem {{HTMLElement("link")}} Element mit [`rel="stylesheet"`](/de/docs/Web/HTML/Reference/Attributes/rel#stylesheet) referenziert werden und entweder das [`integrity`](/de/docs/Web/HTML/Reference/Elements/script#integrity) Attribut fehlen oder einen Integritätshash haben, der nicht mit der Ressource auf dem Server übereinstimmt.
([Firefox Bug 1976656](https://bugzil.la/1976656)).

| Veröffentlichungskanal | Version hinzugefügt | Standardmäßig aktiviert? |
| ---------------------- | ------------------- | ------------------------ |
| Nightly                | 142                 | Nein                     |
| Developer Edition      | 142                 | Nein                     |
| Beta                   | 142                 | Nein                     |
| Release                | 142                 | Nein                     |

- `security.integrity_policy.stylesheet.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Storage Access Header

Die {{httpheader("Sec-Fetch-Storage-Access")}} und {{httpheader("Activate-Storage-Access")}} HTTP-Header werden jetzt unterstützt, was einen effizienteren [Storage Access API](/de/docs/Web/API/Storage_Access_API) Workflow ermöglicht. ([Firefox Bug 1991688](https://bugzil.la/1991688)).

Im Workflow nur mit JavaScript muss eine Drittressource angefordert und geladen werden, um eine Speicherausgabeberechtigung für einen bestimmten Kontext zu aktivieren (wie z.B. ein neuer Browser-Tab). Dies ist auch dann erforderlich, wenn die Berechtigung bereits erteilt wurde. Die Speicherzugriffsheader erlauben es dem Browser, den Berechtigungsstatus für den bestimmten Kontext anzugeben, sodass der Server die Aktivierung einer bereits erteilten Berechtigung anfordern kann. Das vermeidet den Aufwand des unnötigen Abrufens und Ladens der Ressource.

| Veröffentlichungskanal | Version hinzugefügt | Standardmäßig aktiviert? |
| ---------------------- | ------------------- | ------------------------ |
| Nightly                | 145                 | Ja                       |
| Developer Edition      | 145                 | Nein                     |
| Beta                   | 145                 | Nein                     |
| Release                | 145                 | Nein                     |

- `dom.storage_access.headers.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Idempotency-Key

Der {{httpheader("Idempotency-Key")}} HTTP-Request-Header kann von der Client-Seite verwendet werden, um eine {{HTTPMethod("POST")}} oder {{HTTPMethod("PATCH")}} Anfragen {{Glossary("idempotent", "idempotent")}} zu machen, wenn sie mit einem unterstützenden Server verwendet werden. Die Spezifikation gibt an, dass der Server dokumentieren und bekannt geben sollte, welche Endpunkte diesen Header erfordern, das Format des Schlüssels, und die erwarteten Fehlerantworten.

Firefox fügt den Header automatisch mit einem eindeutigen Schlüssel für jede neue `POST` Anfrage hinzu, wenn er nicht bereits von der Seite clientseitig hinzugefügt wurde. Dies vereinfacht den clientseitigen Code, der erforderlich ist, um mit Servern zu arbeiten, die das Merkmal unterstützen.

([Firefox Bug 1830022](https://bugzil.la/1830022)).

| Veröffentlichungskanal | Version hinzugefügt | Standardmäßig aktiviert? |
| ---------------------- | ------------------- | ------------------------ |
| Nightly                | 135                 | Nein                     |
| Developer Edition      | 135                 | Nein                     |
| Beta                   | 135                 | Nein                     |
| Release                | 135                 | Nein                     |

- `network.http.idempotencyKey.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Accept-Header mit MIME-Typ image/jxl

Der HTTP [`Accept`](/de/docs/Web/HTTP/Reference/Headers/Accept) Header in [Standard-Anfragen und Bildanfragen](/de/docs/Web/HTTP/Guides/Content_negotiation/List_of_default_Accept_values) kann über eine Einstellung konfiguriert werden, um Unterstützung für den `image/jxl` MIME-Typ anzuzeigen.

| Veröffentlichungskanal | Version hinzugefügt | Standardmäßig aktiviert? |
| ---------------------- | ------------------- | ------------------------ |
| Nightly                | 128                 | Nein                     |
| Developer Edition      | 128                 | Nein                     |
| Beta                   | 128                 | Nein                     |
| Release                | 128                 | Nein                     |

- `image.jxl.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### SameSite=Lax standardmäßig

[`SameSite` Cookies](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) haben einen Standardwert von `Lax`. Mit dieser Einstellung werden Cookies nur gesendet, wenn ein Benutzer zur Ursprungsseite navigiert, nicht für Cross-Site-Unteranfragen, um Bilder oder Frames auf einer Drittanbieterseite zu laden usw. Weitere Einzelheiten finden Sie in [Firefox Bug 1617609](https://bugzil.la/1617609).

| Veröffentlichungskanal | Version hinzugefügt | Standardmäßig aktiviert? |
| ---------------------- | ------------------- | ------------------------ |
| Nightly                | 69                  | Nein                     |
| Developer Edition      | 69                  | Nein                     |
| Beta                   | 69                  | Nein                     |
| Release                | 69                  | Nein                     |

- `network.cookie.sameSite.laxByDefault`
  - : Auf `true` setzen, um zu aktivieren.

### Access-Control-Allow-Headers Wildcard deckt Authorization nicht ab

Die [`Access-Control-Allow-Headers`](/de/docs/Web/HTTP/Reference/Headers/Access-Control-Allow-Headers) ist ein Antwortheader auf eine {{Glossary("Preflight_request", "CORS Preflight-Anfrage")}}, die angibt, welche Anfrageheader in der Endanfrage enthalten sein dürfen. Die Antwortdirektive kann ein Wildcard (`*`) enthalten, das angibt, dass die Endanfrage alle Header außer dem `Authorization` Header enthalten darf.

Standardmäßig schließt Firefox den `Authorization` Header in die Endanfrage ein, nachdem eine Antwort mit `Access-Control-Allow-Headers: *` erhalten wurde. Setzen Sie die Einstellung auf `false`, um sicherzustellen, dass Firefox den `Authorization` Header nicht einschließt. Weitere Details finden Sie in [Firefox Bug 1687364](https://bugzil.la/1687364).

| Veröffentlichungskanal | Version hinzugefügt | Standardmäßig aktiviert? |
| ---------------------- | ------------------- | ------------------------ |
| Nightly                | 115                 | Ja                       |
| Developer Edition      | 115                 | Ja                       |
| Beta                   | 115                 | Ja                       |
| Release                | 115                 | Ja                       |

- `network.cors_preflight.authorization_covered_by_wildcard`
  - : Auf `true` setzen, um zu aktivieren.

## Entwicklertools

Mozillas Entwicklertools entwickeln sich ständig weiter. Wir experimentieren mit neuen Ideen, fügen neue Funktionen hinzu und testen sie in den Nightly- und Developer Edition-Kanälen, bevor wir sie durch Beta und Release durchlaufen lassen. Die unten stehenden Funktionen sind der aktuelle Bestand an experimentellen Entwicklertool-Funktionen.

**Keine experimentellen Funktionen in diesem Veröffentlichungszyklus.**

## Siehe auch

- [Firefox Entwickler Veröffentlichungshinweise](/de/docs/Mozilla/Firefox/Releases)
- [Firefox Nightly](https://www.firefox.com/en-US/channel/desktop/)
- [Firefox Developer Edition](https://www.firefox.com/en-US/channel/desktop/developer/)
