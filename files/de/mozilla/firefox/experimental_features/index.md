---
title: Experimentelle Funktionen in Firefox
short-title: Experimentelle Funktionen
slug: Mozilla/Firefox/Experimental_features
l10n:
  sourceCommit: f4ba195a2dfd2f6975b0a091f1153e154b515b54
---

Diese Seite listet die experimentellen und teilweise implementierten Funktionen von Firefox auf, einschließlich sich entwickelnder oder vorgeschlagener Webplattformstandards.
Jeder Eintrag unten enthält Informationen zu den Builds, in denen eine Funktion enthalten ist (Nightly, Beta, Developer Edition oder Release), ob sie standardmäßig aktiviert ist oder nicht, und den Namen der **Präferenz**, die Sie verwenden können, um die Funktion zu aktivieren oder zu konfigurieren.
Die Beschreibung jeder Funktion enthält auch Links zu relevanten [Bugzilla Bugs](https://bugzilla.mozilla.org), die die Funktion implementieren oder aktivieren.
Diese Informationen ermöglichen es Ihnen, experimentelle Funktionen auszuprobieren und Feedback zu geben, bevor sie offiziell veröffentlicht werden.

In Bezug auf den Lebenszyklus erscheinen neue Funktionen normalerweise zuerst in [Nightly](https://www.firefox.com/en-US/channel/desktop/#nightly), wo sie oft standardmäßig für frühzeitiges Feedback und Tests aktiviert sind.
Wenn keine größeren Probleme festgestellt werden, werden sie in [Beta](https://www.firefox.com/en-US/channel/desktop/#beta) und [Developer Edition](https://www.firefox.com/en-US/channel/desktop/developer/) Vorab-Builds aufgenommen. Schließlich werden genehmigte Funktionen im stabilen [Release](https://www.firefox.com/en-US/) Kanal ausgeliefert.
Wenn eine Funktion in einer Version standardmäßig aktiviert ist, wird sie nicht mehr als experimentell angesehen und von dieser Seite entfernt.

Um diese Funktionen zu aktivieren, geben Sie `about:config` in die Firefox-Adressleiste ein, suchen Sie die zugehörige **Präferenz** und ändern Sie ihren Wert, der normalerweise ein Umschalten zwischen `true` und `false` ist.
Abhängig von der Funktion müssen Sie möglicherweise den Browser neu starten, damit die Änderung wirksam wird.
Informieren Sie sich im Supportartikel zum [Firefox-Konfigurationseditor](https://support.mozilla.org/en-US/kb/about-config-editor-firefox) über weitere Informationen zur Verwaltung von Präferenzen in Firefox.

## HTML

### Layout für input type="search"

Das Layout für `input type="search"` wurde aktualisiert. Dadurch hat ein Suchfeld ein Löschsymbol, sobald jemand darin zu tippen beginnt, um andere Browserimplementierungen anzupassen. (Siehe [Firefox Bug 558594](https://bugzil.la/558594) für weitere Details.)

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 81                  | Nein                     |
| Developer Edition | 81                  | Nein                     |
| Beta              | 81                  | Nein                     |
| Release           | 81                  | Nein                     |

- `layout.forms.input-type-search.enabled`
  - : Setzen Sie den Wert auf `true`, um zu aktivieren.

### Umschalten der Passwortanzeige

HTML-Passworteingabeelemente ([`<input type="password">`](/de/docs/Web/HTML/Reference/Elements/input/password)) enthalten ein "Auge"-Symbol, das umgeschaltet werden kann, um das Passworttextfeld anzuzeigen oder zu verbergen ([Firefox Bug 502258](https://bugzil.la/502258)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 96                  | Nein                     |
| Developer Edition | 96                  | Nein                     |
| Beta              | 96                  | Nein                     |
| Release           | 96                  | Nein                     |

- `layout.forms.reveal-password-button.enabled`
  - : Setzen Sie den Wert auf `true`, um zu aktivieren.

### Zeitangabe-Auswahl für datetime-local Eingabefeld

HTML datetime-local Eingabeelemente ([`<input type="datetime-local">`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local)) beinhalten jetzt eine Zeitauswahl ([Firefox Bug 1726108](https://bugzil.la/1726108)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 144                 | Nein                     |
| Developer Edition | 144                 | Nein                     |
| Beta              | 144                 | Nein                     |
| Release           | 144                 | Nein                     |

- `dom.forms.datetime.timepicker`
  - : Setzen Sie den Wert auf `true`, um zu aktivieren.

## CSS

### Hex-Boxen zur Darstellung von Steuerzeichen

Diese Funktion rendert Steuerzeichen (Unicode Kategorie Cc), außer _Tab_ (`U+0009`), _Zeilenvorschub_ (`U+000A`), _Seitenvorschub_ (`U+000C`) und _Wagenrücklauf_ (`U+000D`), als Hex-Box, wenn sie nicht erwartet werden. (Siehe [Firefox Bug 1099557](https://bugzil.la/1099557) für weitere Details.)

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 43                  | Ja                       |
| Developer Edition | 43                  | Nein                     |
| Beta              | 43                  | Nein                     |
| Release           | 43                  | Nein                     |

- `layout.css.control-characters.visible`
  - : Setzen Sie den Wert auf `true`, um zu aktivieren.

### initial-letter Eigenschaft

Die {{cssxref("initial-letter")}} CSS-Eigenschaft ist Teil der [CSS Inline Layout](https://drafts.csswg.org/css-inline/) Spezifikation und ermöglicht es Ihnen, festzulegen, wie initiale großbuchstaben erhoben, abgesenkt oder versenkt angezeigt werden. (Siehe [Firefox Bug 1223880](https://bugzil.la/1223880) für weitere Details.)

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 50                  | Nein                     |
| Developer Edition | 50                  | Nein                     |
| Beta              | 50                  | Nein                     |
| Release           | 50                  | Nein                     |

- `layout.css.initial-letter.enabled`
  - : Setzen Sie den Wert auf `true`, um zu aktivieren.

### fit-content() Funktion

Die {{cssxref("fit-content_function", "fit-content()")}} Funktion in Bezug auf {{cssxref("width")}} und andere Größeneigenschaften. Diese Funktion wird bereits für die CSS Grid Layout Spurgrößenanpassung gut unterstützt. (Siehe [Firefox Bug 1312588](https://bugzil.la/1312588) für weitere Details.)

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 91                  | Nein                     |
| Developer Edition | 91                  | Nein                     |
| Beta              | 91                  | Nein                     |
| Release           | 91                  | Nein                     |

- `layout.css.fit-content-function.enabled`
  - : Setzen Sie den Wert auf `true`, um zu aktivieren.

### Scroll-gesteuerte Animationen

Früher "scroll-verknüpfte Animationen" genannt, hängt eine [scroll-gesteuerte Animation](/de/docs/Web/CSS/Guides/Scroll-driven_animations) von der Scrollposition eines Scrollbalkens ab, anstatt von der Zeit oder einer anderen Dimension.
Die Eigenschaften {{cssxref('scroll-timeline-name')}} und {{cssxref('scroll-timeline-axis')}} (sowie die Kurzschreibweise {{cssxref('scroll-timeline')}}) ermöglichen es Ihnen, festzulegen, dass ein bestimmter Scrollbalken in einem bestimmten benannten Container als Quelle für eine scroll-gesteuerte Animation verwendet werden kann.
Die Scroll-Timeline kann dann mit einer [Animation](/de/docs/Web/CSS/Guides/Animations) durch Festlegen der {{cssxref('animation-timeline')}} Eigenschaft auf den mit `scroll-timeline-name` definierten Namenswert verknüpft werden.

Beim Verwenden der {{cssxref('scroll-timeline')}} Kurzschreibweise muss die Reihenfolge der Eigenschaftswerte {{cssxref('scroll-timeline-name')}} gefolgt von {{cssxref('scroll-timeline-axis')}} sein.
Die Lang- und Kurzschreibweisen sind beide hinter der Präferenz verfügbar.
Alternativ können Sie die {{cssxref("animation-timeline/scroll")}}-Funktionsnotation mit {{cssxref('animation-timeline')}} verwenden, um anzugeben, dass eine Scrollbalkenachse in einem übergeordneten Element für die Timeline verwendet wird.

Für weitere Informationen siehe [Firefox Bug 1807685](https://bugzil.la/1807685), [Firefox Bug 1804573](https://bugzil.la/1804573), [Firefox Bug 1809005](https://bugzil.la/1809005), [Firefox Bug 1676791](https://bugzil.la/1676791), [Firefox Bug 1754897](https://bugzil.la/1754897), [Firefox Bug 1817303](https://bugzil.la/1817303) und [Firefox Bug 1737918](https://bugzil.la/1737918).

Die Eigenschaften {{cssxref('timeline-scope')}}, {{cssxref('animation-range-start')}} und {{cssxref('animation-range-end')}} (sowie die Kurzschreibweise {{cssxref('animation-range')}}) werden noch nicht unterstützt. Für mehr Informationen, siehe [Firefox Bug 1676779](https://bugzil.la/1676779).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 136                 | Ja                       |
| Developer Edition | 110                 | Nein                     |
| Beta              | 110                 | Nein                     |
| Release           | 110                 | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Setzen Sie den Wert auf `true`, um zu aktivieren.

### prefers-reduced-transparency Medienmerkmal

Das CSS {{cssxref("@media/prefers-reduced-transparency")}}-Medienmerkmal ermöglicht es Ihnen zu erkennen, ob ein Benutzer die Einstellung aktiviert hat, um die Anzahl transparenter oder transluzenter Schichteffekte auf ihrem Gerät zu minimieren.
Siehe ([Firefox Bug 1736914](https://bugzil.la/1736914)) für weitere Details.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 113                 | Nein                     |
| Developer Edition | 113                 | Nein                     |
| Beta              | 113                 | Nein                     |
| Release           | 113                 | Nein                     |

- `layout.css.prefers-reduced-transparency.enabled`
  - : Setzen Sie den Wert auf `true`, um zu aktivieren.

### inverted-colors Medienmerkmal

Das CSS {{cssxref("@media/inverted-colors")}}-Medienmerkmal ermöglicht es Ihnen zu erkennen, ob ein Benutzeragent oder das zugrunde liegende Betriebssystem Farben invertiert.
Siehe ([Firefox Bug 1794628](https://bugzil.la/1794628)) für weitere Details.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 114                 | Nein                     |
| Developer Edition | 114                 | Nein                     |
| Beta              | 114                 | Nein                     |
| Release           | 114                 | Nein                     |

- `layout.css.inverted-colors.enabled`
  - : Setzen Sie den Wert auf `true`, um zu aktivieren.

### Benannter view progress timelines Eigenschaft

Die CSS {{cssxref("view-timeline-name")}} Eigenschaft erlaubt es Ihnen, einem bestimmten Element einen Namen zu geben und zu identifizieren, dass dessen übergeordnetes Scrollerelement die Quelle einer sogenannten view progress timeline ist.
Der Name kann dann der `animation-timeline` zugewiesen werden, die daraufhin das zugehörige Element animiert, während es sich durch den sichtbaren Bereich seines übergeordneten Scrollers bewegt.
Siehe ([Firefox Bug 1737920](https://bugzil.la/1737920)) für weitere Details.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 114                 | Nein                     |
| Developer Edition | 114                 | Nein                     |
| Beta              | 114                 | Nein                     |
| Release           | 114                 | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Setzen Sie den Wert auf `true`, um zu aktivieren.

### Anonyme view progress timelines Funktion

Die CSS {{cssxref("animation-timeline/view")}}-Funktion erlaubt es Ihnen zu spezifizieren, dass die `animation-timeline` für ein Element eine view progress timeline ist, die das Element animieren wird, während es sich durch den sichtbaren Bereich seines übergeordneten Scrollers bewegt.
Die Funktion definiert die Achse des übergeordneten Elements, das die Timeline bereitstellt, zusammen mit dem Einzug innerhalb des sichtbaren Bereichs, an dem die Animation beginnt.
Siehe ([Firefox Bug 1808410](https://bugzil.la/1808410)) für weitere Details.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 114                 | Nein                     |
| Developer Edition | 114                 | Nein                     |
| Beta              | 114                 | Nein                     |
| Release           | 114                 | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Setzen Sie den Wert auf `true`, um zu aktivieren.

### Herstellerpräfix transform-Eigenschaften

Die mit `-moz-`-Präfix versehenen [CSS transform](/de/docs/Web/CSS/Guides/Transforms) Eigenschaften können deaktiviert werden, indem die `layout.css.prefixes.transforms` Präferenz auf `false` gesetzt wird. Die Absicht ist, diese zu deaktivieren, sobald die standardmäßigen CSS Zoom-Eigenschaften umfassend unterstützt werden. ([Firefox Bug 1886134](https://bugzil.la/1886134), [Firefox Bug 1855763](https://bugzil.la/1855763)).

Diese Präferenz wird speziell die folgenden präfixierten Eigenschaften deaktivieren:

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
  - : Setzen Sie den Wert auf `true`, um zu aktivieren.

### `shape()` Funktion

Die CSS {{cssxref("basic-shape/shape")}} Funktion ist ein {{cssxref("basic-shape")}} Datentyp, der es Ihnen ermöglicht, eine Form in den Eigenschaften {{cssxref("clip-path")}} und {{cssxref("offset-path")}} unter Verwendung eines oder mehrerer "shape commands" zu definieren. Diese Befehle sind den [SVG Pfadbefehl](/de/docs/Web/SVG/Reference/Attribute/d#path_commands) sehr ähnlich. Die `shape()`-Funktion ist in einiger Hinsicht der {{cssxref("basic-shape/path","path()")}}-Funktion ähnlich, aber im Gegensatz zu `path()`, das die [SVG Pfad](/de/docs/Web/SVG/Reference/Element/path) Syntax verwendet, verwendet `shape()` die standardmäßige CSS-Syntax. Dies ermöglicht es Ihnen, Formen einfach zu erstellen und zu bearbeiten und ermöglicht auch die Verwendung von CSS Mathematikfunktionen.
Weitere Informationen finden Sie unter [Firefox Bug 1823463](https://bugzil.la/1823463) für die Unterstützung der `shape()`-Funktion in `clip-path`, [Firefox Bug 1884424](https://bugzil.la/1884424) für die Unterstützung der Funktion in `offset-path` und [Firefox Bug 1884425](https://bugzil.la/1884425) für die Unterstützung ihrer Interpolation.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 126                 | Ja                       |
| Developer Edition | 126                 | Nein                     |
| Beta              | 126                 | Nein                     |
| Release           | 126                 | Nein                     |

- `layout.css.basic-shape-shape.enabled`
  - : Setzen Sie den Wert auf `true`, um zu aktivieren.

#### Relative Kontrollpunkte in CSS `shape()` Kurvenbefehlen

Sie können [`<relative-control-point>`](/de/docs/Web/CSS/Reference/Values/basic-shape/shape#relative-control-point) Werte verwenden, wenn Sie einen [`<curve-command>`](/de/docs/Web/CSS/Reference/Values/basic-shape/shape#curve-command) oder [`<smooth-command>`](/de/docs/Web/CSS/Reference/Values/basic-shape/shape#smooth-command) in einer CSS `shape()`-Funktion angeben. Diese Werte ermöglichen es Ihnen, Kontrollpunkte anzugeben, die relativ zum Start- oder Endpunkt des aktuellen Befehls oder relativ zum Ursprung (oben links) des Containers, in dem die Form gezeichnet wird, positioniert sind.
([Firefox Bug 1921501](https://bugzil.la/1921501)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 146                 | Ja                       |
| Developer Edition | 146                 | Nein                     |
| Beta              | 146                 | Nein                     |
| Release           | 146                 | Nein                     |

- `layout.css.basic-shape-shape.enabled`
  - : Setzen Sie den Wert auf `true`, um zu aktivieren.

### Symmetrische `letter-spacing`

Die CSS {{cssxref("letter-spacing")}}-Eigenschaft teilt jetzt den angegebenen Buchstabenabstand gleichmäßig auf beiden Seiten jedes Zeichens auf. Dies ist im Gegensatz zu dem aktuellen Verhalten, bei dem der Abstand hauptsächlich zu einer Seite hinzugefügt wird. Dieser Ansatz kann den Textabstand, insbesondere in text mit gemischter Richtung, verbessern.
([Firefox Bug 1891446](https://bugzil.la/1891446)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 128                 | Ja                       |
| Developer Edition | 128                 | Ja                       |
| Beta              | 127                 | Nein                     |
| Release           | 127                 | Nein                     |

- `layout.css.letter-spacing.model`
  - : Setzen Sie den Wert auf `true`, um zu aktivieren.

### `calc()` Farbkanalunterstützung in relativen Farben

Die CSS {{cssxref("calc()")}}-Funktion kann jetzt Farbkanäle in [relativen Farben](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors#using_math_functions) parsen und ermöglicht Ihnen, Änderungen an Farben korrekt in verschiedenen Farbräumen oder während der Verwendung verschiedener Funktionsnotationen zu berechnen [Firefox Bug 1889561](https://bugzil.la/1889561).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 127                 | Ja                       |
| Developer Edition | 127                 | Nein                     |
| Beta              | 127                 | Nein                     |
| Release           | 127                 | Nein                     |

- `layout.css.relative-color-syntax.enabled`
  - : Setzen Sie den Wert auf `true`, um zu aktivieren.

### Erlaube Pseudoelemente nach elementgestützten Pseudoelementen

Es wird daran gearbeitet, [Pseudoelemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) wie {{cssxref("::first-letter")}} und {{cssxref("::before")}} an [elementgestützte Pseudoelemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements#element-backed_pseudo-elements) wie {{cssxref("::details-content")}} und {{cssxref("::file-selector-button")}} anzuhängen.

Dadurch können Benutzer zum Beispiel den ersten Buchstaben des {{htmlElement("details")}} Elements mit dem CSS-Selektor `::details-content::first-letter` stylen oder Inhalt vor einem {{HTMLElement("input") }} des Typs [`type="file"`](/de/docs/Web/HTML/Reference/Elements/input/file) mit dem CSS-Selektor `::file-selector-button::before` hinzufügen.

Derzeit kann nur die Unterstützung für `::details-content::first-letter` mit `@supports(::details-content::first-letter)` geparst werden.
Das `::file-selector-button` Pseudoelement ist noch nicht als elementbasiertes Pseudoelement markiert, sodass es keinen Weg gibt, dies zu testen.
([Firefox Bug 1953557](https://bugzil.la/1953557), [Firefox Bug 1941406](https://bugzil.la/1941406)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 138                 | Nein                     |
| Developer Edition | 138                 | Nein                     |
| Beta              | 138                 | Nein                     |
| Release           | 138                 | Nein                     |

### `:heading` und `:heading()` Pseudo-Klassen

Die {{cssxref(":heading")}} Pseudo-Klasse ermöglicht es Ihnen, alle [Überschriftselemente](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) (`<h1>`-`<h6>`) auf einmal zu stylen, anstatt sie einzeln anzugehen. Die {{cssxref(":heading()")}} Funktional-Pseudo-Klasse ermöglicht es Ihnen, Überschriftselemente zu stylen, die mit einer kommagetrennten Liste von ganzen Zahlen übereinstimmen, die die Ebenen der Überschriften darstellen. ([Firefox Bug 1974386](https://bugzil.la/1974386) & [Firefox Bug 1984310](https://bugzil.la/1984310)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 142                 | Nein                     |
| Developer Edition | 142                 | Nein                     |
| Beta              | 142                 | Nein                     |
| Release           | 142                 | Nein                     |

- `layout.css.heading-selector.enabled`
  - : Setzen Sie den Wert auf `true`, um zu aktivieren.

### `text-decoration-trim`

Die CSS `text-decoration-trim`-Eigenschaft ermöglicht es Ihnen, {{cssxref("text-decoration")}} Anfangs- und End-Offsets festzulegen, um Textdekorationen im Vergleich zum Text zu verkürzen, zu verlängern oder die Position zu verschieben ([Firefox Bug 1979915](https://bugzil.la/1979915)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 145                 | Nein                     |
| Developer Edition | 145                 | Nein                     |
| Beta              | 145                 | Nein                     |
| Release           | 145                 | Nein                     |

- `layout.css.text-decoration-trim.enabled`
  - : Setzen Sie den Wert auf `true`, um zu aktivieren.

### `@custom-media` At-Regel

Die {{cssxref("@custom-media")}} CSS At-Regel definiert Aliase für lange oder komplexe Medienanfragen. Anstatt die gleiche hartcodierte `<media-query-list>` in mehreren `@media` At-Regeln zu wiederholen, kann sie einmal in einer `@custom-media` At-Regel definiert und im gesamten Stylesheet wann immer nötig referenziert werden. ([Firefox Bug 1744292](https://bugzil.la/1744292)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 146                 | Nein                     |
| Developer Edition | 146                 | Nein                     |
| Beta              | 146                 | Nein                     |
| Release           | 146                 | Nein                     |

- `layout.css.custom-media.enabled`
  - : Setzen Sie den Wert auf `true`, um zu aktivieren.

## SVG

**Keine experimentellen Funktionen in diesem Release-Zyklus.**

## JavaScript

**Keine experimentellen Funktionen in diesem Release-Zyklus.**

## APIs

### CloseWatcher-Schnittstelle

Eingebaute Webkomponenten mit "open"- und "close"-Semantik, wie modale Dialoge und Popovers, können mit geräteintegrierten Mechanismen geschlossen werden.
Zum Beispiel können Sie unter Android einen Dialog durch Drücken der Zurück-Taste schließen.
Die [`CloseWatcher`](/de/docs/Web/API/CloseWatcher)-Schnittstelle ermöglicht es Entwicklern, UI-Komponenten, wie benutzerdefinierte Sidebars, zu implementieren, die ebenfalls mit nativen Mechanismen geschlossen werden können.
([Firefox Bug 1888729](https://bugzil.la/1888729)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert?      |
| ----------------- | ------------------- | ----------------------------- |
| Nightly           | 140                 | Ja (Desktop). Nein (Android). |
| Developer Edition | 132                 | Nein                          |
| Beta              | 132                 | Nein                          |
| Release           | 132                 | Nein                          |

- `dom.closewatcher.enabled`
  - : Setzen Sie den Wert auf `true`, um zu aktivieren.

### Trusted Types API

Die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) bietet Mechanismen, um sicherzustellen, dass Funktionen, die potenziell als Vektoren für XSS-Angriffe verwendet werden können, nur mit Daten aufgerufen werden, die validiert oder bereinigt wurden.
Die API ist in frühen Betaversionen aktiviert ([Firefox Bug 1992941](https://bugzil.la/1992941)).

Dies umfasst (nicht erschöpfend):

- Hinzufügung der [`TrustedTypePolicyFactory`](/de/docs/Web/API/TrustedTypePolicyFactory), [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy), [`TrustedHTML`](/de/docs/Web/API/TrustedHTML), [`TrustedScript`](/de/docs/Web/API/TrustedScript), [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)-Schnittstellen und die `trustedTypes` Eigenschaft auf [`Window`](/de/docs/Web/API/Window/trustedTypes) und [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope/trustedTypes).
- Updates zu [Injectionschnittstellen](/de/docs/Web/API/Trusted_Types_API#injection_sink_interfaces), wie [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) und [`document.write()`](/de/docs/Web/API/Document/write), um `TrustedHTML`, `TrustedScript`, `TrustedScriptURL` sowie Strings zuzulassen.
- Unterstützung für die [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) und [`trusted-types`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/trusted-types) Anweisungen und das [`'trusted-types-eval'`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#trusted-types-eval) Schlüsselwort, im {{HTTPHeader("Content-Security-Policy")}} HTTP-Header.
  Diese können verwendet werden, um vertrauenswürdige Typen anstelle von Strings zu erzwingen, die spezifischen Richtlinien zu benennen, die erlaubt sind, und `eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) und ähnliche Funktionen zu ermöglichen, wenn [Trusted Types](/de/docs/Web/API/Trusted_Types_API) unterstützt und durchgesetzt werden.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 145                 | Ja                       |
| Developer Edition | 145                 | Ja                       |
| Beta              | 145                 | Ja                       |
| Release           | 133                 | Nein                     |

- `dom.security.trusted_types.enabled`
  - : Setzen Sie den Wert auf `true`, um zu aktivieren.

### HTML Sanitizer API

Die [HTML Sanitizer API](/de/docs/Web/API/HTML_Sanitizer_API) ermöglicht es Entwicklern, unzuverlässige HTML-Strings zu nehmen und diese zu bereinigen, um sie sicher in das DOM eines Dokuments einzufügen.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 146                 | Ja                       |
| Developer Edition | 147                 | Ja                       |
| Beta              | 147                 | Ja                       |
| Release           | 138                 | Nein                     |

- `dom.security.sanitizer.enabled`
  - : Setzen Sie den Wert auf `true`, um zu aktivieren.

### Entfernung der `beforescriptexecute` und `afterscriptexecute` Ereignisse

Die nicht standardmäßigen Ereignisse [`beforescriptexecute`](/de/docs/Web/API/Document/beforescriptexecute_event) und [`afterscriptexecute`](/de/docs/Web/API/Document/afterscriptexecute_event) im [`Document`](/de/docs/Web/API/Document) Interface und [`afterscriptexecute`](/de/docs/Web/API/Element/afterscriptexecute_event) sowie [`beforescriptexecute`](/de/docs/Web/API/Element/beforescriptexecute_event) im [`Element`](/de/docs/Web/API/Element) Interface stehen zur Entfernung an. Sie wurden in Nightly deaktiviert.
([Firefox Bug 1954685](https://bugzil.la/1954685)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 139                 | Nein                     |
| Developer Edition | 139                 | Ja                       |
| Beta              | 139                 | Ja                       |
| Release           | 139                 | Ja                       |

- `dom.events.script_execute.enable`
  - : Setzen Sie den Wert auf `true`, um zu aktivieren.

### Benachrichtigungsaktionen und maxActions Eigenschaften

Die [`actions`](/de/docs/Web/API/Notification/actions) Schreibgeschützte Eigenschaft und die [`maxActions`](/de/docs/Web/API/Notification/maxActions_static) Statische Schreibgeschützte Eigenschaft der [`Notification`](/de/docs/Web/API/Notification) Schnittstelle werden in Nightly auf dem Desktop unterstützt.
Diese enthalten die Benachrichtigungsaktionen, die mit [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification) festgelegt wurden und die maximale Anzahl von Aktionen, die festgelegt werden können.
([Firefox Bug 1225110](https://bugzil.la/1225110), [Firefox Bug 1963263](https://bugzil.la/1963263)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 138                 | Ja (nur Desktop)         |
| Developer Edition | 138                 | Nein                     |
| Beta              | 138                 | Nein                     |
| Release           | 138                 | Nein                     |

- `dom.webnotifications.actions.enabled`
  - : Setzen Sie den Wert auf `true`, um zu aktivieren.

### Grafik: Canvas, WebGL und WebGPU

#### WebGL: Entwurfserweiterungen

Wenn diese Präferenz aktiviert ist, werden alle WebGL-Erweiterungen, die sich derzeit im "Entwurfsstatus" befinden und getestet werden, für die Nutzung aktiviert. Derzeit werden keine WebGL-Erweiterungen von Firefox getestet.

#### WebGPU API

Die [WebGPU API](/de/docs/Web/API/WebGPU_API) bietet Unterstützung auf niedriger Ebene für die Durchführung von Berechnungen und Grafik-Rendering mit der [Graphics Processing Unit](https://en.wikipedia.org/wiki/Graphics_Processing_Unit) (GPU) des Geräts oder Computers des Benutzers.
Ab Version 142 ist dies unter Windows in allen Kontexte außer Service-Workern aktiviert.
Ab Version 147 ist dies unter macOS auf Apple Silicon in allen Browsing-Kontexten außer Service-Workern aktiviert.
Für andere Plattformen wie Linux und macOS auf Intel Silicon ist es in Nightly aktiviert.
Siehe [Firefox Bug 1602129](https://bugzil.la/1602129) für unsere Fortschritte zu dieser API.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert?                                                  |
| ----------------- | ------------------- | ------------------------------------------------------------------------- |
| Nightly           | 141                 | Ja                                                                        |
| Developer Edition | 141                 | Nein (Ja unter Windows und macOS auf Apple Silicon, außer Service-Worker) |
| Beta              | 141                 | Nein (Ja unter Windows und macOS auf Apple Silicon, außer Service-Worker) |
| Release           | 141                 | Nein (Ja unter Windows und macOS auf Apple Silicon, außer Service-Worker) |

- `dom.webgpu.enabled`
  - : Setzen Sie den Wert auf `true`, um zu aktivieren (in Nightly und unter Windows in allen Versionen aktiviert)
- `dom.webgpu.service-workers.enabled`
  - : Setzen Sie den Wert auf `true`, um zu aktivieren (in Nightly aktiviert)

### Unterstützung der Reporting API für CSP-Verletzungen

Die [Reporting API](/de/docs/Web/API/Reporting_API) unterstützt jetzt das Reporting von [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP)-Verletzungen.

[`Report`](/de/docs/Web/API/Report) Instanzen, die durch die [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) Schnittstelle zurückgegeben werden, können jetzt einen `type` Wert von `"csp-violation"` haben und eine `body` Eigenschaft, die eine Instanz der [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody) enthält.
Dadurch können CSP-Verletzungen innerhalb einer Webseite gemeldet werden.

CSP-Verletzungsberichte können auch an entfernte Endpunkte gesendet werden, die im CSP {{CSP("report-to")}} Directive angegeben sind – Endpunktnamen und entsprechende URLs müssen zuerst im {{httpheader('Reporting-Endpoints')}} oder {{httpheader('Report-To')}} HTTP-Antwortheadern definiert werden.
Der Bericht ist eine Serialisierung des [`Report`](/de/docs/Web/API/Report)-Objekts, das oben beschrieben wurde, mit einer `body` Eigenschaft, die eine Serialisierung einer [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody) Instanz ist.

Dieser Verletzungsbericht ersetzt einen ähnlichen, CSP-spezifischen Mechanismus zum Senden von Verletzungsberichten, der die CSP {{CSP("report-uri")}} Direktive verwendet, um die URL des Berichtsendpunkts festzulegen und das [CSP-spezifische JSON-Verletzungsberichtformat](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/report-uri#violation_report_syntax).
([Firefox Bug 1391243](https://bugzil.la/1391243)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 130                 | Nein                     |
| Developer Edition | 130                 | Nein                     |
| Beta              | 130                 | Nein                     |
| Release           | 130                 | Nein                     |

- `dom.reporting.enabled`
  - : Setzen Sie den Wert auf `true`, um zu aktivieren.

### WebRTC und Medien

Die folgenden experimentellen Funktionen beinhalten jene, die in der [WebRTC API](/de/docs/Web/API/WebRTC_API), der [Web Audio API](/de/docs/Web/API/Web_Audio_API), der [Media Source Extensions API](/de/docs/Web/API/Media_Source_Extensions_API), der [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API) und der [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) zu finden sind.

#### Asynchrone SourceBuffer hinzufügt und entfernt

Dies fügt die auf Versprechen basierenden Methoden [`appendBufferAsync()`](/de/docs/Web/API/SourceBuffer/appendBufferAsync) und [`removeAsync()`](/de/docs/Web/API/SourceBuffer/removeAsync) zum Hinzufügen und Entfernen von Medienelementpuffern zur [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)-Schnittstelle hinzu. Siehe [Firefox Bug 1280613](https://bugzil.la/1280613) und [Firefox Bug 778617](https://bugzil.la/778617) für weitere Informationen.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 62                  | Nein                     |
| Developer Edition | 62                  | Nein                     |
| Beta              | 62                  | Nein                     |
| Release           | 62                  | Nein                     |

- `media.mediasource.experimental.enabled`
  - : Setzen Sie den Wert auf `true`, um zu aktivieren.

#### AVIF Konformitätsstrenge

Die Präferenz `image.avif.compliance_strictness` kann verwendet werden, um die _Strenge_ zu steuern, die beim Verarbeiten von [AVIF](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) Bildern angewendet wird.
Dies ermöglicht Firefox-Nutzern, Bilder anzuzeigen, die auf einigen anderen Browsern gerendert werden, selbst wenn sie nicht streng konform sind.

| Release-Kanal     | Version hinzugefügt | Standardwert |
| ----------------- | ------------------- | ------------ |
| Nightly           | 92                  | 1            |
| Developer Edition | 92                  | 1            |
| Beta              | 92                  | 1            |
| Release           | 92                  | 1            |

- `image.avif.compliance_strictness`
  - : Numerischer Wert, der ein _Strengheitsniveau_ anzeigt. Zulässige Werte sind:
    - `0`: Permissiv. Akzeptiere Bilder mit Spezifikationsverletzungen in sowohl Empfehlungen ("sollte"-Sprache) als auch Anforderungen ("muss"-Sprache), sofern sie sicher oder eindeutig interpretiert werden können.
    - `1` **(Standard)**: Gemischt. Lehne Verletzungen von Anforderungen ("muss") ab, erlaube jedoch Verletzungen von Empfehlungen ("sollte").
    - `2`: Streng. Lehne alle Verletzungen spezifizierter Anforderungen oder Empfehlungen ab.

#### Unterstützung für JPEG XL

Firefox unterstützt [JPEG XL](https://jpeg.org/jpegxl/)-Bilder, wenn diese Funktion aktiviert ist.
Siehe [Firefox Bug 1539075](https://bugzil.la/1539075) für weitere Details.

Beachten Sie, dass, wie unten gezeigt, die Funktion nur in Nightly-Builds verfügbar ist (unabhängig davon, ob die Präferenz gesetzt ist).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 90                  | Nein                     |
| Developer Edition | —                   | —                        |
| Beta              | —                   | —                        |
| Release           | —                   | —                        |

- `image.jxl.enabled`
  - : Setzen Sie den Wert auf `true`, um zu aktivieren.

### WebVR API

#### WebVR API (Deaktiviert)

Die veraltete [WebVR API](/de/docs/Web/API/WebVR_API) wird aufgrund des geplanten Entfernens deaktiviert.
Sie ist in allen Builds standardmäßig deaktiviert [Firefox Bug 1750902](https://bugzil.la/1750902).

| Release-Kanal     | Version entfernt | Standardmäßig aktiviert? |
| ----------------- | ---------------- | ------------------------ |
| Nightly           | 98               | Nein                     |
| Developer Edition | 98               | Nein                     |
| Beta              | 98               | Nein                     |
| Release           | 98               | Nein                     |

- `dom.vr.enabled`
  - : Setzen Sie den Wert auf `true`, um zu aktivieren.

#### HTMLMediaElement Eigenschaften: audioTracks und videoTracks

Das Aktivieren dieser Funktion fügt allen HTML-Medienelementen die [`HTMLMediaElement.audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks) und [`HTMLMediaElement.videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks) Eigenschaften hinzu. Da Firefox jedoch derzeit keine Unterstützung für mehrere Audio- und Videotracks bietet, funktionieren die häufigsten Anwendungsfälle für diese Eigenschaften nicht, sodass sie standardmäßig deaktiviert sind. Siehe [Firefox Bug 1057233](https://bugzil.la/1057233) für weitere Details.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 33                  | Nein                     |
| Developer Edition | 33                  | Nein                     |
| Beta              | 33                  | Nein                     |
| Release           | 33                  | Nein                     |

- `media.track.enabled`
  - : Setzen Sie den Wert auf `true`, um zu aktivieren.

#### GeometryUtils Methoden: convertPointFromNode(), convertRectFromNode() und convertQuadFromNode()

Die `GeometryUtils`-Methoden `convertPointFromNode()`, `convertRectFromNode()` und `convertQuadFromNode()` Mappen den angegebenen Punkt, das Rechteck oder die vierfache Struktur vom [`Node`](/de/docs/Web/API/Node), auf dem sie aufgerufen werden, auf einen anderen Knoten. (Siehe [Firefox Bug 918189](https://bugzil.la/918189) für weitere Details.)

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 31                  | Ja                       |
| Developer Edition | 31                  | Nein                     |
| Beta              | 31                  | Nein                     |
| Release           | 31                  | Nein                     |

- `layout.css.convertFromNode.enable`
  - : Setzen Sie den Wert auf `true`, um zu aktivieren.

#### GeometryUtils Methode: getBoxQuads()

Die `GeometryUtils`-Methode `getBoxQuads()` gibt die CSS-Boxen für einen [`Node`](/de/docs/Web/API/Node) relativ zu einem anderen Node oder Viewport zurück. (Siehe [Firefox Bug 917755](https://bugzil.la/917755) für weitere Details.)

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 31                  | Ja                       |
| Developer Edition | 31                  | Nein                     |
| Beta              | 31                  | Nein                     |
| Release           | 31                  | Nein                     |

- `layout.css.getBoxQuads.enabled`
  - : Setzen Sie den Wert auf `true`, um zu aktivieren.

### Payment Request API

#### Primäres Zahlungsmanagement

Die [Payment Request API](/de/docs/Web/API/Payment_Request_API) bietet Unterstützung für das Management webbasierter Zahlungen innerhalb von Webinhalten oder Apps. Aufgrund eines Bugs, der während der Tests der Benutzeroberfläche aufgetreten ist, haben wir beschlossen, den Versand dieser API zu verschieben, während Diskussionen über potenzielle Änderungen an der API stattfinden. Die Arbeit daran läuft noch. (Siehe [Firefox Bug 1318984](https://bugzil.la/1318984) für weitere Details.)

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 55                  | Nein                     |
| Developer Edition | 55                  | Nein                     |
| Beta              | 55                  | Nein                     |
| Release           | 55                  | Nein                     |

- `dom.payments.request.enabled`
  - : Setzen Sie den Wert auf `true`, um zu aktivieren.
- `dom.payments.request.supportedRegions`
  - : Ländercodes als kommagetrennte Allowlist der Regionen (z.B. `US,CA`).

### WebShare API

Die [Web Share API](/de/docs/Web/API/Web_Share_API) erlaubt das Teilen von Dateien, URLs und anderen Daten von einer Website aus.
Diese Funktion ist auf Android in allen Builds aktiviert, aber hinter einer Präferenz auf dem Desktop (es sei denn, unten anders angegeben).

| Release-Kanal     | Version geändert | Standardmäßig aktiviert?                    |
| ----------------- | ---------------- | ------------------------------------------- |
| Nightly           | 71               | Nein (Standard). Ja (Windows ab Version 92) |
| Developer Edition | 71               | Nein                                        |
| Beta              | 71               | Nein                                        |
| Release           | 71               | Nein (Desktop). Ja (Android).               |

- `dom.webshare.enabled`
  - : Setzen Sie den Wert auf `true`, um zu aktivieren.

### Screen Orientation API

#### ScreenOrientation.lock()

Die Methode [`ScreenOrientation.lock()`](/de/docs/Web/API/ScreenOrientation/lock) ermöglicht es, dass ein Gerät in einer bestimmten Ausrichtung gesperrt wird, wenn dies vom Gerät unterstützt und durch die Browser-Prä-Lock-Anforderungen erlaubt ist.
Normalerweise ist das Sperren der Ausrichtung nur auf mobilen Geräten erlaubt, wenn das Dokument im Vollbildmodus angezeigt wird.
Für weitere Details siehe [Firefox Bug 1697647](https://bugzil.la/1697647).

| Release-Kanal     | Version geändert | Standardmäßig aktiviert? |
| ----------------- | ---------------- | ------------------------ |
| Nightly           | 111              | Ja                       |
| Developer Edition | 97               | Nein                     |
| Beta              | 97               | Nein                     |
| Release           | 97               | Nein                     |

- `dom.screenorientation.allow-lock`
  - : Setzen Sie den Wert auf `true`, um zu aktivieren.

### Benachrichtigungs-API

Benachrichtigungen haben die Eigenschaft [`requireInteraction`](/de/docs/Web/API/Notification/requireInteraction) standardmäßig auf Windows-Systemen und in der Nightly-Version als wahr gesetzt ([Firefox Bug 1794475](https://bugzil.la/1794475)).

| Release-Kanal     | Version geändert | Standardmäßig aktiviert? |
| ----------------- | ---------------- | ------------------------ |
| Nightly           | 117              | Ja                       |
| Developer Edition | 117              | Nein                     |
| Beta              | 117              | Nein                     |
| Release           | 117              | Nur Windows              |

- `dom.webnotifications.requireinteraction.enabled`
  - : Setzen Sie den Wert auf `true`, um zu aktivieren.

## Sicherheit und Datenschutz

### Kennzeichnung unsicherer Seiten

Die beiden `security.insecure_connection_text_*` Präferenzen fügen einen "Nicht sicher"-Text neben dem traditionellen Schloss-Symbol in der Adressleiste hinzu, wenn eine Seite unsicher geladen wird (d.h. unter Verwendung von {{Glossary("HTTP", "HTTP")}} anstelle von {{Glossary("HTTPS", "HTTPS")}}). Die Präferenz `browser.urlbar.trimHttps` kürzt das `https:` Präfix von URLs in der Adressleiste. Siehe [Firefox Bug 1853418](https://bugzil.la/1853418) für weitere Details.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 121                 | Ja                       |
| Developer Edition | 60                  | Nein                     |
| Beta              | 60                  | Nein                     |
| Release           | 60                  | Nein                     |

- `security.insecure_connection_text.enabled`
  - : Setzen Sie den Wert auf `true`, um das Textlabel für den normalen Browsingmodus zu aktivieren.
- `security.insecure_connection_text.pbmode.enabled`
  - : Setzen Sie den Wert auf `true`, um das Textlabel für den privaten Browsingmodus zu aktivieren.
- `browser.urlbar.trimHttps`
  - : Setzen Sie den Wert auf `true`, um das `https:`-Präfix von URLs in der Adressleiste zu kürzen.

### Einschränkung von Inhalten für Erwachsene mit `<meta name="rating">`

Das nicht standardmäßige [`<meta name="rating">`](/de/docs/Web/HTML/Reference/Elements/meta)-Element kann auf einer Webseite enthalten sein, um den Inhalt der Seite als eingeschränkt/erwachsen auszuweisen. Zum Zeitpunkt der Erstellung dieses Dokuments gibt es zwei mögliche `content` Werte, `adult` ([von Google definiert](https://developers.google.com/search/docs/specialty/explicit/guidelines#add-metadata)) und `RTA-5042-1996-1400-1577-RTA` ([von ASACP definiert](https://www.rtalabel.org/?content=howto#top)), die denselben Effekt haben (es können in Zukunft mehr Optionen hinzugefügt werden).

Die folgenden `<meta>`-Elemente sind äquivalent:

```html
<meta name="rating" content="adult" />
<meta name="rating" content="RTA-5042-1996-1400-1577-RTA" />
```

Browser, die dieses Element erkennen, können dann Maßnahmen ergreifen, um Benutzer daran zu hindern, den Inhalt zu sehen. Die Implementierung von Firefox ersetzt die Seite durch den Inhalt unter `about:restricted`, der dem Benutzer erklärt, dass er versucht, eingeschränkten Inhalt anzuzeigen, erklärt, warum er den Inhalt nicht sehen kann, und ihm einen Zurück-Button gibt, um von dort zurückzukehren, woher er kam.

Siehe [Firefox Bug 1991135](https://bugzil.la/1991135) für weitere Details.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 146                 | Nein                     |
| Developer Edition | 146                 | Nein                     |
| Beta              | 146                 | Nein                     |
| Release           | 146                 | Nein                     |

- `security.restrict_to_adults.always`
  - : Setzen Sie den Wert auf `true`, um den Zugang zu Webseiten zu beschränken, die sich als erwachsen ausweisen, indem ein `<meta name="rating">` Element enthalten ist.
- `security.restrict_to_adults.respect_platform`
  - : Setzen Sie den Wert auf `true`, um den Zugang zu Webseiten zu beschränken, die sich als erwachsen ausweisen, indem ein `<meta name="rating">` Element enthalten ist, nur wenn geeignete Kindersicherungseinstellungen im zugrunde liegenden Betriebssystem festgelegt sind (z.B. sind die macOS _Content & Privacy_-Einstellungen so eingestellt, dass explizite Webinhalte einschränken).

### Berechtigungspolitik / Funktionspolitik

[Berechtigungspolitik](/de/docs/Web/HTTP/Guides/Permissions_Policy) ermöglicht es Webentwicklern, bestimmte Funktionen und APIs im Browser selektiv zu aktivieren, zu deaktivieren und ihr Verhalten zu ändern. Es ist ähnlich wie CSP, steuert jedoch Funktionen anstelle von Sicherheitsverhalten.
Dies wird in Firefox als **Funktionspolitik** implementiert, der Name, der in einer früheren Version der Spezifikation verwendet wurde.

Beachten Sie, dass unterstützte Richtlinien durch das [`allow`](/de/docs/Web/HTML/Reference/Elements/iframe#allow) Attribut auf `<iframe>` Elementen gesetzt werden können, auch wenn die Benutzereinstellung nicht gesetzt ist.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 65                  | Nein                     |
| Developer Edition | 65                  | Nein                     |
| Beta              | 65                  | Nein                     |
| Release           | 65                  | Nein                     |

- `dom.security.featurePolicy.header.enabled`
  - : Setzen Sie den Wert auf `true`, um zu aktivieren.

### Datenschutzbewahrende Attribution API (PPA)

[PPA API](https://support.mozilla.org/en-US/kb/privacy-preserving-attribution) bietet eine Alternative zum Benutzer-Tracking für Werbeattribution mithilfe des neuen `navigator.privateAttribution` Objekts mit den Methoden `saveImpression()` und `measureConversion()`. Lesen Sie mehr über PPA [im originalen Erklärer](https://github.com/mozilla/explainers/tree/main/archive/ppa-experiment) und die [vorgeschlagene Spezifikation](https://w3c.github.io/ppa/). Dieses Experiment kann für Websites über [Ursprungstest](https://wiki.mozilla.org/Origin_Trials) oder im Browser durch Setzen der Präferenz auf `1` aktiviert werden. ([Firefox Bug 1900929](https://bugzil.la/1900929)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 128                 | Nein                     |
| Developer Edition | 128                 | Nein                     |
| Beta              | 128                 | Nein                     |
| Release           | 128                 | Nein                     |

- `dom.origin-trials.private-attribution.state`
  - : Setzen Sie den Wert auf `true`, um zu aktivieren.

## HTTP

### Integritätspolitik für Stylesheet-Ressourcen

Die {{httpheader("Integrity-Policy")}} und {{httpheader("Integrity-Policy-Report-Only")}} HTTP-Header werden jetzt für Stilressourcen unterstützt. Diese erlauben es Websites, entweder [Subresource-Integritätsgarantien](/de/docs/Web/Security/Defenses/Subresource_Integrity) für Stile zu erzwingen oder nur Verstöße gegen die Richtlinie zu melden.
Beachten Sie, dass Firefox Meldungsendpunkte ignoriert und Verstöße in der Entwicklerkonsole protokolliert.
Wenn `Integrity-Policy` verwendet wird, blockiert der Browser das Laden von Stilen, auf die in einem {{HTMLElement("link")}} Element mit [`rel="stylesheet"`](/de/docs/Web/HTML/Reference/Attributes/rel#stylesheet) verwiesen wird, das entweder die [`integrity`](/de/docs/Web/HTML/Reference/Elements/script#integrity) Eigenschaft nicht aufweist oder einen Integritätshash hat, der nicht mit der Ressource auf dem Server übereinstimmt.
([Firefox Bug 1976656](https://bugzil.la/1976656)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 142                 | Nein                     |
| Developer Edition | 142                 | Nein                     |
| Beta              | 142                 | Nein                     |
| Release           | 142                 | Nein                     |

- `security.integrity_policy.stylesheet.enabled`
  - : Setzen Sie den Wert auf `true`, um zu aktivieren.

### Speicherzugriffs-Header

Die {{httpheader("Sec-Fetch-Storage-Access")}} und {{httpheader("Activate-Storage-Access")}} HTTP-Header werden jetzt unterstützt und ermöglichen einen effizienteren [Storage Access API](/de/docs/Web/API/Storage_Access_API) Workflow. ([Firefox Bug 1991688](https://bugzil.la/1991688)).

Im nur JavaScript-Workflow muss eine Drittanbieterressource angefordert und geladen werden, um eine Speicherzugriffsberechtigung für einen bestimmten Kontext (wie ein neuer Browser-Tab) zu aktivieren. Dies ist erforderlich, auch wenn die Berechtigung bereits erteilt wurde.
Die Speicherzugriffs-Header ermöglichen es dem Browser, den Berechtigungsstatus für den bestimmten Kontext zu bewerben, sodass der Server die Aktivierung einer bereits erteilten Berechtigung anfordern kann.
Dies vermeidet den Overhead eines unnötigen Abrufs und Ladens der Ressource.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 145                 | Ja                       |
| Developer Edition | 145                 | Nein                     |
| Beta              | 145                 | Nein                     |
| Release           | 145                 | Nein                     |

- `dom.storage_access.headers.enabled`
  - : Setzen Sie den Wert auf `true`, um zu aktivieren.

### Idempotency-Key

Der {{httpheader("Idempotency-Key")}} HTTP-Anforderungs-Header kann von Website-Client-Codes verwendet werden, um eine {{HTTPMethod("POST")}} oder {{HTTPMethod("PATCH")}} Anfragen {{Glossary("idempotent", "idempotent")}} zu machen, wenn sie mit einem unterstützenden Server verwendet wird.
Die Spezifikation gibt an, dass der Server dokumentieren und bewerben sollte, welche Endpunkte diesen Header erfordern, das Format des Schlüssels und erwartete Fehlerantworten.

Firefox fügt den Header _automatisch_ mit einem einzigartigen Schlüssel für jede neue `POST`-Anfrage hinzu, wenn er nicht bereits clientseitig vom Seitenclient-Code hinzugefügt wurde.
Dies vereinfacht den clientseitigen Code, der erforderlich ist, um mit Servern zu arbeiten, die diese Funktion unterstützen.

([Firefox Bug 1830022](https://bugzil.la/1830022)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 135                 | Nein                     |
| Developer Edition | 135                 | Nein                     |
| Beta              | 135                 | Nein                     |
| Release           | 135                 | Nein                     |

- `network.http.idempotencyKey.enabled`
  - : Setzen Sie den Wert auf `true`, um zu aktivieren.

### Accept-Header mit MIME-Typ image/jxl

Der HTTP [`Accept`](/de/docs/Web/HTTP/Reference/Headers/Accept) Header in [Standardanforderungen und Bildanforderungen](/de/docs/Web/HTTP/Guides/Content_negotiation/List_of_default_Accept_values) kann über eine Präferenz konfiguriert werden, um Unterstützung für den `image/jxl` MIME-Typ anzuzeigen.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 128                 | Nein                     |
| Developer Edition | 128                 | Nein                     |
| Beta              | 128                 | Nein                     |
| Release           | 128                 | Nein                     |

- `image.jxl.enabled`
  - : Setzen Sie den Wert auf `true`, um zu aktivieren.

### SameSite=Lax standardmäßig

[`SameSite` Cookies](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) haben standardmäßig den Wert `Lax`.
Mit dieser Einstellung werden Cookies nur gesendet, wenn ein Benutzer zur Ursprungswebsite navigiert, nicht für Quersite-Anfragen zum Laden von Bildern oder Frames in eine Drittanbieterwebsite und so weiter.
Weitere Details finden Sie unter [Firefox Bug 1617609](https://bugzil.la/1617609).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 69                  | Nein                     |
| Developer Edition | 69                  | Nein                     |
| Beta              | 69                  | Nein                     |
| Release           | 69                  | Nein                     |

- `network.cookie.sameSite.laxByDefault`
  - : Setzen Sie den Wert auf `true`, um zu aktivieren.

### Access-Control-Allow-Headers-Wildcard deckt nicht Authorization ab

Der [`Access-Control-Allow-Headers`](/de/docs/Web/HTTP/Reference/Headers/Access-Control-Allow-Headers) ist eine Antwort auf eine {{Glossary("Preflight_request", "CORS-Vorab-Anfrage")}}, die angibt, welche Anforderungsheader in der endgültigen Anfrage enthalten sein dürfen.
Die Antwortanweisung kann ein Wildcard (`*`) enthalten, was bedeutet, dass die endgültige Anfrage alle Header außer dem `Authorization` Header enthalten darf.

Standardmäßig schließt Firefox den `Authorization` Header in die endgültige Anfrage ein, nachdem eine Antwort mit `Access-Control-Allow-Headers: *` erhalten wurde.
Setzen Sie die Präferenz auf `false`, um sicherzustellen, dass Firefox den `Authorization` Header nicht einbezieht.
Weitere Details finden Sie unter [Firefox Bug 1687364](https://bugzil.la/1687364).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 115                 | Ja                       |
| Developer Edition | 115                 | Ja                       |
| Beta              | 115                 | Ja                       |
| Release           | 115                 | Ja                       |

- `network.cors_preflight.authorization_covered_by_wildcard`
  - : Setzen Sie den Wert auf `true`, um zu aktivieren.

## Entwicklertools

Die Entwickler-Tools von Mozilla entwickeln sich ständig weiter. Wir experimentieren mit neuen Ideen, fügen neue Funktionen hinzu und testen sie auf den Nightly- und Developer-Edition-Kanälen, bevor sie in die Beta- und Release-Version gelangen. Die unten aufgeführten Funktionen sind die aktuellen experimentellen Entwickler-Tool-Funktionen.

**Keine experimentellen Funktionen in diesem Release-Zyklus.**

## Siehe auch

- [Entwicklerhinweise zu Firefox-Releases](/de/docs/Mozilla/Firefox/Releases)
- [Firefox Nightly](https://www.firefox.com/en-US/channel/desktop/)
- [Firefox Developer Edition](https://www.firefox.com/en-US/channel/desktop/developer/)
