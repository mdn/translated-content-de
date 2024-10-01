---
title: "<summary>: Das Disclosure Summary-Element"
slug: Web/HTML/Element/summary
l10n:
  sourceCommit: f3fc83168e55e161650b73755db53ecadfe816b7
---

{{HTMLSidebar}}

Das **`<summary>`** [HTML](/de/docs/Web/HTML)-Element gibt eine Zusammenfassung, Bildunterschrift oder Legende für ein {{HTMLElement("details")}}-Element an. Durch Klicken auf das `<summary>`-Element wird der Status des übergeordneten `<details>`-Elements umgeschaltet und geöffnet oder geschlossen.

{{EmbedInteractiveExample("pages/tabbed/summary.html","tabbed-shorter")}}

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Verwendungshinweise

Der Inhalt des `<summary>`-Elements kann jede Überschrifteninhalt, Klartext oder HTML sein, der innerhalb eines Absatzes verwendet werden kann.

Ein `<summary>`-Element darf _nur_ als erstes Kind eines `<details>`-Elements verwendet werden. Wenn der Benutzer auf die Zusammenfassung klickt, wird das übergeordnete `<details>`-Element geöffnet oder geschlossen, und ein [`toggle`](/de/docs/Web/API/HTMLDetailsElement/toggle_event) Ereignis wird an das `<details>`-Element gesendet, das verwendet werden kann, um Sie darüber zu informieren, wann diese Statusänderung eintritt.

Der Inhalt der `<details>` bietet die {{Glossary("accessible_description", "zugängliche Beschreibung")}} für das `<summary>`.

### Standard-Label-Text

Wenn das erste Kind eines `<details>`-Elements kein `<summary>`-Element ist, wird der {{Glossary("user_agent", "User-Agent")}} eine Standardzeichenfolge (normalerweise "Details") als Bezeichnung für das Disclosure-Feld verwenden.

### Standardstil

Gemäß der HTML-Spezifikation umfasst der Standardstil für `<summary>`-Elemente `display: list-item`. Dadurch kann das Symbol, das als Disclosure-Widget neben der Bezeichnung angezeigt wird, geändert oder entfernt werden, was normalerweise ein Dreieck ist.

Sie können auch den Stil ändern, um das Disclosure-Dreieck zu entfernen, indem Sie `display: block` verwenden.

Siehe den Abschnitt [Browser-Kompatibilität](#browser-kompatibilität) für Details, da nicht alle Browser die volle Funktionalität dieses Elements unterstützen.

Für Webkit-basierte Browser wie Safari ist es möglich, die Symbolanzeige über das nicht standardmäßige CSS-Pseudoelement `::-webkit-details-marker` zu steuern. Um das Disclosure-Dreieck zu entfernen, verwenden Sie `summary::-webkit-details-marker { display: none }`.

## Beispiele

Im Folgenden finden Sie einige Beispiele für die Verwendung von `<summary>`. Weitere Beispiele finden Sie in der Dokumentation für das {{HTMLElement("details")}}-Element.

### Einfaches Beispiel

Ein einfaches Beispiel mit der Verwendung von `<summary>` in einem {{HTMLElement("details")}}-Element:

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

Sie können Überschriftselemente in `<summary>` verwenden, wie dieses Beispiel zeigt:

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
> Da das `<summary>`-Element standardmäßig die Rolle [button](/de/docs/Web/Accessibility/ARIA/Roles/button_role) hat (was alle Rollen von untergeordneten Elementen entfernt), funktioniert dieses Beispiel nicht für Benutzer von unterstützenden Technologien wie Bildschirmlesern. Das `<h4>` wird seine Rolle verlieren und daher nicht als Überschrift für diese Benutzer behandelt werden.

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
        none
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasing-Inhalt</a
        >, optional vermischt mit
        <a href="/de/docs/Web/HTML/Content_categories#heading_content"
          >Überschrift-Inhalt</a
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
