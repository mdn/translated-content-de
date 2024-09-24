---
title: "<progress>: Das Fortschrittsanzeiger-Element"
slug: Web/HTML/Element/progress
l10n:
  sourceCommit: b7955e77cd4293adf45ef23686df50b0305f02ad
---

{{HTMLSidebar}}

Das **`<progress>`** [HTML](/de/docs/Web/HTML)-Element zeigt einen Indikator an, der den Fortschritt einer Aufgabe darstellt, typischerweise in Form eines Fortschrittsbalkens.

{{EmbedInteractiveExample("pages/tabbed/progress.html", "tabbed-standard")}}

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- [`max`](/de/docs/Web/HTML/Attributes/max)
  - : Dieses Attribut beschreibt, wie viel Arbeit die durch das `progress`-Element angezeigte Aufgabe erfordert. Das `max`-Attribut muss, falls vorhanden, einen Wert größer als `0` und eine gültige Gleitkommazahl haben. Der Standardwert ist `1`.
- `value`
  - : Dieses Attribut gibt an, wie viel von der Aufgabe bereits abgeschlossen wurde. Es muss eine gültige Gleitkommazahl zwischen `0` und `max` sein, oder zwischen `0` und `1`, wenn `max` weggelassen wird. Wenn kein `value`-Attribut vorhanden ist, ist der Fortschrittsbalken unbestimmt; dies zeigt an, dass eine Aktivität im Gange ist, ohne Anhaltspunkt, wie lange sie voraussichtlich dauern wird.

> [!NOTE]
> Im Gegensatz zum {{htmlelement("meter")}}-Element ist der Mindestwert immer 0, und das `min`-Attribut ist für das `<progress>`-Element nicht erlaubt.

> [!NOTE]
> Die {{cssxref(":indeterminate")}}-Pseudoklasse kann verwendet werden, um gegen unbestimmte Fortschrittsbalken zu matchen. Um den Fortschrittsbalken nach der Angabe eines Wertes wieder unbestimmt zu machen, müssen Sie das value-Attribut mit {{domxref("Element.removeAttribute", "element.removeAttribute('value')")}} entfernen.

## Barrierefreiheit

### Beschriftung

In den meisten Fällen sollten Sie eine zugängliche Beschriftung bereitstellen, wenn Sie `<progress>` verwenden. Während Sie die standardmäßigen ARIA-Beschriftungsattribute [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) verwenden können, wie bei jedem Element mit `role="progressbar"`, können Sie beim Einsatz von `<progress>` alternativ das {{htmlelement("label")}}-Element verwenden.

> [!NOTE]
> Text, der zwischen den Tags des Elements platziert wird, ist keine zugängliche Beschriftung, sondern wird nur als Fallback für alte Browser empfohlen, die dieses Element nicht unterstützen.

#### Beispiele

```html
<label>
  Dokument wird hochgeladen: <progress value="70" max="100">70 %</progress>
</label>

<!-- ODER -->
<br />

<label for="progress-bar">Dokument wird hochgeladen</label>
<progress id="progress-bar" value="70" max="100">70 %</progress>
```

#### Ergebnis

{{EmbedLiveSample('Labelling')}}

### Beschreiben eines bestimmten Bereichs

Wenn das `<progress>`-Element den Ladefortschritt eines Abschnitts einer Seite beschreibt, verwenden Sie [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby), um auf den Status hinzuweisen, und setzen Sie [`aria-busy="true"`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-busy) auf den zu aktualisierenden Abschnitt, wobei Sie das `aria-busy`-Attribut entfernen, wenn der Ladevorgang abgeschlossen ist.

#### Beispiele

```html
<div aria-busy="true" aria-describedby="progress-bar">
  <!-- Inhalt für diesen Bereich wird geladen -->
</div>

<!-- ... -->

<progress id="progress-bar" aria-label="Inhalt wird geladen…"></progress>
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
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Fließende Inhalte</a>,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Phraseninhalt</a>, beschriftbare Inhalte,
        <a href="/de/docs/Web/HTML/Content_categories#palpable_content">fühlbare Inhalte</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Phraseninhalt</a>, aber es darf kein <code>&#x3C;progress></code>-Element unter seinen Nachkommen geben.
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
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Phraseninhalt</a> akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA Rolle</th>
      <td><a href="/de/docs/Web/Accessibility/ARIA/Roles/progressbar_role"><code>progressbar</code></a></td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA Rollen</th>
      <td>Keine <code>role</code> erlaubt</td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>{{domxref("HTMLProgressElement")}}</td>
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
