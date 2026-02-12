---
title: "<summary>: Das Offene-Element-Zusammenfassung"
slug: Web/HTML/Reference/Elements/summary
l10n:
  sourceCommit: 0ab262675372b83fc870accf3dc46d6a367c451c
---

Das **`<summary>`** [HTML](/de/docs/Web/HTML)-Element gibt eine Zusammenfassung, eine Bildunterschrift oder eine Legende für ein {{HTMLElement("details")}}-Element mit einer Offenen-Box an. Ein Klick auf das `<summary>`-Element schaltet den Zustand des übergeordneten `<details>`-Elements zwischen geöffnet und geschlossen um.

{{InteractiveExample("HTML Demo: &lt;summary&gt;", "tabbed-shorter")}}

```html interactive-example
<details>
  <summary>
    I have keys but no doors. I have space but no room. You can enter but can't
    leave. What am I?
  </summary>
  A keyboard.
</details>
```

```css interactive-example
details {
  border: 1px solid #aaaaaa;
  border-radius: 4px;
  padding: 0.5em 0.5em 0;
}

summary {
  font-weight: bold;
  margin: -0.5em -0.5em 0;
  padding: 0.5em;
}

details[open] {
  padding: 0.5em;
}

details[open] summary {
  border-bottom: 1px solid #aaaaaa;
  margin-bottom: 0.5em;
}
```

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Verwendungshinweise

Die Inhalte des `<summary>`-Elements können beliebige Überschrift-Inhalte, einfacher Text oder HTML sein, das innerhalb eines Absatzes verwendet werden kann.

Ein `<summary>`-Element darf _nur_ als das erste Kind eines `<details>`-Elements verwendet werden. Wenn der Benutzer auf die Zusammenfassung klickt, wird das übergeordnete `<details>`-Element geöffnet oder geschlossen, und es wird ein [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event)-Ereignis an das `<details>`-Element gesendet, mit dem Sie informiert werden können, wann diese Zustandsänderung eintritt.

Der Inhalt des `<details>`-Elements bietet die {{Glossary("accessible_description", "zugängliche Beschreibung")}} für das `<summary>`.

### Standard-Label-Text

Wenn das erste Kind eines `<details>`-Elements kein `<summary>`-Element ist, wird der {{Glossary("user_agent", "Benutzeragent")}} eine Standardzeichenfolge (typischerweise "Details") als Label für die Offenlegungsbox verwenden.

### Standardstil

Laut HTML-Spezifikation umfasst der Standardstil für `<summary>`-Elemente `display: list-item`. Dadurch ist es möglich, das Symbol, das als Offenlegungs-Widget neben dem Label angezeigt wird, zu ändern oder zu entfernen. Standardmäßig ist dies typischerweise ein Dreieck.

Sie können den Stil auch in `display: block` ändern, um das Offenlegungsdreieck zu entfernen.

