---
title: "<meter>: Das HTML Meter-Element"
slug: Web/HTML/Reference/Elements/meter
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Das **`<meter>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert entweder einen Skalarwert innerhalb eines bekannten Bereichs oder einen Bruchteilwert.

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

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `value`
  - : Der aktuelle numerische Wert. Dieser muss zwischen den minimalen und maximalen Werten (`min`-Attribut und `max`-Attribut) liegen, wenn sie angegeben sind. Wenn nicht angegeben oder fehlerhaft, ist der Wert `0`. Wenn angegeben, aber nicht innerhalb des durch die `min`- und `max`-Attribute definierten Bereichs, entspricht der Wert dem nächstgelegenen Ende des Bereichs.

    > [!NOTE]
    > Sofern das `value`-Attribut nicht zwischen `0` und `1` (einschließlich) liegt, sollten die `min`- und `max`-Attribute den Bereich so definieren, dass der Wert des `value`-Attributs darin liegt.

- [`min`](/de/docs/Web/HTML/Reference/Attributes/min)
  - : Die untere numerische Grenze des gemessenen Bereichs. Diese muss kleiner sein als der maximale Wert (`max`-Attribut), wenn angegeben. Wenn nicht angegeben, ist der Mindestwert `0`.
- [`max`](/de/docs/Web/HTML/Reference/Attributes/max)
  - : Die obere numerische Grenze des gemessenen Bereichs. Diese muss größer sein als der Mindestwert (`min`-Attribut), wenn angegeben. Wenn nicht angegeben, ist der Maximalwert `1`.
- `low`
  - : Die obere numerische Grenze des unteren Endes des gemessenen Bereichs. Diese muss größer sein als der Mindestwert (`min`-Attribut), und ebenfalls kleiner als der hohe Wert und Maximalwert (`high`-Attribut und `max`-Attribut), falls angegeben. Wenn nicht angegeben oder kleiner als der Mindestwert, entspricht der `low`-Wert dem Mindestwert.
- `high`
  - : Die untere numerische Grenze des oberen Endes des gemessenen Bereichs. Diese muss kleiner sein als der Maximalwert (`max`-Attribut), und ebenfalls größer als der niedrige Wert und Mindestwert (`low`-Attribut und `min`-Attribut), falls angegeben. Wenn nicht angegeben oder größer als der Maximalwert, entspricht der `high`-Wert dem Maximalwert.
- `optimum`
  - : Dieses Attribut zeigt den optimalen numerischen Wert an. Es muss innerhalb des Bereichs liegen (wie durch das `min`-Attribut und das `max`-Attribut definiert). Wird es zusammen mit den `low`- und `high`-Attributen verwendet, gibt es an, welcher Teil des Bereichs als bevorzugt gilt. Zum Beispiel, wenn es zwischen dem `min`-Attribut und dem `low`-Attribut liegt, wird der untere Bereich als bevorzugt angesehen. Der Browser kann die Leiste des Meter-Elements unterschiedlich einfärben, je nachdem, ob der Wert kleiner oder gleich dem optimalen Wert ist.

## Beispiele

### Einfaches Beispiel

#### HTML

```html
<p>Battery level: <meter min="0" max="100" value="75">75%</meter></p>
```

#### Ergebnis

{{EmbedLiveSample("Basic_example", 300, 60)}}

### Hoher und niedriger Bereich Beispiel

Beachten Sie, dass in diesem Beispiel das [`min`](#min)-Attribut weggelassen wird. Das ist erlaubt, da es standardmäßig `0` sein wird.

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
          >Fließinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Formulierungsinhalt</a
        >, beschriftbares Inhalt, fühlbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Formulierungsinhalt</a
        >, aber es darf kein <code>&#x3C;meter></code>-Element unter seinen Nachkommen geben.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Formulierungsinhalt</a
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

- [Erstellen von vertikalen Formularsteuerungen](/de/docs/Web/CSS/Guides/Writing_modes/Vertical_controls)
- {{HTMLElement("progress")}}
- {{cssxref("::-webkit-meter-bar")}}, {{cssxref("::-webkit-meter-inner-element") }}, {{cssxref("::-webkit-meter-even-less-good-value")}}, {{cssxref("::-webkit-meter-optimum-value")}}, {{cssxref("::-webkit-meter-suboptimum-value")}}: nicht-standardisierte Pseudoelemente
