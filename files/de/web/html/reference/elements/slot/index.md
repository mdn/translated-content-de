---
title: "<slot>: Das Web-Komponenten-Slot-Element"
slug: Web/HTML/Reference/Elements/slot
l10n:
  sourceCommit: c1564acf160ef4b320fb7b89ab65211b9c50cf1b
---

{{HTMLSidebar}}

Das **`<slot>`** [HTML](/de/docs/Web/HTML)-Element, Teil der [Web Components](/de/docs/Web/API/Web_components)-Technologiesuite, ist ein Platzhalter in einer Web-Komponente, den Sie mit Ihrem eigenen Markup füllen können. Dies ermöglicht es Ihnen, separate DOM-Bäume zu erstellen und sie gemeinsam darzustellen.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `name`
  - : Der Name des Slots. Wenn die Komponente, die den Slot enthält, gerendert wird, wird der Slot mit dem Kindelement des benutzerdefinierten Elements gerendert, das ein übereinstimmendes [`slot`](/de/docs/Web/HTML/Reference/Global_attributes/slot)-Attribut hat. Ein _benannter Slot_ ist ein `<slot>`-Element mit einem `name`-Attribut. Nicht benannte Slots haben als Standardname eine leere Zeichenkette. Namen sollten pro Shadow-Root eindeutig sein: Wenn Sie zwei Slots mit demselben Namen haben, werden alle Elemente mit einem übereinstimmenden `slot`-Attribut dem ersten Slot mit diesem Namen zugeordnet.

## Beispiele

```html
<template id="element-details-template">
  <style>
    details {
      font-family: "Open Sans Light", Helvetica, Arial, sans-serif;
    }
    .name {
      font-weight: bold;
      color: #217ac0;
      font-size: 120%;
    }
    h4 {
      margin: 10px 0 -8px 0;
      background: #217ac0;
      color: white;
      padding: 2px 6px;
      border: 1px solid #cee9f9;
      border-radius: 4px;
    }
    .attributes {
      margin-left: 22px;
      font-size: 90%;
    }
    .attributes p {
      margin-left: 16px;
      font-style: italic;
    }
  </style>
  <details>
    <summary>
      <code class="name">
        &lt;<slot name="element-name">NEED NAME</slot>&gt;
      </code>
      <span class="desc"><slot name="description">NEED DESCRIPTION</slot></span>
    </summary>
    <div class="attributes">
      <h4>Attributes</h4>
      <slot name="attributes"><p>None</p></slot>
    </div>
  </details>
  <hr />
</template>
```

> [!NOTE]
> Sie können dieses vollständige Beispiel in Aktion auf [element-details](https://github.com/mdn/web-components-examples/tree/main/element-details) sehen (sehen Sie es [live laufen](https://mdn.github.io/web-components-examples/element-details/)). Zusätzlich finden Sie eine Erklärung unter [Verwenden von Templates und Slots](/de/docs/Web/API/Web_components/Using_templates_and_slots).

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
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Fließender Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierter Inhalt</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#transparent_content_model"
          >Transparent</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Ereignisse</th>
      <td>[`slotchange`](/de/docs/Web/API/HTMLSlotElement/slotchange_event)</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl der Start- als auch der Endtag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Elternteile</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >phrasierte Inhalte</a
        >
        akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role"
          >Keine entsprechende Rolle</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>Keine <code>role</code> erlaubt</td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>[`HTMLSlotElement`](/de/docs/Web/API/HTMLSlotElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML {{HTMLElement("template")}}-Element
- HTML [`slot`](/de/docs/Web/HTML/Reference/Global_attributes/slot)-Attribut
- CSS {{CSSXref("::slotted")}} Pseudoelement
- CSS {{cssxref(":has-slotted")}} Pseudoklasse
- [CSS Scope](/de/docs/Web/CSS/CSS_scoping)-Modul
