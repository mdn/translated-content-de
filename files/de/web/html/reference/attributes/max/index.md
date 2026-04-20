---
title: "`max` HTML-Attribut"
short-title: max
slug: Web/HTML/Reference/Attributes/max
l10n:
  sourceCommit: b50ed7ac1c2ca21b4b5cfb594474a17da3f2e6c2
---

Das **`max`** Attribut definiert den maximal akzeptablen und gültigen Wert für das Eingabefeld, das dieses Attribut enthält. Wenn der [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) des Elements größer als dieser ist, schlägt die [Validierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) des Elements fehl. Dieser Wert muss größer oder gleich dem Wert des [`min`](/de/docs/Web/HTML/Reference/Attributes/min) Attributs sein. Ist das `max` Attribut vorhanden, aber nicht spezifiziert oder ungültig, wird kein `max` Wert angewendet. Wenn das `max` Attribut gültig ist und ein nicht leerer Wert größer als der durch das `max` Attribut erlaubte Maximalwert ist, verhindert die Einschränkungsvalidierung das Absenden des Formulars.

Das `max` Attribut ist gültig für numerische Eingabetypen, einschließlich der Typen {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/time", "time")}}, {{HTMLElement("input/datetime-local", "datetime-local")}}, {{HTMLElement("input/number", "number")}} und {{HTMLElement("input/range", "range")}}, sowie für die Elemente {{htmlelement('progress')}} und {{htmlelement('meter')}}. Es ist eine Zahl, die den höchsten positiven Wert angibt, den ein Formularelement als gültig betrachten kann.

Wenn der Wert den erlaubten Maximalwert überschreitet, wird [`validityState.rangeOverflow`](/de/docs/Web/API/ValidityState/rangeOverflow) wahr sein, und das Element wird durch die Pseudoklassen {{cssxref(':out-of-range')}} und {{cssxref(':invalid')}} übereinstimmen.

## Syntax

<table class="no-markdown">
  <caption>
    Syntax für
    <code>max</code>
    Werte in Abhängigkeit vom Eingabe-
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
      <td><a href="/de/docs/Web/CSS/Reference/Values/number">&#x3C;number></a></td>
      <td>
        <code>&#x3C;input type="number" min="0" step="5" max="100"></code>
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/range", "range")}}</td>
      <td><a href="/de/docs/Web/CSS/Reference/Values/number">&#x3C;number></a></td>
      <td>
        <code>&#x3C;input type="range" min="60" step="5" max="100"></code>
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Wenn die vom Benutzer eingegebenen Daten nicht dem festgelegten Maximalwert entsprechen, wird der Wert in der Einschränkungsvalidierung als ungültig betrachtet und wird mit den Pseudoklassen {{cssxref(':invalid')}} und {{cssxref(':out-of-range')}} übereinstimmen.

Siehe [Clientseitige Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) und [`rangeOverflow`](/de/docs/Web/API/ValidityState/rangeOverflow) für weitere Informationen.

Für das {{htmlelement('progress')}} Element beschreibt das `max` Attribut, wie viel Arbeit der durch das `progress` Element angezeigte Vorgang erfordert. Wenn vorhanden, muss es einen Wert größer als null haben und eine gültige Gleitkommazahl sein. Für das {{htmlelement('meter')}} Element definiert das `max` Attribut die obere numerische Grenze des gemessenen Bereichs. Dieser muss größer sein als der Mindestwert (Attribut [`min`](/de/docs/Web/HTML/Reference/Attributes/min)), sofern angegeben. In beiden Fällen wird, falls weggelassen, der Wert standardmäßig auf 1 gesetzt.

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
      <td><a href="/de/docs/Web/CSS/Reference/Values/number">&#x3C;number></a></td>
      <td>
        <code
          >&#x3C;progress id="file" max="100" value="70"> 70%
          &#x3C;/progress></code
        >
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("meter")}}</td>
      <td><a href="/de/docs/Web/CSS/Reference/Values/number">&#x3C;number></a></td>
      <td>
        <code
          >&#x3C;meter id="fuel" min="0" max="100" low="33" high="66"
          optimum="80" value="40"> at 40/100&#x3C;/meter></code
        >
      </td>
    </tr>
  </tbody>
</table>

## Zugänglichkeitsbedenken

Geben Sie Anweisungen, die den Benutzern helfen, das Formular auszufüllen und einzelne Formularelemente zu verwenden. Geben Sie an, welche Eingaben erforderlich und welche optional sind, welche Datenformate erwartet werden und weitere relevante Informationen. Beim Verwenden des `max` Attributs stellen Sie sicher, dass die maximale Anforderung vom Benutzer verstanden wird. Das Geben von Anweisungen innerhalb der {{htmlelement('label')}} kann ausreichend sein. Wenn Anweisungen außerhalb von Labels gegeben werden, was eine flexiblere Positionierung und Gestaltung ermöglicht, ziehen Sie die Verwendung von [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) oder [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) in Betracht.

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
- {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/time", "time")}}, {{HTMLElement("input/datetime-local", "datetime-local")}}, {{HTMLElement("input/number", "number")}} und {{HTMLElement("input/range", "range")}} Typen, sowie das {{htmlelement('meter')}}.
