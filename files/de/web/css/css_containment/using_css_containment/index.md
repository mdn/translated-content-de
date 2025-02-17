---
title: Verwendung von CSS-Containment
slug: Web/CSS/CSS_containment/Using_CSS_containment
l10n:
  sourceCommit: b8f45350a203be9e6e83c6fcb83c93576d8d5d9c
---

{{CSSRef}}

CSS-Containment verbessert die Leistung von Webseiten, indem es dem Browser ermöglicht, einen Teilbaum der Seite vom Rest der Seite zu isolieren. Wenn der Browser weiß, dass ein Teil der Seite unabhängig vom restlichen Inhalt ist, kann das Rendering optimiert und die Leistung verbessert werden.

Die Eigenschaften {{cssxref("contain")}} und {{cssxref("content-visibility")}} ermöglichen es Entwicklern, Benutzeragenten darüber zu informieren, ob ein Element seinen Inhalt überhaupt rendern soll und ob dieser gerendert werden soll, wenn er außerhalb des sichtbaren Bereichs liegt. Der Benutzeragent wendet dann Containment auf Elemente an, wenn es angemessen ist, und verschiebt möglicherweise Layout- und Rendering-Aufgaben, bis sie benötigt werden.

Dieser Leitfaden beschreibt die grundlegenden Ziele von CSS-Containment und wie `contain` und `content-visibility` eingesetzt werden können, um die Nutzererfahrung zu verbessern.

## Grundlegendes Beispiel

Webseiten enthalten häufig mehrere Abschnitte, die logisch unabhängig voneinander sind. CSS-Containment ermöglicht es, diese Abschnitte beim Rendering wirklich unabhängig voneinander zu behandeln.

Zum Beispiel enthalten Blogs normalerweise mehrere Artikel, die jeweils eine Überschrift und Inhalte enthalten, wie im folgenden Markup:

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

Mit CSS wenden wir die Eigenschaft {{cssxref("contain")}} mit einem Wert von `content` auf jeden Artikel an. Der Wert `content` ist eine Kurzform für `contain: layout paint style`:

```css
article {
  contain: content;
}
```

Logisch gesehen ist jeder Artikel unabhängig von den anderen Artikeln auf der Seite. Diese Information ist normalerweise dem Entwickler der Seite bekannt und ziemlich offensichtlich. Browser wissen jedoch nichts über die Absichten Ihrer Inhalte und können nicht annehmen, dass ein Artikel oder ein anderer Inhaltsabschnitt völlig eigenständig ist.

Diese Eigenschaft bietet eine Möglichkeit, dem Browser dies mitzuteilen und ihm ausdrücklich die Erlaubnis zu erteilen, Leistungsoptimierungen vorzunehmen. Sie sagt dem Browser, dass das interne Layout des Elements vollständig vom Rest der Seite getrennt ist und dass alles im Inneren des Elements innerhalb seiner Grenzen gezeichnet wird. Nichts kann sichtbar überlaufen.

Indem wir `contain: content` auf jedes `<article>` setzen, haben wir dies dem Browser mitgeteilt: Wir haben ihm gesagt, dass jeder Artikel unabhängig ist. Der Browser kann diese Information dann nutzen, um Entscheidungen darüber zu treffen, wie jede `<article>`-Inhaltskomponente gerendert wird. Zum Beispiel könnte er Artikel, die außerhalb des sichtbaren Bereichs liegen, nicht rendern.

Wenn am Ende der Seite zusätzliche Artikel hinzugefügt werden, muss der Browser das Layout oder das vorherige Rendering nicht neu berechnen; außerdem muss er keinen Bereich außerhalb des Unterbaums des enthaltenden Elements bearbeiten. Wenn jedoch Eigenschaften des Box-Modells voneinander abhängig sind, muss der Browser möglicherweise das Layout neu berechnen und neu rendern. Wenn beispielsweise das `<article>`-Element so gestaltet ist, dass seine Größe von seinem Inhalt abhängt (z. B. mit `height: auto`), muss der Browser die Größenänderung berücksichtigen.

## Zentrale Konzepte und Terminologie

### `contain`-Werte

Es gibt vier Arten von Containment: Layout, Paint, Size und Style. Nutzen Sie die Eigenschaft {{cssxref("contain")}}, um den Typ oder die Typen anzugeben, die Sie auf ein Element anwenden möchten, indem Sie eine beliebige Kombination dieser Typen einschließen.

#### Layout-Containment

```css
article {
  contain: layout;
}
```

Das Layout erstreckt sich normalerweise auf das gesamte Dokument, was bedeutet, dass beim Verschieben eines Elements das gesamte Dokument behandelt werden muss, als ob sich alles überall verschieben könnte. Indem Sie `contain: layout` verwenden, können Sie dem Browser mitteilen, dass er nur dieses Element überprüfen muss — alles im Inneren des Elements ist auf dieses Element beschränkt und beeinflusst nicht den Rest der Seite. Die enthaltende Box etabliert einen eigenständigen [Formatierungskontext](/de/docs/Web/CSS/CSS_display/Introduction_to_formatting_contexts).

