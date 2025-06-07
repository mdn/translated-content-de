---
title: "<summary>: Das Element Disclosure Summary"
slug: Web/HTML/Reference/Elements/summary
l10n:
  sourceCommit: c1564acf160ef4b320fb7b89ab65211b9c50cf1b
---

{{HTMLSidebar}}

Das **`<summary>`** [HTML](/de/docs/Web/HTML) Element gibt eine Zusammenfassung, Überschrift oder Legende für die Darstellung eines {{HTMLElement("details")}} Elements an. Durch Klicken auf das `<summary>` Element wird der Zustand des übergeordneten `<details>` Elements umgeschaltet, um es zu öffnen oder zu schließen.

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
  border: 1px solid #aaa;
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
  border-bottom: 1px solid #aaa;
  margin-bottom: 0.5em;
}
```

## Attribute

Dieses Element schließt nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes) ein.

## Nutzungshinweise

Der Inhalt des `<summary>` Elements kann jede Art von Überschrift, Klartext oder HTML sein, das innerhalb eines Absatzes verwendet werden kann.

Ein `<summary>` Element darf _nur_ als das erste Kind eines `<details>` Elements verwendet werden. Wenn der Benutzer auf die Zusammenfassung klickt, wird das übergeordnete `<details>` Element geöffnet oder geschlossen, und ein [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event) Ereignis wird an das `<details>` Element gesendet, das verwendet werden kann, um zu erkennen, wann diese Zustandsänderung eintritt.

Der Inhalt des `<details>` bietet die {{Glossary("accessible_description", "zugängliche Beschreibung")}} für das `<summary>`.

### Standardmäßiger Beschriftungstext

Wenn das erste Kind eines `<details>` Elements kein `<summary>` Element ist, wird der {{Glossary("user_agent", "Benutzeragent")}} eine Standardzeichenfolge (typischerweise "Details") als Beschriftung für das Offenlegungsfeld verwenden.

### Standardstil

Laut HTML-Spezifikation umfasst der Standardstil für `<summary>` Elemente `display: list-item`. Dies ermöglicht es, das Symbol neben der Beschriftung als Offenlegungs-Widget vom Standard (in der Regel ein Dreieck) zu ändern oder zu entfernen.

Sie können den Stil auch auf `display: block` ändern, um das Offenlegungsdreieck zu entfernen.

Siehe den Abschnitt [Browser-Kompatibilität](#browser-kompatibilität) für Details, da nicht alle Browser die vollständige Funktionalität dieses Elements unterstützen.

Für WebKit-basierte Browser wie Safari ist es möglich, die Anzeige des Symbols über das nicht standardmäßige CSS-Pseudoelement `::-webkit-details-marker` zu steuern. Um das Offenlegungsdreieck zu entfernen, verwenden Sie `summary::-webkit-details-marker { display: none }`.

## Beispiele

Unten sehen Sie einige Beispiele, die die Verwendung von `<summary>` zeigen. Weitere Beispiele finden Sie in der Dokumentation zum {{HTMLElement("details")}} Element.

### Einfaches Beispiel

Ein einfaches Beispiel für die Verwendung von `<summary>` in einem {{HTMLElement("details")}} Element:

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

Sie können Überschriftselemente in `<summary>` verwenden, wie folgt:

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
> Da das `<summary>` Element standardmäßig die Rolle [button](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role) hat (was alle Rollen von Kindelementen entfernt), funktioniert dieses Beispiel nicht für Benutzer von unterstützenden Technologien wie Screenreadern. Das `<h4>` verliert seine Rolle und wird daher für diese Benutzer nicht als Überschrift behandelt.

### HTML in Zusammenfassungen

Dieses Beispiel fügt dem `<summary>` Element einige Semantiken hinzu, um die Beschriftung als wichtig hervorzuheben:

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

### Symbol des Zusammenfassungs-Widgets ändern

Das Symbol des `<summary>` Elements, das Offenlegungsdreieck, kann mit CSS angepasst werden. Das Symbol kann mit dem {{cssxref("::marker")}} Pseudoelement angesprochen werden, das die {{cssxref("list-style")}} Shorthand-Eigenschaft und ihre längerfristigen Komponenteneigenschaften, wie {{cssxref("list-style-type")}}, akzeptiert. Dadurch kann das Dreieck in ein Bild (normalerweise mit {{cssxref("list-style-image")}}) oder eine Zeichenkette (einschließlich Emojis) geändert werden. In diesem Beispiel ersetzen wir den Inhalt eines Offenlegungs-Widgets und entfernen das Symbol von einem anderen, indem wir `list-style: none` setzen, bevor ein benutzerdefiniertes Offenlegungssymbol über generierten Inhalt hinzugefügt wird.

#### CSS

Im ersten Offenlegungs-Widget gestalten wir das `::marker`, indem wir den {{cssxref("content")}} basierend auf das `[open]` Attribut des `<details>` Elements ändern. Für das zweite Widget entfernen wir das Symbol mit `list-style` Eigenschaften, dann fügen wir gestylten generierten Inhalt mit dem {{cssxref("::after")}} Pseudoelement hinzu. Wir enthalten auch Stile für `::-webkit-details-marker`, um Safari anzusprechen. Der Selektor für das browserspezifische Pseudoelement ist in einer {{cssxref(":is()")}} Pseudoklasse enthalten, damit es die Selektorliste nicht ungültig macht.

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

Das CSS beinhaltet den `[open]` [Attributselektor](/de/docs/Web/CSS/Attribute_selectors), der nur dann passt, wenn das `open`-Attribut vorhanden ist (wenn die `<details>` geöffnet sind). Die {{cssxref(":first-of-type")}} und {{cssxref(":last-of-type")}} Pseudoklassen zielen auf das erste und Geschwisterelemente desselben Typs ab. Wir haben das mit `-webkit-` vorangestellte Pseudoelement innerhalb einer {{cssxref(":is()")}} Pseudoklasse enthalten, da es eine [verzeihende Selektorliste](/de/docs/Web/CSS/Selector_list#forgiving_selector_list) verwendet, so dass, wenn das vorangestellte Pseudoelement in einem Browser ungültig ist, der gesamte Selektorblock nicht ungültig wird. Wir haben auch CSS [Verschachtelung](/de/docs/Web/CSS/Nesting_selector) verwendet. Siehe das [CSS Selektoren](/de/docs/Web/CSS/CSS_selectors) Modul.

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
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasing content</a
        >, optional gemischt mit
        <a href="/de/docs/Web/HTML/Guides/Content_categories#heading_content"
          >Heading content</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Angaben weglassen</th>
      <td>Keine; sowohl das Start- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>Das {{HTMLElement("details")}} Element.</td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
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
