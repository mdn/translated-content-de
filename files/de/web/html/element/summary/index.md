---
title: "<summary>: Das Offenlegungselement Zusammenfassung"
slug: Web/HTML/Element/summary
l10n:
  sourceCommit: a62600788f390d326859cfbf6171013a3f351690
---

{{HTMLSidebar}}

Das **`<summary>`** [HTML](/de/docs/Web/HTML)-Element gibt eine Zusammenfassung, Beschriftung oder Legende für das Offenlegungselement eines {{HTMLElement("details")}}-Elements an. Durch Klicken auf das `<summary>`-Element wird der Status des übergeordneten `<details>`-Elements umgeschaltet, sodass es geöffnet oder geschlossen wird.

{{EmbedInteractiveExample("pages/tabbed/summary.html","tabbed-shorter")}}

## Attribute

Dieses Element umfasst nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Verwendungshinweise

Der Inhalt des `<summary>`-Elements kann jeglichen Überschrifteninhalt, einfachen Text oder HTML enthalten, das innerhalb eines Absatzes verwendet werden kann.

Ein `<summary>`-Element darf _nur_ als erstes Kind eines `<details>`-Elements verwendet werden. Wenn der Benutzer auf die Zusammenfassung klickt, wird das übergeordnete `<details>`-Element geöffnet oder geschlossen, und ein [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event)-Ereignis wird an das `<details>`-Element gesendet, das verwendet werden kann, um zu wissen, wann diese Statusänderung eintritt.

Der Inhalt der `<details>` bietet die {{Glossary("accessible_description", "zugängliche Beschreibung")}} für die `<summary>`.

### Standard-Textbezeichnung

Wenn das erste Kind eines `<details>`-Elements kein `<summary>`-Element ist, wird der {{Glossary("user_agent", "User-Agent")}} einen Standardstring (typischerweise "Details") als Bezeichnung für das Offenlegungselement verwenden.

### Standardstil

Laut der HTML-Spezifikation umfasst der Standardstil für `<summary>`-Elemente `display: list-item`. Dadurch wird es möglich, das neben der Bezeichnung angezeigte Symbol des Offenlegungs-Widgets zu ändern oder zu entfernen, das standardmäßig ein Dreieck ist.

Sie können den Stil auch auf `display: block` ändern, um das Offenlegungsdreieck zu entfernen.

Details dazu finden Sie im Abschnitt [Browser-Kompatibilität](#browser-kompatibilität), da nicht alle Browser die volle Funktionalität dieses Elements unterstützen.

Für Webkit-basierte Browser, wie Safari, ist es möglich, die Anzeige des Symbols über das nicht standardisierte CSS-Pseudo-Element `::-webkit-details-marker` zu steuern. Um das Offenlegungsdreieck zu entfernen, verwenden Sie `summary::-webkit-details-marker { display: none }`.

## Beispiele

Unten finden Sie einige Beispiele, die die Verwendung von `<summary>` zeigen. Weitere Beispiele finden Sie in der Dokumentation für das {{HTMLElement("details")}}-Element.

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

Sie können die Überschriftenelemente in `<summary>` verwenden, wie folgt:

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

Dies hat derzeit einige Abstandsprobleme, die mithilfe von CSS behoben werden könnten.

> [!WARNING]
> Da das `<summary>`-Element standardmäßig die Rolle [button](/de/docs/Web/Accessibility/ARIA/Roles/button_role) hat (die alle Rollen von Kindelementen entfernt), funktioniert dieses Beispiel nicht für Benutzer unterstützender Technologien wie Screenreader. Das `<h4>` wird seine Rolle verlieren und daher nicht als Überschrift für diese Benutzer behandelt.

### HTML in Zusammenfassungen

Dieses Beispiel fügt dem `<summary>`-Element einige Semantiken hinzu, um die Bezeichnung als wichtig anzuzeigen:

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
          >Phraseninhalt</a
        >, optional vermischt mit
        <a href="/de/docs/Web/HTML/Content_categories#heading_content"
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
