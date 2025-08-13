---
title: "<summary>: Das Offenlegungszusammenfassungs-Element"
slug: Web/HTML/Reference/Elements/summary
l10n:
  sourceCommit: a1765c2cad20118be0dad322d3548908787b5791
---

Das **`<summary>`** [HTML](/de/docs/Web/HTML)-Element gibt eine Zusammenfassung, Beschriftung oder Legende für das Offenlegungsfeld eines {{HTMLElement("details")}}-Elements an. Ein Klick auf das `<summary>`-Element wechselt den Zustand des übergeordneten `<details>`-Elements zwischen geöffnet und geschlossen.

{{InteractiveExample("HTML Demo: &lt;summary&gt;", "tabbed-shorter")}}

```html interactive-example
<details>
  <summary>
    I have keys but no doors. I have space but no room. You can enter but can’t
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

## Anwendungshinweise

Der Inhalt des `<summary>`-Elements kann beliebiger Überschrifteninhalt, reiner Text oder HTML sein, das innerhalb eines Absatzes verwendet werden kann.

Ein `<summary>`-Element darf _nur_ als erstes Kind eines `<details>`-Elements verwendet werden. Wenn der Benutzer auf die Zusammenfassung klickt, wird das übergeordnete `<details>`-Element geöffnet oder geschlossen und ein [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event)-Event wird an das `<details>`-Element gesendet, welches verwendet werden kann, um über den Zustandswechsel informiert zu werden.

Der Inhalt des `<details>`-Elements stellt die {{Glossary("accessible_description", "zugängliche Beschreibung")}} für das `<summary>` bereit.

### Standard-Label-Text

Wenn das erste Kind eines `<details>`-Elements kein `<summary>`-Element ist, verwendet der {{Glossary("user_agent", "User Agent")}} eine Standardzeichenfolge (normalerweise "Details") als Bezeichnung für das Offenlegungsfeld.

### Standardstil

Laut HTML-Spezifikation beinhaltet der Standardstil für `<summary>`-Elemente `display: list-item`. Dies ermöglicht es, das standardmäßig angezeigte Symbol, das als Offenlegungs-Widget neben dem Label angezeigt wird, zu ändern oder zu entfernen, welches normalerweise ein Dreieck ist.

Sie können den Stil auch zu `display: block` ändern, um das Offenlegungsdreieck zu entfernen.

Siehe den Abschnitt [Browser-Kompatibilität](#browser-kompatibilität), da nicht alle Browser die vollständige Funktionalität dieses Elements unterstützen.

Für WebKit-basierte Browser wie Safari ist es möglich, die Anzeige des Symbols über das nicht standardmäßige CSS-Pseudoelement `::-webkit-details-marker` zu steuern. Um das Offenlegungsdreieck zu entfernen, verwenden Sie `summary::-webkit-details-marker { display: none }`.

## Beispiele

Nachfolgend einige Beispiele, die das `<summary>` in Verwendung zeigen. Weitere Beispiele finden Sie in der Dokumentation für das {{HTMLElement("details")}}-Element.

### Einfaches Beispiel

Ein einfaches Beispiel zeigt die Verwendung von `<summary>` in einem {{HTMLElement("details")}}-Element:

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

Sie können Überschriftselemente innerhalb von `<summary>` verwenden, wie folgt:

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
> Die Rolle, die dem `<summary>`-Element zugewiesen ist, variiert zwischen den Browsern. Einige weisen ihm immer noch eine Standard-[`button`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role)-Rolle zu, die alle Rollen von seinen Kindern entfernt. Diese Inkonsistenzen können Probleme für Benutzer von unterstützenden Technologien wie Bildschirmleseprogrammen verursachen (`<h4>` im vorherigen Beispiel verliert seine Rolle und wird für diese Benutzer nicht als Überschrift behandelt). Sie sollten Ihre `<summary>`-Implementierung auf mehreren Plattformen testen, um sicherzustellen, dass es eine konsistente Unterstützung für die Barrierefreiheit gibt.

### HTML in Zusammenfassungen

Dieses Beispiel fügt dem `<summary>`-Element einige Semantiken hinzu, um das Label als wichtig anzuzeigen:

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

### Ändern des Icons der Zusammenfassung

Das Marker-Symbol des `<summary>`-Elements, das Offenlegungsdreieck, kann mit CSS angepasst werden. Der Marker kann mit dem {{cssxref("::marker")}}-Pseudoelement angesprochen werden, welches die {{cssxref("list-style")}}-Kurzform und deren Langform-Komponenten akzeptiert, wie {{cssxref("list-style-type")}}. Damit lässt sich das Dreieck in ein Bild (normalerweise mit {{cssxref("list-style-image")}}) oder eine Zeichenfolge (einschließlich Emojis) ändern. In diesem Beispiel verändern wir den Inhalt eines Offenlegungs-Widgets und entfernen das Symbol von einem anderen, indem wir `list-style: none` setzen, bevor ein benutzerdefiniertes Offenlegungssymbol durch generierten Inhalt hinzugefügt wird.

#### CSS

Im ersten Offenlegungs-Widget stylen wir das `::marker`, indem wir den {{cssxref("content")}} basierend auf dem `[open]`-Attribut des `<details>`-Elements verändern. Für das zweite Widget entfernen wir den Marker mit `list-style`-Eigenschaften und fügen dann stilisierten, generierten Inhalt mit dem {{cssxref("::after")}}-Pseudoelement hinzu. Wir fügen auch Stile für `::-webkit-details-marker` hinzu, um Safari anzusprechen. Der Selektor für das browser-spezifische Pseudoelement ist in einer {{cssxref(":is()")}}-Pseudoklasse enthalten, um die Selektorliste nicht ungültig zu machen.

```css
details {
  font-size: 1rem;
  font-family: "Open Sans", Calibri, sans-serif;
  border: solid;
  padding: 2px 6px;
  margin-bottom: 1em;
}

