---
title: Experimentelle Funktionen in Firefox
short-title: Experimentelle Funktionen
slug: Mozilla/Firefox/Experimental_features
l10n:
  sourceCommit: 348c4c91586f188bc3439f2aab767ecd553fc6d3
---

Diese Seite listet die experimentellen und teilweise implementierten Funktionen von Firefox auf, einschließlich sich entwickelnder oder vorgeschlagener Webplattform-Standards.
Jeder Eintrag unten enthält Informationen über die Builds, in denen eine Funktion enthalten ist (Nightly, Beta, Developer Edition oder Release), ob sie standardmäßig aktiviert ist oder nicht, und den Namen der **Präferenz**, mit der Sie die Funktion aktivieren oder konfigurieren können.
Die Beschreibung jeder Funktion enthält auch Links zu relevanten [Bugzilla-Bugs](https://bugzilla.mozilla.org), die die Funktion implementieren oder aktivieren.
Diese Informationen ermöglichen es Ihnen, experimentelle Funktionen auszuprobieren und Feedback zu geben, bevor sie offiziell veröffentlicht werden.

In Bezug auf den Lebenszyklus erscheinen neue Funktionen normalerweise zuerst in [Nightly](https://www.firefox.com/en-US/channel/desktop/#nightly), wo sie oft standardmäßig aktiviert sind, um frühzeitiges Feedback und Tests zu erhalten.
Wenn keine größeren Probleme gefunden werden, werden sie in [Beta](https://www.firefox.com/en-US/channel/desktop/#beta) und [Developer Edition](https://www.firefox.com/en-US/channel/desktop/developer/) Vorab-Builds aufgenommen. Schließlich werden genehmigte Funktionen im [stabilen Release](https://www.firefox.com/en-US/) Kanal veröffentlicht.
Wenn eine Funktion in einem Release standardmäßig aktiviert wird, wird sie nicht mehr als experimentell betrachtet und von dieser Seite entfernt.

Um diese Funktionen zu aktivieren, geben Sie `about:config` in die Firefox-Adressleiste ein, suchen Sie die zugehörige **Präferenz** und ändern Sie deren Wert, der normalerweise ein Umschalter zwischen `true` und `false` ist.
Je nach Funktion müssen Sie möglicherweise den Browser neu starten, damit die Änderung wirksam wird.
Lesen Sie den [Firefox-Konfigurationseditor](https://support.mozilla.org/en-US/kb/about-config-editor-firefox) Support-Artikel, um mehr Informationen über das Verwalten von Präferenzen in Firefox zu erhalten.

## HTML

### Layout für input type="search"

Das Layout für `input type="search"` wurde aktualisiert. Dadurch hat ein Suchfeld ein Löschsymbol, sobald jemand darin zu tippen beginnt, um andere Browserimplementierungen zu entsprechen. (Siehe [Firefox-Bug 558594](https://bugzil.la/558594) für weitere Details.)

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 81                  | Nein                     |
| Developer Edition | 81                  | Nein                     |
| Beta              | 81                  | Nein                     |
| Release           | 81                  | Nein                     |

- `layout.forms.input-type-search.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Umschalten der Passwortanzeige

HTML-Passworteingabeelemente ([`<input type="password">`](/de/docs/Web/HTML/Reference/Elements/input/password)) enthalten ein "Augen"-Symbol, das umgeschaltet werden kann, um den Passworttext anzuzeigen oder zu verbergen ([Firefox-Bug 502258](https://bugzil.la/502258)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 96                  | Nein                     |
| Developer Edition | 96                  | Nein                     |
| Beta              | 96                  | Nein                     |
| Release           | 96                  | Nein                     |

- `layout.forms.reveal-password-button.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Zeitwähler in `datetime-local` und `time` Eingabeelementen

Die HTML-Eingabeelemente [`<input type="datetime-local">`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local) und [`<input type="time">`](/de/docs/Web/HTML/Reference/Elements/input/time) unterstützen einen Zeitwähler. ([Firefox-Bug 1726108](https://bugzil.la/1726108)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 144                 | Nein                     |
| Developer Edition | 144                 | Nein                     |
| Beta              | 144                 | Nein                     |
| Release           | 144                 | Nein                     |

- `dom.forms.datetime.timepicker`
  - : Auf `true` setzen, um zu aktivieren.

### `alpha` und `colorspace` Attribute in `color` Eingabeelementen

Das HTML-Eingabeelement [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color) unterstützt die [`alpha`](/de/docs/Web/HTML/Reference/Elements/input/color#alpha) & [`colorspace`](/de/docs/Web/HTML/Reference/Elements/input/color#colorspace) Attribute. ([Firefox-Bug 1919718](https://bugzil.la/1919718)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 149                 | Ja                       |
| Developer Edition | -                   | -                        |
| Beta              | -                   | -                        |
| Release           | -                   | -                        |

- `dom.forms.html_color_picker.enabled`
  - : Auf `true` setzen, um zu aktivieren.

## CSS

### Hex-Boxen zur Anzeige von streunenden Steuerzeichen

Diese Funktion rendert Steuerzeichen (Unicode-Kategorie Cc) außer _Tabulator_ (`U+0009`), _Zeilenumbruch_ (`U+000A`), _Formfeed_ (`U+000C`) und _Wagenrücklauf_ (`U+000D`) als Hex-Box, wenn sie nicht erwartet werden. (Siehe [Firefox-Bug 1099557](https://bugzil.la/1099557) für weitere Details.)

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 43                  | Ja                       |
| Developer Edition | 43                  | Nein                     |
| Beta              | 43                  | Nein                     |
| Release           | 43                  | Nein                     |

- `layout.css.control-characters.visible`
  - : Auf `true` setzen, um zu aktivieren.

### initial-letter Eigenschaft

Die {{cssxref("initial-letter")}} CSS-Eigenschaft ist Teil der [CSS Inline Layout](https://drafts.csswg.org/css-inline/) Spezifikation und ermöglicht Ihnen, festzulegen, wie herabgesetzte, erhöhte und abgesenkte Initialbuchstaben angezeigt werden. (Siehe [Firefox-Bug 1223880](https://bugzil.la/1223880) für weitere Details.)

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 50                  | Nein                     |
| Developer Edition | 50                  | Nein                     |
| Beta              | 50                  | Nein                     |
| Release           | 50                  | Nein                     |

- `layout.css.initial-letter.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### fit-content() Funktion

Die [`fit-content()`](/de/docs/Web/CSS/Reference/Values/fit-content_function) Funktion, wie sie bei {{cssxref("width")}} und anderen Größen-Eigenschaften angewendet wird. Diese Funktion wird bereits gut für das Größenmanagement von CSS Grid Layout-Tracks unterstützt. (Siehe [Firefox-Bug 1312588](https://bugzil.la/1312588) für weitere Details.)

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 91                  | Nein                     |
| Developer Edition | 91                  | Nein                     |
| Beta              | 91                  | Nein                     |
| Release           | 91                  | Nein                     |

- `layout.css.fit-content-function.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Scrollabhängige Animationen

Früher "scrollverknüpfte Animationen" genannt, hängt eine [scrollabhängige Animation](/de/docs/Web/CSS/Guides/Scroll-driven_animations) von der Scrollposition eines Scrollbalkens ab, anstatt von Zeit oder einer anderen Dimension.
Die {{cssxref('scroll-timeline-name')}} und {{cssxref('scroll-timeline-axis')}} Eigenschaften (und die {{cssxref('scroll-timeline')}} Kurzform-Eigenschaft) ermöglichen Ihnen, festzulegen, dass ein bestimmter Scrollbalken in einem bestimmten benannten Container als Quelle für eine scrollabhängige Animation verwendet werden kann.
Die Scroll-Zeitleiste kann dann mit einer [Animation](/de/docs/Web/CSS/Guides/Animations) verknüpft werden, indem die {{cssxref('animation-timeline')}} Eigenschaft auf den in `scroll-timeline-name` definierten Namen gesetzt wird.

Bei der Verwendung der {{cssxref('scroll-timeline')}} Kurzform-Eigenschaft muss die Reihenfolge der Eigenschaftswerte {{cssxref('scroll-timeline-name')}} gefolgt von {{cssxref('scroll-timeline-axis')}} sein.
Die Langform- und Kurzform-Eigenschaften sind beide hinter der Präferenz verfügbar.
Alternativ können Sie die {{cssxref("animation-timeline/scroll")}} funktionale Notation mit {{cssxref('animation-timeline')}} verwenden, um zu signalisieren, dass eine Scrollbalkenachse in einem übergeordneten Element für die Zeitleiste verwendet wird.

Weitere Informationen finden Sie unter [Firefox-Bug 1807685](https://bugzil.la/1807685), [Firefox-Bug 1804573](https://bugzil.la/1804573), [Firefox-Bug 1809005](https://bugzil.la/1809005), [Firefox-Bug 1676791](https://bugzil.la/1676791), [Firefox-Bug 1754897](https://bugzil.la/1754897), [Firefox-Bug 1817303](https://bugzil.la/1817303) und [Firefox-Bug 1737918](https://bugzil.la/1737918).

Die {{cssxref('timeline-scope')}}, {{cssxref('animation-range-start')}} und {{cssxref('animation-range-end')}} Eigenschaften (und die {{cssxref('animation-range')}} Kurzform-Eigenschaft) werden noch nicht unterstützt. Weitere Informationen finden Sie unter [Firefox-Bug 1676779](https://bugzil.la/1676779).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 136                 | Ja                       |
| Developer Edition | 110                 | Nein                     |
| Beta              | 110                 | Nein                     |
| Release           | 110                 | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### prefers-reduced-transparency Medienfunktion

Die CSS {{cssxref("@media/prefers-reduced-transparency")}} Medienfunktion lässt Sie erkennen, ob ein Nutzer die Einstellung aktiviert hat, um die Menge an transparenten oder durchscheinenden Schichteffekten auf seinem Gerät zu minimieren.
Siehe ([Firefox-Bug 1736914](https://bugzil.la/1736914)) für weitere Details.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 113                 | Nein                     |
| Developer Edition | 113                 | Nein                     |
| Beta              | 113                 | Nein                     |
| Release           | 113                 | Nein                     |

- `layout.css.prefers-reduced-transparency.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### inverted-colors Medienfunktion

Die CSS {{cssxref("@media/inverted-colors")}} Medienfunktion lässt Sie erkennen, ob ein User-Agent oder das zugrunde liegende Betriebssystem Farben invertiert.
Siehe ([Firefox-Bug 1794628](https://bugzil.la/1794628)) für weitere Details.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 114                 | Nein                     |
| Developer Edition | 114                 | Nein                     |
| Beta              | 114                 | Nein                     |
| Release           | 114                 | Nein                     |

- `layout.css.inverted-colors.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Benannte View-Fortschrittszeitleisten-Eigenschaft

Die CSS {{cssxref("view-timeline-name")}} Eigenschaft ermöglicht es Ihnen, einem bestimmten Element einen Namen zu geben, indem Sie identifizieren, dass dessen übergeordnetes Scroller-Element die Quelle einer View-Fortschrittszeitleiste ist.
Der Name kann dann der `animation-timeline` zugewiesen werden, die dann das zugeordnete Element animiert, wenn es sich durch den sichtbaren Bereich seines übergeordneten Scrollers bewegt.
Siehe ([Firefox-Bug 1737920](https://bugzil.la/1737920)) für weitere Details.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 136                 | Ja                       |
| Developer Edition | 114                 | Nein                     |
| Beta              | 114                 | Nein                     |
| Release           | 114                 | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Anonyme View-Fortschrittszeitleisten-Funktion

Die CSS {{cssxref("animation-timeline/view")}} Funktion lässt Sie festlegen, dass die `animation-timeline` für ein Element eine View-Fortschrittszeitleiste ist, die das Element animiert, wenn es sich durch den sichtbaren Bereich seines übergeordneten Scrollers bewegt.
Die Funktion definiert die Achse des übergeordneten Elements, die die Zeitleiste liefert, sowie den Ausschnitt im sichtbaren Bereich, bei dem die Animation startet und beginnt.
Siehe ([Firefox-Bug 1808410](https://bugzil.la/1808410)) für weitere Details.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 136                 | Ja                       |
| Developer Edition | 114                 | Nein                     |
| Beta              | 114                 | Nein                     |
| Release           | 114                 | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Anbieter-spezifische Transform-Eigenschaften

Die mit `-moz-` vorangestellten [CSS-Transform](/de/docs/Web/CSS/Guides/Transforms) Eigenschaften können deaktiviert werden, indem die Präferenz `layout.css.prefixes.transforms` auf `false` gesetzt wird. Die Absicht ist, diese zu deaktivieren, sobald die standardmäßigen CSS-Zoomeigenschaften gut unterstützt werden. ([Firefox-Bug 1886134](https://bugzil.la/1886134), [Firefox-Bug 1855763](https://bugzil.la/1855763)).

Konkret wird diese Präferenz die folgenden vorangestellten Eigenschaften deaktivieren:

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

Die CSS {{cssxref("letter-spacing")}} Eigenschaft teilt den angegebenen Zeichenabstand nun gleichmäßig auf beide Seiten jedes Zeichens auf. Dies unterscheidet sich vom aktuellen Verhalten, bei dem der Abstand hauptsächlich auf eine Seite hinzugefügt wird. Dieser Ansatz kann die Textabstände verbessern, insbesondere bei gemischtrichtiger Schrift.
([Firefox-Bug 1891446](https://bugzil.la/1891446)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 128                 | Ja                       |
| Developer Edition | 128                 | Ja                       |
| Beta              | 127                 | Nein                     |
| Release           | 127                 | Nein                     |

- `layout.css.letter-spacing.model`
  - : Auf `true` setzen, um zu aktivieren.

### Zulassen von Pseudo-Elementen nach elementgestützten Pseudo-Elementen

Es wurde begonnen, Pseudo-Elemente wie {{cssxref("::first-letter")}} und {{cssxref("::before")}} zu ermöglichen, die an elementgestützten Pseudo-Elementen wie {{cssxref("::details-content")}} und {{cssxref("::file-selector-button")}} angehängt werden.

Dies ermöglicht es Benutzern, zum Beispiel, das erste Zeichen des {{htmlElement("details")}} Elements mit dem CSS-Selektor `::details-content::first-letter` zu stylen oder Inhalt vor einem {{HTMLElement("input") }} von [`type="file"`](/de/docs/Web/HTML/Reference/Elements/input/file) mit dem CSS-Selektor `::file-selector-button::before` hinzuzufügen.

Derzeit kann nur die Unterstützung für `::details-content::first-letter` mit `@supports(::details-content::first-letter)` geparst werden.
Das `::file-selector-button` Pseudo-Element ist noch nicht als elementgestütztes Pseudo-Element markiert, sodass es keine Möglichkeit gibt, dies zu prüfen.
([Firefox-Bug 1953557](https://bugzil.la/1953557), [Firefox-Bug 1941406](https://bugzil.la/1941406)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 138                 | Nein                     |
| Developer Edition | 138                 | Nein                     |
| Beta              | 138                 | Nein                     |
| Release           | 138                 | Nein                     |

### `:heading` und `:heading()` Pseudoklassen

Die {{cssxref(":heading")}} Pseudoklasse ermöglicht es Ihnen, alle [Überschriftselemente](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) (`<h1>`-`<h6>`) auf einmal zu stylen, anstatt sie einzeln zu adressieren. Die {{cssxref(":heading()")}} Funktionalität erlaubt es Ihnen, Überschriftselemente zu stylen, die einer durch Komma getrennten Liste von ganzen Zahlen entsprechen, die den Überschriftsstufen entsprechen. ([Firefox-Bug 1974386](https://bugzil.la/1974386) & [Firefox-Bug 1984310](https://bugzil.la/1984310)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 142                 | Nein                     |
| Developer Edition | 142                 | Nein                     |
| Beta              | 142                 | Nein                     |
| Release           | 142                 | Nein                     |

- `layout.css.heading-selector.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### `@custom-media` Regel

Die {{cssxref("@custom-media")}} CSS-Regel definiert Aliase für lange oder komplexe Medienabfragen. Anstatt den gleichen hartkodierten `<media-query-list>` in mehreren `@media`-Regeln zu wiederholen, kann er einmal in einer `@custom-media`-Regel definiert und im Stylesheet überall dort, wo er benötigt wird, referenziert werden. ([Firefox-Bug 1744292](https://bugzil.la/1744292)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 148                 | Nein                     |
| Developer Edition | 148                 | Nein                     |
| Beta              | 148                 | Nein                     |
| Release           | 148                 | Nein                     |

- `layout.css.custom-media.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### `<attr-type>` Werte in der `attr()` CSS-Funktion

Die {{cssxref("attr")}} CSS-Funktion unterstützt jetzt [`<attr-type>`](/de/docs/Web/CSS/Reference/Values/attr#attr-type) Werte. Dies erlaubt Ihnen anzugeben, wie ein Attributwert in einen CSS-Wert geparst wird und ermöglicht die direkte Verwendung dieser Werte von [`data-*`](/de/docs/Web/HTML/How_to/Use_data_attributes). ([Firefox-Bug 1986631](https://bugzil.la/1986631), [Firefox-Bug 1998245](https://bugzil.la/1998245))

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 152                 | Ja                       |
| Developer Edition | 149                 | Nein                     |
| Beta              | 149                 | Nein                     |
| Release           | 149                 | Nein                     |

- `layout.css.attr.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### `base-select` Wert für die `appearance` CSS-Eigenschaft

Der [`base-select`](/de/docs/Web/CSS/Reference/Properties/appearance#base-select) Wert für die {{cssxref("appearance")}} CSS-Eigenschaft, die nur für das {{htmlelement("select")}} Element und das {{cssxref("::picker()", "::picker(select)")}} Pseudo-Element relevant ist, erlaubt es Ihnen, sie vollständig zu stylen. Im Moment wird nur das Styling des `<select>`-Elements unterstützt. Das Styling des `::picker(select)`-Pseudo-Elements wird in zukünftigen Versionen hinzugefügt. Diese Funktion ist Teil der Arbeit an [anpassbaren Auswahl-Elementen](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select). Zwei Präferenzen müssen aktiviert sein, um sie zu verwenden. ([Firefox-Bug 1974787](https://bugzil.la/1974787)).

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

### Namensräume in der `attr()` CSS-Funktion

Die {{cssxref("attr")}} CSS-Funktion akzeptiert nun [Namenräume](/de/docs/Web/CSS/Reference/Values/attr#namespaces). Dies ermöglicht es Ihnen, Attribute von Elementen [XML](/de/docs/Web/XML)-basierter Sprachen wie [SVG](/de/docs/Web/SVG) zu verwenden und entsprechend zu stylen. ([Firefox-Bug 2014060](https://bugzil.la/2014060).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 150                 | Nein                     |
| Developer Edition | 150                 | Nein                     |
| Beta              | 150                 | Nein                     |
| Release           | 150                 | Nein                     |

- `layout.css.attr.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Absolut positionierte Elemente in mehrspaltigen Containern und beim Drucken

Absolut positionierte Elemente in [mehrspaltigen Containern](/de/docs/Web/CSS/Guides/Multicol_layout) und beim Drucken sind nun korrekt positioniert und fragmentiert.
Dies verbessert die Interoperabilität mit anderen Browsern und verhindert Layoutprobleme wie sich überlappenden Text oder Inhaltsverlust.
([Firefox-Bug 2018797](https://bugzil.la/2018797)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 150                 | Ja                       |
| Developer Edition | 150                 | Nein                     |
| Beta              | 150                 | Nein                     |
| Release           | 150                 | Nein                     |

- `layout.abspos.fragmentainer-aware-positioning.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### `@container style()` Bereichssyntax-Abfragen

Die [`@container`](/de/docs/Web/CSS/Reference/At-rules/@container) CSS-Regel [`style()`](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries) Abfragen unterstützen nun die _Bereichssyntax_. Dies erlaubt es Ihnen zu überprüfen, ob ein Container eine gültige benutzerdefinierte CSS-Eigenschaft hat und deren Wert mit Vergleichsoperationen wie `>`, `<`, `>=` und `<=` zu vergleichen und entsprechend Stile auf seine Kinder anzuwenden. ([Firefox-Bug 2024601](https://bugzil.la/2024601)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 151                 | Nein                     |
| Developer Edition | 151                 | Nein                     |
| Beta              | 151                 | Nein                     |
| Release           | 151                 | Nein                     |

- `layout.css.attr.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Fix für verschachtelte scrollbare Bereiche

Diese Implementierung wurde hinzugefügt, um ein Problem zu beheben, bei dem scrollbar Inhalts nicht erreichbar war. Wenn ein Scrollbalken auf `display: none;` oder `width: 0;` gesetzt ist, dann wären die Scrollbalken verschachtelter scrollbarer Bereiche übereinander gestapelt, was bedeutet, dass ein Teil des Inhalts möglicherweise nicht erreichbar ist. Dies hat jedoch zur Folge, dass der `@supports selector(::-webkit-scrollbar)` Check `true` zurückgibt, auch wenn das [`::-webkit-scrollbar`](/de/docs/Web/CSS/Reference/Selectors/::-webkit-scrollbar) Pseudoelement nicht wirklich unterstützt wird. ([Firefox-Bug 1977511](https://bugzil.la/1977511)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 151                 | Ja                       |
| Developer Edition | 151                 | Nein                     |
| Beta              | 151                 | Nein                     |
| Release           | 151                 | Nein                     |

- `layout.css.fake-webkit-scrollbar.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### `<timeline-range-name>` Werte

Die {{cssxref("animation-range-start")}}, {{cssxref("animation-range-end")}} CSS-Eigenschaften und {{cssxref("animation-range")}} Kurzform-Eigenschaft unterstützen jetzt [`<timeline-range-name>`](/de/docs/Web/CSS/Reference/Values/timeline-range-name) Werte. Diese [`<timeline-range-name>`](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names#timeline_range_names) Werte ermöglichen es Ihnen, genau anzugeben, welches Segment eine scrollgesteuerte Animation in Anspruch nehmen wird. ([Firefox-Bug 1804775](https://bugzil.la/1804775)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 151                 | Ja                       |
| Developer Edition | 151                 | Nein                     |
| Beta              | 151                 | Nein                     |
| Release           | 151                 | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### `<timeline-range-name>` Werte in `@keyframes` Selektoren

Die {{cssxref("@keyframes")}} Regel unterstützt jetzt [`<timeline-range-name>`](/de/docs/Web/CSS/Reference/Values/timeline-range-name) Werte. Diese [Werte](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names#timeline_range_names) lassen Sie angeben, innerhalb welches Segments eine scrollgesteuerte Animation stattfindet. ([Firefox-Bug 1824875](https://bugzil.la/1824875)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 152                 | Ja                       |
| Developer Edition | 152                 | Nein                     |
| Beta              | 152                 | Nein                     |
| Release           | 152                 | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Baumzählungs-CSS-Funktionen

Die {{cssxref("sibling-count")}} und {{cssxref("sibling-index")}} Funktion werden jetzt unterstützt. Die `sibling-count()` Funktion gibt die Anzahl der Geschwisterelemente sowie das Element selbst zurück. Die `sibling-index()` Funktion gibt die Indexzahl des Elements im Verhältnis zu seinen Geschwistern zurück, beginnend bei `1` und nicht `0`. ([Firefox-Bug 2042063](https://bugzil.la/2042063)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 154                 | Ja                       |
| Developer Edition | 153                 | Nein                     |
| Beta              | 153                 | Nein                     |
| Release           | 153                 | Nein                     |

- `layout.css.tree-counting-functions.enabled`
  - : Auf `true` setzen, um zu aktivieren.

## SVG

**Keine experimentellen Funktionen in diesem Release-Zyklus.**

## MathML

### `href` auf nicht-`<a>` MathML-Elementen deaktivieren

Wenn aktiviert, erstellt das globale Attribut [`href`](/de/docs/Web/MathML/Reference/Global_attributes/href) keinen Hyperlink auf MathML-Elementen außer `<a>`, zur Anpassung an die [MathML-Kern-Spezifikation](https://w3c.github.io/mathml-core/#the-a-element), die nur Hyperlinks auf dem `<a>`-Element definiert. ([Firefox-Bug 2026848](https://bugzil.la/2026848)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 151                 | Ja                       |
| Developer Edition | 151                 | Nein                     |
| Beta              | 151                 | Nein                     |
| Release           | 151                 | Nein                     |

- `mathml.href_link_on_non_anchor_element.disabled`
  - : Auf `true` setzen, um zu aktivieren.

## JavaScript

### TC39 Vorschlag für Iterator includes

Die Methode [`Iterator.prototype.includes()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator/includes) prüft, ob eine `Iterator`-Instanz einen bestimmten Wert erzeugen wird.
Der Vergleich basiert auf dem [SameValueZero-Algorithmus](/de/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness#same-value-zero_equality).
Dieser Algorithmus ist dem strikten Gleichheitsvergleich `===` ähnlich (wo `-0` und `+0` als gleich betrachtet werden), unterscheidet sich aber darin, dass {{jsxref("NaN")}} als gleich zu sich selbst betrachtet wird.
([Firefox-Bug 2025779](https://bugzil.la/2025779)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 152                 | Nein                     |
| Developer Edition | 152                 | Nein                     |
| Beta              | 152                 | Nein                     |
| Release           | 152                 | Nein                     |

- `javascript.options.experimental.iterator_includes`
  - : Auf `true` setzen, um zu aktivieren.

### Textmodulimport

Die `with` Klausel [`{ type: "text" }`](/de/docs/Web/JavaScript/Reference/Statements/import/with#text_modules_type_text) ermöglicht das Importieren des Quellcodes eines Moduls als Zeichenkettenwert.
Der Medientyp der Antwort wird ignoriert, und der Inhalt wird als Text geparst, auch wenn der Quellcode Skripte oder anderen ausführbaren Code enthält.
([Firefox-Bug 2024854](https://bugzil.la/2024854)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 152                 | Nein                     |
| Developer Edition | 152                 | Nein                     |
| Beta              | 152                 | Nein                     |
| Release           | 152                 | Nein                     |

- `javascript.options.experimental.import_text`
  - : Auf `true` setzen, um zu aktivieren.

### Mehrere Import-Maps

Unterstützung für [mehrere Import-Maps](/de/docs/Web/HTML/Reference/Elements/script/type/importmap#merging_multiple_import_maps).
Diese geben Entwicklern mehr Flexibilität bei der Strukturierung und dem Laden von JavaScript-Modulen, da sie nicht mehr all ihre Modulzuordnungen im Voraus kennen und in einem einzelnen Import-Map laden müssen.
([Firefox-Bug 1916277](https://bugzil.la/1916277)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 150                 | Nein                     |
| Developer Edition | 150                 | Nein                     |
| Beta              | 150                 | Nein                     |
| Release           | 150                 | Nein                     |

- `dom.multiple_import_maps.enabled`
  - : Auf `true` setzen, um zu aktivieren.

## APIs

### Absturzberichte

Absturzberichte können jetzt über die [Reporting API](/de/docs/Web/API/Reporting_API) an den `default` Endpunkt gesendet werden.
Beachten Sie, dass Firefox das Bereitstellen von [`CrashReportContext`](/de/docs/Web/API/CrashReportContext) im Berichtsinhalt nicht unterstützt.
([Firefox-Bug 2036160](https://bugzil.la/2036160)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 152                 | Ja                       |
| Developer Edition | 152                 | Nein                     |
| Beta              | 152                 | Nein                     |
| Release           | 152                 | Nein                     |

- `dom.reporting.crash.enabled`
  - : Auf `true` setzen, um zu aktivieren (standardmäßig aktiviert in Nightly).

### Gescopte benutzerdefinierte Elementregister

Die Unterstützung für [gescopte benutzerdefinierte Elementregister](/de/docs/Web/API/Web_components/Using_custom_elements#scoped_custom_element_registries) wird implementiert.
Gescopte Register erlauben es einem Schattendom, ein unabhängiges [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry) zu erstellen, dessen Definitionen nur für diesen spezifischen DOM-Teilbaum gelten.
Dies kann verwendet werden, um Konflikte zu vermeiden, bei denen mehrere Webkomponenten Elemente mit demselben Namen deklarieren.

Die Implementierung umfasst:

- `customElementRegistry` Eigenschaft auf [`Document`](/de/docs/Web/API/Document), [`Element`](/de/docs/Web/API/Element) und [`ShadowRoot`](/de/docs/Web/API/ShadowRoot).
  ([Firefox-Bug 2018900](https://bugzil.la/2018900)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 150                 | Nein                     |
| Developer Edition | 150                 | Nein                     |
| Beta              | 150                 | Nein                     |
| Release           | 150                 | Nein                     |

- `dom.scoped-custom-element-registries.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### CSS Typosiertes Objektmodell Level 1

Die Implementierungsarbeiten am [CSS Typosiertes OM Level 1](https://drafts.css-houdini.org/css-typed-om/) haben begonnen.
Zum Beispiel wird die Methode [`to()`](/de/docs/Web/API/CSSNumericValue/to) der [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) Schnittstelle unterstützt, um einen CSS-nummerischen Wert von einer Einheit in eine andere umzuwandeln.
([Firefox-Bug 1278697](https://bugzil.la/1278697)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 149                 | Nein                     |
| Developer Edition | 149                 | Nein                     |
| Beta              | 149                 | Nein                     |
| Release           | 149                 | Nein                     |

- `layout.css.typed-om.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Grafiken: Canvas, WebGL und WebGPU

#### WebGL: Entwurfserweiterungen

Wenn diese Präferenz aktiviert ist, werden alle WebGL-Erweiterungen, die sich derzeit im "Entwurf"-Status befinden und getestet werden, zur Nutzung aktiviert. Derzeit gibt es keine WebGL-Erweiterungen, die von Firefox getestet werden.

#### WebGPU API

Die [WebGPU API](/de/docs/Web/API/WebGPU_API) bietet Unterstützung auf niedrigem Niveau für die Durchführung von Berechnungen und Grafikwiedergabe mit der [Graphics Processing Unit](https://de.wikipedia.org/wiki/Grafikprozessor) (GPU) des Geräts oder Computers des Benutzers.
Ab Version 142 ist dies unter Windows in allen Kontexten aktiviert, außer in Service-Arbeitern.
Ab Version 147 ist dies unter macOS auf Apple Silicon in allen Browsing-Kontexten aktiviert, außer in Service-Arbeitern.
Für andere Plattformen wie Linux und macOS auf Intel-Silicon ist es in Nightly aktiviert.
Siehe [Firefox-Bug 1602129](https://bugzil.la/1602129) für unseren Fortschritt bei dieser API.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert?                                                        |
| ----------------- | ------------------- | ------------------------------------------------------------------------------- |
| Nightly           | 141                 | Ja                                                                              |
| Developer Edition | 141                 | Nein (Ja auf Windows und macOS auf Apple Silicon, ausgenommen Service-Arbeiter) |
| Beta              | 141                 | Nein (Ja auf Windows und macOS auf Apple Silicon, ausgenommen Service-Arbeiter) |
| Release           | 141                 | Nein (Ja auf Windows und macOS auf Apple Silicon, ausgenommen Service-Arbeiter) |

- `dom.webgpu.enabled`
  - : Auf `true` setzen, um zu aktivieren (aktiviert in Nightly und unter Windows in allen Releases)
- `dom.webgpu.service-workers.enabled`
  - : Auf `true` setzen, um zu aktivieren (aktiviert in Nightly)

### WebRTC und Medien

Die folgenden experimentellen Funktionen beinhalten solche, die in Medien-APIs wie der [WebRTC API](/de/docs/Web/API/WebRTC_API), der [Web Audio API](/de/docs/Web/API/Web_Audio_API), der [Media Source Extensions API](/de/docs/Web/API/Media_Source_Extensions_API), der [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API) und der [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) gefunden werden.

#### HTMLMediaElement Eigenschaften: audioTracks und videoTracks

Wenn Sie diese Funktion aktivieren, werden die Eigenschaften [`HTMLMediaElement.audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks) und [`HTMLMediaElement.videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks) zu allen HTML-Medienelementen hinzugefügt. Da Firefox jedoch derzeit keine mehreren Audio- und Videospuren unterstützt, funktionieren die gängigsten Anwendungsfälle für diese Eigenschaften nicht, sodass sie beide standardmäßig deaktiviert sind. Siehe [Firefox-Bug 1057233](https://bugzil.la/1057233) für mehr Details.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 33                  | Nein                     |
| Developer Edition | 33                  | Nein                     |
| Beta              | 33                  | Nein                     |
| Release           | 33                  | Nein                     |

- `media.track.enabled`
  - : Auf `true` setzen, um zu aktivieren.

#### Asynchrones SourceBuffer Hinzufügen und Entfernen

Dies fügt die auf Versprechen basierten Methoden [`appendBufferAsync()`](/de/docs/Web/API/SourceBuffer/appendBufferAsync) und [`removeAsync()`](/de/docs/Web/API/SourceBuffer/removeAsync) zum Hinzufügen und Entfernen von Medienquellenpuffern zur [`SourceBuffer`](/de/docs/Web/API/SourceBuffer) Schnittstelle hinzu. Siehe [Firefox-Bug 1280613](https://bugzil.la/1280613) und [Firefox-Bug 778617](https://bugzil.la/778617) für weitere Informationen.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 62                  | Nein                     |
| Developer Edition | 62                  | Nein                     |
| Beta              | 62                  | Nein                     |
| Release           | 62                  | Nein                     |

- `media.mediasource.experimental.enabled`
  - : Auf `true` setzen, um zu aktivieren.

#### AVIF-Compliance-Stringenz

Die Präferenz `image.avif.compliance_strictness` kann verwendet werden, um die _Stringenz_ zu steuern, die beim Verarbeiten von [AVIF](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) Bildern angewendet wird.
Dies ermöglicht es Firefox-Benutzern, Bilder anzuzeigen, die in einigen anderen Browsern gerendert werden, auch wenn sie nicht strikt konform sind.

| Release-Kanal     | Version hinzugefügt | Standardwert |
| ----------------- | ------------------- | ------------ |
| Nightly           | 92                  | 1            |
| Developer Edition | 92                  | 1            |
| Beta              | 92                  | 1            |
| Release           | 92                  | 1            |

- `image.avif.compliance_strictness`
  - : Numerischer Wert, der ein _Stringenz_ Level anzeigt. Erlaubte Werte sind:
    - `0`: Nachsichtig. Akzeptiere Bilder mit Verletzungen der Spezifikation sowohl in Empfehlungen ("sollte" Sprache) als auch in Anforderungen ("muss" Sprache), vorausgesetzt, sie können sicher oder unmissverständlich interpretiert werden.
    - `1` **(standardmäßig)**: Gemischt. Lehne Verletzungen von Anforderungen ("muss") ab, erlaube jedoch Verletzungen von Empfehlungen ("sollte").
    - `2`: Strikt. Lehne alle Verletzungen der spezifizierten Anforderungen oder Empfehlungen ab.

#### Unterstützung für JPEG XL

Firefox unterstützt das [JPEG XL](https://jpeg.org/jpegxl/) Bildformat, einen modernen Nachfolger von JPEG, der eine verbesserte Kompression und Bildqualität bietet, zusammen mit neuen Funktionen wie Transparenz, Animation und HDR-Unterstützung.
Siehe [Firefox-Bug 1539075](https://bugzil.la/1539075) und [Firefox-Bug 2016688](https://bugzil.la/2016688) für weitere Details.

In Firefox 149 wurde der bisherige C++ [JPEG XL](https://jpeg.org/jpegxl/) Bild-Decoder durch eine neue Rust-basierte Implementierung ersetzt, die die `jxl-rs` Bibliothek verwendet ([Firefox-Bug 1986393](https://bugzil.la/1986393)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 153                 | Ja                       |
| Developer Edition | 152                 | Nein                     |
| Beta              | 152                 | Nein                     |
| Release           | 152                 | Nein                     |

- `image.jxl.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### WebVR API (Deaktiviert)

Die veraltete [WebVR API](/de/docs/Web/API/WebVR_API) steht zur Entfernung an.
Sie ist standardmäßig in allen Builds deaktiviert [Firefox-Bug 1750902](https://bugzil.la/1750902).

| Release-Kanal     | Version entfernt | Standardmäßig aktiviert? |
| ----------------- | ---------------- | ------------------------ |
| Nightly           | 98               | Nein                     |
| Developer Edition | 98               | Nein                     |
| Beta              | 98               | Nein                     |
| Release           | 98               | Nein                     |

- `dom.vr.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### GeometryUtils Methoden: convertPointFromNode(), convertRectFromNode() und convertQuadFromNode()

Die `GeometryUtils` Methoden `convertPointFromNode()`, `convertRectFromNode()` und `convertQuadFromNode()` konvertieren den gegebenen Punkt, das Rechteck oder das Vierfach aus dem [`Node`](/de/docs/Web/API/Node), auf dem sie aufgerufen werden, zu einem anderen Knoten. (Siehe [Firefox-Bug 918189](https://bugzil.la/918189) für weitere Details.)

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 31                  | Nein                     |
| Developer Edition | 31                  | Nein                     |
| Beta              | 31                  | Nein                     |
| Release           | 31                  | Nein                     |

- `layout.css.convertFromNode.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### GeometryUtils Methode: getBoxQuads()

Die `GeometryUtils` Methode `getBoxQuads()` gibt die CSS-Boxen für einen [`Node`](/de/docs/Web/API/Node) relativ zu einem anderen Knoten oder Ansichtsfenster zurück. (Siehe [Firefox-Bug 917755](https://bugzil.la/917755) für weitere Details.)

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

Die [Payment Request API](/de/docs/Web/API/Payment_Request_API) bietet Unterstützung für die Abwicklung von web-basierten Zahlungen innerhalb von Webinhalten oder Apps. Aufgrund eines Bugs, der bei Tests der Benutzeroberfläche auftrat, haben wir beschlossen, das Shippieren dieser API zu verschieben, während Diskussionen über mögliche Änderungen der API geführt werden. Die Arbeit geht weiter. (Siehe [Firefox-Bug 1318984](https://bugzil.la/1318984) für mehr Details.)

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 55                  | Nein                     |
| Developer Edition | 55                  | Nein                     |
| Beta              | 55                  | Nein                     |
| Release           | 55                  | Nein                     |

- `dom.payments.request.enabled`
  - : Auf `true` setzen, um zu aktivieren.
- `dom.payments.request.supportedRegions`
  - : Ländercodes als kommagetrennte Allowlist von Regionen (z.B. `US,CA`).

### WebShare API

Die [Web Share API](/de/docs/Web/API/Web_Share_API) ermöglicht das Teilen von Dateien, URLs und anderen Daten von einer Website.
Diese Funktion ist auf Android in allen Builds aktiviert, aber hinter einer Präferenz auf Desktop (es sei denn, unten angegeben).

| Release-Kanal     | Version geändert | Standardmäßig aktiviert?                    |
| ----------------- | ---------------- | ------------------------------------------- |
| Nightly           | 71               | Nein (Standard). Ja (Windows ab Version 92) |
| Developer Edition | 71               | Nein                                        |
| Beta              | 71               | Nein                                        |
| Release           | 71               | Nein (Desktop). Ja (Android).               |

- `dom.webshare.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Notifications API

Benachrichtigungen haben standardmäßig die [`requireInteraction`](/de/docs/Web/API/Notification/requireInteraction) Eigenschaft auf true gesetzt auf Windows-Systemen und in der Nightly-Version ([Firefox-Bug 1794475](https://bugzil.la/1794475)).

| Release-Kanal     | Version geändert | Standardmäßig aktiviert? |
| ----------------- | ---------------- | ------------------------ |
| Nightly           | 117              | Ja                       |
| Developer Edition | 117              | Nein                     |
| Beta              | 117              | Nein                     |
| Release           | 117              | Nur Windows              |

- `dom.webnotifications.requireinteraction.enabled`
  - : Auf `true` setzen, um zu aktivieren.

## Sicherheit und Datenschutz

### Kennzeichnung unsicherer Seiten

Die beiden `security.insecure_connection_text_*` Präferenzen fügen ein "Nicht sicher"-Textlabel in die Adressleiste neben dem traditionellen Schloss-Symbol, wenn eine Seite unsicher geladen wird (d.h. mit {{Glossary("HTTP", "HTTP")}} anstelle von {{Glossary("HTTPS", "HTTPS")}}). Die Präferenz `browser.urlbar.trimHttps` entfernt das `https:`-Präfix aus URL der Adressleiste. Siehe [Firefox-Bug 1853418](https://bugzil.la/1853418) für weitere Details.

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
  - : Auf `true` setzen, um das `https:`-Präfix aus URL der Adressleiste zu entfernen.

### Einschränkung von Inhalten für Erwachsene mit `<meta name="rating">`

Das nicht standardisierte [`<meta name="rating">`](/de/docs/Web/HTML/Reference/Elements/meta) Element kann auf einer Webseite enthalten sein, um den Inhalt der Seite als eingeschränkt/erwachsen zu kennzeichnen. Zum Zeitpunkt des Schreibens gibt es zwei mögliche `content` Werte, `adult` ([definiert von Google](https://developers.google.com/search/docs/specialty/explicit/guidelines#add-metadata)) und `RTA-5042-1996-1400-1577-RTA` ([definiert von ASACP](https://www.rtalabel.org/?content=howto#top)), die denselben Effekt haben (weitere Optionen können in Zukunft hinzugefügt werden).

Die folgenden `<meta>` Elemente sind äquivalent:

```html
<meta name="rating" content="adult" />
<meta name="rating" content="RTA-5042-1996-1400-1577-RTA" />
```

Browser, die dieses Element erkennen, können dann Schritte unternehmen, um Benutzer daran zu hindern, den Inhalt anzusehen. Die Implementierung von Firefox ersetzt die Seite durch den Inhalt, der unter `about:restricted` zu finden ist, der dem Benutzer erklärt, dass er versucht, eingeschränkten Inhalt anzusehen, erklärt, warum er ihn nicht ansehen kann, und ihm eine Zurück-Schaltfläche gibt, um zurückzukehren, woher er gekommen ist.

Siehe [Firefox-Bug 1991135](https://bugzil.la/1991135) für weitere Details.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 146                 | Nein                     |
| Developer Edition | 146                 | Nein                     |
| Beta              | 146                 | Nein                     |
| Release           | 146                 | Nein                     |

- `security.restrict_to_adults.always`
  - : Auf `true` setzen, um den Zugang zu Webseiten zu beschränken, die sich selbst als Erwachseneninhalt identifizieren, indem sie ein `<meta name="rating">` Element enthalten.
- `security.restrict_to_adults.respect_platform`
  - : Auf `true` setzen, um den Zugang zu Webseiten zu beschränken, die sich selbst als Erwachseneninhalt identifizieren, indem sie ein `<meta name="rating">` Element nur enthalten, wenn geeignete Kindersicherungen auf dem zugrunde liegenden Betriebssystem eingestellt sind (zum Beispiel, wenn die macOS _Inhalts- und Datenschutzeinstellungen_ auf die Einschränkung expliziter Webinhalte eingestellt sind).

### Berechtigungspolitik / Feature-Policy

[Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) erlaubt es Webentwicklern, die Funktionen und APIs im Browser selektiv zu aktivieren, zu deaktivieren und ihr Verhalten zu ändern. Es ist ähnlich wie CSP, aber steuert Funktionen anstelle von Sicherheitsverhalten.
Dies wird in Firefox als **Feature-Policy** implementiert, der Name, der in einer früheren Version der Spezifikation verwendet wurde.

Beachten Sie, dass unterstützte Richtlinien über das [`allow`](/de/docs/Web/HTML/Reference/Elements/iframe#allow) Attribut auf `<iframe>` Elementen gesetzt werden können, auch wenn die Benutzerpräferenz nicht eingestellt ist.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 65                  | Nein                     |
| Developer Edition | 65                  | Nein                     |
| Beta              | 65                  | Nein                     |
| Release           | 65                  | Nein                     |

- `dom.security.featurePolicy.header.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Datenschutzschonende Attribution API (PPA)

[PPA API](https://support.mozilla.org/en-US/kb/privacy-preserving-attribution) bietet eine Alternative zum Benutzer-Tracking für Werbeattribution unter Verwendung des neuen `navigator.privateAttribution` Objekts mit `saveImpression()` und `measureConversion()` Methoden. Lesen Sie mehr über PPA [im ursprünglichen Erläuterer](https://github.com/mozilla/explainers/tree/main/archive/ppa-experiment) und der [vorgeschlagenen Spezifikation](https://w3c.github.io/ppa/). Dieses Experiment kann für Websites via [Herkunftsversuch](https://wiki.mozilla.org/Origin_Trials) oder im Browser durch Setzen der Präferenz auf `1` aktiviert werden. ([Firefox-Bug 1900929](https://bugzil.la/1900929)).

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

Die {{httpheader("Integrity-Policy")}} und {{httpheader("Integrity-Policy-Report-Only")}} HTTP-Header werden jetzt für Style-Ressourcen unterstützt. Diese ermöglichen es Websites, entweder [Subresource-Integritätsgarantien](/de/docs/Web/Security/Defenses/Subresource_Integrity) für Style zu erzwingen oder nur Verstöße gegen die Richtlinie zu melden.
Beachten Sie, dass Firefox die Berichts-Endpunkte ignoriert und Verstöße in der Entwicklerkonsole protokolliert.
Wenn `Integrity-Policy` verwendet wird, blockiert der Browser das Laden von Styles, die in einem {{HTMLElement("link")}} Element mit [`rel="stylesheet"`](/de/docs/Web/HTML/Reference/Attributes/rel#stylesheet) referenziert werden, die entweder das [`integrity`](/de/docs/Web/HTML/Reference/Elements/script#integrity) Attribut fehlen oder einen Integritäts-Hash haben, der nicht mit der Ressource auf dem Server übereinstimmt.
([Firefox-Bug 1976656](https://bugzil.la/1976656)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 142                 | Nein                     |
| Developer Edition | 142                 | Nein                     |
| Beta              | 142                 | Nein                     |
| Release           | 142                 | Nein                     |

- `security.integrity_policy.stylesheet.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Idempotency-Key

Der {{httpheader("Idempotency-Key")}} HTTP-Request-Header kann von Website-Client-Code verwendet werden, um eine {{HTTPMethod("POST")}} oder {{HTTPMethod("PATCH")}} Anfragen {{Glossary("idempotent", "idempotent")}} zu machen, wenn sie mit einem unterstützenden Server verwendet werden.
Die Spezifikation gibt an, dass der Server dokumentieren und bekannt machen sollte, welche Endpunkte diesen Header erfordern, das Format des Schlüssels und erwartete Fehlerantworten.

Firefox fügt automatisch den Header mit einem einzigartigen Schlüssel für jede neue `POST` Anfrage hinzu, wenn er nicht bereits vom client-seitigen Code der Seite hinzugefügt wurde.
Dies vereinfacht den client-seitigen Code, der erforderlich ist, um mit Servern zu arbeiten, die die Funktion unterstützen.

([Firefox-Bug 1830022](https://bugzil.la/1830022)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 135                 | Nein                     |
| Developer Edition | 135                 | Nein                     |
| Beta              | 135                 | Nein                     |
| Release           | 135                 | Nein                     |

- `network.http.idempotencyKey.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Accept-Header mit MIME-Typ image/jxl

Der HTTP [`Accept`](/de/docs/Web/HTTP/Reference/Headers/Accept) Header in [Standardanfragen und Bildanfragen](/de/docs/Web/HTTP/Guides/Content_negotiation/List_of_default_Accept_values) kann über eine Präferenz so konfiguriert werden, dass er Unterstützung für den MIME-Typ `image/jxl` anzeigt.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 128                 | Nein                     |
| Developer Edition | 128                 | Nein                     |
| Beta              | 128                 | Nein                     |
| Release           | 128                 | Nein                     |

- `image.jxl.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### SameSite=Lax standardmäßig

[`SameSite` Cookies](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) haben einen Standardwert von `Lax`.
Mit dieser Einstellung werden Cookies nur gesendet, wenn ein Benutzer zu der Ursprungs-Website navigiert, nicht für subrequests von Drittanbietern, um Bilder oder Frames auf einer externen Website zu laden und so weiter.
Weitere Informationen finden Sie unter [Firefox-Bug 1617609](https://bugzil.la/1617609).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 69                  | Nein                     |
| Developer Edition | 69                  | Nein                     |
| Beta              | 69                  | Nein                     |
| Release           | 69                  | Nein                     |

- `network.cookie.sameSite.laxByDefault`
  - : Auf `true` setzen, um zu aktivieren.

### Access-Control-Allow-Headers Platzhalterdeckelung umfasst nicht Authorization

Der [`Access-Control-Allow-Headers`](/de/docs/Web/HTTP/Reference/Headers/Access-Control-Allow-Headers) ist ein Antwortheader auf eine {{Glossary("Preflight_request", "CORS Preflight-Anfrage")}}, die angibt, welche Anfrage-Header in der finalen Anfrage enthalten sein dürfen.
Die Antwortanweisung kann einen Platzhalter (`*`) enthalten, der angibt, dass die endgültige Anfrage alle Header außer dem `Authorization` Header enthalten darf.

Standardmäßig fügt Firefox den `Authorization` Header in der finalen Anfrage hinzu, nachdem eine Antwort mit `Access-Control-Allow-Headers: *` empfangen wurde.
Setzen Sie die Präferenz auf `false`, um sicherzustellen, dass Firefox den `Authorization` Header nicht einfügt.
Weitere Informationen finden Sie unter [Firefox-Bug 1687364](https://bugzil.la/1687364).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 115                 | Ja                       |
| Developer Edition | 115                 | Ja                       |
| Beta              | 115                 | Ja                       |
| Release           | 115                 | Ja                       |

- `network.cors_preflight.authorization_covered_by_wildcard`
  - : Auf `true` setzen, um zu aktivieren.

## Entwicklerwerkzeuge

Die Entwicklerwerkzeuge von Mozilla entwickeln sich ständig weiter. Wir experimentieren mit neuen Ideen, fügen neue Funktionen hinzu und testen sie auf den Nightly und Developer Edition Kanälen, bevor sie zur Beta und zum Release gelangen. Die unten stehenden Funktionen sind die aktuellen experimentellen Entwickler-Werkzeugfunktionen.

**Keine experimentellen Funktionen in diesem Veröffentlichungszyklus.**

## Siehe auch

- [Firefox Entwickler-Versionshinweise](/de/docs/Mozilla/Firefox/Releases)
- [Firefox Nightly](https://www.firefox.com/en-US/channel/desktop/)
- [Firefox Developer Edition](https://www.firefox.com/en-US/channel/desktop/developer/)
