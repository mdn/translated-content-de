---
title: aria-label
slug: Web/Accessibility/ARIA/Attributes/aria-label
l10n:
  sourceCommit: 314a2f67e5462a10ee2709d8d62153eaabef49fd
---

{{AccessibilitySidebar}}

Das Attribut `aria-label` definiert einen Zeichenfolgewert, der ein interaktives Element kennzeichnet.

## Beschreibung

Manchmal fehlt der standardmäßige {{Glossary("accessible_name", "zugängliche Name")}} eines Elements oder der zugängliche Name beschreibt den Inhalt des Elements nicht genau und es gibt keinen sichtbaren Inhalt im DOM, der dem Objekt eine Bedeutung gibt. Ein häufiges Beispiel für ein solches Element ist eine Schaltfläche, die ein SVG-Symbol ohne Text enthält.

In Fällen, in denen ein interaktives Element keinen zugänglichen Namen hat oder ein zugänglicher Name nicht genau ist und es keinen sichtbaren Inhalt im DOM gibt, der über das Attribut [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) referenziert werden kann, kann das Attribut `aria-label` verwendet werden, um eine Zeichenfolge zu definieren, die das interaktive Element, auf dem es gesetzt wird, kennzeichnet. Dies gibt dem interaktiven Element seinen zugänglichen Namen.

Der untenstehende Code zeigt ein Beispiel dafür, wie das Attribut `aria-label` verwendet werden kann, um einer `<button>`-Element einen zugänglichen Namen zu geben. Die Schaltfläche in diesem Beispiel enthält eine SVG-Grafik und keinen Textinhalt, wodurch das `aria-label` wichtig für Benutzer von Bildschirmlesegeräten ist, um ihre Funktion zu verstehen, die in diesem Fall "Schließen" ist.

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

> **Hinweis:** `aria-label` ist für interaktive Elemente oder für Elemente gedacht, die über andere ARIA-Deklarationen interaktiv gemacht werden, wenn es keinen sichtbaren Text im DOM gibt, der als Label dienen kann.

Die meisten Inhalte haben einen zugänglichen Namen, der aus dem Textinhalt des unmittelbar umgebenden Elements generiert wird. Zugängliche Namen können auch durch bestimmte Attribute oder zugeordnete Elemente erstellt werden.

