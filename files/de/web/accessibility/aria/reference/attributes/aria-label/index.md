---
title: "ARIA: aria-label Attribut"
short-title: aria-label
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-label
l10n:
  sourceCommit: fc52eb81b630ca02c16addc346924295bdb5aaa8
---

Das `aria-label` Attribut definiert einen Zeichenfolgewert, der zur Benennung eines Elements verwendet werden kann, solange die Rolle des Elements nicht [das Benennen untersagt](#zugehörige_rollen).

## Beschreibung

Manchmal fehlt der standardmäßige {{Glossary("accessible_name", "zugängliche Name")}} eines Elements oder der zugängliche Name beschreibt die Inhalte des Elements nicht genau und es gibt keinen Inhalt, der im DOM sichtbar ist und mit dem Objekt verknüpft werden kann, um ihm Bedeutung zu verleihen. Ein häufiges Beispiel für ein solches Element ist ein Button, der eine SVG-Grafik ohne Text enthält.

In Fällen, in denen ein Element, das nicht auf der [verbotene Liste](#zugehörige_rollen) steht und keinen zugänglichen Namen hat oder der zugängliche Name nicht zutreffend ist und es keinen sichtbaren Inhalt im DOM gibt, der über das [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) Attribut referenziert werden kann, kann das `aria-label` Attribut verwendet werden, um eine Zeichenfolge zu definieren, die das interaktive Element bezeichnet, auf dem es festgelegt ist. Dies gibt dem Element einen zugänglichen Namen.

Der folgende Code zeigt ein Beispiel, wie das `aria-label` Attribut verwendet wird, um einem `<button>`-Element einen zugänglichen Namen zu geben. Der Button in diesem Beispiel enthält eine SVG-Grafik und hat keinen Textinhalt, was den `aria-label` für Bildschirmleser-Nutzer unerlässlich macht, um seine Funktion zu verstehen, die in diesem Fall "Schließen" ist.

```html
<button aria-label="Close">
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

```js
document.querySelector("button").addEventListener("click", () => {
  myDialog.close();
});
```

> **Note:** `aria-label` ist für die Benennung von Elementen gedacht, bei denen die implizite oder explizite Rolle das Benennen nicht verbietet. Es wird dringend empfohlen, `aria-labelledby` gegenüber `aria-label` zu priorisieren, wenn ein sichtbares Label für das Element existiert, auf das referenziert werden kann, um seinen Namen zu erhalten.

Die meisten Inhalte haben einen zugänglichen Namen, der von dem Textinhalt ihres unmittelbar umgebenden Elements generiert wird. Zugängliche Namen können auch durch bestimmte Attribute oder zugehörige Elemente erstellt werden.

Standardmäßig ist der zugängliche Name eines Buttons der Inhalt zwischen den öffnenden und schließenden {{HTMLElement('button')}} Tags, der zugängliche Name eines Bildes ist der Inhalt seines [`alt`](/de/docs/Web/HTML/Reference/Elements/img#alt) Attributs, und der zugängliche Name einer Formulareingabe ist der Inhalt des zugehörigen {{HTMLElement('label')}} Elements.

Wenn keine dieser Optionen verfügbar ist oder der standardmäßig zugängliche Name nicht geeignet ist, verwenden Sie das `aria-label` Attribut, um den zugänglichen Namen eines Elements zu definieren.

> [!NOTE]
> Während `aria-label` auf jedem Element verwendet werden kann, das einen zugänglichen Namen haben kann, wird es in der Praxis jedoch nur auf interaktive Elemente, [Widgets](/de/docs/Web/Accessibility/ARIA/Reference/Roles#2._widget_roles), [Landmarks](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles), Bilder und Iframes unterstützt.

Wenn Sie `aria-label` verwenden, sollten Sie auch [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) in Betracht ziehen:

- `aria-label` kann in Fällen verwendet werden, in denen Text, der das Element kennzeichnen könnte, _nicht_ sichtbar ist. Wenn es sichtbaren Text gibt, der ein Element kennzeichnet, verwenden Sie stattdessen `aria-labelledby`.
- Der Zweck von `aria-label` ist derselbe wie der von `aria-labelledby`. Beide bieten einen zugänglichen Namen für ein Element. Wenn kein sichtbarer Name für das Element vorhanden ist, den Sie referenzieren können, verwenden Sie `aria-label`, um dem Benutzer einen erkennbaren zugänglichen Namen zu geben. Wenn im DOM Beschriftungstext verfügbar ist und es möglich ist, ihn zu referenzieren, um eine akzeptable Benutzererfahrung zu bieten, bevorzugen Sie die Verwendung von `aria-labelledby`. Verwenden Sie beide nicht auf demselben Element, da `aria-labelledby` Vorrang vor `aria-label` hat, wenn beide angewendet werden.

Beachten Sie die folgenden zusätzlichen Richtlinien, wenn Sie `aria-label` verwenden:

- Das `aria-label` Attribut kann mit regulären, semantischen HTML-Elementen verwendet werden; es ist nicht auf Elemente beschränkt, die eine [ARIA `role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles) zugewiesen haben.
- Verwenden Sie `aria-label` nicht "übermäßig". Denken Sie daran, dass es hauptsächlich für unterstützende Technologien gedacht ist. Um zusätzliche Anweisungen bereitzustellen oder die Benutzeroberfläche zu klären, verwenden Sie sichtbaren Text mit `aria-describedby` oder [`aria-description`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-description), nicht `aria-label`. Anweisungen sollten allen Benutzern zugänglich sein, nicht nur denen mit Bildschirmlesern (oder vorzugsweise, machen Sie Ihre Benutzeroberfläche intuitiver).

  > [!NOTE]
  > Da der Inhalt von `aria-label` außerhalb unterstützender Technologien nicht angezeigt wird, sollten Sie erwägen, wichtige Informationen für alle Benutzer sichtbar zu machen.

- Nicht allen Elementen kann ein zugänglicher Name zugewiesen werden. Weder `aria-label` noch `aria-labelledby` sollten mit strukturellen Inlinerollen wie `code`, `term` und `emphasis` verwendet werden, und Rollen, die nicht zur Barrierefreiheits-API abgebildet sind, einschließlich `none`. Das `aria-label` Attribut ist für Elemente wie Links, Videos, Formularelemente und solche mit [Landmark-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles) oder [Widget-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles#2._widget_roles) gedacht; `aria-label` bietet einen zugänglichen Namen, wenn kein sichtbares Label im DOM existiert.
- Wenn Sie einem {{HTMLElement('iframe')}} ein `title` zuweisen, ein `alt` Attribut für ein {{HTMLElement('img')}} definieren oder ein {{HTMLElement('label')}} für ein {{HTMLElement('input')}} hinzufügen, ist `aria-label` nicht erforderlich. Wenn jedoch ein `aria-label` Attribut vorhanden ist, hat es Vorrang vor dem `title` des Iframes, dem `alt` des Bildes oder dem `<label>`-Text der Eingabe als zugänglicher Name für dieses Element.

## Werte

- `<string>`
  - : Eine Zeichenfolge aus Text, die der zugängliche Name für das Objekt sein wird.

## Zugehörige Schnittstellen

- [`Element.ariaLabel`](/de/docs/Web/API/Element/ariaLabel)
  - : Die [`ariaLabel`](/de/docs/Web/API/Element/ariaLabel) Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element) Schnittstelle, spiegelt den Wert des `aria-label` Attributs wider.
- [`ElementInternals.ariaLabel`](/de/docs/Web/API/ElementInternals/ariaLabel)
  - : Die [`ariaLabel`](/de/docs/Web/API/ElementInternals/ariaLabel) Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals) Schnittstelle, spiegelt den Wert des `aria-label` Attributs wider.

## Zugehörige Rollen

Wird in fast allen Rollen **außer** Rollen verwendet, denen vom Autor kein zugänglicher Name zugeordnet werden kann.

Das `aria-label` Attribut wird **nicht** unterstützt in:

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
- [Verwendung von HTML-Landmark-Rollen zur Verbesserung der Barrierefreiheit](/en-US/blog/aria-accessibility-html-landmark-roles/) im MDN-Blog (2023)
