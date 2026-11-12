---
title: HTML-Attribut `step`
short-title: step
slug: Web/HTML/Reference/Attributes/step
l10n:
  sourceCommit: d16355b5ec024c990cff93dc36232c95d944bfce
---

Das Attribut **`step`** ist eine Zahl, die die Schrittweite angibt, an die sich der Wert halten muss, oder das Schlüsselwort `any`. Es ist für numerische Eingabetypen gültig, darunter {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/time", "time")}}, {{HTMLElement("input/datetime-local", "datetime-local")}}, {{HTMLElement("input/number", "number")}} und {{HTMLElement("input/range", "range")}}.

`step` legt das _Schrittintervall_ fest, das beim Klicken auf die Auf- und Ab-Schaltflächen eines Zahlenfelds, beim Verschieben eines Schiebereglers und bei der Validierung der verschiedenen Datumstypen verwendet wird. Wird `step` nicht ausdrücklich angegeben, beträgt der Standardwert für `number` und `range` 1 und für Datums- und Zeiteingabetypen 1 Einheit des jeweiligen Typs (Minute, Woche, Monat oder Tag). Der Wert muss eine positive Zahl – eine Ganzzahl oder Gleitkommazahl – oder der spezielle Wert `any` sein. `any` bedeutet, dass keine Schrittweite vorgegeben ist und jeder Wert zulässig ist, sofern keine anderen Einschränkungen wie [`min`](/de/docs/Web/HTML/Reference/Attributes/min) und [`max`](/de/docs/Web/HTML/Reference/Attributes/max) gelten.

Gültig sind nur Werte, die vom Ausgangswert aus eine ganzzahlige Anzahl von Schritten entfernt sind. Als Ausgangswert dient [`min`](/de/docs/Web/HTML/Reference/Attributes/min), falls angegeben, andernfalls [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) oder `0`, wenn keines von beiden angegeben ist. Eine Ausnahme bildet `week`: Hier beträgt der standardmäßige Ausgangswert −259.200.000 und entspricht dem Beginn der Woche `1970-W01`.

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

Wenn `any` nicht ausdrücklich festgelegt ist, sind für die Eingabetypen `number`, Datum/Zeit und `range` der Ausgangswert und dessen Vielfache der Schrittweite gültig: beginnend bei [`min`](/de/docs/Web/HTML/Reference/Attributes/min) bis zum Wert von [`max`](/de/docs/Web/HTML/Reference/Attributes/max), sofern dieser angegeben ist. Im folgenden Beispiel ist jede gerade Ganzzahl ab 10 gültig:

```html
<input type="number" min="10" step="2" />
```

Wenn `step` weggelassen wird, ist jede Ganzzahl gültig, Gleitkommazahlen wie 4.2 dagegen nicht, da der Standardwert von `step` 1 ist. Damit 4.2 gültig ist, müsste:

- `step` auf `any`, 0.1 oder 0.2 gesetzt werden oder
- der Wert von `min` eine Zahl mit dem Dezimalteil .2 sein, beispielsweise 0.2, 1.2 oder -5.2.

## Hinweise zur Barrierefreiheit

Geben Sie Anweisungen, die Nutzern helfen, das Formular auszufüllen und die einzelnen Formularelemente zu verwenden. Kennzeichnen Sie erforderliche und optionale Eingaben, Datenformate und andere relevante Informationen. Wenn Sie das Attribut `min` verwenden, stellen Sie sicher, dass Nutzer den Mindestwert verstehen. Anweisungen innerhalb des {{htmlelement('label')}} können dafür ausreichen. Wenn Sie Anweisungen außerhalb von Labels platzieren, um mehr Spielraum bei Positionierung und Gestaltung zu haben, sollten Sie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) oder [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) verwenden.

## Beispiele

### Einfluss von `min` auf die Schrittweite

Der Wert von `min` bestimmt, welche Werte gültig sind, auch wenn das Attribut `step` nicht angegeben ist. Das liegt daran, dass `step` für den Eingabetyp `number` standardmäßig `1` beträgt.

In diesem Beispiel versehen wir ungültige Eingaben mit einem breiten roten Rahmen:

```css
input:invalid {
  border: solid red 3px;
}
```

Anschließend definieren wir ein Eingabefeld mit einem Mindestwert von 1.2 und einer Schrittweite von 2:

```html
<input id="myNumber" name="myNumber" type="number" step="2" min="1.2" />
```

Gültige Werte sind 1.2, 3.2, 5.2, 7.2, 9.2, 11.2 und so weiter. Gültig sind nur Gleitkommazahlen mit einem ungeraden ganzzahligen Anteil und dem Dezimalteil .2. Falls Auf- und Ab-Schaltflächen für das Zahlenfeld vorhanden sind, erzeugen sie gültige Werte ab 1.2 in Schritten von 2.

{{EmbedLiveSample("min_impact_on_step","100%",55)}}

> [!NOTE]
> Wenn die von Nutzern eingegebenen Daten nicht der festgelegten Schrittweite entsprechen, gilt der Wert bei der Constraint-Validierung als ungültig und entspricht den Pseudoklassen {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}}.

Weitere Informationen finden Sie unter [Clientseitige Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) und [`stepMismatch`](/de/docs/Web/API/ValidityState/stepMismatch).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`max`](/de/docs/Web/HTML/Reference/Attributes/max)
- [`min`](/de/docs/Web/HTML/Reference/Attributes/min)
- [Constraint-Validierung](/de/docs/Web/HTML/Guides/Constraint_validation)
- [Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [`validityState.stepMismatch`](/de/docs/Web/API/ValidityState/stepMismatch)
- {{cssxref(':out-of-range')}}
- {{htmlelement('input')}}
- Die Typen {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/time", "time")}}, {{HTMLElement("input/datetime-local", "datetime-local")}}, {{HTMLElement("input/number", "number")}} und {{HTMLElement("input/range", "range")}} sowie {{htmlelement('meter')}}
