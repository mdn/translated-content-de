---
title: "<summary>: Das Disclosure Summary-Element"
slug: Web/HTML/Element/summary
l10n:
  sourceCommit: f10015d1752d5668d8fe0de29f9d9807de475d58
---

{{HTMLSidebar}}

Das **`<summary>`** [HTML](/de/docs/Web/HTML)-Element spezifiziert eine Zusammenfassung, Bildunterschrift oder Legende für ein {{HTMLElement("details")}}-Element des Disclosure-Kastens. Ein Klick auf das `<summary>`-Element wechselt den Zustand des Eltern-`<details>`-Elements zwischen geöffnet und geschlossen.

{{EmbedInteractiveExample("pages/tabbed/summary.html","tabbed-shorter")}}

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Anwendungshinweise

Der Inhalt des `<summary>`-Elements kann jede Überschrift, Klartext oder HTML sein, das innerhalb eines Absatzes verwendet werden kann.

Ein `<summary>`-Element darf _nur_ als erstes Kind eines `<details>`-Elements verwendet werden. Wenn der Benutzer auf die Zusammenfassung klickt, wird das übergeordnete `<details>`-Element geöffnet oder geschlossen, und dann wird ein [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event)-Ereignis an das `<details>`-Element gesendet, das verwendet werden kann, um zu erfahren, wann diese Zustandsänderung auftritt.

Der Inhalt des `<details>` bietet die {{Glossary("accessible_description", "zugängliche Beschreibung")}} für das `<summary>`.

### Standard-Beschriftungstext

Wenn das erste Kind eines `<details>`-Elements kein `<summary>`-Element ist, verwendet der {{Glossary("user_agent", "User-Agent")}} eine Standardzeichenkette (typischerweise "Details") als Bezeichnung für das Disclosure-Kästchen.

### Standardstil

Laut der HTML-Spezifikation enthält der Standardstil für `<summary>`-Elemente `display: list-item`. Dies ermöglicht es, das Symbol zu ändern oder zu entfernen, das als Disclosure-Widget neben der Beschriftung angezeigt wird, was in der Regel ein Dreieck ist.

Sie können den Stil auch so ändern, dass `display: block` gesetzt wird, um das Disclosure-Dreieck zu entfernen.

Lesen Sie den Abschnitt zur [Browser-Kompatibilität](#browser-kompatibilität) für Details, da nicht alle Browser die volle Funktionalität dieses Elements unterstützen.

Für Webkit-basierte Browser wie Safari ist es möglich, die Anzeige des Symbols durch das nicht standardmäßige CSS-Pseudoelement `::-webkit-details-marker` zu steuern. Um das Disclosure-Dreieck zu entfernen, verwenden Sie `summary::-webkit-details-marker { display: none }`.

## Beispiele

Unten sind einige Beispiele für den Gebrauch von `<summary>`. Sie finden weitere Beispiele in der Dokumentation für das {{HTMLElement("details")}}-Element.

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

Sie können Überschriftselemente in `<summary>` verwenden, wie hier gezeigt:

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

Derzeit gibt es einige Abstandsprobleme, die mit CSS behoben werden könnten.

> [!WARNING]
> Da das `<summary>`-Element standardmäßig die Rolle [button](/de/docs/Web/Accessibility/ARIA/Roles/button_role) hat (die alle Rollen von untergeordneten Elementen entfernt), funktioniert dieses Beispiel nicht für Benutzer von unterstützenden Technologien wie Bildschirmlesern. Das `<h4>` verliert seine Rolle und wird daher von diesen Benutzern nicht als Überschrift behandelt.

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

{{EmbedLiveSample("HTML_in_summaries", 650, 120)}}

### Ändern des Symbols der Zusammenfassung

Das Symbol des `<summary>`-Elements, das Disclosure-Dreieck, kann mit CSS angepasst werden. Das Symbol kann mit dem {{cssxref("::marker")}}-Pseudoelement gezielt werden, das die {{cssxref("list-style")}}-Kurzschreibweiseneigenschaft und ihre Langhandkomponenteneigenschaften, wie {{cssxref("list-style-type")}}, akzeptiert. Dies ermöglicht es, das Dreieck in ein Bild (normalerweise mit {{cssxref("list-style-image")}}) oder eine Zeichenfolge (einschließlich Emojis) zu ändern. In diesem Beispiel ersetzen wir den Inhalt eines Disclosure-Widgets und entfernen das Symbol von einem anderen, indem wir `list-style: none` setzen, bevor ein benutzerdefiniertes Disclosure-Icon über generierten Inhalt hinzugefügt wird.

#### CSS

Im ersten Disclosure-Widget gestalten wir den `::marker`, indem wir den {{cssxref("content")}} basierend auf dem `[open]`-Attribut des `<details>`-Elements ändern. Für das zweite Widget entfernen wir das Symbol mit `list-style`-Eigenschaften und fügen dann stilisierten generierten Inhalt mit dem {{cssxref("::after")}}-Pseudoelement hinzu. Wir schließen auch Stile für `::-webkit-details-marker` ein, um Safari anzusprechen. Der Selektor für das browserspezifische Pseudoelement ist in einer {{cssxref(":is()")}}-Pseudoklasse eingeschlossen, sodass er die Selektorenliste nicht ungültig macht.

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

Das CSS enthält den `[open]` [Attributselektor](/de/docs/Web/CSS/Attribute_selectors), der nur übereinstimmt, wenn das `open`-Attribut vorhanden ist (wenn die `<details>` geöffnet sind). Die {{cssxref(":first-of-type")}}- und {{cssxref(":last-of-type")}}-Pseudoklassen zielen auf das erste und die Geschwisterelemente desselben Typs ab. Wir haben das vorangestellte `-webkit-` Pseudoelement innerhalb einer {{cssxref(":is()")}}-Pseudoklasse eingebunden, weil es eine [nachsichtige Selektorenliste](/de/docs/Web/CSS/Selector_list#forgiving_selector_list) akzeptiert; falls das vorangestellte Pseudoelement in einem Browser ungültig ist, wird der gesamte Selektorblock nicht ungültig. Wir haben auch CSS-[Verschachtelung](/de/docs/Web/CSS/Nesting_selector) verwendet. Siehe das Modul zu [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors).

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
        Keine
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        >, optional vermischt mit
        <a href="/de/docs/Web/HTML/Content_categories#heading_content"
          >Überschriftsinhalt</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine; sowohl das Start- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>Das {{HTMLElement("details")}}-Element.</td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td> <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">Keine entsprechende Rolle</a></td>
    </tr>
    <tr>
      <th scope="row">Zulässige ARIA-Rollen</th>
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
