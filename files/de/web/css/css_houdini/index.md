---
title: CSS Houdini
slug: Web/CSS/CSS_Houdini
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{CSSRef}}

**CSS Houdini** ist eine Sammlung von APIs, die Teile der CSS-Engine zugänglich machen. Dies erleichtert Entwicklern die Erstellung von Erweiterungen für CSS. Diese Erweiterungen können dazu dienen, Funktionen zu polyfillen, die in einem Browser noch nicht verfügbar sind, mit neuen Layoutmethoden zu experimentieren oder kreative Rahmen oder andere Effekte hinzuzufügen.

Obwohl viele Houdini-Beispiele die kreativen Möglichkeiten der APIs aufzeigen, gibt es auch viele praktische Anwendungsfälle. Zum Beispiel können Sie Houdini verwenden, um erweiterte benutzerdefinierte Eigenschaften mit Typüberprüfung und Standardwerten zu erstellen.

## Einfaches Beispiel

Eine reguläre [CSS-Benutzereigenschaft](/de/docs/Web/CSS/--*) besteht aus einem Eigenschaftsnamen und einem Wert. Daher könnte ich eine benutzerdefinierte Eigenschaft namens `--background-color` erstellen und davon ausgehen, dass ihr ein Farbwert zugewiesen wird. Der Wert wird dann im CSS verwendet, als wäre es der Farbwert.

```css
:root {
  --background-color: blue;
}

.box {
  background-color: var(--background-color);
}
```

Im obigen Beispiel gibt es jedoch nichts, was jemanden daran hindert, einen anderen Wert für diese Eigenschaft zu verwenden, vielleicht, indem er sie auf eine Länge setzt. Geschieht dies, würde überall dort, wo die Eigenschaft verwendet wird, keine Hintergrundfarbe vorhanden sein, da `background-color: 12px` nicht gültig ist. Wenn Browser auf CSS stoßen, das sie nicht als gültig erkennen, ignorieren sie diese Zeile.

Wenn Sie jedoch {{cssxref("@property")}} verwenden, können Sie die benutzerdefinierte Eigenschaft mit einer {{CSSxRef("@property/syntax","Syntax")}} von `<color>` deklarieren. Dies zeigt, dass wir dieser Eigenschaft einen Wert zuweisen müssen, der eine gültige Farbe ist.

```css
@property --background-color {
  syntax: "<color>";
  inherits: false;
  initial-value: blue;
}
```

## Houdini Worklets

Ein Merkmal von Houdini ist der {{domxref("Worklet")}}. Ein Worklet ist ein Modul, geschrieben in JavaScript, das CSS mit einer der Houdini-APIs erweitert. Sie können ein Beispiel-Worklet auf der Seite {{domxref("PaintWorkletGlobalScope.registerPaint()")}} sehen. Sobald ein Worklet registriert ist, können Sie es in CSS wie jeden anderen Wert verwenden. Das bedeutet, dass Sie, auch wenn Sie kein JavaScript-Entwickler sind, Zugriff auf Houdini-APIs haben können, indem Sie Worklets verwenden, die andere erstellt haben.

Die Website [Houdini.how](https://houdini.how/) bietet eine Reihe von Worklets, die Sie auf Ihrer eigenen Seite ausprobieren können.

## Referenz

### CSS-Regel und Deskriptoren

Die {{CSSxRef("@property")}}-Regel ermöglicht es Ihnen, eine erweiterte benutzerdefinierte Eigenschaft zu registrieren.

- {{CSSxRef("@property")}}
- {{CSSxRef("@property/inherits","inherits")}}
- {{CSSxRef("@property/initial-value","initial-value")}}
- {{CSSxRef("@property/syntax","syntax")}}

### Houdini API Referenzen

- [CSS Eigenschaften und Werte API](/de/docs/Web/API/CSS_Properties_and_Values_API)
- [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API)
- [CSS Painting API](/de/docs/Web/API/CSS_Painting_API)
- {{domxref("Worklet")}} Referenz

### Houdini Leitfäden

- [Eigenschaften und Werte API Leitfaden](/de/docs/Web/API/CSS_Properties_and_Values_API/guide)
- [Typed OM API Leitfaden](/de/docs/Web/API/CSS_Typed_OM_API/Guide)
- [Verwendung der CSS Painting API](/de/docs/Web/API/CSS_Painting_API/Guide)

## Externe Ressourcen

- [Interaktive Einführung in Houdini](https://houdini.glitch.me/)
- [Ein praktischer Überblick über CSS Houdini](https://www.smashingmagazine.com/2020/03/practical-overview-css-houdini/)
- [Intelligentere benutzerdefinierte Eigenschaften mit Houdinis neuer API](https://web.dev/articles/css-props-and-vals)
