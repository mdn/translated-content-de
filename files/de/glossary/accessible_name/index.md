---
title: Accessible name
slug: Glossary/Accessible_name
l10n:
  sourceCommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{GlossarySidebar}}

Ein **accessible name** ist der Name eines Benutzerschnittstellenelements; er ist der Text, der einem HTML-Element zugeordnet ist und Nutzern von unterstützenden Technologien ein Etikett für das Element bietet.

Accessible names vermitteln den Zweck oder die Absicht des Elements. Dies hilft den Nutzern zu verstehen, wofür das Element ist und wie sie damit interagieren können. Im Allgemeinen sollten accessible names für Elemente auf einer Seite eindeutig sein. Dies hilft den Nutzern, ein Element von anderen Elementen zu unterscheiden und das Element zu identifizieren, mit dem sie interagieren möchten.

Abhängig vom Element und der HTML-Markup kann der Wert des accessible name aus sichtbarem (z.B. der Text innerhalb von `<figcaption>`) oder unsichtbarem (z.B. das `aria-label`-Attribut, das auf ein Element gesetzt ist) Inhalt oder einer Kombination von beiden abgeleitet werden. Wie der accessible name eines Elements bestimmt wird, basiert auf der [accessible name calculation](https://www.w3.org/WAI/ARIA/apg/practices/names-and-descriptions/#name_calculation), die je nach Element unterschiedlich ist.

Es ist am besten, sichtbaren Text als accessible name zu verwenden. Viele Elemente, einschließlich `<a>`, `<td>` und `<button>`, können ihren accessible name aus ihrem Inhalt beziehen. Beispielsweise ist bei `<a href="foo.html">Bar</a>` der accessible name dieses Hyperlinks "Bar".

Andere Elemente erhalten ihren accessible name vom Inhalt assoziierter Elemente. Wenn beispielsweise ein `<fieldset>`- oder `<table>`-Element ein Nachfahrenelement `<legend>` oder `<caption>` enthält, erfolgt die Zuordnung des eingebetteten Elements, das einen accessible name für das übergeordnete Element bereitstellt, automatisch. Für Formularelemente wie `<textarea>` und `<input>` stammt der accessible name aus dem zugehörigen `<label>`-Element. Die Zuordnung muss explizit definiert werden, indem das `for`-Attribut im `<label>`-Element so gesetzt wird, dass es mit der `id` des Formularelements übereinstimmt. Alternativ wird eine implizite Zuordnung erstellt, wenn das Formularelement direkt innerhalb des `<label>`-Elements umfasst ist.

Für einige Elemente stammt der accessible name aus den Attributen des Elements, z.B. das `alt`-Attribut im Fall von `<img>`. Bei `<img src="grape.jpg" alt="banana"/>` ist der accessible name des Bildes "banana".

Um eine Zuordnung zwischen sichtbarem Inhalt und einem Element oder mehreren Textknoten und einem Element zu erstellen, kann das [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)-Attribut verwendet werden. Wenn kein sichtbarer Text mit einem Benutzerschnittstellenelement, das einen accessible name benötigt, verknüpft werden kann, kann das [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)-Attribut verwendet werden. Names sollten nicht zu Elementen hinzugefügt werden, die eingebetteten Text auszeichnen, wie `<code>`, `<del>`, und `<mark>`.

Viele Elemente, wie z.B. Abschnitte von Textinhalten, benötigen keinen accessible name. Alle Steuerelemente sollten einen accessible name haben. Alle Bilder, die Informationen vermitteln und nicht rein präsentationsorientiert sind, ebenso.

Unterstützende Technologien bieten den Nutzern die accessibility name property, die den accessible name zusammen mit der Rolle des Elements umfasst. Obwohl viele Elemente keinen accessible name benötigen, ist es notwendig, einen accessible name bereitzustellen, um den Inhalt von Elementen mit speziellen [Rollen](/de/docs/Web/Accessibility/ARIA/Roles) zu überschreiben oder zu ergänzen. Zum Beispiel ist ein [`tabpanel`](/de/docs/Web/Accessibility/ARIA/Roles/tabpanel_role) ein Inhaltsabschnitt, der erscheint, nachdem ein Benutzer das zugehörige Element mit einer [`tab`](/de/docs/Web/Accessibility/ARIA/Roles/tab_role)-Rolle aktiviert hat. Diese Rolle kann auf ein Element gesetzt werden, das keinen Namen benötigt, wie das `<div>`-Element. Das `tab` ist das Steuerelement und muss einen accessible name haben. Das `tabpanel` ist das Kind (Inhaltsabschnitt) des `tab`. Das Hinzufügen von `aria-labelledby` zum `tabpanel` ist eine Best Practice.

## Siehe auch

- [ARIA-Rollen](/de/docs/Web/Accessibility/ARIA/Roles)
- [ARIA-Attribut](/de/docs/Web/Accessibility/ARIA/Attributes)
- [Accessible Name and Description Computation 1.2 (accname)](https://w3c.github.io/accname/#mapping_additional_nd_description)
- [Barrierefreiheit](/de/docs/Web/Accessibility)
- [Barrierefreiheit lernen](/de/docs/Learn/Accessibility)
- [Barrierefreies Web](https://en.wikipedia.org/wiki/Web_accessibility) auf Wikipedia
- [Web Accessibility In Mind](https://webaim.org/)
- [ARIA](/de/docs/Web/Accessibility/ARIA)
- [Die W3C Web Accessibility Initiative (WAI)](https://www.w3.org/WAI/)
- [Accessible Rich Internet Applications (WAI-ARIA)](https://w3c.github.io/aria/)
- Verwandte Glossarbegriffe:
  - {{Glossary("Accessibility", "Barrierefreiheit")}}
  - {{Glossary("Accessibility_tree", "Accessibility tree")}}
  - {{Glossary("Accessible_description", "Accessible description")}}
  - {{Glossary("ARIA", "ARIA")}}
