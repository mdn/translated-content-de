---
title: CSS-Werte und Einheiten
slug: Web/CSS/CSS_Values_and_Units
l10n:
  sourceCommit: a075805de90029b65fa5cfcc8ea43737728320f5
---

{{CSSRef}}

Jede CSS-Deklaration enthält ein Paar aus Eigenschaft und Wert. Der Wert kann, je nach Eigenschaft, von einer einzelnen Ganzzahl oder einem Schlüsselwort bis hin zu einer Reihe von Schlüsselwörtern und Werten mit oder ohne Einheiten reichen. Es gibt eine gemeinsame Menge an Datentypen — Werte und Einheiten —, die CSS-Eigenschaften akzeptieren. Nachfolgend finden Sie einen Überblick über die meisten dieser Datentypen. Konsultieren Sie die jeweilige Seite für jeden Werttyp für detailliertere Informationen.

## Textuelle Datentypen

- {{cssxref("&lt;custom-ident&gt;")}}
- Vordefinierte Schlüsselwörter als `<ident>`
- {{cssxref("&lt;string&gt;")}}
- {{cssxref("url_value", "&lt;url&gt;")}}

Text-Datentypen sind entweder `<string>`, eine zitierte Zeichenfolge, oder ein `<ident>`, ein "CSS Identifier", der eine nicht-zitierte Zeichenfolge ist. Ein `<string>` muss entweder mit einfachen oder doppelten Anführungszeichen umschlossen sein. CSS-Identifikatoren, die in den Spezifikationen als `<ident>` oder `<custom-ident>` aufgeführt sind, dürfen nicht in Anführungszeichen stehen.

In den CSS-Spezifikationen werden Werte, die vom Webentwickler definiert werden können, wie Keyframe-Animationen, Schriftfamiliennamen oder Rasterbereiche, als {{cssxref("&lt;custom-ident&gt;")}}, {{cssxref("&lt;string&gt;")}} oder beides aufgeführt.

Wenn sowohl zitierte als auch nicht-zitierte, benutzerdefinierte Textwerte zulässig sind, wird in der Spezifikation `<custom-ident> | <string>` aufgeführt, was bedeutet, dass Anführungszeichen optional sind, wie zum Beispiel bei Animationsnamen:

```css
@keyframe validIdent {
  /* keyframes go here */
}
@keyframe 'validString' {
  /* keyframes go here */
}
```

Einige Textwerte sind nicht gültig, wenn sie in Anführungszeichen gesetzt werden. Zum Beispiel kann der Wert von {{cssxref("grid-area")}} ein `<custom-ident>` sein. Wenn wir ein Rasterbereich mit dem Namen `content` hätten, würden wir ihn ohne Anführungszeichen verwenden:

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

Obwohl Sie im Allgemeinen jeden gewünschten Namen erstellen können, einschließlich Emojis, darf der Identifikator nicht `none`, `unset`, `initial` oder `inherit` sein, nicht mit einer Ziffer oder zwei Bindestrichen beginnen und sollte im Allgemeinen kein anderes vordefiniertes CSS-Schlüsselwort sein. Siehe die Referenzseiten zu {{cssxref("&lt;custom-ident&gt;")}} und {{cssxref("&lt;string&gt;")}} für weitere Details.

### Vordefinierte Schlüsselwortwerte

Vordefinierte Schlüsselwörter sind Textwerte, die in der Spezifikation für diese Eigenschaft definiert sind. Diese Schlüsselwörter sind ebenfalls CSS-Identifikatoren und werden daher ohne Anführungszeichen verwendet.

Wenn Sie die Syntax von CSS-Eigenschaftswerten in einer CSS-Spezifikation oder auf der MDN-Eigenschaftsseite ansehen, werden zulässige Schlüsselwörter in der folgenden Form aufgelistet. Diese Werte sind die vordefinierten Schlüsselwortwerte, die für {{cssxref("float")}} erlaubt sind.

```plain
left | right | none | inline-start | inline-end
```

Solche Werte werden ohne Anführungszeichen verwendet:

```css
.box {
  float: left;
}
```

### CSS-Globale Werte

Zusätzlich zu den vordefinierten Schlüsselwörtern, die Teil der Spezifikation einer Eigenschaft sind, akzeptieren alle CSS-Eigenschaften die CSS-weiten Eigenschaftswerte {{cssxref("initial")}}, {{cssxref("inherit")}}, {{cssxref("unset")}}, {{cssxref("revert")}} und {{cssxref("revert-layer")}}, die explizit Standardverhalten spezifizieren.

- {{cssxref("initial")}}
  - : Repräsentiert den als Standardwert der Eigenschaft festgelegten Wert.
- {{cssxref("inherit")}}
  - : Repräsentiert den berechneten Wert der Eigenschaft des Eltern-Elements, sofern die Eigenschaft vererbt wird.
