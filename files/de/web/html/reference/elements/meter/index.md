---
title: "<meter>: Das HTML-Meter-Element"
slug: Web/HTML/Reference/Elements/meter
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

Das **`<meter>`**-[HTML](/de/docs/Web/HTML)-Element repräsentiert entweder einen Skalarwert innerhalb eines bekannten Bereichs oder einen Bruchteilwert.

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

  - : Der aktuelle numerische Wert. Dieser muss zwischen den minimalen und maximalen Werten (`min`-Attribut und `max`-Attribut) liegen, wenn diese angegeben sind. Wenn nicht angegeben oder fehlerhaft, ist der Wert `0`. Wenn angegeben, aber nicht innerhalb des durch das `min`- und `max`-Attribut definierten Bereichs, ist der Wert gleich dem nächstgelegenen Ende des Bereichs.

    > [!NOTE]
    > Sofern der `value`-Wert nicht zwischen `0` und `1` (einschließlich) liegt, sollten die `min`- und `max`-Attribute den Bereich so definieren, dass der Wert des `value`-Attributs innerhalb davon liegt.

- [`min`](/de/docs/Web/HTML/Reference/Attributes/min)
  - : Die untere numerische Grenze des gemessenen Bereichs. Diese muss geringer sein als der maximale Wert (`max`-Attribut), wenn angegeben. Wenn nicht angegeben, ist der minimale Wert `0`.
- [`max`](/de/docs/Web/HTML/Reference/Attributes/max)
  - : Die obere numerische Grenze des gemessenen Bereichs. Diese muss größer sein als der minimale Wert (`min`-Attribut), wenn angegeben. Wenn nicht angegeben, ist der maximale Wert `1`.
- `low`
  - : Die obere numerische Grenze des unteren Endes des gemessenen Bereichs. Diese muss größer sein als der minimale Wert (`min`-Attribut) und ebenfalls kleiner als der hohe Wert und der maximale Wert (`high`-Attribut und `max`-Attribut), falls diese angegeben sind. Wenn nicht angegeben oder kleiner als der minimale Wert ist, ist der `low`-Wert gleich dem minimalen Wert.
- `high`
  - : Die untere numerische Grenze des oberen Endes des gemessenen Bereichs. Diese muss kleiner sein als der maximale Wert (`max`-Attribut) und auch größer als der niedrige Wert und der minimale Wert (`low`-Attribut und `min`-Attribut), falls diese angegeben sind. Wenn nicht angegeben oder größer als der maximale Wert ist, ist der `high`-Wert gleich dem maximalen Wert.
- `optimum`
  - : Dieses Attribut gibt den optimalen numerischen Wert an. Es muss innerhalb des Bereichs liegen (definiert durch das `min`- und `max`-Attribut). Wenn es mit dem `low`- und `high`-Attribut verwendet wird, gibt es einen Hinweis darauf, welcher Bereich als vorzuziehen betrachtet wird. Beispielweise, wenn es zwischen dem `min`-Attribut und dem `low`-Attribut liegt, dann wird der niedrigere Bereich als bevorzugt angesehen. Der Browser könnte die Farbdarstellung der Anzeigeleiste abhängig davon ändern, ob der Wert kleiner oder gleich dem optimalen Wert ist.
- `form`
  - : Dieses optionale Attribut wird verwendet, um explizit einen {{HTMLElement("form")}}-Eigentümer für das `<meter>`-Element festzulegen. Wenn weggelassen, wird das `<meter>`-Element seinem Vorfahren `<form>`-Element oder der Formularzuordnung zugeordnet, die durch das `form`-Attribut auf einem anderen Vorfahrenelement, wie zum Beispiel auf einem {{HTMLElement("fieldset")}}, festgelegt wird, falls vorhanden. Wenn angegeben, muss der Wert der [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) eines `<form>` im selben Baum sein.

## Beispiele

### Einfaches Beispiel

#### HTML

```html
<p>Battery level: <meter min="0" max="100" value="75">75%</meter></p>
```

#### Ergebnis

{{EmbedLiveSample("Basic_example", 300, 60)}}

### Beispiel mit hohem und niedrigem Bereich

Beachten Sie, dass in diesem Beispiel das [`min`](#min)-Attribut weggelassen wurde. Dies ist erlaubt, da es standardmäßig `0` ist.

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
          >Flussinhalte</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasinhalte</a
        >, beschriftungsfähige Inhalte, fühlbare Inhalte.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Inhalte</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasinhalte</a
        >, aber es darf sich kein <code>&#x3C;meter></code>-Element unter seinen
        Nachkommen befinden.
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
          >Phrasinhalte</a
        > akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
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

- [Anpassen vertikaler Formularelemente](/de/docs/Web/CSS/CSS_writing_modes/Vertical_controls)
- {{HTMLElement("progress")}}
- {{cssxref("::-webkit-meter-bar")}}, {{cssxref("::-webkit-meter-inner-element") }}, {{cssxref("::-webkit-meter-even-less-good-value")}}, {{cssxref("::-webkit-meter-optimum-value")}}, {{cssxref("::-webkit-meter-suboptimum-value")}}: nicht-standardisierte Pseudo-Elemente
