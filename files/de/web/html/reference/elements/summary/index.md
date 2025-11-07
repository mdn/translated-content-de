---
title: "<summary>: Das Disclosure Summary-Element"
slug: Web/HTML/Reference/Elements/summary
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Das **`<summary>`** [HTML](/de/docs/Web/HTML)-Element gibt eine Zusammenfassung, Überschrift oder Legende für das Disclosure-Box-Element des {{HTMLElement("details")}} an. Ein Klick auf das `<summary>`-Element wechselt den Zustand des übergeordneten `<details>`-Elements zwischen geöffnet und geschlossen.

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

## Verwendungshinweise

Der Inhalt des `<summary>`-Elements kann jede Überschrift sein, einfacher Text oder HTML, das innerhalb eines Absatzes verwendet werden kann.

Ein `<summary>`-Element darf _nur_ als erstes Kind eines `<details>`-Elements verwendet werden. Wenn der Benutzer auf die Zusammenfassung klickt, wird das übergeordnete `<details>`-Element umgeschaltet (geöffnet oder geschlossen), und dann wird ein [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event)-Ereignis an das `<details>`-Element gesendet, mit dem Sie benachrichtigt werden können, wenn diese Zustandsänderung eintritt.

Der Inhalt des `<details>` liefert die {{Glossary("accessible_description", "barrierefreie Beschreibung")}} für das `<summary>`.

### Standardbeschriftungstext

Wenn das erste Kind eines `<details>`-Elements kein `<summary>`-Element ist, wird der {{Glossary("user_agent", "User-Agent")}} eine Standardzeichenfolge (typischerweise "Details") als Beschriftung für die Disclosure-Box verwenden.

### Standardstil

Gemäß der HTML-Spezifikation umfasst der Standardstil für `<summary>`-Elemente `display: list-item`. Dies ermöglicht es, das angezeigte Symbol als Disclosure-Widget neben der Beschriftung vom Standard, das typischerweise ein Dreieck ist, zu ändern oder zu entfernen.

Sie können den Stil auch auf `display: block` ändern, um das Disclosure-Dreieck zu entfernen.

Sehen Sie den Abschnitt zur [Browser-Kompatibilität](#browser-kompatibilität) für Details, da nicht alle Browser die volle Funktionalität dieses Elements unterstützen.

Für WebKit-basierte Browser wie Safari ist es möglich, die Anzeige des Symbols über das nicht standardmäßige CSS-Pseudo-Element `::-webkit-details-marker` zu steuern. Um das Verbergetrieieck zu entfernen, verwenden Sie `summary::-webkit-details-marker { display: none }`.

## Beispiele

Nachfolgend sind einige Beispiele gezeigt, die `<summary>` in Gebrauch zeigen. Weitere Beispiele finden Sie in der Dokumentation des {{HTMLElement("details")}} Elements.

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
> Die dem `<summary>`-Element zugewiesene Rolle variiert zwischen verschiedenen Browsern. Einige weisen ihm immer noch eine Standard-[`button`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role)-Rolle zu, die alle Rollen seiner Kinder entfernt. Diese Inkonsistenz kann Probleme für Benutzer von Hilfstechnologien wie Bildschirmlesegeräten verursachen (das `<h4>` im vorherigen Beispiel wird seine Rolle entfernt und nicht als Überschrift für diese Benutzer behandelt). Sie sollten Ihr `<summary>`-Implementierung auf mehreren Plattformen testen, um eine konsistente Barrierefreiheitsunterstützung zu gewährleisten.

### HTML in Zusammenfassungen

Dieses Beispiel fügt dem `<summary>`-Element Semantik hinzu, um das Etikett als wichtig zu kennzeichnen:

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

### Änderung des Symbols der Zusammenfassung

Das Markierungssymbol des `<summary>`-Elements, das Disclosure-Dreieck, kann mit CSS angepasst werden. Das Markierungssymbol kann mit dem {{cssxref("::marker")}}-Pseudo-Element angesprochen werden, das die Verwendung der {{cssxref("list-style")}}-Kurzschreibweise und deren Langhandkomponenten-Eigenschaften wie {{cssxref("list-style-type")}} ermöglicht. Dies ermöglicht es, das Dreieck durch ein Bild (normalerweise mit {{cssxref("list-style-image")}}) oder eine Zeichenfolge (einschließlich Emoji) zu ersetzen. In diesem Beispiel ersetzen wir den Inhalt eines Disclosure-Widgets und entfernen das Symbol eines anderen, indem wir `list-style: none` einstellen, bevor wir ein benutzerdefiniertes Disclosure-Symbol über generierten Inhalt hinzufügen.

#### CSS

Im ersten Disclosure-Widget stylen wir den `::marker` und ändern den {{cssxref("content")}} basierend auf dem `[open]`-Attribut des `<details>`-Elements. Für das zweite Widget entfernen wir das Markierungselement mit den `list-style`-Eigenschaften und fügen dann gestylten generierten Inhalt mit dem {{cssxref("::after")}}-Pseudo-Element hinzu. Wir schließen auch Stile für `::-webkit-details-marker` ein, um Safari zu berücksichtigen. Der Selektor für das browserspezifische Pseudo-Element ist in einer {{cssxref(":is()")}}-Pseudo-Klasse enthalten, damit es die Selektorliste nicht ungültig macht.

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

Das CSS enthält den `[open]`- [Attributselektor](/de/docs/Web/CSS/Reference/Selectors/Attribute_selectors), der nur dann übereinstimmt, wenn das `open`-Attribut vorhanden ist (wenn das `<details>` geöffnet ist). Die {{cssxref(":first-of-type")}} und {{cssxref(":last-of-type")}} Pseudo-Klassen sprechen das erste und die Geschwisterelemente des gleichen Typs an. Wir haben das mit `-webkit-`-Präfix versehene Pseudo-Element innerhalb einer {{cssxref(":is()")}}-Pseudo-Klasse aufgenommen, da es eine [fehlertolerante Selektorliste](/de/docs/Web/CSS/Reference/Selectors/Selector_list#forgiving_selector_list) akzeptiert, sodass wenn das präfixierte Pseudo-Element in einem Browser ungültig ist, der gesamte Selektorblock nicht ungültig wird. Wir haben auch CSS [Verschachtelung](/de/docs/Web/CSS/Reference/Selectors/Nesting_selector) verwendet. Siehe das Modul zu [CSS-Selektoren](/de/docs/Web/CSS/Guides/Selectors).

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
        none
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasing-Inhalt</a
        >, optional mit
        <a href="/de/docs/Web/HTML/Guides/Content_categories#heading_content"
          >Überschrift-Inhalt</a
        > vermischt
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine; sowohl das Start- als auch das Endtag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>Das {{HTMLElement("details")}}-Element.</td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td><a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role">Keine entsprechende Rolle</a></td>
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
