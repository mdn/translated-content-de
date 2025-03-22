---
title: "<output>: Das Output-Element"
slug: Web/HTML/Element/output
l10n:
  sourceCommit: 1b88b4d62918f6f13d1155825e3881f52d90206e
---

{{HTMLSidebar}}

Das **`<output>`** [HTML](/de/docs/Web/HTML)-Element ist ein Containerelement, in welches eine Website oder App die Ergebnisse einer Berechnung oder das Ergebnis einer Nutzeraktion einfügen kann.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- [`for`](/de/docs/Web/HTML/Attributes/for)
  - : Eine durch Leerzeichen getrennte Liste von [`id`](/de/docs/Web/HTML/Global_attributes/id)s anderer Elemente, die angibt, dass diese Elemente Eingangswerte zu (oder anderweitig auf) die Berechnung beigetragen haben.
- `form`

  - : Das {{HTMLElement("form")}} Element, mit dem das Output assoziiert werden soll (sein _Formularbesitzer_). Der Wert dieses Attributs muss die [`id`](/de/docs/Web/HTML/Global_attributes/id) eines `<form>` im selben Dokument sein. (Falls dieses Attribut nicht gesetzt ist, wird das `<output>` mit seinem übergeordneten `<form>` Element assoziiert, sofern vorhanden.)

    Dieses Attribut ermöglicht es Ihnen, `<output>` Elemente mit `<form>`s überall im Dokument zu assoziieren, nicht nur innerhalb eines `<form>`. Es kann auch ein übergeordnetes `<form>` Element überschreiben. Der Name und der Inhalt des `<output>` Elements werden beim Absenden des Formulars nicht übertragen.

- `name`
  - : Der Name des Elements. Wird in der [`form.elements`](/de/docs/Web/API/HTMLFormElement/elements) API verwendet.

Der Wert, der Name und die Inhalte des `<output>` werden NICHT beim Formularversand übermittelt.

## Barrierefreiheit

Viele Browser implementieren dieses Element als [`aria-live`](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions) Region. Assistive Technologien können dadurch die Ergebnisse von Benutzeroberflächeninteraktionen ankündigen, die darin gepostet werden, ohne dass der Fokus von den Bedienelementen wegbewegt wird, die diese Ergebnisse erzeugen.

## Beispiele

Im folgenden Beispiel enthält das Formular einen Schieberegler, dessen Wert im Bereich von `0` bis `100` liegen kann, sowie ein {{HTMLElement("input")}} Element, in welches Sie eine zweite Zahl eingeben können. Die beiden Zahlen werden addiert und das Ergebnis wird in dem `<output>` Element angezeigt, wenn sich der Wert eines der Steuerelemente ändert.

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
        <a href="/de/docs/Web/HTML/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Flussinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasinhalte</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#listed"
          >gelistet</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#labelable"
          >beschriftbar</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#resettable"
          >zurücksetzbar</a
        >
        <a
          href="/de/docs/Web/HTML/Content_categories#form-associated_content"
          >formularassoziiertes Element</a
        >, anfassbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasinhalte</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl der Start- als auch der End-Tag sind zwingend.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
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
      <td>Jede</td>
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
