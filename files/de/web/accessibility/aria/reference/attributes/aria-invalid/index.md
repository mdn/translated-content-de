---
title: "ARIA: Attribut aria-invalid"
short-title: aria-invalid
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-invalid
l10n:
  sourceCommit: d9e522ed63f204df4b9ab3ed6c8208ce089fa868
---

Der Zustand `aria-invalid` gibt an, dass der eingegebene Wert nicht dem von der Anwendung erwarteten Format entspricht.

## Beschreibung

Das Attribut `aria-invalid` zeigt an, dass der in ein Eingabefeld eingegebene Wert nicht das Format oder den Wert hat, den die Anwendung akzeptiert. Dies kann beispielsweise Formate für E-Mail-Adressen oder Telefonnummern betreffen. Mit `aria-invalid` kann auch angezeigt werden, dass ein Pflichtfeld leer ist.

Das Attribut `aria-invalid` kann mit jedem üblichen HTML-Formularelement verwendet werden. Es ist nicht auf Elemente beschränkt, denen eine ARIA-Rolle zugewiesen wurde.

Das Attribut sollte nach einer Validierung per JavaScript gesetzt werden. Wenn ein Wert als ungültig erkannt wird oder außerhalb des zulässigen Bereichs liegt, setzen Sie `aria-invalid="true"` **und** teilen Sie den Nutzern mit, dass ein Fehler vorliegt. Geben Sie für eine bessere Benutzererfahrung Hinweise, wie sich der Fehler beheben lässt. Setzen Sie `aria-invalid="true"` bei leeren Pflichtfeldern erst, nachdem versucht wurde, das Formular abzusenden. Möglicherweise wird das Formular noch ausgefüllt.

> [!NOTE]
> Wenn `aria-invalid` zusammen mit dem Attribut `aria-required` verwendet wird, sollte `aria-invalid` erst nach dem Absenden des Formulars und nur als Reaktion auf eine Validierung auf true gesetzt werden.

Derzeit gibt es vier Werte: Neben `true` und `false` gibt es `grammar` für erkannte Grammatikfehler und `spelling` für Rechtschreibfehler. Wenn das Attribut fehlt, sein Wert false oder eine leere Zeichenfolge ist, gilt der Standardwert false. Jeder andere Wert wird so behandelt, als wäre `true` gesetzt.

### Native HTML-Validierung

HTML bietet eine native Formularvalidierung. Wenn ein Formular mit fehlerhaften Formularelementen abgesendet wird, zeigt das erste Formularelement mit einem ungültigen Wert automatisch eine Fehlermeldung an.

Wenn ein nicht ausgefülltes Formularelement das Attribut [`required`](/de/docs/Web/HTML/Reference/Attributes/required) hat, wird das Formular nicht abgesendet. Stattdessen erscheint eine Fehlermeldung wie „Bitte füllen Sie dieses Feld aus“. Die Meldungen der nativen Validierung unterscheiden sich je nach Browser und können nicht gestaltet werden.

```html
<input type="number" step="2" min="0" max="100" required />
```

Wenn im vorangehenden Eingabebeispiel ein Wert eingegeben wurde, der über dem Höchstwert oder unter dem Mindestwert liegt oder nicht zur Schrittweite passt, erscheint eine Fehlermeldung. Bei der Eingabe von „3“ würde die native Fehlermeldung etwa „Bitte geben Sie einen gültigen Wert ein“ lauten.

Wenn Sie eigene Skripte zur Formularvalidierung erstellen, sollten Sie bei ungültigen Formularelementen `aria-invalid` setzen und zusätzlich eine visuelle Kennzeichnung (mit dem Attributselektor `[aria-invalid="true"]`) sowie eine Fehlermeldung (mit [`aria-errormessage`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage)) bereitstellen. So können Nutzer erkennen, wo der Fehler liegt und wie sie ihn beheben können.

## Werte

- `grammar`
  - : Ein Grammatikfehler wurde erkannt.
- `false` (Standardwert)
  - : Im Wert wurden keine Fehler erkannt.
- `spelling`
  - : Ein Rechtschreibfehler wurde erkannt.
- `true`
  - : Der vom Nutzer eingegebene Wert hat die Validierung nicht bestanden.

Jeder Wert, der nicht in dieser Liste steht, wird wie `true` behandelt.

## Zugehörige Schnittstellen

- [`Element.ariaInvalid`](/de/docs/Web/API/Element/ariaInvalid)
  - : Die Eigenschaft [`ariaInvalid`](/de/docs/Web/API/Element/ariaInvalid) der Schnittstelle [`Element`](/de/docs/Web/API/Element) spiegelt den Wert des Attributs `aria-invalid` wider, das angibt, ob das Element einer Barrierefreiheits-API zugänglich gemacht wird.
- [`ElementInternals.ariaInvalid`](/de/docs/Web/API/ElementInternals/ariaInvalid)
  - : Die Eigenschaft [`ariaInvalid`](/de/docs/Web/API/ElementInternals/ariaInvalid) der Schnittstelle [`ElementInternals`](/de/docs/Web/API/ElementInternals) spiegelt den Wert des Attributs `aria-invalid` wider.

## Zugehörige Rollen

Verwendet in folgenden Rollen:

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

An folgende Rollen vererbt:

- [`columnheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
- [`rowheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role)
- [`searchbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/searchbox_role)
- [`switch`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/switch_role)
- [`treegrid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role)

## Beispiel

Der folgende Ausschnitt zeigt eine vereinfachte Version von zwei Formularfeldern mit einer Validierungsfunktion, die an das blur-Ereignis gebunden ist. Da der Standardwert von `aria-invalid` `false` ist, muss das Attribut dem Eingabeelement nicht zwingend hinzugefügt werden.

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

Die Felder müssen nicht unmittelbar beim blur-Ereignis validiert werden. Die Anwendung könnte auch warten, bis das Formular abgesendet wird, auch wenn dies nicht unbedingt empfehlenswert ist.

Der folgende Ausschnitt zeigt eine Validierungsfunktion, die lediglich prüft, ob ein bestimmtes Zeichen vorhanden ist. In der Praxis ist die Validierung wahrscheinlich komplexer:

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

Der folgende Ausschnitt zeigt die Funktionen für die Fehlermeldung, die diese hinzufügen oder entfernen:

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

Beachten Sie, dass für die Fehlermeldung das ARIA-Rollenattribut auf [`alert`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role) gesetzt ist.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`aria-errormessage`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage)
- CSS-Pseudoklasse {{CSSXRef(':valid')}}
- CSS-Pseudoklasse {{CSSXRef(':invalid')}}
- Tutorial zur [Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
