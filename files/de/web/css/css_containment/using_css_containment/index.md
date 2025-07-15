---
title: Verwendung von CSS-Containment
short-title: Containment verwenden
slug: Web/CSS/CSS_containment/Using_CSS_containment
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

CSS-Containment verbessert die Leistung von Webseiten, indem es dem Browser ermöglicht, einen Teilbaum der Seite vom Rest der Seite abzugrenzen. Wenn der Browser weiß, dass ein Teil der Seite unabhängig vom restlichen Inhalt ist, kann die Darstellung optimiert und die Leistung verbessert werden.

Die Eigenschaften {{cssxref("contain")}} und {{cssxref("content-visibility")}} ermöglichen es Entwicklern, Benutzeragenten zu informieren, ob ein Element seine Inhalte überhaupt rendern soll und ob es seine Inhalte rendern soll, wenn es außerhalb des Bildschirms liegt. Der Benutzeragent wendet dann Containment bei Bedarf auf Elemente an und verschiebt möglicherweise das Layout und die Darstellung, bis es erforderlich ist.

Dieser Leitfaden beschreibt die grundsätzlichen Ziele von CSS-Containment und wie Sie `contain` und `content-visibility` nutzen können, um eine bessere Benutzererfahrung zu erreichen.

## Einfaches Beispiel

Webseiten enthalten oft mehrere Abschnitte, die logisch unabhängig voneinander sind. CSS-Containment ermöglicht es, dass diese in Bezug auf die Darstellung tatsächlich unabhängig voneinander behandelt werden.

Beispielsweise enthalten Blogs normalerweise mehrere Artikel, die jeweils eine Überschrift und Inhalte enthalten, wie im folgenden Markup gezeigt.

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

Mit CSS setzen wir die {{cssxref("contain")}}-Eigenschaft mit dem Wert `content` für jeden Artikel. Der Wert `content` ist eine Kurzform für `contain: layout paint style`:

```css
article {
  contain: content;
}
```

Logisch gesehen ist jeder Artikel unabhängig von den anderen Artikeln auf der Seite. Diese Information ist normalerweise bekannt und für den Webentwickler, der die Seite erstellt, wahrscheinlich ziemlich offensichtlich. Allerdings wissen Browser nichts über die Absicht Ihrer Inhalte und können nicht davon ausgehen, dass ein Artikel oder ein anderer Inhaltsabschnitt vollständig eigenständig ist.

Diese Eigenschaft bietet eine Möglichkeit, dies dem Browser mitzuteilen und ihm die ausdrückliche Erlaubnis für Leistungsoptimierungen zu geben. Sie teilt dem Browser mit, dass das interne Layout des Elements vollständig vom Rest der Seite getrennt ist und dass alles über das Element innerhalb seiner Grenzen gezeichnet wird. Nichts kann sichtbar überlaufen.

Indem Sie `contain: content` auf jedem `<article>` setzen, haben Sie dies angezeigt; Sie haben dem Browser mitgeteilt, dass jeder Artikel unabhängig ist. Der Browser kann dann diese Informationen nutzen, um Entscheidungen darüber zu treffen, wie jeder `<article>` von Inhalt dargestellt wird. Beispielsweise könnte er Artikel, die sich außerhalb des sichtbaren Bereichs befinden, nicht rendern.

Wenn zusätzliche Artikel am Ende der Seite hinzugefügt werden, muss der Browser das Layout oder die Darstellung des vorhergehenden Inhalts nicht neu berechnen; er muss auch keinen Bereich außerhalb des Teilbaums des beinhaltenden Elements berühren. Wenn jedoch Boxmodell-Eigenschaften abhängig sind, muss der Browser das Layout neu berechnen und neu zeichnen. Wenn beispielsweise das `<article>` so gestylt ist, dass seine Größe von seinen Inhalten abhängt (z.B. mit `height: auto`), muss der Browser seine Größenänderung berücksichtigen.

## Schlüsselkonzepte und Terminologie

### `contain`-Werte

Es gibt vier Arten von Containment: Layout, Farbe, Größe und Stil. Verwenden Sie die {{cssxref("contain")}}-Eigenschaft, um den oder die Typen anzugeben, die Sie für ein Element anwenden möchten, indem Sie eine beliebige Kombination dieser Typen einbeziehen.

#### Layout-Containment

```css
article {
  contain: layout;
}
```

Das Layout bezieht sich normalerweise auf das gesamte Dokument, was bedeutet, dass, wenn Sie ein Element bewegen, das gesamte Dokument so behandelt werden muss, als ob sich Dinge überall hin verschoben haben könnten. Durch die Verwendung von `contain: layout` können Sie dem Browser mitteilen, dass er nur dieses Element überprüfen muss – alles innerhalb des Elements bezieht sich nur auf dieses Element und beeinflusst nicht den Rest der Seite, wobei die beinhaltende Box einen unabhängigen [Formatierungskontext](/de/docs/Web/CSS/CSS_display/Introduction_to_formatting_contexts) bildet.

