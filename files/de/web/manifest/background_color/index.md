---
title: background_color
slug: Web/Manifest/background_color
l10n:
  sourceCommit: 54dbdfc6be6e1cb62b1c10e23356e895953fb196
---

{{QuickLinksWithSubpages("/de/docs/Web/Manifest")}}

Das `background_color`-Element definiert eine Platzhalter-Hintergrundfarbe für die Anwendungsseite, die angezeigt wird, bevor das Stylesheet geladen ist.

Dieser Wert wird vom Benutzeragenten verwendet, um die Hintergrundfarbe eines Shortcuts zu zeichnen, wenn das Manifest verfügbar ist, bevor das Stylesheet geladen wurde.

Daher sollte `background_color` der {{cssxref("background-color")}} CSS-Eigenschaft im Stylesheet der Website entsprechen, um einen nahtlosen Übergang zwischen dem Start der Webanwendung und dem Laden des Inhalts der Website zu ermöglichen.

> [!NOTE]
> Das `background_color`-Element ist nur dazu gedacht, das Benutzererlebnis zu verbessern, während das Haupt-Stylesheet aus dem Netzwerk oder vom Speichermedium geladen wird; es wird vom Benutzeragenten nicht als {{cssxref("background-color")}} CSS-Eigenschaft verwendet, wenn das Stylesheet der Progressive Web App verfügbar ist.

## Beispiele

```json
"background_color": "red"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
