---
title: Zugänglicher Name
slug: Glossary/Accessible_name
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Ein **zugänglicher Name** ist der Name eines Benutzeroberflächenelements; es ist der Text, der mit einem HTML-Element verknüpft ist und Benutzern von unterstützender Technologie ein Label für das Element bereitstellt.

Zugängliche Namen vermitteln den Zweck oder die Absicht des Elements. Dies hilft Benutzern, zu verstehen, wofür das Element da ist und wie sie damit interagieren können. Im Allgemeinen sollten zugängliche Namen für Elemente auf einer Seite eindeutig sein. Dies hilft Benutzern, ein Element von anderen Elementen zu unterscheiden und das Element zu identifizieren, mit dem sie interagieren möchten.

Je nach Element und HTML-Markup kann der Wert des zugänglichen Namens aus sichtbarem (z. B. der Text innerhalb von {{HTMLElement("figcaption")}}) oder unsichtbarem (z. B. das `aria-label`-Attribut, das auf einem Element gesetzt ist) Inhalt oder einer Kombination von beidem abgeleitet werden. Wie der zugängliche Name eines Elements bestimmt wird, basiert auf der [Berechnung des zugänglichen Namens](https://www.w3.org/WAI/ARIA/apg/practices/names-and-descriptions/#name_calculation), die für verschiedene Elemente unterschiedlich ist.

Es ist am besten, sichtbaren Text als zugänglichen Namen zu verwenden. Viele Elemente, einschließlich {{HTMLElement("a")}}, {{HTMLElement("td")}} und {{HTMLElement("button")}}, können ihren zugänglichen Namen aus ihrem Inhalt beziehen. Zum Beispiel, mit `<a href="foo.html">Bar</a>` ist der zugängliche Name dieses Hyperlinks "Bar".

Andere Elemente erhalten ihren zugänglichen Namen aus dem Inhalt zugehöriger Elemente. Beispielsweise, wenn ein {{HTMLElement("fieldset")}}- oder {{HTMLElement("table")}}-Element ein untergeordnetes {{HTMLElement("legend")}}- oder {{HTMLElement("caption")}}-Element enthält, erfolgt die Zuordnung des verschachtelten Elements, das einen zugänglichen Namen für das übergeordnete Element bereitstellt, automatisch. Bei Formularelementen wie {{HTMLElement("textarea")}} und {{HTMLElement("input")}} kommt der zugängliche Name vom zugehörigen {{HTMLElement("label")}}-Element. Die Zuordnung muss explizit definiert werden, indem das `for`-Attribut im `<label>`-Element so gesetzt wird, dass es mit der `id` des Formularelements übereinstimmt. Alternativ wird eine implizite Zuordnung erstellt, wenn das Formularsteuerelement direkt innerhalb des `<label>`-Elements verschachtelt ist.

Für einige Elemente kommt der zugängliche Name aus den Attributen des Elements; zum Beispiel das `alt`-Attribut im Fall von {{HTMLElement("img")}}. Gegeben `<img src="grape.jpg" alt="banana"/>`, ist der zugängliche Name des Bildes "banana".

Um eine Zuordnung zwischen sichtbarem Inhalt und einem Element oder mehreren Textknoten und einem Element zu erstellen, kann das [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)-Attribut verwendet werden. Wenn kein sichtbarer Text vorhanden ist, um ihn mit einem UI-Element zu verknüpfen, das einen zugänglichen Namen benötigt, kann das [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)-Attribut verwendet werden. Namen sollten nicht zu Elementen hinzugefügt werden, die Inline-Text auszeichnen, wie {{HTMLElement("code")}}, {{HTMLElement("del")}}, und {{HTMLElement("mark")}}.

Viele Elemente, wie z. B. Abschnitte von Textinhalten, benötigen keinen zugänglichen Namen. Alle Steuerelemente sollten jedoch einen zugänglichen Namen haben. Alle Bilder, die Informationen vermitteln und nicht rein zur Darstellung dienen, ebenso.

Unterstützende Technologien bieten Benutzern die Accessibility Name-Eigenschaft, die den zugänglichen Namen zusammen mit der Rolle des Elements umfasst. Während viele Elemente keinen zugänglichen Namen benötigen, ist es notwendig, einen zugänglichen Namen bereitzustellen, um den Inhalt von Elementen mit bestimmten [Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles) zu überschreiben oder zu ergänzen. Zum Beispiel ist ein [`tabpanel`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role) ein Inhaltsabschnitt, der angezeigt wird, nachdem ein Benutzer das zugehörige Element mit einer [`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role)-Rolle aktiviert hat. Diese Rolle kann auf ein Element ohne erforderlichen Namen gesetzt werden, wie das {{HTMLElement("div")}}-Element. Der `tab` ist das Steuerelement und muss einen zugänglichen Namen haben. Der `tabpanel` ist das untergeordnete (Inhaltsbereich) Element des `tab`. Das Hinzufügen von `aria-labelledby` zu dem `tabpanel` ist eine bewährte Methode.

## Siehe auch

- [ARIA-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles)
- [ARIA-Attribut](/de/docs/Web/Accessibility/ARIA/Reference/Attributes)
- [Accessible Name and Description Computation 1.2 (accname)](https://w3c.github.io/accname/#mapping_additional_nd_description)
- [Barrierefreiheit](/de/docs/Web/Accessibility)
- [Barrierefreiheit lernen](/de/docs/Learn_web_development/Core/Accessibility)
- [Web Accessibility](https://en.wikipedia.org/wiki/Web_accessibility) auf Wikipedia
- [Web Accessibility In Mind](https://webaim.org/)
- [ARIA](/de/docs/Web/Accessibility/ARIA)
- [Die W3C Web Accessibility Initiative (WAI)](https://www.w3.org/WAI/)
- [Accessible Rich Internet Applications (WAI-ARIA)](https://w3c.github.io/aria/)
- Verwandte Begriffe im Glossar:
  - {{Glossary("Accessibility", "Barrierefreiheit")}}
  - {{Glossary("Accessibility_tree", "Barrierefreiheitsbaum")}}
  - {{Glossary("Accessible_description", "Zugängliche Beschreibung")}}
  - {{Glossary("ARIA", "ARIA")}}
