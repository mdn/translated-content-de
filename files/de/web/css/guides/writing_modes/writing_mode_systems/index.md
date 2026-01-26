---
title: Einführung in Schriftsysteme
short-title: Introduction
slug: Web/CSS/Guides/Writing_modes/Writing_mode_systems
l10n:
  sourceCommit: 5bbfe12789861f4352cf0e63643bd329c56d7821
---

CSS unterstützt verschiedene Schreibrichtungen oder **Schreibmodi**, einschließlich von rechts nach links, von links nach rechts und von oben nach unten. Der Leitfaden bietet einen kurzen Überblick über Schriftsysteme und deren Richtungen.

## Block und inline

Bevor Sie sich mit der Richtung verschiedener Schriftsysteme befassen, ist es wichtig, die Begriffe "Block" und "inline" zu verstehen. Der Begriff **inline** bezieht sich darauf, wie Zeichen und Wörter innerhalb einer Zeile fließen. Der Begriff **Block** bezieht sich darauf, wie Zeilen oder Inhaltsblöcke nebeneinander gestapelt werden. Der Schreibmodus des Dokuments bestimmt die Block- und Inlinerichtungen eines Dokuments. Sie basieren nicht auf physischen Richtungen wie links, rechts, oben und unten.

### Dimensionen und Richtungen

Alles auf einer Webseite ist entweder in der **inline**- oder **Block**-Dimension angeordnet. Die _inline-Dimension_ ist die Dimension, entlang derer eine Textzeile im aktuellen Schreibmodus verläuft, während die _Block-Dimension_ die Dimension ist, in der Blöcke — wie Absätze — nacheinander angezeigt werden. Die inline-Dimension ist senkrecht zur Block-Dimension.

In einem englischen Dokument, bei dem der Text horizontal von links nach rechts verläuft, oder einem arabischen Dokument, bei dem der Text horizontal von rechts nach links verläuft, ist die inline-Dimension horizontal, wohingegen die _inline-Richtung_ von links nach rechts bzw. von rechts nach links ist. In beiden Fällen ist die Block-Dimension vertikal, mit der _Block-Richtung_ von oben nach unten. In einem vertikalen Schreibmodus wie Japanisch ist die inline-Dimension vertikal, da Zeilen in diesem Schreibmodus vertikal verlaufen, während die Block-Dimension horizontal ist.

### Inline- und Block-Boxen

