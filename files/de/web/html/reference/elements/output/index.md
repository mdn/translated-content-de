---
title: "`<output>` HTML-Ausgabeelement"
short-title: <output>
slug: Web/HTML/Reference/Elements/output
l10n:
  sourceCommit: 46afd57950146568819d0bf98175a2ffdbe079d7
---

Das **`<output>`**-[HTML](/de/docs/Web/HTML)-Element ist ein Containerelement, in das eine Website oder App das Ergebnis einer Berechnung oder einer Benutzeraktion einfügen kann.

## Attribute

Dieses Element unterstützt die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- [`for`](/de/docs/Web/HTML/Reference/Attributes/for)
  - : Eine durch Leerzeichen getrennte Liste der [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Werte anderer Elemente. Sie gibt an, dass diese Elemente Eingabewerte für die Berechnung geliefert oder sie anderweitig beeinflusst haben.
- [`form`](/de/docs/Web/HTML/Reference/Attributes/form)
  - : Das {{HTMLElement("form")}}-Element, dem die Ausgabe zugeordnet ist (ihr _Formulareigentümer_). Der Wert dieses Attributs muss die [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) eines `<form>`-Elements im selben Dokument sein. (Ist dieses Attribut nicht gesetzt, wird `<output>` dem übergeordneten `<form>`-Element zugeordnet, sofern eines vorhanden ist.)

    Mit diesem Attribut können Sie `<output>`-Elemente einem `<form>` an beliebiger Stelle im Dokument zuordnen, nicht nur innerhalb eines `<form>`. Es kann auch die Zuordnung zu einem übergeordneten `<form>`-Element überschreiben. Name und Inhalt des `<output>`-Elements werden beim Absenden des Formulars nicht übermittelt.

- `name`
  - : Der Name des Elements. Er wird in der [`form.elements`](/de/docs/Web/API/HTMLFormElement/elements)-API verwendet.

Wert, Name und Inhalt von `<output>` werden beim Absenden des Formulars **nicht** übermittelt.

## Barrierefreiheit

Viele Browser implementieren dieses Element als [`aria-live`](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions)-Bereich. Dadurch können assistive Technologien die darin ausgegebenen Ergebnisse von Interaktionen mit der Benutzeroberfläche ansagen, ohne dass der Fokus von den Bedienelementen wegbewegt werden muss, die diese Ergebnisse erzeugen.

Aktualisierungen von Live-Bereichen werden im Allgemeinen als reiner Text angesagt. Links, Schaltflächen und andere semantische Informationen innerhalb von `<output>` werden bei der Ansage daher möglicherweise nicht vermittelt.

## Beispiele

Im folgenden Beispiel gibt es einen Schieberegler mit Werten zwischen `0` und `100` und ein {{HTMLElement("input")}}-Element, in das Sie eine zweite Zahl eingeben können. Die beiden Zahlen werden addiert, und das Ergebnis wird bei jeder Wertänderung eines der Bedienelemente im `<output>`-Element angezeigt.

```html
<input type="range" id="b" name="b" value="50" /> +
<input type="number" id="a" name="a" value="10" /> =
<output id="result" for="a b">60</output>
```

```js
const a = document.getElementById("a");
const b = document.getElementById("b");
const result = document.getElementById("result");

function updateResult() {
  const aValue = a.valueAsNumber;
  const bValue = b.valueAsNumber;
  result.value = aValue + bValue;
}

a.addEventListener("input", updateResult);
b.addEventListener("input", updateResult);

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
          >Flussinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Formulierungsinhalt</a
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
        >, wahrnehmbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Formulierungsinhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Weglassen von Tags</th>
      <td>Keines; sowohl das Start- als auch das End-Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Elternelemente</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Formulierungsinhalt</a
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
      <td>Alle</td>
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
