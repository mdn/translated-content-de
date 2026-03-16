---
title: Experimentelle Funktionen in Firefox
short-title: Experimentelle Funktionen
slug: Mozilla/Firefox/Experimental_features
l10n:
  sourceCommit: efe381c1cc01bbcc2f89e40c97890917c7575c9b
---

Diese Seite listet die experimentellen und teilweise implementierten Funktionen von Firefox auf, einschließlich sich entwickelnder oder vorgeschlagener Webplattform-Standards. Jedes unten stehende Element enthält Informationen über die Builds, in denen eine Funktion enthalten ist (Nightly, Beta, Developer Edition oder Release), ob sie standardmäßig aktiviert ist oder nicht, und den Namen der **Einstellung**, die Sie verwenden können, um die Funktion zu aktivieren oder zu konfigurieren. Die Beschreibung jeder Funktion enthält auch Links zu relevanten [Bugzilla-Bugs](https://bugzilla.mozilla.org), die die Funktion implementieren oder aktivieren. Diese Informationen ermöglichen es Ihnen, experimentelle Funktionen auszuprobieren und Feedback zu geben, bevor sie offiziell veröffentlicht werden.

Im Hinblick auf den Lebenszyklus erscheinen neue Funktionen normalerweise zuerst in [Nightly](https://www.firefox.com/en-US/channel/desktop/#nightly), wo sie oft standardmäßig aktiviert sind, um frühzeitig Feedback und Tests zu erhalten. Wenn keine größeren Probleme festgestellt werden, sind sie in [Beta](https://www.firefox.com/en-US/channel/desktop/#beta) und [Developer Edition](https://www.firefox.com/en-US/channel/desktop/developer/) Vorab-Builds enthalten. Schließlich werden genehmigte Funktionen im [stabilen Release](https://www.firefox.com/en-US/) Kanal veröffentlicht. Wenn eine Funktion in einer Veröffentlichung standardmäßig aktiviert ist, wird sie nicht mehr als experimentell angesehen und von dieser Seite entfernt.

Um diese Funktionen zu aktivieren, geben Sie `about:config` in die Firefox-Adressleiste ein, suchen Sie die zugehörige **Einstellung** und ändern Sie deren Wert, der normalerweise zwischen `true` und `false` umgeschaltet wird. Je nach Funktion müssen Sie möglicherweise den Browser neu starten, damit die Änderung wirksam wird. Weitere Informationen über das Verwalten von Einstellungen in Firefox finden Sie im [Firefox Configuration Editor](https://support.mozilla.org/en-US/kb/about-config-editor-firefox) Support-Artikel.

## HTML

### Layout für input type="search"

Das Layout für `input type="search"` wurde aktualisiert. Dies bewirkt, dass ein Suchfeld ein Löschsymbol hat, sobald jemand anfängt, darin zu tippen, um andere Browser-Implementierungen zu entsprechen. (Siehe [Firefox-Bug 558594](https://bugzil.la/558594) für weitere Details.)

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 81                   | No                       |
| Developer Edition | 81                   | No                       |
| Beta              | 81                   | No                       |
| Release           | 81                   | No                       |

- `layout.forms.input-type-search.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Umschalten der Passwortanzeige

HTML-Passwort-Eingabeelemente ([`<input type="password">`](/de/docs/Web/HTML/Reference/Elements/input/password)) enthalten ein "Augensymbol", das umgeschaltet werden kann, um den Passworttext anzuzeigen oder zu verbergen ([Firefox-Bug 502258](https://bugzil.la/502258)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 96                   | No                       |
| Developer Edition | 96                   | No                       |
| Beta              | 96                   | No                       |
| Release           | 96                   | No                       |

- `layout.forms.reveal-password-button.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Zeitauswahl in `datetime-local` und `time` Eingabeelementen

Die HTML Elemente [`<input type="datetime-local">`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local) und [`<input type="time">`](/de/docs/Web/HTML/Reference/Elements/input/time) unterstützen eine Zeitauswahl. ([Firefox-Bug 1726108](https://bugzil.la/1726108)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 144                  | No                       |
| Developer Edition | 144                  | No                       |
| Beta              | 144                  | No                       |
| Release           | 144                  | No                       |

- `dom.forms.datetime.timepicker`
  - : Setzen Sie auf `true`, um zu aktivieren.

### `alpha` und `colorspace` Attribute in `color` Eingabeelementen

Das HTML [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color) Element unterstützt [`alpha`](/de/docs/Web/HTML/Reference/Elements/input/color#alpha) & [`colorspace`](/de/docs/Web/HTML/Reference/Elements/input/color#colorspace) Attribute. ([Firefox-Bug 1919718](https://bugzil.la/1919718)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 149                  | Yes                      |
| Developer Edition | -                    | -                        |
| Beta              | -                    | -                        |
| Release           | -                    | -                        |

- `dom.forms.html_color_picker.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

## CSS

### Hex-Boxen zur Anzeige streunender Steuerzeichen

Diese Funktion rendert Steuerzeichen (Unicode-Kategorie Cc) außer _Tab_ (`U+0009`), _Zeilenumbruch_ (`U+000A`), _Seitenumbruch_ (`U+000C`) und _Wagenrücklauf_ (`U+000D`) als Hex-Box, wenn sie unerwartet sind. (Siehe [Firefox-Bug 1099557](https://bugzil.la/1099557) für weitere Details.)

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 43                   | Yes                      |
| Developer Edition | 43                   | No                       |
| Beta              | 43                   | No                       |
| Release           | 43                   | No                       |

- `layout.css.control-characters.visible`
  - : Setzen Sie auf `true`, um zu aktivieren.

### initial-letter Eigenschaft

Die {{cssxref("initial-letter")}} CSS-Eigenschaft ist Teil der [CSS Inline Layout](https://drafts.csswg.org/css-inline/) Spezifikation und ermöglicht es Ihnen zu spezifizieren, wie fallende, erhöhte und versunkene Anfangsbuchstaben angezeigt werden. (Siehe [Firefox-Bug 1223880](https://bugzil.la/1223880) für weitere Details.)

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 50                   | No                       |
| Developer Edition | 50                   | No                       |
| Beta              | 50                   | No                       |
| Release           | 50                   | No                       |

- `layout.css.initial-letter.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### fit-content() Funktion

Die {{cssxref("fit-content()")}} Funktion, wie sie auf {{cssxref("width")}} und andere Größen-Eigenschaften angewendet wird. Diese Funktion wird bereits gut für die Größenbestimmung von CSS Grid Layout Tracks unterstützt. (Siehe [Firefox-Bug 1312588](https://bugzil.la/1312588) für weitere Details.)

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 91                   | No                       |
| Developer Edition | 91                   | No                       |
| Beta              | 91                   | No                       |
| Release           | 91                   | No                       |

- `layout.css.fit-content-function.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Scroll-gesteuerte Animationen

Früher als "scroll-verknüpfte Animationen" bezeichnet, hängt eine [scroll-gesteuerte Animation](/de/docs/Web/CSS/Guides/Scroll-driven_animations) von der Scrollposition eines Scrollbalkens ab, anstatt von Zeit oder einer anderen Dimension. Die {{cssxref('scroll-timeline-name')}} und {{cssxref('scroll-timeline-axis')}} Eigenschaften (sowie die {{cssxref('scroll-timeline')}} Kurzschrifts-Eigenschaft) ermöglichen es Ihnen zu spezifizieren, dass ein bestimmter Scrollbalken in einem bestimmten benannten Container als Quelle für eine scroll-gesteuerte Animation verwendet werden kann. Die Scroll-Zeitleiste kann dann mit einer [Animation](/de/docs/Web/CSS/Guides/Animations) verknüpft werden, indem die {{cssxref('animation-timeline')}} Eigenschaft auf den in `scroll-timeline-name` definierten Namenswert gesetzt wird.

Wenn Sie die {{cssxref('scroll-timeline')}} Kurzschrifts-Eigenschaft verwenden, muss die Reihenfolge der Eigenschaftswerte {{cssxref('scroll-timeline-name')}} gefolgt von {{cssxref('scroll-timeline-axis')}} sein. Sowohl die Langschrifts- als auch die Kurzschrifts-Eigenschaften sind hinter der Einstellung verfügbar. Alternativ können Sie die {{cssxref("animation-timeline/scroll")}} funktionale Notation mit {{cssxref('animation-timeline')}} verwenden, um anzugeben, dass eine Scrollbalkenachse in einem Vorfahrelement für die Zeitleiste verwendet wird.

Für weitere Informationen siehe [Firefox-Bug 1807685](https://bugzil.la/1807685), [Firefox-Bug 1804573](https://bugzil.la/1804573), [Firefox-Bug 1809005](https://bugzil.la/1809005), [Firefox-Bug 1676791](https://bugzil.la/1676791), [Firefox-Bug 1754897](https://bugzil.la/1754897), [Firefox-Bug 1817303](https://bugzil.la/1817303) und [Firefox-Bug 1737918](https://bugzil.la/1737918).

Die {{cssxref('timeline-scope')}}, {{cssxref('animation-range-start')}} und {{cssxref('animation-range-end')}} Eigenschaften (sowie die {{cssxref('animation-range')}} Kurzschrifts-Eigenschaft) werden noch nicht unterstützt. Für weitere Informationen siehe [Firefox-Bug 1676779](https://bugzil.la/1676779).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 136                  | Yes                      |
| Developer Edition | 110                  | No                       |
| Beta              | 110                  | No                       |
| Release           | 110                  | No                       |

- `layout.css.scroll-driven-animations.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### prefers-reduced-transparency Media-Feature

Das CSS {{cssxref("@media/prefers-reduced-transparency")}} Media-Feature lässt Sie erkennen, ob ein Benutzer die Einstellung aktiviert hat, um die Menge an transparenten oder durchscheinenden Schichteffekten auf ihrem Gerät zu minimieren. (Siehe [Firefox-Bug 1736914](https://bugzil.la/1736914) für weitere Details.)

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 113                  | No                       |
| Developer Edition | 113                  | No                       |
| Beta              | 113                  | No                       |
| Release           | 113                  | No                       |

- `layout.css.prefers-reduced-transparency.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### inverted-colors Media-Feature

Das CSS {{cssxref("@media/inverted-colors")}} Media-Feature lässt Sie erkennen, ob ein Benutzeragent oder das zugrunde liegende Betriebssystem Farben invertiert. (Siehe [Firefox-Bug 1794628](https://bugzil.la/1794628) für weitere Details.)

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 114                  | No                       |
| Developer Edition | 114                  | No                       |
| Beta              | 114                  | No                       |
| Release           | 114                  | No                       |

- `layout.css.inverted-colors.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Named view progress timelines Eigenschaft

Die CSS {{cssxref("view-timeline-name")}} Eigenschaft ermöglicht es Ihnen, einem bestimmten Element einen Namen zu geben, der identifiziert, dass das Scrolling-Element seines Vorfahren die Quelle einer View-Progress-Timeline ist. Der Name kann dann der `animation-timeline` zugewiesen werden, die dann das zugehörige Element animiert, während es sich durch den sichtbaren Bereich seines Vorfahren-Scrolling-Elements bewegt. (Siehe [Firefox-Bug 1737920](https://bugzil.la/1737920) für weitere Details.)

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 114                  | No                       |
| Developer Edition | 114                  | No                       |
| Beta              | 114                  | No                       |
| Release           | 114                  | No                       |

- `layout.css.scroll-driven-animations.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Anonyme view progress timelines Funktion

Die CSS {{cssxref("animation-timeline/view")}} Funktion lässt Sie angeben, dass die `animation-timeline` für ein Element eine View-Progress-Timeline ist, die das Element animiert, während es sich durch den sichtbaren Bereich seines Vorfahren-Scrolling-Elements bewegt. Die Funktion definiert die Achse des übergeordneten Elements, das die Zeitleiste liefert, zusammen mit dem Versatz innerhalb des sichtbaren Bereichs, bei dem die Animation beginnt und endet. (Siehe [Firefox-Bug 1808410](https://bugzil.la/1808410) für weitere Details.)

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 114                  | No                       |
| Developer Edition | 114                  | No                       |
| Beta              | 114                  | No                       |
| Release           | 114                  | No                       |

- `layout.css.scroll-driven-animations.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Anbieterspezifische Transformations-Eigenschaften

Die `-moz-` Präfix CSS-Transformations-Eigenschaften können deaktiviert werden, indem die Einstellung `layout.css.prefixes.transforms` auf `false` gesetzt wird. Die Absicht ist, diese zu deaktivieren, sobald die standardmäßigen CSS-Zoom-Eigenschaften gut unterstützt werden. ([Firefox-Bug 1886134](https://bugzil.la/1886134), [Firefox-Bug 1855763](https://bugzil.la/1855763)).

Konkret wird diese Einstellung die folgenden präfixierten Eigenschaften deaktivieren:

- `-moz-backface-visibility`
- `-moz-perspective`
- `-moz-perspective-origin`
- `-moz-transform`
- `-moz-transform-origin`
- `-moz-transform-style`

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 120                  | Yes                      |
| Developer Edition | 120                  | Yes                      |
| Beta              | 120                  | Yes                      |
| Release           | 120                  | Yes                      |

- `layout.css.prefixes.transforms`
  - : Setzen Sie auf `true`, um zu aktivieren.

#### Relative Kontrollpunkte in CSS `shape()` Kurvenbefehlen

Sie können [`<relative-control-point>`](/de/docs/Web/CSS/Reference/Values/basic-shape/shape#relative-control-point) Werte verwenden, wenn Sie einen [`<curve-command>`](/de/docs/Web/CSS/Reference/Values/basic-shape/shape#curve-command) oder [`<smooth-command>`](/de/docs/Web/CSS/Reference/Values/basic-shape/shape#smooth-command) in einer CSS `shape()` Funktion angeben. Diese Werte lassen Sie Kontrollpunkte spezifizieren, die relativ zur Start- oder Endpunkt des aktuellen Befehls oder relativ zum Ursprung (obere linke Ecke) des Containers positioniert sind, in dem die Form gezeichnet wird. ([Firefox-Bug 1921501](https://bugzil.la/1921501)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 146                  | Yes                      |
| Developer Edition | 146                  | No                       |
| Beta              | 146                  | No                       |
| Release           | 146                  | No                       |

- `layout.css.basic-shape-shape.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Symmetrisches `letter-spacing`

Die CSS {{cssxref("letter-spacing")}} Eigenschaft teilt jetzt den angegebenen Buchstabenabstand gleichmäßig auf beiden Seiten jedes Zeichens auf. Dies ist anders als das aktuelle Verhalten, bei dem der Abstand hauptsächlich zu einer Seite hinzugefügt wird. Dieser Ansatz kann die Textverteilung verbessern, insbesondere bei gemischt-richtungalen Texten. ([Firefox-Bug 1891446](https://bugzil.la/1891446)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 128                  | Yes                      |
| Developer Edition | 128                  | Yes                      |
| Beta              | 127                  | No                       |
| Release           | 127                  | No                       |

- `layout.css.letter-spacing.model`
  - : Setzen Sie auf `true`, um zu aktivieren.

### `calc()` Farbkanal-Unterstützung in relativen Farben

Die CSS {{cssxref("calc()")}} Funktion kann jetzt Farbkanäle in [relativen Farben](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors#using_math_functions) parsen, wodurch Sie Änderungen an Farben in verschiedenen Farbräumen oder während der Verwendung unterschiedlicher funktionaler Notationen korrekt berechnen können. [Firefox-Bug 1889561](https://bugzil.la/1889561).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 127                  | Yes                      |
| Developer Edition | 127                  | No                       |
| Beta              | 127                  | No                       |
| Release           | 127                  | No                       |

- `layout.css.relative-color-syntax.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Erlaube Pseudo-Elemente nach elementgestützten Pseudo-Elementen

Es wurde begonnen, Pseudo-Elemente wie {{cssxref("::first-letter")}} und {{cssxref("::before")}} nach elementgestützten Pseudo-Elementen wie {{cssxref("::details-content")}} und {{cssxref("::file-selector-button")}} zuzulassen.

Dies wird es Benutzern ermöglichen, zum Beispiel den ersten Buchstaben des {{htmlElement("details")}} Elements zu stylen, indem der CSS-Selektor `::details-content::first-letter` verwendet wird oder Inhalt vor einer {{HTMLElement("input") }} des Typs [`type="file"`](/de/docs/Web/HTML/Reference/Elements/input/file) hinzufügen, indem der CSS-Selektor `::file-selector-button::before` verwendet wird.

Derzeit kann nur die Unterstützung für `::details-content::first-letter` unter Verwendung von `@supports(::details-content::first-letter)` geparst werden. Das `::file-selector-button` Pseudo-Element ist noch nicht als elementgestütztes Pseudo-Element markiert, daher gibt es keine Möglichkeit, dies zu testen. ([Firefox-Bug 1953557](https://bugzil.la/1953557), [Firefox-Bug 1941406](https://bugzil.la/1941406)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 138                  | No                       |
| Developer Edition | 138                  | No                       |
| Beta              | 138                  | No                       |
| Release           | 138                  | No                       |

### `:heading` und `:heading()` Pseudo-Klassen

Die {{cssxref(":heading")}} Pseudo-Klasse ermöglicht es Ihnen, alle [Überschriftselemente](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) (`<h1>`-`<h6>`) auf einmal zu stylen, anstatt sie einzeln anzusprechen. Die {{cssxref(":heading()")}} funktionale Pseudo-Klasse ermöglicht es Ihnen, Überschriftselemente zu stylen, die einer durch Kommata getrennten Liste von Ganzzahlen entsprechen, die die Ebenen der Überschriften entsprechen. ([Firefox-Bug 1974386](https://bugzil.la/1974386) & [Firefox-Bug 1984310](https://bugzil.la/1984310)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 142                  | No                       |
| Developer Edition | 142                  | No                       |
| Beta              | 142                  | No                       |
| Release           | 142                  | No                       |

- `layout.css.heading-selector.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### `text-decoration-trim`

Die CSS `text-decoration-trim` Eigenschaft erlaubt es Ihnen, {{cssxref("text-decoration")}} Start- und Endversätze zu kürzen, zu verlängern oder die Position der Textdekorationen im Verhältnis zum Text zu verschieben ([Firefox-Bug 1979915](https://bugzil.la/1979915)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 145                  | No                       |
| Developer Edition | 145                  | No                       |
| Beta              | 145                  | No                       |
| Release           | 145                  | No                       |

- `layout.css.text-decoration-trim.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### `@custom-media` At-Regel

Die {{cssxref("@custom-media")}} CSS At-Regel definiert Aliase für lange oder komplexe Media Queries. Anstatt die gleiche fest codierte `<media-query-list>` in mehreren `@media` At-Regeln zu wiederholen, kann sie einmal in einer `@custom-media` At-Regel definiert und in der gesamten Stylesheet referenziert werden, wann immer dies erforderlich ist. ([Firefox-Bug 1744292](https://bugzil.la/1744292)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 146                  | No                       |
| Developer Edition | 146                  | No                       |
| Beta              | 146                  | No                       |
| Release           | 146                  | No                       |

- `layout.css.custom-media.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### `<attr-type>` Werte in `attr()` CSS-Funktion

Die {{cssxref("attr")}} CSS-Funktion unterstützt jetzt [`<attr-type>`](/de/docs/Web/CSS/Reference/Values/attr#attr-type) Werte. Dies ermöglicht es Ihnen, anzugeben, wie ein Attributwert in einen CSS-Wert geparst wird und diese Werte direkt von [`data-*`](/de/docs/Web/HTML/How_to/Use_data_attributes). ([Firefox-Bug 1986631](https://bugzil.la/1986631), [Firefox-Bug 1998245](https://bugzil.la/1998245))

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 149                  | No                       |
| Developer Edition | 149                  | No                       |
| Beta              | 149                  | No                       |
| Release           | 149                  | No                       |

- `layout.css.attr.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### `color-mix()` akzeptiert mehrere Farbargumente

Die [`color-mix()`](/de/docs/Web/CSS/Reference/Values/color_value/color-mix) CSS-Funktion unterstützt jetzt mehrere [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value) Werte, anstatt nur zwei. Dies ermöglicht Ihnen das Mischen vieler Farben und das Festlegen der Prozentsätze jeder Farbe. ([Firefox-Bug 2007772](https://bugzil.la/2007772)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 150                  | Yes                      |
| Developer Edition | 149                  | No                       |
| Beta              | 149                  | No                       |
| Release           | 149                  | No                       |

- `layout.css.color-mix-multi-color.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Medienbasierte Pseudo-Klassen

Die medienbasierten Pseudo-Klassen {{cssxref(":buffering")}}, {{cssxref(":muted")}}, {{cssxref(":paused")}}, {{cssxref(":playing")}}, {{cssxref(":seeking")}}, {{cssxref(":stalled")}}, und {{cssxref(":volume-locked")}} ermöglichen es Ihnen, {{htmlelement("audio")}} und {{htmlelement("video")}} Elemente basierend auf ihrem aktuellen Zustand, wie z.B. spielen oder pausieren, zu stylen. ([Firefox-Bug 1707584](https://bugzil.la/1707584), [Firefox-Bug 2014512](https://bugzil.la/2014512)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 150                  | Yes                      |
| Developer Edition | 149                  | No                       |
| Beta              | 149                  | No                       |
| Release           | 149                  | No                       |

- `dom.media.pseudo-classes.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

## SVG

**Keine experimentellen Funktionen in diesem Versionszyklus.**

## JavaScript

**Keine experimentellen Funktionen in diesem Versionszyklus.**

## APIs

### Notification actions und maxActions Eigenschaften

Die [`actions`](/de/docs/Web/API/Notification/actions) schreibgeschützte Eigenschaft und die [`maxActions`](/de/docs/Web/API/Notification/maxActions_static) statische schreibgeschützte Eigenschaft der [`Notification`](/de/docs/Web/API/Notification) Schnittstelle werden in Nightly auf Desktop unterstützt. Diese enthalten die Benachrichtigungsaktionen, die mit [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification) festgelegt wurden, und die maximale Anzahl von Aktionen, die jeweils festgelegt werden können. ([Firefox-Bug 1225110](https://bugzil.la/1225110), [Firefox-Bug 1963263](https://bugzil.la/1963263)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 138                  | Yes (nur Desktop)        |
| Developer Edition | 138                  | No                       |
| Beta              | 138                  | No                       |
| Release           | 138                  | No                       |

- `dom.webnotifications.actions.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Grafik: Canvas, WebGL und WebGPU

#### WebGL: Entwurfserweiterungen

Wenn diese Einstellung aktiviert ist, werden alle WebGL-Erweiterungen, die sich derzeit im "Entwurf"-Status befinden und getestet werden, zur Verwendung aktiviert. Derzeit werden keine WebGL-Erweiterungen von Firefox getestet.

#### WebGPU API

Die [WebGPU API](/de/docs/Web/API/WebGPU_API) bietet Low-Level-Unterstützung für die Durchführung von Berechnungen und Grafikwiedergaben unter Verwendung der [Graphics Processing Unit](https://en.wikipedia.org/wiki/Graphics_Processing_Unit) (GPU) des Geräts oder Computers des Benutzers. Ab Version 142 ist dies in Windows in allen Kontexten außer Service-Workern aktiviert. Ab Version 147 ist es in macOS auf Apple Silicon in allen Browsing-Kontexten ausgenommen Service-Worker aktiviert. Für andere Plattformen wie Linux und macOS auf Intel Silicon ist es in Nightly aktiviert. Siehe [Firefox-Bug 1602129](https://bugzil.la/1602129) für unseren Fortschritt bei dieser API.

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert?                                                              |
| ----------------- | -------------------- | ------------------------------------------------------------------------------------- |
| Nightly           | 141                  | Yes                                                                                   |
| Developer Edition | 141                  | No (Yes auf Windows und macOS auf Apple Silicon, nicht einschließlich Service-Worker) |
| Beta              | 141                  | No (Yes auf Windows und macOS auf Apple Silicon, nicht einschließlich Service-Worker) |
| Release           | 141                  | No (Yes auf Windows und macOS auf Apple Silicon, nicht einschließlich Service-Worker) |

- `dom.webgpu.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren (in Nightly und auf Windows in allen Veröffentlichungen aktiviert)
- `dom.webgpu.service-workers.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren (in Nightly aktiviert)

### Reporting API Unterstützung für CSP-Verstöße

Die [Reporting API](/de/docs/Web/API/Reporting_API) unterstützt jetzt das Melden von [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) Verstößen.

[`Report`](/de/docs/Web/API/Report) Instanzen, die von der [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) Schnittstelle zurückgegeben werden, können jetzt einen `type` Wert von `"csp-violation"` haben und eine `body` Eigenschaft, die eine Instanz der [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody) Schnittstelle enthält. Dies ermöglicht es, CSP-Verstöße innerhalb einer Webseite zu melden.

CSP-Verstoßberichte können auch an entfernte Endpunkte gesendet werden, die im CSP {{CSP("report-to")}} Direktive mit Namen angegeben sind - Endpunktnamen und entsprechende URLs müssen zuerst in den {{httpheader('Reporting-Endpoints')}} oder {{httpheader('Report-To')}} HTTP-Antwortheadern definiert werden. Der Bericht ist eine Serialisierung des [`Report`](/de/docs/Web/API/Report) Objekts wie oben beschrieben, mit einer `body` Eigenschaft, die eine Serialisierung einer [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody) Instanz ist.

Dieser Verstoßbericht ersetzt einen ähnlichen, CSP-spezifischen Mechanismus für das Senden von Verstoßberichten, der die CSP {{CSP("report-uri")}} Direktive verwendet, um die URL des Berichtendpunkts festzulegen, und hat ein [CSP-spezifisches JSON-Verstoßberichtformat](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/report-uri#violation_report_syntax). ([Firefox-Bug 1391243](https://bugzil.la/1391243)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 130                  | No                       |
| Developer Edition | 130                  | No                       |
| Beta              | 130                  | No                       |
| Release           | 130                  | No                       |

- `dom.reporting.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### WebRTC und Medien

Die folgenden experimentellen Funktionen umfassen solche, die in Medien-APIs wie der [WebRTC API](/de/docs/Web/API/WebRTC_API), der [Web Audio API](/de/docs/Web/API/Web_Audio_API), der [Media Source Extensions API](/de/docs/Web/API/Media_Source_Extensions_API), der [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API) und der [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) zu finden sind.

#### HTMLMediaElement Eigenschaften: audioTracks und videoTracks

Das Aktivieren dieser Funktion fügt die [`HTMLMediaElement.audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks) und [`HTMLMediaElement.videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks) Eigenschaften zu allen HTML-Medienelementen hinzu. Da Firefox jedoch derzeit keine Unterstützung für mehrere Audio- und Videospuren bietet, funktionieren die häufigsten Anwendungsfälle für diese Eigenschaften nicht, so dass sie beide standardmäßig deaktiviert sind. Siehe [Firefox-Bug 1057233](https://bugzil.la/1057233) für weitere Details.

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 33                   | No                       |
| Developer Edition | 33                   | No                       |
| Beta              | 33                   | No                       |
| Release           | 33                   | No                       |

- `media.track.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

#### Asynchrone SourceBuffer Hinzufügung und Entfernung

Dies fügt die auf Versprechen basierenden Methoden [`appendBufferAsync()`](/de/docs/Web/API/SourceBuffer/appendBufferAsync) und [`removeAsync()`](/de/docs/Web/API/SourceBuffer/removeAsync) zur Hinzufügung und Entfernung von Mediensource-Puffern zur [`SourceBuffer`](/de/docs/Web/API/SourceBuffer) Schnittstelle hinzu. Siehe [Firefox-Bug 1280613](https://bugzil.la/1280613) und [Firefox-Bug 778617](https://bugzil.la/778617) für weitere Informationen.

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 62                   | No                       |
| Developer Edition | 62                   | No                       |
| Beta              | 62                   | No                       |
| Release           | 62                   | No                       |

- `media.mediasource.experimental.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

#### AVIF Konformitätsstrenge

Die `image.avif.compliance_strictness` Einstellung kann verwendet werden, um die _Strenge_ zu kontrollieren, die bei der Verarbeitung von [AVIF](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) Bildern angewendet wird. Dies ermöglicht es Firefox-Benutzern, Bilder anzuzeigen, die in einigen anderen Browsern gerendert werden, selbst wenn sie nicht strikt konform sind.

| Release-Kanal     | Hinzugefügte Version | Standardwert |
| ----------------- | -------------------- | ------------ |
| Nightly           | 92                   | 1            |
| Developer Edition | 92                   | 1            |
| Beta              | 92                   | 1            |
| Release           | 92                   | 1            |

- `image.avif.compliance_strictness`
  - : Numerischer Wert, der ein _Strengheitsniveau_ angibt. Zulässige Werte sind:
    - `0`: Tolerant. Akzeptiere Bilder mit Verstößen gegen die Spezifikation in Empfehlungen ("sollte" Sprache) und Anforderungen ("muss" Sprache), vorausgesetzt, sie können sicher oder eindeutig interpretiert werden.
    - `1` **(Standard)**: Gemischt. Weist Verstöße gegen Anforderungen ("muss") ab, erlaubt jedoch Verstöße gegen Empfehlungen ("sollte").
    - `2`: Streng. Weist Verstöße gegen spezifizierte Anforderungen oder Empfehlungen ab.

#### JPEG XL Unterstützung

Firefox unterstützt [JPEG XL](https://jpeg.org/jpegxl/) Bilder, wenn diese Funktion aktiviert ist. Siehe [Firefox-Bug 1539075](https://bugzil.la/1539075) für weitere Details.

Beachten Sie, dass, wie unten gezeigt, die Funktion nur in Nightly-Builds verfügbar ist (unabhängig davon, ob die Einstellung gesetzt ist oder nicht).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 90                   | No                       |
| Developer Edition | —                    | —                        |
| Beta              | —                    | —                        |
| Release           | —                    | —                        |

- `image.jxl.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

#### Document Picture-in-Picture API

Die [Document Picture-in-Picture API](/de/docs/Web/API/Document_Picture-in-Picture_API) ermöglicht es, ein immer im Vordergrund befindliches Fenster zu öffnen, das mit beliebigem HTML-Inhalt gefüllt werden kann, wie z.B. ein Video mit benutzerdefinierten Steuerelementen oder ein Satz von Streams, die die Teilnehmer eines Videoanrufs anzeigen. Siehe [Firefox-Bug 1858562](https://bugzil.la/1858562) für weitere Details.

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 148                  | Yes                      |
| Developer Edition | 148                  | No                       |
| Beta              | 148                  | No                       |
| Release           | 148                  | No                       |

- `dom.documentpip.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### WebVR API (Deaktiviert)

Die veraltete [WebVR API](/de/docs/Web/API/WebVR_API) steht zur Entfernung an. Sie ist standardmäßig in allen Builds deaktiviert [Firefox-Bug 1750902](https://bugzil.la/1750902).

| Release-Kanal     | Entfernte Version | Standardmäßig aktiviert? |
| ----------------- | ----------------- | ------------------------ |
| Nightly           | 98                | No                       |
| Developer Edition | 98                | No                       |
| Beta              | 98                | No                       |
| Release           | 98                | No                       |

- `dom.vr.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### GeometryUtils Methoden: convertPointFromNode(), convertRectFromNode(), und convertQuadFromNode()

Die `GeometryUtils` Methoden `convertPointFromNode()`, `convertRectFromNode()`, und `convertQuadFromNode()` transformieren den gegebenen Punkt, das Rechteck oder das Viereck von dem [`Node`](/de/docs/Web/API/Node), auf dem sie aufgerufen werden, zu einem anderen Knoten. (Siehe [Firefox-Bug 918189](https://bugzil.la/918189) für weitere Details.)

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 31                   | Yes                      |
| Developer Edition | 31                   | No                       |
| Beta              | 31                   | No                       |
| Release           | 31                   | No                       |

- `layout.css.convertFromNode.enable`
  - : Setzen Sie auf `true`, um zu aktivieren.

### GeometryUtils Methode: getBoxQuads()

Die `GeometryUtils` Methode `getBoxQuads()` gibt die CSS-Boxen für einen [`Node`](/de/docs/Web/API/Node) relativ zu einem anderen Knoten oder zum Ansichtsfenster zurück. (Siehe [Firefox-Bug 917755](https://bugzil.la/917755) für weitere Details.)

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 31                   | Yes                      |
| Developer Edition | 31                   | No                       |
| Beta              | 31                   | No                       |
| Release           | 31                   | No                       |

- `layout.css.getBoxQuads.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Payment Request API

#### Primäre Zahlungsabwicklung

Die [Payment Request API](/de/docs/Web/API/Payment_Request_API) bietet Unterstützung für die Abwicklung webbasierter Zahlungen innerhalb von Webinhalten oder Apps. Aufgrund eines Fehlers, der beim Testen der Benutzeroberfläche auftrat, haben wir beschlossen, die Einführung dieser API zu verschieben, während Diskussionen über mögliche Änderungen der API geführt werden. Die Arbeit daran ist im Gange. (Siehe [Firefox-Bug 1318984](https://bugzil.la/1318984) für weitere Details.)

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 55                   | No                       |
| Developer Edition | 55                   | No                       |
| Beta              | 55                   | No                       |
| Release           | 55                   | No                       |

- `dom.payments.request.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.
- `dom.payments.request.supportedRegions`
  - : Ländercodes als durch Kommas getrennte Whitelist von Regionen (z.B. `US,CA`).

### WebShare API

Die [Web Share API](/de/docs/Web/API/Web_Share_API) ermöglicht das Teilen von Dateien, URLs und anderen Daten von einer Site. Diese Funktion ist auf Android in allen Builds aktiviert, aber auf dem Desktop hinter einer Einstellung (sofern nicht anders angegeben).

| Release-Kanal     | Versionsänderung | Standardmäßig aktiviert?                   |
| ----------------- | ---------------- | ------------------------------------------ |
| Nightly           | 71               | No (Standard). Yes (Windows ab Version 92) |
| Developer Edition | 71               | No                                         |
| Beta              | 71               | No                                         |
| Release           | 71               | No (Desktop). Yes (Android).               |

- `dom.webshare.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Notifications API

Benachrichtigungen haben die [`requireInteraction`](/de/docs/Web/API/Notification/requireInteraction) Eigenschaft standardmäßig auf true gesetzt auf Windows-Systemen und in der Nightly-Release ([Firefox-Bug 1794475](https://bugzil.la/1794475)).

| Release-Kanal     | Versionsänderung | Standardmäßig aktiviert? |
| ----------------- | ---------------- | ------------------------ |
| Nightly           | 117              | Yes                      |
| Developer Edition | 117              | No                       |
| Beta              | 117              | No                       |
| Release           | 117              | Nur Windows              |

- `dom.webnotifications.requireinteraction.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

## Sicherheit und Privatsphäre

### Unsicheres Seiten-Labeling

Die beiden `security.insecure_connection_text_*` Einstellungen fügen ein Textlabel "Nicht sicher" in der Adressleiste neben dem traditionellen Schlosssymbol hinzu, wenn eine Seite unsicher geladen wird (d.h. unter Verwendung von {{Glossary("HTTP", "HTTP")}} anstelle von {{Glossary("HTTPS", "HTTPS")}}). Die `browser.urlbar.trimHttps` Einstellung kürzt das `https:` Präfix aus den URLs in der Adressleiste. Siehe [Firefox-Bug 1853418](https://bugzil.la/1853418) für weitere Details.

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 121                  | Yes                      |
| Developer Edition | 60                   | No                       |
| Beta              | 60                   | No                       |
| Release           | 60                   | No                       |

- `security.insecure_connection_text.enabled`
  - : Setzen Sie auf `true`, um das Textlabel für den normalen Browsing-Modus zu aktivieren.
- `security.insecure_connection_text.pbmode.enabled`
  - : Setzen Sie auf `true`, um das Textlabel für den privaten Browsing-Modus zu aktivieren.
- `browser.urlbar.trimHttps`
  - : Setzen Sie auf `true`, um das `https:` Präfix aus den URLs in der Adressleiste zu kürzen.

### Einschränkung von Inhalten für Erwachsene mit `<meta name="rating">`

Das nicht standardisierte [`<meta name="rating">`](/de/docs/Web/HTML/Reference/Elements/meta) Element kann auf einer Webseite eingefügt werden, um den Inhalt der Seite als eingeschränkt/erwachsen zu kennzeichnen. Zum Zeitpunkt des Schreibens gibt es zwei mögliche `content` Werte, `adult` ([definiert von Google](https://developers.google.com/search/docs/specialty/explicit/guidelines#add-metadata)) und `RTA-5042-1996-1400-1577-RTA` ([definiert von ASACP](https://www.rtalabel.org/?content=howto#top)), die beide die gleiche Wirkung haben (in Zukunft können mehr Optionen hinzugefügt werden).

Die folgenden `<meta>`-Elemente sind gleichwertig:

```html
<meta name="rating" content="adult" />
<meta name="rating" content="RTA-5042-1996-1400-1577-RTA" />
```

Browser, die dieses Element erkennen, können dann Maßnahmen ergreifen, um Benutzer daran zu hindern, den Inhalt zu sehen. Die Implementierung von Firefox ersetzt die Seite durch das unter `about:restricted` gefundene, das dem Benutzer erklärt, dass er versucht, eingeschränkte Inhalte zu sehen, warum er sie nicht sehen kann und gibt ihm eine Zurück-Taste, um dorthin zurückzukehren, woher er kam.

Siehe [Firefox-Bug 1991135](https://bugzil.la/1991135) für mehr Details.

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 146                  | No                       |
| Developer Edition | 146                  | No                       |
| Beta              | 146                  | No                       |
| Release           | 146                  | No                       |

- `security.restrict_to_adults.always`
  - : Setzen Sie auf `true`, um den Zugriff auf Webseiten zu beschränken, die sich selbst als erwachsen identifizieren, indem sie ein `<meta name="rating">` Element einschließen.
- `security.restrict_to_adults.respect_platform`
  - : Setzen Sie auf `true`, um den Zugriff auf Webseiten zu beschränken, die sich selbst als erwachsen identifizieren, indem sie ein `<meta name="rating">` Element einschließen, nur wenn entsprechende Kindersicherungseinstellungen im zugrunde liegenden Betriebssystem gesetzt sind (zum Beispiel sind die macOS _Inhalts- & Privatsphäre_-Einstellungen auf die Einschränkung expliziter Webinhalte gesetzt).

### Berechtigungsrichtlinie / Feature-Richtlinie

[Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) ermöglicht Webentwicklern, bestimmte Funktionen und APIs im Browser selektiv zu aktivieren, zu deaktivieren und das Verhalten zu ändern. Es ist ähnlich wie CSP, steuert jedoch Funktionen anstelle von Sicherheitsverhalten. Dies wird in Firefox als **Feature-Richtlinie** implementiert, dem in einer früheren Version der Spezifikation verwendeten Namen.

Beachten Sie, dass unterstützte Richtlinien über das [`allow`](/de/docs/Web/HTML/Reference/Elements/iframe#allow) Attribut an `<iframe>` Elementen gesetzt werden können, auch wenn die Benutzereinstellung nicht gesetzt ist.

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 65                   | No                       |
| Developer Edition | 65                   | No                       |
| Beta              | 65                   | No                       |
| Release           | 65                   | No                       |

- `dom.security.featurePolicy.header.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Privacy Preserving Attribution API (PPA)

Die [PPA API](https://support.mozilla.org/en-US/kb/privacy-preserving-attribution) bietet eine Alternative zum Benutzernachverfolgung für die Werbungsattribution unter Verwendung des neuen Objekts `navigator.privateAttribution` mit den Methoden `saveImpression()` und `measureConversion()`. Lesen Sie mehr über PPA [im ursprünglichen Erklärer](https://github.com/mozilla/explainers/tree/main/archive/ppa-experiment) und die [vorgeschlagene Spezifikation](https://w3c.github.io/ppa/). Dieses Experiment kann für Webseiten über [Origin Trial](https://wiki.mozilla.org/Origin_Trials) oder im Browser durch Setzen der Einstellung auf `1` aktiviert werden. ([Firefox-Bug 1900929](https://bugzil.la/1900929)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 128                  | No                       |
| Developer Edition | 128                  | No                       |
| Beta              | 128                  | No                       |
| Release           | 128                  | No                       |

- `dom.origin-trials.private-attribution.state`
  - : Setzen Sie auf `true`, um zu aktivieren.

## HTTP

### Integritätsrichtlinie für Stylesheet-Ressourcen

Die {{httpheader("Integrity-Policy")}} und {{httpheader("Integrity-Policy-Report-Only")}} HTTP-Header werden jetzt für Stilressourcen unterstützt. Diese erlauben es Webseiten, entweder [Subraessourcenintegrität Garantien](/de/docs/Web/Security/Defenses/Subresource_Integrity) für Stile zu erzwingen oder nur Verstöße gegen die Richtlinie zu melden. Beachten Sie, dass Firefox Berichtsendpunkte ignoriert und Verstöße in der Entwicklerkonsole protokolliert. Wenn `Integrity-Policy` verwendet wird, blockiert der Browser das Laden von Stilen, die in einem {{HTMLElement("link")}} Element mit [`rel="stylesheet"`](/de/docs/Web/HTML/Reference/Attributes/rel#stylesheet) enthalten sind und entweder das [`integrity`](/de/docs/Web/HTML/Reference/Elements/script#integrity) Attribut nicht enthalten oder einen Integritäts-Hash haben, der nicht mit der Ressource auf dem Server übereinstimmt. ([Firefox-Bug 1976656](https://bugzil.la/1976656)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 142                  | No                       |
| Developer Edition | 142                  | No                       |
| Beta              | 142                  | No                       |
| Release           | 142                  | No                       |

- `security.integrity_policy.stylesheet.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Storage Access Header

Die {{httpheader("Sec-Fetch-Storage-Access")}} und {{httpheader("Activate-Storage-Access")}} HTTP-Header werden jetzt unterstützt, wodurch ein effizienterer [Storage Access API](/de/docs/Web/API/Storage_Access_API) Workflow ermöglicht wird. ([Firefox-Bug 1991688](https://bugzil.la/1991688)).

Im reinen JavaScript-Workflow muss eine Drittanbieterressource angefordert und geladen werden, um eine Speicherzugriffsberechtigung für einen bestimmten Kontext (wie eine neue Browserregisterkarte) zu aktivieren. Dies ist erforderlich, auch wenn die Berechtigung bereits gewährt wurde. Die Speicherzugriffs-Header ermöglichen es dem Browser, den Berechtigungsstatus für den jeweiligen Kontext anzugeben, damit der Server die Aktivierung einer bereits gewährten Berechtigung anfordern kann. Dies vermeidet den Aufwand, unnötigerweise die Ressource abzurufen und zu laden.

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 145                  | Yes                      |
| Developer Edition | 145                  | No                       |
| Beta              | 145                  | No                       |
| Release           | 145                  | No                       |

- `dom.storage_access.headers.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Idempotency-Key

Der {{httpheader("Idempotency-Key")}} HTTP-Anforderungsheader kann von Website-Client-Code verwendet werden, um eine {{HTTPMethod("POST")}} oder {{HTTPMethod("PATCH")}} Anfragen {{Glossary("idempotent", "idempotent")}} zu machen, wenn sie mit einem Server verwendet werden, der sie unterstützt. Die Spezifikation gibt an, dass der Server dokumentieren und bewerben sollte, welche Endpunkte diesen Header benötigen, das Format des Schlüssels und erwartete Fehlermeldungen.

Firefox fügt den Header **automatisch** mit einem eindeutigen Schlüssel für jede neue `POST` Anfrage hinzu, wenn er nicht bereits vom clientseitigen Code der Seite hinzugefügt wurde. Dies vereinfacht den erforderlichen clientseitigen Code, um mit Servern zu arbeiten, die die Funktion unterstützen.

([Firefox-Bug 1830022](https://bugzil.la/1830022)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 135                  | No                       |
| Developer Edition | 135                  | No                       |
| Beta              | 135                  | No                       |
| Release           | 135                  | No                       |

- `network.http.idempotencyKey.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Accept-Header mit MIME-Typ image/jxl

Der HTTP [`Accept`](/de/docs/Web/HTTP/Reference/Headers/Accept) Header in [Standardanfragen und Bildanfragen](/de/docs/Web/HTTP/Guides/Content_negotiation/List_of_default_Accept_values) kann über eine Einstellung so konfiguriert werden, dass er die Unterstützung für den MIME-Typ `image/jxl` anzeigt.

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 128                  | No                       |
| Developer Edition | 128                  | No                       |
| Beta              | 128                  | No                       |
| Release           | 128                  | No                       |

- `image.jxl.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### SameSite=Lax standardmäßig

[`SameSite` Cookies](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) haben standardmäßig den Wert `Lax`. Mit dieser Einstellung werden Cookies nur gesendet, wenn ein Benutzer zur Ursprungsseite navigiert, nicht für Cross-Site-Unteranfragen, um Bilder oder Frames in eine Drittanbieterseite zu laden und so weiter. Für weitere Details siehe [Firefox-Bug 1617609](https://bugzil.la/1617609).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 69                   | No                       |
| Developer Edition | 69                   | No                       |
| Beta              | 69                   | No                       |
| Release           | 69                   | No                       |

- `network.cookie.sameSite.laxByDefault`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Access-Control-Allow-Headers Platzhalter deckt Authorization nicht ab

Der [`Access-Control-Allow-Headers`](/de/docs/Web/HTTP/Reference/Headers/Access-Control-Allow-Headers) ist ein Antwort-Header auf eine {{Glossary("Preflight_request", "CORS-Preflight-Anfrage")}}, der angibt, welche Anforderungsheader in der endgültigen Anfrage enthalten sein dürfen. Die Antwortdirektive kann einen Platzhalter (`*`) enthalten, der angibt, dass die endgültige Anfrage alle Header außer dem `Authorization` Header enthalten kann.

Standardmäßig enthält Firefox den `Authorization` Header in der endgültigen Anfrage, nachdem es eine Antwort mit `Access-Control-Allow-Headers: *` erhalten hat. Setzen Sie die Einstellung auf `false`, um sicherzustellen, dass Firefox den `Authorization` Header nicht einschließt. Für weitere Details siehe [Firefox-Bug 1687364](https://bugzil.la/1687364).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 115                  | Yes                      |
| Developer Edition | 115                  | Yes                      |
| Beta              | 115                  | Yes                      |
| Release           | 115                  | Yes                      |

- `network.cors_preflight.authorization_covered_by_wildcard`
  - : Setzen Sie auf `true`, um zu aktivieren.

## Entwicklertools

Die Entwicklertools von Mozilla entwickeln sich ständig weiter. Wir experimentieren mit neuen Ideen, fügen neue Funktionen hinzu und testen sie in den Nightly- und Developer Edition-Kanälen, bevor sie in die Beta und die Release-Phase gehen. Die unten aufgeführten Funktionen sind die derzeitigen experimentellen Entwicklertool-Funktionen.

**Keine experimentellen Funktionen in diesem Versionszyklus.**

## Siehe auch

- [Firefox Entwickler-Release-Notizen](/de/docs/Mozilla/Firefox/Releases)
- [Firefox Nightly](https://www.firefox.com/en-US/channel/desktop/)
- [Firefox Developer Edition](https://www.firefox.com/en-US/channel/desktop/developer/)
