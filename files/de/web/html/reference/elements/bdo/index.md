---
title: "<bdo>: Das Bidirektionale Textüberschreibungselement"
slug: Web/HTML/Reference/Elements/bdo
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das **`<bdo>`**-[HTML](/de/docs/Web/HTML)-Element überschreibt die aktuelle Textausrichtung, sodass der Text innerhalb in eine andere Richtung gerendert wird.

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

Die Zeichen des Textes werden vom Ausgangspunkt in der angegebenen Richtung gezeichnet; die Ausrichtung der einzelnen Zeichen wird nicht beeinflusst (die Zeichen werden also zum Beispiel nicht rückwärts gezeichnet).

## Attribute

Zu den Attributen dieses Elements gehören die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `dir`
  - : Die Richtung, in der der Text im Inhalt dieses Elements gerendert werden soll. Mögliche Werte sind:
    - `ltr`: Gibt an, dass der Text in einer links-nach-rechts-Richtung verlaufen soll.
    - `rtl`: Gibt an, dass der Text in einer rechts-nach-links-Richtung verlaufen soll.

## Beispiele

```html
<!-- Switch text direction -->
<p>This text will go left to right.</p>
<p><bdo dir="rtl">This text will go right to left.</bdo></p>
```

### Ergebnis

{{EmbedLiveSample('Examples')}}

## Hinweise

Die HTML 4-Spezifikation spezifizierte keine Ereignisse für dieses Element; diese wurden in XHTML hinzugefügt. Dies ist höchstwahrscheinlich ein Versäumnis.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Fließtext-Inhalt</a>,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phrase-Inhalt</a>,
        fühlbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phrase-Inhalt</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phrase-Inhalt</a> akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role">generic</a></code>
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässige ARIA-Rollen</th>
      <td>Beliebig</td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>
        [`HTMLElement`](/de/docs/Web/API/HTMLElement) Bis einschließlich Gecko 1.9.2 (Firefox 4)
        implementiert Firefox die
        <code
          ><a href="/de/docs/Web/API/HTMLSpanElement">HTMLSpanElement</a></code>
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
