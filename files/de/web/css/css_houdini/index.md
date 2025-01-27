---
title: CSS Houdini
slug: Web/CSS/CSS_Houdini
l10n:
  sourceCommit: 2e0bb467ae622b0791732843287e4e45dc71e1d5
---

{{CSSRef}}

**CSS Houdini** ist eine Reihe von APIs, die Teile der CSS-Engine freilegen. Dies erleichtert es Entwicklern, Erweiterungen für CSS zu erstellen. Diese Erweiterungen könnten verwendet werden, um Features zu polyfillen, die in einem Browser noch nicht verfügbar sind, um mit neuen Layout-Methoden zu experimentieren oder um kreative Rahmen und andere Effekte hinzuzufügen.

Während viele Houdini-Beispiele die kreativen Möglichkeiten der APIs zeigen, gibt es viele praktische Anwendungsfälle. Zum Beispiel können Sie Houdini verwenden, um erweiterte benutzerdefinierte Eigenschaften mit Typprüfung und Standardwerten zu erstellen.

## Einfaches Beispiel

Eine reguläre [CSS-Benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/--*) besteht aus einem Eigenschaftsnamen und einem Wert. Daher könnte ich eine benutzerdefinierte Eigenschaft namens `--background-color` erstellen und erwarten, dass ihr ein Farbwert zugewiesen wird. Der Wert wird dann im CSS verwendet, als ob es der Farbwert wäre.

```css
:root {
  --background-color: blue;
}

.box {
  background-color: var(--background-color);
}
```

Im obigen Beispiel jedoch gibt es nichts, was jemanden daran hindert, einen anderen Wert für diese Eigenschaft zu verwenden, vielleicht einen Längenwert zu setzen. Wenn dies getan wurde, würde an allen Stellen, an denen die Eigenschaft verwendet wird, keine Hintergrundfarbe vorhanden sein, da `background-color: 12px` nicht gültig ist. Wenn Browser auf ungültiges CSS stoßen, verwerfen sie diese Zeile.

Durch die Verwendung von {{cssxref("@property")}} können wir jedoch die benutzerdefinierte Eigenschaft mit einer {{CSSxRef("@property/syntax","Syntax")}} von `<color>` deklarieren. Dies zeigt, dass wir für diese Eigenschaft einen Wert benötigen, der eine gültige Farbe ist.

```css
@property --background-color {
  syntax: "<color>";
  inherits: false;
  initial-value: blue;
}
```

## Houdini-Worklets

Ein Merkmal von Houdini ist der [`Worklet`](/de/docs/Web/API/Worklet). Ein Worklet ist ein Modul, das in JavaScript geschrieben ist und CSS unter Verwendung einer der Houdini-APIs erweitert. Sie können ein Beispiel-Worklet auf der Seite [`PaintWorkletGlobalScope.registerPaint()`](/de/docs/Web/API/PaintWorkletGlobalScope/registerPaint) sehen. Sobald ein Worklet registriert wurde, können Sie es im CSS wie jeden anderen Wert verwenden. Das bedeutet, dass selbst wenn Sie kein JavaScript-Entwickler sind, Sie über von anderen erstellte Worklets auf Houdini-APIs zugreifen können.

## Referenz

### CSS-At-Regel und Deskriptoren

Die {{CSSxRef("@property")}}-At-Regel ermöglicht es Ihnen, eine erweiterte benutzerdefinierte Eigenschaft zu registrieren.

- {{CSSxRef("@property")}}
- {{CSSxRef("@property/inherits","inherits")}}
- {{CSSxRef("@property/initial-value","initial-value")}}
- {{CSSxRef("@property/syntax","syntax")}}

### Houdini-API-Referenzen

- [CSS Properties and Values API](/de/docs/Web/API/CSS_Properties_and_Values_API)
- [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API)
- [CSS Painting API](/de/docs/Web/API/CSS_Painting_API)
- [`Worklet`](/de/docs/Web/API/Worklet) Referenz

### Houdini-Leitfäden

- [Properties and Values API Leitfaden](/de/docs/Web/API/CSS_Properties_and_Values_API/guide)
- [Typed OM API Leitfaden](/de/docs/Web/API/CSS_Typed_OM_API/Guide)
- [Verwendung der CSS Painting API](/de/docs/Web/API/CSS_Painting_API/Guide)

## Externe Ressourcen

- [Interaktive Einführung in Houdini](https://houdini.glitch.me/)
- [Ein praktischer Überblick über CSS Houdini](https://www.smashingmagazine.com/2020/03/practical-overview-css-houdini/)
- [Intelligentere benutzerdefinierte Eigenschaften mit Houdinis neuer API](https://web.dev/articles/css-props-and-vals)
