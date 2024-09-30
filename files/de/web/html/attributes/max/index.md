---
title: "HTML-Attribut: max"
short-title: max
slug: Web/HTML/Attributes/max
l10n:
  sourceCommit: a242996610e5a3335fcd0c5ee3c84d5543b9b8dd
---

{{HTMLSidebar}}

Das **`max`**-Attribut definiert den maximal zulässigen und gültigen Wert für das Eingabefeld, das das Attribut enthält. Wenn der [`value`](/de/docs/Web/HTML/Element/input#value) des Elements größer ist, schlägt die Element-[Validierung](/de/docs/Learn/Forms/Form_validation) fehl. Dieser Wert muss größer oder gleich dem Wert des [`min`](/de/docs/Web/HTML/Attributes/min) Attributs sein. Wenn das `max`-Attribut vorhanden ist, aber nicht angegeben oder ungültig ist, wird kein `max`-Wert angewendet. Ist das `max`-Attribut gültig und ein nicht-leerer Wert ist größer als der durch das `max`-Attribut erlaubte Wert, verhindert die Einschränkungsvalidierung das Absenden des Formulars.

Das `max`-Attribut ist gültig für numerische Eingabetypen, einschließlich der {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/time", "time")}}, {{HTMLElement("input/datetime-local", "datetime-local")}}, {{HTMLElement("input/number", "number")}} und {{HTMLElement("input/range", "range")}} Typen sowie für die {{htmlelement('progress')}} und {{htmlelement('meter')}} Elemente. Es ist eine Zahl, die den höchstzulässigen Wert angibt, damit ein Formularfeld als gültig betrachtet wird.

Wenn der Wert den erlaubten Maximalwert überschreitet, wird [`validityState.rangeOverflow`](/de/docs/Web/API/ValidityState/rangeOverflow) true sein, und das Kontrollkästchen wird durch die Pseudoklassen {{cssxref(':out-of-range')}} und {{cssxref(':invalid')}} übereinstimmen.

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
> Wenn die vom Benutzer eingegebenen Daten nicht den festgelegten Maximalwert einhalten, wird der Wert bei der Einschränkungsvalidierung als ungültig betrachtet und entspricht den Pseudoklassen {{cssxref(':invalid')}} und {{cssxref(':out-of-range')}}.

Siehe [Client-seitige Validierung](/de/docs/Web/HTML/Constraint_validation) und [`rangeOverflow`](/de/docs/Web/API/ValidityState/rangeOverflow) für weitere Informationen.

Für das {{htmlelement('progress')}}-Element beschreibt das `max`-Attribut, wie viel Arbeit die vom `progress`-Element angezeigte Aufgabe erfordert. Falls vorhanden, muss es einen Wert größer als Null und eine gültige Gleitkommazahl haben. Für das {{htmlelement('meter')}}-Element definiert das `max`-Attribut die obere numerische Begrenzung des gemessenen Bereichs. Dieser muss größer sein als der minimale Wert (Attribut [`min`](/de/docs/Web/HTML/Attributes/min)), falls angegeben. In beiden Fällen, falls nicht angegeben, ist der Standardwert 1.

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

## Zugänglichkeitsbedenken

Geben Sie Anweisungen, um den Benutzern zu helfen, das Formular auszufüllen und die einzelnen Formularelemente zu benutzen. Geben Sie an, welche Eingaben erforderlich und optional sind, welche Datenformate verwendet werden sollen, und weitere relevante Informationen. Wenn Sie das `max`-Attribut verwenden, stellen Sie sicher, dass diese maximale Anforderung von den Benutzern verstanden wird. Anweisungen innerhalb des {{htmlelement('label')}} zu geben, kann ausreichend sein. Wenn Sie Anweisungen außerhalb von Labels bereitstellen, was mehr Flexibilität bei der Positionierung und Gestaltung ermöglicht, ziehen Sie die Verwendung von [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) oder [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) in Betracht.

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
- {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/time", "time")}}, {{HTMLElement("input/datetime-local", "datetime-local")}}, {{HTMLElement("input/number", "number")}} und {{HTMLElement("input/range", "range")}} Typen und das {{htmlelement('meter')}}
