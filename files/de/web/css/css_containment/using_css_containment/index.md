---
title: Verwendung von CSS Containment
slug: Web/CSS/CSS_containment/Using_CSS_containment
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}

CSS Containment verbessert die Leistung von Webseiten, indem es dem Browser ermöglicht, einen Teilbaum der Seite vom Rest der Seite zu isolieren. Wenn der Browser weiß, dass ein Teil der Seite unabhängig vom restlichen Inhalt ist, kann das Rendern optimiert und die Leistung verbessert werden.

Die Eigenschaften {{cssxref("contain")}} und {{cssxref("content-visibility")}} ermöglichen es Entwicklern, Benutzeragenten mitzuteilen, ob ein Element seine Inhalte überhaupt rendern soll und ob es seine Inhalte rendern soll, wenn es außerhalb des Sichtbereichs ist. Der Benutzeragent wendet dann Containment an Elemente an, wenn dies angebracht ist, und kann Layout und Rendering gegebenenfalls verschieben, bis sie benötigt werden.

Dieser Leitfaden beschreibt die grundlegenden Ziele von CSS Containment und wie man `contain` und `content-visibility` für eine bessere Benutzererfahrung nutzt.

## Grundlegendes Beispiel

Webseiten enthalten oft mehrere Abschnitte, die logisch unabhängig voneinander sind. CSS Containment ermöglicht es ihnen, beim Rendern wirklich unabhängig voneinander behandelt zu werden.

Beispielsweise enthalten Blogs in der Regel mehrere Artikel, von denen jeder eine Überschrift und Inhalte enthält, wie im folgenden Markup.

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

Mit CSS wenden wir die Eigenschaft {{cssxref("contain")}} mit einem Wert von `content` auf jeden Artikel an. Der `content`-Wert ist eine Abkürzung für `contain: layout paint style`:

```css
article {
  contain: content;
}
```

Logisch ist jeder Artikel auf der Seite unabhängig von den anderen Artikeln. Diese Information ist etwas, was dem Webentwickler, der die Seite erstellt, normalerweise bekannt ist und wahrscheinlich ziemlich offensichtlich. Browser wissen jedoch nicht, welche Absicht Ihr Inhalt hat, und können nicht annehmen, dass ein Artikel oder ein anderer Abschnitt des Inhalts vollständig eigenständig ist.

Diese Eigenschaft bietet eine Möglichkeit, dies dem Browser zu erklären und ihm eine explizite Erlaubnis für Leistungsoptimierungen zu geben. Es teilt dem Browser mit, dass das interne Layout des Elements vollständig vom Rest der Seite getrennt ist und alles über das Element innerhalb seiner Grenzen gemalt wird. Nichts kann sichtbar überlaufen.

Indem wir `contain: content` auf jedes `<article>` setzen, haben wir dies angezeigt; wir haben dem Browser mitgeteilt, dass jeder Artikel unabhängig ist. Der Browser kann dann diese Informationen nutzen, um Entscheidungen darüber zu treffen, wie jeder `<article>` von Inhalt gerendert wird. Beispielsweise könnte er entscheiden, keine Artikel zu rendern, die sich außerhalb des sichtbaren Bereichs befinden.

Wenn zusätzliche Artikel am Ende der Seite hinzugefügt werden, muss der Browser das Layout oder das Neumalen des vorhergehenden Inhalts nicht neu berechnen; er muss auch keinen Bereich außerhalb des Teilbaums des Containing-Elements berühren. Wenn jedoch Boxmodell-Eigenschaften abhängig sind, muss der Browser das Layout neu berechnen und erneut zeichnen. Wenn beispielsweise das `<article>` so gestaltet ist, dass seine Größe von seinem Inhalt abhängt (z.B. mit `height: auto`), muss der Browser seine Größe berücksichtigen, wenn sie sich ändert.

## Wichtige Konzepte und Begriffe

### `contain` Werte

Es gibt vier Arten der Containment: Layout, Paint, Size und Style. Verwenden Sie die Eigenschaft {{cssxref("contain")}}, um den Typ oder die Typen anzugeben, die Sie auf ein Element anwenden möchten, indem Sie eine beliebige Kombination dieser Typen hinzufügen.

#### Layout Containment

```css
article {
  contain: layout;
}
```

Layout bezieht sich normalerweise auf das gesamte Dokument, was bedeutet, dass, wenn Sie ein Element verschieben, das gesamte Dokument behandelt werden muss, als ob sich Dinge überall verschoben haben könnten. Durch die Verwendung von `contain: layout` können Sie dem Browser mitteilen, dass er nur dieses Element überprüfen muss — alles innerhalb des Elements ist auf dieses Element beschränkt und beeinflusst nicht den Rest der Seite, und die Containing-Box stellt einen unabhängigen [Formatierungskontext](/de/docs/Web/CSS/CSS_flow_layout/Introduction_to_formatting_contexts) her.

Zusätzlich:

