---
title: aria-invalid
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-invalid
l10n:
  sourceCommit: 4578af853ec3e520f4f2038c028c265591cbaa70
---

Der `aria-invalid` Zustand zeigt an, dass der eingegebene Wert nicht dem vom Programm erwarteten Format entspricht.

## Beschreibung

Das `aria-invalid` Attribut wird verwendet, um anzuzeigen, dass der in ein Eingabefeld eingegebene Wert nicht in einem Format oder mit einem Wert vorliegt, den die Anwendung akzeptiert. Dies kann Formate wie E-Mail-Adressen oder Telefonnummern umfassen. `aria-invalid` kann auch verwendet werden, um anzuzeigen, dass ein erforderliches Feld leer ist.

Das `aria-invalid` Attribut kann mit jedem typischen HTML-Formular-Element verwendet werden und ist nicht auf Elemente beschränkt, denen eine ARIA-Rolle zugewiesen ist.

Das Attribut sollte mit JavaScript als Ergebnis eines Validierungsprozesses gesetzt werden. Wenn ein Wert als ungültig oder außerhalb des Bereichs bestimmt wird, setzen Sie `aria-invalid="true"` **und** informieren Sie den Benutzer über den Fehler. Für eine bessere Benutzererfahrung geben Sie Vorschläge, wie der Fehler behoben werden kann. Setzen Sie `aria-invalid="true"` nicht auf leere erforderliche Elemente, bis der Benutzer versucht, das Formular abzusenden. Sie könnten immer noch daran arbeiten, es auszufüllen.

> [!NOTE]
> Wenn `aria-invalid` in Verbindung mit dem `aria-required` Attribut verwendet wird, sollte `aria-invalid` nicht auf true gesetzt werden, bevor das Formular abgesendet wird - nur als Reaktion auf die Validierung.

Es gibt derzeit vier Werte: zusätzlich zu `true` und `false` haben wir `grammar`, das verwendet werden kann, wenn ein grammatikalischer Fehler festgestellt wird, und `spelling` für Rechtschreibfehler. Wenn das Attribut nicht vorhanden ist, sein Wert false ist oder ein leerer String, gilt der Standardwert false. Jeder andere Wert wird so behandelt, als wäre `true` gesetzt.

### Native HTML-Validierung

HTML verfügt über eine native Formularvalidierung. Wenn ein Benutzer ein Formular mit einer Steuerung übermittelt, die Fehler enthält, zeigt die erste Formularsteuerung mit einem ungültigen Wert eine Fehlermeldung an, die nativ ist.

Wenn auf einer Formularsteuerung ein [`required`](/de/docs/Web/HTML/Reference/Attributes/required) Attribut vorhanden ist, das nicht ausgefüllt ist, wird das Formular nicht übermittelt, und eine Fehlermeldung wie "Bitte füllen Sie dieses Feld aus" oder etwas Ähnliches erscheint. Die Meldungen für die native Validierung variieren je nach Browser und können nicht gestylt werden.

```html
<input type="number" step="2" min="0" max="100" required />
```

Wenn der Benutzer in das vorherige Eingabebeispiel einen über dem Maximum, unter dem Minimum liegenden Wert oder einen, der nicht dem Schrittwert entspricht, eingegeben hätte, würde eine Fehlermeldung erscheinen. Wenn der Benutzer "3" eingegeben hätte, wäre die native Fehlermeldung ähnlich wie "Bitte geben Sie einen gültigen Wert ein."

Wenn Sie eigene Formularvalidierungsskripte erstellen, stellen Sie sicher, dass `aria-invalid` auf ungültigen Formularsteuerungen enthalten ist, zusammen mit Styling (verwenden Sie den `[aria-invalid="true"]` Attribut-Selektor) und Meldungen (mit [`aria-errormessage`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage)), um den Benutzern zu helfen, zu verstehen, wo der Fehler liegt und wie er behoben werden kann.

## Werte

- `grammar`
  - : Es wurde ein grammatikalischer Fehler festgestellt.
- `false` (Standard)
  - : Es wurden keine Fehler im Wert entdeckt.