Zusätzlich:

- Das {{cssxref("float")}}-Layout wird unabhängig innerhalb des angegebenen Elements ausgeführt.
- Ränder werden nicht über eine Layout-Containment-Grenze hinweg gekürzt.
- Das Layout-Containment stellt einen [Containing Block](/de/docs/Web/CSS/CSS_display/Containing_block) für absolut- und fest positionierte Nachkommen dar.
- Die enthaltende Box erstellt einen [Stacking Context](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context), daher kann {{cssxref("z-index")}} verwendet werden.

> [!NOTE]
> Die Werte `style` und `layout` von `contain` werden automatisch angewendet, wenn die Eigenschaften {{cssxref("container-type")}} und {{cssxref("container-name")}} verwendet werden.

#### Paint-Containment

```css
article {
  contain: paint;
}
```

Paint-Containment schneidet die Box grundsätzlich an der Paddingkante der [Hauptbox](/de/docs/Web/CSS/Visual_formatting_model#the_principal_box) ab. Es kann keinen sichtbaren Überlauf geben. Die gleichen zusätzlichen Hinweise gelten für `paint`-Containment wie für `layout`-Containment (siehe oben).

Ein weiterer Vorteil ist, dass der Browser bei einem außerhalb des sichtbaren Bereichs befindlichen Element mit Containment die Kind-Elemente nicht zeichnen muss – diese befinden sich ebenfalls vollständig außerhalb des sichtbaren Bereichs der Box.

#### Size-Containment

```css
article {
  contain: size;
}
```

Size-Containment bietet allein nicht viel in Bezug auf Leistungsoptimierungen. Es bedeutet jedoch, dass die Größe der Kindelemente eines size-enthaltenen Elements dessen Größe nicht beeinflussen kann - seine Größe wird berechnet, als hätte es keine Kinder.

Wenn Sie `contain: size` auf ein Element anwenden, müssen Sie die Größe des Elements mit {{cssxref("contain-intrinsic-size")}}, oder den Langform-Eigenschaften {{cssxref("contain-intrinsic-width")}} und {{cssxref("contain-intrinsic-height")}} angeben. Wenn keine Größe festgelegt ist, läuft das Element oft Gefahr, null Größe zu haben.

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

Trotz des Namens bietet Style-Containment keine gescopen Styles wie etwa beim [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) oder {{cssxref("@scope")}}. Der Hauptanwendungsfall für den Wert `style` besteht darin, Situationen zu verhindern, in denen ein [CSS-Zähler](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters) in einem Element geändert werden könnte, was sich dann auf den Rest des Baums auswirken könnte.

Mit `contain: style` wird sichergestellt, dass die Eigenschaften {{cssxref("counter-increment")}} und {{cssxref("counter-set")}} neue Zähler ausschließlich dem Unterbaum zuordnen.

Sie können mehrere Containment-Typen einschließen, indem Sie mehrere durch Leerzeichen getrennte Werte wie `contain: layout paint` angeben oder eine der beiden [Sonderwerte](#sonderwerte) verwenden.

#### Sonderwerte

Es gibt zwei Sonderwerte von `contain`, die Kurzformen für die ersten drei oder alle vier Containment-Typen darstellen:

- `content`
- `strict`

Wir haben den ersten im obigen Beispiel kennengelernt. Mit `contain: content` werden `layout`, `paint` und `style` eingeschaltet. Da `size` weggelassen wird, ist dies ein sicherer Wert, der weitreichend angewendet werden kann.

Die Deklaration `contain: strict`, die sich wie die Deklaration `contain: size layout paint style` verhält (die vier durch Leerzeichen getrennte Werte enthält), bietet das weitreichendste Containment. Es ist riskanter in der Verwendung, da es `size`-Containment anwendet; das Risiko besteht, dass eine Box aufgrund der Abhängigkeit von der Größe ihrer Kinder null Größe haben könnte.

Um dieses Risiko zu beseitigen, sollten Sie immer eine Größe festlegen, wenn Sie `strict` verwenden:

```css
article {
  contain: strict;
  contain-intrinsic-size: 80vw auto;
}
```

Das obige ist gleichbedeutend mit:

```css
article {
  contain: size layout paint style;
  contain-intrinsic-size: 80vw auto;
}
```

### `content-visibility`

Wenn Sie viele Inhalte haben, die starkes Containment benötigen und oft außerhalb des sichtbaren Bereichs liegen – zum Beispiel, wenn auf der Startseite eines Blogs alle Blogbeiträge als endlos scrollbare Liste angezeigt werden – können Sie `content-visibility: auto` verwenden, um alle Containments auf einmal anzuwenden.

Die Eigenschaft {{cssxref("content-visibility")}} steuert, ob ein Element seine Inhalte überhaupt rendert, zusammen mit der Aktivierung eines starken Satzes von Containments, wodurch es Benutzeragenten ermöglicht wird, große Teile von Layout- und Rendering-Arbeit potenziell zu überspringen, bis sie benötigt werden. Sie erlaubt dem Benutzeragenten, die Rendering-Arbeit eines Elements (einschließlich Layout und Painting) zu überspringen, bis sie benötigt wird — was das Initialisieren der Seite erheblich beschleunigt.

Mögliche Werte sind:

- `visible`: Die Standardverhalten – Inhalte eines Elements werden wie gewohnt layoutet und gerendert.
- `hidden`: Das Element [überspringt seine Inhalte](#überspringt_seine_inhalte). Die übersprungenen Inhalte sind nicht für Benutzeragenten-Funktionen wie die Seitensuche, Navigation in der Tab-Reihenfolge usw. zugänglich und können auch nicht ausgewählt oder fokussiert werden.
- `auto`: Das Element schaltet Layout-, Stil- und Paint-Containment ein, als wäre `contain: content` gesetzt. Wenn das Element nicht [für den Benutzer relevant](#für_den_benutzer_relevant) ist, überspringt es auch seine Inhalte. Im Gegensatz zu `hidden` sind die übersprungenen Inhalte weiterhin über Benutzerinteraktionen verfügbar, bleiben fokussierbar, auswählbar, in der regulären Tab-Reihenfolge und für die Inhaltesuche verfügbar.

### Für den Benutzer relevant

Benutzeragenten haben ein Konzept von Inhalten, die [für den Benutzer relevant sind](https://drafts.csswg.org/css-contain/#relevant-to-the-user). Ein Element wird "für den Benutzer relevant", wenn eines der folgenden Kriterien erfüllt ist:

- Das Element erscheint im Ansichtsfeld oder in einem benutzeragentendefinierten Rand um das Ansichtsfeld (50 % der Ansichtsfenstergröße, um der Anwendung Zeit zur Vorbereitung zu geben, wenn sich die Sichtbarkeit des Elements ändert).
- Das Element oder seine Inhalte erhalten den Fokus.
- Das Element oder seine Inhalte werden ausgewählt, z. B. durch Ziehen des Mauszeigers über den Text oder durch eine andere Hervorhebungsoperation.
- Das Element oder seine Inhalte werden in die {{Glossary("top_layer", "Top-Ebene")}} verschoben.

Wenn `content-visibility: auto` gesetzt ist und der Browser bestimmt, dass Inhalte für den Benutzer relevant sind, rendert der Browser diese Inhalte.

### Überspringt seine Inhalte

Wenn Sie `content-visibility: hidden` auf ein Element setzen, teilen Sie dem Browser mit, dass es nicht für den Benutzer relevant ist und daher [seine Inhalte übersprungen](https://drafts.csswg.org/css-contain/#skips-its-contents) und nicht gerendert werden sollen. Dies hilft, die Leistung zu verbessern.

Der Browser überspringt auch die Inhalte eines Elements, wenn `content-visibility: auto` darauf angewendet wird und bestimmt wird, dass seine Inhalte _nicht_ für den Benutzer relevant sind.

Wenn ein Element seine Inhalte überspringt:

- Es hat Layout-, Stil-, Paint- und Size-Containment eingeschaltet.
- Seine Inhalte werden nicht gemalt, als ob {{cssxref("visibility", "visibility: hidden")}} darauf gesetzt worden wäre.
- Seine Inhalte erhalten keine Zeigerereignisse, als ob {{cssxref("pointer-events", "pointer-events: none")}} darauf gesetzt worden wäre.

Dies passiert bei beiden oben genannten Fällen, aber mit `content-visibility: auto` können die Inhalte durchsucht, fokussiert und anderweitig von nicht relevant zu relevant geändert werden. Dies gilt nicht für `content-visibility: hidden`.

> [!NOTE]
> Um den Übergang von `content-visibility: hidden` zu einem sichtbaren Wert zu animieren, müssen Sie {{cssxref("transition-behavior", "transition-behavior:&nbsp;allow-discrete")}} und {{cssxref("@starting-style")}}-Stile setzen. Siehe [Transitioning `display` und `content-visibility`](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions#transitioning_display_and_content-visibility), um mehr zu erfahren.

## Siehe auch

- [CSS-Containment-Modul](/de/docs/Web/CSS/CSS_containment)
- [Lernen: CSS-Leistungsoptimierung](/de/docs/Learn_web_development/Extensions/Performance/CSS)
- [CSS-Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries)
- [Eine Einführung in CSS-Containment](https://blogs.igalia.com/mrego/2019/01/11/an-introduction-to-css-containment/) über Igalia.com (2019)
- Das [`contentvisibilityautostatechange`](/de/docs/Web/API/Element/contentvisibilityautostatechange_event)-Ereignis
