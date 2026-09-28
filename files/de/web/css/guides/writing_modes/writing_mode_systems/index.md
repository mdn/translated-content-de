---
title: Einführung in Schreibmodussysteme
short-title: Introduction
slug: Web/CSS/Guides/Writing_modes/Writing_mode_systems
l10n:
  sourceCommit: b7e9f482c51817d3a885e26092f8219fd0d9d278
---

CSS unterstützt verschiedene Schreibrichtungen oder **Schreibmodi**, darunter rechts nach links, links nach rechts und oben nach unten. Dieser Leitfaden gibt einen kurzen Überblick über Schreibmodussysteme und ihre Richtungen.

## Block und Inline

Bevor Sie die Richtungen verschiedener Schriftsysteme betrachten, sollten Sie die Begriffe „Block“ und „Inline“ kennen. **Inline** beschreibt, wie Zeichen und Wörter innerhalb einer Zeile angeordnet sind. **Block** beschreibt, wie Zeilen oder Inhaltsblöcke nebeneinander angeordnet sind. Der Schreibmodus eines Dokuments bestimmt dessen Block- und Inline-Richtung. Diese Richtungen sind nicht an physische Richtungen wie links, rechts, oben und unten gebunden.

### Dimensionen und Richtungen

Alles auf einer Webseite wird entweder in der **Inline-** oder der **Blockdimension** angeordnet. Die _Inline-Dimension_ ist die Dimension, entlang der eine Textzeile im aktuellen Schreibmodus verläuft. Die _Blockdimension_ ist die Dimension, in der Blöcke – etwa Absätze – aufeinanderfolgen. Die Inline-Dimension steht senkrecht zur Blockdimension.

In einem englischen Dokument mit horizontal von links nach rechts verlaufendem Text oder einem arabischen Dokument mit horizontal von rechts nach links verlaufendem Text ist die Inline-Dimension horizontal. Die _Inline-Richtung_ verläuft dabei jeweils von links nach rechts beziehungsweise von rechts nach links. In beiden Fällen ist die Blockdimension vertikal und die _Blockrichtung_ verläuft von oben nach unten. In einem vertikalen Schreibmodus wie dem Japanischen ist die Inline-Dimension vertikal, da die Zeilen vertikal verlaufen; die Blockdimension ist dagegen horizontal.

### Inline- und Block-Boxen

