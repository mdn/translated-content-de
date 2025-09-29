---
title: Experimentelle Funktionen in Firefox
short-title: Experimentelle Funktionen
slug: Mozilla/Firefox/Experimental_features
l10n:
  sourceCommit: 911524687146c63e002c39325ff991dc84f39775
---

Diese Seite listet die experimentellen und teilweise implementierten Funktionen von Firefox auf, einschließlich sich entwickelnder oder vorgeschlagener Web-Plattform-Standards. Jedes der untenstehenden Einträge enthält Informationen über die Builds, in denen eine Funktion enthalten ist (Nightly, Beta, Developer Edition oder Release), ob sie standardmäßig aktiviert ist oder nicht und den Namen der **Präferenz**, die Sie zur Aktivierung oder Konfiguration der Funktion verwenden können. Die Beschreibung jeder Funktion enthält auch Links zu relevanten [Bugzilla-Bugs](https://bugzilla.mozilla.org), die die Funktion implementieren oder aktivieren. Diese Informationen ermöglichen es Ihnen, experimentelle Funktionen auszuprobieren und Feedback zu geben, bevor sie offiziell veröffentlicht werden.

In Bezug auf den Lebenszyklus erscheinen neue Funktionen normalerweise zuerst in [Nightly](https://www.firefox.com/en-US/channel/desktop/#nightly), wo sie oft standardmäßig aktiviert sind, um frühzeitiges Feedback und Tests zu ermöglichen. Wenn keine größeren Probleme gefunden werden, sind sie in [Beta](https://www.firefox.com/en-US/channel/desktop/#beta) und [Developer Edition](https://www.firefox.com/en-US/channel/desktop/developer/) Pre-Release-Builds enthalten. Schließlich werden genehmigte Funktionen im [stabilen Release](https://www.firefox.com/en-US/) Kanal angeboten. Wenn eine Funktion in einem Release standardmäßig aktiviert ist, wird sie nicht mehr als experimentell betrachtet und von dieser Seite entfernt.

Um diese Funktionen zu aktivieren, geben Sie `about:config` in die Firefox-Adressleiste ein, suchen Sie nach der zugehörigen **Präferenz** und ändern Sie deren Wert, der in der Regel ein Umschalten zwischen `true` und `false` ist. Abhängig von der Funktion müssen Sie möglicherweise den Browser neu starten, damit die Änderung wirksam wird. Weitere Informationen zum Verwalten von Präferenzen in Firefox finden Sie im [Firefox Configuration Editor](https://support.mozilla.org/en-US/kb/about-config-editor-firefox) Support-Artikel.

## HTML

### Layout für input type="search"

Das Layout für `input type="search"` wurde aktualisiert. Dies bewirkt, dass ein Suchfeld ein Löschen-Symbol zeigt, sobald jemand mit dem Tippen beginnt, um andere Browser-Implementierungen anzugleichen. (Details siehe [Firefox-Bug 558594](https://bugzil.la/558594)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 81                   | Nein                     |
| Developer Edition | 81                   | Nein                     |
| Beta              | 81                   | Nein                     |
| Release           | 81                   | Nein                     |

- `layout.forms.input-type-search.enabled`
  - : Setzen Sie auf `true`, um diese zu aktivieren.

### Passwortanzeige umschalten

HTML-Passworteingabeelemente ([`<input type="password">`](/de/docs/Web/HTML/Reference/Elements/input/password)) enthalten ein "Auge"-Symbol, das umgeschaltet werden kann, um den Passworttext anzuzeigen oder zu verbergen ([Firefox-Bug 502258](https://bugzil.la/502258)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 96                   | Nein                     |
| Developer Edition | 96                   | Nein                     |
| Beta              | 96                   | Nein                     |
| Release           | 96                   | Nein                     |

- `layout.forms.reveal-password-button.enabled`
  - : Setzen Sie auf `true`, um diese zu aktivieren.

## CSS

### Hex-Boxen für Anzeige von Steuerzeichen

Diese Funktion rendert Steuerzeichen (Unicode-Kategorie Cc) außer _Tab_ (`U+0009`), _Zeilenumbruch_ (`U+000A`), _Formfeed_ (`U+000C`) und _Wagenrücklauf_ (`U+000D`) als Hex-Box, wenn sie unerwartet sind. (Details siehe [Firefox-Bug 1099557](https://bugzil.la/1099557)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 43                   | Ja                       |
| Developer Edition | 43                   | Nein                     |
| Beta              | 43                   | Nein                     |
| Release           | 43                   | Nein                     |

- `layout.css.control-characters.visible`
  - : Setzen Sie auf `true`, um diese zu aktivieren.

### initial-letter Eigenschaft

Die {{cssxref("initial-letter")}} CSS-Eigenschaft ist Teil der [CSS Inline Layout](https://drafts.csswg.org/css-inline/) Spezifikation und ermöglicht es Ihnen, anzugeben, wie heruntergefallene, erhöhte und abgesenkte Anfangsbuchstaben dargestellt werden. (Details siehe [Firefox-Bug 1223880](https://bugzil.la/1223880)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 50                   | Nein                     |
| Developer Edition | 50                   | Nein                     |
| Beta              | 50                   | Nein                     |
| Release           | 50                   | Nein                     |

- `layout.css.initial-letter.enabled`
  - : Setzen Sie auf `true`, um diese zu aktivieren.

### fit-content() Funktion

Die {{cssxref("fit-content_function", "fit-content()")}} Funktion, wie sie auf {{cssxref("width")}} und andere Größenangaben angewendet wird. Diese Funktion wird bereits gut für die Größenbestimmung der CSS-Grid-Layout-Spuren unterstützt. (Details siehe [Firefox-Bug 1312588](https://bugzil.la/1312588)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 91                   | Nein                     |
| Developer Edition | 91                   | Nein                     |
| Beta              | 91                   | Nein                     |
| Release           | 91                   | Nein                     |

- `layout.css.fit-content-function.enabled`
  - : Setzen Sie auf `true`, um diese zu aktivieren.

### Scrollgetriebene Animationen

Früher als "scrollverknüpfte Animationen" bezeichnet, hängt eine [scrollgetriebene Animation](/de/docs/Web/CSS/CSS_scroll-driven_animations) von der Scrollposition eines Scrollbalkens ab, anstatt von der Zeit oder einer anderen Dimension. Die {{cssxref('scroll-timeline-name')}} und {{cssxref('scroll-timeline-axis')}} Eigenschaften (und die {{cssxref('scroll-timeline')}} Kurzform-Eigenschaft) ermöglichen es Ihnen, anzugeben, dass ein bestimmter Scrollbalken in einem bestimmten benannten Container als Quelle für eine scrollgetriebene Animation verwendet werden kann. Die Scroll-Zeitleiste kann dann mit einer [Animation](/de/docs/Web/CSS/CSS_animations) durch Setzen der {{cssxref('animation-timeline')}} Eigenschaft auf den Namen der mit `scroll-timeline-name` definierten Zeitleiste verknüpft werden.

Bei Verwendung der {{cssxref('scroll-timeline')}} Kurzform-Eigenschaft muss die Reihenfolge der Eigenschaftenwerte {{cssxref('scroll-timeline-name')}} gefolgt von {{cssxref('scroll-timeline-axis')}} sein. Die Langform und die Kurzform-Eigenschaften sind beide hinter der Präferenz verfügbar. Alternativ können Sie die [`scroll()`](/de/docs/Web/CSS/animation-timeline/scroll) Funktionsnotation mit {{cssxref('animation-timeline')}} verwenden, um anzugeben, dass eine Scrollbalkenachse in einem Vorfahrenelement für die Zeitleiste verwendet wird.

Weitere Informationen finden Sie in [Firefox-Bug 1807685](https://bugzil.la/1807685), [Firefox-Bug 1804573](https://bugzil.la/1804573), [Firefox-Bug 1809005](https://bugzil.la/1809005), [Firefox-Bug 1676791](https://bugzil.la/1676791), [Firefox-Bug 1754897](https://bugzil.la/1754897), [Firefox-Bug 1817303](https://bugzil.la/1817303) und [Firefox-Bug 1737918](https://bugzil.la/1737918).

Die {{cssxref('timeline-scope')}}, {{cssxref('animation-range-start')}} und {{cssxref('animation-range-end')}} Eigenschaften (und die {{cssxref('animation-range')}} Kurzform-Eigenschaft) sind noch nicht unterstützt. Weitere Informationen finden Sie in [Firefox-Bug 1676779](https://bugzil.la/1676779).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 136                  | Ja                       |
| Developer Edition | 110                  | Nein                     |
| Beta              | 110                  | Nein                     |
| Release           | 110                  | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Setzen Sie auf `true`, um diese zu aktivieren.

### @scope At-Regel

Die [@scope](/de/docs/Web/CSS/@scope) [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) ermöglicht es Ihnen, gezielt bestimmte Kindelemente auszuwählen, ohne die Spezifität von CSS-Selektoren übermäßig zu erhöhen ([Firefox-Bug 1886441](https://bugzil.la/1886441)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 137                  | Ja                       |
| Developer Edition | 128                  | Nein                     |
| Beta              | 128                  | Nein                     |
| Release           | 128                  | Nein                     |

- `layout.css.at-scope.enabled`
  - : Setzen Sie auf `true`, um diese zu aktivieren.

### prefers-reduced-transparency Medienfunktion

Die CSS [`prefers-reduced-transparency`](/de/docs/Web/CSS/@media/prefers-reduced-transparency) Medienfunktion ermöglicht es Ihnen, zu erkennen, ob ein Benutzer die Einstellung aktiviert hat, um die Menge an transparenten oder durchsichtigen Schichteffekten auf seinem Gerät zu minimieren. Weitere Details siehe [Firefox-Bug 1736914](https://bugzil.la/1736914).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 113                  | Nein                     |
| Developer Edition | 113                  | Nein                     |
| Beta              | 113                  | Nein                     |
| Release           | 113                  | Nein                     |

- `layout.css.prefers-reduced-transparency.enabled`
  - : Setzen Sie auf `true`, um diese zu aktivieren.

### inverted-colors Medienfunktion

Die CSS [`inverted-colors`](/de/docs/Web/CSS/@media/inverted-colors) Medienfunktion ermöglicht es Ihnen zu erkennen, ob ein Benutzeragent oder das zugrunde liegende Betriebssystem Farben invertiert. Weitere Details siehe [Firefox-Bug 1794628](https://bugzil.la/1794628).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 114                  | Nein                     |
| Developer Edition | 114                  | Nein                     |
| Beta              | 114                  | Nein                     |
| Release           | 114                  | Nein                     |

- `layout.css.inverted-colors.enabled`
  - : Setzen Sie auf `true`, um diese zu aktivieren.

### Benannte Ansichtsfortschritts-Zeitleisten-Eigenschaft

Die CSS [`view-timeline-name`](/de/docs/Web/CSS/view-timeline-name) Eigenschaft ermöglicht es Ihnen, einem bestimmten Element einen Namen zu geben und anzugeben, dass dessen übergeordnetes Scroll-Element die Quelle einer Ansichtsfortschritts-Zeitleiste ist. Der Name kann dann der `animation-timeline` zugewiesen werden, die das zugehörige Element animiert, während es durch den sichtbaren Bereich seines übergeordneten Scroll-Elements bewegt wird. Weitere Details siehe [Firefox-Bug 1737920](https://bugzil.la/1737920).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 114                  | Nein                     |
| Developer Edition | 114                  | Nein                     |
| Beta              | 114                  | Nein                     |
| Release           | 114                  | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Setzen Sie auf `true`, um diese zu aktivieren.

### Anonyme Ansichtsfortschritts-Zeitleisten-Funktion

Die CSS [`view()`](/de/docs/Web/CSS/animation-timeline/view) Funktion ermöglicht es Ihnen, anzugeben, dass die `animation-timeline` für ein Element eine Ansichtsfortschritts-Zeitleiste ist, die das Element animiert, während es durch den sichtbaren Bereich seines übergeordneten Scroll-Elements bewegt wird. Die Funktion definiert die Achse des Elternelements, die die Zeitleiste liefert, zusammen mit dem Beginn des sichtbaren Bereichs, bei dem die Animation beginnt und endet. Weitere Details siehe [Firefox-Bug 1808410](https://bugzil.la/1808410).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 114                  | Nein                     |
| Developer Edition | 114                  | Nein                     |
| Beta              | 114                  | Nein                     |
| Release           | 114                  | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Setzen Sie auf `true`, um diese zu aktivieren.

### Vendor-prefixed Transform-Eigenschaften

Die mit `-moz-` vorgezeichneten [CSS Transform](/de/docs/Web/CSS/CSS_transforms) Eigenschaften können deaktiviert werden, indem die `layout.css.prefixes.transforms` Präferenz auf `false` gesetzt wird. Die Absicht ist, diese zu deaktivieren, sobald die standardmäßigen CSS Zoom-Eigenschaften gut unterstützt werden. ([Firefox-Bug 1886134](https://bugzil.la/1886134), [Firefox-Bug 1855763](https://bugzil.la/1855763)).

Speziell wird diese Präferenz die folgenden vorgezeichneten Eigenschaften deaktivieren:

- `-moz-backface-visibility`
- `-moz-perspective`
- `-moz-perspective-origin`
- `-moz-transform`
- `-moz-transform-origin`
- `-moz-transform-style`

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 120                  | Ja                       |
| Developer Edition | 120                  | Ja                       |
| Beta              | 120                  | Ja                       |
| Release           | 120                  | Ja                       |

- `layout.css.prefixes.transforms`
  - : Setzen Sie auf `true`, um diese zu aktivieren.

### `shape()` Funktion

Die CSS [`shape()`](/de/docs/Web/CSS/basic-shape/shape) Funktion ist ein [`<basic-shape>`](/de/docs/Web/CSS/basic-shape) Datentyp, der es Ihnen ermöglicht, eine Form in den {{cssxref("clip-path")}} und {{cssxref("offset-path")}} Eigenschaften unter Verwendung eines oder mehrerer "Formbefehle" zu definieren. Diese Befehle sind den [SVG Pfadbefehlen](/de/docs/Web/SVG/Reference/Attribute/d#path_commands) sehr ähnlich. Die `shape()` Funktion ist in gewisser Hinsicht ähnlich der {{cssxref("basic-shape/path","path()")}} Funktion, aber im Gegensatz zu `path()`, das die [SVG Pfad](/de/docs/Web/SVG/Reference/Element/path) Syntax verwendet, verwendet `shape()` die Standard-CSS-Syntax. Dies ermöglicht Ihnen, Formen einfach zu erstellen und zu bearbeiten, und erlaubt auch die Nutzung von CSS-Mathematikfunktionen. Weitere Details siehe [Firefox-Bug 1823463](https://bugzil.la/1823463) für die Unterstützung der `shape()` Funktion in `clip-path`, [Firefox-Bug 1884424](https://bugzil.la/1884424) für die Unterstützung der Funktion in `offset-path` und [Firefox-Bug 1884425](https://bugzil.la/1884425) für deren Unterstützung zur Interpolation.

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 126                  | Ja                       |
| Developer Edition | 126                  | Nein                     |
| Beta              | 126                  | Nein                     |
| Release           | 126                  | Nein                     |

- `layout.css.basic-shape-shape.enabled`
  - : Setzen Sie auf `true`, um diese zu aktivieren.

### Symmetrische `letter-spacing`

Die CSS {{cssxref("letter-spacing")}} Eigenschaft teilt nun den angegebenen Buchstabenzwischenraum gleichmäßig auf beiden Seiten jedes Zeichens. Dies unterscheidet sich vom bisherigen Verhalten, bei dem der Abstand hauptsächlich auf einer Seite hinzugefügt wurde. Dieser Ansatz kann die Textabstände, insbesondere in gemischtrichtungstext, verbessern [Firefox-Bug 1891446](https://bugzil.la/1891446).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 128                  | Ja                       |
| Developer Edition | 128                  | Ja                       |
| Beta              | 127                  | Nein                     |
| Release           | 127                  | Nein                     |

- `layout.css.letter-spacing.model`
  - : Setzen Sie auf `true`, um diese zu aktivieren.

### `calc()` Farbkanalunterstützung in relativen Farben

Die CSS [`calc()`](/de/docs/Web/CSS/calc) Funktion kann nun Farbkanäle in [relativen Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors#using_math_functions) analysieren, sodass Sie Änderungen an Farben in verschiedenen Farbräumen oder bei Verwendung unterschiedlicher funktionaler Notationen korrekt berechnen können [Firefox-Bug 1889561](https://bugzil.la/1889561).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 127                  | Ja                       |
| Developer Edition | 127                  | Nein                     |
| Beta              | 127                  | Nein                     |
| Release           | 127                  | Nein                     |

- `layout.css.relative-color-syntax.enabled`
  - : Setzen Sie auf `true`, um diese zu aktivieren.

### CSS Ankerpositionierung

Das [CSS Ankerpositionierungs-Modul](/de/docs/Web/CSS/CSS_anchor_positioning) definiert eine Reihe von Funktionen, die es ermöglichen, Elemente als Ankerelemente zu definieren und andere Elemente relativ zu Ankerelementen zu positionieren. Dies ermöglicht es beispielsweise, dass Tooltips neben zugehörigen Inhalten angezeigt werden, während sie durch den Sichtbereich scrollen, sich bei Bedarf bewegen, wenn sie den Sichtbereich überschreiten würden, und verschwinden, wenn der Anker aus dem Sichtbereich verschwindet. Die Funktionsgruppe wird progressiv hinter einer Präferenz eingeführt ([Firefox-Bug 1838746](https://bugzil.la/1838746)).

Die implementierten Teile umfassen [`CSSPositionTryRule`](/de/docs/Web/API/CSSPositionTryRule) und [`CSSPositionTryDescriptors`](/de/docs/Web/API/CSSPositionTryDescriptors) (Firefox 131).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 131                  | Nein                     |
| Developer Edition | 131                  | Nein                     |
| Beta              | 131                  | Nein                     |
| Release           | 131                  | Nein                     |

- `layout.css.anchor-positioning.enabled`
  - : Setzen Sie auf `true`, um diese zu aktivieren.

### Erlaubt Pseudo-Elemente nach Element-gestützten Pseudo-Elementen

Die Arbeiten haben begonnen, um [Pseudo-Elemente](/de/docs/Web/CSS/Pseudo-elements) wie {{cssxref("::first-letter")}} und {{cssxref("::before")}} zu erlauben, die an [Element-gestützte Pseudo-Elemente](/de/docs/Web/CSS/Pseudo-elements#element-backed_pseudo-elements) wie {{cssxref("::details-content")}} und {{cssxref("::file-selector-button")}} angehängt werden.

Dies erlaubt es Benutzern beispielsweise, den ersten Buchstaben des {{htmlElement("details")}} Elements mit dem CSS-Selektor `::details-content::first-letter` zu stylen oder Inhalte vor einem {{HTMLElement("input") }} von [`type="file"`](/de/docs/Web/HTML/Reference/Elements/input/file) mit dem CSS-Selektor `::file-selector-button::before` hinzuzufügen.

Derzeit kann nur die Unterstützung für `::details-content::first-letter` mittels `@supports(::details-content::first-letter)` analysiert werden. Das `::file-selector-button` Pseudo-Element ist noch nicht als Element-basiertes Pseudo-Element markiert, sodass es keine Möglichkeit gibt, dies zu testen. ([Firefox-Bug 1953557](https://bugzil.la/1953557), [Firefox-Bug 1941406](https://bugzil.la/1941406)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 138                  | Nein                     |
| Developer Edition | 138                  | Nein                     |
| Beta              | 138                  | Nein                     |
| Release           | 138                  | Nein                     |

### `anchor-size()` Funktion

Die CSS {{CSSXRef("anchor-size")}} Funktion ermöglicht die Festlegung der Größe, Position und Margen von ankerpositionierten Elementen relativ zu den Dimensionen der Ankerelemente. ([Firefox-Bug 1972610](https://bugzil.la/1972610)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 142                  | Nein                     |
| Developer Edition | 142                  | Nein                     |
| Beta              | 142                  | Nein                     |
| Release           | 142                  | Nein                     |

- `layout.css.anchor-positioning.enabled`
  - : Setzen Sie auf `true`, um diese zu aktivieren.

### `:heading` und `:heading()` Pseudo-Klassen

Die {{CSSXRef(":heading")}} Pseudo-Klasse ermöglicht es Ihnen, alle [Überschriftelemente](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) (`<h1>`-`<h6>`) auf einmal zu stylen, anstatt sie einzeln zu adressieren. Die {{CSSXRef(":heading_function", ":heading()")}} funktionale Pseudo-Klasse ermöglicht es Ihnen, Überschriftelemente zu stylen, die der [`<An+B>`](/de/docs/Web/CSS/:heading_function#functional_notation) Notation entsprechen. ([Firefox-Bug 1974386](https://bugzil.la/1974386)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 142                  | Nein                     |
| Developer Edition | 142                  | Nein                     |
| Beta              | 142                  | Nein                     |
| Release           | 142                  | Nein                     |

- `layout.css.heading-selector.enabled`
  - : Setzen Sie auf `true`, um diese zu aktivieren.

### `text-autospace` Eigenschaft

Die **`text-autospace`** CSS-Eigenschaft ermöglicht es Ihnen, den Abstand zwischen chinesischen/japanischen/koreanischen (CJK) und nicht-CJK-Zeichen anzugeben. Derzeit werden diese Werte nur analysiert und haben keine Auswirkung auf die Ausgabe. ([Firefox-Bug 1869577](https://bugzil.la/1869577)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 143                  | Nein                     |
| Developer Edition | 143                  | Nein                     |
| Beta              | 143                  | Nein                     |
| Release           | 143                  | Nein                     |

- `layout.css.text-autospace.enabled`
  - : Setzen Sie auf `true`, um diese zu aktivieren.

## SVG

**Keine experimentellen Funktionen in diesem Release-Zyklus.**

## JavaScript

### Atomics.waitAsync()

Die {{jsxref("Atomics.waitAsync()")}} statische Methode wartet asynchron an einem gemeinsamen Speicherort und gibt ein Objekt zurück, das das Ergebnis der Operation darstellt. Sie ist nicht blockierend und kann im Hauptthread verwendet werden. ([Firefox-Bug 1467846](https://bugzil.la/1467846)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 140                  | Nein                     |
| Developer Edition | 140                  | Nein                     |
| Beta              | 140                  | Nein                     |
| Release           | 140                  | Nein                     |

- `javascript.options.atomics_wait_async`
  - : Setzen Sie auf `true`, um diese zu aktivieren.

## APIs

### CloseWatcher Schnittstelle

Eingebaute Web-Komponenten mit "offenen" und "geschlossenen" Semantiken, wie modale Dialoge und Popovers, können mit gerätspezifischen Mechanismen geschlossen werden. Beispielsweise können Sie auf Android einen Dialog mit der Zurück-Taste schließen. Die [`CloseWatcher`](/de/docs/Web/API/CloseWatcher) Schnittstelle ermöglicht es Entwicklern, UI-Komponenten wie benutzerdefinierte Seitenleisten zu implementieren, die auf ähnliche Weise mit nativen Mechanismen geschlossen werden können. ([Firefox-Bug 1888729](https://bugzil.la/1888729)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert?      |
| ----------------- | -------------------- | ----------------------------- |
| Nightly           | 140                  | Ja (Desktop). Nein (Android). |
| Developer Edition | 132                  | Nein                          |
| Beta              | 132                  | Nein                          |
| Release           | 132                  | Nein                          |

- `dom.closewatcher.enabled`
  - : Setzen Sie auf `true`, um diese zu aktivieren.

### Trusted Types API

Die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) bietet Mechanismen, um sicherzustellen, dass Funktionen, die potenziell als Vektoren für XSS-Angriffe genutzt werden können, nur mit validierten oder bereinigten Daten aufgerufen werden können.

> [!NOTE]
> Zum Zeitpunkt des Schreibens ist nicht genug von der API implementiert, um sie effektiv testbar zu machen. Diese Notiz wird entfernt, sobald sie bereit ist.

Dieser Teil der API wurde implementiert:

- [`TrustedTypePolicyFactory`](/de/docs/Web/API/TrustedTypePolicyFactory):
  - [`getAttributeType()`](/de/docs/Web/API/TrustedTypePolicyFactory/getAttributeType) und [`getPropertyType()`](/de/docs/Web/API/TrustedTypePolicyFactory/getPropertyType) ([Firefox-Bug 1917783](https://bugzil.la/1917783), [Firefox-Bug 1917784](https://bugzil.la/1917784)).
- Die [`write()`](/de/docs/Web/API/Document/write) und [`writeln()`](/de/docs/Web/API/Document/writeln) Methoden des [`Document`](/de/docs/Web/API/Document) Interface akzeptieren nun [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) Objekte als Parameter, zusätzlich zu Strings. ([Firefox-Bug 1906301](https://bugzil.la/1906301)).
- Die [`text`](/de/docs/Web/API/HTMLScriptElement/text), [`innerText`](/de/docs/Web/API/HTMLElement/innerText), und [`textContent`](/de/docs/Web/API/Node/textContent) Eigenschaften des [`HTMLScriptElement`](/de/docs/Web/API/HTMLScriptElement) Interface akzeptieren nun [`TrustedScript`](/de/docs/Web/API/TrustedScript) Objekte als Wert, während [`src`](/de/docs/Web/API/HTMLScriptElement/src) [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL) Werte akzeptiert. ([Firefox-Bug 1905706](https://bugzil.la/1905706)).
- Die [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval) und [`Window.setTimeout()`](/de/docs/Web/API/Window/setTimeout) Methoden können mit einem [`TrustedScript`](/de/docs/Web/API/TrustedScript) aufgerufen werden. ([Firefox-Bug 1931290](https://bugzil.la/1931290)).
- Die globale [`trustedTypes`](/de/docs/Web/API/Window/trustedTypes) Eigenschaft ist verfügbar, um auf die Trusted Types API zuzugreifen.
- Die Eigenschaften [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) und [`ShadowRoot.innerHTML`](/de/docs/Web/API/ShadowRoot/innerHTML) können mit [vertrauenswürdigen Typen](/de/docs/Web/API/Trusted_Types_API) aufgerufen werden.

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 133                  | Nein                     |
| Developer Edition | 133                  | Nein                     |
| Beta              | 133                  | Nein                     |
| Release           | 133                  | Nein                     |

- `dom.security.trusted_types.enabled`
  - : Setzen Sie auf `true`, um diese zu aktivieren.

### HTML Sanitizer API

Die [HTML Sanitizer API](/de/docs/Web/API/HTML_Sanitizer_API) ermöglicht es Entwicklern, unzuverlässige HTML-Strings zu bereinigen, damit sie sicher in das DOM eines Dokuments eingefügt werden können.

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 138                  | Nein                     |
| Developer Edition | 138                  | Nein                     |
| Beta              | 138                  | Nein                     |
| Release           | 138                  | Nein                     |

- `dom.security.sanitizer.enabled`
  - : Setzen Sie auf `true`, um diese zu aktivieren.

### Entfernung der Ereignisse `beforescriptexecute` und `afterscriptexecute`

Die nicht-standardisierten Ereignisse [`beforescriptexecute`](/de/docs/Web/API/Document/beforescriptexecute_event) und [`afterscriptexecute`](/de/docs/Web/API/Document/afterscriptexecute_event) im [`Document`](/de/docs/Web/API/Document) Interface sowie [`afterscriptexecute`](/de/docs/Web/API/Element/afterscriptexecute_event) und [`beforescriptexecute`](/de/docs/Web/API/Element/beforescriptexecute_event) im [`Element`](/de/docs/Web/API/Element) Interface befinden sich auf dem Weg zur Entfernung. Sie wurden in Nightly deaktiviert. ([Firefox-Bug 1954685](https://bugzil.la/1954685)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 139                  | Nein                     |
| Developer Edition | 139                  | Ja                       |
| Beta              | 139                  | Ja                       |
| Release           | 139                  | Ja                       |

- `dom.events.script_execute.enable`
  - : Setzen Sie auf `true`, um diese zu aktivieren.

### PerformanceEventTiming.interactionId

[`PerformanceEventTiming.interactionId`](/de/docs/Web/API/PerformanceEventTiming/interactionId) kann verwendet werden, um die Latenzzeit für Ereignisse zu messen, die durch eine bestimmte Benutzerinteraktion ausgelöst wurden. ([Firefox-Bug 1934683](https://bugzil.la/1934683)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 138                  | Nein                     |
| Developer Edition | 138                  | Nein                     |
| Beta              | 138                  | Nein                     |
| Release           | 138                  | Nein                     |

- `dom.performance.event_timing.enable_interactionid`
  - : Setzen Sie auf `true`, um diese zu aktivieren.

### Benachrichtigungsaktionen und maxActions Eigenschaften

Die [`actions`](/de/docs/Web/API/Notification/actions) schreibgeschützte Eigenschaft und die [`maxActions`](/de/docs/Web/API/Notification/maxActions_static) statische schreibgeschützte Eigenschaft des [`Notification`](/de/docs/Web/API/Notification) Interface werden in Nightly auf dem Desktop unterstützt. Diese enthalten die mit [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification) gesetzten Benachrichtigungsaktionen und die maximale Anzahl von Aktionen, die festgelegt werden können. ([Firefox-Bug 1225110](https://bugzil.la/1225110), [Firefox-Bug 1963263](https://bugzil.la/1963263)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 138                  | Ja (nur Desktop)         |
| Developer Edition | 138                  | Nein                     |
| Beta              | 138                  | Nein                     |
| Release           | 138                  | Nein                     |

- `dom.webnotifications.actions.enabled`
  - : Setzen Sie auf `true`, um diese zu aktivieren.

### Grafik: Canvas, WebGL und WebGPU

#### WebGL: Entwurfserweiterungen

Wenn diese Präferenz aktiviert ist, werden alle WebGL-Erweiterungen, die sich derzeit im "Entwurfs"-Status befinden und getestet werden, zur Verwendung freigegeben. Derzeit werden von Firefox keine WebGL-Erweiterungen getestet.

#### WebGPU API

Die [WebGPU API](/de/docs/Web/API/WebGPU_API) bietet Unterstützung auf niedriger Ebene für Berechnungen und Grafikdarstellungen unter Verwendung der [Grafikverarbeitungseinheit](https://en.wikipedia.org/wiki/Graphics_Processing_Unit) (GPU) des Benutzergeräts oder Computers. Ab Version 142 ist dies in allen Kontexten außer Service-Workern auf Windows aktiviert. Für andere Plattformen ist es in Nightly aktiviert. Siehe [Firefox-Bug 1602129](https://bugzil.la/1602129) für den Fortschritt dieser API.

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert?                    |
| ----------------- | -------------------- | ------------------------------------------- |
| Nightly           | 141                  | Ja                                          |
| Developer Edition | 141                  | Nein (Ja auf Windows, keine Service-Worker) |
| Beta              | 141                  | Nein (Ja auf Windows, keine Service-Worker) |
| Release           | 141                  | Nein (Ja auf Windows, keine Service-Worker) |

- `dom.webgpu.enabled`
  - : Setzen Sie auf `true`, um diese zu aktivieren (aktiviert in Nightly und auf Windows in allen Releases)
- `dom.webgpu.service-workers.enabled`
  - : Setzen Sie auf `true`, um diese zu aktivieren (aktiviert in Nightly)

### Reporting API-Unterstützung bei CSP-Verletzungen

Die [Reporting API](/de/docs/Web/API/Reporting_API) hat nun Unterstützung für die Berichterstattung über [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) Verstöße.

[`Report`](/de/docs/Web/API/Report) Instanzen, die vom [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) Interface zurückgegeben werden, können nun einen `Typ`-Wert von `"csp-violation"` und eine `Körper`-Eigenschaft haben, die eine Instanz des [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody) Interface enthält. Dies ermöglicht es, CSP-Verletzungen innerhalb einer Webseite zu berichten.

CSP-Verletzungsberichte können auch an entfernte Endpunkte gesendet werden, die im CSP {{CSP("report-to")}} Direktive namentlich angegeben sind — Endpunktnamen und entsprechende URLs müssen zuerst in den {{httpheader('Reporting-Endpoints')}} oder {{httpheader('Report-To')}} HTTP-Antwortheadern definiert werden. Der Bericht ist eine Serialisierung des oben beschriebenen [`Report`](/de/docs/Web/API/Report) Objekts, mit einer `Körper`-Eigenschaft, die eine Serialisierung einer [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody) Instanz ist.

Dieser Verletzungsbericht ersetzt einen ähnlichen CSP-spezifischen Mechanismus zum Senden von Verletzungsberichten, bei dem die CSP {{CSP("report-uri")}} Direktive verwendet wird, um die URL des Berichtsendpunkts festzulegen, und der ein [CSP-spezifisches JSON-Format für Verletzungsberichte](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/report-uri#violation_report_syntax) hat. ([Firefox-Bug 1391243](https://bugzil.la/1391243)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 130                  | Nein                     |
| Developer Edition | 130                  | Nein                     |
| Beta              | 130                  | Nein                     |
| Release           | 130                  | Nein                     |

- `dom.reporting.enabled`
  - : Setzen Sie auf `true`, um diese zu aktivieren.

### WebRTC und Medien

Die folgenden experimentellen Funktionen umfassen diejenigen, die in der [WebRTC API](/de/docs/Web/API/WebRTC_API), der [Web Audio API](/de/docs/Web/API/Web_Audio_API), der [Media Source Extensions API](/de/docs/Web/API/Media_Source_Extensions_API), der [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API) und der [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) zu finden sind.

#### Asynchrone SourceBuffer hinzufügen und entfernen

Dies fügt die promise-basierten Methoden [`appendBufferAsync()`](/de/docs/Web/API/SourceBuffer/appendBufferAsync) und [`removeAsync()`](/de/docs/Web/API/SourceBuffer/removeAsync) zum Hinzufügen und Entfernen von Quellpuffern zu der [`SourceBuffer`](/de/docs/Web/API/SourceBuffer) Schnittstelle hinzu. Weitere Informationen finden Sie in [Firefox-Bug 1280613](https://bugzil.la/1280613) und [Firefox-Bug 778617](https://bugzil.la/778617).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 62                   | Nein                     |
| Developer Edition | 62                   | Nein                     |
| Beta              | 62                   | Nein                     |
| Release           | 62                   | Nein                     |

- `media.mediasource.experimental.enabled`
  - : Setzen Sie auf `true`, um diese zu aktivieren.

#### AVIF-Konformitätsstrenge

Die `image.avif.compliance_strictness` Präferenz kann verwendet werden, um die _Strenge_ zu steuern, die beim Verarbeiten von [AVIF](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) Bildern angewendet wird. Dies ermöglicht es Firefox-Benutzern, Bilder anzuzeigen, die in einigen anderen Browsern gerendert werden, selbst wenn sie nicht streng konform sind.

| Release-Kanal     | Hinzugefügte Version | Standardwert |
| ----------------- | -------------------- | ------------ |
| Nightly           | 92                   | 1            |
| Developer Edition | 92                   | 1            |
| Beta              | 92                   | 1            |
| Release           | 92                   | 1            |

- `image.avif.compliance_strictness`
  - : Numerischer Wert, der ein _Striktheitsniveau_ angibt. Erlaubte Werte sind:
    - `0`: Zulässig. Akzeptiert Bilder mit Spezifikationsverletzungen sowohl in Empfehlungen ("sollte"-Sprache) als auch in Anforderungen ("muss"-Sprache), sofern sie sicher oder eindeutig interpretiert werden können.
    - `1` **(Standard)**: Gemischt. Lehnt Verletzungen von Anforderungen ab ("muss"), lässt aber Verletzungen von Empfehlungen zu ("sollte").
    - `2`: Strikt. Lehnt jegliche Verletzungen von festgelegten Anforderungen oder Empfehlungen ab.

#### JPEG XL-Unterstützung

Firefox unterstützt [JPEG XL](https://jpeg.org/jpegxl/) Bilder, wenn diese Funktion aktiviert ist. Weitere Details siehe [Firefox-Bug 1539075](https://bugzil.la/1539075).

Beachten Sie, dass die Funktion, wie unten gezeigt, nur auf Nightly-Builds verfügbar ist (unabhängig davon, ob die Präferenz gesetzt ist).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 90                   | Nein                     |
| Developer Edition | —                    | —                        |
| Beta              | —                    | —                        |
| Release           | —                    | —                        |

- `image.jxl.enabled`
  - : Setzen Sie auf `true`, um diese zu aktivieren.

### WebVR API

#### WebVR API (Deaktiviert)

Die veraltete [WebVR API](/de/docs/Web/API/WebVR_API) befindet sich auf dem Weg zur Entfernung. Sie ist standardmäßig in allen Builds deaktiviert [Firefox-Bug 1750902](https://bugzil.la/1750902).

| Release-Kanal     | Entfernte Version | Standardmäßig aktiviert? |
| ----------------- | ----------------- | ------------------------ |
| Nightly           | 98                | Nein                     |
| Developer Edition | 98                | Nein                     |
| Beta              | 98                | Nein                     |
| Release           | 98                | Nein                     |

- `dom.vr.enabled`
  - : Setzen Sie auf `true`, um diese zu aktivieren.

#### HTMLMediaElement Eigenschaften: audioTracks und videoTracks

Durch das Aktivieren dieser Funktion werden die [`HTMLMediaElement.audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks) und [`HTMLMediaElement.videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks) Eigenschaften zu allen HTML-Medienelementen hinzugefügt. Da Firefox jedoch derzeit keine Unterstützung für mehrere Audio- und Video-Tracks bietet, funktionieren die häufigsten Anwendungsfälle für diese Eigenschaften nicht, daher sind sie beide standardmäßig deaktiviert. Weitere Details siehe [Firefox-Bug 1057233](https://bugzil.la/1057233).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 33                   | Nein                     |
| Developer Edition | 33                   | Nein                     |
| Beta              | 33                   | Nein                     |
| Release           | 33                   | Nein                     |

- `media.track.enabled`
  - : Setzen Sie auf `true`, um diese zu aktivieren.

#### GeometryUtils Methoden: convertPointFromNode(), convertRectFromNode(), und convertQuadFromNode()

Die `GeometryUtils` Methoden `convertPointFromNode()`, `convertRectFromNode()`, und `convertQuadFromNode()` konvertieren den gegebenen Punkt, das Rechteck oder das Vierfache vom [`Node`](/de/docs/Web/API/Node), auf dem sie aufgerufen werden, zu einem anderen Knoten. (Details siehe [Firefox-Bug 918189](https://bugzil.la/918189)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 31                   | Ja                       |
| Developer Edition | 31                   | Nein                     |
| Beta              | 31                   | Nein                     |
| Release           | 31                   | Nein                     |

- `layout.css.convertFromNode.enable`
  - : Setzen Sie auf `true`, um diese zu aktivieren.

#### GeometryUtils Methode: getBoxQuads()

Die `GeometryUtils` Methode `getBoxQuads()` gibt die CSS-Boxen für einen [`Node`](/de/docs/Web/API/Node) relativ zu einem beliebigen anderen Knoten oder dem Sichtbereich zurück. (Details siehe [Firefox-Bug 917755](https://bugzil.la/917755)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 31                   | Ja                       |
| Developer Edition | 31                   | Nein                     |
| Beta              | 31                   | Nein                     |
| Release           | 31                   | Nein                     |

- `layout.css.getBoxQuads.enabled`
  - : Setzen Sie auf `true`, um diese zu aktivieren.

### Zahlung-Anfrage API

#### Primäre Zahlungsabwicklung

Die [Zahlung-Anfrage API](/de/docs/Web/API/Payment_Request_API) bietet Unterstützung für die Abwicklung von webbasierte Zahlungen innerhalb von Webinhalten oder -Apps. Aufgrund eines Fehlers, der während der Testphase der Benutzeroberfläche auftrat, haben wir beschlossen, die Veröffentlichung dieser API zu verschieben, während Diskussionen über potenzielle Änderungen an der API stattfinden. Die Arbeiten laufen noch. (Details siehe [Firefox-Bug 1318984](https://bugzil.la/1318984)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 55                   | Nein                     |
| Developer Edition | 55                   | Nein                     |
| Beta              | 55                   | Nein                     |
| Release           | 55                   | Nein                     |

- `dom.payments.request.enabled`
  - : Setzen Sie auf `true`, um diese zu aktivieren.
- `dom.payments.request.supportedRegions`
  - : Ländercodes als kommagetrennte Whitelist von Regionen (z.B. `US,CA`).

### WebShare API

Die [Web Share API](/de/docs/Web/API/Web_Share_API) ermöglicht das Teilen von Dateien, URLs und anderen Daten von einer Seite. Diese Funktion ist auf Android in allen Builds aktiviert, aber auf Desktop verborgen hinter einer Präferenz (sofern unten nicht anders angegeben).

| Release-Kanal     | Versionsänderung | Standardmäßig aktiviert?                    |
| ----------------- | ---------------- | ------------------------------------------- |
| Nightly           | 71               | Nein (Standard). Ja (Windows ab Version 92) |
| Developer Edition | 71               | Nein                                        |
| Beta              | 71               | Nein                                        |
| Release           | 71               | Nein (Desktop). Ja (Android).               |

- `dom.webshare.enabled`
  - : Setzen Sie auf `true`, um diese zu aktivieren.

### Bildschirmorientierungs-API

#### ScreenOrientation.lock()

Die [`ScreenOrientation.lock()`](/de/docs/Web/API/ScreenOrientation/lock) Methode erlaubt es, ein Gerät auf eine bestimmte Orientierung zu sperren, wenn dies vom Gerät unterstützt wird und von den Browser-Vorabschlusseinstellungen zugelassen wird. In der Regel ist die Sperre der Orientierung nur auf mobilen Geräten erlaubt, wenn das Dokument im Vollbildmodus angezeigt wird. Weitere Details siehe [Firefox-Bug 1697647](https://bugzil.la/1697647).

| Release-Kanal     | Versionsänderung | Standardmäßig aktiviert? |
| ----------------- | ---------------- | ------------------------ |
| Nightly           | 111              | Ja                       |
| Developer Edition | 97               | Nein                     |
| Beta              | 97               | Nein                     |
| Release           | 97               | Nein                     |

- `dom.screenorientation.allow-lock`
  - : Setzen Sie auf `true`, um diese zu aktivieren.

### Benachrichtigungs-API

Benachrichtigungen haben die [`requireInteraction`](/de/docs/Web/API/Notification/requireInteraction) Eigenschaft standardmäßig auf true bei Windows-Systemen und in der Nightly-Release ([Firefox-Bug 1794475](https://bugzil.la/1794475)).

| Release-Kanal     | Versionsänderung | Standardmäßig aktiviert? |
| ----------------- | ---------------- | ------------------------ |
| Nightly           | 117              | Ja                       |
| Developer Edition | 117              | Nein                     |
| Beta              | 117              | Nein                     |
| Release           | 117              | Nur Windows              |

- `dom.webnotifications.requireinteraction.enabled`
  - : Setzen Sie auf `true`, um diese zu aktivieren.

## Sicherheit und Datenschutz

### Kennzeichnung unsicherer Seiten

Die beiden `security.insecure_connection_text_*` Präferenzen fügen ein "Nicht sicher" Textetikett in der Adressleiste neben dem traditionellen Schlosssymbol hinzu, wenn eine Seite unsicher geladen wird (d.h. mit {{Glossary("HTTP", "HTTP")}} anstatt {{Glossary("HTTPS", "HTTPS")}}). Die `browser.urlbar.trimHttps` Präferenz schneidet das `https:` Präfix aus den Adressleisten-URLs ab. Weitere Details siehe [Firefox-Bug 1853418](https://bugzil.la/1853418).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 121                  | Ja                       |
| Developer Edition | 60                   | Nein                     |
| Beta              | 60                   | Nein                     |
| Release           | 60                   | Nein                     |

- `security.insecure_connection_text.enabled`
  - : Setzen Sie auf `true`, um das Textetikett für den normalen Browsing-Modus zu aktivieren.
- `security.insecure_connection_text.pbmode.enabled`
  - : Setzen Sie auf `true`, um das Textetikett für den privaten Browsing-Modus zu aktivieren.
- `browser.urlbar.trimHttps`
  - : Setzen Sie auf `true`, um das `https:` Präfix aus den Adressleisten-URLs abzuschneiden.

### Berechtigungspolitik / Funktionspolitik

[Berechtigungspolitik](/de/docs/Web/HTTP/Guides/Permissions_Policy) ermöglicht es Webentwicklern, selektiv bestimmte Funktionen und APIs im Browser zu aktivieren, deaktivieren und deren Verhalten zu ändern. Es ist ähnlich wie CSP, aber kontrolliert Funktionen anstelle von Sicherheitsverhalten. Dies ist in Firefox als **Funktionspolitik** implementiert, der Name, der in einer früheren Version der Spezifikation verwendet wurde.

Beachten Sie, dass unterstützte Richtlinien über das [`allow`](/de/docs/Web/HTML/Reference/Elements/iframe#allow) Attribut an `<iframe>` Elementen gesetzt werden können, auch wenn die Benutzerpräferenz nicht gesetzt ist.

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 65                   | Nein                     |
| Developer Edition | 65                   | Nein                     |
| Beta              | 65                   | Nein                     |
| Release           | 65                   | Nein                     |

- `dom.security.featurePolicy.header.enabled`
  - : Setzen Sie auf `true`, um diese zu aktivieren.

### Datenschutzfreundliche Zuordnungs-API (PPA)

Die [PPA API](https://support.mozilla.org/en-US/kb/privacy-preserving-attribution) bietet eine Alternative zum Benutzer-Tracking für Anzeigenzuordnung mit dem neuen `navigator.privateAttribution` Objekt mit `saveImpression()` und `measureConversion()` Methoden. Lesen Sie mehr über PPA [im Original-Explainer](https://github.com/mozilla/explainers/tree/main/archive/ppa-experiment) und den [vorgeschlagenen Standard](https://w3c.github.io/ppa/). Dieses Experiment kann für Websites über [Origin Trial](https://wiki.mozilla.org/Origin_Trials) oder im Browser durch Setzen der Präferenz auf `1` aktiviert werden. ([Firefox-Bug 1900929](https://bugzil.la/1900929)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 128                  | Nein                     |
| Developer Edition | 128                  | Nein                     |
| Beta              | 128                  | Nein                     |
| Release           | 128                  | Nein                     |

- `dom.origin-trials.private-attribution.state`
  - : Setzen Sie auf `true`, um diese zu aktivieren.

## HTTP

### Integritätspolitik für Skriptressourcen

Die {{httpheader("Integrity-Policy")}} und {{httpheader("Integrity-Policy-Report-Only")}} HTTP-Header werden jetzt für Skriptressourcen unterstützt. Diese ermöglichen es Websites, entweder [Subresource-Integritätssicherheiten](/de/docs/Web/Security/Subresource_Integrity) für Skripte zu erzwingen oder nur Verletzungen der Richtlinie zu melden. Beachten Sie, dass Firefox Berichtsendpunkte ignoriert und Verletzungen in der Entwicklerkonsole protokolliert. Wenn `Integrity-Policy` verwendet wird, blockiert der Browser das Laden von Skripten, die entweder das [`integrity`](/de/docs/Web/HTML/Reference/Elements/script#integrity) Attribut fehlen oder einen Integritätshash haben, der nicht mit der Skriptressource auf dem Server übereinstimmt. Der Browser wird auch Anfragen im [`no-cors` Modus](/de/docs/Web/API/Request/mode#no-cors) stoppen, z.B. diejenigen von einem {{htmlelement("script")}} Element ohne das [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin) Attribut. ([Firefox-Bug 1976656](https://bugzil.la/1976656)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 142                  | Ja                       |
| Developer Edition | 142                  | Nein                     |
| Beta              | 142                  | Nein                     |
| Release           | 142                  | Nein                     |

- `security.integrity_policy.enabled`
  - : Setzen Sie auf `true`, um diese zu aktivieren.

### Integritätspolitik für Stylesheet-Ressourcen

Die {{httpheader("Integrity-Policy")}} und {{httpheader("Integrity-Policy-Report-Only")}} HTTP-Header werden jetzt für Stilressourcen unterstützt. Diese ermöglichen es Websites, entweder [Subresource-Integritätssicherheiten](/de/docs/Web/Security/Subresource_Integrity) für Stile zu erzwingen oder nur Verletzungen der Richtlinie zu melden. Beachten Sie, dass Firefox Berichtsendpunkte ignoriert und Verletzungen in der Entwicklerkonsole protokolliert. Wenn `Integrity-Policy` verwendet wird, blockiert der Browser das Laden von Stilen, die in einem {{HTMLElement("link")}} Element mit [`rel="stylesheet"`](/de/docs/Web/HTML/Reference/Attributes/rel#stylesheet) referenziert werden und entweder das [`integrity`](/de/docs/Web/HTML/Reference/Elements/script#integrity) Attribut fehlen oder einen Integritätshash haben, der nicht mit der Ressource auf dem Server übereinstimmt. ([Firefox-Bug 1976656](https://bugzil.la/1976656)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 142                  | Nein                     |
| Developer Edition | 142                  | Nein                     |
| Beta              | 142                  | Nein                     |
| Release           | 142                  | Nein                     |

- `security.integrity_policy.stylesheet.enabled`
  - : Setzen Sie auf `true`, um diese zu aktivieren.

### Accept-Header mit MIME-Typ image/jxl

Der HTTP [`Accept`](/de/docs/Web/HTTP/Reference/Headers/Accept) Header in [Standardanfragen und Bildanfragen](/de/docs/Web/HTTP/Guides/Content_negotiation/List_of_default_Accept_values) kann über eine Präferenz konfiguriert werden, um die Unterstützung des `image/jxl` MIME-Typs anzuzeigen.

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 128                  | Nein                     |
| Developer Edition | 128                  | Nein                     |
| Beta              | 128                  | Nein                     |
| Release           | 128                  | Nein                     |

- `image.jxl.enabled`
  - : Setzen Sie auf `true`, um diese zu aktivieren.

### SameSite=Lax standardmäßig

[`SameSite` Cookies](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) haben einen Standardwert von `Lax`. Mit dieser Einstellung werden Cookies nur gesendet, wenn ein Benutzer zur Ursprungsseite navigiert, nicht aber für Cross-Site-Unteranfragen zum Laden von Bildern oder Rahmen in eine Drittanbieter-Website usw. Weitere Details siehe [Firefox-Bug 1617609](https://bugzil.la/1617609).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 69                   | Nein                     |
| Developer Edition | 69                   | Nein                     |
| Beta              | 69                   | Nein                     |
| Release           | 69                   | Nein                     |

- `network.cookie.sameSite.laxByDefault`
  - : Setzen Sie auf `true`, um diese zu aktivieren.

### Access-Control-Allow-Headers Platzhalter deckt nicht Authorization ab

Der [`Access-Control-Allow-Headers`](/de/docs/Web/HTTP/Reference/Headers/Access-Control-Allow-Headers) ist ein Antwort-Header auf eine {{Glossary("Preflight_request", "CORS preflight Anfrage")}}, die angibt, welche Anforderungs-Header in der endgültigen Anfrage enthalten sein dürfen. Die Antwortrichtlinie kann ein Platzhalter (`*`) enthalten, der angibt, dass die endgültige Anfrage alle Header außer dem `Authorization` Header enthalten darf.

Standardmäßig schließt Firefox den `Authorization` Header in die endgültige Anfrage ein, nachdem eine Antwort mit `Access-Control-Allow-Headers: *` eingegangen ist. Setzen Sie die Präferenz auf `false`, um sicherzustellen, dass Firefox den `Authorization` Header nicht einschließt. Weitere Details siehe [Firefox-Bug 1687364](https://bugzil.la/1687364).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 115                  | Ja                       |
| Developer Edition | 115                  | Ja                       |
| Beta              | 115                  | Ja                       |
| Release           | 115                  | Ja                       |

- `network.cors_preflight.authorization_covered_by_wildcard`
  - : Setzen Sie auf `true`, um diese zu aktivieren.

## Entwicklertools

Die Entwicklertools von Mozilla entwickeln sich ständig weiter. Wir experimentieren mit neuen Ideen, fügen neue Funktionen hinzu und testen sie auf den Nightly- und Developer Edition-Kanälen, bevor sie in Beta und Release gelangen. Die unten stehenden Funktionen sind die aktuellen experimentellen Funktionen der Entwicklertools.

**Keine experimentellen Funktionen in diesem Release-Zyklus.**

## Siehe auch

- [Firefox Entwickler Versionshinweise](/de/docs/Mozilla/Firefox/Releases)
- [Firefox Nightly](https://www.firefox.com/en-US/channel/desktop/)
- [Firefox Developer Edition](https://www.firefox.com/en-US/channel/desktop/developer/)