Weitere Informationen finden Sie im Abschnitt [Browser-Kompatibilität](#browser-kompatibilität), da nicht alle Browser die volle Funktionalität dieses Elements unterstützen.

Für auf WebKit basierende Browser wie Safari ist es möglich, die Anzeige des Symbols über das nicht standardmäßige CSS-Pseudo-Element `::-webkit-details-marker` zu steuern. Um das Offenlegungsdreieck zu entfernen, verwenden Sie `summary::-webkit-details-marker { display: none }`.

## Beispiele

Nachfolgend sind einige Beispiele für die Verwendung von `<summary>` aufgeführt. Weitere Beispiele finden Sie in der Dokumentation zum {{HTMLElement("details")}}-Element.

### Einfaches Beispiel

Ein einfaches Beispiel, das die Verwendung von `<summary>` in einem {{HTMLElement("details")}}-Element zeigt:

```html
<details open>
  <summary>Overview</summary>
  <ol>
    <li>Cash on hand: $500.00</li>
    <li>Current invoice: $75.30</li>
    <li>Due date: 5/6/19</li>
  </ol>
</details>
```

#### Ergebnis

{{EmbedLiveSample("Basic_example", 650, 120)}}

### Zusammenfassungen als Überschriften

Sie können Überschrift-Elemente in `<summary>` verwenden, so:

```html
<details open>
  <summary><h4>Overview</h4></summary>
  <ol>
    <li>Cash on hand: $500.00</li>
    <li>Current invoice: $75.30</li>
    <li>Due date: 5/6/19</li>
  </ol>
</details>
```

#### Ergebnis

{{EmbedLiveSample("Summaries_as_headings", 650, 200)}}

Derzeit gibt es einige Abstandsprobleme, die mit CSS behoben werden könnten.

> [!WARNING]
> Die dem `<summary>`-Element zugewiesene Rolle variiert je nach Browser. Einige weisen ihm immer noch die Standardrolle [`button`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role) zu, was alle Rollen seiner Kinder entfernt. Diese Inkonsistenz kann Probleme für Benutzer von Hilfstechnologien wie Bildschirmlesegeräten verursachen (`<h4>` im vorherigen Beispiel wird seine Rolle entfernt haben und nicht als Überschrift für diese Benutzer betrachtet werden). Sie sollten Ihre `<summary>`-Implementierung auf mehreren Plattformen testen, um sicherzustellen, dass es eine konsistente Unterstützung für die Barrierefreiheit gibt.

### HTML in Zusammenfassungen

In diesem Beispiel werden dem `<summary>`-Element einige Semantiken hinzugefügt, um das Label als wichtig zu kennzeichnen:

```html
<details open>
  <summary><strong>Overview</strong></summary>
  <ol>
    <li>Cash on hand: $500.00</li>
    <li>Current invoice: $75.30</li>
    <li>Due date: 5/6/19</li>
  </ol>
</details>
```

#### Ergebnis

{{EmbedLiveSample("HTML_in_summaries", 650, 150)}}

### Ändern des Symbols der Zusammenfassung

Das Marker-Symbol des `<summary>`-Elements, das Offenlegungsdreieck, kann mit CSS angepasst werden. Der Marker kann über das {{cssxref("::marker")}}-Pseudo-Element angesprochen werden, das die {{cssxref("list-style")}}-Kurzschreibweise und seine Langhandkomponenten-Eigenschaften wie {{cssxref("list-style-type")}} akzeptiert. Dies ermöglicht es, das Dreieck zu einem Bild (normalerweise mit {{cssxref("list-style-image")}}) oder einer Zeichenkette (einschließlich Emojis) zu ändern. In diesem Beispiel ersetzen wir den Inhalt eines Offenlegungs-Widgets und entfernen das Symbol von einem anderen, indem wir `list-style: none` vor dem Hinzufügen eines benutzerdefinierten Offenlegungssymbols über generierte Inhalte setzen.

#### CSS

Im ersten Offenlegungs-Widget stylen wir den `::marker`, indem wir den {{cssxref("content")}} basierend auf dem `[open]`-Attribut des `<details>`-Elements ändern. Für das zweite Widget entfernen wir den Marker mit `list-style`-Eigenschaften und fügen dann formatierte generierte Inhalte mit dem {{cssxref("::after")}}-Pseudo-Element hinzu. Wir fügen auch Stile für `::-webkit-details-marker` ein, um Safari anzusprechen. Der Selektor für das browserspezifische Pseudo-Element ist in einer {{cssxref(":is()")}}-Pseudo-Klasse enthalten, sodass der Selektorblock nicht ungültig wird, wenn das Pseudo-Element in einem Browser ungültig ist. Wir haben auch CSS [Verschachtelung](/de/docs/Web/CSS/Reference/Selectors/Nesting_selector) verwendet. Sehen Sie das [CSS-Selektoren](/de/docs/Web/CSS/Guides/Selectors)-Modul.

#### HTML

```html-nolint
<h1>Quotes from Helen Keller</h1>

<details>
  <summary>On women's rights</summary>
  <p>
    <q>We have prayed, we have coaxed, we have begged, for the vote, with the
      hope that men, out of chivalry, would bestow equal rights upon women and
      take them into partnership in the affairs of the state. We hoped that
      their common sense would triumph over prejudices and stupidity. We thought
      their boasted sense of justice would overcome the errors that so often
      fetter the human spirit; but we have always gone away empty-handed. We
      shall beg no more.</q>
  </p>
</details>

<details>
  <summary>On optimism</summary>
  <p>
    <q>Optimism is the faith that leads to achievement; nothing can be done
      without hope.</q>
  </p>
</details>
```

#### Ergebnis

{{EmbedLiveSample("Changing the summary's icon", 650, 400)}}

## Technische Zusammenfassung

<table class="properties">
  <tbody>
     <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        keine
      </td>
    </tr>
    <tr>
      <th scope="row">Zugelassene Inhalte</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Wortlaut-Inhalte</a
        >, optional vermischt mit
        <a href="/de/docs/Web/HTML/Guides/Content_categories#heading_content"
          >Überschrift-Inhalten</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine; sowohl das Start- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Zugelassene Eltern</th>
      <td>Das {{HTMLElement("details")}}-Element.</td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td> <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role">Keine entsprechende Rolle</a></td>
    </tr>
    <tr>
      <th scope="row">Zugelassene ARIA-Rollen</th>
      <td>Keine <code>role</code> ist zulässig</td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>[`HTMLElement`](/de/docs/Web/API/HTMLElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("details")}}