- {{cssxref("float")}} Layout wird unabhängig innerhalb des angegebenen Elements durchgeführt.
- Ränder werden nicht über eine Layout-Containment-Grenze hinweg kollabieren.
- Der Layout-Container ist ein [Containing Block](/de/docs/Web/CSS/Containing_block) für `absolute`- und `fixed`-positionierte Nachkommen.
- Die Containing-Box erstellt einen [Stacking Context](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context), daher kann {{cssxref("z-index")}} verwendet werden.

> [!NOTE]
> Die Werte `style` und `layout` von `contain` werden automatisch angewendet, wenn die Eigenschaften {{cssxref("container-type")}} und {{cssxref("container-name")}} verwendet werden.

#### Paint Containment

```css
article {
  contain: paint;
}
```

Paint Containment schneidet im Wesentlichen die Box an der Polsterrandkante der [Hauptbox](/de/docs/Web/CSS/Visual_formatting_model#the_principal_box) ab. Es kann kein sichtbarer Überlauf vorhanden sein. Die gleichen zusätzlichen Anmerkungen gelten für `paint` Containment wie für `layout` Containment (siehe oben).

Ein weiterer Vorteil ist, dass, wenn das Element mit angewendetem Containment außerhalb des Bildschirms liegt, der Browser seine Kind-Elemente nicht zeichnen muss — diese sind auch außerhalb des Bildschirms, da sie vollständig von dieser Box enthalten sind.

#### Size Containment

```css
article {
  contain: size;
}
```

Size Containment bietet nicht viele Leistungsoptimierungen, wenn es alleine verwendet wird. Size Containment bedeutet jedoch, dass die Größe der kind-enthaltenen Elemente die Größe des Elements selbst nicht beeinflussen kann — seine Größe wird berechnet, als ob es keine Kinder hätte.

Wenn Sie `contain: size` auf ein Element setzen, müssen Sie die Größe des Elements mit {{cssxref("contain-intrinsic-size")}} oder den Langform-Eigenschaften {{cssxref("contain-intrinsic-width")}} und {{cssxref("contain-intrinsic-height")}} in dieser Reihenfolge angeben. Wenn keine Größe festgelegt ist, besteht in den meisten Fällen die Gefahr, dass das Element keine Größe hat.

```css
article {
  contain: size;
  contain-intrinsic-size: 100vw auto;
}
```

#### Style Containment

```css
article {
  contain: style;
}
```

Trotz des Namens bietet Style Containment keine abgegrenzten Stile, wie Sie sie mit dem [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) oder {{cssxref("@scope")}} erhalten würden. Der Hauptverwendungsfall für den `style` Wert besteht darin, Situationen zu verhindern, in denen ein [CSS Counter](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters) in einem Element geändert werden könnte, was sich dann auf den Rest des Baums auswirken könnte.

Die Verwendung von `contain: style` stellt sicher, dass die Eigenschaften {{cssxref("counter-increment")}} und {{cssxref("counter-set")}} neue Zähler erstellen, die nur auf diesen Teilbaum beschränkt sind.

Sie können mehr als einen Containment-Typ enthalten, indem Sie mehrere Werte mit Leerzeichen getrennt angeben, wie `contain: layout paint` oder durch Verwendung eines der beiden [Sonderwerte](#sonderwerte).

#### Sonderwerte

Es gibt zwei Sonderwerte von `contain`, die eine Abkürzung für die ersten drei oder alle vier der Containment-Typen sind:

- `content`
- `strict`

Wir haben den ersten im obigen Beispiel getroffen. Die Verwendung von `contain: content` aktiviert `layout`, `paint` und `style` Containment. Da es `size` auslässt, ist es ein sicherer Wert, der weitgehend angewendet werden kann.

Die Deklaration `contain: strict`, die sich so verhält wie die Deklaration `contain: size layout paint style` (die vier durch Leerzeichen getrennte Werte enthält), bietet das meiste Containment. Es ist riskanter, da es `size` Containment anwendet; es besteht das Risiko, dass eine Box aufgrund der Abhängigkeit von der Größe ihrer Kinder keine Größe erhält.

Um dieses Risiko zu vermeiden, setzen Sie immer eine Größe, wenn Sie `strict` verwenden:

```css
article {
  contain: strict;
  contain-intrinsic-size: 80vw auto;
}
```

Das obige ist das gleiche wie:

```css
article {
  contain: size layout paint style;
  contain-intrinsic-size: 80vw auto;
}
```

### `content-visibility`

Wenn Sie viele Inhalte haben, die von starkem Containment profitieren würden und oft außerhalb des Bildschirms sind — zum Beispiel, wenn alle Ihre Blog-Beiträge auf den Blog-Startseiten als unendlich scrollbare Blogs anzeigbar sind — kann `content-visibility: auto` verwendet werden, um alle Containments auf einmal anzuwenden.

Die Eigenschaft {{cssxref("content-visibility")}} steuert, ob ein Element seine Inhalte überhaupt rendert, zusammen mit der Erzwingung eines starken Satzes von Containments, was es Benutzern erlaubt, möglicherweise große Abschnitte von Layout- und Rendering-Arbeiten zu überspringen, bis sie benötigt werden. Sie ermöglicht es dem Benutzeragenten, die Rendering-Arbeit eines Elements (einschließlich Layout und Malen) zu überspringen, bis sie benötigt wird — was das initiale Laden der Seite erheblich beschleunigt.

Mögliche Werte sind:

- `visible`: Das Standardverhalten — die Inhalte eines Elements werden normal angeordnet und gerendert.
- `hidden`: Das Element [überspringt seine Inhalte](#überspringt_seine_inhalte). Die übersprungenen Inhalte sind nicht zugänglich für Benutzeragenten-Funktionen wie Seitensuche, Tastaturnavigation usw. und können nicht ausgewählt oder fokussiert werden.
- `auto`: Das Element schaltet Layout-Containment, Style-Containment und Paint-Containment ein, als ob `contain: content` gesetzt wurde. Wenn das Element nicht [für den Benutzer relevant](#relevant_für_den_benutzer) ist, überspringt es auch seine Inhalte. Im Gegensatz zu `hidden` sind die übersprungenen Inhalte weiterhin für Benutzerinteraktionen verfügbar, bleiben fokussierbar, auswählbar, in der regulären Tabulatorreihenfolge und für die inhaltliche Suche zugänglich.

### Relevant für den Benutzer

Benutzeragenten haben ein Konzept von Inhalten, die [für den Benutzer relevant sind](https://drafts.csswg.org/css-contain/#relevant-to-the-user). Ein Element wird "für den Benutzer relevant", wenn einer der folgenden Punkte zutrifft:

- Das Element erscheint im Ansichtsfenster oder in einem von Benutzeragenten definierten Rand um das Ansichtsfenster (50% der Ansichtsfenstergröße, damit die App Zeit hat, sich vorzubereiten, wenn sich die Sichtbarkeit des Elements ändert).
- Das Element oder seine Inhalte erhalten den Fokus.
- Das Element oder seine Inhalte werden ausgewählt, z.B. durch Ziehen über den Text mit dem Mauszeiger oder durch eine andere Hervorhebungsoperation.
- Das Element oder seine Inhalte werden in der [obersten Ebene](/de/docs/Glossary/top_layer) platziert.

Wenn `content-visibility: auto` gesetzt ist und der Browser feststellt, dass der Inhalt für den Benutzer relevant ist, wird der Browser diesen Inhalt rendern.

### Überspringt seine Inhalte

Wenn Sie `content-visibility: hidden` auf ein Element setzen, teilen Sie dem Browser mit, dass es für den Benutzer nicht relevant ist, und daher sollten seine [Inhalte übersprungen](https://drafts.csswg.org/css-contain/#skips-its-contents) und nicht gerendert werden. Dies trägt zur Leistungsverbesserung bei.

Der Browser wird auch den Inhalt eines Elements überspringen, wenn `content-visibility: auto` darauf gesetzt ist und der Browser feststellt, dass sein Inhalt _nicht_ für den Benutzer relevant ist.

Wenn ein Element seine Inhalte überspringt:

- Es hat Layout-, Style-, Paint- und Size-Containment eingeschaltet.
- Seine Inhalte werden nicht gerendert, als ob {{cssxref("visibility", "visibility: hidden")}} darauf gesetzt wäre.
- Seine Inhalte erhalten keine Pointer-Ereignisse, als ob {{cssxref("pointer-events", "pointer-events: none")}} darauf gesetzt wäre.

Dies geschieht in beiden der oben genannten Fälle, aber bei `content-visibility: auto` kann der Inhalt durchsucht, fokussiert und anderweitig von nicht relevant zu relevant verschoben werden. Dies ist nicht der Fall bei `content-visibility: hidden`.

> [!NOTE]
> Um die Übergänge von `content-visibility: hidden` zu einem sichtbaren Wert zu animieren, müssen Sie {{cssxref("transition-behavior", "transition-behavior:&nbsp;allow-discrete")}} und {{cssxref("@starting-style")}} Styles setzen. Sehen Sie sich [Übergänge von `display` und `content-visibility`](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions#transitioning_display_and_content-visibility) an, um mehr zu erfahren.

## Siehe auch

- [CSS Containment Modul](/de/docs/Web/CSS/CSS_containment)
- [Lernen: CSS-Leistungsoptimierung](/de/docs/Learn/Performance/CSS)
- [CSS Container Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries)
- [Eine Einführung in CSS Containment](https://blogs.igalia.com/mrego/2019/01/11/an-introduction-to-css-containment/) über Igalia.com (2019)
- Das [`contentvisibilityautostatechange`](/de/docs/Web/API/Element/contentvisibilityautostatechange_event) Ereignis
