---
title: Experimentelle Funktionen in Firefox
short-title: Experimentelle Funktionen
slug: Mozilla/Firefox/Experimental_features
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Diese Seite listet die experimentellen und teilweise implementierten Funktionen von Firefox auf, einschließlich sich entwickelnder oder vorgeschlagener Webplattform-Standards.
Jeder der folgenden Einträge enthält Informationen über die Builds, in denen eine Funktion enthalten ist (Nightly, Beta, Developer Edition oder Release), darüber, ob sie standardmäßig aktiviert ist oder nicht, und den Namen der **Einstellung**, mit der Sie die Funktion aktivieren oder konfigurieren können.
Die Beschreibung jeder Funktion enthält auch Links zu relevanten [Bugzilla-Bugs](https://bugzilla.mozilla.org), die die Funktion implementieren oder aktivieren.
Diese Informationen ermöglichen es Ihnen, experimentelle Funktionen auszuprobieren und Feedback zu geben, bevor sie offiziell veröffentlicht werden.

In Bezug auf den Lebenszyklus erscheinen neue Funktionen in der Regel zuerst in [Nightly](https://www.firefox.com/en-US/channel/desktop/#nightly), wo sie oft standardmäßig aktiviert sind, um frühes Feedback und Tests zu erhalten.
Wenn keine größeren Probleme gefunden werden, werden sie in [Beta](https://www.firefox.com/en-US/channel/desktop/#beta) und [Developer Edition](https://www.firefox.com/en-US/channel/desktop/developer/) Pre-Release-Builds aufgenommen. Schließlich werden genehmigte Funktionen im [stabilen Release](https://www.firefox.com/en-US/) Kanal ausgeliefert.
Wenn eine Funktion in einer Veröffentlichung standardmäßig aktiviert ist, wird sie nicht mehr als experimentell betrachtet und von dieser Seite entfernt.

Um diese Funktionen zu aktivieren, geben Sie `about:config` in die Firefox-Adressleiste ein, suchen Sie nach der zugehörigen **Einstellung** und ändern Sie deren Wert, der in der Regel ein Umschalter zwischen `true` und `false` ist.
Je nach Funktion müssen Sie möglicherweise den Browser neu starten, damit die Änderung wirksam wird.
Lesen Sie den Support-Artikel [Firefox-Konfigurationseditor](https://support.mozilla.org/en-US/kb/about-config-editor-firefox) für weitere Informationen zur Verwaltung von Einstellungen in Firefox.

## HTML

### Layout für input type="search"

Das Layout für `input type="search"` wurde aktualisiert. Dadurch hat ein Suchfeld ein Löschsymbol, sobald jemand darin zu tippen beginnt, um andere Browserimplementierungen zu berücksichtigen. (Siehe [Firefox-Bug 558594](https://bugzil.la/558594) für weitere Details.)

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 81                  | Nein                     |
| Developer Edition | 81                  | Nein                     |
| Beta              | 81                  | Nein                     |
| Release           | 81                  | Nein                     |

- `layout.forms.input-type-search.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Passwortanzeige umschalten

HTML-Passwort-Eingabeelemente ([`<input type="password">`](/de/docs/Web/HTML/Reference/Elements/input/password)) enthalten ein "Auge"-Symbol, das umgeschaltet werden kann, um den Passworttext anzuzeigen oder zu verbergen ([Firefox-Bug 502258](https://bugzil.la/502258)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 96                  | Nein                     |
| Developer Edition | 96                  | Nein                     |
| Beta              | 96                  | Nein                     |
| Release           | 96                  | Nein                     |

- `layout.forms.reveal-password-button.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Zeitauswahl für datetime-local Eingabefeld

HTML-Eingabeelemente für datetime-local ([`<input type="datetime-local">`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local)) beinhalten jetzt einen Zeitwähler ([Firefox-Bug 1726108](https://bugzil.la/1726108)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 144                 | Nein                     |
| Developer Edition | 144                 | Nein                     |
| Beta              | 144                 | Nein                     |
| Release           | 144                 | Nein                     |

- `dom.forms.datetime.timepicker`
  - : Auf `true` setzen, um zu aktivieren.

## CSS

### Hex-Boxen zur Anzeige verirrter Steuerzeichen

Diese Funktion rendert Steuerzeichen (Unicode-Kategorie Cc) außer _Tabulator_ (`U+0009`), _Zeilenumbruch_ (`U+000A`), _Seitenvorschub_ (`U+000C`) und _Wagenrücklauf_ (`U+000D`) als eine Hex-Box, wenn sie nicht erwartet werden. (Siehe [Firefox-Bug 1099557](https://bugzil.la/1099557) für weitere Details.)

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 43                  | Ja                       |
| Developer Edition | 43                  | Nein                     |
| Beta              | 43                  | Nein                     |
| Release           | 43                  | Nein                     |

- `layout.css.control-characters.visible`
  - : Auf `true` setzen, um zu aktivieren.

### initial-letter Eigenschaft

Die CSS-Eigenschaft {{cssxref("initial-letter")}} ist Teil der [CSS Inline Layout](https://drafts.csswg.org/css-inline/) Spezifikation und ermöglicht es Ihnen, festzulegen, wie Initialbuchstaben angezeigt werden, die fallen gelassen, erhöht oder abgesenkt sind. (Siehe [Firefox-Bug 1223880](https://bugzil.la/1223880) für weitere Details.)

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 50                  | Nein                     |
| Developer Edition | 50                  | Nein                     |
| Beta              | 50                  | Nein                     |
| Release           | 50                  | Nein                     |

- `layout.css.initial-letter.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### fit-content() Funktion

Die {{cssxref("fit-content_function", "fit-content()")}} Funktion, wie sie auf {{cssxref("width")}} und andere Größenangabe-Eigenschaften angewendet wird. Diese Funktion wird bereits gut für die CSS-Gitterlayout-Spurgrößenanpassung unterstützt. (Siehe [Firefox-Bug 1312588](https://bugzil.la/1312588) für weitere Details.)

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 91                  | Nein                     |
| Developer Edition | 91                  | Nein                     |
| Beta              | 91                  | Nein                     |
| Release           | 91                  | Nein                     |

- `layout.css.fit-content-function.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Scroll-gesteuerte Animationen

Früher "scroll-verknüpfte Animationen" genannt, basieren [scroll-gesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) auf der Scrollposition eines Bildlaufbalkens statt auf Zeit oder einer anderen Dimension.
Die Eigenschaften {{cssxref('scroll-timeline-name')}} und {{cssxref('scroll-timeline-axis')}} (und die Kurzform {{cssxref('scroll-timeline')}}) ermöglichen es Ihnen, festzulegen, dass ein bestimmter Bildlaufbalken in einem bestimmten benannten Container als Quelle für eine scroll-gesteuerte Animation verwendet werden kann.
Die Scroll-Zeitachse kann dann mit einer [Animation](/de/docs/Web/CSS/Guides/Animations) verbunden werden, indem die Eigenschaft {{cssxref('animation-timeline')}} auf den Namen gesetzt wird, der mit `scroll-timeline-name` definiert wurde.

Beim Verwenden der {{cssxref('scroll-timeline')}} Kurzform-Eigenschaft muss die Reihenfolge der Eigenschaftswerte {{cssxref('scroll-timeline-name')}} gefolgt von {{cssxref('scroll-timeline-axis')}} sein.
Die Langform- und Kurzform-Eigenschaften sind beide hinter der Einstellung verfügbar.
Alternativ können Sie die [`scroll()`](/de/docs/Web/CSS/Reference/Properties/animation-timeline/scroll) Funktionsnotation mit {{cssxref('animation-timeline')}} verwenden, um anzuzeigen, dass eine Bildlaufachse in einem übergeordneten Element für die Zeitachse verwendet wird.

Weitere Informationen finden Sie in [Firefox-Bug 1807685](https://bugzil.la/1807685), [Firefox-Bug 1804573](https://bugzil.la/1804573), [Firefox-Bug 1809005](https://bugzil.la/1809005), [Firefox-Bug 1676791](https://bugzil.la/1676791), [Firefox-Bug 1754897](https://bugzil.la/1754897), [Firefox-Bug 1817303](https://bugzil.la/1817303) und [Firefox-Bug 1737918](https://bugzil.la/1737918).

Die Eigenschaften {{cssxref('timeline-scope')}}, {{cssxref('animation-range-start')}} und {{cssxref('animation-range-end')}} (und die Kurzform {{cssxref('animation-range')}}) werden noch nicht unterstützt. Weitere Informationen finden Sie in [Firefox-Bug 1676779](https://bugzil.la/1676779).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 136                 | Ja                       |
| Developer Edition | 110                 | Nein                     |
| Beta              | 110                 | Nein                     |
| Release           | 110                 | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### @scope At-Regel

Die [@scope](/de/docs/Web/CSS/Reference/At-rules/@scope) [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules) ermöglicht es Ihnen, bestimmte Kindelemente auszuwählen, ohne die Spezifität von CSS-Selektoren unnötig zu erhöhen ([Firefox-Bug 1886441](https://bugzil.la/1886441)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 137                 | Ja                       |
| Developer Edition | 128                 | Nein                     |
| Beta              | 128                 | Nein                     |
| Release           | 128                 | Nein                     |

- `layout.css.at-scope.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### prefers-reduced-transparency Medienfunktion

Die CSS [`prefers-reduced-transparency`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-transparency) Medienfunktion ermöglicht es Ihnen zu erkennen, ob ein Benutzer die Einstellung aktiviert hat, um die Menge an transparenten oder durchscheinenden Schichteffekten auf seinem Gerät zu minimieren.
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

Die CSS [`inverted-colors`](/de/docs/Web/CSS/Reference/At-rules/@media/inverted-colors) Medienfunktion ermöglicht es Ihnen zu erkennen, ob ein Benutzeragent oder das zugrunde liegende Betriebssystem Farben invertiert.
Siehe ([Firefox-Bug 1794628](https://bugzil.la/1794628)) für weitere Details.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 114                 | Nein                     |
| Developer Edition | 114                 | Nein                     |
| Beta              | 114                 | Nein                     |
| Release           | 114                 | Nein                     |

- `layout.css.inverted-colors.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Named view progress timelines Eigenschaft

Die CSS [`view-timeline-name`](/de/docs/Web/CSS/Reference/Properties/view-timeline-name) Eigenschaft ermöglicht es Ihnen, einem bestimmten Element einen Namen zu geben, das angibt, dass sein übergeordnetes Bildlaufelement die Quelle einer View progress timeline ist.
Der Name kann dann dem `animation-timeline` zugewiesen werden, das das zugehörige Element animiert, während es sich durch den sichtbaren Bereich seines übergeordneten Scrollers bewegt.
Siehe ([Firefox-Bug 1737920](https://bugzil.la/1737920)) für weitere Details.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 114                 | Nein                     |
| Developer Edition | 114                 | Nein                     |
| Beta              | 114                 | Nein                     |
| Release           | 114                 | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Anonyme view progress timelines Funktion

Die CSS [`view()`](/de/docs/Web/CSS/Reference/Properties/animation-timeline/view) Funktion ermöglicht es Ihnen, anzugeben, dass die `animation-timeline` für ein Element eine View progress timeline ist, die das Element animiert, während es sich durch den sichtbaren Bereich seines übergeordneten Scrollers bewegt.
Die Funktion definiert die Achse des übergeordneten Elements, das die Timeline bereitstellt, sowie den Ausschnitt innerhalb des sichtbaren Bereichs, in dem die Animation beginnt und endet.
Siehe ([Firefox-Bug 1808410](https://bugzil.la/1808410)) für weitere Details.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 114                 | Nein                     |
| Developer Edition | 114                 | Nein                     |
| Beta              | 114                 | Nein                     |
| Release           | 114                 | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Anbieterspezifische Transform-Eigenschaften

Die `-moz-`-präfixierten [CSS-Transform](/de/docs/Web/CSS/Guides/Transforms)-Eigenschaften können durch Setzen der `layout.css.prefixes.transforms`-Einstellung auf `false` deaktiviert werden. Die Absicht ist, diese zu deaktivieren, sobald die standardmäßigen CSS-Zoom-Eigenschaften gut unterstützt werden. ([Firefox-Bug 1886134](https://bugzil.la/1886134), [Firefox-Bug 1855763](https://bugzil.la/1855763)).

Insbesondere wird diese Einstellung die folgenden präfixierten Eigenschaften deaktivieren:

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

### `shape()` Funktion

Die CSS [`shape()`](/de/docs/Web/CSS/Reference/Values/basic-shape/shape) Funktion ist ein [`<basic-shape>`](/de/docs/Web/CSS/Reference/Values/basic-shape) Datentyp, der es Ihnen ermöglicht, eine Form in den Eigenschaften {{cssxref("clip-path")}} und {{cssxref("offset-path")}} mithilfe eines oder mehrerer "Formbefehle" zu definieren. Diese Befehle sind den [SVG-Pfadbefehl](/de/docs/Web/SVG/Reference/Attribute/d#path_commands) sehr ähnlich. Die `shape()`-Funktion ähnelt in gewisser Hinsicht der {{cssxref("basic-shape/path","path()")}}-Funktion, verwendet jedoch im Gegensatz zu `path()`, das die [SVG-Pfad](/de/docs/Web/SVG/Reference/Element/path)-Syntax verwendet, die standardmäßige CSS-Syntax. Dies ermöglicht es Ihnen, mühelos Formen zu erstellen und zu bearbeiten und auch CCS-Mathematikfunktionen zu verwenden.
Für weitere Details siehe [Firefox-Bug 1823463](https://bugzil.la/1823463) für die Unterstützung der `shape()`-Funktion in `clip-path`, [Firefox-Bug 1884424](https://bugzil.la/1884424) für die Unterstützung der Funktion in `offset-path`, und [Firefox-Bug 1884425](https://bugzil.la/1884425) für ihre Interpolationsunterstützung.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 126                 | Ja                       |
| Developer Edition | 126                 | Nein                     |
| Beta              | 126                 | Nein                     |
| Release           | 126                 | Nein                     |

- `layout.css.basic-shape-shape.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Symmetrische `letter-spacing`

Die CSS-Eigenschaft {{cssxref("letter-spacing")}} teilt nun den angegebenen Buchstabenabstand gleichmäßig auf beide Seiten jedes Zeichens auf. Dies unterscheidet sich vom aktuellen Verhalten, bei dem der Abstand hauptsächlich zu einer Seite hinzugefügt wird. Dieser Ansatz kann den Textabstand verbessern, besonders bei gemischtem, richtungsspezifischem Text [Firefox-Bug 1891446](https://bugzil.la/1891446).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 128                 | Ja                       |
| Developer Edition | 128                 | Ja                       |
| Beta              | 127                 | Nein                     |
| Release           | 127                 | Nein                     |

- `layout.css.letter-spacing.model`
  - : Auf `true` setzen, um zu aktivieren.

### `calc()` Farbkanaal-Unterstützung in relativen Farben

Die CSS [`calc()`](/de/docs/Web/CSS/Reference/Values/calc) Funktion kann nun Farbkanäle in [relativen Farben](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors#using_math_functions) analysieren, was es Ihnen ermöglicht, Änderungen an Farben in verschiedenen Farbräumen oder bei der Verwendung verschiedener funktionaler Notationen korrekt zu berechnen [Firefox-Bug 1889561](https://bugzil.la/1889561).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 127                 | Ja                       |
| Developer Edition | 127                 | Nein                     |
| Beta              | 127                 | Nein                     |
| Release           | 127                 | Nein                     |

- `layout.css.relative-color-syntax.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### CSS-Ankerpositionierung

Das [CSS-Ankerpositionierungsmodul](/de/docs/Web/CSS/Guides/Anchor_positioning) definiert eine Reihe von Funktionen, mit denen Elemente als Ankerelemente definiert werden können, und für andere Elemente, die relativ zu diesen Ankerelementen positioniert werden sollen.
Dies ermöglicht es beispielsweise, Tooltips zusammen mit zugehörigen Inhalten anzuzeigen, während sie den Sichtbereich durchscrollen, sich nach Bedarf bewegen, wenn sie den Sichtbereich überfließen würden, und verschwinden, wenn das Ankerobjekt vom Bildschirm verschwindet.
Die Funktionen werden schrittweise hinter einer Einstellung bereitgestellt ([Firefox-Bug 1988224](https://bugzil.la/1988224), [Firefox-Bug 1838746](https://bugzil.la/1838746)).

Die implementierten Teile umfassen [`CSSPositionTryRule`](/de/docs/Web/API/CSSPositionTryRule) und [`CSSPositionTryDescriptors`](/de/docs/Web/API/CSSPositionTryDescriptors) (Firefox 131).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 145                 | Ja                       |
| Developer Edition | 131                 | Nein                     |
| Beta              | 131                 | Nein                     |
| Release           | 131                 | Nein                     |

- `layout.css.anchor-positioning.enabled`
  - : Auf `true` setzen, um zu aktivieren.

#### `anchor-size()` Funktion

Die CSS-Funktion {{CSSXRef("anchor-size")}} ermöglicht es Ihnen, die Größe, Position und Ränder eines ankerpositionierten Elements relativ zu den Abmessungen des Ankerelements festzulegen. ([Firefox-Bug 1972610](https://bugzil.la/1972610)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 145                 | Ja                       |
| Developer Edition | 142                 | Nein                     |
| Beta              | 142                 | Nein                     |
| Release           | 142                 | Nein                     |

- `layout.css.anchor-positioning.enabled`
  - : Auf `true` setzen, um zu aktivieren.

#### `position-area` Eigenschaft

Die CSS-Eigenschaft {{CSSXRef("position-area")}} ermöglicht es Ihnen, ein ankerpositioniertes Element relativ zu den Kanten seines zugehörigen Ankerelements zu positionieren, indem das positionierte Element in einen oder mehrere Kacheln eines impliziten 3x3-Rasters gelegt wird, wobei das Ankerelement die mittlere Zelle ist. ([Firefox-Bug 1924086](https://bugzil.la/1924086)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 145                 | Ja                       |
| Developer Edition | 145                 | Nein                     |
| Beta              | 145                 | Nein                     |
| Release           | 145                 | Nein                     |

- `layout.css.anchor-positioning.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Erlauben von Pseudoelementen nach elementgestützten Pseudoelementen

Es wurde begonnen, Pseudoelemente wie {{cssxref("::first-letter")}} und {{cssxref("::before")}} zu erlauben, die an elementgestützte Pseudoelemente wie {{cssxref("::details-content")}} und {{cssxref("::file-selector-button")}} angehängt werden.

Dies ermöglicht es Benutzern beispielsweise, das erste Zeichen des {{htmlElement("details")}}-Elements mit dem CSS-Selektor `::details-content::first-letter` zu stylen oder Inhalte vor einem {{HTMLElement("input")}} von [`type="file"`](/de/docs/Web/HTML/Reference/Elements/input/file) mit dem CSS-Selektor `::file-selector-button::before` hinzuzufügen.

Zurzeit wird nur die Unterstützung für `::details-content::first-letter` analysiert, wenn `@supports(::details-content::first-letter)` verwendet wird.
Das Pseudoelement `::file-selector-button` ist noch nicht als elementbasiertes Pseudoelement markiert, sodass es keine Möglichkeit gibt, dies zu testen.
([Firefox-Bug 1953557](https://bugzil.la/1953557), [Firefox-Bug 1941406](https://bugzil.la/1941406)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 138                 | Nein                     |
| Developer Edition | 138                 | Nein                     |
| Beta              | 138                 | Nein                     |
| Release           | 138                 | Nein                     |

### `:heading` und `:heading()` Pseudo-Klassen

Die [`:heading`](/de/docs/Web/CSS/Reference/Selectors/:heading) Pseudo-Klasse ermöglicht es Ihnen, alle [Überschriftselemente](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) (`<h1>`-`<h6>`) auf einmal zu stylen, anstatt sie einzeln zu targetieren. Die [`:heading()`](/de/docs/Web/CSS/Reference/Selectors/:heading_function) funktionale Pseudo-Klasse ermöglicht es Ihnen, die Überschriftselemente zu stylen, die einer durch Kommas getrennten Liste von Ganzzahlen entsprechen, die den Überschriftsebenen entsprechen. ([Firefox-Bug 1974386](https://bugzil.la/1974386) & [Firefox-Bug 1984310](https://bugzil.la/1984310)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 142                 | Nein                     |
| Developer Edition | 142                 | Nein                     |
| Beta              | 142                 | Nein                     |
| Release           | 142                 | Nein                     |

- `layout.css.heading-selector.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### `text-decoration-trim`

Die CSS-Eigenschaft `text-decoration-trim` ermöglicht es Ihnen, {{cssxref("text-decoration")}}-Anfangs- und Endoffsets anzugeben, um die Position von Textdekorationen mit Respekt zur Schrift zu verkürzen, zu verlängern oder zu verschieben ([Firefox-Bug 1979915](https://bugzil.la/1979915)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 145                 | Nein                     |
| Developer Edition | 145                 | Nein                     |
| Beta              | 145                 | Nein                     |
| Release           | 145                 | Nein                     |

- `layout.css.text-decoration-trim.enabled`
  - : Auf `true` setzen, um zu aktivieren.

## SVG

**Keine experimentellen Funktionen in diesem Entwicklungszyklus.**

## JavaScript

### CSS-Modulscripts

CSS-Modulscripts werden jetzt unterstützt, sodass ein Stylesheet als [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Instanz mithilfe der [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)-Anweisung in ein Script geladen werden kann.
Die `import`-Anweisung muss auch das `type` [Importattribut](/de/docs/Web/JavaScript/Reference/Statements/import/with) spezifizieren und auf `"css"` setzen, und das Stylesheet muss mit dem [Mediatyp](/de/docs/Web/HTTP/Guides/MIME_types) von `text/css` bereitgestellt werden.
([Firefox-Bug 1720570](https://bugzil.la/1720570)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 145                 | Nein                     |
| Developer Edition | Nein                | Nein                     |
| Beta              | Nein                | Nein                     |
| Release           | Nein                | Nein                     |

- `layout.css.module-scripts.enabled`
  - : Auf `true` setzen, um zu aktivieren.

## APIs

### CloseWatcher Interface

Integrierte Webkomponenten mit "open"- und "close"-Semantik, wie modale Dialoge und Popups, können mit gerätenativen Mechanismen geschlossen werden.
Zum Beispiel können Sie auf Android einen Dialog durch Drücken der Zurück-Taste schließen.
Das [`CloseWatcher`](/de/docs/Web/API/CloseWatcher) Interface ermöglicht es Entwicklern, UI-Komponenten zu implementieren, wie benutzerdefinierte Seitenleisten, die ähnlich durch native Mechanismen geschlossen werden können.
([Firefox-Bug 1888729](https://bugzil.la/1888729)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert?      |
| ----------------- | ------------------- | ----------------------------- |
| Nightly           | 140                 | Ja (Desktop). Nein (Android). |
| Developer Edition | 132                 | Nein                          |
| Beta              | 132                 | Nein                          |
| Release           | 132                 | Nein                          |

- `dom.closewatcher.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Trusted Types API

Die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) bietet Mechanismen, um sicherzustellen, dass Funktionen, die potenziell als Vektoren für XSS-Angriffe genutzt werden können, nur mit Daten aufgerufen werden können, die validiert oder bereinigt wurden.
Die API ist in frühen Beta-Versionen aktiviert ([Firefox-Bug 1992941](https://bugzil.la/1992941)).

Dies umfasst (nicht abschließend):

- Hinzufügen der Schnittstellen [`TrustedTypePolicyFactory`](/de/docs/Web/API/TrustedTypePolicyFactory), [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy), [`TrustedHTML`](/de/docs/Web/API/TrustedHTML), [`TrustedScript`](/de/docs/Web/API/TrustedScript), [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL) und die `trustedTypes`-Eigenschaft auf [`Window`](/de/docs/Web/API/Window/trustedTypes) und [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope/trustedTypes).
- Aktualisierungen der [Einspritzungs-Sink-Schnittstellen](/de/docs/Web/API/Trusted_Types_API#injection_sink_interfaces), wie [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) und [`document.write()`](/de/docs/Web/API/Document/write), um die Weitergabe von `TrustedHTML`, `TrustedScript`, `TrustedScriptURL` zu ermöglichen sowie von Zeichenketten.
- Unterstützung für die Direktiven [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) und [`trusted-types`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/trusted-types) und das Schlüsselwort [`'trusted-types-eval'`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#trusted-types-eval) in der {{HTTPHeader("Content-Security-Policy")}} HTTP-Header.
  Diese können verwendet werden, um vertrauenswürdige Typen statt Zeichenketten zu erzwingen, die spezifischen erlaubten Richtlinien zu benennen und um die Verwendung von [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) und ähnlichen Funktionen zu ermöglichen, wenn [Trusted Types](/de/docs/Web/API/Trusted_Types_API) unterstützt und durchgesetzt werden.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 145                 | Ja                       |
| Developer Edition | 145                 | Ja                       |
| Beta              | 145                 | Ja                       |
| Release           | 133                 | Nein                     |

- `dom.security.trusted_types.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### HTML Sanitation API

Die [HTML Sanitation API](/de/docs/Web/API/HTML_Sanitizer_API) ermöglicht es Entwicklern, nicht vertrauenswürdige HTML-Zeichenketten zu nehmen und sie für die sichere Einfügung in das DOM eines Dokuments zu bereinigen.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 138                 | Nein                     |
| Developer Edition | 138                 | Nein                     |
| Beta              | 138                 | Nein                     |
| Release           | 138                 | Nein                     |

- `dom.security.sanitizer.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Entfernung der Ereignisse `beforescriptexecute` und `afterscriptexecute`

Die nicht standardmäßigen Ereignisse [`beforescriptexecute`](/de/docs/Web/API/Document/beforescriptexecute_event) und [`afterscriptexecute`](/de/docs/Web/API/Document/afterscriptexecute_event) im [`Document`](/de/docs/Web/API/Document) Interface, sowie [`afterscriptexecute`](/de/docs/Web/API/Element/afterscriptexecute_event) und [`beforescriptexecute`](/de/docs/Web/API/Element/beforescriptexecute_event) im [`Element`](/de/docs/Web/API/Element) Interface, befinden sich auf dem Weg zur Entfernung. Sie wurden in Nightly deaktiviert.
([Firefox-Bug 1954685](https://bugzil.la/1954685)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 139                 | Nein                     |
| Developer Edition | 139                 | Ja                       |
| Beta              | 139                 | Ja                       |
| Release           | 139                 | Ja                       |

- `dom.events.script_execute.enable`
  - : Auf `true` setzen, um zu aktivieren.

### Benachrichtigungsaktionen und maxActions Eigenschaften

Die schreibgeschützte Eigenschaft [`actions`](/de/docs/Web/API/Notification/actions) und die statisch schreibgeschützte Eigenschaft [`maxActions`](/de/docs/Web/API/Notification/maxActions_static) des [`Notification`](/de/docs/Web/API/Notification) Interface werden in Nightly auf Desktop unterstützt.
Diese enthalten die Benachrichtigungsaktionen, die mit [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification) gesetzt werden, sowie die maximale Anzahl von Aktionen, die gesetzt werden können.
([Firefox-Bug 1225110](https://bugzil.la/1225110), [Firefox-Bug 1963263](https://bugzil.la/1963263)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 138                 | Ja (nur Desktop)         |
| Developer Edition | 138                 | Nein                     |
| Beta              | 138                 | Nein                     |
| Release           | 138                 | Nein                     |

- `dom.webnotifications.actions.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Grafiken: Canvas, WebGL und WebGPU

#### WebGL: Entwurfserweiterungen

Wenn diese Einstellung aktiviert ist, werden alle WebGL-Erweiterungen, die sich derzeit im "Entwurfs"-Status befinden und getestet werden, zur Nutzung freigegeben. Derzeit werden keine WebGL-Erweiterungen von Firefox getestet.

#### WebGPU API

Die [WebGPU API](/de/docs/Web/API/WebGPU_API) bietet Unterstützung auf niedrigem Level zur Durchführung von Berechnungen und Grafik-Rendering mit der [Graphics Processing Unit](https://en.wikipedia.org/wiki/Graphics_Processing_Unit) (GPU) des Geräts oder Rechners des Benutzers.
Ab Version 142 ist sie auf Windows in allen Kontexten mit Ausnahme von Service Workern aktiviert.
Für andere Plattformen ist sie in Nightly aktiviert.
Siehe [Firefox-Bug 1602129](https://bugzil.la/1602129) für unseren Fortschritt bei dieser API.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert?                        |
| ----------------- | ------------------- | ----------------------------------------------- |
| Nightly           | 141                 | Ja                                              |
| Developer Edition | 141                 | Nein (Ja auf Windows, außer für Service Worker) |
| Beta              | 141                 | Nein (Ja auf Windows, außer für Service Worker) |
| Release           | 141                 | Nein (Ja auf Windows, außer für Service Worker) |

- `dom.webgpu.enabled`
  - : Auf `true` setzen, um zu aktivieren (in Nightly und auf Windows in allen Veröffentlichungen aktiviert)
- `dom.webgpu.service-workers.enabled`
  - : Auf `true` setzen, um zu aktivieren (in Nightly aktiviert)

### Berichts-API-Unterstützung für CSP-Verstöße

Die [Berichts-API](/de/docs/Web/API/Reporting_API) hat jetzt Unterstützung für die Berichterstellung von [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP)-Verstößen.

[`Report`](/de/docs/Web/API/Report) Instanzen, die von der [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) Schnittstelle zurückgegeben werden, können nun einen `type`-Wert von `"csp-violation"` und eine `body`-Eigenschaft enthalten, die eine Instanz der [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody) Schnittstelle enthält.
Dies ermöglicht es, CSP-Verstöße innerhalb einer Webseite zu melden.

CSP-Verstoßberichte können auch an entfernte Endpunkte gesendet werden, die im CSP {{CSP("report-to")}}-Directive durch Namen angegeben sind — Endpunktnamen und zugehörige URLs müssen zuerst in den {{httpheader('Reporting-Endpoints')}} oder {{httpheader('Report-To')}} HTTP-Headern definiert werden.
Der Bericht ist eine Serialisierung des oben beschriebenen [`Report`](/de/docs/Web/API/Report)-Objekts, mit einer `body`-Eigenschaft, die eine Serialisierung einer [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody)-Instanz ist.

Dieser Verstoßbericht ersetzt einen ähnlichen CSP-spezifischen Mechanismus zum Senden von Verstoßberichten, der das CSP {{CSP("report-uri")}}-Directive verwendet, um die URL des Berichts-Endpunkts festzulegen, und ein [CSP-spezifisches JSON-Verstoßberichtformat](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/report-uri#violation_report_syntax) hat.
([Firefox-Bug 1391243](https://bugzil.la/1391243)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 130                 | Nein                     |
| Developer Edition | 130                 | Nein                     |
| Beta              | 130                 | Nein                     |
| Release           | 130                 | Nein                     |

- `dom.reporting.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### WebRTC und Medien

Die folgenden experimentellen Funktionen umfassen diejenigen, die in der [WebRTC API](/de/docs/Web/API/WebRTC_API), der [Web Audio API](/de/docs/Web/API/Web_Audio_API), der [Media Source Extensions API](/de/docs/Web/API/Media_Source_Extensions_API), der [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API) und der [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) zu finden sind.

#### Asynchronous SourceBuffer add and remove

Diese Funktion fügt die auf Versprechen basierenden Methoden [`appendBufferAsync()`](/de/docs/Web/API/SourceBuffer/appendBufferAsync) und [`removeAsync()`](/de/docs/Web/API/SourceBuffer/removeAsync) zum Hinzufügen und Entfernen von Medienquellenpuffern zur [`SourceBuffer`](/de/docs/Web/API/SourceBuffer) Schnittstelle hinzu. Siehe [Firefox-Bug 1280613](https://bugzil.la/1280613) und [Firefox-Bug 778617](https://bugzil.la/778617) für weitere Informationen.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 62                  | Nein                     |
| Developer Edition | 62                  | Nein                     |
| Beta              | 62                  | Nein                     |
| Release           | 62                  | Nein                     |

- `media.mediasource.experimental.enabled`
  - : Auf `true` setzen, um zu aktivieren.

#### AVIF compliance strictness

Die Einstellung `image.avif.compliance_strictness` kann verwendet werden, um die _Strenge_ zu kontrollieren, die beim Verarbeiten von [AVIF](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image)-Bildern angewendet wird.
Dies ermöglicht es Firefox-Benutzern, Bilder anzuzeigen, die auf einigen anderen Browsern gerendert werden, auch wenn sie nicht strikt konform sind.

| Release-Kanal     | Version hinzugefügt | Standardwert |
| ----------------- | ------------------- | ------------ |
| Nightly           | 92                  | 1            |
| Developer Edition | 92                  | 1            |
| Beta              | 92                  | 1            |
| Release           | 92                  | 1            |

- `image.avif.compliance_strictness`
  - : Numerischer Wert, der ein _Strengheitsniveau_ angibt. Erlaubte Werte sind:
    - `0`: Tolerant. Akzeptiert Bilder mit Spezifikationsverletzungen in sowohl Empfehlungen ("sollte"-Sprache) als auch Anforderungen ("müssen"-Sprache), vorausgesetzt, sie können sicher oder eindeutig interpretiert werden.
    - `1` **(Standardwert)**: Gemischt. Verweigert Verstöße gegen Anforderungen ("müssen"), erlaubt jedoch Verstöße gegen Empfehlungen ("sollte").
    - `2`: Streng. Verweigert jegliche Verletzung spezifizierter Anforderungen oder Empfehlungen.

#### JPEG XL Unterstützung

Firefox unterstützt [JPEG XL](https://jpeg.org/jpegxl/)-Bilder, wenn diese Funktion aktiviert ist.
Siehe [Firefox-Bug 1539075](https://bugzil.la/1539075) für weitere Details.

Wie unten gezeigt, ist die Funktion nur für Nightly-Builds verfügbar (unabhängig davon, ob die Einstellung gesetzt ist).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 90                  | Nein                     |
| Developer Edition | —                   | —                        |
| Beta              | —                   | —                        |
| Release           | —                   | —                        |

- `image.jxl.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### WebVR API

#### WebVR API (Deaktiviert)

Die veraltete [WebVR API](/de/docs/Web/API/WebVR_API) ist auf dem Weg zur Entfernung.
Sie ist standardmäßig in allen Builds deaktiviert [Firefox-Bug 1750902](https://bugzil.la/1750902).

| Release-Kanal     | Version entfernt | Standardmäßig aktiviert? |
| ----------------- | ---------------- | ------------------------ |
| Nightly           | 98               | Nein                     |
| Developer Edition | 98               | Nein                     |
| Beta              | 98               | Nein                     |
| Release           | 98               | Nein                     |

- `dom.vr.enabled`
  - : Auf `true` setzen, um zu aktivieren.

#### HTMLMediaElement Eigenschaften: audioTracks und videoTracks

Durch Aktivierung dieser Funktion werden die Eigenschaften [`HTMLMediaElement.audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks) und [`HTMLMediaElement.videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks) zu allen HTML-Media-Elementen hinzugefügt. Da Firefox jedoch derzeit keine Unterstützung für mehrere Audio- und Videospuren hat, funktionieren die häufigsten Anwendungsfälle für diese Eigenschaften nicht, sodass sie standardmäßig deaktiviert sind. Siehe [Firefox-Bug 1057233](https://bugzil.la/1057233) für weitere Details.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 33                  | Nein                     |
| Developer Edition | 33                  | Nein                     |
| Beta              | 33                  | Nein                     |
| Release           | 33                  | Nein                     |

- `media.track.enabled`
  - : Auf `true` setzen, um zu aktivieren.

#### GeometryUtils Methoden: convertPointFromNode(), convertRectFromNode(), und convertQuadFromNode()

Die `GeometryUtils`-Methoden `convertPointFromNode()`, `convertRectFromNode()` und `convertQuadFromNode()` zeigen den gegebenen Punkt, das Rechteck oder das Viereck von dem [`Node`](/de/docs/Web/API/Node), auf dem sie aufgerufen werden, zu einem anderen Knoten. (Siehe [Firefox-Bug 918189](https://bugzil.la/918189) für weitere Details).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 31                  | Ja                       |
| Developer Edition | 31                  | Nein                     |
| Beta              | 31                  | Nein                     |
| Release           | 31                  | Nein                     |

- `layout.css.convertFromNode.enable`
  - : Auf `true` setzen, um zu aktivieren.

#### GeometryUtils Methode: getBoxQuads()

Die `GeometryUtils`-Methode `getBoxQuads()` gibt die CSS-Boxen für einen [`Node`](/de/docs/Web/API/Node) relativ zu einem anderen Knoten oder Viewport zurück. (Siehe [Firefox-Bug 917755](https://bugzil.la/917755) für weitere Details).

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

Die [Payment Request API](/de/docs/Web/API/Payment_Request_API) bietet Unterstützung für die Abwicklung webbasierter Zahlungen innerhalb von Webinhalten oder Apps. Aufgrund eines Fehlers, der während der Tests der Benutzeroberfläche aufgetreten ist, haben wir beschlossen, die Bereitstellung dieser API zu verschieben, während Diskussionen über mögliche Änderungen an der API stattfinden. Die Arbeit geht weiter. (Siehe [Firefox-Bug 1318984](https://bugzil.la/1318984) für weitere Details).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 55                  | Nein                     |
| Developer Edition | 55                  | Nein                     |
| Beta              | 55                  | Nein                     |
| Release           | 55                  | Nein                     |

- `dom.payments.request.enabled`
  - : Auf `true` setzen, um zu aktivieren.
- `dom.payments.request.supportedRegions`
  - : Länder-Codes als Komma-getrennte Zulassungsliste von Regionen (z. B. `US,CA`).

### WebShare API

Die [Web Share API](/de/docs/Web/API/Web_Share_API) ermöglicht das Teilen von Dateien, URLs und anderen Daten von einer Website aus.
Diese Funktion ist auf Android in allen Builds aktiviert, aber hinter einer Einstellung auf Desktop (sofern unten nicht anders angegeben).

| Release-Kanal     | Version geändert | Standardmäßig aktiviert?                        |
| ----------------- | ---------------- | ----------------------------------------------- |
| Nightly           | 71               | Nein (Standardwert). Ja (Windows ab Version 92) |
| Developer Edition | 71               | Nein                                            |
| Beta              | 71               | Nein                                            |
| Release           | 71               | Nein (Desktop). Ja (Android).                   |

- `dom.webshare.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Screen Orientation API

#### ScreenOrientation.lock()

Die Methode [`ScreenOrientation.lock()`](/de/docs/Web/API/ScreenOrientation/lock) ermöglicht es einem Gerät, auf eine bestimmte Ausrichtung gesperrt zu werden, wenn dies vom Gerät unterstützt und die Sperrvorgaben des Browsers erfüllt sind.
In der Regel ist das Sperren der Ausrichtung nur auf Mobilgeräten erlaubt, wenn das Dokument im Vollbildmodus angezeigt wird.
Siehe [Firefox-Bug 1697647](https://bugzil.la/1697647) für weitere Details.

| Release-Kanal     | Version geändert | Standardmäßig aktiviert? |
| ----------------- | ---------------- | ------------------------ |
| Nightly           | 111              | Ja                       |
| Developer Edition | 97               | Nein                     |
| Beta              | 97               | Nein                     |
| Release           | 97               | Nein                     |

- `dom.screenorientation.allow-lock`
  - : Auf `true` setzen, um zu aktivieren.

### Benachrichtigungs-API

Benachrichtigungen haben die [`requireInteraction`](/de/docs/Web/API/Notification/requireInteraction) Eigenschaft standardmäßig auf Windows-Systemen und in der Nightly-Version auf „true“ gesetzt ([Firefox-Bug 1794475](https://bugzil.la/1794475)).

| Release-Kanal     | Version geändert | Standardmäßig aktiviert? |
| ----------------- | ---------------- | ------------------------ |
| Nightly           | 117              | Ja                       |
| Developer Edition | 117              | Nein                     |
| Beta              | 117              | Nein                     |
| Release           | 117              | Nur Windows              |

- `dom.webnotifications.requireinteraction.enabled`
  - : Auf `true` setzen, um zu aktivieren.

## Sicherheit und Datenschutz

### Markierung unsicherer Seiten

Die zwei `security.insecure_connection_text_*`-Einstellungen fügen ein "Nicht sicher"-Textlabel in der Adressleiste neben dem herkömmlichen Schloss-Symbol hinzu, wenn eine Seite unsicher geladen wird (das heißt, unter Verwendung von {{Glossary("HTTP", "HTTP")}} anstatt {{Glossary("HTTPS", "HTTPS")}}). Die Einstellung `browser.urlbar.trimHttps` kürzt das `https:`-Präfix von URLs in der Adressleiste. Siehe [Firefox-Bug 1853418](https://bugzil.la/1853418) für weitere Details.

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
  - : Auf `true` setzen, um das `https:`-Präfix von URLs in der Adressleiste zu kürzen.

### Permissions Policy / Feature Policy

[Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) ermöglicht es Webentwicklern, selektiv bestimmte Funktionen und APIs im Browser zu aktivieren, zu deaktivieren und ihr Verhalten zu ändern. Sie ist ähnlich wie CSP, steuert jedoch Funktionen anstelle der Sicherheitsverhalten.
Dies wird in Firefox als **Feature Policy** implementiert, dem Namen, der in einer früheren Version der Spezifikation verwendet wurde.

Beachten Sie, dass unterstützte Richtlinien über das [`allow`](/de/docs/Web/HTML/Reference/Elements/iframe#allow)-Attribut auf `<iframe>`-Elementen festgelegt werden können, auch wenn die Benutzereinstellung nicht gesetzt ist.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 65                  | Nein                     |
| Developer Edition | 65                  | Nein                     |
| Beta              | 65                  | Nein                     |
| Release           | 65                  | Nein                     |

- `dom.security.featurePolicy.header.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Privacy Preserving Attribution API (PPA)

[PPA API](https://support.mozilla.org/en-US/kb/privacy-preserving-attribution) bietet eine Alternative zur Benutzernachverfolgung für Ad-Attribution unter Verwendung des neuen `navigator.privateAttribution`-Objekts mit `saveImpression()`- und `measureConversion()`-Methoden. Lesen Sie mehr über PPA [im ursprünglichen Erklärer](https://github.com/mozilla/explainers/tree/main/archive/ppa-experiment) und die [vorgeschlagene Spezifikation](https://w3c.github.io/ppa/). Dieses Experiment kann für Websites über [Origin-Trial](https://wiki.mozilla.org/Origin_Trials) oder im Browser durch Setzen der Einstellung auf `1` aktiviert werden. ([Firefox-Bug 1900929](https://bugzil.la/1900929)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 128                 | Nein                     |
| Developer Edition | 128                 | Nein                     |
| Beta              | 128                 | Nein                     |
| Release           | 128                 | Nein                     |

- `dom.origin-trials.private-attribution.state`
  - : Auf `true` setzen, um zu aktivieren.

## HTTP

### Integritätsrichtlinie für Stylesheet-Ressourcen

Die {{httpheader("Integrity-Policy")}} und {{httpheader("Integrity-Policy-Report-Only")}} HTTP-Header werden nun für Stilressourcen unterstützt. Diese erlauben es Websites, entweder [Untereinhalbgarantien](/de/docs/Web/Security/Subresource_Integrity) für Stile zu erzwingen oder nur Verstöße gegen die Richtlinie zu protokollieren.
Beachten Sie, dass Firefox Berichts-Endpunkte ignoriert und Verstöße in die Entwicklerkonsole protokolliert.
Wenn `Integrity-Policy` verwendet wird, blockiert der Browser das Laden von Stilen, die in einem {{HTMLElement("link")}}-Element mit [`rel="stylesheet"`](/de/docs/Web/HTML/Reference/Attributes/rel#stylesheet) referenziert werden und entweder das [`integrity`](/de/docs/Web/HTML/Reference/Elements/script#integrity)-Attribut fehlen oder einen Integritätshash haben, der nicht mit der Ressource auf dem Server übereinstimmt.
([Firefox-Bug 1976656](https://bugzil.la/1976656)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 142                 | Nein                     |
| Developer Edition | 142                 | Nein                     |
| Beta              | 142                 | Nein                     |
| Release           | 142                 | Nein                     |

- `security.integrity_policy.stylesheet.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Storage Access Header

Die {{httpheader("Sec-Fetch-Storage-Access")}} und {{httpheader("Activate-Storage-Access")}} HTTP-Header werden nun unterstützt, was eine effizientere [Storage Access API](/de/docs/Web/API/Storage_Access_API)-Workflow ermöglicht. ([Firefox-Bug 1991688](https://bugzil.la/1991688)).

Im reinen JavaScript-Workflow muss eine Drittanbieterressource angefordert und geladen werden, um eine Speicherzugriffsberechtigung für einen bestimmten Kontext zu aktivieren (z. B. eine neue Browser-Registerkarte). Dies ist auch dann erforderlich, wenn die Berechtigung bereits erteilt wurde.
Die Storage Access Header ermöglichen es dem Browser, den Berechtigungsstatus für den spezifischen Kontext anzuzeigen, sodass der Server die Aktivierung einer bereits erteilten Berechtigung anfordern kann.
Dies vermeidet den Overhead des unnötigen Abrufens und Ladens der Ressource.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 145                 | Ja                       |
| Developer Edition | 145                 | Nein                     |
| Beta              | 145                 | Nein                     |
| Release           | 145                 | Nein                     |

- `dom.storage_access.headers.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Idempotency-Key

Der {{httpheader("Idempotency-Key")}} HTTP-Anforderungs-Header kann verwendet werden, um eine {{HTTPMethod("POST")}}- oder {{HTTPMethod("PATCH")}}-Anforderung {{Glossary("idempotent", "idempotent")}} zu machen, wenn sie mit einem Server verwendet wird, der es unterstützt.
Die Spezifikation gibt an, dass der Server dokumentieren und anzeigen sollte, welche Endpunkte diesen Header erfordern, das Format des Schlüssels und die erwarteten Fehlerantworten.

Firefox fügt den Header _automatisch_ mit einem eindeutigen Schlüssel für jede neue `POST`-Anforderung hinzu, wenn er nicht bereits von der clientseitigen Code-Seite hinzugefügt wurde.
Dies vereinfacht den clientseitigen Code, der für die Arbeit mit Servern erforderlich ist, die die Funktion unterstützen.

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

Der HTTP-Header [`Accept`](/de/docs/Web/HTTP/Reference/Headers/Accept) in [standardmäßigen Anforderungen und Bildanforderungen](/de/docs/Web/HTTP/Guides/Content_negotiation/List_of_default_Accept_values) kann über eine Einstellung konfiguriert werden, um die Unterstützung für den `image/jxl` MIME-Typ anzugeben.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 128                 | Nein                     |
| Developer Edition | 128                 | Nein                     |
| Beta              | 128                 | Nein                     |
| Release           | 128                 | Nein                     |

- `image.jxl.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### SameSite=Lax standardmäßig

[`SameSite`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesite) Cookies haben einen Standardwert von `Lax`.
Mit dieser Einstellung werden Cookies nur gesendet, wenn ein Benutzer zur Ursprungswebsite navigiert, nicht jedoch für Subanforderungen von Drittanbietern, um Bilder oder Frames in eine Drittanbieter-Website zu laden und so weiter.
Weitere Details finden Sie im [Firefox-Bug 1617609](https://bugzil.la/1617609).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 69                  | Nein                     |
| Developer Edition | 69                  | Nein                     |
| Beta              | 69                  | Nein                     |
| Release           | 69                  | Nein                     |

- `network.cookie.sameSite.laxByDefault`
  - : Auf `true` setzen, um zu aktivieren.

### Access-Control-Allow-Headers-Wildcard deckt nicht Authorization ab

Der [`Access-Control-Allow-Headers`](/de/docs/Web/HTTP/Reference/Headers/Access-Control-Allow-Headers) ist ein Antwort-Header auf eine {{Glossary("Preflight_request", "CORS-Vorabfrage")}}, die angibt, welche Anforderungs-Header in der endgültigen Anforderung enthalten sein dürfen.
Die Antwortanweisung kann ein Wildcard (`*`) enthalten, das angibt, dass die endgültige Anforderung alle Header außer dem `Authorization`-Header enthalten darf.

Standardmäßig schließt Firefox den `Authorization`-Header in die endgültige Anforderung ein, nachdem eine Antwort mit `Access-Control-Allow-Headers: *` empfangen wurde.
Setzen Sie die Einstellung auf `false`, damit Firefox den `Authorization`-Header nicht einschließt.
Weitere Details finden Sie im [Firefox-Bug 1687364](https://bugzil.la/1687364).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 115                 | Ja                       |
| Developer Edition | 115                 | Ja                       |
| Beta              | 115                 | Ja                       |
| Release           | 115                 | Ja                       |

- `network.cors_preflight.authorization_covered_by_wildcard`
  - : Auf `true` setzen, um zu aktivieren.

## Entwicklerwerkzeuge

Die Entwicklerwerkzeuge von Mozilla entwickeln sich ständig weiter. Wir experimentieren mit neuen Ideen, fügen neue Funktionen hinzu und testen sie auf den Kanälen Nightly und Developer Edition, bevor wir sie für Beta und Release durchgehen lassen. Die folgenden Funktionen sind die aktuellen experimentellen Entwicklerwerkzeuge.

**Keine experimentellen Funktionen in diesem Entwicklungszyklus.**

## Siehe auch

- [Firefox-Entwickler-Veröffentlichungsnotizen](/de/docs/Mozilla/Firefox/Releases)
- [Firefox Nightly](https://www.firefox.com/en-US/channel/desktop/)
- [Firefox Developer Edition](https://www.firefox.com/en-US/channel/desktop/developer/)
