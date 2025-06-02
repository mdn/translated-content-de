---
title: Verwendung von CSS-Kapselung
slug: Web/CSS/CSS_containment/Using_CSS_containment
l10n:
  sourceCommit: 0145c6497d2f2206dca1326593fe308f7b771a08
---

{{CSSRef}}

CSS-Kapselung verbessert die Leistung von Webseiten, indem sie dem Browser ermöglicht, einen Teilbaum der Seite vom Rest der Seite zu isolieren. Wenn der Browser weiß, dass ein Teil der Seite unabhängig vom restlichen Inhalt ist, kann das Rendering optimiert und die Leistung verbessert werden.

Die Eigenschaften {{cssxref("contain")}} und {{cssxref("content-visibility")}} ermöglichen es Entwicklern, Benutzeragenten darüber zu informieren, ob ein Element seine Inhalte überhaupt rendern soll und ob es seine Inhalte rendern soll, wenn es außerhalb des Bildschirms ist. Der Benutzeragent wendet dann bei Bedarf Kapselung auf Elemente an und kann Layout und Rendering möglicherweise verschieben, bis sie benötigt werden.

Dieser Leitfaden beschreibt die grundlegenden Ziele der CSS-Kapselung und wie man `contain` und `content-visibility` für ein besseres Benutzererlebnis einsetzt.

## Einfaches Beispiel

Webseiten enthalten oft mehrere Abschnitte, die logisch unabhängig voneinander sind. CSS-Kapselung ermöglicht es ihnen, bei der Darstellung unabhängig voneinander behandelt zu werden.

Zum Beispiel enthalten Blogs normalerweise mehrere Artikel, von denen jeder eine Überschrift und Inhalt enthält, wie im folgenden Markup gezeigt.

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

Mit CSS wenden wir die Eigenschaft {{cssxref("contain")}} mit einem Wert von `content` auf jeden Artikel an. Der Wert `content` ist eine Abkürzung für `contain: layout paint style`:

```css
article {
  contain: content;
}
```

Logisch ist jeder Artikel unabhängig von den anderen Artikeln auf der Seite. Diese Information ist für den Webentwickler, der die Seite erstellt, normalerweise bekannt und wahrscheinlich ziemlich offensichtlich.
Browser wissen jedoch nicht, welches Ziel Ihre Inhalte haben, und können nicht annehmen, dass ein Artikel oder ein anderer Inhaltsabschnitt vollständig eigenständig ist.

Diese Eigenschaft bietet eine Möglichkeit, dies dem Browser zu erklären und ihm die ausdrückliche Erlaubnis zu geben, Leistungsoptimierungen vorzunehmen. Sie teilt dem Browser mit, dass das interne Layout des Elements vollständig vom Rest der Seite getrennt ist und dass alles, was das Element betrifft, innerhalb seiner Grenzen gezeichnet wird. Nichts kann sichtbar überfließen.

Indem wir `contain: content` auf jedem `<article>` festlegen, haben wir dies angedeutet; wir haben dem Browser mitgeteilt, dass jeder Artikel unabhängig ist. Der Browser kann dann diese Informationen verwenden, um Entscheidungen darüber zu treffen, wie er jeden `<article>` des Inhalts rendert. Zum Beispiel könnte er Artikel, die sich außerhalb des sichtbaren Bereichs befinden, nicht rendern.

Wenn zusätzliche Artikel am Ende der Seite hinzugefügt werden, muss der Browser das Layout der vorausgehenden Inhalte nicht neu berechnen oder neu zeichnen; er muss auch keine Bereiche außerhalb des Teilbaums des enthaltenen Elements anfassen. Wenn jedoch Boxenmodell-Eigenschaften abhängig sind, muss der Browser das Layout neu berechnen und neu zeichnen. Wenn beispielsweise das `<article>` so gestaltet ist, dass seine Größe von seinem Inhalt abhängt (z.B. mit `height: auto`), muss der Browser die Änderung seiner Größe berücksichtigen.

## Wichtige Konzepte und Terminologie

### `contain` Werte

Es gibt vier Arten von Kapselung: Layout, Paint, Größe und Stil. Verwenden Sie die Eigenschaft {{cssxref("contain")}}, um die Art oder Arten anzugeben, die Sie auf ein Element anwenden möchten, indem Sie eine beliebige Kombination dieser Typen einbeziehen.

#### Layout-Kapselung

```css
article {
  contain: layout;
}
```

Das Layout wird normalerweise auf das gesamte Dokument angewendet, was bedeutet, dass, wenn Sie ein Element verschieben, das gesamte Dokument so behandelt werden muss, als ob sich Dinge überall bewegt hätten. Durch die Verwendung von `contain: layout` können Sie dem Browser mitteilen, dass er nur dieses Element überprüfen muss – alles innerhalb des Elements ist auf dieses Element beschränkt und beeinflusst nicht den Rest der Seite, wobei die enthaltene Box einen unabhängigen [Formatierungskontext](/de/docs/Web/CSS/CSS_display/Introduction_to_formatting_contexts) etabliert.

Zusätzlich:

- Layout mit {{cssxref("float")}} wird unabhängig innerhalb des angegebenen Elements durchgeführt.
- Margen werden nicht über eine Layout-Kapselungsgrenze hinweg zusammengeführt.
- Der Layout-Container ist ein [enthältlicher Block](/de/docs/Web/CSS/CSS_display/Containing_block) für `absolute`- und `fixed`-positionierte Nachfahren.
- Die enthaltende Box erstellt einen [Stapelschichtungskontext](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context), daher kann {{cssxref("z-index")}} verwendet werden.

> [!NOTE]
> Die Werte `style` und `layout` von `contain` werden automatisch angewendet, wenn die Eigenschaften {{cssxref("container-type")}} und {{cssxref("container-name")}} verwendet werden.

#### Paint-Kapselung

```css
article {
  contain: paint;
}
```

Paint-Kapselung schneidet im Wesentlichen die Box an der Polsterungskante der [Hauptbox](/de/docs/Web/CSS/CSS_display/Visual_formatting_model#the_principal_box) ab. Es kann keinen sichtbaren Überlauf geben. Die gleichen zusätzlichen Hinweise gelten für Paint-Kapselung wie für Layout-Kapselung (siehe oben).

Ein weiterer Vorteil ist, dass, wenn das Element mit angewandter Kapselung außerhalb des Bildschirms liegt, der Browser seine Kindelemente nicht zeichnen muss – diese befinden sich ebenfalls außerhalb des Bildschirms, da sie vollständig durch diese Box enthalten sind.

#### Größen-Kapselung

```css
article {
  contain: size;
}
```

Größen-Kapselung bietet nicht viel in Bezug auf Leistungsoptimierung, wenn sie allein verwendet wird. Größeneinschränkung bedeutet jedoch, dass die Größe der größenbeschränkten Kind-Elemente die Größe des Elements selbst nicht beeinflussen kann – seine Größe wird berechnet, als ob es keine Kinder hätte.

Wenn Sie `contain: size` auf ein Element setzen, müssen Sie die Größe des Elements mithilfe von {{cssxref("contain-intrinsic-size")}} oder den Langhand-Eigenschaften {{cssxref("contain-intrinsic-width")}} und {{cssxref("contain-intrinsic-height")}} angeben, in dieser Reihenfolge. Wenn keine Größe festgelegt ist, besteht das Risiko, dass das Element in den meisten Fällen nullgroß ist.

```css
article {
  contain: size;
  contain-intrinsic-size: 100vw auto none;
}
```

#### Stil-Kapselung

```css
article {
  contain: style;
}
```

Trotz des Namens bietet die Stil-Kapselung keine abgeschlossenen Stile wie beim [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) oder {{cssxref("@scope")}}.
Der Hauptanwendungsfall für den `style`-Wert besteht darin, Situationen zu verhindern, in denen ein [CSS-Zähler](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters) in einem Element geändert werden könnte, was dann den Rest des Baums beeinträchtigen könnte.

Durch die Verwendung von `contain: style` stellen die Eigenschaften {{cssxref("counter-increment")}} und {{cssxref("counter-set")}} sicher, dass neue Zähler erstellt werden, die nur auf diesen Teilbaum beschränkt sind.

Sie können mehr als einen Kapselungstyp einbeziehen, indem Sie mehrere durch Leerzeichen getrennte Werte wie `contain: layout paint` einfügen oder eine der beiden [Spezialwerte](#spezialwerte) verwenden.

#### Spezialwerte

Es gibt zwei Spezialwerte von `contain`, die eine Abkürzung für die ersten drei oder alle vier der Kapselungstypen sind:

- `content`
- `strict`

Den ersten haben wir im obigen Beispiel kennengelernt. Durch die Verwendung von `contain: content` wird Layout-, Paint- und Stil-Kapselung aktiviert. Da `size` weggelassen wird, ist es ein sicherer Wert, der weit verbreitet angewendet werden kann.

Die Deklaration `contain: strict`, die sich genauso verhält wie die Deklaration `contain: size layout paint style` (die vier durch Leerzeichen getrennte Werte enthält), bietet die meiste Kapselung. Es ist riskanter zu verwenden, da es Größen-Kapselung anwendet; das Risiko besteht, dass eine Box aufgrund ihrer Abhängigkeit von der Größe ihrer Kinder am Ende nullgroß ist.

Um dieses Risiko zu vermeiden, stellen Sie immer eine Größe ein, wenn Sie `strict` verwenden:

```css
article {
  contain: strict;
  contain-intrinsic-size: 80vw auto none;
}
```

Das obige ist dasselbe wie:

```css
article {
  contain: size layout paint style;
  contain-intrinsic-size: 80vw auto none;
}
```

### `content-visibility`

Wenn Sie viele Inhalte haben, die von einer starken Kapselung profitieren würden und oft außerhalb des Bildschirms sind – zum Beispiel wenn alle Ihre Blog-Posts auf den Blog-Startseiten als unendlich scrollbarer Blog sichtbar sind – kann `content-visibility: auto` verwendet werden, um alle Kapselungen auf einmal anzuwenden.

Die Eigenschaft {{cssxref("content-visibility")}} steuert, ob ein Element seine Inhalte überhaupt rendert, zusammen mit der Anwendung einer starken Reihe von Kapselungen, wodurch Benutzeragenten große Teile des Layout- und Rendering-Aufwands möglicherweise weglassen können, bis er benötigt wird. Sie ermöglicht es dem Benutzeragenten, die Rendering-Arbeit eines Elements (einschließlich Layout und Malen) zu überspringen, bis sie benötigt wird — was das initiale Laden der Seite erheblich beschleunigt.

Ihre möglichen Werte sind:

- `visible`: Das Standardverhalten — die Inhalte eines Elements werden wie gewohnt angezeigt und gerendert.
- `hidden`: Das Element [überspringt seine Inhalte](#überspringen_der_inhalte). Die übersprungenen Inhalte sind nicht zugänglich für Benutzeragentenfunktionen wie In-Page-Suche, Tab-Navigation usw., und sie sind weder auswählbar noch fokussierbar.
- `auto`: Das Element aktiviert Layout-Kapselung, Stil-Kapselung und Paint-Kapselung, als ob `contain: content` gesetzt wäre. Wenn das Element nicht [für den Benutzer relevant](#relevanz_für_den_benutzer) ist, überspringt es auch seine Inhalte. Im Gegensatz zu `hidden` sind die übersprungenen Inhalte weiterhin für Benutzerinteraktionen verfügbar, fokussierbar, auswählbar, in regulärem Tabulator-Reihenfolge und verfügbar für die In-Content-Suche.

### Relevanz für den Benutzer

Benutzeragenten haben ein Konzept, dass Inhalte [für den Benutzer relevant sind](https://drafts.csswg.org/css-contain/#relevant-to-the-user). Ein Element wird "für den Benutzer relevant", wenn eine der folgenden Bedingungen zutrifft:

- Das Element erscheint im Viewport oder in einem vom Benutzeragenten definierten Rand um den Viewport (50 % der Viewport-Dimensionen, um der App Zeit zu geben, sich vorzubereiten, wenn sich die Sichtbarkeit des Elements ändert).
- Das Element oder seine Inhalte erhalten Fokus.
- Das Element oder seine Inhalte werden ausgewählt, z. B. indem man über den Text mit dem Mauszeiger zieht oder durch eine andere Hervorhebungsoperation.
- Das Element oder seine Inhalte befinden sich in der {{Glossary("top_layer", "obersten Ebene")}}.

Wenn `content-visibility: auto` gesetzt ist und der Browser feststellt, dass Inhalte für den Benutzer relevant sind, rendert der Browser diese Inhalte.

### Überspringen der Inhalte

Wenn Sie `content-visibility: hidden` auf ein Element setzen, teilen Sie dem Browser mit, dass es für den Benutzer nicht relevant ist und dass daher [seine Inhalte übersprungen](https://drafts.csswg.org/css-contain/#skips-its-contents) und nicht gerendert werden sollten. Dies trägt zur Leistungsverbesserung bei.

Der Browser wird auch die Inhalte eines Elements überspringen, wenn `content-visibility: auto` darauf gesetzt ist und der Browser feststellt, dass seine Inhalte _nicht_ für den Benutzer relevant sind.

Wenn ein Element seine Inhalte überspringt:

- Es hat Layout-, Stil-, Paint- und Größen-Kapselung aktiviert.
- Seine Inhalte werden nicht gezeichnet, als ob {{cssxref("visibility", "visibility: hidden")}} darauf gesetzt wäre.
- Seine Inhalte erhalten keine Zeigerereignisse, als ob {{cssxref("pointer-events", "pointer-events: none")}} darauf gesetzt wäre.

Dies geschieht in beiden oben genannten Fällen, aber mit `content-visibility: auto` können die Inhalte durchsucht werden, Fokus erhalten und sich auch sonst von nicht relevant zu relevant bewegen. Dies ist nicht der Fall bei `content-visibility: hidden`.

> [!NOTE]
> Um den Übergang von `content-visibility: hidden` zu einem sichtbaren Wert zu animieren, müssen Sie {{cssxref("transition-behavior", "transition-behavior:&nbsp;allow-discrete")}} und {{cssxref("@starting-style")}} Stile setzen. Siehe [Übergang von `display` und `content-visibility`](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions#transitioning_display_and_content-visibility), um mehr zu erfahren.

## Siehe auch

- [CSS-Kapselungsmodul](/de/docs/Web/CSS/CSS_containment)
- [Lernen: CSS-Leistungsoptimierung](/de/docs/Learn_web_development/Extensions/Performance/CSS)
- [CSS Container Queries](/de/docs/Web/CSS/CSS_containment/Container_queries)
- [Einführung in CSS-Kapselung](https://blogs.igalia.com/mrego/2019/01/11/an-introduction-to-css-containment/) über Igalia.com (2019)
- Das [`contentvisibilityautostatechange`](/de/docs/Web/API/Element/contentvisibilityautostatechange_event) Ereignis
