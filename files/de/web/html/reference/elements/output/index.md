---
title: HTML-Ausgabeelement `<output>`
short-title: <output>
slug: Web/HTML/Reference/Elements/output
l10n:
  sourceCommit: 04cf692e8b950c028aca8fab9664d52e7cbfaebf
---

Das [HTML](/de/docs/Web/HTML)-Element **`<output>`** ist ein Containerelement, in das eine Website oder App die Ergebnisse einer Berechnung oder das Resultat einer Benutzeraktion einfügen kann.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- [`for`](/de/docs/Web/HTML/Reference/Attributes/for)
  - : Eine durch Leerzeichen getrennte Liste der [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)s anderer Elemente, die angibt, dass diese Elemente Eingabewerte zur Berechnung beigetragen oder sie anderweitig beeinflusst haben.
- [`form`](/de/docs/Web/HTML/Reference/Attributes/form)
  - : Das {{HTMLElement("form")}}-Element, dem die Ausgabe zugeordnet werden soll (sein _form owner_). Der Wert dieses Attributs muss die [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) eines `<form>` im selben Dokument sein. (Wenn dieses Attribut nicht gesetzt ist, wird `<output>` seinem übergeordneten `<form>`-Element zugeordnet, falls vorhanden.)

    Mit diesem Attribut können Sie `<output>`-Elemente `<form>`s an jeder Stelle im Dokument zuordnen, nicht nur innerhalb eines `<form>`. Es kann auch ein übergeordnetes `<form>`-Element überschreiben. Der Name und der Inhalt des `<output>`-Elements werden beim Absenden des Formulars nicht übermittelt.

- `name`
  - : Der Name des Elements. Wird in der API [`form.elements`](/de/docs/Web/API/HTMLFormElement/elements) verwendet.

Der Wert, der Name und der Inhalt von `<output>` werden beim Absenden eines Formulars **NICHT** übermittelt.

## Barrierefreiheit

Viele Browser implementieren dieses Element als [`aria-live`](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions)-Region. Assistive Technologien geben dadurch die darin veröffentlichten Ergebnisse von UI-Interaktionen bekannt, ohne dass der Fokus von den Steuerelementen weg verschoben werden muss, die diese Ergebnisse erzeugen.

Aktualisierungen von Live-Regionen werden in der Regel als Klartext angekündigt, sodass Links, Schaltflächen und andere innerhalb von `<output>` verschachtelte Semantik möglicherweise nicht in der Ankündigung vermittelt werden.

## Beispiele

Im folgenden Beispiel bietet das Formular einen Schieberegler, dessen Wert zwischen `0` und `100` liegen kann, sowie ein {{HTMLElement("input")}}-Element, in das Sie eine zweite Zahl eingeben können. Die beiden Zahlen werden addiert, und das Ergebnis wird bei jeder Änderung des Werts eines der Steuerelemente im `<output>`-Element angezeigt.

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
          >Flow-Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasing-Inhalt</a
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
          >formularzugeordnetes Element</a
        >, wahrnehmbarer Inhalt.
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
      <th scope="row">Weglassen von Tags</th>
      <td>Keines, sowohl das Start- als auch das End-Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Elternelemente</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasing-Inhalt</a
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
