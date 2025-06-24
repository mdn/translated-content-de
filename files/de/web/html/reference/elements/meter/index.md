---
title: "<meter>: Das HTML Meter-Element"
slug: Web/HTML/Reference/Elements/meter
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{HTMLSidebar}}

Das **`<meter>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert entweder einen skalaren Wert innerhalb eines bekannten Bereichs oder einen Bruchwert.

{{InteractiveExample("HTML Demo: &lt;meter&gt;", "tabbed-shorter")}}

```html interactive-example
<label for="fuel">Fuel level:</label>

<meter id="fuel" min="0" max="100" low="33" high="66" optimum="80" value="50">
  at 50/100
</meter>
```

```css interactive-example
label {
  padding-right: 10px;
  font-size: 1rem;
}
```

## Attribute

Dieses Element beinhaltet die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `value`

  - : Der aktuelle numerische Wert. Dieser muss zwischen den Minimal- und Maximalwerten (`min`-Attribut und `max`-Attribut) liegen, wenn sie angegeben sind. Wenn nicht angegeben oder fehlerhaft, beträgt der Wert `0`. Wenn angegeben, aber nicht innerhalb des durch die Attribute `min` und `max` definierten Bereichs, entspricht der Wert dem nächsten Ende des Bereichs.

    > [!NOTE]
    > Sofern das `value`-Attribut nicht zwischen `0` und `1` (einschließlich) liegt, sollten die Attribute `min` und `max` den Bereich so definieren, dass der Wert des `value`-Attributs innerhalb liegt.

- [`min`](/de/docs/Web/HTML/Reference/Attributes/min)
  - : Die untere numerische Grenze des gemessenen Bereichs. Diese muss kleiner als der Maximalwert (`max`-Attribut) sein, wenn angegeben. Wenn nicht angegeben, beträgt der Mindestwert `0`.
- [`max`](/de/docs/Web/HTML/Reference/Attributes/max)
  - : Die obere numerische Grenze des gemessenen Bereichs. Diese muss größer als der Minimalwert (`min`-Attribut) sein, wenn angegeben. Wenn nicht angegeben, beträgt der Höchstwert `1`.
- `low`
  - : Die obere numerische Grenze des unteren Endes des gemessenen Bereichs. Diese muss größer als der Minimalwert (`min`-Attribut) sein und außerdem kleiner als der hohe Wert und der Maximalwert (`high`-Attribut bzw. `max`-Attribut), wenn welche angegeben sind. Wenn nicht angegeben oder wenn kleiner als der Minimalwert, entspricht der `low`-Wert dem Minimalwert.
- `high`
  - : Die untere numerische Grenze des hohen Endes des gemessenen Bereichs. Diese muss kleiner als der Maximalwert (`max`-Attribut) sein und außerdem größer als der niedrige Wert und der Minimalwert (`low`-Attribut bzw. `min`-Attribut), wenn welche angegeben sind. Wenn nicht angegeben oder wenn größer als der Maximalwert, entspricht der `high`-Wert dem Maximalwert.
- `optimum`
  - : Dieses Attribut gibt den optimalen numerischen Wert an. Es muss innerhalb des Bereichs (wie durch die Attribute `min` und `max` definiert) liegen. Wenn es mit den Attributen `low` und `high` verwendet wird, gibt es einen Hinweis darauf, wo im Bereich eine Präferenz besteht. Zum Beispiel, wenn es zwischen den Attributen `min` und `low` liegt, wird der untere Bereich als bevorzugt angesehen. Der Browser kann den Balken des Meters anders färben, abhängig davon, ob der Wert kleiner oder gleich dem optimalen Wert ist.
- `form`
  - : Dieses optionale Attribut wird verwendet, um explizit einen {{HTMLElement("form")}}-Eigentümer für das `<meter>`-Element festzulegen. Wenn es weggelassen wird, wird das `<meter>`-Element mit seinem übergeordneten `<form>`-Element assoziiert oder mit der Formularzuordnung, die durch das `form`-Attribut auf einem anderen übergeordneten Element, wie z.B. einem {{HTMLElement("fieldset")}}, festgelegt wird, falls vorhanden. Wenn es angegeben wird, muss der Wert die [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) eines `<form>` im selben Baum sein.

## Beispiele

### Grundlegendes Beispiel

#### HTML

```html
<p>Battery level: <meter min="0" max="100" value="75">75%</meter></p>
```

#### Ergebnis

{{EmbedLiveSample("Basic_example", 300, 60)}}

### Beispiel mit hohem und niedrigem Bereich

Beachten Sie, dass in diesem Beispiel das Attribute [`min`](#min) weggelassen wird. Dies ist zulässig, da es standardmäßig `0` wird.

#### HTML

```html
<p>
  Student's exam score:
  <meter min="0" low="50" high="80" max="100" value="84">84%</meter>
</p>
```

#### Ergebnis

{{EmbedLiveSample("High_and_Low_range_example", 300, 60)}}

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Fließende Inhalte</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >formulierende Inhalte</a
        >, etikettierbare Inhalte, fühlbare Inhalte.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Inhalte</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Formulierende Inhalte</a
        >, aber es darf kein <code>&#x3C;meter></code>-Element unter seinen Nachkommen geben.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl der Start- als auch der End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >formulierende Inhalte</a
        > akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles#structural_roles_with_html_equivalents">meter</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>Keine <code>role</code> erlaubt</td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>[`HTMLMeterElement`](/de/docs/Web/API/HTMLMeterElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Vertikale Formularsteuerelemente erstellen](/de/docs/Web/CSS/CSS_writing_modes/Vertical_controls)
- {{HTMLElement("progress")}}
- {{cssxref("::-webkit-meter-bar")}}, {{cssxref("::-webkit-meter-inner-element") }}, {{cssxref("::-webkit-meter-even-less-good-value")}}, {{cssxref("::-webkit-meter-optimum-value")}}, {{cssxref("::-webkit-meter-suboptimum-value")}}: nicht-standardisierte Pseudoelemente
