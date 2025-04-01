---
title: "<bdo>: Das Element zum Überschreiben der bidirektionalen Textausrichtung"
slug: Web/HTML/Element/bdo
l10n:
  sourceCommit: 215e1b1590b1210152e3570627933c0303171e11
---

{{HTMLSidebar}}

Das **`<bdo>`**-[HTML](/de/docs/Web/HTML)-Element überschreibt die aktuelle Textausrichtung, sodass der Text innerhalb des Elements in einer anderen Richtung dargestellt wird.

{{InteractiveExample("HTML Demo: &lt;bdo&gt;", "tabbed-standard")}}

```html interactive-example
<h1>Famous seaside songs</h1>

<p>The English song "Oh I do like to be beside the seaside"</p>

<p>
  Looks like this in Hebrew:
  <span dir="rtl">אה, אני אוהב להיות ליד חוף הים</span>
</p>

<p>
  In the computer's memory, this is stored as
  <bdo dir="ltr">אה, אני אוהב להיות ליד חוף הים</bdo>
</p>
```

```css interactive-example
html {
  font-family: sans-serif;
}

bdo {
  /* Add your styles here */
}
```

Die Zeichen des Textes werden vom Startpunkt in die angegebene Richtung gezeichnet; die Ausrichtung der einzelnen Zeichen wird nicht beeinflusst (z.B. werden Zeichen nicht rückwärts gezeichnet).

## Attribute

Die Attribute dieses Elements umfassen die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `dir`

  - : Die Richtung, in der der Text in den Inhalten dieses Elements gerendert werden soll. Mögliche Werte sind:

    - `ltr`: Gibt an, dass der Text in eine von links nach rechts Richtung gehen soll.
    - `rtl`: Gibt an, dass der Text in eine von rechts nach links Richtung gehen soll.

## Beispiele

```html
<!-- Switch text direction -->
<p>This text will go left to right.</p>
<p><bdo dir="rtl">This text will go right to left.</bdo></p>
```

### Ergebnis

{{EmbedLiveSample('Examples')}}

## Hinweise

Die HTML 4-Spezifikation spezifizierte keine Events für dieses Element; sie wurden in XHTML hinzugefügt. Dies ist höchstwahrscheinlich ein Versehen.

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
          >Fließender Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierung Inhalt</a
        >, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierung Inhalt</a
        >.
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
          >Phrasierung Inhalt</a
        > akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role"
            >generic</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>Beliebig</td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>
        [`HTMLElement`](/de/docs/Web/API/HTMLElement) Bis einschließlich Gecko 1.9.2 (Firefox 4)
        implementiert Firefox die
        <code
          ><a href="/de/docs/Web/API/HTMLSpanElement"
            >HTMLSpanElement</a
          ></code
        >
        Schnittstelle für dieses Element.
      </td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandtes HTML-Element: {{HTMLElement("bdi")}}
