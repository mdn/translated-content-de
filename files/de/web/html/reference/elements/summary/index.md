---
title: HTML-Element `<summary>` für die Zusammenfassung eines aufklappbaren Bereichs
short-title: <summary>
slug: Web/HTML/Reference/Elements/summary
l10n:
  sourceCommit: 7484d45816002fbf082a59c5d95c38a1eb2b2e4b
---

Das [HTML](/de/docs/Web/HTML)-Element **`<summary>`** legt eine Zusammenfassung, Beschriftung oder Legende für den aufklappbaren Bereich eines {{HTMLElement("details")}}-Elements fest. Ein Klick auf das `<summary>`-Element öffnet oder schließt das übergeordnete `<details>`-Element.

{{InteractiveExample("HTML Demo: &lt;summary&gt;", "tabbed-shorter")}}

```html interactive-example
<details>
  <summary>
    I have keys but no doors. I have space but no room. You can enter but can't
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

Dieses Element unterstützt nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Verwendungshinweise

Der Inhalt eines `<summary>`-Elements kann aus Überschriften, einfachem Text oder HTML bestehen, das innerhalb eines Absatzes verwendet werden kann.

Ein `<summary>`-Element darf _nur_ als erstes Kindelement eines `<details>`-Elements verwendet werden. Wenn Benutzer auf die Zusammenfassung klicken, wird das übergeordnete `<details>`-Element geöffnet oder geschlossen. Anschließend wird ein [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event)-Ereignis an das `<details>`-Element gesendet. Damit lässt sich erkennen, wann diese Zustandsänderung eintritt.

Der Inhalt des `<details>`-Elements stellt die {{Glossary("accessible_description", "zugängliche Beschreibung")}} für das `<summary>`-Element bereit.

### Standardbeschriftung

Wenn das erste Kindelement eines `<details>`-Elements kein `<summary>`-Element ist, verwendet der {{Glossary("user_agent", "User Agent")}} eine Standardzeichenfolge (in der Regel „Details“) als Beschriftung für den aufklappbaren Bereich.

### Standardstil

Gemäß der HTML-Spezifikation umfasst der Standardstil für `<summary>`-Elemente `display: list-item`. Dadurch lässt sich das Symbol, das neben der Beschriftung als Aufklappindikator angezeigt wird – üblicherweise ein Dreieck –, ändern oder entfernen.

Sie können den Stil auch in `display: block` ändern, um das Dreieck zu entfernen.

Weitere Einzelheiten finden Sie im Abschnitt [Browser-Kompatibilität](#browser-kompatibilität), da noch nicht alle Browser die volle Funktionalität dieses Elements unterstützen.

In WebKit-basierten Browsern wie Safari lässt sich die Anzeige des Symbols über das nicht standardisierte CSS-Pseudoelement `::-webkit-details-marker` steuern. Verwenden Sie `summary::-webkit-details-marker { display: none }`, um das Dreieck zu entfernen.

## Beispiele

Die folgenden Beispiele zeigen die Verwendung von `<summary>`. Weitere Beispiele finden Sie in der Dokumentation zum {{HTMLElement("details")}}-Element.

### Einfaches Beispiel

Ein einfaches Beispiel für die Verwendung von `<summary>` in einem {{HTMLElement("details")}}-Element:

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

Sie können Überschriftenelemente in `<summary>` verwenden, zum Beispiel so:

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

Derzeit treten dabei einige Abstandsprobleme auf, die sich mit CSS beheben lassen.

> [!WARNING]
> Die dem `<summary>`-Element zugewiesene Rolle variiert je nach Browser. Manche Browser weisen ihm weiterhin standardmäßig die Rolle [`button`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role) zu, wodurch alle Rollen seiner Kindelemente entfernt werden. Diese Uneinheitlichkeit kann für Benutzer assistiver Technologien wie Screenreader zu Problemen führen: Im vorherigen Beispiel wird `<h4>` seine Rolle entzogen, sodass es für diese Benutzer nicht als Überschrift behandelt wird. Testen Sie Ihre `<summary>`-Implementierung auf mehreren Plattformen, um eine einheitliche Unterstützung der Barrierefreiheit sicherzustellen.

### HTML in Zusammenfassungen

In diesem Beispiel wird dem `<summary>`-Element zusätzliche Semantik hinzugefügt, um die Beschriftung als wichtig zu kennzeichnen:

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

### Symbol der Zusammenfassung ändern

Der Marker des `<summary>`-Elements, das Dreieck zum Aufklappen, lässt sich mit CSS anpassen. Der Marker kann über das Pseudoelement {{cssxref("::marker")}} angesprochen werden. Dieses unterstützt die Kurzschreibweise {{cssxref("list-style")}} und deren einzelne Eigenschaften, beispielsweise {{cssxref("list-style-type")}}. So lässt sich das Dreieck durch ein Bild (in der Regel mit {{cssxref("list-style-image")}}) oder eine Zeichenfolge (auch mit Emojis) ersetzen. In diesem Beispiel ersetzen wir den Inhalt eines Aufklappindikators und entfernen das Symbol eines anderen, indem wir `list-style: none` setzen und anschließend über generierten Inhalt ein eigenes Aufklappsymbol hinzufügen.

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

#### CSS

Beim ersten Aufklappindikator gestalten wir `::marker` und ändern {{cssxref("content")}} abhängig vom Attribut `[open]` des `<details>`-Elements. Beim zweiten entfernen wir den Marker mithilfe von `list-style`-Eigenschaften und fügen anschließend mit dem Pseudoelement {{cssxref("::after")}} gestalteten generierten Inhalt hinzu. Außerdem verwenden wir Stile für `::-webkit-details-marker`, um Safari zu berücksichtigen. Der Selektor für dieses browserspezifische Pseudoelement steht innerhalb der Pseudoklasse {{cssxref(":is()")}}, damit er die Selektorliste nicht ungültig macht.

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

Das CSS enthält den [Attributselektor](/de/docs/Web/CSS/Reference/Selectors/Attribute_selectors) `[open]`, der nur dann zutrifft, wenn das Attribut `open` vorhanden ist (also wenn das `<details>`-Element geöffnet ist). Die Pseudoklassen {{cssxref(":first-of-type")}} und {{cssxref(":last-of-type")}} sprechen das erste beziehungsweise das letzte Geschwisterelement desselben Typs an. Wir haben das mit `-webkit-` präfixierte Pseudoelement in eine {{cssxref(":is()")}}-Pseudoklasse eingeschlossen, da diese eine [fehlertolerante Selektorliste](/de/docs/Web/CSS/Reference/Selectors/Selector_list#forgiving_selector_list) akzeptiert. Ist das präfixierte Pseudoelement in einem Browser ungültig, wird dadurch nicht der gesamte Selektorblock ungültig. Außerdem verwenden wir CSS-[Verschachtelung](/de/docs/Web/CSS/Reference/Selectors/Nesting_selector). Weitere Informationen finden Sie im Modul [CSS-Selektoren](/de/docs/Web/CSS/Guides/Selectors).

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
        Keine
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasing Content</a
        >, optional gemischt mit
        <a href="/de/docs/Web/HTML/Guides/Content_categories#heading_content"
          >Heading Content</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Weglassen von Tags</th>
      <td>Nicht zulässig; sowohl das Start- als auch das End-Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Elternelemente</th>
      <td>Das {{HTMLElement("details")}}-Element.</td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td> <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role">Keine entsprechende Rolle</a></td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>Kein <code>role</code> zulässig</td>
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
