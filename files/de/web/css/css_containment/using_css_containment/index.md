---
title: Verwendung von CSS-Containment
slug: Web/CSS/CSS_containment/Using_CSS_containment
l10n:
  sourceCommit: 9b9086cf753e2d5721fe1229ff6f767ccf512f97
---

{{CSSRef}}

CSS-Containment verbessert die Leistung von Webseiten, indem es dem Browser ermöglicht, einen Teilbaum der Seite vom Rest der Seite zu isolieren. Wenn der Browser weiß, dass ein Teil der Seite unabhängig vom Rest des Inhalts ist, kann das Rendering optimiert und die Leistung verbessert werden.

Die Eigenschaften {{cssxref("contain")}} und {{cssxref("content-visibility")}} ermöglichen es Entwicklern, User Agents darüber zu informieren, ob ein Element seine Inhalte überhaupt rendern soll und ob es seine Inhalte rendern soll, wenn es außerhalb des Bildschirms ist. Der User Agent wendet dann, wenn erforderlich, Containment auf Elemente an, wobei das Layout und das Rendering möglicherweise erst dann ausgeführt werden, wenn sie benötigt werden.

Dieser Leitfaden beschreibt die grundlegenden Ziele von CSS-Containment und wie Sie `contain` und `content-visibility` für ein besseres Benutzererlebnis nutzen können.

## Einfaches Beispiel

Webseiten enthalten oft mehrere Abschnitte, die logisch voneinander unabhängig sind. CSS-Containment ermöglicht es, sie beim Rendering wirklich unabhängig voneinander zu behandeln.

Zum Beispiel enthalten Blogs in der Regel mehrere Artikel, die jeweils eine Überschrift und Inhalte enthalten, wie im folgenden Markup.

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

Mit CSS wenden wir die Eigenschaft {{cssxref("contain")}} mit dem Wert `content` auf jeden Artikel an. Der Wert `content` ist eine Kurzform für `contain: layout paint style`.

```css
article {
  contain: content;
}
```

Logisch ist jeder Artikel unabhängig von den anderen Artikeln auf der Seite. Diese Information ist in der Regel dem Webentwickler bekannt und wahrscheinlich ziemlich offensichtlich, der die Seite erstellt.
Browser wissen jedoch nicht, was Sie mit Ihrem Inhalt beabsichtigen, und können nicht davon ausgehen, dass ein Artikel oder ein anderer Inhaltsabschnitt völlig eigenständig ist.

Diese Eigenschaft liefert dem Browser eine Möglichkeit, dies zu erklären und ihm die ausdrückliche Erlaubnis zu erteilen, Leistungsoptimierungen vorzunehmen.
Sie sagt dem Browser, dass das interne Layout des Elements vollständig vom Rest der Seite getrennt ist und dass alles über das Element innerhalb seiner Grenzen gemalt wird. Nichts kann sichtbar überlaufen.

Indem wir `contain: content` auf jedes `<article>` setzen, haben wir dies angegeben; wir haben dem Browser gesagt, dass jeder Artikel unabhängig ist. Der Browser kann diese Informationen dann verwenden, um Entscheidungen darüber zu treffen, wie er jeden `<article>` des Inhalts rendert. Zum Beispiel könnte er Artikel, die sich außerhalb des sichtbaren Bereichs befinden, nicht rendern.

Wenn zusätzliche Artikel am Ende der Seite angehängt werden, muss der Browser das Layout oder das Repainting des vorhergehenden Inhalts nicht neu berechnen; er muss auch kein Gebiet außerhalb des Teilbaums des enthaltenen Elements berühren. Wenn Box-Modell-Eigenschaften jedoch abhängig sind, muss der Browser das Layout und das Repainting neu berechnen. Wenn das `<article>` beispielsweise so gestaltet ist, dass seine Größe von seinem Inhalt abhängt (z.B. mit `height: auto`), muss der Browser seine Größenänderung berücksichtigen.

## Wichtige Konzepte und Terminologie

### `contain`-Werte

Es gibt vier Arten von Containment: Layout, Paint, Size und Style. Verwenden Sie die Eigenschaft {{cssxref("contain")}}, um die Art oder Arten anzugeben, die Sie auf ein Element anwenden möchten, indem Sie eine beliebige Kombination dieser Typen einschließen.

#### Layout-Containment

```css
article {
  contain: layout;
}
```

Layout ist normalerweise auf das gesamte Dokument bezogen, was bedeutet, dass, wenn Sie ein Element verschieben, das gesamte Dokument so behandelt werden muss, als ob sich Dinge überallhin bewegt haben könnten. Indem Sie `contain: layout` verwenden, können Sie dem Browser mitteilen, dass er nur dieses Element überprüfen muss — alles innerhalb des Elements ist auf dieses Element beschränkt und beeinflusst nicht den Rest der Seite, wobei die umgebende Box einen unabhängigen [Formatierungskontext](/de/docs/Web/CSS/CSS_display/Introduction_to_formatting_contexts) erstellt.

