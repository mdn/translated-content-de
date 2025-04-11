---
title: Senden-Button
slug: Glossary/Submit_button
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{GlossarySidebar}}

Ein **Senden-Button** ist ein {{Glossary("element", "Element")}} in HTML, das verwendet werden kann, um ein {{HTMLElement("form")}} zu senden. Die nativen Senden-Button-Elemente sind:

- {{HtmlElement("button")}} (sein Standard-`type` ist `"submit"`)
- `{{HtmlElement('input/submit', '&lt;input type="submit"&gt;')}}`
- `{{HtmlElement('input/image', '&lt;input type="image"&gt;')}}`

Zusätzlich zum Senden eines Formulars kann ein Senden-Button das Verhalten des Formulars und die gesendeten Daten beeinflussen.

## Überschreiben des Formularverhaltens

Senden-Buttons können das Absendeverhalten des Formulars über verschiedene Attribute überschreiben:

- `{{HtmlElement("button#formaction", "formaction")}}`: Überschreibt das Attribut [`action`](/de/docs/Web/HTML/Reference/Elements/form#action) des Formulars.
- `{{HtmlElement("button#formenctype", "formenctype")}}`: Überschreibt das Attribut [`enctype`](/de/docs/Web/HTML/Reference/Elements/form#enctype) des Formulars.
- `{{HtmlElement("button#formmethod", "formmethod")}}`: Überschreibt das Attribut [`method`](/de/docs/Web/HTML/Reference/Elements/form#method) des Formulars.
- `{{HtmlElement("button#formnovalidate", "formnovalidate")}}`: Überschreibt das Attribut [`novalidate`](/de/docs/Web/HTML/Reference/Elements/form#novalidate) des Formulars.
- `{{HtmlElement("button#formtarget", "formtarget")}}`: Überschreibt das Attribut [`target`](/de/docs/Web/HTML/Reference/Elements/form#target) des Formulars.

## Formulardaten-Einträge

Wenn der Senden-Button ein {{HtmlElement("button")}} oder `{{HtmlElement('input/submit', '&lt;input type="submit"&gt;')}}` ist und ein `name`-Attribut hat, wird der Formulardatensatz einen Eintrag für dessen `name` und `value` enthalten.

Wenn der Senden-Button ein `{{HtmlElement('input/image', '&lt;input type="image"&gt;')}}` ist, wird der Formulardatensatz Einträge für die X- und Y-Koordinaten enthalten, auf die der Benutzer geklickt hat (z. B. `x=100&y=200` oder `buttonName.x=123&buttonName.y=234`).

## Siehe auch

- [Grundlegende native Formularsteuerelemente](/de/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls)
- [Formulardaten senden](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)
