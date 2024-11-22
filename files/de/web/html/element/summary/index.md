---
title: "<summary>: Das Disclosure-Summary-Element"
slug: Web/HTML/Element/summary
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{HTMLSidebar}}

Das **`<summary>`** [HTML](/de/docs/Web/HTML) Element spezifiziert eine Zusammenfassung, Bildunterschrift oder Legende für die `<details>`-Elemente eines Expandierfeldes. Ein Klick auf das `<summary>`-Element schaltet den Zustand des übergeordneten `<details>`-Elements zwischen ein- und ausgeklappt um.

{{EmbedInteractiveExample("pages/tabbed/summary.html","tabbed-shorter")}}

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Verwendungshinweise

Der Inhalt des `<summary>`-Elements kann beliebiger Überschrifteninhalt, einfacher Text oder HTML sein, das innerhalb eines Absatzes verwendet werden kann.

Ein `<summary>`-Element darf _nur_ als erstes Kind eines `<details>`-Elements verwendet werden. Wenn der Nutzer auf die Zusammenfassung klickt, wird das übergeordnete `<details>`-Element geöffnet oder geschlossen und es wird ein [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event)-Ereignis an das `<details>`-Element gesendet, das genutzt werden kann, um Sie über diesen Zustandswechsel zu informieren.

Der Inhalt der `<details>` bietet die {{Glossary("accessible_description", "zugängliche Beschreibung")}} für das `<summary>`.

### Standard-Label-Text

Wenn das `<details>`-Element kein `<summary>`-Element als erstes Kind hat, verwendet das {{Glossary("user_agent", "User-Agent")}} eine Standardzeichenkette (typischerweise "Details") als Beschreibung für das Expandierfeld.

### Standardstil

Laut HTML-Spezifikation beinhaltet der Standardstil für `<summary>`-Elemente `display: list-item`. Dadurch ist es möglich, das standardmäßig angezeigte Symbol als Disclosure-Widget neben dem Label zu ändern oder zu entfernen, welches typischerweise ein Dreieck ist.

Sie können den Stil auch auf `display: block` ändern, um das Disclosure-Dreieck zu entfernen.

