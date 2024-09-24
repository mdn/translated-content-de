---
title: "HTML-Attribut: min"
short-title: min
slug: Web/HTML/Attributes/min
l10n:
  sourceCommit: 77e46a5b43f828fcc6bd30facddc6fc4bfe84f9b
---

{{HTMLSidebar}}

Das **`min`**-Attribut definiert den minimalen Wert, der für die Eingabe, die das Attribut enthält, akzeptabel und gültig ist. Wenn der [`value`](/de/docs/Web/HTML/Element/input#value) des Elements kleiner ist als dieser, schlägt das Element bei der [Validierung](/de/docs/Learn/Forms/Form_validation) fehl. Dieser Wert muss kleiner oder gleich dem Wert des `max`-Attributs sein.

Einige Eingabetypen haben einen standardmäßigen Minimalwert. Wenn die Eingabe keinen standardmäßigen Minimalwert hat und ein Wert für `min` angegeben wird, der nicht in eine gültige Zahl umgewandelt werden kann (oder kein Minimalwert gesetzt ist), hat die Eingabe keinen Minimalwert.

Es ist für die Eingabetypen gültig, einschließlich: {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/time", "time")}}, {{HTMLElement("input/datetime-local", "datetime-local")}}, {{HTMLElement("input/number", "number")}} und {{HTMLElement("input/range", "range")}} Typen, und dem {{htmlelement('meter')}}-Element.

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
> Wenn die vom Benutzer eingegebenen Daten nicht dem festgelegten Minimalwert entsprechen, wird der Wert bei der Eingabevalidierung als ungültig angesehen und entspricht den Pseudoklassen {{cssxref(':invalid')}} und {{cssxref(':out-of-range')}}.

Siehe [Klientseitige Validierung](/de/docs/Web/HTML/Constraint_validation) und {{domxref("ValidityState.rangeUnderflow", "rangeUnderflow")}} für weitere Informationen.

Für das {{htmlelement('meter')}}-Element definiert das `min`-Attribut die untere numerische Grenze des gemessenen Bereichs. Diese muss kleiner sein als der maximale Wert (das [`max`](/de/docs/Web/HTML/Attributes/max)-Attribut), falls angegeben. In beiden Fällen, wenn nicht angegeben, ist der Standardwert 1.

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

### Auswirkung auf step

Der Wert von `min` und `step` definiert, welche Werte gültig sind, auch wenn das `step`-Attribut nicht enthalten ist, da `step` standardmäßig auf `0` eingestellt ist.

Wir fügen einen großen roten Rand um ungültige Eingaben hinzu:

```css
input:invalid {
  border: solid red 3px;
}
```

Dann definieren wir eine Eingabe mit einem Minimalwert von 7.2, ohne das step-Attribut anzugeben, woraufhin es standardmäßig auf 1 eingestellt wird.

```html
<input id="myNumber" name="myNumber" type="number" min="7.2" value="8" />
```

Da `step` standardmäßig 1 ist, sind gültige Werte `7.2`, `8.2`, `9.2` und so weiter. Der Wert 8 ist nicht gültig. Da wir einen ungültigen Wert eingegeben haben, wird unterstützenden Browsern der Wert als ungültig angezeigt.

{{EmbedLiveSample("Impact_on_step",200,55)}}

Wenn nicht explizit angegeben, lautet der Standardwert für `step` 1 für `number` und `range` und 1 Einheitentyp (Sekunde, Woche, Monat, Tag) für die Eingabetypen Datum/Uhrzeit.

## Barrierefreiheitsaspekte

Geben Sie Anweisungen, um Benutzern zu helfen, das Formular auszufüllen und die einzelnen Formularsteuerungen zu verwenden. Geben Sie an, welche Eingaben erforderlich und optional sind, Datenformate und andere relevante Informationen. Stellen Sie bei der Verwendung des `min`-Attributs sicher, dass diese Mindestanforderung vom Benutzer verstanden wird. Anweisungen innerhalb des {{htmlelement('label')}} bereitzustellen, kann ausreichend sein. Wenn Sie Anweisungen außerhalb von Labels bereitstellen, was eine flexiblere Positionierung und Gestaltung ermöglicht, sollten Sie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) oder [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) in Betracht ziehen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`step`](/de/docs/Web/HTML/Attributes/step)
- [`max`](/de/docs/Web/HTML/Attributes/max)
- andere Meter-Attribute: [`low`](/de/docs/Web/HTML/Attributes/low), [`high`](/de/docs/Web/HTML/Attributes/high), [`optimum`](/de/docs/Web/HTML/Attributes/optimum)
- [Eingabevalidierung](/de/docs/Web/HTML/Constraint_validation)
- [Formularvalidierung](/de/docs/Learn/Forms/Form_validation)
- {{domxref('validityState.rangeUnderflow')}}
- {{cssxref(':out-of-range')}}
- {{htmlelement('input')}}
- {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/time", "time")}}, {{HTMLElement("input/datetime-local", "datetime-local")}}, {{HTMLElement("input/number", "number")}} und {{HTMLElement("input/range", "range")}} Typen, und das {{htmlelement('meter')}}
