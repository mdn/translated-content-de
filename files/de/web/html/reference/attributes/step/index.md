---
title: "HTML-Attribut: step"
short-title: step
slug: Web/HTML/Reference/Attributes/step
l10n:
  sourceCommit: 13856107d2cab5bb9e40de608ee38a5770ef7c4d
---

Das **`step`**-Attribut ist eine Zahl, die die Granularität angibt, an die der Wert halten muss, oder das Stichwort `any`. Es ist gültig für numerische Eingabetypen, einschließlich des Typs {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/time", "time")}}, {{HTMLElement("input/datetime-local", "datetime-local")}}, {{HTMLElement("input/number", "number")}} und {{HTMLElement("input/range", "range")}}.

Das `step`-Attribut legt das _Schrittintervall_ fest, wenn man auf die Schaltflächen zum Erhöhen und Verringern klickt, einen Schieberegler links und rechts bewegt oder die verschiedenen Datumstypen validiert. Wenn es nicht explizit angegeben ist, beträgt der Standardwert von `step` 1 für `number` und `range` sowie 1 Einheitstyp (Minute, Woche, Monat, Tag) für die Datum-/Uhrzeit-Eingabetypen. Der Wert muss eine positive Zahl sein – ganzzahlig oder Gleitkommazahl — oder der spezielle Wert `any`, was bedeutet, dass keine Schritte impliziert sind und jeder Wert erlaubt ist (außer es gibt andere Einschränkungen wie [`min`](/de/docs/Web/HTML/Reference/Attributes/min) und [`max`](/de/docs/Web/HTML/Reference/Attributes/max)).

Nur Werte, die eine ganzzahlige Anzahl von Schritten vom Basiswert des Schritts entfernt sind, sind gültig. Der Basiswert des Schritts ist [`min`](/de/docs/Web/HTML/Reference/Attributes/min), falls angegeben, ansonsten [`value`](/de/docs/Web/HTML/Reference/Elements/input#value), oder `0`, wenn keiner von beiden angegeben ist (außer bei `week`, das einen Standardbasiswert von −259.200.000 hat, was dem Beginn der Woche `1970-W01` entspricht).

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

Wenn `any` nicht explizit gesetzt ist, sind gültige Werte für die Eingabetypen `number`, Datum/Zeit und `range` Eingabetypen gleich dem Basiswert für das Schrittverhalten - dem [`min`](/de/docs/Web/HTML/Reference/Attributes/min)-Wert und Inkrementen des Schrittwerts bis zu den [`max`](/de/docs/Web/HTML/Reference/Attributes/max)-Werten, falls angegeben. Das folgende Beispiel führt dazu, dass alle geraden Ganzzahlen gleich oder größer als 10 gültig sind:

```html
<input type="number" min="10" step="2" />
```

Wenn `step` weggelassen wird, ist jede ganze Zahl gültig, aber Gleitkommazahlen wie 4.2 sind nicht gültig, da der Standardwert von `step` 1 ist. Damit 4.2 gültig ist:

- müsste `step` entweder auf `any`, 0.1 oder 0.2 gesetzt werden,
- oder der `min`-Wert müsste eine Zahl sein, die auf .2 endet, wie z.B. 0.2, 1.2 oder -5.2.

## Beispiele

### Einfluss von `min` auf step

Der Wert von `min` definiert gültige Werte, auch wenn das `step`-Attribut nicht enthalten ist. Dies liegt daran, dass `step` für den Eingabetyp `number` standardmäßig auf `1` gesetzt ist.

In diesem Beispiel fügen wir eine große rote Umrandung um ungültige Eingaben hinzu:

```css
input:invalid {
  border: solid red 3px;
}
```

Dann definieren wir eine Eingabe mit einem Mindestwert von 1.2 und einem Schrittwert von 2:

```html
<input id="myNumber" name="myNumber" type="number" step="2" min="1.2" />
```

Gültige Werte sind 1.2, 3.2, 5.2, 7.2, 9.2, 11.2 und so weiter. Nur Fließkommazahlen mit einem ungeraden ganzzahligen Teil und einem Dezimalteil von .2 sind gültig. Der Zahlenspin, sofern vorhanden, generiert gültige Fließkommazahlen von 1.2 und höher in Schritten von 2.

{{EmbedLiveSample("min_impact_on_step","100%",55)}}

> [!NOTE]
> Wenn die eingegebenen Daten nicht der Schrittkonfiguration entsprechen, wird der Wert bei der Einschränkungsvalidierung als ungültig angesehen und wird den Pseudoklassen {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}} entsprechen.

Für weitere Informationen siehe [Client-side validation](/de/docs/Web/HTML/Guides/Constraint_validation) und [`stepMismatch`](/de/docs/Web/API/ValidityState/stepMismatch).

## Barrierefreiheit

Geben Sie Anweisungen, um den Nutzern zu helfen, das Formular auszufüllen und einzelne Formularelemente zu verwenden. Geben Sie alle erforderlichen und optionalen Eingaben, Datenformate und andere relevante Informationen an. Wenn Sie das `min`-Attribut verwenden, stellen Sie sicher, dass dieses Minimum vom Benutzer verstanden wird. In den {{htmlelement('label')}} Anweisungen bereitzustellen, kann ausreichend sein. Wenn Anleitungen außerhalb von Labels bereitgestellt werden, was flexiblere Positionierungen und Designs ermöglicht, berücksichtigen Sie die Verwendung von [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) oder [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby).

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
- {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/time", "time")}}, {{HTMLElement("input/datetime-local", "datetime-local")}}, {{HTMLElement("input/number", "number")}} und {{HTMLElement("input/range", "range")}} Typen, und das {{htmlelement('meter')}}
