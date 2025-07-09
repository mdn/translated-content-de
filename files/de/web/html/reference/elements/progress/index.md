---
title: "<progress>: Das Fortschrittsanzeigeelement"
slug: Web/HTML/Reference/Elements/progress
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das **`<progress>`** [HTML](/de/docs/Web/HTML)-Element zeigt einen Anzeiger, der den Fortschritt einer Aufgabe darstellt, typischerweise als Fortschrittsbalken angezeigt.

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

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- [`max`](/de/docs/Web/HTML/Reference/Attributes/max)
  - : Dieses Attribut beschreibt, wie viel Arbeit die durch das `progress`-Element angezeigte Aufgabe erfordert. Das `max`-Attribut muss, falls vorhanden, einen Wert größer als `0` und eine gültige Gleitkommazahl haben. Der Standardwert ist `1`.
- `value`
  - : Dieses Attribut gibt an, wie viel von der Aufgabe bereits abgeschlossen wurde. Es muss eine gültige Gleitkommazahl zwischen `0` und `max` oder zwischen `0` und `1` sein, wenn `max` weggelassen wird. Wenn kein `value`-Attribut vorhanden ist, ist die Fortschrittsanzeige unbestimmt; dies zeigt an, dass eine Aktivität im Gange ist, ohne Anhaltspunkt, wie lange sie voraussichtlich dauern wird.

> [!NOTE]
> Im Gegensatz zum {{htmlelement("meter")}}-Element ist der Mindestwert immer 0, und das `min`-Attribut ist für das `<progress>`-Element nicht zulässig.

> [!NOTE]
> Die {{cssxref(":indeterminate")}} Pseudo-Klasse kann verwendet werden, um auf unbestimmte Fortschrittsbalken zuzugreifen. Um den Fortschrittsbalken nach der Wertzuteilung auf unbestimmt zu setzen, müssen Sie das Werteattribut mit [`element.removeAttribute('value')`](/de/docs/Web/API/Element/removeAttribute) entfernen.

## Barrierefreiheit

### Beschriftung

In den meisten Fällen sollten Sie eine zugängliche Beschriftung bereitstellen, wenn Sie `<progress>` verwenden. Während Sie die standardmäßigen ARIA-Beschriftungsattribute [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) wie für jedes Element mit `role="progressbar"` verwenden können, können Sie alternativ beim Gebrauch von `<progress>` das {{htmlelement("label")}}-Element nutzen.

> [!NOTE]
> Text, der zwischen den Tags des Elements platziert wird, ist keine zugängliche Beschriftung; es wird nur als Fallback für alte Browser, die dieses Element nicht unterstützen, empfohlen.

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

{{EmbedLiveSample('Labelling')}}

### Beschreibung eines bestimmten Bereichs

Wenn das `<progress>`-Element den Ladefortschritt eines Abschnitts einer Seite beschreibt, verwenden Sie [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby), um auf den Status zu verweisen, und setzen Sie [`aria-busy="true"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy) auf den Abschnitt, der aktualisiert wird, wobei das `aria-busy`-Attribut entfernt wird, wenn das Laden abgeschlossen ist.

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

```html
<progress value="70" max="100">70 %</progress>
```

### Ergebnis

{{ EmbedLiveSample("Examples", 200, 50) }}

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Fließinhalt</a>,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phrasinhalte</a>, labelbare Inhalte,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#palpable_content">greifbare Inhalte</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phrasinhalte</a>, aber es darf kein <code>&#x3C;progress></code>-Element unter seinen
        Nachkommen geben.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phrasinhalte</a> akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/progressbar_role"><code>progressbar</code></a></td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>Keine <code>role</code> erlaubt</td>
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

- [Erstellen von vertikalen Formularelementen](/de/docs/Web/CSS/CSS_writing_modes/Vertical_controls)
- {{htmlelement("meter")}}
- {{ cssxref(":indeterminate") }}
- {{ cssxref("-moz-orient") }}
- {{ cssxref("::-moz-progress-bar") }}
- {{ cssxref("::-webkit-progress-bar") }}
- {{ cssxref("::-webkit-progress-value") }}
- {{ cssxref("::-webkit-progress-inner-element") }}
