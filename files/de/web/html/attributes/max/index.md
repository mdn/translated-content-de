---
title: "HTML-Attribut: max"
short-title: max
slug: Web/HTML/Attributes/max
l10n:
  sourceCommit: a242996610e5a3335fcd0c5ee3c84d5543b9b8dd
---

{{HTMLSidebar}}

Das **`max`**-Attribut definiert den maximal akzeptablen und gültigen Wert für das Eingabeelement, das das Attribut enthält. Wenn der [`value`](/de/docs/Web/HTML/Element/input#value) des Elements größer ist als dieses, schlägt die [Validierung](/de/docs/Learn/Forms/Form_validation) des Elements fehl. Dieser Wert muss größer oder gleich dem Wert des [`min`](/de/docs/Web/HTML/Attributes/min)-Attributs sein. Wenn das `max`-Attribut vorhanden ist, aber nicht angegeben oder ungültig ist, wird kein `max`-Wert angewendet. Wenn das `max`-Attribut gültig ist und ein nicht-leerer Wert größer ist als das durch das `max`-Attribut erlaubte Maximum, wird die Einschränkungsvalidierung das Absenden des Formulars verhindern.

Das max-Attribut ist gültig für die numerischen Eingabetypen, einschließlich der Typen {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/time", "time")}}, {{HTMLElement("input/datetime-local", "datetime-local")}}, {{HTMLElement("input/number", "number")}} und {{HTMLElement("input/range", "range")}}, sowie für die Elemente {{htmlelement('progress')}} und {{htmlelement('meter')}}. Es ist eine Zahl, die den höchst zulässigen Wert für ein Formularsteuerelement angibt, um als gültig betrachtet zu werden.

Wenn der Wert den maximal zulässigen Wert überschreitet, ist der [`validityState.rangeOverflow`](/de/docs/Web/API/ValidityState/rangeOverflow) wahr, und das Steuerelement wird mit den Pseudoklassen {{cssxref(':out-of-range')}} und {{cssxref(':invalid')}} übereinstimmen.

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
> Wenn die vom Nutzer eingegebenen Daten den festgelegten Höchstwert nicht einhalten, wird der Wert in der Einschränkungsvalidierung als ungültig betrachtet und wird den Pseudoklassen {{cssxref(':invalid')}} und {{cssxref(':out-of-range')}} entsprechen.

Sehen Sie [Client-seitige Validierung](/de/docs/Web/HTML/Constraint_validation) und [`rangeOverflow`](/de/docs/Web/API/ValidityState/rangeOverflow) für mehr Informationen.

Für das {{htmlelement('progress')}}-Element beschreibt das `max`-Attribut, wie viel Arbeit die durch das `progress`-Element angezeigte Aufgabe erfordert. Wenn vorhanden, muss ein Wert größer als Null und eine gültige Gleitkommazahl angegeben werden. Für das {{htmlelement('meter')}}-Element definiert das `max`-Attribut die obere numerische Grenze des gemessenen Bereichs. Dieser muss größer sein als der Minimalwert (das [`min`](/de/docs/Web/HTML/Attributes/min)-Attribut), falls angegeben. In beiden Fällen wird, falls weggelassen, der Wert standardmäßig auf 1 gesetzt.

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
          optimum="80" value="40"> at 40/100&#x3C;/meter></code
        >
      </td>
    </tr>
  </tbody>
</table>

## Barrierefreiheitsbedenken

Geben Sie Anweisungen, die den Nutzern helfen, das Formular auszufüllen und die einzelnen Formularsteuerelemente zu verwenden. Geben Sie an, welche Eingaben erforderlich und welche optional sind, sowie Datenformate und andere relevante Informationen. Stellen Sie sicher, dass die maximale Anforderung durch das `max`-Attribut vom Benutzer verstanden wird. Das Bereitstellen von Anweisungen innerhalb des {{htmlelement('label')}} kann ausreichend sein. Wenn Anweisungen außerhalb von Labels bereitgestellt werden, was eine flexiblere Positionierung und Gestaltung erlaubt, sollten Sie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) oder [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) in Betracht ziehen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`step`](/de/docs/Web/HTML/Attributes/step)
- [`min`](/de/docs/Web/HTML/Attributes/min)
- andere Meter-Attribute: [`low`](/de/docs/Web/HTML/Attributes/low), [`high`](/de/docs/Web/HTML/Attributes/high), [`optimum`](/de/docs/Web/HTML/Attributes/optimum)
- [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)
- [Formularvalidierung](/de/docs/Learn/Forms/Form_validation)
- [`validityState.rangeOverflow`](/de/docs/Web/API/ValidityState/rangeOverflow)
- {{cssxref(':out-of-range')}}
- {{htmlelement('input')}}
- {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/time", "time")}}, {{HTMLElement("input/datetime-local", "datetime-local")}}, {{HTMLElement("input/number", "number")}} und {{HTMLElement("input/range", "range")}} Arten, und das {{htmlelement('meter')}}
