---
title: CSS Houdini
slug: Web/CSS/Guides/Properties_and_values_API/Houdini
l10n:
  sourceCommit: 32bdfdb82cf91ce9942b694286dec62be2cc20aa
---

**CSS Houdini** ist eine Sammlung von APIs, die Teile der CSS-Engine zugänglich machen und es Entwicklern ermöglichen, CSS-Erweiterungen zu erstellen. Diese Erweiterungen können Funktionen bieten, die in Browsern noch nicht verfügbar sind, mit neuen Layout-Techniken experimentieren oder kreative Rahmen und andere Effekte hinzufügen.

Während viele Houdini-Beispiele die kreativen Möglichkeiten der APIs zeigen, gibt es auch viele praktische Anwendungsfälle. Zum Beispiel können Sie Houdini verwenden, um erweiterte benutzerdefinierte Eigenschaften mit Typüberprüfung und Standardwerten zu erstellen.

## Einfaches Beispiel

Eine reguläre [CSS-Benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/Reference/Properties/--*) besteht aus einem Eigenschaftsnamen und einem Wert. So könnte ich eine benutzerdefinierte Eigenschaft namens `--background-color` erstellen und erwarten, dass ihr ein Farbwert zugewiesen wird. Der Wert wird dann im CSS verwendet, als ob es sich um den Farbwert handeln würde.

```css
:root {
  --background-color: blue;
}

.box {
  background-color: var(--background-color);
}
```

Im obigen Beispiel gibt es jedoch nichts, was jemanden daran hindert, einen anderen Wert für diese Eigenschaft zu verwenden, und vielleicht einen Wert von Länge einzustellen. Würde man dies tun, hätte die Stelle, an der die Eigenschaft verwendet wird, keine Hintergrundfarbe, da `background-color: 12px` nicht gültig ist. Wenn Browser auf CSS stoßen, das sie nicht als gültig erkennen, werfen sie diese Zeile weg.

Mit der Verwendung von {{cssxref("@property")}} können wir jedoch die benutzerdefinierte Eigenschaft mit einer {{CSSxRef("@property/syntax","Syntax")}} von `<color>` deklarieren. Dies zeigt, dass wir für diese Eigenschaft einen Wert benötigen, der eine gültige Farbe ist.

```css
@property --background-color {
  syntax: "<color>";
  inherits: false;
  initial-value: blue;
}
```

## Houdini-Worklets

Ein Merkmal von Houdini ist der [`Worklet`](/de/docs/Web/API/Worklet). Ein Worklet ist ein Modul, das in JavaScript geschrieben ist und CSS mit einer der Houdini-APIs erweitert. Sie können ein Beispiel-Worklet auf der Seite [`PaintWorkletGlobalScope.registerPaint()`](/de/docs/Web/API/PaintWorkletGlobalScope/registerPaint) sehen. Sobald ein Worklet registriert wurde, können Sie es in CSS verwenden, wie jeden anderen Wert. Das bedeutet, dass Sie, selbst wenn Sie kein JavaScript-Entwickler sind, die Houdini-APIs nutzen können, indem Sie Worklets verwenden, die andere erstellt haben.

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

- [Leitfaden zu Properties and Values API](/de/docs/Web/API/CSS_Properties_and_Values_API/guide)
- [Leitfaden zur Typed OM API](/de/docs/Web/API/CSS_Typed_OM_API/Guide)
- [Verwendung der CSS Painting API](/de/docs/Web/API/CSS_Painting_API/Guide)

## Siehe auch

- [Ein praktischer Überblick über CSS Houdini](https://www.smashingmagazine.com/2020/03/practical-overview-css-houdini/)
- [Intelligentere benutzerdefinierte Eigenschaften mit dem neuen API von Houdini](https://web.dev/articles/css-props-and-vals)
