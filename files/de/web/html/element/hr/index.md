---
title: "<hr>: Das Thematische Trennelement (Horizontale Linie)"
slug: Web/HTML/Element/hr
l10n:
  sourceCommit: d7e274e727920f0f85f14e0bdd18e6e585419a90
---

{{HTMLSidebar}}

Das **`<hr>`** [HTML](/de/docs/Web/HTML) Element stellt einen thematischen Bruch zwischen Elementen auf Absatzebene dar: Zum Beispiel eine Szenenänderung in einer Geschichte oder ein Themenwechsel innerhalb eines Abschnitts.

{{EmbedInteractiveExample("pages/tabbed/hr.html", "tabbed-shorter")}}

Historisch wurde dies als horizontale Linie oder Regel dargestellt. Während es in visuellen Browsern möglicherweise immer noch als horizontale Regel angezeigt wird, wird dieses Element jetzt in semantischen und nicht in präsentationalen Begriffen definiert. Wenn Sie eine horizontale Linie zeichnen möchten, sollten Sie dafür geeignete CSS-Techniken verwenden.

## Attribute

Zu den Attributen dieses Elements gehören die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `align` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Legt die Ausrichtung der Linie auf der Seite fest. Wenn kein Wert angegeben ist, ist der Standardwert `left`.
- `color` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Legt die Farbe der Linie durch Farbnamen oder hexadezimalen Wert fest.
- `noshade` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Legt fest, dass die Linie keine Schattierung hat.
- `size` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Legt die Höhe in Pixeln der Linie fest.
- `width` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Setzt die Länge der Linie auf der Seite durch einen Pixel- oder Prozentwert fest.

## Beispiel

### HTML

```html
<p>
  Dies ist der erste Absatz Text. Dies ist der erste Absatz Text. Dies ist der
  erste Absatz Text. Dies ist der erste Absatz Text.
</p>

<hr />

<p>
  Dies ist der zweite Absatz Text. Dies ist der zweite Absatz Text. Dies ist
  der zweite Absatz Text. Dies ist der zweite Absatz Text.
</p>
```

### Ergebnis

{{EmbedLiveSample("Example")}}

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Fließender Inhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Keiner; es ist ein {{Glossary("void element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Muss ein Start-Tag haben und darf kein End-Tag haben.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        <ul>
          <li>Jedes Element, das <a href="/de/docs/Web/HTML/Content_categories#flow_content">fließenden Inhalt</a> akzeptiert</li>
          <li><a href="/de/docs/Web/HTML/Element/select"><code>&lt;select></code></a> Element</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td><a href="/de/docs/Web/Accessibility/ARIA/Roles/separator_role"><code>separator</code></a></td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/presentation_role"><code>presentation</code></a> oder <a href="/de/docs/Web/Accessibility/ARIA/Roles/none_role"><code>none</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>{{domxref("HTMLHRElement")}}</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement('p')}}
- [`<hr>` in `<select>`](/de/docs/Web/HTML/Element/select#select_with_grouping_options)
