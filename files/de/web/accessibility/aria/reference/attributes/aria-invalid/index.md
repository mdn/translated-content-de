---
title: aria-invalid
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-invalid
l10n:
  sourceCommit: 8941e7636bfc91985ca5a486e7228b681e1aa272
---

Der `aria-invalid`-Zustand zeigt an, dass der eingegebene Wert nicht dem von der Anwendung erwarteten Format entspricht.

## Beschreibung

Das Attribut `aria-invalid` wird verwendet, um anzuzeigen, dass der in ein Eingabefeld eingegebene Wert nicht in einem Format oder einem Wert vorliegt, den die Anwendung akzeptiert. Dies kann Formate wie E-Mail-Adressen oder Telefonnummern umfassen. `aria-invalid` kann auch verwendet werden, um anzuzeigen, dass ein erforderliches Feld leer ist.

Das Attribut `aria-invalid` kann mit jedem typischen HTML-Formular-Element verwendet werden und ist nicht auf Elemente beschränkt, die eine ARIA-Rolle zugewiesen haben.

Das Attribut sollte mit JavaScript als Ergebnis eines Validierungsprozesses gesetzt werden. Wenn ein Wert als ungültig oder außerhalb des Bereichs ermittelt wird, setzen Sie `aria-invalid="true"` **und** informieren Sie den Benutzer über den Fehler. Für eine bessere Benutzererfahrung geben Sie Vorschläge, wie der Fehler behoben werden kann. Setzen Sie `aria-invalid="true"` nicht auf leere erforderliche Elemente, bis der Benutzer versucht, das Formular abzuschicken. Sie könnten noch dabei sein, es auszufüllen.

> [!NOTE]
> Wenn `aria-invalid` zusammen mit dem Attribut `aria-required` verwendet wird, sollte `aria-invalid` nicht auf true gesetzt werden, bevor das Formular abgeschickt wird - nur als Reaktion auf eine Validierung.

Es gibt derzeit vier Werte: zusätzlich zu `true` und `false` haben wir `grammar`, das verwendet werden kann, wenn ein grammatikalischer Fehler erkannt wird, und `spelling` für Rechtschreibfehler. Wenn das Attribut nicht vorhanden ist, sein Wert false ist oder ein leerer String ist, gilt der Standardwert false. Jeder andere Wert wird so behandelt, als wäre `true` gesetzt.

### Native HTML-Validierung

HTML verfügt über eine native Formularvalidierung. Wenn ein Benutzer ein Formular mit Steuerelementen einreicht, die Fehler enthalten, zeigt das erste Steuerelement mit einem ungültigen Wert nativ eine Fehlermeldung an.

Wenn ein Formular-Steuerelement, das nicht ausgefüllt ist, das [`required`](/de/docs/Web/HTML/Attributes/required)-Attribut enthält, wird das Formular nicht abgesendet und eine Fehlermeldung wie "Bitte füllen Sie dieses Feld aus" erscheint. Die Nachrichten für die native Validierung variieren je nach Browser und können nicht gestylt werden.

```html
<input type="number" step="2" min="0" max="100" required />
```

Wenn der Benutzer im vorangegangenen Eingabe-Beispiel einen Wert über dem Maximum, unter dem Minimum oder einen Wert, der nicht mit dem Schrittwert übereinstimmt, eingegeben hat, würde eine Fehlermeldung erscheinen. Wenn der Benutzer "3" eingegeben hätte, wäre die native Fehlermeldung ähnlich wie "Bitte geben Sie einen gültigen Wert ein."

Wenn Sie Ihre eigenen Formularvalidierungsskripte erstellen, stellen Sie sicher, dass Sie `aria-invalid` für ungültige Formular-Steuerelemente zusammen mit Stilen (verwenden Sie den Attributselektor `[aria-invalid="true"]`) und Nachrichten (mit [`aria-errormessage`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage)) hinzufügen, um den Benutzern zu helfen, den Fehler zu verstehen und wie sie ihn beheben können.

## Werte

- `grammar`
  - : Ein grammatikalischer Fehler wurde erkannt.
- `false` (Standard)
  - : Es wurden keine Fehler im Wert erkannt.
- `spelling`
  - : Ein Rechtschreibfehler wurde erkannt.
- `true`
  - : Der vom Benutzer eingegebene Wert hat die Validierung nicht bestanden.

Jeder Wert, der nicht in dieser Liste enthalten ist, wird als `true` behandelt.

## Beispiel

Das folgende Snippet zeigt eine vereinfachte Version von zwei Formularfeldern mit einer an das Blur-Ereignis angehängten Validierungsfunktion. Beachten Sie, dass das Hinzufügen des Attributs zu Eingaben nicht unbedingt erforderlich ist, da der Standardwert für `aria-invalid` `false` ist.

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

Beachten Sie, dass es nicht notwendig ist, die Felder sofort bei Blur zu validieren; die Anwendung könnte warten, bis das Formular abgeschickt wird (obwohl dies nicht unbedingt empfohlen wird).

Das folgende Snippet zeigt eine Validierungsfunktion, die nur das Vorhandensein eines bestimmten Zeichens überprüft (in der realen Welt wird die Validierung wahrscheinlich komplexer sein):

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

Das folgende Snippet zeigt die Warnfunktionen, die die Fehlermeldung hinzufügen (oder entfernen):

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

Beachten Sie, dass der Alarm das ARIA-Rolle-Attribut [`alert`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role) gesetzt hat.

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

Geerbt in Rolle:

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
