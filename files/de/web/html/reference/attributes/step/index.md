---
title: "HTML-Attribut: step"
short-title: step
slug: Web/HTML/Reference/Attributes/step
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

Das **`step`**-Attribut ist eine Zahl, die die Granularität angibt, der der Wert entsprechen muss, oder das Schlüsselwort `any`. Es ist gültig für numerische Eingabetypen, einschließlich der {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/time", "time")}}, {{HTMLElement("input/datetime-local", "datetime-local")}}, {{HTMLElement("input/number", "number")}} und {{HTMLElement("input/range", "range")}} Typen.

Das `step`-Attribut legt das _Intervall_ fest, wenn man auf die Aufwärts- und Abwärtspfeile klickt, einen Schieberegler nach links und rechts bewegt oder die verschiedenen Datumstypen validiert. Wenn es nicht explizit angegeben ist, ist der Standardwert von `step` 1 für `number` und `range` und 1 Einheitentyp (Minute, Woche, Monat, Tag) für die Datum/Uhrzeit-Eingabetypen. Der Wert muss eine positive Zahl sein - ganz oder gebrochen - oder der Spezialwert `any`, was bedeutet, dass kein Schrittintervall festgelegt ist und jeder Wert erlaubt ist (es sei denn, es bestehen andere Einschränkungen wie [`min`](/de/docs/Web/HTML/Reference/Attributes/min) und [`max`](/de/docs/Web/HTML/Reference/Attributes/max)).

Der Standard-Schrittwert für `number`-Eingaben ist 1, was nur ganzzahlige Eingaben erlaubt, _es sei denn_, die Basis für den Schritt ist keine Ganzzahl. Der Standard-Schrittwert für `time` ist 60 Sekunden, wobei 900 15 Minuten entspricht.

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

Wenn `any` nicht explizit gesetzt ist, sind gültige Werte für die `number`, Datum/Uhrzeit- und `range`-Eingabetypen gleich der Basis für den Schritt - dem [`min`](/de/docs/Web/HTML/Reference/Attributes/min)-Wert und den Inkrementen des Schrittwerts, bis zum [`max`](/de/docs/Web/HTML/Reference/Attributes/max)-Wert, falls angegeben. Das folgende Beispiel führt dazu, dass jede gerade ganze Zahl, die 10 oder größer ist, gültig ist:

```html
<input type="number" min="10" step="2" />
```

Wenn `step` weggelassen wird, ist jede ganze Zahl gültig, aber Gleitkommazahlen wie 4.2 sind nicht gültig, da `step` standardmäßig auf 1 gesetzt ist. Damit 4.2 gültig ist:

- entweder muss `step` auf `any`, 0.1 oder 0.2 gesetzt werden,
- oder der `min`-Wert muss eine Zahl sein, die auf .2 endet, wie etwa 0.2, 1.2 oder -5.2.

## Beispiele

### Einfluss von `min` auf step

Der Wert von `min` definiert gültige Werte, selbst wenn das `step`-Attribut nicht enthalten ist. Dies liegt daran, dass `step` für den `number`-Eingabetyp standardmäßig auf `1` gesetzt ist.

In diesem Beispiel fügen wir einen großen roten Rahmen um ungültige Eingaben hinzu:

```css
input:invalid {
  border: solid red 3px;
}
```

Dann definieren wir eine Eingabe mit einem Mindestwert von 1.2 und einem Schrittwert von 2:

```html
<input id="myNumber" name="myNumber" type="number" step="2" min="1.2" />
```

Gültige Werte sind 1.2, 3.2, 5.2, 7.2, 9.2, 11.2 usw. Nur Gleitkommazahlen mit einer ungeraden ganzzahligen und einem Dezimalteil von .2 sind gültig. Der Zahlenspin, falls vorhanden, generiert gültige Gleitkommazahlen von 1.2 und größeren, in Schritten von 2.

{{EmbedLiveSample("min_impact_on_step","100%",55)}}

> [!NOTE]
> Wenn die vom Benutzer eingegebenen Daten nicht der Schritt-Konfiguration entsprechen, wird der Wert bei der Constraints-Überprüfung als ungültig angesehen und entspricht den Pseudoklassen {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}}.

Siehe [Client-seitige Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) und [`stepMismatch`](/de/docs/Web/API/ValidityState/stepMismatch) für weitere Informationen.

## Barrierefreiheitsaspekte

Bieten Sie Anweisungen, um den Nutzern zu helfen, das Formular zu vervollständigen und einzelne Formularelemente zu verwenden. Geben Sie erforderliche und optionale Eingaben, Datenformate und andere relevante Informationen an. Wenn das `min`-Attribut verwendet wird, stellen Sie sicher, dass diese Mindestanforderung vom Benutzer verstanden wird. Das Bereitstellen von Anweisungen innerhalb des {{htmlelement('label')}} kann ausreichend sein. Wenn Sie Anweisungen außerhalb von Labels bereitstellen, was eine flexiblere Positionierung und Gestaltung ermöglicht, sollten Sie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) oder [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) verwenden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`max`](/de/docs/Web/HTML/Reference/Attributes/max)
- [`min`](/de/docs/Web/HTML/Reference/Attributes/min)
- [Constraints-Validierung](/de/docs/Web/HTML/Guides/Constraint_validation)
- [Formular-Validierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [`validityState.stepMismatch`](/de/docs/Web/API/ValidityState/stepMismatch)
- {{cssxref(':out-of-range')}}
- {{htmlelement('input')}}
- {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/time", "time")}}, {{HTMLElement("input/datetime-local", "datetime-local")}}, {{HTMLElement("input/number", "number")}} und {{HTMLElement("input/range", "range")}} Typen, und das {{htmlelement('meter')}}