Zusätzlich:

- {{cssxref("float")}}-Layouts werden unabhängig innerhalb des angegebenen Elements durchgeführt.
- Ränder kollabieren nicht über eine Layout-Containment-Grenze hinweg.
- Der Layout-Container ist ein [beinhaltender Block](/de/docs/Web/CSS/CSS_display/Containing_block) für `absolute`- und `fixed`-positionierte Nachfahren.
- Die beinhaltende Box erstellt einen [Stacking-Kontext](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context), daher kann {{cssxref("z-index")}} verwendet werden.

> [!NOTE]
> Die Werte `style` und `layout` von `contain` werden automatisch angewendet, wenn die Eigenschaften {{cssxref("container-type")}} und {{cssxref("container-name")}} verwendet werden.

#### Farbcontainment

```css
article {
  contain: paint;
}
```

Farbcontainment clippt im Wesentlichen die Box an die Polsterkante der [Hauptbox](/de/docs/Web/CSS/CSS_display/Visual_formatting_model#the_principal_box). Es kann keinen sichtbaren Überlauf geben. Die gleichen zusätzlichen Hinweise gelten für `paint`-Containment wie für `layout`-Containment (siehe oben).

Ein weiterer Vorteil ist, dass, wenn das mit Containment versehene Element außerhalb des Bildschirms ist, der Browser seine Kindelemente nicht zeichnen muss - diese sind ebenfalls außerhalb des Bildschirms, da sie vollständig von dieser Box enthalten sind.

#### Größencontainment

```css
article {
  contain: size;
}
```

Größencontainment bietet nicht viel in Bezug auf Leistungsoptimierungen, wenn es alleine verwendet wird. Größencontainment bedeutet jedoch, dass die Größe der Kinder eines größenbeschränkten Elements die Größe des Elements selbst nicht beeinflussen kann - seine Größe wird berechnet, als hätte es keine Kinder.

Wenn Sie `contain: size` auf ein Element setzen, müssen Sie die Größe des Elements mit {{cssxref("contain-intrinsic-size")}}, oder den Langformeigenschaften {{cssxref("contain-intrinsic-width")}} und {{cssxref("contain-intrinsic-height")}} angeben, in dieser Reihenfolge. Wenn keine Größe festgelegt ist, besteht das Risiko, dass das Element in den meisten Fällen eine Größe von null hat.

```css
article {
  contain: size;
  contain-intrinsic-size: 100vw auto none;
}
```

#### Stil-Containment

```css
article {
  contain: style;
}
```

Trotz des Namens bietet Stil-Containment keine scoping für Stile, wie Sie es vom [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) oder {{cssxref("@scope")}} erhalten würden. Der Hauptanwendungsfall für den `style`-Wert ist das Verhindern von Situationen, in denen ein [CSS-Zähler](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters) in einem Element geändert werden könnte, was dann den Rest des Baums beeinflussen könnte.

Mit `contain: style` wird sichergestellt, dass die Eigenschaften {{cssxref("counter-increment")}} und {{cssxref("counter-set")}} neue Zähler erstellen, die nur auf diesen Teilbaum begrenzt sind.

Sie können mehr als einen Containment-Typ einbeziehen, indem Sie mehrere durch Leerzeichen getrennte Werte, wie `contain: layout paint`, einfügen oder indem Sie einen der beiden [Spezialwerte](#spezialwerte) verwenden.

#### Spezialwerte

Es gibt zwei Spezialwerte von `contain`, die Kurzformen für die ersten drei oder alle vier Containment-Typen sind:

- `content`
- `strict`

Den ersten haben wir im obigen Beispiel gesehen. Durch die Verwendung von `contain: content` wird `layout`, `paint` und `style`-Containment aktiviert. Da `size` weggelassen wird, ist es ein sicherer Wert, um ihn weit verbreitet anzuwenden.

Die Deklaration `contain: strict`, die sich genauso verhält wie die Deklaration `contain: size layout paint style` (die vier durch Leerzeichen getrennte Werte enthält), bietet das meiste Containment. Es ist riskanter zu verwenden, da es `size`-Containment anwendet; das Risiko besteht darin, dass eine Box aufgrund der Abhängigkeit von der Größe ihrer Kinder am Ende eine Größe von null haben könnte.

Um dieses Risiko zu vermeiden, legen Sie immer eine Größe fest, wenn Sie `strict` verwenden:

```css
article {
  contain: strict;
  contain-intrinsic-size: 80vw auto none;
}
```

Das obige ist das gleiche wie:

```css
article {
  contain: size layout paint style;
  contain-intrinsic-size: 80vw auto none;
}
```

### `content-visibility`

Wenn Sie eine Menge Inhalt haben, der von starkem Containment profitieren würde und häufig außerhalb des Bildschirms liegt — beispielsweise wenn alle Ihre Blog-Beiträge auf den Startseiten des Blogs als unendlich scrollbarer Blog sichtbar sind — kann `content-visibility: auto` verwendet werden, um alle Containments gleichzeitig anzuwenden.

Die Eigenschaft {{cssxref("content-visibility")}} steuert, ob ein Element seine Inhalte überhaupt rendert, sowie die Anwendung einer starken Reihe von Containments, die es Benutzeragenten ermöglichen, potenziell große Bereiche des Layouts und der Darstellung zu überspringen, bis sie benötigt werden. Sie ermöglicht es dem Benutzeragenten, das Rendering-Arbeit eines Elements (einschließlich Layout und Malen) zu überspringen, bis es benötigt wird — was den anfänglichen Seitenladevorgang erheblich beschleunigt.

Ihre möglichen Werte sind:

- `visible`: Das Standardverhalten — die Inhalte eines Elements werden wie gewohnt verteilt und gerendert.
- `hidden`: Das Element [überspringt seine Inhalte](#überspringt_seine_inhalte). Die übersprungenen Inhalte sind für Benutzeragenten-Funktionen wie Suchen auf der Seite, Tab-Reihenfolge-Navigation usw. weder zugänglich noch auswählbar oder fokussierbar.
- `auto`: Das Element schaltet Layout-Containment, Stil-Containment und Farbcontainment ein, als ob `contain: content` gesetzt wäre. Wenn das Element für den Benutzer nicht [relevant](#relevant_für_den_benutzer) ist, überspringt es auch seine Inhalte. Im Gegensatz zu `hidden` sind die übersprungenen Inhalte weiterhin für Benutzerinteraktionen verfügbar, bleiben fokussierbar, auswählbar, in regulärer Tab-Reihenfolge und inhaltsinternen Suchvorgängen verfügbar.

### Relevant für den Benutzer

Benutzeragenten haben ein Konzept von Inhalten, die [für den Benutzer relevant](https://drafts.csswg.org/css-contain/#relevant-to-the-user) sind. Ein Element wird "für den Benutzer relevant", wenn eine der folgenden Bedingungen zutrifft:

- Das Element erscheint im Viewport oder in einem vom Benutzeragenten definierten Rand um den Viewport (50% der Viewport-Dimensionen, um der App Zeit zu geben, sich auf geänderte Sichtbarkeit des Elements vorzubereiten).
- Das Element oder seine Inhalte erlangen den Fokus.
- Das Element oder seine Inhalte werden ausgewählt, beispielsweise indem man mit dem Mauszeiger über den Text zieht oder durch eine andere Hervorhebungsoperation.
- Das Element oder seine Inhalte werden in die {{Glossary("top_layer", "oberste Ebene")}} verschoben.

Wenn `content-visibility: auto` gesetzt ist und der Browser feststellt, dass der Inhalt für den Benutzer relevant ist, rendert der Browser diesen Inhalt.

### Überspringt seine Inhalte

Wenn Sie `content-visibility: hidden` auf ein Element setzen, teilen Sie dem Browser mit, dass es für den Benutzer nicht relevant ist, und daher [sollten seine Inhalte übersprungen werden](https://drafts.csswg.org/css-contain/#skips-its-contents) und nicht gerendert werden. Dies trägt zur Leistungssteigerung bei.

Der Browser wird die Inhalte eines Elements auch überspringen, wenn `content-visibility: auto` darauf gesetzt ist und der Browser feststellt, dass der Inhalt _nicht_ für den Benutzer relevant ist.

Wenn ein Element seine Inhalte überspringt:

- Sind Layout-, Stil-, Farb- und Größencontainment eingeschaltet.
- Seine Inhalte werden nicht gemalt, als ob {{cssxref("visibility", "visibility: hidden")}} darauf gesetzt wäre.
- Seine Inhalte empfangen keine Zeigerereignisse, als ob {{cssxref("pointer-events", "pointer-events: none")}} darauf gesetzt wäre.

Dies geschieht in beiden Fällen, aber bei `content-visibility: auto` können die Inhalte durchsucht, fokussiert und anderweitig von nicht relevant zu relevant verschoben werden. Dies gilt nicht für `content-visibility: hidden`.

> [!NOTE]
> Um den Übergang von `content-visibility: hidden` zu einem sichtbaren Wert zu animieren, müssen Sie {{cssxref("transition-behavior", "transition-behavior:&nbsp;allow-discrete")}} und {{cssxref("@starting-style")}}-Stile setzen. Siehe [Übergang von `display` und `content-visibility`](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions#transitioning_display_and_content-visibility), um mehr zu erfahren.

## Siehe auch

- [CSS Containment-Modul](/de/docs/Web/CSS/CSS_containment)
- [Lernen: CSS-Leistungsoptimierung](/de/docs/Learn_web_development/Extensions/Performance/CSS)
- [CSS Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries)
- [Eine Einführung in CSS-Containment](https://blogs.igalia.com/mrego/2019/01/11/an-introduction-to-css-containment/) über Igalia.com (2019)
- Das [`contentvisibilityautostatechange`](/de/docs/Web/API/Element/contentvisibilityautostatechange_event)-Ereignis
