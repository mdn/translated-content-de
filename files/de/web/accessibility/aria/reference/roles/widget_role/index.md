---
title: "ARIA: widget-Rolle"
slug: Web/Accessibility/ARIA/Reference/Roles/widget_role
l10n:
  sourceCommit: ec98716dfe71c78db3f82ee3b1b9e7f68997fa19
---

Die **`widget`**-Rolle, eine [abstrakte Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles#6._abstract_roles), ist eine interaktive Komponente einer grafischen Benutzeroberfläche (GUI).

> [!WARNING]
> Die `widget`-Rolle ist eine abstrakte Rolle, die für die Ontologie verwendet wird. Sie ist hier aus Gründen der Dokumentationsvollständigkeit enthalten. Sie sollte nicht von Web-Autoren verwendet werden.

## Beschreibung

Die abstrakte `widget`-Rolle ist eine Superklasse-Rolle für einige interaktive GUI-Elemente und Gruppierungsrollen. `role="widget"` sollte nicht mit Widget-Rollen wie `option`, `menuitem` und `searchbox` verwechselt werden.

Die `widget`-Rolle ist eine Superklasse-Rolle für mehrere abstrakte interaktive GUI-Rollen, einschließlich [`command`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/command_role), [`composite`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/composite_role), [`input`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/input_role), [`range`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/range_role) und [`separator`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role) (falls fokussierbar), die nicht von Web-Autoren verwendet werden sollten.

Die abstrakte `widget`-Rolle ist auch eine Superklasse-Rolle für einige Gruppierungsrollen, die von Web-Autoren verwendet werden können, einschließlich [`gridcell`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role), [`row`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role), [`separator`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role) (wenn nicht fokussierbar), und [`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role), die verwendet werden können und sollten, wenn es angemessen ist. Wenn der Benutzer zu einer dieser nicht-abstrakten Rollen eines Widgets navigiert, können Tastaturereignisse in einen Anwendungs-Browsing-Modus wechseln und Tastaturereignisse an den Browser weiterleiten.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [ARIA: `roletype`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/roletype_role)

- [ARIA: `command`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/command_role)
- [ARIA: `composite`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/composite_role)
- [ARIA: `gridcell`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)
- [ARIA: `input`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/input_role)
- [ARIA: `range`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/range_role)
- [ARIA: `row`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)
- [ARIA: `separator`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role)
- [ARIA: `tab`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role)
