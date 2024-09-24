---
title: "ARIA: landmark-Rolle"
slug: Web/Accessibility/ARIA/Roles/landmark_role
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Ein Landmarke ist ein wichtiger Unterabschnitt einer Seite. Die `landmark`-Rolle ist eine abstrakte Superklasse für die ARIA-Rollenwerte für Inhaltsabschnitte, die so wichtig sind, dass Benutzer wahrscheinlich direkt zu ihnen navigieren möchten.

> [!NOTE]
> Die `landmark`-Rolle ist eine [abstrakte Rolle](/de/docs/Web/Accessibility/ARIA/Roles#6._abstract_roles). Sie ist hier zur Vollständigkeit der Dokumentation enthalten. Sie sollte nicht von Webautoren verwendet werden.

## Beschreibung

Eine `landmark` ist eine abstrakte Rolle für einen Inhaltsabschnitt, der so wichtig ist, dass Benutzer wahrscheinlich direkt zu diesem Abschnitt navigieren möchten und er in eine dynamisch generierte Zusammenfassung der Seite aufgenommen werden soll. Landmarken ermöglichen es unterstützenden Technologien, schnell zu navigieren und Inhalte zu finden.

Um eine Landmarkenrolle zu erstellen, definieren Sie den Zweck des Inhalts, indem Sie ein semantisches Element wie `<section>`, `<nav>` oder `<main>` verwenden oder eine ARIA-Rolle hinzufügen, die eine Unterklasse der `landmark`-Rolle ist, wie z. B. [`role="banner"`](/de/docs/Web/Accessibility/ARIA/Roles/banner_role), [`role="complementary"`](/de/docs/Web/Accessibility/ARIA/Roles/complementary_role) oder [`role="region"`](/de/docs/Web/Accessibility/ARIA/Roles/region_role). Verwenden Sie nicht `role="landmark"`.

Ein sichtbares Label sollte bereitgestellt werden, referenziert mit [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby). Falls nötig, kann ein kurzes, beschreibendes Label mit [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) bereitgestellt werden.

Für Bildschirmleser-Benutzer erstellen Landmarkenrollen effektiv "Skip-Links" für Bildschirmleser-Benutzer, ersetzen jedoch nicht die Navigation innerhalb der Seite, da die Landmarkenrollen sonst nicht sichtbar sind.

## Beste Praktiken

Verwenden Sie nicht `role="landmark"`. Verwenden Sie HTML und Unterklassen-Landmarkenrollen.

Landmarken stellen sicher, dass Inhalte in navigierbaren Bereichen sind. Verwenden Sie {{HTMLElement('main')}} für [`role="main"`](/de/docs/Web/Accessibility/ARIA/Roles/main_role), {{HTMLElement('header')}} für [`role="banner"`](/de/docs/Web/Accessibility/ARIA/Roles/banner_role), {{HTMLElement('nav')}} für [`role="navigation"`](/de/docs/Web/Accessibility/ARIA/Roles/navigation_role), und {{HTMLElement('footer')}} für [`role="contentinfo"`](/de/docs/Web/Accessibility/ARIA/Roles/contentinfo_role). Es ist auch eine gute Praxis, die Rolle redundant mit dem zugehörigen semantischen Element zu verwenden. Es ist nicht so gut, nicht-semantische Elemente wie {{HTMLElement('div')}} zu verwenden und Semantik mit Landmarkenrollen hinzuzufügen. Aber inkludieren Sie entweder eines oder beides. Andernfalls ist Ihr Inhalt für Bildschirmleser-Benutzer nicht mehr so navigierbar.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [ARIA: `section`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/section_role)
- [ARIA: `banner`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/banner_role)
- [ARIA: `complementary`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/complementary_role)
- [ARIA: `contentinfo`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/contentinfo_role)
- [ARIA: `form`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/form_role)
- [ARIA: `main`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/main_role)
- [ARIA: `navigation`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/navigation_role)
- [ARIA: `region`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/region_role)
- [ARIA: `search`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/search_role)
- [Die Verwendung von HTML-Landmarkenrollen zur Verbesserung der Barrierefreiheit](/en-US/blog/aria-accessibility-html-landmark-roles/) auf dem MDN-Blog (2023)
