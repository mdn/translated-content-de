---
title: "<progress>: Das Fortschrittsanzeige-Element"
slug: Web/HTML/Element/progress
l10n:
  sourceCommit: b7955e77cd4293adf45ef23686df50b0305f02ad
---

{{HTMLSidebar}}

Das **`<progress>`** [HTML](/de/docs/Web/HTML)-Element zeigt ein Indikator, der den Fortschritt der Erledigung einer Aufgabe anzeigt, typischerweise in Form eines Fortschrittsbalkens.

{{EmbedInteractiveExample("pages/tabbed/progress.html", "tabbed-standard")}}

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- [`max`](/de/docs/Web/HTML/Attributes/max)
  - : Dieses Attribut beschreibt, wie viel Arbeit die durch das `progress`-Element angezeigte Aufgabe erfordert. Das `max`-Attribut, falls vorhanden, muss einen Wert größer als `0` und eine gültige Fließkommazahl haben. Der Standardwert ist `1`.
- `value`
  - : Dieses Attribut gibt an, wie viel von der Aufgabe bereits abgeschlossen wurde. Es muss eine gültige Fließkommazahl zwischen `0` und `max` sein, oder zwischen `0` und `1`, wenn `max` weggelassen wird. Wenn kein `value`-Attribut vorhanden ist, ist der Fortschrittsbalken unbestimmt; dies zeigt an, dass eine Aktivität im Gange ist, ohne Hinweis darauf, wie lange sie voraussichtlich dauern wird.

> [!NOTE]
> Im Gegensatz zum {{htmlelement("meter")}}-Element ist der Mindestwert immer 0, und das `min`-Attribut ist für das `<progress>`-Element nicht erlaubt.

> [!NOTE]
> Die {{cssxref(":indeterminate")}} Pseudoklasse kann verwendet werden, um gegen unbestimmte Fortschrittsbalken zu übereinstimmen. Um den Fortschrittsbalken auf unbestimmt zu setzen, nachdem er einen Wert erhalten hat, müssen Sie das Value-Attribut mit [`element.removeAttribute('value')`](/de/docs/Web/API/Element/removeAttribute) entfernen.

## Barrierefreiheit

### Kennzeichnung

In den meisten Fällen sollten Sie eine zugängliche Kennzeichnung bereitstellen, wenn Sie `<progress>` verwenden. Während Sie die standardmäßigen ARIA-Kennzeichnungsattribute [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) verwenden können, wie Sie es für jedes Element mit `role="progressbar"` tun würden, können Sie beim Verwenden von `<progress>` alternativ das {{htmlelement("label")}}-Element verwenden.

> [!NOTE]
> Text, der zwischen den Tags des Elements platziert wird, ist kein zugängliches Label, sondern wird lediglich als Fallback für alte Browser empfohlen, die dieses Element nicht unterstützen.

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

Wenn das `<progress>`-Element den Ladefortschritt eines Abschnitts einer Seite beschreibt, verwenden Sie [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby), um auf den Status zu verweisen, und setzen Sie [`aria-busy="true"`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-busy) auf dem Abschnitt, der aktualisiert wird, um das Attribut `aria-busy` zu entfernen, wenn das Laden abgeschlossen ist.

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
        <a href="/de/docs/Web/HTML/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Fließinhalte</a>,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Textinhalte</a>, beschriftbare Inhalte,
        <a href="/de/docs/Web/HTML/Content_categories#palpable_content">spürbare Inhalte</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Textinhalte</a>, aber es darf
        kein <code>&#x3C;progress></code>-Element unter seinen Nachkommen geben.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das öffnende als auch das schließende Tag sind zwingend erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Textinhalte</a> akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td><a href="/de/docs/Web/Accessibility/ARIA/Roles/progressbar_role"><code>progressbar</code></a></td>
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

- [Creating vertical form controls](/de/docs/Web/CSS/CSS_writing_modes/Vertical_controls)
- {{htmlelement("meter")}}
- {{ cssxref(":indeterminate") }}
- {{ cssxref("-moz-orient") }}
- {{ cssxref("::-moz-progress-bar") }}
- {{ cssxref("::-webkit-progress-bar") }}
- {{ cssxref("::-webkit-progress-value") }}
- {{ cssxref("::-webkit-progress-inner-element") }}
