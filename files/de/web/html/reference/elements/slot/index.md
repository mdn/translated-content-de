---
title: "<slot>: Das Slot-Element für Webkomponenten"
slug: Web/HTML/Reference/Elements/slot
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das **`<slot>`** [HTML](/de/docs/Web/HTML)-Element, Teil des [Web Components](/de/docs/Web/API/Web_components)-Technologiepakets, ist ein Platzhalter innerhalb einer Webkomponente, den Sie mit Ihrem eigenen Markup füllen können, was es Ihnen ermöglicht, separate DOM-Bäume zu erstellen und sie zusammen darzustellen.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `name`
  - : Der Name des Slots. Wenn die Komponente, die den Slot enthält, gerendert wird, wird der Slot mit dem Kindelement des benutzerdefinierten Elements gerendert, das ein übereinstimmendes [`slot`](/de/docs/Web/HTML/Reference/Global_attributes/slot)-Attribut hat. Ein _benannter Slot_ ist ein `<slot>`-Element mit einem `name`-Attribut. Nicht benannte Slots haben standardmäßig den leeren String als Namen. Namen sollten pro Shadow Root eindeutig sein: Wenn Sie zwei Slots mit demselben Namen haben, werden alle Elemente mit einem passenden `slot`-Attribut dem ersten Slot mit diesem Namen zugewiesen.

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
> Sie können dieses komplette Beispiel in Aktion unter [element-details](https://github.com/mdn/web-components-examples/tree/main/element-details) sehen (sehen Sie es sich [live an](https://mdn.github.io/web-components-examples/element-details/)). Zusätzlich finden Sie eine Erklärung unter [Verwendung von Templates und Slots](/de/docs/Web/API/Web_components/Using_templates_and_slots).

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
          >Fließinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phraseninhalt</a
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
      <td>Keine, sowohl das Start- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phraseninhalt</a
        >
        akzeptiert
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
      <td>Kein <code>role</code> erlaubt</td>
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

- HTML-{{HTMLElement("template")}}-Element
- HTML-Attribut [`slot`](/de/docs/Web/HTML/Reference/Global_attributes/slot)
- CSS-{{CSSXref("::slotted")}}-Pseudo-Element
- CSS-{{cssxref(":has-slotted")}}-Pseudoklasse
- [CSS-Scoping](/de/docs/Web/CSS/CSS_scoping)-Modul
