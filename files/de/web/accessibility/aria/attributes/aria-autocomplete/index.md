---
title: aria-autocomplete
slug: Web/Accessibility/ARIA/Attributes/aria-autocomplete
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Das Attribut `aria-autocomplete` gibt an, ob die Eingabe von Text die Anzeige einer oder mehrerer Vorhersagen des beabsichtigten Wertes des Benutzers für ein [`combobox`](/de/docs/Web/Accessibility/ARIA/Roles/combobox_role), [`searchbox`](/de/docs/Web/Accessibility/ARIA/Roles/searchbox_role) oder [`textbox`](/de/docs/Web/Accessibility/ARIA/Roles/textbox_role) auslösen könnte und wie Vorhersagen angezeigt werden, wenn sie gemacht werden.

## Beschreibung

Autovervollständigung ist ein Benutzeroberflächenmerkmal, bei dem Inline-Vorschläge gemacht werden, während ein Benutzer in ein Eingabefeld tippt. Der vorgeschlagene Text zur Vervollständigung des Wertes des Feldes erscheint dynamisch im Feld nach dem Eingabecursor, und der vorgeschlagene Wert wird zum Wert, wenn der Benutzer eine Aktion ausführt, wie z.B. das Drücken der Tabulatortaste, die den Fokus vom Feld entfernt.

Die Eigenschaft `aria-autocomplete` beschreibt das Modell der Autovervollständigung, das eine Textbox, Suchbox oder Combobox verwenden wird, wenn sie Benutzern dynamisch hilft, Texteingaben zu vervollständigen. Es unterscheidet zwischen zwei Modellen: dem **inline**-Modell (`aria-autocomplete="inline"`), das einen einzigen vorhergesagten Wert präsentiert, und dem **list**-Modell (`aria-autocomplete="list"`), das eine Sammlung möglicher Werte in einem separaten Element präsentiert, das neben oder unter der Texteingabe aufpoppt, ähnlich einem {{HTMLElement('datalist')}}. Ein dritter Wert, `aria-autocomplete="both"`, wird verwendet, wenn die Schnittstelle eine Liste präsentiert, die auch einen vorhergesagten Wert enthält. Der Standardwert ist `none`, was bedeutet, dass die Textbox, Suchbox oder Combobox keinen Autovervollständigungswert bietet.

Die Eigenschaft `aria-autocomplete` beschreibt nur die Art des vorhersagenden Verhaltens für ein Eingabeelement für unterstützende Technologien; sie bietet nicht die Funktionalität. Die tatsächliche Autovervollständigung sollte durch HTML-Attribute oder JavaScript bereitgestellt werden.

Wenn der vorgeschlagene Autovervollständigungswert vorgeschlagene Werte bietet, die nicht von der Eingabe des Benutzers abhängig sind, sollte die Autovervollständigung für alle weggelassen werden. Zum Beispiel kann eine Suchbox-Eingabe, die ungefilterte kürzliche Suchbegriffe anzeigt, einem Marketingteam auf einer E-Commerce-Site nützlich sein, aber wahrscheinlich nicht für den Benutzer eines Screenreaders. Wenn es am besten ist, keinen Wert für `aria-autocomplete` festzulegen oder den Standardwert `none` zu verwenden, benötigen wahrscheinlich auch Ihre Benutzer ohne assistive Technologien diese Erfahrung nicht.

Beim Implementieren der Autovervollständigungsfunktionalität stellen Sie sicher, dass der vorgeschlagene Teil des Wertes als ausgewählter Text dargestellt wird, um es zu ermöglichen, zwischen der Benutzereingabe und dem Vorschlag zu unterscheiden. Stellen Sie sicher, dass Benutzer den Vorschlag leicht löschen oder durch Weitertippen ersetzen können, wenn der vorgeschlagene Wert nicht der gewünschte Wert ist.

Beim Implementieren einer Liste mit Werten sollte der DOM-Fokus auf der Texteingabe bleiben, während die Vorschlagsliste angezeigt wird.

- Verwenden Sie [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-controls) mit dem Wert der ID der vorgeschlagenen Werteliste.
- Verwenden Sie [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup), das der Rolle des Elements entspricht, das die Sammlung von vorgeschlagenen Werten enthält.
- Verwalten Sie den Fokus, falls erforderlich, einschließlich der Verwendung von [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-activedescendant), wenn der Sammlungscontainer dies unterstützt.
- Verwenden Sie den Zustand [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-expanded) auf dem Element mit der Rolle [`combobox`](/de/docs/Web/Accessibility/ARIA/Roles/combobox_role), um zu kommunizieren, dass die Liste angezeigt wird.

Wenn ein Autovervollständigungslistenwert automatisch akzeptiert wird, wenn das Feld den Fokus verliert, muss die Liste in einer Rolle enthalten sein, die `aria-activedescendant` unterstützt. Der Wert von `aria-activedescendant` auf dem Eingabefeld muss dynamisch angepasst werden, um auf das Element mit dem ausgewählten Vorschlag zu verweisen.

## Werte

- `none` (Standard)
  - : Wenn ein Benutzer eine Eingabe vornimmt, wird kein automatischer Vorschlag angezeigt.
- `inline`
  - : `aria-autocomplete="inline"` Der Text, der eine Möglichkeit zur Vervollständigung der angegebenen Eingabe vorschlägt, kann dynamisch nach dem Cursor eingefügt werden.
- `list`
  - : `aria-autocomplete="list"` Wenn ein Benutzer eine Eingabe vornimmt, kann ein Element, das eine Sammlung von Werten enthält, angezeigt werden, die die bereitgestellte Eingabe vervollständigen könnten.
- `both`
  - : `aria-autocomplete="both"` Eine Eingabe, die beide Modelle gleichzeitig bietet. Wenn ein Benutzer eine Eingabe vornimmt, kann ein Element, das eine Sammlung von Werten enthält, angezeigt werden, die die bereitgestellte Eingabe vervollständigen könnten. Wenn angezeigt, wird ein Wert in der Sammlung automatisch ausgewählt, und der Text, der benötigt wird, um den automatisch ausgewählten Wert zu vervollständigen, erscheint nach dem Cursor in der Eingabe.

## Zugehörige Rollen

Verwendet in Rollen:

- Rolle [`combobox`](/de/docs/Web/Accessibility/ARIA/Roles/combobox_role)
- Rolle [`textbox`](/de/docs/Web/Accessibility/ARIA/Roles/textbox_role)
- erbt von Rolle [`searchbox`](/de/docs/Web/Accessibility/ARIA/Roles/searchbox_role)

## Spezifikationen

{{Specifications}}

## Siehe auch

- Rolle [`combobox`](/de/docs/Web/Accessibility/ARIA/Roles/combobox_role)
- Rolle [`textbox`](/de/docs/Web/Accessibility/ARIA/Roles/textbox_role)
- Rolle [`searchbox`](/de/docs/Web/Accessibility/ARIA/Roles/searchbox_role)
- {{HTMLElement('datalist')}}-Element und das [`<input> list`-Attribut](/de/docs/Web/HTML/Element/input#list)
- Attribut [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-controls)
- Attribut [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup)
- Attribut [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-activedescendant)
- Attribut [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-expanded)
- [Bearbeitbare Kombobox mit sowohl Listen- als auch Inline-Autovervollständigung Beispiel](https://www.w3.org/TR/wai-aria-practices-1.2/examples/combobox/combobox-autocomplete-both.html)
- [Event.ariaAutoComplete](/de/docs/Web/API/Element/ariaAutoComplete)