details:first-of-type summary::marker,
:is(::-webkit-details-marker) {
  content: "+ ";
  font-family: monospace;
  color: red;
  font-weight: bold;
}

details[open]:first-of-type summary::marker {
  content: "− ";
}

details:last-of-type summary {
  list-style: none;
  &::after {
    content: "+";
    color: white;
    background-color: darkgreen;
    border-radius: 1em;
    font-weight: bold;
    padding: 0 5px;
    margin-inline-start: 5px;
  }
  [open] &::after {
    content: "−";
  }
}
details:last-of-type summary::-webkit-details-marker {
  display: none;
}
```

Das CSS enthält den `[open]` [Attribut-Selektor](/de/docs/Web/CSS/Attribute_selectors), der nur übereinstimmt, wenn das `open`-Attribut vorhanden ist (wenn das `<details>` geöffnet ist). Die {{cssxref(":first-of-type")}} und {{cssxref(":last-of-type")}} Pseudoklassen zielen auf das erste Element und die Geschwister desselben Typs. Wir haben das geprefixte `-webkit-` Pseudoelement innerhalb einer {{cssxref(":is()")}} Pseudoklasse verwendet, da es eine [erlaubte Selektorliste](/de/docs/Web/CSS/Selector_list#forgiving_selector_list) akzeptiert, sodass der gesamte selektorblock nicht ungültig ist, wenn das geprefixte Pseudoelement in einem Browser ungültig ist. Wir haben auch CSS [Verschachtelung](/de/docs/Web/CSS/Nesting_selector) verwendet. Siehe das [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors) Modul.

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
      <th scope="row">Erlaubte Inhalte</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierungsinhalte</a
        >, optional gemischt mit
        <a href="/de/docs/Web/HTML/Guides/Content_categories#heading_content"
          >Überschrifteninhalten</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine; sowohl der Start- als auch der End-Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>Das {{HTMLElement("details")}}-Element.</td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td> <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role">Keine entsprechende Rolle</a></td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>Keine <code>role</code> erlaubt</td>
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
