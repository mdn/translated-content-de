---
title: CSS Houdini
slug: Web/CSS/Guides/Properties_and_values_API/Houdini
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

**CSS Houdini** ist eine Sammlung von APIs, die Teile der CSS-Engine zugänglich machen. Dies erleichtert es Entwicklern, Erweiterungen für CSS zu erstellen. Diese Erweiterungen könnten dazu dienen, Features nachzubilden, die in einem Browser noch nicht verfügbar sind, neue Methoden für Layouts zu experimentieren oder kreative Rahmen oder andere Effekte hinzuzufügen.

Obwohl viele Houdini-Beispiele die kreativen Möglichkeiten der APIs demonstrieren, gibt es viele praktische Anwendungsfälle. Zum Beispiel können Sie Houdini verwenden, um erweiterte benutzerdefinierte Eigenschaften mit Typprüfung und Standardwerten zu erstellen.

## Einfaches Beispiel

Eine reguläre [benutzerdefinierte CSS-Eigenschaft](/de/docs/Web/CSS/Reference/Properties/--*) besteht aus einem Eigenschaftsnamen und einem Wert. Daher könnte ich eine benutzerdefinierte Eigenschaft namens `--background-color` erstellen und erwarten, dass ihr ein Farbwert zugewiesen wird. Der Wert wird dann im CSS so verwendet, als wäre es der Farbwert.

```css
:root {
  --background-color: blue;
}

.box {
  background-color: var(--background-color);
}
```

Im obigen Beispiel gibt es jedoch nichts, was jemanden daran hindert, einen anderen Wert für diese Eigenschaft zu verwenden, vielleicht indem er sie auf eine Länge setzt. Wenn das geschehen ist, würde überall dort, wo die Eigenschaft verwendet wird, keine Hintergrundfarbe vorhanden sein, da `background-color: 12px` nicht gültig ist. Wenn Browser auf CSS stoßen, das sie nicht als gültig erkennen, wird diese Zeile verworfen.

Mit {{cssxref("@property")}} können wir jedoch die benutzerdefinierte Eigenschaft mit einer {{CSSxRef("@property/syntax","Syntax")}} von `<color>` deklarieren. Dies zeigt, dass wir möchten, dass diese Eigenschaft einen Wert hat, der eine gültige Farbe ist.

```css
@property --background-color {
  syntax: "<color>";
  inherits: false;
  initial-value: blue;
}
```

## Houdini-Worklets

Ein Merkmal von Houdini sind die [`Worklets`](/de/docs/Web/API/Worklet). Ein Worklet ist ein Modul, geschrieben in JavaScript, das CSS mittels einer der Houdini-APIs erweitert. Ein Beispiel-Worklet finden Sie auf der Seite [`PaintWorkletGlobalScope.registerPaint()`](/de/docs/Web/API/PaintWorkletGlobalScope/registerPaint). Sobald ein Worklet registriert wurde, können Sie es in CSS genauso wie jeden anderen Wert verwenden. Das bedeutet, dass Sie selbst wenn Sie kein JavaScript-Entwickler sind, durch die Verwendung von Worklets, die andere erstellt haben, Zugang zu Houdini APIs erhalten können.

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

### Houdini-Leitfäden

- [Properties and Values API Guide](/de/docs/Web/API/CSS_Properties_and_Values_API/guide)
- [Typed OM API Guide](/de/docs/Web/API/CSS_Typed_OM_API/Guide)
- [Verwendung der CSS Painting API](/de/docs/Web/API/CSS_Painting_API/Guide)

## Siehe auch

- [Ein praktischer Überblick über CSS Houdini](https://www.smashingmagazine.com/2020/03/practical-overview-css-houdini/)
- [Intelligentere benutzerdefinierte Eigenschaften mit der neuen Houdini API](https://web.dev/articles/css-props-and-vals)
