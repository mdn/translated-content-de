---
title: "HTML-Attribut: min"
short-title: min
slug: Web/HTML/Reference/Attributes/min
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Das **`min`**-Attribut definiert den minimalen Wert, der akzeptabel und gültig für das `input` ist, das dieses Attribut enthält. Ist der [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) des Elements kleiner als dieser, schlägt die [Validierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) des Elements fehl. Dieser Wert muss kleiner oder gleich dem Wert des `max`-Attributs sein.

Einige Eingabetypen haben ein Standardminimum. Wenn das `input` kein Standardminimum hat und ein Wert für `min` angegeben wird, der nicht in eine gültige Zahl umgewandelt werden kann (oder kein Mindestwert festgelegt ist), hat das `input` keinen Mindestwert.

Es ist gültig für folgende Eingabetypen: {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/time", "time")}}, {{HTMLElement("input/datetime-local", "datetime-local")}}, {{HTMLElement("input/number", "number")}} und {{HTMLElement("input/range", "range")}} sowie das {{htmlelement('meter')}}-Element.

## Syntax

<table class="no-markdown">
  <caption>
    Syntax für
    <code>min</code>
    Werte nach
    <code>type</code>
    des Inputs
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
      <td><a href="/de/docs/Web/CSS/Reference/Values/number">&#x3C;number></a></td>
      <td>
        <code>&#x3C;input type="number" min="0" step="5" max="100"></code>
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/range", "range")}}</td>
      <td><a href="/de/docs/Web/CSS/Reference/Values/number">&#x3C;number></a></td>
      <td>
        <code>&#x3C;input type="range" min="60" step="5" max="100"></code>
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Wenn die vom Benutzer eingegebenen Daten nicht dem festgelegten Min-Wert entsprechen, wird der Wert in der Constraint-Validierung als ungültig angesehen und wird den {{cssxref(':invalid')}} und {{cssxref(':out-of-range')}} Pseudoklassen entsprechen.

Siehe [Client-seitige Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) und [`rangeUnderflow`](/de/docs/Web/API/ValidityState/rangeUnderflow) für weitere Informationen.

Für das {{htmlelement('meter')}}-Element definiert das `min`-Attribut die untere numerische Grenze des gemessenen Bereichs. Diese muss kleiner sein als der maximale Wert (Attribut [`max`](/de/docs/Web/HTML/Reference/Attributes/max)), falls angegeben. In beiden Fällen, falls ausgelassen, beträgt der Standardwert 1.

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
      <td><a href="/de/docs/Web/CSS/Reference/Values/number">&#x3C;number></a></td>
      <td>
        <code
          >&#x3C;meter id="fuel" min="0" max="100" low="33" high="66"
          optimum="80" value="40"> at 40/100&#x3C;/meter></code
        >
      </td>
    </tr>
  </tbody>
</table>

### Auswirkung auf `step`

Der Wert von `min` und `step` definiert die gültigen Werte, auch wenn das `step`-Attribut nicht enthalten ist, da `step` standardmäßig auf `0` steht.

Wir fügen einen großen roten Rahmen um ungültige Eingaben hinzu:

```css
input:invalid {
  border: solid red 3px;
}
```

Dann definieren wir eine Eingabe mit einem Mindestwert von 7.2 und lassen das `step`-Attribut weg, wobei es auf 1 voreingestellt ist.

```html
<input id="myNumber" name="myNumber" type="number" min="7.2" value="8" />
```

Da `step` standardmäßig auf 1 steht, sind gültige Werte `7.2`, `8.2`, `9.2` usw. Der Wert 8 ist nicht gültig. Da wir einen ungültigen Wert eingegeben haben, zeigen unterstützende Browser den Wert als ungültig an.

{{EmbedLiveSample("Impact_on_step",200,55)}}

Wenn `step` nicht ausdrücklich eingeschlossen ist, ist der Standardwert für `number` und `range` 1 und 1 Einheitstyp (Sekunde, Woche, Monat, Tag) für die Datum-/Uhrzeit-Eingabetypen.

## Zugänglichkeitsprobleme

Geben Sie Anweisungen, um den Benutzern zu helfen, das Formular auszufüllen und die einzelnen Formularsteuerelemente zu verwenden. Geben Sie an, welche Eingaben erforderlich und optional sind, welche Datenformate gelten und andere relevante Informationen. Wenn Sie das `min`-Attribut verwenden, stellen Sie sicher, dass diese Mindestanforderung vom Benutzer verstanden wird. Das Bereitstellen von Anweisungen innerhalb des {{htmlelement('label')}} kann ausreichend sein. Wenn Sie Anweisungen außerhalb von Labels bereitstellen, was eine flexiblere Positionierung und Gestaltung ermöglicht, sollten Sie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) oder [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) in Betracht ziehen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`step`](/de/docs/Web/HTML/Reference/Attributes/step)
- [`max`](/de/docs/Web/HTML/Reference/Attributes/max)
- andere Meter-Attribute: [`low`](/de/docs/Web/HTML/Reference/Elements/meter#low), [`high`](/de/docs/Web/HTML/Reference/Elements/meter#high), [`optimum`](/de/docs/Web/HTML/Reference/Elements/meter#optimum)
- [Constraint-Validierung](/de/docs/Web/HTML/Guides/Constraint_validation)
- [Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [`validityState.rangeUnderflow`](/de/docs/Web/API/ValidityState/rangeUnderflow)
- {{cssxref(':out-of-range')}}
- {{htmlelement('input')}}
- {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/time", "time")}}, {{HTMLElement("input/datetime-local", "datetime-local")}}, {{HTMLElement("input/number", "number")}} und {{HTMLElement("input/range", "range")}} sowie das {{htmlelement('meter')}}
