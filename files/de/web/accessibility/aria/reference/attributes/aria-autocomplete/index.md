---
title: "ARIA: aria-autocomplete-Attribut"
short-title: aria-autocomplete
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-autocomplete
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Das `aria-autocomplete`-Attribut gibt an, ob die Eingabe von Text bei einer [`combobox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role), [`searchbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/searchbox_role) oder [`textbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role) die Anzeige einer oder mehrerer Vorhersagen des gewünschten Werts des Benutzers auslösen könnte und wie die Vorhersagen präsentiert werden, falls sie gemacht werden.

## Beschreibung

Autovervollständigung ist eine Benutzeroberflächenfunktion, bei der während der Eingabe in ein Feld Inline-Vorschläge gemacht werden. Vorgeschlagener Text zur Vervollständigung des Feldwerts erscheint dynamisch im Feld nach dem Eingabecursor, und der vorgeschlagene Wert wird übernommen, wenn der Benutzer eine Aktion durchführt, wie beispielsweise das Drücken der Tabulatortaste, die den Fokus vom Feld entfernt.

Die `aria-autocomplete`-Eigenschaft beschreibt das Modell der Autovervollständigungsinteraktion, das eine Textbox, eine Suchbox oder eine Kombobox verwenden wird, um Benutzern dynamisch bei der Texteingabe zu helfen. Sie unterscheidet zwischen zwei Modellen: dem **Inline**-Modell (`aria-autocomplete="inline"`), das einen einzigen vorhergesagten Wert präsentiert, und dem **Listen**-Modell (`aria-autocomplete="list"`), das eine Sammlung möglicher Werte in einem separaten Element präsentiert, das neben oder unter dem Texteingabefeld erscheint, ähnlich einem {{HTMLElement('datalist')}}. Ein dritter Wert, `aria-autocomplete="both"` ist für Fälle gedacht, in denen die Oberfläche eine Liste präsentiert und gleichzeitig einen vorhergesagten Wert enthält. Der Standardwert ist `none`, was bedeutet, dass die Textbox, Suchbox oder Kombobox keinen autovervollständigten Wert bereitstellt.

Das `aria-autocomplete`-Attribut beschreibt nur den Typ des prädiktiven Verhaltens für ein Eingabeelement für unterstützende Technologien; es stellt nicht die Funktionalität bereit. Die tatsächliche Autovervollständigung sollte mit HTML-Attributen oder JavaScript bereitgestellt werden.

Wenn der vorgeschlagene Autovervollständigungswert vorgeschlagene Werte bietet, die nicht von der Eingabe des Benutzers abhängig sind, sollten Sie erwägen, die Autovervollständigung für alle wegzulassen. Ein Beispiel ist eine Suchbox-Eingabe, die ungefilterte kürzliche Suchbegriffe anzeigt, die für ein Marketingteam auf einer E-Commerce-Seite nützlich sein könnte, aber wahrscheinlich nicht für den Benutzer eines Bildschirmlesers. Wenn es am besten ist, keinen Wert für `aria-autocomplete` anzugeben oder den Wert auf den Standardwert `none` zu setzen, benötigen wahrscheinlich auch Ihre nicht-unterstützenden Technologiebenutzer keine dieser Funktionen.

Beim Implementieren der Autovervollständigungsfunktionalität sollten Sie sicherstellen, dass der vorgeschlagene Teil des Werts als ausgewählter Text präsentiert wird, um zwischen der Benutzereingabe und dem Vorschlag unterscheiden zu können. Stellen Sie sicher, dass, wenn der vorgeschlagene Wert nicht der gewünschte Wert ist, Benutzer den Vorschlag leicht löschen oder diesen durch den weiteren Tippen ersetzen können.

Wenn eine Liste von Werten implementiert wird, sollte der DOM-Fokus auf der Texteingabe verbleiben, während die Vorschlagsliste angezeigt wird.

- Verwenden Sie [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) mit dem Wert der ID der vorgeschlagenen Werteliste.
- Nutzen Sie [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup), das zur Rolle des Elements passt, das die Sammlung vorgeschlagener Werte enthält.
- Verwenden Sie, falls erforderlich, Fokussierungselemente, einschließlich [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant), wenn der Sammlung-Container dies unterstützt.
- Verwenden Sie den [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)-Zustand am Element mit der Rolle [`combobox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role), um zu kommunizieren, dass die Liste angezeigt wird.

Wenn ein Wert aus der Autovervollständigungsliste automatisch angenommen wird, sobald das Feld den Fokus verliert, muss die Liste in einer Rolle enthalten sein, die `aria-activedescendant` unterstützt, wobei der Wert von `aria-activedescendant` im Eingabefeld dynamisch angepasst wird, um auf das Element mit dem ausgewählten Vorschlag zu verweisen.

## Werte

- `none` (Standard)
  - : Wenn ein Benutzer eine Eingabe macht, wird keine automatische Vorschlagsanzeige angezeigt.
- `inline`
  - : `aria-autocomplete="inline"` Text, der einen Weg zur Vervollständigung der bereitgestellten Eingabe vorschlägt, kann dynamisch nach dem Cursor eingefügt werden.
- `list`
  - : `aria-autocomplete="list"` Wenn ein Benutzer eine Eingabe macht, kann ein Element, das eine Sammlung von Werten enthält, die die bereitgestellte Eingabe vervollständigen könnten, angezeigt werden.
- `both`
  - : `aria-autocomplete="both"` Eine Eingabe, die beide Modelle gleichzeitig anbietet. Wenn ein Benutzer eine Eingabe macht, kann ein Element, das eine Sammlung von Werten enthält, die die bereitgestellte Eingabe vervollständigen könnten, angezeigt werden. Wenn angezeigt, wird ein Wert in der Sammlung automatisch ausgewählt, und der Text, der benötigt wird, um den automatisch ausgewählten Wert zu vervollständigen, erscheint nach dem Cursor in der Eingabe.

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
- {{HTMLElement('datalist')}} Element und das [`<input> list` Attribut](/de/docs/Web/HTML/Reference/Elements/input#list)
- [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) Attribut
- [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup) Attribut
- [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant) Attribut
- [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) Attribut
- [Editierbare Kombobox mit sowohl Liste als auch Inline Autovervollständigungs-Beispiel](https://www.w3.org/TR/wai-aria-practices-1.2/examples/combobox/combobox-autocomplete-both.html)
- [Event.ariaAutoComplete](/de/docs/Web/API/Element/ariaAutoComplete)
