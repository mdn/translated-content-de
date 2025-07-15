---
title: Textuelle Datentypen
slug: Web/CSS/CSS_Values_and_Units/Textual_data_types
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Jede CSS-Deklaration besteht aus einem Paar von Eigenschaft und Wert. Der Wert kann, je nach Eigenschaft, verschiedene Datentypen umfassen, wie z.B. ein einzelnes Schlüsselwort, eine Ganzzahl, eine Funktion oder eine Kombination von verschiedenen Typen; einige Werte haben Einheiten, andere nicht. Dieser Leitfaden bietet einen Überblick über die textuellen Datentypen. Für detailliertere Informationen zu den einzelnen Wertetypen konsultieren Sie bitte die jeweilige Seite.

Textdatentypen sind entweder {{cssxref("&lt;string&gt;")}}, eine in Anführungszeichen gesetzte Zeichenfolge, ein {{cssxref("&lt;ident&gt;")}}, ein "CSS Identifier", der eine nicht in Anführungszeichen gesetzte Zeichenfolge darstellt, oder ein optional in Anführungszeichen gesetzter {{cssxref("url_value", "&lt;url&gt;")}}. Ein `<string>` wird entweder mit einfachen oder doppelten Anführungszeichen markiert. CSS-Identifikatoren, die in den Spezifikationen als `<ident>` oder {{cssxref("&lt;custom-ident&gt;")}} aufgeführt sind, müssen nicht in Anführungszeichen gesetzt werden.

In den CSS-Spezifikationen sind Werte, die vom Webentwickler definiert werden können – wie beispielsweise Keyframe-Animationsnamen, Schriftfamiliennamen oder Rasterbereiche – als {{cssxref("&lt;custom-ident&gt;")}}, {{cssxref("&lt;string&gt;")}} oder beides aufgeführt.

Wenn sowohl zitierte als auch nicht zitierte benutzerdefinierte Textwerte erlaubt sind, wird die Spezifikation `<custom-ident> | <string>` auflisten, was bedeutet, dass Anführungszeichen optional sind, wie dies bei [Keyframe-Animationsnamen] der Fall ist:

```css
@keyframes validIdent {
  /* keyframes go here */
}
@keyframes 'validString' {
  /* keyframes go here */
}
```

Einige Textwerte sind nicht gültig, wenn sie in Anführungszeichen gesetzt werden. Beispielsweise kann der Wert von {{cssxref("grid-area")}} ein `<custom-ident>` sein, sodass wir einen Rasterbereich namens `content` ohne Anführungszeichen verwenden würden:

```css
.item {
  grid-area: content;
}
```

Im Vergleich dazu muss ein Datentyp, der ein {{cssxref("&lt;string&gt;")}} ist, wie ein Zeichenfolgenwert der {{cssxref("content")}}-Eigenschaft, in Anführungszeichen gesetzt werden:

```css
.item::after {
  content: "This is my content.";
}
```

Sie können im Allgemeinen jeden Namen erstellen, den Sie möchten, einschließlich der Verwendung von Emojis, aber der Identifikator darf nicht `none`, `unset`, `initial` oder `inherit` sein, nicht mit einer Ziffer oder zwei Bindestrichen beginnen, und im Allgemeinen sollten Sie ihn nicht als eines der vordefinierten CSS-Schlüsselwörter verwenden. Weitere Details finden Sie auf den Referenzseiten für {{cssxref("&lt;custom-ident&gt;")}} und {{cssxref("&lt;string&gt;")}}.

## Vordefinierte Schlüsselwortwerte

Vordefinierte Schlüsselwörter sind Textwerte, die in der Spezifikation für diese Eigenschaft definiert sind. Diese Schlüsselwörter sind ebenfalls CSS-Identifier und werden daher ohne Anführungszeichen verwendet.

Beim Betrachten der Syntax für CSS-Eigenschaftswerte in einer CSS-Spezifikation oder auf der MDN-Eigenschaftsseite werden zulässige Schlüsselwörter in der folgenden Form aufgelistet. Die folgenden {{Glossary("enumerated", "aufgezählten")}} Werte sind die vordefinierten Schlüsselwortwerte, die für {{cssxref("float")}} erlaubt sind.

```plain
left | right | none | inline-start | inline-end
```

Solche Werte werden ohne Anführungszeichen verwendet:

```css
.box {
  float: left;
}
```

## CSS-weite Schlüsselwörter

Zusätzlich zu den vordefinierten Schlüsselwörtern, die Teil der Spezifikation für eine Eigenschaft sind, akzeptieren alle CSS-Eigenschaften die CSS-weiten oder "globalen" Eigenschaftswerte {{cssxref("initial")}}, {{cssxref("inherit")}}, {{cssxref("unset")}}, {{cssxref("revert")}} und {{cssxref("revert-layer")}}, die explizit das Standardverhalten spezifizieren.

- {{cssxref("initial")}}
  - : Repräsentiert den Wert, der als anfänglicher Wert der Eigenschaft festgelegt ist.
- {{cssxref("inherit")}}
  - : Repräsentiert den berechneten Wert der Eigenschaft des Elternelements, vorausgesetzt, sie wird vererbt.
- {{cssxref("unset")}}
  - : Wirkt wie entweder `inherit` oder `initial`, abhängig davon, ob die Eigenschaft geerbt wird oder nicht.
- {{cssxref("revert")}}
  - : Setzt die Eigenschaft auf ihren geerbten Wert zurück, wenn sie von ihrem Elternteil erbt, oder auf den Standardwert, der durch das Stylesheet des User-Agents (oder durch Benutzerstile, falls vorhanden) festgelegt wird.
- {{cssxref("revert-layer")}}
  - : Setzt den Wert einer Eigenschaft in einer [Kaskadenschicht](/de/docs/Web/CSS/@layer) auf den Wert der Eigenschaft in einer CSS-Regel zurück, die das Element in einer vorherigen Kaskadenschicht trifft. Der Wert der Eigenschaft mit diesem Schlüsselwort wird neu berechnet, als ob keine Regeln für das Ziel-Element in der aktuellen Kaskadenschicht festgelegt wären.

## URLs

Ein {{cssxref("url_value", "&lt;url&gt;")}}-Typ verwendet funktionale Notation, die ein `<string>` akzeptiert, das eine URL ist. Diese kann eine absolute URL oder eine relative URL sein. Wenn Sie beispielsweise ein Hintergrundbild einfügen möchten, könnten Sie eine der folgenden verwenden:

```css
.box {
  background-image: url("images/my-background.png");
}

.box {
  background-image: url("https://www.exammple.com/images/my-background.png");
}
```

Der Parameter für `url()` kann entweder zitiert oder nicht zitiert sein. Wenn nicht zitiert, wird er als `<url-token>` geparst, der zusätzliche Anforderungen hat, einschließlich des Escapens bestimmter Zeichen. Siehe {{cssxref("url_value", "&lt;url&gt;")}} für weitere Informationen.

## Siehe auch

- [Numerische Datentypen](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types)
- [CSS-Datentypen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types)
- [CSS-Werte und Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units)-Modul
- [Lernen: Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
- [CSS-Kaskade und Vererbung](/de/docs/Web/CSS/CSS_cascade)-Modul
