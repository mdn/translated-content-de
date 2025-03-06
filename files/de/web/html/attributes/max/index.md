---
title: "HTML-Attribut: max"
short-title: max
slug: Web/HTML/Attributes/max
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{HTMLSidebar}}

Das **`max`**-Attribut definiert den maximal akzeptablen und gültigen Wert für das Eingabefeld, das das Attribut enthält. Wenn der [`value`](/de/docs/Web/HTML/Element/input#value) des Elements größer ist als dieser Wert, schlägt das Element bei der [Validierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) fehl. Dieser Wert muss größer oder gleich dem Wert des [`min`](/de/docs/Web/HTML/Attributes/min)-Attributs sein. Wenn das `max`-Attribut vorhanden ist, aber nicht spezifiziert oder ungültig ist, wird kein `max`-Wert angewendet. Wenn das `max`-Attribut gültig ist und ein nicht-leerer Wert größer ist als der vom `max`-Attribut erlaubte, verhindert die Einschränkungsvalidierung die Formularübermittlung.

Das max-Attribut ist gültig für die numerischen Eingabetypen, einschließlich der {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/time", "time")}}, {{HTMLElement("input/datetime-local", "datetime-local")}}, {{HTMLElement("input/number", "number")}} und {{HTMLElement("input/range", "range")}} Typen sowie für die Elemente {{htmlelement('progress')}} und {{htmlelement('meter')}}. Es handelt sich um eine Zahl, die den positivsten Wert angibt, den ein Formularsteuerelement als gültig betrachtet.

Wenn der Wert den erlaubten Maximalwert überschreitet, wird [`validityState.rangeOverflow`](/de/docs/Web/API/ValidityState/rangeOverflow) wahr, und die Steuerung wird durch die Pseudoklassen {{cssxref(':out-of-range')}} und {{cssxref(':invalid')}} abgeglichen.

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
> Wenn die vom Benutzer eingegebenen Daten nicht dem festgelegten Maximalwert entsprechen, wird der Wert bei der Einschränkungsvalidierung als ungültig betrachtet und wird den Pseudoklassen {{cssxref(':invalid')}} und {{cssxref(':out-of-range')}} entsprechen.

Siehe [Client-seitige Validierung](/de/docs/Web/HTML/Constraint_validation) und [`rangeOverflow`](/de/docs/Web/API/ValidityState/rangeOverflow) für weitere Informationen.

Für das {{htmlelement('progress')}}-Element beschreibt das `max`-Attribut, wie viel Arbeit die von dem `progress`-Element angezeigte Aufgabe erfordert. Wenn vorhanden, muss es einen Wert größer als null haben und eine gültige Gleitkommazahl sein. Für das {{htmlelement('meter')}}-Element definiert das `max`-Attribut die obere numerische Grenze des gemessenen Bereichs. Dies muss größer als der minimale Wert ([`min`](/de/docs/Web/HTML/Attributes/min) Attribut) sein, falls angegeben. In beiden Fällen wird der Wert standardmäßig auf 1 gesetzt, wenn er weggelassen wird.

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

## Barrierefreiheit

Stellen Sie Anweisungen zur Verfügung, um den Benutzern zu helfen, das Formular auszufüllen und individuelle Formularelemente zu verwenden. Geben Sie alle erforderlichen und optionalen Eingaben, Datenformate und andere relevante Informationen an. Wenn Sie das `max`-Attribut verwenden, stellen Sie sicher, dass dieser Maximalwert vom Benutzer verstanden wird. Anweisungen innerhalb des {{htmlelement('label')}} können ausreichend sein. Wenn Anweisungen außerhalb der Labels bereitgestellt werden, was eine flexiblere Positionierung und Gestaltung ermöglicht, sollten Sie die Verwendung von [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) oder [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) in Betracht ziehen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`step`](/de/docs/Web/HTML/Attributes/step)
- [`min`](/de/docs/Web/HTML/Attributes/min)
- andere Meter-Attribute: [`low`](/de/docs/Web/HTML/Attributes/low), [`high`](/de/docs/Web/HTML/Attributes/high), [`optimum`](/de/docs/Web/HTML/Attributes/optimum)
- [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)
- [Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [`validityState.rangeOverflow`](/de/docs/Web/API/ValidityState/rangeOverflow)
- {{cssxref(':out-of-range')}}
- {{htmlelement('input')}}
- {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/time", "time")}}, {{HTMLElement("input/datetime-local", "datetime-local")}}, {{HTMLElement("input/number", "number")}} und {{HTMLElement("input/range", "range")}} Typen, und das {{htmlelement('meter')}}
