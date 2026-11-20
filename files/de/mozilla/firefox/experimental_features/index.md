---
title: Experimentelle Funktionen in Firefox
short-title: Experimentelle Funktionen
slug: Mozilla/Firefox/Experimental_features
l10n:
  sourceCommit: defd0924e23d3a2bbaec3dfe079a1f201b536abe
---

Auf dieser Seite sind experimentelle und teilweise implementierte Funktionen von Firefox aufgeführt, darunter sich weiterentwickelnde oder vorgeschlagene Webplattform-Standards.
Jeder der folgenden Einträge enthält Informationen darüber, in welchen Versionen eine Funktion enthalten ist (Nightly, Beta, Developer Edition oder Release), ob sie standardmäßig aktiviert ist und wie die **Einstellung** heißt, mit der Sie die Funktion aktivieren oder konfigurieren können.
Die Beschreibung jeder Funktion enthält außerdem Links zu den entsprechenden [Bugzilla-Fehlerberichten](https://bugzilla.mozilla.org), die sich mit der Implementierung oder Aktivierung der Funktion befassen.
So können Sie experimentelle Funktionen ausprobieren und Feedback geben, bevor sie offiziell veröffentlicht werden.

Im Lebenszyklus einer neuen Funktion erscheint diese üblicherweise zuerst in [Nightly](https://www.firefox.com/en-US/channel/desktop/#nightly), wo sie für frühzeitiges Feedback und Tests häufig standardmäßig aktiviert ist.
Wenn keine größeren Probleme festgestellt werden, wird sie in die Vorabversionen [Beta](https://www.firefox.com/en-US/channel/desktop/#beta) und [Developer Edition](https://www.firefox.com/en-US/channel/desktop/developer/) aufgenommen. Schließlich werden freigegebene Funktionen im Kanal [Stable Release](https://www.firefox.com/en-US/) veröffentlicht.
Sobald eine Funktion in einer Release-Version standardmäßig aktiviert ist, gilt sie nicht mehr als experimentell und wird von dieser Seite entfernt.

Um diese Funktionen zu aktivieren, geben Sie `about:config` in die Firefox-Adressleiste ein, suchen Sie nach der zugehörigen **Einstellung** und ändern Sie deren Wert. Üblicherweise wird dabei zwischen `true` und `false` umgeschaltet.
Je nach Funktion müssen Sie den Browser möglicherweise neu starten, damit die Änderung wirksam wird.
Weitere Informationen zum Verwalten von Einstellungen in Firefox finden Sie im Hilfeartikel zum [Firefox-Konfigurationseditor](https://support.mozilla.org/en-US/kb/about-config-editor-firefox).

## HTML

### Layout für input type="search"

Das Layout für `input type="search"` wurde aktualisiert. Dadurch erscheint in einem Suchfeld ein Symbol zum Löschen des Inhalts, sobald jemand mit der Eingabe beginnt. Dies entspricht der Implementierung in anderen Browsern. (Weitere Informationen finden Sie unter [Firefox-Bug 558594](https://bugzil.la/558594).)

| Veröffentlichungskanal | Seit Version | Standardmäßig aktiviert? |
| ---------------------- | ------------ | ------------------------ |
| Nightly                | 81           | Nein                     |
| Developer Edition      | 81           | Nein                     |
| Beta                   | 81           | Nein                     |
| Release                | 81           | Nein                     |

- `layout.forms.input-type-search.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Passwortanzeige umschalten

HTML-Elemente zur Passworteingabe ([`<input type="password">`](/de/docs/Web/HTML/Reference/Elements/input/password)) enthalten ein Augensymbol, mit dem sich der Passworttext ein- und ausblenden lässt ([Firefox-Bug 502258](https://bugzil.la/502258)).

| Veröffentlichungskanal | Seit Version | Standardmäßig aktiviert? |
| ---------------------- | ------------ | ------------------------ |
| Nightly                | 96           | Nein                     |
| Developer Edition      | 96           | Nein                     |
| Beta                   | 96           | Nein                     |
| Release                | 96           | Nein                     |

- `layout.forms.reveal-password-button.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Zeitauswahl in `datetime-local`- und `time`-Eingabeelementen

Die HTML-Elemente [`<input type="datetime-local">`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local) und [`<input type="time">`](/de/docs/Web/HTML/Reference/Elements/input/time) unterstützen eine Zeitauswahl ([Firefox-Bug 1726108](https://bugzil.la/1726108)).

| Veröffentlichungskanal | Seit Version | Standardmäßig aktiviert? |
| ---------------------- | ------------ | ------------------------ |
| Nightly                | 144          | Nein                     |
| Developer Edition      | 144          | Nein                     |
| Beta                   | 144          | Nein                     |
| Release                | 144          | Nein                     |

- `dom.forms.datetime.timepicker`
  - : Zum Aktivieren auf `true` setzen.

### Attribute `alpha` und `colorspace` in `color`-Eingabeelementen

Das HTML-Element [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color) unterstützt die Attribute [`alpha`](/de/docs/Web/HTML/Reference/Elements/input/color#alpha) und [`colorspace`](/de/docs/Web/HTML/Reference/Elements/input/color#colorspace) ([Firefox-Bug 1919718](https://bugzil.la/1919718)).

| Veröffentlichungskanal | Seit Version | Standardmäßig aktiviert? |
| ---------------------- | ------------ | ------------------------ |
| Nightly                | 149          | Ja                       |
| Developer Edition      | -            | -                        |
| Beta                   | -            | -                        |
| Release                | -            | -                        |

- `dom.forms.html_color_picker.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Attribute `headingoffset` und `headingreset`

Das globale Attribut [`headingoffset`](/de/docs/Web/HTML/Reference/Global_attributes/headingoffset) erhöht die berechnete Überschriftenebene der [Überschriftenelemente](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) innerhalb des Elements, für das es gesetzt ist. Dadurch kann eine Komponente unabhängig von ihrer Position auf einer Seite dieselbe Überschriftenauszeichnung verwenden. Das Attribut [`headingreset`](/de/docs/Web/HTML/Reference/Global_attributes/headingreset) verhindert, dass sich die Offsets übergeordneter Elemente auf die Überschriften innerhalb des Elements auswirken, für das es gesetzt ist ([Firefox-Bug 1974383](https://bugzil.la/1974383)).

| Veröffentlichungskanal | Seit Version | Standardmäßig aktiviert? |
| ---------------------- | ------------ | ------------------------ |
| Nightly                | 153          | Nein                     |
| Developer Edition      | 153          | Nein                     |
| Beta                   | 153          | Nein                     |
| Release                | 153          | Nein                     |

- `dom.headingoffset.enabled`
  - : Zum Aktivieren auf `true` setzen.

### `<script type="speculationrules">`

Die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) bietet einen Mechanismus, um die Leistung künftiger Navigationen zu verbessern. Dazu wird anhand von Faktoren wie dem Verhalten von Benutzern gegenüber Links festgelegt, welche Ressourcen vorab abgerufen oder gerendert werden sollen.

Die anfängliche Unterstützung umfasste nur [`prefetch`](/de/docs/Web/HTML/Reference/Elements/script/type/speculationrules#prefetch), wobei Ressourcen durch eine [`urls`](/de/docs/Web/HTML/Reference/Elements/script/type/speculationrules#urls)-Liste und die Eagerness-Stufe [`immediate`](/de/docs/Web/HTML/Reference/Elements/script/type/speculationrules#immediate) angegeben wurden. Dazu gehört auch die Unterstützung des Werts `navigational-prefetch` für die Eigenschaft [`PerformanceResourceTiming.deliveryType`](/de/docs/Web/API/PerformanceResourceTiming/deliveryType) ([Firefox-Bug 2041381](https://bugzil.la/2041381)).

| Veröffentlichungskanal | Seit Version | Standardmäßig aktiviert? |
| ---------------------- | ------------ | ------------------------ |
| Nightly                | 155          | Ja                       |
| Developer Edition      | 155          | Nein                     |
| Beta                   | 155          | Nein                     |
| Release                | 155          | Nein                     |

- `dom.speculation_rules.enabled`
  - : Zum Aktivieren auf `true` setzen.

#### Moderate Eagerness

Bei der Eagerness-Stufe [`moderate`](/de/docs/Web/HTML/Reference/Elements/script/type/speculationrules#moderate) beginnt ein passender Vorabruf, sobald der Benutzer den Mauszeiger für kurze Zeit über einem Link hält (standardmäßig 200 Millisekunden) ([Firefox-Bug 2061013](https://bugzil.la/2061013)).

| Veröffentlichungskanal | Seit Version | Standardmäßig aktiviert? |
| ---------------------- | ------------ | ------------------------ |
| Nightly                | 158          | Ja                       |
| Developer Edition      | 158          | Nein                     |
| Beta                   | 158          | Nein                     |
| Release                | 158          | Nein                     |

- `dom.speculation_rules.enabled`
  - : Zum Aktivieren auf `true` setzen.

#### Speculation-Rules-Header

Der HTTP-Antwortheader {{httpheader("Speculation-Rules")}} enthält die URLs externer Dateien mit Speculation Rules und ist eine Alternative zu einem eingebetteten `<script type="speculationrules">`-Element. Der Header gilt nur für Dokumente der obersten Ebene, und jede Datei muss mit dem MIME-Typ `application/speculationrules+json` bereitgestellt werden ([Firefox-Bug 2020709](https://bugzil.la/2020709)).

| Veröffentlichungskanal | Seit Version | Standardmäßig aktiviert? |
| ---------------------- | ------------ | ------------------------ |
| Nightly                | 160          | Ja                       |
| Developer Edition      | 160          | Nein                     |
| Beta                   | 160          | Nein                     |
| Release                | 160          | Nein                     |

- `dom.speculation_rules.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Dokumentübergreifende View Transitions

[Dokumentübergreifende View Transitions](/de/docs/Web/API/View_Transition_API/Using#basic_mpa_view_transition) können verwendet werden, um den Übergang zwischen Seitennavigationen desselben Ursprungs in einer mehrseitigen Anwendung zu animieren.
Beide Seiten müssen den Übergang mithilfe der CSS-At-Regel {{cssxref("@view-transition")}} aktivieren.
Um den Übergang mit JavaScript anzupassen, verwenden Sie das Ereignis [`pageswap`](/de/docs/Web/API/Window/pageswap_event) ([`PageSwapEvent`](/de/docs/Web/API/PageSwapEvent)), das auf der alten Seite unmittelbar vor deren Ersetzung ausgelöst wird. Sie können auch das Ereignis [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event) ([`PageRevealEvent`](/de/docs/Web/API/PageRevealEvent)) verwenden, das auf der neuen Seite ausgelöst wird, wenn sie erstmals angezeigt wird.
Die Schnittstelle [`CSSViewTransitionRule`](/de/docs/Web/API/CSSViewTransitionRule) repräsentiert eine `@view-transition`-Regel im CSS Object Model.
Beachten Sie, dass [Render Blocking](#render_blocking) verwendet werden kann, um sicherzustellen, dass wichtige Teile der neuen Seite geladen sind, bevor der Übergang beginnt.
([Firefox-Bug 2084340](https://bugzil.la/2084340)).

| Veröffentlichungskanal | Seit Version | Standardmäßig aktiviert? |
| ---------------------- | ------------ | ------------------------ |
| Nightly                | 161          | Ja                       |
| Developer Edition      | 160          | Nein                     |
| Beta                   | 160          | Nein                     |
| Release                | 160          | Nein                     |

- `dom.viewTransitions.cross-document.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Render Blocking

Das Attribut `blocking="render"` der Elemente {{HTMLElement("link",,"blocking")}}, {{HTMLElement("script",,"blocking")}} und {{HTMLElement("style",,"blocking")}} wird unterstützt.
Damit können Sie das Rendern der Seite blockieren, bis das gekennzeichnete Stylesheet geladen oder das Skript ausgeführt wurde. So wird die Seite nicht zunächst ohne Styles oder unvollständig angezeigt.
Sie können auch [`<link rel="expect">`](/de/docs/Web/HTML/Reference/Attributes/rel#expect) mit `blocking="render"` verwenden, um das Rendern zu blockieren, bis ein bestimmtes Element im Dokument geparst wurde.
Die Eigenschaft [`PerformanceResourceTiming.renderBlockingStatus`](/de/docs/Web/API/PerformanceResourceTiming/renderBlockingStatus) gibt an, ob eine Ressource das Rendern blockiert hat.
([Firefox-Bug 1751383](https://bugzil.la/1751383), [Firefox-Bug 2053279](https://bugzil.la/2053279)).

| Veröffentlichungskanal | Seit Version | Standardmäßig aktiviert? |
| ---------------------- | ------------ | ------------------------ |
| Nightly                | 161          | Ja                       |
| Developer Edition      | 160          | Nein                     |
| Beta                   | 160          | Nein                     |
| Release                | 160          | Nein                     |

- `dom.element.blocking.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Lazy Loading für Video und Audio

Das Attribut `loading` der Elemente {{HTMLElement("video", "", "#loading")}} und {{HTMLElement("audio", "", "#loading")}} sowie die entsprechende Eigenschaft [`HTMLMediaElement.loading`](/de/docs/Web/API/HTMLMediaElement/loading) werden jetzt unterstützt. Bei `loading="lazy"` verschiebt der Browser das Laden des Mediums, das Laden des Vorschaubilds für das Video und den Beginn der `autoplay`-Wiedergabe, bis sich das Element in der Nähe des Viewports befindet ([Firefox-Bug 2005072](https://bugzil.la/2005072)).

| Veröffentlichungskanal | Seit Version | Standardmäßig aktiviert? |
| ---------------------- | ------------ | ------------------------ |
| Nightly                | 160          | Nein                     |
| Developer Edition      | 160          | Nein                     |
| Beta                   | 160          | Nein                     |
| Release                | 160          | Nein                     |

- `media.lazy_loading.enabled`
  - : Zum Aktivieren auf `true` setzen.

## CSS

### `circle()` und `ellipse()` erlauben die Schlüsselwörter `farthest-corner` und `closest-corner`

Die Schlüsselwörter `farthest-corner` und `closest-corner` können jetzt verwendet werden, um die Radien der grundlegenden CSS-Formen [`ellipse()`](/de/docs/Web/CSS/Reference/Values/basic-shape/ellipse) und [`circle()`](/de/docs/Web/CSS/Reference/Values/basic-shape/circle) anzugeben.
(Weitere Informationen finden Sie unter [Firefox-Bug 2037673](https://bugzil.la/2037673).)

| Veröffentlichungskanal | Seit Version | Standardmäßig aktiviert? |
| ---------------------- | ------------ | ------------------------ |
| Nightly                | 153          | Ja                       |
| Developer Edition      | 153          | Nein                     |
| Beta                   | 153          | Nein                     |
| Release                | 153          | Nein                     |

- `layout.css.ellipse-corners.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Hexadezimale Kästchen für unerwartete Steuerzeichen

Diese Funktion stellt Steuerzeichen (Unicode-Kategorie Cc), mit Ausnahme von _Tabulator_ (`U+0009`), _Zeilenvorschub_ (`U+000A`), _Seitenvorschub_ (`U+000C`) und _Wagenrücklauf_ (`U+000D`), als hexadezimales Kästchen dar, wenn sie an einer Stelle auftreten, an der sie nicht erwartet werden. (Weitere Informationen finden Sie unter [Firefox-Bug 1099557](https://bugzil.la/1099557).)

| Veröffentlichungskanal | Seit Version | Standardmäßig aktiviert? |
| ---------------------- | ------------ | ------------------------ |
| Nightly                | 43           | Ja                       |
| Developer Edition      | 43           | Nein                     |
| Beta                   | 43           | Nein                     |
| Release                | 43           | Nein                     |

- `layout.css.control-characters.visible`
  - : Zum Aktivieren auf `true` setzen.

### Eigenschaft initial-letter

Die CSS-Eigenschaft {{cssxref("initial-letter")}} ist Teil der Spezifikation [CSS Inline Layout](https://drafts.csswg.org/css-inline/) und ermöglicht es Ihnen festzulegen, wie abgesenkte, erhöhte und versenkte Initialen dargestellt werden. (Weitere Informationen finden Sie unter [Firefox-Bug 1223880](https://bugzil.la/1223880).)

| Veröffentlichungskanal | Seit Version | Standardmäßig aktiviert? |
| ---------------------- | ------------ | ------------------------ |
| Nightly                | 50           | Nein                     |
| Developer Edition      | 50           | Nein                     |
| Beta                   | 50           | Nein                     |
| Release                | 50           | Nein                     |

- `layout.css.initial-letter.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Funktion fit-content()

Die Funktion [`fit-content()`](/de/docs/Web/CSS/Reference/Values/fit-content_function) kann auf {{cssxref("width")}} und andere Größeneigenschaften angewendet werden. Für die Größe von Tracks im CSS Grid Layout wird diese Funktion bereits umfassend unterstützt. (Weitere Informationen finden Sie unter [Firefox-Bug 1312588](https://bugzil.la/1312588).)

| Veröffentlichungskanal | Seit Version | Standardmäßig aktiviert? |
| ---------------------- | ------------ | ------------------------ |
| Nightly                | 91           | Nein                     |
| Developer Edition      | 91           | Nein                     |
| Beta                   | 91           | Nein                     |
| Release                | 91           | Nein                     |

- `layout.css.fit-content-function.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Medienmerkmal prefers-reduced-transparency

Mit dem CSS-Medienmerkmal {{cssxref("@media/prefers-reduced-transparency")}} können Sie erkennen, ob ein Benutzer die Einstellung zum Verringern transparenter oder durchscheinender Ebeneneffekte auf seinem Gerät aktiviert hat.
Weitere Informationen finden Sie unter [Firefox-Bug 1736914](https://bugzil.la/1736914).

| Veröffentlichungskanal | Seit Version | Standardmäßig aktiviert? |
| ---------------------- | ------------ | ------------------------ |
| Nightly                | 113          | Nein                     |
| Developer Edition      | 113          | Nein                     |
| Beta                   | 113          | Nein                     |
| Release                | 113          | Nein                     |

- `layout.css.prefers-reduced-transparency.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Medienmerkmal inverted-colors

Mit dem CSS-Medienmerkmal {{cssxref("@media/inverted-colors")}} können Sie erkennen, ob ein User Agent oder das zugrunde liegende Betriebssystem Farben invertiert.
Weitere Informationen finden Sie unter [Firefox-Bug 1794628](https://bugzil.la/1794628).

| Veröffentlichungskanal | Seit Version | Standardmäßig aktiviert? |
| ---------------------- | ------------ | ------------------------ |
| Nightly                | 114          | Nein                     |
| Developer Edition      | 114          | Nein                     |
| Beta                   | 114          | Nein                     |
| Release                | 114          | Nein                     |

- `layout.css.inverted-colors.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Transform-Eigenschaften mit Herstellerpräfix

Die mit dem Präfix `-moz-` versehenen Eigenschaften für [CSS-Transformationen](/de/docs/Web/CSS/Guides/Transforms) können deaktiviert werden, indem die Einstellung `layout.css.prefixes.transforms` auf `false` gesetzt wird. Sie sollen deaktiviert werden, sobald die standardisierten CSS-Zoom-Eigenschaften ausreichend unterstützt werden ([Firefox-Bug 1886134](https://bugzil.la/1886134), [Firefox-Bug 1855763](https://bugzil.la/1855763)).

Diese Einstellung deaktiviert insbesondere die folgenden Eigenschaften mit Präfix:

- `-moz-backface-visibility`
- `-moz-perspective`
- `-moz-perspective-origin`
- `-moz-transform`
- `-moz-transform-origin`
- `-moz-transform-style`

| Veröffentlichungskanal | Seit Version | Standardmäßig aktiviert? |
| ---------------------- | ------------ | ------------------------ |
| Nightly                | 120          | Ja                       |
| Developer Edition      | 120          | Ja                       |
| Beta                   | 120          | Ja                       |
| Release                | 120          | Ja                       |

- `layout.css.prefixes.transforms`
  - : Zum Aktivieren auf `true` setzen.

### Symmetrisches `letter-spacing`

Die CSS-Eigenschaft {{cssxref("letter-spacing")}} verteilt den angegebenen Zeichenabstand jetzt gleichmäßig auf beide Seiten jedes Zeichens. Dies unterscheidet sich vom bisherigen Verhalten, bei dem der Abstand hauptsächlich auf einer Seite hinzugefügt wird. Dieser Ansatz kann die Textabstände verbessern, insbesondere bei Text mit gemischten Schreibrichtungen.
([Firefox-Bug 1891446](https://bugzil.la/1891446)).

| Veröffentlichungskanal | Seit Version | Standardmäßig aktiviert? |
| ---------------------- | ------------ | ------------------------ |
| Nightly                | 128          | Ja                       |
| Developer Edition      | 128          | Ja                       |
| Beta                   | 127          | Nein                     |
| Release                | 127          | Nein                     |

- `layout.css.letter-spacing.model`
  - : Zum Aktivieren auf `true` setzen.

### Pseudoelemente nach elementbasierten Pseudoelementen zulassen

Die Arbeit daran, [Pseudoelemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) wie {{cssxref("::first-letter")}} und {{cssxref("::before")}} an [elementbasierte Pseudoelemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements#element-backed_pseudo-elements) wie {{cssxref("::details-content")}} und {{cssxref("::file-selector-button")}} anzuhängen, hat begonnen.

So können Benutzer beispielsweise mit dem CSS-Selektor `::details-content::first-letter` den ersten Buchstaben des {{htmlElement("details")}}-Elements gestalten oder mit dem CSS-Selektor `::file-selector-button::before` Inhalt vor einem {{HTMLElement("input") }}-Element mit [`type="file"`](/de/docs/Web/HTML/Reference/Elements/input/file) hinzufügen.

Derzeit kann nur die Unterstützung für `::details-content::first-letter` mithilfe von `@supports(::details-content::first-letter)` geprüft werden.
Das Pseudoelement `::file-selector-button` ist noch nicht als elementbasiertes Pseudoelement gekennzeichnet. Daher gibt es keine Möglichkeit, dies zu testen.
([Firefox-Bug 1953557](https://bugzil.la/1953557), [Firefox-Bug 1941406](https://bugzil.la/1941406)).

| Veröffentlichungskanal | Seit Version | Standardmäßig aktiviert? |
| ---------------------- | ------------ | ------------------------ |
| Nightly                | 138          | Nein                     |
| Developer Edition      | 138          | Nein                     |
| Beta                   | 138          | Nein                     |
| Release                | 138          | Nein                     |

### Pseudoklassen `:heading` und `:heading()`

Mit der Pseudoklasse {{cssxref(":heading")}} können Sie alle [Überschriftenelemente](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) (`<h1>`–`<h6>`) gleichzeitig gestalten, anstatt sie einzeln anzusprechen. Mit der funktionalen Pseudoklasse {{cssxref(":heading()")}} können Sie Überschriftenelemente gestalten, deren Überschriftenebenen einer durch Kommas getrennten Liste von Ganzzahlen entsprechen ([Firefox-Bug 1974386](https://bugzil.la/1974386) und [Firefox-Bug 1984310](https://bugzil.la/1984310)).

| Veröffentlichungskanal | Seit Version | Standardmäßig aktiviert? |
| ---------------------- | ------------ | ------------------------ |
| Nightly                | 142          | Nein                     |
| Developer Edition      | 142          | Nein                     |
| Beta                   | 142          | Nein                     |
| Release                | 142          | Nein                     |

- `layout.css.heading-selector.enabled`
  - : Zum Aktivieren auf `true` setzen.

### At-Regel `@custom-media`

Die CSS-At-Regel {{cssxref("@custom-media")}} definiert Aliase für lange oder komplexe Medienabfragen. Anstatt dieselbe fest codierte `<media-query-list>` in mehreren `@media`-At-Regeln zu wiederholen, können Sie sie einmal in einer `@custom-media`-At-Regel definieren und bei Bedarf im gesamten Stylesheet darauf verweisen ([Firefox-Bug 1744292](https://bugzil.la/1744292)).

| Veröffentlichungskanal | Seit Version | Standardmäßig aktiviert? |
| ---------------------- | ------------ | ------------------------ |
| Nightly                | 148          | Nein                     |
| Developer Edition      | 148          | Nein                     |
| Beta                   | 148          | Nein                     |
| Release                | 148          | Nein                     |

- `layout.css.custom-media.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Wert `base-select` für die CSS-Eigenschaft `appearance`

Der Wert [`base-select`](/de/docs/Web/CSS/Reference/Properties/appearance#base-select) für die CSS-Eigenschaft {{cssxref("appearance")}} ist nur für das Element {{htmlelement("select")}} und das Pseudoelement {{cssxref("::picker()", "::picker(select)")}} relevant und ermöglicht deren vollständige Gestaltung. Derzeit wird nur die Gestaltung des `<select>`-Elements unterstützt. Die Gestaltung des Pseudoelements `::picker(select)` wird in künftigen Versionen hinzugefügt. Diese Funktion ist Teil der Arbeit an [anpassbaren Select-Elementen](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select). Zur Verwendung müssen zwei Einstellungen aktiviert werden ([Firefox-Bug 1974787](https://bugzil.la/1974787)).

| Veröffentlichungskanal | Seit Version | Standardmäßig aktiviert? |
| ---------------------- | ------------ | ------------------------ |
| Nightly                | 149          | Nein                     |
| Developer Edition      | 149          | Nein                     |
| Beta                   | 149          | Nein                     |
| Release                | 149          | Nein                     |

- `dom.select.customizable_select.enabled`
  - : Zum Aktivieren auf `true` setzen.
- `layout.css.appearance-base.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Absolut positionierte Elemente in mehrspaltigen Containern und beim Drucken

Absolut positionierte Elemente innerhalb [mehrspaltiger Container](/de/docs/Web/CSS/Guides/Multicol_layout) sowie beim Drucken werden jetzt korrekt positioniert und fragmentiert.
Dies verbessert die Interoperabilität mit anderen Browsern und verhindert Layoutprobleme wie überlappenden Text oder den Verlust von Inhalten.
([Firefox-Bug 2018797](https://bugzil.la/2018797)).

| Veröffentlichungskanal | Seit Version | Standardmäßig aktiviert? |
| ---------------------- | ------------ | ------------------------ |
| Nightly                | 150          | Ja                       |
| Developer Edition      | 150          | Nein                     |
| Beta                   | 150          | Nein                     |
| Release                | 150          | Nein                     |

- `layout.abspos.fragmentainer-aware-positioning.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Bereichssyntax für `@container style()`-Abfragen

[`style()`](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries)-Abfragen in der CSS-At-Regel [`@container`](/de/docs/Web/CSS/Reference/At-rules/@container) unterstützen jetzt die _Bereichssyntax_. Damit können Sie prüfen, ob ein Container eine gültige benutzerdefinierte CSS-Eigenschaft besitzt, deren Wert mit Vergleichsoperatoren wie `>`, `<`, `>=` und `<=` vergleichen und entsprechend Styles auf seine Kindelemente anwenden ([Firefox-Bug 2024601](https://bugzil.la/2024601)).

| Veröffentlichungskanal | Seit Version | Standardmäßig aktiviert? |
| ---------------------- | ------------ | ------------------------ |
| Nightly                | 151          | Nein                     |
| Developer Edition      | 151          | Nein                     |
| Beta                   | 151          | Nein                     |
| Release                | 151          | Nein                     |

- `layout.css.attr.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Attribute externer Ressourcen aktualisieren

Die CSS-Eigenschaft {{cssxref("link-parameters")}} und die CSS-Funktion {{cssxref("param")}} werden jetzt unterstützt. Damit können Benutzer Attribute externer Ressourcen, beispielsweise SVGs, aktualisieren, deren Attribute mit der CSS-Funktion {{cssxref("env")}} gesetzt werden. So kann eine einzige externe Ressource verwendet werden, anstatt mehrere Varianten zu erstellen, die sich nur in Farben oder anderen Werten unterscheiden ([Firefox-Bug 2046153](https://bugzil.la/2046153)).

| Veröffentlichungskanal | Seit Version | Standardmäßig aktiviert? |
| ---------------------- | ------------ | ------------------------ |
| Nightly                | 154          | Ja                       |
| Developer Edition      | 153          | Nein                     |
| Beta                   | 153          | Nein                     |
| Release                | 153          | Nein                     |

- `layout.css.link-parameters.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Inhalte mit `line-clamp` kürzen

Die CSS-Eigenschaft {{cssxref("line-clamp")}} funktioniert jetzt ohne das Herstellerpräfix `-webkit-`. Derzeit unterstützt sie jedoch die Werte `no-ellipsis` und `<string>` nicht ([Firefox-Bug 2042986](https://bugzil.la/2042986)).

| Veröffentlichungskanal | Seit Version | Standardmäßig aktiviert? |
| ---------------------- | ------------ | ------------------------ |
| Nightly                | 154          | Nein                     |
| Developer Edition      | 154          | Nein                     |
| Beta                   | 154          | Nein                     |
| Release                | 154          | Nein                     |

- `layout.css.line-clamp.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Prozentwerte für `text-decoration-inset`

Die CSS-Eigenschaft {{cssxref("text-decoration-inset")}} unterstützt jetzt Prozentwerte. Der Prozentwert gibt die Größe des Einzugs als Prozentsatz der Inline-Größe der dekorierten Box oder jedes einzelnen Boxfragments an, abhängig vom Wert von {{cssxref("box-decoration-break")}} ([Firefox-Bug 2044602](https://bugzil.la/2044602)).

| Veröffentlichungskanal | Seit Version | Standardmäßig aktiviert? |
| ---------------------- | ------------ | ------------------------ |
| Nightly                | 154          | Nein                     |
| Developer Edition      | 154          | Nein                     |
| Beta                   | 154          | Nein                     |
| Release                | 154          | Nein                     |

- `layout.css.text-decoration-inset-percentage.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Unterstützungsabfragen mit `named-feature()`

Mit der Funktion `named-feature()` in der At-Regel {{cssxref("@supports")}} können Sie prüfen, ob der Browser eine Funktion unterstützt, für die es keine andere erkennbare Syntax gibt, beispielsweise `@supports named-feature(anchor-position-follows-transforms)`.
([Firefox-Bug 2042977](https://bugzil.la/2042977) und [Firefox-Bug 2055354](https://bugzil.la/2055354)).

| Veröffentlichungskanal | Seit Version | Standardmäßig aktiviert? |
| ---------------------- | ------------ | ------------------------ |
| Nightly                | 156          | Nein                     |
| Developer Edition      | 156          | Nein                     |
| Beta                   | 156          | Nein                     |
| Release                | 156          | Nein                     |

- `layout.css.anchor-positioning.follows-transforms.enabled`
  - : Zum Aktivieren auf `true` setzen.

### `corner-shape`-Eigenschaften

Die Kurzschreibweise {{cssxref("corner-shape")}} und die zugehörigen Einzeleigenschaften werden jetzt in Nightly unterstützt. Mit diesen Eigenschaften können Sie die Form von Ecken mithilfe eines der Schlüsselwortwerte von {{cssxref("corner-shape-value")}} oder der Funktion {{cssxref("superellipse")}} anpassen.
([Firefox-Bug 2070927](https://bugzil.la/2070927)).

| Veröffentlichungskanal | Seit Version | Standardmäßig aktiviert? |
| ---------------------- | ------------ | ------------------------ |
| Nightly                | 158          | Ja                       |
| Developer Edition      | 157          | Nein                     |
| Beta                   | 157          | Nein                     |
| Release                | 157          | Nein                     |

- `layout.css.corner-shape.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Wert `match-parent` für `quotes`

Der Wert {{cssxref("quotes", "match-parent", "#match-parent")}} der CSS-Eigenschaft {{cssxref("quotes")}} wird jetzt in Nightly unterstützt.

Dieser Wert bewirkt, dass ein Element dieselben Anführungszeichenpaare wie sein übergeordnetes Element verwendet.
Wenn der `quotes`-Wert des übergeordneten Elements eine explizite Liste von Paaren ist, verwendet das Element Anführungszeichen aus dieser Liste.
Wenn der Wert `auto` ist, verwendet das Element die Anführungszeichen für die Sprache des übergeordneten Elements.
Welches Paar aus öffnenden und schließenden Anführungszeichen verwendet wird, hängt von der Verschachtelungsebene des Zitats ab.

Die Standard-Styles von Firefox für verschachtelte {{htmlelement("q")}}-Elemente verwenden diesen Wert.
Dadurch übernimmt ein verschachteltes Zitat automatisch denselben Anführungszeichenstil wie das äußere Zitat, auch wenn es in einer anderen Sprache verfasst ist.
([Firefox-Bug 1752382](https://bugzil.la/1752382)).

| Veröffentlichungskanal | Seit Version | Standardmäßig aktiviert? |
| ---------------------- | ------------ | ------------------------ |
| Nightly                | 161          | Ja                       |
| Developer Edition      | 161          | Nein                     |
| Beta                   | 161          | Nein                     |
| Release                | 161          | Nein                     |

- `layout.css.quotes.match-parent.enabled`
  - : Zum Aktivieren auf `true` setzen.

## SVG

**In diesem Release-Zyklus gibt es keine experimentellen Funktionen.**

## MathML

### `href` für MathML-Elemente außer `<a>` deaktivieren

Wenn diese Funktion aktiviert ist, erzeugt das globale Attribut [`href`](/de/docs/Web/MathML/Reference/Global_attributes/href) für andere MathML-Elemente als `<a>` keinen Hyperlink mehr. Damit entspricht Firefox der [MathML-Core-Spezifikation](https://w3c.github.io/mathml-core/#the-a-element), die Hyperlinks nur für das `<a>`-Element definiert ([Firefox-Bug 2026848](https://bugzil.la/2026848)).

| Veröffentlichungskanal | Seit Version | Standardmäßig aktiviert? |
| ---------------------- | ------------ | ------------------------ |
| Nightly                | 151          | Ja                       |
| Developer Edition      | 151          | Nein                     |
| Beta                   | 151          | Nein                     |
| Release                | 151          | Nein                     |

- `mathml.href_link_on_non_anchor_element.disabled`
  - : Zum Aktivieren auf `true` setzen.

### Schnittstelle `MathMLAnchorElement` implementieren

Wenn diese Funktion aktiviert ist, wird das MathML-Element [`<a>`](/de/docs/Web/MathML/Reference/Element/a) im DOM korrekt durch die Schnittstelle [`MathMLAnchorElement`](/de/docs/Web/API/MathMLAnchorElement) statt durch die allgemeine Schnittstelle [`MathMLElement`](/de/docs/Web/API/MathMLElement) repräsentiert ([Firefox-Bug 2059312](https://bugzil.la/2059312)).

| Veröffentlichungskanal | Seit Version | Standardmäßig aktiviert? |
| ---------------------- | ------------ | ------------------------ |
| Nightly                | 155          | Ja                       |
| Developer Edition      | 155          | Nein                     |
| Beta                   | 155          | Nein                     |
| Release                | 155          | Nein                     |

- `mathml.a.element.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Neue Eigenschaften von `MathMLAnchorElement`

Die Schnittstelle [`MathMLAnchorElement`](/de/docs/Web/API/MathMLAnchorElement) unterstützt jetzt die Eigenschaften [`download`](/de/docs/Web/API/MathMLAnchorElement/download), [`ping`](/de/docs/Web/API/MathMLAnchorElement/ping), [`rel`](/de/docs/Web/API/MathMLAnchorElement/rel), [`relList`](/de/docs/Web/API/MathMLAnchorElement/relList) und [`referrerPolicy`](/de/docs/Web/API/MathMLAnchorElement/referrerPolicy) ([Firefox-Bug 2064612](https://bugzil.la/2064612)).

| Veröffentlichungskanal | Seit Version | Standardmäßig aktiviert? |
| ---------------------- | ------------ | ------------------------ |
| Nightly                | 159          | Ja                       |
| Developer Edition      | 159          | Nein                     |
| Beta                   | 159          | Nein                     |
| Release                | 159          | Nein                     |

- `mathml.a.element.enabled`
  - : Zum Aktivieren auf `true` setzen.

## JavaScript

### TC39-Vorschlag zu Intl.Locale-Informationen

Der [TC39-Vorschlag zu Intl.Locale-Informationen](https://github.com/tc39/proposal-intl-locale-info) wird jetzt unterstützt.
Dazu gehören alle Instanzmethoden von `Intl.Locale`, deren Namen mit „get“ beginnen: {{jsxref("Intl/Locale/getCalendars", "Intl.Locale.prototype.getCalendars()")}}, {{jsxref("Intl/Locale/getCollations", "Intl.Locale.prototype.getCollations()")}}, {{jsxref("Intl/Locale/getHourCycles", "Intl.Locale.prototype.getHourCycles()")}}, {{jsxref("Intl/Locale/getNumberingSystems", "Intl.Locale.prototype.getNumberingSystems()")}}, {{jsxref("Intl/Locale/getTextInfo", "Intl.Locale.prototype.getTextInfo()")}}, {{jsxref("Intl/Locale/getTimeZones", "Intl.Locale.prototype.getTimeZones()")}} und {{jsxref("Intl/Locale/getWeekInfo", "Intl.Locale.prototype.getWeekInfo()")}}.
([Firefox-Bug 1693576](https://bugzil.la/1693576)).

| Veröffentlichungskanal | Seit Version | Standardmäßig aktiviert? |
| ---------------------- | ------------ | ------------------------ |
| Nightly                | 152          | Nein                     |
| Developer Edition      | —            | —                        |
| Beta                   | —            | —                        |
| Release                | —            | —                        |

- `javascript.options.experimental.intl_locale_info`
  - : Zum Aktivieren in Nightly auf `true` setzen.

### Mehrere Import Maps

Unterstützung für [mehrere Import Maps](/de/docs/Web/HTML/Reference/Elements/script/type/importmap#merging_multiple_import_maps).
Sie bieten Entwicklern mehr Flexibilität beim Strukturieren und Laden von JavaScript-Modulen: Sie müssen nicht mehr alle Modulzuordnungen im Voraus kennen und in einer einzigen Import Map deklarieren, bevor Module geladen werden.
([Firefox-Bug 1916277](https://bugzil.la/1916277)).

| Veröffentlichungskanal | Seit Version | Standardmäßig aktiviert? |
| ---------------------- | ------------ | ------------------------ |
| Nightly                | 150          | Nein                     |
| Developer Edition      | 150          | Nein                     |
| Beta                   | 150          | Nein                     |
| Release                | 150          | Nein                     |

- `dom.multiple_import_maps.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Assertions für Puffergrenzen in regulären Ausdrücken

Die [Puffergrenzen-Assertions `\A`, `\z` und `\Z`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Buffer_boundary_assertion) werden jetzt unterstützt.
Mit `\A` und `\z` können Sie den Anfang beziehungsweise das Ende der gesamten Eingabe abgleichen. `\Z` gleicht das Ende der Eingabe ab und ignoriert dabei einen Zeilenabschluss.
Anders als `^` und `$` werden diese Assertions nicht vom Flag [`m`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline) beeinflusst. Sie können nur im [Unicode-bewussten Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) verwendet werden, wenn das Flag `u` oder `v` gesetzt ist.
([Firefox-Bug 2047706](https://bugzil.la/2047706)).

| Veröffentlichungskanal | Seit Version | Standardmäßig aktiviert? |
| ---------------------- | ------------ | ------------------------ |
| Nightly                | 155          | Nein                     |
| Developer Edition      | —            | —                        |
| Beta                   | —            | —                        |
| Release                | —            | —                        |

- `javascript.options.experimental.regexp_buffer_boundaries`
  - : Zum Aktivieren in Nightly auf `true` setzen.

### TC39-Vorschlag zu export `*` default

Der [TC39-Vorschlag zu export `*` default](https://github.com/tc39/proposal-export-star-default) ermöglicht es, mit [`export * from`](/de/docs/Web/JavaScript/Reference/Statements/export#re-exporting_aggregating)-Deklarationen neben den benannten Exporten eines Moduls auch dessen Standardexport erneut zu exportieren. Ohne diese Erweiterung wird der Standardexport eines Moduls bei `export * from` ausgelassen.
([Firefox-Bug 2065611](https://bugzil.la/2065611)).

Beachten Sie, dass sich dieser Vorschlag in einem sehr frühen Stadium befindet und noch geändert werden kann.

| Veröffentlichungskanal | Seit Version | Standardmäßig aktiviert? |
| ---------------------- | ------------ | ------------------------ |
| Nightly                | 157          | Nein                     |
| Developer Edition      | 157          | Nein                     |
| Beta                   | 157          | Nein                     |
| Release                | —            | —                        |

- `javascript.options.experimental.export_star_default`
  - : Zum Aktivieren auf `true` setzen.

### TC39-Vorschlag zur verzögerten Modulauswertung

Der [TC39-Vorschlag zur verzögerten Modulauswertung](https://github.com/tc39/proposal-defer-import-eval) ergänzt die Deklaration [`import defer`](/de/docs/Web/JavaScript/Reference/Statements/import/defer) und die Syntax [`import.defer()`](/de/docs/Web/JavaScript/Reference/Operators/import/defer). Ein auf diese Weise importiertes Modul wird zusammen mit seinen Abhängigkeiten im Voraus geladen. Sein Code wird jedoch erst ausgeführt, wenn zum ersten Mal auf einen seiner Exporte zugegriffen wird. So verlangsamen Module, die nicht sofort benötigt werden, den Start nicht. Module, die `await` auf oberster Ebene verwenden, werden weiterhin sofort ausgeführt ([Firefox-Bug 1952263](https://bugzil.la/1952263)).

| Veröffentlichungskanal | Seit Version | Standardmäßig aktiviert? |
| ---------------------- | ------------ | ------------------------ |
| Nightly                | 158          | Nein                     |
| Developer Edition      | —            | —                        |
| Beta                   | —            | —                        |
| Release                | —            | —                        |

- `javascript.options.experimental.defer_import_eval`
  - : Zum Aktivieren in Nightly auf `true` setzen.

## APIs

### Absturzberichte

Absturzberichte können jetzt über die [Reporting API](/de/docs/Web/API/Reporting_API) an den `default`-Endpunkt gesendet werden.
Beachten Sie, dass Firefox die Angabe von [`CrashReportContext`](/de/docs/Web/API/CrashReportContext) im Berichtskörper nicht unterstützt.
([Firefox-Bug 2036160](https://bugzil.la/2036160)).

| Veröffentlichungskanal | Seit Version | Standardmäßig aktiviert? |
| ---------------------- | ------------ | ------------------------ |
| Nightly                | 152          | Ja                       |
| Developer Edition      | 152          | Nein                     |
| Beta                   | 152          | Nein                     |
| Release                | 152          | Nein                     |

- `dom.reporting.crash.enabled`
  - : Zum Aktivieren auf `true` setzen (in Nightly standardmäßig aktiviert).

### CSS Typed Object Model Level 1

Die [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) ist in Nightly implementiert.
Sie vereinfacht die Bearbeitung von CSS-Eigenschaften, indem sie CSS-Werte als typisierte JavaScript-Objekte statt als Zeichenfolgen bereitstellt.
([Firefox-Bug 1278697](https://bugzil.la/1278697)).

| Veröffentlichungskanal | Seit Version | Standardmäßig aktiviert? |
| ---------------------- | ------------ | ------------------------ |
| Nightly                | 154          | Ja                       |
| Developer Edition      | 149          | Nein                     |
| Beta                   | 149          | Nein                     |
| Release                | 149          | Nein                     |

- `layout.css.typed-om.enabled`
  - : Zum Aktivieren auf `true` setzen.

#### Numerische CSS-Factory-Funktionen in Workern und Worklets verfügbar

Die [numerischen Factory-Funktionen](/de/docs/Web/API/CSS/factory_functions_static) des Namensraums [`CSS`](/de/docs/Web/API/CSS), beispielsweise `CSS.px()`, sind jetzt auch in Workern und Paint Worklets verfügbar und nicht mehr nur auf `Window`. Sie sind Teil der [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API). Außerhalb von Nightly muss daher zusätzlich die Einstellung `layout.css.typed-om.enabled` auf `true` gesetzt werden ([Firefox-Bug 2079188](https://bugzil.la/2079188)).

| Veröffentlichungskanal | Seit Version | Standardmäßig aktiviert? |
| ---------------------- | ------------ | ------------------------ |
| Nightly                | 159          | Nein                     |
| Developer Edition      | 159          | Nein                     |
| Beta                   | 159          | Nein                     |
| Release                | 159          | Nein                     |

- `layout.css.namespace.exposed-in-workers-and-worklets`
  - : Zum Aktivieren auf `true` setzen.
- `layout.css.typed-om.enabled`
  - : Zum Aktivieren auf `true` setzen (in Nightly standardmäßig aktiviert).

### Streaming von Anfrage-Bodys

Sie können jetzt einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) als Anfrage-Body festlegen, beispielsweise über den Konstruktor [`Request()`](/de/docs/Web/API/Request/Request) oder die Methode [`Window.fetch()`](/de/docs/Web/API/Window/fetch). Dadurch können Sie Uploads schrittweise streamen, anstatt warten zu müssen, bis der gesamte Body verfügbar ist.
([Firefox-Bug 1594633](https://bugzil.la/1594633)).

| Veröffentlichungskanal | Seit Version | Standardmäßig aktiviert? |
| ---------------------- | ------------ | ------------------------ |
| Nightly                | 158          | Ja                       |
| Developer Edition      | 158          | Nein                     |
| Beta                   | 158          | Nein                     |
| Release                | 158          | Nein                     |

- `dom.fetch.streaming_upload`
  - : Zum Aktivieren auf `true` setzen.

### Grafik: Canvas, WebGL und WebGPU

#### Farbraum für Canvas 2D

Die Option [`colorSpace`](/de/docs/Web/API/HTMLCanvasElement/getContext#colorspace) von [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) und [`OffscreenCanvas.getContext()`](/de/docs/Web/API/OffscreenCanvas/getContext) wird für `2d`-Kontexte unterstützt. [`CanvasRenderingContext2D.getContextAttributes()`](/de/docs/Web/API/CanvasRenderingContext2D/getContextAttributes) gibt den ausgewählten Farbraum zurück. Auch Bilddaten besitzen einen Farbraum, den die Eigenschaft [`ImageData.colorSpace`](/de/docs/Web/API/ImageData/colorSpace) zurückgibt. Über die Einstellung `colorSpace` im Konstruktor [`ImageData()`](/de/docs/Web/API/ImageData/ImageData) sowie in den Methoden [`createImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/createImageData) und [`getImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/getImageData) lässt sich dieser festlegen. Unterstützte Werte sind `"srgb"` und `"display-p3"`. Pixeldaten werden noch nicht zwischen Farbräumen konvertiert ([Firefox-Bug 1841326](https://bugzil.la/1841326)).

| Veröffentlichungskanal | Seit Version | Standardmäßig aktiviert? |
| ---------------------- | ------------ | ------------------------ |
| Nightly                | 160          | Nein                     |
| Developer Edition      | 160          | Nein                     |
| Beta                   | 160          | Nein                     |
| Release                | 160          | Nein                     |

- `gfx.canvas.colorspace.enabled`
  - : Zum Aktivieren auf `true` setzen.

#### WebGL: Erweiterungsentwürfe

Wenn diese Einstellung aktiviert ist, können alle derzeit im Entwurfsstadium befindlichen WebGL-Erweiterungen verwendet werden, die gerade getestet werden. Derzeit testet Firefox keine WebGL-Erweiterungen.

#### WebGPU API

Die [WebGPU API](/de/docs/Web/API/WebGPU_API) bietet Low-Level-Unterstützung für Berechnungen und Grafik-Rendering mithilfe der [Grafikprozessoreinheit](https://en.wikipedia.org/wiki/Graphics_Processing_Unit) (GPU) des Geräts oder Computers des Benutzers.
Ab Version 142 ist sie unter Windows in allen Kontexten außer Service Workern aktiviert.
Ab Version 147 ist sie unter macOS auf Apple Silicon in allen Browsing-Kontexten außer Service Workern aktiviert.
Auf anderen Plattformen, etwa Linux und macOS auf Intel-Hardware, ist sie in Nightly aktiviert.
Den Fortschritt bei dieser API können Sie unter [Firefox-Bug 1602129](https://bugzil.la/1602129) verfolgen.

| Veröffentlichungskanal | Seit Version | Standardmäßig aktiviert?                                                      |
| ---------------------- | ------------ | ----------------------------------------------------------------------------- |
| Nightly                | 141          | Ja                                                                            |
| Developer Edition      | 141          | Nein (ja unter Windows und macOS auf Apple Silicon, außer in Service Workern) |
| Beta                   | 141          | Nein (ja unter Windows und macOS auf Apple Silicon, außer in Service Workern) |
| Release                | 141          | Nein (ja unter Windows und macOS auf Apple Silicon, außer in Service Workern) |

- `dom.webgpu.enabled`
  - : Zum Aktivieren auf `true` setzen (in Nightly und unter Windows in allen Veröffentlichungskanälen aktiviert).
- `dom.webgpu.service-workers.enabled`
  - : Zum Aktivieren auf `true` setzen (in Nightly aktiviert).

### WebRTC und Medien

Zu den folgenden experimentellen Funktionen gehören Funktionen von Medien-APIs wie der [WebRTC API](/de/docs/Web/API/WebRTC_API), der [Web Audio API](/de/docs/Web/API/Web_Audio_API), der [Media Source Extensions API](/de/docs/Web/API/Media_Source_Extensions_API), der [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API) und der [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API).

#### Audio Session API

Die [Audio Session API](/de/docs/Web/API/Audio_Session_API) bietet Webanwendungen einen Mechanismus, um zu steuern, wie ihre Audioausgabe mit anderen auf einem Gerät wiedergegebenen Audiosignalen zusammenwirkt ([Firefox-Bug 2055710](https://bugzil.la/2055710)).

| Veröffentlichungskanal | Seit Version | Standardmäßig aktiviert? |
| ---------------------- | ------------ | ------------------------ |
| Nightly                | 155          | Ja                       |
| Developer Edition      | 153          | Nein                     |
| Beta                   | 153          | Nein                     |
| Release                | 153          | Nein                     |

- `dom.audio_session.enabled`
  - : Zum Aktivieren auf `true` setzen.

#### HTMLMediaElement-Eigenschaften: audioTracks und videoTracks

Durch Aktivieren dieser Funktion werden die Eigenschaften [`HTMLMediaElement.audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks) und [`HTMLMediaElement.videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks) für alle HTML-Medienelemente verfügbar. Da Firefox derzeit jedoch keine mehreren Audio- und Videospuren unterstützt, funktionieren die häufigsten Anwendungsfälle dieser Eigenschaften nicht. Deshalb sind beide standardmäßig deaktiviert. Weitere Informationen finden Sie unter [Firefox-Bug 1057233](https://bugzil.la/1057233).

| Veröffentlichungskanal | Seit Version | Standardmäßig aktiviert? |
| ---------------------- | ------------ | ------------------------ |
| Nightly                | 33           | Nein                     |
| Developer Edition      | 33           | Nein                     |
| Beta                   | 33           | Nein                     |
| Release                | 33           | Nein                     |

- `media.track.enabled`
  - : Zum Aktivieren auf `true` setzen.

#### Asynchrones Hinzufügen und Entfernen von SourceBuffer-Daten

Dadurch werden die Promise-basierten Methoden [`appendBufferAsync()`](/de/docs/Web/API/SourceBuffer/appendBufferAsync) und [`removeAsync()`](/de/docs/Web/API/SourceBuffer/removeAsync) zum Hinzufügen und Entfernen von Daten in Medienquellpuffern zur Schnittstelle [`SourceBuffer`](/de/docs/Web/API/SourceBuffer) hinzugefügt. Weitere Informationen finden Sie unter [Firefox-Bug 1280613](https://bugzil.la/1280613) und [Firefox-Bug 778617](https://bugzil.la/778617).

| Veröffentlichungskanal | Seit Version | Standardmäßig aktiviert? |
| ---------------------- | ------------ | ------------------------ |
| Nightly                | 62           | Nein                     |
| Developer Edition      | 62           | Nein                     |
| Beta                   | 62           | Nein                     |
| Release                | 62           | Nein                     |

- `media.mediasource.experimental.enabled`
  - : Zum Aktivieren auf `true` setzen.

#### Strenge der AVIF-Konformitätsprüfung

Mit der Einstellung `image.avif.compliance_strictness` können Sie steuern, wie _streng_ [AVIF](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image)-Bilder verarbeitet werden.
So können Firefox-Benutzer Bilder anzeigen, die in einigen anderen Browsern gerendert werden, auch wenn sie nicht vollständig konform sind.

| Veröffentlichungskanal | Seit Version | Standardwert |
| ---------------------- | ------------ | ------------ |
| Nightly                | 92           | 1            |
| Developer Edition      | 92           | 1            |
| Beta                   | 92           | 1            |
| Release                | 92           | 1            |

- `image.avif.compliance_strictness`
  - : Numerischer Wert, der die _Strenge_ angibt. Zulässige Werte sind:
    - `0`: Großzügig. Bilder werden trotz Verstößen gegen Empfehlungen („should“) und Anforderungen („shall“) der Spezifikation akzeptiert, sofern sie sicher oder eindeutig interpretiert werden können.
    - `1` **(Standardwert)**: Gemischt. Verstöße gegen Anforderungen („shall“) werden abgelehnt, Verstöße gegen Empfehlungen („should“) jedoch zugelassen.
    - `2`: Streng. Jegliche Verstöße gegen festgelegte Anforderungen oder Empfehlungen werden abgelehnt.

### WebVR API (deaktiviert)

Die veraltete [WebVR API](/de/docs/Web/API/WebVR_API) soll entfernt werden.
Sie ist in allen Versionen standardmäßig deaktiviert ([Firefox-Bug 1750902](https://bugzil.la/1750902)).

| Veröffentlichungskanal | Entfernt in Version | Standardmäßig aktiviert? |
| ---------------------- | ------------------- | ------------------------ |
| Nightly                | 98                  | Nein                     |
| Developer Edition      | 98                  | Nein                     |
| Beta                   | 98                  | Nein                     |
| Release                | 98                  | Nein                     |

- `dom.vr.enabled`
  - : Zum Aktivieren auf `true` setzen.

### GeometryUtils-Methoden: convertPointFromNode(), convertRectFromNode() und convertQuadFromNode()

Die `GeometryUtils`-Methoden `convertPointFromNode()`, `convertRectFromNode()` und `convertQuadFromNode()` ordnen den angegebenen Punkt, das Rechteck oder das Viereck von dem [`Node`](/de/docs/Web/API/Node), für den sie aufgerufen werden, einem anderen Knoten zu. (Weitere Informationen finden Sie unter [Firefox-Bug 918189](https://bugzil.la/918189).)

| Veröffentlichungskanal | Seit Version | Standardmäßig aktiviert? |
| ---------------------- | ------------ | ------------------------ |
| Nightly                | 31           | Nein                     |
| Developer Edition      | 31           | Nein                     |
| Beta                   | 31           | Nein                     |
| Release                | 31           | Nein                     |

- `layout.css.convertFromNode.enabled`
  - : Zum Aktivieren auf `true` setzen.

### GeometryUtils-Methode: getBoxQuads()

Die `GeometryUtils`-Methode `getBoxQuads()` gibt die CSS-Boxen für einen [`Node`](/de/docs/Web/API/Node) relativ zu einem beliebigen anderen Knoten oder Viewport zurück. (Weitere Informationen finden Sie unter [Firefox-Bug 917755](https://bugzil.la/917755).)

| Veröffentlichungskanal | Seit Version | Standardmäßig aktiviert? |
| ---------------------- | ------------ | ------------------------ |
| Nightly                | 31           | Nein                     |
| Developer Edition      | 31           | Nein                     |
| Beta                   | 31           | Nein                     |
| Release                | 31           | Nein                     |

- `layout.css.getBoxQuads.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Payment Request API

#### Grundlegende Zahlungsabwicklung

Die [Payment Request API](/de/docs/Web/API/Payment_Request_API) unterstützt die Abwicklung webbasierter Zahlungen innerhalb von Webinhalten oder Apps. Aufgrund eines Fehlers, der bei Tests der Benutzeroberfläche auftrat, haben wir beschlossen, die Veröffentlichung dieser API zu verschieben, während mögliche Änderungen an der API diskutiert werden. Die Arbeit daran wird fortgesetzt. (Weitere Informationen finden Sie unter [Firefox-Bug 1318984](https://bugzil.la/1318984).)

| Veröffentlichungskanal | Seit Version | Standardmäßig aktiviert? |
| ---------------------- | ------------ | ------------------------ |
| Nightly                | 55           | Nein                     |
| Developer Edition      | 55           | Nein                     |
| Beta                   | 55           | Nein                     |
| Release                | 55           | Nein                     |

- `dom.payments.request.enabled`
  - : Zum Aktivieren auf `true` setzen.
- `dom.payments.request.supportedRegions`
  - : Ländercodes als durch Kommas getrennte Positivliste von Regionen (z. B. `US,CA`).

### Web Share API

Die [Web Share API](/de/docs/Web/API/Web_Share_API) ermöglicht es, Dateien, URLs und andere Daten von einer Website aus zu teilen.
Diese Funktion ist unter Android in allen Versionen aktiviert, auf Desktop-Systemen jedoch nur über eine Einstellung verfügbar, sofern unten nichts anderes angegeben ist.

| Veröffentlichungskanal | Geändert in Version | Standardmäßig aktiviert?                    |
| ---------------------- | ------------------- | ------------------------------------------- |
| Nightly                | 71                  | Nein (Standard). Ja (Windows ab Version 92) |
| Developer Edition      | 71                  | Nein                                        |
| Beta                   | 71                  | Nein                                        |
| Release                | 71                  | Nein (Desktop). Ja (Android).               |

- `dom.webshare.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Notifications API

Für Benachrichtigungen ist die Eigenschaft [`requireInteraction`](/de/docs/Web/API/Notification/requireInteraction) auf Windows-Systemen und in der Nightly-Version standardmäßig auf „true“ gesetzt ([Firefox-Bug 1794475](https://bugzil.la/1794475)).

| Veröffentlichungskanal | Geändert in Version | Standardmäßig aktiviert? |
| ---------------------- | ------------------- | ------------------------ |
| Nightly                | 117                 | Ja                       |
| Developer Edition      | 117                 | Nein                     |
| Beta                   | 117                 | Nein                     |
| Release                | 117                 | Nur unter Windows        |

- `dom.webnotifications.requireinteraction.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Option `navigate` für Benachrichtigungen

Die Option `navigate` des Konstruktors [`Notification()`](/de/docs/Web/API/Notification/Notification) und von [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification) nimmt eine URL entgegen, die geöffnet wird, wenn der Benutzer auf die Benachrichtigung klickt. Sie benötigen daher keinen Klick-Handler mehr, nur um eine Seite zu öffnen. Die neue schreibgeschützte Eigenschaft [`Notification.navigate`](/de/docs/Web/API/Notification/navigate) gibt diese URL zurück. Wenn die Option gesetzt ist, werden die Ereignisse [`click`](/de/docs/Web/API/Notification/click_event) und [`notificationclick`](/de/docs/Web/API/ServiceWorkerGlobalScope/notificationclick_event) für diese Benachrichtigung nicht mehr ausgelöst. Jeder Eintrag in der Option [`actions`](/de/docs/Web/API/Notification/actions) kann eine eigene `navigate`-URL festlegen. Eine Aktionsschaltfläche ohne eigene URL löst weiterhin `notificationclick` aus, statt die URL der Benachrichtigung zu verwenden.
([Firefox-Bug 2066184](https://bugzil.la/2066184)).

| Veröffentlichungskanal | Seit Version | Standardmäßig aktiviert? |
| ---------------------- | ------------ | ------------------------ |
| Nightly                | 157          | Nein                     |
| Developer Edition      | 157          | Nein                     |
| Beta                   | 157          | Nein                     |
| Release                | 157          | Nein                     |

- `dom.webnotifications.navigate.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Container Timing API

Die [Container Timing API](/de/docs/Web/API/PerformanceContainerTiming) meldet, wann die Inhalte eines Container-Elements gezeichnet werden. So können Sie die Renderzeit eines Seitenbereichs statt des gesamten Viewports messen.
([Firefox-Bug 1940240](https://bugzil.la/1940240)).

| Veröffentlichungskanal | Geändert in Version | Standardmäßig aktiviert? |
| ---------------------- | ------------------- | ------------------------ |
| Nightly                | 156                 | Nein                     |
| Developer Edition      | 156                 | Nein                     |
| Beta                   | 156                 | Nein                     |
| Release                | 156                 | Nein                     |

- `dom.enable_container_timing`
  - : Zum Aktivieren auf `true` setzen.

### Schlüsselkapselung in Web Crypto

Die [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) unterstützt ML-KEM, einen Algorithmus, mit dem sich zwei Parteien auf einen gemeinsamen geheimen Schlüssel einigen können und der auch gegen Angriffe durch Quantencomputer sicher bleiben soll. Eine Partei übergibt den öffentlichen Schlüssel der anderen Partei an die [`SubtleCrypto`](/de/docs/Web/API/SubtleCrypto)-Methoden `encapsulateKey()` oder `encapsulateBits()`. Diese geben den gemeinsamen Schlüssel sowie einen Chiffretext zurück, der an die andere Partei gesendet wird. Die andere Partei übergibt diesen Chiffretext und ihren eigenen privaten Schlüssel an `decapsulateKey()` oder `decapsulateBits()`, um denselben gemeinsamen Schlüssel zu erhalten.

Unterstützt werden die Algorithmusnamen `ML-KEM-512`, `ML-KEM-768` und `ML-KEM-1024` sowie die entsprechenden [`usages`](/de/docs/Web/API/CryptoKey/usages) und die neuen Schlüsselformate `raw-public` und `raw-seed` für [`SubtleCrypto.importKey()`](/de/docs/Web/API/SubtleCrypto/importKey) und [`SubtleCrypto.exportKey()`](/de/docs/Web/API/SubtleCrypto/exportKey) ([Firefox-Bug 1943614](https://bugzil.la/1943614)).

| Veröffentlichungskanal | Seit Version | Standardmäßig aktiviert? |
| ---------------------- | ------------ | ------------------------ |
| Nightly                | 157          | Ja                       |
| Developer Edition      | 157          | Nein                     |
| Beta                   | 157          | Nein                     |
| Release                | 157          | Nein                     |

- `dom.webcrypto.encapsulation.enabled`
  - : Zum Aktivieren auf `true` setzen.

## Sicherheit und Datenschutz

### Kennzeichnung unsicherer Seiten

Die beiden Einstellungen `security.insecure_connection_text_*` fügen in der Adressleiste neben dem herkömmlichen Schlosssymbol den Texthinweis „Nicht sicher“ hinzu, wenn eine Seite unsicher geladen wird, also über {{Glossary("HTTP", "HTTP")}} statt über {{Glossary("HTTPS", "HTTPS")}}. Die Einstellung `browser.urlbar.trimHttps` entfernt das Präfix `https:` aus URLs in der Adressleiste. Weitere Informationen finden Sie unter [Firefox-Bug 1853418](https://bugzil.la/1853418).

| Veröffentlichungskanal | Seit Version | Standardmäßig aktiviert? |
| ---------------------- | ------------ | ------------------------ |
| Nightly                | 121          | Ja                       |
| Developer Edition      | 60           | Nein                     |
| Beta                   | 60           | Nein                     |
| Release                | 60           | Nein                     |

- `security.insecure_connection_text.enabled`
  - : Auf `true` setzen, um den Texthinweis im normalen Surfmodus zu aktivieren.
- `security.insecure_connection_text.pbmode.enabled`
  - : Auf `true` setzen, um den Texthinweis im privaten Surfmodus zu aktivieren.
- `browser.urlbar.trimHttps`
  - : Auf `true` setzen, um das Präfix `https:` aus URLs in der Adressleiste zu entfernen.

### Inhalte für Erwachsene mit `<meta name="rating">` einschränken

Das nicht standardisierte Element [`<meta name="rating">`](/de/docs/Web/HTML/Reference/Elements/meta) kann in eine Webseite eingebunden werden, um deren Inhalte als eingeschränkt beziehungsweise für Erwachsene bestimmt zu kennzeichnen. Zum Zeitpunkt der Erstellung dieses Textes gibt es zwei mögliche Werte für `content`: `adult` ([von Google definiert](https://developers.google.com/search/docs/specialty/explicit/guidelines#add-metadata)) und `RTA-5042-1996-1400-1577-RTA` ([von ASACP definiert](https://www.rtalabel.org/?content=howto#top)). Beide haben dieselbe Wirkung; künftig können weitere Optionen hinzukommen.

Die folgenden `<meta>`-Elemente sind gleichwertig:

```html
<meta name="rating" content="adult" />
<meta name="rating" content="RTA-5042-1996-1400-1577-RTA" />
```

Browser, die dieses Element erkennen, können Maßnahmen ergreifen, um den Zugriff auf die Inhalte einzuschränken. Die Firefox-Implementierung ersetzt die Seite durch den Inhalt von `about:restricted`. Dort wird dem Benutzer erklärt, dass er versucht, eingeschränkte Inhalte aufzurufen, warum er sie nicht ansehen kann, und eine Schaltfläche angeboten, mit der er zur vorherigen Seite zurückkehren kann.

Weitere Informationen finden Sie unter [Firefox-Bug 1991135](https://bugzil.la/1991135).

| Veröffentlichungskanal | Seit Version | Standardmäßig aktiviert? |
| ---------------------- | ------------ | ------------------------ |
| Nightly                | 146          | Nein                     |
| Developer Edition      | 146          | Nein                     |
| Beta                   | 146          | Nein                     |
| Release                | 146          | Nein                     |

- `security.restrict_to_adults.always`
  - : Auf `true` setzen, um den Zugriff auf Webseiten einzuschränken, die sich durch ein `<meta name="rating">`-Element selbst als Inhalte für Erwachsene kennzeichnen.
- `security.restrict_to_adults.respect_platform`
  - : Auf `true` setzen, um den Zugriff auf Webseiten, die sich durch ein `<meta name="rating">`-Element selbst als Inhalte für Erwachsene kennzeichnen, nur dann einzuschränken, wenn im zugrunde liegenden Betriebssystem entsprechende Einstellungen zur elterlichen Kontrolle aktiviert sind (beispielsweise wenn die macOS-Einstellungen für _Inhalt & Datenschutz_ explizite Webinhalte einschränken).

### Permissions Policy / Feature Policy

Mit der [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) können Webentwickler bestimmte Funktionen und APIs im Browser gezielt aktivieren, deaktivieren und in ihrem Verhalten verändern. Sie ähnelt CSP, steuert jedoch Funktionen statt sicherheitsbezogenen Verhaltens.
In Firefox ist sie unter dem Namen **Feature Policy** implementiert, der in einer früheren Version der Spezifikation verwendet wurde.

Beachten Sie, dass unterstützte Richtlinien über das Attribut [`allow`](/de/docs/Web/HTML/Reference/Elements/iframe#allow) von `<iframe>`-Elementen festgelegt werden können, auch wenn die Benutzereinstellung nicht aktiviert ist.

| Veröffentlichungskanal | Seit Version | Standardmäßig aktiviert? |
| ---------------------- | ------------ | ------------------------ |
| Nightly                | 65           | Nein                     |
| Developer Edition      | 65           | Nein                     |
| Beta                   | 65           | Nein                     |
| Release                | 65           | Nein                     |

- `dom.security.featurePolicy.header.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Privacy Preserving Attribution API (PPA)

Die [PPA API](https://support.mozilla.org/en-US/kb/privacy-preserving-attribution) bietet mit dem neuen Objekt `navigator.privateAttribution` und dessen Methoden `saveImpression()` und `measureConversion()` eine Alternative zum Tracking von Benutzern bei der Zuordnung von Werbewirkung. Weitere Informationen zu PPA finden Sie in der [ursprünglichen Erläuterung](https://github.com/mozilla/explainers/tree/main/archive/ppa-experiment) und im [Spezifikationsvorschlag](https://w3c.github.io/ppa/). Dieses Experiment kann für Websites über einen [Origin Trial](https://wiki.mozilla.org/Origin_Trials) oder im Browser durch Setzen der Einstellung auf `1` aktiviert werden ([Firefox-Bug 1900929](https://bugzil.la/1900929)).

| Veröffentlichungskanal | Seit Version | Standardmäßig aktiviert? |
| ---------------------- | ------------ | ------------------------ |
| Nightly                | 128          | Nein                     |
| Developer Edition      | 128          | Nein                     |
| Beta                   | 128          | Nein                     |
| Release                | 128          | Nein                     |

- `dom.origin-trials.private-attribution.state`
  - : Zum Aktivieren auf `true` setzen.

## HTTP

### Integritätsrichtlinie für Stylesheet-Ressourcen

Die HTTP-Header {{httpheader("Integrity-Policy")}} und {{httpheader("Integrity-Policy-Report-Only")}} werden jetzt für Style-Ressourcen unterstützt. Damit können Websites [Integritätsgarantien für Unterressourcen](/de/docs/Web/Security/Defenses/Subresource_Integrity) für Styles entweder durchsetzen oder lediglich Verstöße gegen die Richtlinie melden.
Beachten Sie, dass Firefox Reporting-Endpunkte ignoriert und Verstöße in der Entwicklerkonsole protokolliert.
Bei Verwendung von `Integrity-Policy` blockiert der Browser das Laden von Styles, auf die in einem {{HTMLElement("link")}}-Element mit [`rel="stylesheet"`](/de/docs/Web/HTML/Reference/Attributes/rel#stylesheet) verwiesen wird, wenn entweder das Attribut [`integrity`](/de/docs/Web/HTML/Reference/Elements/script#integrity) fehlt oder der Integritäts-Hash nicht mit der Ressource auf dem Server übereinstimmt.
([Firefox-Bug 1976656](https://bugzil.la/1976656)).

| Veröffentlichungskanal | Seit Version | Standardmäßig aktiviert? |
| ---------------------- | ------------ | ------------------------ |
| Nightly                | 142          | Nein                     |
| Developer Edition      | 142          | Nein                     |
| Beta                   | 142          | Nein                     |
| Release                | 142          | Nein                     |

- `security.integrity_policy.stylesheet.enabled`
  - : Zum Aktivieren auf `true` setzen.

### Idempotency-Key

Mit dem HTTP-Anfrageheader {{httpheader("Idempotency-Key")}} kann clientseitiger Website-Code {{HTTPMethod("POST")}}- oder {{HTTPMethod("PATCH")}}-Anfragen {{Glossary("idempotent", "idempotent")}} machen, wenn er zusammen mit einem Server verwendet wird, der diese Funktion unterstützt.
Laut Spezifikation sollte der Server dokumentieren und bekannt geben, welche Endpunkte diesen Header benötigen, welches Format der Schlüssel haben muss und welche Fehlerantworten zu erwarten sind.

Firefox fügt den Header _automatisch_ mit einem eindeutigen Schlüssel für jede neue `POST`-Anfrage hinzu, sofern er nicht bereits vom clientseitigen Code der Seite hinzugefügt wurde.
Dies vereinfacht den clientseitigen Code für die Zusammenarbeit mit Servern, die diese Funktion unterstützen.

([Firefox-Bug 1830022](https://bugzil.la/1830022)).

| Veröffentlichungskanal | Seit Version | Standardmäßig aktiviert? |
| ---------------------- | ------------ | ------------------------ |
| Nightly                | 135          | Nein                     |
| Developer Edition      | 135          | Nein                     |
| Beta                   | 135          | Nein                     |
| Release                | 135          | Nein                     |

- `network.http.idempotencyKey.enabled`
  - : Zum Aktivieren auf `true` setzen.

### SameSite=Lax als Standardwert

[`SameSite`-Cookies](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) haben standardmäßig den Wert `Lax`.
Bei dieser Einstellung werden Cookies nur gesendet, wenn ein Benutzer zur Website des Ursprungs navigiert, nicht aber bei websiteübergreifenden Unteranfragen, etwa zum Laden von Bildern oder Frames in eine fremde Website.
Weitere Informationen finden Sie unter [Firefox-Bug 1617609](https://bugzil.la/1617609).

| Veröffentlichungskanal | Seit Version | Standardmäßig aktiviert? |
| ---------------------- | ------------ | ------------------------ |
| Nightly                | 69           | Nein                     |
| Developer Edition      | 69           | Nein                     |
| Beta                   | 69           | Nein                     |
| Release                | 69           | Nein                     |

- `network.cookie.sameSite.laxByDefault`
  - : Zum Aktivieren auf `true` setzen.

### Platzhalter in Access-Control-Allow-Headers umfasst Authorization nicht

[`Access-Control-Allow-Headers`](/de/docs/Web/HTTP/Reference/Headers/Access-Control-Allow-Headers) ist ein Antwortheader auf eine {{Glossary("Preflight_request", "CORS-Preflight-Anfrage")}}. Er gibt an, welche Anfrageheader in der endgültigen Anfrage enthalten sein dürfen.
Die Antwortdirektive kann einen Platzhalter (`*`) enthalten. Dieser gibt an, dass die endgültige Anfrage alle Header außer dem `Authorization`-Header enthalten darf.

Standardmäßig fügt Firefox den `Authorization`-Header nach einer Antwort mit `Access-Control-Allow-Headers: *` dennoch in die endgültige Anfrage ein.
Setzen Sie die Einstellung auf `false`, um sicherzustellen, dass Firefox den `Authorization`-Header nicht einfügt.
Weitere Informationen finden Sie unter [Firefox-Bug 1687364](https://bugzil.la/1687364).

| Veröffentlichungskanal | Seit Version | Standardmäßig aktiviert? |
| ---------------------- | ------------ | ------------------------ |
| Nightly                | 115          | Ja                       |
| Developer Edition      | 115          | Ja                       |
| Beta                   | 115          | Ja                       |
| Release                | 115          | Ja                       |

- `network.cors_preflight.authorization_covered_by_wildcard`
  - : Zum Aktivieren auf `true` setzen.

## Entwicklerwerkzeuge

Die Entwicklerwerkzeuge von Mozilla werden ständig weiterentwickelt. Wir experimentieren mit neuen Ideen, fügen Funktionen hinzu und testen sie in den Kanälen Nightly und Developer Edition, bevor sie in Beta und Release übernommen werden. Nachfolgend sind die derzeitigen experimentellen Funktionen der Entwicklerwerkzeuge aufgeführt.

**In diesem Release-Zyklus gibt es keine experimentellen Funktionen.**

## Siehe auch

- [Versionshinweise für Firefox-Entwickler](/de/docs/Mozilla/Firefox/Releases)
- [Firefox Nightly](https://www.firefox.com/en-US/channel/desktop/)
- [Firefox Developer Edition](https://www.firefox.com/en-US/channel/desktop/developer/)
