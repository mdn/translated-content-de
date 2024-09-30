---
title: Verwendung von CSS Containment
slug: Web/CSS/CSS_containment/Using_CSS_containment
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}

CSS Containment verbessert die Performance von Webseiten, indem es dem Browser ermöglicht, einen Teilbaum der Seite vom Rest der Seite zu isolieren. Wenn der Browser weiß, dass ein Teil der Seite unabhängig vom restlichen Inhalt ist, kann das Rendering optimiert und die Leistung verbessert werden.

Die Eigenschaften {{cssxref("contain")}} und {{cssxref("content-visibility")}} ermöglichen es Entwicklern, den Benutzeragenten darüber zu informieren, ob ein Element seinen Inhalt überhaupt rendern soll und ob es seinen Inhalt rendern soll, wenn es nicht im Sichtfeld ist. Der Benutzeragent wendet dann bei Bedarf Containment auf Elemente an und kann so Layout und Rendering gegebenenfalls bis zum Bedarf verzögern.

Dieser Leitfaden beschreibt die grundlegenden Ziele des CSS Containment und wie man `contain` und `content-visibility` für ein besseres Benutzererlebnis nutzt.

## Einfaches Beispiel

Webseiten enthalten oft mehrere Abschnitte, die logisch unabhängig voneinander sind. CSS Containment ermöglicht es, dass sie in Bezug auf das Rendering wirklich unabhängig voneinander behandelt werden können.

Zum Beispiel enthalten Blogs in der Regel mehrere Artikel, von denen jeder eine Überschrift und Inhalte enthält, wie im folgenden Markup gezeigt.

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

Mit CSS wenden wir die {{cssxref("contain")}}-Eigenschaft mit einem Wert von `content` auf jeden Artikel an. Der Wert `content` ist eine Kurzform für `contain: layout paint style`:

```css
article {
  contain: content;
}
```

Jeder Artikel ist logisch unabhängig von den anderen Artikeln auf der Seite. Diese Information ist etwas, das normalerweise bekannt und wahrscheinlich ziemlich offensichtlich für den Webentwickler ist, der die Seite erstellt. Allerdings wissen Browser nicht die Absicht Ihres Inhalts und können nicht davon ausgehen, dass ein Artikel oder ein anderer Abschnitt vollständig eigenständig ist.

Diese Eigenschaft bietet eine Möglichkeit, dies dem Browser zu erklären und ihm explizit die Erlaubnis zu geben, Leistungsoptimierungen vorzunehmen. Sie teilt dem Browser mit, dass das interne Layout des Elements vollständig vom Rest der Seite getrennt ist und alles über das Element innerhalb seiner Grenzen gezeichnet wird. Nichts kann sichtbar überlaufen.

Durch das Setzen von `contain: content` auf jedes `<article>` haben wir dies angezeigt; wir haben dem Browser mitgeteilt, dass jeder Artikel unabhängig ist. Der Browser kann diese Information dann nutzen, um Entscheidungen darüber zu treffen, wie jeder `<article>`-Inhalt gerendert wird. Zum Beispiel könnte er Artikel, die sich außerhalb des sichtbaren Bereichs befinden, nicht rendern.

Wenn zusätzliche Artikel am Ende der Seite angehängt werden, muss der Browser das Layout oder das Neuzeichnen des vorhergehenden Inhalts nicht neu berechnen; außerdem muss er keinen Bereich außerhalb des Teilbaums des enthaltenen Elements berühren. Wenn jedoch Boxmodell-Eigenschaften abhängig sind, muss der Browser das Layout und das Neuzeichnen berechnen. Zum Beispiel, wenn das `<article>` so gestylt ist, dass seine Größe von seinem Inhalt abhängt (z. B. mit `height: auto`), dann muss der Browser die Änderung seiner Größe berücksichtigen.

## Schlüsselkonzepte und Terminologie

### `contain`-Werte

Es gibt vier Arten von Containment: layout, paint, size und style. Verwenden Sie die {{cssxref("contain")}}-Eigenschaft, um die Art oder Arten anzugeben, die Sie auf ein Element anwenden möchten, indem Sie jede Kombination dieser Typen einschließen.

#### Layout-Containment

```css
article {
  contain: layout;
}
```

Das Layout bezieht sich normalerweise auf das gesamte Dokument, was bedeutet, dass, wenn Sie ein Element verschieben, das gesamte Dokument so behandelt werden muss, als ob sich Dinge überall verschoben haben könnten. Durch die Verwendung von `contain: layout` können Sie dem Browser mitteilen, dass er nur dieses Element überprüfen muss - alles innerhalb des Elements ist auf dieses Element beschränkt und beeinflusst den Rest der Seite nicht, wobei die enthaltene Box einen unabhängigen [Formatierungskontext](/de/docs/Web/CSS/CSS_flow_layout/Introduction_to_formatting_contexts) bildet.

