---
title: "<meter>: Das HTML Meter-Element"
slug: Web/HTML/Reference/Elements/meter
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das **`<meter>`** [HTML](/de/docs/Web/HTML) Element repräsentiert entweder einen skalarischen Wert innerhalb eines bekannten Bereichs oder einen Bruchwert.

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
  - : Der aktuelle numerische Wert. Dieser muss zwischen dem Mindest- und Höchstwert liegen (`min`-Attribut und `max`-Attribut), wenn sie angegeben sind. Wenn nicht angegeben oder ungültig, ist der Wert `0`. Wenn angegeben, aber nicht innerhalb des gegebenen Bereichs durch das `min`-Attribut und `max`-Attribut, ist der Wert gleich dem nächsten Ende des Bereichs.

    > [!NOTE]
    > Sofern das `value`-Attribut nicht zwischen `0` und `1` (einschließlich) liegt, sollten die `min`- und `max`-Attribute den Bereich so definieren, dass der Wert des `value`-Attributs darin liegt.

- [`min`](/de/docs/Web/HTML/Reference/Attributes/min)
  - : Die untere numerische Grenze des gemessenen Bereichs. Dieser muss kleiner sein als der Höchstwert (`max`-Attribut), falls angegeben. Wenn nicht angegeben, beträgt der Mindestwert `0`.
- [`max`](/de/docs/Web/HTML/Reference/Attributes/max)
  - : Die obere numerische Grenze des gemessenen Bereichs. Dieser muss größer sein als der Mindestwert (`min`-Attribut), falls angegeben. Wenn nicht angegeben, beträgt der Höchstwert `1`.
- `low`
  - : Die obere numerische Grenze des niedrigen Endes des gemessenen Bereichs. Dieser muss größer sein als der Mindestwert (`min`-Attribut) und auch kleiner als der hohe Wert und der Höchstwert (`high`-Attribut und `max`-Attribut, sofern welche angegeben sind). Wenn nicht angegeben oder wenn kleiner als der Mindestwert, ist der `low`-Wert gleich dem Mindestwert.
- `high`
  - : Die untere numerische Grenze des hohen Endes des gemessenen Bereichs. Dieser muss kleiner sein als der Höchstwert (`max`-Attribut) und auch größer als der niedrige Wert und der Mindestwert (`low`-Attribut und `min`-Attribut, sofern welche angegeben sind). Wenn nicht angegeben oder wenn größer als der Höchstwert, ist der `high`-Wert gleich dem Höchstwert.
- `optimum`
  - : Dieses Attribut gibt den optimalen numerischen Wert an. Er muss innerhalb des Bereichs liegen (wie durch das `min`-Attribut und `max`-Attribut definiert). Wenn es zusammen mit dem `low`-Attribut und dem `high`-Attribut verwendet wird, gibt es eine Angabe, welcher Bereich als vorzugswürdig betrachtet wird. Zum Beispiel, wenn es zwischen dem `min`-Attribut und dem `low`-Attribut liegt, wird der niedrigere Bereich als bevorzugt angesehen. Der Browser kann die Leiste des Meters unterschiedlich einfärben, je nachdem, ob der Wert kleiner oder gleich dem optimalen Wert ist.

## Beispiele

### Einfaches Beispiel

#### HTML

```html
<p>Battery level: <meter min="0" max="100" value="75">75%</meter></p>
```

#### Ergebnis

{{EmbedLiveSample("Basic_example", 300, 60)}}

### Beispiel für hohen und niedrigen Bereich

Beachten Sie, dass in diesem Beispiel das [`min`](#min) Attribut ausgelassen wird. Dies ist erlaubt, da es standardmäßig `0` ist.

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
          >Flow-Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phraseninhalt</a
        >, beschriftbares Inhalt, wahrnehmbares Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phraseninhalt</a
        >, aber es darf kein <code>&#x3C;meter></code>-Element unter seinen
        Nachkommen sein.
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
          >Phraseninhalt</a
        >
        akzeptiert.
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

- [Erstellen vertikaler Formularelemente](/de/docs/Web/CSS/CSS_writing_modes/Vertical_controls)
- {{HTMLElement("progress")}}
- {{cssxref("::-webkit-meter-bar")}}, {{cssxref("::-webkit-meter-inner-element")}}, {{cssxref("::-webkit-meter-even-less-good-value")}}, {{cssxref("::-webkit-meter-optimum-value")}}, {{cssxref("::-webkit-meter-suboptimum-value")}}: nicht-standardisierte Pseudoelemente
