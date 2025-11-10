---
title: Verwendung von CSS Containment
short-title: Verwendung von Containment
slug: Web/CSS/Guides/Containment/Using
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

CSS Containment verbessert die Leistung von Webseiten, indem es dem Browser ermöglicht, einen Teilbaum der Seite vom Rest der Seite zu isolieren. Wenn der Browser weiß, dass ein Teil der Seite unabhängig vom Rest des Inhalts ist, kann das Rendering optimiert und die Leistung verbessert werden.

Die Eigenschaften {{cssxref("contain")}} und {{cssxref("content-visibility")}} ermöglichen Entwicklern, Benutzeragenten darüber zu informieren, ob ein Element überhaupt seine Inhalte rendern soll und ob es seine Inhalte rendern soll, wenn es außerhalb des Bildschirms ist. Der Benutzeragent wendet dann Containment auf Elemente an, wenn es angemessen ist, und verschiebt gegebenenfalls Layout und Rendering, bis es benötigt wird.

Dieser Leitfaden beschreibt die grundlegenden Ziele von CSS Containment und wie Sie `contain` und `content-visibility` für ein besseres Benutzererlebnis nutzen können.

## Einfaches Beispiel

Webseiten enthalten oft mehrere Abschnitte, die logischerweise unabhängig voneinander sind. CSS Containment ermöglicht es, sie beim Rendering wirklich unabhängig voneinander zu behandeln.

Zum Beispiel enthalten Blogs in der Regel mehrere Artikel, von denen jeder eine Überschrift und Inhalte enthält, wie im folgenden Markup.

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

Logisch gesehen ist jeder Artikel unabhängig von den anderen Artikeln auf der Seite. Diese Information ist etwas, das normalerweise dem Webentwickler, der die Seite erstellt, bekannt ist und wahrscheinlich ziemlich offensichtlich ist.
Browser kennen jedoch nicht die Absicht Ihres Inhalts und können nicht davon ausgehen, dass ein Artikel oder ein anderer Abschnitt des Inhalts vollständig in sich geschlossen ist.

Diese Eigenschaft bietet eine Möglichkeit, dies dem Browser zu erklären und ihm explizite Erlaubnis zu geben, Leistungsoptimierungen durchzuführen.
Sie teilt dem Browser mit, dass das interne Layout des Elements vollständig vom Rest der Seite getrennt ist und dass alles über das Element innerhalb seiner Grenzen gemalt wird. Nichts kann sichtbar überlaufen.

Indem wir `contain: content` auf jedes `<article>` setzen, haben wir dies angezeigt; wir haben dem Browser mitgeteilt, dass jeder Artikel unabhängig ist. Der Browser kann dann diese Informationen verwenden, um Entscheidungen darüber zu treffen, wie er jeden `<article>` Inhalt rendert. Zum Beispiel könnte er Artikel, die sich außerhalb des sichtbaren Bereichs befinden, nicht rendern.

Wenn zusätzliche Artikel am Ende der Seite angehängt werden, muss der Browser das Layout oder die Neuzeichnung des vorhergehenden Inhalts nicht neu berechnen; er muss auch keine Bereiche außerhalb des Teilbaums des enthaltenen Elements berühren. Wenn Boxmodell-Eigenschaften jedoch abhängen, muss der Browser das Layout neu berechnen und neu zeichnen. Zum Beispiel, wenn das `<article>` so gestylt ist, dass seine Größe von seinem Inhalt abhängt (z.B. mit `height: auto`), muss der Browser dessen Größenänderung berücksichtigen.

## Wichtige Konzepte und Begriffe

### `contain` Werte

Es gibt vier Arten von Containment: Layout, Paint, Size und Style. Verwenden Sie die Eigenschaft {{cssxref("contain")}}, um den oder die Typen anzugeben, die Sie auf ein Element anwenden möchten, indem Sie eine beliebige Kombination dieser Typen einschließen.

#### Layout Containment

```css
article {
  contain: layout;
}
```

Das Layout bezieht sich normalerweise auf das gesamte Dokument, was bedeutet, dass, wenn Sie ein Element verschieben, das gesamte Dokument behandelt werden muss, als könnten sich Dinge überall bewegen. Mit `contain: layout` können Sie dem Browser mitteilen, dass er nur dieses Element überprüfen muss – alles innerhalb des Elements ist auf dieses Element beschränkt und beeinflusst den Rest der Seite nicht, wobei die enthaltende Box einen unabhängigen [Formatierungskontext](/de/docs/Web/CSS/Guides/Display/Formatting_contexts) schafft.

Außerdem:

- Das {{cssxref("float")}} Layout wird unabhängig innerhalb des angegebenen Elements durchgeführt.
- Abstände kollabieren nicht über eine Layout-Containment-Grenze.
- Der Layout-Container ist ein [containing block](/de/docs/Web/CSS/Guides/Display/Containing_block) für `absolute`- und `fixed`-positionierte Nachfahren.
- Die enthaltende Box schafft einen [Stacking Context](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_context), daher kann {{cssxref("z-index")}} verwendet werden.

