---
title: aria-label
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-label
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Das `aria-label` Attribut definiert einen Zeichenfolgenwert, der verwendet werden kann, um ein Element zu benennen, sofern die Rolle des Elements das Benennen nicht [untersagt](#zugehörige_rollen).

## Beschreibung

Manchmal fehlt der standardmäßige {{Glossary("accessible_name", "zugängliche Name")}} eines Elements oder der zugängliche Name beschreibt den Inhalt des Elements nicht genau und es gibt keinen sichtbaren Inhalt im DOM, der dem Objekt eine Bedeutung verleihen kann. Ein häufiges Beispiel für ein solches Element ist ein Button, der ein SVG-Icon ohne jeglichen Text enthält.

In Fällen, in denen ein Element, das nicht Teil der [verbotsliste](#zugehörige_rollen) ist, keinen zugänglichen Namen hat oder ein zugänglicher Name nicht zutreffend ist und es keinen sichtbaren Inhalt im DOM gibt, der über das [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) Attribut referenziert werden kann, kann das `aria-label` Attribut verwendet werden, um eine Zeichenkette zu definieren, die das interaktive Element benennt, auf dem es gesetzt ist. Dies verschafft dem Element einen zugänglichen Namen.

Der untenstehende Code zeigt ein Beispiel, wie das `aria-label` Attribut verwendet wird, um einem `<button>`-Element einen zugänglichen Namen zu geben. Der Button in diesem Beispiel enthält eine SVG-Grafik und fehlt an Textinhalt, was das `aria-label` für Benutzer von Screenreadern unerlässlich macht, um seine Funktion, die in diesem Fall "Close" ist, zu verstehen.

```html
<button aria-label="Close" onclick="myDialog.close()">
  <svg
    aria-hidden="true"
    focusable="false"
    width="17"
    height="17"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="m.967 14.217 5.8-5.906-5.765-5.89L3.094.26l5.783 5.888L14.66.26l2.092 2.162-5.766 5.889 5.801 5.906-2.092 2.162-5.818-5.924-5.818 5.924-2.092-2.162Z"
      fill="#000" />
  </svg>
</button>
```

> **Hinweis:** Das `aria-label` ist dafür gedacht, Elemente zu benennen, bei denen die implizite oder explizite Rolle das Benennen nicht untersagt. Es wird dringend empfohlen, `aria-labelledby` gegenüber `aria-label` zu priorisieren, wenn ein sichtbares Label existiert, auf das das Element verweisen und von dem es seinen Namen erhalten kann.

Die meisten Inhalte haben einen zugänglichen Namen, der aus dem unmittelbaren Textinhalt des umgebenden Elements generiert wird. Zugängliche Namen können auch durch bestimmte Attribute oder zugeordnete Elemente erstellt werden.

Standardmäßig ist der zugängliche Name eines Buttons der Inhalt zwischen den öffnenden und schließenden {{HTMLElement('button')}}-Tags, der zugängliche Name eines Bildes ist der Inhalt seines [`alt`](/de/docs/Web/HTML/Element/img#alt) Attributs, und der zugängliche Name eines Formulareingabe-Elements ist der Inhalt des zugehörigen {{HTMLElement('label')}} Elements.

Wenn keine dieser Optionen verfügbar ist oder wenn der standardmäßige zugängliche Name nicht geeignet ist, verwenden Sie das `aria-label` Attribut, um den zugänglichen Namen eines Elements zu definieren.

> [!NOTE]
> Obwohl `aria-label` auf jedem Element verwendet werden kann, das einen zugänglichen Namen haben kann, wird es in der Praxis jedoch nur auf interaktiven Elementen, [Widgets](/de/docs/Web/Accessibility/ARIA/Reference/Roles#2._widget_roles), [Landmarken](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles), Bildern und iframes unterstützt.

Beim Einsatz von `aria-label` sollten auch [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) berücksichtigt werden:

- `aria-label` kann in Fällen verwendet werden, in denen der Text, der das Element benennen könnte, _nicht_ sichtbar ist. Wenn ein sichtbarer Text ein Element benennt, verwenden Sie stattdessen `aria-labelledby`.
- Der Zweck von `aria-label` ist derselbe wie der von `aria-labelledby`. Beide bieten einen zugänglichen Namen für ein Element. Wenn es keinen sichtbaren Namen für das Element gibt, auf den Sie verweisen können, verwenden Sie `aria-label`, um dem Benutzer einen erkennbaren zugänglichen Namen zu geben. Wenn Label-Text im DOM verfügbar ist und es möglich ist, ihn für eine angemessene Benutzererfahrung zu referenzieren, bevorzugen Sie die Verwendung von `aria-labelledby`. Verwenden Sie nicht beide gleichzeitig auf demselben Element, da `aria-labelledby` gegenüber `aria-label` Vorrang hat, wenn beide angewendet werden.

Beachten Sie die folgenden zusätzlichen Richtlinien bei der Verwendung von `aria-label`:

- Das `aria-label` Attribut kann mit regulären, semantischen HTML-Elementen verwendet werden; es ist nicht auf Elemente beschränkt, denen eine [ARIA `role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles) zugewiesen ist.
- Missbrauchen Sie `aria-label` nicht. Denken Sie daran, dass es hauptsächlich für unterstützende Technologien gedacht ist. Um zusätzliche Anweisungen zu geben oder die Benutzeroberfläche zu klären, verwenden Sie sichtbaren Text mit `aria-describedby` oder [`aria-description`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-description), nicht `aria-label`. Anweisungen sollten für alle Benutzer zugänglich sein, nicht nur für diejenigen mit Screenreadern (oder vorzugsweise, machen Sie Ihre Benutzeroberfläche intuitiver).

  > [!NOTE]
  > Da der Inhalt von `aria-label` außerhalb unterstützender Technologien nicht angezeigt wird, erwägen Sie, wichtige Informationen für alle Benutzer sichtbar zu machen.

- Nicht auf allen Elementen kann ein zugänglicher Name vergeben werden. Weder `aria-label` noch `aria-labelledby` sollten mit Inline-Strukturelement-Rollen wie `code`, `term` und `emphasis` sowie Rollen, die nicht auf die Zugänglichkeits-API abgebildet sind, verwendet werden, einschließlich `none`. Das `aria-label` Attribut ist für Elemente gedacht, einschließlich Links, Videos, Formularsteuerungen und solche mit [Landmarken-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles) oder [Widget-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles#2._widget_roles); `aria-label` bietet einen zugänglichen Namen, wenn kein sichtbares Label im DOM vorhanden ist.
- Wenn Sie einem {{HTMLElement('iframe')}} einen `title` zuweisen, ein `alt` Attribut für ein {{HTMLElement('img')}} definieren oder {{HTMLElement('label')}} für ein {{HTMLElement('input')}} hinzufügen, ist `aria-label` nicht notwendig. Wenn jedoch ein `aria-label` Attribut vorhanden ist, wird es Vorrang vor dem `title` des iframes, dem `alt` des Bildes oder dem `<label>` Text des Eingabeelements haben als der zugängliche Name für dieses Element.

## Werte

- `<string>`
  - : Eine Textzeichenfolge, die der zugängliche Name für das Objekt wird.

## Zugehörige Schnittstellen

- [`Element.ariaLabel`](/de/docs/Web/API/Element/ariaLabel)
  - : Die [`ariaLabel`](/de/docs/Web/API/Element/ariaLabel) Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element) Schnittstelle, spiegelt den Wert des `aria-label` Attributs wider.
- [`ElementInternals.ariaLabel`](/de/docs/Web/API/ElementInternals/ariaLabel)
  - : Die [`ariaLabel`](/de/docs/Web/API/ElementInternals/ariaLabel) Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals) Schnittstelle, spiegelt den Wert des `aria-label` Attributs wider.

## Zugehörige Rollen

Verwendet in fast allen Rollen **außer** Rollen, denen der Autor keinen zugänglichen Namen zuweisen kann.

Das `aria-label` Attribut wird **NICHT** unterstützt in:

- [`code`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`caption`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`definition`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`deletion`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`emphasis`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`generic`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role)
- [`insertion`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`mark`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/mark_role)
- [`paragraph`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) / [`none`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/none_role)
- [`strong`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`subscript`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`superscript`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`suggestion`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/suggestion_role)
- [`term`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/term_role)
- [`time`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{HTMLElement('label')}} Element
- [`aria-description`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-description)
- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
- [Verwendung von HTML Landmarken-Rollen zur Verbesserung der Zugänglichkeit](/en-US/blog/aria-accessibility-html-landmark-roles/) auf dem MDN Blog (2023)
