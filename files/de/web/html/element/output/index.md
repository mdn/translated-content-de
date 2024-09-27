---
title: "<output>: Das Output-Element"
slug: Web/HTML/Element/output
l10n:
  sourceCommit: 4394f521f49a682313917e31870c8a38e2161610
---

{{HTMLSidebar}}

Das **`<output>`** [HTML](/de/docs/Web/HTML)-Element ist ein Container-Element, in das eine Website oder App die Ergebnisse einer Berechnung oder das Ergebnis einer Benutzeraktion einspeisen kann.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- [`for`](/de/docs/Web/HTML/Attributes/for)
  - : Eine durch Leerzeichen getrennte Liste anderer Elemente-`id`s, die darauf hinweisen, dass diese Elemente Eingabewerte zur Berechnung beigetragen haben (oder diese anderweitig beeinflusst haben).
- `form`

  - : Das {{HTMLElement("form")}}-Element, mit dem die Ausgabe verknüpft werden soll (sein _form owner_). Der Wert dieses Attributs muss die [`id`](/de/docs/Web/HTML/Global_attributes#id) eines `<form>` im selben Dokument sein. (Wenn dieses Attribut nicht gesetzt ist, wird das `<output>` mit seinem übergeordneten `<form>`-Element verknüpft, falls vorhanden.)

    Dieses Attribut ermöglicht es Ihnen, `<output>`-Elemente mit `<form>`s überall im Dokument zu verknüpfen, nicht nur innerhalb eines `<form>`. Es kann auch ein übergeordnetes `<form>`-Element überschreiben. Der Name und der Inhalt des `<output>`-Elements werden beim Absenden des Formulars nicht übermittelt.

- `name`
  - : Der Name des Elements. Wird in der [`form.elements`](/de/docs/Web/API/HTMLFormElement/elements) API verwendet.

Der Wert, der Name und der Inhalt des `<output>` werden bei der Formularübermittlung NICHT übermittelt.

## Barrierefreiheit

Viele Browser implementieren dieses Element als [`aria-live`](/de/docs/Web/Accessibility/ARIA/ARIA_Live_Regions)-Region. Assistive Technologien geben dadurch die Ergebnisse von Benutzeroberflächen-Interaktionen bekannt, die darin veröffentlicht werden, ohne dass der Fokus von den Steuerelementen wegschalten muss, die diese Ergebnisse erzeugen.

## Beispiele

Im folgenden Beispiel stellt das Formular einen Slider bereit, dessen Wert zwischen `0` und `100` liegen kann, und ein {{HTMLElement("input")}}-Element, in das Sie eine zweite Zahl eingeben können. Die beiden Zahlen werden addiert und das Ergebnis wird im `<output>`-Element angezeigt, jedes Mal, wenn sich der Wert eines der Steuerelemente ändert.

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
          >Fließender Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierung Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#form_listed"
          >gelistet</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#form_labelable"
          >beschriftbar</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#form_resettable"
          >zurücksetzbar</a
        >
        <a
          href="/de/docs/Web/HTML/Content_categories#form-associated_content"
          >formular-assoziiertes Element</a
        >, wahrnehmbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierung Inhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl der Start- als auch der End-Tag sind zwingend erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierung Inhalt</a
        >
        akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td><a href="/de/docs/Web/Accessibility/ARIA/Roles/status_role"><code>status</code></a></td>
    </tr>
    <tr>
      <th scope="row">Zulässige ARIA-Rollen</th>
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
