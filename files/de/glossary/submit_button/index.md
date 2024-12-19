---
title: Senden-Button
slug: Glossary/Submit_button
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{GlossarySidebar}}

Ein **Senden-Button** ist ein {{Glossary("element", "Element")}} in HTML, das verwendet werden kann, um ein {{HTMLElement("form")}} abzusenden. Die nativen Sende-Button-Elemente sind:

- {{HtmlElement("button")}} (sein Standard-`type` ist `"submit"`)
- `{{HtmlElement('input/submit', '&lt;input type="submit"&gt;')}}`
- `{{HtmlElement('input/image', '&lt;input type="image"&gt;')}}`

Zusätzlich zum Absenden eines Formulars kann ein Senden-Button das Verhalten des Formulars beeinflussen und welche Daten gesendet werden.

## Überschreiben des Verhaltens des Formulars

Sende-Buttons können das Absendeverhalten des Formulars durch verschiedene Attribute überschreiben:

- `{{HtmlElement("button#formaction", "formaction")}}`: Überschreibt das [`action`](/de/docs/Web/HTML/Element/form#action)-Attribut des Formulars.
- `{{HtmlElement("button#formenctype", "formenctype")}}`: Überschreibt das [`enctype`](/de/docs/Web/HTML/Element/form#enctype)-Attribut des Formulars.
- `{{HtmlElement("button#formmethod", "formmethod")}}`: Überschreibt das [`method`](/de/docs/Web/HTML/Element/form#method)-Attribut des Formulars.
- `{{HtmlElement("button#formnovalidate", "formnovalidate")}}`: Überschreibt das [`novalidate`](/de/docs/Web/HTML/Element/form#novalidate)-Attribut des Formulars.
- `{{HtmlElement("button#formtarget", "formtarget")}}`: Überschreibt das [`target`](/de/docs/Web/HTML/Element/form#target)-Attribut des Formulars.

## Formulardateneinträge

Wenn der Sende-Button ein {{HtmlElement("button")}} oder `{{HtmlElement('input/submit', '&lt;input type="submit"&gt;')}}` ist und ein `name`-Attribut hat, wird das Datenset des Formulars einen Eintrag für seinen `name` und `value` enthalten.

Wenn der Sende-Button ein `{{HtmlElement('input/image', '&lt;input type="image"&gt;')}}` ist, wird das Datenset des Formulars Einträge für die X- und Y-Koordinaten enthalten, auf die der Benutzer geklickt hat (z.B. `x=100&y=200` oder `buttonName.x=123&buttonName.y=234`).

## Siehe auch

- [Grundlegende native Formularelemente](/de/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls)
- [Formulardaten senden](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)
