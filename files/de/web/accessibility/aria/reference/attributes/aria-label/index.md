---
title: "ARIA: aria-label Attribut"
short-title: aria-label
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-label
l10n:
  sourceCommit: f81599343ec5bd4571b3adaa1c6e4d5ded60b8e1
---

Das `aria-label` Attribut definiert einen Zeichenfolgewert, der verwendet werden kann, um ein Element zu benennen, solange die Rolle des Elements das Benennen nicht [untersagt](#zugehörige_rollen).

## Beschreibung

Manchmal fehlt der standardmäßige {{Glossary("accessible_name", "barrierefreie Name")}} eines Elements oder der barrierefreie Name beschreibt den Inhalt des Elements nicht genau, und es gibt keinen im DOM sichtbaren Inhalt, der mit dem Objekt in Verbindung gebracht werden kann, um ihm Bedeutung zu verleihen. Ein häufiges Beispiel für ein solches Element ist eine Schaltfläche, die ein SVG-Icon ohne Text enthält.

In Fällen, in denen ein Element, das nicht Teil der [verbotenen Liste](#zugehörige_rollen) ist, keinen barrierefreien Namen hat oder der barrierefreie Name nicht zutreffend ist und es keinen im DOM sichtbaren Inhalt gibt, der über das [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) Attribut referenziert werden kann, kann das `aria-label` Attribut verwendet werden, um eine Zeichenfolge zu definieren, die das interaktive Element, auf dem es gesetzt ist, beschriftet. Dies gibt dem Element einen barrierefreien Namen.

Der untenstehende Code zeigt ein Beispiel, wie das `aria-label` Attribut verwendet wird, um einer `<button>`-Element eine barrierefreie Benennung zu geben. Der Button in diesem Beispiel enthält eine SVG-Grafik und hat keinen Textinhalt, wodurch das `aria-label` für Benutzer von Screenreadern unerlässlich wird, um seine Funktion zu verstehen, die in diesem Fall "Schließen" ist.

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
      fill="black" />
  </svg>
</button>
```

```js
document.querySelector("button").addEventListener("click", () => {
  myDialog.close();
});
```

> [!NOTE]
> `aria-label` ist für die Benennung von Elementen vorgesehen, bei denen die implizite oder explizite Rolle das Benennen nicht verbietet. Es wird dringend empfohlen, `aria-labelledby` gegenüber `aria-label` zu priorisieren, wenn ein sichtbares Label für das Element existiert, um darauf zu verweisen und seinen Namen davon zu erhalten.

Die meisten Inhalte haben einen barrierefreien Namen, der aus dem unmittelbaren Textinhalt des umgebenden Elements generiert wird. Barrierefreie Namen können auch durch bestimmte Attribute oder assoziierte Elemente erstellt werden.

Standardmäßig ist der barrierefreie Name eines Buttons der Inhalt zwischen den öffnenden und schließenden {{HTMLElement('button')}}-Tags, der barrierefreie Name eines Bildes ist der Inhalt seines [`alt`](/de/docs/Web/HTML/Reference/Elements/img#alt) Attributs und der barrierefreie Name einer Formulareingabe ist der Inhalt des zugehörigen {{HTMLElement('label')}} Elements.

Wenn keine dieser Optionen verfügbar ist oder der standardmäßige barrierefreie Name nicht geeignet ist, verwenden Sie das `aria-label` Attribut, um den barrierefreien Namen eines Elements zu definieren.

> [!NOTE]
> Während `aria-label` auf jedem Element verwendet werden kann, das einen barrierefreien Namen haben kann, wird es in der Praxis jedoch nur auf interaktiven Elementen, [Widgets](/de/docs/Web/Accessibility/ARIA/Reference/Roles#2._widget_roles), [Landmarks](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles), Bildern und iframes unterstützt.

Wenn Sie `aria-label` verwenden, sollten Sie auch [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) in Betracht ziehen:

- `aria-label` kann in Fällen verwendet werden, in denen Text, der das Element beschriften könnte, _nicht_ sichtbar ist. Wenn es sichtbaren Text gibt, der ein Element beschriftet, verwenden Sie stattdessen `aria-labelledby`.
- Der Zweck von `aria-label` ist derselbe wie der von `aria-labelledby`. Beide bieten einem Element einen barrierefreien Namen. Wenn es keinen sichtbaren Namen gibt, auf den Sie verweisen können, verwenden Sie `aria-label`, um dem Benutzer einen erkennbaren barrierefreien Namen zu geben. Wenn Label-Text im DOM verfügbar ist und er für ein akzeptables Benutzererlebnis referenziert werden kann, ziehen Sie es vor, `aria-labelledby` zu verwenden. Verwenden Sie nicht beide auf demselben Element, da `aria-labelledby` Vorrang vor `aria-label` erhält, wenn beide angewendet werden.

Beachten Sie die folgenden zusätzlichen Richtlinien bei der Verwendung von `aria-label`:

- Das `aria-label` Attribut kann mit regulären, semantischen HTML-Elementen verwendet werden; es ist nicht auf Elemente beschränkt, die eine [ARIA `role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles) zugewiesen bekommen haben.
- Überbeanspruchen Sie `aria-label` nicht. Denken Sie daran, dass es in erster Linie für unterstützende Technologien gedacht ist. Um zusätzliche Anweisungen zu geben oder das UI zu erläutern, verwenden Sie sichtbaren Text mit `aria-describedby` oder [`aria-description`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-description), nicht `aria-label`. Anweisungen sollten für alle Benutzer zugänglich sein, nicht nur für diejenigen mit Screenreadern (oder besser noch, machen Sie Ihr UI intuitiver).

  > [!NOTE]
  > Da der Inhalt von `aria-label` außerhalb unterstützender Technologien nicht angezeigt wird, sollten Sie darüber nachdenken, wichtige Informationen für alle Benutzer sichtbar zu machen.

- Nicht alle Elemente können einen barrierefreien Namen erhalten. Weder `aria-label` noch `aria-labelledby` sollten mit Inline-Strukturrollen wie `code`, `term` und `emphasis` und Rollen, die nicht in der Accessibility API abgebildet sind, einschließlich `none`, verwendet werden. Das `aria-label` Attribut ist für Elemente vorgesehen, einschließlich Links, Videos, Formularsteuerelementen und solchen mit [Landmark Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles) oder [Widget Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles#2._widget_roles); `aria-label` bietet einen barrierefreien Namen, wenn kein sichtbares Label im DOM existiert.
- Wenn Sie einem {{HTMLElement('iframe')}} ein `title` zuweisen, einem {{HTMLElement('img')}} ein `alt` Attribut definieren oder ein {{HTMLElement('label')}} für ein {{HTMLElement('input')}} hinzufügen, ist `aria-label` nicht notwendig. Wenn jedoch ein `aria-label` Attribut vorhanden ist, hat es Vorrang vor dem `title` des iframes, dem `alt` des Bildes oder dem `<label>` Text der Eingabe als barrierefreier Name für dieses Element.

## Werte

- `<string>`
  - : Eine Textzeichenfolge, die der barrierefreie Name für das Objekt sein wird.

## Zugehörige Schnittstellen

- [`Element.ariaLabel`](/de/docs/Web/API/Element/ariaLabel)
  - : Die [`ariaLabel`](/de/docs/Web/API/Element/ariaLabel) Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element) Schnittstelle, spiegelt den Wert des `aria-label` Attributs wider.
- [`ElementInternals.ariaLabel`](/de/docs/Web/API/ElementInternals/ariaLabel)
  - : Die [`ariaLabel`](/de/docs/Web/API/ElementInternals/ariaLabel) Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals) Schnittstelle, spiegelt den Wert des `aria-label` Attributs wider.

## Zugehörige Rollen

Wird in fast allen Rollen verwendet, **außer** in Rollen, denen kein barrierefreier Name vom Autor zugewiesen werden kann.

Das `aria-label` Attribut wird **NICHT** unterstützt in:

- [`caption`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`code`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
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
- [`suggestion`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/suggestion_role)
- [`superscript`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`term`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/term_role)
- [`time`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{HTMLElement('label')}} Element
- [`aria-description`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-description)
- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
- [Verwendung von HTML Landmark Rollen zur Verbesserung der Barrierefreiheit](/en-US/blog/aria-accessibility-html-landmark-roles/) im MDN-Blog (2023)
