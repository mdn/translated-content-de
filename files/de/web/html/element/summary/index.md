---
title: "<summary>: Das Disclosure Summary Element"
slug: Web/HTML/Element/summary
l10n:
  sourceCommit: f3fc83168e55e161650b73755db53ecadfe816b7
---

{{HTMLSidebar}}

Das **`<summary>`** [HTML](/de/docs/Web/HTML) Element gibt eine Zusammenfassung, eine Beschriftung oder eine Legende für das Disclosure-Box-Element {{HTMLElement("details")}} an. Ein Klick auf das `<summary>`-Element schaltet den Zustand des übergeordneten `<details>`-Elements zwischen offen und geschlossen um.

{{EmbedInteractiveExample("pages/tabbed/summary.html","tabbed-shorter")}}

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Verwendungsnotizen

Die Inhalte des `<summary>`-Elements können beliebige Überschriften, Klartext oder HTML sein, das innerhalb eines Absatzes verwendet werden kann.

Ein `<summary>`-Element darf _nur_ als erstes Kind eines `<details>`-Elements verwendet werden. Wenn der Benutzer auf die Zusammenfassung klickt, wird das übergeordnete `<details>`-Element geöffnet oder geschlossen, und ein [`toggle`](/de/docs/Web/API/HTMLDetailsElement/toggle_event) Ereignis wird an das `<details>`-Element gesendet, das verwendet werden kann, um Ihnen mitzuteilen, wann diese Zustandsänderung eintritt.

Der Inhalt des `<details>` liefert die [barrierefreie Beschreibung](/de/docs/Glossary/accessible_description) für das `<summary>`.

### Standardbeschriftungstext

Wenn das erste Kind eines `<details>`-Elements kein `<summary>`-Element ist, wird der [Benutzer-Agent](/de/docs/Glossary/user_agent) eine Standardzeichenfolge (normalerweise "Details") als Beschriftung für die Disclosure-Box verwenden.

### Standardstil

Laut der HTML-Spezifikation umfasst der Standardstil für `<summary>`-Elemente `display: list-item`. Dadurch ist es möglich, das standardmäßig angezeigte Symbol, das als Disclosure-Widget neben der Beschriftung angezeigt wird, zu ändern oder zu entfernen. Normalerweise ist dies ein Dreieck.

Sie können den Stil auch in `display: block` ändern, um das Disclosure-Dreieck zu entfernen.

Siehe den Abschnitt [Browser-Kompatibilität](#browser-kompatibilität) für Details, da nicht alle Browser die volle Funktionalität dieses Elements unterstützen.

Für Webkit-basierte Browser, wie Safari, ist es möglich, die Symbolanzeige über das nicht standardmäßige CSS-Pseudoelement `::-webkit-details-marker` zu steuern. Um das Disclosure-Dreieck zu entfernen, verwenden Sie `summary::-webkit-details-marker { display: none }`.

## Beispiele

Nachfolgend sind einige Beispiele für die Verwendung von `<summary>` aufgeführt. Weitere Beispiele finden Sie in der Dokumentation für das {{HTMLElement("details")}}-Element.

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

Sie können Überschriftselemente im `<summary>` verwenden, wie folgt:

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
> Da das `<summary>`-Element standardmäßig die Rolle eines [Buttons](/de/docs/Web/Accessibility/ARIA/Roles/button_role) hat (was alle Rollen von Kindelementen entfernt), wird dieses Beispiel für Benutzer von unterstützenden Technologien wie Bildschirmlesegeräten nicht funktionieren. Das `<h4>` verliert seine Rolle und wird daher für diese Benutzer nicht als Überschrift behandelt.

### HTML in Zusammenfassungen

Dieses Beispiel fügt dem `<summary>`-Element einige Semantiken hinzu, um die Bezeichnung als wichtig anzugeben:

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

## Technische Zusammenfassung

<table class="properties">
  <tbody>
     <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        keine
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Inhalte</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Phrasierungs-Inhalte</a>, optional vermischt mit
        <a href="/de/docs/Web/HTML/Content_categories#heading_content">Überschriften-Inhalte</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Auslassen des Tags</th>
      <td>Keine; sowohl das Start- als auch das End-Tag sind erforderlich.</td>
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
