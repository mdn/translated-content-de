---
title: CSS Houdini
slug: Web/CSS/CSS_Houdini
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{CSSRef}}

**CSS Houdini** ist eine Gruppe von APIs, die Teile der CSS-Engine zugänglich machen. Dadurch wird es Entwicklern erleichtert, Erweiterungen für CSS zu erstellen. Diese Erweiterungen könnten genutzt werden, um Funktionen zu polyfillen, die in einem Browser noch nicht verfügbar sind, neue Layoutmethoden auszuprobieren oder kreative Rahmen oder andere Effekte hinzuzufügen.

Obwohl viele Houdini-Beispiele die kreativen Möglichkeiten der APIs zeigen, gibt es viele praktische Anwendungsfälle. Zum Beispiel können Sie Houdini verwenden, um erweiterte benutzerdefinierte Eigenschaften mit Typüberprüfung und Standardwerten zu erstellen.

## Einfaches Beispiel

Eine reguläre [CSS benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/--*) besteht aus einem Eigenschaftsnamen und einem Wert. Daher könnte ich eine benutzerdefinierte Eigenschaft namens `--background-color` erstellen und erwarten, dass ihr ein Farbwert zugewiesen wird. Der Wert wird dann im CSS als wäre es der Farbwert verwendet.

```css
:root {
  --background-color: blue;
}

.box {
  background-color: var(--background-color);
}
```

In dem obigen Beispiel gibt es jedoch nichts, was jemanden daran hindert, einen anderen Wert für diese Eigenschaft zu verwenden, eventuell eine Länge festzulegen. Wird dies getan, hätte jede Verwendung dieser Eigenschaft keine Hintergrundfarbe, da `background-color: 12px` nicht gültig ist. Wenn Browser auf nicht anerkanntes CSS stoßen, verwerfen sie diese Zeile.

Mit {{cssxref("@property")}} können wir die benutzerdefinierte Eigenschaft jedoch mit einer {{CSSxRef("@property/syntax","Syntax")}} von `<color>` deklarieren. Dies zeigt, dass wir benötigen, dass diese Eigenschaft einen Wert hat, der eine gültige Farbe ist.

```css
@property --background-color {
  syntax: "<color>";
  inherits: false;
  initial-value: blue;
}
```

## Houdini Worklets

Ein Merkmal von Houdini ist der [`Worklet`](/de/docs/Web/API/Worklet). Ein Worklet ist ein Modul, geschrieben in JavaScript, das CSS mit einer der Houdini APIs erweitert. Ein Beispiel-Worklet finden Sie auf der Seite [`PaintWorkletGlobalScope.registerPaint()`](/de/docs/Web/API/PaintWorkletGlobalScope/registerPaint). Sobald ein Worklet registriert ist, können Sie es in CSS wie jeden anderen Wert verwenden. Das bedeutet, dass Sie selbst dann, wenn Sie kein JavaScript-Entwickler sind, Zugang zu den Houdini APIs haben, indem Sie die Worklets verwenden, die andere erstellt haben.

Die Website [Houdini.how](https://houdini.how/) bietet eine Reihe von Worklets, die Sie auf Ihrer eigenen Seite ausprobieren können.

## Referenz

### CSS-Regelwerk und Deskriptoren

Die {{CSSxRef("@property")}} Regelwerk ermöglicht es Ihnen, eine erweiterte benutzerdefinierte Eigenschaft zu registrieren.

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

- [Properties and Values API Leitfaden](/de/docs/Web/API/CSS_Properties_and_Values_API/guide)
- [Typed OM API Leitfaden](/de/docs/Web/API/CSS_Typed_OM_API/Guide)
- [Using the CSS Painting API](/de/docs/Web/API/CSS_Painting_API/Guide)

## Externe Ressourcen

- [Interaktive Einführung zu Houdini](https://houdini.glitch.me/)
- [Ein praktischer Überblick über CSS Houdini](https://www.smashingmagazine.com/2020/03/practical-overview-css-houdini/)
- [Intelligentere benutzerdefinierte Eigenschaften mit Houdinis neuer API](https://web.dev/articles/css-props-and-vals)