Standardmäßig ist der zugängliche Name einer Schaltfläche der Inhalt zwischen dem öffnenden und schließenden {{HTMLElement('button')}}-Tag, der zugängliche Name eines Bildes ist der Inhalt seines [`alt`](/de/docs/Web/HTML/Element/img#alt)-Attributs, und der zugängliche Name eines Formulareingabefeldes ist der Inhalt des zugeordneten {{HTMLElement('label')}}-Elements.

Wenn keine dieser Optionen verfügbar sind oder der standardmäßige zugängliche Name nicht geeignet ist, verwenden Sie das Attribut `aria-label`, um den zugänglichen Namen eines Elements zu definieren.

> [!NOTE]
> Obwohl `aria-label` auf jedem Element verwendet werden kann, das einen zugänglichen Namen haben kann, wird es in der Praxis jedoch nur auf interaktiven Elementen, [Widgets](/de/docs/Web/Accessibility/ARIA/Roles#2._widget_roles), [Landmarks](/de/docs/Web/Accessibility/ARIA/Roles#3._landmark_roles), Bildern und iframes unterstützt.

Wenn Sie `aria-label` verwenden, sollten Sie auch [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) in Betracht ziehen:

- `aria-label` kann in Fällen verwendet werden, in denen Text, der das Element kennzeichnen könnte, _nicht_ sichtbar ist. Wenn es sichtbaren Text gibt, der ein Element kennzeichnet, verwenden Sie stattdessen `aria-labelledby`.
- Der Zweck von `aria-label` ist derselbe wie bei `aria-labelledby`. Beide bieten einen zugänglichen Namen für ein Element. Wenn es keinen sichtbaren Namen für das Element gibt, auf den Sie verweisen können, verwenden Sie `aria-label`, um dem Benutzer einen erkennbaren zugänglichen Namen zu geben. Wenn Label-Text im DOM verfügbar ist und es möglich ist, darauf zu verweisen, um ein akzeptables Benutzererlebnis zu erhalten, ziehen Sie vor, `aria-labelledby` zu verwenden. Verwenden Sie nicht beide auf demselben Element, da `aria-labelledby` Vorrang vor `aria-label` hat, wenn beide angewendet werden.

Beachten Sie die folgenden zusätzlichen Richtlinien bei der Verwendung von `aria-label`:

- Das Attribut `aria-label` kann mit regulären, semantischen HTML-Elementen verwendet werden; es ist nicht auf Elemente beschränkt, die eine [ARIA `role`](/de/docs/Web/Accessibility/ARIA/Roles) zugewiesen haben.
- "Übernutzen" Sie `aria-label` nicht. Denken Sie daran, dass es hauptsächlich für unterstützende Technologien gedacht ist. Um zusätzliche Anweisungen zu geben oder die Benutzeroberfläche zu klären, verwenden Sie sichtbaren Text mit `aria-describedby` oder [`aria-description`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-description), nicht `aria-label`. Anweisungen sollten für alle Benutzer zugänglich sein, nicht nur für diejenigen mit Bildschirmlesegeräten (oder vorzugsweise, machen Sie Ihr Benutzeroberfläche intuitiver).

  > [!NOTE]
  > Da der Inhalt von `aria-label` außerhalb von unterstützenden Technologien nicht angezeigt wird, sollten Sie in Betracht ziehen, wichtige Informationen für alle Benutzer sichtbar zu machen.

- Nicht alle Elemente können einen zugänglichen Namen erhalten. Weder `aria-label` noch `aria-labelledby` sollten mit inline-strukturellen Rollen wie `code`, `term` und `emphasis` sowie Rollen, die nicht dem Zugänglichkeits-API zugeordnet sind, einschließlich `none`, verwendet werden. Das Attribut `aria-label` ist für Elemente wie Links, Videos, Formularelemente und solche mit [Landmark-Rollen](/de/docs/Web/Accessibility/ARIA/Roles#3._landmark_roles) oder [Widget-Rollen](/de/docs/Web/Accessibility/ARIA/Roles#2._widget_roles) vorgesehen; `aria-label` bietet einen zugänglichen Namen, wenn kein sichtbares Label im DOM vorhanden ist.
- Wenn Sie einem {{HTMLElement('iframe')}} ein `title` zuweisen, ein `alt`-Attribut für ein {{HTMLElement('img')}} definieren oder ein {{HTMLElement('label')}} für ein {{HTMLElement('input')}} hinzufügen, ist `aria-label` nicht erforderlich. Wenn jedoch ein `aria-label`-Attribut vorhanden ist, hat es Vorrang vor dem `title` des iframes, dem `alt` des Bildes oder dem `<label>`-Text des Eingabefeldes als zugänglicher Name für dieses Element.

## Werte

- `<string>`
  - : Eine Zeichenfolge, die der zugängliche Name für das Objekt sein wird.

## Assoziierte Schnittstellen

- [`Element.ariaLabel`](/de/docs/Web/API/Element/ariaLabel)
  - : Die [`ariaLabel`](/de/docs/Web/API/Element/ariaLabel)-Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element)-Schnittstelle, spiegelt den Wert des `aria-label`-Attributs wider.
- [`ElementInternals.ariaLabel`](/de/docs/Web/API/ElementInternals/ariaLabel)
  - : Die [`ariaLabel`](/de/docs/Web/API/ElementInternals/ariaLabel)-Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle, spiegelt den Wert des `aria-label`-Attributs wider.

## Assoziierte Rollen

Verwendet in fast allen Rollen **außer** Rollen, denen kein zugänglicher Name vom Autor bereitgestellt werden kann.

Das Attribut `aria-label` wird **NICHT** unterstützt in:

- [`code`](/de/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`caption`](/de/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`definition`](/de/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`deletion`](/de/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`emphasis`](/de/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`generic`](/de/docs/Web/Accessibility/ARIA/Roles/generic_role)
- [`insertion`](/de/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`mark`](/de/docs/Web/Accessibility/ARIA/Roles/mark_role)
- [`paragraph`](/de/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`presentation`](/de/docs/Web/Accessibility/ARIA/Roles/presentation_role) / [`none`](/de/docs/Web/Accessibility/ARIA/Roles/none_role)
- [`strong`](/de/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`subscript`](/de/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`superscript`](/de/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`suggestion`](/de/docs/Web/Accessibility/ARIA/Roles/suggestion_role)
- [`term`](/de/docs/Web/Accessibility/ARIA/Roles/term_role)
- [`time`](/de/docs/Web/Accessibility/ARIA/Roles/structural_roles)

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{HTMLElement('label')}}-Element
- [`aria-description`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-description)
- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
- [Verwendung von HTML-Landmark-Rollen zur Verbesserung der Zugänglichkeit](/en-US/blog/aria-accessibility-html-landmark-roles/) im MDN-Blog (2023)
