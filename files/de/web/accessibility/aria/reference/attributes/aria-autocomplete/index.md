---
title: aria-autocomplete
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-autocomplete
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Das `aria-autocomplete`-Attribut gibt an, ob die Eingabe von Text die Anzeige einer oder mehrerer Vorhersagen des vom Benutzer beabsichtigten Wertes für eine [`combobox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role), [`searchbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/searchbox_role) oder [`textbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role) auslösen könnte und spezifiziert, wie Vorhersagen präsentiert werden, wenn sie angezeigt werden.

## Beschreibung

Die Autovervollständigung ist ein Benutzeroberflächenmerkmal, bei dem während der Eingabe in ein Eingabefeld Inline-Vorschläge gemacht werden. Vorgeschlagener Text zur Vervollständigung des Feldwerts erscheint dynamisch im Feld nach dem Eingabecursor, und der vorgeschlagene Wert wird zum Wert, wenn der Benutzer eine Aktion durchführt, wie z. B. das Wechseln des Fokus durch die Tabulator-Taste.

Die `aria-autocomplete`-Eigenschaft beschreibt das Modell der Autovervollständigungsinteraktion, das eine `textbox`, `searchbox` oder `combobox` verwendet, um Benutzern bei der dynamischen Vervollständigung von Texteingaben zu helfen. Es unterscheidet zwischen zwei Modellen: dem **inline**-Modell (`aria-autocomplete="inline"`), das einen einzelnen vorhergesagten Wert präsentiert, und dem **list**-Modell (`aria-autocomplete="list"`), das eine Sammlung möglicher Werte in einem separaten Element zeigt, das neben oder unter der Texteingabe erscheint, ähnlich wie ein {{HTMLElement('datalist')}}. Ein dritter Wert, `aria-autocomplete="both"`, ist für den Fall, dass die Benutzeroberfläche eine Liste präsentiert und gleichzeitig einen vorhergesagten Wert enthält. Der Standardwert ist `none`, was bedeutet, dass die `textbox`, `searchbox` oder `combobox` keinen Autovervollständigungswert bereitstellt.

Die `aria-autocomplete`-Eigenschaft beschreibt nur die Art des prädiktiven Verhaltens für ein Eingabeelement für unterstützende Technologien; sie stellt nicht die Funktionalität bereit. Die tatsächliche Autovervollständigung sollte mit HTML-Attributen oder JavaScript bereitgestellt werden.

Wenn der vorgeschlagene Autovervollständigungswert vorgeschlagene Werte bereitstellt, die nicht von der Benutzereingabe abhängen, sollten Sie in Betracht ziehen, Autovervollständigung für alle wegzulassen. Zum Beispiel könnte eine `searchbox`-Eingabe, die ungefilterte kürzliche Suchbegriffe anzeigt, für ein Marketing-Team auf einer E-Commerce-Site nützlich sein, aber wahrscheinlich nicht für den Benutzer einer Bildschirmlesesoftware. Wenn es am besten ist, keinen Wert für `aria-autocomplete` anzugeben oder den Wert auf den Standardwert `none` zu setzen, benötigen wahrscheinlich auch Ihre Nicht-Benutzer unterstützender Technologie diese Erfahrung nicht.

Bei der Implementierung der Autovervollständigungsfunktionalität stellen Sie sicher, dass der vorgeschlagene Teil des Werts als ausgewählter Text präsentiert wird, um zwischen der Benutzereingabe und dem Vorschlag unterscheiden zu können. Stellen Sie sicher, dass Benutzer, wenn der vorgeschlagene Wert nicht der gewünschte ist, den Vorschlag leicht löschen oder ersetzen können, indem sie weiter tippen.

Beim Implementieren einer Liste von Werten sollte der DOM-Fokus auf der Texteingabe bleiben, während die Vorschlagsliste angezeigt wird.

- Inkludieren Sie [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) mit dem Wert der ID der vorgeschlagenen Werteliste.
- Inkludieren Sie [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup) entsprechend der Rolle des Elements, das die Sammlung vorgeschlagener Werte enthält.
- Verwalten Sie den Fokus, falls erforderlich, einschließlich der Verwendung von [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant), wenn der Sammlung-Container das unterstützt.
- Verwenden Sie den [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)-Status auf dem Element mit der Rolle [`combobox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role), um zu kommunizieren, dass die Liste angezeigt wird.

Wenn ein Wert aus der Autovervollständigungsliste automatisch akzeptiert wird, wenn das Feld den Fokus verliert, muss die Liste in einer Rolle enthalten sein, die `aria-activedescendant` unterstützt, wobei der Wert von `aria-activedescendant` auf dem Eingabefeld dynamisch angepasst wird, um auf das Element zu verweisen, das den ausgewählten Vorschlag enthält.

## Werte

- `none` (Standard)
  - : Wenn ein Benutzer eine Eingabe bereitstellt, wird kein automatischer Vorschlag angezeigt.
- `inline`
  - : `aria-autocomplete="inline"` Text, der eine Möglichkeit vorschlägt, die bereitgestellte Eingabe zu vervollständigen, kann dynamisch nach dem Cursor eingefügt werden.
- `list`
  - : `aria-autocomplete="list"` Wenn ein Benutzer eine Eingabe macht, könnte ein Element angezeigt werden, das eine Sammlung von Werten enthält, die die bereitgestellte Eingabe vervollständigen könnten.
- `both`
  - : `aria-autocomplete="both"` Eine Eingabe, die beide Modelle gleichzeitig anbietet. Wenn ein Benutzer eine Eingabe macht, könnte ein Element angezeigt werden, das eine Sammlung von Werten enthält, die die bereitgestellte Eingabe vervollständigen könnten. Wenn angezeigt, wird ein Wert in der Sammlung automatisch ausgewählt, und der Text, der benötigt wird, um den automatisch ausgewählten Wert zu vervollständigen, erscheint nach dem Cursor in der Eingabe.

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
- {{HTMLElement('datalist')}}-Element und das [`<input> list` Attribut](/de/docs/Web/HTML/Element/input#list)
- [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) Attribut
- [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup) Attribut
- [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant) Attribut
- [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) Attribut
- [Beispiel für eine bearbeitbare Combobox mit sowohl Liste als auch Inline-Autovervollständigung](https://www.w3.org/TR/wai-aria-practices-1.2/examples/combobox/combobox-autocomplete-both.html)
- [Event.ariaAutoComplete](/de/docs/Web/API/Element/ariaAutoComplete)
