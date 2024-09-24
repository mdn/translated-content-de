---
title: "HTML-Attribut: step"
short-title: step
slug: Web/HTML/Attributes/step
l10n:
  sourceCommit: 067a40e4ed27ea6e1f3b8bbfec15cd9dc3078f4c
---

{{HTMLSidebar}}

Das **`step`**-Attribut ist eine Zahl, die die Granularität angibt, der der Wert entsprechen muss, oder das Schlüsselwort `any`. Es ist für die numerischen Eingabetypen gültig, einschließlich {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/time", "time")}}, {{HTMLElement("input/datetime-local", "datetime-local")}}, {{HTMLElement("input/number", "number")}} und {{HTMLElement("input/range", "range")}}.

Das `step` legt das _Schrittintervall_ fest, wenn Sie auf die Auf- und Ab-Pfeilschaltflächen klicken, einen Schieberegler nach links und rechts bewegen oder die verschiedenen Datumstypen validieren. Wenn es nicht ausdrücklich angegeben ist, beträgt der Standardwert für `step` 1 für `number` und `range` und 1 Einheitstyp (Minute, Woche, Monat, Tag) für die Datum-/Uhrzeit-Eingabetypen. Der Wert muss eine positive Zahl – ganzzahlig oder gleitkomma – oder der spezielle Wert `any` sein, was bedeutet, dass keine Schritte impliziert sind und jeder Wert erlaubt ist (abgesehen von anderen Einschränkungen wie [`min`](/de/docs/Web/HTML/Attributes/min) und [`max`](/de/docs/Web/HTML/Attributes/max)).

Der Standard-Schrittwert für `number`-Eingaben ist 1, wodurch nur Ganzzahlen eingegeben werden können, _es sei denn_, die Basis des Schrittes ist keine Ganzzahl. Der Standard-Schrittwert für `time` beträgt 60 Sekunden, wobei 900 15 Minuten entspricht.

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

Wenn `any` nicht ausdrücklich festgelegt ist, sind gültige Werte für die Eingabetypen `number`, Datum/Uhrzeit und `range` gleich der Basis für das Schrittintervall - der [`min`](/de/docs/Web/HTML/Attributes/min)-Wert und die Inkremente des Schrittwerts, bis zum [`max`](/de/docs/Web/HTML/Attributes/max)-Wert, falls angegeben. Das folgende Beispiel ergibt, dass jede gerade Ganzzahl, die 10 oder größer ist, gültig ist:

```html
<input type="number" min="10" step="2" />
```

Wenn `step` weggelassen wird, ist jede ganze Zahl gültig, aber Gleitkommazahlen wie 4.2 sind nicht gültig, da `step` standardmäßig 1 ist. Damit 4.2 gültig ist:

- müsste entweder `step` auf `any`, 0.1 oder 0.2 gesetzt werden,
- oder der `min`-Wert müsste eine Zahl sein, die auf .2 endet, wie 0.2, 1.2 oder -5.2.

## Beispiele

### Auswirkungen von `min` auf step

Der Wert von `min` definiert gültige Werte, auch wenn das `step`-Attribut nicht enthalten ist. Dies liegt daran, dass `step` für den Eingabetyp `number` standardmäßig `1` ist.

In diesem Beispiel fügen wir einen großen roten Rand um ungültige Eingaben hinzu:

```css
input:invalid {
  border: solid red 3px;
}
```

Dann definieren wir ein Eingabefeld mit einem Mindestwert von 1.2 und einem Schrittwert von 2:

```html
<input id="myNumber" name="myNumber" type="number" step="2" min="1.2" />
```

Gültige Werte umfassen 1.2, 3.2, 5.2, 7.2, 9.2, 11.2 und so weiter. Nur Gleitkommazahlen mit einem ungeraden ganzzahligen Teil und einem Dezimalteil von .2 sind gültig. Der Nummernspinner, falls vorhanden, erzeugt gültige Gleitkommazahlen ab 1.2 in Inkrementen von 2.

{{EmbedLiveSample("min_impact_on_step","100%",55)}}

> [!NOTE]
> Wenn die vom Benutzer eingegebenen Daten nicht der Konfiguration der Schritte entsprechen, wird der Wert in der Einschränkungsvalidierung als ungültig angesehen und entspricht den {{cssxref(":invalid")}}- und {{cssxref(":out-of-range")}}-Pseudoklassen.

Siehe [Client-seitige Validierung](/de/docs/Web/HTML/Constraint_validation) und {{domxref("ValidityState.stepMismatch", "stepMismatch")}} für weitere Informationen.

## Barrierefreiheitsaspekte

Stellen Sie Anweisungen bereit, um den Benutzern zu helfen, das Formular auszufüllen und die einzelnen Formularelemente zu verwenden. Geben Sie alle erforderlichen und optionalen Eingaben, Datenformate und andere relevante Informationen an. Wenn das `min`-Attribut verwendet wird, stellen Sie sicher, dass das Mindestanforderung vom Benutzer verstanden wird. Das Bereitstellen von Anweisungen innerhalb des {{htmlelement('label')}} kann ausreichend sein. Wenn Sie Anweisungen außerhalb von Labels geben, was eine flexiblere Positionierung und Gestaltung ermöglicht, sollten Sie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) oder [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) in Betracht ziehen.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [`max`](/de/docs/Web/HTML/Attributes/max)
- [`min`](/de/docs/Web/HTML/Attributes/min)
- [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)
- [Formularvalidierung](/de/docs/Learn/Forms/Form_validation)
- {{domxref('validityState.stepMismatch')}}
- {{cssxref(':out-of-range')}}
- {{htmlelement('input')}}
- {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/time", "time")}}, {{HTMLElement("input/datetime-local", "datetime-local")}}, {{HTMLElement("input/number", "number")}} und {{HTMLElement("input/range", "range")}}, und das {{htmlelement('meter')}}
