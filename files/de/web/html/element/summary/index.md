---
title: "<summary>: Das Offenlegungszusammenfassungs-Element"
slug: Web/HTML/Element/summary
l10n:
  sourceCommit: 71d2e2c09deeb18a093e905a27c6b372c6201b88
---

{{HTMLSidebar}}

Das **`<summary>`** [HTML](/de/docs/Web/HTML) Element spezifiziert eine Zusammenfassung, Bildunterschrift oder Legende für das Offenlegungsfeld eines {{HTMLElement("details")}}-Elements. Ein Klick auf das `<summary>`-Element ändert den Zustand des übergeordneten `<details>`-Elements zwischen "offen" und "geschlossen".

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

Dieses Element beinhaltet nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Verwendungshinweise

Der Inhalt des `<summary>`-Elements kann jede Überschrift, Klartext oder HTML sein, das innerhalb eines Absatzes verwendet werden kann.

Ein `<summary>`-Element darf _nur_ als erstes Kind eines `<details>`-Elements verwendet werden. Wenn der Benutzer auf die Zusammenfassung klickt, wird das übergeordnete `<details>`-Element geöffnet oder geschlossen, und ein [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event)-Ereignis wird an das `<details>`-Element gesendet, das verwendet werden kann, um Sie darüber zu informieren, wann diese Zustandsänderung eintritt.

Der Inhalt des `<details>` bietet die {{Glossary("accessible_description", "barrierefreie Beschreibung")}} für das `<summary>`.

### Standard-Beschriftungstext

Wenn das erste Kind eines `<details>`-Elements kein `<summary>`-Element ist, verwendet der {{Glossary("user_agent", "User-Agent")}} eine Standard-Zeichenkette (typischerweise "Details") als Bezeichnung für das Offenlegungsfeld.

### Standard-Stil

Nach der HTML-Spezifikation enthält der Standardstil für `<summary>`-Elemente `display: list-item`. Dies ermöglicht es, das Symbol, das als Offenlegungs-Widget neben der Beschriftung angezeigt wird, vom Standard, das typischerweise ein Dreieck ist, zu ändern oder zu entfernen.

Sie können den Stil auch zu `display: block` ändern, um das Offenlegungsdreieck zu entfernen.

Siehe den Abschnitt [Browser-Kompatibilität](#browser-kompatibilität) für Details, da nicht alle Browser die volle Funktionalität dieses Elements unterstützen.

Für WebKit-basierte Browser, wie Safari, ist es möglich, die Anzeige des Symbols durch das nicht standardmäßige CSS-Pseudo-Element `::-webkit-details-marker` zu steuern. Um das Offenlegungsdreieck zu entfernen, verwenden Sie `summary::-webkit-details-marker { display: none }`.

## Beispiele

Nachfolgend sind einige Beispiele zur Verwendung von `<summary>` dargestellt. Weitere Beispiele finden Sie in der Dokumentation für das {{HTMLElement("details")}}-Element.

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

Sie können Überschriftselemente in `<summary>` verwenden, wie in diesem Beispiel:

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

Dies hat derzeit einige Abstandsprobleme, die mit CSS behoben werden könnten.

> [!WARNING]
> Da das `<summary>`-Element standardmäßig die Rolle [button](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role) hat (die alle Rollen von Kindelementen entfernt), wird dieses Beispiel für Benutzer von unterstützenden Technologien wie Screenreadern nicht funktionieren. Das `<h4>` wird seine Rolle verlieren und somit nicht als Überschrift für diese Benutzer behandelt.

### HTML in Zusammenfassungen

Dieses Beispiel fügt dem `<summary>`-Element einige Semantiken hinzu, um das Label als wichtig zu kennzeichnen:

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

Das Markierungssymbol, das Offenlegungsdreieck des `<summary>`-Elements, kann mit CSS angepasst werden. Das Markierungssymbol kann mit dem {{cssxref("::marker")}}-Pseudo-Element angesprochen werden, das die Kurzform-Eigenschaft {{cssxref("list-style")}} und seine Langwerteigenschaften wie {{cssxref("list-style-type")}} akzeptiert. Dies ermöglicht den Wechsel des Dreiecks zu einem Bild (üblicherweise mit {{cssxref("list-style-image")}}) oder einer Zeichenkette (einschließlich Emojis). In diesem Beispiel ersetzen wir den Inhalt eines Offenlegungs-Widgets und entfernen das Symbol von einem anderen, indem wir `list-style: none` setzen, bevor wir ein benutzerdefiniertes Offenlegungssymbol über generierten Inhalt hinzufügen.

#### CSS

In dem ersten Offenlegungs-Widget stylen wir den `::marker` und ändern den {{cssxref("content")}} basierend auf dem `[open]` Attribut des `<details>`-Elements. Für das zweite Widget entfernen wir die Markierung mit `list-style`-Eigenschaften und fügen dann gestylten, generierten Inhalt mit dem {{cssxref("::after")}}-Pseudo-Element hinzu. Wir fügen auch Stile für `::-webkit-details-marker` hinzu, um Safari anzusprechen. Der Selektor für das browserspezifische Pseudo-Element ist in einer {{cssxref(":is()")}}-Pseudo-Klasse enthalten, damit sie die Selektorliste nicht ungültig macht.

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

Das CSS umfasst den `[open]` [Attribut-Selektor](/de/docs/Web/CSS/Attribute_selectors), der nur übereinstimmt, wenn das `open`-Attribut vorhanden ist (wenn das `<details>` geöffnet ist). Die {{cssxref(":first-of-type")}} und {{cssxref(":last-of-type")}} Pseudo-Klassen sprechen das erste und die Geschwisterelemente des gleichen Typs an. Wir haben das vorangestellte `-webkit-` Pseudo-Element innerhalb einer {{cssxref(":is()")}}-Pseudo-Klasse inkludiert, da es eine [Tolerante Selektorliste](/de/docs/Web/CSS/Selector_list#forgiving_selector_list) akzeptiert, sodass, wenn das vorangestellte Pseudo-Element in einem Browser ungültig ist, der ganze Selektorblock nicht ungültig wird. Wir haben auch CSS [Nesting](/de/docs/Web/CSS/Nesting_selector) verwendet. Siehe das [CSS Selektoren](/de/docs/Web/CSS/CSS_selectors) Modul.

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
        <a href="/de/docs/Web/HTML/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        Keine
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        >, optional vermischt mit
        <a href="/de/docs/Web/HTML/Content_categories#heading_content"
          >Überschrifteninhalt</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine; sowohl Start- als auch End-Tag sind zwingend erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>Das {{HTMLElement("details")}}-Element.</td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td> <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">Keine entsprechende Rolle</a></td>
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
