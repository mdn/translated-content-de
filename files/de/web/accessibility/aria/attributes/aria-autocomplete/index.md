---
title: aria-autocomplete
slug: Web/Accessibility/ARIA/Attributes/aria-autocomplete
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Das `aria-autocomplete`-Attribut gibt an, ob das Eingeben von Text die Anzeige einer oder mehrerer Vorhersagen des beabsichtigten Wertes des Benutzers für eine [`combobox`](/de/docs/Web/Accessibility/ARIA/Roles/combobox_role), [`searchbox`](/de/docs/Web/Accessibility/ARIA/Roles/searchbox_role) oder [`textbox`](/de/docs/Web/Accessibility/ARIA/Roles/textbox_role) auslösen könnte, und spezifiziert, wie Vorhersagen präsentiert werden, falls sie gemacht werden.

## Beschreibung

Autovervollständigung ist eine Benutzeroberflächenfunktion, bei der Inline-Vorschläge gemacht werden, während ein Benutzer Text in ein Eingabefeld eingibt. Der vorgeschlagene Text zur Vervollständigung des Feldwertes erscheint dynamisch im Feld hinter dem Eingabecursor, und der vorgeschlagene Wert wird der Wert, wenn der Benutzer eine Aktion ausführt, wie zum Beispiel das Tabben, wodurch der Fokus das Feld verlässt.

Die `aria-autocomplete`-Eigenschaft beschreibt das Interaktionsmodell der Autovervollständigung, das eine Textbox, Suchbox oder Combobox nutzt, um Benutzern dynamisch beim Vervollständigen von Texteingaben zu helfen. Es unterscheidet zwischen zwei Modellen: dem **inline**-Modell (`aria-autocomplete="inline"`), das einen einzelnen vorhergesagten Wert präsentiert, und dem **list**-Modell (`aria-autocomplete="list"`), das eine Sammlung möglicher Werte in einem separaten Element präsentiert, das neben oder unter der Texteingabe angezeigt wird, ähnlich einem {{HTMLElement('datalist')}}. Ein dritter Wert, `aria-autocomplete="both"`, ist vorgesehen, wenn die Schnittstelle eine Liste präsentiert, während sie auch einen vorhergesagten Wert einschließt. Voreingestellt ist `none`, was bedeutet, dass die Textbox, Suchbox oder Combobox keinen Autovervollständigungswert bietet.

Die `aria-autocomplete`-Eigenschaft beschreibt nur die Art des Voraussageverhaltens für ein Eingabeelement für unterstützende Technologien; sie bietet nicht die Funktionalität. Die tatsächliche Autovervollständigung sollte mit HTML-Attributen oder JavaScript bereitgestellt werden.

Wenn der vorgeschlagene Autovervollständigungswert vorgeschlagene Werte bereitstellt, die nicht von der Eingabe des Benutzers abhängen, sollten Sie in Erwägung ziehen, die Autovervollständigung für alle wegzulassen. Zum Beispiel kann eine Suchbox, die ungefilterte kürzliche Suchbegriffe anzeigt, für ein Marketingteam auf einer E-Commerce-Seite hilfreich sein, aber wahrscheinlich nicht für den Benutzer eines Screenreaders. Wenn es am besten ist, keinen Wert für `aria-autocomplete` anzugeben oder den Wert auf den Standardwert `none` zu setzen, benötigen wahrscheinlich auch Ihre Benutzer von Nicht-Unterstützungstechnologien die Erfahrung nicht.

Bei der Implementierung der Autovervollständigungsfunktionalität stellen Sie sicher, dass der vorgeschlagene Teil des Wertes als ausgewählter Text präsentiert wird, um zwischen der Benutzereingabe und dem Vorschlag zu unterscheiden. Stellen Sie sicher, dass, wenn der vorgeschlagene Wert nicht der gewünschte ist, Benutzer den Vorschlag leicht löschen oder durch weiteres Tippen ersetzen können.

Bei der Implementierung einer Liste von Werten sollte der DOM-Fokus auf der Texteingabe bleiben, während die Vorschlagsliste angezeigt wird.

- Fügen Sie [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-controls) mit dem Wert der ID der vorgeschlagenen Werteliste ein.
- Fügen Sie [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup) passend zur Rolle des Elements, das die Sammlung der vorgeschlagenen Werte enthält, ein.
- Verwalten Sie den Fokus, falls erforderlich, einschließlich der Verwendung von [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-activedescendant), falls der Sammlung-Container dies unterstützt.
- Verwenden Sie den [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-expanded)-Zustand auf dem Element mit der Rolle [`combobox`](/de/docs/Web/Accessibility/ARIA/Roles/combobox_role), um zu kommunizieren, dass die Liste angezeigt wird.

Wenn ein Wert aus einer Autovervollständigungsliste automatisch akzeptiert wird, wenn das Feld den Fokus verliert, muss die Liste in einer Rolle enthalten sein, die `aria-activedescendant` unterstützt, wobei der Wert von `aria-activedescendant` auf dem Eingabefeld dynamisch so angepasst wird, dass er auf das Element verweist, das den ausgewählten Vorschlag enthält.

## Werte

- `none` (Voreinstellung)
  - : Wenn ein Benutzer Eingaben macht, wird kein automatischer Vorschlag angezeigt.
- `inline`
  - : `aria-autocomplete="inline"` Text, der eine Möglichkeit zur Vervollständigung der bereitgestellten Eingabe vorschlägt, kann dynamisch nach dem Caret eingefügt werden.
- `list`
  - : `aria-autocomplete="list"` Wenn ein Benutzer Eingaben macht, kann ein Element angezeigt werden, das eine Sammlung von Werten enthält, die die bereitgestellte Eingabe vervollständigen könnten.
- `both`
  - : `aria-autocomplete="both"` Ein Eingabefeld, das beide Modelle gleichzeitig anbietet. Wenn ein Benutzer Eingaben macht, kann ein Element angezeigt werden, das eine Sammlung von Werten enthält, die die bereitgestellte Eingabe vervollständigen könnten. Wenn angezeigt, wird ein Wert in der Sammlung automatisch ausgewählt, und der Text, der erforderlich ist, um den automatisch ausgewählten Wert zu vervollständigen, erscheint nach dem Caret in der Eingabe.

## Zugehörige Rollen

Verwendet in Rollen:

- Rolle [`combobox`](/de/docs/Web/Accessibility/ARIA/Roles/combobox_role)
- Rolle [`textbox`](/de/docs/Web/Accessibility/ARIA/Roles/textbox_role)
- Erbt von der Rolle [`searchbox`](/de/docs/Web/Accessibility/ARIA/Roles/searchbox_role)

## Spezifikationen

{{Specifications}}

## Siehe auch

- Rolle [`combobox`](/de/docs/Web/Accessibility/ARIA/Roles/combobox_role)
- Rolle [`textbox`](/de/docs/Web/Accessibility/ARIA/Roles/textbox_role)
- Rolle [`searchbox`](/de/docs/Web/Accessibility/ARIA/Roles/searchbox_role)
- {{HTMLElement('datalist')}}-Element und das [`<input> list`-Attribut](/de/docs/Web/HTML/Element/input#list)
- [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-controls) Attribut
- [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup) Attribut
- [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-activedescendant) Attribut
- [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-expanded) Attribut
- [Beispiel für eine bearbeitbare Combobox mit sowohl Listen- als auch Inline-Autovervollständigung](https://www.w3.org/TR/wai-aria-practices-1.2/examples/combobox/combobox-autocomplete-both.html)
- [Event.ariaAutoComplete](/de/docs/Web/API/Element/ariaAutoComplete)