- `spelling`
  - : Es wurde ein Rechtschreibfehler festgestellt.
- `true`
  - : Der vom Benutzer eingegebene Wert hat die Validierung nicht bestanden.

Jeder Wert, der nicht in dieser Liste steht, wird als `true` behandelt.

## Beispiel

Der folgende Ausschnitt zeigt eine vereinfachte Version von zwei Formularfeldern mit einer an das Blur-Ereignis angehängten Validierungsfunktion. Beachten Sie, dass es nicht unbedingt erforderlich ist, `aria-invalid` auf `false` zu setzen, da dies der Standardwert ist.

```html
<ul>
  <li>
    <label for="name">Full Name</label>
    <input
      type="text"
      name="name"
      id="name"
      aria-required="true"
      aria-invalid="false"
      onblur="checkValidity('name', ' ', 'Invalid name entered (requires both first and last name)');" />
  </li>
  <li>
    <label for="email">Email Address</label>
    <input
      type="email"
      name="email"
      id="email"
      aria-required="true"
      aria-invalid="false"
      onblur="checkValidity('email', '@', 'Invalid email address');" />
  </li>
</ul>
```

Beachten Sie, dass es nicht notwendig ist, die Felder sofort bei Unscharf zu validieren; die Anwendung könnte warten, bis das Formular abgeschickt wird (obwohl dies nicht unbedingt empfohlen wird).

Der folgende Ausschnitt zeigt eine Validierungsfunktion, die nur auf das Vorhandensein eines bestimmten Zeichens prüft (in der realen Welt wird die Validierung wahrscheinlich komplexer sein):

```js
function checkValidity(id, searchTerm, msg) {
  const elem = document.getElementById(id);
  if (elem.value.includes(searchTerm)) {
    elem.setAttribute("aria-invalid", "false");
    updateAlert();
  } else {
    elem.setAttribute("aria-invalid", "true");
    updateAlert(msg);
  }
}
```

Der folgende Ausschnitt zeigt die Alarmfunktionen, die die Fehlermeldung hinzufügen (oder entfernen):

```js
function updateAlert(msg) {
  const oldAlert = document.getElementById("alert");
  if (oldAlert) {
    oldAlert.remove();
  }

  if (msg) {
    const newAlert = document.createElement("div");
    newAlert.setAttribute("role", "alert");
    newAlert.setAttribute("id", "alert");
    const content = document.createTextNode(msg);
    newAlert.appendChild(content);
    document.body.appendChild(newAlert);
  }
}
```

Beachten Sie, dass die Warnung die ARIA-Rollenattribut auf [`alert`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role) gesetzt hat.

## Zugehörige Schnittstellen

- [`Element.ariaInvalid`](/de/docs/Web/API/Element/ariaInvalid)
  - : Die [`ariaInvalid`](/de/docs/Web/API/Element/ariaInvalid) Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element) Schnittstelle, spiegelt den Wert des `aria-invalid` Attributs wider, das anzeigt, ob das Element einer Zugänglichkeits-API ausgesetzt ist.
- [`ElementInternals.ariaInvalid`](/de/docs/Web/API/ElementInternals/ariaInvalid)
  - : Die [`ariaInvalid`](/de/docs/Web/API/ElementInternals/ariaInvalid) Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals) Schnittstelle, spiegelt den Wert des `aria-invalid` Attributs wider.

## Zugehörige Rollen

Verwendet in Rollen:

- [`application`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/application_role)
- [`checkbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role)
- [`combobox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role)
- [`gridcell`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)
- [`listbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role)
- [`radiogroup`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/radiogroup_role)
- [`slider`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role)
- [`spinbutton`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role)
- [`textbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role)
- [`tree`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role)

Vererbt in Rolle:

- [`columnheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
- [`rowheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role)
- [`searchbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/searchbox_role)
- [`switch`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/switch_role)
- [`treegrid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`aria-errormessage`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage)
- CSS {{CSSXRef(':valid')}} Pseudoklasse
- CSS {{CSSXRef(':invalid')}} Pseudoklasse
- [Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) Tutorial
