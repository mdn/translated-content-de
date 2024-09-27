---
title: aria-invalid
slug: Web/Accessibility/ARIA/Attributes/aria-invalid
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Der `aria-invalid` Zustand zeigt an, dass der eingegebene Wert nicht dem vom Programm erwarteten Format entspricht.

## Beschreibung

Das `aria-invalid` Attribut wird verwendet, um anzuzeigen, dass der in ein Eingabefeld eingegebene Wert nicht in einem Format oder einem Wert vorliegt, den die Anwendung akzeptiert. Dies kann Formate wie E-Mail-Adressen oder Telefonnummern umfassen. `aria-invalid` kann auch verwendet werden, um anzuzeigen, dass ein erforderliches Feld leer ist.

Das `aria-invalid` Attribut kann mit jedem typischen HTML-Formular-Element verwendet werden und ist nicht auf Elemente beschränkt, denen eine ARIA-Rolle zugewiesen wurde.

Das Attribut sollte mit JavaScript infolge eines Validierungsprozesses gesetzt werden. Wenn ein Wert als ungültig oder außerhalb des Bereichs ermittelt wird, setzen Sie `aria-invalid="true"` **und** informieren Sie den Benutzer über den Fehler. Für eine bessere Benutzererfahrung bieten Sie Vorschläge an, wie der Fehler behoben werden kann. Setzen Sie `aria-invalid="true"` nicht auf leere erforderliche Elemente, bis der Benutzer versucht, das Formular abzusenden. Er könnte noch dabei sein, es auszufüllen.

> [!NOTE]
> Wenn `aria-invalid` in Verbindung mit dem `aria-required` Attribut verwendet wird, sollte `aria-invalid` nicht auf true gesetzt werden, bevor das Formular abgeschickt wird - nur als Antwort auf die Validierung.

Aktuell gibt es vier Werte: zusätzlich zu `true` und `false` haben wir `grammar`, das verwendet werden kann, wenn ein grammatikalischer Fehler erkannt wird, und `spelling` für Rechtschreibfehler. Wenn das Attribut nicht vorhanden ist, oder sein Wert false ist, oder sein Wert eine leere Zeichenfolge ist, gilt der Standardwert false. Jeder andere Wert wird so behandelt, als wäre `true` gesetzt.

### Native HTML-Validierung

HTML verfügt über eine native Formularvalidierung. Wenn ein Benutzer ein Formular mit einem Feld mit fehlerhaften Werten absendet, zeigt die erste Formularsteuerung mit einem ungültigen Wert eine Fehlermeldung an, nativ.

Wenn auf einer Formularsteuerung ein [`required`](/de/docs/Web/HTML/Attributes/required) Attribut vorhanden ist, das nicht ausgefüllt ist, wird das Formular nicht gesendet, und eine Fehlermeldung erscheint, die etwa "Bitte füllen Sie dieses Feld aus" lautet oder Ähnliches. Die Nachrichten für native Validierung variieren je nach Browser und können nicht gestaltet werden.

```html
<input type="number" step="2" min="0" max="100" required />
```

Wenn der Benutzer einen Wert eingegeben hätte, der über dem Maximum, unter dem Minimum liegt oder nicht dem Schrittwert entspricht, würde eine Fehlermeldung erscheinen. Wenn der Benutzer "3" eingegeben hätte, wäre die native Fehlermeldung ähnlich wie "Bitte geben Sie einen gültigen Wert ein."

Wenn Sie Ihre eigenen Formularvalidierungsskripte erstellen, stellen Sie sicher, dass `aria-invalid` bei ungültigen Formularsteuerelementen enthalten ist, zusammen mit Styling (verwenden Sie den `[aria-invalid="true"]` Attribut-Selektor) und Messaging (mit [`aria-errormessage`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-errormessage)), um Benutzern zu helfen, zu verstehen, wo der Fehler liegt und wie er behoben werden kann.

## Werte

- `grammar`
  - : Ein grammatikalischer Fehler wurde erkannt.
- `false` (Standard)
  - : Es wurden keine Fehler im Wert erkannt.
- `spelling`
  - : Ein Rechtschreibfehler wurde erkannt.
- `true`
  - : Der vom Benutzer eingegebene Wert hat die Validierung nicht bestanden.

Jeder in dieser Liste nicht enthaltene Wert wird als `true` behandelt.

## Beispiel

Der folgende Ausschnitt zeigt eine vereinfachte Version von zwei Formularfeldern mit einer an das Blur-Ereignis angehängten Validierungsfunktion. Beachten Sie, dass es nicht unbedingt notwendig ist, das Attribut zu dem Eingabefeld hinzuzufügen, da der Standardwert von `aria-invalid` false ist.

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

Der unten stehende Ausschnitt zeigt eine sehr einfache Validierungsfunktion, die nur auf das Vorhandensein eines bestimmten Zeichens überprüft (in der realen Welt wird die Validierung wahrscheinlich komplexer sein):

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

Der unten stehende Ausschnitt zeigt die Alarmfunktionen, die die Fehlermeldung hinzufügen (oder entfernen):

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

Beachten Sie, dass der Alarm über das ARIA-Rollenattribut [`alert`](/de/docs/Web/Accessibility/ARIA/Roles/alert_role) verfügt.

## Zugehörige Rollen

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
- [Formularvalidierung](/de/docs/Learn/Forms/Form_validation) Anleitung
