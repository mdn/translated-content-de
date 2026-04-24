---
title: "`<summary>` HTML-Disclosure-Übersichtselement"
short-title: <summary>
slug: Web/HTML/Reference/Elements/summary
l10n:
  sourceCommit: 599ae8b7ad414e91df473d91983f4ffc5cafabb3
---

Das **`<summary>`**-Element [HTML](/de/docs/Web/HTML) definiert eine Zusammenfassung, Beschriftung oder Legende für eine {{HTMLElement("details")}}-Element-Box. Ein Klick auf das `<summary>`-Element schaltet den Zustand des übergeordneten `<details>`-Elements zwischen geöffnet und geschlossen um.

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

## Nutzungshinweise

Der Inhalt des `<summary>`-Elements kann jede Überschrift, Fließtext oder HTML umfassen, das innerhalb eines Absatzes verwendet werden kann.

Ein `<summary>`-Element darf _nur_ als erstes Kind eines `<details>`-Elements verwendet werden. Wenn der Benutzer auf die Zusammenfassung klickt, wird das übergeordnete `<details>`-Element geöffnet oder geschlossen, und dann wird ein [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event)-Ereignis an das `<details>`-Element gesendet, das verwendet werden kann, um Sie darüber zu informieren, wann diese Zustandsänderung auftritt.

Der Inhalt des `<details>` bietet die {{Glossary("accessible_description", "zugängliche Beschreibung")}} für das `<summary>`.

### Standard-Text der Bezeichnung

Wenn das erste Kind eines `<details>`-Elements nicht ein `<summary>`-Element ist, wird der {{Glossary("user_agent", "User Agent")}} eine Standardzeichenkette (typischerweise "Details") als Bezeichnung für die Disclosure-Box verwenden.

### Standardstil

Laut HTML-Spezifikation beinhaltet der Standardstil für `<summary>`-Elemente `display: list-item`. Dies macht es möglich, das Symbol, das als Disclosure-Widget neben der Bezeichnung angezeigt wird, vom Standard, der typischerweise ein Dreieck ist, zu ändern oder zu entfernen.

Sie können den Stil auch zu `display: block` ändern, um das Disclosure-Dreieck zu entfernen.

Siehe den Abschnitt zur [Browser-Kompatibilität](#browser-kompatibilität) für Details, da nicht alle Browser die volle Funktionalität dieses Elements unterstützen.

Für WebKit-basierte Browser, wie Safari, ist es möglich, die Anzeige des Symbols über das nicht standardmäßige CSS-Pseudo-Element `::-webkit-details-marker` zu steuern. Um das Disclosure-Dreieck zu entfernen, verwenden Sie `summary::-webkit-details-marker { display: none }`.

## Beispiele

Unten finden Sie einige Beispiele, die die Verwendung von `<summary>` zeigen. Weitere Beispiele finden Sie in der Dokumentation für das {{HTMLElement("details")}}-Element.

### Grundlegendes Beispiel

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

Dies hat momentan einige Abstandsprobleme, die mit CSS behoben werden könnten.

> [!WARNING]
> Die dem `<summary>`-Element zugewiesene Rolle variiert zwischen den Browsern. Einige weisen ihm immer noch eine Standard-[`button`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role)-Rolle zu, die alle Rollen von dessen Kindern entfernt. Diese Inkonsistenz kann Probleme für Benutzer mit unterstützenden Technologien wie Bildschirmlesegeräten verursachen (`<h4>` im vorherigen Beispiel wird seine Rolle entfernt bekommen und nicht als Überschrift für diese Benutzer behandelt). Sie sollten Ihre `<summary>`-Implementierung auf mehreren Plattformen testen, um eine konsistente Unterstützung der Barrierefreiheit sicherzustellen.

### HTML in Zusammenfassungen

Dieses Beispiel fügt dem `<summary>`-Element einige Semantiken hinzu, um die Bezeichnung als wichtig anzuzeigen:

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

Das Markierungssymbol des `<summary>`-Elements, das Offenlegungsdreieck, kann mit CSS angepasst werden. Das Symbol kann mit dem {{cssxref("::marker")}}-Pseudo-Element angesprochen werden, das die {{cssxref("list-style")}}-Kurzschreibweise und dessen Langhandeigenschaft akzeptiert, wie {{cssxref("list-style-type")}}. Dies ermöglicht es, das Dreieck in ein Bild (normalerweise mit {{cssxref("list-style-image")}}) oder eine Zeichenkette (einschließlich Emojis) zu ändern. In diesem Beispiel ersetzen wir den Inhalt eines Disclosure-Widgets und entfernen das Symbol von einem anderen, indem wir `list-style: none` festlegen, bevor wir ein benutzerdefiniertes Disclosure-Symbol über generierten Inhalt hinzufügen.

#### CSS

Im ersten Disclosure-Widget gestalten wir den `::marker`, indem wir den {{cssxref("content")}} basierend auf dem `[open]`-Attribut des `<details>`-Elements ändern. Für das zweite Widget entfernen wir das Markierungssymbol mit `list-style`-Eigenschaften und fügen dann stilisierten generierten Inhalt mit dem {{cssxref("::after")}}-Pseudo-Element hinzu. Wir fügen auch Stile für `::-webkit-details-marker` hinzu, um Safari abzuzielen. Der Selektor für das browserspezifische Pseudo-Element ist in einer {{cssxref(":is()")}}-Pseudo-Klasse enthalten, damit er die Selektorliste nicht ungültig macht.

```css
details {
  font-size: 1rem;
  font-family: "Open Sans", "Calibri", sans-serif;
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

Das CSS enthält den `[open]` [Attribut-Selektor](/de/docs/Web/CSS/Reference/Selectors/Attribute_selectors), der nur übereinstimmt, wenn das `open`-Attribut vorhanden ist (wenn die `<details>` geöffnet sind). Die {{cssxref(":first-of-type")}}- und {{cssxref(":last-of-type")}}-Pseudo-Klassen zielen auf das erste und die nachfolgenden Elemente desselben Typs ab. Wir haben das prefixed `-webkit-` Pseudo-Element innerhalb einer {{cssxref(":is()")}}-Pseudo-Klasse einbezogen, da diese eine [nachsichtige Selektorliste](/de/docs/Web/CSS/Reference/Selectors/Selector_list#forgiving_selector_list) annimmt. Falls das prefixed Pseudo-Element in einem Browser ungültig ist, wird der ganze Selektorblock nicht ungültig sein. Wir haben auch CSS [Verschachtelung](/de/docs/Web/CSS/Reference/Selectors/Nesting_selector) verwendet. Siehe das [CSS-Selektoren](/de/docs/Web/CSS/Guides/Selectors)-Modul.

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

## Technische Übersicht

<table class="properties">
  <tbody>
     <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories"
          >Inhaltskategorien</a>
      </th>
      <td>
        none
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierter Inhalt</a>, optional gemischt mit
        <a href="/de/docs/Web/HTML/Guides/Content_categories#heading_content"
          >Überschrift-Inhalt</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine; sowohl das Start- als auch das End-Tag sind zwingend erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>Das {{HTMLElement("details")}}-Element.</td>
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
