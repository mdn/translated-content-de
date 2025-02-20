---
title: Textuelle Datentypen
slug: Web/CSS/CSS_Values_and_Units/Textual_data_types
l10n:
  sourceCommit: 83dd1960e946e82f2cf830ac5df5703df501f73b
---

{{CSSRef}}

Jede CSS-Deklaration besteht aus einem Paar von Eigenschaften/Werten. Der Wert kann je nach Eigenschaft verschiedene Datentypen enthalten, wie ein einzelnes Schlüsselwort, eine Ganzzahl, eine Funktion oder eine Kombination verschiedener Typen; einige Werte haben Einheiten, während andere keine haben. Dieser Leitfaden bietet einen Überblick über die textuellen Datentypen. Für detailliertere Informationen zu jedem Werttyp verweisen wir auf die jeweilige Seite.

Textuelle Datentypen sind entweder {{cssxref("&lt;string&gt;")}}, eine in Anführungszeichen gesetzte Zeichenfolge, ein {{cssxref("&lt;ident&gt;")}}, ein "CSS Identifier", der eine nicht in Anführungszeichen gesetzte Zeichenfolge ist, oder ein optional in Anführungszeichen gesetztes {{cssxref("url_value", "&lt;url&gt;")}}. Ein `<string>` wird entweder mit einfachen oder doppelten Anführungszeichen versehen. CSS-Bezeichner, in den Spezifikationen als `<ident>` oder {{cssxref("&lt;custom-ident&gt;")}} aufgeführt, müssen ohne Anführungszeichen sein.

In CSS-Spezifikationen sind Werte, die vom Webentwickler definiert werden können — wie Namen von Keyframe-Animationen, Schriftfamiliennamen oder Rasterbereiche — als {{cssxref("&lt;custom-ident&gt;")}}, {{cssxref("&lt;string&gt;")}} oder beides aufgeführt.

Wenn sowohl in Anführungszeichen gesetzte als auch nicht in Anführungszeichen gesetzte, vom Benutzer definierte Textwerte erlaubt sind, wird die Spezifikation `<custom-ident> | <string>` auflisten, was bedeutet, dass Anführungszeichen optional sind, wie es bei [Namen von Keyframe-Animationen] der Fall ist:

```css
@keyframe validIdent {
  /* keyframes go here */
}
@keyframe 'validString' {
  /* keyframes go here */
}
```

Einige Textwerte sind nicht gültig, wenn sie in Anführungszeichen gesetzt sind. Zum Beispiel kann der Wert von {{cssxref("grid-area")}} ein `<custom-ident>` sein, sodass wir, wenn wir einen Rasterbereich namens `content` hätten, diesen ohne Anführungszeichen verwenden würden:

```css
.item {
  grid-area: content;
}
```

Im Vergleich dazu muss ein Datentyp, der ein {{cssxref("&lt;string&gt;")}} ist, wie ein Stringwert der {{cssxref("content")}}-Eigenschaft, in Anführungszeichen gesetzt werden:

```css
.item::after {
  content: "This is my content.";
}
```

Während Sie im Allgemeinen jeden beliebigen Namen erstellen können, einschließlich der Verwendung von Emojis, darf der Bezeichner nicht `none`, `unset`, `initial` oder `inherit` sein, nicht mit einer Ziffer oder zwei Bindestrichen beginnen, und im Allgemeinen möchten Sie nicht, dass es sich um ein anderes vordefiniertes CSS-Schlüsselwort handelt. Siehe die Referenzseiten zu {{cssxref("&lt;custom-ident&gt;")}} und {{cssxref("&lt;string&gt;")}} für weitere Details.

## Vordefinierte Schlüsselwortwerte

Vordefinierte Schlüsselwörter sind Textwerte, die von der Spezifikation für diese Eigenschaft definiert sind. Diese Schlüsselwörter sind ebenfalls CSS-Bezeichner und werden daher ohne Anführungszeichen verwendet.

Wenn Sie die Syntax der CSS-Eigenschaftswerte in einer CSS-Spezifikation oder auf der MDN-Eigenschaftsseite ansehen, werden zulässige Schlüsselwörter in folgender Form aufgelistet. Die folgenden {{Glossary("enumerated", "aufgezählten")}} Werte sind die vordefinierten Schlüsselwortwerte, die für {{cssxref("float")}} erlaubt sind.

```plain
left | right | none | inline-start | inline-end
```

Solche Werte werden ohne Anführungszeichen verwendet:

```css
.box {
  float: left;
}
```

## CSS-weite Werte

Zusätzlich zu den vordefinierten Schlüsselwörtern, die Teil der Spezifikation für eine Eigenschaft sind, akzeptieren alle CSS-Eigenschaften die CSS-weiten oder "globalen" Eigenschaftswerte {{cssxref("initial")}}, {{cssxref("inherit")}}, {{cssxref("unset")}}, {{cssxref("revert")}} und {{cssxref("revert-layer")}}, die explizit das Standardverhalten spezifizieren.

- {{cssxref("initial")}}
  - : Repräsentiert den als Anfangswert der Eigenschaft festgelegten Wert.
- {{cssxref("inherit")}}
  - : Repräsentiert den berechneten Wert der Eigenschaft beim übergeordneten Element, vorausgesetzt, er wird vererbt.
- {{cssxref("unset")}}
  - : Wirkt entweder als `inherit` oder `initial`, abhängig davon, ob die Eigenschaft vererbt wird oder nicht.
- {{cssxref("revert")}}
  - : Setzt die Eigenschaft auf ihren geerbten Wert zurück, wenn sie von ihrem Elternteil erbt, oder auf den Standardwert, der durch das Stylesheet des Benutzeragenten oder benutzerdefinierte Stile festgelegt wird (falls vorhanden).
- {{cssxref("revert-layer")}}
  - : Setzt den Wert einer Eigenschaft in einer [Kaskadenschicht](/de/docs/Web/CSS/@layer) auf den Wert der Eigenschaft in einer CSS-Regel zurück, die auf das Element in einer vorherigen Kaskadenschicht angewendet wurde. Der Wert der Eigenschaft mit diesem Schlüsselwort wird neu berechnet, als ob keine Regeln in der aktuellen Kaskadenschicht auf das Zielelement angewendet wurden.

## URLs

Ein {{cssxref("url_value", "&lt;url&gt;")}}-Typ verwendet funktionale Notation, die ein `<string>` akzeptiert, das eine URL ist. Dies kann eine absolute URL oder eine relative URL sein. Wenn Sie beispielsweise ein Hintergrundbild einfügen möchten, könnten Sie entweder der folgenden Schritte verwenden:

```css
.box {
  background-image: url("images/my-background.png");
}

.box {
  background-image: url("https://www.exammple.com/images/my-background.png");
}
```

Der Parameter für `url()` kann entweder in Anführungszeichen gesetzt oder nicht in Anführungszeichen gesetzt sein. Wenn er nicht in Anführungszeichen gesetzt ist, wird er als `<url-token>` analysiert, das zusätzliche Anforderungen inklusive der Flucht bestimmter Zeichen hat. Siehe {{cssxref("url_value", "&lt;url&gt;")}} für weitere Informationen.

## Siehe auch

- [Numerische Datentypen](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types)
- [CSS-Datentypen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types)
- [CSS-Werte und Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units) Modul
- [Lernen: Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
- [CSS-Kaskade und Vererbung](/de/docs/Web/CSS/CSS_cascade) Modul
