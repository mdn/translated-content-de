---
title: Experimentelle Funktionen in Firefox
short-title: Experimentelle Funktionen
slug: Mozilla/Firefox/Experimental_features
l10n:
  sourceCommit: ef6382e13a22a75a397affa3e1ab2cbb7d814bba
---

Diese Seite listet experimentelle und teilweise implementierte Funktionen von Firefox auf, einschließlich sich entwickelnder oder vorgeschlagener Web-Plattform-Standards. Jeder Eintrag unten enthält Informationen über die Builds, in denen eine Funktion enthalten ist (Nightly, Beta, Developer Edition oder Release), ob sie standardmäßig aktiviert ist oder nicht, und den Namen der **Präferenz**, die Sie verwenden können, um die Funktion zu aktivieren oder zu konfigurieren. Die Beschreibung jeder Funktion enthält auch Links zu relevanten [Bugzilla-Bugs](https://bugzilla.mozilla.org), die die Funktion implementieren oder aktivieren. Diese Informationen ermöglichen es Ihnen, experimentelle Funktionen auszuprobieren und Feedback zu geben, bevor sie offiziell veröffentlicht werden.

In Bezug auf den Lebenszyklus erscheinen neue Funktionen normalerweise zuerst in [Nightly](https://www.firefox.com/en-US/channel/desktop/#nightly), wo sie oft standardmäßig für frühes Feedback und Tests aktiviert sind. Wenn keine größeren Probleme gefunden werden, werden sie in [Beta](https://www.firefox.com/en-US/channel/desktop/#beta) und [Developer Edition](https://www.firefox.com/en-US/channel/desktop/developer/) Pre-Release-Builds aufgenommen. Schließlich werden genehmigte Funktionen im stabilen [Release](https://www.firefox.com/en-US/) Kanal ausgeliefert. Wenn eine Funktion in einem Release standardmäßig aktiviert ist, wird sie nicht mehr als experimentell angesehen und von dieser Seite entfernt.

Um diese Funktionen zu aktivieren, geben Sie `about:config` in die Firefox-Adressleiste ein, suchen Sie nach der zugehörigen **Präferenz** und ändern Sie ihren Wert, der normalerweise ein Umschalten zwischen `true` und `false` ist. Abhängig von der Funktion müssen Sie möglicherweise den Browser neu starten, damit die Änderung wirksam wird. Lesen Sie den [Firefox-Konfigurations-Editor](https://support.mozilla.org/en-US/kb/about-config-editor-firefox) Support-Artikel für weitere Informationen über die Verwaltung von Präferenzen in Firefox.

## HTML

### Layout für input type="search"

Das Layout für `input type="search"` wurde aktualisiert. Dies führt dazu, dass ein Suchfeld ein Lösch-Symbol hat, sobald jemand darin zu tippen beginnt, um andere Browser-Implementierungen zu entsprechen. (Siehe [Firefox-Bug 558594](https://bugzil.la/558594) für weitere Details.)

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 81                   | Nein                     |
| Developer Edition      | 81                   | Nein                     |
| Beta                   | 81                   | Nein                     |
| Release                | 81                   | Nein                     |

- `layout.forms.input-type-search.enabled`
  - : Setzen Sie diese auf `true`, um sie zu aktivieren.

### Passwortanzeige umschalten

HTML-Passwort-Eingabeelemente ([`<input type="password">`](/de/docs/Web/HTML/Reference/Elements/input/password)) enthalten ein "Augen"-Symbol, das umgeschaltet werden kann, um den Passwort-Text anzuzeigen oder zu verbergen ([Firefox-Bug 502258](https://bugzil.la/502258)).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 96                   | Nein                     |
| Developer Edition      | 96                   | Nein                     |
| Beta                   | 96                   | Nein                     |
| Release                | 96                   | Nein                     |

- `layout.forms.reveal-password-button.enabled`
  - : Setzen Sie diese auf `true`, um sie zu aktivieren.

### Zeitwähler in `datetime-local` und `time` Eingabeelementen

Die HTML-Elemente [`<input type="datetime-local">`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local) und [`<input type="time">`](/de/docs/Web/HTML/Reference/Elements/input/time) unterstützen einen Zeitwähler. ([Firefox-Bug 1726108](https://bugzil.la/1726108)).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 144                  | Nein                     |
| Developer Edition      | 144                  | Nein                     |
| Beta                   | 144                  | Nein                     |
| Release                | 144                  | Nein                     |

- `dom.forms.datetime.timepicker`
  - : Setzen Sie diese auf `true`, um sie zu aktivieren.

## CSS

### Hex-Boxen zur Anzeige von überzähligen Steuerzeichen

Diese Funktion rendert Steuerzeichen (Unicode-Kategorie Cc) außer _Tab_ (`U+0009`), _Zeilenumbruch_ (`U+000A`), _Form Feed_ (`U+000C`) und _Wagenrücklauf_ (`U+000D`) als Hex-Box, wenn sie nicht erwartet werden. (Siehe [Firefox-Bug 1099557](https://bugzil.la/1099557) für weitere Details.)

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 43                   | Ja                       |
| Developer Edition      | 43                   | Nein                     |
| Beta                   | 43                   | Nein                     |
| Release                | 43                   | Nein                     |

- `layout.css.control-characters.visible`
  - : Setzen Sie diese auf `true`, um sie zu aktivieren.

### Eigenschaft initial-letter

Die {{cssxref("initial-letter")}} CSS-Eigenschaft ist Teil der [CSS Inline Layout](https://drafts.csswg.org/css-inline/) Spezifikation und ermöglicht es Ihnen, anzugeben, wie herabgesetzte, gehobene und versenkte Anfangsbuchstaben angezeigt werden. (Siehe [Firefox-Bug 1223880](https://bugzil.la/1223880) für weitere Details.)

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 50                   | Nein                     |
| Developer Edition      | 50                   | Nein                     |
| Beta                   | 50                   | Nein                     |
| Release                | 50                   | Nein                     |

- `layout.css.initial-letter.enabled`
  - : Setzen Sie diese auf `true`, um sie zu aktivieren.

### Funktion fit-content()

Die {{cssxref("fit-content()")}} Funktion, wie sie auf {{cssxref("width")}} und andere Größenangaben angewendet wird. Diese Funktion wird bereits gut für die CSS-Gitter-Layout-Spurengrößen unterstützt. (Siehe [Firefox-Bug 1312588](https://bugzil.la/1312588) für weitere Details.)

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 91                   | Nein                     |
| Developer Edition      | 91                   | Nein                     |
| Beta                   | 91                   | Nein                     |
| Release                | 91                   | Nein                     |

- `layout.css.fit-content-function.enabled`
  - : Setzen Sie diese auf `true`, um sie zu aktivieren.

### Scroll-gesteuerte Animationen

Früher als "scroll-verknüpfte Animationen" bezeichnet, hängt eine [scroll-gesteuerte Animation](/de/docs/Web/CSS/Guides/Scroll-driven_animations) vom Scroll-Position eines Scrollbalkens ab, anstatt von Zeit oder einer anderen Dimension.
Die {{cssxref('scroll-timeline-name')}} und {{cssxref('scroll-timeline-axis')}} Eigenschaften (und die {{cssxref('scroll-timeline')}} Kurzschrifteigenschaft) ermöglichen es Ihnen, anzugeben, dass ein bestimmter Scrollbalken in einem benannten Container als Quelle für eine scroll-gesteuerte Animation verwendet werden kann.
Der Scroll-Zeitstrahl kann dann mit einer [Animation](/de/docs/Web/CSS/Guides/Animations) durch Setzen der {{cssxref('animation-timeline')}} Eigenschaft auf den Namen, der mit `scroll-timeline-name` definiert wurde, verbunden werden.

Bei der Verwendung der {{cssxref('scroll-timeline')}} Kurzschrifteigenschaft muss die Reihenfolge der Eigenschaftswerte {{cssxref('scroll-timeline-name')}} gefolgt von {{cssxref('scroll-timeline-axis')}} sein.
Die Langhand- und Kurzschrifteigenschaften sind beide hinter der Präferenz verfügbar.
Alternativ können Sie die {{cssxref("animation-timeline/scroll")}} funktionale Notation mit {{cssxref('animation-timeline')}} verwenden, um anzugeben, dass eine Achse des Scrollbalkens in einem Vorfahrenelement für den Zeitstrahl verwendet wird.

Weitere Informationen finden Sie in den [Firefox-Bugs 1807685](https://bugzil.la/1807685), [1804573](https://bugzil.la/1804573), [1809005](https://bugzil.la/1809005), [1676791](https://bugzil.la/1676791), [1754897](https://bugzil.la/1754897), [1817303](https://bugzil.la/1817303) und [1737918](https://bugzil.la/1737918).

Die {{cssxref('timeline-scope')}}, {{cssxref('animation-range-start')}} und {{cssxref('animation-range-end')}} Eigenschaften (und die {{cssxref('animation-range')}} Kurzschrifteigenschaft) werden noch nicht unterstützt. Für weitere Informationen siehe [Firefox-Bug 1676779](https://bugzil.la/1676779).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 136                  | Ja                       |
| Developer Edition      | 110                  | Nein                     |
| Beta                   | 110                  | Nein                     |
| Release                | 110                  | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Setzen Sie diese auf `true`, um sie zu aktivieren.

### Medieneigenschaft prefers-reduced-transparency

Die CSS {{cssxref("@media/prefers-reduced-transparency")}} Medieneigenschaft ermöglicht es Ihnen zu erfassen, ob ein Benutzer die Einstellung aktiviert hat, um die Menge der transparenten oder durchscheinenden Schichteffekte auf ihrem Gerät zu minimieren.
Siehe ([Firefox-Bug 1736914](https://bugzil.la/1736914)) für weitere Details.

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 113                  | Nein                     |
| Developer Edition      | 113                  | Nein                     |
| Beta                   | 113                  | Nein                     |
| Release                | 113                  | Nein                     |

- `layout.css.prefers-reduced-transparency.enabled`
  - : Setzen Sie diese auf `true`, um sie zu aktivieren.

### Medieneigenschaft inverted-colors

Die CSS {{cssxref("@media/inverted-colors")}} Medieneigenschaft lässt Sie erkennen, ob ein Benutzeragent oder das zugrunde liegende Betriebssystem Farben invertiert.
Siehe ([Firefox-Bug 1794628](https://bugzil.la/1794628)) für weitere Details.

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 114                  | Nein                     |
| Developer Edition      | 114                  | Nein                     |
| Beta                   | 114                  | Nein                     |
| Release                | 114                  | Nein                     |

- `layout.css.inverted-colors.enabled`
  - : Setzen Sie diese auf `true`, um sie zu aktivieren.

### Eigenschaft Named view progress timelines

Die CSS {{cssxref("view-timeline-name")}} Eigenschaft ermöglicht es Ihnen, einem bestimmten Element einen Namen zu geben und so anzuzeigen, dass sein Vorfahr-Scroller-Element die Quelle eines View-Progress-Zeitstrahls ist.
Der Name kann dann dem `animation-timeline` zugewiesen werden, das dann das zugeordnete Element animiert, während es sich durch den sichtbaren Bereich seines Vorfahr-Scrollers bewegt.
Siehe ([Firefox-Bug 1737920](https://bugzil.la/1737920)) für weitere Details.

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 114                  | Nein                     |
| Developer Edition      | 114                  | Nein                     |
| Beta                   | 114                  | Nein                     |
| Release                | 114                  | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Setzen Sie diese auf `true`, um sie zu aktivieren.

### Funktion Anonymous view progress timelines

Die CSS {{cssxref("animation-timeline/view")}} Funktion ermöglicht es Ihnen anzugeben, dass die `animation-timeline` für ein Element ein View-Progress-Zeitstrahl ist, der das Element animiert, während es sich durch den sichtbaren Bereich seines Vorfahr-Scrollers bewegt.
Die Funktion definiert die Achse des Elternelements, das den Zeitstrahl liefert, zusammen mit dem Inset innerhalb des sichtbaren Bereichs, an dem die Animation beginnt und endet.
Siehe ([Firefox-Bug 1808410](https://bugzil.la/1808410)) für weitere Details.

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 114                  | Nein                     |
| Developer Edition      | 114                  | Nein                     |
| Beta                   | 114                  | Nein                     |
| Release                | 114                  | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Setzen Sie diese auf `true`, um sie zu aktivieren.

### Vorrangige transform-Eigenschaften mit -moz- Präfix

Die mit `-moz-` präfixierten [CSS transform](/de/docs/Web/CSS/Guides/Transforms) Eigenschaften können deaktiviert werden, indem die Präferenz `layout.css.prefixes.transforms` auf `false` gesetzt wird. Die Absicht ist, diese zu deaktivieren, sobald die standardmäßigen CSS-Zoom-Eigenschaften gut unterstützt werden. ([Firefox-Bug 1886134](https://bugzil.la/1886134), [Firefox-Bug 1855763](https://bugzil.la/1855763)).

Insbesondere werden diese Präferenz die folgenden präfixierten Eigenschaften deaktivieren:

- `-moz-backface-visibility`
- `-moz-perspective`
- `-moz-perspective-origin`
- `-moz-transform`
- `-moz-transform-origin`
- `-moz-transform-style`

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 120                  | Ja                       |
| Developer Edition      | 120                  | Ja                       |
| Beta                   | 120                  | Ja                       |
| Release                | 120                  | Ja                       |

- `layout.css.prefixes.transforms`
  - : Setzen Sie diese auf `true`, um sie zu aktivieren.

### `shape()` Funktion

Die CSS {{cssxref("basic-shape/shape")}} Funktion ist ein {{cssxref("basic-shape")}} Datentyp, der es Ihnen ermöglicht, eine Form in den {{cssxref("clip-path")}} und {{cssxref("offset-path")}} Eigenschaften unter Verwendung eines oder mehrerer "Formbefehle" zu definieren. Diese Befehle sind den [SVG-Pfadbefehlen](/de/docs/Web/SVG/Reference/Attribute/d#path_commands) sehr ähnlich. Die `shape()` Funktion ist in gewisser Hinsicht der {{cssxref("basic-shape/path","path()")}} Funktion ähnlich, unterscheidet sich jedoch durch die Verwendung der [SVG-Pfad](/de/docs/Web/SVG/Reference/Element/path) Syntax, während `shape()` die standardmäßige CSS-Syntax verwendet. Dies ermöglicht Ihnen, Formen einfach zu erstellen und zu bearbeiten und auch die Nutzung von CSS-Mathematikfunktionen zuzulassen.
Für weitere Details siehe [Firefox-Bug 1823463](https://bugzil.la/1823463) für die Unterstützung der `shape()` Funktion in `clip-path`, [Firefox-Bug 1884424](https://bugzil.la/1884424) für die Unterstützung der Funktion in `offset-path` und [Firefox-Bug 1884425](https://bugzil.la/1884425) für die Unterstützung der Interpolation.

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 126                  | Ja                       |
| Developer Edition      | 126                  | Nein                     |
| Beta                   | 126                  | Nein                     |
| Release                | 126                  | Nein                     |

- `layout.css.basic-shape-shape.enabled`
  - : Setzen Sie diese auf `true`, um sie zu aktivieren.

#### Relative Steuerveniere in CSS `shape()` Kurvenbefehlen

Sie können [`<relative-control-point>`](/de/docs/Web/CSS/Reference/Values/basic-shape/shape#relative-control-point) Werte verwenden, wenn Sie einen [`<curve-command>`](/de/docs/Web/CSS/Reference/Values/basic-shape/shape#curve-command) oder [`<smooth-command>`](/de/docs/Web/CSS/Reference/Values/basic-shape/shape#smooth-command) in einer CSS `shape()` Funktion spezifizieren. Diese Werte ermöglichen es Ihnen, Kontrollpunkte anzugeben, die relativ zum Start- oder Endpunkt des aktuellen Befehls oder relativ zum Ursprung (oben links) des Containers positioniert sind, in dem die Form gezeichnet wird.
([Firefox-Bug 1921501](https://bugzil.la/1921501)).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 146                  | Ja                       |
| Developer Edition      | 146                  | Nein                     |
| Beta                   | 146                  | Nein                     |
| Release                | 146                  | Nein                     |

- `layout.css.basic-shape-shape.enabled`
  - : Setzen Sie diese auf `true`, um sie zu aktivieren.

### Symmetrische `letter-spacing`

Die CSS {{cssxref("letter-spacing")}} Eigenschaft teilt nun den spezifizierten Buchstabenabstand gleichmäßig auf beide Seiten jedes Zeichens auf. Dies unterscheidet sich vom aktuellen Verhalten, bei dem der Abstand hauptsächlich auf einer Seite hinzugefügt wird. Dieser Ansatz kann den Textabstand verbessern, insbesondere bei gemischter Richtung.
([Firefox-Bug 1891446](https://bugzil.la/1891446)).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 128                  | Ja                       |
| Developer Edition      | 128                  | Ja                       |
| Beta                   | 127                  | Nein                     |
| Release                | 127                  | Nein                     |

- `layout.css.letter-spacing.model`
  - : Setzen Sie diese auf `true`, um sie zu aktivieren.

### `calc()` Unterstützung der Farbkanäle in relativen Farben

Die CSS {{cssxref("calc()")}} Funktion kann jetzt Farbkanäle in [relativen Farben](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors#using_math_functions) parsen, sodass Sie Änderungen an Farben in verschiedenen Farbräumen oder unter Verwendung unterschiedlicher funktionaler Notationen korrekt berechnen können [Firefox-Bug 1889561](https://bugzil.la/1889561).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 127                  | Ja                       |
| Developer Edition      | 127                  | Nein                     |
| Beta                   | 127                  | Nein                     |
| Release                | 127                  | Nein                     |

- `layout.css.relative-color-syntax.enabled`
  - : Setzen Sie diese auf `true`, um sie zu aktivieren.

### Erlauben Sie Pseudoelemente nach elementgestützten Pseudoelementen

Es wurde damit begonnen, es zu ermöglichen, dass [Pseudoelemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) wie {{cssxref("::first-letter")}} und {{cssxref("::before")}} an [elementgestützte Pseudoelemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements#element-backed_pseudo-elements) wie {{cssxref("::details-content")}} und {{cssxref("::file-selector-button")}} angehängt werden können.

Dies ermöglicht es Benutzern, z. B. den ersten Buchstaben des {{htmlElement("details")}} Elements zu stylen, indem sie den CSS-Selektor `::details-content::first-letter` verwenden oder Inhalt vor einem {{HTMLElement("input") }} mit [`type="file"`](/de/docs/Web/HTML/Reference/Elements/input/file) hinzufügen, indem sie den CSS-Selektor `::file-selector-button::before` verwenden.

Derzeit kann nur die Unterstützung für `::details-content::first-letter` mit `@supports(::details-content::first-letter)` geparst werden.
Das `::file-selector-button` Pseudoelement ist noch nicht als elementgestütztes Pseudoelement markiert, daher gibt es keine Möglichkeit, dies zu testen.
([Firefox-Bug 1953557](https://bugzil.la/1953557), [Firefox-Bug 1941406](https://bugzil.la/1941406)).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 138                  | Nein                     |
| Developer Edition      | 138                  | Nein                     |
| Beta                   | 138                  | Nein                     |
| Release                | 138                  | Nein                     |

### Pseudoklassen `:heading` und `:heading()`

Die {{cssxref(":heading")}} Pseudoklasse ermöglicht es Ihnen, alle [Überschriftselemente](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) (`<h1>`-`<h6>`) auf einmal zu stylen, anstatt sie einzeln anzusprechen. Die funktionale Pseudoklasse {{cssxref(":heading()")}} ermöglicht es Ihnen, Überschriftselemente zu stylen, die mit einer kommagetrennten Liste von Ganzzahlen übereinstimmen, die den Überschriftenebenen entsprechen. ([Firefox-Bug 1974386](https://bugzil.la/1974386) & [Firefox-Bug 1984310](https://bugzil.la/1984310)).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 142                  | Nein                     |
| Developer Edition      | 142                  | Nein                     |
| Beta                   | 142                  | Nein                     |
| Release                | 142                  | Nein                     |

- `layout.css.heading-selector.enabled`
  - : Setzen Sie diese auf `true`, um sie zu aktivieren.

### `text-decoration-trim`

Die CSS `text-decoration-trim` Eigenschaft ermöglicht es Ihnen, {{cssxref("text-decoration")}} Start- und Endoffsets anzugeben, um die Textdekorationen zu verkürzen, zu verlängern oder die Position in Bezug auf den Text zu verschieben ([Firefox-Bug 1979915](https://bugzil.la/1979915)).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 145                  | Nein                     |
| Developer Edition      | 145                  | Nein                     |
| Beta                   | 145                  | Nein                     |
| Release                | 145                  | Nein                     |

- `layout.css.text-decoration-trim.enabled`
  - : Setzen Sie diese auf `true`, um sie zu aktivieren.

### `@custom-media` At-Regel

Die {{cssxref("@custom-media")}} CSS-At-Regel definiert Aliase für lange oder komplexe Media-Queries. Anstatt die gleichen fest codierten `<media-query-list>` in mehreren `@media` At-Regeln zu wiederholen, können sie einmal in einer `@custom-media` At-Regel definiert und im Stylesheet jederzeit referenziert werden. ([Firefox-Bug 1744292](https://bugzil.la/1744292)).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 146                  | Nein                     |
| Developer Edition      | 146                  | Nein                     |
| Beta                   | 146                  | Nein                     |
| Release                | 146                  | Nein                     |

- `layout.css.custom-media.enabled`
  - : Setzen Sie diese auf `true`, um sie zu aktivieren.

## SVG

**Keine experimentellen Funktionen in diesem Release-Zyklus.**

## JavaScript

**Keine experimentellen Funktionen in diesem Release-Zyklus.**

## APIs

### CloseWatcher-Schnittstelle

Integrierte Webkomponenten mit "open" und "close" Semantik, wie modale Dialoge und Popovers, können mit geräte-nativen Mechanismen geschlossen werden. Beispielsweise können Sie auf Android einen Dialog mit der Zurück-Taste schließen. Die [`CloseWatcher`](/de/docs/Web/API/CloseWatcher) Schnittstelle ermöglicht es Entwicklern, UI-Komponenten, wie benutzerdefinierte Seitenleisten, zu implementieren, die ebenfalls mit nativen Mechanismen geschlossen werden können. ([Firefox-Bug 1888729](https://bugzil.la/1888729)).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert?      |
| ---------------------- | -------------------- | ----------------------------- |
| Nightly                | 140                  | Ja (Desktop). Nein (Android). |
| Developer Edition      | 132                  | Nein                          |
| Beta                   | 132                  | Nein                          |
| Release                | 132                  | Nein                          |

- `dom.closewatcher.enabled`
  - : Setzen Sie diese auf `true`, um sie zu aktivieren.

### Trusted Types API

Die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) bietet Mechanismen, um sicherzustellen, dass Funktionen, die potenziell als Vektoren für XSS-Angriffe verwendet werden können, nur mit Daten aufgerufen werden, die validiert oder bereinigt wurden. Die API ist in frühen Beta-Versionen aktiviert ([Firefox-Bug 1992941](https://bugzil.la/1992941)).

Dies umfasst (nicht vollständig):

- Die Hinzufügung der [`TrustedTypePolicyFactory`](/de/docs/Web/API/TrustedTypePolicyFactory), [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy), [`TrustedHTML`](/de/docs/Web/API/TrustedHTML), [`TrustedScript`](/de/docs/Web/API/TrustedScript), [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL) Schnittstellen und der `trustedTypes` Eigenschaft in [`Window`](/de/docs/Web/API/Window/trustedTypes) und [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope/trustedTypes).
- Updates zu [Einschubinterschnittstellen](/de/docs/Web/API/Trusted_Types_API#injection_sink_interfaces), wie [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) und [`document.write()`](/de/docs/Web/API/Document/write), um `TrustedHTML`, `TrustedScript`, `TrustedScriptURL` zuzulassen, sowie Strings.
- Unterstützung für die [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) und [`trusted-types`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/trusted-types) Direktiven sowie das [`'trusted-types-eval'`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#trusted-types-eval) Schlüsselwort des {{HTTPHeader("Content-Security-Policy")}} HTTP-Headers.
  Diese können verwendet werden, um vertrauenswürdige Typen anstelle von Strings durchzusetzen, die spezifischen erlaubten Richtlinien zu benennen und die Verwendung von [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) und ähnlichen Funktionen zu ermöglichen, wenn [Trusted Types](/de/docs/Web/API/Trusted_Types_API) unterstützt und durchgesetzt werden.

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 145                  | Ja                       |
| Developer Edition      | 145                  | Ja                       |
| Beta                   | 145                  | Ja                       |
| Release                | 133                  | Nein                     |

- `dom.security.trusted_types.enabled`
  - : Setzen Sie diese auf `true`, um sie zu aktivieren.

### HTML Sanitizer API

Die [HTML Sanitizer API](/de/docs/Web/API/HTML_Sanitizer_API) ermöglicht es Entwicklern, unzuverlässige HTML-Strings zu bereinigen, um sie sicher in das DOM eines Dokuments einzufügen.

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 146                  | Ja                       |
| Developer Edition      | 147                  | Ja                       |
| Beta                   | 147                  | Ja                       |
| Release                | 138                  | Nein                     |

- `dom.security.sanitizer.enabled`
  - : Setzen Sie diese auf `true`, um sie zu aktivieren.

### Entfernung der `beforescriptexecute` und `afterscriptexecute` Ereignisse

Die nicht standardmäßigen Ereignisse [`beforescriptexecute`](/de/docs/Web/API/Document/beforescriptexecute_event) und [`afterscriptexecute`](/de/docs/Web/API/Document/afterscriptexecute_event) im [`Document`](/de/docs/Web/API/Document) Interface sowie [`afterscriptexecute`](/de/docs/Web/API/Element/afterscriptexecute_event) und [`beforescriptexecute`](/de/docs/Web/API/Element/beforescriptexecute_event) im [`Element`](/de/docs/Web/API/Element) Interface stehen zur Entfernung an. Sie wurden in Nightly deaktiviert.
([Firefox-Bug 1954685](https://bugzil.la/1954685)).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 139                  | Nein                     |
| Developer Edition      | 139                  | Ja                       |
| Beta                   | 139                  | Ja                       |
| Release                | 139                  | Ja                       |

- `dom.events.script_execute.enable`
  - : Setzen Sie diese auf `true`, um sie zu aktivieren.

### Benachrichtigungsaktionen und maxActions Eigenschaften

Die [`actions`](/de/docs/Web/API/Notification/actions) schreibgeschützte Eigenschaft und die [`maxActions`](/de/docs/Web/API/Notification/maxActions_static) statische schreibgeschützte Eigenschaft des [`Notification`](/de/docs/Web/API/Notification) Interfaces werden in Nightly auf dem Desktop unterstützt.
Diese enthalten die Mitteilungsaktionen, die mit [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification) gesetzt wurden, und die maximale Anzahl von Aktionen, die festgelegt werden können, jeweils.
([Firefox-Bug 1225110](https://bugzil.la/1225110), [Firefox-Bug 1963263](https://bugzil.la/1963263)).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 138                  | Ja (nur für Desktop)     |
| Developer Edition      | 138                  | Nein                     |
| Beta                   | 138                  | Nein                     |
| Release                | 138                  | Nein                     |

- `dom.webnotifications.actions.enabled`
  - : Setzen Sie diese auf `true`, um sie zu aktivieren.

### Grafik: Canvas, WebGL und WebGPU

#### WebGL: Entwurfserweiterungen

Wenn diese Präferenz aktiviert ist, werden alle derzeit in "Entwurf"-Status befindlichen WebGL-Erweiterungen, die getestet werden, für die Verwendung aktiviert. Derzeit werden keine WebGL-Erweiterungen von Firefox getestet.

#### WebGPU API

Die [WebGPU API](/de/docs/Web/API/WebGPU_API) bietet Low-Level-Unterstützung für die Durchführung von Berechnungen und Grafik-Rendering mithilfe der [Graphics Processing Unit](https://en.wikipedia.org/wiki/Graphics_Processing_Unit) (GPU) des Geräts oder Computers des Benutzers.
Ab Version 142 ist dies in allen Kontexten außer in Service-Workern unter Windows aktiviert.
Ab Version 147 ist dies auf macOS auf Apple Silicon in allen Browserkontexten außer Service-Workern aktiviert.
Für andere Plattformen wie Linux und macOS auf Intel Silicon ist es in Nightly aktiviert.
Siehe [Firefox-Bug 1602129](https://bugzil.la/1602129) für unseren Fortschritt bei dieser API.

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert?                                                               |
| ---------------------- | -------------------- | -------------------------------------------------------------------------------------- |
| Nightly                | 141                  | Ja                                                                                     |
| Developer Edition      | 141                  | Nein (Ja auf Windows und macOS auf Apple-Silicon, nicht einschließlich Service-Worker) |
| Beta                   | 141                  | Nein (Ja auf Windows und macOS auf Apple-Silicon, nicht einschließlich Service-Worker) |
| Release                | 141                  | Nein (Ja auf Windows und macOS auf Apple-Silicon, nicht einschließlich Service-Worker) |

- `dom.webgpu.enabled`
  - : Setzen Sie diese auf `true`, um sie zu aktivieren (in Nightly und auf Windows in allen Versionen aktiviert)
- `dom.webgpu.service-workers.enabled`
  - : Setzen Sie diese auf `true`, um sie zu aktivieren (in Nightly aktiviert)

### Bericht-API-Unterstützung für CSP-Verstöße

Die [Reporting API](/de/docs/Web/API/Reporting_API) hat nun Unterstützung für die Berichterstattung über [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) Verstöße.

[`Report`](/de/docs/Web/API/Report) Instanzen, die durch das [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) Interface zurückgegeben werden, können nun einen `type` Wert von `"csp-violation"` und eine `body` Eigenschaft enthalten, die eine Instanz des [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody) Interfaces enthält.
Dies ermöglicht es, CSP-Verstöße innerhalb einer Webseite zu melden.

CSP-Verstoßberichte können auch an entfernte Endpunkte gesendet werden, die im CSP {{CSP("report-to")}} Directive genannt sind – Endpunktnamen und entsprechende URLs müssen zuerst im {{httpheader('Reporting-Endpoints')}} oder {{httpheader('Report-To')}} HTTP-Antwortkopf definiert werden.
Der Bericht ist eine Serialisierung des oben beschriebenen [`Report`](/de/docs/Web/API/Report) Objekts, mit einer `body` Eigenschaft, die eine Serialisierung einer [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody) Instanz ist.

Dieser Verstoßbericht ersetzt einen ähnlichen CSP-spezifischen Mechanismus zur Übermittlung von Verstoßberichten, der die CSP {{CSP("report-uri")}} Direktive verwendet, um die URL des Meldungsendpunkts festzulegen, und ein [CSP-spezifisches JSON Verstoßberichtformat](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/report-uri#violation_report_syntax) hat.
([Firefox-Bug 1391243](https://bugzil.la/1391243)).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 130                  | Nein                     |
| Developer Edition      | 130                  | Nein                     |
| Beta                   | 130                  | Nein                     |
| Release                | 130                  | Nein                     |

- `dom.reporting.enabled`
  - : Setzen Sie diese auf `true`, um sie zu aktivieren.

### WebRTC und Medien

Die folgenden experimentellen Funktionen umfassen jene in Media-APIs wie der [WebRTC API](/de/docs/Web/API/WebRTC_API), der [Web Audio API](/de/docs/Web/API/Web_Audio_API), der [Media Source Extensions API](/de/docs/Web/API/Media_Source_Extensions_API), der [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API) und der [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API).

#### HTMLMediaElement Eigenschaften: audioTracks und videoTracks

Wenn diese Funktion aktiviert ist, werden die Eigenschaften [`HTMLMediaElement.audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks) und [`HTMLMediaElement.videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks) zu allen HTML-Medienelementen hinzugefügt. Da Firefox jedoch derzeit keine Unterstützung für mehrere Audio- und Videospuren bietet, funktionieren die häufigsten Anwendungsfälle dieser Eigenschaften nicht, weshalb sie beide standardmäßig deaktiviert sind. Siehe [Firefox-Bug 1057233](https://bugzil.la/1057233) für weitere Details.

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 33                   | Nein                     |
| Developer Edition      | 33                   | Nein                     |
| Beta                   | 33                   | Nein                     |
| Release                | 33                   | Nein                     |

- `media.track.enabled`
  - : Setzen Sie diese auf `true`, um sie zu aktivieren.

#### Asynchrones Hinzufügen und Entfernen von SourceBuffer

Dies fügt den promise-basierten Methoden [`appendBufferAsync()`](/de/docs/Web/API/SourceBuffer/appendBufferAsync) und [`removeAsync()`](/de/docs/Web/API/SourceBuffer/removeAsync) zum Hinzufügen und Entfernen von Mediensourcedaten den [`SourceBuffer`](/de/docs/Web/API/SourceBuffer) Interface hinzu. Weitere Informationen finden Sie in den [Firefox-Bugs 1280613](https://bugzil.la/1280613) und [778617](https://bugzil.la/778617).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 62                   | Nein                     |
| Developer Edition      | 62                   | Nein                     |
| Beta                   | 62                   | Nein                     |
| Release                | 62                   | Nein                     |

- `media.mediasource.experimental.enabled`
  - : Setzen Sie diese auf `true`, um sie zu aktivieren.

#### AVIF-Konformität Striktheit

Die Präferenz `image.avif.compliance_strictness` kann verwendet werden, um die _Strenge_ zu steuern, die beim Verarbeiten von [AVIF](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) Bildern angewendet wird. Dies ermöglicht Firefox-Benutzern, Bilder anzuzeigen, die in einigen anderen Browsern gerendert werden, auch wenn sie nicht streng konform sind.

| Veröffentlichungskanal | Hinzugefügte Version | Standardwert |
| ---------------------- | -------------------- | ------------ |
| Nightly                | 92                   | 1            |
| Developer Edition      | 92                   | 1            |
| Beta                   | 92                   | 1            |
| Release                | 92                   | 1            |

- `image.avif.compliance_strictness`
  - : Numerischer Wert, der ein _Striktheits_ Grad angibt. Erlaubte Werte sind:
    - `0`: Nachsichtig. Akzeptiert Bilder mit Verstößen gegen beide Empfehlung (sollte Sprache) und Anforderungen (muss Sprache), vorausgesetzt, sie können sicher oder eindeutig interpretiert werden.
    - `1` **(Standard)**: Gemischt. Verweigert Verletzungen von Anforderungen (muss), erlaubt jedoch Verletzungen von Empfehlungen (sollten).
    - `2`: Streng. Verweigert alle Verletzungen von festgelegten Anforderungen oder Empfehlungen.

#### JPEG XL Unterstützung

Firefox unterstützt [JPEG XL](https://jpeg.org/jpegxl/) Bilder, wenn diese Funktion aktiviert ist. Siehe [Firefox-Bug 1539075](https://bugzil.la/1539075) für weitere Details.

Beachten Sie, dass die Funktion wie unten gezeigt nur in Nightly-Builds verfügbar ist (unabhängig davon, ob die Präferenz gesetzt ist).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 90                   | Nein                     |
| Developer Edition      | —                    | —                        |
| Beta                   | —                    | —                        |
| Release                | —                    | —                        |

- `image.jxl.enabled`
  - : Setzen Sie diese auf `true`, um sie zu aktivieren.

#### Dokument-Bild-in-Bild-API

Die [Document Picture-in-Picture API](/de/docs/Web/API/Document_Picture-in-Picture_API) ermöglicht es, ein immer im Vordergrund befindliches Fenster zu öffnen, das mit beliebigem HTML-Inhalt gefüllt werden kann, wie z.B. ein Video mit benutzerdefinierten Steuerelementen oder einer Reihe von Streams, die die Teilnehmer eines Videokonferenzanrufs anzeigen. Siehe [Firefox-Bug 1858562](https://bugzil.la/1858562) für weitere Details.

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 148                  | Ja                       |
| Developer Edition      | 148                  | Nein                     |
| Beta                   | 148                  | Nein                     |
| Release                | 148                  | Nein                     |

- `dom.documentpip.enabled`
  - : Setzen Sie diese auf `true`, um sie zu aktivieren.

### WebVR API (Deaktiviert)

Die veraltete [WebVR API](/de/docs/Web/API/WebVR_API) steht zur Entfernung an. Sie ist standardmäßig in allen Builds deaktiviert [Firefox-Bug 1750902](https://bugzil.la/1750902).

| Veröffentlichungskanal | Entfernte Version | Standardmäßig aktiviert? |
| ---------------------- | ----------------- | ------------------------ |
| Nightly                | 98                | Nein                     |
| Developer Edition      | 98                | Nein                     |
| Beta                   | 98                | Nein                     |
| Release                | 98                | Nein                     |

- `dom.vr.enabled`
  - : Setzen Sie diese auf `true`, um sie zu aktivieren.

### GeometryUtils Methoden: convertPointFromNode(), convertRectFromNode(), und convertQuadFromNode()

Die `GeometryUtils` Methoden `convertPointFromNode()`, `convertRectFromNode()`, und `convertQuadFromNode()` mappt den gegebenen Punkt, das Rechteck oder das Vierfach von dem [`Node`](/de/docs/Web/API/Node), auf dem sie aufgerufen werden, zu einem anderen Knoten. (Siehe [Firefox-Bug 918189](https://bugzil.la/918189) für weitere Details.)

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 31                   | Ja                       |
| Developer Edition      | 31                   | Nein                     |
| Beta                   | 31                   | Nein                     |
| Release                | 31                   | Nein                     |

- `layout.css.convertFromNode.enable`
  - : Setzen Sie diese auf `true`, um sie zu aktivieren.

### GeometryUtils Methode: getBoxQuads()

Die `GeometryUtils` Methode `getBoxQuads()` gibt die CSS-Boxen für einen [`Node`](/de/docs/Web/API/Node) relativ zu einem anderen Knoten oder Ansichtsbereich zurück. (Siehe [Firefox-Bug 917755](https://bugzil.la/917755) für weitere Details.)

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 31                   | Ja                       |
| Developer Edition      | 31                   | Nein                     |
| Beta                   | 31                   | Nein                     |
| Release                | 31                   | Nein                     |

- `layout.css.getBoxQuads.enabled`
  - : Setzen Sie diese auf `true`, um sie zu aktivieren.

### Zahlungsanforderungs-API

#### Primäre Zahlungsabwicklung

Die [Payment Request API](/de/docs/Web/API/Payment_Request_API) bietet Unterstützung für die Abwicklung webbasierter Zahlungen innerhalb von Webinhalten oder Apps. Aufgrund eines Bugs, der während des Testens der Benutzeroberfläche auftrat, haben wir beschlossen, den Versand dieser API zu verschieben, während Diskussionen über mögliche Änderungen der API geführt werden. Die Arbeit wird fortgesetzt. (Siehe [Firefox-Bug 1318984](https://bugzil.la/1318984) für weitere Details.)

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 55                   | Nein                     |
| Developer Edition      | 55                   | Nein                     |
| Beta                   | 55                   | Nein                     |
| Release                | 55                   | Nein                     |

- `dom.payments.request.enabled`
  - : Setzen Sie diese auf `true`, um sie zu aktivieren.
- `dom.payments.request.supportedRegions`
  - : Ländercodes als kommagetrennte Whitelist von Regionen (z.B. `US,CA`).

### WebShare API

Die [Web Share API](/de/docs/Web/API/Web_Share_API) ermöglicht das Teilen von Dateien, URLs und anderen Daten von einer Website.
Diese Funktion ist auf Android in allen Builds aktiviert, aber auf dem Desktop hinter einer Präferenz (sofern unten nicht anders angegeben).

| Veröffentlichungskanal | Geänderte Version | Standardmäßig aktiviert?                    |
| ---------------------- | ----------------- | ------------------------------------------- |
| Nightly                | 71                | Nein (Standard). Ja (Windows ab Version 92) |
| Developer Edition      | 71                | Nein                                        |
| Beta                   | 71                | Nein                                        |
| Release                | 71                | Nein (Desktop). Ja (Android).               |

- `dom.webshare.enabled`
  - : Setzen Sie diese auf `true`, um sie zu aktivieren.

### Bildschirmorientierungs-API

#### ScreenOrientation.lock()

Die Methode [`ScreenOrientation.lock()`](/de/docs/Web/API/ScreenOrientation/lock) ermöglicht es, ein Gerät auf eine bestimmte Ausrichtung zu sperren, wenn dies vom Gerät unterstützt wird und die browserseitigen Vor-Sperrung-Anforderungen erfüllt sind. Typischerweise ist das Sperren der Ausrichtung nur auf Mobilgeräten erlaubt, wenn das Dokument vollbild angezeigt wird. Siehe [Firefox-Bug 1697647](https://bugzil.la/1697647) für weitere Details.

| Veröffentlichungskanal | Geänderte Version | Standardmäßig aktiviert? |
| ---------------------- | ----------------- | ------------------------ |
| Nightly                | 111               | Ja                       |
| Developer Edition      | 97                | Nein                     |
| Beta                   | 97                | Nein                     |
| Release                | 97                | Nein                     |

- `dom.screenorientation.allow-lock`
  - : Setzen Sie diese auf `true`, um sie zu aktivieren.

### Benachrichtigungs-API

Benachrichtigungen haben die [`requireInteraction`](/de/docs/Web/API/Notification/requireInteraction) Eigenschaft, die standardmäßig in Windows-Systemen und in der Nightly-Version auf true gesetzt ist ([Firefox-Bug 1794475](https://bugzil.la/1794475)).

| Veröffentlichungskanal | Geänderte Version | Standardmäßig aktiviert? |
| ---------------------- | ----------------- | ------------------------ |
| Nightly                | 117               | Ja                       |
| Developer Edition      | 117               | Nein                     |
| Beta                   | 117               | Nein                     |
| Release                | 117               | Nur Windows              |

- `dom.webnotifications.requireinteraction.enabled`
  - : Setzen Sie diese auf `true`, um sie zu aktivieren.

## Sicherheit und Datenschutz

### Unsichere Seitenkennzeichnung

Die beiden Präferenzen `security.insecure_connection_text_*` fügen ein "Nicht sicher" Textlabel in der Adressleiste neben dem traditionellen Schlosssymbol hinzu, wenn eine Seite unsicher geladen wird (das heißt, unter Verwendung von {{Glossary("HTTP", "HTTP")}} anstelle von {{Glossary("HTTPS", "HTTPS")}}). Die Präferenz `browser.urlbar.trimHttps` kürzt das `https:` Präfix von Adressleisten-URLs. Siehe [Firefox-Bug 1853418](https://bugzil.la/1853418) für weitere Details.

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 121                  | Ja                       |
| Developer Edition      | 60                   | Nein                     |
| Beta                   | 60                   | Nein                     |
| Release                | 60                   | Nein                     |

- `security.insecure_connection_text.enabled`
  - : Setzen Sie diese auf `true`, um das Textlabel für den normalen Browsing-Modus zu aktivieren.
- `security.insecure_connection_text.pbmode.enabled`
  - : Setzen Sie diese auf `true`, um das Textlabel für den privaten Browsing-Modus zu aktivieren.
- `browser.urlbar.trimHttps`
  - : Setzen Sie diese auf `true`, um das `https:` Präfix von Adressleisten-URLs zu kürzen.

### Einschränkung von Inhalten für Erwachsene mit `<meta name="rating">`

Das nicht standardmäßige [`<meta name="rating">`](/de/docs/Web/HTML/Reference/Elements/meta) Element kann auf einer Webseite enthalten sein, um den Inhalt der Seite als beschränkt/erwachsen zu kennzeichnen. Zum Zeitpunkt des Schreibens gibt es zwei mögliche `content` Werte, `adult` ([definiert von Google](https://developers.google.com/search/docs/specialty/explicit/guidelines#add-metadata)) und `RTA-5042-1996-1400-1577-RTA` ([definiert von ASACP](https://www.rtalabel.org/?content=howto#top)), die die gleiche Wirkung haben (es können in Zukunft weitere Optionen hinzugefügt werden).

Die folgenden `<meta>` Elemente sind gleichwertig:

```html
<meta name="rating" content="adult" />
<meta name="rating" content="RTA-5042-1996-1400-1577-RTA" />
```

Browser, die dieses Element erkennen, können dann Schritte unternehmen, um Benutzer daran zu hindern, den Inhalt anzuzeigen. Die Implementierung von Firefox ersetzt die Seite durch den Inhalt, der sich in `about:restricted` befindet, was dem Benutzer erklärt, dass er versucht, eingeschränkte Inhalte anzuzeigen, erklärt, warum er diese nicht anzeigen kann, und gibt ihm eine Zurück-Schaltfläche, um von dort zurückzukehren, wo er herkam.

Siehe [Firefox-Bug 1991135](https://bugzil.la/1991135) für weitere Details.

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 146                  | Nein                     |
| Developer Edition      | 146                  | Nein                     |
| Beta                   | 146                  | Nein                     |
| Release                | 146                  | Nein                     |

- `security.restrict_to_adults.always`
  - : Setzen Sie diese auf `true`, um den Zugriff auf Webseiten zu beschränken, die sich selbst als erwachsen identifizieren, indem sie ein `<meta name="rating">` Element enthalten.
- `security.restrict_to_adults.respect_platform`
  - : Setzen Sie diese auf `true`, um den Zugriff auf Webseiten zu beschränken, die sich selbst als erwachsen identifizieren, indem sie ein `<meta name="rating">` Element enthalten, nur wenn geeignete Kindersicherungen auf dem zugrunde liegenden Betriebssystem eingestellt sind (zum Beispiel wenn die macOS _Inhalt & Privatsphäre_ Einstellungen auf Einschränkung expliziter Webinhalte eingestellt sind).

### Berechtigungspolitik / Funktionsrichtlinie

Die [Berechtigungspolitik](/de/docs/Web/HTTP/Guides/Permissions_Policy) ermöglicht es Webentwicklern, die Nutzung bestimmter Funktionen und APIs im Browser selektiv zu aktivieren, zu deaktivieren und das Verhalten zu ändern. Sie ähnelt CSP, kontrolliert jedoch Funktionen anstelle von Sicherheitsverhalten. Dies ist in Firefox als **Funktionsrichtlinie** implementiert, der Name, der in einer früheren Version der Spezifikation verwendet wurde.

Beachten Sie, dass unterstützte Richtlinien über das [`allow`](/de/docs/Web/HTML/Reference/Elements/iframe#allow) Attribut in `<iframe>` Elementen festgelegt werden können, auch wenn die Benutzerpräferenz nicht gesetzt ist.

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 65                   | Nein                     |
| Developer Edition      | 65                   | Nein                     |
| Beta                   | 65                   | Nein                     |
| Release                | 65                   | Nein                     |

- `dom.security.featurePolicy.header.enabled`
  - : Setzen Sie diese auf `true`, um sie zu aktivieren.

### Datenschutzfreundliche Zuweisungs-API (PPA)

[PPA-API](https://support.mozilla.org/en-US/kb/privacy-preserving-attribution) bietet eine Alternative zur Benutzerverfolgung für Anzeigenzuweisungen mit dem neuen `navigator.privateAttribution` Objekt mit den Methoden `saveImpression()` und `measureConversion()`. Lesen Sie mehr über PPA [im ursprünglichen Erklärer](https://github.com/mozilla/explainers/tree/main/archive/ppa-experiment) und die [vorgeschlagene Spezifikation](https://w3c.github.io/ppa/). Dieses Experiment kann für Websites über [Origin Trial](https://wiki.mozilla.org/Origin_Trials) oder im Browser durch Setzen der Präferenz auf `1` aktiviert werden. ([Firefox-Bug 1900929](https://bugzil.la/1900929)).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 128                  | Nein                     |
| Developer Edition      | 128                  | Nein                     |
| Beta                   | 128                  | Nein                     |
| Release                | 128                  | Nein                     |

- `dom.origin-trials.private-attribution.state`
  - : Setzen Sie diese auf `true`, um sie zu aktivieren.

## HTTP

### Integritätspolitik für Stylesheet-Ressourcen

Die {{httpheader("Integrity-Policy")}} und {{httpheader("Integrity-Policy-Report-Only")}} HTTP-Header werden nun für Stilressourcen unterstützt. Diese ermöglichen es Websites, entweder [Integritätsgarantien für Subressourcen](/de/docs/Web/Security/Defenses/Subresource_Integrity) für Stile durchzusetzen oder nur Verstöße gegen die Richtlinie zu melden.
Beachten Sie, dass Firefox Berichtserstattungsendpunkte ignoriert und Verstöße in die Entwicklerkonsole protokolliert.
Wenn `Integrity-Policy` verwendet wird, blockiert der Browser das Laden von Stilen, die in einem {{HTMLElement("link")}} Element mit [`rel="stylesheet"`](/de/docs/Web/HTML/Reference/Attributes/rel#stylesheet) referenziert werden, entweder ohne das [`integrity`](/de/docs/Web/HTML/Reference/Elements/script#integrity) Attribut oder mit einem Integritätshash, der nicht mit der Ressource auf dem Server übereinstimmt.
([Firefox-Bug 1976656](https://bugzil.la/1976656)).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 142                  | Nein                     |
| Developer Edition      | 142                  | Nein                     |
| Beta                   | 142                  | Nein                     |
| Release                | 142                  | Nein                     |

- `security.integrity_policy.stylesheet.enabled`
  - : Setzen Sie diese auf `true`, um sie zu aktivieren.

### Speicherzugriff-Header

Die {{httpheader("Sec-Fetch-Storage-Access")}} und {{httpheader("Activate-Storage-Access")}} HTTP-Header werden nun unterstützt, um einen effizienteren [Storage Access API](/de/docs/Web/API/Storage_Access_API) Workflow zu ermöglichen. ([Firefox-Bug 1991688](https://bugzil.la/1991688)).

Im JavaScript-only Workflow muss eine Drittanbieterressource angefordert und geladen werden, um eine Speicherzugriffsberechtigung für einen bestimmten Kontext (wie eine neue Browser-Registerkarte) zu aktivieren. Dies ist erforderlich, selbst wenn die Berechtigung bereits erteilt wurde.
Die Speicherzugriff-Header ermöglichen es dem Browser, den Berechtigungszustand für den bestimmten Kontext zu kommunizieren, damit der Server die Aktivierung einer bereits erteilten Berechtigung anfordern kann.
Dies vermeidet den Overhead der unnötigen Anforderung und des Ladens der Ressource.

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 145                  | Ja                       |
| Developer Edition      | 145                  | Nein                     |
| Beta                   | 145                  | Nein                     |
| Release                | 145                  | Nein                     |

- `dom.storage_access.headers.enabled`
  - : Setzen Sie diese auf `true`, um sie zu aktivieren.

### Idempotency-Key

Der {{httpheader("Idempotency-Key")}} HTTP-Anforderungsheader kann von Website-Client-Code verwendet werden, um {{HTTPMethod("POST")}} oder {{HTTPMethod("PATCH")}} Anfragen {{Glossary("idempotent", "idempotent")}} zu machen, wenn sie mit einem Server verwendet werden, der sie unterstützt.
Die Spezifikation gibt an, dass der Server dokumentieren und bekannt geben sollte, welche Endpunkte diesen Header erfordern, das Format des Schlüssels und die erwarteten Fehlermeldungen.

Firefox fügt den Header _automatisch_ mit einem einzigartigen Schlüssel für jede neue `POST` Anfrage hinzu, wenn er nicht bereits vom page-Client-Code hinzugefügt wurde.
Dies vereinfacht den clientseitigen Code, der erforderlich ist, um mit Servern zu arbeiten, die die Funktion unterstützen.

([Firefox-Bug 1830022](https://bugzil.la/1830022)).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 135                  | Nein                     |
| Developer Edition      | 135                  | Nein                     |
| Beta                   | 135                  | Nein                     |
| Release                | 135                  | Nein                     |

- `network.http.idempotencyKey.enabled`
  - : Setzen Sie diese auf `true`, um sie zu aktivieren.

### Accept Header mit MIME-Typ image/jxl

Der HTTP [`Accept`](/de/docs/Web/HTTP/Reference/Headers/Accept) Header in [Standardanforderungen und Bildanforderungen](/de/docs/Web/HTTP/Guides/Content_negotiation/List_of_default_Accept_values) kann über eine Präferenz konfiguriert werden, um die Unterstützung für den `image/jxl` MIME-Typ anzuzeigen.

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 128                  | Nein                     |
| Developer Edition      | 128                  | Nein                     |
| Beta                   | 128                  | Nein                     |
| Release                | 128                  | Nein                     |

- `image.jxl.enabled`
  - : Setzen Sie diese auf `true`, um sie zu aktivieren.

### Standardmäßig SameSite=Lax

[`SameSite` Cookies](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) haben einen Standardwert von `Lax`.
Mit dieser Einstellung werden Cookies nur gesendet, wenn ein Benutzer zur Ursprungsseite navigiert, nicht jedoch für übergreifende Unteranforderungen, um Bilder oder Frames auf einer Drittanbieter-Site zu laden usw.
Für weitere Details siehe [Firefox-Bug 1617609](https://bugzil.la/1617609).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 69                   | Nein                     |
| Developer Edition      | 69                   | Nein                     |
| Beta                   | 69                   | Nein                     |
| Release                | 69                   | Nein                     |

- `network.cookie.sameSite.laxByDefault`
  - : Setzen Sie diese auf `true`, um sie zu aktivieren.

### Access-Control-Allow-Headers Wildcard deckt nicht Authorization ab

Die [`Access-Control-Allow-Headers`](/de/docs/Web/HTTP/Reference/Headers/Access-Control-Allow-Headers) ist eine Antwort auf ein {{Glossary("Preflight_request", "CORS-Preflight-Anforderung")}}, die angibt, welche Anforderungs-Header in der endgültigen Anforderung enthalten sein können. Die Antwortdirektive kann ein Wildcard (`*`) enthalten, das bedeutet, dass die endgültige Anfrage alle Header außer dem `Authorization` Header enthalten kann.

Standardmäßig schließt Firefox den `Authorization` Header in die endgültige Anfrage ein, nachdem eine Antwort mit `Access-Control-Allow-Headers: *` empfangen wurde.
Setzen Sie die Präferenz auf `false`, um sicherzustellen, dass Firefox den `Authorization` Header nicht einschließt.
Für weitere Details siehe [Firefox-Bug 1687364](https://bugzil.la/1687364).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 115                  | Ja                       |
| Developer Edition      | 115                  | Ja                       |
| Beta                   | 115                  | Ja                       |
| Release                | 115                  | Ja                       |

- `network.cors_preflight.authorization_covered_by_wildcard`
  - : Setzen Sie diese auf `true`, um sie zu aktivieren.

## Entwicklerwerkzeuge

Die Entwicklerwerkzeuge von Mozilla entwickeln sich ständig weiter. Wir experimentieren mit neuen Ideen, fügen neue Funktionen hinzu und testen sie auf den Nightly und Developer Edition Kanälen, bevor sie auf Beta und Release gehen. Die unten aufgeführten Funktionen sind der aktuelle Bestand an experimentellen Entwicklerwerkzeug-Funktionen.

**Keine experimentellen Funktionen in diesem Release-Zyklus.**

## Siehe auch

- [Firefox Entwickler-Versionshinweise](/de/docs/Mozilla/Firefox/Releases)
- [Firefox Nightly](https://www.firefox.com/en-US/channel/desktop/)
- [Firefox Developer Edition](https://www.firefox.com/en-US/channel/desktop/developer/)
