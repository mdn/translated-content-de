---
title: Submit-Button
slug: Glossary/Submit_button
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{GlossarySidebar}}

Ein **Submit-Button** ist ein {{Glossary("element", "Element")}} in HTML, das verwendet werden kann, um ein {{HTMLElement("form")}} zu übermitteln. Die nativen Submit-Button-Elemente sind:

- {{HtmlElement("button")}} (sein Standard-`type` ist `"submit"`)
- `{{HtmlElement('input/submit', '&lt;input type="submit"&gt;')}}`
- `{{HtmlElement('input/image', '&lt;input type="image"&gt;')}}`

Zusätzlich zur Übermittlung eines Formulars kann ein Submit-Button das Verhalten des Formulars beeinflussen und welche Daten gesendet werden.

## Überschreiben des Formularverhaltens

Submit-Buttons können das Übermittlungsverhalten eines Formulars durch verschiedene Attribute überschreiben:

- `{{HtmlElement("button#formaction", "formaction")}}`: Überschreibt das [`action`](/de/docs/Web/HTML/Element/form#action)-Attribut des Formulars.
- `{{HtmlElement("button#formenctype", "formenctype")}}`: Überschreibt das [`enctype`](/de/docs/Web/HTML/Element/form#enctype)-Attribut des Formulars.
- `{{HtmlElement("button#formmethod", "formmethod")}}`: Überschreibt das [`method`](/de/docs/Web/HTML/Element/form#method)-Attribut des Formulars.
- `{{HtmlElement("button#formnovalidate", "formnovalidate")}}`: Überschreibt das [`novalidate`](/de/docs/Web/HTML/Element/form#novalidate)-Attribut des Formulars.
- `{{HtmlElement("button#formtarget", "formtarget")}}`: Überschreibt das [`target`](/de/docs/Web/HTML/Element/form#target)-Attribut des Formulars.

## Formulardateneinträge

Wenn der Submit-Button ein {{HtmlElement("button")}} oder ein `{{HtmlElement('input/submit', '&lt;input type="submit"&gt;')}}` ist und ein `name`-Attribut hat, wird der Formulardatensatz einen Eintrag für seinen `name` und `value` enthalten.

Wenn der Submit-Button ein `{{HtmlElement('input/image', '&lt;input type="image"&gt;')}}` ist, wird der Formulardatensatz Einträge für die X- und Y-Koordinaten enthalten, auf die der Benutzer geklickt hat (z.B. `x=100&y=200` oder `buttonName.x=123&buttonName.y=234`).

## Siehe auch

- [Grundlegende native Formularelemente](/de/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls)
- [Versenden von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)