> [!NOTE]
> Die `style` und `layout` Werte von `contain` werden automatisch angewendet, wenn die Eigenschaften {{cssxref("container-type")}} und {{cssxref("container-name")}} verwendet werden.

#### Paint Containment

```css
article {
  contain: paint;
}
```

Paint Containment schneidet im Wesentlichen die Box bis zur Polsterungskante der [Hauptbox](/de/docs/Web/CSS/Guides/Display/Visual_formatting_model#the_principal_box) ab. Es kann keinen sichtbaren Überlauf geben. Die gleichen zusätzlichen Hinweise gelten für `paint` Containment wie für `layout` Containment (siehe oben).

Ein weiterer Vorteil ist, dass, wenn das Element mit angewendetem Containment außerhalb des Bildschirms ist, der Browser die Kind-Elemente nicht zeichnen muss – diese sind auch außerhalb des Bildschirms, da sie vollständig von dieser Box enthalten sind.

#### Size Containment

```css
article {
  contain: size;
}
```

Size Containment bietet nicht viel in Bezug auf Leistungsoptimierungen, wenn es alleine verwendet wird. Size Containment bedeutet jedoch, dass die Größe der Kinder des Elements die Größe des Elements selbst nicht beeinflussen kann – seine Größe wird berechnet, als hätte es keine Kinder.

Wenn Sie `contain: size` auf ein Element setzen, müssen Sie die Größe des Elements mit {{cssxref("contain-intrinsic-size")}}, oder den Langform-Eigenschaften {{cssxref("contain-intrinsic-width")}} und {{cssxref("contain-intrinsic-height")}} angeben, in dieser Reihenfolge. Wenn keine Größe festgelegt ist, besteht die Gefahr, dass das Element in den meisten Fällen null-größig ist.

```css
article {
  contain: size;
  contain-intrinsic-size: 100vw auto none;
}
```

#### Style Containment

```css
article {
  contain: style;
}
```

Trotz des Namens bietet Style Containment keine Bereichsstile wie Sie es mit dem [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) oder {{cssxref("@scope")}} bekommen würden.
Der Hauptanwendungsfall für den `style` Wert besteht darin, Situationen zu verhindern, in denen ein [CSS Zähler](/de/docs/Web/CSS/Guides/Counter_styles/Using_counters) in einem Element geändert werden könnte, was dann den Rest des Baums beeinflussen könnte.

Die Verwendung von `contain: style` stellt sicher, dass die Eigenschaften {{cssxref("counter-increment")}} und {{cssxref("counter-set")}} neue Zähler erstellen, die nur auf diesen Teilbaum beschränkt sind.

Sie können mehr als eine Containment-Art einschließen, indem Sie mehrere durch Leerzeichen getrennte Werte, wie `contain: layout paint`, einschließen oder eine der beiden [Spezialwerte](#spezialwerte) verwenden.

#### Spezialwerte

Es gibt zwei Spezialwerte von `contain`, die eine Abkürzung für die ersten drei oder alle vier Containment-Arten sind:

- `content`
- `strict`

Den ersten haben wir im obigen Beispiel gesehen. Die Verwendung von `contain: content` aktiviert `layout`, `paint` und `style` Containment. Da `size` weggelassen wird, ist es ein sicherer Wert, um ihn breit anzuwenden.

Die Deklaration `contain: strict`, die sich so verhält wie die Deklaration `contain: size layout paint style` (die vier durch Leerzeichen getrennte Werte beinhaltet), bietet das meiste Containment. Es ist riskanter zu verwenden, da es `size` Containment anwendet; es besteht die Gefahr, dass eine Box aufgrund der Abhängigkeit von der Größe ihrer Kinder null-größig sein könnte.

Um dieses Risiko zu beseitigen, setzen Sie immer eine Größe bei Verwendung von `strict`:

```css
article {
  contain: strict;
  contain-intrinsic-size: 80vw auto none;
}
```

Das oben Genannte ist gleichbedeutend mit:

```css
article {
  contain: size layout paint style;
  contain-intrinsic-size: 80vw auto none;
}
```

### `content-visibility`

Wenn Sie viel Inhalt haben, der von starkem Containment profitieren würde und oft außerhalb des Bildschirms ist – zum Beispiel, wenn alle Ihre Blog-Posts auf der Startseite des Blogs als unendlich scrollbares Blog sichtbar sind –, kann `content-visibility: auto` verwendet werden, um alle Containments auf einmal anzuwenden.

Die Eigenschaft {{cssxref("content-visibility")}} steuert, ob ein Element seine Inhalte überhaupt rendert, zusammen mit dem Erzwingen einer starken Containment-Gruppe, die es Benutzeragenten ermöglicht, große Layout- und Rendering-Aufgaben zu vermeiden, bis sie benötigt werden. Sie ermöglicht es dem Benutzeragenten, die Rendering-Aufgaben eines Elements (einschließlich Layout und Malen) zu überspringen, bis es benötigt wird – wodurch das initiale Laden der Seite viel schneller wird.

Ihre möglichen Werte sind:

- `visible`: Die Standardverhalten – die Inhalte eines Elements werden wie gewohnt dargestellt und gerendert.
- `hidden`: Das Element [überspringt seine Inhalte](#überspringen_seiner_inhalte). Die übersprungenen Inhalte sind für Benutzeragentenfunktionen wie die Seitensuche, Tabulator-Navigation usw. nicht zugänglich und können weder ausgewählt noch fokussiert werden.
- `auto`: Das Element aktiviert Layout-Containment, Stil-Containment und Paint-Containment, als ob `contain: content` gesetzt wäre. Wenn das Element nicht [für den Benutzer relevant](#relevant_für_den_benutzer) ist, überspringt es auch seine Inhalte. Im Gegensatz zu `hidden` sind die übersprungenen Inhalte weiterhin für Benutzerinteraktionen verfügbar, bleiben fokussierbar, auswählbar, in der regulären Tabulator-Reihenfolge und für die Suche im Inhalt verfügbar.

### Relevant für den Benutzer

Benutzeragenten haben ein Konzept von Inhalten, die [für den Benutzer relevant](https://drafts.csswg.org/css-contain/#relevant-to-the-user) sind. Ein Element wird "für den Benutzer relevant", wenn eines der folgenden zutrifft:

- Das Element erscheint im Viewport oder in einem vom Benutzeragenten definierten Rand um den Viewport (50 % der Viewport-Maße, um der App Zeit zu geben, sich vorzubereiten, wenn sich die Element-Sichtbarkeit ändert).
- Das Element oder seine Inhalte erhalten den Fokus.
- Das Element oder seine Inhalte werden ausgewählt, zum Beispiel durch Ziehen des Mauszeigers über den Text oder durch eine andere Hervorhebungsoperation.
- Das Element oder seine Inhalte werden in der {{Glossary("top_layer", "obersten Schicht")}} platziert.

Wenn `content-visibility: auto` eingestellt ist und der Browser feststellt, dass der Inhalt für den Benutzer relevant ist, wird der Browser diesen Inhalt rendern.

### Überspringen seiner Inhalte

Wenn Sie `content-visibility: hidden` auf ein Element setzen, teilen Sie dem Browser mit, dass es für den Benutzer nicht relevant ist, und daher [sollen seine Inhalte übersprungen werden](https://drafts.csswg.org/css-contain/#skips-its-contents) und nicht gerendert werden. Dies hilft, die Leistung zu verbessern.

Der Browser überspringt die Inhalte eines Elements auch, wenn `content-visibility: auto` darauf gesetzt ist und der Browser feststellt, dass sein Inhalt _nicht_ für den Benutzer relevant ist.

Wenn ein Element seine Inhalte überspringt:

- Es hat Layout-, Stil-, Paint- und Size-Containment aktiviert.
- Seine Inhalte werden nicht gemalt, als ob {{cssxref("visibility", "visibility: hidden")}} darauf gesetzt wäre.
- Seine Inhalte erhalten keine Zeigerereignisse, als ob {{cssxref("pointer-events", "pointer-events: none")}} darauf gesetzt wäre.

Dies geschieht in beiden oben genannten Fällen, aber mit `content-visibility: auto` kann der Inhalt durchsucht, fokussiert und auf andere Weisen von nicht relevant zu relevant werden. Dies ist nicht der Fall für `content-visibility: hidden`.

> [!NOTE]
> Um den Übergang von `content-visibility: hidden` zu einem sichtbaren Wert zu animieren, müssen Sie {{cssxref("transition-behavior", "transition-behavior:&nbsp;allow-discrete")}} und {{cssxref("@starting-style")}} Stile setzen. Sehen Sie sich [den Übergang von `display` und `content-visibility`](/de/docs/Web/CSS/Guides/Transitions/Using#transitioning_display_and_content-visibility) an, um mehr zu erfahren.

## Siehe auch

- [CSS Containment Modul](/de/docs/Web/CSS/Guides/Containment)
- [Lernen: CSS Leistungsoptimierung](/de/docs/Learn_web_development/Extensions/Performance/CSS)
- [CSS Container-Abfragen](/de/docs/Web/CSS/Guides/Containment/Container_queries)
- [Eine Einführung in CSS Containment](https://blogs.igalia.com/mrego/2019/01/11/an-introduction-to-css-containment/) via Igalia.com (2019)
- Das [`contentvisibilityautostatechange`](/de/docs/Web/API/Element/contentvisibilityautostatechange_event) Ereignis
