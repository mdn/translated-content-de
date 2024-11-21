---
title: "<meter>: Das HTML-Meter-Element"
slug: Web/HTML/Element/meter
l10n:
  sourceCommit: f10015d1752d5668d8fe0de29f9d9807de475d58
---

{{HTMLSidebar}}

Das **`<meter>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert entweder einen Skalarwert innerhalb eines bekannten Bereichs oder einen Bruchwert.

{{EmbedInteractiveExample("pages/tabbed/meter.html", "tabbed-shorter")}}

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `value`

  - : Der aktuelle numerische Wert. Dieser muss, wenn sie angegeben sind, zwischen dem minimalen und maximalen Wert (`min`-Attribut und `max`-Attribut) liegen. Wenn nicht angegeben oder fehlerhaft, ist der Wert `0`. Wenn angegeben, aber nicht innerhalb des durch das `min`-Attribut und das `max`-Attribut definierten Bereichs, entspricht der Wert dem nächstgelegenen Ende des Bereichs.

    > [!NOTE]
    > Sofern das `value`-Attribut nicht zwischen `0` und `1` (einschließlich) liegt, sollten die `min`- und `max`-Attribute den Bereich definieren, sodass der Wert des `value`-Attributs innerhalb dieses liegt.

- [`min`](/de/docs/Web/HTML/Attributes/min)
  - : Die untere numerische Grenze des gemessenen Bereichs. Diese muss, sofern angegeben, kleiner als der maximale Wert (`max`-Attribut) sein. Wenn nicht angegeben, ist der minimale Wert `0`.
- [`max`](/de/docs/Web/HTML/Attributes/max)
  - : Die obere numerische Grenze des gemessenen Bereichs. Diese muss, sofern angegeben, größer als der minimale Wert (`min`-Attribut) sein. Wenn nicht angegeben, ist der maximale Wert `1`.
- `low`
  - : Die obere numerische Grenze des niedrigen Endes des gemessenen Bereichs. Diese muss größer als der minimale Wert (`min`-Attribut) sein und ebenfalls kleiner als der hohe Wert und der maximale Wert (`high`-Attribut und `max`-Attribut) sein, sofern angegeben. Wenn nicht angegeben oder kleiner als der minimale Wert, entspricht der `low`-Wert dem minimalen Wert.
- `high`
  - : Die untere numerische Grenze des hohen Endes des gemessenen Bereichs. Diese muss kleiner als der maximale Wert (`max`-Attribut) sein und ebenfalls größer als der `low`-Wert und der minimale Wert (`low`-Attribut und `min`-Attribut), sofern angegeben. Wenn nicht angegeben oder größer als der maximale Wert, entspricht der `high`-Wert dem maximalen Wert.
- `optimum`
  - : Dieses Attribut gibt den optimalen numerischen Wert an. Es muss innerhalb des Bereichs (wie durch das `min`-Attribut und das `max`-Attribut definiert) liegen. Wenn es zusammen mit den Attributen `low` und `high` verwendet wird, gibt es an, welcher Bereich als vorzuziehen angesehen wird. Zum Beispiel, wenn es zwischen dem `min`-Attribut und dem `low`-Attribut liegt, wird der niedrigere Bereich als bevorzugt betrachtet. Der Browser kann die Meterleiste unterschiedlich einfärben, je nachdem, ob der Wert kleiner oder gleich dem optimalen Wert ist.
- `form`
  - : Dieses optionale Attribut wird verwendet, um explizit einen {{HTMLElement("form")}}-Eigentümer für das `<meter>`-Element festzulegen. Wenn weggelassen, wird das `<meter>` mit seinem Vorfahren `<form>`-Element oder der Formularzuordnung verbunden, die durch das `form`-Attribut auf einem anderen Vorfahren-Element, wie zum Beispiel einem {{HTMLElement("fieldset")}}, festgelegt wurde, sofern vorhanden. Wenn vorhanden, muss der Wert die [`id`](/de/docs/Web/HTML/Global_attributes/id) eines `<form>` im gleichen Baum sein.

## Beispiele

### Einfaches Beispiel

#### HTML

```html
<p>Battery level: <meter min="0" max="100" value="75">75%</meter></p>
```

#### Ergebnis

{{EmbedLiveSample("Basic_example", 300, 60)}}

### Beispiel mit hohen und niedrigen Bereich

Beachten Sie, dass in diesem Beispiel das [`min`](#min)-Attribut weggelassen wird. Dies ist erlaubt, da es standardmäßig auf `0` gesetzt wird.

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
          >Phrasinhalte</a
        >, beschriftbares und fühlbares Inhaltselement.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasinhalte</a
        >, aber es darf kein <code>&#x3C;meter></code>-Element unter seinen
        Nachkommen geben.
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
          >Phrasinhalte</a
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
- {{cssxref("::-webkit-meter-bar")}}, {{cssxref("::-webkit-meter-inner-element") }}, {{cssxref("::-webkit-meter-even-less-good-value")}}, {{cssxref("::-webkit-meter-optimum-value")}}, {{cssxref("::-webkit-meter-suboptimum-value")}}: nicht standardisierte Pseudo-Elemente
