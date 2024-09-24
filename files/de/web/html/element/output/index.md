---
title: "<output>: Das Output-Element"
slug: Web/HTML/Element/output
l10n:
  sourceCommit: 4394f521f49a682313917e31870c8a38e2161610
---

{{HTMLSidebar}}

Das **`<output>`** [HTML](/de/docs/Web/HTML)-Element ist ein Containerelement, in das eine Website oder App die Ergebnisse einer Berechnung oder das Ergebnis einer Benutzeraktion einfügen kann.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- [`for`](/de/docs/Web/HTML/Attributes/for)
  - : Eine durch Leerzeichen getrennte Liste von [`id`](/de/docs/Web/HTML/Global_attributes#id)s anderer Elemente, die anzeigen, dass diese Elemente Eingabewerte für die Berechnung bereitgestellt haben (oder diese anderweitig beeinflusst haben).
- `form`

  - : Das {{HTMLElement("form")}}-Element, mit dem das Output verbunden werden soll (sein _Formularbesitzer_). Der Wert dieses Attributs muss die [`id`](/de/docs/Web/HTML/Global_attributes#id) eines `<form>` im selben Dokument sein. (Wenn dieses Attribut nicht gesetzt ist, ist das `<output>` mit seinem übergeordneten `<form>`-Element verbunden, falls vorhanden.)

    Dieses Attribut ermöglicht es, `<output>`-Elemente mit `<form>`s im gesamten Dokument zu verknüpfen, und nicht nur innerhalb eines `<form>`. Es kann auch ein übergeordnetes `<form>`-Element überschreiben. Der Name und der Inhalt des `<output>`-Elements werden nicht übermittelt, wenn das Formular abgeschickt wird.

- `name`
  - : Der Name des Elements. Verwendet in der {{domxref("HTMLFormElement.elements", "form.elements")}}-API.

Der Wert, der Name und der Inhalt des `<output>` werden NICHT während der Formularübermittlung gesendet.

## Barrierefreiheit

Viele Browser implementieren dieses Element als [`aria-live`](/de/docs/Web/Accessibility/ARIA/ARIA_Live_Regions)-Region. Assistive Technologien kündigen daher die Ergebnisse von Benutzeroberflächeninteraktionen an, die darin platziert werden, ohne dass der Fokus von den Steuerungen wegbewegt werden muss, die diese Ergebnisse erzeugen.

## Beispiele

Im folgenden Beispiel bietet das Formular einen Schieberegler, dessen Wert zwischen `0` und `100` reichen kann, und ein {{HTMLElement("input")}}-Element, in das Sie eine zweite Zahl eingeben können. Die zwei Zahlen werden addiert, und das Ergebnis wird in dem `<output>`-Element jedes Mal angezeigt, wenn sich der Wert eines der Steuerungselemente ändert.

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
          >Flow-Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#form_listed"
          >aufgeführt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#form_labelable"
          >etikettierbar</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#form_resettable"
          >zurücksetzbar</a
        >
        <a
          href="/de/docs/Web/HTML/Content_categories#form-associated_content"
          >formularassoziiertes Element</a
        >, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl der Start- als auch der End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        > akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td><a href="/de/docs/Web/Accessibility/ARIA/Roles/status_role"><code>status</code></a></td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>Beliebig</td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>{{domxref("HTMLOutputElement")}}</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
