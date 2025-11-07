---
title: Textuelle Datentypen
slug: Web/CSS/CSS_values_and_units/Textual_data_types
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Jede CSS-Deklaration besteht aus einem Paar aus Eigenschaft und Wert. Der Wert kann je nach Eigenschaft verschiedene Datentypen umfassen, wie ein einzelnes Schlüsselwort, eine Ganzzahl, eine Funktion oder eine Kombination unterschiedlicher Typen; einige Werte haben Einheiten, andere nicht. Dieser Leitfaden bietet einen Überblick über die textuellen Datentypen. Verweisen Sie für detailliertere Informationen auf die Seite für jeden Werttyp.

Textdaten-Typen sind entweder {{cssxref("&lt;string&gt;")}}, eine in Anführungszeichen gesetzte Reihe von Zeichen, ein {{cssxref("&lt;ident&gt;")}}, ein „CSS-Identifier“, der eine nicht in Anführungszeichen gesetzte Zeichenkette ist, oder ein optional in Anführungszeichen gesetzter {{cssxref("url_value", "&lt;url&gt;")}}. Ein `<string>` wird entweder mit einfachen oder doppelten Anführungszeichen eingeschlossen. CSS-Identifier, die in den Spezifikationen als `<ident>` oder {{cssxref("&lt;custom-ident&gt;")}} aufgelistet sind, dürfen nicht in Anführungszeichen stehen.

In den CSS-Spezifikationen sind Werte, die vom Webentwickler definiert werden können — wie Keyframe-Animationsnamen, Schriftfamiliennamen oder Grid-Bereiche — als {{cssxref("&lt;custom-ident&gt;")}}, {{cssxref("&lt;string&gt;")}} oder beides aufgeführt.

Wenn sowohl in Anführungszeichen gesetzte als auch nicht in Anführungszeichen gesetzte vom Benutzer definierte Textwerte zulässig sind, listet die Spezifikation `<custom-ident> | <string>` auf, was bedeutet, dass Anführungszeichen optional sind, wie es bei [Keyframe-Animationsnamen] der Fall ist:

```css
@keyframes validIdent {
  /* keyframes go here */
}
@keyframes 'validString' {
  /* keyframes go here */
}
```

Einige Textwerte sind nicht gültig, wenn sie in Anführungszeichen gesetzt sind. Zum Beispiel kann der Wert von {{cssxref("grid-area")}} ein `<custom-ident>` sein, sodass wenn wir einen Grid-Bereich namens `content` hätten, würden wir ihn ohne Anführungszeichen verwenden:

```css
.item {
  grid-area: content;
}
```

Im Vergleich dazu muss ein Datentyp, der ein {{cssxref("&lt;string&gt;")}} ist, wie ein String-Wert der {{cssxref("content")}} Eigenschaft, in Anführungszeichen gesetzt werden:

```css
.item::after {
  content: "This is my content.";
}
```

Obwohl Sie im Allgemeinen jeden beliebigen Namen erstellen können, einschließlich der Verwendung von Emojis, darf der Identifizierer nicht `none`, `unset`, `initial` oder `inherit` sein, nicht mit einer Ziffer oder zwei Bindestrichen beginnen und im Allgemeinen sollte er kein anderes vordefiniertes CSS-Schlüsselwort sein. Siehe die {{cssxref("&lt;custom-ident&gt;")}} und {{cssxref("&lt;string&gt;")}} Referenzseiten für mehr Details.

## Vordefinierte Schlüsselwortwerte

Vordefinierte Schlüsselwörter sind Textwerte, die in der Spezifikation für diese Eigenschaft definiert sind. Diese Schlüsselwörter sind ebenfalls CSS-Identifier und werden daher ohne Anführungszeichen verwendet.

Wenn Sie die CSS-Eigenschaftswerts-Syntax in einer CSS-Spezifikation oder der MDN-Eigenschaftsseite betrachten, werden zulässige Schlüsselwörter in folgender Form aufgelistet. Die folgenden {{Glossary("enumerated", "aufgezählten")}} Werte sind die vordefinierten Schlüsselwortwerte, die für {{cssxref("float")}} zulässig sind.

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

Zusätzlich zu den vordefinierten Schlüsselwörtern, die Teil der Spezifikation für eine Eigenschaft sind, akzeptieren alle CSS-Eigenschaften die CSS-weiten oder „globalen“ Eigenschaftswerte {{cssxref("initial")}}, {{cssxref("inherit")}}, {{cssxref("unset")}}, {{cssxref("revert")}} und {{cssxref("revert-layer")}}, die explizit das Standardverhalten spezifizieren.

- {{cssxref("initial")}}
  - : Repräsentiert den Wert, der als Anfangswert der Eigenschaft festgelegt ist.
- {{cssxref("inherit")}}
  - : Repräsentiert den berechneten Wert der Eigenschaft des Elternelements, vorausgesetzt, sie wird vererbt.
- {{cssxref("unset")}}
  - : Wirkt als entweder `inherit` oder `initial`, abhängig davon, ob die Eigenschaft vererbt wird oder nicht.
- {{cssxref("revert")}}
  - : Setzt die Eigenschaft auf ihren geerbten Wert zurück, wenn sie vom Elternteil geerbt wird, oder auf den Standardwert, der durch das Stylesheet des Benutzer-Agenten (oder von Benutzerstilen, falls vorhanden) festgelegt wird.
- {{cssxref("revert-layer")}}
  - : Setzt den Wert einer Eigenschaft in einer [Cascade Layer](/de/docs/Web/CSS/Reference/At-rules/@layer) auf den Wert der Eigenschaft in einer CSS-Regel zurück, die das Element in einer vorherigen Cascade Layer trifft. Der Wert der Eigenschaft mit diesem Schlüsselwort wird neu berechnet, als ob keine Regeln auf das Ziel-Element in der aktuellen Cascade Layer angewendet wurden.

## URLs

Ein {{cssxref("url_value", "&lt;url&gt;")}} Typ verwendet funktionale Notation, die ein `<string>` akzeptiert, das eine URL ist. Dies kann eine absolute URL oder eine relative URL sein. Zum Beispiel, wenn Sie ein Hintergrundbild einfügen möchten, könnten Sie eine der folgenden Möglichkeiten verwenden:

```css
.box {
  background-image: url("images/my-background.png");
}

.box {
  background-image: url("https://www.exammple.com/images/my-background.png");
}
```

Der Parameter für `url()` kann entweder in Anführungszeichen oder nicht in Anführungszeichen stehen. Wenn nicht in Anführungszeichen, wird er als `<url-token>` geparst, das zusätzliche Anforderungen hat, einschließlich des Escape bestimmter Zeichen. Weitere Informationen finden Sie unter {{cssxref("url_value", "&lt;url&gt;")}}.

## Siehe auch

- [Numerische Datentypen](/de/docs/Web/CSS/CSS_values_and_units/Numeric_data_types)
- [CSS-Datentypen](/de/docs/Web/CSS/Reference/Values/Data_types)
- [CSS-Werte und Einheiten](/de/docs/Web/CSS/CSS_values_and_units) Modul
- [Lernen: Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
- [CSS-Kaskade und Vererbung](/de/docs/Web/CSS/CSS_cascade) Modul
