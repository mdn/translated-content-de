---
title: aria-invalid
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-invalid
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Der `aria-invalid` Zustand zeigt an, dass der eingegebene Wert nicht dem von der Anwendung erwarteten Format entspricht.

## Beschreibung

Das `aria-invalid` Attribut wird verwendet, um anzuzeigen, dass der in ein Eingabefeld eingegebene Wert nicht in einem Format oder Wert vorliegt, den die Anwendung akzeptieren wird. Dies kann Formate wie E-Mail-Adressen oder Telefonnummern umfassen. `aria-invalid` kann auch verwendet werden, um anzuzeigen, dass ein erforderliches Feld leer ist.

Das `aria-invalid` Attribut kann mit jedem typischen HTML-Formular-Element genutzt werden und ist nicht auf Elemente beschränkt, die eine ARIA-Rolle zugewiesen haben.

Das Attribut sollte als Ergebnis eines Validierungsprozesses mit JavaScript gesetzt werden. Wenn festgestellt wird, dass ein Wert ungültig oder außerhalb des zulässigen Bereichs ist, setzen Sie `aria-invalid="true"` **und** informieren Sie den Benutzer darüber, dass ein Fehler vorliegt. Für eine bessere Benutzererfahrung sollten Sie Vorschläge bereitstellen, wie der Fehler behoben werden kann. Setzen Sie `aria-invalid="true"` nicht auf leere erforderliche Felder, bis der Benutzer versucht, das Formular abzusenden. Möglicherweise arbeiten sie noch daran, es auszufüllen.

> [!NOTE]
> Wenn `aria-invalid` in Verbindung mit dem `aria-required` Attribut verwendet wird, sollte `aria-invalid` nicht vor dem Absenden des Formulars auf true gesetzt werden - nur als Reaktion auf die Validierung.

Es gibt derzeit vier Werte: zusätzlich zu `true` und `false` haben wir `grammar`, das verwendet werden kann, wenn ein grammatikalischer Fehler erkannt wird, und `spelling` für Rechtschreibfehler. Wenn das Attribut nicht vorhanden ist oder sein Wert auf false gesetzt ist, oder sein Wert eine leere Zeichenkette ist, gilt der Standardwert auf false. Jeder andere Wert wird behandelt, als ob `true` gesetzt wäre.

### Native HTML-Validierung

HTML verfügt über eine native Formularvalidierung. Wenn ein Formular mit einem Steuerungselement mit Fehlern abgesendet wird, wird das erste Formularsteuerelement mit einem ungültigen Wert angezeigt und zeigt eine Fehlermeldung an, nativ.

Wenn ein [`required`](/de/docs/Web/HTML/Attributes/required) Attribut auf einem Formularsteuerelement steht, das nicht ausgefüllt ist, wird das Formular nicht abgesendet, und eine Fehlermeldung erscheint mit der Aufforderung "Bitte füllen Sie dieses Feld aus" oder etwas Ähnlichem. Die Nachrichten für die native Validierung variieren je nach Browser und können nicht gestylt werden.

```html
<input type="number" step="2" min="0" max="100" required />
```

Wenn der Benutzer im vorherigen Eingabebeispiel einen Wert über dem Maximum, unter dem Minimum oder einen Wert eingeben würde, der nicht mit dem Schrittwert übereinstimmt, würde eine Fehlermeldung erscheinen. Wenn der Benutzer "3" eingegeben hätte, wäre die native Fehlermeldung ähnlich wie "Bitte geben Sie einen gültigen Wert ein."

Wenn Sie Ihre eigenen Formularvalidierungsskripte erstellen, stellen Sie sicher, dass Sie `aria-invalid` auf ungültigen Formularsteuerelementen zusammen mit Stil (verwenden Sie den `[aria-invalid="true"]` Attributselektor) und Nachrichten (mit [`aria-errormessage`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage)) einbeziehen, um den Benutzern zu helfen, zu verstehen, wo der Fehler liegt und wie sie ihn beheben können.

## Werte

- `grammar`
  - : Ein grammatikalischer Fehler wurde erkannt.
- `false` (Standard)
  - : Es wurden keine Fehler im Wert erkannt.
- `spelling`
  - : Ein Rechtschreibfehler wurde erkannt.
- `true`
  - : Der vom Benutzer eingegebene Wert hat die Validierung nicht bestanden.

Jeder Wert, der nicht in dieser Liste ist, wird als `true` behandelt.

## Beispiel

Das folgende Snippet zeigt eine vereinfachte Version von zwei Formularfeldern mit einer Validierungsfunktion, die an das Blur-Ereignis angehängt ist. Beachten Sie, dass es nicht unbedingt erforderlich ist, das Attribut für `aria-invalid` hinzuzufügen, da der Standardwert `false` ist.

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

Es ist nicht notwendig, die Felder sofort bei Blur zu validieren; die Anwendung könnte warten, bis das Formular abgesendet wird (obwohl dies nicht unbedingt empfohlen wird).

Das unten stehende Snippet zeigt eine sehr einfache Validierungsfunktion, die nur auf das Vorhandensein eines bestimmten Zeichens überprüft (in der realen Welt wird die Validierung wahrscheinlich ausgefeilter sein):

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

Das folgende Snippet zeigt die Alert-Funktionen, die die Fehlermeldung hinzufügen (oder entfernen):

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

Beachten Sie, dass das Alert das ARIA-Rollenattribut auf [`alert`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role) gesetzt hat.

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
- [Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) Anleitung
