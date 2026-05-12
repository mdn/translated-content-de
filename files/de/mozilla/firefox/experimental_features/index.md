---
title: Experimentelle Funktionen in Firefox
short-title: Experimentelle Funktionen
slug: Mozilla/Firefox/Experimental_features
l10n:
  sourceCommit: fc302e3bf88a1ccee922f95ef85c50a3ead4d640
---

Diese Seite listet die experimentellen und teilweise implementierten Funktionen von Firefox auf, einschließlich sich entwickelnder oder vorgeschlagener Web-Plattform-Standards.
Jeder Eintrag unten enthält Informationen über die Builds, in denen eine Funktion enthalten ist (Nightly, Beta, Developer Edition oder Release), ob sie standardmäßig aktiviert ist oder nicht, und den Namen der **Einstellung**, die Sie verwenden können, um die Funktion zu aktivieren oder zu konfigurieren.
Die Beschreibung jeder Funktion enthält auch Links zu relevanten [Bugzilla-Bugs](https://bugzilla.mozilla.org), die die Funktion implementieren oder aktivieren.
Diese Informationen ermöglichen es Ihnen, experimentelle Funktionen auszuprobieren und Feedback zu geben, bevor sie offiziell veröffentlicht werden.

In Bezug auf den Lebenszyklus erscheinen neue Funktionen normalerweise zuerst in [Nightly](https://www.firefox.com/en-US/channel/desktop/#nightly), wo sie oft standardmäßig aktiviert sind, um frühes Feedback und Tests zu erhalten.
Wenn keine großen Probleme gefunden werden, werden sie in [Beta](https://www.firefox.com/en-US/channel/desktop/#beta) und [Developer Edition](https://www.firefox.com/en-US/channel/desktop/developer/) Vorabversionen aufgenommen. Schließlich werden genehmigte Funktionen im stabilen [Release](https://www.firefox.com/en-US/) veröffentlicht.
Wenn eine Funktion in einer Veröffentlichung standardmäßig aktiviert ist, wird sie nicht mehr als experimentell betrachtet und von dieser Seite entfernt.

Um diese Funktionen zu aktivieren, geben Sie `about:config` in die Adressleiste von Firefox ein, suchen Sie nach der zugehörigen **Einstellung** und ändern Sie deren Wert, in der Regel ein Umschalten zwischen `true` und `false`.
Abhängig von der Funktion müssen Sie möglicherweise den Browser neu starten, damit die Änderung wirksam wird.
Lesen Sie den [Konfigurationseditor von Firefox](https://support.mozilla.org/en-US/kb/about-config-editor-firefox) Support-Artikel für weitere Informationen zum Verwalten von Einstellungen in Firefox.

## HTML

### Layout für input type="search"

Layout für `input type="search"` wurde aktualisiert. Dies führt dazu, dass ein Suchfeld ein Löschsymbol hat, sobald jemand darin zu tippen beginnt, um andere Browser-Implementierungen zu matchen. (Siehe [Firefox-Bug 558594](https://bugzil.la/558594) für weitere Details.)

| Veröffentlichungskanal | Version hinzugefügt | Standardmäßig aktiviert? |
| ---------------------- | ------------------- | ------------------------ |
| Nightly                | 81                  | Nein                     |
| Developer Edition      | 81                  | Nein                     |
| Beta                   | 81                  | Nein                     |
| Release                | 81                  | Nein                     |

- `layout.forms.input-type-search.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Passwortanzeige umschalten

HTML-Passworteingabe-Elemente ([`<input type="password">`](/de/docs/Web/HTML/Reference/Elements/input/password)) enthalten ein "Auge"-Symbol, das umgeschaltet werden kann, um den Passworttext anzuzeigen oder zu verbergen ([Firefox-Bug 502258](https://bugzil.la/502258)).

| Veröffentlichungskanal | Version hinzugefügt | Standardmäßig aktiviert? |
| ---------------------- | ------------------- | ------------------------ |
| Nightly                | 96                  | Nein                     |
| Developer Edition      | 96                  | Nein                     |
| Beta                   | 96                  | Nein                     |
| Release                | 96                  | Nein                     |

- `layout.forms.reveal-password-button.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Zeit-Auswahl in `datetime-local` und `time` Eingabeelementen

Die HTML [`<input type="datetime-local">`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local) und [`<input type="time">`](/de/docs/Web/HTML/Reference/Elements/input/time) Elemente unterstützen einen Zeit-Auswahl. ([Firefox-Bug 1726108](https://bugzil.la/1726108)).

| Veröffentlichungskanal | Version hinzugefügt | Standardmäßig aktiviert? |
| ---------------------- | ------------------- | ------------------------ |
| Nightly                | 144                 | Nein                     |
| Developer Edition      | 144                 | Nein                     |
| Beta                   | 144                 | Nein                     |
| Release                | 144                 | Nein                     |

- `dom.forms.datetime.timepicker`
  - : Auf `true` setzen, um zu aktivieren.

### `alpha` und `colorspace` Attribute in `color` Eingabeelementen

Das HTML [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color) Element unterstützt [`alpha`](/de/docs/Web/HTML/Reference/Elements/input/color#alpha) & [`colorspace`](/de/docs/Web/HTML/Reference/Elements/input/color#colorspace) Attribute. ([Firefox-Bug 1919718](https://bugzil.la/1919718)).

| Veröffentlichungskanal | Version hinzugefügt | Standardmäßig aktiviert? |
| ---------------------- | ------------------- | ------------------------ |
| Nightly                | 149                 | Ja                       |
| Developer Edition      | -                   | -                        |
| Beta                   | -                   | -                        |
| Release                | -                   | -                        |

- `dom.forms.html_color_picker.enabled`
  - : Auf `true` setzen, um zu aktivieren.

## CSS

### Hex-Felder zur Darstellung streunender Steuerzeichen

Diese Funktion rendert Steuerzeichen (Unicode-Kategorie Cc), die nicht Tabulator (`U+0009`), Zeilenumbruch (`U+000A`), Formularvorschub (`U+000C`) und Wagenrücklauf (`U+000D`) sind, als Hexfeld, wenn sie unerwartet sind. (Siehe [Firefox-Bug 1099557](https://bugzil.la/1099557) für weitere Details.)

| Veröffentlichungskanal | Version hinzugefügt | Standardmäßig aktiviert? |
| ---------------------- | ------------------- | ------------------------ |
| Nightly                | 43                  | Ja                       |
| Developer Edition      | 43                  | Nein                     |
| Beta                   | 43                  | Nein                     |
| Release                | 43                  | Nein                     |

- `layout.css.control-characters.visible`
  - : Auf `true` setzen, um zu aktivieren.

### initial-letter Eigenschaft

Die {{cssxref("initial-letter")}} CSS-Eigenschaft ist Teil der [CSS Inline Layout](https://drafts.csswg.org/css-inline/) Spezifikation und erlaubt es Ihnen, festzulegen, wie herabgestufte, angehobene und versenkte Anfangsbuchstaben angezeigt werden. (Siehe [Firefox-Bug 1223880](https://bugzil.la/1223880) für weitere Details.)

| Veröffentlichungskanal | Version hinzugefügt | Standardmäßig aktiviert? |
| ---------------------- | ------------------- | ------------------------ |
| Nightly                | 50                  | Nein                     |
| Developer Edition      | 50                  | Nein                     |
| Beta                   | 50                  | Nein                     |
| Release                | 50                  | Nein                     |

- `layout.css.initial-letter.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### fit-content() Funktion

Die [`fit-content()`](/de/docs/Web/CSS/Reference/Values/fit-content_function) Funktion, wie sie für {{cssxref("width")}} und andere Größenangaben gilt. Diese Funktion wird bereits gut für CSS-Grid-Layout-Spuren unterstützt. (Siehe [Firefox-Bug 1312588](https://bugzil.la/1312588) für weitere Details.)

| Veröffentlichungskanal | Version hinzugefügt | Standardmäßig aktiviert? |
| ---------------------- | ------------------- | ------------------------ |
| Nightly                | 91                  | Nein                     |
| Developer Edition      | 91                  | Nein                     |
| Beta                   | 91                  | Nein                     |
| Release                | 91                  | Nein                     |

- `layout.css.fit-content-function.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Scrollgesteuerte Animationen

Früher "scroll-verbundene Animationen" genannt, hängt eine [scrollgesteuerte Animation](/de/docs/Web/CSS/Guides/Scroll-driven_animations) von der Scrollposition einer Scrollleiste ab, anstatt von der Zeit oder einer anderen Dimension.
Die {{cssxref('scroll-timeline-name')}} und {{cssxref('scroll-timeline-axis')}} Eigenschaften (und die {{cssxref('scroll-timeline')}} Kurzschreibweise) erlauben es Ihnen, anzugeben, dass eine bestimmte Scrollleiste in einem bestimmten benannten Container als Quelle für eine scrollgesteuerte Animation verwendet werden kann.
Die Scroll-Zeitleiste kann dann mit einer [Animation](/de/docs/Web/CSS/Guides/Animations) verbunden werden, indem die {{cssxref('animation-timeline')}} Eigenschaft auf den Namenswert gesetzt wird, der mit `scroll-timeline-name` definiert wurde.

Beim Verwenden der {{cssxref('scroll-timeline')}} Kurzschreibweise muss die Reihenfolge der Eigenschaftswerte {{cssxref('scroll-timeline-name')}} gefolgt von {{cssxref('scroll-timeline-axis')}} sein.
Die Lang- und Kurzschreibweisen der Eigenschaften sind beide hinter der Einstellung verfügbar.
Sie können alternativ die {{cssxref("animation-timeline/scroll")}} Funktionalität mit {{cssxref('animation-timeline')}} verwenden, um anzuzeigen, dass eine Scrollleistenachse in einem Vorfahrens-Element für die Zeitleiste verwendet wird.

Für weitere Informationen siehe [Firefox-Bug 1807685](https://bugzil.la/1807685), [Firefox-Bug 1804573](https://bugzil.la/1804573), [Firefox-Bug 1809005](https://bugzil.la/1809005), [Firefox-Bug 1676791](https://bugzil.la/1676791), [Firefox-Bug 1754897](https://bugzil.la/1754897), [Firefox-Bug 1817303](https://bugzil.la/1817303), und [Firefox-Bug 1737918](https://bugzil.la/1737918).

Die {{cssxref('timeline-scope')}}, {{cssxref('animation-range-start')}} und {{cssxref('animation-range-end')}} Eigenschaften (und die {{cssxref('animation-range')}} Kurzschreibweise) werden noch nicht unterstützt. Für weitere Informationen siehe [Firefox-Bug 1676779](https://bugzil.la/1676779).

| Veröffentlichungskanal | Version hinzugefügt | Standardmäßig aktiviert? |
| ---------------------- | ------------------- | ------------------------ |
| Nightly                | 136                 | Ja                       |
| Developer Edition      | 110                 | Nein                     |
| Beta                   | 110                 | Nein                     |
| Release                | 110                 | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### prefers-reduced-transparency Medienfunktion

Die CSS {{cssxref("@media/prefers-reduced-transparency")}} Medienfunktion ermöglicht es Ihnen, zu erkennen, ob ein Benutzer die Einstellung aktiviert hat, um die Menge an transparenten oder durchscheinenden Schichteffekten auf seinem Gerät zu minimieren.
Siehe ([Firefox-Bug 1736914](https://bugzil.la/1736914)) für weitere Details.

| Veröffentlichungskanal | Version hinzugefügt | Standardmäßig aktiviert? |
| ---------------------- | ------------------- | ------------------------ |
| Nightly                | 113                 | Nein                     |
| Developer Edition      | 113                 | Nein                     |
| Beta                   | 113                 | Nein                     |
| Release                | 113                 | Nein                     |

- `layout.css.prefers-reduced-transparency.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### inverted-colors Medienfunktion

Die CSS {{cssxref("@media/inverted-colors")}} Medienfunktion ermöglicht es Ihnen, zu erkennen, ob ein Benutzeragent oder das zugrunde liegende Betriebssystem Farben invertiert.
Siehe ([Firefox-Bug 1794628](https://bugzil.la/1794628)) für weitere Details.

| Veröffentlichungskanal | Version hinzugefügt | Standardmäßig aktiviert? |
| ---------------------- | ------------------- | ------------------------ |
| Nightly                | 114                 | Nein                     |
| Developer Edition      | 114                 | Nein                     |
| Beta                   | 114                 | Nein                     |
| Release                | 114                 | Nein                     |

- `layout.css.inverted-colors.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Benannte Ansicht Fortschrittszeitachsen-Eigenschaft

Die CSS {{cssxref("view-timeline-name")}} Eigenschaft ermöglicht es Ihnen, einem bestimmten Element einen Namen zu geben, der angibt, dass sein Vorfahren-Scroll-Element die Quelle einer Fortschrittszeitachse der Ansicht ist.
Der Name kann dann der `animation-timeline` zugewiesen werden, die dann das zugehörige Element animiert, während es sich durch den sichtbaren Bereich seines Vorfahren-Scrollers bewegt.
Siehe ([Firefox-Bug 1737920](https://bugzil.la/1737920)) für weitere Details.

| Veröffentlichungskanal | Version hinzugefügt | Standardmäßig aktiviert? |
| ---------------------- | ------------------- | ------------------------ |
| Nightly                | 136                 | Ja                       |
| Developer Edition      | 114                 | Nein                     |
| Beta                   | 114                 | Nein                     |
| Release                | 114                 | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Anonyme Ansicht Fortschrittszeitachsen-Funktion

Die CSS {{cssxref("animation-timeline/view")}} Funktion ermöglicht es Ihnen anzugeben, dass die `animation-timeline` für ein Element eine Fortschrittszeitachse der Ansicht ist, die das Element animiert, während es sich durch den sichtbaren Bereich seines Vorfahren-Scrollers bewegt.
Die Funktion definiert die Achse des übergeordneten Elements, das die Zeitleiste liefert, zusammen mit der Einfassung innerhalb des sichtbaren Bereichs, an dem die Animation beginnt und endet.
Siehe ([Firefox-Bug 1808410](https://bugzil.la/1808410)) für weitere Details.

| Veröffentlichungskanal | Version hinzugefügt | Standardmäßig aktiviert? |
| ---------------------- | ------------------- | ------------------------ |
| Nightly                | 136                 | Ja                       |
| Developer Edition      | 114                 | Nein                     |
| Beta                   | 114                 | Nein                     |
| Release                | 114                 | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Vom Anbieter vorgegebene Transformations-Eigenschaften

Die `-moz-` vorgegebene [CSS transform](/de/docs/Web/CSS/Guides/Transforms) Eigenschaften können durch Setzen der `layout.css.prefixes.transforms` Einstellung auf `false` deaktiviert werden. Die Absicht ist, diese zu deaktivieren, sobald die standardmäßigen CSS-Zoom-Eigenschaften gut unterstützt werden. ([Firefox-Bug 1886134](https://bugzil.la/1886134), [Firefox-Bug 1855763](https://bugzil.la/1855763)).

Speziell wird diese Einstellung die folgenden vorgegebenen Eigenschaften deaktivieren:

- `-moz-backface-visibility`
- `-moz-perspective`
- `-moz-perspective-origin`
- `-moz-transform`
- `-moz-transform-origin`
- `-moz-transform-style`

| Veröffentlichungskanal | Version hinzugefügt | Standardmäßig aktiviert? |
| ---------------------- | ------------------- | ------------------------ |
| Nightly                | 120                 | Ja                       |
| Developer Edition      | 120                 | Ja                       |
| Beta                   | 120                 | Ja                       |
| Release                | 120                 | Ja                       |

- `layout.css.prefixes.transforms`
  - : Auf `true` setzen, um zu aktivieren.

### Symmetrisches `letter-spacing`

Die CSS {{cssxref("letter-spacing")}} Eigenschaft teilt jetzt den angegebenen Buchstabenabstand gleichmäßig auf beiden Seiten jedes Zeichens auf. Dies unterscheidet sich vom aktuellen Verhalten, bei dem der Abstand hauptsächlich auf einer Seite hinzugefügt wird. Dieser Ansatz kann das Textabstand, insbesondere bei gemischter Richtung von Text, verbessern.
([Firefox-Bug 1891446](https://bugzil.la/1891446)).

| Veröffentlichungskanal | Version hinzugefügt | Standardmäßig aktiviert? |
| ---------------------- | ------------------- | ------------------------ |
| Nightly                | 128                 | Ja                       |
| Developer Edition      | 128                 | Ja                       |
| Beta                   | 127                 | Nein                     |
| Release                | 127                 | Nein                     |

- `layout.css.letter-spacing.model`
  - : Auf `true` setzen, um zu aktivieren.

### Zulassen von Pseudo-Elementen nach element-basierten Pseudo-Elementen

Es wurde mit der Arbeit begonnen, [Pseudo-Elemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) wie {{cssxref("::first-letter")}} und {{cssxref("::before")}} zu erlauben, die an [element-basierte Pseudo-Elemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements#element-backed_pseudo-elements) wie {{cssxref("::details-content")}} und {{cssxref("::file-selector-button")}} angehängt werden.

Dies wird es Benutzern ermöglichen, beispielsweise den ersten Buchstaben des {{htmlElement("details")}} Elements zu stylen, indem der CSS-Selektor `::details-content::first-letter` verwendet wird, oder Inhalte vor einem {{HTMLElement("input")}} von [`type="file"`](/de/docs/Web/HTML/Reference/Elements/input/file) hinzuzufügen, indem der CSS-Selektor `::file-selector-button::before` verwendet wird.

Derzeit kann nur die Unterstützung für `::details-content::first-letter` geparst werden, indem `@supports(::details-content::first-letter)` verwendet wird.
Das `::file-selector-button` Pseudo-Element ist noch nicht als elementbasiertes Pseudo-Element markiert, daher gibt es keinen Weg, dies zu testen.
([Firefox-Bug 1953557](https://bugzil.la/1953557), [Firefox-Bug 1941406](https://bugzil.la/1941406)).

| Veröffentlichungskanal | Version hinzugefügt | Standardmäßig aktiviert? |
| ---------------------- | ------------------- | ------------------------ |
| Nightly                | 138                 | Nein                     |
| Developer Edition      | 138                 | Nein                     |
| Beta                   | 138                 | Nein                     |
| Release                | 138                 | Nein                     |

### `:heading` und `:heading()` Pseudo-Klassen

Die {{cssxref(":heading")}} Pseudo-Klasse erlaubt es Ihnen, alle [Überschriftselemente](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) (`<h1>`-`<h6>`) auf einmal zu stylen, anstatt sie einzeln zu adressieren. Die {{cssxref(":heading()")}} funktionale Pseudo-Klasse ermöglicht es Ihnen, Überschriftselemente zu stylen, die einer durch Kommas getrennten Liste von Ganzzahlen entsprechen, die den Überschriftenstufen entsprechen. ([Firefox-Bug 1974386](https://bugzil.la/1974386) & [Firefox-Bug 1984310](https://bugzil.la/1984310)).

| Veröffentlichungskanal | Version hinzugefügt | Standardmäßig aktiviert? |
| ---------------------- | ------------------- | ------------------------ |
| Nightly                | 142                 | Nein                     |
| Developer Edition      | 142                 | Nein                     |
| Beta                   | 142                 | Nein                     |
| Release                | 142                 | Nein                     |

- `layout.css.heading-selector.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### `@custom-media` Regel

Die {{cssxref("@custom-media")}} CSS @-Regel definiert Aliase für lange oder komplexe Medienabfragen. Anstatt die gleiche hartcodierte `<media-query-list>` in mehreren `@media` Regeln zu wiederholen, kann sie einmal in einer `@custom-media` Regel definiert und im gesamten Stylesheet bei Bedarf referenziert werden. ([Firefox-Bug 1744292](https://bugzil.la/1744292)).

| Veröffentlichungskanal | Version hinzugefügt | Standardmäßig aktiviert? |
| ---------------------- | ------------------- | ------------------------ |
| Nightly                | 148                 | Nein                     |
| Developer Edition      | 148                 | Nein                     |
| Beta                   | 148                 | Nein                     |
| Release                | 148                 | Nein                     |

- `layout.css.custom-media.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### `<attr-type>` Werte in `attr()` CSS Funktion

Die {{cssxref("attr")}} CSS Funktion unterstützt jetzt [`<attr-type>`](/de/docs/Web/CSS/Reference/Values/attr#attr-type) Werte. Dies ermöglicht es Ihnen, anzugeben, wie ein Attributwert in einen CSS-Wert geparst wird und diese Werte direkt von [`data-*`](/de/docs/Web/HTML/How_to/Use_data_attributes) zu entnehmen. ([Firefox-Bug 1986631](https://bugzil.la/1986631), [Firefox-Bug 1998245](https://bugzil.la/1998245))

| Veröffentlichungskanal | Version hinzugefügt | Standardmäßig aktiviert? |
| ---------------------- | ------------------- | ------------------------ |
| Nightly                | 149                 | Nein                     |
| Developer Edition      | 149                 | Nein                     |
| Beta                   | 149                 | Nein                     |
| Release                | 149                 | Nein                     |

- `layout.css.attr.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Namensbereiche in `attr()` CSS Funktion

Die {{cssxref("attr")}} CSS Funktion akzeptiert jetzt [namensbereichsbezogene Attribute](/de/docs/Web/CSS/Reference/Values/attr#namespaces). Dies ermöglicht es Ihnen, Attribute von Elementen in [XML](/de/docs/Web/XML)-basierten Sprachen, wie [SVG](/de/docs/Web/SVG), zu entnehmen und entsprechend zu stylen. ([Firefox-Bug 2014060](https://bugzil.la/2014060).

| Veröffentlichungskanal | Version hinzugefügt | Standardmäßig aktiviert? |
| ---------------------- | ------------------- | ------------------------ |
| Nightly                | 150                 | Nein                     |
| Developer Edition      | 150                 | Nein                     |
| Beta                   | 150                 | Nein                     |
| Release                | 150                 | Nein                     |

- `layout.css.attr.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Absolut positionierte Elemente in mehrspaltigen Containern und beim Drucken

Absolut positionierte Elemente innerhalb von [mehrspaltigen Containern](/de/docs/Web/CSS/Guides/Multicol_layout) und beim Drucken werden jetzt korrekt positioniert und fragmentiert.
Dies verbessert die Interoperabilität mit anderen Browsern und verhindert Layout-Probleme wie überlappenden Text oder Inhaltsverlust.
([Firefox-Bug 2018797](https://bugzil.la/2018797)).

| Veröffentlichungskanal | Version hinzugefügt | Standardmäßig aktiviert? |
| ---------------------- | ------------------- | ------------------------ |
| Nightly                | 150                 | Ja                       |
| Developer Edition      | 150                 | Nein                     |
| Beta                   | 150                 | Nein                     |
| Release                | 150                 | Nein                     |

- `layout.abspos.fragmentainer-aware-positioning.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### `@container style()` Bereichs-Abfragesyntax

Die [`@container`](/de/docs/Web/CSS/Reference/At-rules/@container) CSS @-Regel [`style()`](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries) Abfragen unterstützen jetzt die _Bereichssyntax_. Dies ermöglicht es Ihnen, zu prüfen, ob ein Container eine gültige CSS-Benutzerdefinierte Eigenschaft hat und deren Wert mit Vergleichsoperatoren wie `>`, `<`, `>=`, und `<=` zu vergleichen und entsprechend Stile auf seine Kinder anzuwenden. ([Firefox-Bug 2024601](https://bugzil.la/2024601)).

| Veröffentlichungskanal | Version hinzugefügt | Standardmäßig aktiviert? |
| ---------------------- | ------------------- | ------------------------ |
| Nightly                | 151                 | Nein                     |
| Developer Edition      | 151                 | Nein                     |
| Beta                   | 151                 | Nein                     |
| Release                | 151                 | Nein                     |

- `layout.css.attr.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Korrektur für verschachtelte scrollbare Bereiche

Diese Implementierung wurde hinzugefügt, um ein Problem zu beheben, bei dem scrollbare Inhalte unerreichbar waren. Wenn eine Scrollleiste auf `display: none;` oder `width: 0;` gesetzt ist, würden die Scrollleisten von verschachtelten scrollbaren Bereichen übereinander gestapelt, was bedeutet, dass einige Inhalte möglicherweise nicht erreichbar sind. Dies bedeutet jedoch, dass der `@supports selector(::-webkit-scrollbar)` Check `true` zurückgeben wird, obwohl das [`::-webkit-scrollbar`](/de/docs/Web/CSS/Reference/Selectors/::-webkit-scrollbar) Pseudo-Element nicht wirklich unterstützt wird. ([Firefox-Bug 1977511](https://bugzil.la/1977511)).

| Veröffentlichungskanal | Version hinzugefügt | Standardmäßig aktiviert? |
| ---------------------- | ------------------- | ------------------------ |
| Nightly                | 151                 | Ja                       |
| Developer Edition      | 151                 | Nein                     |
| Beta                   | 151                 | Nein                     |
| Release                | 151                 | Nein                     |

- `layout.css.fake-webkit-scrollbar.enabled`
  - : Auf `true` setzen, um zu aktivieren.

## SVG

**Keine experimentellen Funktionen in diesem Veröffentlichungszyklus.**

## JavaScript

### Mehrere Import-Mappings

Unterstützung für [mehrere Import-Mappings](/de/docs/Web/HTML/Reference/Elements/script/type/importmap#merging_multiple_import_maps).
Diese geben Entwicklern mehr Flexibilität beim Strukturieren und Laden von JavaScript-Modulen, da sie nicht mehr alle Modulzuweisungen im Voraus kennen und in einem einzigen Import-Mapping alle Module deklarieren müssen.
([Firefox-Bug 1916277](https://bugzil.la/1916277)).

| Veröffentlichungskanal | Version hinzugefügt | Standardmäßig aktiviert? |
| ---------------------- | ------------------- | ------------------------ |
| Nightly                | 150                 | Nein                     |
| Developer Edition      | 150                 | Nein                     |
| Beta                   | 150                 | Nein                     |
| Release                | 150                 | Nein                     |

- `dom.multiple_import_maps.enabled`
  - : Auf `true` setzen, um zu aktivieren.

## APIs

### Scopierte benutzerdefinierte Elementregister

Die Unterstützung für [scopierte benutzerdefinierte Elementregister](/de/docs/Web/API/Web_components/Using_custom_elements#scoped_custom_element_registries) wird implementiert.
Scopierte Register erlauben einem Schattenbaum, ein unabhängiges [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry) zu erstellen, dessen Definitionen nur auf dieses bestimmte DOM-Teilbaum angewendet werden.
Dies kann verwendet werden, um Konflikte zu vermeiden, bei denen mehrere Web-Komponenten Elemente mit demselben Namen deklarieren.

Die Implementierung umfasst:

- `customElementRegistry` Eigenschaft auf [`Document`](/de/docs/Web/API/Document), [`Element`](/de/docs/Web/API/Element), und [`ShadowRoot`](/de/docs/Web/API/ShadowRoot).
  ([Firefox-Bug 2018900](https://bugzil.la/2018900)).

| Veröffentlichungskanal | Version hinzugefügt | Standardmäßig aktiviert? |
| ---------------------- | ------------------- | ------------------------ |
| Nightly                | 150                 | Nein                     |
| Developer Edition      | 150                 | Nein                     |
| Beta                   | 150                 | Nein                     |
| Release                | 150                 | Nein                     |

- `dom.scoped-custom-element-registries.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### CSS Typed Object Model Level 1

Arbeiten zur Implementierung des [CSS Typed OM Level 1](https://drafts.css-houdini.org/css-typed-om/) haben begonnen.
Zum Beispiel wird die [`to()`](/de/docs/Web/API/CSSNumericValue/to) Methode der [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) Schnittstelle für die Umwandlung eines CSS-numerischen Wertes von einer Einheit in eine andere unterstützt.
([Firefox-Bug 1278697](https://bugzil.la/1278697)).

| Veröffentlichungskanal | Version hinzugefügt | Standardmäßig aktiviert? |
| ---------------------- | ------------------- | ------------------------ |
| Nightly                | 149                 | Nein                     |
| Developer Edition      | 149                 | Nein                     |
| Beta                   | 149                 | Nein                     |
| Release                | 149                 | Nein                     |

- `layout.css.typed-om.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Benachrichtigungsaktionen und maxActions Eigenschaften

Die [`actions`](/de/docs/Web/API/Notification/actions) schreibgeschützte Eigenschaft und die [`maxActions`](/de/docs/Web/API/Notification/maxActions_static) statische schreibgeschützte Eigenschaft der [`Notification`](/de/docs/Web/API/Notification) Schnittstelle werden in Nightly auf Desktop unterstützt.
Diese enthalten die mit [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification) festgelegten Benachrichtigungsaktionen und die maximal einstellbare Anzahl von Aktionen.
([Firefox-Bug 1225110](https://bugzil.la/1225110), [Firefox-Bug 1963263](https://bugzil.la/1963263)).

| Veröffentlichungskanal | Version hinzugefügt | Standardmäßig aktiviert? |
| ---------------------- | ------------------- | ------------------------ |
| Nightly                | 138                 | Ja (nur Desktop)         |
| Developer Edition      | 138                 | Nein                     |
| Beta                   | 138                 | Nein                     |
| Release                | 138                 | Nein                     |

- `dom.webnotifications.actions.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Grafiken: Canvas, WebGL, und WebGPU

#### WebGL: Entwurfs-Erweiterungen

Wenn diese Präferenz aktiviert ist, werden alle WebGL-Erweiterungen, die sich derzeit im "Entwurf" befinden und getestet werden, zur Verwendung aktiviert. Derzeit gibt es keine WebGL-Erweiterungen, die von Firefox getestet werden.

#### WebGPU API

Die [WebGPU API](/de/docs/Web/API/WebGPU_API) bietet Unterstützung auf niedriger Ebene für die Durchführung von Berechnung und Grafik-Rendering unter Verwendung der [Graphics Processing Unit](https://en.wikipedia.org/wiki/Graphics_Processing_Unit) (GPU) des Benutzergeräts oder Computers.
Ab Version 142 ist dies auf Windows in allen Kontexten mit Ausnahme von Service-Workern aktiviert.
Ab Version 147 ist dies auf macOS auf Apple Silicon in allen Browsing-Kontexten mit Ausnahme von Service-Workern aktiviert.
Für andere Plattformen wie Linux und macOS auf Intel Silicon ist es in Nightly aktiviert.
Siehe [Firefox-Bug 1602129](https://bugzil.la/1602129) für unseren Fortschritt bei dieser API.

| Veröffentlichungskanal | Version hinzugefügt | Standardmäßig aktiviert?                                                               |
| ---------------------- | ------------------- | -------------------------------------------------------------------------------------- |
| Nightly                | 141                 | Ja                                                                                     |
| Developer Edition      | 141                 | Nein (Ja auf Windows und macOS auf Apple Silicon, nicht einschließlich Service-Worker) |
| Beta                   | 141                 | Nein (Ja auf Windows und macOS auf Apple Silicon, nicht einschließlich Service-Worker) |
| Release                | 141                 | Nein (Ja auf Windows und macOS auf Apple Silicon, nicht einschließlich Service-Worker) |

- `dom.webgpu.enabled`
  - : Auf `true` setzen, um zu aktivieren (in Nightly und auf Windows in allen Veröffentlichungen aktiviert)
- `dom.webgpu.service-workers.enabled`
  - : Auf `true` setzen, um zu aktivieren (in Nightly aktiviert)

### WebRTC und Medien

Die folgenden experimentellen Funktionen umfassen diejenigen, die in Medien-APIs wie der [WebRTC API](/de/docs/Web/API/WebRTC_API), der [Web Audio API](/de/docs/Web/API/Web_Audio_API), der [Media Source Extensions API](/de/docs/Web/API/Media_Source_Extensions_API), der [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API) und der [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) gefunden werden.

#### HTMLMediaElement Eigenschaften: audioTracks und videoTracks

Durch Aktivierung dieser Funktion werden die [`HTMLMediaElement.audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks) und [`HTMLMediaElement.videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks) Eigenschaften zu allen HTML-Medienelementen hinzugefügt. Da Firefox jedoch derzeit keine Unterstützung für mehrere Audio- und Videospuren bietet, funktionieren die häufigsten Anwendungsfälle für diese Eigenschaften nicht, daher sind sie beide standardmäßig deaktiviert. Siehe [Firefox-Bug 1057233](https://bugzil.la/1057233) für weitere Details.

| Veröffentlichungskanal | Version hinzugefügt | Standardmäßig aktiviert? |
| ---------------------- | ------------------- | ------------------------ |
| Nightly                | 33                  | Nein                     |
| Developer Edition      | 33                  | Nein                     |
| Beta                   | 33                  | Nein                     |
| Release                | 33                  | Nein                     |

- `media.track.enabled`
  - : Auf `true` setzen, um zu aktivieren.

#### Asynchrone SourceBuffer hinzu- und entfernen

Dies fügt die auf Versprechen basierenden Methoden [`appendBufferAsync()`](/de/docs/Web/API/SourceBuffer/appendBufferAsync) und [`removeAsync()`](/de/docs/Web/API/SourceBuffer/removeAsync) zum Hinzufügen und Entfernen von Mediensource-Puffern zur [`SourceBuffer`](/de/docs/Web/API/SourceBuffer) Schnittstelle hinzu. Siehe [Firefox-Bug 1280613](https://bugzil.la/1280613) und [Firefox-Bug 778617](https://bugzil.la/778617) für weitere Informationen.

| Veröffentlichungskanal | Version hinzugefügt | Standardmäßig aktiviert? |
| ---------------------- | ------------------- | ------------------------ |
| Nightly                | 62                  | Nein                     |
| Developer Edition      | 62                  | Nein                     |
| Beta                   | 62                  | Nein                     |
| Release                | 62                  | Nein                     |

- `media.mediasource.experimental.enabled`
  - : Auf `true` setzen, um zu aktivieren.

#### AVIF-Compliance-Strenge

Die Präferenz `image.avif.compliance_strictness` kann verwendet werden, um die _Strenge_ zu steuern, die beim Verarbeiten von [AVIF](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) Bildern angewendet wird.
Dies ermöglicht es Firefox-Benutzern, Bilder anzuzeigen, die in einigen anderen Browsern dargestellt werden, auch wenn sie nicht strikt konform sind.

| Veröffentlichungskanal | Version hinzugefügt | Standardwert |
| ---------------------- | ------------------- | ------------ |
| Nightly                | 92                  | 1            |
| Developer Edition      | 92                  | 1            |
| Beta                   | 92                  | 1            |
| Release                | 92                  | 1            |

- `image.avif.compliance_strictness`
  - : Numerischer Wert, der ein _Strengeniveau_ angibt. Erlaubte Werte sind:
    - `0`: Permissiv. Akzeptiere Bilder mit Spezifikationsverletzungen sowohl in Empfehlungen ("sollte" Sprache) als auch in Anforderungen ("muss" Sprache), vorausgesetzt, sie können sicher oder eindeutig interpretiert werden.
    - `1` **(Standard)**: Gemischt. Lehne Verletzungen von Anforderungen ("muss") ab, erlaube jedoch Verletzungen von Empfehlungen ("sollte").
    - `2`: Strikt. Lehne alle Verletzungen von spezifizierten Anforderungen oder Empfehlungen ab.

#### JPEG XL Unterstützung

Firefox unterstützt [JPEG XL](https://jpeg.org/jpegxl/) Bilder, wenn diese Funktion aktiviert ist.
Siehe [Firefox-Bug 1539075](https://bugzil.la/1539075) für weitere Details.

Beachten Sie, dass die Funktion, wie unten gezeigt, nur in Nightly-Builds verfügbar ist (unabhängig davon, ob die Präferenz gesetzt ist).
In Firefox 149 wurde der vorherige C++ [JPEG XL](https://jpeg.org/jpegxl/) Bild-Decoder durch eine neue Rust-basierte Implementierung ersetzt, die die `jxl-rs` Bibliothek verwendet ([Firefox-Bug 1986393](https://bugzil.la/1986393)).

| Veröffentlichungskanal | Version hinzugefügt | Standardmäßig aktiviert? |
| ---------------------- | ------------------- | ------------------------ |
| Nightly                | 90                  | Nein                     |
| Developer Edition      | —                   | —                        |
| Beta                   | —                   | —                        |
| Release                | —                   | —                        |

- `image.jxl.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### WebVR API (Deaktiviert)

Die veraltete [WebVR API](/de/docs/Web/API/WebVR_API) ist auf dem Weg der Entfernung.
Sie ist standardmäßig in allen Builds deaktiviert [Firefox-Bug 1750902](https://bugzil.la/1750902).

| Veröffentlichungskanal | Version entfernt | Standardmäßig aktiviert? |
| ---------------------- | ---------------- | ------------------------ |
| Nightly                | 98               | Nein                     |
| Developer Edition      | 98               | Nein                     |
| Beta                   | 98               | Nein                     |
| Release                | 98               | Nein                     |

- `dom.vr.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### GeometryUtils Methoden: convertPointFromNode(), convertRectFromNode(), und convertQuadFromNode()

Die `GeometryUtils` Methoden `convertPointFromNode()`, `convertRectFromNode()`, und `convertQuadFromNode()` mappen den gegebenen Punkt, das Rechteck oder das Viereck von dem [`Node`](/de/docs/Web/API/Node), auf dem sie aufgerufen werden, zu einem anderen Knoten. (Siehe [Firefox-Bug 918189](https://bugzil.la/918189) für weitere Details.)

| Veröffentlichungskanal | Version hinzugefügt | Standardmäßig aktiviert? |
| ---------------------- | ------------------- | ------------------------ |
| Nightly                | 31                  | Ja                       |
| Developer Edition      | 31                  | Nein                     |
| Beta                   | 31                  | Nein                     |
| Release                | 31                  | Nein                     |

- `layout.css.convertFromNode.enable`
  - : Auf `true` setzen, um zu aktivieren.

### GeometryUtils Methode: getBoxQuads()

Die `GeometryUtils` Methode `getBoxQuads()` gibt die CSS-Boxen für einen [`Node`](/de/docs/Web/API/Node) relativ zu jedem anderen Knoten oder Viewport zurück. (Siehe [Firefox-Bug 917755](https://bugzil.la/917755) für weitere Details.)

| Veröffentlichungskanal | Version hinzugefügt | Standardmäßig aktiviert? |
| ---------------------- | ------------------- | ------------------------ |
| Nightly                | 31                  | Ja                       |
| Developer Edition      | 31                  | Nein                     |
| Beta                   | 31                  | Nein                     |
| Release                | 31                  | Nein                     |

- `layout.css.getBoxQuads.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Payment Request API

#### Primäres Zahlungshandling

Die [Payment Request API](/de/docs/Web/API/Payment_Request_API) bietet Unterstützung für die Handhabung von webbasierten Zahlungen innerhalb von Webinhalten oder Apps. Aufgrund eines Bugs, der während des Testens der Benutzeroberfläche aufgetreten ist, haben wir beschlossen, die Veröffentlichung dieser API zu verschieben, während Diskussionen über mögliche Änderungen an der API stattfinden. Die Arbeit daran läuft weiter. (Siehe [Firefox-Bug 1318984](https://bugzil.la/1318984) für weitere Details.)

| Veröffentlichungskanal | Version hinzugefügt | Standardmäßig aktiviert? |
| ---------------------- | ------------------- | ------------------------ |
| Nightly                | 55                  | Nein                     |
| Developer Edition      | 55                  | Nein                     |
| Beta                   | 55                  | Nein                     |
| Release                | 55                  | Nein                     |

- `dom.payments.request.enabled`
  - : Auf `true` setzen, um zu aktivieren.
- `dom.payments.request.supportedRegions`
  - : Ländercodes als kommaseparatorische Zulassungsliste von Regionen (z.B. `US,CA`).

### WebShare API

Die [Web Share API](/de/docs/Web/API/Web_Share_API) ermöglicht das Teilen von Dateien, URLs und anderen Daten von einer Website aus.
Diese Funktion ist auf Android in allen Builds aktiviert, steht jedoch auf Desktop hinter einer Präferenz (sofern nicht anders angegeben).

| Veröffentlichungskanal | Version geändert | Standardmäßig aktiviert?                    |
| ---------------------- | ---------------- | ------------------------------------------- |
| Nightly                | 71               | Nein (Standard). Ja (Windows ab Version 92) |
| Developer Edition      | 71               | Nein                                        |
| Beta                   | 71               | Nein                                        |
| Release                | 71               | Nein (Desktop). Ja (Android).               |

- `dom.webshare.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Notifications API

Benachrichtigungen haben die [`requireInteraction`](/de/docs/Web/API/Notification/requireInteraction) Eigenschaft standardmäßig auf true auf Windows-Systemen und in der Nightly-Version ([Firefox-Bug 1794475](https://bugzil.la/1794475)).

| Veröffentlichungskanal | Version geändert | Standardmäßig aktiviert? |
| ---------------------- | ---------------- | ------------------------ |
| Nightly                | 117              | Ja                       |
| Developer Edition      | 117              | Nein                     |
| Beta                   | 117              | Nein                     |
| Release                | 117              | Nur Windows              |

- `dom.webnotifications.requireinteraction.enabled`
  - : Auf `true` setzen, um zu aktivieren.

## Sicherheit und Privatsphäre

### Labeling unsicherer Seiten

Die beiden `security.insecure_connection_text_*` Einstellungen fügen ein "Nicht sicher" Textlabel in der Adressleiste neben dem traditionellen Schlosssymbol hinzu, wenn eine Seite unsicher geladen wird (das heißt, unter Verwendung von {{Glossary("HTTP", "HTTP")}} anstelle von {{Glossary("HTTPS", "HTTPS")}}). Die `browser.urlbar.trimHttps` Einstellung kürzt das `https:` Präfix aus URLs in der Adressleiste. Siehe [Firefox-Bug 1853418](https://bugzil.la/1853418) für weitere Details.

| Veröffentlichungskanal | Version hinzugefügt | Standardmäßig aktiviert? |
| ---------------------- | ------------------- | ------------------------ |
| Nightly                | 121                 | Ja                       |
| Developer Edition      | 60                  | Nein                     |
| Beta                   | 60                  | Nein                     |
| Release                | 60                  | Nein                     |

- `security.insecure_connection_text.enabled`
  - : Auf `true` setzen, um das Textlabel für den normalen Browsing-Modus zu aktivieren.
- `security.insecure_connection_text.pbmode.enabled`
  - : Auf `true` setzen, um das Textlabel für den privaten Browsing-Modus zu aktivieren.
- `browser.urlbar.trimHttps`
  - : Auf `true` setzen, um das `https:` Präfix aus URLs in der Adressleiste zu kürzen.

### Einschränkung von Inhalten für Erwachsene mit `<meta name="rating">`

Das nicht standardisierte [`<meta name="rating">`](/de/docs/Web/HTML/Reference/Elements/meta) Element kann auf einer Webseite enthalten sein, um den Inhalt der Seite als beschränkt/erwachsen zu kennzeichnen. Zum Zeitpunkt des Schreibens sind zwei mögliche `content` Werte möglich, `adult` ([definiert von Google](https://developers.google.com/search/docs/specialty/explicit/guidelines#add-metadata)) und `RTA-5042-1996-1400-1577-RTA` ([definiert von ASACP](https://www.rtalabel.org/?content=howto#top)), die denselben Effekt haben (mehr Optionen könnten in der Zukunft hinzugefügt werden).

Die folgenden `<meta>` Elemente sind gleichwertig:

```html
<meta name="rating" content="adult" />
<meta name="rating" content="RTA-5042-1996-1400-1577-RTA" />
```

Browser, die dieses Element erkennen, können dann Schritte unternehmen, um Nutzer am Ansehen des Inhalts zu hindern. Die Implementierung von Firefox ersetzt die Seite mit dem Inhalt, der unter `about:restricted` gefunden wird, welcher dem Benutzer erklärt, dass er versucht, eingeschränkt zugängliche Inhalte zu betrachten, erklärt, warum er sie nicht ansehen kann und gibt ihm einen Zurück-Button, um zur vorherigen Seite zurückzukehren.

Siehe [Firefox-Bug 1991135](https://bugzil.la/1991135) für weitere Details.

| Veröffentlichungskanal | Version hinzugefügt | Standardmäßig aktiviert? |
| ---------------------- | ------------------- | ------------------------ |
| Nightly                | 146                 | Nein                     |
| Developer Edition      | 146                 | Nein                     |
| Beta                   | 146                 | Nein                     |
| Release                | 146                 | Nein                     |

- `security.restrict_to_adults.always`
  - : Auf `true` setzen, um den Zugriff auf Webseiten zu beschränken, die sich selbst als erwachsen ausweisen, indem sie ein `<meta name="rating">` Element einschließen.
- `security.restrict_to_adults.respect_platform`
  - : Auf `true` setzen, um den Zugriff auf Webseiten zu beschränken, die sich selbst als erwachsen ausweisen, indem sie ein `<meta name="rating">` Element nur dann einfügen, wenn angemessene Elternkontrollen auf dem zugrunde liegenden Betriebssystem gesetzt sind (z.B. sind die macOS _Inhalt & Privatsphäre_-Einstellungen gesetzt, um expliziten Webinhalt zu beschränken).

### Permissions Policy / Feature policy

[Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) erlaubt es Webentwicklern, bestimmte Funktionen und APIs im Browser selektiv zu aktivieren, zu deaktivieren und ihr Verhalten zu ändern. Es ist ähnlich wie CSP, aber steuert Funktionen statt Sicherheitsverhalten.
Dies wird in Firefox als **Feature Policy** implementiert, dem Namen, der in einer früheren Version der Spezifikation verwendet wurde.

Beachten Sie, dass unterstützte Richtlinien über das [`allow`](/de/docs/Web/HTML/Reference/Elements/iframe#allow) Attribut auf `<iframe>` Elementen gesetzt werden können, selbst wenn die Benutzereinstellung nicht gesetzt ist.

| Veröffentlichungskanal | Version hinzugefügt | Standardmäßig aktiviert? |
| ---------------------- | ------------------- | ------------------------ |
| Nightly                | 65                  | Nein                     |
| Developer Edition      | 65                  | Nein                     |
| Beta                   | 65                  | Nein                     |
| Release                | 65                  | Nein                     |

- `dom.security.featurePolicy.header.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Datenschutzfreundliche Attributions-API (PPA)

Die [PPA-API](https://support.mozilla.org/en-US/kb/privacy-preserving-attribution) bietet eine Alternative zum Benutzer-Tracking für Anzeigenattribution unter Verwendung des neuen `navigator.privateAttribution` Objekts mit den Methoden `saveImpression()` und `measureConversion()`. Lesen Sie mehr über PPA [im ursprünglichen Erklärer](https://github.com/mozilla/explainers/tree/main/archive/ppa-experiment) und die [vorgeschlagene Spezifikation](https://w3c.github.io/ppa/). Dieses Experiment kann für Websites über [origin trial](https://wiki.mozilla.org/Origin_Trials) oder im Browser durch Setzen der Präferenz auf `1` aktiviert werden. ([Firefox-Bug 1900929](https://bugzil.la/1900929)).

| Veröffentlichungskanal | Version hinzugefügt | Standardmäßig aktiviert? |
| ---------------------- | ------------------- | ------------------------ |
| Nightly                | 128                 | Nein                     |
| Developer Edition      | 128                 | Nein                     |
| Beta                   | 128                 | Nein                     |
| Release                | 128                 | Nein                     |

- `dom.origin-trials.private-attribution.state`
  - : Auf `true` setzen, um zu aktivieren.

## HTTP

### Integritätsrichtlinie für Stylesheet-Ressourcen

Die {{httpheader("Integrity-Policy")}} und {{httpheader("Integrity-Policy-Report-Only")}} HTTP-Header werden jetzt für Stilressourcen unterstützt. Diese ermöglichen es Websites, entweder [Subressourcen-Integritätsgarantien](/de/docs/Web/Security/Defenses/Subresource_Integrity) für Stile durchzusetzen oder nur Verstöße gegen die Richtlinie zu melden.
Beachten Sie, dass Firefox Meldeendpunkte ignoriert und Verstöße in der Entwicklerkonsole protokolliert.
Wenn `Integrity-Policy` verwendet wird, blockiert der Browser das Laden von Stilen, die in einem {{HTMLElement("link")}} Element mit [`rel="stylesheet"`](/de/docs/Web/HTML/Reference/Attributes/rel#stylesheet) referenziert werden, die entweder das [`integrity`](/de/docs/Web/HTML/Reference/Elements/script#integrity) Attribut nicht besitzen oder einen Integritätshash haben, der nicht mit der Ressource auf dem Server übereinstimmt.
([Firefox-Bug 1976656](https://bugzil.la/1976656)).

| Veröffentlichungskanal | Version hinzugefügt | Standardmäßig aktiviert? |
| ---------------------- | ------------------- | ------------------------ |
| Nightly                | 142                 | Nein                     |
| Developer Edition      | 142                 | Nein                     |
| Beta                   | 142                 | Nein                     |
| Release                | 142                 | Nein                     |

- `security.integrity_policy.stylesheet.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Idempotency-Key

Der {{httpheader("Idempotency-Key")}} HTTP-Anforderungsheader kann von Website-Clientcode verwendet werden, um eine {{HTTPMethod("POST")}} oder {{HTTPMethod("PATCH")}} Anfragen {{Glossary("idempotent", "idempotent")}} zu machen, wenn sie mit einem Server verwendet werden, der sie unterstützt.
Die Spezifikation gibt an, dass der Server dokumentieren und bewerben sollte, welche Endpunkte diesen Header benötigen, das Format des Schlüssels und die erwarteten Fehlermeldungen.

Firefox fügt _automatisch_ den Header mit einem eindeutigen Schlüssel für jede neue `POST`-Anfrage hinzu, falls er nicht bereits vom Seite-Clientcode hinzugefügt wurde.
Dies vereinfacht den erforderlichen Clientcode, um mit Servern zu arbeiten, die die Funktion unterstützen.

([Firefox-Bug 1830022](https://bugzil.la/1830022)).

| Veröffentlichungskanal | Version hinzugefügt | Standardmäßig aktiviert? |
| ---------------------- | ------------------- | ------------------------ |
| Nightly                | 135                 | Nein                     |
| Developer Edition      | 135                 | Nein                     |
| Beta                   | 135                 | Nein                     |
| Release                | 135                 | Nein                     |

- `network.http.idempotencyKey.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Accept-Header mit MIME-Typ image/jxl

Der HTTP [`Accept`](/de/docs/Web/HTTP/Reference/Headers/Accept) Header in [Standardanforderungen und Bildanforderungen](/de/docs/Web/HTTP/Guides/Content_negotiation/List_of_default_Accept_values) kann über eine Präferenz konfiguriert werden, um die Unterstützung für den `image/jxl` MIME-Typ anzuzeigen.

| Veröffentlichungskanal | Version hinzugefügt | Standardmäßig aktiviert? |
| ---------------------- | ------------------- | ------------------------ |
| Nightly                | 128                 | Nein                     |
| Developer Edition      | 128                 | Nein                     |
| Beta                   | 128                 | Nein                     |
| Release                | 128                 | Nein                     |

- `image.jxl.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### SameSite=Lax standardmäßig

[`SameSite` Cookies](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) haben standardmäßig den Wert `Lax`.
Mit dieser Einstellung werden Cookies nur gesendet, wenn ein Benutzer zur Ursprungsseite navigiert, nicht jedoch bei Cross-Site-Anforderungen zum Laden von Bildern oder Frames in eine Drittanbieter-Site usw.
Für weitere Details siehe [Firefox-Bug 1617609](https://bugzil.la/1617609).

| Veröffentlichungskanal | Version hinzugefügt | Standardmäßig aktiviert? |
| ---------------------- | ------------------- | ------------------------ |
| Nightly                | 69                  | Nein                     |
| Developer Edition      | 69                  | Nein                     |
| Beta                   | 69                  | Nein                     |
| Release                | 69                  | Nein                     |

- `network.cookie.sameSite.laxByDefault`
  - : Auf `true` setzen, um zu aktivieren.

### Access-Control-Allow-Headers Wildcard deckt nicht die Authorization ab

Der [`Access-Control-Allow-Headers`](/de/docs/Web/HTTP/Reference/Headers/Access-Control-Allow-Headers) ist ein Antwortheader auf eine {{Glossary("Preflight_request", "CORS Preflight-Anfrage")}}, der angibt, welche Anforderungsheader in der endgültigen Anfrage enthalten sein dürfen.
Der Antwortrichtlinie kann einen Platzhalter (`*`) enthalten, der angibt, dass die endgültige Anfrage alle Header außer dem `Authorization` Header enthalten darf.

Standardmäßig fügt Firefox den `Authorization` Header in die endgültige Anfrage nach Erhalt einer Antwort mit `Access-Control-Allow-Headers: *` ein.
Stellen Sie die Präferenz auf `false` ein, um sicherzustellen, dass Firefox den `Authorization` Header nicht einfügt.
Für weitere Details siehe [Firefox-Bug 1687364](https://bugzil.la/1687364).

| Veröffentlichungskanal | Version hinzugefügt | Standardmäßig aktiviert? |
| ---------------------- | ------------------- | ------------------------ |
| Nightly                | 115                 | Ja                       |
| Developer Edition      | 115                 | Ja                       |
| Beta                   | 115                 | Ja                       |
| Release                | 115                 | Ja                       |

- `network.cors_preflight.authorization_covered_by_wildcard`
  - : Auf `true` setzen, um zu aktivieren.

## Entwickler-Tools

Die Entwickler-Tools von Mozilla entwickeln sich ständig weiter. Wir experimentieren mit neuen Ideen, fügen neue Funktionen hinzu und testen sie in den Nightly- und Developer Edition-Kanälen, bevor wir sie zur Beta und Veröffentlichung weiterleiten. Die unten aufgeführten Funktionen sind der aktuelle Bestand an experimentellen Funktionen für Entwickler-Tools.

**Keine experimentellen Funktionen in diesem Veröffentlichungszyklus.**

## Siehe auch

- [Firefox Entwickler-Versionshinweise](/de/docs/Mozilla/Firefox/Releases)
- [Firefox Nightly](https://www.firefox.com/en-US/channel/desktop/)
- [Firefox Developer Edition](https://www.firefox.com/en-US/channel/desktop/developer/)
