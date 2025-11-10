---
title: "ARIA: aria-autocomplete Attribut"
short-title: aria-autocomplete
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-autocomplete
l10n:
  sourceCommit: c1564acf160ef4b320fb7b89ab65211b9c50cf1b
---

Das `aria-autocomplete` Attribut gibt an, ob die Eingabe von Text eine Anzeige von einer oder mehreren Vorhersagen für den beabsichtigten Wert des Benutzers für eine [`combobox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role), [`searchbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/searchbox_role) oder [`textbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role) auslösen könnte und wie Vorhersagen präsentiert werden, falls sie getroffen werden.

## Beschreibung

Autovervollständigung ist ein Feature der Benutzeroberfläche, bei dem während der Eingabe eines Benutzers in ein Eingabefeld Vorschläge gemacht werden. Vorgeschlagene Texte zur Vervollständigung des Feldwerts erscheinen dynamisch im Feld nach dem Eingabecursor, und der vorgeschlagene Wert wird der Wert, wenn der Benutzer eine Aktion ausführt, wie z. B. Tabben, die den Fokus vom Feld entfernt.

Die `aria-autocomplete` Eigenschaft beschreibt das Art des Interaktionsmodells der Autovervollständigung, das eine Textbox, Suchbox oder Combobox verwenden wird, um Benutzern dynamisch bei der Vervollständigung von Texteingaben zu helfen. Es unterscheidet zwischen zwei Modellen: dem **inline** Modell (`aria-autocomplete="inline"`), das einen einzelnen vorhergesagten Wert präsentiert, und dem **list** Modell (`aria-autocomplete="list"`), das eine Sammlung möglicher Werte in einem separaten Element darstellt, das neben oder unter dem Texteingabefeld auftaucht, ähnlich wie ein {{HTMLElement('datalist')}}. Ein dritter Wert, `aria-autocomplete="both"`, ist für den Fall gedacht, dass die Benutzeroberfläche eine Liste präsentiert, während sie auch einen vorhergesagten Wert einschließt. Der Standardwert ist `none`, was bedeutet, dass die Textbox, Suchbox oder Combobox keinen Auto-Vervollständigungswert bereitstellen wird.

Die `aria-autocomplete` Eigenschaft beschreibt nur die Art des prädiktiven Verhaltens für ein Eingabeelement für unterstützende Technologien; sie bietet nicht die Funktionalität. Die eigentliche Autovervollständigung sollte mit HTML-Attributen oder JavaScript bereitgestellt werden.

Wenn der vorgeschlagene Autovervollständigungswert vorgeschlagene Werte bietet, die nicht von der Eingabe des Benutzers abhängig sind, ziehen Sie in Betracht, die Autovervollständigung für alle wegzulassen. Zum Beispiel könnte eine Suchbox-Eingabe, die ungefilterte kürzliche Suchbegriffe anzeigt, für ein Marketingteam auf einer E-Commerce-Site hilfreich sein, aber wahrscheinlich nicht für den Benutzer eines Screenreaders. Wenn es am besten ist, keinen Wert für `aria-autocomplete` anzugeben oder den Wert auf den Standardwert `none` zu setzen, benötigen wahrscheinlich auch Ihre Nutzer ohne unterstützende Technologie diese Funktion nicht.

Wenn Sie Autovervollständigungsfunktionen implementieren, stellen Sie sicher, dass der vorgeschlagene Teil des Wertes als ausgewählter Text präsentiert wird, um zwischen der Benutzereingabe und dem Vorschlag unterscheiden zu können. Stellen Sie sicher, dass Benutzer, wenn der vorgeschlagene Wert nicht der gewünschte Wert ist, den Vorschlag einfach löschen oder durch Fortsetzung der Eingabe ersetzen können.

Beim Implementieren einer Liste von Werten sollte der DOM-Fokus auf dem Texteingabefeld bleiben, während die Vorschlagsliste angezeigt wird.

- Fügen Sie [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) mit dem Wert der ID der vorgeschlagenen Werteliste hinzu.
- Fügen Sie [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup) hinzu, das der Rolle des Elements entspricht, das die Sammlung vorgeschlagener Werte enthält.
- Verwalten Sie den Fokus, falls erforderlich, einschließlich der Verwendung von [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant), falls das Sammlungselement dies unterstützt.
- Verwenden Sie den Zustand [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) auf dem Element mit der Rolle [`combobox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role), um zu kommunizieren, dass die Liste angezeigt wird.

Wenn ein Autovervollständigungslistenwert automatisch akzeptiert wird, wenn das Feld den Fokus verliert, muss die Liste in einer Rolle enthalten sein, die `aria-activedescendant` unterstützt, wobei der Wert von `aria-activedescendant` im Eingabefeld dynamisch angepasst wird, um auf das Element mit dem ausgewählten Vorschlag zu verweisen.

## Werte

- `none` (Standard)
  - : Wenn ein Benutzer eine Eingabe macht, wird kein automatischer Vorschlag angezeigt.
- `inline`
  - : `aria-autocomplete="inline"` Text, der eine Möglichkeit zur Vervollständigung der bereitgestellten Eingabe vorschlägt, kann dynamisch nach dem Caret eingefügt werden.
- `list`
  - : `aria-autocomplete="list"` Wenn ein Benutzer eine Eingabe macht, kann ein Element mit einer Sammlung von Werten angezeigt werden, die die bereitgestellte Eingabe vervollständigen könnten.
- `both`
  - : `aria-autocomplete="both"` Eine Eingabe bietet beide Modelle gleichzeitig. Wenn ein Benutzer eine Eingabe macht, kann ein Element mit einer Sammlung von Werten angezeigt werden, die die bereitgestellte Eingabe vervollständigen könnten. Falls angezeigt, wird ein Wert in der Sammlung automatisch ausgewählt, und der Text zur Vervollständigung des automatisch ausgewählten Wertes erscheint nach dem Caret in der Eingabe.

## Zugehörige Rollen

Verwendet in Rollen:

- [`combobox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role) Rolle
- [`textbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role) Rolle
- Erbt von [`searchbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/searchbox_role) Rolle

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`combobox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role) Rolle
- [`textbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role) Rolle
- [`searchbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/searchbox_role) Rolle
- {{HTMLElement('datalist')}} Element und das [`<input> list` Attribut](/de/docs/Web/HTML/Reference/Elements/input#list)
- [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) Attribut
- [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup) Attribut
- [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant) Attribut
- [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) Attribut
- [Editable Combobox With Both List and Inline Autocomplete Example](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-autocomplete-both/)
- [Event.ariaAutoComplete](/de/docs/Web/API/Element/ariaAutoComplete)
