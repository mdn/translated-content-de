---
title: "<summary>: Das Disclosure Summary Element"
slug: Web/HTML/Element/summary
l10n:
  sourceCommit: 0d945ca6e3ac02395dac9f1638ce6e488ada79f2
---

{{HTMLSidebar}}

Das **`<summary>`** [HTML](/de/docs/Web/HTML)-Element gibt eine Zusammenfassung, Beschriftung oder Legende für ein {{HTMLElement("details")}}-Element an. Das Klicken auf das `<summary>`-Element schaltet den Zustand des übergeordneten `<details>`-Elements zwischen offen und geschlossen um.

{{EmbedInteractiveExample("pages/tabbed/summary.html","tabbed-shorter")}}

## Attribute

Dieses Element umfasst nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Verwendungshinweise

Der Inhalt des `<summary>`-Elements kann jeglichen Überschrift-Inhalt, einfachen Text oder HTML enthalten, das innerhalb eines Absatzes verwendet werden kann.

Ein `<summary>`-Element darf _nur_ als das erste Kind eines `<details>`-Elements verwendet werden. Wenn der Benutzer auf die Zusammenfassung klickt, wird das übergeordnete `<details>`-Element geöffnet oder geschlossen, und es wird ein [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event)-Ereignis an das `<details>`-Element gesendet, das verwendet werden kann, um Sie darüber zu informieren, wann diese Zustandsänderung eintritt.

Der Inhalt des `<details>` bietet die {{Glossary("accessible_description", "zugängliche Beschreibung")}} für das `<summary>`.

### Standard-Beschriftungstext

Wenn das erste Kind eines `<details>`-Elements kein `<summary>`-Element ist, wird der {{Glossary("user_agent", "User Agent")}} eine Standardzeichenkette (typischerweise "Details") als Beschriftung für das Disclosure-Box verwenden.

### Standardstil

Nach der HTML-Spezifikation umfasst der Standardstil für `<summary>`-Elemente `display: list-item`. Dies ermöglicht es, das Symbol, das als Disclosure-Widget neben der Beschriftung angezeigt wird, vom Standard (typischerweise ein Dreieck) zu ändern oder zu entfernen.

Sie können den Stil auch ändern zu `display: block`, um das Dreieck zu entfernen.

Siehe den Abschnitt [Browser-Kompatibilität](#browser-kompatibilität) für Details, da nicht alle Browser die volle Funktionalität dieses Elements unterstützen.

Für auf WebKit-basierende Browser wie Safari ist es möglich, die Anzeige des Symbols über das nicht standardmäßige CSS-Pseudoelement `::-webkit-details-marker` zu steuern. Um das Dreieck zu entfernen, verwenden Sie `summary::-webkit-details-marker { display: none }`.

## Beispiele

Unten finden Sie einige Beispiele, die die Verwendung von `<summary>` zeigen. Weitere Beispiele finden Sie in der Dokumentation zum {{HTMLElement("details")}}-Element.

### Grundlegendes Beispiel

Ein grundlegendes Beispiel, das die Verwendung von `<summary>` in einem {{HTMLElement("details")}}-Element zeigt:

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

Sie können Überschriftselemente in `<summary>` verwenden, wie zum Beispiel:

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
> Da das `<summary>`-Element standardmäßig die Rolle [button](/de/docs/Web/Accessibility/ARIA/Roles/button_role) hat (was alle Rollen von Kinderelementen entfernt), wird dieses Beispiel für Benutzer von unterstützenden Technologien wie Bildschirmlesegeräten nicht funktionieren. Das `<h4>` wird seine Rolle verlieren und somit nicht als Überschrift für diese Benutzer behandelt.

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

{{EmbedLiveSample("HTML_in_summaries", 650, 150)}}

### Ändern des Symbols der Zusammenfassung

Das Marker-Symbol des `<summary>`-Elements, das Dreieck, kann mit CSS angepasst werden. Der Marker kann mit dem {{cssxref("::marker")}}-Pseudoelement angesprochen werden, das die {{cssxref("list-style")}}-Kurzschreibweise und dessen Langhand-Komponenten-Eigenschaften akzeptiert, wie z. B. {{cssxref("list-style-type")}}. Dadurch kann das Dreieck in ein Bild (normalerweise mit {{cssxref("list-style-image")}}) oder eine Zeichenkette (einschließlich Emojis) geändert werden. In diesem Beispiel ersetzen wir den Inhalt eines Disclosure-Widgets und entfernen das Symbol von einem anderen, indem wir `list-style: none` setzen, bevor wir ein benutzerdefiniertes Disclosure-Symbol über generierten Inhalt hinzufügen.

#### CSS

Im ersten Disclosure-Widget gestalten wir den `::marker`, indem wir den {{cssxref("content")}} auf Basis des `[open]`-Attributs des `<details>`-Elements ändern. Für das zweite Widget entfernen wir den Marker mit `list-style`-Eigenschaften und fügen dann gestylte generierte Inhalte mit dem {{cssxref("::after")}}-Pseudoelement hinzu. Wir fügen auch Stile für `::-webkit-details-marker` hinzu, um Safari zu adressieren. Der Selektor für das browserspezifische Pseudoelement ist in einer {{cssxref(":is()")}}-Pseudo-Klasse enthalten, sodass er die Selektorliste nicht ungültig macht.

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

Das CSS enthält den `[open]` [Attributsselektor](/de/docs/Web/CSS/Attribute_selectors), der nur übereinstimmt, wenn das `open`-Attribut vorhanden ist (wenn die `<details>` geöffnet sind). Die {{cssxref(":first-of-type")}} und {{cssxref(":last-of-type")}} Pseudo-Klassen zielen auf das erste und Geschwisterelemente des gleichen Typs. Wir haben das mit `-webkit-` präfixierte Pseudoelement innerhalb einer {{cssxref(":is()")}}-Pseudoklasse aufgenommen, da es eine [verzeihende Selektorliste](/de/docs/Web/CSS/Selector_list#forgiving_selector_list) erfordert, sodass, falls das präfixierte Pseudoelement in einem Browser ungültig ist, der gesamte Selektorblock nicht ungültig ist. Wir haben auch CSS [Verschachtelung](/de/docs/Web/CSS/Nesting_selector) verwendet. Siehe das [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors) Modul.

#### HTML

```html-nolint
<details>
  <h1>Quotes from Helen Keller</h1>
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
        none
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        >, optional durchmischt mit
        <a href="/de/docs/Web/HTML/Content_categories#heading_content"
          >Überschrift-Inhalt</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Wege lassen</th>
      <td>Keine; sowohl das Start-Tag als auch das End-Tag sind obligatorisch.</td>
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

{{Spezifikationen}}

## Browser-Kompatibilität

{{Kompatibilität}}

## Siehe auch

- {{HTMLElement("details")}}
