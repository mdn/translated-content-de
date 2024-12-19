---
title: Verwendung von CSS Containment
slug: Web/CSS/CSS_containment/Using_CSS_containment
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{CSSRef}}

CSS Containment verbessert die Leistung von Webseiten, indem es dem Browser ermöglicht, einen Teilbaum der Seite vom Rest der Seite zu isolieren. Wenn der Browser weiß, dass ein Teil der Seite unabhängig vom restlichen Inhalt ist, kann das Rendering optimiert und die Leistung verbessert werden.

Die Eigenschaften {{cssxref("contain")}} und {{cssxref("content-visibility")}} erlauben es Entwicklern, Benutzeragenten mitzuteilen, ob ein Element seine Inhalte überhaupt rendern soll und ob es seine Inhalte rendern soll, wenn es außerhalb des sichtbaren Bereichs ist. Der Benutzeragent wendet dann Containment auf Elemente an, wenn dies angebracht ist, und kann möglicherweise das Layout und Rendering aufschieben, bis es benötigt wird.

Dieser Leitfaden beschreibt die grundlegenden Ziele von CSS Containment und wie Sie `contain` und `content-visibility` für eine bessere Benutzererfahrung nutzen können.

## Grundlegendes Beispiel

Webseiten enthalten oft mehrere Abschnitte, die logisch unabhängig voneinander sind. CSS Containment ermöglicht es, sie beim Rendering wirklich unabhängig voneinander zu behandeln.

Beispielsweise enthalten Blogs in der Regel mehrere Artikel, jeder mit einer Überschrift und Inhalt, wie im folgenden Markup dargestellt.

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

Logisch ist jeder Artikel unabhängig von den anderen Artikeln auf der Seite. Diese Information ist etwas, das dem Webentwickler, der die Seite erstellt, normalerweise bekannt und wahrscheinlich offensichtlich ist. Browser wissen jedoch nicht, welche Absicht Sie mit Ihrem Inhalt verfolgen, und können nicht davon ausgehen, dass ein Artikel oder ein anderer Inhaltsabschnitt völlig eigenständig ist.

Diese Eigenschaft bietet eine Möglichkeit, dies dem Browser zu erklären und ihm explizit zu erlauben, Leistungsoptimierungen vorzunehmen. Sie teilt dem Browser mit, dass das interne Layout des Elements vollständig vom Rest der Seite getrennt ist und dass alles über das Element innerhalb seiner Grenzen gezeichnet wird. Nichts kann sichtbar überlaufen.

Indem wir `contain: content` auf jedes `<article>` setzen, haben wir dies angegeben; wir haben dem Browser mitgeteilt, dass jeder Artikel unabhängig ist. Der Browser kann dann diese Informationen verwenden, um Entscheidungen darüber zu treffen, wie jeder `<article>`-Inhalt gerendert wird. Beispielsweise könnte er Artikel, die sich außerhalb des sichtbaren Bereichs befinden, nicht rendern.

Wenn zusätzliche Artikel am Ende der Seite hinzugefügt werden, muss der Browser weder das Layout neu berechnen noch den vorherigen Inhalt neu zeichnen; er muss auch keinen Bereich außerhalb des Teilbaums des enthaltenen Elements berühren. Wenn Box-Modell-Eigenschaften jedoch abhängig sind, muss der Browser Layout und Rendering neu berechnen. Beispielsweise, wenn das `<article>` so gestylt ist, dass seine Größe von seinem Inhalt abhängt (z.B. mit `height: auto`), dann muss der Browser berücksichtigen, dass sich seine Größe ändern könnte.

## Schlüsselkonzepte und Terminologie

### `contain` Werte

Es gibt vier Arten von Containment: Layout, Paint, Size und Style. Verwenden Sie die Eigenschaft {{cssxref("contain")}}, um den Typ oder die Typen zu bestimmen, die Sie für ein Element anwenden möchten, indem Sie eine beliebige Kombination dieser Typen einschließen.

#### Layout-Containment

```css
article {
  contain: layout;
}
```

