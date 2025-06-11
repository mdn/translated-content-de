---
title: Verwendung von CSS Containment
short-title: Verwendung von Containment
slug: Web/CSS/CSS_containment/Using_CSS_containment
l10n:
  sourceCommit: 0dcad86763896bba7f8e1ddc30c6dfd2aa664c6b
---

{{CSSRef}}

CSS Containment verbessert die Leistung von Webseiten, indem es dem Browser ermöglicht, einen Unterbaum der Seite vom Rest der Seite zu isolieren. Wenn der Browser weiß, dass ein Teil der Seite unabhängig vom restlichen Inhalt ist, kann das Rendering optimiert und die Leistung verbessert werden.

Die Eigenschaften {{cssxref("contain")}} und {{cssxref("content-visibility")}} ermöglichen es Entwicklern, Benutzeragenten darüber zu informieren, ob ein Element seine Inhalte überhaupt rendern soll und ob es seine Inhalte rendern soll, wenn es nicht im Sichtbereich ist. Der Benutzeragent wendet dann, wenn angebracht, Containment auf Elemente an, sodass Layout und Rendering möglicherweise erst bei Bedarf vorgenommen werden.

Dieser Leitfaden beschreibt die grundlegenden Ziele von CSS Containment und wie man `contain` und `content-visibility` für eine bessere Benutzererfahrung nutzt.

## Einfaches Beispiel

Webseiten enthalten oft mehrere Abschnitte, die logisch unabhängig voneinander sind. CSS Containment ermöglicht es, sie wirklich unabhängig voneinander in Bezug auf das Rendering zu behandeln.

Zum Beispiel enthalten Blogs gewöhnlich mehrere Artikel, die jeweils eine Überschrift und Inhalte enthalten, wie im folgenden Markup dargestellt.

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

Logisch gesehen ist jeder Artikel unabhängig von den anderen Artikeln auf der Seite. Diese Information ist etwas, das dem Webentwickler, der die Seite erstellt, normalerweise bekannt ist und wahrscheinlich recht offensichtlich erscheint.
Allerdings wissen Browser nicht, welches die Absicht Ihres Inhalts ist, und können nicht davon ausgehen, dass ein Artikel oder ein anderer Abschnitt des Inhalts völlig eigenständig ist.

Diese Eigenschaft bietet eine Möglichkeit, dem Browser dies zu erklären und ihm die ausdrückliche Erlaubnis zu geben, Leistungsoptimierungen vorzunehmen.
Sie teilt dem Browser mit, dass das interne Layout des Elements vollständig vom Rest der Seite getrennt ist und dass alles über das Element innerhalb seiner Grenzen gezeichnet wird. Nichts kann sichtbar überlaufen.

Durch das Setzen von `contain: content` auf jedem `<article>` haben wir dies angegeben; wir haben dem Browser mitgeteilt, dass jeder Artikel unabhängig ist. Der Browser kann diese Information dann nutzen, um Entscheidungen darüber zu treffen, wie jeder `<article>` des Inhalts gerendert wird. Zum Beispiel könnte es nicht-rendern von Artikeln, die sich außerhalb des sichtbaren Bereichs befinden.

Wenn zusätzliche Artikel am Ende der Seite angehängt werden, muss der Browser das Layout nicht neu berechnen oder den vorherigen Inhalt neu zeichnen; er muss auch keinen Bereich außerhalb des Unterbaums des beinhaltenden Elements berühren. Wenn Box-Modell-Eigenschaften jedoch abhängig sind, muss der Browser das Layout neu berechnen und neu zeichnen. Zum Beispiel, wenn das `<article>` so gestylt ist, dass seine Größe von seinem Inhalt abhängt (z.B. mit `height: auto`), muss der Browser seine Größe berücksichtigen.

## Schlüsselkonzepte und Terminologie

### `contain` Werte

Es gibt vier Arten von Containment: Layout, Paint, Größe und Stil. Verwenden Sie die Eigenschaft {{cssxref("contain")}}, um den Typ oder die Typen anzugeben, die Sie auf ein Element anwenden möchten, indem Sie eine beliebige Kombination dieser Typen einschließen.

#### Layout Containment

```css
article {
  contain: layout;
}
```

Layout ist normalerweise auf das gesamte Dokument bezogen, was bedeutet, dass wenn Sie ein Element verschieben, das gesamte Dokument so behandelt werden muss, als könnten sich Dinge überall bewegt haben. Durch die Verwendung von `contain: layout` können Sie dem Browser mitteilen, dass er nur dieses Element überprüfen muss — alles innerhalb des Elements bezieht sich nur auf dieses Element und beeinträchtigt nicht den Rest der Seite, wobei die unterbringende Box einen unabhängigen [Formatierungskontext](/de/docs/Web/CSS/CSS_display/Introduction_to_formatting_contexts) etabliert.

Zusätzlich:

