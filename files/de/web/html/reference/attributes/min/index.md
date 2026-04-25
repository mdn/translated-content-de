---
title: "`min` HTML-Attribut"
short-title: min
slug: Web/HTML/Reference/Attributes/min
l10n:
  sourceCommit: b50ed7ac1c2ca21b4b5cfb594474a17da3f2e6c2
---

Das **`min`** Attribut definiert den minimal akzeptablen und gültigen Wert für die Eingabe, die dieses Attribut enthält. Wenn der [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) des Elements kleiner ist als dieser Wert, schlägt das Element bei der [Validierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) fehl. Dieser Wert muss kleiner oder gleich dem Wert des `max` Attributs sein.

Einige Eingabetypen haben ein Standardminimum. Wenn die Eingabe kein Standardminimum hat und ein Wert für `min` angegeben ist, der nicht in eine gültige Zahl konvertiert werden kann (oder kein Mindestwert festgelegt ist), hat die Eingabe keinen Mindestwert.

Es ist gültig für die Eingabetypen, die {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/time", "time")}}, {{HTMLElement("input/datetime-local", "datetime-local")}}, {{HTMLElement("input/number", "number")}} und {{HTMLElement("input/range", "range")}} Typen und das {{htmlelement('meter')}} Element einschließen.

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
> Wenn die vom Benutzer eingegebenen Daten nicht den festgelegten Min-Wert einhalten, wird der Wert bei der Einschränkungsvalidierung als ungültig betrachtet und entspricht den {{cssxref(':invalid')}} und {{cssxref(':out-of-range')}} Pseudoklassen.

Weitere Informationen finden Sie unter [Client-seitige Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) und [`rangeUnderflow`](/de/docs/Web/API/ValidityState/rangeUnderflow).

Für das {{htmlelement('meter')}} Element definiert das `min` Attribut die untere numerische Grenze des gemessenen Bereichs. Diese muss kleiner sein als der maximale Wert (das [`max`](/de/docs/Web/HTML/Reference/Attributes/max) Attribut), falls angegeben. In beiden Fällen, falls weggelassen, beträgt der Standardwert 1.

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

### Auswirkung auf Step

Der Wert von `min` und `step` definiert, welche Werte gültig sind, selbst wenn das `step` Attribut nicht enthalten ist, da `step` standardmäßig `0` ist.

Wir fügen einen großen roten Rand um ungültige Eingaben hinzu:

```css
input:invalid {
  border: solid red 3px;
}
```

Dann definieren wir eine Eingabe mit einem Mindestwert von 7.2, wobei das `step` Attribut weggelassen wird, wobei es standardmäßig 1 ist.

```html
<input id="myNumber" name="myNumber" type="number" min="7.2" value="8" />
```

Da `step` standardmäßig 1 ist, umfassen gültige Werte `7.2`, `8.2`, `9.2` usw. Der Wert 8 ist nicht gültig. Da wir einen ungültigen Wert eingeschlossen haben, zeigen unterstützende Browser den Wert als ungültig an.

{{EmbedLiveSample("Impact_on_step",200,55)}}

Wenn nicht explizit inkludiert, beträgt `step` standardmäßig 1 für `number` und `range`, und 1 Einheitentyp (Sekunde, Woche, Monat, Tag) für die Datums-/Uhrzeit-Eingabetypen.

## Barrierefreiheitsbedenken

Geben Sie Anweisungen, um den Benutzern zu helfen zu verstehen, wie sie das Formular ausfüllen und einzelne Formularelemente verwenden sollen. Geben Sie etwaige erforderliche und optionale Eingaben, Datenformate und andere relevante Informationen an. Wenn Sie das `min` Attribut verwenden, stellen Sie sicher, dass diese Mindestanforderung vom Benutzer verstanden wird. Anweisungen innerhalb des {{htmlelement('label')}} bereitzustellen, kann ausreichend sein. Falls Anweisungen außerhalb von Labels bereitgestellt werden, was eine flexiblere Positionierung und Gestaltung erlaubt, ziehen Sie die Verwendung von [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) oder [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) in Betracht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`step`](/de/docs/Web/HTML/Reference/Attributes/step)
- [`max`](/de/docs/Web/HTML/Reference/Attributes/max)
- weitere Meter-Attribute: [`low`](/de/docs/Web/HTML/Reference/Elements/meter#low), [`high`](/de/docs/Web/HTML/Reference/Elements/meter#high), [`optimum`](/de/docs/Web/HTML/Reference/Elements/meter#optimum)
- [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation)
- [Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [`validityState.rangeUnderflow`](/de/docs/Web/API/ValidityState/rangeUnderflow)
- {{cssxref(':out-of-range')}}
- {{htmlelement('input')}}
- {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/time", "time")}}, {{HTMLElement("input/datetime-local", "datetime-local")}}, {{HTMLElement("input/number", "number")}} und {{HTMLElement("input/range", "range")}} Typen und das {{htmlelement('meter')}}
