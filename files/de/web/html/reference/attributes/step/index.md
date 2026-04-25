---
title: "`step` HTML-Attribut"
short-title: step
slug: Web/HTML/Reference/Attributes/step
l10n:
  sourceCommit: b50ed7ac1c2ca21b4b5cfb594474a17da3f2e6c2
---

Das **`step`**-Attribut ist eine Zahl, die die Granularität bestimmt, an die sich der Wert halten muss, oder das Schlüsselwort `any`. Es ist gültig für die numerischen Eingabetypen, einschließlich der {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/time", "time")}}, {{HTMLElement("input/datetime-local", "datetime-local")}}, {{HTMLElement("input/number", "number")}} und {{HTMLElement("input/range", "range")}} Typen.

Das `step` legt das _Schrittintervall_ fest, wenn Sie Auf- und Ab-Pfeiltasten verwenden, einen Schieberegler nach links oder rechts bewegen und die verschiedenen Datentypen validieren. Wenn es nicht explizit enthalten ist, beträgt der Standardwert von `step` 1 für `number` und `range` und 1 Einheitstyp (Minute, Woche, Monat, Tag) für die Datums-/Uhrzeit-Eingabetypen. Der Wert muss eine positive Zahl - Ganzzahl oder Gleitkommazahl - oder der spezielle Wert `any` sein, was bedeutet, dass keine Schritte impliziert werden und jeder Wert erlaubt ist (abgesehen von anderen Einschränkungen wie [`min`](/de/docs/Web/HTML/Reference/Attributes/min) und [`max`](/de/docs/Web/HTML/Reference/Attributes/max)).

Nur Werte, die eine ganze Anzahl von Schritten vom Basisschrittwert entfernt sind, sind gültig. Der Basisschrittwert ist [`min`](/de/docs/Web/HTML/Reference/Attributes/min), wenn angegeben, ansonsten [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) oder `0`, wenn keiner angegeben ist (außer für `week`, das einen Standard-Basisschrittwert von −259.200.000 hat, was den Beginn der Woche `1970-W01` darstellt).

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

Wenn `any` nicht explizit gesetzt ist, sind gültige Werte für die `number`, Datums-/Uhrzeit- und `range`-Eingabetypen gleich dem Basiswert für die Schritte - dem [`min`](/de/docs/Web/HTML/Reference/Attributes/min)-Wert und Inkrementen des `step`-Wertes, bis zu dem, wenn angegeben, [`max`](/de/docs/Web/HTML/Reference/Attributes/max)-Wert. Das folgende Beispiel führt dazu, dass jeder gerade ganzzahlige Wert ab 10 als gültig betrachtet wird:

```html
<input type="number" min="10" step="2" />
```

Wenn `step` weggelassen wird, ist jede ganze Zahl gültig, aber Gleitkommazahlen wie 4.2 sind nicht gültig, da `step` standardmäßig 1 ist. Damit 4.2 gültig ist:

- muss entweder `step` auf `any`, 0.1 oder 0.2 gesetzt werden,
- oder der `min`-Wert muss eine Zahl sein, die auf .2 endet, wie 0.2, 1.2 oder -5.2.

## Beispiele

### `min`-Einfluss auf step

Der Wert von `min` definiert gültige Werte, auch wenn das `step`-Attribut nicht enthalten ist. Dies liegt daran, dass `step` für den `number`-Eingabetyp standardmäßig `1` ist.

In diesem Beispiel fügen wir einen großen roten Rand um ungültige Eingaben hinzu:

```css
input:invalid {
  border: solid red 3px;
}
```

Wir definieren dann eine Eingabe mit einem Mindestwert von 1.2 und einem Schrittwert von 2:

```html
<input id="myNumber" name="myNumber" type="number" step="2" min="1.2" />
```

Gültige Werte umfassen 1.2, 3.2, 5.2, 7.2, 9.2, 11.2 und so weiter. Nur Gleitkommazahlen mit einer ungeraden Ganzzahl als Ganzzahlteil und einem Dezimalteil von .2 sind gültig. Der Zahlenspinne, falls vorhanden, erzeugt gültige Gleitkommawerte ab 1.2 und größer in Schritten von 2.

{{EmbedLiveSample("min_impact_on_step","100%",55)}}

> [!NOTE]
> Wenn die vom Benutzer eingegebenen Daten nicht mit der Schritt-Konfiguration übereinstimmen, wird der Wert als ungültig in der Einschränkungsvalidierung betrachtet und stimmt mit den Pseudoklassen {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}} überein.

Siehe [Clientseitige Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) und [`stepMismatch`](/de/docs/Web/API/ValidityState/stepMismatch) für weitere Informationen.

## Barrierefreiheitsbedenken

Stellen Sie Anweisungen bereit, die Benutzern helfen zu verstehen, wie sie das Formular ausfüllen und einzelne Formularelemente verwenden können. Geben Sie an, welche Eingaben erforderlich und welche optional sind, sowie Datenformate und andere relevante Informationen. Wenn Sie das `min`-Attribut verwenden, stellen Sie sicher, dass dieses Mindestanforderung vom Benutzer verstanden wird. Anweisungen innerhalb des {{htmlelement('label')}} könnten ausreichend sein. Wenn Sie Anweisungen außerhalb von Labels bereitstellen, was eine flexiblere Positionierung und Gestaltung ermöglicht, sollten Sie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) oder [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) in Betracht ziehen.

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
- {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/time", "time")}}, {{HTMLElement("input/datetime-local", "datetime-local")}}, {{HTMLElement("input/number", "number")}} und {{HTMLElement("input/range", "range")}} Typen, sowie das {{htmlelement('meter')}}
