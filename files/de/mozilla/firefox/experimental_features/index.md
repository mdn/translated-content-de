---
title: Experimentelle Funktionen in Firefox
short-title: Experimentelle Funktionen
slug: Mozilla/Firefox/Experimental_features
l10n:
  sourceCommit: 3178e192054bded810d61aecc360b16df23019e7
---

Diese Seite listet die experimentellen und teilweise implementierten Funktionen von Firefox auf, einschließlich sich entwickelnder oder vorgeschlagener Webplattform-Standards.
Jeder Eintrag unten enthält Informationen über die Builds, in denen eine Funktion enthalten ist (Nightly, Beta, Developer Edition oder Release), ob sie standardmäßig aktiviert ist oder nicht und der Name der **Präferenz**, die Sie verwenden können, um die Funktion zu aktivieren oder zu konfigurieren.
Die Beschreibung jeder Funktion enthält auch Links zu relevanten [Bugzilla-Bugs](https://bugzilla.mozilla.org), die die Funktion implementieren oder aktivieren.
Diese Informationen ermöglichen es Ihnen, experimentelle Funktionen auszuprobieren und Feedback zu geben, bevor sie offiziell veröffentlicht werden.

Im Hinblick auf den Lebenszyklus treten neue Funktionen normalerweise zuerst in [Nightly](https://www.firefox.com/en-US/channel/desktop/#nightly) auf, wo sie oft standardmäßig für frühes Feedback und Tests aktiviert sind.
Wenn keine größeren Probleme festgestellt werden, werden sie in [Beta](https://www.firefox.com/en-US/channel/desktop/#beta) und [Developer Edition](https://www.firefox.com/en-US/channel/desktop/developer/) Pre-Release-Builds aufgenommen. Schließlich werden genehmigte Funktionen im stabilen [Release](https://www.firefox.com/en-US/) Kanal veröffentlicht.
Wenn eine Funktion in einem Release standardmäßig aktiviert ist, wird sie nicht mehr als experimentell betrachtet und von dieser Seite entfernt.

Um diese Funktionen zu aktivieren, geben Sie `about:config` in die Firefox-Adressleiste ein, suchen Sie die zugehörige **Präferenz** und ändern Sie deren Wert, der in der Regel ein Umschalten zwischen `true` und `false` ist.
Je nach Funktion müssen Sie möglicherweise den Browser neu starten, damit die Änderung wirksam wird.
Weitere Informationen zum Verwalten von Präferenzen in Firefox finden Sie im [Firefox-Konfigurationseditor](https://support.mozilla.org/en-US/kb/about-config-editor-firefox) Support-Artikel.

## HTML

### Layout für input type="search"

Das Layout für `input type="search"` wurde aktualisiert. Dadurch hat ein Suchfeld ein Lösch-Symbol, sobald jemand darin anfängt zu tippen, um andere Browser-Implementierungen zu erfüllen. (Siehe [Firefox Bug 558594](https://bugzil.la/558594) für weitere Details.)

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 81                  | Nein                     |
| Developer Edition | 81                  | Nein                     |
| Beta              | 81                  | Nein                     |
| Release           | 81                  | Nein                     |

- `layout.forms.input-type-search.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Passwortanzeige umschalten

HTML-Passwort-Input-Elemente ([`<input type="password">`](/de/docs/Web/HTML/Reference/Elements/input/password)) enthalten ein "Auge"-Symbol, das umgeschaltet werden kann, um den Passwort-Text anzuzeigen oder zu verbergen ([Firefox Bug 502258](https://bugzil.la/502258)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 96                  | Nein                     |
| Developer Edition | 96                  | Nein                     |
| Beta              | 96                  | Nein                     |
| Release           | 96                  | Nein                     |

- `layout.forms.reveal-password-button.enabled`
  - : Auf `true` setzen, um zu aktivieren.

## CSS

### Hex-Boxen zur Darstellung von unpassenden Steuerzeichen

Diese Funktion rendert Steuerzeichen (Unicode-Kategorie Cc), außer _Tab_ (`U+0009`), _Zeilenumbruch_ (`U+000A`), _Form Feed_ (`U+000C`) und _Wagenrücklauf_ (`U+000D`), als Hex-Box, wenn sie nicht erwartet werden. (Siehe [Firefox Bug 1099557](https://bugzil.la/1099557) für weitere Details.)

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 43                  | Ja                       |
| Developer Edition | 43                  | Nein                     |
| Beta              | 43                  | Nein                     |
| Release           | 43                  | Nein                     |

- `layout.css.control-characters.visible`
  - : Auf `true` setzen, um zu aktivieren.

### property initial-letter

Die {{cssxref("initial-letter")}} CSS-Eigenschaft ist Teil der [CSS Inline Layout](https://drafts.csswg.org/css-inline/) Spezifikation und ermöglicht Ihnen, anzugeben, wie initiale, erhöhte und versenkte Buchstaben dargestellt werden. (Siehe [Firefox Bug 1223880](https://bugzil.la/1223880) für weitere Details.)

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 50                  | Nein                     |
| Developer Edition | 50                  | Nein                     |
| Beta              | 50                  | Nein                     |
| Release           | 50                  | Nein                     |

- `layout.css.initial-letter.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### fit-content() Funktion

Die {{cssxref("fit-content_function", "fit-content()")}} Funktion wird auf {{cssxref("width")}} und andere Größen-Eigenschaften angewendet. Diese Funktion wird bereits gut für die Größenanpassung von CSS Grid Layout Tracks unterstützt. (Siehe [Firefox Bug 1312588](https://bugzil.la/1312588) für weitere Details.)

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 91                  | Nein                     |
| Developer Edition | 91                  | Nein                     |
| Beta              | 91                  | Nein                     |
| Release           | 91                  | Nein                     |

- `layout.css.fit-content-function.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Scroll-gesteuerte Animationen

Früher "Scroll-verknüpfte Animationen" genannt, hängt eine [scroll-gesteuerte Animation](/de/docs/Web/CSS/CSS_scroll-driven_animations) von der Scroll-Position eines Bildlaufs anstelle von Zeit oder einer anderen Dimension ab.
Die {{cssxref('scroll-timeline-name')}} und {{cssxref('scroll-timeline-axis')}} Eigenschaften (und die {{cssxref('scroll-timeline')}} Kurzschreibweise) ermöglichen es, zu spezifizieren, dass ein bestimmter Bildlauf in einem bestimmten benannten Container als Quelle für eine scroll-gesteuerte Animation verwendet werden kann.
Der Scroll-Zeitstrahl kann dann mit einer [Animation](/de/docs/Web/CSS/CSS_animations) verbunden werden, indem die {{cssxref('animation-timeline')}} Eigenschaft auf den mit `scroll-timeline-name` definierten Namenwert gesetzt wird.

Beim Verwenden der {{cssxref('scroll-timeline')}} Kurzschreibweise muss die Reihenfolge der Eigenschaftswerte {{cssxref('scroll-timeline-name')}} gefolgt von {{cssxref('scroll-timeline-axis')}} sein.
Die Lang- und Kurzschreibweise-Eigenschaften sind beide hinter der Präferenz verfügbar.
Alternativ können Sie die [`scroll()`](/de/docs/Web/CSS/animation-timeline/scroll) funktionale Notation mit {{cssxref('animation-timeline')}} verwenden, um anzugeben, dass eine Bildlaufachse in einem Vorfahrelement für die Zeitachse verwendet wird.

Für weitere Informationen siehe [Firefox Bug 1807685](https://bugzil.la/1807685), [Firefox Bug 1804573](https://bugzil.la/1804573), [Firefox Bug 1809005](https://bugzil.la/1809005), [Firefox Bug 1676791](https://bugzil.la/1676791), [Firefox Bug 1754897](https://bugzil.la/1754897), [Firefox Bug 1817303](https://bugzil.la/1817303) und [Firefox Bug 1737918](https://bugzil.la/1737918).

Die {{cssxref('timeline-scope')}}, {{cssxref('animation-range-start')}} und {{cssxref('animation-range-end')}} Eigenschaften (und die {{cssxref('animation-range')}} Kurzschreibweise) werden noch nicht unterstützt. Für weitere Informationen siehe [Firefox Bug 1676779](https://bugzil.la/1676779).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 136                 | Ja                       |
| Developer Edition | 110                 | Nein                     |
| Beta              | 110                 | Nein                     |
| Release           | 110                 | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### @scope at-rule

Die [@scope](/de/docs/Web/CSS/@scope) [CSS](/de/docs/Web/CSS) [at-rule](/de/docs/Web/CSS/CSS_syntax/At-rule) ermöglicht es Ihnen, bestimmte Kindelemente auszuwählen, ohne die Spezifität von CSS-Selektoren übermäßig erhöhen zu müssen ([Firefox Bug 1886441](https://bugzil.la/1886441)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 137                 | Ja                       |
| Developer Edition | 128                 | Nein                     |
| Beta              | 128                 | Nein                     |
| Release           | 128                 | Nein                     |

- `layout.css.at-scope.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### prefers-reduced-transparency Medien-Feature

Die CSS [`prefers-reduced-transparency`](/de/docs/Web/CSS/@media/prefers-reduced-transparency) Medienabfrage ermöglicht es Ihnen zu erkennen, ob ein Benutzer die Einstellung aktiviert hat, um die Menge an transparenten oder durchscheinenden Schichteffekten auf seinem Gerät zu minimieren.
Siehe ([Firefox Bug 1736914](https://bugzil.la/1736914)) für weitere Details.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 113                 | Nein                     |
| Developer Edition | 113                 | Nein                     |
| Beta              | 113                 | Nein                     |
| Release           | 113                 | Nein                     |

- `layout.css.prefers-reduced-transparency.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### inverted-colors Medien-Feature

Die CSS [`inverted-colors`](/de/docs/Web/CSS/@media/inverted-colors) Medienabfrage ermöglicht es zu erkennen, ob ein User-Agent oder das zugrunde liegende Betriebssystem Farben invertiert.
Siehe ([Firefox Bug 1794628](https://bugzil.la/1794628)) für weitere Details.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 114                 | Nein                     |
| Developer Edition | 114                 | Nein                     |
| Beta              | 114                 | Nein                     |
| Release           | 114                 | Nein                     |

- `layout.css.inverted-colors.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Benannte Fortschrittszeitachsen der Ansicht

Die CSS [`view-timeline-name`](/de/docs/Web/CSS/view-timeline-name) Eigenschaft ermöglicht es Ihnen, ein Element zu benennen, das das Vorfahrelement seines Scrollers als Quelle einer Fortschrittszeitachse der Ansicht identifiziert.
Der Name kann dann der `animation-timeline` zugewiesen werden, die das zugehörige Element animiert, wenn es sich durch den sichtbaren Bereich seines Vorfahrelement-Scrollers bewegt.
Siehe ([Firefox Bug 1737920](https://bugzil.la/1737920)) für weitere Details.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 114                 | Nein                     |
| Developer Edition | 114                 | Nein                     |
| Beta              | 114                 | Nein                     |
| Release           | 114                 | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Anonyme Fortschrittszeitachsen der Ansicht Funktion

Die CSS [`view()`](/de/docs/Web/CSS/animation-timeline/view) Funktion ermöglicht es Ihnen, anzugeben, dass die `animation-timeline` für ein Element eine Fortschrittszeitachse der Ansicht ist, die das Element animiert, wenn es sich durch den sichtbaren Bereich seines Vorfahrelements bewegt.
Die Funktion definiert die Achse des übergeordneten Elements, das die Zeitachse bereitstellt, zusammen mit dem Rand innerhalb des sichtbaren Bereichs, bei dem die Animation beginnt und endet.
Siehe ([Firefox Bug 1808410](https://bugzil.la/1808410)) für weitere Details.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 114                 | Nein                     |
| Developer Edition | 114                 | Nein                     |
| Beta              | 114                 | Nein                     |
| Release           | 114                 | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Vendor-spezifische Transform-Eigenschaften

Die mit `-moz-` versehenen [CSS-Transform](/de/docs/Web/CSS/CSS_transforms) Eigenschaften können deaktiviert werden, indem die `layout.css.prefixes.transforms` Präferenz auf `false` gesetzt wird. Die Absicht ist, diese zu deaktivieren, sobald die Standard-CSS-Zoom-Eigenschaften gut unterstützt werden. ([Firefox Bug 1886134](https://bugzil.la/1886134), [Firefox Bug 1855763](https://bugzil.la/1855763)).

Speziell wird diese Präferenz die folgenden mit Präfix versehenen Eigenschaften deaktivieren:

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

Die CSS [`shape()`](/de/docs/Web/CSS/basic-shape/shape) Funktion ist ein [`<basic-shape>`](/de/docs/Web/CSS/basic-shape) Datentyp, der es Ihnen ermöglicht, eine Form in den {{cssxref("clip-path")}} und {{cssxref("offset-path")}} Eigenschaften unter Verwendung eines oder mehrerer "Shape-Befehle" zu definieren. Diese Befehle ähneln sehr den [SVG-Pfad-Befehlen](/de/docs/Web/SVG/Reference/Attribute/d#path_commands). Die `shape()` Funktion ist in gewisser Hinsicht ähnlich der {{cssxref("basic-shape/path","path()")}} Funktion, verwendet jedoch anders als `path()` nicht die [SVG-Pfad](/de/docs/Web/SVG/Reference/Element/path)-Syntax, sondern verwendet die Standard-CSS-Syntax. Dies ermöglicht Ihnen, Formen unkompliziert zu erstellen und zu bearbeiten und ermöglicht auch die Verwendung von CSS-Mathematikfunktionen.
Für weitere Details siehe [Firefox Bug 1823463](https://bugzil.la/1823463) für die `shape()` Funktion Unterstützung in `clip-path`, [Firefox Bug 1884424](https://bugzil.la/1884424) für die Unterstützung der Funktion in `offset-path` und [Firefox Bug 1884425](https://bugzil.la/1884425) für ihre Interpolations-Unterstützung.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 126                 | Ja                       |
| Developer Edition | 126                 | Nein                     |
| Beta              | 126                 | Nein                     |
| Release           | 126                 | Nein                     |

- `layout.css.basic-shape-shape.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Symmetrische `letter-spacing`

Die CSS {{cssxref("letter-spacing")}} Eigenschaft verteilt jetzt den angegebenen Buchstabenabstand gleichmäßig auf beiden Seiten jedes Zeichens. Dies unterscheidet sich vom aktuellen Verhalten, bei dem der Abstand hauptsächlich auf einer Seite hinzugefügt wird. Dieser Ansatz kann die Textraumordnung verbessern, insbesondere bei gemischtgerichtetem Text [Firefox Bug 1891446](https://bugzil.la/1891446).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 128                 | Ja                       |
| Developer Edition | 128                 | Ja                       |
| Beta              | 127                 | Nein                     |
| Release           | 127                 | Nein                     |

- `layout.css.letter-spacing.model`
  - : Auf `true` setzen, um zu aktivieren.

### `calc()` Farbkanalunterstützung in relativen Farben

Die CSS [`calc()`](/de/docs/Web/CSS/calc) Funktion kann jetzt Farbkanäle in [relativen Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors#using_math_functions) analysieren, sodass Sie Änderungen an Farben in verschiedenen Farbräumen oder beim Verwenden verschiedener funktionaler Notationen korrekt berechnen können [Firefox Bug 1889561](https://bugzil.la/1889561).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 127                 | Ja                       |
| Developer Edition | 127                 | Nein                     |
| Beta              | 127                 | Nein                     |
| Release           | 127                 | Nein                     |

- `layout.css.relative-color-syntax.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### CSS-Ankerpositionierung

Das [CSS Anchor Positioning](/de/docs/Web/CSS/CSS_anchor_positioning) Modul definiert eine Reihe von Funktionen, die es ermöglichen, Elemente als Ankerelemente zu definieren und andere Elemente relativ zu diesen Ankerelementen zu positionieren.
Dies erlaubt es zum Beispiel, Tooltips neben dem zugehörigen Inhalt darzustellen, wenn dieser durch das Ansichtsfenster gescrollt wird, sich zu bewegen, wenn es nötig ist, um ein Überlaufen des Ansichtsfensters zu vermeiden, und zu verschwinden, wenn der Anker aus dem sichtbaren Bereich verschwindet.
Die Menge an Funktionen wird schrittweise hinter einer Präferenz eingeführt ([Firefox Bug 1838746](https://bugzil.la/1838746)).

Die implementierten Teile umfassen [`CSSPositionTryRule`](/de/docs/Web/API/CSSPositionTryRule) und [`CSSPositionTryDescriptors`](/de/docs/Web/API/CSSPositionTryDescriptors) (Firefox 131).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 131                 | Nein                     |
| Developer Edition | 131                 | Nein                     |
| Beta              | 131                 | Nein                     |
| Release           | 131                 | Nein                     |

- `layout.css.anchor-positioning.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### `::details-content` Pseudoelement

Das CSS {{cssxref("::details-content")}} Pseudoelement ermöglicht es Ihnen, den Inhalt des {{htmlElement("details")}} Elements zu stylen ([Firefox Bug 1901037](https://bugzil.la/1901037)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 138                 | Nein                     |
| Developer Edition | 138                 | Nein                     |
| Beta              | 138                 | Nein                     |
| Release           | 138                 | Nein                     |

- `layout.css.details-content.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Erlauben von Pseudoelementen nach elementgestützten Pseudoelementen

Es wurde damit begonnen, [Pseudoelemente](/de/docs/Web/CSS/Pseudo-elements) wie {{cssxref("::first-letter")}} und {{cssxref("::before")}} nach [elementgestützten Pseudoelementen](/de/docs/Web/CSS/Pseudo-elements#element-backed_pseudo-elements) wie {{cssxref("::details-content")}} und {{cssxref("::file-selector-button")}} hinzuzufügen.

Dies ermöglicht es Benutzern beispielsweise, den ersten Buchstaben des {{htmlElement("details")}} Elements mit dem CSS-Selektor `::details-content::first-letter` zu stylen oder Inhalt vor einem {{htmlElement("input")}} mit [`type="file"`](/de/docs/Web/HTML/Reference/Elements/input/file) mit dem CSS-Selektor `::file-selector-button::before` hinzuzufügen.

Derzeit kann nur die Unterstützung für `::details-content::first-letter` analysiert werden, wobei `@supports(::details-content::first-letter)` verwendet wird, und die Präferenz für das [::details-content Pseudoelement](#details-content_pseudo-element) muss aktiviert werden, um dies zu testen. Das `::file-selector-button` Pseudoelement wird noch nicht als elementgestütztes Pseudoelement markiert, sodass es derzeit keine Möglichkeit gibt, dies zu testen. ([Firefox Bug 1953557](https://bugzil.la/1953557)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 138                 | Nein                     |
| Developer Edition | 138                 | Nein                     |
| Beta              | 138                 | Nein                     |
| Release           | 138                 | Nein                     |

- `layout.css.details-content.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### `:active-view-transition` Pseudoklasse

Die CSS {{CSSXRef(":active-view-transition")}} Pseudoklasse ermöglicht es Ihnen, Inhalte während eines [View-Transitions](/de/docs/Web/API/View_Transition_API) in einer Single-Page-App (SPA) zu stylen. ([Firefox Bug 1956140](https://bugzil.la/1956140)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 141                 | Ja                       |
| Developer Edition | 141                 | Nein                     |
| Beta              | 141                 | Nein                     |
| Release           | -                   | Nein                     |

- `dom.viewTransitions.enabled`
  - : Auf `true` setzen, um zu aktivieren.

## SVG

**Keine experimentellen Funktionen in diesem Veröffentlichungszyklus.**

## JavaScript

### Atomics.waitAsync()

Die statische Methode {{jsxref("Atomics.waitAsync()")}} wartet asynchron an einem gemeinsamen Speicherort und gibt ein Objekt zurück, das das Ergebnis der Operation repräsentiert.
Sie ist nicht blockierend und kann im Hauptthread verwendet werden. ([Firefox Bug 1467846](https://bugzil.la/1467846)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 140                 | Nein                     |
| Developer Edition | 140                 | Nein                     |
| Beta              | 140                 | Nein                     |
| Release           | 140                 | Nein                     |

- `javascript.options.atomics_wait_async`
  - : Auf `true` setzen, um zu aktivieren.

## APIs

### CloseWatcher Schnittstelle

Eingebaute Webkomponenten mit "Open"- und "Close"-Semantik, wie modale Dialoge und Dropdowns, können mithilfe von gerätenativen Mechanismen geschlossen werden.
Zum Beispiel können Sie auf Android einen Dialog mit der Zurück-Taste schließen.
Die [`CloseWatcher`](/de/docs/Web/API/CloseWatcher) Schnittstelle ermöglicht es Entwicklern, UI-Komponenten wie benutzerdefinierte Seitenleisten zu implementieren, die ähnlich mit nativen Mechanismen geschlossen werden können.
([Firefox Bug 1888729](https://bugzil.la/1888729)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert?      |
| ----------------- | ------------------- | ----------------------------- |
| Nightly           | 140                 | Ja (Desktop). Nein (Android). |
| Developer Edition | 132                 | Nein                          |
| Beta              | 132                 | Nein                          |
| Release           | 132                 | Nein                          |

- `dom.closewatcher.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Trusted Types API

Die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) bietet Mechanismen, um sicherzustellen, dass Funktionen, die potenziell als Vektoren für XSS-Angriffe verwendet werden können, nur mit Daten aufgerufen werden können, die validiert oder sanitisiert wurden.

> [!NOTE]
> Zum Zeitpunkt der Erstellung sind noch nicht genügend Teile der API implementiert, um sie effektiv testbar zu machen.
> Diese Anmerkung wird entfernt, sobald sie bereit ist.

Dieser Teil der API wurde implementiert:

- [`TrustedTypePolicyFactory`](/de/docs/Web/API/TrustedTypePolicyFactory):
  - [`getAttributeType()`](/de/docs/Web/API/TrustedTypePolicyFactory/getAttributeType) und [`getPropertyType()`](/de/docs/Web/API/TrustedTypePolicyFactory/getPropertyType) ([Firefox Bug 1917783](https://bugzil.la/1917783), [Firefox Bug 1917784](https://bugzil.la/1917784)).
- Die [`write()`](/de/docs/Web/API/Document/write) und [`writeln()`](/de/docs/Web/API/Document/writeln) Methoden der [`Document`](/de/docs/Web/API/Document) Schnittstelle akzeptieren jetzt neben Strings auch [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) Objekte als Parameter. ([Firefox Bug 1906301](https://bugzil.la/1906301)).
- Die [`text`](/de/docs/Web/API/HTMLScriptElement/text), [`innerText`](/de/docs/Web/API/HTMLElement/innerText), und [`textContent`](/de/docs/Web/API/Node/textContent) Eigenschaften der [`HTMLScriptElement`](/de/docs/Web/API/HTMLScriptElement) Schnittstelle akzeptieren jetzt [`TrustedScript`](/de/docs/Web/API/TrustedScript) Objekte als Wert, während [`src`](/de/docs/Web/API/HTMLScriptElement/src) [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL) Werte akzeptiert. ([Firefox Bug 1905706](https://bugzil.la/1905706)).
- Die [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval) und [`Window.setTimeout()`](/de/docs/Web/API/Window/setTimeout) Methoden können mit einem [`TrustedScript`](/de/docs/Web/API/TrustedScript) aufgerufen werden. ([Firefox Bug 1931290](https://bugzil.la/1931290)).
- Die globale [`trustedTypes`](/de/docs/Web/API/Window/trustedTypes) Eigenschaft ist verfügbar, um auf die Trusted Types API zuzugreifen.
- Die Eigenschaften [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) und [`ShadowRoot.innerHTML`](/de/docs/Web/API/ShadowRoot/innerHTML) können mit [trusted types](/de/docs/Web/API/Trusted_Types_API) aufgerufen werden.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 133                 | Nein                     |
| Developer Edition | 133                 | Nein                     |
| Beta              | 133                 | Nein                     |
| Release           | 133                 | Nein                     |

- `dom.security.trusted_types.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### HTML Sanitizer API

Die [HTML Sanitizer API](/de/docs/Web/API/HTML_Sanitizer_API) ermöglicht es Entwicklern, unzuverlässige HTML-Strings zu nehmen und sie zu desinfizieren, um sie sicher in das DOM eines Dokuments einzufügen.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 138                 | Nein                     |
| Developer Edition | 138                 | Nein                     |
| Beta              | 138                 | Nein                     |
| Release           | 138                 | Nein                     |

- `dom.security.sanitizer.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Entfernen der `beforescriptexecute` und `afterscriptexecute` Ereignisse

Die nicht standardmäßigen Ereignisse [`beforescriptexecute`](/de/docs/Web/API/Document/beforescriptexecute_event) und [`afterscriptexecute`](/de/docs/Web/API/Document/afterscriptexecute_event) auf der [`Document`](/de/docs/Web/API/Document) Schnittstelle und [`afterscriptexecute`](/de/docs/Web/API/Element/afterscriptexecute_event) und [`beforescriptexecute`](/de/docs/Web/API/Element/beforescriptexecute_event) auf der [`Element`](/de/docs/Web/API/Element) Schnittstelle sind auf dem Weg zur Entfernung. Sie sind in Nightly deaktiviert.
([Firefox Bug 1954685](https://bugzil.la/1954685)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 139                 | Nein                     |
| Developer Edition | 139                 | Ja                       |
| Beta              | 139                 | Ja                       |
| Release           | 139                 | Ja                       |

- `dom.events.script_execute.enable`
  - : Auf `true` setzen, um zu aktivieren.

### PerformanceEventTiming.interactionId

[`PerformanceEventTiming.interactionId`](/de/docs/Web/API/PerformanceEventTiming/interactionId) kann verwendet werden, um die Latenzzeit für Ereignisse zu messen, die durch eine bestimmte Benutzerinteraktion ausgelöst werden. ([Firefox Bug 1934683](https://bugzil.la/1934683)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 138                 | Nein                     |
| Developer Edition | 138                 | Nein                     |
| Beta              | 138                 | Nein                     |
| Release           | 138                 | Nein                     |

- `dom.performance.event_timing.enable_interactionid`
  - : Auf `true` setzen, um zu aktivieren.

### Benachrichtigungsaktionen und maxActions Eigenschaften

Die [`actions`](/de/docs/Web/API/Notification/actions) schreibgeschützte Eigenschaft und die [`maxActions`](/de/docs/Web/API/Notification/maxActions_static) statische schreibgeschützte Eigenschaft der [`Notification`](/de/docs/Web/API/Notification) Schnittstelle werden in Nightly auf Desktop unterstützt.
Diese enthalten die Benachrichtigungsaktionen, die mit [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification) gesetzt werden, und die maximale Anzahl an Aktionen, die gesetzt werden können.
([Firefox Bug 1225110](https://bugzil.la/1225110), [Firefox Bug 1963263](https://bugzil.la/1963263)).

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

Wenn diese Präferenz aktiviert ist, werden alle WebGL-Erweiterungen, die sich derzeit im "Entwurfsstatus" befinden und getestet werden, zur Verwendung aktiviert. Derzeit werden keine WebGL-Erweiterungen von Firefox getestet.

#### WebGPU API

Die [WebGPU API](/de/docs/Web/API/WebGPU_API) bietet grundlegende Unterstützung für die Durchführung von Berechnungen und die grafische Darstellung mithilfe der [Graphics Processing Unit](https://en.wikipedia.org/wiki/Graphics_Processing_Unit) (GPU) des Geräts oder Computers des Benutzers. Siehe [Firefox Bug 1602129](https://bugzil.la/1602129) für unsere Fortschritte bei dieser API.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 113                 | Ja                       |
| Developer Edition | 73                  | Nein                     |
| Beta              | 73                  | Nein                     |
| Release           | 73                  | Nein                     |

- `dom.webgpu.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Reporting API Unterstützung für CSP-Verstöße

Die [Reporting API](/de/docs/Web/API/Reporting_API) hat jetzt Unterstützung für das Melden von [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) Verstößen.

[`Report`](/de/docs/Web/API/Report) Instanzen, die von der [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) Schnittstelle zurückgegeben werden, können jetzt einen `type`-Wert von `"csp-violation"` und eine `body`-Eigenschaft enthalten, die eine Instanz der [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody) Schnittstelle ist.
Dies ermöglicht es, CSP-Verstöße innerhalb einer Webseite zu melden.

CSP-Verstoßberichte können auch an entfernte Endpunkte gesendet werden, die mit Namen in der CSP {{CSP("report-to")}} Direktive angegeben sind – Endpunktnamen und entsprechende URLs müssen zunächst in den {{httpheader('Reporting-Endpoints')}} oder {{httpheader('Report-To')}} HTTP-Antwortheadern definiert werden.
Der Bericht ist eine Serialisierung des oben beschriebenen [`Report`](/de/docs/Web/API/Report) Objekts, mit einer `body`-Eigenschaft, die eine Serialisierung einer [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody) Instanz ist.

Dieser Verstoßbericht ersetzt einen ähnlichen CSP-spezifischen Mechanismus zum Senden von Verstoßberichten, bei dem die CSP {{CSP("report-uri")}} Direktive verwendet wird, um die URL des Berichts-Endpunkts festzulegen, und ein [CSP-spezifisches JSON-Verstoßbericht-Format](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/report-uri#violation_report_syntax) besitzt.
([Firefox Bug 1391243](https://bugzil.la/1391243)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 130                 | Nein                     |
| Developer Edition | 130                 | Nein                     |
| Beta              | 130                 | Nein                     |
| Release           | 130                 | Nein                     |

- `dom.reporting.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### WebRTC und Medien

Die folgenden experimentellen Funktionen beinhalten diejenigen, die in der [WebRTC-API](/de/docs/Web/API/WebRTC_API), der [Web Audio API](/de/docs/Web/API/Web_Audio_API), der [Media Source Extensions API](/de/docs/Web/API/Media_Source_Extensions_API), der [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API) und der [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) zu finden sind.

#### Asynchrone SourceBuffer hinzufügen und entfernen

Dies fügt die auf Promises basierenden Methoden [`appendBufferAsync()`](/de/docs/Web/API/SourceBuffer/appendBufferAsync) und [`removeAsync()`](/de/docs/Web/API/SourceBuffer/removeAsync) zum Hinzufügen und Entfernen von Mediensource-Puffern zur [`SourceBuffer`](/de/docs/Web/API/SourceBuffer) Schnittstelle hinzu. Siehe [Firefox Bug 1280613](https://bugzil.la/1280613) und [Firefox Bug 778617](https://bugzil.la/778617) für weitere Informationen.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 62                  | Nein                     |
| Developer Edition | 62                  | Nein                     |
| Beta              | 62                  | Nein                     |
| Release           | 62                  | Nein                     |

- `media.mediasource.experimental.enabled`
  - : Auf `true` setzen, um zu aktivieren.

#### AVIF-Konformitätsstrenge

Die Präferenz `image.avif.compliance_strictness` kann verwendet werden, um die _Strenge_ zu steuern, die beim Verarbeiten von [AVIF](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) Bildern angewendet wird.
Dadurch können Firefox-Benutzer Bilder anzeigen, die in einigen anderen Browsern gerendert werden, selbst wenn sie nicht streng konform sind.

| Release-Kanal     | Version hinzugefügt | Standardwert |
| ----------------- | ------------------- | ------------ |
| Nightly           | 92                  | 1            |
| Developer Edition | 92                  | 1            |
| Beta              | 92                  | 1            |
| Release           | 92                  | 1            |

- `image.avif.compliance_strictness`
  - : Numerischer Wert, der einen _Strengheits_ Level anzeigt. Erlaubte Werte sind:
    - `0`: Permissiv. Akzeptiere Bilder mit Spezifikationsverstößen sowohl in Empfehlungen ("sollte" Sprache) als auch in Anforderungen ("muss" Sprache), sofern sie sicher oder eindeutig interpretiert werden können.
    - `1` **(Standard)**: Gemischt. Verweigere Verstöße gegen Anforderungen ("muss"), aber erlaube Verstöße gegen Empfehlungen ("sollte").
    - `2`: Streng. Verweigere jegliche Verstöße gegen spezifizierte Anforderungen oder Empfehlungen.

#### JPEG XL Unterstützung

Firefox unterstützt [JPEG XL](https://jpeg.org/jpegxl/) Bilder, wenn diese Funktion aktiviert ist.
Siehe [Firefox Bug 1539075](https://bugzil.la/1539075) für weitere Details.

Beachten Sie, dass, wie unten gezeigt, die Funktion nur in Nightly Builds verfügbar ist, unabhängig davon, ob die Präferenz gesetzt ist.

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

Die veraltete [WebVR API](/de/docs/Web/API/WebVR_API) befindet sich auf dem Weg zur Entfernung.
Sie ist standardmäßig in allen Builds deaktiviert [Firefox Bug 1750902](https://bugzil.la/1750902).

| Release-Kanal     | Version entfernt | Standardmäßig aktiviert? |
| ----------------- | ---------------- | ------------------------ |
| Nightly           | 98               | Nein                     |
| Developer Edition | 98               | Nein                     |
| Beta              | 98               | Nein                     |
| Release           | 98               | Nein                     |

- `dom.vr.enabled`
  - : Auf `true` setzen, um zu aktivieren.

#### HTMLMediaElement Eigenschaften: audioTracks und videoTracks

Die Aktivierung dieser Funktion fügt die [`HTMLMediaElement.audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks) und [`HTMLMediaElement.videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks) Eigenschaften zu allen HTML-Medienelementen hinzu. Da Firefox jedoch aktuell keine Unterstützung für mehrere Audio- und Video-Tracks bietet, funktionieren die häufigsten Anwendungsfälle für diese Eigenschaften nicht, weshalb sie standardmäßig deaktiviert sind. Siehe [Firefox Bug 1057233](https://bugzil.la/1057233) für weitere Details.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 33                  | Nein                     |
| Developer Edition | 33                  | Nein                     |
| Beta              | 33                  | Nein                     |
| Release           | 33                  | Nein                     |

- `media.track.enabled`
  - : Auf `true` setzen, um zu aktivieren.

#### GeometryUtils-Methoden: convertPointFromNode(), convertRectFromNode() und convertQuadFromNode()

Die `GeometryUtils` Methoden `convertPointFromNode()`, `convertRectFromNode()` und `convertQuadFromNode()` wandeln den gegebenen Punkt, das Rechteck oder das Viereck vom [`Node`](/de/docs/Web/API/Node), auf dem sie aufgerufen werden, zu einem anderen Knoten um. (Siehe [Firefox Bug 918189](https://bugzil.la/918189) für weitere Details.)

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 31                  | Ja                       |
| Developer Edition | 31                  | Nein                     |
| Beta              | 31                  | Nein                     |
| Release           | 31                  | Nein                     |

- `layout.css.convertFromNode.enable`
  - : Auf `true` setzen, um zu aktivieren.

#### GeometryUtils-Methode: getBoxQuads()

Die `GeometryUtils` Methode `getBoxQuads()` gibt die CSS-Boxen für einen [`Node`](/de/docs/Web/API/Node) relativ zu irgendeinem anderen Knoten oder dem Ansichtsfenster zurück. (Siehe [Firefox Bug 917755](https://bugzil.la/917755) für weitere Details.)

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

Die [Payment Request API](/de/docs/Web/API/Payment_Request_API) bietet Unterstützung für das Handling von webbasierten Zahlungen innerhalb von Webinhalten oder Apps. Aufgrund eines Fehlers, der während des Testens der Benutzeroberfläche auftrat, haben wir beschlossen, die Veröffentlichung dieser API zu verschieben, während Diskussionen über mögliche Änderungen der API stattfinden. Die Arbeit daran läuft weiter. (Siehe [Firefox Bug 1318984](https://bugzil.la/1318984) für weitere Details.)

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 55                  | Nein                     |
| Developer Edition | 55                  | Nein                     |
| Beta              | 55                  | Nein                     |
| Release           | 55                  | Nein                     |

- `dom.payments.request.enabled`
  - : Auf `true` setzen, um zu aktivieren.
- `dom.payments.request.supportedRegions`
  - : Ländercodes als kommagetrennte Positivliste von Regionen (z. B. `US,CA`).

### WebShare API

Die [Web Share API](/de/docs/Web/API/Web_Share_API) ermöglicht das Teilen von Dateien, URLs und anderen Daten von einer Website.
Diese Funktion ist auf Android in allen Builds aktiviert, aber hinter einer Präferenz auf dem Desktop (es sei denn, unten angegeben).

| Release-Kanal     | Version geändert | Standardmäßig aktiviert?                    |
| ----------------- | ---------------- | ------------------------------------------- |
| Nightly           | 71               | Nein (Standard). Ja (Windows ab Version 92) |
| Developer Edition | 71               | Nein                                        |
| Beta              | 71               | Nein                                        |
| Release           | 71               | Nein (Desktop). Ja (Android).               |

- `dom.webshare.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Screen Orientation API

#### ScreenOrientation.lock()

Die [`ScreenOrientation.lock()`](/de/docs/Web/API/ScreenOrientation/lock) Methode ermöglicht es, ein Gerät auf eine bestimmte Orientierung zu sperren, falls dies vom Gerät unterstützt wird und die Browsereinstellungen vor der Sperrung dies erlauben.
Typischerweise ist das Sperren der Orientierung nur auf mobilen Geräten erlaubt, wenn das Dokument im Vollbildmodus angezeigt wird.
Siehe [Firefox Bug 1697647](https://bugzil.la/1697647) für weitere Details.

| Release-Kanal     | Version geändert | Standardmäßig aktiviert? |
| ----------------- | ---------------- | ------------------------ |
| Nightly           | 111              | Ja                       |
| Developer Edition | 97               | Nein                     |
| Beta              | 97               | Nein                     |
| Release           | 97               | Nein                     |

- `dom.screenorientation.allow-lock`
  - : Auf `true` setzen, um zu aktivieren.

### Priorisierte Aufgabenplanungs-API

Die [Prioritized Task Scheduling API](/de/docs/Web/API/Prioritized_Task_Scheduling_API) bietet eine standardisierte Möglichkeit, alle Aufgaben, die zu einer Anwendung gehören, zu priorisieren, unabhängig davon, ob sie im Code eines Websiteentwicklers oder in Bibliotheken und Frameworks von Drittanbietern definiert sind.
Ab Firefox Version 140 ist die API sowohl funktionsfähig als auch in der Nightly-Veröffentlichung aktiviert.
([Firefox Bug 1734997](https://bugzil.la/1734997) und [Firefox Bug 1920115](https://bugzil.la/1920115)).

| Release-Kanal     | Version geändert | Standardmäßig aktiviert? |
| ----------------- | ---------------- | ------------------------ |
| Nightly           | 139              | Ja                       |
| Developer Edition | 101              | Nein                     |
| Beta              | 101              | Nein                     |
| Release           | 101              | Nein                     |

- `dom.enable_web_task_scheduling`
  - : Auf `true` setzen, um zu aktivieren.

### Benachrichtigungen API

Benachrichtigungen haben die [`requireInteraction`](/de/docs/Web/API/Notification/requireInteraction) Eigenschaft standardmäßig auf Windows-Systemen und in der Nightly-Veröffentlichung auf true gesetzt ([Firefox Bug 1794475](https://bugzil.la/1794475)).

| Release-Kanal     | Version geändert | Standardmäßig aktiviert? |
| ----------------- | ---------------- | ------------------------ |
| Nightly           | 117              | Ja                       |
| Developer Edition | 117              | Nein                     |
| Beta              | 117              | Nein                     |
| Release           | 117              | Nur Windows              |

- `dom.webnotifications.requireinteraction.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### View Transition API

Die [View Transition API](/de/docs/Web/API/View_Transition_API) bietet einen Mechanismus, um problemlos animierte Übergänge zwischen unterschiedlichen Website-Ansichten zu erstellen. Dies ist besonders nützlich für {{Glossary("SPA", "SPAs (Single-Page-Applications)")}}. ([Firefox Bug 1950759](https://bugzil.la/1950759)).

| Release-Kanal     | Version geändert | Standardmäßig aktiviert? |
| ----------------- | ---------------- | ------------------------ |
| Nightly           | 139              | Ja                       |
| Developer Edition | 139              | Nein                     |
| Beta              | 139              | Nein                     |
| Release           | 139              | Nein                     |

- `dom.viewTransitions.enabled`
  - : Auf `true` setzen, um zu aktivieren.

## Sicherheit und Privatsphäre

### Anzeigen von unsicheren Seiten

Die beiden `security.insecure_connection_text_*` Präferenzen fügen ein "Nicht sicher"-Textlabel in die Adressleiste neben dem traditionellen Schloss-Symbol hinzu, wenn eine Seite unsicher geladen wird (d.h. unter Verwendung von {{Glossary("HTTP", "HTTP")}} anstelle von {{Glossary("HTTPS", "HTTPS")}}). Die Präferenz `browser.urlbar.trimHttps` trimmt das `https:` Präfix von Adressleisten-URLs. Siehe [Firefox Bug 1853418](https://bugzil.la/1853418) für weitere Details.

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
  - : Auf `true` setzen, um das `https:` Präfix von Adressleisten-URLs zu kürzen.

### Berechtigungsrichtlinie / Feature-Policy

[Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) erlaubt es Webentwicklern, die Nutzung bestimmter Funktionen und APIs im Browser selektiv zu aktivieren, zu deaktivieren und zu modifizieren. Sie ähnelt CSP, kontrolliert jedoch Funktionen anstelle von Sicherheitsverhalten.
Dies wird in Firefox als **Feature Policy** implementiert, dem Namen, der in einer früheren Version der Spezifikation verwendet wurde.

Beachten Sie, dass unterstützte Richtlinien durch das [`allow`](/de/docs/Web/HTML/Reference/Elements/iframe#allow) Attribut auf `<iframe>` Elementen gesetzt werden können, auch wenn die Benutzerpräferenz nicht gesetzt ist.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 65                  | Nein                     |
| Developer Edition | 65                  | Nein                     |
| Beta              | 65                  | Nein                     |
| Release           | 65                  | Nein                     |

- `dom.security.featurePolicy.header.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Privacy Preserving Attribution API (PPA)

Die [PPA API](https://support.mozilla.org/en-US/kb/privacy-preserving-attribution) bietet eine Alternative zum Nutzer-Tracking für die Anzeigengutschrift mithilfe des neuen `navigator.privateAttribution` Objekts mit `saveImpression()` und `measureConversion()` Methoden. Lesen Sie mehr über PPA [in der ursprünglichen Erklärung](https://github.com/mozilla/explainers/tree/main/archive/ppa-experiment) und dem [vorgeschlagenen Spezifikation](https://w3c.github.io/ppa/). Dieses Experiment kann für Webseiten über [Origin Trials](https://wiki.mozilla.org/Origin_Trials) oder im Browser durch Setzen der Präferenz auf `1` aktiviert werden. ([Firefox Bug 1900929](https://bugzil.la/1900929)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 128                 | Nein                     |
| Developer Edition | 128                 | Nein                     |
| Beta              | 128                 | Nein                     |
| Release           | 128                 | Nein                     |

- `dom.origin-trials.private-attribution.state`
  - : Auf `true` setzen, um zu aktivieren.

## HTTP

### Accept-Header mit MIME-Typ image/jxl

Der HTTP [`Accept`](/de/docs/Web/HTTP/Reference/Headers/Accept) Header in [Standardanfragen und Bildanfragen](/de/docs/Web/HTTP/Guides/Content_negotiation/List_of_default_Accept_values) kann über eine Präferenz konfiguriert werden, um die Unterstützung für den `image/jxl` MIME-Typ anzuzeigen.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 128                 | Nein                     |
| Developer Edition | 128                 | Nein                     |
| Beta              | 128                 | Nein                     |
| Release           | 128                 | Nein                     |

- `image.jxl.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### SameSite=Lax standardmäßig

[`SameSite` Cookies](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) haben standardmäßig den Wert `Lax`.
Mit dieser Einstellung werden Cookies nur gesendet, wenn ein Benutzer zur Ursprungsseite navigiert, nicht aber für plattformübergreifende Unteranfragen zum Laden von Bildern oder Frames auf einer Drittpartei-Seite und dergleichen.
Für weitere Details siehe [Firefox Bug 1617609](https://bugzil.la/1617609).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 69                  | Nein                     |
| Developer Edition | 69                  | Nein                     |
| Beta              | 69                  | Nein                     |
| Release           | 69                  | Nein                     |

- `network.cookie.sameSite.laxByDefault`
  - : Auf `true` setzen, um zu aktivieren.

### Access-Control-Allow-Headers Platzhalter deckt nicht Autorisierung ab

Der [`Access-Control-Allow-Headers`](/de/docs/Web/HTTP/Reference/Headers/Access-Control-Allow-Headers) ist ein Antwortheader auf eine {{Glossary("Preflight_request", "CORS-Vorabfrage")}}, der angibt, welche Anfrageheader in die endgültige Anfrage aufgenommen werden dürfen.
Die Antwortdirektive kann einen Platzhalter (`*`) enthalten, der anzeigt, dass die endgültige Anfrage alle Header außer dem `Authorization`-Header enthalten darf.

Standardmäßig enthält Firefox den `Authorization`-Header in der endgültigen Anfrage nach Erhalt einer Antwort mit `Access-Control-Allow-Headers: *`.
Setzen Sie die Präferenz auf `false`, um sicherzustellen, dass Firefox den `Authorization`-Header nicht einbezieht.
Für weitere Details siehe [Firefox Bug 1687364](https://bugzil.la/1687364).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 115                 | Ja                       |
| Developer Edition | 115                 | Ja                       |
| Beta              | 115                 | Ja                       |
| Release           | 115                 | Ja                       |

- `network.cors_preflight.authorization_covered_by_wildcard`
  - : Auf `true` setzen, um zu aktivieren.

## Entwicklertools

Die Entwicklerwerkzeuge von Mozilla befinden sich in ständiger Weiterentwicklung. Wir experimentieren mit neuen Ideen, fügen neue Funktionen hinzu und testen sie auf den Nightly- und Developer Edition-Kanälen, bevor sie zu Beta und Release übergehen. Die unten aufgeführten Funktionen sind die aktuelle Auswahl experimenteller Entwicklertoolfunktionen.

**Keine experimentellen Funktionen in diesem Veröffentlichungszyklus.**

## Siehe auch

- [Firefox Entwickler-Veröffentlichungshinweise](/de/docs/Mozilla/Firefox/Releases)
- [Firefox Nightly](https://www.firefox.com/en-US/channel/desktop/)
- [Firefox Developer Edition](https://www.firefox.com/en-US/channel/desktop/developer/)
