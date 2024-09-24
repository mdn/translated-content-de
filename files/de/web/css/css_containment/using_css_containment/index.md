---
title: Verwendung von CSS Containment
slug: Web/CSS/CSS_containment/Using_CSS_containment
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}

CSS Containment verbessert die Leistung von Webseiten, indem es dem Browser ermöglicht, einen Teilbaum der Seite vom Rest der Seite zu isolieren. Wenn der Browser weiß, dass ein Teil der Seite unabhängig vom Rest des Inhalts ist, kann das Rendering optimiert und die Leistung verbessert werden.

Die Eigenschaften {{cssxref("contain")}} und {{cssxref("content-visibility")}} ermöglichen es Entwicklern, Benutzeragenten mitzuteilen, ob ein Element seine Inhalte überhaupt rendern sollte und ob es seine Inhalte rendern sollte, wenn es außerhalb des Bildschirms ist. Der Benutzeragent wendet dann Containment auf Elemente an, wenn dies angemessen ist, und kann Layout und Rendering potenziell verschieben, bis sie benötigt werden.

Dieser Leitfaden beschreibt die grundlegenden Ziele des CSS Containment und wie man `contain` und `content-visibility` für eine bessere Benutzererfahrung nutzen kann.

## Einfaches Beispiel

Webseiten enthalten oft mehrere Abschnitte, die logisch unabhängig voneinander sind. CSS Containment ermöglicht es, diese beim Rendern wirklich unabhängig voneinander zu behandeln.

Beispielsweise enthalten Blogs normalerweise mehrere Artikel, von denen jeder eine Überschrift und Inhalte enthält, wie im folgenden Markup.

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

Logisch ist jeder Artikel unabhängig von den anderen Artikeln auf der Seite. Diese Information ist normalerweise bekannt und für den Webentwickler, der die Seite erstellt, wahrscheinlich ziemlich offensichtlich.
Browser wissen jedoch nicht die Absicht Ihrer Inhalte und können nicht davon ausgehen, dass ein Artikel oder ein anderer Inhaltsabschnitt vollständig eigenständig ist.

Diese Eigenschaft bietet eine Möglichkeit, dies dem Browser zu erklären und ihm die ausdrückliche Erlaubnis zu geben, Leistungsoptimierungen vorzunehmen.
Es teilt dem Browser mit, dass das interne Layout des Elements vollständig vom Rest der Seite getrennt ist und dass alles über das Element innerhalb seiner Grenzen gemalt wird. Nichts kann sichtbar überlaufen.

Indem wir `contain: content` auf jedem `<article>` setzen, haben wir dies angedeutet; wir haben dem Browser mitgeteilt, dass jeder Artikel unabhängig ist. Der Browser kann dann diese Informationen nutzen, um Entscheidungen darüber zu treffen, wie jeder `<article>` gerendert wird. Beispielsweise könnte er Artikel, die sich außerhalb des sichtbaren Bereichs befinden, nicht rendern.

Wenn am Ende der Seite zusätzliche Artikel hinzugefügt werden, muss der Browser das Layout oder die Neulackierung der vorhergehenden Inhalte nicht neu berechnen; er muss auch keine Bereiche außerhalb des Teilbaums des enthaltenen Elements berühren. Wenn jedoch Boxmodell-Eigenschaften abhängig sind, muss der Browser das Layout neu berechnen und neu malen. Zum Beispiel, wenn das `<article>` so gestylt ist, dass seine Größe von seinem Inhalt abhängt (z.B. mit `height: auto`), muss der Browser die Größenänderung berücksichtigen.

## Schlüsselkonzepte und Terminologie

### `contain` Werte

Es gibt vier Arten von Containment: Layout, Paint, Größe und Stil. Verwenden Sie die Eigenschaft {{cssxref("contain")}}, um die Art oder Arten anzugeben, die Sie auf ein Element anwenden möchten, indem Sie eine beliebige Kombination dieser Typen einfügen.

#### Layout-Containment

```css
article {
  contain: layout;
}
```

Layout ist normalerweise auf das gesamte Dokument beschränkt, was bedeutet, dass wenn Sie ein Element verschieben, das gesamte Dokument so behandelt werden muss, als ob Dinge überall verschoben worden sein könnten. Durch die Verwendung von `contain: layout` können Sie dem Browser mitteilen, dass er nur dieses Element überprüfen muss — alles innerhalb des Elements ist auf dieses Element beschränkt und beeinflusst den Rest der Seite nicht, wobei die Box ein unabhängiger [Formatierungskontext](/de/docs/Web/CSS/CSS_flow_layout/Introduction_to_formatting_contexts) wird.

Des Weiteren:

