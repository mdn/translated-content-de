---
title: "<summary>: Das Offenlegungselement Summary"
slug: Web/HTML/Element/summary
l10n:
  sourceCommit: 8b02826c79b090b5af0d68ae1ef39f932a66a7f1
---

{{HTMLSidebar}}

Das **`<summary>`** [HTML](/de/docs/Web/HTML) Element spezifiziert eine Zusammenfassung, Überschrift oder Legende für ein Offenlegungselement des {{HTMLElement("details")}}-Elements. Ein Klick auf das `<summary>`-Element wechselt den Zustand des übergeordneten `<details>`-Elements zwischen geöffnet und geschlossen.

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

Der Inhalt des `<summary>`-Elements kann jede Überschrift, Klartext oder HTML sein, das innerhalb eines Absatzes verwendet werden kann.

Ein `<summary>`-Element darf _nur_ als das erste Kind eines `<details>`-Elements verwendet werden. Wenn der Benutzer auf die Zusammenfassung klickt, wird das übergeordnete `<details>`-Element geöffnet oder geschlossen, und ein [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event)-Ereignis wird an das `<details>`-Element gesendet, das genutzt werden kann, um Ihnen mitzuteilen, wann diese Zustandsänderung eintritt.

Der Inhalt der `<details>` bietet die {{Glossary("accessible_description", "zugängliche Beschreibung")}} für das `<summary>`.

### Standardbeschriftungstext

Wenn das erste Kind eines `<details>`-Elements kein `<summary>`-Element ist, verwendet das {{Glossary("user_agent", "User-Agent")}} eine Standardzeichenkette (typischerweise "Details") als Label für das Offenlegungselement.

### Standardstil

Gemäß der HTML-Spezifikation umfasst der Standardstil für `<summary>`-Elemente `display: list-item`. Dies ermöglicht es, das oder die Icons zu ändern oder zu entfernen, die als Offenlegungs-Widget neben dem Label angezeigt werden, deren Standardwert üblicherweise ein Dreieck ist.

Sie können auch den Stil zu `display: block` ändern, um das Offenlegungsdreieck zu entfernen.

Sehen Sie sich den Abschnitt [Browser-Kompatibilität](#browser-kompatibilität) für Details an, da nicht alle Browser die volle Funktionalität dieses Elements unterstützen.

Für auf WebKit basierende Browser, wie Safari, ist es möglich, das Icon-Anzeigeverhalten über das nicht standardmäßige CSS-Pseudoelement `::-webkit-details-marker` zu steuern. Um das Offenlegungsdreieck zu entfernen, verwenden Sie `summary::-webkit-details-marker { display: none }`.

## Beispiele

Unten finden Sie einige Beispiele, die `<summary>` in der Anwendung zeigen. Weitere Beispiele finden Sie in der Dokumentation für das {{HTMLElement("details")}}-Element.

### Einfaches Beispiel

Ein einfaches Beispiel, das die Nutzung von `<summary>` in einem {{HTMLElement("details")}}-Element zeigt:

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

Dies hat derzeit einige Platzierungsprobleme, die mit CSS behoben werden können.

> [!WARNING]
> Da das `<summary>`-Element die Standardrolle [button](/de/docs/Web/Accessibility/ARIA/Roles/button_role) hat (welches alle Rollen von Kindelementen entfernt), funktioniert dieses Beispiel nicht für Benutzer von assistiven Technologien wie Screenreadern. Das `<h4>` wird seine Rolle verlieren und daher nicht als Überschrift für diese Benutzer behandelt werden.

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

{{EmbedLiveSample("HTML_in_summaries", 650, 150)}}

### Ändern des Icons der Zusammenfassung

Das Markierungszeichen des `<summary>`-Elements, das Offenlegungsdreieck, kann mit CSS angepasst werden. Das Markierungszeichen kann mit dem {{cssxref("::marker")}} Pseudoelement angesprochen werden, welches die {{cssxref("list-style")}} Kurznotation und seine Langformatkomponenten, wie {{cssxref("list-style-type")}}, akzeptiert. Dies ermöglicht es, das Dreieck in ein Bild (gewöhnlich mit {{cssxref("list-style-image")}}) oder eine Zeichenkette (einschließlich Emojis) zu ändern. In diesem Beispiel ersetzen wir den Inhalt eines Offenlegungs-Widgets und entfernen das Icon von einem anderen, indem wir `list-style: none` setzen, bevor wir über generierten Inhalt ein benutzerdefiniertes Offenlegungsicon hinzufügen.

#### CSS

Im ersten Offenlegungs-Widget gestalten wir den `::marker`, indem wir den {{cssxref("content")}} basierend auf dem `[open]`-Attribut des `<details>`-Elements ändern. Für das zweite Widget entfernen wir die Markierung mit `list-style`-Eigenschaften und fügen dann über das {{cssxref("::after")}} Pseudoelement gestylten generierten Inhalt hinzu. Wir fügen auch Stile für `::-webkit-details-marker` hinzu, um Safari anzusprechen. Der Selektor für das browserspezifische Pseudoelement ist in eine {{cssxref(":is()")}} Pseudoklasse eingebettet, sodass es die Selektorliste nicht ungültig macht, falls das vorangestellte Pseudoelement in einem Browser ungültig ist. Wir haben auch CSS [nesting](/de/docs/Web/CSS/Nesting_selector) verwendet. Siehe das Modul [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors).

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
          >Phrasierung Inhalte</a
        >, optional vermischt mit
        <a href="/de/docs/Web/HTML/Content_categories#heading_content"
          >Überschriftsinhalten</a
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
