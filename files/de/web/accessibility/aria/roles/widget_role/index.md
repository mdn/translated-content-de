---
title: "ARIA: Widget-Rolle"
slug: Web/Accessibility/ARIA/Roles/widget_role
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Die **`widget`**-Rolle, eine [abstrakte Rolle](/de/docs/Web/Accessibility/ARIA/Roles#6._abstract_roles), ist ein interaktiver Bestandteil einer grafischen Benutzeroberfläche (GUI).

> [!NOTE]
> Die `widget`-Rolle ist eine abstrakte Rolle, die für die Ontologie verwendet wird. Sie ist hier zur Vollständigkeit der Dokumentation enthalten und sollte nicht von Webautoren verwendet werden.

## Beschreibung

Die abstrakte `widget`-Rolle ist eine Superklasse für einige interaktive GUI-Elemente und Gruppierungsrollen. `role="widget"` sollte nicht mit Widget-Rollen wie `option`, `menuitem` und `searchbox` verwechselt werden.

Die `widget`-Rolle ist eine Superklasse für mehrere abstrakte interaktive GUI-Rollen, einschließlich [`command`](/de/docs/Web/Accessibility/ARIA/Roles/command_role), [`composite`](/de/docs/Web/Accessibility/ARIA/Roles/composite_role), [`input`](/de/docs/Web/Accessibility/ARIA/Roles/input_role), [`range`](/de/docs/Web/Accessibility/ARIA/Roles/range_role) und [`separator`](/de/docs/Web/Accessibility/ARIA/Roles/separator_role) (wenn fokussierbar), die nicht von Webautoren verwendet werden sollten.

Die abstrakte `widget`-Rolle ist auch eine Superklasse für einige Gruppierungsrollen, die von Webautoren verwendet werden können, darunter [`gridcell`](/de/docs/Web/Accessibility/ARIA/Roles/gridcell_role), [`row`](/de/docs/Web/Accessibility/ARIA/Roles/row_role), [`separator`](/de/docs/Web/Accessibility/ARIA/Roles/separator_role) (wenn nicht fokussierbar) und [`tab`](/de/docs/Web/Accessibility/ARIA/Roles/tab_role), die angemessen verwendet werden können und sollen. Wenn der Benutzer zu einer dieser nicht-abstrakten Rollen des Widgets navigiert, können Tastaturereignisse in einen Anwendungsdurchsuchenmodus wechseln und Tastaturereignisse an den Browser weiterleiten.

## Beste Praktiken

Nicht verwenden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [ARIA: `roletype`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/roletype_role)

- [ARIA: `command`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/command_role)
- [ARIA: `composite`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/composite_role)
- [ARIA: `gridcell`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/gridcell_role)
- [ARIA: `input`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/input_role)
- [ARIA: `range`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/range_role)
- [ARIA: `row`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/row_role)
- [ARIA: `separator`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/separator_role)
- [ARIA: `tab`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/tab_role)
