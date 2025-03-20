---
title: Verwendung von CSS-Eingrenzung
slug: Web/CSS/CSS_containment/Using_CSS_containment
l10n:
  sourceCommit: 6d55eec58e38583da60aa635d41393ad051d1c6d
---

{{CSSRef}}

CSS-Eingrenzung verbessert die Performance von Webseiten, indem sie dem Browser erlaubt, einen Teilbaum der Seite vom Rest der Seite zu isolieren. Wenn der Browser weiß, dass ein Teil der Seite unabhängig vom Rest des Inhalts ist, kann das Rendering optimiert und die Performance verbessert werden.

Die Eigenschaften {{cssxref("contain")}} und {{cssxref("content-visibility")}} ermöglichen es Entwicklern, Benutzeragenten mitzuteilen, ob ein Element seine Inhalte überhaupt rendern soll und ob es seine Inhalte rendern soll, wenn es außerhalb des sichtbaren Bereichs liegt. Der Benutzeragent wendet dann bei Bedarf eine Eingrenzung auf Elemente an und verzögert möglicherweise das Layout und Rendering, bis es benötigt wird.

Dieser Leitfaden beschreibt die grundlegenden Ziele der CSS-Eingrenzung und wie Sie `contain` und `content-visibility` für ein besseres Benutzererlebnis nutzen können.

## Einfaches Beispiel

Webseiten enthalten oft mehrere Abschnitte, die logisch unabhängig voneinander sind. CSS-Eingrenzung ermöglicht es ihnen, beim Rendering wirklich unabhängig voneinander behandelt zu werden.

Blogs enthalten zum Beispiel normalerweise mehrere Artikel, die jeweils eine Überschrift und Inhalte enthalten, wie im untenstehenden Markup.

```html
<h1>My blog</h1>
<article>
  <h2>Heading of a nice article</h2>
  <p>Content here.</p>
</article>
<article>
  <h2>Another heading of another article</h2>
  <p>More content here.</p>
</article>
```

Mit CSS wenden wir die Eigenschaft {{cssxref("contain")}} mit dem Wert `content` auf jeden Artikel an. Der Wert `content` ist eine Abkürzung für `contain: layout paint style`:

```css
article {
  contain: content;
}
```

Logisch ist jeder Artikel unabhängig von den anderen Artikeln auf der Seite. Diese Information ist etwas, das dem Webentwickler, der die Seite erstellt, normalerweise bekannt und wahrscheinlich ziemlich offensichtlich ist. Browser wissen jedoch nicht, wie Ihr Inhalt beabsichtigt ist und können nicht davon ausgehen, dass ein Artikel oder ein anderer Inhaltsabschnitt vollständig eigenständig ist.

Diese Eigenschaft bietet eine Möglichkeit, dies dem Browser zu erklären und ihm die ausdrückliche Erlaubnis zu geben, Performance-Optimierungen vorzunehmen. Sie teilt dem Browser mit, dass das interne Layout des Elements vollständig vom Rest der Seite getrennt ist und dass alles über das Element innerhalb seiner Begrenzungen gezeichnet wird. Nichts kann sichtbar überlaufen.

Indem wir `contain: content` auf jedes `<article>` setzen, haben wir dies angegeben; wir haben dem Browser mitgeteilt, dass jeder Artikel unabhängig ist. Der Browser kann dann diese Information verwenden, um Entscheidungen darüber zu treffen, wie jeder Inhalts-`<article>` gerendert wird. Zum Beispiel könnte er Artikel, die außerhalb des sichtbaren Bereichs liegen, nicht rendern.

Wenn zusätzliche Artikel am Ende der Seite angehängt werden, muss der Browser das Layout nicht neu berechnen oder den vorhergehenden Inhalt neu zeichnen; er muss auch keinen Bereich außerhalb des Teilbaums des einschließenden Elements berühren. Wenn jedoch Boxmodell-Eigenschaften abhängig sind, muss der Browser das Layout neu berechnen und neu zeichnen. Wenn das `<article>` zum Beispiel so gestylt ist, dass seine Größe von seinem Inhalt abhängt (z.B. mit `height: auto`), muss der Browser seine Größenänderung berücksichtigen.

