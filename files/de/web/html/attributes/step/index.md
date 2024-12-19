---
title: "HTML-Attribut: step"
short-title: step
slug: Web/HTML/Attributes/step
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{HTMLSidebar}}

Das **`step`**-Attribut ist eine Zahl, die die Granularität angibt, der der Wert entsprechen muss, oder das Schlüsselwort `any`. Es ist für die numerischen Eingabetypen gültig, einschließlich der {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/time", "time")}}, {{HTMLElement("input/datetime-local", "datetime-local")}}, {{HTMLElement("input/number", "number")}} und {{HTMLElement("input/range", "range")}} Typen.

Das `step`-Attribut legt das _Schrittintervall_ fest, wenn die Aufwärts- und Abwärtstaste gedrückt wird, ein Schieberegler links und rechts bewegt wird, und bei der Validierung der verschiedenen Datentypen. Wenn es nicht explizit angegeben wird, ist der Standardwert von `step` für `number` und `range` 1 und ein Einheitstyp (Minute, Woche, Monat, Tag) für die Eingabetypen für Datum/Uhrzeit. Der Wert muss eine positive Zahl sein - ganzzahlig oder gleitend - oder der spezielle Wert `any`, der bedeutet, dass kein Schritt impliziert ist und jeder Wert erlaubt ist (abgesehen von anderen Einschränkungen, wie [`min`](/de/docs/Web/HTML/Attributes/min) und [`max`](/de/docs/Web/HTML/Attributes/max)).

Der Standard-Schrittwert für `number` Eingaben ist 1, wodurch nur ganze Zahlen eingegeben werden dürfen, _es sei denn_, die Schrittbasis ist keine ganze Zahl. Der Standard-Schrittwert für `time` ist 60 Sekunden, wobei 900 gleich 15 Minuten ist.

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

Wenn `any` nicht explizit gesetzt ist, sind gültige Werte für die `number`, Datum/Uhrzeit Eingabetypen und `range` Eingabetypen gleich der Basis für das Schritteverfahren - der [`min`](/de/docs/Web/HTML/Attributes/min) Wert und Erhöhungen des Schrittwerts bis zum [`max`](/de/docs/Web/HTML/Attributes/max) Wert, falls angegeben. Das folgende Beispiel ergibt, dass jede gerade ganze Zahl, die 10 oder größer ist, gültig ist:

```html
<input type="number" min="10" step="2" />
```

Wenn `step` weggelassen wird, ist jede ganze Zahl gültig, aber Gleitkommazahlen wie 4.2 sind nicht gültig, da der Standardwert von `step` 1 ist. Damit 4.2 gültig ist:

- entweder müsste `step` auf `any`, 0.1 oder 0.2 gesetzt werden,
- oder der `min` Wert müsste eine Zahl mit Ende .2 sein, wie 0.2, 1.2 oder -5.2.

## Beispiele

### `min`-Einfluss auf step

Der Wert von `min` definiert gültige Werte, selbst wenn das `step`-Attribut nicht angegeben ist. Dies liegt daran, dass `step` für den `number` Eingabetyp auf `1` voreingestellt ist.

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

Gültige Werte sind 1.2, 3.2, 5.2, 7.2, 9.2, 11.2 und so weiter. Nur Gleitkommazahlen mit einem ungeraden ganzzahligen Teil und einem Dezimalteil von .2 sind gültig. Der Zahlendrehknopf, falls vorhanden, erzeugt gültige Gleitkommawerte von 1.2 und größer, in Schritten von 2.

{{EmbedLiveSample("min_impact_on_step","100%",55)}}

> [!NOTE]
> Wenn die vom Benutzer eingegebenen Daten nicht der Schritte-Konfiguration entsprechen, wird der Wert bei der Einschränkungsvalidierung als ungültig betrachtet und wird den {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}} Pseudoklassen entsprechen.

Siehe [Client-seitige-Validierung](/de/docs/Web/HTML/Constraint_validation) und [`stepMismatch`](/de/docs/Web/API/ValidityState/stepMismatch) für weitere Informationen.

## Barrierefreiheitsbedenken

Geben Sie Anweisungen, die Benutzern helfen, das Formular auszufüllen und einzelne Formularelemente zu verwenden. Geben Sie erforderliche und optionale Eingaben, Datenformate und andere relevante Informationen an. Wenn Sie das `min`-Attribut verwenden, stellen Sie sicher, dass diese Mindestanforderung vom Benutzer verstanden wird. Anweisungen innerhalb des {{htmlelement('label')}} können ausreichend sein. Wenn Anweisungen außerhalb von Labels bereitgestellt werden, was eine flexiblere Positionierung und Gestaltung ermöglicht, sollten Sie in Betracht ziehen, [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) oder [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) zu verwenden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`max`](/de/docs/Web/HTML/Attributes/max)
- [`min`](/de/docs/Web/HTML/Attributes/min)
- [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)
- [Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [`validityState.stepMismatch`](/de/docs/Web/API/ValidityState/stepMismatch)
- {{cssxref(':out-of-range')}}
- {{htmlelement('input')}}
- {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/time", "time")}}, {{HTMLElement("input/datetime-local", "datetime-local")}}, {{HTMLElement("input/number", "number")}} und {{HTMLElement("input/range", "range")}} Typen, sowie das {{htmlelement('meter')}}
