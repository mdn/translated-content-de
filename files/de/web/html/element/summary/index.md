---
title: "<summary>: Das Disclosure Summary Element"
slug: Web/HTML/Element/summary
l10n:
  sourceCommit: f3fc83168e55e161650b73755db53ecadfe816b7
---

{{HTMLSidebar}}

Das **`<summary>`** [HTML](/de/docs/Web/HTML)-Element spezifiziert eine Zusammenfassung, Beschriftung oder Legende für das Offenlegungsfenster eines {{HTMLElement("details")}}-Elements. Ein Klick auf das `<summary>`-Element schaltet den Zustand des übergeordneten `<details>`-Elements zwischen offen und geschlossen um.

{{EmbedInteractiveExample("pages/tabbed/summary.html","tabbed-shorter")}}

## Attribute

Dieses Element umfasst nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Hinweise zur Verwendung

Der Inhalt des `<summary>`-Elements kann jede Überschrift, Klartext oder HTML sein, das innerhalb eines Absatzes verwendet werden kann.

Ein `<summary>`-Element darf _nur_ als das erste Kind eines `<details>`-Elements verwendet werden. Wenn der Benutzer auf die Zusammenfassung klickt, wird das übergeordnete `<details>`-Element geöffnet oder geschlossen und ein {{domxref("HTMLDetailsElement/toggle_event", "toggle")}}-Ereignis wird an das `<details>`-Element gesendet, das verwendet werden kann, um Sie darüber zu informieren, wann dieser Zustandswechsel erfolgt.

Der Inhalt des `<details>` bietet die {{glossary("zugängliche Beschreibung")}} für das `<summary>`.

### Standard-Bezeichnungstext

Falls das erste Kind eines `<details>`-Elements kein `<summary>`-Element ist, wird der {{Glossary("user agent")}} eine Standardzeichenfolge (typischerweise "Details") als Bezeichnung für das Offenlegungsfenster verwenden.

### Standardstil

Laut HTML-Spezifikation enthält der Standardstil für `<summary>`-Elemente `display: list-item`. Dies ermöglicht es, das standardmäßig angezeigte Symbol, das als Offenlegungswidget neben der Bezeichnung ist, zu ändern oder zu entfernen, welches typischerweise ein Dreieck ist.

Sie können den Stil auch auf `display: block` ändern, um das Offenlegungsdreieck zu entfernen.

Siehe den Abschnitt [Browser-Kompatibilität](#browser-kompatibilität) für Details, da nicht alle Browser die volle Funktionalität dieses Elements vollständig unterstützen.

Für Webkit-basierte Browser, wie Safari, ist es möglich, die Anzeige des Symbols durch das nicht standardmäßige CSS-Pseudo-Element `::-webkit-details-marker` zu steuern. Um das Offenlegungsdreieck zu entfernen, verwenden Sie `summary::-webkit-details-marker { display: none }`.

## Beispiele

Im Folgenden finden Sie einige Beispiele, die die Verwendung von `<summary>` zeigen. Weitere Beispiele finden Sie in der Dokumentation des {{HTMLElement("details")}}-Elements.

### Einfaches Beispiel

Ein einfaches Beispiel, das die Verwendung von `<summary>` in einem {{HTMLElement("details")}}-Element zeigt:

```html
<details open>
  <summary>Übersicht</summary>
  <ol>
    <li>Bargeld: $500,00</li>
    <li>Aktuelle Rechnung: $75,30</li>
    <li>Fälligkeitsdatum: 5/6/19</li>
  </ol>
</details>
```

#### Ergebnis

{{EmbedLiveSample("Basic_example", 650, 120)}}

### Zusammenfassungen als Überschriften

Sie können Überschriftenelemente in `<summary>` verwenden, wie hier gezeigt:

```html
<details open>
  <summary><h4>Übersicht</h4></summary>
  <ol>
    <li>Bargeld: $500,00</li>
    <li>Aktuelle Rechnung: $75,30</li>
    <li>Fälligkeitsdatum: 5/6/19</li>
  </ol>
</details>
```

#### Ergebnis

{{EmbedLiveSample("Summaries_as_headings", 650, 120)}}

Derzeit gibt es einige Abstandsprobleme, die durch CSS adressiert werden können.

> [!WARNING]
> Da das `<summary>`-Element eine Standardrolle als [button](/de/docs/Web/Accessibility/ARIA/Roles/button_role) hat (was alle Rollen von Kindelementen entfernt), wird dieses Beispiel nicht für Benutzer von unterstützenden Technologien wie Screenreadern funktionieren. Das `<h4>` wird seine Rolle verlieren und somit nicht als Überschrift für diese Benutzer behandelt.

### HTML in Zusammenfassungen

Dieses Beispiel fügt dem `<summary>`-Element einige Semantiken hinzu, um die Bezeichnung als wichtig zu kennzeichnen:

```html
<details open>
  <summary><strong>Übersicht</strong></summary>
  <ol>
    <li>Bargeld: $500,00</li>
    <li>Aktuelle Rechnung: $75,30</li>
    <li>Fälligkeitsdatum: 5/6/19</li>
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
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        >, optional gemischt mit
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
      <th scope="row">Zulässige Eltern</th>
      <td>Das {{HTMLElement("details")}}-Element.</td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td> <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">Keine entsprechende Rolle</a></td>
    </tr>
    <tr>
      <th scope="row">Zulässige ARIA-Rollen</th>
      <td>Keine <code>role</code> zulässig</td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("details")}}
