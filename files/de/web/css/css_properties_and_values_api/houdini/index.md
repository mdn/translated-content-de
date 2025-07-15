---
title: CSS Houdini
slug: Web/CSS/CSS_properties_and_values_API/Houdini
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**CSS Houdini** ist eine Sammlung von APIs, die Teile der CSS-Engine zugänglich machen. Dies erleichtert Entwicklern das Erstellen von Erweiterungen für CSS. Diese Erweiterungen könnten dazu dienen, Funktionen zu polyfillen, die in einem Browser noch nicht verfügbar sind, mit neuen Ansätzen für Layouts zu experimentieren oder kreative Rahmen oder andere Effekte hinzuzufügen.

Auch wenn viele Houdini-Beispiele die kreativen Möglichkeiten der APIs aufzeigen, gibt es viele praktische Anwendungsfälle. Zum Beispiel können Sie Houdini nutzen, um erweiterte benutzerdefinierte Eigenschaften mit Typprüfung und Standardwerten zu erstellen.

## Einfaches Beispiel

Eine reguläre [CSS-Benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/--*) besteht aus einem Eigenschaftsnamen und einem Wert. Daher könnte ich eine benutzerdefinierte Eigenschaft namens `--background-color` erstellen und erwarten, dass ihr ein Farbwert zugewiesen wird. Der Wert wird dann im CSS so verwendet, als ob es der Farbwert wäre.

```css
:root {
  --background-color: blue;
}

.box {
  background-color: var(--background-color);
}
```

Im obigen Beispiel gibt es jedoch nichts, das jemanden davon abhalten würde, einen anderen Wert für diese Eigenschaft zu verwenden, vielleicht indem er sie auf eine Länge setzt. Wenn das getan wird, hätte jede Stelle, an der die Eigenschaft verwendet wird, keine Hintergrundfarbe, da `background-color: 12px` nicht gültig ist. Wenn Browser auf CSS stoßen, das sie nicht als gültig erkennen, ignorieren sie diese Zeile.

Mit {{cssxref("@property")}} können wir jedoch die benutzerdefinierte Eigenschaft mit einem {{CSSxRef("@property/syntax","syntax")}} von `<color>` deklarieren. Dies zeigt, dass wir möchten, dass diese Eigenschaft einen Wert hat, der eine gültige Farbe ist.

```css
@property --background-color {
  syntax: "<color>";
  inherits: false;
  initial-value: blue;
}
```

## Houdini Worklets

Ein Merkmal von Houdini ist der [`Worklet`](/de/docs/Web/API/Worklet). Ein Worklet ist ein Modul, geschrieben in JavaScript, das CSS mit einer der Houdini APIs erweitert. Sie können ein Beispiel für ein Worklet auf der Seite [`PaintWorkletGlobalScope.registerPaint()`](/de/docs/Web/API/PaintWorkletGlobalScope/registerPaint) sehen. Sobald ein Worklet registriert wurde, können Sie es in CSS wie jeden anderen Wert verwenden. Das bedeutet, dass selbst wenn Sie kein JavaScript-Entwickler sind, Sie Zugriff auf Houdini APIs haben, indem Sie Worklets verwenden, die andere erstellt haben.

## Referenz

### CSS-At-Regel und Deskriptoren

Die {{CSSxRef("@property")}} At-Regel ermöglicht es Ihnen, eine erweiterte benutzerdefinierte Eigenschaft zu registrieren.

- {{CSSxRef("@property")}}
- {{CSSxRef("@property/inherits","inherits")}}
- {{CSSxRef("@property/initial-value","initial-value")}}
- {{CSSxRef("@property/syntax","syntax")}}

### Houdini API-Referenzen

- [CSS Properties and Values API](/de/docs/Web/API/CSS_Properties_and_Values_API)
- [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API)
- [CSS Painting API](/de/docs/Web/API/CSS_Painting_API)
- [`Worklet`](/de/docs/Web/API/Worklet) Referenz

### Houdini Leitfäden

- [Properties and Values API Leitfaden](/de/docs/Web/API/CSS_Properties_and_Values_API/guide)
- [Typed OM API Leitfaden](/de/docs/Web/API/CSS_Typed_OM_API/Guide)
- [Verwendung der CSS Painting API](/de/docs/Web/API/CSS_Painting_API/Guide)

## Siehe auch

- [Ein praktischer Überblick über CSS Houdini](https://www.smashingmagazine.com/2020/03/practical-overview-css-houdini/)
- [Intelligentere benutzerdefinierte Eigenschaften mit Houdinis neuer API](https://web.dev/articles/css-props-and-vals)
