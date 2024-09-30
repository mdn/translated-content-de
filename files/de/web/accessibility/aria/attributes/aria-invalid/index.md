---
title: aria-invalid
slug: Web/Accessibility/ARIA/Attributes/aria-invalid
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Der Zustand `aria-invalid` zeigt an, dass der eingegebene Wert nicht dem von der Anwendung erwarteten Format entspricht.

## Beschreibung

Das Attribut `aria-invalid` wird verwendet, um anzuzeigen, dass der in ein Eingabefeld eingegebene Wert nicht in einem Format oder Wert vorliegt, den die Anwendung akzeptiert. Dies kann Formate wie E-Mail-Adressen oder Telefonnummern umfassen. `aria-invalid` kann auch verwendet werden, um anzuzeigen, dass ein erforderliches Feld leer ist.

Das Attribut `aria-invalid` kann mit jedem typischen HTML-Formularelement verwendet werden und ist nicht auf Elemente beschränkt, denen eine ARIA-Rolle zugewiesen wurde.

Das Attribut sollte mit JavaScript als Ergebnis eines Validierungsprozesses gesetzt werden. Wenn ein Wert als ungültig oder außerhalb des Bereichs bestimmt wird, setzen Sie `aria-invalid="true"` **und** informieren Sie den Benutzer darüber, dass ein Fehler vorliegt. Für ein besseres Benutzererlebnis geben Sie Vorschläge, wie der Fehler behoben werden kann. Setzen Sie `aria-invalid="true"` nicht auf leeren erforderlichen Elementen, bis der Benutzer versucht, das Formular abzusenden. Möglicherweise wird noch daran gearbeitet.

> [!NOTE]
> Wenn `aria-invalid` in Verbindung mit dem Attribut `aria-required` verwendet wird, sollte `aria-invalid` nicht auf true gesetzt werden, bevor das Formular abgesendet wird - nur als Reaktion auf eine Validierung.

Derzeit gibt es vier Werte: Zusätzlich zu `true` und `false` haben wir `grammar`, das verwendet werden kann, wenn ein grammatikalischer Fehler erkannt wird, und `spelling` für Rechtschreibfehler. Wenn das Attribut nicht vorhanden ist, sein Wert false oder ein leerer String ist, gilt der Standardwert false. Jeder andere Wert wird behandelt, als wäre `true` gesetzt.

### Native HTML-Validierung

HTML verfügt über eine native Formularvalidierung. Wenn ein Benutzer ein Formular mit einem Steuerungselement mit Fehlern absendet, zeigt das erste Formularsteuerungselement mit einem ungültigen Wert eine Fehlermeldung nativ an.

Wenn ein [`required`](/de/docs/Web/HTML/Attributes/required)-Attribut auf einem Formularsteuerungselement vorhanden ist, das nicht ausgefüllt ist, wird das Formular nicht abgesendet und es erscheint eine Fehlermeldung mit der Aufschrift "Bitte füllen Sie dieses Feld aus" oder etwas Ähnlichem. Die Nachricht für die native Validierung variiert je nach Browser und kann nicht gestaltet werden.

```html
<input type="number" step="2" min="0" max="100" required />
```

Wenn der Benutzer einen Wert im obigen Eingabebeispiel eingegeben hätte, der über dem Maximum, unter dem Minimum liegt oder nicht dem Schrittwert entspricht, würde eine Fehlermeldung erscheinen. Hätte der Benutzer "3" eingegeben, wäre die native Fehlermeldung ähnlich wie "Bitte geben Sie einen gültigen Wert ein".

Wenn Sie Ihre eigenen Formularvalidierungsskripte erstellen, stellen Sie sicher, dass Sie `aria-invalid` bei ungültigen Formularsteuerungen, zusammen mit Styling (Verwenden Sie den `[aria-invalid="true"]` Attribut-Selektor) und Nachrichten (mit [`aria-errormessage`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-errormessage)) einfügen, um den Benutzern zu helfen, zu verstehen, wo der Fehler ist und wie sie ihn beheben können.

## Werte

- `grammar`
  - : Ein grammatikalischer Fehler wurde erkannt.
- `false` (Standard)
  - : Es wurden keine Fehler im Wert erkannt.
- `spelling`
  - : Ein Rechtschreibfehler wurde erkannt.
- `true`
  - : Der vom Benutzer eingegebene Wert hat die Validierung nicht bestanden.

Jeder Wert, der nicht in dieser Liste steht, wird als `true` betrachtet.

## Beispiel

Das folgende Snippet zeigt eine vereinfachte Version von zwei Formularfeldern mit einer Validierungsfunktion, die dem Blur-Ereignis zugeordnet ist. Beachten Sie, dass es aufgrund des Standardwerts von `aria-invalid`, der `false` ist, nicht unbedingt erforderlich ist, das Attribut zum Eingabefeld hinzuzufügen.

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

Beachten Sie, dass es nicht notwendig ist, die Felder sofort bei Blur zu validieren; die Anwendung könnte warten, bis das Formular abgesendet wird (obwohl das nicht unbedingt empfohlen wird).

Das folgende Snippet zeigt eine sehr einfache Validierungsfunktion, die nur auf das Vorhandensein eines bestimmten Zeichens überprüft (in der realen Welt wird die Validierung wahrscheinlich umfassender sein):

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

Das nächste Snippet zeigt die Alarmfunktionen, die die Fehlermeldung hinzufügen (oder entfernen):

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

Beachten Sie, dass der Alarm die ARIA-Rollenattribut `alert` gesetzt hat.

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
