---
title: "HTML-Attribut: min"
short-title: min
slug: Web/HTML/Reference/Attributes/min
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das **`min`**-Attribut definiert den minimalen Wert, der für die Eingabe mit diesem Attribut akzeptabel und gültig ist. Wenn der [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) des Elements kleiner ist als dieser Wert, schlägt die [Validierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) des Elements fehl. Dieser Wert muss kleiner oder gleich dem Wert des `max`-Attributs sein.

Einige Eingabetypen haben einen Standard-Mindestwert. Wenn die Eingabe keinen Standard-Mindestwert hat und für `min` ein Wert festgelegt wird, der nicht in eine gültige Zahl umgewandelt werden kann (oder kein Mindestwert festgelegt wird), hat die Eingabe keinen Mindestwert.

Es ist gültig für die Eingabetypen einschließlich: {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/time", "time")}}, {{HTMLElement("input/datetime-local", "datetime-local")}}, {{HTMLElement("input/number", "number")}} und {{HTMLElement("input/range", "range")}} Typen, und das {{htmlelement('meter')}} Element.

## Syntax

<table class="no-markdown">
  <caption>
    Syntax für
    <code>min</code>
    Werte nach Eingabe
    <code>type</code>
  </caption>
  <thead>
    <tr>
      <th>Eingabetyp</th>
      <th>Syntax</th>
      <th>Beispiel</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{HTMLElement("input/date", "date")}}</td>
      <td><code>yyyy-mm-dd</code></td>
      <td><code>&#x3C;input type="date" min="2019-12-25" step="1"></code></td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/month", "month")}}</td>
      <td><code>yyyy-mm</code></td>
      <td><code>&#x3C;input type="month" min="2019-12" step="12"></code></td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/week", "week")}}</td>
      <td><code>yyyy-W##</code></td>
      <td><code>&#x3C;input type="week" min="2019-W23" step=""></code></td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/time", "time")}}</td>
      <td><code>HH:mm</code></td>
      <td><code>&#x3C;input type="time" min="09:00" step="900"></code></td>
    </tr>
    <tr>
      <td>
        {{HTMLElement("input/datetime-local", "datetime-local")}}
      </td>
      <td><code>yyyy-mm-ddTHH:mm</code></td>
      <td>
        <code>&#x3C;input type="datetime-local" min="2019-12-25T19:30"></code>
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/number", "number")}}</td>
      <td><a href="/de/docs/Web/CSS/number">&#x3C;number></a></td>
      <td>
        <code>&#x3C;input type="number" min="0" step="5" max="100"></code>
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/range", "range")}}</td>
      <td><a href="/de/docs/Web/CSS/number">&#x3C;number></a></td>
      <td>
        <code>&#x3C;input type="range" min="60" step="5" max="100"></code>
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Wenn die von dem Benutzer eingegebenen Daten nicht dem festgelegten Mindestwert entsprechen, wird der Wert in der Einschränkungsvalidierung als ungültig betrachtet und entspricht den {{cssxref(':invalid')}} und {{cssxref(':out-of-range')}} Pseudoklassen.

Siehe [Client-seitige Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) und [`rangeUnderflow`](/de/docs/Web/API/ValidityState/rangeUnderflow) für mehr Informationen.

Für das {{htmlelement('meter')}} Element definiert das `min`-Attribut die untere numerische Grenze des gemessenen Bereichs. Diese muss kleiner sein als der maximale Wert ([`max`](/de/docs/Web/HTML/Reference/Attributes/max)-Attribut), falls festgelegt. In beiden Fällen, wenn weggelassen, ist der Standardwert 1.

<table class="no-markdown">
  <caption>
    Syntax für
    <code>min</code>
    Werte für andere Elemente
  </caption>
  <thead>
    <tr>
      <th>Eingabetyp</th>
      <th>Syntax</th>
      <th>Beispiel</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{HTMLElement("meter")}}</td>
      <td><a href="/de/docs/Web/CSS/number">&#x3C;number></a></td>
      <td>
        <code
          >&#x3C;meter id="fuel" min="0" max="100" low="33" high="66"
          optimum="80" value="40"> bei 40/100&#x3C;/meter></code
        >
      </td>
    </tr>
  </tbody>
</table>

### Auswirkungen auf Schritt

Der Wert von `min` und `step` definiert, welche Werte gültig sind, auch wenn das `step`-Attribut nicht enthalten ist, da `step` standardmäßig `0` ist.

Wir fügen einen großen roten Rahmen um ungültige Eingaben hinzu:

```css
input:invalid {
  border: solid red 3px;
}
```

Dann definieren wir eine Eingabe mit einem Mindestwert von 7.2 und lassen das Step-Attribut weg, wobei es standardmäßig auf 1 gesetzt wird.

```html
<input id="myNumber" name="myNumber" type="number" min="7.2" value="8" />
```

Da `step` standardmäßig 1 ist, sind gültige Werte `7.2`, `8.2`, `9.2` und so weiter. Der Wert 8 ist nicht gültig. Da wir einen ungültigen Wert angegeben haben, werden unterstützende Browser den Wert als ungültig anzeigen.

{{EmbedLiveSample("Impact_on_step",200,55)}}

Wenn nicht explizit angegeben, ist `step` standardmäßig 1 für `number` und `range`, und 1 Einheitstyp (Sekunde, Woche, Monat, Tag) für die Datum/Zeit-Eingabetypen.

## Barrierefreiheit

Geben Sie Anweisungen, um Benutzern zu helfen, das Formular auszufüllen und die einzelnen Formularelemente zu verwenden. Geben Sie an, welche Eingaben erforderlich und optional sind, welche Datenformate benötigt werden und andere relevante Informationen. Wenn Sie das `min`-Attribut verwenden, stellen Sie sicher, dass diese Mindestanforderung vom Benutzer verstanden wird. Das Bereitstellen von Anweisungen innerhalb des {{htmlelement('label')}} kann ausreichend sein. Wenn Sie Anweisungen außerhalb von Labels bereitstellen, was eine flexiblere Positionierung und Gestaltung ermöglicht, erwägen Sie die Verwendung von [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) oder [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`step`](/de/docs/Web/HTML/Reference/Attributes/step)
- [`max`](/de/docs/Web/HTML/Reference/Attributes/max)
- andere Meter-Attribute: [`low`](/de/docs/Web/HTML/Reference/Elements/meter#low), [`high`](/de/docs/Web/HTML/Reference/Elements/meter#high), [`optimum`](/de/docs/Web/HTML/Reference/Elements/meter#optimum)
- [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation)
- [Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [`validityState.rangeUnderflow`](/de/docs/Web/API/ValidityState/rangeUnderflow)
- {{cssxref(':out-of-range')}}
- {{htmlelement('input')}}
- {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/time", "time")}}, {{HTMLElement("input/datetime-local", "datetime-local")}}, {{HTMLElement("input/number", "number")}} und {{HTMLElement("input/range", "range")}} Typen, und das {{htmlelement('meter')}}
