---
title: aria-autocomplete
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-autocomplete
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

Das `aria-autocomplete`-Attribut gibt an, ob die Eingabe von Text die Anzeige von einer oder mehreren Vorhersagen des beabsichtigten Werts des Benutzers für ein [`combobox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role), [`searchbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/searchbox_role) oder [`textbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role) auslösen könnte und spezifiziert, wie Vorhersagen präsentiert werden, falls sie gemacht werden.

## Beschreibung

Autovervollständigung ist ein Benutzeroberflächenmerkmal, bei dem während der Eingabe eines Benutzers Inline-Vorschläge gemacht werden. Der vorgeschlagene Text zur Vervollständigung des Feldwerts erscheint dynamisch nach dem Eingabecursor, und der vorgeschlagene Wert wird zum Wert, wenn der Benutzer eine Aktion ausführt, z. B. Tabulatortaste, die den Fokus vom Feld entfernt.

Die `aria-autocomplete`-Eigenschaft beschreibt das Modell der Autovervollständigungsinteraktion, das eine Textbox, Suchbox oder Kombinationsbox verwendet, um Benutzern bei der dynamischen Vervollständigung der Texteingabe zu helfen. Sie unterscheidet zwischen zwei Modellen: dem **Inline**-Modell (`aria-autocomplete="inline"`), das einen einzigen vorhergesagten Wert präsentiert, und dem **Listen**-Modell (`aria-autocomplete="list"`), das eine Sammlung möglicher Werte in einem separaten Element präsentiert, das neben oder unter dem Texteingabefeld eingeblendet wird, ähnlich einem {{HTMLElement('datalist')}}. Ein dritter Wert, `aria-autocomplete="both"`, wird verwendet, wenn die Schnittstelle eine Liste präsentiert, während sie auch einen vorhergesagten Wert einschließt. Der Standardwert ist `none`, was bedeutet, dass die Textbox, Suchbox oder Kombibox keinen Autovervollständigungswert bereitstellt.

Die `aria-autocomplete`-Eigenschaft beschreibt nur die Art des prädiktiven Verhaltens für ein Eingabeelement für unterstützende Technologien; sie liefert nicht die Funktionalität. Die tatsächliche Autovervollständigung sollte mit HTML-Attributen oder JavaScript bereitgestellt werden.

Wenn der vorgeschlagene Autovervollständigungswert vorgeschlagene Werte bereitstellt, die nicht von der vom Benutzer bereitgestellten Eingabe abhängen, ziehen Sie in Betracht, die Autovervollständigung für alle wegzulassen. Beispielsweise kann ein Suchfeldeingabefeld, das ungefilterte letzte Suchbegriffe anzeigt, für ein Marketingteam auf einer E-Commerce-Website hilfreich sein, aber wahrscheinlich nicht für einen Screenreader-Benutzer. Wenn es am besten ist, keinen Wert für `aria-autocomplete` anzugeben oder den Wert auf den Standard `none` zu setzen, benötigen wahrscheinlich auch Ihre Benutzer ohne unterstützende Technologien diese Erfahrung nicht.

Beim Implementieren der Autocomplete-Funktionalität sollte der vorgeschlagene Teil des Werts als ausgewählter Text präsentiert werden, um zwischen der Eingabe des Benutzers und dem Vorschlag zu unterscheiden. Stellen Sie sicher, dass, wenn der vorgeschlagene Wert nicht der gewünschte Wert ist, Benutzer den Vorschlag leicht löschen oder durch Weiteres Tippen ersetzen können.

Beim Implementieren einer Liste von Werten sollte der DOM-Fokus auf dem Texteingabefeld bleiben, während die Vorschlagsliste angezeigt wird.

- Fügen Sie [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) mit dem Wert der id der vorgeschlagenen Werteliste hinzu.
- Fügen Sie [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup) hinzu, passend zur Rolle des Elements, das die Sammlung vorgeschlagener Werte enthält.
- Verwalten Sie den Fokus, falls erforderlich, einschließlich der Verwendung von [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant), falls der Sammlung-Container dies unterstützt.
- Verwenden Sie den [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)-Zustand auf dem Element mit der Rolle [`combobox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role), um zu kommunizieren, dass die Liste angezeigt wird.

Wenn ein Autocomplete-Listenwert automatisch akzeptiert wird, wenn das Feld den Fokus verliert, muss die Liste in einer Rolle enthalten sein, die `aria-activedescendant` unterstützt, wobei der Wert von `aria-activedescendant` im Eingabefeld dynamisch angepasst wird, um auf das Element zu verweisen, das den ausgewählten Vorschlag enthält.

## Werte

- `none` (Standard)
  - : Wenn ein Benutzer eine Eingabe macht, wird keine automatische Vorschlagsanzeige angezeigt.
- `inline`
  - : `aria-autocomplete="inline"` Text, der eine Möglichkeit zur Vervollständigung der bereitgestellten Eingabe vorschlägt, kann dynamisch nach dem Cursor eingefügt werden.
- `list`
  - : `aria-autocomplete="list"` Wenn ein Benutzer eine Eingabe macht, kann ein Element, das eine Sammlung von Werten enthält, die die bereitgestellte Eingabe vervollständigen könnten, angezeigt werden.
- `both`
  - : `aria-autocomplete="both"` eine Eingabe, die beide Modelle gleichzeitig anbietet. Wenn ein Benutzer eine Eingabe macht, kann ein Element, das eine Sammlung von Werten enthält, die die bereitgestellte Eingabe vervollständigen könnten, angezeigt werden. Wenn angezeigt, wird ein Wert in der Sammlung automatisch ausgewählt, und der Text, der benötigt wird, um den automatisch ausgewählten Wert zu vervollständigen, erscheint nach dem Cursor in der Eingabe.

## Zugehörige Rollen

Verwendet in Rollen:

- [`combobox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role) Rolle
- [`textbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role) Rolle
- erbt von der [`searchbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/searchbox_role) Rolle

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`combobox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role) Rolle
- [`textbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role) Rolle
- [`searchbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/searchbox_role) Rolle
- {{HTMLElement('datalist')}}-Element und das [`<input> list`-Attribut](/de/docs/Web/HTML/Reference/Elements/input#list)
- [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) Attribut
- [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup) Attribut
- [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant) Attribut
- [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) Attribut
- [Beispiel für eine bearbeitbare Kombobox mit sowohl Listen- als auch Inline-Autovervollständigung](https://www.w3.org/TR/wai-aria-practices-1.2/examples/combobox/combobox-autocomplete-both.html)
- [Event.ariaAutoComplete](/de/docs/Web/API/Element/ariaAutoComplete)
