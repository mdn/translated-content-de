---
title: Experimentelle Funktionen in Firefox
short-title: Experimentelle Funktionen
slug: Mozilla/Firefox/Experimental_features
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Diese Seite listet die experimentellen und teilweise implementierten Funktionen von Firefox auf, einschließlich sich entwickelnder oder vorgeschlagener Standards der Webplattform.
Jeder Eintrag unten enthält Informationen über die Builds, in denen eine Funktion enthalten ist (Nightly, Beta, Developer Edition oder Release), ob sie standardmäßig aktiviert ist oder nicht, und den Namen der **Einstellung**, die Sie verwenden können, um die Funktion zu aktivieren oder zu konfigurieren.
Die Beschreibung jeder Funktion enthält auch Links zu relevanten [Bugzilla Bugs](https://bugzilla.mozilla.org), die die Funktion implementieren oder aktivieren.
Diese Informationen ermöglichen es Ihnen, experimentelle Funktionen auszuprobieren und Feedback zu geben, bevor sie offiziell veröffentlicht werden.

In Bezug auf den Lebenszyklus erscheinen neue Funktionen normalerweise zuerst in [Nightly](https://www.mozilla.org/en-US/firefox/channel/desktop/#nightly), wo sie oft standardmäßig aktiviert sind, um frühzeitig Feedback und Tests zu erhalten.
Wenn keine größeren Probleme gefunden werden, sind sie in [Beta](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) und [Developer Edition](https://www.mozilla.org/en-US/firefox/developer/) Vorabversionen enthalten. Schließlich werden genehmigte Funktionen im [stabilen Release](https://www.mozilla.org/en-US/firefox/new/) Kanal freigegeben.
Wenn eine Funktion in einer Version standardmäßig aktiviert ist, wird sie nicht mehr als experimentell betrachtet und von dieser Seite entfernt.

Um diese Funktionen zu aktivieren, geben Sie `about:config` in die Adressleiste von Firefox ein, suchen Sie nach der zugehörigen **Einstellung** und ändern Sie deren Wert, der normalerweise ein Umschalten zwischen `true` und `false` ist.
Je nach Funktion müssen Sie möglicherweise den Browser neu starten, damit die Änderung wirksam wird.
Überprüfen Sie den [Firefox-Konfiguration-Editor](https://support.mozilla.org/en-US/kb/about-config-editor-firefox) Support-Artikel für weitere Informationen zur Verwaltung von Einstellungen in Firefox.

## HTML

### Layout für input type="search"

Das Layout für `input type="search"` wurde aktualisiert. Dies führt dazu, dass ein Suchfeld ein Symbol zum Löschen hat, sobald jemand darin zu tippen beginnt, um andere Browserverhalten nachzuahmen. (Siehe [Firefox bug 558594](https://bugzil.la/558594) für weitere Details.)

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 81                  | Nein                     |
| Developer Edition | 81                  | Nein                     |
| Beta              | 81                  | Nein                     |
| Release           | 81                  | Nein                     |

- `layout.forms.input-type-search.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Umschalten der Passwortanzeige

HTML-Passwort-Eingabeelemente ([`<input type="password">`](/de/docs/Web/HTML/Reference/Elements/input/password)) enthalten ein "Auge"-Symbol, das umgeschaltet werden kann, um das Passwort sichtbar oder verborgen anzuzeigen ([Firefox bug 502258](https://bugzil.la/502258)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 96                  | Nein                     |
| Developer Edition | 96                  | Nein                     |
| Beta              | 96                  | Nein                     |
| Release           | 96                  | Nein                     |

- `layout.forms.reveal-password-button.enabled`
  - : Auf `true` setzen, um zu aktivieren.

## CSS

### Hex-Boxen zur Darstellung von unerwarteten Steuerzeichen

Diese Funktion rendert Steuerzeichen (Unicode-Kategorie Cc), außer _Tab_ (`U+0009`), _Zeilenumbruch_ (`U+000A`), _Formularvorschub_ (`U+000C`) und _Wagenrücklauf_ (`U+000D`) als Hex-Box, wenn sie unerwartet sind. (Siehe [Firefox bug 1099557](https://bugzil.la/1099557) für weitere Details.)

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 43                  | Ja                       |
| Developer Edition | 43                  | Nein                     |
| Beta              | 43                  | Nein                     |
| Release           | 43                  | Nein                     |

- `layout.css.control-characters.visible`
  - : Auf `true` setzen, um zu aktivieren.

### initial-letter-Eigenschaft

Die {{cssxref("initial-letter")}} CSS-Eigenschaft ist Teil der [CSS Inline Layout](https://drafts.csswg.org/css-inline/) Spezifikation und ermöglicht es Ihnen, anzugeben, wie hervorgehobene, erhöhte und abgesenkte Anfangsbuchstaben angezeigt werden. (Siehe [Firefox bug 1223880](https://bugzil.la/1223880) für weitere Details.)

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 50                  | Nein                     |
| Developer Edition | 50                  | Nein                     |
| Beta              | 50                  | Nein                     |
| Release           | 50                  | Nein                     |

- `layout.css.initial-letter.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### fit-content()-Funktion

Die {{cssxref("fit-content_function", "fit-content()")}}-Funktion, wie sie für {{cssxref("width")}} und andere Größeneigenschaften gilt. Diese Funktion wird bereits gut für die Größenanpassung von CSS Grid Layout-Zeilen unterstützt. (Siehe [Firefox bug 1312588](https://bugzil.la/1312588) für weitere Details.)

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 91                  | Nein                     |
| Developer Edition | 91                  | Nein                     |
| Beta              | 91                  | Nein                     |
| Release           | 91                  | Nein                     |

- `layout.css.fit-content-function.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Scroll-gesteuerte Animationen

Zuvor als "scroll-verknüpfte Animationen" bezeichnet, abhängig eine [scroll-gesteuerte Animation](/de/docs/Web/CSS/CSS_scroll-driven_animations) von der Scrollposition eines Rollbalkens anstatt von der Zeit oder einer anderen Dimension.
Die {{cssxref('scroll-timeline-name')}} und {{cssxref('scroll-timeline-axis')}} Eigenschaften (und die {{cssxref('scroll-timeline')}} Kurzschreibweise) ermöglichen es Ihnen anzugeben, dass ein bestimmter Scrollbalken in einem bestimmten benannten Container als Quelle für eine scroll-gesteuerte Animation verwendet werden kann.
Der Scroll-Timeline kann dann mit einer [Animation](/de/docs/Web/CSS/CSS_animations) verknüpft werden, indem die {{cssxref('animation-timeline')}} Eigenschaft auf den mit `scroll-timeline-name` definierten Namenswert gesetzt wird.

Bei Verwendung der {{cssxref('scroll-timeline')}} Kurzform muss die Reihenfolge der Eigenschaftswerte {{cssxref('scroll-timeline-name')}} gefolgt von {{cssxref('scroll-timeline-axis')}} sein.
Die Lang- und Kurzformen der Eigenschaften sind beide hinter der Einstellung verfügbar.
Alternativ können Sie die [`scroll()`](/de/docs/Web/CSS/animation-timeline/scroll) Funktionalnotation mit {{cssxref('animation-timeline')}} verwenden, um anzugeben, dass eine Scrollbalkenachse in einem übergeordneten Element für die Timeline verwendet wird.

Für weitere Informationen siehe [Firefox bug 1807685](https://bugzil.la/1807685), [Firefox bug 1804573](https://bugzil.la/1804573), [Firefox bug 1809005](https://bugzil.la/1809005), [Firefox bug 1676791](https://bugzil.la/1676791), [Firefox bug 1754897](https://bugzil.la/1754897), [Firefox bug 1817303](https://bugzil.la/1817303) und [Firefox bug 1737918](https://bugzil.la/1737918).

Die {{cssxref('timeline-scope')}}, {{cssxref('animation-range-start')}} und {{cssxref('animation-range-end')}} Eigenschaften (und die {{cssxref('animation-range')}} Kurzform) werden derzeit noch nicht unterstützt. Für weitere Informationen siehe [Firefox bug 1676779](https://bugzil.la/1676779).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 136                 | Ja                       |
| Developer Edition | 110                 | Nein                     |
| Beta              | 110                 | Nein                     |
| Release           | 110                 | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### @scope At-Regel

Die [@scope](/de/docs/Web/CSS/@scope) [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) ermöglicht es Ihnen, spezifische Kindelemente auszuwählen, ohne die Spezifität von CSS-Selektoren übermäßig erhöhen zu müssen ([Firefox bug 1886441](https://bugzil.la/1886441)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 137                 | Ja                       |
| Developer Edition | 128                 | Nein                     |
| Beta              | 128                 | Nein                     |
| Release           | 128                 | Nein                     |

- `layout.css.at-scope.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### font-variant-emoji Eigenschaft

Die CSS [`font-variant-emoji`](/de/docs/Web/CSS/font-variant-emoji) Eigenschaft erlaubt es Ihnen, einen Standarddarstellungsstil für die Anzeige von Emojis festzulegen.
Siehe ([Firefox bug 1461589](https://bugzil.la/1461589)) für weitere Details.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 108                 | Ja                       |
| Developer Edition | 108                 | Nein                     |
| Beta              | 108                 | Nein                     |
| Release           | 108                 | Nein                     |

- `layout.css.font-variant-emoji.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### prefers-reduced-transparency Medienmerkmal

Das CSS [`prefers-reduced-transparency`](/de/docs/Web/CSS/@media/prefers-reduced-transparency) Medienmerkmal ermöglicht es Ihnen zu erkennen, ob ein Benutzer die Einstellung aktiviert hat, um die Menge an transparenten oder durchscheinenden Layereffekten auf seinem Gerät zu minimieren.
Siehe ([Firefox bug 1736914](https://bugzil.la/1736914)) für weitere Details.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 113                 | Nein                     |
| Developer Edition | 113                 | Nein                     |
| Beta              | 113                 | Nein                     |
| Release           | 113                 | Nein                     |

- `layout.css.prefers-reduced-transparency.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### inverted-colors Medienmerkmal

Das CSS [`inverted-colors`](/de/docs/Web/CSS/@media/inverted-colors) Medienmerkmal ermöglicht es Ihnen zu erkennen, ob ein Benutzeragent oder das zugrundeliegende Betriebssystem Farben invertiert.
Siehe ([Firefox bug 1794628](https://bugzil.la/1794628)) für weitere Details.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 114                 | Nein                     |
| Developer Edition | 114                 | Nein                     |
| Beta              | 114                 | Nein                     |
| Release           | 114                 | Nein                     |

- `layout.css.inverted-colors.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Eigenschaft für benannte Ansichtsprogress-Timelines

Die CSS [`view-timeline-name`](/de/docs/Web/CSS/view-timeline-name) Eigenschaft erlaubt es Ihnen, einem bestimmten Element einen Namen zu geben, der angibt, dass sein übergeordnetes Scrollenelement die Quelle einer Ansichtsprogress-Timeline ist.
Der Name kann dann der `animation-timeline` zugewiesen werden, welches das zugehörige Element animiert, während es durch den sichtbaren Bereich seines übergeordneten Scrollers bewegt wird.
Siehe ([Firefox bug 1737920](https://bugzil.la/1737920)) für weitere Details.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 114                 | Nein                     |
| Developer Edition | 114                 | Nein                     |
| Beta              | 114                 | Nein                     |
| Release           | 114                 | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Anonyme Ansichtsprogress-Timelines-Funktion

Die CSS [`view()`](/de/docs/Web/CSS/animation-timeline/view) Funktion ermöglicht es Ihnen anzugeben, dass die `animation-timeline` für ein Element eine Ansichtsprogress-Timeline ist, die das Element animiert, während es durch den sichtbaren Bereich seines übergeordneten Scrollers bewegt wird.
Die Funktion definiert die Achse des übergeordneten Elements, das die Timeline liefert, zusammen mit dem Einschlagspunkt innerhalb des sichtbaren Bereichs, an dem die Animation beginnt und endet.
Siehe ([Firefox bug 1808410](https://bugzil.la/1808410)) für weitere Details.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 114                 | Nein                     |
| Developer Edition | 114                 | Nein                     |
| Beta              | 114                 | Nein                     |
| Release           | 114                 | Nein                     |

- `layout.css.scroll-driven-animations.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Anbieterpräfixierte Transformations-Eigenschaften

Die mit `-moz-` versehenen [CSS-Transformations](/de/docs/Web/CSS/CSS_transforms) Eigenschaften können deaktiviert werden, indem man die `layout.css.prefixes.transforms` Einstellung auf `false` setzt. Die Absicht ist, diese zu deaktivieren, sobald die standardmäßigen CSS-Zoom-Eigenschaften gut unterstützt werden. ([Firefox bug 1886134](https://bugzil.la/1886134), [Firefox bug 1855763](https://bugzil.la/1855763)).

Insbesondere wird diese Einstellung die folgenden präfixierten Eigenschaften deaktivieren:

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
  - : Auf `true` setzen, um zu aktivieren.

### `shape()` Funktion

Die CSS [`shape()`](/de/docs/Web/CSS/basic-shape/shape) Funktion ist ein [`<basic-shape>`](/de/docs/Web/CSS/basic-shape) Datentyp, der es Ihnen ermöglicht, eine Form in den {{cssxref("clip-path")}} und {{cssxref("offset-path")}} Eigenschaften mithilfe eines oder mehrerer "Formbefehle" zu definieren. Diese Befehle sind den [SVG-Pfadbefehlen](/de/docs/Web/SVG/Reference/Attribute/d#path_commands) sehr ähnlich. Die `shape()` Funktion ist in gewisser Hinsicht der {{cssxref("basic-shape/path","path()")}} Funktion ähnlich, aber im Gegensatz zu `path()`, das die [SVG-Pfad](/de/docs/Web/SVG/Reference/Element/path) Syntax verwendet, verwendet `shape()` die standardmäßige CSS-Syntax. Dies ermöglicht es Ihnen, Formen einfach zu erstellen und zu bearbeiten und auch CSS-Mathematikfunktionen zu verwenden.
Für weitere Details siehe [Firefox bug 1823463](https://bugzil.la/1823463) für die Unterstützung der `shape()` Funktion in `clip-path`, [Firefox bug 1884424](https://bugzil.la/1884424) für die Unterstützung der Funktion in `offset-path` und [Firefox bug 1884425](https://bugzil.la/1884425) für deren Interpolationsunterstützung.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 126                 | Ja                       |
| Developer Edition | 126                 | Nein                     |
| Beta              | 126                 | Nein                     |
| Release           | 126                 | Nein                     |

- `layout.css.basic-shape-shape.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Symmetrisches `letter-spacing`

Die CSS {{cssxref("letter-spacing")}} Eigenschaft teilt nun den angegebenen Zeichenabstand gleichmäßig auf beiden Seiten jedes Zeichens auf. Dies unterscheidet sich vom aktuellen Verhalten, bei dem der Abstand hauptsächlich zu einer Seite hinzugefügt wird. Dieser Ansatz kann den Textabstand verbessern, insbesondere bei gemischt-direktionalem Text [Firefox bug 1891446](https://bugzil.la/1891446).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 128                 | Ja                       |
| Developer Edition | 128                 | Ja                       |
| Beta              | 127                 | Nein                     |
| Release           | 127                 | Nein                     |

- `layout.css.letter-spacing.model`
  - : Auf `true` setzen, um zu aktivieren.

### `calc()` Unterstützung für Farbkanäle in relativen Farben

Die CSS [`calc()`](/de/docs/Web/CSS/calc) Funktion kann nun Farbkanäle in [relativen Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors#using_math_functions) analysieren und ermöglicht es Ihnen, Änderungen an Farben in verschiedenen Farbräumen oder beim Verwenden verschiedener Funktionsnotationen korrekt zu berechnen [Firefox bug 1889561](https://bugzil.la/1889561).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 127                 | Ja                       |
| Developer Edition | 127                 | Nein                     |
| Beta              | 127                 | Nein                     |
| Release           | 127                 | Nein                     |

- `layout.css.relative-color-syntax.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### CSS Ankepositionierung

Das Modul [CSS Ankepositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) definiert eine Reihe von Funktionen, die es ermöglichen, Elemente als Ankerpunkte zu definieren, und für andere Elemente sich relativ zu diesen Ankerpunkten zu positionieren.
Dies ermöglicht es beispielsweise, dass Tooltips zusammen mit dem zugehörigen Inhalt angezeigt werden, während er durch den Viewport scrollt, sich bei Bedarf bewegt, wenn er über den Viewport hinausfließen würde und verschwindet, wenn der Anker außerhalb des Bildschirms verschwindet.
Der Funktionssatz wird schrittweise hinter einer Einstellung eingeführt ([Firefox bug 1838746](https://bugzil.la/1838746)).

Die implementierten Teile umfassen [`CSSPositionTryRule`](/de/docs/Web/API/CSSPositionTryRule) und [`CSSPositionTryDescriptors`](/de/docs/Web/API/CSSPositionTryDescriptors) (Firefox 131).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 131                 | Nein                     |
| Developer Edition | 131                 | Nein                     |
| Beta              | 131                 | Nein                     |
| Release           | 131                 | Nein                     |

- `layout.css.anchor-positioning.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### `::details-content` Pseudoelement

Das CSS {{cssxref("::details-content")}} Pseudoelement ermöglicht es Ihnen, den Inhalt des {{htmlElement("details")}} Elements zu stylen ([Firefox bug 1901037](https://bugzil.la/1901037)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 138                 | Nein                     |
| Developer Edition | 138                 | Nein                     |
| Beta              | 138                 | Nein                     |
| Release           | 138                 | Nein                     |

- `layout.css.details-content.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Erlauben von Pseudoelementen nach elementgestützten Pseudoelementen

Die Arbeit daran, [Pseudoelemente](/de/docs/Web/CSS/Pseudo-elements) wie {{cssxref("::first-letter")}} und {{cssxref("::before")}} zu ermöglichen, nach [elementgestützten Pseudoelementen](/de/docs/Web/CSS/Pseudo-elements#element-backed_pseudo-elements) wie {{cssxref("::details-content")}} und {{cssxref("::file-selector-button")}} anzugefügt zu werden, hat begonnen.

Dies ermöglicht es Benutzern beispielsweise, den ersten Buchstaben des {{htmlElement("details")}} Elements mit dem CSS-Selektor `::details-content::first-letter` zu stylen oder Inhalte vor einem {{HTMLElement("input")}} vom [`type="file"`](/de/docs/Web/HTML/Reference/Elements/input/file) mit dem CSS-Selektor `::file-selector-button::before` hinzuzufügen.

Derzeit kann nur die Unterstützung für `::details-content::first-letter` geparst werden, indem `@supports(::details-content::first-letter)` verwendet wird, und die Einstellung für das [::details-content Pseudoelement](#details-content_pseudo-element) muss aktiviert sein, um dies zu testen. Das `::file-selector-button` Pseudoelement ist noch nicht als elementgestütztes Pseudoelement markiert, daher gibt es derzeit keine Möglichkeit, dies zu testen. ([Firefox bug 1953557](https://bugzil.la/1953557)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 138                 | Nein                     |
| Developer Edition | 138                 | Nein                     |
| Beta              | 138                 | Nein                     |
| Release           | 138                 | Nein                     |

- `layout.css.details-content.enabled`
  - : Auf `true` setzen, um zu aktivieren.

## SVG

**Keine experimentellen Funktionen in diesem Veröffentlichungszyklus.**

## JavaScript

### Atomics.waitAsync()

Die {{jsxref("Atomics.waitAsync()")}} statische Methode wartet asynchron auf einen gemeinsamen Speicherort und gibt ein Objekt zurück, das das Ergebnis der Operation darstellt.
Es ist nicht blockierend und auf dem Hauptthread nutzbar. ([Firefox bug 1467846](https://bugzil.la/1467846)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 140                 | Nein                     |
| Developer Edition | 140                 | Nein                     |
| Beta              | 140                 | Nein                     |
| Release           | 140                 | Nein                     |

- `javascript.options.atomics_wait_async`
  - : Auf `true` setzen, um zu aktivieren.

## APIs

### CloseWatcher Schnittstelle

Eingebaute Webkomponenten mit "offen" und "schließen" Semantiken, wie modale Dialoge und Popovers, können mit gerätenativen Mechanismen geschlossen werden.
Zum Beispiel können Sie auf Android ein Dialog über die Zurück-Taste schließen.
Die [`CloseWatcher`](/de/docs/Web/API/CloseWatcher) Schnittstelle ermöglicht es Entwicklern, UI-Komponenten zu implementieren, wie benutzerdefinierte Seitenleisten, die ähnlich mit nativen Mechanismen geschlossen werden können.
([Firefox bug 1888729](https://bugzil.la/1888729)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert?      |
| ----------------- | ------------------- | ----------------------------- |
| Nightly           | 140                 | Ja (Desktop). Nein (Android). |
| Developer Edition | 132                 | Nein                          |
| Beta              | 132                 | Nein                          |
| Release           | 132                 | Nein                          |

- `dom.closewatcher.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Trusted Types API

Die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) bietet Mechanismen, um sicherzustellen, dass Funktionen, die potenziell als Vektoren für XSS-Angriffe genutzt werden können, nur mit Daten aufgerufen werden können, die überprüft oder bereinigt wurden.

> [!NOTE]
> Zum Zeitpunkt der Erstellung dieses Dokuments wurde noch nicht genug der API implementiert, um sie effektiv testbar zu machen.
> Diese Notiz wird entfernt, sobald sie bereit ist.

Dieser Teil der API wurde implementiert:

- [`TrustedTypePolicyFactory`](/de/docs/Web/API/TrustedTypePolicyFactory):
  - [`getAttributeType()`](/de/docs/Web/API/TrustedTypePolicyFactory/getAttributeType) und [`getPropertyType()`](/de/docs/Web/API/TrustedTypePolicyFactory/getPropertyType) ([Firefox bug 1917783](https://bugzil.la/1917783), [Firefox bug 1917784](https://bugzil.la/1917784)).
- Die [`write()`](/de/docs/Web/API/Document/write) und [`writeln()`](/de/docs/Web/API/Document/writeln) Methoden der [`Document`](/de/docs/Web/API/Document) Schnittstelle akzeptieren nun [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) Objekte als Parameter, zusätzlich zu Zeichenfolgen. ([Firefox bug 1906301](https://bugzil.la/1906301)).
- Die [`text`](/de/docs/Web/API/HTMLScriptElement/text), [`innerText`](/de/docs/Web/API/HTMLElement/innerText), und [`textContent`](/de/docs/Web/API/Node/textContent) Eigenschaft der [`HTMLScriptElement`](/de/docs/Web/API/HTMLScriptElement) Schnittstelle akzeptieren nun [`TrustedScript`](/de/docs/Web/API/TrustedScript) Objekte als Wert, während [`src`](/de/docs/Web/API/HTMLScriptElement/src) akzeptiert [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL) Werte. ([Firefox bug 1905706](https://bugzil.la/1905706)).
- Die [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval) und [`Window.setTimeout()`](/de/docs/Web/API/Window/setTimeout) Methoden können mit einem [`TrustedScript`](/de/docs/Web/API/TrustedScript) aufgerufen werden. ([Firefox bug 1931290](https://bugzil.la/1931290)).
- Das globale [`trustedTypes`](/de/docs/Web/API/Window/trustedTypes) Objekt ist verfügbar, um auf die Trusted Types API zuzugreifen.
- Die Eigenschaften [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) und [`ShadowRoot.innerHTML`](/de/docs/Web/API/ShadowRoot/innerHTML) können mit [trusted types](/de/docs/Web/API/Trusted_Types_API) aufgerufen werden.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 133                 | Nein                     |
| Developer Edition | 133                 | Nein                     |
| Beta              | 133                 | Nein                     |
| Release           | 133                 | Nein                     |

- `dom.security.trusted_types.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### HTML Sanitizer API

Die [HTML Sanitizer API](/de/docs/Web/API/HTML_Sanitizer_API) ermöglicht es Entwicklern, unzuverlässige HTML-Zeichenfolgen zu bereinigen, um sie sicher zur DOM eines Dokuments hinzuzufügen.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 138                 | Nein                     |
| Developer Edition | 138                 | Nein                     |
| Beta              | 138                 | Nein                     |
| Release           | 138                 | Nein                     |

- `dom.security.sanitizer.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### `closedBy` Attribut für `<dialog>`

Das [`closedBy`](/de/docs/Web/API/HTMLDialogElement/closedBy) Attribut der [`HTMLDialogElement`](/de/docs/Web/API/HTMLDialogElement) Schnittstelle und das entsprechende [`closedby`](/de/docs/Web/HTML/Reference/Elements/dialog#closedby) Attribut des {{htmlelement("dialog")}} Elements werden unterstützt.
Mit diesen Attributen können Entwickler angeben, ob Benutzer einen Dialog durch Klicken außerhalb des Dialogbereichs schließen können, oder ob der Dialog programmgesteuert geschlossen werden muss, und so weiter.
([Firefox bug 1964077](https://bugzil.la/1964077)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 140                 | Ja                       |
| Developer Edition | 140                 | Nein                     |
| Beta              | 140                 | Nein                     |
| Release           | 140                 | Nein                     |

- `dom.dialog.light-dismiss.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Entfernen der `beforescriptexecute` und `afterscriptexecute` Ereignisse

Die nicht-standardmäßigen Ereignisse [`beforescriptexecute`](/de/docs/Web/API/Document/beforescriptexecute_event) und [`afterscriptexecute`](/de/docs/Web/API/Document/afterscriptexecute_event) auf der [`Document`](/de/docs/Web/API/Document) Schnittstelle sowie [`afterscriptexecute`](/de/docs/Web/API/Element/afterscriptexecute_event) und [`beforescriptexecute`](/de/docs/Web/API/Element/beforescriptexecute_event) auf der [`Element`](/de/docs/Web/API/Element) Schnittstelle sollen entfernt werden. Diese wurden in Nightly deaktiviert.
([Firefox bug 1954685](https://bugzil.la/1954685)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 139                 | Nein                     |
| Developer Edition | 139                 | Ja                       |
| Beta              | 139                 | Ja                       |
| Release           | 139                 | Ja                       |

- `dom.events.script_execute.enable`
  - : Auf `true` setzen, um zu aktivieren.

### PerformanceEventTiming.interactionId

[`PerformanceEventTiming.interactionId`](/de/docs/Web/API/PerformanceEventTiming/interactionId) kann verwendet werden, um die Latenzzeitmessung für Ereignisse zu erfassen, die durch eine bestimmte Benutzerinteraktion ausgelöst wurden. ([Firefox bug 1934683](https://bugzil.la/1934683)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 138                 | Nein                     |
| Developer Edition | 138                 | Nein                     |
| Beta              | 138                 | Nein                     |
| Release           | 138                 | Nein                     |

- `dom.performance.event_timing.enable_interactionid`
  - : Auf `true` setzen, um zu aktivieren.

### Notification Aktionen und maxActions Eigenschaften

Die [`actions`](/de/docs/Web/API/Notification/actions) schreibgeschützte Eigenschaft und die [`maxActions`](/de/docs/Web/API/Notification/maxActions_static) statische schreibgeschützte Eigenschaft der [`Notification`](/de/docs/Web/API/Notification) Schnittstelle werden im Nightly auf Desktop unterstützt.
Diese enthalten die Benachrichtigungsaktionen, die mit [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification) festgelegt wurden, und die maximale Anzahl von Aktionen, die festgelegt werden können.
([Firefox bug 1225110](https://bugzil.la/1225110), [Firefox bug 1963263](https://bugzil.la/1963263)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 138                 | Ja (nur Desktop)         |
| Developer Edition | 138                 | Nein                     |
| Beta              | 138                 | Nein                     |
| Release           | 138                 | Nein                     |

- `dom.webnotifications.actions.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Grafik: Canvas, WebGL und WebGPU

#### WebGL: Entwurfserweiterungen

Wenn diese Einstellung aktiviert ist, werden alle WebGL-Erweiterungen, die sich derzeit im "Entwurfs"-Status befinden und getestet werden, zur Verwendung aktiviert. Derzeit gibt es keine WebGL-Erweiterungen, die von Firefox getestet werden.

#### WebGPU API

Die [WebGPU API](/de/docs/Web/API/WebGPU_API) bietet Unterstützung auf niedriger Ebene für die Durchführung von Berechnungen und Grafikrendering mit der [Graphics Processing Unit](https://en.wikipedia.org/wiki/Graphics_Processing_Unit) (GPU) des Geräts oder Computers des Benutzers. Siehe [Firefox bug 1602129](https://bugzil.la/1602129) für unseren Fortschritt bei dieser API.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 113                 | Ja                       |
| Developer Edition | 73                  | Nein                     |
| Beta              | 73                  | Nein                     |
| Release           | 73                  | Nein                     |

- `dom.webgpu.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Unterstützung der Reporting API für CSP-Verletzungen

Die [Reporting API](/de/docs/Web/API/Reporting_API) hat jetzt Unterstützung für das Berichten von [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) Verletzungen.

[`Report`](/de/docs/Web/API/Report) Instanzen, die von der [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) Schnittstelle zurückgegeben werden, können jetzt einen `type` Wert von `"csp-violation"` und eine `body` Eigenschaft haben, die eine Instanz der [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody) Schnittstelle enthält.
Dies ermöglicht es, CSP-Verletzungen auf einer Webseite zu berichten.

CSP-Verletzungsberichte können auch an Remote-Endpunkte gesendet werden, die nach Name in der CSP {{CSP("report-to")}} Direktive angegeben werden — Endpunktnamen und zugehörige URLs müssen zuerst in den {{httpheader('Reporting-Endpoints')}} oder {{httpheader('Report-To')}} HTTP-Antwortheadern definiert werden.
Der Bericht ist eine Serialisierung des [`Report`](/de/docs/Web/API/Report) Objekts, das oben beschrieben wird, mit einer `body` Eigenschaft, die eine Serialisierung einer [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody) Instanz ist.

Dieser Verletzungsbericht ersetzt einen ähnlichen CSP-spezifischen Mechanismus zum Senden von Verletzungsberichten, der die CSP {{CSP("report-uri")}} Direktive verwendet, um die URL des berichtenden Endpunkts festzulegen, und hat ein [CSP-spezifisches JSON-Verletzungsberichtsformat](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/report-uri#violation_report_syntax).
([Firefox bug 1391243](https://bugzil.la/1391243)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 130                 | Nein                     |
| Developer Edition | 130                 | Nein                     |
| Beta              | 130                 | Nein                     |
| Release           | 130                 | Nein                     |

- `dom.reporting.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### WebRTC und Medien

Die folgenden experimentellen Funktionen umfassen diejenigen, die in der [WebRTC API](/de/docs/Web/API/WebRTC_API), der [Web Audio API](/de/docs/Web/API/Web_Audio_API), der [Media Source Extensions API](/de/docs/Web/API/Media_Source_Extensions_API), der [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API) und der [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) zu finden sind.

#### Asynchrone SourceBuffer-Addierung und -Entfernung

Dies fügt die auf Versprechen basierenden Methoden [`appendBufferAsync()`](/de/docs/Web/API/SourceBuffer/appendBufferAsync) und [`removeAsync()`](/de/docs/Web/API/SourceBuffer/removeAsync) für das Hinzufügen und Entfernen von Medienquellenpuffern zur [`SourceBuffer`](/de/docs/Web/API/SourceBuffer) Schnittstelle hinzu. Siehe [Firefox bug 1280613](https://bugzil.la/1280613) und [Firefox bug 778617](https://bugzil.la/778617) für weitere Informationen.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 62                  | Nein                     |
| Developer Edition | 62                  | Nein                     |
| Beta              | 62                  | Nein                     |
| Release           | 62                  | Nein                     |

- `media.mediasource.experimental.enabled`
  - : Auf `true` setzen, um zu aktivieren.

#### AVIF Konformitätsstrenge

Die `image.avif.compliance_strictness` Einstellung kann verwendet werden, um die _Strenge_ zu steuern, die beim Verarbeiten von [AVIF](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) Bildern angewendet wird.
Dies ermöglicht es Firefox-Benutzern, Bilder anzuzeigen, die auf einigen anderen Browsern gerendert werden, auch wenn sie nicht streng konform sind.

| Release-Kanal     | Version hinzugefügt | Standardwert |
| ----------------- | ------------------- | ------------ |
| Nightly           | 92                  | 1            |
| Developer Edition | 92                  | 1            |
| Beta              | 92                  | 1            |
| Release           | 92                  | 1            |

- `image.avif.compliance_strictness`
  - : Numerischer Wert, der ein _Strenge_ Niveau anzeigt. Erlaubte Werte sind:
    - `0`: Erlaubend. Akzeptieren von Bildern mit Spezifikationsverletzungen sowohl in Empfehlungen ("sollte"-Sprache) als auch in Anforderungen ("muss"-Sprache), sofern sie sicher oder eindeutig interpretiert werden können.
    - `1` **(Standard)**: Gemischt. Ablehnen von Verletzungen von Anforderungen ("muss"), aber Verletzungen von Empfehlungen ("sollte") erlauben.
    - `2`: Streng. Ablehnen jeglicher Verletzungen von festgelegten Anforderungen oder Empfehlungen.

#### JPEG XL Unterstützung

Firefox unterstützt [JPEG XL](https://jpeg.org/jpegxl/) Bilder, wenn diese Funktion aktiviert ist.
Siehe [Firefox bug 1539075](https://bugzil.la/1539075) für weitere Details.

Beachten Sie, dass, wie unten gezeigt, die Funktion nur in Nightly-Builds verfügbar ist (unabhängig davon, ob die Einstellung festgelegt ist).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 90                  | Nein                     |
| Developer Edition | —                   | —                        |
| Beta              | —                   | —                        |
| Release           | —                   | —                        |

- `image.jxl.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### WebVR API

#### WebVR API (Deaktiviert)

Die veraltete [WebVR API](/de/docs/Web/API/WebVR_API) befindet sich auf dem Pfad zur Entfernung.
Sie ist standardmäßig in allen Builds deaktiviert [Firefox bug 1750902](https://bugzil.la/1750902).

| Release-Kanal     | Version entfernt | Standardmäßig aktiviert? |
| ----------------- | ---------------- | ------------------------ |
| Nightly           | 98               | Nein                     |
| Developer Edition | 98               | Nein                     |
| Beta              | 98               | Nein                     |
| Release           | 98               | Nein                     |

- `dom.vr.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### HTML DOM API

#### Auswahl über Shadow DOM-Grenzen hinweg

Die Methode [`Selection.getComposedRanges()`](/de/docs/Web/API/Selection/getComposedRanges) kann verwendet werden, um ein Array von [`StaticRange`](/de/docs/Web/API/StaticRange) Objekten zu erhalten, die den aktuellen ausgewählten Bereich oder Bereiche darstellen.
Im Gegensatz zu [`Selection.getRangeAt()`](/de/docs/Web/API/Selection/getRangeAt) kann diese Methode Bereiche mit Anker- oder Fokus-Knoten innerhalb eines Shadow DOM zurückgeben, jedoch nur, wenn sie mit den [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) Objekten, die diese Knoten enthalten, aufgerufen wird.
Ansonsten gibt sie einen Bereich zurück, der neu angelegt wurde, um den Wurzelknoten des Shadow DOM zu enthalten, das den Knoten enthält.
Die `Selection` Methoden [`setBaseAndExtent()`](/de/docs/Web/API/Selection/setBaseAndExtent), [`collapse()`](/de/docs/Web/API/Selection/collapse) und [`extend()`](/de/docs/Web/API/Selection/extend) wurden ebenfalls so modifiziert, dass sie Knoten innerhalb eines Shadow DOM akzeptieren.

Benutzerselektion per Maus, Tastatur usw. kann an beliebiger Stelle im Dokument beginnen und enden, einschließlich innerhalb beliebiger offener oder geschlossener Shadow-Bäume.
([Firefox bug 1867058](https://bugzil.la/1867058)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 126                 | Ja                       |
| Developer Edition | 126                 | Nein                     |
| Beta              | 126                 | Nein                     |
| Release           | 126                 | Nein                     |

- `dom.shadowdom.selection_across_boundary.enabled`
  - : Auf `true` setzen, um zu aktivieren.

#### HTMLMediaElement Eigenschaften: audioTracks und videoTracks

Das Aktivieren dieser Funktion fügt die [`HTMLMediaElement.audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks) und [`HTMLMediaElement.videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks) Eigenschaften zu allen HTML-Medienelementen hinzu. Da Firefox derzeit jedoch keine Unterstützung für mehrere Audio- und Videospuren bietet, funktionieren die gängigsten Anwendungsfälle für diese Eigenschaften nicht, daher sind sie beide standardmäßig deaktiviert. Siehe [Firefox bug 1057233](https://bugzil.la/1057233) für weitere Details.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 33                  | Nein                     |
| Developer Edition | 33                  | Nein                     |
| Beta              | 33                  | Nein                     |
| Release           | 33                  | Nein                     |

- `media.track.enabled`
  - : Auf `true` setzen, um zu aktivieren.

#### GeometryUtils Methoden: convertPointFromNode(), convertRectFromNode(), und convertQuadFromNode()

Die `GeometryUtils` Methoden `convertPointFromNode()`, `convertRectFromNode()`, und `convertQuadFromNode()` konvertieren den gegebenen Punkt, das Rechteck oder den Vierfachpunkt von dem [`Node`](/de/docs/Web/API/Node), auf dem sie aufgerufen werden, zu einem anderen Knoten. (Siehe [Firefox bug 918189](https://bugzil.la/918189) für weitere Details.)

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 31                  | Ja                       |
| Developer Edition | 31                  | Nein                     |
| Beta              | 31                  | Nein                     |
| Release           | 31                  | Nein                     |

- `layout.css.convertFromNode.enable`
  - : Auf `true` setzen, um zu aktivieren.

#### GeometryUtils Methode: getBoxQuads()

Die `GeometryUtils` Methode `getBoxQuads()` gibt die CSS-Boxen für einen [`Node`](/de/docs/Web/API/Node) relativ zu einem anderen Knoten oder Viewport zurück. (Siehe [Firefox bug 917755](https://bugzil.la/917755) für weitere Details.)

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 31                  | Ja                       |
| Developer Edition | 31                  | Nein                     |
| Beta              | 31                  | Nein                     |
| Release           | 31                  | Nein                     |

- `layout.css.getBoxQuads.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Payment Request API

#### Primäre Zahlungsabwicklung

Die [Payment Request API](/de/docs/Web/API/Payment_Request_API) bietet Unterstützung für die Abwicklung von webbasierten Zahlungen innerhalb von Webinhalten oder -apps. Aufgrund eines Fehlers, der bei Tests der Benutzeroberfläche auftrat, haben wir beschlossen, die Bereitstellung dieser API zu verschieben, während Diskussionen über potenzielle Änderungen an der API geführt werden. Die Arbeit ist im Gange. (Siehe [Firefox bug 1318984](https://bugzil.la/1318984) für weitere Details.)

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 55                  | Nein                     |
| Developer Edition | 55                  | Nein                     |
| Beta              | 55                  | Nein                     |
| Release           | 55                  | Nein                     |

- `dom.payments.request.enabled`
  - : Auf `true` setzen, um zu aktivieren.
- `dom.payments.request.supportedRegions`
  - : Ländercodes als kommaseparierte Whitelist von Regionen (z.B. `US,CA`).

### WebShare API

Die [Web Share API](/de/docs/Web/API/Web_Share_API) ermöglicht das Teilen von Dateien, URLs und anderen Daten von einer Seite.
Diese Funktion ist auf Android bei allen Builds aktiviert, jedoch hinter einer Einstellung auf dem Desktop (sofern nicht unten angegeben).

| Release-Kanal     | Version geändert | Standardmäßig aktiviert?                    |
| ----------------- | ---------------- | ------------------------------------------- |
| Nightly           | 71               | Nein (Standard). Ja (Windows ab Version 92) |
| Developer Edition | 71               | Nein                                        |
| Beta              | 71               | Nein                                        |
| Release           | 71               | Nein (Desktop). Ja (Android).               |

- `dom.webshare.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Screen Orientation API

#### ScreenOrientation.lock()

Die [`ScreenOrientation.lock()`](/de/docs/Web/API/ScreenOrientation/lock) Methode erlaubt, ein Gerät auf eine bestimmte Ausrichtung zu sperren, wenn dies vom Gerät unterstützt und von den Browser-Vorsperranforderungen erlaubt wird.
Typischerweise ist das Sperren der Ausrichtung nur auf mobilen Geräten erlaubt, wenn das Dokument in Vollbildansicht angezeigt wird.
Siehe [Firefox bug 1697647](https://bugzil.la/1697647) für weitere Details.

| Release-Kanal     | Version geändert | Standardmäßig aktiviert? |
| ----------------- | ---------------- | ------------------------ |
| Nightly           | 111              | Ja                       |
| Developer Edition | 97               | Nein                     |
| Beta              | 97               | Nein                     |
| Release           | 97               | Nein                     |

- `dom.screenorientation.allow-lock`
  - : Auf `true` setzen, um zu aktivieren.

### Priorisierte Aufgabenplanung API

Die [Priorisierte Aufgabenplanung API](/de/docs/Web/API/Prioritized_Task_Scheduling_API) bietet eine standardisierte Möglichkeit, alle Aufgaben einer Anwendung zu priorisieren, egal ob sie im Code eines Website-Entwicklers oder in Drittanbieter-Bibliotheken und Frameworks definiert sind.
Ab Firefox-Version 140 ist die API sowohl funktional vollständig als auch in der Nightly-Version aktiviert.
([Firefox bug 1734997](https://bugzil.la/1734997) und [Firefox bug 1920115](https://bugzil.la/1920115)).

| Release-Kanal     | Version geändert | Standardmäßig aktiviert? |
| ----------------- | ---------------- | ------------------------ |
| Nightly           | 139              | Ja                       |
| Developer Edition | 101              | Nein                     |
| Beta              | 101              | Nein                     |
| Release           | 101              | Nein                     |

- `dom.enable_web_task_scheduling`
  - : Auf `true` setzen, um zu aktivieren.

### Benachrichtigungen API

Benachrichtigungen haben die [`requireInteraction`](/de/docs/Web/API/Notification/requireInteraction) Eigenschaft standardmäßig auf Windows-Systemen und in der Nightly-Version auf `true` gesetzt ([Firefox bug 1794475](https://bugzil.la/1794475)).

| Release-Kanal     | Version geändert | Standardmäßig aktiviert? |
| ----------------- | ---------------- | ------------------------ |
| Nightly           | 117              | Ja                       |
| Developer Edition | 117              | Nein                     |
| Beta              | 117              | Nein                     |
| Release           | 117              | Nur Windows              |

- `dom.webnotifications.requireinteraction.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### View Transition API

Die [View Transition API](/de/docs/Web/API/View_Transition_API) bietet einen Mechanismus, um leicht animierte Übergänge zwischen verschiedenen Webseitenansichten zu erstellen. Dies ist besonders nützlich für {{Glossary("SPA", "SPAs (Single-Page-Applications)")}}. ([Firefox bug 1950759](https://bugzil.la/1950759)).

| Release-Kanal     | Version geändert | Standardmäßig aktiviert? |
| ----------------- | ---------------- | ------------------------ |
| Nightly           | 139              | Ja                       |
| Developer Edition | —                | Nein                     |
| Beta              | —                | Nein                     |
| Release           | —                | Nein                     |

- `dom.viewTransitions.enabled`
  - : Auf `true` setzen, um zu aktivieren.

## Sicherheit und Datenschutz

### Blockieren von Klartextanfragen aus Flash auf verschlüsselten Seiten

Um die Risiken von Man-in-the-Middle (MitM) Angriffen durch Flash-Inhalte auf verschlüsselten Seiten zu verringern, wurde eine Einstellung hinzugefügt, um `OBJECT_SUBREQUEST`s als aktiven Inhalt zu behandeln. Siehe [Firefox bug 1190623](https://bugzil.la/1190623) für weitere Details.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 59                  | Nein                     |
| Developer Edition | 59                  | Nein                     |
| Beta              | 59                  | Nein                     |
| Release           | 59                  | Nein                     |

- `security.mixed_content.block_object_subrequest`
  - : Auf `true` setzen, um zu aktivieren.

### Markierung unsicherer Seiten

Die zwei `security.insecure_connection_text_*` Einstellungen fügen ein "Nicht sicher"-Textlabel in die Adressleiste neben dem traditionellen Schlosssymbol ein, wenn eine Seite unsicher geladen wird (d.h. unter Verwendung von {{Glossary("HTTP", "HTTP")}} anstelle von {{Glossary("HTTPS", "HTTPS")}}). Die `browser.urlbar.trimHttps` Einstellung entfernt das `https:` Präfix aus Adressleisten-URLs. Siehe [Firefox bug 1853418](https://bugzil.la/1853418) für weitere Details.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 121                 | Ja                       |
| Developer Edition | 60                  | Nein                     |
| Beta              | 60                  | Nein                     |
| Release           | 60                  | Nein                     |

- `security.insecure_connection_text.enabled`
  - : Auf `true` setzen, um das Textlabel für den normalen Browsing-Modus zu aktivieren.
- `security.insecure_connection_text.pbmode.enabled`
  - : Auf `true` setzen, um das Textlabel für den privaten Browsing-Modus zu aktivieren.
- `browser.urlbar.trimHttps`
  - : Auf `true` setzen, um das `https:` Präfix aus Adressleisten-URLs zu entfernen.

### Berechtigungspolitik / Funktionspolitik

[Berechtigungspolitik](/de/docs/Web/HTTP/Guides/Permissions_Policy) ermöglicht es Webentwicklern, bestimmte Funktionen und APIs im Browser selektiv zu aktivieren, deaktivieren oder das Verhalten dieser anzupassen. Es ähnelt der CSP, kontrolliert jedoch Funktionen anstelle von Sicherheitsverhalten.
Dies wird in Firefox als **Funktionspolitik** implementiert, der Name, der in einer früheren Version der Spezifikation verwendet wurde.

Beachten Sie, dass unterstützte Politiken durch das [`allow`](/de/docs/Web/HTML/Reference/Elements/iframe#allow) Attribut auf `<iframe>` Elementen festgelegt werden können, auch wenn die Benutzereinstellung nicht gesetzt ist.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 65                  | Nein                     |
| Developer Edition | 65                  | Nein                     |
| Beta              | 65                  | Nein                     |
| Release           | 65                  | Nein                     |

- `dom.security.featurePolicy.header.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### Datenschutzfreundliche Attribution API (PPA)

[PPA API](https://support.mozilla.org/en-US/kb/privacy-preserving-attribution) bietet eine Alternative zum User-Tracking für die Anzeigennachverfolgung mit dem neuen `navigator.privateAttribution` Objekt mit den Methoden `saveImpression()` und `measureConversion()`. Lesen Sie mehr über PPA [im ursprünglichen Explainer](https://github.com/mozilla/explainers/tree/main/archive/ppa-experiment) und der [vorgeschlagenen Spezifikation](https://w3c.github.io/ppa/). Dieses Experiment kann für Websites über [origin trial](https://wiki.mozilla.org/Origin_Trials) oder im Browser durch Setzen der Einstellung auf `1` aktiviert werden. ([Firefox bug 1900929](https://bugzil.la/1900929)).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 128                 | Nein                     |
| Developer Edition | 128                 | Nein                     |
| Beta              | 128                 | Nein                     |
| Release           | 128                 | Nein                     |

- `dom.origin-trials.private-attribution.state`
  - : Auf `true` setzen, um zu aktivieren.

## HTTP

### Accept-Header mit MIME-Typ image/jxl

Der HTTP [`Accept`](/de/docs/Web/HTTP/Reference/Headers/Accept) Header kann in [standardmäßigen Anfragen und Bildanfragen](/de/docs/Web/HTTP/Guides/Content_negotiation/List_of_default_Accept_values) über eine Einstellung konfiguriert werden, um Unterstützung für den `image/jxl` MIME-Typ anzuzeigen.

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 128                 | Nein                     |
| Developer Edition | 128                 | Nein                     |
| Beta              | 128                 | Nein                     |
| Release           | 128                 | Nein                     |

- `image.jxl.enabled`
  - : Auf `true` setzen, um zu aktivieren.

### SameSite=Lax standardmäßig

[`SameSite` Cookies](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) haben standardmäßig den Wert `Lax`.
Mit dieser Einstellung werden Cookies nur gesendet, wenn ein Benutzer zur Ursprungsseite navigiert, nicht für andere Seitenunteranfragen, um Bilder oder Frames auf einer Drittanbieterseite zu laden usw.
Für weitere Details siehe [Firefox bug 1617609](https://bugzil.la/1617609).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 69                  | Nein                     |
| Developer Edition | 69                  | Nein                     |
| Beta              | 69                  | Nein                     |
| Release           | 69                  | Nein                     |

- `network.cookie.sameSite.laxByDefault`
  - : Auf `true` setzen, um zu aktivieren.

### Access-Control-Allow-Headers Wildcard deckt keine Authorization ab

Der [`Access-Control-Allow-Headers`](/de/docs/Web/HTTP/Reference/Headers/Access-Control-Allow-Headers) ist ein Antwortheader zu einer {{Glossary("Preflight_request", "CORS-Preflight-Anfrage")}}, der angibt, welche Anfrageheader in der finalen Anfrage enthalten sein dürfen.
Die Antwortrichtlinie kann ein Wildcard (`*`) enthalten, was angibt, dass die finale Anfrage alle Header außer dem `Authorization` Header enthalten darf.

Standardmäßig enthält Firefox den `Authorization` Header in der finalen Anfrage nach Erhalt einer Antwort mit `Access-Control-Allow-Headers: *`.
Setzen Sie die Einstellung auf `false`, um sicherzustellen, dass Firefox den `Authorization` Header nicht enthält.
Für weitere Details siehe [Firefox bug 1687364](https://bugzil.la/1687364).

| Release-Kanal     | Version hinzugefügt | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 115                 | Ja                       |
| Developer Edition | 115                 | Ja                       |
| Beta              | 115                 | Ja                       |
| Release           | 115                 | Ja                       |

- `network.cors_preflight.authorization_covered_by_wildcard`
  - : Auf `true` setzen, um zu aktivieren.

## Entwickler-Tools

Die Entwickler-Tools von Mozilla entwickeln sich ständig weiter. Wir experimentieren mit neuen Ideen, fügen neue Funktionen hinzu und testen sie auf den Nightly- und Developer-Edition-Kanälen, bevor wir sie zur Beta und Release durchlassen. Die unten stehenden Funktionen sind die aktuellen experimentellen Entwickler-Tool-Funktionen.

**Keine experimentellen Funktionen in diesem Veröffentlichungszyklus.**

## Siehe auch

- [Firefox Entwickler-Veröffentlichungshinweise](/de/docs/Mozilla/Firefox/Releases)
- [Firefox Nightly](https://www.mozilla.org/en-US/firefox/channel/desktop/)
- [Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/)
