---
title: HTML-Element `<s>` für durchgestrichenen Text
short-title: <s>
slug: Web/HTML/Reference/Elements/s
l10n:
  sourceCommit: 15e1155ab8a0587405601cc4753bb789cd6ac47c
---

Das [HTML](/de/docs/Web/HTML)-Element **`<s>`** stellt Text durchgestrichen dar. Verwenden Sie das Element `<s>` für Inhalte, die nicht mehr relevant oder nicht mehr zutreffend sind. Um Änderungen an einem Dokument zu kennzeichnen, ist `<s>` jedoch nicht geeignet; verwenden Sie dafür je nach Fall die Elemente {{HTMLElement("del")}} und {{HTMLElement("ins")}}.

{{InteractiveExample("HTML Demo: &lt;s&gt;", "tabbed-shorter")}}

```html interactive-example
<p><s>There will be a few tickets available at the box office tonight.</s></p>

<p>SOLD OUT!</p>
```

```css interactive-example
s {
  /* Add your styles here */
}
```

## Attribute

Dieses Element unterstützt nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Barrierefreiheit

Die meisten Screenreader geben das Vorhandensein des Elements `s` in ihrer Standardkonfiguration nicht bekannt. Mit der CSS-Eigenschaft {{cssxref("content")}} und den Pseudoelementen {{cssxref("::before")}} und {{cssxref("::after")}} lässt sich eine Ansage hinzufügen.

```css
s::before,
s::after {
  clip-path: inset(100%);
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

s::before {
  content: " [start of stricken text] ";
}

s::after {
  content: " [end of stricken text] ";
}
```

Manche Menschen, die Screenreader verwenden, deaktivieren bewusst die Ansage von Inhalten, die zusätzliche Ausführlichkeit erzeugen. Setzen Sie diese Technik deshalb sparsam und nur dann ein, wenn das Verständnis darunter leiden würde, nicht zu erfahren, dass Inhalte durchgestrichen sind.

- [Tweaking Text Level Styles, Reprised | Adrian Roselli](https://adrianroselli.com/2025/04/tweaking-text-level-styles-reprised.html)

## Beispiele

```css
.sold-out {
  text-decoration: line-through;
}
```

```html
<s>Today's Special: Salmon</s> SOLD OUT<br />
<span class="sold-out">Today's Special: Salmon</span> SOLD OUT
```

### Ergebnis

{{EmbedLiveSample("Examples")}}

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Formulierungsinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flussinhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Formulierungsinhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Weglassen von Tags</th>
      <td>Keines; sowohl das öffnende als auch das schließende Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Elternelemente</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Formulierungsinhalt</a
        >
        erlaubt.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles#structural_roles_with_html_equivalents">deletion</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässige ARIA-Rollen</th>
      <td>Alle</td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>[`HTMLElement`](/de/docs/Web/API/HTMLElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das Element {{HTMLElement("strike")}}, ein Gegenstück zum Element `<s>`, ist veraltet und sollte auf Websites nicht mehr verwendet werden.
- Wenn Daten _gelöscht_ wurden, sollte stattdessen das Element {{HTMLElement("del")}} verwendet werden.
- Mit der CSS-Eigenschaft {{cssxref("text-decoration-line")}} lässt sich das frühere Erscheinungsbild des Elements `<s>` erzielen.
