---
title: "<summary>: Das Disclosure Summary-Element"
slug: Web/HTML/Reference/Elements/summary
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

Das **`<summary>`** [HTML](/de/docs/Web/HTML)-Element gibt eine Zusammenfassung, Beschriftung oder Legende für das Offenlegungsfeld eines {{HTMLElement("details")}}-Elements an. Ein Klick auf das `<summary>`-Element wechselt den Zustand des übergeordneten `<details>`-Elements zwischen geöffnet und geschlossen.

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

## Nutzungshinweise

Der Inhalt des `<summary>`-Elements kann jede Überschrift, einfacher Text oder HTML sein, das innerhalb eines Absatzes verwendet werden kann.

Ein `<summary>`-Element darf _nur_ als erstes Kind eines `<details>`-Elements verwendet werden. Wenn der Benutzer auf die Zusammenfassung klickt, wird das übergeordnete `<details>`-Element geöffnet oder geschlossen, und dann wird ein [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event)-Ereignis an das `<details>`-Element gesendet, das verwendet werden kann, um Sie darüber zu informieren, wann diese Statusänderung auftritt.

Der Inhalt der `<details>` liefert die {{Glossary("accessible_description", "zugängliche Beschreibung")}} für das `<summary>`.

### Standardbeschriftungstext

Wenn das erste Kind eines `<details>`-Elements kein `<summary>`-Element ist, wird der {{Glossary("user_agent", "User-Agent")}} eine Standardzeichenkette (typischerweise "Details") als Beschriftung für das Offenlegungsfeld verwenden.

### Standardstil

Laut der HTML-Spezifikation umfasst der Standardstil für `<summary>`-Elemente `display: list-item`. Dies ermöglicht es, das angezeigte Symbol als Offenlegungswidget neben der Beschriftung vom Standard, das typischerweise ein Dreieck ist, zu ändern oder zu entfernen.

Sie können auch den Stil in `display: block` ändern, um das Offenlegungsdreißieck zu entfernen.

Weitere Informationen finden Sie im Abschnitt [Browser-Kompatibilität](#browser-kompatibilität), da nicht alle Browser die volle Funktionalität dieses Elements unterstützen.

Für WebKit-basierte Browser, wie Safari, ist es möglich, die Symboldarstellung durch das nicht standardmäßige CSS-Pseudoelement `::-webkit-details-marker` zu steuern. Um das Offenlegungsdreißieck zu entfernen, verwenden Sie `summary::-webkit-details-marker { display: none }`.

## Beispiele

Nachfolgend finden Sie einige Beispiele, die die Verwendung von `<summary>` zeigen. Weitere Beispiele finden Sie in der Dokumentation für das {{HTMLElement("details")}}-Element.

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
> Die Rolle, die dem `<summary>`-Element zugewiesen wird, variiert je nach Browser. Einige weisen ihm immer noch eine Standardrolle als [`button`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role) zu, die alle Rollen von ihren Kindern entfernt. Diese Inkonsistenz kann Probleme für Benutzer von unterstützenden Technologien wie Bildschirmlesegeräten verursachen (`<h4>` im vorherigen Beispiel wird seine Rolle entfernt und wird für diese Benutzer nicht als Überschrift behandelt). Sie sollten die Implementierung Ihres `<summary>` auf mehreren Plattformen testen, um sicherzustellen, dass eine konsistente Zugänglichkeitsunterstützung vorhanden ist.

### HTML in Zusammenfassungen

Dieses Beispiel fügt dem `<summary>`-Element semantische Bedeutung hinzu, um das Label als wichtig zu kennzeichnen:

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

Das Markierungssymbol des `<summary>`-Elements, das Offenlegungsdreieck, kann mit CSS angepasst werden. Das Symbol kann mit dem {{cssxref("::marker")}}-Pseudoelement angesprochen werden, welches die {{cssxref("list-style")}}-Kurzschreibweise und ihre Langhand-Komponenten-Eigenschaften wie {{cssxref("list-style-type")}} akzeptiert. Dies ermöglicht das Ändern des Dreiecks in ein Bild (normalerweise mit {{cssxref("list-style-image")}}) oder eine Zeichenkette (einschließlich Emojis). In diesem Beispiel ersetzen wir den Inhalt eines Offenlegungswidgets und entfernen das Symbol von einem anderen, indem wir `list-style: none` setzen, bevor wir ein benutzerdefiniertes Offenlegungssymbol über generierten Inhalt hinzufügen.

#### CSS

Im ersten Offenlegungswidget gestalten wir das `::marker`, indem wir den {{cssxref("content")}} basierend auf dem `[open]`-Attribut des `<details>`-Elements ändern. Für das zweite Widget entfernen wir das Markierungssymbol mit `list-style`-Eigenschaften und fügen dann gestylten generierten Inhalt mit dem {{cssxref("::after")}}-Pseudoelement hinzu. Wir schließen auch Stile für `::-webkit-details-marker` ein, um Safari zu adressieren. Der Selektor für das browserspezifische Pseudoelement ist in einer {{cssxref(":is()")}}-Pseudo-Klasse enthalten, sodass der gesamte Selektorblock nicht ungültig ist, wenn das prefixed Pseudoelement in einem Browser ungültig ist. Wir haben auch CSS-[Verschachtelung](/de/docs/Web/CSS/Reference/Selectors/Nesting_selector) verwendet. Siehe das [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors)-Modul.

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
          >Phrasierter Inhalt</a
        >, optional vermischt mit
        <a href="/de/docs/Web/HTML/Guides/Content_categories#heading_content"
          >Überschriftselementen</a
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
