---
title: Textuelle Datentypen
slug: Web/CSS/CSS_values_and_units/Textual_data_types
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

Jede CSS-Deklaration besteht aus einem Paar von Eigenschaft und Wert. Der Wert kann je nach Eigenschaft verschiedene Datentypen enthalten, wie ein einzelnes Schlüsselwort, eine Ganzzahl, eine Funktion oder eine Kombination verschiedener Typen; einige Werte haben Einheiten, während andere keine haben. Dieser Leitfaden bietet einen Überblick über die textuellen Datentypen. Für detailliertere Informationen verweisen wir auf die Seite für jeden Wertetyp.

Textdatentypen sind entweder {{cssxref("&lt;string&gt;")}}, eine in Anführungszeichen gesetzte Zeichenfolge, ein {{cssxref("&lt;ident&gt;")}}, ein „CSS-Identifikator“, der eine nicht in Anführungszeichen gesetzte Zeichenfolge ist, oder ein optional in Anführungszeichen gesetzer {{cssxref("url_value", "&lt;url&gt;")}}. Ein `<string>` wird entweder mit einfachen oder doppelten Anführungszeichen gesetzt. CSS-Identifikatoren, die in den Spezifikationen als `<ident>` oder {{cssxref("&lt;custom-ident&gt;")}} aufgeführt sind, müssen ohne Anführungszeichen sein.

In den CSS-Spezifikationen sind Werte, die vom Webentwickler definiert werden können — wie Keyframe-Animationsnamen, Schriftfamiliennamen oder Gitterbereiche — als {{cssxref("&lt;custom-ident&gt;")}}, {{cssxref("&lt;string&gt;")}} oder beides aufgeführt.

Wenn sowohl in Anführungszeichen gesetzte als auch nicht in Anführungszeichen gesetzte benutzerdefinierte Textwerte erlaubt sind, wird die Spezifikation `<custom-ident> | <string>` auflisten, was bedeutet, dass Anführungszeichen optional sind, wie es bei [Keyframe-Animationsnamen] der Fall ist:

```css
@keyframes validIdent {
  /* keyframes go here */
}
@keyframes 'validString' {
  /* keyframes go here */
}
```

Einige Textwerte sind ungültig, wenn sie in Anführungszeichen eingeschlossen sind. Beispielsweise kann der Wert von {{cssxref("grid-area")}} ein `<custom-ident>` sein, daher würden wir, wenn wir einen Gitterbereich namens `content` hätten, diesen ohne Anführungszeichen verwenden:

```css
.item {
  grid-area: content;
}
```

Im Vergleich dazu muss ein Datenwert, der ein {{cssxref("&lt;string&gt;")}} ist, wie ein String-Wert der {{cssxref("content")}}-Eigenschaft, in Anführungszeichen gesetzt werden:

```css
.item::after {
  content: "This is my content.";
}
```

Während Sie im Allgemeinen jeden Namen erstellen können, den Sie möchten, einschließlich der Verwendung von Emojis, darf der Identifikator nicht `none`, `unset`, `initial` oder `inherit` sein, nicht mit einer Ziffer oder zwei Bindestrichen beginnen, und im Allgemeinen möchten Sie nicht, dass es sich um ein anderes vordefiniertes CSS-Schlüsselwort handelt. Siehe die Referenzseiten {{cssxref("&lt;custom-ident&gt;")}} und {{cssxref("&lt;string&gt;")}} für weitere Details.

## Vordefinierte Schlüsselwortwerte

Vordefinierte Schlüsselwörter sind Textwerte, die von der Spezifikation für diese Eigenschaft definiert sind. Diese Schlüsselwörter sind ebenfalls CSS-Identifikatoren und werden daher ohne Anführungszeichen verwendet.

Wenn Sie CSS-Eigenschaftswert-Syntax in einer CSS-Spezifikation oder auf der MDN-Eigenschaftsseite ansehen, werden die zulässigen Schlüsselwörter in der folgenden Form aufgelistet. Die folgenden {{Glossary("enumerated", "aufgezählten")}} Werte sind die vordefinierten Schlüsselwortwerte, die für {{cssxref("float")}} erlaubt sind.

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

Zusätzlich zu den vordefinierten Schlüsselwörtern, die Teil der Spezifikation für eine Eigenschaft sind, akzeptieren alle CSS-Eigenschaften die CSS-weiten oder „globalen“ Eigenschaftswerte {{cssxref("initial")}}, {{cssxref("inherit")}}, {{cssxref("unset")}}, {{cssxref("revert")}} und {{cssxref("revert-layer")}}, die explizit Standardverhaltensweisen angeben.

- {{cssxref("initial")}}
  - : Stellt den als anfänglichen Wert der Eigenschaft spezifizierten Wert dar.
- {{cssxref("inherit")}}
  - : Stellt den berechneten Wert der Eigenschaft am Eltern-Element dar, sofern es vererbt wird.
- {{cssxref("unset")}}
  - : Wirkt entweder als `inherit` oder `initial`, abhängig davon, ob die Eigenschaft vererbt wird oder nicht.
- {{cssxref("revert")}}
  - : Setzt die Eigenschaft auf ihren geerbten Wert zurück, wenn sie von ihrem Elternteil erbt, oder auf den Standardwert, der durch das Stylesheet des Benutzeragenten festgelegt wird (oder durch Benutzerstile, sofern vorhanden).
- {{cssxref("revert-layer")}}
  - : Setzt den Wert einer Eigenschaft in einem [Cascade-Layer](/de/docs/Web/CSS/@layer) auf den Wert der Eigenschaft in einer CSS-Regel zurück, die das Element in einem vorherigen Cascade-Layer matcht. Der Wert der Eigenschaft mit diesem Schlüsselwort wird neu berechnet, als ob keine Regeln auf das Ziel-Element im aktuellen Cascade-Layer angewendet worden wären.

## URLs

Ein {{cssxref("url_value", "&lt;url&gt;")}}-Typ verwendet funktionale Notation, die ein `<string>` akzeptiert, das eine URL ist. Dies kann eine absolute oder eine relative URL sein. Wenn Sie beispielsweise ein Hintergrundbild einfügen möchten, könnten Sie eines der folgenden verwenden:

```css
.box {
  background-image: url("images/my-background.png");
}

.box {
  background-image: url("https://www.exammple.com/images/my-background.png");
}
```

Der Parameter für `url()` kann entweder in Anführungszeichen gesetzt oder nicht gesetzt werden. Wenn er nicht gesetzt ist, wird er als `<url-token>` geparst, was zusätzliche Anforderungen wie das Entkommen bestimmter Zeichen mit sich bringt. Weitere Informationen finden Sie unter {{cssxref("url_value", "&lt;url&gt;")}}.

## Siehe auch

- [Numerische Datentypen](/de/docs/Web/CSS/CSS_values_and_units/Numeric_data_types)
- [CSS-Datentypen](/de/docs/Web/CSS/CSS_values_and_units/CSS_data_types)
- [CSS-Werte und Einheiten](/de/docs/Web/CSS/CSS_values_and_units) Modul
- [Lernen: Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
- [CSS-Kaskade und -Vererbung](/de/docs/Web/CSS/CSS_cascade) Modul
