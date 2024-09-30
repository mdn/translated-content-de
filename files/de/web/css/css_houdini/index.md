---
title: CSS Houdini
slug: Web/CSS/CSS_Houdini
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{CSSRef}}

**CSS Houdini** ist eine Sammlung von APIs, die Teile der CSS-Engine zugänglich machen. Das erleichtert Entwicklern das Erstellen von Erweiterungen für CSS. Diese Erweiterungen können dazu verwendet werden, Funktionen zu polyfillen, die in einem Browser noch nicht verfügbar sind, mit neuen Layoutmethoden zu experimentieren oder kreative Ränder und andere Effekte hinzuzufügen.

Während viele Houdini-Beispiele die kreativen Möglichkeiten der APIs demonstrieren, gibt es viele praktische Anwendungsfälle. Zum Beispiel können Sie Houdini verwenden, um erweiterte benutzerdefinierte Eigenschaften mit Typüberprüfung und Standardwerten zu erstellen.

## Einfaches Beispiel

Eine gewöhnliche [CSS-Benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/--*) besteht aus einem Eigenschaftsnamen und einem Wert. Daher könnte ich eine benutzerdefinierte Eigenschaft namens `--background-color` erstellen und erwarten, dass ihr ein Farbwert zugewiesen wird. Der Wert wird dann in der CSS verwendet, als wäre es der Farbwert.

```css
:root {
  --background-color: blue;
}

.box {
  background-color: var(--background-color);
}
```

Im obigen Beispiel gibt es jedoch nichts, was jemanden davon abhält, einen anderen Wert für diese Eigenschaft zu verwenden, vielleicht, indem er sie auf eine Länge einstellt. In diesem Fall würde überall, wo die Eigenschaft verwendet wird, keine Hintergrundfarbe vorhanden sein, da `background-color: 12px` nicht gültig ist. Wenn Browser auf CSS stoßen, das sie nicht als gültig erkennen, verwerfen sie diese Zeile.

Verwenden Sie jedoch {{cssxref("@property")}}, können wir die benutzerdefinierte Eigenschaft mit einer {{CSSxRef("@property/syntax","Syntax")}} von `<color>` deklarieren. Dies zeigt, dass wir für diese Eigenschaft einen Wert benötigen, der eine gültige Farbe ist.

```css
@property --background-color {
  syntax: "<color>";
  inherits: false;
  initial-value: blue;
}
```

## Houdini Worklets

Ein Merkmal von Houdini ist der [`Worklet`](/de/docs/Web/API/Worklet). Ein Worklet ist ein Modul, das in JavaScript geschrieben ist und CSS unter Verwendung einer der Houdini-APIs erweitert. Ein Beispiel-Worklet finden Sie auf der Seite [`PaintWorkletGlobalScope.registerPaint()`](/de/docs/Web/API/PaintWorkletGlobalScope/registerPaint). Sobald ein Worklet registriert wurde, können Sie es in CSS wie jeden anderen Wert verwenden. Das bedeutet, dass selbst wenn Sie kein JavaScript-Entwickler sind, Sie auf Houdini-APIs zugreifen können, indem Sie von anderen erstellte Worklets verwenden.

Die Website [Houdini.how](https://houdini.how/) bietet eine Reihe von Worklets, die Sie auf Ihrer eigenen Seite ausprobieren können.

## Referenz

### CSS-At-Regel und Deskriptoren

Die {{CSSxRef("@property")}}-At-Regel ermöglicht es Ihnen, eine erweiterte benutzerdefinierte Eigenschaft zu registrieren.

- {{CSSxRef("@property")}}
- {{CSSxRef("@property/inherits","inherits")}}
- {{CSSxRef("@property/initial-value","initial-value")}}
- {{CSSxRef("@property/syntax","Syntax")}}

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
- [Intelligentere benutzerdefinierte Eigenschaften mit der neuen Houdini-API](https://web.dev/articles/css-props-and-vals)
