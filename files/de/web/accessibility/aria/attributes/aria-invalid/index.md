---
title: aria-invalid
slug: Web/Accessibility/ARIA/Attributes/aria-invalid
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{AccessibilitySidebar}}

Der `aria-invalid` Zustand gibt an, dass der eingegebene Wert nicht dem vom Anwendung erwarteten Format entspricht.

## Beschreibung

Das `aria-invalid` Attribut wird verwendet, um anzuzeigen, dass der in ein Eingabefeld eingegebene Wert nicht in einem Format oder Wert vorliegt, das die Anwendung akzeptiert. Dies kann Formate wie E-Mail-Adressen oder Telefonnummern umfassen. `aria-invalid` kann auch verwendet werden, um anzuzeigen, dass ein erforderliches Feld leer ist.

Das `aria-invalid` Attribut kann mit jedem gängigen HTML-Formularelement verwendet werden und ist nicht auf Elemente beschränkt, denen eine ARIA-Rolle zugewiesen wurde.

Das Attribut sollte mittels JavaScript als Ergebnis eines Validierungsprozesses gesetzt werden. Wenn ein Wert als ungültig oder außerhalb des zulässigen Bereichs ermittelt wird, setzen Sie `aria-invalid="true"` **und** informieren Sie den Benutzer über den Fehler. Für ein besseres Benutzererlebnis sollten Sie Vorschläge geben, wie der Fehler behoben werden kann. Setzen Sie nicht `aria-invalid="true"` auf leere erforderliche Elemente, bis der Benutzer versucht, das Formular abzusenden. Möglicherweise arbeitet der Benutzer noch daran, es auszufüllen.

> [!NOTE]
> Wenn `aria-invalid` in Verbindung mit dem `aria-required` Attribut verwendet wird, sollte `aria-invalid` nicht auf true gesetzt werden, bevor das Formular abgeschickt wird – nur als Reaktion auf eine Validierung.

Derzeit gibt es vier Werte: Neben `true` und `false` haben wir `grammar`, das verwendet werden kann, wenn ein grammatikalischer Fehler erkannt wird, und `spelling` für Rechtschreibfehler. Wenn das Attribut nicht vorhanden ist, sein Wert false ist oder sein Wert ein leerer String ist, gilt der Standardwert von false. Jeder andere Wert wird so behandelt, als wäre `true` gesetzt.

### Native HTML-Validierung

HTML verfügt über eine native Formularvalidierung. Wenn ein Benutzer ein Formular mit einem Steuerfeld mit Fehlern absendet, zeigt das erste Formularsteuerfeld mit einem ungültigen Wert nativ eine Fehlermeldung an.

Wenn ein [`required`](/de/docs/Web/HTML/Attributes/required) Attribut auf einem nicht ausgefüllten Formularsteuerfeld festgelegt ist, wird das Formular nicht übermittelt, und es erscheint eine Fehlermeldung wie "Bitte füllen Sie dieses Feld aus" oder etwas Ähnliches. Die Meldungen für native Validierung variieren je nach Browser und können nicht gestylt werden.

```html
<input type="number" step="2" min="0" max="100" required />
```

Wenn der Benutzer im oben gezeigten Eingabe-Beispiel einen über dem Maximum, unter dem Minimum oder unpassenden Wert für den Schritt eingegeben hätte, würde eine Fehlermeldung erscheinen. Wenn der Benutzer "3" eingegeben hätte, wäre die native Fehlermeldung ähnlich wie "Bitte geben Sie einen gültigen Wert ein."

Wenn Sie Ihre eigenen Validierungsskripte erstellen, stellen Sie sicher, dass Sie `aria-invalid` auf ungültigen Formularsteuerelementen einfügen, zusammen mit Stile (verwenden Sie den `[aria-invalid="true"]` Attributselektor) und Mitteilungen (mit [`aria-errormessage`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-errormessage)), um Benutzer darüber aufzuklären, wo der Fehler liegt und wie er behoben werden kann.

## Werte

- `grammar`
  - : Ein grammatikalischer Fehler wurde erkannt.
- `false` (Standard)
  - : Es gibt keine erkannten Fehler im Wert.
- `spelling`
  - : Ein Rechtschreibfehler wurde erkannt.
- `true`
  - : Der vom Benutzer eingegebene Wert hat die Validierung nicht bestanden.

Jeder Wert, der nicht in dieser Liste enthalten ist, wird als `true` behandelt.

## Beispiel

Der folgende Ausschnitt zeigt eine vereinfachte Version von zwei Formularfeldern mit einer Validierungsfunktion, die dem Blur-Ereignis angefügt ist. Beachten Sie, dass es, da der Standardwert für `aria-invalid` false ist, nicht zwingend erforderlich ist, das Attribut zum Eingabefeld hinzuzufügen.

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

Beachten Sie, dass es nicht notwendig ist, die Felder sofort beim Blur zu validieren; die Anwendung könnte warten, bis das Formular abgesendet wird (das wird jedoch nicht unbedingt empfohlen).

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

Der untenstehende Ausschnitt zeigt die Warnfunktionen, die die Fehlermeldung hinzufügen (oder entfernen):

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

Beachten Sie, dass die Warnung das ARIA-Rollenattribut auf [`alert`](/de/docs/Web/Accessibility/ARIA/Roles/alert_role) gesetzt hat.

## Zugeordnete Rollen

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

Vererbt in Rollen:

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
- [Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) Tutorial