Der _äußere Display-Typ_ von Boxen in einem [Layout mit normalem Fluss](/de/docs/Web/CSS/Guides/Display/Visual_formatting_model#normal_flow) bestimmt, wie sich eine Box gegenüber anderen Elementen auf der Seite verhält. _Inline-Boxen_ umschließen jeweils eine Textzeile und werden entlang der Inline-Dimension angeordnet.

_Block-Boxen_ sind Container auf der Seite, die weitere Block- und Inline-Elemente enthalten können. Sie werden entlang der Blockdimension angeordnet und dehnen sich in der Inline-Dimension aus, bis sie den gesamten verfügbaren Platz in ihrem Container ausfüllen – sofern in der Inline-Dimension nicht mit einer Eigenschaft wie {{cssxref("inline-size")}} eine bestimmte Größe festgelegt wurde. Block-Boxen werden nur dann von oben nach unten auf der Seite angeordnet, wenn Sie einen Schreibmodus verwenden, der Text horizontal darstellt, wie etwa im Englischen.

Das [CSS-Modul für logische Eigenschaften und Werte](/de/docs/Web/CSS/Guides/Logical_properties_and_values#properties) definiert {{Glossary("flow_relative_values", "flussrelative Zuordnungen")}} für viele der {{Glossary("physical_properties", "physischen Eigenschaften")}} und Werte in CSS. Das hilft dabei, die [Grundkonzepte logischer Eigenschaften und Werte](/de/docs/Web/CSS/Guides/Logical_properties_and_values/Basic_concepts) zu verstehen.

### Inline-Grundrichtung und Blockflussrichtung

Die _Inline-Grundrichtung_ ist die primäre Richtung, in der Inhalte innerhalb einer Zeile angeordnet werden. Sie definiert den „Anfang“ und das „Ende“ einer Zeile. Die Eigenschaft {{cssxref("direction")}} legt die Inline-Grundrichtung einer Box fest. Zusammen mit der Eigenschaft {{cssxref("unicode-bidi")}} und der inhärenten Schreibrichtung des Textinhalts bestimmt sie die Reihenfolge von Inhalten auf Inline-Ebene innerhalb einer Zeile.

Die _Blockflussrichtung_ ist die Richtung, in der Boxen auf Block-Ebene und Zeilen-Boxen innerhalb eines Block-Containers angeordnet werden. Die Eigenschaft {{cssxref("writing-mode")}} bestimmt die Blockflussrichtung.

## Schreibmodi verschiedener Schriftsysteme

Verschiedene Schriftsysteme verwenden unterschiedliche Schreibmodi. Bei einem horizontalen Schreibmodus verlaufen die Textzeilen horizontal; der Blockfluss verläuft also nach unten oder oben. Bei einem vertikalen Schreibmodus verlaufen die Textzeilen vertikal; der Blockfluss verläuft also nach links oder rechts.

Lateinische und slawische Schriftsysteme werden üblicherweise mit einer Inline-Richtung von links nach rechts und einer Blockflussrichtung von oben nach unten geschrieben. Zu den Sprachen mit lateinischer Schrift gehören Englisch, Spanisch, Rumänisch und Portugiesisch. Zu den Sprachen mit slawischer Schrift gehören Ukrainisch, Polnisch und Tschechisch.

```html
<p lang="en-US" dir="auto">This is written in English</p>
<p lang="lt-LT" dir="auto">Tai parašyta lietuviu kalba</p>
<p lang="el-GR" dir="auto">Αυτό είναι γραμμένο στα ελληνικά</p>
```

Arabische Schriftsysteme werden üblicherweise mit einer Inline-Richtung von rechts nach links und einer Blockflussrichtung von oben nach unten geschrieben. Zu den horizontal von rechts nach links geschriebenen Sprachen gehören unter anderem Arabisch, Aramäisch, Aserbaidschanisch, Dhivehi, Fulfulde, Hebräisch, Kurdisch, N’Ko, Persisch, Rohingya, Syrisch und Urdu.

```html
<p lang="ur-PK" dir="auto">یہ اردو میں لکھا ہے۔</p>
<p lang="ku-CRB" dir="auto">ئەمە بە کوردی نووسراوە</p>
```

Auf Han-Zeichen basierende Schriftsysteme werden häufig mit einer Inline-Richtung von links nach rechts und einer Blockflussrichtung von oben nach unten geschrieben oder mit einer Inline-Richtung von oben nach unten und einer Blockflussrichtung von rechts nach links. Traditionell werden Chinesisch, Vietnamesisch, Koreanisch und Japanisch vertikal in Spalten von oben nach unten geschrieben, wobei die Blockrichtung von rechts nach links verläuft. Online werden sie jedoch oft horizontal von links nach rechts dargestellt.

```html
<p lang="ja-JP" dir="auto">これは日本語で書かれています</p>
```

Mongolische Schriftsysteme werden üblicherweise vertikal von oben nach unten in Spalten geschrieben, die von links nach rechts verlaufen. Die Inline-Richtung verläuft dabei von oben nach unten und die Blockflussrichtung von links nach rechts. Dies unterscheidet sich von Chinesisch, Japanisch und Koreanisch, deren vertikale Textspalten von rechts nach links gelesen werden. Der Unterschied ist darauf zurückzuführen, dass die mongolische Schrift von der alttürkischen uigurischen Schrift abstammt, die von links nach rechts geschrieben wurde.

```html
<p lang="mn-Mong" dir="auto">ᠡᠭᠦᠨ ᠢ ᠮᠣᠩᠭᠤᠯ ᠬᠡᠯᠡ ᠪᠠᠷ ᠪᠢᠴᠢᠵᠡᠢ</p>
```

Um die Schreibmodi korrekt darzustellen, verwenden wir das globale HTML-Attribut [`dir`](/de/docs/Web/HTML/Reference/Global_attributes/dir). Da Browser CSS-Stile deaktivieren können, empfiehlt es sich, das Attribut `dir` und das Element {{htmlelement("bdo")}} statt der CSS-Eigenschaft {{cssxref("direction")}} zu verwenden. So bleibt das bidirektionale Layout auch ohne Stylesheet korrekt.

Für vertikal geschriebene Sprachen verwenden wir die Eigenschaften {{cssxref("writing-mode")}} und {{cssxref("text-orientation")}}:

```css hidden
@import "https://fonts.googleapis.com/css2?family=Noto+Sans+Mongolian&display=swap";
```

```css
:lang(ja) {
  writing-mode: vertical-rl;
  text-orientation: mixed;
}
:lang(mn-Mong) {
  writing-mode: vertical-lr;
  text-orientation: mixed;
}
```

{{EmbedLiveSample("Writing system modes", "100%", "500")}}

```css hidden
:lang(ja),
:lang(mn-Mong) {
  float: left;
}

:lang(mn-Mong) {
  font-family: "Noto Sans Mongolian", sans-serif;
}
```

## Schreibmodi mischen

Obwohl diese Sprachen unterschiedliche Schreibmodi verwenden, können Websites, die überwiegend einen Schreibmodus nutzen, Inhalte in einer anderen Sprache oder einem anderen Schreibmodus enthalten. Beispielsweise können Artikel auf einer arabischsprachigen Nachrichtenseite, deren Text von rechts nach links verläuft, Zahlen im lateinischen Stil enthalten, die von links nach rechts geschrieben werden. Viele Zeitschriften und Zeitungen mischen verschiedene Schreibmodi auf derselben Seite. Das gilt auch für diesen Leitfaden, der verschiedene Schreibmodi veranschaulicht.

Der typografische Modus bestimmt, ob für vertikale Schriften die typografischen Konventionen des vertikalen Flusses (vertikaler typografischer Modus) oder die Konventionen horizontaler Schreibmodi (horizontaler typografischer Modus) verwendet werden. Dieses Konzept unterscheidet vertikalen Satz von gedrehtem horizontalem Satz.

Die Komponente `text-orientation` des Schreibmodus steuert die Ausrichtung der Glyphen in vertikalen typografischen Modi. Sie bestimmt, ob ein bestimmtes typografisches Zeichen aufrecht oder seitlich gesetzt wird.

## Siehe auch

- Modul [CSS-Schreibmodi](/de/docs/Web/CSS/Guides/Writing_modes)
