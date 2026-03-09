---
title: Experimentelle Funktionen in Firefox
short-title: Experimentelle Funktionen
slug: Mozilla/Firefox/Experimental_features
l10n:
  sourceCommit: 4ce8f1db7ea759cc755c96f7d668ca6ba92483b1
---

Diese Seite listet die experimentellen und teilweise implementierten Funktionen von Firefox auf, einschließlich sich entwickelnder oder vorgeschlagener Webplattform-Standards. Jede untenstehende Eintragung enthält Informationen über die Builds, in denen eine Funktion enthalten ist (Nightly, Beta, Developer Edition oder Release), ob sie standardmäßig aktiviert ist oder nicht, und den Namen der **Präferenz**, die Sie verwenden können, um die Funktion zu aktivieren oder zu konfigurieren. Die Beschreibung jeder Funktion enthält auch Links zu relevanten [Bugzilla-Fehlern](https://bugzilla.mozilla.org), die die Funktion implementieren oder aktivieren. Diese Informationen erlauben es Ihnen, experimentelle Funktionen auszuprobieren und Feedback zu geben, bevor sie offiziell veröffentlicht werden.

In Bezug auf den Lebenszyklus erscheinen neue Funktionen normalerweise zuerst in [Nightly](https://www.firefox.com/en-US/channel/desktop/#nightly), wo sie oft standardmäßig für frühes Feedback und Tests aktiviert sind. Wenn keine größeren Probleme gefunden werden, werden sie in [Beta](https://www.firefox.com/en-US/channel/desktop/#beta) und [Developer Edition](https://www.firefox.com/en-US/channel/desktop/developer/) Vorabversionen aufgenommen. Schließlich werden genehmigte Funktionen im [stabilen Release](https://www.firefox.com/en-US/) Kanal veröffentlicht. Wenn eine Funktion in einem Release standardmäßig aktiviert ist, wird sie nicht mehr als experimentell betrachtet und von dieser Seite entfernt.

Um diese Funktionen zu aktivieren, geben Sie `about:config` in die Adressleiste von Firefox ein, suchen Sie nach der zugehörigen **Präferenz** und ändern Sie deren Wert, der normalerweise ein Wechsel zwischen `true` und `false` ist. Abhängig von der Funktion müssen Sie möglicherweise den Browser neu starten, damit die Änderung wirksam wird. Lesen Sie den [Firefox-Konfigurations-Editor](https://support.mozilla.org/en-US/kb/about-config-editor-firefox) Support-Artikel für weitere Informationen über das Verwalten von Präferenzen in Firefox.

## HTML

### Layout für input type="search"

Das Layout für `input type="search"` wurde aktualisiert. Dies führt dazu, dass ein Suchfeld ein Löschsymbol hat, sobald jemand darin zu tippen beginnt, um andere Browserimplementierungen abzugleichen. (Siehe [Firefox Bug 558594](https://bugzil.la/558594) für weitere Details.)

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 81                   | Nein                     |
| Developer Edition | 81                   | Nein                     |
| Beta              | 81                   | Nein                     |
| Release           | 81                   | Nein                     |

- `layout.forms.input-type-search.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Umschalten der Passwort-Anzeige

HTML-Passworteingabefelder ([`<input type="password">`](/de/docs/Web/HTML/Reference/Elements/input/password)) beinhalten ein "Auge"-Symbol, das umgeschaltet werden kann, um den Passworttext anzuzeigen oder zu verbergen ([Firefox Bug 502258](https://bugzil.la/502258)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 96                   | Nein                     |
| Developer Edition | 96                   | Nein                     |
| Beta              | 96                   | Nein                     |
| Release           | 96                   | Nein                     |

- `layout.forms.reveal-password-button.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Zeitwähler in `datetime-local` und `time` Eingabeelementen

Die HTML-Eingabeelemente [`<input type="datetime-local">`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local) und [`<input type="time">`](/de/docs/Web/HTML/Reference/Elements/input/time) unterstützen einen Zeitwähler. ([Firefox Bug 1726108](https://bugzil.la/1726108)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 144                  | Nein                     |
| Developer Edition | 144                  | Nein                     |
| Beta              | 144                  | Nein                     |
| Release           | 144                  | Nein                     |

- `dom.forms.datetime.timepicker`
  - : Setzen Sie auf `true`, um zu aktivieren.

## CSS

### Hexboxen zur Anzeige von Steuerzeichen

Diese Funktion rendert Steuerzeichen (Unicode-Kategorie Cc) außer _Tabulator_ (`U+0009`), _Zeilenumbruch_ (`U+000A`), _Seitenvorschub_ (`U+000C`), und _Wagenrücklauf_ (`U+000D`) als Hexboxen, wenn sie nicht erwartet werden. (Siehe [Firefox Bug 1099557](https://bugzil.la/1099557) für weitere Details.)

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 43                   | Ja                       |
| Developer Edition | 43                   | Nein                     |
| Beta              | 43                   | Nein                     |
| Release           | 43                   | Nein                     |

- `layout.css.control-characters.visible`
  - : Setzen Sie auf `true`, um zu aktivieren.

### initial-letter Eigenschaft

Die {{cssxref("initial-letter")}} CSS-Eigenschaft ist Teil der [CSS Inline Layout](https://drafts.csswg.org/css-inline/) Spezifikation und erlaubt es Ihnen, anzugeben, wie fallende, erhöhte und versenkte Anfangsbuchstaben angezeigt werden. (Siehe [Firefox Bug 1223880](https://bugzil.la/1223880) für weitere Details.)

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 50                   | Nein                     |
| Developer Edition | 50                   | Nein                     |
| Beta              | 50                   | Nein                     |
| Release           | 50                   | Nein                     |

- `layout.css.initial-letter.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### fit-content() Funktion

Die {{cssxref("fit-content()")}} Funktion, wie sie auf {{cssxref("width")}} und andere Größenangabeeigenschaften angewendet wird. Diese Funktion wird bereits gut für CSS Grid Layout Spurgrößen unterstützt. (Siehe [Firefox Bug 1312588](https://bugzil.la/1312588) für weitere Details.)

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 91                   | Nein                     |
| Developer Edition | 91                   | Nein                     |
| Beta              | 91                   | Nein                     |
| Release           | 91                   | Nein                     |

- `layout.css.fit-content-function.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Scrollgetriebene Animationen

Früher als "scroll-verknüpfte Animationen" bezeichnet, hängt eine [scrollgetriebene Animation](/de/docs/Web/CSS/Guides/Scroll-driven_animations) von der Scrollposition eines Scrollbalkens anstelle von Zeit oder einer anderen Dimension ab. Die {{cssxref('scroll-timeline-name')}} und {{cssxref('scroll-timeline-axis')}} Eigenschaften (und die {{cssxref('scroll-timeline')}} Kurzschreibweiseigenschaft) erlauben es Ihnen anzugeben, dass ein bestimmter Scrollbalken in einem bestimmten benannten Container als Quelle für eine scrollgetriebene Animation verwendet werden kann. Die Scrolltimeline kann dann mit einer [Animation](/de/docs/Web/CSS/Guides/Animations) verknüpft werden, indem die {{cssxref('animation-timeline')}} Eigenschaft auf den in `scroll-timeline-name` definierten Namen gesetzt wird.

Bei Verwendung der {{cssxref('scroll-timeline')}} Kurzschreibweiseigenschaft muss die Reihenfolge der Eigenschaftswerte {{cssxref('scroll-timeline-name')}} gefolgt von {{cssxref('scroll-timeline-axis')}} sein. Die Lang- und Kurzformigenschaften sind beide hinter der Präferenz verfügbar. Alternativ können Sie die {{cssxref("animation-timeline/scroll")}} Funktionsnotation mit {{cssxref('animation-timeline')}} verwenden, um anzugeben, dass eine Scrollachse in einem übergeordneten Element für die Timeline verwendet wird.

Für weitere Informationen siehe [Firefox Bug 1807685](https://bugzil.la/1807685), [Firefox Bug 1804573](https://bugzil.la/1804573), [Firefox Bug 1809005](https://bugzil.la/1809005), [Firefox Bug 1676791](https://bugzil.la/1676791), [Firefox Bug 1754897](https://bugzil.la/1754897), [Firefox Bug 1817303](https://bugzil.la/1817303), und [Firefox Bug 1737918](https://bugzil.la/1737918).

Die {{cssxref('timeline-scope')}}, {{cssxref('animation-range-start')}} und {{cssxref('animation-range-end')}} Eigenschaften (und die {{cssxref('animation-range')}} Kurzschreibweiseigenschaft) werden noch nicht unterstützt. Weitere Informationen finden Sie unter [Firefox Bug 1676779](https://bugzil.la/1676779).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 136                  | Ja                       |
| Developer Edition | 110                  | Nein                     |
| Beta              | 110                  | Nein                     |
| Release           | 110                  | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### prefers-reduced-transparency Medienmerkmal

Das CSS {{cssxref("@media/prefers-reduced-transparency")}} Medienmerkmal ermöglicht es Ihnen zu erkennen, ob ein Benutzer die Einstellung aktiviert hat, um die Menge an transparenten oder transluzenten Schichteffekten auf ihrem Gerät zu minimieren. Siehe ([Firefox Bug 1736914](https://bugzil.la/1736914)) für weitere Details.

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 113                  | Nein                     |
| Developer Edition | 113                  | Nein                     |
| Beta              | 113                  | Nein                     |
| Release           | 113                  | Nein                     |

- `layout.css.prefers-reduced-transparency.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### inverted-colors Medienmerkmal

Das CSS {{cssxref("@media/inverted-colors")}} Medienmerkmal ermöglicht es Ihnen zu erkennen, ob ein Benutzeragent oder das zugrunde liegende Betriebssystem die Farben invertiert. Siehe ([Firefox Bug 1794628](https://bugzil.la/1794628)) für weitere Details.

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 114                  | Nein                     |
| Developer Edition | 114                  | Nein                     |
| Beta              | 114                  | Nein                     |
| Release           | 114                  | Nein                     |

- `layout.css.inverted-colors.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Benannte Ansicht Fortschritts-Zeitleisten-Eigenschaft

Die CSS {{cssxref("view-timeline-name")}} Eigenschaft ermöglicht es Ihnen, einem bestimmten Element einen Namen zu geben, indem Sie angeben, dass dessen übergeordnetes Scrollerelement die Quelle einer Fortschrittszeitleiste der Ansicht ist. Der Name kann dann `animation-timeline` zugeordnet werden, das daraufhin das verknüpfte Element animiert, wenn es sich durch den sichtbaren Bereich seines übergeordneten Scrollers bewegt. Siehe ([Firefox Bug 1737920](https://bugzil.la/1737920)) für weitere Details.

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 114                  | Nein                     |
| Developer Edition | 114                  | Nein                     |
| Beta              | 114                  | Nein                     |
| Release           | 114                  | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Anonyme Ansicht Fortschritts-Zeitleisten Funktion

Die CSS {{cssxref("animation-timeline/view")}} Funktion erlaubt Ihnen anzugeben, dass die `animation-timeline` für ein Element eine Fortschrittszeitleiste der Ansicht ist, die das Element animieren wird, während es durch den sichtbaren Bereich seines übergeordneten Scrollers bewegt wird. Die Funktion definiert die Achse des übergeordneten Elements, die die Zeitleiste bereitstellt, zusammen mit dem Rand innerhalb des sichtbaren Bereichs, an dem die Animation beginnt und endet. Siehe ([Firefox Bug 1808410](https://bugzil.la/1808410)) für weitere Details.

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 114                  | Nein                     |
| Developer Edition | 114                  | Nein                     |
| Beta              | 114                  | Nein                     |
| Release           | 114                  | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Vendor-präfixierte Transform-Eigenschaften

Die `-moz-` präfixierten [CSS-Transform](/de/docs/Web/CSS/Guides/Transforms) Eigenschaften können deaktiviert werden, indem die Präferenz `layout.css.prefixes.transforms` auf `false` gesetzt wird. Die Absicht ist, diese zu deaktivieren, sobald die standardmäßigen CSS-Zoomeigenschaften gut unterstützt werden. ([Firefox Bug 1886134](https://bugzil.la/1886134), [Firefox Bug 1855763](https://bugzil.la/1855763)).

Konkret wird diese Präferenz die folgenden präfixierten Eigenschaften deaktivieren:

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
  - : Setzen Sie auf `true`, um zu aktivieren.

#### Relative Kontrollpunkte in CSS `shape()` Kurvenbefehlen

In CSS `shape()` Funktionen können Sie [`<relative-control-point>`](/de/docs/Web/CSS/Reference/Values/basic-shape/shape#relative-control-point) Werte verwenden, wenn Sie einen [`<curve-command>`](/de/docs/Web/CSS/Reference/Values/basic-shape/shape#curve-command) oder [`<smooth-command>`](/de/docs/Web/CSS/Reference/Values/basic-shape/shape#smooth-command) angeben. Diese Werte ermöglichen es Ihnen, Kontrollpunkte anzugeben, die relativ zum Start- oder Endpunkt des aktuellen Befehls oder relativ zum Ursprung (oben-links) des Containers, in dem die Form gezeichnet wird, positioniert sind. ([Firefox Bug 1921501](https://bugzil.la/1921501)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 146                  | Ja                       |
| Developer Edition | 146                  | Nein                     |
| Beta              | 146                  | Nein                     |
| Release           | 146                  | Nein                     |

- `layout.css.basic-shape-shape.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Symmetrisches `letter-spacing`

Die CSS {{cssxref("letter-spacing")}} Eigenschaft teilt nun den angegebenen Buchstabenabstand gleichmäßig auf beiden Seiten jedes Zeichens. Dies ist im Gegensatz zum aktuellen Verhalten, bei dem der Abstand hauptsächlich auf einer Seite hinzugefügt wird. Dieser Ansatz kann den Textabstand verbessern, insbesondere in Text mit gemischter Ausrichtung. ([Firefox Bug 1891446](https://bugzil.la/1891446)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 128                  | Ja                       |
| Developer Edition | 128                  | Ja                       |
| Beta              | 127                  | Nein                     |
| Release           | 127                  | Nein                     |

- `layout.css.letter-spacing.model`
  - : Setzen Sie auf `true`, um zu aktivieren.

### `calc()` Farbkanalunterstützung in relativen Farben

Die CSS {{cssxref("calc()")}} Funktion kann jetzt Farbkanäle in [relativen Farben](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors#using_math_functions) analysieren, sodass Sie Änderungen an Farben in verschiedenen Farbräumen oder bei Verwendung unterschiedlicher Funktionsnotationen korrekt berechnen können [Firefox Bug 1889561](https://bugzil.la/1889561).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 127                  | Ja                       |
| Developer Edition | 127                  | Nein                     |
| Beta              | 127                  | Nein                     |
| Release           | 127                  | Nein                     |

- `layout.css.relative-color-syntax.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Erlaube Pseudoelemente nach Element-basierten Pseudoelementen

Es wurde daran gearbeitet, [Pseudoelemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) wie {{cssxref("::first-letter")}} und {{cssxref("::before")}} an [Element-basierte Pseudoelemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements#element-backed_pseudo-elements) wie {{cssxref("::details-content")}} und {{cssxref("::file-selector-button")}} anhängen zu lassen.

Dadurch können Benutzer beispielsweise den ersten Buchstaben des {{htmlElement("details")}} Elements mit dem CSS-Selektor `::details-content::first-letter` stylen oder vor einem {{HTMLElement("input") }} mit [`type="file"`](/de/docs/Web/HTML/Reference/Elements/input/file) über den CSS-Selektor `::file-selector-button::before` Inhalt hinzufügen.

Derzeit kann nur der Unterstützung für `::details-content::first-letter` unter Verwendung von `@supports(::details-content::first-letter)` geparst werden. Das `::file-selector-button` Pseudoelement ist noch nicht als ein Element-basiertes Pseudoelement markiert, sodass es keine Möglichkeit gibt, dies zu testen. ([Firefox Bug 1953557](https://bugzil.la/1953557), [Firefox Bug 1941406](https://bugzil.la/1941406)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 138                  | Nein                     |
| Developer Edition | 138                  | Nein                     |
| Beta              | 138                  | Nein                     |
| Release           | 138                  | Nein                     |

### `:heading` und `:heading()` Pseudoklassen

Die {{cssxref(":heading")}} Pseudoklasse ermöglicht es Ihnen, alle [Überschriftselemente](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) (`<h1>`-`<h6>`) zugleich zu stylen, anstatt sie einzeln anzusprechen. Die {{cssxref(":heading()")}} funktionelle Pseudoklasse ermöglicht es Ihnen, Überschriftselemente zu stylen, die mit einer kommagetrennten Liste von Ganzzahlen übereinstimmen, die den Überschriftsebenen entsprechen. ([Firefox Bug 1974386](https://bugzil.la/1974386) & [Firefox Bug 1984310](https://bugzil.la/1984310)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 142                  | Nein                     |
| Developer Edition | 142                  | Nein                     |
| Beta              | 142                  | Nein                     |
| Release           | 142                  | Nein                     |

- `layout.css.heading-selector.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### `text-decoration-trim`

Die CSS `text-decoration-trim` Eigenschaft ermöglicht es Ihnen, Mithilfe von {{cssxref("text-decoration")}} Start- und Endoffsets die Position von Textdekorationen mit Bezug auf den Text zu kürzen, zu verlängern oder zu verschieben ([Firefox Bug 1979915](https://bugzil.la/1979915)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 145                  | Nein                     |
| Developer Edition | 145                  | Nein                     |
| Beta              | 145                  | Nein                     |
| Release           | 145                  | Nein                     |

- `layout.css.text-decoration-trim.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### `@custom-media` Regel

Die {{cssxref("@custom-media")}} CSS-Regel ermöglicht es, Aliase für lange oder komplexe Medienabfragen zu definieren. Anstatt die gleiche fest codierte `<media-query-list>` in mehreren `@media` Regeln zu wiederholen, kann sie einmal in einer `@custom-media` Regel definiert und bei Bedarf im gesamten Stylesheet referenziert werden. ([Firefox Bug 1744292](https://bugzil.la/1744292)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 146                  | Nein                     |
| Developer Edition | 146                  | Nein                     |
| Beta              | 146                  | Nein                     |
| Release           | 146                  | Nein                     |

- `layout.css.custom-media.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### `<attr-type>` Werte in `attr()` CSS Funktion

Die {{cssxref("attr")}} CSS Funktion unterstützt jetzt [`<attr-type>`](/de/docs/Web/CSS/Reference/Values/attr#attr-type) Werte. Dies ermöglicht es Ihnen, anzugeben, wie ein Attributwert in einen CSS-Wert analysiert wird und diese Werte direkt von [`data-*`](/de/docs/Web/HTML/How_to/Use_data_attributes) zu nehmen. ([Firefox Bug 1986631](https://bugzil.la/1986631) & [Firefox Bug 1998245](https://bugzil.la/1998245))

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 149                  | Nein                     |
| Developer Edition | 149                  | Nein                     |
| Beta              | 149                  | Nein                     |
| Release           | 149                  | Nein                     |

- `layout.css.attr.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### `color-mix()` akzeptiert mehrere Farbargumente

Die [`color-mix()`](/de/docs/Web/CSS/Reference/Values/color_value/color-mix) CSS-Funktion unterstützt nun mehrere [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value) Werte, anstatt nur zwei. Dies ermöglicht es Ihnen, viele Farben zu mischen und die Prozentanteile jeder Farbe festzulegen. ([Firefox Bug 2007772](https://bugzil.la/2007772)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 150                  | Ja                       |
| Developer Edition | 149                  | Nein                     |
| Beta              | 149                  | Nein                     |
| Release           | 149                  | Nein                     |

- `layout.css.color-mix-multi-color.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

## SVG

**Keine experimentellen Funktionen in diesem Veröffentlichungszyklus.**

## JavaScript

**Keine experimentellen Funktionen in diesem Veröffentlichungszyklus.**

## APIs

### Entfernen der `beforescriptexecute` und `afterscriptexecute` Ereignisse

Die nicht standardmäßigen Ereignisse [`beforescriptexecute`](/de/docs/Web/API/Document/beforescriptexecute_event) und [`afterscriptexecute`](/de/docs/Web/API/Document/afterscriptexecute_event) auf der [`Document`](/de/docs/Web/API/Document) Schnittstelle, und [`afterscriptexecute`](/de/docs/Web/API/Element/afterscriptexecute_event) und [`beforescriptexecute`](/de/docs/Web/API/Element/beforescriptexecute_event) auf der [`Element`](/de/docs/Web/API/Element) Schnittstelle befinden sich auf dem Weg zur Entfernung. Sie wurden in Nightly deaktiviert. ([Firefox Bug 1954685](https://bugzil.la/1954685)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 139                  | Nein                     |
| Developer Edition | 139                  | Ja                       |
| Beta              | 139                  | Ja                       |
| Release           | 139                  | Ja                       |

- `dom.events.script_execute.enable`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Notification actions und maxActions Eigenschaften

Die [`actions`](/de/docs/Web/API/Notification/actions) schreibgeschützte Eigenschaft und die [`maxActions`](/de/docs/Web/API/Notification/maxActions_static) statische schreibgeschützte Eigenschaft der [`Notification`](/de/docs/Web/API/Notification) Schnittstelle werden in Nightly auf dem Desktop unterstützt. Diese enthalten die Benachrichtigungsaktionen, die mit [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification) festgelegt wurden, sowie die maximale Anzahl von Aktionen, die festgelegt werden können. ([Firefox Bug 1225110](https://bugzil.la/1225110), [Firefox Bug 1963263](https://bugzil.la/1963263)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 138                  | Ja (nur Desktop)         |
| Developer Edition | 138                  | Nein                     |
| Beta              | 138                  | Nein                     |
| Release           | 138                  | Nein                     |

- `dom.webnotifications.actions.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Grafik: Canvas, WebGL und WebGPU

#### WebGL: Entwurfserweiterungen

Wenn diese Präferenz aktiviert ist, werden alle WebGL-Erweiterungen, die sich gerade im "Entwurf"-Status befinden und getestet werden, zur Nutzung aktiviert. Derzeit gibt es keine WebGL-Erweiterungen, die von Firefox getestet werden.

#### WebGPU API

Die [WebGPU API](/de/docs/Web/API/WebGPU_API) bietet grundlegende Unterstützung für die Durchführung von Berechnungen und Grafik-Rendering mithilfe der [Graphics Processing Unit](https://en.wikipedia.org/wiki/Graphics_Processing_Unit) (GPU) des Geräts oder Computers des Benutzers. Ab Version 142 ist dies auf Windows in allen Kontexte außer Service Workern aktiviert. Ab Version 147 ist dies auf macOS auf Apple Silicon in allen Browser-Kontexten außer Service Workern aktiviert. Für andere Plattformen wie Linux und macOS auf Intel-Silicon ist es in Nightly aktiviert. Siehe [Firefox Bug 1602129](https://bugzil.la/1602129) für unseren Fortschritt bei dieser API.

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert?                                               |
| ----------------- | -------------------- | ---------------------------------------------------------------------- |
| Nightly           | 141                  | Ja                                                                     |
| Developer Edition | 141                  | Nein (Ja auf Windows und macOS auf Apple Silicon, ohne Service Worker) |
| Beta              | 141                  | Nein (Ja auf Windows und macOS auf Apple Silicon, ohne Service Worker) |
| Release           | 141                  | Nein (Ja auf Windows und macOS auf Apple Silicon, ohne Service Worker) |

- `dom.webgpu.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren (in Nightly und auf Windows in allen Releases aktiviert)
- `dom.webgpu.service-workers.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren (in Nightly aktiviert)

### Unterstützung für Reporting API bei CSP-Verstößen

Die [Reporting API](/de/docs/Web/API/Reporting_API) hat jetzt Unterstützung für das Melden von [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) Verstößen.

[`Report`](/de/docs/Web/API/Report) Instanzen, die von der [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) Schnittstelle zurückgegeben werden, können jetzt einen `type` Wert von `"csp-violation"` und eine `body` Eigenschaft haben, die eine Instanz der [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody) Schnittstelle enthält. Dadurch können CSP-Verstöße innerhalb einer Webseite gemeldet werden.

CSP-Verstoßberichte können auch an entfernte Endpunkte gesendet werden, die im CSP {{CSP("report-to")}} Directive beim Namen angegeben sind — Endpunktnamen und korrespondierende URLs müssen zuerst im {{httpheader('Reporting-Endpoints')}} oder {{httpheader('Report-To')}} HTTP-Antwortheader definiert werden. Der Bericht ist eine Serialisierung des oben beschriebenen [`Report`](/de/docs/Web/API/Report)-Objekts mit einer `body` Eigenschaft, die eine Serialisierung einer [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody) Instanz ist.

Dieser Verstoßbericht ersetzt einen ähnlichen CSP-spezifischen Mechanismus zum Senden von Verstoßberichten, wobei das CSP {{CSP("report-uri")}} Directive verwendet wird, um die URL des Berichts-Endpunkts festzulegen, und das eine [CSP-spezifische JSON-Verstoßberichtsformat](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/report-uri#violation_report_syntax) hat. ([Firefox Bug 1391243](https://bugzil.la/1391243)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 130                  | Nein                     |
| Developer Edition | 130                  | Nein                     |
| Beta              | 130                  | Nein                     |
| Release           | 130                  | Nein                     |

- `dom.reporting.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### WebRTC und Medien

Die folgenden experimentellen Funktionen umfassen jene, die in Medien-APIs wie der [WebRTC API](/de/docs/Web/API/WebRTC_API), der [Web Audio API](/de/docs/Web/API/Web_Audio_API), der [Media Source Extensions API](/de/docs/Web/API/Media_Source_Extensions_API), der [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API) und der [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) gefunden werden.

#### HTMLMediaElement Eigenschaften: audioTracks und videoTracks

Durch das Aktivieren dieser Funktion werden die Eigenschaften [`HTMLMediaElement.audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks) und [`HTMLMediaElement.videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks) zu allen HTML-Medienelementen hinzugefügt. Da Firefox jedoch derzeit keine Unterstützung für mehrere Audio- und Videospuren bietet, funktionieren die häufigsten Anwendungsfälle für diese Eigenschaften nicht, daher sind sie beide standardmäßig deaktiviert. Weitere Details finden Sie in [Firefox Bug 1057233](https://bugzil.la/1057233).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 33                   | Nein                     |
| Developer Edition | 33                   | Nein                     |
| Beta              | 33                   | Nein                     |
| Release           | 33                   | Nein                     |

- `media.track.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

#### Asynchrone SourceBuffer-Hinzufügung und -Entfernung

Dies fügt die auf Versprechen beruhenden Methoden [`appendBufferAsync()`](/de/docs/Web/API/SourceBuffer/appendBufferAsync) und [`removeAsync()`](/de/docs/Web/API/SourceBuffer/removeAsync) zum Hinzufügen und Entfernen von Medienquellenpuffern zur [`SourceBuffer`](/de/docs/Web/API/SourceBuffer) Schnittstelle hinzu. Weitere Informationen finden Sie unter [Firefox Bug 1280613](https://bugzil.la/1280613) und [Firefox Bug 778617](https://bugzil.la/778617).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 62                   | Nein                     |
| Developer Edition | 62                   | Nein                     |
| Beta              | 62                   | Nein                     |
| Release           | 62                   | Nein                     |

- `media.mediasource.experimental.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

#### AVIF Konformitätsstriktheit

Die `image.avif.compliance_strictness` Präferenz kann verwendet werden, um die _Strenge_ festzulegen, die beim Verarbeiten von [AVIF](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) Bildern angewendet wird. Dadurch können Firefox-Benutzer Bilder anzeigen, die in einigen anderen Browsern dargestellt werden, auch wenn sie nicht strikt konform sind.

| Release-Kanal     | Hinzugefügte Version | Standardwert |
| ----------------- | -------------------- | ------------ |
| Nightly           | 92                   | 1            |
| Developer Edition | 92                   | 1            |
| Beta              | 92                   | 1            |
| Release           | 92                   | 1            |

- `image.avif.compliance_strictness`
  - : Numerischer Wert, der einen _Strenge_ Wert angibt. Zulässige Werte sind:
    - `0`: Permissiv. Akzeptiere Bilder mit Spezifikationsverletzungen sowohl bei Empfehlungen ("sollte" Sprache) als auch bei Anforderungen ("muss" Sprache), sofern sie sicher oder eindeutig interpretiert werden können.
    - `1` **(Standard)**: Gemischt. Zurückweisen von Verletzungen von Anforderungen ("muss"), aber Verstöße gegen Empfehlungen ("sollte") erlauben.
    - `2`: Streng. Zurückweisung jeglicher Verstöße gegen spezifizierte Anforderungen oder Empfehlungen.

#### JPEG XL Unterstützung

Firefox unterstützt [JPEG XL](https://jpeg.org/jpegxl/) Bilder, wenn diese Funktion aktiviert ist. Weitere Details finden Sie in [Firefox Bug 1539075](https://bugzil.la/1539075).

Beachten Sie, dass die Funktion, wie unten gezeigt, nur in Nightly Builds verfügbar ist (unabhängig davon, ob die Präferenz gesetzt ist).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 90                   | Nein                     |
| Developer Edition | —                    | —                        |
| Beta              | —                    | —                        |
| Release           | —                    | —                        |

- `image.jxl.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

#### Dokument Picture-in-Picture API

Die [Document Picture-in-Picture API](/de/docs/Web/API/Document_Picture-in-Picture_API) ermöglicht es, ein immer im Vordergrund befindliches Fenster zu öffnen, das mit beliebigem HTML-Inhalt wie einem Video mit benutzerdefinierten Steuerelementen oder einem Satz von Streams, die die Teilnehmer eines Videokonferenzgesprächs zeigen, gefüllt werden kann. Weitere Details finden Sie in [Firefox Bug 1858562](https://bugzil.la/1858562).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 148                  | Ja                       |
| Developer Edition | 148                  | Nein                     |
| Beta              | 148                  | Nein                     |
| Release           | 148                  | Nein                     |

- `dom.documentpip.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### WebVR API (Deaktiviert)

Die veraltete [WebVR API](/de/docs/Web/API/WebVR_API) ist auf dem Weg zur Entfernung. Sie ist in allen Builds standardmäßig deaktiviert [Firefox Bug 1750902](https://bugzil.la/1750902).

| Release-Kanal     | Entfernte Version | Standardmäßig aktiviert? |
| ----------------- | ----------------- | ------------------------ |
| Nightly           | 98                | Nein                     |
| Developer Edition | 98                | Nein                     |
| Beta              | 98                | Nein                     |
| Release           | 98                | Nein                     |

- `dom.vr.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### GeometryUtils Methoden: convertPointFromNode(), convertRectFromNode() und convertQuadFromNode()

Die `GeometryUtils` Methoden `convertPointFromNode()`, `convertRectFromNode()`, und `convertQuadFromNode()` kartieren den angegebenen Punkt, das Rechteck oder das Viereck vom [`Node`](/de/docs/Web/API/Node), auf dem sie aufgerufen werden, zu einem anderen Node. (Siehe [Firefox Bug 918189](https://bugzil.la/918189) für weitere Details.)

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 31                   | Ja                       |
| Developer Edition | 31                   | Nein                     |
| Beta              | 31                   | Nein                     |
| Release           | 31                   | Nein                     |

- `layout.css.convertFromNode.enable`
  - : Setzen Sie auf `true`, um zu aktivieren.

### GeometryUtils Methode: getBoxQuads()

Die `GeometryUtils` Methode `getBoxQuads()` gibt die CSS-Boxen für einen [`Node`](/de/docs/Web/API/Node) relativ zu jedem anderen Node oder Viewport zurück. (Siehe [Firefox Bug 917755](https://bugzil.la/917755) für weitere Details.)

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 31                   | Ja                       |
| Developer Edition | 31                   | Nein                     |
| Beta              | 31                   | Nein                     |
| Release           | 31                   | Nein                     |

- `layout.css.getBoxQuads.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Payment Request API

#### Primäre Zahlungsabwicklung

Die [Payment Request API](/de/docs/Web/API/Payment_Request_API) bietet Unterstützung für die Abwicklung webbasierter Zahlungen innerhalb von Webinhalten oder Apps. Aufgrund eines Fehlers, der während des Testens der Benutzeroberfläche auftrat, haben wir beschlossen, die Auslieferung dieser API zu verschieben, während Diskussionen über mögliche Änderungen an der API stattfinden. Es wird weiterhin daran gearbeitet. (Siehe [Firefox Bug 1318984](https://bugzil.la/1318984) für weitere Details.)

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 55                   | Nein                     |
| Developer Edition | 55                   | Nein                     |
| Beta              | 55                   | Nein                     |
| Release           | 55                   | Nein                     |

- `dom.payments.request.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.
- `dom.payments.request.supportedRegions`
  - : Ländercodes als kommagetrennte Erlaubnisliste von Regionen (z.B., `US,CA`).

### WebShare API

Die [Web Share API](/de/docs/Web/API/Web_Share_API) ermöglicht das Teilen von Dateien, URLs und anderen Daten von einer Webseite. Diese Funktion ist auf Android in allen Builds aktiviert, aber hinter einer Präferenz auf dem Desktop (es sei denn, unten angegeben).

| Release-Kanal     | Geänderte Version | Standardmäßig aktiviert?                    |
| ----------------- | ----------------- | ------------------------------------------- |
| Nightly           | 71                | Nein (Standard). Ja (Windows ab Version 92) |
| Developer Edition | 71                | Nein                                        |
| Beta              | 71                | Nein                                        |
| Release           | 71                | Nein (Desktop). Ja (Android).               |

- `dom.webshare.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Notifications API

Benachrichtigungen haben die [`requireInteraction`](/de/docs/Web/API/Notification/requireInteraction) Eigenschaft standardmäßig auf Windows-Systemen und in der Nightly-Version auf `true` gesetzt ([Firefox Bug 1794475](https://bugzil.la/1794475)).

| Release-Kanal     | Geänderte Version | Standardmäßig aktiviert? |
| ----------------- | ----------------- | ------------------------ |
| Nightly           | 117               | Ja                       |
| Developer Edition | 117               | Nein                     |
| Beta              | 117               | Nein                     |
| Release           | 117               | Nur Windows              |

- `dom.webnotifications.requireinteraction.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

## Sicherheit und Datenschutz

### Label für unsichere Seiten

Die beiden Präferenzen `security.insecure_connection_text_*` fügen ein "Nicht sicher"-Textlabel in der Adressleiste neben dem traditionellen Schlosssymbol hinzu, wenn eine Seite unsicher geladen wird (d.h. unter Verwendung von {{Glossary("HTTP", "HTTP")}} anstelle von {{Glossary("HTTPS", "HTTPS")}}). Die Präferenz `browser.urlbar.trimHttps` kürzt das `https:` Präfix aus URLs in der Adressleiste. Weitere Details finden Sie in [Firefox Bug 1853418](https://bugzil.la/1853418).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 121                  | Ja                       |
| Developer Edition | 60                   | Nein                     |
| Beta              | 60                   | Nein                     |
| Release           | 60                   | Nein                     |

- `security.insecure_connection_text.enabled`
  - : Setzen Sie auf `true`, um das Textlabel für den normalen Browsing-Modus zu aktivieren.
- `security.insecure_connection_text.pbmode.enabled`
  - : Setzen Sie auf `true`, um das Textlabel für den privaten Browsing-Modus zu aktivieren.
- `browser.urlbar.trimHttps`
  - : Setzen Sie auf `true`, um das `https:` Präfix aus URLs in der Adressleiste zu kürzen.

### Beschränkung von Erwachseneninhalt mit `<meta name="rating">`

Das nicht standardmäßige [`<meta name="rating">`](/de/docs/Web/HTML/Reference/Elements/meta) Element kann in eine Webseite aufgenommen werden, um den Inhalt der Seite als eingeschränkt/erwachsen zu kennzeichnen. Zum Zeitpunkt des Schreibens gibt es zwei mögliche `content` Werte, `adult` ([definiert von Google](https://developers.google.com/search/docs/specialty/explicit/guidelines#add-metadata)) und `RTA-5042-1996-1400-1577-RTA` ([definiert von ASACP](https://www.rtalabel.org/?content=howto#top)), die die gleiche Wirkung haben (weitere Optionen können in Zukunft hinzugefügt werden).

Die folgenden `<meta>` Elemente sind gleichwertig:

```html
<meta name="rating" content="adult" />
<meta name="rating" content="RTA-5042-1996-1400-1577-RTA" />
```

Browser, die dieses Element erkennen, können dann Schritte unternehmen, um Benutzern den Zugriff auf den Inhalt zu beschränken. Firefox' Implementierung ersetzt die Seite durch den Inhalt, der unter `about:restricted` gefunden wird, was dem Benutzer erklärt, dass er versucht, auf eingeschränkten Inhalt zuzugreifen, warum er ihn nicht sehen kann, und ihnen eine Zurück-Schaltfläche gibt, um zum Ausgangspunkt zurückzukehren.

Für weitere Details siehe [Firefox Bug 1991135](https://bugzil.la/1991135).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 146                  | Nein                     |
| Developer Edition | 146                  | Nein                     |
| Beta              | 146                  | Nein                     |
| Release           | 146                  | Nein                     |

- `security.restrict_to_adults.always`
  - : Setzen Sie auf `true`, um den Zugang zu Webseiten zu beschränken, die sich selbst als erwachsen ausweisen, indem sie ein `<meta name="rating">` Element einfügen.
- `security.restrict_to_adults.respect_platform`
  - : Setzen Sie auf `true`, um den Zugang zu Webseiten zu beschränken, die sich selbst als erwachsen ausweisen, indem sie ein `<meta name="rating">` Element nur dann einfügen, wenn angemessene Elterliche Kontrollmechanismen auf dem zugrunde liegenden Betriebssystem gesetzt sind (zum Beispiel, wenn die _Inhalts- und Datenschutzeinstellungen_ von macOS auf das Einschränken expliziter Webinhalte eingestellt sind).

### Permissions Policy / Feature Policy

[Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) ermöglicht es Webentwicklern, bestimmte Funktionen und APIs im Browser selektiv zu aktivieren, zu deaktivieren und das Verhalten zu ändern. Es ist ähnlich wie CSP, aber kontrolliert Funktionen anstelle von Sicherheitsverhalten. Dies ist in Firefox als **Feature Policy** implementiert, der Name, der in einer früheren Version der Spezifikation verwendet wurde.

Beachten Sie, dass unterstützte Richtlinien über das [`allow`](/de/docs/Web/HTML/Reference/Elements/iframe#allow) Attribut auf `<iframe>` Elementen gesetzt werden können, auch wenn die Benutzerpräferenz nicht gesetzt ist.

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 65                   | Nein                     |
| Developer Edition | 65                   | Nein                     |
| Beta              | 65                   | Nein                     |
| Release           | 65                   | Nein                     |

- `dom.security.featurePolicy.header.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Datenschutz-Wahrende Attribution API (PPA)

[PPA API](https://support.mozilla.org/en-US/kb/privacy-preserving-attribution) bietet eine Alternative zur Benutzerverfolgung für die Anzeigeattribution über das neue `navigator.privateAttribution` Objekt mit `saveImpression()` und `measureConversion()` Methoden. Lesen Sie mehr über PPA [im ursprünglichen Erklärer](https://github.com/mozilla/explainers/tree/main/archive/ppa-experiment) und der [vorgeschlagenen Spezifikation](https://w3c.github.io/ppa/). Dieses Experiment kann für Websites über [origin trial](https://wiki.mozilla.org/Origin_Trials) oder im Browser aktiviert werden, indem die Präferenz auf `1` gesetzt wird. ([Firefox Bug 1900929](https://bugzil.la/1900929)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 128                  | Nein                     |
| Developer Edition | 128                  | Nein                     |
| Beta              | 128                  | Nein                     |
| Release           | 128                  | Nein                     |

- `dom.origin-trials.private-attribution.state`
  - : Setzen Sie auf `true`, um zu aktivieren.

## HTTP

### Integritätsrichtlinie für Stylesheet-Ressourcen

Die {{httpheader("Integrity-Policy")}} und {{httpheader("Integrity-Policy-Report-Only")}} HTTP-Header werden jetzt für Stilressourcen unterstützt. Diese erlauben es Websites, entweder [Subressourcen-Integritätsgarantien](/de/docs/Web/Security/Defenses/Subresource_Integrity) für Stile durchzusetzen oder nur Verstöße gegen die Richtlinie zu melden. Beachten Sie, dass Firefox Berichtsendpunkte ignoriert und Verstöße in der Entwicklerkonsole protokolliert. Wenn `Integrity-Policy` verwendet wird, blockiert der Browser das Laden von Stilen, die in einem {{HTMLElement("link")}} Element mit [`rel="stylesheet"`](/de/docs/Web/HTML/Reference/Attributes/rel#stylesheet) referenziert werden, die entweder das [`integrity`](/de/docs/Web/HTML/Reference/Elements/script#integrity) Attribut fehlen oder einen Integritätshash verwenden, der nicht mit der Ressource auf dem Server übereinstimmt. ([Firefox Bug 1976656](https://bugzil.la/1976656)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 142                  | Nein                     |
| Developer Edition | 142                  | Nein                     |
| Beta              | 142                  | Nein                     |
| Release           | 142                  | Nein                     |

- `security.integrity_policy.stylesheet.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Speicherzugriff-Header

Die {{httpheader("Sec-Fetch-Storage-Access")}} und {{httpheader("Activate-Storage-Access")}} HTTP-Header werden jetzt unterstützt, was einen effizienteren [Storage Access API](/de/docs/Web/API/Storage_Access_API) Arbeitsablauf ermöglicht. ([Firefox Bug 1991688](https://bugzil.la/1991688)).

Im rein JavaScript-basierten Arbeitsablauf muss eine Drittanbieter-Ressource angefordert und geladen werden, um eine Speicherzugriffserlaubnis für einen bestimmten Kontext zu aktivieren (z.B. eine neue Browser-Registerkarte). Dies ist erforderlich, auch wenn die Erlaubnis bereits erteilt wurde. Die Speicherzugriff-Header ermöglichen es dem Browser, den Berechtigungsstatus für den jeweiligen Kontext zu bewerben, sodass der Server die Aktivierung einer bereits erteilten Erlaubnis anfordern kann. Dies vermeidet den Overhead, die Ressource unnötigerweise abzurufen und zu laden.

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 145                  | Ja                       |
| Developer Edition | 145                  | Nein                     |
| Beta              | 145                  | Nein                     |
| Release           | 145                  | Nein                     |

- `dom.storage_access.headers.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Idempotenz-Schlüssel

Der {{httpheader("Idempotency-Key")}} HTTP-Anforderungsheader kann vom Website-Clientcode verwendet werden, um eine {{HTTPMethod("POST")}} oder {{HTTPMethod("PATCH")}} Anfragen {{Glossary("idempotent", "idemotent")}} zu machen, wenn sie mit einem Server verwendet werden, der dies unterstützt. Die Spezifikation gibt an, dass der Server dokumentieren und anzeigen soll, welche Endpunkte diesen Header erfordern, das Format des Schlüssels und erwartete Fehlermeldungen.

Firefox fügt den Header automatisch mit einem eindeutigen Schlüssel für jede neue `POST`-Anfrage hinzu, wenn er nicht bereits vom Seiten-Clientcode hinzugefügt wurde. Dies vereinfacht den clientseitigen Code, der benötigt wird, um mit Servern zu arbeiten, die diese Funktion unterstützen.

([Firefox Bug 1830022](https://bugzil.la/1830022)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 135                  | Nein                     |
| Developer Edition | 135                  | Nein                     |
| Beta              | 135                  | Nein                     |
| Release           | 135                  | Nein                     |

- `network.http.idempotencyKey.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Accept-Header mit MIME-Typ image/jxl

Der HTTP [`Accept`](/de/docs/Web/HTTP/Reference/Headers/Accept) Header in [Standard-Anfragen und Bildanfragen](/de/docs/Web/HTTP/Guides/Content_negotiation/List_of_default_Accept_values) kann über eine Präferenz konfiguriert werden, um Unterstützung für den `image/jxl` MIME-Typ anzuzeigen.

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 128                  | Nein                     |
| Developer Edition | 128                  | Nein                     |
| Beta              | 128                  | Nein                     |
| Release           | 128                  | Nein                     |

- `image.jxl.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### SameSite=Lax standardmäßig

[`SameSite` Cookies](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) haben den Standardwert `Lax`. Mit dieser Einstellung werden Cookies nur gesendet, wenn ein Benutzer zur Ursprungsseite navigiert, nicht jedoch für standortübergreifende Unteranfragen, um Bilder oder Frames in eine Drittanbieter-Website zu laden usw. Für weitere Details siehe [Firefox Bug 1617609](https://bugzil.la/1617609).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 69                   | Nein                     |
| Developer Edition | 69                   | Nein                     |
| Beta              | 69                   | Nein                     |
| Release           | 69                   | Nein                     |

- `network.cookie.sameSite.laxByDefault`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Access-Control-Allow-Headers Wildcard schließt Authorization nicht ein

Der [`Access-Control-Allow-Headers`](/de/docs/Web/HTTP/Reference/Headers/Access-Control-Allow-Headers) ist ein Antwortheader auf eine {{Glossary("Preflight_request", "CORS Preflight-Anfrage")}}, der angibt, welche Anforderungsheader in der endgültigen Anfrage enthalten sein dürfen. Die Antwortderivative kann einen Wildcard (`*`) enthalten, der angibt, dass die endgültige Anfrage alle Header außer dem `Authorization` Header enthalten darf.

Standardmäßig fügt Firefox den `Authorization` Header in die endgültige Anfrage ein, nachdem er eine Antwort mit `Access-Control-Allow-Headers: *` erhält. Setzen Sie die Präferenz auf `false`, um sicherzustellen, dass Firefox den `Authorization` Header nicht einschließt. Für weitere Details siehe [Firefox Bug 1687364](https://bugzil.la/1687364).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 115                  | Ja                       |
| Developer Edition | 115                  | Ja                       |
| Beta              | 115                  | Ja                       |
| Release           | 115                  | Ja                       |

- `network.cors_preflight.authorization_covered_by_wildcard`
  - : Setzen Sie auf `true`, um zu aktivieren.

## Entwicklertools

Die Entwicklertools von Mozilla entwickeln sich ständig weiter. Wir experimentieren mit neuen Ideen, fügen neue Funktionen hinzu und testen sie in den Nightly- und Developer Edition-Kanälen, bevor sie in Beta und Release gehen. Die folgenden Funktionen sind der aktuelle Stand der experimentellen Entwicklertools.

**Keine experimentellen Funktionen in diesem Veröffentlichungszyklus.**

## Siehe auch

- [Firefox Entwickler-Versionen](/de/docs/Mozilla/Firefox/Releases)
- [Firefox Nightly](https://www.firefox.com/en-US/channel/desktop/)
- [Firefox Developer Edition](https://www.firefox.com/en-US/channel/desktop/developer/)
