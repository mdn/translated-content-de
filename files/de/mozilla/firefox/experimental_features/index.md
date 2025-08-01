---
title: Experimentelle Funktionen in Firefox
short-title: Experimentelle Funktionen
slug: Mozilla/Firefox/Experimental_features
l10n:
  sourceCommit: 933dc286637998da88bb11f7f4f452ea6d57c9b1
---

Diese Seite listet die experimentellen und teilweise implementierten Funktionen von Firefox auf, einschließlich sich entwickelnder oder vorgeschlagener Webplattformstandards.
Jeder Eintrag unten enthält Informationen über die Builds, in denen eine Funktion enthalten ist (Nightly, Beta, Developer Edition oder Release), ob sie standardmäßig aktiviert ist oder nicht, und den Namen der **Einstellung**, die Sie zur Aktivierung oder Konfiguration der Funktion verwenden können.
Die Beschreibung jeder Funktion enthält auch Links zu relevanten [Bugzilla-Bugs](https://bugzilla.mozilla.org), welche die Funktion implementieren oder aktivieren.
Diese Informationen erlauben es Ihnen, experimentelle Funktionen auszuprobieren und Feedback zu geben, bevor sie offiziell veröffentlicht werden.

Im Hinblick auf den Lebenszyklus erscheinen neue Funktionen normalerweise zuerst in [Nightly](https://www.firefox.com/en-US/channel/desktop/#nightly), wo sie oft standardmäßig aktiviert sind, um frühes Feedback und Tests zu erhalten.
Wenn keine größeren Probleme gefunden werden, sind sie in den [Beta](https://www.firefox.com/en-US/channel/desktop/#beta) und [Developer Edition](https://www.firefox.com/en-US/channel/desktop/developer/) Vorab-Builds enthalten. Schließlich werden genehmigte Funktionen im [stabilen Release](https://www.firefox.com/en-US/) Kanal ausgeliefert.
Wenn eine Funktion standardmäßig in einer Version aktiviert ist, wird sie nicht mehr als experimentell betrachtet und von dieser Seite entfernt.

Um diese Funktionen zu aktivieren, geben Sie `about:config` in die Firefox-Adressleiste ein, suchen Sie nach der zugehörigen **Einstellung** und ändern Sie deren Wert, der in der Regel ein Umschalter zwischen `true` und `false` ist.
Je nach Funktion müssen Sie möglicherweise den Browser neu starten, damit die Änderung wirksam wird.
Überprüfen Sie den [Firefox-Konfigurationseditor](https://support.mozilla.org/en-US/kb/about-config-editor-firefox) Support-Artikel für weitere Informationen zur Verwaltung von Einstellungen in Firefox.

## HTML

### Layout für `input type="search"`

Das Layout für `input type="search"` wurde aktualisiert. Dies führt dazu, dass ein Suchfeld ein Löschen-Symbol hat, sobald jemand mit dem Tippen beginnt, um andere Browserimplementierungen zu entsprechen. (Weitere Informationen finden Sie im [Firefox-Bug 558594](https://bugzil.la/558594).)

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 81                   | Nein                     |
| Developer Edition      | 81                   | Nein                     |
| Beta                   | 81                   | Nein                     |
| Release                | 81                   | Nein                     |

- `layout.forms.input-type-search.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Anzeige des Passworts umschalten

HTML-Passwort-Eingabeelemente ([`<input type="password">`](/de/docs/Web/HTML/Reference/Elements/input/password)) enthalten ein "Augen"-Symbol, das umgeschaltet werden kann, um den Passworttext anzuzeigen oder zu verbergen ([Firefox-Bug 502258](https://bugzil.la/502258)).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 96                   | Nein                     |
| Developer Edition      | 96                   | Nein                     |
| Beta                   | 96                   | Nein                     |
| Release                | 96                   | Nein                     |

- `layout.forms.reveal-password-button.enabled`
  - : Auf `true` setzen, um zu aktivieren.

## CSS

### Hex-Boxen zur Anzeige verirrter Steuerzeichen

Diese Funktion rendert Steuerzeichen (Unicode-Kategorie Cc) außer _Tabulator_ (`U+0009`), _Zeilenumbruch_ (`U+000A`), _Seitenvorschub_ (`U+000C`) und _Wagenrücklauf_ (`U+000D`) als Hex-Box, wenn sie unerwartet sind. (Weitere Informationen finden Sie im [Firefox-Bug 1099557](https://bugzil.la/1099557).)

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 43                   | Ja                       |
| Developer Edition      | 43                   | Nein                     |
| Beta                   | 43                   | Nein                     |
| Release                | 43                   | Nein                     |

- `layout.css.control-characters.visible`
  - : Auf `true` setzen, um zu aktivieren.

### initial-letter Eigenschaft

Die {{cssxref("initial-letter")}} CSS-Eigenschaft ist Teil der [CSS Inline Layout](https://drafts.csswg.org/css-inline/) Spezifikation und ermöglicht es Ihnen, anzugeben, wie gefallene, erhobene und versenkte Initialbuchstaben angezeigt werden. (Weitere Informationen finden Sie im [Firefox-Bug 1223880](https://bugzil.la/1223880).)

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 50                   | Nein                     |
| Developer Edition      | 50                   | Nein                     |
| Beta                   | 50                   | Nein                     |
| Release                | 50                   | Nein                     |

- `layout.css.initial-letter.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### fit-content() Funktion

Die {{cssxref("fit-content_function", "fit-content()")}} Funktion, wie sie auf {{cssxref("width")}} und andere Größen-Eigenschaften angewendet wird. Diese Funktion wird bereits gut für die Größenbestimmung von CSS-Grid-Layout-Spuren unterstützt. (Weitere Informationen finden Sie im [Firefox-Bug 1312588](https://bugzil.la/1312588).)

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 91                   | Nein                     |
| Developer Edition      | 91                   | Nein                     |
| Beta                   | 91                   | Nein                     |
| Release                | 91                   | Nein                     |

- `layout.css.fit-content-function.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Scroll-gesteuerte Animationen

Früher als "Scroll-verbundene Animationen" bezeichnet, hängt eine [scroll-gesteuerte Animation](/de/docs/Web/CSS/CSS_scroll-driven_animations) von der Scroll-Position eines Scrollbalkens ab, anstatt von der Zeit oder einer anderen Dimension.
Die {{cssxref('scroll-timeline-name')}} und {{cssxref('scroll-timeline-axis')}} Eigenschaften (und die {{cssxref('scroll-timeline')}} Kurzschreibweise) ermöglichen es Ihnen, anzugeben, dass ein bestimmter Scrollbalken in einem bestimmten benannten Container als Quelle für eine scroll-gesteuerte Animation verwendet werden kann.
Die Scroll-Zeitleiste kann dann mit einer [Animation](/de/docs/Web/CSS/CSS_animations) assoziiert werden, indem die {{cssxref('animation-timeline')}} Eigenschaft auf den Namen gesetzt wird, der mit `scroll-timeline-name` definiert wurde.

Bei Verwendung der {{cssxref('scroll-timeline')}} Kurzschreibweise muss die Reihenfolge der Eigenschaftswerte {{cssxref('scroll-timeline-name')}} gefolgt von {{cssxref('scroll-timeline-axis')}} sein.
Sowohl die Lang- als auch die Kurzschreibweisen sind hinter der Einstellung verfügbar.
Alternativ können Sie die [`scroll()`](/de/docs/Web/CSS/animation-timeline/scroll) Funktionsnotation mit {{cssxref('animation-timeline')}} verwenden, um anzugeben, dass eine Scrollbalkenachse in einem übergeordneten Element für die Zeitleiste verwendet wird.

Für weitere Informationen siehe [Firefox-Bug 1807685](https://bugzil.la/1807685), [Firefox-Bug 1804573](https://bugzil.la/1804573), [Firefox-Bug 1809005](https://bugzil.la/1809005), [Firefox-Bug 1676791](https://bugzil.la/1676791), [Firefox-Bug 1754897](https://bugzil.la/1754897), [Firefox-Bug 1817303](https://bugzil.la/1817303) und [Firefox-Bug 1737918](https://bugzil.la/1737918).

Die {{cssxref('timeline-scope')}}, {{cssxref('animation-range-start')}} und {{cssxref('animation-range-end')}} Eigenschaften (und die {{cssxref('animation-range')}} Kurzschreibweise) werden noch nicht unterstützt. Für weitere Informationen siehe [Firefox-Bug 1676779](https://bugzil.la/1676779).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 136                  | Ja                       |
| Developer Edition      | 110                  | Nein                     |
| Beta                   | 110                  | Nein                     |
| Release                | 110                  | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### @scope At-Regel

Die [@scope](/de/docs/Web/CSS/@scope) [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) ermöglicht es Ihnen, spezifische Kindelemente auszuwählen, ohne die Spezifität von CSS-Selektoren übermäßig erhöhen zu müssen ([Firefox-Bug 1886441](https://bugzil.la/1886441)).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 137                  | Ja                       |
| Developer Edition      | 128                  | Nein                     |
| Beta                   | 128                  | Nein                     |
| Release                | 128                  | Nein                     |

- `layout.css.at-scope.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### prefers-reduced-transparency Medienfeature

Das CSS [`prefers-reduced-transparency`](/de/docs/Web/CSS/@media/prefers-reduced-transparency) Medienfeature ermöglicht es Ihnen zu erkennen, ob ein Benutzer die Einstellung aktiviert hat, um die Menge an transparenten oder durchsichtigen Schichteffekten auf seinem Gerät zu minimieren.
Weitere Informationen finden Sie im [Firefox-Bug 1736914](https://bugzil.la/1736914).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 113                  | Nein                     |
| Developer Edition      | 113                  | Nein                     |
| Beta                   | 113                  | Nein                     |
| Release                | 113                  | Nein                     |

- `layout.css.prefers-reduced-transparency.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### inverted-colors Medienfeature

Das CSS [`inverted-colors`](/de/docs/Web/CSS/@media/inverted-colors) Medienfeature ermöglicht es Ihnen zu erkennen, ob ein User-Agent oder das zugrunde liegende Betriebssystem die Farben umkehrt.
Weitere Informationen finden Sie im [Firefox-Bug 1794628](https://bugzil.la/1794628).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 114                  | Nein                     |
| Developer Edition      | 114                  | Nein                     |
| Beta                   | 114                  | Nein                     |
| Release                | 114                  | Nein                     |

- `layout.css.inverted-colors.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Named view progress timelines property

Die CSS [`view-timeline-name`](/de/docs/Web/CSS/view-timeline-name) Eigenschaft ermöglicht es Ihnen, einem bestimmten Element einen Namen zu geben, der angibt, dass sein übergeordneter Scroll-Element als Quelle einer View Progress Timeline dient.
Der Name kann dann der `animation-timeline` zugewiesen werden, die dann das zugeordnete Element animiert, während es sich durch den sichtbaren Bereich seines übergeordneten Scrollers bewegt.
Weitere Informationen finden Sie im [Firefox-Bug 1737920](https://bugzil.la/1737920).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 114                  | Nein                     |
| Developer Edition      | 114                  | Nein                     |
| Beta                   | 114                  | Nein                     |
| Release                | 114                  | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Anonymous view progress timelines function

Die CSS [`view()`](/de/docs/Web/CSS/animation-timeline/view) Funktion ermöglicht es Ihnen, anzugeben, dass die `animation-timeline` für ein Element eine View Progress Timeline ist, die das Element animiert, während es sich durch den sichtbaren Bereich seines übergeordneten Scrollers bewegt.
Die Funktion definiert die Achse des Elternelements, das die Zeitleiste liefert, sowie den Einsatz im sichtbaren Bereich, bei dem die Animation startet und beginnt.
Weitere Informationen finden Sie im [Firefox-Bug 1808410](https://bugzil.la/1808410).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 114                  | Nein                     |
| Developer Edition      | 114                  | Nein                     |
| Beta                   | 114                  | Nein                     |
| Release                | 114                  | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Vendor-präfixierte Transform-Eigenschaften

Die mit `-moz-` präfixierten [CSS-Transform](/de/docs/Web/CSS/CSS_transforms) Eigenschaften können deaktiviert werden, indem die `layout.css.prefixes.transforms` Einstellung auf `false` gesetzt wird. Die Absicht ist, diese zu deaktivieren, sobald die standardmäßigen CSS-Zoomeigenschaften gut unterstützt werden. ([Firefox-Bug 1886134](https://bugzil.la/1886134), [Firefox-Bug 1855763](https://bugzil.la/1855763)).

Konkret wird diese Einstellung die folgenden präfixierten Eigenschaften deaktivieren:

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
  - : Auf `true` setzen, um zu aktivieren.

### `shape()` Funktion

Die CSS [`shape()`](/de/docs/Web/CSS/basic-shape/shape) Funktion ist ein [`<basic-shape>`](/de/docs/Web/CSS/basic-shape) Datentyp, der es Ihnen ermöglicht, eine Form in den {{cssxref("clip-path")}} und {{cssxref("offset-path")}} Eigenschaften unter Verwendung eines oder mehrerer "Formbefehle" zu definieren. Diese Befehle sind den [SVG-Pfadbefehl](/de/docs/Web/SVG/Reference/Attribute/d#path_commands) sehr ähnlich. Die `shape()` Funktion ist in gewisser Weise ähnlich der {{cssxref("basic-shape/path","path()")}} Funktion, aber im Gegensatz zu `path()`, welches die [SVG-Pfad](/de/docs/Web/SVG/Reference/Element/path) Syntax verwendet, verwendet `shape()` die standardmäßige CSS-Syntax. Dies ermöglicht es Ihnen, Formen einfach zu erstellen und zu bearbeiten und auch Mathematikfunktionen in CSS zu verwenden.
Weitere Informationen finden Sie im [Firefox-Bug 1823463](https://bugzil.la/1823463) für die Unterstützung der `shape()`-Funktion in `clip-path`, [Firefox-Bug 1884424](https://bugzil.la/1884424) für die Unterstützung der Funktion in `offset-path`, und [Firefox-Bug 1884425](https://bugzil.la/1884425) für ihre Interpolationsunterstützung.

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 126                  | Ja                       |
| Developer Edition      | 126                  | Nein                     |
| Beta                   | 126                  | Nein                     |
| Release                | 126                  | Nein                     |

- `layout.css.basic-shape-shape.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Symmetrisches `letter-spacing`

Die CSS {{cssxref("letter-spacing")}} Eigenschaft teilt jetzt den angegebenen Zeichenabstand gleichmäßig auf beiden Seiten jedes Zeichens auf. Dies unterscheidet sich vom aktuellen Verhalten, bei dem der Abstand hauptsächlich auf eine Seite hinzugefügt wird. Dieser Ansatz kann insbesondere bei gemischter Richtungstext den Textabstand verbessern [Firefox-Bug 1891446](https://bugzil.la/1891446).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 128                  | Ja                       |
| Developer Edition      | 128                  | Ja                       |
| Beta                   | 127                  | Nein                     |
| Release                | 127                  | Nein                     |

- `layout.css.letter-spacing.model`
  - : Auf `true` setzen, um zu aktivieren.

### `calc()` Unterstützung für Farbkanäle in relativen Farben

Die CSS [`calc()`](/de/docs/Web/CSS/calc) Funktion kann jetzt Farbkanäle in [relativen Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors#using_math_functions) parsen und ermöglicht es Ihnen, Änderungen an Farben in verschiedenen Farbräumen oder bei Verwendung unterschiedlicher Funktionalnotationen korrekt zu berechnen [Firefox-Bug 1889561](https://bugzil.la/1889561).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 127                  | Ja                       |
| Developer Edition      | 127                  | Nein                     |
| Beta                   | 127                  | Nein                     |
| Release                | 127                  | Nein                     |

- `layout.css.relative-color-syntax.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### CSS Anchor Positioning

Das [CSS Anchor Positioning](/de/docs/Web/CSS/CSS_anchor_positioning) Modul definiert eine Reihe von Funktionen, die es erlauben, Elemente als Anker-Elemente zu definieren und andere Elemente relativ zu Anker-Elementen zu positionieren.
Dies ermöglicht es beispielsweise, dass Tooltips zusammen mit den zugehörigen Inhalten angezeigt werden, wenn diese durch den Viewport scrollen, und sich bei Bedarf bewegen, wenn sie den Viewport überlaufen würden, und verschwinden, wenn der Anker aus dem Bildschirm verschoben wird.
Die Menge an Funktionen wird schrittweise hinter einer Einstellung eingeführt ([Firefox-Bug 1838746](https://bugzil.la/1838746)).

Die Teile, die implementiert wurden, schließen ein [`CSSPositionTryRule`](/de/docs/Web/API/CSSPositionTryRule) und [`CSSPositionTryDescriptors`](/de/docs/Web/API/CSSPositionTryDescriptors) (Firefox 131).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 131                  | Nein                     |
| Developer Edition      | 131                  | Nein                     |
| Beta                   | 131                  | Nein                     |
| Release                | 131                  | Nein                     |

- `layout.css.anchor-positioning.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### `::details-content` Pseudo-Element

Das CSS {{cssxref("::details-content")}} Pseudo-Element ermöglicht es, den Inhalt des {{htmlElement("details")}} Elements zu stylen ([Firefox-Bug 1901037](https://bugzil.la/1901037)).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 138                  | Nein                     |
| Developer Edition      | 138                  | Nein                     |
| Beta                   | 138                  | Nein                     |
| Release                | 138                  | Nein                     |

- `layout.css.details-content.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Ermöglichen von Pseudo-Elementen nach Element-basierten Pseudo-Elementen

Es wurde Arbeit daran begonnen, es zu ermöglichen, dass [Pseudo-Elemente](/de/docs/Web/CSS/Pseudo-elements) wie {{cssxref("::first-letter")}} und {{cssxref("::before")}} an [Element-basierte Pseudo-Elemente](/de/docs/Web/CSS/Pseudo-elements#element-backed_pseudo-elements) wie {{cssxref("::details-content")}} und {{cssxref("::file-selector-button")}} angehängt werden können.

Dies wird es Benutzern ermöglichen, beispielsweise das erste Zeichen des {{htmlElement("details")}} Elements mit dem CSS-Selektor `::details-content::first-letter` zu stylen oder Inhalt vor einem {{htmlElement("input") }} des [`type="file"`](/de/docs/Web/HTML/Reference/Elements/input/file) mit dem CSS-Selektor `::file-selector-button::before` hinzuzufügen.

Derzeit kann nur die Unterstützung für `::details-content::first-letter` geparst werden, bei Verwendung von `@supports(::details-content::first-letter)` und muss die Einstellung für das [::details-content Pseudo-Element](#details-content_pseudo-element) aktiviert sein, damit dies getestet werden kann. Das `::file-selector-button` Pseudo-Element ist noch nicht als ein element-basiertes Pseudo-Element gekennzeichnet, so dass es derzeit keine Möglichkeit gibt, dies zu testen. ([Firefox-Bug 1953557](https://bugzil.la/1953557)).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 138                  | Nein                     |
| Developer Edition      | 138                  | Nein                     |
| Beta                   | 138                  | Nein                     |
| Release                | 138                  | Nein                     |

- `layout.css.details-content.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### `:active-view-transition` Pseudo-Klasse

Die CSS {{CSSXRef(":active-view-transition")}} Pseudo-Klasse ermöglicht es, Inhalte zu stylen, während eine [View-Transition](/de/docs/Web/API/View_Transition_API) in einer Single-Page-App (SPA) stattfindet. ([Firefox-Bug 1956140](https://bugzil.la/1956140)).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 141                  | Ja                       |
| Developer Edition      | 141                  | Nein                     |
| Beta                   | 141                  | Nein                     |
| Release                | -                    | Nein                     |

- `dom.viewTransitions.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### `anchor-size()` Funktion

Die CSS {{CSSXRef("anchor-size")}} Funktion ermöglicht es, die Größe, Position und Ränder eines ankerpositionierten Elements relativ zu den Dimensionen von Ankerelementen einzustellen. ([Firefox-Bug 1972610](https://bugzil.la/1972610)).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 142                  | Nein                     |
| Developer Edition      | 142                  | Nein                     |
| Beta                   | 142                  | Nein                     |
| Release                | 142                  | Nein                     |

- `layout.css.anchor-positioning.enabled`
  - : Auf `true` setzen, um zu aktivieren.

## SVG

**Keine experimentellen Funktionen in diesem Veröffentlichungszyklus.**

## JavaScript

### Atomics.waitAsync()

Die statische Methode {{jsxref("Atomics.waitAsync()")}} wartet asynchron an einem gemeinsam genutzten Speicherort und gibt ein Objekt zurück, das das Ergebnis der Operation darstellt.
Sie ist nicht blockierend und auf dem Hauptthread nutzbar. ([Firefox-Bug 1467846](https://bugzil.la/1467846)).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 140                  | Nein                     |
| Developer Edition      | 140                  | Nein                     |
| Beta                   | 140                  | Nein                     |
| Release                | 140                  | Nein                     |

- `javascript.options.atomics_wait_async`
  - : Auf `true` setzen, um zu aktivieren.

## APIs

### CloseWatcher Interface

Eingebaute Web-Komponenten mit "Offen" und "Schließen" Semantik, wie modale Dialoge und Popups, können mit gerätetypischen Mechanismen geschlossen werden.
Beispielsweise kann auf Android ein Dialog mit Hilfe des Zurück-Buttons geschlossen werden.
Das [`CloseWatcher`](/de/docs/Web/API/CloseWatcher) Interface ermöglicht es Entwicklern, UI-Komponenten zu implementieren, wie benutzerdefinierte Seitenleisten, die mit ähnlichen nativen Mechanismen geschlossen werden können.
([Firefox-Bug 1888729](https://bugzil.la/1888729)).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert?      |
| ---------------------- | -------------------- | ----------------------------- |
| Nightly                | 140                  | Ja (Desktop). Nein (Android). |
| Developer Edition      | 132                  | Nein                          |
| Beta                   | 132                  | Nein                          |
| Release                | 132                  | Nein                          |

- `dom.closewatcher.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Trusted Types API

Die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) bietet Mechanismen, um sicherzustellen, dass Funktionen, die potenziell als Angriffswerkzeuge für XSS Angriffe genutzt werden können, nur mit validierten oder sanierten Daten aufgerufen werden können.

> [!NOTE]
> Zum Zeitpunkt des Schreibens wurde nicht genug von der API implementiert, um sie effektiv testbar zu machen.
> Diese Notiz wird entfernt, sobald sie fertig ist.

Dieser Teil der API wurde implementiert:

- [`TrustedTypePolicyFactory`](/de/docs/Web/API/TrustedTypePolicyFactory):
  - [`getAttributeType()`](/de/docs/Web/API/TrustedTypePolicyFactory/getAttributeType) und [`getPropertyType()`](/de/docs/Web/API/TrustedTypePolicyFactory/getPropertyType) ([Firefox-Bug 1917783](https://bugzil.la/1917783), [Firefox-Bug 1917784](https://bugzil.la/1917784)).
- Die [`write()`](/de/docs/Web/API/Document/write) und [`writeln()`](/de/docs/Web/API/Document/writeln) Methoden der [`Document`](/de/docs/Web/API/Document) Schnittstelle akzeptieren jetzt [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) Objekte als Parameter, zusätzlich zu Zeichenketten. ([Firefox-Bug 1906301](https://bugzil.la/1906301)).
- Die [`text`](/de/docs/Web/API/HTMLScriptElement/text), [`innerText`](/de/docs/Web/API/HTMLElement/innerText), und [`textContent`](/de/docs/Web/API/Node/textContent) Eigenschaften der [`HTMLScriptElement`](/de/docs/Web/API/HTMLScriptElement) Schnittstelle akzeptieren jetzt [`TrustedScript`](/de/docs/Web/API/TrustedScript) Objekte als Wert, während [`src`](/de/docs/Web/API/HTMLScriptElement/src) [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL) Werte akzeptiert. ([Firefox-Bug 1905706](https://bugzil.la/1905706)).
- Die [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval) und [`Window.setTimeout()`](/de/docs/Web/API/Window/setTimeout) Methoden können mit einem [`TrustedScript`](/de/docs/Web/API/TrustedScript) aufgerufen werden. ([Firefox-Bug 1931290](https://bugzil.la/1931290)).
- Die globale [`trustedTypes`](/de/docs/Web/API/Window/trustedTypes) Eigenschaft ist verfügbar zum Zugreifen auf die Trusted Types API.
- Die Eigenschaften [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) und [`ShadowRoot.innerHTML`](/de/docs/Web/API/ShadowRoot/innerHTML) können mit [trusted types](/de/docs/Web/API/Trusted_Types_API) aufgerufen werden.

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 133                  | Nein                     |
| Developer Edition      | 133                  | Nein                     |
| Beta                   | 133                  | Nein                     |
| Release                | 133                  | Nein                     |

- `dom.security.trusted_types.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### HTML-Sanitizer-API

Die [HTML-Sanitizer-API](/de/docs/Web/API/HTML_Sanitizer_API) erlaubt Entwicklern, nicht vertrauenswürdige HTML-Zeichenfolgen zu nehmen und sie zu sanitisieren, um sie sicher in das DOM eines Dokuments einzufügen.

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 138                  | Nein                     |
| Developer Edition      | 138                  | Nein                     |
| Beta                   | 138                  | Nein                     |
| Release                | 138                  | Nein                     |

- `dom.security.sanitizer.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Entfernung von `beforescriptexecute` und `afterscriptexecute` Ereignissen

Die nicht standardmäßigen Ereignisse [`beforescriptexecute`](/de/docs/Web/API/Document/beforescriptexecute_event) und [`afterscriptexecute`](/de/docs/Web/API/Document/afterscriptexecute_event) in der [`Document`](/de/docs/Web/API/Document) Schnittstelle, und [`afterscriptexecute`](/de/docs/Web/API/Element/afterscriptexecute_event) und [`beforescriptexecute`](/de/docs/Web/API/Element/beforescriptexecute_event) in der [`Element`](/de/docs/Web/API/Element) Schnittstelle sind auf dem Weg zur Entfernung. Sie wurden im Nightly deaktiviert.
([Firefox-Bug 1954685](https://bugzil.la/1954685)).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 139                  | Nein                     |
| Developer Edition      | 139                  | Ja                       |
| Beta                   | 139                  | Ja                       |
| Release                | 139                  | Ja                       |

- `dom.events.script_execute.enable`
  - : Auf `true` setzen, um zu aktivieren.

### PerformanceEventTiming.interactionId

[`PerformanceEventTiming.interactionId`](/de/docs/Web/API/PerformanceEventTiming/interactionId) kann verwendet werden, um die Latenzzeit für Ereignisse zu messen, die durch eine bestimmte Benutzerinteraktion ausgelöst wurden. ([Firefox-Bug 1934683](https://bugzil.la/1934683)).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 138                  | Nein                     |
| Developer Edition      | 138                  | Nein                     |
| Beta                   | 138                  | Nein                     |
| Release                | 138                  | Nein                     |

- `dom.performance.event_timing.enable_interactionid`
  - : Auf `true` setzen, um zu aktivieren.

### Benachrichtigungsaktionen und maxActions Eigenschaften

Die [`actions`](/de/docs/Web/API/Notification/actions) Nur-Lese-Eigenschaft und die [`maxActions`](/de/docs/Web/API/Notification/maxActions_static) statische Nur-Lese-Eigenschaft der [`Notification`](/de/docs/Web/API/Notification) Schnittstelle wird in Nightly auf Desktop unterstützt.
Diese enthalten die mit [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification) gesetzten Benachrichtigungsaktionen und die maximale Anzahl an Aktionen, die gesetzt werden können.
([Firefox-Bug 1225110](https://bugzil.la/1225110), [Firefox-Bug 1963263](https://bugzil.la/1963263)).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 138                  | Ja (nur Desktop)         |
| Developer Edition      | 138                  | Nein                     |
| Beta                   | 138                  | Nein                     |
| Release                | 138                  | Nein                     |

- `dom.webnotifications.actions.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Grafik: Canvas, WebGL und WebGPU

#### WebGL: Entwurfserweiterungen

Wenn diese Einstellung aktiviert ist, sind alle WebGL-Erweiterungen, die sich derzeit im "Entwurf" Status befinden und getestet werden, zur Verwendung aktiviert. Derzeit werden keine von Firefox getesteten WebGL-Erweiterungen getestet.

#### WebGPU API

Die [WebGPU-API](/de/docs/Web/API/WebGPU_API) bietet Unterstützung auf niedrigem Niveau für die Durchführung von Berechnungen und Grafikdarstellungen unter Verwendung des [Graphics Processing Unit (GPU)](https://en.wikipedia.org/wiki/Graphics_Processing_Unit) des Geräts oder Computers des Benutzers.
Ab Version 142 ist dies auf Windows in allen Kontexten außer in Service Workern aktiviert.
Für andere Plattformen ist es in Nightly aktiviert.
Siehe [Firefox-Bug 1602129](https://bugzil.la/1602129) für unsere Fortschritte zu dieser API.

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert?                                   |
| ---------------------- | -------------------- | ---------------------------------------------------------- |
| Nightly                | 141                  | Ja                                                         |
| Developer Edition      | 141                  | Nein (Ja auf Windows, nicht einschließlich Service Worker) |
| Beta                   | 141                  | Nein (Ja auf Windows, nicht einschließlich Service Worker) |
| Release                | 141                  | Nein (Ja auf Windows, nicht einschließlich Service Worker) |

- `dom.webgpu.enabled`
  - : Auf `true` setzen, um zu aktivieren (aktiviert in Nightly und auf Windows in allen Versionen)
- `dom.webgpu.service-workers.enabled`
  - : Auf `true` setzen, um zu aktivieren (aktiviert in Nightly)

### Reporting-API-Unterstützung für CSP-Verletzungen

Die [Reporting-API](/de/docs/Web/API/Reporting_API) hat jetzt Unterstützung für die Meldung von [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) Verletzungen.

[`Report`](/de/docs/Web/API/Report) Instanzen, die von der [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) Schnittstelle zurückgegeben werden, können jetzt einen `type` Wert von `"csp-violation"` haben und eine `body` Eigenschaft, die eine Instanz der [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody) Schnittstelle enthält.
Dies ermöglicht es, dass CSP-Verletzungen innerhalb einer Webseite gemeldet werden.

CSP-Verstoßberichte können auch an entfernte Endpunkte gesendet werden, die im CSP mit der {{CSP("report-to")}} Direktive namentlich festgelegt werden — Endpunktnamen und zugehörige URLs müssen zuerst in den {{httpheader('Reporting-Endpoints')}} oder {{httpheader('Report-To')}} HTTP-Antwort-Headern definiert sein.
Der Bericht ist eine Serialisierung des oben beschriebenen [`Report`](/de/docs/Web/API/Report) Objekts, mit einer `body` Eigenschaft, die eine Serialisierung einer [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody) Instanz ist.

Dieser Verletzungsbericht ersetzt einen ähnlichen CSP-spezifischen Mechanismus zum Senden von Verletzungsberichten, der die CSP-{{CSP("report-uri")}} Direktive verwendet, um die URL des Meldeendpunktes festzulegen, und hat ein [CSP-spezifisches JSON-Verletzungsbericht-Format](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/report-uri#violation_report_syntax).
([Firefox-Bug 1391243](https://bugzil.la/1391243)).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 130                  | Nein                     |
| Developer Edition      | 130                  | Nein                     |
| Beta                   | 130                  | Nein                     |
| Release                | 130                  | Nein                     |

- `dom.reporting.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### WebRTC und Medien

Die folgenden experimentellen Funktionen umfassen die [WebRTC API](/de/docs/Web/API/WebRTC_API), die [Web Audio API](/de/docs/Web/API/Web_Audio_API), die [Media Source Extensions API](/de/docs/Web/API/Media_Source_Extensions_API), die [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extions_API) und die [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API).

#### Asynchrone SourceBuffer Hinzufügung und Entfernung

Dies fügt die Promise-basierten Methoden [`appendBufferAsync()`](/de/docs/Web/API/SourceBuffer/appendBufferAsync) und [`removeAsync()`](/de/docs/Web/API/SourceBuffer/removeAsync) für das Hinzufügen und Entfernen von Medienquellen-Puffern zum [`SourceBuffer`](/de/docs/Web/API/SourceBuffer) Interface hinzu. Weitere Informationen finden Sie im [Firefox-Bug 1280613](https://bugzil.la/1280613) und [Firefox-Bug 778617](https://bugzil.la/778617).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 62                   | Nein                     |
| Developer Edition      | 62                   | Nein                     |
| Beta                   | 62                   | Nein                     |
| Release                | 62                   | Nein                     |

- `media.mediasource.experimental.enabled`
  - : Auf `true` setzen, um zu aktivieren.

#### AVIF Konformitätsstriktheit

Die `image.avif.compliance_strictness` Einstellung kann verwendet werden, um die _Striktheit_ zu steuern, die beim Verarbeiten von [AVIF](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) Bildern angewendet wird.
Dies ermöglicht es Firefox-Benutzern, Bilder anzuzeigen, die auf einigen anderen Browsern dargestellt werden, auch wenn sie nicht strikt konform sind.

| Veröffentlichungskanal | Hinzugefügte Version | Standardwert |
| ---------------------- | -------------------- | ------------ |
| Nightly                | 92                   | 1            |
| Developer Edition      | 92                   | 1            |
| Beta                   | 92                   | 1            |
| Release                | 92                   | 1            |

- `image.avif.compliance_strictness`
  - : Numerischer Wert, der einen _Striktheits_ Grad angibt. Zulässige Werte sind:
    - `0`: Lax. Akzeptiere Bilder mit Spezifikationsverletzungen in sowohl Empfehlungen ("sollte" Sprache) als auch Anforderungen ("muss" Sprache), vorausgesetzt, sie können sicher oder eindeutig interpretiert werden.
    - `1` **(Standard)**: Gemischt. Weist Verletzungen von Anforderungen ("muss") zurück, erlaubt aber Verletzungen von Empfehlungen ("sollte").
    - `2`: Strikt. Weist alle Verletzungen spezifizierter Anforderungen oder Empfehlungen zurück.

#### JPEG XL Unterstützung

Firefox unterstützt [JPEG XL](https://jpeg.org/jpegxl/) Bilder, wenn diese Funktion aktiviert ist.
Weitere Informationen finden Sie im [Firefox-Bug 1539075](https://bugzil.la/1539075).

Beachten Sie, dass, wie unten gezeigt, die Funktion nur in Nightly-Builds verfügbar ist (unabhängig davon, ob die Einstellung gesetzt ist).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 90                   | Nein                     |
| Developer Edition      | —                    | —                        |
| Beta                   | —                    | —                        |
| Release                | —                    | —                        |

- `image.jxl.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### WebVR API

#### WebVR API (Deaktiviert)

Die veraltete [WebVR-API](/de/docs/Web/API/WebVR_API) befindet sich auf dem Weg zur Entfernung.
Sie ist standardmäßig in allen Builds deaktiviert [Firefox-Bug 1750902](https://bugzil.la/1750902).

| Veröffentlichungskanal | Entfernter Version | Standardmäßig aktiviert? |
| ---------------------- | ------------------ | ------------------------ |
| Nightly                | 98                 | Nein                     |
| Developer Edition      | 98                 | Nein                     |
| Beta                   | 98                 | Nein                     |
| Release                | 98                 | Nein                     |

- `dom.vr.enabled`
  - : Auf `true` setzen, um zu aktivieren.

#### HTMLMediaElement Eigenschaften: audioTracks und videoTracks

Wenn diese Funktion aktiviert ist, werden die [`HTMLMediaElement.audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks) und [`HTMLMediaElement.videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks) Eigenschaften zu allen HTML-Media-Elementen hinzugefügt. Aufgrund der Tatsache, dass Firefox derzeit keine unterstützung für mehrere Audio- und Videospuren hat, funktionieren die häufigsten Anwendungsfälle für diese Eigenschaften jedoch nicht, daher sind sie beide standardmäßig deaktiviert. Weitere Informationen finden Sie im [Firefox-Bug 1057233](https://bugzil.la/1057233).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 33                   | Nein                     |
| Developer Edition      | 33                   | Nein                     |
| Beta                   | 33                   | Nein                     |
| Release                | 33                   | Nein                     |

- `media.track.enabled`
  - : Auf `true` setzen, um zu aktivieren.

#### GeometryUtils-Methoden: convertPointFromNode(), convertRectFromNode(), und convertQuadFromNode()

Die `GeometryUtils` Methoden `convertPointFromNode()`, `convertRectFromNode()`, und `convertQuadFromNode()` ordnen den angegebenen Punkt, das Rechteck oder das Quadruppel vom [`Node`](/de/docs/Web/API/Node), auf dem sie aufgerufen werden, einem anderen Knoten zu. (Weitere Informationen finden Sie im [Firefox-Bug 918189](https://bugzil.la/918189).)

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 31                   | Ja                       |
| Developer Edition      | 31                   | Nein                     |
| Beta                   | 31                   | Nein                     |
| Release                | 31                   | Nein                     |

- `layout.css.convertFromNode.enable`
  - : Auf `true` setzen, um zu aktivieren.

#### GeometryUtils-Methode: getBoxQuads()

Die `GeometryUtils` Methode `getBoxQuads()` gibt die CSS-Boxen für einen [`Node`](/de/docs/Web/API/Node) relativ zu einem anderen Knoten oder Viewport zurück. (Weitere Informationen finden Sie im [Firefox-Bug 917755](https://bugzil.la/917755).)

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 31                   | Ja                       |
| Developer Edition      | 31                   | Nein                     |
| Beta                   | 31                   | Nein                     |
| Release                | 31                   | Nein                     |

- `layout.css.getBoxQuads.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Payment Request API

#### Primäre Zahlungsabwicklung

Die [Payment Request API](/de/docs/Web/API/Payment_Request_API) bietet Unterstützung für die Abwicklung webbasierten Zahlungen innerhalb von Webinhalten oder Apps. Aufgrund eines Fehlers, der beim Testen der Benutzeroberfläche aufgetreten ist, haben wir beschlossen, die Einführung dieser API zu verschieben, während Diskussionen über mögliche Änderungen an der API geführt werden. Die Arbeit daran läuft. (Weitere Informationen finden Sie im [Firefox-Bug 1318984](https://bugzil.la/1318984).)

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 55                   | Nein                     |
| Developer Edition      | 55                   | Nein                     |
| Beta                   | 55                   | Nein                     |
| Release                | 55                   | Nein                     |

- `dom.payments.request.enabled`
  - : Auf `true` setzen, um zu aktivieren.
- `dom.payments.request.supportedRegions`
  - : Ländercodes als kommagetrennte Whitelist von Regionen (z. B. `US,CA`).

### WebShare API

Die [Web Share API](/de/docs/Web/API/Web_Share_API) ermöglicht das Teilen von Dateien, URLs und anderen Daten von einer Website.
Diese Funktion ist auf Android in allen Builds aktiviert, aber hinter einer Einstellung auf Desktop (es sei denn, unten angegeben).

| Veröffentlichungskanal | Geänderte Version | Standardmäßig aktiviert?                    |
| ---------------------- | ----------------- | ------------------------------------------- |
| Nightly                | 71                | Nein (Standard). Ja (Windows ab Version 92) |
| Developer Edition      | 71                | Nein                                        |
| Beta                   | 71                | Nein                                        |
| Release                | 71                | Nein (Desktop). Ja (Android).               |

- `dom.webshare.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Screen Orientation API

#### ScreenOrientation.lock()

Die [`ScreenOrientation.lock()`](/de/docs/Web/API/ScreenOrientation/lock) Methode ermöglicht es, ein Gerät auf eine bestimmte Ausrichtung zu sperren, wenn dies vom Gerät unterstützt wird und von den Pre-Lock-Anforderungen des Browsers erlaubt ist.
Normalerweise ist es nur auf mobilen Geräten erlaubt, die Ausrichtung zu sperren, wenn das Dokument im Vollbildmodus angezeigt wird.
Weitere Informationen finden Sie im [Firefox-Bug 1697647](https://bugzil.la/1697647).

| Veröffentlichungskanal | Geänderte Version | Standardmäßig aktiviert? |
| ---------------------- | ----------------- | ------------------------ |
| Nightly                | 111               | Ja                       |
| Developer Edition      | 97                | Nein                     |
| Beta                   | 97                | Nein                     |
| Release                | 97                | Nein                     |

- `dom.screenorientation.allow-lock`
  - : Auf `true` setzen, um zu aktivieren.

### Prioritized Task Scheduling API

Die [Prioritized Task Scheduling API](/de/docs/Web/API/Prioritized_Task_Scheduling_API) bietet eine standardisierte Möglichkeit, alle Aufgaben einer Anwendung zu priorisieren, egal ob sie im Code eines Website-Entwicklers definiert sind oder in Drittanbieter-Bibliotheken und -Frameworks.
Ab Firefox Version 140 ist die API sowohl funktional vollständig als auch in der Nightly-Veröffentlichung aktiviert.
([Firefox-Bug 1734997](https://bugzil.la/1734997) und [Firefox-Bug 1920115](https://bugzil.la/1920115)).

| Veröffentlichungskanal | Geänderte Version | Standardmäßig aktiviert? |
| ---------------------- | ----------------- | ------------------------ |
| Nightly                | 139               | Ja                       |
| Developer Edition      | 101               | Nein                     |
| Beta                   | 101               | Nein                     |
| Release                | 101               | Nein                     |

- `dom.enable_web_task_scheduling`
  - : Auf `true` setzen, um zu aktivieren.

### Benachrichtigungs-API

Benachrichtigungen haben die [`requireInteraction`](/de/docs/Web/API/Notification/requireInteraction) Eigenschaft standardmäßig auf true auf Windows-Systemen und in der Nightly-Veröffentlichung gesetzt ([Firefox-Bug 1794475](https://bugzil.la/1794475)).

| Veröffentlichungskanal | Geänderte Version | Standardmäßig aktiviert? |
| ---------------------- | ----------------- | ------------------------ |
| Nightly                | 117               | Ja                       |
| Developer Edition      | 117               | Nein                     |
| Beta                   | 117               | Nein                     |
| Release                | 117               | Nur Windows              |

- `dom.webnotifications.requireinteraction.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### View Transition API

Die [View Transition API](/de/docs/Web/API/View_Transition_API) bietet einen Mechanismus zum einfachen Erstellen von animierten Übergängen zwischen verschiedenen Website-Ansichten. Dies ist besonders nützlich für {{Glossary("SPA", "einseitige Anwendungen (SPA)")}}. ([Firefox-Bug 1950759](https://bugzil.la/1950759)).

| Veröffentlichungskanal | Geänderte Version | Standardmäßig aktiviert? |
| ---------------------- | ----------------- | ------------------------ |
| Nightly                | 139               | Ja                       |
| Developer Edition      | 139               | Nein                     |
| Beta                   | 139               | Nein                     |
| Release                | 139               | Nein                     |

- `dom.viewTransitions.enabled`
  - : Auf `true` setzen, um zu aktivieren.

## Sicherheit und Datenschutz

### Unsichere Seitenbeschriftung

Die beiden Einstellungen `security.insecure_connection_text_*` fügen dem traditionellen Schloss-Symbol in der Adressleiste eine "Nicht sicher" Textbeschriftung hinzu, wenn eine Seite unsicher geladen wird (d.h. mit {{Glossary("HTTP", "HTTP")}} anstelle von {{Glossary("HTTPS", "HTTPS")}}). Die `browser.urlbar.trimHttps` Einstellung trimmt das `https:` Präfix von Adressleisten-URLs. Weitere Informationen finden Sie im [Firefox-Bug 1853418](https://bugzil.la/1853418).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 121                  | Ja                       |
| Developer Edition      | 60                   | Nein                     |
| Beta                   | 60                   | Nein                     |
| Release                | 60                   | Nein                     |

- `security.insecure_connection_text.enabled`
  - : Auf `true` setzen, um die Textbeschriftung für den normalen Browsingmodus zu aktivieren.
- `security.insecure_connection_text.pbmode.enabled`
  - : Auf `true` setzen, um die Textbeschriftung für den privaten Browsingmodus zu aktivieren.
- `browser.urlbar.trimHttps`
  - : Auf `true` setzen, um das `https:` Präfix von Adressleisten-URLs zu trimmen.

### Berechtigungsrichtlinie / Funktionsrichtlinie

[Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) ermöglicht es Webentwicklern, bestimmte Funktionen und APIs im Browser selektiv zu aktivieren, zu deaktivieren und deren Verhalten zu ändern. Sie ist ähnlich wie CSP, aber steuert Funktionen anstelle von Sicherheitsverhalten.
Dies wird in Firefox als **Funktionsrichtlinie** implementiert, der Name, der in einer früheren Version der Spezifikation verwendet wurde.

Beachten Sie, dass unterstützte Richtlinien durch das Attribut [`allow`](/de/docs/Web/HTML/Reference/Elements/iframe#allow) in `<iframe>` Elementen festgelegt werden können, auch wenn die Benutzereinstellung nicht gesetzt ist.

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 65                   | Nein                     |
| Developer Edition      | 65                   | Nein                     |
| Beta                   | 65                   | Nein                     |
| Release                | 65                   | Nein                     |

- `dom.security.featurePolicy.header.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Datenschutzerhaltende Zuordnungs-API (PPA)

Die [PPA-API](https://support.mozilla.org/en-US/kb/privacy-preserving-attribution) bietet eine Alternative zum Benutzer-Tracking für die Zuordnung von Anzeigen unter Verwendung des neuen `navigator.privateAttribution` Objekts mit den Methoden `saveImpression()` und `measureConversion()`. Lesen Sie mehr über PPA [in der ursprünglichen Erklärung](https://github.com/mozilla/explainers/tree/main/archive/ppa-experiment) und der [vorgeschlagenen Spezifikation](https://w3c.github.io/ppa/). Dieses Experiment kann für Websites über [Origin-Test](https://wiki.mozilla.org/Origin_Trials) oder im Browser aktiviert werden, indem die Einstellung auf `1` gesetzt wird. ([Firefox-Bug 1900929](https://bugzil.la/1900929)).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 128                  | Nein                     |
| Developer Edition      | 128                  | Nein                     |
| Beta                   | 128                  | Nein                     |
| Release                | 128                  | Nein                     |

- `dom.origin-trials.private-attribution.state`
  - : Auf `true` setzen, um zu aktivieren.

## HTTP

### Accept Header mit MIME Type image/jxl

Der HTTP [`Accept`](/de/docs/Web/HTTP/Reference/Headers/Accept) Header in [Standardanfragen und Bildanfragen](/de/docs/Web/HTTP/Guides/Content_negotiation/List_of_default_Accept_values) kann über eine Einstellung konfiguriert werden, um Unterstützung für den `image/jxl` MIME Typ anzuzeigen.

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 128                  | Nein                     |
| Developer Edition      | 128                  | Nein                     |
| Beta                   | 128                  | Nein                     |
| Release                | 128                  | Nein                     |

- `image.jxl.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### SameSite=Lax standardmäßig

[`SameSite`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) Cookies haben standardmäßig den Wert `Lax`.
Mit dieser Einstellung werden Cookies nur gesendet, wenn ein Benutzer zur Ursprungssite navigiert, nicht für domainübergreifende Unteranfragen, um Bilder oder Frames in eine Drittanbieterseite zu laden, etc.
Weitere Informationen finden Sie im [Firefox-Bug 1617609](https://bugzil.la/1617609).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 69                   | Nein                     |
| Developer Edition      | 69                   | Nein                     |
| Beta                   | 69                   | Nein                     |
| Release                | 69                   | Nein                     |

- `network.cookie.sameSite.laxByDefault`
  - : Auf `true` setzen, um zu aktivieren.

### Access-Control-Allow-Headers Wildcard umfasst nicht Autorisierung

Der [`Access-Control-Allow-Headers`](/de/docs/Web/HTTP/Reference/Headers/Access-Control-Allow-Headers) ist ein Antwort-Header auf eine {{Glossary("Preflight_request", "CORS-Voranfrage")}}, das angibt, welche Anfrage-Header in das endgültige Anfordern aufgenommen werden können.
Die Antwortanweisung kann einen Platzhalter (`*`) enthalten, der angibt, dass die Schlussanfrage alle Header außer dem `Authorization` Header enthalten kann.

Standardmäßig umfasst Firefox den `Authorization` Header in die Schlussanfrage, nachdem eine Antwort mit `Access-Control-Allow-Headers: *` empfangen wurde.
Setzen Sie die Einstellung auf `false`, um sicherzustellen, dass Firefox den `Authorization` Header nicht einfügt.
Weitere Informationen finden Sie im [Firefox-Bug 1687364](https://bugzil.la/1687364).

| Veröffentlichungskanal | Hinzugefügte Version | Standardmäßig aktiviert? |
| ---------------------- | -------------------- | ------------------------ |
| Nightly                | 115                  | Ja                       |
| Developer Edition      | 115                  | Ja                       |
| Beta                   | 115                  | Ja                       |
| Release                | 115                  | Ja                       |

- `network.cors_preflight.authorization_covered_by_wildcard`
  - : Auf `true` setzen, um zu aktivieren.

## Entwicklerwerkzeuge

Die Entwicklerwerkzeuge von Mozilla entwickeln sich ständig weiter. Wir experimentieren mit neuen Ideen, fügen neue Funktionen hinzu und testen sie in den Nightly- und Developer Edition-Kanälen, bevor wir sie in die Beta und die Release-Version gelangen lassen. Die unten aufgeführten Funktionen sind die aktuellen experimentellen Entwicklerwerkzeugfunktionen.

**Keine experimentellen Funktionen in diesem Veröffentlichungszyklus.**

## Siehe auch

- [Firefox-Entwicklerveröffentlichungshinweise](/de/docs/Mozilla/Firefox/Releases)
- [Firefox Nightly](https://www.firefox.com/en-US/channel/desktop/)
- [Firefox Developer Edition](https://www.firefox.com/en-US/channel/desktop/developer/)