- {{cssxref("float")}} Layout wird unabhängig innerhalb des angegebenen Elements durchgeführt.
- Ränder werden nicht über eine Layout-Containment-Grenze hinweg kollabieren.
- Der Layout-Container ist ein [containing block](/de/docs/Web/CSS/CSS_display/Containing_block) für `absolute`- und `fixed`-positionierte Nachfahren.
- Die beinhaltende Box erstellt einen [stacking context](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context), daher kann {{cssxref("z-index")}} verwendet werden.

> [!NOTE]
> Die Werte `style` und `layout` von `contain` werden automatisch angewendet, wenn die Eigenschaften {{cssxref("container-type")}} und {{cssxref("container-name")}} verwendet werden.

#### Paint Containment

```css
article {
  contain: paint;
}
```

Paint Containment schneidet im Wesentlichen die Box an der Polsterrandkante der [Hauptbox](/de/docs/Web/CSS/CSS_display/Visual_formatting_model#the_principal_box). Es kann keinen sichtbaren Überlauf geben. Die gleichen zusätzlichen Anmerkungen gelten für `paint` Containment wie für `layout` Containment (siehe oben).

Ein weiterer Vorteil ist, dass, wenn das mit Containment versehene Element vom Bildschirm ist, der Browser seine Kindelemente nicht zeichnen muss — diese sind auch vom Bildschirm, da sie komplett von dieser Box enthalten sind.

#### Größe Containment

```css
article {
  contain: size;
}
```

Größen-Containment bietet eigenständig nicht viel in Bezug auf Leistungsoptimierungen. Größe Containment bedeutet jedoch, dass die Größe der Kinder eines größenvermittelten Elements die Größe des Elements selbst nicht beeinflussen kann — seine Größe wird so berechnet, als hätte es keine Kinder.

Wenn Sie `contain: size` auf ein Element setzen, müssen Sie die Größe des Elements mit {{cssxref("contain-intrinsic-size")}} oder den Langformen {{cssxref("contain-intrinsic-width")}} und {{cssxref("contain-intrinsic-height")}}, in dieser Reihenfolge angeben. Wenn keine Größe festgelegt ist, besteht die Gefahr, dass das Element in den meisten Fällen keine Größe hat.

```css
article {
  contain: size;
  contain-intrinsic-size: 100vw auto none;
}
```

#### Stil Containment

```css
article {
  contain: style;
}
```

Trotz des Namens bietet Stil-Containment keine gesonderten Stile wie mit dem [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) oder {{cssxref("@scope")}}.
Der Hauptanwendungsfall für den `style`-Wert besteht darin, Situationen zu verhindern, in denen ein [CSS-Zähler](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters) innerhalb eines Elements geändert werden könnte, was dann den Rest des Baums beeinflussen könnte.

Die Verwendung von `contain: style` stellt sicher, dass die Eigenschaften {{cssxref("counter-increment")}} und {{cssxref("counter-set")}} neue Zähler erstellen, die nur auf diesen Unterbaum beschränkt sind.

Sie können mehr als einen Containment-Typ einschließen, indem Sie mehrere durch Leerzeichen getrennte Werte einfügen, wie `contain: layout paint` oder indem Sie einen der beiden [Sonderwerte](#sonderwerte) verwenden.

#### Sonderwerte

Es gibt zwei Sonderwerte von `contain`, die eine Abkürzung für die ersten drei oder alle vier Containment-Typen sind:

- `content`
- `strict`

Wir haben den ersten bereits im obigen Beispiel gesehen. Die Verwendung von `contain: content` schaltet das Layout, Paint und Style Containment ein. Da es `size` auslässt, ist es ein sicherer Wert, der weit verbreitet angewendet werden kann.

Die Deklaration `contain: strict`, die sich genauso verhält wie die Deklaration `contain: size layout paint style` (die vier durch Leerzeichen getrennte Werte enthält), bietet das meiste Containment. Es ist riskanter zu verwenden, da es `size` Containment anwendet; es besteht das Risiko, dass eine Box aufgrund ihrer Abhängigkeit von der Größe ihrer Kinder keine Größe haben könnte.

Um dieses Risiko zu vermeiden, legen Sie immer eine Größe fest, wenn Sie `strict` verwenden:

```css
article {
  contain: strict;
  contain-intrinsic-size: 80vw auto none;
}
```

Das oben Genannte ist dasselbe wie:

```css
article {
  contain: size layout paint style;
  contain-intrinsic-size: 80vw auto none;
}
```

### `content-visibility`

Wenn Sie viele Inhalte haben, die von starkem Containment profitieren würden und oft vom Bildschirm sind — zum Beispiel, wenn alle Ihre Blog-Beiträge auf der Blog-Startseite als unendlich scrollbares Blog sichtbar sind — kann `content-visibility: auto` verwendet werden, um alle Containments auf einmal anzuwenden.

Die Eigenschaft {{cssxref("content-visibility")}} steuert, ob ein Element seine Inhalte überhaupt rendert und erzwingt gleichzeitig einen starken Satz von Containments, wodurch Benutzeragenten möglicherweise große Mengen an Layout- und Renderarbeit weglassen können, bis sie benötigt werden. Sie ermöglicht es dem Benutzeragenten, die Renderingarbeit eines Elements (einschließlich Layout und Zeichnen) zu überspringen, bis sie benötigt wird — was das initiale Laden der Seite viel schneller macht.

Ihre möglichen Werte sind:

- `visible`: Das Standardverhalten — die Inhalte eines Elements werden wie normal angeordnet und gerendert.
- `hidden`: Das Element [überspringt seine Inhalte](#überspringt_seine_inhalte). Die übersprungenen Inhalte sind nicht für Benutzeragenten-Funktionen wie Seiten-finden, Tab-Reihenfolgenavigation usw. zugänglich, noch auswählbar oder fokussierbar.
- `auto`: Das Element aktiviert Layout, Stil und Paint Containment, als wäre `contain: content` gesetzt. Wenn das Element für den Benutzer nicht [relevant](#relevant_für_den_benutzer) ist, überspringt es auch seine Inhalte. Anders als `hidden`, sind die übersprungenen Inhalte weiterhin für Benutzerinteraktionen verfügbar, bleiben fokussierbar, auswählbar, in regulärer Tab-Reihenfolge und für inhaltliche Suchvorgänge zugänglich.

### Relevant für den Benutzer

Benutzeragenten haben ein Konzept von Inhalten, die [für den Benutzer relevant](https://drafts.csswg.org/css-contain/#relevant-to-the-user) sind. Ein Element wird "für den Benutzer relevant", wenn eine der folgenden Bedingungen zutrifft:

- Das Element erscheint im Ansichtsfenster oder in einem vom Benutzeragenten definierten Rand um das Ansichtsfenster (50 % der Ansichtsfensterabmessungen, um der App Zeit zu geben, sich auf Änderungen der Element-Sichtbarkeit vorzubereiten).
- Das Element oder seine Inhalte erhalten den Fokus.
- Das Element oder seine Inhalte werden ausgewählt, beispielsweise durch Ziehen über den Text mit dem Mauszeiger oder durch eine andere Hervorhebungsoperation.
- Das Element oder seine Inhalte werden in die {{Glossary("top_layer", "obere Ebene")}} verschoben.

Wenn `content-visibility: auto` gesetzt ist und der Browser feststellt, dass der Inhalt für den Benutzer relevant ist, wird der Browser diesen Inhalt rendern.

### Überspringt seine Inhalte

Wenn Sie `content-visibility: hidden` auf ein Element setzen, teilen Sie dem Browser mit, dass es für den Benutzer nicht relevant ist und daher [seine Inhalte übersprungen](/https://drafts.csswg.org/css-contain/#skips-its-contents) und nicht gerendert werden sollen. Dies hilft, die Leistung zu verbessern.

Der Browser wird die Inhalte eines Elements auch überspringen, wenn `content-visibility: auto` darauf gesetzt ist und der Browser feststellt, dass sein Inhalt _nicht_ relevant für den Benutzer ist.

Wenn ein Element seine Inhalte überspringt:

- Sind Layout-, Stil-, Paint- und Größen-Containment aktiviert.
- Werden seine Inhalte nicht gezeichnet, als wäre {{cssxref("visibility", "visibility: hidden")}} darauf gesetzt.
- Erhalten seine Inhalte keine Zeigereignisse, als wären {{cssxref("pointer-events", "pointer-events: none")}} darauf gesetzt.

Dies geschieht in beiden der oben genannten Fälle, aber mit `content-visibility: auto` können die Inhalte durchsucht, fokussiert und anderweitig von nicht relevant zu relevant bewegt werden. Dies ist nicht der Fall bei `content-visibility: hidden`.

> [!NOTE]
> Um die Übergang von `content-visibility: hidden` zu einem sichtbaren Wert zu animieren, müssen Sie {{cssxref("transition-behavior", "transition-behavior:&nbsp;allow-discrete")}} und {{cssxref("@starting-style")}} Stile setzen. Weitere Informationen finden Sie unter [Übergänge von `display` und `content-visibility`](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions#transitioning_display_and_content-visibility).

## Siehe auch

- [CSS Containment Modul](/de/docs/Web/CSS/CSS_containment)
- [Lernen: CSS-Leistungsoptimierung](/de/docs/Learn_web_development/Extensions/Performance/CSS)
- [CSS Container Queries](/de/docs/Web/CSS/CSS_containment/Container_queries)
- [Eine Einführung in CSS Containment](https://blogs.igalia.com/mrego/2019/01/11/an-introduction-to-css-containment/) über Igalia.com (2019)
- Das [`contentvisibilityautostatechange`](/de/docs/Web/API/Element/contentvisibilityautostatechange_event) Ereignis
