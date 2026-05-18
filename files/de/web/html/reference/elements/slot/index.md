---
title: "`<slot>` HTML Webkomponenten-Slot-Element"
short-title: <slot>
slug: Web/HTML/Reference/Elements/slot
l10n:
  sourceCommit: f77236a72e479b61c6b1cb6059c9ae1e90f4c7cd
---

Das **`<slot>`**-Element [HTML](/de/docs/Web/HTML) ist ein Platzhalter innerhalb einer [Webkomponente](/de/docs/Web/API/Web_components), den Sie mit Ihrem eigenen Markup füllen können, wenn die Komponente verwendet wird. Dies ermöglicht es Ihnen, separate DOM-Bäume zu erstellen und zusammen darzustellen.

Slots können Klartext, andere HTML-Elemente oder andere Webkomponenten enthalten. Ein Slot kann auch Standardinhalt beinhalten, der angezeigt wird, wenn dem Slot beim Verwenden der Webkomponente kein anderer Inhalt zugewiesen wird.

## Attribute

Dieses Element beinhaltet die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `name`
  - : Der Name des Slots. Ein _benannter Slot_ ist ein `<slot>`-Element mit einem `name`-Attribut, während ein _unbenannter Slot_ kein `name`-Attribut hat, und der Name standardmäßig ein leerer String ist.

    Wenn ein Shadow-Root [named slot assignment](/de/docs/Web/HTML/Reference/Elements/template#named) verwendet, werden die Top-Level-Kindelemente seines Hosts in Slots gerendert, die einen übereinstimmenden Namen im [`slot`-Attribut](/de/docs/Web/API/Element/slot) haben. Slot-Namen sollten pro Shadow-Root eindeutig sein: Wenn Sie zwei Slots mit demselben Namen haben, werden alle Elemente mit einem übereinstimmenden `slot`-Attribut im _ersten_ Slot gerendert. Alle Top-Level-Kindelemente, die kein `slot`-Attribut haben, werden im ersten unbenannten `<slot>`-Element gerendert, das als _Standardslot_ bezeichnet wird. Der `name` hat keinen Effekt, wenn das Shadow-Root [manual slot assignment](/de/docs/Web/HTML/Reference/Elements/template#manual) verwendet.

    Weitere Informationen finden Sie unter [`shadowrootslotassignment`](/de/docs/Web/HTML/Reference/Elements/template#shadowrootslotassignment) auf dem `<template>`-Element und [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow#slotassignment).

## Beispiele

### Grundlegende Verwendung

Dieses HTML zeigt, wie eine Anzahl benannter Slots innerhalb eines {{htmlelement("template")}}-Elements deklariert werden könnten. Beachten Sie, dass diese Slots nur als Slots verwendet werden, wenn das Template innerhalb eines Shadow-Roots verwendet wird.

```html
<template id="element-details-template">
  <style>
    details {
      font-family: "Open Sans Light", "Helvetica", "Arial", sans-serif;
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
> Sie können dieses vollständige Beispiel in Aktion unter [element-details](https://github.com/mdn/web-components-examples/tree/main/element-details) sehen (siehe es [live ausgeführt](https://mdn.github.io/web-components-examples/element-details/)). Zusätzlich finden Sie eine Erklärung unter [Verwendung von Templates und Slots](/de/docs/Web/API/Web_components/Using_templates_and_slots).

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Flussinhalt</a>,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phraseninhalt</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#transparent_content_model">Transparent</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Ereignisse</th>
      <td>[`slotchange`](/de/docs/Web/API/HTMLSlotElement/slotchange_event)</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl der Start- als auch der End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>
        Jedes Element, das <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phraseninhalt</a> akzeptiert
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role">Keine entsprechende Rolle</a>
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
- CSS {{CSSXref("::slotted")}} Pseudo-Element
- CSS {{cssxref(":has-slotted")}} Pseudo-Klasse
- [CSS-Scoping](/de/docs/Web/CSS/Guides/Scoping)-Modul
- [Verwendung von Templates und Slots](/de/docs/Web/API/Web_components/Using_templates_and_slots)
