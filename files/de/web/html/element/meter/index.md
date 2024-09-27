---
title: "<meter>: Das HTML Meter-Element"
slug: Web/HTML/Element/meter
l10n:
  sourceCommit: 9c09b183a5ce844a75c2f22e909d03f71ca329fc
---

{{HTMLSidebar}}

Das **`<meter>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert entweder einen Skalarwert innerhalb eines bekannten Bereichs oder einen Bruchwert.

{{EmbedInteractiveExample("pages/tabbed/meter.html", "tabbed-shorter")}}

## Attribute

Dieses Element beinhaltet die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `value`

  - : Der aktuelle numerische Wert. Dieser muss zwischen den minimalen und maximalen Werten (`min`-Attribut und `max`-Attribut) liegen, wenn diese angegeben sind. Wenn nicht angegeben oder fehlerhaft, ist der Wert `0`. Wenn angegeben, aber nicht innerhalb des durch das `min`-Attribut und `max`-Attribut festgelegten Bereichs, ist der Wert gleich dem nächstgelegenen Ende des Bereichs.

    > [!NOTE]
    > Sofern das `value`-Attribut nicht zwischen `0` und `1` (einschließlich) liegt, sollten die `min`- und `max`-Attribute den Bereich definieren, sodass der Wert des `value`-Attributs innerhalb liegt.

- [`min`](/de/docs/Web/HTML/Attributes/min)
  - : Die untere numerische Grenze des gemessenen Bereichs. Diese muss kleiner sein als der maximale Wert (`max`-Attribut), falls angegeben. Wenn nicht angegeben, beträgt der Mindestwert `0`.
- [`max`](/de/docs/Web/HTML/Attributes/max)
  - : Die obere numerische Grenze des gemessenen Bereichs. Diese muss größer sein als der minimale Wert (`min`-Attribut), falls angegeben. Wenn nicht angegeben, beträgt der Höchstwert `1`.
- `low`
  - : Die obere numerische Grenze des unteren Bereichs des gemessenen Bereichs. Diese muss größer sein als der minimale Wert (`min`-Attribut) und auch kleiner als der hohe Wert und der maximale Wert (`high`-Attribut und `max`-Attribut), falls angegeben. Wenn nicht angegeben oder kleiner als der minimale Wert, ist der `low`-Wert gleich dem minimalen Wert.
- `high`
  - : Die untere numerische Grenze des oberen Bereichs des gemessenen Bereichs. Diese muss kleiner sein als der maximale Wert (`max`-Attribut) und auch größer als der niedrige Wert und der minimale Wert (`low`-Attribut und `min`-Attribut), falls angegeben. Wenn nicht angegeben oder größer als der maximale Wert, ist der `high`-Wert gleich dem maximalen Wert.
- `optimum`
  - : Dieses Attribut gibt den optimalen numerischen Wert an und muss innerhalb des Bereichs (wie durch das `min`-Attribut und `max`-Attribut definiert) liegen. In Verbindung mit dem `low`-Attribut und `high`-Attribut gibt es an, welche Position innerhalb des Bereichs als vorzuziehen angesehen wird. Zum Beispiel, wenn es zwischen dem `min`-Attribut und dem `low`-Attribut liegt, wird der niedrigere Bereich als bevorzugt angesehen. Der Browser könnte die Leiste des Meters abhängig davon unterschiedlich färben, ob der Wert kleiner oder gleich dem optimalen Wert ist.
- `form`
  - : Dieses optionale Attribut wird verwendet, um explizit einen {{HTMLElement("form")}}-Inhaber für das `<meter>`-Element festzulegen. Wenn weggelassen, ist das `<meter>` mit seinem Vorfahren `<form>`-Element oder der Formularassoziation verknüpft, die durch das `form`-Attribut auf einem anderen Vorfahrenelement, wie z.B. einem {{HTMLElement("fieldset")}}, festgelegt wurde. Wenn angegeben, muss der Wert die [`id`](/de/docs/Web/HTML/Global_attributes/id) eines `<form>` im selben Baum sein.

## Beispiele

### Einfaches Beispiel

#### HTML

```html
<p>Battery level: <meter min="0" max="100" value="75">75%</meter></p>
```

#### Ergebnis

{{EmbedLiveSample("Simple_example", 300, 60)}}

### Beispiel für hohen und niedrigen Bereich

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
          >Flussinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasinhalte</a
        >, beschriftungsfähiger Inhalt, wahrnehmbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasinhalte</a
        >, aber es darf kein <code>&#x3C;meter></code>-Element unter seinen
        Nachkommen sein.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Anfangs- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
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

- [Erstellen von vertikalen Formularsteuerelementen](/de/docs/Web/CSS/CSS_writing_modes/Vertical_controls)
- {{HTMLElement("progress")}}
- {{cssxref("::-webkit-meter-bar")}}, {{cssxref("::-webkit-meter-inner-element") }}, {{cssxref("::-webkit-meter-even-less-good-value")}}, {{cssxref("::-webkit-meter-optimum-value")}}, {{cssxref("::-webkit-meter-suboptimum-value")}}: nicht standardisierte Pseudoelemente
