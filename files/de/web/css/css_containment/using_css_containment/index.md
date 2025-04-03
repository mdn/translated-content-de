---
title: Verwendung von CSS-Containment
slug: Web/CSS/CSS_containment/Using_CSS_containment
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{CSSRef}}

CSS-Containment verbessert die Leistung von Webseiten, indem es dem Browser ermöglicht, einen Unterbaum der Seite vom Rest der Seite zu isolieren. Wenn der Browser weiß, dass ein Teil der Seite unabhängig vom Rest des Inhalts ist, kann das Rendering optimiert und die Leistung verbessert werden.

Die Eigenschaften {{cssxref("contain")}} und {{cssxref("content-visibility")}} ermöglichen es Entwicklern, Benutzeragenten anzugeben, ob ein Element seine Inhalte überhaupt rendern soll und ob es seine Inhalte rendern soll, wenn es nicht im sichtbaren Bereich ist. Der Benutzeragent wendet dann, wenn es angemessen ist, Containment auf Elemente an und verschiebt Layout und Rendering möglicherweise, bis es benötigt wird.

Dieser Leitfaden beschreibt die grundlegenden Ziele des CSS-Containments und wie man `contain` und `content-visibility` für eine bessere Benutzererfahrung einsetzt.

## Einfaches Beispiel

Webseiten enthalten oft mehrere Abschnitte, die logisch unabhängig voneinander sind. CSS-Containment ermöglicht es, sie beim Rendering wirklich unabhängig voneinander zu behandeln.

Beispielsweise enthalten Blogs normalerweise mehrere Artikel, von denen jeder eine Überschrift und Inhalte enthält, wie im untenstehenden Markup.

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

Logisch gesehen ist jeder Artikel unabhängig von den anderen Artikeln auf der Seite. Diese Information ist etwas, das dem Webentwickler, der die Seite erstellt, normalerweise bekannt und wahrscheinlich ganz offensichtlich ist.
Browser kennen jedoch die Absicht Ihrer Inhalte nicht und können nicht davon ausgehen, dass ein Artikel oder ein anderer Abschnitt von Inhalten völlig eigenständig ist.

Diese Eigenschaft bietet eine Möglichkeit, dies dem Browser zu erklären und ihm die ausdrückliche Erlaubnis zu geben, Leistungsoptimierungen vorzunehmen. Sie teilt dem Browser mit, dass das interne Layout des Elements vollständig getrennt vom Rest der Seite ist und dass alles über das Element innerhalb seiner Grenzen gemalt wird. Nichts kann sichtbar überlaufen.

Indem wir `contain: content` auf jedes `<article>` setzen, haben wir dies angegeben; wir haben dem Browser mitgeteilt, dass jeder Artikel unabhängig ist. Der Browser kann dann diese Informationen verwenden, um Entscheidungen darüber zu treffen, wie jedes `<article>` von Inhalten zu rendern ist. Zum Beispiel könnte er Artikel, die außerhalb des sichtbaren Bereichs liegen, nicht rendern.

Wenn zusätzliche Artikel am Ende der Seite angefügt werden, muss der Browser das Layout nicht neu berechnen oder den vorhergehenden Inhalt neu malen; er muss auch keinen Bereich außerhalb des enthaltenen Elementunterbaums berühren. Wenn jedoch Eigenschaften des Boxmodells abhängig sind, muss der Browser das Layout neu berechnen und neu rendern. Zum Beispiel, wenn das `<article>` so gestaltet ist, dass seine Größe von seinem Inhalt abhängt (z. B. mit `height: auto`), muss der Browser berücksichtigen, dass sich seine Größe ändert.

## Wichtige Konzepte und Begriffe

### `contain` Werte

Es gibt vier Arten von Containment: Layout, Paint, Größe und Stil. Verwenden Sie die Eigenschaft {{cssxref("contain")}}, um die Art oder Arten anzugeben, die Sie auf ein Element anwenden möchten, indem Sie eine beliebige Kombination dieser Arten einschließen.

#### Layout-Containment

```css
article {
  contain: layout;
}
```

Layouts sind normalerweise auf das gesamte Dokument beschränkt, was bedeutet, dass, wenn Sie ein Element verschieben, das gesamte Dokument so behandelt werden muss, als ob sich Dinge überall bewegt haben könnten. Durch die Verwendung von `contain: layout` können Sie dem Browser mitteilen, dass er nur dieses Element überprüfen muss — alles innerhalb des Elements ist auf dieses Element beschränkt und wirkt sich nicht auf den Rest der Seite aus, wobei die enthaltende Box einen unabhängigen [Formatierungskontext](/de/docs/Web/CSS/CSS_display/Introduction_to_formatting_contexts) erstellt.

Zusätzlich:

