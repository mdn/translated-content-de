---
title: "<summary>: Das Disclosure Summary-Element"
slug: Web/HTML/Element/summary
l10n:
  sourceCommit: aee844b529ac0cc6ac6bc480b92fc2eea78c3292
---

{{HTMLSidebar}}

Das **`<summary>`** [HTML](/de/docs/Web/HTML)-Element gibt eine Zusammenfassung, eine Bildunterschrift oder eine Legende für das {{HTMLElement("details")}}-Element an. Durch Klicken auf das `<summary>`-Element wird der Zustand des übergeordneten `<details>`-Elements umgeschaltet (geöffnet oder geschlossen).

{{EmbedInteractiveExample("pages/tabbed/summary.html","tabbed-shorter")}}

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Verwendungshinweise

Der Inhalt des `<summary>`-Elements kann jeglichen Überschrifteninhalt, einfachen Text oder HTML umfassen, der innerhalb eines Absatzes verwendet werden kann.

Ein `<summary>`-Element darf _nur_ als erstes Kind eines `<details>`-Elements verwendet werden. Wenn der Benutzer auf die Zusammenfassung klickt, wird das übergeordnete `<details>`-Element geöffnet oder geschlossen, und dann wird ein [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event)-Ereignis an das `<details>`-Element gesendet, das genutzt werden kann, um Sie über diesen Zustandswechsel zu informieren.

Der Inhalt des `<details>` bietet die {{Glossary("accessible_description", "zugängliche Beschreibung")}} für das `<summary>`.

### Standard-Labeltext

Wenn das erste Kind eines `<details>`-Elements nicht ein `<summary>`-Element ist, verwendet der {{Glossary("user_agent", "User Agent")}} einen Standardstring (typischerweise "Details") als Label für das Disclosure-Box.

### Standardstil

Laut HTML-Spezifikation beinhaltet der Standardstil für `<summary>`-Elemente `display: list-item`. Dadurch ist es möglich, das Symbol, das als Disclosure-Widget neben dem Label angezeigt wird, vom Standard, der typischerweise ein Dreieck ist, zu ändern oder zu entfernen.

Sie können den Stil auch auf `display: block` ändern, um das Disclosure-Dreieck zu entfernen.

Siehe den Abschnitt [Browser-Kompatibilität](#browser-kompatibilität) für Details, da nicht alle Browser die volle Funktionalität dieses Elements unterstützen.

Für auf Webkit basierende Browser, wie Safari, ist es möglich, die Anzeigesteuerung des Symbols durch das nicht standardmäßige CSS-Pseudoelement `::-webkit-details-marker` zu kontrollieren. Um das Disclosure-Dreieck zu entfernen, verwenden Sie `summary::-webkit-details-marker { display: none }`.

## Beispiele

Im Folgenden sind einige Beispiele dargestellt, die die Verwendung von `<summary>` zeigen. Weitere Beispiele finden Sie in der Dokumentation zum {{HTMLElement("details")}}-Element.

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

Sie können Überschriftselemente in `<summary>` verwenden, so wie dies:

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

Dies hat derzeit einige Abstandsprobleme, die mit CSS behoben werden könnten.

> [!WARNING]
> Da das `<summary>`-Element die Standardrolle [button](/de/docs/Web/Accessibility/ARIA/Roles/button_role) hat (die alle Rollen von Kindelementen entfernt), funktioniert dieses Beispiel nicht für Benutzer von unterstützenden Technologien wie Bildschirmlesegeräten. Das `<h4>` wird seine Rolle entfernen und daher nicht als Überschrift für diese Benutzer behandelt.

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

### Änderung des Zusammenfassungssymbols

Das `<summary>`-Elementmarker, das Disclosure-Dreieck, kann mit CSS angepasst werden. Der Marker kann mittels des {{cssxref("::marker")}}-Pseudoelements, welches die {{cssxref("list-style")}}-Kurzschreibweise und ihre Langschreibkomponenten unterstützt, wie z.B. {{cssxref("list-style-type")}}. Dies ermöglicht es, das Dreieck in ein Bild zu verwandeln (gewöhnlich mit {{cssxref("list-style-image")}}) oder in eine Zeichenfolge (einschließlich Emojis). In diesem Beispiel ersetzen wir den Inhalt eines Disclosure-Widgets und entfernen das Symbol von einem anderen durch Setzen von `list-style: none` bevor wir ein benutzerdefiniertes Disclosure-Symbol über generierten Inhalt hinzufügen.

#### CSS

Im ersten Disclosure-Widget gestalten wir den `::marker`, indem wir den {{cssxref("content")}} basierend auf dem `[open]`-Attribut des `<details>`-Elements ändern. Für das zweite Widget entfernen wir den Marker mit den `list-style`-Eigenschaften und fügen dann mit dem {{cssxref("::after")}}-Pseudoelement gestalteten generierten Inhalt hinzu. Wir schließen auch Stile für `::-webkit-details-marker` ein, um Safari anzusprechen. Der Selektor für das browser-spezifische Pseudoelement ist in einem {{cssxref(":is()")}}-Pseudoklasse enthalten, sodass es die Selektorliste nicht ungültig macht.

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

Der CSS schließt den `[open]` [Attributselektor](/de/docs/Web/CSS/Attribute_selectors) ein, der nur dann entspricht, wenn das `open`-Attribut vorhanden ist (wenn das `<details>` geöffnet ist). Die {{cssxref(":first-of-type")}}- und {{cssxref(":last-of-type")}}-Pseudoklassen richten sich an die ersten und Geschwisterelemente des gleichen Typs. Wir haben das vorangestellte `-webkit-` Pseudoelement in einer {{cssxref(":is()")}} Pseudoklasse aufgenommen, da es eine [fehlerverzeihende Selektorliste](/de/docs/Web/CSS/Selector_list#forgiving_selector_list) annimmt, sodass wenn das vorangestellte Pseudoelement in einem Browser ungültig ist, der gesamte Selektorblock nicht ungültig wird. Wir haben auch CSS [Verschachtelung](/de/docs/Web/CSS/Nesting_selector) verwendet. Siehe das Modul [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors).

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
      <th scope="row">Zulässiger Inhalt</th>
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
      <td>Das {{HTMLElement("details")}}-Element.</td>
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
