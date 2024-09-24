---
title: "HTML-Attribut: max"
short-title: max
slug: Web/HTML/Attributes/max
l10n:
  sourceCommit: a242996610e5a3335fcd0c5ee3c84d5543b9b8dd
---

{{HTMLSidebar}}

Das **`max`**-Attribut definiert den maximalen Wert, der für die Eingabe, die das Attribut enthält, als akzeptabel und gültig angesehen wird. Wenn der [`value`](/de/docs/Web/HTML/Element/input#value) des Elements größer als dieser Wert ist, schlägt die [Validierung](/de/docs/Learn/Forms/Form_validation) des Elements fehl. Dieser Wert muss größer oder gleich dem Wert des [`min`](/de/docs/Web/HTML/Attributes/min)-Attributs sein. Wenn das `max`-Attribut vorhanden ist, aber nicht angegeben oder ungültig ist, wird kein `max`-Wert angewendet. Wenn das `max`-Attribut gültig ist und ein nicht leerer Wert größer als das durch das `max`-Attribut erlaubte Maximum ist, wird die Einschränkungsvalidierung das Absenden des Formulars verhindern.

Das max-Attribut ist für die numerischen Eingabetypen gültig, einschließlich der {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/time", "time")}}, {{HTMLElement("input/datetime-local", "datetime-local")}}, {{HTMLElement("input/number", "number")}} und {{HTMLElement("input/range", "range")}} Typen, und für beide {{htmlelement('progress')}} und {{htmlelement('meter')}} Elemente. Es ist eine Zahl, die den höchstmöglichen positiven Wert angibt, damit ein Formularsteuerungselement als gültig betrachtet wird.

Wenn der Wert den zulässigen Maximalwert überschreitet, wird {{domxref('validityState.rangeOverflow')}} wahr sein, und das Steuerelement wird durch die {{cssxref(':out-of-range')}} und {{cssxref(':invalid')}} Pseudoklassen erkannt.

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
> Wenn die vom Benutzer eingegebenen Daten nicht dem festgelegten Maximalwert entsprechen, wird der Wert in der Einschränkungsvalidierung als ungültig angesehen und entspricht den {{cssxref(':invalid')}} und {{cssxref(':out-of-range')}} Pseudoklassen.

Siehe [Client-seitige Validierung](/de/docs/Web/HTML/Constraint_validation) und {{domxref("ValidityState.rangeOverflow", "rangeOverflow")}} für weitere Informationen.

Für das {{htmlelement('progress')}}-Element beschreibt das `max`-Attribut, wie viel Arbeit die durch das `progress`-Element angezeigte Aufgabe erfordert. Falls vorhanden, muss es einen Wert größer als null haben und eine gültige Gleitpunktzahl sein. Für das {{htmlelement('meter')}}-Element definiert das `max`-Attribut die obere numerische Begrenzung des gemessenen Bereichs. Dies muss größer sein als der minimale Wert (das [`min`](/de/docs/Web/HTML/Attributes/min)-Attribut), falls angegeben. In beiden Fällen, wenn ausgelassen, wird der Wert standardmäßig auf 1 gesetzt.

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

Geben Sie Anweisungen, um Benutzern zu helfen, das Formular auszufüllen und die einzelnen Formularsteuerelemente zu verwenden. Geben Sie an, welche Eingaben erforderlich und optional sind, welche Datenformate gelten und welche anderen relevanten Informationen wichtig sind. Wenn Sie das `max`-Attribut verwenden, stellen Sie sicher, dass diese maximale Anforderung vom Benutzer verstanden wird. Das Bereitstellen von Anweisungen innerhalb des {{htmlelement('label')}} könnte ausreichend sein. Wenn Sie Anweisungen außerhalb von Labels bereitstellen, was eine flexiblere Positionierung und Gestaltung ermöglicht, ziehen Sie die Verwendung von [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) oder [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) in Betracht.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [`step`](/de/docs/Web/HTML/Attributes/step)
- [`min`](/de/docs/Web/HTML/Attributes/min)
- andere meter Attribute: [`low`](/de/docs/Web/HTML/Attributes/low), [`high`](/de/docs/Web/HTML/Attributes/high), [`optimum`](/de/docs/Web/HTML/Attributes/optimum)
- [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)
- [Formularvalidierung](/de/docs/Learn/Forms/Form_validation)
- {{domxref('validityState.rangeOverflow')}}
- {{cssxref(':out-of-range')}}
- {{htmlelement('input')}}
- {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/time", "time")}}, {{HTMLElement("input/datetime-local", "datetime-local")}}, {{HTMLElement("input/number", "number")}} und {{HTMLElement("input/range", "range")}} Typen, und die {{htmlelement('meter')}}
