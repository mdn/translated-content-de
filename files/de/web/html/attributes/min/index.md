---
title: "HTML-Attribut: min"
short-title: min
slug: Web/HTML/Attributes/min
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{HTMLSidebar}}

Das **`min`**-Attribut definiert den minimal akzeptablen und gültigen Wert für das Eingabefeld, das dieses Attribut enthält. Wenn der [`value`](/de/docs/Web/HTML/Element/input#value) des Elements kleiner als dieser Wert ist, schlägt die [Validierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) des Elements fehl. Dieser Wert muss kleiner oder gleich dem Wert des `max`-Attributs sein.

Einige Eingabetypen haben einen standardmäßigen Minimalwert. Wenn kein standardmäßiger Minimalwert vorhanden ist und für `min` ein Wert angegeben wird, der nicht in eine gültige Zahl konvertiert werden kann (oder kein Mindestwert festgelegt ist), hat die Eingabe keinen Mindestwert.

Es ist gültig für Eingabetypen einschließlich: {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/time", "time")}}, {{HTMLElement("input/datetime-local", "datetime-local")}}, {{HTMLElement("input/number", "number")}} und {{HTMLElement("input/range", "range")}} Typen sowie für das {{htmlelement('meter')}}-Element.

## Syntax

<table class="no-markdown">
  <caption>
    Syntax für
    <code>min</code>
    Werte nach Eingabe
    <code>type</code>
  </caption>
  <thead>
    <tr>
      <th>Eingabetyp</th>
      <th>Syntax</th>
      <th>Beispiel</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{HTMLElement("input/date", "date")}}</td>
      <td><code>yyyy-mm-dd</code></td>
      <td><code>&#x3C;input type="date" min="2019-12-25" step="1"></code></td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/month", "month")}}</td>
      <td><code>yyyy-mm</code></td>
      <td><code>&#x3C;input type="month" min="2019-12" step="12"></code></td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/week", "week")}}</td>
      <td><code>yyyy-W##</code></td>
      <td><code>&#x3C;input type="week" min="2019-W23" step=""></code></td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/time", "time")}}</td>
      <td><code>HH:mm</code></td>
      <td><code>&#x3C;input type="time" min="09:00" step="900"></code></td>
    </tr>
    <tr>
      <td>
        {{HTMLElement("input/datetime-local", "datetime-local")}}
      </td>
      <td><code>yyyy-mm-ddTHH:mm</code></td>
      <td>
        <code>&#x3C;input type="datetime-local" min="2019-12-25T19:30"></code>
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/number", "number")}}</td>
      <td><a href="/de/docs/Web/CSS/number">&#x3C;number></a></td>
      <td>
        <code>&#x3C;input type="number" min="0" step="5" max="100"></code>
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/range", "range")}}</td>
      <td><a href="/de/docs/Web/CSS/number">&#x3C;number></a></td>
      <td>
        <code>&#x3C;input type="range" min="60" step="5" max="100"></code>
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Wenn die von der Benutzerin oder dem Benutzer eingegebenen Daten nicht dem festgelegten min-Wert entsprechen, wird der Wert bei einer Einschränkungsvalidierung als ungültig betrachtet und wird die {{cssxref(':invalid')}} und {{cssxref(':out-of-range')}} Pseudo-Klassen erfüllen.

Weitere Informationen finden Sie unter [Frontend-Validierung](/de/docs/Web/HTML/Constraint_validation) und [`rangeUnderflow`](/de/docs/Web/API/ValidityState/rangeUnderflow).

Für das {{htmlelement('meter')}}-Element definiert das `min`-Attribut die untere numerische Grenze des gemessenen Bereichs. Diese muss kleiner als der maximale Wert ([`max`](/de/docs/Web/HTML/Attributes/max) Attribut) sein, falls angegeben. In beiden Fällen, falls weggelassen, wird der Wert standardmäßig auf 1 gesetzt.

<table class="no-markdown">
  <caption>
    Syntax für
    <code>min</code>
    Werte für andere Elemente
  </caption>
  <thead>
    <tr>
      <th>Eingabetyp</th>
      <th>Syntax</th>
      <th>Beispiel</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{HTMLElement("meter")}}</td>
      <td><a href="/de/docs/Web/CSS/number">&#x3C;number></a></td>
      <td>
        <code
          >&#x3C;meter id="fuel" min="0" max="100" low="33" high="66"
          optimum="80" value="40"> bei 40/100&#x3C;/meter></code
        >
      </td>
    </tr>
  </tbody>
</table>

### Auswirkung auf step

Der Wert von `min` und `step` definiert, welche Werte gültig sind, auch wenn das `step`-Attribut nicht einbezogen wird, da `step` standardmäßig auf `1` gesetzt ist.

Wir fügen einen großen roten Rahmen um ungültige Eingaben hinzu:

```css
input:invalid {
  border: solid red 3px;
}
```

Definieren Sie dann eine Eingabe mit einem Mindestwert von 7.2, wobei das step-Attribut weggelassen wird, in welchem Fall es standardmäßig auf 1 gesetzt wird.

```html
<input id="myNumber" name="myNumber" type="number" min="7.2" value="8" />
```

Da `step` standardmäßig 1 ist, sind gültige Werte `7.2`, `8.2`, `9.2` und so weiter. Der Wert 8 ist nicht gültig. Da wir einen ungültigen Wert aufgenommen haben, zeigen unterstützende Browser den Wert als ungültig an.

{{EmbedLiveSample("Impact_on_step",200,55)}}

Wenn nicht explizit eingeschlossen, ist `step` standardmäßig 1 für `number` und `range`, und 1 Einheitstyp (Sekunde, Woche, Monat, Tag) für die Datums-/Uhrzeit-Eingabetypen.

## Barrierefreiheit

Geben Sie Anweisungen, um Benutzerinnen und Benutzern zu helfen, das Formular auszufüllen und einzelne Formularsteuerungen zu verwenden. Geben Sie erforderliche und optionale Eingaben, Datenformate und andere relevante Informationen an. Wenn Sie das `min`-Attribut verwenden, stellen Sie sicher, dass die Benutzerin oder der Benutzer diese Mindestanforderung versteht. Anweisungen innerhalb des {{htmlelement('label')}} können ausreichend sein. Wenn Sie Anweisungen außerhalb von Labels bereitstellen, was eine flexiblere Positionierung und Gestaltung ermöglicht, sollten Sie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) oder [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) verwenden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`step`](/de/docs/Web/HTML/Attributes/step)
- [`max`](/de/docs/Web/HTML/Attributes/max)
- andere meter-Attribute: [`low`](/de/docs/Web/HTML/Attributes/low), [`high`](/de/docs/Web/HTML/Attributes/high), [`optimum`](/de/docs/Web/HTML/Attributes/optimum)
- [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)
- [Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [`validityState.rangeUnderflow`](/de/docs/Web/API/ValidityState/rangeUnderflow)
- {{cssxref(':out-of-range')}}
- {{htmlelement('input')}}
- {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/time", "time")}}, {{HTMLElement("input/datetime-local", "datetime-local")}}, {{HTMLElement("input/number", "number")}} und {{HTMLElement("input/range", "range")}} Typen sowie das {{htmlelement('meter')}}
