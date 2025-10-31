---
title: CSS Houdini
slug: Web/CSS/CSS_properties_and_values_API/Houdini
l10n:
  sourceCommit: 55326f330a6ae829494c7606b1bd47b2c0f9d888
---

**CSS Houdini** ist eine Reihe von APIs, die Teile der CSS-Engine zugänglich machen. Dies erleichtert es Entwicklern, Erweiterungen für CSS zu erstellen. Diese Erweiterungen können genutzt werden, um Funktionen zu polyfillen, die in einem Browser noch nicht verfügbar sind, um mit neuen Layout-Methoden zu experimentieren oder kreative Ränder oder andere Effekte einzufügen.

Während viele Houdini-Beispiele die kreativen Möglichkeiten der APIs zeigen, gibt es auch viele praktische Anwendungsfälle. Beispielsweise können Sie Houdini verwenden, um erweiterte benutzerdefinierte Eigenschaften mit Typprüfung und Standardwerten zu erstellen.

## Einfache Beispiel

Eine reguläre [benutzerdefinierte CSS-Eigenschaft](/de/docs/Web/CSS/Reference/Properties/--*) besteht aus einem Eigenschaftsnamen und einem Wert. Daher könnte ich eine benutzerdefinierte Eigenschaft namens `--background-color` erstellen und erwarten, dass ihr ein Farbwert zugewiesen wird. Der Wert wird dann im CSS verwendet, als ob es sich um den Farbwert handelt.

```css
:root {
  --background-color: blue;
}

.box {
  background-color: var(--background-color);
}
```

Im obigen Beispiel gibt es jedoch nichts, das jemanden davon abhält, einen anderen Wert für diese Eigenschaft zu verwenden, vielleicht wird es auf eine Länge gesetzt. Wenn dies geschieht, hat alles, wo die Eigenschaft verwendet wird, keine Hintergrundfarbe, da `background-color: 12px` nicht gültig ist. Wenn Browser auf CSS stoßen, das sie nicht als gültig erkennen, werfen sie diese Zeile weg.

Mit {{cssxref("@property")}} können wir jedoch die benutzerdefinierte Eigenschaft mit einer {{CSSxRef("@property/syntax","Syntax")}} von `<color>` deklarieren. Dies zeigt, dass wir möchten, dass diese Eigenschaft einen Wert hat, der eine gültige Farbe ist.

```css
@property --background-color {
  syntax: "<color>";
  inherits: false;
  initial-value: blue;
}
```

## Houdini Worklets

Ein Merkmal von Houdini ist das [`Worklet`](/de/docs/Web/API/Worklet). Ein Worklet ist ein Modul, geschrieben in JavaScript, das CSS mit einer der Houdini-APIs erweitert. Sie können ein Beispiel-Worklet auf der Seite [`PaintWorkletGlobalScope.registerPaint()`](/de/docs/Web/API/PaintWorkletGlobalScope/registerPaint) sehen. Sobald ein Worklet registriert ist, können Sie es im CSS wie jeden anderen Wert verwenden. Dies bedeutet, dass Sie selbst dann, wenn Sie kein JavaScript-Entwickler sind, auf Houdini-APIs zugreifen können, indem Sie Worklets verwenden, die andere erstellt haben.

## Referenz

### CSS-At-Regel und Deskriptoren

Die {{CSSxRef("@property")}}-At-Regel ermöglicht es Ihnen, eine erweiterte benutzerdefinierte Eigenschaft zu registrieren.

- {{CSSxRef("@property")}}
- {{CSSxRef("@property/inherits", "vererbt")}}
- {{CSSxRef("@property/initial-value", "Anfangswert")}}
- {{CSSxRef("@property/syntax", "Syntax")}}

### Houdini-API-Referenzen

- [CSS Properties and Values API](/de/docs/Web/API/CSS_Properties_and_Values_API)
- [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API)
- [CSS Painting API](/de/docs/Web/API/CSS_Painting_API)
- [`Worklet`](/de/docs/Web/API/Worklet)-Referenz

### Houdini-Leitfäden

- [Leitfaden zur Properties and Values API](/de/docs/Web/API/CSS_Properties_and_Values_API/guide)
- [Leitfaden zur Typed OM API](/de/docs/Web/API/CSS_Typed_OM_API/Guide)
- [Verwendung der CSS Painting API](/de/docs/Web/API/CSS_Painting_API/Guide)

## Siehe auch

- [Ein praktischer Überblick über CSS Houdini](https://www.smashingmagazine.com/2020/03/practical-overview-css-houdini/)
- [Intelligentere benutzerdefinierte Eigenschaften mit der neuen Houdini-API](https://web.dev/articles/css-props-and-vals)
