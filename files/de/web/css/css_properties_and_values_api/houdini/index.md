---
title: CSS Houdini
slug: Web/CSS/CSS_properties_and_values_API/Houdini
l10n:
  sourceCommit: 2a84dea57a0221c582375a28e6960eed7076e442
---

{{CSSRef}}

**CSS Houdini** ist eine Reihe von APIs, die Teile der CSS-Engine freilegen. Dies erleichtert es Entwicklern, Erweiterungen für CSS zu erstellen. Diese Erweiterungen könnten dazu dienen, Funktionen zu polyfillieren, die noch nicht in einem Browser verfügbar sind, neue Möglichkeiten für Layouts zu erforschen oder kreative Rahmen oder andere Effekte hinzuzufügen.

Während viele Houdini-Beispiele die kreativen Möglichkeiten der APIs demonstrieren, gibt es viele praktische Anwendungsfälle. Zum Beispiel können Sie Houdini verwenden, um erweiterte benutzerdefinierte Eigenschaften mit Typprüfung und Standardwerten zu erstellen.

## Einfaches Beispiel

Eine reguläre [CSS-Custom-Eigenschaft](/de/docs/Web/CSS/--*) besteht aus einem Eigenschaftsnamen und einem Wert. Ich könnte daher eine benutzerdefinierte Eigenschaft namens `--background-color` erstellen und erwarten, dass ihr ein Farbwert gegeben wird. Der Wert wird dann im CSS verwendet, als wäre es der Farbwert.

```css
:root {
  --background-color: blue;
}

.box {
  background-color: var(--background-color);
}
```

Im obigen Beispiel gibt es jedoch nichts, was jemanden daran hindert, einen anderen Wert für diese Eigenschaft zu verwenden, vielleicht eine Länge festzulegen. Wenn dies getan wird, hätte alles, wo die Eigenschaft verwendet wird, keine Hintergrundfarbe, da `background-color: 12px` nicht gültig ist. Wenn Browser auf CSS stoßen, das sie nicht als gültig erkennen, verwerfen sie diese Zeile.

Mit {{cssxref("@property")}} können wir jedoch die benutzerdefinierte Eigenschaft mit einer {{CSSxRef("@property/syntax","Syntax")}} von `<color>` deklarieren. Dies zeigt, dass wir möchten, dass diese Eigenschaft einen Wert hat, der eine gültige Farbe ist.

```css
@property --background-color {
  syntax: "<color>";
  inherits: false;
  initial-value: blue;
}
```

## Houdini-Worklets

Ein Merkmal von Houdini ist das [`Worklet`](/de/docs/Web/API/Worklet). Ein Worklet ist ein in JavaScript geschriebenes Modul, das CSS mit einer der Houdini-APIs erweitert. Sie können ein Beispiel-Worklet auf der Seite [`PaintWorkletGlobalScope.registerPaint()`](/de/docs/Web/API/PaintWorkletGlobalScope/registerPaint) sehen. Sobald ein Worklet registriert wurde, können Sie es in CSS wie jeden anderen Wert verwenden. Das bedeutet, dass Sie, selbst wenn Sie kein JavaScript-Entwickler sind, Zugriff auf Houdini-APIs haben können, indem Sie Worklets verwenden, die andere Leute erstellt haben.

## Referenz

### CSS-At-Regel und Deskriptoren

Die {{CSSxRef("@property")}}-At-Regel ermöglicht es Ihnen, eine erweiterte benutzerdefinierte Eigenschaft zu registrieren.

- {{CSSxRef("@property")}}
- {{CSSxRef("@property/inherits","erbt")}}
- {{CSSxRef("@property/initial-value","Anfangswert")}}
- {{CSSxRef("@property/syntax","Syntax")}}

### Houdini-API-Referenzen

- [CSS Properties and Values API](/de/docs/Web/API/CSS_Properties_and_Values_API)
- [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API)
- [CSS Painting API](/de/docs/Web/API/CSS_Painting_API)
- [`Worklet`](/de/docs/Web/API/Worklet) Referenz

### Houdini-Leitfäden

- [Properties and Values API Guide](/de/docs/Web/API/CSS_Properties_and_Values_API/guide)
- [Typed OM API Guide](/de/docs/Web/API/CSS_Typed_OM_API/Guide)
- [Using the CSS Painting API](/de/docs/Web/API/CSS_Painting_API/Guide)

## Siehe auch

- [Ein praktischer Überblick über CSS Houdini](https://www.smashingmagazine.com/2020/03/practical-overview-css-houdini/)
- [Intelligentere benutzerdefinierte Eigenschaften mit der neuen Houdini-API](https://web.dev/articles/css-props-and-vals)
