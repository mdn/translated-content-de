---
title: Experimentelle Funktionen in Firefox
short-title: Experimentelle Funktionen
slug: Mozilla/Firefox/Experimental_features
l10n:
  sourceCommit: eab64f20d32a6755b75a78315f638543f65c7796
---

Diese Seite listet experimentelle und teilweise implementierte Funktionen von Firefox auf, einschließlich sich entwickelnder oder vorgeschlagener Webplattform-Standards.
Jeder Eintrag unten enthält Informationen über die Builds, in denen eine Funktion enthalten ist (Nightly, Beta, Developer Edition oder Release), ob sie standardmäßig aktiviert ist oder nicht, und den Namen der **Einstellung**, den Sie zur Aktivierung oder Konfiguration der Funktion verwenden können.
Die Beschreibung jeder Funktion enthält außerdem Links zu relevanten [Bugzilla-Fehlern](https://bugzilla.mozilla.org), die die Funktion implementieren oder aktivieren.
Diese Informationen ermöglichen es Ihnen, experimentelle Funktionen auszuprobieren und Feedback zu geben, bevor sie offiziell veröffentlicht werden.

In Bezug auf den Lebenszyklus erscheinen neue Funktionen in der Regel zuerst in [Nightly](https://www.firefox.com/en-US/channel/desktop/#nightly), wo sie oft standardmäßig aktiviert sind, um frühzeitig Feedback und Tests zu erhalten.
Wenn keine größeren Probleme festgestellt werden, sind sie in den Vorabversionen [Beta](https://www.firefox.com/en-US/channel/desktop/#beta) und [Developer Edition](https://www.firefox.com/en-US/channel/desktop/developer/) enthalten. Schließlich werden genehmigte Funktionen im stabilen [Release](https://www.firefox.com/en-US/) Kanal veröffentlicht.
Wenn eine Funktion in einem Release standardmäßig aktiviert ist, wird sie nicht mehr als experimentell betrachtet und von dieser Seite entfernt.

Um diese Funktionen zu aktivieren, geben Sie `about:config` in die Firefox-Adressleiste ein, suchen Sie nach der zugehörigen **Einstellung** und ändern Sie deren Wert, der normalerweise ein Wechsel zwischen `true` und `false` ist.
Je nach Funktion müssen Sie möglicherweise den Browser neu starten, damit die Änderung wirksam wird.
Lesen Sie den Support-Artikel [Firefox Configuration Editor](https://support.mozilla.org/en-US/kb/about-config-editor-firefox) für weitere Informationen zur Verwaltung von Einstellungen in Firefox.

## HTML

### Layout für input type="search"

Das Layout für `input type="search"` wurde aktualisiert. Dadurch enthält ein Suchfeld ein Löschsymbol, sobald jemand anfängt zu tippen, um andere Browserimplementierungen zu entsprechen. (Siehe [Firefox Fehler 558594](https://bugzil.la/558594) für weitere Details.)

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 81                  | Nein                     |
| Developer Edition | 81                  | Nein                     |
| Beta              | 81                  | Nein                     |
| Release           | 81                  | Nein                     |

- `layout.forms.input-type-search.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Passwortanzeige umschalten

HTML-Passwort-Eingabeelemente ([`<input type="password">`](/de/docs/Web/HTML/Reference/Elements/input/password)) enthalten ein "Auge"-Symbol, das umgeschaltet werden kann, um den Passworttext anzuzeigen oder zu verbergen ([Firefox Fehler 502258](https://bugzil.la/502258)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 96                  | Nein                     |
| Developer Edition | 96                  | Nein                     |
| Beta              | 96                  | Nein                     |
| Release           | 96                  | Nein                     |

- `layout.forms.reveal-password-button.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Zeitwähler für datetime-local Eingabefeld

HTML datetime-local Eingabeelemente ([`<input type="datetime-local">`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local)) beinhalten jetzt einen Zeitwähler ([Firefox Fehler 1726108](https://bugzil.la/1726108)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 144                 | Nein                     |
| Developer Edition | 144                 | Nein                     |
| Beta              | 144                 | Nein                     |
| Release           | 144                 | Nein                     |

- `dom.forms.datetime.timepicker`
  - : Setzen Sie auf `true`, um zu aktivieren.

## CSS

### Hex-Boxen zur Anzeige von unerwarteten Steuerzeichen

Diese Funktion rendert Steuerzeichen (Unicode-Kategorie Cc) außer _Tab_ (`U+0009`), _Zeilenumbruch_ (`U+000A`), _Formfeed_ (`U+000C`) und _Wagenrücklauf_ (`U+000D`) als Hex-Box, wenn sie unerwartet sind. (Siehe [Firefox Fehler 1099557](https://bugzil.la/1099557) für mehr Details.)

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 43                  | Ja                       |
| Developer Edition | 43                  | Nein                     |
| Beta              | 43                  | Nein                     |
| Release           | 43                  | Nein                     |

- `layout.css.control-characters.visible`
  - : Setzen Sie auf `true`, um zu aktivieren.

### initial-letter Eigenschaft

Die {{cssxref("initial-letter")}} CSS-Eigenschaft ist Teil der [CSS Inline Layout](https://drafts.csswg.org/css-inline/) Spezifikation und ermöglicht es Ihnen zu spezifizieren, wie fallende, erhöhte und abgesenkte Initialbuchstaben angezeigt werden. (Siehe [Firefox Fehler 1223880](https://bugzil.la/1223880) für mehr Details.)

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 50                  | Nein                     |
| Developer Edition | 50                  | Nein                     |
| Beta              | 50                  | Nein                     |
| Release           | 50                  | Nein                     |

- `layout.css.initial-letter.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### fit-content() Funktion

Die {{cssxref("fit-content_function", "fit-content()")}} Funktion bezieht sich auf {{cssxref("width")}} und andere Größenangaben. Diese Funktion wird bereits gut für die Größenbestimmung von CSS-Grid-Layoutspuren unterstützt. (Siehe [Firefox Fehler 1312588](https://bugzil.la/1312588) für mehr Details.)

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 91                  | Nein                     |
| Developer Edition | 91                  | Nein                     |
| Beta              | 91                  | Nein                     |
| Release           | 91                  | Nein                     |

- `layout.css.fit-content-function.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Scroll-gesteuerte Animationen

Zuvor als "Scroll-verknüpfte Animationen" bezeichnet, hängt eine [scroll-gesteuerte Animation](/de/docs/Web/CSS/CSS_scroll-driven_animations) von der Scrollposition einer Scrollleiste ab, anstatt von der Zeit oder einer anderen Dimension.
Die {{cssxref('scroll-timeline-name')}} und {{cssxref('scroll-timeline-axis')}} Eigenschaften (und die {{cssxref('scroll-timeline')}} Kurzschreibweise) ermöglichen es Ihnen, anzugeben, dass eine bestimmte Scrollleiste in einem bestimmten benannten Container als Quelle für eine scroll-gesteuerte Animation verwendet werden kann.
Die Scroll-Zeitleiste kann dann mit einer [Animation](/de/docs/Web/CSS/CSS_animations) durch Setzen der {{cssxref('animation-timeline')}} Eigenschaft auf den in `scroll-timeline-name` definierten Namenswert verknüpft werden.

Bei Verwendung der {{cssxref('scroll-timeline')}} Kurzschreibweise muss die Reihenfolge der Eigenschaftswerte {{cssxref('scroll-timeline-name')}} gefolgt von {{cssxref('scroll-timeline-axis')}} sein.
Die Lang- und Kurzschreibweisen sind beide hinter der Einstellung verfügbar.
Alternativ können Sie die [`scroll()`](/de/docs/Web/CSS/animation-timeline/scroll) Funktionsnotation mit {{cssxref('animation-timeline')}} verwenden, um anzugeben, dass eine Scroll-Achse in einem übergeordneten Element für die Zeitleiste verwendet wird.

Weitere Informationen finden Sie unter [Firefox Fehler 1807685](https://bugzil.la/1807685), [Firefox Fehler 1804573](https://bugzil.la/1804573), [Firefox Fehler 1809005](https://bugzil.la/1809005), [Firefox Fehler 1676791](https://bugzil.la/1676791), [Firefox Fehler 1754897](https://bugzil.la/1754897), [Firefox Fehler 1817303](https://bugzil.la/1817303), und [Firefox Fehler 1737918](https://bugzil.la/1737918).

Die {{cssxref('timeline-scope')}}, {{cssxref('animation-range-start')}} und {{cssxref('animation-range-end')}} Eigenschaften (und die {{cssxref('animation-range')}} Kurzschreibweise) werden noch nicht unterstützt. Weitere Informationen finden Sie unter [Firefox Fehler 1676779](https://bugzil.la/1676779).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 136                 | Ja                       |
| Developer Edition | 110                 | Nein                     |
| Beta              | 110                 | Nein                     |
| Release           | 110                 | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### @scope at-Regel

Die [@scope](/de/docs/Web/CSS/@scope) [CSS](/de/docs/Web/CSS) [at-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) ermöglicht es Ihnen, spezifische Kindelemente auszuwählen, ohne die Spezifität von CSS-Selektoren übermäßig zu erhöhen ([Firefox Fehler 1886441](https://bugzil.la/1886441)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 137                 | Ja                       |
| Developer Edition | 128                 | Nein                     |
| Beta              | 128                 | Nein                     |
| Release           | 128                 | Nein                     |

- `layout.css.at-scope.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### prefers-reduced-transparency Media-Feature

Das CSS [`prefers-reduced-transparency`](/de/docs/Web/CSS/@media/prefers-reduced-transparency) Media-Feature ermöglicht es Ihnen zu erkennen, ob ein Benutzer die Einstellung aktiviert hat, um die Menge an transparenten oder transluzenten Ebeneffekten auf seinem Gerät zu minimieren.
Siehe ([Firefox Fehler 1736914](https://bugzil.la/1736914)) für weitere Details.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 113                 | Nein                     |
| Developer Edition | 113                 | Nein                     |
| Beta              | 113                 | Nein                     |
| Release           | 113                 | Nein                     |

- `layout.css.prefers-reduced-transparency.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### inverted-colors Media-Feature

Das CSS [`inverted-colors`](/de/docs/Web/CSS/@media/inverted-colors) Media-Feature ermöglicht es Ihnen festzustellen, ob ein Benutzeragent oder das zugrunde liegende Betriebssystem Farben invertiert.
Siehe ([Firefox Fehler 1794628](https://bugzil.la/1794628)) für weitere Details.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 114                 | Nein                     |
| Developer Edition | 114                 | Nein                     |
| Beta              | 114                 | Nein                     |
| Release           | 114                 | Nein                     |

- `layout.css.inverted-colors.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Benannte Ansicht Fortschrittszeitleisten-Eigenschaft

Die CSS [`view-timeline-name`](/de/docs/Web/CSS/view-timeline-name) Eigenschaft ermöglicht es Ihnen, einem bestimmten Element einen Namen zu geben, das angibt, dass dessen Vorfahren Scroll-Element die Quelle einer Ansicht Fortschrittszeitleiste ist.
Der Name kann dann der `animation-timeline` zugewiesen werden, die dann das zugehörige Element animiert, während es durch den sichtbaren Bereich seines Vorfahren Scrollers bewegt wird.
Siehe ([Firefox Fehler 1737920](https://bugzil.la/1737920)) für mehr Details.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 114                 | Nein                     |
| Developer Edition | 114                 | Nein                     |
| Beta              | 114                 | Nein                     |
| Release           | 114                 | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Anonyme Ansicht Fortschrittszeitleisten-Funktion

Die CSS [`view()`](/de/docs/Web/CSS/animation-timeline/view) Funktion ermöglicht es Ihnen zu spezifizieren, dass die `animation-timeline` für ein Element eine Ansicht einer Fortschrittszeitleiste ist, die das Element animieren wird, während es durch den sichtbaren Bereich seines Vorfahren Scrollers bewegt wird.
Die Funktion definiert die Achse des Elternelements, die die Zeitleiste liefert, zusammen mit dem Versatz innerhalb des sichtbaren Bereichs, an dem die Animation beginnt und endet.
Siehe ([Firefox Fehler 1808410](https://bugzil.la/1808410)) für mehr Details.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 114                 | Nein                     |
| Developer Edition | 114                 | Nein                     |
| Beta              | 114                 | Nein                     |
| Release           | 114                 | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Anbieter-präfixierte Transformations-Eigenschaften

Die `-moz-` präfixierte [CSS transform](/de/docs/Web/CSS/CSS_transforms) Eigenschaften können deaktiviert werden, indem die `layout.css.prefixes.transforms` Präferenz auf `false` gesetzt wird. Das Ziel ist, diese zu deaktivieren, sobald die standardmäßigen CSS-Zoom-Eigenschaften gut unterstützt werden. ([Firefox Fehler 1886134](https://bugzil.la/1886134), [Firefox Fehler 1855763](https://bugzil.la/1855763)).

Insbesondere wird diese Präferenz die folgenden präfixierten Eigenschaften deaktivieren:

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
  - : Setzen Sie auf `true`, um zu aktivieren.

### `shape()` Funktion

Die CSS [`shape()`](/de/docs/Web/CSS/basic-shape/shape) Funktion ist ein [`<basic-shape>`](/de/docs/Web/CSS/basic-shape) Datentyp, der es Ihnen ermöglicht, eine Form in den {{cssxref("clip-path")}} und {{cssxref("offset-path")}} Eigenschaften mit einem oder mehreren "Formbefehlen" zu definieren. Diese Befehle ähneln sehr den [SVG-Pfadbefehlen](/de/docs/Web/SVG/Reference/Attribute/d#path_commands). Die `shape()` Funktion ist in gewisser Hinsicht ähnlich der {{cssxref("basic-shape/path","path()")}} Funktion, aber im Gegensatz zu `path()`, die die [SVG-Pfad](/de/docs/Web/SVG/Reference/Element/path) Syntax verwendet, verwendet `shape()` die standardmäßige CSS-Syntax. Dies ermöglicht es Ihnen, Formen einfach zu erstellen und zu bearbeiten und auch CSS-Mathematikfunktionen zu verwenden.
Für mehr Details siehe [Firefox Fehler 1823463](https://bugzil.la/1823463) für den `shape()` Funktionssupport in `clip-path`, [Firefox Fehler 1884424](https://bugzil.la/1884424) für den Funktionssupport in `offset-path`, und [Firefox Fehler 1884425](https://bugzil.la/1884425) für deren Interpolationssupport.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 126                 | Ja                       |
| Developer Edition | 126                 | Nein                     |
| Beta              | 126                 | Nein                     |
| Release           | 126                 | Nein                     |

- `layout.css.basic-shape-shape.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Symmetrisches `letter-spacing`

Die CSS {{cssxref("letter-spacing")}} Eigenschaft teilt jetzt den angegebenen Buchstabenabstand gleichmäßig auf beide Seiten jedes Zeichens auf. Dies ist anders als das aktuelle Verhalten, bei dem der Abstand hauptsächlich zu einer Seite hinzugefügt wird. Dieser Ansatz kann den Textabstand verbessern, insbesondere bei Text mit gemischter Richtung [Firefox Fehler 1891446](https://bugzil.la/1891446).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 128                 | Ja                       |
| Developer Edition | 128                 | Ja                       |
| Beta              | 127                 | Nein                     |
| Release           | 127                 | Nein                     |

- `layout.css.letter-spacing.model`
  - : Setzen Sie auf `true`, um zu aktivieren.

### `calc()` Farbkanal-Support in relativen Farben

Die CSS [`calc()`](/de/docs/Web/CSS/calc) Funktion kann jetzt Farbkanäle in [relativen Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors#using_math_functions) parsen, was es Ihnen ermöglicht, Farbänderungen in verschiedenen Farbräumen oder beim Verwenden verschiedener funktionaler Notationen korrekt zu berechnen [Firefox Fehler 1889561](https://bugzil.la/1889561).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 127                 | Ja                       |
| Developer Edition | 127                 | Nein                     |
| Beta              | 127                 | Nein                     |
| Release           | 127                 | Nein                     |

- `layout.css.relative-color-syntax.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### CSS Anker-Positionierung

Das [CSS Anchor Positioning](/de/docs/Web/CSS/CSS_anchor_positioning) Modul definiert eine Reihe von Funktionen, die es ermöglichen, Elemente als Ankerelemente zu definieren und andere Elemente relativ zu Ankerelementen zu positionieren.
Dies erlaubt es zum Beispiel, Tooltips neben zugehörigen Inhalten anzuzeigen, während sie durch den Ansichtsbereich scrollen, sich bei Bedarf bewegen, wenn sie den Ansichtsbereich verlassen würden, und verschwinden, wenn das Ankerelement aus dem Bildschirm verschwindet.
Der Satz von Funktionen wird schrittweise hinter einer Präferenz eingeführt ([Firefox Fehler 1988224](https://bugzil.la/1988224), [Firefox Fehler 1838746](https://bugzil.la/1838746)).

Die implementierten Teile umfassen [`CSSPositionTryRule`](/de/docs/Web/API/CSSPositionTryRule) und [`CSSPositionTryDescriptors`](/de/docs/Web/API/CSSPositionTryDescriptors) (Firefox 131).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 145                 | Ja                       |
| Developer Edition | 131                 | Nein                     |
| Beta              | 131                 | Nein                     |
| Release           | 131                 | Nein                     |

- `layout.css.anchor-positioning.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

#### `anchor-size()` Funktion

Die CSS {{CSSXRef("anchor-size")}} Funktion erlaubt es Ihnen, die Größe, Position und Ränder eines anker-positionierten Elements relativ zu den Dimensionen seines Ankerelements festzulegen. ([Firefox Fehler 1972610](https://bugzil.la/1972610)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 145                 | Ja                       |
| Developer Edition | 142                 | Nein                     |
| Beta              | 142                 | Nein                     |
| Release           | 142                 | Nein                     |

- `layout.css.anchor-positioning.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

#### `position-area` Eigenschaft

Die CSS {{CSSXRef("position-area")}} Eigenschaft ermöglicht es, ein anker-positioniertes Element relativ zu den Kanten seines zugehörigen Ankerelements zu positionieren, indem das positionierte Element auf einer oder mehreren Kacheln eines impliziten 3x3 Rasters platziert wird, wobei das Ankerelement die mittlere Zelle ist. ([Firefox Fehler 1924086](https://bugzil.la/1924086)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 145                 | Ja                       |
| Developer Edition | 145                 | Nein                     |
| Beta              | 145                 | Nein                     |
| Release           | 145                 | Nein                     |

- `layout.css.anchor-positioning.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Erlauben von Pseudo-Elementen nach elementgestützten Pseudo-Elementen

An der Unterstützung von [Pseudo-Elementen](/de/docs/Web/CSS/Pseudo-elements) wie {{cssxref("::first-letter")}} und {{cssxref("::before")}} wird gearbeitet, sodass diese an [elementgestützte Pseudo-Elemente](/de/docs/Web/CSS/Pseudo-elements#element-backed_pseudo-elements) wie {{cssxref("::details-content")}} und {{cssxref("::file-selector-button")}} angehängt werden können.

Dies ermöglicht es den Nutzern z.B., den ersten Buchstaben des {{htmlElement("details")}} Elements zu stylen, indem sie den CSS-Selektor `::details-content::first-letter` verwenden, oder Inhalt vor einem {{HTMLElement("input")}} von [`type="file"`](/de/docs/Web/HTML/Reference/Elements/input/file) hinzuzufügen, indem sie den CSS-Selektor `::file-selector-button::before` verwenden.

Derzeit kann nur die Unterstützung für `::details-content::first-letter` analysiert werden, indem `@supports(::details-content::first-letter)` verwendet wird.
Das `::file-selector-button` Pseudo-Element ist noch nicht als elementgestütztes Pseudo-Element markiert, daher gibt es keine Möglichkeit, dies zu testen.
([Firefox Fehler 1953557](https://bugzil.la/1953557), [Firefox Fehler 1941406](https://bugzil.la/1941406)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 138                 | Nein                     |
| Developer Edition | 138                 | Nein                     |
| Beta              | 138                 | Nein                     |
| Release           | 138                 | Nein                     |

### `:heading` und `:heading()` Pseudo-Klassen

Die {{CSSXRef(":heading")}} Pseudo-Klasse ermöglicht es Ihnen, alle [Überschriftselemente](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) (`<h1>`-`<h6>`) auf einmal zu stylen, anstatt sie einzeln anzusprechen. Die {{CSSXRef(":heading_function", ":heading()")}} funktionale Pseudo-Klasse ermöglicht es, Überschriftselemente zu stylen, die mit der [`<An+B>`](/de/docs/Web/CSS/:heading_function#functional_notation) Notation übereinstimmen. ([Firefox Fehler 1974386](https://bugzil.la/1974386)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 142                 | Nein                     |
| Developer Edition | 142                 | Nein                     |
| Beta              | 142                 | Nein                     |
| Release           | 142                 | Nein                     |

- `layout.css.heading-selector.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

## SVG

**Keine experimentellen Funktionen in diesem Release-Zyklus.**

## JavaScript

**Keine experimentellen Funktionen in diesem Release-Zyklus.**

## APIs

### CloseWatcher Schnittstelle

Eingebaute Webkomponenten mit "offen"- und "schließen"-Semantik, wie modale Dialoge und Popover, können mit gerätenativen Mechanismen geschlossen werden.
Zum Beispiel können Sie auf Android einen Dialog mit der Zurück-Taste schließen.
Die [`CloseWatcher`](/de/docs/Web/API/CloseWatcher) Schnittstelle ermöglicht es Entwicklern, UI-Komponenten zu implementieren, wie z.B. benutzerdefinierte Seitenleisten, die auf ähnliche Weise mit nativen Mechanismen geschlossen werden können.
([Firefox Fehler 1888729](https://bugzil.la/1888729)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert?      |
| ----------------- | ------------------- | ----------------------------- |
| Nightly           | 140                 | Ja (Desktop). Nein (Android). |
| Developer Edition | 132                 | Nein                          |
| Beta              | 132                 | Nein                          |
| Release           | 132                 | Nein                          |

- `dom.closewatcher.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Trusted Types API

Die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) bietet Mechanismen, um sicherzustellen, dass Funktionen, die potenziell als Vektor für XSS-Angriffe verwendet werden können, nur mit Daten aufgerufen werden können, die validiert oder sanitisiert wurden.

> [!NOTE]
> Zum Zeitpunkt des Schreibens wurde nicht genug der API implementiert, um sie effektiv testbar zu machen.
> Diese Notiz wird entfernt, sobald sie einsatzbereit ist.

Folgendes Teilsortiment der API wurde implementiert:

- [`TrustedTypePolicyFactory`](/de/docs/Web/API/TrustedTypePolicyFactory):
  - [`getAttributeType()`](/de/docs/Web/API/TrustedTypePolicyFactory/getAttributeType) und [`getPropertyType()`](/de/docs/Web/API/TrustedTypePolicyFactory/getPropertyType) ([Firefox Fehler 1917783](https://bugzil.la/1917783), [Firefox Fehler 1917784](https://bugzil.la/1917784)).
- Die [`write()`](/de/docs/Web/API/Document/write) und [`writeln()`](/de/docs/Web/API/Document/writeln) Methoden der [`Document`](/de/docs/Web/API/Document) Schnittstelle akzeptieren jetzt [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) Objekte als Parameter, zusätzlich zu Zeichenfolgen. ([Firefox Fehler 1906301](https://bugzil.la/1906301)).
- Die [`text`](/de/docs/Web/API/HTMLScriptElement/text), [`innerText`](/de/docs/Web/API/HTMLElement/innerText), und [`textContent`](/de/docs/Web/API/Node/textContent) Eigenschaften der [`HTMLScriptElement`](/de/docs/Web/API/HTMLScriptElement) Schnittstelle akzeptieren nun [`TrustedScript`](/de/docs/Web/API/TrustedScript) Objekte als Wert, während [`src`](/de/docs/Web/API/HTMLScriptElement/src) [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL) Werte akzeptiert. ([Firefox Fehler 1905706](https://bugzil.la/1905706)).
- Die [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval) und [`Window.setTimeout()`](/de/docs/Web/API/Window/setTimeout) Methoden können mit einem [`TrustedScript`](/de/docs/Web/API/TrustedScript) aufgerufen werden. ([Firefox Fehler 1931290](https://bugzil.la/1931290)).
- Die globale [`trustedTypes`](/de/docs/Web/API/Window/trustedTypes) Eigenschaft ist verfügbar, um auf die Trusted Types API zuzugreifen.
- Die Eigenschaften [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) und [`ShadowRoot.innerHTML`](/de/docs/Web/API/ShadowRoot/innerHTML) können mit [trusted types](/de/docs/Web/API/Trusted_Types_API) aufgerufen werden.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 133                 | Nein                     |
| Developer Edition | 133                 | Nein                     |
| Beta              | 133                 | Nein                     |
| Release           | 133                 | Nein                     |

- `dom.security.trusted_types.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### HTML Sanitizer API

Die [HTML Sanitizer API](/de/docs/Web/API/HTML_Sanitizer_API) ermöglicht es Entwicklern, untrusted HTML-Zeichenfolgen zu nehmen und sie zu reinigen, um sie sicher in das DOM eines Dokuments einzufügen.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 138                 | Nein                     |
| Developer Edition | 138                 | Nein                     |
| Beta              | 138                 | Nein                     |
| Release           | 138                 | Nein                     |

- `dom.security.sanitizer.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Entfernung der Ereignisse `beforescriptexecute` und `afterscriptexecute`

Die nicht standardmäßigen Ereignisse [`beforescriptexecute`](/de/docs/Web/API/Document/beforescriptexecute_event) und [`afterscriptexecute`](/de/docs/Web/API/Document/afterscriptexecute_event) auf der [`Document`](/de/docs/Web/API/Document) Schnittstelle sowie [`afterscriptexecute`](/de/docs/Web/API/Element/afterscriptexecute_event) und [`beforescriptexecute`](/de/docs/Web/API/Element/beforescriptexecute_event) auf der [`Element`](/de/docs/Web/API/Element) Schnittstelle sollen entfernt werden. Sie wurden in Nightly deaktiviert.
([Firefox Fehler 1954685](https://bugzil.la/1954685)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 139                 | Nein                     |
| Developer Edition | 139                 | Ja                       |
| Beta              | 139                 | Ja                       |
| Release           | 139                 | Ja                       |

- `dom.events.script_execute.enable`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Notification actions- und maxActions-Eigenschaften

Die [`actions`](/de/docs/Web/API/Notification/actions) schreibgeschützte Eigenschaft und die [`maxActions`](/de/docs/Web/API/Notification/maxActions_static) statische schreibgeschützte Eigenschaft der [`Notification`](/de/docs/Web/API/Notification) Schnittstelle werden in Nightly auf dem Desktop unterstützt.
Diese enthalten die Benachrichtigungsaktionen, die mit [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification) festgelegt wurden, und die maximale Anzahl von Aktionen, die festgelegt werden können, bzw.
([Firefox Fehler 1225110](https://bugzil.la/1225110), [Firefox Fehler 1963263](https://bugzil.la/1963263)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 138                 | Ja (nur Desktop)         |
| Developer Edition | 138                 | Nein                     |
| Beta              | 138                 | Nein                     |
| Release           | 138                 | Nein                     |

- `dom.webnotifications.actions.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Grafik: Canvas, WebGL und WebGPU

#### WebGL: Entwurfserweiterungen

Wenn diese Einstellung aktiviert ist, werden alle WebGL-Erweiterungen, die sich derzeit im "Entwurfs" Status befinden und getestet werden, zur Verwendung aktiviert. Derzeit werden keine WebGL-Erweiterungen von Firefox getestet.

#### WebGPU API

Die [WebGPU API](/de/docs/Web/API/WebGPU_API) bietet Low-Level-Support für Berechnungen und Grafikwiedergabe mit der [Graphics Processing Unit](https://en.wikipedia.org/wiki/Graphics_Processing_Unit) (GPU) des Geräts oder Computers des Nutzers.
Ab Version 142 ist dies aktiviert unter Windows in allen Kontexten mit Ausnahme von Service-Workern.
Für andere Plattformen ist es in Nightly aktiviert.
Siehe [Firefox Fehler 1602129](https://bugzil.la/1602129) für unseren Fortschritt bei dieser API.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert?                   |
| ----------------- | ------------------- | ------------------------------------------ |
| Nightly           | 141                 | Ja                                         |
| Developer Edition | 141                 | Nein (Ja auf Windows, ohne Service-Worker) |
| Beta              | 141                 | Nein (Ja auf Windows, ohne Service-Worker) |
| Release           | 141                 | Nein (Ja auf Windows, ohne Service-Worker) |

- `dom.webgpu.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren (aktiviert in Nightly und auf Windows in allen Versionen)
- `dom.webgpu.service-workers.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren (aktiviert in Nightly)

### Unterstützung der Reporting API für CSP-Verletzungen

Die [Reporting API](/de/docs/Web/API/Reporting_API) unterstützt nun das Berichten von [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) Verletzungen.

[`Report`](/de/docs/Web/API/Report) Instanzen, die durch die [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) Schnittstelle zurückgegeben werden, können nun einen `type` Wert von `"csp-violation"` und eine `body` Eigenschaft haben, die eine Instanz der [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody) Schnittstelle enthält.
Damit können CSP-Verletzungen innerhalb einer Webseite gemeldet werden.

CSP-Verletzungsberichte können auch an remote Endpunkte gesendet werden, die im CSP {{CSP("report-to")}} Direktive namentlich angegeben sind — Endpunktnamen und entsprechende URLs müssen zunächst in den {{httpheader('Reporting-Endpoints')}} oder {{httpheader('Report-To')}} HTTP-Antwort-Headern definiert werden.
Der Bericht ist eine Serialisierung des oben beschriebenen [`Report`](/de/docs/Web/API/Report) Objekts, mit einer `body` Eigenschaft, die eine Serialisierung einer [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody) Instanz ist.

Dieser Verletzungsbericht ersetzt einen ähnlichen CSP-spezifischen Mechanismus zum Senden von Verletzungsberichten, der die CSP {{CSP("report-uri")}} Anweisung verwendet, um die URL des Berichts-Endpunkts festzulegen, und ein [CSP-spezifisches JSON-Verletzungsbericht-Format](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/report-uri#violation_report_syntax) besitzt.
([Firefox Fehler 1391243](https://bugzil.la/1391243)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 130                 | Nein                     |
| Developer Edition | 130                 | Nein                     |
| Beta              | 130                 | Nein                     |
| Release           | 130                 | Nein                     |

- `dom.reporting.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### WebRTC und Medien

Die folgenden experimentellen Funktionen beinhalten diejenigen in der [WebRTC API](/de/docs/Web/API/WebRTC_API), der [Web Audio API](/de/docs/Web/API/Web_Audio_API), der [Media Source Extensions API](/de/docs/Web/API/Media_Source_Extensions_API), der [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API), und der [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API).

#### Asynchrone SourceBuffer hinzu- und Entfernung

Dies fügt die auf Versprechen basierenden Methoden [`appendBufferAsync()`](/de/docs/Web/API/SourceBuffer/appendBufferAsync) und [`removeAsync()`](/de/docs/Web/API/SourceBuffer/removeAsync) zum Hinzufügen und Entfernen von Medienquellen-Puffern zu der [`SourceBuffer`](/de/docs/Web/API/SourceBuffer) Schnittstelle hinzu. Siehe [Firefox Fehler 1280613](https://bugzil.la/1280613) und [Firefox Fehler 778617](https://bugzil.la/778617) für mehr Informationen.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 62                  | Nein                     |
| Developer Edition | 62                  | Nein                     |
| Beta              | 62                  | Nein                     |
| Release           | 62                  | Nein                     |

- `media.mediasource.experimental.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

#### AVIF-Compliance-Striktheit

Die `image.avif.compliance_strictness` Präferenz kann verwendet werden, um die _Striktheit_ zu steuern, die bei der Verarbeitung von [AVIF](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) Bildern angewendet wird.
Dadurch können Firefox-Nutzer Bilder anzeigen, die in einigen anderen Browsern dargestellt werden können, selbst wenn sie nicht strikt konform sind.

| Release-Kanal     | Version hinzugefügt | Standardwert |
| ----------------- | ------------------- | ------------ |
| Nightly           | 92                  | 1            |
| Developer Edition | 92                  | 1            |
| Beta              | 92                  | 1            |
| Release           | 92                  | 1            |

- `image.avif.compliance_strictness`
  - : Numersicher Wert, der ein _Striktheits_ Niveau angibt. Erlaubte Werte sind:
    - `0`: Permissiv. Akzeptiere Bilder mit Spezifikationsverstößen sowohl in Empfehlungen ("should" Sprache) als auch Anforderungen ("shall" Sprache), vorausgesetzt, sie können sicher oder unmissverständlich interpretiert werden.
    - `1` **(standardmäßig)**: Gemischt. Weist Verstöße gegen Anforderungen ("shall") zurück, erlaubt aber Verstöße gegen Empfehlungen ("should").
    - `2`: Strikt. Weist Verstöße gegen spezifizierte Anforderungen oder Empfehlungen zurück.

#### JPEG XL Unterstützung

Firefox unterstützt [JPEG XL](https://jpeg.org/jpegxl/) Bilder, wenn diese Funktion aktiviert ist.
Siehe [Firefox Fehler 1539075](https://bugzil.la/1539075) für mehr Details.

Beachten Sie, dass wie unten gezeigt, die Funktion nur in Nightly-Builds verfügbar ist (unabhängig davon, ob die Präferenz gesetzt ist).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 90                  | Nein                     |
| Developer Edition | —                   | —                        |
| Beta              | —                   | —                        |
| Release           | —                   | —                        |

- `image.jxl.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### WebVR API

#### WebVR API (Deaktiviert)

Die veraltete [WebVR API](/de/docs/Web/API/WebVR_API) steht kurz vor der Entfernung.
Sie ist standardmäßig in allen Builds deaktiviert [Firefox Fehler 1750902](https://bugzil.la/1750902).

| Release-Kanal     | Version entfernt | Standardmäßig aktiviert? |
| ----------------- | ---------------- | ------------------------ |
| Nightly           | 98               | Nein                     |
| Developer Edition | 98               | Nein                     |
| Beta              | 98               | Nein                     |
| Release           | 98               | Nein                     |

- `dom.vr.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

#### HTMLMediaElement Eigenschaften: audioTracks und videoTracks

Das Aktivieren dieser Funktion fügt die [`HTMLMediaElement.audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks) und [`HTMLMediaElement.videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks) Eigenschaften zu allen HTML-Medienelementen hinzu. Da Firefox jedoch derzeit keine Unterstützung für mehrere Audio- und Videospuren bietet, funktionieren die häufigsten Anwendungsfälle für diese Eigenschaften nicht, daher sind sie standardmäßig deaktiviert. Siehe [Firefox Fehler 1057233](https://bugzil.la/1057233) für mehr Details.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 33                  | Nein                     |
| Developer Edition | 33                  | Nein                     |
| Beta              | 33                  | Nein                     |
| Release           | 33                  | Nein                     |

- `media.track.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

#### GeometryUtils Methoden: convertPointFromNode(), convertRectFromNode(), und convertQuadFromNode()

Die `GeometryUtils` Methoden `convertPointFromNode()`, `convertRectFromNode()`, und `convertQuadFromNode()` mappen den gegebenen Punkt, das gegebene Rechteck oder das gegebene Viereck von dem [`Node`](/de/docs/Web/API/Node), auf dem sie aufgerufen werden, zu einem anderen Knoten. (Siehe [Firefox Fehler 918189](https://bugzil.la/918189) für mehr Details.)

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 31                  | Ja                       |
| Developer Edition | 31                  | Nein                     |
| Beta              | 31                  | Nein                     |
| Release           | 31                  | Nein                     |

- `layout.css.convertFromNode.enable`
  - : Setzen Sie auf `true`, um zu aktivieren.

#### GeometryUtils Methode: getBoxQuads()

Die `GeometryUtils` Methode `getBoxQuads()` gibt die CSS-Boxen für einen [`Node`](/de/docs/Web/API/Node) relativ zu jedem anderen Knoten oder Ansichtsfenster zurück. (Siehe [Firefox Fehler 917755](https://bugzil.la/917755) für mehr Details.)

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 31                  | Ja                       |
| Developer Edition | 31                  | Nein                     |
| Beta              | 31                  | Nein                     |
| Release           | 31                  | Nein                     |

- `layout.css.getBoxQuads.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Payment Request API

#### Primäre Zahlungsverwaltung

Die [Payment Request API](/de/docs/Web/API/Payment_Request_API) bietet Unterstützung für die Abwicklung von webbasierten Zahlungen innerhalb von Web-Content oder Anwendungen. Aufgrund eines Fehlers, der während des Tests der Benutzeroberfläche aufgetreten ist, haben wir beschlossen, den Versand dieser API zu verschieben, während Diskussionen über mögliche Änderungen an der API stattfinden. Die Arbeit läuft noch. (Siehe [Firefox Fehler 1318984](https://bugzil.la/1318984) für mehr Details.)

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 55                  | Nein                     |
| Developer Edition | 55                  | Nein                     |
| Beta              | 55                  | Nein                     |
| Release           | 55                  | Nein                     |

- `dom.payments.request.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.
- `dom.payments.request.supportedRegions`
  - : Ländercodes als durch Kommata getrennte Whitelist von Regionen (z.B. `US,CA`).

### WebShare API

Die [Web Share API](/de/docs/Web/API/Web_Share_API) ermöglicht das Teilen von Dateien, URLs und anderen Daten von einer Website.
Diese Funktion ist auf Android in allen Builds aktiviert, aber hinter einer Einstellung auf Desktop verborgen (es sei denn, unten angegeben).

| Release-Kanal     | Version geändert | Standardmäßig aktiviert?                 |
| ----------------- | ---------------- | ---------------------------------------- |
| Nightly           | 71               | Nein (stand.) Ja (Windows ab Version 92) |
| Developer Edition | 71               | Nein                                     |
| Beta              | 71               | Nein                                     |
| Release           | 71               | Nein (Desktop). Ja (Android).            |

- `dom.webshare.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Screen Orientation API

#### ScreenOrientation.lock()

Die [`ScreenOrientation.lock()`](/de/docs/Web/API/ScreenOrientation/lock) Methode ermöglicht es einem Gerät, auf eine bestimmte Ausrichtung gesperrt zu werden, wenn dies vom Gerät unterstützt und durch die Browser-Lock-Anforderungen erlaubt ist.
Normalerweise ist das Sperren der Ausrichtung nur auf mobilen Geräten erlaubt, wenn das Dokument im Vollbildmodus angezeigt wird.
Siehe [Firefox Fehler 1697647](https://bugzil.la/1697647) für mehr Details.

| Release-Kanal     | Version geändert | Standardmäßig aktiviert? |
| ----------------- | ---------------- | ------------------------ |
| Nightly           | 111              | Ja                       |
| Developer Edition | 97               | Nein                     |
| Beta              | 97               | Nein                     |
| Release           | 97               | Nein                     |

- `dom.screenorientation.allow-lock`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Notifications API

Benachrichtigungen haben standardmäßig die [`requireInteraction`](/de/docs/Web/API/Notification/requireInteraction) Eigenschaft auf true gesetzt auf Windows-Systemen und in der Nightly-Version ([Firefox Fehler 1794475](https://bugzil.la/1794475)).

| Release-Kanal     | Version geändert | Standardmäßig aktiviert? |
| ----------------- | ---------------- | ------------------------ |
| Nightly           | 117              | Ja                       |
| Developer Edition | 117              | Nein                     |
| Beta              | 117              | Nein                     |
| Release           | 117              | Nur Windows              |

- `dom.webnotifications.requireinteraction.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

## Sicherheit und Datenschutz

### Unsichere Seitenbeschriftung

Die beiden `security.insecure_connection_text_*` Einstellungen fügen ein "Nicht sicher" Textlabel in der Adressleiste neben dem traditionellen Schloss-Symbol hinzu, wenn eine Seite unsicher geladen wird (d.h. mit {{Glossary("HTTP", "HTTP")}} anstelle von {{Glossary("HTTPS", "HTTPS")}}). Die `browser.urlbar.trimHttps` Einstellung entfernt das `https:` Präfix aus Adressleisten-URLs. Siehe [Firefox Fehler 1853418](https://bugzil.la/1853418) für mehr Details.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 121                 | Ja                       |
| Developer Edition | 60                  | Nein                     |
| Beta              | 60                  | Nein                     |
| Release           | 60                  | Nein                     |

- `security.insecure_connection_text.enabled`
  - : Setzen Sie auf `true`, um das Textlabel für den normalen Browsing-Modus zu aktivieren.
- `security.insecure_connection_text.pbmode.enabled`
  - : Setzen Sie auf `true`, um das Textlabel für den Privaten Browsing-Modus zu aktivieren.
- `browser.urlbar.trimHttps`
  - : Setzen Sie auf `true`, um das `https:` Präfix aus Adressleisten-URLs zu entfernen.

### Berechtigungsrichtlinie / Feature-Policy

[Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) ermöglicht es Webentwicklern, bestimmte Funktionen und APIs im Browser selektiv zu aktivieren, zu deaktivieren und deren Verhalten zu ändern. Dies ist ähnlich der CSP, steuert aber Funktionen statt Sicherheitsverhalten.
In Firefox wird dies als **Feature Policy** implementiert, der Name, der in einer früheren Version der Spezifikation verwendet wurde.

Beachten Sie, dass unterstützte Richtlinien über das [`allow`](/de/docs/Web/HTML/Reference/Elements/iframe#allow) Attribut auf `<iframe>` Elementen gesetzt werden können, auch wenn die Nutzereinstellung nicht gesetzt ist.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 65                  | Nein                     |
| Developer Edition | 65                  | Nein                     |
| Beta              | 65                  | Nein                     |
| Release           | 65                  | Nein                     |

- `dom.security.featurePolicy.header.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Privacy Preserving Attribution API (PPA)

[PPA API](https://support.mozilla.org/en-US/kb/privacy-preserving-attribution) bietet eine Alternative zum Nutzer-Tracking für Werbung Zuordnungen unter Nutzung des neuen `navigator.privateAttribution` Objekts mit den Methoden `saveImpression()` und `measureConversion()`. Lesen Sie mehr über PPA [im originalen Erklärer](https://github.com/mozilla/explainers/tree/main/archive/ppa-experiment) und der [vorgeschlagenen Spezifikation](https://w3c.github.io/ppa/). Dieses Experiment kann für Websites über [origin trial](https://wiki.mozilla.org/Origin_Trials) oder im Browser durch Setzen der Einstellung auf `1` aktiviert werden. ([Firefox Fehler 1900929](https://bugzil.la/1900929)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 128                 | Nein                     |
| Developer Edition | 128                 | Nein                     |
| Beta              | 128                 | Nein                     |
| Release           | 128                 | Nein                     |

- `dom.origin-trials.private-attribution.state`
  - : Setzen Sie auf `true`, um zu aktivieren.

## HTTP

### Integritätsrichtlinie für Stylesheet-Ressourcen

Die {{httpheader("Integrity-Policy")}} und {{httpheader("Integrity-Policy-Report-Only")}} HTTP-Header werden nun für Style-Ressourcen unterstützt. Diese ermöglichen es Websites, entweder [Subressourcen-Integritätsgarantien](/de/docs/Web/Security/Subresource_Integrity) für Styles zu erzwingen oder nur die Verstöße gegen die Richtlinie zu melden.
Beachten Sie, dass Firefox Berichtsendpunkte ignoriert und Verstöße in der Entwicklerkonsole protokolliert.
Bei Verwendung von `Integrity-Policy` blockiert der Browser das Laden von Styles, auf die in einem {{HTMLElement("link")}} Element mit [`rel="stylesheet"`](/de/docs/Web/HTML/Reference/Attributes/rel#stylesheet) verwiesen wird, die entweder das [`integrity`](/de/docs/Web/HTML/Reference/Elements/script#integrity) Attribut fehlen oder die einen Integritätsschlüssel haben, der nicht das auf dem Server vorgefundene Ressourcen entspricht.
([Firefox Fehler 1976656](https://bugzil.la/1976656)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 142                 | Nein                     |
| Developer Edition | 142                 | Nein                     |
| Beta              | 142                 | Nein                     |
| Release           | 142                 | Nein                     |

- `security.integrity_policy.stylesheet.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Accept-Header mit MIME-Typ image/jxl

Der HTTP [`Accept`](/de/docs/Web/HTTP/Reference/Headers/Accept) Header in [Standardanfragen und Bildanfragen](/de/docs/Web/HTTP/Guides/Content_negotiation/List_of_default_Accept_values) kann über eine Präferenz konfiguriert werden, um die Unterstützung für den `image/jxl` MIME-Typ anzugeben.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 128                 | Nein                     |
| Developer Edition | 128                 | Nein                     |
| Beta              | 128                 | Nein                     |
| Release           | 128                 | Nein                     |

- `image.jxl.enabled`
  - : Setzen Sie auf `true`, um zu aktivieren.

### SameSite=Lax standardmäßig

[`SameSite` Cookies](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) haben einen Standardwert von `Lax`.
Mit dieser Einstellung werden Cookies nur gesendet, wenn ein Nutzer zur Ursprungsseite navigiert, nicht für Cross-Site Subanfragen zum Laden von Bildern oder Frames in eine Drittanbieter-Seite und so weiter.
Weitere Details finden Sie unter [Firefox Fehler 1617609](https://bugzil.la/1617609).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 69                  | Nein                     |
| Developer Edition | 69                  | Nein                     |
| Beta              | 69                  | Nein                     |
| Release           | 69                  | Nein                     |

- `network.cookie.sameSite.laxByDefault`
  - : Setzen Sie auf `true`, um zu aktivieren.

### Access-Control-Allow-Headers Platzhalter deckt nicht Authorization ab

Der [`Access-Control-Allow-Headers`](/de/docs/Web/HTTP/Reference/Headers/Access-Control-Allow-Headers) ist ein Antwort-Header auf eine {{Glossary("Preflight_request", "CORS-Vorabanfrage")}}, die angibt, welche Anfrageheader in der endgültigen Anfrage enthalten sein dürfen.
Die Richtlinie der Antwort kann einen Platzhalter (`*`) enthalten, der angibt, dass die endgültige Anfrage alle Header, außer den `Authorization` Header, enthalten darf.

Standardmäßig schließt Firefox den `Authorization` Header in die endgültige Anfrage ein, nachdem er eine Antwort mit `Access-Control-Allow-Headers: *` erhalten hat.
Stellen Sie die Präferenz auf `false`, um sicherzustellen, dass Firefox den `Authorization` Header nicht einschließt.
Weitere Details finden Sie unter [Firefox Fehler 1687364](https://bugzil.la/1687364).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 115                 | Ja                       |
| Developer Edition | 115                 | Ja                       |
| Beta              | 115                 | Ja                       |
| Release           | 115                 | Ja                       |

- `network.cors_preflight.authorization_covered_by_wildcard`
  - : Setzen Sie auf `true`, um zu aktivieren.

## Entwicklerwerkzeuge

Die Entwicklerwerkzeuge von Mozilla entwickeln sich ständig weiter. Wir experimentieren mit neuen Ideen, fügen neue Funktionen hinzu und testen sie auf den Nightly und Developer Edition Kanälen, bevor wir sie zu Beta und Release durchgehen lassen. Die unten stehenden Funktionen sind der aktuelle Satz von experimentellen Entwicklerwerkzeugfunktionen.

**Keine experimentellen Funktionen in diesem Release-Zyklus.**

## Siehe auch

- [Firefox Entwickler-Veröffentlichungsnotizen](/de/docs/Mozilla/Firefox/Releases)
- [Firefox Nightly](https://www.firefox.com/en-US/channel/desktop/)
- [Firefox Developer Edition](https://www.firefox.com/en-US/channel/desktop/developer/)
