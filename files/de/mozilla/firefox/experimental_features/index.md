---
title: Experimentelle Funktionen in Firefox
short-title: Experimentelle Funktionen
slug: Mozilla/Firefox/Experimental_features
l10n:
  sourceCommit: ca93613d23aef19ea80f1e0b34eab44e5faf54d1
---

Diese Seite listet die experimentellen und teilweise implementierten Funktionen von Firefox auf, einschließlich sich entwickelnder oder vorgeschlagener Web-Plattform-Standards.
Jeder Eintrag unten enthält Informationen zu den Builds, in denen eine Funktion enthalten ist (Nightly, Beta, Developer Edition oder Release), ob sie standardmäßig aktiviert ist oder nicht und den Namen der **Präferenz**, die Sie verwenden können, um die Funktion zu aktivieren oder zu konfigurieren.
Die Beschreibung jeder Funktion enthält auch Links zu relevanten [Bugzilla-Bugs](https://bugzilla.mozilla.org), die die Funktion implementieren oder aktivieren.
Diese Informationen ermöglichen es Ihnen, experimentelle Funktionen auszuprobieren und Feedback zu geben, bevor sie offiziell veröffentlicht werden.

In Bezug auf den Lebenszyklus erscheinen neue Funktionen normalerweise zuerst in [Nightly](https://www.firefox.com/en-US/channel/desktop/#nightly), wo sie oft standardmäßig aktiviert sind, um frühzeitiges Feedback und Tests zu ermöglichen.
Wenn keine größeren Probleme gefunden werden, werden sie in den [Beta](https://www.firefox.com/en-US/channel/desktop/#beta)- und [Developer Edition](https://www.firefox.com/en-US/channel/desktop/developer/)-Pre-Release-Builds aufgenommen. Schließlich werden genehmigte Funktionen im [Stable Release](https://www.firefox.com/en-US/) Channel veröffentlicht.
Wenn eine Funktion in einem Release standardmäßig aktiviert ist, wird sie nicht mehr als experimentell betrachtet und von dieser Seite entfernt.

Um diese Funktionen zu aktivieren, geben Sie `about:config` in die Firefox-Adressleiste ein, suchen Sie nach der zugehörigen **Präferenz** und ändern Sie ihren Wert, der normalerweise ein Umschalten zwischen `true` und `false` ist.
Je nach Funktion müssen Sie den Browser möglicherweise neu starten, damit die Änderung wirksam wird.
Schauen Sie sich den [Firefox Configuration Editor](https://support.mozilla.org/en-US/kb/about-config-editor-firefox) Support-Artikel für weitere Informationen zum Verwalten von Präferenzen in Firefox an.

## HTML

### Layout für input type="search"

Das Layout für `input type="search"` wurde aktualisiert. Dadurch hat ein Suchfeld ein Löschsymbol, sobald jemand mit der Eingabe beginnt, um andere Browser-Implementierungen zu matchen. (Weitere Details finden Sie im [Firefox-Bug 558594](https://bugzil.la/558594).)

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 81                   | Nein                     |
| Developer Edition | 81                   | Nein                     |
| Beta              | 81                   | Nein                     |
| Release           | 81                   | Nein                     |

- `layout.forms.input-type-search.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Passwortanzeige umschalten

HTML-Passworteingabeelemente ([`<input type="password">`](/de/docs/Web/HTML/Reference/Elements/input/password)) enthalten ein "Auge"-Symbol, das umgeschaltet werden kann, um den Passworttext anzuzeigen oder zu verbergen ([Firefox-Bug 502258](https://bugzil.la/502258)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 96                   | Nein                     |
| Developer Edition | 96                   | Nein                     |
| Beta              | 96                   | Nein                     |
| Release           | 96                   | Nein                     |

- `layout.forms.reveal-password-button.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

## CSS

### Hex-Boxen zur Darstellung überzähliger Steuerzeichen

Diese Funktion rendert Steuerzeichen (Unicode-Kategorie Cc) außer _Tabulator_ (`U+0009`), _Zeilenumbruch_ (`U+000A`), _Form Feed_ (`U+000C`) und _Wagenrücklauf_ (`U+000D`) als Hex-Box, wenn sie nicht erwartet werden. (Weitere Details finden Sie im [Firefox-Bug 1099557](https://bugzil.la/1099557).)

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 43                   | Ja                       |
| Developer Edition | 43                   | Nein                     |
| Beta              | 43                   | Nein                     |
| Release           | 43                   | Nein                     |

- `layout.css.control-characters.visible`
  - : Setzen Sie auf `true`, um zu aktivieren.

### initial-letter Eigenschaft

Die {{cssxref("initial-letter")}} CSS-Eigenschaft ist Teil der [CSS Inline Layout](https://drafts.csswg.org/css-inline/)-Spezifikation und ermöglicht es, festzulegen, wie abgehängte, angehobene und abgesenkte Initialbuchstaben angezeigt werden. (Weitere Details finden Sie im [Firefox-Bug 1223880](https://bugzil.la/1223880).)

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 50                   | Nein                     |
| Developer Edition | 50                   | Nein                     |
| Beta              | 50                   | Nein                     |
| Release           | 50                   | Nein                     |

- `layout.css.initial-letter.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### fit-content() Funktion

Die {{cssxref("fit-content_function", "fit-content()")}}-Funktion, wie sie für {{cssxref("width")}} und andere Größenangaben gilt. Diese Funktion wird bereits gut für die Größenbestimmung von CSS Grid Layout-Tracks unterstützt. (Weitere Details finden Sie im [Firefox-Bug 1312588](https://bugzil.la/1312588).)

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 91                   | Nein                     |
| Developer Edition | 91                   | Nein                     |
| Beta              | 91                   | Nein                     |
| Release           | 91                   | Nein                     |

- `layout.css.fit-content-function.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Scroll-gesteuerte Animationen

Früher als "scroll-verknüpfte Animationen" bezeichnet, hängt eine [scroll-gesteuerte Animation](/de/docs/Web/CSS/CSS_scroll-driven_animations) von der Scrollposition eines Scrollbalkens ab, anstatt von der Zeit oder einer anderen Dimension.
Die {{cssxref('scroll-timeline-name')}} und {{cssxref('scroll-timeline-axis')}} Eigenschaften (und die {{cssxref('scroll-timeline')}} Abkürzungseigenschaft) erlauben es Ihnen, anzugeben, dass ein bestimmter Scrollbalken in einem speziell benannten Container als Quelle für eine scroll-gesteuerte Animation verwendet werden kann.
Die Scroll-Zeitleiste kann dann mit einer [Animation](/de/docs/Web/CSS/CSS_animations) verknüpft werden, indem die {{cssxref('animation-timeline')}} Eigenschaft auf den Namen gesetzt wird, der mit `scroll-timeline-name` definiert wurde.

Beim Verwenden der {{cssxref('scroll-timeline')}} Abkürzungseigenschaft muss die Reihenfolge der Eigenschaftswerte {{cssxref('scroll-timeline-name')}} gefolgt von {{cssxref('scroll-timeline-axis')}} sein.
Die Lang- und Kurzschreibweise sind beide hinter der Präferenz verfügbar.
Alternativ können Sie die [`scroll()`](/de/docs/Web/CSS/animation-timeline/scroll) funktionale Notation mit {{cssxref('animation-timeline')}} verwenden, um anzuzeigen, dass eine Scrollbalkenachse in einem Vorfahrelement für die Zeitleiste verwendet wird.

Für mehr Informationen siehe [Firefox-Bug 1807685](https://bugzil.la/1807685), [Firefox-Bug 1804573](https://bugzil.la/1804573), [Firefox-Bug 1809005](https://bugzil.la/1809005), [Firefox-Bug 1676791](https://bugzil.la/1676791), [Firefox-Bug 1754897](https://bugzil.la/1754897), [Firefox-Bug 1817303](https://bugzil.la/1817303), und [Firefox-Bug 1737918](https://bugzil.la/1737918).

Die {{cssxref('timeline-scope')}}, {{cssxref('animation-range-start')}} und {{cssxref('animation-range-end')}} Eigenschaften (und die {{cssxref('animation-range')}} Abkürzungseigenschaft) werden noch nicht unterstützt. Für mehr Informationen siehe [Firefox-Bug 1676779](https://bugzil.la/1676779).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 136                  | Ja                       |
| Developer Edition | 110                  | Nein                     |
| Beta              | 110                  | Nein                     |
| Release           | 110                  | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### @scope Regel

Die [@scope](/de/docs/Web/CSS/@scope) [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) ermöglicht es, spezifische Kindelemente auszuwählen, ohne die Spezifität von CSS-Selektoren übermäßig zu erhöhen ([Firefox-Bug 1886441](https://bugzil.la/1886441)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 137                  | Ja                       |
| Developer Edition | 128                  | Nein                     |
| Beta              | 128                  | Nein                     |
| Release           | 128                  | Nein                     |

- `layout.css.at-scope.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### prefers-reduced-transparency Medienmerkmal

Das CSS [`prefers-reduced-transparency`](/de/docs/Web/CSS/@media/prefers-reduced-transparency) Medienmerkmal ermöglicht es, zu erkennen, ob ein Benutzer die Einstellung aktiviert hat, die die Menge an transparenten oder transluzenten Schichteffekten auf ihrem Gerät minimiert.
Für weitere Details siehe [Firefox-Bug 1736914](https://bugzil.la/1736914).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 113                  | Nein                     |
| Developer Edition | 113                  | Nein                     |
| Beta              | 113                  | Nein                     |
| Release           | 113                  | Nein                     |

- `layout.css.prefers-reduced-transparency.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### inverted-colors Medienmerkmal

Das CSS [`inverted-colors`](/de/docs/Web/CSS/@media/inverted-colors) Medienmerkmal ermöglicht zu erkennen, ob ein Benutzeragent oder das darunter liegende Betriebssystem die Farben umkehrt.
Für weitere Details siehe [Firefox-Bug 1794628](https://bugzil.la/1794628).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 114                  | Nein                     |
| Developer Edition | 114                  | Nein                     |
| Beta              | 114                  | Nein                     |
| Release           | 114                  | Nein                     |

- `layout.css.inverted-colors.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Named view progress timelines property

Die CSS [`view-timeline-name`](/de/docs/Web/CSS/view-timeline-name) Eigenschaft ermöglicht es, einem speziellen Element einen Namen zu geben, das angibt, dass sein Vorfahren-Scroller-Element die Quelle einer View-Progress-Timeline ist.
Der Name kann dann `animation-timeline` zugewiesen werden, das dann das zugehörige Element animiert, während es durch den sichtbaren Bereich seines Vorfahren-Scrollers läuft.
Für weitere Details siehe [Firefox-Bug 1737920](https://bugzil.la/1737920).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 114                  | Nein                     |
| Developer Edition | 114                  | Nein                     |
| Beta              | 114                  | Nein                     |
| Release           | 114                  | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Anonymous view progress timelines function

Die CSS [`view()`](/de/docs/Web/CSS/animation-timeline/view) Funktion ermöglicht es, anzugeben, dass die `animation-timeline` für ein Element eine View-Progress-Timeline ist, die das Element animiert, während es durch den sichtbaren Bereich seines Vorfahren-Scrollers läuft.
Die Funktion definiert die Achse des Elternelements, die die Zeitleiste liefert, zusammen mit dem Einsatz in der sichtbaren Fläche, bei dem die Animation beginnt und endet.
Für weitere Details siehe [Firefox-Bug 1808410](https://bugzil.la/1808410).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 114                  | Nein                     |
| Developer Edition | 114                  | Nein                     |
| Beta              | 114                  | Nein                     |
| Release           | 114                  | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Vendor-Präfix-Transform-Eigenschaften

Die `-moz-`-präfixierten [CSS transform](/de/docs/Web/CSS/CSS_transforms) Eigenschaften können deaktiviert werden, indem die Präferenz `layout.css.prefixes.transforms` auf `false` gesetzt wird. Die Absicht ist, diese zu deaktivieren, sobald die Standard-CSS-Zoomeigenschaften gut unterstützt werden. ([Firefox-Bug 1886134](https://bugzil.la/1886134), [Firefox-Bug 1855763](https://bugzil.la/1855763)).

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

### `shape()` Funktion

Die CSS [`shape()`](/de/docs/Web/CSS/basic-shape/shape) Funktion ist ein [`<basic-shape>`](/de/docs/Web/CSS/basic-shape) Datentyp, der es ermöglicht, eine Form in den Eigenschaften {{cssxref("clip-path")}} und {{cssxref("offset-path")}} mit einem oder mehreren "Form-Befehlen" zu definieren. Diese Befehle sind den [SVG-Pfadbefehlen](/de/docs/Web/SVG/Reference/Attribute/d#path_commands) sehr ähnlich. Die `shape()` Funktion ähnelt in gewisser Hinsicht der {{cssxref("basic-shape/path","path()")}} Funktion, aber im Gegensatz zu `path()`, das die [SVG-Pfad](/de/docs/Web/SVG/Reference/Element/path) Syntax verwendet, verwendet `shape()` die Standard-CSS Syntax. Dies ermöglicht es Ihnen, Formen einfach zu erstellen und zu bearbeiten und auch CSS-Math-Funktionen zu verwenden.
Für weitere Details siehe [Firefox-Bug 1823463](https://bugzil.la/1823463) für die Unterstützung der `shape()` Funktion in `clip-path`, [Firefox-Bug 1884424](https://bugzil.la/1884424) für die Unterstützung der Funktion in `offset-path`, und [Firefox-Bug 1884425](https://bugzil.la/1884425) für ihre Interpolationsunterstützung.

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 126                  | Ja                       |
| Developer Edition | 126                  | Nein                     |
| Beta              | 126                  | Nein                     |
| Release           | 126                  | Nein                     |

- `layout.css.basic-shape-shape.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Symmetrisches `letter-spacing`

Die CSS {{cssxref("letter-spacing")}} Eigenschaft teilt jetzt den angegebenen Buchstabenabstand gleichmäßig auf beiden Seiten jedes Zeichens auf. Dies unterscheidet sich vom aktuellen Verhalten, bei dem der Abstand hauptsächlich zu einer Seite hinzugefügt wird. Dieser Ansatz kann die Textabstandseffekte verbessern, insbesondere bei gemischtrichtungsorientiertem Text [Firefox-Bug 1891446](https://bugzil.la/1891446).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 128                  | Ja                       |
| Developer Edition | 128                  | Ja                       |
| Beta              | 127                  | Nein                     |
| Release           | 127                  | Nein                     |

- `layout.css.letter-spacing.model`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Support von `calc()` Farbkanälen in relativen Farben

Die CSS [`calc()`](/de/docs/Web/CSS/calc) Funktion kann jetzt Farbkanäle in [relativen Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors#using_math_functions) analysieren, was Ihnen ermöglicht, Änderungen an Farben in verschiedenen Farbräumen korrekt zu berechnen oder während der Verwendung verschiedener funktionaler Notationen [Firefox-Bug 1889561](https://bugzil.la/1889561).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 127                  | Ja                       |
| Developer Edition | 127                  | Nein                     |
| Beta              | 127                  | Nein                     |
| Release           | 127                  | Nein                     |

- `layout.css.relative-color-syntax.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### CSS Ankerpositionierung

Das [CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul definiert eine Reihe von Features, mit denen Elemente als Ankerelemente definiert werden können, und andere Elemente relativ zu Ankerelementen positioniert werden können.
Dies ermöglicht es beispielsweise, Tooltips anzuzeigen, die zusammen mit dem zugehörigen Inhalt angezeigt werden, während es durch den Viewport scrollt, und bei Bedarf zu verschieben, wenn es den Viewport überlaufen würde, und zu verschwinden, wenn der Ankerbildschirm verlassen wird.
Die Features werden schrittweise hinter einer Präferenz eingeführt ([Firefox-Bug 1838746](https://bugzil.la/1838746)).

Die Teile, die implementiert wurden, umfassen [`CSSPositionTryRule`](/de/docs/Web/API/CSSPositionTryRule) und [`CSSPositionTryDescriptors`](/de/docs/Web/API/CSSPositionTryDescriptors) (Firefox 131).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 131                  | Nein                     |
| Developer Edition | 131                  | Nein                     |
| Beta              | 131                  | Nein                     |
| Release           | 131                  | Nein                     |

- `layout.css.anchor-positioning.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### `::details-content` Pseudoelement

Das CSS {{cssxref("::details-content")}} Pseudoelement ermöglicht es, den Inhalt des {{htmlElement("details")}} Elements zu stylen ([Firefox-Bug 1901037](https://bugzil.la/1901037)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 138                  | Nein                     |
| Developer Edition | 138                  | Nein                     |
| Beta              | 138                  | Nein                     |
| Release           | 138                  | Nein                     |

- `layout.css.details-content.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Pseudoelemente nach elementgebundenen Pseudoelementen erlauben

Es wurde begonnen, Pseudoelemente wie {{cssxref("::first-letter")}} und {{cssxref("::before")}} zu ermöglichen, an elementgebundene Pseudoelemente wie {{cssxref("::details-content")}} und {{cssxref("::file-selector-button")}} angehängt zu werden.

Dies wird es Benutzern ermöglichen, zum Beispiel, das erste Zeichen des {{htmlElement("details")}} Elements zu stylen, indem sie den CSS-Selektor `::details-content::first-letter` verwenden oder Inhalt vor einem {{HTMLElement("input") }} of [`type="file"`](/de/docs/Web/HTML/Reference/Elements/input/file) hinzufügen, indem sie den CSS-Selektor `::file-selector-button::before` verwenden.

Derzeit kann nur die Unterstützung für `::details-content::first-letter` geparst werden, indem `@supports(::details-content::first-letter)` verwendet wird und die Präferenz für [::details-content Pseudoelement](#details-content_pseudo-element) aktiviert werden muss, um dies zu testen. Das `::file-selector-button` Pseudoelement ist derzeit noch nicht als elementgebundenes Pseudoelement markiert, sodass es keine aktuelle Möglichkeit gibt, dies zu testen. ([Firefox-Bug 1953557](https://bugzil.la/1953557)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 138                  | Nein                     |
| Developer Edition | 138                  | Nein                     |
| Beta              | 138                  | Nein                     |
| Release           | 138                  | Nein                     |

- `layout.css.details-content.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### `:active-view-transition` Pseudoklasse

Die CSS {{CSSXRef(":active-view-transition")}} Pseudoklasse ermöglicht es, den Inhalt während einer [View-Transition](/de/docs/Web/API/View_Transition_API) in einer Single-Page-App (SPA) zu stylen. ([Firefox-Bug 1956140](https://bugzil.la/1956140)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 141                  | Ja                       |
| Developer Edition | 141                  | Nein                     |
| Beta              | 141                  | Nein                     |
| Release           | -                    | Nein                     |

- `dom.viewTransitions.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

## SVG

**Keine experimentellen Funktionen in diesem Release-Zyklus.**

## JavaScript

### Atomics.waitAsync()

Die statische Methode {{jsxref("Atomics.waitAsync()")}} wartet asynchron an einem gemeinsam genutzten Speicherort und gibt ein Objekt zurück, das das Ergebnis des Vorgangs darstellt.
Sie ist nicht blockierend und kann im Hauptthread verwendet werden. ([Firefox-Bug 1467846](https://bugzil.la/1467846)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 140                  | Nein                     |
| Developer Edition | 140                  | Nein                     |
| Beta              | 140                  | Nein                     |
| Release           | 140                  | Nein                     |

- `javascript.options.atomics_wait_async`
  - : Setzen Sie auf `true`, um zu aktivieren.

## APIs

### CloseWatcher Schnittstelle

Integrierte Webkomponenten mit "Öffnen"- und "Schließen"-Semantik, wie modale Dialoge und Popovers, können mit geräteeigenen Mechanismen geschlossen werden.
Zum Beispiel können Sie auf Android einen Dialog mit der Zurück-Taste schließen.
Die [`CloseWatcher`](/de/docs/Web/API/CloseWatcher) Schnittstelle ermöglicht es Entwicklern, UI-Komponenten zu erstellen, wie benutzerdefinierte Sidebars, die ähnlich mit nativen Mechanismen geschlossen werden können.
([Firefox-Bug 1888729](https://bugzil.la/1888729)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert?      |
| ----------------- | -------------------- | ----------------------------- |
| Nightly           | 140                  | Ja (Desktop). Nein (Android). |
| Developer Edition | 132                  | Nein                          |
| Beta              | 132                  | Nein                          |
| Release           | 132                  | Nein                          |

- `dom.closewatcher.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Trusted Types API

Die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) bietet Mechanismen, um sicherzustellen, dass Funktionen, die potenziell als Vektoren für XSS-Angriffe genutzt werden können, nur mit validierten oder bereinigten Daten aufgerufen werden können.

> [!NOTE]
> Zum Zeitpunkt der Erstellung sind nicht genug der API implementiert, um sie effektiv testen zu können.
> Diese Anmerkung wird entfernt, sobald sie einsatzbereit ist.

Dieser Teil der API wurde implementiert:

- [`TrustedTypePolicyFactory`](/de/docs/Web/API/TrustedTypePolicyFactory):
  - [`getAttributeType()`](/de/docs/Web/API/TrustedTypePolicyFactory/getAttributeType) und [`getPropertyType()`](/de/docs/Web/API/TrustedTypePolicyFactory/getPropertyType) ([Firefox-Bug 1917783](https://bugzil.la/1917783), [Firefox-Bug 1917784](https://bugzil.la/1917784)).
- Die Methoden [`write()`](/de/docs/Web/API/Document/write) und [`writeln()`](/de/docs/Web/API/Document/writeln) der [`Document`](/de/docs/Web/API/Document) Schnittstelle akzeptieren jetzt [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) Objekte als Parameter, zusätzlich zu Strings. ([Firefox-Bug 1906301](https://bugzil.la/1906301)).
- Die Eigenschaften [`text`](/de/docs/Web/API/HTMLScriptElement/text), [`innerText`](/de/docs/Web/API/HTMLElement/innerText) und [`textContent`](/de/docs/Web/API/Node/textContent) der [`HTMLScriptElement`](/de/docs/Web/API/HTMLScriptElement) Schnittstelle akzeptieren jetzt [`TrustedScript`](/de/docs/Web/API/TrustedScript) Objekte als Wert, während [`src`](/de/docs/Web/API/HTMLScriptElement/src) [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL) Werte akzeptiert. ([Firefox-Bug 1905706](https://bugzil.la/1905706)).
- Die Methoden [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval) und [`Window.setTimeout()`](/de/docs/Web/API/Window/setTimeout) können mit einem [`TrustedScript`](/de/docs/Web/API/TrustedScript) aufgerufen werden. ([Firefox-Bug 1931290](https://bugzil.la/1931290)).
- Die globale Eigenschaft [`trustedTypes`](/de/docs/Web/API/Window/trustedTypes) ist für den Zugriff auf die Trusted Types API verfügbar.
- Die Eigenschaften [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) und [`ShadowRoot.innerHTML`](/de/docs/Web/API/ShadowRoot/innerHTML) können mit [vertrauenswürdigen Typen](/de/docs/Web/API/Trusted_Types_API) aufgerufen werden.

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 133                  | Nein                     |
| Developer Edition | 133                  | Nein                     |
| Beta              | 133                  | Nein                     |
| Release           | 133                  | Nein                     |

- `dom.security.trusted_types.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### HTML Sanitizer API

Die [HTML Sanitizer API](/de/docs/Web/API/HTML_Sanitizer_API) ermöglicht Entwicklern, unzuverlässige HTML-Strings zu nehmen und sie sicher für die Einfügung in das DOM eines Dokuments zu bereinigen.

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 138                  | Nein                     |
| Developer Edition | 138                  | Nein                     |
| Beta              | 138                  | Nein                     |
| Release           | 138                  | Nein                     |

- `dom.security.sanitizer.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Entfernung der `beforescriptexecute` und `afterscriptexecute` Ereignisse

Die nicht standardmäßigen Ereignisse [`beforescriptexecute`](/de/docs/Web/API/Document/beforescriptexecute_event) und [`afterscriptexecute`](/de/docs/Web/API/Document/afterscriptexecute_event) auf der [`Document`](/de/docs/Web/API/Document) Schnittstelle, und [`afterscriptexecute`](/de/docs/Web/API/Element/afterscriptexecute_event) und [`beforescriptexecute`](/de/docs/Web/API/Element/beforescriptexecute_event) auf der [`Element`](/de/docs/Web/API/Element) Schnittstelle sind auf dem Weg zur Entfernung. Sie sind in Nightly deaktiviert.
([Firefox-Bug 1954685](https://bugzil.la/1954685)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 139                  | Nein                     |
| Developer Edition | 139                  | Ja                       |
| Beta              | 139                  | Ja                       |
| Release           | 139                  | Ja                       |

- `dom.events.script_execute.enable`
  - : Setzen Sie auf `true`, um zu aktivieren.

### PerformanceEventTiming.interactionId

[`PerformanceEventTiming.interactionId`](/de/docs/Web/API/PerformanceEventTiming/interactionId) kann verwendet werden, um Latenzzeiten für Ereignisse zu messen, die durch eine bestimmte Benutzerinteraktion ausgelöst werden. ([Firefox-Bug 1934683](https://bugzil.la/1934683)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 138                  | Nein                     |
| Developer Edition | 138                  | Nein                     |
| Beta              | 138                  | Nein                     |
| Release           | 138                  | Nein                     |

- `dom.performance.event_timing.enable_interactionid`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Benachrichtigungsaktionen und maxActions Eigenschaften

Die schreibgeschützte Eigenschaft [`actions`](/de/docs/Web/API/Notification/actions) und die statische schreibgeschützte Eigenschaft [`maxActions`](/de/docs/Web/API/Notification/maxActions_static) der [`Notification`](/de/docs/Web/API/Notification) Schnittstelle werden in Nightly auf dem Desktop unterstützt.
Diese enthalten die Benachrichtigungsaktionen, die mit [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification) festgelegt wurden, und die maximale Anzahl von Aktionen, die festgelegt werden können.
([Firefox-Bug 1225110](https://bugzil.la/1225110), [Firefox-Bug 1963263](https://bugzil.la/1963263)).

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

Wenn diese Präferenz aktiviert ist, werden alle WebGL-Erweiterungen, die sich derzeit im "Entwurf"-Status befinden und getestet werden, zur Verwendung aktiviert. Derzeit werden keine WebGL-Erweiterungen von Firefox getestet.

#### WebGPU API

Die [WebGPU API](/de/docs/Web/API/WebGPU_API) bietet Low-Level-Unterstützung für die Durchführung von Berechnungen und Grafikwiedergabe mit der [Graphics Processing Unit](https://en.wikipedia.org/wiki/Graphics_Processing_Unit) (GPU) des Benutzergeräts oder Computers.
Ab Version 142 ist dies unter Windows in allen Kontexten außer Dienst-Arbeitern aktiviert.
Für andere Plattformen ist es in Nightly aktiviert.
Siehe [Firefox-Bug 1602129](https://bugzil.la/1602129) für unseren Fortschritt bei dieser API.

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert?                     |
| ----------------- | -------------------- | -------------------------------------------- |
| Nightly           | 141                  | Ja                                           |
| Developer Edition | 141                  | Nein (Ja auf Windows, außer Dienst-Arbeiter) |
| Beta              | 141                  | Nein (Ja auf Windows, außer Dienst-Arbeiter) |
| Release           | 141                  | Nein (Ja auf Windows, außer Dienst-Arbeiter) |

- `dom.webgpu.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren (aktiviert in Nightly und auf Windows in allen Versionen)
- `dom.webgpu.service-workers.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren (aktiviert in Nightly)

### Reporting API Unterstützung für CSP-Verstöße

Die [Reporting API](/de/docs/Web/API/Reporting_API) unterstützt jetzt das Melden von [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) Verstößen.

[`Report`](/de/docs/Web/API/Report) Instanzen, die von der [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) Schnittstelle zurückgegeben werden, können jetzt einen `type` Wert von `"csp-violation"` und eine `body` Eigenschaft haben, die eine Instanz der [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody) Schnittstelle enthält.
Dies ermöglicht es, CSP-Verstöße innerhalb einer Webseite zu melden.

CSP-Verstoßmeldungen können auch an entfernte Endpunkte gesendet werden, die im CSP {{CSP("report-to")}} Direktive angegeben sind—Endpunktnamen und entsprechende URLs müssen zuerst in den {{httpheader('Reporting-Endpoints')}} oder {{httpheader('Report-To')}} HTTP-Antwortheadern definiert werden.
Der Bericht ist eine Serialisierung des oben beschriebenen [`Report`](/de/docs/Web/API/Report) Objekts, mit einer `body` Eigenschaft, die eine Serialisierung einer [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody) Instanz ist.

Dieser Verstoßbericht ersetzt einen ähnlichen CSP-spezifischen Mechanismus zum Senden von Verstoßberichten, der die CSP {{CSP("report-uri")}} Direktive verwendet, um die URL des Berichtsendpunkts festzulegen, und ein [CSP-spezifisches JSON-Verstoßberichtsformat](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/report-uri#violation_report_syntax) hat.
([Firefox-Bug 1391243](https://bugzil.la/1391243)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 130                  | Nein                     |
| Developer Edition | 130                  | Nein                     |
| Beta              | 130                  | Nein                     |
| Release           | 130                  | Nein                     |

- `dom.reporting.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### WebRTC und Media

Die folgenden experimentellen Funktionen umfassen jene, die in der [WebRTC API](/de/docs/Web/API/WebRTC_API), der [Web Audio API](/de/docs/Web/API/Web_Audio_API), der [Media Source Extensions API](/de/docs/Web/API/Media_Source_Extensions_API), der [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API) und der [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) gefunden werden.

#### Asynchrone SourceBuffer hinzufügen und entfernen

Dies fügt die promise-basierten Methoden [`appendBufferAsync()`](/de/docs/Web/API/SourceBuffer/appendBufferAsync) und [`removeAsync()`](/de/docs/Web/API/SourceBuffer/removeAsync) zum Hinzufügen und Entfernen von Mediensource-Puffern zur [`SourceBuffer`](/de/docs/Web/API/SourceBuffer) Schnittstelle hinzu. Weitere Informationen finden Sie in [Firefox-Bug 1280613](https://bugzil.la/1280613) und [Firefox-Bug 778617](https://bugzil.la/778617).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 62                   | Nein                     |
| Developer Edition | 62                   | Nein                     |
| Beta              | 62                   | Nein                     |
| Release           | 62                   | Nein                     |

- `media.mediasource.experimental.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

#### AVIF-Konformität Strenge

Die `image.avif.compliance_strictness` Präferenz kann verwendet werden, um die _Strenge_ zu kontrollieren, die beim Verarbeiten von [AVIF](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) Bildern angewendet wird.
Dies ermöglicht es Firefox-Nutzern, Bilder anzuzeigen, die in einigen anderen Browsern gerendert werden, auch wenn sie nicht streng konform sind.

| Release-Kanal     | Hinzugefügte Version | Standardwert |
| ----------------- | -------------------- | ------------ |
| Nightly           | 92                   | 1            |
| Developer Edition | 92                   | 1            |
| Beta              | 92                   | 1            |
| Release           | 92                   | 1            |

- `image.avif.compliance_strictness`
  - : Numerischer Wert, der ein _Strenge_ Niveau angibt. Erlaubte Werte sind:
    - `0`: Lax. Akzeptiere Bilder mit Spezifikationsverletzungen sowohl in Empfehlungen ("sollte"-Sprache) als auch in Anforderungen ("muss"-Sprache), sofern sie sicher oder eindeutig interpretiert werden können.
    - `1` **(Standard)**: Gemischt. Verweigere Verletzungen von Anforderungen ("muss"), aber erlaube Verletzungen von Empfehlungen ("sollte").
    - `2`: Streng. Verweigere jegliche Verletzungen der spezifizierten Anforderungen oder Empfehlungen.

#### JPEG XL Unterstützung

Firefox unterstützt [JPEG XL](https://jpeg.org/jpegxl/) Bilder, wenn diese Funktion aktiviert ist.
Weitere Details finden Sie im [Firefox-Bug 1539075](https://bugzil.la/1539075).

Beachten Sie, dass, wie unten gezeigt, die Funktion nur in Nightly-Builds verfügbar ist (unabhängig davon, ob die Präferenz gesetzt ist).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 90                   | Nein                     |
| Developer Edition | —                    | —                        |
| Beta              | —                    | —                        |
| Release           | —                    | —                        |

- `image.jxl.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### WebVR API

#### WebVR API (Deaktiviert)

Die veraltete [WebVR API](/de/docs/Web/API/WebVR_API) ist auf dem Weg zur Entfernung.
Sie ist in allen Builds standardmäßig deaktiviert [Firefox-Bug 1750902](https://bugzil.la/1750902).

| Release-Kanal     | Entfernungsversion | Standardmäßig aktiviert? |
| ----------------- | ------------------ | ------------------------ |
| Nightly           | 98                 | Nein                     |
| Developer Edition | 98                 | Nein                     |
| Beta              | 98                 | Nein                     |
| Release           | 98                 | Nein                     |

- `dom.vr.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

#### HTMLMediaElement Eigenschaften: audioTracks und videoTracks

Durch Aktivierung dieser Funktion werden die Eigenschaften [`HTMLMediaElement.audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks) und [`HTMLMediaElement.videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks) zu allen HTML-Medienelementen hinzugefügt. Da Firefox jedoch derzeit nicht mehrere Audio- und Videotracks unterstützt, funktionieren die häufigsten Anwendungsfälle für diese Eigenschaften nicht, weshalb sie standardmäßig deaktiviert sind. Weitere Details finden Sie im [Firefox-Bug 1057233](https://bugzil.la/1057233).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 33                   | Nein                     |
| Developer Edition | 33                   | Nein                     |
| Beta              | 33                   | Nein                     |
| Release           | 33                   | Nein                     |

- `media.track.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

#### GeometryUtils Methoden: convertPointFromNode(), convertRectFromNode(), und convertQuadFromNode()

Die `GeometryUtils` Methoden `convertPointFromNode()`, `convertRectFromNode()`, und `convertQuadFromNode()` mapen den gegebenen Punkt, das Rechteck oder das Viereck von dem [`Node`](/de/docs/Web/API/Node), auf dem sie aufgerufen werden, zu einem anderen Knoten. (Weitere Details finden Sie im [Firefox-Bug 918189](https://bugzil.la/918189).)

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 31                   | Ja                       |
| Developer Edition | 31                   | Nein                     |
| Beta              | 31                   | Nein                     |
| Release           | 31                   | Nein                     |

- `layout.css.convertFromNode.enable`
  - : Setzen Sie auf `true`, um zu aktivieren.

#### GeometryUtils Methode: getBoxQuads()

Die `GeometryUtils` Methode `getBoxQuads()` gibt die CSS-Boxen für einen [`Node`](/de/docs/Web/API/Node) relativ zu einem anderen Knoten oder Viewport zurück. (Weitere Details finden Sie im [Firefox-Bug 917755](https://bugzil.la/917755).)

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 31                   | Ja                       |
| Developer Edition | 31                   | Nein                     |
| Beta              | 31                   | Nein                     |
| Release           | 31                   | Nein                     |

- `layout.css.getBoxQuads.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Payment Request API

#### Primäre Zahlungsverwaltung

Die [Payment Request API](/de/docs/Web/API/Payment_Request_API) bietet Unterstützung für die Handhabung von web basierten Zahlungen innerhalb von Web-Inhalten oder -Apps. Aufgrund eines Fehlers, der während des Testens der Benutzeroberfläche aufgetreten ist, haben wir beschlossen, das Versenden dieser API zu verschieben, während Diskussionen über mögliche Änderungen der API stattfinden. Die Arbeiten sind im Gange. (Weitere Details finden Sie im [Firefox-Bug 1318984](https://bugzil.la/1318984).)

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 55                   | Nein                     |
| Developer Edition | 55                   | Nein                     |
| Beta              | 55                   | Nein                     |
| Release           | 55                   | Nein                     |

- `dom.payments.request.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.
- `dom.payments.request.supportedRegions`
  - : Ländercodes als kommagetrennte Liste von zugelassenen Regionen (z. B. `US,CA`).

### WebShare API

Die [Web Share API](/de/docs/Web/API/Web_Share_API) ermöglicht das Teilen von Dateien, URLs und anderen Daten von einer Website.
Diese Funktion ist auf Android in allen Builds aktiviert, steht jedoch auf dem Desktop hinter einer Präferenz (sofern unten nicht anders angegeben).

| Release-Kanal     | Geänderte Version | Standardmäßig aktiviert?                    |
| ----------------- | ----------------- | ------------------------------------------- |
| Nightly           | 71                | Nein (Standard). Ja (Windows ab Version 92) |
| Developer Edition | 71                | Nein                                        |
| Beta              | 71                | Nein                                        |
| Release           | 71                | Nein (Desktop). Ja (Android).               |

- `dom.webshare.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Bildschirmorientierungs-API

#### ScreenOrientation.lock()

Die [`ScreenOrientation.lock()`](/de/docs/Web/API/ScreenOrientation/lock) Methode erlaubt es einem Gerät, auf eine bestimmte Orientierung gesperrt zu werden, sofern vom Gerät unterstützt und durch die Browser-Vorsperrbeschränkungen zulässig.
Typischerweise ist die Sperrung der Orientierung nur auf Mobilgeräten erlaubt, wenn das Dokument im Vollbildmodus angezeigt wird.
Weitere Details finden Sie im [Firefox-Bug 1697647](https://bugzil.la/1697647).

| Release-Kanal     | Geänderte Version | Standardmäßig aktiviert? |
| ----------------- | ----------------- | ------------------------ |
| Nightly           | 111               | Ja                       |
| Developer Edition | 97                | Nein                     |
| Beta              | 97                | Nein                     |
| Release           | 97                | Nein                     |

- `dom.screenorientation.allow-lock`
  - : Setzen Sie auf `true`, um zu aktivieren.

### API für Task-Priorisierung

Die [API für Task-Priorisierung](/de/docs/Web/API/Prioritized_Task_Scheduling_API) bietet eine standardisierte Möglichkeit, alle Aufgaben einer Anwendung zu priorisieren, unabhängig davon, ob sie im Code des Website-Entwicklers oder in Drittanbieter-Bibliotheken und -Frameworks definiert sind.
Ab der Firefox-Version 140 ist die API sowohl featurevollständig als auch im Nightly-Release aktiviert.
([Firefox-Bug 1734997](https://bugzil.la/1734997) und [Firefox-Bug 1920115](https://bugzil.la/1920115)).

| Release-Kanal     | Geänderte Version | Standardmäßig aktiviert? |
| ----------------- | ----------------- | ------------------------ |
| Nightly           | 139               | Ja                       |
| Developer Edition | 101               | Nein                     |
| Beta              | 101               | Nein                     |
| Release           | 101               | Nein                     |

- `dom.enable_web_task_scheduling`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Benachrichtigungs-API

Benachrichtigungen haben die Eigenschaft [`requireInteraction`](/de/docs/Web/API/Notification/requireInteraction) standardmäßig auf Windows-Systemen und in der Nightly-Version auf `true` gesetzt ([Firefox-Bug 1794475](https://bugzil.la/1794475)).

| Release-Kanal     | Geänderte Version | Standardmäßig aktiviert? |
| ----------------- | ----------------- | ------------------------ |
| Nightly           | 117               | Ja                       |
| Developer Edition | 117               | Nein                     |
| Beta              | 117               | Nein                     |
| Release           | 117               | Nur Windows              |

- `dom.webnotifications.requireinteraction.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### View Transition API

Die [View Transition API](/de/docs/Web/API/View_Transition_API) stellt einen Mechanismus zum einfachen Erstellen animierter Übergänge zwischen verschiedenen Website-Ansichten bereit. Dies ist besonders nützlich für {{Glossary("SPA", "SPAs (Single-Page-Applications)")}}. ([Firefox-Bug 1950759](https://bugzil.la/1950759)).

| Release-Kanal     | Geänderte Version | Standardmäßig aktiviert? |
| ----------------- | ----------------- | ------------------------ |
| Nightly           | 139               | Ja                       |
| Developer Edition | 139               | Nein                     |
| Beta              | 139               | Nein                     |
| Release           | 139               | Nein                     |

- `dom.viewTransitions.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

## Sicherheit und Datenschutz

### Kennzeichnung unsicherer Seiten

Die zwei `security.insecure_connection_text_*` Präferenzen fügen im Adressfeld neben dem traditionellen Schloss-Symbol ein "Nicht sicher" Textlabel hinzu, wenn eine Seite unsicher geladen wird (d.h. mit {{Glossary("HTTP", "HTTP")}} anstatt {{Glossary("HTTPS", "HTTPS")}}). Die `browser.urlbar.trimHttps` Präferenz schneidet das `https:` Präfix aus den Adressfeld-URLs ab. Weitere Details finden Sie im [Firefox-Bug 1853418](https://bugzil.la/1853418).

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
  - : Setzen Sie auf `true`, um das `https:` Präfix aus Adressfeld-URLs abzuschneiden.

### Berechtigungsrichtlinie / Funktionsrichtlinie

[Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) erlaubt es Webentwicklern, bestimmte Funktionen und APIs im Browser gezielt zu aktivieren, zu deaktivieren und das Verhalten zu ändern. Sie ist ähnlich wie CSP, kontrolliert aber Funktionen anstelle von Sicherheitsverhalten.
Dies wird in Firefox als **Funktionsrichtlinie** implementiert, der Name, der in einer früheren Version der Spezifikation verwendet wurde.

Beachten Sie, dass unterstützte Richtlinien auch durch das [`allow`](/de/docs/Web/HTML/Reference/Elements/iframe#allow) Attribut von `<iframe>` Elementen gesetzt werden können, selbst wenn die Benutzerpräferenz nicht gesetzt ist.

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 65                   | Nein                     |
| Developer Edition | 65                   | Nein                     |
| Beta              | 65                   | Nein                     |
| Release           | 65                   | Nein                     |

- `dom.security.featurePolicy.header.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Datenschutzbewahrende Attributions-API (PPA)

Die [PPA API](https://support.mozilla.org/en-US/kb/privacy-preserving-attribution) bietet eine Alternative zur Benutzernachverfolgung für Anzeigenattribution, indem das neue `navigator.privateAttribution` Objekt mit `saveImpression()` und `measureConversion()` Methoden verwendet wird. Weitere Informationen zu PPA finden Sie [im ursprünglichen Erklärer](https://github.com/mozilla/explainers/tree/main/archive/ppa-experiment) und der [vorgeschlagenen Spezifikation](https://w3c.github.io/ppa/). Dieses Experiment kann für Websites über [Herkunftstest](https://wiki.mozilla.org/Origin_Trials) oder im Browser, indem die Präferenz auf `1` gesetzt wird, aktiviert werden. ([Firefox-Bug 1900929](https://bugzil.la/1900929)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 128                  | Nein                     |
| Developer Edition | 128                  | Nein                     |
| Beta              | 128                  | Nein                     |
| Release           | 128                  | Nein                     |

- `dom.origin-trials.private-attribution.state`
  - : Setzen Sie auf `true`, um zu aktivieren.

## HTTP

### Accept-Header mit MIME-Typ image/jxl

Der HTTP [`Accept`](/de/docs/Web/HTTP/Reference/Headers/Accept) Header in [Standardanfragen und Bildanfragen](/de/docs/Web/HTTP/Guides/Content_negotiation/List_of_default_Accept_values) kann über eine Präferenz so konfiguriert werden, dass er den MIME-Typ `image/jxl` unterstützt.

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 128                  | Nein                     |
| Developer Edition | 128                  | Nein                     |
| Beta              | 128                  | Nein                     |
| Release           | 128                  | Nein                     |

- `image.jxl.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### SameSite=Lax standardmäßig

[`SameSite`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value)-Cookies haben standardmäßig den Wert `Lax`.
Mit dieser Einstellung werden Cookies nur gesendet, wenn ein Benutzer zur Ursprungsseite navigiert, nicht jedoch für Cross-Site-Anfragen, um Bilder oder Frames auf einer Drittanbieter-Website zu laden, usw.
Für weitere Details siehe [Firefox-Bug 1617609](https://bugzil.la/1617609).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 69                   | Nein                     |
| Developer Edition | 69                   | Nein                     |
| Beta              | 69                   | Nein                     |
| Release           | 69                   | Nein                     |

- `network.cookie.sameSite.laxByDefault`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Access-Control-Allow-Headers Wildcard deckt Authorization nicht ab

Der [`Access-Control-Allow-Headers`](/de/docs/Web/HTTP/Reference/Headers/Access-Control-Allow-Headers) ist ein Antwortheader auf eine {{Glossary("Preflight_request", "CORS-Vorab-Anfrage")}}, der angibt, welche Anforderungsheader in die endgültige Anfrage eingeschlossen werden dürfen.
Die Antwortdirektive kann einen Platzhalter (`*`) enthalten, der angibt, dass die endgültige Anfrage alle Header außer dem `Authorization`-Header enthalten darf.

Standardmäßig schließt Firefox den `Authorization`-Header in die endgültige Anfrage ein, nachdem er eine Antwort mit `Access-Control-Allow-Headers: *` erhalten hat.
Setzen Sie die Präferenz auf `false`, um sicherzustellen, dass Firefox den `Authorization`-Header nicht einbezieht.
Für weitere Details siehe [Firefox-Bug 1687364](https://bugzil.la/1687364).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 115                  | Ja                       |
| Developer Edition | 115                  | Ja                       |
| Beta              | 115                  | Ja                       |
| Release           | 115                  | Ja                       |

- `network.cors_preflight.authorization_covered_by_wildcard`
  - : Setzen Sie auf `true`, um zu aktivieren.

## Entwicklerwerkzeuge

Mozillas Entwicklerwerkzeuge entwickeln sich ständig weiter. Wir experimentieren mit neuen Ideen, fügen neue Funktionen hinzu und testen sie in den Nightly- und Developer Edition-Kanälen, bevor wir sie in Beta und Release einbringen. Die unten aufgeführten Funktionen sind die aktuelle Ernte von experimentellen Entwicklertools-Funktionen.

**Keine experimentellen Funktionen in diesem Release-Zyklus.**

## Siehe auch

- [Firefox-Entwicklerhinweise](/de/docs/Mozilla/Firefox/Releases)
- [Firefox Nightly](https://www.firefox.com/en-US/channel/desktop/)
- [Firefox Developer Edition](https://www.firefox.com/en-US/channel/desktop/developer/)
