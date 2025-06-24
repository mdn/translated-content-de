---
title: "<output>: Das Output-Element"
slug: Web/HTML/Reference/Elements/output
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{HTMLSidebar}}

Das **`<output>`**-Element [HTML](/de/docs/Web/HTML) ist ein Container-Element, in das eine Webseite oder App die Ergebnisse einer Berechnung oder das Ergebnis einer Benutzeraktion einfügen kann.

## Attribute

Dieses Element beinhaltet die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- [`for`](/de/docs/Web/HTML/Reference/Attributes/for)
  - : Eine durch Leerzeichen getrennte Liste von `id`s anderer Elemente, die anzeigt, dass diese Elemente Eingabewerte für die Berechnung bereitgestellt haben (oder diese anderweitig beeinflusst haben).
- `form`

  - : Das {{HTMLElement("form")}}-Element, dem das Ergebnis zugeordnet werden soll (sein _form owner_). Der Wert dieses Attributs muss die [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) eines `<form>` im selben Dokument sein. (Wenn dieses Attribut nicht gesetzt ist, wird das `<output>` mit seinem Vorfahren `<form>`-Element assoziiert, falls vorhanden.)

    Dieses Attribut ermöglicht es Ihnen, `<output>`-Elemente mit `<form>`-Elementen irgendwo im Dokument zu verknüpfen, nicht nur innerhalb eines `<form>`. Es kann auch ein Vorfahren-`<form>`-Element überschreiben. Der Name und Inhalt des `<output>`-Elements werden beim Absenden des Formulars nicht übermittelt.

- `name`
  - : Der Name des Elements. Wird in der [`form.elements`](/de/docs/Web/API/HTMLFormElement/elements)-API verwendet.

Der `<output>`-Wert, -Name und -Inhalt werden während der Formularübermittlung NICHT übermittelt.

## Barrierefreiheit

Viele Browser implementieren dieses Element als [`aria-live`](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions)-Region. Assistive Technologien kündigen somit die Ergebnisse von Benutzerinteraktionen an, die darin gepostet werden, ohne dass der Fokus von den Steuerelementen wegbewegt werden muss, die diese Ergebnisse erzeugen.

## Beispiele

Im folgenden Beispiel bietet das Formular einen Schieberegler, dessen Wert zwischen `0` und `100` liegen kann, und ein {{HTMLElement("input")}}-Element, in das Sie eine zweite Zahl eingeben können. Die beiden Zahlen werden addiert, und das Ergebnis wird im `<output>`-Element angezeigt, jedes Mal, wenn sich der Wert eines der Steuerelemente ändert.

```html
<form id="example-form">
  <input type="range" id="b" name="b" value="50" /> +
  <input type="number" id="a" name="a" value="10" /> =
  <output name="result" for="a b">60</output>
</form>
```

```js
const form = document.getElementById("example-form");
const a = form.elements["a"];
const b = form.elements["b"];
const result = form.elements["result"];

function updateResult() {
  const aValue = a.valueAsNumber;
  const bValue = b.valueAsNumber;
  result.value = aValue + bValue;
}

form.addEventListener("input", updateResult);

updateResult();
```

### Ergebnis

{{ EmbedLiveSample('Examples')}}

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
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Fließinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasing-Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#listed"
          >aufgelistet</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#labelable"
          >beschriftbar</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#resettable"
          >zurücksetzbar</a
        >
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#form-associated_content"
          >formularzugeordnetes Element</a
        >, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasing-Inhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das öffnende als auch das schließende Tag sind verpflichtend.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasing-Inhalt</a
        >
        akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/status_role"><code>status</code></a></td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>beliebig</td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>[`HTMLOutputElement`](/de/docs/Web/API/HTMLOutputElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
