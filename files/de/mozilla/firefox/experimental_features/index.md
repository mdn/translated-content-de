---
title: Experimentelle Features in Firefox
short-title: Experimentelle Features
slug: Mozilla/Firefox/Experimental_features
l10n:
  sourceCommit: 92b695d9525f7f53360881b28c0c014d6c5559dd
---

Diese Seite listet die experimentellen und teilweise implementierten Features von Firefox auf, einschließlich sich entwickelnder oder vorgeschlagener Webplattform-Standards. Jedes unten stehende Element enthält Informationen über die Builds, in denen ein Feature enthalten ist (Nightly, Beta, Developer Edition oder Release), ob es standardmäßig aktiviert ist oder nicht und der Name der **Präferenz**, die Sie verwenden können, um das Feature zu aktivieren oder zu konfigurieren. Die Beschreibung jedes Features enthält auch Links zu relevanten [Bugzilla-Bugs](https://bugzilla.mozilla.org), die das Feature implementieren oder aktivieren. Diese Informationen ermöglichen es Ihnen, experimentelle Features auszuprobieren und Feedback zu geben, bevor sie offiziell veröffentlicht werden.

In Bezug auf den Lebenszyklus erscheinen neue Features normalerweise zuerst in [Nightly](https://www.firefox.com/en-US/channel/desktop/#nightly), wo sie oft standardmäßig aktiviert sind, um frühzeitig Feedback zu erhalten und Tests durchzuführen. Wenn keine größeren Probleme gefunden werden, werden sie in [Beta](https://www.firefox.com/en-US/channel/desktop/#beta) und [Developer Edition](https://www.firefox.com/en-US/channel/desktop/developer/) Pre-Release Builds aufgenommen. Schließlich werden genehmigte Features im stabilen [Release](https://www.firefox.com/en-US/) Kanal ausgeliefert. Wenn ein Feature in einer Veröffentlichung standardmäßig aktiviert ist, wird es nicht mehr als experimentell betrachtet und von dieser Seite entfernt.

Um diese Features zu aktivieren, geben Sie `about:config` in die Firefox-Adressleiste ein, suchen Sie die zugehörige **Präferenz** und ändern Sie ihren Wert, der normalerweise ein Umschalten zwischen `true` und `false` ist. Abhängig von der Funktion müssen Sie möglicherweise den Browser neu starten, damit die Änderung wirksam wird. Weitere Informationen zur Verwaltung von Präferenzen in Firefox finden Sie im Support-Artikel des [Firefox Configuration Editor](https://support.mozilla.org/en-US/kb/about-config-editor-firefox).

## HTML

### Layout für input type="search"

Das Layout für `input type="search"` wurde aktualisiert. Dies führt dazu, dass ein Suchfeld ein Löschsymbol erhält, sobald jemand mit der Eingabe beginnt, um andere Browserimplementierungen nachzuahmen. (Siehe [Firefox Bug 558594](https://bugzil.la/558594) für weitere Details.)

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 81                  | Nein                     |
| Developer Edition | 81                  | Nein                     |
| Beta              | 81                  | Nein                     |
| Release           | 81                  | Nein                     |

- `layout.forms.input-type-search.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Passwortanzeige umschalten

HTML-Passworteingabeelemente ([`<input type="password">`](/de/docs/Web/HTML/Reference/Elements/input/password)) enthalten ein "Augen"-Symbol, das umgeschaltet werden kann, um das Passwort anzuzeigen oder zu verbergen ([Firefox Bug 502258](https://bugzil.la/502258)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 96                  | Nein                     |
| Developer Edition | 96                  | Nein                     |
| Beta              | 96                  | Nein                     |
| Release           | 96                  | Nein                     |

- `layout.forms.reveal-password-button.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Zeitwahl in `datetime-local` und `time` Eingabeelementen

Die HTML-Eingabeelemente [`<input type="datetime-local">`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local) und [`<input type="time">`](/de/docs/Web/HTML/Reference/Elements/input/time) unterstützen eine Zeitauswahl. ([Firefox Bug 1726108](https://bugzil.la/1726108)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 144                 | Nein                     |
| Developer Edition | 144                 | Nein                     |
| Beta              | 144                 | Nein                     |
| Release           | 144                 | Nein                     |

- `dom.forms.datetime.timepicker`
  - : Auf `true` setzen, um zu aktivieren.

### `alpha` und `colorspace` Attribute in `color` Eingabeelementen

Das HTML-Eingabeelement [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color) unterstützt die Attribute [`alpha`](/de/docs/Web/HTML/Reference/Elements/input/color#alpha) & [`colorspace`](/de/docs/Web/HTML/Reference/Elements/input/color#colorspace). ([Firefox Bug 1919718](https://bugzil.la/1919718)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 149                 | Ja                       |
| Developer Edition | -                   | -                        |
| Beta              | -                   | -                        |
| Release           | -                   | -                        |

- `dom.forms.html_color_picker.enabled`
  - : Auf `true` setzen, um zu aktivieren.

## CSS

### Hex-Boxen zur Anzeige streunender Steuerzeichen

Diese Funktion rendert Steuerzeichen (Unicode-Kategorie Cc) außer _Tabulator_ (`U+0009`), _Zeilenumbruch_ (`U+000A`), _Form Feed_ (`U+000C`) und _Wagenrücklauf_ (`U+000D`) als Hex-Box, wenn sie unerwartet sind. (Siehe [Firefox Bug 1099557](https://bugzil.la/1099557) für weitere Details.)

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 43                  | Ja                       |
| Developer Edition | 43                  | Nein                     |
| Beta              | 43                  | Nein                     |
| Release           | 43                  | Nein                     |

- `layout.css.control-characters.visible`
  - : Auf `true` setzen, um zu aktivieren.

### initial-letter Eigenschaft

Die {{cssxref("initial-letter")}} CSS-Eigenschaft ist Teil der [CSS Inline Layout](https://drafts.csswg.org/css-inline/) Spezifikation und erlaubt es Ihnen, anzugeben, wie fallende, aufsteigende und versenkte Initialbuchstaben angezeigt werden. (Siehe [Firefox Bug 1223880](https://bugzil.la/1223880) für weitere Details.)

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 50                  | Nein                     |
| Developer Edition | 50                  | Nein                     |
| Beta              | 50                  | Nein                     |
| Release           | 50                  | Nein                     |

- `layout.css.initial-letter.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Funktion fit-content()

Die {{cssxref("fit-content()")}} Funktion, wie sie bei {{cssxref("width")}} und anderen Größenangaben angewendet wird. Diese Funktion wird bereits gut für die Größenbestimmung von CSS-Grid-Layout-Tracks unterstützt. (Siehe [Firefox Bug 1312588](https://bugzil.la/1312588) für weitere Details.)

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 91                  | Nein                     |
| Developer Edition | 91                  | Nein                     |
| Beta              | 91                  | Nein                     |
| Release           | 91                  | Nein                     |

- `layout.css.fit-content-function.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Scroll-gesteuerte Animationen

Früher als "scroll-verknüpfte Animationen" bekannt, hängt eine [scroll-gesteuerte Animation](/de/docs/Web/CSS/Guides/Scroll-driven_animations) von der Scrollposition eines Bildlaufs anstelle der Zeit oder einer anderen Dimension ab. Die Eigenschaften {{cssxref('scroll-timeline-name')}} und {{cssxref('scroll-timeline-axis')}} (und die Kurzform-Eigenschaft {{cssxref('scroll-timeline')}}) erlauben es Ihnen, anzugeben, dass ein bestimmter Bildlauf in einem benannten Container als Quelle für eine scroll-gesteuerte Animation verwendet werden kann. Die Scrolle-Timeline kann dann einer [Animation](/de/docs/Web/CSS/Guides/Animations) zugeordnet werden, indem die {{cssxref('animation-timeline')}}-Eigenschaft auf den Namenswert gesetzt wird, der mit `scroll-timeline-name` definiert wurde.

Beim Einsatz der Kurzform-Eigenschaft {{cssxref('scroll-timeline')}} muss die Reihenfolge der Eigenschaftswerte {{cssxref('scroll-timeline-name')}} gefolgt von {{cssxref('scroll-timeline-axis')}} sein. Die Lang- und Kurzform-Eigenschaften sind beide hinter der Präferenz verfügbar. Sie können alternativ die funktionale Notation {{cssxref("animation-timeline/scroll")}} mit {{cssxref('animation-timeline')}} verwenden, um anzugeben, dass eine Bildlauf-Achse in einem übergeordneten Element für die Timeline verwendet wird.

Weitere Informationen finden Sie in [Firefox Bug 1807685](https://bugzil.la/1807685), [Firefox Bug 1804573](https://bugzil.la/1804573), [Firefox Bug 1809005](https://bugzil.la/1809005), [Firefox Bug 1676791](https://bugzil.la/1676791), [Firefox Bug 1754897](https://bugzil.la/1754897), [Firefox Bug 1817303](https://bugzil.la/1817303) und [Firefox Bug 1737918](https://bugzil.la/1737918).

Die Eigenschaften {{cssxref('timeline-scope')}}, {{cssxref('animation-range-start')}} und {{cssxref('animation-range-end')}} (und die Kurzform-Eigenschaft {{cssxref('animation-range')}}) werden noch nicht unterstützt. Weitere Informationen finden Sie in [Firefox Bug 1676779](https://bugzil.la/1676779).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 136                 | Ja                       |
| Developer Edition | 110                 | Nein                     |
| Beta              | 110                 | Nein                     |
| Release           | 110                 | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### prefers-reduced-transparency Media-Feature

Das CSS-Media-Feature {{cssxref("@media/prefers-reduced-transparency")}} lässt Sie erkennen, wenn ein Benutzer die Einstellung aktiviert hat, um die Menge an transparenten oder durchscheinenden Schichteffekten auf ihrem Gerät zu minimieren. Siehe ([Firefox Bug 1736914](https://bugzil.la/1736914)) für weitere Details.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 113                 | Nein                     |
| Developer Edition | 113                 | Nein                     |
| Beta              | 113                 | Nein                     |
| Release           | 113                 | Nein                     |

- `layout.css.prefers-reduced-transparency.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### inverted-colors Media-Feature

Das CSS-Media-Feature {{cssxref("@media/inverted-colors")}} lässt Sie erkennen, ob ein User-Agent oder das zugrunde liegende Betriebssystem die Farben invertiert. Siehe ([Firefox Bug 1794628](https://bugzil.la/1794628)) für weitere Details.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 114                 | Nein                     |
| Developer Edition | 114                 | Nein                     |
| Beta              | 114                 | Nein                     |
| Release           | 114                 | Nein                     |

- `layout.css.inverted-colors.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Benannte Ansicht Fortschrittszeitleisten-Eigenschaft

Die CSS-Eigenschaft {{cssxref("view-timeline-name")}} ermöglicht es Ihnen, einem bestimmten Element einen Namen zu geben, der angibt, dass das übergeordnete Scrollelement die Quelle einer Fortschrittszeitleiste der Ansicht ist. Der Name kann dann dem `animation-timeline`-Element zugewiesen werden, das das zugehörige Element animiert, während es durch den sichtbaren Bereich seines übergeordneten Scrollelements bewegt wird. Siehe ([Firefox Bug 1737920](https://bugzil.la/1737920)) für weitere Details.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 114                 | Nein                     |
| Developer Edition | 114                 | Nein                     |
| Beta              | 114                 | Nein                     |
| Release           | 114                 | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Anonyme Ansicht Fortschrittszeitleisten-Funktion

Die CSS-Funktion {{cssxref("animation-timeline/view")}} ermöglicht es Ihnen, anzugeben, dass die `animation-timeline` für ein Element eine Fortschrittszeitleiste der Ansicht ist, die das Element animiert, während es durch den sichtbaren Bereich des übergeordneten Scrollelements bewegt wird. Die Funktion definiert die Achse des übergeordneten Elements, das die Zeitleiste bereitstellt, sowie den Inset im sichtbaren Bereich, an dem die Animation startet und beginnt. Siehe ([Firefox Bug 1808410](https://bugzil.la/1808410)) für weitere Details.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 114                 | Nein                     |
| Developer Edition | 114                 | Nein                     |
| Beta              | 114                 | Nein                     |
| Release           | 114                 | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Herstellerpräfixe Transform-Eigenschaften

Die `-moz-`-vervielfachten [CSS-Transform](/de/docs/Web/CSS/Guides/Transforms)-Eigenschaften können deaktiviert werden, indem die Präferenz `layout.css.prefixes.transforms` auf `false` gesetzt wird. Die Absicht besteht darin, diese zu deaktivieren, sobald die standardmäßigen CSS-Zoom-Eigenschaften gut unterstützt werden. ([Firefox Bug 1886134](https://bugzil.la/1886134), [Firefox Bug 1855763](https://bugzil.la/1855763)).

Speziell wird diese Präferenz die folgenden vervielfachten Eigenschaften deaktivieren:

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

#### Relative Kontrollpunkte in CSS `shape()` Kurvenbefehlen

Sie können [`<relative-control-point>`](/de/docs/Web/CSS/Reference/Values/basic-shape/shape#relative-control-point) Werte bei der Angabe eines [`<curve-command>`](/de/docs/Web/CSS/Reference/Values/basic-shape/shape#curve-command) oder [`<smooth-command>`](/de/docs/Web/CSS/Reference/Values/basic-shape/shape#smooth-command) in einer CSS `shape()` Funktion verwenden. Diese Werte ermöglichen es Ihnen, Kontrollpunkte anzugeben, die relativ zum Start- oder Endpunkt des aktuellen Befehls positioniert sind oder relativ zum Ursprung (oben links) des Containers, in dem die Form gezeichnet wird. ([Firefox Bug 1921501](https://bugzil.la/1921501)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 146                 | Ja                       |
| Developer Edition | 146                 | Nein                     |
| Beta              | 146                 | Nein                     |
| Release           | 146                 | Nein                     |

- `layout.css.basic-shape-shape.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Symmetrisches `letter-spacing`

Die CSS-Eigenschaft {{cssxref("letter-spacing")}} teilt nun den angegebenen Zeichenabstand gleichmäßig auf beiden Seiten jedes Zeichens. Dies unterscheidet sich vom aktuellen Verhalten, bei dem der Abstand hauptsächlich auf einer Seite hinzugefügt wird. Dieser Ansatz kann die Zeichenabstände verbessern, insbesondere bei Textelementen mit gemischter Richtung. ([Firefox Bug 1891446](https://bugzil.la/1891446)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 128                 | Ja                       |
| Developer Edition | 128                 | Ja                       |
| Beta              | 127                 | Nein                     |
| Release           | 127                 | Nein                     |

- `layout.css.letter-spacing.model`
  - : Auf `true` setzen, um zu aktivieren.

### `calc()` Farbkanalunterstützung in relativen Farben

Die CSS-Funktion {{cssxref("calc()")}} kann nun Farbkanäle in [relativen Farben](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors#using_math_functions) analysieren, was es Ihnen ermöglicht, Änderungen an Farben in verschiedenen Farbräumen oder unter Verwendung unterschiedlicher funktionaler Notationen richtig zu berechnen [Firefox Bug 1889561](https://bugzil.la/1889561).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 127                 | Ja                       |
| Developer Edition | 127                 | Nein                     |
| Beta              | 127                 | Nein                     |
| Release           | 127                 | Nein                     |

- `layout.css.relative-color-syntax.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Erlauben von Pseudo-Elementen nach element-gestützten Pseudo-Elementen

Es wurde begonnen, daran zu arbeiten, dass [Pseudo-Elemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) wie {{cssxref("::first-letter")}} und {{cssxref("::before")}} an element-gestützte Pseudo-Elemente wie {{cssxref("::details-content")}} und {{cssxref("::file-selector-button")}} angehängt werden können.

Dies ermöglicht es Benutzern beispielsweise, den ersten Buchstaben des {{htmlElement("details")}}-Elements mit dem CSS-Selektor `::details-content::first-letter` zu stylen oder Inhalte vor einem {{HTMLElement("input") }} mit [`type="file"`](/de/docs/Web/HTML/Reference/Elements/input/file) mit dem CSS-Selektor `::file-selector-button::before` hinzuzufügen.

Zurzeit kann nur `::details-content::first-letter` mit `@supports(::details-content::first-letter)` geparst werden. Das `::file-selector-button` Pseudo-Element ist noch nicht als element-gestütztes Pseudo-Element markiert, sodass es derzeit keine Möglichkeit gibt, dies zu testen. ([Firefox Bug 1953557](https://bugzil.la/1953557), [Firefox Bug 1941406](https://bugzil.la/1941406)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 138                 | Nein                     |
| Developer Edition | 138                 | Nein                     |
| Beta              | 138                 | Nein                     |
| Release           | 138                 | Nein                     |

### `:heading` und `:heading()` Pseudoklassen

Die Pseudoklasse {{cssxref(":heading")}} ermöglicht es Ihnen, alle [Überschriftselemente](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) (`<h1>`-`<h6>`) auf einmal zu stylen, anstatt sie einzeln anzusprechen. Die funktionale Pseudoklasse {{cssxref(":heading()")}} ermöglicht es Ihnen, Überschriftselemente zu stylen, die einer durch Kommas getrennten Liste von ganzen Zahlen entsprechen, die die Überschriftenebenen darstellen. ([Firefox Bug 1974386](https://bugzil.la/1974386) & [Firefox Bug 1984310](https://bugzil.la/1984310)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 142                 | Nein                     |
| Developer Edition | 142                 | Nein                     |
| Beta              | 142                 | Nein                     |
| Release           | 142                 | Nein                     |

- `layout.css.heading-selector.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### `text-decoration-trim`

Die CSS-Eigenschaft `text-decoration-trim` ermöglicht es Ihnen, {{cssxref("text-decoration")}} Anfangs- und Endversätze anzugeben, um Textdekorationen zu verkürzen, zu verlängern oder die Position in Bezug auf den Text zu verschieben ([Firefox Bug 1979915](https://bugzil.la/1979915)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 145                 | Nein                     |
| Developer Edition | 145                 | Nein                     |
| Beta              | 145                 | Nein                     |
| Release           | 145                 | Nein                     |

- `layout.css.text-decoration-trim.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### `@custom-media` At-Regel

Die {{cssxref("@custom-media")}} CSS-At-Regel definiert Aliase für lange oder komplexe Media-Anfragen. Anstatt dieselbe fest programmierte `<media-query-list>` in mehreren `@media` At-Regeln zu wiederholen, kann es einmal in einer `@custom-media` At-Regel definiert und in den Stylesheets bei Bedarf referenziert werden. ([Firefox Bug 1744292](https://bugzil.la/1744292)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 148                 | Nein                     |
| Developer Edition | 148                 | Nein                     |
| Beta              | 148                 | Nein                     |
| Release           | 148                 | Nein                     |

- `layout.css.custom-media.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### `<attr-type>` Werte in `attr()` CSS-Funktion

Die CSS-Funktion {{cssxref("attr")}} unterstützt jetzt [`<attr-type>`](/de/docs/Web/CSS/Reference/Values/attr#attr-type) Werte. Damit können Sie angeben, wie ein Attributwert in einen CSS-Wert geparst wird, und diese Werte direkt aus [`data-*`](/de/docs/Web/HTML/How_to/Use_data_attributes) übernehmen. ([Firefox Bug 1986631](https://bugzil.la/1986631), [Firefox Bug 1998245](https://bugzil.la/1998245))

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 149                 | Nein                     |
| Developer Edition | 149                 | Nein                     |
| Beta              | 149                 | Nein                     |
| Release           | 149                 | Nein                     |

- `layout.css.attr.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### `@container style()` Abfragen

Die [`@container`](/de/docs/Web/CSS/Reference/At-rules/@container) CSS-At-Regel unterstützt [`style()`](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries) Abfragen. Damit können Sie prüfen, ob ein Container über eine gültige CSS-Deklaration, eine CSS-Eigenschaft oder eine benutzerdefinierte Eigenschaft verfügt, und entsprechend Stile auf seine Kinder anwenden. ([Firefox Bug 2014404](https://bugzil.la/2014404)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 149                 | Ja                       |
| Developer Edition | 149                 | Nein                     |
| Beta              | 149                 | Nein                     |
| Release           | 149                 | Nein                     |

- `layout.css.style-queries.enabled`
  - : Auf `true` setzen, um zu aktivieren.

## SVG

**Keine experimentellen Funktionen in diesem Veröffentlichungszyklus.**

## JavaScript

**Keine experimentellen Funktionen in diesem Veröffentlichungszyklus.**

## APIs

### Übersichtliche benutzerdefinierte Element-Register

Die Unterstützung für [überblickte benutzerdefinierte Element-Register](/de/docs/Web/API/Web_components/Using_custom_elements#scoped_custom_element_registries) wird implementiert. Übersichtliche Register ermöglichen es einem Schatten-DOM, ein unabhängiges [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry) zu erstellen, dessen Definitionen nur für diesen spezifischen DOM-Teilbaum gelten. Dies kann verwendet werden, um Kollisionen zu vermeiden, bei denen mehrere Webkomponenten Elemente mit demselben Namen deklarieren.

Die Implementierung umfasst:

- Die Eigenschaft `customElementRegistry` in [`Document`](/de/docs/Web/API/Document), [`Element`](/de/docs/Web/API/Element), und [`ShadowRoot`](/de/docs/Web/API/ShadowRoot). ([Firefox Bug 2018900](https://bugzil.la/2018900)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 150                 | Nein                     |
| Developer Edition | 150                 | Nein                     |
| Beta              | 150                 | Nein                     |
| Release           | 150                 | Nein                     |

- `dom.scoped-custom-element-registries.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### CSS Typed Object Model Level 1

Die Implementierungsarbeit am [CSS Typed OM Level 1](https://drafts.css-houdini.org/css-typed-om/) hat begonnen. Zum Beispiel wird die Methode [`to()`](/de/docs/Web/API/CSSNumericValue/to) der [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) Schnittstelle unterstützt, um einen CSS-Numeric-Wert von einer Einheit in eine andere umzuwandeln. ([Firefox Bug 1278697](https://bugzil.la/1278697)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 149                 | Nein                     |
| Developer Edition | 149                 | Nein                     |
| Beta              | 149                 | Nein                     |
| Release           | 149                 | Nein                     |

- `layout.css.typed-om.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Notification actions und maxActions Eigenschaften

Die schreibgeschützte Eigenschaft [`actions`](/de/docs/Web/API/Notification/actions) und die statische schreibgeschützte Eigenschaft [`maxActions`](/de/docs/Web/API/Notification/maxActions_static) der [`Notification`](/de/docs/Web/API/Notification)-Schnittstelle werden in Nightly auf dem Desktop unterstützt. Diese enthalten die mit [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification) gesetzten Benachrichtigungsaktionen und die maximale Anzahl an Aktionen, die festgelegt werden können. ([Firefox Bug 1225110](https://bugzil.la/1225110), [Firefox Bug 1963263](https://bugzil.la/1963263)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 138                 | Ja (nur Desktop)         |
| Developer Edition | 138                 | Nein                     |
| Beta              | 138                 | Nein                     |
| Release           | 138                 | Nein                     |

- `dom.webnotifications.actions.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Grafik: Canvas, WebGL und WebGPU

#### WebGL: Entwurfserweiterungen

Wenn diese Präferenz aktiviert ist, werden alle WebGL-Erweiterungen, die sich derzeit im Entwurfsstatus befinden und getestet werden, zur Verwendung aktiviert. Derzeit werden von Firefox keine WebGL-Erweiterungen getestet.

#### WebGPU API

Die [WebGPU API](/de/docs/Web/API/WebGPU_API) bietet Niedrigstufenunterstützung für das Durchführen von Berechnungen und Grafikrendering mit der [Graphics Processing Unit](https://en.wikipedia.org/wiki/Graphics_Processing_Unit) (GPU) des Benutzergeräts oder -computers. Ab Version 142 wird dies auf Windows in allen Kontexten außer in Service-Workern aktiviert. Ab Version 147 wird dies auf macOS auf Apple Silicon in allen Browser-Kontexten außer in Service-Workern aktiviert. Für andere Plattformen wie Linux und macOS auf Intel Silicon ist es in Nightly aktiviert. Siehe [Firefox Bug 1602129](https://bugzil.la/1602129) für unseren Fortschritt bei dieser API.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert?                                                                |
| ----------------- | ------------------- | --------------------------------------------------------------------------------------- |
| Nightly           | 141                 | Ja                                                                                      |
| Developer Edition | 141                 | Nein (Ja auf Windows und macOS auf Apple Silicon, nicht einschließlich Service-Workern) |
| Beta              | 141                 | Nein (Ja auf Windows und macOS auf Apple Silicon, nicht einschließlich Service-Workern) |
| Release           | 141                 | Nein (Ja auf Windows und macOS auf Apple Silicon, nicht einschließlich Service-Workern) |

- `dom.webgpu.enabled`
  - : Auf `true` setzen, um zu aktivieren (in Nightly und auf Windows in allen Veröffentlichungen aktiviert)
- `dom.webgpu.service-workers.enabled`
  - : Auf `true` setzen, um zu aktivieren (in Nightly aktiviert)

### WebRTC und Media

Die folgenden experimentellen Funktionen umfassen diejenigen, die in Medien-APIs wie der [WebRTC API](/de/docs/Web/API/WebRTC_API), der [Web Audio API](/de/docs/Web/API/Web_Audio_API), der [Media Source Extensions API](/de/docs/Web/API/Media_Source_Extensions_API), der [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API) und der [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) gefunden werden können.

#### HTMLMediaElement Eigenschaften: audioTracks und videoTracks

Das Aktivieren dieser Funktion fügt die Eigenschaften [`HTMLMediaElement.audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks) und [`HTMLMediaElement.videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks) zu allen HTML-Medienelementen hinzu. Da Firefox jedoch derzeit keine Unterstützung für mehrere Audio- und Videospuren bietet, funktionieren die häufigsten Anwendungsfälle für diese Eigenschaften nicht, sodass sie standardmäßig beide deaktiviert sind. Siehe [Firefox Bug 1057233](https://bugzil.la/1057233) für weitere Details.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 33                  | Nein                     |
| Developer Edition | 33                  | Nein                     |
| Beta              | 33                  | Nein                     |
| Release           | 33                  | Nein                     |

- `media.track.enabled`
  - : Auf `true` setzen, um zu aktivieren.

#### Asynchrone SourceBuffer Hinzufügung und Entfernung

Dies fügt die auf Promises basierenden Methoden [`appendBufferAsync()`](/de/docs/Web/API/SourceBuffer/appendBufferAsync) und [`removeAsync()`](/de/docs/Web/API/SourceBuffer/removeAsync) hinzu, um Media-Source-Puffer in die [`SourceBuffer`](/de/docs/Web/API/SourceBuffer) Schnittstelle hinzuzufügen und zu entfernen. Siehe [Firefox Bug 1280613](https://bugzil.la/1280613) und [Firefox Bug 778617](https://bugzil.la/778617) für weitere Informationen.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 62                  | Nein                     |
| Developer Edition | 62                  | Nein                     |
| Beta              | 62                  | Nein                     |
| Release           | 62                  | Nein                     |

- `media.mediasource.experimental.enabled`
  - : Auf `true` setzen, um zu aktivieren.

#### AVIF Compliance-Strictness

Die Präferenz `image.avif.compliance_strictness` kann verwendet werden, um die _Strenge_ zu steuern, die bei der Verarbeitung von [AVIF](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) Bildern angewendet wird. Dies ermöglicht es den Firefox-Benutzern, Bilder anzuzeigen, die in einigen anderen Browsern gerendert werden, auch wenn sie nicht strikt konform sind.

| Release-Kanal     | Version hinzugefügt | Standardwert |
| ----------------- | ------------------- | ------------ |
| Nightly           | 92                  | 1            |
| Developer Edition | 92                  | 1            |
| Beta              | 92                  | 1            |
| Release           | 92                  | 1            |

- `image.avif.compliance_strictness`
  - : Numerischer Wert, der eine _Strenge_ aufzeigt. Erlaubte Werte sind:
    - `0`: Nachsichtig. Akzeptiert Bilder mit Spezifikationsverletzungen sowohl in Empfehlungen ("sollte" Sprache) als auch in Anforderungen ("muss" Sprache), vorausgesetzt, sie können sicher oder eindeutig interpretiert werden.
    - `1` **(Standard)**: Gemischt. Verwirft Verletzungen von Anforderungen ("muss"), erlaubt aber Verletzungen von Empfehlungen ("sollte").
    - `2`: Streng. Verwirft jegliche Verletzungen von spezifizierten Anforderungen oder Empfehlungen.

#### JPEG XL Unterstützung

Firefox unterstützt [JPEG XL](https://jpeg.org/jpegxl/) Bilder, wenn diese Funktion aktiviert ist. Siehe [Firefox Bug 1539075](https://bugzil.la/1539075) für weitere Details.

Es sei darauf hingewiesen, dass die Funktion nur auf Nightly Builds verfügbar ist (unabhängig davon, ob die Präferenz gesetzt ist oder nicht). In Firefox 149 wurde der vorherige C++ [JPEG XL](https://jpeg.org/jpegxl/) Bilddecodierer durch eine neue, auf Rust basierende Implementierung ersetzt, die die `jxl-rs` Bibliothek verwendet ([Firefox Bug 1986393](https://bugzil.la/1986393)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 90                  | Nein                     |
| Developer Edition | —                   | —                        |
| Beta              | —                   | —                        |
| Release           | —                   | —                        |

- `image.jxl.enabled`
  - : Auf `true` setzen, um zu aktivieren.

#### Document Picture-in-Picture API

Die [Document Picture-in-Picture API](/de/docs/Web/API/Document_Picture-in-Picture_API) ermöglicht es, ein stets im Vordergrund befindliches Fenster zu öffnen, das mit beliebigem HTML-Inhalt gefüllt werden kann, wie etwa einem Video mit benutzerdefinierten Steuerelementen oder einem Set an Streams, die die Teilnehmer eines Videoanrufs zeigen. Siehe [Firefox Bug 1858562](https://bugzil.la/1858562) für weitere Details.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 148                 | Ja                       |
| Developer Edition | 148                 | Nein                     |
| Beta              | 148                 | Nein                     |
| Release           | 148                 | Nein                     |

- `dom.documentpip.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### WebVR API (Deaktiviert)

Die veraltete [WebVR API](/de/docs/Web/API/WebVR_API) befindet sich auf dem Weg zur Entfernung. Sie ist standardmäßig auf allen Builds deaktiviert [Firefox Bug 1750902](https://bugzil.la/1750902).

| Release-Kanal     | Version entfernt | Standardmäßig aktiviert? |
| ----------------- | ---------------- | ------------------------ |
| Nightly           | 98               | Nein                     |
| Developer Edition | 98               | Nein                     |
| Beta              | 98               | Nein                     |
| Release           | 98               | Nein                     |

- `dom.vr.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### GeometryUtils Methoden: convertPointFromNode(), convertRectFromNode(), und convertQuadFromNode()

Die `GeometryUtils`-Methoden `convertPointFromNode()`, `convertRectFromNode()`, und `convertQuadFromNode()` transponieren den angegebenen Punkt, das angegebene Rechteck oder Viereck von dem [`Node`](/de/docs/Web/API/Node), auf dem sie aufgerufen werden, auf einen anderen Knoten. (Siehe [Firefox Bug 918189](https://bugzil.la/918189) für weitere Details.)

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 31                  | Ja                       |
| Developer Edition | 31                  | Nein                     |
| Beta              | 31                  | Nein                     |
| Release           | 31                  | Nein                     |

- `layout.css.convertFromNode.enable`
  - : Auf `true` setzen, um zu aktivieren.

### GeometryUtils Methode: getBoxQuads()

Die `GeometryUtils`-Methode `getBoxQuads()` gibt die CSS-Boxen für einen [`Node`](/de/docs/Web/API/Node) relativ zu einem anderen Knoten oder Viewport zurück. (Siehe [Firefox Bug 917755](https://bugzil.la/917755) für weitere Details.)

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 31                  | Ja                       |
| Developer Edition | 31                  | Nein                     |
| Beta              | 31                  | Nein                     |
| Release           | 31                  | Nein                     |

- `layout.css.getBoxQuads.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Payment Request API

#### Primäre Zahlungsabwicklung

Die [Payment Request API](/de/docs/Web/API/Payment_Request_API) bietet Unterstützung für die Bearbeitung von webbasierten Zahlungen innerhalb von Webinhalten oder Apps. Aufgrund eines Fehlers, der während der Benutzeroberflächentests auftrat, haben wir beschlossen, die Auslieferung dieser API zu verschieben, während Diskussionen über mögliche Änderungen an der API geführt werden. Die Arbeiten sind im Gange. (Siehe [Firefox Bug 1318984](https://bugzil.la/1318984) für weitere Details.)

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 55                  | Nein                     |
| Developer Edition | 55                  | Nein                     |
| Beta              | 55                  | Nein                     |
| Release           | 55                  | Nein                     |

- `dom.payments.request.enabled`
  - : Auf `true` setzen, um zu aktivieren.
- `dom.payments.request.supportedRegions`
  - : Ländercodes als durch Komma getrennte Erlaubnisliste von Regionen (z. B. `US,CA`).

### WebShare API

Die [Web Share API](/de/docs/Web/API/Web_Share_API) ermöglicht das Teilen von Dateien, URLs und anderen Daten von einer Website aus. Diese Funktion ist auf Android in allen Builds aktiviert, aber auf Desktop hinter einer Präferenz (sofern nicht unten angegeben).

| Release-Kanal     | Version geändert | Standardmäßig aktiviert?                    |
| ----------------- | ---------------- | ------------------------------------------- |
| Nightly           | 71               | Nein (Standard). Ja (Windows ab Version 92) |
| Developer Edition | 71               | Nein                                        |
| Beta              | 71               | Nein                                        |
| Release           | 71               | Nein (Desktop). Ja (Android).               |

- `dom.webshare.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Notifications API

Benachrichtigungen haben die [`requireInteraction`](/de/docs/Web/API/Notification/requireInteraction) Eigenschaft auf Windows-Systemen und in der Nightly-Version standardmäßig auf true gesetzt ([Firefox Bug 1794475](https://bugzil.la/1794475)).

| Release-Kanal     | Version geändert | Standardmäßig aktiviert? |
| ----------------- | ---------------- | ------------------------ |
| Nightly           | 117              | Ja                       |
| Developer Edition | 117              | Nein                     |
| Beta              | 117              | Nein                     |
| Release           | 117              | Nur Windows              |

- `dom.webnotifications.requireinteraction.enabled`
  - : Auf `true` setzen, um zu aktivieren.

## Sicherheit und Privatsphäre

### Kennzeichnung unsicherer Seiten

Die beiden Präferenzen `security.insecure_connection_text_*` fügen ein Textlabel "Nicht sicher" in der Adressleiste neben dem traditionellen Schloss-Symbol hinzu, wenn eine Seite unsicher geladen wird (das heißt, mit {{Glossary("HTTP", "HTTP")}} anstatt mit {{Glossary("HTTPS", "HTTPS")}}). Die Präferenz `browser.urlbar.trimHttps` kürzt das `https:` Präfix von URLs in der Adressleiste. Siehe [Firefox Bug 1853418](https://bugzil.la/1853418) für weitere Details.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 121                 | Ja                       |
| Developer Edition | 60                  | Nein                     |
| Beta              | 60                  | Nein                     |
| Release           | 60                  | Nein                     |

- `security.insecure_connection_text.enabled`
  - : Auf `true` setzen, um das Textlabel für den normalen Browsermodus zu aktivieren.
- `security.insecure_connection_text.pbmode.enabled`
  - : Auf `true` setzen, um das Textlabel für den privaten Browsermodus zu aktivieren.
- `browser.urlbar.trimHttps`
  - : Auf `true` setzen, um das `https:` Präfix von URLs in der Adressleiste zu kürzen.

### Einschränkung von Inhalten für Erwachsene mit `<meta name="rating">`

Das nicht standardmäßige [`<meta name="rating">`](/de/docs/Web/HTML/Reference/Elements/meta) Element kann in eine Webseite aufgenommen werden, um den Inhalt der Seite als eingeschränkt/erwachsen zu kennzeichnen. Zum Zeitpunkt des Schreibens gibt es zwei mögliche `content` Werte, `adult` ([definiert von Google](https://developers.google.com/search/docs/specialty/explicit/guidelines#add-metadata)) und `RTA-5042-1996-1400-1577-RTA` ([definiert von ASACP](https://www.rtalabel.org/?content=howto#top)), die denselben Effekt haben (weitere Optionen können in Zukunft hinzugefügt werden).

Die folgenden `<meta>` Elemente sind gleichbedeutend:

```html
<meta name="rating" content="adult" />
<meta name="rating" content="RTA-5042-1996-1400-1577-RTA" />
```

Browser, die dieses Element erkennen, können dann Schritte unternehmen, um Nutzer daran zu hindern, den Inhalt zu sehen. Die Firefox-Implementierung ersetzt die Seite durch den Inhalt, der unter `about:restricted` gefunden wird, der dem Benutzer erklärt, dass sie versuchen, eingeschränkte Inhalte anzuzeigen, erklärt, warum sie es nicht sehen können, und ihnen einen Zurück-Button gibt, um von dort aus zurückzukehren, woher sie kamen.

Siehe [Firefox Bug 1991135](https://bugzil.la/1991135) für weitere Details.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 146                 | Nein                     |
| Developer Edition | 146                 | Nein                     |
| Beta              | 146                 | Nein                     |
| Release           | 146                 | Nein                     |

- `security.restrict_to_adults.always`
  - : Auf `true` setzen, um den Zugang zu Webseiten zu beschränken, die sich als Erwachseneninhalt identifizieren, indem sie ein `<meta name="rating">` Element einfügen.
- `security.restrict_to_adults.respect_platform`
  - : Auf `true` setzen, um den Zugang zu Webseiten zu beschränken, die sich als Erwachseneninhalt identifizieren, indem sie ein `<meta name="rating">` Element nur dann einfügen, wenn geeignete Kindersicherungen auf dem zugrunde liegenden Betriebssystem gesetzt sind (z. B. wenn die _Inhalts- & Privatsphäre_ Einstellungen von macOS eingestellt sind, um explizite Webinhalte zu beschränken).

### Berechtigungspolitik / Feature-Politik

[Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) ermöglicht es Webentwicklern, bestimmte Funktionen und APIs im Browser selektiv zu aktivieren, zu deaktivieren und deren Verhalten zu ändern. Es ähnelt CSP, steuert jedoch Funktionen anstelle von Sicherheitsverhalten. Dies ist in Firefox als **Feature Policy** implementiert, der Name, der in einer früheren Version der Spezifikation verwendet wurde.

Beachten Sie, dass unterstützte Richtlinien über das [`allow`](/de/docs/Web/HTML/Reference/Elements/iframe#allow) Attribut auf `<iframe>` Elementen gesetzt werden können, selbst wenn die Benutzerpräferenz nicht gesetzt ist.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 65                  | Nein                     |
| Developer Edition | 65                  | Nein                     |
| Beta              | 65                  | Nein                     |
| Release           | 65                  | Nein                     |

- `dom.security.featurePolicy.header.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Privacy Preserving Attribution API (PPA)

Die [PPA API](https://support.mozilla.org/en-US/kb/privacy-preserving-attribution) bietet eine Alternative zum Benutzer-Tracking für die Werbezurechnung, indem das neue `navigator.privateAttribution` Objekt mit den Methoden `saveImpression()` und `measureConversion()` verwendet wird. Lesen Sie mehr über PPA [im ursprünglichen Erklärer](https://github.com/mozilla/explainers/tree/main/archive/ppa-experiment) und die [vorgeschlagene Spezifikation](https://w3c.github.io/ppa/). Dieses Experiment kann für Websites über [Origin Trial](https://wiki.mozilla.org/Origin_Trials) oder im Browser durch Setzen der Präferenz auf `1` aktiviert werden. ([Firefox Bug 1900929](https://bugzil.la/1900929)).

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

Die {{httpheader("Integrity-Policy")}} und {{httpheader("Integrity-Policy-Report-Only")}} HTTP-Header werden jetzt für Style-Ressourcen unterstützt. Damit können Webseiten entweder [Subressourcen-Integritätsgarantien](/de/docs/Web/Security/Defenses/Subresource_Integrity) für Stile erzwingen oder nur Verstöße gegen die Richtlinie melden. Beachten Sie, dass Firefox Reporting-Endpunkte ignoriert und Verstöße in der Entwicklerkonsole protokolliert. Wenn `Integrity-Policy` verwendet wird, blockiert der Browser das Laden von Stilen, die in einem {{HTMLElement("link")}} Element mit [`rel="stylesheet"`](/de/docs/Web/HTML/Reference/Attributes/rel#stylesheet) referenziert werden, wenn sie entweder nicht das [`integrity`](/de/docs/Web/HTML/Reference/Elements/script#integrity) Attribut aufweisen oder einen Integritätshash haben, der nicht mit der Ressource auf dem Server übereinstimmt. ([Firefox Bug 1976656](https://bugzil.la/1976656)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 142                 | Nein                     |
| Developer Edition | 142                 | Nein                     |
| Beta              | 142                 | Nein                     |
| Release           | 142                 | Nein                     |

- `security.integrity_policy.stylesheet.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Storage Access Header

Die {{httpheader("Sec-Fetch-Storage-Access")}} und {{httpheader("Activate-Storage-Access")}} HTTP-Header werden jetzt unterstützt und ermöglichen einen effizienteren [Storage Access API](/de/docs/Web/API/Storage_Access_API) Workflow. ([Firefox Bug 1991688](https://bugzil.la/1991688)).

Im JavaScript-only-Workflow muss eine Drittanbieter-Ressource angefordert und geladen werden, um eine Speicherzugriffsberechtigung für einen bestimmten Kontext (z. B. ein neuer Browser-Tab) zu aktivieren. Dies ist auch dann erforderlich, wenn die Berechtigung bereits gewährt wurde. Die Speicherzugriff-Header ermöglichen es dem Browser, den Berechtigungsstatus für den jeweiligen Kontext anzugeben, damit der Server die Aktivierung einer bereits gewährten Berechtigung anfordern kann. Dies vermeidet den Overhead, die Ressource unnötig abzurufen und zu laden.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 145                 | Ja                       |
| Developer Edition | 145                 | Nein                     |
| Beta              | 145                 | Nein                     |
| Release           | 145                 | Nein                     |

- `dom.storage_access.headers.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Idempotency-Key

Der {{httpheader("Idempotency-Key")}} HTTP-Anforderungsheader kann von der Client-Code-Website verwendet werden, um {HTTPMethod("POST")}} oder {HTTPMethod("PATCH")}} Anfragen {{Glossary("idempotent", "idempotent")}} zu machen, wenn sie mit einem Server verwendet werden, der die Funktion unterstützt. Die Spezifikation gibt an, dass der Server dokumentieren und angeben sollte, welche Endpunkte diesen Header erfordern, das Format des Schlüssels und die erwarteten Fehlermeldungen.

Firefox fügt den Header _automatisch_ mit einem eindeutigen Schlüssel für jede neue `POST`-Anfrage hinzu, wenn er noch nicht durch den seitlichen Seiten-Client-Code hinzugefügt wurde. Dies vereinfacht den seitlichen Code, der erforderlich ist, um mit Servern zu arbeiten, die die Funktion unterstützen.

([Firefox Bug 1830022](https://bugzil.la/1830022)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 135                 | Nein                     |
| Developer Edition | 135                 | Nein                     |
| Beta              | 135                 | Nein                     |
| Release           | 135                 | Nein                     |

- `network.http.idempotencyKey.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Accept-Header mit MIME-Typ image/jxl

Der HTTP-Header [`Accept`](/de/docs/Web/HTTP/Reference/Headers/Accept) in [Standardanfragen und Bildanforderungen](/de/docs/Web/HTTP/Guides/Content_negotiation/List_of_default_Accept_values) kann über eine Präferenz konfiguriert werden, um die Unterstützung für den MIME-Typ `image/jxl` anzuzeigen.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 128                 | Nein                     |
| Developer Edition | 128                 | Nein                     |
| Beta              | 128                 | Nein                     |
| Release           | 128                 | Nein                     |

- `image.jxl.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### SameSite=Lax standardmäßig

[`SameSite`.cookies](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) haben standardmäßig den Wert `Lax`. Mit dieser Einstellung werden Cookies nur gesendet, wenn ein Benutzer zur Ursprungsseite navigiert, nicht für bereichsübergreifende Subrequests, um Bilder oder Frames auf einer Drittanbieter-Website zu laden und so weiter. Weitere Details finden Sie unter [Firefox Bug 1617609](https://bugzil.la/1617609).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 69                  | Nein                     |
| Developer Edition | 69                  | Nein                     |
| Beta              | 69                  | Nein                     |
| Release           | 69                  | Nein                     |

- `network.cookie.sameSite.laxByDefault`
  - : Auf `true` setzen, um zu aktivieren.

### Access-Control-Allow-Headers Jokerzeichen deckt Authorization nicht ab

Der [`Access-Control-Allow-Headers`](/de/docs/Web/HTTP/Reference/Headers/Access-Control-Allow-Headers) ist eine Antwort auf eine {{Glossary("Preflight_request", "CORS Preflight-Anfrage")}}, die angibt, welche Anforderungsheader in der endgültigen Anfrage enthalten sein dürfen. Die Antwortdirektive kann ein Jokerzeichen (`*`) enthalten, das angibt, dass die endgültige Anfrage alle Header außer dem `Authorization` Header enthalten darf.

Standardmäßig fügt Firefox den `Authorization`-Header in der endgültigen Anfrage hinzu, nachdem es eine Antwort mit `Access-Control-Allow-Headers: *` erhalten hat. Um sicherzustellen, dass Firefox den `Authorization`-Header nicht einschließt, setzen Sie die Präferenz auf `false`. Weitere Details siehe [Firefox Bug 1687364](https://bugzil.la/1687364).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 115                 | Ja                       |
| Developer Edition | 115                 | Ja                       |
| Beta              | 115                 | Ja                       |
| Release           | 115                 | Ja                       |

- `network.cors_preflight.authorization_covered_by_wildcard`
  - : Auf `true` setzen, um zu aktivieren.

## Entwicklerwerkzeuge

Die Entwicklerwerkzeuge von Mozilla entwickeln sich ständig weiter. Wir experimentieren mit neuen Ideen, fügen neue Funktionen hinzu und testen sie auf den Nightly- und Developer Edition-Kanälen, bevor sie Beta und Release erreichen. Die oben genannten Funktionen sind die aktuelle Auswahl an experimentellen Entwicklertools.

**Keine experimentellen Funktionen in diesem Veröffentlichungszyklus.**

## Siehe auch

- [Firefox-Entwickler-Veröffentlichungsnotizen](/de/docs/Mozilla/Firefox/Releases)
- [Firefox Nightly](https://www.firefox.com/en-US/channel/desktop/)
- [Firefox Developer Edition](https://www.firefox.com/en-US/channel/desktop/developer/)
