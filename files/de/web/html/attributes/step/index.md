---
title: "HTML-Attribut: step"
short-title: step
slug: Web/HTML/Attributes/step
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{HTMLSidebar}}

Das Attribut **`step`** ist eine Zahl, die die Granularität angibt, der der Wert entsprechen muss, oder das Schlüsselwort `any`. Es ist für die numerischen Eingabetypen gültig, einschließlich der Typen {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/time", "time")}}, {{HTMLElement("input/datetime-local", "datetime-local")}}, {{HTMLElement("input/number", "number")}} und {{HTMLElement("input/range", "range")}}.

Das `step`-Attribut legt das _Stufungsintervall_ fest, wenn man die Auf- und Abwärts-Spinner-Schaltflächen anklickt, einen Regler links und rechts verschiebt und die verschiedenen Datumstypen validiert. Falls nicht ausdrücklich angegeben, beträgt der Standardwert von `step` 1 für `number` und `range` sowie 1 Einheit (Minute, Woche, Monat, Tag) für die Datum/Uhrzeit-Eingabetypen. Der Wert muss eine positive Zahl sein - ganzzahlig oder Gleitkomma - oder der spezielle Wert `any`, was bedeutet, dass keine Stufung impliziert wird und jeder Wert zulässig ist (unter Berücksichtigung anderer Einschränkungen, wie [`min`](/de/docs/Web/HTML/Attributes/min) und [`max`](/de/docs/Web/HTML/Attributes/max)).

Der Standardwert der Stufung für `number` Eingaben ist 1, sodass nur Ganzzahlen eingegeben werden können, _es sei denn_, die Basis der Stufung ist keine Ganzzahl. Der Standardwert der Stufung für `time` ist 60 Sekunden, wobei 900 gleich 15 Minuten entspricht.

## Syntax

<table class="no-markdown">
  <caption>
    Standardwerte für step
  </caption>
  <thead>
    <tr>
      <th>Eingabetyp</th>
      <th>Wert</th>
      <th>Beispiel</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{HTMLElement("input/date", "date")}}</td>
      <td>1 (Tag)</td>
      <td><code>&#x3C;input type="date" min="2019-12-25" step="1"></code></td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/month", "month")}}</td>
      <td>1 (Monat)</td>
      <td><code>&#x3C;input type="month" min="2019-12" step="12"></code></td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/week", "week")}}</td>
      <td>1 (Woche)</td>
      <td><code>&#x3C;input type="week" min="2019-W23" step="2"></code></td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/time", "time")}}</td>
      <td>60 (Sekunden)</td>
      <td><code>&#x3C;input type="time" min="09:00" step="900"></code></td>
    </tr>
    <tr>
      <td>
        {{HTMLElement("input/datetime-local", "datetime-local")}}
      </td>
      <td>60 (Sekunden)</td>
      <td>
        <code
          >&#x3C;input type="datetime-local" min="2019-12-25T19:30"
          step="900"></code
        >
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/number", "number")}}</td>
      <td>1</td>
      <td>
        <code>&#x3C;input type="number" min="0" step="0.1" max="10"></code>
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/range", "range")}}</td>
      <td>1</td>
      <td><code>&#x3C;input type="range" min="0" step="2" max="10"></code></td>
    </tr>
  </tbody>
</table>

Falls `any` nicht ausdrücklich gesetzt ist, sind gültige Werte für die `number`, Datum/Uhrzeit- und `range`-Eingabetypen gleich der Basis für die Stufung - dem [`min`](/de/docs/Web/HTML/Attributes/min) Wert und Vielfachen des Schrittwerts bis zum [`max`](/de/docs/Web/HTML/Attributes/max) Wert, falls angegeben. Das folgende Beispiel führt dazu, dass jede gerade Ganzzahl, die 10 oder größer ist, gültig ist:

```html
<input type="number" min="10" step="2" />
```

Wird `step` weggelassen, ist jede Ganzzahl gültig, aber Gleitkommazahlen wie 4.2 sind nicht gültig, da `step` standardmäßig 1 ist. Damit 4.2 gültig ist:

- muss entweder `step` auf `any`, 0.1 oder 0.2 gesetzt sein,
- oder der `min` Wert muss eine Zahl sein, die mit .2 endet, wie 0.2, 1.2 oder -5.2.

## Beispiele

### Einfluss von `min` auf step

Der Wert von `min` definiert gültige Werte, auch wenn das `step`-Attribut nicht enthalten ist. Dies liegt daran, dass `step` für den `number` Eingabetyp standardmäßig `1` ist.

In diesem Beispiel fügen wir einen großen roten Rand um ungültige Eingaben hinzu:

```css
input:invalid {
  border: solid red 3px;
}
```

Dann definieren wir eine Eingabe mit einem Mindestwert von 1.2 und einem Schrittwert von 2:

```html
<input id="myNumber" name="myNumber" type="number" step="2" min="1.2" />
```

Gültige Werte umfassen 1.2, 3.2, 5.2, 7.2, 9.2, 11.2 und so weiter. Nur Gleitkommazahlen mit einem ungeraden ganzzahligen Teil und einem Dezimalteil von .2 sind gültig. Der Nummern-Spinner, falls vorhanden, generiert gültige Gleitkommazahlen ab 1.2 in Schritten von 2.

{{EmbedLiveSample("min_impact_on_step","100%",55)}}

> [!NOTE]
> Wenn die vom Benutzer eingegebenen Daten nicht der Stufungskonfiguration entsprechen, wird der Wert in der Constraint-Validierung als ungültig angesehen und wird die Pseudoklassen {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}} ansprechen.

Sehen Sie [Client-seitige Validierung](/de/docs/Web/HTML/Constraint_validation) und [`stepMismatch`](/de/docs/Web/API/ValidityState/stepMismatch) für mehr Informationen.

## Barrierefreiheitsbelange

Stellen Sie Anleitungen bereit, um Benutzern zu helfen, das Formular auszufüllen und die einzelnen Formularsteuerelemente zu verwenden. Geben Sie an, welche Eingaben erforderlich und optional sind, Datenformate und andere relevante Informationen. Wenn Sie das `min`-Attribut verwenden, stellen Sie sicher, dass diese Mindestanforderung vom Benutzer verstanden wird. Das Bereitstellen von Anleitungen innerhalb des {{htmlelement('label')}} kann ausreichend sein. Wenn Sie Anleitungen außerhalb von Labels bereitstellen, was eine flexiblere Positionierung und Gestaltung ermöglicht, sollten Sie in Betracht ziehen, [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) oder [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) zu verwenden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`max`](/de/docs/Web/HTML/Attributes/max)
- [`min`](/de/docs/Web/HTML/Attributes/min)
- [Constraint Validation](/de/docs/Web/HTML/Constraint_validation)
- [Formularvalidation](/de/docs/Learn/web_development/Extensions/Forms/Form_validation)
- [`validityState.stepMismatch`](/de/docs/Web/API/ValidityState/stepMismatch)
- {{cssxref(':out-of-range')}}
- {{htmlelement('input')}}
- {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/time", "time")}}, {{HTMLElement("input/datetime-local", "datetime-local")}}, {{HTMLElement("input/number", "number")}} und {{HTMLElement("input/range", "range")}} Typen, und das {{htmlelement('meter')}}
