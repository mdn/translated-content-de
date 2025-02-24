---
title: "<meter>: Das HTML Meter-Element"
slug: Web/HTML/Element/meter
l10n:
  sourceCommit: 8b02826c79b090b5af0d68ae1ef39f932a66a7f1
---

{{HTMLSidebar}}

Das **`<meter>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert entweder einen Skalarwert innerhalb eines bekannten Bereichs oder einen Bruchwert.

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

  - : Der aktuelle numerische Wert. Dieser muss zwischen den minimalen und maximalen Werten (`min` Attribut und `max` Attribut) liegen, wenn diese angegeben sind. Wenn nicht spezifiziert oder fehlerhaft, ist der Wert `0`. Wenn spezifiziert, aber nicht innerhalb des vom `min` Attribut und `max` Attribut angegebenen Bereichs, entspricht der Wert dem nächstgelegenen Ende des Bereichs.

    > [!NOTE]
    > Wenn nicht das `value` Attribut zwischen `0` und `1` (einschließlich) liegt, sollten die `min` und `max` Attribute den Bereich definieren, damit der Wert des `value` Attributs innerhalb dieses Bereichs liegt.

- [`min`](/de/docs/Web/HTML/Attributes/min)
  - : Die untere numerische Grenze des gemessenen Bereichs. Diese muss kleiner als der maximale Wert (`max` Attribut) sein, wenn angegeben. Wenn nicht spezifiziert, beträgt der Mindestwert `0`.
- [`max`](/de/docs/Web/HTML/Attributes/max)
  - : Die obere numerische Grenze des gemessenen Bereichs. Diese muss größer als der Mindestwert (`min` Attribut) sein, wenn angegeben. Wenn nicht spezifiziert, beträgt der Höchstwert `1`.
- `low`
  - : Die obere numerische Grenze des niedrigen Endes des gemessenen Bereichs. Diese muss größer als der Mindestwert (`min` Attribut) sein und sie muss auch kleiner als der hohe Wert und der maximale Wert (`high` Attribut und `max` Attribut) sein, wenn welche angegeben sind. Wenn nicht spezifiziert oder wenn kleiner als der Mindestwert, ist der `low` Wert gleich dem Mindestwert.
- `high`
  - : Die untere numerische Grenze des hohen Endes des gemessenen Bereichs. Diese muss kleiner als der maximale Wert (`max` Attribut) sein und sie muss auch größer als der niedrige Wert und der Mindestwert (`low` Attribut und `min` Attribut) sein, wenn welche angegeben sind. Wenn nicht spezifiziert oder wenn größer als der Höchstwert, ist der `high` Wert gleich dem Höchstwert.
- `optimum`
  - : Dieses Attribut gibt den optimalen numerischen Wert an. Es muss innerhalb des Bereichs (wie durch das `min` Attribut und das `max` Attribut definiert) liegen. Bei Verwendung mit dem `low` Attribut und dem `high` Attribut gibt es einen Hinweis darauf, welcher Bereich als bevorzugt betrachtet wird. Zum Beispiel, wenn es zwischen dem `min` Attribut und dem `low` Attribut liegt, wird der untere Bereich als bevorzugt betrachtet. Der Browser kann die Farbe der Anzeigeleiste des Meters je nach Wert und optimalem Wert unterschiedlich färben.
- `form`
  - : Dieses optionale Attribut wird verwendet, um explizit einen {{HTMLElement("form")}}-Besitzer für das `<meter>`-Element festzulegen. Wenn es weggelassen wird, ist das `<meter>` seinem Vorfahren `<form>`-Element zugeordnet oder der Formularassoziation, die durch das `form`-Attribut an einem anderen Vorfahren-Element festgelegt wurde, wie z. B. bei einem {{HTMLElement("fieldset")}}, sofern vorhanden. Wenn es enthalten ist, muss der Wert die [`id`](/de/docs/Web/HTML/Global_attributes/id) eines `<form>` im gleichen Baum sein.

## Beispiele

### Einfaches Beispiel

#### HTML

```html
<p>Battery level: <meter min="0" max="100" value="75">75%</meter></p>
```

#### Ergebnis

{{EmbedLiveSample("Basic_example", 300, 60)}}

### Beispiel mit hohem und niedrigem Bereich

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
          >Flussinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Satzinhalt</a
        >, beschriftbares Inhalt, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Satzinhalt</a
        >, aber es darf kein <code>&#x3C;meter></code>-Element unter seinen Nachkommen geben.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Satzinhalt</a
        >
        akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Roles/structural_roles#structural_roles_with_html_equivalents">meter</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässige ARIA-Rollen</th>
      <td>Keine <code>Rolle</code> erlaubt</td>
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
- {{cssxref("::-webkit-meter-bar")}}, {{cssxref("::-webkit-meter-inner-element") }}, {{cssxref("::-webkit-meter-even-less-good-value")}}, {{cssxref("::-webkit-meter-optimum-value")}}, {{cssxref("::-webkit-meter-suboptimum-value")}}: Nicht-standardisierte Pseudoelemente
