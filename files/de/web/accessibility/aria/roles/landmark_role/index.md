---
title: "ARIA: landmark Rolle"
slug: Web/Accessibility/ARIA/Roles/landmark_role
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Ein Landmark ist ein wichtiger Unterabschnitt einer Seite. Die `landmark` Rolle ist eine abstrakte Superklasse für die ARIA-Rollenwerte für Inhaltsabschnitte, die so wichtig sind, dass Benutzer wahrscheinlich direkt zu ihnen navigieren möchten.

> [!NOTE]
> Die `landmark` Rolle ist eine [abstrakte Rolle](/de/docs/Web/Accessibility/ARIA/Roles#6._abstract_roles). Sie ist hier zur Vollständigkeit der Dokumentation enthalten. Sie sollte nicht von Webautoren verwendet werden.

## Beschreibung

Ein `landmark` ist eine abstrakte Rolle für einen Inhaltsabschnitt, der so wichtig ist, dass Benutzer wahrscheinlich leicht zu diesem Abschnitt navigieren und ihn in eine dynamisch generierte Zusammenfassung der Seite einbeziehen möchten. Landmarks ermöglichen assistierenden Technologien die schnelle Navigation und das schnelle Auffinden von Inhalten.

Um eine Landmark-Rolle zu erstellen, definieren Sie den Zweck des Inhalts mithilfe eines semantischen Elements wie `<section>`, `<nav>` oder `<main>`, oder fügen Sie eine ARIA-Rolle hinzu, die eine Unterklasse der `landmark` Rolle ist, wie [`role="banner"`](/de/docs/Web/Accessibility/ARIA/Roles/banner_role), [`role="complementary"`](/de/docs/Web/Accessibility/ARIA/Roles/complementary_role) oder [`role="region"`](/de/docs/Web/Accessibility/ARIA/Roles/region_role). Verwenden Sie nicht `role="landmark"`.

Ein sichtbares Label sollte bereitgestellt und mit [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) referenziert werden. Falls nötig kann ein kurzes, beschreibendes Label mit [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) bereitgestellt werden.

Für Bildschirmleser-Benutzer erstellt das Hinzufügen von Landmark-Rollen effektiv 'Skip-Links', jedoch ersetzen sie nicht die Seitennavigation, da die Landmark-Rollen sonst nicht angezeigt werden.

## Beste Praktiken

Verwenden Sie nicht `role="landmark"`. Verwenden Sie HTML und Unterklassen-Landmark-Rollen.

Landmarks stellen sicher, dass Inhalte in navigierbaren Bereichen liegen. Nutzen Sie {{HTMLElement('main')}} für [`role="main"`](/de/docs/Web/Accessibility/ARIA/Roles/main_role), {{HTMLElement('header')}} für [`role="banner"`](/de/docs/Web/Accessibility/ARIA/Roles/banner_role), {{HTMLElement('nav')}} für [`role="navigation"`](/de/docs/Web/Accessibility/ARIA/Roles/navigation_role), und {{HTMLElement('footer')}} für [`role="contentinfo"`](/de/docs/Web/Accessibility/ARIA/Roles/contentinfo_role). Es ist auch gute Praxis, die Rolle redundant mit dem zugehörigen semantischen Element einzuschließen. Es ist nicht so gute Praxis, nicht-semantische Elemente wie {{HTMLElement('div')}} zu verwenden und Semantik mit Landmark-Rollen hinzuzufügen. Aber schließen Sie entweder eines oder beide ein. Andernfalls sind Ihre Inhalte für Bildschirmleser-Benutzer nicht mehr so navigierbar.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [ARIA: `section` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/section_role)
- [ARIA: `banner` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/banner_role)
- [ARIA: `complementary` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/complementary_role)
- [ARIA: `contentinfo` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/contentinfo_role)
- [ARIA: `form` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/form_role)
- [ARIA: `main` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/main_role)
- [ARIA: `navigation` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/navigation_role)
- [ARIA: `region` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/region_role)
- [ARIA: `search` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/search_role)
- [Verwendung von HTML-Landmark-Rollen zur Verbesserung der Zugänglichkeit](/en-US/blog/aria-accessibility-html-landmark-roles/) im MDN-Blog (2023)
