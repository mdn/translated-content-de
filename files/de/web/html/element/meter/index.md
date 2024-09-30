---
title: "<meter>: Das HTML-Meter-Element"
slug: Web/HTML/Element/meter
l10n:
  sourceCommit: 9c09b183a5ce844a75c2f22e909d03f71ca329fc
---

{{HTMLSidebar}}

Das **`<meter>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert entweder einen skalaren Wert innerhalb eines bekannten Bereichs oder einen Bruchwert.

{{EmbedInteractiveExample("pages/tabbed/meter.html", "tabbed-shorter")}}

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `value`

  - : Der aktuelle numerische Wert. Dieser muss zwischen den minimalen und maximalen Werten (Attributen `min` und `max`) liegen, wenn diese angegeben sind. Falls nicht spezifiziert oder ungültig, ist der Wert `0`. Falls angegeben, aber nicht innerhalb des durch die Attribute `min` und `max` angegebenen Bereichs, ist der Wert gleich dem nächsten Ende des Bereichs.

    > [!NOTE]
    > Sofern das `value`-Attribut nicht zwischen `0` und `1` (einschließlich) liegt, sollten die Attribute `min` und `max` den Bereich definieren, sodass der Wert des `value`-Attributs darin liegt.

- [`min`](/de/docs/Web/HTML/Attributes/min)
  - : Die untere numerische Grenze des gemessenen Bereichs. Diese muss kleiner als der maximale Wert (Attribut `max`) sein, falls angegeben. Falls nicht angegeben, ist der Mindestwert `0`.
- [`max`](/de/docs/Web/HTML/Attributes/max)
  - : Die obere numerische Grenze des gemessenen Bereichs. Diese muss größer als der Mindestwert (Attribut `min`) sein, falls angegeben. Falls nicht angegeben, ist der Maximalwert `1`.
- `low`
  - : Die obere numerische Grenze des unteren Endes des gemessenen Bereichs. Diese muss größer als der Mindestwert (`min`-Attribut) und auch kleiner als der hohe Wert und der Maximalwert (Attribute `high` und `max`) sein, falls beide angegeben sind. Falls nicht angegeben oder kleiner als der Mindestwert, ist der `low`-Wert gleich dem Mindestwert.
- `high`
  - : Die untere numerische Grenze des oberen Endes des gemessenen Bereichs. Diese muss kleiner als der Maximalwert (`max`-Attribut) und auch größer als der niedrige Wert und der Mindestwert (Attribute `low` und `min`) sein, falls beide angegeben sind. Falls nicht angegeben oder größer als der Maximalwert, ist der `high`-Wert gleich dem Maximalwert.
- `optimum`
  - : Dieses Attribut gibt den optimalen numerischen Wert an. Es muss innerhalb des Bereichs liegen, wie er durch die Attribute `min` und `max` definiert ist. In Kombination mit den Attributen `low` und `high` gibt es an, welcher Abschnitt des Bereichs als vorzugswürdig betrachtet wird. Zum Beispiel, wenn es zwischen den Attributen `min` und `low` liegt, wird der untere Bereich als bevorzugt betrachtet. Der Browser kann die Anzeige der Meterleiste unterschiedlich färben, abhängig davon, ob der Wert kleiner oder gleich dem optimalen Wert ist.
- `form`
  - : Dieses optionale Attribut wird verwendet, um explizit einen {{HTMLElement("form")}}-Eigentümer für das `<meter>`-Element festzulegen. Wenn es weggelassen wird, wird das `<meter>` mit seinem Vorfahren `<form>`-Element oder der Formularzuordnung durch das `form`-Attribut eines anderen Vorfahrenelements, wie einem {{HTMLElement("fieldset")}}, verbunden. Falls angegeben, muss der Wert die [`id`](/de/docs/Web/HTML/Global_attributes/id) eines `<form>` im selben Baum sein.

## Beispiele

### Einfaches Beispiel

#### HTML

```html
<p>Battery level: <meter min="0" max="100" value="75">75%</meter></p>
```

#### Ergebnis

{{EmbedLiveSample("Simple_example", 300, 60)}}

### Beispiel mit hohem und niedrigem Bereich

Beachten Sie, dass in diesem Beispiel das [`min`](#min)-Attribut weggelassen wird. Dies ist zulässig, da es standardmäßig `0` ist.

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
          >Fließendes Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phraseninhalt</a
        >, beschriftungsfähiger Inhalt, fühlbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phraseninhalt</a
        >, aber es darf kein <code>&#x3C;meter></code>-Element unter seinen
        Nachfahren enthalten sein.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Eröffnungs- als auch das Schluss-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phraseninhalt</a
        > akzeptiert.
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
      <td>Keine <code>role</code> zulässig</td>
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

- [Erstellen vertikaler Formularsteuerelemente](/de/docs/Web/CSS/CSS_writing_modes/Vertical_controls)
- {{HTMLElement("progress")}}
- {{cssxref("::-webkit-meter-bar")}}, {{cssxref("::-webkit-meter-inner-element") }}, {{cssxref("::-webkit-meter-even-less-good-value")}}, {{cssxref("::-webkit-meter-optimum-value")}}, {{cssxref("::-webkit-meter-suboptimum-value")}}: nicht-standardmäßige Pseudoelemente
