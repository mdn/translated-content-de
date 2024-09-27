---
title: Submit-Button
slug: Glossary/Submit_button
l10n:
  sourceCommit: c9a87fc4010cef73c21c5f46662431f3c8ad2d28
---

{{GlossarySidebar}}

Ein **Submit-Button** ist ein [Element](/de/docs/Glossary/element) in HTML, das verwendet werden kann, um ein {{HTMLElement("form")}} abzusenden. Die nativen Submit-Button-Elemente sind:

- {{HtmlElement("button")}} (sein Standard-`type` ist `"submit"`)
- `{{HtmlElement('input/submit', '&lt;input type="submit"&gt;')}}`
- `{{HtmlElement('input/image', '&lt;input type="image"&gt;')}}`

Zusätzlich zum Absenden eines Formulars kann ein Submit-Button das Verhalten des Formulars beeinflussen und welche Daten gesendet werden.

## Überschreiben des Formularverhaltens

Submit-Buttons können das Absendeverhalten des Formulars durch verschiedene Attribute überschreiben:

- `{{HtmlElement("button#formaction", "formaction")}}`: Überschreibt das [`action`](/de/docs/Web/HTML/Element/form#action)-Attribut des Formulars.
- `{{HtmlElement("button#formenctype", "formenctype")}}`: Überschreibt das [`enctype`](/de/docs/Web/HTML/Element/form#enctype)-Attribut des Formulars.
- `{{HtmlElement("button#formmethod", "formmethod")}}`: Überschreibt das [`method`](/de/docs/Web/HTML/Element/form#method)-Attribut des Formulars.
- `{{HtmlElement("button#formnovalidate", "formnovalidate")}}`: Überschreibt das [`novalidate`](/de/docs/Web/HTML/Element/form#novalidate)-Attribut des Formulars.
- `{{HtmlElement("button#formtarget", "formtarget")}}`: Überschreibt das [`target`](/de/docs/Web/HTML/Element/form#target)-Attribut des Formulars.

## Formulardateneinträge

Wenn der Submit-Button ein {{HtmlElement("button")}} oder `{{HtmlElement('input/submit', '&lt;input type="submit"&gt;')}}` ist und ein `name`-Attribut hat, wird das Formulardatenset einen Eintrag für seinen `name` und `value` enthalten.

Wenn der Submit-Button ein `{{HtmlElement('input/image', '&lt;input type="image"&gt;')}}` ist, wird das Formulardatenset Einträge für die X- und Y-Koordinaten enthalten, auf die der Benutzer geklickt hat (z.B. `x=100&y=200` oder `buttonName.x=123&buttonName.y=234`).

## Siehe auch

- [Grundlegende native Formularelemente](/de/docs/Learn/Forms/Basic_native_form_controls)
- [Formulardaten senden](/de/docs/Learn/Forms/Sending_and_retrieving_form_data)
