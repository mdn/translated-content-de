---
title: "<summary>: Das Disclosure Summary Element"
slug: Web/HTML/Element/summary
l10n:
  sourceCommit: 9d1a95873d139d5e278b568e4d88361bf86e4123
---

{{HTMLSidebar}}

Das **`<summary>`** [HTML](/de/docs/Web/HTML)-Element spezifiziert eine Zusammenfassung, eine Bildunterschrift oder eine Legende für das Disclosure Box des {{HTMLElement("details")}}-Elements. Ein Klick auf das `<summary>`-Element schaltet den Zustand des übergeordneten `<details>`-Elements zwischen offen und geschlossen.

{{EmbedInteractiveExample("pages/tabbed/summary.html","tabbed-shorter")}}

## Attribute

Dieses Element umfasst nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Nutzungshinweise

Der Inhalt des `<summary>`-Elements kann jeglichen Überschriften-Inhalt, einfachen Text oder HTML sein, der innerhalb eines Absatzes verwendet werden kann.

Ein `<summary>`-Element darf _nur_ als erstes Kind eines `<details>`-Elements verwendet werden. Wenn der Benutzer auf die Zusammenfassung klickt, wird das übergeordnete `<details>`-Element geöffnet oder geschlossen, und dann wird ein [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event)-Ereignis an das `<details>`-Element gesendet, das verwendet werden kann, um Sie über diesen Zustandswechsel zu informieren.

Der Inhalt des `<details>` bietet die {{Glossary("accessible_description", "zugängliche Beschreibung")}} für das `<summary>`.

### Standardbeschriftungstext

Wenn das erste Kind eines `<details>`-Elements kein `<summary>`-Element ist, wird der {{Glossary("user_agent", "User-Agent")}} eine Standardzeichenfolge (typischerweise "Details") als Beschriftung für das Disclosure Box verwenden.

### Standardstil

Laut der HTML-Spezifikation umfasst der Standardstil für `<summary>`-Elemente `display: list-item`. Dies erlaubt es, das angezeigte Symbol als Disclosure-Widget neben der Beschriftung vom Standard, der typischerweise ein Dreieck ist, zu ändern oder zu entfernen.

Sie können den Stil auch auf `display: block` ändern, um das Offenlegungssymbol-Dreieck zu entfernen.

Siehe den Abschnitt [Browser-Kompatibilität](#browser-kompatibilität) für Details, da nicht alle Browser die volle Funktionalität dieses Elements bereits unterstützen.

Für WebKit-basierte Browser wie Safari ist es möglich, die Symbolanzeige durch das nicht standardmäßige CSS-Pseudo-Element `::-webkit-details-marker` zu steuern. Um das Offenlegungsdreieck zu entfernen, verwenden Sie `summary::-webkit-details-marker { display: none }`.

## Beispiele

Nachfolgend einige Beispiele, die `<summary>` in Verwendung zeigen. Weitere Beispiele finden Sie in der Dokumentation des {{HTMLElement("details")}}-Elements.

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

{{EmbedLiveSample("Summaries_as_headings", 650, 120)}}

Dies hat derzeit einige Abstandsprobleme, die mit CSS behoben werden könnten.

> [!WARNING]
> Da das `<summary>`-Element standardmäßig die Rolle [button](/de/docs/Web/Accessibility/ARIA/Roles/button_role) hat (die alle Rollen von den Kindelementen entfernt), wird dieses Beispiel für Benutzer von assistiven Technologien wie Bildschirmlesegeräten nicht funktionieren. Das `<h4>` wird seine Rolle verlieren und daher für diese Benutzer nicht als Überschrift behandelt werden.

### HTML in Zusammenfassungen

Dieses Beispiel fügt dem `<summary>`-Element einige Semantiken hinzu, um die Beschriftung als wichtig zu kennzeichnen:

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

Das Markerzeichen des `<summary>`-Elements, das Offenlegungsdreieck, kann mit CSS angepasst werden. Der Marker kann mit dem {{cssxref("::marker")}}-Pseudo-Element angesprochen werden, das die {{cssxref("list-style")}}-Kurzform-Eigenschaft und seine Langform-Komponenten-Eigenschaften, wie {{cssxref("list-style-type")}}, akzeptiert. Dies ermöglicht es, das Dreieck in ein Bild (normalerweise mit {{cssxref("list-style-image")}}) oder eine Zeichenfolge (einschließlich Emojis) zu ändern. In diesem Beispiel ersetzen wir den Inhalt eines Offenlegungs-Widgets und entfernen das Symbol von einem anderen, indem wir `list-style: none` vor der Hinzufügung eines benutzerdefinierten Offenlegungssymbols über generierten Inhalt setzen.

#### CSS

Im ersten Offenlegungs-Widget gestalten wir den `::marker` und ändern den {{cssxref("content")}} basierend auf dem `[open]`-Attribut des `<details>`-Elements. Für das zweite Widget entfernen wir den Marker mit `list-style`-Eigenschaften und fügen dann gestalteten generierten Inhalt mit dem {{cssxref("::after")}}-Pseudo-Element hinzu. Wir haben auch Stile für `::-webkit-details-marker` hinzugefügt, um Safari anzusprechen. Der Selektor für das browserspezifische Pseudo-Element ist in einer {{cssxref(":is()")}}-Pseudo-Klasse enthalten, um die Selektorliste nicht zu invalidieren.

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

Das CSS enthält den `[open]` [Attributselektor](/de/docs/Web/CSS/Attribute_selectors), der nur dann zutrifft, wenn das Attribut `open` vorhanden ist (wenn die `<details>` offen sind). Die {{cssxref(":first-of-type")}}- und {{cssxref(":last-of-type")}}-Pseudo-Klassen richten sich an die ersten und Geschwisterelemente desselben Typs. Wir haben das `-webkit-`-pseudoelement mit Präfix in eine {{cssxref(":is()")}}-Pseudo-Klasse einbezogen, da es eine [vergebende Selektorliste](/de/docs/Web/CSS/Selector_list#forgiving_selector_list) akzeptiert, sodass der gesamte Selektorblock nicht ungültig wird, wenn das Pseudo-Element mit Präfix in einem Browser ungültig ist. Wir haben auch das CSS [Verschachtelung](/de/docs/Web/CSS/Nesting_selector) verwendet. Siehe das Modul [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors).

#### HTML

```html
<details>
  <h1>Quotes from Helen Keller</h1>
  <summary>On women's rights</summary>
  <p>
    <q
      >We have prayed, we have coaxed, we have begged, for the vote, with the
      hope that men, out of chivalry, would bestow equal rights upon women and
      take them into partnership in the affairs of the state. We hoped that
      their common sense would triumph over prejudices and stupidity. We thought
      their boasted sense of justice would overcome the errors that so often
      fetter the human spirit; but we have always gone away empty-handed. We
      shall beg no more.</q
    >
  </p>
</details>

<details>
  <summary>On optimism</summary>
  <p>
    <q
      >Optimism is the faith that leads to achievement; nothing can be done
      without hope.</q
    >
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
        none
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        >, optional gemischt mit
        <a href="/de/docs/Web/HTML/Content_categories#heading_content"
          >Überschrifteninhalt</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keiner; sowohl das Start- als auch das End-Tag sind obligatorisch.</td>
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
