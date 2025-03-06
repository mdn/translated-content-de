---
title: "<summary>: Das Disclosure-Summary-Element"
slug: Web/HTML/Element/summary
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{HTMLSidebar}}

Das **`<summary>`** [HTML](/de/docs/Web/HTML) Element legt eine Zusammenfassung, Beschriftung oder Legende für ein {{HTMLElement("details")}} Element fest. Durch Klicken auf das `<summary>` Element wird der Zustand des übergeordneten `<details>` Elements geöffnet und geschlossen.

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

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Nutzungshinweise

Der Inhalt des `<summary>` Elements kann jede Überschrift, einfacher Text oder HTML sein, das innerhalb eines Absatzes verwendet werden kann.

Ein `<summary>` Element darf _nur_ als erstes Kind eines `<details>` Elements verwendet werden. Wenn der Benutzer auf die Zusammenfassung klickt, wird das übergeordnete `<details>` Element geöffnet oder geschlossen, und ein [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event) Ereignis wird an das `<details>` Element gesendet, das verwendet werden kann, um Sie darauf hinzuweisen, wann diese Zustandsänderung auftritt.

Der Inhalt der `<details>` bietet die {{Glossary("accessible_description", "zugängliche Beschreibung")}} für das `<summary>`.

### Standard-Labeltext

Wenn das erste Kind eines `<details>` Elements kein `<summary>` Element ist, verwendet der {{Glossary("user_agent", "User-Agent")}} eine Standardzeichenfolge (typischerweise "Details") als Bezeichnung für das Disclosure-Feld.

### Standardstil

Gemäß der HTML-Spezifikation umfasst der Standardstil für `<summary>` Elemente `display: list-item`. Dies ermöglicht es, das Symbol, das als Disclosure-Widget neben dem Label angezeigt wird, vom Standard zu ändern oder zu entfernen, das typischerweise ein Dreieck ist.

Sie können den Stil auch in `display: block` ändern, um das Disclosure-Dreieck zu entfernen.

Details finden Sie im Abschnitt [Browser-Kompatibilität](#browser-kompatibilität), da nicht alle Browser die volle Funktionalität dieses Elements unterstützen.

Für WebKit-basierte Browser, wie Safari, ist es möglich, die Symbolanzeige durch das nicht-standardmäßige CSS-Pseudoelement `::-webkit-details-marker` zu steuern. Um das Disclosure-Dreieck zu entfernen, verwenden Sie `summary::-webkit-details-marker { display: none }`.

## Beispiele

Nachfolgend sind einige Beispiele für die Verwendung von `<summary>` aufgeführt. Weitere Beispiele finden Sie in der Dokumentation für das {{HTMLElement("details")}} Element.

### Einfaches Beispiel

Ein einfaches Beispiel, das die Verwendung von `<summary>` in einem {{HTMLElement("details")}} Element zeigt:

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

Dies hat derzeit einige Abstandsprobleme, die mit CSS behoben werden könnten.

> [!WARNING]
> Da das `<summary>` Element eine Standardrolle von [button](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role) hat (die alle Rollen von Kindelementen entfernt), funktioniert dieses Beispiel nicht für Benutzer von unterstützenden Technologien wie Bildschirmlesegeräten. Das `<h4>` wird seine Rolle verlieren und daher nicht als Überschrift für diese Benutzer behandelt.

### HTML in Zusammenfassungen

Dieses Beispiel fügt dem `<summary>` Element einige Semantiken hinzu, um das Label als wichtig zu kennzeichnen:

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

Das Markierungssymbol des `<summary>` Elements, das Disclosure-Dreieck, kann mit CSS angepasst werden. Das Symbol kann mit dem {{cssxref("::marker")}} Pseudoelement angesteuert werden, das die {{cssxref("list-style")}} Kurzform-Eigenschaft und deren Langform-Komponenteneigenschaften wie {{cssxref("list-style-type")}} akzeptiert. Dies ermöglicht das Ändern des Dreiecks in ein Bild (normalerweise mit {{cssxref("list-style-image")}}) oder eine Zeichenfolge (einschließlich Emojis). In diesem Beispiel ersetzen wir den Inhalt eines Disclosure-Widgets und entfernen das Symbol von einem anderen, indem wir `list-style: none` setzen, bevor ein benutzerdefiniertes Disclosure-Symbol über generierten Inhalt hinzugefügt wird.

#### CSS

Im ersten Disclosure-Widget stylen wir das `::marker`, indem wir den {{cssxref("content")}} auf Basis des `[open]` Attributs des `<details>` Elements ändern. Für das zweite Widget entfernen wir das Symbol mit `list-style` Eigenschaften und fügen dann gestylten generierten Inhalt mit dem {{cssxref("::after")}} Pseudoelement hinzu. Wir fügen auch Stile für `::-webkit-details-marker` hinzu, um Safari zu targeten. Der Selektor für das browser-spezifische Pseudoelement ist in einer {{cssxref(":is()")}} Pseudoklasse enthalten, um die Selektorliste nicht zu ungültig zu machen.

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

Das CSS enthält den `[open]` [Attributselektor](/de/docs/Web/CSS/Attribute_selectors), der nur übereinstimmt, wenn das `open` Attribut vorhanden ist (wenn die `<details>` geöffnet sind). Die {{cssxref(":first-of-type")}} und {{cssxref(":last-of-type")}} Pseudoklassen targeten das erste und die Geschwisterelemente des gleichen Typs. Wir haben das prefixed `-webkit-` Pseudoelement innerhalb einer {{cssxref(":is()")}} Pseudoklasse verwendet, da sie eine [fehlertolerante Selektorliste](/de/docs/Web/CSS/Selector_list#forgiving_selector_list) nimmt. Wenn das prefixed Pseudoelement in einem Browser ungültig ist, wird der gesamte Selektorblock nicht ungültig. Wir haben auch CSS [Verschachtelung](/de/docs/Web/CSS/Nesting_selector) verwendet. Sehen Sie das Modul [CSS Selektoren](/de/docs/Web/CSS/CSS_selectors).

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
        keine
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Formulierungsinhalt</a
        >, optional vermischt mit
        <a href="/de/docs/Web/HTML/Content_categories#heading_content"
          >Überschriftinhalt</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine; sowohl das Start-Tag als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>Das {{HTMLElement("details")}} Element.</td>
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
