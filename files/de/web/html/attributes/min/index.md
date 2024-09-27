---
title: "HTML-Attribut: min"
short-title: min
slug: Web/HTML/Attributes/min
l10n:
  sourceCommit: 77e46a5b43f828fcc6bd30facddc6fc4bfe84f9b
---

{{HTMLSidebar}}

Das **`min`**-Attribut definiert den Mindestwert, der akzeptabel und gültig für das Eingabefeld mit diesem Attribut ist. Wenn der [`value`](/de/docs/Web/HTML/Element/input#value) des Elements geringer ist, schlägt das Element die [Validierung](/de/docs/Learn/Forms/Form_validation) fehl. Dieser Wert muss kleiner oder gleich dem Wert des `max`-Attributs sein.

Einige Eingabetypen haben einen standardmäßigen Mindestwert. Falls das Eingabefeld keinen standardmäßigen Mindestwert hat und ein Wert für `min` angegeben wird, der nicht in eine gültige Zahl umgewandelt werden kann (oder kein Mindestwert festgelegt ist), hat das Eingabefeld keinen Mindestwert.

Es ist gültig für die Eingabetypen einschließlich: {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/time", "time")}}, {{HTMLElement("input/datetime-local", "datetime-local")}}, {{HTMLElement("input/number", "number")}} und {{HTMLElement("input/range", "range")}} Typen sowie das {{htmlelement('meter')}}-Element.

## Syntax

<table class="no-markdown">
  <caption>
    Syntax für
    <code>min</code>
    Werte nach Eingabe
    <code>Typ</code>
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
> Wenn die vom Benutzer eingegebenen Daten nicht dem festgelegten Mindestwert entsprechen, wird der Wert als ungültig in der Einschränkungsvalidierung betrachtet und wird mit den Pseudoklassen {{cssxref(':invalid')}} und {{cssxref(':out-of-range')}} übereinstimmen.

Siehe [Client-seitige Validierung](/de/docs/Web/HTML/Constraint_validation) und [`rangeUnderflow`](/de/docs/Web/API/ValidityState/rangeUnderflow) für weitere Informationen.

Für das {{htmlelement('meter')}}-Element definiert das `min`-Attribut die untere numerische Grenze des gemessenen Bereichs. Dieses muss kleiner als der Maximalwert ([`max`](/de/docs/Web/HTML/Attributes/max) Attribut) sein, falls angegeben. In beiden Fällen, wenn weggelassen, beträgt der Standardwert 1.

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

### Auswirkungen auf den `step`

Der Wert von `min` und `step` definiert, welche Werte gültig sind, selbst wenn das `step`-Attribut nicht enthalten ist, da `step` standardmäßig auf `0` gesetzt ist.

Wir fügen einen großen roten Rahmen um ungültige Eingaben hinzu:

```css
input:invalid {
  border: solid red 3px;
}
```

Dann definieren wir eine Eingabe mit einem Mindestwert von 7.2, wobei das Step-Attribut weggelassen wird, in welchem es standardmäßig auf 1 gesetzt ist.

```html
<input id="myNumber" name="myNumber" type="number" min="7.2" value="8" />
```

Da `step` standardmäßig 1 ist, sind gültige Werte `7.2`, `8.2`, `9.2` und so weiter. Der Wert 8 ist nicht gültig. Da wir einen ungültigen Wert enthalten haben, zeigen unterstützende Browser den Wert als ungültig an.

{{EmbedLiveSample("Impact_on_step",200,55)}}

Wenn nicht ausdrücklich angegeben, beträgt der Standardwert von `step` 1 für `number` und `range`, und 1 Einheitstyp (Sekunde, Woche, Monat, Tag) für die Datums-/Zeit-Eingabetypen.

## Barrierefreiheit

Geben Sie Anweisungen, um Benutzern dabei zu helfen, das Formular auszufüllen und einzelne Formularelemente zu verwenden. Geben Sie an, welche Eingaben erforderlich und optional sind, die Datenformate und andere relevante Informationen. Wenn Sie das `min`-Attribut verwenden, stellen Sie sicher, dass diese Mindestanforderung vom Benutzer verstanden wird. Das Bereitstellen von Anweisungen innerhalb des {{htmlelement('label')}} mag ausreichend sein. Wenn Sie Anweisungen außerhalb der Labels geben, was eine flexiblere Positionierung und Gestaltung ermöglicht, erwägen Sie die Verwendung von [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) oder [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`step`](/de/docs/Web/HTML/Attributes/step)
- [`max`](/de/docs/Web/HTML/Attributes/max)
- andere Meter-Attribute: [`low`](/de/docs/Web/HTML/Attributes/low), [`high`](/de/docs/Web/HTML/Attributes/high), [`optimum`](/de/docs/Web/HTML/Attributes/optimum)
- [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)
- [Formularvalidierung](/de/docs/Learn/Forms/Form_validation)
- [`validityState.rangeUnderflow`](/de/docs/Web/API/ValidityState/rangeUnderflow)
- {{cssxref(':out-of-range')}}
- {{htmlelement('input')}}
- {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/time", "time")}}, {{HTMLElement("input/datetime-local", "datetime-local")}}, {{HTMLElement("input/number", "number")}} und {{HTMLElement("input/range", "range")}} Typen sowie das {{htmlelement('meter')}}
