---
title: "ARIA: aria-label-Attribut"
short-title: aria-label
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-label
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

Das `aria-label`-Attribut definiert einen Zeichenfolgenwert, der verwendet werden kann, um ein Element zu benennen, solange die Rolle des Elements das Benennen nicht [verhindert](#zugehörige_rollen).

## Beschreibung

Manchmal fehlt der standardmäßige {{Glossary("accessible_name", "zugängliche Name")}} eines Elements oder der zugängliche Name beschreibt die Inhalte des Elements nicht genau, und es gibt keinen im DOM sichtbaren Inhalt, der dem Objekt zugeordnet werden kann, um ihm Bedeutung zu verleihen. Ein häufiges Beispiel für ein solches Element ist ein Button, der ein SVG-Icon ohne Text enthält.

In Fällen, in denen ein Element, das nicht Teil der [verbotsliste](#zugehörige_rollen) ist, keinen zugänglichen Namen hat oder ein zugänglicher Name nicht genau ist, und es keinen im DOM sichtbaren Inhalt gibt, der über das [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)-Attribut referenziert werden kann, kann das `aria-label`-Attribut verwendet werden, um eine Zeichenfolge zu definieren, die das interaktive Element benennt, auf dem es gesetzt wird. Dies gibt dem Element einen zugänglichen Namen.

Der untenstehende Code zeigt ein Beispiel dafür, wie das `aria-label`-Attribut verwendet werden kann, um einem `<button>`-Element einen zugänglichen Namen zu geben. Der Button in diesem Beispiel enthält eine SVG-Grafik und keinen Textinhalt, wodurch das `aria-label` für Benutzer von Bildschirmlesern notwendig ist, um seine Funktion zu verstehen, die in diesem Fall "Schließen" ist.

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

> [!NOTE] > `aria-label` ist für das Benennen von Elementen gedacht, deren implizite oder explizite Rolle das Benennen nicht verhindert. Es wird dringend empfohlen, `aria-labelledby` gegenüber `aria-label` zu bevorzugen, wenn ein sichtbares Label existiert, das für das Element referenziert werden und seinen Namen erhalten kann.

Die meisten Inhalte haben einen zugänglichen Namen, der aus dem Textinhalt des unmittelbar umgebenden Elements generiert wird. Zugängliche Namen können auch durch bestimmte Attribute oder zugeordnete Elemente erstellt werden.

Standardmäßig ist der zugängliche Name eines Buttons der Inhalt zwischen den öffnenden und schließenden {{HTMLElement('button')}}-Tags, der zugängliche Name eines Bildes ist der Inhalt seines [`alt`](/de/docs/Web/HTML/Reference/Elements/img#alt)-Attributs und der zugängliche Name eines Formulareingabewerts ist der Inhalt des zugeordneten {{HTMLElement('label')}}-Elements.

Wenn keine dieser Optionen verfügbar ist oder der standardmäßige zugängliche Name nicht angemessen ist, verwenden Sie das `aria-label`-Attribut, um den zugänglichen Namen eines Elements zu definieren.

> [!NOTE]
> Während `aria-label` auf jedem Element verwendet werden kann, das einen zugänglichen Namen haben kann, wird es in der Praxis jedoch nur für interaktive Elemente, [Widgets](/de/docs/Web/Accessibility/ARIA/Reference/Roles#2._widget_roles), [Landmarks](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles), Bilder und iFrames unterstützt.

Beim Verwenden von `aria-label` sollten Sie auch [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) berücksichtigen:

- `aria-label` kann in Fällen verwendet werden, in denen der Text, der das Element beschriftet, _nicht_ sichtbar ist. Wenn es sichtbaren Text gibt, der ein Element beschriftet, verwenden Sie stattdessen `aria-labelledby`.
- Der Zweck von `aria-label` ist derselbe wie der von `aria-labelledby`. Beide bieten einen zugänglichen Namen für ein Element. Wenn es keinen sichtbaren Namen für das Element gibt, auf den Sie Bezug nehmen können, verwenden Sie `aria-label`, um dem Benutzer einen erkennbaren zugänglichen Namen zu geben. Wenn der Beschriftungstext im DOM verfügbar ist und er für eine akzeptable Benutzererfahrung referenziert werden kann, bevorzugen Sie die Verwendung von `aria-labelledby`. Verwenden Sie nicht beide auf demselben Element, da `aria-labelledby` Vorrang vor `aria-label` hat, wenn beide angewendet werden.

Beachten Sie die folgenden zusätzlichen Richtlinien beim Verwenden von `aria-label`:

- Das `aria-label`-Attribut kann mit regulären, semantischen HTML-Elementen verwendet werden; es ist nicht auf Elemente beschränkt, denen eine [ARIA-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles) zugewiesen ist.
- Verwenden Sie `aria-label` nicht "übermäßig". Denken Sie daran, dass es in erster Linie für unterstützende Technologien gedacht ist. Um zusätzliche Anweisungen zu geben oder die Benutzeroberfläche zu klären, verwenden Sie sichtbaren Text mit `aria-describedby` oder [`aria-description`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-description), nicht `aria-label`. Anweisungen sollten für alle Benutzer zugänglich sein, nicht nur für jene mit Bildschirmlesegeräten (oder vorzugsweise sollte Ihre Benutzeroberfläche intuitiver gestaltet werden).

  > [!NOTE]
  > Da der Inhalt von `aria-label` außerhalb von Hilfstechnologien nicht angezeigt wird, sollten Sie erwägen, wichtige Informationen für alle Benutzer sichtbar zu machen.

- Nicht alle Elemente können einen zugänglichen Namen haben. Weder `aria-label` noch `aria-labelledby` sollten mit Inline-Strukturrollen wie `code`, `term` und `emphasis` und Rollen, die nicht auf die Zugänglichkeits-API abgebildet sind, einschließlich `none`, verwendet werden. Das `aria-label`-Attribut ist für Elemente wie Links, Videos, Formularelemente und jene mit [Landmark-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles) oder [Widget-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles#2._widget_roles) gedacht; `aria-label` bietet einen zugänglichen Namen, wenn im DOM kein sichtbares Label existiert.
- Wenn Sie einem {{HTMLElement('iframe')}} einen `title` zuweisen, einem {{HTMLElement('img')}} ein `alt`-Attribut definieren oder {{HTMLElement('label')}} für ein {{HTMLElement('input')}} hinzufügen, ist `aria-label` nicht notwendig. Ist jedoch ein `aria-label`-Attribut vorhanden, hat es Vorrang vor dem `title` des iFrames, dem `alt` des Bildes oder dem `<label>`-Text des Eingabefelds als zugänglicher Name für dieses Element.

## Werte

- `<string>`
  - : Eine Textzeichenfolge, die der zugängliche Name für das Objekt sein wird.

## Zugehörige Schnittstellen

- [`Element.ariaLabel`](/de/docs/Web/API/Element/ariaLabel)
  - : Die [`ariaLabel`](/de/docs/Web/API/Element/ariaLabel)-Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element)-Schnittstelle, spiegelt den Wert des `aria-label`-Attributs wider.
- [`ElementInternals.ariaLabel`](/de/docs/Web/API/ElementInternals/ariaLabel)
  - : Die [`ariaLabel`](/de/docs/Web/API/ElementInternals/ariaLabel)-Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle, spiegelt den Wert des `aria-label`-Attributs wider.

## Zugehörige Rollen

Wird in fast allen Rollen verwendet, **außer** in Rollen, denen der Autor keinen zugänglichen Namen zuweisen kann.

Das `aria-label`-Attribut wird **NICHT** unterstützt in:

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

- {{HTMLElement('label')}}-Element
- [`aria-description`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-description)
- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
- [Verwendung von HTML-Landmark-Rollen zur Verbesserung der Barrierefreiheit](/en-US/blog/aria-accessibility-html-landmark-roles/) auf dem MDN-Blog (2023)
