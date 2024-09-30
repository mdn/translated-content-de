---
title: "HTML-Attribut: step"
short-title: step
slug: Web/HTML/Attributes/step
l10n:
  sourceCommit: 067a40e4ed27ea6e1f3b8bbfec15cd9dc3078f4c
---

{{HTMLSidebar}}

Das **`step`**-Attribut ist eine Zahl, die die Granularität angibt, der der Wert entsprechen muss, oder das Schlüsselwort `any`. Es ist für die numerischen Eingabetypen gültig, darunter die Typen {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/time", "time")}}, {{HTMLElement("input/datetime-local", "datetime-local")}}, {{HTMLElement("input/number", "number")}} und {{HTMLElement("input/range", "range")}}.

`step` legt das _Schrittintervall_ fest, wenn die Pfeiltasten oder der Schieberegler bewegt werden, oder validiert die verschiedenen Datentypen. Wird es nicht explizit hinzugefügt, beträgt der Standardwert für `step` 1 für `number` und `range`, und 1 Einheitstyp (Minute, Woche, Monat, Tag) für die Datums-/Zeiteingabetypen. Der Wert muss eine positive Zahl sein - ganzzahlig oder als Gleitkommazahl - oder der spezielle Wert `any`, was bedeutet, dass keine Schritte festgelegt sind und jeder Wert erlaubt ist (unter Berücksichtigung anderer Einschränkungen, wie [`min`](/de/docs/Web/HTML/Attributes/min) und [`max`](/de/docs/Web/HTML/Attributes/max)).

Der Standardwert für `number`-Eingaben ist 1, was nur ganze Zahlen erlaubt, _es sei denn_, die Basis für Schritte ist keine ganze Zahl. Der Standardwert für Schritte bei `time` beträgt 60 Sekunden, wobei 900 gleich 15 Minuten entspricht.

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

Wenn `any` nicht explizit festgelegt wird, sind gültige Werte für die Eingabetypen `number`, Datum/Zeit und `range` gleich dem Basiswert für Schritte - dem [`min`](/de/docs/Web/HTML/Attributes/min)-Wert und den Vielfachen des Schrittwerts, bis zum [`max`](/de/docs/Web/HTML/Attributes/max)-Wert, falls angegeben. Das folgende Beispiel ermöglicht nur gerade Zahlen ab 10:

```html
<input type="number" min="10" step="2" />
```

Wird `step` weggelassen, sind alle ganzzahligen Werte gültig, nicht jedoch Gleitkommazahlen wie 4.2, da `step` standardmäßig auf 1 gesetzt ist. Damit 4.2 gültig ist:

- müsste `step` entweder auf `any`, 0.1 oder 0.2 gesetzt werden,
- oder der `min`-Wert müsste eine Zahl sein, die auf .2 endet, wie 0.2, 1.2 oder -5.2.

## Beispiele

### Einfluss von `min` auf step

Der Wert von `min` definiert gültige Werte, selbst wenn das `step`-Attribut nicht enthalten ist. Das liegt daran, dass `step` standardmäßig auf `1` für den `number`-Eingabetyp gesetzte ist.

In diesem Beispiel fügen wir eine dicke rote Umrandung um ungültige Eingaben hinzu:

```css
input:invalid {
  border: solid red 3px;
}
```

Wir definieren dann eine Eingabe mit einem Mindestwert von 1.2 und einem Schrittwert von 2:

```html
<input id="myNumber" name="myNumber" type="number" step="2" min="1.2" />
```

Gültige Werte sind 1.2, 3.2, 5.2, 7.2, 9.2, 11.2, und so weiter. Nur Fließkommazahlen mit einem ungeraden ganzzahligen Teil und einem Dezimalteil von .2 sind gültig. Der Nummernschieber, falls vorhanden, generiert gültige Fließkomma-Werte von 1.2 und höher, in zwei Schritten.

{{EmbedLiveSample("min_impact_on_step","100%",55)}}

> [!NOTE]
> Wenn die vom Benutzer eingegebenen Daten nicht der Schrittkonfiguration entsprechen, wird der Wert in der Einschränkungsvalidierung als ungültig betrachtet und passt zu den Pseudoklassen {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}}.

Siehe [Client-seitige Validierung](/de/docs/Web/HTML/Constraint_validation) und [`stepMismatch`](/de/docs/Web/API/ValidityState/stepMismatch) für weitere Informationen.

## Barrierefreiheit

Geben Sie Anweisungen, um Benutzern zu helfen, das Formular auszufüllen und die einzelnen Formularelemente zu verwenden. Geben Sie an, welche Eingaben erforderlich und welche optional sind, die Datumsformate und andere relevante Informationen. Wenn Sie das `min`-Attribut verwenden, stellen Sie sicher, dass dieses Mindestanforderung von den Benutzern verstanden wird. Anweisungen innerhalb des {{htmlelement('label')}} können ausreichend sein. Wenn Anweisungen außerhalb von Labels bereitgestellt werden, was eine flexiblere Positionierung und Gestaltung erlaubt, ziehen Sie in Betracht, [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) oder [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) zu verwenden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`max`](/de/docs/Web/HTML/Attributes/max)
- [`min`](/de/docs/Web/HTML/Attributes/min)
- [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)
- [Formularvalidierung](/de/docs/Learn/Forms/Form_validation)
- [`validityState.stepMismatch`](/de/docs/Web/API/ValidityState/stepMismatch)
- {{cssxref(':out-of-range')}}
- {{htmlelement('input')}}
- {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/time", "time")}}, {{HTMLElement("input/datetime-local", "datetime-local")}}, {{HTMLElement("input/number", "number")}} und {{HTMLElement("input/range", "range")}} Typen und das {{htmlelement('meter')}}-Element.
