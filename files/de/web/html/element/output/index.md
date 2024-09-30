---
title: "`<output>`: Das Output-Element"
slug: Web/HTML/Element/output
l10n:
  sourceCommit: 4394f521f49a682313917e31870c8a38e2161610
---

{{HTMLSidebar}}

Das **`<output>`** [HTML](/de/docs/Web/HTML)-Element ist ein Containerelement, in das eine Website oder App die Ergebnisse einer Berechnung oder das Ergebnis einer Benutzeraktion einfügen kann.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- [`for`](/de/docs/Web/HTML/Attributes/for)
  - : Eine durch Leerzeichen getrennte Liste von [`id`](/de/docs/Web/HTML/Global_attributes#id)s anderer Elemente, die angeben, dass diese Elemente Eingabewerte zur Berechnung beigetragen haben (oder sie anderweitig beeinflusst haben).
- `form`

  - : Das {{HTMLElement("form")}}-Element, mit dem das Output-Element verknüpft werden soll (sein _Formulareigner_). Der Wert dieses Attributs muss die [`id`](/de/docs/Web/HTML/Global_attributes#id) eines `<form>` im gleichen Dokument sein. (Wenn dieses Attribut nicht gesetzt ist, wird das `<output>` mit dem nächsten Vorfahren-`<form>`-Element verbunden, falls vorhanden.)

    Dieses Attribut ermöglicht es, `<output>`-Elemente mit `<form>`s überall im Dokument zu verknüpfen, nicht nur innerhalb eines `<form>`. Es kann auch ein Vorfahren-`<form>`-Element überschreiben. Der Name und der Inhalt des `<output>`-Elements werden bei der Formulareinsendung nicht übermittelt.

- `name`
  - : Der Name des Elements. Wird in der [`form.elements`](/de/docs/Web/API/HTMLFormElement/elements)-API verwendet.

Der Wert des `<output>`, dessen Name und Inhalte werden NICHT während der Formulareinsendung übermittelt.

## Barrierefreiheit

Viele Browser implementieren dieses Element als [`aria-live`](/de/docs/Web/Accessibility/ARIA/ARIA_Live_Regions)-Region. Assistive Technologien werden daher die Ergebnisse von Benutzerinteraktionen, die darin angezeigt werden, ankündigen, ohne dass der Fokus von den Steuerelementen wegbewegt werden muss, die diese Ergebnisse erzeugen.

## Beispiele

Im folgenden Beispiel stellt das Formular einen Schieberegler bereit, dessen Wert zwischen `0` und `100` liegen kann, sowie ein {{HTMLElement("input")}}-Element, in das Sie eine zweite Zahl eingeben können. Die beiden Zahlen werden addiert und das Ergebnis wird jedes Mal, wenn sich der Wert eines der Steuerelemente ändert, im `<output>`-Element angezeigt.

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
          >Phrasierungsinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#form_listed"
          >aufgelistet</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#form_labelable"
          >beschriftbar</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#form_resettable"
          >zurücksetzbar</a
        >
        <a
          href="/de/docs/Web/HTML/Content_categories#form-associated_content"
          >formularbezogenes Element</a
        >, fühlbarer Inhalt.
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
      <th scope="row">Tag-Aussparung</th>
      <td>Keine, sowohl der Start- als auch der End-Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        >
        akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td><a href="/de/docs/Web/Accessibility/ARIA/Roles/status_role"><code>status</code></a></td>
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