- {{cssxref("unset")}}
  - : Agiert entweder als `inherit` oder `initial`, abhängig davon, ob die Eigenschaft vererbt wird oder nicht.
- {{cssxref("revert")}}
  - : Setzt die Eigenschaft auf ihren geerbten Wert zurück, wenn sie vom Elternteil geerbt wird, oder auf den Standardwert, der vom User-Agent-Stylesheet (oder von Benutzerstilen, falls vorhanden) festgelegt wurde.
- {{cssxref("revert-layer")}}
  - : Setzt den Wert einer Eigenschaft in einer [Kaskadenebene](/de/docs/Web/CSS/@layer) auf den Wert zurück, der in einer vorherigen Kaskadenebene für diese Eigenschaft definiert wurde. Der Wert der Eigenschaft mit diesem Schlüsselwort wird neu berechnet, als ob in der aktuellen Kaskadenebene keine Regeln auf das Ziel-Element angewendet würden.

### URLs

Ein {{cssxref("url_value", "&lt;url&gt;")}}-Typ verwendet eine Funktionsnotation, die einen `<string>`, der eine URL darstellt, akzeptiert. Dies kann eine absolute oder relative URL sein. Zum Beispiel könnten Sie eine Hintergrundgrafik wie folgt einfügen:

```css
.box {
  background-image: url("images/my-background.png");
}

.box {
  background-image: url("https://www.exammple.com/images/my-background.png");
}
```

Der Parameter für `url()` kann entweder zitiert oder nicht zitiert sein. Wenn er nicht zitiert ist, wird er als `<url-token>` analysiert, das zusätzliche Anforderungen hat, einschließlich des Escapens bestimmter Zeichen. Weitere Informationen finden Sie unter {{cssxref("url_value", "&lt;url&gt;")}}.

## Numerische Datentypen

- {{cssxref("&lt;integer&gt;")}}
- {{cssxref("&lt;number&gt;")}}
- {{cssxref("&lt;dimension&gt;")}}
- {{cssxref("&lt;percentage&gt;")}}

### Ganzzahlen

Eine Ganzzahl ist eine oder mehrere dezimale Ziffern, `0` bis `9`, wie `1024` oder `-55`. Eine Ganzzahl kann von einem `+`- oder `-`-Symbol vorangestellt sein, ohne Leerzeichen zwischen dem Symbol und der Ganzzahl.

### Zahlen

Ein {{cssxref("&lt;number&gt;")}} repräsentiert eine reelle Zahl, die einen Dezimalpunkt mit einer Bruchkomponente enthalten kann oder nicht, zum Beispiel `0.255`, `128` oder `-1.2`. Zahlen können ebenfalls von einem `+`- oder `-`-Symbol vorangestellt sein.

### Dimensionen

Eine {{cssxref("&lt;dimension&gt;")}} ist ein `<number>` mit einer Einheit, zum Beispiel `45deg`, `100ms` oder `10px`. Der angehängte Einheit-Identifikator ist nicht schreibweiseempfindlich. Zwischen der Zahl und dem Einheit-Identifikator darf niemals ein Leerzeichen oder andere Zeichen stehen: z. B. ist `1 cm` nicht gültig.

CSS verwendet Dimensionen, um Folgendes zu definieren:

- {{cssxref("&lt;length&gt;")}} (Distanz-Einheiten)
- {{cssxref("&lt;angle&gt;")}}
- {{cssxref("&lt;time&gt;")}}
- {{cssxref("&lt;frequency&gt;")}}
- {{cssxref("&lt;flex&gt;")}}
- {{cssxref("&lt;resolution&gt;")}}

Diese werden in den nachstehenden Abschnitten behandelt.

#### Distanz-Einheiten

Wenn eine Distanz-Einheit, auch bekannt als Länge, als Wert für eine Eigenschaft zulässig ist, wird dies als {{cssxref("&lt;length&gt;")}}-Typ beschrieben. Es gibt zwei Arten von Längen in CSS: relative und absolute. Relative Längeneinheiten geben eine Länge in Bezug auf etwas anderes an.

Es gibt zwei Arten von relativen Längen: schriftart-relative und viewport-prozentuale Längen. Beide kommen in zwei Formen vor. Schriftart-relative Längeneinheiten sind entweder lokal schriftart-relativ oder Wurzel-schriftart-relativ. Viewport-Prozent-Längen sind entweder relativ zur Höhe oder Breite des Viewports oder, wie im [CSS-Containment-Modul](/de/docs/Web/CSS/CSS_containment) definiert, relativ zu einem [Container](/de/docs/Web/CSS/CSS_containment/Container_queries#container_query_length_units).

##### Lokal schriftart-relative Längen

...

...
