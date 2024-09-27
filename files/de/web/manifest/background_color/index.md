---
title: background_color
slug: Web/Manifest/background_color
l10n:
  sourceCommit: 54dbdfc6be6e1cb62b1c10e23356e895953fb196
---

{{QuickLinksWithSubpages("/de/docs/Web/Manifest")}}

Das `background_color`-Mitglied definiert eine Hintergrundfarbe als Platzhalter für die Anwendungsseite, die angezeigt wird, bevor das Stylesheet geladen ist.

Dieser Wert wird vom Benutzeragenten verwendet, um die Hintergrundfarbe eines Shortcuts zu zeichnen, wenn das Manifest verfügbar ist, bevor das Stylesheet geladen wurde.

Daher sollte `background_color` der {{cssxref("background-color")}} CSS-Eigenschaft im Stylesheet der Website entsprechen, um einen reibungslosen Übergang zwischen dem Start der Webanwendung und dem Laden der Website-Inhalte zu gewährleisten.

> [!NOTE]
> Das `background_color`-Mitglied ist lediglich dazu gedacht, die Benutzererfahrung während des Ladens des Haupt-Stylesheets aus dem Netzwerk oder dem Speichermedium zu verbessern; es wird nicht vom Benutzeragenten als {{cssxref("background-color")}} CSS-Eigenschaft verwendet, wenn das Stylesheet der progressiven Web-App verfügbar ist.

## Beispiele

```json
"background_color": "red"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
