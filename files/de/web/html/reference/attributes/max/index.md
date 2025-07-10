---
title: "HTML-Attribut: max"
short-title: max
slug: Web/HTML/Reference/Attributes/max
l10n:
  sourceCommit: 594ae0d4ffb6326a9529fe366d30ca633309ee30
---

Das **`max`**-Attribut definiert den maximalen Wert, der für die Eingabe mit diesem Attribut akzeptabel und gültig ist. Wenn der [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) des Elements größer ist als dieser, schlägt die [Validierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) des Elements fehl. Dieser Wert muss größer oder gleich dem Wert des [`min`](/de/docs/Web/HTML/Reference/Attributes/min)-Attributs sein. Wenn das `max`-Attribut vorhanden ist, aber nicht spezifiziert oder ungültig ist, wird kein `max`-Wert angewendet. Wenn das `max`-Attribut gültig ist und ein nicht leerer Wert größer ist als der vom `max`-Attribut erlaubte Maximalwert, verhindert die Einschränkungsvalidierung das Absenden des Formulars.

Das max-Attribut ist gültig für die numerischen Eingabetypen, einschließlich der Typen {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/time", "time")}}, {{HTMLElement("input/datetime-local", "datetime-local")}}, {{HTMLElement("input/number", "number")}} und {{HTMLElement("input/range", "range")}}, sowie für die Elemente {{htmlelement('progress')}} und {{htmlelement('meter')}}. Es ist eine Zahl, die den positivsten Wert angibt, den eine Formularkontrolle als gültig betrachtet.

Wenn der Wert den zulässigen Maximalwert überschreitet, ist der [`validityState.rangeOverflow`](/de/docs/Web/API/ValidityState/rangeOverflow) wahr, und die Kontrolle wird von den Pseudoklassen {{cssxref(':out-of-range')}} und {{cssxref(':invalid')}} abgeglichen.

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
> Wenn die vom Benutzer eingegebenen Daten nicht dem festgelegten Maximalwert entsprechen, wird der Wert in der Einschränkungsvalidierung als ungültig betrachtet und entspricht den Pseudoklassen {{cssxref(':invalid')}} und {{cssxref(':out-of-range')}}.

Weitere Informationen finden Sie unter [Validierung auf Client-Seite](/de/docs/Web/HTML/Guides/Constraint_validation) und [`rangeOverflow`](/de/docs/Web/API/ValidityState/rangeOverflow).

Für das {{htmlelement('progress')}}-Element beschreibt das `max`-Attribut, wie viel Arbeit für die durch das `progress`-Element angezeigte Aufgabe erforderlich ist. Wenn es vorhanden ist, muss es einen Wert größer als null haben und eine gültige Gleitkommazahl sein. Für das {{htmlelement('meter')}}-Element definiert das `max`-Attribut die obere numerische Grenze des gemessenen Bereichs. Dies muss größer sein als der Mindestwert (das [`min`](/de/docs/Web/HTML/Reference/Attributes/min)-Attribut), falls angegeben. In beiden Fällen wird der Wert standardmäßig auf 1 gesetzt, wenn er ausgelassen wird.

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

Bieten Sie Anweisungen, um den Benutzern zu helfen zu verstehen, wie sie das Formular ausfüllen und die einzelnen Formularelemente verwenden. Geben Sie an, welche Eingaben erforderlich und optional sind, welche Datenformate zu verwenden sind und alle anderen relevanten Informationen. Achten Sie bei der Verwendung des `max`-Attributs darauf, dass diese Anforderung von den Benutzern verstanden wird. Anweisungen im {{htmlelement('label')}} können hierfür ausreichend sein. Wenn Anweisungen außerhalb von Labels, was eine flexiblere Positionierung und Gestaltung ermöglicht, bereitgestellt werden, sollten Sie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) oder [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) in Erwägung ziehen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`step`](/de/docs/Web/HTML/Reference/Attributes/step)
- [`min`](/de/docs/Web/HTML/Reference/Attributes/min)
- [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation)
- [Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [`validityState.rangeOverflow`](/de/docs/Web/API/ValidityState/rangeOverflow)
- {{cssxref(':out-of-range')}}
- {{htmlelement('input')}}
- {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/time", "time")}}, {{HTMLElement("input/datetime-local", "datetime-local")}}, {{HTMLElement("input/number", "number")}} und {{HTMLElement("input/range", "range")}} Typen, und das {{htmlelement('meter')}}
