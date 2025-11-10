---
title: "ARIA: landmark role"
short-title: landmark
slug: Web/Accessibility/ARIA/Reference/Roles/landmark_role
l10n:
  sourceCommit: 6193c69cb71e80e45e7dff97188253ed15d58321
---

Ein Landmark ist ein wichtiger Unterabschnitt einer Seite. Die `landmark`-Rolle ist eine abstrakte Superklasse für die ARIA-Rollenwerte für Inhaltsbereiche, die so wichtig sind, dass Benutzer wahrscheinlich direkt zu ihnen navigieren möchten.

> [!NOTE]
> Die `landmark`-Rolle ist eine [abstrakte Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles#6._abstract_roles). Sie wird hier zur Vervollständigung der Dokumentation erwähnt. Web-Autoren sollten sie nicht verwenden.

## Beschreibung

Ein `landmark` ist eine abstrakte Rolle für einen Inhaltsbereich, der so wichtig ist, dass Benutzer leicht zu diesem Abschnitt navigieren und ihn in einer dynamisch generierten Zusammenfassung der Seite einbeziehen möchten. Landmarks ermöglichen es unterstützenden Technologien, Inhalte schnell zu finden und zu navigieren.

Um eine Landmark-Rolle zu erstellen, definieren Sie den Zweck des Inhalts mithilfe eines semantischen Elements wie `<section>`, `<nav>` oder `<main>`, oder fügen Sie eine ARIA-Rolle hinzu, die eine Unterklasse der `landmark`-Rolle ist, wie z.B. [`role="banner"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/banner_role), [`role="complementary"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/complementary_role) oder [`role="region"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/region_role). Verwenden Sie nicht `role="landmark"`.

Jede konkrete Landmark-Rolle hat ihr entsprechendes HTML-Semantikelement:

| ARIA-Rolle                                                                            | HTML-Element               |
| ------------------------------------------------------------------------------------- | -------------------------- |
| [`banner`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/banner_role)               | {{HTMLElement('header')}}  |
| [`complementary`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/complementary_role) | {{HTMLElement('aside')}}   |
| [`contentinfo`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/contentinfo_role)     | {{HTMLElement('footer')}}  |
| [`form`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/form_role)                   | {{HTMLElement('form')}}    |
| [`main`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/main_role)                   | {{HTMLElement('main')}}    |
| [`navigation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/navigation_role)       | {{HTMLElement('nav')}}     |
| [`region`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/region_role)               | {{HTMLElement('section')}} |
| [`search`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/search_role)               | {{HTMLElement('search')}}  |

Ein sichtbares Label sollte bereitgestellt werden, referenziert mit [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby). Falls erforderlich, kann ein kurzes, beschreibendes Label mit [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) bereitgestellt werden.

Für Benutzer von Screenreadern fügt das Hinzufügen von Landmark-Rollen effektiv "Skip-Links" hinzu, ersetzt jedoch nicht die Navigation innerhalb der Seite, da die Landmark-Rollen ansonsten nicht ersichtlich sind.

## Beste Praktiken

Verwenden Sie nicht `role="landmark"`; verwenden Sie stattdessen geeignete Unterklassen-Landmark-Rollen oder, wenn möglich, semantisches HTML. Obwohl es nicht mehr notwendig ist, gilt es als gute Praxis, die Unterklassen-Landmark-Rollen redundant mit dem zugehörigen semantischen Element für ältere Browser einzufügen. Dies ist vorzuziehen gegenüber der Verwendung von Landmark-Rollen auf nicht-semantischen Elementen, wie {{HTMLElement('div')}}, aber verwenden Sie mindestens eines von `role` oder semantische Elemente, um Landmarks zu erstellen. Andernfalls wird Ihr Inhalt für Benutzer von Screenreadern weniger navigierbar sein.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [ARIA: `section` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/section_role)
- [ARIA: `banner` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/banner_role)
- [ARIA: `complementary` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/complementary_role)
- [ARIA: `contentinfo` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/contentinfo_role)
- [ARIA: `form` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/form_role)
- [ARIA: `main` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/main_role)
- [ARIA: `navigation` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/navigation_role)
- [ARIA: `region` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/region_role)
- [ARIA: `search` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/search_role)
- [Verwendung von HTML-Landmark-Rollen zur Verbesserung der Zugänglichkeit](/en-US/blog/aria-accessibility-html-landmark-roles/) im MDN-Blog (2023)
