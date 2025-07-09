---
title: "HTML-Attribut: step"
short-title: step
slug: Web/HTML/Reference/Attributes/step
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das **`step`**-Attribut ist eine Zahl, die die Granularität angibt, die der Wert einhalten muss, oder das Schlüsselwort `any`. Es ist gültig für die numerischen Eingabetypen, einschließlich der {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/time", "time")}}, {{HTMLElement("input/datetime-local", "datetime-local")}}, {{HTMLElement("input/number", "number")}} und {{HTMLElement("input/range", "range")}} Typen.

Das `step`-Attribut legt das _Intervall für Schritte_ fest, wenn Sie auf die Auf- und Ab-Tasten des Spinners klicken, einen Schieberegler bei einem Bereichsfeld nach links und rechts bewegen oder die verschiedenen Datumstypen validieren. Wenn es nicht ausdrücklich angegeben wird, beträgt der Standardwert von `step` 1 für `number` und `range`, und 1 Einheitentyp (Minute, Woche, Monat, Tag) für die Datums-/Uhrzeiteingabetypen. Der Wert muss eine positive Zahl sein – ganz oder gebrochen – oder der spezielle Wert `any`, was bedeutet, dass keine Schritte erforderlich sind und jeder Wert erlaubt ist (vorbehaltlich anderer Einschränkungen wie [`min`](/de/docs/Web/HTML/Reference/Attributes/min) und [`max`](/de/docs/Web/HTML/Reference/Attributes/max)).

Der Standardwert für Schritte bei `number`-Eingaben ist 1, was nur ganze Zahlen zulässt, _es sei denn_, die Basiseinheit für Schritte ist keine ganze Zahl. Der Standardwert für Schritte bei `time` beträgt 60 Sekunden, wobei 900 15 Minuten entspricht.

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

Wenn `any` nicht ausdrücklich festgelegt ist, entsprechen gültige Werte für die `number`-, Datums-/Uhrzeiteingabetypen und `range`-Eingabetypen der Grundlage für Schritte – dem [`min`](/de/docs/Web/HTML/Reference/Attributes/min)-Wert und den Schritten des step-Wertes, bis zum [`max`](/de/docs/Web/HTML/Reference/Attributes/max)-Wert, falls angegeben. Das folgende Beispiel führt dazu, dass jede gerade Ganzzahl, die 10 oder größer ist, gültig ist:

```html
<input type="number" min="10" step="2" />
```

Wird `step` weggelassen, ist jede Ganzzahl gültig, aber Gleitkommazahlen wie 4.2 sind nicht gültig, da `step` standardmäßig auf 1 eingestellt ist. Damit 4.2 gültig ist, müsste:

- entweder `step` auf `any`, 0.1 oder 0.2 eingestellt werden,
- oder der `min`-Wert müsste eine Zahl sein, die mit .2 endet, wie zum Beispiel 0.2, 1.2 oder -5.2.

## Beispiele

### Einfluss von `min` auf `step`

Der Wert von `min` definiert gültige Werte, auch wenn das `step`-Attribut nicht enthalten ist. Dies liegt daran, dass `step` bei dem Eingabetyp `number` standardmäßig auf `1` eingestellt ist.

In diesem Beispiel fügen wir um ungültige Eingaben einen großen roten Rand hinzu:

```css
input:invalid {
  border: solid red 3px;
}
```

Dann definieren wir eine Eingabe mit einem Mindestwert von 1.2 und einem Schrittwert von 2:

```html
<input id="myNumber" name="myNumber" type="number" step="2" min="1.2" />
```

Gültige Werte sind 1.2, 3.2, 5.2, 7.2, 9.2, 11.2 und so weiter. Nur Gleitkommazahlen mit einem ungeraden ganzzahligen Teil und einem Dezimalteil von .2 sind gültig. Der Zahlen-Spinner, falls vorhanden, generiert gültige Gleitkommazahlen von 1.2 und mehr in Schritten von 2.

{{EmbedLiveSample("min_impact_on_step","100%",55)}}

> [!NOTE]
> Wenn die vom Benutzer eingegebenen Daten die Schrittkonfiguration nicht einhalten, wird der Wert in der Einschränkungsvalidierung als ungültig betrachtet und stimmt mit den {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}} Pseudoklassen überein.

Sehen Sie [Client-seitige Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) und [`stepMismatch`](/de/docs/Web/API/ValidityState/stepMismatch) für mehr Informationen.

## Barrierefreiheitsbedenken

Geben Sie Anweisungen, um Benutzern zu helfen, das Formular auszufüllen und einzelne Formularelemente zu verwenden. Geben Sie an, welche Eingaben erforderlich und welche optional sind, sowie Datenformate und andere relevante Informationen. Wenn Sie das `min`-Attribut verwenden, stellen Sie sicher, dass diese Mindestanforderung vom Benutzer verstanden wird. Anweisungen innerhalb des {{htmlelement('label')}} zu geben, kann ausreichend sein. Wenn Sie Anweisungen außerhalb von Labels geben, was flexiblere Positionierung und Gestaltung ermöglicht, sollten Sie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) oder [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) verwenden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`max`](/de/docs/Web/HTML/Reference/Attributes/max)
- [`min`](/de/docs/Web/HTML/Reference/Attributes/min)
- [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation)
- [Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [`validityState.stepMismatch`](/de/docs/Web/API/ValidityState/stepMismatch)
- {{cssxref(':out-of-range')}}
- {{htmlelement('input')}}
- {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/time", "time")}}, {{HTMLElement("input/datetime-local", "datetime-local")}}, {{HTMLElement("input/number", "number")}} und {{HTMLElement("input/range", "range")}} Typen und das {{htmlelement('meter')}}
