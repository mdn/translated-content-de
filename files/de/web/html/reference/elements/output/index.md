---
title: "<output>: Das Output-Element"
slug: Web/HTML/Reference/Elements/output
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das **`<output>`** [HTML](/de/docs/Web/HTML)-Element ist ein Container-Element, in das eine Website oder App die Ergebnisse einer Berechnung oder das Ergebnis einer Benutzeraktion einfügen kann.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- [`for`](/de/docs/Web/HTML/Reference/Attributes/for)
  - : Eine durch Leerzeichen getrennte Liste von anderen Elementen-`id`s, die anzeigt, dass diese Elemente Eingabewerte zu der Berechnung beigetragen haben (oder diese anderweitig beeinflusst haben).
- `form`
  - : Das {{HTMLElement("form")}}-Element, mit dem das `<output>`-Element verknüpft werden soll (sein _Formular-Eigentümer_). Der Wert dieses Attributs muss die [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) eines `<form>`-Elements im selben Dokument sein. (Wenn dieses Attribut nicht gesetzt ist, wird das `<output>` mit seinem Vorfahren `<form>`-Element verknüpft, falls vorhanden.)

    Dieses Attribut ermöglicht es Ihnen, `<output>`-Elemente mit `<form>`-Elementen überall im Dokument zu verknüpfen, nicht nur innerhalb eines `<form>`. Es kann auch ein Vorfahren-`<form>`-Element überschreiben. Der Name und der Inhalt des `<output>`-Elements werden nicht übermittelt, wenn das Formular gesendet wird.

- `name`
  - : Der Name des Elements. Wird in der [`form.elements`](/de/docs/Web/API/HTMLFormElement/elements)-API verwendet.

Der `<output>`-Wert, der Name und der Inhalt werden NICHT während der Formularübermittlung übermittelt.

## Barrierefreiheit

Viele Browser implementieren dieses Element als [`aria-live`](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions)-Region. Unterstützende Technologie wird daher die Ergebnisse von UI-Interaktionen, die darin gepostet werden, ansagen, ohne dass der Fokus von den Steuerungen weggelenkt werden muss, die diese Ergebnisse erzeugen.

## Beispiele

Im folgenden Beispiel bietet das Formular einen Schieberegler, dessen Wert zwischen `0` und `100` liegen kann, und ein {{HTMLElement("input")}}-Element, in das Sie eine zweite Zahl eingeben können. Die beiden Zahlen werden addiert und das Ergebnis wird im `<output>`-Element angezeigt, jedes Mal wenn sich der Wert einer der Steuerungen ändert.

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
          >Fluss-Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasen-Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#listed"
          >gelistet</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#labelable"
          >beschriftbar</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#resettable"
          >zurücksetzbar</a
        >
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#form-associated_content"
          >mit Formular verknüpftes Element</a
        >, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasen-Inhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl der Anfangs- als auch der End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasen-Inhalt</a
        > akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
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
