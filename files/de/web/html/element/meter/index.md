---
title: "<meter>: Das HTML Meter-Element"
slug: Web/HTML/Element/meter
l10n:
  sourceCommit: 9c09b183a5ce844a75c2f22e909d03f71ca329fc
---

{{HTMLSidebar}}

Das **`<meter>`** [HTML](/de/docs/Web/HTML) Element repräsentiert entweder einen skalaren Wert innerhalb eines bekannten Bereichs oder einen Bruchwert.

{{EmbedInteractiveExample("pages/tabbed/meter.html", "tabbed-shorter")}}

## Attribute

Dieses Element schließt die [globalen Attribute](/de/docs/Web/HTML/Global_attributes) ein.

- `value`

  - : Der aktuelle numerische Wert. Dieser muss zwischen dem minimalen und maximalen Wert (`min` Attribut und `max` Attribut) liegen, wenn diese angegeben sind. Wenn nicht angegeben oder fehlerhaft, ist der Wert `0`. Wenn angegeben, aber nicht innerhalb des vom `min` Attribut und `max` Attribut angegebenen Bereichs, ist der Wert gleich dem nächstgelegenen Rand des Bereichs.

    > [!NOTE]
    > Sofern das `value` Attribut nicht zwischen `0` und `1` (einschließlich) liegt, sollten die Attribute `min` und `max` den Bereich definieren, sodass der Wert des `value` Attributs innerhalb dessen liegt.

- [`min`](/de/docs/Web/HTML/Attributes/min)
  - : Die untere numerische Grenze des Messbereichs. Diese muss kleiner als der maximale Wert (`max` Attribut) sein, falls angegeben. Wenn nicht angegeben, ist der minimale Wert `0`.
- [`max`](/de/docs/Web/HTML/Attributes/max)
  - : Die obere numerische Grenze des Messbereichs. Diese muss größer als der minimale Wert (`min` Attribut) sein, falls angegeben. Wenn nicht angegeben, ist der maximale Wert `1`.
- `low`
  - : Die obere numerische Grenze des unteren Endes des Messbereichs. Diese muss größer als der minimale Wert (`min` Attribut) sein und ebenfalls kleiner als der hohe Wert und maximale Wert (`high` Attribut und `max` Attribut, falls angegeben). Wenn nicht angegeben oder kleiner als der minimale Wert, ist der `low` Wert gleich dem minimalen Wert.
- `high`
  - : Die untere numerische Grenze des hohen Endes des Messbereichs. Diese muss kleiner als der maximale Wert (`max` Attribut) sein und ebenfalls größer als der niedrige Wert und minimale Wert (`low` Attribut und `min` Attribut, falls angegeben). Wenn nicht angegeben oder größer als der maximale Wert, ist der `high` Wert gleich dem maximalen Wert.
- `optimum`
  - : Dieses Attribut kennzeichnet den optimalen numerischen Wert. Er muss innerhalb des durch die Attribute `min` und `max` definierten Bereichs liegen. In Verbindung mit den Attributen `low` und `high` gibt es einen Hinweis darauf, welcher Bereich als vorzuziehen angesehen wird. Zum Beispiel, wenn es zwischen dem `min` Attribut und dem `low` Attribut liegt, wird der untere Bereich als bevorzugt angesehen. Der Browser kann die Leiste des Meters je nach Wert unterschiedlich färben, abhängig davon, ob der Wert kleiner oder gleich dem Optimalwert ist.
- `form`
  - : Dieses optionale Attribut wird verwendet, um explizit einen {{HTMLElement("form")}} Besitzer für das `<meter>` Element festzulegen. Wenn weggelassen, wird das `<meter>` mit seinem übergeordneten `<form>` Element oder der durch das `form` Attribut an einem anderen übergeordneten Element festgelegten Form-Assoziation, wie z.B. bei einem {{HTMLElement("fieldset")}}, in Verbindung gebracht. Wenn enthalten, muss der Wert die [`id`](/de/docs/Web/HTML/Global_attributes/id) eines `<form>` im gleichen Baum sein.

## Beispiele

### Einfaches Beispiel

#### HTML

```html
<p>Batteriestand: <meter min="0" max="100" value="75">75%</meter></p>
```

#### Ergebnis

{{EmbedLiveSample("Simple_example", 300, 60)}}

### Beispiel für hohen und niedrigen Bereich

Beachten Sie, dass in diesem Beispiel das [`min`](#min) Attribut weggelassen wird. Dies ist erlaubt, da es standardmäßig `0` ist.

#### HTML

```html
<p>
  Prüfungsergebnis des Studenten:
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
          >Fließende Inhalte</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierungsinhalte</a
        >, beschriftbare Inhalte, fühlbare Inhalte.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Inhalte</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierungsinhalte</a
        >, aber es darf kein <code>&#x3C;meter></code> Element unter seinen
        Nachfahren vorhanden sein.
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
          >Phrasierungsinhalte</a
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
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>Keine <code>role</code> erlaubt</td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>{{domxref("HTMLMeterElement")}}</td>
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
- {{cssxref("::-webkit-meter-bar")}}, {{cssxref("::-webkit-meter-inner-element") }}, {{cssxref("::-webkit-meter-even-less-good-value")}}, {{cssxref("::-webkit-meter-optimum-value")}}, {{cssxref("::-webkit-meter-suboptimum-value")}}: nicht standardisierte Pseudoelemente
