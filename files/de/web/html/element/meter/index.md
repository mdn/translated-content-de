---
title: "<meter>: Das HTML-Meter-Element"
slug: Web/HTML/Element/meter
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{HTMLSidebar}}

Das **`<meter>`** [HTML](/de/docs/Web/HTML) Element repräsentiert entweder einen Skalarwert innerhalb eines bekannten Bereichs oder einen Bruchwert.

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

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `value`

  - : Der aktuelle Zahlenwert. Dieser muss zwischen den minimalen und maximalen Werten liegen (Attribut `min` und Attribut `max`), wenn diese angegeben sind. Falls nicht angegeben oder fehlerhaft, ist der Wert `0`. Wenn angegeben, aber nicht innerhalb des durch das Attribut `min` und das Attribut `max` festgelegten Bereichs, ist der Wert gleich dem nächstgelegenen Ende des Bereichs.

    > [!NOTE]
    > Sofern das Attribut `value` nicht zwischen `0` und `1` (einschließlich) liegt, sollten die Attribute `min` und `max` den Bereich definieren, sodass der Wert des Attributs `value` darin liegt.

- [`min`](/de/docs/Web/HTML/Attributes/min)
  - : Die untere numerische Grenze des gemessenen Bereichs. Diese muss kleiner sein als der Maximalwert (Attribut `max`), falls angegeben. Wenn nicht angegeben, ist der Minimalwert `0`.
- [`max`](/de/docs/Web/HTML/Attributes/max)
  - : Die obere numerische Grenze des gemessenen Bereichs. Diese muss größer sein als der Minimalwert (Attribut `min`), falls angegeben. Wenn nicht angegeben, ist der Maximalwert `1`.
- `low`
  - : Die obere numerische Grenze des unteren Endes des gemessenen Bereichs. Diese muss größer sein als der Minimalwert (Attribut `min`) und auch kleiner als der hohe und maximale Wert (Attribut `high` und Attribut `max`), falls angegeben. Wenn nicht angegeben oder kleiner als der Minimalwert, ist der `low`-Wert gleich dem Minimalwert.
- `high`
  - : Die untere numerische Grenze des hohen Endes des gemessenen Bereichs. Diese muss kleiner sein als der Maximalwert (Attribut `max`) und auch größer als der niedrige und minimale Wert (Attribut `low` und Attribut `min`), falls angegeben. Wenn nicht angegeben oder größer als der Maximalwert, ist der `high`-Wert gleich dem Maximalwert.
- `optimum`
  - : Dieses Attribut gibt den optimalen Zahlenwert an. Er muss sich innerhalb des Bereichs befinden (wie durch das Attribut `min` und das Attribut `max` definiert). In Verbindung mit dem Attribut `low` und dem Attribut `high` gibt es an, wo im Bereich als vorzuziehen betrachtet wird. Zum Beispiel, wenn es zwischen dem Attribut `min` und dem Attribut `low` liegt, wird der untere Bereich als bevorzugt angesehen. Der Browser kann die Leiste des Meters unterschiedlich einfärben, je nachdem, ob der Wert kleiner oder gleich dem optimalen Wert ist.
- `form`
  - : Dieses optionale Attribut wird verwendet, um einen expliziten {{HTMLElement("form")}} Besitzer für das `<meter>`-Element festzulegen. Wird es weggelassen, ist das `<meter>` mit dem übergeordneten `<form>`-Element oder der Formularassoziation verbunden, die durch das `form`-Attribut eines anderen übergeordneten Elements festgelegt wurde, wie z.B. auf einem {{HTMLElement("fieldset")}}, falls vorhanden. Wenn es enthalten ist, muss der Wert die [`id`](/de/docs/Web/HTML/Global_attributes/id) eines `<form>` im gleichen Baum sein.

## Beispiele

### Einfaches Beispiel

#### HTML

```html
<p>Battery level: <meter min="0" max="100" value="75">75%</meter></p>
```

#### Ergebnis

{{EmbedLiveSample("Basic_example", 300, 60)}}

### Beispiel für hohen und niedrigen Bereich

Beachten Sie, dass in diesem Beispiel das [`min`](#min) Attribut weggelassen wird. Dies ist zulässig, da es standardmäßig auf `0` gesetzt wird.

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
        <a href="/de/docs/Web/HTML/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Fluss-Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasen-Inhalt</a
        >, kennzeichnungsfähiger Inhalt, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasen-Inhalt</a
        >, aber es darf kein <code>&#x3C;meter></code>-Element unter seinen
        Nachkommen geben.
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
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasen-Inhalt</a
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

- [Erstellen vertikaler Formularsteuerungen](/de/docs/Web/CSS/CSS_writing_modes/Vertical_controls)
- {{HTMLElement("progress")}}
- {{cssxref("::-webkit-meter-bar")}}, {{cssxref("::-webkit-meter-inner-element") }}, {{cssxref("::-webkit-meter-even-less-good-value")}}, {{cssxref("::-webkit-meter-optimum-value")}}, {{cssxref("::-webkit-meter-suboptimum-value")}}: nicht standardisierte Pseudo-Elemente
