---
title: "ARIA: landmark-Rolle"
short-title: landmark
slug: Web/Accessibility/ARIA/Reference/Roles/landmark_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Ein Landmark ist ein wichtiger Abschnitt einer Seite. Die `landmark`-Rolle ist eine abstrakte Superklasse für die ARIA-Rollenwerte für Inhaltsabschnitte, die so wichtig sind, dass Benutzer wahrscheinlich direkt zu ihnen navigieren möchten.

> [!NOTE]
> Die `landmark`-Rolle ist eine [abstrakte Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles#6._abstract_roles). Sie wird hier zur Vollständigkeit der Dokumentation aufgenommen. Sie sollte nicht von Web-Autoren verwendet werden.

## Beschreibung

Ein `landmark` ist eine abstrakte Rolle für einen Inhaltsabschnitt, der so wichtig ist, dass Benutzer wahrscheinlich einfach zu dem Abschnitt navigieren möchten und er in einer dynamisch generierten Zusammenfassung der Seite enthalten sein sollte. Landmarks ermöglichen assistiven Technologien, Inhalte schnell zu finden und zu navigieren.

Um eine Landmark-Rolle zu erstellen, definieren Sie den Zweck des Inhalts durch die Verwendung eines semantischen Elements wie `<section>`, `<nav>` oder `<main>`, oder durch Hinzufügen einer ARIA-Rolle, die eine Unterklasse der `landmark`-Rolle ist, wie zum Beispiel [`role="banner"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/banner_role), [`role="complementary"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/complementary_role) oder [`role="region"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/region_role). Verwenden Sie nicht `role="landmark"`.

Ein sichtbares Label sollte bereitgestellt werden, referenziert mit [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby). Falls erforderlich, kann eine kurze, beschreibende Bezeichnung mit [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) bereitgestellt werden.

Für Bildschirmleseprogramm-Benutzer erstellt die Hinzufügung von Landmark-Rollen effektiv "Skip-Links" für Bildschirmleser-Benutzer, ersetzt jedoch nicht die interne Navigation, da die Landmark-Rollen ansonsten nicht angezeigt werden.

## Beste Praktiken

Verwenden Sie nicht `role="landmark"`. Nutzen Sie HTML und Unterklassen-Landmark-Rollen.

Landmarks stellen sicher, dass Inhalte in navigierbaren Bereichen enthalten sind. Verwenden Sie {{HTMLElement('main')}} für [`role="main"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/main_role), {{HTMLElement('header')}} für [`role="banner"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/banner_role), {{HTMLElement('nav')}} für [`role="navigation"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/navigation_role), und {{HTMLElement('footer')}} für [`role="contentinfo"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/contentinfo_role). Es ist auch eine gute Praxis, die Rolle redundant mit dem zugehörigen semantischen Element einzuschließen. Es ist weniger gute Praxis, nicht-semantische Elemente wie {{HTMLElement('div')}} zu verwenden, um Semantik mit Landmark-Rollen hinzuzufügen. Aber schließen Sie entweder eines oder beides ein. Andernfalls ist Ihr Inhalt für Bildschirmleseprogramm-Benutzer nicht mehr so gut navigierbar.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [ARIA: `section`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/section_role)
- [ARIA: `banner`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/banner_role)
- [ARIA: `complementary`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/complementary_role)
- [ARIA: `contentinfo`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/contentinfo_role)
- [ARIA: `form`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/form_role)
- [ARIA: `main`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/main_role)
- [ARIA: `navigation`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/navigation_role)
- [ARIA: `region`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/region_role)
- [ARIA: `search`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/search_role)
- [Verwendung von HTML-Landmark-Rollen zur Verbesserung der Zugänglichkeit](/en-US/blog/aria-accessibility-html-landmark-roles/) im MDN-Blog (2023)
