---
title: Experimentelle Funktionen in Firefox
short-title: Experimentelle Funktionen
slug: Mozilla/Firefox/Experimental_features
l10n:
  sourceCommit: 878526c9905f44efba6a14447293d6ba4f50b627
---

Auf dieser Seite sind experimentelle und teilweise implementierte Funktionen von Firefox aufgeführt, darunter sich weiterentwickelnde oder vorgeschlagene Standards der Webplattform.
Jeder Eintrag enthält Informationen darüber, in welchen Versionen eine Funktion enthalten ist (Nightly, Beta, Developer Edition oder Release), ob sie standardmäßig aktiviert ist und mit welcher **Einstellung** sie aktiviert oder konfiguriert werden kann.
Die Beschreibung jeder Funktion enthält außerdem Links zu den relevanten [Bugzilla-Bugs](https://bugzilla.mozilla.org), mit denen die Funktion implementiert oder aktiviert wird.
So können Sie experimentelle Funktionen ausprobieren und Feedback geben, bevor sie offiziell veröffentlicht werden.

Im Entwicklungszyklus erscheinen neue Funktionen üblicherweise zuerst in [Nightly](https://www.firefox.com/en-US/channel/desktop/#nightly), wo sie für frühzeitiges Feedback und Tests häufig standardmäßig aktiviert sind.
Wenn keine größeren Probleme auftreten, werden sie in die Vorabversionen [Beta](https://www.firefox.com/en-US/channel/desktop/#beta) und [Developer Edition](https://www.firefox.com/en-US/channel/desktop/developer/) aufgenommen. Schließlich werden freigegebene Funktionen über den Kanal [Stable Release](https://www.firefox.com/en-US/) veröffentlicht.
Sobald eine Funktion in einer Release-Version standardmäßig aktiviert ist, gilt sie nicht mehr als experimentell und wird von dieser Seite entfernt.

Um diese Funktionen zu aktivieren, geben Sie `about:config` in die Firefox-Adressleiste ein, suchen Sie nach der zugehörigen **Einstellung** und ändern Sie deren Wert. Meist lässt sich dieser zwischen `true` und `false` umschalten.
Je nach Funktion müssen Sie den Browser möglicherweise neu starten, damit die Änderung wirksam wird.
Weitere Informationen zur Verwaltung von Einstellungen in Firefox finden Sie im Hilfeartikel zum [Firefox-Konfigurationseditor](https://support.mozilla.org/en-US/kb/about-config-editor-firefox).

## HTML

### Layout für input type="search"

Das Layout für `input type="search"` wurde aktualisiert. Sobald jemand beginnt, etwas in ein Suchfeld einzugeben, erscheint darin ein Symbol zum Löschen des Inhalts. Damit entspricht das Verhalten dem anderer Browser. (Weitere Einzelheiten finden Sie unter [Firefox-Bug 558594](https://bugzil.la/558594).)

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ----------------- | ---------------------- | ------------------------ |
| Nightly           | 81                     | Nein                     |
| Developer Edition | 81                     | Nein                     |
| Beta              | 81                     | Nein                     |
| Release           | 81                     | Nein                     |

- `layout.forms.input-type-search.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Passwortanzeige umschalten

HTML-Passworteingabeelemente ([`<input type="password">`](/de/docs/Web/HTML/Reference/Elements/input/password)) enthalten ein Augensymbol, mit dem sich der Passworttext ein- und ausblenden lässt ([Firefox-Bug 502258](https://bugzil.la/502258)).

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ----------------- | ---------------------- | ------------------------ |
| Nightly           | 96                     | Nein                     |
| Developer Edition | 96                     | Nein                     |
| Beta              | 96                     | Nein                     |
| Release           | 96                     | Nein                     |

- `layout.forms.reveal-password-button.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Zeitauswahl in `datetime-local`- und `time`-Eingabeelementen

Die HTML-Elemente [`<input type="datetime-local">`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local) und [`<input type="time">`](/de/docs/Web/HTML/Reference/Elements/input/time) unterstützen eine Zeitauswahl ([Firefox-Bug 1726108](https://bugzil.la/1726108)).

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ----------------- | ---------------------- | ------------------------ |
| Nightly           | 144                    | Nein                     |
| Developer Edition | 144                    | Nein                     |
| Beta              | 144                    | Nein                     |
| Release           | 144                    | Nein                     |

- `dom.forms.datetime.timepicker`
  - : Zum Aktivieren auf `true` setzen.

### Attribute `alpha` und `colorspace` in `color`-Eingabeelementen

Das HTML-Element [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color) unterstützt die Attribute [`alpha`](/de/docs/Web/HTML/Reference/Elements/input/color#alpha) und [`colorspace`](/de/docs/Web/HTML/Reference/Elements/input/color#colorspace) ([Firefox-Bug 1919718](https://bugzil.la/1919718)).

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ----------------- | ---------------------- | ------------------------ |
| Nightly           | 149                    | Ja                       |
| Developer Edition | -                      | -                        |
| Beta              | -                      | -                        |
| Release           | -                      | -                        |

- `dom.forms.html_color_picker.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Attribute `headingoffset` und `headingreset`

Das globale Attribut [`headingoffset`](/de/docs/Web/HTML/Reference/Global_attributes/headingoffset) erhöht die berechnete Ebene der [Überschriftenelemente](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) innerhalb des Elements, für das es gesetzt ist. Dadurch kann eine Komponente überall auf einer Seite dieselbe Auszeichnung für Überschriften verwenden. Das Attribut [`headingreset`](/de/docs/Web/HTML/Reference/Global_attributes/headingreset) verhindert, dass sich die Offsets übergeordneter Elemente auf die Überschriften innerhalb des Elements auswirken, für das es gesetzt ist ([Firefox-Bug 1974383](https://bugzil.la/1974383)).

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ----------------- | ---------------------- | ------------------------ |
| Nightly           | 153                    | Nein                     |
| Developer Edition | 153                    | Nein                     |
| Beta              | 153                    | Nein                     |
| Release           | 153                    | Nein                     |

- `dom.headingoffset.enabled`
  - : Zum Aktivieren auf `true` setzen.

### `<script type="speculationrules">`

Die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) bietet einen Mechanismus zur Verbesserung der Leistung bei künftigen Navigationen: Anhand von Faktoren wie dem Verhalten von Benutzern gegenüber Links lässt sich festlegen, welche Ressourcen vorab abgerufen oder gerendert werden sollen.

Die anfängliche Unterstützung umfasste nur [`prefetch`](/de/docs/Web/HTML/Reference/Elements/script/type/speculationrules#prefetch), wobei Ressourcen über eine [`urls`](/de/docs/Web/HTML/Reference/Elements/script/type/speculationrules#urls)-Liste und mit der Bereitschaftsstufe [`immediate`](/de/docs/Web/HTML/Reference/Elements/script/type/speculationrules#immediate) angegeben werden. Dazu gehört auch die Unterstützung des Werts `navigational-prefetch` für die Eigenschaft [`PerformanceResourceTiming.deliveryType`](/de/docs/Web/API/PerformanceResourceTiming/deliveryType) ([Firefox-Bug 2041381](https://bugzil.la/2041381)).

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ----------------- | ---------------------- | ------------------------ |
| Nightly           | 155                    | Ja                       |
| Developer Edition | 155                    | Nein                     |
| Beta              | 155                    | Nein                     |
| Release           | 155                    | Nein                     |

- `dom.speculation_rules.enabled`
  - : Zum Aktivieren auf `true` setzen.

#### Bereitschaftsstufe „Moderate“

Bei der Bereitschaftsstufe [`moderate`](/de/docs/Web/HTML/Reference/Elements/script/type/speculationrules#moderate) beginnt ein passender Prefetch, sobald der Mauszeiger für kurze Zeit über einem Link verweilt (standardmäßig 200 Millisekunden) ([Firefox-Bug 2061013](https://bugzil.la/2061013)).

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ----------------- | ---------------------- | ------------------------ |
| Nightly           | 158                    | Ja                       |
| Developer Edition | 158                    | Nein                     |
| Beta              | 158                    | Nein                     |
| Release           | 158                    | Nein                     |

- `dom.speculation_rules.enabled`
  - : Zum Aktivieren auf `true` setzen.

#### Speculation-Rules-Header

Der HTTP-Antwortheader {{httpheader("Speculation-Rules")}} listet die URLs externer Dateien mit Spekulationsregeln auf und bietet damit eine Alternative zu einem eingebetteten `<script type="speculationrules">`-Element. Der Header gilt nur für Top-Level-Dokumente. Jede Datei muss mit dem MIME-Typ `application/speculationrules+json` ausgeliefert werden ([Firefox-Bug 2020709](https://bugzil.la/2020709)).

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ----------------- | ---------------------- | ------------------------ |
| Nightly           | 160                    | Ja                       |
| Developer Edition | 160                    | Nein                     |
| Beta              | 160                    | Nein                     |
| Release           | 160                    | Nein                     |

- `dom.speculation_rules.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Dokumentübergreifende View Transitions

[Dokumentübergreifende View Transitions](/de/docs/Web/API/View_Transition_API/Using#basic_mpa_view_transition) können den Übergang zwischen Seitennavigationen desselben Ursprungs in einer Mehrseitenanwendung animieren.
Beide Seiten müssen den Übergang mit der CSS-At-Regel {{cssxref("@view-transition")}} aktivieren.
Um den Übergang mit JavaScript anzupassen, verwenden Sie das Ereignis [`pageswap`](/de/docs/Web/API/Window/pageswap_event) ([`PageSwapEvent`](/de/docs/Web/API/PageSwapEvent)). Es wird auf der alten Seite unmittelbar vor deren Ersetzung ausgelöst. Sie können auch das Ereignis [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event) ([`PageRevealEvent`](/de/docs/Web/API/PageRevealEvent)) verwenden, das auf der neuen Seite bei ihrer ersten Anzeige ausgelöst wird.
Die Schnittstelle [`CSSViewTransitionRule`](/de/docs/Web/API/CSSViewTransitionRule) repräsentiert eine `@view-transition`-Regel im CSS Object Model.
Beachten Sie, dass [Render-Blocking](#render-blocking) dafür sorgen kann, dass wichtige Teile der neuen Seite geladen sind, bevor der Übergang beginnt.
([Firefox-Bug 2084340](https://bugzil.la/2084340)).

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ----------------- | ---------------------- | ------------------------ |
| Nightly           | 161                    | Ja                       |
| Developer Edition | 160                    | Nein                     |
| Beta              | 160                    | Nein                     |
| Release           | 160                    | Nein                     |

- `dom.viewTransitions.cross-document.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Render-Blocking

Das Attribut `blocking="render"` wird für die Elemente {{HTMLElement("link",,"blocking")}}, {{HTMLElement("script",,"blocking")}} und {{HTMLElement("style",,"blocking")}} unterstützt.
Damit können Sie das Rendern der Seite blockieren, bis das gekennzeichnete Stylesheet geladen oder das Skript ausgeführt wurde. So wird die Seite nicht zunächst ohne Stile oder unvollständig angezeigt.
Sie können auch [`<link rel="expect">`](/de/docs/Web/HTML/Reference/Attributes/rel#expect) mit `blocking="render"` verwenden, um das Rendern zu blockieren, bis ein bestimmtes Element im Dokument geparst wurde.
Die Eigenschaft [`PerformanceResourceTiming.renderBlockingStatus`](/de/docs/Web/API/PerformanceResourceTiming/renderBlockingStatus) gibt an, ob eine Ressource das Rendern blockiert hat.
([Firefox-Bug 1751383](https://bugzil.la/1751383), [Firefox-Bug 2053279](https://bugzil.la/2053279)).

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ----------------- | ---------------------- | ------------------------ |
| Nightly           | 161                    | Ja                       |
| Developer Edition | 160                    | Nein                     |
| Beta              | 160                    | Nein                     |
| Release           | 160                    | Nein                     |

- `dom.element.blocking.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Lazy Loading für Video und Audio

Das Attribut `loading` der Elemente {{HTMLElement("video", "", "#loading")}} und {{HTMLElement("audio", "", "#loading")}} sowie die entsprechende Eigenschaft [`HTMLMediaElement.loading`](/de/docs/Web/API/HTMLMediaElement/loading) werden jetzt unterstützt. Bei `loading="lazy"` verschiebt der Browser das Laden des Mediums und des Vorschaubilds des Videos sowie den Beginn der `autoplay`-Wiedergabe, bis sich das Element in der Nähe des Viewports befindet ([Firefox-Bug 2005072](https://bugzil.la/2005072)).

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ----------------- | ---------------------- | ------------------------ |
| Nightly           | 160                    | Nein                     |
| Developer Edition | 160                    | Nein                     |
| Beta              | 160                    | Nein                     |
| Release           | 160                    | Nein                     |

- `media.lazy_loading.enabled`
  - : Zum Aktivieren auf `true` setzen.

## CSS

### `circle()` und `ellipse()` erlauben die Schlüsselwörter `farthest-corner` und `closest-corner`

Die Schlüsselwörter `farthest-corner` und `closest-corner` können jetzt verwendet werden, um die Radiuswerte der CSS-Grundformen [`ellipse()`](/de/docs/Web/CSS/Reference/Values/basic-shape/ellipse) und [`circle()`](/de/docs/Web/CSS/Reference/Values/basic-shape/circle) anzugeben.
(Weitere Einzelheiten finden Sie unter [Firefox-Bug 2037673](https://bugzil.la/2037673).)

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ----------------- | ---------------------- | ------------------------ |
| Nightly           | 153                    | Ja                       |
| Developer Edition | 153                    | Nein                     |
| Beta              | 153                    | Nein                     |
| Release           | 153                    | Nein                     |

- `layout.css.ellipse-corners.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Hexadezimale Kästchen zur Anzeige unerwarteter Steuerzeichen

Diese Funktion stellt Steuerzeichen (Unicode-Kategorie Cc) als hexadezimale Kästchen dar, wenn sie an einer unerwarteten Stelle auftreten. Ausgenommen sind _Tabulator_ (`U+0009`), _Zeilenvorschub_ (`U+000A`), _Seitenvorschub_ (`U+000C`) und _Wagenrücklauf_ (`U+000D`). (Weitere Einzelheiten finden Sie unter [Firefox-Bug 1099557](https://bugzil.la/1099557).)

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ----------------- | ---------------------- | ------------------------ |
| Nightly           | 43                     | Ja                       |
| Developer Edition | 43                     | Nein                     |
| Beta              | 43                     | Nein                     |
| Release           | 43                     | Nein                     |

- `layout.css.control-characters.visible`
  - : Zum Aktivieren auf `true` setzen.

### Eigenschaft initial-letter

Die CSS-Eigenschaft {{cssxref("initial-letter")}} ist Teil der Spezifikation [CSS Inline Layout](https://drafts.csswg.org/css-inline/) und ermöglicht es, die Darstellung tiefergestellter, hochgestellter und versenkter Initialbuchstaben festzulegen. (Weitere Einzelheiten finden Sie unter [Firefox-Bug 1223880](https://bugzil.la/1223880).)

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ----------------- | ---------------------- | ------------------------ |
| Nightly           | 50                     | Nein                     |
| Developer Edition | 50                     | Nein                     |
| Beta              | 50                     | Nein                     |
| Release           | 50                     | Nein                     |

- `layout.css.initial-letter.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Funktion fit-content()

Die Funktion [`fit-content()`](/de/docs/Web/CSS/Reference/Values/fit-content_function) kann für {{cssxref("width")}} und andere Größeneigenschaften verwendet werden. Für die Größe von Tracks im CSS Grid Layout wird diese Funktion bereits umfassend unterstützt. (Weitere Einzelheiten finden Sie unter [Firefox-Bug 1312588](https://bugzil.la/1312588).)

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ----------------- | ---------------------- | ------------------------ |
| Nightly           | 91                     | Nein                     |
| Developer Edition | 91                     | Nein                     |
| Beta              | 91                     | Nein                     |
| Release           | 91                     | Nein                     |

- `layout.css.fit-content-function.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Medienmerkmal prefers-reduced-transparency

Mit dem CSS-Medienmerkmal {{cssxref("@media/prefers-reduced-transparency")}} können Sie erkennen, ob Benutzer auf ihrem Gerät eine Einstellung aktiviert haben, die transparente oder durchscheinende Ebeneneffekte minimiert.
Weitere Einzelheiten finden Sie unter [Firefox-Bug 1736914](https://bugzil.la/1736914).

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ----------------- | ---------------------- | ------------------------ |
| Nightly           | 113                    | Nein                     |
| Developer Edition | 113                    | Nein                     |
| Beta              | 113                    | Nein                     |
| Release           | 113                    | Nein                     |

- `layout.css.prefers-reduced-transparency.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Medienmerkmal inverted-colors

Mit dem CSS-Medienmerkmal {{cssxref("@media/inverted-colors")}} können Sie erkennen, ob ein User Agent oder das zugrunde liegende Betriebssystem Farben invertiert.
Weitere Einzelheiten finden Sie unter [Firefox-Bug 1794628](https://bugzil.la/1794628).

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ----------------- | ---------------------- | ------------------------ |
| Nightly           | 114                    | Nein                     |
| Developer Edition | 114                    | Nein                     |
| Beta              | 114                    | Nein                     |
| Release           | 114                    | Nein                     |

- `layout.css.inverted-colors.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Transform-Eigenschaften mit Herstellerpräfix

Die mit `-moz-` präfigierten Eigenschaften für [CSS-Transformationen](/de/docs/Web/CSS/Guides/Transforms) können deaktiviert werden, indem die Einstellung `layout.css.prefixes.transforms` auf `false` gesetzt wird. Sie sollen deaktiviert werden, sobald die standardisierten CSS-Zoom-Eigenschaften umfassend unterstützt werden ([Firefox-Bug 1886134](https://bugzil.la/1886134), [Firefox-Bug 1855763](https://bugzil.la/1855763)).

Diese Einstellung deaktiviert die folgenden präfigierten Eigenschaften:

- `-moz-backface-visibility`
- `-moz-perspective`
- `-moz-perspective-origin`
- `-moz-transform`
- `-moz-transform-origin`
- `-moz-transform-style`

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ----------------- | ---------------------- | ------------------------ |
| Nightly           | 120                    | Ja                       |
| Developer Edition | 120                    | Ja                       |
| Beta              | 120                    | Ja                       |
| Release           | 120                    | Ja                       |

- `layout.css.prefixes.transforms`
  - : Zum Aktivieren auf `true` setzen.

### Symmetrisches `letter-spacing`

Die CSS-Eigenschaft {{cssxref("letter-spacing")}} verteilt den angegebenen Zeichenabstand jetzt gleichmäßig auf beide Seiten jedes Zeichens. Bisher wurde der Abstand überwiegend auf einer Seite hinzugefügt. Dieser Ansatz kann den Textabstand verbessern, insbesondere bei Text mit gemischten Schreibrichtungen.
([Firefox-Bug 1891446](https://bugzil.la/1891446)).

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ----------------- | ---------------------- | ------------------------ |
| Nightly           | 128                    | Ja                       |
| Developer Edition | 128                    | Ja                       |
| Beta              | 127                    | Nein                     |
| Release           | 127                    | Nein                     |

- `layout.css.letter-spacing.model`
  - : Zum Aktivieren auf `true` setzen.

### Pseudoelemente nach elementbasierten Pseudoelementen erlauben

Es wird daran gearbeitet, [Pseudoelemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) wie {{cssxref("::first-letter")}} und {{cssxref("::before")}} an [elementbasierte Pseudoelemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements#element-backed_pseudo-elements) wie {{cssxref("::details-content")}} und {{cssxref("::file-selector-button")}} anhängen zu können.

So können Sie beispielsweise den ersten Buchstaben eines {{htmlElement("details")}}-Elements mit dem CSS-Selektor `::details-content::first-letter` gestalten oder mit dem CSS-Selektor `::file-selector-button::before` Inhalt vor einem {{HTMLElement("input") }}-Element mit [`type="file"`](/de/docs/Web/HTML/Reference/Elements/input/file) hinzufügen.

Derzeit kann nur die Unterstützung für `::details-content::first-letter` mit `@supports(::details-content::first-letter)` geprüft werden.
Das Pseudoelement `::file-selector-button` ist noch nicht als elementbasiertes Pseudoelement gekennzeichnet. Daher lässt sich dies noch nicht prüfen.
([Firefox-Bug 1953557](https://bugzil.la/1953557), [Firefox-Bug 1941406](https://bugzil.la/1941406)).

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ----------------- | ---------------------- | ------------------------ |
| Nightly           | 138                    | Nein                     |
| Developer Edition | 138                    | Nein                     |
| Beta              | 138                    | Nein                     |
| Release           | 138                    | Nein                     |

### Pseudoklassen `:heading` und `:heading()`

Mit der Pseudoklasse {{cssxref(":heading")}} können Sie alle [Überschriftenelemente](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) (`<h1>`–`<h6>`) gleichzeitig gestalten, statt sie einzeln anzusprechen. Mit der funktionalen Pseudoklasse {{cssxref(":heading()")}} können Sie Überschriftenelemente gestalten, deren Überschriftenebenen einer kommagetrennten Liste ganzer Zahlen entsprechen ([Firefox-Bug 1974386](https://bugzil.la/1974386) und [Firefox-Bug 1984310](https://bugzil.la/1984310)).

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ----------------- | ---------------------- | ------------------------ |
| Nightly           | 142                    | Nein                     |
| Developer Edition | 142                    | Nein                     |
| Beta              | 142                    | Nein                     |
| Release           | 142                    | Nein                     |

- `layout.css.heading-selector.enabled`
  - : Zum Aktivieren auf `true` setzen.

### At-Regel `@custom-media`

Die CSS-At-Regel {{cssxref("@custom-media")}} definiert Aliase für lange oder komplexe Medienabfragen. Statt dieselbe fest codierte `<media-query-list>` in mehreren `@media`-At-Regeln zu wiederholen, können Sie sie einmal in einer `@custom-media`-At-Regel definieren und bei Bedarf im gesamten Stylesheet darauf verweisen ([Firefox-Bug 1744292](https://bugzil.la/1744292)).

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ----------------- | ---------------------- | ------------------------ |
| Nightly           | 148                    | Nein                     |
| Developer Edition | 148                    | Nein                     |
| Beta              | 148                    | Nein                     |
| Release           | 148                    | Nein                     |

- `layout.css.custom-media.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Wert `base-select` für die CSS-Eigenschaft `appearance`

Mit dem Wert [`base-select`](/de/docs/Web/CSS/Reference/Properties/appearance#base-select) für die CSS-Eigenschaft {{cssxref("appearance")}} können Sie das Element {{htmlelement("select")}} und das Pseudoelement {{cssxref("::picker()", "::picker(select)")}} vollständig gestalten. Derzeit wird nur die Gestaltung des `<select>`-Elements unterstützt. Die Gestaltung des Pseudoelements `::picker(select)` wird in künftigen Versionen ergänzt. Diese Funktion ist Teil der Arbeit an [anpassbaren Select-Elementen](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select). Für ihre Verwendung müssen zwei Einstellungen aktiviert werden ([Firefox-Bug 1974787](https://bugzil.la/1974787)).

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ----------------- | ---------------------- | ------------------------ |
| Nightly           | 149                    | Nein                     |
| Developer Edition | 149                    | Nein                     |
| Beta              | 149                    | Nein                     |
| Release           | 149                    | Nein                     |

- `dom.select.customizable_select.enabled`
  - : Zum Aktivieren auf `true` setzen.
- `layout.css.appearance-base.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Absolut positionierte Elemente in mehrspaltigen Containern und beim Drucken

Absolut positionierte Elemente innerhalb [mehrspaltiger Container](/de/docs/Web/CSS/Guides/Multicol_layout) und beim Drucken werden jetzt korrekt positioniert und fragmentiert.
Dies verbessert die Interoperabilität mit anderen Browsern und verhindert Layoutprobleme wie überlappenden Text oder den Verlust von Inhalten.
([Firefox-Bug 2018797](https://bugzil.la/2018797)).

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ----------------- | ---------------------- | ------------------------ |
| Nightly           | 150                    | Ja                       |
| Developer Edition | 150                    | Nein                     |
| Beta              | 150                    | Nein                     |
| Release           | 150                    | Nein                     |

- `layout.abspos.fragmentainer-aware-positioning.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Bereichssyntax für `@container style()`-Abfragen

Abfragen mit [`style()`](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries) in der CSS-At-Regel [`@container`](/de/docs/Web/CSS/Reference/At-rules/@container) unterstützen jetzt die _Bereichssyntax_. Damit können Sie prüfen, ob ein Container eine gültige benutzerdefinierte CSS-Eigenschaft besitzt, ihren Wert mit Vergleichsoperatoren wie `>`, `<`, `>=` und `<=` vergleichen und entsprechend Stile auf seine Kindelemente anwenden ([Firefox-Bug 2024601](https://bugzil.la/2024601)).

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ----------------- | ---------------------- | ------------------------ |
| Nightly           | 151                    | Nein                     |
| Developer Edition | 151                    | Nein                     |
| Beta              | 151                    | Nein                     |
| Release           | 151                    | Nein                     |

- `layout.css.attr.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Attribute externer Ressourcen aktualisieren

Die CSS-Eigenschaft {{cssxref("link-parameters")}} und die CSS-Funktion {{cssxref("param")}} werden jetzt unterstützt. Damit lassen sich Attribute externer Ressourcen wie SVGs aktualisieren, deren Attribute mit der CSS-Funktion {{cssxref("env")}} festgelegt sind. Dadurch kann eine einzige externe Ressource verwendet werden, statt mehrere Varianten zu erstellen, die sich nur in Farben oder anderen Werten unterscheiden ([Firefox-Bug 2046153](https://bugzil.la/2046153)).

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ----------------- | ---------------------- | ------------------------ |
| Nightly           | 154                    | Ja                       |
| Developer Edition | 153                    | Nein                     |
| Beta              | 153                    | Nein                     |
| Release           | 153                    | Nein                     |

- `layout.css.link-parameters.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Inhalte mit `line-clamp` kürzen

Die CSS-Eigenschaft {{cssxref("line-clamp")}} funktioniert jetzt ohne das Herstellerpräfix `-webkit-`. Die Werte `no-ellipsis` und `<string>` werden derzeit jedoch noch nicht unterstützt ([Firefox-Bug 2042986](https://bugzil.la/2042986)).

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ----------------- | ---------------------- | ------------------------ |
| Nightly           | 154                    | Nein                     |
| Developer Edition | 154                    | Nein                     |
| Beta              | 154                    | Nein                     |
| Release           | 154                    | Nein                     |

- `layout.css.line-clamp.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Prozentwerte für `text-decoration-inset`

Die CSS-Eigenschaft {{cssxref("text-decoration-inset")}} unterstützt jetzt Prozentwerte. Der Prozentwert gibt die Größe des Einzugs als Prozentsatz der Inline-Größe der dekorierten Box oder jedes einzelnen Boxfragments an, abhängig vom Wert von {{cssxref("box-decoration-break")}} ([Firefox-Bug 2044602](https://bugzil.la/2044602)).

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ----------------- | ---------------------- | ------------------------ |
| Nightly           | 154                    | Nein                     |
| Developer Edition | 154                    | Nein                     |
| Beta              | 154                    | Nein                     |
| Release           | 154                    | Nein                     |

- `layout.css.text-decoration-inset-percentage.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Unterstützungsabfragen mit `named-feature()`

Mit der Funktion `named-feature()` in der At-Regel {{cssxref("@supports")}} können Sie prüfen, ob der Browser eine Funktion unterstützt, für die es keine andere erkennbare Syntax gibt, beispielsweise mit `@supports named-feature(anchor-position-follows-transforms)`.
([Firefox-Bug 2042977](https://bugzil.la/2042977) und [Firefox-Bug 2055354](https://bugzil.la/2055354)).

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ----------------- | ---------------------- | ------------------------ |
| Nightly           | 156                    | Nein                     |
| Developer Edition | 156                    | Nein                     |
| Beta              | 156                    | Nein                     |
| Release           | 156                    | Nein                     |

- `layout.css.anchor-positioning.follows-transforms.enabled`
  - : Zum Aktivieren auf `true` setzen.

### `corner-shape`-Eigenschaften

Die Kurzschreibweise {{cssxref("corner-shape")}} und ihre einzelnen Langschreibweisen werden jetzt in Nightly unterstützt. Mit diesen Eigenschaften können Sie Eckenformen mithilfe eines Schlüsselwortwerts von {{cssxref("corner-shape-value")}} oder der Funktion {{cssxref("superellipse")}} anpassen.
([Firefox-Bug 2070927](https://bugzil.la/2070927)).

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ----------------- | ---------------------- | ------------------------ |
| Nightly           | 158                    | Ja                       |
| Developer Edition | 157                    | Nein                     |
| Beta              | 157                    | Nein                     |
| Release           | 157                    | Nein                     |

- `layout.css.corner-shape.enabled`
  - : Zum Aktivieren auf `true` setzen.

## SVG

**In diesem Release-Zyklus gibt es keine experimentellen Funktionen.**

## MathML

### `href` auf MathML-Elementen außer `<a>` deaktivieren

Wenn diese Funktion aktiviert ist, erstellt das globale Attribut [`href`](/de/docs/Web/MathML/Reference/Global_attributes/href) auf anderen MathML-Elementen als `<a>` keinen Hyperlink mehr. Damit entspricht Firefox der [MathML-Core-Spezifikation](https://w3c.github.io/mathml-core/#the-a-element), die Hyperlinks nur für das `<a>`-Element definiert ([Firefox-Bug 2026848](https://bugzil.la/2026848)).

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ----------------- | ---------------------- | ------------------------ |
| Nightly           | 151                    | Ja                       |
| Developer Edition | 151                    | Nein                     |
| Beta              | 151                    | Nein                     |
| Release           | 151                    | Nein                     |

- `mathml.href_link_on_non_anchor_element.disabled`
  - : Zum Aktivieren auf `true` setzen.

### Schnittstelle `MathMLAnchorElement` implementieren

Wenn diese Funktion aktiviert ist, wird das MathML-Element [`<a>`](/de/docs/Web/MathML/Reference/Element/a) im DOM korrekt durch die Schnittstelle [`MathMLAnchorElement`](/de/docs/Web/API/MathMLAnchorElement) statt durch die allgemeine Schnittstelle [`MathMLElement`](/de/docs/Web/API/MathMLElement) repräsentiert ([Firefox-Bug 2059312](https://bugzil.la/2059312)).

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ----------------- | ---------------------- | ------------------------ |
| Nightly           | 155                    | Ja                       |
| Developer Edition | 155                    | Nein                     |
| Beta              | 155                    | Nein                     |
| Release           | 155                    | Nein                     |

- `mathml.a.element.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Neue Eigenschaften von `MathMLAnchorElement`

Die Schnittstelle [`MathMLAnchorElement`](/de/docs/Web/API/MathMLAnchorElement) unterstützt jetzt die Eigenschaften [`download`](/de/docs/Web/API/MathMLAnchorElement/download), [`ping`](/de/docs/Web/API/MathMLAnchorElement/ping), [`rel`](/de/docs/Web/API/MathMLAnchorElement/rel), [`relList`](/de/docs/Web/API/MathMLAnchorElement/relList) und [`referrerPolicy`](/de/docs/Web/API/MathMLAnchorElement/referrerPolicy) ([Firefox-Bug 2064612](https://bugzil.la/2064612)).

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ----------------- | ---------------------- | ------------------------ |
| Nightly           | 159                    | Ja                       |
| Developer Edition | 159                    | Nein                     |
| Beta              | 159                    | Nein                     |
| Release           | 159                    | Nein                     |

- `mathml.a.element.enabled`
  - : Zum Aktivieren auf `true` setzen.

## JavaScript

### TC39-Vorschlag zu Intl.Locale-Informationen

Der [TC39-Vorschlag zu Intl.Locale-Informationen](https://github.com/tc39/proposal-intl-locale-info) wird jetzt unterstützt.
Dazu gehören alle Instanzmethoden von `Intl.Locale`, die mit „get“ beginnen: {{jsxref("Intl/Locale/getCalendars", "Intl.Locale.prototype.getCalendars()")}}, {{jsxref("Intl/Locale/getCollations", "Intl.Locale.prototype.getCollations()")}}, {{jsxref("Intl/Locale/getHourCycles", "Intl.Locale.prototype.getHourCycles()")}}, {{jsxref("Intl/Locale/getNumberingSystems", "Intl.Locale.prototype.getNumberingSystems()")}}, {{jsxref("Intl/Locale/getTextInfo", "Intl.Locale.prototype.getTextInfo()")}}, {{jsxref("Intl/Locale/getTimeZones", "Intl.Locale.prototype.getTimeZones()")}} und {{jsxref("Intl/Locale/getWeekInfo", "Intl.Locale.prototype.getWeekInfo()")}}.
([Firefox-Bug 1693576](https://bugzil.la/1693576)).

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ----------------- | ---------------------- | ------------------------ |
| Nightly           | 152                    | Nein                     |
| Developer Edition | —                      | —                        |
| Beta              | —                      | —                        |
| Release           | —                      | —                        |

- `javascript.options.experimental.intl_locale_info`
  - : Zur Aktivierung in Nightly auf `true` setzen.

### Mehrere Import Maps

[Mehrere Import Maps](/de/docs/Web/HTML/Reference/Elements/script/type/importmap#merging_multiple_import_maps) werden unterstützt.
Sie bieten Entwicklern mehr Flexibilität beim Strukturieren und Laden von JavaScript-Modulen: Die Zuordnungen aller Module müssen nicht mehr im Voraus bekannt sein und in einer einzigen Import Map deklariert werden, bevor Module geladen werden.
([Firefox-Bug 1916277](https://bugzil.la/1916277)).

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ----------------- | ---------------------- | ------------------------ |
| Nightly           | 150                    | Nein                     |
| Developer Edition | 150                    | Nein                     |
| Beta              | 150                    | Nein                     |
| Release           | 150                    | Nein                     |

- `dom.multiple_import_maps.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Puffergrenzen-Assertions in regulären Ausdrücken

Die [Puffergrenzen-Assertions `\A`, `\z` und `\Z`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Buffer_boundary_assertion) werden jetzt unterstützt.
Mit `\A` und `\z` können Sie den Anfang beziehungsweise das Ende der gesamten Eingabe abgleichen. `\Z` gleicht das Ende der Eingabe ab, wobei ein Zeilenabschlusszeichen ignoriert wird.
Anders als `^` und `$` bleiben diese Assertions vom Flag [`m`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline) unbeeinflusst. Sie können nur im [Unicode-fähigen Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) verwendet werden, wenn das Flag `u` oder `v` gesetzt ist.
([Firefox-Bug 2047706](https://bugzil.la/2047706)).

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ----------------- | ---------------------- | ------------------------ |
| Nightly           | 155                    | Nein                     |
| Developer Edition | —                      | —                        |
| Beta              | —                      | —                        |
| Release           | —                      | —                        |

- `javascript.options.experimental.regexp_buffer_boundaries`
  - : Zur Aktivierung in Nightly auf `true` setzen.

### TC39-Vorschlag für export `*` default

Der [TC39-Vorschlag für export `*` default](https://github.com/tc39/proposal-export-star-default) ermöglicht es, mit [`export * from`](/de/docs/Web/JavaScript/Reference/Statements/export#re-exporting_aggregating) neben den benannten Exporten eines Moduls auch dessen Standardexport erneut zu exportieren. Ohne diese Änderung wird der Standardexport eines Moduls bei `export * from` ausgelassen.
([Firefox-Bug 2065611](https://bugzil.la/2065611)).

Beachten Sie, dass sich dieser Vorschlag in einem sehr frühen Stadium befindet und noch ändern kann.

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ----------------- | ---------------------- | ------------------------ |
| Nightly           | 157                    | Nein                     |
| Developer Edition | 157                    | Nein                     |
| Beta              | 157                    | Nein                     |
| Release           | —                      | —                        |

- `javascript.options.experimental.export_star_default`
  - : Zum Aktivieren auf `true` setzen.

### TC39-Vorschlag zur verzögerten Modulauswertung

Der [TC39-Vorschlag zur verzögerten Modulauswertung](https://github.com/tc39/proposal-defer-import-eval) ergänzt die Deklaration [`import defer`](/de/docs/Web/JavaScript/Reference/Statements/import/defer) und die Syntax [`import.defer()`](/de/docs/Web/JavaScript/Reference/Operators/import/defer). Ein auf diese Weise importiertes Modul wird zusammen mit seinen Abhängigkeiten im Voraus geladen. Sein Code wird jedoch erst ausgeführt, wenn erstmals auf einen seiner Exporte zugegriffen wird. Dadurch verlangsamen nicht sofort benötigte Module den Start nicht. Module, die `await` auf oberster Ebene verwenden, werden weiterhin sofort ausgeführt ([Firefox-Bug 1952263](https://bugzil.la/1952263)).

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ----------------- | ---------------------- | ------------------------ |
| Nightly           | 158                    | Nein                     |
| Developer Edition | —                      | —                        |
| Beta              | —                      | —                        |
| Release           | —                      | —                        |

- `javascript.options.experimental.defer_import_eval`
  - : Zur Aktivierung in Nightly auf `true` setzen.

## APIs

### Absturzberichte

Absturzberichte können jetzt über die [Reporting API](/de/docs/Web/API/Reporting_API) an den Endpunkt `default` gesendet werden.
Beachten Sie, dass Firefox die Angabe von [`CrashReportContext`](/de/docs/Web/API/CrashReportContext) im Berichtstext nicht unterstützt.
([Firefox-Bug 2036160](https://bugzil.la/2036160)).

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ----------------- | ---------------------- | ------------------------ |
| Nightly           | 152                    | Ja                       |
| Developer Edition | 152                    | Nein                     |
| Beta              | 152                    | Nein                     |
| Release           | 152                    | Nein                     |

- `dom.reporting.crash.enabled`
  - : Zum Aktivieren auf `true` setzen (in Nightly standardmäßig aktiviert).

### CSS Typed Object Model Level 1

Die [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) ist in Nightly implementiert.
Sie vereinfacht die Bearbeitung von CSS-Eigenschaften, indem sie CSS-Werte als typisierte JavaScript-Objekte statt als Zeichenfolgen bereitstellt.
([Firefox-Bug 1278697](https://bugzil.la/1278697)).

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ----------------- | ---------------------- | ------------------------ |
| Nightly           | 154                    | Ja                       |
| Developer Edition | 149                    | Nein                     |
| Beta              | 149                    | Nein                     |
| Release           | 149                    | Nein                     |

- `layout.css.typed-om.enabled`
  - : Zum Aktivieren auf `true` setzen.

#### Numerische CSS-Factory-Funktionen in Workern und Worklets verfügbar

Die [numerischen Factory-Funktionen](/de/docs/Web/API/CSS/factory_functions_static) des Namensraums [`CSS`](/de/docs/Web/API/CSS), etwa `CSS.px()`, sind jetzt auch in Workern und Paint Worklets verfügbar, nicht nur auf `Window`. Sie sind Teil der [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API). Außerhalb von Nightly muss daher zusätzlich die Einstellung `layout.css.typed-om.enabled` auf `true` gesetzt sein ([Firefox-Bug 2079188](https://bugzil.la/2079188)).

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ----------------- | ---------------------- | ------------------------ |
| Nightly           | 159                    | Nein                     |
| Developer Edition | 159                    | Nein                     |
| Beta              | 159                    | Nein                     |
| Release           | 159                    | Nein                     |

- `layout.css.namespace.exposed-in-workers-and-worklets`
  - : Zum Aktivieren auf `true` setzen.
- `layout.css.typed-om.enabled`
  - : Zum Aktivieren auf `true` setzen (in Nightly standardmäßig aktiviert).

### Streaming von Anfrageinhalten

Sie können jetzt einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) als Anfrageinhalt festlegen, beispielsweise über den Konstruktor [`Request()`](/de/docs/Web/API/Request/Request) oder die Methode [`Window.fetch()`](/de/docs/Web/API/Window/fetch). So können Sie Uploads schrittweise streamen, statt warten zu müssen, bis der gesamte Inhalt verfügbar ist.
([Firefox-Bug 1594633](https://bugzil.la/1594633)).

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ----------------- | ---------------------- | ------------------------ |
| Nightly           | 158                    | Ja                       |
| Developer Edition | 158                    | Nein                     |
| Beta              | 158                    | Nein                     |
| Release           | 158                    | Nein                     |

- `dom.fetch.streaming_upload`
  - : Zum Aktivieren auf `true` setzen.

### Grafik: Canvas, WebGL und WebGPU

#### Farbraum für Canvas 2D

Die Option [`colorSpace`](/de/docs/Web/API/HTMLCanvasElement/getContext#colorspace) von [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) und [`OffscreenCanvas.getContext()`](/de/docs/Web/API/OffscreenCanvas/getContext) wird für `2d`-Kontexte unterstützt. [`CanvasRenderingContext2D.getContextAttributes()`](/de/docs/Web/API/CanvasRenderingContext2D/getContextAttributes) gibt den ausgewählten Farbraum zurück. Auch Bilddaten haben einen Farbraum, den die Eigenschaft [`ImageData.colorSpace`](/de/docs/Web/API/ImageData/colorSpace) zurückgibt. Die Einstellung `colorSpace` des Konstruktors [`ImageData()`](/de/docs/Web/API/ImageData/ImageData) sowie der Methoden [`createImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/createImageData) und [`getImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/getImageData) legt ihn fest. Unterstützte Werte sind `"srgb"` und `"display-p3"`. Pixeldaten werden noch nicht zwischen Farbräumen konvertiert ([Firefox-Bug 1841326](https://bugzil.la/1841326)).

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ----------------- | ---------------------- | ------------------------ |
| Nightly           | 160                    | Nein                     |
| Developer Edition | 160                    | Nein                     |
| Beta              | 160                    | Nein                     |
| Release           | 160                    | Nein                     |

- `gfx.canvas.colorspace.enabled`
  - : Zum Aktivieren auf `true` setzen.

#### WebGL: Erweiterungen im Entwurfsstadium

Wenn diese Einstellung aktiviert ist, können WebGL-Erweiterungen verwendet werden, die sich derzeit im Entwurfsstadium befinden und getestet werden. Zurzeit testet Firefox keine WebGL-Erweiterungen.

#### WebGPU API

Die [WebGPU API](/de/docs/Web/API/WebGPU_API) bietet Low-Level-Unterstützung für Berechnungen und das Rendern von Grafiken mit der [Grafikverarbeitungseinheit](https://en.wikipedia.org/wiki/Graphics_Processing_Unit) (GPU) des Geräts oder Computers.
Ab Version 142 ist sie unter Windows in allen Kontexten außer Service Workern aktiviert.
Ab Version 147 ist sie unter macOS auf Apple Silicon in allen Browsing-Kontexten außer Service Workern aktiviert.
Auf anderen Plattformen, etwa Linux und macOS auf Intel-Prozessoren, ist sie in Nightly aktiviert.
Den Fortschritt bei dieser API können Sie unter [Firefox-Bug 1602129](https://bugzil.la/1602129) verfolgen.

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert?                                                      |
| ----------------- | ---------------------- | ----------------------------------------------------------------------------- |
| Nightly           | 141                    | Ja                                                                            |
| Developer Edition | 141                    | Nein (ja unter Windows und macOS auf Apple Silicon, außer in Service Workern) |
| Beta              | 141                    | Nein (ja unter Windows und macOS auf Apple Silicon, außer in Service Workern) |
| Release           | 141                    | Nein (ja unter Windows und macOS auf Apple Silicon, außer in Service Workern) |

- `dom.webgpu.enabled`
  - : Zum Aktivieren auf `true` setzen (in Nightly und unter Windows in allen Releases aktiviert).
- `dom.webgpu.service-workers.enabled`
  - : Zum Aktivieren auf `true` setzen (in Nightly aktiviert).

### WebRTC und Medien

Zu den folgenden experimentellen Funktionen gehören Funktionen von Medien-APIs wie der [WebRTC API](/de/docs/Web/API/WebRTC_API), der [Web Audio API](/de/docs/Web/API/Web_Audio_API), der [Media Source Extensions API](/de/docs/Web/API/Media_Source_Extensions_API), der [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API) und der [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API).

#### Audio Session API

Die [Audio Session API](/de/docs/Web/API/Audio_Session_API) bietet Webanwendungen einen Mechanismus, mit dem sie steuern können, wie ihre Audioausgabe mit anderen Audioinhalten interagiert, die auf einem Gerät abgespielt werden ([Firefox-Bug 2055710](https://bugzil.la/2055710)).

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ----------------- | ---------------------- | ------------------------ |
| Nightly           | 155                    | Ja                       |
| Developer Edition | 153                    | Nein                     |
| Beta              | 153                    | Nein                     |
| Release           | 153                    | Nein                     |

- `dom.audio_session.enabled`
  - : Zum Aktivieren auf `true` setzen.

#### HTMLMediaElement-Eigenschaften: audioTracks und videoTracks

Durch Aktivieren dieser Funktion werden die Eigenschaften [`HTMLMediaElement.audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks) und [`HTMLMediaElement.videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks) allen HTML-Medienelementen hinzugefügt. Da Firefox derzeit jedoch nicht mehrere Audio- und Videospuren unterstützt, funktionieren die häufigsten Anwendungsfälle für diese Eigenschaften nicht. Deshalb sind beide standardmäßig deaktiviert. Weitere Einzelheiten finden Sie unter [Firefox-Bug 1057233](https://bugzil.la/1057233).

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ----------------- | ---------------------- | ------------------------ |
| Nightly           | 33                     | Nein                     |
| Developer Edition | 33                     | Nein                     |
| Beta              | 33                     | Nein                     |
| Release           | 33                     | Nein                     |

- `media.track.enabled`
  - : Zum Aktivieren auf `true` setzen.

#### Asynchrones Hinzufügen und Entfernen mit SourceBuffer

Damit werden der Schnittstelle [`SourceBuffer`](/de/docs/Web/API/SourceBuffer) die Promise-basierten Methoden [`appendBufferAsync()`](/de/docs/Web/API/SourceBuffer/appendBufferAsync) und [`removeAsync()`](/de/docs/Web/API/SourceBuffer/removeAsync) zum Hinzufügen und Entfernen von Medienquellen-Puffern hinzugefügt. Weitere Informationen finden Sie unter [Firefox-Bug 1280613](https://bugzil.la/1280613) und [Firefox-Bug 778617](https://bugzil.la/778617).

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ----------------- | ---------------------- | ------------------------ |
| Nightly           | 62                     | Nein                     |
| Developer Edition | 62                     | Nein                     |
| Beta              | 62                     | Nein                     |
| Release           | 62                     | Nein                     |

- `media.mediasource.experimental.enabled`
  - : Zum Aktivieren auf `true` setzen.

#### Strenge der AVIF-Konformitätsprüfung

Mit der Einstellung `image.avif.compliance_strictness` lässt sich steuern, wie _streng_ [AVIF](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image)-Bilder verarbeitet werden.
Dadurch können Firefox-Benutzer Bilder anzeigen, die in manchen anderen Browsern dargestellt werden, auch wenn sie der Spezifikation nicht vollständig entsprechen.

| Release-Kanal     | Hinzugefügt in Version | Standardwert |
| ----------------- | ---------------------- | ------------ |
| Nightly           | 92                     | 1            |
| Developer Edition | 92                     | 1            |
| Beta              | 92                     | 1            |
| Release           | 92                     | 1            |

- `image.avif.compliance_strictness`
  - : Numerischer Wert für den _Strengegrad_. Zulässige Werte sind:
    - `0`: Nachsichtig. Bilder mit Verstößen gegen Empfehlungen („should“) und Anforderungen („shall“) der Spezifikation werden akzeptiert, sofern sie sicher oder eindeutig interpretiert werden können.
    - `1` **(Standardwert)**: Gemischt. Verstöße gegen Anforderungen („shall“) werden zurückgewiesen, Verstöße gegen Empfehlungen („should“) jedoch zugelassen.
    - `2`: Streng. Sämtliche Verstöße gegen festgelegte Anforderungen oder Empfehlungen werden zurückgewiesen.

### WebVR API (deaktiviert)

Die veraltete [WebVR API](/de/docs/Web/API/WebVR_API) soll entfernt werden.
Sie ist in allen Versionen standardmäßig deaktiviert ([Firefox-Bug 1750902](https://bugzil.la/1750902)).

| Release-Kanal     | Entfernt in Version | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 98                  | Nein                     |
| Developer Edition | 98                  | Nein                     |
| Beta              | 98                  | Nein                     |
| Release           | 98                  | Nein                     |

- `dom.vr.enabled`
  - : Zum Aktivieren auf `true` setzen.

### GeometryUtils-Methoden: convertPointFromNode(), convertRectFromNode() und convertQuadFromNode()

Die `GeometryUtils`-Methoden `convertPointFromNode()`, `convertRectFromNode()` und `convertQuadFromNode()` bilden den angegebenen Punkt, das Rechteck beziehungsweise das Viereck vom [`Node`](/de/docs/Web/API/Node), auf dem sie aufgerufen werden, auf einen anderen Node ab. (Weitere Einzelheiten finden Sie unter [Firefox-Bug 918189](https://bugzil.la/918189).)

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ----------------- | ---------------------- | ------------------------ |
| Nightly           | 31                     | Nein                     |
| Developer Edition | 31                     | Nein                     |
| Beta              | 31                     | Nein                     |
| Release           | 31                     | Nein                     |

- `layout.css.convertFromNode.enabled`
  - : Zum Aktivieren auf `true` setzen.

### GeometryUtils-Methode: getBoxQuads()

Die `GeometryUtils`-Methode `getBoxQuads()` gibt die CSS-Boxen für einen [`Node`](/de/docs/Web/API/Node) relativ zu einem anderen Node oder Viewport zurück. (Weitere Einzelheiten finden Sie unter [Firefox-Bug 917755](https://bugzil.la/917755).)

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ----------------- | ---------------------- | ------------------------ |
| Nightly           | 31                     | Nein                     |
| Developer Edition | 31                     | Nein                     |
| Beta              | 31                     | Nein                     |
| Release           | 31                     | Nein                     |

- `layout.css.getBoxQuads.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Payment Request API

#### Grundlegende Zahlungsabwicklung

Die [Payment Request API](/de/docs/Web/API/Payment_Request_API) unterstützt die Abwicklung webbasierter Zahlungen innerhalb von Webinhalten oder Apps. Wegen eines Fehlers, der bei Tests der Benutzeroberfläche aufgetreten ist, haben wir beschlossen, die Veröffentlichung dieser API zu verschieben, während mögliche Änderungen an der API erörtert werden. Die Arbeit daran läuft weiter. (Weitere Einzelheiten finden Sie unter [Firefox-Bug 1318984](https://bugzil.la/1318984).)

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ----------------- | ---------------------- | ------------------------ |
| Nightly           | 55                     | Nein                     |
| Developer Edition | 55                     | Nein                     |
| Beta              | 55                     | Nein                     |
| Release           | 55                     | Nein                     |

- `dom.payments.request.enabled`
  - : Zum Aktivieren auf `true` setzen.
- `dom.payments.request.supportedRegions`
  - : Ländercodes als kommagetrennte Liste zulässiger Regionen (z. B. `US,CA`).

### Web Share API

Die [Web Share API](/de/docs/Web/API/Web_Share_API) ermöglicht das Teilen von Dateien, URLs und anderen Daten von einer Website aus.
Diese Funktion ist unter Android in allen Versionen aktiviert, auf Desktop-Systemen dagegen nur über eine Einstellung (sofern unten nichts anderes angegeben ist).

| Release-Kanal     | Geändert in Version | Standardmäßig aktiviert?                              |
| ----------------- | ------------------- | ----------------------------------------------------- |
| Nightly           | 71                  | Nein (Standardwert). Ja (unter Windows ab Version 92) |
| Developer Edition | 71                  | Nein                                                  |
| Beta              | 71                  | Nein                                                  |
| Release           | 71                  | Nein (Desktop). Ja (Android).                         |

- `dom.webshare.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Notifications API

Bei Benachrichtigungen ist die Eigenschaft [`requireInteraction`](/de/docs/Web/API/Notification/requireInteraction) auf Windows-Systemen und in Nightly standardmäßig auf true gesetzt ([Firefox-Bug 1794475](https://bugzil.la/1794475)).

| Release-Kanal     | Geändert in Version | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 117                 | Ja                       |
| Developer Edition | 117                 | Nein                     |
| Beta              | 117                 | Nein                     |
| Release           | 117                 | Nur unter Windows        |

- `dom.webnotifications.requireinteraction.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Option `navigate` für Benachrichtigungen

Die Option `navigate` des Konstruktors [`Notification()`](/de/docs/Web/API/Notification/Notification) und von [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification) nimmt eine URL entgegen, die geöffnet wird, wenn Benutzer auf die Benachrichtigung klicken. Damit benötigen Sie keinen Click-Handler mehr, nur um eine Seite zu öffnen. Die neue schreibgeschützte Eigenschaft [`Notification.navigate`](/de/docs/Web/API/Notification/navigate) gibt diese URL zurück. Wenn die Option gesetzt ist, werden die Ereignisse [`click`](/de/docs/Web/API/Notification/click_event) und [`notificationclick`](/de/docs/Web/API/ServiceWorkerGlobalScope/notificationclick_event) für diese Benachrichtigung nicht mehr ausgelöst. Jeder Eintrag in der Option [`actions`](/de/docs/Web/API/Notification/actions) kann eine eigene `navigate`-URL festlegen. Eine Aktionsschaltfläche ohne eigene URL löst weiterhin `notificationclick` aus, statt die URL der Benachrichtigung zu verwenden.
([Firefox-Bug 2066184](https://bugzil.la/2066184)).

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ----------------- | ---------------------- | ------------------------ |
| Nightly           | 157                    | Nein                     |
| Developer Edition | 157                    | Nein                     |
| Beta              | 157                    | Nein                     |
| Release           | 157                    | Nein                     |

- `dom.webnotifications.navigate.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Container Timing API

Die [Container Timing API](/de/docs/Web/API/PerformanceContainerTiming) meldet, wann der Inhalt eines Container-Elements gezeichnet wird. Damit können Sie die Renderzeit eines Seitenbereichs statt des gesamten Viewports messen.
([Firefox-Bug 1940240](https://bugzil.la/1940240)).

| Release-Kanal     | Geändert in Version | Standardmäßig aktiviert? |
| ----------------- | ------------------- | ------------------------ |
| Nightly           | 156                 | Nein                     |
| Developer Edition | 156                 | Nein                     |
| Beta              | 156                 | Nein                     |
| Release           | 156                 | Nein                     |

- `dom.enable_container_timing`
  - : Zum Aktivieren auf `true` setzen.

### Schlüsselkapselung in Web Crypto

Die [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) unterstützt ML-KEM. Mit diesem Algorithmus können zwei Parteien einen gemeinsamen geheimen Schlüssel vereinbaren; er ist darauf ausgelegt, auch Angriffen durch Quantencomputer standzuhalten. Eine Partei übergibt den öffentlichen Schlüssel der anderen Partei an die [`SubtleCrypto`](/de/docs/Web/API/SubtleCrypto)-Methoden `encapsulateKey()` oder `encapsulateBits()`. Diese geben den gemeinsamen Schlüssel zusammen mit einem Chiffretext zurück, der an die andere Partei gesendet wird. Die andere Partei übergibt diesen Chiffretext und ihren eigenen privaten Schlüssel an `decapsulateKey()` oder `decapsulateBits()`, um denselben gemeinsamen Schlüssel zu erhalten.

Die Algorithmusnamen `ML-KEM-512`, `ML-KEM-768` und `ML-KEM-1024` werden unterstützt, ebenso die entsprechenden [`usages`](/de/docs/Web/API/CryptoKey/usages) und die neuen Schlüsselformate `raw-public` und `raw-seed` für [`SubtleCrypto.importKey()`](/de/docs/Web/API/SubtleCrypto/importKey) und [`SubtleCrypto.exportKey()`](/de/docs/Web/API/SubtleCrypto/exportKey) ([Firefox-Bug 1943614](https://bugzil.la/1943614)).

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ----------------- | ---------------------- | ------------------------ |
| Nightly           | 157                    | Ja                       |
| Developer Edition | 157                    | Nein                     |
| Beta              | 157                    | Nein                     |
| Release           | 157                    | Nein                     |

- `dom.webcrypto.encapsulation.enabled`
  - : Zum Aktivieren auf `true` setzen.

## Sicherheit und Datenschutz

### Kennzeichnung unsicherer Seiten

Die beiden Einstellungen `security.insecure_connection_text_*` fügen in der Adressleiste neben dem herkömmlichen Schlosssymbol den Text „Nicht sicher“ hinzu, wenn eine Seite unsicher geladen wird, also über {{Glossary("HTTP", "HTTP")}} statt {{Glossary("HTTPS", "HTTPS")}}. Die Einstellung `browser.urlbar.trimHttps` entfernt das Präfix `https:` aus URLs in der Adressleiste. Weitere Einzelheiten finden Sie unter [Firefox-Bug 1853418](https://bugzil.la/1853418).

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ----------------- | ---------------------- | ------------------------ |
| Nightly           | 121                    | Ja                       |
| Developer Edition | 60                     | Nein                     |
| Beta              | 60                     | Nein                     |
| Release           | 60                     | Nein                     |

- `security.insecure_connection_text.enabled`
  - : Auf `true` setzen, um die Textkennzeichnung im normalen Browsing-Modus zu aktivieren.
- `security.insecure_connection_text.pbmode.enabled`
  - : Auf `true` setzen, um die Textkennzeichnung im privaten Browsing-Modus zu aktivieren.
- `browser.urlbar.trimHttps`
  - : Auf `true` setzen, um das Präfix `https:` aus URLs in der Adressleiste zu entfernen.

### Inhalte für Erwachsene mit `<meta name="rating">` einschränken

Das nicht standardisierte Element [`<meta name="rating">`](/de/docs/Web/HTML/Reference/Elements/meta) kann in eine Webseite eingefügt werden, um deren Inhalt als eingeschränkt beziehungsweise für Erwachsene bestimmt zu kennzeichnen. Zum Zeitpunkt der Erstellung dieses Textes gibt es zwei mögliche `content`-Werte: `adult` ([von Google definiert](https://developers.google.com/search/docs/specialty/explicit/guidelines#add-metadata)) und `RTA-5042-1996-1400-1577-RTA` ([von ASACP definiert](https://www.rtalabel.org/?content=howto#top)). Beide haben dieselbe Wirkung; künftig können weitere Optionen hinzukommen.

Die folgenden `<meta>`-Elemente sind gleichwertig:

```html
<meta name="rating" content="adult" />
<meta name="rating" content="RTA-5042-1996-1400-1577-RTA" />
```

Browser, die dieses Element erkennen, können den Zugriff auf den Inhalt einschränken. Die Implementierung in Firefox ersetzt die Seite durch den Inhalt unter `about:restricted`. Dieser erklärt Benutzern, dass sie versuchen, eingeschränkte Inhalte aufzurufen, warum sie diese nicht ansehen können, und bietet eine Schaltfläche, mit der sie zur vorherigen Seite zurückkehren können.

Weitere Einzelheiten finden Sie unter [Firefox-Bug 1991135](https://bugzil.la/1991135).

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ----------------- | ---------------------- | ------------------------ |
| Nightly           | 146                    | Nein                     |
| Developer Edition | 146                    | Nein                     |
| Beta              | 146                    | Nein                     |
| Release           | 146                    | Nein                     |

- `security.restrict_to_adults.always`
  - : Auf `true` setzen, um den Zugriff auf Webseiten einzuschränken, die sich mit einem `<meta name="rating">`-Element als für Erwachsene bestimmt kennzeichnen.
- `security.restrict_to_adults.respect_platform`
  - : Auf `true` setzen, um den Zugriff auf Webseiten, die sich mit einem `<meta name="rating">`-Element als für Erwachsene bestimmt kennzeichnen, nur dann einzuschränken, wenn im zugrunde liegenden Betriebssystem entsprechende Jugendschutzeinstellungen aktiviert sind (beispielsweise wenn die macOS-Einstellungen für _Inhalt & Datenschutz_ explizite Webinhalte einschränken).

### Permissions Policy / Feature Policy

Mit der [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) können Webentwickler bestimmte Funktionen und APIs im Browser gezielt aktivieren, deaktivieren und ihr Verhalten anpassen. Sie ähnelt CSP, steuert aber Funktionen statt sicherheitsbezogenes Verhalten.
In Firefox ist sie als **Feature Policy** implementiert, dem Namen einer früheren Version der Spezifikation.

Beachten Sie, dass unterstützte Richtlinien über das Attribut [`allow`](/de/docs/Web/HTML/Reference/Elements/iframe#allow) von `<iframe>`-Elementen festgelegt werden können, auch wenn die Benutzereinstellung nicht gesetzt ist.

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ----------------- | ---------------------- | ------------------------ |
| Nightly           | 65                     | Nein                     |
| Developer Edition | 65                     | Nein                     |
| Beta              | 65                     | Nein                     |
| Release           | 65                     | Nein                     |

- `dom.security.featurePolicy.header.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Privacy Preserving Attribution API (PPA)

Die [PPA API](https://support.mozilla.org/en-US/kb/privacy-preserving-attribution) bietet mit dem neuen Objekt `navigator.privateAttribution` und dessen Methoden `saveImpression()` und `measureConversion()` eine Alternative zum Tracking von Benutzern bei der Zuordnung von Werbewirkungen. Weitere Informationen zu PPA finden Sie in der [ursprünglichen Erläuterung](https://github.com/mozilla/explainers/tree/main/archive/ppa-experiment) und der [vorgeschlagenen Spezifikation](https://w3c.github.io/ppa/). Dieses Experiment kann für Websites über einen [Origin Trial](https://wiki.mozilla.org/Origin_Trials) oder im Browser durch Setzen der Einstellung auf `1` aktiviert werden ([Firefox-Bug 1900929](https://bugzil.la/1900929)).

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ----------------- | ---------------------- | ------------------------ |
| Nightly           | 128                    | Nein                     |
| Developer Edition | 128                    | Nein                     |
| Beta              | 128                    | Nein                     |
| Release           | 128                    | Nein                     |

- `dom.origin-trials.private-attribution.state`
  - : Zum Aktivieren auf `true` setzen.

## HTTP

### Integritätsrichtlinie für Stylesheet-Ressourcen

Die HTTP-Header {{httpheader("Integrity-Policy")}} und {{httpheader("Integrity-Policy-Report-Only")}} werden jetzt für Style-Ressourcen unterstützt. Damit können Websites [Garantien zur Subresource Integrity](/de/docs/Web/Security/Defenses/Subresource_Integrity) für Styles entweder erzwingen oder Verstöße gegen die Richtlinie lediglich melden.
Beachten Sie, dass Firefox Meldeendpunkte ignoriert und Verstöße in der Entwicklerkonsole protokolliert.
Wenn `Integrity-Policy` verwendet wird, blockiert der Browser das Laden von Styles, die in einem {{HTMLElement("link")}}-Element mit [`rel="stylesheet"`](/de/docs/Web/HTML/Reference/Attributes/rel#stylesheet) referenziert werden, wenn entweder das Attribut [`integrity`](/de/docs/Web/HTML/Reference/Elements/script#integrity) fehlt oder der Integritäts-Hash nicht mit der Ressource auf dem Server übereinstimmt.
([Firefox-Bug 1976656](https://bugzil.la/1976656)).

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ----------------- | ---------------------- | ------------------------ |
| Nightly           | 142                    | Nein                     |
| Developer Edition | 142                    | Nein                     |
| Beta              | 142                    | Nein                     |
| Release           | 142                    | Nein                     |

- `security.integrity_policy.stylesheet.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Idempotency-Key

Der HTTP-Anfrageheader {{httpheader("Idempotency-Key")}} kann von clientseitigem Website-Code verwendet werden, um {{HTTPMethod("POST")}}- oder {{HTTPMethod("PATCH")}}-Anfragen {{Glossary("idempotent", "idempotent")}} zu machen, sofern der Server dies unterstützt.
Laut Spezifikation sollte der Server dokumentieren und bekannt geben, welche Endpunkte diesen Header benötigen, welches Format der Schlüssel hat und welche Fehlerantworten zu erwarten sind.

Firefox fügt den Header _automatisch_ mit einem eindeutigen Schlüssel für jede neue `POST`-Anfrage hinzu, sofern der clientseitige Code der Seite ihn nicht bereits hinzugefügt hat.
Dies vereinfacht den clientseitigen Code für die Zusammenarbeit mit Servern, die diese Funktion unterstützen.

([Firefox-Bug 1830022](https://bugzil.la/1830022)).

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ----------------- | ---------------------- | ------------------------ |
| Nightly           | 135                    | Nein                     |
| Developer Edition | 135                    | Nein                     |
| Beta              | 135                    | Nein                     |
| Release           | 135                    | Nein                     |

- `network.http.idempotencyKey.enabled`
  - : Zum Aktivieren auf `true` setzen.

### SameSite=Lax als Standardwert

[`SameSite`-Cookies](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) haben standardmäßig den Wert `Lax`.
Bei dieser Einstellung werden Cookies nur gesendet, wenn Benutzer zur Website des Ursprungs navigieren, nicht aber bei websiteübergreifenden Unteranfragen, etwa zum Laden von Bildern oder Frames in eine Drittanbieter-Website.
Weitere Einzelheiten finden Sie unter [Firefox-Bug 1617609](https://bugzil.la/1617609).

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ----------------- | ---------------------- | ------------------------ |
| Nightly           | 69                     | Nein                     |
| Developer Edition | 69                     | Nein                     |
| Beta              | 69                     | Nein                     |
| Release           | 69                     | Nein                     |

- `network.cookie.sameSite.laxByDefault`
  - : Zum Aktivieren auf `true` setzen.

### Platzhalter in Access-Control-Allow-Headers umfasst Authorization nicht

[`Access-Control-Allow-Headers`](/de/docs/Web/HTTP/Reference/Headers/Access-Control-Allow-Headers) ist ein Antwortheader auf eine {{Glossary("Preflight_request", "CORS-Preflight-Anfrage")}}. Er gibt an, welche Anfrageheader in der eigentlichen Anfrage enthalten sein dürfen.
Die Antwortdirektive kann einen Platzhalter (`*`) enthalten. Dieser bedeutet, dass die eigentliche Anfrage alle Header außer `Authorization` enthalten darf.

Standardmäßig nimmt Firefox den Header `Authorization` dennoch in die eigentliche Anfrage auf, wenn es eine Antwort mit `Access-Control-Allow-Headers: *` erhält.
Setzen Sie die Einstellung auf `false`, um sicherzustellen, dass Firefox den Header `Authorization` nicht hinzufügt.
Weitere Einzelheiten finden Sie unter [Firefox-Bug 1687364](https://bugzil.la/1687364).

| Release-Kanal     | Hinzugefügt in Version | Standardmäßig aktiviert? |
| ----------------- | ---------------------- | ------------------------ |
| Nightly           | 115                    | Ja                       |
| Developer Edition | 115                    | Ja                       |
| Beta              | 115                    | Ja                       |
| Release           | 115                    | Ja                       |

- `network.cors_preflight.authorization_covered_by_wildcard`
  - : Zum Aktivieren auf `true` setzen.

## Entwicklertools

Die Entwicklertools von Mozilla werden ständig weiterentwickelt. Wir experimentieren mit neuen Ideen, fügen Funktionen hinzu und testen sie in Nightly und Developer Edition, bevor sie in Beta und Release übernommen werden. Die folgenden Funktionen sind die derzeitigen experimentellen Funktionen der Entwicklertools.

**In diesem Release-Zyklus gibt es keine experimentellen Funktionen.**

## Siehe auch

- [Versionshinweise für Firefox-Entwickler](/de/docs/Mozilla/Firefox/Releases)
- [Firefox Nightly](https://www.firefox.com/en-US/channel/desktop/)
- [Firefox Developer Edition](https://www.firefox.com/en-US/channel/desktop/developer/)
