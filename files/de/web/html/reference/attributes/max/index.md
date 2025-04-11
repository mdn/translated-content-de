---
title: "HTML-Attribut: max"
short-title: max
slug: Web/HTML/Reference/Attributes/max
l10n:
  sourceCommit: f4372ac9926fc2a1cbe408dae02b381b7f1909da
---

{{HTMLSidebar}}

Das **`max`**-Attribut definiert den maximal akzeptablen und gültigen Wert für die Eingabe, die das Attribut enthält. Wenn der [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) des Elements größer als dieser Wert ist, schlägt die [Validierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) des Elements fehl. Dieser Wert muss größer oder gleich dem Wert des [`min`](/de/docs/Web/HTML/Reference/Attributes/min) Attributs sein. Ist das `max`-Attribut vorhanden, aber nicht angegeben oder ungültig, wird kein `max`-Wert angewendet. Wenn das `max`-Attribut gültig ist und ein nicht-leerer Wert größer als der maximal vom `max`-Attribut erlaubte Wert ist, verhindert die Eingabeeinschränkungsvalidierung, dass das Formular abgeschickt wird.

Das `max`-Attribut ist gültig für numerische Eingabetypen, einschließlich der {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/time", "time")}}, {{HTMLElement("input/datetime-local", "datetime-local")}}, {{HTMLElement("input/number", "number")}} und {{HTMLElement("input/range", "range")}} Typen, und sowohl das {{htmlelement('progress')}} als auch das {{htmlelement('meter')}} Element. Es ist eine Zahl, die angibt, welchen höchsten positiven Wert ein Formularsteuerelement als gültig betrachtet werden soll.

Wenn der Wert den erlaubten Maximalwert überschreitet, ist der [`validityState.rangeOverflow`](/de/docs/Web/API/ValidityState/rangeOverflow) true und das Steuerelement wird durch die {{cssxref(':out-of-range')}} und {{cssxref(':invalid')}} Pseudoklassen erfasst.

## Syntax

<table class="no-markdown">
  <caption>
    Syntax für
    <code>max</code>
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
      <td><code>&#x3C;input type="date" max="2019-12-25" step="1"></code></td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/month", "month")}}</td>
      <td><code>yyyy-mm</code></td>
      <td><code>&#x3C;input type="month" max="2019-12" step="12"></code></td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/week", "week")}}</td>
      <td><code>yyyy-W##</code></td>
      <td><code>&#x3C;input type="week" max="2019-W23" step=""></code></td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/time", "time")}}</td>
      <td><code>HH:mm</code></td>
      <td><code>&#x3C;input type="time" max="17:00" step="900"></code></td>
    </tr>
    <tr>
      <td>
        {{HTMLElement("input/datetime-local", "datetime-local")}}
      </td>
      <td><code>yyyy-mm-ddTHH:mm</code></td>
      <td>
        <code>&#x3C;input type="datetime-local" max="2019-12-25T23:59"></code>
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
> Wenn die vom Benutzer eingegebenen Daten nicht dem festgelegten Höchstwert entsprechen, wird der Wert in der Eingabeeinschränkungsvalidierung als ungültig betrachtet und entspricht den {{cssxref(':invalid')}} und {{cssxref(':out-of-range')}} Pseudoklassen.

Weitere Informationen finden Sie in der [clientseitigen Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) und [`rangeOverflow`](/de/docs/Web/API/ValidityState/rangeOverflow).

Für das {{htmlelement('progress')}}-Element beschreibt das `max`-Attribut, wie viel Arbeit die durch das `progress`-Element angezeigte Aufgabe erfordert. Ist es vorhanden, muss es einen Wert größer als null haben und eine gültige Gleitkommazahl sein. Für das {{htmlelement('meter')}}-Element definiert das `max`-Attribut die obere numerische Begrenzung des gemessenen Bereichs. Dieser Wert muss größer als der Mindestwert ([`min`](/de/docs/Web/HTML/Reference/Attributes/min) Attribut) sein, falls angegeben. In beiden Fällen wird der Wert, wenn er weggelassen wird, standardmäßig auf 1 gesetzt.

<table class="no-markdown">
  <caption>
    Syntax für
    <code>max</code>
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
      <td>{{HTMLElement("progress")}}</td>
      <td><a href="/de/docs/Web/CSS/number">&#x3C;number></a></td>
      <td>
        <code
          >&#x3C;progress id="file" max="100" value="70"> 70%
          &#x3C;/progress></code
        >
      </td>
    </tr>
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

## Barrierefreiheit

Geben Sie Anweisungen, um Nutzern zu helfen, das Formular auszufüllen und einzelne Formularsteuerelemente zu verwenden. Geben Sie an, welche Eingaben erforderlich und welche optional sind, Datenformate und andere relevante Informationen. Wenn Sie das `max`-Attribut verwenden, stellen Sie sicher, dass diese maximale Anforderung vom Benutzer verstanden wird. Anweisungen innerhalb des {{htmlelement('label')}} können ausreichend sein. Wenn Sie Anweisungen außerhalb von Labels bereitstellen, was eine flexiblere Positionierung und Gestaltung ermöglicht, sollten Sie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) oder [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) in Betracht ziehen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`step`](/de/docs/Web/HTML/Reference/Attributes/step)
- [`min`](/de/docs/Web/HTML/Reference/Attributes/min)
- andere Meter-Attribute: [`low`](/de/docs/Web/HTML/Reference/Attributes/low), [`high`](/de/docs/Web/HTML/Reference/Attributes/high), [`optimum`](/de/docs/Web/HTML/Reference/Attributes/optimum)
- [Einschränkungen Validierung](/de/docs/Web/HTML/Guides/Constraint_validation)
- [Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [`validityState.rangeOverflow`](/de/docs/Web/API/ValidityState/rangeOverflow)
- {{cssxref(':out-of-range')}}
- {{htmlelement('input')}}
- {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/time", "time")}}, {{HTMLElement("input/datetime-local", "datetime-local")}}, {{HTMLElement("input/number", "number")}} und {{HTMLElement("input/range", "range")}} Typen, und das {{htmlelement('meter')}}
