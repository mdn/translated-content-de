---
title: "<p>: Das Absatz-Element"
slug: Web/HTML/Element/p
l10n:
  sourceCommit: 9231a7046973685f4600e1891fa644ecce41ef3b
---

{{HTMLSidebar}}

Das **`<p>`** [HTML](/de/docs/Web/HTML) Element repräsentiert einen Absatz. Absätze werden in visuellen Medien normalerweise als Textblöcke dargestellt, die durch Leerzeilen und/oder Einrückungen der ersten Zeile von benachbarten Blöcken getrennt sind. HTML-Absätze können jedoch jede strukturelle Gruppierung verwandter Inhalte sein, wie z.B. Bilder oder Formularelemente.

Absätze sind [block-level Elemente](/de/docs/Glossary/Block-level_content) und schließen sich automatisch, wenn ein anderes Block-Element vor dem schließenden `</p>`-Tag analysiert wird. Siehe "Tag-Auslassung" unten.

{{EmbedInteractiveExample("pages/tabbed/p.html", "tabbed-standard")}}

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

> [!NOTE]
> Das `align`-Attribut bei `<p>`-Tags ist veraltet und sollte nicht verwendet werden.

## Barrierefreiheit

Das Aufteilen von Inhalten in Absätze trägt zur Verbesserung der Zugänglichkeit einer Seite bei. Screenreader und andere unterstützende Technologien bieten Abkürzungen, die es ihren Nutzern ermöglichen, zum nächsten oder vorherigen Absatz zu springen, wodurch sie Inhalte durchfliegen können, ähnlich wie Weißraum es visuellen Nutzern ermöglicht, hin und her zu springen.

Die Verwendung leerer `<p>`-Elemente, um Platz zwischen Absätzen zu schaffen, ist problematisch für Menschen, die mit Bildschirmlesetechnologie navigieren. Bildschirmleser können das Vorhandensein des Absatzes ankündigen, aber keinen Inhalt – da keiner vorhanden ist. Dies kann die Person verwirren und frustrieren, die den Screenreader benutzt.

Wenn mehr Platz gewünscht ist, verwenden Sie {{glossary("CSS")}}-Eigenschaften wie {{cssxref("margin")}}, um den Effekt zu erzielen:

```css
p {
  margin-bottom: 2em; /* erhöht den Leerraum nach einem Absatz */
}
```

## Beispiele

### HTML

```html
<p>
  Dies ist der erste Absatz des Textes. Dies ist der erste Absatz des Textes. Dies
  ist der erste Absatz des Textes. Dies ist der erste Absatz des Textes.
</p>
<p>
  Dies ist der zweite Absatz. Dies ist der zweite Absatz. Dies ist der zweite
  Absatz. Dies ist der zweite Absatz.
</p>
```

### Ergebnis

{{EmbedLiveSample('Examples')}}

## Absätze stylen

Standardmäßig trennen Browser Absätze mit einer einzelnen Leerzeile. Alternative Trennmethoden, wie z.B. Einrückung der ersten Zeile, können mit {{glossary("CSS")}} erreicht werden:

### HTML

```html
<p>
  Absätze mit Leerzeilen zu trennen, ist am einfachsten für Leser zu erfassen,
  aber sie können auch durch Einrücken ihrer ersten Zeilen getrennt werden. Dies
  wird oft verwendet, um weniger Platz einzunehmen, z.B. um Papier im Druck zu
  sparen.
</p>

<p>
  Texte, die bearbeitet werden sollen, wie Schularbeiten und Rohentwürfe,
  verwenden sowohl Leerzeilen als auch Einrückungen zur Trennung. In fertigen
  Arbeiten wird die Kombination beider als redundant und unprofessionell
  betrachtet.
</p>

<p>
  In sehr alten Schriften wurden Absätze mit einem speziellen Zeichen getrennt: ¶,
  dem <i>Absatzzeichen</i>. Heutzutage wird dies als klaustrophobisch und schwer
  lesbar angesehen.
</p>

<p>
  Wie schwer lesbar? Sehen Sie selbst:
  <button data-toggle-text="Oh nein! Wechseln Sie zurück!">
    Verwenden Sie das Absatzzeichen für Absätze
  </button>
</p>
```

### CSS

```css
p {
  margin: 0;
  text-indent: 3ch;
}

p.pilcrow {
  text-indent: 0;
  display: inline;
}
p.pilcrow + p.pilcrow::before {
  content: " ¶ ";
}
```

### JavaScript

```js
document.querySelector("button").addEventListener("click", (event) => {
  document.querySelectorAll("p").forEach((paragraph) => {
    paragraph.classList.toggle("pilcrow");
  });

  [event.target.innerText, event.target.dataset.toggleText] = [
    event.target.dataset.toggleText,
    event.target.innerText,
  ];
});
```

### Ergebnis

{{EmbedLiveSample('Styling_paragraphs')}}

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
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Fließender Inhalt</a
        >, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>
        Das Starttag ist erforderlich. Das Endtag kann weggelassen werden, wenn das
        <code>&lt;p&gt;</code>-Element unmittelbar gefolgt wird von einem
        {{HTMLElement("address")}},
        {{HTMLElement("article")}}, {{HTMLElement("aside")}},
        {{HTMLElement("blockquote")}}, {{HTMLElement("details")}}, {{HTMLElement("div")}},
        {{HTMLElement("dl")}}, {{HTMLElement("fieldset")}},
        {{HTMLElement("figcaption")}}, {{HTMLElement("figure")}},
        {{HTMLElement("footer")}}, {{HTMLElement("form")}},
        {{HTMLElement("Heading_Elements", "h1")}}, {{HTMLElement("Heading_Elements", "h2")}},
        {{HTMLElement("Heading_Elements", "h3")}}, {{HTMLElement("Heading_Elements", "h4")}},
        {{HTMLElement("Heading_Elements", "h5")}}, {{HTMLElement("Heading_Elements", "h6")}},
        {{HTMLElement("header")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("hr")}},
        {{HTMLElement("main")}}, {{HTMLElement("menu")}}, {{HTMLElement("nav")}},
        {{HTMLElement("ol")}}, {{HTMLElement("pre")}}, {{HTMLElement("search")}},
        {{HTMLElement("section")}}, {{HTMLElement("table")}},
        {{HTMLElement("ul")}} oder einem anderen <code>&lt;p&gt;</code>
        Element, oder wenn kein weiterer Inhalt im übergeordneten Element vorhanden ist und das
        übergeordnete Element kein {{HTMLElement("a")}}, {{HTMLElement("audio")}},
        {{HTMLElement("del")}}, {{HTMLElement("ins")}}, {{HTMLElement("map")}},
        {{HTMLElement("noscript")}} oder {{HTMLElement("video")}} Element ist,
        oder ein autonomes benutzerdefiniertes Element.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >fließenden Inhalt</a
        >
        akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/structural_roles"
          >Absatz</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>Beliebig</td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>{{domxref("HTMLParagraphElement")}}</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("hr")}}
- {{HTMLElement("br")}}
