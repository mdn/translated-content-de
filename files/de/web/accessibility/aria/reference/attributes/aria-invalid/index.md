---
title: "ARIA: aria-invalid Attribut"
short-title: aria-invalid
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-invalid
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Der `aria-invalid` Zustand zeigt an, dass der eingegebene Wert nicht dem von der Anwendung erwarteten Format entspricht.

## Beschreibung

Das `aria-invalid` Attribut wird verwendet, um anzuzeigen, dass der in ein Eingabefeld eingegebene Wert nicht in einem Format oder Wert vorliegt, den die Anwendung akzeptieren wird. Dies kann Formate wie E-Mail-Adressen oder Telefonnummern umfassen. `aria-invalid` kann auch verwendet werden, um anzuzeigen, dass ein erforderliches Feld leer ist.

Das `aria-invalid` Attribut kann mit jedem typischen HTML-Formularelement verwendet werden und ist nicht auf Elemente beschränkt, denen eine ARIA-Rolle zugewiesen ist.

Das Attribut sollte mit JavaScript infolge eines Validierungsprozesses gesetzt werden. Wenn ein Wert als ungültig oder außerhalb des zulässigen Bereichs ermittelt wird, setzen Sie `aria-invalid="true"` **und** informieren Sie den Benutzer über den Fehler. Für eine bessere Benutzererfahrung sollten Sie Vorschläge geben, wie der Fehler behoben werden kann. Setzen Sie `aria-invalid="true"` nicht auf leere erforderliche Elemente bis der Benutzer versucht hat, das Formular abzusenden. Der Benutzer arbeitet möglicherweise noch daran, es auszufüllen.

> [!NOTE]
> Wenn `aria-invalid` in Verbindung mit dem `aria-required` Attribut verwendet wird, sollte `aria-invalid` nicht auf true gesetzt werden, bevor das Formular abgesendet wird - nur als Reaktion auf eine Validierung.

Es gibt derzeit vier Werte: zusätzlich zu `true` und `false` gibt es `grammar`, das verwendet werden kann, wenn ein grammatikalischer Fehler festgestellt wird, und `spelling` für Rechtschreibfehler. Wenn das Attribut nicht vorhanden ist, oder sein Wert false oder ein leerer String ist, gilt der Standardwert false. Jeder andere Wert wird so behandelt, als wäre `true` gesetzt.

### Native HTML-Validierung

HTML verfügt über eine native Formularvalidierung. Wenn ein Benutzer ein Formular mit einer Steuerung einreicht, die Fehler enthält, zeigt das erste Formularsteuerelement mit einem ungültigen Wert nativ eine Fehlermeldung an.

Wenn es ein [`required`](/de/docs/Web/HTML/Reference/Attributes/required) Attribut auf einem Formularsteuerelement gibt, das nicht ausgefüllt ist, wird das Formular nicht abgesendet und eine Fehlermeldung wie "Bitte füllen Sie dieses Feld aus" oder etwas Ähnliches erscheint. Die Nachrichten für die native Validierung variieren je nach Browser und können nicht gestylt werden.

```html
<input type="number" step="2" min="0" max="100" required />
```

Wenn der Benutzer im obigen Eingabe-Beispiel einen Wert über dem Maximum, unter dem Minimum oder der nicht zum Schrittwert passt, eingegeben hätte, würde eine Fehlermeldung erscheinen. Wenn der Benutzer "3" eingegeben hätte, wäre die native Fehlermeldung ähnlich wie "Bitte geben Sie einen gültigen Wert ein."

Wenn Sie Ihre eigenen Formularvalidierungsskripte erstellen, stellen Sie sicher, dass Sie `aria-invalid` auf ungültige Formularsteuerelemente setzen, zusammen mit Styling (verwenden Sie den `[aria-invalid="true"]` Attributselektor) und Nachrichten (mit [`aria-errormessage`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage)), um den Benutzern zu helfen, zu verstehen, wo der Fehler liegt und wie sie ihn beheben können.

## Werte

- `grammar`
  - : Ein grammatikalischer Fehler wurde festgestellt.
- `false` (Standard)
  - : Es wurden keine Fehler im Wert erkannt.
- `spelling`
  - : Ein Rechtschreibfehler wurde festgestellt.
- `true`
  - : Der vom Benutzer eingegebene Wert hat die Validierung nicht bestanden.

Jeder Wert, der nicht in dieser Liste ist, wird als `true` behandelt.

## Beispiel

Der folgende Ausschnitt zeigt eine vereinfachte Version von zwei Formularfeldern mit einer an das Blur-Ereignis angehängten Validierungsfunktion. Beachten Sie, dass da der Standardwert für `aria-invalid` false ist, es nicht unbedingt erforderlich ist, das Attribut zu input hinzuzufügen.

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

Beachten Sie, dass es nicht notwendig ist, die Felder sofort bei Blur zu validieren; die Anwendung könnte warten, bis das Formular abgesendet wird (obwohl dies nicht unbedingt empfohlen wird).

Der untenstehende Ausschnitt zeigt eine Validierungsfunktion, die nur auf das Vorhandensein eines bestimmten Zeichens prüft (in der realen Welt wird die Validierung wahrscheinlich ausgefeilter sein):

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

Beachten Sie, dass der Alarm das ARIA-Rollenattribut auf [`alert`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role) gesetzt hat.

## Zugehörige Schnittstellen

- [`Element.ariaInvalid`](/de/docs/Web/API/Element/ariaInvalid)
  - : Die [`ariaInvalid`](/de/docs/Web/API/Element/ariaInvalid)-Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element)-Schnittstelle, spiegelt den Wert des `aria-invalid` Attributs wider, welches anzeigt, ob das Element einer Zugänglichkeits-API ausgesetzt ist.
- [`ElementInternals.ariaInvalid`](/de/docs/Web/API/ElementInternals/ariaInvalid)
  - : Die [`ariaInvalid`](/de/docs/Web/API/ElementInternals/ariaInvalid)-Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle, spiegelt den Wert des `aria-invalid` Attributs wider.

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
