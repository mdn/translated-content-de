---
title: "ARIA: aria-invalid Attribut"
short-title: aria-invalid
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-invalid
l10n:
  sourceCommit: fc52eb81b630ca02c16addc346924295bdb5aaa8
---

Der `aria-invalid` Zustand zeigt an, dass der eingegebene Wert nicht dem vom Programm erwarteten Format entspricht.

## Beschreibung

Das `aria-invalid` Attribut wird verwendet, um anzuzeigen, dass der in ein Eingabefeld eingegebene Wert nicht in einem Format oder Wert vorliegt, den die Anwendung akzeptiert. Dies kann Formate wie E-Mail-Adressen oder Telefonnummern umfassen. `aria-invalid` kann auch verwendet werden, um anzuzeigen, dass ein erforderliches Feld leer ist.

Das `aria-invalid` Attribut kann mit jedem typischen HTML-Formular-Element verwendet werden und ist nicht auf Elemente beschränkt, die eine ARIA-Rolle zugewiesen haben.

Das Attribut sollte mit JavaScript als Ergebnis eines Validierungsprozesses gesetzt werden. Wenn festgestellt wird, dass ein Wert ungültig oder außerhalb des Bereichs liegt, setzen Sie `aria-invalid="true"` **und** informieren Sie den Benutzer über den Fehler. Bieten Sie zur besseren Benutzererfahrung Vorschläge an, wie der Fehler behoben werden kann. Setzen Sie nicht `aria-invalid="true"` auf leere erforderliche Elemente, bevor der Benutzer versucht, das Formular zu senden. Sie arbeiten möglicherweise noch daran, es auszufüllen.

> [!NOTE]
> Wenn `aria-invalid` zusammen mit dem `aria-required` Attribut verwendet wird, sollte `aria-invalid` nicht auf true gesetzt werden, bevor das Formular gesendet wird - nur als Antwort auf eine Validierung.

Derzeit gibt es vier Werte: zusätzlich zu `true` und `false` haben wir `grammar`, das verwendet werden kann, wenn ein grammatikalischer Fehler festgestellt wird, und `spelling` für Rechtschreibfehler. Wenn das Attribut nicht vorhanden ist, sein Wert false oder ein leerer String ist, gilt der Standardwert von false. Jeder andere Wert wird so behandelt, als wäre `true` gesetzt.

### Native HTML-Validierung

HTML hat eine native Formularvalidierung. Wenn ein Benutzer ein Formular mit einem steuerelement enthaltenden Fehlern sendet, zeigt das erste Formularsteuerelement mit einem ungültigen Wert eine Fehlermeldung an, nativ.

Wenn ein [`required`](/de/docs/Web/HTML/Reference/Attributes/required) Attribut auf einem Formularsteuerelement gesetzt ist, das nicht ausgefüllt ist, wird das Formular nicht gesendet und es erscheint eine Fehlermeldung wie "Bitte füllen Sie dieses Feld aus" oder etwas Ähnliches. Die Nachrichten für die native Validierung variieren je nach Browser und können nicht gestylt werden.

```html
<input type="number" step="2" min="0" max="100" required />
```

Wenn der Benutzer im obigen Eingabe-Beispiel einen Wert eingegeben hätte, der über dem Maximum, unter dem Minimum liegt oder nicht dem Schrittwert entspricht, würde eine Fehlermeldung angezeigt. Wenn der Benutzer "3" eingegeben hätte, wäre die native Fehlermeldung ähnlich "Bitte geben Sie einen gültigen Wert ein."

Wenn Sie Ihre eigenen Formularvalidierungsskripte erstellen, stellen Sie sicher, dass `aria-invalid` auf ungültigen Formularsteuerelementen enthalten ist, zusammen mit einem Styling (verwenden Sie den `[aria-invalid="true"]` Attributselektor) und Nachrichten (mit [`aria-errormessage`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage)), um Benutzern zu helfen, zu verstehen, wo der Fehler liegt und wie sie ihn beheben können.

## Werte

- `grammar`
  - : Ein grammatikalischer Fehler wurde festgestellt.
- `false` (Standard)
  - : Es wurden keine Fehler im Wert festgestellt.
- `spelling`
  - : Ein Rechtschreibfehler wurde festgestellt.
- `true`
  - : Der vom Benutzer eingegebene Wert hat die Validierung nicht bestanden.

Jeder Wert, der nicht in dieser Liste enthalten ist, wird als `true` behandelt.

## Beispiel

Das folgende Snippet zeigt eine vereinfachte Version von zwei Formularfeldern mit einer Validierungsfunktion, die an das Blur-Ereignis gebunden ist. Beachten Sie, dass es nicht unbedingt erforderlich ist, das Attribut auf Eingabe mit dem Standardwert `aria-invalid` auf false zu setzen.

```html
<ul>
  <li>
    <label for="name">Full Name</label>
    <input
      type="text"
      name="name"
      id="name"
      aria-required="true"
      aria-invalid="false" />
  </li>
  <li>
    <label for="email">Email Address</label>
    <input
      type="email"
      name="email"
      id="email"
      aria-required="true"
      aria-invalid="false" />
  </li>
</ul>
```

```js
document.getElementById("name").addEventListener("blur", () => {
  checkValidity(
    "name",
    " ",
    "Invalid name entered (requires both first and last name)",
  );
});

document.getElementById("email").addEventListener("blur", () => {
  checkValidity("email", "@", "Invalid email address");
});
```

Beachten Sie, dass es nicht notwendig ist, die Felder sofort beim Blur zu validieren; die Anwendung könnte warten, bis das Formular übermittelt wird (obwohl dies nicht unbedingt empfohlen wird).

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

Das folgende Snippet zeigt die Alarmfunktionen, die die Fehlermeldung hinzufügen (oder entfernen):

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

Beachten Sie, dass der Alarm das ARIA-Rollenattribut auf [`alert`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role) gesetzt hat.

## Zugehörige Schnittstellen

- [`Element.ariaInvalid`](/de/docs/Web/API/Element/ariaInvalid)
  - : Die [`ariaInvalid`](/de/docs/Web/API/Element/ariaInvalid) Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element) Schnittstelle, spiegelt den Wert des `aria-invalid` Attributs wider, welches angibt, ob das Element einer Barrierefreiheits-API ausgesetzt ist.
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

Vererbt in Rollen:

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
