---
title: "<output>: Das Output-Element"
slug: Web/HTML/Reference/Elements/output
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

Das **`<output>`**-[HTML](/de/docs/Web/HTML)-Element ist ein Container-Element, in das eine Webseite oder App das Ergebnis einer Berechnung oder das Resultat einer Benutzeraktion einfügen kann.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- [`for`](/de/docs/Web/HTML/Reference/Attributes/for)
  - : Eine durch Leerzeichen getrennte Liste von [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)s anderer Elemente, die anzeigen, dass diese Elemente Eingabewerte für die Berechnung bereitgestellt haben oder die Berechnung anderweitig beeinflussten.
- `form`

  - : Das {{HTMLElement("form")}}-Element, mit dem das Ergebnis verknüpft wird (sein "Formularbesitzer"). Der Wert dieses Attributs muss die [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) eines `<form>` im selben Dokument sein. (Wenn dieses Attribut nicht gesetzt ist, wird das `<output>` mit seinem übergeordneten `<form>`-Element verknüpft, falls vorhanden.)

    Dieses Attribut ermöglicht es Ihnen, `<output>`-Elemente mit `<form>`s überall im Dokument zu verknüpfen, nicht nur innerhalb eines `<form>`. Es kann auch ein übergeordnetes `<form>`-Element überschreiben. Der Name und der Inhalt des `<output>`-Elements werden nicht übermittelt, wenn das Formular gesendet wird.

- `name`
  - : Der Name des Elements. Wird in der [`form.elements`](/de/docs/Web/API/HTMLFormElement/elements)-API verwendet.

Der `<output>`-Wert, der Name und der Inhalt werden NICHT während der Formularübermittlung gesendet.

## Barrierefreiheit

Viele Browser implementieren dieses Element als [`aria-live`](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions)-Region. Unterstützende Technologien geben somit die Ergebnisse von Benutzeroberflächen-Interaktionen bekannt, die innerhalb des `<output>` gepostet werden, ohne dass der Fokus von den Steuerungen, die diese Ergebnisse erzeugen, wegverlegt werden muss.

## Beispiele

Im folgenden Beispiel stellt das Formular einen Schieberegler zur Verfügung, dessen Wert zwischen `0` und `100` liegen kann, und ein {{HTMLElement("input")}}-Element, in das Sie eine zweite Zahl eingeben können. Die beiden Zahlen werden addiert, und das Ergebnis wird im `<output>`-Element angezeigt, sobald sich der Wert einer der Steuerungen ändert.

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
  const aValue = parseInt(a.value);
  const bValue = parseInt(b.value);
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
          >Fließender Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierung</a
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
          >formularassoziiertes Element</a
        >, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierung</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das öffnende als auch das schließende Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierung</a
        > akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/status_role"><code>status</code></a></td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>Beliebige</td>
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