## Schlüsselkonzepte und Terminologie

### `contain` Werte

Es gibt vier Arten der Eingrenzung: Layout, Paint, Größe und Style. Verwenden Sie die Eigenschaft {{cssxref("contain")}}, um die Art oder die Arten anzugeben, die Sie auf ein Element anwenden möchten, indem Sie eine beliebige Kombination dieser Typen einfügen.

#### Layout-Eingrenzung

```css
article {
  contain: layout;
}
```

Das Layout umfasst normalerweise das gesamte Dokument, was bedeutet, dass, wenn Sie ein Element verschieben, das gesamte Dokument so behandelt werden muss, als könnten sich Dinge überallhin verschoben haben. Indem Sie `contain: layout` verwenden, können Sie dem Browser mitteilen, dass er nur dieses Element überprüfen muss – alles innerhalb des Elements ist auf dieses Element beschränkt und beeinflusst nicht den Rest der Seite, wobei die begrenzende Box einen unabhängigen [Formatierungskontext](/de/docs/Web/CSS/CSS_display/Introduction_to_formatting_contexts) darstellt.

Zusätzlich:

- {{cssxref("float")}}-Layout wird unabhängig innerhalb des angegebenen Elements durchgeführt.
- Ränder kollabieren nicht über eine Layout-Eingrenzungsgrenze hinweg.
- Der Layout-Container ist ein [einschließender Block](/de/docs/Web/CSS/CSS_display/Containing_block) für `absolute`- und `fixed`-positionierte Nachkommen.
- Die einschließende Box erstellt einen [Stapelkontext](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context), daher kann {{cssxref("z-index")}} verwendet werden.

> [!NOTE]
> Die `style`- und `layout`-Werte von `contain` werden automatisch angewendet, wenn die Eigenschaften {{cssxref("container-type")}} und {{cssxref("container-name")}} verwendet werden.

#### Paint-Eingrenzung

```css
article {
  contain: paint;
}
```

