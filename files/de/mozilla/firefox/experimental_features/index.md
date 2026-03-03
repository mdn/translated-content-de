---
title: Experimentelle Funktionen in Firefox
short-title: Experimentelle Funktionen
slug: Mozilla/Firefox/Experimental_features
l10n:
  sourceCommit: f60580563485111e3ac5da813d8b0fe57e398f0e
---

Diese Seite listet die experimentellen und teilweise implementierten Funktionen von Firefox auf, einschließlich sich weiterentwickelnder oder vorgeschlagener Webplattform-Standards. Jeder Eintrag enthält Informationen zu den Builds, in denen eine Funktion enthalten ist (Nightly, Beta, Developer Edition oder Release), ob sie standardmäßig aktiviert ist oder nicht, und den Namen der **Einstellung**, die Sie verwenden können, um die Funktion zu aktivieren oder zu konfigurieren. Die Beschreibung jeder Funktion enthält auch Links zu relevanten [Bugzilla-Bugs](https://bugzilla.mozilla.org), die die Funktion implementieren oder aktivieren. Diese Informationen ermöglichen es Ihnen, experimentelle Funktionen auszuprobieren und Feedback zu geben, bevor sie offiziell veröffentlicht werden.

In Bezug auf den Lebenszyklus erscheinen neue Funktionen normalerweise zuerst in [Nightly](https://www.firefox.com/en-US/channel/desktop/#nightly), wo sie häufig standardmäßig aktiviert sind, um frühes Feedback und Tests zu ermöglichen. Wenn keine wesentlichen Probleme festgestellt werden, sind sie in [Beta](https://www.firefox.com/en-US/channel/desktop/#beta) und [Developer Edition](https://www.firefox.com/en-US/channel/desktop/developer/) Pre-Release-Builds enthalten. Schließlich werden genehmigte Funktionen im stabilen [Release](https://www.firefox.com/en-US/) Kanal ausgeliefert. Wenn eine Funktion in einem Release standardmäßig aktiviert ist, wird sie nicht mehr als experimentell betrachtet und von dieser Seite entfernt.

Um diese Funktionen zu aktivieren, geben Sie `about:config` in die Firefox-Adressleiste ein, suchen Sie nach der zugehörigen **Einstellung** und ändern Sie ihren Wert, der normalerweise ein Umschalten zwischen `true` und `false` ist. Abhängig von der Funktion müssen Sie möglicherweise den Browser neu starten, damit die Änderungen wirksam werden. Überprüfen Sie den Support-Artikel [Firefox Konfigurationseditor](https://support.mozilla.org/en-US/kb/about-config-editor-firefox) für weitere Informationen zur Verwaltung von Einstellungen in Firefox.

## HTML

### Layout für `input type="search"`

Das Layout für `input type="search"` wurde aktualisiert. Dadurch enthält ein Suchfeld ein Löschsymbol, sobald jemand mit der Eingabe beginnt, um mit anderen Browser-Implementierungen übereinzustimmen. (Weitere Details siehe [Firefox Bug 558594](https://bugzil.la/558594)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 81                   | Nein                     |
| Developer Edition | 81                   | Nein                     |
| Beta              | 81                   | Nein                     |
| Release           | 81                   | Nein                     |

- `layout.forms.input-type-search.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Umschalten der Passwortanzeige

HTML-Passworteingabeelemente ([`<input type="password">`](/de/docs/Web/HTML/Reference/Elements/input/password)) enthalten ein "Augen"-Symbol, das umgeschaltet werden kann, um den Passworttext anzuzeigen oder zu verbergen ([Firefox Bug 502258](https://bugzil.la/502258)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 96                   | Nein                     |
| Developer Edition | 96                   | Nein                     |
| Beta              | 96                   | Nein                     |
| Release           | 96                   | Nein                     |

- `layout.forms.reveal-password-button.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Zeitauswahl in `datetime-local`- und `time`-Eingabeelementen

Die HTML-Elemente [`<input type="datetime-local">`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local) und [`<input type="time">`](/de/docs/Web/HTML/Reference/Elements/input/time) unterstützen eine Zeitauswahl. ([Firefox Bug 1726108](https://bugzil.la/1726108)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 144                  | Nein                     |
| Developer Edition | 144                  | Nein                     |
| Beta              | 144                  | Nein                     |
| Release           | 144                  | Nein                     |

- `dom.forms.datetime.timepicker`
  - : Auf `true` setzen, um zu aktivieren.

## CSS

### Hex-Boxen zur Darstellung von kuriosen Steuerzeichen

Diese Funktion rendert Steuerzeichen (Unicode-Kategorie Cc) außer _tab_ (`U+0009`), _line feed_ (`U+000A`), _form feed_ (`U+000C`) und _carriage return_ (`U+000D`) als Hex-Box, wenn sie unerwartet sind. (Weitere Details siehe [Firefox Bug 1099557](https://bugzil.la/1099557)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 43                   | Ja                       |
| Developer Edition | 43                   | Nein                     |
| Beta              | 43                   | Nein                     |
| Release           | 43                   | Nein                     |

- `layout.css.control-characters.visible`
  - : Auf `true` setzen, um zu aktivieren.

### initial-letter-Eigenschaft

Die {{cssxref("initial-letter")}} CSS-Eigenschaft ist Teil der [CSS Inline Layout](https://drafts.csswg.org/css-inline/) Spezifikation und ermöglicht es, anzugeben, wie Initialbuchstaben dargestellt werden, die fallen gelassen, angehoben oder gesenkt werden. (Weitere Details siehe [Firefox Bug 1223880](https://bugzil.la/1223880)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 50                   | Nein                     |
| Developer Edition | 50                   | Nein                     |
| Beta              | 50                   | Nein                     |
| Release           | 50                   | Nein                     |

- `layout.css.initial-letter.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### fit-content()-Funktion

Die {{cssxref("fit-content()")}}-Funktion, wie sie auf {{cssxref("width")}} und andere Größenangabe-Eigenschaften angewendet wird. Diese Funktion wird bereits gut für CSS Grid Layout-Spurgrößen unterstützt. (Weitere Details siehe [Firefox Bug 1312588](https://bugzil.la/1312588)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 91                   | Nein                     |
| Developer Edition | 91                   | Nein                     |
| Beta              | 91                   | Nein                     |
| Release           | 91                   | Nein                     |

- `layout.css.fit-content-function.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Scroll-gesteuerte Animationen

Zuvor als "Scroll-verknüpfte Animationen" bezeichnet, hängt eine [Scroll-gesteuerte Animation](/de/docs/Web/CSS/Guides/Scroll-driven_animations) von der Scroll-Position einer Bildlaufleiste statt von Zeit oder einer anderen Dimension ab. Die {{cssxref('scroll-timeline-name')}}- und {{cssxref('scroll-timeline-axis')}}-Eigenschaften (und die {{cssxref('scroll-timeline')}}-Kurzschreibweise) ermöglichen es Ihnen anzugeben, dass eine bestimmte Bildlaufleiste in einem bestimmten benannten Container als Quelle für eine Scroll-gesteuerte Animation verwendet werden kann. Die Scroll-Zeitleiste kann dann mit einer [Animation](/de/docs/Web/CSS/Guides/Animations) durch Setzen der {{cssxref('animation-timeline')}}-Eigenschaft auf den Namen, der mit `scroll-timeline-name` definiert wurde, verknüpft werden.

Beim Verwenden der {{cssxref('scroll-timeline')}}-Kurzschreibweise müssen die Eigenschaftswerte in der Reihenfolge {{cssxref('scroll-timeline-name')}} gefolgt von {{cssxref('scroll-timeline-axis')}} angegeben werden. Die ausführlichen und Kurzschreibungsoptionen sind beide hinter der Einstellung verfügbar. Alternativ können Sie die {{cssxref("animation-timeline/scroll")}} funktionale Notation mit {{cssxref('animation-timeline')}} verwenden, um anzugeben, dass eine Bildlaufleiste in einem übergeordneten Element für die Zeitleiste verwendet wird.

Für weitere Informationen siehe [Firefox Bug 1807685](https://bugzil.la/1807685), [Firefox Bug 1804573](https://bugzil.la/1804573), [Firefox Bug 1809005](https://bugzil.la/1809005), [Firefox Bug 1676791](https://bugzil.la/1676791), [Firefox Bug 1754897](https://bugzil.la/1754897), [Firefox Bug 1817303](https://bugzil.la/1817303) und [Firefox Bug 1737918](https://bugzil.la/1737918).

Die {{cssxref('timeline-scope')}}, {{cssxref('animation-range-start')}} und {{cssxref('animation-range-end')}}-Eigenschaften (und die {{cssxref('animation-range')}}-Kurzschreibweise) werden noch nicht unterstützt. Für weitere Informationen siehe [Firefox Bug 1676779](https://bugzil.la/1676779).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 136                  | Ja                       |
| Developer Edition | 110                  | Nein                     |
| Beta              | 110                  | Nein                     |
| Release           | 110                  | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### prefers-reduced-transparency Medienfunktion

Die CSS {{cssxref("@media/prefers-reduced-transparency")}} Medienfunktion ermöglicht es zu erkennen, ob ein Benutzer die Einstellung aktiviert hat, um die Anzahl der transparenten oder durchscheinenden Schichteffekte auf seinem Gerät zu minimieren. Siehe ([Firefox Bug 1736914](https://bugzil.la/1736914)) für weitere Details.

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 113                  | Nein                     |
| Developer Edition | 113                  | Nein                     |
| Beta              | 113                  | Nein                     |
| Release           | 113                  | Nein                     |

- `layout.css.prefers-reduced-transparency.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### inverted-colors Medienfunktion

Die CSS {{cssxref("@media/inverted-colors")}} Medienfunktion ermöglicht es zu erkennen, ob ein Benutzeragent oder das zugrunde liegende Betriebssystem Farben invertiert. Siehe ([Firefox Bug 1794628](https://bugzil.la/1794628)) für weitere Details.

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 114                  | Nein                     |
| Developer Edition | 114                  | Nein                     |
| Beta              | 114                  | Nein                     |
| Release           | 114                  | Nein                     |

- `layout.css.inverted-colors.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Named view progress timelines Eigenschaft

Die CSS {{cssxref("view-timeline-name")}}-Eigenschaft ermöglicht es, einem bestimmten Element einen Namen zu geben und damit anzugeben, dass sein übergeordnetes Bildlaufelement die Quelle einer Fortschrittszeitleiste ist. Der Name kann dann der `animation-timeline` zugewiesen werden, die das verbundene Element animiert, während es durch den sichtbaren Bereich des übergeordneten Bildlaufelements bewegt wird. Siehe ([Firefox Bug 1737920](https://bugzil.la/1737920)) für weitere Details.

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 114                  | Nein                     |
| Developer Edition | 114                  | Nein                     |
| Beta              | 114                  | Nein                     |
| Release           | 114                  | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Anonyme view progress timelines Funktion

Die CSS {{cssxref("animation-timeline/view")}}-Funktion ermöglicht es anzugeben, dass `animation-timeline` für ein Element eine Fortschrittszeitleiste ist, die das Element animiert, während es durch den sichtbaren Bereich des übergeordneten Bildlaufelements bewegt wird. Die Funktion definiert die Achse des übergeordneten Elements, das die Zeitleiste liefert, zusammen mit der Einfügeposition innerhalb des sichtbaren Bereichs, an dem die Animation beginnt und endet. Siehe ([Firefox Bug 1808410](https://bugzil.la/1808410)) für weitere Details.

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 114                  | Nein                     |
| Developer Edition | 114                  | Nein                     |
| Beta              | 114                  | Nein                     |
| Release           | 114                  | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Vendor-präfiksierte transform-Eigenschaften

Die `-moz-`-präsentierten [CSS transform](/de/docs/Web/CSS/Guides/Transforms)-Eigenschaften können durch Setzen der `layout.css.prefixes.transforms`-Einstellung auf `false` deaktiviert werden. Die Absicht ist, diese zu deaktivieren, sobald die standardmäßigen CSS-Zoomeigenschaften gut unterstützt werden. ([Firefox Bug 1886134](https://bugzil.la/1886134), [Firefox Bug 1855763](https://bugzil.la/1855763)).

Insbesondere wird diese Einstellung die folgenden prefixed properties deaktivieren:

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
  - : Auf `true` setzen, um zu aktivieren.

#### Relative Steuerpunkte in CSS `shape()` Kurvenbefehlen

Sie können [`<relative-control-point>`](/de/docs/Web/CSS/Reference/Values/basic-shape/shape#relative-control-point) Werte verwenden, wenn Sie einen [`<curve-command>`](/de/docs/Web/CSS/Reference/Values/basic-shape/shape#curve-command) oder [`<smooth-command>`](/de/docs/Web/CSS/Reference/Values/basic-shape/shape#smooth-command) in einer CSS `shape()` Funktion angeben. Diese Werte ermöglichen es Ihnen, Steuerpunkte anzugeben, die in Bezug auf den Start- oder Endpunkt des aktuellen Befehls oder in Bezug auf den Ursprung (oben links) des Containers positioniert sind, in dem die Form gezeichnet wird. ([Firefox Bug 1921501](https://bugzil.la/1921501)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 146                  | Ja                       |
| Developer Edition | 146                  | Nein                     |
| Beta              | 146                  | Nein                     |
| Release           | 146                  | Nein                     |

- `layout.css.basic-shape-shape.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Symmetrisches `letter-spacing`

Die CSS {{cssxref("letter-spacing")}}-Eigenschaft teilt jetzt den angegebenen Buchstabenabstand gleichmäßig auf beide Seiten jedes Zeichens auf. Dies unterscheidet sich von dem bisherigen Verhalten, bei dem der Abstand hauptsächlich auf eine Seite hinzugefügt wurde. Dieser Ansatz kann den Textabstand verbessern, insbesondere in gemischt-richtiger Text. ([Firefox Bug 1891446](https://bugzil.la/1891446)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 128                  | Ja                       |
| Developer Edition | 128                  | Ja                       |
| Beta              | 127                  | Nein                     |
| Release           | 127                  | Nein                     |

- `layout.css.letter-spacing.model`
  - : Auf `true` setzen, um zu aktivieren.

### `calc()` Farbkanalunterstützung in relativen Farben

Die CSS {{cssxref("calc()")}}-Funktion kann jetzt Farbkanäle in [relativen Farben](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors#using_math_functions) parsen, sodass Sie Änderungen an Farben in verschiedenen Farbräumen oder bei Verwendung verschiedener funktionaler Notationen korrekt berechnen können [Firefox Bug 1889561](https://bugzil.la/1889561).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 127                  | Ja                       |
| Developer Edition | 127                  | Nein                     |
| Beta              | 127                  | Nein                     |
| Release           | 127                  | Nein                     |

- `layout.css.relative-color-syntax.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Erlauben von Pseudo-Elementen nach Element-gestützten Pseudo-Elementen

Es wurde begonnen, die Erlaubnis zu implementieren, dass [Pseudo-Elemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) wie {{cssxref("::first-letter")}} und {{cssxref("::before")}} hinter [Element-gestützten Pseudo-Elementen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements#element-backed_pseudo-elements) wie {{cssxref("::details-content")}} und {{cssxref("::file-selector-button")}} angehängt werden können.

Dies wird es Nutzern ermöglichen, beispielsweise das erste Zeichen des {{htmlElement("details")}}-Elements mit dem CSS-Selektor `::details-content::first-letter` zu stylen oder Inhalt vor einem {{HTMLElement("input") }} vom [`type="file"`](/de/docs/Web/HTML/Reference/Elements/input/file) mit dem CSS-Selektor `::file-selector-button::before` hinzuzufügen.

Derzeit kann nur die Unterstützung für `::details-content::first-letter` mithilfe von `@supports(::details-content::first-letter)` geparst werden. Das `::file-selector-button` Pseudo-Element ist noch nicht als Element-basiertes Pseudo-Element markiert, sodass es keine Möglichkeit gibt, dies zu testen. ([Firefox Bug 1953557](https://bugzil.la/1953557), [Firefox Bug 1941406](https://bugzil.la/1941406)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 138                  | Nein                     |
| Developer Edition | 138                  | Nein                     |
| Beta              | 138                  | Nein                     |
| Release           | 138                  | Nein                     |

### `:heading` und `:heading()` Pseudo-Klassen

Die {{cssxref(":heading")}} Pseudo-Klasse ermöglicht es, alle [Überschriftselemente](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) (`<h1>`-`<h6>`) auf einmal zu stylen, anstatt sie einzeln zu adressieren. Die {{cssxref(":heading()")}} funktionale Pseudo-Klasse erlaubt es, Überschriftselemente zu stylen, die mit einer kommaseparierten Liste von Ganzzahlen übereinstimmen, die die Überschriftenebenen entsprechen. ([Firefox Bug 1974386](https://bugzil.la/1974386) & [Firefox Bug 1984310](https://bugzil.la/1984310)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 142                  | Nein                     |
| Developer Edition | 142                  | Nein                     |
| Beta              | 142                  | Nein                     |
| Release           | 142                  | Nein                     |

- `layout.css.heading-selector.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### `text-decoration-trim`

Die CSS `text-decoration-trim`-Eigenschaft ermöglicht es Ihnen, {{cssxref("text-decoration")}} Anfangs- und Endabschläge anzugeben, um die Position von Textdekorationen gegenüber dem Text zu verkürzen, zu verlängern oder zu verschieben ([Firefox Bug 1979915](https://bugzil.la/1979915)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 145                  | Nein                     |
| Developer Edition | 145                  | Nein                     |
| Beta              | 145                  | Nein                     |
| Release           | 145                  | Nein                     |

- `layout.css.text-decoration-trim.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### `@custom-media` @-Regel

Die {{cssxref("@custom-media")}} CSS @-Regel definiert Aliase für lange oder komplexe Medienabfragen. Anstatt die gleiche fest kodierte `<media-query-list>` in mehreren `@media`-Regeln zu wiederholen, kann sie einmal in einer `@custom-media`-Regel definiert und im gesamten Stylesheet bei Bedarf referenziert werden. ([Firefox Bug 1744292](https://bugzil.la/1744292)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 146                  | Nein                     |
| Developer Edition | 146                  | Nein                     |
| Beta              | 146                  | Nein                     |
| Release           | 146                  | Nein                     |

- `layout.css.custom-media.enabled`
  - : Auf `true` setzen, um zu aktivieren.

## SVG

**Keine experimentellen Funktionen in diesem Entwicklungszyklus.**

## JavaScript

**Keine experimentellen Funktionen in diesem Entwicklungszyklus.**

## APIs

### Entfernen von `beforescriptexecute` und `afterscriptexecute` Ereignissen

Die nicht standardisierten Ereignisse [`beforescriptexecute`](/de/docs/Web/API/Document/beforescriptexecute_event) und [`afterscriptexecute`](/de/docs/Web/API/Document/afterscriptexecute_event) auf der [`Document`](/de/docs/Web/API/Document)-Schnittstelle und [`afterscriptexecute`](/de/docs/Web/API/Element/afterscriptexecute_event) und [`beforescriptexecute`](/de/docs/Web/API/Element/beforescriptexecute_event) auf der [`Element`](/de/docs/Web/API/Element)-Schnittstelle stehen kurz vor der Entfernung. Sie wurden in Nightly deaktiviert. ([Firefox Bug 1954685](https://bugzil.la/1954685)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 139                  | Nein                     |
| Developer Edition | 139                  | Ja                       |
| Beta              | 139                  | Ja                       |
| Release           | 139                  | Ja                       |

- `dom.events.script_execute.enable`
  - : Auf `true` setzen, um zu aktivieren.

### Benachrichtigungsaktionen und `maxActions`-Eigenschaften

Die Leseeigenschaft [`actions`](/de/docs/Web/API/Notification/actions) und die statische Leseeigenschaft [`maxActions`](/de/docs/Web/API/Notification/maxActions_static) der [`Notification`](/de/docs/Web/API/Notification)-Schnittstelle werden in Nightly auf dem Desktop unterstützt. Diese enthalten die mit [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification) gesetzten Benachrichtigungsaktionen bzw. die maximale Anzahl von Aktionen, die festgelegt werden können. ([Firefox Bug 1225110](https://bugzil.la/1225110), [Firefox Bug 1963263](https://bugzil.la/1963263)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 138                  | Ja (nur Desktop)         |
| Developer Edition | 138                  | Nein                     |
| Beta              | 138                  | Nein                     |
| Release           | 138                  | Nein                     |

- `dom.webnotifications.actions.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Grafik: Canvas, WebGL und WebGPU

#### WebGL: Entwurfserweiterungen

Wenn diese Einstellung aktiviert ist, werden alle WebGL-Erweiterungen, die derzeit in "Entwurf"-Status getestet werden, zur Nutzung freigegeben. Derzeit sind keine WebGL-Erweiterungen, die von Firefox getestet werden, im Einsatz.

#### WebGPU API

Die [WebGPU API](/de/docs/Web/API/WebGPU_API) bietet Unterstützung auf niedriger Ebene für die Durchführung von Berechnungen und der Grafikdarstellung unter Verwendung der [Graphics Processing Unit](https://en.wikipedia.org/wiki/Graphics_Processing_Unit) (GPU) des Benutzergeräts oder Computers. Ab Version 142 ist dies unter Windows in allen Kontexten außer in Service-Workern aktiviert. Ab Version 147 ist dies auf macOS auf Apple Silicon in allen Browser-Kontexten außer Service-Workern aktiviert. Für andere Plattformen wie Linux und macOS auf Intel Silicon ist es in Nightly aktiviert. Siehe [Firefox Bug 1602129](https://bugzil.la/1602129) für unseren Fortschritt bei dieser API.

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert?                                                            |
| ----------------- | -------------------- | ----------------------------------------------------------------------------------- |
| Nightly           | 141                  | Ja                                                                                  |
| Developer Edition | 141                  | Nein (Ja auf Windows und macOS auf Apple Silicon, mit Ausnahme von Service-Workern) |
| Beta              | 141                  | Nein (Ja auf Windows und macOS auf Apple Silicon, mit Ausnahme von Service-Workern) |
| Release           | 141                  | Nein (Ja auf Windows und macOS auf Apple Silicon, mit Ausnahme von Service-Workern) |

- `dom.webgpu.enabled`
  - : Auf `true` setzen, um zu aktivieren (in Nightly und unter Windows in allen Versionen aktiviert)
- `dom.webgpu.service-workers.enabled`
  - : Auf `true` setzen, um zu aktivieren (in Nightly aktiviert)

### Reporting API-Unterstützung für CSP-Verstöße

Die [Reporting API](/de/docs/Web/API/Reporting_API) unterstützt jetzt das Melden von [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP)-Verstößen.

[`Report`](/de/docs/Web/API/Report)-Instanzen, die von der [`ReportingObserver`](/de/docs/Web/API/ReportingObserver)-Schnittstelle zurückgegeben werden, können jetzt einen `type`-Wert von `"csp-violation"` und eine `body`-Eigenschaft enthalten, die eine Instanz der [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody)-Schnittstelle ist. Dadurch können CSP-Verstöße innerhalb einer Webseite gemeldet werden.

CSP-Verstoßmeldungen können auch an entfernte Endpunkte gesendet werden, die im CSP {{CSP("report-to")}}-Richtlinie durch Namen angegeben werden — Endpunktnamen und zugehörige URLs müssen zunächst in den {{httpheader('Reporting-Endpoints')}} oder {{httpheader('Report-To')}} HTTP-Antwortheadern definiert werden. Der Bericht ist eine Serialisierung des oben beschriebenen [`Report`](/de/docs/Web/API/Report)-Objekts, mit einer `body`-Eigenschaft, die eine Serialisierung einer [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody)-Instanz ist.

Dieser Verstoßbericht ersetzt einen ähnlichen CSP-spezifischen Mechanismus zum Senden von Verstoßberichten, der die CSP {{CSP("report-uri")}}-Richtlinie verwendet, um die URL des Berichts-Endpunkts festzulegen, und ein [CSP-spezifisches JSON-Verstoßberichtformat](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/report-uri#violation_report_syntax) hat. ([Firefox Bug 1391243](https://bugzil.la/1391243)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 130                  | Nein                     |
| Developer Edition | 130                  | Nein                     |
| Beta              | 130                  | Nein                     |
| Release           | 130                  | Nein                     |

- `dom.reporting.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### WebRTC und Medien

Die folgenden experimentellen Funktionen umfassen diejenigen, die in Medien-APIs wie der [WebRTC API](/de/docs/Web/API/WebRTC_API), der [Web Audio API](/de/docs/Web/API/Web_Audio_API), der [Media Source Extensions API](/de/docs/Web/API/Media_Source_Extensions_API), der [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API) und der [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) zu finden sind.

#### HTMLMediaElement-Eigenschaften: audioTracks und videoTracks

Die Aktivierung dieser Funktion fügt die Eigenschaften [`HTMLMediaElement.audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks) und [`HTMLMediaElement.videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks) zu allen HTML-Medienelementen hinzu. Da Firefox jedoch derzeit keine Unterstützung für mehrere Audio- und Videospuren bietet, funktionieren die häufigsten Anwendungsfälle für diese Eigenschaften nicht, daher sind sie beide standardmäßig deaktiviert. Siehe [Firefox Bug 1057233](https://bugzil.la/1057233) für weitere Details.

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 33                   | Nein                     |
| Developer Edition | 33                   | Nein                     |
| Beta              | 33                   | Nein                     |
| Release           | 33                   | Nein                     |

- `media.track.enabled`
  - : Auf `true` setzen, um zu aktivieren.

#### Asynchrone SourceBuffer hinzufügen und entfernen

Dieses fügt die auf `Promise`-basierten Methoden [`appendBufferAsync()`](/de/docs/Web/API/SourceBuffer/appendBufferAsync) und [`removeAsync()`](/de/docs/Web/API/SourceBuffer/removeAsync) zum Hinzufügen und Entfernen von Medienquellenpuffern zur [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)-Schnittstelle hinzu. Siehe [Firefox Bug 1280613](https://bugzil.la/1280613) und [Firefox Bug 778617](https://bugzil.la/778617) für weitere Informationen.

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 62                   | Nein                     |
| Developer Edition | 62                   | Nein                     |
| Beta              | 62                   | Nein                     |
| Release           | 62                   | Nein                     |

- `media.mediasource.experimental.enabled`
  - : Auf `true` setzen, um zu aktivieren.

#### AVIF-Konformitätsstriktheit

Die `image.avif.compliance_strictness`-Einstellung kann verwendet werden, um die _Striktheit_ zu steuern, die bei der Verarbeitung von [AVIF](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image)-Bildern angewendet werden. Damit können Firefox-Benutzer Bilder anzeigen, die in einigen anderen Browsern angezeigt werden, selbst wenn sie nicht strikt konform sind.

| Release-Kanal     | Hinzugefügte Version | Standardwert |
| ----------------- | -------------------- | ------------ |
| Nightly           | 92                   | 1            |
| Developer Edition | 92                   | 1            |
| Beta              | 92                   | 1            |
| Release           | 92                   | 1            |

- `image.avif.compliance_strictness`
  - : Numerischer Wert, der eine _Striktheits_ Stufe angibt. Zulässige Werte sind:
    - `0`: Permissiv. Akzeptiert Bilder mit Spezifikationsverletzungen in sowohl Empfehlungen ("sollte"-Sprache) als auch Anforderungen ("muss"-Sprache), vorausgesetzt sie können sicher oder eindeutig interpretiert werden.
    - `1` **(Standard)**: Gemischt. Verweigert Verletzungen von Anforderungen ("muss"), erlaubt jedoch Verletzungen von Empfehlungen ("sollte").
    - `2`: Strikt. Verweigert jegliche Verletzungen der angegebenen Anforderungen oder Empfehlungen.

#### Unterstützung für JPEG XL

Firefox unterstützt [JPEG XL](https://jpeg.org/jpegxl/)-Bilder, wenn diese Funktion aktiviert ist. Siehe [Firefox Bug 1539075](https://bugzil.la/1539075) für weitere Details.

Es ist zu beachten, dass, wie unten gezeigt, die Funktion nur in Nightly-Builds verfügbar ist (unabhängig davon, ob die Einstellung gesetzt ist).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 90                   | Nein                     |
| Developer Edition | —                    | —                        |
| Beta              | —                    | —                        |
| Release           | —                    | —                        |

- `image.jxl.enabled`
  - : Auf `true` setzen, um zu aktivieren.

#### Document Picture-in-Picture API

Die [Document Picture-in-Picture API](/de/docs/Web/API/Document_Picture-in-Picture_API) ermöglicht es, ein immer oben befindliches Fenster zu öffnen, das mit beliebigem HTML-Inhalt gefüllt werden kann, wie z. B. ein Video mit benutzerdefinierten Steuerungen oder eine Reihe von Streams, die die Teilnehmer eines Videoanrufs zeigen. Siehe [Firefox Bug 1858562](https://bugzil.la/1858562) für weitere Details.

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 148                  | Ja                       |
| Developer Edition | 148                  | Nein                     |
| Beta              | 148                  | Nein                     |
| Release           | 148                  | Nein                     |

- `dom.documentpip.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### WebVR API (Deaktiviert)

Die veraltete [WebVR API](/de/docs/Web/API/WebVR_API) steht kurz vor der Entfernung. Sie ist standardmäßig in allen Builds deaktiviert. [Firefox Bug 1750902](https://bugzil.la/1750902).

| Release-Kanal     | Entfernte Version | Standardmäßig aktiviert? |
| ----------------- | ----------------- | ------------------------ |
| Nightly           | 98                | Nein                     |
| Developer Edition | 98                | Nein                     |
| Beta              | 98                | Nein                     |
| Release           | 98                | Nein                     |

- `dom.vr.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### GeometryUtils-Methoden: convertPointFromNode(), convertRectFromNode(), und convertQuadFromNode()

Die `GeometryUtils`-Methoden `convertPointFromNode()`, `convertRectFromNode()`, und `convertQuadFromNode()` übertragen den gegebenen Punkt, das Rechteck oder das Viereck vom [`Node`](/de/docs/Web/API/Node), auf dem sie aufgerufen werden, auf einen anderen Knoten. (Weitere Details siehe [Firefox Bug 918189](https://bugzil.la/918189)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 31                   | Ja                       |
| Developer Edition | 31                   | Nein                     |
| Beta              | 31                   | Nein                     |
| Release           | 31                   | Nein                     |

- `layout.css.convertFromNode.enable`
  - : Auf `true` setzen, um zu aktivieren.

### GeometryUtils-Methode: getBoxQuads()

Die `GeometryUtils`-Methode `getBoxQuads()` gibt die CSS-Boxen für einen [`Node`](/de/docs/Web/API/Node) relativ zu jedem anderen Knoten oder Viewport zurück. (Weitere Details siehe [Firefox Bug 917755](https://bugzil.la/917755)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 31                   | Ja                       |
| Developer Edition | 31                   | Nein                     |
| Beta              | 31                   | Nein                     |
| Release           | 31                   | Nein                     |

- `layout.css.getBoxQuads.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Payment Request API

#### Primäre Zahlungsabwicklung

Die [Payment Request API](/de/docs/Web/API/Payment_Request_API) bietet Unterstützung für die Abwicklung webbasierter Zahlungen innerhalb von Webinhalten oder Apps. Aufgrund eines Fehlers, der bei Tests der Benutzeroberfläche auftrat, haben wir beschlossen, die Auslieferung dieser API zu verschieben, während Diskussionen über potenzielle Änderungen an der API stattfinden. Arbeiten sind im Gange. (Weitere Details siehe [Firefox Bug 1318984](https://bugzil.la/1318984)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 55                   | Nein                     |
| Developer Edition | 55                   | Nein                     |
| Beta              | 55                   | Nein                     |
| Release           | 55                   | Nein                     |

- `dom.payments.request.enabled`
  - : Auf `true` setzen, um zu aktivieren.
- `dom.payments.request.supportedRegions`
  - : Ländercodes als kommagetrennte Zulassungsliste von Regionen (z. B. `US,CA`).

### WebShare API

Die [Web Share API](/de/docs/Web/API/Web_Share_API) ermöglicht das Teilen von Dateien, URLs und anderen Daten von einer Website aus. Diese Funktion ist auf Android in allen Builds aktiviert, jedoch hinter einer Einstellung auf Desktop (sofern nicht anders angegeben).

| Release-Kanal     | Geänderte Version | Standardmäßig aktiviert?                    |
| ----------------- | ----------------- | ------------------------------------------- |
| Nightly           | 71                | Nein (Standard). Ja (Windows ab Version 92) |
| Developer Edition | 71                | Nein                                        |
| Beta              | 71                | Nein                                        |
| Release           | 71                | Nein (Desktop). Ja (Android).               |

- `dom.webshare.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Screen Orientation API

#### ScreenOrientation.lock()

Die Methode [`ScreenOrientation.lock()`](/de/docs/Web/API/ScreenOrientation/lock) ermöglicht es, ein Gerät auf eine bestimmte Ausrichtung zu sperren, wenn dies vom Gerät unterstützt wird und die Anforderungen vor der Sperrung durch den Browser erfüllt sind. Typischerweise ist das Sperren der Ausrichtung nur auf mobilen Geräten erlaubt, wenn das Dokument im Vollbildmodus angezeigt wird. Siehe [Firefox Bug 1697647](https://bugzil.la/1697647) für weitere Details.

| Release-Kanal     | Geänderte Version | Standardmäßig aktiviert? |
| ----------------- | ----------------- | ------------------------ |
| Nightly           | 111               | Ja                       |
| Developer Edition | 97                | Nein                     |
| Beta              | 97                | Nein                     |
| Release           | 97                | Nein                     |

- `dom.screenorientation.allow-lock`
  - : Auf `true` setzen, um zu aktivieren.

### Notifications API

Benachrichtigungen haben die Eigenschaft [`requireInteraction`](/de/docs/Web/API/Notification/requireInteraction) standardmäßig auf Windows-Systemen und in der Nightly-Version auf `true` gesetzt ([Firefox Bug 1794475](https://bugzil.la/1794475)).

| Release-Kanal     | Geänderte Version | Standardmäßig aktiviert? |
| ----------------- | ----------------- | ------------------------ |
| Nightly           | 117               | Ja                       |
| Developer Edition | 117               | Nein                     |
| Beta              | 117               | Nein                     |
| Release           | 117               | Nur Windows              |

- `dom.webnotifications.requireinteraction.enabled`
  - : Auf `true` setzen, um zu aktivieren.

## Sicherheit und Datenschutz

### Kennzeichnung unsicherer Seiten

Die beiden `security.insecure_connection_text_*`-Einstellungen fügen ein "Nicht sicher"-Textlabel in der Adressleiste neben dem traditionellen Schloss-Symbol hinzu, wenn eine Seite unsicher geladen wird (d.h. unter Verwendung von {{Glossary("HTTP", "HTTP")}} anstatt von {{Glossary("HTTPS", "HTTPS")}}). Die `browser.urlbar.trimHttps`-Einstellung kürzt das `https:`-Präfix aus Adressleisten-URLs. Siehe [Firefox Bug 1853418](https://bugzil.la/1853418) für weitere Details.

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 121                  | Ja                       |
| Developer Edition | 60                   | Nein                     |
| Beta              | 60                   | Nein                     |
| Release           | 60                   | Nein                     |

- `security.insecure_connection_text.enabled`
  - : Auf `true` setzen, um das Textlabel für das normale Browsen zu aktivieren.
- `security.insecure_connection_text.pbmode.enabled`
  - : Auf `true` setzen, um das Textlabel für den privaten Modus zu aktivieren.
- `browser.urlbar.trimHttps`
  - : Auf `true` setzen, um das `https:`-Präfix aus Adressleisten-URLs zu kürzen.

### Einschränkung von Inhalten für Erwachsene mit `<meta name="rating">`

Das nicht standardisierte [`<meta name="rating">`](/de/docs/Web/HTML/Reference/Elements/meta)-Element kann in eine Webseite eingefügt werden, um den Inhalt der Seite als eingeschränkt/erwachsen zu kennzeichnen. Zum Zeitpunkt der Erstellung gibt es zwei mögliche `content`-Werte, `adult` ([definiert von Google](https://developers.google.com/search/docs/specialty/explicit/guidelines#add-metadata)) und `RTA-5042-1996-1400-1577-RTA` ([definiert von ASACP](https://www.rtalabel.org/?content=howto#top)), die die gleiche Wirkung haben (weitere Optionen können in Zukunft hinzugefügt werden).

Die folgenden `<meta>`-Elemente sind gleichwertig:

```html
<meta name="rating" content="adult" />
<meta name="rating" content="RTA-5042-1996-1400-1577-RTA" />
```

Browser, die dieses Element erkennen, können dann Schritte unternehmen, um Benutzern den Zugriff auf den Inhalt zu beschränken. Die Firefox-Implementierung ersetzt die Seite durch den Inhalt, der unter `about:restricted` gefunden wird, wo dem Benutzer erklärt wird, dass er versucht, eingeschränkte Inhalte anzusehen, warum er dies nicht kann, und ihm eine Schaltfläche zum Zurückgehen angeboten wird, damit er von dort zurückkehren kann, woher er kam.

Siehe [Firefox Bug 1991135](https://bugzil.la/1991135) für weitere Details.

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 146                  | Nein                     |
| Developer Edition | 146                  | Nein                     |
| Beta              | 146                  | Nein                     |
| Release           | 146                  | Nein                     |

- `security.restrict_to_adults.always`
  - : Auf `true` setzen, um den Zugriff auf Webseiten zu beschränken, die sich selbst als `adult` identifizieren, indem sie ein `<meta name="rating">`-Element enthalten.
- `security.restrict_to_adults.respect_platform`
  - : Auf `true` setzen, um den Zugriff auf Webseiten zu beschränken, die sich selbst als adult identifizieren, indem sie ein `<meta name="rating">`-Element enthalten, nur wenn angemessene Kindersicherungen auf dem zugrunde liegenden Betriebssystem eingerichtet sind (zum Beispiel die macOS _Content & Privacy_-Einstellungen, um explizite Webinhalte zu beschränken).

### Berechtigungspolitik / Feature Policy

[Berechtigungspolitik](/de/docs/Web/HTTP/Guides/Permissions_Policy) ermöglicht es Webentwicklern, bestimmte Funktionen und APIs im Browser selektiv zu aktivieren, zu deaktivieren oder deren Verhalten zu ändern. Sie ähnelt CSP, kontrolliert jedoch Funktionen anstelle von Sicherheitsverhalten. Diese ist in Firefox als **Feature Policy** implementiert, der Name, der in einer früheren Version der Spezifikation verwendet wurde.

Es ist zu beachten, dass unterstützte Richtlinien durch das [`allow`](/de/docs/Web/HTML/Reference/Elements/iframe#allow)-Attribut auf `<iframe>`-Elementen festgelegt werden können, selbst wenn die Benutzereinstellung nicht gesetzt ist.

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 65                   | Nein                     |
| Developer Edition | 65                   | Nein                     |
| Beta              | 65                   | Nein                     |
| Release           | 65                   | Nein                     |

- `dom.security.featurePolicy.header.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Privacy Preserving Attribution API (PPA)

[PPA API](https://support.mozilla.org/en-US/kb/privacy-preserving-attribution) bietet eine Alternative zum Benutzer-Tracking für Anzeigenattribution durch das neue `navigator.privateAttribution`-Objekt mit `saveImpression()` und `measureConversion()`-Methoden. Lesen Sie mehr über PPA [im ursprünglichen Erklärungsbeitrag](https://github.com/mozilla/explainers/tree/main/archive/ppa-experiment) und die [vorgeschlagene Spezifikation](https://w3c.github.io/ppa/). Dieses Experiment kann für Websites über [origin trial](https://wiki.mozilla.org/Origin_Trials) oder im Browser, indem die Einstellung auf `1` gesetzt wird, aktiviert werden. ([Firefox Bug 1900929](https://bugzil.la/1900929)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 128                  | Nein                     |
| Developer Edition | 128                  | Nein                     |
| Beta              | 128                  | Nein                     |
| Release           | 128                  | Nein                     |

- `dom.origin-trials.private-attribution.state`
  - : Auf `true` setzen, um zu aktivieren.

## HTTP

### Integritätspolitik für Stylesheet-Ressourcen

Die {{httpheader("Integrity-Policy")}} und {{httpheader("Integrity-Policy-Report-Only")}} HTTP-Header werden jetzt für Stilressourcen unterstützt. Damit können Websites entweder [Integritätsschutzgarantien](/de/docs/Web/Security/Defenses/Subresource_Integrity) für Stile erzwingen oder nur Verstöße gegen die Richtlinie melden. Es ist zu beachten, dass Firefox Melde-Endpunkte ignoriert und Verstöße in der Entwicklerkonsole protokolliert. Wenn `Integrity-Policy` verwendet wird, blockiert der Browser das Laden von Stilen, die in einem {{HTMLElement("link")}}-Element mit [`rel="stylesheet"`](/de/docs/Web/HTML/Reference/Attributes/rel#stylesheet) referenziert werden, die entweder das [`integrity`](/de/docs/Web/HTML/Reference/Elements/script#integrity) Attribut nicht enthalten oder einen Integritätshash haben, der nicht mit der Ressource auf dem Server übereinstimmt. ([Firefox Bug 1976656](https://bugzil.la/1976656)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 142                  | Nein                     |
| Developer Edition | 142                  | Nein                     |
| Beta              | 142                  | Nein                     |
| Release           | 142                  | Nein                     |

- `security.integrity_policy.stylesheet.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Storage-Access-Header

Die {{httpheader("Sec-Fetch-Storage-Access")}} und {{httpheader("Activate-Storage-Access")}} HTTP-Header werden jetzt unterstützt und ermöglichen einen effizienteren [Storage Access API](/de/docs/Web/API/Storage_Access_API)-Workflow. ([Firefox Bug 1991688](https://bugzil.la/1991688)).

Im ausschließlich JavaScript-basierten Workflow muss eine Drittanbieter-Ressource angefordert und geladen werden, um eine Storage-Access-Berechtigung für einen bestimmten Kontext (wie einen neuen Browser-Tab) zu aktivieren. Dies ist erforderlich, auch wenn die Berechtigung bereits erteilt wurde. Die Storage-Access-Header ermöglichen es dem Browser, den Berechtigungsstatus für den bestimmten Kontext zu werben, sodass der Server die Aktivierung einer bereits gewährten Berechtigung anfordern kann. Dadurch entfällt der Overhead, die Ressource unnötig abzurufen und zu laden.

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 145                  | Ja                       |
| Developer Edition | 145                  | Nein                     |
| Beta              | 145                  | Nein                     |
| Release           | 145                  | Nein                     |

- `dom.storage_access.headers.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Idempotency-Key

Der {{httpheader("Idempotency-Key")}}-HTTP-Anforderungsheader kann von Website-Clientcode verwendet werden, um eine {{HTTPMethod("POST")}} oder {{HTTPMethod("PATCH")}}-Anfrage {{Glossary("idempotent", "idempotent")}} zu machen, wenn sie mit einem Server verwendet wird, der sie unterstützt. Die Spezifikation besagt, dass der Server dokumentieren und anzeigen sollte, welche Endpunkte diesen Header erfordern, das Format des Schlüssels sowie erwartete Fehlerantworten.

Firefox fügt _automatisch_ den Header mit einem eindeutigen Schlüssel für jede neue `POST`-Anfrage hinzu, wenn er nicht bereits vom seitenspezifischen Code hinzugefügt wurde. Dies vereinfacht den seitenspezifischen Code, der erforderlich ist, um mit Servern zu arbeiten, die die Funktion unterstützen.

([Firefox Bug 1830022](https://bugzil.la/1830022)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 135                  | Nein                     |
| Developer Edition | 135                  | Nein                     |
| Beta              | 135                  | Nein                     |
| Release           | 135                  | Nein                     |

- `network.http.idempotencyKey.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Accept-Header mit MIME-Typ image/jxl

Der HTTP [`Accept`](/de/docs/Web/HTTP/Reference/Headers/Accept)-Header in [Standardanforderungen und Bildanforderungen](/de/docs/Web/HTTP/Guides/Content_negotiation/List_of_default_Accept_values) kann über eine Einstellung konfiguriert werden, um Unterstützung für den `image/jxl` MIME-Typ anzuzeigen.

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 128                  | Nein                     |
| Developer Edition | 128                  | Nein                     |
| Beta              | 128                  | Nein                     |
| Release           | 128                  | Nein                     |

- `image.jxl.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### SameSite=Lax als Standard

[`SameSite` Cookies](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) haben einen Standardwert von `Lax`. Mit dieser Einstellung werden Cookies nur gesendet, wenn ein Benutzer zur Ursprungsseite navigiert, nicht aber für plattformübergreifende Unteranfragen, um Bilder oder Frames in eine Drittanbieter-Website zu laden usw. Weitere Details siehe [Firefox Bug 1617609](https://bugzil.la/1617609).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 69                   | Nein                     |
| Developer Edition | 69                   | Nein                     |
| Beta              | 69                   | Nein                     |
| Release           | 69                   | Nein                     |

- `network.cookie.sameSite.laxByDefault`
  - : Auf `true` setzen, um zu aktivieren.

### Access-Control-Allow-Headers-Wildcard umfasst nicht Authorization

Der [`Access-Control-Allow-Headers`](/de/docs/Web/HTTP/Reference/Headers/Access-Control-Allow-Headers)-Header ist eine Antwort auf eine {{Glossary("Preflight_request", "CORS-Vorab-Überprüfung")}}, die angibt, welche Anforderungsheader in der endgültigen Anfrage enthalten sein dürfen. Die Antwortanweisung kann ein Wildcard (`*`) enthalten, was angibt, dass die endgültige Anforderung alle Header außer dem `Authorization`-Header enthalten darf.

Standardmäßig schließt Firefox den `Authorization`-Header in die endgültige Anforderung ein, nachdem eine Antwort mit `Access-Control-Allow-Headers: *` empfangen wurde. Setzen Sie die Einstellungs auf `false`, um sicherzustellen, dass Firefox den `Authorization`-Header nicht einschließt. Weitere Details siehe [Firefox Bug 1687364](https://bugzil.la/1687364).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 115                  | Ja                       |
| Developer Edition | 115                  | Ja                       |
| Beta              | 115                  | Ja                       |
| Release           | 115                  | Ja                       |

- `network.cors_preflight.authorization_covered_by_wildcard`
  - : Auf `true` setzen, um zu aktivieren.

## Entwickler-Tools

Die Entwickler-Tools von Mozilla entwickeln sich ständig weiter. Wir experimentieren mit neuen Ideen, fügen neue Funktionen hinzu und testen sie auf den Kanälen Nightly und Developer Edition, bevor wir sie zum Beta- und Release-Kanal durchlaufen lassen. Die untenstehenden Funktionen sind die aktuellen experimentellen Entwickler-Tool-Funktionen.

**Keine experimentellen Funktionen in diesem Entwicklungszyklus.**

## Siehe auch

- [Firefox Entwickler Versionshinweise](/de/docs/Mozilla/Firefox/Releases)
- [Firefox Nightly](https://www.firefox.com/en-US/channel/desktop/)
- [Firefox Developer Edition](https://www.firefox.com/en-US/channel/desktop/developer/)
