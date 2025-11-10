---
title: Textuelle Datentypen
slug: Web/CSS/Guides/Values_and_units/Textual_data_types
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Jede CSS-Deklaration besteht aus einem Paar von Eigenschaft/Wert. Der Wert kann je nach Eigenschaft verschiedene Datentypen enthalten, wie z.B. ein einzelnes Schlüsselwort, eine Ganzzahl, eine Funktion oder eine Kombination aus verschiedenen Typen; einige Werte haben Einheiten, während andere keine haben. Dieser Leitfaden bietet einen Überblick über die textuellen Datentypen. Weitere detaillierte Informationen finden Sie auf der Seite für jeden Wertetyp.

Textdatentypen sind entweder {{cssxref("&lt;string&gt;")}}, eine zitierte Zeichenfolge, ein {{cssxref("&lt;ident&gt;")}}, ein "CSS-Identifier", der eine unzitierte Zeichenfolge ist, oder ein optional zitierter {{cssxref("url_value", "&lt;url&gt;")}}. Ein `<string>` wird entweder mit einfachen oder doppelten Anführungszeichen zitiert. CSS-Identifier, die in den Spezifikationen als `<ident>` oder {{cssxref("&lt;custom-ident&gt;")}} aufgeführt sind, müssen unzitiert sein.

In CSS-Spezifikationen werden Werte, die vom Webentwickler definiert werden können — wie zum Beispiel Keyframe-Animationsnamen, Schriftfamiliennamen oder Rasterbereiche — als {{cssxref("&lt;custom-ident&gt;")}}, {{cssxref("&lt;string&gt;")}} oder beides aufgeführt.

Wenn sowohl zitierte als auch unzitierte benutzerdefinierte Textwerte erlaubt sind, wird die Spezifikation `<custom-ident> | <string>` auflisten, was bedeutet, dass Anführungszeichen optional sind, wie im Fall von [Keyframe-Animationsnamen]:

```css
@keyframes validIdent {
  /* keyframes go here */
}
@keyframes 'validString' {
  /* keyframes go here */
}
```

Einige Textwerte sind nicht gültig, wenn sie in Anführungszeichen gesetzt werden. Zum Beispiel kann der Wert von {{cssxref("grid-area")}} ein `<custom-ident>` sein, daher würden wir, wenn wir einen Rasterbereich namens `content` hätten, diesen ohne Anführungszeichen verwenden:

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

Obwohl Sie im Allgemeinen jeden gewünschten Namen erstellen können, einschließlich der Verwendung von Emojis, darf der Bezeichner nicht `none`, `unset`, `initial` oder `inherit` sein, nicht mit einer Ziffer oder zwei Bindestrichen beginnen und im Allgemeinen sollte er kein anderer vordefinierter CSS-Schlüsselbegriff sein. Weitere Details finden Sie in den Referenzseiten von {{cssxref("&lt;custom-ident&gt;")}} und {{cssxref("&lt;string&gt;")}}.

## Vordefinierte Schlüsselwortwerte

Vordefinierte Schlüsselwörter sind Textwerte, die von der Spezifikation für diese Eigenschaft definiert sind. Diese Schlüsselwörter sind ebenfalls CSS-Identifier und werden daher ohne Anführungszeichen verwendet.

Beim Betrachten der CSS-Eigenschaftswerte-Syntax in einer CSS-Spezifikation oder auf der MDN-Eigenschaftsseite werden zulässige Schlüsselwörter in folgender Form aufgelistet. Die folgenden {{Glossary("enumerated", "aufgezählten")}} Werte sind die vordefinierten Schlüsselwortwerte, die für {{cssxref("float")}} erlaubt sind.

```plain
left | right | none | inline-start | inline-end
```

Solche Werte werden ohne Anführungszeichen verwendet:

```css
.box {
  float: left;
}
```

## CSS-weit gültige Schlüsselwörter

Zusätzlich zu den vordefinierten Schlüsselwörtern, die Teil der Spezifikation für eine Eigenschaft sind, akzeptieren alle CSS-Eigenschaften die CSS-weiten, oder "globalen", Eigenschaftswerte {{cssxref("initial")}}, {{cssxref("inherit")}}, {{cssxref("unset")}}, {{cssxref("revert")}} und {{cssxref("revert-layer")}}, die explizit Standardverhalten angeben.

- {{cssxref("initial")}}
  - : Repräsentiert den als Anfangswert der Eigenschaft angegebenen Wert.
- {{cssxref("inherit")}}
  - : Repräsentiert den berechneten Wert der Eigenschaft des Eltern-Elements, sofern diese vererbt wird.
- {{cssxref("unset")}}
  - : Wirkt entweder wie `inherit` oder `initial`, abhängig davon, ob die Eigenschaft vererbt wird oder nicht.
- {{cssxref("revert")}}
  - : Setzt die Eigenschaft auf ihren vererbten Wert zurück, wenn sie vom Elternteil erbt, oder auf den Standardwert, der durch das Stylesheet des Benutzeragenten festgelegt wurde (oder durch Benutzerstile, falls vorhanden).
- {{cssxref("revert-layer")}}
  - : Setzt den Wert einer Eigenschaft in einer [Kaskadenschicht](/de/docs/Web/CSS/Reference/At-rules/@layer) auf den Wert der Eigenschaft in einer CSS-Regel zurück, die das Element in einer vorherigen Kaskadenschicht trifft. Der Wert der Eigenschaft mit diesem Schlüsselwort wird neu berechnet, als ob keine Regeln auf das Ziel-Element in der aktuellen Kaskadenschicht spezifiziert wären.

## URLs

Ein {{cssxref("url_value", "&lt;url&gt;")}}-Typ verwendet die funktionale Notation, die ein `<string>` akzeptiert, das eine URL ist. Dies kann eine absolute URL oder eine relative URL sein. Möchten Sie beispielsweise ein Hintergrundbild einfügen, könnten Sie eine der folgenden Möglichkeiten verwenden:

```css
.box {
  background-image: url("images/my-background.png");
}

.box {
  background-image: url("https://www.exammple.com/images/my-background.png");
}
```

Der Parameter für `url()` kann entweder zitiert oder unzitiert sein. Wenn unzitiert, wird es als `<url-token>` geparst, welches zusätzliche Anforderungen hat, einschließlich des Escapens bestimmter Zeichen. Weitere Informationen finden Sie unter {{cssxref("url_value", "&lt;url&gt;")}}.

## Siehe auch

- [Numerische Datentypen](/de/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types)
- [CSS-Datentypen](/de/docs/Web/CSS/Reference/Values/Data_types)
- [CSS-Werte und -Einheiten](/de/docs/Web/CSS/Guides/Values_and_units) Modul
- [Lernen: Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
- [CSS-Kaskade und Vererbung](/de/docs/Web/CSS/Guides/Cascade) Modul
