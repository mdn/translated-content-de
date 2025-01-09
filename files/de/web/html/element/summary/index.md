---
title: "<summary>: Das Disclosure Summary-Element"
slug: Web/HTML/Element/summary
l10n:
  sourceCommit: 626b8fa2dc9b4941760cecd2b6aee9d44237b041
---

{{HTMLSidebar}}

Das **`<summary>`** [HTML](/de/docs/Web/HTML)-Element gibt eine Zusammenfassung, eine Bildunterschrift oder eine Legende für eine {{HTMLElement("details")}}-Element Offenlegungsbox an. Durch Klicken auf das `<summary>`-Element wird der Zustand des übergeordneten `<details>`-Elements zwischen geöffnet und geschlossen umgeschaltet.

{{EmbedInteractiveExample("pages/tabbed/summary.html","tabbed-shorter")}}

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Nutzungshinweise

Der Inhalt des `<summary>`-Elements kann jeder Überschrift-Inhalt, reiner Text oder HTML sein, das innerhalb eines Absatzes verwendet werden kann.

Ein `<summary>`-Element darf _nur_ als erstes Kind eines `<details>`-Elements verwendet werden. Wenn der Benutzer auf die Zusammenfassung klickt, wird das übergeordnete `<details>`-Element geöffnet oder geschlossen, und es wird ein [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event)-Ereignis an das `<details>`-Element gesendet, das verwendet werden kann, um zu erfahren, wann diese Zustandsänderung eintritt.

Der Inhalt des `<details>` bietet die {{Glossary("accessible_description", "zugängliche Beschreibung")}} für das `<summary>`.

### Standard-Label-Text

Wenn das erste Kind eines `<details>`-Elements kein `<summary>`-Element ist, wird der {{Glossary("user_agent", "User Agent")}} eine Standardzeichenfolge (typischerweise "Details") als Label für die Offenlegungsbox verwenden.

### Standardstil

Gemäß der HTML-Spezifikation enthält der Standardstil für `<summary>`-Elemente `display: list-item`. Dies ermöglicht es, das Symbol, das als Offenlegungs-Widget neben dem Label angezeigt wird, zu ändern oder zu entfernen, welches normalerweise ein Dreieck ist.

Sie können den Stil auch zu `display: block` ändern, um das Offenlegungsdreieck zu entfernen.

Siehe den Abschnitt [Browser-Kompatibilität](#browser-kompatibilität) für Details, da nicht alle Browser die volle Funktionalität dieses Elements unterstützen.

Für WebKit-basierte Browser wie Safari ist es möglich, die Symboldarstellung durch das nicht standardisierte CSS-Pseudoelement `::-webkit-details-marker` zu steuern. Um das Offenlegungsdreieck zu entfernen, verwenden Sie `summary::-webkit-details-marker { display: none }`.

## Beispiele

Im Folgenden finden Sie einige Beispiele, die die Verwendung von `<summary>` zeigen. Weitere Beispiele finden Sie in der Dokumentation für das {{HTMLElement("details")}}-Element.

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

Sie können Überschrift-Elemente innerhalb von `<summary>` verwenden, wie hier:

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

Derzeit gibt es einige Abstandsprobleme, die mithilfe von CSS behoben werden könnten.

> [!WARNING]
> Da das `<summary>`-Element standardmäßig die Rolle [button](/de/docs/Web/Accessibility/ARIA/Roles/button_role) hat (was alle Rollen von Kindelementen entfernt), wird dieses Beispiel für Benutzer von unterstützenden Technologien wie Bildschirmlesern nicht funktionieren. Das `<h4>` wird seine Rolle verlieren und daher nicht als Überschrift für diese Benutzer behandelt werden.

### HTML in Zusammenfassungen

Dieses Beispiel fügt dem `<summary>`-Element einige Semantik hinzu, um die Beschriftung als wichtig zu kennzeichnen:

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

Das Marker-Symbol des `<summary>`-Elements, das Offenlegungsdreieck, kann mit CSS angepasst werden. Das Symbol kann mit dem Pseudoelement {{cssxref("::marker")}} gezielt angesprochen werden, das die {{cssxref("list-style")}}-Kurzform und ihre Langform-Komponenten wie {{cssxref("list-style-type")}} akzeptiert. Dies ermöglicht es, das Dreieck in ein Bild (normalerweise mit {{cssxref("list-style-image")}}) oder eine Zeichenkette (einschließlich Emojis) zu ändern. In diesem Beispiel ersetzen wir das Icon eines Offenlegungs-Widgets und entfernen das Icon von einem anderen, indem wir `list-style: none` setzen, bevor wir ein benutzerdefiniertes Offenlegungsicon über generierten Inhalt hinzufügen.

#### CSS

Im ersten Offenlegungs-Widget formatieren wir den `::marker`, indem wir den {{cssxref("content")}} basierend auf dem `[open]`-Attribut des `<details>`-Elements ändern. Für das zweite Widget entfernen wir den Marker mit `list-style`-Eigenschaften und fügen dann stilisierten generierten Inhalt mit dem Pseudoelement {{cssxref("::after")}} hinzu. Wir fügen auch Stile für `::-webkit-details-marker` hinzu, um Safari anzusprechen. Der Selektor für das browserspezifische Pseudoelement ist in einer {{cssxref(":is()")}}-Pseudoklasse enthalten, damit der Selektorblock nicht ungültig wird, falls das vorgefixte Pseudoelement in einem Browser ungültig ist. Wir haben auch CSS [Nesting](/de/docs/Web/CSS/Nesting_selector) verwendet. Siehe das [CSS Selektor](/de/docs/Web/CSS/CSS_selectors)-Modul.

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
      <th scope="row">Zugelassener Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phraseninhalt</a
        >, optional durchmischt mit
        <a href="/de/docs/Web/HTML/Content_categories#heading_content"
          >Überschriftinhalt</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine; sowohl das Anfangs- als auch das End-Tag sind obligatorisch.</td>
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
