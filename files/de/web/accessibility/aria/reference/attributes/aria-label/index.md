---
title: aria-label
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-label
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

Das `aria-label` Attribut definiert einen Stringwert, der verwendet werden kann, um ein Element zu benennen, sofern die Rolle des Elements das Benennen nicht [verbietet](#zugehörige_rollen).

## Beschreibung

Manchmal fehlt der Standard-{{Glossary("accessible_name", "zugängliche Name")}} eines Elements, oder der zugängliche Name beschreibt den Inhalt des Elements nicht genau und es gibt keinen sichtbaren Inhalt im DOM, der mit dem Objekt in Verbindung gebracht werden kann, um ihm Bedeutung zu geben. Ein häufiges Beispiel für ein solches Element ist ein Button, der ein SVG-Icon ohne Text enthält.

In Fällen, in denen ein Element, das nicht zur [verbotenen Liste](#zugehörige_rollen) gehört, keinen zugänglichen Namen hat oder der zugängliche Name ungenau ist und kein sichtbarer Inhalt im DOM vorhanden ist, der über das Attribut [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) referenziert werden kann, kann das Attribut `aria-label` verwendet werden, um einen String zu definieren, der das interaktive Element, auf dem es gesetzt ist, bezeichnet. Dies verleiht dem Element einen zugänglichen Namen.

Der folgende Code zeigt ein Beispiel, wie das Attribut `aria-label` verwendet wird, um einen zugänglichen Namen für ein `<button>`-Element bereitzustellen. Der Button in diesem Beispiel enthält eine SVG-Grafik und keinen Textinhalt, was das `aria-label` unerlässlich für Benutzer von Screen-Readern macht, um seine Funktion zu verstehen, die in diesem Fall "Schließen" ist.

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

> **Hinweis:** `aria-label` ist zur Benennung von Elementen gedacht, bei denen die implizite oder explizite Rolle das Benennen nicht verbietet. Es wird dringend empfohlen, `aria-labelledby` gegenüber `aria-label` zu priorisieren, wenn ein sichtbares Label für das Element existiert, das referenziert und aus dem der Name abgeleitet werden kann.

Die meisten Inhalte haben einen zugänglichen Namen, der aus dem Textinhalt des direkt umschließenden Elements generiert wird. Zugängliche Namen können auch durch bestimmte Attribute oder zugehörige Elemente erstellt werden.

Standardmäßig ist der zugängliche Name eines Buttons der Inhalt zwischen den öffnenden und schließenden {{HTMLElement('button')}}-Tags, der zugängliche Name eines Bildes ist der Inhalt seines [`alt`](/de/docs/Web/HTML/Reference/Elements/img#alt)-Attributs und der zugängliche Name eines Formulareingabefeldes ist der Inhalt des zugehörigen {{HTMLElement('label')}}-Elements.

Wenn keine dieser Optionen verfügbar ist oder der Standard-zugängliche Name nicht geeignet ist, verwenden Sie das Attribut `aria-label`, um den zugänglichen Namen eines Elements zu definieren.

> [!NOTE]
> Zwar kann `aria-label` auf jedem Element verwendet werden, das einen zugänglichen Namen haben kann, jedoch wird es in der Praxis nur auf interaktive Elemente, [Widgets](/de/docs/Web/Accessibility/ARIA/Reference/Roles#2._widget_roles), [Landmarken](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles), Bilder und iframes unterstützt.

Beim Verwenden von `aria-label` sollten Sie auch [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) in Betracht ziehen:

- `aria-label` kann in Fällen verwendet werden, in denen Text, der das Element beschriften könnte, _nicht_ sichtbar ist. Wenn sichtbarer Text vorhanden ist, der ein Element beschriftet, verwenden Sie stattdessen `aria-labelledby`.
- Der Zweck von `aria-label` ist derselbe wie der von `aria-labelledby`. Beide bieten einen zugänglichen Namen für ein Element. Wenn es keinen sichtbaren Namen für das Element gibt, den Sie referenzieren können, verwenden Sie `aria-label`, um dem Benutzer einen erkennbaren zugänglichen Namen zu bieten. Wenn Label-Text im DOM verfügbar ist und es möglich ist, ihn für eine akzeptable Benutzererfahrung zu referenzieren, bevorzugen Sie `aria-labelledby`. Verwenden Sie nicht beide auf demselben Element, da `aria-labelledby` Vorrang vor `aria-label` hat, wenn beide angewendet werden.

Beachten Sie bei der Verwendung von `aria-label` die folgenden zusätzlichen Richtlinien:

- Das `aria-label` Attribut kann mit regulären, semantischen HTML-Elementen verwendet werden; es ist nicht auf Elemente beschränkt, die eine zugewiesene [ARIA-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles) haben.
- Verwenden Sie `aria-label` nicht "übermäßig". Denken Sie daran, dass es hauptsächlich für assistive Technologien gedacht ist. Um zusätzliche Anweisungen zu geben oder die Benutzeroberfläche zu klären, verwenden Sie sichtbaren Text mit `aria-describedby` oder [`aria-description`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-description), nicht `aria-label`. Anweisungen sollten für alle Benutzer zugänglich sein, nicht nur für diejenigen mit Screen-Readern (oder vorzugsweise machen Sie Ihre Benutzeroberfläche intuitiver).

  > [!NOTE]
  > Da der Inhalt von `aria-label` außerhalb assistiver Technologien nicht angezeigt wird, sollten Sie in Betracht ziehen, wichtige Informationen für alle Benutzer sichtbar zu machen.

- Nicht alle Elemente können einen zugänglichen Namen erhalten. Weder `aria-label` noch `aria-labelledby` sollten mit Inline-Strukturelementen wie `code`, `term` und `emphasis` und Rollen, die nicht der Zugänglichkeits-API zugeordnet sind, einschließlich `none`, verwendet werden. Das `aria-label` Attribut ist für Elemente wie Links, Videos, Formulareingabefelder und solche mit [Landmark-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles) oder [Widget-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles#2._widget_roles) gedacht; `aria-label` bietet einen zugänglichen Namen, wenn kein sichtbares Label im DOM existiert.
- Wenn Sie einem {{HTMLElement('iframe')}} ein `title` zuweisen, ein `alt`-Attribut für ein {{HTMLElement('img')}} definieren oder ein {{HTMLElement('label')}} für ein {{HTMLElement('input')}} hinzufügen, ist `aria-label` nicht notwendig. Wenn jedoch ein `aria-label` Attribut vorhanden ist, hat es Vorrang vor dem `title` des iframes, dem `alt` des Bildes oder dem `<label>` Text der Eingabe als zugänglicher Name für dieses Element.

## Werte

- `<string>`
  - : Eine Zeichenkette, die der zugängliche Name für das Objekt sein wird.

## Zugehörige Schnittstellen

- [`Element.ariaLabel`](/de/docs/Web/API/Element/ariaLabel)
  - : Die [`ariaLabel`](/de/docs/Web/API/Element/ariaLabel) Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element) Schnittstelle, spiegelt den Wert des `aria-label` Attributs wider.
- [`ElementInternals.ariaLabel`](/de/docs/Web/API/ElementInternals/ariaLabel)
  - : Die [`ariaLabel`](/de/docs/Web/API/ElementInternals/ariaLabel) Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals) Schnittstelle, spiegelt den Wert des `aria-label` Attributs wider.

## Zugehörige Rollen

Wird in fast allen Rollen verwendet, **außer** in Rollen, die dem Autor keinen zugänglichen Namen bereitstellen können.

Das Attribut `aria-label` wird **NICHT** unterstützt in:

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
- [Verwendung von HTML-Landmark-Rollen zur Verbesserung der Zugänglichkeit](/en-US/blog/aria-accessibility-html-landmark-roles/) auf dem MDN-Blog (2023)
