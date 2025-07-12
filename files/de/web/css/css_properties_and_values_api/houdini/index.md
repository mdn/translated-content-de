---
title: CSS Houdini
slug: Web/CSS/CSS_properties_and_values_API/Houdini
l10n:
  sourceCommit: db01d0c8b4cbf8a4467b1db65e17f6724d0ce710
---

{{CSSRef}}

**CSS Houdini** ist eine Reihe von APIs, die Teile der CSS-Engine zugänglich machen. Dies erleichtert Entwicklern das Erstellen von Erweiterungen für CSS. Diese Erweiterungen können dazu dienen, Funktionen zu polyfillen, die in einem Browser noch nicht verfügbar sind, neue Layoutmethoden auszuprobieren oder kreative Rahmen oder andere Effekte hinzuzufügen.

Während viele Houdini-Beispiele die kreativen Möglichkeiten der APIs aufzeigen, gibt es viele praktische Anwendungsfälle. Zum Beispiel können Sie Houdini verwenden, um erweiterte benutzerdefinierte Eigenschaften mit Typüberprüfung und Standardwerten zu erstellen.

## Einfaches Beispiel

Eine reguläre [CSS-benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/--*) besteht aus einem Eigenschaftsnamen und einem Wert. Daher könnte ich eine benutzerdefinierte Eigenschaft namens `--background-color` erstellen und erwarten, dass ihr ein Farbwert zugewiesen wird. Der Wert wird dann im CSS verwendet, als ob es der Farbwert wäre.

```css
:root {
  --background-color: blue;
}

.box {
  background-color: var(--background-color);
}
```

Im obigen Beispiel gibt es jedoch nichts, was jemanden daran hindert, einen anderen Wert für diese Eigenschaft zu verwenden, möglicherweise indem sie auf eine Länge gesetzt wird. Hat man dies getan, würde überall dort, wo die Eigenschaft verwendet wird, keine Hintergrundfarbe vorhanden sein, da `background-color: 12px` nicht gültig ist. Wenn Browser auf CSS stoßen, das sie nicht als gültig erkennen, werfen sie diese Zeile weg.

Mit dem {{cssxref("@property")}} At-Zeichen können wir jedoch die benutzerdefinierte Eigenschaft mit einer {{CSSxRef("@property/syntax","Syntax")}} von `<color>` deklarieren. Dies zeigt, dass wir für diese Eigenschaft einen Wert benötigen, der eine gültige Farbe ist.

```css
@property --background-color {
  syntax: "<color>";
  inherits: false;
  initial-value: blue;
}
```

## Houdini Worklets

Ein Merkmal von Houdini ist das [`Worklet`](/de/docs/Web/API/Worklet). Ein Worklet ist ein Modul, das in JavaScript geschrieben ist und CSS mithilfe einer der Houdini-APIs erweitert. Sie können ein Beispiel-Worklet auf der Seite [`PaintWorkletGlobalScope.registerPaint()`](/de/docs/Web/API/PaintWorkletGlobalScope/registerPaint) sehen. Sobald ein Worklet registriert wurde, können Sie es in CSS genauso verwenden wie jeden anderen Wert. Das bedeutet, dass Sie, selbst wenn Sie kein JavaScript-Entwickler sind, die Houdini-APIs verwenden können, indem Sie die von anderen erstellten Worklets nutzen.

## Referenz

### CSS At-Regel und Deskriptoren

Die {{CSSxRef("@property")}} At-Regel ermöglicht es Ihnen, eine erweiterte benutzerdefinierte Eigenschaft zu registrieren.

- {{CSSxRef("@property")}}
- {{CSSxRef("@property/inherits","inherits")}}
- {{CSSxRef("@property/initial-value","initial-value")}}
- {{CSSxRef("@property/syntax","syntax")}}

### Houdini API Referenzen

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
