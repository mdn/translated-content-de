---
title: "HTML-Attribut: step"
short-title: step
slug: Web/HTML/Attributes/step
l10n:
  sourceCommit: 067a40e4ed27ea6e1f3b8bbfec15cd9dc3078f4c
---

{{HTMLSidebar}}

Das **`step`**-Attribut ist eine Zahl, die die Granularität angibt, an die der Wert angepasst werden muss, oder das Schlüsselwort `any`. Es ist gültig für die numerischen Eingabetypen, einschließlich der {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/time", "time")}}, {{HTMLElement("input/datetime-local", "datetime-local")}}, {{HTMLElement("input/number", "number")}} und {{HTMLElement("input/range", "range")}} Typen.

Das `step`-Attribut legt das _Intervall_ fest, wenn die Auf- und Ab-Spinner-Tasten gedrückt werden, ein Schieberegler bei einem `range` nach links und rechts bewegt wird und die verschiedenen Datumstypen validiert werden. Wird es nicht explizit angegeben, ist der Standardwert von `step` 1 für `number` und `range` und 1 Einheit (Minute, Woche, Monat, Tag) für die Datum/Zeit-Eingabetypen. Der Wert muss eine positive Zahl - Ganzzahl oder Gleitkomma - sein oder der spezielle Wert `any`, was bedeutet, dass kein Schritt vorgesehen ist und jeder Wert zulässig ist (unter Vorbehalt anderer Einschränkungen, wie z.B. [`min`](/de/docs/Web/HTML/Attributes/min) und [`max`](/de/docs/Web/HTML/Attributes/max)).

Der Standard-Schrittwert für `number` Eingaben ist 1, wodurch nur Ganzzahlen eingegeben werden können, _es sei denn_, die Schritt-Basis ist keine Ganzzahl. Der Standard-Schrittwert für `time` beträgt 60 Sekunden, wobei 900 gleich 15 Minuten entspricht.

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

Wenn `any` nicht explizit gesetzt ist, sind gültige Werte für die Eingabetypen `number`, Datum/Zeit und `range` gleich dem Basiswert für Schritte - dem [`min`](/de/docs/Web/HTML/Attributes/min)-Wert und Vielfachen des Schrittwerts, bis zum [`max`](/de/docs/Web/HTML/Attributes/max)-Wert, wenn dieser angegeben ist. Das folgende Beispiel resultiert darin, dass jede gerade Ganzzahl ab 10 gültig ist:

```html
<input type="number" min="10" step="2" />
```

Wenn `step` weggelassen wird, ist jede Ganzzahl gültig, aber Gleitkommazahlen wie 4.2 sind nicht gültig, da `step` standardmäßig 1 ist. Damit 4.2 gültig ist:

- muss entweder `step` auf `any`, 0.1 oder 0.2 gesetzt werden,
- oder der `min`-Wert muss eine Zahl sein, die auf .2 endet, wie 0.2, 1.2 oder -5.2.

## Beispiele

### Einfluss von `min` auf step

Der Wert von `min` definiert gültige Werte, auch wenn das `step`-Attribut nicht enthalten ist. Dies liegt daran, dass `step` standardmäßig auf `1` für den Eingabetyp `number` gesetzt ist.

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

Gültige Werte sind 1.2, 3.2, 5.2, 7.2, 9.2, 11.2 und so weiter. Nur Gleitkommazahlen mit einer ungeraden ganzzahligen Komponente und einem Dezimalanteil von .2 sind gültig. Der Zahlendreher, falls vorhanden, erzeugt gültige Gleitkommazahlen von 1.2 und mehr in Schritten von 2.

{{EmbedLiveSample("min_impact_on_step","100%",55)}}

> [!NOTE]
> Wenn die vom Benutzer eingegebenen Daten nicht der Schritt-Konfiguration entsprechen, wird der Wert als ungültig im Rahmen der Einschränkungsvalidierung betrachtet und entspricht den Pseudoklassen {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}}.

Siehe [Client-seitige Validierung](/de/docs/Web/HTML/Constraint_validation) und [`stepMismatch`](/de/docs/Web/API/ValidityState/stepMismatch) für weitere Informationen.

## Barrierefreiheitshinweise

Geben Sie Anweisungen, um den Nutzern zu helfen, das Formular auszufüllen und einzelne Formularsteuerelemente zu verwenden. Kennzeichnen Sie erforderliche und optionale Eingaben, Datenformate und andere relevante Informationen. Wenn Sie das `min`-Attribut verwenden, stellen Sie sicher, dass diese Mindestanforderung vom Benutzer verstanden wird. Das Bereitstellen von Anweisungen innerhalb des {{htmlelement('label')}} könnte ausreichend sein. Wenn Anweisungen außerhalb von Labels bereitgestellt werden, was eine flexiblere Positionierung und Gestaltung erlaubt, sollten Sie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) oder [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) verwenden.

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
- {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/time", "time")}}, {{HTMLElement("input/datetime-local", "datetime-local")}}, {{HTMLElement("input/number", "number")}} und {{HTMLElement("input/range", "range")}} Typen, und das {{htmlelement('meter')}}