Der _äußere Anzeige_-Typ von Boxen in einem [normal fließenden Layout](/de/docs/Web/CSS/Guides/Display/Visual_formatting_model#normal_flow) bestimmt, wie sich die Box neben anderen Elementen auf der Seite verhält. _Inline-Boxen_ umfassen jede Textzeile und werden entlang der inline-Dimension angeordnet.

_Block-Boxen_ stellen Container auf der Seite dar, die andere Block- und Inline-Elemente enthalten können. Sie werden entlang der Block-Dimension angeordnet und erstrecken sich in der inline-Dimension, um den gesamten verfügbaren Raum in ihrem Container auszufüllen (vorausgesetzt, dass in der inline-Dimension keine spezifische Größe mit einer Eigenschaft wie {{cssxref("inline-size")}} festgelegt ist). Block-Boxen werden nur von oben nach unten auf der Seite angezeigt, wenn Sie einen Schreibmodus verwenden, der Text horizontal anzeigt, wie Englisch.

Das [CSS-Logische Eigenschaften- und Werte-Modul](/de/docs/Web/CSS/Guides/Logical_properties_and_values#properties) definiert {{Glossary("flow_relative_values", "flussrelative Zuordnungen")}} für viele der {{Glossary("physical_properties", "physischen Eigenschaften")}} und Werte in CSS, was hilfreich ist, um die [Grundkonzepte von logischen Eigenschaften und Werten](/de/docs/Web/CSS/Guides/Logical_properties_and_values/Basic_concepts) zu verstehen.

### Inline-Basis- und Blockfluss-Richtungen

Die _Inline-Basisrichtung_ ist die Hauptrichtung, in der Inhalt in einer Zeile angeordnet wird und definiert den "Anfang" und das "Ende" einer Zeile. Die {{cssxref("direction")}}-Eigenschaft legt die Inline-Basisrichtung einer Box fest und bestimmt zusammen mit der {{cssxref("unicode-bidi")}}-Eigenschaft und der inhärenten Richtung jeder Textinhalt die Anordnung des Inline-Contents innerhalb einer Zeile.

Die _Blockfluss-Richtung_ ist die Richtung, in der Block- und Zeilen-Boxen innerhalb eines Block-Containers gestapelt werden. Die {{cssxref("writing-mode")}}-Eigenschaft bestimmt die Blockfluss-Richtung.

## Schreibsystem-Modi

Verschiedene Schriftsysteme haben unterschiedliche Schreibmodi. Ein horizontaler Schreibmodus ist einer mit horizontalen Textzeilen, d.h. ein abwärts oder aufwärts gerichteter Blockfluss. Ein vertikaler Schreibmodus ist einer mit vertikalen Textzeilen, d.h. ein nach links oder rechts gerichteter Blockfluss.

Lateinische und slawische Schriftsysteme werden typischerweise mit einer Inline-Richtung von links nach rechts und einem Blockfluss von oben nach unten geschrieben. Zu den lateinbasierten Sprachen gehören Englisch, Spanisch, Rumänisch und Portugiesisch. Zu den slawischen Sprachen gehören Ukrainisch, Polnisch und Tschechisch.

```html
<p lang="en-US" dir="auto">This is written in English</p>
<p lang="lt-LT" dir="auto">Tai parašyta lietuviu kalba</p>
<p lang="el-GR" dir="auto">Αυτό είναι γραμμένο στα ελληνικά</p>
```

Arabisch-basierte Systeme werden typischerweise mit einer Inline-Richtung von rechts nach links und einem Blockfluss von oben nach unten geschrieben. Es gibt mehrere horizontale Sprachen von rechts nach links, einschließlich Arabisch, Aramäisch, Aserbaidschanisch, Divehi, Fulani, Hebräisch, Kurdisch, N'ko, Persisch, Rohingya, Syrisch und Urdu.

```html
<p lang="ur-PK" dir="auto">یہ اردو میں لکھا ہے۔</p>
<p lang="ku-CRB" dir="auto">ئەمە بە کوردی نووسراوە</p>
```

Han-basierte Systeme werden häufig mit einer Inline-Richtung von links nach rechts und einem Blockfluss von oben nach unten oder mit einer Inline-Richtung von oben nach unten und einem Blockfluss von rechts nach links geschrieben. Traditionell werden Chinesisch, Vietnamesisch, Koreanisch und Japanisch vertikal in Spalten geschrieben, die von oben nach unten verlaufen, mit einer rechts-nach-links-Blockrichtung, aber oft horizontal im Internet dargestellt, von links nach rechts.

```html
<p lang="ja-JP" dir="auto">これは日本語で書かれています</p>
```

Mongolische Systeme werden typischerweise vertikal, von oben nach unten, in Spalten geschrieben, die von links nach rechts verlaufen; eine Inline-Richtung von oben nach unten mit einer Blockfluss-Richtung von links nach rechts. Dies unterscheidet sich von Chinesisch, Japanisch und Koreanisch, deren vertikale Textspalten von rechts nach links gelesen werden. Dies ergibt sich aus der Tatsache, dass die mongolische Schrift aus dem alten uigurischen Schriftsystem stammt, das von links nach rechts geschrieben wurde.

```html
<p lang="mn-MONG" dir="auto">Үүнийг монгол хэлээр бичжээ</p>
```

Um die Schreibmodi korrekt darzustellen, verwenden wir das globale HTML-Attribut [`dir`](/de/docs/Web/HTML/Reference/Global_attributes/dir). Da Browser CSS-Styling ausschalten können, wird empfohlen, das `dir`-Attribut und das {{htmlelement("bdo")}}-Element zu verwenden, um das richtige bidirektionale Layout in Abwesenheit eines Stylesheets sicherzustellen, anstelle der CSS-{{cssxref("direction")}}-Eigenschaft.

Für vertikale Sprachen verwenden wir die {{cssxref("writing-mode")}}- und {{cssxref("text-orientation")}}-Eigenschaften:

```css
[lang|="ja"] {
  writing-mode: vertical-rl;
  text-orientation: upright;
}
[lang|="mn"] {
  writing-mode: vertical-lr;
  text-orientation: sideways;
}
```

{{EmbedLiveSample("Writing system modes", "100%", "500")}}

```css hidden
[lang|="ja"],
[lang|="mn"] {
  float: left;
}
```

## Mischen von Schreibmodi

Auch wenn diese verschiedenen Sprachen unterschiedliche Schreibmodi haben, können Websites, die hauptsächlich einen Schreibmodus verwenden, Inhalte einer anderen Sprache oder eines anderen Schreibmodus enthalten. Beispiele hierfür sind Artikel auf einer arabischen, von rechts nach links geschriebenen Nachrichten-Website, die lateinische Zahlen enthalten, die von links nach rechts geschrieben werden. Viele Magazine und Zeitungen mischen auf derselben Seite verschiedene Schreibmodi. Auch dieser Leitfaden, der verschiedene Schreibmodi demonstriert, tut dies.

Der typografische Modus bestimmt, ob typografische Konventionen spezifisch für den vertikalen Fluss für vertikale Schriften (vertikaler typografischer Modus) verwendet werden oder ob die typografischen Konventionen der horizontalen Schreibmodi (horizontaler typografischer Modus) verwendet werden. Dieses Konzept unterscheidet vertikale Schriftsetzung von gedrehter horizontaler Schriftsetzung.

Die Komponente `text-orientation` des Schreibmodus steuert die Zeichenorientierung in vertikalen typografischen Modi, indem sie vorgibt, ob eine bestimmte typografische Zeicheneinheit aufrecht gesetzt oder seitlich gesetzt wird.

## Siehe auch

- [CSS-Schreibmodi](/de/docs/Web/CSS/Guides/Writing_modes) Modul
