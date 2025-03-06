---
title: Zugänglicher Name
slug: Glossary/Accessible_name
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{GlossarySidebar}}

Ein **zugänglicher Name** ist der Name eines Benutzeroberflächenelements; es ist der Text, der einem HTML-Element zugeordnet ist und Benutzern von unterstützenden Technologien ein Etikett für das Element bietet.

Zugängliche Namen vermitteln den Zweck oder die Absicht des Elements. Dies hilft den Benutzern zu verstehen, wofür das Element gedacht ist und wie sie damit interagieren können. Im Allgemeinen sollten zugängliche Namen für Elemente auf einer Seite eindeutig sein. Dies hilft Benutzern, ein Element von anderen zu unterscheiden und das Element zu identifizieren, mit dem sie interagieren möchten.

Je nach Element und HTML-Markup kann der Wert des zugänglichen Namens aus sichtbarem (z. B. dem Text innerhalb von {{HTMLElement("figcaption")}}) oder unsichtbarem (z. B. dem auf ein Element gesetzten `aria-label`-Attribut) Inhalt oder einer Kombination aus beidem abgeleitet werden. Wie der zugängliche Name eines Elements ermittelt wird, basiert auf der [Berechnung des zugänglichen Namens](https://www.w3.org/WAI/ARIA/apg/practices/names-and-descriptions/#name_calculation), die für verschiedene Elemente unterschiedlich ist.

Es ist am besten, sichtbaren Text als zugänglichen Namen zu verwenden. Viele Elemente, einschließlich {{HTMLElement("a")}}, {{HTMLElement("td")}} und {{HTMLElement("button")}}, können ihren zugänglichen Namen aus ihrem Inhalt beziehen. Zum Beispiel hat der Hyperlink `<a href="foo.html">Bar</a>` den zugänglichen Namen "Bar".

Andere Elemente erhalten ihren zugänglichen Namen aus dem Inhalt der zugehörigen Elemente. Zum Beispiel, wenn ein {{HTMLElement("fieldset")}}- oder {{HTMLElement("table")}}-Element ein Nachfahrelement {{HTMLElement("legend")}} oder {{HTMLElement("caption")}} enthält, erfolgt die Zuordnung des verschachtelten Elements, das einen zugänglichen Namen für das übergeordnete Element bietet, automatisch. Bei Formularelementen wie {{HTMLElement("textarea")}} und {{HTMLElement("input")}} stammt der zugängliche Name vom zugehörigen {{HTMLElement("label")}}-Element. Die Zuordnung muss explizit definiert werden, indem das `for`-Attribut im `<label>`-Element auf die `id` des Formularelements festgelegt wird. Alternativ wird eine implizite Zuordnung erstellt, wenn das Steuerungselement direkt im `<label>`-Element verschachtelt ist.

Für einige Elemente stammt der zugängliche Name aus den Attributen des Elements; zum Beispiel dem `alt`-Attribut im Fall von {{HTMLElement("img")}}. Bei `<img src="grape.jpg" alt="banana"/>` ist der zugängliche Name des Bildes "banana".

Um eine Zuordnung zwischen sichtbarem Inhalt und einem Element oder mehreren Textknoten und einem Element zu erstellen, kann das [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)-Attribut verwendet werden. Wenn kein sichtbarer Text vorhanden ist, um ihn einem UI-Element, das einen zugänglichen Namen benötigt, zuzuordnen, kann das [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)-Attribut verwendet werden. Namen sollten nicht zu Elementen hinzugefügt werden, die Inline-Text auszeichnen, wie {{HTMLElement("code")}}, {{HTMLElement("del")}} und {{HTMLElement("mark")}}.

Viele Elemente, wie Abschnitte von Textinhalt, benötigen keinen zugänglichen Namen. Alle Steuerelemente sollten einen zugänglichen Namen haben. Auch alle Bilder, die Informationen vermitteln und nicht rein gestalterisch sind.

Unterstützende Technologien bieten Benutzern die Eigenschaft des Zugänglichkeitsnamens, die den zugänglichen Namen zusammen mit der Rolle des Elements umfasst. Während viele Elemente keinen zugänglichen Namen benötigen, ist es notwendig, einen zugänglichen Namen bereitzustellen, um den Inhalt von Elementen mit festgelegten [Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles) zu überschreiben oder zu ergänzen. Beispielsweise ist ein [`tabpanel`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role) ein Inhaltsabschnitt, der nach der Aktivierung des zugehörigen Elements mit einer [`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role)-Rolle angezeigt wird. Diese Rolle kann auf ein Element ohne benötigten Namen, wie das {{HTMLElement("div")}}-Element, gesetzt werden. Die `tab` ist die Steuerung und muss einen zugänglichen Namen haben. Das `tabpanel` ist das untergeordnete (Inhaltsabschnitt) des `tab`. Das Hinzufügen von `aria-labelledby` zum `tabpanel` ist eine bewährte Methode.

## Siehe auch

- [ARIA-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles)
- [ARIA-Attribut](/de/docs/Web/Accessibility/ARIA/Reference/Attributes)
- [Accessible Name and Description Computation 1.2 (accname)](https://w3c.github.io/accname/#mapping_additional_nd_description)
- [Barrierefreiheit](/de/docs/Web/Accessibility)
- [Barrierefreiheit lernen](/de/docs/Learn_web_development/Core/Accessibility)
- [Barrierefreiheit im Web](https://en.wikipedia.org/wiki/Web_accessibility) auf Wikipedia
- [Web Accessibility In Mind](https://webaim.org/)
- [ARIA](/de/docs/Web/Accessibility/ARIA)
- [Die W3C Web Accessibility Initiative (WAI)](https://www.w3.org/WAI/)
- [Accessible Rich Internet Applications (WAI-ARIA)](https://w3c.github.io/aria/)
- Verwandte Glossareinträge:
  - {{Glossary("Accessibility", "Barrierefreiheit")}}
  - {{Glossary("Accessibility_tree", "Accessibility tree")}}
  - {{Glossary("Accessible_description", "Zugängliche Beschreibung")}}
  - {{Glossary("ARIA", "ARIA")}}
