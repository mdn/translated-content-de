---
title: "`<slot>` HTML-Webkomponenten-Slot-Element"
short-title: <slot>
slug: Web/HTML/Reference/Elements/slot
l10n:
  sourceCommit: 8dd50fa9cb734907685508144376dbdd28f98be6
---

Das **`<slot>`**- [HTML](/de/docs/Web/HTML) Element ist ein Platzhalter innerhalb einer [Webkomponente](/de/docs/Web/API/Web_components), den Sie mit Ihrem eigenen Markup ausfüllen können, wenn die Komponente verwendet wird.
Dies ermöglicht Ihnen das Erstellen separater DOM-Bäume, die zusammen dargestellt werden.

Slots können reinen Text, andere HTML-Elemente oder andere Webkomponenten enthalten.
Ein Slot kann auch Standardinhalt enthalten, der angezeigt wird, wenn dem Slot beim Verwenden der Webkomponente kein anderer Inhalt zugewiesen wird.

## Attribute

Dieses Element beinhaltet die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `name`
  - : Der Name des Slots.
    Ein _benannter Slot_ ist ein `<slot>`-Element mit einem `name`-Attribut, während ein _unbenannter Slot_ kein `name`-Attribut hat und der Name standardmäßig der leere String ist.

    Wenn eine Shadow-Root [benannte Slot-Zuweisung](/de/docs/Web/HTML/Reference/Elements/template#named) verwendet, werden Top-Level-Kindelemente ihres Hosts in Slots gerendert, die einen passenden Namen in ihrem [`slot`-Attribut](/de/docs/Web/API/Element/slot) haben.
    Slot-Namen sollten pro Shadow-Root eindeutig sein: wenn Sie zwei Slots mit demselben Namen haben, werden alle Elemente mit einem passenden `slot`-Attribut im _ersten_ Slot gerendert.
    Alle Top-Level-Kindelemente, die kein `slot`-Attribut haben, werden im ersten unbenannten `<slot>`-Element gerendert, das als _Standard-Slot_ bezeichnet wird.
    Der `name` hat keinen Effekt, wenn die Shadow-Root [manuelle Slot-Zuweisung](/de/docs/Web/HTML/Reference/Elements/template#manual) verwendet.

    Für weitere Informationen siehe [`shadowrootslotassignment`](/de/docs/Web/HTML/Reference/Elements/template#shadowrootslotassignment) beim `<template>`-Element und [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow#slotassignment).

## Beispiele

### Grundlegende Verwendung

Dieses HTML zeigt, wie mehrere benannte Slots innerhalb eines {{htmlelement("template")}}-Elements deklariert werden können.
Beachten Sie, dass diese Slots nur dann als Slots verwendet werden, wenn das Template innerhalb einer Shadow-Root verwendet wird.

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
> Sie können dieses vollständige Beispiel in Aktion unter [element-details](https://github.com/mdn/web-components-examples/tree/main/element-details) sehen (siehe es [live in Aktion](https://mdn.github.io/web-components-examples/element-details/)). Zusätzlich finden Sie eine Erklärung unter [Verwendung von Templates und Slots](/de/docs/Web/API/Web_components/Using_templates_and_slots).

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Fluss-Inhalt</a>,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phrasierungsinhalt</a>
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
      <td>Keine, sowohl das Anfangs- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phrasierungsinhalt</a> akzeptiert
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

- HTML {{HTMLElement("template")}} Element
- HTML [`slot`](/de/docs/Web/HTML/Reference/Global_attributes/slot) Attribut
- CSS {{CSSXref("::slotted")}} Pseudo-Element
- CSS {{cssxref(":has-slotted")}} Pseudo-Klasse
- [CSS-Scoping](/de/docs/Web/CSS/Guides/Scoping) Modul
- [Verwendung von Templates und Slots](/de/docs/Web/API/Web_components/Using_templates_and_slots)
