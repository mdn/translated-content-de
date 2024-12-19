---
title: "HTML-Attribut: max"
short-title: max
slug: Web/HTML/Attributes/max
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{HTMLSidebar}}

Das **`max`**-Attribut definiert den maximal zulässigen Wert, der für das Eingabefeld mit dem Attribut akzeptabel und gültig ist. Wenn der [`value`](/de/docs/Web/HTML/Element/input#value) des Elements größer ist als dieser, schlägt die [Validierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) des Elements fehl. Dieser Wert muss größer oder gleich dem Wert des [`min`](/de/docs/Web/HTML/Attributes/min) Attributs sein. Wenn das `max`-Attribut vorhanden aber nicht angegeben oder ungültig ist, wird kein `max`-Wert angewendet. Falls das `max`-Attribut gültig ist und ein nicht leerer Wert größer ist als das Maximum, das durch das `max`-Attribut erlaubt ist, wird die Constraint-Validierung die Formularübermittlung verhindern.

Das max-Attribut ist für die numerischen Eingabetypten gültig, einschließlich der {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/time", "time")}}, {{HTMLElement("input/datetime-local", "datetime-local")}}, {{HTMLElement("input/number", "number")}} und {{HTMLElement("input/range", "range")}} Typen, und sowohl für die {{htmlelement('progress')}} als auch die {{htmlelement('meter')}} Elemente. Es ist eine Zahl, die den maximal positiven Wert angibt, den ein Formular-Steuerelement als gültig betrachtet.

Wenn der Wert den maximal erlaubten Wert überschreitet, wird [`validityState.rangeOverflow`](/de/docs/Web/API/ValidityState/rangeOverflow) wahr sein, und das Steuerelement wird durch die {{cssxref(':out-of-range')}} und {{cssxref(':invalid')}} Pseudoklassen erfasst.

## Syntax

<table class="no-markdown">
  <caption>
    Syntax für
    <code>max</code>
    Werte je nach Eingabe-
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
> Wenn die von den Benutzern eingegebenen Daten nicht dem festgelegten Maximalwert entsprechen, wird der Wert bei der Constraint-Validierung als ungültig betrachtet und entspricht den {{cssxref(':invalid')}} und {{cssxref(':out-of-range')}} Pseudoklassen.

Weitere Informationen finden Sie unter [Client-side validation](/de/docs/Web/HTML/Constraint_validation) und [`rangeOverflow`](/de/docs/Web/API/ValidityState/rangeOverflow).

Für das {{htmlelement('progress')}}-Element beschreibt das `max`-Attribut, wie viel Arbeit die durch das `progress`-Element angezeigte Aufgabe erfordert. Falls vorhanden, muss es einen Wert größer als null haben und eine gültige Fließkommazahl sein. Für das {{htmlelement('meter')}}-Element definiert das `max`-Attribut die obere numerische Grenze des gemessenen Bereichs. Dieser muss größer sein als der Mindestwert ([`min`](/de/docs/Web/HTML/Attributes/min) Attribut), falls angegeben. In beiden Fällen, falls nicht angegeben, beträgt der Standardwert 1.

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

## Barrierefreiheitsbedenken

Geben Sie Anweisungen, um den Benutzern zu helfen zu verstehen, wie man das Formular ausfüllt und einzelne Formularelemente verwendet. Geben Sie an, welche Eingaben erforderlich und optional sind, Datenformate und andere relevante Informationen. Wenn Sie das `max`-Attribut verwenden, stellen Sie sicher, dass dieses maximale Erfordernis vom Benutzer verstanden wird. Das Bereitstellen von Anweisungen innerhalb des {{htmlelement('label')}} kann ausreichend sein. Wenn Sie Anweisungen außerhalb von Labels bereitstellen, was eine flexiblere Positionierung und Gestaltung ermöglicht, sollten Sie erwägen, [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) oder [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) zu verwenden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`step`](/de/docs/Web/HTML/Attributes/step)
- [`min`](/de/docs/Web/HTML/Attributes/min)
- andere meter-Attribute: [`low`](/de/docs/Web/HTML/Attributes/low), [`high`](/de/docs/Web/HTML/Attributes/high), [`optimum`](/de/docs/Web/HTML/Attributes/optimum)
- [Constraint validation](/de/docs/Web/HTML/Constraint_validation)
- [Form validation](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [`validityState.rangeOverflow`](/de/docs/Web/API/ValidityState/rangeOverflow)
- {{cssxref(':out-of-range')}}
- {{htmlelement('input')}}
- {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/time", "time")}}, {{HTMLElement("input/datetime-local", "datetime-local")}}, {{HTMLElement("input/number", "number")}} und {{HTMLElement("input/range", "range")}} Typen, und die {{htmlelement('meter')}}
