---
title: aria-autocomplete
slug: Web/Accessibility/ARIA/Attributes/aria-autocomplete
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Das `aria-autocomplete`-Attribut gibt an, ob das Eingeben von Text die Anzeige einer oder mehrerer Vorhersagen über den beabsichtigten Wert eines Benutzers für ein [`combobox`](/de/docs/Web/Accessibility/ARIA/Roles/combobox_role), [`searchbox`](/de/docs/Web/Accessibility/ARIA/Roles/searchbox_role) oder [`textbox`](/de/docs/Web/Accessibility/ARIA/Roles/textbox_role) auslösen könnte und spezifiziert, wie Vorhersagen präsentiert werden, falls sie gemacht werden.

## Beschreibung

Autovervollständigung ist eine Benutzeroberflächenfunktion, bei der Vorschläge angezeigt werden, während ein Benutzer in ein Eingabefeld tippt. Vorgeschlagener Text zur Vervollständigung des Werts des Feldes erscheint dynamisch im Feld nach dem Eingabecursor, und der vorgeschlagene Wert wird zum tatsächlichen Wert, wenn der Benutzer eine Aktion ausführt, wie z.B. Tab drücken, die den Fokus aus dem Feld herausnimmt.

Die `aria-autocomplete`-Eigenschaft beschreibt das Interaktionsmodell der Autovervollständigung, das ein Textfeld, Suchfeld oder Kombinationsfeld verwendet, um Benutzern beim dynamischen Vervollständigen ihrer Texteingabe zu helfen. Es unterscheidet zwischen zwei Modellen: dem **inline** Modell (`aria-autocomplete="inline"`), das einen einzelnen vorhergesagten Wert präsentiert, und dem **list** Modell (`aria-autocomplete="list"`), das eine Sammlung möglicher Werte in einem separaten Element darstellt, das neben oder unter dem Texteingabefeld erscheint, ähnlich einem {{HTMLElement('datalist')}}. Ein dritter Wert, `aria-autocomplete="both"`, wird verwendet, wenn die Schnittstelle eine Liste präsentiert, während gleichzeitig ein vorhergesagter Wert enthalten ist. Der Standardwert ist `none`, was bedeutet, dass das Textfeld, Suchfeld oder Kombinationsfeld keinen Autovervollständigungswert bereitstellt.

Die `aria-autocomplete`-Eigenschaft beschreibt nur die Art des prädiktiven Verhaltens für ein Eingabeelement für unterstützende Technologien; sie bietet nicht die Funktionalität. Die tatsächliche Autovervollständigung sollte mithilfe von HTML-Attributen oder JavaScript bereitgestellt werden.

Wenn der vorgeschlagene Autovervollständigungswert vorgeschlagene Werte liefert, die nicht von der vom Benutzer bereitgestellten Eingabe abhängen, sollten Sie erwägen, die Autovervollständigung für alle zu unterlassen. Beispielsweise kann die Anzeige ungefilterter kürzlich durchsuchter Begriffe in einem Suchfeld für ein Marketing-Team auf einer E-Commerce-Website hilfreich sein, ist jedoch wahrscheinlich nicht hilfreich für einen Screenreader-Benutzer. Wenn es am besten ist, keinen Wert für `aria-autocomplete` zu spezifizieren oder den Wert auf `none` zu setzen, benötigen wahrscheinlich auch Ihre Nicht-Unterstützungs-Technologie-Benutzer diese Erfahrung nicht.

Beim Implementieren der Autovervollständigungsfunktionalität stellen Sie sicher, dass der vorgeschlagene Teil des Werts als ausgewählter Text präsentiert wird, um zwischen Benutzereingabe und Vorschlag unterscheiden zu können. Stellen Sie sicher, dass, wenn der vorgeschlagene Wert nicht der gewünschte ist, Benutzer den Vorschlag leicht löschen oder durch weiteres Tippen ersetzen können.

Bei der Implementierung einer Werteliste sollte der DOM-Fokus auf der Texteingabe bleiben, während die Vorschlagsliste angezeigt wird.

- Verwenden Sie [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-controls) mit dem Wert der ID der vorgeschlagenen Werteliste.
- Verwenden Sie [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup) entsprechend der Rolle des Elements, das die Sammlung der vorgeschlagenen Werte enthält.
- Verwalten Sie den Fokus, wenn erforderlich, einschließlich der Verwendung von [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-activedescendant), falls das Sammlungsbehältnis unterstützt wird.
- Verwenden Sie den Zustand [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-expanded) bei dem Element mit der Rolle [`combobox`](/de/docs/Web/Accessibility/ARIA/Roles/combobox_role), um anzuzeigen, dass die Liste angezeigt wird.

Wenn ein Autovervollständigungslistenwert automatisch angenommen wird, wenn das Feld den Fokus verliert, muss die Liste in einer Rolle enthalten sein, die `aria-activedescendant` unterstützt, wobei der Wert von `aria-activedescendant` im Eingabefeld dynamisch so angepasst wird, dass er auf das Element verweist, das den ausgewählten Vorschlag enthält.

## Werte

- `none` (Standard)
  - : Wenn ein Benutzer eine Eingabe macht, wird kein automatischer Vorschlag angezeigt.
- `inline`
  - : `aria-autocomplete="inline"` Text, der eine Möglichkeit zur Vervollständigung der bereitgestellten Eingabe vorschlägt, kann dynamisch nach dem Cursor eingefügt werden.
- `list`
  - : `aria-autocomplete="list"` Wenn ein Benutzer eine Eingabe macht, kann ein Element, das eine Sammlung von Werten enthält, die die bereitgestellte Eingabe vervollständigen könnten, angezeigt werden.
- `both`
  - : `aria-autocomplete="both"` eine Eingabe, die beide Modelle gleichzeitig bietet. Wenn ein Benutzer eine Eingabe macht, kann ein Element, das eine Sammlung von Werten enthält, die die bereitgestellte Eingabe vervollständigen könnten, angezeigt werden. Wenn angezeigt, wird ein Wert in der Sammlung automatisch ausgewählt, und der Text, der zum Vervollständigen des automatisch ausgewählten Werts erforderlich ist, erscheint nach dem Cursor in der Eingabe.

## Zugehörige Rollen

Wird in Rollen verwendet:

- Rolle [`combobox`](/de/docs/Web/Accessibility/ARIA/Roles/combobox_role)
- Rolle [`textbox`](/de/docs/Web/Accessibility/ARIA/Roles/textbox_role)
- erbt von Rolle [`searchbox`](/de/docs/Web/Accessibility/ARIA/Roles/searchbox_role)

## Spezifikationen

{{Specifications}}

## Siehe auch

- Rolle [`combobox`](/de/docs/Web/Accessibility/ARIA/Roles/combobox_role)
- Rolle [`textbox`](/de/docs/Web/Accessibility/ARIA/Roles/textbox_role)
- Rolle [`searchbox`](/de/docs/Web/Accessibility/ARIA/Roles/searchbox_role)
- {{HTMLElement('datalist')}}-Element und das [`<input> list` Attribut](/de/docs/Web/HTML/Element/input#list)
- [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-controls) Attribut
- [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup) Attribut
- [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-activedescendant) Attribut
- [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-expanded) Attribut
- [Editable Combobox With Both List and Inline Autocomplete Example](https://www.w3.org/TR/wai-aria-practices-1.2/examples/combobox/combobox-autocomplete-both.html)
- [Event.ariaAutoComplete](/de/docs/Web/API/Element/ariaAutoComplete)