Layouts beziehen sich normalerweise auf das gesamte Dokument, was bedeutet, dass, wenn Sie ein Element verschieben, das gesamte Dokument so behandelt werden muss, als ob sich Dinge überall bewegt haben könnten. Durch die Verwendung von `contain: layout` können Sie dem Browser mitteilen, dass er nur dieses Element überprüfen muss – alles innerhalb des Elements ist auf dieses Element beschränkt und beeinflusst nicht den Rest der Seite, wobei die umschließende Box einen unabhängigen [Formatting Context](https://developer.mozilla.org/de/docs/Web/CSS/CSS_flow_layout/Introduction_to_formatting_contexts) erstellt.

Des Weiteren:

- Das {{cssxref("float")}} Layout wird unabhängig innerhalb des angegebenen Elements durchgeführt.
- Margen kollabieren nicht über eine Layout-Containment-Grenze hinweg.
- Der Layout-Container ist ein [Containing Block](https://developer.mozilla.org/de/docs/Web/CSS/Containing_block) für absolut und fixed positionierte Nachfahren.
- Die umschließende Box erstellt einen [Stacking Context](https://developer.mozilla.org/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context), daher kann {{cssxref("z-index")}} verwendet werden.

> [!NOTE]
> Die Werte `style` und `layout` von `contain` werden automatisch angewendet, wenn die Eigenschaften {{cssxref("container-type")}} und {{cssxref("container-name")}} verwendet werden.

#### Paint-Containment

```css
article {
  contain: paint;
}
```

Paint-Containment schneidet im Wesentlichen die Box an der Padding-Kante der [Hauptbox](https://developer.mozilla.org/de/docs/Web/CSS/Visual_formatting_model#the_principal_box) ab. Es kann kein sichtbarer Überlauf auftreten. Die gleichen zusätzlichen Hinweise gelten für `paint` Containment wie für `layout` Containment (siehe oben).

Ein weiterer Vorteil ist, dass der Browser die Kindelemente nicht rendern muss, wenn das Containment-Element außerhalb des sichtbaren Bereichs ist – diese sind ebenfalls bei dieser Box vollständig enthalten und somit auch außerhalb des sichtbaren Bereichs.

#### Size-Containment

```css
article {
  contain: size;
}
```

Size-Containment bietet nicht viel in Bezug auf Leistungsoptimierungen, wenn es allein verwendet wird. Size-Containment bedeutet jedoch, dass die Größe der kinderabhängigen Elemente die Größe des Elements selbst nicht beeinflussen kann – seine Größe wird berechnet, als hätte es keine Kinder.

Wenn Sie `contain: size` auf ein Element setzen, müssen Sie die Größe des Elements mit {{cssxref("contain-intrinsic-size")}} oder die Langform-Eigenschaften {{cssxref("contain-intrinsic-width")}} und {{cssxref("contain-intrinsic-height")}} in dieser Reihenfolge festlegen. Ist keine Größe festgelegt, läuft das Element stets Gefahr, in den meisten Fällen die Größe null zu haben.

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

Trotz des Namens bietet Style-Containment keine abgekapselten Styles, wie Sie sie mit dem [Shadow DOM](https://developer.mozilla.org/de/docs/Web/API/Web_components/Using_shadow_DOM) oder {{cssxref("@scope")}} erhalten würden. Der Hauptanwendungsfall für den Wert `style` besteht darin, Situationen zu verhindern, in denen eine [CSS-Zählung](https://developer.mozilla.org/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters) in einem Element geändert werden könnte, wodurch der Rest des Baums beeinflusst würde.

Die Verwendung von `contain: style` stellt sicher, dass die Eigenschaften {{cssxref("counter-increment")}} und {{cssxref("counter-set")}} neue Zähler erstellen, die nur auf diesen Teilbaum beschränkt sind.

Sie können mehr als einen Containment-Typ einschließen, indem Sie mehrere durch Leerzeichen getrennte Werte einfügen, wie `contain: layout paint` oder indem Sie einen der beiden [Sonderwerte](#sonderwerte) verwenden.

#### Sonderwerte

Es gibt zwei Sonderwerte von `contain`, die eine Abkürzung für die ersten drei oder alle vier Containment-Typen sind:

- `content`
- `strict`

Wir haben den ersten im obigen Beispiel kennengelernt. Die Verwendung von `contain: content` aktiviert `layout`, `paint` und `style` Containment. Da `size` weggelassen wird, ist es ein sicherer Wert, der weit verbreitet angewendet werden kann.

Die `contain: strict` Erklärung, die genauso funktioniert wie die Erklärung `contain: size layout paint style` (die vier durch Leerzeichen getrennte Werte enthält), bietet das meiste Containment. Es ist riskanter zu verwenden, da es `size` Containment anwendet; es besteht das Risiko, dass eine Box aufgrund der Abhängigkeit von der Größe ihrer Kinder die Größe Null haben könnte.

Um dieses Risiko zu vermeiden, setzen Sie immer eine Größe, wenn Sie `strict` verwenden:

```css
article {
  contain: strict;
  contain-intrinsic-size: 80vw auto;
}
```

Das obenstehende ist das gleiche wie:

```css
article {
  contain: size layout paint style;
  contain-intrinsic-size: 80vw auto;
}
```

### `content-visibility`

Wenn Sie viele Inhalte haben, die von starkem Containment profitieren würden und oft außerhalb des sichtbaren Bereichs liegen – beispielsweise wenn alle Ihre Blogbeiträge auf den Blog-Startseiten als unendlich scrollbarer Blog sichtbar sind – kann `content-visibility: auto` verwendet werden, um alle Containments gleichzeitig anzuwenden.

Die Eigenschaft {{cssxref("content-visibility")}} steuert, ob ein Element seine Inhalte überhaupt rendert, zusammen mit der Erzwingung eines starken Satzes von Containments, was es Benutzeragenten ermöglicht, potenziell große Bereiche von Layout- und Rendering-Arbeiten auszulassen, bis sie benötigt werden. Sie ermöglicht es dem Benutzeragenten, die Rendering-Arbeit für ein Element (einschließlich Layout und Malen) zu überspringen, bis sie benötigt wird – was das initiale Laden der Seite erheblich beschleunigt.

Ihre möglichen Werte sind:

- `visible`: Das Standardverhalten – die Inhalte eines Elements werden normal gelayoutet und gerendert.
- `hidden`: Das Element [überspringt seine Inhalte](#überspringt_seine_inhalte). Die übersprungenen Inhalte werden für Benutzeragenten-Funktionen wie "Seite durchsuchen", Tab-Reihenfolge-Navigation usw. nicht zugänglich sein und sind weder auswählbar noch fokussierbar.
- `auto`: Das Element aktiviert Layout-Containment, Style-Containment und Paint-Containment, als wäre `contain: content` gesetzt. Wenn das Element für den Benutzer nicht [relevant](#relevant_für_den_benutzer) ist, überspringt es seine Inhalte ebenfalls. Im Gegensatz zu `hidden` sind die übersprungenen Inhalte jedoch weiterhin für Benutzerinteraktionen verfügbar, bleiben fokussierbar, auswählbar, in der regulären Tab-Reihenfolge und für die In-Content-Suche verfügbar.

### Relevant für den Benutzer

Benutzeragenten haben ein Konzept von Inhalten, die für den Benutzer [relevant](https://drafts.csswg.org/css-contain/#relevant-to-the-user) sind. Ein Element wird "für den Benutzer relevant", wenn eines der folgenden Kriterien erfüllt ist:

- Das Element erscheint im Ansichtsfenster oder innerhalb eines benutzerdefinierten Abstandes um das Ansichtsfenster (50% der Ansichtsfenster-Dimensionen, um der App Zeit zu geben, sich auf mögliche Änderungen der Sichtbarkeit des Elements vorzubereiten).
- Das Element oder seine Inhalte erhalten den Fokus.
- Das Element oder seine Inhalte werden ausgewählt, beispielsweise durch Ziehen über den Text mit dem Mauszeiger oder durch eine andere Hervorhebungsoperation.
- Das Element oder seine Inhalte werden in die [Top-Ebene](https://developer.mozilla.org/de/docs/Glossary/top_layer) verschoben.

Wenn `content-visibility: auto` gesetzt ist und der Browser feststellt, dass der Inhalt für den Benutzer relevant ist, wird der Browser diesen Inhalt rendern.

### Überspringt seine Inhalte

Wenn Sie `content-visibility: hidden` auf ein Element setzen, teilen Sie dem Browser mit, dass es für den Benutzer nicht relevant ist und daher seine [Inhalte übersprungen](https://drafts.csswg.org/css-contain/#skips-its-contents) und nicht gerendert werden sollen. Dies hilft, die Leistung zu verbessern.

Der Browser wird auch die Inhalte eines Elements überspringen, wenn `content-visibility: auto` darauf gesetzt ist und der Browser feststellt, dass der Inhalt _nicht_ relevant für den Benutzer ist.

Wenn ein Element seine Inhalte überspringt:

- Es hat Layout-, Style-, Paint- und Size-Containment aktiviert.
- Seine Inhalte werden nicht gemalt, als ob {{cssxref("visibility", "visibility: hidden")}} darauf gesetzt wäre.
- Seine Inhalte erhalten keine Zeigereignisse, als ob {{cssxref("pointer-events", "pointer-events: none")}} darauf gesetzt wäre.

Dies geschieht in beiden oben genannten Fällen, aber bei `content-visibility: auto` können die Inhalte gesucht werden, den Fokus erhalten und sich von nicht relevant zu relevant ändern. Dies ist nicht der Fall bei `content-visibility: hidden`.

> [!NOTE]
> Um den Übergang von `content-visibility: hidden` zu einem sichtbaren Wert zu animieren, müssen Sie {{cssxref("transition-behavior", "transition-behavior: allow-discrete")}} und {{cssxref("@starting-style")}} Stile setzen. Sehen Sie sich [das Übergang von `display` und `content-visibility`](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions#transitioning_display_and_content-visibility) an, um mehr zu erfahren.

## Siehe auch

- [CSS Containment Modul](/de/docs/Web/CSS/CSS_containment)
- [Erlernen: CSS Leistungsoptimierung](/de/docs/Learn_web_development/Extensions/Performance/CSS)
- [CSS Container Queries](/de/docs/Web/CSS/CSS_containment/Container_queries)
- [Eine Einführung in CSS Containment](https://blogs.igalia.com/mrego/2019/01/11/an-introduction-to-css-containment/) über Igalia.com (2019)
- Das [`contentvisibilityautostatechange`](/de/docs/Web/API/Element/contentvisibilityautostatechange_event) Ereignis