Paint-Eingrenzung schneidet im Grunde die Box an der Polsterrandkante der [Hauptbox](/de/docs/Web/CSS/CSS_display/Visual_formatting_model#the_principal_box) ab. Es kann keinen sichtbaren Überlauf geben. Die gleichen zusätzlichen Anmerkungen gelten für die `paint`-Eingrenzung wie für die `layout`-Eingrenzung (siehe oben).

Ein weiterer Vorteil ist, dass der Browser, wenn das Element mit angewendeter Eingrenzung außerhalb des sichtbaren Bereichs liegt, seine Kindelemente nicht zeichnen muss — diese sind auch außerhalb des sichtbaren Bereichs, da sie vollständig von dieser Box enthalten sind.

#### Größen-Eingrenzung

```css
article {
  contain: size;
}
```

Größen-Eingrenzung bietet keine großen Performance-Optimierungen, wenn sie allein verwendet wird. Die Größen-Eingrenzung bedeutet jedoch, dass die Größe der Kinder des größenbegrenzten Elements dessen Größe selbst nicht beeinflussen kann — seine Größe wird berechnet, als ob es keine Kinder hätte.

Wenn Sie `contain: size` auf ein Element anwenden, müssen Sie die Größe des Elements mithilfe von {{cssxref("contain-intrinsic-size")}} oder den Langform-Eigenschaften {{cssxref("contain-intrinsic-width")}} und {{cssxref("contain-intrinsic-height")}} festlegen, in dieser Reihenfolge. Wenn keine Größe festgelegt ist, besteht das Risiko, dass das Element in den meisten Fällen auf eine Größe von null reduziert wird.

```css
article {
  contain: size;
  contain-intrinsic-size: 100vw auto;
}
```

#### Stil-Eingrenzung

```css
article {
  contain: style;
}
```

Trotz des Namens bietet die Stil-Eingrenzung keine in sich geschlossenen Stile, wie sie mit dem [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) oder {{cssxref("@scope")}} erreichbar wären.
Der Hauptanwendungsfall für den `style`-Wert ist die Vermeidung von Situationen, in denen ein [CSS-Zähler](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters) in einem Element geändert werden könnte, was dann den Rest des Baumes beeinflussen könnte.

Die Verwendung von `contain: style` stellt sicher, dass die Eigenschaften {{cssxref("counter-increment")}} und {{cssxref("counter-set")}} neue Zähler erstellen, die nur auf diesen Teilbaum beschränkt sind.

Sie können mehr als einen Eingrenzungstyp einbeziehen, indem Sie mehrere durch Leerzeichen getrennte Werte wie `contain: layout paint` angeben oder eine der beiden [Sonderwerte](#sonderwerte) verwenden.

#### Sonderwerte

Es gibt zwei Sonderwerte von `contain`, die als Abkürzung für die ersten drei oder alle vier Eingrenzungsarten dienen:

- `content`
- `strict`

Den ersten haben wir bereits im obigen Beispiel behandelt. Die Verwendung von `contain: content` aktiviert `layout`-, `paint`- und `style`-Eingrenzung. Da `size` weggelassen wird, ist es ein sicherer Wert, der weit verbreitet angewendet werden kann.

Die Deklaration `contain: strict`, die sich genauso verhält wie die Deklaration `contain: size layout paint style` (die vier durch Leerzeichen getrennte Werte enthält), bietet die größtmögliche Eingrenzung. Sie ist riskanter zu verwenden, da sie die Größen-Eingrenzung anwendet; das Risiko besteht, dass eine Box aufgrund der Abhängigkeit von der Größe ihrer Kinder am Ende auf null verkleinert wird.

Um dieses Risiko zu vermeiden, setzen Sie immer eine Größe fest, wenn Sie `strict` verwenden:

```css
article {
  contain: strict;
  contain-intrinsic-size: 80vw auto;
}
```

Das obige entspricht:

```css
article {
  contain: size layout paint style;
  contain-intrinsic-size: 80vw auto;
}
```

### `content-visibility`

Wenn Sie viele Inhalte haben, die von einer starken Eingrenzung profitieren würden und oft außerhalb des sichtbaren Bereichs liegen — zum Beispiel wenn alle Ihre Blogbeiträge auf den Blog-Startseiten als unendlich scrollbarer Blog sichtbar sind — kann `content-visibility: auto` verwendet werden, um alle Eingrenzungen auf einmal anzuwenden.

Die Eigenschaft {{cssxref("content-visibility")}} steuert, ob ein Element seine Inhalte überhaupt rendert, und erzwingt gleichzeitig eine starke Einstellung von Eingrenzungen, wodurch Benutzeragenten möglicherweise große Mengen Layout- und Rendering-Arbeit weggelassen werden können, bis sie benötigt werden. Sie ermöglicht es dem Benutzeragenten, die Rendering-Arbeit eines Elements (einschließlich Layout und Zeichnung) zu überspringen, bis sie benötigt wird — was das anfängliche Laden der Seite viel schneller macht.

Ihre möglichen Werte sind:

- `visible`: Das Standardverhalten — die Inhalte eines Elements werden wie gewohnt layoutet und gerendert.
- `hidden`: Das Element [überspringt seine Inhalte](#inhalt_wird_übersprungen). Die übersprungenen Inhalte werden nicht für Benutzeragentenfunktionen wie Seitensuche, Tabulatornavigationsreihenfolge usw. zugänglich sein, noch auswählbar oder fokussierbar.
- `auto`: Das Element aktiviert Layout-, Stil- und Paint-Eingrenzungen, als ob `contain: content` gesetzt wäre. Wenn das Element nicht [für den Benutzer relevant](#relevanz_für_den_benutzer) ist, werden seine Inhalte ebenfalls übersprungen. Anders als bei `hidden` sind die übersprungenen Inhalte immer noch für Benutzerinteraktionen verfügbar, bleiben fokussierbar, auswählbar, in der regulären Tabellierreihenfolge und für die inhaltliche Suche zugänglich.

### Relevanz für den Benutzer

Benutzeragenten haben ein Konzept von Inhalten, die [für den Benutzer relevant](https://drafts.csswg.org/css-contain/#relevant-to-the-user) sind. Ein Element wird "für den Benutzer relevant", wenn eines der folgenden Kriterien erfüllt ist:

- Das Element erscheint im Viewport oder in einem benutzeragentendefinierten Rand um den Viewport (50% der Viewport-Dimensionen, um der Anwendung Zeit zu geben, sich auf Änderungen der Sichtbarkeit des Elements vorzubereiten).
- Das Element oder seine Inhalte erhalten den Fokus.
- Das Element oder seine Inhalte werden ausgewählt, zum Beispiel durch Ziehen über den Text mit dem Mauszeiger oder durch eine andere Hervorhebungsoperation.
- Das Element oder seine Inhalte werden in die {{Glossary("top_layer", "obere Ebene")}} platziert.

Wenn `content-visibility: auto` gesetzt ist und der Browser feststellt, dass der Inhalt für den Benutzer relevant ist, wird der Browser diesen Inhalt rendern.

### Inhalt wird übersprungen

Wenn Sie `content-visibility: hidden` auf ein Element setzen, teilen Sie dem Browser mit, dass es für den Benutzer nicht relevant ist und daher [sein Inhalt übersprungen](https://drafts.csswg.org/css-contain/#skips-its-contents) und nicht gerendert werden soll. Dies hilft, die Performance zu verbessern.

Der Browser wird auch den Inhalt eines Elements überspringen, wenn `content-visibility: auto` darauf gesetzt ist und der Browser feststellt, dass sein Inhalt _nicht_ für den Benutzer relevant ist.

Wenn ein Element seinen Inhalt überspringt:

- Es hat Layout-, Stil-, Paint- und Größeneingrenzung aktiviert.
- Sein Inhalt wird nicht gezeichnet, als ob {{cssxref("visibility", "visibility: hidden")}} darauf gesetzt wäre.
- Sein Inhalt erhält keine Zeigereignisse, als ob {{cssxref("pointer-events", "pointer-events: none")}} darauf gesetzt wäre.

Dies geschieht in beiden oben genannten Fällen, aber mit `content-visibility: auto` kann der Inhalt durchsucht werden, den Fokus erhalten und von nicht relevant zu relevant wechseln. Dies ist nicht der Fall bei `content-visibility: hidden`.

> [!NOTE]
> Um den Übergang von `content-visibility: hidden` zu einem sichtbaren Wert zu animieren, müssen Sie {{cssxref("transition-behavior", "transition-behavior:&nbsp;allow-discrete")}} und {{cssxref("@starting-style")}} Stile setzen. Weitere Informationen finden Sie unter [Transitioning `display` und `content-visibility`](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions#transitioning_display_and_content-visibility).

## Siehe auch

- [CSS-Eingrenzungsmodul](/de/docs/Web/CSS/CSS_containment)
- [Lernen: CSS-Performance-Optimierung](/de/docs/Learn_web_development/Extensions/Performance/CSS)
- [CSS-Containerabfragen](/de/docs/Web/CSS/CSS_containment/Container_queries)
- [Eine Einführung in CSS-Eingrenzung](https://blogs.igalia.com/mrego/2019/01/11/an-introduction-to-css-containment/) via Igalia.com (2019)
- Das [`contentvisibilityautostatechange`](/de/docs/Web/API/Element/contentvisibilityautostatechange_event) Ereignis