- {{cssxref("float")}} Layout wird unabhängig innerhalb des spezifizierten Elements durchgeführt.
- Margins werden nicht über eine Layout-Containment-Grenze hinweg kollabieren.
- Der Layout-Container ist ein [Containing Block](/de/docs/Web/CSS/Containing_block) für `absolute`- und `fixed`-positionierte Nachfahren.
- Die Box schafft einen [Stacking Context](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context), daher kann {{cssxref("z-index")}} verwendet werden.

> [!NOTE]
> Die Werte `style` und `layout` von `contain` werden automatisch angewendet, wenn die Eigenschaften {{cssxref("container-type")}} und {{cssxref("container-name")}} verwendet werden.

#### Paint-Containment

```css
article {
  contain: paint;
}
```

Paint-Containment schneidet im Wesentlichen die Box an der Padding-Kante der [Hauptbox](/de/docs/Web/CSS/Visual_formatting_model#the_principal_box). Es kann keinen sichtbaren Überlauf geben. Die gleichen zusätzlichen Anmerkungen gelten für das `paint`-Containment wie für das `layout`-Containment (siehe oben).

Ein weiterer Vorteil ist, dass, wenn das Element mit Containment angewendet außerhalb des Bildschirms ist, der Browser seine Kindelemente nicht malen muss - diese sind ebenfalls außerhalb des Bildschirms, da sie vollständig von dieser Box enthalten sind.

#### Größen-Containment

```css
article {
  contain: size;
}
```

Größen-Containment bietet nicht viel in Bezug auf Leistungsoptimierungen, wenn es allein verwendet wird. Allerdings bedeutet Größen-Containment, dass die Größe der kindlich enthaltenen Elemente die Größe des Elements selbst nicht beeinflussen kann — seine Größe wird berechnet, als ob es keine Kinder hätte.

Wenn Sie `contain: size` auf ein Element setzen, müssen Sie die Größe des Elements mit {{cssxref("contain-intrinsic-size")}}, oder den Langform-Eigenschaften {{cssxref("contain-intrinsic-width")}} und {{cssxref("contain-intrinsic-height")}} in dieser Reihenfolge angeben. Wenn keine Größe festgelegt ist, besteht die Gefahr, dass das Element in den meisten Fällen nullgröße wird.

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

Trotz des Namens bietet das Stil-Containment keine Scoped Styles wie beim [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) oder {{cssxref("@scope")}}.
Der Hauptanwendungsfall für den `style`-Wert besteht darin, Situationen zu verhindern, in denen ein [CSS-Zähler](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters) in einem Element geändert werden könnte, was dann den Rest des Baumes beeinflussen könnte.

Durch die Verwendung von `contain: style` wird sichergestellt, dass die Eigenschaften {{cssxref("counter-increment")}} und {{cssxref("counter-set")}} neue Zähler erstellen, die nur auf diesen Teilbaum beschränkt sind.

Sie können mehr als einen Containment-Typ einschließen, indem Sie mehrere durch Leerzeichen getrennte Werte hinzufügen, wie `contain: layout paint` oder indem Sie einen der beiden [Spezialwerte](#spezialwerte) verwenden.

#### Spezialwerte

Es gibt zwei Spezialwerte von `contain`, die eine Abkürzung für die ersten drei oder alle vier Containment-Typen sind:

- `content`
- `strict`

Den ersten haben wir im obigen Beispiel getroffen. Die Verwendung von `contain: content` schaltet `layout`, `paint` und `style` Containment ein. Da `size` weggelassen wird, ist es ein sicherer Wert zur breiten Anwendung.

Die Deklaration `contain: strict`, die sich wie die Deklaration `contain: size layout paint style` verhält (die vier mit Leerzeichen getrennte Werte enthält), bietet das meiste Containment. Sie ist riskanter zu verwenden, da sie `size`-Containment anwendet; es besteht das Risiko, dass eine Box auf Nullgröße endet, da sie von der Größe ihrer Kinder abhängt.

Um dieses Risiko zu entfernen, sollten Sie immer eine Größe setzen, wenn Sie `strict` verwenden:

```css
article {
  contain: strict;
  contain-intrinsic-size: 80vw auto;
}
```

Das obige ist dasselbe wie:

```css
article {
  contain: size layout paint style;
  contain-intrinsic-size: 80vw auto;
}
```

### `content-visibility`

Wenn Sie viele Inhalte haben, die von starkem Containment profitieren würden, die oft außerhalb des Bildschirms sind — beispielsweise wenn alle Ihre Blogbeiträge auf den Blog-Startseiten als unendlich scrollbares Blog sichtbar sind — kann `content-visibility: auto` verwendet werden, um alle Containments auf einmal anzuwenden.

Die Eigenschaft {{cssxref("content-visibility")}} steuert, ob ein Element seine Inhalte überhaupt rendert, zusammen mit dem Erzwingen eines starken Satzes von Containments, sodass Benutzeragenten potenziell große Teile von Layout- und Rendering-Arbeiten weglassen können, bis sie benötigt werden. Sie ermöglicht es dem Benutzeragenten, die Rendering-Arbeit eines Elements (einschließlich Layout und Malen) zu überspringen, bis sie benötigt wird — was das initiale Laden der Seite erheblich schneller macht.

Ihre möglichen Werte sind:

- `visible`: Das Standardverhalten — die Inhalte eines Elements werden wie gewohnt layouted und gerendert.
- `hidden`: Das Element [überspringt seine Inhalte](#überspringt_seine_inhalte). Die übersprungenen Inhalte werden für Benutzeragentenfunktionen wie Seitensuche, Tab-Navigationsreihenfolge usw. nicht zugänglich sein, noch auswählbar oder fokussierbar.
- `auto`: Das Element schaltet Layout-, Stil- und Paint-Containment ein, als ob `contain: content` gesetzt wäre. Wenn das Element nicht [für den Benutzer relevant](#relevant_für_den_benutzer) ist, überspringt es auch seine Inhalte. Im Gegensatz zu `hidden` sind die übersprungenen Inhalte weiterhin für Benutzerinteraktionen zugänglich und bleiben fokussierbar, auswählbar, in der regulären Tab-Reihenfolge und für die Inhalten-Suche verfügbar.

### Relevant für den Benutzer

Benutzeragenten haben ein Konzept von Inhalten, die [für den Benutzer relevant](https://drafts.csswg.org/css-contain/#relevant-to-the-user) sind. Ein Element wird "für den Benutzer relevant", wenn eine der folgenden Bedingungen zutrifft:

- Das Element erscheint im Ansichtsfenster oder in einem benutzeragentendefinierten Rand um das Ansichtsfenster (50% der Ansichtsfensterabmessungen, um der Anwendung Zeit zu geben, sich auf die Änderung der Sichtbarkeit des Elements vorzubereiten).
- Das Element oder seine Inhalte erhalten Fokus.
- Das Element oder seine Inhalte werden ausgewählt, beispielsweise durch Ziehen über den Text mit dem Mauszeiger oder durch eine andere Hervorhebungsoperation.
- Das Element oder seine Inhalte werden im {{glossary("top layer")}} platziert.

Wenn `content-visibility: auto` gesetzt ist und der Browser feststellt, dass der Inhalt für den Benutzer relevant ist, wird der Browser diesen Inhalt rendern.

### Überspringt seine Inhalte

Wenn Sie `content-visibility: hidden` auf ein Element setzen, teilen Sie dem Browser mit, dass es für den Benutzer nicht relevant ist und daher [seine Inhalte übersprungen](https://drafts.csswg.org/css-contain/#skips-its-contents) und nicht gerendert werden sollten. Dies trägt zur Leistungsverbesserung bei.

Der Browser wird auch die Inhalte eines Elements überspringen, wenn `content-visibility: auto` darauf gesetzt ist und der Browser feststellt, dass sein Inhalt _nicht_ für den Benutzer relevant ist.

Wenn ein Element seine Inhalte überspringt:

- Es hat Layout-, Stil-, Paint- und Größen-Containment aktiviert.
- Seine Inhalte werden nicht gemalt, als ob {{cssxref("visibility", "visibility: hidden")}} darauf gesetzt wäre.
- Seine Inhalte erhalten keine Zeigerereignisse, als ob {{cssxref("pointer-events", "pointer-events: none")}} darauf gesetzt wäre.

Dies geschieht in beiden der oben genannten Fälle, aber mit `content-visibility: auto` kann der Inhalt durchsucht, fokussiert und ansonsten von nicht relevant zu relevant wechseln. Dies ist nicht der Fall bei `content-visibility: hidden`.

> [!NOTE]
> Um den Übergang von `content-visibility: hidden` zu einem sichtbaren Wert zu animieren, müssen Sie {{cssxref("transition-behavior", "transition-behavior:&nbsp;allow-discrete")}} und {{cssxref("@starting-style")}} Stile festlegen. Siehe [Übergänge von `display` und `content-visibility`](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions#transitioning_display_and_content-visibility), um mehr zu erfahren.

## Siehe auch

- [CSS Containment Modul](/de/docs/Web/CSS/CSS_containment)
- [Lernen: CSS-Leistungsoptimierung](/de/docs/Learn/Performance/CSS)
- [CSS-Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries)
- [Eine Einführung in CSS Containment](https://blogs.igalia.com/mrego/2019/01/11/an-introduction-to-css-containment/) über Igalia.com (2019)
- Das {{domxref("element/contentvisibilityautostatechange_event", "contentvisibilityautostatechange")}} Ereignis
