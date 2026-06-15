---
title: Experimentelle Funktionen in Firefox
short-title: Experimentelle Funktionen
slug: Mozilla/Firefox/Experimental_features
l10n:
  sourceCommit: 19f3e11f44bce2ba4e76067b868e29314cbb97a0
---

Diese Seite listet die experimentellen und teilweise implementierten Funktionen von Firefox auf, einschließlich sich entwickelnder oder vorgeschlagener Webplattform-Standards. Jeder Eintrag enthält Informationen über die Builds, in denen eine Funktion enthalten ist (Nightly, Beta, Developer Edition oder Release), ob sie standardmäßig aktiviert ist oder nicht und den Namen der **Einstellung**, die Sie zur Aktivierung oder Konfiguration der Funktion verwenden können. Die Beschreibung jeder Funktion enthält auch Links zu relevanten [Bugzilla-Bugs](https://bugzilla.mozilla.org), die die Funktion implementieren oder aktivieren. Diese Informationen ermöglichen es Ihnen, experimentelle Funktionen auszuprobieren und Feedback zu geben, bevor sie offiziell veröffentlicht werden.

In Bezug auf den Lebenszyklus erscheinen neue Funktionen normalerweise zuerst in [Nightly](https://www.firefox.com/en-US/channel/desktop/#nightly), wo sie oft standardmäßig für frühes Feedback und Tests aktiviert sind. Wenn keine größeren Probleme gefunden werden, sind sie in [Beta](https://www.firefox.com/en-US/channel/desktop/#beta) und [Developer Edition](https://www.firefox.com/en-US/channel/desktop/developer/) Pre-Release-Builds enthalten. Schließlich werden genehmigte Funktionen im stabilen [Release](https://www.firefox.com/en-US/)-Kanal ausgeliefert. Wenn eine Funktion standardmäßig in einer Veröffentlichung aktiviert ist, wird sie nicht mehr als experimentell angesehen und von dieser Seite entfernt.

Um diese Funktionen zu aktivieren, geben Sie `about:config` in die Firefox-Adressleiste ein, suchen Sie nach der zugehörigen **Einstellung** und ändern Sie deren Wert, der normalerweise ein Umschalten zwischen `true` und `false` ist. Abhängig von der Funktion müssen Sie den Browser möglicherweise neu starten, damit die Änderung wirksam wird. Lesen Sie den [Firefox Konfigurationseditor](https://support.mozilla.org/en-US/kb/about-config-editor-firefox) Support-Artikel für weitere Informationen zur Verwaltung von Einstellungen in Firefox.

## HTML

### Layout für input type="search"

Das Layout für `input type="search"` wurde aktualisiert. Dies führt dazu, dass ein Suchfeld ein Löschsymbol hat, sobald jemand darin zu tippen beginnt, um die Implementierungen anderer Browser zu entsprechen. (Siehe [Firefox-Bug 558594](https://bugzil.la/558594) für weitere Details.)

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 81                   | Nein                     |
| Developer Edition      | 81                   | Nein                     |
| Beta                   | 81                   | Nein                     |
| Release                | 81                   | Nein                     |

- `layout.forms.input-type-search.enabled`
  - : Setzen Sie `true`, um zu aktivieren.

### Umschalten der Passwortanzeige

HTML-Passworteingabeelemente ([`<input type="password">`](/de/docs/Web/HTML/Reference/Elements/input/password)) enthalten ein "Auge"-Symbol, das umgeschaltet werden kann, um den Passworttext anzuzeigen oder auszublenden ([Firefox-Bug 502258](https://bugzil.la/502258)).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 96                   | Nein                     |
| Developer Edition      | 96                   | Nein                     |
| Beta                   | 96                   | Nein                     |
| Release                | 96                   | Nein                     |

- `layout.forms.reveal-password-button.enabled`
  - : Setzen Sie `true`, um zu aktivieren.

### Zeitwähler in `datetime-local` und `time` Eingabeelementen

Die HTML [`<input type="datetime-local">`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local) und [`<input type="time">`](/de/docs/Web/HTML/Reference/Elements/input/time) Elemente unterstützen einen Zeitwähler. ([Firefox-Bug 1726108](https://bugzil.la/1726108)).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 144                  | Nein                     |
| Developer Edition      | 144                  | Nein                     |
| Beta                   | 144                  | Nein                     |
| Release                | 144                  | Nein                     |

- `dom.forms.datetime.timepicker`
  - : Setzen Sie `true`, um zu aktivieren.

### `alpha` und `colorspace` Attribute in `color` Eingabeelementen

Das HTML [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color) Element unterstützt [`alpha`](/de/docs/Web/HTML/Reference/Elements/input/color#alpha) & [`colorspace`](/de/docs/Web/HTML/Reference/Elements/input/color#colorspace) Attribute. ([Firefox-Bug 1919718](https://bugzil.la/1919718)).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 149                  | Ja                       |
| Developer Edition      | -                    | -                        |
| Beta                   | -                    | -                        |
| Release                | -                    | -                        |

- `dom.forms.html_color_picker.enabled`
  - : Setzen Sie `true`, um zu aktivieren.

## CSS

### Hex-Boxen zur Anzeige verirrter Steuerzeichen

Diese Funktion rendert Steuerzeichen (Unicode-Kategorie Cc) außer _tab_ (`U+0009`), _line feed_ (`U+000A`), _form feed_ (`U+000C`) und _carriage return_ (`U+000D`) als eine Hex-Box, wenn sie unerwartet auftreten. (Siehe [Firefox-Bug 1099557](https://bugzil.la/1099557) für weitere Details.)

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 43                   | Ja                       |
| Developer Edition      | 43                   | Nein                     |
| Beta                   | 43                   | Nein                     |
| Release                | 43                   | Nein                     |

- `layout.css.control-characters.visible`
  - : Setzen Sie `true`, um zu aktivieren.

### initial-letter Eigenschaft

Die {{cssxref("initial-letter")}} CSS-Eigenschaft ist Teil der [CSS Inline Layout](https://drafts.csswg.org/css-inline/) Spezifikation und ermöglicht es Ihnen, anzugeben, wie gesenkte, erhöhte und versenkte Initialbuchstaben angezeigt werden. (Siehe [Firefox-Bug 1223880](https://bugzil.la/1223880) für weitere Details.)

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 50                   | Nein                     |
| Developer Edition      | 50                   | Nein                     |
| Beta                   | 50                   | Nein                     |
| Release                | 50                   | Nein                     |

- `layout.css.initial-letter.enabled`
  - : Setzen Sie `true`, um zu aktivieren.

### fit-content() Funktion

Die [`fit-content()`](/de/docs/Web/CSS/Reference/Values/fit-content_function) Funktion wie sie auf {{cssxref("width")}} und andere Größenbestimmungs-Eigenschaften angewendet wird. Diese Funktion wird für CSS Grid Layout-Spurgrößenbestimmung bereits gut unterstützt. (Siehe [Firefox-Bug 1312588](https://bugzil.la/1312588) für weitere Details.)

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 91                   | Nein                     |
| Developer Edition      | 91                   | Nein                     |
| Beta                   | 91                   | Nein                     |
| Release                | 91                   | Nein                     |

- `layout.css.fit-content-function.enabled`
  - : Setzen Sie `true`, um zu aktivieren.

### Scroll-abhängige Animationen

Früher "scroll-verknüpfte Animationen" genannt, ist eine [scroll-abhängige Animation](/de/docs/Web/CSS/Guides/Scroll-driven_animations), die von der Scroll-Position einer Scrollleiste anstelle von Zeit oder einer anderen Dimension abhängt. Die {{cssxref('scroll-timeline-name')}} und {{cssxref('scroll-timeline-axis')}} Eigenschaften (und die {{cssxref('scroll-timeline')}} Kurzform-Eigenschaft) ermöglichen es Ihnen anzugeben, dass eine bestimmte Scrollleiste in einem benannten Container als Quelle für eine scroll-abhängige Animation verwendet werden kann. Die Scroll-Zeitachse kann dann mit einer [Animation](/de/docs/Web/CSS/Guides/Animations) verknüpft werden, indem die {{cssxref('animation-timeline')}} Eigenschaft auf den Namenwert eingestellt wird, der mit `scroll-timeline-name` definiert wurde.

Wenn Sie die {{cssxref('scroll-timeline')}} Kurzform-Eigenschaft verwenden, muss die Reihenfolge der Eigenschaftswerte {{cssxref('scroll-timeline-name')}} gefolgt von {{cssxref('scroll-timeline-axis')}} sein. Die Lang- und Kurzeigenschaften sind beide hinter der Einstellung verfügbar. Sie können alternativ die {{cssxref("animation-timeline/scroll")}} Funktionsnotation mit {{cssxref('animation-timeline')}} verwenden, um anzugeben, dass eine Scrollleistenachse in einem übergeordneten Element für die Zeitachse verwendet wird.

Für weitere Informationen siehe [Firefox-Bug 1807685](https://bugzil.la/1807685), [Firefox-Bug 1804573](https://bugzil.la/1804573), [Firefox-Bug 1809005](https://bugzil.la/1809005), [Firefox-Bug 1676791](https://bugzil.la/1676791), [Firefox-Bug 1754897](https://bugzil.la/1754897), [Firefox-Bug 1817303](https://bugzil.la/1817303), und [Firefox-Bug 1737918](https://bugzil.la/1737918).

Die {{cssxref('timeline-scope')}}, {{cssxref('animation-range-start')}} und {{cssxref('animation-range-end')}} Eigenschaften (und die {{cssxref('animation-range')}} Kurzform-Eigenschaft) werden noch nicht unterstützt. Für weitere Informationen siehe [Firefox-Bug 1676779](https://bugzil.la/1676779).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 136                  | Ja                       |
| Developer Edition      | 110                  | Nein                     |
| Beta                   | 110                  | Nein                     |
| Release                | 110                  | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Setzen Sie `true`, um zu aktivieren.

### prefers-reduced-transparency Medienmerkmal

Das CSS {{cssxref("@media/prefers-reduced-transparency")}} Medienmerkmal ermöglicht es Ihnen zu erkennen, ob ein Benutzer die Einstellung aktiviert hat, um die Menge an transparenten oder durchscheinenden Schichteffekten auf ihrem Gerät zu minimieren. Siehe ([Firefox-Bug 1736914](https://bugzil.la/1736914)) für weitere Details.

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 113                  | Nein                     |
| Developer Edition      | 113                  | Nein                     |
| Beta                   | 113                  | Nein                     |
| Release                | 113                  | Nein                     |

- `layout.css.prefers-reduced-transparency.enabled`
  - : Setzen Sie `true`, um zu aktivieren.

### inverted-colors Medienmerkmal

Das CSS {{cssxref("@media/inverted-colors")}} Medienmerkmal ermöglicht es Ihnen zu erkennen, ob ein Benutzeragent oder das zugrunde liegende Betriebssystem Farben invertiert. Siehe ([Firefox-Bug 1794628](https://bugzil.la/1794628)) für weitere Details.

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 114                  | Nein                     |
| Developer Edition      | 114                  | Nein                     |
| Beta                   | 114                  | Nein                     |
| Release                | 114                  | Nein                     |

- `layout.css.inverted-colors.enabled`
  - : Setzen Sie `true`, um zu aktivieren.

### Benannter Sichtfortschritt Zeitachsen Eigenschaft

Die CSS {{cssxref("view-timeline-name")}} Eigenschaft ermöglicht es Ihnen, einem bestimmten Element einen Namen zu geben, das angibt, dass sein übergeordnetes Scrollerelement die Quelle einer Sichtfortschritts-Zeitachse ist. Der Name kann dann der `animation-timeline` zugewiesen werden, die dann das zugeordnete Element animiert, während es sich durch den sichtbaren Bereich seines übergeordneten Scrollers bewegt. Siehe ([Firefox-Bug 1737920](https://bugzil.la/1737920)) für weitere Details.

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 136                  | Ja                       |
| Developer Edition      | 114                  | Nein                     |
| Beta                   | 114                  | Nein                     |
| Release                | 114                  | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Setzen Sie `true`, um zu aktivieren.

### Anonyme Sichtfortschritt-Zeitachsen Funktion

Die CSS {{cssxref("animation-timeline/view")}} Funktion ermöglicht es Ihnen anzugeben, dass die `animation-timeline` für ein Element eine Sichtfortschritts-Zeitachse ist, die das Element animiert, während es durch den sichtbaren Bereich seines übergeordneten Scrollers bewegt wird. Die Funktion definiert die Achse des übergeordneten Elements, das die Zeitachse liefert, zusammen mit dem Abstand innerhalb des sichtbaren Bereichs, bei dem die Animation beginnt. Siehe ([Firefox-Bug 1808410](https://bugzil.la/1808410)) für weitere Details.

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 136                  | Ja                       |
| Developer Edition      | 114                  | Nein                     |
| Beta                   | 114                  | Nein                     |
| Release                | 114                  | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Setzen Sie `true`, um zu aktivieren.

### Transform-Eigenschaften mit Herstellerpräfix

Die `-moz-` präfixierten [CSS transform](/de/docs/Web/CSS/Guides/Transforms) Eigenschaften können durch Setzen der `layout.css.prefixes.transforms` Präferenz auf `false` deaktiviert werden. Das Ziel ist es, diese zu deaktivieren, sobald die standardmäßigen CSS-Zoomeigenschaften gut unterstützt werden. ([Firefox-Bug 1886134](https://bugzil.la/1886134), [Firefox-Bug 1855763](https://bugzil.la/1855763)).

Konkret wird diese Präferenz die folgenden präfixierten Eigenschaften deaktivieren:

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
  - : Setzen Sie `true`, um zu aktivieren.

### Symmetrische `letter-spacing`

Die CSS {{cssxref("letter-spacing")}} Eigenschaft teilt jetzt den angegebenen Buchstabenabstand gleichmäßig auf beide Seiten jedes Zeichens auf. Dies unterscheidet sich vom aktuellen Verhalten, bei dem der Abstand hauptsächlich auf einer Seite hinzugefügt wird. Dieser Ansatz kann die Textabstände verbessern, insbesondere bei gemischt-direktionalem Text. ([Firefox-Bug 1891446](https://bugzil.la/1891446)).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 128                  | Ja                       |
| Developer Edition      | 128                  | Ja                       |
| Beta                   | 127                  | Nein                     |
| Release                | 127                  | Nein                     |

- `layout.css.letter-spacing.model`
  - : Setzen Sie `true`, um zu aktivieren.

### Pseudo-Elemente nach Element-unterstützten Pseudo-Elementen erlauben

Es wurde begonnen, Pseudo-Elemente wie {{cssxref("::first-letter")}} und {{cssxref("::before")}} nach Element-unterstützten Pseudo-Elementen wie {{cssxref("::details-content")}} und {{cssxref("::file-selector-button")}} zu erlauben.

Dies ermöglicht Benutzern beispielsweise, den ersten Buchstaben des {{htmlElement("details")}} Elements zu stylen, indem man den CSS-Selektor `::details-content::first-letter` verwendet, oder Inhalt vor einem {{HTMLElement("input")}} von [`type="file"`](/de/docs/Web/HTML/Reference/Elements/input/file) hinzufügen, indem man den CSS-Selektor `::file-selector-button::before` verwendet.

Derzeit kann nur die Unterstützung für `::details-content::first-letter` mit `@supports(::details-content::first-letter)` geparst werden. Das `::file-selector-button` Pseudo-Element ist noch nicht als Element-basiertes Pseudo-Element markiert, sodass es keine Möglichkeit gibt, dies zu testen. ([Firefox-Bug 1953557](https://bugzil.la/1953557), [Firefox-Bug 1941406](https://bugzil.la/1941406)).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 138                  | Nein                     |
| Developer Edition      | 138                  | Nein                     |
| Beta                   | 138                  | Nein                     |
| Release                | 138                  | Nein                     |

### `:heading` und `:heading()` Pseudo-Klassen

Die {{cssxref(":heading")}} Pseudo-Klasse ermöglicht es Ihnen, alle [Überschriftselemente](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) (`<h1>`-`<h6>`) gleichzeitig zu stylen, anstatt sie einzeln anzusprechen. Die {{cssxref(":heading()")}} funktionale Pseudo-Klasse ermöglicht es Ihnen, Überschriftselemente zu stylen, die einer durch Kommas getrennten Liste von Ganzzahlen entsprechen, die den Überschriftenebenen entsprechen. ([Firefox-Bug 1974386](https://bugzil.la/1974386) & [Firefox-Bug 1984310](https://bugzil.la/1984310)).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 142                  | Nein                     |
| Developer Edition      | 142                  | Nein                     |
| Beta                   | 142                  | Nein                     |
| Release                | 142                  | Nein                     |

- `layout.css.heading-selector.enabled`
  - : Setzen Sie `true`, um zu aktivieren.

### `@custom-media` At-Regel

Die {{cssxref("@custom-media")}} CSS At-Regel definiert Aliase für lange oder komplexe Medienabfragen. Anstatt dieselbe fest kodierte `<media-query-list>` in mehreren `@media` At-Regeln zu wiederholen, kann sie einmal in einer `@custom-media` At-Regel definiert und im gesamten Stylesheet bei Bedarf darauf verwiesen werden. ([Firefox-Bug 1744292](https://bugzil.la/1744292)).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 148                  | Nein                     |
| Developer Edition      | 148                  | Nein                     |
| Beta                   | 148                  | Nein                     |
| Release                | 148                  | Nein                     |

- `layout.css.custom-media.enabled`
  - : Setzen Sie `true`, um zu aktivieren.

### `<attr-type>` Werte in `attr()` CSS-Funktion

Die {{cssxref("attr")}} CSS-Funktion unterstützt jetzt [`<attr-type>`](/de/docs/Web/CSS/Reference/Values/attr#attr-type) Werte. Dies ermöglicht es Ihnen, anzugeben, wie ein Attributwert in einen CSS-Wert geparst wird und diese Werte direkt von [`data-*`](/de/docs/Web/HTML/How_to/Use_data_attributes) zu nehmen. ([Firefox-Bug 1986631](https://bugzil.la/1986631), [Firefox-Bug 1998245](https://bugzil.la/1998245))

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 152                  | Ja                       |
| Developer Edition      | 149                  | Nein                     |
| Beta                   | 149                  | Nein                     |
| Release                | 149                  | Nein                     |

- `layout.css.attr.enabled`
  - : Setzen Sie `true`, um zu aktivieren.

### Namensraumattribute in `attr()` CSS-Funktion

Die {{cssxref("attr")}} CSS-Funktion akzeptiert jetzt [namensraumattribute](/de/docs/Web/CSS/Reference/Values/attr#namespaces). Dies ermöglicht es Ihnen, Attribute von Elementen XML-basierter Sprachen wie [SVG](/de/docs/Web/SVG) zu nehmen und sie entsprechend zu stylen. ([Firefox-Bug 2014060](https://bugzil.la/2014060)).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 150                  | Nein                     |
| Developer Edition      | 150                  | Nein                     |
| Beta                   | 150                  | Nein                     |
| Release                | 150                  | Nein                     |

- `layout.css.attr.enabled`
  - : Setzen Sie `true`, um zu aktivieren.

### Absolut positionierte Elemente in mehrspaltigen Containern und beim Drucken

Absolut positionierte Elemente innerhalb von [mehrspaltigen Containern](/de/docs/Web/CSS/Guides/Multicol_layout) und beim Drucken sind jetzt korrekt positioniert und fragmentiert. Dies verbessert die Interoperabilität mit anderen Browsern und verhindert Layoutprobleme wie überlappenden Text oder Inhaltsverlust. ([Firefox-Bug 2018797](https://bugzil.la/2018797)).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 150                  | Ja                       |
| Developer Edition      | 150                  | Nein                     |
| Beta                   | 150                  | Nein                     |
| Release                | 150                  | Nein                     |

- `layout.abspos.fragmentainer-aware-positioning.enabled`
  - : Setzen Sie `true`, um zu aktivieren.

### `@container style()` Bereichssyntax Abfragen

Die [`@container`](/de/docs/Web/CSS/Reference/At-rules/@container) CSS At-Regel [`style()`](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries) Abfragen unterstützen jetzt die _Bereichssyntax_. Dies ermöglicht es Ihnen zu überprüfen, ob ein Container eine gültige CSS-Benutzerdefinierte Eigenschaft hat und deren Wert mit Vergleichsoperatoren wie `>`, `<`, `>=`, und `<=` zu vergleichen und Stile dementsprechend auf seine Kinder anzuwenden. ([Firefox-Bug 2024601](https://bugzil.la/2024601)).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 151                  | Nein                     |
| Developer Edition      | 151                  | Nein                     |
| Beta                   | 151                  | Nein                     |
| Release                | 151                  | Nein                     |

- `layout.css.attr.enabled`
  - : Setzen Sie `true`, um zu aktivieren.

### Korrektur für verschachtelte scrollbare Bereiche

Diese Implementierung wurde hinzugefügt, um ein Problem zu beheben, bei dem scrollbare Inhalte unzugänglich waren. Wenn eine Scrollleiste auf `display: none;` oder `width: 0;` gesetzt ist, werden die Scrollleisten verschachtelter scrollbarer Bereiche übereinander gestapelt, was bedeutet, dass einige der Inhalte möglicherweise unzugänglich sind. Dies bedeutet jedoch, dass die `@supports selector(::-webkit-scrollbar)` Überprüfung `true` zurückgibt, obwohl das [`::-webkit-scrollbar`](/de/docs/Web/CSS/Reference/Selectors/::-webkit-scrollbar) Pseudo-Element nicht wirklich unterstützt wird. ([Firefox-Bug 1977511](https://bugzil.la/1977511)).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 151                  | Ja                       |
| Developer Edition      | 151                  | Nein                     |
| Beta                   | 151                  | Nein                     |
| Release                | 151                  | Nein                     |

- `layout.css.fake-webkit-scrollbar.enabled`
  - : Setzen Sie `true`, um zu aktivieren.

### `<timeline-range-name>` Werte

Die {{cssxref("animation-range-start")}}, {{cssxref("animation-range-end")}} CSS-Eigenschaften und die {{cssxref("animation-range")}} Kurzform-Eigenschaft unterstützen jetzt [`<timeline-range-name>`](/de/docs/Web/CSS/Reference/Values/timeline-range-name) Werte. Diese [`<timeline-range-name>`](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names#timeline_range_names) Werte ermöglichen es Ihnen, genau anzugeben, innerhalb welches Abschnitts eine Scroll-abhängige Animation stattfinden wird. ([Firefox-Bug 1804775](https://bugzil.la/1804775)).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 151                  | Ja                       |
| Developer Edition      | 151                  | Nein                     |
| Beta                   | 151                  | Nein                     |
| Release                | 151                  | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Setzen Sie `true`, um zu aktivieren.

## SVG

**Keine experimentellen Funktionen in diesem Veröffentlichungszyklus.**

## MathML

### `href` auf nicht-`<a>` MathML-Elementen deaktivieren

Wenn aktiviert, erzeugt das globale [`href`](/de/docs/Web/MathML/Reference/Global_attributes/href) Attribut keinen Hyperlink auf anderen MathML-Elementen als `<a>`, im Einklang mit der [MathML Core Spezifikation](https://w3c.github.io/mathml-core/#the-a-element), die nur Hyperlinks auf dem `<a>` Element definiert. ([Firefox-Bug 2026848](https://bugzil.la/2026848)).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 151                  | Ja                       |
| Developer Edition      | 151                  | Nein                     |
| Beta                   | 151                  | Nein                     |
| Release                | 151                  | Nein                     |

- `mathml.href_link_on_non_anchor_element.disabled`
  - : Setzen Sie `true`, um zu aktivieren.

## JavaScript

### TC39 Iterator includes Vorschlag

Die Methode [`Iterator.prototype.includes()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator/includes) testet, ob eine `Iterator` Instanz einen angegebenen Wert erzeugt. Der Vergleich verwendet den [SameValueZero-Algorithmus](/de/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness#same-value-zero_equality). Dieser Algorithmus ähnelt der strikten Gleichheit `===` (wobei `-0` und `+0` als gleich betrachtet werden), unterscheidet sich jedoch darin, dass {{jsxref("NaN")}} als gleich zu sich selbst betrachtet wird. ([Firefox-Bug 2025779](https://bugzil.la/2025779)).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 152                  | Nein                     |
| Developer Edition      | 152                  | Nein                     |
| Beta                   | 152                  | Nein                     |
| Release                | 152                  | Nein                     |

- `javascript.options.experimental.iterator_includes`
  - : Setzen Sie `true`, um zu aktivieren.

### TC39 Intl.Locale info Vorschlag

Der [TC39 Intl.Locale info Vorschlag](https://github.com/tc39/proposal-intl-locale-info) wird jetzt unterstützt. Dies umfasst alle Instanzmethoden auf `Intl.Locale`, die mit "get" beginnen — {{jsxref("Intl/Locale/getCalendars", "Intl.Locale.prototype.getCalendars()")}}, {{jsxref("Intl/Locale/getCollations", "Intl.Locale.prototype.getCollations()")}}, {{jsxref("Intl/Locale/getHourCycles", "Intl.Locale.prototype.getHourCycles()")}}, {{jsxref("Intl/Locale/getNumberingSystems", "Intl.Locale.prototype.getNumberingSystems()")}}, {{jsxref("Intl/Locale/getTextInfo", "Intl.Locale.prototype.getTextInfo()")}}, {{jsxref("Intl/Locale/getTimeZones", "Intl.Locale.prototype.getTimeZones()")}}, {{jsxref("Intl/Locale/getWeekInfo", "Intl.Locale.prototype.getWeekInfo()")}}. ([Firefox-Bug 1693576](https://bugzil.la/1693576)).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 152                  | Nein                     |
| Developer Edition      | —                    | —                        |
| Beta                   | —                    | —                        |
| Release                | —                    | —                        |

- `javascript.options.experimental.intl_locale_info`
  - : Setzen Sie `true`, um in Nightly zu aktivieren.

### Textmodulimport

Die `with`-Klausel [`{ type: "text" }`](/de/docs/Web/JavaScript/Reference/Statements/import/with#text_modules_type_text) ermöglicht das Importieren des Quellcodes eines Moduls als String-Wert. Der Medientyp der Antwort wird ignoriert, und der Inhalt wird als Text analysiert, auch wenn der Quellcode Skripte oder anderen ausführbaren Code enthält. ([Firefox-Bug 2024854](https://bugzil.la/2024854)).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 152                  | Nein                     |
| Developer Edition      | 152                  | Nein                     |
| Beta                   | 152                  | Nein                     |
| Release                | 152                  | Nein                     |

- `javascript.options.experimental.import_text`
  - : Setzen Sie `true`, um zu aktivieren.

### Mehrere Importkarten

Unterstützung für [mehrere Importkarten](/de/docs/Web/HTML/Reference/Elements/script/type/importmap#merging_multiple_import_maps). Diese geben Entwicklern mehr Flexibilität bei der Strukturierung und dem Laden von JavaScript-Modulen, da sie nicht mehr alle ihre Modulumgebungen im Voraus kennen und in einer einzigen Importkarte laden müssen. ([Firefox-Bug 1916277](https://bugzil.la/1916277)).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 150                  | Nein                     |
| Developer Edition      | 150                  | Nein                     |
| Beta                   | 150                  | Nein                     |
| Release                | 150                  | Nein                     |

- `dom.multiple_import_maps.enabled`
  - : Setzen Sie `true`, um zu aktivieren.

## APIs

### Gescopte benutzerdefinierte Elementregister

Unterstützung für [gescopte benutzerdefinierte Elementregister](/de/docs/Web/API/Web_components/Using_custom_elements#scoped_custom_element_registries) wird implementiert. Gescopte Register ermöglichen einem Schattenbaum, ein unabhängiges [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry) zu erstellen, dessen Definitionen nur für diesen spezifischen DOM-Teilbaum gelten. Dies kann verwendet werden, um Kollisionen zu vermeiden, bei denen mehrere Webkomponenten Elemente mit demselben Namen deklarieren.

Die Implementierung umfasst:

- `customElementRegistry` Eigenschaft auf [`Document`](/de/docs/Web/API/Document), [`Element`](/de/docs/Web/API/Element), und [`ShadowRoot`](/de/docs/Web/API/ShadowRoot). ([Firefox-Bug 2018900](https://bugzil.la/2018900)).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 150                  | Nein                     |
| Developer Edition      | 150                  | Nein                     |
| Beta                   | 150                  | Nein                     |
| Release                | 150                  | Nein                     |

- `dom.scoped-custom-element-registries.enabled`
  - : Setzen Sie `true`, um zu aktivieren.

### CSS Typed Objektmodell Level 1

An der Implementierung des [CSS Typed OM Level 1](https://drafts.css-houdini.org/css-typed-om/) wird gearbeitet. Zum Beispiel wird die [`to()`](/de/docs/Web/API/CSSNumericValue/to) Methode der [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) Schnittstelle unterstützt, um einen CSS-Zahlenwert von einer Einheit in eine andere zu konvertieren. ([Firefox-Bug 1278697](https://bugzil.la/1278697)).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 149                  | Nein                     |
| Developer Edition      | 149                  | Nein                     |
| Beta                   | 149                  | Nein                     |
| Release                | 149                  | Nein                     |

- `layout.css.typed-om.enabled`
  - : Setzen Sie `true`, um zu aktivieren.

### Grafik: Canvas, WebGL und WebGPU

#### WebGL: Entwurfs-Erweiterungen

Wenn diese Präferenz aktiviert ist, werden alle WebGL-Erweiterungen, die sich derzeit im "Entwurf"-Status befinden und getestet werden, zur Verwendung aktiviert. Derzeit werden von Firefox keine WebGL-Erweiterungen getestet.

#### WebGPU API

Die [WebGPU API](/de/docs/Web/API/WebGPU_API) bietet Low-Level-Unterstützung für die Durchführung von Berechnungen und Grafik-Rendering über die [Graphics Processing Unit](https://en.wikipedia.org/wiki/Graphics_Processing_Unit) (GPU) des Geräts oder Computers des Benutzers. Ab Version 142 ist sie auf Windows in allen Kontexten außer Dienstarbeitern aktiviert. Ab Version 147 ist sie auf macOS auf Apple Silicon in allen Browsing-Kontexten außer Dienstarbeitern aktiviert. Für andere Plattformen wie Linux und macOS auf Intel Silicon ist sie in Nightly aktiviert. Siehe [Firefox-Bug 1602129](https://bugzil.la/1602129) für unseren Fortschritt bei dieser API.

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert?                                                          |
| ---------------------- | -------------------- | --------------------------------------------------------------------------------- |
| Nightly                | 141                  | Ja                                                                                |
| Developer Edition      | 141                  | Nein (Ja auf Windows und macOS auf Apple Silicon, nicht inklusive Dienstarbeiter) |
| Beta                   | 141                  | Nein (Ja auf Windows und macOS auf Apple Silicon, nicht inklusive Dienstarbeiter) |
| Release                | 141                  | Nein (Ja auf Windows und macOS auf Apple Silicon, nicht inklusive Dienstarbeiter) |

- `dom.webgpu.enabled`
  - : Setzen Sie `true`, um zu aktivieren (in Nightly und auf Windows in allen Versionen aktiviert)
- `dom.webgpu.service-workers.enabled`
  - : Setzen Sie `true`, um zu aktivieren (in Nightly aktiviert)

### WebRTC und Medien

Die folgenden experimentellen Funktionen umfassen diejenigen, die in Medien-APIs wie der [WebRTC API](/de/docs/Web/API/WebRTC_API), der [Web Audio API](/de/docs/Web/API/Web_Audio_API), der [Media Source Extensions API](/de/docs/Web/API/Media_Source_Extensions_API), der [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API) und der [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) zu finden sind.

#### Überprüfen der Browser-Unterstützung für das Kodieren/Dekodieren von WebRTC-Medien

Der `webrtc` Typ kann jetzt als Option für [`MediaCapabilities.decodingInfo()`](/de/docs/Web/API/MediaCapabilities/decodingInfo#webrtc) und [`MediaCapabilities.encodingInfo()`](/de/docs/Web/API/MediaCapabilities/encodingInfo#webrtc) übergeben werden. Dies ermöglicht es Entwicklern zu überprüfen, wie gut ein Benutzeragent eine bestimmte Konfiguration für WebRTC dekodieren oder kodieren kann. Die Unterstützung für den nicht standardmäßigen [`transmission`](/de/docs/Web/API/MediaCapabilities/encodingInfo#transmission) Typ, der als Alias für `webrtc` verwendet wurde, wurde entfernt. ([Firefox-Bug 1825286](https://bugzil.la/1825286)).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 152                  | Nein                     |
| Developer Edition      | 152                  | Nein                     |
| Beta                   | 152                  | Nein                     |
| Release                | 152                  | Nein                     |

- `media.mediacapabilities.webrtc.enabled`
  - : Setzen Sie `true`, um zu aktivieren.

#### HTMLMediaElement Eigenschaften: audioTracks und videoTracks

Durch Aktivieren dieser Funktion werden die [`HTMLMediaElement.audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks) und [`HTMLMediaElement.videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks) Eigenschaften zu allen HTML-Medienelementen hinzugefügt. Da Firefox jedoch derzeit keine Unterstützung für mehrere Audio- und Videospuren bietet, funktionieren die gängigsten Anwendungsfälle für diese Eigenschaften nicht, sodass sie standardmäßig deaktiviert sind. Siehe [Firefox-Bug 1057233](https://bugzil.la/1057233) für weitere Details.

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 33                   | Nein                     |
| Developer Edition      | 33                   | Nein                     |
| Beta                   | 33                   | Nein                     |
| Release                | 33                   | Nein                     |

- `media.track.enabled`
  - : Setzen Sie `true`, um zu aktivieren.

#### Asynchrones Hinzufügen und Entfernen von SourceBuffer

Dies fügt die auf Promises basierenden Methoden [`appendBufferAsync()`](/de/docs/Web/API/SourceBuffer/appendBufferAsync) und [`removeAsync()`](/de/docs/Web/API/SourceBuffer/removeAsync) zum Hinzufügen und Entfernen von Mediensource-Puffern zur [`SourceBuffer`](/de/docs/Web/API/SourceBuffer) Schnittstelle hinzu. Siehe [Firefox-Bug 1280613](https://bugzil.la/1280613) und [Firefox-Bug 778617](https://bugzil.la/778617) für weitere Informationen.

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 62                   | Nein                     |
| Developer Edition      | 62                   | Nein                     |
| Beta                   | 62                   | Nein                     |
| Release                | 62                   | Nein                     |

- `media.mediasource.experimental.enabled`
  - : Setzen Sie `true`, um zu aktivieren.

#### AVIF Konformität Strenge

Die Präferenz `image.avif.compliance_strictness` kann verwendet werden, um die _Strenge_ zu kontrollieren, die beim Verarbeiten von [AVIF](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) Bildern angewendet wird. Dies ermöglicht es Firefox-Anwendern, Bilder darzustellen, die in einigen anderen Browsern gerendert werden, selbst wenn sie nicht strikt konform sind.

| Veröffentlichungskanal | Hinzugefügte Version | Standardwert |
| ---------------------- | -------------------- | ------------ |
| Nightly                | 92                   | 1            |
| Developer Edition      | 92                   | 1            |
| Beta                   | 92                   | 1            |
| Release                | 92                   | 1            |

- `image.avif.compliance_strictness`
  - : Numerischer Wert, der ein _Strenge_-Niveau angibt. Erlaubte Werte sind:
    - `0`: Permissiv. Akzeptiere Bilder mit Verstößen gegen die Spezifikation sowohl in Empfehlungen ("sollte" Sprache) als auch in Anforderungen ("muss" Sprache), vorausgesetzt, sie können sicher oder eindeutig interpretiert werden.
    - `1` **(Standard)**: Gemischt. Lehne Verstöße gegen Anforderungen ("muss") ab, aber erlaube Verstöße gegen Empfehlungen ("sollte").
    - `2`: Streng. Lehne jegliche Verstöße gegen spezifizierte Anforderungen oder Empfehlungen ab.

#### JPEG XL Unterstützung

Firefox unterstützt das [JPEG XL](https://jpeg.org/jpegxl/) Bildformat, einen modernen Nachfolger von JPEG, das eine verbesserte Komprimierung und Bildqualität bietet, zusammen mit neuen Fähigkeiten wie Transparenz, Animation und HDR-Unterstützung. Siehe [Firefox-Bug 1539075](https://bugzil.la/1539075) und [Firefox-Bug 2016688](https://bugzil.la/2016688) für weitere Details.

In Firefox 149 wurde der frühere C++ [JPEG XL](https://jpeg.org/jpegxl/) Bilddekoder durch eine neue Rust-basierte Implementierung ersetzt, die die `jxl-rs` Bibliothek verwendet ([Firefox-Bug 1986393](https://bugzil.la/1986393)).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 90                   | Ja                       |
| Developer Edition      | 152                  | Nein                     |
| Beta                   | 152                  | Nein                     |
| Release                | 152                  | Nein                     |

- `image.jxl.enabled`
  - : Setzen Sie `true`, um zu aktivieren.

### WebVR API (Deaktiviert)

Die veraltete [WebVR API](/de/docs/Web/API/WebVR_API) ist auf dem Weg zur Entfernung. Sie ist standardmäßig in allen Builds deaktiviert [Firefox-Bug 1750902](https://bugzil.la/1750902).

| Veröffentlichungskanal | Version entfernt | Standardmäßig aktiviert? |
| ---------------------- | ---------------- | ------------------------ |
| Nightly                | 98               | Nein                     |
| Developer Edition      | 98               | Nein                     |
| Beta                   | 98               | Nein                     |
| Release                | 98               | Nein                     |

- `dom.vr.enabled`
  - : Setzen Sie `true`, um zu aktivieren.

### GeometryUtils Methoden: convertPointFromNode(), convertRectFromNode(), und convertQuadFromNode()

Die `GeometryUtils` Methoden `convertPointFromNode()`, `convertRectFromNode()`, und `convertQuadFromNode()` mappen den gegebenen Punkt, das Rechteck oder das Viereck vom [`Node`](/de/docs/Web/API/Node), auf dem sie aufgerufen werden, zu einem anderen Knoten. (Siehe [Firefox-Bug 918189](https://bugzil.la/918189) für weitere Details.)

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 31                   | Nein                     |
| Developer Edition      | 31                   | Nein                     |
| Beta                   | 31                   | Nein                     |
| Release                | 31                   | Nein                     |

- `layout.css.convertFromNode.enabled`
  - : Setzen Sie `true`, um zu aktivieren.

### GeometryUtils Methode: getBoxQuads()

Die `GeometryUtils` Methode `getBoxQuads()` gibt die CSS-Boxen für einen [`Node`](/de/docs/Web/API/Node) relativ zu jedem anderen Knoten oder Viewport zurück. (Siehe [Firefox-Bug 917755](https://bugzil.la/917755) für weitere Details.)

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 31                   | Nein                     |
| Developer Edition      | 31                   | Nein                     |
| Beta                   | 31                   | Nein                     |
| Release                | 31                   | Nein                     |

- `layout.css.getBoxQuads.enabled`
  - : Setzen Sie `true`, um zu aktivieren.

### Payment Request API

#### Primäre Zahlungsabwicklung

Die [Payment Request API](/de/docs/Web/API/Payment_Request_API) bietet Unterstützung für die Abwicklung von webbasierten Zahlungen innerhalb von Webinhalten oder Apps. Aufgrund eines Fehlers, der beim Testen der Benutzeroberfläche aufgetreten ist, haben wir beschlossen, die Auslieferung dieser API zu verschieben, während Diskussionen über mögliche Änderungen an der API stattfinden. Die Arbeit ist im Gange. (Siehe [Firefox-Bug 1318984](https://bugzil.la/1318984) für weitere Details.)

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 55                   | Nein                     |
| Developer Edition      | 55                   | Nein                     |
| Beta                   | 55                   | Nein                     |
| Release                | 55                   | Nein                     |

- `dom.payments.request.enabled`
  - : Setzen Sie `true`, um zu aktivieren.
- `dom.payments.request.supportedRegions`
  - : Ländercodes als durch Kommas getrennte Whitelist von Regionen (z.B. `US,CA`).

### WebShare API

Die [Web Share API](/de/docs/Web/API/Web_Share_API) ermöglicht das Teilen von Dateien, URLs und anderen Daten von einer Website aus. Diese Funktion ist auf Android in allen Builds aktiviert, aber hinter einer Präferenz auf Desktop (sofern nicht anders angegeben unten).

| Veröffentlichungskanal | Versionsänderung | Standardmäßig aktiviert?                    |
| ---------------------- | ---------------- | ------------------------------------------- |
| Nightly                | 71               | Nein (Standard). Ja (Windows ab Version 92) |
| Developer Edition      | 71               | Nein                                        |
| Beta                   | 71               | Nein                                        |
| Release                | 71               | Nein (Desktop). Ja (Android).               |

- `dom.webshare.enabled`
  - : Setzen Sie `true`, um zu aktivieren.

### Benachrichtigungs-API

Benachrichtigungen haben die [`requireInteraction`](/de/docs/Web/API/Notification/requireInteraction) Eigenschaft standardmäßig auf true für Windows-Systeme und in der Nightly-Version gesetzt ([Firefox-Bug 1794475](https://bugzil.la/1794475)).

| Veröffentlichungskanal | Versionsänderung | Standardmäßig aktiviert? |
| ---------------------- | ---------------- | ------------------------ |
| Nightly                | 117              | Ja                       |
| Developer Edition      | 117              | Nein                     |
| Beta                   | 117              | Nein                     |
| Release                | 117              | Nur Windows              |

- `dom.webnotifications.requireinteraction.enabled`
  - : Setzen Sie `true`, um zu aktivieren.

## Sicherheit und Datenschutz

### Markierung von unsicheren Seiten

Die beiden `security.insecure_connection_text_*` Präferenzen fügen ein "Nicht sicher" Textlabel in der Adressleiste neben dem traditionellen Schlosssymbol hinzu, wenn eine Seite nicht sicher geladen wird (das heißt, unter Verwendung von {{Glossary("HTTP", "HTTP")}} statt {{Glossary("HTTPS", "HTTPS")}}). Die Präferenz `browser.urlbar.trimHttps` entfernt das `https:` Präfix aus URLs in der Adressleiste. Siehe [Firefox-Bug 1853418](https://bugzil.la/1853418) für weitere Details.

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 121                  | Ja                       |
| Developer Edition      | 60                   | Nein                     |
| Beta                   | 60                   | Nein                     |
| Release                | 60                   | Nein                     |

- `security.insecure_connection_text.enabled`
  - : Setzen Sie `true`, um das Textlabel für den normalen Browsing-Modus zu aktivieren.
- `security.insecure_connection_text.pbmode.enabled`
  - : Setzen Sie `true`, um das Textlabel für den privaten Browsing-Modus zu aktivieren.
- `browser.urlbar.trimHttps`
  - : Setzen Sie `true`, um das `https:` Präfix aus URLs in der Adressleiste zu entfernen.

### Einschränkung von Inhalten für Erwachsene mit `<meta name="rating">`

Das nicht standardisierte [`<meta name="rating">`](/de/docs/Web/HTML/Reference/Elements/meta) Element kann in eine Webseite aufgenommen werden, um den Inhalt der Seite als eingeschränkt/erwachsen zu kennzeichnen. Zum Zeitpunkt der Erstellung dieses Dokuments gibt es zwei mögliche `content` Werte, `adult` ([von Google definiert](https://developers.google.com/search/docs/specialty/explicit/guidelines#add-metadata)) und `RTA-5042-1996-1400-1577-RTA` ([von ASACP definiert](https://www.rtalabel.org/?content=howto#top)), die die gleiche Wirkung haben (in Zukunft könnten weitere Optionen hinzugefügt werden).

Die folgenden `<meta>` Elemente sind gleichwertig:

```html
<meta name="rating" content="adult" />
<meta name="rating" content="RTA-5042-1996-1400-1577-RTA" />
```

Browser, die dieses Element erkennen, können dann Schritte unternehmen, um Benutzer daran zu hindern, den Inhalt anzusehen. Die Implementierung von Firefox ersetzt die Seite durch den Inhalt, der unter `about:restricted` zu finden ist, was dem Benutzer erklärt, dass er versucht, eingeschränkte Inhalte anzusehen, warum er sie nicht ansehen kann, und ihm eine Zurück-Taste gibt, um zur vorherigen Seite zurückzukehren.

Siehe [Firefox-Bug 1991135](https://bugzil.la/1991135) für weitere Details.

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 146                  | Nein                     |
| Developer Edition      | 146                  | Nein                     |
| Beta                   | 146                  | Nein                     |
| Release                | 146                  | Nein                     |

- `security.restrict_to_adults.always`
  - : Setzen Sie `true`, um den Zugriff auf Webseiten, die sich selbst als erwachsen kennzeichnen, durch Einschließen eines `<meta name="rating">` Elements einzuschränken.
- `security.restrict_to_adults.respect_platform`
  - : Setzen Sie `true`, um den Zugriff auf Webseiten, die sich selbst als erwachsen kennzeichnen, durch Einschließen eines `<meta name="rating">` Elements nur einzuschränken, wenn angemessene Kindersicherungen im zugrunde liegenden Betriebssystem eingestellt sind (zum Beispiel sind die macOS _Inhalt & Datenschutz_ Einstellungen so eingestellt, dass sie explizite Webinhalte einschränken).

### Berechtigungspolitik / Funktionpolitik

[Berechtigungspolitik](/de/docs/Web/HTTP/Guides/Permissions_Policy) erlaubt es Webentwicklern, selektiv bestimmte Funktionen und APIs im Browser zu aktivieren, zu deaktivieren oder zu modifizieren. Sie ähnelt der CSP, steuert jedoch Funktionen anstelle von Sicherheitsverhalten. Dies ist in Firefox als **Funktionpolitik** implementiert, der Name, der in einer früheren Version der Spezifikation verwendet wurde.

Beachten Sie, dass unterstützte Richtlinien durch das [`allow`](/de/docs/Web/HTML/Reference/Elements/iframe#allow) Attribut auf `<iframe>` Elementen gesetzt werden können, auch wenn die Benutzerpräferenz nicht gesetzt ist.

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 65                   | Nein                     |
| Developer Edition      | 65                   | Nein                     |
| Beta                   | 65                   | Nein                     |
| Release                | 65                   | Nein                     |

- `dom.security.featurePolicy.header.enabled`
  - : Setzen Sie `true`, um zu aktivieren.

### Privacy Preserving Attribution API (PPA)

[PPA API](https://support.mozilla.org/en-US/kb/privacy-preserving-attribution) bietet eine Alternative zum Benutzertracking für die Anzeigenzuordnung, indem das neue `navigator.privateAttribution` Objekt mit den Methoden `saveImpression()` und `measureConversion()` verwendet wird. Lesen Sie mehr über PPA [im ursprünglichen Erläuterer](https://github.com/mozilla/explainers/tree/main/archive/ppa-experiment) und die [vorgeschlagene Spezifikation](https://w3c.github.io/ppa/). Dieses Experiment kann über [origin trial](https://wiki.mozilla.org/Origin_Trials) oder im Browser durch Setzen der Präferenz auf `1` für Websites aktiviert werden. ([Firefox-Bug 1900929](https://bugzil.la/1900929)).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 128                  | Nein                     |
| Developer Edition      | 128                  | Nein                     |
| Beta                   | 128                  | Nein                     |
| Release                | 128                  | Nein                     |

- `dom.origin-trials.private-attribution.state`
  - : Setzen Sie `true`, um zu aktivieren.

## HTTP

### Integritätspolitik für Stylesheet-Ressourcen

Die {{httpheader("Integrity-Policy")}} und {{httpheader("Integrity-Policy-Report-Only")}} HTTP-Header werden jetzt für Style-Ressourcen unterstützt. Diese erlauben es Websites, entweder [Subressourcen-Integritätsgarantien](/de/docs/Web/Security/Defenses/Subresource_Integrity) für Styles zu erzwingen oder nur Verstöße gegen die Richtlinie zu melden. Beachten Sie, dass Firefox Meldeendpunkte ignoriert und Verstöße im Entwicklerkonsolenprotokoll protokolliert. Wenn `Integrity-Policy` verwendet wird, blockiert der Browser das Laden von Styles, die in einem {{HTMLElement("link")}} Element mit [`rel="stylesheet"`](/de/docs/Web/HTML/Reference/Attributes/rel#stylesheet) referenziert werden und entweder das [`integrity`](/de/docs/Web/HTML/Reference/Elements/script#integrity) Attribut nicht aufweisen oder einen Integrität-Hash haben, der nicht mit der Ressource auf dem Server übereinstimmt. ([Firefox-Bug 1976656](https://bugzil.la/1976656)).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 142                  | Nein                     |
| Developer Edition      | 142                  | Nein                     |
| Beta                   | 142                  | Nein                     |
| Release                | 142                  | Nein                     |

- `security.integrity_policy.stylesheet.enabled`
  - : Setzen Sie `true`, um zu aktivieren.

### Idempotency-Key

Der {{httpheader("Idempotency-Key")}} HTTP-Anforderungs-Header kann von Website-Clientcode verwendet werden, um eine {{HTTPMethod("POST")}} oder {{HTTPMethod("PATCH")}} Anfragen {{Glossary("idempotent", "idempotent")}} zu machen, wenn sie mit einem Server verwendet werden, der dies unterstützt. Die Spezifikation gibt an, dass der Server dokumentieren und anzeigen sollte, welche Endpunkte dieses Header erfordern, das Format des Schlüssels und die erwarteten Fehlerantworten.

Firefox fügt den Header _automatisch_ mit einem eindeutigen Schlüssel für jede neue `POST` Anfrage hinzu, wenn er nicht bereits von der Seite Client-seitig hinzugefügt wurde. Dies vereinfacht den erforderlichen Client-seitigen Code, um mit Servern zu arbeiten, die die Funktion unterstützen.

([Firefox-Bug 1830022](https://bugzil.la/1830022)).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 135                  | Nein                     |
| Developer Edition      | 135                  | Nein                     |
| Beta                   | 135                  | Nein                     |
| Release                | 135                  | Nein                     |

- `network.http.idempotencyKey.enabled`
  - : Setzen Sie `true`, um zu aktivieren.

### Accept Header mit MIME-Typ image/jxl

Der HTTP-Header [`Accept`](/de/docs/Web/HTTP/Reference/Headers/Accept) in [Standardanfragen und Bildanfragen](/de/docs/Web/HTTP/Guides/Content_negotiation/List_of_default_Accept_values) kann über eine Präferenz konfiguriert werden, um die Unterstützung für den `image/jxl` MIME-Typ anzugeben.

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 128                  | Nein                     |
| Developer Edition      | 128                  | Nein                     |
| Beta                   | 128                  | Nein                     |
| Release                | 128                  | Nein                     |

- `image.jxl.enabled`
  - : Setzen Sie `true`, um zu aktivieren.

### SameSite=Lax standardmäßig

[`SameSite` Cookies](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) haben einen Standardwert von `Lax`. Mit dieser Einstellung werden Cookies nur gesendet, wenn ein Benutzer zur Ursprungsseite navigiert und nicht für siteübergreifende Unteranfragen, um Bilder oder Frames in eine Drittanbieter-Seite zu laden, und so weiter. Für weitere Details siehe [Firefox-Bug 1617609](https://bugzil.la/1617609).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 69                   | Nein                     |
| Developer Edition      | 69                   | Nein                     |
| Beta                   | 69                   | Nein                     |
| Release                | 69                   | Nein                     |

- `network.cookie.sameSite.laxByDefault`
  - : Setzen Sie `true`, um zu aktivieren.

### Access-Control-Allow-Headers Wildcard deckt Authorization nicht ab

Der [`Access-Control-Allow-Headers`](/de/docs/Web/HTTP/Reference/Headers/Access-Control-Allow-Headers) ist ein Antwortheader auf eine {{Glossary("Preflight_request", "CORS-Vorabanfrage")}}, die angibt, welche Anforderungen enthalten sein dürfen. Die Antwortanweisung kann ein Wildcard (`*`) enthalten, die angibt, dass die endgültige Anfrage alle Header außer dem `Authorization` Header enthalten darf.

Standardmäßig fügt Firefox den `Authorization` Header in die endgültige Anfrage ein, nachdem er eine Antwort mit `Access-Control-Allow-Headers: *` erhalten hat. Setzen Sie die Präferenz auf `false`, um sicherzustellen, dass Firefox den `Authorization` Header nicht einbezieht. Für weitere Details siehe [Firefox-Bug 1687364](https://bugzil.la/1687364).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 115                  | Ja                       |
| Developer Edition      | 115                  | Ja                       |
| Beta                   | 115                  | Ja                       |
| Release                | 115                  | Ja                       |

- `network.cors_preflight.authorization_covered_by_wildcard`
  - : Setzen Sie `true`, um zu aktivieren.

## Entwicklerwerkzeuge

Die Entwicklerwerkzeuge von Mozilla entwickeln sich ständig weiter. Wir experimentieren mit neuen Ideen, fügen neue Funktionen hinzu und testen sie in den Nightly- und Developer Edition-Kanälen, bevor wir sie zur Beta- und Release-Version durchlassen. Die unten aufgeführten Funktionen sind die aktuelle Ernte der experimentellen Entwicklerwerkzeugfunktionen.

**Keine experimentellen Funktionen in diesem Veröffentlichungszyklus.**

## Siehe auch

- [Firefox Entwickler Versionshinweise](/de/docs/Mozilla/Firefox/Releases)
- [Firefox Nightly](https://www.firefox.com/en-US/channel/desktop/)
- [Firefox Developer Edition](https://www.firefox.com/en-US/channel/desktop/developer/)
