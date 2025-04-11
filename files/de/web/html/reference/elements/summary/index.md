---
title: "<summary>: Das Disclosure Summary-Element"
slug: Web/HTML/Reference/Elements/summary
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

Das **`<summary>`** [HTML](/de/docs/Web/HTML)-Element spezifiziert eine Zusammenfassung, eine Bildunterschrift oder Legende für die Enthüllungsbox eines {{HTMLElement("details")}}-Elements. Ein Klick auf das `<summary>`-Element wechselt den Zustand des übergeordneten `<details>`-Elements zwischen geöffnet und geschlossen.

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

Der Inhalt des `<summary>`-Elements kann jeder Überschrifteninhalt, einfacher Text oder HTML sein, das innerhalb eines Absatzes verwendet werden kann.

Ein `<summary>`-Element darf _nur_ als erstes Kind eines `<details>`-Elements verwendet werden. Wenn der Benutzer auf die Zusammenfassung klickt, wird das übergeordnete `<details>`-Element geöffnet oder geschlossen, und dann wird ein [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event)-Ereignis an das `<details>`-Element gesendet, das verwendet werden kann, um Sie wissen zu lassen, wann diese Zustandsänderung erfolgt.

Der Inhalt des `<details>` bietet die {{Glossary("accessible_description", "barrierefreie Beschreibung")}} für das `<summary>`.

### Standardbeschriftungstext

Wenn das erste Kind eines `<details>`-Elements kein `<summary>`-Element ist, wird der {{Glossary("user_agent", "User-Agent")}} eine Standardzeichenkette (typischerweise "Details") als Beschriftung für die Enthüllungsbox verwenden.

### Standardstil

Laut HTML-Spezifikation umfasst der Standardstil für `<summary>`-Elemente `display: list-item`. Dies macht es möglich, das angezeigte Symbol als Enthüllungs-Widget neben der Beschriftung vom Standard, der typischerweise ein Dreieck ist, zu ändern oder zu entfernen.

Sie können den Stil auch in `display: block` ändern, um das Enthüllungsdreieck zu entfernen.

Siehe den Abschnitt [Browser-Kompatibilität](#browser-kompatibilität) für weitere Details, da nicht alle Browser die volle Funktionalität dieses Elements unterstützen.

Für WebKit-basierte Browser wie Safari ist es möglich, die Symbolanzeige über das nicht standardisierte CSS-Pseudoelement `::-webkit-details-marker` zu steuern. Um das Enthüllungsdreieck zu entfernen, verwenden Sie `summary::-webkit-details-marker { display: none }`.

## Beispiele

Im Folgenden sind einige Beispiele, die `<summary>` in Gebrauch zeigen. Weitere Beispiele finden Sie in der Dokumentation für das {{HTMLElement("details")}}-Element.

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
> Da das `<summary>`-Element eine Standardrolle als [button](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role) hat (was alle Rollen von Kindelementen entfernt), funktioniert dieses Beispiel nicht für Benutzer von unterstützenden Technologien wie Bildschirmlesegeräten. Das `<h4>` wird seine Rolle entfernt haben und somit nicht als Überschrift für diese Benutzer behandelt werden.

### HTML in Zusammenfassungen

Dieses Beispiel fügt einige Semantiken dem `<summary>`-Element hinzu, um das Label als wichtig zu kennzeichnen:

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

### Das Symbol der Zusammenfassung ändern

Das Marker-Symbol des `<summary>`-Elements, das Enthüllungsdreieck, kann mit CSS angepasst werden. Das Marker-Symbol kann mit dem {{cssxref("::marker")}} Pseudoelement angesprochen werden, das die {{cssxref("list-style")}} Kurzschrift-Eigenschaft und ihre Komponenten wie {{cssxref("list-style-type")}} akzeptiert. Dies ermöglicht es, das Dreieck in ein Bild (in der Regel mit {{cssxref("list-style-image")}}) oder einen String (einschließlich Emojis) zu ändern. In diesem Beispiel ersetzen wir den Inhalt eines Enthüllungs-Widgets und entfernen das Symbol von einem anderen, indem wir `list-style: none` setzen, bevor ein benutzerdefiniertes Enthüllungssymbol über generierten Inhalt hinzugefügt wird.

#### CSS

Im ersten Enthüllungs-Widget stylen wir den `::marker` und ändern das {{cssxref("content")}} basierend auf dem `[open]`-Attribut des `<details>`-Elements. Für das zweite Widget entfernen wir den Marker mit `list-style`-Eigenschaften und fügen dann gestylten generierten Inhalt mit dem {{cssxref("::after")}}-Pseudoelement hinzu. Wir schließen auch Stile für `::-webkit-details-marker` ein, um Safari zu adressieren. Der Selektor für das browserspezifische Pseudoelement ist in einer {{cssxref(":is()")}} Pseudoklasse enthalten, damit der Selektor, wenn das Pseudoelement in einem Browser ungültig ist, die gesamte Selektorliste nicht ungültig wird. Wir haben auch CSS [Verschachtelung](/de/docs/Web/CSS/Nesting_selector) verwendet. Siehe das [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors) Modul.

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

Das CSS beinhaltet den `[open]` [Attributselektor](/de/docs/Web/CSS/Attribute_selectors), der nur übereinstimmt, wenn das `open`-Attribut vorhanden ist (wenn die `<details>` geöffnet sind). Die {{cssxref(":first-of-type")}} und {{cssxref(":last-of-type")}} Pseudoklassen zielen auf das erste und letzte Geschwisterelement des gleichen Typs. Wir haben das mit `-webkit-` vorausgesetzte Pseudoelement innerhalb einer {{cssxref(":is()")}} Pseudoklasse aufgenommen, da es eine [verzeihliche Selektorliste](/de/docs/Web/CSS/Selector_list#forgiving_selector_list) aufnimmt, so dass, wenn das vorausgesetzte Pseudoelement in einem Browser ungültig ist, der gesamte Selektorblock nicht ungültig wird. Wir haben auch CSS [Verschachtelung](/de/docs/Web/CSS/Nesting_selector) verwendet. Siehe das [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors) Modul.

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
          >Phrasierungsinhalt</a
        >, optional gemischt mit
        <a href="/de/docs/Web/HTML/Guides/Content_categories#heading_content"
          >Überschrifteninhalt</a
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
      <th scope="row">Implizite ARIA-Rolle</th>
      <td><a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">Keine entsprechende Rolle</a></td>
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
