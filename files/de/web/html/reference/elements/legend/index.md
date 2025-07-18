---
title: "<legend>: Das Field Set Legend-Element"
slug: Web/HTML/Reference/Elements/legend
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das **`<legend>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert eine Beschriftung für den Inhalt seines übergeordneten {{HTMLElement("fieldset")}}.

In [anpassbaren `<select>`-Elementen](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) ist das `<legend>`-Element als Kind von `<optgroup>` erlaubt, um eine leicht ansprechbare und stilisierbare Beschriftung bereitzustellen. Dies ersetzt jeglichen Text, der im `label`-Attribut des `<optgroup>`-Elements gesetzt wird, und hat dieselbe Semantik.

{{InteractiveExample("HTML Demo: &lt;legend&gt;", "tabbed-standard")}}

```html interactive-example
<fieldset>
  <legend>Choose your favorite monster</legend>

  <input type="radio" id="kraken" name="monster" value="K" />
  <label for="kraken">Kraken</label><br />

  <input type="radio" id="sasquatch" name="monster" value="S" />
  <label for="sasquatch">Sasquatch</label><br />

  <input type="radio" id="mothman" name="monster" value="M" />
  <label for="mothman">Mothman</label>
</fieldset>
```

```css interactive-example
legend {
  background-color: #000;
  color: #fff;
  padding: 3px 6px;
}

input {
  margin: 0.4rem;
}
```

## Attribute

Dieses Element umfasst nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Beispiele

Siehe {{HTMLElement("form")}} für Beispiele zu `<legend>`.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>Keine.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        >
        und
        <a href="/de/docs/Web/HTML/Reference/Elements/Heading_Elements">Überschriften</a>
        (h1–h6-Elemente).
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind zwingend erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Ein {{HTMLElement("fieldset")}}, dessen erstes Kind dieses
        <code>&#x3C;legend></code>-Element ist. In <a href="/de/docs/Learn_web_development/Extensions/Forms/Customizable_select">anpassbaren select-Elementen</a> ist ein <code>&#x3C;legend></code>-Element als Kind von {{htmlelement("optgroup")}} erlaubt.
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
      <th scope="row">DOM-Interface</th>
      <td>[`HTMLLegendElement`](/de/docs/Web/API/HTMLLegendElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ARIA: Form role](/de/docs/Web/Accessibility/ARIA/Reference/Roles/form_role)
