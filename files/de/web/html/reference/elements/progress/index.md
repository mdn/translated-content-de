---
title: "`<progress>` HTML-Fortschrittsanzeige-Element"
short-title: <progress>
slug: Web/HTML/Reference/Elements/progress
l10n:
  sourceCommit: 11a5944cd0a3bf015b2ee9c7ee4c55025dd878ca
---

Das **`<progress>`**-Element [HTML](/de/docs/Web/HTML) zeigt einen Indikator an, der den Abschlussfortschritt einer Aufgabe darstellt, typischerweise als Fortschrittsbalken angezeigt.

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
  - : Dieses Attribut beschreibt, wie viel Arbeit die durch das `progress`-Element angezeigte Aufgabe erfordert. Das `max`-Attribut muss, wenn vorhanden, einen Wert größer als `0` haben und eine gültige Gleitkommazahl sein. Der Standardwert ist `1`.
- `value`
  - : Dieses Attribut gibt an, wie viel von der Aufgabe bereits abgeschlossen wurde. Es muss eine gültige Gleitkommazahl zwischen `0` und `max` sein oder zwischen `0` und `1`, wenn `max` weggelassen wird. Wenn kein `value`-Attribut vorhanden ist, ist der Fortschrittsbalken unbestimmt; dies zeigt an, dass eine Aktivität im Gange ist, ohne Hinweis darauf, wie lange sie voraussichtlich dauern wird.

> [!NOTE]
> Anders als beim {{htmlelement("meter")}}-Element ist der Mindestwert immer 0, und das `min`-Attribut ist für das `<progress>`-Element nicht zulässig.

> [!NOTE]
> Die Pseudo-Klasse {{cssxref(":indeterminate")}} kann verwendet werden, um unbestimmte Fortschrittsbalken zu bestimmen. Um den Fortschrittsbalken nach der Vergabe eines Wertes auf unbestimmt zu ändern, müssen Sie das value-Attribut mit [`element.removeAttribute('value')`](/de/docs/Web/API/Element/removeAttribute) entfernen.

## Barrierefreiheit

### Beschriftung

In den meisten Fällen sollten Sie eine zugängliche Beschriftung bereitstellen, wenn Sie `<progress>` verwenden. Während Sie die Standard-ARIA-Beschriftungsattribute [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) verwenden können, wie Sie es für jedes Element mit `role="progressbar"` tun würden, können Sie bei Verwendung von `<progress>` alternativ das {{htmlelement("label")}}-Element verwenden.

> [!NOTE]
> Text, der zwischen den Element-Tags platziert wird, ist keine zugängliche Beschriftung, sondern wird nur als Rückgriff für alte Browser empfohlen, die dieses Element nicht unterstützen.

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

Wenn das `<progress>`-Element den Ladefortschritt eines Abschnitts einer Seite beschreibt, verwenden Sie [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby), um auf den Status zu verweisen, und setzen Sie [`aria-busy="true"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy) auf den Abschnitt, der aktualisiert wird, und entfernen Sie das `aria-busy`-Attribut, wenn der Ladevorgang abgeschlossen ist.

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
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Flussinhalt</a>,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phrasinhalte</a>, beschriftbare Inhalte,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#palpable_content">fühlbare Inhalte</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phrasinhalte</a>, aber es darf kein <code>&#x3C;progress></code>-Element unter seinen Nachkommen geben.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phrasinhalte</a> akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/progressbar_role"><code>progressbar</code></a></td>
    </tr>
    <tr>
      <th scope="row">Zulässige ARIA-Rollen</th>
      <td>Keine <code>role</code> zulässig</td>
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

- [Erstellen vertikaler Formularsteuerelemente](/de/docs/Web/CSS/Guides/Writing_modes/Vertical_controls)
- {{htmlelement("meter")}}
- {{ cssxref(":indeterminate") }}
- {{ cssxref("-moz-orient") }}
- {{ cssxref("::-moz-progress-bar") }}
- {{ cssxref("::-webkit-progress-bar") }}
- {{ cssxref("::-webkit-progress-value") }}
- {{ cssxref("::-webkit-progress-inner-element") }}
