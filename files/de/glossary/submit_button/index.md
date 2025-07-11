---
title: Senden-Button
slug: Glossary/Submit_button
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Ein **Senden-Button** ist ein {{Glossary("element", "Element")}} in HTML, das verwendet werden kann, um ein {{HTMLElement("form")}} zu senden. Die nativen Senden-Button-Elemente sind:

- {{HtmlElement("button")}} (sein Standard-`type` ist `"submit"`)
- `{{HtmlElement('input/submit', '&lt;input type="submit"&gt;')}}`
- `{{HtmlElement('input/image', '&lt;input type="image"&gt;')}}`

Zusätzlich zum Senden eines Formulars kann ein Senden-Button das Verhalten des Formulars beeinflussen und welche Daten gesendet werden.

## Überschreiben des Formularverhaltens

Senden-Buttons können das Übermittlungsverhalten des Formulars durch verschiedene Attribute überschreiben:

- `{{HtmlElement("button#formaction", "formaction")}}`: Überschreibt das [`action`](/de/docs/Web/HTML/Reference/Elements/form#action)-Attribut des Formulars.
- `{{HtmlElement("button#formenctype", "formenctype")}}`: Überschreibt das [`enctype`](/de/docs/Web/HTML/Reference/Elements/form#enctype)-Attribut des Formulars.
- `{{HtmlElement("button#formmethod", "formmethod")}}`: Überschreibt das [`method`](/de/docs/Web/HTML/Reference/Elements/form#method)-Attribut des Formulars.
- `{{HtmlElement("button#formnovalidate", "formnovalidate")}}`: Überschreibt das [`novalidate`](/de/docs/Web/HTML/Reference/Elements/form#novalidate)-Attribut des Formulars.
- `{{HtmlElement("button#formtarget", "formtarget")}}`: Überschreibt das [`target`](/de/docs/Web/HTML/Reference/Elements/form#target)-Attribut des Formulars.

## Formulardateneinträge

Wenn der Senden-Button ein {{HtmlElement("button")}} oder `{{HtmlElement('input/submit', '&lt;input type="submit"&gt;')}}` ist und ein `name`-Attribut hat, wird die Formular-Datenmenge einen Eintrag für den `name` und `value` enthalten.

Wenn der Senden-Button ein `{{HtmlElement('input/image', '&lt;input type="image"&gt;')}}` ist, wird die Formular-Datenmenge Einträge für die X- und Y-Koordinaten enthalten, auf die der Benutzer geklickt hat (z. B. `x=100&y=200` oder `buttonName.x=123&buttonName.y=234`).

## Siehe auch

- [Grundlegende native Formularelemente](/de/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls)
- [Formulardaten senden](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)