Darüber hinaus:

- {{cssxref("float")}}-Layouts werden unabhängig innerhalb des angegebenen Elements ausgeführt.
- Ränder kollabieren nicht über eine Layout-Containment-Grenze hinweg.
- Der Layout-Container ist ein [Containing Block](/de/docs/Web/CSS/Containing_block) für absolut und fixierte Nachkommen.
- Die enthaltene Box schafft einen [Stacking-Kontext](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context), daher kann {{cssxref("z-index")}} verwendet werden.

> [!NOTE]
> Die `style`- und `layout`-Werte von `contain` werden automatisch angewendet, wenn Sie die Eigenschaften {{cssxref("container-type")}} und {{cssxref("container-name")}} verwenden.

#### Paint-Containment

```css
article {
  contain: paint;
}
```

Paint-Containment schneidet im Wesentlichen die Box an der Polsterrand des [Hauptkastens](/de/docs/Web/CSS/Visual_formatting_model#the_principal_box). Es kann keinen sichtbaren Überlauf geben. Die gleichen zusätzlichen Hinweise gelten für Paint-Containment wie für Layout-Containment (siehe oben).

Ein weiterer Vorteil ist, dass, wenn das Element mit angewendetem Containment außerhalb des Bildschirms ist, der Browser seine untergeordneten Elemente nicht zeichnen muss – diese sind ebenfalls außerhalb des Bildschirms, da sie vollständig von dieser Box enthalten sind.

#### Size-Containment

```css
article {
  contain: size;
}
```

Size-Containment bietet nicht viel in Bezug auf Leistungsoptimierungen, wenn es alleine verwendet wird. Size-Containment bedeutet jedoch, dass die Größe der Kinder des größenenthaltenen Elements die Größe des Elements selbst nicht beeinflussen kann – seine Größe wird berechnet, als ob es keine Kinder hätte.

Wenn Sie `contain: size` auf ein Element setzen, müssen Sie die Größe des Elements mit {{cssxref("contain-intrinsic-size")}} oder den Untereigenschaften {{cssxref("contain-intrinsic-width")}} und {{cssxref("contain-intrinsic-height")}} in dieser Reihenfolge angeben. Wenn keine Größe festgelegt ist, läuft das Element Gefahr, in den meisten Fällen auf null Größe zu reduzert zu werden.

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

Trotz des Namens bietet Style-Containment keine Bereichsstile, wie es bei der Verwendung von [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) oder {{cssxref("@scope")}} der Fall wäre. Der Hauptanwendungsfall für den `style`-Wert ist die Verhinderung von Situationen, in denen ein [CSS-Zähler](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters) in einem Element geändert werden könnte, was dann den Rest des Baums beeinflussen könnte.

Die Verwendung von `contain: style` stellt sicher, dass die {{cssxref("counter-increment")}}- und {{cssxref("counter-set")}}-Eigenschaften neue Zähler erstellen, die nur auf diesen Teilbaum beschränkt sind.

Sie können mehr als einen Containment-Typ einschließen, indem Sie mehrere, durch Leerzeichen getrennte Werte hinzufügen, wie `contain: layout paint` oder indem Sie einen der beiden [Spezialwerte](#spezialwerte) verwenden.

#### Spezialwerte

Es gibt zwei Spezialwerte von `contain`, die eine Kurzform für die ersten drei oder alle vier Containment-Typen sind:

- `content`
- `strict`

Wir haben den ersten im obigen Beispiel kennengelernt. Die Verwendung von `contain: content` schaltet das Layout-, das Paint- und das Style-Containment ein. Da `size` ausgelassen wird, ist es ein sicherer Wert, um ihn weit verbreitet anzuwenden.

Die `contain: strict`-Deklaration, die sich wie die Deklaration `contain: size layout paint style` verhält (die vier durch Leerzeichen getrennte Werte enthält), bietet das meiste Containment. Es birgt mehr Risiko, da es `size`-Containment anwendet; das Risiko besteht, dass eine Box aufgrund ihrer Abhängigkeit von der Größe ihrer Kinder auf null Größe reduziert werden könnte.

Um dieses Risiko zu vermeiden, setzen Sie immer eine Größe, wenn Sie `strict` verwenden:

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

Wenn Sie viel Inhalt haben, der von starkem Containment profitieren würde und oft nicht im Sichtfeld ist — zum Beispiel, wenn alle Ihre Blog-Beiträge auf den Blog-Startseiten als unendlich scrollbarer Blog sichtbar sind — kann `content-visibility: auto` verwendet werden, um alle Containments auf einmal anzuwenden.

Die {{cssxref("content-visibility")}}-Eigenschaft steuert, ob ein Element seinen Inhalt überhaupt rendert und erzwingt dabei eine starke Menge von Containments, indem sie Benutzeragenten ermöglicht, möglicherweise große Bereiche von Layout- und Renderarbeit zu übergehen, bis sie benötigt werden. Sie ermöglicht dem Benutzeragenten, die Rendering-Arbeit eines Elements (einschließlich Layout und Zeichnen) zu überspringen, bis sie benötigt wird — was das initiale Laden der Seite erheblich beschleunigt.

Ihre möglichen Werte sind:

- `visible`: Das Standardverhalten — die Inhalte eines Elements werden normal layoutet und gerendert.
- `hidden`: Das Element [überspringt seinen Inhalt](#überspringt_seinen_inhalt). Die übersprungenen Inhalte sind für Benutzeragentenfunktionen wie die Seitensuche, die Tabulatorreihenfolge usw. nicht zugänglich und weder auswählbar noch fokussierbar.
- `auto`: Das Element aktiviert Layout-, Style- und Paint-Containment, als ob `contain: content` gesetzt wäre. Wenn das Element für den Benutzer nicht [relevant ist](#relevant_für_den_benutzer), überspringt es auch seinen Inhalt. Im Gegensatz zu `hidden` ist der übersprungene Inhalt weiterhin für Benutzerinteraktionen verfügbar, bleibt fokussierbar, auswählbar, in der normalen Tabulatorreihenfolge und für die Inhaltssuche verfügbar.

### Relevant für den Benutzer

Benutzeragenten haben ein Konzept von Inhalten, die für den Benutzer [relevant sind](https://drafts.csswg.org/css-contain/#relevant-to-the-user). Ein Element wird "für den Benutzer relevant", wenn eines der folgenden Kriterien erfüllt ist:

- Das Element erscheint im Sichtfeld oder in einem vom Benutzeragenten definierten Rand um das Sichtfeld herum (50% der Sichtfeldabmessungen, um der App Zeit zu geben, sich vorzubereiten, wenn sich die Sichtbarkeit des Elements ändert).
- Das Element oder sein Inhalt erhält Fokus.
- Das Element oder sein Inhalt wird ausgewählt, zum Beispiel durch Ziehen über den Text mit dem Mauszeiger oder durch eine andere Hervorhebungsoperation.
- Das Element oder sein Inhalt wird in die [obere Ebene](/de/docs/Glossary/top_layer) gebracht.

Wenn `content-visibility: auto` festgelegt ist und der Browser feststellt, dass der Inhalt für den Benutzer relevant ist, wird der Inhalt vom Browser gerendert.

### Überspringt seinen Inhalt

Wenn Sie `content-visibility: hidden` auf ein Element setzen, teilen Sie dem Browser mit, dass es für den Benutzer nicht relevant ist und daher [sein Inhalt übersprungen](https://drafts.csswg.org/css-contain/#skips-its-contents) und nicht gerendert werden sollte. Dies hilft, die Leistung zu verbessern.

Der Browser überspringt auch den Inhalt eines Elements, wenn `content-visibility: auto` darauf gesetzt ist und der Browser feststellt, dass sein Inhalt _nicht_ für den Benutzer relevant ist.

Wenn ein Element seinen Inhalt überspringt:

- Es hat Layout-, Style-, Paint- und Size-Containment aktiviert.
- Seine Inhalte werden nicht gezeichnet, als ob {{cssxref("visibility", "visibility: hidden")}} darauf gesetzt wäre.
- Seine Inhalte empfangen keine Zeigereignisse, wie wenn {{cssxref("pointer-events", "pointer-events: none")}} darauf gesetzt wäre.

Dies geschieht in beiden oben genannten Fällen, aber mit `content-visibility: auto` kann der Inhalt durchsucht, fokussiert und anderweitig von nicht relevant zu relevant geändert werden. Dies ist nicht der Fall für `content-visibility: hidden`.

> [!NOTE]
> Um den Übergang von `content-visibility: hidden` zu einem sichtbaren Wert zu animieren, müssen Sie {{cssxref("transition-behavior", "transition-behavior:&nbsp;allow-discrete")}} und {{cssxref("@starting-style")}}-Stile setzen. Siehe [Übergänge von `display` und `content-visibility`](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions#transitioning_display_and_content-visibility), um mehr zu erfahren.

## Siehe auch

- [CSS Containment-Modul](/de/docs/Web/CSS/CSS_containment)
- [Lernen: CSS-Leistungsoptimierung](/de/docs/Learn/Performance/CSS)
- [CSS-Containerabfragen](/de/docs/Web/CSS/CSS_containment/Container_queries)
- [Eine Einführung in CSS Containment](https://blogs.igalia.com/mrego/2019/01/11/an-introduction-to-css-containment/) über Igalia.com (2019)
- Das [`contentvisibilityautostatechange`](/de/docs/Web/API/Element/contentvisibilityautostatechange_event) Ereignis
