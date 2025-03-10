---
title: CSS Houdini
slug: Web/CSS/CSS_properties_and_values_API/Houdini
l10n:
  sourceCommit: 2d2f0eecc977b34f20dc4d456bd0fe2f28b0e54d
---

{{CSSRef}}

**CSS Houdini** ist eine Reihe von APIs, die Teile der CSS-Engine zugänglich machen. Dadurch wird es Entwicklern erleichtert, Erweiterungen für CSS zu erstellen. Diese Erweiterungen können dazu dienen, Funktionen zu polyfillen, die in einem Browser noch nicht verfügbar sind, mit neuen Layoutmöglichkeiten zu experimentieren oder kreative Rahmen oder andere Effekte hinzuzufügen.

Während viele Houdini-Beispiele die kreativen Möglichkeiten der APIs aufzeigen, gibt es zahlreiche praktische Anwendungsfälle. Zum Beispiel kann Houdini verwendet werden, um erweiterte benutzerdefinierte Eigenschaften mit Typüberprüfung und Standardwerten zu erstellen.

## Einfaches Beispiel

Eine reguläre [CSS-Benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/--*) besteht aus einem Eigenschaftsnamen und einem Wert. Ich könnte daher eine benutzerdefinierte Eigenschaft namens `--background-color` erstellen und erwarten, dass ihr ein Farbwert zugewiesen wird. Der Wert wird dann im CSS so verwendet, als wäre er der Farbwert.

```css
:root {
  --background-color: blue;
}

.box {
  background-color: var(--background-color);
}
```

Im obigen Beispiel gibt es jedoch nichts, was jemanden davon abhält, einen anderen Wert für diese Eigenschaft zu verwenden und ihn möglicherweise auf eine Länge einzustellen. Wenn dies geschieht, hätte überall dort, wo die Eigenschaft verwendet wird, keine Hintergrundfarbe, da `background-color: 12px` nicht gültig ist. Wenn Browser auf CSS stoßen, das sie nicht als gültig erkennen, verwerfen sie diese Zeile.

Mit {{cssxref("@property")}} können wir jedoch die benutzerdefinierte Eigenschaft mit einer {{CSSxRef("@property/syntax","Syntax")}} von `<color>` deklarieren. Dies zeigt, dass wir für diese Eigenschaft einen Wert benötigen, der eine gültige Farbe ist.

```css
@property --background-color {
  syntax: "<color>";
  inherits: false;
  initial-value: blue;
}
```

## Houdini-Worklets

Ein Merkmal von Houdini ist das [`Worklet`](/de/docs/Web/API/Worklet). Ein Worklet ist ein Modul, das in JavaScript geschrieben ist und CSS unter Verwendung einer der Houdini-APIs erweitert. Ein Beispiel für ein Worklet können Sie auf der Seite [`PaintWorkletGlobalScope.registerPaint()`](/de/docs/Web/API/PaintWorkletGlobalScope/registerPaint) sehen. Sobald ein Worklet registriert ist, können Sie es in CSS wie jeden anderen Wert verwenden. Das bedeutet, dass selbst wenn Sie kein JavaScript-Entwickler sind, Sie auf Houdini-APIs zugreifen können, indem Sie Worklets verwenden, die andere erstellt haben.

## Referenz

### CSS-At-Regel und Deskriptoren

Die {{CSSxRef("@property")}} At-Regel ermöglicht es Ihnen, eine erweiterte benutzerdefinierte Eigenschaft zu registrieren.

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
- [A Practical Overview of CSS Houdini](https://www.smashingmagazine.com/2020/03/practical-overview-css-houdini/)
- [Intelligentere benutzerdefinierte Eigenschaften mit Houdinis neuer API](https://web.dev/articles/css-props-and-vals)
