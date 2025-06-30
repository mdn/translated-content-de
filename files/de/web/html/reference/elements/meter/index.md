---
title: "<meter>: Das HTML-Meter-Element"
slug: Web/HTML/Reference/Elements/meter
l10n:
  sourceCommit: 40f6b1fee56f4045b4bc0b45dea18a7ae8456a69
---

{{HTMLSidebar}}

Das **`<meter>`**-[HTML](/de/docs/Web/HTML) Element repräsentiert entweder einen skalaren Wert innerhalb eines bekannten Bereichs oder einen Bruchwert.

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

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `value`
  - : Der aktuelle numerische Wert. Dieser muss zwischen den minimalen und maximalen Werten (`min` Attribut und `max` Attribut) liegen, falls sie angegeben sind. Falls nicht spezifiziert oder fehlerhaft, ist der Wert `0`. Falls spezifiziert, liegt er aber nicht innerhalb des durch das `min` Attribut und `max` Attribut angegebenen Bereichs, so entspricht der Wert dem nächstgelegenen Ende des Bereichs.

    > [!NOTE]
    > Sofern das `value` Attribut nicht zwischen `0` und `1` (einschließlich) liegt, sollten die `min` und `max` Attribute den Bereich so definieren, dass der Wert des `value` Attributs innerhalb dieses Bereichs liegt.

- [`min`](/de/docs/Web/HTML/Reference/Attributes/min)
  - : Die untere numerische Grenze des gemessenen Bereichs. Diese muss kleiner sein als der maximale Wert (`max` Attribut), falls angegeben. Falls nicht angegeben, ist der minimale Wert `0`.
- [`max`](/de/docs/Web/HTML/Reference/Attributes/max)
  - : Die obere numerische Grenze des gemessenen Bereichs. Diese muss größer sein als der minimale Wert (`min` Attribut), falls angegeben. Falls nicht angegeben, ist der maximale Wert `1`.
- `low`
  - : Die obere numerische Grenze des unteren Endes des gemessenen Bereichs. Diese muss größer sein als der minimale Wert (`min` Attribut) und auch kleiner als der `high` Wert und der maximale Wert (`high` Attribut und `max` Attribut, falls angegeben). Falls nicht angegeben oder kleiner als der minimale Wert, entspricht der `low` Wert dem minimalen Wert.
- `high`
  - : Die untere numerische Grenze des oberen Endes des gemessenen Bereichs. Diese muss kleiner sein als der maximale Wert (`max` Attribut) und auch größer als der `low` Wert und der minimale Wert (`low` Attribut und `min` Attribut, falls angegeben). Falls nicht angegeben oder größer als der maximale Wert, entspricht der `high` Wert dem maximalen Wert.
- `optimum`
  - : Dieses Attribut gibt den optimalen numerischen Wert an. Er muss innerhalb des Bereichs (wie durch das `min` Attribut und `max` Attribut definiert) liegen. Wenn es zusammen mit dem `low` Attribut und `high` Attribut verwendet wird, gibt es an, welcher Bereich als vorzuziehen gilt. Zum Beispiel, wenn es zwischen dem `min` Attribut und dem `low` Attribut liegt, wird der untere Bereich als bevorzugt angesehen. Der Browser kann die Farbe des Balkens im `meter` Element abhängig davon ändern, ob der Wert kleiner oder gleich dem optimalen Wert ist.

## Beispiele

### Einfaches Beispiel

#### HTML

```html
<p>Battery level: <meter min="0" max="100" value="75">75%</meter></p>
```

#### Ergebnis

{{EmbedLiveSample("Basic_example", 300, 60)}}

### Beispiel für hohe und niedrige Bereiche

Beachten Sie, dass in diesem Beispiel das [`min`](#min) Attribut weggelassen wurde. Dies ist zulässig, da es standardmäßig auf `0` gesetzt wird.

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
        <a href="/de/docs/Web/HTML/Guides/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Flow-Inhalt</a>,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">formulierter Inhalt</a>, beschriftbarer Inhalt, fühlbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Formulierter Inhalt</a>, aber es darf kein <code>&#x3C;meter></code>-Element unter den Nachkommen sein.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl der startende als auch der endende Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">formulierten Inhalt</a> akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <code><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles#structural_roles_with_html_equivalents">meter</a></code>
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

- [Erstellung vertikaler Formularelemente](/de/docs/Web/CSS/CSS_writing_modes/Vertical_controls)
- {{HTMLElement("progress")}}
- {{cssxref("::-webkit-meter-bar")}}, {{cssxref("::-webkit-meter-inner-element")}}, {{cssxref("::-webkit-meter-even-less-good-value")}}, {{cssxref("::-webkit-meter-optimum-value")}}, {{cssxref("::-webkit-meter-suboptimum-value")}}: nicht-standardisierte Pseudo-Elemente