- Das {{cssxref("float")}}-Layout wird innerhalb des angegebenen Elements unabhängig durchgeführt.
- Ränder kollabieren nicht über eine Layout-Containment-Grenze hinweg.
- Der Layout-Container ist ein [umfassender Block](/de/docs/Web/CSS/CSS_display/Containing_block) für `absolute`- und `fixed`-positionierte Nachkommen.
- Die umschließende Box erstellt einen [Stapelschichtkontext](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context), daher kann {{cssxref("z-index")}} verwendet werden.

> [!NOTE]
> Die Werte `style` und `layout` von `contain` werden automatisch angewendet, wenn die Eigenschaften {{cssxref("container-type")}} und {{cssxref("container-name")}} verwendet werden.

#### Paint-Containment

```css
article {
  contain: paint;
}
```

Paint-Containment schneidet im Wesentlichen die Box an der Innenkante der [Hauptbox](/de/docs/Web/CSS/CSS_display/Visual_formatting_model#the_principal_box) ab. Es darf keinen sichtbaren Überlauf geben. Die gleichen zusätzlichen Hinweise gelten für das `paint`-Containment wie für das `layout`-Containment (siehe oben).

Ein weiterer Vorteil ist, dass, wenn das Element mit angewendetem Containment nicht im sichtbaren Bereich ist, der Browser seine Kindelemente nicht rendern muss — diese sind auch nicht im sichtbaren Bereich, da sie vollständig von dieser Box enthalten sind.

#### Größen-Containment

```css
article {
  contain: size;
}
```

Größen-Containment bietet für sich allein betrachtet nicht viele Leistungsvorteile. Allerdings bedeutet Größen-Containment, dass die Größe der Kinder des größen-eingeschlossenen Elements die Größe des Elements selbst nicht beeinflussen kann — seine Größe wird berechnet, als ob es keine Kinder hätte.

Wenn Sie `contain: size` auf ein Element setzen, müssen Sie die Größe des Elements mit {{cssxref("contain-intrinsic-size")}} oder den Langform-Eigenschaften {{cssxref("contain-intrinsic-width")}} und {{cssxref("contain-intrinsic-height")}} in dieser Reihenfolge angeben. Wenn keine Größe festgelegt ist, besteht das Risiko, dass das Element in den meisten Fällen Null-Größe hat.

```css
article {
  contain: size;
  contain-intrinsic-size: 100vw auto;
}
```

#### Stil-Containment

```css
article {
  contain: style;
}
```

Trotz des Namens bietet Stil-Containment keine Bereichs-beschränkten Stile, wie Sie es mit dem [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) oder {{cssxref("@scope")}} erhalten würden.
Der Hauptanwendungsfall für den `style`-Wert besteht darin, Situationen zu verhindern, in denen ein [CSS-Zähler](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters) in einem Element geändert werden könnte, was sich dann auf den Rest des Baums auswirken könnte.

Die Verwendung von `contain: style` stellt sicher, dass die Eigenschaften {{cssxref("counter-increment")}} und {{cssxref("counter-set")}} neue Zähler erstellen, die nur auf diesen Unterbaum beschränkt sind.

Sie können mehr als einen Typ von Containment einschließen, indem Sie mehrere durch Leerzeichen getrennte Werte angeben, wie `contain: layout paint` oder durch die Verwendung eines der beiden [Spezialwerte](#spezialwerte).

#### Spezialwerte

Es gibt zwei Spezialwerte von `contain`, die Abkürzungen für die ersten drei oder alle vier Arten des Containments sind:

- `content`
- `strict`

Wir haben den ersten im obigen Beispiel kennengelernt. Die Verwendung von `contain: content` schaltet `layout`, `paint` und `style` Containment ein. Da es `size` auslässt, ist es ein sicherer Wert, den man breit einsetzen kann.

Die Deklaration `contain: strict`, die sich genauso verhält wie die Deklaration `contain: size layout paint style` (die vier durch Leerzeichen getrennte Werte umfasst), bietet das meiste Containment. Sie ist riskanter zu verwenden, da sie `size` Containment anwendet; das Risiko besteht darin, dass eine Box aufgrund der Abhängigkeit von der Größe ihrer Kinder Null-Größe haben könnte.

Um dieses Risiko zu vermeiden, sollten Sie immer eine Größe festlegen, wenn Sie `strict` verwenden:

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

Wenn Sie viele Inhalte haben, die von starkem Containment profitieren würden und oft nicht im sichtbaren Bereich sind — beispielsweise wenn alle Ihre Blogbeiträge auf den Startseiten des Blogs als unendlich scrollbares Blog sichtbar sind — kann `content-visibility: auto` verwendet werden, um alle Kontainments auf einmal anzuwenden.

Die Eigenschaft {{cssxref("content-visibility")}} steuert, ob ein Element seine Inhalte überhaupt rendert, und erzwingt gleichzeitig eine starke Reihe von Containments, sodass Benutzeragenten möglicherweise große Mengen an Layout- und Renderarbeit weglassen können, bis sie benötigt werden. Sie ermöglicht es dem Benutzeragenten, die Renderarbeit eines Elements (einschließlich Layout und Malen) zu überspringen, bis sie benötigt wird — was das anfängliche Laden der Seite erheblich beschleunigt.

Die möglichen Werte sind:

- `visible`: Das Standardverhalten — die Inhalte eines Elements werden wie gewohnt layoutet und gerendert.
- `hidden`: Das Element [überspringt seine Inhalte](#überspringen_seiner_inhalte). Die übersprungenen Inhalte sind für Benutzeragentenfunktionen wie Seiteninternes Suchen, Tab-Navigation usw. nicht zugänglich und weder auswählbar noch fokussierbar.
- `auto`: Das Element schaltet Layout-Containment, Stil-Containment und Paint-Containment ein, als ob `contain: content` gesetzt wäre. Wenn das Element für den Benutzer nicht [relevant](#relevant_für_den_benutzer) ist, überspringt es auch seine Inhalte. Im Gegensatz zu `hidden` sind die übersprungenen Inhalte jedoch weiterhin für Benutzerinteraktionen zugänglich, bleiben fokussierbar, auswählbar, in der regulären Tab-Reihenfolge und im Inhalts-Suchvorgang verfügbar.

### Relevant für den Benutzer

Benutzeragenten haben ein Konzept von Inhalten, die für den Benutzer [relevant sind](https://drafts.csswg.org/css-contain/#relevant-to-the-user). Ein Element wird "für den Benutzer relevant", wenn eine der folgenden Bedingungen zutrifft:

- Das Element erscheint im Ansichtsfenster oder einem vom Benutzeragenten definierten Rand um das Ansichtsfenster (50 % der Ansichtsfenstermaße, um der App Zeit zu geben, sich auf den Sichtbarkeitswechsel des Elements vorzubereiten).
- Das Element oder seine Inhalte erhalten den Fokus.
- Das Element oder seine Inhalte werden ausgewählt, beispielsweise durch Drag & Drop über den Text mit dem Mauszeiger oder durch einen anderen Hervorhebungsvorgang.
- Das Element oder seine Inhalte werden in die {{Glossary("top_layer", "obere Ebene")}} gelegt.

Wenn `content-visibility: auto` gesetzt ist und der Browser feststellt, dass ein Inhalt für den Benutzer relevant ist, wird der Browser diesen Inhalt rendern.

### Überspringen seiner Inhalte

Wenn Sie `content-visibility: hidden` auf ein Element setzen, teilen Sie dem Browser mit, dass es für den Benutzer nicht relevant ist und daher [seine Inhalte übersprungen](https://drafts.csswg.org/css-contain/#skips-its-contents) und nicht gerendert werden sollen. Dies hilft, die Leistung zu verbessern.

Der Browser wird die Inhalte eines Elements auch überspringen, wenn `content-visibility: auto` auf ihm gesetzt ist und der Browser feststellt, dass sein Inhalt _nicht_ für den Benutzer relevant ist.

Wenn ein Element seine Inhalte überspringt:

- Es hat Layout-, Stil-, Paint- und Größen-Containment aktiviert.
- Seine Inhalte werden nicht gemalt, als ob {{cssxref("visibility", "visibility: hidden")}} darauf gesetzt wäre.
- Seine Inhalte erhalten keine Zeigerereignisse, als ob {{cssxref("pointer-events", "pointer-events: none")}} darauf gesetzt wäre.

Dies geschieht in beiden oben genannten Fällen, aber mit `content-visibility: auto` kann der Inhalt durchsucht, fokussiert und anderweitig von nicht relevant zu relevant bewegt werden. Dies ist bei `content-visibility: hidden` nicht der Fall.

> [!NOTE]
> Um den Übergang von `content-visibility: hidden` zu einem sichtbaren Wert zu animieren, müssen Sie {{cssxref("transition-behavior", "transition-behavior:&nbsp;allow-discrete")}} und {{cssxref("@starting-style")}} Stile setzen. Siehe [Übergang von `display` und `content-visibility`](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions#transitioning_display_and_content-visibility), um mehr zu erfahren.

## Siehe auch

- [CSS-Containment-Modul](/de/docs/Web/CSS/CSS_containment)
- [Lernen: CSS-Leistungsoptimierung](/de/docs/Learn_web_development/Extensions/Performance/CSS)
- [CSS Container-Anfragen](/de/docs/Web/CSS/CSS_containment/Container_queries)
- [Eine Einführung in CSS-Containment](https://blogs.igalia.com/mrego/2019/01/11/an-introduction-to-css-containment/) über Igalia.com (2019)
- Das [`contentvisibilityautostatechange`](/de/docs/Web/API/Element/contentvisibilityautostatechange_event) Ereignis
