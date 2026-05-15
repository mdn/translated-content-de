---
title: Experimentelle Funktionen in Firefox
short-title: Experimentelle Funktionen
slug: Mozilla/Firefox/Experimental_features
l10n:
  sourceCommit: 6726ca44f6e211414f4279bebd47ca18a4cde51a
---

Diese Seite listet die experimentellen und teilweise implementierten Funktionen von Firefox auf, einschließlich sich entwickelnder oder vorgeschlagener Webplattform-Standards. Jeder Eintrag enthält Informationen über die Versionen, in denen eine Funktion enthalten ist (Nightly, Beta, Developer Edition oder Release), ob sie standardmäßig aktiviert ist oder nicht, und den Namen der **Einstellung**, mit der Sie die Funktion aktivieren oder konfigurieren können. Die Beschreibung jeder Funktion enthält auch Links zu relevanten [Bugzilla-Fehlern](https://bugzilla.mozilla.org), die die Funktion implementieren oder aktivieren. Diese Informationen ermöglichen es Ihnen, experimentelle Funktionen auszuprobieren und Feedback zu geben, bevor sie offiziell veröffentlicht werden.

In Bezug auf den Lebenszyklus erscheinen neue Funktionen normalerweise zuerst in [Nightly](https://www.firefox.com/en-US/channel/desktop/#nightly), wo sie oft standardmäßig für frühes Feedback und Tests aktiviert sind. Wenn keine wesentlichen Probleme auftreten, werden sie in [Beta](https://www.firefox.com/en-US/channel/desktop/#beta) und [Developer Edition](https://www.firefox.com/en-US/channel/desktop/developer/) Pre-Release-Versionen aufgenommen. Schließlich werden genehmigte Funktionen im [stabilen Release](https://www.firefox.com/en-US/) Kanal veröffentlicht. Wenn eine Funktion in einer Veröffentlichung standardmäßig aktiviert ist, wird sie nicht mehr als experimentell betrachtet und von dieser Seite entfernt.

Um diese Funktionen zu aktivieren, geben Sie `about:config` in die Firefox-Adressleiste ein, suchen Sie die zugehörige **Einstellung** und ändern Sie deren Wert, der normalerweise ein Umschalten zwischen `true` und `false` ist. Je nach Funktion kann es notwendig sein, den Browser neu zu starten, damit die Änderung wirksam wird. Weitere Informationen zum Verwalten von Einstellungen in Firefox finden Sie im [Firefox-Konfigurationseditor](https://support.mozilla.org/en-US/kb/about-config-editor-firefox) Support-Artikel.

## HTML

### Layout für `input type="search"`

Das Layout für `input type="search"` wurde aktualisiert. Dies führt dazu, dass ein Suchfeld ein Löschen-Symbol hat, sobald jemand mit der Eingabe beginnt, um andere Browserimplementierungen zu matchen. (Siehe [Firefox-Fehler 558594](https://bugzil.la/558594) für weitere Details.)

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 81                   | Nein                     |
| Developer Edition | 81                   | Nein                     |
| Beta              | 81                   | Nein                     |
| Release           | 81                   | Nein                     |

- `layout.forms.input-type-search.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Passwortanzeige umschalten

HTML-Passworteingabeelemente ([`<input type="password">`](/de/docs/Web/HTML/Reference/Elements/input/password)) enthalten ein "Auge"-Symbol, das umgeschaltet werden kann, um das Passwort anzuzeigen oder zu verbergen ([Firefox-Fehler 502258](https://bugzil.la/502258)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 96                   | Nein                     |
| Developer Edition | 96                   | Nein                     |
| Beta              | 96                   | Nein                     |
| Release           | 96                   | Nein                     |

- `layout.forms.reveal-password-button.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Zeitwahlschalter bei `datetime-local` und `time` Eingabeelementen

Die HTML-Eingabeelemente [`<input type="datetime-local">`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local) und [`<input type="time">`](/de/docs/Web/HTML/Reference/Elements/input/time) unterstützen einen Zeitwahlschalter. ([Firefox-Fehler 1726108](https://bugzil.la/1726108)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 144                  | Nein                     |
| Developer Edition | 144                  | Nein                     |
| Beta              | 144                  | Nein                     |
| Release           | 144                  | Nein                     |

- `dom.forms.datetime.timepicker`
  - : Auf `true` setzen, um zu aktivieren.

### `alpha` und `colorspace` Attribute in `color` Eingabeelementen

Das HTML-Eingabeelement [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color) unterstützt die Attribute [`alpha`](/de/docs/Web/HTML/Reference/Elements/input/color#alpha) & [`colorspace`](/de/docs/Web/HTML/Reference/Elements/input/color#colorspace). ([Firefox-Fehler 1919718](https://bugzil.la/1919718)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 149                  | Ja                       |
| Developer Edition | -                    | -                        |
| Beta              | -                    | -                        |
| Release           | -                    | -                        |

- `dom.forms.html_color_picker.enabled`
  - : Auf `true` setzen, um zu aktivieren.

## CSS

### Hex-Boxen zur Anzeige verstreuter Steuerzeichen

Diese Funktion rendert Steuerzeichen (Unicode-Kategorie Cc) außer _Tab_ (`U+0009`), _Zeilenumbruch_ (`U+000A`), _Seitenvorschub_ (`U+000C`) und _Wagenrücklauf_ (`U+000D`) als Hex-Boxen, wenn sie nicht erwartet werden. (Siehe [Firefox-Fehler 1099557](https://bugzil.la/1099557) für weitere Details.)

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 43                   | Ja                       |
| Developer Edition | 43                   | Nein                     |
| Beta              | 43                   | Nein                     |
| Release           | 43                   | Nein                     |

- `layout.css.control-characters.visible`
  - : Auf `true` setzen, um zu aktivieren.

### initial-letter Eigenschaft

Die {{cssxref("initial-letter")}} CSS-Eigenschaft ist Teil der [CSS Inline Layout](https://drafts.csswg.org/css-inline/) Spezifikation und erlaubt Ihnen, festzulegen, wie abgesenkte, hervorgehobene und eingefügte Anfangsbuchstaben angezeigt werden. (Siehe [Firefox-Fehler 1223880](https://bugzil.la/1223880) für weitere Details.)

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 50                   | Nein                     |
| Developer Edition | 50                   | Nein                     |
| Beta              | 50                   | Nein                     |
| Release           | 50                   | Nein                     |

- `layout.css.initial-letter.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### fit-content() Funktion

Die [`fit-content()`](/de/docs/Web/CSS/Reference/Values/fit-content_function) Funktion bezieht sich auf {{cssxref("width")}} und andere Größen-Eigenschaften. Diese Funktion wird bereits für die CSS-Grid-Layout-Spaltenbreite gut unterstützt. (Siehe [Firefox-Fehler 1312588](https://bugzil.la/1312588) für weitere Details.)

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 91                   | Nein                     |
| Developer Edition | 91                   | Nein                     |
| Beta              | 91                   | Nein                     |
| Release           | 91                   | Nein                     |

- `layout.css.fit-content-function.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Scrollgesteuerte Animationen

Früher als "scrollverknüpfte Animationen" bezeichnet, ist eine [scrollgesteuerte Animation](/de/docs/Web/CSS/Guides/Scroll-driven_animations) von der Scrollposition eines Scrollbalkens abhängig anstelle von Zeit oder einer anderen Dimension. Die Eigenschaften {{cssxref('scroll-timeline-name')}} und {{cssxref('scroll-timeline-axis')}} (sowie die Kurzschreibweise {{cssxref('scroll-timeline')}}) ermöglichen es Ihnen, festzulegen, dass ein bestimmter Scrollbalken in einem bestimmten benannten Container als Quelle für eine scrollgesteuerte Animation verwendet werden kann. Die Scroll-Timeline kann dann durch Setzen der {{cssxref('animation-timeline')}} Eigenschaft mit der benannten Wertverwendung `scroll-timeline-name` mit einer [Animation](/de/docs/Web/CSS/Guides/Animations) verknüpft werden.

Wenn Sie die Kurzschreibweise {{cssxref('scroll-timeline')}} verwenden, muss die Reihenfolge der Eigenschaftswerte {{cssxref('scroll-timeline-name')}} gefolgt von {{cssxref('scroll-timeline-axis')}} sein. Die Lang- und Kurzschreibweise der Eigenschaften sind beide hinter der Einstellung verfügbar. Alternativ können Sie die funktionale Notation {{cssxref("animation-timeline/scroll")}} mit {{cssxref('animation-timeline')}} verwenden, um zu kennzeichnen, dass eine Scrollbalkenachse in einem Vorfahrenelement für die Timeline verwendet wird.

Für weitere Informationen siehe [Firefox-Fehler 1807685](https://bugzil.la/1807685), [Firefox-Fehler 1804573](https://bugzil.la/1804573), [Firefox-Fehler 1809005](https://bugzil.la/1809005), [Firefox-Fehler 1676791](https://bugzil.la/1676791), [Firefox-Fehler 1754897](https://bugzil.la/1754897), [Firefox-Fehler 1817303](https://bugzil.la/1817303) und [Firefox-Fehler 1737918](https://bugzil.la/1737918).

Die Eigenschaften {{cssxref('timeline-scope')}}, {{cssxref('animation-range-start')}} und {{cssxref('animation-range-end')}} (sowie die Kurzschreibweise {{cssxref('animation-range')}}) werden noch nicht unterstützt. Für weitere Informationen siehe [Firefox-Fehler 1676779](https://bugzil.la/1676779).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 136                  | Ja                       |
| Developer Edition | 110                  | Nein                     |
| Beta              | 110                  | Nein                     |
| Release           | 110                  | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### prefers-reduced-transparency Medienfunktion

Die CSS-Medienfunktion {{cssxref("@media/prefers-reduced-transparency")}} ermöglicht es Ihnen zu erkennen, ob ein Benutzer die Einstellung aktiviert hat, um die Menge an transparenten oder transluzenten Effektenschichten auf seinem Gerät zu minimieren. Siehe ([Firefox-Fehler 1736914](https://bugzil.la/1736914)) für weitere Details.

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 113                  | Nein                     |
| Developer Edition | 113                  | Nein                     |
| Beta              | 113                  | Nein                     |
| Release           | 113                  | Nein                     |

- `layout.css.prefers-reduced-transparency.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### inverted-colors Medienfunktion

Die CSS-Medienfunktion {{cssxref("@media/inverted-colors")}} ermöglicht es Ihnen zu erkennen, ob ein Benutzeragent oder das zugrunde liegende Betriebssystem die Farben invertiert. Siehe ([Firefox-Fehler 1794628](https://bugzil.la/1794628)) für weitere Details.

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 114                  | Nein                     |
| Developer Edition | 114                  | Nein                     |
| Beta              | 114                  | Nein                     |
| Release           | 114                  | Nein                     |

- `layout.css.inverted-colors.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Benannte Fortschrittstimelinen-Eigenschaft

Die CSS-Eigenschaft {{cssxref("view-timeline-name")}} ermöglicht es Ihnen, einem bestimmten Element einen Namen zu geben, der angibt, dass sein übergeordnetes Scroller-Element die Quelle einer Fortschrittstimelinen-Ansicht ist. Der Name kann dann der `animation-timeline` zugewiesen werden, die das zugehörige Element animiert, während es sich durch den sichtbaren Bereich seines übergeordneten Scrollers bewegt. Siehe ([Firefox-Fehler 1737920](https://bugzil.la/1737920)) für weitere Details.

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 136                  | Ja                       |
| Developer Edition | 114                  | Nein                     |
| Beta              | 114                  | Nein                     |
| Release           | 114                  | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Anonyme Fortschrittstimelinen-Funktion

Die CSS-Funktion {{cssxref("animation-timeline/view")}} ermöglicht es Ihnen festzulegen, dass die `animation-timeline` für ein Element eine Fortschrittstimeline ist, die das Element animiert, während es sich durch den sichtbaren Bereich seines übergeordneten Scrollers bewegt. Die Funktion definiert die Achse des Elternelements, die die Timeline bereitstellt, sowie den Rand innerhalb des sichtbaren Bereichs, an dem die Animation beginnt und endet. Siehe ([Firefox-Fehler 1808410](https://bugzil.la/1808410)) für weitere Details.

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 136                  | Ja                       |
| Developer Edition | 114                  | Nein                     |
| Beta              | 114                  | Nein                     |
| Release           | 114                  | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Vendor-prefixed transform-Eigenschaften

Die mit `-moz-` präfixierten [CSS transform](/de/docs/Web/CSS/Guides/Transforms) Eigenschaften können durch das Setzen der `layout.css.prefixes.transforms` Einstellung auf `false` deaktiviert werden. Das Ziel ist es, diese zu deaktivieren, sobald die standardmäßigen CSS-Zoom-Eigenschaften gut unterstützt werden. ([Firefox-Fehler 1886134](https://bugzil.la/1886134), [Firefox-Fehler 1855763](https://bugzil.la/1855763)).

Insbesondere wird diese Einstellung die folgenden präfixierten Eigenschaften deaktivieren:

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

### Symmetrisches `letter-spacing`

Die CSS-Eigenschaft {{cssxref("letter-spacing")}} teilt jetzt den angegebenen Buchstabenabstand gleichmäßig auf beiden Seiten jedes Zeichens auf. Dies unterscheidet sich von der aktuellen Verhaltensweise, bei der die Abstände hauptsächlich auf einer Seite hinzugefügt werden. Dieser Ansatz kann die Textabstände verbessern, insbesondere bei gemischten Richtungstexten.
([Firefox-Fehler 1891446](https://bugzil.la/1891446)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 128                  | Ja                       |
| Developer Edition | 128                  | Ja                       |
| Beta              | 127                  | Nein                     |
| Release           | 127                  | Nein                     |

- `layout.css.letter-spacing.model`
  - : Auf `true` setzen, um zu aktivieren.

### Zulassen von Pseudoelementen nach elementgestützten Pseudoelementen

Es wurde begonnen, daran zu arbeiten, [Pseudoelemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) wie {{cssxref("::first-letter")}} und {{cssxref("::before")}} zu erlauben, an [elementgestützte Pseudoelemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements#element-backed_pseudo-elements) wie {{cssxref("::details-content")}} und {{cssxref("::file-selector-button")}} angehängt zu werden.

Dies ermöglicht es Benutzern, beispielsweise den ersten Buchstaben des {{htmlElement("details")}} Elements zu stylen, indem der CSS-Selektor `::details-content::first-letter` verwendet wird, oder Inhalt vor einem {{HTMLElement("input") }} vom [Typ `file`](/de/docs/Web/HTML/Reference/Elements/input/file) hinzuzufügen, indem der CSS-Selektor `::file-selector-button::before` verwendet wird.

Derzeit kann nur die Unterstützung für `::details-content::first-letter` mit `@supports(::details-content::first-letter)` analysiert werden. Das `::file-selector-button` Pseudoelement ist noch nicht als elementgestütztes Pseudoelement markiert, sodass es keinen Weg gibt, dies zu testen. ([Firefox-Fehler 1953557](https://bugzil.la/1953557), [Firefox-Fehler 1941406](https://bugzil.la/1941406)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 138                  | Nein                     |
| Developer Edition | 138                  | Nein                     |
| Beta              | 138                  | Nein                     |
| Release           | 138                  | Nein                     |

### `:heading` und `:heading()` Pseudoklassen

Die {{cssxref(":heading")}} Pseudoklasse ermöglicht es Ihnen, alle [Überschriftselemente](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) (`<h1>`-`<h6>`) auf einmal zu stylen, anstatt sie einzeln anzusprechen. Die funktionale Pseudoklasse {{cssxref(":heading()")}} ermöglicht es Ihnen, Überschriftselemente zu stylen, die einer durch Kommas getrennten Liste von Ganzzahlen entsprechen, die den Überschriftsebenen entsprechen. ([Firefox-Fehler 1974386](https://bugzil.la/1974386) & [Firefox-Fehler 1984310](https://bugzil.la/1984310)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 142                  | Nein                     |
| Developer Edition | 142                  | Nein                     |
| Beta              | 142                  | Nein                     |
| Release           | 142                  | Nein                     |

- `layout.css.heading-selector.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### `@custom-media` At-Regel

Die {{cssxref("@custom-media")}} CSS-At-Regel definiert Aliase für lange oder komplexe Medienabfragen. Anstatt die gleiche festkodierte `<media-query-list>` in mehreren `@media` At-Regeln zu wiederholen, kann sie einmal in einer `@custom-media` At-Regel definiert und bei Bedarf im gesamten Stylesheet referenziert werden. ([Firefox-Fehler 1744292](https://bugzil.la/1744292)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 148                  | Nein                     |
| Developer Edition | 148                  | Nein                     |
| Beta              | 148                  | Nein                     |
| Release           | 148                  | Nein                     |

- `layout.css.custom-media.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### `<attr-type>` Werte in `attr()` CSS-Funktion

Die {{cssxref("attr")}} CSS-Funktion unterstützt nun [`<attr-type>`](/de/docs/Web/CSS/Reference/Values/attr#attr-type) Werte. Dadurch können Sie festlegen, wie ein Attributwert in einen CSS-Wert geparst wird und diese Werte direkt von [`data-*`](/de/docs/Web/HTML/How_to/Use_data_attributes) übernehmen. ([Firefox-Fehler 1986631](https://bugzil.la/1986631), [Firefox-Fehler 1998245](https://bugzil.la/1998245))

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 149                  | Nein                     |
| Developer Edition | 149                  | Nein                     |
| Beta              | 149                  | Nein                     |
| Release           | 149                  | Nein                     |

- `layout.css.attr.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Namensraum-Attribute in `attr()` CSS-Funktion

Die {{cssxref("attr")}} CSS-Funktion akzeptiert nun [namensraum-spezifische Attribute](/de/docs/Web/CSS/Reference/Values/attr#namespaces). Damit können Sie Attribute von Elementen [XML](/de/docs/Web/XML)-basierter Sprachen, wie [SVG](/de/docs/Web/SVG) stylemäßig anpassen. ([Firefox-Fehler 2014060](https://bugzil.la/2014060).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 150                  | Nein                     |
| Developer Edition | 150                  | Nein                     |
| Beta              | 150                  | Nein                     |
| Release           | 150                  | Nein                     |

- `layout.css.attr.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Absolut positionierte Elemente in Multi-Spalten-Containern und beim Drucken

Absolut positionierte Elemente innerhalb von [Multi-Spalten-Containern](/de/docs/Web/CSS/Guides/Multicol_layout) und beim Drucken werden jetzt korrekt positioniert und aufgeteilt. Dies verbessert die Interoperabilität mit anderen Browsern und verhindert Layout-Probleme wie überlappenden Text oder Inhaltsverlust. ([Firefox-Fehler 2018797](https://bugzil.la/2018797)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 150                  | Ja                       |
| Developer Edition | 150                  | Nein                     |
| Beta              | 150                  | Nein                     |
| Release           | 150                  | Nein                     |

- `layout.abspos.fragmentainer-aware-positioning.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### `@container style()` Bereichssyntax-Abfragen

Die [`@container`](/de/docs/Web/CSS/Reference/At-rules/@container) CSS-At-Regel [`style()`](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries) Abfragen unterstützen jetzt die _Bereichssyntax_. Dies ermöglicht Ihnen zu überprüfen, ob ein Container eine gültige CSS-Benutzerdefinierte-Eigenschaft hat und seinen Wert mit Vergleichsoperatoren wie `>` `<`, `>=`, und `<=` zu vergleichen und die Stile entsprechend auf seine Kinder anzuwenden. ([Firefox-Fehler 2024601](https://bugzil.la/2024601)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 151                  | Nein                     |
| Developer Edition | 151                  | Nein                     |
| Beta              | 151                  | Nein                     |
| Release           | 151                  | Nein                     |

- `layout.css.attr.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### `field-sizing` Eigenschaft

Die {{cssxref("field-sizing")}} CSS-Eigenschaft erlaubt es Ihnen, das Größenverhalten von Formularelementen zu steuern. Diese Eigenschaft hat zwei Werte: `content` erlaubt es den Elementen, ihre Größe anzupassen, um ihrem Inhalt zu entsprechen, und `fixed` setzt eine feste Größe der Elemente. ([Firefox-Fehler 1977176](https://bugzil.la/1977176)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 151                  | Ja                       |
| Developer Edition | 151                  | Nein                     |
| Beta              | 151                  | Nein                     |
| Release           | 151                  | Nein                     |

- `layout.css.field-sizing.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Fix für verschachtelte scrollbare Bereiche

Diese Implementierung wurde hinzugefügt, um ein Problem zu beheben, bei dem scrollbarer Inhalt unzugänglich war. Wenn ein Scrollbalken auf `display: none;` oder `width: 0;` gesetzt war, wurden die Scrollbalken verschachtelter scrollbarer Bereiche übereinander gestapelt, was bedeutete, dass ein Teil des Inhalts möglicherweise nicht erreichbar war. Dies bedeutet jedoch, dass die `@supports selector(::-webkit-scrollbar)` Prüfung `true` zurückgibt, obwohl das [`::-webkit-scrollbar`](/de/docs/Web/CSS/Reference/Selectors/::-webkit-scrollbar) Pseudoelement nicht wirklich unterstützt wird. ([Firefox-Fehler 1977511](https://bugzil.la/1977511)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 151                  | Ja                       |
| Developer Edition | 151                  | Nein                     |
| Beta              | 151                  | Nein                     |
| Release           | 151                  | Nein                     |

- `layout.css.fake-webkit-scrollbar.enabled`
  - : Auf `true` setzen, um zu aktivieren.

## SVG

**Keine experimentellen Funktionen in diesem Release-Zyklus.**

## JavaScript

### Mehrere Import-Maps

Unterstützung für [mehrere Import-Maps](/de/docs/Web/HTML/Reference/Elements/script/type/importmap#merging_multiple_import_maps). Diese geben Entwicklern mehr Flexibilität bei der Strukturierung und dem Laden von JavaScript-Modulen, da sie nicht mehr alle ihre Modulzuordnungen im Voraus kennen und sie in einer einzigen Import-Map erklären müssen. ([Firefox-Fehler 1916277](https://bugzil.la/1916277)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 150                  | Nein                     |
| Developer Edition | 150                  | Nein                     |
| Beta              | 150                  | Nein                     |
| Release           | 150                  | Nein                     |

- `dom.multiple_import_maps.enabled`
  - : Auf `true` setzen, um zu aktivieren.

## APIs

### Begrenzte Registries für benutzerdefinierte Elemente

Unterstützung für [begrenzte Registries für benutzerdefinierte Elemente](/de/docs/Web/API/Web_components/Using_custom_elements#scoped_custom_element_registries) wird implementiert. Begrenzte Registries erlauben einem Schattenbaum, ein unabhängiges [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry) zu erstellen, dessen Definitionen nur für diesen speziellen DOM-Unterbaum gelten. Dies kann genutzt werden, um Kollisionen zu vermeiden, bei denen mehrere Webkomponenten Elemente mit dem gleichen Namen deklarieren.

Die Implementierung umfasst:

- `customElementRegistry` Eigenschaft auf [`Document`](/de/docs/Web/API/Document), [`Element`](/de/docs/Web/API/Element) und [`ShadowRoot`](/de/docs/Web/API/ShadowRoot). ([Firefox-Fehler 2018900](https://bugzil.la/2018900)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 150                  | Nein                     |
| Developer Edition | 150                  | Nein                     |
| Beta              | 150                  | Nein                     |
| Release           | 150                  | Nein                     |

- `dom.scoped-custom-element-registries.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### CSS Typed Object Model Level 1

Implementierungsarbeiten am [CSS Typed OM Level 1](https://drafts.css-houdini.org/css-typed-om/) haben begonnen. Beispielsweise wird die [`to()`](/de/docs/Web/API/CSSNumericValue/to) Methode der [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) Schnittstelle unterstützt, um einen CSS-numerischen Wert von einer Einheit in eine andere umzuwandeln. ([Firefox-Fehler 1278697](https://bugzil.la/1278697)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 149                  | Nein                     |
| Developer Edition | 149                  | Nein                     |
| Beta              | 149                  | Nein                     |
| Release           | 149                  | Nein                     |

- `layout.css.typed-om.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Notification Aktionen und maxActions Eigenschaften

Die [`actions`](/de/docs/Web/API/Notification/actions) schreibgeschützte Eigenschaft und die [`maxActions`](/de/docs/Web/API/Notification/maxActions_static) statische schreibgeschützte Eigenschaft der [`Notification`](/de/docs/Web/API/Notification) Schnittstelle werden in Nightly auf Desktop unterstützt. Diese enthalten die Benachrichtigungsaktionen, die mit [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification) gesetzt wurden, und die maximale Anzahl von Aktionen, die gesetzt werden können. ([Firefox-Fehler 1225110](https://bugzil.la/1225110), [Firefox-Fehler 1963263](https://bugzil.la/1963263)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 138                  | Ja (nur Desktop)         |
| Developer Edition | 138                  | Nein                     |
| Beta              | 138                  | Nein                     |
| Release           | 138                  | Nein                     |

- `dom.webnotifications.actions.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Grafik: Canvas, WebGL und WebGPU

#### WebGL: Entwurfs-Erweiterungen

Wenn diese Einstellung aktiviert ist, sind alle aktuellen WebGL-Erweiterungen im "Entwurf"-Status, die getestet werden, zur Nutzung aktiviert. Derzeit werden keine WebGL-Erweiterungen von Firefox getestet.

#### WebGPU API

Die [WebGPU API](/de/docs/Web/API/WebGPU_API) bietet grundlegende Unterstützung für die Durchführung von Computer- und Grafik-Rendering mit der [Graphics Processing Unit](https://de.wikipedia.org/wiki/Graphics_Processing_Unit) (GPU) des Benutzergeräts oder -computers. Ab Version 142 ist dies in allen Kontexten auf Windows aktiviert, mit Ausnahme von Service-Workern. Ab Version 147 ist dies auf macOS auf Apple Silicon in allen Browsing-Kontexten außer Service-Workern aktiviert. Für andere Plattformen wie Linux und macOS auf Intel Silicon ist es in Nightly aktiviert. Siehe [Firefox-Fehler 1602129](https://bugzil.la/1602129) für unseren Fortschritt bei dieser API.

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert?                                                                 |
| ----------------- | -------------------- | ---------------------------------------------------------------------------------------- |
| Nightly           | 141                  | Ja                                                                                       |
| Developer Edition | 141                  | Nein (Ja unter Windows und macOS auf Apple-Silicon, nicht einschließlich Service-Worker) |
| Beta              | 141                  | Nein (Ja unter Windows und macOS auf Apple-Silicon, nicht einschließlich Service-Worker) |
| Release           | 141                  | Nein (Ja unter Windows und macOS auf Apple-Silicon, nicht einschließlich Service-Worker) |

- `dom.webgpu.enabled`
  - : Auf `true` setzen, um zu aktivieren (aktiviert in Nightly und unter Windows in allen Versionen)
- `dom.webgpu.service-workers.enabled`
  - : Auf `true` setzen, um zu aktivieren (aktiviert in Nightly)

### WebRTC und Medien

Die folgenden experimentellen Funktionen umfassen solche, die in Medien-APIs wie der [WebRTC API](/de/docs/Web/API/WebRTC_API), der [Web Audio API](/de/docs/Web/API/Web_Audio_API), der [Media Source Extensions API](/de/docs/Web/API/Media_Source_Extensions_API), der [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API) und der [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) gefunden werden.

#### HTMLMediaElement Eigenschaften: audioTracks und videoTracks

Wenn diese Funktion aktiviert ist, werden die [`HTMLMediaElement.audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks) und [`HTMLMediaElement.videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks) Eigenschaften zu allen HTML-Medienelementen hinzugefügt. Da Firefox derzeit jedoch keine Unterstützung für mehrere Audio- und Videospuren bietet, funktionieren die häufigsten Anwendungsfälle für diese Eigenschaften nicht, sodass diese standardmäßig deaktiviert sind. Siehe [Firefox-Fehler 1057233](https://bugzil.la/1057233) für weitere Details.

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 33                   | Nein                     |
| Developer Edition | 33                   | Nein                     |
| Beta              | 33                   | Nein                     |
| Release           | 33                   | Nein                     |

- `media.track.enabled`
  - : Auf `true` setzen, um zu aktivieren.

#### Asynchrone SourceBuffer-Addierung und -Entfernung

Dies fügt die auf Promise basierenden Methoden [`appendBufferAsync()`](/de/docs/Web/API/SourceBuffer/appendBufferAsync) und [`removeAsync()`](/de/docs/Web/API/SourceBuffer/removeAsync) zur Hinzufügung und Entfernung von Media-Source-Buffer zur [`SourceBuffer`](/de/docs/Web/API/SourceBuffer) Schnittstelle hinzu. Siehe [Firefox-Fehler 1280613](https://bugzil.la/1280613) und [Firefox-Fehler 778617](https://bugzil.la/778617) für weitere Informationen.

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 62                   | Nein                     |
| Developer Edition | 62                   | Nein                     |
| Beta              | 62                   | Nein                     |
| Release           | 62                   | Nein                     |

- `media.mediasource.experimental.enabled`
  - : Auf `true` setzen, um zu aktivieren.

#### AVIF-Konformitätsstriktheit

Die `image.avif.compliance_strictness` Einstellung kann verwendet werden, um die _Striktheit_ zu steuern, die beim Verarbeiten von [AVIF](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) Bildern angewendet wird. Dies ermöglicht es Firefox-Benutzern, Bilder anzuzeigen, die in einigen anderen Browsern dargestellt werden, auch wenn sie nicht streng konform sind.

| Release-Kanal     | Hinzugefügte Version | Standardwert |
| ----------------- | -------------------- | ------------ |
| Nightly           | 92                   | 1            |
| Developer Edition | 92                   | 1            |
| Beta              | 92                   | 1            |
| Release           | 92                   | 1            |

- `image.avif.compliance_strictness`
  - : Numerischer Wert, der ein \_Striktheits-\_niveau anzeigt. Erlaubte Werte sind:
    - `0`: Permissiv. Akzeptiere Bilder mit Verstößen gegen die Spezifikation sowohl in Empfehlungen ("sollte"-Sprache) als auch in Anforderungen ("muss"-Sprache), vorausgesetzt, dass sie sicher oder eindeutig interpretiert werden können.
    - `1` **(Standardwert)**: Gemischt. Weisen Sie Verstöße gegen Anforderungen ("muss") zurück, erlauben aber Verstöße gegen Empfehlungen ("sollte").
    - `2`: Strikt. Lehnen Sie alle Verstöße gegen spezifizierte Anforderungen oder Empfehlungen ab.

#### Unterstützung für JPEG XL

Firefox unterstützt [JPEG XL](https://jpeg.org/jpegxl/) Bilder, wenn diese Funktion aktiviert ist. Weitere Details finden Sie im [Firefox-Fehler 1539075](https://bugzil.la/1539075).

Beachten Sie, dass, wie unten dargestellt, die Funktion nur in Nightly-Builds verfügbar ist (unabhängig davon, ob die Einstellung gesetzt ist). In Firefox 149 wurde der vorherige C++ [JPEG XL](https://jpeg.org/jpegxl/) Bilddecoder durch eine neue Rust-basierte Implementierung ersetzt, die die `jxl-rs` Bibliothek verwendet ([Firefox-Fehler 1986393](https://bugzil.la/1986393)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 90                   | Nein                     |
| Developer Edition | —                    | —                        |
| Beta              | —                    | —                        |
| Release           | —                    | —                        |

- `image.jxl.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### WebVR API (Deaktiviert)

Die veraltete [WebVR API](/de/docs/Web/API/WebVR_API) ist auf dem Weg zur Entfernung. Sie ist standardmäßig in allen Builds deaktiviert [Firefox-Fehler 1750902](https://bugzil.la/1750902).

| Release-Kanal     | Entfernte Version | Standardmäßig aktiviert? |
| ----------------- | ----------------- | ------------------------ |
| Nightly           | 98                | Nein                     |
| Developer Edition | 98                | Nein                     |
| Beta              | 98                | Nein                     |
| Release           | 98                | Nein                     |

- `dom.vr.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### GeometryUtils Methoden: convertPointFromNode(), convertRectFromNode(), und convertQuadFromNode()

Die `GeometryUtils` Methoden `convertPointFromNode()`, `convertRectFromNode()`, und `convertQuadFromNode()` kartieren die gegebene Punkt-, Rechteck- oder Vierergruppe von dem [`Node`](/de/docs/Web/API/Node), auf dem sie aufgerufen werden, zu einem anderen Node. (Siehe [Firefox-Fehler 918189](https://bugzil.la/918189) für weitere Details.)

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 31                   | Ja                       |
| Developer Edition | 31                   | Nein                     |
| Beta              | 31                   | Nein                     |
| Release           | 31                   | Nein                     |

- `layout.css.convertFromNode.enable`
  - : Auf `true` setzen, um zu aktivieren.

### GeometryUtils Methode: getBoxQuads()

Die `GeometryUtils` Methode `getBoxQuads()` gibt die CSS-Boxen für einen [`Node`](/de/docs/Web/API/Node) relativ zu jedem anderen Node oder viewport zurück. (Siehe [Firefox-Fehler 917755](https://bugzil.la/917755) für weitere Details.)

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

Die [Payment Request API](/de/docs/Web/API/Payment_Request_API) bietet Unterstützung für das Abwickeln webbasierter Zahlungen innerhalb von Webinhalten oder Apps. Aufgrund eines Fehlers, der während des Testens der Benutzeroberfläche aufgetreten ist, haben wir beschlossen, den Versand dieser API zu verschieben, während Diskussionen über potenzielle Änderungen an der API geführt werden. Die Arbeit ist im Gange. (Siehe [Firefox-Fehler 1318984](https://bugzil.la/1318984) für weitere Details.)

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 55                   | Nein                     |
| Developer Edition | 55                   | Nein                     |
| Beta              | 55                   | Nein                     |
| Release           | 55                   | Nein                     |

- `dom.payments.request.enabled`
  - : Auf `true` setzen, um zu aktivieren.
- `dom.payments.request.supportedRegions`
  - : Ländercodes als kommagetrennte Whitelist von Regionen (z. B. `US,CA`).

### WebShare API

Die [Web Share API](/de/docs/Web/API/Web_Share_API) ermöglicht das Teilen von Dateien, URLs und anderen Daten von einer Website. Diese Funktion ist auf Android in allen Builds aktiviert, aber auf Desktop hinter einer Präferenz versteckt (sofern nicht anders angegeben).

| Release-Kanal     | Geänderte Version | Standardmäßig aktiviert?                    |
| ----------------- | ----------------- | ------------------------------------------- |
| Nightly           | 71                | Nein (Standard). Ja (Windows ab Version 92) |
| Developer Edition | 71                | Nein                                        |
| Beta              | 71                | Nein                                        |
| Release           | 71                | Nein (Desktop). Ja (Android).               |

- `dom.webshare.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Benachrichtigungen API

Benachrichtigungen haben die [`requireInteraction`](/de/docs/Web/API/Notification/requireInteraction) Eigenschaft standardmäßig auf Windows-Systemen und in der Nightly-Version auf true gesetzt ([Firefox-Fehler 1794475](https://bugzil.la/1794475)).

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

Die beiden `security.insecure_connection_text_*` Einstellungen fügen ein "Nicht sicher" Textlabel in der Adressleiste neben dem traditionellen Schloss-Symbol hinzu, wenn eine Seite unsicher geladen wird (dh. unter Verwendung von {{Glossary("HTTP", "HTTP")}} anstelle von {{Glossary("HTTPS", "HTTPS")}}). Die `browser.urlbar.trimHttps` Einstellung schneidet das `https:` Präfix von Adressleisten-URLs ab. Siehe [Firefox-Fehler 1853418](https://bugzil.la/1853418) für weitere Details.

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 121                  | Ja                       |
| Developer Edition | 60                   | Nein                     |
| Beta              | 60                   | Nein                     |
| Release           | 60                   | Nein                     |

- `security.insecure_connection_text.enabled`
  - : Auf `true` setzen, um das Textlabel für den normalen Browsing-Modus zu aktivieren.
- `security.insecure_connection_text.pbmode.enabled`
  - : Auf `true` setzen, um das Textlabel für den privaten Browsing-Modus zu aktivieren.
- `browser.urlbar.trimHttps`
  - : Auf `true` setzen, um das `https:` Präfix von Adressleisten-URLs abzuschneiden.

### Einschränkung von Inhalten für Erwachsene mit `<meta name="rating">`

Das nicht-standardisierte [`<meta name="rating">`](/de/docs/Web/HTML/Reference/Elements/meta) Element kann auf einer Webseite enthalten sein, um den Inhalt der Seite als eingeschränkt/erwachsene Inhalte zu kennzeichnen. Zum Zeitpunkt des Schreibens gibt es zwei mögliche `content` Werte, `adult` ([definiert von Google](https://developers.google.com/search/docs/specialty/explicit/guidelines#add-metadata)) und `RTA-5042-1996-1400-1577-RTA` ([definiert von ASACP](https://www.rtalabel.org/?content=howto#top)), die die gleiche Wirkung haben (weitere Optionen können in Zukunft hinzugefügt werden).

Die folgenden `<meta>` Elemente sind gleichwertig:

```html
<meta name="rating" content="adult" />
<meta name="rating" content="RTA-5042-1996-1400-1577-RTA" />
```

Browser, die dieses Element erkennen, können dann Maßnahmen ergreifen, um Benutzer daran zu hindern, den Inhalt anzuzeigen. Die Umsetzung in Firefox ersetzt die Seite mit dem Inhalt, der unter `about:restricted` gefunden wird, was dem Benutzer erklärt, dass er versucht, eingeschränkte Inhalte anzuzeigen, warum er es nicht anzeigen kann, und ihm eine Zurück-Schaltfläche gibt, um von dort, wo er gekommen ist, zurückzukehren.

Siehe [Firefox-Fehler 1991135](https://bugzil.la/1991135) für weitere Details.

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 146                  | Nein                     |
| Developer Edition | 146                  | Nein                     |
| Beta              | 146                  | Nein                     |
| Release           | 146                  | Nein                     |

- `security.restrict_to_adults.always`
  - : Auf `true` setzen, um den Zugriff auf Webseiten zu beschränken, die sich selbst als Erwachsene kennzeichnen, indem sie ein `<meta name="rating">` Element enthalten.
- `security.restrict_to_adults.respect_platform`
  - : Auf `true` setzen, um den Zugriff auf Webseiten zu beschränken, die sich selbst als Erwachsene kennzeichnen, indem sie ein `<meta name="rating">` Element nur dann enthalten lassen, wenn geeignete Elternkontrollen im zugrunde liegenden Betriebssystem eingestellt sind (zum Beispiel sind die macOS _Content & Privacy_ Einstellungen auf restriktiven Web Content gesetzt).

### Berechtigungsrichtlinie / Feature-Richtlinie

[Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) ermöglicht Webentwicklern, bestimmte Funktionen und APIs im Browser selektiv zu aktivieren, zu deaktivieren und zu ändern. Sie ähnelt CSP, steuert jedoch Features anstelle des Sicherheitsverhaltens. Dies wird in Firefox als **Feature Policy** implementiert, den Namen, der in einer früheren Version der Spezifikation verwendet wurde.

Beachten Sie, dass unterstützte Richtlinien durch das [`allow`](/de/docs/Web/HTML/Reference/Elements/iframe#allow) Attribut auf `<iframe>` Elementen gesetzt werden können, selbst wenn die Benutzereinstellung nicht gesetzt ist.

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 65                   | Nein                     |
| Developer Edition | 65                   | Nein                     |
| Beta              | 65                   | Nein                     |
| Release           | 65                   | Nein                     |

- `dom.security.featurePolicy.header.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Datenschutzwahrende Attributions-API (PPA)

[PPA API](https://support.mozilla.org/en-US/kb/privacy-preserving-attribution) bietet eine alternative Möglichkeit zur Benutzerverfolgung für die Werbeattribution mit dem neuen `navigator.privateAttribution` Objekt mit `saveImpression()` und `measureConversion()` Methoden. Weitere Informationen zur PPA finden Sie [im ursprünglichen Erklärer](https://github.com/mozilla/explainers/tree/main/archive/ppa-experiment) und der [vorgeschlagenen Spezifikation](https://w3c.github.io/ppa/). Dieses Experiment kann über [Origin Trials](https://wiki.mozilla.org/Origin_Trials) oder im Browser durch Setzen der Einstellung auf `1` aktiviert werden. ([Firefox-Fehler 1900929](https://bugzil.la/1900929)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 128                  | Nein                     |
| Developer Edition | 128                  | Nein                     |
| Beta              | 128                  | Nein                     |
| Release           | 128                  | Nein                     |

- `dom.origin-trials.private-attribution.state`
  - : Auf `true` setzen, um zu aktivieren.

## HTTP

### Integritätsrichtlinie für Stylesheet-Ressourcen

Die {{httpheader("Integrity-Policy")}} und {{httpheader("Integrity-Policy-Report-Only")}} HTTP-Header werden nun für Stilressourcen unterstützt. Diese ermöglichen es Websites, entweder garantierte [Subressourcenintegrität](/de/docs/Web/Security/Defenses/Subresource_Integrity) für Stile durchzusetzen oder nur Verstöße gegen die Richtlinie zu melden.
Beachten Sie, dass Firefox Berichts-Endpunkte ignoriert und Verstöße in der Entwicklerkonsole protokolliert.
Wenn `Integrity-Policy` verwendet wird, blockiert der Browser das Laden von Stilen, die in einem {{HTMLElement("link")}} Element mit [`rel="stylesheet"`](/de/docs/Web/HTML/Reference/Attributes/rel#stylesheet) referenziert werden und entweder das [`integrity`](/de/docs/Web/HTML/Reference/Elements/script#integrity) Attribut nicht enthalten oder einen Integritätsschlüssel haben, der nicht mit der serverseitigen Ressource übereinstimmt.
([Firefox-Fehler 1976656](https://bugzil.la/1976656)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 142                  | Nein                     |
| Developer Edition | 142                  | Nein                     |
| Beta              | 142                  | Nein                     |
| Release           | 142                  | Nein                     |

- `security.integrity_policy.stylesheet.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Idempotency-Key

Der {{httpheader("Idempotency-Key")}} HTTP-Anforderungs-Header kann von der Client-Software einer Website verwendet werden, um {{HTTPMethod("POST")}} oder {{HTTPMethod("PATCH")}} Anfragen {{Glossary("idempotent", "idempotent")}} zu machen, wenn sie mit einem Server verwendet werden, der es unterstützt. Die Spezifikation gibt an, dass der Server dokumentieren und anzeigen sollte, welche Endpunkte diesen Header benötigen, das Format des Schlüssels und erwartete Fehlermeldungen.

Firefox fügt den Header _automatisch_ mit einem eindeutigen Schlüssel für jede neue `POST` Anfrage hinzu, wenn er nicht bereits von der clientseitigen Software hinzugefügt wurde. Dies vereinfacht den erforderlichen clientseitigen Code, um mit Servern zu arbeiten, die die Funktion unterstützen.

([Firefox-Fehler 1830022](https://bugzil.la/1830022)).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 135                  | Nein                     |
| Developer Edition | 135                  | Nein                     |
| Beta              | 135                  | Nein                     |
| Release           | 135                  | Nein                     |

- `network.http.idempotencyKey.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Accept Header mit MIME-Typ image/jxl

Der HTTP [`Accept`](/de/docs/Web/HTTP/Reference/Headers/Accept) Header in [Standardanfragen und Bildanfragen](/de/docs/Web/HTTP/Guides/Content_negotiation/List_of_default_Accept_values) kann über eine Einstellung so konfiguriert werden, dass er die Unterstützung für den `image/jxl` MIME-Typ angibt.

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 128                  | Nein                     |
| Developer Edition | 128                  | Nein                     |
| Beta              | 128                  | Nein                     |
| Release           | 128                  | Nein                     |

- `image.jxl.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Gleiches Verzeichnis=Lax standardmäßig

[`SameSite` Cookies](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) haben einen Standardwert von `Lax`. Mit dieser Einstellung werden Cookies nur gesendet, wenn sich ein Benutzer zur Ursprungsseite navigiert, nicht jedoch bei bereichsübergreifenden sekundären Anfragen zum Laden von Bildern oder Frames auf einer Drittanbieterseite und so weiter. Weitere Details finden Sie im [Firefox-Fehler 1617609](https://bugzil.la/1617609).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 69                   | Nein                     |
| Developer Edition | 69                   | Nein                     |
| Beta              | 69                   | Nein                     |
| Release           | 69                   | Nein                     |

- `network.cookie.sameSite.laxByDefault`
  - : Auf `true` setzen, um zu aktivieren.

### Access-Control-Allow-Headers-Wildcard umfasst nicht Authorization

Der [`Access-Control-Allow-Headers`](/de/docs/Web/HTTP/Reference/Headers/Access-Control-Allow-Headers) ist ein Antwort-Header zu einer {{Glossary("Preflight_request", "CORS Preflight-Anfrage")}}, der angibt, welche Anfrage-Header in der abschließenden Anfrage enthalten sein dürfen. Die Antwortanweisung kann ein \*\*Zeichen enthalten, das angibt, dass die abschließende Anfrage alle Header außer dem `Authorization` Header enthalten darf.

Standardmäßig inkludiert Firefox den `Authorization` Header in der abschließenden Anfrage, nachdem eine Antwort mit `Access-Control-Allow-Headers: *` erhalten wurde. Die Einstellung auf `false` setzen, um sicherzustellen, dass Firefox den `Authorization` Header nicht inkludiert. Weitere Details finden Sie im [Firefox-Fehler 1687364](https://bugzil.la/1687364).

| Release-Kanal     | Hinzugefügte Version | Standardmäßig aktiviert? |
| ----------------- | -------------------- | ------------------------ |
| Nightly           | 115                  | Ja                       |
| Developer Edition | 115                  | Ja                       |
| Beta              | 115                  | Ja                       |
| Release           | 115                  | Ja                       |

- `network.cors_preflight.authorization_covered_by_wildcard`
  - : auf `true` setzen, um zu aktivieren.

## Entwicklerwerkzeuge

Mozillas Entwicklerwerkzeuge entwickeln sich ständig weiter. Wir experimentieren mit neuen Ideen, fügen neue Funktionen hinzu und testen sie in den Kanälen Nightly und Developer Edition, bevor sie in Beta und Release gelangen. Die nachstehenden Funktionen sind die aktuellen experimentellen Entwicklerwerkzeugfunktionen.

**Keine experimentellen Funktionen in diesem Release-Zyklus.**

## Siehe auch

- [Firefox Entwickler-Releasenotes](/de/docs/Mozilla/Firefox/Releases)
- [Firefox Nightly](https://www.firefox.com/en-US/channel/desktop/)
- [Firefox Developer Edition](https://www.firefox.com/en-US/channel/desktop/developer/)
