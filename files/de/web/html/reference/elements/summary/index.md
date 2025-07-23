---
title: "<summary>: Das Offenlegungszusammenfassungs-Element"
slug: Web/HTML/Reference/Elements/summary
l10n:
  sourceCommit: ad6662de230dbe29dc6f5881e934c0114dc40d31
---

Das **`<summary>`** [HTML](/de/docs/Web/HTML)-Element gibt eine Zusammenfassung, Überschrift oder Legende für ein Offenlegungsfeld eines {{HTMLElement("details")}}-Elements an. Ein Klick auf das `<summary>`-Element ändert den Zustand des übergeordneten `<details>`-Elements zwischen geöffnet und geschlossen.

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

Dieses Element umfasst nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Nutzungshinweise

Der Inhalt des `<summary>`-Elements kann beliebiger Überschriftsinhalt, Plaithtext oder HTML sein, das innerhalb eines Absatzes verwendet werden kann.

Ein `<summary>`-Element darf _nur_ als erstes Kind eines `<details>`-Elements verwendet werden. Wenn der Benutzer auf die Zusammenfassung klickt, wird das übergeordnete `<details>`-Element geöffnet oder geschlossen, und dann wird ein [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event)-Ereignis an das `<details>`-Element gesendet, das verwendet werden kann, um zu erkennen, wann diese Zustandsänderung eintritt.

Der Inhalt des `<details>` bietet die {{Glossary("accessible_description", "zugängliche Beschreibung")}} für das `<summary>`.

### Standard-Labeltext

Wenn das erste Kind eines `<details>`-Elements kein `<summary>`-Element ist, verwendet der {{Glossary("user_agent", "User Agent")}} eine Standardzeichenfolge (typischerweise "Details") als Beschriftung für das Offenlegungsfeld.

### Standardstil

Entsprechend der HTML-Spezifikation umfasst der Standardstil für `<summary>`-Elemente `display: list-item`. Dadurch ist es möglich, das Symbol, das als Offenlegungs-Widget neben der Beschriftung angezeigt wird, vom Standard, der typischerweise ein Dreieck ist, zu ändern oder zu entfernen.

Sie können auch den Stil auf `display: block` ändern, um das Offenlegungsdreieck zu entfernen.

Siehe den Abschnitt zur [Browser-Kompatibilität](#browser-kompatibilität) für Details, da nicht alle Browser die volle Funktionalität dieses Elements unterstützen.

Für WebKit-basierte Browser, wie Safari, ist es möglich, die Anzeige des Symbols durch das nicht standardmäßige CSS-Pseudoelement `::-webkit-details-marker` zu steuern. Um das Offenlegungsdreieck zu entfernen, verwenden Sie `summary::-webkit-details-marker { display: none }`.

## Beispiele

Nachfolgend sind einige Beispiele aufgeführt, die die Verwendung von `<summary>` zeigen. Weitere Beispiele finden Sie in der Dokumentation für das {{HTMLElement("details")}}-Element.

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

Sie können Überschriftselemente im `<summary>` verwenden, wie dieses:

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

Es gibt derzeit einige Abstandsprobleme, die mit CSS angegangen werden könnten.

> [!WARNING]
> Die dem `<summary>`-Element zugewiesene Rolle variiert zwischen den Browsern. Einige weisen ihm immer noch eine Standard-[`button`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role) Rolle zu, was alle Rollen von seinen Kindern entfernt. Diese Inkonsistenz kann Probleme für Benutzer von unterstützenden Technologien wie Bildschirmlesern verursachen (`<h4>` im vorherigen Beispiel verliert seine Rolle und wird nicht als Überschrift für diese Benutzer behandelt). Sie sollten die Implementierung Ihrer `<summary>`-Elemente auf mehreren Plattformen testen, um sicherzustellen, dass eine einheitliche Zugänglichkeitsunterstützung gegeben ist.

### HTML in Zusammenfassungen

Dieses Beispiel fügt einige Semantiken zum `<summary>`-Element hinzu, um den Text als wichtig zu kennzeichnen:

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

Das `<summary>`-Element-Symbol, das Offenlegungsdreieck, kann mit CSS angepasst werden. Das Symbol kann mit dem {{cssxref("::marker")}} Pseudoelement angesprochen werden, das die {{cssxref("list-style")}} Kurzschreibweise und seine Langform-Komponenten akzeptiert, wie {{cssxref("list-style-type")}}. Dies ermöglicht das Ändern des Dreiecks in ein Bild (normalerweise mit {{cssxref("list-style-image")}}) oder eine Zeichenkette (einschließlich Emojis). In diesem Beispiel ersetzen wir den Inhalt eines Offenlegungs-Widgets und entfernen das Symbol von einem anderen, indem wir `list-style: none` setzen, bevor wir ein benutzerdefiniertes Offenlegungssymbol über generierten Inhalt hinzufügen.

#### CSS

Im ersten Offenlegungs-Widget stylen wir den `::marker` und ändern den {{cssxref("content")}} basierend auf dem `[open]`-Attribut des `<details>`-Elements. Für das zweite Widget entfernen wir den Marker mit `list-style`-Eigenschaften und fügen dann gestylte generierte Inhalte mit dem {{cssxref("::after")}} Pseudoelement hinzu. Wir enthalten auch Stile für `::-webkit-details-marker`, um Safari anzusprechen. Der Selektor für das browserspezifische Pseudoelement ist in einer {{cssxref(":is()")}} Pseudoklasse enthalten, damit es die Selektorliste nicht ungültig macht.

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

Das CSS umfasst den `[open]` [Attributselektor](/de/docs/Web/CSS/Attribute_selectors), der nur übereinstimmt, wenn das `open`-Attribut vorhanden ist (wenn das `<details>` geöffnet ist). Die {{cssxref(":first-of-type")}} und {{cssxref(":last-of-type")}} Pseudoklassen zielen auf das erste und die Geschwisterelemente des gleichen Typs ab. Wir haben das mit Prefix versehene `-webkit-` Pseudoelement innerhalb einer {{cssxref(":is()")}} Pseudoklasse enthalten, da es eine [fehlertolerante Selektorliste](/de/docs/Web/CSS/Selector_list#forgiving_selector_list) berücksichtigt, weshalb der gesamte Selektorblock nicht ungültig ist, wenn das Pseudoelement in einem Browser ungültig ist. Wir haben auch CSS [Schachtelung](/de/docs/Web/CSS/Nesting_selector) verwendet. Siehe das [CSS Selektoren](/de/docs/Web/CSS/CSS_selectors) Modul.

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
          >Textgliederungsinhalt</a
        >, optional vermischt
        mit
        <a href="/de/docs/Web/HTML/Guides/Content_categories#heading_content"
          >Überschrifteninhalt</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine; sowohl der Start- als auch der End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>Das {{HTMLElement("details")}}-Element.</td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td><a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role">Keine entsprechende Rolle</a></td>
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
