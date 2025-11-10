---
title: "<output>: Das Output-Element"
slug: Web/HTML/Reference/Elements/output
l10n:
  sourceCommit: f29e825161ee6776a395cd846f8570686f784341
---

Das **`<output>`** [HTML](/de/docs/Web/HTML)-Element ist ein Containerelement, in das eine Website oder App die Ergebnisse einer Berechnung oder das Ergebnis einer Benutzeraktion einfügen kann.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- [`for`](/de/docs/Web/HTML/Reference/Attributes/for)
  - : Eine durch Leerzeichen getrennte Liste von anderen Elementen-IDs [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)s, die anzeigen, dass diese Elemente Eingabewerte zur Berechnung beigetragen haben (oder diese auf andere Weise beeinflussten).
- [`form`](/de/docs/Web/HTML/Reference/Attributes/form)
  - : Das {{HTMLElement("form")}}-Element, dem das Output-Element zugeordnet werden soll (sein _Formularbesitzer_). Der Wert dieses Attributs muss die [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) eines `<form>` im selben Dokument sein. (Wenn dieses Attribut nicht gesetzt ist, ist das `<output>` seinem übergeordneten `<form>`-Element zugeordnet, falls vorhanden.)

    Dieses Attribut ermöglicht die Zuordnung von `<output>`-Elementen zu `<form>` an beliebiger Stelle im Dokument, nicht nur innerhalb eines `<form>`. Es kann auch ein übergeordnetes `<form>`-Element überschreiben. Der Name und Inhalt des `<output>`-Elements werden beim Absenden des Formulars nicht übermittelt.

- `name`
  - : Der Name des Elements. Wird in der [`form.elements`](/de/docs/Web/API/HTMLFormElement/elements)-API verwendet.

Der `<output>`-Wert, der Name und der Inhalt werden NICHT bei der Formularübermittlung gesendet.

## Barrierefreiheit

Viele Browser implementieren dieses Element als [`aria-live`](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions)-Region. Assistive Technologien kündigen dadurch die Ergebnisse von UI-Interaktionen, die darin veröffentlicht werden, an, ohne dass der Fokus von den Steuerungen, die diese Ergebnisse erzeugen, wegbewegt werden muss.

## Beispiele

Im folgenden Beispiel bietet das Formular einen Schieberegler, dessen Wert zwischen `0` und `100` liegen kann, und ein {{HTMLElement("input")}}-Element, in das Sie eine zweite Zahl eingeben können. Die beiden Zahlen werden addiert und das Ergebnis wird jedes Mal im `<output>`-Element angezeigt, wenn sich der Wert einer der Steuerungen ändert.

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
          >Phrasinhalte</a
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
          >formularassoziiertes Element</a
        >, fühlbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasinhalte</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl Start- als auch End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasinhalte</a
        > akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/status_role"><code>status</code></a></td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>Beliebig</td>
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
