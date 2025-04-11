---
title: "HTML-Attribut: min"
short-title: min
slug: Web/HTML/Reference/Attributes/min
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

Das **`min`**-Attribut definiert den minimal akzeptablen und gültigen Wert für das Eingabefeld, das dieses Attribut enthält. Wenn der [`Wert`](/de/docs/Web/HTML/Reference/Elements/input#value) des Elements geringer ist als dieser, schlägt die [Validierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) des Elements fehl. Dieser Wert muss kleiner oder gleich dem Wert des `max`-Attributs sein.

Einige Eingabetypen haben einen standardmäßigen Minimalwert. Wenn der Eingabetyp keinen standardmäßigen Minimalwert hat und ein `min`-Wert angegeben wird, der nicht in eine gültige Zahl umgewandelt werden kann (oder kein Minimalwert festgelegt ist), hat das Eingabefeld keinen Minimalwert.

Es ist gültig für die folgenden Eingabetypen: {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/time", "time")}}, {{HTMLElement("input/datetime-local", "datetime-local")}}, {{HTMLElement("input/number", "number")}} und {{HTMLElement("input/range", "range")}} Typen sowie das {{htmlelement('meter')}}-Element.

## Syntax

<table class="no-markdown">
  <caption>
    Syntax für
    <code>min</code>
    Werte nach Eingabefeld-
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
> Wenn die vom Benutzer eingegebenen Daten nicht dem festgelegten `min`-Wert entsprechen, wird der Wert in der Einschränkungsvalidierung als ungültig angesehen und stimmt mit den Pseudoklassen {{cssxref(':invalid')}} und {{cssxref(':out-of-range')}} überein.

Siehe [Client-seitige Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) und [`rangeUnderflow`](/de/docs/Web/API/ValidityState/rangeUnderflow) für weitere Informationen.

Für das {{htmlelement('meter')}}-Element definiert das `min`-Attribut die untere numerische Grenze des gemessenen Bereichs. Dies muss, falls angegeben, weniger als der maximale Wert ([`max`](/de/docs/Web/HTML/Reference/Attributes/max)-Attribut) sein. In beiden Fällen, wenn weggelassen, beträgt der Standardwert 1.

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

### Einfluss auf Step

Der Wert von `min` und `step` definiert, welche Werte gültig sind, selbst wenn das `step`-Attribut nicht enthalten ist, da `step` standardmäßig `0` ist.

Wir fügen einen dicken roten Rand um ungültige Eingaben hinzu:

```css
input:invalid {
  border: solid red 3px;
}
```

Definieren Sie dann eine Eingabe mit einem Mindestwert von 7.2, wobei das `step`-Attribut weggelassen wird, welches standardmäßig auf 1 gesetzt ist.

```html
<input id="myNumber" name="myNumber" type="number" min="7.2" value="8" />
```

Da `step` standardmäßig auf 1 gesetzt ist, gehören zu den gültigen Werten `7.2`, `8.2`, `9.2` und so weiter. Der Wert 8 ist nicht gültig. Da wir einen ungültigen Wert eingeschlossen haben, zeigen unterstützende Browser den Wert als ungültig an.

{{EmbedLiveSample("Impact_on_step",200,55)}}

Wenn nicht explizit angegeben, ist `step` standardmäßig 1 für `number` und `range` und 1 Einheitstyp (Sekunde, Woche, Monat, Tag) für die Datums-/Uhrzeit-Eingabetypen.

## Barrierefreiheitshinweise

Geben Sie Anweisungen, die den Benutzern helfen zu verstehen, wie das Formular auszufüllen ist und wie die einzelnen Formularkomponenten verwendet werden. Geben Sie erforderliche und optionale Eingaben, Datenformate und andere relevante Informationen an. Wenn Sie das `min`-Attribut verwenden, stellen Sie sicher, dass diese Mindestanforderung vom Benutzer verstanden wird. Anweisungen innerhalb des {{htmlelement('label')}} können ausreichend sein. Wenn Anweisungen außerhalb von Labels angegeben werden, was eine flexiblere Positionierung und Gestaltung ermöglicht, sollten Sie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) oder [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) in Betracht ziehen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`step`](/de/docs/Web/HTML/Reference/Attributes/step)
- [`max`](/de/docs/Web/HTML/Reference/Attributes/max)
- andere Meter-Attribute: [`low`](/de/docs/Web/HTML/Attributes/low), [`high`](/de/docs/Web/HTML/Attributes/high), [`optimum`](/de/docs/Web/HTML/Attributes/optimum)
- [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation)
- [Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [`validityState.rangeUnderflow`](/de/docs/Web/API/ValidityState/rangeUnderflow)
- {{cssxref(':out-of-range')}}
- {{htmlelement('input')}}
- {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/time", "time")}}, {{HTMLElement("input/datetime-local", "datetime-local")}}, {{HTMLElement("input/number", "number")}} und {{HTMLElement("input/range", "range")}} Typen sowie das {{htmlelement('meter')}}.
