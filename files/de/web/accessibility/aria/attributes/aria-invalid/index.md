---
title: aria-invalid
slug: Web/Accessibility/ARIA/Attributes/aria-invalid
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Der `aria-invalid` Zustand zeigt an, dass der eingegebene Wert nicht dem vom Programm erwarteten Format entspricht.

## Beschreibung

Das `aria-invalid` Attribut wird verwendet, um anzuzeigen, dass der Wert in ein Eingabefeld nicht in einem Format oder als Wert eingegeben wurde, den die Anwendung akzeptiert. Dies kann Formate wie E-Mail-Adressen oder Telefonnummern umfassen. `aria-invalid` kann auch verwendet werden, um anzuzeigen, dass ein erforderliches Feld leer ist.

Das `aria-invalid` Attribut kann mit jedem typischen HTML-Formularelement verwendet werden und ist nicht auf Elemente beschränkt, denen eine ARIA-Rolle zugewiesen ist.

Das Attribut sollte mit JavaScript als Ergebnis eines Validierungsprozesses gesetzt werden. Wenn ein Wert als ungültig oder außerhalb des Bereichs befunden wird, setzen Sie `aria-invalid="true"` **und** informieren Sie den Benutzer, dass ein Fehler vorliegt. Für eine bessere Benutzererfahrung sollten Sie Vorschläge geben, wie der Fehler behoben werden kann. Setzen Sie `aria-invalid="true"` nicht auf leeren erforderlichen Elementen, bis der Benutzer versucht, das Formular abzusenden. Er kann immer noch dabei sein, es auszufüllen.

> [!NOTE]
> Wenn `aria-invalid` zusammen mit dem `aria-required` Attribut verwendet wird, sollte `aria-invalid` nicht auf true gesetzt werden, bevor das Formular abgesendet wird - nur als Reaktion auf die Validierung.

Derzeit gibt es vier Werte: Zusätzlich zu `true` und `false` gibt es `grammar`, das verwendet werden kann, wenn ein grammatikalischer Fehler festgestellt wird, und `spelling` für Rechtschreibfehler. Wenn das Attribut nicht vorhanden ist oder sein Wert false oder ein leerer String ist, gilt der Standardwert false. Jeder andere Wert wird so behandelt, als ob `true` gesetzt wäre.

### Native HTML-Validierung

HTML hat eine native Formularvalidierung. Wenn ein Benutzer ein Formular mit einer Steuerung mit Fehlern übermittelt, zeigt die erste Formularsteuerung mit einem ungültigen Wert eine Fehlermeldung, nativ.

Wenn ein [`required`](/de/docs/Web/HTML/Attributes/required) Attribut auf einem Formularsteuerungselement vorhanden ist, das nicht ausgefüllt ist, wird das Formular nicht übermittelt, und es erscheint eine Fehlermeldung mit dem Text "Bitte füllen Sie dieses Feld aus" oder etwas Ähnliches. Die Nachrichten für die native Validierung variieren je nach Browser und können nicht angepasst werden.

```html
<input type="number" step="2" min="0" max="100" required />
```

Wenn der Benutzer im obigen Eingabebeispiel einen Wert eingegeben hat, der über dem Maximum, unter dem Minimum liegt oder nicht mit dem Schrittwert übereinstimmt, erscheint eine Fehlermeldung. Hätte der Benutzer "3" eingegeben, wäre die native Fehlermeldung ähnlich wie "Bitte geben Sie einen gültigen Wert ein."

Wenn Sie eigene Formularvalidierungsskripte erstellen, sollten Sie sicherstellen, dass `aria-invalid` bei ungültigen Formularsteuerungen enthalten ist, zusammen mit einer Gestaltung (verwenden Sie den `[aria-invalid="true"]` Attributselektor) und Nachrichten (mit [`aria-errormessage`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-errormessage)) um Benutzern zu helfen, zu verstehen, wo der Fehler liegt und wie sie ihn beheben können.

## Werte

- `grammar`
  - : Ein grammatikalischer Fehler wurde entdeckt.
- `false` (Standard)
  - : Es wurden keine Fehler im Wert festgestellt.
- `spelling`
  - : Ein Rechtschreibfehler wurde entdeckt.
- `true`
  - : Der vom Benutzer eingegebene Wert hat die Validierung nicht bestanden.

Jeder Wert, der nicht in dieser Liste steht, wird als `true` behandelt.

## Beispiel

Der folgende Ausschnitt zeigt eine vereinfachte Version von zwei Formularfeldern mit einer Validierungsfunktion, die an das Blur-Ereignis angehängt ist. Beachten Sie, dass es nicht zwingend notwendig ist, das Attribut für Eingaben hinzuzufügen, da der Standardwert für `aria-invalid` false ist.

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

Beachten Sie, dass es nicht notwendig ist, die Felder sofort bei Blur zu validieren; die Anwendung könnte warten, bis das Formular gesendet wird (obwohl dies nicht unbedingt empfohlen wird).

Der untenstehende Ausschnitt zeigt eine sehr einfache Validierungsfunktion, die nur das Vorhandensein eines bestimmten Zeichens überprüft (in der realen Welt wird die Validierung wahrscheinlich komplexer sein):

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

Der untenstehende Ausschnitt zeigt die Alarmfunktionen, die die Fehlermeldung hinzufügen (oder entfernen):

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

Beachten Sie, dass der Alert das ARIA-Rollenattribut [`alert`](/de/docs/Web/Accessibility/ARIA/Roles/alert_role) gesetzt hat.

## Verwandte Rollen

Verwendet in Rollen:

- [`application`](/de/docs/Web/Accessibility/ARIA/Roles/application_role)
- [`checkbox`](/de/docs/Web/Accessibility/ARIA/Roles/checkbox_role)
- [`combobox`](/de/docs/Web/Accessibility/ARIA/Roles/combobox_role)
- [`gridcell`](/de/docs/Web/Accessibility/ARIA/Roles/gridcell_role)
- [`listbox`](/de/docs/Web/Accessibility/ARIA/Roles/listbox_role)
- [`radiogroup`](/de/docs/Web/Accessibility/ARIA/Roles/radiogroup_role)
- [`slider`](/de/docs/Web/Accessibility/ARIA/Roles/slider_role)
- [`spinbutton`](/de/docs/Web/Accessibility/ARIA/Roles/spinbutton_role)
- [`textbox`](/de/docs/Web/Accessibility/ARIA/Roles/textbox_role)
- [`tree`](/de/docs/Web/Accessibility/ARIA/Roles/tree_role)

Geerbt in Rolle:

- [`columnheader`](/de/docs/Web/Accessibility/ARIA/Roles/columnheader_role)
- [`rowheader`](/de/docs/Web/Accessibility/ARIA/Roles/rowheader_role)
- [`searchbox`](/de/docs/Web/Accessibility/ARIA/Roles/searchbox_role)
- [`switch`](/de/docs/Web/Accessibility/ARIA/Roles/switch_role)
- [`treegrid`](/de/docs/Web/Accessibility/ARIA/Roles/treegrid_role)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`aria-errormessage`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-errormessage)
- CSS {{CSSXRef(':valid')}} Pseudoklasse
- CSS {{CSSXRef(':invalid')}} Pseudoklasse
- [Formularvalidierung](/de/docs/Learn/Forms/Form_validation) Tutorial