Darüber hinaus:

- {{cssxref("float")}}-Layouts werden unabhängig innerhalb des angegebenen Elements durchgeführt.
- Ränder kollabieren nicht über eine Layout-Containment-Grenze hinweg.
- Der Layout-Container ist ein [Enthaltender Block](/de/docs/Web/CSS/CSS_display/Containing_block) für `absolute`- und `fixed`-positionierte Nachfahren.
- Die umgebende Box erstellt einen [Stapellkontext](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context), daher kann {{cssxref("z-index")}} verwendet werden.

> [!NOTE]
> Die `style`- und `layout`-Werte von `contain` werden automatisch angewendet, wenn die Eigenschaften {{cssxref("container-type")}} und {{cssxref("container-name")}} verwendet werden.

#### Paint-Containment

```css
article {
  contain: paint;
}
```

Paint-Containment schneidet im Wesentlichen die Box bis zum Padding-Rand der [Hauptbox](/de/docs/Web/CSS/Visual_formatting_model#the_principal_box) ab. Es kann kein sichtbares Überlaufen geben. Die gleichen zusätzlichen Anmerkungen gelten für das `paint`-Containment wie für das `layout`-Containment (siehe oben).

Ein weiterer Vorteil ist, dass, wenn das mit Containment versehene Element außerhalb des Bildschirms ist, der Browser seine Kindelemente nicht rendern muss — diese sind ebenfalls außerhalb des Bildschirms, da sie vollständig in dieser Box enthalten sind.

#### Size-Containment

```css
article {
  contain: size;
}
```

Size-Containment bietet nicht viel an Leistungsoptimierungen, wenn es allein verwendet wird. Size-Containment bedeutet jedoch, dass die Größe der Kinder eines size-contained-Elements die Größe des Elements selbst nicht beeinflussen kann — seine Größe wird berechnet, als ob es keine Kinder hätte.

Wenn Sie `contain: size` auf ein Element setzen, müssen Sie die Größe des Elements mit {{cssxref("contain-intrinsic-size")}} oder den Langform-Eigenschaften {{cssxref("contain-intrinsic-width")}} und {{cssxref("contain-intrinsic-height")}} in dieser Reihenfolge angeben. Wenn keine Größe festgelegt ist, besteht das Risiko, dass das Element in den meisten Fällen die Größe Null hat.

```css
article {
  contain: size;
  contain-intrinsic-size: 100vw auto;
}
```

#### Style-Containment

```css
article {
  contain: style;
}
```

Trotz des Namens bietet Style-Containment keine Scoped-Styles wie beim [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) oder {{cssxref("@scope")}}.
Der Haupteinsatzbereich für den `style`-Wert ist die Verhinderung von Situationen, in denen ein [CSS-Zähler](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters) in einem Element geändert werden könnte, was dann den Rest des Baums beeinflussen könnte.

Die Verwendung von `contain: style` stellt sicher, dass die Eigenschaften {{cssxref("counter-increment")}} und {{cssxref("counter-set")}} neue Zähler erstellen, die auf diesen Teilbaum beschränkt sind.

Sie können mehr als einen Containment-Typ einschließen, indem Sie mehrere, durch Leerzeichen getrennte Werte einschließen, wie `contain: layout paint` oder indem Sie einen der beiden [besonderen Werte](#besondere_werte) verwenden.

#### Besondere Werte

Es gibt zwei besondere Werte von `contain`, die eine Kurzform für die ersten drei bzw. alle vier Containment-Typen sind:

- `content`
- `strict`

Den ersten haben wir im obigen Beispiel kennengelernt. Die Verwendung von `contain: content` aktiviert `layout`, `paint` und `style`-Containment. Da `size` weggelassen wird, kann es sicher weit verbreitet angewendet werden.

Die Deklaration `contain: strict`, die sich genauso verhält wie die Deklaration `contain: size layout paint style` (die vier durch Leerzeichen getrennte Werte enthält), bietet das meiste Containment. Es ist riskanter zu verwenden, da es `size`-Containment anwendet; das Risiko besteht, dass eine Box aufgrund der Abhängigkeit von der Größe ihrer Kinder auf Null-Größe endet.

Um dieses Risiko zu vermeiden, setzen Sie immer eine Größe, wenn Sie `strict` verwenden:

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

Wenn Sie viele Inhalte haben, die von starkem Containment profitieren könnten und oft außerhalb des Bildschirms sein werden, z.B. wenn alle Ihre Blog-Posts auf den Startseiten des Blogs als unendlich scrollbares Blog angezeigt werden, kann `content-visibility: auto` verwendet werden, um alle Containments gleichzeitig anzuwenden.

Die Eigenschaft {{cssxref("content-visibility")}} steuert, ob ein Element seine Inhalte überhaupt rendert, zusammen mit der Erzwingung eines starken Satzes von Containments, die es User Agents ermöglichen, möglicherweise große Teile von Layout- und Renderarbeiten wegzulassen, bis sie benötigt werden. Sie ermöglicht es dem User Agent, die Rendering-Arbeit eines Elements (einschließlich Layout und Malen) zu überspringen, bis sie benötigt wird — was das anfängliche Laden der Seite viel schneller macht.

Ihre möglichen Werte sind:

- `visible`: Das Standardverhalten — der Inhalt eines Elements wird wie gewohnt ausgelegt und gerendert.
- `hidden`: Das Element [überspringt seine Inhalte](#überspringt_seine_inhalte). Die übersprungenen Inhalte sind für User-Agent-Funktionen wie In-Page-Suche, Tabulator-Navigation usw. nicht zugänglich, noch als auswählbar oder fokussierbar.
- `auto`: Das Element aktiviert Layout-Containment, Style-Containment und Paint-Containment, als ob `contain: content` gesetzt worden wäre. Wenn das Element [für den Benutzer nicht relevant ist](#für_den_benutzer_relevant), überspringt es auch seine Inhalte. Im Gegensatz zu `hidden` sind die übersprungenen Inhalte weiterhin für Benutzerinteraktionen verfügbar, bleiben fokussierbar, auswählbar, in regulärer Tabulatorreihenfolge und für die Inhaltesuche verfügbar.

### Für den Benutzer relevant

User-Agents haben ein Konzept, dass Inhalte [für den Benutzer relevant sind](https://drafts.csswg.org/css-contain/#relevant-to-the-user). Ein Element wird "für den Benutzer relevant", wenn eine der folgenden Bedingungen erfüllt ist:

- Das Element erscheint im Viewport oder einem vom User-Agent definierten Rand um den Viewport (50 % der Viewport-Dimensionen, damit die App Zeit hat, sich auf Änderungen der Element-Sichtbarkeit vorzubereiten).
- Das Element oder seine Inhalte erhalten den Fokus.
- Das Element oder seine Inhalte werden ausgewählt, z.B. durch Ziehen mit dem Mauscursor über den Text oder durch eine andere Hervorhebungsoperation.
- Das Element oder seine Inhalte werden in die {{Glossary("top_layer", "Hauptebene")}} gelegt.

Wenn `content-visibility: auto` gesetzt ist und der Browser feststellt, dass der Inhalt für den Benutzer relevant ist, rendert der Browser diesen Inhalt.

### Überspringt seine Inhalte

Wenn Sie `content-visibility: hidden` auf ein Element setzen, sagen Sie dem Browser, dass es nicht für den Benutzer relevant ist und daher seine [Inhalte übersprungen werden sollen](https://drafts.csswg.org/css-contain/#skips-its-contents) und nicht gerendert werden. Dies trägt zur Verbesserung der Leistung bei.

Der Browser wird auch die Inhalte eines Elements überspringen, wenn `content-visibility: auto` darauf gesetzt ist und der Browser feststellt, dass die Inhalte _nicht_ für den Benutzer relevant sind.

Wenn ein Element seine Inhalte überspringt:

- Es verfügt über Layout-, Stil-, Paint- und Größen-Containment.
- Seine Inhalte werden nicht gemalt, als ob {{cssxref("visibility", "visibility: hidden")}} darauf gesetzt wäre.
- Seine Inhalte erhalten keine Zeigerereignisse, als ob {{cssxref("pointer-events", "pointer-events: none")}} darauf gesetzt wäre.

Dies geschieht in beiden oben genannten Fällen, aber mit `content-visibility: auto` können die Inhalte durchsucht werden, den Fokus erhalten und von nicht relevant zu relevant wechseln. Dies ist bei `content-visibility: hidden` nicht der Fall.

> [!NOTE]
> Um den Übergang von `content-visibility: hidden` zu einem sichtbaren Wert zu animieren, müssen Sie {{cssxref("transition-behavior", "transition-behavior:&nbsp;allow-discrete")}} sowie {{cssxref("@starting-style")}}-Stile setzen. Weitere Informationen finden Sie unter [Übergang von `display` und `content-visibility`](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions#transitioning_display_and_content-visibility).

## Siehe auch

- [CSS-Containment-Modul](/de/docs/Web/CSS/CSS_containment)
- [Lernen: CSS-Leistungsoptimierung](/de/docs/Learn_web_development/Extensions/Performance/CSS)
- [CSS-Containerabfragen](/de/docs/Web/CSS/CSS_containment/Container_queries)
- [Eine Einführung in CSS-Containment](https://blogs.igalia.com/mrego/2019/01/11/an-introduction-to-css-containment/) über Igalia.com (2019)
- Das [`contentvisibilityautostatechange`](/de/docs/Web/API/Element/contentvisibilityautostatechange_event)-Ereignis