Siehe die [Browser-Kompatibilität](#browser-kompatibilität) Abschnitt für Details, da nicht alle Browser die volle Funktionalität dieses Elements unterstützen.

Für WebKit-basierte Browser, wie Safari, ist es möglich, die Symbolanzeige durch das nicht standardmäßige CSS-Pseudoelement `::-webkit-details-marker` zu steuern. Um das Disclosure-Dreieck zu entfernen, verwenden Sie `summary::-webkit-details-marker { display: none }`.

## Beispiele

Unten sind einige Beispiele zur Verwendung von `<summary>`. Weitere Beispiele finden Sie in der Dokumentation des `<details>`-Elements.

### Einfaches Beispiel

Ein einfaches Beispiel für die Verwendung von `<summary>` in einem `<details>`-Element:

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

Sie können Überschriftenelemente in `<summary>` verwenden, wie folgt:

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

{{EmbedLiveSample("Summaries_as_headings", 650, 120)}}

Dies hat momentan einige Abstandsprobleme, die mit CSS behoben werden könnten.

> [!WARNING]
> Da das `<summary>`-Element standardmäßig die Rolle des [button](/de/docs/Web/Accessibility/ARIA/Roles/button_role) übernimmt (was alle Rollen von Kindelementen entfernt), funktioniert dieses Beispiel nicht für Benutzer von unterstützenden Technologien wie Bildschirmlesegeräten. Das `<h4>` verliert seine Rolle und wird daher nicht als Überschrift für diese Benutzer behandelt.

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

{{EmbedLiveSample("HTML_in_summaries", 650, 120)}}

### Änderung des Symbols der Zusammenfassung

Das Markerzeichen des `<summary>`-Elements, das sogenannte Disclosure-Dreieck, kann mit CSS angepasst werden. Der Marker kann mit dem {{cssxref("::marker")}}-Pseudoelement anvisiert werden, welches die Verwendung der {{cssxref("list-style")}}-Kurzschrift und ihrer Langunterkomponenten, wie etwa {{cssxref("list-style-type")}}, ermöglicht. Dies erlaubt es, das Dreieck zu einem Bild (meist mit {{cssxref("list-style-image")}}) oder einer Zeichenkette (einschließlich Emojis) zu ändern. In diesem Beispiel ersetzen wir den Inhalt eines erweiterten Widgets und entfernen das Symbol von einem anderen, indem `list-style: none` eingestellt wird, bevor ein benutzerdefiniertes Disclosure-Symbol durch generierten Inhalt hinzugefügt wird.

#### CSS

Im ersten erweiterten Widget gestalten wir den `::marker`, wobei wir den {{cssxref("content")}} basierend auf das `[open]`-Attribut des `<details>`-Elements ändern. Für das zweite Widget entfernen wir den Marker mit `list-style` Eigenschaften und fügen dann gestylten generierten Inhalt mit dem {{cssxref("::after")}}-Pseudoelement hinzu. Wir schließen auch Stile für `::-webkit-details-marker` ein, um Safari anzusprechen. Der Selektor für das browserspezifische Pseudoelement ist in einer {{cssxref(":is()")}}-Pseudoklasse enthalten, damit es die Selektorliste nicht ungültig macht.

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
  content: "- ";
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
    content: "-";
  }
}
details:last-of-type summary::-webkit-details-marker {
  display: none;
}
```

Das CSS enthält den `[open]` [Attributselektor](/de/docs/Web/CSS/Attribute_selectors), der nur ausgewählt wird, wenn das `open`-Attribut vorhanden ist (wenn die `<details>` offen sind). Die {{cssxref(":first-of-type")}} und {{cssxref(":last-of-type")}} Pseudoklassen zielen auf die ersten und Geschwisterelemente desselben Typs. Wir haben das präfixierte `-webkit-`-Pseudoelement innerhalb einer {{cssxref(":is()")}}-Pseudoklasse einbezogen, da es eine [verzeihliche Selektorliste](/de/docs/Web/CSS/Selector_list#forgiving_selector_list) akzeptiert, sodass, wenn das präfixierte Pseudoelement in einem Browser ungültig ist, der gesamte Selektorblock nicht ungültig wird. Wir haben auch CSS [Nesting](/de/docs/Web/CSS/Nesting_selector) verwendet. Siehe das [CSS Selektoren](/de/docs/Web/CSS/CSS_selectors)-Modul.

#### HTML

```html
<details>
<h1>Quotes from Helen Keller</h2>
  <summary>On women's rights</summary>
  <p>
    <q>We have prayed, we have coaxed, we have begged, for the vote, with the hope that men, out of chivalry, would bestow equal rights upon women and take them into partnership in the affairs of the state. We hoped that their common sense would triumph over prejudices and stupidity. We thought their boasted sense of justice would overcome the errors that so often fetter the human spirit; but we have always gone away empty-handed. We shall beg no more.</q>
  </p>
</details>

<details>
  <summary>On optimism</summary>
  <p>
    <q>Optimism is the faith that leads to achievement; nothing can be done without hope.</q>
  </p>
</details>
```

#### Ergebnis

{{EmbedLiveSample("Changing the summary's icon", 650, 150)}}

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
        keine
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
      <td>Keine; sowohl das Start- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>Das {{HTMLElement("details")}} Element.</td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td> <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">Keine entsprechende Rolle</a></td>
    </tr>
    <tr>
      <th scope="row">Zulässige ARIA-Rollen</th>
      <td>Keine <code>role</code> erlaubt</td>
    </tr>
    <tr>
      <th scope="row">DOM-Interface</th>
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
