---
title: HTML-Element `<progress>` für Fortschrittsanzeigen
short-title: <progress>
slug: Web/HTML/Reference/Elements/progress
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

Das [HTML](/de/docs/Web/HTML)-Element **`<progress>`** zeigt den Fortschritt einer Aufgabe an, üblicherweise als Fortschrittsbalken.

{{InteractiveExample("HTML Demo: &lt;progress&gt;", "tabbed-standard")}}

```html interactive-example
<label for="file">File progress:</label>

<progress id="file" max="100" value="70">70%</progress>
```

```css interactive-example
label {
  padding-right: 10px;
  font-size: 1rem;
}
```

## Attribute

Dieses Element unterstützt die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- [`max`](/de/docs/Web/HTML/Reference/Attributes/max)
  - : Dieses Attribut gibt an, wie viel Arbeit für die durch das `progress`-Element dargestellte Aufgabe insgesamt erforderlich ist. Falls das Attribut `max` vorhanden ist, muss sein Wert größer als `0` und eine gültige Gleitkommazahl sein. Der Standardwert ist `1`.
- `value`
  - : Dieses Attribut gibt an, welcher Anteil der Aufgabe abgeschlossen ist. Sein Wert muss eine gültige Gleitkommazahl zwischen `0` und `max` sein beziehungsweise zwischen `0` und `1`, wenn `max` fehlt. Ist das Attribut `value` nicht vorhanden, ist der Fortschrittsbalken unbestimmt. Das bedeutet, dass eine Aktivität läuft, ohne dass ihre voraussichtliche Dauer angegeben wird.

> [!NOTE]
> Anders als beim Element {{htmlelement("meter")}} ist der Mindestwert immer 0. Das Attribut `min` ist für das Element `<progress>` nicht zulässig.

> [!NOTE]
> Mit der Pseudoklasse {{cssxref(":indeterminate")}} können Sie unbestimmte Fortschrittsbalken auswählen. Um einen Fortschrittsbalken nach dem Festlegen eines Werts wieder in einen unbestimmten Zustand zu versetzen, müssen Sie das Attribut `value` mit [`element.removeAttribute('value')`](/de/docs/Web/API/Element/removeAttribute) entfernen.

## Barrierefreiheit

### Beschriftung

In den meisten Fällen sollten Sie bei der Verwendung von `<progress>` eine barrierefreie Beschriftung bereitstellen. Sie können wie bei jedem Element mit `role="progressbar"` die üblichen ARIA-Attribute zur Beschriftung verwenden, [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label). Alternativ können Sie für `<progress>` das Element {{htmlelement("label")}} verwenden.

> [!NOTE]
> Text zwischen den Tags des Elements ist keine barrierefreie Beschriftung. Er wird lediglich als Fallback für ältere Browser empfohlen, die dieses Element nicht unterstützen.

#### Beispiele

```html
<label>
  Uploading Document: <progress value="70" max="100">70 %</progress>
</label>

<!-- OR -->
<br />

<label for="progress-bar">Uploading Document</label>
<progress id="progress-bar" value="70" max="100">70 %</progress>
```

#### Ergebnis

{{EmbedLiveSample('Labeling')}}

### Beschreibung eines bestimmten Bereichs

Wenn das Element `<progress>` den Ladefortschritt eines Seitenbereichs beschreibt, verweisen Sie mit [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) auf die Statusanzeige und setzen Sie [`aria-busy="true"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy) für den Bereich, der aktualisiert wird. Entfernen Sie das Attribut `aria-busy`, sobald der Ladevorgang abgeschlossen ist.

#### Beispiele

```html
<div aria-busy="true" aria-describedby="progress-bar">
  <!-- content is for this region is loading -->
</div>

<!-- ... -->

<progress id="progress-bar" aria-label="Content loading…"></progress>
```

##### Ergebnis

{{EmbedLiveSample('Describing a particular region')}}

## Beispiele

```html live-sample___basic-progress
<progress value="70" max="100">70 %</progress>
```

### Ergebnis

{{ EmbedLiveSample("basic-progress", 200, 50) }}

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Flussinhalt</a>,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Formulierungsinhalt</a>, beschriftbarer Inhalt,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#palpable_content">wahrnehmbarer Inhalt</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Formulierungsinhalt</a>, aber unter den
        Nachfahren darf sich kein <code>&#x3C;progress></code>-Element befinden.
      </td>
    </tr>
    <tr>
      <th scope="row">Weglassen von Tags</th>
      <td>Keines; sowohl das Start- als auch das End-Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Elternelemente</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Formulierungsinhalt</a> zulässt.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/progressbar_role"><code>progressbar</code></a></td>
    </tr>
    <tr>
      <th scope="row">Zulässige ARIA-Rollen</th>
      <td>Kein <code>role</code> zulässig</td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>[`HTMLProgressElement`](/de/docs/Web/API/HTMLProgressElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Vertikale Formularsteuerelemente erstellen](/de/docs/Web/CSS/Guides/Writing_modes/Vertical_controls)
- {{htmlelement("meter")}}
- {{ cssxref(":indeterminate") }}
- {{ cssxref("-moz-orient") }}
- {{ cssxref("::-moz-progress-bar") }}
- {{ cssxref("::-webkit-progress-bar") }}
- {{ cssxref("::-webkit-progress-value") }}
- {{ cssxref("::-webkit-progress-inner-element") }}
