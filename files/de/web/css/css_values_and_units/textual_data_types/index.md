---
title: Textbasierte Datentypen
slug: Web/CSS/CSS_Values_and_Units/Textual_data_types
l10n:
  sourceCommit: c4c42a1573a65a808f085999a4d8d97199e142d1
---

{{CSSRef}}

Jede CSS-Deklaration besteht aus einem Eigenschafts-/Wertpaar. Der Wert kann je nach Eigenschaft verschiedene Datentypen enthalten, wie z.B. ein einzelnes Schlüsselwort, eine Ganzzahl, eine Funktion oder eine Kombination aus verschiedenen Typen; einige Werte haben Einheiten, während andere keine haben. Dieser Leitfaden bietet einen Überblick über die textbasierten Datentypen. Weitere detaillierte Informationen finden Sie auf der Seite für jeden Werttyp.

Textdatentypen sind entweder {{cssxref("&lt;string&gt;")}}, eine in Anführungszeichen gesetzte Zeichenfolge, ein {{cssxref("&lt;ident&gt;")}}, ein "CSS-Identifier", der eine nicht in Anführungszeichen gesetzte Zeichenfolge ist, oder ein optional in Anführungszeichen gesetzter {{cssxref("url_value", "&lt;url&gt;")}}. Ein `<string>` wird entweder mit einfachen oder doppelten Anführungszeichen zitiert. CSS-Identifikatoren, die in den Spezifikationen als `<ident>` oder {{cssxref("&lt;custom-ident&gt;")}} aufgelistet sind, müssen nicht in Anführungszeichen stehen.

In CSS-Spezifikationen werden Werte, die vom Webentwickler definiert werden können — wie z.B. Namen von Keyframe-Animationen, Schriftfamiliennamen oder Rasterbereiche — als {{cssxref("&lt;custom-ident&gt;")}}, {{cssxref("&lt;string&gt;")}} oder beides aufgelistet.

Wenn sowohl zitierte als auch nicht zitierte, benutzerdefinierte Textwerte erlaubt sind, wird die Spezifikation `<custom-ident> | <string>` auflisten, was bedeutet, dass Anführungszeichen optional sind, wie es bei [Namen von Keyframe-Animationen] der Fall ist:

```css
@keyframes validIdent {
  /* keyframes go here */
}
@keyframes 'validString' {
  /* keyframes go here */
}
```

Einige Textwerte sind nicht gültig, wenn sie in Anführungszeichen gesetzt werden. Zum Beispiel kann der Wert von {{cssxref("grid-area")}} ein `<custom-ident>` sein, also wenn wir einen Rasterbereich namens `content` hätten, würden wir ihn ohne Anführungszeichen verwenden:

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

Während Sie im Allgemeinen jeden Namen erstellen können, den Sie möchten, einschließlich der Verwendung von Emojis, darf der Identifikator nicht `none`, `unset`, `initial` oder `inherit` sein, nicht mit einer Ziffer oder zwei Bindestrichen beginnen und im Allgemeinen nicht einem anderen vordefinierten CSS-Schlüsselwort gleichen. Siehe die Referenzseiten zu {{cssxref("&lt;custom-ident&gt;")}} und {{cssxref("&lt;string&gt;")}} für weitere Details.

## Vordefinierte Schlüsselwortwerte

Vordefinierte Schlüsselwörter sind Textwerte, die in der Spezifikation für diese Eigenschaft definiert sind. Diese Schlüsselwörter sind ebenfalls CSS-Identifikatoren und werden daher ohne Anführungszeichen verwendet.

Wenn Sie die Syntax der CSS-Eigenschaftswerte in einer CSS-Spezifikation oder auf der MDN-Eigenschaftsseite betrachten, werden die zulässigen Schlüsselwörter in folgender Form aufgelistet. Die folgenden {{Glossary("enumerated", "enumerierten")}} Werte sind die vordefinierten Schlüsselwortwerte, die für {{cssxref("float")}} erlaubt sind.

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

Neben den vordefinierten Schlüsselwörtern, die Teil der Spezifikation für eine Eigenschaft sind, akzeptieren alle CSS-Eigenschaften die CSS-weiten oder "globalen" Eigenschaftswerte {{cssxref("initial")}}, {{cssxref("inherit")}}, {{cssxref("unset")}}, {{cssxref("revert")}} und {{cssxref("revert-layer")}}, die explizit das Defaultverhalten angeben.

- {{cssxref("initial")}}
  - : Repräsentiert den für die Eigenschaft spezifizierten Anfangswert.
- {{cssxref("inherit")}}
  - : Repräsentiert den berechneten Wert der Eigenschaft am Elternelement, sofern sie vererbt wird.
- {{cssxref("unset")}}
  - : Wirkt entweder als `inherit` oder `initial`, je nachdem, ob die Eigenschaft vererbt wird oder nicht.
- {{cssxref("revert")}}
  - : Setzt die Eigenschaft auf ihren geerbten Wert zurück, wenn sie vom Elternelement geerbt wird, oder auf den Standardwert, der durch das Stylesheet des Benutzeragenten festgelegt wurde (oder durch Benutzerstyles, falls vorhanden).
- {{cssxref("revert-layer")}}
  - : Setzt den Wert einer Eigenschaft in einer [Kaskadenschicht](/de/docs/Web/CSS/@layer) auf den Wert der Eigenschaft in einer CSS-Regel zurück, die dem Element in einer vorherigen Kaskadenschicht entspricht. Der Wert der Eigenschaft mit diesem Schlüsselwort wird neu berechnet, als ob keine Regeln auf das Ziel-Element in der aktuellen Kaskadenschicht spezifiziert wurden.

## URLs

Ein {{cssxref("url_value", "&lt;url&gt;")}}-Typ verwendet funktionale Notation, die ein `<string>` akzeptiert, das eine URL ist. Dies kann eine absolute oder eine relative URL sein. Wenn Sie zum Beispiel ein Hintergrundbild einfügen möchten, könnten Sie eine der folgenden verwenden:

```css
.box {
  background-image: url("images/my-background.png");
}

.box {
  background-image: url("https://www.exammple.com/images/my-background.png");
}
```

Der Parameter für `url()` kann entweder zitiert oder unzitiert sein. Wenn er unzitiert ist, wird er als `<url-token>` analysiert, was zusätzliche Anforderungen einschließlich des Entkommens bestimmter Zeichen beinhaltet. Weitere Informationen finden Sie unter {{cssxref("url_value", "&lt;url&gt;")}}.

## Siehe auch

- [Numerische Datentypen](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types)
- [CSS-Datentypen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types)
- Modul [CSS-Werte und -Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units)
- [Lernen: Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
- Modul [CSS-Kaskade und Vererbung](/de/docs/Web/CSS/CSS_cascade)
